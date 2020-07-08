---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine introduces
  analysis techniques for data structures, and the implementation of algorithms
  based on this analysis.</p><p><strong>Instructors:</strong> Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: 3MpzavN3Mco
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8eee6cff181e4ef6e5247ee2596ba3a8
  - id: 3MpzavN3Mco.srt
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-5-amortization-amortized-analysis/3MpzavN3Mco.srt
    title: 3play caption file
    type: null
    uid: e550476a2358b500524cce8bab6d42c3
  - id: 3MpzavN3Mco.pdf
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-5-amortization-amortized-analysis/3MpzavN3Mco.pdf
    title: 3play pdf file
    type: null
    uid: c76fdd33125707943f4c9a6556f6295e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 147b00740f24ae93b2ff0cf908cd8b47
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9bb9c8958c6d40e59f10647acc4a864b
  - id: Video-YouTube-Stream
    media_location: 3MpzavN3Mco
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: Video-YouTube-Stream
    type: Video
    uid: 353d4f01a9dc8ee70506cea2e0ca2241
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/3MpzavN3Mco/default.jpg'
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 43fc9694d0bb657db4d98e80251ec1fc
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: Video-iTunes U-MP4
    type: Video
    uid: ce5a3048debe677a220c73f9c90a2e46
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec05_300k.mp4'
    parent_uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 27c4fa1bf2c3cff1583e5fee27719e31
