---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>In this first lecture, Professor
  Strang introduces the linear algebra principles critical for understanding the
  content of the course.&nbsp; In particular, matrix-vector multiplication
  \(Ax\) and the column space of a matrix and the rank.</p> <h2
  class="subhead">Summary</h2> <p>Independent columns = basis for the column
  space<br /> Rank = number of independent columns<br /> \(A = CR\) leads to:
  Row rank equals column rank</p> <p>Related section in textbook: I.1</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: YiqIkSHSmyc
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    title: Video-YouTube-Stream
    type: Video
    uid: 9b522f2f9bce1fbbdab6d5443b985c61
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/YiqIkSHSmyc/default.jpg'
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a89323a670a4780a70e6e46a90cffc24
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: YiqIkSHSmyc
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 88301f0caa63f54a5943b22d9c7d31ae
  - id: YiqIkSHSmyc.srt
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-1-the-column-space-of-a-contains-all-vectors-ax/YiqIkSHSmyc.srt
    title: 3play caption file
    type: null
    uid: 0d25417bbdce4b511a57862dcd44f96a
  - id: YiqIkSHSmyc.pdf
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-1-the-column-space-of-a-contains-all-vectors-ax/YiqIkSHSmyc.pdf
    title: 3play pdf file
    type: null
    uid: b8b5f468f28090f3a308a28757612bbe
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 797f0525dbf0e148477cfed734f67286
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bc85d2039fd2a9abf21161d0ae556d44
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture01_300k.mp4'
    parent_uid: 716f1f5e7707703a956048aae98c3fd5
    title: Video-Internet Archive-MP4
    type: Video
    uid: c3aa6488f78920e71fd4d7cf2c3a4ad7
