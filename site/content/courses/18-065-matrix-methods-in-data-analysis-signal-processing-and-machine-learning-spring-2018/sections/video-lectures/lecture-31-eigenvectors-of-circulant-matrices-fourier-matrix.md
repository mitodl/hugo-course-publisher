---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>This lecture continues with
  constant-diagonal circulant matrices. Each lower diagonal continues on an
  upper diagonal to produce \(n\) equal entries. The eigenvectors are always the
  columns of the Fourier matrix and computing is fast.</p> <h2
  class="subhead">Summary</h2><p>Circulants \(C\) have \(n\) constant diagonals
  (completed cyclically).<br /> Cyclic convolution with \(c_0, ..., c_{n-1}
  =\)&nbsp;multiplication by \(C\)<br /> Linear shift invariant: LSI for
  periodic problems<br /> Eigenvectors of every \(C =\) columns of the Fourier
  matrix<br /> Eigenvalues of \(C =\) (Fourier matrix)(column zero of \(C\))</p>
  <p>Related section in textbook: IV.2</p> <p><strong>Instructor:</strong> Prof.
  Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 1pFv7e9xtHo
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    title: Video-YouTube-Stream
    type: Video
    uid: e733fd40a027a21ea315612902dd8e23
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/1pFv7e9xtHo/default.jpg'
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6f87b7232a5672c38592bb394a53fa8d
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 1pFv7e9xtHo
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 00112096bef145c1a1ea5b8db1f2b798
  - id: 1pFv7e9xtHo.srt
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-31-eigenvectors-of-circulant-matrices-fourier-matrix/1pFv7e9xtHo.srt
    title: 3play caption file
    type: null
    uid: 9e41a811c9e7bd72f90beaa8b511daa9
  - id: 1pFv7e9xtHo.pdf
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-31-eigenvectors-of-circulant-matrices-fourier-matrix/1pFv7e9xtHo.pdf
    title: 3play pdf file
    type: null
    uid: 674f6ce6e9be264b68acc9a7c52655ff
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b35a561e7e5b0cbd82264d28b48ffd58
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: dc77885cb967fa6bb0a18ddc24756938
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture31_300k.mp4'
    parent_uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
    title: Video-Internet Archive-MP4
    type: Video
    uid: 608c364d32455cdaba167f0afaa8ce6e