inline_embed_id: '50581871lecture5:amortization:amortizedanalysis81019008'
order_index: 147
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-5-amortization-amortized-analysis
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-5-amortization-amortized-analysis
title: 'Lecture 5: Amortization: Amortized Analysis'
transcript: >-
  <p><span m="40">The</span> <span m="170">following</span> <span
  m="620">content</span> <span m="1210">is</span> <span m="1320">provided</span>
  <span m="1780">under</span> <span m="2029">a</span> <span
  m="2080">Creative</span> <span m="2480">Commons</span> <span
  m="2900">license.</span> <span m="4010">Your</span> <span
  m="4180">support</span> <span m="4730">will</span> <span m="4880">help</span>
  <span m="5090">MIT</span> <span m="5550">OpenCourseWare</span> <span
  m="6340">continue</span> <span m="6850">to</span> <span m="6970">offer</span>
  <span m="7370">high</span> <span m="7590">quality</span> <span
  m="8100">educational</span> <span m="8740">resources</span> <span
  m="9310">for</span> <span m="9500">free.</span> <span m="10700">To</span>
  <span m="10720">make</span> <span m="10930">a</span> <span
  m="10970">donation</span> <span m="11660">or</span> <span
  m="11900">view</span> <span m="12360">additional</span> <span
  m="12800">materials</span> <span m="13320">from</span> <span
  m="13510">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14440">courses,</span> <span m="15510">visit</span> <span
  m="15810">MIT</span> <span m="16190">OpenCourseWare</span> <span
  m="17240">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21120">ERIK DEMAINE: All</span> <span m="21190">right.</span> <span
  m="21410">Welcome</span> <span m="21720">back</span> <span m="21950">to</span>
  <span m="22030">6046.</span> <span m="23870">Today</span> <span
  m="24420">we</span> <span m="24620">continue</span> <span m="25180">our</span>
  <span m="25350">theme</span> <span m="26070">of</span> <span
  m="26200">data</span> <span m="26450">structures</span> <span
  m="28030">but</span> <span m="28090">this</span> <span m="28230">time,</span>
  <span m="28510">instead</span> <span m="28760">of</span> <span
  m="28960">doing</span> <span m="29360">a</span> <span m="29480">fancy</span>
  <span m="29920">cool</span> <span m="30120">data</span> <span
  m="30340">structure,</span> <span m="30700">we're</span> <span
  m="30820">going</span> <span m="30970">to</span> <span m="31060">look</span>
  <span m="31310">at</span> <span m="31630">fancy</span> <span
  m="31970">cool</span> <span m="32750">analysis</span> <span
  m="33370">techniques</span> <span m="33830">for</span> <span
  m="33950">data</span> <span m="34200">structures.</span> <span
  m="34850">And</span> <span m="34940">these</span> <span m="35140">are</span>
  <span m="35220">useful</span> <span m="35570">for</span> <span
  m="35780">tons</span> <span m="36200">of</span> <span
  m="36290">different</span> <span m="36560">data</span> <span
  m="36740">structures,</span> <span m="37880">especially</span> <span
  m="38490">in</span> <span m="38620">the</span> <span m="38690">context</span>
  <span m="39260">when</span> <span m="39390">you're</span> <span
  m="39500">using</span> <span m="39790">a</span> <span m="39850">data</span>
  <span m="40130">structure</span> <span m="41800">to</span> <span
  m="42140">implement</span> <span m="42570">an</span> <span
  m="42650">algorithm.</span></p><p><span m="44380">For</span> <span
  m="44490">example,</span> <span m="45860">in</span> <span
  m="46440">Dijkstra,</span> <span m="47710">when</span> <span
  m="47890">you</span> <span m="47970">learn</span> <span
  m="48130">Dijkstra's</span> <span m="48520">algorithm,</span> <span
  m="48950">you</span> <span m="49020">had</span> <span m="49140">lots</span>
  <span m="49380">of</span> <span m="49470">different</span> <span
  m="49800">heap</span> <span m="50100">structures</span> <span
  m="50660">you</span> <span m="50770">could</span> <span m="51090">use</span>
  <span m="52400">for</span> <span m="52630">the</span> <span
  m="52700">priority</span> <span m="53160">queue</span> <span
  m="53640">in</span> <span m="54446">Dijkstra,</span> <span
  m="54850">and</span> <span m="54940">they</span> <span m="55020">gave</span>
  <span m="55210">different</span> <span m="55510">running</span> <span
  m="55750">times</span> <span m="56010">with</span> <span
  m="56070">Dijkstra.</span> <span m="57930">But</span> <span
  m="58150">the</span> <span m="58220">key</span> <span m="58480">thing</span>
  <span m="59080">in</span> <span m="59390">that</span> <span
  m="59650">context</span> <span m="60230">is</span> <span m="60390">that</span>
  <span m="60530">you</span> <span m="60630">cared</span> <span
  m="60950">about</span> <span m="61250">the</span> <span m="61330">total</span>
  <span m="61730">running</span> <span m="61980">time</span> <span
  m="62230">of</span> <span m="62300">the</span> <span
  m="62380">algorithm,</span> <span m="64300">less</span> <span
  m="64830">than</span> <span m="65000">you</span> <span m="65090">cared</span>
  <span m="65390">about</span> <span m="65620">the</span> <span
  m="65730">individual</span> <span m="66370">running</span> <span
  m="66630">time</span> <span m="66860">of</span> <span m="66970">each</span>
  <span m="67190">operation.</span></p><p><span m="68370">That's</span> <span
  m="68620">what</span> <span m="69220">amortization</span> <span
  m="69970">is</span> <span m="70080">about.</span> <span m="70910">It's,</span>
  <span m="71270">I</span> <span m="71390">guess,</span> <span
  m="71650">a</span> <span m="71700">technique</span> <span
  m="72140">from</span> <span m="72620">financial</span> <span
  m="73210">analysis,</span> <span m="73910">but</span> <span
  m="74840">we've</span> <span m="75180">appropriated</span> <span
  m="75900">it</span> <span m="76070">in</span> <span m="76150">computer</span>
  <span m="76540">science</span> <span m="76910">as</span> <span
  m="77030">an</span> <span m="77110">analysis</span> <span
  m="77620">technique</span> <span m="77980">to</span> <span
  m="78080">say,</span> <span m="78240">well,</span> <span
  m="78940">let's</span> <span m="79110">not</span> <span m="79280">worry</span>
  <span m="79480">about</span> <span m="79850">every</span> <span
  m="80090">single</span> <span m="80370">operation</span> <span
  m="81490">worst</span> <span m="81810">case</span> <span
  m="82020">cost,</span> <span m="82360">let's</span> <span
  m="82490">just</span> <span m="82650">worry</span> <span
  m="82810">about</span> <span m="83040">the</span> <span m="83120">total</span>
  <span m="83970">operation,</span> <span m="85140">the</span> <span
  m="85280">sum</span> <span m="85630">of</span> <span m="85740">all</span>
  <span m="85850">the</span> <span m="85970">operations</span> <span
  m="86690">cost.</span> <span m="87640">That's</span> <span
  m="88190">the</span> <span m="88300">whole</span> <span m="88490">idea</span>
  <span m="88680">of</span> <span m="88760">amortization,</span> <span
  m="89540">but</span> <span m="89800">there's</span> <span m="89950">a</span>
  <span m="90020">lot</span> <span m="90270">of</span> <span
  m="90370">different</span> <span m="90650">ways</span> <span
  m="90840">to</span> <span m="90940">do</span> <span m="91130">it.</span> <span
  m="91650">We're</span> <span m="91660">going</span> <span m="91780">to</span>
  <span m="91850">cover</span> <span m="92090">four</span> <span
  m="92410">different</span> <span m="92710">methods</span> <span
  m="93050">for</span> <span m="93150">doing</span> <span m="93430">it,</span>
  <span m="93910">and</span> <span m="94550">three-ish</span> <span
  m="96040">examples</span> <span m="96710">of</span> <span
  m="97090">doing</span> <span m="97390">it</span> <span
  m="97610">today.</span></p><p><span m="98390">You've</span> <span
  m="98510">seen</span> <span m="98700">some</span> <span
  m="99210">essentially</span> <span m="99700">in</span> <span
  m="99850">recitation</span> <span m="100490">last</span> <span
  m="100770">time,</span> <span m="102180">and</span> <span
  m="102370">you've</span> <span m="102480">seen</span> <span
  m="102660">a</span> <span m="102720">little</span> <span m="102970">bit</span>
  <span m="103210">in</span> <span m="103570">6006,</span> <span
  m="104460">so</span> <span m="104580">let</span> <span m="104750">me</span>
  <span m="104860">first</span> <span m="105690">remind</span> <span
  m="106190">you</span> <span m="106783">of</span> <span m="107490">the</span>
  <span m="107670">example</span> <span m="108110">of</span> <span
  m="108250">table</span> <span m="108570">doubling</span> <span
  m="110040">from</span> <span m="110240">6006.</span> <span
  m="116330">This</span> <span m="116500">came</span> <span m="116740">up</span>
  <span m="116910">in</span> <span m="116990">the</span> <span
  m="117060">context</span> <span m="117530">of</span> <span
  m="117650">hash</span> <span m="117970">tables.</span> <span
  m="119270">As</span> <span m="119480">you</span> <span m="119580">may</span>
  <span m="119740">recall,</span> <span m="120280">if</span> <span
  m="120610">you</span> <span m="121080">store</span> <span m="121547">n</span>
  <span m="122014">items</span> <span m="124910">in</span> <span
  m="125170">a</span> <span m="125220">hash</span> <span m="125560">table</span>
  <span m="127990">of</span> <span m="128479">size</span> <span
  m="128940">m--</span> <span m="130660">there</span> <span
  m="130875">are</span> <span m="131090">m</span> <span m="131270">slots</span>
  <span m="131630">in</span> <span m="131710">the</span> <span
  m="131770">table,</span> <span m="132280">let's</span> <span
  m="132390">say,</span> <span m="132840">using</span> <span
  m="133350">chaining--</span> <span m="134580">hashing</span> <span
  m="134940">with</span> <span m="135040">chaining--</span> <span
  m="135860">then</span> <span m="136150">we</span> <span m="136290">got</span>
  <span m="137530">an</span> <span m="137690">expected</span> <span
  m="138180">cost</span> <span m="145480">constant</span> <span
  m="146290">plus</span> <span m="147270">the</span> <span
  m="147380">load</span> <span m="147650">factor,</span> <span
  m="148280">size</span> <span m="148630">of</span> <span m="148680">the</span>
  <span m="148730">table</span> <span m="149090">divided</span> <span
  m="149520">by</span> <span m="149780">the</span> <span
  m="149870">number</span> <span m="150120">of</span> <span
  m="150210">items.</span></p><p><span m="151680">So</span> <span
  m="151910">we</span> <span m="152030">wanted</span> <span m="152280">to</span>
  <span m="152370">get</span> <span m="152540">constant</span> <span
  m="153180">expected,</span> <span m="154030">and</span> <span
  m="154130">so</span> <span m="154240">we</span> <span m="154340">wanted</span>
  <span m="154610">this</span> <span m="154770">to</span> <span
  m="154880">always</span> <span m="155240">be,</span> <span
  m="156250">at</span> <span m="156430">most,</span> <span m="156710">a</span>
  <span m="156750">constant.</span> <span m="158220">I</span> <span
  m="158320">guess</span> <span m="158510">we</span> <span
  m="158590">could</span> <span m="158730">handle</span> <span
  m="159000">a</span> <span m="159080">larger</span> <span
  m="159450">table</span> <span m="159770">size,</span> <span
  m="160250">although</span> <span m="160350">then</span> <span
  m="160540">we</span> <span m="160870">are</span> <span
  m="161060">unhappy</span> <span m="161500">about</span> <span
  m="161720">our</span> <span m="161820">space,</span> <span
  m="162600">but</span> <span m="162720">we</span> <span
  m="162800">definitely</span> <span m="163170">want</span> <span
  m="163440">m</span> <span m="163650">to</span> <span m="163800">be</span>
  <span m="163990">at</span> <span m="164080">least</span> <span
  m="164370">around</span> <span m="164800">n</span> <span m="165520">so</span>
  <span m="165780">that</span> <span m="165930">this</span> <span
  m="166350">works</span> <span m="166640">out</span> <span m="166800">to</span>
  <span m="166870">order</span> <span m="167080">one.</span> <span
  m="168770">And</span> <span m="169170">the</span> <span
  m="169230">solution</span> <span m="169560">for</span> <span
  m="169640">doing</span> <span m="169880">that</span> <span
  m="170070">was</span> <span m="170490">table</span> <span
  m="170830">doubling.</span> <span m="171230">Whenever</span> <span
  m="171530">the</span> <span m="171610">table</span> <span m="171850">is</span>
  <span m="172090">too</span> <span m="172220">big,</span> <span
  m="172850">double</span> <span m="173240">it--</span> <span
  m="173640">or</span> <span m="173790">sorry--</span> <span
  m="173890">whenever</span> <span m="174180">the</span> <span
  m="174240">table</span> <span m="174460">is</span> <span m="174530">too</span>
  <span m="174660">small</span> <span m="175025">and</span> <span
  m="175390">we</span> <span m="175540">have</span> <span m="175640">too</span>
  <span m="175820">many</span> <span m="176040">items,</span> <span
  m="176870">double</span> <span m="177150">the</span> <span
  m="177220">size</span> <span m="177510">of</span> <span m="177570">the</span>
  <span m="177640">table.</span></p><p><span m="181260">If</span> <span
  m="182710">n--</span> <span m="187190">n</span> <span m="187510">is</span>
  <span m="187660">the</span> <span m="187750">thing</span> <span
  m="188010">that</span> <span m="188120">we</span> <span
  m="188220">can't</span> <span m="188460">control.</span> <span
  m="188850">That's</span> <span m="188955">the</span> <span
  m="189060">number</span> <span m="189250">of</span> <span
  m="189330">items</span> <span m="189670">somebody</span> <span
  m="189980">is</span> <span m="190080">inserting</span> <span
  m="190510">into</span> <span m="190690">the</span> <span
  m="190800">table.</span> <span m="191790">If</span> <span m="191950">n</span>
  <span m="192110">grows</span> <span m="192275">to</span> <span
  m="192440">the</span> <span m="192560">value</span> <span m="193680">to</span>
  <span m="193840">match</span> <span m="194150">m,</span> <span
  m="195200">then</span> <span m="198010">double</span> <span
  m="198390">m.</span> <span m="202400">So</span> <span m="202540">m</span>
  <span m="203160">prime</span> <span m="204450">equals</span> <span
  m="204810">2m,</span> <span m="207680">and</span> <span m="208750">to</span>
  <span m="208940">double</span> <span m="209260">the</span> <span
  m="209350">table</span> <span m="209650">size,</span> <span
  m="209950">you</span> <span m="210040">have</span> <span m="210160">to</span>
  <span m="210240">allocate</span> <span m="210700">a</span> <span
  m="210740">new</span> <span m="211070">array</span> <span m="211260">of</span>
  <span m="211360">double</span> <span m="211600">the</span> <span
  m="211660">size</span> <span m="212060">and</span> <span
  m="212470">copy</span> <span m="212910">over</span> <span
  m="213240">all</span> <span m="213410">the</span> <span
  m="213530">items,</span> <span m="214210">and</span> <span
  m="214450">that</span> <span m="214580">involves</span> <span
  m="214870">hashing.</span> <span m="215750">But</span> <span
  m="216370">overall</span> <span m="216820">this</span> <span
  m="216990">will</span> <span m="217100">take</span> <span
  m="218320">order,</span> <span m="219220">size</span> <span
  m="219610">of</span> <span m="219700">the</span> <span
  m="219780">table,</span> <span m="220790">work.</span></p><p><span
  m="222320">Doesn't</span> <span m="222620">matter</span> <span
  m="223140">whether</span> <span m="223340">I'm</span> <span
  m="224280">using</span> <span m="224570">m</span> <span m="224735">or</span>
  <span m="224900">m</span> <span m="225010">prime</span> <span
  m="225300">here,</span> <span m="225470">because</span> <span
  m="225650">they're</span> <span m="225740">within</span> <span
  m="225960">a</span> <span m="226000">constant</span> <span
  m="226340">factor</span> <span m="226610">of</span> <span
  m="226680">each</span> <span m="226870">other,</span> <span
  m="227760">and</span> <span m="228200">that's</span> <span
  m="228430">bad.</span> <span m="228770">Linear</span> <span
  m="229090">time</span> <span m="229500">to</span> <span m="229630">do</span>
  <span m="229760">an</span> <span m="229830">insertion</span> <span
  m="230270">is</span> <span m="230380">clearly</span> <span
  m="230700">bad.</span> <span m="231110">This</span> <span m="231280">is</span>
  <span m="231380">all</span> <span m="231620">during</span> <span
  m="231920">one</span> <span m="232150">insertion</span> <span
  m="232570">operation</span> <span m="233070">that</span> <span
  m="233190">this</span> <span m="233360">would</span> <span
  m="233450">happen,</span> <span m="234300">but</span> <span
  m="234790">overall</span> <span m="235280">it's</span> <span
  m="235400">not</span> <span m="235530">going</span> <span m="235650">to</span>
  <span m="235720">be</span> <span m="235800">bad,</span> <span
  m="236090">because</span> <span m="236390">you</span> <span
  m="236500">only</span> <span m="236730">double</span> <span
  m="237080">log</span> <span m="237210">n</span> <span
  m="237470">times.</span></p><p><span m="238550">And</span> <span
  m="238620">if</span> <span m="238740">you</span> <span m="238870">look</span>
  <span m="239100">at</span> <span m="239390">the</span> <span
  m="240600">total</span> <span m="240980">cost--</span> <span
  m="246130">so</span> <span m="246370">maybe</span> <span m="246405">you</span>
  <span m="246440">think,</span> <span m="246690">oh,</span> <span
  m="247070">is</span> <span m="247200">it</span> <span m="247360">log</span>
  <span m="247495">n</span> <span m="247900">per</span> <span
  m="248070">operation,</span> <span m="249130">but</span> <span
  m="249260">it's</span> <span m="249370">not</span> <span m="249530">so</span>
  <span m="249650">bad</span> <span m="250330">because</span> <span
  m="251390">total</span> <span m="251660">cost</span> <span
  m="252040">for</span> <span m="252420">n</span> <span
  m="252690">insertions</span> <span m="254070">starting</span> <span
  m="254410">from</span> <span m="254600">an</span> <span
  m="254750">empty</span> <span m="255690">structure</span> <span
  m="258440">is</span> <span m="259300">something</span> <span
  m="259640">like</span> <span m="259850">2</span> <span m="260089">to</span>
  <span m="260149">the</span> <span m="260209">0--</span> <span
  m="261352">this</span> <span m="261457">is</span> <span m="261563">a</span>
  <span m="261668">big</span> <span m="261774">theta</span> <span
  m="262196">outside--</span> <span m="263040">2</span> <span
  m="263146">to</span> <span m="263253">the</span> <span m="263360">1,</span>
  <span m="263600">2</span> <span m="264050">to</span> <span
  m="264285">the</span> <span m="264520">2.</span> <span m="264890">If</span>
  <span m="264990">we're</span> <span m="265090">only</span> <span
  m="265370">doing</span> <span m="265600">insertions,</span> <span
  m="267150">this</span> <span m="267360">is</span> <span
  m="267500">great.</span> <span m="268920">2</span> <span m="269170">to</span>
  <span m="269250">the</span> <span m="269320">log</span> <span
  m="269550">n.</span> <span m="270950">This</span> <span m="271160">is</span>
  <span m="271320">a</span> <span m="271360">geometric</span> <span
  m="271830">series</span> <span m="272742">and</span> <span
  m="273200">so</span> <span m="273370">this</span> <span m="273640">is</span>
  <span m="275290">order</span> <span m="275610">n.</span> <span
  m="278810">Theta</span> <span m="279090">head</span> <span m="279530">I</span>
  <span m="279630">guess.</span></p><p><span m="282180">So</span> <span
  m="283260">to</span> <span m="283450">do</span> <span m="283820">n</span>
  <span m="284100">insertions,</span> <span m="284770">cost</span> <span
  m="285160">theta</span> <span m="285390">n,</span> <span m="286090">so</span>
  <span m="286370">we'd</span> <span m="286520">like</span> <span
  m="286710">to</span> <span m="286780">say</span> <span m="287890">the</span>
  <span m="288260">amortized</span> <span m="288860">cost</span> <span
  m="290430">per</span> <span m="290660">operation</span> <span
  m="296520">is</span> <span m="296660">constant,</span> <span
  m="305800">because</span> <span m="308750">we</span> <span
  m="308840">did</span> <span m="309030">n</span> <span
  m="309170">operations.</span> <span m="309770">Total</span> <span
  m="309990">cost</span> <span m="310270">was</span> <span m="310390">n,</span>
  <span m="310640">so</span> <span m="310930">sort</span> <span
  m="311100">of</span> <span m="311160">on</span> <span
  m="311330">average</span> <span m="311790">per</span> <span
  m="311920">operation,</span> <span m="312440">that</span> <span
  m="312610">was</span> <span m="312680">the</span> <span m="312750">only</span>
  <span m="312940">constant.</span> <span m="314120">So</span> <span
  m="314250">this</span> <span m="314470">is</span> <span m="315380">the</span>
  <span m="315470">sense</span> <span m="315760">in</span> <span
  m="315830">which</span> <span m="315990">hash</span> <span
  m="316210">tables</span> <span m="316540">are</span> <span
  m="316610">constant,</span> <span m="317100">expected,</span> <span
  m="317680">amortized.</span> <span m="319920">And</span> <span
  m="320480">we'll</span> <span m="320760">get</span> <span
  m="320960">back</span> <span m="321220">to</span> <span
  m="321310">hashing</span> <span m="321690">in</span> <span m="321790">a</span>
  <span m="322040">future</span> <span m="322370">lecture,</span> <span
  m="323000">probably</span> <span m="323510">I</span> <span
  m="323560">think</span> <span m="323870">lecture</span> <span
  m="324130">8,</span> <span m="325510">but</span> <span m="325850">for</span>
  <span m="325950">now</span> <span m="326120">we're</span> <span
  m="326210">just</span> <span m="326350">going</span> <span
  m="326470">to</span> <span m="326530">think</span> <span
  m="326720">about</span> <span m="327050">this</span> <span
  m="327260">as</span> <span m="327390">a</span> <span m="327460">general</span>
  <span m="328160">thing</span> <span m="328430">where</span> <span
  m="328560">you</span> <span m="328680">need</span> <span
  m="328870">table</span> <span m="329150">doubling,</span> <span
  m="330530">then</span> <span m="330770">this</span> <span
  m="330960">gives</span> <span m="331180">you</span> <span m="332820">a</span>
  <span m="333020">fast</span> <span m="333440">way</span> <span
  m="333580">to</span> <span m="333670">insert</span> <span
  m="334050">into</span> <span m="334280">a</span> <span
  m="334330">table.</span> <span m="334720">Later</span> <span
  m="335020">we'll</span> <span m="335150">think</span> <span
  m="335340">about</span> <span m="335630">deleting</span> <span
  m="336020">from</span> <span m="336170">a</span> <span m="336210">table</span>
  <span m="336540">and</span> <span m="336640">keeping</span> <span
  m="336950">the</span> <span m="337040">space</span> <span
  m="337430">not</span> <span m="337650">too</span> <span m="337790">big,</span>
  <span m="338880">but</span> <span m="339160">that's</span> <span
  m="339390">a</span> <span m="339440">starting</span> <span
  m="339740">point.</span></p><p><span m="341330">This</span> <span
  m="341480">is</span> <span m="341580">an</span> <span
  m="341670">example</span> <span m="342250">of</span> <span m="342400">a</span>
  <span m="342470">general</span> <span m="342780">technique</span> <span
  m="343170">called</span> <span m="343460">the</span> <span
  m="343580">aggregate</span> <span m="344020">method,</span> <span
  m="345400">which</span> <span m="345570">is</span> <span
  m="345710">probably</span> <span m="346020">the</span> <span
  m="346130">weakest</span> <span m="348600">method</span> <span
  m="348980">for</span> <span m="349870">doing</span> <span
  m="350100">amortization</span> <span m="353680">but</span> <span
  m="353830">maybe</span> <span m="354070">the</span> <span
  m="354150">most</span> <span m="354410">intuitive</span> <span
  m="354790">one.</span> <span m="361160">So</span> <span m="361350">the</span>
  <span m="361410">aggregate</span> <span m="361760">method</span> <span
  m="362070">says,</span> <span m="362390">well,</span> <span
  m="365520">we</span> <span m="366050">do</span> <span m="366220">some</span>
  <span m="366470">sequence</span> <span m="366840">of</span> <span
  m="366950">operations.</span> <span m="367620">Let's</span> <span
  m="367690">say,</span> <span m="367880">in</span> <span
  m="367970">general,</span> <span m="368380">there</span> <span
  m="368400">are</span> <span m="368450">k</span> <span
  m="368780">operations.</span> <span m="369820">Measure</span> <span
  m="370240">the</span> <span m="370330">total</span> <span
  m="370670">cost</span> <span m="371050">of</span> <span
  m="371140">those</span> <span m="371320">operations,</span> <span
  m="378100">divide</span> <span m="378640">by</span> <span m="378860">k,</span>
  <span m="380700">that's</span> <span m="380970">the</span> <span
  m="381070">amortized</span> <span m="381480">cost</span> <span
  m="381710">per</span> <span m="381830">operation.</span></p><p><span
  m="395190">You</span> <span m="395380">can</span> <span
  m="395540">think</span> <span m="395720">of</span> <span
  m="395810">this</span> <span m="395990">as</span> <span m="396120">a</span>
  <span m="396170">definition,</span> <span m="396810">but</span> <span
  m="396930">it's</span> <span m="397060">not</span> <span
  m="397260">actually</span> <span m="397560">going</span> <span
  m="397730">to</span> <span m="397810">be</span> <span m="397930">our</span>
  <span m="398030">definition</span> <span m="398450">of</span> <span
  m="398540">amortized</span> <span m="398940">cost.</span> <span
  m="399280">We're</span> <span m="399370">going</span> <span
  m="399500">to</span> <span m="399580">use</span> <span m="399720">a</span>
  <span m="399770">more</span> <span m="400050">flexible</span> <span
  m="400550">definition,</span> <span m="401600">but</span> <span
  m="401770">for</span> <span m="401900">simple</span> <span
  m="402250">examples</span> <span m="402660">like</span> <span
  m="402820">this,</span> <span m="403050">it's</span> <span m="403190">a</span>
  <span m="403230">fine</span> <span m="403540">definition,</span> <span
  m="405250">and</span> <span m="405870">it</span> <span m="406030">gives</span>
  <span m="406220">you</span> <span m="406320">what</span> <span
  m="406470">you</span> <span m="406570">want.</span> <span
  m="406960">When</span> <span m="408370">your</span> <span
  m="409010">sequence</span> <span m="409370">of</span> <span
  m="409480">operations</span> <span m="410040">is</span> <span
  m="410470">very</span> <span m="410870">clear,</span> <span
  m="411230">like</span> <span m="411410">here,</span> <span
  m="411580">there's</span> <span m="411730">only</span> <span
  m="411930">one</span> <span m="412110">thing</span> <span
  m="412270">you</span> <span m="412350">can</span> <span m="412470">do</span>
  <span m="412580">at</span> <span m="412650">each</span> <span
  m="412780">step,</span> <span m="413000">which</span> <span
  m="413150">is</span> <span m="413270">insert--</span> <span
  m="414110">that's</span> <span m="414500">my</span> <span
  m="414700">definition</span> <span m="415190">of</span> <span
  m="415260">the</span> <span m="415320">problem--</span> <span
  m="416110">then</span> <span m="416340">great,</span> <span
  m="416560">we</span> <span m="416650">get</span> <span m="416800">a</span>
  <span m="416830">very</span> <span m="417050">simple</span> <span
  m="417350">sum.</span></p><p><span m="418100">As</span> <span
  m="418250">soon</span> <span m="418430">as</span> <span m="418530">you</span>
  <span m="418630">mix</span> <span m="418880">inserts</span> <span
  m="419230">and</span> <span m="419320">deletes,</span> <span
  m="419740">the</span> <span m="419820">sum</span> <span m="420140">is</span>
  <span m="420250">not</span> <span m="420460">so</span> <span
  m="420610">clear.</span> <span m="421670">But</span> <span
  m="423610">in</span> <span m="423740">some</span> <span
  m="423940">situations,</span> <span m="424630">the</span> <span
  m="424730">sum</span> <span m="424810">is</span> <span
  m="424930">really</span> <span m="425090">clean,</span> <span
  m="425570">so</span> <span m="425750">you</span> <span m="425830">just</span>
  <span m="426000">compute</span> <span m="426270">the</span> <span
  m="426340">sum,</span> <span m="426640">divide</span> <span
  m="426960">by</span> <span m="427060">a</span> <span m="427120">number</span>
  <span m="427350">of</span> <span m="427410">operations,</span> <span
  m="428370">you</span> <span m="428520">get</span> <span m="428680">a</span>
  <span m="428750">cost,</span> <span m="429370">and</span> <span
  m="429990">that</span> <span m="430170">could</span> <span
  m="430300">be</span> <span m="430410">the</span> <span
  m="430500">amortized</span> <span m="430920">cost.</span> <span
  m="431820">And</span> <span m="431930">that's</span> <span
  m="432080">the</span> <span m="432170">aggregate</span> <span
  m="432520">method,</span> <span m="433510">works</span> <span
  m="433730">great</span> <span m="434120">for</span> <span
  m="434250">simple</span> <span m="434520">sums.</span></p><p><span
  m="435840">Here's</span> <span m="436110">another</span> <span
  m="436370">example</span> <span m="436880">where</span> <span
  m="437290">it--</span> <span m="438250">no, sorry.</span> <span
  m="439480">Let</span> <span m="439630">me</span> <span m="439770">now</span>
  <span m="439950">give</span> <span m="440150">you</span> <span
  m="440340">the</span> <span m="440610">general</span> <span
  m="440990">definition</span> <span m="442410">of</span> <span
  m="442470">amortized</span> <span m="443120">bounds,</span> <span
  m="450270">which</span> <span m="450580">becomes</span> <span
  m="450990">important</span> <span m="451560">once</span> <span
  m="452010">you're</span> <span m="452120">dealing</span> <span
  m="452420">with</span> <span m="452560">different</span> <span
  m="452850">types</span> <span m="453200">of</span> <span
  m="453310">operations.</span> <span m="453930">I</span> <span
  m="454020">want</span> <span m="454200">to</span> <span m="454270">say</span>
  <span m="454580">an</span> <span m="454650">insert</span> <span
  m="455140">costs</span> <span m="455490">one</span> <span
  m="455960">bound</span> <span m="456420">amortized</span> <span
  m="457070">and</span> <span m="457110">maybe</span> <span m="457350">a</span>
  <span m="457390">delete</span> <span m="457740">costs</span> <span
  m="458030">some</span> <span m="458180">other</span> <span
  m="458430">bound.</span> <span m="459750">So</span> <span
  m="459990">what</span> <span m="460160">you</span> <span m="460260">get</span>
  <span m="460430">to</span> <span m="460590">do</span> <span
  m="461440">is</span> <span m="461930">assign</span> <span m="465750">a</span>
  <span m="465820">cost</span> <span m="466780">for</span> <span
  m="467000">each</span> <span m="467280">operation.</span> <span
  m="468250">I</span> <span m="468360">should</span> <span
  m="468500">call</span> <span m="468730">it</span> <span m="468820">an</span>
  <span m="469450">amortized</span> <span m="469990">cost,</span> <span
  m="484490">such</span> <span m="484860">that</span> <span
  m="485030">you</span> <span m="485150">preserve</span> <span
  m="485920">the</span> <span m="486020">sum</span> <span m="491660">of</span>
  <span m="491780">those</span> <span m="491990">costs.</span></p><p><span
  m="493810">So</span> <span m="494020">what</span> <span m="494180">I</span>
  <span m="494270">mean</span> <span m="494700">is</span> <span
  m="494980">that</span> <span m="495190">if</span> <span m="495360">I</span>
  <span m="495460">look</span> <span m="495760">at</span> <span
  m="496080">the</span> <span m="497260">sum</span> <span m="497970">over</span>
  <span m="498280">all</span> <span m="498510">operations</span> <span
  m="499910">of</span> <span m="500160">the</span> <span
  m="500310">amortized</span> <span m="500890">cost</span> <span
  m="501400">of</span> <span m="501570">that</span> <span
  m="501740">operation,</span> <span m="505570">and</span> <span
  m="505930">I</span> <span m="505990">compare</span> <span
  m="506450">that</span> <span m="506710">with</span> <span
  m="506890">the</span> <span m="506960">sum</span> <span m="507810">of</span>
  <span m="507920">all</span> <span m="508190">the</span> <span
  m="508450">actual</span> <span m="509050">costs</span> <span
  m="513120">of</span> <span m="513409">the</span> <span
  m="513539">operations,</span> <span m="516985">the</span> <span
  m="517250">amortize</span> <span m="517760">should</span> <span
  m="517940">always</span> <span m="518240">be</span> <span
  m="518830">bigger,</span> <span m="519620">because</span> <span
  m="519820">I</span> <span m="519890">always</span> <span
  m="520110">want</span> <span m="520490">an</span> <span
  m="520669">upper</span> <span m="520950">bound</span> <span
  m="521299">on</span> <span m="521419">my</span> <span m="521549">actual</span>
  <span m="521970">cost.</span> <span m="523059">So</span> <span
  m="523230">if</span> <span m="523320">I</span> <span m="523429">can</span>
  <span m="523580">prove</span> <span m="523940">that</span> <span
  m="524179">the</span> <span m="524300">amortized</span> <span
  m="524820">costs</span> <span m="525230">are,</span> <span
  m="525360">at</span> <span m="525430">most,</span> <span
  m="525830">say,</span> <span m="526510">constant</span> <span
  m="526980">per</span> <span m="527100">operation,</span> <span
  m="528010">then</span> <span m="528230">I</span> <span m="528310">get</span>
  <span m="528680">that</span> <span m="529030">the</span> <span
  m="529100">sum</span> <span m="529340">of</span> <span m="529480">the</span>
  <span m="529620">actual</span> <span m="529990">cost</span> <span
  m="530340">is,</span> <span m="530450">at</span> <span m="530530">most,</span>
  <span m="530720">constant</span> <span m="530980">per</span> <span
  m="531060">operation.</span> <span m="531600">I</span> <span
  m="531670">don't</span> <span m="531820">learn</span> <span
  m="531980">anything</span> <span m="532320">about</span> <span
  m="532610">the</span> <span m="532690">individual</span> <span
  m="533220">costs,</span> <span m="534140">but</span> <span m="534320">I</span>
  <span m="534380">learn</span> <span m="534690">about</span> <span
  m="534940">the</span> <span m="535010">total</span> <span
  m="535270">cost.</span></p><p><span m="535690">And</span> <span
  m="535830">in</span> <span m="535910">the</span> <span
  m="535980">context</span> <span m="536420">of</span> <span
  m="536500">an</span> <span m="536570">algorithm</span> <span
  m="536940">like</span> <span m="537110">Dijkstra's</span> <span
  m="537470">algorithm,</span> <span m="538290">you</span> <span
  m="538450">only</span> <span m="538730">care</span> <span
  m="538970">about</span> <span m="539190">the</span> <span
  m="539260">total</span> <span m="539550">cost,</span> <span
  m="539920">because</span> <span m="540540">you</span> <span
  m="540900">don't</span> <span m="541080">care</span> <span
  m="541250">about</span> <span m="541770">the</span> <span
  m="541960">shortest</span> <span m="542290">paths</span> <span
  m="542720">at</span> <span m="542930">time</span> <span m="543240">t,</span>
  <span m="543560">you</span> <span m="543680">only</span> <span
  m="543860">care</span> <span m="544000">about</span> <span
  m="544160">the</span> <span m="544230">shortest</span> <span
  m="544520">paths</span> <span m="544700">when</span> <span
  m="544820">the</span> <span m="544900">algorithm</span> <span
  m="545230">is</span> <span m="545310">completely</span> <span
  m="545710">finished.</span> <span m="546790">So</span> <span
  m="546990">in</span> <span m="547060">a</span> <span m="547120">lot</span>
  <span m="547340">of</span> <span m="547410">situations,</span> <span
  m="549960">maybe</span> <span m="550220">not</span> <span m="550380">a</span>
  <span m="550440">real-time</span> <span m="550880">system,</span> <span
  m="551410">but</span> <span m="551510">almost</span> <span
  m="551800">everything</span> <span m="552170">else,</span> <span
  m="552390">you</span> <span m="552480">just</span> <span
  m="552780">care</span> <span m="552960">about</span> <span
  m="553220">the</span> <span m="553370">sum</span> <span m="553520">of</span>
  <span m="553590">the</span> <span m="553650">costs.</span> <span
  m="553925">As</span> <span m="554200">long</span> <span m="554360">as</span>
  <span m="554440">that's</span> <span m="554630">small,</span> <span
  m="555280">you</span> <span m="555410">can</span> <span
  m="555520">afford</span> <span m="555850">the</span> <span
  m="555930">occasional</span> <span m="556500">expensive</span> <span
  m="556940">operation.</span> <span m="559930">So</span> <span
  m="560050">this</span> <span m="560240">is</span> <span m="560340">a</span>
  <span m="560390">more</span> <span m="560560">flexible</span> <span
  m="560970">definition.</span></p><p><span m="562410">One</span> <span
  m="562810">option</span> <span m="563380">would</span> <span
  m="563530">be</span> <span m="563690">to</span> <span m="563850">assign</span>
  <span m="564240">the</span> <span m="564420">average</span> <span
  m="564820">cost</span> <span m="565140">to</span> <span m="565210">each</span>
  <span m="565460">operation,</span> <span m="566460">but</span> <span
  m="566650">we</span> <span m="566750">have</span> <span m="566890">a</span>
  <span m="566980">whole</span> <span m="567190">bunch</span> <span
  m="567430">more</span> <span m="567600">operations.</span> <span
  m="568120">We</span> <span m="568200">could</span> <span m="568320">say</span>
  <span m="568530">inserts</span> <span m="568970">cost</span> <span
  m="569270">more</span> <span m="569450">than</span> <span
  m="569600">deletes</span> <span m="570210">or</span> <span
  m="570320">things</span> <span m="570570">like</span> <span
  m="570740">that.</span> <span m="571370">In</span> <span
  m="571460">fact,</span> <span m="571940">let</span> <span m="571980">me</span>
  <span m="572060">do</span> <span m="572190">such</span> <span
  m="572440">an</span> <span m="572500">example.</span> <span
  m="575240">A</span> <span m="575270">couple</span> <span
  m="575490">weeks</span> <span m="575690">ago,</span> <span
  m="575880">you</span> <span m="576000">learned</span> <span
  m="576190">about</span> <span m="576430">2-3</span> <span
  m="576810">trees.</span> <span m="578140">This</span> <span
  m="578230">would</span> <span m="578320">work</span> <span
  m="578490">for</span> <span m="578930">any</span> <span
  m="579150">structure</span> <span m="579550">though.</span></p><p><span
  m="589690">So</span> <span m="590000">I</span> <span m="590150">claim</span>
  <span m="591600">I'm</span> <span m="591720">going</span> <span
  m="591840">to</span> <span m="591930">look</span> <span m="592120">at</span>
  <span m="592200">three</span> <span m="592470">operations</span> <span
  m="593010">on</span> <span m="593120">2-3</span> <span
  m="593510">trees.</span> <span m="594250">One</span> <span
  m="594600">is</span> <span m="595350">create</span> <span m="595870">an</span>
  <span m="595990">empty</span> <span m="596280">tree,</span> <span
  m="597840">so</span> <span m="598030">I</span> <span m="598090">need</span>
  <span m="598260">to</span> <span m="598330">think</span> <span
  m="598510">about</span> <span m="598740">how</span> <span
  m="598900">we're</span> <span m="598990">getting</span> <span
  m="599220">started</span> <span m="600550">in</span> <span
  m="600730">amortization.</span> <span m="606410">Let's</span> <span
  m="606470">say</span> <span m="606600">you</span> <span
  m="606740">always</span> <span m="607040">start</span> <span
  m="607380">with</span> <span m="607780">an</span> <span
  m="607870">empty</span> <span m="608120">tree.</span> <span
  m="609040">It</span> <span m="609140">takes</span> <span
  m="609360">constant</span> <span m="609720">time</span> <span
  m="609900">to</span> <span m="609970">make</span> <span m="610190">one.</span>
  <span m="611519">I</span> <span m="611962">pay</span> <span
  m="612850">log</span> <span m="613320">n</span> <span m="613560">time--</span>
  <span m="614980">I'm</span> <span m="615050">going</span> <span
  m="615170">to</span> <span m="615460">tweak</span> <span
  m="615720">that</span> <span m="615890">a</span> <span
  m="615930">little</span> <span m="616140">bit--</span> <span
  m="617250">for</span> <span m="617440">an</span> <span
  m="617520">insertion,</span> <span m="627950">and</span> <span
  m="628280">I</span> <span m="628360">pay</span> <span m="629150">0</span>
  <span m="629630">time</span> <span m="631130">per</span> <span
  m="631320">delete</span> <span m="633490">in</span> <span m="633610">an</span>
  <span m="633730">amortized</span> <span m="634150">sense.</span> <span
  m="641090">You</span> <span m="641230">can</span> <span
  m="641360">write</span> <span m="641520">big</span> <span m="641730">O</span>
  <span m="641910">of</span> <span m="642045">0</span> <span
  m="642180">if</span> <span m="642290">you</span> <span m="642400">like.</span>
  <span m="643030">Same</span> <span m="643260">thing.</span></p><p><span
  m="645040">So</span> <span m="647050">deletion</span> <span
  m="647710">you</span> <span m="647810">can</span> <span
  m="647850">think</span> <span m="648040">of</span> <span m="648150">as</span>
  <span m="648260">a</span> <span m="648310">free</span> <span
  m="648590">operation.</span> <span m="649400">Why?</span> <span
  m="656660">This</span> <span m="656850">is</span> <span m="656930">a</span>
  <span m="656990">bit</span> <span m="657350">counter-intuitive</span> <span
  m="657950">because,</span> <span m="658140">of</span> <span
  m="658220">course,</span> <span m="658500">in</span> <span
  m="658640">reality</span> <span m="659160">the</span> <span
  m="659250">actual</span> <span m="659660">cost</span> <span
  m="659940">of</span> <span m="660000">a</span> <span
  m="660050">deletion</span> <span m="660530">is</span> <span
  m="660690">going</span> <span m="660830">to</span> <span m="660900">be</span>
  <span m="661000">log</span> <span m="661160">n.</span> <span
  m="662480">Yeah.</span></p><p><span m="662650">AUDIENCE: You</span> <span
  m="663115">can</span> <span m="663270">never</span> <span
  m="663425">delete</span> <span m="663580">more</span> <span
  m="664045">elements</span> <span m="664200">than</span> <span
  m="664355">you've</span> <span m="664510">already</span> <span
  m="664975">inserted.</span></p><p><span m="665440">ERIK DEMAINE: You</span>
  <span m="665550">can</span> <span m="665670">never</span> <span
  m="665910">delete</span> <span m="666280">more</span> <span
  m="666740">elements</span> <span m="667140">than</span> <span
  m="667240">you've</span> <span m="667350">already</span> <span
  m="667570">inserted.</span> <span m="668210">Good.</span></p><p><span
  m="668370">AUDIENCE:</span> <span m="668827">Can</span> <span
  m="668979">you</span> <span m="669131">cap</span> <span m="669284">the</span>
  <span m="669436">cost</span> <span m="669588">of</span> <span
  m="669741">[INAUDIBLE]</span></p><p><span m="672030">ERIK DEMAINE:
  Yeah.</span> <span m="673100">So</span> <span m="673970">I</span> <span
  m="674170">can</span> <span m="674380">bound</span> <span
  m="674770">the</span> <span m="674840">deletion</span> <span
  m="675200">cost</span> <span m="675500">by</span> <span m="675620">the</span>
  <span m="675710">insertion</span> <span m="676110">cost,</span> <span
  m="676520">and</span> <span m="676860">in</span> <span m="677010">the</span>
  <span m="677080">context</span> <span m="677560">of</span> <span
  m="677670">just</span> <span m="677900">the</span> <span
  m="678000">aggregate</span> <span m="678420">method,</span> <span
  m="679230">you</span> <span m="679370">could</span> <span
  m="679550">look</span> <span m="679760">at</span> <span m="679940">the</span>
  <span m="680160">total</span> <span m="680490">cost</span> <span
  m="680920">of</span> <span m="681040">all</span> <span m="681190">the</span>
  <span m="681300">operations.</span> <span m="683020">I</span> <span
  m="683100">guess</span> <span m="683300">we're</span> <span
  m="683410">not</span> <span m="683580">exactly</span> <span
  m="684320">dividing</span> <span m="684780">here,</span> <span
  m="685360">but</span> <span m="686140">if</span> <span m="686300">we</span>
  <span m="686380">look</span> <span m="686570">at</span> <span
  m="686690">the</span> <span m="687540">total</span> <span
  m="689470">cost,</span> <span m="691940">let's</span> <span
  m="692210">say</span> <span m="692550">that</span> <span m="692700">we</span>
  <span m="692840">do</span> <span m="694130">c</span> <span
  m="694470">creations,</span> <span m="695560">i</span> <span
  m="696010">insertions</span> <span m="697300">and</span> <span
  m="697445">d</span> <span m="697590">deletions,</span> <span
  m="699350">then</span> <span m="699650">the</span> <span
  m="699720">total</span> <span m="700050">cost</span> <span
  m="700440">becomes</span> <span m="701880">c</span> <span
  m="702960">plus</span> <span m="703760">i</span> <span m="703850">times</span>
  <span m="704330">log</span> <span m="704540">n</span> <span
  m="706670">plus</span> <span m="707200">d</span> <span m="707520">times</span>
  <span m="707880">the</span> <span m="707940">log</span> <span
  m="708070">n.</span></p><p><span m="711540">And</span> <span
  m="712100">the</span> <span m="712200">point</span> <span m="712450">is</span>
  <span m="712640">d</span> <span m="713500">is</span> <span
  m="713800">less</span> <span m="714040">than</span> <span m="714170">or</span>
  <span m="714280">equal</span> <span m="714530">to</span> <span
  m="715960">i,</span> <span m="716790">because</span> <span
  m="716980">you</span> <span m="717100">can</span> <span
  m="717260">never</span> <span m="717490">delete</span> <span
  m="717780">an</span> <span m="717870">item</span> <span m="718150">that</span>
  <span m="718280">wasn't</span> <span m="718610">already</span> <span
  m="718920">inserted</span> <span m="719390">if</span> <span
  m="719490">you're</span> <span m="719580">starting</span> <span
  m="720020">from</span> <span m="720180">an</span> <span
  m="720280">empty</span> <span m="720530">structure.</span> <span
  m="721760">And</span> <span m="721930">so</span> <span m="723100">this</span>
  <span m="723320">is</span> <span m="723470">i</span> <span
  m="723830">plus</span> <span m="724170">d</span> <span m="724600">times</span>
  <span m="725010">log</span> <span m="725180">n,</span> <span
  m="726670">but</span> <span m="726900">that's</span> <span
  m="727120">just,</span> <span m="727370">at</span> <span
  m="727440">most,</span> <span m="727680">twice</span> <span
  m="728110">i</span> <span m="729640">times</span> <span m="729920">log</span>
  <span m="730350">n, so</span> <span m="730540">we</span> <span
  m="730590">get</span> <span m="730760">c</span> <span m="731620">plus</span>
  <span m="732780">i</span> <span m="733030">log</span> <span
  m="733345">n.</span> <span m="736950">And</span> <span m="737190">so</span>
  <span m="737310">we</span> <span m="737410">can</span> <span
  m="737540">think</span> <span m="737720">of</span> <span
  m="737800">that</span> <span m="738010">as</span> <span
  m="738130">having</span> <span m="738470">a</span> <span m="738960">d</span>
  <span m="740130">times</span> <span m="740710">0,</span> <span
  m="740898">0</span> <span m="742220">cost</span> <span m="742610">per</span>
  <span m="742750">deletion.</span></p><p><span m="743880">So</span> <span
  m="744020">this</span> <span m="744260">is</span> <span m="744450">the</span>
  <span m="744590">sum</span> <span m="744810">of</span> <span
  m="744890">the</span> <span m="745000">actual</span> <span
  m="745410">costs</span> <span m="745780">over</span> <span
  m="745950">here.</span> <span m="746570">This</span> <span
  m="746790">is</span> <span m="746900">the</span> <span m="747020">sum</span>
  <span m="747290">of</span> <span m="747400">the</span> <span
  m="747510">amortized</span> <span m="748010">costs,</span> <span
  m="749050">where</span> <span m="749220">we</span> <span m="749360">say</span>
  <span m="749550">0</span> <span m="749860">for</span> <span
  m="749980">the</span> <span m="750080">deletion,</span> <span
  m="750730">and</span> <span m="750910">we</span> <span m="751000">just</span>
  <span m="751200">showed</span> <span m="751560">that</span> <span
  m="752580">this</span> <span m="752870">is</span> <span m="753000">an</span>
  <span m="753130">upper</span> <span m="753350">bound</span> <span
  m="753640">on</span> <span m="753780">that,</span> <span m="755140">so</span>
  <span m="755400">we're</span> <span m="756100">happy.</span> <span
  m="756980">Now,</span> <span m="757160">there's</span> <span
  m="757340">a</span> <span m="757400">slight</span> <span
  m="757780">catch</span> <span m="758120">here,</span> <span
  m="758750">and</span> <span m="758850">that's</span> <span
  m="758970">why</span> <span m="759110">I</span> <span m="759200">wrote</span>
  <span m="759410">star</span> <span m="759940">on</span> <span
  m="760110">every</span> <span m="760380">n,</span> <span
  m="761640">which</span> <span m="761890">is</span> <span m="762070">not</span>
  <span m="762440">every</span> <span m="762670">operation</span> <span
  m="763120">has</span> <span m="763290">the</span> <span m="763360">same</span>
  <span m="763610">cost,</span> <span m="764050">right?</span> <span
  m="764190">When</span> <span m="764280">you</span> <span
  m="764340">start</span> <span m="764580">from</span> <span
  m="764730">an</span> <span m="764810">empty</span> <span
  m="765030">structure,</span> <span m="765440">insertion</span> <span
  m="765920">cost</span> <span m="766420">constant</span> <span
  m="766880">time,</span> <span m="767260">because</span> <span
  m="767650">n</span> <span m="767850">is</span> <span m="768000">0.</span>
  <span m="770480">When</span> <span m="770640">n</span> <span
  m="770790">is</span> <span m="770900">a</span> <span
  m="770950">constant,</span> <span m="771880">insertion</span> <span
  m="772440">is</span> <span m="772560">constant</span> <span
  m="772930">time.</span> <span m="773640">When</span> <span m="773820">n</span>
  <span m="774060">grows</span> <span m="775480">to</span> <span
  m="775620">n,</span> <span m="777120">it</span> <span m="777340">costs</span>
  <span m="777660">log</span> <span m="777855">n</span> <span
  m="778050">time.</span> <span m="778310">At</span> <span
  m="778410">different</span> <span m="778700">times,</span> <span
  m="779040">n</span> <span m="779210">is</span> <span m="779320">a</span> <span
  m="779380">different</span> <span m="779710">value,</span> <span
  m="780700">and</span> <span m="781120">n</span> <span m="781710">I'm</span>
  <span m="781835">going</span> <span m="781960">to</span> <span
  m="782040">use</span> <span m="782290">to</span> <span m="782370">mean</span>
  <span m="782570">the</span> <span m="782640">current</span> <span
  m="783090">size</span> <span m="783450">of</span> <span m="783550">the</span>
  <span m="783620">structure.</span></p><p><span m="785680">For</span> <span
  m="785880">this</span> <span m="786120">argument</span> <span
  m="786500">to</span> <span m="786620">work</span> <span m="786860">at</span>
  <span m="787040">the</span> <span m="787110">moment,</span> <span
  m="787820">I</span> <span m="787990">need</span> <span m="788290">that</span>
  <span m="788480">n</span> <span m="788670">is</span> <span
  m="788850">not</span> <span m="789700">the</span> <span
  m="789800">current</span> <span m="790200">value,</span> <span
  m="790630">because</span> <span m="791100">this</span> <span
  m="791340">is</span> <span m="791440">kind</span> <span m="791540">of</span>
  <span m="791660">charging</span> <span m="792080">work.</span> <span
  m="792290">Some</span> <span m="792530">insertions</span> <span
  m="793220">are</span> <span m="793400">for</span> <span
  m="793660">large</span> <span m="794030">structures,</span> <span
  m="794450">some</span> <span m="794590">are</span> <span m="794730">for</span>
  <span m="794890">small</span> <span m="795140">structures,</span> <span
  m="795530">some</span> <span m="795740">deletions</span> <span
  m="796180">are</span> <span m="796370">for</span> <span
  m="796535">small,</span> <span m="796700">some</span> <span
  m="796870">are</span> <span m="796920">for</span> <span
  m="797080">large.</span> <span m="797820">Gets</span> <span
  m="798040">confusing</span> <span m="798500">to</span> <span
  m="798560">think</span> <span m="798770">about.</span> <span
  m="799240">We</span> <span m="799460">will</span> <span m="799580">fix</span>
  <span m="799840">that</span> <span m="800040">in</span> <span
  m="800140">a</span> <span m="800180">moment</span> <span
  m="800630">but,</span> <span m="800660">for</span> <span
  m="800800">now,</span> <span m="801570">I'm</span> <span
  m="801660">just</span> <span m="801800">going</span> <span
  m="801920">to</span> <span m="802000">define</span> <span m="802430">n</span>
  <span m="802700">star</span> <span m="803460">to</span> <span
  m="803640">be</span> <span m="803930">the</span> <span
  m="804190">maximum</span> <span m="805060">size</span> <span
  m="805830">over</span> <span m="806180">all</span> <span
  m="806340">time.</span> <span m="809370">OK,</span> <span m="809660">if</span>
  <span m="809990">we</span> <span m="810100">just</span> <span
  m="810310">define</span> <span m="810580">it</span> <span
  m="810670">that</span> <span m="810870">way,</span> <span
  m="811180">then</span> <span m="811300">this</span> <span m="812640">is</span>
  <span m="812720">true.</span> <span m="813570">That</span> <span
  m="814520">will</span> <span m="814620">let</span> <span m="814780">me</span>
  <span m="814900">pay</span> <span m="815200">for</span> <span
  m="815610">any</span> <span m="815840">deletion,</span> <span
  m="818000">but</span> <span m="818140">we'll</span> <span
  m="818310">remove</span> <span m="818570">that</span> <span
  m="818740">star</span> <span m="819210">later</span> <span
  m="819510">on</span> <span m="819830">once</span> <span m="820030">we</span>
  <span m="820110">get</span> <span m="820310">better</span> <span
  m="820710">analysis</span> <span m="821240">methods,</span> <span
  m="822940">but</span> <span m="823120">so</span> <span m="823230">far</span>
  <span m="823410">so</span> <span m="823560">good.</span></p><p><span
  m="824260">Two</span> <span m="824420">very</span> <span
  m="824630">simple</span> <span m="824890">examples--</span> <span
  m="826080">table</span> <span m="826380">doubling,</span> <span
  m="827440">2-3</span> <span m="827840">trees</span> <span
  m="828260">with</span> <span m="828410">free</span> <span
  m="828630">deletion.</span> <span m="830690">Of</span> <span
  m="830750">course,</span> <span m="830980">that</span> <span
  m="831030">would</span> <span m="831180">work</span> <span
  m="831340">for</span> <span m="831460">any</span> <span
  m="831610">structure</span> <span m="832000">with</span> <span
  m="832120">logarithmic</span> <span m="832690">insertion</span> <span
  m="833090">and</span> <span m="833200">deletion,</span> <span
  m="834470">but</span> <span m="834620">we're</span> <span
  m="834710">going</span> <span m="834840">to</span> <span m="834920">be</span>
  <span m="835040">using</span> <span m="835310">2-3</span> <span
  m="835640">trees</span> <span m="835970">in</span> <span m="836205">a</span>
  <span m="836440">more--</span> <span m="837300">analyzing</span> <span
  m="837760">them</span> <span m="837900">in</span> <span m="837920">a</span>
  <span m="837940">more</span> <span m="838170">interesting</span> <span
  m="838600">way</span> <span m="840160">later</span> <span
  m="840500">on.</span></p><p><span m="842870">So</span> <span
  m="843100">let's</span> <span m="843380">go</span> <span m="843620">to</span>
  <span m="843860">the</span> <span m="843980">next</span> <span
  m="844260">method,</span> <span m="844580">which</span> <span
  m="844770">is</span> <span m="844920">the</span> <span
  m="845200">accounting</span> <span m="845640">method.</span> <span
  m="852220">It's</span> <span m="852440">like</span> <span
  m="852650">the</span> <span m="854070">bank</span> <span
  m="854510">teller's</span> <span m="855200">analysis,</span> <span
  m="856250">if</span> <span m="856280">you</span> <span m="856400">will.</span>
  <span m="859700">These</span> <span m="859930">are</span> <span
  m="860040">all</span> <span m="860360">just</span> <span
  m="860600">different</span> <span m="860920">ways</span> <span
  m="861270">to</span> <span m="861370">compute</span> <span
  m="861760">these</span> <span m="861940">sums</span> <span
  m="863740">or</span> <span m="863810">to</span> <span m="863890">think</span>
  <span m="864140">about</span> <span m="864380">the</span> <span
  m="864450">sums,</span> <span m="864890">and</span> <span
  m="865060">usually</span> <span m="865950">one</span> <span
  m="866250">method</span> <span m="866660">is</span> <span m="867120">a</span>
  <span m="867210">lot</span> <span m="867470">easier,</span> <span
  m="868300">either</span> <span m="869120">for</span> <span
  m="869250">you</span> <span m="869350">personally</span> <span
  m="870390">or</span> <span m="870660">for</span> <span m="870860">each</span>
  <span m="871100">problem,</span> <span m="871570">more</span> <span
  m="871750">typically.</span> <span m="872250">Each</span> <span
  m="872440">problem</span> <span m="872770">usually</span> <span
  m="873140">one</span> <span m="873460">or</span> <span m="873710">more</span>
  <span m="873990">of</span> <span m="874070">these</span> <span
  m="874240">methods</span> <span m="874460">is</span> <span
  m="874610">going</span> <span m="874740">to</span> <span m="874810">be</span>
  <span m="874900">more</span> <span m="875160">intuitive</span> <span
  m="875580">than</span> <span m="875700">the</span> <span
  m="875830">others.</span> <span m="876790">They're</span> <span
  m="876960">all</span> <span m="877170">kind</span> <span m="877430">of</span>
  <span m="877490">equivalent,</span> <span m="878230">but</span> <span
  m="878430">it's</span> <span m="878550">good</span> <span m="878690">to</span>
  <span m="878840">have</span> <span m="879010">them</span> <span
  m="879130">all</span> <span m="879790">in</span> <span m="879940">your</span>
  <span m="880060">mind</span> <span m="880270">so</span> <span
  m="880480">you</span> <span m="880550">can</span> <span m="880660">just</span>
  <span m="880820">think</span> <span m="881000">about</span> <span
  m="881300">the</span> <span m="881370">problem</span> <span
  m="881700">in</span> <span m="881780">different</span> <span
  m="882040">ways.</span></p><p><span m="883080">So</span> <span
  m="884210">with</span> <span m="884360">the</span> <span
  m="884430">accounting</span> <span m="884800">method,</span> <span
  m="885130">what</span> <span m="885260">we're</span> <span
  m="885340">going</span> <span m="885470">to</span> <span m="885550">do</span>
  <span m="886230">is</span> <span m="886550">define</span> <span
  m="887820">a</span> <span m="887930">bank</span> <span
  m="888180">account</span> <span m="890700">and</span> <span
  m="891320">an</span> <span m="891430">operation</span> <span
  m="893790">can</span> <span m="894250">store</span> <span
  m="894660">credit</span> <span m="897070">in</span> <span
  m="897270">that</span> <span m="897460">bank</span> <span
  m="897670">account.</span> <span m="911880">Credits</span> <span
  m="912250">maybe</span> <span m="912480">not</span> <span
  m="912670">the</span> <span m="912740">best</span> <span
  m="913010">word,</span> <span m="913170">because</span> <span
  m="913320">you're</span> <span m="913430">not</span> <span
  m="913670">allowed</span> <span m="913980">for</span> <span
  m="914090">the</span> <span m="914180">bank</span> <span
  m="914380">account</span> <span m="914700">to</span> <span
  m="914800">go</span> <span m="914940">negative.</span> <span
  m="916650">The</span> <span m="916740">bank</span> <span
  m="917010">account</span> <span m="917350">must</span> <span
  m="917680">always</span> <span m="918120">be</span> <span
  m="918870">non-negative</span> <span m="919510">balance,</span> <span
  m="922570">because</span> <span m="922880">otherwise</span> <span
  m="923400">your</span> <span m="923510">summations</span> <span
  m="924120">won't</span> <span m="924310">work</span> <span
  m="924520">out.</span></p><p><span m="925650">So</span> <span
  m="926080">when</span> <span m="926270">you</span> <span
  m="926370">store</span> <span m="926680">credit</span> <span
  m="927040">in</span> <span m="927130">the</span> <span m="927200">bank</span>
  <span m="927440">account,</span> <span m="928050">you</span> <span
  m="928230">pay</span> <span m="928550">for</span> <span m="928840">it.</span>
  <span m="929050">It's</span> <span m="929270">as</span> <span
  m="929400">if</span> <span m="929550">you're</span> <span
  m="929750">consuming</span> <span m="930330">time</span> <span
  m="930710">now</span> <span m="931690">in</span> <span m="931880">order</span>
  <span m="932060">to</span> <span m="932180">pay</span> <span
  m="932470">for</span> <span m="932700">it</span> <span m="932760">in</span>
  <span m="932840">the</span> <span m="932910">future.</span> <span
  m="934090">And</span> <span m="934810">think</span> <span m="935070">of</span>
  <span m="935200">operations</span> <span m="935810">costing</span> <span
  m="936320">money,</span> <span m="936750">so</span> <span
  m="937510">whenever</span> <span m="938010">I</span> <span
  m="939900">do</span> <span m="940170">a</span> <span
  m="940220">deletion,</span> <span m="941540">I</span> <span
  m="941690">spend</span> <span m="942070">actual</span> <span
  m="942520">time,</span> <span m="942820">log</span> <span m="943080">n</span>
  <span m="943240">time,</span> <span m="943530">but</span> <span
  m="943650">if</span> <span m="943790">I</span> <span m="944210">had</span>
  <span m="944600">log</span> <span m="944920">n</span> <span
  m="945210">dollars</span> <span m="945730">in</span> <span
  m="945830">the</span> <span m="945900">bank,</span> <span
  m="946580">and</span> <span m="946740">I</span> <span m="946790">could</span>
  <span m="946950">pull</span> <span m="947250">those</span> <span
  m="947540">out</span> <span m="947740">of</span> <span m="947810">the</span>
  <span m="947880">bank,</span> <span m="948270">I</span> <span
  m="948340">can</span> <span m="948540">use</span> <span
  m="948860">those</span> <span m="949060">dollars</span> <span
  m="949450">to</span> <span m="949550">pay</span> <span m="949860">for</span>
  <span m="950100">the</span> <span m="950180">work,</span> <span
  m="951230">and</span> <span m="951420">then</span> <span m="951560">the</span>
  <span m="951650">deletion</span> <span m="952170">itself</span> <span
  m="952790">becomes</span> <span m="953280">free</span> <span
  m="953660">in</span> <span m="953760">an</span> <span
  m="953880">amortized</span> <span m="954340">sense.</span></p><p><span
  m="955460">So</span> <span m="957370">this</span> <span m="957640">is,</span>
  <span m="958610">on</span> <span m="958760">the</span> <span
  m="958830">one</span> <span m="959030">hand,</span> <span
  m="959280">operation--</span> <span m="960030">and</span> <span
  m="960340">when</span> <span m="960440">I</span> <span m="960500">do</span>
  <span m="960620">an</span> <span m="960710">insertion,</span> <span
  m="961730">I'm</span> <span m="961860">going</span> <span m="961980">to</span>
  <span m="962190">physically</span> <span m="963050">take</span> <span
  m="963390">some</span> <span m="963670">coins</span> <span
  m="964200">out</span> <span m="964340">of</span> <span
  m="964440">myself.</span> <span m="965960">That</span> <span
  m="966200">will</span> <span m="968050">cost</span> <span
  m="968490">something</span> <span m="968920">in</span> <span
  m="969060">the</span> <span m="969120">sense</span> <span
  m="969410">that</span> <span m="969620">the</span> <span
  m="969780">amortized</span> <span m="970230">cost</span> <span
  m="970470">of</span> <span m="970540">insertion</span> <span
  m="971030">goes</span> <span m="971360">up</span> <span m="972480">in</span>
  <span m="972630">order</span> <span m="972810">to</span> <span
  m="972870">put</span> <span m="973010">those</span> <span
  m="973220">coins</span> <span m="973500">in</span> <span m="973580">the</span>
  <span m="973650">bank,</span> <span m="974040">but</span> <span
  m="974190">then</span> <span m="974500">I'll</span> <span m="974640">be</span>
  <span m="974740">able</span> <span m="974910">to</span> <span
  m="974990">use</span> <span m="975170">them</span> <span m="975300">for</span>
  <span m="975420">deletion.</span> <span m="976330">So</span> <span
  m="976560">this</span> <span m="976760">is</span> <span m="976870">what</span>
  <span m="977030">insertion</span> <span m="977265">is</span> <span
  m="977500">going</span> <span m="977630">to</span> <span
  m="977710">do.</span></p><p><span m="978320">I</span> <span
  m="978440">can</span> <span m="978580">store</span> <span
  m="978840">credit</span> <span m="979130">in</span> <span
  m="979190">the</span> <span m="979260">bank,</span> <span
  m="980000">and</span> <span m="980180">then</span> <span
  m="980300">separately</span> <span m="980860">we</span> <span
  m="981300">allow</span> <span m="982400">an</span> <span
  m="982500">operation</span> <span m="983000">to</span> <span
  m="983130">take</span> <span m="983350">coins</span> <span
  m="983650">out</span> <span m="983810">of</span> <span m="983870">the</span>
  <span m="983940">bank,</span> <span m="989540">and</span> <span
  m="989820">you</span> <span m="989920">can</span> <span m="990100">pay</span>
  <span m="990610">for</span> <span m="991700">time</span> <span
  m="995560">using</span> <span m="996410">the</span> <span
  m="996520">credit</span> <span m="996880">that's</span> <span
  m="997070">been</span> <span m="997200">stored</span> <span
  m="997500">in</span> <span m="997600">the</span> <span m="997660">bank.</span>
  <span m="1003410">As</span> <span m="1003550">long</span> <span
  m="1003940">as</span> <span m="1004910">the</span> <span
  m="1006950">bank</span> <span m="1007180">balance</span> <span
  m="1007600">remains</span> <span m="1008090">non-negative</span> <span
  m="1008720">at</span> <span m="1008810">all</span> <span
  m="1008950">times,</span> <span m="1010350">this</span> <span
  m="1010500">will</span> <span m="1010610">be</span> <span
  m="1010740">good.</span> <span m="1012680">The</span> <span
  m="1012860">bank</span> <span m="1013180">balance</span> <span
  m="1013390">is</span> <span m="1013600">a</span> <span m="1013670">sort</span>
  <span m="1013890">of</span> <span m="1014030">unused</span> <span
  m="1014890">time.</span> <span m="1015980">We're</span> <span
  m="1016130">paying</span> <span m="1016500">for</span> <span
  m="1016790">it</span> <span m="1017010">to</span> <span
  m="1017150">store</span> <span m="1017380">things</span> <span
  m="1017670">in</span> <span m="1017800">there.</span> <span
  m="1017930">If</span> <span m="1018010">we</span> <span
  m="1018090">don't</span> <span m="1018280">use</span> <span
  m="1018480">it,</span> <span m="1018640">well,</span> <span
  m="1018840">we</span> <span m="1018940">just</span> <span
  m="1019110">have</span> <span m="1019240">an</span> <span
  m="1019330">upper</span> <span m="1019530">bound</span> <span
  m="1019820">on</span> <span m="1019920">time.</span> <span
  m="1020700">As</span> <span m="1020860">long</span> <span
  m="1021080">as</span> <span m="1021170">we</span> <span m="1021270">go</span>
  <span m="1021390">non-negative,</span> <span m="1024849">then</span> <span
  m="1025190">the</span> <span m="1025319">summation</span> <span
  m="1025790">will</span> <span m="1025930">always</span> <span
  m="1026230">be</span> <span m="1027150">in</span> <span m="1027290">the</span>
  <span m="1027380">right</span> <span m="1027560">direction.</span> <span
  m="1028150">This</span> <span m="1029050">inequality</span> <span
  m="1029510">will</span> <span m="1029609">hold.</span></p><p><span
  m="1030170">Let's</span> <span m="1030300">do</span> <span
  m="1031369">an</span> <span m="1031560">example.</span> <span
  m="1047839">Well,</span> <span m="1048190">maybe</span> <span
  m="1048480">this</span> <span m="1048690">is</span> <span m="1048820">a</span>
  <span m="1049090">first</span> <span m="1049400">example.</span> <span
  m="1049910">So</span> <span m="1050490">when</span> <span m="1050670">I</span>
  <span m="1050730">do</span> <span m="1050870">an</span> <span
  m="1050950">insertion,</span> <span m="1052290">I</span> <span
  m="1052420">can</span> <span m="1052620">put,</span> <span
  m="1055050">let's</span> <span m="1055250">say,</span> <span
  m="1055380">one</span> <span m="1055800">coin</span> <span
  m="1056340">of</span> <span m="1056480">value</span> <span
  m="1056890">log</span> <span m="1057350">n</span> <span
  m="1057540">star</span> <span m="1058740">into</span> <span
  m="1059000">the</span> <span m="1059100">bank,</span> <span
  m="1060720">and</span> <span m="1061030">so</span> <span
  m="1061170">the</span> <span m="1061280">total</span> <span
  m="1061630">cost</span> <span m="1062000">of</span> <span
  m="1062070">that</span> <span m="1062220">insertion,</span> <span
  m="1062810">I</span> <span m="1062920">pay</span> <span m="1063140">log</span>
  <span m="1063240">n</span> <span m="1063750">star</span> <span
  m="1063940">real</span> <span m="1064260">cost</span> <span
  m="1064770">in</span> <span m="1064910">order</span> <span
  m="1065090">to</span> <span m="1065230">do</span> <span m="1065370">the</span>
  <span m="1065460">insertion,</span> <span m="1066310">then</span> <span
  m="1066470">I</span> <span m="1066570">also</span> <span
  m="1066910">pay</span> <span m="1067150">log</span> <span m="1067340">n</span>
  <span m="1067530">star</span> <span m="1068590">for</span> <span
  m="1068800">those</span> <span m="1069010">coins</span> <span
  m="1069610">to</span> <span m="1069680">put</span> <span
  m="1069820">them</span> <span m="1069920">in</span> <span
  m="1070000">the</span> <span m="1070070">bank.</span></p><p><span
  m="1070630">When</span> <span m="1070840">I</span> <span m="1070910">do</span>
  <span m="1071040">a</span> <span m="1071080">deletion,</span> <span
  m="1071860">the</span> <span m="1072000">real</span> <span
  m="1072310">cost</span> <span m="1072740">is</span> <span
  m="1072860">log</span> <span m="1073025">n</span> <span
  m="1073190">star,</span> <span m="1073520">but</span> <span
  m="1073670">I'm</span> <span m="1073780">going</span> <span
  m="1074000">to</span> <span m="1074140">extract</span> <span
  m="1074790">out</span> <span m="1074980">of</span> <span m="1075080">it</span>
  <span m="1075200">log</span> <span m="1075350">n</span> <span
  m="1075680">star</span> <span m="1075790">coins,</span> <span
  m="1076950">and</span> <span m="1077290">so</span> <span
  m="1077430">the</span> <span m="1077530">total</span> <span
  m="1077830">cost</span> <span m="1078150">is</span> <span
  m="1078260">actually</span> <span m="1078730">free--</span> <span
  m="1079760">the</span> <span m="1079940">total</span> <span
  m="1080270">amortized</span> <span m="1080690">cost</span> <span
  m="1080970">is</span> <span m="1081090">free--</span> <span
  m="1087320">and</span> <span m="1087780">the</span> <span
  m="1087870">reason</span> <span m="1088200">that</span> <span
  m="1088400">works,</span> <span m="1088820">the</span> <span
  m="1088830">reason</span> <span m="1089130">the</span> <span
  m="1089210">balance</span> <span m="1089600">is</span> <span
  m="1089700">always</span> <span m="1089890">non-negative,</span> <span
  m="1090400">is</span> <span m="1090520">because</span> <span
  m="1090820">for</span> <span m="1090950">every</span> <span
  m="1091140">deletion</span> <span m="1091940">there</span> <span
  m="1092100">was</span> <span m="1092260">an</span> <span
  m="1092330">insertion</span> <span m="1092720">before</span> <span
  m="1093050">it.</span> <span m="1093700">So</span> <span
  m="1095250">that's</span> <span m="1095470">maybe</span> <span
  m="1095720">a</span> <span m="1095790">less</span> <span
  m="1096080">intuitive</span> <span m="1096450">way</span> <span
  m="1096570">to</span> <span m="1096660">think</span> <span
  m="1096860">about</span> <span m="1097080">this</span> <span
  m="1097210">problem,</span> <span m="1097480">but</span> <span
  m="1097640">you</span> <span m="1097720">could</span> <span
  m="1097930">think</span> <span m="1098130">about</span> <span
  m="1098220">it</span> <span m="1098450">that</span> <span
  m="1098620">way.</span></p><p><span m="1105080">More</span> <span
  m="1105310">generally--</span> <span m="1106790">so</span> <span
  m="1107080">what</span> <span m="1107270">we'd</span> <span
  m="1107390">like</span> <span m="1107670">to</span> <span
  m="1107780">say</span> <span m="1109800">is</span> <span
  m="1110000">that</span> <span m="1110140">we</span> <span
  m="1110320">only</span> <span m="1110900">put</span> <span
  m="1111170">log</span> <span m="1111690">n</span> <span
  m="1112070">without</span> <span m="1112530">the</span> <span
  m="1112610">star,</span> <span m="1112970">the</span> <span
  m="1113040">current</span> <span m="1113420">value</span> <span
  m="1113780">of</span> <span m="1113890">n</span> <span m="1114070">per</span>
  <span m="1114300">insert</span> <span m="1118230">and</span> <span
  m="1119680">a</span> <span m="1120000">0</span> <span m="1121770">per</span>
  <span m="1121890">delete</span> <span m="1126340">amortized.</span> <span
  m="1133570">So</span> <span m="1133700">we'd</span> <span
  m="1133850">like</span> <span m="1134040">to</span> <span
  m="1134140">say,</span> <span m="1134560">OK,</span> <span
  m="1136450">let</span> <span m="1136790">me</span> <span
  m="1137360">put</span> <span m="1139390">one</span> <span
  m="1139890">coin</span> <span m="1144800">worth</span> <span
  m="1145920">log</span> <span m="1146140">n</span> <span m="1152380">for</span>
  <span m="1153360">each</span> <span m="1153590">insertion,</span> <span
  m="1156310">and</span> <span m="1157030">when</span> <span
  m="1157290">I</span> <span m="1157570">delete,</span> <span
  m="1160710">I</span> <span m="1160880">consume</span> <span
  m="1161340">the</span> <span m="1161400">coin.</span> <span
  m="1167600">And,</span> <span m="1167870">in</span> <span
  m="1167960">general,</span> <span m="1168350">the</span> <span
  m="1168430">formula</span> <span m="1168820">here</span> <span
  m="1169050">is</span> <span m="1169420">that</span> <span
  m="1169660">the</span> <span m="1170580">amortized</span> <span
  m="1171160">cost</span> <span m="1175010">of</span> <span
  m="1175180">an</span> <span m="1175270">operation</span> <span
  m="1178660">is</span> <span m="1179230">the</span> <span
  m="1179370">actual</span> <span m="1179780">cost</span> <span
  m="1187090">plus</span> <span m="1188810">the</span> <span
  m="1188920">deposits</span> <span m="1193020">minus</span> <span
  m="1194160">the</span> <span m="1195460">withdrawals.</span></p><p><span
  m="1203570">OK.</span> <span m="1203840">So</span> <span
  m="1204270">insertion,</span> <span m="1205080">we</span> <span
  m="1205220">just</span> <span m="1205420">double</span> <span
  m="1205670">the</span> <span m="1205740">cost,</span> <span
  m="1206160">because</span> <span m="1206520">we</span> <span
  m="1206630">pay</span> <span m="1206780">log</span> <span m="1206950">n</span>
  <span m="1207120">to</span> <span m="1207310">the</span> <span
  m="1207410">real</span> <span m="1207610">thing,</span> <span
  m="1208010">we</span> <span m="1208120">pay</span> <span
  m="1208780">log</span> <span m="1209030">n</span> <span m="1209105">to</span>
  <span m="1209180">store</span> <span m="1209450">the</span> <span
  m="1209530">coin.</span> <span m="1211270">That's</span> <span
  m="1211610">the</span> <span m="1211760">plus</span> <span
  m="1212070">deposit</span> <span m="1212550">part,</span> <span
  m="1213020">so</span> <span m="1213340">insertion</span> <span
  m="1213790">remains</span> <span m="1214170">log</span> <span
  m="1214310">n,</span> <span m="1215080">and</span> <span
  m="1215300">then</span> <span m="1215430">deletion,</span> <span
  m="1216160">we</span> <span m="1216300">pay</span> <span
  m="1216600">log</span> <span m="1216820">n</span> <span m="1217040">to</span>
  <span m="1217200">do</span> <span m="1217430">the</span> <span
  m="1217530">deletion,</span> <span m="1218360">but</span> <span
  m="1218520">then</span> <span m="1218660">we</span> <span
  m="1218760">subtract</span> <span m="1219410">off</span> <span
  m="1220310">the</span> <span m="1221090">coin</span> <span
  m="1222120">of</span> <span m="1222340">value</span> <span
  m="1222860">log</span> <span m="1223080">n,</span> <span m="1223470">so</span>
  <span m="1223690">that</span> <span m="1223920">hopefully</span> <span
  m="1224300">works</span> <span m="1224560">out</span> <span
  m="1224690">to</span> <span m="1224780">zero</span> <span
  m="1225275">0.</span> <span m="1225770">But,</span> <span
  m="1225970">again,</span> <span m="1226240">we</span> <span
  m="1226360">have</span> <span m="1226500">this</span> <span
  m="1226660">issue</span> <span m="1227020">that</span> <span
  m="1228210">coins</span> <span m="1228690">actually</span> <span
  m="1228970">have</span> <span m="1229120">different</span> <span
  m="1229580">amounts,</span> <span m="1230100">depending</span> <span
  m="1230560">on</span> <span m="1230650">what</span> <span
  m="1230840">the</span> <span m="1230900">current</span> <span
  m="1231410">value</span> <span m="1231850">of</span> <span
  m="1231980">n</span> <span m="1232230">was.</span></p><p><span
  m="1234670">You</span> <span m="1234860">can</span> <span
  m="1235120">actually</span> <span m="1235440">get</span> <span
  m="1235630">this</span> <span m="1235800">to</span> <span
  m="1235930">work</span> <span m="1237490">if</span> <span
  m="1237680">you</span> <span m="1237770">say,</span> <span
  m="1238030">well,</span> <span m="1239980">there</span> <span
  m="1240120">are</span> <span m="1240150">coins</span> <span
  m="1240550">of</span> <span m="1240650">varying</span> <span
  m="1241140">values</span> <span m="1241680">here,</span> <span
  m="1242690">and</span> <span m="1243070">I</span> <span
  m="1243130">think</span> <span m="1243390">the</span> <span
  m="1243490">invariant</span> <span m="1244080">is</span> <span
  m="1244270">if</span> <span m="1244380">you</span> <span
  m="1244490">have</span> <span m="1245260">a</span> <span
  m="1245360">current</span> <span m="1245640">structure</span> <span
  m="1246010">of</span> <span m="1246090">size</span> <span
  m="1246380">n,</span> <span m="1247060">you</span> <span
  m="1247170">will</span> <span m="1247270">have</span> <span
  m="1247510">one</span> <span m="1247750">coin</span> <span
  m="1248010">of</span> <span m="1248080">size</span> <span
  m="1248380">log</span> <span m="1248630">1,</span> <span
  m="1248940">log</span> <span m="1249210">2,</span> <span
  m="1249420">log</span> <span m="1249710">3,</span> <span
  m="1249980">log</span> <span m="1250240">4,</span> <span m="1250470">up</span>
  <span m="1250610">to</span> <span m="1250690">log</span> <span
  m="1251103">n.</span> <span m="1252590">Each</span> <span
  m="1252910">coin</span> <span m="1253830">corresponds</span> <span
  m="1254400">to</span> <span m="1254540">the</span> <span
  m="1254710">item</span> <span m="1255140">that</span> <span
  m="1255380">made</span> <span m="1255740">n</span> <span
  m="1256060">that</span> <span m="1256260">value.</span> <span
  m="1256870">And</span> <span m="1257030">so</span> <span
  m="1257190">when</span> <span m="1257310">you</span> <span
  m="1257400">delete</span> <span m="1257740">an</span> <span
  m="1257850">item</span> <span m="1258830">at</span> <span
  m="1259030">size</span> <span m="1259320">n,</span> <span
  m="1260000">you'll</span> <span m="1260150">be</span> <span
  m="1260290">removing</span> <span m="1260850">the</span> <span
  m="1260930">log</span> <span m="1261250">nth</span> <span
  m="1262150">coin,</span> <span m="1262590">the</span> <span
  m="1262690">coin</span> <span m="1262910">of</span> <span
  m="1262980">value</span> <span m="1263280">log</span> <span
  m="1263550">n.</span> <span m="1264450">So</span> <span m="1264760">you</span>
  <span m="1264840">can</span> <span m="1264980">actually</span> <span
  m="1265250">get</span> <span m="1265450">this</span> <span
  m="1266080">to</span> <span m="1266230">work</span> <span
  m="1266490">if</span> <span m="1266670">you're</span> <span
  m="1266780">careful.</span></p><p><span m="1270020">I</span> <span
  m="1270140">guess</span> <span m="1270380">the</span> <span
  m="1270610">invariant</span> <span m="1272550">is</span> <span
  m="1275910">one</span> <span m="1276450">coin</span> <span
  m="1278338">of</span> <span m="1278810">value</span> <span
  m="1280700">log</span> <span m="1281070">i</span> <span m="1282780">for</span>
  <span m="1284016">i</span> <span m="1284430">equals</span> <span
  m="1285186">1</span> <span m="1286890">to</span> <span m="1287030">n,</span>
  <span m="1289590">and</span> <span m="1289920">you</span> <span
  m="1289990">can</span> <span m="1290120">check</span> <span
  m="1290350">that</span> <span m="1290500">invariant</span> <span
  m="1290840">holds.</span> <span m="1291140">When</span> <span
  m="1291270">I</span> <span m="1291390">do</span> <span m="1291710">a</span>
  <span m="1291760">new</span> <span m="1291920">insertion,</span> <span
  m="1292390">I</span> <span m="1292450">increase</span> <span
  m="1292910">n</span> <span m="1293130">by</span> <span m="1293190">1</span>
  <span m="1293480">and</span> <span m="1293545">I</span> <span
  m="1293610">make</span> <span m="1293820">a</span> <span
  m="1293860">new</span> <span m="1293980">coin</span> <span
  m="1294230">of</span> <span m="1294300">log</span> <span
  m="1294570">that</span> <span m="1294730">value.</span> <span
  m="1295940">When</span> <span m="1296230">I</span> <span m="1296420">do</span>
  <span m="1296600">a</span> <span m="1296650">deletion,</span> <span
  m="1297680">I'm</span> <span m="1297830">going</span> <span
  m="1297950">to</span> <span m="1298030">remove</span> <span
  m="1298460">that</span> <span m="1299170">last</span> <span
  m="1299560">coin</span> <span m="1299870">of</span> <span
  m="1299960">log</span> <span m="1300130">n.</span> <span m="1301450">So</span>
  <span m="1301580">this</span> <span m="1301760">does</span> <span
  m="1301940">work</span> <span m="1302140">out.</span> <span
  m="1303470">So</span> <span m="1303630">we</span> <span m="1303720">got</span>
  <span m="1303920">rid</span> <span m="1304050">of</span> <span
  m="1304140">the</span> <span m="1304690">end</span> <span
  m="1304940">star.</span></p><p><span m="1306870">OK,</span> <span
  m="1307190">let's</span> <span m="1307290">use</span> <span
  m="1307460">this</span> <span m="1307550">same</span> <span
  m="1307860">method</span> <span m="1308240">to</span> <span
  m="1308390">analyze</span> <span m="1309520">table</span> <span
  m="1309820">doubling.</span> <span m="1312140">We</span> <span
  m="1312240">already</span> <span m="1312370">know</span> <span
  m="1312610">why</span> <span m="1312760">table</span> <span
  m="1313030">doubling</span> <span m="1313350">works,</span> <span
  m="1313766">but</span> <span m="1315430">good</span> <span
  m="1315630">to</span> <span m="1315700">think</span> <span
  m="1315950">of</span> <span m="1316060">it</span> <span
  m="1316180">from</span> <span m="1316450">different</span> <span
  m="1316800">perspectives.</span> <span m="1326530">And</span> <span
  m="1326700">it's</span> <span m="1326830">particularly</span> <span
  m="1327390">fun</span> <span m="1327630">to</span> <span
  m="1327700">think</span> <span m="1327940">of</span> <span
  m="1328040">the</span> <span m="1328100">coins</span> <span
  m="1328610">as</span> <span m="1328760">being</span> <span
  m="1329030">physical</span> <span m="1329640">objects</span> <span
  m="1330080">in</span> <span m="1330260">the</span> <span
  m="1330340">data</span> <span m="1330600">structure.</span> <span
  m="1331100">I</span> <span m="1331190">always</span> <span
  m="1331350">thought</span> <span m="1331510">it</span> <span
  m="1331610">would</span> <span m="1331710">fun</span> <span
  m="1332020">to</span> <span m="1332400">put</span> <span
  m="1332590">this</span> <span m="1332790">in</span> <span m="1332950">a</span>
  <span m="1333550">programming</span> <span m="1333980">language,</span> <span
  m="1334550">but</span> <span m="1334740">I</span> <span
  m="1334790">don't</span> <span m="1334970">think</span> <span
  m="1335120">there</span> <span m="1335230">is</span> <span
  m="1335330">a</span> <span m="1336160">programming</span> <span
  m="1336540">language</span> <span m="1336840">that</span> <span
  m="1336970">has</span> <span m="1337250">coins</span> <span
  m="1337600">in</span> <span m="1337905">it</span> <span m="1338057">in</span>
  <span m="1338210">this</span> <span m="1338290">sense</span> <span
  m="1340290">yet.</span> <span m="1341460">Maybe</span> <span
  m="1341640">you</span> <span m="1341720">can</span> <span
  m="1341840">fix</span> <span m="1342030">that.</span></p><p><span
  m="1342790">So</span> <span m="1343480">let's</span> <span
  m="1343730">go</span> <span m="1343870">back</span> <span
  m="1344120">to</span> <span m="1344230">table</span> <span
  m="1344530">doubling.</span> <span m="1365630">Let's</span> <span
  m="1366130">say</span> <span m="1367670">when</span> <span
  m="1367980">we</span> <span m="1368130">insert</span> <span
  m="1368750">an</span> <span m="1368880">item</span> <span
  m="1369270">into</span> <span m="1369600">a</span> <span
  m="1369640">table,</span> <span m="1370060">and</span> <span
  m="1370150">here</span> <span m="1370310">I'm</span> <span
  m="1370790">just</span> <span m="1371030">going</span> <span
  m="1371160">to</span> <span m="1371810">do</span> <span
  m="1372000">insertions.</span> <span m="1373420">We'll</span> <span
  m="1373530">worry</span> <span m="1373640">about</span> <span
  m="1373870">deletions</span> <span m="1375100">in</span> <span
  m="1375250">a</span> <span m="1375290">moment.</span> <span
  m="1378630">Whenever</span> <span m="1379220">I</span> <span
  m="1379300">do</span> <span m="1379420">an</span> <span
  m="1379500">insertion,</span> <span m="1380070">I'm</span> <span
  m="1380170">going</span> <span m="1380300">to</span> <span
  m="1380380">put</span> <span m="1380780">a</span> <span
  m="1380850">coin</span> <span m="1381480">on</span> <span
  m="1381850">that</span> <span m="1382150">item,</span> <span
  m="1383660">and</span> <span m="1384120">the</span> <span
  m="1384370">value</span> <span m="1384780">of</span> <span
  m="1384880">the</span> <span m="1384950">coin</span> <span
  m="1387440">is</span> <span m="1387560">going</span> <span
  m="1387710">to</span> <span m="1387800">be</span> <span m="1387935">a</span>
  <span m="1388070">constant.</span> <span m="1388990">I</span> <span
  m="1389170">going</span> <span m="1389235">to</span> <span
  m="1389300">give</span> <span m="1389370">the</span> <span
  m="1389440">constant</span> <span m="1389750">a</span> <span
  m="1389910">name</span> <span m="1390880">so</span> <span
  m="1391070">we</span> <span m="1391140">can</span> <span m="1391260">be</span>
  <span m="1391350">a</span> <span m="1391400">little</span> <span
  m="1391590">more</span> <span m="1392100">precise</span> <span
  m="1392530">in</span> <span m="1392620">a</span> <span
  m="1392670">moment--</span> <span m="1393850">c.</span></p><p><span
  m="1395910">So</span> <span m="1397390">here's</span> <span
  m="1397810">kind</span> <span m="1398000">of</span> <span
  m="1398090">the</span> <span m="1398160">typical--</span> <span
  m="1400220">well,</span> <span m="1400650">here's</span> <span
  m="1400850">an</span> <span m="1400930">array.</span> <span
  m="1403240">We</span> <span m="1403380">start</span> <span
  m="1403650">with</span> <span m="1403880">an</span> <span
  m="1403960">array</span> <span m="1404150">of</span> <span
  m="1404230">size</span> <span m="1404470">1,</span> <span
  m="1405420">and</span> <span m="1405880">we</span> <span
  m="1406040">insert</span> <span m="1406840">a</span> <span
  m="1406940">single</span> <span m="1407340">item</span> <span
  m="1407610">here,</span> <span m="1408610">and</span> <span
  m="1408780">we</span> <span m="1408870">put</span> <span m="1409020">a</span>
  <span m="1409060">coin</span> <span m="1409370">on</span> <span
  m="1409530">it.</span> <span m="1410692">Maybe</span> <span
  m="1410941">I'll</span> <span m="1411190">draw</span> <span
  m="1411480">the</span> <span m="1411590">coin</span> <span
  m="1413420">in</span> <span m="1414400">a</span> <span
  m="1414510">color,</span> <span m="1415610">which</span> <span
  m="1415720">I've</span> <span m="1415790">lost.</span> <span
  m="1416250">Here.</span> <span m="1419280">So</span> <span
  m="1420360">I</span> <span m="1420560">insert</span> <span
  m="1420870">some</span> <span m="1421080">item</span> <span
  m="1422120">x,</span> <span m="1423270">and</span> <span m="1423400">I</span>
  <span m="1423450">put</span> <span m="1423620">a</span> <span
  m="1423660">coin</span> <span m="1424810">on</span> <span
  m="1424990">that</span> <span m="1425160">item.</span> <span
  m="1428950">When</span> <span m="1429170">I</span> <span m="1429340">do</span>
  <span m="1429470">the</span> <span m="1429560">next</span> <span
  m="1429790">insertion,</span> <span m="1430240">let's</span> <span
  m="1430400">say</span> <span m="1430510">I</span> <span
  m="1430550">have</span> <span m="1430700">to</span> <span
  m="1430780">double</span> <span m="1431070">the</span> <span
  m="1431170">table</span> <span m="1431550">to</span> <span
  m="1431760">size</span> <span m="1432110">2.</span> <span
  m="1433100">I'm</span> <span m="1433260">going</span> <span
  m="1433460">to</span> <span m="1433710">use</span> <span m="1433980">up</span>
  <span m="1434110">that</span> <span m="1434300">coin,</span> <span
  m="1435020">so</span> <span m="1435240">erase</span> <span
  m="1435620">it,</span> <span m="1436420">put</span> <span m="1436630">a</span>
  <span m="1436740">new</span> <span m="1436910">coin</span> <span
  m="1437310">on</span> <span m="1437500">the</span> <span
  m="1437590">item</span> <span m="1438120">that</span> <span
  m="1438300">I</span> <span m="1438380">just</span> <span
  m="1438660">put</span> <span m="1438800">down.</span> <span
  m="1440120">Call</span> <span m="1440300">it</span> <span
  m="1440480">y.</span></p><p><span m="1442160">In</span> <span
  m="1442240">general--</span> <span m="1444030">so</span> <span
  m="1444300">the</span> <span m="1444540">next</span> <span
  m="1444790">time</span> <span m="1445070">I</span> <span
  m="1445600">double,</span> <span m="1445970">which</span> <span
  m="1446170">is</span> <span m="1446330">immediately,</span> <span
  m="1447520">I'm</span> <span m="1447670">going</span> <span
  m="1447800">to</span> <span m="1447870">go</span> <span m="1447970">to</span>
  <span m="1448050">size</span> <span m="1448330">4.</span> <span
  m="1449562">I</span> <span m="1449930">erase</span> <span
  m="1450470">this</span> <span m="1450650">coin,</span> <span
  m="1452300">then</span> <span m="1452730">I</span> <span
  m="1454300">put</span> <span m="1454460">a</span> <span
  m="1454500">coin</span> <span m="1454750">here.</span> <span
  m="1455550">When</span> <span m="1455750">I</span> <span
  m="1455800">insert</span> <span m="1456380">item,</span> <span
  m="1456720">of</span> <span m="1456840">course,</span> <span
  m="1457110">letter</span> <span m="1457290">after</span> <span
  m="1457450">z</span> <span m="1458070">is</span> <span m="1458270">w.</span>
  <span m="1459660">Then</span> <span m="1459960">I</span> <span
  m="1460130">put</span> <span m="1460330">another</span> <span
  m="1460620">coin</span> <span m="1461380">when</span> <span
  m="1461570">I</span> <span m="1461610">have</span> <span m="1461740">to</span>
  <span m="1461830">double</span> <span m="1462140">again,</span> <span
  m="1463670">so</span> <span m="1465200">here</span> <span
  m="1466630">I'm</span> <span m="1466770">going</span> <span
  m="1466890">to</span> <span m="1466980">use</span> <span
  m="1467290">these</span> <span m="1467590">coins</span> <span
  m="1468340">to</span> <span m="1469060">charge</span> <span
  m="1469490">for</span> <span m="1469590">the</span> <span
  m="1469690">doubling,</span> <span m="1471790">and</span> <span
  m="1472000">then</span> <span m="1472270">in</span> <span
  m="1472380">the</span> <span m="1472460">next</span> <span
  m="1472760">round,</span> <span m="1473060">I'm</span> <span
  m="1473120">going</span> <span m="1473240">to</span> <span
  m="1473300">be</span> <span m="1473410">inserting</span> <span
  m="1473750">here,</span> <span m="1474720">here,</span> <span
  m="1474900">and</span> <span m="1474910">here,</span> <span
  m="1475740">and</span> <span m="1475870">I'll</span> <span
  m="1475940">be</span> <span m="1476050">putting</span> <span
  m="1476320">a</span> <span m="1476400">coin</span> <span
  m="1476670">here,</span> <span m="1478300">here,</span> <span
  m="1478720">here,</span> <span m="1479190">and</span> <span
  m="1479420">here.</span></p><p><span m="1480110">In</span> <span
  m="1480280">general,</span> <span m="1480660">you</span> <span
  m="1480960">start</span> <span m="1481190">to</span> <span
  m="1481290">see</span> <span m="1481450">the</span> <span
  m="1481540">pattern--</span> <span m="1482090">so</span> <span
  m="1482460">I</span> <span m="1482830">used</span> <span m="1482905">up</span>
  <span m="1482980">these</span> <span m="1483170">guys--</span> <span
  m="1484690">that</span> <span m="1485070">by</span> <span
  m="1485270">the</span> <span m="1485360">time</span> <span
  m="1485640">I</span> <span m="1485700">have</span> <span m="1485880">to</span>
  <span m="1485980">double</span> <span m="1486350">again,</span> <span
  m="1487250">half</span> <span m="1487710">of</span> <span
  m="1487820">the</span> <span m="1487960">items</span> <span
  m="1488340">have</span> <span m="1488570">coins,</span> <span
  m="1489580">the</span> <span m="1489700">other</span> <span
  m="1489890">half</span> <span m="1490150">don't,</span> <span
  m="1490770">because</span> <span m="1490960">I</span> <span
  m="1491010">already</span> <span m="1491220">used</span> <span
  m="1491500">them.</span> <span m="1492580">You</span> <span
  m="1492710">have</span> <span m="1492765">to</span> <span
  m="1492820">be</span> <span m="1492940">careful</span> <span
  m="1493260">not</span> <span m="1493430">to</span> <span
  m="1493490">use</span> <span m="1493630">a</span> <span
  m="1493680">coin</span> <span m="1493900">twice,</span> <span
  m="1494210">because</span> <span m="1494400">you</span> <span
  m="1494540">only</span> <span m="1494720">get</span> <span
  m="1494870">to</span> <span m="1494980">use</span> <span m="1495120">it</span>
  <span m="1495230">once.</span></p><p><span m="1496840">You</span> <span
  m="1496930">can't</span> <span m="1497150">divide</span> <span
  m="1497540">money</span> <span m="1498070">into</span> <span
  m="1498250">double</span> <span m="1498500">money</span> <span
  m="1499706">unless</span> <span m="1499923">you're</span> <span
  m="1500140">doing</span> <span m="1500350">stocks,</span> <span
  m="1500770">I</span> <span m="1500840">guess.</span> <span
  m="1504180">As</span> <span m="1504350">soon</span> <span
  m="1504580">as</span> <span m="1504740">I</span> <span m="1504840">get</span>
  <span m="1505070">to</span> <span m="1505230">a</span> <span
  m="1505280">place</span> <span m="1505650">where</span> <span
  m="1505870">the</span> <span m="1506210">array</span> <span
  m="1506590">is</span> <span m="1506710">completely</span> <span
  m="1507060">full</span> <span m="1507400">when</span> <span
  m="1507560">n</span> <span m="1507670">equals</span> <span
  m="1507920">m,</span> <span m="1508730">the</span> <span
  m="1508850">last</span> <span m="1509230">half</span> <span
  m="1509420">of</span> <span m="1509490">the</span> <span
  m="1509580">items</span> <span m="1509840">will</span> <span
  m="1509960">have</span> <span m="1510220">coins.</span> <span
  m="1510570">I'm</span> <span m="1510650">going</span> <span
  m="1510850">to</span> <span m="1510980">use</span> <span
  m="1511340">them</span> <span m="1512260">in</span> <span
  m="1512370">order</span> <span m="1512490">to</span> <span
  m="1512590">pay</span> <span m="1512870">for</span> <span
  m="1513030">the</span> <span m="1513130">doubling,</span> <span
  m="1514100">so</span> <span m="1514270">the</span> <span
  m="1514370">number</span> <span m="1514660">of</span> <span
  m="1514760">coins</span> <span m="1515140">here</span> <span
  m="1515900">will</span> <span m="1516160">be</span> <span m="1517270">n</span>
  <span m="1517460">over</span> <span m="1517620">2.</span> <span
  m="1519930">So</span> <span m="1520150">this</span> <span
  m="1520330">is</span> <span m="1520440">why</span> <span m="1520750">I</span>
  <span m="1520910">wanted</span> <span m="1521180">to</span> <span
  m="1521280">make</span> <span m="1521420">this</span> <span
  m="1521560">constant</span> <span m="1521865">a</span> <span
  m="1522017">little</span> <span m="1522170">explicit,</span> <span
  m="1523510">because</span> <span m="1523690">it</span> <span
  m="1523780">has</span> <span m="1523990">to</span> <span m="1524100">be</span>
  <span m="1525090">bigger</span> <span m="1525390">than</span> <span
  m="1525590">2</span> <span m="1526140">in</span> <span m="1526230">some</span>
  <span m="1526440">sense.</span> <span m="1526800">However</span> <span
  m="1527020">much</span> <span m="1527250">work--</span> <span
  m="1527630">let's</span> <span m="1527790">say</span> <span
  m="1527930">it</span> <span m="1528030">takes</span> <span
  m="1529630">a</span> <span m="1529970">times</span> <span m="1530330">n</span>
  <span m="1530720">work</span> <span m="1531040">in</span> <span
  m="1531140">order</span> <span m="1531300">to</span> <span
  m="1531440">do</span> <span m="1531600">doubling,</span> <span
  m="1532590">then</span> <span m="1532790">this</span> <span
  m="1532930">constant</span> <span m="1533420">should</span> <span
  m="1533620">be</span> <span m="1533790">something</span> <span
  m="1534100">like</span> <span m="1534290">two</span> <span
  m="1534470">times</span> <span m="1534760">a,</span> <span
  m="1535830">because</span> <span m="1536010">I</span> <span
  m="1536090">need</span> <span m="1536300">to</span> <span
  m="1536470">do</span> <span m="1536670">the</span> <span
  m="1536760">work</span> <span m="1537070">to</span> <span
  m="1537160">double,</span> <span m="1538200">but</span> <span
  m="1538350">I</span> <span m="1538430">only</span> <span
  m="1538700">have</span> <span m="1538900">n</span> <span
  m="1539050">over</span> <span m="1539230">2</span> <span
  m="1539430">coins</span> <span m="1539780">to</span> <span
  m="1539870">pay</span> <span m="1540100">for</span> <span
  m="1540360">it.</span> <span m="1541740">I</span> <span
  m="1541800">don't</span> <span m="1542060">get</span> <span
  m="1542280">coins</span> <span m="1542600">over</span> <span
  m="1542760">here.</span></p><p><span m="1544640">So</span> <span
  m="1546360">when</span> <span m="1546840">we</span> <span
  m="1546970">double,</span> <span m="1552385">the</span> <span
  m="1552826">last</span> <span m="1553270">n</span> <span
  m="1553450">over</span> <span m="1553610">2</span> <span
  m="1554420">items</span> <span m="1558356">have</span> <span
  m="1558850">coins,</span> <span m="1561710">and</span> <span
  m="1561920">so</span> <span m="1563170">the</span> <span
  m="1563380">amortized</span> <span m="1563880">cost</span> <span
  m="1573124">of</span> <span m="1573536">the</span> <span
  m="1573950">doubling</span> <span m="1574580">operation</span> <span
  m="1575770">is</span> <span m="1576030">going</span> <span
  m="1576280">to</span> <span m="1576420">be</span> <span m="1577540">the</span>
  <span m="1577660">real</span> <span m="1577920">cost,</span> <span
  m="1578450">which</span> <span m="1578510">is</span> <span
  m="1578580">sum</span> <span m="1579000">theta</span> <span
  m="1579497">n</span> <span m="1580990">minus</span> <span
  m="1581460">the</span> <span m="1581530">number</span> <span
  m="1581740">of</span> <span m="1581820">coins</span> <span
  m="1582160">I</span> <span m="1582240">can</span> <span
  m="1582400">remove</span> <span m="1583130">and</span> <span
  m="1583410">their</span> <span m="1583750">value.</span> <span
  m="1584620">So</span> <span m="1584910">it's</span> <span
  m="1585020">going</span> <span m="1585140">to</span> <span
  m="1585200">be</span> <span m="1585300">minus</span> <span
  m="1585720">c</span> <span m="1586500">times</span> <span m="1586850">n</span>
  <span m="1587010">over</span> <span m="1587180">2</span> <span
  m="1589070">and,</span> <span m="1589290">the</span> <span
  m="1589350">point</span> <span m="1589570">is,</span> <span
  m="1589670">this</span> <span m="1589880">is</span> <span m="1590010">0</span>
  <span m="1591000">if</span> <span m="1591260">we</span> <span
  m="1591360">set</span> <span m="1592230">c</span> <span
  m="1592600">large.</span> <span m="1595110">It</span> <span
  m="1595420">only</span> <span m="1595680">has</span> <span
  m="1595810">to</span> <span m="1595900">be</span> <span m="1595980">a</span>
  <span m="1596030">constant.</span> <span m="1596890">It</span> <span
  m="1597040">needs</span> <span m="1597210">to</span> <span
  m="1597300">be</span> <span m="1597540">bigger</span> <span
  m="1597820">than</span> <span m="1597990">2</span> <span
  m="1598240">times</span> <span m="1598700">that</span> <span
  m="1598910">constant.</span></p><p><span m="1601150">And</span> <span
  m="1601260">usually</span> <span m="1601690">when</span> <span
  m="1601860">you're</span> <span m="1602390">working</span> <span
  m="1602690">with</span> <span m="1602860">coins,</span> <span
  m="1603240">you</span> <span m="1603390">want</span> <span
  m="1603580">to</span> <span m="1603650">make</span> <span
  m="1603850">the</span> <span m="1603920">constants</span> <span
  m="1604390">explicit</span> <span m="1604870">just</span> <span
  m="1605050">to</span> <span m="1605120">make</span> <span
  m="1605280">sure</span> <span m="1605410">there's</span> <span
  m="1605570">no</span> <span m="1605740">circular</span> <span
  m="1606160">dependence</span> <span m="1606590">on</span> <span
  m="1606670">constants,</span> <span m="1607640">make</span> <span
  m="1607830">sure</span> <span m="1607970">there</span> <span
  m="1608120">is</span> <span m="1608790">a</span> <span
  m="1608930">valid</span> <span m="1609290">choice</span> <span
  m="1609570">of</span> <span m="1609640">c</span> <span m="1610920">that</span>
  <span m="1612360">annihilates</span> <span m="1613000">whatever</span> <span
  m="1613270">cost</span> <span m="1613590">you</span> <span
  m="1613680">want</span> <span m="1613810">to</span> <span
  m="1613870">get</span> <span m="1614010">rid</span> <span
  m="1614130">of.</span> <span m="1616030">So</span> <span
  m="1616270">this</span> <span m="1616510">is</span> <span
  m="1616730">the</span> <span m="1620100">accounting</span> <span
  m="1620610">method</span> <span m="1620940">view</span> <span
  m="1621640">of</span> <span m="1621770">table</span> <span
  m="1622060">doubling.</span></p><p><span m="1622710">Any</span> <span
  m="1622880">questions</span> <span m="1623320">so</span> <span
  m="1623440">far?</span> <span m="1626500">So</span> <span
  m="1626690">far</span> <span m="1626880">so</span> <span
  m="1627040">good.</span> <span m="1627870">Pretty</span> <span
  m="1628100">simple</span> <span m="1629080">example.</span> <span
  m="1630770">Let's</span> <span m="1631010">get</span> <span
  m="1631160">to</span> <span m="1631260">more</span> <span
  m="1631460">interesting</span> <span m="1631780">examples.</span> <span
  m="1633780">You</span> <span m="1634000">also</span> <span
  m="1634270">think</span> <span m="1634460">about</span> <span
  m="1634630">the</span> <span m="1634710">amortized</span> <span
  m="1635100">cost</span> <span m="1635350">of</span> <span
  m="1635450">an</span> <span m="1635550">insert.</span> <span
  m="1636130">It</span> <span m="1636280">costs</span> <span
  m="1636690">constant</span> <span m="1637070">real</span> <span
  m="1637310">time.</span> <span m="1637760">Actual</span> <span
  m="1638120">cost</span> <span m="1638480">is</span> <span
  m="1638580">constant.</span> <span m="1639570">You</span> <span
  m="1639600">have</span> <span m="1639770">to</span> <span
  m="1640070">also</span> <span m="1640360">deposit</span> <span
  m="1640780">one</span> <span m="1640950">coin,</span> <span
  m="1641310">which</span> <span m="1641470">costs</span> <span
  m="1641720">constant</span> <span m="1642030">time</span> <span
  m="1642270">so</span> <span m="1642440">the</span> <span
  m="1642560">amortized</span> <span m="1642970">cost</span> <span
  m="1643200">of</span> <span m="1643260">the</span> <span
  m="1643320">insert</span> <span m="1643650">is</span> <span
  m="1643730">still</span> <span m="1643990">constant.</span> <span
  m="1645850">So</span> <span m="1646460">that's</span> <span
  m="1646760">good.</span></p><p><span m="1649170">Still</span> <span
  m="1649580">we</span> <span m="1649690">don't</span> <span
  m="1649860">know</span> <span m="1649950">how</span> <span
  m="1650040">to</span> <span m="1650140">deal</span> <span
  m="1650320">with</span> <span m="1650440">deletions,</span> <span
  m="1652170">but</span> <span m="1652300">let</span> <span
  m="1652440">me</span> <span m="1652530">give</span> <span
  m="1652720">you</span> <span m="1652940">a</span> <span
  m="1653020">kind</span> <span m="1653300">of</span> <span
  m="1653510">reverse</span> <span m="1654670">perspective</span> <span
  m="1656160">on</span> <span m="1658710">the</span> <span
  m="1658820">accounting</span> <span m="1659270">method.</span> <span
  m="1663600">It's,</span> <span m="1663730">again,</span> <span
  m="1664370">equivalent</span> <span m="1664850">in</span> <span
  m="1664920">a</span> <span m="1664970">certain</span> <span
  m="1665260">sense,</span> <span m="1665620">but</span> <span
  m="1666730">in</span> <span m="1666960">another</span> <span
  m="1667230">sense</span> <span m="1667510">may</span> <span
  m="1667650">be</span> <span m="1667770">more</span> <span
  m="1668000">intuitive</span> <span m="1668560">some</span> <span
  m="1668810">of</span> <span m="1668890">the</span> <span
  m="1668980">time</span> <span m="1669350">for</span> <span
  m="1669520">some</span> <span m="1669720">people.</span> <span
  m="1671110">It's</span> <span m="1671220">actually</span> <span
  m="1671450">not</span> <span m="1671680">in</span> <span
  m="1671760">the</span> <span m="1671830">textbook,</span> <span
  m="1673110">but</span> <span m="1673300">it's</span> <span
  m="1673470">the</span> <span m="1673540">one</span> <span m="1673760">I</span>
  <span m="1673830">use</span> <span m="1674080">the</span> <span
  m="1674150">most</span> <span m="1674700">so</span> <span m="1675850">I</span>
  <span m="1675950">figure</span> <span m="1676050">it's</span> <span
  m="1676170">worth</span> <span m="1676400">teaching.</span></p><p><span
  m="1678350">It's</span> <span m="1678480">called</span> <span
  m="1678670">the</span> <span m="1678740">charging</span> <span
  m="1679240">method.</span> <span m="1682590">It's</span> <span
  m="1683210">also</span> <span m="1683520">a</span> <span
  m="1683570">little</span> <span m="1683830">bit</span> <span
  m="1684030">more</span> <span m="1685090">time</span> <span
  m="1685380">travel-y,</span> <span m="1685880">if</span> <span
  m="1686037">you</span> <span m="1686195">will,</span> <span
  m="1686510">so</span> <span m="1686730">if</span> <span m="1686820">you</span>
  <span m="1686890">like</span> <span m="1687080">time</span> <span
  m="1687240">travel,</span> <span m="1687590">this</span> <span
  m="1687760">method</span> <span m="1688040">is</span> <span
  m="1688210">for</span> <span m="1688440">you,</span> <span
  m="1691710">or</span> <span m="1692040">maybe</span> <span
  m="1692440">a</span> <span m="1692490">more</span> <span
  m="1692650">pessimistic</span> <span m="1693230">view</span> <span
  m="1693440">is</span> <span m="1694140">blaming</span> <span
  m="1694680">the</span> <span m="1694750">past</span> <span
  m="1695320">for</span> <span m="1695500">your</span> <span
  m="1695690">mistakes.</span> <span m="1697560">So</span> <span
  m="1700350">what</span> <span m="1700560">we're</span> <span
  m="1700650">going</span> <span m="1700860">to</span> <span
  m="1700960">do</span> <span m="1701320">is</span> <span
  m="1701500">allow--</span> <span m="1703060">there's</span> <span
  m="1703210">no</span> <span m="1703340">bank</span> <span
  m="1703620">balance</span> <span m="1703990">anymore,</span> <span
  m="1705450">although</span> <span m="1706100">it's</span> <span
  m="1706250">essentially</span> <span m="1706660">there.</span> <span
  m="1707540">We're</span> <span m="1707790">going</span> <span
  m="1708060">to</span> <span m="1708300">allow</span> <span
  m="1709120">operations</span> <span m="1709890">to</span> <span
  m="1710050">charge</span> <span m="1713660">some</span> <span
  m="1713900">of</span> <span m="1714050">their</span> <span
  m="1714170">cost</span> <span m="1715090">retroactively</span> <span
  m="1715890">to</span> <span m="1716020">the</span> <span
  m="1716100">past,</span> <span m="1725870">not</span> <span
  m="1726160">the</span> <span m="1726240">future.</span></p><p><span
  m="1728616">I</span> <span m="1729070">actually</span> <span
  m="1729370">have</span> <span m="1729510">a</span> <span
  m="1729570">data</span> <span m="1729800">structures</span> <span
  m="1730180">paper</span> <span m="1730500">which</span> <span
  m="1730700">proves</span> <span m="1731110">that</span> <span
  m="1731660">while</span> <span m="1731860">time</span> <span
  m="1732080">travel</span> <span m="1732320">to</span> <span
  m="1732410">the</span> <span m="1732480">past</span> <span
  m="1732880">is</span> <span m="1732980">plausible,</span> <span
  m="1733460">time</span> <span m="1733680">travel</span> <span
  m="1733910">to</span> <span m="1733990">the</span> <span
  m="1734070">future</span> <span m="1734380">is</span> <span
  m="1734490">not</span> <span m="1734930">computationally.</span> <span
  m="1735670">So</span> <span m="1736440">you're</span> <span
  m="1736760">not</span> <span m="1737010">allowed</span> <span
  m="1737270">to</span> <span m="1737360">time</span> <span
  m="1737530">travel</span> <span m="1737780">to</span> <span
  m="1737880">the</span> <span m="1737960">future,</span> <span
  m="1738340">only</span> <span m="1738620">allowed</span> <span
  m="1738860">to</span> <span m="1738940">go</span> <span m="1739090">to</span>
  <span m="1739180">the</span> <span m="1739260">past,</span> <span
  m="1740000">and</span> <span m="1740200">say,</span> <span
  m="1740370">hey,</span> <span m="1741980">give</span> <span
  m="1742130">me</span> <span m="1742200">$5.</span> <span
  m="1745710">But</span> <span m="1746610">you've</span> <span
  m="1746780">got</span> <span m="1746960">to</span> <span m="1747020">be</span>
  <span m="1747480">a</span> <span m="1747590">little</span> <span
  m="1747790">bit</span> <span m="1747970">conservative</span> <span
  m="1748500">in</span> <span m="1748600">how</span> <span
  m="1748740">you</span> <span m="1748870">do</span> <span
  m="1749080">it.</span> <span m="1749210">You</span> <span
  m="1749310">can't</span> <span m="1749680">just</span> <span
  m="1749870">keep</span> <span m="1750090">charging</span> <span
  m="1750540">the</span> <span m="1750600">same</span> <span
  m="1750850">operation</span> <span m="1751420">a</span> <span
  m="1751450">million</span> <span m="1751800">times,</span> <span
  m="1752770">because</span> <span m="1753170">then</span> <span
  m="1753330">the</span> <span m="1753400">cost</span> <span
  m="1753740">of</span> <span m="1753810">that</span> <span
  m="1753980">operation</span> <span m="1754480">is</span> <span
  m="1754590">going</span> <span m="1754880">up.</span> <span
  m="1755450">At</span> <span m="1755660">the</span> <span
  m="1755750">end</span> <span m="1755920">of</span> <span
  m="1756000">the</span> <span m="1756090">day,</span> <span
  m="1756360">every</span> <span m="1756600">operation</span> <span
  m="1757110">had</span> <span m="1757320">to</span> <span
  m="1757400">have</span> <span m="1757580">paid</span> <span
  m="1757910">for</span> <span m="1758280">its</span> <span
  m="1759000">total</span> <span m="1759400">charge.</span></p><p><span
  m="1760320">So</span> <span m="1760400">there's</span> <span
  m="1760515">the</span> <span m="1760630">actual</span> <span
  m="1761040">cost,</span> <span m="1761390">which</span> <span
  m="1761540">it</span> <span m="1761745">starts</span> <span
  m="1761950">with,</span> <span m="1762740">and</span> <span
  m="1762940">then</span> <span m="1763170">there's</span> <span
  m="1763390">whatever</span> <span m="1763750">it's</span> <span
  m="1763890">being</span> <span m="1764100">charged</span> <span
  m="1764560">by</span> <span m="1764740">the</span> <span
  m="1764830">future.</span> <span m="1765450">So</span> <span
  m="1765530">from</span> <span m="1765710">an</span> <span
  m="1765780">analysis</span> <span m="1766290">perspective,</span> <span
  m="1766750">you're</span> <span m="1766850">thinking</span> <span
  m="1767150">about</span> <span m="1767350">the</span> <span
  m="1767410">future.</span> <span m="1767740">What</span> <span
  m="1767970">could</span> <span m="1768100">potentially</span> <span
  m="1768630">charge</span> <span m="1769050">me?</span> <span
  m="1771650">Again,</span> <span m="1773320">you</span> <span
  m="1773390">can</span> <span m="1774080">define</span> <span
  m="1774620">the</span> <span m="1774750">amortized</span> <span
  m="1775310">cost</span> <span m="1775640">of</span> <span
  m="1775730">an</span> <span m="1775820">operation</span> <span
  m="1778830">is</span> <span m="1779060">going</span> <span
  m="1779340">to</span> <span m="1779480">be</span> <span m="1780680">the</span>
  <span m="1780980">actual</span> <span m="1781340">cost</span> <span
  m="1785940">minus</span> <span m="1787280">the</span> <span
  m="1787380">total</span> <span m="1787720">charge</span> <span
  m="1788330">to</span> <span m="1788520">the</span> <span
  m="1788600">past.</span></p><p><span m="1792600">So</span> <span
  m="1793080">when</span> <span m="1793270">we</span> <span
  m="1793350">charge</span> <span m="1793670">to</span> <span
  m="1793730">the</span> <span m="1793800">past,</span> <span
  m="1794160">we</span> <span m="1794320">get</span> <span
  m="1794580">free</span> <span m="1795000">dollars</span> <span
  m="1795420">in</span> <span m="1795560">the</span> <span
  m="1795630">present,</span> <span m="1797610">but</span> <span
  m="1798210">we</span> <span m="1798450">have</span> <span
  m="1798610">to</span> <span m="1798720">pay</span> <span
  m="1798950">for</span> <span m="1799130">whatever</span> <span
  m="1799400">the</span> <span m="1799480">future</span> <span
  m="1799770">is</span> <span m="1799860">going</span> <span
  m="1800070">to</span> <span m="1800180">do.</span> <span m="1804500">So</span>
  <span m="1804790">we</span> <span m="1805210">have</span> <span
  m="1805420">to</span> <span m="1805500">imagine</span> <span
  m="1805910">how</span> <span m="1806060">many</span> <span
  m="1806210">times</span> <span m="1806520">could</span> <span
  m="1806660">I</span> <span m="1806730">get</span> <span
  m="1806910">charged</span> <span m="1807170">in</span> <span
  m="1807240">the</span> <span m="1807300">future?</span> <span
  m="1808110">I'm</span> <span m="1808143">going</span> <span
  m="1808176">to</span> <span m="1808210">have</span> <span
  m="1808420">to</span> <span m="1808550">pay</span> <span
  m="1808760">for</span> <span m="1808920">that</span> <span
  m="1809230">now</span> <span m="1809600">in</span> <span m="1809700">a</span>
  <span m="1809760">consistent</span> <span m="1810370">time</span> <span
  m="1810680">line.</span> <span m="1812150">You</span> <span
  m="1812360">will</span> <span m="1812510">have</span> <span
  m="1812690">to</span> <span m="1812920">have</span> <span
  m="1813040">paid</span> <span m="1813160">for</span> <span
  m="1813900">things</span> <span m="1814170">that</span> <span
  m="1814280">come</span> <span m="1814450">in</span> <span
  m="1814520">the</span> <span m="1814580">future.</span></p><p><span
  m="1817690">So</span> <span m="1817940">let's</span> <span
  m="1818200">do</span> <span m="1818310">an</span> <span
  m="1818390">example.</span> <span m="1819560">Actually</span> <span
  m="1820220">it</span> <span m="1820310">sounds</span> <span
  m="1821210">crazy</span> <span m="1821660">and</span> <span
  m="1821780">weird,</span> <span m="1822070">but</span> <span
  m="1822230">I</span> <span m="1822270">actually</span> <span
  m="1822490">find</span> <span m="1822690">this</span> <span
  m="1822810">a</span> <span m="1822880">lot</span> <span
  m="1823050">more</span> <span m="1823190">intuitive</span> <span
  m="1823560">to</span> <span m="1823650">think</span> <span
  m="1823830">about</span> <span m="1824940">even</span> <span
  m="1825200">these</span> <span m="1825740">very</span> <span
  m="1825950">examples.</span> <span m="1829560">Let's</span> <span
  m="1829760">start</span> <span m="1830090">with</span> <span
  m="1830600">table</span> <span m="1830900">doubling.</span> <span
  m="1858610">So</span> <span m="1860030">we</span> <span
  m="1860180">have</span> <span m="1860330">this</span> <span
  m="1860460">kind</span> <span m="1860630">of</span> <span
  m="1860700">picture</span> <span m="1861030">already.</span> <span
  m="1861780">It's</span> <span m="1861910">going</span> <span
  m="1862030">to</span> <span m="1862100">be</span> <span
  m="1862220">pretty</span> <span m="1862440">much</span> <span
  m="1862690">the</span> <span m="1862780">same.</span> <span
  m="1865200">After</span> <span m="1865540">I've</span> <span
  m="1865660">doubled</span> <span m="1865980">the</span> <span
  m="1866050">table,</span> <span m="1867820">my</span> <span
  m="1868080">array</span> <span m="1868570">is</span> <span
  m="1868810">half</span> <span m="1869080">full</span> <span
  m="1870520">and,</span> <span m="1871980">again,</span> <span
  m="1872300">insertion</span> <span m="1872810">only,</span> <span
  m="1873100">although</span> <span m="1873320">we'll</span> <span
  m="1873730">insertion</span> <span m="1874015">and</span> <span
  m="1874300">deletion</span> <span m="1874530">in</span> <span
  m="1874600">the</span> <span m="1874660">moment.</span> <span
  m="1876080">In</span> <span m="1876250">order</span> <span
  m="1876430">to</span> <span m="1876580">get</span> <span
  m="1876850">from</span> <span m="1877110">half</span> <span
  m="1877360">full</span> <span m="1877740">to</span> <span
  m="1877960">completely</span> <span m="1878410">full,</span> <span
  m="1879140">I</span> <span m="1879280">have</span> <span m="1879470">to</span>
  <span m="1879600">do</span> <span m="1881140">n</span> <span
  m="1881320">over</span> <span m="1881470">2</span> <span
  m="1881630">insertions.</span></p><p><span m="1883074">It's</span> <span
  m="1883566">looking</span> <span m="1884060">very</span> <span
  m="1884290">similar,</span> <span m="1885560">but</span> <span
  m="1885620">what</span> <span m="1885860">I'm</span> <span
  m="1885920">going</span> <span m="1886040">to</span> <span
  m="1886100">say</span> <span m="1886290">is</span> <span
  m="1886390">that</span> <span m="1886540">when</span> <span
  m="1886790">I</span> <span m="1886910">double</span> <span
  m="1888110">the</span> <span m="1888270">array</span> <span
  m="1889440">next</span> <span m="1889580">time,</span> <span
  m="1891440">I'm</span> <span m="1891640">going</span> <span
  m="1891840">to</span> <span m="1891950">charge</span> <span
  m="1892800">that</span> <span m="1893070">doubling</span> <span
  m="1894040">to</span> <span m="1894840">those</span> <span
  m="1895230">operations.</span> <span m="1899340">In</span> <span
  m="1899440">general,</span> <span m="1901310">you</span> <span
  m="1901440">can</span> <span m="1901570">actually</span> <span
  m="1901780">say</span> <span m="1901980">this</span> <span
  m="1902150">quite</span> <span m="1902420">concisely--</span> <span
  m="1903540">whenever</span> <span m="1903890">I</span> <span
  m="1903960">do</span> <span m="1904110">a</span> <span
  m="1904160">doubling</span> <span m="1904590">operation,</span> <span
  m="1905740">I'm</span> <span m="1905800">going</span> <span
  m="1905920">to</span> <span m="1905980">charge</span> <span
  m="1906400">it</span> <span m="1910310">to</span> <span m="1910860">all</span>
  <span m="1911150">the</span> <span m="1911250">insertions</span> <span
  m="1913740">since</span> <span m="1914080">the</span> <span
  m="1914160">last</span> <span m="1914460">doubling.</span> <span
  m="1921560">That's</span> <span m="1921730">a</span> <span
  m="1921770">very</span> <span m="1921960">clear</span> <span
  m="1922410">set</span> <span m="1922620">of</span> <span
  m="1922700">items.</span> <span m="1924080">Doublings</span> <span
  m="1924570">happen,</span> <span m="1925140">and</span> <span
  m="1925300">then</span> <span m="1925640">they</span> <span
  m="1925740">don't</span> <span m="1925900">happen</span> <span
  m="1926150">for</span> <span m="1926270">a</span> <span
  m="1926330">while,</span> <span m="1926690">just</span> <span
  m="1926910">all</span> <span m="1927080">those</span> <span
  m="1927230">insertions</span> <span m="1927680">that</span> <span
  m="1927780">happened</span> <span m="1928080">since</span> <span
  m="1928270">the</span> <span m="1928340">last</span> <span
  m="1928580">doubling</span> <span m="1929380">charged</span> <span
  m="1929710">to</span> <span m="1929800">them.</span></p><p><span
  m="1931440">And</span> <span m="1931820">how</span> <span
  m="1932040">many</span> <span m="1932290">are</span> <span
  m="1932480">there?</span> <span m="1933010">Well,</span> <span
  m="1933270">as</span> <span m="1933390">we've</span> <span
  m="1933540">argued,</span> <span m="1934260">there</span> <span
  m="1934415">are</span> <span m="1934570">n</span> <span
  m="1934730">over</span> <span m="1934870">2</span> <span m="1935060">of</span>
  <span m="1935170">them,</span> <span m="1938010">and</span> <span
  m="1938250">the</span> <span m="1938310">cost</span> <span
  m="1939540">of--</span> <span m="1940190">in</span> <span
  m="1940510">order</span> <span m="1940700">to</span> <span
  m="1940910">make</span> <span m="1941400">this</span> <span
  m="1941580">doubling</span> <span m="1941970">free,</span> <span
  m="1942460">I</span> <span m="1942540">need</span> <span m="1942700">to</span>
  <span m="1942780">charge</span> <span m="1943280">theta</span> <span
  m="1943600">n.</span> <span m="1945150">So</span> <span
  m="1946600">this</span> <span m="1946840">doubling</span> <span
  m="1947380">cost</span> <span m="1947790">theta</span> <span
  m="1948290">n,</span> <span m="1949320">but</span> <span
  m="1949490">there's</span> <span m="1949660">n</span> <span
  m="1949830">over</span> <span m="1949990">things</span> <span
  m="1950260">to</span> <span m="1950360">charge</span> <span
  m="1950740">to.</span> <span m="1951200">I'm</span> <span
  m="1951290">going</span> <span m="1951410">to</span> <span
  m="1951500">uniformly</span> <span m="1952120">distribute</span> <span
  m="1952640">my</span> <span m="1952790">charge</span> <span
  m="1953580">to</span> <span m="1953740">them,</span> <span
  m="1955160">which</span> <span m="1955490">means</span> <span
  m="1956010">I'm</span> <span m="1956650">charging</span> <span
  m="1957510">a</span> <span m="1957600">constant</span> <span
  m="1958090">amount</span> <span m="1958520">to</span> <span
  m="1958660">each.</span> <span m="1961310">And</span> <span
  m="1961720">the</span> <span m="1961790">key</span> <span
  m="1962050">fact</span> <span m="1962450">here</span> <span
  m="1962730">is</span> <span m="1962910">that</span> <span m="1963050">I</span>
  <span m="1963170">only</span> <span m="1963510">charge</span> <span
  m="1966340">an</span> <span m="1966410">insert</span> <span
  m="1967630">once.</span> <span m="1969420">Because</span> <span
  m="1969820">of</span> <span m="1969930">this</span> <span
  m="1970090">since</span> <span m="1970470">clause,</span> <span
  m="1971830">I</span> <span m="1971960">never</span> <span
  m="1972390">will</span> <span m="1972510">charge</span> <span
  m="1972800">an</span> <span m="1972900">item</span> <span
  m="1973240">twice</span> <span m="1974390">as</span> <span
  m="1974470">long</span> <span m="1974620">as</span> <span
  m="1974720">I'm</span> <span m="1974830">only</span> <span
  m="1975070">inserting</span> <span m="1975590">for</span> <span
  m="1975700">now.</span></p><p><span m="1982140">If</span> <span
  m="1982250">you</span> <span m="1982350">look</span> <span
  m="1982530">over</span> <span m="1982720">all</span> <span
  m="1982900">time,</span> <span m="1983770">you</span> <span
  m="1983920">will</span> <span m="1984105">only</span> <span
  m="1984290">charge</span> <span m="1984640">an</span> <span
  m="1984710">insert</span> <span m="1985090">once.</span> <span
  m="1988200">That's</span> <span m="1988400">good,</span> <span
  m="1988760">because</span> <span m="1989540">the</span> <span
  m="1989670">inserts</span> <span m="1990090">have</span> <span
  m="1990300">to</span> <span m="1990440">pay</span> <span
  m="1990760">for</span> <span m="1990930">their</span> <span
  m="1991080">total</span> <span m="1991370">charge</span> <span
  m="1991650">in</span> <span m="1991710">the</span> <span
  m="1991780">future.</span> <span m="1992440">There's</span> <span
  m="1992620">only</span> <span m="1992840">one</span> <span
  m="1993100">charge,</span> <span m="1993610">and</span> <span
  m="1993710">it's</span> <span m="1993830">only</span> <span
  m="1994020">a</span> <span m="1994070">constant</span> <span
  m="1994500">amount,</span> <span m="1995110">then</span> <span
  m="1995400">amortized</span> <span m="1995810">cost</span> <span
  m="1996080">of</span> <span m="1996150">insert</span> <span
  m="1996730">is</span> <span m="1996870">still</span> <span
  m="1997040">constant,</span> <span m="1997830">amortized</span> <span
  m="1998400">cost</span> <span m="1998700">of</span> <span
  m="1998780">doubling</span> <span m="1999480">is</span> <span
  m="1999670">0,</span> <span m="2000040">because</span> <span
  m="2000310">we</span> <span m="2000410">charged</span> <span
  m="2000790">the</span> <span m="2000880">entire</span> <span
  m="2001330">cost</span> <span m="2001890">to</span> <span
  m="2002060">the</span> <span m="2002140">past.</span> <span
  m="2003970">So</span> <span m="2004180">same</span> <span
  m="2004520">example,</span> <span m="2005060">but</span> <span
  m="2005250">slightly</span> <span m="2005590">different</span> <span
  m="2005870">perspective.</span></p><p><span m="2007000">Let's</span> <span
  m="2007330">do</span> <span m="2007660">a</span> <span m="2007700">more</span>
  <span m="2007930">interesting</span> <span m="2008300">example--</span> <span
  m="2009500">inserts</span> <span m="2009980">and</span> <span
  m="2010160">deletes</span> <span m="2015770">in</span> <span
  m="2015920">a</span> <span m="2015960">table.</span> <span
  m="2049638">Let'</span> <span m="2050150">say</span> <span
  m="2050400">I</span> <span m="2050530">want</span> <span m="2050840">to</span>
  <span m="2050949">maintain</span> <span m="2052429">that</span> <span
  m="2052600">the</span> <span m="2052679">size</span> <span
  m="2053050">of</span> <span m="2053150">the</span> <span
  m="2053230">table</span> <span m="2054070">is</span> <span
  m="2054350">always</span> <span m="2054880">within</span> <span
  m="2055130">a</span> <span m="2055210">constant</span> <span
  m="2055620">factor</span> <span m="2056530">of</span> <span
  m="2056810">the</span> <span m="2056909">number</span> <span
  m="2057219">of</span> <span m="2057320">items</span> <span
  m="2057690">currently</span> <span m="2058300">in</span> <span
  m="2058440">the</span> <span m="2058510">table.</span> <span
  m="2060219">If</span> <span m="2060279">I</span> <span m="2060340">just</span>
  <span m="2060540">want</span> <span m="2060719">an</span> <span
  m="2060790">upper</span> <span m="2061050">bound,</span> <span
  m="2061520">then</span> <span m="2061580">I</span> <span
  m="2061670">only</span> <span m="2061889">need</span> <span
  m="2062050">to</span> <span m="2062150">double,</span> <span
  m="2062780">but</span> <span m="2062949">if</span> <span m="2063080">I</span>
  <span m="2063159">want</span> <span m="2063449">also</span> <span
  m="2063730">a</span> <span m="2063780">lower</span> <span
  m="2064020">bound--</span> <span m="2064320">if</span> <span
  m="2064420">I</span> <span m="2064480">don't</span> <span
  m="2064659">want</span> <span m="2065219">the</span> <span
  m="2065400">table</span> <span m="2065719">to</span> <span
  m="2065860">be</span> <span m="2065969">too</span> <span
  m="2066190">empty,</span> <span m="2067580">then</span> <span
  m="2067840">I</span> <span m="2067929">need</span> <span m="2068110">to</span>
  <span m="2068219">add</span> <span m="2068530">table</span> <span
  m="2069420">halving.</span> <span m="2071420">So</span> <span
  m="2071699">what</span> <span m="2071840">I'm</span> <span
  m="2071900">going</span> <span m="2072020">to</span> <span
  m="2072090">do</span> <span m="2072250">is</span> <span
  m="2072370">when</span> <span m="2072639">the</span> <span
  m="2072730">table</span> <span m="2073300">is</span> <span
  m="2073530">100%</span> <span m="2074210">full,</span> <span
  m="2075150">I</span> <span m="2075340">double</span> <span
  m="2075620">its</span> <span m="2075719">size,</span> <span
  m="2078070">when</span> <span m="2078420">the</span> <span
  m="2078500">table</span> <span m="2079030">is</span> <span
  m="2081219">50%</span> <span m="2081900">full,</span> <span
  m="2082540">should</span> <span m="2082719">I</span> <span
  m="2082780">halve</span> <span m="2083000">it</span> <span
  m="2083080">in</span> <span m="2083170">size?</span> <span
  m="2084029">Would</span> <span m="2084360">that</span> <span
  m="2084550">work?</span> <span m="2087580">No,</span> <span
  m="2089110">because--</span></p><p><span m="2089610">AUDIENCE:</span> <span
  m="2090110">[INAUDIBLE]</span> <span m="2092110">have</span> <span
  m="2092610">to</span> <span m="2092860">have</span> <span
  m="2093110">it</span> <span m="2093360">inserted</span> <span
  m="2093610">in</span> <span m="2093860">place</span> <span
  m="2094110">of</span> <span m="2094568">linear</span> <span
  m="2095026">[INAUDIBLE].</span></p><p><span m="2096400">ERIK DEMAINE:
  Right.</span> <span m="2098590">I</span> <span m="2098730">can</span> <span
  m="2098880">basically</span> <span m="2099200">do</span> <span
  m="2099330">insert,</span> <span m="2099780">delete,</span> <span
  m="2099900">insert,</span> <span m="2100270">delete,</span> <span
  m="2100400">insert,</span> <span m="2100620">delete,</span> <span
  m="2101170">and</span> <span m="2101350">every</span> <span
  m="2101630">single</span> <span m="2101900">operation</span> <span
  m="2102380">costs</span> <span m="2103000">linear</span> <span
  m="2103290">time,</span> <span m="2104140">because</span> <span
  m="2104260">maybe</span> <span m="2104520">I'm</span> <span
  m="2104540">a</span> <span m="2104910">little</span> <span
  m="2105150">bit</span> <span m="2105270">less</span> <span
  m="2105500">than</span> <span m="2105610">half</span> <span
  m="2105850">full--</span> <span m="2108010">sorry,</span> <span
  m="2109170">yeah,</span> <span m="2109530">if</span> <span
  m="2109585">I'm</span> <span m="2109640">a</span> <span
  m="2109680">little</span> <span m="2109830">bit</span> <span
  m="2109970">less</span> <span m="2110210">than</span> <span
  m="2110310">half</span> <span m="2110530">full,</span> <span
  m="2110760">then</span> <span m="2110920">I'm</span> <span
  m="2110980">going</span> <span m="2111100">to</span> <span
  m="2111170">shrink</span> <span m="2112040">the</span> <span
  m="2112180">array</span> <span m="2112670">into</span> <span
  m="2112970">half.</span> <span m="2113420">Get</span> <span
  m="2113590">rid</span> <span m="2113720">of</span> <span
  m="2113810">this</span> <span m="2113950">part,</span> <span
  m="2116470">then</span> <span m="2116670">if</span> <span m="2116790">I</span>
  <span m="2116880">immediately</span> <span m="2117340">insert,</span> <span
  m="2118190">it</span> <span m="2118350">becomes</span> <span
  m="2118830">100%</span> <span m="2119390">full</span> <span
  m="2119550">again.</span> <span m="2119780">I</span> <span
  m="2119850">have</span> <span m="2119980">to</span> <span
  m="2120060">double</span> <span m="2120360">in</span> <span
  m="2120440">size,</span> <span m="2120910">and</span> <span
  m="2121000">then</span> <span m="2121090">if</span> <span m="2121180">I</span>
  <span m="2121270">delete,</span> <span m="2121900">it</span> <span
  m="2122020">becomes</span> <span m="2122300">less</span> <span
  m="2122480">than</span> <span m="2122580">half</span> <span
  m="2122820">full,</span> <span m="2123720">and</span> <span
  m="2123990">I</span> <span m="2124040">have</span> <span m="2124170">to</span>
  <span m="2124270">halve</span> <span m="2124510">in</span> <span
  m="2124740">size.</span></p><p><span m="2124970">Every</span> <span
  m="2125320">operation</span> <span m="2125590">would</span> <span
  m="2125860">cost</span> <span m="2126140">linear</span> <span
  m="2126410">time,</span> <span m="2127220">so</span> <span
  m="2127280">amortized</span> <span m="2127650">cost</span> <span
  m="2127890">is</span> <span m="2128000">linear</span> <span
  m="2128260">time.</span> <span m="2129050">That's</span> <span
  m="2129220">not</span> <span m="2129390">good.</span> <span
  m="2130700">So</span> <span m="2130810">what</span> <span
  m="2130970">I'll</span> <span m="2131070">do</span> <span
  m="2131390">is</span> <span m="2133890">just</span> <span
  m="2134390">separate</span> <span m="2134900">those</span> <span
  m="2135080">constants</span> <span m="2135520">a</span> <span
  m="2135560">little</span> <span m="2135790">bit.</span> <span
  m="2137020">When</span> <span m="2137170">I'm</span> <span
  m="2137240">100%</span> <span m="2137960">full,</span> <span
  m="2138260">I</span> <span m="2138360">will</span> <span
  m="2138510">double.</span> <span m="2139090">That</span> <span
  m="2139330">seems</span> <span m="2139610">pretty</span> <span
  m="2139780">clear,</span> <span m="2140410">but</span> <span
  m="2140610">let's</span> <span m="2140770">say</span> <span
  m="2141110">when</span> <span m="2141580">I'm</span> <span
  m="2141670">a</span> <span m="2141710">quarter</span> <span
  m="2142070">full,</span> <span m="2143790">then</span> <span
  m="2144040">I</span> <span m="2144120">will</span> <span
  m="2144280">halve.</span> <span m="2144910">Any</span> <span
  m="2145160">value</span> <span m="2145550">less</span> <span
  m="2145780">than</span> <span m="2145890">50</span> <span
  m="2146230">would</span> <span m="2146360">work</span> <span
  m="2146590">here,</span> <span m="2147300">but--</span> <span
  m="2150765">just</span> <span m="2151260">halve,</span> <span
  m="2152736">like</span> <span m="2153230">that.</span></p><p><span
  m="2155310">This</span> <span m="2155550">will</span> <span
  m="2155740">actually</span> <span m="2156040">work.</span> <span
  m="2156290">This</span> <span m="2156440">will</span> <span
  m="2156530">be</span> <span m="2156630">constant</span> <span
  m="2157130">amortized</span> <span m="2157600">per</span> <span
  m="2157710">operation,</span> <span m="2158780">but</span> <span
  m="2159000">it's--</span> <span m="2160670">especially</span> <span
  m="2161010">the</span> <span m="2161190">initial</span> <span
  m="2161560">analysis</span> <span m="2162040">we</span> <span
  m="2162140">did</span> <span m="2162320">of</span> <span
  m="2162390">table</span> <span m="2162680">doubling</span> <span
  m="2163010">isn't</span> <span m="2163190">going</span> <span
  m="2163320">to</span> <span m="2163390">work</span> <span
  m="2163650">here,</span> <span m="2163790">because</span> <span
  m="2164430">it's</span> <span m="2164630">complicated.</span> <span
  m="2165200">The</span> <span m="2165270">thing's</span> <span
  m="2165500">going</span> <span m="2165620">to</span> <span
  m="2165690">shrink</span> <span m="2166000">and</span> <span
  m="2166120">grow</span> <span m="2166810">over</span> <span
  m="2167020">time.</span> <span m="2169590">Just</span> <span
  m="2169810">summing</span> <span m="2170120">that</span> <span
  m="2170340">is</span> <span m="2170470">not</span> <span
  m="2170680">easy.</span> <span m="2171080">It</span> <span
  m="2171180">depends</span> <span m="2171550">on</span> <span
  m="2171630">the</span> <span m="2171690">sequence</span> <span
  m="2172020">of</span> <span m="2172100">operations,</span> <span
  m="2173150">but</span> <span m="2173440">with</span> <span
  m="2173790">charging</span> <span m="2174750">and</span> <span
  m="2175020">also</span> <span m="2175330">with</span> <span
  m="2175530">coins,</span> <span m="2176250">we</span> <span
  m="2176410">could</span> <span m="2177220">do</span> <span
  m="2177390">it</span> <span m="2177510">in</span> <span m="2177670">a</span>
  <span m="2177740">pretty</span> <span m="2178180">clean</span> <span
  m="2178420">way.</span> <span m="2178630">I'm</span> <span
  m="2178700">going</span> <span m="2178820">to</span> <span
  m="2178890">do</span> <span m="2179000">it</span> <span
  m="2179070">with</span> <span m="2179220">charging.</span></p><p><span
  m="2183740">So</span> <span m="2184280">this</span> <span
  m="2185680">particular</span> <span m="2186220">choice</span> <span
  m="2186490">of</span> <span m="2186570">constants</span> <span
  m="2187030">is</span> <span m="2187140">nice,</span> <span
  m="2187570">because</span> <span m="2188430">when</span> <span
  m="2188630">I</span> <span m="2188720">double</span> <span
  m="2188880">a</span> <span m="2189040">full</span> <span
  m="2189680">array,</span> <span m="2190750">it's</span> <span
  m="2190950">half</span> <span m="2191260">full,</span> <span
  m="2193172">and</span> <span m="2194130">also</span> <span
  m="2194690">when</span> <span m="2194830">I</span> <span
  m="2194910">have</span> <span m="2195170">an</span> <span
  m="2195240">array</span> <span m="2196380">that's</span> <span
  m="2196790">a</span> <span m="2196850">quarter</span> <span
  m="2197220">full,</span> <span m="2200930">like</span> <span
  m="2201110">this,</span> <span m="2202530">and</span> <span
  m="2202740">then</span> <span m="2202870">I</span> <span
  m="2202980">divide</span> <span m="2203450">it--</span> <span
  m="2204080">and</span> <span m="2204250">then</span> <span
  m="2204380">I</span> <span m="2204440">shrink</span> <span
  m="2204790">it--</span> <span m="2205790">I</span> <span
  m="2205900">get</span> <span m="2206130">rid</span> <span
  m="2206310">of</span> <span m="2207020">this</span> <span
  m="2207230">part,</span> <span m="2208710">it's</span> <span
  m="2208880">also</span> <span m="2209190">half</span> <span
  m="2209460">full.</span> <span m="2210410">So</span> <span
  m="2210620">whenever</span> <span m="2210940">I</span> <span
  m="2211030">do</span> <span m="2211200">a</span> <span
  m="2211260">double</span> <span m="2211780">or</span> <span
  m="2212060">a</span> <span m="2212110">halve,</span> <span
  m="2213070">the</span> <span m="2213200">new</span> <span
  m="2213420">array</span> <span m="2213850">is</span> <span
  m="2214010">half</span> <span m="2214280">full,</span> <span
  m="2215320">50%.</span> <span m="2217240">That's</span> <span
  m="2217480">nice.</span> <span m="2224150">That's</span> <span
  m="2224310">nice,</span> <span m="2224600">because</span> <span
  m="2224960">50%</span> <span m="2225800">is</span> <span
  m="2226010">far</span> <span m="2226300">away</span> <span
  m="2226580">from</span> <span m="2226780">both</span> <span
  m="2227040">25%</span> <span m="2228110">and</span> <span
  m="2228250">100%.</span></p><p><span m="2235510">So</span> <span
  m="2236670">our</span> <span m="2236830">nice</span> <span
  m="2237180">state</span> <span m="2237880">is</span> <span
  m="2238110">right</span> <span m="2238420">after</span> <span
  m="2238800">a</span> <span m="2238850">doubling</span> <span
  m="2239260">or</span> <span m="2239330">a</span> <span
  m="2239400">halve,</span> <span m="2240330">then</span> <span
  m="2240750">we</span> <span m="2240910">know</span> <span
  m="2241080">that</span> <span m="2241190">our</span> <span
  m="2241280">structure</span> <span m="2241640">is</span> <span
  m="2241730">50%.</span> <span m="2242740">In</span> <span
  m="2242900">order</span> <span m="2243210">to</span> <span
  m="2243850">get</span> <span m="2244120">to</span> <span m="2244240">an</span>
  <span m="2244360">under-flowing</span> <span m="2244900">state</span> <span
  m="2245150">where</span> <span m="2245250">we</span> <span
  m="2245390">have</span> <span m="2245580">to</span> <span
  m="2245670">halve,</span> <span m="2246590">I</span> <span
  m="2246730">have</span> <span m="2246920">to</span> <span
  m="2247040">delete</span> <span m="2247610">at</span> <span
  m="2247750">least</span> <span m="2248050">a</span> <span
  m="2248090">quarter</span> <span m="2248490">of</span> <span
  m="2248580">the</span> <span m="2248680">items,</span> <span
  m="2251230">a</span> <span m="2251310">quarter</span> <span
  m="2251670">of</span> <span m="2251860">m.</span> <span m="2253280">In</span>
  <span m="2253450">order</span> <span m="2253630">to</span> <span
  m="2253760">get</span> <span m="2254000">to</span> <span
  m="2255080">overflowing</span> <span m="2255870">where</span> <span
  m="2255990">I</span> <span m="2256020">have</span> <span m="2256190">to</span>
  <span m="2256290">double,</span> <span m="2257430">I</span> <span
  m="2257560">have</span> <span m="2257770">to</span> <span
  m="2258150">insert</span> <span m="2258580">at</span> <span
  m="2258660">least</span> <span m="2258980">m</span> <span
  m="2259170">over</span> <span m="2259400">2</span> <span
  m="2259650">items.</span> <span m="2260630">Either</span> <span
  m="2261000">way,</span> <span m="2261150">a</span> <span
  m="2261190">constant</span> <span m="2261550">fraction</span> <span
  m="2261890">times</span> <span m="2262150">m,</span> <span
  m="2263090">that's</span> <span m="2263330">what</span> <span
  m="2263450">I'm</span> <span m="2263510">going</span> <span
  m="2263630">to</span> <span m="2263690">charge</span> <span
  m="2264030">to.</span></p><p><span m="2264870">Now,</span> <span
  m="2265330">to</span> <span m="2265470">be</span> <span
  m="2265580">clear,</span> <span m="2267060">when</span> <span
  m="2267230">I'm</span> <span m="2267280">50%</span> <span
  m="2267860">full,</span> <span m="2268650">I</span> <span
  m="2268750">might</span> <span m="2268990">insert,</span> <span
  m="2269430">delete,</span> <span m="2269640">insert,</span> <span
  m="2270040">delete,</span> <span m="2270350">many</span> <span
  m="2270590">different</span> <span m="2270970">inserts</span> <span
  m="2271360">and</span> <span m="2271490">deletes.</span> <span
  m="2272440">At</span> <span m="2272590">some</span> <span
  m="2272810">point,</span> <span m="2273010">one</span> <span
  m="2273290">of</span> <span m="2273370">these</span> <span
  m="2273760">two</span> <span m="2273930">things</span> <span
  m="2274180">is</span> <span m="2274270">going</span> <span
  m="2274390">to</span> <span m="2274460">happen</span> <span
  m="2274790">though.</span> <span m="2276050">In</span> <span
  m="2276220">order</span> <span m="2276470">to</span> <span
  m="2276610">get</span> <span m="2276820">here,</span> <span
  m="2277030">I</span> <span m="2277120">have</span> <span m="2277320">to</span>
  <span m="2277420">do</span> <span m="2277540">at</span> <span
  m="2277650">least</span> <span m="2278290">m</span> <span
  m="2278480">over</span> <span m="2278730">4</span> <span
  m="2279430">deletions.</span> <span m="2280000">I</span> <span
  m="2280090">might</span> <span m="2280350">also</span> <span
  m="2280650">do</span> <span m="2280800">more</span> <span
  m="2280970">insertions</span> <span m="2281420">and</span> <span
  m="2281520">deletions,</span> <span m="2282000">but</span> <span
  m="2282140">I</span> <span m="2282180">have</span> <span m="2282350">to</span>
  <span m="2282440">do</span> <span m="2282530">at</span> <span
  m="2282610">least</span> <span m="2282840">that</span> <span
  m="2283000">many,</span> <span m="2283550">and</span> <span
  m="2283700">those</span> <span m="2283880">are</span> <span
  m="2283920">the</span> <span m="2284000">ones</span> <span
  m="2284210">I'm</span> <span m="2284280">going</span> <span
  m="2284450">to</span> <span m="2284560">charge</span> <span
  m="2284930">to.</span></p><p><span m="2285790">So</span> <span
  m="2288060">I'm</span> <span m="2288250">going</span> <span
  m="2288295">to</span> <span m="2288340">charge</span> <span
  m="2292000">a</span> <span m="2292110">halving</span> <span
  m="2292550">operation</span> <span m="2296740">to</span> <span
  m="2297590">the</span> <span m="2297670">at</span> <span
  m="2297750">least</span> <span m="2298850">m</span> <span
  m="2299260">over</span> <span m="2299620">4</span> <span
  m="2301090">deletions</span> <span m="2304660">since</span> <span
  m="2305160">the</span> <span m="2305240">last</span> <span
  m="2305620">resize</span> <span m="2307840">of</span> <span
  m="2308020">either</span> <span m="2308290">type,</span> <span
  m="2310040">doubling</span> <span m="2310520">or</span> <span
  m="2310690">halving.</span> <span m="2312870">And</span> <span
  m="2313060">I'm</span> <span m="2313120">going</span> <span
  m="2313240">to</span> <span m="2313300">charge</span> <span
  m="2313920">the</span> <span m="2314000">doubling</span> <span
  m="2317930">to</span> <span m="2318800">the</span> <span m="2318885">at</span>
  <span m="2318970">least</span> <span m="2319590">m</span> <span
  m="2319730">over</span> <span m="2319900">2</span> <span
  m="2321320">insertions</span> <span m="2324960">since</span> <span
  m="2325290">the</span> <span m="2325370">last</span> <span
  m="2325670">resize.</span> <span m="2333950">OK,</span> <span
  m="2335080">and</span> <span m="2335460">that's</span> <span
  m="2335650">it.</span></p><p><span m="2336670">Because</span> <span
  m="2336870">the</span> <span m="2336960">halving</span> <span
  m="2337380">costs</span> <span m="2337850">theta</span> <span
  m="2338040">m</span> <span m="2338270">time,</span> <span
  m="2339030">doubling</span> <span m="2339400">costs</span> <span
  m="2339680">theta</span> <span m="2339880">m</span> <span
  m="2340080">time,</span> <span m="2340790">I</span> <span
  m="2340960">have</span> <span m="2341480">theta</span> <span
  m="2341560">m</span> <span m="2342120">operations</span> <span
  m="2342720">to</span> <span m="2342830">charge</span> <span
  m="2343260">to,</span> <span m="2343930">so</span> <span
  m="2344080">I'm</span> <span m="2344180">only</span> <span
  m="2344350">charging</span> <span m="2344710">constant</span> <span
  m="2345430">for</span> <span m="2345630">each</span> <span
  m="2345820">of</span> <span m="2345910">the</span> <span
  m="2345990">operations.</span> <span m="2347730">And</span> <span
  m="2347850">because</span> <span m="2348190">of</span> <span
  m="2348270">this</span> <span m="2348430">since</span> <span
  m="2348750">last</span> <span m="2349060">resize</span> <span
  m="2349500">clause,</span> <span m="2349840">it's</span> <span
  m="2349970">clear</span> <span m="2350320">that</span> <span
  m="2350450">you're</span> <span m="2351970">never</span> <span
  m="2352250">charging</span> <span m="2352560">an</span> <span
  m="2352650">operation</span> <span m="2353760">more</span> <span
  m="2353950">than</span> <span m="2354080">once,</span> <span
  m="2357050">because</span> <span m="2357290">you</span> <span
  m="2357410">can</span> <span m="2357560">divide</span> <span
  m="2357960">time</span> <span m="2358720">by</span> <span
  m="2359070">when</span> <span m="2359330">the</span> <span
  m="2359430">resizes</span> <span m="2359910">happen,</span> <span
  m="2360320">grows</span> <span m="2360630">or</span> <span
  m="2360740">shrinks,</span> <span m="2361170">halves</span> <span
  m="2361540">or</span> <span m="2361660">doubles.</span> <span
  m="2362720">And</span> <span m="2363170">each</span> <span
  m="2363960">resize</span> <span m="2364770">is</span> <span
  m="2364950">only</span> <span m="2365230">charging</span> <span
  m="2365660">to</span> <span m="2365770">the</span> <span
  m="2365880">past</span> <span m="2366340">a</span> <span
  m="2366380">window</span> <span m="2366730">of</span> <span
  m="2366930">time.</span></p><p><span m="2368030">So</span> <span
  m="2368090">it's</span> <span m="2368270">like</span> <span
  m="2368400">you</span> <span m="2368470">have</span> <span
  m="2368650">epics</span> <span m="2369120">of</span> <span
  m="2369240">time,</span> <span m="2369580">you</span> <span
  m="2369650">separate</span> <span m="2370100">them,</span> <span
  m="2370510">you</span> <span m="2370660">only</span> <span
  m="2370910">charge</span> <span m="2371280">within</span> <span
  m="2371520">your</span> <span m="2371650">epic.</span> <span
  m="2373570">OK,</span> <span m="2373880">so</span> <span
  m="2375230">that's</span> <span m="2375470">cool.</span> <span
  m="2377180">So</span> <span m="2377360">you</span> <span
  m="2377470">only</span> <span m="2377620">get</span> <span
  m="2377750">a</span> <span m="2377780">constant</span> <span
  m="2378050">number</span> <span m="2378240">of</span> <span
  m="2378310">charges</span> <span m="2378990">per</span> <span
  m="2379210">item</span> <span m="2379980">of</span> <span m="2380130">a</span>
  <span m="2380260">constant</span> <span m="2380770">amount,</span> <span
  m="2381080">therefore</span> <span m="2381440">insertions</span> <span
  m="2381920">and</span> <span m="2382010">deletions</span> <span
  m="2382390">are</span> <span m="2382480">constant</span> <span
  m="2382890">amortized.</span> <span m="2383760">Halving</span> <span
  m="2384120">and</span> <span m="2384180">doubling</span> <span
  m="2384580">is</span> <span m="2384740">free</span> <span
  m="2385120">amortized.</span> <span m="2387660">Clear?</span> <span
  m="2389070">This</span> <span m="2389310">is</span> <span
  m="2389440">where</span> <span m="2389660">amortization</span> <span
  m="2390270">starts</span> <span m="2390510">to</span> <span
  m="2390600">get</span> <span m="2390730">interesting.</span></p><p><span
  m="2395710">You</span> <span m="2395900">can</span> <span
  m="2396160">also</span> <span m="2396440">think</span> <span
  m="2396680">of</span> <span m="2396780">this</span> <span
  m="2396990">example</span> <span m="2397580">in</span> <span
  m="2397700">terms</span> <span m="2398030">of</span> <span
  m="2399530">coins,</span> <span m="2400070">but</span> <span
  m="2401050">with</span> <span m="2401290">putting</span> <span
  m="2401550">coins</span> <span m="2401920">on</span> <span
  m="2402160">the</span> <span m="2402310">items,</span> <span
  m="2402820">but</span> <span m="2403880">then</span> <span
  m="2404050">you</span> <span m="2404120">have</span> <span
  m="2404210">to</span> <span m="2404280">think</span> <span
  m="2404460">about</span> <span m="2404660">the</span> <span
  m="2404750">invariance</span> <span m="2405450">of</span> <span
  m="2405790">where</span> <span m="2405950">the</span> <span
  m="2406030">coins</span> <span m="2406400">are,</span> <span
  m="2406830">which</span> <span m="2407020">I</span> <span
  m="2407080">find</span> <span m="2407380">to</span> <span
  m="2407480">be</span> <span m="2407590">more</span> <span
  m="2407800">work.</span> <span m="2408070">We</span> <span
  m="2408160">actually</span> <span m="2408400">had</span> <span
  m="2408540">to</span> <span m="2408630">do</span> <span m="2408780">it</span>
  <span m="2408860">up</span> <span m="2408980">here.</span> <span
  m="2409630">I</span> <span m="2409700">was</span> <span
  m="2409830">claiming</span> <span m="2410110">the</span> <span
  m="2410180">last</span> <span m="2410560">half</span> <span
  m="2410800">of</span> <span m="2410870">the</span> <span
  m="2410990">items</span> <span m="2411430">had</span> <span
  m="2411600">coins.</span> <span m="2412110">You</span> <span
  m="2412210">have</span> <span m="2412320">to</span> <span
  m="2412430">prove</span> <span m="2412710">that</span> <span
  m="2412960">really.</span></p><p><span m="2414220">With</span> <span
  m="2414390">this</span> <span m="2414540">method,</span> <span
  m="2415200">you</span> <span m="2415540">don't.</span> <span
  m="2415980">I</span> <span m="2416070">mean,</span> <span
  m="2416690">what</span> <span m="2416870">you</span> <span
  m="2416980">have</span> <span m="2417140">to</span> <span
  m="2417250">prove</span> <span m="2418000">is</span> <span
  m="2418160">that</span> <span m="2418290">there</span> <span
  m="2418450">are</span> <span m="2418510">enough</span> <span
  m="2418850">things</span> <span m="2419680">to</span> <span
  m="2419810">charge</span> <span m="2420220">to.</span> <span
  m="2420370">We</span> <span m="2420460">had</span> <span m="2420570">to</span>
  <span m="2420650">prove</span> <span m="2420900">here</span> <span
  m="2421050">that</span> <span m="2421200">there</span> <span
  m="2421300">were</span> <span m="2421390">n</span> <span
  m="2421540">over</span> <span m="2421690">2</span> <span
  m="2421880">items</span> <span m="2422240">to</span> <span
  m="2422410">charge</span> <span m="2422580">to.</span> <span
  m="2422910">Kind</span> <span m="2423160">of</span> <span
  m="2423240">the</span> <span m="2423300">same</span> <span
  m="2423540">thing,</span> <span m="2424320">but</span> <span
  m="2424580">it</span> <span m="2424680">was</span> <span
  m="2424830">very</span> <span m="2425030">clear</span> <span
  m="2425260">that</span> <span m="2425380">you</span> <span
  m="2425480">weren't</span> <span m="2425700">charging</span> <span
  m="2426740">to</span> <span m="2426890">the</span> <span
  m="2426950">same</span> <span m="2427220">thing</span> <span
  m="2427460">more</span> <span m="2427620">than</span> <span
  m="2427750">once.</span> <span m="2428490">You</span> <span
  m="2428570">were</span> <span m="2428650">never</span> <span
  m="2428870">trying</span> <span m="2429100">to</span> <span
  m="2429190">use</span> <span m="2429370">a</span> <span
  m="2429420">coin</span> <span m="2429700">that</span> <span
  m="2429800">wasn't</span> <span m="2430090">there</span> <span
  m="2430840">because</span> <span m="2431380">of</span> <span
  m="2431550">the</span> <span m="2431820">since</span> <span
  m="2432250">clause.</span> <span m="2435100">To</span> <span
  m="2435260">each</span> <span m="2435470">their</span> <span
  m="2435620">own.</span> <span m="2436000">I</span> <span
  m="2436320">think</span> <span m="2436620">either</span> <span
  m="2436870">way</span> <span m="2437020">would</span> <span
  m="2437160">work.</span></p><p><span m="2445790">I</span> <span
  m="2445920">think</span> <span m="2446170">I</span> <span
  m="2446315">will</span> <span m="2446460">skip</span> <span
  m="2446800">this</span> <span m="2446970">example,</span> <span
  m="2447430">but</span> <span m="2449310">I'll</span> <span
  m="2449450">just</span> <span m="2449590">mention</span> <span
  m="2449900">it.</span> <span m="2449980">So</span> <span
  m="2450120">for</span> <span m="2450350">2-3</span> <span
  m="2450790">trees,</span> <span m="2451800">we</span> <span
  m="2451930">said</span> <span m="2452110">deletions</span> <span
  m="2452520">were</span> <span m="2452620">free,</span> <span
  m="2454270">and</span> <span m="2454650">we</span> <span
  m="2454770">did</span> <span m="2454990">that</span> <span
  m="2455550">with</span> <span m="2455780">the</span> <span
  m="2455840">coin</span> <span m="2456180">invariant,</span> <span
  m="2456610">that</span> <span m="2456720">there</span> <span
  m="2456820">was</span> <span m="2456950">one</span> <span
  m="2457270">coin</span> <span m="2457630">of</span> <span
  m="2457720">size</span> <span m="2458030">log</span> <span
  m="2458320">i</span> <span m="2458530">for</span> <span
  m="2458700">each</span> <span m="2458960">i.</span> <span
  m="2459880">You</span> <span m="2460040">could</span> <span
  m="2460190">instead</span> <span m="2460570">say,</span> <span
  m="2461270">when</span> <span m="2461480">I</span> <span
  m="2461540">delete</span> <span m="2461930">an</span> <span
  m="2462030">item,</span> <span m="2462410">I'm</span> <span
  m="2462490">going</span> <span m="2462610">to</span> <span
  m="2462680">charge</span> <span m="2463110">it</span> <span
  m="2463220">to</span> <span m="2463360">the</span> <span
  m="2463550">insert</span> <span m="2464620">that</span> <span
  m="2464810">made</span> <span m="2465200">n</span> <span
  m="2465450">this</span> <span m="2465640">current</span> <span
  m="2466010">value,</span> <span m="2468670">because</span> <span
  m="2469140">that</span> <span m="2469410">insert</span> <span
  m="2470510">paid</span> <span m="2470900">log</span> <span
  m="2471200">n</span> <span m="2471500">the</span> <span
  m="2471690">actual</span> <span m="2471880">cost,</span> <span
  m="2472230">so</span> <span m="2472370">it</span> <span m="2472430">can</span>
  <span m="2472540">afford</span> <span m="2472850">to</span> <span
  m="2472920">pay</span> <span m="2473150">another</span> <span
  m="2473460">log</span> <span m="2473740">n</span> <span m="2473890">to</span>
  <span m="2474280">pay</span> <span m="2474450">for</span> <span
  m="2474570">the</span> <span m="2474670">deletion</span> <span
  m="2475170">of</span> <span m="2475290">some</span> <span
  m="2475480">other</span> <span m="2475770">item,</span> <span
  m="2476910">the</span> <span m="2477000">one</span> <span
  m="2477140">we're</span> <span m="2477220">currently</span> <span
  m="2477690">deleting.</span> <span m="2479320">And</span> <span
  m="2479790">that</span> <span m="2480020">works,</span> <span
  m="2480450">that</span> <span m="2480690">you</span> <span
  m="2480820">don't</span> <span m="2481110">double</span> <span
  m="2481380">charge</span> <span m="2481790">to</span> <span
  m="2481870">an</span> <span m="2481960">insert,</span> <span
  m="2482410">because</span> <span m="2484460">you're</span> <span
  m="2484700">decreasing</span> <span m="2485360">n</span> <span
  m="2485550">right</span> <span m="2485730">now.</span> <span
  m="2485950">So</span> <span m="2486120">for</span> <span m="2486280">n</span>
  <span m="2486420">to</span> <span m="2486480">get</span> <span
  m="2486680">up</span> <span m="2486800">to</span> <span
  m="2486890">that</span> <span m="2487030">value</span> <span
  m="2487360">again,</span> <span m="2487690">you</span> <span
  m="2487820">would</span> <span m="2487950">have</span> <span
  m="2488070">had</span> <span m="2488290">to</span> <span m="2488410">do</span>
  <span m="2488570">another</span> <span m="2488860">insert.</span> <span
  m="2489400">So</span> <span m="2490460">same</span> <span
  m="2490790">thing,</span> <span m="2491530">slightly</span> <span
  m="2491850">different</span> <span m="2492090">perspective.</span></p><p><span
  m="2493570">Let's</span> <span m="2493830">go</span> <span
  m="2494400">to</span> <span m="2494510">something</span> <span
  m="2495040">even</span> <span m="2495270">more</span> <span
  m="2495430">interesting</span> <span m="2495950">and</span> <span
  m="2496370">in</span> <span m="2496440">some</span> <span
  m="2496620">sense</span> <span m="2496860">more</span> <span
  m="2497040">powerful,</span> <span m="2498220">the</span> <span
  m="2498300">last</span> <span m="2498640">method</span> <span
  m="2498950">on</span> <span m="2499040">the</span> <span
  m="2499110">list,</span> <span m="2499850">which</span> <span
  m="2500070">is</span> <span m="2500380">potential</span> <span
  m="2500760">method.</span> <span m="2525310">This</span> <span
  m="2525375">is</span> <span m="2525440">a</span> <span m="2525500">good</span>
  <span m="2525670">exercise</span> <span m="2526250">in</span> <span
  m="2526410">how</span> <span m="2526590">many</span> <span
  m="2526810">ways</span> <span m="2527090">can</span> <span
  m="2527240">you</span> <span m="2527350">skin</span> <span
  m="2527620">a</span> <span m="2527670">cat?</span> <span m="2531940">So</span>
  <span m="2534630">potential</span> <span m="2535120">method,</span> <span
  m="2535490">I</span> <span m="2535670">like</span> <span m="2535810">to</span>
  <span m="2535900">call</span> <span m="2536200">it</span> <span
  m="2536600">defining</span> <span m="2537180">karma</span> <span
  m="2538030">in</span> <span m="2538210">a</span> <span
  m="2538260">formal</span> <span m="2538670">way,</span> <span
  m="2540970">is</span> <span m="2542030">more</span> <span
  m="2542420">like</span> <span m="2542800">the</span> <span
  m="2543010">counting</span> <span m="2543560">strategy.</span> <span
  m="2544080">We're</span> <span m="2544200">going</span> <span
  m="2544320">to</span> <span m="2544380">think</span> <span
  m="2544650">about</span> <span m="2544940">there</span> <span
  m="2545070">being</span> <span m="2545830">a</span> <span
  m="2545960">bank</span> <span m="2546220">account</span> <span
  m="2546550">with</span> <span m="2546650">some</span> <span
  m="2546850">balance,</span> <span m="2548150">but</span> <span
  m="2548210">we're</span> <span m="2548280">going</span> <span
  m="2548400">to</span> <span m="2548460">define</span> <span
  m="2549080">that</span> <span m="2549270">balance</span> <span
  m="2550010">as</span> <span m="2550230">a</span> <span
  m="2550280">function</span> <span m="2550910">of</span> <span
  m="2551210">the</span> <span m="2551290">data</span> <span
  m="2551560">structure</span> <span m="2551920">state.</span></p><p><span
  m="2553670">So</span> <span m="2554820">that's</span> <span
  m="2555010">called</span> <span m="2555250">the</span> <span
  m="2555500">potential</span> <span m="2557300">function,</span> <span
  m="2566330">but</span> <span m="2566490">you</span> <span
  m="2566580">can</span> <span m="2566720">think</span> <span
  m="2566940">of</span> <span m="2567050">it</span> <span m="2567280">as</span>
  <span m="2567510">a</span> <span m="2567560">bank</span> <span
  m="2567840">balance.</span> <span m="2569570">You</span> <span
  m="2569650">can</span> <span m="2569800">think</span> <span
  m="2570010">of</span> <span m="2570130">it</span> <span m="2570260">as</span>
  <span m="2570890">kinetic</span> <span m="2571250">potential,</span> <span
  m="2571700">I</span> <span m="2571770">guess.</span> <span
  m="2575560">Potential</span> <span m="2575910">energy.</span> <span
  m="2597030">Just</span> <span m="2597270">like</span> <span
  m="2597420">the</span> <span m="2597490">bank</span> <span
  m="2597720">account,</span> <span m="2598880">we</span> <span
  m="2599100">want</span> <span m="2600790">this</span> <span
  m="2600980">function</span> <span m="2601320">to</span> <span
  m="2601430">always</span> <span m="2601790">be</span> <span
  m="2601910">non-negative.</span> <span m="2602760">We'll</span> <span
  m="2603190">also</span> <span m="2603250">make</span> <span
  m="2603510">it</span> <span m="2603600">an</span> <span
  m="2603690">integer.</span> <span m="2607190">That</span> <span
  m="2607270">would</span> <span m="2607380">be</span> <span
  m="2607490">convenient.</span></p><p><span m="2613010">The</span> <span
  m="2613070">potential</span> <span m="2613490">function</span> <span
  m="2613840">is</span> <span m="2613990">basically</span> <span
  m="2614460">trying</span> <span m="2614690">to</span> <span
  m="2614750">measure</span> <span m="2615190">how</span> <span
  m="2615570">bad</span> <span m="2616030">is</span> <span
  m="2616170">the</span> <span m="2616260">data</span> <span
  m="2616480">structure</span> <span m="2616830">right</span> <span
  m="2617020">now?</span> <span m="2619240">It's,</span> <span
  m="2619740">again,</span> <span m="2620110">like</span> <span
  m="2620390">saving</span> <span m="2620770">up</span> <span
  m="2620860">for</span> <span m="2620980">a</span> <span
  m="2621030">rainy</span> <span m="2621260">day.</span> <span
  m="2621480">We</span> <span m="2621630">want</span> <span
  m="2621910">that</span> <span m="2622030">whenever</span> <span
  m="2622320">we</span> <span m="2622430">have</span> <span
  m="2622680">to</span> <span m="2622790">do</span> <span m="2622900">an</span>
  <span m="2622970">expensive</span> <span m="2623480">operation,</span> <span
  m="2624120">like</span> <span m="2624370">a</span> <span
  m="2624420">double</span> <span m="2624930">or</span> <span
  m="2625280">halve,</span> <span m="2627256">that</span> <span
  m="2627630">this</span> <span m="2627860">potential</span> <span
  m="2628400">has</span> <span m="2628590">grown</span> <span
  m="2628970">large</span> <span m="2629280">enough</span> <span
  m="2630080">that</span> <span m="2630260">we</span> <span
  m="2630400">can</span> <span m="2631050">charge</span> <span
  m="2631500">that</span> <span m="2631700">cost</span> <span
  m="2632520">to</span> <span m="2632860">a</span> <span
  m="2632940">decrease</span> <span m="2633570">in</span> <span
  m="2633660">the</span> <span m="2633730">potential.</span> <span
  m="2634340">So</span> <span m="2634390">it's</span> <span
  m="2634480">like</span> <span m="2634620">this</span> <span
  m="2634770">is</span> <span m="2634850">storing</span> <span
  m="2635230">up</span> <span m="2635360">energy,</span> <span
  m="2636440">and</span> <span m="2636620">whenever</span> <span
  m="2638010">we</span> <span m="2638110">have</span> <span
  m="2638260">some</span> <span m="2638430">free</span> <span
  m="2638630">time,</span> <span m="2639420">we'll</span> <span
  m="2639750">give</span> <span m="2640200">some</span> <span
  m="2640390">of</span> <span m="2640460">that</span> <span
  m="2640620">time</span> <span m="2640900">to</span> <span
  m="2641020">the</span> <span m="2641100">potential</span> <span
  m="2641500">function.</span></p><p><span m="2642490">It's</span> <span
  m="2642930">just</span> <span m="2643150">like</span> <span
  m="2643590">the</span> <span m="2643840">accounting</span> <span
  m="2644240">method,</span> <span m="2644970">in</span> <span
  m="2645160">a</span> <span m="2645200">certain</span> <span
  m="2645450">sense,</span> <span m="2645720">but</span> <span
  m="2645860">we're</span> <span m="2645970">defining</span> <span
  m="2646420">things</span> <span m="2646620">differently.</span> <span
  m="2647400">Over</span> <span m="2647610">here,</span> <span
  m="2648590">we</span> <span m="2648880">explicitly</span> <span
  m="2649490">said,</span> <span m="2649780">hey</span> <span
  m="2649910">look,</span> <span m="2650270">I'm</span> <span
  m="2650370">going</span> <span m="2650380">to</span> <span
  m="2650450">store</span> <span m="2650670">some</span> <span
  m="2650820">credit</span> <span m="2651130">right</span> <span
  m="2651310">now.</span> <span m="2652330">So</span> <span
  m="2652560">we</span> <span m="2652655">were</span> <span
  m="2652750">basically</span> <span m="2653260">specifying</span> <span
  m="2653860">the</span> <span m="2653940">delta,</span> <span
  m="2655250">and</span> <span m="2655510">here</span> <span
  m="2655830">we're</span> <span m="2656000">saying</span> <span
  m="2656250">I'm</span> <span m="2656310">going</span> <span
  m="2656430">to</span> <span m="2656490">consume</span> <span
  m="2656860">some</span> <span m="2657040">credit</span> <span
  m="2657310">right</span> <span m="2657480">now.</span> <span
  m="2658180">Over</span> <span m="2658480">here,</span> <span
  m="2658780">we're</span> <span m="2658890">going</span> <span
  m="2659020">to</span> <span m="2659090">define</span> <span
  m="2659570">this</span> <span m="2660010">magical</span> <span
  m="2660480">function</span> <span m="2661590">of</span> <span
  m="2661800">the</span> <span m="2661860">current</span> <span
  m="2662180">state.</span> <span m="2662560">From</span> <span
  m="2662880">that</span> <span m="2663080">you</span> <span
  m="2663190">can</span> <span m="2663350">compute</span> <span
  m="2663770">the</span> <span m="2663840">deltas,</span> <span
  m="2664400">but</span> <span m="2664990">also</span> <span
  m="2665280">from</span> <span m="2665460">here</span> <span
  m="2665650">you</span> <span m="2665750">can</span> <span
  m="2665880">integrate</span> <span m="2666320">and</span> <span
  m="2666430">compute</span> <span m="2666750">the</span> <span
  m="2666820">potential</span> <span m="2667170">function.</span></p><p><span
  m="2667760">So</span> <span m="2667830">they're</span> <span
  m="2667970">interchangeable,</span> <span m="2669040">but</span> <span
  m="2669080">usually</span> <span m="2669380">it's</span> <span
  m="2669490">easier</span> <span m="2669770">to</span> <span
  m="2669840">think</span> <span m="2670040">about</span> <span
  m="2670290">one</span> <span m="2670530">perspective</span> <span
  m="2671050">or</span> <span m="2671170">the</span> <span
  m="2671310">other.</span> <span m="2672360">Really</span> <span
  m="2672640">often,</span> <span m="2673040">you</span> <span
  m="2673170">can</span> <span m="2674090">just</span> <span
  m="2674320">look</span> <span m="2674610">at</span> <span
  m="2674710">what's</span> <span m="2674890">going</span> <span
  m="2675120">on</span> <span m="2675210">with</span> <span
  m="2675300">the</span> <span m="2675370">data</span> <span
  m="2675580">structure</span> <span m="2675850">and</span> <span
  m="2675940">say,</span> <span m="2676060">hey,</span> <span
  m="2676290">you</span> <span m="2676370">know,</span> <span
  m="2678320">this</span> <span m="2679400">aspect</span> <span
  m="2679890">of</span> <span m="2679970">the</span> <span
  m="2680040">data</span> <span m="2680230">structure</span> <span
  m="2680590">makes</span> <span m="2680880">it</span> <span
  m="2680990">bad,</span> <span m="2681440">makes</span> <span
  m="2682510">costly</span> <span m="2682990">operations,</span> <span
  m="2684120">and</span> <span m="2684270">you</span> <span
  m="2684340">can</span> <span m="2684460">just</span> <span
  m="2684590">define</span> <span m="2684910">the</span> <span
  m="2684980">potential</span> <span m="2685350">function,</span> <span
  m="2685760">then</span> <span m="2685880">just</span> <span
  m="2686060">check</span> <span m="2686320">that</span> <span
  m="2686430">it</span> <span m="2686520">works.</span> <span
  m="2688560">But</span> <span m="2688850">it's</span> <span
  m="2689010">a</span> <span m="2689140">little</span> <span
  m="2689450">bit</span> <span m="2689610">of</span> <span
  m="2689740">black</span> <span m="2690020">magic</span> <span
  m="2690380">to</span> <span m="2690450">come</span> <span
  m="2690590">up</span> <span m="2690710">with</span> <span
  m="2690810">these</span> <span m="2690950">functions,</span> <span
  m="2692280">so</span> <span m="2692400">you</span> <span
  m="2692520">depends</span> <span m="2692552">how</span> <span
  m="2692584">you</span> <span m="2692616">like</span> <span
  m="2692648">to</span> <span m="2692760">think</span> <span
  m="2692910">about</span> <span m="2693110">things.</span></p><p><span
  m="2696770">So,</span> <span m="2698910">as</span> <span
  m="2699090">before,</span> <span m="2699550">we</span> <span
  m="2699670">can</span> <span m="2699890">define</span> <span
  m="2700210">an</span> <span m="2700320">amortized</span> <span
  m="2700770">cost.</span> <span m="2705000">It's</span> <span
  m="2705170">going</span> <span m="2705350">to</span> <span
  m="2705450">be</span> <span m="2705720">the</span> <span
  m="2705830">actual</span> <span m="2706170">cost</span> <span
  m="2708950">plus</span> <span m="2709700">the</span> <span
  m="2709810">change</span> <span m="2710490">in</span> <span
  m="2710630">the</span> <span m="2710700">potential.</span> <span
  m="2716330">So</span> <span m="2716700">change</span> <span
  m="2716890">of</span> <span m="2717080">potential</span> <span
  m="2718160">is</span> <span m="2718370">just</span> <span
  m="2719610">the</span> <span m="2719640">potential</span> <span
  m="2721540">after</span> <span m="2721860">the</span> <span
  m="2721960">operation</span> <span m="2725710">minus</span> <span
  m="2726720">the</span> <span m="2726840">potential</span> <span
  m="2728220">before</span> <span m="2728560">the</span> <span
  m="2728660">operation.</span> <span m="2741870">I</span> <span
  m="2743490">highlight</span> <span m="2743930">that,</span> <span
  m="2744330">and</span> <span m="2744475">it's</span> <span
  m="2744620">kind</span> <span m="2744800">of</span> <span
  m="2744970">obvious</span> <span m="2745440">from</span> <span
  m="2747890">the</span> <span m="2747960">way</span> <span
  m="2748100">we</span> <span m="2748210">set</span> <span
  m="2748410">things</span> <span m="2748670">up,</span> <span
  m="2749050">but</span> <span m="2750970">what</span> <span
  m="2751170">I</span> <span m="2751230">care</span> <span
  m="2751510">about</span> <span m="2752160">is</span> <span
  m="2752410">the</span> <span m="2752540">sum</span> <span
  m="2752990">of</span> <span m="2753210">the</span> <span
  m="2753320">amortized</span> <span m="2753780">costs.</span> <span
  m="2754980">I</span> <span m="2755110">care</span> <span
  m="2755290">about</span> <span m="2755480">that,</span> <span
  m="2755670">because</span> <span m="2756100">it's</span> <span
  m="2756190">supposed</span> <span m="2756400">to</span> <span
  m="2756460">be</span> <span m="2756540">an</span> <span
  m="2756640">upper</span> <span m="2756840">bound</span> <span
  m="2757100">on</span> <span m="2757190">the</span> <span
  m="2757250">sum</span> <span m="2757590">of</span> <span
  m="2757840">the</span> <span m="2757990">actual</span> <span
  m="2758460">costs.</span></p><p><span m="2760630">And</span> <span
  m="2760750">if</span> <span m="2760820">you</span> <span
  m="2760880">just</span> <span m="2761050">look</span> <span
  m="2761330">at</span> <span m="2761420">what</span> <span
  m="2761590">that</span> <span m="2761760">sum</span> <span
  m="2762030">is,</span> <span m="2762910">on</span> <span
  m="2763060">the</span> <span m="2763130">right-hand</span> <span
  m="2763420">side</span> <span m="2763740">I</span> <span
  m="2763840">have</span> <span m="2763900">amortized</span> <span
  m="2764380">cost</span> <span m="2765100">plus</span> <span
  m="2765920">the</span> <span m="2766630">fee</span> <span
  m="2766890">after</span> <span m="2767240">the</span> <span
  m="2767340">operation</span> <span m="2767910">minus</span> <span
  m="2768330">the</span> <span m="2768410">fee</span> <span
  m="2768640">before</span> <span m="2769030">the</span> <span
  m="2769160">operation.</span> <span m="2770300">If</span> <span
  m="2770470">I</span> <span m="2770540">add</span> <span m="2770910">all</span>
  <span m="2771070">those</span> <span m="2771300">up,</span> <span
  m="2773570">this</span> <span m="2773860">part</span> <span
  m="2774260">telescopes</span> <span m="2775100">or</span> <span
  m="2775230">you</span> <span m="2775290">get</span> <span
  m="2775450">cancellation</span> <span m="2776530">from</span> <span
  m="2776650">each</span> <span m="2776960">term</span> <span
  m="2777440">with</span> <span m="2777550">the</span> <span
  m="2777620">previous</span> <span m="2778030">term.</span> <span
  m="2779170">The</span> <span m="2779280">sum</span> <span
  m="2779650">of</span> <span m="2779740">the</span> <span
  m="2779850">amortized</span> <span m="2780340">costs</span> <span
  m="2787880">is</span> <span m="2788080">equal</span> <span
  m="2788370">to</span> <span m="2788670">the</span> <span
  m="2788790">sum</span> <span m="2789120">of</span> <span
  m="2789310">the</span> <span m="2789410">actual</span> <span
  m="2789810">costs</span> <span m="2795090">plus</span> <span
  m="2796780">phi</span> <span m="2801970">at</span> <span
  m="2802160">the</span> <span m="2802270">end</span> <span
  m="2804580">minus</span> <span m="2805556">phi</span> <span
  m="2807020">at</span> <span m="2807120">the</span> <span
  m="2807190">beginning.</span></p><p><span m="2812220">So</span> <span
  m="2812510">a</span> <span m="2812850">slight</span> <span
  m="2813240">catch</span> <span m="2813500">with</span> <span
  m="2813600">the</span> <span m="2813680">potential</span> <span
  m="2814090">method.</span> <span m="2814400">When</span> <span
  m="2814500">you</span> <span m="2814590">define</span> <span
  m="2814930">things</span> <span m="2815120">this</span> <span
  m="2815290">way,</span> <span m="2817620">you</span> <span
  m="2817810">also</span> <span m="2818260">have</span> <span
  m="2818480">to</span> <span m="2818580">pay</span> <span
  m="2819170">for</span> <span m="2820070">phi</span> <span
  m="2820450">at</span> <span m="2820630">the</span> <span
  m="2820700">beginning,</span> <span m="2821930">because</span> <span
  m="2822120">we</span> <span m="2822250">want</span> <span
  m="2822470">the</span> <span m="2822560">actual</span> <span
  m="2822960">cost</span> <span m="2823300">to</span> <span
  m="2823370">be,</span> <span m="2823520">at</span> <span
  m="2823620">most,</span> <span m="2824650">amortized</span> <span
  m="2825150">cost.</span> <span m="2826900">So</span> <span
  m="2827070">we</span> <span m="2827160">need</span> <span
  m="2827310">to</span> <span m="2827390">take</span> <span
  m="2827600">this</span> <span m="2827730">apart</span> <span
  m="2828030">and</span> <span m="2828190">put</span> <span
  m="2828410">it</span> <span m="2828490">over</span> <span
  m="2828660">here</span> <span m="2828880">so</span> <span
  m="2829020">it's,</span> <span m="2829110">at</span> <span
  m="2829200">most,</span> <span m="2829830">some</span> <span
  m="2829990">of</span> <span m="2830110">amortized</span> <span
  m="2830510">cost</span> <span m="2831320">plus</span> <span
  m="2831760">phi</span> <span m="2831970">of</span> <span
  m="2832080">the</span> <span m="2832160">beginning.</span> <span
  m="2835550">This</span> <span m="2835840">part</span> <span
  m="2836050">becomes</span> <span m="2836360">negative,</span> <span
  m="2836870">so</span> <span m="2836930">we</span> <span
  m="2837120">usually</span> <span m="2837480">just</span> <span
  m="2837700">ignore</span> <span m="2837970">it.</span> <span
  m="2838645">It</span> <span m="2839120">can</span> <span
  m="2839270">only</span> <span m="2839460">help</span> <span
  m="2839700">us.</span></p><p><span m="2842250">So</span> <span
  m="2842510">when</span> <span m="2842620">you</span> <span
  m="2842720">define</span> <span m="2843060">a</span> <span
  m="2843120">potential</span> <span m="2843530">function,</span> <span
  m="2843960">you'd</span> <span m="2844120">really</span> <span
  m="2844380">like</span> <span m="2844620">it</span> <span
  m="2844700">to</span> <span m="2844790">be</span> <span m="2844940">0</span>
  <span m="2845500">at</span> <span m="2845630">the</span> <span
  m="2845700">beginning.</span> <span m="2854150">It's</span> <span
  m="2854380">funny,</span> <span m="2854710">but</span> <span
  m="2854910">you</span> <span m="2855010">pay</span> <span
  m="2855310">phi</span> <span m="2855410">of</span> <span
  m="2855510">the</span> <span m="2855590">beginning</span> <span
  m="2855940">state</span> <span m="2857250">at</span> <span
  m="2857500">the</span> <span m="2857570">beginning</span> <span
  m="2858240">of</span> <span m="2858390">time,</span> <span
  m="2859680">and</span> <span m="2860220">when</span> <span
  m="2860410">you've</span> <span m="2860510">done</span> <span
  m="2860710">0</span> <span m="2860970">operations,</span> <span
  m="2861460">you</span> <span m="2861560">really</span> <span
  m="2861760">like</span> <span m="2861920">the</span> <span
  m="2861980">cost</span> <span m="2862280">to</span> <span
  m="2862350">be</span> <span m="2862460">0,</span> <span m="2864250">and</span>
  <span m="2864360">you</span> <span m="2865330">don't</span> <span
  m="2865500">want</span> <span m="2865640">to</span> <span
  m="2865700">have</span> <span m="2865840">to</span> <span
  m="2865940">have</span> <span m="2866050">stored</span> <span
  m="2866450">stuff</span> <span m="2866770">in</span> <span
  m="2866840">the</span> <span m="2866910">bank,</span> <span
  m="2867250">so</span> <span m="2868010">this</span> <span
  m="2868190">should</span> <span m="2868440">be</span> <span
  m="2869870">a--</span> <span m="2871730">constant</span> <span
  m="2872170">would</span> <span m="2872440">probably</span> <span
  m="2872560">be</span> <span m="2872680">OK,</span> <span m="2873150">or</span>
  <span m="2873290">whatever</span> <span m="2873530">the</span> <span
  m="2873590">cost</span> <span m="2873870">of</span> <span
  m="2873940">your</span> <span m="2874030">first</span> <span
  m="2874300">operation</span> <span m="2874940">is</span> <span
  m="2875340">but</span> <span m="2876540">should</span> <span
  m="2876740">be</span> <span m="2876820">constant</span> <span
  m="2876951">or</span> <span m="2877083">0.</span></p><p><span
  m="2878650">Usually</span> <span m="2879000">we</span> <span
  m="2879290">do</span> <span m="2879450">this</span> <span
  m="2879680">by</span> <span m="2879790">saying,</span> <span
  m="2880080">look,</span> <span m="2880330">let's</span> <span
  m="2880620">start</span> <span m="2880940">with</span> <span
  m="2881060">an</span> <span m="2881160">empty</span> <span
  m="2881430">structure</span> <span m="2882280">and</span> <span
  m="2882470">work</span> <span m="2882620">from</span> <span
  m="2882780">there.</span> <span m="2882980">Usually</span> <span
  m="2883560">phi</span> <span m="2883860">of</span> <span m="2883920">an</span>
  <span m="2884000">empty</span> <span m="2884200">structure</span> <span
  m="2884600">is</span> <span m="2884780">0,</span> <span m="2885550">and</span>
  <span m="2885850">all</span> <span m="2886040">is</span> <span
  m="2886140">well.</span> <span m="2886650">So</span> <span
  m="2887290">when</span> <span m="2887420">you're</span> <span
  m="2887510">defining</span> <span m="2888410">things</span> <span
  m="2888790">with</span> <span m="2888980">potential</span> <span
  m="2889320">function,</span> <span m="2889640">you</span> <span
  m="2889700">have</span> <span m="2889820">to</span> <span
  m="2889900">be</span> <span m="2889970">careful</span> <span
  m="2890270">about</span> <span m="2890480">your</span> <span
  m="2890570">initial</span> <span m="2890870">state.</span> <span
  m="2892040">You</span> <span m="2892140">have</span> <span
  m="2892240">to</span> <span m="2892330">make</span> <span
  m="2892480">sure</span> <span m="2892590">it's</span> <span
  m="2892710">non-negative</span> <span m="2893210">just</span> <span
  m="2893460">like</span> <span m="2893620">you</span> <span
  m="2893710">did</span> <span m="2893880">over</span> <span
  m="2894060">here,</span> <span m="2894950">but</span> <span
  m="2895710">you</span> <span m="2895870">didn't</span> <span
  m="2896080">have</span> <span m="2896230">to</span> <span
  m="2896340">worry</span> <span m="2896620">about</span> <span
  m="2897350">this</span> <span m="2897530">part</span> <span
  m="2898110">over</span> <span m="2898300">there.</span></p><p><span
  m="2899460">All</span> <span m="2899620">this</span> <span
  m="2899780">infrastructure,</span> <span m="2900730">what's</span> <span
  m="2900960">it</span> <span m="2901010">good</span> <span
  m="2901190">for?</span> <span m="2901640">Let's</span> <span
  m="2901920">do</span> <span m="2902050">some</span> <span
  m="2902350">examples.</span> <span m="2904700">These</span> <span
  m="2904810">are</span> <span m="2904860">going</span> <span
  m="2904990">to</span> <span m="2905070">be</span> <span m="2905220">the</span>
  <span m="2905310">most</span> <span m="2905600">interesting</span> <span
  m="2906860">examples.</span> <span m="2933370">A</span> <span
  m="2933510">kind</span> <span m="2933700">of</span> <span
  m="2933770">classic</span> <span m="2934120">example</span> <span
  m="2934670">of</span> <span m="2934960">amortization</span> <span
  m="2935780">is</span> <span m="2936270">incrementing</span> <span
  m="2936920">a</span> <span m="2936990">binary</span> <span
  m="2937370">counter.</span> <span m="2938780">So</span> <span
  m="2939070">when</span> <span m="2939220">you</span> <span
  m="2939340">have</span> <span m="2939990">some</span> <span
  m="2940380">binary</span> <span m="2940770">value</span> <span
  m="2941170">like</span> <span m="2943040">this</span> <span
  m="2943280">one</span> <span m="2944650">and</span> <span
  m="2944870">you</span> <span m="2945010">increment</span> <span
  m="2945610">it,</span> <span m="2951530">many</span> <span
  m="2951890">bits</span> <span m="2952200">change,</span> <span
  m="2954400">but</span> <span m="2954590">only</span> <span
  m="2954810">a</span> <span m="2954840">constant</span> <span
  m="2955300">number</span> <span m="2955550">are</span> <span
  m="2955615">going</span> <span m="2955680">to</span> <span
  m="2955750">change</span> <span m="2956140">in</span> <span
  m="2956270">an</span> <span m="2956380">amortized</span> <span
  m="2956840">sense.</span> <span m="2957080">If</span> <span
  m="2957190">I</span> <span m="2957270">start</span> <span
  m="2957610">with</span> <span m="2957780">a</span> <span m="2957840">0</span>
  <span m="2958320">vector,</span> <span m="2959380">0</span> <span
  m="2959680">bit</span> <span m="2960330">vector,</span> <span
  m="2960710">and</span> <span m="2960960">I</span> <span
  m="2961300">increment--</span> <span m="2961890">well,</span> <span
  m="2962060">the</span> <span m="2962140">very</span> <span
  m="2962340">first</span> <span m="2962610">increment</span> <span
  m="2962960">costs</span> <span m="2963230">1,</span> <span
  m="2963640">the</span> <span m="2963940">next</span> <span
  m="2964220">increment</span> <span m="2964590">costs</span> <span
  m="2964900">2,</span> <span m="2965500">the</span> <span
  m="2965680">next</span> <span m="2965905">increment</span> <span
  m="2966130">costs</span> <span m="2966460">1,</span> <span
  m="2967200">next</span> <span m="2967410">increment</span> <span
  m="2967830">costs</span> <span m="2968640">3,</span> <span
  m="2969460">then</span> <span m="2969760">1,</span> <span
  m="2970230">then</span> <span m="2970370">2,</span> <span
  m="2970640">then</span> <span m="2970800">1,</span> <span
  m="2971250">then</span> <span m="2971620">4,</span> <span
  m="2972150">then</span> <span m="2972660">it's</span> <span
  m="2972900">a</span> <span m="2972950">fractal.</span></p><p><span
  m="2974160">But</span> <span m="2975000">instead</span> <span
  m="2975390">of</span> <span m="2975870">thinking</span> <span
  m="2976160">about</span> <span m="2976360">that</span> <span
  m="2976510">fractal</span> <span m="2977280">and</span> <span
  m="2977580">working</span> <span m="2978160">hard</span> <span
  m="2978420">to</span> <span m="2978490">prove</span> <span
  m="2978730">that</span> <span m="2979030">summation</span> <span
  m="2979330">is</span> <span m="2980500">linear</span> <span
  m="2980990">for</span> <span m="2981410">an</span> <span
  m="2981730">operation,</span> <span m="2982700">let's</span> <span
  m="2982950">use</span> <span m="2983110">the</span> <span
  m="2983180">potential</span> <span m="2983600">method.</span> <span
  m="2985650">And</span> <span m="2986130">the</span> <span
  m="2986290">intuition</span> <span m="2986710">here</span> <span
  m="2986930">is</span> <span m="2987040">actually</span> <span
  m="2987300">pretty</span> <span m="2987550">easy,</span> <span
  m="2988530">because</span> <span m="2989010">an</span> <span
  m="2989160">increment</span> <span m="2992960">has</span> <span
  m="2993170">a</span> <span m="2993210">very</span> <span
  m="2993430">clear</span> <span m="2993720">cost.</span> <span
  m="2996170">It's</span> <span m="2996380">just</span> <span
  m="2997560">the</span> <span m="2997830">number</span> <span
  m="2998310">of</span> <span m="2998400">trailing</span> <span
  m="2998820">1s</span> <span m="2999910">plus</span> <span
  m="3000210">1.</span> <span m="3011390">That's</span> <span
  m="3011620">what</span> <span m="3011810">it</span> <span
  m="3011890">is</span> <span m="3012160">in</span> <span
  m="3012350">actual</span> <span m="3012790">cost.</span> <span
  m="3015070">We'd</span> <span m="3015260">like</span> <span
  m="3015450">that</span> <span m="3015670">to</span> <span
  m="3015840">be</span> <span m="3015960">constant</span> <span
  m="3016690">so,</span> <span m="3017440">intuitively,</span> <span
  m="3018030">what</span> <span m="3018310">is</span> <span
  m="3018470">making</span> <span m="3018840">an</span> <span
  m="3018920">increment</span> <span m="3019500">bad?</span> <span
  m="3020720">If</span> <span m="3020790">you</span> <span
  m="3020870">had</span> <span m="3021010">to</span> <span
  m="3021070">name</span> <span m="3021400">one</span> <span
  m="3021590">thing?</span> <span m="3027970">If</span> <span
  m="3028035">I</span> <span m="3028100">just</span> <span
  m="3028270">look</span> <span m="3028490">at</span> <span m="3028570">a</span>
  <span m="3028610">configuration,</span> <span m="3029950">is</span> <span
  m="3030120">this</span> <span m="3030860">bad?</span> <span
  m="3031760">Is</span> <span m="3031910">this</span> <span
  m="3032090">bad?</span> <span m="3033480">How</span> <span
  m="3033730">bad</span> <span m="3034090">is</span> <span
  m="3034200">the</span> <span m="3034270">configuration?</span> <span
  m="3034768">Yeah.</span></p><p><span m="3035266">AUDIENCE: The</span> <span
  m="3035764">more</span> <span m="3036262">trailing</span> <span
  m="3036511">ones</span> <span m="3036760">you</span> <span
  m="3037009">have,</span> <span m="3037258">the</span> <span
  m="3037507">worse</span> <span m="3037569">the</span> <span
  m="3037631">state</span> <span m="3037693">is?</span></p><p><span
  m="3038260">ERIK DEMAINE: The</span> <span m="3038370">more</span> <span
  m="3038570">trailing</span> <span m="3039030">ones,</span> <span
  m="3039510">the</span> <span m="3039590">worse</span> <span
  m="3039850">the</span> <span m="3039920">state</span> <span
  m="3040210">is.</span> <span m="3040500">So</span> <span
  m="3040600">that's</span> <span m="3040830">one</span> <span
  m="3041010">natural</span> <span m="3041390">definition.</span> <span
  m="3042460">Turns</span> <span m="3042690">out,</span> <span
  m="3042780">it</span> <span m="3042870">won't</span> <span
  m="3043090">work.</span> <span m="3044160">Let's</span> <span
  m="3044260">see</span> <span m="3044400">why.</span> <span
  m="3047320">I</span> <span m="3047420">think</span> <span
  m="3048240">here's</span> <span m="3048570">an</span> <span
  m="3048650">example.</span> <span m="3051790">So</span> <span
  m="3052130">near</span> <span m="3052320">the</span> <span
  m="3052470">end</span> <span m="3052740">of</span> <span
  m="3052830">our</span> <span m="3052950">increment</span> <span
  m="3053470">stage,</span> <span m="3053880">we</span> <span
  m="3053980">have</span> <span m="3054160">a</span> <span
  m="3054200">whole</span> <span m="3054430">bunch</span> <span
  m="3054680">of</span> <span m="3054820">1s</span> <span m="3055250">but</span>
  <span m="3055410">no</span> <span m="3055550">trailing</span> <span
  m="3055940">1s,</span> <span m="3056450">number</span> <span
  m="3056710">of</span> <span m="3056860">trailing</span> <span
  m="3057170">1s</span> <span m="3057370">is</span> <span m="3057527">0.</span>
  <span m="3058540">If</span> <span m="3058700">I</span> <span
  m="3058780">do</span> <span m="3058900">a</span> <span
  m="3058950">single</span> <span m="3059370">increment,</span> <span
  m="3060310">now</span> <span m="3060610">the</span> <span
  m="3060700">number</span> <span m="3060930">of</span> <span
  m="3060990">trailing</span> <span m="3061350">1s</span> <span
  m="3061630">is</span> <span m="3061820">n,</span> <span m="3063670">so</span>
  <span m="3064120">if</span> <span m="3064300">you</span> <span
  m="3064430">look</span> <span m="3064610">at</span> <span
  m="3064690">the</span> <span m="3064830">amortized</span> <span
  m="3065320">cost,</span> <span m="3066640">it's</span> <span
  m="3066830">the</span> <span m="3066930">actual</span> <span
  m="3067350">cost</span> <span m="3067720">plus</span> <span
  m="3068080">the</span> <span m="3068180">change</span> <span
  m="3068760">in</span> <span m="3068910">phi</span> <span
  m="3069700">and</span> <span m="3069910">so</span> <span m="3070350">I</span>
  <span m="3070620">actually</span> <span m="3070950">pay</span> <span
  m="3071150">n</span> <span m="3071450">for</span> <span
  m="3071550">that</span> <span m="3071720">operation</span> <span
  m="3072270">in</span> <span m="3072440">the</span> <span
  m="3072510">amortized</span> <span m="3072810">sense,</span> <span
  m="3073090">and</span> <span m="3073180">that's</span> <span
  m="3073370">no</span> <span m="3073500">good.</span> <span
  m="3073680">We</span> <span m="3074080">only</span> <span
  m="3074320">want</span> <span m="3074470">to</span> <span
  m="3074530">pay</span> <span m="3074670">constant,</span> <span
  m="3075270">but</span> <span m="3075470">it's</span> <span
  m="3075640">on</span> <span m="3075750">the</span> <span
  m="3075830">right</span> <span m="3075990">track.</span></p><p><span
  m="3077430">So</span> <span m="3077570">number</span> <span
  m="3077830">of</span> <span m="3077900">trailing</span> <span
  m="3078210">1,</span> <span m="3078790">it</span> <span m="3080030">is</span>
  <span m="3080220">the</span> <span m="3080310">natural</span> <span
  m="3080660">thing</span> <span m="3080820">to</span> <span
  m="3080900">try,</span> <span m="3081140">but</span> <span
  m="3081350">it</span> <span m="3081465">doesn't</span> <span
  m="3081580">quite</span> <span m="3081810">work</span> <span
  m="3082010">for</span> <span m="3082780">our</span> <span
  m="3082920">definition</span> <span m="3083370">of</span> <span
  m="3083440">phi.</span> <span m="3086250">Other</span> <span
  m="3086500">ideas?</span> <span m="3088660">Yeah.</span></p><p><span
  m="3089128">AUDIENCE: The</span> <span m="3089596">total</span> <span
  m="3090064">number</span> <span m="3090532">of</span> <span
  m="3091000">[INAUDIBLE]</span></p><p><span m="3091940">ERIK DEMAINE: 
  The</span> <span m="3092060">total</span> <span m="3092390">number</span>
  <span m="3092670">of</span> <span m="3092750">1s.</span> <span
  m="3093360">Yeah.</span> <span m="3094270">Let's</span> <span
  m="3094480">define</span> <span m="3094940">phi,</span> <span
  m="3096100">could</span> <span m="3096260">be</span> <span
  m="3096670">the</span> <span m="3096760">number</span> <span
  m="3098110">of</span> <span m="3098280">1</span> <span
  m="3098530">bits.</span> <span m="3100130">That</span> <span
  m="3100370">will</span> <span m="3100530">work,</span> <span
  m="3104090">but</span> <span m="3104310">you</span> <span
  m="3104590">both</span> <span m="3104830">get</span> <span
  m="3105000">a</span> <span m="3105040">Frisbee.</span></p><p><span
  m="3109820">AUDIENCE:  Oh,</span> <span
  m="3109970">[INAUDIBLE].</span></p><p><span m="3110220">ERIK DEMAINE:
  Sorry.</span> <span m="3111330">Good</span> <span m="3111420">thing</span>
  <span m="3111610">I</span> <span m="3111670">missed.</span> <span
  m="3115130">Number</span> <span m="3115500">1</span> <span
  m="3115770">bits.</span> <span m="3116260">Intuitively,</span> <span
  m="3116880">1s</span> <span m="3117300">are</span> <span
  m="3117840">bad,</span> <span m="3119020">and</span> <span
  m="3120690">this</span> <span m="3121010">is</span> <span m="3121110">a</span>
  <span m="3121160">good</span> <span m="3121480">definition,</span> <span
  m="3122150">because</span> <span m="3122560">when</span> <span
  m="3122700">I</span> <span m="3122750">increment</span> <span
  m="3123350">I</span> <span m="3123510">only</span> <span
  m="3123830">create</span> <span m="3124300">one</span> <span
  m="3124720">1,</span> <span m="3125930">so</span> <span m="3126100">I'm</span>
  <span m="3126190">not</span> <span m="3126390">going</span> <span
  m="3126510">to</span> <span m="3126580">have</span> <span
  m="3126790">this</span> <span m="3126940">issue</span> <span
  m="3127350">that</span> <span m="3127950">delta</span> <span
  m="3128530">phi</span> <span m="3129050">goes</span> <span
  m="3129340">up</span> <span m="3129560">by</span> <span m="3129720">a</span>
  <span m="3129830">lot--</span> <span m="3130310">sorry,</span> <span
  m="3130640">that</span> <span m="3130780">phi</span> <span
  m="3130990">goes</span> <span m="3131200">up</span> <span
  m="3131320">by</span> <span m="3131440">a</span> <span m="3131520">lot,</span>
  <span m="3131720">that</span> <span m="3131800">delta</span> <span
  m="3132110">phi</span> <span m="3132310">is</span> <span
  m="3132450">really</span> <span m="3132660">large.</span> <span
  m="3134620">Because</span> <span m="3134810">even</span> <span
  m="3135040">in</span> <span m="3135140">this</span> <span
  m="3135270">scenario,</span> <span m="3135690">if</span> <span
  m="3135770">I</span> <span m="3135870">increment,</span> <span
  m="3136400">I</span> <span m="3136480">only</span> <span
  m="3136730">add</span> <span m="3137000">one</span> <span
  m="3137230">1.</span></p><p><span m="3137780">In</span> <span
  m="3137950">this</span> <span m="3138090">scenario,</span> <span
  m="3138940">I</span> <span m="3139080">destroy</span> <span
  m="3139930">three</span> <span m="3140220">1s</span> <span
  m="3141170">and</span> <span m="3141370">add</span> <span
  m="3141660">one.</span> <span m="3143370">In</span> <span
  m="3143590">general,</span> <span m="3144860">if</span> <span
  m="3145130">there</span> <span m="3145480">are,</span> <span
  m="3146220">let's</span> <span m="3146480">say,</span> <span
  m="3148376">t</span> <span m="3148850">trailing</span> <span
  m="3149250">bits,</span> <span m="3151070">then</span> <span
  m="3151600">an</span> <span m="3151720">increment</span> <span
  m="3156570">destroys</span> <span m="3160330">t</span> <span
  m="3160590">1</span> <span m="3160830">bits,</span> <span
  m="3163660">and</span> <span m="3163880">it</span> <span
  m="3163970">creates</span> <span m="3165470">one</span> <span
  m="3165810">1</span> <span m="3166235">bit.</span> <span
  m="3171330">That's</span> <span m="3171790">always</span> <span
  m="3172080">what</span> <span m="3172210">happens.</span> <span
  m="3172860">T</span> <span m="3173070">could</span> <span
  m="3173250">be</span> <span m="3173380">0,</span> <span m="3174010">and</span>
  <span m="3174170">then</span> <span m="3174290">I</span> <span
  m="3174410">have</span> <span m="3174570">a</span> <span
  m="3174610">net</span> <span m="3175200">positive</span> <span
  m="3175610">of</span> <span m="3175730">1,</span> <span m="3176430">but</span>
  <span m="3176660">most</span> <span m="3176970">of</span> <span
  m="3177030">the</span> <span m="3177090">time</span> <span
  m="3177330">actually</span> <span m="3177620">I</span> <span
  m="3177710">destroy</span> <span m="3178510">1</span> <span
  m="3178760">bits--</span> <span m="3179900">well,</span> <span
  m="3180180">more</span> <span m="3180330">than</span> <span
  m="3180510">half</span> <span m="3180770">the</span> <span
  m="3180860">time</span> <span m="3181200">I</span> <span
  m="3181270">destroy</span> <span m="3181620">1</span> <span
  m="3181820">bits,</span> <span m="3182420">and</span> <span
  m="3182540">I</span> <span m="3182620">just</span> <span
  m="3182850">create</span> <span m="3183200">a</span> <span
  m="3183260">single</span> <span m="3183650">1</span> <span
  m="3183850">bit,</span> <span m="3184460">in</span> <span
  m="3184520">terms</span> <span m="3184730">of</span> <span
  m="3184820">the</span> <span m="3184890">total</span> <span
  m="3185220">number</span> <span m="3185460">of</span> <span
  m="3185530">1s.</span></p><p><span m="3186560">So</span> <span
  m="3186990">the</span> <span m="3187180">amortized</span> <span
  m="3187700">cost</span> <span m="3194930">is</span> <span
  m="3196110">the</span> <span m="3197410">actual</span> <span
  m="3197810">cost,</span> <span m="3198280">which</span> <span
  m="3198480">is</span> <span m="3198640">this</span> <span m="3199690">1</span>
  <span m="3200100">plus</span> <span m="3200440">t.</span> <span
  m="3203920">I'm</span> <span m="3204090">actually</span> <span
  m="3204340">going</span> <span m="3204470">to</span> <span
  m="3204550">remove</span> <span m="3204940">the--</span> <span
  m="3205912">well,</span> <span m="3206400">yeah.</span> <span
  m="3208480">I'd</span> <span m="3208640">like</span> <span
  m="3208850">to</span> <span m="3208980">remove</span> <span
  m="3209280">the</span> <span m="3209360">big</span> <span m="3209560">O</span>
  <span m="3209695">if</span> <span m="3209830">I</span> <span
  m="3209930">could.</span> <span m="3211786">I'm</span> <span
  m="3212250">going</span> <span m="3212370">to</span> <span
  m="3212490">count--</span> <span m="3214110">I</span> <span
  m="3214230">want</span> <span m="3214440">to</span> <span
  m="3214660">be</span> <span m="3214870">a</span> <span
  m="3214930">little</span> <span m="3215110">bit</span> <span
  m="3215260">precise</span> <span m="3215610">about</span> <span
  m="3215830">my</span> <span m="3215930">counting,</span> <span
  m="3216730">because</span> <span m="3216910">I</span> <span
  m="3217040">have</span> <span m="3217230">to</span> <span
  m="3217340">do</span> <span m="3217500">a</span> <span
  m="3217530">minus</span> <span m="3217960">sign</span> <span
  m="3218190">here.</span> <span m="3218340">If</span> <span
  m="3218430">I</span> <span m="3218510">just</span> <span
  m="3218690">wrote</span> <span m="3218820">minus</span> <span
  m="3219290">t,</span> <span m="3220430">that</span> <span
  m="3220630">doesn't</span> <span m="3220860">quite</span> <span
  m="3221060">work</span> <span m="3221260">out,</span> <span
  m="3221550">because</span> <span m="3221770">there's</span> <span
  m="3221930">a</span> <span m="3221980">constant</span> <span
  m="3222370">here</span> <span m="3222960">that</span> <span
  m="3223090">I</span> <span m="3223175">have</span> <span m="3223260">to</span>
  <span m="3223360">annihilate.</span></p><p><span m="3224790">If</span> <span
  m="3224900">I</span> <span m="3224960">count</span> <span
  m="3225180">the</span> <span m="3225250">number</span> <span
  m="3225540">of</span> <span m="3225630">bits</span> <span
  m="3225910">that</span> <span m="3226070">change,</span> <span
  m="3227150">then</span> <span m="3227250">that's</span> <span
  m="3227310">exactly</span> <span m="3227820">1</span> <span
  m="3228030">plus</span> <span m="3228290">t</span> <span m="3229040">in</span>
  <span m="3229240">an</span> <span m="3229440">increment.</span> <span
  m="3231090">And</span> <span m="3232000">now</span> <span
  m="3232200">the</span> <span m="3232300">change</span> <span
  m="3232660">of</span> <span m="3232730">potential</span> <span
  m="3233210">is</span> <span m="3233380">that</span> <span m="3233510">I</span>
  <span m="3233590">decrease</span> <span m="3234070">by</span> <span
  m="3234210">t,</span> <span m="3234960">I</span> <span
  m="3235110">increase</span> <span m="3235550">by</span> <span
  m="3235680">1,</span> <span m="3240680">I</span> <span m="3240800">get</span>
  <span m="3240920">0.</span> <span m="3241440">That</span> <span
  m="3241580">seems</span> <span m="3241800">a</span> <span
  m="3241830">little</span> <span m="3242080">bit</span> <span
  m="3242240">too</span> <span m="3242390">small,</span> <span
  m="3243250">0</span> <span m="3243620">time</span> <span
  m="3243950">per</span> <span m="3244160">operation.</span></p><p><span
  m="3246160">AUDIENCE: You're</span> <span m="3246660">adding</span> <span
  m="3246826">a</span> <span m="3246993">1,</span> <span
  m="3247160">you're</span> <span m="3247410">not</span> <span
  m="3247660">subtracting</span> <span m="3248160">[INAUDIBLE].</span> <span
  m="3248660">Sorry,</span> <span m="3249160">you're</span> <span
  m="3249392">not</span> <span m="3249625">subtracting</span> <span
  m="3250090">[INAUDIBLE].</span> <span m="3250555">Just</span> <span
  m="3251020">subtracting</span> <span m="3251485">something</span> <span
  m="3251950">else.</span></p><p><span m="3252415">ERIK DEMAINE: Oh,</span>
  <span m="3252880">right,</span> <span m="3253120">sorry.</span> <span
  m="3253390">That's</span> <span m="3253620">2.</span> <span
  m="3254400">Thank</span> <span m="3254610">you.</span> <span
  m="3255670">I</span> <span m="3255840">just</span> <span
  m="3255990">can't</span> <span m="3256170">do</span> <span
  m="3256270">the</span> <span m="3256400">arithmetic.</span> <span
  m="3256900">I</span> <span m="3257080">wrote</span> <span
  m="3257290">everything</span> <span m="3257590">correct,</span> <span
  m="3259310">but</span> <span m="3259450">this</span> <span
  m="3259600">is</span> <span m="3259680">a</span> <span m="3259730">plus</span>
  <span m="3260060">1</span> <span m="3260320">and</span> <span
  m="3260420">a</span> <span m="3260500">plus</span> <span m="3260760">1.</span>
  <span m="3261960">T</span> <span m="3262170">minus</span> <span
  m="3262490">t</span> <span m="3262650">is</span> <span m="3262780">the</span>
  <span m="3262860">key</span> <span m="3263020">part</span> <span
  m="3263240">that</span> <span m="3263300">cancels.</span> <span
  m="3264080">Now,</span> <span m="3264250">if</span> <span
  m="3264420">you</span> <span m="3264510">were</span> <span
  m="3264640">measuring</span> <span m="3265170">running</span> <span
  m="3265470">time</span> <span m="3265830">instead</span> <span
  m="3267970">of</span> <span m="3268040">the</span> <span
  m="3268110">number</span> <span m="3268410">of</span> <span
  m="3268490">changed</span> <span m="3268810">bits,</span> <span
  m="3269300">you'd</span> <span m="3269470">have</span> <span
  m="3269670">to</span> <span m="3269730">have</span> <span m="3269850">a</span>
  <span m="3269910">big</span> <span m="3270080">O</span> <span
  m="3270320">here,</span> <span m="3271380">and</span> <span
  m="3271590">in</span> <span m="3271690">that</span> <span
  m="3271870">case</span> <span m="3272240">you'd</span> <span
  m="3272280">have</span> <span m="3272470">to</span> <span
  m="3272570">define</span> <span m="3272970">phi</span> <span
  m="3273250">to</span> <span m="3273410">be</span> <span
  m="3273630">some</span> <span m="3273970">constant</span> <span
  m="3275100">times</span> <span m="3275440">the</span> <span
  m="3275520">number</span> <span m="3275760">of</span> <span
  m="3275830">1</span> <span m="3276000">bits.</span> <span
  m="3276540">So</span> <span m="3276640">you</span> <span
  m="3276740">could</span> <span m="3276840">still</span> <span
  m="3276900">set</span> <span m="3277130">that</span> <span
  m="3277280">constant</span> <span m="3277690">large</span> <span
  m="3277970">enough</span> <span m="3278700">so</span> <span
  m="3278960">that</span> <span m="3279270">this</span> <span
  m="3279460">part,</span> <span m="3279710">which</span> <span
  m="3279840">is</span> <span m="3279930">multiplied</span> <span
  m="3280400">by</span> <span m="3280530">c,</span> <span
  m="3281910">would</span> <span m="3282140">annihilate</span> <span
  m="3282660">this</span> <span m="3282810">part,</span> <span
  m="3283030">which</span> <span m="3283230">would</span> <span
  m="3283360">have</span> <span m="3283520">a</span> <span
  m="3283570">big</span> <span m="3283770">O.</span> <span m="3284820">I</span>
  <span m="3285030">guess</span> <span m="3285220">I'll</span> <span
  m="3285320">write</span> <span m="3285490">it</span> <span
  m="3285600">in</span> <span m="3285800">just</span> <span
  m="3286010">for</span> <span m="3286110">kicks</span> <span
  m="3287230">so</span> <span m="3287300">you've</span> <span
  m="3287470">seen</span> <span m="3287810">both</span> <span
  m="3288040">versions.</span> <span m="3288630">This</span> <span
  m="3288660">would</span> <span m="3288690">be</span> <span
  m="3288720">minus</span> <span m="3288910">c</span> <span
  m="3289000">see</span> <span m="3289240">times</span> <span
  m="3289590">t</span> <span m="3290190">plus</span> <span m="3290480">1</span>
  <span m="3290700">times</span> <span m="3290920">c.</span> <span
  m="3292520">So</span> <span m="3292740">that</span> <span
  m="3292910">would</span> <span m="3293000">still</span> <span
  m="3293220">work</span> <span m="3293420">out.</span> <span
  m="3293690">If</span> <span m="3293820">you</span> <span
  m="3293900">set</span> <span m="3294110">c</span> <span m="3294510">to</span>
  <span m="3294630">the</span> <span m="3294710">right</span> <span
  m="3294880">value,</span> <span m="3295200">you</span> <span
  m="3295280">will</span> <span m="3295370">still</span> <span
  m="3295570">get</span> <span m="3295770">2.</span> <span m="3298760">So</span>
  <span m="3299120">binary</span> <span m="3299450">counters,</span> <span
  m="3299860">constant</span> <span m="3300210">amortize</span> <span
  m="3300610">operation.</span> <span m="3301370">So</span> <span
  m="3301510">I</span> <span m="3301570">think</span> <span
  m="3301720">this</span> <span m="3301870">is</span> <span
  m="3302000">very</span> <span m="3302180">clean,</span> <span
  m="3303040">much</span> <span m="3303240">easier</span> <span
  m="3303520">than</span> <span m="3303670">analyzing</span> <span
  m="3304110">the</span> <span m="3304170">fractal</span> <span
  m="3304610">of</span> <span m="3304710">the</span> <span
  m="3304780">costs.</span></p><p><span m="3305980">Now,</span> <span
  m="3306270">binary</span> <span m="3306570">counter</span> <span
  m="3306910">with</span> <span m="3307090">increment</span> <span
  m="3307270">and</span> <span m="3307330">decrements,</span> <span
  m="3307780">that</span> <span m="3307920">doesn't</span> <span
  m="3308160">work.</span> <span m="3309090">There</span> <span
  m="3309460">are</span> <span m="3309510">other</span> <span
  m="3309690">data</span> <span m="3309900">structures</span> <span
  m="3310290">to</span> <span m="3310390">do</span> <span m="3310550">it,</span>
  <span m="3311100">but</span> <span m="3311730">that's</span> <span
  m="3312760">for</span> <span m="3312950">another</span> <span
  m="3313210">class.</span></p><p><span m="3316530">Let's</span> <span
  m="3316730">go</span> <span m="3316830">back</span> <span
  m="3317070">to</span> <span m="3317170">2-3</span> <span
  m="3317570">trees,</span> <span m="3318180">because</span> <span
  m="3318360">I</span> <span m="3318470">have</span> <span
  m="3318640">more</span> <span m="3318950">interesting</span> <span
  m="3319370">things</span> <span m="3319590">to</span> <span
  m="3319680">say</span> <span m="3319870">about</span> <span
  m="3320120">them.</span> <span m="3323590">Any</span> <span
  m="3323710">questions</span> <span m="3324100">about</span> <span
  m="3324300">binary</span> <span m="3324540">counters?</span> <span
  m="3328440">As</span> <span m="3328650">you</span> <span
  m="3328740">saw,</span> <span m="3328940">it</span> <span
  m="3329050">wasn't</span> <span m="3329400">totally</span> <span
  m="3329870">easy</span> <span m="3330160">to</span> <span
  m="3330300">define</span> <span m="3330620">a</span> <span
  m="3330670">potential</span> <span m="3331080">function,</span> <span
  m="3331530">but</span> <span m="3332570">we're</span> <span
  m="3332710">going</span> <span m="3332840">to</span> <span
  m="3332910">see--</span> <span m="3334290">if</span> <span
  m="3334390">see</span> <span m="3334520">enough</span> <span
  m="3334770">examples,</span> <span m="3335320">you</span> <span
  m="3335450">get</span> <span m="3335630">some</span> <span
  m="3335880">intuition</span> <span m="3336470">for</span> <span
  m="3336700">them,</span> <span m="3337980">but</span> <span
  m="3338350">it</span> <span m="3338490">is</span> <span
  m="3338630">probably</span> <span m="3338930">the</span> <span
  m="3339020">hardest</span> <span m="3339300">method</span> <span
  m="3339570">to</span> <span m="3339680">use</span> <span
  m="3339870">but</span> <span m="3340010">also</span> <span
  m="3340270">kind</span> <span m="3340500">of</span> <span
  m="3340600">the</span> <span m="3340670">most</span> <span
  m="3340920">powerful.</span> <span m="3342400">I</span> <span
  m="3342585">would</span> <span m="3342770">say</span> <span
  m="3342955">all</span> <span m="3343140">hard</span> <span
  m="3343410">amortizations</span> <span m="3344740">use</span> <span
  m="3345030">a</span> <span m="3345090">potential</span> <span
  m="3345490">function.</span> <span m="3346640">That's</span> <span
  m="3346860">just</span> <span m="3347520">life.</span> <span
  m="3348730">Finding</span> <span m="3349160">them</span> <span
  m="3349470">is</span> <span m="3349717">tough.</span> <span
  m="3351170">That's</span> <span m="3351550">reality.</span></p><p><span
  m="3360790">I</span> <span m="3360890">want</span> <span m="3361080">to</span>
  <span m="3361170">analyze</span> <span m="3362340">insertions</span> <span
  m="3362990">only</span> <span m="3363380">in</span> <span
  m="3363520">2-3</span> <span m="3363850">trees,</span> <span
  m="3364160">then</span> <span m="3364300">we'll</span> <span
  m="3364400">do</span> <span m="3364520">insertions</span> <span
  m="3365020">and</span> <span m="3365130">deletions,</span> <span
  m="3366430">and</span> <span m="3367770">I</span> <span
  m="3367940">want</span> <span m="3368100">to</span> <span
  m="3368160">count</span> <span m="3368560">how</span> <span
  m="3368800">many</span> <span m="3369030">splits</span> <span
  m="3370710">in</span> <span m="3370830">a</span> <span m="3370950">2-3</span>
  <span m="3371270">tree</span> <span m="3375710">when</span> <span
  m="3375910">I</span> <span m="3375970">do</span> <span m="3376100">an</span>
  <span m="3376190">insertion.</span> <span m="3382560">So</span> <span
  m="3382580">remember,</span> <span m="3383040">when</span> <span
  m="3383100">you</span> <span m="3384970">insert</span> <span
  m="3385410">into</span> <span m="3385630">a</span> <span
  m="3385670">2-3</span> <span m="3386030">tree,</span> <span
  m="3386830">so</span> <span m="3387020">you</span> <span
  m="3387100">started</span> <span m="3387470">a</span> <span
  m="3387520">leaf,</span> <span m="3387990">you</span> <span
  m="3388180">insert</span> <span m="3388530">a</span> <span
  m="3388545">key</span> <span m="3388560">there.</span> <span
  m="3389310">If</span> <span m="3389470">it's</span> <span
  m="3389630">too</span> <span m="3389770">big,</span> <span
  m="3390290">you</span> <span m="3390380">split</span> <span
  m="3390670">that</span> <span m="3390870">node</span> <span
  m="3391160">into</span> <span m="3391370">two</span> <span
  m="3391540">parts,</span> <span m="3392270">which</span> <span
  m="3392460">causes</span> <span m="3392800">an</span> <span
  m="3392890">insert</span> <span m="3393220">of</span> <span
  m="3393310">a</span> <span m="3393350">key</span> <span
  m="3393730">into</span> <span m="3394070">the</span> <span
  m="3394610">parent.</span> <span m="3395470">Then</span> <span
  m="3395650">that</span> <span m="3395830">might</span> <span
  m="3396000">be</span> <span m="3396090">too</span> <span
  m="3396270">big,</span> <span m="3396540">and</span> <span
  m="3396630">you</span> <span m="3396710">split,</span> <span
  m="3397130">and</span> <span m="3397250">so</span> <span
  m="3397420">on.</span> <span m="3397890">So</span> <span
  m="3398200">total</span> <span m="3398530">number</span> <span
  m="3398820">of</span> <span m="3398880">splits</span> <span
  m="3399150">per</span> <span m="3399260">insert?</span> <span
  m="3402530">Upper</span> <span m="3402760">bounds?</span></p><p><span
  m="3403243">AUDIENCE:  Log</span> <span m="3403726">n.</span></p><p><span
  m="3404210">ERIK DEMAINE: Log</span> <span m="3404350">n.</span> <span
  m="3404930">OK.</span> <span m="3405240">Definitely</span> <span
  m="3405940">log</span> <span m="3406220">n</span> <span m="3406410">in</span>
  <span m="3406445">the</span> <span m="3406480">worst</span> <span
  m="3406710">case.</span> <span m="3407230">That's</span> <span
  m="3407400">sort</span> <span m="3407560">of</span> <span
  m="3407620">the</span> <span m="3407750">actual</span> <span
  m="3408170">cost</span> <span m="3413080">but,</span> <span
  m="3413370">as</span> <span m="3413540">you</span> <span
  m="3413640">may</span> <span m="3413820">be</span> <span
  m="3413930">guessing,</span> <span m="3414830">I</span> <span
  m="3414970">claim</span> <span m="3415510">the</span> <span
  m="3415660">amortized</span> <span m="3416330">number</span> <span
  m="3416580">of</span> <span m="3416650">splits</span> <span
  m="3417350">is</span> <span m="3417520">only</span> <span
  m="3417740">constant,</span> <span m="3424110">and</span> <span
  m="3424300">first</span> <span m="3424580">will</span> <span
  m="3424690">prove</span> <span m="3424960">this</span> <span
  m="3425170">with</span> <span m="3425330">insertion</span> <span
  m="3425780">only.</span> <span m="3426970">With</span> <span
  m="3427210">insertion</span> <span m="3427640">and</span> <span
  m="3427740">deletion</span> <span m="3428200">in</span> <span
  m="3428310">a</span> <span m="3428380">2-3</span> <span
  m="3428770">tree,</span> <span m="3428950">it's</span> <span
  m="3429060">actually</span> <span m="3429340">not</span> <span
  m="3429590">true,</span> <span m="3430430">but</span> <span
  m="3430680">for</span> <span m="3430800">insertion</span> <span
  m="3431160">only</span> <span m="3431420">this</span> <span
  m="3431650">is</span> <span m="3431730">true.</span> <span
  m="3432740">So</span> <span m="3432840">let's</span> <span
  m="3433040">prove</span> <span m="3433250">it.</span> <span
  m="3435292">A</span> <span m="3435640">2-3</span> <span
  m="3436000">tree,</span> <span m="3436680">we</span> <span
  m="3436820">have</span> <span m="3436960">two</span> <span
  m="3437090">types</span> <span m="3437350">of</span> <span
  m="3437420">nodes,</span> <span m="3438360">2</span> <span
  m="3438550">nodes</span> <span m="3441040">and</span> <span
  m="3441330">3</span> <span m="3441520">nodes.</span> <span
  m="3443090">I'm</span> <span m="3443260">counting</span> <span
  m="3443830">the</span> <span m="3443990">number</span> <span
  m="3444290">of</span> <span m="3444420">children,</span> <span
  m="3444960">not</span> <span m="3445270">the</span> <span
  m="3445360">number</span> <span m="3445560">of</span> <span
  m="3445630">keys,</span> <span m="3446000">is</span> <span
  m="3446130">one</span> <span m="3446300">smaller</span> <span
  m="3446720">than</span> <span m="3446775">the</span> <span
  m="3446830">number</span> <span m="3447090">of</span> <span
  m="3447170">children.</span> <span m="3448770">Sorry,</span> <span
  m="3450710">no</span> <span m="3450870">vertical</span> <span
  m="3451210">line</span> <span m="3451410">there.</span> <span
  m="3453140">This</span> <span m="3453330">is</span> <span
  m="3453420">just</span> <span m="3453590">sum</span> <span
  m="3453770">key</span> <span m="3454010">x,</span> <span
  m="3454890">sum</span> <span m="3455110">key</span> <span
  m="3455330">and</span> <span m="3455450">y.</span></p><p><span
  m="3460700">So</span> <span m="3462030">when</span> <span m="3462390">I</span>
  <span m="3463790">insert</span> <span m="3464390">a</span> <span
  m="3464583">key</span> <span m="3465551">into</span> <span
  m="3465940">a</span> <span m="3465990">node,</span> <span
  m="3466850">it</span> <span m="3467050">momentarily</span> <span
  m="3467970">becomes</span> <span m="3469260">a</span> <span
  m="3469470">4</span> <span m="3469840">node,</span> <span
  m="3470575">you</span> <span m="3470900">might</span> <span
  m="3471090">say,</span> <span m="3472590">with</span> <span
  m="3472920">has</span> <span m="3473390">three</span> <span
  m="3473600">keys,</span> <span m="3474620">x,</span> <span
  m="3474830">y,</span> <span m="3475040">and</span> <span m="3475180">z.</span>
  <span m="3475860">So</span> <span m="3476950">4</span> <span
  m="3477170">node,</span> <span m="3477770">it</span> <span
  m="3478260">has</span> <span m="3478700">four</span> <span
  m="3479010">children,</span> <span m="3480080">hence</span> <span
  m="3480260">the</span> <span m="3480440">4,</span> <span
  m="3481680">and</span> <span m="3482140">we</span> <span
  m="3482450">split</span> <span m="3482840">it</span> <span
  m="3484370">into</span> <span m="3486120">x</span> <span
  m="3487750">and</span> <span m="3487960">z.</span> <span
  m="3490790">There's</span> <span m="3491050">the</span> <span
  m="3491120">four</span> <span m="3491330">children,</span> <span
  m="3491820">same</span> <span m="3492080">number,</span> <span
  m="3493310">but</span> <span m="3493440">now</span> <span
  m="3493570">they're</span> <span m="3493680">distributed</span> <span
  m="3494120">between</span> <span m="3494380">x</span> <span
  m="3494580">and</span> <span m="3494690">z.</span> <span
  m="3495110">And</span> <span m="3495280">then</span> <span
  m="3495400">y</span> <span m="3495830">gets</span> <span
  m="3496120">promoted</span> <span m="3497270">to</span> <span
  m="3497700">the</span> <span m="3498130">next</span> <span
  m="3498380">level</span> <span m="3498630">up,</span> <span
  m="3500180">which</span> <span m="3500430">allows</span> <span
  m="3500720">us</span> <span m="3500830">to</span> <span
  m="3500900">have</span> <span m="3501010">two</span> <span
  m="3501160">pointers</span> <span m="3501580">to</span> <span
  m="3501660">x</span> <span m="3501830">and</span> <span m="3501930">z.</span>
  <span m="3502120">And</span> <span m="3502330">that's</span> <span
  m="3502390">how</span> <span m="3502450">2-3</span> <span
  m="3502780">trees</span> <span m="3503060">work.</span> <span
  m="3503760">That's</span> <span m="3503960">how</span> <span
  m="3504080">split</span> <span m="3504400">works.</span></p><p><span
  m="3506110">Now,</span> <span m="3507700">I</span> <span
  m="3507840">want</span> <span m="3508110">to</span> <span
  m="3508170">say</span> <span m="3508480">that</span> <span
  m="3508600">splitting--</span> <span m="3509920">I</span> <span
  m="3510030">want</span> <span m="3510210">to</span> <span
  m="3510270">charge</span> <span m="3510680">the</span> <span
  m="3510760">splitting</span> <span m="3511170">to</span> <span
  m="3511310">something,</span> <span m="3512670">intuitively.</span> <span
  m="3518070">Let's</span> <span m="3518570">say</span> <span
  m="3518830">y</span> <span m="3519110">was</span> <span m="3519310">the</span>
  <span m="3519390">key</span> <span m="3519580">that</span> <span
  m="3519690">was</span> <span m="3519810">inserted,</span> <span
  m="3520680">so</span> <span m="3520860">we</span> <span
  m="3520960">started</span> <span m="3521360">with</span> <span
  m="3521700">x</span> <span m="3522160">z,</span> <span
  m="3524920">which</span> <span m="3525070">was</span> <span
  m="3525170">a</span> <span m="3525220">3</span> <span m="3525500">node.</span>
  <span m="3526650">When</span> <span m="3526810">we</span> <span
  m="3526920">did</span> <span m="3527160">an</span> <span
  m="3527260">insert,</span> <span m="3529310">it</span> <span
  m="3529500">became</span> <span m="3529840">a</span> <span
  m="3529880">4</span> <span m="3530150">node,</span> <span
  m="3531380">and</span> <span m="3531590">then</span> <span
  m="3532980">we</span> <span m="3533170">did</span> <span m="3533310">a</span>
  <span m="3533340">split,</span> <span m="3534600">which</span> <span
  m="3534990">left</span> <span m="3535340">us</span> <span
  m="3535530">with</span> <span m="3537770">two</span> <span
  m="3537985">2</span> <span m="3538200">nodes</span> <span
  m="3539430">and</span> <span m="3539610">something.</span> <span
  m="3543510">So</span> <span m="3544160">what</span> <span
  m="3544330">can</span> <span m="3544450">you</span> <span
  m="3544540">say</span> <span m="3544790">overall</span> <span
  m="3545130">about</span> <span m="3545360">this</span> <span
  m="3545510">process?</span></p><p><span m="3548440">What's</span> <span
  m="3548680">making</span> <span m="3548980">this</span> <span
  m="3549140">example</span> <span m="3549620">bad?</span> <span
  m="3549940">What's</span> <span m="3550160">making</span> <span
  m="3550460">the</span> <span m="3550530">split</span> <span
  m="3550870">happen,</span> <span m="3551310">in</span> <span
  m="3551420">some</span> <span m="3551610">sense?</span> <span
  m="3552510">I</span> <span m="3552560">mean,</span> <span
  m="3552720">the</span> <span m="3552810">insert</span> <span
  m="3553220">is</span> <span m="3553320">one</span> <span
  m="3553530">thing,</span> <span m="3554840">but</span> <span
  m="3555580">there's</span> <span m="3555700">another</span> <span
  m="3555980">thing</span> <span m="3556170">we</span> <span
  m="3556250">can</span> <span m="3556380">charge</span> <span
  m="3556710">to.</span> <span m="3559340">Insert's</span> <span
  m="3559700">not</span> <span m="3559850">enough,</span> <span
  m="3560090">because</span> <span m="3560270">we're</span> <span
  m="3560340">going</span> <span m="3560470">to</span> <span
  m="3560540">do</span> <span m="3560680">log</span> <span m="3560930">n</span>
  <span m="3561070">splits,</span> <span m="3561580">and</span> <span
  m="3561800">we</span> <span m="3561870">can</span> <span
  m="3561990">only</span> <span m="3562180">charge</span> <span
  m="3562610">to</span> <span m="3562850">the</span> <span
  m="3562960">insert</span> <span m="3563140">once</span> <span
  m="3563490">if</span> <span m="3563610">we</span> <span
  m="3563680">want</span> <span m="3563870">constant</span> <span
  m="3564270">amortized</span> <span m="3564700">bound.</span> <span
  m="3576150">Yeah?</span></p><p><span m="3577100">AUDIENCE: Number</span> <span
  m="3577575">of</span> <span m="3577733">3</span> <span
  m="3577891">nodes?</span></p><p><span m="3578050">ERIK DEMAINE: Number</span>
  <span m="3578370">of</span> <span m="3578450">3</span> <span
  m="3578670">nodes,</span> <span m="3579110">exactly.</span> <span
  m="3580040">That's</span> <span m="3580330">a</span> <span
  m="3580380">good</span> <span m="3580570">potential</span> <span
  m="3580950">function,</span> <span m="3586760">because</span> <span
  m="3587530">on</span> <span m="3587670">the</span> <span
  m="3587740">left</span> <span m="3588000">side</span> <span
  m="3588190">of</span> <span m="3588260">this</span> <span
  m="3588400">picture,</span> <span m="3588740">we</span> <span
  m="3588880">had</span> <span m="3589130">one</span> <span m="3589340">3</span>
  <span m="3589570">node.</span> <span m="3590370">On</span> <span
  m="3590500">the</span> <span m="3590580">right</span> <span
  m="3590770">side</span> <span m="3590910">of</span> <span
  m="3590970">the</span> <span m="3591030">picture,</span> <span
  m="3591410">we</span> <span m="3591510">had</span> <span
  m="3591570">two</span> <span m="3591775">2</span> <span
  m="3591980">nodes.</span> <span m="3592330">Now,</span> <span
  m="3592770">what's</span> <span m="3592950">happening</span> <span
  m="3593290">to</span> <span m="3593390">the</span> <span
  m="3593470">parent?</span> <span m="3593840">We'll</span> <span
  m="3593950">have</span> <span m="3594060">to</span> <span
  m="3594140">worry</span> <span m="3594310">about</span> <span
  m="3594580">that</span> <span m="3594750">in</span> <span m="3594820">a</span>
  <span m="3594860">moment,</span> <span m="3595730">but</span> <span
  m="3596500">you've</span> <span m="3596650">got</span> <span
  m="3596860">the</span> <span m="3596930">intuition.</span> <span
  m="3599970">Number</span> <span m="3600450">of</span> <span
  m="3600930">3</span> <span m="3601410">nodes.</span></p><p><span
  m="3617870">I</span> <span m="3618050">looked</span> <span
  m="3618280">at</span> <span m="3618350">just</span> <span m="3618570">a</span>
  <span m="3618610">single</span> <span m="3618980">operation</span> <span
  m="3619490">here,</span> <span m="3619680">but</span> <span
  m="3619800">if</span> <span m="3619910">you</span> <span
  m="3620010">look</span> <span m="3620370">more</span> <span
  m="3620510">generally</span> <span m="3620930">about</span> <span
  m="3621820">an</span> <span m="3621960">expensive</span> <span
  m="3622570">insert,</span> <span m="3623100">in</span> <span
  m="3623270">that</span> <span m="3623380">it</span> <span
  m="3623470">does</span> <span m="3623680">many</span> <span
  m="3624010">splits,</span> <span m="3626370">the</span> <span
  m="3626520">only</span> <span m="3626750">way</span> <span
  m="3626910">that</span> <span m="3627070">can</span> <span
  m="3627190">happen</span> <span m="3627970">is</span> <span
  m="3628130">if</span> <span m="3628240">you</span> <span
  m="3628360">had</span> <span m="3628670">a</span> <span
  m="3628790">chain</span> <span m="3629890">of</span> <span
  m="3630090">3</span> <span m="3630320">nodes</span> <span
  m="3631960">all</span> <span m="3632240">connected</span> <span
  m="3632690">to</span> <span m="3632810">each</span> <span
  m="3632990">other</span> <span m="3636950">and</span> <span
  m="3637170">you</span> <span m="3637260">do</span> <span m="3637380">an</span>
  <span m="3637460">insert</span> <span m="3637830">down</span> <span
  m="3638080">here.</span> <span m="3638490">This</span> <span
  m="3638720">one</span> <span m="3638870">splits,</span> <span
  m="3639320">then</span> <span m="3639520">this</span> <span
  m="3639690">one</span> <span m="3639820">splits,</span> <span
  m="3640200">then</span> <span m="3640400">this</span> <span
  m="3640540">one</span> <span m="3640670">splits.</span> <span
  m="3641830">So</span> <span m="3642020">there</span> <span
  m="3642140">are</span> <span m="3642240">all</span> <span
  m="3642640">these</span> <span m="3642910">3</span> <span
  m="3643100">nodes</span> <span m="3644130">just</span> <span
  m="3644350">hanging</span> <span m="3644620">around,</span> <span
  m="3645440">and</span> <span m="3645690">after</span> <span
  m="3646080">you</span> <span m="3646210">do</span> <span
  m="3646350">the</span> <span m="3646450">split,</span> <span
  m="3649050">the</span> <span m="3649200">parent</span> <span
  m="3649740">of</span> <span m="3649860">the</span> <span
  m="3649930">very</span> <span m="3650170">last</span> <span
  m="3650510">node</span> <span m="3650660">that</span> <span
  m="3650810">splits,</span> <span m="3651670">that</span> <span
  m="3651930">might</span> <span m="3652420">become</span> <span
  m="3653000">a</span> <span m="3653080">3</span> <span m="3653330">node.</span>
  <span m="3653770">So</span> <span m="3653890">that</span> <span
  m="3654020">will</span> <span m="3654110">be</span> <span
  m="3654270">up</span> <span m="3654430">here</span> <span
  m="3654710">somewhere.</span> <span m="3655540">You</span> <span
  m="3655650">might</span> <span m="3655800">have</span> <span
  m="3655890">made</span> <span m="3656090">one</span> <span
  m="3656460">new</span> <span m="3656580">3</span> <span
  m="3656810">node,</span> <span m="3657660">but</span> <span
  m="3657840">then</span> <span m="3658160">this</span> <span
  m="3658340">one</span> <span m="3659210">is</span> <span m="3659370">a</span>
  <span m="3659630">couple</span> <span m="3659940">of</span> <span
  m="3660040">2</span> <span m="3660190">nodes,</span> <span
  m="3661010">this</span> <span m="3661300">becomes</span> <span
  m="3661670">a</span> <span m="3661720">couple</span> <span
  m="3662010">of</span> <span m="3662110">2</span> <span
  m="3662300">nodes,</span> <span m="3663130">and</span> <span
  m="3663410">this</span> <span m="3663560">becomes</span> <span
  m="3663890">a</span> <span m="3663920">couple</span> <span
  m="3664180">of</span> <span m="3664270">2</span> <span
  m="3664440">nodes.</span> <span m="3665420">So</span> <span
  m="3665550">if</span> <span m="3665620">you</span> <span
  m="3665710">had</span> <span m="3666495">k</span> <span m="3666900">3</span>
  <span m="3667100">nodes</span> <span m="3667390">before,</span> <span
  m="3668590">afterwards</span> <span m="3669810">you</span> <span
  m="3669960">have</span> <span m="3670570">one.</span> <span
  m="3674680">Sound</span> <span m="3674950">familiar?</span></p><p><span
  m="3676540">This</span> <span m="3676760">is</span> <span
  m="3676940">actually</span> <span m="3677210">exactly</span> <span
  m="3677690">what's</span> <span m="3677870">going</span> <span
  m="3678150">on</span> <span m="3678240">with</span> <span
  m="3678350">the</span> <span m="3678410">binary</span> <span
  m="3678720">counter,</span> <span m="3679310">so</span> <span
  m="3679460">this</span> <span m="3679600">may</span> <span
  m="3679780">seem</span> <span m="3680000">like</span> <span
  m="3680170">a</span> <span m="3680220">toy</span> <span
  m="3680850">example,</span> <span m="3681820">but</span> <span
  m="3683510">over</span> <span m="3683710">here</span> <span
  m="3683900">we</span> <span m="3684000">created,</span> <span
  m="3684510">at</span> <span m="3684670">most,</span> <span
  m="3684940">one</span> <span m="3685240">1</span> <span
  m="3685520">bit.</span> <span m="3686730">Down</span> <span
  m="3687060">here</span> <span m="3688360">we</span> <span
  m="3688590">create,</span> <span m="3689560">at</span> <span
  m="3689730">most,</span> <span m="3690020">one</span> <span
  m="3690200">3</span> <span m="3690460">node,</span> <span
  m="3692890">which</span> <span m="3693090">is</span> <span
  m="3693190">when</span> <span m="3693320">the</span> <span
  m="3693390">split</span> <span m="3693700">stops.</span> <span
  m="3694390">When</span> <span m="3694530">the</span> <span
  m="3694590">split</span> <span m="3694840">stops,</span> <span
  m="3695180">that's</span> <span m="3695360">the</span> <span
  m="3695520">only</span> <span m="3695810">time</span> <span
  m="3696050">we</span> <span m="3696140">actually</span> <span
  m="3696490">insert</span> <span m="3697160">a</span> <span
  m="3697300">key</span> <span m="3697440">into</span> <span
  m="3698040">a</span> <span m="3698080">node</span> <span
  m="3698290">and</span> <span m="3698680">it</span> <span
  m="3698770">doesn't</span> <span m="3699060">split,</span> <span
  m="3699910">because</span> <span m="3700140">otherwise</span> <span
  m="3700610">you</span> <span m="3700700">split.</span> <span
  m="3701460">When</span> <span m="3701610">you</span> <span
  m="3701690">split,</span> <span m="3702090">you're</span> <span
  m="3702330">always</span> <span m="3702600">making</span> <span
  m="3702910">two</span> <span m="3703100">nodes,</span> <span
  m="3704140">and</span> <span m="3704440">that's</span> <span
  m="3704670">good.</span></p><p><span m="3705860">At</span> <span
  m="3706000">the</span> <span m="3706070">very</span> <span
  m="3706330">end</span> <span m="3706460">when</span> <span
  m="3706550">you</span> <span m="3706620">stop</span> <span
  m="3706880">splitting,</span> <span m="3707210">you</span> <span
  m="3707290">might</span> <span m="3707460">have</span> <span
  m="3707550">made</span> <span m="3707710">one</span> <span
  m="3707990">3</span> <span m="3708200">node.</span> <span
  m="3709320">So</span> <span m="3710726">in</span> <span m="3711220">an</span>
  <span m="3711530">insert,</span> <span m="3715480">let's</span> <span
  m="3715720">say</span> <span m="3716280">the</span> <span
  m="3716710">number</span> <span m="3717070">of</span> <span
  m="3717160">splits</span> <span m="3720410">equals</span> <span
  m="3720770">k,</span> <span m="3722240">then</span> <span
  m="3722510">the</span> <span m="3722590">change</span> <span
  m="3723010">of</span> <span m="3723080">potential</span> <span
  m="3724390">for</span> <span m="3724540">that</span> <span
  m="3724720">operation</span> <span m="3725930">is</span> <span
  m="3730070">minus</span> <span m="3730560">k</span> <span
  m="3731460">plus</span> <span m="3731990">1,</span> <span
  m="3733690">because</span> <span m="3734550">for</span> <span
  m="3734710">every</span> <span m="3734920">split</span> <span
  m="3735600">there</span> <span m="3735730">was</span> <span
  m="3735870">a</span> <span m="3735920">3</span> <span m="3736160">node</span>
  <span m="3736390">to</span> <span m="3736470">charge</span> <span
  m="3736880">to--</span> <span m="3737470">or</span> <span
  m="3737760">for</span> <span m="3738350">every</span> <span
  m="3738550">split</span> <span m="3738900">there</span> <span
  m="3738990">was</span> <span m="3739140">a</span> <span m="3739180">3</span>
  <span m="3739370">node</span> <span m="3740070">that</span> <span
  m="3740210">became</span> <span m="3740550">two</span> <span
  m="3740710">nodes,</span> <span m="3741980">two</span> <span
  m="3742240">2</span> <span m="3742430">nodes.</span> <span
  m="3743690">So</span> <span m="3743940">the</span> <span
  m="3744020">potential</span> <span m="3744360">went</span> <span
  m="3744500">down</span> <span m="3744680">by</span> <span
  m="3744800">one,</span> <span m="3745040">because</span> <span
  m="3745200">you</span> <span m="3745260">used</span> <span
  m="3745410">to</span> <span m="3745470">have</span> <span
  m="3745580">one</span> <span m="3745740">3</span> <span
  m="3745910">node,</span> <span m="3746140">then</span> <span
  m="3746270">you</span> <span m="3746360">had</span> <span
  m="3746520">0.</span> <span m="3747490">At</span> <span m="3747670">the</span>
  <span m="3747730">very</span> <span m="3747980">end,</span> <span
  m="3748210">you</span> <span m="3748290">might</span> <span
  m="3748450">create</span> <span m="3748700">one</span> <span
  m="3748900">3</span> <span m="3749090">node.</span> <span
  m="3749290">That's</span> <span m="3749540">the</span> <span
  m="3749620">plus</span> <span m="3750020">1.</span></p><p><span
  m="3751840">So</span> <span m="3752450">the</span> <span
  m="3752560">amortized</span> <span m="3752960">cost</span> <span
  m="3753360">is</span> <span m="3753480">just</span> <span
  m="3753650">the</span> <span m="3753720">sum</span> <span
  m="3753950">of</span> <span m="3754040">these</span> <span
  m="3754220">two</span> <span m="3754330">things,</span> <span
  m="3755390">and</span> <span m="3755640">we</span> <span
  m="3755710">get</span> <span m="3755890">1.</span> <span
  m="3761920">That's</span> <span m="3762550">k</span> <span
  m="3763160">minus</span> <span m="3763570">k</span> <span
  m="3764400">plus</span> <span m="3764780">1</span> <span
  m="3765241">which</span> <span m="3765702">is</span> <span
  m="3765932">1.</span> <span m="3768930">Cool,</span> <span
  m="3769340">huh?</span> <span m="3770260">This</span> <span
  m="3770470">is</span> <span m="3770600">where</span> <span
  m="3770950">a</span> <span m="3771020">potential</span> <span
  m="3771400">method</span> <span m="3771710">becomes</span> <span
  m="3773040">powerful,</span> <span m="3773620">I</span> <span
  m="3773700">would</span> <span m="3773820">say.</span> <span
  m="3774070">You</span> <span m="3774160">can</span> <span
  m="3774570">view</span> <span m="3774790">this</span> <span
  m="3775840">as</span> <span m="3776890">a</span> <span m="3777120">kind</span>
  <span m="3777370">of</span> <span m="3777450">charging</span> <span
  m="3777830">argument,</span> <span m="3778190">but</span> <span
  m="3778310">it</span> <span m="3778380">gets</span> <span
  m="3778590">very</span> <span m="3779000">confusing.</span> <span
  m="3780070">Maybe</span> <span m="3780340">with</span> <span
  m="3780520">coins</span> <span m="3781280">is</span> <span
  m="3781430">the</span> <span m="3781510">most</span> <span
  m="3781750">plausible</span> <span m="3782140">use.</span> <span
  m="3782310">Essentially,</span> <span m="3783040">the</span> <span
  m="3783140">invariance</span> <span m="3783590">you'd</span> <span
  m="3783680">want</span> <span m="3784010">is</span> <span
  m="3784140">that</span> <span m="3784190">you</span> <span
  m="3784240">have</span> <span m="3784330">a</span> <span
  m="3784370">coin</span> <span m="3784760">on</span> <span
  m="3784890">every</span> <span m="3785090">3</span> <span
  m="3785310">node.</span></p><p><span m="3786320">Same</span> <span
  m="3786680">thing,</span> <span m="3786940">of</span> <span
  m="3787050">course,</span> <span m="3787470">but</span> <span
  m="3787730">it's</span> <span m="3788330">I</span> <span
  m="3788460">think</span> <span m="3788730">easier</span> <span
  m="3788930">to</span> <span m="3789000">think</span> <span
  m="3789190">about</span> <span m="3789430">it</span> <span
  m="3789540">this</span> <span m="3789730">way.</span> <span
  m="3790030">Say,</span> <span m="3790190">well,</span> <span
  m="3790470">3</span> <span m="3790690">nodes</span> <span
  m="3790920">seem</span> <span m="3791110">to</span> <span
  m="3791180">be</span> <span m="3791280">the</span> <span
  m="3791380">bad</span> <span m="3791660">thing.</span> <span
  m="3792390">Let's</span> <span m="3792440">just</span> <span
  m="3792600">count</span> <span m="3792870">them,</span> <span
  m="3793130">let's</span> <span m="3793190">just</span> <span
  m="3793360">see</span> <span m="3793480">what</span> <span
  m="3793640">happens.</span> <span m="3795390">It's</span> <span
  m="3795530">more</span> <span m="3795680">like</span> <span
  m="3795880">you</span> <span m="3795960">say</span> <span m="3796170">I</span>
  <span m="3796240">want</span> <span m="3796570">to</span> <span
  m="3796660">have</span> <span m="3796800">this</span> <span
  m="3796940">invariant</span> <span m="3797290">that</span> <span
  m="3797390">there's</span> <span m="3797540">a</span> <span
  m="3797590">coin</span> <span m="3797810">on</span> <span
  m="3797920">every</span> <span m="3798100">3</span> <span
  m="3798290">node.</span> <span m="3798770">How</span> <span
  m="3799350">can</span> <span m="3799510">I</span> <span
  m="3799570">achieve</span> <span m="3799880">that?</span> <span
  m="3801480">And</span> <span m="3801690">it</span> <span
  m="3801770">just</span> <span m="3801920">works</span> <span
  m="3802690">magically,</span> <span m="3803560">because</span> <span
  m="3804540">A,</span> <span m="3804810">it</span> <span
  m="3805100">helps</span> <span m="3805330">it</span> <span
  m="3805420">was</span> <span m="3805550">true</span> <span
  m="3806170">and,</span> <span m="3806390">B,</span> <span
  m="3806840">we</span> <span m="3806910">had</span> <span m="3806980">to</span>
  <span m="3807050">come</span> <span m="3807260">up</span> <span
  m="3807400">with</span> <span m="3807530">the</span> <span
  m="3807580">right</span> <span m="3807715">potential</span> <span
  m="3808120">function.</span> <span m="3808560">And</span> <span
  m="3808880">those</span> <span m="3809090">are</span> <span
  m="3809150">tricky</span> <span m="3809620">and,</span> <span
  m="3809760">in</span> <span m="3809840">general</span> <span
  m="3810130">with</span> <span m="3810210">amortization,</span> <span
  m="3810830">unless</span> <span m="3811160">you're</span> <span
  m="3811300">told</span> <span m="3811660">on</span> <span m="3811740">a</span>
  <span m="3811790">p</span> <span m="3812000">set</span> <span
  m="3812210">prove</span> <span m="3813220">order</span> <span
  m="3813530">t</span> <span m="3813880">amortize,</span> <span
  m="3815150">you</span> <span m="3815310">don't</span> <span
  m="3815460">always</span> <span m="3815640">know</span> <span
  m="3815760">what</span> <span m="3815900">the</span> <span
  m="3815990">right</span> <span m="3816260">running</span> <span
  m="3816510">time</span> <span m="3816720">is,</span> <span
  m="3816850">and</span> <span m="3816940">you</span> <span
  m="3817000">just</span> <span m="3817340">have</span> <span
  m="3817440">to</span> <span m="3817540">experiment.</span></p><p><span
  m="3822190">Our</span> <span m="3822330">final</span> <span
  m="3822670">example,</span> <span m="3825330">most</span> <span
  m="3825650">impressive.</span> <span m="3827130">Let's</span> <span
  m="3827570">go</span> <span m="3827790">over</span> <span
  m="3828010">here.</span> <span m="3832430">It's</span> <span
  m="3832530">a</span> <span m="3832580">surprise,</span> <span
  m="3833150">I</span> <span m="3833230">guess.</span> <span
  m="3833450">It's</span> <span m="3833570">not</span> <span
  m="3833730">even</span> <span m="3833950">on</span> <span
  m="3834170">the</span> <span m="3834240">list.</span> <span
  m="3837610">I</span> <span m="3837710">want</span> <span m="3837930">to</span>
  <span m="3837990">do--</span> <span m="3847070">this</span> <span
  m="3847260">is</span> <span m="3847390">great</span> <span
  m="3847620">for</span> <span m="3847760">inserts,</span> <span
  m="3848320">but</span> <span m="3848450">what</span> <span
  m="3848600">about</span> <span m="3848840">deletes?</span> <span
  m="3849450">I</span> <span m="3849610">want</span> <span m="3849780">to</span>
  <span m="3849840">do</span> <span m="3849970">inserts</span> <span
  m="3850430">and</span> <span m="3850530">deletes.</span> <span
  m="3861810">I'd</span> <span m="3862030">like</span> <span
  m="3862310">to</span> <span m="3862420">do</span> <span m="3862590">2-3</span>
  <span m="3863010">trees,</span> <span m="3865640">but</span> <span
  m="3865860">2-3</span> <span m="3866190">trees</span> <span
  m="3866730">don't</span> <span m="3866980">work.</span> <span
  m="3867860">If</span> <span m="3868070">I</span> <span m="3868150">want</span>
  <span m="3868320">to</span> <span m="3868380">get</span> <span
  m="3868480">a</span> <span m="3868520">constant</span> <span
  m="3869000">amortized</span> <span m="3869510">bound</span> <span
  m="3869810">for</span> <span m="3869920">inserts</span> <span
  m="3870320">and</span> <span m="3870430">deletes,</span> <span
  m="3871560">I've</span> <span m="3871690">got</span> <span
  m="3871830">to</span> <span m="3871860">constant</span> <span
  m="3872170">advertised</span> <span m="3872570">here</span> <span
  m="3872690">for</span> <span m="3872840">inserts--</span> <span
  m="3874390">I</span> <span m="3874680">should</span> <span
  m="3874830">be</span> <span m="3874910">clear.</span> <span
  m="3875590">I'm</span> <span m="3875760">ignoring</span> <span
  m="3876190">the</span> <span m="3876270">cost</span> <span
  m="3876630">of</span> <span m="3876710">searching.</span> <span
  m="3877240">Let's</span> <span m="3877390">just</span> <span
  m="3877570">say</span> <span m="3877760">searching</span> <span
  m="3878220">is</span> <span m="3878370">cheap</span> <span
  m="3878660">for</span> <span m="3878810">some</span> <span
  m="3879000">reason.</span> <span m="3879340">Maybe</span> <span
  m="3879580">you</span> <span m="3879690">already</span> <span
  m="3880090">know</span> <span m="3880240">where</span> <span
  m="3880340">your</span> <span m="3880450">key</span> <span
  m="3880700">is,</span> <span m="3881300">and</span> <span
  m="3881390">you</span> <span m="3881460">just</span> <span
  m="3881650">want</span> <span m="3881780">to</span> <span
  m="3881840">insert</span> <span m="3882230">there.</span> <span
  m="3883460">Then</span> <span m="3884000">insert</span> <span
  m="3884430">only</span> <span m="3884640">costs</span> <span
  m="3885070">constant</span> <span m="3885390">amortize</span> <span
  m="3885840">in</span> <span m="3885985">a</span> <span m="3886130">2-3</span>
  <span m="3886330">tree.</span></p><p><span m="3887420">Insert</span> <span
  m="3887750">and</span> <span m="3887860">delete</span> <span
  m="3889180">is</span> <span m="3889730">not</span> <span
  m="3890100">that</span> <span m="3890310">good.</span> <span
  m="3890960">It</span> <span m="3891100">can</span> <span m="3891220">be</span>
  <span m="3891330">log</span> <span m="3891540">n</span> <span
  m="3892400">for</span> <span m="3892640">every</span> <span
  m="3892920">operation</span> <span m="3893470">if</span> <span
  m="3893590">I</span> <span m="3893660">do</span> <span
  m="3893770">inserts</span> <span m="3894160">and</span> <span
  m="3894260">deletes,</span> <span m="3895720">essentially</span> <span
  m="3896170">for</span> <span m="3896310">the</span> <span
  m="3896400">same</span> <span m="3896750">reason</span> <span
  m="3897160">that</span> <span m="3897330">a</span> <span
  m="3897370">binary</span> <span m="3897720">counter</span> <span
  m="3898630">can</span> <span m="3898850">be</span> <span m="3899670">n</span>
  <span m="3900130">for</span> <span m="3900350">every</span> <span
  m="3901340">operation</span> <span m="3901940">if</span> <span
  m="3902050">I</span> <span m="3902130">do</span> <span
  m="3902720">increments</span> <span m="3903250">and</span> <span
  m="3903530">decrements.</span> <span m="3904880">I</span> <span
  m="3905010">could</span> <span m="3905150">be</span> <span
  m="3905250">here,</span> <span m="3906070">increment</span> <span
  m="3906850">a</span> <span m="3906950">couple</span> <span
  m="3907220">times,</span> <span m="3908120">and</span> <span
  m="3908310">then</span> <span m="3908450">I</span> <span
  m="3908550">change</span> <span m="3908820">a</span> <span
  m="3908860">huge</span> <span m="3909170">number</span> <span
  m="3909380">of</span> <span m="3909450">bits.</span> <span
  m="3909790">If</span> <span m="3909890">I</span> <span
  m="3909900">immediately</span> <span m="3910360">decrement,</span> <span
  m="3911210">then</span> <span m="3911340">all</span> <span
  m="3911470">the</span> <span m="3911540">bits</span> <span
  m="3911740">go</span> <span m="3911870">back.</span> <span
  m="3912740">In</span> <span m="3912850">increment,</span> <span
  m="3913230">all</span> <span m="3913360">the</span> <span
  m="3913430">bits</span> <span m="3913630">go</span> <span
  m="3913740">back.</span> <span m="3914310">Decrement,</span> <span
  m="3914500">all</span> <span m="3914620">the</span> <span
  m="3914680">bits</span> <span m="3914870">go</span> <span
  m="3914980">back.</span> <span m="3915500">So</span> <span
  m="3915680">I'm</span> <span m="3915780">changing</span> <span
  m="3916170">end</span> <span m="3916360">bits</span> <span
  m="3916530">in</span> <span m="3916610">every</span> <span
  m="3916820">operation.</span></p><p><span m="3917840">In</span> <span
  m="3918010">the</span> <span m="3918080">same</span> <span
  m="3918390">way,</span> <span m="3918620">if</span> <span
  m="3919540">you</span> <span m="3919620">just</span> <span
  m="3919850">think</span> <span m="3920080">of</span> <span
  m="3920220">one</span> <span m="3920690">path</span> <span
  m="3921180">of</span> <span m="3921300">your</span> <span
  m="3921430">tree,</span> <span m="3922630">and</span> <span
  m="3922860">you</span> <span m="3922950">think</span> <span
  m="3923220">of</span> <span m="3923410">the</span> <span m="3923670">0</span>
  <span m="3924090">bits</span> <span m="3924490">as</span> <span
  m="3924780">2</span> <span m="3924980">nodes</span> <span
  m="3925740">and</span> <span m="3925950">the</span> <span m="3926010">1</span>
  <span m="3926260">bits</span> <span m="3926500">as</span> <span
  m="3926640">3</span> <span m="3926850">nodes,</span> <span
  m="3928040">when</span> <span m="3928300">I</span> <span
  m="3928960">increment</span> <span m="3929710">by</span> <span
  m="3929850">inserting</span> <span m="3930350">at</span> <span
  m="3930460">the</span> <span m="3930530">bottom,</span> <span
  m="3931100">all</span> <span m="3931400">those</span> <span
  m="3931590">3s</span> <span m="3931880">turn</span> <span
  m="3932100">to</span> <span m="3932170">1,</span> <span
  m="3932460">except</span> <span m="3932790">the</span> <span
  m="3932860">top</span> <span m="3933220">I</span> <span
  m="3933270">make</span> <span m="3933520">a</span> <span m="3933570">3.</span>
  <span m="3933980">That's</span> <span m="3934110">just</span> <span
  m="3934340">like</span> <span m="3934500">a</span> <span
  m="3934550">binary</span> <span m="3934890">counter.</span> <span
  m="3935400">It</span> <span m="3935650">went</span> <span
  m="3935860">from</span> <span m="3935980">all</span> <span
  m="3936200">1s</span> <span m="3936590">to</span> <span m="3937110">1</span>
  <span m="3937690">0</span> <span m="3937870">0</span> <span
  m="3938030">0</span> <span m="3938200">0</span> <span m="3938390">0,</span>
  <span m="3940150">and</span> <span m="3940370">then</span> <span
  m="3940800">if</span> <span m="3941000">I</span> <span
  m="3941090">decrement,</span> <span m="3941550">if</span> <span
  m="3941640">I</span> <span m="3941720">delete</span> <span
  m="3942140">from</span> <span m="3942390">that</span> <span
  m="3942590">very</span> <span m="3942810">same</span> <span
  m="3943090">leaf,</span> <span m="3944090">then</span> <span
  m="3944340">I'm</span> <span m="3944410">going</span> <span
  m="3944530">to</span> <span m="3944600">have</span> <span
  m="3944780">to</span> <span m="3944890">do</span> <span
  m="3945040">merges</span> <span m="3945630">all</span> <span
  m="3945860">the</span> <span m="3945940">way</span> <span
  m="3946110">back</span> <span m="3946400">up</span> <span
  m="3946640">and</span> <span m="3946760">turn</span> <span
  m="3946970">those</span> <span m="3947110">all</span> <span
  m="3947230">back</span> <span m="3947440">into</span> <span
  m="3947570">3</span> <span m="3947780">nodes</span> <span
  m="3948020">again.</span> <span m="3948720">And</span> <span
  m="3948860">so</span> <span m="3949000">every</span> <span
  m="3949290">operation</span> <span m="3949720">is</span> <span
  m="3949780">going</span> <span m="3949910">to</span> <span
  m="3949980">pay</span> <span m="3950140">log</span> <span
  m="3950390">n.</span> <span m="3950860">Log n's,</span> <span
  m="3951200">not</span> <span m="3951360">so</span> <span
  m="3951520">bad,</span> <span m="3952090">but</span> <span
  m="3952280">I</span> <span m="3952390">really</span> <span
  m="3952670">want</span> <span m="3952910">constant.</span></p><p><span
  m="3954810">So</span> <span m="3955950">I'm</span> <span
  m="3956180">going</span> <span m="3956430">to</span> <span
  m="3956620">introduce</span> <span m="3957300">something</span> <span
  m="3957710">new</span> <span m="3958540">called</span> <span
  m="3959170">2-5</span> <span m="3959830">trees,</span> <span
  m="3963440">and</span> <span m="3964180">it's</span> <span
  m="3964370">going</span> <span m="3964490">to</span> <span
  m="3964560">be</span> <span m="3964640">exactly</span> <span
  m="3965190">like</span> <span m="3965430">b</span> <span
  m="3965560">trees</span> <span m="3966280">that</span> <span
  m="3966420">you</span> <span m="3966530">learned,</span> <span
  m="3966900">except</span> <span m="3967230">now</span> <span
  m="3968240">the</span> <span m="3968300">number</span> <span
  m="3968590">of</span> <span m="3968700">children</span> <span
  m="3969260">of</span> <span m="3969400">every</span> <span
  m="3969640">node</span> <span m="3972140">should</span> <span
  m="3972400">be</span> <span m="3972580">between</span> <span
  m="3973740">2</span> <span m="3974020">and</span> <span m="3974160">5.</span>
  <span m="3977950">All</span> <span m="3978230">the</span> <span
  m="3978340">operations</span> <span m="3978860">are</span> <span
  m="3978920">defined</span> <span m="3979270">the</span> <span
  m="3979330">same.</span> <span m="3980730">We've</span> <span
  m="3981030">already</span> <span m="3981220">talked</span> <span
  m="3981460">about</span> <span m="3981670">insert.</span> <span
  m="3982720">Now</span> <span m="3982980">insert--</span> <span
  m="3983610">when</span> <span m="3983890">you</span> <span
  m="3983990">have</span> <span m="3984720">six</span> <span
  m="3985080">children,</span> <span m="3985440">then</span> <span
  m="3985640">you're</span> <span m="3985910">overflowing,</span> <span
  m="3986880">and</span> <span m="3987060">then</span> <span
  m="3987200">you're</span> <span m="3987290">going</span> <span
  m="3987410">to</span> <span m="3987480">split</span> <span
  m="3987730">in</span> <span m="3987830">half</span> <span
  m="3988270">and</span> <span m="3988400">so</span> <span
  m="3988550">on.</span></p><p><span m="3988920">So</span> <span
  m="3989120">actually</span> <span m="3989440">I</span> <span
  m="3989500">should</span> <span m="3989670">draw</span> <span
  m="3989850">that</span> <span m="3990000">picture,</span> <span
  m="3990290">because</span> <span m="3990500">we're</span> <span
  m="3990600">going</span> <span m="3990730">to</span> <span
  m="3990790">need</span> <span m="3991000">it.</span> <span
  m="3992410">So</span> <span m="3992510">if</span> <span m="3992770">I</span>
  <span m="3992860">started</span> <span m="3993440">with</span> <span
  m="3994260">a</span> <span m="3994430">5</span> <span m="3994950">node,</span>
  <span m="3995330">which</span> <span m="3995590">means</span> <span
  m="3995810">it</span> <span m="3995930">has</span> <span
  m="3996760">four</span> <span m="3997140">keys,</span> <span
  m="3999340">and</span> <span m="3999490">then</span> <span
  m="3999600">I</span> <span m="3999660">insert</span> <span
  m="4000130">into</span> <span m="4000410">it,</span> <span
  m="4000680">I</span> <span m="4000810">get</span> <span m="4001080">a</span>
  <span m="4001320">6</span> <span m="4001780">node.</span> <span
  m="4007460">That's</span> <span m="4007950">too</span> <span
  m="4008170">many.</span> <span m="4011490">Six</span> <span
  m="4012080">children.</span> <span m="4015110">OK,</span> <span
  m="4015460">that's</span> <span m="4015870">too</span> <span
  m="4016030">much,</span> <span m="4016730">so</span> <span
  m="4016890">I'm</span> <span m="4016950">going</span> <span
  m="4017070">to</span> <span m="4017130">split</span> <span
  m="4017380">it</span> <span m="4017480">in</span> <span
  m="4017560">half,</span> <span m="4018800">which</span> <span
  m="4019020">is</span> <span m="4019150">going</span> <span
  m="4019380">to</span> <span m="4019510">leave</span> <span
  m="4022980">a</span> <span m="4023150">3</span> <span m="4023570">node</span>
  <span m="4025290">and</span> <span m="4025720">a</span> <span
  m="4025810">single</span> <span m="4026240">item,</span> <span
  m="4026520">which</span> <span m="4026700">gets</span> <span
  m="4026880">promoted</span> <span m="4027410">to</span> <span
  m="4027590">the</span> <span m="4027820">parent,</span> <span
  m="4029320">and</span> <span m="4030100">another</span> <span
  m="4032700">3</span> <span m="4033140">node.</span></p><p><span
  m="4034860">OK,</span> <span m="4035030">so</span> <span m="4035150">we</span>
  <span m="4035230">started</span> <span m="4035520">with</span> <span
  m="4035640">a</span> <span m="4035680">5</span> <span m="4036030">node,</span>
  <span m="4036790">and</span> <span m="4036930">the</span> <span
  m="4037000">result</span> <span m="4037470">was</span> <span
  m="4038165">two</span> <span m="4038530">3</span> <span
  m="4038770">nodes.</span> <span m="4039770">OK,</span> <span
  m="4039910">that</span> <span m="4040070">split,</span> <span
  m="4041500">and</span> <span m="4041700">we</span> <span
  m="4041800">also</span> <span m="4043140">contaminate</span> <span
  m="4043730">the</span> <span m="4043800">parent</span> <span
  m="4044080">a</span> <span m="4044120">little</span> <span
  m="4044310">bit,</span> <span m="4044580">but</span> <span
  m="4045200">that</span> <span m="4045380">may</span> <span
  m="4045490">lead</span> <span m="4045640">to</span> <span
  m="4045740">another</span> <span m="4045980">split,</span> <span
  m="4046290">which</span> <span m="4046430">will</span> <span
  m="4046530">look</span> <span m="4046670">like</span> <span
  m="4046820">this</span> <span m="4046990">again.</span> <span
  m="4048030">So</span> <span m="4048120">if</span> <span
  m="4048185">we're</span> <span m="4048250">just</span> <span
  m="4048420">doing</span> <span m="4048560">insertions,</span> <span
  m="4049010">fine,</span> <span m="4049240">we</span> <span
  m="4049300">just</span> <span m="4049450">count</span> <span
  m="4049620">the</span> <span m="4049680">number</span> <span
  m="4049870">of</span> <span m="4049940">5</span> <span
  m="4050072">nodes,</span> <span m="4050470">no</span> <span
  m="4051000">different,</span> <span m="4051400">right?</span> <span
  m="4052180">But</span> <span m="4052330">I</span> <span
  m="4052410">want</span> <span m="4052590">to</span> <span
  m="4052650">do</span> <span m="4052800">simultaneously</span> <span
  m="4053540">insert</span> <span m="4053900">and</span> <span
  m="4054080">delete.</span></p><p><span m="4056250">So</span> <span
  m="4057620">let's</span> <span m="4057900">remember</span> <span
  m="4058280">what</span> <span m="4058450">happens</span> <span
  m="4059030">with</span> <span m="4059820">a</span> <span
  m="4059900">delete.</span> <span m="4062470">So</span> <span
  m="4062650">if</span> <span m="4062740">you</span> <span
  m="4062850">just</span> <span m="4063040">delete</span> <span
  m="4063340">a</span> <span m="4063380">key</span> <span m="4063900">and</span>
  <span m="4064220">a</span> <span m="4064357">leaf,</span> <span
  m="4065530">the</span> <span m="4065670">issue</span> <span
  m="4065930">is</span> <span m="4066110">it</span> <span m="4066220">may</span>
  <span m="4066390">become</span> <span m="4066900">too</span> <span
  m="4067270">empty.</span> <span m="4069160">So</span> <span
  m="4071960">what's</span> <span m="4072260">too</span> <span
  m="4072480">empty?</span> <span m="4073020">Well,</span> <span
  m="4074550">the</span> <span m="4074650">minimum</span> <span
  m="4074960">number</span> <span m="4075160">of</span> <span
  m="4075220">children</span> <span m="4075530">we're</span> <span
  m="4075620">allowed</span> <span m="4075850">to</span> <span
  m="4075920">have</span> <span m="4076070">is</span> <span
  m="4076200">two,</span> <span m="4076620">so</span> <span
  m="4076850">too</span> <span m="4077080">empty</span> <span
  m="4077380">would</span> <span m="4077550">be</span> <span
  m="4077940">that</span> <span m="4078100">I</span> <span
  m="4078160">have</span> <span m="4078480">one</span> <span
  m="4078840">child.</span> <span m="4080300">So</span> <span
  m="4080550">maybe</span> <span m="4080810">initially</span> <span
  m="4081220">I</span> <span m="4081290">have</span> <span
  m="4081880">two</span> <span m="4082080">children,</span> <span
  m="4083660">and</span> <span m="4083710">I</span> <span
  m="4083770">have</span> <span m="4083950">a</span> <span
  m="4083990">single</span> <span m="4084330">key</span> <span
  m="4084640">x,</span> <span m="4085470">then</span> <span
  m="4085660">maybe</span> <span m="4085870">I</span> <span
  m="4085940">delete</span> <span m="4086310">x,</span> <span
  m="4087470">and</span> <span m="4087640">so</span> <span
  m="4087750">now</span> <span m="4087920">I</span> <span
  m="4088030">have</span> <span m="4089540">0</span> <span
  m="4089960">keys.</span> <span m="4091090">This</span> <span
  m="4091300">is</span> <span m="4091460">a</span> <span m="4091580">1</span>
  <span m="4091850">node.</span> <span m="4092720">It</span> <span
  m="4092780">has</span> <span m="4093100">a</span> <span
  m="4093370">single</span> <span m="4093750">child.</span> <span
  m="4095180">OK.</span> <span m="4096520">Weird.</span></p><p><span
  m="4098680">In</span> <span m="4098960">that</span> <span
  m="4099160">case,</span> <span m="4101990">there</span> <span
  m="4102040">are</span> <span m="4102090">sort</span> <span
  m="4102220">of</span> <span m="4102310">two</span> <span
  m="4102500">situations.</span> <span m="4103750">Maybe</span> <span
  m="4104120">your</span> <span m="4104279">sibling</span> <span
  m="4104779">has</span> <span m="4105069">enough</span> <span
  m="4106609">keys</span> <span m="4106880">that</span> <span
  m="4106920">you</span> <span m="4107000">can</span> <span
  m="4107120">just</span> <span m="4107270">steal</span> <span
  m="4107590">one,</span> <span m="4109120">then</span> <span
  m="4109390">that</span> <span m="4109520">was</span> <span
  m="4109649">really</span> <span m="4109810">cheap.</span> <span
  m="4111210">But</span> <span m="4111390">the</span> <span
  m="4111510">other</span> <span m="4111670">case</span> <span
  m="4112529">is</span> <span m="4112740">that</span> <span
  m="4113040">you--</span> <span m="4117000">yeah.</span> <span
  m="4117510">I'm</span> <span m="4117700">also</span> <span
  m="4118040">going</span> <span m="4118189">to</span> <span
  m="4118260">have</span> <span m="4118470">to</span> <span
  m="4118580">involve</span> <span m="4119830">my</span> <span
  m="4119990">parent,</span> <span m="4120460">so</span> <span
  m="4120649">maybe</span> <span m="4120850">I'm</span> <span
  m="4120910">going</span> <span m="4121029">to</span> <span
  m="4121090">take</span> <span m="4121660">a</span> <span
  m="4121760">key</span> <span m="4123060">from</span> <span
  m="4123300">x</span> <span m="4124439">and</span> <span
  m="4125140">merge</span> <span m="4125600">all</span> <span
  m="4125740">these</span> <span m="4125920">things</span> <span
  m="4126120">together.</span> <span m="4127760">So</span> <span
  m="4127979">that's</span> <span m="4128250">y,</span> <span
  m="4129770">then</span> <span m="4130069">what</span> <span
  m="4130260">I</span> <span m="4130319">get</span> <span m="4130920">is</span>
  <span m="4131410">an</span> <span m="4131510">x</span> <span
  m="4132002">y.</span> <span m="4133479">I</span> <span m="4133600">had</span>
  <span m="4134729">two</span> <span m="4134899">children</span> <span
  m="4135279">here,</span> <span m="4136430">three</span> <span
  m="4136660">children</span> <span m="4137020">here.</span></p><p><span
  m="4138689">OK.</span> <span m="4138960">Also</span> <span
  m="4139550">messed</span> <span m="4139899">up</span> <span
  m="4139970">my</span> <span m="4140090">parent</span> <span
  m="4140380">a</span> <span m="4140410">little</span> <span
  m="4140590">bit,</span> <span m="4140760">but</span> <span
  m="4140870">that's</span> <span m="4141069">going</span> <span
  m="4141189">to</span> <span m="4141260">be</span> <span m="4141340">the</span>
  <span m="4141420">recursive</span> <span m="4141910">case.</span> <span
  m="4143550">This</span> <span m="4143830">is</span> <span m="4143960">a</span>
  <span m="4144010">sort</span> <span m="4144240">of</span> <span
  m="4144319">merge</span> <span m="4144609">operation.</span> <span
  m="4145029">In</span> <span m="4145130">general,</span> <span
  m="4145500">I</span> <span m="4145580">merge</span> <span
  m="4145950">with</span> <span m="4146045">my</span> <span
  m="4146140">sibling</span> <span m="4147330">and</span> <span
  m="4147439">then</span> <span m="4147569">potentially</span> <span
  m="4148060">split</span> <span m="4148390">again,</span> <span
  m="4149229">or</span> <span m="4149479">you</span> <span
  m="4149560">can</span> <span m="4149689">think</span> <span
  m="4149859">of</span> <span m="4149930">it</span> <span m="4150000">as</span>
  <span m="4150069">stealing</span> <span m="4150359">from</span> <span
  m="4150500">your</span> <span m="4150609">sibling,</span> <span
  m="4151410">as</span> <span m="4151569">you</span> <span
  m="4151649">may</span> <span m="4151800">be</span> <span
  m="4151910">experienced</span> <span m="4152350">with</span> <span
  m="4152410">doing.</span> <span m="4153399">I</span> <span
  m="4153520">don't</span> <span m="4153710">have</span> <span
  m="4153890">siblings,</span> <span m="4154359">so</span> <span
  m="4154540">I</span> <span m="4154620">didn't</span> <span
  m="4154790">get</span> <span m="4154910">to</span> <span m="4154979">do</span>
  <span m="4155090">that,</span> <span m="4155340">but</span> <span
  m="4155870">I</span> <span m="4156140">stole</span> <span
  m="4156390">from</span> <span m="4156490">my</span> <span
  m="4156609">parents,</span> <span m="4157020">so</span> <span
  m="4157240">whatever.</span> <span m="4157649">However</span> <span
  m="4157920">you</span> <span m="4157979">want</span> <span
  m="4158100">to</span> <span m="4158160">think</span> <span
  m="4158359">about</span> <span m="4158609">it,</span> <span
  m="4159490">that</span> <span m="4159720">is</span> <span
  m="4160220">merging</span> <span m="4160939">in</span> <span
  m="4161109">a</span> <span m="4161189">b</span> <span m="4161359">tree.</span>
  <span m="4162689">We</span> <span m="4162890">started</span> <span
  m="4163300">with</span> <span m="4163430">a</span> <span m="4163510">2</span>
  <span m="4163910">node</span> <span m="4164029">here.</span> <span
  m="4164990">We</span> <span m="4165180">ended</span> <span
  m="4165560">up</span> <span m="4166670">with</span> <span m="4166824">a</span>
  <span m="4166979">3</span> <span m="4167240">node.</span> <span
  m="4168260">Hmm,</span> <span m="4168479">that's</span> <span
  m="4168740">good.</span> <span m="4170560">It's</span> <span
  m="4170700">different</span> <span m="4171040">at</span> <span
  m="4171120">least.</span> <span m="4172200">So</span> <span
  m="4172680">the</span> <span m="4172840">bad</span> <span
  m="4173120">case</span> <span m="4173450">here</span> <span
  m="4174810">is</span> <span m="4174939">a</span> <span m="4174990">5</span>
  <span m="4175330">node,</span> <span m="4176310">bad</span> <span
  m="4176550">case</span> <span m="4176779">here</span> <span
  m="4177510">is</span> <span m="4177649">a</span> <span m="4177710">2</span>
  <span m="4177899">node.</span> <span m="4178120">What</span> <span
  m="4178399">should</span> <span m="4178540">I</span> <span
  m="4178580">use</span> <span m="4178770">a</span> <span
  m="4178950">potential</span> <span m="4179443">function?</span> <span
  m="4202160">Yeah.</span></p><p><span m="4203098">AUDIENCE: Number</span> <span
  m="4203567">of</span> <span m="4203801">nodes</span> <span
  m="4204036">with</span> <span m="4204270">two</span> <span
  m="4204505">children</span> <span m="4204974">and</span> <span
  m="4205443">number</span> <span m="4205599">of</span> <span
  m="4205755">nodes</span> <span m="4205912">with</span> <span
  m="4206068">five</span> <span m="4206224">children?</span></p><p><span
  m="4206850">ERIK DEMAINE: Number</span> <span m="4207180">of</span> <span
  m="4207630">nodes</span> <span m="4208010">with</span> <span
  m="4208180">two</span> <span m="4208410">or</span> <span
  m="4208610">five</span> <span m="4208900">children,</span> <span
  m="4209300">yeah.</span> <span m="4210100">So</span> <span
  m="4210300">that's</span> <span m="4210510">it.</span> <span
  m="4211420">Just</span> <span m="4211610">combine</span> <span
  m="4211970">with</span> <span m="4212130">the</span> <span
  m="4212180">sum.</span> <span m="4213290">That's</span> <span
  m="4213420">going</span> <span m="4213570">to</span> <span
  m="4213640">be</span> <span m="4213770">the</span> <span
  m="4213850">number</span> <span m="4214350">of</span> <span
  m="4217850">nodes</span> <span m="4218850">with</span> <span
  m="4220030">two</span> <span m="4220310">children</span> <span
  m="4224870">plus</span> <span m="4226370">the</span> <span
  m="4226480">number</span> <span m="4226770">of</span> <span
  m="4226870">nodes</span> <span m="4230870">with</span> <span
  m="4231120">five</span> <span m="4231370">children.</span></p><p><span
  m="4235690">This</span> <span m="4235830">is</span> <span
  m="4236000">measuring</span> <span m="4236500">karma.</span> <span
  m="4237020">This</span> <span m="4237220">is</span> <span
  m="4237480">how</span> <span m="4237720">bad</span> <span
  m="4238340">is</span> <span m="4238560">my</span> <span
  m="4238690">tree</span> <span m="4239150">going</span> <span
  m="4239195">to</span> <span m="4239240">be,</span> <span
  m="4240520">because</span> <span m="4240860">if</span> <span
  m="4240960">I</span> <span m="4241050">have</span> <span m="4241250">2</span>
  <span m="4241420">nodes,</span> <span m="4241920">I'm</span> <span
  m="4242140">really</span> <span m="4242350">close</span> <span
  m="4242640">to</span> <span m="4242720">under</span> <span
  m="4242960">flowing</span> <span m="4243370">and</span> <span
  m="4243470">that's</span> <span m="4243870">potentially</span> <span
  m="4244380">bad.</span> <span m="4244640">If</span> <span m="4244740">I</span>
  <span m="4244830">happen</span> <span m="4245160">to</span> <span
  m="4245240">delete</span> <span m="4245560">there,</span> <span
  m="4247140">bad</span> <span m="4247320">things</span> <span
  m="4247530">are</span> <span m="4247570">going</span> <span
  m="4247690">to</span> <span m="4247750">happen.</span> <span
  m="4249140">If</span> <span m="4249270">I</span> <span m="4249380">have</span>
  <span m="4249720">a</span> <span m="4249810">bunch</span> <span
  m="4250000">of</span> <span m="4250070">5</span> <span
  m="4250215">nodes,</span> <span m="4250650">splits</span> <span
  m="4251040">could</span> <span m="4251180">happen</span> <span
  m="4251500">there,</span> <span m="4252110">and</span> <span
  m="4252270">I</span> <span m="4252320">don't</span> <span
  m="4252480">know</span> <span m="4252640">whether</span> <span
  m="4252860">it's</span> <span m="4252960">going</span> <span
  m="4253080">to</span> <span m="4253150">be</span> <span m="4253220">an</span>
  <span m="4253290">insert</span> <span m="4253540">or</span> <span
  m="4253610">delete</span> <span m="4253890">next,</span> <span
  m="4254180">so</span> <span m="4254225">I'm</span> <span
  m="4254270">just</span> <span m="4254400">going</span> <span
  m="4254520">to</span> <span m="4254580">keep</span> <span
  m="4254750">track</span> <span m="4254990">of</span> <span
  m="4255070">both</span> <span m="4255320">of</span> <span
  m="4255410">them.</span> <span m="4256110">And</span> <span
  m="4256200">luckily</span> <span m="4256970">neither</span> <span
  m="4257510">of</span> <span m="4257610">them</span> <span
  m="4257890">output</span> <span m="4258480">5s</span> <span
  m="4258880">or</span> <span m="4258950">2s.</span> <span m="4259690">If</span>
  <span m="4259850">they</span> <span m="4259970">did,</span> <span
  m="4260720">like</span> <span m="4260980">if</span> <span
  m="4261090">we</span> <span m="4261165">did</span> <span
  m="4261240">2-3</span> <span m="4261600">trees,</span> <span
  m="4261940">this</span> <span m="4262110">is</span> <span m="4262270">a</span>
  <span m="4262330">total</span> <span m="4262750">nightmare,</span> <span
  m="4263220">because</span> <span m="4263670">you</span> <span
  m="4263760">can't</span> <span m="4264040">count</span> <span
  m="4264310">the</span> <span m="4264380">number</span> <span
  m="4264620">of</span> <span m="4264700">2</span> <span
  m="4264850">nodes</span> <span m="4265090">plus</span> <span
  m="4265350">the</span> <span m="4265430">number</span> <span
  m="4265640">3</span> <span m="4265850">nodes.</span> <span
  m="4265990">That's</span> <span m="4266250">all</span> <span
  m="4266510">the</span> <span m="4266590">nodes.</span></p><p><span
  m="4267760">Potential</span> <span m="4268790">only</span> <span
  m="4269060">changes</span> <span m="4269390">by</span> <span
  m="4269530">1</span> <span m="4269860">in</span> <span m="4269960">each</span>
  <span m="4270120">step.</span> <span m="4270510">That</span> <span
  m="4270660">would</span> <span m="4270760">never</span> <span
  m="4270990">help</span> <span m="4271240">you.</span> <span
  m="4272350">OK?</span> <span m="4272590">But</span> <span
  m="4272850">here</span> <span m="4273110">we</span> <span
  m="4273220">have</span> <span m="4273410">enough</span> <span
  m="4273710">of</span> <span m="4273810">a</span> <span m="4273890">gap</span>
  <span m="4275090">between</span> <span m="4275530">the</span> <span
  m="4275610">lower</span> <span m="4275880">bound</span> <span
  m="4276130">and</span> <span m="4276200">the</span> <span
  m="4276300">upper</span> <span m="4276540">bound</span> <span
  m="4277290">and,</span> <span m="4277410">in</span> <span
  m="4277470">general,</span> <span m="4278030">any</span> <span
  m="4278280">constants</span> <span m="4278890">here</span> <span
  m="4279070">will</span> <span m="4279200">work.</span> <span
  m="4280430">These</span> <span m="4280590">are</span> <span
  m="4280680">usually</span> <span m="4280960">called</span> <span
  m="4281250">a-b</span> <span m="4281690">trees,</span> <span
  m="4282560">generalization</span> <span m="4283220">of</span> <span
  m="4283300">b</span> <span m="4283530">trees,</span> <span
  m="4283850">where</span> <span m="4283950">you</span> <span
  m="4284080">get</span> <span m="4284220">to</span> <span
  m="4284310">specify</span> <span m="4284670">the</span> <span
  m="4284750">lower</span> <span m="4284970">bound</span> <span
  m="4285660">and</span> <span m="4285880">the</span> <span
  m="4285980">upper</span> <span m="4286160">bound,</span> <span
  m="4286730">as</span> <span m="4286880">long</span> <span
  m="4287180">as</span> <span m="4287420">a--</span> <span
  m="4289232">what's</span> <span m="4289685">the</span> <span
  m="4290140">way--</span> <span m="4290570">as</span> <span
  m="4290700">long</span> <span m="4290880">as</span> <span m="4291100">a</span>
  <span m="4291210">is</span> <span m="4291340">strictly</span> <span
  m="4291910">less</span> <span m="4292240">than</span> <span
  m="4292390">b</span> <span m="4292550">over</span> <span m="4292720">2,</span>
  <span m="4294180">then</span> <span m="4294390">this</span> <span
  m="4294560">argument</span> <span m="4294900">will</span> <span
  m="4295000">work.</span></p><p><span m="4295620">As</span> <span
  m="4295770">long</span> <span m="4295950">as</span> <span
  m="4296070">there's</span> <span m="4296320">at</span> <span
  m="4297140">least</span> <span m="4297400">one</span> <span
  m="4297830">gap</span> <span m="4298270">between</span> <span
  m="4298720">a</span> <span m="4298920">and</span> <span m="4299120">b</span>
  <span m="4299230">over</span> <span m="4299400">2,</span> <span
  m="4301090">then</span> <span m="4302350">this</span> <span
  m="4302540">argument</span> <span m="4302910">will</span> <span
  m="4303020">work,</span> <span m="4303510">because</span> <span
  m="4305400">in</span> <span m="4305610">the</span> <span
  m="4305910">small</span> <span m="4306300">case,</span> <span
  m="4306750">you</span> <span m="4306830">start</span> <span
  m="4307090">with</span> <span m="4308350">the</span> <span
  m="4308920">minimum</span> <span m="4309260">number</span> <span
  m="4309470">of</span> <span m="4309540">children</span> <span
  m="4309840">you</span> <span m="4309920">can</span> <span
  m="4310060">have.</span> <span m="4310850">You'll</span> <span
  m="4311030">get</span> <span m="4311260">one</span> <span
  m="4311490">more</span> <span m="4311800">in</span> <span
  m="4311946">the</span> <span m="4312093">end,</span> <span
  m="4313560">and</span> <span m="4314000">in</span> <span
  m="4314440">the</span> <span m="4315060">other</span> <span
  m="4315280">situation,</span> <span m="4315830">you</span> <span
  m="4315980">have</span> <span m="4316210">too</span> <span
  m="4316390">many</span> <span m="4316630">things,</span> <span
  m="4317380">you</span> <span m="4317530">divide</span> <span
  m="4317920">by</span> <span m="4318080">2,</span> <span m="4319100">and</span>
  <span m="4319190">you</span> <span m="4319280">don't</span> <span
  m="4319550">want</span> <span m="4319760">dividing</span> <span
  m="4320140">by</span> <span m="4320280">2</span> <span m="4320530">to</span>
  <span m="4320610">end</span> <span m="4320840">up</span> <span
  m="4320960">with</span> <span m="4321080">the</span> <span
  m="4321160">bad</span> <span m="4321430">case</span> <span
  m="4321710">over</span> <span m="4321870">here.</span> <span
  m="4322580">That's</span> <span m="4322800">what</span> <span
  m="4322960">happened</span> <span m="4323270">even</span> <span
  m="4323460">with</span> <span m="4323590">2-4</span> <span
  m="4323980">trees--</span> <span m="4324850">2-3-4</span> <span
  m="4325340">trees--</span> <span m="4326680">but</span> <span
  m="4326890">with</span> <span m="4327040">2-5</span> <span
  m="4327550">trees,</span> <span m="4328370">there's</span> <span
  m="4328540">enough</span> <span m="4328800">of</span> <span
  m="4328900">a</span> <span m="4328960">gap</span> <span
  m="4329300">that</span> <span m="4329710">when</span> <span
  m="4329940">we</span> <span m="4330040">split</span> <span
  m="4330410">5</span> <span m="4330640">in</span> <span
  m="4330880">half,</span> <span m="4331120">we</span> <span
  m="4331240">get</span> <span m="4331750">3s</span> <span
  m="4332200">only,</span> <span m="4332460">no</span> <span
  m="4332640">2s,</span> <span m="4333550">and</span> <span
  m="4333880">when</span> <span m="4334020">we</span> <span
  m="4334140">merge</span> <span m="4334570">2s,</span> <span
  m="4335260">we</span> <span m="4335400">get</span> <span
  m="4335570">3s,</span> <span m="4336620">no</span> <span
  m="4336860">5s.</span></p><p><span m="4339450">So</span> <span
  m="4340450">in</span> <span m="4340650">either</span> <span
  m="4340930">case,</span> <span m="4341300">if</span> <span
  m="4341470">we</span> <span m="4341570">do</span> <span m="4341740">the</span>
  <span m="4341810">split--</span> <span m="4344550">if</span> <span
  m="4344690">we</span> <span m="4344770">do</span> <span m="4344890">an</span>
  <span m="4344970">insert</span> <span m="4348910">with</span> <span
  m="4349210">k</span> <span m="4349430">splits,</span> <span
  m="4353830">the</span> <span m="4354030">change</span> <span
  m="4354520">in</span> <span m="4354610">potential</span> <span
  m="4356710">is</span> <span m="4357610">minus</span> <span
  m="4358060">k</span> <span m="4358450">plus</span> <span m="4358790">1.</span>
  <span m="4359610">Again,</span> <span m="4359860">we</span> <span
  m="4359960">might</span> <span m="4360240">make</span> <span
  m="4360480">a</span> <span m="4360520">single</span> <span
  m="4362460">five-child</span> <span m="4363410">node</span> <span
  m="4364010">at</span> <span m="4364160">the</span> <span
  m="4364240">top</span> <span m="4364760">when</span> <span
  m="4364930">we</span> <span m="4365020">stop</span> <span
  m="4365320">splitting,</span> <span m="4366280">but</span> <span
  m="4369390">every</span> <span m="4369490">time</span> <span
  m="4369670">we</span> <span m="4369770">split,</span> <span
  m="4370140">we've</span> <span m="4370760">taken</span> <span
  m="4371110">a</span> <span m="4371150">5</span> <span m="4371440">node</span>
  <span m="4371730">and</span> <span m="4371870">destroyed</span> <span
  m="4372280">it,</span> <span m="4372850">left</span> <span
  m="4373070">it</span> <span m="4373150">with</span> <span
  m="4373270">two</span> <span m="4373400">3</span> <span
  m="4373620">nodes,</span> <span m="4374360">so</span> <span
  m="4374590">that</span> <span m="4374910">decreases</span> <span
  m="4375410">by</span> <span m="4375530">k,</span> <span m="4375850">and</span>
  <span m="4375950">so</span> <span m="4376100">this</span> <span
  m="4376510">k</span> <span m="4376685">cost</span> <span
  m="4377630">gets</span> <span m="4377850">cancelled</span> <span
  m="4378270">out</span> <span m="4378420">by</span> <span
  m="4378550">this</span> <span m="4378710">negative</span> <span
  m="4379040">k</span> <span m="4379280">and</span> <span
  m="4379430">change</span> <span m="4379720">potential,</span> <span
  m="4380200">so</span> <span m="4380220">the</span> <span
  m="4380290">amortized</span> <span m="4380670">cost</span> <span
  m="4380850">is</span> <span m="4381390">1</span> <span m="4381770">just</span>
  <span m="4382000">like</span> <span m="4382200">before.</span></p><p><span
  m="4383640">But</span> <span m="4383780">now,</span> <span
  m="4384590">also</span> <span m="4385060">with</span> <span
  m="4385280">delete,</span> <span m="4389040">with</span> <span
  m="4389320">k</span> <span m="4389620">merge</span> <span
  m="4389940">operations</span> <span m="4392860">where</span> <span
  m="4393010">I'm</span> <span m="4393110">treating</span> <span
  m="4393440">all</span> <span m="4393620">of</span> <span
  m="4393700">this</span> <span m="4394310">as</span> <span
  m="4394470">one</span> <span m="4394760">operation,</span> <span
  m="4396820">again,</span> <span m="4398030">the</span> <span
  m="4398140">change</span> <span m="4398470">of</span> <span
  m="4398560">potential</span> <span m="4399850">is</span> <span
  m="4400130">minus</span> <span m="4400510">k</span> <span
  m="4401450">plus</span> <span m="4401720">1.</span> <span
  m="4402320">Potentially</span> <span m="4403370">when</span> <span
  m="4403490">we</span> <span m="4403600">stop</span> <span
  m="4404040">merging,</span> <span m="4404890">because</span> <span
  m="4405200">we</span> <span m="4405310">stole</span> <span
  m="4406060">one</span> <span m="4406440">key</span> <span
  m="4406760">from</span> <span m="4407070">our</span> <span
  m="4407170">parent,</span> <span m="4408400">it</span> <span
  m="4408650">may</span> <span m="4408810">now</span> <span
  m="4409030">be</span> <span m="4409180">a</span> <span m="4409230">2</span>
  <span m="4409470">node,</span> <span m="4410150">whereas</span> <span
  m="4410450">before</span> <span m="4410780">it</span> <span
  m="4410870">wasn't.</span> <span m="4412340">If</span> <span
  m="4412410">it</span> <span m="4412480">was</span> <span
  m="4412620">already</span> <span m="4413030">a</span> <span
  m="4413090">2</span> <span m="4413260">node,</span> <span
  m="4413480">then</span> <span m="4413690">it</span> <span
  m="4413790">would</span> <span m="4413880">be</span> <span
  m="4413970">another</span> <span m="4414230">merge,</span> <span
  m="4414495">and</span> <span m="4414760">that's</span> <span
  m="4414970">actually</span> <span m="4415220">a</span> <span
  m="4415250">good</span> <span m="4415460">case</span> <span
  m="4415700">for</span> <span m="4415820">us,</span> <span
  m="4416135">but</span> <span m="4416450">when</span> <span
  m="4416810">the</span> <span m="4416870">merges</span> <span
  m="4417230">stop,</span> <span m="4418410">they</span> <span
  m="4418520">stop</span> <span m="4418830">because</span> <span
  m="4419110">we</span> <span m="4419230">hit</span> <span m="4419370">a</span>
  <span m="4419410">node</span> <span m="4419590">that's</span> <span
  m="4419770">at</span> <span m="4419850">least</span> <span
  m="4420150">a</span> <span m="4420190">3</span> <span m="4420420">node,</span>
  <span m="4421450">then</span> <span m="4421600">we</span> <span
  m="4421690">delete</span> <span m="4421940">a</span> <span
  m="4421980">key</span> <span m="4422200">from</span> <span
  m="4422430">it,</span> <span m="4422560">so</span> <span
  m="4422680">potentially</span> <span m="4423130">it's</span> <span
  m="4423250">a</span> <span m="4423290">2</span> <span m="4423520">node.</span>
  <span m="4423750">So</span> <span m="4423890">potentially</span> <span
  m="4424400">the</span> <span m="4424500">potential</span> <span
  m="4424870">goes</span> <span m="4425080">up</span> <span
  m="4425280">by</span> <span m="4425420">1.</span></p><p><span
  m="4426530">We</span> <span m="4426760">make</span> <span
  m="4426970">one</span> <span m="4427280">new</span> <span
  m="4427600">bad</span> <span m="4427990">node,</span> <span
  m="4429320">but</span> <span m="4429780">every</span> <span
  m="4430170">time</span> <span m="4430500">we</span> <span
  m="4430590">do</span> <span m="4430740">a</span> <span
  m="4430800">merge,</span> <span m="4431530">we</span> <span
  m="4431690">destroy</span> <span m="4432120">bad</span> <span
  m="4432370">nodes,</span> <span m="4432590">because</span> <span
  m="4432740">we</span> <span m="4432850">started</span> <span
  m="4433210">with</span> <span m="4433350">a</span> <span m="4433400">2</span>
  <span m="4433610">node,</span> <span m="4434140">we</span> <span
  m="4434290">turned</span> <span m="4434580">it</span> <span
  m="4434670">into</span> <span m="4434890">a</span> <span m="4434930">3</span>
  <span m="4435170">node.</span> <span m="4436370">So,</span> <span
  m="4436550">again,</span> <span m="4436790">the</span> <span
  m="4436890">amortized</span> <span m="4437390">cost</span> <span
  m="4438200">is</span> <span m="4438440">the</span> <span
  m="4438530">actual</span> <span m="4438900">cost,</span> <span
  m="4439230">which</span> <span m="4439400">is</span> <span
  m="4439510">k,</span> <span m="4440640">plus</span> <span
  m="4441090">the</span> <span m="4441180">change</span> <span
  m="4441310">in</span> <span m="4441440">potential,</span> <span
  m="4441850">which</span> <span m="4442000">is</span> <span
  m="4442090">minus</span> <span m="4442380">k</span> <span
  m="4442540">plus</span> <span m="4442780">1,</span> <span
  m="4443200">and</span> <span m="4443310">so</span> <span
  m="4443520">the</span> <span m="4443990">amortized</span> <span
  m="4444410">cost</span> <span m="4444640">is</span> <span
  m="4444710">just</span> <span m="4444920">1.</span> <span
  m="4446370">Constant</span> <span m="4447450">number</span> <span
  m="4447760">of</span> <span m="4447830">splits</span> <span
  m="4448220">or</span> <span m="4448280">merges</span> <span
  m="4449170">per</span> <span m="4449600">insert</span> <span
  m="4449860">or</span> <span m="4450120">delete.</span></p><p><span
  m="4465740">So</span> <span m="4465950">this</span> <span
  m="4466140">is</span> <span m="4466200">actually</span> <span
  m="4466450">really</span> <span m="4466650">nice</span> <span
  m="4467770">if</span> <span m="4468800">you're</span> <span
  m="4468970">in</span> <span m="4469190">a</span> <span
  m="4469270">model</span> <span m="4469750">where</span> <span
  m="4470550">changing</span> <span m="4471040">your</span> <span
  m="4471140">data</span> <span m="4471370">structure</span> <span
  m="4471750">is</span> <span m="4471860">more</span> <span
  m="4472080">expensive</span> <span m="4472760">than</span> <span
  m="4473710">searching</span> <span m="4474160">your</span> <span
  m="4474290">data</span> <span m="4474520">structure.</span> <span
  m="4474930">For</span> <span m="4474970">example,</span> <span
  m="4475880">you</span> <span m="4475980">have</span> <span
  m="4476005">a</span> <span m="4476030">lot</span> <span m="4476360">of</span>
  <span m="4476610">threads</span> <span m="4477340">in</span> <span
  m="4477530">parallel</span> <span m="4478050">accessing</span> <span
  m="4478750">your</span> <span m="4478860">thing.</span> <span
  m="4479150">You're</span> <span m="4479330">on</span> <span
  m="4480360">a</span> <span m="4481000">multi-core</span> <span
  m="4481960">machine</span> <span m="4482340">or</span> <span
  m="4482410">something.</span> <span m="4483240">You</span> <span
  m="4483310">have</span> <span m="4483400">a</span> <span
  m="4483440">shared</span> <span m="4483700">data</span> <span
  m="4483880">structure,</span> <span m="4484170">you</span> <span
  m="4484250">really</span> <span m="4484470">don't</span> <span
  m="4484650">want</span> <span m="4484800">to</span> <span
  m="4484860">be</span> <span m="4484950">changing</span> <span
  m="4485400">things</span> <span m="4485620">very</span> <span
  m="4485820">often,</span> <span m="4487920">because</span> <span
  m="4488310">you</span> <span m="4488740">have</span> <span
  m="4488870">to</span> <span m="4488970">take</span> <span m="4489170">a</span>
  <span m="4489210">lock</span> <span m="4489580">and</span> <span
  m="4489690">then</span> <span m="4489790">that</span> <span
  m="4489920">slows</span> <span m="4490210">down</span> <span
  m="4490380">all</span> <span m="4490470">the</span> <span
  m="4490580">other</span> <span m="4490730">threads.</span> <span
  m="4491940">If</span> <span m="4492080">searches</span> <span
  m="4492520">are</span> <span m="4492580">really</span> <span
  m="4492770">fast</span> <span m="4493290">but</span> <span
  m="4493550">splits</span> <span m="4493890">and</span> <span
  m="4494000">merges</span> <span m="4494330">are</span> <span
  m="4494410">expensive,</span> <span m="4495470">then</span> <span
  m="4495690">this</span> <span m="4495900">is</span> <span m="4496030">a</span>
  <span m="4496110">reason</span> <span m="4496430">why</span> <span
  m="4496590">you</span> <span m="4496730">should</span> <span
  m="4496940">use</span> <span m="4497550">2-5</span> <span
  m="4498080">trees</span> <span m="4498480">instead</span> <span
  m="4498890">of</span> <span m="4499040">2-3</span> <span
  m="4499440">trees,</span> <span m="4499760">because</span> <span
  m="4499950">2-3</span> <span m="4500270">trees,</span> <span
  m="4500540">they'll</span> <span m="4500680">be</span> <span
  m="4500780">splitting</span> <span m="4501130">emerging</span> <span
  m="4501580">all</span> <span m="4501850">the</span> <span
  m="4501940">time,</span> <span m="4502970">log</span> <span
  m="4503320">n.</span> <span m="4503800">It's</span> <span
  m="4503900">not</span> <span m="4504070">a</span> <span
  m="4504120">huge</span> <span m="4504390">difference,</span> <span
  m="4504700">log</span> <span m="4504860">n</span> <span
  m="4505020">versus</span> <span m="4505300">constant,</span> <span
  m="4505690">but</span> <span m="4505910">with</span> <span
  m="4506030">data</span> <span m="4506200">structures</span> <span
  m="4506550">that's</span> <span m="4506700">usually</span> <span
  m="4507200">the</span> <span m="4507290">gap.</span></p><p><span
  m="4508480">Last</span> <span m="4508810">class</span> <span
  m="4509040">we</span> <span m="4509110">were</span> <span
  m="4509200">super</span> <span m="4509460">excited,</span> <span
  m="4509770">because</span> <span m="4509960">we</span> <span
  m="4510020">went</span> <span m="4510120">from</span> <span
  m="4510320">log</span> <span m="4510630">to</span> <span
  m="4510730">log</span> <span m="4511000">log.</span> <span
  m="4511600">Here</span> <span m="4511850">we're</span> <span
  m="4511930">excited</span> <span m="4512310">we</span> <span
  m="4512390">go</span> <span m="4512520">from</span> <span
  m="4512700">log</span> <span m="4512960">to</span> <span
  m="4513030">constant.</span> <span m="4513980">It's</span> <span
  m="4514070">a</span> <span m="4514130">little</span> <span
  m="4514320">better,</span> <span m="4514690">but</span> <span
  m="4515050">they're</span> <span m="4515360">all</span> <span
  m="4515470">small</span> <span m="4515770">numbers,</span> <span
  m="4517210">but</span> <span m="4517580">still</span> <span
  m="4519210">we</span> <span m="4519360">like</span> <span
  m="4519550">to</span> <span m="4519630">go</span> <span
  m="4519750">fast,</span> <span m="4520170">as</span> <span
  m="4520270">fast</span> <span m="4520520">as</span> <span
  m="4520610">possible.</span> <span m="4521570">In</span> <span
  m="4522070">a</span> <span m="4522300">real</span> <span
  m="4522560">system,</span> <span m="4523080">actually</span> <span
  m="4523400">it's</span> <span m="4523660">even</span> <span
  m="4523880">more</span> <span m="4524040">important,</span> <span
  m="4524400">because</span> <span m="4524590">splitting</span> <span
  m="4524980">the</span> <span m="4525070">root</span> <span
  m="4525410">is</span> <span m="4525560">probably</span> <span
  m="4525820">the</span> <span m="4525910">worst,</span> <span
  m="4526680">because</span> <span m="4527120">everyone</span> <span
  m="4527470">is</span> <span m="4527560">always</span> <span
  m="4527790">touching</span> <span m="4528100">the</span> <span
  m="4528180">root.</span> <span m="4529100">In</span> <span
  m="4529240">a</span> <span m="4529280">2-5</span> <span
  m="4529710">tree,</span> <span m="4529930">you</span> <span
  m="4530050">almost</span> <span m="4530340">never</span> <span
  m="4530560">touch</span> <span m="4530840">the</span> <span
  m="4530930">root,</span> <span m="4531380">almost</span> <span
  m="4531800">always</span> <span m="4532650">splitting</span> <span
  m="4532776">and</span> <span m="4533030">merging</span> <span
  m="4533410">at</span> <span m="4533510">the</span> <span
  m="4533590">leaves,</span> <span m="4534240">whereas</span> <span
  m="4534450">in</span> <span m="4534540">a</span> <span m="4534590">2-3</span>
  <span m="4534970">tree,</span> <span m="4535580">you</span> <span
  m="4535700">could</span> <span m="4535860">be</span> <span
  m="4535960">going</span> <span m="4536220">all</span> <span
  m="4536340">the</span> <span m="4536410">way</span> <span
  m="4536500">to</span> <span m="4536560">the</span> <span
  m="4536670">root</span> <span m="4536800">every</span> <span
  m="4537040">single</span> <span m="4537300">time.</span> <span
  m="4539120">So</span> <span m="4541730">that's</span> <span
  m="4542210">my</span> <span m="4542350">examples.</span> <span
  m="4542800">Any</span> <span m="4542850">questions?</span></p><p><span
  m="4544176">AUDIENCE:</span> <span m="4544618">[INAUDIBLE]</span></p><p><span
  m="4547370">ERIK DEMAINE: For</span> <span m="4547670">free</span> <span
  m="4547810">minutes.</span> <span m="4549674">Cool.</span> <span
  m="4550140">That's</span> <span m="4550380">amortization.</span></p>
uid: d522e5a8fc02a6d3b59a2b67eeba3e6f
type: courses
layout: video
---