inline_embed_id: 59617895lecture1thecolumnspaceofacontainsallvectorsax44184714
order_index: 32
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-1-the-column-space-of-a-contains-all-vectors-ax
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-1-the-column-space-of-a-contains-all-vectors-ax
title: 'Lecture 1: The Column Space of A Contains All Vectors Ax '
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
  m="23490">GILBERT STRANG:</span> <span m="23580">Shall</span> <span
  m="23670">we</span> <span m="23760">start?</span> <span m="26130">Let</span>
  <span m="26280">me</span> <span m="26370">just</span> <span
  m="26580">say,</span> <span m="26910">this</span> <span m="27090">is</span>
  <span m="27210">a</span> <span m="27270">great</span> <span
  m="27600">adventure</span> <span m="28110">for</span> <span
  m="28290">me</span> <span m="30780">to</span> <span m="30900">be</span> <span
  m="31050">here</span> <span m="31230">all</span> <span m="31440">on</span>
  <span m="31590">my</span> <span m="31830">own,</span> <span
  m="32310">teaching</span> <span m="32790">a</span> <span
  m="32880">course</span> <span m="33720">that</span> <span
  m="33900">involves</span> <span m="34380">learning</span> <span
  m="34740">from</span> <span m="34980">data.</span> <span m="35400">So</span>
  <span m="35670">it's</span> <span m="35880">an</span> <span
  m="35940">exciting</span> <span m="36570">subject,</span> <span
  m="37650">and</span> <span m="38070">a</span> <span m="38130">lot</span> <span
  m="38520">of</span> <span m="38640">linear</span> <span
  m="39000">algebra</span> <span m="39450">goes</span> <span
  m="39720">into</span> <span m="40110">it.</span> <span m="40290">So</span>
  <span m="40660">it's</span> <span m="41250">a</span> <span
  m="41610">second</span> <span m="42030">course</span> <span
  m="42420">on</span> <span m="42540">linear</span> <span
  m="42870">algebra.</span> <span m="45960">Can</span> <span m="46290">I</span>
  <span m="46480">just--</span> <span m="49330">so</span> <span
  m="49840">there</span> <span m="50110">is</span> <span m="50320">a</span>
  <span m="50410">Stellar</span> <span m="50890">site</span> <span
  m="51370">established,</span> <span m="52900">and</span> <span
  m="53260">that</span> <span m="53560">will</span> <span m="53710">be</span>
  <span m="53920">the</span> <span m="54100">basic</span> <span
  m="54610">thing</span> <span m="54880">that</span> <span m="55060">we</span>
  <span m="55210">use.</span> <span m="56770">This</span> <span
  m="57100">is</span> <span m="57310">a</span> <span m="57430">public</span>
  <span m="58000">site--</span> <span
  m="59470">math.mit.edu/learningfromdata.</span></p><p><span
  m="65310">So</span> <span m="65530">a</span> <span m="65590">book</span> <span
  m="65890">is</span> <span m="66520">coming</span> <span
  m="68020">pretty</span> <span m="68320">quickly</span> <span
  m="69640">as</span> <span m="70060">we</span> <span m="70660">speak,</span>
  <span m="71630">or</span> <span m="72460">after</span> <span
  m="72850">we</span> <span m="73000">speak,</span> <span m="75250">and</span>
  <span m="78010">that</span> <span m="78340">site</span> <span
  m="78820">has</span> <span m="79170">the</span> <span m="79270">table</span>
  <span m="79660">of</span> <span m="79750">contents</span> <span
  m="80410">of</span> <span m="80530">the</span> <span m="80620">book,</span>
  <span m="80950">which</span> <span m="81190">would</span> <span
  m="81370">give</span> <span m="81550">you</span> <span m="81700">an</span>
  <span m="81790">idea</span> <span m="82210">of</span> <span
  m="82330">what</span> <span m="83140">could</span> <span m="83350">be</span>
  <span m="83560">in</span> <span m="83680">the</span> <span
  m="83770">course.</span> <span m="84580">And</span> <span m="84760">I</span>
  <span m="85480">printed</span> <span m="85930">out</span> <span
  m="86170">a</span> <span m="86260">copy</span> <span m="86680">for</span>
  <span m="86890">everybody</span> <span m="87730">just</span> <span
  m="88030">of</span> <span m="88150">that</span> <span m="88330">one</span>
  <span m="88570">page.</span> <span m="88980">This is</span> <span
  m="89140">probably</span> <span m="89530">the</span> <span
  m="89650">final--</span> <span m="90340">first</span> <span
  m="90730">and</span> <span m="90850">last</span> <span
  m="91240">handout--</span> <span m="92820">maybe--</span> <span
  m="93910">with</span> <span m="94610">a</span> <span m="94690">table</span>
  <span m="95020">of</span> <span m="95110">contents,</span> <span
  m="95780">which</span> <span m="95890">you'll</span> <span
  m="96100">see</span> <span m="96370">there.</span></p><p><span
  m="97930">And</span> <span m="98110">also,</span> <span
  m="98530">you'll</span> <span m="98770">see</span> <span
  m="99070">there</span> <span m="99520">the</span> <span m="99670">first</span>
  <span m="100090">two</span> <span m="100450">sections</span> <span
  m="101050">of</span> <span m="101170">the</span> <span m="101260">book,</span>
  <span m="102010">which</span> <span m="102250">is</span> <span
  m="102370">what</span> <span m="102580">I'll</span> <span
  m="102700">talk</span> <span m="102970">about</span> <span
  m="103270">today</span> <span m="104820">and</span> <span m="105310">a</span>
  <span m="105370">little</span> <span m="105610">bit</span> <span
  m="105820">into</span> <span m="106060">Friday.</span> <span
  m="107830">So</span> <span m="108040">that's</span> <span
  m="108880">linear</span> <span m="109240">algebra,</span> <span
  m="109570">of</span> <span m="109630">course,</span> <span
  m="109990">because</span> <span m="110350">the</span> <span
  m="110650">course</span> <span m="111400">begins</span> <span
  m="111970">with</span> <span m="113350">linear</span> <span
  m="113740">algebra--</span> <span m="114820">actually,</span> <span
  m="115180">things</span> <span m="115510">that</span> <span
  m="115690">you</span> <span m="115840">would</span> <span
  m="116050">know</span> <span m="116380">from</span> <span
  m="116620">18.06,</span> <span m="117640">but</span> <span
  m="119800">this</span> <span m="120100">is</span> <span m="120280">a</span>
  <span m="120370">way</span> <span m="120850">to</span> <span
  m="120970">say</span> <span m="121960">this</span> <span m="122140">is</span>
  <span m="122290">really</span> <span m="122620">important</span> <span
  m="123190">stuff.</span> <span m="124310">So</span> <span
  m="124420">that's</span> <span m="124720">what</span> <span
  m="124900">I'll</span> <span m="125080">do</span> <span
  m="125470">today.</span> <span m="126820">I'd</span> <span
  m="126970">like</span> <span m="127180">to</span> <span
  m="129580">start</span> <span m="129940">on</span> <span m="130120">the</span>
  <span m="130210">linear</span> <span m="130570">algebra</span> <span
  m="130990">today.</span></p><p><span m="133960">Here's</span> <span
  m="134280">a</span> <span m="134350">great</span> <span m="137110">fact</span>
  <span m="137530">about</span> <span m="137830">the</span> <span
  m="137920">course.</span> <span m="141310">So</span> <span
  m="141520">we</span> <span m="141670">taught</span> <span m="141940">it</span>
  <span m="142060">last</span> <span m="142450">year,</span> <span
  m="143110">several</span> <span m="143530">of</span> <span
  m="143650">us</span> <span m="143830">together,</span> <span
  m="145990">and</span> <span m="146890">we</span> <span m="147070">knew</span>
  <span m="147250">there</span> <span m="147370">wouldn't</span> <span
  m="147610">be</span> <span m="147730">a</span> <span m="147790">final</span>
  <span m="148180">exam,</span> <span m="148840">but</span> <span
  m="149290">we</span> <span m="149500">imagined</span> <span
  m="150280">there</span> <span m="150430">might</span> <span
  m="150700">be</span> <span m="152020">quizzes</span> <span
  m="152710">along</span> <span m="153070">the</span> <span
  m="153160">way.</span> <span m="153580">But</span> <span
  m="153760">then</span> <span m="153940">we</span> <span
  m="154060">couldn't</span> <span m="154330">think</span> <span
  m="154540">of</span> <span m="154630">anything</span> <span
  m="155050">to</span> <span m="155170">put</span> <span m="155380">on</span>
  <span m="155530">the</span> <span m="155620">quizzes.</span> <span
  m="156610">So</span> <span m="157240">we</span> <span
  m="158170">canceled</span> <span m="158650">those.</span> <span
  m="161590">But</span> <span m="161800">you</span> <span m="161920">do</span>
  <span m="162120">we</span> <span m="162160">learn</span> <span
  m="162520">a</span> <span m="162580">lot,</span> <span
  m="162970">nevertheless.</span> <span m="163930">And</span> <span
  m="164380">so</span> <span m="164950">I</span> <span m="165070">guess</span>
  <span m="165400">we</span> <span m="165580">base</span> <span
  m="165940">the</span> <span m="166060">grades</span> <span
  m="166570">on</span> <span m="166810">the</span> <span
  m="166930">homeworks.</span> <span m="168410">So</span> <span
  m="168520">the</span> <span m="168640">homeworks</span> <span
  m="169210">will</span> <span m="169420">be</span> <span
  m="169930">partly</span> <span m="170890">linear</span> <span
  m="171250">algebra</span> <span m="171700">questions</span> <span
  m="173140">and</span> <span m="173470">partly</span> <span
  m="174790">online,</span> <span m="176140">like</span> <span
  m="176380">recognizing</span> <span m="177190">handwriting,</span> <span
  m="178990">stitching</span> <span m="180640">images</span> <span
  m="181210">together,</span> <span m="182770">many</span> <span
  m="183130">other</span> <span m="183400">things.</span> <span
  m="183880">And</span> <span m="184000">I'll</span> <span
  m="184300">talk</span> <span m="184630">about</span> <span
  m="184930">those</span> <span m="185320">as</span> <span m="185500">we</span>
  <span m="185650">go.</span> <span m="187330">Good.</span></p><p><span
  m="188980">So</span> <span m="189510">that's</span> <span
  m="189820">the</span> <span m="189970">general</span> <span
  m="190390">picture.</span> <span m="191710">And</span> <span
  m="191860">I'll</span> <span m="192100">say</span> <span
  m="192340">more</span> <span m="192580">about</span> <span
  m="192850">it</span> <span m="192970">today.</span> <span
  m="195310">And</span> <span m="195460">I</span> <span m="195550">could</span>
  <span m="195760">answer</span> <span m="196060">any</span> <span
  m="196240">question</span> <span m="196720">about</span> <span
  m="197020">it.</span> <span m="197140">So</span> <span m="197290">we're</span>
  <span m="197920">getting</span> <span m="198250">videotaped.</span> <span
  m="200740">So</span> <span m="201850">if</span> <span
  m="201970">anybody's</span> <span m="202420">bashful,</span> <span
  m="202960">sit</span> <span m="203710">in the</span> <span
  m="204130">far</span> <span m="204370">back.</span> <span
  m="205990">But</span> <span m="208690">it'll</span> <span m="208870">be</span>
  <span m="209020">fun.</span> <span m="209860">You</span> <span
  m="210310">may</span> <span m="210500">know</span> <span m="210790">the</span>
  <span m="211180">videos</span> <span m="211690">for</span> <span
  m="211900">18.06.</span> <span m="213430">So</span> <span
  m="213910">this</span> <span m="214150">is</span> <span m="214600">the</span>
  <span m="214720">next</span> <span m="215020">step,</span> <span
  m="215410">18.065.</span> <span m="217270">It's</span> <span
  m="217450">pretty</span> <span m="218890">exciting</span> <span
  m="219490">for</span> <span m="219640">me.</span> <span m="221170">So</span>
  <span m="221800">any</span> <span m="222220">question,</span> <span
  m="222880">or</span> <span m="223030">shall</span> <span m="223300">I</span>
  <span m="223840">do</span> <span m="223990">a</span> <span
  m="224050">little</span> <span m="224260">math?</span> <span
  m="226210">Why</span> <span m="226390">not?</span> <span m="226990">And</span>
  <span m="227350">then</span> <span m="229510">I'll</span> <span
  m="229660">say</span> <span m="229930">a</span> <span m="229960">little</span>
  <span m="230110">more</span> <span m="230350">about</span> <span
  m="230620">the</span> <span m="230740">course,</span> <span
  m="233620">just</span> <span m="233890">so</span> <span m="234070">you</span>
  <span m="234190">have</span> <span m="234370">an</span> <span
  m="234520">idea</span> <span m="234850">of</span> <span
  m="234940">what's</span> <span m="236080">ahead.</span> <span
  m="237610">And</span> <span m="237950">it</span> <span m="238000">looks</span>
  <span m="238240">like</span> <span m="238420">this</span> <span
  m="238630">room</span> <span m="238900">is</span> <span
  m="239050">exactly</span> <span m="239620">the</span> <span
  m="239710">right</span> <span m="239980">size</span> <span
  m="240520">to</span> <span m="240640">me,</span> <span m="240910">so</span>
  <span m="241180">I'm</span> <span m="241690">pleased.</span></p><p><span
  m="248500">So</span> <span m="248680">what's</span> <span
  m="248950">the</span> <span m="249040">deal</span> <span m="249370">in</span>
  <span m="249490">linear</span> <span m="249820">algebra?</span> <span
  m="253330">Forgive</span> <span m="253720">me</span> <span
  m="253900">if</span> <span m="254020">I</span> <span m="254200">start</span>
  <span m="254590">with</span> <span m="255640">what</span> <span
  m="255880">I</span> <span m="255970">do</span> <span m="256209">the</span>
  <span m="256329">very</span> <span m="256630">first</span> <span
  m="256959">day</span> <span m="257230">in</span> <span
  m="257339">18.06,</span> <span m="258279">which</span> <span
  m="258550">is</span> <span m="258730">multiply</span> <span
  m="259300">a</span> <span m="259360">matrix</span> <span m="259870">by</span>
  <span m="260079">a</span> <span m="260170">vector.</span> <span
  m="262770">And</span> <span m="262920">then</span> <span
  m="263250">I'll</span> <span m="263400">graduate</span> <span
  m="264000">to</span> <span m="264120">multiplying</span> <span
  m="264750">a</span> <span m="264810">matrix</span> <span m="265290">by</span>
  <span m="265500">a</span> <span m="265560">matrix.</span> <span m="267410">And
  you</span> <span m="267570">will</span> <span m="267750">say,</span> <span
  m="268050">I</span> <span m="268200">know</span> <span m="268440">that</span>
  <span m="268710">stuff.</span> <span m="269640">But</span> <span
  m="269820">do</span> <span m="270060">you</span> <span m="270210">know</span>
  <span m="270440">it</span> <span m="270570">the</span> <span
  m="270690">right</span> <span m="270990">way?</span> <span
  m="271500">Do</span> <span m="271620">you</span> <span m="271800">think</span>
  <span m="272100">of</span> <span m="272220">the</span> <span
  m="272310">multiplication</span> <span m="273030">the</span> <span
  m="273120">right</span> <span m="273360">way?</span> <span
  m="273660">So</span> <span m="273810">let</span> <span m="273960">me</span>
  <span m="274080">tell</span> <span m="274320">you</span> <span
  m="274950">what</span> <span m="275160">I</span> <span
  m="275310">believe</span> <span m="275670">to</span> <span
  m="275790">be</span> <span m="275970">the</span> <span m="276090">right</span>
  <span m="276390">way.</span> <span m="277320">So</span> <span
  m="277500">let</span> <span m="277620">me</span> <span m="277740">take</span>
  <span m="278010">a</span> <span m="278100">matrix,</span> <span
  m="280590">say,</span> <span m="281880">2,</span> <span m="282580">3,</span>
  <span m="283360">5,</span> <span m="287100">1,</span> <span
  m="288240">1,</span> <span m="288930">7,</span> <span m="290490">and</span>
  <span m="291600">3,</span> <span m="293060">4,</span> <span
  m="294060">12.</span> <span m="296190">And</span> <span m="296340">I'll</span>
  <span m="296520">always</span> <span m="296820">call</span> <span
  m="297060">matrices</span> <span m="297810">A.</span></p><p><span
  m="302470">So</span> <span m="303340">first</span> <span
  m="303670">step</span> <span m="304000">is</span> <span m="304210">just</span>
  <span m="304960">A</span> <span m="305110">times</span> <span
  m="305500">x,</span> <span m="306400">A</span> <span m="306580">times</span>
  <span m="306940">a</span> <span m="307000">vector.</span> <span
  m="307750">So</span> <span m="307900">I</span> <span
  m="307990">multiply</span> <span m="308890">A</span> <span
  m="309220">by,</span> <span m="310000">let's</span> <span
  m="310150">say,</span> <span m="310450">x1,</span> <span m="311060">x2,</span>
  <span m="311450">x3.</span> <span m="312640">And</span> <span
  m="312820">how</span> <span m="313030">do</span> <span m="313210">I</span>
  <span m="313300">look</span> <span m="313570">at</span> <span
  m="313690">that</span> <span m="314680">answer?</span> <span
  m="317310">So</span> <span m="318300">the</span> <span
  m="318490">choices--</span> <span m="319980">think</span> <span
  m="320160">of</span> <span m="320340">the</span> <span m="320490">rows</span>
  <span m="321090">of</span> <span m="321180">the</span> <span
  m="321270">matrix</span> <span m="322020">or</span> <span
  m="322170">think</span> <span m="322440">of</span> <span m="322560">the</span>
  <span m="322650">columns.</span> <span m="324440">And</span> <span
  m="325670">if</span> <span m="325820">you</span> <span m="325910">think</span>
  <span m="326120">of</span> <span m="326240">the</span> <span
  m="326330">rows,</span> <span m="326940">which</span> <span
  m="327110">is</span> <span m="327320">the</span> <span
  m="327500">standard</span> <span m="329030">way</span> <span
  m="329570">to</span> <span m="329690">multiply,</span> <span
  m="330350">you</span> <span m="330500">would</span> <span
  m="330680">take</span> <span m="331520">the</span> <span m="331940">dot</span>
  <span m="332180">product.</span> <span m="332690">So</span> <span
  m="332840">the</span> <span m="332930">first</span> <span
  m="333290">way</span> <span m="333560">is</span> <span m="334580">dot</span>
  <span m="334850">products</span> <span m="339770">of</span> <span
  m="340070">row</span> <span m="342200">dotted</span> <span
  m="342650">with</span> <span m="342860">x.</span> <span m="346190">2x1</span>
  <span m="346920">plus</span> <span m="347220">x2</span> <span
  m="347610">plus</span> <span m="347910">3x3.</span> <span m="349200">It</span>
  <span m="349350">gives</span> <span m="349620">you</span> <span
  m="349980">the</span> <span m="350190">answer</span> <span m="350565">a</span>
  <span m="350940">component</span> <span m="351600">at</span> <span
  m="351750">a</span> <span m="351810">time.</span></p><p><span
  m="354330">That's</span> <span m="354500">the</span> <span
  m="354620">low</span> <span m="354890">level</span> <span
  m="355250">way.</span> <span m="356630">The</span> <span
  m="357050">good</span> <span m="357290">way</span> <span m="357530">to</span>
  <span m="357650">see</span> <span m="357920">it</span> <span
  m="358060">is</span> <span m="358460">vector-wise.</span> <span
  m="360140">See</span> <span m="360440">this</span> <span m="360770">as</span>
  <span m="361610">x1</span> <span m="362270">multiplies</span> <span
  m="362930">that</span> <span m="363140">first</span> <span
  m="364460">column,</span> <span m="367450">x2</span> <span
  m="368270">times</span> <span m="368690">the</span> <span
  m="368810">second</span> <span m="369230">column,</span> <span
  m="371030">1,</span> <span m="371270">1,</span> <span m="371510">7,</span>
  <span m="372890">and</span> <span m="373250">x3</span> <span
  m="373850">times</span> <span m="374360">the</span> <span
  m="374450">third</span> <span m="374780">column,</span> <span
  m="376660">3,</span> <span m="376930">4,</span> <span m="377180">12.</span>
  <span m="381994">Good.</span> <span m="384480">So</span> <span
  m="384660">it's</span> <span m="384780">a</span> <span
  m="384840">combination</span> <span m="385560">of</span> <span
  m="385650">vectors,</span> <span m="387750">and</span> <span
  m="387900">of</span> <span m="387990">course,</span> <span
  m="388260">it</span> <span m="388350">produces</span> <span
  m="388920">a</span> <span m="388980">vector.</span> <span
  m="390740">And</span> <span m="391190">here,</span> <span m="391370">we</span>
  <span m="391520">have</span> <span m="391640">a</span> <span
  m="391700">3</span> <span m="391970">by</span> <span m="392180">3</span> <span
  m="392420">matrix</span> <span m="393020">on</span> <span
  m="393140">our</span> <span m="393260">vectors</span> <span
  m="393800">are</span> <span m="393950">in</span> <span m="394130">R3.</span>
  <span m="395960">And</span> <span m="396140">most</span> <span
  m="396410">vectors</span> <span m="396860">will</span> <span
  m="397010">be</span> <span m="397160">in</span> <span m="397310">R3</span>
  <span m="397710">or</span> <span m="397890">Rn</span> <span
  m="399200">for</span> <span m="399380">this</span> <span
  m="399620">course.</span></p><p><span m="402770">So</span> <span
  m="403130">that's</span> <span m="403520">the</span> <span
  m="403670">right</span> <span m="404030">answer.</span> <span
  m="404400">And</span> <span m="404510">of</span> <span
  m="404600">course,</span> <span m="405350">the</span> <span
  m="405440">first</span> <span m="405770">component</span> <span
  m="406430">is</span> <span m="406790">2x1</span> <span m="408110">and</span>
  <span m="408260">1x2</span> <span m="409430">and</span> <span
  m="409580">3x3.</span> <span m="410950">The</span> <span
  m="411110">same</span> <span m="411500">2,</span> <span m="411770">1,</span>
  <span m="412100">3--</span> <span m="412400">the</span> <span
  m="412490">same</span> <span m="412820">dot</span> <span
  m="413060">product,</span> <span m="413315">it</span> <span
  m="413570">comes</span> <span m="413900">out</span> <span
  m="414080">right.</span> <span m="414510">But</span> <span
  m="414710">you</span> <span m="414830">see</span> <span m="415100">it</span>
  <span m="416240">all</span> <span m="416450">at</span> <span
  m="416540">once</span> <span m="416870">instead</span> <span
  m="417260">of</span> <span m="417320">piecemeal.</span> <span
  m="420720">Part</span> <span m="421050">of</span> <span m="421170">the</span>
  <span m="421320">course--</span> <span m="421860">I</span> <span
  m="421950">guess</span> <span m="422190">part</span> <span
  m="422460">of</span> <span m="422520">what</span> <span m="422700">I</span>
  <span m="422850">hope</span> <span m="423120">to</span> <span
  m="423930">get</span> <span m="424140">across</span> <span
  m="424740">is</span> <span m="428100">thinking</span> <span
  m="428400">of</span> <span m="428520">a</span> <span m="428610">matrix</span>
  <span m="430650">as</span> <span m="430800">a</span> <span
  m="430890">whole</span> <span m="431190">thing,</span> <span
  m="431590">not</span> <span m="431700">just</span> <span m="431970">a</span>
  <span m="432030">bunch</span> <span m="432360">of</span> <span
  m="432480">nine</span> <span m="432990">or</span> <span m="433640">m</span>
  <span m="434120">times</span> <span m="434490">n</span> <span
  m="434730">numbers.</span> <span m="435270">But</span> <span
  m="435480">thinking</span> <span m="435900">of</span> <span
  m="435960">it</span> <span m="436110">as</span> <span m="437740">a</span>
  <span m="438540">thing.</span> <span m="439280">A</span> <span
  m="439380">matrix</span> <span m="440490">multiplies</span> <span
  m="441210">a</span> <span m="441270">vector</span> <span m="442110">to</span>
  <span m="442230">give</span> <span m="442440">another</span> <span
  m="442800">vector.</span></p><p><span m="445020">So</span> <span
  m="445500">when</span> <span m="445680">I</span> <span m="445890">say</span>
  <span m="446400">Ax,</span> <span m="449520">you</span> <span
  m="449670">immediately</span> <span m="450240">think</span> <span
  m="450960">that--</span> <span m="452040">you</span> <span
  m="452130">immediately</span> <span m="452640">think,</span> <span
  m="453060">OK,</span> <span m="453430">Ax</span> <span m="453990">has</span>
  <span m="454260">a</span> <span m="454830">clear</span> <span
  m="455130">meaning,</span> <span m="455580">it's</span> <span
  m="455790">a</span> <span m="455970">combination</span> <span
  m="456780">of</span> <span m="456900">the</span> <span
  m="456990">columns</span> <span m="457470">of</span> <span
  m="457650">A.</span> <span m="458310">So</span> <span m="460290">now</span>
  <span m="460680">let</span> <span m="460800">me</span> <span
  m="460920">take</span> <span m="461130">that</span> <span
  m="461310">next</span> <span m="462420">step.</span> <span
  m="464530">And</span> <span m="464680">the</span> <span m="464770">next</span>
  <span m="465010">step</span> <span m="465310">is</span> <span
  m="466660">think</span> <span m="466960">about</span> <span
  m="467680">all</span> <span m="468130">combinations</span> <span
  m="469540">of</span> <span m="469660">the</span> <span
  m="469780">columns</span> <span m="470260">of</span> <span
  m="470410">A.</span> <span m="470680">We</span> <span m="470830">take</span>
  <span m="471070">the</span> <span m="471190">matrix</span> <span
  m="471880">A,</span> <span m="472645">and</span> <span m="472960">we</span>
  <span m="473110">take</span> <span m="473380">all</span> <span
  m="473680">x's</span> <span m="475060">and</span> <span m="475180">we</span>
  <span m="475330">imagine</span> <span m="475870">all</span> <span
  m="476110">the</span> <span m="476260">outputs.</span> <span
  m="477670">And</span> <span m="477820">what</span> <span m="478030">I</span>
  <span m="478090">want</span> <span m="478270">to</span> <span
  m="478330">ask</span> <span m="478690">you</span> <span m="478870">is,</span>
  <span m="480110">what</span> <span m="480220">does</span> <span
  m="480400">that</span> <span m="480610">look</span> <span
  m="480880">like?</span> <span m="481330">If</span> <span m="481510">I</span>
  <span m="481600">just</span> <span m="481840">take</span> <span
  m="482860">1</span> <span m="483310">vector</span> <span m="483730">x,</span>
  <span m="484700">I</span> <span m="484720">get</span> <span
  m="484960">a</span> <span m="485050">vector</span> <span
  m="485590">output.</span> <span m="486070">It</span> <span
  m="486520">takes</span> <span m="486790">a</span> <span
  m="486880">vector</span> <span m="487270">to</span> <span m="487480">a</span>
  <span m="487540">vector.</span></p><p><span m="488410">But</span> <span
  m="488590">now</span> <span m="488860">I</span> <span m="488980">take</span>
  <span m="489310">all</span> <span m="489670">x's--</span> <span
  m="490990">all</span> <span m="491660">of</span> <span
  m="491800">vectors</span> <span m="492430">x</span> <span m="492730">in</span>
  <span m="493300">3D</span> <span m="494790">and</span> <span
  m="494920">I</span> <span m="495010">get</span> <span m="495220">all</span>
  <span m="495520">these</span> <span m="495820">answers,</span> <span
  m="497190">and</span> <span m="497320">I</span> <span m="497410">think</span>
  <span m="497650">of</span> <span m="497770">them</span> <span
  m="497950">all</span> <span m="498160">together.</span> <span
  m="501020">So</span> <span m="501410">I've</span> <span m="501650">got</span>
  <span m="501920">a</span> <span m="501980">bunch</span> <span
  m="502400">of</span> <span m="502490">vectors--</span> <span
  m="503390">infinitely</span> <span m="503960">many</span> <span
  m="504290">vectors,</span> <span m="504770">actually.</span> <span
  m="505940">And</span> <span m="506300">the</span> <span
  m="506420">question</span> <span m="506960">is,</span> <span
  m="508040">if</span> <span m="508220">I</span> <span m="508340">plot</span>
  <span m="508730">those</span> <span m="509060">infinitely</span> <span
  m="509480">many</span> <span m="509750">vectors,</span> <span
  m="510290">what</span> <span m="510560">do</span> <span m="510680">I</span>
  <span m="510770">have?</span> <span m="512179">And</span> <span
  m="512330">the</span> <span m="512419">beauty</span> <span
  m="512809">of</span> <span m="512929">linear</span> <span
  m="513260">algebra</span> <span m="513590">is that</span> <span
  m="513950">questions</span> <span m="514400">like</span> <span
  m="514610">this--</span> <span m="515480">you</span> <span
  m="515630">can</span> <span m="515840">answer</span> <span
  m="516200">them</span> <span m="516470">and</span> <span m="517010">you</span>
  <span m="517400">intuitively</span> <span m="518270">see</span> <span
  m="518960">it.</span> <span m="520429">You</span> <span
  m="520640">certainly</span> <span m="521120">see</span> <span
  m="521450">it</span> <span m="521600">in</span> <span m="521720">3D</span>
  <span m="522470">and</span> <span m="522620">you</span> <span
  m="523250">have</span> <span m="523490">the</span> <span
  m="523580">right</span> <span m="525140">idea</span> <span
  m="525680">in</span> <span m="526460">10</span> <span
  m="526760">dimensions,</span> <span m="527390">even.</span> <span
  m="528620">Most</span> <span m="528950">of</span> <span m="529070">us</span>
  <span m="529220">don't</span> <span m="529580">see</span> <span
  m="529940">too</span> <span m="530180">well</span> <span m="530490">in</span>
  <span m="531110">10d--</span> <span m="532290">in</span> <span
  m="532710">R10.</span> <span m="533090">But</span> <span
  m="533300">here</span> <span m="533510">we</span> <span m="533660">got</span>
  <span m="534290">three.</span></p><p><span m="537250">So</span> <span
  m="537470">do</span> <span m="537560">you</span> <span m="537650">see</span>
  <span m="537800">what</span> <span m="537950">I'm</span> <span
  m="538040">saying?</span> <span m="538850">I'm</span> <span
  m="539180">taking</span> <span m="539570">all</span> <span
  m="539960">x's.</span> <span m="540950">So</span> <span m="542660">all</span>
  <span m="543060">Ax</span> <span m="546440">gives</span> <span
  m="546770">us</span> <span m="547030">a</span> <span m="547190">big</span>
  <span m="547610">bunch</span> <span m="547940">of</span> <span
  m="548000">vectors.</span> <span m="549800">And</span> <span
  m="551090">that</span> <span m="551390">collection</span> <span
  m="552020">of</span> <span m="552080">vectors</span> <span
  m="553220">is</span> <span m="553400">called</span> <span
  m="553970">the</span> <span m="554120">column</span> <span
  m="554570">space</span> <span m="555050">of</span> <span m="555200">A.</span>
  <span m="557070">It's</span> <span m="557300">a</span> <span
  m="557360">space,</span> <span m="558210">in</span> <span
  m="558290">other</span> <span m="558440">words.</span> <span
  m="560460">That's</span> <span m="560660">the</span> <span
  m="560750">key</span> <span m="561020">word</span> <span
  m="561320">there,</span> <span m="561630">the</span> <span
  m="561650">column</span> <span m="562130">space</span> <span
  m="562610">of</span> <span m="562760">A.</span> <span m="563412">And</span>
  <span m="564560">I'll</span> <span m="564710">just</span> <span
  m="564980">write</span> <span m="565280">it</span> <span m="565400">as</span>
  <span m="565550">C</span> <span m="565850">of</span> <span m="566000">A</span>
  <span m="566270">when</span> <span m="566480">I</span> <span
  m="566570">need</span> <span m="567620">letters</span> <span
  m="568100">for</span> <span m="568310">it.</span> <span m="569900">So</span>
  <span m="570170">I'm</span> <span m="570380">going</span> <span
  m="570500">to</span> <span m="570590">ask</span> <span m="570950">you,</span>
  <span m="571100">what</span> <span m="571340">does</span> <span
  m="571460">this</span> <span m="571730">column</span> <span
  m="572120">space</span> <span m="572540">look</span> <span
  m="572840">like?</span> <span m="574190">And</span> <span
  m="574370">that</span> <span m="574580">depends</span> <span
  m="575030">on</span> <span m="575210">the</span> <span
  m="575270">matrix.</span> <span m="576650">Sometimes</span> <span
  m="577280">that</span> <span m="577400">column</span> <span
  m="577820">space</span> <span m="578240">would</span> <span
  m="578420">be</span> <span m="578570">the</span> <span m="578660">whole</span>
  <span m="579050">of</span> <span m="579190">R3.</span> <span
  m="581230">Sometimes</span> <span m="582040">it's</span> <span
  m="582220">a</span> <span m="582280">smaller</span> <span
  m="584380">set</span> <span m="584800">in</span> <span m="585040">R3,</span>
  <span m="585440">a</span> <span m="585660">space.</span></p><p><span
  m="587070">Do</span> <span m="587200">you</span> <span m="587290">know</span>
  <span m="587440">what</span> <span m="587620">it</span> <span
  m="587740">is</span> <span m="587980">in</span> <span m="588070">this</span>
  <span m="588280">case?</span> <span m="588700">Do</span> <span
  m="588910">I</span> <span m="589030">get</span> <span m="590380">all</span>
  <span m="590770">of</span> <span m="591200">3D</span> <span
  m="591950">out</span> <span m="592180">of</span> <span m="592300">these</span>
  <span m="592630">guys</span> <span m="593110">by</span> <span
  m="593290">choosing</span> <span m="593770">all</span> <span
  m="594040">x1</span> <span m="594510">and</span> <span m="594670">x2</span>
  <span m="594940">and</span> <span m="595240">x3?</span> <span
  m="597380">It</span> <span m="597550">seems</span> <span
  m="597880">like</span> <span m="598650">if</span> <span m="598810">it</span>
  <span m="598870">was</span> <span m="599050">a</span> <span
  m="599080">random</span> <span m="600340">matrix,</span> <span
  m="601090">the</span> <span m="601270">answer</span> <span
  m="601570">would</span> <span m="601750">be,</span> <span
  m="602170">surely,</span> <span m="602740">yes.</span> <span
  m="604010">If</span> <span m="604650">a</span> <span m="604930">random</span>
  <span m="605470">three</span> <span m="605740">by</span> <span
  m="605920">three</span> <span m="606190">matrix</span> <span
  m="606790">is--</span> <span m="607720">it's</span> <span
  m="607960">column</span> <span m="608350">space</span> <span
  m="608700">is</span> <span m="608830">going</span> <span m="608930">to</span>
  <span m="609040">be</span> <span m="609190">all</span> <span
  m="609460">of</span> <span m="609610">our</span> <span
  m="609800">three,</span> <span m="610390">its</span> <span
  m="610870">columns</span> <span m="611410">are</span> <span
  m="611500">going</span> <span m="611580">to</span> <span m="611740">be</span>
  <span m="611920">independent,</span> <span m="613050">its</span> <span
  m="613270">rows</span> <span m="613750">are</span> <span
  m="613810">going</span> <span m="613940">to</span> <span m="614080">be</span>
  <span m="614200">independent,</span> <span m="614990">it's</span> <span
  m="615070">going</span> <span m="615160">to</span> <span m="615310">be</span>
  <span m="615730">invertible,</span> <span m="616660">it's</span> <span
  m="616780">going</span> <span m="616880">to</span> <span m="616990">be</span>
  <span m="617140">great.</span> <span m="617890">But</span> <span
  m="618160">is</span> <span m="618340">this</span> <span
  m="618760">matrix--</span> <span m="619420">what's</span> <span
  m="619690">up</span> <span m="619870">with</span> <span m="620050">that</span>
  <span m="620200">matrix?</span> <span m="621930">No,</span> <span
  m="622200">it's</span> <span m="622380">not.</span></p><p><span
  m="624210">So</span> <span m="624930">what</span> <span m="625290">do</span>
  <span m="625440">I</span> <span m="625560">get</span> <span
  m="625830">instead</span> <span m="626370">of</span> <span
  m="626640">all</span> <span m="626850">of</span> <span m="627000">R3?</span>
  <span m="628560">I</span> <span m="628800">get</span> <span
  m="629070">a</span> <span m="629150">plane,</span> <span
  m="629910">yeah.</span> <span m="630390">If</span> <span m="630600">you</span>
  <span m="631020">get</span> <span m="631290">that</span> <span
  m="631920">insight.</span> <span m="632910">So</span> <span
  m="634140">by</span> <span m="634350">taking</span> <span
  m="634680">x's--</span> <span m="635280">everybody's</span> <span
  m="635780">with</span> <span m="635970">me--</span> <span
  m="636150">all</span> <span m="636420">x's</span> <span
  m="636870">here.</span> <span m="638170">So</span> <span
  m="639340">that</span> <span m="639550">means</span> <span
  m="640000">that</span> <span m="640480">it</span> <span
  m="640630">fills</span> <span m="641140">in</span> <span
  m="641380">whatever.</span> <span m="642460">And,</span> <span
  m="643570">well,</span> <span m="643840">because</span> <span
  m="644230">it's</span> <span m="644410">linear</span> <span
  m="644800">algebra,</span> <span m="645250">it's</span> <span
  m="645460">going</span> <span m="645570">to</span> <span m="645700">be</span>
  <span m="646840">likely</span> <span m="647860">all</span> <span
  m="648070">of</span> <span m="648220">R3</span> <span m="649270">or</span>
  <span m="649420">a</span> <span m="649480">plane,</span> <span
  m="651130">or</span> <span m="651280">even</span> <span m="651550">a</span>
  <span m="651610">line.</span> <span m="652960">Let</span> <span
  m="653140">me</span> <span m="653260">just</span> <span m="654560">bat</span>
  <span m="654880">over</span> <span m="655150">here</span> <span
  m="655360">for</span> <span m="655510">a</span> <span
  m="655570">moment.</span> <span m="656390">Give</span> <span
  m="656770">me</span> <span m="656890">a</span> <span m="656980">matrix</span>
  <span m="659680">whose</span> <span m="659950">column</span> <span
  m="660340">space</span> <span m="660790">would</span> <span
  m="660970">only</span> <span m="661270">be</span> <span m="661450">a</span>
  <span m="661510">line.</span> <span m="663650">All</span> <span
  m="663860">1s?</span> <span m="664780">OK.</span> <span m="665300">Wow,</span>
  <span m="665660">that's</span> <span m="665950">a--</span> <span
  m="667250">let</span> <span m="667400">me</span> <span m="667610">liven</span>
  <span m="668060">it</span> <span m="668210">up</span> <span
  m="668360">a</span> <span m="668420">little.</span> <span m="669500">3,</span>
  <span m="670100">3,</span> <span m="670670">3,</span> <span
  m="672850">8,</span> <span m="673305">8,</span> <span
  m="673760">8.</span></p><p><span m="678350">So</span> <span
  m="678500">I</span> <span m="678620">think</span> <span m="678890">that</span>
  <span m="679070">the</span> <span m="679190">combinations</span> <span
  m="680060">of</span> <span m="680180">those</span> <span
  m="680510">columns</span> <span m="681410">are</span> <span
  m="681560">all</span> <span m="681860">on</span> <span m="681980">the</span>
  <span m="682130">same</span> <span m="682460">line.</span> <span
  m="683870">That</span> <span m="684140">says</span> <span
  m="684530">that</span> <span m="684710">the</span> <span
  m="684830">column</span> <span m="685250">space</span> <span
  m="686270">is</span> <span m="686420">just</span> <span m="686780">a</span>
  <span m="686840">line.</span> <span m="687800">And</span> <span
  m="687980">I</span> <span m="688100">would</span> <span m="688310">say</span>
  <span m="688760">then</span> <span m="689090">that</span> <span
  m="689270">the</span> <span m="689420">matrix--</span> <span
  m="690220">so</span> <span m="690440">column</span> <span
  m="690860">space</span> <span m="691460">of</span> <span
  m="691580">this</span> <span m="691850">A</span> <span m="692570">is</span>
  <span m="692750">a</span> <span m="692810">line.</span> <span
  m="694520">Another</span> <span m="694880">way</span> <span
  m="695120">I</span> <span m="695210">could</span> <span m="695420">say</span>
  <span m="695720">this</span> <span m="696110">is</span> <span
  m="696330">that</span> <span m="696470">the</span> <span
  m="696560">rank</span> <span m="697130">of</span> <span m="697220">the</span>
  <span m="697340">matrix</span> <span m="698930">is</span> <span
  m="699170">1.</span> <span m="701450">The</span> <span m="701570">rank</span>
  <span m="702020">is</span> <span m="702140">sort</span> <span
  m="702440">of</span> <span m="702560">the</span> <span
  m="703610">dimension</span> <span m="704330">of</span> <span
  m="704450">the</span> <span m="704570">column</span> <span
  m="704990">space.</span> <span m="705470">Well,</span> <span
  m="705620">not</span> <span m="705830">sort,</span> <span
  m="706290">that's</span> <span m="706520">what</span> <span
  m="706700">it</span> <span m="706850">is.</span> <span m="707180">The</span>
  <span m="707330">rank</span> <span m="707750">is</span> <span
  m="707930">the</span> <span m="708050">dimension</span> <span
  m="708560">of</span> <span m="708650">the</span> <span
  m="708770">column--</span> <span m="709430">everybody</span> <span
  m="709850">sees</span> <span m="710180">that</span> <span
  m="710360">you</span> <span m="710450">get</span> <span m="710600">a</span>
  <span m="710660">line?</span> <span m="711530">Because</span> <span
  m="711980">any</span> <span m="712190">combination</span> <span
  m="712910">x1</span> <span m="713420">of</span> <span m="713510">that</span>
  <span m="713750">plus</span> <span m="714050">x2</span> <span
  m="714410">of</span> <span m="714530">that</span> <span m="714710">plus</span>
  <span m="715300">x3</span> <span m="715730">of</span> <span
  m="715850">that</span> <span m="716090">is</span> <span
  m="716870">going</span> <span m="717010">to</span> <span m="717140">go</span>
  <span m="719030">along</span> <span m="719390">that</span> <span
  m="719630">line.</span></p><p><span m="720150">Here's</span> <span
  m="720470">the</span> <span m="720980">first</span> <span
  m="721310">column,</span> <span m="721820">here's</span> <span
  m="722090">the</span> <span m="722210">second</span> <span
  m="722630">column.</span> <span m="723050">They're</span> <span
  m="723200">all</span> <span m="723470">on</span> <span m="723590">a</span>
  <span m="723650">line.</span> <span m="724580">So</span> <span
  m="724850">I'll</span> <span m="724940">never</span> <span
  m="725210">get</span> <span m="725420">off</span> <span m="725660">that</span>
  <span m="725850">line.</span> <span m="727070">If</span> <span
  m="727220">I</span> <span m="727340">allow</span> <span m="727670">all</span>
  <span m="727910">x's,</span> <span m="728340">I'll</span> <span
  m="728470">get</span> <span m="728660">the</span> <span
  m="728780">whole</span> <span m="729050">line.</span> <span
  m="730470">Now</span> <span m="730740">here,</span> <span
  m="731160">you</span> <span m="731370">said</span> <span m="733140">not</span>
  <span m="733410">a</span> <span m="733470">line.</span> <span
  m="734070">What</span> <span m="734250">was</span> <span m="735000">the</span>
  <span m="735090">column</span> <span m="735450">space</span> <span
  m="735810">for</span> <span m="735960">this</span> <span
  m="736170">guy?</span> <span m="738410">Plane.</span> <span
  m="739730">Now,</span> <span m="739890">why</span> <span
  m="740190">isn't</span> <span m="740490">it</span> <span m="740650">all</span>
  <span m="740910">of</span> <span m="741060">R3?</span> <span
  m="743130">What</span> <span m="743550">do</span> <span m="743610">you</span>
  <span m="743700">see</span> <span m="743940">that's</span> <span
  m="744120">special</span> <span m="744630">there--</span> <span
  m="745860">because</span> <span m="746160">it</span> <span
  m="746280">is</span> <span m="746550">special--</span> <span
  m="748050">that's</span> <span m="749610">making</span> <span
  m="749940">the</span> <span m="750030">column</span> <span
  m="750420">space</span> <span m="751920">special,</span> <span
  m="753090">a</span> <span m="753390">plane</span> <span
  m="753930">instead</span> <span m="754350">of</span> <span
  m="754440">the</span> <span m="754530">whole</span> <span
  m="754800">thing?</span> <span m="755820">Yeah,</span> <span
  m="756030">what's</span> <span m="756600">up</span> <span
  m="756840">with</span> <span m="757050">these</span> <span
  m="757530">three</span> <span m="757830">columns?</span></p><p><span
  m="758430">AUDIENCE:</span> <span m="758669">The third</span> <span
  m="758908">column is</span> <span m="759386">the sum</span> <span
  m="759864">of</span> <span m="760342">it.</span></p><p><span
  m="760820">GILBERT STRANG:</span> <span m="760985">The</span> <span
  m="761360">third</span> <span m="761960">column</span> <span
  m="762440">is</span> <span m="762620">the</span> <span m="762710">sum</span>
  <span m="763010">of</span> <span m="763070">these</span> <span
  m="763400">two.</span> <span m="766160">So</span> <span m="766240">the</span>
  <span m="766360">first</span> <span m="766630">column</span> <span
  m="766960">is</span> <span m="767080">fine,</span> <span m="768050">2,</span>
  <span m="768270">3,</span> <span m="768520">5.</span> <span
  m="769660">Second</span> <span m="770020">column</span> <span
  m="770380">is</span> <span m="770540">in</span> <span m="770660">a</span>
  <span m="770740">different</span> <span m="771130">direction.</span> <span
  m="772210">And</span> <span m="772360">when</span> <span m="772570">I</span>
  <span m="772660">take</span> <span m="772900">combinations</span> <span
  m="773800">of</span> <span m="773920">the</span> <span m="774040">first</span>
  <span m="774370">two</span> <span m="774610">columns,</span> <span
  m="775190">what</span> <span m="775270">will</span> <span m="775420">I</span>
  <span m="775540">get?</span> <span m="777200">Sorry</span> <span
  m="777470">to</span> <span m="777620">keep</span> <span
  m="777920">asking</span> <span m="778310">you</span> <span
  m="778430">questions,</span> <span m="779000">but</span> <span
  m="779420">that's--</span> <span m="783600">anyway,</span> <span
  m="783930">that's</span> <span m="784140">what</span> <span
  m="784320">I</span> <span m="784410">always</span> <span m="784710">do.</span>
  <span m="786960">So</span> <span m="787540">the</span> <span
  m="787710">combinations</span> <span m="788490">of</span> <span
  m="788550">those</span> <span m="788820">first</span> <span
  m="789120">two</span> <span m="789300">columns</span> <span
  m="789870">are--?</span></p><p><span m="790470">AUDIENCE:</span> <span
  m="790707">A</span> <span m="790945">plane.</span></p><p><span
  m="791420">GILBERT STRANG:</span> <span m="791580">A</span> <span
  m="791740">plane</span> <span m="792710">because</span> <span
  m="792960">they're</span> <span m="793170">in</span> <span
  m="793425">different--</span> <span m="793680">everybody</span> <span
  m="794730">sees</span> <span m="795090">that</span> <span
  m="795270">picture.</span> <span m="795790">We've</span> <span
  m="795840">got</span> <span m="796770">column</span> <span
  m="797190">one</span> <span m="797460">going</span> <span
  m="797730">that</span> <span m="797910">way</span> <span m="798120">and</span>
  <span m="798300">column</span> <span m="798630">two</span> <span
  m="798960">going</span> <span m="799140">that</span> <span
  m="799350">way.</span> <span m="799630">And</span> <span
  m="799770">then</span> <span m="799920">if</span> <span m="800040">I</span>
  <span m="800160">take</span> <span m="800790">any</span> <span
  m="801060">multiple</span> <span m="801630">of</span> <span
  m="801750">column</span> <span m="802170">one,</span> <span
  m="802500">I've</span> <span m="802620">got</span> <span m="802860">a</span>
  <span m="802950">whole</span> <span m="803190">line,</span> <span
  m="803970">any</span> <span m="804210">multiple</span> <span
  m="804630">of</span> <span m="804720">column</span> <span
  m="805140">two.</span> <span m="805890">And</span> <span
  m="806010">then</span> <span m="806160">when</span> <span m="806310">I</span>
  <span m="806400">put</span> <span m="806670">the</span> <span
  m="806790">two</span> <span m="807030">together,</span> <span
  m="807840">it</span> <span m="807990">fills</span> <span m="808500">in</span>
  <span m="810450">the</span> <span m="810570">plane.</span> <span
  m="812940">Yeah.</span> <span m="813440">Your</span> <span
  m="813630">intuition</span> <span m="814230">says</span> <span
  m="814560">that's</span> <span m="814800">right.</span></p><p><span
  m="815910">So</span> <span m="816210">this</span> <span m="816540">is</span>
  <span m="816750">a</span> <span m="816840">matrix</span> <span
  m="817530">of</span> <span m="817770">rank.</span> <span
  m="818640">What's</span> <span m="818880">the</span> <span
  m="819000">rank</span> <span m="819390">of</span> <span m="819510">this</span>
  <span m="819720">matrix?</span></p><p><span m="820350">AUDIENCE:</span> <span
  m="820572">Two.</span></p><p><span m="821240">GILBERT STRANG:</span> <span
  m="821440">Two.</span> <span m="823030">Because</span> <span
  m="823240">it's</span> <span m="823390">got</span> <span m="823540">two</span>
  <span m="823960">independent</span> <span m="824620">columns,</span> <span
  m="825550">but</span> <span m="825730">the</span> <span
  m="825820">third</span> <span m="826120">column</span> <span
  m="826570">is</span> <span m="826840">dependent.</span> <span
  m="827800">The</span> <span m="827890">third</span> <span
  m="828160">column</span> <span m="828550">is</span> <span m="828700">a</span>
  <span m="828760">combination</span> <span m="829510">of</span> <span
  m="829600">the</span> <span m="829750">others.</span> <span
  m="830510">So</span> <span m="831310">matrices</span> <span
  m="831940">like</span> <span m="832240">this</span> <span
  m="833410">are</span> <span m="833800">really</span> <span
  m="835630">the</span> <span m="835750">building</span> <span
  m="836200">blocks</span> <span m="836620">of</span> <span
  m="836740">linear</span> <span m="837100">algebra,</span> <span
  m="838150">they're</span> <span m="838390">the</span> <span
  m="838510">building</span> <span m="838930">blocks</span> <span
  m="839290">of</span> <span m="839380">data</span> <span
  m="839710">science.</span> <span m="840930">They're</span> <span
  m="841120">rank</span> <span m="841600">one</span> <span
  m="842080">matrices.</span> <span m="843100">And</span> <span
  m="843280">let</span> <span m="843400">me</span> <span m="843760">show</span>
  <span m="844060">you</span> <span m="844180">a</span> <span
  m="844240">special</span> <span m="844660">way</span> <span
  m="844840">to</span> <span m="845650">write</span> <span
  m="846010">those</span> <span m="846760">rank</span> <span
  m="847090">one</span> <span m="847390">matrices.</span> <span
  m="850010">I</span> <span m="850060">think</span> <span m="850330">of</span>
  <span m="850420">this</span> <span m="850660">matrix</span> <span
  m="851860">as</span> <span m="853400">the</span> <span
  m="853780">column</span> <span m="854170">vector</span> <span
  m="854560">1,</span> <span m="854890">1,</span> <span m="855100">1</span>
  <span m="856120">times</span> <span m="856560">the</span> <span
  m="856630">row</span> <span m="856900">vector</span> <span
  m="857320">1,</span> <span m="857720">3,</span> <span m="857950">8.</span>
  <span m="859720">So</span> <span m="859930">it's</span> <span
  m="860110">a</span> <span m="860710">column</span> <span
  m="862120">times</span> <span m="862570">a</span> <span m="862660">row.</span>
  <span m="865860">That's a</span> <span m="866030">rank</span> <span
  m="866390">one</span> <span m="866780">matrix.</span></p><p><span
  m="868640">Do</span> <span m="868760">you</span> <span m="868850">see--</span>
  <span m="869950">that's</span> <span m="870290">a</span> <span
  m="870380">true</span> <span m="870830">multiplication</span> <span
  m="871640">there.</span> <span m="871850">It</span> <span
  m="871910">looks</span> <span m="872150">a</span> <span
  m="872210">little</span> <span m="872450">weird,</span> <span
  m="872940">but</span> <span m="873050">it's</span> <span m="873260">a</span>
  <span m="873680">3</span> <span m="874010">by</span> <span m="874280">1</span>
  <span m="874610">matrix</span> <span m="875270">times</span> <span
  m="875630">a</span> <span m="875690">1</span> <span m="875960">by</span> <span
  m="876200">3</span> <span m="876530">matrix.</span> <span
  m="877580">These</span> <span m="877850">numbers</span> <span
  m="878270">have</span> <span m="878480">to</span> <span m="878570">be</span>
  <span m="878750">the</span> <span m="878870">same,</span> <span
  m="879350">and</span> <span m="879440">then</span> <span m="879590">the</span>
  <span m="879740">output</span> <span m="880220">is</span> <span
  m="880400">3</span> <span m="880670">by</span> <span m="880880">3.</span>
  <span m="882110">And</span> <span m="882410">it's</span> <span
  m="882770">that.</span> <span m="885720">And</span> <span m="886050">do
  you</span> <span m="886170">see</span> <span m="886620">that</span> <span
  m="886860">it</span> <span m="887040">factors?</span> <span
  m="888780">So</span> <span m="888990">I'm</span> <span m="889110">going</span>
  <span m="889220">to</span> <span m="889350">move</span> <span
  m="889650">on</span> <span m="889810">to</span> <span m="889950">that</span>
  <span m="890490">idea.</span> <span m="891820">The</span> <span
  m="891930">next</span> <span m="892320">idea</span> <span
  m="892800">coming</span> <span m="893130">up</span> <span
  m="893340">will</span> <span m="893580">be</span> <span m="894900">that</span>
  <span m="899830">we</span> <span m="900280">can</span> <span
  m="900550">see--</span> <span m="901600">well,</span> <span
  m="902320">that's</span> <span m="902650">coming,</span> <span
  m="903010">that</span> <span m="903190">we're</span> <span
  m="903340">going</span> <span m="903470">to</span> <span m="903610">see</span>
  <span m="904990">matrices</span> <span m="906570">with</span> <span
  m="906940">two</span> <span m="907240">factors.</span></p><p><span
  m="908950">Let</span> <span m="909100">me</span> <span m="909490">move</span>
  <span m="909790">to</span> <span m="909940">that,</span> <span
  m="910840">but</span> <span m="911920">back</span> <span m="912220">for</span>
  <span m="912490">this</span> <span m="912760">original</span> <span
  m="913300">matrix.</span> <span m="917000">So</span> <span
  m="917480">what's</span> <span m="917870">with</span> <span
  m="918110">this?</span> <span m="919380">The</span> <span
  m="919850">column</span> <span m="920270">space</span> <span
  m="921080">is</span> <span m="921440">a</span> <span m="921510">plane.</span>
  <span m="926090">Think</span> <span m="926390">about</span> <span
  m="926690">now</span> <span m="926990">the</span> <span m="927140">key</span>
  <span m="927530">idea</span> <span m="928460">of</span> <span
  m="928730">independent</span> <span m="929540">columns.</span> <span
  m="930110">How</span> <span m="930410">many</span> <span
  m="930800">independent</span> <span m="931670">columns</span> <span
  m="932180">have</span> <span m="932330">I</span> <span m="932420">got</span>
  <span m="932690">here?</span></p><p><span m="933882">AUDIENCE:</span> <span
  m="934121">Two.</span></p><p><span m="934360">GILBERT STRANG:</span> <span
  m="934555">Two,</span> <span m="935320">correct.</span> <span
  m="935740">Two.</span> <span m="936970">The</span> <span
  m="937090">third</span> <span m="937420">column,</span> <span
  m="938240">if</span> <span m="938320">I</span> <span m="938590">want</span>
  <span m="938830">to</span> <span m="939130">especially</span> <span
  m="939640">pick</span> <span m="939970">on</span> <span m="940150">that</span>
  <span m="940360">one--</span> <span m="941290">I'll</span> <span
  m="941680">often go</span> <span m="941920">left</span> <span
  m="942330">to</span> <span m="942400">right.</span> <span m="942850">So</span>
  <span m="943120">I'll</span> <span m="943510">say</span> <span
  m="943780">the</span> <span m="943870">first</span> <span
  m="944170">guy</span> <span m="944380">is</span> <span m="944530">good,</span>
  <span m="945120">second</span> <span m="945590">guy</span> <span
  m="945800">is</span> <span m="945920">good,</span> <span m="946230">the</span>
  <span m="946330">third</span> <span m="946630">guy</span> <span
  m="948280">is</span> <span m="948430">not</span> <span
  m="948730">independent</span> <span m="949450">of</span> <span
  m="949570">the</span> <span m="949750">others.</span> <span
  m="951080">So</span> <span m="951250">I</span> <span m="951370">just</span>
  <span m="951640">have</span> <span m="951820">two</span> <span
  m="952120">independent</span> <span m="952690">columns.</span> <span
  m="954290">And</span> <span m="954500">those</span> <span
  m="955610">two</span> <span m="955850">columns</span> <span
  m="956360">would</span> <span m="956600">be</span> <span m="957620">a</span>
  <span m="957680">basis</span> <span m="959180">for</span> <span
  m="959360">the</span> <span m="959480">column</span> <span
  m="959870">space.</span></p><p><span m="961080">So</span> <span
  m="961140">that's</span> <span m="962160">the</span> <span
  m="962330">critical</span> <span m="963020">idea</span> <span
  m="963470">of</span> <span m="963620">linear</span> <span
  m="963950">algebra.</span> <span m="964280">That's</span> <span
  m="964550">what you</span> <span m="964880">compute</span> <span
  m="965390">when</span> <span m="965630">you</span> <span
  m="966110">find</span> <span m="966470">a</span> <span
  m="966530">basis,</span> <span m="967160">and</span> <span
  m="967820">everything</span> <span m="968930">in</span> <span
  m="969050">the</span> <span m="969140">column</span> <span
  m="969530">space</span> <span m="969910">is</span> <span m="970070">a</span>
  <span m="970160">combination</span> <span m="971090">of</span> <span
  m="971180">these,</span> <span m="973260">including</span> <span
  m="973730">that</span> <span m="974090">is</span> <span
  m="974260">also--</span> <span m="974780">that's</span> <span
  m="974930">already</span> <span m="975320">a</span> <span
  m="975380">combination</span> <span m="976040">of</span> <span
  m="976100">those.</span> <span m="976430">But</span> <span
  m="976880">everything</span> <span m="977300">else</span> <span
  m="977600">in</span> <span m="977720">the</span> <span
  m="977810">column</span> <span m="978170">space</span> <span
  m="978920">is</span> <span m="979070">a</span> <span
  m="979130">combination</span> <span m="979880">of</span> <span
  m="979970">those</span> <span m="980300">two.</span> <span
  m="982010">So</span> <span m="982280">they're</span> <span m="982550">a</span>
  <span m="982640">basis</span> <span m="983270">for</span> <span
  m="983540">it.</span></p><p><span m="986200">So</span> <span
  m="986350">you</span> <span m="986440">have</span> <span m="986590">the</span>
  <span m="986740">idea</span> <span m="987370">of</span> <span
  m="988840">A</span> <span m="988990">times</span> <span m="989320">x.</span>
  <span m="991060">You</span> <span m="991180">have</span> <span
  m="991420">the</span> <span m="991540">idea</span> <span m="992020">of</span>
  <span m="992110">column</span> <span m="992590">space</span> <span
  m="993100">of</span> <span m="993250">A,</span> <span m="994090">which</span>
  <span m="994330">allows</span> <span m="994810">all</span> <span
  m="995110">x's.</span> <span m="996470">Then</span> <span
  m="997100">now,</span> <span m="997420">we're</span> <span
  m="997600">moving</span> <span m="998110">into</span> <span
  m="998440">the</span> <span m="998620">idea</span> <span m="999760">of</span>
  <span m="1000690">independent</span> <span m="1001410">columns,</span> <span
  m="1003990">and</span> <span m="1004230">the</span> <span
  m="1004350">number</span> <span m="1004710">of</span> <span
  m="1004860">independent</span> <span m="1005460">columns</span> <span
  m="1006310">is</span> <span m="1006950">the</span> <span
  m="1007110">rank.</span> <span m="1008230">So</span> <span
  m="1008340">the</span> <span m="1008460">rank--</span> <span
  m="1009360">shall</span> <span m="1009570">I</span> <span
  m="1009660">write</span> <span m="1009900">that</span> <span
  m="1010080">somewhere?</span> <span m="1011640">Maybe</span> <span
  m="1012180">here.</span> <span m="1012630">The</span> <span
  m="1012750">rank</span> <span m="1013230">is</span> <span
  m="1013500">the</span> <span m="1013650">number</span> <span
  m="1014070">of</span> <span m="1014640">independent</span> <span
  m="1015420">columns.</span> <span m="1021690">And</span> <span
  m="1022260">right</span> <span m="1022470">now,</span> <span
  m="1022920">what</span> <span m="1023160">do</span> <span m="1023310">I</span>
  <span m="1023400">mean</span> <span m="1023640">by</span> <span
  m="1023850">independent</span> <span m="1024390">columns?</span> <span
  m="1024880">Well,</span> <span m="1025079">let's</span> <span
  m="1025440">just</span> <span m="1026040">see</span> <span
  m="1026310">what</span> <span m="1026460">that</span> <span
  m="1026640">means</span> <span m="1027000">by</span> <span
  m="1027900">using</span> <span m="1028349">it.</span></p><p><span
  m="1030730">Are</span> <span m="1030819">we</span> <span
  m="1030970">good?</span> <span m="1031720">I</span> <span
  m="1031810">know</span> <span m="1032050">I'm</span> <span
  m="1032200">reviewing</span> <span m="1032800">here.</span> <span
  m="1033520">But</span> <span m="1035109">allow</span> <span
  m="1035410">me</span> <span m="1035650">for</span> <span
  m="1035829">this</span> <span m="1036069">first</span> <span
  m="1037440">class</span> <span m="1038040">and</span> <span
  m="1038460">part</span> <span m="1038760">of</span> <span
  m="1039000">next</span> <span m="1039329">time</span> <span
  m="1039690">also</span> <span m="1040020">to</span> <span
  m="1040170">review.</span> <span m="1040589">But</span> <span
  m="1040829">you'll</span> <span m="1040980">see</span> <span
  m="1041190">something</span> <span m="1041609">new.</span> <span
  m="1041970">In</span> <span m="1042270">fact,</span> <span
  m="1042660">why</span> <span m="1042690">don't</span> <span
  m="1042810">we</span> <span m="1042930">see</span> <span
  m="1043109">something</span> <span m="1043470">new</span> <span
  m="1043680">right</span> <span m="1043920">away.</span> <span
  m="1048020">Let</span> <span m="1048230">me</span> <span
  m="1049700">follow</span> <span m="1050090">up</span> <span
  m="1050270">on</span> <span m="1050420">the</span> <span
  m="1050540">idea</span> <span m="1050810">of</span> <span
  m="1050930">independence</span> <span m="1052520">in</span> <span
  m="1052640">a</span> <span m="1052730">systematic</span> <span
  m="1053510">way.</span> <span m="1054900">So</span> <span
  m="1055040">here's</span> <span m="1055310">my</span> <span
  m="1055460">matrix</span> <span m="1055970">A.</span> <span
  m="1060090">Can</span> <span m="1060260">I</span> <span
  m="1060410">write</span> <span m="1060650">that</span> <span
  m="1060830">again?</span> <span m="1061370">2,</span> <span
  m="1062730">3,</span> <span m="1063000">5,</span> <span m="1064610">1,</span>
  <span m="1064850">1,</span> <span m="1065090">7,</span> <span
  m="1066290">and</span> <span m="1066560">this</span> <span
  m="1066860">guy</span> <span m="1067190">was</span> <span
  m="1067580">the</span> <span m="1068060">sum</span> <span
  m="1068420">of</span> <span m="1068570">those.</span> <span
  m="1070430">So</span> <span m="1070580">that's</span> <span
  m="1070850">my</span> <span m="1071000">matrix</span> <span
  m="1071540">A.</span></p><p><span m="1073970">So</span> <span
  m="1074870">let's</span> <span m="1075320">start</span> <span
  m="1075740">from</span> <span m="1075950">scratch</span> <span
  m="1077210">and</span> <span m="1077480">find</span> <span
  m="1077960">a</span> <span m="1078020">basis</span> <span
  m="1078800">for</span> <span m="1078980">the</span> <span
  m="1079100">column</span> <span m="1079520">space</span> <span
  m="1080040">in</span> <span m="1080480">the</span> <span
  m="1080570">most</span> <span m="1080840">natural</span> <span
  m="1081380">way.</span> <span m="1082670">So</span> <span
  m="1082790">I'm</span> <span m="1082900">going</span> <span
  m="1083050">to</span> <span m="1083120">take</span> <span m="1083690">a</span>
  <span m="1083750">basis--</span> <span m="1085760">what's</span> <span
  m="1086020">a</span> <span m="1086090">basis?</span> <span
  m="1087500">A</span> <span m="1087590">basis</span> <span
  m="1088610">is</span> <span m="1090110">independent</span> <span
  m="1090650">columns.</span> <span m="1093270">So</span> <span
  m="1093810">all</span> <span m="1094020">three</span> <span
  m="1094260">together</span> <span m="1094650">would</span> <span
  m="1094800">not</span> <span m="1095010">be</span> <span m="1095160">a</span>
  <span m="1095220">basis.</span> <span m="1096840">But</span> <span
  m="1097110">they</span> <span m="1097290">have</span> <span
  m="1097530">to</span> <span m="1097680">be</span> <span m="1099030">not</span>
  <span m="1099330">just</span> <span m="1099570">independent,</span> <span
  m="1100170">but</span> <span m="1100800">they</span> <span
  m="1100950">have</span> <span m="1101160">to</span> <span
  m="1101310">fill</span> <span m="1101610">the</span> <span
  m="1101730">space--</span> <span m="1102180">their</span> <span
  m="1102360">combinations</span> <span m="1103110">have</span> <span
  m="1103290">to</span> <span m="1103410">fill</span> <span
  m="1103650">the</span> <span m="1103750">space.</span> <span
  m="1104760">So</span> <span m="1105660">2,</span> <span m="1105930">3,</span>
  <span m="1106170">5--</span> <span m="1107580">let's</span> <span
  m="1107850">say</span> <span m="1108510">I</span> <span
  m="1108660">want</span> <span m="1108810">to</span> <span
  m="1108870">create</span> <span m="1109200">a</span> <span
  m="1109260">basis.</span> <span m="1110860">I'll</span> <span
  m="1110910">call</span> <span m="1111180">the</span> <span
  m="1111270">matrix</span> <span m="1111780">C,</span> <span
  m="1113330">a</span> <span m="1113590">basis</span> <span
  m="1114090">for</span> <span m="1114240">the</span> <span
  m="1114360">column</span> <span m="1114720">space.</span></p><p><span
  m="1115080">So</span> <span m="1115400">here's</span> <span
  m="1115680">a</span> <span m="1115770">natural</span> <span
  m="1116190">way</span> <span m="1116370">to</span> <span m="1116490">do</span>
  <span m="1116700">it.</span> <span m="1117460">I</span> <span
  m="1117480">look</span> <span m="1117720">at</span> <span
  m="1117840">the</span> <span m="1117930">first</span> <span
  m="1118260">column.</span> <span m="1121170">It's</span> <span
  m="1121350">not</span> <span m="1121620">0s.</span> <span
  m="1122370">If</span> <span m="1122550">it</span> <span m="1122610">was</span>
  <span m="1122790">all</span> <span m="1123000">0s,</span> <span
  m="1124320">I</span> <span m="1124380">wouldn't</span> <span
  m="1124650">want</span> <span m="1124950">that</span> <span
  m="1125400">in</span> <span m="1125550">a</span> <span
  m="1125610">basis.</span> <span m="1128530">But</span> <span
  m="1128770">it's</span> <span m="1128920">not.</span> <span
  m="1129760">So</span> <span m="1129970">I</span> <span m="1130060">put</span>
  <span m="1130300">it</span> <span m="1130420">in.</span> <span
  m="1131530">So</span> <span m="1131740">that's</span> <span
  m="1132040">the</span> <span m="1132130">first</span> <span
  m="1132550">vector</span> <span m="1132910">in</span> <span
  m="1133030">my</span> <span m="1133210">basis.</span> <span
  m="1135930">Then</span> <span m="1136370">I</span> <span m="1136460">go</span>
  <span m="1136700">on</span> <span m="1136850">to</span> <span
  m="1136910">the</span> <span m="1137060">second</span> <span
  m="1137420">column.</span> <span m="1139130">If</span> <span
  m="1139310">that</span> <span m="1139550">column</span> <span
  m="1140030">was</span> <span m="1140420">4,</span> <span m="1140720">6,</span>
  <span m="1141110">10,</span> <span m="1142890">what</span> <span
  m="1143280">would</span> <span m="1143490">I</span> <span
  m="1143610">do?</span> <span m="1144780">If</span> <span
  m="1145000">that</span> <span m="1145350">second</span> <span
  m="1145710">column</span> <span m="1146040">was</span> <span
  m="1146220">4,</span> <span m="1146460">6,</span> <span m="1146760">10,</span>
  <span m="1147040">would</span> <span m="1147270">I</span> <span
  m="1147360">put</span> <span m="1147630">it</span> <span m="1147750">in</span>
  <span m="1147870">the</span> <span m="1147930">basis?</span> <span
  m="1149084">No.</span> <span m="1151060">But</span> <span
  m="1151300">1,</span> <span m="1151570">1,</span> <span m="1151750">7,</span>
  <span m="1152140">is</span> <span m="1152290">OK,</span> <span
  m="1152760">right?</span> <span m="1153100">1,</span> <span
  m="1153340">1,</span> <span m="1153550">7</span> <span m="1153940">is</span>
  <span m="1154120">in</span> <span m="1154240">a</span> <span
  m="1154330">different</span> <span m="1154690">direction.</span> <span
  m="1155390">It's</span> <span m="1155470">not</span> <span
  m="1155770">a</span> <span m="1155860">combination</span> <span
  m="1156640">of</span> <span m="1157000">what</span> <span
  m="1157180">we've</span> <span m="1157360">already</span> <span
  m="1157660">got.</span> <span m="1158380">So</span> <span m="1158620">I</span>
  <span m="1158710">say,</span> <span m="1158950">OK,</span> <span
  m="1159800">that</span> <span m="1160060">adds</span> <span
  m="1160270">something</span> <span m="1160690">new.</span> <span
  m="1160980">Put</span> <span m="1161230">it</span> <span
  m="1161350">in.</span></p><p><span m="1163500">Then</span> <span
  m="1163710">I</span> <span m="1163800">move</span> <span m="1164040">on</span>
  <span m="1164240">to</span> <span m="1164340">the</span> <span
  m="1164490">third</span> <span m="1164820">column.</span> <span
  m="1166590">Do</span> <span m="1166800">I</span> <span m="1166950">put</span>
  <span m="1167250">that</span> <span m="1167520">into</span> <span
  m="1167820">a</span> <span m="1167880">basis?</span> <span
  m="1169730">You</span> <span m="1169880">know</span> <span
  m="1170090">the</span> <span m="1170270">answer</span> <span
  m="1170570">by</span> <span m="1170780">now.</span> <span
  m="1171110">No.</span> <span m="1172130">Because</span> <span
  m="1172580">I'm</span> <span m="1172820">looking</span> <span
  m="1173150">to</span> <span m="1173240">see,</span> <span
  m="1174410">is</span> <span m="1174680">it</span> <span m="1174830">a</span>
  <span m="1174920">combination</span> <span m="1175640">of</span> <span
  m="1175700">these</span> <span m="1176030">guys?</span> <span
  m="1177140">And</span> <span m="1177350">it</span> <span
  m="1177470">is.</span> <span m="1178640">It's</span> <span
  m="1178820">one</span> <span m="1179150">of</span> <span
  m="1179240">that</span> <span m="1179510">plus</span> <span
  m="1179780">one</span> <span m="1179990">of</span> <span
  m="1180110">that.</span> <span m="1180650">So</span> <span
  m="1180860">it's</span> <span m="1180980">not</span> <span
  m="1181310">independent.</span> <span m="1182120">So</span> <span
  m="1182810">I've</span> <span m="1183500">finished</span> <span
  m="1183950">now.</span> <span m="1185730">I've</span> <span
  m="1185910">got</span> <span m="1186740">a</span> <span
  m="1187350">matrix</span> <span m="1187920">C,</span> <span
  m="1188550">which</span> <span m="1188820">was</span> <span
  m="1189300">taken</span> <span m="1189840">directly</span> <span
  m="1190440">from</span> <span m="1190680">A,</span> <span
  m="1191974">and</span> <span m="1192880">I</span> <span
  m="1193030">kept</span> <span m="1193420">only</span> <span
  m="1193900">independent</span> <span m="1194560">columns</span> <span
  m="1195100">and</span> <span m="1195250">I</span> <span
  m="1195340">worked</span> <span m="1195670">from</span> <span
  m="1195970">left</span> <span m="1196240">to</span> <span
  m="1196360">right.</span> <span m="1198360">And</span> <span
  m="1198570">I</span> <span m="1198660">can</span> <span m="1198870">see</span>
  <span m="1199230">that</span> <span m="1199380">right</span> <span
  m="1199620">away</span> <span m="1199920">now</span> <span
  m="1200190">that</span> <span m="1200370">the</span> <span
  m="1200490">rank</span> <span m="1200900">is</span> <span
  m="1201000">two--</span> <span m="1202230">the</span> <span
  m="1202350">column</span> <span m="1202800">rank,</span> <span
  m="1203840">I</span> <span m="1204540">should</span> <span
  m="1204720">say--</span> <span m="1204930">the</span> <span
  m="1205050">column</span> <span m="1205530">rank.</span> <span
  m="1206350">The</span> <span m="1206520">number</span> <span
  m="1206820">of</span> <span m="1206940">independent</span> <span
  m="1207510">columns</span> <span m="1207960">is</span> <span
  m="1208260">two.</span> <span m="1212747">Good?</span></p><p><span
  m="1216060">Now</span> <span m="1216570">comes</span> <span
  m="1217230">the</span> <span m="1217320">key</span> <span
  m="1217800">step.</span> <span m="1219830">I'm</span> <span
  m="1220010">going</span> <span m="1220180">to</span> <span
  m="1220850">produce</span> <span m="1223730">a</span> <span
  m="1224100">third</span> <span m="1224450">matrix,</span> <span
  m="1225020">R,</span> <span m="1226790">which</span> <span
  m="1227060">is</span> <span m="1227210">going</span> <span
  m="1227380">to</span> <span m="1227510">tell</span> <span
  m="1227930">me</span> <span m="1230110">how</span> <span m="1230500">to</span>
  <span m="1230620">get</span> <span m="1231070">these</span> <span
  m="1231550">columns</span> <span m="1232090">from</span> <span
  m="1232330">these</span> <span m="1232600">columns.</span> <span
  m="1235160">And</span> <span m="1235340">its</span> <span
  m="1235490">shape</span> <span m="1235970">is</span> <span
  m="1236150">going</span> <span m="1236360">to</span> <span
  m="1236450">be--</span> <span m="1237290">well,</span> <span
  m="1237500">its</span> <span m="1237620">shape--</span> <span
  m="1238070">I</span> <span m="1238160">don't</span> <span
  m="1238400">have</span> <span m="1238550">any</span> <span
  m="1238730">choice.</span> <span m="1240140">This</span> <span
  m="1240440">is</span> <span m="1240620">three</span> <span
  m="1240920">by</span> <span m="1241160">two,</span> <span
  m="1242270">so</span> <span m="1242570">Rx</span> <span
  m="1243170">would</span> <span m="1243260">be</span> <span
  m="1243440">two</span> <span m="1243740">by</span> <span
  m="1244010">something.</span> <span m="1245960">So</span> <span
  m="1246230">I'm</span> <span m="1246620">like</span> <span
  m="1246950">so.</span> <span m="1248840">I</span> <span
  m="1248960">guess</span> <span m="1249200">it</span> <span
  m="1249290">has</span> <span m="1249530">to</span> <span m="1249620">be</span>
  <span m="1249770">two</span> <span m="1249980">by</span> <span
  m="1250220">three</span> <span m="1250520">because</span> <span
  m="1250790">I</span> <span m="1250880">want</span> <span m="1251060">to</span>
  <span m="1251120">come</span> <span m="1251360">out</span> <span
  m="1251540">this</span> <span m="1251780">way,</span> <span
  m="1252560">two</span> <span m="1252740">by</span> <span
  m="1252950">three.</span> <span m="1255230">What</span> <span
  m="1255380">am</span> <span m="1255500">I</span> <span
  m="1255590">going</span> <span m="1255740">to</span> <span
  m="1255830">do</span> <span m="1256040">here?</span> <span
  m="1257670">I'm</span> <span m="1257870">just</span> <span
  m="1258080">going</span> <span m="1258230">to</span> <span
  m="1258320">put</span> <span m="1258560">it</span> <span m="1258590">in</span>
  <span m="1258740">the</span> <span m="1258860">numbers</span> <span
  m="1259310">R</span> <span m="1259580">that</span> <span
  m="1259760">make</span> <span m="1260030">this</span> <span
  m="1260270">correct.</span></p><p><span m="1264150">So</span> <span
  m="1264360">this</span> <span m="1264570">is</span> <span m="1264720">a</span>
  <span m="1264810">first</span> <span m="1265590">matrix</span> <span
  m="1266250">factorization.</span> <span m="1267600">It's</span> <span
  m="1267810">not--</span> <span m="1268320">well,</span> <span
  m="1269010">it</span> <span m="1269160">is</span> <span m="1269370">a</span>
  <span m="1269460">famous</span> <span m="1269910">one,</span> <span
  m="1270120">actually.</span> <span m="1270510">When</span> <span
  m="1270690">we</span> <span m="1270840">see</span> <span
  m="1271080">it,</span> <span m="1271200">we'll</span> <span
  m="1271350">recognize</span> <span m="1272040">what</span> <span
  m="1272280">it</span> <span m="1272400">is.</span> <span
  m="1274930">It's</span> <span m="1275460">famous</span> <span
  m="1276000">in</span> <span m="1276360">teaching</span> <span
  m="1276930">linear</span> <span m="1277290">algebra,</span> <span
  m="1277850">but</span> <span m="1278070">now,</span> <span
  m="1278560">actually,</span> <span m="1279660">C</span> <span
  m="1280080">times</span> <span m="1280560">R,</span> <span
  m="1280890">columns</span> <span m="1281370">times</span> <span
  m="1281770">rows</span> <span m="1282210">has</span> <span
  m="1282360">become</span> <span m="1282900">very,</span> <span
  m="1283420">very</span> <span m="1283710">important</span> <span
  m="1284700">in</span> <span m="1286350">large</span> <span
  m="1286740">scale</span> <span m="1288120">numerical</span> <span
  m="1288690">linear</span> <span m="1288990">algebra.</span> <span
  m="1291490">So</span> <span m="1291660">let's</span> <span
  m="1291960">figure</span> <span m="1292350">out</span> <span
  m="1292500">what</span> <span m="1292770">goes</span> <span
  m="1293100">into</span> <span m="1293370">R.</span> <span
  m="1298610">What</span> <span m="1298760">am</span> <span m="1298880">I</span>
  <span m="1298970">thinking</span> <span m="1299420">here?</span> <span
  m="1300560">I'm</span> <span m="1300740">putting</span> <span
  m="1301160">in</span> <span m="1301540">R.</span> <span m="1303020">So</span>
  <span m="1303530">every</span> <span m="1303790">one</span> <span
  m="1304010">of</span> <span m="1304100">these</span> <span
  m="1304400">columns</span> <span m="1304940">is</span> <span
  m="1305090">a</span> <span m="1305150">combination</span> <span
  m="1305900">of</span> <span m="1305990">these.</span> <span
  m="1306350">That's</span> <span m="1306590">the</span> <span
  m="1306710">whole</span> <span m="1306950">point.</span> <span
  m="1308300">And</span> <span m="1308450">I'm</span> <span
  m="1308600">just</span> <span m="1308810">going</span> <span
  m="1308920">to</span> <span m="1309050">put</span> <span m="1309270">in</span>
  <span m="1309410">the</span> <span m="1309530">numbers</span> <span
  m="1310670">that</span> <span m="1310910">you</span> <span
  m="1311030">need.</span></p><p><span m="1312080">So</span> <span
  m="1312260">what</span> <span m="1312500">goes</span> <span
  m="1312800">in</span> <span m="1312920">the</span> <span
  m="1313010">first</span> <span m="1313340">column</span> <span
  m="1313730">of</span> <span m="1313880">R?</span> <span
  m="1314960">What</span> <span m="1315110">goes</span> <span
  m="1315380">in</span> <span m="1315500">the</span> <span
  m="1315590">first</span> <span m="1315890">column</span> <span
  m="1316280">of</span> <span m="1316430">R?</span> <span m="1317300">So</span>
  <span m="1317510">I</span> <span m="1317630">want</span> <span
  m="1317840">to</span> <span m="1317930">look,</span> <span
  m="1318380">what</span> <span m="1318710">combination</span> <span
  m="1319460">of</span> <span m="1319580">that</span> <span
  m="1320720">column</span> <span m="1321170">and</span> <span
  m="1321260">that</span> <span m="1321500">column</span> <span
  m="1321980">gives</span> <span m="1322280">me</span> <span
  m="1322700">this</span> <span m="1322970">one?</span> <span
  m="1323810">Yeah?</span></p><p><span m="1323950">AUDIENCE:</span> <span
  m="1324141">1,</span> <span m="1324333">0.</span></p><p><span
  m="1325100">GILBERT STRANG:</span> <span m="1325205">1,</span> <span
  m="1325310">0.</span> <span m="1331210">Because</span> <span
  m="1331480">you</span> <span m="1331570">remember</span> <span
  m="1331930">how</span> <span m="1332080">we</span> <span
  m="1333100">multiply</span> <span m="1333640">a</span> <span
  m="1333700">matrix</span> <span m="1334210">by</span> <span
  m="1334390">a</span> <span m="1334450">vector?</span> <span
  m="1336750">When</span> <span m="1336880">I</span> <span
  m="1336970">multiply</span> <span m="1337360">that</span> <span
  m="1337540">matrix</span> <span m="1338050">by</span> <span
  m="1338230">that</span> <span m="1338440">vector,</span> <span
  m="1338860">I</span> <span m="1338980">take</span> <span
  m="1339280">one</span> <span m="1339700">of</span> <span
  m="1339850">this</span> <span m="1340300">plus</span> <span
  m="1340600">zero</span> <span m="1340960">of</span> <span
  m="1341110">that.</span> <span m="1341410">I</span> <span
  m="1341530">see</span> <span m="1341800">it</span> <span
  m="1341940">vector-wise,</span> <span m="1343420">and</span> <span
  m="1343630">of</span> <span m="1343720">course</span> <span
  m="1344020">I</span> <span m="1344110">get</span> <span m="1344320">it</span>
  <span m="1344440">right.</span> <span m="1345580">And</span> <span
  m="1345820">what</span> <span m="1346030">about</span> <span
  m="1346270">the</span> <span m="1346420">second</span> <span
  m="1346870">column</span> <span m="1347290">of</span> <span
  m="1347440">R?</span> <span m="1348460">So</span> <span m="1348640">the</span>
  <span m="1348760">second</span> <span m="1349180">column</span> <span
  m="1349600">should</span> <span m="1349840">be</span> <span
  m="1349990">the</span> <span m="1350140">combination</span> <span
  m="1350980">that</span> <span m="1351130">produces</span> <span
  m="1352450">the</span> <span m="1352570">second</span> <span
  m="1352930">column</span> <span m="1353320">of</span> <span
  m="1353470">A</span> <span m="1353710">correctly.</span> <span
  m="1354820">What</span> <span m="1355170">will</span> <span
  m="1355330">that</span> <span m="1355480">be?</span></p><p><span
  m="1355720">AUDIENCE:</span> <span m="1355950">0,</span> <span
  m="1356180">1.</span></p><p><span m="1356640">GILBERT STRANG:</span> <span
  m="1356795">0,</span> <span m="1356950">1.</span> <span
  m="1357290">Thanks.</span> <span m="1359570">And</span> <span
  m="1359810">finally</span> <span m="1360440">the</span> <span
  m="1360590">third</span> <span m="1360890">column?</span></p><p><span
  m="1361736">AUDIENCE:</span> <span m="1361964">1,</span> <span
  m="1362192">1.</span></p><p><span m="1362650">GILBERT STRANG:</span> <span
  m="1362817">1,</span> <span m="1363320">1.</span> <span
  m="1364040">Yes,</span> <span m="1364580">right.</span> <span
  m="1365570">Because</span> <span m="1366050">one</span> <span
  m="1366590">of</span> <span m="1366740">this</span> <span
  m="1367100">plus</span> <span m="1367370">one</span> <span
  m="1367610">of</span> <span m="1367730">this</span> <span
  m="1368000">produces</span> <span m="1368600">the</span> <span
  m="1368720">third</span> <span m="1369020">column.</span> <span
  m="1370690">So</span> <span m="1371120">all</span> <span m="1371360">I</span>
  <span m="1371480">did</span> <span m="1371720">was</span> <span
  m="1371960">put</span> <span m="1372260">in</span> <span
  m="1372440">the</span> <span m="1372560">right</span> <span
  m="1372830">numbers</span> <span m="1373400">there,</span> <span
  m="1373730">really.</span> <span m="1383220">And</span> <span
  m="1385780">this</span> <span m="1386050">is</span> <span
  m="1386200">correct</span> <span m="1386690">now.</span> <span
  m="1387070">A</span> <span m="1387400">is C</span> <span
  m="1387820">times</span> <span m="1388270">R.</span> <span
  m="1389290">And</span> <span m="1389690">so</span> <span
  m="1390430">this</span> <span m="1390760">is--</span> <span
  m="1392380">what</span> <span m="1392590">I've</span> <span
  m="1392710">done</span> <span m="1392920">here</span> <span
  m="1393220">is</span> <span m="1393610">the</span> <span
  m="1393700">first</span> <span m="1394090">two</span> <span
  m="1394390">pages</span> <span m="1395590">of</span> <span
  m="1395740">section</span> <span m="1396220">1.1</span> <span
  m="1397990">in</span> <span m="1398290">these</span> <span
  m="1399340">notes.</span> <span m="1400395">So</span> <span
  m="1400850">1.1.</span> <span m="1405900">And</span> <span
  m="1406610">actually,</span> <span m="1407400">I'll</span> <span
  m="1407580">tell</span> <span m="1407850">you</span> <span
  m="1408060">literally</span> <span m="1408600">what</span> <span
  m="1408840">happened</span> <span m="1410550">earlier</span> <span
  m="1411030">this</span> <span m="1411450">year.</span> <span
  m="1412980">I</span> <span m="1413280">had</span> <span
  m="1413520">finished</span> <span m="1413940">this.</span> <span
  m="1414510">I</span> <span m="1414570">wrote</span> <span
  m="1415290">this</span> <span m="1415500">down</span> <span
  m="1415800">with</span> <span m="1416010">a</span> <span
  m="1416580">different</span> <span m="1416970">example.</span></p><p><span
  m="1418830">And</span> <span m="1419460">then</span> <span
  m="1419910">I</span> <span m="1420120">realized</span> <span
  m="1420750">something,</span> <span m="1422240">that</span> <span
  m="1423300">sitting</span> <span m="1423720">here</span> <span
  m="1424290">in</span> <span m="1424440">front</span> <span
  m="1424740">of</span> <span m="1424800">me</span> <span m="1425100">was</span>
  <span m="1427470">the</span> <span m="1427650">first</span> <span
  m="1428100">great</span> <span m="1428430">theorem</span> <span
  m="1428850">in</span> <span m="1429000">linear</span> <span
  m="1429390">algebra,</span> <span m="1430800">the</span> <span
  m="1430950">fact</span> <span m="1431400">that</span> <span
  m="1431700">the</span> <span m="1431820">column</span> <span
  m="1432300">rank</span> <span m="1433380">equals</span> <span
  m="1434570">the</span> <span m="1434700">row</span> <span
  m="1435030">rank.</span> <span m="1437700">The</span> <span
  m="1437790">fact</span> <span m="1438150">that</span> <span
  m="1438330">if</span> <span m="1438450">I</span> <span m="1438570">have</span>
  <span m="1438810">a</span> <span m="1438870">matrix</span> <span
  m="1443560">where</span> <span m="1443980">that</span> <span
  m="1444220">column</span> <span m="1444580">plus</span> <span
  m="1444800">that</span> <span m="1445060">column</span> <span
  m="1445450">gives</span> <span m="1445750">that</span> <span
  m="1445960">one.</span> <span m="1446840">Oh.</span> <span
  m="1450360">So</span> <span m="1450550">what</span> <span
  m="1450710">am</span> <span m="1450830">I</span> <span
  m="1450950">going</span> <span m="1451130">to</span> <span
  m="1451220">say</span> <span m="1451670">here?</span> <span
  m="1452120">I'm</span> <span m="1452270">getting</span> <span
  m="1452570">nervous</span> <span m="1453050">about</span> <span
  m="1453380">it.</span> <span m="1454920">I</span> <span
  m="1455000">believe</span> <span m="1455420">that</span> <span
  m="1455600">a</span> <span m="1455660">combination</span> <span
  m="1456440">of</span> <span m="1456560">the</span> <span
  m="1456680">rows</span> <span m="1458360">gives</span> <span
  m="1458630">0.</span> <span m="1460070">Do</span> <span m="1460160">you</span>
  <span m="1460370">believe</span> <span m="1460820">that?</span> <span
  m="1461570">You've</span> <span m="1461660">got</span> <span
  m="1461810">to</span> <span m="1461960">believe</span> <span
  m="1462440">it.</span> <span m="1462830">This is</span> <span
  m="1463110">linear</span> <span m="1463430">algebra.</span></p><p><span
  m="1464120">The</span> <span m="1465110">matrix</span> <span
  m="1465770">is</span> <span m="1465890">not</span> <span
  m="1466220">invertible,</span> <span m="1467180">it's</span> <span
  m="1467620">square.</span> <span m="1468410">But</span> <span
  m="1468830">the</span> <span m="1469760">columns</span> <span
  m="1470360">are</span> <span m="1470480">dependent.</span> <span
  m="1472020">So</span> <span m="1472160">the</span> <span
  m="1472280">rows</span> <span m="1472820">have</span> <span
  m="1473060">to</span> <span m="1473180">be</span> <span
  m="1473390">dependent.</span> <span m="1474800">And</span> <span
  m="1474980">I</span> <span m="1475100">don't</span> <span
  m="1475490">exactly</span> <span m="1476210">see--</span> <span
  m="1478230">there's</span> <span m="1478640">some</span> <span
  m="1478910">combination</span> <span m="1479630">of</span> <span
  m="1479780">that</span> <span m="1480080">row</span> <span
  m="1480560">and</span> <span m="1480710">that</span> <span
  m="1480950">row</span> <span m="1481280">that</span> <span
  m="1481430">gives</span> <span m="1481700">that</span> <span
  m="1481910">one.</span> <span m="1483080">And</span> <span
  m="1483650">of</span> <span m="1483710">course,</span> <span
  m="1483980">when</span> <span m="1484160">I</span> <span
  m="1484280">looked</span> <span m="1484550">at</span> <span
  m="1484640">the</span> <span m="1484730">first</span> <span
  m="1485030">column,</span> <span m="1485390">I</span> <span
  m="1485480">thought,</span> <span m="1485770">OK,</span> <span
  m="1486560">it's</span> <span m="1486740">going</span> <span
  m="1486860">to</span> <span m="1486980">be</span> <span m="1488780">too</span>
  <span m="1489110">easy.</span> <span m="1489980">One</span> <span
  m="1490280">of</span> <span m="1490400">that</span> <span
  m="1490720">and</span> <span m="1490820">one</span> <span
  m="1490910">of</span> <span m="1490990">that</span> <span
  m="1491210">gives</span> <span m="1491450">that.</span> <span
  m="1491810">But</span> <span m="1492680">then</span> <span
  m="1492920">my</span> <span m="1493190">eye</span> <span
  m="1493700">went</span> <span m="1493970">over</span> <span
  m="1494210">to</span> <span m="1494300">the</span> <span
  m="1494420">second</span> <span m="1494900">column,</span> <span
  m="1495320">and</span> <span m="1495440">I</span> <span
  m="1495590">realized</span> <span m="1496070">it's</span> <span
  m="1496520">not</span> <span m="1496820">easy</span> <span
  m="1497180">at</span> <span m="1497300">all.</span> <span
  m="1497850">So</span> <span m="1498440">you're</span> <span
  m="1498680">entitled</span> <span m="1499210">to</span> <span
  m="1499320">pull</span> <span m="1499670">out</span> <span
  m="1501650">your</span> <span m="1501830">phone</span> <span
  m="1502340">and</span> <span m="1502460">figure</span> <span
  m="1502880">this</span> <span m="1503180">out.</span></p><p><span
  m="1503810">But</span> <span m="1504050">there</span> <span
  m="1504260">is</span> <span m="1504410">some</span> <span
  m="1505220">damn</span> <span m="1505580">combination</span> <span
  m="1506410">of</span> <span m="1506480">those--</span></p><p><span
  m="1506894">[LAUGHTER]</span></p><p><span m="1508136">--of</span> <span
  m="1508550">those two</span> <span m="1508910">rows</span> <span
  m="1509420">that</span> <span m="1509510">gives</span> <span
  m="1509780">the</span> <span m="1509900">third</span> <span
  m="1510290">row.</span> <span m="1511220">Otherwise,</span> <span
  m="1512030">the</span> <span m="1512240">course</span> <span
  m="1512510">is</span> <span m="1512780">over,</span> <span
  m="1513140">we</span> <span m="1513590">stop.</span> <span
  m="1517720">Well,</span> <span m="1517980">and</span> <span
  m="1518250">maybe</span> <span m="1518600">we're</span> <span
  m="1518750">going</span> <span m="1518890">to</span> <span
  m="1519050">find</span> <span m="1520310">somehow.</span> <span
  m="1524200">So</span> <span m="1524820">this</span> <span
  m="1525090">is</span> <span m="1525240">the</span> <span
  m="1525360">theorem.</span> <span m="1526050">So</span> <span
  m="1526860">I</span> <span m="1526950">have</span> <span m="1527130">to</span>
  <span m="1527760">tell</span> <span m="1528030">you,</span> <span
  m="1528860">I</span> <span m="1529010">was</span> <span
  m="1529380">really</span> <span m="1529800">pleased.</span></p><p><span
  m="1530880">So</span> <span m="1531090">the</span> <span
  m="1531330">first</span> <span m="1531690">two</span> <span
  m="1531870">pages</span> <span m="1532380">got</span> <span
  m="1532770">two</span> <span m="1532950">more</span> <span
  m="1533190">pages</span> <span m="1534450">to</span> <span
  m="1534870">follow</span> <span m="1535320">up</span> <span
  m="1535500">on</span> <span m="1535650">that</span> <span
  m="1535890">idea,</span> <span m="1536340">that</span> <span
  m="1536520">here,</span> <span m="1536730">we</span> <span
  m="1536910">were</span> <span m="1537090">seeing</span> <span
  m="1537480">something</span> <span m="1537960">that--</span> <span
  m="1538710">I</span> <span m="1539400">proved</span> <span
  m="1540090">in</span> <span m="1540240">18.06,</span> <span
  m="1541320">but</span> <span m="1542340">not</span> <span
  m="1542790">in</span> <span m="1544320">the</span> <span
  m="1544410">first</span> <span m="1544710">lecture,</span> <span
  m="1545160">that's</span> <span m="1545400">for</span> <span
  m="1545550">sure,</span> <span m="1546060">and</span> <span
  m="1546510">not</span> <span m="1548080">maybe</span> <span
  m="1548370">so</span> <span m="1548580">clearly.</span> <span
  m="1549330">But</span> <span m="1549570">now</span> <span m="1549870">I</span>
  <span m="1550170">can</span> <span m="1551040">try</span> <span
  m="1551310">to</span> <span m="1551430">prove</span> <span
  m="1551760">it.</span> <span m="1554310">There</span> <span
  m="1554460">won't</span> <span m="1554640">be</span> <span
  m="1554760">a</span> <span m="1554820">lot</span> <span m="1555090">of</span>
  <span m="1555150">proofs</span> <span m="1555630">in</span> <span
  m="1555780">this</span> <span m="1556410">class,</span> <span
  m="1556890">but</span> <span m="1557280">this</span> <span
  m="1557670">is</span> <span m="1557790">such</span> <span
  m="1558120">an</span> <span m="1558240">important</span> <span
  m="1558720">fact--</span> <span m="1559650">A</span> <span
  m="1559920">equals</span> <span m="1560205">CR</span> <span
  m="1560490">is</span> <span m="1560820">an</span> <span
  m="1561000">important</span> <span m="1561510">factorization.</span> <span
  m="1562590">And</span> <span m="1563520">out</span> <span
  m="1563760">of</span> <span m="1563880">it,</span> <span m="1564990">we</span>
  <span m="1565140">can</span> <span m="1565350">connect</span> <span
  m="1565800">them.</span></p><p><span m="1566730">So</span> <span
  m="1566910">what</span> <span m="1567060">am</span> <span m="1567180">I</span>
  <span m="1567330">saying?</span> <span m="1568650">I</span> <span
  m="1569050">am</span> <span m="1569400">saying</span> <span
  m="1570330">that</span> <span m="1572070">all--</span> <span
  m="1576630">so</span> <span m="1576870">what's</span> <span
  m="1577170">the</span> <span m="1577260">row</span> <span
  m="1577500">rank?</span> <span m="1578550">I have to</span> <span
  m="1578940">back</span> <span m="1579230">up</span> <span
  m="1579390">here.</span> <span m="1580110">What's</span> <span
  m="1580380">the</span> <span m="1580500">row</span> <span
  m="1580770">rank?</span> <span m="1582690">What's</span> <span
  m="1582990">the</span> <span m="1583080">row</span> <span
  m="1583380">space?</span> <span m="1584160">So</span> <span
  m="1584370">the</span> <span m="1584460">row</span> <span
  m="1584700">rank</span> <span m="1585210">is</span> <span
  m="1585390">going</span> <span m="1585530">to</span> <span
  m="1585660">be</span> <span m="1585990">the</span> <span
  m="1587050">dimension</span> <span m="1587820">of</span> <span
  m="1587970">that</span> <span m="1588330">space.</span> <span
  m="1589740">So</span> <span m="1589950">I</span> <span m="1590040">look</span>
  <span m="1590250">at</span> <span m="1590310">my</span> <span
  m="1590490">matrix</span> <span m="1591030">A.</span> <span
  m="1591330">What's</span> <span m="1591630">the</span> <span
  m="1591780">row</span> <span m="1592140">space</span> <span
  m="1592650">of</span> <span m="1592770">A?</span> <span m="1596000">I'm</span>
  <span m="1596090">going</span> <span m="1596200">to</span> <span
  m="1596330">look</span> <span m="1596510">at</span> <span
  m="1596630">its</span> <span m="1596810">rows.</span> <span
  m="1598590">Now,</span> <span m="1599340">maybe</span> <span
  m="1599790">just</span> <span m="1600450">so</span> <span
  m="1600660">we</span> <span m="1600780">don't</span> <span
  m="1600990">get</span> <span m="1601650">whole</span> <span
  m="1601920">new</span> <span m="1602190">letters</span> <span
  m="1602760">for</span> <span m="1602940">the</span> <span
  m="1603060">row</span> <span m="1603420">space--</span> <span
  m="1606960">for</span> <span m="1607110">me,</span> <span
  m="1607350">the</span> <span m="1607500">row</span> <span
  m="1607830">space</span> <span m="1608670">of</span> <span
  m="1608920">A</span> <span m="1610200">of</span> <span m="1610625">a</span>
  <span m="1611050">matrix--</span> <span m="1612540">so</span> <span
  m="1612750">first</span> <span m="1613080">of</span> <span
  m="1613140">all,</span> <span m="1613290">tell</span> <span
  m="1613500">me</span> <span m="1613680">in</span> <span
  m="1613800">words</span> <span m="1614190">what</span> <span
  m="1614400">it</span> <span m="1614550">is.</span> <span
  m="1616180">What's</span> <span m="1616480">the</span> <span
  m="1616600">row</span> <span m="1617110">space</span> <span
  m="1617740">of</span> <span m="1617890">the</span> <span
  m="1617980">matrix?</span></p><p><span m="1619072">AUDIENCE:</span> <span
  m="1619273">[INAUDIBLE]</span></p><p><span m="1620280">GILBERT STRANG:</span>
  <span m="1620452">All</span> <span m="1620970">combinations</span> <span
  m="1622080">of</span> <span m="1623220">the</span> <span
  m="1623460">rows.</span> <span m="1624960">All</span> <span
  m="1625260">combinations</span> <span m="1626040">of</span> <span
  m="1626190">the</span> <span m="1626310">rows,</span> <span
  m="1627570">that's</span> <span m="1627900">the</span> <span
  m="1628020">space.</span> <span m="1629520">So</span> <span
  m="1629760">I</span> <span m="1629850">would</span> <span
  m="1630960">take</span> <span m="1631260">all</span> <span
  m="1631410">combinations</span> <span m="1632160">of</span> <span
  m="1632280">those</span> <span m="1632610">rows.</span> <span
  m="1633960">To</span> <span m="1634080">get</span> <span
  m="1634320">combinations</span> <span m="1635040">of</span> <span
  m="1635130">the</span> <span m="1635220">rows--</span> <span
  m="1636930">well,</span> <span m="1637230">two</span> <span
  m="1637440">ways</span> <span m="1637800">I</span> <span
  m="1637890">can</span> <span m="1638040">get</span> <span
  m="1638220">combinations</span> <span m="1639000">of</span> <span
  m="1639090">the</span> <span m="1639180">rows.</span> <span
  m="1639630">And</span> <span m="1639720">the</span> <span
  m="1639810">way</span> <span m="1640020">I'll</span> <span
  m="1640170">do</span> <span m="1640410">it</span> <span m="1641040">is,</span>
  <span m="1641700">I'll</span> <span m="1641820">just</span> <span
  m="1642090">transpose</span> <span m="1642960">the</span> <span
  m="1643080">matrix.</span> <span m="1645250">So</span> <span
  m="1645390">those</span> <span m="1645660">rows</span> <span
  m="1646050">become</span> <span m="1646470">columns,</span> <span
  m="1647470">and</span> <span m="1647570">then</span> <span
  m="1647610">I'm</span> <span m="1647730">back</span> <span
  m="1648030">to</span> <span m="1648360">what</span> <span m="1648600">I</span>
  <span m="1649200">did.</span> <span m="1649770">So</span> <span
  m="1650310">the</span> <span m="1650370">row</span> <span
  m="1650640">space</span> <span m="1651060">of</span> <span
  m="1651210">A</span> <span m="1651600">is</span> <span m="1651960">the</span>
  <span m="1652410">column</span> <span m="1652920">space</span> <span
  m="1654780">of</span> <span m="1655020">A</span> <span
  m="1655200">transpose.</span> <span m="1656850">And</span> <span
  m="1657090">this</span> <span m="1657330">has</span> <span
  m="1657540">the</span> <span m="1657690">advantage</span> <span
  m="1658260">that</span> <span m="1658770">we</span> <span
  m="1658920">don't</span> <span m="1659190">introduce</span> <span
  m="1659730">a</span> <span m="1659790">new</span> <span
  m="1660000">letter.</span> <span m="1661260">So</span> <span
  m="1662130">it'll</span> <span m="1662310">be</span> <span
  m="1662470">the</span> <span m="1662610">column</span> <span
  m="1663120">space</span> <span m="1664110">of</span> <span
  m="1664260">A</span> <span m="1664860">transpose.</span></p><p><span
  m="1668140">So</span> <span m="1668160">we</span> <span
  m="1668250">don't</span> <span m="1668490">introduce</span> <span
  m="1669030">a</span> <span m="1669090">new</span> <span
  m="1669330">letter.</span> <span m="1669780">We</span> <span
  m="1670470">keep</span> <span m="1670860">the</span> <span
  m="1671130">convention</span> <span m="1671850">that</span> <span
  m="1672030">vectors</span> <span m="1672600">are</span> <span
  m="1672720">column</span> <span m="1673170">vectors,</span> <span
  m="1674160">which</span> <span m="1674370">would</span> <span
  m="1674550">be</span> <span m="1674760">the</span> <span
  m="1674910">MATLAB</span> <span m="1676350">and</span> <span
  m="1677280">Julia</span> <span m="1677990">and</span> <span
  m="1681540">Python</span> <span m="1682420">convention.</span> <span
  m="1683730">So</span> <span m="1683940">is</span> <span
  m="1684030">that</span> <span m="1684230">OK?</span> <span
  m="1685290">The</span> <span m="1685400">row</span> <span m="1685780">space
  is</span> <span m="1686230">the</span> <span m="1686310">combination</span>
  <span m="1687090">of</span> <span m="1687180">these</span> <span
  m="1687510">rows.</span> <span m="1688020">But</span> <span
  m="1688230">I'll</span> <span m="1688770">flip--</span> <span
  m="1689220">I'll</span> <span m="1689310">make</span> <span
  m="1689520">them</span> <span m="1689730">stand</span> <span
  m="1690240">up--</span> <span m="1690840">2,</span> <span
  m="1691080">1,</span> <span m="1691290">3--</span> <span m="1693120">to</span>
  <span m="1693240">be</span> <span m="1693450">column</span> <span
  m="1693840">vectors.</span> <span m="1695470">So</span> <span
  m="1695620">it's</span> <span m="1695740">a</span> <span
  m="1695860">totally</span> <span m="1696220">different</span> <span
  m="1696610">space.</span> <span m="1697630">And</span> <span
  m="1698380">actually,</span> <span m="1699220">I</span> <span
  m="1699430">happened</span> <span m="1699760">to</span> <span
  m="1699880">take</span> <span m="1700240">a</span> <span
  m="1700660">three</span> <span m="1700960">by</span> <span
  m="1701200">three</span> <span m="1701530">example,</span> <span
  m="1702520">so</span> <span m="1702750">that the</span> <span
  m="1703060">column</span> <span m="1703540">space</span> <span
  m="1705160">is</span> <span m="1705400">part</span> <span
  m="1705700">of</span> <span m="1705860">R3</span> <span m="1707320">and</span>
  <span m="1707530">the</span> <span m="1707620">row</span> <span
  m="1707920">space</span> <span m="1708430">is</span> <span
  m="1708580">also</span> <span m="1708880">part</span> <span
  m="1709180">of</span> <span m="1709300">R3.</span> <span
  m="1709780">Because</span> <span m="1710020">my</span> <span
  m="1710200">matrix</span> <span m="1710710">is</span> <span
  m="1711100">three</span> <span m="1711370">by</span> <span
  m="1711550">three.</span></p><p><span m="1712270">A</span> <span
  m="1712330">better</span> <span m="1712720">example--</span> <span
  m="1715240">and</span> <span m="1715480">the</span> <span
  m="1715570">whole</span> <span m="1715780">point</span> <span
  m="1716080">of</span> <span m="1716170">data--</span> <span
  m="1716620">data</span> <span m="1716980">doesn't</span> <span
  m="1717340">come</span> <span m="1717640">in</span> <span
  m="1717790">square</span> <span m="1718240">matrices.</span> <span
  m="1719770">Fortunately</span> <span m="1720460">for</span> <span
  m="1720670">us,</span> <span m="1720940">data</span> <span
  m="1721360">very,</span> <span m="1721880">very</span> <span
  m="1722140">often</span> <span m="1722530">comes</span> <span
  m="1722920">in</span> <span m="1723070">matrices.</span> <span
  m="1724420">But</span> <span m="1724660">the</span> <span
  m="1724985">two--</span> <span m="1725590">the</span> <span
  m="1725830">columns</span> <span m="1727060">might</span> <span
  m="1727360">be</span> <span m="1727660">sample,</span> <span
  m="1728125">it</span> <span m="1728590">might</span> <span
  m="1728830">be</span> <span m="1728980">patients,</span> <span
  m="1729820">and</span> <span m="1729940">the</span> <span
  m="1730450">rows</span> <span m="1731050">might</span> <span
  m="1731470">be</span> <span m="1732580">diseases</span> <span
  m="1733480">or</span> <span m="1733600">something.</span> <span
  m="1734530">They're</span> <span m="1734860">different</span> <span
  m="1735910">spaces.</span> <span m="1736540">So</span> <span
  m="1737470">matrices</span> <span m="1738280">are</span> <span
  m="1738880">not</span> <span m="1739960">likely</span> <span
  m="1740440">to</span> <span m="1740530">be</span> <span
  m="1741790">square.</span> <span m="1743820">But</span> <span
  m="1744240">anyway,</span> <span m="1744600">we're</span> <span
  m="1744750">good</span> <span m="1745020">here.</span> <span
  m="1747120">So</span> <span m="1747360">the</span> <span
  m="1747480">row</span> <span m="1747750">space.</span></p><p><span
  m="1749640">Now</span> <span m="1749820">can</span> <span m="1750000">I</span>
  <span m="1750090">come</span> <span m="1750270">back</span> <span
  m="1750510">to</span> <span m="1750630">the</span> <span
  m="1750750">proof?</span> <span m="1751310">Because</span> <span
  m="1752490">what</span> <span m="1752700">I</span> <span
  m="1752850">want</span> <span m="1753030">to</span> <span
  m="1753120">say</span> <span m="1753420">is</span> <span
  m="1753600">that</span> <span m="1753780">the</span> <span
  m="1753820">proof</span> <span m="1754170">of</span> <span
  m="1754230">this</span> <span m="1755100">fundamental</span> <span
  m="1755760">fact</span> <span m="1756180">is</span> <span
  m="1756360">staring</span> <span m="1757350">at</span> <span
  m="1757560">us,</span> <span m="1757800">but</span> <span
  m="1758010">we</span> <span m="1758190">don't</span> <span
  m="1758430">quite</span> <span m="1758910">see</span> <span
  m="1759300">it</span> <span m="1759480">yet.</span> <span
  m="1763150">And</span> <span m="1763330">I</span> <span
  m="1763420">want</span> <span m="1763650">to</span> <span
  m="1763720">see</span> <span m="1763960">it.</span> <span
  m="1765620">So</span> <span m="1765830">I</span> <span
  m="1766040">claim</span> <span m="1768020">that</span> <span
  m="1770620">these</span> <span m="1771070">rows</span> <span
  m="1773320">are</span> <span m="1773470">a</span> <span
  m="1773530">basis</span> <span m="1776620">for</span> <span
  m="1777010">the</span> <span m="1777160">row</span> <span
  m="1777460">space.</span> <span m="1780690">And</span> <span
  m="1780870">we</span> <span m="1781020">already</span> <span
  m="1781410">saw</span> <span m="1781950">that</span> <span
  m="1782130">these</span> <span m="1782490">columns</span> <span
  m="1785260">are</span> <span m="1785450">a</span> <span
  m="1785480">basis</span> <span m="1787370">for</span> <span
  m="1787670">the</span> <span m="1787820">column</span> <span
  m="1788210">space.</span> <span m="1793450">And</span> <span
  m="1793600">two</span> <span m="1793870">equals</span> <span
  m="1794260">two,</span> <span m="1795460">right?</span> <span
  m="1795940">Two</span> <span m="1796180">vectors</span> <span
  m="1796630">here</span> <span m="1798070">were</span> <span
  m="1798210">a</span> <span m="1798240">basis</span> <span
  m="1798690">for</span> <span m="1798840">the</span> <span
  m="1798960">column</span> <span m="1799320">space.</span></p><p><span
  m="1799740">Now</span> <span m="1800010">if</span> <span m="1800160">I</span>
  <span m="1800280">can</span> <span m="1800460">see</span> <span
  m="1800730">why</span> <span m="1801540">it</span> <span
  m="1801750">shows</span> <span m="1802170">me</span> <span
  m="1802350">that</span> <span m="1802620">these</span> <span
  m="1802980">two</span> <span m="1803190">vectors</span> <span
  m="1803700">are</span> <span m="1803820">a</span> <span
  m="1803880">basis</span> <span m="1804420">for</span> <span
  m="1804600">the</span> <span m="1804720">row</span> <span
  m="1805020">space,</span> <span m="1805960">then</span> <span
  m="1807000">my</span> <span m="1807570">example</span> <span
  m="1808110">is</span> <span m="1808740">right,</span> <span
  m="1809005">that</span> <span m="1809910">both</span> <span
  m="1810750">of</span> <span m="1810810">these</span> <span
  m="1811110">will</span> <span m="1811260">give</span> <span
  m="1811500">two.</span> <span m="1811830">The</span> <span
  m="1811950">column</span> <span m="1812340">rank</span> <span
  m="1812620">is</span> <span m="1812820">two,</span> <span
  m="1813120">two</span> <span m="1813390">columns,</span> <span
  m="1814320">the</span> <span m="1814410">row</span> <span
  m="1814680">rank</span> <span m="1815040">is</span> <span
  m="1815190">two,</span> <span m="1815610">two</span> <span
  m="1815940">rows.</span> <span m="1821200">I</span> <span
  m="1821350">have</span> <span m="1821590">to</span> <span
  m="1821950">explain</span> <span m="1822580">why</span> <span
  m="1824230">I</span> <span m="1824440">believe</span> <span
  m="1825250">that</span> <span m="1825580">these</span> <span
  m="1825940">two</span> <span m="1826300">rows</span> <span
  m="1826900">are</span> <span m="1827050">a</span> <span
  m="1827110">basis</span> <span m="1827770">for</span> <span
  m="1828010">the</span> <span m="1828130">row</span> <span
  m="1828370">space.</span> <span m="1831040">Are</span> <span
  m="1831140">you</span> <span m="1831300">with</span> <span
  m="1831510">me?</span> <span m="1831870">I</span> <span
  m="1831990">have</span> <span m="1832110">to</span> <span
  m="1832230">prove--</span> <span m="1832530">I have</span> <span
  m="1832830">to</span> <span m="1833010">see</span> <span
  m="1833220">why.</span></p><p><span m="1834210">First,</span> <span
  m="1835250">so</span> <span m="1835440">when</span> <span m="1835680">I</span>
  <span m="1835800">say</span> <span m="1836040">basis,</span> <span
  m="1836710">what</span> <span m="1836790">do</span> <span m="1836910">I</span>
  <span m="1837000">have</span> <span m="1837180">to</span> <span
  m="1837330">check?</span> <span m="1839240">Basis</span> <span
  m="1839990">is</span> <span m="1842150">the</span> <span
  m="1842570">critical</span> <span m="1843050">idea.</span> <span
  m="1845660">I</span> <span m="1845750">have</span> <span m="1845930">to</span>
  <span m="1846050">check</span> <span m="1846530">that</span> <span
  m="1846740">they're</span> <span m="1846950">independent,</span> <span
  m="1848760">so</span> <span m="1848940">I</span> <span
  m="1849060">haven't</span> <span m="1849330">got</span> <span
  m="1849570">too</span> <span m="1849780">many</span> <span
  m="1850290">vectors--</span> <span m="1850770">I</span> <span
  m="1850830">haven't</span> <span m="1851010">got</span> <span
  m="1851220">any</span> <span m="1851460">extra</span> <span
  m="1851850">vectors</span> <span m="1852360">in</span> <span
  m="1852510">there.</span> <span m="1853290">And</span> <span
  m="1853500">I</span> <span m="1853650">also</span> <span
  m="1854010">have</span> <span m="1854250">to</span> <span
  m="1854370">check</span> <span m="1855270">that</span> <span
  m="1855480">their</span> <span m="1855720">combinations</span> <span
  m="1856830">produce--?</span> <span m="1861080">All</span> <span
  m="1861410">the</span> <span m="1861530">rows.</span> <span
  m="1864570">Should</span> <span m="1864680">I</span> <span
  m="1864740">say</span> <span m="1864950">that</span> <span
  m="1865130">again?</span> <span m="1865670">Because</span> <span
  m="1865850">that's</span> <span m="1866060">what</span> <span
  m="1866210">I'm</span> <span m="1866330">going</span> <span
  m="1866430">to</span> <span m="1866570">check.</span> <span
  m="1867350">I'm</span> <span m="1867470">going</span> <span
  m="1867590">to</span> <span m="1867650">check</span> <span
  m="1867950">that</span> <span m="1868100">those</span> <span
  m="1868340">guys</span> <span m="1868640">are</span> <span
  m="1868760">independent.</span> <span m="1869370">Well,</span> <span
  m="1869540">you</span> <span m="1869690">can</span> <span
  m="1869870">see</span> <span m="1870110">that</span> <span
  m="1870290">they're</span> <span m="1870470">independent.</span></p><p><span
  m="1874330">And</span> <span m="1874660">I'm</span> <span
  m="1874810">going</span> <span m="1874900">to</span> <span
  m="1875020">check</span> <span m="1875410">that</span> <span
  m="1877240">their</span> <span m="1877450">combinations</span> <span
  m="1878470">produce</span> <span m="1879070">all</span> <span
  m="1879280">three</span> <span m="1879610">of</span> <span
  m="1879670">these</span> <span m="1879950">rows.</span> <span
  m="1882370">We</span> <span m="1882530">didn't</span> <span
  m="1884770">create</span> <span m="1885160">those</span> <span
  m="1885460">numbers</span> <span m="1886030">for</span> <span
  m="1886330">this</span> <span m="1886570">purpose,</span> <span
  m="1887200">but</span> <span m="1887710">what</span> <span
  m="1887920">I'm</span> <span m="1888100">saying</span> <span
  m="1888460">is</span> <span m="1889510">they</span> <span
  m="1889630">work.</span> <span m="1891150">So</span> <span
  m="1891330">I</span> <span m="1891480">claim</span> <span
  m="1891990">that</span> <span m="1892170">this</span> <span
  m="1892440">is</span> <span m="1892620">a</span> <span
  m="1892680">basis,</span> <span m="1893220">because</span> <span
  m="1894150">what</span> <span m="1894960">combination</span> <span
  m="1895860">of</span> <span m="1896010">those</span> <span
  m="1896370">two</span> <span m="1896820">rows</span> <span
  m="1897720">would</span> <span m="1897930">produce</span> <span
  m="1898380">this</span> <span m="1899070">first</span> <span
  m="1899460">row?</span> <span m="1900330">Yeah,</span> <span
  m="1900660">let</span> <span m="1900780">me</span> <span
  m="1900960">just</span> <span m="1901200">ask</span> <span
  m="1901470">you</span> <span m="1901560">that.</span> <span
  m="1904110">What</span> <span m="1904320">numbers</span> <span
  m="1904890">should</span> <span m="1905100">I</span> <span
  m="1905190">multiply</span> <span m="1905700">these</span> <span
  m="1906000">two</span> <span m="1906240">rows</span> <span
  m="1906750">by</span> <span m="1907440">to</span> <span m="1907560">get</span>
  <span m="1907770">the</span> <span m="1907890">first</span> <span
  m="1908280">row</span> <span m="1908550">of</span> <span
  m="1908700">A?</span></p><p><span m="1909410">AUDIENCE:</span> <span
  m="1909660">2,</span> <span m="1909910">1.</span></p><p><span
  m="1910410">GILBERT STRANG:</span> <span m="1910530">2</span> <span
  m="1910650">and</span> <span m="1910800">1.</span> <span
  m="1912630">And</span> <span m="1912810">where</span> <span
  m="1913140">do</span> <span m="1913260">you</span> <span
  m="1913410">find</span> <span m="1913770">2</span> <span
  m="1914040">and</span> <span m="1914190">1?</span> <span
  m="1916510">It's</span> <span m="1916700">sitting</span> <span
  m="1917240">there</span> <span m="1917690">in</span> <span
  m="1917960">C.</span> <span m="1922930">Will</span> <span
  m="1923170">it</span> <span m="1923260">work</span> <span
  m="1923530">again?</span> <span m="1924550">Does</span> <span
  m="1924880">three</span> <span m="1925510">of</span> <span
  m="1925660">this</span> <span m="1926050">plus</span> <span
  m="1926380">one</span> <span m="1926710">of</span> <span
  m="1926830">that</span> <span m="1927580">give</span> <span
  m="1928550">3,</span> <span m="1928830">1,</span> <span m="1929080">4?</span>
  <span m="1930720">Yes.</span> <span m="1932190">So</span> <span
  m="1932400">far,</span> <span m="1932850">so</span> <span
  m="1933090">good.</span> <span m="1933930">Does</span> <span
  m="1934260">five</span> <span m="1934890">of</span> <span
  m="1935010">this</span> <span m="1935400">and</span> <span
  m="1935550">seven</span> <span m="1936060">of</span> <span
  m="1936180">that--</span> <span m="1936590">see,</span> <span
  m="1936880">I'm</span> <span m="1937150">multiplying--</span> <span
  m="1939660">I</span> <span m="1939990">guess</span> <span
  m="1940230">I'm</span> <span m="1940350">doing</span> <span
  m="1940590">matrix</span> <span m="1941010">multiplication</span> <span
  m="1942450">a</span> <span m="1942510">backward</span> <span
  m="1943050">way</span> <span m="1943560">or</span> <span m="1943710">a</span>
  <span m="1943770">different</span> <span m="1944520">way.</span> <span
  m="1945120">I'm</span> <span m="1945300">taking</span> <span
  m="1945840">combinations</span> <span m="1946830">of</span> <span
  m="1946980">the</span> <span m="1947100">rows</span> <span
  m="1948600">of</span> <span m="1948720">the</span> <span
  m="1948840">second</span> <span m="1949290">guy.</span> <span
  m="1951300">The</span> <span m="1951420">wonderful</span> <span
  m="1951840">thing</span> <span m="1952020">about</span> <span
  m="1952260">matrix</span> <span m="1952740">multiplication</span> <span
  m="1953430">is</span> <span m="1953880">you</span> <span
  m="1953970">can</span> <span m="1954150">do</span> <span m="1954330">it</span>
  <span m="1954420">a</span> <span m="1954450">lot</span> <span
  m="1954750">of</span> <span m="1954810">ways,</span> <span
  m="1955680">it</span> <span m="1955770">comes</span> <span
  m="1956070">out</span> <span m="1956220">the</span> <span
  m="1956340">same</span> <span m="1956790">every</span> <span
  m="1957060">way,</span> <span m="1957390">and</span> <span
  m="1957600">each</span> <span m="1957960">way</span> <span
  m="1958830">tells</span> <span m="1959190">you</span> <span
  m="1959280">something.</span></p><p><span m="1960590">So</span> <span
  m="1961370">five</span> <span m="1961970">of</span> <span
  m="1962090">that</span> <span m="1962330">row</span> <span
  m="1962690">plus</span> <span m="1962960">seven</span> <span
  m="1963350">of</span> <span m="1963470">that</span> <span
  m="1963680">row,</span> <span m="1964400">sure</span> <span
  m="1964640">enough,</span> <span m="1965000">is</span> <span
  m="1965180">here.</span> <span m="1968240">Do</span> <span
  m="1968330">you</span> <span m="1968420">see</span> <span
  m="1968630">that</span> <span m="1968810">that</span> <span
  m="1969350">is</span> <span m="1969500">not</span> <span
  m="1970310">accident?</span> <span m="1974040">The</span> <span
  m="1974160">proof</span> <span m="1974580">is</span> <span
  m="1974760">really</span> <span m="1975240">to</span> <span
  m="1975420">look</span> <span m="1975810">at</span> <span
  m="1975930">this</span> <span m="1976260">multiplication,</span> <span
  m="1977100">C</span> <span m="1977400">times</span> <span
  m="1977820">R,</span> <span m="1978480">two</span> <span
  m="1978720">ways.</span> <span m="1979680">Look</span> <span
  m="1979920">at</span> <span m="1980040">it</span> <span
  m="1980130">first</span> <span m="1980610">as</span> <span
  m="1980820">combinations</span> <span m="1981600">of</span> <span
  m="1981720">columns</span> <span m="1982200">of</span> <span
  m="1982320">C</span> <span m="1982800">to</span> <span m="1982950">give</span>
  <span m="1983160">the</span> <span m="1983250">columns.</span> <span
  m="1984380">Look</span> <span m="1984580">at</span> <span
  m="1984730">it</span> <span m="1985000">second</span> <span
  m="1985740">to</span> <span m="1985890">get</span> <span m="1986190">as</span>
  <span m="1986430">combinations</span> <span m="1987300">of</span> <span
  m="1987420">the</span> <span m="1987510">rows</span> <span
  m="1988050">of</span> <span m="1988200">R,</span> <span m="1989100">and</span>
  <span m="1989220">that</span> <span m="1989610">produces</span> <span
  m="1990180">the</span> <span m="1990300">rows.</span> <span
  m="1991750">So</span> <span m="1991860">that</span> <span
  m="1992100">factorization</span> <span m="1993090">A</span> <span
  m="1993480">equals</span> <span m="1993790">CR</span> <span
  m="1995220">was</span> <span m="1999360">the</span> <span
  m="1999480">key</span> <span m="1999730">idea.</span></p><p><span
  m="2005020">And</span> <span m="2005370">actually,</span> <span
  m="2005940">this</span> <span m="2006240">R</span> <span
  m="2006570">that</span> <span m="2006720">we've</span> <span
  m="2006930">come</span> <span m="2007230">up</span> <span
  m="2007440">with</span> <span m="2010420">has</span> <span
  m="2010660">a</span> <span m="2010720">name.</span> <span
  m="2012690">Anybody</span> <span m="2013290">remember</span> <span
  m="2013950">enough</span> <span m="2014350">18.06?</span> <span
  m="2016770">Have</span> <span m="2016920">you</span> <span
  m="2017070">all</span> <span m="2017220">taken</span> <span
  m="2017670">18.06?</span> <span m="2019690">No.</span> <span
  m="2020310">I</span> <span m="2020460">see--</span> <span
  m="2021570">how</span> <span m="2021750">many</span> <span
  m="2022020">have?</span> <span m="2023660">Yes.</span> <span
  m="2024240">OK.</span> <span m="2025180">Good.</span> <span
  m="2028100">For</span> <span m="2028280">a</span> <span
  m="2028340">while,</span> <span m="2028700">18.06</span> <span
  m="2029840">was</span> <span m="2030020">taught</span> <span
  m="2030320">in</span> <span m="2030440">a</span> <span m="2030500">very</span>
  <span m="2030860">abstract</span> <span m="2031430">way.</span> <span
  m="2032540">I</span> <span m="2032690">said,</span> <span
  m="2032990">what's</span> <span m="2033260">going</span> <span
  m="2033590">on?</span> <span m="2033980">But</span> <span
  m="2034400">anyway,</span> <span m="2035060">so</span> <span
  m="2035420">if</span> <span m="2035630">you</span> <span
  m="2035750">took</span> <span m="2036020">it</span> <span
  m="2036200">that</span> <span m="2036800">semester,</span> <span
  m="2038120">you</span> <span m="2038390">maybe</span> <span
  m="2038840">never</span> <span m="2039140">heard</span> <span
  m="2039410">of</span> <span m="2039530">the</span> <span
  m="2039680">column</span> <span m="2040070">space.</span> <span
  m="2041210">I'm</span> <span m="2041330">not</span> <span
  m="2041570">sure.</span> <span m="2042900">Or</span> <span
  m="2043430">by</span> <span m="2043700">a</span> <span
  m="2043760">different</span> <span m="2044210">name.</span></p><p><span
  m="2044630">It</span> <span m="2044720">has</span> <span
  m="2044930">another</span> <span m="2045320">name.</span> <span
  m="2046070">What's</span> <span m="2046410">its</span> <span
  m="2046580">other</span> <span m="2046820">name?</span> <span
  m="2047840">The</span> <span m="2047960">column</span> <span
  m="2048469">space</span> <span m="2048949">of</span> <span
  m="2049100">a</span> <span m="2049159">matrix?</span> <span
  m="2052280">Range--</span> <span m="2052969">I</span> <span
  m="2053030">think</span> <span m="2053330">it's</span> <span
  m="2053510">the</span> <span m="2053659">range.</span> <span
  m="2056010">Yeah.</span> <span m="2056600">And</span> <span
  m="2056810">of</span> <span m="2056989">course,</span> <span
  m="2058400">all</span> <span m="2058610">this</span> <span
  m="2058880">is</span> <span m="2059780">fundamental</span> <span
  m="2060530">in</span> <span m="2060770">mathematics.</span> <span
  m="2061460">So</span> <span m="2061699">of</span> <span
  m="2061760">course,</span> <span m="2063560">everything</span> <span
  m="2064100">here</span> <span m="2066650">has</span> <span
  m="2066860">different</span> <span m="2067219">languages</span> <span
  m="2067909">and</span> <span m="2068060">different</span> <span
  m="2068780">emphasis.</span> <span m="2070190">But</span> <span
  m="2070580">you</span> <span m="2070760">see</span> <span
  m="2071000">what</span> <span m="2071179">the</span> <span
  m="2071300">emphasis</span> <span m="2071870">is</span> <span
  m="2072110">here.</span></p><p><span m="2073310">So</span> <span
  m="2073520">you</span> <span m="2073639">see</span> <span
  m="2073880">the</span> <span m="2074000">proof,</span> <span
  m="2074960">that</span> <span m="2075230">A equals</span> <span
  m="2075600">CR</span> <span m="2077659">just</span> <span
  m="2078080">reveals</span> <span m="2078620">everything.</span> <span
  m="2080560">So</span> <span m="2080739">it's</span> <span
  m="2080889">our</span> <span m="2080949">first</span> <span
  m="2081730">idea</span> <span m="2082150">of</span> <span m="2082270">a</span>
  <span m="2082360">factorization</span> <span m="2083320">of</span> <span
  m="2083830">a</span> <span m="2083920">matrix.</span> <span
  m="2085199">And</span> <span m="2087130">we've</span> <span
  m="2087370">multiplied</span> <span m="2088090">C</span> <span
  m="2088360">times</span> <span m="2088810">R.</span> <span
  m="2089860">I</span> <span m="2090010">could</span> <span
  m="2090280">just</span> <span m="2090639">say--</span> <span
  m="2091360">so</span> <span m="2091960">really,</span> <span
  m="2092350">you've</span> <span m="2092590">seen</span> <span
  m="2093639">now</span> <span m="2093909">the</span> <span
  m="2094030">main</span> <span m="2094330">point</span> <span
  m="2094630">of</span> <span m="2094719">Section</span> <span
  m="2095139">1.1</span> <span m="2095980">of</span> <span
  m="2096100">the</span> <span m="2096190">notes</span> <span
  m="2097120">to</span> <span m="2097450">come</span> <span
  m="2097750">up</span> <span m="2098050">with</span> <span
  m="2098200">that</span> <span m="2099700">factorization</span> <span
  m="2100750">and</span> <span m="2100870">that</span> <span
  m="2101140">conclusion.</span> <span m="2105020">And</span> <span
  m="2105350">you</span> <span m="2105470">see</span> <span
  m="2105710">why</span> <span m="2107720">C</span> <span m="2108020">has</span>
  <span m="2108230">the</span> <span m="2108320">same</span> <span
  m="2108650">number</span> <span m="2108950">of--</span> <span
  m="2109280">the</span> <span m="2109430">number</span> <span
  m="2109730">of</span> <span m="2109790">columns</span> <span
  m="2110300">of</span> <span m="2110420">C</span> <span
  m="2111020">equals</span> <span m="2111170">the</span> <span
  m="2111290">number</span> <span m="2111590">of</span> <span
  m="2111680">rows</span> <span m="2112100">of</span> <span
  m="2112250">R,</span> <span m="2113000">and</span> <span
  m="2113180">those</span> <span m="2113510">are</span> <span
  m="2113660">the</span> <span m="2114080">column</span> <span
  m="2114440">rank</span> <span m="2114770">and</span> <span
  m="2114890">the</span> <span m="2114980">row</span> <span
  m="2115180">rank.</span></p><p><span m="2116510">Yeah,</span> <span
  m="2116720">it's</span> <span m="2116900">just</span> <span
  m="2117170">pretty</span> <span m="2117500">neat.</span> <span
  m="2118970">And</span> <span m="2119270">here</span> <span
  m="2119620">was</span> <span m="2119780">the</span> <span
  m="2119910">special</span> <span m="2120350">case</span> <span
  m="2120800">where</span> <span m="2121010">those</span> <span
  m="2123560">the</span> <span m="2123680">column</span> <span
  m="2124070">space</span> <span m="2124480">is</span> <span
  m="2124670">all</span> <span m="2124850">multiples</span> <span
  m="2125420">of</span> <span m="2125530">U--</span> <span
  m="2125900">it's</span> <span m="2126050">a</span> <span
  m="2126110">line</span> <span m="2126500">through</span> <span
  m="2126830">U.</span> <span m="2127730">The</span> <span
  m="2127850">row</span> <span m="2128180">space</span> <span
  m="2128700">is</span> <span m="2128900">all</span> <span
  m="2129110">multiples</span> <span m="2129740">of</span> <span
  m="2129860">V--</span> <span m="2130490">it's</span> <span
  m="2130760">a</span> <span m="2130820">line</span> <span
  m="2131180">through</span> <span m="2131440">V.</span> <span
  m="2132380">And</span> <span m="2133070">that's</span> <span
  m="2133430">the</span> <span m="2133520">basic</span> <span
  m="2134030">building</span> <span m="2134510">block.</span> <span
  m="2137870">Can</span> <span m="2138080">I</span> <span
  m="2138170">just</span> <span m="2138380">say</span> <span
  m="2138620">another</span> <span m="2139130">little</span> <span
  m="2139400">word</span> <span m="2139820">before</span> <span
  m="2140240">I</span> <span m="2140630">push</span> <span m="2140960">on</span>
  <span m="2141230">beyond</span> <span m="2142120">CR?</span> <span
  m="2143310">That</span> <span m="2144190">this</span> <span
  m="2144530">has</span> <span m="2144680">become--</span> <span
  m="2145970">if</span> <span m="2146120">you</span> <span
  m="2146210">have</span> <span m="2146360">a</span> <span
  m="2146420">giant</span> <span m="2146900">matrix,</span> <span
  m="2147710">like</span> <span m="2148250">size</span> <span
  m="2148670">10</span> <span m="2148910">to</span> <span m="2149000">the</span>
  <span m="2149120">5th,</span> <span m="2151800">you</span> <span
  m="2152280">can't</span> <span m="2152550">put</span> <span
  m="2152790">that</span> <span m="2153030">into</span> <span
  m="2153300">fast</span> <span m="2153630">memory.</span> <span
  m="2154630">It's</span> <span m="2155430">a</span> <span
  m="2155490">mess.</span> <span m="2156870">How</span> <span
  m="2157110">do</span> <span m="2157200">you</span> <span
  m="2157290">deal</span> <span m="2157530">with</span> <span
  m="2157710">a</span> <span m="2157770">matrix</span> <span
  m="2158075">of</span> <span m="2158380">size</span> <span
  m="2158800">10</span> <span m="2159000">to the</span> <span
  m="2159090">5th,</span> <span m="2159360">when</span> <span
  m="2159540">you</span> <span m="2159660">cannot</span> <span
  m="2160080">deal</span> <span m="2160380">with</span> <span
  m="2160620">all</span> <span m="2161490">the</span> <span
  m="2161700">entries?</span> <span m="2162670">That's</span> <span
  m="2163020">just</span> <span m="2163380">not</span> <span
  m="2164530">possible.</span> <span m="2166030">Well,</span> <span
  m="2166210">you</span> <span m="2166330">sample</span> <span
  m="2166810">it.</span></p><p><span m="2168230">So</span> <span
  m="2168680">later</span> <span m="2169250">in</span> <span
  m="2169370">the</span> <span m="2169460">course,</span> <span
  m="2169890">we'll</span> <span m="2170000">be</span> <span
  m="2170150">doing</span> <span m="2170480">random</span> <span
  m="2171110">sampling</span> <span m="2171710">of</span> <span
  m="2171830">a</span> <span m="2171920">matrix.</span> <span
  m="2172970">So</span> <span m="2173150">how</span> <span
  m="2173600">could</span> <span m="2173810">you</span> <span
  m="2173900">sample</span> <span m="2174410">a</span> <span
  m="2174500">matrix?</span> <span m="2176460">So</span> <span
  m="2176610">you</span> <span m="2176760">have</span> <span
  m="2176940">a</span> <span m="2177000">matrix.</span> <span
  m="2177900">Of</span> <span m="2177960">course</span> <span
  m="2178240">you're</span> <span m="2178680">looking</span> <span
  m="2179040">at</span> <span m="2179250">it,</span> <span
  m="2179820">but</span> <span m="2180030">it's--</span> <span
  m="2181440">and</span> <span m="2181980">you</span> <span
  m="2182100">want</span> <span m="2182290">to</span> <span
  m="2182430">get</span> <span m="2182880">some</span> <span
  m="2183870">typical</span> <span m="2184500">columns.</span> <span
  m="2186920">Here's</span> <span m="2187190">the</span> <span
  m="2187310">natural</span> <span m="2187760">idea.</span> <span
  m="2190760">You</span> <span m="2190880">just</span> <span
  m="2191060">look</span> <span m="2191270">at</span> <span m="2191390">A</span>
  <span m="2191570">times</span> <span m="2192020">x.</span> <span
  m="2193640">Let</span> <span m="2193910">x</span> <span m="2194210">be</span>
  <span m="2194390">a</span> <span m="2194450">random</span> <span
  m="2194930">vector.</span> <span m="2197900">Rand</span> <span
  m="2198440">of--</span> <span m="2199190">so</span> <span
  m="2199490">it's</span> <span m="2199700">got</span> <span
  m="2201428">m</span> <span m="2202490">rows</span> <span
  m="2203030">and</span> <span m="2203150">one</span> <span
  m="2203450">column.</span> <span m="2203810">It's</span> <span
  m="2203960">a</span> <span m="2204050">vector.</span></p><p><span
  m="2208880">And</span> <span m="2209870">what</span> <span
  m="2210140">can</span> <span m="2210350">I</span> <span m="2210470">say</span>
  <span m="2210740">about</span> <span m="2211130">Ax?</span> <span
  m="2214080">It's</span> <span m="2214490">in</span> <span
  m="2214750">the--</span> <span m="2215010">what</span> <span
  m="2215220">space</span> <span m="2215515">is</span> <span
  m="2215810">it</span> <span m="2215970">in?</span></p><p><span
  m="2216623">AUDIENCE:</span> <span m="2216829">Column.</span></p><p><span
  m="2217450">GILBERT STRANG:</span> <span m="2217660">Column</span> <span
  m="2217870">space.</span> <span m="2218200">Thanks.</span> <span
  m="2218740">That</span> <span m="2218950">was</span> <span
  m="2219130">the</span> <span m="2219220">first</span> <span
  m="2219640">idea</span> <span m="2220030">in</span> <span
  m="2221140">this</span> <span m="2221380">lecture.</span> <span
  m="2222380">Ax</span> <span m="2222840">is</span> <span m="2223030">in</span>
  <span m="2223180">the</span> <span m="2223270">column</span> <span
  m="2223660">space.</span> <span m="2224120">So</span> <span
  m="2224230">if</span> <span m="2224350">you</span> <span
  m="2224440">want</span> <span m="2224680">a</span> <span
  m="2224740">random</span> <span m="2225280">vector</span> <span
  m="2225670">in</span> <span m="2225760">the</span> <span
  m="2225850">column</span> <span m="2226180">space,</span> <span
  m="2226930">I</span> <span m="2227080">wouldn't</span> <span
  m="2227410">suggest</span> <span m="2227970">to</span> <span
  m="2228040">just</span> <span m="2228310">randomly</span> <span
  m="2228940">pick</span> <span m="2229210">one</span> <span
  m="2229450">of</span> <span m="2229500">the</span> <span
  m="2229630">columns.</span> <span m="2231170">Better</span> <span
  m="2231530">to</span> <span m="2232970">take</span> <span m="2233240">a</span>
  <span m="2233300">mixture</span> <span m="2233810">of</span> <span
  m="2233930">columns</span> <span m="2234440">by</span> <span
  m="2234620">taking</span> <span m="2234980">a</span> <span
  m="2235040">random</span> <span m="2235490">vector</span> <span
  m="2235910">x,</span> <span m="2236240">and</span> <span
  m="2236390">looking</span> <span m="2237500">at</span> <span
  m="2237650">Ax.</span> <span m="2238520">And</span> <span
  m="2238640">if</span> <span m="2238760">you</span> <span
  m="2238910">wanted</span> <span m="2239330">100</span> <span
  m="2239780">random</span> <span m="2240170">vectors,</span> <span
  m="2240680">you'd</span> <span m="2240780">take</span> <span
  m="2241040">a</span> <span m="2241070">100</span> <span
  m="2241880">random</span> <span m="2242300">x's,</span> <span
  m="2243620">and</span> <span m="2244850">that</span> <span
  m="2245030">would</span> <span m="2245180">give</span> <span
  m="2245420">you</span> <span m="2245540">a</span> <span
  m="2245600">pretty</span> <span m="2245990">good</span> <span
  m="2246260">idea,</span> <span m="2247250">in</span> <span
  m="2247490">many</span> <span m="2247790">cases,</span> <span
  m="2248360">of</span> <span m="2248510">what</span> <span
  m="2248810">the</span> <span m="2250100">column</span> <span
  m="2250460">space</span> <span m="2250880">looks</span> <span
  m="2251150">like.</span> <span m="2252290">That</span> <span
  m="2252410">would</span> <span m="2252530">be</span> <span
  m="2253040">enough</span> <span m="2253370">to</span> <span
  m="2253490">work</span> <span m="2253790">with</span> <span
  m="2254030">often.</span></p><p><span m="2257390">Can</span> <span
  m="2257600">I</span> <span m="2257690">just</span> <span
  m="2257900">throw</span> <span m="2258200">in</span> <span
  m="2258350">another</span> <span m="2259220">question?</span> <span
  m="2260370">So</span> <span m="2261260">Ax</span> <span m="2261710">is</span>
  <span m="2261890">in</span> <span m="2262010">the</span> <span
  m="2262100">column</span> <span m="2262490">space</span> <span
  m="2262880">of</span> <span m="2263000">A.</span> <span m="2264030">Let</span>
  <span m="2264220">me</span> <span m="2264320">just</span> <span
  m="2264560">ask</span> <span m="2264830">you</span> <span
  m="2264950">this</span> <span m="2265160">question.</span> <span
  m="2266060">Is</span> <span m="2267170">ABCx--</span> <span
  m="2271990">is</span> <span m="2272230">that</span> <span
  m="2272470">in</span> <span m="2272620">the</span> <span
  m="2272740">column</span> <span m="2273190">space</span> <span
  m="2273640">of</span> <span m="2273880">A?</span> <span
  m="2275000">Suppose</span> <span m="2275330">I</span> <span
  m="2275420">have</span> <span m="2275660">matrices</span> <span
  m="2276410">A,</span> <span m="2276650">B,</span> <span m="2276890">and</span>
  <span m="2277040">C,</span> <span m="2278030">and</span> <span
  m="2278150">a</span> <span m="2278210">vector</span> <span
  m="2278630">x,</span> <span m="2279710">and</span> <span m="2279740">I</span>
  <span m="2279920">take</span> <span m="2280190">their</span> <span
  m="2280310">product.</span> <span m="2281540">Does</span> <span
  m="2281780">that</span> <span m="2282020">give</span> <span
  m="2282230">me</span> <span m="2282440">something</span> <span
  m="2282980">in</span> <span m="2283100">the</span> <span
  m="2283220">column</span> <span m="2283610">space</span> <span
  m="2283970">of</span> <span m="2284120">A?</span></p><p><span
  m="2284420">AUDIENCE:</span> <span m="2284635">Yes.</span></p><p><span
  m="2285710">GILBERT STRANG:</span> <span m="2285837">Yes,</span> <span
  m="2286220">good</span> <span m="2286430">for</span> <span
  m="2286580">you.</span> <span m="2287870">How</span> <span
  m="2288050">do</span> <span m="2288140">you</span> <span
  m="2288230">know</span> <span m="2288440">that?</span></p><p><span
  m="2289126">AUDIENCE:</span> <span m="2289349">[INAUDIBLE]</span></p><p><span
  m="2291360">GILBERT STRANG:</span> <span m="2291580">Yeah,</span> <span
  m="2291800">it's</span> <span m="2292100">A</span> <span
  m="2292280">times</span> <span m="2292550">something.</span> <span
  m="2294800">Right.</span> <span m="2296120">Putting</span> <span
  m="2296450">parentheses</span> <span m="2297260">in</span> <span
  m="2297380">the</span> <span m="2297440">right</span> <span
  m="2297680">place</span> <span m="2298100">is</span> <span
  m="2298310">the</span> <span m="2298430">key</span> <span
  m="2298700">to</span> <span m="2298820">linear</span> <span
  m="2299150">algebra.</span> <span m="2300050">And</span> <span
  m="2300530">there it</span> <span m="2301010">is.</span> <span
  m="2303090">It's</span> <span m="2303210">a</span> <span
  m="2303560">question</span> <span m="2303980">that just</span> <span
  m="2304220">occurred</span> <span m="2304550">to</span> <span
  m="2304640">me.</span> <span m="2304790">And</span> <span m="2304940">I</span>
  <span m="2305060">thought,</span> <span m="2305420">well,</span> <span
  m="2305900">I</span> <span m="2306020">wonder</span> <span
  m="2306350">if</span> <span m="2306470">you'd</span> <span
  m="2306620">do</span> <span m="2306860">it.</span> <span m="2309040">So</span>
  <span m="2309190">we</span> <span m="2309310">have</span> <span
  m="2311140">still</span> <span m="2311470">time</span> <span
  m="2311830">to</span> <span m="2311950">multiply</span> <span
  m="2312610">matrices.</span> <span m="2314210">Oh,</span> <span
  m="2314350">I</span> <span m="2314440">was</span> <span
  m="2314590">going</span> <span m="2314700">to</span> <span
  m="2314830">say</span> <span m="2315070">about</span> <span
  m="2315400">C</span> <span m="2315790">and</span> <span m="2315940">R--</span>
  <span m="2316840">so</span> <span m="2317080">these</span> <span
  m="2317380">are</span> <span m="2317470">real</span> <span
  m="2317950">columns</span> <span m="2318580">from</span> <span
  m="2318820">A.</span> <span m="2320080">But</span> <span m="2320320">R</span>
  <span m="2320950">is--</span> <span m="2322660">the</span> <span
  m="2322780">rows</span> <span m="2323920">are</span> <span
  m="2324040">not</span> <span m="2324310">taken</span> <span
  m="2324730">directly</span> <span m="2325240">from</span> <span
  m="2325450">the</span> <span m="2325540">rows</span> <span
  m="2325930">of</span> <span m="2326050">A.</span> <span
  m="2326890">Actually,</span> <span m="2327370">there</span> <span
  m="2327520">is</span> <span m="2327610">a</span> <span m="2327670">name</span>
  <span m="2328030">for</span> <span m="2328180">this.</span> <span
  m="2329200">It's</span> <span m="2329440">called</span> <span
  m="2329860">the</span> <span m="2330010">row</span> <span
  m="2330430">reduced</span> <span m="2331150">echelon</span> <span
  m="2331810">form</span> <span m="2332260">of</span> <span
  m="2332350">the</span> <span m="2332470">matrix,</span> <span
  m="2333580">and</span> <span m="2333760">it's</span> <span
  m="2334030">a</span> <span m="2334120">big</span> <span
  m="2334840">goal</span> <span m="2335390">in</span> <span
  m="2336160">18.06.</span> <span m="2337880">It</span> <span
  m="2338140">has</span> <span m="2338410">the</span> <span
  m="2338530">identity</span> <span m="2339160">there,</span> <span
  m="2339580">and</span> <span m="2339700">then</span> <span
  m="2339910">the</span> <span m="2340060">other</span> <span
  m="2340300">columns</span> <span m="2342970">tell</span> <span
  m="2343240">you</span> <span m="2343390">the</span> <span
  m="2343480">right</span> <span m="2343750">combinations.</span></p><p><span
  m="2348510">Another</span> <span m="2349830">big</span> <span
  m="2350100">factorization</span> <span m="2351630">would</span> <span
  m="2351870">be</span> <span m="2352080">to</span> <span
  m="2352200">take</span> <span m="2353070">columns</span> <span
  m="2354210">from</span> <span m="2354930">A--</span> <span
  m="2355500">so</span> <span m="2355740">this</span> <span
  m="2355890">is</span> <span m="2356070">another--</span> <span m="2357680">so
  I'll</span> <span m="2358050">put</span> <span m="2358335">maybe</span> <span
  m="2358620">or--</span> <span m="2362630">and</span> <span
  m="2362790">we</span> <span m="2362940">won't</span> <span
  m="2363210">be</span> <span m="2363390">doing</span> <span
  m="2363720">this</span> <span m="2363930">for</span> <span
  m="2365400">a</span> <span m="2365460">month.</span> <span
  m="2366810">We</span> <span m="2366990">could</span> <span
  m="2367170">start</span> <span m="2367500">to take</span> <span
  m="2367770">columns</span> <span m="2368310">of</span> <span
  m="2370800">A</span> <span m="2371040">and</span> <span m="2371460">put</span>
  <span m="2371670">them</span> <span m="2371820">into</span> <span
  m="2372030">C,</span> <span m="2372630">if</span> <span
  m="2372780">they</span> <span m="2372900">were</span> <span
  m="2373290">independent.</span> <span m="2374550">And</span> <span
  m="2374760">suppose</span> <span m="2375300">I</span> <span
  m="2375450">took</span> <span m="2376530">rows</span> <span
  m="2377130">of</span> <span m="2377280">A.</span> <span m="2377520">Now</span>
  <span m="2377790">I'm</span> <span m="2377910">going</span> <span
  m="2378030">to</span> <span m="2378150">take</span> <span
  m="2378430">literally</span> <span m="2378960">rows</span> <span
  m="2379560">of</span> <span m="2379710">A,</span> <span m="2381360">and</span>
  <span m="2381780">put</span> <span m="2381960">them</span> <span
  m="2382230">into</span> <span m="2382640">R--</span> <span
  m="2383850">well,</span> <span m="2384180">shall</span> <span
  m="2384390">I</span> <span m="2384490">call</span> <span m="2384810">it</span>
  <span m="2384990">R</span> <span m="2385740">twiddle</span> <span
  m="2386190">or</span> <span m="2386340">something,</span> <span
  m="2387200">because</span> <span m="2387360">it'll be</span> <span
  m="2387480">a</span> <span m="2387540">different</span> <span
  m="2387960">R.</span> <span m="2390900">I'm</span> <span
  m="2391020">not</span> <span m="2391260">going</span> <span
  m="2391350">to</span> <span m="2391500">use</span> <span
  m="2392730">those</span> <span m="2393150">rows,</span> <span
  m="2393540">but</span> <span m="2393720">I'm</span> <span
  m="2393840">going</span> <span m="2393930">to</span> <span
  m="2394260">take</span> <span m="2395520">two</span> <span
  m="2395850">actual</span> <span m="2396360">rows</span> <span
  m="2397050">of</span> <span m="2397230">A.</span> <span
  m="2398040">Then</span> <span m="2398370">what?</span></p><p><span
  m="2399630">So</span> <span m="2399810">that's</span> <span
  m="2400080">an</span> <span m="2400140">important</span> <span
  m="2400590">factorization,</span> <span m="2401430">but</span> <span
  m="2401580">it's</span> <span m="2401670">not</span> <span
  m="2401880">correct.</span> <span m="2405230">If I</span> <span
  m="2405380">took</span> <span m="2405650">two</span> <span
  m="2406100">other</span> <span m="2406340">rows</span> <span
  m="2406820">of</span> <span m="2406970">R,</span> <span m="2408050">it</span>
  <span m="2408170">wouldn't</span> <span m="2408680">work.</span> <span
  m="2409620">So</span> <span m="2409790">you</span> <span
  m="2409970">have</span> <span m="2410240">to</span> <span
  m="2410360">put</span> <span m="2410610">it</span> <span m="2410660">in</span>
  <span m="2410750">the</span> <span m="2410840">middle</span> <span
  m="2411830">some</span> <span m="2412220">two</span> <span
  m="2412430">by</span> <span m="2412670">two</span> <span
  m="2412940">matrix</span> <span m="2413570">U</span> <span
  m="2414860">that</span> <span m="2415070">makes</span> <span
  m="2415400">it</span> <span m="2415520">correct.</span> <span
  m="2417410">You'll</span> <span m="2417590">see</span> <span
  m="2420800">in</span> <span m="2420950">that</span> <span
  m="2421160">Section</span> <span m="2421610">1.1</span> <span
  m="2422620">that</span> <span m="2422750">I</span> <span
  m="2423380">got</span> <span m="2423620">excited</span> <span
  m="2424310">and</span> <span m="2425030">wrote</span> <span
  m="2425360">a</span> <span m="2425420">page</span> <span
  m="2425840">about</span> <span m="2426260">CUR.</span> <span
  m="2428000">Yeah,</span> <span m="2428150">so</span> <span
  m="2428440">I'll</span> <span m="2428630">just</span> <span
  m="2429020">mention</span> <span m="2429410">that.</span> <span
  m="2432160">So</span> <span m="2432400">now</span> <span
  m="2432640">I'm</span> <span m="2432760">ready--</span> <span
  m="2433010">oh,</span> <span m="2433270">I</span> <span
  m="2433580">wanted</span> <span m="2433900">to</span> <span
  m="2433990">say</span> <span m="2434320">something</span> <span
  m="2434770">about</span> <span m="2435010">the</span> <span
  m="2435100">course.</span> <span m="2438070">I</span> <span
  m="2438170">got</span> <span m="2438440">excited</span> <span
  m="2438980">thinking</span> <span m="2439250">about</span> <span
  m="2440040">math,</span> <span m="2440660">but</span> <span
  m="2441770">there</span> <span m="2441950">is</span> <span
  m="2442130">this</span> <span m="2442400">course.</span> <span
  m="2443210">So</span> <span m="2443450">what's</span> <span
  m="2443810">up?</span></p><p><span m="2446930">So</span> <span
  m="2447170">there'll</span> <span m="2447320">be</span> <span
  m="2448610">linear</span> <span m="2449060">algebra</span> <span
  m="2449450">problems.</span> <span m="2450820">But</span> <span
  m="2451040">what</span> <span m="2451250">makes</span> <span
  m="2451550">this</span> <span m="2451760">course</span> <span
  m="2452050">special</span> <span m="2452690">is</span> <span
  m="2453590">the</span> <span m="2453740">other</span> <span
  m="2454100">homeworks,</span> <span m="2455810">which</span> <span
  m="2456170">are</span> <span m="2456770">online.</span> <span
  m="2458600">And</span> <span m="2459320">you</span> <span
  m="2459500">would</span> <span m="2459770">use--</span> <span
  m="2463380">let's see.</span> <span m="2463590">In</span> <span
  m="2463770">principle,</span> <span m="2464430">you</span> <span
  m="2464580">could</span> <span m="2464850">use</span> <span
  m="2465150">any</span> <span m="2465420">of</span> <span
  m="2465510">the</span> <span m="2465630">languages--</span> <span
  m="2467910">MATLAB,</span> <span m="2469600">Python,</span> <span
  m="2470440">which</span> <span m="2470680">has</span> <span
  m="2471160">become</span> <span m="2471610">the</span> <span
  m="2472480">biggest--</span> <span m="2472990">most</span> <span
  m="2473350">used</span> <span m="2473770">for</span> <span
  m="2474280">deep</span> <span m="2474580">learning,</span> <span
  m="2475660">or</span> <span m="2475840">Julia,</span> <span
  m="2476740">which</span> <span m="2477010">is</span> <span
  m="2477190">the</span> <span m="2477400">hot,</span> <span
  m="2477790">new</span> <span m="2478390">language.</span> <span
  m="2482910">So</span> <span m="2483120">last</span> <span
  m="2484410">time,</span> <span m="2484770">last</span> <span
  m="2485130">year,</span> <span m="2486000">the</span> <span
  m="2487230">problems--</span> <span m="2488900">oh,</span> <span
  m="2489150">so</span> <span m="2489390">what</span> <span
  m="2489600">happened</span> <span m="2489930">last</span> <span
  m="2490230">year?</span></p><p><span m="2492290">Well,</span> <span
  m="2493280">everything</span> <span m="2493820">in</span> <span
  m="2493910">this</span> <span m="2494120">course</span> <span
  m="2494720">is</span> <span m="2495410">owed</span> <span
  m="2496490">to</span> <span m="2496760">a</span> <span
  m="2496880">professor</span> <span m="2497450">who</span> <span
  m="2497690">visited</span> <span m="2498860">from</span> <span
  m="2499235">the</span> <span m="2499610">University</span> <span
  m="2500090">of</span> <span m="2500150">Michigan,</span> <span
  m="2500840">Professor</span> <span m="2501350">Rao--</span> <span
  m="2501740">Raj</span> <span m="2502130">Rao,</span> <span
  m="2503860">who</span> <span m="2504850">gave</span> <span
  m="2505120">most</span> <span m="2505420">of</span> <span
  m="2505480">the</span> <span m="2505570">lectures</span> <span
  m="2506110">a</span> <span m="2506200">year</span> <span
  m="2506410">ago,</span> <span m="2507490">brought</span> <span
  m="2507880">these</span> <span m="2508270">homework</span> <span
  m="2509110">problems--</span> <span m="2510580">online</span> <span
  m="2511360">homework</span> <span m="2511720">problems,</span> <span
  m="2512140">so</span> <span m="2512290">that</span> <span
  m="2512440">people</span> <span m="2512770">brought</span> <span
  m="2513040">laptops</span> <span m="2513610">to</span> <span
  m="2513730">class</span> <span m="2514180">and</span> <span
  m="2514330">we</span> <span m="2514510">did</span> <span
  m="2514870">things</span> <span m="2515290">in</span> <span
  m="2515470">class.</span> <span m="2518650">So</span> <span
  m="2518860">he</span> <span m="2519490">had</span> <span
  m="2520120">and</span> <span m="2520270">has</span> <span m="2520910">a</span>
  <span m="2521290">very</span> <span m="2521710">successful</span> <span
  m="2522340">course</span> <span m="2522990">at</span> <span
  m="2524210">EE</span> <span m="2524800">in</span> <span
  m="2524950">Michigan.</span> <span m="2527500">But</span> <span
  m="2527710">he</span> <span m="2527800">was</span> <span m="2527980">a</span>
  <span m="2528210">PhD</span> <span m="2528610">from</span> <span
  m="2528820">here,</span> <span m="2529210">and</span> <span
  m="2529360">he</span> <span m="2529510">came</span> <span
  m="2529780">back</span> <span m="2530110">on</span> <span m="2530220">a</span>
  <span m="2530290">sabbatical,</span> <span m="2530950">and</span> <span
  m="2531280">he</span> <span m="2531640">created</span> <span
  m="2532210">this--</span> <span m="2532660">got</span> <span
  m="2532930">us</span> <span m="2533020">started.</span> <span
  m="2533980">And</span> <span m="2534190">we</span> <span
  m="2534430">really</span> <span m="2534820">owe</span> <span
  m="2535000">a</span> <span m="2535090">lot</span> <span m="2535330">to</span>
  <span m="2535510">him.</span></p><p><span m="2539130">Also,</span> <span
  m="2540400">Professor</span> <span m="2540880">Edelman</span> <span
  m="2541330">was</span> <span m="2541720">involved</span> <span
  m="2542200">with</span> <span m="2542410">this</span> <span
  m="2542620">course.</span> <span m="2543850">And</span> <span
  m="2544060">you</span> <span m="2544150">maybe</span> <span
  m="2544450">know</span> <span m="2544720">that</span> <span
  m="2544870">he</span> <span m="2545020">created</span> <span
  m="2545430">Julia.</span> <span m="2546310">How</span> <span
  m="2546430">many</span> <span m="2547020">know</span> <span
  m="2547300">what</span> <span m="2547510">Julia</span> <span
  m="2548090">is?</span> <span m="2549040">Oh,</span> <span
  m="2549400">wonderful.</span> <span m="2550660">That</span> <span
  m="2550810">will</span> <span m="2550960">make</span> <span
  m="2551260">his</span> <span m="2551440">day.</span> <span
  m="2554480">He</span> <span m="2554590">tells</span> <span
  m="2554890">me</span> <span m="2555070">every</span> <span
  m="2555310">time</span> <span m="2555550">I</span> <span
  m="2555670">see</span> <span m="2555850">him,</span> <span
  m="2556000">Julia</span> <span m="2556310">is</span> <span
  m="2556510">good.</span> <span m="2557050">And</span> <span
  m="2557230">I</span> <span m="2557530">tell</span> <span
  m="2557740">him,</span> <span m="2557860">I</span> <span
  m="2558010">believe</span> <span m="2558460">it.</span></p><p><span
  m="2558910">[LAUGHTER]</span></p><p><span m="2560680">Anyway--</span> <span
  m="2562450">and</span> <span m="2562630">it's</span> <span
  m="2562780">become--</span> <span m="2564220">Professor</span> <span
  m="2564730">Johnson</span> <span m="2565270">in</span> <span
  m="2565420">18.06</span> <span m="2566280">has</span> <span
  m="2566440">used</span> <span m="2566740">Julia.</span> <span
  m="2567520">And</span> <span m="2568030">every</span> <span
  m="2568450">semester,</span> <span m="2570280">Steven</span> <span
  m="2570670">Johnson</span> <span m="2571700">gives</span> <span
  m="2572350">in</span> <span m="2572560">the</span> <span
  m="2572650">first</span> <span m="2573010">week</span> <span
  m="2574120">a</span> <span m="2575020">tutorial</span> <span
  m="2575950">on</span> <span m="2577420">Julia.</span> <span
  m="2578440">And</span> <span m="2578770">so</span> <span
  m="2579520">that's</span> <span m="2580090">arranged,</span> <span
  m="2580570">and</span> <span m="2580750">I</span> <span
  m="2580900">promised</span> <span m="2581410">to</span> <span
  m="2581590">tell</span> <span m="2581830">you</span> <span
  m="2582370">where</span> <span m="2583150">and</span> <span
  m="2583290">when</span> <span m="2583570">that</span> <span
  m="2583810">is.</span> <span m="2585910">So</span> <span m="2586060">I</span>
  <span m="2586360">think</span> <span m="2586660">if</span> <span
  m="2586840">you</span> <span m="2586930">don't</span> <span
  m="2587140">know</span> <span m="2587320">anything</span> <span
  m="2587590">about</span> <span m="2587800">Julia,</span> <span
  m="2588220">try</span> <span m="2588520">to</span> <span
  m="2588640">go.</span> <span m="2589360">It's</span> <span
  m="2589600">in</span> <span m="2589810">Stata.</span> <span
  m="2591250">It's</span> <span m="2591490">on</span> <span
  m="2591700">Friday</span> <span m="2593920">at</span> <span
  m="2594130">5:00--</span> <span m="2594570">5:00</span> <span
  m="2595060">to</span> <span m="2595210">7:00.</span> <span
  m="2596140">So</span> <span m="2596560">Julia</span> <span
  m="2599710">from</span> <span m="2600710">Professor</span> <span
  m="2602290">Johnson.</span> <span m="2605320">So</span> <span
  m="2605590">he's</span> <span m="2605830">done</span> <span
  m="2606040">this</span> <span m="2606340">multiple</span> <span
  m="2606790">times.</span> <span m="2607210">He's</span> <span
  m="2607840">good</span> <span m="2608080">at</span> <span
  m="2608260">it.</span></p><p><span m="2612280">I</span> <span
  m="2612640">don't</span> <span m="2612850">think</span> <span
  m="2613060">we</span> <span m="2613210">know</span> <span
  m="2613510">yet</span> <span m="2613990">what--</span> <span
  m="2615130">I</span> <span m="2616030">guess</span> <span
  m="2616270">I'm</span> <span m="2616450">hoping</span> <span
  m="2616840">that</span> <span m="2617050">you'll</span> <span
  m="2617230">have</span> <span m="2617440">an</span> <span
  m="2617560">option</span> <span m="2617980">to</span> <span
  m="2618100">use</span> <span m="2619090">any</span> <span
  m="2619330">of</span> <span m="2619450">the</span> <span
  m="2619540">three</span> <span m="2619870">languages.</span> <span
  m="2621170">But</span> <span m="2622070">the</span> <span
  m="2623980">online</span> <span m="2624520">thing</span> <span
  m="2624820">that</span> <span m="2624970">we</span> <span
  m="2625180">give</span> <span m="2625510">you</span> <span
  m="2626410">was</span> <span m="2626740">created</span> <span
  m="2627250">in</span> <span m="2627400">Julia.</span> <span
  m="2627880">So</span> <span m="2628090">professor</span> <span
  m="2628510">Rao</span> <span m="2628810">had</span> <span
  m="2628930">to</span> <span m="2629060">learn</span> <span
  m="2629320">Julia</span> <span m="2630190">last</span> <span
  m="2630910">spring,</span> <span m="2631290">and</span> <span
  m="2631570">the</span> <span m="2631720">class</span> <span
  m="2632140">did,</span> <span m="2632380">too.</span> <span
  m="2633160">And</span> <span m="2633280">there</span> <span
  m="2633370">was</span> <span m="2633550">a</span> <span
  m="2633640">certain</span> <span m="2633970">amount</span> <span
  m="2634270">of</span> <span m="2634330">bitching</span> <span
  m="2634810">about</span> <span m="2635140">it.</span></p><p><span
  m="2635740">[LAUGHTER]</span></p><p><span m="2637990">But</span> <span
  m="2639010">I</span> <span m="2639220">think,</span> <span
  m="2639640">with</span> <span m="2639880">maybe</span> <span
  m="2640210">one</span> <span m="2640480">exception,</span> <span
  m="2641750">who</span> <span m="2641980">still</span> <span
  m="2642280">got</span> <span m="2642490">an</span> <span m="2642640">A,</span>
  <span m="2644590">everybody</span> <span m="2645310">was</span> <span
  m="2645790">OK</span> <span m="2646105">and</span> <span
  m="2646580">was</span> <span m="2646980">glad</span> <span
  m="2647350">to</span> <span m="2647440">learn</span> <span
  m="2647970">Julia.</span> <span m="2648330">And</span> <span
  m="2649060">Professor</span> <span m="2649460">Rao</span> <span
  m="2649810">now</span> <span m="2650050">uses</span> <span
  m="2650470">Julia</span> <span m="2650890">entirely.</span> <span
  m="2652330">So</span> <span m="2652600">he's</span> <span
  m="2652840">creating</span> <span m="2653380">a</span> <span
  m="2653470">new</span> <span m="2654570">on</span> <span
  m="2654920">ramp</span> <span m="2655630">with</span> <span
  m="2655900">Julia.</span> <span m="2656650">MATLAB,</span> <span
  m="2657130">by</span> <span m="2657340">the</span> <span
  m="2657460">way,</span> <span m="2657730">has</span> <span
  m="2657940">just</span> <span m="2658300">issued</span> <span
  m="2659140">an</span> <span m="2659290">on</span> <span
  m="2659530">ramp</span> <span m="2659920">to</span> <span
  m="2660070">deep</span> <span m="2660400">learning</span> <span
  m="2660910">that</span> <span m="2661150">I'll</span> <span
  m="2661720">tell</span> <span m="2661930">you</span> <span
  m="2662080">about,</span> <span m="2662450">and</span> <span
  m="2662590">probably</span> <span m="2662980">get</span> <span
  m="2663160">a</span> <span m="2663230">MATLAB--</span> <span
  m="2665380">somebody</span> <span m="2665740">from</span> <span
  m="2665920">Math</span> <span m="2666190">Works</span> <span
  m="2666460">to</span> <span m="2668530">say</span> <span
  m="2668800">something</span> <span m="2669160">about</span> <span
  m="2669490">it.</span></p><p><span m="2670630">So</span> <span
  m="2670870">that's</span> <span m="2671230">what's</span> <span
  m="2671500">coming,</span> <span m="2672040">that</span> <span
  m="2672280">we</span> <span m="2672880">don't</span> <span
  m="2673150">quite</span> <span m="2673510">know</span> <span
  m="2676180">exactly</span> <span m="2676750">how</span> <span
  m="2676960">well</span> <span m="2677130">organized</span> <span
  m="2677890">those</span> <span m="2678640">homeworks.</span> <span
  m="2679150">We'll</span> <span m="2679330">just</span> <span
  m="2679750">take</span> <span m="2680050">the</span> <span
  m="2680170">first</span> <span m="2680530">one</span> <span
  m="2680740">and</span> <span m="2681390">see</span> <span
  m="2682060">what</span> <span m="2682240">happens.</span> <span
  m="2683720">So</span> <span m="2683985">I'll</span> <span
  m="2684250">certainly</span> <span m="2684640">say</span> <span
  m="2684850">more</span> <span m="2685120">about</span> <span
  m="2685400">homeworks</span> <span m="2686460">when--</span> <span
  m="2688990">maybe</span> <span m="2689260">even</span> <span
  m="2689530">Friday.</span></p><p><span m="2690610">But</span> <span
  m="2691000">are</span> <span m="2691150">there</span> <span
  m="2691330">other</span> <span m="2691630">questions</span> <span
  m="2692230">that</span> <span m="2692800">I</span> <span
  m="2692890">should</span> <span m="2693160">answer?</span> <span
  m="2694390">Because</span> <span m="2694600">some</span> <span
  m="2694780">people</span> <span m="2695050">will</span> <span
  m="2695170">be</span> <span m="2695320">thinking,</span> <span
  m="2695810">OK,</span> <span m="2695990">am</span> <span m="2696100">I</span>
  <span m="2696190">going</span> <span m="2696340">to</span> <span
  m="2696430">do</span> <span m="2696610">this</span> <span
  m="2696850">or</span> <span m="2697540">am</span> <span m="2697660">I</span>
  <span m="2697750">going</span> <span m="2697880">to</span> <span
  m="2697990">sit in</span> <span m="2698410">6.036,</span> <span
  m="2700180">or</span> <span m="2700420">some</span> <span
  m="2700690">other</span> <span m="2701890">course</span> <span
  m="2702220">in</span> <span m="2702340">deep</span> <span
  m="2702610">learning?</span> <span m="2703960">Anything</span> <span
  m="2704500">on</span> <span m="2704650">your</span> <span
  m="2704770">mind?</span> <span m="2706090">And</span> <span
  m="2706270">you</span> <span m="2706420">can</span> <span
  m="2706630">email</span> <span m="2706990">me.</span> <span
  m="2708910">So</span> <span m="2709120">we</span> <span
  m="2709240">will</span> <span m="2709450">have</span> <span
  m="2709600">a</span> <span m="2709660">Stellar</span> <span
  m="2710110">site</span> <span m="2710560">and</span> <span
  m="2710730">you'll</span> <span m="2711340">see</span> <span
  m="2711760">all</span> <span m="2712070">the--</span> <span
  m="2712310">the</span> <span m="2712760">TAs</span> <span
  m="2713320">are</span> <span m="2713440">still</span> <span
  m="2713740">to</span> <span m="2713830">be</span> <span
  m="2713950">named.</span> <span m="2714550">But</span> <span
  m="2715210">the</span> <span m="2715390">wonderful</span> <span
  m="2715930">thing</span> <span m="2716170">is</span> <span
  m="2716410">that</span> <span m="2716680">the</span> <span
  m="2717100">undergraduates</span> <span m="2717850">who</span> <span
  m="2717970">took</span> <span m="2718300">this</span> <span
  m="2718510">course</span> <span m="2718840">last</span> <span
  m="2719320">year</span> <span m="2720130">are</span> <span
  m="2721180">volunteering</span> <span m="2722080">to</span> <span
  m="2722290">be</span> <span m="2722710">graders</span> <span
  m="2723760">for</span> <span m="2723970">you</span> <span
  m="2724120">guys.</span> <span m="2725170">So</span> <span
  m="2726820">they</span> <span m="2727090">will</span> <span
  m="2727420">know</span> <span m="2727840">what</span> <span
  m="2728110">those</span> <span m="2728680">online</span> <span
  m="2729100">homeworks</span> <span m="2729610">were</span> <span
  m="2729730">about.</span></p><p><span m="2730990">So</span> <span
  m="2731170">that's</span> <span m="2734586">a</span> <span
  m="2735340">first</span> <span m="2736480">word</span> <span
  m="2736870">about</span> <span m="2737140">what's</span> <span
  m="2737410">coming</span> <span m="2737860">and</span> <span
  m="2737980">about</span> <span m="2739390">the</span> <span
  m="2739510">language.</span> <span m="2741670">I'm</span> <span
  m="2742000">going</span> <span m="2742170">to</span> <span
  m="2742330">finish</span> <span m="2742960">by</span> <span
  m="2743320">a</span> <span m="2743380">very</span> <span
  m="2743740">important</span> <span m="2745810">topic,</span> <span
  m="2747160">multiplying</span> <span m="2747760">A</span> <span
  m="2747940">times</span> <span m="2748370">B.</span> <span
  m="2749590">Oh,</span> <span m="2749770">look,</span> <span
  m="2750040">a</span> <span m="2750350">clean</span> <span
  m="2750710">board.</span> <span m="2751050">So</span> <span
  m="2751420">now</span> <span m="2751690">I</span> <span
  m="2751810">want</span> <span m="2752050">to</span> <span
  m="2752110">multiply</span> <span m="2753640">a</span> <span
  m="2753700">matrix</span> <span m="2754210">by</span> <span
  m="2754390">a</span> <span m="2754450">vector.</span> <span
  m="2757110">Everybody</span> <span m="2757620">knows</span> <span
  m="2757950">how</span> <span m="2758100">to</span> <span m="2758220">do</span>
  <span m="2758460">it.</span> <span m="2760680">You</span> <span
  m="2760890">take</span> <span m="2761250">a</span> <span
  m="2763130">row</span> <span m="2763620">of</span> <span
  m="2763800">A--</span> <span m="2764220">so</span> <span
  m="2764490">you</span> <span m="2764610">take</span> <span
  m="2764850">a</span> <span m="2764910">row</span> <span m="2766380">of</span>
  <span m="2766560">A</span> <span m="2767650">and</span> <span
  m="2768000">you</span> <span m="2768120">take</span> <span
  m="2768360">a</span> <span m="2768450">column</span> <span
  m="2768900">of</span> <span m="2769020">B,</span> <span m="2770700">and</span>
  <span m="2770970">you</span> <span m="2771270">take</span> <span
  m="2771540">the</span> <span m="2771690">dot</span> <span
  m="2771960">product.</span> <span m="2773330">So</span> <span
  m="2773550">you</span> <span m="2773700">get</span> <span m="2774110">a</span>
  <span m="2774160">dot</span> <span m="2774420">product.</span> <span
  m="2777480">Row</span> <span m="2777750">dot</span> <span
  m="2778020">column.</span></p><p><span m="2784310">That's,</span> <span
  m="2784520">again,</span> <span m="2785160">low</span> <span
  m="2785390">level,</span> <span m="2787540">OK</span> <span
  m="2788020">for</span> <span m="2789220">beginners.</span> <span
  m="2790180">But</span> <span m="2790900">we</span> <span
  m="2791350">want</span> <span m="2791530">to</span> <span
  m="2791620">see</span> <span m="2792460">that</span> <span
  m="2793450">matrix</span> <span m="2793960">multiplication,</span> <span
  m="2794650">AB,</span> <span m="2795250">in</span> <span m="2795490">a</span>
  <span m="2796150">deeper</span> <span m="2796510">way.</span> <span
  m="2798250">And</span> <span m="2798480">the</span> <span
  m="2798580">deeper</span> <span m="2799030">way</span> <span
  m="2799570">is</span> <span m="2799990">columns</span> <span
  m="2800560">times</span> <span m="2801010">row.</span> <span
  m="2802840">Columns</span> <span m="2803440">of</span> <span
  m="2803620">A,</span> <span m="2804760">rows</span> <span
  m="2805240">of</span> <span m="2805360">B.</span> <span
  m="2805960">Columns</span> <span m="2806470">times</span> <span
  m="2806890">row.</span> <span m="2808060">Oh,</span> <span
  m="2808210">we</span> <span m="2808390">had</span> <span m="2808630">a</span>
  <span m="2808740">column</span> <span m="2809170">times</span> <span
  m="2809530">a</span> <span m="2809590">row.</span> <span
  m="2812690">That</span> <span m="2812870">was</span> <span
  m="2813060">this</span> <span m="2813250">rank</span> <span
  m="2813710">one</span> <span m="2814040">example.</span> <span
  m="2817130">We</span> <span m="2817250">had</span> <span m="2817410">a</span>
  <span m="2817490">column</span> <span m="2817940">times</span> <span
  m="2818330">a</span> <span m="2818360">row,</span> <span
  m="2818690">and</span> <span m="2818780">it</span> <span
  m="2818870">produced</span> <span m="2819320">a</span> <span
  m="2819380">matrix.</span> <span m="2820040">And</span> <span
  m="2820160">that's</span> <span m="2820430">what</span> <span
  m="2820610">it</span> <span m="2820730">looked</span> <span
  m="2820970">like.</span> <span m="2822040">And</span> <span
  m="2822170">its</span> <span m="2822350">rank</span> <span
  m="2822710">was</span> <span m="2822920">one.</span> <span
  m="2824600">So</span> <span m="2824960">those</span> <span
  m="2825500">are</span> <span m="2825620">what--</span> <span
  m="2830260">so</span> <span m="2830470">it's</span> <span m="2830620">a</span>
  <span m="2830680">combination</span> <span m="2831490">of.</span></p><p><span
  m="2834520">It's</span> <span m="2834760">very</span> <span
  m="2835150">like</span> <span m="2835470">Ax.</span> <span
  m="2836740">I'm</span> <span m="2837070">really</span> <span
  m="2837400">just</span> <span m="2837670">extending</span> <span
  m="2838300">the</span> <span m="2838510">Ax</span> <span
  m="2839170">idea</span> <span m="2839590">to</span> <span
  m="2839800">AB.</span> <span m="2842550">So</span> <span
  m="2842760">this</span> <span m="2843690">is</span> <span
  m="2843810">the</span> <span m="2843960">old</span> <span
  m="2844200">way.</span> <span m="2845340">The</span> <span
  m="2845400">new</span> <span m="2845670">way</span> <span
  m="2846000">is</span> <span m="2846210">columns.</span> <span
  m="2846750">So</span> <span m="2847020">there's</span> <span
  m="2847320">column</span> <span m="2847750">K.</span> <span
  m="2850320">It</span> <span m="2850500">will</span> <span
  m="2850710">multiply.</span> <span m="2852150">Sure</span> <span
  m="2852420">enough,</span> <span m="2852840">it</span> <span
  m="2852930">multiplies</span> <span m="2853560">row</span> <span
  m="2853950">K.</span> <span m="2856080">Everybody</span> <span
  m="2856560">sees</span> <span m="2856980">that</span> <span
  m="2857850">it</span> <span m="2857970">will</span> <span
  m="2858630">happen</span> <span m="2858960">that</span> <span
  m="2859140">way.</span> <span m="2859420">If</span> <span
  m="2859560">you</span> <span m="2859650">do</span> <span m="2859830">it</span>
  <span m="2859920">the</span> <span m="2860070">old</span> <span
  m="2860280">way,</span> <span m="2860580">when</span> <span
  m="2860760">you</span> <span m="2861210">do</span> <span m="2861480">a</span>
  <span m="2861570">dot</span> <span m="2861840">product</span> <span
  m="2862700">of</span> <span m="2862830">something</span> <span
  m="2863250">here,</span> <span m="2863490">something</span> <span
  m="2863880">here,</span> <span m="2864540">you're</span> <span
  m="2864810">doing</span> <span m="2865340">these</span> <span
  m="2865530">multiplications.</span> <span m="2866280">And</span> <span
  m="2866400">when</span> <span m="2866610">you</span> <span
  m="2866730">hit</span> <span m="2867180">column</span> <span
  m="2867570">K</span> <span m="2867870">here,</span> <span
  m="2868200">you</span> <span m="2868380">hit</span> <span
  m="2868560">row</span> <span m="2868890">K</span> <span
  m="2869220">there.</span> <span m="2870000">So</span> <span
  m="2870630">these</span> <span m="2870840">are</span> <span
  m="2870930">connected.</span></p><p><span m="2876370">So</span> <span
  m="2876580">I</span> <span m="2876670">get</span> <span
  m="2876940">things</span> <span m="2877330">like</span> <span
  m="2878950">column</span> <span m="2879370">K</span> <span
  m="2881390">of</span> <span m="2881710">A</span> <span
  m="2883390">times</span> <span m="2884020">row</span> <span
  m="2884440">K</span> <span m="2886120">of</span> <span m="2886300">B.</span>
  <span m="2888130">And</span> <span m="2888460">I</span> <span
  m="2888550">don't</span> <span m="2888730">know</span> <span
  m="2888820">what</span> <span m="2889060">notation</span> <span
  m="2889435">to</span> <span m="2889810">use,</span> <span
  m="2890010">so</span> <span m="2890260">I</span> <span m="2890350">just</span>
  <span m="2890620">wrote</span> <span m="2891490">the</span> <span
  m="2891610">words.</span> <span m="2894430">But</span> <span
  m="2894640">now</span> <span m="2895000">that's</span> <span
  m="2895570">one</span> <span m="2896020">piece</span> <span
  m="2896560">of</span> <span m="2896750">the</span> <span
  m="2899290">final</span> <span m="2899680">answer,</span> <span
  m="2900070">AB.</span> <span m="2901000">That's</span> <span
  m="2901270">a</span> <span m="2901330">rank</span> <span
  m="2901810">one</span> <span m="2902170">piece.</span> <span
  m="2902650">That's</span> <span m="2903130">a</span> <span
  m="2903190">building</span> <span m="2903730">block.</span> <span
  m="2904570">So</span> <span m="2904810">I</span> <span m="2904990">add</span>
  <span m="2906010">from</span> <span m="2908320">K</span> <span
  m="2908710">equals</span> <span m="2908890">1</span> <span
  m="2909400">column</span> <span m="2909790">one</span> <span
  m="2910180">times</span> <span m="2910570">row</span> <span
  m="2910840">one.</span> <span m="2911920">Column</span> <span
  m="2912220">one</span> <span m="2912490">of</span> <span m="2912790">A</span>
  <span m="2913210">times</span> <span m="2913540">row</span> <span
  m="2913720">one</span> <span m="2913960">of</span> <span m="2914080">B</span>
  <span m="2914590">plus--</span> <span m="2915150">da,</span> <span
  m="2915250">da,</span> <span m="2915430">da,</span> <span
  m="2915730">plus</span> <span m="2916540">column</span> <span
  m="2916930">K</span> <span m="2917410">plus--</span> <span
  m="2918380">and</span> <span m="2918580">of</span> <span
  m="2918670">course,</span> <span m="2919010">I</span> <span
  m="2919350">stop</span> <span m="2919780">at</span> <span
  m="2920320">column</span> <span m="2920650">n</span> <span
  m="2921630">of</span> <span m="2921970">A</span> <span
  m="2922840">times</span> <span m="2923260">row</span> <span
  m="2923590">n</span> <span m="2924836">of</span> <span m="2925310">B.</span>
  <span m="2928500">So</span> <span m="2928710">it's</span> <span
  m="2928950">a</span> <span m="2929310">sum</span> <span m="2929670">of</span>
  <span m="2931250">outer</span> <span m="2931560">products.</span></p><p><span
  m="2934560">So</span> <span m="2935310">everybody</span> <span
  m="2935730">sees</span> <span m="2936060">a</span> <span
  m="2936170">sum</span> <span m="2936520">because</span> <span
  m="2936990">I</span> <span m="2937650">have</span> <span
  m="2940410">column</span> <span m="2940710">one</span> <span
  m="2941160">times</span> <span m="2941460">row</span> <span
  m="2941640">1,</span> <span m="2942690">column</span> <span
  m="2943020">K</span> <span m="2943470">times</span> <span
  m="2943800">row</span> <span m="2944145">K,</span> <span
  m="2945690">column</span> <span m="2946020">n</span> <span
  m="2946410">times</span> <span m="2946770">row</span> <span
  m="2947070">n,</span> <span m="2948470">and</span> <span
  m="2948620">then</span> <span m="2948800">I</span> <span
  m="2948950">add</span> <span m="2949160">those</span> <span
  m="2949460">pieces.</span> <span m="2950720">It's</span> <span
  m="2951140">just</span> <span m="2951530">the</span> <span
  m="2952160">generalization</span> <span m="2953150">of</span> <span
  m="2953300">Ax</span> <span m="2954470">to</span> <span m="2954770">a</span>
  <span m="2955340">matrix</span> <span m="2956630">B</span> <span
  m="2956990">there.</span> <span m="2957440">So</span> <span
  m="2957680">it's</span> <span m="2957860">a</span> <span
  m="2957920">sum</span> <span m="2958460">of</span> <span
  m="2961100">Column</span> <span m="2961520">K</span> <span
  m="2964220">row</span> <span m="2964710">K</span> <span m="2965390">of</span>
  <span m="2965600">A</span> <span m="2966930">row</span> <span
  m="2967275">K</span> <span m="2967620">of</span> <span m="2968082">B.</span>
  <span m="2969470">And</span> <span m="2969740">maybe,</span> <span
  m="2970310">should</span> <span m="2970640">we</span> <span
  m="2971090">check</span> <span m="2971600">that</span> <span
  m="2971810">that</span> <span m="2972050">gives</span> <span
  m="2972380">us</span> <span m="2972560">the</span> <span
  m="2972710">right</span> <span m="2972980">answer?</span> <span
  m="2974780">I</span> <span m="2975050">won't</span> <span
  m="2975590">do</span> <span m="2975770">that</span> <span
  m="2975980">here,</span> <span m="2976370">but</span> <span
  m="2977720">all</span> <span m="2977840">we're</span> <span
  m="2978020">doing</span> <span m="2978350">is</span> <span
  m="2978500">the</span> <span m="2978650">same</span> <span
  m="2980060">multiplications</span> <span m="2982200">in</span> <span
  m="2982350">a</span> <span m="2982410">different</span> <span
  m="2982770">order.</span></p><p><span m="2984210">Actually,</span> <span
  m="2984630">let's</span> <span m="2984915">just</span> <span
  m="2985200">quit</span> <span m="2985810">with</span> <span
  m="2986010">one</span> <span m="2986250">minute.</span> <span
  m="2986550">We</span> <span m="2986700">can</span> <span
  m="2986880">figure</span> <span m="2987210">out</span> <span
  m="2987330">how</span> <span m="2987480">many</span> <span
  m="2987720">multiplications</span> <span m="2988590">are</span> <span
  m="2988770">there.</span> <span m="2989430">How</span> <span
  m="2989550">many</span> <span m="2989760">more</span> <span
  m="2989910">applications</span> <span m="2990630">to</span> <span
  m="2990780">do</span> <span m="2991110">an</span> <span m="2991570">m</span>
  <span m="2992060">by</span> <span m="2992400">n</span> <span
  m="2992760">matrix</span> <span m="2993390">A</span> <span
  m="2993840">times</span> <span m="2994710">an</span> <span
  m="2995070">n</span> <span m="2995370">by</span> <span m="2995670">p</span>
  <span m="2996150">matrix</span> <span m="2997650">B?</span> <span
  m="2998570">So</span> <span m="2998730">that's</span> <span
  m="2998970">A</span> <span m="2999150">times</span> <span
  m="2999600">B.</span> <span m="3000380">How</span> <span
  m="3000530">many</span> <span m="3001040">individual</span> <span
  m="3001670">numbers--</span> <span m="3002610">because</span> <span
  m="3002800">this</span> <span m="3003030">would</span> <span
  m="3003140">determine</span> <span m="3003680">the</span> <span
  m="3003800">cost</span> <span m="3004310">of</span> <span
  m="3004400">it.</span></p><p><span m="3005180">How</span> <span
  m="3005360">many</span> <span m="3006680">numbers</span> <span
  m="3007220">would</span> <span m="3007430">we</span> <span
  m="3007610">need?</span> <span m="3009870">Well,</span> <span
  m="3011250">suppose</span> <span m="3011640">we</span> <span
  m="3011790">do</span> <span m="3011970">it</span> <span m="3012060">the</span>
  <span m="3012240">old</span> <span m="3012570">way,</span> <span
  m="3013050">by</span> <span m="3015850">inner</span> <span
  m="3016130">product,</span> <span m="3018240">row</span> <span
  m="3018600">times</span> <span m="3018990">column.</span> <span
  m="3019440">So</span> <span m="3019650">how</span> <span
  m="3019800">many</span> <span m="3020760">multiplications</span> <span
  m="3021420">to</span> <span m="3021540">do</span> <span m="3022200">a</span>
  <span m="3022290">row</span> <span m="3022590">times</span> <span
  m="3023010">column</span> <span m="3023460">and</span> <span
  m="3023550">get</span> <span m="3023790">one</span> <span
  m="3024570">entry</span> <span m="3025050">in</span> <span
  m="3025160">the</span> <span m="3025290">answer?</span> <span
  m="3026580">n,</span> <span m="3028130">right?</span> <span m="3029060">The
  row</span> <span m="3029450">has</span> <span m="3029630">length</span> <span
  m="3029940">n,</span> <span m="3030320">the</span> <span
  m="3030440">column</span> <span m="3030860">has</span> <span
  m="3031070">length</span> <span m="3031430">n,</span> <span
  m="3032180">n</span> <span m="3032390">multiplications.</span> <span
  m="3033860">So</span> <span m="3034040">that's</span> <span
  m="3034340">n.</span> <span m="3034800">And</span> <span
  m="3034910">now</span> <span m="3035150">how</span> <span
  m="3035330">many</span> <span m="3035570">of</span> <span
  m="3035660">those</span> <span m="3035900">do</span> <span
  m="3036020">I</span> <span m="3036140">have</span> <span m="3036350">to</span>
  <span m="3036470">do?</span></p><p><span m="3038150">AUDIENCE:</span> <span
  m="3038375">mp.</span></p><p><span m="3039950">GILBERT STRANG:</span> <span
  m="3040135">mp.</span> <span m="3041330">Because</span> <span
  m="3041570">what's</span> <span m="3041870">the</span> <span
  m="3041960">size</span> <span m="3042410">of</span> <span
  m="3042530">this</span> <span m="3042880">answer?</span> <span
  m="3044120">The</span> <span m="3044210">size</span> <span
  m="3044630">of</span> <span m="3044720">this</span> <span
  m="3044990">answer</span> <span m="3045380">is</span> <span
  m="3045530">m</span> <span m="3045740">by</span> <span m="3045980">p.</span>
  <span m="3049580">So</span> <span m="3049800">if</span> <span
  m="3049950">I</span> <span m="3050070">do</span> <span m="3050910">it</span>
  <span m="3051000">in</span> <span m="3051180">that</span> <span
  m="3051510">old</span> <span m="3051930">order,</span> <span
  m="3053160">like</span> <span m="3053520">n</span> <span
  m="3053790">multiplication</span> <span m="3054225">is</span> <span
  m="3054660">to</span> <span m="3054810">do</span> <span m="3054990">a</span>
  <span m="3055080">dot</span> <span m="3055320">product.</span> <span
  m="3056310">And</span> <span m="3056610">I've</span> <span
  m="3056760">got</span> <span m="3056940">this</span> <span
  m="3057180">many</span> <span m="3057510">dot</span> <span
  m="3057750">products</span> <span m="3058260">in</span> <span
  m="3058350">the</span> <span m="3058470">answer.</span> <span
  m="3059250">So</span> <span m="3059400">I've</span> <span
  m="3059580">mnp</span> <span m="3061800">multiplied.</span> <span
  m="3067630">Now</span> <span m="3067900">suppose</span> <span
  m="3068260">I</span> <span m="3068350">do</span> <span m="3068530">it</span>
  <span m="3068620">this</span> <span m="3068860">way.</span> <span
  m="3072020">How</span> <span m="3072100">many</span> <span
  m="3072370">multiplications</span> <span m="3073330">to</span> <span
  m="3073450">do</span> <span m="3073690">one</span> <span m="3073930">of</span>
  <span m="3073990">those</span> <span m="3074290">guys?</span> <span
  m="3076440">To</span> <span m="3076560">multiply</span> <span
  m="3077100">our</span> <span m="3077190">column</span> <span
  m="3077640">by</span> <span m="3077880">a</span> <span
  m="3077970">row?</span></p><p><span m="3083716">This</span> <span
  m="3084140">is</span> <span m="3084290">an</span> <span m="3084440">m</span>
  <span m="3084760">by</span> <span m="3085070">1,</span> <span
  m="3086510">and</span> <span m="3086660">this</span> <span
  m="3086900">is</span> <span m="3087020">a</span> <span m="3087110">1</span>
  <span m="3087500">by</span> <span m="3087830">p.</span> <span
  m="3089291">One</span> <span m="3089780">column,</span> <span
  m="3090260">one</span> <span m="3090590">row.</span> <span
  m="3090980">How</span> <span m="3091160">many</span> <span
  m="3091400">multiplications</span> <span m="3092240">for</span> <span
  m="3092420">that</span> <span m="3092630">guy?</span> <span
  m="3094390">mp.</span> <span m="3096530">And</span> <span
  m="3096800">how</span> <span m="3097010">many</span> <span
  m="3097280">of</span> <span m="3097400">those</span> <span
  m="3097700">rank</span> <span m="3098060">ones</span> <span
  m="3098480">do</span> <span m="3098660">I</span> <span m="3098750">have</span>
  <span m="3098900">to</span> <span m="3099020">do?</span> <span
  m="3100718">n.</span> <span m="3103640">You</span> <span
  m="3103880">got</span> <span m="3104100">it?</span> <span
  m="3104940">mp</span> <span m="3105420">times</span> <span
  m="3105830">n.</span></p><p><span m="3106740">Now,</span> <span
  m="3108420">the</span> <span m="3108570">other</span> <span
  m="3108780">way</span> <span m="3109230">was</span> <span m="3111030">n</span>
  <span m="3111480">times</span> <span m="3113910">mp.</span> <span
  m="3116580">So</span> <span m="3116820">it</span> <span
  m="3117000">gives</span> <span m="3117310">the</span> <span
  m="3117400">same</span> <span m="3117750">answer,</span> <span
  m="3118530">mnp</span> <span m="3119300">multiplication.</span> <span
  m="3120330">In</span> <span m="3120510">fact,</span> <span
  m="3120780">they're</span> <span m="3120960">exactly</span> <span
  m="3121440">the</span> <span m="3121530">same</span> <span
  m="3121890">multiplications,</span> <span m="3122640">just</span> <span
  m="3122940">a</span> <span m="3123000">different</span> <span
  m="3123360">order.</span> <span m="3124020">OK.</span> <span
  m="3124500">We're</span> <span m="3124740">at</span> <span
  m="3125090">1:55.</span> <span m="3126540">Thanks</span> <span
  m="3126900">for</span> <span m="3127080">coming</span> <span
  m="3127440">today.</span> <span m="3128760">I'll</span> <span
  m="3128880">talk</span> <span m="3129150">more</span> <span
  m="3129390">about</span> <span m="3129690">the</span> <span
  m="3129810">class</span> <span m="3130500">and</span> <span
  m="3130680">about</span> <span m="3130950">linear</span> <span
  m="3131250">algebra</span> <span m="3131640">on</span> <span
  m="3131790">Friday.</span> <span m="3132570">Thank</span> <span
  m="3132810">you.</span></p>
uid: 716f1f5e7707703a956048aae98c3fd5
type: courses
layout: video
---