inline_embed_id: 85527801lecture31eigenvectorsofcirculantmatricesfouriermatrix11468198
order_index: 287
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-31-eigenvectors-of-circulant-matrices-fourier-matrix
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-31-eigenvectors-of-circulant-matrices-fourier-matrix
title: 'Lecture 31: Eigenvectors of Circulant Matrices: Fourier Matrix'
transcript: >-
  <p><span m="1161">NARRATOR:</span> <span m="1550">The</span> <span
  m="1640">following</span> <span m="2090">content</span> <span
  m="2600">is</span> <span m="2720">provided</span> <span m="3170">under</span>
  <span m="3380">a</span> <span m="3440">Creative</span> <span
  m="3920">Commons</span> <span m="4310">license.</span> <span
  m="5310">Your</span> <span m="5390">support</span> <span m="5900">will</span>
  <span m="6050">help</span> <span m="6320">MIT</span> <span
  m="6770">OpenCourseWare</span> <span m="7520">continue</span> <span
  m="8029">to</span> <span m="8180">offer</span> <span
  m="8510">high-quality</span> <span m="9200">educational</span> <span
  m="9860">resources</span> <span m="10430">for</span> <span
  m="10550">free.</span> <span m="11610">To</span> <span m="11630">make</span>
  <span m="11840">a</span> <span m="11900">donation</span> <span
  m="12680">or</span> <span m="12800">to</span> <span m="12950">view</span>
  <span m="13160">additional</span> <span m="13550">materials</span> <span
  m="14180">from</span> <span m="14360">hundreds</span> <span
  m="14690">of</span> <span m="14810">MIT</span> <span m="15170">courses,</span>
  <span m="16470">visit</span> <span m="16670">MIT</span> <span
  m="17180">OpenCourseWare</span> <span m="18140">at</span> <span
  m="18290">ocw.mit.edu.</span></p><p><span m="23528">GILBERT STRANG:</span>
  <span m="23980">OK.</span> <span m="24900">So,</span> <span
  m="25590">I'd</span> <span m="25740">like</span> <span m="25890">to</span>
  <span m="26010">pick</span> <span m="26310">up</span> <span
  m="26670">again</span> <span m="27150">on</span> <span m="29400">this</span>
  <span m="29760">neat</span> <span m="30450">family</span> <span
  m="30960">of</span> <span m="31050">matrices,</span> <span
  m="31740">circulant</span> <span m="32250">matrices.</span> <span
  m="32960">But</span> <span m="33150">first,</span> <span m="34680">let</span>
  <span m="34800">me</span> <span m="35550">say</span> <span
  m="35910">here</span> <span m="36180">and</span> <span m="36300">then</span>
  <span m="36750">put</span> <span m="36970">it</span> <span m="37020">on</span>
  <span m="37140">the</span> <span m="37230">web,</span> <span
  m="37890">my</span> <span m="38100">thought</span> <span
  m="38400">about</span> <span m="38700">the</span> <span
  m="38820">projects.</span> <span m="40140">So,</span> <span m="41610">I</span>
  <span m="41700">think</span> <span m="41940">the</span> <span
  m="42060">last</span> <span m="42420">deadline</span> <span m="42990">I</span>
  <span m="43140">can</span> <span m="43410">give</span> <span
  m="43740">is</span> <span m="43950">the</span> <span m="44070">final</span>
  <span m="44520">class.</span> <span m="45690">So,</span> <span
  m="45960">I</span> <span m="46020">think</span> <span m="46290">that's</span>
  <span m="47760">not</span> <span m="48090">next</span> <span
  m="48420">week</span> <span m="48750">but</span> <span
  m="49020">Wednesday</span> <span m="49830">of</span> <span
  m="49950">the</span> <span m="50040">following</span> <span
  m="50550">week,</span> <span m="50970">I</span> <span m="51060">think,</span>
  <span m="51360">is</span> <span m="51540">our</span> <span
  m="51750">last</span> <span m="52230">class</span> <span
  m="52650">meeting.</span></p><p><span m="53550">So,</span> <span
  m="54210">be</span> <span m="54570">great</span> <span m="54930">to</span>
  <span m="55180">get</span> <span m="55470">them</span> <span
  m="55740">then</span> <span m="56160">or</span> <span
  m="56460">earlier.</span> <span m="57730">And</span> <span m="57810">if</span>
  <span m="57960">anybody</span> <span m="58770">or</span> <span
  m="59730">everybody</span> <span m="60360">would</span> <span
  m="60570">like</span> <span m="60900">to</span> <span m="62910">tell</span>
  <span m="63180">the</span> <span m="63300">class</span> <span
  m="63750">a</span> <span m="63810">little</span> <span m="64110">bit</span>
  <span m="64319">about</span> <span m="65910">their</span> <span
  m="66060">project,</span> <span m="67420">you</span> <span
  m="67560">know</span> <span m="67770">it's</span> <span m="68030">a</span>
  <span m="68550">friendly</span> <span m="69480">audience</span> <span
  m="72480">and</span> <span m="72990">I'd</span> <span m="73140">be</span>
  <span m="73290">happy</span> <span m="73590">to</span> <span
  m="74400">make</span> <span m="74820">space</span> <span m="75420">and</span>
  <span m="75780">time</span> <span m="76140">for</span> <span
  m="76320">that.</span> <span m="77310">So,</span> <span m="78210">send</span>
  <span m="78450">me</span> <span m="78570">an</span> <span
  m="78670">email</span> <span m="79740">and</span> <span m="80370">give</span>
  <span m="80550">me</span> <span m="80700">the</span> <span
  m="80790">project</span> <span m="81300">earlier</span> <span
  m="82320">if</span> <span m="82500">you</span> <span m="82680">would</span>
  <span m="82860">like</span> <span m="83100">to</span> <span
  m="83280">just</span> <span m="83520">say</span> <span m="83760">a</span>
  <span m="83820">few</span> <span m="84090">words</span> <span
  m="84480">in</span> <span m="84630">class.</span> <span m="85620">Or</span>
  <span m="85740">even</span> <span m="86010">if</span> <span
  m="86160">you</span> <span m="87030">are</span> <span m="87150">willing</span>
  <span m="87660">to</span> <span m="87870">say</span> <span m="88170">a</span>
  <span m="88230">few</span> <span m="88470">words</span> <span
  m="88770">in</span> <span m="88920">class,</span> <span m="89370">I'll</span>
  <span m="89470">say.</span> <span m="90420">Yeah.</span> <span
  m="90820">Because</span> <span m="92040">I</span> <span
  m="92230">realize--</span> <span m="92970">yeah,</span> <span
  m="93330">OK.</span> <span m="94650">So,</span> <span m="95250">other</span>
  <span m="95550">questions</span> <span m="96090">about--</span> <span
  m="96970">so,</span> <span m="97170">we're</span> <span
  m="97350">finished</span> <span m="97830">with</span> <span
  m="98040">all</span> <span m="98710">psets</span> <span m="99450">and</span>
  <span m="99600">so</span> <span m="99870">on.</span> <span
  m="100660">So,</span> <span m="100740">it's</span> <span
  m="100950">really</span> <span m="101250">just</span> <span
  m="101590">a</span> <span m="101670">project,</span> <span
  m="102770">and</span> <span m="102990">yeah.</span></p><p><span
  m="103190">STUDENT:</span> <span m="103626">How is the project</span> <span
  m="104062">graded?</span> <span m="104498">Like,</span> <span m="104934">on
  what basis?</span></p><p><span m="105810">GILBERT STRANG:</span> <span
  m="105915">How</span> <span m="106020">is</span> <span m="106140">it</span>
  <span m="106260">graded?</span> <span m="107160">Good</span> <span
  m="107460">question.</span> <span m="108840">But</span> <span
  m="109110">it's</span> <span m="109230">going</span> <span
  m="109340">to</span> <span m="109470">be</span> <span m="109650">me,</span>
  <span m="110220">I</span> <span m="110250">guess.</span> <span
  m="111600">So</span> <span m="113490">I'll</span> <span m="113640">read</span>
  <span m="114090">all</span> <span m="114270">the</span> <span
  m="114360">projects</span> <span m="115470">and</span> <span
  m="117060">come</span> <span m="117270">up</span> <span m="117450">with</span>
  <span m="117620">a</span> <span m="117690">grade</span> <span
  m="118270">somehow,</span> <span m="119030">you</span> <span
  m="119210">know.</span></p><p><span m="121320">I</span> <span
  m="121500">hope</span> <span m="121710">you</span> <span
  m="121860">guys</span> <span m="122190">have</span> <span
  m="122310">understood</span> <span m="122880">that</span> <span
  m="124260">my</span> <span m="124470">feeling</span> <span
  m="124890">is</span> <span m="125970">that</span> <span m="126390">the</span>
  <span m="126750">grades</span> <span m="127200">in</span> <span
  m="127290">this</span> <span m="127530">course</span> <span
  m="127860">are</span> <span m="127950">going</span> <span m="128060">to</span>
  <span m="128190">be</span> <span m="129330">on</span> <span
  m="129509">the</span> <span m="129810">high</span> <span
  m="130080">side</span> <span m="130560">because</span> <span
  m="131100">they</span> <span m="131220">should</span> <span
  m="131490">be.</span> <span m="132180">Yeah.</span> <span m="132390">I</span>
  <span m="132420">think</span> <span m="132690">it's</span> <span
  m="133470">that</span> <span m="133860">kind</span> <span m="134100">of</span>
  <span m="134220">a</span> <span m="134250">course</span> <span
  m="134760">and</span> <span m="134880">I've</span> <span
  m="135480">asked</span> <span m="135820">you</span> <span m="136680">to</span>
  <span m="136860">do</span> <span m="137070">a</span> <span
  m="137160">fair</span> <span m="137370">amount,</span> <span
  m="137850">and--</span> <span m="139860">anyway,</span> <span
  m="140730">that's</span> <span m="141180">my</span> <span
  m="142020">starting</span> <span m="142560">basis.</span></p><p><span
  m="145590">And</span> <span m="145770">there's</span> <span
  m="146010">a</span> <span m="146130">lot</span> <span m="146430">of</span>
  <span m="146490">topics</span> <span m="147000">like</span> <span
  m="147300">circulant</span> <span m="147810">matrices</span> <span
  m="148560">that</span> <span m="149010">I'm</span> <span m="149190">not</span>
  <span m="149370">going</span> <span m="149500">to</span> <span
  m="149640">be</span> <span m="149760">able</span> <span m="150030">to</span>
  <span m="150090">give</span> <span m="150330">you</span> <span
  m="150450">a</span> <span m="150840">pset</span> <span
  m="151410">about.</span> <span m="151920">But</span> <span
  m="153360">of</span> <span m="153480">course,</span> <span
  m="153810">these</span> <span m="154050">are</span> <span
  m="154830">closely</span> <span m="155370">connected</span> <span
  m="156720">to</span> <span m="157140">the</span> <span
  m="157680">discrete</span> <span m="158760">Fourier</span> <span
  m="159390">transform.</span> <span m="161070">So,</span> <span
  m="161170">let</span> <span m="161290">me</span> <span m="161460">just</span>
  <span m="161790">write</span> <span m="165900">the</span> <span
  m="165990">name</span> <span m="166350">of</span> <span m="166440">the</span>
  <span m="166530">great</span> <span m="166830">man</span> <span
  m="167220">Fourier.</span> <span m="169350">So, the</span> <span
  m="169620">discrete</span> <span m="170040">Fourier</span> <span
  m="170370">transform</span> <span m="170900">is,</span> <span
  m="171120">as</span> <span m="171390">you know,</span> <span
  m="171806">a</span> <span m="172638">very,</span> <span m="173054">very</span>
  <span m="173820">important</span> <span m="174390">algorithm</span> <span
  m="175000">in</span> <span m="177960">engineering</span> <span
  m="178740">and</span> <span m="178950">in</span> <span
  m="179220">mathematics.</span> <span m="179970">Everywhere.</span> <span
  m="181080">Fourier</span> <span m="181700">is</span> <span
  m="182040">just</span> <span m="184416">a</span> <span m="184830">key</span>
  <span m="185340">idea</span> <span m="186390">and</span> <span
  m="188850">so</span> <span m="189090">I</span> <span m="189210">think</span>
  <span m="189450">it's</span> <span m="189630">just</span> <span
  m="189840">good</span> <span m="190020">to</span> <span m="190110">know</span>
  <span m="190320">about,</span> <span m="190670">though.</span></p><p><span
  m="190830">So,</span> <span m="191040">circulant</span> <span
  m="191610">matrices</span> <span m="192480">are</span> <span
  m="193170">connected</span> <span m="193860">with</span> <span
  m="195600">finite</span> <span m="198990">size</span> <span
  m="199410">matrices.</span> <span m="200160">Matrices</span> <span
  m="200880">of</span> <span m="201030">size</span> <span m="201600">n.</span>
  <span m="202230">So</span> <span m="202530">our</span> <span
  m="202680">circulant</span> <span m="203220">matrices</span> <span
  m="204030">will</span> <span m="204240">be</span> <span m="204840">N</span>
  <span m="205080">by</span> <span m="205330">N.</span> <span
  m="208460">And</span> <span m="208790">you</span> <span
  m="208970">remember</span> <span m="209420">this</span> <span
  m="209590">special</span> <span m="210050">form.</span> <span
  m="217340">So,</span> <span m="217880">this</span> <span m="218120">is</span>
  <span m="218300">a</span> <span m="218360">key</span> <span
  m="218600">point</span> <span m="218930">about</span> <span
  m="219170">these</span> <span m="219440">matrices,</span> <span
  m="220490">C.</span> <span m="221810">That</span> <span
  m="221990">they're</span> <span m="222380">defined</span> <span
  m="223010">by</span> <span m="223340">not</span> <span m="223730">n</span>
  <span m="223970">squared</span> <span m="225590">entries,</span> <span
  m="227240">only</span> <span m="227630">n.</span></p><p><span
  m="228050">If</span> <span m="228200">you</span> <span m="228350">tell</span>
  <span m="228590">me</span> <span m="228770">just</span> <span
  m="229220">the</span> <span m="229340">first</span> <span
  m="230270">row</span> <span m="230900">of</span> <span m="231020">the</span>
  <span m="231110">matrix,</span> <span m="231970">and</span> <span
  m="232070">that's</span> <span m="232370">all</span> <span
  m="232580">you</span> <span m="232730">would</span> <span
  m="232910">tell</span> <span m="233180">Matlab,</span> <span
  m="234230">say,</span> <span m="234560">c0,</span> <span m="235820">c1,</span>
  <span m="236810">c2</span> <span m="237160">to</span> <span
  m="238310">c</span> <span m="238760">N</span> <span m="239060">minus</span>
  <span m="239480">1.</span> <span m="241208">Then</span> <span
  m="241640">for</span> <span m="241850">a</span> <span
  m="241910">circulant,</span> <span m="242540">that's</span> <span
  m="242810">all</span> <span m="243080">I</span> <span m="243200">need</span>
  <span m="243470">to</span> <span m="243620">know</span> <span
  m="244070">because</span> <span m="244370">these</span> <span
  m="244670">diagonals</span> <span m="245510">are</span> <span
  m="246020">constant.</span> <span m="247120">This</span> <span
  m="247440">diagonal</span> <span m="248070">is</span> <span
  m="248260">constant--</span> <span m="248870">c1--</span> <span
  m="249590">and</span> <span m="249680">then</span> <span
  m="250010">gets</span> <span m="250370">completed</span> <span
  m="251000">here.</span> <span m="252020">c2</span> <span
  m="252740">diagonal</span> <span m="253400">come</span> <span
  m="254090">to</span> <span m="254240">c2</span> <span m="254990">and</span>
  <span m="255110">then</span> <span m="256010">gets</span> <span
  m="256310">completed</span> <span m="257500">cyclically</span> <span
  m="258290">here.</span></p><p><span m="259459">So,</span> <span
  m="260300">n</span> <span m="260510">numbers</span> <span
  m="261440">and</span> <span m="261560">not</span> <span m="261800">n</span>
  <span m="261980">squared.</span> <span m="264050">The</span> <span
  m="264170">reason</span> <span m="264560">I</span> <span
  m="264650">mention</span> <span m="265130">that,</span> <span
  m="266000">or</span> <span m="266210">a</span> <span m="266420">reason</span>
  <span m="266960">is,</span> <span m="269780">that's</span> <span
  m="270020">a</span> <span m="270080">big</span> <span
  m="270380">selling</span> <span m="270800">point</span> <span
  m="271310">when</span> <span m="271640">you</span> <span m="271760">go</span>
  <span m="272030">to</span> <span m="272210">applications,</span> <span
  m="273460">say</span> <span m="273750">machine</span> <span
  m="274250">learning,</span> <span m="277020">for</span> <span
  m="277210">images.</span> <span m="279010">So,</span> <span
  m="279370">you</span> <span m="279640">remember</span> <span
  m="280000">the</span> <span m="280630">big</span> <span
  m="280930">picture</span> <span m="281410">of</span> <span
  m="281530">machine</span> <span m="282010">learning,</span> <span
  m="285130">deep</span> <span m="285460">learning,</span> <span
  m="286700">was</span> <span m="287090">that</span> <span m="287290">you</span>
  <span m="287440">had</span> <span m="287650">samples.</span> <span
  m="291670">A</span> <span m="291730">lot</span> <span m="292060">of</span>
  <span m="292180">samples,</span> <span m="293860">let's</span> <span
  m="294040">say</span> <span m="294310">N</span> <span
  m="294670">samples,</span> <span m="295360">maybe.</span></p><p><span
  m="297220">And</span> <span m="297580">then</span> <span
  m="297790">each</span> <span m="298090">sample</span> <span
  m="299530">in</span> <span m="299710">this</span> <span
  m="301070">image</span> <span m="301880">part</span> <span
  m="302150">will</span> <span m="302330">be</span> <span m="302480">an</span>
  <span m="302600">image.</span> <span m="303710">So,</span> <span
  m="303890">the</span> <span m="304040">thing</span> <span m="304370">is</span>
  <span m="304610">that</span> <span m="304850">an</span> <span
  m="305030">image</span> <span m="306380">is</span> <span
  m="306650">described</span> <span m="307340">by</span> <span
  m="307820">its</span> <span m="308030">pixels</span> <span
  m="309590">and</span> <span m="309830">if</span> <span m="309980">I</span>
  <span m="310100">have</span> <span m="310310">1,000</span> <span
  m="310850">by</span> <span m="311030">1,000</span> <span
  m="312380">pixel--</span> <span m="313550">so,</span> <span
  m="313730">that's</span> <span m="315030">a</span> <span
  m="315170">million</span> <span m="315710">pixels.</span> <span
  m="318460">The</span> <span m="318620">feature</span> <span
  m="319070">vector,</span> <span m="319480">the</span> <span
  m="319610">vector</span> <span m="320030">that's</span> <span
  m="320300">associated</span> <span m="320930">with</span> <span
  m="321140">1</span> <span m="321500">sample,</span> <span m="322820">is</span>
  <span m="323150">enormous.</span> <span m="324290">Is</span> <span
  m="324500">enormous.</span> <span m="326500">So</span> <span
  m="326820">I</span> <span m="327140">have</span> <span m="327350">N</span>
  <span m="327590">samples</span> <span m="328220">but</span> <span
  m="329560">maybe--</span> <span m="332180">well,</span> <span
  m="332580">if</span> <span m="332740">they</span> <span m="332840">were</span>
  <span m="332960">in</span> <span m="333130">color</span> <span
  m="334340">that</span> <span m="334580">million</span> <span
  m="335150">suddenly</span> <span m="335540">becomes</span> <span
  m="335870">3</span> <span m="336260">million.</span></p><p><span
  m="336740">So</span> <span m="337070">say</span> <span m="337670">3</span>
  <span m="338060">million</span> <span m="340310">features.</span> <span
  m="346020">So,</span> <span m="346230">our</span> <span
  m="346350">vectors</span> <span m="347880">are</span> <span
  m="348060">a</span> <span m="348090">vector</span> <span
  m="348540">of--</span> <span m="350030">the</span> <span
  m="350190">whole</span> <span m="351300">computation</span> <span
  m="352260">of</span> <span m="352800">deep</span> <span
  m="353070">learning</span> <span m="353460">works</span> <span
  m="353850">with</span> <span m="354560">our</span> <span
  m="354840">vectors</span> <span m="355650">with</span> <span
  m="355800">3</span> <span m="356070">million</span> <span
  m="356490">components.</span> <span m="358740">And</span> <span
  m="358860">that</span> <span m="359070">means</span> <span
  m="359400">that</span> <span m="359580">in</span> <span m="359730">the</span>
  <span m="359880">ordinary</span> <span m="360390">way,</span> <span
  m="360840">if</span> <span m="360960">we</span> <span m="361110">didn't</span>
  <span m="361350">do</span> <span m="361530">anything</span> <span
  m="362040">special</span> <span m="363090">we</span> <span
  m="363270">would</span> <span m="363420">be</span> <span
  m="363600">multiplying</span> <span m="364320">those</span> <span
  m="364710">by</span> <span m="364920">matrices</span> <span
  m="365790">of</span> <span m="365940">size</span> <span m="366510">like</span>
  <span m="366870">3</span> <span m="367170">million</span> <span
  m="367590">times</span> <span m="367950">3</span> <span
  m="368190">million.</span></p><p><span m="370380">We</span> <span
  m="370540">would</span> <span m="370690">be</span> <span
  m="370840">computing</span> <span m="371410">that</span> <span
  m="371590">many</span> <span m="371890">weights.</span> <span
  m="372910">That's</span> <span m="373150">like,</span> <span
  m="373750">impossible.</span> <span m="377410">And</span> <span
  m="377800">we</span> <span m="377950">would</span> <span m="378130">be</span>
  <span m="378310">computing</span> <span m="378880">that</span> <span
  m="379210">for</span> <span m="380200">each</span> <span
  m="380860">layer</span> <span m="381430">in</span> <span m="381670">the</span>
  <span m="382360">deep</span> <span m="382600">network</span> <span
  m="383170">so</span> <span m="383410">it</span> <span m="383500">would</span>
  <span m="384160">go</span> <span m="384370">up--</span> <span
  m="389900">so</span> <span m="390160">3</span> <span m="390370">million</span>
  <span m="390700">by</span> <span m="390850">3</span> <span
  m="391090">million</span> <span m="391470">is</span> <span
  m="391600">just--</span> <span m="392230">we</span> <span
  m="392410">can't</span> <span m="392800">compute.</span> <span
  m="394090">We</span> <span m="394240">can't</span> <span m="394600">use</span>
  <span m="394870">gradient</span> <span m="395350">descent</span> <span
  m="395860">to</span> <span m="396070">optimize</span> <span
  m="396980">that</span> <span m="397300">many</span> <span
  m="397630">weights.</span></p><p><span m="399040">So,</span> <span
  m="400270">the</span> <span m="400390">point</span> <span m="400720">is</span>
  <span m="401020">that</span> <span m="401200">the</span> <span
  m="401320">matrices</span> <span m="402340">in</span> <span
  m="403060">deep</span> <span m="403360">learning</span> <span
  m="405190">are</span> <span m="405970">special.</span> <span
  m="407140">And</span> <span m="407290">they</span> <span
  m="407410">don't</span> <span m="407680">depend--</span> <span
  m="408580">they're</span> <span m="409000">like</span> <span
  m="409270">circulant</span> <span m="409780">matrices.</span> <span
  m="411730">They</span> <span m="411880">might</span> <span
  m="412180">not</span> <span m="412450">loop</span> <span
  m="412750">around.</span> <span m="414160">So,</span> <span
  m="414700">circulant</span> <span m="415210">matrices</span> <span
  m="415900">have</span> <span m="416110">this</span> <span
  m="416290">cyclic</span> <span m="416980">feature</span> <span
  m="418060">that</span> <span m="418720">makes</span> <span
  m="419020">the</span> <span m="419140">theory</span> <span
  m="421060">extremely</span> <span m="421720">nice.</span> <span
  m="422560">But</span> <span m="422920">of</span> <span
  m="423070">course,</span> <span m="423940">in</span> <span
  m="424120">general</span> <span m="424600">we</span> <span
  m="424840">have</span> <span m="425590">matrices,</span> <span
  m="429340">let's</span> <span m="429550">say</span> <span
  m="429850">t0--</span> <span m="432670">constant</span> <span
  m="433240">diagonals</span> <span m="435580">and</span> <span
  m="435760">maybe</span> <span m="437040">a</span> <span
  m="437340">bunch</span> <span m="437440">of</span> <span
  m="437560">diagonals.</span> <span m="438310">And</span> <span
  m="438460">here</span> <span m="440140">not</span> <span
  m="440410">necessarily</span> <span m="441280">symmetric,</span> <span
  m="442090">or</span> <span m="442180">they</span> <span
  m="442330">might</span> <span m="442630">be</span> <span
  m="442870">symmetric.</span> <span m="443710">But</span> <span
  m="443890">they're</span> <span m="444040">not</span> <span
  m="444310">cyclic.</span></p><p><span m="445450">So,</span> <span
  m="445780">what</span> <span m="446110">are</span> <span
  m="446200">these</span> <span m="446500">matrices</span> <span
  m="447250">called?</span> <span m="449530">Well,</span> <span
  m="449770">they</span> <span m="449860">have</span> <span m="449980">a</span>
  <span m="450040">bunch</span> <span m="450310">of</span> <span
  m="450370">names</span> <span m="450670">because</span> <span
  m="450880">they're</span> <span m="451030">so</span> <span
  m="451270">important.</span> <span m="452290">They're</span> <span
  m="455020">linear</span> <span m="455500">shift</span> <span
  m="455950">invariant.</span> <span m="457450">Or</span> <span
  m="457600">linear</span> <span m="458140">time</span> <span
  m="458650">invariant,</span> <span m="459220">whatever</span> <span
  m="460450">is</span> <span m="460630">the</span> <span m="460720">right</span>
  <span m="460990">word</span> <span m="461350">in</span> <span
  m="461500">your</span> <span m="462130">context.</span> <span
  m="464620">So,</span> <span m="465040">they're</span> <span
  m="467500">convolutions.</span> <span m="468430">You</span> <span
  m="468580">could</span> <span m="468760">call</span> <span
  m="469060">it</span> <span m="469210">a</span> <span
  m="469270">convolution</span> <span m="470050">matrix.</span></p><p><span
  m="474810">When</span> <span m="474990">you</span> <span
  m="475110">multiply</span> <span m="475890">by</span> <span
  m="476430">one</span> <span m="476670">of</span> <span m="476730">these</span>
  <span m="477030">matrices,</span> <span m="477880">I</span> <span
  m="477900">guess</span> <span m="478140">I'm</span> <span
  m="478290">going</span> <span m="478430">to</span> <span
  m="478530">call</span> <span m="478800">it</span> <span m="478890">t,</span>
  <span m="481440">you're</span> <span m="481590">doing</span> <span
  m="481920">our</span> <span m="482010">convolution.</span> <span
  m="485210">And</span> <span m="485450">I'll</span> <span
  m="485580">better</span> <span m="485880">write</span> <span
  m="486120">down</span> <span m="486330">the</span> <span
  m="486420">formula</span> <span m="486900">for</span> <span
  m="487230">convolution.</span> <span m="489090">You're</span> <span
  m="489300">not</span> <span m="489540">doing</span> <span m="489840">a</span>
  <span m="489900">cyclic</span> <span m="490410">convolution</span> <span
  m="491190">unless</span> <span m="492000">the</span> <span
  m="492150">matrix</span> <span m="492690">cycles</span> <span
  m="493230">round.</span> <span m="494670">When</span> <span
  m="494820">you</span> <span m="494880">multiply</span> <span
  m="495360">by</span> <span m="495570">C,</span> <span m="496470">this</span>
  <span m="497280">would</span> <span m="497520">give</span> <span
  m="497760">you</span> <span m="498120">cyclic</span> <span
  m="500010">convolution.</span></p><p><span m="503920">Say</span> <span
  m="504210">if</span> <span m="504330">I</span> <span
  m="504450">multiply</span> <span m="504990">C</span> <span
  m="505470">by</span> <span m="505680">some</span> <span
  m="505980">vector</span> <span m="506400">v,</span> <span
  m="507300">the</span> <span m="507390">result</span> <span
  m="507960">is</span> <span m="508230">the</span> <span
  m="509040">cyclic</span> <span m="509760">convolution</span> <span
  m="511290">of</span> <span m="512100">the</span> <span m="513000">c</span>
  <span m="513510">vector</span> <span m="514770">with</span> <span
  m="515100">the</span> <span m="515220">v vector.</span> <span
  m="515909">So,</span> <span m="516090">big</span> <span m="516390">C</span>
  <span m="516659">is</span> <span m="516809">a</span> <span
  m="516870">matrix</span> <span m="518190">but</span> <span
  m="518460">it's</span> <span m="518640">completely</span> <span
  m="519270">defined</span> <span m="519750">by</span> <span
  m="519990">its</span> <span m="520559">first</span> <span
  m="520950">row</span> <span m="521370">or</span> <span m="521490">first</span>
  <span m="521850">column.</span> <span m="522659">So</span> <span
  m="524840">I</span> <span m="524940">just</span> <span m="525210">have</span>
  <span m="525360">a</span> <span m="525420">vector</span> <span
  m="525900">operation</span> <span m="526490">in</span> <span
  m="526570">there</span> <span m="527130">and</span> <span
  m="527310">it's</span> <span m="527520">a</span> <span
  m="527580">cyclic</span> <span m="528150">one.</span> <span
  m="528810">And</span> <span m="528990">over</span> <span
  m="529230">here,</span> <span m="530100">t</span> <span
  m="530460">times</span> <span m="530940">a</span> <span
  m="531720">vector</span> <span m="532230">v</span> <span
  m="533160">will</span> <span m="533430">be</span> <span m="534000">the</span>
  <span m="534450">convolution</span> <span m="535350">of</span> <span
  m="535500">a</span> <span m="535560">t</span> <span m="535920">vector</span>
  <span m="537720">with</span> <span m="538290">v,</span> <span
  m="539070">but</span> <span m="539280">not</span> <span
  m="539520">cyclic.</span></p><p><span m="545280">And</span> <span
  m="545460">probably</span> <span m="545910">these</span> <span
  m="546240">are</span> <span m="546330">the</span> <span m="546420">ones</span>
  <span m="546990">that</span> <span m="547200">would</span> <span
  m="547440">actually</span> <span m="547830">come</span> <span
  m="548160">into</span> <span m="548970">machine</span> <span
  m="549480">learning.</span> <span m="550980">So,</span> <span
  m="552570">linear</span> <span m="553140">shift</span> <span
  m="553550">invariant,</span> <span m="554070">linear</span> <span
  m="554460">time</span> <span m="554880">invariant.</span> <span
  m="556620">I</span> <span m="556920">would</span> <span m="557100">call</span>
  <span m="557460">it--</span> <span m="557970">so,</span> <span
  m="558180">math</span> <span m="558570">people</span> <span
  m="558990">would</span> <span m="559200">call</span> <span
  m="559530">it</span> <span m="559620">a</span> <span
  m="559740">Toeplitz</span> <span m="562050">matrix.</span> <span
  m="565650">That's</span> <span m="566220">why</span> <span m="566460">I</span>
  <span m="566580">used</span> <span m="566950">the</span> <span
  m="567050">letter</span> <span m="567390">t.</span> <span m="569840">In</span>
  <span m="570120">engineering</span> <span m="570810">it</span> <span
  m="570900">would</span> <span m="571050">be</span> <span m="571230">a</span>
  <span m="571290">filter</span> <span m="575050">or</span> <span
  m="575310">a</span> <span m="575380">convolution</span> <span
  m="577180">or</span> <span m="577430">a</span> <span
  m="577570">constant</span> <span m="578260">diagonal</span> <span
  m="579790">matrix.</span></p><p><span m="584860">These</span> <span
  m="585110">come</span> <span m="585320">up</span> <span m="585500">in</span>
  <span m="585590">all</span> <span m="586070">sorts</span> <span
  m="586460">of</span> <span m="586880">places</span> <span
  m="587420">and</span> <span m="587690">they</span> <span
  m="587870">come</span> <span m="588140">up</span> <span m="588410">in</span>
  <span m="590270">machine</span> <span m="590720">learning</span> <span
  m="591230">and</span> <span m="591590">with</span> <span
  m="591860">image</span> <span m="592220">processing.</span> <span
  m="595080">But</span> <span m="595310">basically,</span> <span
  m="595910">because</span> <span m="596960">what</span> <span
  m="597200">you're</span> <span m="597320">doing</span> <span
  m="597650">at</span> <span m="597740">one</span> <span m="598040">point</span>
  <span m="598580">in</span> <span m="598790">an</span> <span
  m="598910">image</span> <span m="599270">is</span> <span
  m="599420">pretty</span> <span m="599690">much</span> <span
  m="600380">what</span> <span m="600710">you're</span> <span
  m="600800">going</span> <span m="600920">to</span> <span m="601080">do</span>
  <span m="601260">at</span> <span m="601350">the</span> <span
  m="601520">other</span> <span m="601760">points,</span> <span
  m="602450">you're</span> <span m="602810">not</span> <span
  m="603050">going</span> <span m="603170">to</span> <span
  m="603290">figure</span> <span m="603680">out</span> <span
  m="604310">special</span> <span m="604820">weights</span> <span
  m="605240">for</span> <span m="605450">each</span> <span
  m="605900">little</span> <span m="606470">pixel</span> <span
  m="606950">in</span> <span m="607100">the</span> <span
  m="607250">image.</span></p><p><span m="608100">You're</span> <span
  m="608260">going</span> <span m="608380">to</span> <span
  m="608540">take--</span> <span m="608990">if</span> <span
  m="609140">you</span> <span m="609260">have</span> <span m="609470">an</span>
  <span m="609590">image,</span> <span m="610790">say</span> <span
  m="611120">you</span> <span m="611210">have</span> <span m="611390">an</span>
  <span m="611510">image</span> <span m="611870">with</span> <span
  m="613220">zillions</span> <span m="613790">of</span> <span
  m="613880">pixels.</span> <span m="615350">Well,</span> <span
  m="615560">you</span> <span m="615680">might</span> <span
  m="615950">want</span> <span m="616250">to</span> <span m="618620">cut</span>
  <span m="618860">down.</span> <span m="619340">I</span> <span
  m="619430">mean,</span> <span m="619640">it</span> <span
  m="619800">would</span> <span m="619850">be</span> <span
  m="620360">very</span> <span m="620750">sensible</span> <span
  m="621350">to</span> <span m="621530">do</span> <span m="621830">some</span>
  <span m="622700">max</span> <span m="623180">pooling,</span> <span
  m="625400">some</span> <span m="625640">pooling</span> <span
  m="626330">operation</span> <span m="627800">to</span> <span
  m="629480">make</span> <span m="629780">it</span> <span
  m="629870">smaller.</span></p><p><span m="637220">So,</span> <span
  m="637400">that's</span> <span m="637700">really</span> <span
  m="638060">like,</span> <span m="638930">OK,</span> <span m="639980">we</span>
  <span m="640160">don't</span> <span m="640310">want</span> <span
  m="640550">this</span> <span m="640850">large</span> <span m="641105">a</span>
  <span m="641780">system.</span> <span m="642260">Let's</span> <span
  m="642530">just</span> <span m="642860">reduce</span> <span
  m="643370">it.</span> <span m="643940">So,</span> <span m="644660">max</span>
  <span m="645140">pooling.</span> <span m="646820">That</span> <span
  m="647060">operation</span> <span m="647750">would</span> <span
  m="647990">be--</span> <span m="649100">say,</span> <span
  m="650900">take</span> <span m="651260">them</span> <span m="652220">3</span>
  <span m="652490">at</span> <span m="652580">a</span> <span
  m="652670">time,</span> <span m="653510">some</span> <span m="653810">9</span>
  <span m="654230">pixels.</span> <span m="655640">And</span> <span
  m="655850">replace</span> <span m="656360">that</span> <span
  m="656630">9</span> <span m="657020">pixels</span> <span m="657530">by</span>
  <span m="657740">1</span> <span m="658070">pixel.</span> <span
  m="659130">So</span> <span m="659300">the</span> <span m="659450">max</span>
  <span m="660110">of</span> <span m="660290">those</span> <span
  m="660560">9</span> <span m="660920">numbers.</span> <span
  m="662000">That</span> <span m="662120">would</span> <span
  m="662270">be</span> <span m="662480">a</span> <span m="663050">very</span>
  <span m="663440">simple</span> <span m="663830">operation</span> <span
  m="664400">that</span> <span m="664550">just</span> <span
  m="664970">reduces</span> <span m="665720">the</span> <span
  m="665870">dimension,</span> <span m="667400">make</span> <span
  m="667670">it</span> <span m="667790">smaller.</span> <span
  m="668330">Reduce</span> <span m="668930">the</span> <span
  m="669080">dimension.</span></p><p><span m="676770">OK,</span> <span
  m="677190">so</span> <span m="677430">that's</span> <span m="677640">a</span>
  <span m="677730">cheap</span> <span m="678090">way</span> <span
  m="678300">to</span> <span m="678420">make</span> <span m="679710">an</span>
  <span m="679830">image</span> <span m="681200">4</span> <span
  m="681570">times</span> <span m="682020">or</span> <span m="682110">9</span>
  <span m="682470">times</span> <span m="682920">or</span> <span
  m="683040">64</span> <span m="683730">times</span> <span
  m="684090">smaller.</span> <span m="685170">But</span> <span
  m="687170">the</span> <span m="687450">convolution</span> <span
  m="688200">part</span> <span m="688560">now--</span> <span
  m="689120">so,</span> <span m="689340">that's</span> <span
  m="689640">not</span> <span m="690150">involving</span> <span
  m="690690">convolution.</span> <span m="691500">That's</span> <span
  m="691740">a</span> <span m="691800">different</span> <span
  m="693240">operation</span> <span m="693930">here.</span> <span
  m="695100">Not</span> <span m="695370">even</span> <span
  m="695610">linear</span> <span m="696110">if</span> <span m="696270">I</span>
  <span m="696390">take</span> <span m="696690">the</span> <span
  m="696840">max</span> <span m="697860">in</span> <span m="698070">each</span>
  <span m="699600">box.</span> <span m="700300">That's</span> <span
  m="700590">not</span> <span m="700860">a</span> <span m="700950">linear</span>
  <span m="701370">operation</span> <span m="703140">but</span> <span
  m="703500">it's</span> <span m="703770">a</span> <span m="703830">fast</span>
  <span m="704220">one.</span></p><p><span m="705060">OK,</span> <span
  m="705540">so</span> <span m="706140">where</span> <span m="706560">do</span>
  <span m="708590">circulants</span> <span m="709390">or</span> <span
  m="709520">convolution</span> <span m="710480">or</span> <span
  m="710620">Toeplitz</span> <span m="711140">matrices</span> <span
  m="711830">or</span> <span m="711920">filters</span> <span
  m="712610">come</span> <span m="712880">into</span> <span
  m="713210">it?</span> <span m="714500">So,</span> <span m="714740">I'll</span>
  <span m="714950">forget</span> <span m="715310">about</span> <span
  m="715580">the</span> <span m="715670">max</span> <span
  m="716030">pooling.</span> <span m="716510">Suppose</span> <span
  m="716990">that's</span> <span m="717260">happened</span> <span
  m="717810">and</span> <span m="717830">I</span> <span m="718550">still</span>
  <span m="718910">have</span> <span m="719120">a</span> <span
  m="719180">very</span> <span m="719540">big</span> <span
  m="719840">system</span> <span m="722150">with</span> <span
  m="723230">n</span> <span m="723470">squared</span> <span
  m="726410">pixels,</span> <span m="727880">n</span> <span
  m="728030">squared</span> <span m="728420">features</span> <span
  m="730100">for</span> <span m="730280">each</span> <span
  m="730490">sample.</span> <span m="732920">So,</span> <span
  m="733070">I</span> <span m="733190">want</span> <span m="733400">to</span>
  <span m="733460">operate</span> <span m="734000">on</span> <span
  m="734150">that</span> <span m="734900">by</span> <span
  m="736100">matrices,</span> <span m="736910">as</span> <span
  m="737060">usual.</span> <span m="737700">I</span> <span
  m="737720">want</span> <span m="737900">to</span> <span
  m="737990">choose</span> <span m="738440">the</span> <span
  m="738560">weights</span> <span m="740120">to</span> <span
  m="741740">bring</span> <span m="742100">out</span> <span
  m="742370">the</span> <span m="743030">important</span> <span
  m="743570">points.</span></p><p><span m="744200">So,</span> <span
  m="744410">the</span> <span m="744650">whole</span> <span
  m="745040">idea</span> <span m="745430">is--</span> <span m="746720">on</span>
  <span m="746930">a</span> <span m="747530">image</span> <span
  m="747890">like</span> <span m="748160">that</span> <span
  m="749330">I'll</span> <span m="749660">use</span> <span m="750050">a</span>
  <span m="751430">convolution.</span> <span m="755420">The</span> <span
  m="755600">same</span> <span m="756080">operation</span> <span
  m="757340">is</span> <span m="757550">happening</span> <span
  m="758210">at</span> <span m="758570">each</span> <span
  m="758900">point.</span> <span m="760010">So,</span> <span
  m="760280">forget</span> <span m="760670">the</span> <span
  m="760790">max</span> <span m="761210">part.</span> <span
  m="761510">Let</span> <span m="761690">me</span> <span
  m="761870">erase,</span> <span m="763160">if</span> <span m="763250">I</span>
  <span m="763370">can</span> <span m="763610">find</span> <span
  m="764360">an</span> <span m="764440">eraser</span> <span
  m="764860">here.</span> <span m="765430">OK,</span> <span m="765930">so</span>
  <span m="767000">I'm</span> <span m="767240">not</span> <span
  m="767570">going</span> <span m="767730">to--</span> <span
  m="769200">we've</span> <span m="769370">done</span> <span
  m="769640">this.</span> <span m="769970">So,</span> <span
  m="770390">that's</span> <span m="770720">done.</span></p><p><span
  m="771890">Now,</span> <span m="772310">I</span> <span m="772460">want</span>
  <span m="772760">to</span> <span m="774110">multiply</span> <span
  m="774710">it</span> <span m="774770">by</span> <span
  m="774980">weights.</span> <span m="776090">So,</span> <span
  m="776330">that's</span> <span m="776660">already</span> <span
  m="776990">done.</span> <span m="779710">OK.</span> <span
  m="782410">So,</span> <span m="782590">what</span> <span m="782770">am</span>
  <span m="782890">I</span> <span m="783010">looking</span> <span
  m="783430">to</span> <span m="783550">do?</span> <span m="787000">What</span>
  <span m="787360">kind</span> <span m="787660">of</span> <span
  m="787930">a</span> <span m="788110">job</span> <span m="788530">would</span>
  <span m="788660">a</span> <span m="788740">filter</span> <span
  m="789220">do?</span></p><p><span m="791650">A</span> <span
  m="791710">low-pass</span> <span m="792430">filter</span> <span
  m="794260">would</span> <span m="795130">kill,</span> <span
  m="795880">or</span> <span m="796150">nearly</span> <span
  m="796630">kill,</span> <span m="797290">the</span> <span
  m="797560">high</span> <span m="797860">frequencies,</span> <span
  m="799830">the</span> <span m="799990">noise.</span> <span
  m="801160">So,</span> <span m="801340">if</span> <span m="801490">I</span>
  <span m="801610">wanted</span> <span m="801970">to</span> <span
  m="804850">get</span> <span m="806260">a</span> <span
  m="806320">simpler</span> <span m="806830">image</span> <span
  m="807190">there,</span> <span m="808060">I</span> <span
  m="808150">would</span> <span m="808360">use</span> <span m="808780">a</span>
  <span m="809050">low-pass</span> <span m="809710">filter,</span> <span
  m="810460">which</span> <span m="810700">might</span> <span
  m="811030">just--</span> <span m="812010">it</span> <span
  m="812140">might</span> <span m="812440">be</span> <span
  m="812770">this</span> <span m="817330">filter</span> <span
  m="817780">here.</span> <span m="819550">Let</span> <span m="819670">me</span>
  <span m="819790">just</span> <span m="820000">put</span> <span
  m="820240">in</span> <span m="820450">some</span> <span
  m="821200">numbers</span> <span m="821740">that</span> <span
  m="821890">would--</span> <span m="825760">say</span> <span
  m="826240">1/2</span> <span m="826630">and</span> <span
  m="826720">1/2.</span></p><p><span m="830470">So,</span> <span
  m="830680">I'm</span> <span m="830860">averaging</span> <span
  m="831550">each</span> <span m="833050">pixel</span> <span
  m="833470">with</span> <span m="833750">its</span> <span
  m="833950">neighbor</span> <span m="835360">just</span> <span
  m="835690">to</span> <span m="835900">take</span> <span m="836290">out</span>
  <span m="836590">some</span> <span m="836920">of</span> <span
  m="837010">the</span> <span m="837130">high</span> <span
  m="837370">frequencies.</span> <span m="839770">The</span> <span
  m="839860">low</span> <span m="840100">frequencies</span> <span
  m="840850">are</span> <span m="840940">constant.</span> <span
  m="842350">An</span> <span m="842770">all-black</span> <span
  m="843560">image</span> <span m="843910">would</span> <span
  m="844090">come</span> <span m="844330">out</span> <span m="844900">not</span>
  <span m="845140">changed</span> <span m="846460">but</span> <span
  m="847990">a</span> <span m="850450">very</span> <span
  m="850780">highly</span> <span m="851170">speckled</span> <span
  m="851780">image</span> <span m="852130">would</span> <span
  m="852340">get</span> <span m="853420">largely</span> <span
  m="853900">removed</span> <span m="854560">by</span> <span
  m="854800">that</span> <span m="855070">averaging.</span></p><p><span
  m="855700">So,</span> <span m="857270">it's</span> <span m="857650">the</span>
  <span m="857740">same</span> <span m="858130">idea</span> <span
  m="858520">that</span> <span m="858700">comes</span> <span
  m="859090">up</span> <span m="859330">in</span> <span m="859870">all</span>
  <span m="860230">of</span> <span m="862420">signal</span> <span
  m="862810">processing,</span> <span m="863500">filtering.</span> <span
  m="864400">So,</span> <span m="866860">just</span> <span m="867130">to</span>
  <span m="867250">complete</span> <span m="867760">this</span> <span
  m="868060">thought</span> <span m="870490">of,</span> <span
  m="874060">why</span> <span m="874360">do</span> <span
  m="874540">neural</span> <span m="874930">nets--</span> <span
  m="875410">so,</span> <span m="875980">I'm</span> <span
  m="876160">answering</span> <span m="879480">this</span> <span
  m="879780">question.</span> <span m="881250">How</span> <span
  m="881460">do</span> <span m="881580">they</span> <span m="881730">come</span>
  <span m="882030">in</span> <span m="882150">machine</span> <span
  m="882600">learning?</span></p><p><span m="883710">So,</span> <span
  m="883890">they</span> <span m="884040">come</span> <span
  m="884940">when</span> <span m="885270">the</span> <span
  m="886410">samples</span> <span m="886980">are</span> <span
  m="887130">images</span> <span m="888810">and</span> <span
  m="889860">then</span> <span m="890310">it's</span> <span
  m="890580">natural</span> <span m="891330">to</span> <span
  m="891600">use</span> <span m="893890">a</span> <span
  m="894000">constant</span> <span m="894540">diagonal</span> <span
  m="895200">matrix,</span> <span m="895920">a</span> <span
  m="896310">shift</span> <span m="896740">invariant</span> <span
  m="897270">matrix</span> <span m="898290">and</span> <span
  m="898410">not</span> <span m="898950">an</span> <span
  m="899130">arbitrary</span> <span m="899850">matrix.</span> <span
  m="900930">So,</span> <span m="902250">we</span> <span m="902670">only</span>
  <span m="902910">have</span> <span m="903120">to</span> <span
  m="903240">compute</span> <span m="905220">n</span> <span
  m="905520">weights</span> <span m="906060">and</span> <span
  m="906150">not</span> <span m="906390">n</span> <span
  m="906600">squared.</span> <span m="908300">Yeah,</span> <span
  m="908610">so</span> <span m="908880">that's</span> <span
  m="909210">the</span> <span m="909300">point.</span> <span
  m="910470">So,</span> <span m="910650">that's</span> <span
  m="911070">one</span> <span m="911520">reason</span> <span
  m="912900">for</span> <span m="913260">talking</span> <span
  m="913710">about</span> <span m="917130">convolution</span> <span
  m="918090">and</span> <span m="918210">circulant</span> <span
  m="918730">matrices</span> <span m="919980">in</span> <span
  m="920220">this</span> <span m="920760">course.</span></p><p><span
  m="922620">I</span> <span m="922710">guess</span> <span m="923010">I</span>
  <span m="923190">feel</span> <span m="923520">another</span> <span
  m="923880">reason</span> <span m="924360">is</span> <span
  m="925560">that</span> <span m="926280">everything</span> <span
  m="926940">to</span> <span m="927060">do</span> <span m="927270">with</span>
  <span m="928500">the</span> <span m="928620">DFT,</span> <span
  m="931180">with</span> <span m="931550">Fourier</span> <span
  m="931820">and</span> <span m="932370">Fourier</span> <span
  m="932850">transforms</span> <span m="933690">and</span> <span
  m="933810">Fourier</span> <span m="934170">matrices,</span> <span
  m="935490">that's</span> <span m="935760">just</span> <span
  m="936570">stuff</span> <span m="937170">you</span> <span
  m="937590">gotta</span> <span m="937890">know.</span> <span
  m="939600">Every</span> <span m="939960">time</span> <span
  m="942510">you're</span> <span m="942720">dealing</span> <span
  m="943080">with</span> <span m="943260">vectors</span> <span
  m="945600">where</span> <span m="945960">shifting</span> <span
  m="946590">the</span> <span m="946710">vectors</span> <span
  m="947340">comes</span> <span m="947700">into</span> <span
  m="948060">it,</span> <span m="948680">that's--</span> <span
  m="949230">Fourier</span> <span m="949800">is</span> <span
  m="949930">going</span> <span m="950050">to</span> <span
  m="950190">come</span> <span m="950430">in.</span></p><p><span
  m="951510">So,</span> <span m="951750">it's</span> <span
  m="951930">just</span> <span m="952200">we</span> <span
  m="952410">should</span> <span m="952650">see</span> <span
  m="952980">Fourier.</span> <span m="954120">OK.</span> <span
  m="954900">So</span> <span m="955140">now</span> <span m="955650">I'll</span>
  <span m="956130">go</span> <span m="957510">back</span> <span
  m="957840">to</span> <span m="957990">this</span> <span
  m="962230">specially</span> <span m="962760">nice</span> <span
  m="963180">case</span> <span m="964260">where</span> <span
  m="966540">the</span> <span m="969360">matrix</span> <span
  m="970020">loops</span> <span m="970470">around.</span> <span
  m="971010">Where</span> <span m="971190">I</span> <span m="971280">have</span>
  <span m="971490">this</span> <span m="971690">cyclic</span> <span
  m="972330">convolution.</span> <span m="974100">So,</span> <span
  m="974370">this</span> <span m="974610">would be</span> <span
  m="976320">cyclic</span> <span m="978450">because</span> <span
  m="978960">of</span> <span m="979140">the</span> <span
  m="979680">looping</span> <span m="980100">around</span> <span
  m="982560">stuff.</span></p><p><span m="986340">So,</span> <span
  m="986580">what</span> <span m="986790">was</span> <span m="987000">the</span>
  <span m="987120">point</span> <span m="987480">of</span> <span
  m="987600">last</span> <span m="987930">time?</span> <span m="989910">I</span>
  <span m="990030">started</span> <span m="990480">with</span> <span
  m="990690">this</span> <span m="990960">permutation</span> <span
  m="991860">matrix.</span> <span m="995430">And</span> <span
  m="995540">the</span> <span m="995630">permutation</span> <span
  m="996440">matrix</span> <span m="996980">has</span> <span
  m="997190">c0</span> <span m="998030">equals</span> <span m="998360">0,</span>
  <span m="999870">c1</span> <span m="1000580">equal</span> <span
  m="1000960">1,</span> <span m="1003340">and</span> <span
  m="1003490">the</span> <span m="1003610">rest</span> <span
  m="1003940">of</span> <span m="1004000">the</span> <span
  m="1004150">c's</span> <span m="1004520">are</span> <span
  m="1004700">0.</span> <span m="1006820">So,</span> <span
  m="1007070">it's</span> <span m="1007300">just</span> <span
  m="1009310">the</span> <span m="1009430">effect</span> <span
  m="1009850">of</span> <span m="1009910">multiplying</span> <span
  m="1010630">by</span> <span m="1010900">this--</span> <span
  m="1013920">get</span> <span m="1014150">a</span> <span m="1014260">box</span>
  <span m="1014800">around</span> <span m="1015190">it</span> <span
  m="1015310">here--</span> <span m="1016210">the</span> <span
  m="1016300">effect</span> <span m="1016690">of</span> <span
  m="1016810">multiplying</span> <span m="1017440">by</span> <span
  m="1017680">this</span> <span m="1018010">permutation</span> <span
  m="1018850">matrix</span> <span m="1019390">is</span> <span
  m="1019690">to</span> <span m="1020170">shift</span> <span
  m="1020590">everything</span> <span m="1021190">and</span> <span
  m="1021280">then</span> <span m="1021520">bring</span> <span
  m="1021820">the</span> <span m="1022600">last</span> <span
  m="1022990">one</span> <span m="1023200">up</span> <span m="1023380">to</span>
  <span m="1023560">the</span> <span m="1023740">top.</span> <span
  m="1025250">So,</span> <span m="1025390">it's</span> <span
  m="1025839">a</span> <span m="1025910">cyclic</span> <span
  m="1026530">shift.</span></p><p><span m="1031910">And</span> <span
  m="1034300">I</span> <span m="1034390">guess</span> <span
  m="1034750">at</span> <span m="1034869">the</span> <span
  m="1034990">very</span> <span m="1035349">end</span> <span
  m="1035560">of</span> <span m="1035710">last</span> <span
  m="1035950">time</span> <span m="1036250">I</span> <span
  m="1036339">was</span> <span m="1037089">asking</span> <span
  m="1037569">about</span> <span m="1037900">its</span> <span
  m="1038109">eigenvalues</span> <span m="1038950">and</span> <span
  m="1039099">its</span> <span m="1039200">eigenvectors,</span> <span
  m="1039849">so</span> <span m="1040089">can</span> <span m="1040300">we</span>
  <span m="1040420">come</span> <span m="1040690">to</span> <span
  m="1040780">that</span> <span m="1041020">question?</span> <span
  m="1041599">So,</span> <span m="1041650">that's</span> <span
  m="1042470">the</span> <span m="1042579">starting</span> <span
  m="1043150">question</span> <span m="1043660">for</span> <span
  m="1043900">everything</span> <span m="1044380">here.</span> <span
  m="1045640">I</span> <span m="1045730">guess</span> <span
  m="1045970">we've</span> <span m="1046180">understood</span> <span
  m="1046750">that</span> <span m="1047770">to</span> <span
  m="1049810">get</span> <span m="1050050">deeper</span> <span
  m="1050500">into</span> <span m="1050740">a</span> <span
  m="1050800">matrix,</span> <span m="1053100">its</span> <span
  m="1053350">eigenvalues,</span> <span m="1054390">eigenvectors,</span> <span
  m="1055180">or</span> <span m="1055390">singular</span> <span
  m="1055930">value,</span> <span m="1056410">singular</span> <span
  m="1056920">vectors,</span> <span m="1057520">are</span> <span
  m="1057730">the</span> <span m="1058810">way</span> <span
  m="1059020">to</span> <span m="1059140">go.</span> <span
  m="1060880">Actually,</span> <span m="1061360">what</span> <span
  m="1061660">would</span> <span m="1061840">be</span> <span
  m="1062050">the</span> <span m="1062230">singular</span> <span
  m="1062800">values</span> <span m="1063850">of</span> <span
  m="1064030">that</span> <span m="1064270">matrix?</span></p><p><span
  m="1070080">Let's</span> <span m="1071120">just</span> <span
  m="1071450">think</span> <span m="1071780">about</span> <span
  m="1072080">singular</span> <span m="1072530">values</span> <span
  m="1073070">and</span> <span m="1073190">then</span> <span
  m="1073400">we'll</span> <span m="1073700">see</span> <span
  m="1074870">why</span> <span m="1075110">it's</span> <span
  m="1075350">eigenvalues</span> <span m="1076130">we</span> <span
  m="1076280">want.</span> <span m="1077650">What</span> <span
  m="1077870">are</span> <span m="1077930">the</span> <span
  m="1078050">singular</span> <span m="1078590">values</span> <span
  m="1079160">of</span> <span m="1079340">a</span> <span
  m="1079730">permutation</span> <span m="1080570">matrix?</span> <span
  m="1082100">They're</span> <span m="1082340">all</span> <span
  m="1084150">1.</span> <span m="1084960">All</span> <span m="1085290">1.</span>
  <span m="1086190">That</span> <span m="1086400">matrix</span> <span
  m="1087060">is</span> <span m="1087360">a</span> <span
  m="1087810">orthogonal</span> <span m="1088440">matrix,</span> <span
  m="1090200">so</span> <span m="1090500">the</span> <span
  m="1093170">SVD</span> <span m="1094040">of</span> <span
  m="1094160">the</span> <span m="1094280">matrix</span> <span
  m="1094940">just</span> <span m="1095300">has</span> <span
  m="1097120">the</span> <span m="1097310">permutation</span> <span
  m="1098270">and</span> <span m="1098390">then</span> <span
  m="1098600">the</span> <span m="1098750">identity</span> <span
  m="1099560">is</span> <span m="1099740">there</span> <span
  m="1100130">for</span> <span m="1100790">the</span> <span
  m="1100940">sigma.</span> <span m="1101660">So,</span> <span
  m="1101930">sigma</span> <span m="1102410">is</span> <span
  m="1102620">I</span> <span m="1103940">for</span> <span
  m="1104180">this</span> <span m="1104960">for</span> <span
  m="1105140">this</span> <span m="1105410">matrix.</span></p><p><span
  m="1111320">So,</span> <span m="1111530">the</span> <span
  m="1111650">singular</span> <span m="1112130">values</span> <span
  m="1113000">don't--</span> <span m="1116140">that's</span> <span
  m="1116480">because</span> <span m="1116890">P</span> <span
  m="1117140">transpose</span> <span m="1117890">P</span> <span
  m="1118190">is</span> <span m="1118340">the</span> <span
  m="1118490">identity</span> <span m="1119030">matrix.</span> <span
  m="1121980">Any</span> <span m="1123170">time</span> <span
  m="1123530">I</span> <span m="1123680">have--</span> <span
  m="1124280">that's</span> <span m="1124610">an</span> <span
  m="1124760">orthogonal</span> <span m="1125360">matrix,</span> <span
  m="1125990">and</span> <span m="1126380">anytime</span> <span
  m="1126890">P</span> <span m="1127100">transpose</span> <span
  m="1127730">P</span> <span m="1128000">is</span> <span m="1128150">the</span>
  <span m="1128270">identity,</span> <span m="1129580">the</span> <span
  m="1129770">singular</span> <span m="1130310">values</span> <span
  m="1130850">will</span> <span m="1131030">be</span> <span
  m="1131210">the</span> <span m="1131360">eigenvalues</span> <span
  m="1132050">of</span> <span m="1132140">the</span> <span
  m="1132290">identity.</span> <span m="1133020">And</span> <span
  m="1134090">they're</span> <span m="1134300">all</span> <span
  m="1134450">just</span> <span m="1134720">1's.</span> <span
  m="1136010">The</span> <span m="1136190">eigenvalues</span> <span
  m="1137030">of</span> <span m="1137150">P,</span> <span
  m="1137540">that's</span> <span m="1137840">what</span> <span
  m="1137990">we</span> <span m="1138140">want</span> <span
  m="1138350">to</span> <span m="1138410">find,</span> <span
  m="1138860">so</span> <span m="1139070">let's</span> <span
  m="1139400">do</span> <span m="1139610">that.</span></p><p><span
  m="1140380">OK,</span> <span m="1140690">eigenvalues</span> <span
  m="1141470">of</span> <span m="1141560">P.</span> <span m="1145220">So,</span>
  <span m="1145400">one</span> <span m="1145670">way</span> <span
  m="1146030">is</span> <span m="1147170">to</span> <span
  m="1147410">take</span> <span m="1148070">P</span> <span
  m="1148340">minus</span> <span m="1148750">lambda</span> <span
  m="1149150">I.</span> <span m="1153940">That's just</span> <span
  m="1154300">the</span> <span m="1154420">way</span> <span
  m="1154690">we</span> <span m="1154840">teach</span> <span
  m="1155200">in</span> <span m="1155320">18.06</span> <span
  m="1156160">and</span> <span m="1156280">never</span> <span
  m="1156550">use</span> <span m="1156940">again.</span> <span
  m="1158860">So,</span> <span m="1159940">it</span> <span
  m="1160220">puts</span> <span m="1160540">minus</span> <span
  m="1160990">lambda</span> <span m="1161530">on</span> <span
  m="1161800">the</span> <span m="1162130">diagonal,</span> <span
  m="1163450">and</span> <span m="1163690">of</span> <span
  m="1163810">course</span> <span m="1164170">P</span> <span
  m="1164590">is</span> <span m="1164700">sitting</span> <span
  m="1165100">up</span> <span m="1165280">here.</span> <span
  m="1166480">And</span> <span m="1166720">then</span> <span
  m="1168550">the</span> <span m="1168610">rest</span> <span
  m="1169030">is</span> <span m="1169630">0.</span></p><p><span
  m="1171100">OK,</span> <span m="1171520">so</span> <span
  m="1171820">now</span> <span m="1173710">following</span> <span
  m="1174250">the</span> <span m="1174430">18.06</span> <span
  m="1175420">rule,</span> <span m="1175930">I</span> <span
  m="1176110">should</span> <span m="1176860">take</span> <span
  m="1177160">that</span> <span m="1177400">determinant,</span> <span
  m="1178090">right?</span> <span m="1179350">And</span> <span
  m="1180610">set</span> <span m="1180940">it</span> <span m="1181030">to</span>
  <span m="1181180">0.</span> <span m="1182870">This</span> <span
  m="1183100">is</span> <span m="1183310">one</span> <span m="1183520">of</span>
  <span m="1183580">the</span> <span m="1183700">very</span> <span
  m="1184090">few</span> <span m="1184450">occasions</span> <span
  m="1185020">we</span> <span m="1185170">can</span> <span
  m="1185350">actually</span> <span m="1185770">do</span> <span
  m="1186040">it,</span> <span m="1186250">so</span> <span
  m="1186490">allow</span> <span m="1186790">me</span> <span
  m="1186940">to</span> <span m="1187330">do</span> <span m="1187570">it.</span>
  <span m="1189220">So,</span> <span m="1189610">what</span> <span
  m="1189910">is</span> <span m="1190120">the</span> <span
  m="1190270">determinant</span> <span m="1190960">of</span> <span
  m="1191110">this?</span> <span m="1191440">Well,</span> <span
  m="1194320">there's</span> <span m="1194590">that</span> <span
  m="1194770">lambda</span> <span m="1195040">to</span> <span
  m="1195310">the</span> <span m="1195400">fourth,</span> <span
  m="1198800">and</span> <span m="1200750">I</span> <span
  m="1200870">guess</span> <span m="1201200">I</span> <span
  m="1201350">think</span> <span m="1201740">it's</span> <span
  m="1201950">lambda</span> <span m="1202340">to the</span> <span
  m="1202460">fourth</span> <span m="1202820">minus</span> <span
  m="1203270">1.</span> <span m="1204485">I</span> <span
  m="1204890">think</span> <span m="1205130">that's</span> <span
  m="1205460">the</span> <span m="1205550">right</span> <span
  m="1205850">determinant.</span></p><p><span m="1208670">That</span> <span
  m="1208940">certainly</span> <span m="1209390">has</span> <span
  m="1212700">property--</span> <span m="1213290">so,</span> <span
  m="1213500">I</span> <span m="1213620">would</span> <span
  m="1213800">set</span> <span m="1214070">that</span> <span
  m="1214280">to</span> <span m="1214400">0,</span> <span
  m="1215590">then</span> <span m="1215960">I</span> <span
  m="1216080">would</span> <span m="1216290">find</span> <span
  m="1216800">that</span> <span m="1217010">the</span> <span
  m="1219950">eigenvalues</span> <span m="1220850">for</span> <span
  m="1221030">that</span> <span m="1221360">will</span> <span
  m="1221600">be</span> <span m="1221990">1</span> <span m="1223070">and</span>
  <span m="1223220">minus</span> <span m="1223700">1,</span> <span
  m="1224870">and</span> <span m="1225320">I</span> <span m="1225950">and</span>
  <span m="1226310">minus</span> <span m="1226820">I.</span> <span
  m="1227780">And</span> <span m="1227960">they're</span> <span
  m="1235570">the</span> <span m="1236050">fourth</span> <span
  m="1236470">roots</span> <span m="1236860">of</span> <span
  m="1237010">1.</span> <span m="1237610">Lambda</span> <span
  m="1237875">to</span> <span m="1238140">the</span> <span
  m="1238250">fourth</span> <span m="1238600">equal</span> <span
  m="1238900">1.</span> <span m="1242410">That's</span> <span
  m="1242680">our</span> <span m="1242830">eigenvalue</span> <span
  m="1243580">equation.</span> <span m="1244390">Lambda to</span> <span
  m="1244780">the</span> <span m="1244930">fourth</span> <span
  m="1245230">equal</span> <span m="1245560">1</span> <span
  m="1246280">or</span> <span m="1246430">lambda</span> <span
  m="1246880">to</span> <span m="1247060">the</span> <span
  m="1247210">n-th</span> <span m="1247560">equal</span> <span
  m="1247930">1.</span></p><p><span m="1248840">So,</span> <span
  m="1248920">what</span> <span m="1249220">would</span> <span
  m="1249430">be</span> <span m="1249730">the</span> <span
  m="1250390">eigenvalues</span> <span m="1251320">for</span> <span
  m="1252330">the</span> <span m="1252900">P</span> <span m="1253780">8</span>
  <span m="1254020">by</span> <span m="1254260">8?</span> <span
  m="1260420">This</span> <span m="1260630">is</span> <span
  m="1260890">the</span> <span m="1261010">complex</span> <span
  m="1261610">plane,</span> <span m="1262000">of</span> <span
  m="1262090">course.</span> <span m="1263320">Real</span> <span
  m="1264790">and</span> <span m="1265390">imaginary.</span> <span
  m="1268120">So,</span> <span m="1268330">that's</span> <span
  m="1268570">got</span> <span m="1268810">8</span> <span
  m="1269080">eigenvalues.</span></p><p><span m="1272520">P</span> <span
  m="1273170">to</span> <span m="1273390">the</span> <span
  m="1273550">eighth</span> <span m="1273880">power</span> <span
  m="1274240">would</span> <span m="1274450">be</span> <span
  m="1274660">the</span> <span m="1274810">identity.</span> <span
  m="1277420">And</span> <span m="1277570">that</span> <span
  m="1277810">means</span> <span m="1278260">that</span> <span
  m="1278440">lambda</span> <span m="1278950">to</span> <span
  m="1279160">the</span> <span m="1279310">eighth</span> <span
  m="1279550">power</span> <span m="1279910">is</span> <span
  m="1280120">1</span> <span m="1281290">for</span> <span m="1281470">the</span>
  <span m="1281590">eigenvalues.</span> <span m="1283000">And</span> <span
  m="1283270">what</span> <span m="1283540">are</span> <span
  m="1283660">the</span> <span m="1283900">8</span> <span
  m="1285310">solutions?</span> <span m="1285970">Every</span> <span
  m="1287050">polynomial</span> <span m="1288130">equation</span> <span
  m="1288700">of</span> <span m="1288790">degree</span> <span
  m="1289240">8</span> <span m="1289480">has</span> <span m="1289620">got</span>
  <span m="1289770">to</span> <span m="1289870">have</span> <span
  m="1290050">8</span> <span m="1290410">solutions.</span> <span
  m="1292160">That's</span> <span m="1292520">Gauss's</span> <span
  m="1294200">fundamental</span> <span m="1295370">theorem</span> <span
  m="1295760">of</span> <span m="1295910">algebra.</span></p><p><span
  m="1297510">8</span> <span m="1297770">solutions,</span> <span
  m="1298055">so</span> <span m="1298340">what</span> <span m="1298550">are
  they?</span> <span m="1300158">What</span> <span m="1300560">are</span> <span
  m="1300650">the</span> <span m="1300860">8</span> <span
  m="1301220">numbers</span> <span m="1302610">whose</span> <span
  m="1303450">eighth</span> <span m="1303860">power</span> <span
  m="1304370">gives</span> <span m="1305180">1?</span> <span
  m="1308630">You</span> <span m="1308940">all</span> <span
  m="1309150">probably</span> <span m="1309570">know</span> <span
  m="1309810">them.</span> <span m="1311430">So,</span> <span
  m="1311700">they're</span> <span m="1312060">1,</span> <span
  m="1312690">of</span> <span m="1312810">course</span> <span
  m="1313080">the</span> <span m="1313200">eighth</span> <span
  m="1313470">power</span> <span m="1313800">of</span> <span
  m="1313890">1,</span> <span m="1314460">the</span> <span
  m="1314880">eighth</span> <span m="1315120">power of</span> <span
  m="1315480">minus</span> <span m="1315960">1,</span> <span
  m="1316245">the</span> <span m="1316530">eighth</span> <span m="1316800">power
  of</span> <span m="1317190">minus</span> <span m="1317700">I,</span> <span
  m="1318420">and</span> <span m="1318570">the</span> <span
  m="1318720">other</span> <span m="1318930">guys</span> <span
  m="1319380">are</span> <span m="1319470">just</span> <span
  m="1319860">here.</span></p><p><span m="1323820">The</span> <span
  m="1323940">roots</span> <span m="1324300">of</span> <span
  m="1324420">1</span> <span m="1324780">are</span> <span
  m="1325650">equally</span> <span m="1326100">spaced</span> <span
  m="1326610">around</span> <span m="1326910">the</span> <span
  m="1327000">circle.</span> <span m="1327780">So,</span> <span
  m="1327980">Fourier</span> <span m="1328480">has</span> <span
  m="1328630">come</span> <span m="1328880">in.</span> <span m="1329060">You
  know,</span> <span m="1329390">Fourier</span> <span m="1329790">wakes</span>
  <span m="1330180">up</span> <span m="1330840">when</span> <span
  m="1330990">he</span> <span m="1331110">sees</span> <span
  m="1331500">that</span> <span m="1332430">picture.</span> <span
  m="1333710">Fourier</span> <span m="1334130">is</span> <span
  m="1334440">going</span> <span m="1334590">to</span> <span
  m="1334680">be</span> <span m="1334890">here</span> <span
  m="1336150">and</span> <span m="1336930">it'll</span> <span
  m="1337170">be</span> <span m="1337380">in</span> <span m="1337500">the</span>
  <span m="1337650">eigenvectors.</span> <span m="1339030">So,</span> <span
  m="1340560">you're</span> <span m="1340790">OK</span> <span
  m="1341120">with</span> <span m="1341270">the</span> <span
  m="1341390">eigenvalues?</span></p><p><span m="1343030">The</span> <span
  m="1343160">eigenvalues</span> <span m="1343850">of</span> <span
  m="1343940">P</span> <span m="1344360">will</span> <span
  m="1344600">be--</span> <span m="1347660">we</span> <span
  m="1347790">better</span> <span m="1348020">give</span> <span
  m="1348230">a</span> <span m="1348290">name</span> <span m="1348650">to</span>
  <span m="1348830">this</span> <span m="1349130">number.</span> <span
  m="1351470">Let's</span> <span m="1351650">see.</span> <span
  m="1352090">I'm</span> <span m="1352260">going</span> <span
  m="1352380">to</span> <span m="1352490">call</span> <span
  m="1352820">that</span> <span m="1353030">number</span> <span
  m="1353430">w</span> <span m="1355100">and</span> <span m="1355290">it</span>
  <span m="1355440">will</span> <span m="1355550">be</span> <span
  m="1356240">e</span> <span m="1356495">to</span> <span m="1356810">the</span>
  <span m="1356990">2</span> <span m="1357350">pi</span> <span
  m="1358100">i</span> <span m="1358820">over</span> <span m="1359330">8,</span>
  <span m="1360770">right?</span> <span m="1361070">Because</span> <span
  m="1365320">the</span> <span m="1365480">whole</span> <span
  m="1365700">angle</span> <span m="1366060">is</span> <span
  m="1366250">2</span> <span m="1366530">pi</span> <span
  m="1367610">divided</span> <span m="1368570">in</span> <span
  m="1368840">8</span> <span m="1369050">pieces.</span> <span
  m="1369590">So</span> <span m="1370490">that's</span> <span
  m="1370820">2</span> <span m="1371030">pi</span> <span m="1371430">i</span>
  <span m="1371630">over</span> <span m="1371930">8.</span> <span
  m="1372650">2</span> <span m="1372860">pi</span> <span m="1373240">i</span>
  <span m="1373430">over</span> <span m="1373880">N</span> <span
  m="1374780">for</span> <span m="1375020">a</span> <span
  m="1375110">matrix</span> <span m="1375860">of--</span> <span
  m="1377840">for</span> <span m="1378020">the</span> <span m="1378200">n</span>
  <span m="1378380">by</span> <span m="1378620">n</span> <span
  m="1379130">permutation.</span></p><p><span m="1380850">Yeah,</span> <span
  m="1381800">so</span> <span m="1381980">that's</span> <span
  m="1382340">number</span> <span m="1382780">w.</span> <span
  m="1383720">And</span> <span m="1383840">of</span> <span
  m="1383960">course,</span> <span m="1384350">this</span> <span
  m="1384650">guy</span> <span m="1386260">is</span> <span m="1386450">w</span>
  <span m="1386870">squared.</span> <span m="1387920">This</span> <span
  m="1388160">one</span> <span m="1388340">is</span> <span m="1388490">w</span>
  <span m="1388940">cubed,</span> <span m="1389435">w</span> <span
  m="1389930">fourth,</span> <span m="1391040">w</span> <span
  m="1391430">fifth,</span> <span m="1392630">sixth,</span> <span
  m="1394250">seventh,</span> <span m="1395840">and</span> <span
  m="1396140">w</span> <span m="1396410">to the</span> <span
  m="1396680">eighth</span> <span m="1397130">is</span> <span
  m="1397340">the</span> <span m="1397400">same</span> <span
  m="1397850">as</span> <span m="1398030">1.</span> <span
  m="1399491">Right.</span></p><p><span m="1407685">The</span> <span
  m="1407940">reason</span> <span m="1408330">I</span> <span
  m="1408720">put</span> <span m="1408930">those</span> <span
  m="1409200">numbers</span> <span m="1409620">up</span> <span
  m="1409800">there</span> <span m="1410160">is</span> <span
  m="1410340">that</span> <span m="1410430">they</span> <span
  m="1410610">come</span> <span m="1410910">into</span> <span
  m="1411150">the</span> <span m="1411300">eigenvectors</span> <span
  m="1412260">as</span> <span m="1412410">well</span> <span
  m="1412740">as</span> <span m="1412920">the</span> <span
  m="1413070">eigenvalues.</span> <span m="1414120">They</span> <span
  m="1414360">are</span> <span m="1414630">the</span> <span
  m="1414810">eigenvalues,</span> <span m="1416430">these</span> <span
  m="1416820">8</span> <span m="1417060">numbers.</span> <span m="1417570">1,
  2,</span> <span m="1418005">3, 4,</span> <span m="1418440">5,</span> <span
  m="1418875">6,</span> <span m="1419310">7,</span> <span m="1419745">8</span>
  <span m="1421080">are</span> <span m="1421230">the</span> <span
  m="1421440">8</span> <span m="1421680">eigenvalues</span> <span
  m="1422430">of</span> <span m="1422520">the</span> <span
  m="1422640">matrix.</span> <span m="1425220">Here's</span> <span
  m="1425550">the</span> <span m="1426420">4</span> <span m="1426660">by</span>
  <span m="1426870">4</span> <span m="1427170">case.</span> <span
  m="1428160">The</span> <span m="1428250">matrix</span> <span
  m="1428910">is</span> <span m="1429660">an</span> <span
  m="1429750">orthogonal</span> <span m="1430440">matrix.</span></p><p><span
  m="1431340">Oh,</span> <span m="1431970">what</span> <span
  m="1432120">does</span> <span m="1432300">that</span> <span
  m="1432450">tell</span> <span m="1432690">us</span> <span
  m="1432840">about</span> <span m="1433080">the eigenvectors?</span> <span
  m="1434880">The</span> <span m="1435030">eigenvectors</span> <span
  m="1435990">of</span> <span m="1436140">an</span> <span
  m="1436290">orthogonal</span> <span m="1437010">matrix</span> <span
  m="1437760">are</span> <span m="1439960">orthogonal</span> <span
  m="1442010">just</span> <span m="1442400">like</span> <span
  m="1442820">symmetric</span> <span m="1443510">matrices.</span> <span
  m="1445180">So,</span> <span m="1445690">do</span> <span
  m="1445850">you</span> <span m="1445970">know</span> <span
  m="1446210">that</span> <span m="1446420">little</span> <span
  m="1446690">list</span> <span m="1447140">of</span> <span
  m="1448400">matrices</span> <span m="1452820">with</span> <span
  m="1455220">orthogonal</span> <span
  m="1459850">eigenvectors?</span></p><p><span m="1465570">I'm</span> <span
  m="1465750">going</span> <span m="1465860">to</span> <span
  m="1465930">call</span> <span m="1466170">them</span> <span
  m="1466380">q.</span> <span m="1467900">So</span> <span m="1468090">qi</span>
  <span m="1469830">dotted</span> <span m="1470725">qj,</span> <span
  m="1471750">the</span> <span m="1471960">inner</span> <span
  m="1472110">product,</span> <span m="1472650">is</span> <span
  m="1474630">1</span> <span m="1475110">or</span> <span m="1475410">0.</span>
  <span m="1476520">1</span> <span m="1476900">if</span> <span m="1477170">i
  equal</span> <span m="1477620">j,</span> <span m="1478200">0</span> <span
  m="1479130">if</span> <span m="1479310">i</span> <span m="1479510">is</span>
  <span m="1479640">not</span> <span m="1479940">j.</span> <span
  m="1482280">Orthogonal</span> <span m="1482860">eigenvectors.</span> <span
  m="1483660">Now,</span> <span m="1483840">what</span> <span
  m="1484110">matrices</span> <span m="1484770">have</span> <span
  m="1485040">orthogonal</span> <span
  m="1485690">eigenvectors?</span></p><p><span m="1486480">We're</span> <span
  m="1486780">going</span> <span m="1487050">back</span> <span
  m="1487320">to</span> <span m="1488400">linear</span> <span
  m="1488730">algebra</span> <span m="1489120">because</span> <span
  m="1489360">this</span> <span m="1490470">is</span> <span m="1490920">a</span>
  <span m="1491010">fundamental</span> <span m="1492060">fact</span> <span
  m="1492480">to</span> <span m="1492660">know,</span> <span
  m="1493110">this</span> <span m="1494190">family</span> <span
  m="1494790">of</span> <span m="1494970">wonderful</span> <span
  m="1495630">matrices.</span> <span m="1497370">Matrices</span> <span
  m="1498120">with</span> <span m="1498930">orthogonal</span> <span
  m="1499500">eigenvectors.</span> <span m="1500340">Or</span> <span
  m="1500430">tell</span> <span m="1500640">me</span> <span
  m="1500820">one</span> <span m="1501150">bunch</span> <span
  m="1501510">of</span> <span m="1501570">matrices</span> <span
  m="1502770">that</span> <span m="1502960">you know</span> <span
  m="1503296">has</span> <span m="1503970">orthogonal</span> <span
  m="1504630">eigenvectors.</span></p><p><span m="1505470">STUDENT:</span> <span
  m="1505945">Symmetric.</span></p><p><span m="1506420">GILBERT STRANG:</span>
  <span m="1506607">Symmetric.</span> <span m="1512370">And</span> <span
  m="1512540">what</span> <span m="1512780">is</span> <span
  m="1512900">special</span> <span m="1513380">about</span> <span
  m="1513650">the</span> <span m="1513800">eigenvalues?</span> <span
  m="1515150">They're</span> <span m="1515360">real.</span> <span
  m="1517730">But</span> <span m="1517940">there</span> <span
  m="1518120">are</span> <span m="1518180">other</span> <span
  m="1518420">matrices</span> <span m="1521150">that</span> <span
  m="1521330">have</span> <span m="1521720">orthogonal</span> <span
  m="1522410">eigenvectors</span> <span m="1525000">and</span> <span
  m="1525240">we</span> <span m="1525390">really</span> <span
  m="1525720">should</span> <span m="1525960">know</span> <span
  m="1526290">the</span> <span m="1526770">whole</span> <span
  m="1527010">story</span> <span m="1527460">about</span> <span
  m="1527760">those</span> <span m="1528030">guys.</span> <span
  m="1528670">They're</span> <span m="1529050">too</span> <span
  m="1529350">important</span> <span m="1529800">not</span> <span
  m="1530010">to</span> <span m="1530160">know.</span> <span
  m="1531090">So,</span> <span m="1531360">what's</span> <span
  m="1532680">another</span> <span m="1533100">bunch</span> <span
  m="1533400">of</span> <span m="1533460">matrices?</span></p><p><span
  m="1534550">So,</span> <span m="1534660">these</span> <span
  m="1535290">symmetric</span> <span m="1535890">matrices</span> <span
  m="1536580">have</span> <span m="1537480">orthogonal</span> <span
  m="1538130">eigenvectors</span> <span m="1539010">and--</span> <span
  m="1541230">real</span> <span m="1541620">symmetrics</span> <span
  m="1542300">and</span> <span m="1542430">the</span> <span
  m="1542580">eigenvalues</span> <span m="1543270">will</span> <span
  m="1543360">be</span> <span m="1543570">real.</span> <span
  m="1544590">Well,</span> <span m="1546480">what</span> <span
  m="1546690">other</span> <span m="1546900">kind</span> <span
  m="1547140">of</span> <span m="1547230">matrices</span> <span
  m="1547980">have</span> <span m="1548940">orthogonal</span> <span
  m="1549360">eigenvectors?</span> <span m="1551220">But</span> <span
  m="1551500">they</span> <span m="1551730">might</span> <span
  m="1552150">be</span> <span m="1553260">complex</span> <span
  m="1555030">and</span> <span m="1555180">the</span> <span
  m="1555330">eigenvalues</span> <span m="1556200">might</span> <span
  m="1556500">be</span> <span m="1556710">complex.</span></p><p><span
  m="1558240">And</span> <span m="1559620">you</span> <span
  m="1559770">can't</span> <span m="1560480">know</span> <span
  m="1560820">Fourier</span> <span m="1561420">without</span> <span
  m="1562590">saying,</span> <span m="1562920">OK,</span> <span
  m="1563280">I</span> <span m="1563430">can</span> <span
  m="1563640">deal</span> <span m="1563910">with</span> <span
  m="1564120">this</span> <span m="1564810">complex</span> <span
  m="1565110">number.</span> <span m="1567600">OK,</span> <span
  m="1568140">so</span> <span m="1568350">what's</span> <span
  m="1568650">another</span> <span m="1569250">family</span> <span
  m="1569730">of</span> <span m="1569880">matrices</span> <span
  m="1570600">that</span> <span m="1570750">has</span> <span
  m="1571590">orthogonal</span> <span m="1572220">eigenvectors?</span> <span
  m="1574130">Yes.</span></p><p><span m="1574460">STUDENT:</span> <span
  m="1574641">Diagonal</span> <span m="1574823">matrices.</span></p><p><span
  m="1575550">GILBERT STRANG:</span> <span m="1575722">Diagonal</span> <span
  m="1576240">for</span> <span m="1576420">sure,</span> <span
  m="1577470">right?</span> <span m="1579270">And</span> <span
  m="1579450">then</span> <span m="1579930">we</span> <span
  m="1580170">know</span> <span m="1581940">that</span> <span
  m="1582360">we</span> <span m="1584610">have</span> <span
  m="1585420">the</span> <span m="1585570">eigenvectors</span> <span
  m="1589590">go</span> <span m="1589860">into</span> <span
  m="1590520">the</span> <span m="1590640">identity</span> <span
  m="1591210">matrix,</span> <span m="1591750">right.</span> <span
  m="1592710">Yeah,</span> <span m="1592980">so</span> <span
  m="1593160">we</span> <span m="1593280">know</span> <span
  m="1593460">everything</span> <span m="1593880">about</span> <span
  m="1594120">diagonal</span> <span m="1594720">ones.</span> <span
  m="1595740">You</span> <span m="1595890">could</span> <span
  m="1596070">say</span> <span m="1596310">those</span> <span
  m="1596610">are</span> <span m="1596730">included</span> <span
  m="1597300">in</span> <span m="1597450">symmetric.</span> <span
  m="1598070">Now,</span> <span m="1598230">let's</span> <span
  m="1598470">get</span> <span m="1598650">some</span> <span
  m="1598830">new</span> <span m="1599040">ones.</span> <span
  m="1600480">What</span> <span m="1600690">else?</span></p><p><span
  m="1601500">STUDENT:</span> <span m="1601740">[INAUDIBLE]</span></p><p><span
  m="1602940">GILBERT STRANG:</span> <span m="1603120">Orthogonal</span> <span
  m="1603660">matrices</span> <span m="1604380">count.</span> <span
  m="1605580">Orthogonal</span> <span m="1606270">matrices,</span> <span
  m="1608100">like</span> <span m="1608400">permutations</span> <span
  m="1609420">or</span> <span m="1610230">like</span> <span
  m="1610620">rotations</span> <span m="1611760">or</span> <span
  m="1611940">like</span> <span m="1612930">reflections.</span> <span
  m="1614180">Orthogonal</span> <span m="1614730">matrices.</span> <span
  m="1618990">And</span> <span m="1619170">what's</span> <span
  m="1619500">special</span> <span m="1620070">about</span> <span
  m="1620370">their</span> <span m="1620670">eigenvalues?</span> <span
  m="1622970">The</span> <span m="1623340">eigenvalues</span> <span
  m="1624120">of</span> <span m="1624270">an</span> <span
  m="1624420">orthogonal</span> <span m="1625080">matrix?</span></p><p><span
  m="1626684">STUDENT:</span> <span m="1626905">[INAUDIBLE]</span></p><p><span
  m="1628010">GILBERT STRANG:</span> <span m="1628055">The</span> <span
  m="1628100">magnitude</span> <span m="1628760">is</span> <span
  m="1628910">1,</span> <span m="1629250">exactly.</span> <span
  m="1632110">It</span> <span m="1632240">has</span> <span m="1632720">to</span>
  <span m="1632810">be</span> <span m="1632990">1</span> <span
  m="1633380">because</span> <span m="1633840">an</span> <span
  m="1633950">orthogonal</span> <span m="1634580">matrix</span> <span
  m="1635690">doesn't</span> <span m="1636110">change</span> <span
  m="1636590">the</span> <span m="1636710">length</span> <span
  m="1637130">of</span> <span m="1637250">the</span> <span
  m="1637340">vector.</span> <span m="1638420">Q</span> <span
  m="1639080">times</span> <span m="1639560">x</span> <span
  m="1640460">has</span> <span m="1640700">the</span> <span
  m="1640820">same</span> <span m="1641270">length</span> <span
  m="1641690">as</span> <span m="1641900">x</span> <span m="1643150">for</span>
  <span m="1643370">all</span> <span m="1643970">vectors.</span> <span
  m="1646090">And</span> <span m="1646280">in</span> <span
  m="1646370">particular,</span> <span m="1647030">for</span> <span
  m="1647270">eigenvectors.</span></p><p><span m="1649130">So,</span> <span
  m="1649520">if</span> <span m="1649760">this</span> <span
  m="1650000">was</span> <span m="1650240">an</span> <span
  m="1650360">eigenvector,</span> <span m="1651230">Q x</span> <span
  m="1651950">would</span> <span m="1652190">equal</span> <span
  m="1654380">lambda</span> <span m="1654830">x.</span> <span
  m="1656410">And</span> <span m="1656540">now</span> <span
  m="1656730">if</span> <span m="1656810">that</span> <span
  m="1657050">equals</span> <span m="1657440">that,</span> <span
  m="1657710">then</span> <span m="1657920">lambda</span> <span
  m="1658310">has</span> <span m="1658550">to</span> <span m="1658640">be</span>
  <span m="1658850">1.</span> <span m="1659510">The</span> <span
  m="1659630">magnitude</span> <span m="1660320">of</span> <span
  m="1660440">lambda</span> <span m="1660830">has</span> <span
  m="1661070">to</span> <span m="1661160">be</span> <span m="1661340">1.</span>
  <span m="1662010">Of</span> <span m="1662090">course.</span></p><p><span
  m="1664540">Complex</span> <span m="1665050">numbers</span> <span
  m="1665440">are</span> <span m="1665560">expected</span> <span
  m="1666160">here</span> <span m="1666700">and</span> <span
  m="1666910">that's</span> <span m="1667300">exactly</span> <span
  m="1667840">what</span> <span m="1668050">we're</span> <span
  m="1668230">seeing</span> <span m="1669010">here.</span> <span
  m="1669610">All</span> <span m="1669820">the</span> <span
  m="1670000">eigenvalues</span> <span m="1670840">of</span> <span
  m="1672430">permutations</span> <span m="1673480">are</span> <span
  m="1673570">very</span> <span m="1673930">special</span> <span
  m="1674470">orthogonal</span> <span m="1675070">matrices.</span> <span
  m="1676460">I</span> <span m="1676560">won't</span> <span
  m="1676750">add</span> <span m="1676960">permutations</span> <span
  m="1678400">separately</span> <span m="1679060">to</span> <span
  m="1679210">the</span> <span m="1679330">list</span> <span
  m="1679720">but</span> <span m="1679930">they</span> <span
  m="1680140">count.</span></p><p><span m="1687900">The</span> <span
  m="1688050">fact</span> <span m="1688380">that</span> <span
  m="1688500">this</span> <span m="1688860">is</span> <span
  m="1689010">on</span> <span m="1689190">the</span> <span
  m="1689280">list</span> <span m="1690660">tells</span> <span
  m="1691020">us</span> <span m="1691230">that</span> <span
  m="1691350">the</span> <span m="1691500">eigenvectors</span> <span
  m="1692310">that</span> <span m="1692400">we're</span> <span
  m="1692550">going</span> <span m="1692610">to</span> <span
  m="1692760">find</span> <span m="1693150">are</span> <span
  m="1693390">orthogonal.</span> <span m="1694200">We</span> <span
  m="1694620">don't</span> <span m="1694830">have</span> <span
  m="1695040">to</span> <span m="1695250">do</span> <span m="1695490">a</span>
  <span m="1695550">separate</span> <span m="1696060">check</span> <span
  m="1696450">to</span> <span m="1696570">see</span> <span
  m="1696900">that</span> <span m="1697110">they</span> <span
  m="1697320">are</span> <span m="1698070">once</span> <span
  m="1698370">we</span> <span m="1698610">compute</span> <span
  m="1699120">them.</span> <span m="1699930">They</span> <span
  m="1700110">have</span> <span m="1700350">to</span> <span
  m="1700470">be.</span> <span m="1701520">They're</span> <span
  m="1701910">the</span> <span m="1702280">eigenvectors</span> <span
  m="1703020">of an</span> <span m="1703290">orthogonal</span> <span
  m="1703860">matrix.</span></p><p><span m="1704400">Now,</span> <span
  m="1706830">I</span> <span m="1707040">could</span> <span
  m="1707340">ask</span> <span m="1707670">you--</span> <span
  m="1708100">let's</span> <span m="1708390">keep</span> <span
  m="1708630">going</span> <span m="1708930">with</span> <span
  m="1709080">this</span> <span m="1709320">and</span> <span
  m="1709410">get</span> <span m="1709640">the</span> <span
  m="1709740">whole</span> <span m="1710040">list</span> <span
  m="1710490">here.</span> <span m="1712890">Along</span> <span
  m="1713250">with</span> <span m="1713460">symmetric</span> <span
  m="1715050">there</span> <span m="1715130">is</span> <span
  m="1715290">another</span> <span m="1717210">bunch</span> <span
  m="1717570">of</span> <span m="1717690">guys.</span> <span
  m="1718320">Antisymmetric.</span> <span m="1719670">Big</span> <span
  m="1719910">deal,</span> <span m="1720270">but</span> <span
  m="1720780">those</span> <span m="1721050">are</span> <span
  m="1721170">important.</span></p><p><span m="1722070">So,</span> <span
  m="1722340">symmetric</span> <span m="1723060">means</span> <span
  m="1723570">A</span> <span m="1723780">transpose</span> <span
  m="1724500">equals</span> <span m="1724890">A.</span> <span
  m="1726360">Diagonal</span> <span m="1726990">you</span> <span
  m="1727170">know.</span> <span m="1728220">A</span> <span
  m="1728400">transpose</span> <span m="1729420">equals</span> <span
  m="1729900">A</span> <span m="1730110">inverse</span> <span
  m="1731390">for</span> <span m="1731820">orthogonal</span> <span
  m="1732450">matrices.</span></p><p><span m="1734110">Now,</span> <span
  m="1734400">I'm</span> <span m="1734580">going</span> <span
  m="1734760">to</span> <span m="1734850">put</span> <span m="1735180">in</span>
  <span m="1735750">antisymmetric</span> <span m="1736890">matrices</span> <span
  m="1737730">where</span> <span m="1738330">A</span> <span
  m="1738570">transpose</span> <span m="1739440">is</span> <span
  m="1739650">minus</span> <span m="1740310">A.</span> <span
  m="1745660">What</span> <span m="1745810">do</span> <span
  m="1745870">you</span> <span m="1745930">think</span> <span
  m="1746680">you</span> <span m="1746890">know</span> <span
  m="1747190">about</span> <span m="1747580">the</span> <span
  m="1747940">eigenvalues</span> <span m="1748840">for</span> <span
  m="1749650">antisymmetric</span> <span m="1750760">matrices?</span> <span
  m="1754220">Shall</span> <span m="1754400">we</span> <span
  m="1754520">take</span> <span m="1754820">a</span> <span
  m="1755090">example?</span> <span m="1757190">Anti</span> <span
  m="1757610">symmetric</span> <span m="1758180">matrix.</span></p><p><span
  m="1761940">Say</span> <span m="1762500">0,</span> <span m="1762810">0,</span>
  <span m="1763100">1,</span> <span m="1763460">and</span> <span
  m="1763580">minus</span> <span m="1764060">1.</span> <span
  m="1766440">What</span> <span m="1766640">are</span> <span
  m="1766790">the</span> <span m="1767000">eigenvalues</span> <span
  m="1767870">of</span> <span m="1767990">that?</span> <span
  m="1768540">Well,</span> <span m="1769550">if</span> <span
  m="1769730">I</span> <span m="1770060">subtract</span> <span
  m="1770690">lambda</span> <span m="1771200">from</span> <span
  m="1773510">the</span> <span m="1775520">diagonal</span> <span
  m="1776180">and</span> <span m="1776270">take</span> <span
  m="1776630">the</span> <span m="1776670">determinant,</span> <span
  m="1777380">I</span> <span m="1777530">get</span> <span
  m="1778700">lambda</span> <span m="1779180">squared</span> <span
  m="1780290">plus</span> <span m="1780680">1</span> <span
  m="1781460">equals</span> <span m="1781820">0.</span> <span
  m="1783460">So</span> <span m="1783650">lambda</span> <span
  m="1784220">is</span> <span m="1784790">i</span> <span m="1785300">or</span>
  <span m="1785510">minus</span> <span m="1786020">i.</span></p><p><span
  m="1790740">That's</span> <span m="1790950">a</span> <span
  m="1791010">rotation</span> <span m="1791670">matrix.</span> <span
  m="1795380">It's</span> <span m="1795580">a</span> <span
  m="1795640">rotation</span> <span m="1796750">through</span> <span
  m="1797230">90</span> <span m="1797620">degrees.</span> <span
  m="1798070">So</span> <span m="1798280">there</span> <span
  m="1798460">could</span> <span m="1798670">not</span> <span
  m="1798910">be</span> <span m="1799060">a</span> <span m="1799150">real</span>
  <span m="1799480">eigenvalue.</span> <span m="1800320">Have</span> <span
  m="1800470">you</span> <span m="1801220">thought</span> <span
  m="1801490">about</span> <span m="1801740">that?</span> <span
  m="1804160">Or</span> <span m="1804510">a</span> <span m="1804630">real
  eigenvector.</span> <span m="1805710">If</span> <span m="1805870">I</span>
  <span m="1806020">rotate</span> <span m="1806620">every</span> <span
  m="1806890">vector,</span> <span m="1808150">how</span> <span
  m="1808390">could</span> <span m="1808600">a</span> <span
  m="1808660">vector</span> <span m="1809170">come</span> <span
  m="1809500">out</span> <span m="1809860">a</span> <span
  m="1809920">multiple</span> <span m="1810460">of</span> <span
  m="1810580">itself?</span> <span m="1811810">How</span> <span
  m="1812020">could</span> <span m="1812260">I</span> <span
  m="1812410">have</span> <span m="1815320">A</span> <span
  m="1815470">transpose</span> <span m="1816250">times</span> <span
  m="1816610">the</span> <span m="1816670">vector</span> <span
  m="1818320">equal</span> <span m="1818680">lambda</span> <span
  m="1819120">times</span> <span m="1819510">a</span> <span
  m="1819610">vector?</span></p><p><span m="1820600">I've</span> <span
  m="1820770">rotated</span> <span m="1821440">it</span> <span
  m="1822010">and</span> <span m="1822130">yet</span> <span
  m="1822340">it's</span> <span m="1822550">in</span> <span
  m="1822670">the</span> <span m="1822790">same</span> <span
  m="1823090">direction.</span> <span m="1824170">Well,</span> <span
  m="1824440">somehow</span> <span m="1824890">that's</span> <span
  m="1825190">possible</span> <span m="1829480">in</span> <span
  m="1830370">imaginary</span> <span m="1831490">space</span> <span
  m="1832030">and</span> <span m="1832120">not</span> <span
  m="1833290">possible</span> <span m="1833860">in</span> <span
  m="1833980">real</span> <span m="1834250">space.</span> <span
  m="1834820">OK,</span> <span m="1836080">so</span> <span
  m="1836290">here</span> <span m="1836880">the</span> <span
  m="1837850">lambdas</span> <span m="1838630">are</span> <span
  m="1838750">imaginary.</span> <span m="1841940">And</span> <span
  m="1842230">now</span> <span m="1842440">finally,</span> <span
  m="1845080">tell</span> <span m="1845320">me</span> <span
  m="1846040">if</span> <span m="1846280">you</span> <span
  m="1846460">know</span> <span m="1847060">the</span> <span
  m="1848020">name</span> <span m="1848920">of</span> <span
  m="1850390">the</span> <span m="1850540">whole</span> <span
  m="1850960">family</span> <span m="1851440">of</span> <span
  m="1851530">matrices</span> <span m="1852250">that</span> <span
  m="1852370">includes</span> <span m="1852850">all</span> <span
  m="1853060">of</span> <span m="1853120">those</span> <span
  m="1853480">and</span> <span m="1853690">more.</span> <span
  m="1855010">Of</span> <span m="1855280">matrices</span> <span
  m="1856210">with</span> <span m="1856750">orthogonal</span> <span
  m="1857740">eigenvectors.</span></p><p><span m="1859810">So,</span> <span
  m="1859930">what</span> <span m="1860140">are</span> <span
  m="1860200">the</span> <span m="1860350">special</span> <span
  m="1860800">properties</span> <span m="1861430">then?</span> <span
  m="1862990">These</span> <span m="1863260">would</span> <span
  m="1863440">be</span> <span m="1863590">matrices.</span> <span
  m="1864620">Shall</span> <span m="1864830">I</span> <span
  m="1864970">call</span> <span m="1865270">them</span> <span
  m="1866680">M</span> <span m="1868040">for</span> <span
  m="1868240">matrix?</span> <span m="1869470">So,</span> <span
  m="1869750">it</span> <span m="1871030">has</span> <span
  m="1871390">orthogonal</span> <span m="1872020">eigenvectors.</span> <span
  m="1872740">So</span> <span m="1872920">it's</span> <span m="1873160">Q</span>
  <span m="1874180">times</span> <span m="1874630">the</span> <span
  m="1874720">diagonal</span> <span m="1875440">times</span> <span
  m="1875980">Q</span> <span m="1876370">transpose.</span></p><p><span
  m="1881910">I've</span> <span m="1882240">really</span> <span
  m="1883020">written</span> <span m="1883320">down</span> <span
  m="1883590">somehow--</span> <span m="1884010">I</span> <span
  m="1884070">haven't</span> <span m="1884280">written</span> <span
  m="1884550">a</span> <span m="1884640">name</span> <span
  m="1885000">down</span> <span m="1885360">for</span> <span
  m="1885630">them</span> <span m="1885840">but</span> <span
  m="1885990">that's</span> <span m="1886410">the</span> <span
  m="1888150">way</span> <span m="1888360">to</span> <span
  m="1888450">get</span> <span m="1888690">them.</span> <span
  m="1890160">I'm</span> <span m="1890370">allowing</span> <span
  m="1893220">any</span> <span m="1893820">orthogonal</span> <span
  m="1894510">eigenvectors.</span> <span m="1895870">So,</span> <span
  m="1896250">this</span> <span m="1896550">is</span> <span
  m="1896700">diagonalized.</span> <span m="1897330">I've</span> <span
  m="1897630">diagonalized</span> <span m="1898780">the</span> <span
  m="1900120">matrix.</span></p><p><span m="1901510">And</span> <span
  m="1901530">here</span> <span m="1901940">are</span> <span
  m="1902580">any</span> <span m="1902910">eigenvalues.</span> <span
  m="1903660">So,</span> <span m="1905130">the</span> <span
  m="1905400">final</span> <span m="1905850">guy</span> <span
  m="1906090">on</span> <span m="1906180">this</span> <span
  m="1906390">list</span> <span m="1906750">allows</span> <span
  m="1907200">any</span> <span m="1907500">eigenvalues,</span> <span
  m="1909000">any</span> <span m="1909270">complex</span> <span
  m="1909840">numbers.</span> <span m="1911220">But</span> <span
  m="1912070">the</span> <span m="1912530">eigenvectors,</span> <span
  m="1913800">I</span> <span m="1914450">want</span> <span m="1914730">to</span>
  <span m="1914820">be</span> <span m="1915480">orthogonal.</span> <span
  m="1916680">So</span> <span m="1916860">that's</span> <span
  m="1917160">why</span> <span m="1917460">I</span> <span
  m="1918330">have</span> <span m="1918570">the</span> <span
  m="1918750">Q.</span></p><p><span m="1920730">So,</span> <span
  m="1921270">how</span> <span m="1921600">would</span> <span
  m="1921810">you</span> <span m="1921900">recognize</span> <span
  m="1922530">such</span> <span m="1922860">a</span> <span
  m="1922920">matrix</span> <span m="1923620">and</span> <span
  m="1923670">what</span> <span m="1924540">is</span> <span
  m="1924720">the</span> <span m="1924870">name</span> <span
  m="1925290">for</span> <span m="1925590">them?</span> <span
  m="1927980">We're</span> <span m="1928160">going</span> <span
  m="1928430">beyond</span> <span m="1929060">18.06,</span> <span
  m="1930080">because</span> <span m="1930920">probably</span> <span
  m="1931400">I</span> <span m="1931550">don't</span> <span
  m="1931820">mention</span> <span m="1933730">the</span> <span
  m="1933860">name</span> <span m="1934310">for</span> <span
  m="1934550">these</span> <span m="1935330">matrices</span> <span
  m="1936170">in</span> <span m="1936350">18.06,</span> <span
  m="1937100">but</span> <span m="1937280">I</span> <span
  m="1937340">could.</span> <span m="1940200">Anybody</span> <span
  m="1940620">know</span> <span m="1940830">it?</span> <span
  m="1943440">A</span> <span m="1943560">matrix</span> <span
  m="1944490">of</span> <span m="1944670">that</span> <span
  m="1944910">form</span> <span m="1946200">is</span> <span m="1946770">a</span>
  <span m="1948270">normal</span> <span m="1948990">matrix.</span> <span
  m="1949860">Normal.</span></p><p><span m="1951060">So,</span> <span
  m="1951270">that's</span> <span m="1951630">the</span> <span
  m="1952020">total</span> <span m="1952440">list,</span> <span
  m="1953520">is</span> <span m="1954030">a</span> <span
  m="1954120">normal</span> <span m="1954650">matrix.</span> <span
  m="1961870">So,</span> <span m="1962120">normal</span> <span
  m="1962510">matrices</span> <span m="1963200">look</span> <span
  m="1963440">like</span> <span m="1963680">that.</span> <span
  m="1967760">I</span> <span m="1967940">have</span> <span m="1968150">to</span>
  <span m="1968300">apologize</span> <span m="1969080">for</span> <span
  m="1969230">whoever</span> <span m="1969710">thought</span> <span
  m="1970010">up</span> <span m="1970220">that</span> <span
  m="1970460">name,</span> <span m="1970860">normal.</span> <span
  m="1971910">I</span> <span m="1972010">mean</span> <span
  m="1972260">that's</span> <span m="1972620">like,</span> <span
  m="1973190">OK.</span> <span m="1975320">A</span> <span
  m="1975410">little</span> <span m="1975620">more</span> <span
  m="1975860">thought,</span> <span m="1976140">you</span> <span
  m="1976300">could have</span> <span m="1976580">come</span> <span
  m="1976850">up</span> <span m="1977030">with</span> <span
  m="1977180">something</span> <span m="1978620">more</span> <span
  m="1978860">meaningful</span> <span m="1979550">than</span> <span
  m="1979760">just,</span> <span m="1980000">say,</span> <span
  m="1980300">normal.</span></p><p><span m="1981950">[INAUDIBLE]</span> <span
  m="1982800">that's</span> <span m="1983120">the</span> <span
  m="1983300">absolute</span> <span m="1983750">opposite</span> <span
  m="1984260">of</span> <span m="1984380">normal.</span> <span
  m="1985490">Almost</span> <span m="1986120">all</span> <span
  m="1986390">matrices</span> <span m="1987110">are</span> <span
  m="1987200">not</span> <span m="1987500">normal.</span> <span
  m="1988670">So</span> <span m="1989360">anyway,</span> <span
  m="1989840">but</span> <span m="1989990">that's</span> <span
  m="1990260">what</span> <span m="1990410">they're</span> <span
  m="1990560">called.</span> <span m="1990890">Normal</span> <span
  m="1991310">matrices.</span></p><p><span m="1992360">And</span> <span
  m="1992510">finally,</span> <span m="1993120">how</span> <span
  m="1993560">do</span> <span m="1993770">you</span> <span
  m="1994640">recognize</span> <span m="1995320">a</span> <span
  m="1995390">normal</span> <span m="1995780">matrix?</span> <span
  m="1997070">Everybody</span> <span m="1997520">knows</span> <span
  m="1997850">how</span> <span m="1997970">to</span> <span
  m="1998090">recognize</span> <span m="1998690">a</span> <span
  m="1998780">symmetric</span> <span m="1999440">matrix</span> <span
  m="2000010">or</span> <span m="2000130">a</span> <span
  m="2000190">diagonal</span> <span m="2000790">matrix,</span> <span
  m="2001780">and</span> <span m="2001960">we</span> <span
  m="2002170">even</span> <span m="2002410">know</span> <span
  m="2002590">how</span> <span m="2002710">to</span> <span
  m="2002800">recognize</span> <span m="2003430">an</span> <span
  m="2003550">orthogonal</span> <span m="2004240">matrix</span> <span
  m="2005320">or</span> <span m="2005590">skew</span> <span
  m="2006610">or</span> <span m="2006760">antisymmetric.</span> <span
  m="2007900">But</span> <span m="2008950">what's</span> <span
  m="2009230">the</span> <span m="2009310">quick</span> <span
  m="2009610">test</span> <span m="2010060">for</span> <span
  m="2010300">a</span> <span m="2010390">normal</span> <span
  m="2010840">matrix?</span> <span m="2013800">Well,</span> <span
  m="2013910">I'll</span> <span m="2014000">just</span> <span
  m="2014300">tell</span> <span m="2014540">you</span> <span
  m="2014660">that</span> <span m="2016050">a</span> <span
  m="2016340">normal</span> <span m="2016790">matrix</span> <span
  m="2017420">has</span> <span m="2019100">M</span> <span
  m="2019370">transpose</span> <span m="2020240">M</span> <span
  m="2020750">equal</span> <span m="2021120">M</span> <span m="2021490">M</span>
  <span m="2021710">transpose.</span></p><p><span m="2025970">I'm</span> <span
  m="2026240">talking</span> <span m="2026750">here</span> <span
  m="2026960">about</span> <span m="2027230">real</span> <span
  m="2027530">matrices</span> <span m="2028250">and</span> <span
  m="2028400">I</span> <span m="2028490">really</span> <span
  m="2028850">should</span> <span m="2029540">move</span> <span
  m="2029870">to</span> <span m="2030110">complex.</span> <span
  m="2030860">But</span> <span m="2031670">let</span> <span
  m="2031820">me</span> <span m="2032900">just</span> <span
  m="2033410">think</span> <span m="2033680">of</span> <span
  m="2033830">them</span> <span m="2034040">as</span> <span
  m="2034190">real.</span> <span m="2037310">Well,</span> <span
  m="2038180">the</span> <span m="2038330">trouble</span> <span
  m="2038720">is</span> <span m="2038960">that</span> <span
  m="2039290">the</span> <span m="2039440">matrices</span> <span
  m="2040130">might</span> <span m="2040400">be</span> <span
  m="2040580">real</span> <span m="2041000">but</span> <span
  m="2041210">the</span> <span m="2041910">eigenvectors</span> <span
  m="2042800">are</span> <span m="2042920">not</span> <span
  m="2043160">going</span> <span m="2043270">to</span> <span
  m="2043400">be</span> <span m="2043580">real</span> <span
  m="2044910">and</span> <span m="2045020">the</span> <span
  m="2045170">eigenvalues</span> <span m="2045980">are</span> <span
  m="2046070">not</span> <span m="2046280">going</span> <span
  m="2046400">to</span> <span m="2046550">be</span> <span
  m="2046700">real.</span> <span m="2047130">So,</span> <span
  m="2047270">really</span> <span m="2047750">I--</span> <span
  m="2048489">I'm</span> <span m="2048739">sorry</span> <span
  m="2049010">to</span> <span m="2049100">say</span> <span
  m="2049280">really</span> <span m="2049699">again--</span> <span
  m="2050719">I</span> <span m="2051110">should</span> <span
  m="2051560">get</span> <span m="2051889">out</span> <span
  m="2053780">of</span> <span m="2053840">the</span> <span
  m="2054380">limitation</span> <span m="2055310">to</span> <span
  m="2055460">real.</span> <span m="2057090">Yeah.</span></p><p><span
  m="2058100">And</span> <span m="2058400">how</span> <span
  m="2058639">do</span> <span m="2058820">I</span> <span m="2058880">get</span>
  <span m="2059120">out</span> <span m="2059330">of</span> <span
  m="2059449">the</span> <span m="2059540">limitation</span> <span
  m="2060350">to</span> <span m="2060500">real?</span> <span
  m="2062570">What</span> <span m="2062810">do</span> <span m="2062960">I</span>
  <span m="2063110">change</span> <span m="2063650">here</span> <span
  m="2064170">if</span> <span m="2064370">M</span> <span m="2064699">is</span>
  <span m="2064909">a</span> <span m="2065179">complex</span> <span
  m="2066020">matrix</span> <span m="2066620">instead</span> <span
  m="2066980">of</span> <span m="2067100">a</span> <span m="2067159">real</span>
  <span m="2067460">matrix?</span> <span m="2068520">Then</span> <span
  m="2069020">whenever</span> <span m="2069500">you</span> <span
  m="2069679">transpose</span> <span m="2070489">it</span> <span
  m="2070610">you</span> <span m="2070790">should</span> <span
  m="2071030">take</span> <span m="2071420">its</span> <span
  m="2071630">complex</span> <span m="2072260">conjugate.</span> <span
  m="2073880">So</span> <span m="2074060">now</span> <span
  m="2074330">that</span> <span m="2074750">that's</span> <span
  m="2075150">the</span> <span m="2075260">real</span> <span
  m="2075560">thing.</span> <span m="2075920">That's</span> <span
  m="2076310">the</span> <span m="2076969">normal</span> <span
  m="2077389">thing,</span> <span m="2078380">that's</span> <span
  m="2078710">the</span> <span m="2078860">right</span> <span
  m="2079159">thing.</span> <span m="2079750">Yeah,</span> <span
  m="2080719">right</span> <span m="2081050">thing.</span> <span
  m="2081920">Better.</span></p><p><span m="2082750">OK,</span> <span
  m="2083429">so</span> <span m="2084080">that's</span> <span
  m="2084719">a</span> <span m="2084830">normal</span> <span
  m="2085219">matrix.</span> <span m="2086010">And</span> <span
  m="2086360">you</span> <span m="2086540">can</span> <span
  m="2086989">check</span> <span m="2087350">that</span> <span
  m="2087920">if</span> <span m="2088190">you</span> <span
  m="2088489">took</span> <span m="2088790">that</span> <span
  m="2089239">M</span> <span m="2090620">and</span> <span m="2090770">you</span>
  <span m="2090920">figured</span> <span m="2091310">out</span> <span
  m="2091610">M</span> <span m="2093050">transpose</span> <span
  m="2094340">and</span> <span m="2094520">did</span> <span
  m="2094760">that,</span> <span m="2095239">it</span> <span
  m="2095719">would</span> <span m="2095929">work.</span> <span
  m="2096980">Because</span> <span m="2097220">in</span> <span
  m="2097340">the</span> <span m="2097490">end</span> <span
  m="2097670">the</span> <span m="2097820">Q's</span> <span
  m="2098360">cancel</span> <span m="2099350">and</span> <span
  m="2099500">you</span> <span m="2099680">just</span> <span
  m="2102140">have</span> <span m="2103100">2</span> <span
  m="2104150">diagonal</span> <span m="2104750">matrices</span> <span
  m="2105500">there</span> <span m="2105890">and</span> <span
  m="2106010">that's</span> <span m="2108320">sort</span> <span
  m="2108530">of</span> <span m="2108650">automatic,</span> <span
  m="2109055">that</span> <span m="2109460">diagonal</span> <span
  m="2110000">matrices</span> <span m="2110690">commute.</span> <span
  m="2111200">So,</span> <span m="2111830">a</span> <span
  m="2111890">normal</span> <span m="2112310">matrix</span> <span
  m="2112940">is</span> <span m="2113150">one</span> <span
  m="2113450">that</span> <span m="2113690">commutes</span> <span
  m="2114470">with</span> <span m="2114770">its</span> <span
  m="2115340">transpose.</span> <span m="2116360">Commutes</span> <span
  m="2116870">with</span> <span m="2117080">its</span> <span
  m="2117260">transpose</span> <span m="2118310">or</span> <span
  m="2118520">its</span> <span m="2118760">conjugate</span> <span
  m="2119390">transpose</span> <span m="2120140">in</span> <span
  m="2120260">the</span> <span m="2120650">complex</span> <span
  m="2121250">case.</span></p><p><span m="2121850">OK,</span> <span
  m="2123680">why</span> <span m="2123890">did</span> <span m="2124100">I</span>
  <span m="2124220">say</span> <span m="2124460">all</span> <span
  m="2124640">that?</span> <span m="2125990">Simply</span> <span
  m="2126530">because--</span> <span m="2127580">oh,</span> <span
  m="2127940">I</span> <span m="2128090">guess</span> <span
  m="2128450">that--</span> <span m="2130450">so</span> <span
  m="2130690">the</span> <span m="2130840">permutation</span> <span
  m="2131740">P</span> <span m="2137570">is</span> <span
  m="2137780">orthogonal</span> <span m="2139280">so</span> <span
  m="2139700">its</span> <span m="2139970">eigenvectors,</span> <span
  m="2140990">which</span> <span m="2141230">we're</span> <span
  m="2141350">going</span> <span m="2141480">to</span> <span
  m="2141590">write</span> <span m="2141800">down</span> <span
  m="2142070">in</span> <span m="2142130">a</span> <span
  m="2142160">minute,</span> <span m="2143260">are</span> <span
  m="2143940">orthogonal.</span> <span m="2145100">But</span> <span
  m="2145340">actually,</span> <span m="2147470">this</span> <span
  m="2147740">matrix</span> <span m="2148280">C</span> <span
  m="2150350">will</span> <span m="2150620">be</span> <span m="2151010">a</span>
  <span m="2151100">normal</span> <span m="2151550">matrix.</span> <span
  m="2158670">I</span> <span m="2159060">didn't</span> <span
  m="2159360">see</span> <span m="2159600">that</span> <span
  m="2159780">coming</span> <span m="2160200">as</span> <span
  m="2160350">I</span> <span m="2160470">started</span> <span
  m="2161100">talking</span> <span m="2161550">about</span> <span
  m="2161820">these</span> <span m="2162090">guys.</span></p><p><span
  m="2163170">Yeah,</span> <span m="2163560">so</span> <span
  m="2163770">that's</span> <span m="2164040">a</span> <span
  m="2164130">normal</span> <span m="2164550">matrix.</span> <span
  m="2166380">Because</span> <span m="2166830">circulant</span> <span
  m="2167340">matrices</span> <span m="2168030">commute.</span> <span
  m="2168780">Any</span> <span m="2169080">2</span> <span
  m="2169380">circulant</span> <span m="2169950">matrices</span> <span
  m="2170610">commute.</span> <span m="2171410">C1</span> <span
  m="2172080">C2</span> <span m="2172830">equals</span> <span
  m="2173250">C2</span> <span m="2173575">C1.</span> <span
  m="2178160">And</span> <span m="2178280">now</span> <span
  m="2178580">if</span> <span m="2178730">C2</span> <span m="2179330">is</span>
  <span m="2179450">the</span> <span m="2179600">transpose</span> <span
  m="2180380">of--</span> <span m="2181220">so,</span> <span
  m="2181790">here's</span> <span m="2182360">a</span> <span
  m="2182420">matrix.</span> <span m="2184190">Yeah,</span> <span
  m="2184490">so</span> <span m="2184670">these</span> <span
  m="2184940">are</span> <span m="2185060">matrices</span> <span
  m="2185465">here.</span></p><p><span m="2189710">Circulants</span> <span
  m="2190310">all</span> <span m="2190570">commute.</span> <span
  m="2190860">It's</span> <span m="2191150">a</span> <span
  m="2191210">little</span> <span m="2191480">family</span> <span
  m="2191990">of</span> <span m="2192830">matrices.</span> <span
  m="2193730">When</span> <span m="2193910">you</span> <span
  m="2194150">multiply</span> <span m="2194750">them</span> <span
  m="2194930">together</span> <span m="2195320">you</span> <span
  m="2195470">get</span> <span m="2195680">more</span> <span
  m="2196010">of</span> <span m="2196100">them.</span> <span
  m="2196660">You're</span> <span m="2196820">just</span> <span
  m="2197420">staying</span> <span m="2197960">in</span> <span
  m="2198080">that</span> <span m="2198260">little</span> <span
  m="2198470">circulant</span> <span m="2199100">world</span> <span
  m="2199970">with</span> <span m="2200570">n</span> <span
  m="2201170">parameters.</span></p><p><span m="2203060">And</span> <span
  m="2203450">once</span> <span m="2203810">you</span> <span
  m="2203960">know</span> <span m="2204320">the</span> <span
  m="2204500">first</span> <span m="2204890">row,</span> <span
  m="2205190">you</span> <span m="2205340">know</span> <span
  m="2205580">all</span> <span m="2205760">the</span> <span
  m="2205910">other</span> <span m="2206120">rows.</span> <span
  m="2210080">So</span> <span m="2210470">in</span> <span
  m="2210560">fact,</span> <span m="2212660">they</span> <span
  m="2212930">all</span> <span m="2213230">have</span> <span
  m="2213470">the</span> <span m="2213590">same</span> <span
  m="2213980">eigenvectors.</span> <span m="2214790">So,</span> <span
  m="2215000">now</span> <span m="2216140">let</span> <span
  m="2216260">me</span> <span m="2217160">be</span> <span
  m="2217370">sure</span> <span m="2217790">we</span> <span
  m="2217940">get</span> <span m="2218150">the</span> <span
  m="2218330">eigenvectors</span> <span m="2219830">straight.</span> <span
  m="2221000">OK.</span></p><p><span m="2228820">OK,</span> <span
  m="2229480">eigenvectors</span> <span m="2235870">of</span> <span
  m="2236210">P</span> <span m="2238330">will</span> <span
  m="2238870">also</span> <span m="2239380">be</span> <span
  m="2243130">eigenvectors</span> <span m="2246340">of</span> <span
  m="2247300">C</span> <span m="2248320">because</span> <span
  m="2248800">it's</span> <span m="2249010">a</span> <span
  m="2249070">combination</span> <span m="2249970">of</span> <span
  m="2251560">powers</span> <span m="2252190">of</span> <span
  m="2252350">P.</span> <span m="2262100">So</span> <span
  m="2262820">once</span> <span m="2263120">I</span> <span
  m="2263240">find</span> <span m="2263450">the</span> <span
  m="2263570">eigenvectors</span> <span m="2264290">of</span> <span
  m="2264410">P,</span> <span m="2264770">I've</span> <span
  m="2264980">found</span> <span m="2265250">the</span> <span
  m="2265400">eigenvectors</span> <span m="2266150">of</span> <span
  m="2266300">any</span> <span m="2266600">circulant</span> <span
  m="2267200">matrix.</span> <span m="2268430">And</span> <span
  m="2268550">these</span> <span m="2268850">eigenvectors</span> <span
  m="2269630">are</span> <span m="2269690">very</span> <span
  m="2270050">special,</span> <span m="2270980">and</span> <span
  m="2271130">that's</span> <span m="2271520">the</span> <span
  m="2271610">connection</span> <span m="2272240">to</span> <span
  m="2272420">Fourier.</span></p><p><span m="2273110">That's</span> <span
  m="2273500">why--</span> <span m="2274790">we</span> <span
  m="2275000">expect</span> <span m="2275510">a</span> <span
  m="2275580">connection</span> <span m="2276110">to</span> <span
  m="2276240">Fourier</span> <span m="2276860">because</span> <span
  m="2277880">we</span> <span m="2278060">have</span> <span
  m="2278270">something</span> <span m="2278720">periodic.</span> <span
  m="2279560">And</span> <span m="2279680">that's</span> <span
  m="2279980">what</span> <span m="2280220">Fourier</span> <span
  m="2280600">is</span> <span m="2280970">entirely</span> <span
  m="2281570">about.</span> <span m="2282650">OK,</span> <span
  m="2283060">so</span> <span m="2283250">what</span> <span
  m="2283490">are</span> <span m="2283610">these</span> <span
  m="2283940">eigenvectors?</span> <span m="2285530">Let's</span> <span
  m="2285830">take</span> <span m="2286910">P</span> <span m="2288500">to</span>
  <span m="2288650">be</span> <span m="2290930">4</span> <span
  m="2291200">by</span> <span m="2291410">4.</span></p><p><span
  m="2300110">OK,</span> <span m="2301430">so</span> <span
  m="2301670">the</span> <span m="2301920">eigenvectors</span> <span
  m="2302630">are--</span> <span m="2303810">so</span> <span
  m="2304190">we</span> <span m="2304540">remember,</span> <span
  m="2304940">the</span> <span m="2305090">eigenvalues</span> <span
  m="2305720">are</span> <span m="2305840">lambda</span> <span
  m="2306200">equal</span> <span m="2306500">1,</span> <span
  m="2307040">lambda</span> <span m="2307510">equal</span> <span
  m="2307670">minus</span> <span m="2308180">1,</span> <span
  m="2309090">lambda</span> <span m="2309450">equal</span> <span
  m="2309890">I,</span> <span m="2310910">and</span> <span
  m="2311090">lambda</span> <span m="2311510">equal</span> <span
  m="2311900">minus</span> <span m="2312420">I.</span> <span
  m="2313030">We've</span> <span m="2313310">got</span> <span
  m="2313490">4</span> <span m="2313940">eigenvectors</span> <span
  m="2314570">to</span> <span m="2314860">find</span> <span
  m="2315730">and</span> <span m="2315860">when</span> <span
  m="2316040">we</span> <span m="2316160">find</span> <span
  m="2316460">those,</span> <span m="2316950">you'll</span> <span
  m="2317660">have</span> <span m="2317880">the</span> <span
  m="2317990">picture.</span> <span m="2318980">OK,</span> <span
  m="2319310">what's</span> <span m="2319550">the</span> <span
  m="2320480">eigenvector</span> <span m="2321170">for</span> <span
  m="2321380">lambda</span> <span m="2321770">equal</span> <span
  m="2322070">1?</span></p><p><span m="2323876">STUDENT:</span> <span
  m="2323970">1,</span> <span m="2324064">1,</span> <span m="2324158">1,</span>
  <span m="2324252">1.</span></p><p><span m="2324820">GILBERT STRANG:</span>
  <span m="2324940">1,</span> <span m="2325060">1,</span> <span
  m="2325270">1,</span> <span m="2325480">1.</span> <span m="2327220">So,</span>
  <span m="2328110">let</span> <span m="2328210">me</span> <span
  m="2328360">make</span> <span m="2328660">it</span> <span
  m="2328750">into</span> <span m="2329080">a</span> <span
  m="2329140">vector.</span> <span m="2330340">And</span> <span
  m="2330520">the</span> <span m="2330640">eigenvector</span> <span
  m="2331360">for</span> <span m="2331540">lambda</span> <span
  m="2331900">equal</span> <span m="2332170">minus</span> <span
  m="2332590">1</span> <span m="2332890">is?</span> <span m="2334690">So,</span>
  <span m="2334900">I</span> <span m="2335020">want</span> <span
  m="2335350">this</span> <span m="2335590">shift</span> <span
  m="2336220">to</span> <span m="2336460">change</span> <span
  m="2337210">every</span> <span m="2337570">sign.</span> <span
  m="2338870">So</span> <span m="2339190">I</span> <span
  m="2339670">better</span> <span m="2340060">alternate</span> <span
  m="2340750">those</span> <span m="2340960">signs</span> <span
  m="2344890">so</span> <span m="2345130">that</span> <span
  m="2345310">if</span> <span m="2345460">I</span> <span m="2345640">shift
  it,</span> <span m="2346240">the</span> <span m="2346390">1</span> <span
  m="2346750">goes</span> <span m="2347080">to</span> <span
  m="2347230">the</span> <span m="2347320">minus</span> <span
  m="2347770">1.</span> <span m="2348460">Minus 1</span> <span
  m="2348880">goes</span> <span m="2349420">to</span> <span
  m="2349540">the</span> <span m="2349630">1.</span> <span m="2350020">So</span>
  <span m="2350740">the</span> <span m="2350890">eigenvalue</span> <span
  m="2351300">is</span> <span m="2351700">minus</span> <span
  m="2352150">1.</span></p><p><span m="2352880">Now,</span> <span
  m="2353140">what</span> <span m="2353350">about</span> <span
  m="2353620">the</span> <span m="2353770">eigenvalues</span> <span
  m="2354610">of</span> <span m="2354820">i?</span> <span
  m="2356090">Sorry,</span> <span m="2356650">the</span> <span
  m="2356770">eigenvector</span> <span m="2358090">that</span> <span
  m="2358270">goes</span> <span m="2358660">with</span> <span
  m="2359020">eigenvalue</span> <span m="2359710">i?</span> <span
  m="2363790">If</span> <span m="2364240">I</span> <span m="2364360">start
  it</span> <span m="2364810">with</span> <span m="2365020">1</span> <span
  m="2368470">and</span> <span m="2368660">I</span> <span m="2368780">do</span>
  <span m="2368990">the</span> <span m="2369110">permutation,</span> <span
  m="2370640">I</span> <span m="2370790">think</span> <span m="2371060">I</span>
  <span m="2371180">just</span> <span m="2371450">want</span> <span
  m="2371750">i,</span> <span m="2372245">i</span> <span
  m="2372740">squared,</span> <span m="2373550">i</span> <span
  m="2373750">cubed</span> <span m="2374270">there.</span> <span
  m="2375330">And</span> <span m="2375500">I</span> <span
  m="2375590">think</span> <span m="2375770">with</span> <span
  m="2375920">this</span> <span m="2376160">guy,</span> <span
  m="2376580">with</span> <span m="2376820">minus</span> <span
  m="2377320">i,</span> <span m="2377970">I</span> <span
  m="2378280">think</span> <span m="2378590">I</span> <span
  m="2378710">want</span> <span m="2378980">the</span> <span
  m="2379100">vector</span> <span m="2379610">1,</span> <span
  m="2380660">minus</span> <span m="2381230">i,</span> <span
  m="2382100">minus</span> <span m="2382500">i</span> <span
  m="2382850">squared,</span> <span m="2384020">minus</span> <span
  m="2384430">i</span> <span m="2384680">cubed.</span></p><p><span
  m="2392810">So</span> <span m="2394520">without</span> <span
  m="2395660">stopping</span> <span m="2396230">to</span> <span
  m="2396380">check,</span> <span m="2396830">let's</span> <span
  m="2397100">just</span> <span m="2397310">see</span> <span
  m="2397610">the</span> <span m="2398150">nice</span> <span
  m="2398540">point</span> <span m="2398960">here.</span> <span
  m="2400880">All</span> <span m="2401180">the</span> <span
  m="2401300">components</span> <span m="2401990">of</span> <span
  m="2402140">eigenvectors</span> <span m="2403160">are</span> <span
  m="2405590">in</span> <span m="2405830">this</span> <span
  m="2406070">picture.</span> <span m="2408410">Here</span> <span
  m="2408740">we've</span> <span m="2408950">got</span> <span
  m="2409250">8</span> <span m="2409610">eigenvectors.</span> <span
  m="2410630">8</span> <span m="2410870">eigenvalues,</span> <span
  m="2411740">8</span> <span m="2411980">eigenvectors.</span></p><p><span
  m="2412910">The</span> <span m="2413030">eigenvectors</span> <span
  m="2413810">have</span> <span m="2413960">8</span> <span
  m="2414200">components</span> <span m="2415250">and</span> <span
  m="2415520">every</span> <span m="2415850">component</span> <span
  m="2417440">is</span> <span m="2417650">one</span> <span m="2417860">of</span>
  <span m="2417920">these</span> <span m="2418190">8</span> <span
  m="2418400">numbers.</span> <span m="2420210">The</span> <span
  m="2420330">whole</span> <span m="2420690">thing</span> <span
  m="2421050">is</span> <span m="2421200">constructed</span> <span
  m="2421860">from</span> <span m="2422040">the</span> <span
  m="2422160">same</span> <span m="2422610">8</span> <span
  m="2422790">numbers.</span> <span m="2423300">The</span> <span
  m="2423450">eigenvalues</span> <span m="2424680">and</span> <span
  m="2424950">the</span> <span m="2425130">eigenvectors.</span> <span
  m="2426840">And</span> <span m="2428010">really</span> <span
  m="2428490">the</span> <span m="2428730">key</span> <span
  m="2429120">point</span> <span m="2429510">is,</span> <span
  m="2429720">what</span> <span m="2429990">is</span> <span
  m="2430230">the</span> <span m="2430680">matrix</span> <span
  m="2431370">of</span> <span m="2431480">eigenvectors?</span></p><p><span
  m="2433200">So,</span> <span m="2433860">let's</span> <span
  m="2434160">just</span> <span m="2434400">write</span> <span
  m="2434670">that</span> <span m="2434910">down.</span> <span
  m="2439220">So,</span> <span m="2441640">the</span> <span
  m="2441790">eigenvector</span> <span m="2442570">matrix</span> <span
  m="2448160">for</span> <span m="2449240">all</span> <span
  m="2450440">circulants</span> <span m="2455520">of</span> <span
  m="2455880">size</span> <span m="2456320">N.</span> <span
  m="2460930">They</span> <span m="2461110">all</span> <span
  m="2461320">have</span> <span m="2461500">the</span> <span
  m="2461590">same</span> <span m="2461920">eigenvectors,</span> <span
  m="2465890">including</span> <span m="2466520">P.</span> <span
  m="2469670">All</span> <span m="2470120">circulants</span> <span
  m="2470750">C</span> <span m="2471250">of</span> <span m="2471380">size</span>
  <span m="2471860">N</span> <span m="2472610">including</span> <span
  m="2473300">P</span> <span m="2473840">of</span> <span m="2474140">size</span>
  <span m="2474650">N.</span></p><p><span m="2478710">So,</span> <span
  m="2478890">what's</span> <span m="2479160">the</span> <span
  m="2479310">eigenvector</span> <span m="2480000">matrix?</span> <span
  m="2480690">What</span> <span m="2480960">are</span> <span
  m="2481020">the</span> <span m="2481170">eigenvectors?</span> <span
  m="2484320">Well,</span> <span m="2485690">the</span> <span
  m="2485790">first</span> <span m="2486360">vector</span> <span
  m="2488640">is</span> <span m="2489450">all</span> <span
  m="2489660">1's.</span> <span m="2491490">Just</span> <span
  m="2491880">as</span> <span m="2492150">there.</span></p><p><span
  m="2493840">So,</span> <span m="2493980">that's</span> <span
  m="2494280">an</span> <span m="2494400">eigenvector</span> <span
  m="2495150">of</span> <span m="2495300">P,</span> <span
  m="2495770">right?</span> <span m="2496950">Because</span> <span
  m="2498570">if</span> <span m="2498780">I</span> <span
  m="2499200">multiply</span> <span m="2499800">by</span> <span
  m="2500070">P,</span> <span m="2501730">I</span> <span m="2501870">do</span>
  <span m="2502050">a</span> <span m="2502140">shift,</span> <span
  m="2503120">a</span> <span m="2503230">cyclic</span> <span
  m="2503850">shift,</span> <span m="2504330">and</span> <span
  m="2504450">I've</span> <span m="2504600">got</span> <span
  m="2504840">all</span> <span m="2505050">1's.</span> <span
  m="2506870">The</span> <span m="2507180">next</span> <span
  m="2508480">eigenvector</span> <span m="2509360">is</span> <span
  m="2510510">powers</span> <span m="2511140">of</span> <span
  m="2511420">w.</span></p><p><span m="2519760">And</span> <span
  m="2520230">let</span> <span m="2520380">me</span> <span
  m="2520530">remind</span> <span m="2521040">you,</span> <span
  m="2521460">everything</span> <span m="2521970">is</span> <span
  m="2522120">going</span> <span m="2522230">to</span> <span
  m="2522360">be</span> <span m="2522540">powers</span> <span
  m="2522990">of</span> <span m="2523110">w.</span> <span m="2523845">e</span>
  <span m="2524190">to</span> <span m="2524400">the</span> <span m="2524490">2
  pi i</span> <span m="2525690">over</span> <span m="2526000">N.</span> <span
  m="2526890">It's</span> <span m="2527100">that</span> <span
  m="2528030">complex</span> <span m="2528720">number</span> <span
  m="2530260">that's</span> <span m="2530580">1/n</span> <span
  m="2531400">of</span> <span m="2531620">the</span> <span
  m="2531690">way</span> <span m="2531900">around.</span> <span
  m="2533880">So,</span> <span m="2534090">what</span> <span
  m="2534330">happens</span> <span m="2534750">if</span> <span
  m="2534930">I</span> <span m="2535680">multiply</span> <span
  m="2536160">that</span> <span m="2536400">by</span> <span
  m="2536640">P?</span> <span m="2536950">It</span> <span
  m="2537260">shift</span> <span m="2537750">it</span> <span
  m="2538770">and</span> <span m="2538980">it</span> <span
  m="2539100">multiplies</span> <span m="2539790">by</span> <span
  m="2540000">w</span> <span m="2541590">or</span> <span m="2542100">1/w,</span>
  <span m="2544920">which</span> <span m="2545160">is</span> <span
  m="2545280">another</span> <span m="2546095">eigenvector.</span></p><p><span
  m="2547200">OK,</span> <span m="2547590">and</span> <span
  m="2547710">then</span> <span m="2547890">the</span> <span
  m="2547980">next</span> <span m="2548370">one</span> <span
  m="2549210">in</span> <span m="2549360">this</span> <span
  m="2549690">list</span> <span m="2550140">will</span> <span
  m="2550320">be</span> <span m="2551880">going</span> <span
  m="2552270">with</span> <span m="2552580">w</span> <span
  m="2552960">squared.</span> <span m="2553590">So</span> <span
  m="2553790">it</span> <span m="2553840">will</span> <span
  m="2553930">be</span> <span m="2554140">w</span> <span
  m="2555020">fourth,</span> <span m="2555940">w</span> <span
  m="2556120">to</span> <span m="2556260">the</span> <span
  m="2556420">sixth,</span> <span m="2557550">w</span> <span m="2557970">to
  the</span> <span m="2558120">eighth.</span> <span m="2559570">Wait</span>
  <span m="2559890">a</span> <span m="2559920">minute,</span> <span
  m="2560140">did</span> <span m="2560500">I</span> <span m="2560640">get</span>
  <span m="2560820">these</span> <span m="2561030">lined</span> <span
  m="2561390">up</span> <span m="2561540">all</span> <span
  m="2561580">right?</span> <span m="2563480">w</span> <span
  m="2563890">goes</span> <span m="2564210">with</span> <span
  m="2564320">w</span> <span m="2564710">squared.</span> <span
  m="2565550">Whoops.</span></p><p><span m="2571610">w</span> <span
  m="2571940">squared.</span> <span m="2572520">Now</span> <span
  m="2572660">it's</span> <span m="2572820">w</span> <span m="2573230">to
  the</span> <span m="2573320">fourth,</span> <span m="2574190">w</span> <span
  m="2574550">the</span> <span m="2574640">sixth,</span> <span m="2575750">w to
  the</span> <span m="2576230">eighth,</span> <span m="2577550">w</span> <span
  m="2577910">to the</span> <span m="2578060">10th,</span> <span
  m="2579850">w</span> <span m="2580130">to</span> <span m="2580250">the</span>
  <span m="2580370">12th,</span> <span m="2580940">and</span> <span
  m="2581090">w</span> <span m="2581420">to</span> <span m="2581540">the</span>
  <span m="2581670">14th.</span> <span m="2585470">And</span> <span
  m="2585640">they</span> <span m="2585740">keep</span> <span
  m="2585950">going.</span> <span m="2589940">So</span> <span
  m="2590120">that's</span> <span m="2590480">the</span> <span
  m="2591290">eigenvector</span> <span m="2592010">with</span> <span
  m="2592220">eigenvalue</span> <span m="2592880">1.</span> <span
  m="2593780">This</span> <span m="2594020">will</span> <span
  m="2594170">have</span> <span m="2595070">the</span> <span
  m="2595190">eigenvalue--</span> <span m="2595970">it's</span> <span
  m="2596150">either</span> <span m="2596420">w</span> <span
  m="2596750">or</span> <span m="2597020">the</span> <span
  m="2597770">conjugate,</span> <span m="2598460">might</span> <span
  m="2598700">be</span> <span m="2598850">the</span> <span
  m="2598970">conjugate,</span> <span m="2599990">w</span> <span
  m="2600350">bar.</span></p><p><span m="2601280">And</span> <span
  m="2602410">you</span> <span m="2602600">see</span> <span
  m="2602900">this</span> <span m="2603140">matrix.</span> <span
  m="2604610">So,</span> <span m="2604700">what</span> <span
  m="2604940">would</span> <span m="2605090">be</span> <span
  m="2605240">the</span> <span m="2605360">last</span> <span
  m="2606680">eigenvector?</span> <span m="2607300">It</span> <span
  m="2607350">would</span> <span m="2607500">be</span> <span
  m="2607880">w--</span> <span m="2609740">so</span> <span
  m="2609950">this</span> <span m="2610130">is</span> <span m="2610250">8</span>
  <span m="2610460">by</span> <span m="2610700">8.</span> <span
  m="2613100">I'm</span> <span m="2613310">going</span> <span
  m="2613430">to</span> <span m="2613520">call</span> <span
  m="2613760">that</span> <span m="2614000">the</span> <span
  m="2614150">Fourier</span> <span m="2614660">matrix</span> <span
  m="2615620">of</span> <span m="2615740">size</span> <span
  m="2616240">8.</span> <span m="2619370">And</span> <span
  m="2619760">it's</span> <span m="2619970">the</span> <span
  m="2620120">eigenvector</span> <span m="2620840">matrix.</span> <span
  m="2621350">So</span> <span m="2621530">Fourier</span> <span
  m="2622010">matrix</span> <span m="2628850">equals</span> <span
  m="2629600">eigenvector</span> <span m="2630380">matrix.</span></p><p><span
  m="2638490">So,</span> <span m="2639440">what</span> <span
  m="2639710">I'm</span> <span m="2639830">saying</span> <span
  m="2640250">is</span> <span m="2641330">that</span> <span
  m="2641540">the</span> <span m="2641690">linear</span> <span
  m="2642140">algebra</span> <span m="2642680">for</span> <span
  m="2642890">these</span> <span m="2644690">circulants</span> <span
  m="2645470">is</span> <span m="2645650">fantastic.</span> <span
  m="2646970">They</span> <span m="2647180">all</span> <span
  m="2647690">have</span> <span m="2647900">the</span> <span
  m="2648080">same</span> <span m="2648530">eigenvector</span> <span
  m="2649280">matrix.</span> <span m="2649880">It</span> <span
  m="2650030">happens</span> <span m="2650390">to</span> <span
  m="2650510">be</span> <span m="2650660">the</span> <span
  m="2650780">most</span> <span m="2651140">important</span> <span
  m="2651620">complex</span> <span m="2652250">matrix</span> <span
  m="2652790">in</span> <span m="2652910">the</span> <span
  m="2653000">world</span> <span m="2654830">and</span> <span
  m="2655940">its</span> <span m="2656150">properties</span> <span
  m="2656900">are</span> <span m="2657500">golden.</span> <span
  m="2659090">And</span> <span m="2659330">it</span> <span
  m="2659450">allows</span> <span m="2659960">the</span> <span
  m="2660080">fast</span> <span m="2660440">Fourier</span> <span
  m="2660860">transform,</span> <span m="2663420">which</span> <span
  m="2663590">we</span> <span m="2663740">could</span> <span
  m="2663950">write</span> <span m="2664280">in</span> <span
  m="2664430">matrix</span> <span m="2664970">language</span> <span
  m="2665750">next</span> <span m="2666050">time.</span></p><p><span
  m="2666980">And</span> <span m="2667430">all</span> <span
  m="2667790">the</span> <span m="2668000">entries</span> <span
  m="2668510">are</span> <span m="2668660">powers</span> <span
  m="2669200">of</span> <span m="2669320">w.</span> <span m="2670010">All</span>
  <span m="2670280">the</span> <span m="2670430">entries</span> <span
  m="2671000">are</span> <span m="2673460">on</span> <span
  m="2673640">the</span> <span m="2674330">unit</span> <span
  m="2675260">circle</span> <span m="2676130">at</span> <span
  m="2676970">one</span> <span m="2677180">of</span> <span
  m="2677240">those</span> <span m="2677570">8</span> <span
  m="2677810">points.</span> <span m="2678830">And</span> <span
  m="2678950">the</span> <span m="2679040">last</span> <span
  m="2679460">guy</span> <span m="2679790">would</span> <span
  m="2680030">be</span> <span m="2680270">w</span> <span m="2680525">to</span>
  <span m="2680780">the</span> <span m="2680930">seventh,</span> <span
  m="2682070">w</span> <span m="2682550">to the</span> <span
  m="2682720">14th,</span> <span m="2683540">w</span> <span m="2683780">to
  the</span> <span m="2684190">21st,</span> <span m="2685790">28th,</span> <span
  m="2687740">35th,</span> <span m="2690320">42nd,</span> <span
  m="2691640">and</span> <span m="2691880">49th.</span> <span
  m="2696970">So,</span> <span m="2697360">w</span> <span m="2697780">to
  the</span> <span m="2697900">49th</span> <span m="2698510">would</span> <span
  m="2698780">be</span> <span m="2698950">the</span> <span
  m="2699070">last.</span> <span m="2700960">7</span> <span
  m="2701440">squared.</span></p><p><span m="2702460">It</span> <span
  m="2702550">starts</span> <span m="2703000">out</span> <span
  m="2703150">with</span> <span m="2703390">w</span> <span m="2703870">to</span>
  <span m="2704050">the</span> <span m="2705060">0</span> <span
  m="2705690">times</span> <span m="2706050">0.</span> <span
  m="2711880">You</span> <span m="2712510">see</span> <span
  m="2712750">that</span> <span m="2712870">picture.</span> <span
  m="2715510">w</span> <span m="2715780">to</span> <span m="2716050">the</span>
  <span m="2716170">49th.</span> <span m="2716890">What</span> <span
  m="2717070">is</span> <span m="2717310">actually</span> <span m="2717730">w
  to</span> <span m="2718180">the</span> <span m="2718270">49th?</span> <span
  m="2719530">If</span> <span m="2719950">w</span> <span m="2720550">is</span>
  <span m="2720760">the</span> <span m="2721630">eighth</span> <span
  m="2722050">root</span> <span m="2722380">of</span> <span
  m="2722530">1,</span> <span m="2723730">so</span> <span m="2723910">we</span>
  <span m="2724060">have</span> <span m="2724270">w</span> <span
  m="2724740">to</span> <span m="2724780">the</span> <span
  m="2724960">eighth,</span> <span m="2726600">it's</span> <span
  m="2727070">1</span> <span m="2728700">because</span> <span
  m="2729010">I'm</span> <span m="2729160">doing</span> <span
  m="2729430">8</span> <span m="2729640">by</span> <span m="2729880">8.</span>
  <span m="2731170">What</span> <span m="2731440">is</span> <span
  m="2731650">w</span> <span m="2732100">to</span> <span m="2732280">the</span>
  <span m="2732400">49th</span> <span m="2733120">power?</span></p><p><span
  m="2736306">STUDENT:</span> <span m="2736544">[INAUDIBLE]</span></p><p><span
  m="2737260">GILBERT STRANG:</span> <span m="2737390">w?</span> <span
  m="2738020">It's</span> <span m="2738140">the</span> <span
  m="2738200">same</span> <span m="2738500">as w.</span> <span
  m="2739450">OK,</span> <span m="2739910">because</span> <span
  m="2740360">w</span> <span m="2740750">to</span> <span m="2740830">the</span>
  <span m="2740930">48th</span> <span m="2741610">is</span> <span
  m="2741830">1,</span> <span m="2745630">right?</span> <span
  m="2747260">I</span> <span m="2747520">take</span> <span
  m="2747820">the</span> <span m="2747940">sixth</span> <span
  m="2748390">power</span> <span m="2748780">of</span> <span
  m="2748930">this</span> <span m="2749710">and</span> <span
  m="2749860">I</span> <span m="2749980">get</span> <span
  m="2750190">that</span> <span m="2750340">w to the</span> <span
  m="2750730">48th</span> <span m="2751380">is</span> <span
  m="2751490">1.</span> <span m="2752170">So</span> <span m="2752410">w
  to</span> <span m="2752740">the</span> <span m="2752860">49th</span> <span
  m="2753460">is</span> <span m="2753730">the</span> <span
  m="2753850">same</span> <span m="2754115">as</span> <span
  m="2754380">w.</span></p><p><span m="2759520">Every</span> <span
  m="2759970">column,</span> <span m="2760450">every</span> <span
  m="2760750">entry,</span> <span m="2761110">in</span> <span
  m="2761230">the</span> <span m="2761320">matrix</span> <span
  m="2761890">is</span> <span m="2762040">a</span> <span
  m="2762100">power</span> <span m="2762520">of</span> <span
  m="2762670">w.</span> <span m="2764700">And</span> <span m="2765300">in</span>
  <span m="2765480">fact,</span> <span m="2765780">that</span> <span
  m="2766200">power</span> <span m="2766590">is</span> <span
  m="2766770">just</span> <span m="2767120">the</span> <span
  m="2767640">column</span> <span m="2768000">number</span> <span
  m="2768310">times</span> <span m="2768650">the</span> <span
  m="2768720">row</span> <span m="2768960">number.</span> <span
  m="2770010">Yeah,</span> <span m="2770520">so</span> <span
  m="2770760">those</span> <span m="2771930">are</span> <span
  m="2772020">the</span> <span m="2772140">good</span> <span
  m="2772380">matrices.</span></p><p><span m="2779860">So,</span> <span
  m="2780070">that</span> <span m="2780400">is</span> <span
  m="2780640">an</span> <span m="2780760">orthogonal</span> <span
  m="2781360">matrix.</span> <span m="2782660">Well,</span> <span
  m="2783100">almost.</span> <span m="2785800">It</span> <span
  m="2785950">has</span> <span m="2786190">orthogonal</span> <span
  m="2786820">columns</span> <span m="2788050">but</span> <span
  m="2788230">it</span> <span m="2788350">doesn't</span> <span
  m="2788770">have</span> <span m="2789070">orthonormal</span> <span
  m="2790240">columns.</span> <span m="2793090">What's</span> <span
  m="2793360">the</span> <span m="2793450">length</span> <span
  m="2794740">of</span> <span m="2794830">that</span> <span
  m="2795040">column</span> <span m="2795400">vector?</span></p><p><span
  m="2797404">STUDENT:</span> <span m="2797653">[INAUDIBLE]</span></p><p><span
  m="2798400">GILBERT STRANG:</span> <span m="2798510">The</span> <span
  m="2798620">square</span> <span m="2798990">root</span> <span
  m="2799110">of</span> <span m="2799230">8,</span> <span
  m="2799990">right.</span> <span m="2801060">I</span> <span
  m="2801210">add</span> <span m="2801450">up</span> <span m="2801630">1</span>
  <span m="2801890">squared</span> <span m="2802420">8</span> <span
  m="2802590">times</span> <span m="2803100">and</span> <span
  m="2803220">I</span> <span m="2803310">take</span> <span
  m="2803550">the</span> <span m="2803670">square</span> <span
  m="2804000">root,</span> <span m="2804270">I</span> <span
  m="2804360">get</span> <span m="2804550">to</span> <span
  m="2804640">the</span> <span m="2804690">square</span> <span
  m="2804990">root</span> <span m="2805110">of</span> <span
  m="2805230">8.</span> <span m="2806950">So,</span> <span
  m="2807240">this</span> <span m="2807510">is</span> <span
  m="2807690">really--</span> <span m="2809880">it's</span> <span
  m="2810590">the</span> <span m="2810720">square</span> <span
  m="2811120">root</span> <span m="2811260">of</span> <span m="2811380">8</span>
  <span m="2812670">times</span> <span m="2813840">an</span> <span
  m="2813990">orthogonal</span> <span m="2814530">matrix.</span></p><p><span
  m="2818670">Of</span> <span m="2818760">course.</span> <span m="2819170">The
  square</span> <span m="2819470">root</span> <span m="2819560">of 8 is</span>
  <span m="2819930">just</span> <span m="2821190">a</span> <span
  m="2822210">number</span> <span m="2822780">to</span> <span
  m="2822960">divide</span> <span m="2823440">out</span> <span
  m="2826440">to</span> <span m="2826590">make</span> <span
  m="2826920">the</span> <span m="2827130">columns</span> <span
  m="2827760">orthonormal</span> <span m="2828780">instead</span> <span
  m="2829180">of</span> <span m="2829290">just</span> <span
  m="2829710">orthogonal.</span> <span m="2831060">But</span> <span
  m="2831780">how</span> <span m="2831990">do</span> <span m="2832170">I</span>
  <span m="2832290">know</span> <span m="2832590">that</span> <span
  m="2832740">those</span> <span m="2833070">are</span> <span
  m="2833220">orthogonal?</span></p><p><span m="2835080">Well,</span> <span
  m="2835320">I</span> <span m="2835410">know</span> <span
  m="2835620">they</span> <span m="2835770">have</span> <span
  m="2836070">to</span> <span m="2836220">be</span> <span m="2836550">but</span>
  <span m="2836760">I'd</span> <span m="2836970">like</span> <span
  m="2837180">to</span> <span m="2837330">see</span> <span m="2837690">it</span>
  <span m="2837870">clearly.</span> <span m="2838890">Why</span> <span
  m="2839220">is</span> <span m="2839370">that</span> <span
  m="2839670">vector</span> <span m="2840120">orthogonal</span> <span
  m="2840840">to</span> <span m="2840990">that</span> <span
  m="2841290">vector?</span> <span m="2844050">First</span> <span
  m="2844380">of</span> <span m="2844500">all,</span> <span
  m="2844950">they</span> <span m="2845130">have</span> <span
  m="2845400">to</span> <span m="2845520">be.</span> <span
  m="2845850">Because</span> <span m="2847230">the</span> <span
  m="2847410">matrix</span> <span m="2848280">is</span> <span
  m="2849510">a</span> <span m="2849630">normal</span> <span
  m="2850080">matrix.</span> <span m="2851220">Normal</span> <span
  m="2851640">matrices</span> <span m="2852360">have</span> <span
  m="2853380">orthogonal--</span> <span m="2854700">oh</span> <span
  m="2854910">yeah,</span> <span m="2856500">how</span> <span
  m="2856710">do</span> <span m="2856860">I</span> <span m="2856950">know</span>
  <span m="2857160">it's</span> <span m="2857340">a</span> <span
  m="2857430">normal</span> <span m="2857820">matrix?</span></p><p><span
  m="2858370">So,</span> <span m="2858480">I</span> <span
  m="2858570">guess</span> <span m="2858840">I</span> <span
  m="2858960">can</span> <span m="2859140">do</span> <span
  m="2859320">the</span> <span m="2859470">test.</span> <span
  m="2864840">If</span> <span m="2865050">I</span> <span m="2865170">have</span>
  <span m="2865380">the</span> <span m="2865500">permutation</span> <span
  m="2866370">P,</span> <span m="2867050">I</span> <span m="2867390">know</span>
  <span m="2867690">that</span> <span m="2867870">P</span> <span
  m="2868110">transpose</span> <span m="2868800">P</span> <span
  m="2869290">equals</span> <span m="2869520">P P</span> <span
  m="2870000">transpose.</span> <span m="2870790">The</span> <span
  m="2871200">permutations</span> <span m="2872130">commute.</span></p><p><span
  m="2874440">So,</span> <span m="2874650">it's</span> <span
  m="2874800">a</span> <span m="2874860">normal</span> <span
  m="2875220">matrix.</span> <span m="2877080">But</span> <span
  m="2877320">I'd</span> <span m="2877470">like</span> <span
  m="2877680">to</span> <span m="2877800">see</span> <span
  m="2878040">directly</span> <span m="2880800">why</span> <span
  m="2881070">is</span> <span m="2881220">the</span> <span
  m="2881340">dot</span> <span m="2881640">product</span> <span
  m="2882150">of</span> <span m="2882540">the</span> <span
  m="2882690">first</span> <span m="2883320">or</span> <span
  m="2883470">the</span> <span m="2883620">0-th</span> <span
  m="2884220">eigenvector</span> <span m="2885060">and</span> <span
  m="2885210">the</span> <span m="2885300">eigenvector</span> <span
  m="2887430">equals</span> <span m="2887850">0?</span> <span
  m="2888810">Let</span> <span m="2888930">me</span> <span
  m="2889050">take</span> <span m="2889350">that</span> <span
  m="2889530">dot</span> <span m="2889770">product.</span> <span
  m="2890400">1</span> <span m="2890640">times</span> <span m="2890940">1</span>
  <span m="2891180">is</span> <span m="2891330">1.</span> <span
  m="2892430">1</span> <span m="2892780">times</span> <span m="2893070">w</span>
  <span m="2893502">is w.</span> <span m="2894798">1</span> <span
  m="2895230">times</span> <span m="2895560">w</span> <span
  m="2895920">squared</span> <span m="2896250">is</span> <span
  m="2896580">w</span> <span m="2896970">squared.</span> <span
  m="2897960">Up</span> <span m="2898140">to</span> <span m="2899010">w</span>
  <span m="2899473">to the</span> <span m="2899936">seventh,</span> <span
  m="2900540">I</span> <span m="2900660">guess</span> <span
  m="2900960">I'm</span> <span m="2901110">going</span> <span
  m="2901230">to</span> <span m="2901740">finish</span> <span
  m="2902190">at,</span> <span m="2903200">equals</span> <span
  m="2903710">0.</span></p><p><span m="2909610">Well,</span> <span
  m="2910240">what's</span> <span m="2910520">that</span> <span
  m="2910720">saying?</span> <span m="2912460">Those</span> <span
  m="2912880">numbers</span> <span m="2920240">are</span> <span
  m="2920410">these</span> <span m="2920710">points</span> <span
  m="2921190">in</span> <span m="2921310">my</span> <span
  m="2921520">picture,</span> <span m="2922630">those</span> <span
  m="2922960">8</span> <span m="2923230">points.</span> <span
  m="2924340">So,</span> <span m="2925060">those</span> <span
  m="2925360">are</span> <span m="2925450">the</span> <span m="2925630">8</span>
  <span m="2925960">numbers</span> <span m="2926500">that</span> <span
  m="2926650">go</span> <span m="2926950">into</span> <span
  m="2928980">that</span> <span m="2929260">column</span> <span
  m="2929710">of--</span> <span m="2930940">that</span> <span
  m="2931190">eigenvector.</span> <span m="2932590">Why</span> <span
  m="2932830">do</span> <span m="2932950">they</span> <span
  m="2933160">add</span> <span m="2933310">to</span> <span m="2933460">0?</span>
  <span m="2935140">How</span> <span m="2935360">do</span> <span
  m="2935480">you</span> <span m="2935600">see</span> <span
  m="2935990">that</span> <span m="2936380">the</span> <span
  m="2936860">sum</span> <span m="2937220">of</span> <span
  m="2937370">those</span> <span m="2937700">8</span> <span
  m="2937910">numbers</span> <span m="2938480">is</span> <span
  m="2938700">0?</span></p><p><span m="2941600">STUDENT:</span> <span
  m="2941840">There's</span> <span m="2942080">symmetry.</span></p><p><span
  m="2943040">GILBERT STRANG:</span> <span m="2943135">Yeah, the</span> <span
  m="2943230">symmetry</span> <span m="2943920">would</span> <span
  m="2944130">do</span> <span m="2944400">it.</span> <span
  m="2945060">When</span> <span m="2945270">I</span> <span
  m="2945450">add</span> <span m="2946860">that</span> <span
  m="2947130">guy</span> <span m="2947550">to</span> <span
  m="2947730">that</span> <span m="2948030">guy,</span> <span m="2949890">w to
  the</span> <span m="2950270">0,</span> <span m="2951030">or</span> <span
  m="2951180">w</span> <span m="2951510">to</span> <span m="2951570">the</span>
  <span m="2951700">eighth,</span> <span m="2952110">or</span> <span
  m="2952770">w</span> <span m="2953130">to the</span> <span
  m="2953490">0.</span> <span m="2954870">Yeah,</span> <span
  m="2955080">when</span> <span m="2955290">I</span> <span
  m="2955440">add</span> <span m="2955680">1</span> <span m="2955980">and</span>
  <span m="2956100">minus</span> <span m="2956490">1, I</span> <span
  m="2956820">get</span> <span m="2957030">0.</span> <span
  m="2957750">When</span> <span m="2957870">I</span> <span
  m="2958020">add</span> <span m="2958170">these</span> <span
  m="2958530">guys</span> <span m="2958860">I</span> <span
  m="2958920">get</span> <span m="2959130">0.</span> <span
  m="2959560">When</span> <span m="2959730">I</span> <span
  m="2959850">add</span> <span m="2959970">these--</span> <span
  m="2961280">by</span> <span m="2961620">pairs.</span> <span
  m="2963420">But</span> <span m="2965280">what</span> <span
  m="2965520">about</span> <span m="2966210">a</span> <span m="2966300">3</span>
  <span m="2966570">by</span> <span m="2966800">3?</span></p><p><span
  m="2974820">So,</span> <span m="2975030">3</span> <span m="2975330">by</span>
  <span m="2975540">3.</span> <span m="2978420">This</span> <span
  m="2978690">would</span> <span m="2978840">be</span> <span
  m="2979530">e</span> <span m="2979830">to</span> <span m="2980010">the</span>
  <span m="2980160">2</span> <span m="2980550">pi</span> <span
  m="2980940">i</span> <span m="2981540">over</span> <span m="2981930">3.</span>
  <span m="2983220">And</span> <span m="2983370">then</span> <span
  m="2983700">this</span> <span m="2984030">would</span> <span
  m="2984270">be</span> <span m="2985710">w</span> <span m="2986190">to</span>
  <span m="2986380">the</span> <span m="2986700">4</span> <span
  m="2987060">pi--</span> <span m="2987820">this would</span> <span
  m="2987990">be</span> <span m="2988170">w</span> <span
  m="2988530">squared,</span> <span m="2989160">e to the</span> <span
  m="2989940">4</span> <span m="2990210">pi</span> <span m="2990465">i</span>
  <span m="2990720">over</span> <span m="2990930">3.</span> <span
  m="2992250">And</span> <span m="2992490">I</span> <span
  m="2992640">believe</span> <span m="2993030">that</span> <span
  m="2993990">those</span> <span m="2994440">3</span> <span
  m="2995100">vectors</span> <span m="2995700">add</span> <span
  m="2996010">to</span> <span m="2996090">0.</span></p><p><span
  m="2999200">And</span> <span m="2999280">therefore</span> <span
  m="2999730">they</span> <span m="2999880">are</span> <span
  m="3000020">orthogonal</span> <span m="3000720">to</span> <span
  m="3000900">the</span> <span m="3001020">1,</span> <span m="3001350">1,</span>
  <span m="3001650">1</span> <span m="3002060">eigenvector</span> <span
  m="3003450">because</span> <span m="3003720">the</span> <span
  m="3003840">dot</span> <span m="3004110">product</span> <span
  m="3004520">will</span> <span m="3005280">just</span> <span
  m="3005460">want</span> <span m="3005670">to</span> <span
  m="3005730">add</span> <span m="3006000">those</span> <span
  m="3006270">3</span> <span m="3006480">numbers.</span> <span
  m="3007480">So</span> <span m="3007560">why</span> <span m="3007890">is</span>
  <span m="3008070">that</span> <span m="3008250">true?</span> <span
  m="3009090">1</span> <span m="3009480">plus</span> <span m="3010100">e</span>
  <span m="3010360">the</span> <span m="3010590">2</span> <span
  m="3010860">pi</span> <span m="3011130">i</span> <span m="3011400">over</span>
  <span m="3011610">3</span> <span m="3012840">plus</span> <span m="3013170">e
  to the</span> <span m="3013530">4</span> <span m="3013860">pi</span> <span
  m="3014130">over</span> <span m="3014370">3</span> <span
  m="3015780">equals</span> <span m="3016440">0.</span></p><p><span
  m="3022260">Last</span> <span m="3023520">minute</span> <span
  m="3023940">of</span> <span m="3024090">class</span> <span
  m="3024510">today,</span> <span m="3024990">we</span> <span
  m="3025230">can</span> <span m="3025410">figure</span> <span
  m="3025740">out</span> <span m="3025890">how</span> <span
  m="3026040">to</span> <span m="3026160">do</span> <span
  m="3026430">that.</span> <span m="3027420">Well,</span> <span
  m="3027720">I</span> <span m="3027840">could</span> <span
  m="3028020">get</span> <span m="3028200">a</span> <span
  m="3028260">formula</span> <span m="3028740">for--</span> <span
  m="3029590">that</span> <span m="3029890">sum</span> <span
  m="3031210">is</span> <span m="3031470">1 and</span> <span
  m="3031860">I</span> <span m="3031980">could</span> <span
  m="3032190">get</span> <span m="3032370">a</span> <span
  m="3032430">closed</span> <span m="3032910">form</span> <span
  m="3033240">and</span> <span m="3033360">check</span> <span
  m="3033680">that</span> <span m="3033820">I</span> <span
  m="3033930">get</span> <span m="3034080">the</span> <span
  m="3034230">answer</span> <span m="3034540">0.</span> <span
  m="3035260">The</span> <span m="3035400">quick</span> <span
  m="3035850">way</span> <span m="3036090">to</span> <span
  m="3036210">see</span> <span m="3036480">it</span> <span m="3036630">is</span>
  <span m="3036780">maybe</span> <span m="3038010">suppose</span> <span
  m="3038610">I</span> <span m="3038760">multiply</span> <span
  m="3039510">by</span> <span m="3044510">e</span> <span m="3044780">to</span>
  <span m="3044880">the</span> <span m="3044980">2</span> <span
  m="3045140">pi</span> <span m="3045395">i</span> <span m="3045650">over</span>
  <span m="3045860">3.</span></p><p><span m="3048530">So,</span> <span
  m="3048680">I</span> <span m="3048770">multiply</span> <span
  m="3049160">every</span> <span m="3049400">term,</span> <span
  m="3049760">so</span> <span m="3049940">that's</span> <span m="3050240">e
  to</span> <span m="3050540">the</span> <span m="3050780">2 pi</span> <span
  m="3051035">i</span> <span m="3051290">over</span> <span m="3051470">3.</span>
  <span m="3052730">e</span> <span m="3053090">to the</span> <span
  m="3053420">4</span> <span m="3053690">pi i</span> <span
  m="3054170">over</span> <span m="3054410">3.</span> <span
  m="3056450">And</span> <span m="3056800">e to the</span> <span
  m="3057160">6</span> <span m="3057590">pi i</span> <span
  m="3058070">over</span> <span m="3058280">3.</span> <span
  m="3060530">OK,</span> <span m="3060920">what</span> <span
  m="3061100">do</span> <span m="3061220">I</span> <span
  m="3061340">learn</span> <span m="3061610">from</span> <span
  m="3061820">this?</span></p><p><span m="3063060">STUDENT:</span> <span
  m="3063272">[INAUDIBLE]</span></p><p><span m="3064760">GILBERT STRANG:</span>
  <span m="3064880">It's</span> <span m="3065045">the</span> <span
  m="3065090">same</span> <span m="3065510">because</span> <span
  m="3065960">e</span> <span m="3066140">to</span> <span m="3066210">the</span>
  <span m="3066350">6</span> <span m="3066650">pi i</span> <span
  m="3066890">over</span> <span m="3067160">3</span> <span
  m="3067570">is?</span></p><p><span m="3068340">STUDENT:</span> <span
  m="3068532">1.</span></p><p><span m="3069110">GILBERT STRANG:</span> <span
  m="3069305">Is 1.</span> <span m="3071480">That's</span> <span
  m="3071790">2</span> <span m="3072020">pi i,</span> <span
  m="3072760">so</span> <span m="3072890">that's</span> <span
  m="3073570">1.</span> <span m="3074210">So</span> <span m="3074390">I</span>
  <span m="3074480">got</span> <span m="3074660">the</span> <span
  m="3074780">same</span> <span m="3075140">sum,</span> <span
  m="3075500">1</span> <span m="3075830">plus</span> <span
  m="3076100">this</span> <span m="3076310">plus</span> <span
  m="3076620">this.</span> <span m="3077440">This plus this</span> <span
  m="3078110">plus</span> <span m="3078410">1.</span></p><p><span
  m="3079370">So</span> <span m="3079550">I</span> <span m="3079640">got</span>
  <span m="3079820">the</span> <span m="3079940">same</span> <span
  m="3080360">sum</span> <span m="3080840">when</span> <span
  m="3081020">I</span> <span m="3081110">multiplied</span> <span
  m="3081770">by</span> <span m="3082400">that</span> <span
  m="3082640">number.</span> <span m="3084710">And</span> <span
  m="3084920">that</span> <span m="3085160">sum</span> <span
  m="3085460">has</span> <span m="3085730">to</span> <span m="3085850">be</span>
  <span m="3086030">0.</span> <span m="3087110">I</span> <span
  m="3087200">can't</span> <span m="3087530">get</span> <span
  m="3087710">the</span> <span m="3087860">same</span> <span
  m="3088310">sum--</span> <span m="3089570">I</span> <span
  m="3089690">can't</span> <span m="3089960">multiply</span> <span
  m="3090500">by</span> <span m="3090710">this</span> <span
  m="3091100">and</span> <span m="3091580">get</span> <span
  m="3091820">the</span> <span m="3091940">same</span> <span
  m="3092330">answer</span> <span m="3092790">unless</span> <span
  m="3093970">I'm</span> <span m="3094160">multiplying</span> <span
  m="3094940">0.</span> <span m="3095450">So</span> <span
  m="3095690">that</span> <span m="3095990">shows</span> <span
  m="3096440">me</span> <span m="3096680">that</span> <span
  m="3100250">when</span> <span m="3100550">n</span> <span m="3100760">is</span>
  <span m="3100940">odd</span> <span m="3101330">I</span> <span
  m="3101480">also</span> <span m="3101870">have</span> <span
  m="3103520">those</span> <span m="3103980">n</span> <span
  m="3104210">numbers</span> <span m="3104690">adding</span> <span
  m="3104990">to</span> <span m="3105140">0.</span></p><p><span
  m="3105740">OK,</span> <span m="3106850">those</span> <span
  m="3107270">are</span> <span m="3107360">the</span> <span
  m="3107510">basic--</span> <span m="3108740">the</span> <span
  m="3109160">beautiful</span> <span m="3109640">picture</span> <span
  m="3110240">of</span> <span m="3111590">the</span> <span
  m="3111800">eigenvalues,</span> <span m="3114410">the</span> <span
  m="3114740">eigenvectors</span> <span m="3115730">being</span> <span
  m="3116000">orthogonal.</span> <span m="3117620">And</span> <span
  m="3117920">then</span> <span m="3118370">the</span> <span
  m="3119120">actual</span> <span m="3119600">details</span> <span
  m="3120350">here</span> <span m="3121760">of</span> <span
  m="3122690">what</span> <span m="3122930">those</span> <span
  m="3123230">eigenvectors</span> <span m="3124070">are.</span> <span
  m="3124460">OK,</span> <span m="3125200">good.</span> <span
  m="3125750">Hope</span> <span m="3125960">you</span> <span
  m="3126020">have</span> <span m="3126170">a</span> <span
  m="3126230">good</span> <span m="3126470">weekend,</span> <span
  m="3127440">and</span> <span m="3128870">we've</span> <span
  m="3129080">just</span> <span m="3129380">got</span> <span
  m="3130070">a</span> <span m="3130100">week</span> <span
  m="3130460">and</span> <span m="3130580">a</span> <span
  m="3130640">half</span> <span m="3130940">left</span> <span
  m="3131360">of</span> <span m="3131540">class.</span></p><p><span
  m="3134060">I</span> <span m="3134690">may</span> <span
  m="3134930">probably</span> <span m="3135320">have</span> <span
  m="3135470">one</span> <span m="3135710">more</span> <span
  m="3135890">thing</span> <span m="3136160">to</span> <span
  m="3136250">do</span> <span m="3136430">about</span> <span
  m="3136730">Fourier</span> <span m="3137310">and</span> <span
  m="3137420">then</span> <span m="3137570">we'll</span> <span
  m="3137720">come</span> <span m="3137960">back</span> <span
  m="3138260">to</span> <span m="3138920">other</span> <span
  m="3139190">topics.</span> <span m="3139760">But</span> <span
  m="3141050">ask</span> <span m="3141380">any</span> <span
  m="3141620">questions,</span> <span m="3144130">topics</span> <span
  m="3144680">that</span> <span m="3144800">you'd</span> <span
  m="3144980">like</span> <span m="3145220">to</span> <span
  m="3145340">see</span> <span m="3145640">included</span> <span
  m="3146300">here.</span> <span m="3147590">We're</span> <span
  m="3148160">closing</span> <span m="3148730">out</span> <span
  m="3149150">18.065</span> <span m="3151040">while</span> <span
  m="3151280">you</span> <span m="3151550">guys</span> <span
  m="3151910">do</span> <span m="3152090">the</span> <span
  m="3152210">projects.</span> <span m="3153280">OK,</span> <span
  m="3153950">thank</span> <span m="3154250">you.</span></p>
uid: c2ad1c7aa4fbb2b871741c8e96fa2cf7
type: course
layout: video
---
