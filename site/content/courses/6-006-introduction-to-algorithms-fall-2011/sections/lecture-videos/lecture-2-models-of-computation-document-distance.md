---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture describes an algorithm as a
  computational procedure to solve a problem, covers the random access machine
  and pointer models of computation, and introduces the document distance
  problem.</p> <p><strong>Instructor:</strong> Erik Demaine</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Zc54gFhdpLA
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: Video-YouTube-Stream
    type: Video
    uid: a7337569c5aa56e2a3b798f067632627
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Zc54gFhdpLA/default.jpg'
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ba4450672cb2f2beb50f76e72333d3c0
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-2-models-computation/id585700718?i=164305060
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: Video-iTunes U-MP4
    type: Video
    uid: 090f23ceb060ad547f30cc09590acc84
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec02_300k.mp4'
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 99422ec441d82133f08cb76478cb6261
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Zc54gFhdpLA
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2c2b28a3e71d6c81522fdfb059d76af7
  - id: Zc54gFhdpLA.srt
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-2-models-of-computation-document-distance/Zc54gFhdpLA.srt
    title: 3play caption file
    type: null
    uid: f6f430894bb80dacea3ea9dd48e37d96
  - id: Zc54gFhdpLA.pdf
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-2-models-of-computation-document-distance/Zc54gFhdpLA.pdf
    title: 3play pdf file
    type: null
    uid: 8ba3a33bcde688de7ce255f848ba5147
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f8d24a33c1ba2d631a8e503ff200750f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 76c28e47a69f788cf8b45b5d6605cc2c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7e67d7f7b7580d5f06cb2d00a7674b76
inline_embed_id: '40361152lecture2:modelsofcomputation,documentdistance44233929'
order_index: 66
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
related_resources_text: ''
short_url: lecture-2-models-of-computation-document-distance
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-2-models-of-computation-document-distance
title: 'Lecture 2: Models of Computation, Document Distance'
transcript: >-
  <p><span m="50">The</span> <span m="180">following</span> <span
  m="620">content</span> <span m="1210">is</span> <span m="1330">provided</span>
  <span m="1770">under</span> <span m="2050">a</span> <span
  m="2090">Creative</span> <span m="2490">Commons</span> <span
  m="2900">license.</span> <span m="4019">Your</span> <span
  m="4200">support</span> <span m="4700">will</span> <span m="4860">help</span>
  <span m="5100">MIT</span> <span m="5560">OpenCourseWare</span> <span
  m="6350">continue</span> <span m="6860">to</span> <span m="6940">offer</span>
  <span m="7350">high</span> <span m="7590">quality</span> <span
  m="8109">educational</span> <span m="8740">resources</span> <span
  m="9360">for</span> <span m="9510">free.</span> <span m="10720">To</span>
  <span m="10820">make</span> <span m="10930">a</span> <span
  m="10970">donation</span> <span m="11660">or</span> <span
  m="11930">view</span> <span m="12370">additional</span> <span
  m="12790">materials</span> <span m="13320">from</span> <span
  m="13480">hundreds</span> <span m="13910">of</span> <span m="14020">MIT</span>
  <span m="14450">courses,</span> <span m="15550">visit</span> <span
  m="15780">MIT</span> <span m="16200">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17410">ocw.mit.edu.</span></p><p><span
  m="22682">PROFESSOR: Hey,</span> <span m="23120">everybody.</span> <span
  m="23535">You</span> <span m="23950">ready</span> <span m="24200">to</span>
  <span m="24350">learn</span> <span m="24570">some</span> <span
  m="24790">algorithms?</span> <span m="26960">Yeah!</span></p><p><span
  m="28350">Let's</span> <span m="28600">do</span> <span m="28800">it.</span>
  <span m="29580">I'm</span> <span m="29890">Eric</span> <span
  m="30170">Domain.</span> <span m="30540">You can</span> <span
  m="30730">call</span> <span m="30900">me</span> <span
  m="31020">Eric.</span></p><p><span m="31950">And</span> <span
  m="32210">the</span> <span m="32580">last</span> <span m="32840">class,</span>
  <span m="33180">we</span> <span m="33870">sort of</span> <span
  m="34130">jumped</span> <span m="34480">into</span> <span
  m="34660">things.</span> <span m="35020">We</span> <span
  m="35150">studied</span> <span m="35520">peak</span> <span
  m="35770">finding</span> <span m="36340">and</span> <span
  m="36400">looked</span> <span m="36610">at</span> <span m="36660">a</span>
  <span m="36700">bunch</span> <span m="36940">of algorithms</span> <span
  m="37170">for peak</span> <span m="37560">finding</span> <span m="37940">on
  your</span> <span m="38120">problem</span> <span m="38470">set.</span> <span
  m="38880">You've</span> <span m="39190">already</span> <span
  m="39490">seen</span> <span m="39800">a</span> <span m="39860">bunch</span>
  <span m="40130">more.</span></p><p><span m="42260">And</span> <span
  m="42630">in</span> <span m="42760">this</span> <span m="42930">class,</span>
  <span m="43250">we're</span> <span m="43350">going</span> <span
  m="43370">to</span> <span m="43440">do</span> <span m="43580">some</span>
  <span m="43770">more</span> <span m="43990">algorithms.</span> <span
  m="44430">Don't</span> <span m="44580">worry.</span> <span
  m="44730">That</span> <span m="44920">will</span> <span m="45030">be</span>
  <span m="45270">at</span> <span m="45400">the</span> <span
  m="45540">end.</span> <span m="45670">We're</span> <span
  m="45770">going</span> <span m="45860">to</span> <span m="45940">talk</span>
  <span m="46170">about</span> <span m="46370">another</span> <span
  m="46650">problem,</span> <span m="47140">document</span> <span
  m="47550">distance,</span> <span m="48010">which</span> <span
  m="48240">will</span> <span m="48380">be</span> <span m="48560">a</span> <span
  m="48630">running</span> <span m="48950">example</span> <span
  m="49460">for</span> <span m="49670">a</span> <span m="49720">bunch</span>
  <span m="49950">of</span> <span m="50060">topics</span> <span
  m="50550">that</span> <span m="50660">we</span> <span m="50780">cover</span>
  <span m="51050">in</span> <span m="51130">this</span> <span
  m="51280">class.</span></p><p><span m="52360">But</span> <span
  m="52640">before</span> <span m="53000">we</span> <span m="53130">go</span>
  <span m="53350">there,</span> <span m="53610">I</span> <span
  m="53690">wanted</span> <span m="54080">to</span> <span m="54180">take</span>
  <span m="54420">a</span> <span m="54480">step</span> <span
  m="54800">back</span> <span m="55200">and</span> <span m="55380">talk</span>
  <span m="55640">about,</span> <span m="56460">what</span> <span
  m="56750">actually</span> <span m="57290">is</span> <span m="57540">an</span>
  <span m="57650">algorithm?</span> <span m="58400">What</span> <span
  m="59140">is</span> <span m="59250">an</span> <span m="59340">algorithm</span>
  <span m="59720">allowed</span> <span m="60040">to</span> <span
  m="60140">do?</span> <span m="60760">And</span> <span m="60940">also</span>
  <span m="61280">deep</span> <span m="61580">philosophical</span> <span
  m="62370">questions</span> <span m="62820">like,</span> <span
  m="63050">what</span> <span m="63280">is</span> <span
  m="63520">time?</span></p><p><span m="64950">What</span> <span
  m="65290">is</span> <span m="65400">the</span> <span m="65500">running</span>
  <span m="65740">time</span> <span m="65970">of an</span> <span
  m="66250">algorithm?</span> <span m="66410">How</span> <span
  m="66580">do</span> <span m="66660">we</span> <span m="66770">measure</span>
  <span m="67150">it?</span> <span m="68060">And</span> <span
  m="68240">what</span> <span m="68380">are</span> <span m="68410">the</span>
  <span m="68540">rules</span> <span m="68750">the</span> <span
  m="68840">game?</span></p><p><span m="70030">For</span> <span
  m="70410">fun,</span> <span m="70800">I</span> <span m="70960">thought</span>
  <span m="71350">I</span> <span m="71500">would</span> <span
  m="71770">first</span> <span m="72210">mention</span> <span
  m="73120">where</span> <span m="73340">the</span> <span m="73470">word</span>
  <span m="73710">comes</span> <span m="74050">from,</span> <span
  m="75810">the</span> <span m="75920">word</span> <span
  m="76160">algorithm.</span> <span m="77520">It</span> <span
  m="77660">comes</span> <span m="77910">from</span> <span m="78020">this</span>
  <span m="78240">guy,</span> <span m="81205">a little</span> <span
  m="81700">hard to</span> <span m="81900">spell.</span> <span
  m="87180">Al-Khwarizmi,</span> <span m="88790">who</span> <span
  m="89510">is</span> <span m="89720">sort</span> <span m="89890">of</span>
  <span m="89950">the</span> <span m="90050">father</span> <span
  m="90530">of</span> <span m="90650">algebra.</span></p><p><span
  m="91210">He</span> <span m="91400">wrote</span> <span m="91620">this</span>
  <span m="91820">book</span> <span m="92570">called</span> <span
  m="93330">&quot;The</span> <span m="93450">Compendious</span> <span
  m="94120">Book</span> <span m="94370">on</span> <span
  m="94530">Calculation</span> <span m="95240">by</span> <span
  m="95390">Completion</span> <span m="96020">and</span> <span
  m="96160">Balancing&quot;</span> <span m="97610">back</span> <span
  m="97850">in</span> <span m="97930">the</span> <span m="98030">day.</span>
  <span m="98740">And</span> <span m="99080">it</span> <span
  m="99180">was</span> <span m="99400">in</span> <span
  m="99510">particular</span> <span m="100030">about</span> <span
  m="100250">how</span> <span m="100420">to</span> <span m="100520">solve</span>
  <span m="102020">linear</span> <span m="102490">and</span> <span
  m="102580">quadratic</span> <span m="103420">equations.</span> <span
  m="104300">So</span> <span m="104480">the</span> <span
  m="104570">beginning</span> <span m="104920">of</span> <span
  m="105000">algebra.</span></p><p><span m="105360">I</span> <span
  m="105420">don't</span> <span m="105570">think</span> <span
  m="105720">he</span> <span m="105830">invented</span> <span
  m="106210">those</span> <span m="106380">techniques.</span> <span
  m="106810">But</span> <span m="106930">he</span> <span m="107080">was</span>
  <span m="107260">sort</span> <span m="107450">of</span> <span
  m="107940">the</span> <span m="108050">textbook</span> <span
  m="108490">writer</span> <span m="108780">who</span> <span
  m="108940">wrote</span> <span m="109260">sort</span> <span
  m="109430">of</span> <span m="109490">how</span> <span
  m="109680">people</span> <span m="110390">solved</span> <span
  m="110720">them.</span> <span m="110910">And</span> <span
  m="111030">you</span> <span m="111120">can</span> <span
  m="111270">think</span> <span m="111540">of</span> <span m="111640">how</span>
  <span m="111840">to</span> <span m="111940">solve</span> <span
  m="112200">those</span> <span m="112340">equations</span> <span
  m="112830">as</span> <span m="113450">early</span> <span
  m="113770">algorithms.</span> <span m="114550">First,</span> <span
  m="114880">you</span> <span m="115480">take</span> <span
  m="115640">this</span> <span m="115800">number.</span> <span
  m="116080">You</span> <span m="116170">multiply</span> <span
  m="116530">by</span> <span m="116690">this.</span></p><p><span
  m="116970">You</span> <span m="117080">add</span> <span m="117500">it</span>
  <span m="118120">or</span> <span m="118270">you</span> <span
  m="118400">reduce</span> <span m="118830">to</span> <span
  m="119860">squares,</span> <span m="120370">whatever.</span> <span
  m="121660">So</span> <span m="122610">that's</span> <span
  m="122880">where</span> <span m="122980">the</span> <span
  m="123460">word</span> <span m="123890">algebra</span> <span
  m="124300">comes</span> <span m="124540">from</span> <span
  m="124760">and</span> <span m="124850">also</span> <span
  m="125100">where</span> <span m="125230">the</span> <span
  m="125360">word</span> <span m="125880">algorithm</span> <span
  m="126310">comes</span> <span m="126540">from.</span> <span
  m="126690">There</span> <span m="126810">aren't</span> <span
  m="127430">very</span> <span m="127690">many</span> <span
  m="128009">words</span> <span m="128320">with</span> <span
  m="128479">these</span> <span m="128699">roots.</span></p><p><span
  m="129715">So</span> <span m="130090">there</span> <span m="130250">you</span>
  <span m="130389">go.</span> <span m="130580">Some</span> <span
  m="130840">fun</span> <span m="131060">history.</span> <span
  m="135320">What's</span> <span m="135560">an</span> <span
  m="135660">algorithm?</span></p><p><span m="137550">I'll</span> <span
  m="137740">start</span> <span m="138020">with</span> <span
  m="138140">sort</span> <span m="138330">of</span> <span m="138420">some</span>
  <span m="138680">informal</span> <span m="139150">definitions</span> <span
  m="139870">and</span> <span m="140120">then</span> <span m="140320">the</span>
  <span m="140420">point</span> <span m="140690">of</span> <span
  m="140780">this</span> <span m="141040">lecture.</span> <span
  m="142070">And</span> <span m="143130">the</span> <span m="143350">idea</span>
  <span m="144280">of</span> <span m="144390">a</span> <span
  m="144470">model</span> <span m="144860">of</span> <span
  m="144970">computation</span> <span m="146220">is</span> <span
  m="146440">to</span> <span m="146590">formally</span> <span
  m="147040">specify</span> <span m="147830">what</span> <span
  m="148060">an</span> <span m="148160">algorithm</span> <span
  m="148580">is.</span> <span m="148760">I</span> <span m="148860">don't</span>
  <span m="148990">want</span> <span m="149120">to</span> <span
  m="149170">get</span> <span m="149360">super</span> <span
  m="149780">technical</span> <span m="150240">and formal</span> <span
  m="150640">here,</span> <span m="150850">but</span> <span m="151010">I</span>
  <span m="151060">want</span> <span m="151260">to</span> <span
  m="151310">give</span> <span m="151510">you</span> <span
  m="151620">some</span> <span m="151890">grounding</span> <span
  m="152900">so</span> <span m="153110">when</span> <span m="153240">we</span>
  <span m="153360">write</span> <span m="153680">Python</span> <span
  m="154070">code,</span> <span m="154370">when</span> <span
  m="154510">we</span> <span m="154620">write</span> <span
  m="154840">pseudocode,</span> <span m="155330">we</span> <span
  m="155420">have</span> <span m="155570">some</span> <span
  m="155790">idea</span> <span m="156070">what</span> <span
  m="156280">things</span> <span m="156620">actually</span> <span
  m="157030">cost.</span> <span m="158090">This</span> <span
  m="158330">is</span> <span m="158370">a</span> <span m="158440">new</span>
  <span m="158600">lecture.</span> <span m="158970">We've</span> <span
  m="159040">never</span> <span m="159250">done</span> <span
  m="159410">this</span> <span m="159550">before</span> <span
  m="159830">in</span> <span m="160100">006.</span> <span m="160470">But
  I</span> <span m="160630">think</span> <span m="160850">it's</span> <span
  m="161180">important.</span></p><p><span m="162800">So</span> <span
  m="163000">at a</span> <span m="163070">high</span> <span
  m="163270">level,</span> <span m="164760">you</span> <span
  m="165040">can</span> <span m="165550">think</span> <span m="165870">of</span>
  <span m="165970">an</span> <span m="166070">algorithm</span> <span
  m="166530">is</span> <span m="166750">just</span> <span m="167040">a--</span>
  <span m="169140">I'm</span> <span m="169310">sure</span> <span
  m="169480">you've</span> <span m="169600">seen</span> <span m="169950">the
  definition</span> <span m="170410">before.</span> <span m="174550">It's</span>
  <span m="174680">a</span> <span m="174750">way</span> <span
  m="175010">to</span> <span m="175210">define</span> <span
  m="175600">computation</span> <span m="176520">or</span> <span
  m="176780">computational</span> <span m="177310">procedure</span> <span
  m="177790">for</span> <span m="177960">solving</span> <span
  m="178330">some</span> <span m="178540">problem.</span> <span
  m="185030">So</span> <span m="185310">whereas</span> <span
  m="185820">computer</span> <span m="186210">code,</span> <span
  m="186660">I</span> <span m="186690">mean,</span> <span m="186860">it</span>
  <span m="186970">could</span> <span m="187120">just</span> <span
  m="187320">be</span> <span m="187530">running</span> <span
  m="187840">in</span> <span m="187910">the</span> <span
  m="187990">background</span> <span m="188400">all</span> <span
  m="188520">the</span> <span m="188610">time</span> <span
  m="188910">doing</span> <span m="189140">whatever.</span> <span
  m="189540">An</span> <span m="189660">algorithm</span> <span
  m="190190">we</span> <span m="190220">think</span> <span m="190430">of</span>
  <span m="190540">as</span> <span m="190650">having</span> <span
  m="190880">some</span> <span m="191100">input</span> <span
  m="192000">and</span> <span m="192680">generating</span> <span
  m="193090">some</span> <span m="193370">output.</span> <span
  m="193800">Usually,</span> <span m="194230">it's</span> <span
  m="194650">to</span> <span m="194790">solve</span> <span
  m="195100">some</span> <span m="195300">problem.</span></p><p><span
  m="200130">You</span> <span m="200250">want</span> <span m="200420">to</span>
  <span m="200460">know</span> <span m="200670">is</span> <span
  m="200800">this</span> <span m="200960">number</span> <span
  m="201210">prime,</span> <span m="201640">whatever.</span> <span
  m="202040">Question?</span></p><p><span m="202510">AUDIENCE:</span> <span
  m="202970">Can</span> <span m="203123">you</span> <span m="203276">turn</span>
  <span m="203430">up</span> <span m="203583">the</span> <span
  m="203736">volume</span> <span m="203890">for</span> <span
  m="204043">your</span> <span m="204196">mic?</span></p><p><span
  m="206120">PROFESSOR:</span> <span m="206260">This</span> <span
  m="206650">microphone</span> <span m="207310">does</span> <span
  m="207460">not</span> <span m="207830">feed</span> <span
  m="208010">into</span> <span m="208220">the</span> <span m="208320">AV</span>
  <span m="208550">system.</span> <span m="208950">So I</span> <span
  m="209310">shall just</span> <span m="209480">talk</span> <span
  m="209710">louder,</span> <span m="210613">OK?</span> <span
  m="213790">And</span> <span m="213970">quiet</span> <span
  m="214440">the</span> <span m="214510">set,</span> <span
  m="214780">please.</span></p><p><span m="216800">OK,</span> <span
  m="217030">so</span> <span m="217450">that's</span> <span m="217670">an</span>
  <span m="217750">algorithm.</span> <span m="218150">You</span> <span
  m="218240">take</span> <span m="218450">some</span> <span
  m="218610">input.</span> <span m="219890">You</span> <span
  m="220390">run</span> <span m="220550">it</span> <span
  m="220650">through.</span></p><p><span m="221320">You</span> <span
  m="221440">compute</span> <span m="221810">some</span> <span
  m="222010">output.</span> <span m="223010">Of</span> <span
  m="223190">course,</span> <span m="223720">computer</span> <span
  m="224090">code</span> <span m="224310">can</span> <span m="224430">do</span>
  <span m="224520">this</span> <span m="224730">too.</span> <span
  m="225210">An</span> <span m="225370">algorithm</span> <span
  m="225820">is</span> <span m="225910">basically</span> <span
  m="226290">the</span> <span m="226410">mathematical</span> <span
  m="227480">analog</span> <span m="228140">of</span> <span m="228240">a</span>
  <span m="228300">computer</span> <span m="228680">program.</span></p><p><span
  m="229380">So</span> <span m="229420">if</span> <span m="229490">you</span>
  <span m="229600">want</span> <span m="229810">to</span> <span
  m="229940">reason</span> <span m="230230">about</span> <span
  m="231170">what</span> <span m="231330">computer</span> <span
  m="231650">programs</span> <span m="232080">do,</span> <span
  m="232620">you</span> <span m="232750">translate</span> <span m="233200">it
  into</span> <span m="233330">the</span> <span m="233430">world</span> <span
  m="233740">algorithms.</span> <span m="235370">And</span> <span
  m="235550">vice</span> <span m="235800">versa,</span> <span
  m="236110">you</span> <span m="236220">want</span> <span m="236330">to</span>
  <span m="236380">solve</span> <span m="236600">some</span> <span
  m="236760">problem--</span> <span m="237190">first,</span> <span
  m="237540">you usually</span> <span m="237900">develop</span> <span
  m="238230">an</span> <span m="238320">algorithm</span> <span
  m="239220">using</span> <span m="239470">mathematics,</span> <span
  m="240710">using</span> <span m="241010">this</span> <span
  m="241170">class.</span> <span m="242040">And</span> <span
  m="242200">then</span> <span m="242350">you</span> <span
  m="242460">convert</span> <span m="242910">it into</span> <span
  m="243000">computer</span> <span m="243370">code.</span> <span
  m="243610">And</span> <span m="243700">this</span> <span
  m="243860">class</span> <span m="244160">is</span> <span
  m="244260">about</span> <span m="244640">that</span> <span
  m="244850">transition</span> <span m="245410">from</span> <span
  m="245600">one</span> <span m="245760">to</span> <span m="245860">the</span>
  <span m="246020">other.</span></p><p><span m="247110">You</span> <span
  m="247280">can</span> <span m="247360">draw</span> <span m="247510">a</span>
  <span m="247570">picture</span> <span m="249100">of</span> <span
  m="249570">sort of</span> <span m="249830">analogs.</span> <span
  m="253660">So</span> <span m="254720">an</span> <span
  m="254790">algorithm</span> <span m="255440">is a</span> <span
  m="255590">mathematical</span> <span m="256230">analog</span> <span
  m="256769">of</span> <span m="258089">a</span> <span
  m="258980">computer</span> <span m="259350">program.</span> <span
  m="260289">A</span> <span m="260620">computer</span> <span
  m="260930">program</span> <span m="261620">is</span> <span
  m="261839">built</span> <span m="262150">on</span> <span m="262330">top</span>
  <span m="262660">of</span> <span m="262940">a</span> <span
  m="263220">programming</span> <span m="263630">language.</span></p><p><span
  m="264270">And</span> <span m="264610">it's</span> <span
  m="264690">written</span> <span m="265060">in</span> <span m="265270">a</span>
  <span m="265350">programming</span> <span m="265710">language.</span> <span
  m="273740">The</span> <span m="273990">mathematical</span> <span
  m="274670">analog</span> <span m="275010">of</span> <span m="275080">a</span>
  <span m="275170">programming</span> <span m="275590">language,</span> <span
  m="276760">what</span> <span m="277030">we</span> <span
  m="277170">write</span> <span m="277380">algorithms</span> <span
  m="277940">in,</span> <span m="278520">usually</span> <span
  m="279460">we</span> <span m="279630">write</span> <span
  m="279880">them</span> <span m="280160">in</span> <span
  m="280600">pseudocode,</span> <span m="283780">which</span> <span
  m="284070">is</span> <span m="284290">basically</span> <span
  m="284890">another</span> <span m="285430">fancy</span> <span
  m="285800">word</span> <span m="286090">for</span> <span
  m="286820">structured</span> <span m="287300">English,</span> <span
  m="289650">good</span> <span m="289830">English,</span> <span
  m="290620">whatever</span> <span m="290960">you want to</span> <span
  m="291280">say.</span> <span m="291950">Of</span> <span
  m="292030">course,</span> <span m="292240">you</span> <span
  m="292350">could</span> <span m="292480">use</span> <span
  m="292680">another</span> <span m="292980">natural</span> <span
  m="293320">language.</span></p><p><span m="294200">But</span> <span
  m="294320">the</span> <span m="294420">idea</span> <span m="294660">is,</span>
  <span m="295450">you</span> <span m="295690">need</span> <span
  m="295860">to</span> <span m="295970">express</span> <span
  m="297150">that</span> <span m="297340">algorithm</span> <span
  m="297860">in</span> <span m="297920">a</span> <span m="297970">way</span>
  <span m="298140">that</span> <span m="298250">people</span> <span
  m="298560">can</span> <span m="298720">understand</span> <span
  m="299420">and</span> <span m="299690">reason</span> <span
  m="299950">about</span> <span m="300300">formally.</span> <span
  m="300610">So</span> <span m="300920">that's</span> <span
  m="301150">the</span> <span m="301220">structured</span> <span
  m="301660">part.</span> <span m="302350">Pseudocode</span> <span
  m="304480">means</span> <span m="304700">lots</span> <span
  m="304900">of</span> <span m="304970">different</span> <span
  m="305260">things.</span></p><p><span m="305780">It's</span> <span
  m="305820">just</span> <span m="305940">sort</span> <span m="306070">of</span>
  <span m="306150">an</span> <span m="306250">abstract</span> <span
  m="306820">how</span> <span m="307000">you</span> <span
  m="307190">would</span> <span m="307320">write</span> <span
  m="307550">down</span> <span m="308040">formal</span> <span
  m="308580">specification</span> <span m="309390">without</span> <span
  m="309710">necessarily</span> <span m="310410">being</span> <span
  m="310630">able</span> <span m="310780">to</span> <span
  m="310940">actually</span> <span m="311400">run</span> <span m="311660">it
  on</span> <span m="311760">a</span> <span m="311850">computer.</span> <span
  m="313820">Though</span> <span m="314130">there's</span> <span
  m="314450">a</span> <span m="314510">particular</span> <span
  m="314940">pseudocode</span> <span m="315370">in</span> <span
  m="315450">your</span> <span m="315570">textbook</span> <span
  m="316030">which</span> <span m="316180">you</span> <span
  m="316260">probably</span> <span m="316580">could</span> <span
  m="316780">run</span> <span m="316980">on</span> <span m="317080">a</span>
  <span m="317150">computer.</span> <span m="318050">A</span> <span
  m="318130">lot</span> <span m="318330">of</span> <span m="318430">it,</span>
  <span m="318530">anyway.</span></p><p><span m="319470">But</span> <span
  m="319910">you</span> <span m="320010">don't</span> <span
  m="320110">have</span> <span m="320260">to</span> <span m="320360">use</span>
  <span m="320500">that</span> <span m="320740">version.</span> <span
  m="321050">It</span> <span m="321360">just</span> <span
  m="321600">makes</span> <span m="322040">sense</span> <span
  m="322360">to</span> <span m="323160">humans</span> <span
  m="323950">who</span> <span m="324080">do</span> <span m="324210">the</span>
  <span m="324310">mathematics.</span> <span m="325950">OK,</span> <span
  m="326180">and</span> <span m="326350">then</span> <span
  m="326490">ultimately,</span> <span m="327050">this</span> <span
  m="327220">program</span> <span m="327580">runs</span> <span
  m="327780">on</span> <span m="327870">a</span> <span
  m="327930">computer.</span> <span m="330420">You</span> <span
  m="330570">all</span> <span m="330690">have</span> <span
  m="331140">computers,</span> <span m="331620">probably in</span> <span
  m="331950">your</span> <span m="332070">pockets.</span></p><p><span
  m="334340">There's</span> <span m="335100">an</span> <span
  m="335260">analog</span> <span m="336070">of</span> <span m="336230">a</span>
  <span m="336290">computer</span> <span m="337090">in</span> <span
  m="337280">the</span> <span m="337370">mathematical</span> <span
  m="338050">world.</span> <span m="339130">And</span> <span
  m="339290">that</span> <span m="339520">is</span> <span m="339770">the</span>
  <span m="339860">model</span> <span m="340200">of</span> <span
  m="340310">computation.</span> <span m="342230">And</span> <span
  m="342320">that's</span> <span m="342550">sort</span> <span
  m="342760">of</span> <span m="342910">the</span> <span m="343020">focus</span>
  <span m="343500">of</span> <span m="343640">the</span> <span
  m="343720">first</span> <span m="344040">part</span> <span
  m="344280">of</span> <span m="344380">this</span> <span
  m="344540">lecture.</span> <span m="346560">Model</span> <span
  m="346810">of</span> <span m="346930">computation</span> <span
  m="347600">says</span> <span m="348690">what</span> <span
  m="349030">your</span> <span m="349330">computer</span> <span
  m="349970">is</span> <span m="350070">allowed</span> <span
  m="350450">to</span> <span m="350580">do,</span> <span m="350850">what</span>
  <span m="351030">it</span> <span m="351120">can</span> <span
  m="351290">do</span> <span m="351670">in</span> <span
  m="351790">constant</span> <span m="352220">time,</span> <span
  m="352570">basically?</span> <span m="353770">And</span> <span
  m="353970">that's</span> <span m="354180">what</span> <span
  m="354310">I</span> <span m="354340">want</span> <span m="354510">to</span>
  <span m="354580">talk</span> <span m="354810">about</span> <span
  m="356210">here.</span></p><p><span m="357460">So</span> <span
  m="359590">the</span> <span m="360280">model</span> <span m="360530">of</span>
  <span m="360620">computation</span> <span m="368210">specifies</span> <span
  m="372690">basically</span> <span m="373080">what</span> <span
  m="373370">operations</span> <span m="373950">you</span> <span
  m="374080">can</span> <span m="374210">do</span> <span m="376490">in</span>
  <span m="376580">an</span> <span m="376690">algorithm</span> <span
  m="388290">and</span> <span m="388610">how</span> <span m="388740">much</span>
  <span m="388950">they</span> <span m="389070">cost.</span> <span
  m="390180">This</span> <span m="390320">is</span> <span m="390470">the</span>
  <span m="390640">what</span> <span m="390870">is</span> <span
  m="391050">time.</span> <span m="398490">So</span> <span m="398710">for</span>
  <span m="398750">each</span> <span m="399040">operation,</span> <span
  m="399510">we're</span> <span m="399580">going</span> <span
  m="399690">to</span> <span m="399760">specify</span> <span
  m="400120">how</span> <span m="400230">much</span> <span
  m="400440">time</span> <span m="400650">it</span> <span
  m="400740">costs.</span></p><p><span m="401550">Then the</span> <span
  m="401760">algorithm</span> <span m="402170">does</span> <span
  m="402370">a</span> <span m="402430">bunch</span> <span m="402660">of</span>
  <span m="402750">operations.</span> <span m="403680">They're</span> <span
  m="403820">combined</span> <span m="404130">together</span> <span
  m="404470">with</span> <span m="404600">control</span> <span
  m="404940">flow,</span> <span m="405170">for</span> <span
  m="405430">loops,</span> <span m="405740">if</span> <span
  m="405880">statements,</span> <span m="406650">stuff</span> <span
  m="406910">like</span> <span m="407060">that</span> <span m="407810">which
  we're</span> <span m="407890">not</span> <span m="408060">going</span> <span
  m="408150">to</span> <span m="408200">worry</span> <span
  m="408350">about</span> <span m="408580">too</span> <span
  m="408690">much.</span> <span m="410280">But</span> <span
  m="410910">obviously,</span> <span m="411200">we'll</span> <span
  m="411370">use</span> <span m="411560">them</span> <span m="411700">a</span>
  <span m="411740">lot.</span></p><p><span m="412440">And</span> <span
  m="412620">what</span> <span m="412730">we</span> <span
  m="412870">count</span> <span m="413230">is</span> <span m="413380">how</span>
  <span m="413540">much</span> <span m="413790">do</span> <span
  m="413970">each</span> <span m="414050">of</span> <span m="414160">the</span>
  <span m="414250">operations</span> <span m="414720">cost.</span> <span
  m="415020">You</span> <span m="415150">add</span> <span m="415360">them</span>
  <span m="415510">up.</span> <span m="415720">That</span> <span
  m="415910">is</span> <span m="416020">the</span> <span m="416140">total</span>
  <span m="416690">cost</span> <span m="417120">of</span> <span
  m="417270">your</span> <span m="417450">algorithm.</span> <span
  m="418180">So</span> <span m="418300">in</span> <span
  m="418360">particular,</span> <span m="418810">we</span> <span
  m="419000">care</span> <span m="419210">mostly</span> <span
  m="419540">in</span> <span m="419590">this</span> <span
  m="419740">class</span> <span m="420010">about</span> <span
  m="420780">running</span> <span m="421040">time.</span></p><p><span
  m="421960">Each</span> <span m="422230">operation</span> <span
  m="422670">has</span> <span m="422850">a</span> <span m="422910">time</span>
  <span m="423180">cost.</span> <span m="423900">You</span> <span
  m="424080">add</span> <span m="424220">those</span> <span
  m="424400">up.</span> <span m="424960">That's</span> <span
  m="425180">running</span> <span m="425420">time</span> <span m="425610">of
  the</span> <span m="425730">algorithm.</span></p><p><span
  m="427400">OK,</span> <span m="430830">so</span> <span
  m="431100">let's--</span> <span m="431720">I'm</span> <span
  m="431880">going</span> <span m="431990">to</span> <span
  m="432080">cover</span> <span m="433690">two</span> <span
  m="433950">models</span> <span m="434300">of</span> <span
  m="434390">computation</span> <span m="435060">which</span> <span
  m="435250">you</span> <span m="435350">can</span> <span m="435490">just</span>
  <span m="435670">think</span> <span m="435890">of</span> <span
  m="435950">as</span> <span m="436150">different</span> <span
  m="436490">ways</span> <span m="436850">of</span> <span
  m="436990">thinking.</span> <span m="437390">You've</span> <span
  m="437680">probably</span> <span m="438240">seen</span> <span
  m="438550">them</span> <span m="438720">in</span> <span m="438790">some</span>
  <span m="439010">sense</span> <span m="439380">as--</span> <span
  m="441650">what</span> <span m="441750">you</span> <span
  m="441850">call</span> <span m="442020">them?</span> <span
  m="442650">Styles</span> <span m="443300">of</span> <span
  m="443420">programming.</span></p><p><span m="445330">Object</span> <span
  m="445750">oriented</span> <span m="446070">style</span> <span
  m="446390">of</span> <span m="446480">programming,</span> <span
  m="447660">more</span> <span m="447970">assembly</span> <span
  m="448450">style</span> <span m="448770">of</span> <span
  m="448860">programming.</span> <span m="449530">There's</span> <span
  m="449740">lots</span> <span m="449960">of</span> <span
  m="450020">different</span> <span m="450240">styles</span> <span
  m="450520">of</span> <span m="450600">programming</span> <span
  m="451010">languages</span> <span m="452332">which</span> <span
  m="452680">I'm</span> <span m="452770">not</span> <span
  m="452940">going</span> <span m="453030">to</span> <span
  m="453080">talk</span> <span m="453290">about</span> <span
  m="453520">here.</span> <span m="453700">But</span> <span
  m="453860">you've</span> <span m="454020">see</span> <span
  m="454310">analogs</span> <span m="454770">if</span> <span
  m="454900">you've</span> <span m="455040">seen</span> <span
  m="455240">those</span> <span m="455430">before.</span></p><p><span
  m="458550">And</span> <span m="459860">these</span> <span
  m="460050">models</span> <span m="460470">really</span> <span
  m="460780">give</span> <span m="461030">you</span> <span m="461200">a</span>
  <span m="461240">way</span> <span m="461580">of</span> <span
  m="461870">structuring</span> <span m="462530">your</span> <span
  m="464000">thinking</span> <span m="464390">about</span> <span
  m="464740">how</span> <span m="464940">you</span> <span
  m="465100">write</span> <span m="465270">an</span> <span
  m="465330">algorithm.</span> <span m="466770">So</span> <span m="466860">they
  are</span> <span m="467120">the</span> <span m="467470">random</span> <span
  m="467770">access</span> <span m="468140">machine</span> <span
  m="468540">and</span> <span m="468670">the</span> <span
  m="468750">pointer</span> <span m="469020">machine.</span> <span
  m="471010">So</span> <span m="471150">we'll</span> <span
  m="471250">start</span> <span m="471570">with</span> <span
  m="472940">random</span> <span m="473210">access</span> <span
  m="473570">machine,</span> <span m="483970">also</span> <span
  m="484310">known</span> <span m="484550">as</span> <span m="484680">the</span>
  <span m="484800">RAM.</span> <span m="487530">Can</span> <span
  m="487690">someone</span> <span m="488000">tell</span> <span
  m="488140">me</span> <span m="488270">what</span> <span m="488430">else</span>
  <span m="488670">RAM</span> <span m="488960">stands</span> <span
  m="489290">for?</span></p><p><span m="490890">AUDIENCE: Random</span> <span
  m="491320">Access Memory?</span></p><p><span m="491750">PROFESSOR:
  Random</span> <span m="492080">Access</span> <span m="492380">Memory.</span>
  <span m="493220">So</span> <span m="493400">this</span> <span
  m="493600">is</span> <span m="493860">both</span> <span
  m="494100">confusing</span> <span m="494620">but</span> <span
  m="494760">also</span> <span m="495060">convenience.</span> <span
  m="495860">Because</span> <span m="496940">RAM</span> <span
  m="497270">simultaneously</span> <span m="498010">stands</span> <span
  m="498290">for</span> <span m="498410">two</span> <span
  m="498580">things</span> <span m="498870">and</span> <span
  m="498960">they</span> <span m="499050">mean</span> <span
  m="499370">almost</span> <span m="499890">the</span> <span
  m="499980">same</span> <span m="500220">thing,</span> <span
  m="500500">but</span> <span m="500520">not</span> <span
  m="500690">quite.</span> <span m="501340">So</span> <span m="501500">I</span>
  <span m="501570">guess</span> <span m="501720">that's</span> <span
  m="501870">more</span> <span m="502020">confusing</span> <span
  m="502480">than</span> <span m="502610">useful.</span> <span
  m="503010">But</span> <span m="503280">there</span> <span
  m="503440">you</span> <span m="503500">go.</span></p><p><span
  m="504560">So</span> <span m="504770">we</span> <span m="504860">have</span>
  <span m="505090">random</span> <span m="507410">access</span> <span
  m="509700">memory.</span> <span m="511244">Oh,</span> <span m="511641">look
  at</span> <span m="512039">that.</span> <span m="512380">Fits</span> <span
  m="512710">perfectly.</span> <span m="515549">And</span> <span
  m="515580">so</span> <span m="515720">we're</span> <span
  m="515860">thinking,</span> <span m="516460">this</span> <span
  m="516640">is</span> <span m="516760">a</span> <span m="516890">real--</span>
  <span m="517340">this</span> <span m="517559">is--</span> <span
  m="518110">random</span> <span m="518419">access</span> <span
  m="518720">memory</span> <span m="519429">is</span> <span
  m="519659">over</span> <span m="519890">here</span> <span m="520370">in</span>
  <span m="520530">real</span> <span m="520760">computer</span> <span
  m="521195">land.</span></p><p><span m="521630">That's</span> <span
  m="521850">like,</span> <span m="522159">D-RAM</span> <span
  m="522770">SD-RAM,</span> <span m="523440">whatever--</span> <span
  m="523809">the</span> <span m="523919">things</span> <span
  m="524150">you</span> <span m="524260">buy</span> <span m="525000">and</span>
  <span m="525140">stick</span> <span m="525480">into</span> <span
  m="525610">your</span> <span m="526720">motherboard,</span> <span
  m="527720">your</span> <span m="527920">GP,</span> <span m="528310">or</span>
  <span m="528380">whatever.</span> <span m="529190">And</span> <span
  m="530020">over</span> <span m="530280">here,</span> <span
  m="530430">the</span> <span m="530540">mathematical</span> <span
  m="531200">analog</span> <span m="531560">of--</span> <span
  m="532720">so</span> <span m="532840">here's,</span> <span m="533120">it's
  a</span> <span m="533190">RAM.</span> <span m="533575">Here,</span> <span
  m="533960">it's</span> <span m="534080">also a</span> <span
  m="534410">RAM.</span></p><p><span m="535070">Here,</span> <span
  m="535350">it's</span> <span m="535500">a</span> <span
  m="535560">random</span> <span m="535850">access</span> <span
  m="536550">machine.</span> <span m="537550">Here,</span> <span
  m="537740">it's</span> <span m="537870">a</span> <span
  m="537940">random</span> <span m="538250">access</span> <span
  m="538510">memory.</span> <span m="540560">It's</span> <span
  m="541250">technical</span> <span m="541640">detail.</span></p><p><span
  m="542450">But</span> <span m="542880">the</span> <span m="543030">idea</span>
  <span m="543390">is,</span> <span m="543770">if</span> <span
  m="543910">you</span> <span m="544070">look</span> <span m="544320">at</span>
  <span m="547210">RAM</span> <span m="548080">that's</span> <span
  m="548270">in</span> <span m="548360">your</span> <span
  m="548480">computer,</span> <span m="549680">it's</span> <span
  m="549860">basically</span> <span m="550520">a</span> <span
  m="550610">giant</span> <span m="551090">array,</span> <span
  m="551940">right?</span> <span m="552310">You can</span> <span
  m="552490">go</span> <span m="552740">from</span> <span m="552950">zero</span>
  <span m="553910">to,</span> <span m="555610">I don't</span> <span
  m="555830">know.</span> <span m="556090">A typical</span> <span
  m="556500">chip</span> <span m="556710">these</span> <span m="556890">days
  is</span> <span m="557230">like</span> <span m="557490">four</span> <span
  m="557830">gigs</span> <span m="558180">in</span> <span m="558300">one</span>
  <span m="559450">thing.</span> <span m="560080">So</span> <span m="560240">you
  can</span> <span m="560470">go</span> <span m="560600">from</span> <span
  m="560750">zero</span> <span m="561170">to</span> <span m="561320">four</span>
  <span m="561540">gigs.</span> <span m="561890">You</span> <span
  m="562040">can</span> <span m="562370">access</span> <span
  m="562840">anything</span> <span m="563390">in</span> <span
  m="563530">the</span> <span m="563600">middle</span> <span
  m="563850">there</span> <span m="564440">in</span> <span
  m="564550">constant</span> <span m="564930">time.</span></p><p><span
  m="565660">To</span> <span m="565840">access</span> <span
  m="566150">something,</span> <span m="566410">you</span> <span
  m="566500">need</span> <span m="566660">to</span> <span m="566740">know</span>
  <span m="566890">where</span> <span m="567050">it</span> <span
  m="567100">is.</span> <span m="568490">That's</span> <span
  m="568730">random</span> <span m="569020">access</span> <span
  m="569290">memory.</span> <span m="570270">So</span> <span
  m="570760">that's</span> <span m="571000">an</span> <span
  m="571080">array.</span> <span m="574490">So</span> <span
  m="574690">I'll</span> <span m="574820">just</span> <span
  m="574970">draw</span> <span m="575140">a big</span> <span
  m="575320">picture.</span> <span m="576090">Here's</span> <span
  m="576270">an</span> <span m="576350">array.</span></p><p><span
  m="577490">Now,</span> <span m="579070">RAM</span> <span m="579510">is</span>
  <span m="579620">usually</span> <span m="580030">organized</span> <span
  m="580650">by</span> <span m="580910">words.</span> <span m="581840">So</span>
  <span m="582120">these</span> <span m="582420">are</span> <span
  m="584070">a</span> <span m="584130">machine</span> <span
  m="584540">word,</span> <span m="585700">which</span> <span
  m="585890">we're</span> <span m="586020">going</span> <span
  m="586150">to</span> <span m="586220">put</span> <span m="586400">in</span>
  <span m="586490">this</span> <span m="586640">model.</span> <span
  m="587510">And</span> <span m="587700">then</span> <span
  m="587850">there's</span> <span m="588050">address</span> <span
  m="588350">zero,</span> <span m="588670">address</span> <span
  m="588970">one,</span> <span m="589230">address</span> <span
  m="589540">two.</span></p><p><span m="591510">This</span> <span
  m="591680">is</span> <span m="591780">the</span> <span m="591880">fifth</span>
  <span m="592130">word.</span> <span m="593150">And</span> <span
  m="593360">just</span> <span m="593520">keeps</span> <span
  m="593760">going.</span> <span m="594070">You can</span> <span
  m="594320">think</span> <span m="594500">of</span> <span
  m="594580">this</span> <span m="594740">as</span> <span
  m="594850">infinite.</span> <span m="595360">Or</span> <span
  m="596250">the</span> <span m="596480">amount</span> <span
  m="596800">that</span> <span m="596900">you</span> <span
  m="597020">use,</span> <span m="597300">that's</span> <span
  m="597570">the</span> <span m="597670">space</span> <span m="598030">of</span>
  <span m="598130">your</span> <span m="598270">algorithm,</span> <span
  m="598670">if</span> <span m="598780">you</span> <span m="598870">care</span>
  <span m="599040">about</span> <span m="599810">storage</span> <span
  m="600160">space.</span></p><p><span m="601660">So</span> <span
  m="601740">that's</span> <span m="601990">basically</span> <span
  m="602380">it.</span> <span m="603610">OK,</span> <span m="603770">now</span>
  <span m="603980">how</span> <span m="604150">do</span> <span
  m="604260">we--</span> <span m="604590">this</span> <span m="604820">is</span>
  <span m="604950">the</span> <span m="605090">memory</span> <span
  m="605440">side</span> <span m="605670">of</span> <span
  m="605760">things.</span> <span m="606000">How</span> <span
  m="606130">do</span> <span m="606220">we</span> <span
  m="606340">actually</span> <span m="606630">compute</span> <span
  m="606980">with</span> <span m="607160">it?</span></p><p><span
  m="608150">It's</span> <span m="608320">very</span> <span
  m="608480">simple.</span> <span m="609240">We</span> <span
  m="609370">just</span> <span m="609550">say,</span> <span m="610580">in</span>
  <span m="610760">constant</span> <span m="611190">time,</span> <span
  m="614270">an</span> <span m="614430">algorithm</span> <span
  m="615410">can</span> <span m="618100">basically</span> <span
  m="618490">read</span> <span m="618850">in</span> <span m="619720">or</span>
  <span m="619850">load</span> <span m="620690">a</span> <span
  m="620760">constant</span> <span m="621200">number</span> <span
  m="621450">of</span> <span m="621530">words</span> <span
  m="622800">from</span> <span m="622910">memory,</span> <span
  m="625160">do</span> <span m="626130">a</span> <span
  m="626210">constant</span> <span m="626620">number</span> <span
  m="627040">of</span> <span m="627690">computations</span> <span
  m="628410">on</span> <span m="628580">them,</span> <span m="633020">and</span>
  <span m="633190">then</span> <span m="633350">write</span> <span
  m="634440">them</span> <span m="634590">out.</span> <span
  m="634950">It's</span> <span m="635050">usually</span> <span
  m="635340">called</span> <span m="635670">store.</span></p><p><span
  m="643770">OK,</span> <span m="644010">it needs</span> <span
  m="644210">to</span> <span m="644320">know</span> <span
  m="644480">where</span> <span m="644580">these</span> <span
  m="644770">words</span> <span m="645030">are.</span> <span
  m="645330">It</span> <span m="645580">accesses</span> <span
  m="646210">them</span> <span m="646520">by</span> <span
  m="651010">address.</span> <span m="652290">And</span> <span
  m="652500">so</span> <span m="652720">I</span> <span m="652860">guess</span>
  <span m="653120">I</span> <span m="653250">should</span> <span
  m="653490">write</span> <span m="653710">here</span> <span
  m="654390">you</span> <span m="654490">have</span> <span m="654910">a</span>
  <span m="654980">constant</span> <span m="655330">number</span> <span
  m="655530">of</span> <span m="655590">registers</span> <span
  m="660000">just</span> <span m="660210">hanging</span> <span
  m="660480">around.</span></p><p><span m="661910">So</span> <span
  m="662130">you</span> <span m="662350">load</span> <span
  m="662700">some</span> <span m="662890">words</span> <span
  m="663200">into</span> <span m="663490">registers.</span> <span
  m="664040">You</span> <span m="664150">can</span> <span m="664250">do</span>
  <span m="664360">some</span> <span m="664530">computations</span> <span
  m="665240">on</span> <span m="665350">those</span> <span
  m="665500">registers.</span> <span m="666270">And</span> <span
  m="666420">then</span> <span m="666510">you</span> <span m="666590">can</span>
  <span m="666720">write</span> <span m="666940">them</span> <span
  m="667070">back,</span> <span m="667480">storing</span> <span
  m="667810">them</span> <span m="667990">in</span> <span
  m="668160">locations</span> <span m="668900">that</span> <span
  m="669030">are</span> <span m="669120">specified</span> <span
  m="669730">by</span> <span m="669880">your</span> <span
  m="670000">registers.</span></p><p><span m="670850">So</span> <span
  m="670950">you've</span> <span m="670980">ever</span> <span
  m="671170">done</span> <span m="671390">assembly</span> <span
  m="671790">programming,</span> <span m="672690">this</span> <span
  m="672880">is</span> <span m="673000">what</span> <span
  m="673140">assembly</span> <span m="673490">programming</span> <span
  m="673900">is</span> <span m="673990">like.</span> <span m="675510">And</span>
  <span m="677150">it</span> <span m="677380">can</span> <span
  m="677590">be</span> <span m="677960">rather</span> <span
  m="678250">annoying</span> <span m="678580">to</span> <span
  m="678680">write</span> <span m="678860">algorithms</span> <span
  m="679290">in</span> <span m="679370">this</span> <span
  m="679500">model.</span> <span m="680500">But</span> <span
  m="680650">in</span> <span m="680740">some</span> <span
  m="680930">sense,</span> <span m="681240">it</span> <span m="681390">is</span>
  <span m="681540">reality.</span></p><p><span m="682140">This</span> <span
  m="682350">is</span> <span m="682490">how</span> <span m="682720">we</span>
  <span m="682850">think</span> <span m="683050">about</span> <span
  m="683310">computers.</span> <span m="684320">If</span> <span
  m="684430">you</span> <span m="684540">ignore</span> <span
  m="684790">things</span> <span m="685030">like</span> <span
  m="685210">caches,</span> <span m="685780">this</span> <span
  m="685950">is</span> <span m="686080">an</span> <span
  m="686190">accurate</span> <span m="686610">model</span> <span
  m="686870">of</span> <span m="686990">computation</span> <span
  m="688270">that</span> <span m="688640">loading,</span> <span
  m="689420">computing,</span> <span m="690140">and</span> <span
  m="690240">storing</span> <span m="690610">all</span> <span
  m="690780">take</span> <span m="690970">roughly</span> <span m="691330">the
  same</span> <span m="691450">amount of</span> <span m="691870">time.</span>
  <span m="692040">They all</span> <span m="692260">take</span> <span
  m="692460">constant</span> <span m="692840">time.</span></p><p><span
  m="693720">You</span> <span m="693840">can</span> <span
  m="693950">manipulate</span> <span m="694360">a</span> <span
  m="694400">whole</span> <span m="694690">word</span> <span
  m="695340">at</span> <span m="695510">a</span> <span m="695570">time.</span>
  <span m="695980">Now,</span> <span m="696050">what</span> <span
  m="696250">exactly</span> <span m="696710">is</span> <span m="696830">a</span>
  <span m="696900">word?</span> <span m="698680">You</span> <span
  m="698760">know,</span> <span m="699530">computers</span> <span
  m="699940">these</span> <span m="700110">days,</span> <span m="700520">it's
  like</span> <span m="700710">32</span> <span m="701050">bits</span> <span
  m="701290">or</span> <span m="701370">64</span> <span
  m="701860">bits.</span></p><p><span m="702830">But</span> <span
  m="703160">we</span> <span m="703300">like</span> <span m="703500">to</span>
  <span m="703580">be</span> <span m="703700">a</span> <span
  m="703740">little</span> <span m="703950">bit</span> <span
  m="704110">more</span> <span m="704280">abstract.</span> <span
  m="705710">A</span> <span m="705790">word</span> <span m="707450">is</span>
  <span m="707930">w</span> <span m="708270">bits.</span> <span
  m="711220">It's</span> <span m="711340">slightly</span> <span
  m="711680">annoying.</span></p><p><span m="712530">And</span> <span
  m="712720">most of</span> <span m="712910">this</span> <span
  m="713080">class,</span> <span m="713400">we</span> <span
  m="713580">won't</span> <span m="713850">really</span> <span
  m="714060">worry</span> <span m="714280">about</span> <span
  m="714510">what</span> <span m="714700">w</span> <span m="715090">is.</span>
  <span m="715340">We'll</span> <span m="715480">assume</span> <span
  m="715810">that</span> <span m="715930">we're</span> <span
  m="716060">given</span> <span m="716330">as</span> <span
  m="716460">input</span> <span m="717280">a</span> <span
  m="717350">bunch</span> <span m="717580">of</span> <span
  m="717670">things</span> <span m="717910">which</span> <span
  m="718100">are</span> <span m="718210">words.</span> <span
  m="718970">So</span> <span m="719170">for</span> <span
  m="719300">example,</span> <span m="719680">peak</span> <span
  m="719900">finding.</span></p><p><span m="720720">We're</span> <span
  m="720830">given</span> <span m="721090">a</span> <span
  m="721130">matrix</span> <span m="722050">of</span> <span
  m="722510">numbers.</span> <span m="723050">We</span> <span
  m="723170">didn't</span> <span m="723310">really</span> <span
  m="723510">say</span> <span m="723850">whether</span> <span
  m="724080">they're</span> <span m="724300">integers</span> <span
  m="724780">or</span> <span m="724840">floats</span> <span m="725380">or</span>
  <span m="725470">what.</span> <span m="726600">We</span> <span
  m="726750">don't</span> <span m="726870">worry</span> <span
  m="727060">about</span> <span m="727320">that.</span> <span
  m="727490">We</span> <span m="727580">just</span> <span
  m="727720">think</span> <span m="727880">of</span> <span
  m="727930">them</span> <span m="728060">as</span> <span
  m="728170">words</span> <span m="728590">and</span> <span m="728690">we</span>
  <span m="728810">assume</span> <span m="729130">that</span> <span
  m="729270">we</span> <span m="729410">can</span> <span
  m="729590">manipulate</span> <span m="730070">those</span> <span
  m="730240">words.</span></p><p><span m="730500">In</span> <span
  m="730590">particular,</span> <span m="731110">given</span> <span
  m="731420">two</span> <span m="731600">numbers,</span> <span
  m="731970">we</span> <span m="732090">can</span> <span
  m="732200">compare</span> <span m="732590">them.</span> <span
  m="732840">Which</span> <span m="733040">is</span> <span
  m="733150">bigger?</span> <span m="733820">And</span> <span
  m="733930">so</span> <span m="734060">we</span> <span m="734160">can</span>
  <span m="734300">determine,</span> <span m="734780">is</span> <span
  m="735010">this</span> <span m="736140">cell</span> <span m="736630">in</span>
  <span m="736760">the</span> <span m="736830">matrix</span> <span
  m="737670">a</span> <span m="737750">peak</span> <span m="738220">by</span>
  <span m="738410">comparing</span> <span m="738860">it</span> <span
  m="738930">with</span> <span m="739030">its</span> <span
  m="739190">neighbors</span> <span m="739540">in</span> <span
  m="739630">constant</span> <span m="740070">time.</span></p><p><span
  m="740950">We</span> <span m="741060">didn't</span> <span
  m="741230">say</span> <span m="741380">why</span> <span m="742260">it</span>
  <span m="742370">was</span> <span m="742490">constant</span> <span
  m="742850">time</span> <span m="743070">to</span> <span m="743160">do</span>
  <span m="743290">that.</span> <span m="743650">But</span> <span
  m="743690">now</span> <span m="743850">you</span> <span m="743990">kind</span>
  <span m="744190">of</span> <span m="744280">know.</span> <span
  m="744520">If</span> <span m="744660">those</span> <span
  m="744860">things</span> <span m="745070">are</span> <span
  m="745170">all</span> <span m="745320">words</span> <span
  m="745790">and</span> <span m="746030">you</span> <span m="746160">can</span>
  <span m="746250">manipulate</span> <span m="746640">a</span> <span
  m="746690">constant number of</span> <span m="747170">words</span> <span
  m="747390">in</span> <span m="747470">constant</span> <span
  m="747840">time,</span> <span m="748410">you</span> <span
  m="748550">can</span> <span m="748710">tell</span> <span m="748960">whether
  a</span> <span m="749230">number is</span> <span m="749580">a</span> <span
  m="749670">peak in</span> <span m="750000">constant</span> <span
  m="750380">time.</span></p><p><span m="751680">Some</span> <span
  m="752220">things</span> <span m="752520">like</span> <span
  m="753120">w</span> <span m="753520">should</span> <span m="753730">be</span>
  <span m="753880">at</span> <span m="753970">least</span> <span
  m="755210">log</span> <span m="755940">the</span> <span m="757120">size</span>
  <span m="757510">of</span> <span m="757620">memory.</span> <span
  m="761160">Because</span> <span m="761830">my</span> <span
  m="761950">word</span> <span m="762450">should</span> <span
  m="762600">be</span> <span m="762700">able</span> <span m="762840">to</span>
  <span m="762940">specify</span> <span m="763570">an</span> <span
  m="763700">index</span> <span m="764330">into</span> <span
  m="764640">this</span> <span m="764950">array.</span> <span
  m="766920">And</span> <span m="767330">we</span> <span m="767510">might</span>
  <span m="767720">use</span> <span m="767850">that</span> <span
  m="768030">someday.</span> <span m="768400">But</span> <span
  m="768730">basically,</span> <span m="769110">don't</span> <span
  m="769280">worry</span> <span m="769430">about it.</span></p><p><span
  m="769730">Words</span> <span m="769990">are</span> <span
  m="770060">words.</span> <span m="770710">Words</span> <span
  m="770970">come</span> <span m="771450">in</span> <span m="771600">as</span>
  <span m="771710">inputs.</span> <span m="772080">You</span> <span
  m="772160">can</span> <span m="772260">manipulate</span> <span
  m="772750">them</span> <span m="773440">and</span> <span m="773590">you
  don't</span> <span m="773720">have</span> <span m="773870">to</span> <span
  m="773990">worry</span> <span m="774160">about</span> <span
  m="774450">it</span> <span m="776620">for</span> <span m="776720">the</span>
  <span m="776830">most</span> <span m="777100">part.</span></p><p><span
  m="778240">In</span> <span m="778610">unit</span> <span m="778980">four</span>
  <span m="779360">of</span> <span m="779420">this</span> <span
  m="779610">class,</span> <span m="779910">we're</span> <span
  m="780010">going</span> <span m="780100">to</span> <span
  m="780190">talk</span> <span m="780450">about,</span> <span
  m="780710">what</span> <span m="780930">if</span> <span m="781090">we</span>
  <span m="781190">have</span> <span m="781510">really</span> <span
  m="781860">giant</span> <span m="782350">integers</span> <span
  m="782860">that</span> <span m="782920">don't</span> <span
  m="783190">fit</span> <span m="783340">in</span> <span m="783460">a</span>
  <span m="783520">word?</span> <span m="784060">How</span> <span
  m="784240">do</span> <span m="784330">we</span> <span
  m="784460">manipulate</span> <span m="784950">them?</span> <span
  m="785070">How</span> <span m="785190">do</span> <span m="785270">we</span>
  <span m="785400">add</span> <span m="785630">them,</span> <span
  m="785740">multiply</span> <span m="786230">them?</span></p><p><span
  m="786830">So</span> <span m="786970">that's</span> <span
  m="787520">another</span> <span m="787770">topic.</span> <span
  m="788490">But</span> <span m="788790">most</span> <span m="789100">of</span>
  <span m="789140">this</span> <span m="789270">class,</span> <span
  m="790000">we'll</span> <span m="790130">just</span> <span
  m="790620">assume</span> <span m="790950">everything</span> <span
  m="791260">we're</span> <span m="791370">given</span> <span
  m="791640">is</span> <span m="791750">one</span> <span m="791950">word.</span>
  <span m="793030">And</span> <span m="793700">it's</span> <span
  m="793830">easy</span> <span m="794140">to</span> <span
  m="794380">compute</span> <span m="794690">on.</span></p><p><span
  m="796890">So</span> <span m="797100">this</span> <span m="797300">is</span>
  <span m="797400">a</span> <span m="797490">realistic</span> <span
  m="797960">model,</span> <span m="798440">more or</span> <span
  m="798630">less.</span> <span m="799420">And</span> <span
  m="799660">it's</span> <span m="799780">a</span> <span
  m="799820">powerful</span> <span m="800300">one.</span> <span
  m="801260">But</span> <span m="801400">a</span> <span m="801440">lot</span>
  <span m="801670">of the</span> <span m="801810">time,</span> <span
  m="804640">a</span> <span m="804730">lot</span> <span m="804920">of</span>
  <span m="805010">code</span> <span m="805230">just</span> <span
  m="805370">doesn't</span> <span m="805620">use</span> <span
  m="805780">arrays--</span> <span m="806230">doesn't</span> <span
  m="806460">need</span> <span m="806860">it.</span></p><p><span
  m="807190">Sometimes</span> <span m="807590">we</span> <span
  m="807660">need</span> <span m="807830">arrays,</span> <span
  m="808860">sometimes</span> <span m="809250">we</span> <span
  m="809360">don't.</span> <span m="810540">Sometimes</span> <span
  m="810910">you</span> <span m="810990">feel</span> <span
  m="811150">like</span> <span m="811290">a</span> <span m="811340">nut,</span>
  <span m="811605">sometimes</span> <span m="811870">you</span> <span
  m="812120">don't.</span> <span m="813920">So</span> <span
  m="814920">it's</span> <span m="815110">useful</span> <span
  m="815480">to</span> <span m="815560">think</span> <span
  m="815780">about</span> <span m="816220">somewhat</span> <span
  m="816520">more</span> <span m="816670">abstract</span> <span
  m="817160">models</span> <span m="818105">that</span> <span
  m="818400">are</span> <span m="818500">not</span> <span
  m="818700">quite</span> <span m="818910">as</span> <span
  m="819030">powerful</span> <span m="820576">but</span> <span
  m="820990">offer</span> <span m="821500">a</span> <span
  m="821750">simpler</span> <span m="822120">way</span> <span
  m="822230">of</span> <span m="822310">thinking</span> <span
  m="822580">about</span> <span m="822850">things.</span> <span
  m="824360">For</span> <span m="824470">example,</span> <span
  m="825050">in</span> <span m="825200">this</span> <span
  m="825360">model</span> <span m="825670">there's</span> <span
  m="825830">no</span> <span m="825980">dynamic</span> <span
  m="826430">memory</span> <span m="826730">allocation.</span></p><p><span
  m="828060">You</span> <span m="828190">probably</span> <span
  m="828500">know</span> <span m="828680">you</span> <span
  m="828830">could</span> <span m="828960">implement</span> <span
  m="829350">dynamic</span> <span m="829740">memory</span> <span
  m="830050">allocation</span> <span m="830550">because</span> <span
  m="830940">real</span> <span m="831160">computers</span> <span
  m="831550">do</span> <span m="831730">it.</span> <span m="832590">But</span>
  <span m="833340">it's</span> <span m="833520">nice</span> <span
  m="833710">to</span> <span m="833810">think</span> <span
  m="834000">about</span> <span m="834210">a</span> <span
  m="834250">model</span> <span m="834520">where</span> <span
  m="834620">that's</span> <span m="834820">taken</span> <span
  m="835100">care</span> <span m="835390">of</span> <span m="835780">for</span>
  <span m="836090">you.</span> <span m="836620">It's</span> <span
  m="836770">kind</span> <span m="836930">of</span> <span m="836990">like</span>
  <span m="837180">a</span> <span m="837220">higher</span> <span
  m="837550">level</span> <span m="838430">programming</span> <span
  m="838870">abstraction.</span></p><p><span m="840010">So</span> <span
  m="840970">the</span> <span m="841160">one</span> <span m="841840">is</span>
  <span m="841990">useful in this</span> <span m="842470">class is the</span>
  <span m="842910">pointer</span> <span m="843260">machine.</span> <span
  m="843580">This</span> <span m="843730">basically</span> <span
  m="844120">corresponds</span> <span m="844580">to</span> <span
  m="844660">object</span> <span m="845100">oriented</span> <span
  m="845260">programming</span> <span m="846190">in</span> <span
  m="846330">a</span> <span m="846390">simple,</span> <span
  m="847380">very</span> <span m="847620">simple</span> <span
  m="847920">version.</span> <span m="850020">So</span> <span
  m="850290">we</span> <span m="850420">have</span> <span
  m="850790">dynamically</span> <span m="851620">allocated</span> <span
  m="852210">objects.</span> <span m="861410">And</span> <span
  m="861760">an</span> <span m="861920">object</span> <span
  m="867340">has</span> <span m="868530">a</span> <span
  m="868610">constant</span> <span m="869180">number</span> <span
  m="869590">of</span> <span m="870020">fields.</span></p><p><span
  m="874650">And</span> <span m="874710">a</span> <span m="874760">field</span>
  <span m="879120">is</span> <span m="879340">going</span> <span
  m="879500">to</span> <span m="879570">be</span> <span m="880360">either
  a</span> <span m="880750">word--</span> <span m="883790">so</span> <span
  m="883920">you</span> <span m="884040">can</span> <span
  m="884160">think</span> <span m="884350">of</span> <span
  m="884450">this</span> <span m="884780">as,</span> <span m="885980">for</span>
  <span m="886050">example,</span> <span m="886390">storing</span> <span
  m="886800">an</span> <span m="886900">integer,</span> <span
  m="887840">one</span> <span m="888020">of</span> <span m="888100">the</span>
  <span m="888210">input</span> <span m="888480">objects</span> <span
  m="889470">or</span> <span m="889580">something</span> <span
  m="890040">you</span> <span m="890240">computed</span> <span
  m="890680">on</span> <span m="890850">it</span> <span m="890970">or a</span>
  <span m="891160">counter,</span> <span m="892120">all</span> <span
  m="892250">these</span> <span m="892380">sorts</span> <span
  m="892600">of</span> <span m="892690">things--</span> <span
  m="894860">or</span> <span m="895760">a</span> <span
  m="895880">pointer.</span> <span m="897570">And</span> <span
  m="897660">that's</span> <span m="897870">where</span> <span
  m="899210">pointer</span> <span m="899490">machine</span> <span
  m="900280">gets</span> <span m="900510">its</span> <span
  m="900650">name.</span> <span m="902370">A</span> <span
  m="902480">pointer</span> <span m="903290">is</span> <span
  m="904930">something</span> <span m="905330">that</span> <span
  m="905560">points</span> <span m="905870">to</span> <span
  m="906100">another</span> <span m="906370">object</span> <span
  m="909310">or</span> <span m="909790">has</span> <span m="910070">a</span>
  <span m="910110">special</span> <span m="910460">value</span> <span
  m="911560">null,</span> <span m="913210">also</span> <span
  m="913510">known</span> <span m="913720">as</span> <span
  m="913840">nil,</span> <span m="914470">also</span> <span
  m="914770">known</span> <span m="915020">as</span> <span m="915230">none
  in</span> <span m="915560">Python.</span></p><p><span m="920430">OK,</span>
  <span m="921100">how</span> <span m="921250">many</span> <span
  m="921390">people have</span> <span m="921690">heard</span> <span
  m="921860">about</span> <span m="922250">pointers</span> <span
  m="922520">before?</span> <span m="923860">Who</span> <span
  m="923970">hasn't?</span> <span m="925950">Willing</span> <span
  m="926120">to</span> <span m="926190">admit it?</span></p><p><span
  m="926330">OK,</span> <span m="926710">only</span> <span m="927030">a
  few.</span> <span m="927230">That's</span> <span m="927480">good.</span> <span
  m="927810">You</span> <span m="928230">should</span> <span
  m="928460">have</span> <span m="928550">seen</span> <span
  m="928730">pointers.</span></p><p><span m="929020">You</span> <span
  m="929110">may</span> <span m="929270">have</span> <span
  m="929500">heard</span> <span m="929700">them</span> <span
  m="929880">called</span> <span m="930100">references.</span> <span
  m="931080">Modern</span> <span m="931530">languages</span> <span
  m="931950">these</span> <span m="932120">days</span> <span
  m="932360">don't</span> <span m="932560">call</span> <span
  m="932750">them</span> <span m="932870">pointers</span> <span
  m="933700">because</span> <span m="933970">pointers</span> <span
  m="934290">are</span> <span m="934370">scary.</span> <span
  m="935690">But</span> <span m="936940">there's</span> <span
  m="937230">a</span> <span m="937270">very</span> <span
  m="937530">subtle</span> <span m="937800">difference</span> <span
  m="938100">between</span> <span m="938270">them.</span></p><p><span
  m="938390">And</span> <span m="938450">this</span> <span
  m="938600">model</span> <span m="938910">actually</span> <span
  m="939210">really</span> <span m="939490">is</span> <span
  m="940180">references.</span> <span m="941030">But</span> <span
  m="941360">for</span> <span m="941470">whatever</span> <span
  m="941760">reason, it's</span> <span m="942020">called</span> <span
  m="942180">a</span> <span m="942270">pointer</span> <span
  m="942600">machine.</span> <span m="943285">It</span> <span
  m="943570">doesn't</span> <span m="943820">matter.</span></p><p><span
  m="945350">The</span> <span m="945450">point</span> <span
  m="945560">is,</span> <span m="946240">you've</span> <span
  m="946380">seem</span> <span m="946610">linked</span> <span
  m="946840">lists</span> <span m="947450">I</span> <span
  m="947856">hope.</span> <span m="949480">And</span> <span
  m="949930">linked</span> <span m="950160">lists</span> <span
  m="951690">have</span> <span m="951860">a</span> <span m="951910">bunch</span>
  <span m="952130">of</span> <span m="953060">fields</span> <span
  m="953470">in</span> <span m="953550">each</span> <span
  m="953730">node.</span> <span m="954240">Maybe</span> <span
  m="954480">you've</span> <span m="954620">got</span> <span m="955060">a</span>
  <span m="955160">pointer</span> <span m="955500">to</span> <span
  m="955610">the</span> <span m="955710">previous</span> <span
  m="956080">element,</span> <span m="956490">a</span> <span
  m="956570">pointer</span> <span m="956890">to</span> <span
  m="957000">the</span> <span m="957100">next</span> <span
  m="957370">element,</span> <span m="958150">and</span> <span
  m="958280">some</span> <span m="958440">value.</span> <span
  m="960820">So</span> <span m="960890">here's</span> <span m="961170">a</span>
  <span m="961210">very</span> <span m="961500">simple</span> <span
  m="961850">linked</span> <span m="962060">list.</span> <span
  m="964550">This</span> <span m="964710">is</span> <span m="964840">what</span>
  <span m="965670">you'd</span> <span m="965800">call</span> <span
  m="966030">a</span> <span m="966080">doubly</span> <span
  m="966400">linked</span> <span m="966630">list</span> <span
  m="966830">because</span> <span m="966990">it</span> <span
  m="967050">has</span> <span m="967290">previous</span> <span
  m="967660">and</span> <span m="967920">next</span> <span
  m="968170">pointers.</span></p><p><span m="970050">So</span> <span
  m="970330">the</span> <span m="970420">next</span> <span
  m="970710">pointer</span> <span m="971500">points</span> <span
  m="971690">to</span> <span m="971750">this</span> <span
  m="971970">node.</span> <span m="972390">The</span> <span
  m="972640">previous</span> <span m="973000">pointer</span> <span
  m="973360">points</span> <span m="973730">to</span> <span
  m="973870">this</span> <span m="974140">node.</span> <span
  m="975110">Next</span> <span m="975330">pointer</span> <span
  m="975760">points</span> <span m="976040">to</span> <span
  m="976180">null.</span></p><p><span m="977075">The</span> <span
  m="977400">previous</span> <span m="977710">pointer</span> <span
  m="978110">points</span> <span m="978400">to</span> <span
  m="978530">null,</span> <span m="979310">let's</span> <span
  m="979625">say.</span> <span m="979940">So</span> <span
  m="980080">that's</span> <span m="980270">a</span> <span m="980340">two</span>
  <span m="980550">node</span> <span m="980880">doubly</span> <span
  m="981200">linked</span> <span m="981430">list.</span> <span
  m="981960">You</span> <span m="982050">presume we</span> <span
  m="982410">have</span> <span m="982590">a</span> <span
  m="982650">pointer</span> <span m="983170">to</span> <span
  m="983280">the</span> <span m="983370">head</span> <span m="983650">of</span>
  <span m="983730">the</span> <span m="983820">list,</span> <span
  m="984180">maybe</span> <span m="984410">a</span> <span
  m="984470">pointer</span> <span m="984760">to</span> <span
  m="984870">the</span> <span m="984990">tail</span> <span m="985230">of</span>
  <span m="985360">list,</span> <span m="986170">whatever.</span></p><p><span
  m="986900">So</span> <span m="987040">this</span> <span m="987340">is</span>
  <span m="988260">a</span> <span m="988340">structure</span> <span
  m="988710">in</span> <span m="988760">the</span> <span
  m="988850">pointer</span> <span m="989090">machine.</span> <span
  m="989395">It's</span> <span m="989700">a</span> <span m="989800">data</span>
  <span m="990020">structure.</span> <span m="991380">In</span> <span
  m="991650">Python,</span> <span m="992080">you</span> <span
  m="992170">might</span> <span m="992330">call</span> <span
  m="992490">this</span> <span m="992610">a</span> <span m="992660">named</span>
  <span m="992880">tuple,</span> <span m="993790">or it's</span> <span
  m="994160">just</span> <span m="994420">an</span> <span
  m="994510">object</span> <span m="995460">with</span> <span
  m="995770">three</span> <span m="997470">attributes,</span> <span m="998340">I
  guess,</span> <span m="998530">they're</span> <span m="998670">called</span>
  <span m="998810">in</span> <span m="998910">Python.</span></p><p><span
  m="1000090">So</span> <span m="1000420">here</span> <span
  m="1000670">we</span> <span m="1000790">have</span> <span
  m="1001790">the</span> <span m="1002530">value.</span> <span
  m="1003340">That's</span> <span m="1003610">a</span> <span
  m="1003670">word</span> <span m="1004400">like</span> <span
  m="1004560">an</span> <span m="1004630">integer.</span> <span
  m="1005450">And</span> <span m="1005620">then</span> <span
  m="1005810">some</span> <span m="1006070">things</span> <span
  m="1006370">can</span> <span m="1006530">be</span> <span
  m="1006680">pointers</span> <span m="1007160">that point to</span> <span
  m="1007530">other</span> <span m="1007780">nodes.</span></p><p><span
  m="1008420">And</span> <span m="1008600">you</span> <span
  m="1008710">can</span> <span m="1008830">create</span> <span
  m="1009120">a</span> <span m="1009180">new</span> <span
  m="1009310">node.</span> <span m="1009730">You</span> <span
  m="1009830">can</span> <span m="1009970">destroy a</span> <span
  m="1010040">node.</span> <span m="1010720">That's the</span> <span
  m="1011100">dynamic</span> <span m="1012000">memory</span> <span
  m="1012260">allocation.</span></p><p><span m="1014310">In</span> <span
  m="1014450">this</span> <span m="1014660">model,</span> <span
  m="1015990">yeah,</span> <span m="1016200">pointers</span> <span
  m="1016550">are</span> <span m="1016620">pointers.</span> <span
  m="1016920">You</span> <span m="1017010">can't</span> <span
  m="1017270">touch</span> <span m="1017520">them.</span> <span
  m="1018220">Now,</span> <span m="1018390">you</span> <span
  m="1018600">can</span> <span m="1018770">implement</span> <span
  m="1019290">this</span> <span m="1019450">model</span> <span
  m="1020190">in</span> <span m="1020360">a</span> <span
  m="1020420">random</span> <span m="1020720">access</span> <span
  m="1021160">machine.</span></p><p><span m="1021900">A</span> <span
  m="1021980">pointer</span> <span m="1022450">becomes</span> <span
  m="1022930">an</span> <span m="1023070">index</span> <span
  m="1023780">into</span> <span m="1024030">this</span> <span
  m="1024250">giant</span> <span m="1024619">table.</span> <span
  m="1026069">And</span> <span m="1026440">that's</span> <span
  m="1026680">more</span> <span m="1026900">like the</span> <span
  m="1027240">pointers</span> <span m="1027619">in</span> <span
  m="1027760">C</span> <span m="1028069">if</span> <span
  m="1028190">you've</span> <span m="1028349">ever</span> <span
  m="1028550">written</span> <span m="1028750">C</span> <span
  m="1028960">programs.</span> <span m="1029970">Because</span> <span
  m="1030200">then</span> <span m="1030380">you</span> <span
  m="1030490">can</span> <span m="1030640">take</span> <span
  m="1030819">a</span> <span m="1030880">pointer</span> <span
  m="1031220">and</span> <span m="1031280">you</span> <span
  m="1031400">can</span> <span m="1031550">add</span> <span
  m="1031750">one</span> <span m="1031980">to</span> <span m="1032359">it and
  go</span> <span m="1032500">to</span> <span m="1032569">the</span> <span
  m="1032700">next</span> <span m="1032970">thing</span> <span
  m="1033150">after</span> <span m="1033420">that.</span></p><p><span
  m="1033869">In</span> <span m="1033990">this</span> <span
  m="1034170">model,</span> <span m="1034530">you</span> <span
  m="1034630">can</span> <span m="1034750">just</span> <span
  m="1034910">follow</span> <span m="1035180">a</span> <span
  m="1035250">pointer.</span> <span m="1035630">That's</span> <span
  m="1035829">all</span> <span m="1035940">you</span> <span
  m="1036069">can</span> <span m="1036180">do.</span> <span
  m="1037170">OK,</span> <span m="1037300">following</span> <span
  m="1037720">a</span> <span m="1037780">pointer</span> <span
  m="1038040">costs</span> <span m="1038280">constant</span> <span
  m="1038630">time.</span> <span m="1038890">Changing</span> <span
  m="1039250">one</span> <span m="1039339">of</span> <span
  m="1039380">these</span> <span m="1039550">fields</span> <span
  m="1039829">costs</span> <span m="1040130">constant</span> <span
  m="1040490">time.</span> <span m="1041329">All</span> <span
  m="1041930">the</span> <span m="1042030">usual</span> <span
  m="1042400">things</span> <span m="1042589">you</span> <span
  m="1042690">might</span> <span m="1042869">imagine</span> <span
  m="1043240">doing</span> <span m="1043560">to</span> <span
  m="1043690">these</span> <span m="1044480">objects</span> <span
  m="1044930">take</span> <span m="1045079">constant</span> <span
  m="1045500">time.</span></p><p><span m="1046609">So</span> <span
  m="1046760">it's</span> <span m="1046880">actually</span> <span
  m="1047329">a</span> <span m="1048359">weaker</span> <span
  m="1049000">model</span> <span m="1049390">than</span> <span
  m="1049520">this</span> <span m="1049710">one.</span> <span
  m="1049920">Because</span> <span m="1050210">you</span> <span
  m="1050320">could</span> <span m="1050470">implement</span> <span
  m="1050940">a</span> <span m="1051020">pointer</span> <span
  m="1051300">machine</span> <span m="1051630">with</span> <span
  m="1051770">a</span> <span m="1051820">random</span> <span
  m="1052090">access</span> <span m="1052510">machine.</span> <span
  m="1053950">But</span> <span m="1054100">it</span> <span
  m="1054210">offers</span> <span m="1054550">a</span> <span
  m="1054620">different</span> <span m="1054890">way</span> <span
  m="1054990">of</span> <span m="1055080">thinking.</span> <span
  m="1055490">A</span> <span m="1055590">lot</span> <span m="1055670">of</span>
  <span m="1055750">data</span> <span m="1055950">structures</span> <span
  m="1056310">are</span> <span m="1056370">built</span> <span
  m="1056610">this</span> <span m="1056800">way.</span></p><p><span
  m="1059950">Cool.</span> <span m="1062770">So</span> <span
  m="1062960">that's</span> <span m="1063300">the</span> <span
  m="1063430">theory</span> <span m="1063770">side.</span> <span
  m="1065130">What</span> <span m="1065340">I'd</span> <span
  m="1065460">like</span> <span m="1065600">to</span> <span
  m="1065710">talk</span> <span m="1065970">about</span> <span
  m="1066200">next</span> <span m="1066610">is</span> <span
  m="1067720">actually</span> <span m="1068190">in</span> <span
  m="1068310">Python,</span> <span m="1069510">what's</span> <span
  m="1069810">a</span> <span m="1070120">reasonable</span> <span
  m="1070590">model of</span> <span m="1070990">what's</span> <span
  m="1071220">going</span> <span m="1071500">on?</span></p><p><span
  m="1073520">So</span> <span m="1074130">these</span> <span
  m="1074390">are</span> <span m="1074560">old</span> <span
  m="1074780">models.</span> <span m="1075160">This</span> <span
  m="1075330">goes</span> <span m="1075520">back</span> <span
  m="1075750">to</span> <span m="1075850">the</span> <span
  m="1075970">'80s.</span> <span m="1076970">This</span> <span
  m="1077130">one</span> <span m="1077310">probably</span> <span
  m="1077960">'80s</span> <span m="1078320">or</span> <span
  m="1078390">'70s.</span></p><p><span m="1079470">So</span> <span
  m="1079560">they've</span> <span m="1079670">been</span> <span
  m="1079810">around</span> <span m="1080070">a</span> <span
  m="1080130">long</span> <span m="1080350">time.</span> <span
  m="1080770">People have</span> <span m="1080940">used</span> <span
  m="1081150">them</span> <span m="1081730">forever.</span> <span
  m="1082120">Python</span> <span m="1082480">is</span> <span
  m="1082600">obviously</span> <span m="1082900">much</span> <span
  m="1083120">more</span> <span m="1083280">recent,</span> <span
  m="1084375">at</span> <span m="1084630">least</span> <span
  m="1084890">modern</span> <span m="1085200">versions</span> <span
  m="1085520">of</span> <span m="1085610">Python.</span></p><p><span
  m="1091450">And</span> <span m="1091670">it's</span> <span
  m="1092370">the</span> <span m="1093040">model</span> <span
  m="1093460">of</span> <span m="1093570">computation</span> <span
  m="1094200">in</span> <span m="1094280">some</span> <span
  m="1094490">sense</span> <span m="1094790">that</span> <span
  m="1094920">we</span> <span m="1095060">use</span> <span m="1095250">in</span>
  <span m="1095360">this</span> <span m="1095500">class.</span> <span
  m="1096300">Because</span> <span m="1096470">we're</span> <span
  m="1096580">implementing</span> <span m="1097000">everything</span> <span
  m="1097340">in</span> <span m="1097410">Python.</span> <span
  m="1098200">And</span> <span m="1098610">Python</span> <span
  m="1099060">offers</span> <span m="1099510">both</span> <span
  m="1100030">a</span> <span m="1100080">random</span> <span
  m="1100440">access</span> <span m="1100740">machine</span> <span
  m="1101080">perspective</span> <span m="1101610">because</span> <span
  m="1101890">it</span> <span m="1101960">has</span> <span
  m="1102170">arrays,</span> <span m="1103120">and</span> <span
  m="1103320">it</span> <span m="1103420">offers</span> <span
  m="1103760">a</span> <span m="1103830">pointer</span> <span
  m="1104140">machine</span> <span m="1104430">perspective</span> <span
  m="1105000">because</span> <span m="1105320">it</span> <span
  m="1105400">has</span> <span m="1106030">references,</span> <span
  m="1106780">because</span> <span m="1107170">it</span> <span
  m="1107290">has</span> <span m="1107500">pointers.</span></p><p><span
  m="1108600">So</span> <span m="1108760">you</span> <span
  m="1108930">can</span> <span m="1109070">do</span> <span
  m="1109350">either</span> <span m="1109640">one.</span> <span
  m="1111150">But</span> <span m="1111290">it</span> <span
  m="1111360">also</span> <span m="1111690">has</span> <span
  m="1111850">a</span> <span m="1111910">lot</span> <span m="1112310">of</span>
  <span m="1112400">operations.</span> <span m="1112890">It</span> <span
  m="1113380">doesn't</span> <span m="1113740">just</span> <span
  m="1114060">have</span> <span m="1115010">load</span> <span
  m="1115420">and</span> <span m="1115530">store</span> <span
  m="1116740">and</span> <span m="1116940">follow</span> <span
  m="1117300">pointer.</span></p><p><span m="1118180">It's</span> <span
  m="1118390">got</span> <span m="1118610">things</span> <span
  m="1118870">like</span> <span m="1119240">sort</span> <span
  m="1120180">and</span> <span m="1121970">append</span> <span
  m="1123030">and</span> <span m="1123370">concatenation</span> <span
  m="1123720">of</span> <span m="1124070">two</span> <span
  m="1124230">lists</span> <span m="1124730">and</span> <span
  m="1125390">lots</span> <span m="1125690">of</span> <span
  m="1125770">things.</span> <span m="1126590">And</span> <span
  m="1126770">each</span> <span m="1126950">of</span> <span
  m="1127020">those</span> <span m="1127200">has</span> <span
  m="1127390">a</span> <span m="1127460">cost</span> <span
  m="1127780">associated</span> <span m="1128340">with</span> <span
  m="1128500">them.</span> <span m="1128940">So</span> <span
  m="1129090">whereas</span> <span m="1129350">the</span> <span
  m="1129450">random</span> <span m="1129720">access</span> <span
  m="1130060">machine</span> <span m="1130340">and</span> <span
  m="1130410">pointer</span> <span m="1130650">machine,</span> <span
  m="1130990">they're</span> <span m="1131120">theoretical</span> <span
  m="1131630">models.</span> <span m="1131990">They're</span> <span
  m="1132040">designed</span> <span m="1132400">to</span> <span
  m="1132450">be</span> <span m="1132570">super</span> <span
  m="1132930">simple.</span></p><p><span m="1133710">So</span> <span
  m="1133860">it's</span> <span m="1134000">clear</span> <span
  m="1134260">that</span> <span m="1134420">everything</span> <span
  m="1134800">you</span> <span m="1134910">do</span> <span
  m="1135110">takes</span> <span m="1135370">constant</span> <span
  m="1135760">time.</span> <span m="1138230">In</span> <span
  m="1138360">Python,</span> <span m="1139230">some</span> <span
  m="1139520">of</span> <span m="1139560">the</span> <span
  m="1139680">operations</span> <span m="1140170">you</span> <span
  m="1140310">can</span> <span m="1140440">do</span> <span
  m="1141000">take</span> <span m="1141460">a</span> <span
  m="1141540">lot</span> <span m="1141800">of</span> <span
  m="1141900">time.</span> <span m="1143150">Some of the</span> <span
  m="1143510">operations</span> <span m="1143930">in</span> <span
  m="1144000">Python</span> <span m="1144330">take</span> <span
  m="1144550">exponential</span> <span m="1145200">time</span> <span
  m="1145460">to</span> <span m="1145560">do.</span></p><p><span
  m="1146250">And</span> <span m="1146360">you've</span> <span
  m="1146520">got</span> <span m="1146720">to</span> <span
  m="1146790">know</span> <span m="1147020">when</span> <span
  m="1147140">you're</span> <span m="1147280">writing</span> <span
  m="1147550">your</span> <span m="1147700">algorithms</span> <span
  m="1148150">down</span> <span m="1148950">either</span> <span
  m="1149230">thinking</span> <span m="1149630">in</span> <span
  m="1149700">a</span> <span m="1149760">Python</span> <span
  m="1150120">model</span> <span m="1150480">or</span> <span
  m="1150600">your</span> <span m="1150740">implementing</span> <span
  m="1151260">your</span> <span m="1151370">algorithms</span> <span
  m="1151790">in</span> <span m="1152270">actual</span> <span
  m="1152670">Python,</span> <span m="1153950">which</span> <span
  m="1154180">operations</span> <span m="1154680">are</span> <span
  m="1154750">fast</span> <span m="1155120">and</span> <span
  m="1155200">which</span> <span m="1155370">are</span> <span
  m="1155460">slow.</span> <span m="1156260">And</span> <span
  m="1156270">that's</span> <span m="1156460">what</span> <span
  m="1156590">I'd</span> <span m="1156660">like</span> <span
  m="1156850">to</span> <span m="1156940">spend</span> <span
  m="1157250">the</span> <span m="1157330">next</span> <span
  m="1158190">few</span> <span m="1158400">minutes</span> <span
  m="1158710">on.</span> <span m="1159950">There's</span> <span
  m="1160100">a</span> <span m="1160160">lot</span> <span m="1160320">of</span>
  <span m="1160390">operations.</span></p><p><span m="1160870">I'm</span> <span
  m="1160950">not</span> <span m="1161120">going</span> <span
  m="1161220">to</span> <span m="1161380">cover</span> <span
  m="1161670">all</span> <span m="1161900">of</span> <span
  m="1161970">them.</span> <span m="1163620">But</span> <span
  m="1165690">we'll</span> <span m="1165800">cover</span> <span
  m="1166070">more</span> <span m="1166380">in</span> <span
  m="1166420">recitation.</span> <span m="1167280">And</span> <span
  m="1167460">there's</span> <span m="1167600">a</span> <span
  m="1167640">whole</span> <span m="1167790">bunch</span> <span
  m="1168290">in</span> <span m="1168460">my</span> <span
  m="1168580">notes.</span> <span m="1169130">I</span> <span
  m="1169500">won't</span> <span m="1169660">get to</span> <span
  m="1169840">all</span> <span m="1170040">of</span> <span
  m="1170100">them.</span></p><p><span m="1171060">So</span> <span
  m="1171430">in</span> <span m="1171600">Python,</span> <span
  m="1171990">you</span> <span m="1172240">can</span> <span
  m="1173130">do</span> <span m="1174030">random</span> <span
  m="1174360">access</span> <span m="1174690">style</span> <span
  m="1175030">things.</span> <span m="1176140">In</span> <span
  m="1176290">Python,</span> <span m="1176790">arrays</span> <span
  m="1177150">are</span> <span m="1177230">called</span> <span
  m="1177490">lists,</span> <span m="1178540">which</span> <span
  m="1178790">is</span> <span m="1178880">super</span> <span
  m="1179200">confusing.</span> <span m="1180230">But</span> <span
  m="1180590">there</span> <span m="1180740">you</span> <span
  m="1180800">go.</span></p><p><span m="1182240">A</span> <span
  m="1182350">list</span> <span m="1183090">in</span> <span
  m="1183260">Python</span> <span m="1184230">is</span> <span
  m="1184410">an</span> <span m="1184500">array</span> <span
  m="1185220">in</span> <span m="1185880">real</span> <span
  m="1186130">world.</span> <span m="1188110">It's</span> <span
  m="1188680">a</span> <span m="1188740">super</span> <span
  m="1189260">cool</span> <span m="1189530">array,</span> <span
  m="1189980">of</span> <span m="1190110">course?</span> <span
  m="1191285">And</span> <span m="1191570">you</span> <span
  m="1191680">can</span> <span m="1191840">think</span> <span
  m="1192070">of</span> <span m="1192160">it</span> <span m="1192230">as</span>
  <span m="1192340">a</span> <span m="1192410">list.</span> <span
  m="1192750">But</span> <span m="1193080">in</span> <span
  m="1193540">terms</span> <span m="1193770">implementation,</span> <span
  m="1194440">it's</span> <span m="1194570">implemented</span> <span
  m="1195050">as</span> <span m="1195160">an</span> <span
  m="1195230">array.</span> <span m="1195530">Question?</span></p><p><span
  m="1195960">AUDIENCE:</span> <span m="1196122">I</span> <span
  m="1196284">thought</span> <span m="1196446">that</span> <span
  m="1196932">[INAUDIBLE].</span></p><p><span m="1198880">PROFESSOR: You</span>
  <span m="1199090">thought</span> <span m="1199200">Python</span> <span
  m="1199550">links</span> <span m="1199900">lists</span> <span
  m="1200240">were</span> <span m="1200580">linked</span> <span
  m="1200810">lists.</span> <span m="1201160">That's</span> <span
  m="1201320">why</span> <span m="1201490">it's</span> <span
  m="1201610">so</span> <span m="1201760">confusing.</span> <span
  m="1202360">In</span> <span m="1202440">fact,</span> <span
  m="1202710">they</span> <span m="1202850">are</span> <span
  m="1202930">not.</span></p><p><span m="1204280">In,</span> <span
  m="1204550">say,</span> <span m="1205090">scheme,</span> <span
  m="1205830">back</span> <span m="1206030">in</span> <span
  m="1206080">the</span> <span m="1206170">days</span> <span
  m="1206410">when</span> <span m="1206520">we</span> <span
  m="1206640">taught</span> <span m="1206880">scheme,</span> <span
  m="1207630">lists</span> <span m="1208030">are</span> <span
  m="1208290">linked</span> <span m="1208540">lists.</span> <span
  m="1210040">And</span> <span m="1210290">it's</span> <span
  m="1210430">very</span> <span m="1210640">different.</span> <span
  m="1211580">So</span> <span m="1211780">when</span> <span
  m="1212020">you</span> <span m="1212360">do--</span> <span
  m="1212890">I'll</span> <span m="1213340">give an</span> <span
  m="1213640">operation</span> <span m="1214130">here.</span></p><p><span
  m="1214530">You</span> <span m="1214620">have</span> <span
  m="1214800">a</span> <span m="1214850">list</span> <span m="1215110">L,</span>
  <span m="1216050">and</span> <span m="1216200">you</span> <span
  m="1216300">do</span> <span m="1216450">something</span> <span
  m="1216840">like</span> <span m="1217040">this.</span> <span
  m="1221180">L</span> <span m="1221450">is</span> <span m="1221540">a</span>
  <span m="1221610">list</span> <span m="1221930">object.</span> <span
  m="1223390">This</span> <span m="1223630">takes</span> <span
  m="1224750">constant</span> <span m="1225270">time.</span></p><p><span
  m="1225850">In</span> <span m="1225970">a</span> <span
  m="1226020">linked</span> <span m="1226270">list,</span> <span
  m="1226550">it</span> <span m="1226610">would</span> <span
  m="1226730">take</span> <span m="1226910">linear</span> <span
  m="1227240">time.</span> <span m="1227480">Because</span> <span
  m="1227610">we've</span> <span m="1227730">got</span> <span
  m="1227860">a</span> <span m="1227920">scan</span> <span m="1228410">to</span>
  <span m="1228490">position</span> <span m="1228860">I,</span> <span
  m="1229380">scan</span> <span m="1229690">to</span> <span
  m="1229770">position</span> <span m="1230160">J,</span> <span
  m="1230770">add</span> <span m="1230980">5,</span> <span
  m="1231530">and</span> <span m="1231740">store.</span> <span
  m="1233000">But</span> <span m="1233330">conveniently</span> <span
  m="1233830">in</span> <span m="1233940">Python,</span> <span
  m="1234490">this</span> <span m="1234700">takes</span> <span
  m="1235480">constant</span> <span m="1235900">time.</span> <span
  m="1238030">And</span> <span m="1238120">that's</span> <span
  m="1238300">important</span> <span m="1238670">to</span> <span
  m="1238780">know.</span></p><p><span m="1239920">I</span> <span
  m="1240010">know</span> <span m="1240250">that the</span> <span
  m="1240400">terminology</span> <span m="1240970">is</span> <span
  m="1241070">super</span> <span m="1241445">confusing.</span> <span
  m="1241820">But</span> <span m="1243880">blame</span> <span
  m="1244980">the</span> <span m="1245610">benevolent</span> <span
  m="1246100">dictator</span> <span m="1246470">for</span> <span
  m="1246600">life.</span> <span m="1249140">On</span> <span
  m="1249200">the</span> <span m="1249330">other</span> <span
  m="1249500">hand,</span> <span m="1252870">you</span> <span
  m="1253000">can</span> <span m="1253120">do</span> <span
  m="1253330">style</span> <span m="1253690">two,</span> <span
  m="1254430">pointer</span> <span m="1254670">machine,</span> <span
  m="1255580">using</span> <span m="1256100">object</span> <span
  m="1256460">oriented</span> <span m="1256720">programming,</span> <span
  m="1257600">obviously.</span></p><p><span m="1261120">I'll</span> <span
  m="1261270">just</span> <span m="1261460">mention</span> <span
  m="1262130">that</span> <span m="1264690">I'm</span> <span
  m="1264860">not</span> <span m="1265020">really</span> <span
  m="1265210">worrying</span> <span m="1265500">about</span> <span
  m="1265730">methods</span> <span m="1266120">here.</span> <span
  m="1267530">Because</span> <span m="1267670">methods</span> <span
  m="1268070">are</span> <span m="1268360">just</span> <span
  m="1268770">sort</span> <span m="1268920">of</span> <span m="1269020">a</span>
  <span m="1269490">way</span> <span m="1269660">of</span> <span
  m="1270400">thinking</span> <span m="1271080">about</span> <span
  m="1271330">things,</span> <span m="1271640">not</span> <span
  m="1272240">super</span> <span m="1272490">important</span> <span
  m="1272920">from</span> <span m="1273150">a</span> <span
  m="1273500">cost</span> <span m="1273780">standpoint.</span> <span
  m="1274870">If</span> <span m="1275010">your</span> <span
  m="1275120">object</span> <span m="1275490">has</span> <span
  m="1275640">a</span> <span m="1275710">constant</span> <span
  m="1276210">number</span> <span m="1276450">of</span> <span
  m="1276520">attributes--</span> <span m="1277150">it</span> <span
  m="1277210">can't</span> <span m="1277430">have</span> <span
  m="1277660">like</span> <span m="1277830">a</span> <span
  m="1277890">million</span> <span m="1278230">attributes</span> <span
  m="1279300">or</span> <span m="1279400">can't</span> <span
  m="1279580">have</span> <span m="1279760">n</span> <span
  m="1279960">executes--</span> <span m="1280950">then</span> <span
  m="1281120">it</span> <span m="1281250">fits into</span> <span
  m="1281420">this</span> <span m="1281770">pointer</span> <span
  m="1282030">machine</span> <span m="1282540">model.</span></p><p><span
  m="1282890">So</span> <span m="1283030">if</span> <span m="1283170">you</span>
  <span m="1283250">have</span> <span m="1283680">an</span> <span
  m="1283770">object</span> <span m="1284160">that</span> <span
  m="1284280">only</span> <span m="1284450">has</span> <span
  m="1284660">like</span> <span m="1284810">three</span> <span
  m="1285030">things</span> <span m="1285390">or</span> <span
  m="1285460">10</span> <span m="1285710">things</span> <span
  m="1286030">or</span> <span m="1286060">whatever,</span> <span
  m="1287170">that's</span> <span m="1287460">a</span> <span
  m="1287550">pointer</span> <span m="1287790">machine.</span> <span
  m="1288120">You</span> <span m="1288230">can</span> <span
  m="1288390">think</span> <span m="1288610">of</span> <span
  m="1288720">manipulating</span> <span m="1289200">that</span> <span
  m="1289350">object</span> <span m="1289690">as</span> <span
  m="1289780">taking</span> <span m="1290050">constant</span> <span
  m="1290420">time.</span> <span m="1291350">If</span> <span
  m="1291530">you</span> <span m="1292140">are</span> <span
  m="1292615">screwing</span> <span m="1292930">around</span> <span
  m="1293220">the</span> <span m="1293340">object's</span> <span
  m="1293690">dictionary</span> <span m="1293955">and</span> <span
  m="1294220">doing</span> <span m="1294520">lots</span> <span
  m="1294750">of</span> <span m="1294810">crazy</span> <span
  m="1295110">things,</span> <span m="1295470">then</span> <span
  m="1295620">you</span> <span m="1295730">have</span> <span
  m="1295880">to</span> <span m="1295980">be</span> <span
  m="1296080">careful</span> <span m="1296460">about</span> <span
  m="1296750">whether</span> <span m="1296970">this</span> <span
  m="1297180">remains</span> <span m="1297460">true.</span></p><p><span
  m="1297990">But</span> <span m="1298630">as</span> <span
  m="1298910">long</span> <span m="1299130">as</span> <span
  m="1299190">you</span> <span m="1299320">only</span> <span
  m="1299460">have</span> <span m="1299660">a</span> <span
  m="1299900">reasonable</span> <span m="1300260">number</span> <span
  m="1300460">of</span> <span m="1300530">attributes,</span> <span
  m="1301670">this</span> <span m="1301870">is</span> <span
  m="1301990">all</span> <span m="1302160">fair</span> <span
  m="1302410">game.</span> <span m="1303230">And</span> <span
  m="1303390">so</span> <span m="1303560">if</span> <span m="1303640">you</span>
  <span m="1303730">do</span> <span m="1303860">something</span> <span
  m="1304230">like,</span> <span m="1305470">if</span> <span
  m="1305620">you're</span> <span m="1305800">implementing</span> <span
  m="1306270">a</span> <span m="1306320">linked</span> <span
  m="1306550">list,</span> <span m="1306960">Python</span> <span
  m="1307420">I</span> <span m="1307500">checked</span> <span
  m="1307780">still</span> <span m="1308020">does</span> <span
  m="1308150">not</span> <span m="1308330">have</span> <span
  m="1308470">built-in</span> <span m="1308780">linked</span> <span
  m="1308980">lists.</span> <span m="1309310">They're</span> <span
  m="1309480">pretty</span> <span m="1309760">easy</span> <span
  m="1309960">to</span> <span m="1310040">build,</span> <span
  m="1310340">though.</span></p><p><span m="1311430">You</span> <span
  m="1311570">have</span> <span m="1311790">a</span> <span
  m="1312140">pointer.</span> <span m="1312420">And</span> <span
  m="1312590">you</span> <span m="1312710">just</span> <span
  m="1312850">say</span> <span m="1313060">x</span> <span
  m="1313310">equals</span> <span m="1313560">x.next.</span> <span
  m="1314590">That</span> <span m="1314790">takes</span> <span
  m="1315030">constant</span> <span m="1315420">time</span> <span
  m="1316230">because</span> <span m="1316710">accessing</span> <span
  m="1317280">this</span> <span m="1317500">field</span> <span
  m="1318700">in</span> <span m="1319230">an</span> <span
  m="1319430">object</span> <span m="1320020">of</span> <span
  m="1320290">constant</span> <span m="1320640">size</span> <span
  m="1321450">takes</span> <span m="1321670">constant</span> <span
  m="1322020">time.</span> <span m="1322730">And</span> <span
  m="1322870">we</span> <span m="1322970">don't</span> <span
  m="1323100">care</span> <span m="1323290">what</span> <span
  m="1323380">these</span> <span m="1323540">constants</span> <span
  m="1323940">are.</span></p><p><span m="1324110">That's</span> <span
  m="1324340">the</span> <span m="1324420">beauty</span> <span
  m="1324660">of</span> <span m="1324740">algorithms.</span> <span
  m="1325350">Because</span> <span m="1325740">we</span> <span
  m="1325870">only</span> <span m="1326080">care</span> <span
  m="1326240">about</span> <span m="1326440">scalability</span> <span
  m="1327030">with</span> <span m="1327170">n.</span> <span
  m="1327450">There's</span> <span m="1327590">no</span> <span
  m="1327770">n</span> <span m="1328020">here.</span></p><p><span
  m="1329150">This</span> <span m="1329340">takes</span> <span
  m="1329560">constant</span> <span m="1329860">time.</span> <span
  m="1330200">This takes</span> <span m="1330430">constant</span> <span
  m="1330760">time.</span> <span m="1332910">No</span> <span
  m="1333020">matter</span> <span m="1333290">how</span> <span
  m="1333540">big</span> <span m="1333870">your</span> <span
  m="1334040">linked</span> <span m="1334260">list</span> <span
  m="1334530">is</span> <span m="1334840">or</span> <span m="1335720">no</span>
  <span m="1335840">matter</span> <span m="1336080">how</span> <span
  m="1336220">many</span> <span m="1336420">objects</span> <span
  m="1336730">you</span> <span m="1336820">have,</span> <span
  m="1337140">these</span> <span m="1337330">are</span> <span
  m="1337420">constant</span> <span m="1337800">time.</span></p><p><span
  m="1339300">OK,</span> <span m="1339750">let's</span> <span
  m="1339980">do</span> <span m="1340090">some</span> <span
  m="1340260">harder</span> <span m="1340530">ones,</span> <span
  m="1340710">though.</span> <span m="1341760">In</span> <span
  m="1342020">general,</span> <span m="1342460">the</span> <span
  m="1342600">idea</span> <span m="1342940">is,</span> <span
  m="1343950">if</span> <span m="1344120">you</span> <span
  m="1344240">take</span> <span m="1344480">an</span> <span
  m="1344570">operation</span> <span m="1345170">like</span> <span
  m="1345950">L.append--</span> <span m="1348090">so you</span> <span
  m="1348170">have a</span> <span m="1348220">list.</span> <span
  m="1349160">And</span> <span m="1349320">you</span> <span
  m="1349420">want</span> <span m="1349550">to</span> <span
  m="1349730">append</span> <span m="1350020">some</span> <span m="1350230">item
  to the</span> <span m="1350670">list.</span> <span m="1351460">It's</span>
  <span m="1351870">an</span> <span m="1352030">array,</span> <span
  m="1352240">though.</span></p><p><span m="1353580">So</span> <span
  m="1353810">think</span> <span m="1353990">about</span> <span
  m="1354240">it.</span> <span m="1355790">The</span> <span
  m="1356020">way</span> <span m="1356360">to</span> <span
  m="1356530">figure</span> <span m="1356860">out</span> <span
  m="1356950">how</span> <span m="1357190">much</span> <span
  m="1357460">does</span> <span m="1357600">this</span> <span
  m="1357790">cost</span> <span m="1358840">is</span> <span
  m="1359020">to</span> <span m="1359130">think</span> <span
  m="1359360">about</span> <span m="1359660">how</span> <span
  m="1359950">it's</span> <span m="1360100">implemented</span> <span
  m="1360600">in</span> <span m="1360700">terms</span> <span
  m="1360940">of</span> <span m="1361040">these</span> <span
  m="1361300">basic</span> <span m="1361680">operations.</span> <span
  m="1362750">So</span> <span m="1362870">these</span> <span
  m="1363190">are</span> <span m="1363390">your</span> <span
  m="1363610">sort</span> <span m="1363800">of</span> <span
  m="1363860">the</span> <span m="1363980">core</span> <span
  m="1364350">concept</span> <span m="1364740">time</span> <span
  m="1364970">things.</span></p><p><span m="1366780">Most</span> <span
  m="1367350">everything</span> <span m="1367750">can</span> <span
  m="1368030">be</span> <span m="1368220">reduced</span> <span
  m="1368740">to</span> <span m="1368900">thinking</span> <span
  m="1369170">about</span> <span m="1369410">this.</span> <span
  m="1370320">But</span> <span m="1370640">sometimes,</span> <span
  m="1371040">it's</span> <span m="1371180">less</span> <span
  m="1371430">obvious.</span> <span m="1373320">L.apend</span> <span
  m="1373830">is</span> <span m="1373930">a</span> <span
  m="1373990">little</span> <span m="1374230">tricky</span> <span m="1374660">to
  think</span> <span m="1374940">about.</span> <span m="1375570">Because</span>
  <span m="1375960">basically,</span> <span m="1376440">you have</span> <span
  m="1376640">an</span> <span m="1376710">array</span> <span
  m="1376910">of</span> <span m="1377000">some</span> <span
  m="1377190">size.</span> <span m="1377600">And</span> <span
  m="1377680">now</span> <span m="1377810">you</span> <span
  m="1377960">want</span> <span m="1378130">to</span> <span
  m="1378180">make</span> <span m="1378370">an</span> <span
  m="1378570">array</span> <span m="1378790">one</span> <span
  m="1379020">larger.</span></p><p><span m="1380580">And</span> <span
  m="1380820">the</span> <span m="1380960">obvious</span> <span
  m="1381250">way</span> <span m="1381370">to</span> <span m="1381460">do</span>
  <span m="1381540">that</span> <span m="1381620">is to</span> <span
  m="1381890">allocate</span> <span m="1382370">a new</span> <span
  m="1382430">array and</span> <span m="1382820">copy</span> <span
  m="1383180">all</span> <span m="1383290">the</span> <span
  m="1383370">elements.</span> <span m="1383670">That</span> <span
  m="1383820">would</span> <span m="1383910">take</span> <span
  m="1384100">linear</span> <span m="1384400">time.</span> <span
  m="1385260">Python</span> <span m="1385620">doesn't</span> <span
  m="1385910">do</span> <span m="1386040">that.</span></p><p><span
  m="1387180">What</span> <span m="1387320">does</span> <span
  m="1387430">it</span> <span m="1387530">do?</span> <span
  m="1389910">Stay</span> <span m="1390280">tuned</span> <span
  m="1390680">for</span> <span m="1390820">lecture</span> <span
  m="1391240">eight.</span> <span m="1394300">It</span> <span
  m="1394470">does</span> <span m="1394700">something</span> <span
  m="1394980">called</span> <span m="1395230">table</span> <span
  m="1395540">doubling.</span></p><p><span m="1397140">It's</span> <span
  m="1397250">a</span> <span m="1397310">very</span> <span
  m="1397540">simple</span> <span m="1397860">idea.</span> <span
  m="1398140">You</span> <span m="1398280">can</span> <span
  m="1398500">almost</span> <span m="1398790">get</span> <span m="1398960">guess
  it</span> <span m="1399140">from</span> <span m="1399300">the</span> <span
  m="1399390">title.</span> <span m="1400560">And</span> <span
  m="1400870">if</span> <span m="1400970">you</span> <span m="1401060">go</span>
  <span m="1401180">to</span> <span m="1401310">lecture--</span> <span
  m="1401970">is it</span> <span m="1402280">eight</span> <span
  m="1402460">or</span> <span m="1402530">nine?</span> <span
  m="1403946">Nine,</span> <span m="1404420">sorry.</span></p><p><span
  m="1406180">You'll</span> <span m="1406420">see</span> <span
  m="1406730">how</span> <span m="1406970">this</span> <span
  m="1407220">can</span> <span m="1407470">basically</span> <span
  m="1408050">be</span> <span m="1408200">done</span> <span
  m="1408560">in</span> <span m="1408740">constant</span> <span
  m="1409190">time.</span> <span m="1410820">There's</span> <span
  m="1411060">a</span> <span m="1411165">slight</span> <span
  m="1411270">catch,</span> <span m="1412540">but</span> <span
  m="1413120">basically,</span> <span m="1413520">think</span> <span
  m="1413720">of</span> <span m="1413800">it</span> <span m="1413860">as</span>
  <span m="1413970">a</span> <span m="1414010">constant</span> <span
  m="1414370">time</span> <span m="1414570">operation.</span> <span
  m="1416280">Once</span> <span m="1416520">we</span> <span
  m="1416640">have</span> <span m="1416800">that,</span> <span
  m="1417660">and</span> <span m="1417870">so</span> <span
  m="1418190">this</span> <span m="1418420">is</span> <span
  m="1418530">why</span> <span m="1418780">you</span> <span
  m="1418910">should</span> <span m="1419080">take</span> <span
  m="1419240">this</span> <span m="1419380">class</span> <span m="1419720">so
  you'll</span> <span m="1419920">understand</span> <span m="1420320">how</span>
  <span m="1420480">Python</span> <span m="1420850">works.</span></p><p><span
  m="1421920">This</span> <span m="1422070">is</span> <span
  m="1422350">using</span> <span m="1422750">an</span> <span
  m="1422820">algorithmic</span> <span m="1423260">concept</span> <span
  m="1423525">that</span> <span m="1423790">was</span> <span
  m="1423980">invented,</span> <span m="1424610">I don't</span> <span
  m="1424960">know,</span> <span m="1425330">decades</span> <span
  m="1425670">ago,</span> <span m="1426250">but</span> <span
  m="1426420">is</span> <span m="1426600">a</span> <span
  m="1426680">simple</span> <span m="1427020">thing</span> <span
  m="1427180">that</span> <span m="1427270">we</span> <span
  m="1427420">need</span> <span m="1427660">to</span> <span
  m="1427760">do</span> <span m="1428060">to solve</span> <span
  m="1428270">lots</span> <span m="1428520">of</span> <span
  m="1428620">other</span> <span m="1428800">problems.</span> <span
  m="1429970">So</span> <span m="1430010">it's</span> <span
  m="1430120">cool.</span> <span m="1430310">There's</span> <span
  m="1430440">a</span> <span m="1430490">lot</span> <span m="1430860">of</span>
  <span m="1430950">features</span> <span m="1431270">in</span> <span
  m="1431370">Python</span> <span m="1432110">that</span> <span
  m="1432270">use</span> <span m="1432490">algorithms.</span> <span
  m="1433800">And</span> <span m="1434260">that's</span> <span
  m="1434540">kind</span> <span m="1434740">of</span> <span
  m="1434850">why</span> <span m="1435060">I'm</span> <span
  m="1435320">telling</span> <span m="1435610">you.</span></p><p><span
  m="1436500">All</span> <span m="1436580">right,</span> <span
  m="1436720">so</span> <span m="1436820">let's</span> <span
  m="1437000">do</span> <span m="1437260">another</span> <span
  m="1437640">one.</span> <span m="1438120">A</span> <span
  m="1438330">little</span> <span m="1438610">easier.</span> <span
  m="1439210">What</span> <span m="1439350">if</span> <span m="1439470">I</span>
  <span m="1439510">want</span> <span m="1439670">to</span> <span
  m="1439730">concatenate</span> <span m="1440350">two</span> <span
  m="1440520">lists?</span></p><p><span m="1441030">You</span> <span
  m="1441100">should</span> <span m="1441270">know</span> <span
  m="1441420">in</span> <span m="1441520">Python</span> <span
  m="1441910">this</span> <span m="1442120">is</span> <span m="1442300">a</span>
  <span m="1442820">non-destructive</span> <span m="1443500">operation.</span>
  <span m="1444080">You</span> <span m="1444190">basically</span> <span
  m="1444570">take</span> <span m="1444750">a</span> <span
  m="1444860">copy</span> <span m="1445270">of</span> <span
  m="1445340">L1</span> <span m="1445700">and</span> <span m="1445850">L2
  and</span> <span m="1446050">concatenate</span> <span m="1446670">them.</span>
  <span m="1447440">Of</span> <span m="1447550">course,</span> <span
  m="1447760">they're</span> <span m="1447960">arrays.</span></p><p><span
  m="1449300">The</span> <span m="1449510">way</span> <span
  m="1449650">to</span> <span m="1449710">think</span> <span
  m="1449920">about</span> <span m="1450180">this</span> <span
  m="1450380">is</span> <span m="1450510">to</span> <span
  m="1450670">re-implement</span> <span m="1451055">it</span> <span
  m="1451440">as</span> <span m="1451580">Python</span> <span
  m="1452010">code.</span> <span m="1452280">This</span> <span
  m="1452460">is</span> <span m="1452630">the</span> <span
  m="1452740">same</span> <span m="1453030">thing</span> <span
  m="1453790">as</span> <span m="1453990">saying,</span> <span
  m="1454430">well,</span> <span m="1454630">L</span> <span
  m="1454990">is</span> <span m="1455210">initially</span> <span
  m="1455650">empty.</span> <span m="1456440">And</span> <span
  m="1456640">then</span> <span m="1456830">for</span> <span
  m="1457090">every</span> <span m="1457520">item</span> <span
  m="1458390">x</span> <span m="1458820">and</span> <span m="1459120">L1,</span>
  <span m="1460870">L.append(x).</span></p><p><span m="1464880">And</span> <span
  m="1464980">a</span> <span m="1465030">lot</span> <span m="1465230">of</span>
  <span m="1465280">the</span> <span m="1465400">times</span> <span
  m="1465730">in</span> <span m="1465950">documentation</span> <span
  m="1466760">for</span> <span m="1466900">Python,</span> <span
  m="1467300">you</span> <span m="1467430">see</span> <span
  m="1467720">this</span> <span m="1467900">sort</span> <span
  m="1468070">of</span> <span m="1468160">here's</span> <span
  m="1468410">what</span> <span m="1468570">it</span> <span
  m="1468660">means,</span> <span m="1470490">especially</span> <span
  m="1470820">in</span> <span m="1471150">the</span> <span
  m="1471480">fancier</span> <span m="1472000">features.</span> <span
  m="1473520">They</span> <span m="1473650">give</span> <span m="1473840">sort
  of</span> <span m="1474760">an</span> <span m="1474910">equivalent</span>
  <span m="1477310">simple</span> <span m="1477790">Python,</span> <span
  m="1478240">if</span> <span m="1478340">you</span> <span
  m="1478470">will.</span> <span m="1478970">This</span> <span
  m="1479090">doesn't</span> <span m="1479300">use</span> <span
  m="1479470">any</span> <span m="1479640">fancy</span> <span
  m="1479980">operations</span> <span m="1480420">that</span> <span
  m="1480530">we</span> <span m="1480620">haven't</span> <span
  m="1480870">seen</span> <span m="1481070">already.</span></p><p><span
  m="1481920">So</span> <span m="1482070">now</span> <span m="1482290">we</span>
  <span m="1482390">know</span> <span m="1482990">this</span> <span
  m="1483300">takes</span> <span m="1483680">constant</span> <span
  m="1484100">time.</span> <span m="1485050">The</span> <span
  m="1485150">append,</span> <span m="1485690">this</span> <span
  m="1486060">append,</span> <span m="1486440">takes</span> <span
  m="1486690">constant</span> <span m="1487080">time.</span> <span
  m="1487840">And</span> <span m="1488050">so</span> <span
  m="1488580">the</span> <span m="1488820">amount</span> <span
  m="1489010">of</span> <span m="1489090">time</span> <span
  m="1489320">here</span> <span m="1489540">is</span> <span
  m="1489620">basically</span> <span m="1490020">order</span> <span
  m="1490870">the</span> <span m="1490990">length</span> <span
  m="1491260">of</span> <span m="1491360">L1.</span> <span
  m="1493230">And</span> <span m="1493580">the</span> <span
  m="1493800">time</span> <span m="1494140">here</span> <span
  m="1494390">is</span> <span m="1494510">order the</span> <span
  m="1494820">length</span> <span m="1495120">of</span> <span
  m="1495230">L2.</span></p><p><span m="1496670">And</span> <span
  m="1496970">so</span> <span m="1497170">in</span> <span
  m="1497320">total,</span> <span m="1498250">it's</span> <span
  m="1498450">order--</span> <span m="1498980">I'm</span> <span
  m="1499140">going</span> <span m="1499230">to</span> <span
  m="1499290">be</span> <span m="1499400">careful</span> <span
  m="1499750">and</span> <span m="1499850">say</span> <span m="1499980">1</span>
  <span m="1500330">plus</span> <span m="1501150">length</span> <span
  m="1501400">of</span> <span m="1501510">L1</span> <span
  m="1502470">plus</span> <span m="1502980">length</span> <span
  m="1503330">of</span> <span m="1503610">L2.</span> <span
  m="1506160">The</span> <span m="1506260">1</span> <span
  m="1506440">plus</span> <span m="1506750">is</span> <span
  m="1506850">just</span> <span m="1507040">in</span> <span
  m="1507100">case</span> <span m="1507400">these</span> <span
  m="1507460">are</span> <span m="1507520">both</span> <span
  m="1507700">0.</span> <span m="1508060">It</span> <span
  m="1508160">still</span> <span m="1508370">takes</span> <span
  m="1508600">constant</span> <span m="1508960">time</span> <span
  m="1509240">to</span> <span m="1509460">build</span> <span
  m="1509870">an</span> <span m="1509970">initial</span> <span
  m="1510300">list.</span></p><p><span m="1511960">OK,</span> <span
  m="1512120">so</span> <span m="1512570">there are a</span> <span
  m="1512830">bunch</span> <span m="1513070">of</span> <span
  m="1513180">operations</span> <span m="1514020">that</span> <span
  m="1514180">are</span> <span m="1514280">written</span> <span
  m="1514700">in</span> <span m="1515120">these</span> <span
  m="1515320">notes.</span> <span m="1515650">I'm</span> <span
  m="1515740">not</span> <span m="1515930">going</span> <span
  m="1516020">to</span> <span m="1516070">go</span> <span
  m="1516210">through</span> <span m="1516450">all</span> <span
  m="1516710">of</span> <span m="1516780">them</span> <span
  m="1517830">because</span> <span m="1518000">they're</span> <span
  m="1518110">tedious.</span> <span m="1519130">But</span> <span
  m="1520450">a</span> <span m="1520560">lot</span> <span m="1520760">of</span>
  <span m="1520890">you,</span> <span m="1521030">could</span> <span
  m="1521140">just</span> <span m="1521300">expand</span> <span
  m="1521780">out</span> <span m="1521980">code</span> <span
  m="1522220">like</span> <span m="1522390">this.</span></p><p><span
  m="1522590">And</span> <span m="1522670">it's</span> <span
  m="1522790">very</span> <span m="1523020">easy</span> <span
  m="1523230">to</span> <span m="1523330">analyze.</span> <span
  m="1523830">Whereas</span> <span m="1524110">you</span> <span
  m="1524240">just</span> <span m="1524420">look</span> <span
  m="1524570">at</span> <span m="1524650">plus,</span> <span
  m="1524920">you</span> <span m="1525030">think,</span> <span
  m="1525200">oh,</span> <span m="1525500">plus is</span> <span
  m="1525860">constant</span> <span m="1526220">time.</span> <span
  m="1526670">And</span> <span m="1526860">plus</span> <span
  m="1527110">is</span> <span m="1527290">constant</span> <span
  m="1527620">time</span> <span m="1527870">if</span> <span
  m="1527990">this</span> <span m="1528160">is</span> <span m="1528280">a</span>
  <span m="1528370">word</span> <span m="1528770">and</span> <span
  m="1528840">this</span> <span m="1529000">is</span> <span m="1529100">a</span>
  <span m="1529170">word.</span></p><p><span m="1529450">But</span> <span
  m="1529570">these</span> <span m="1529800">are</span> <span
  m="1529900">entire</span> <span m="1530360">data</span> <span
  m="1530590">structures.</span> <span m="1531760">And</span> <span
  m="1532100">so</span> <span m="1532210">it's</span> <span
  m="1532310">not</span> <span m="1532510">constant</span> <span
  m="1532860">time.</span> <span m="1534480">All</span> <span
  m="1534530">right.</span> <span m="1536210">There</span> <span
  m="1536340">are</span> <span m="1536370">more</span> <span
  m="1536550">subtle</span> <span m="1536990">fun</span> <span
  m="1537210">ones</span> <span m="1537390">to</span> <span
  m="1537510">think</span> <span m="1537680">about.</span> <span
  m="1537910">Like,</span> <span m="1538530">if</span> <span
  m="1538700">I</span> <span m="1538760">want</span> <span m="1538960">to</span>
  <span m="1539270">know</span> <span m="1539520">is</span> <span
  m="1539820">x</span> <span m="1540170">in</span> <span m="1540330">the</span>
  <span m="1540400">list,</span> <span m="1541540">how does</span> <span
  m="1541820">that</span> <span m="1541980">happen?</span> <span
  m="1543540">Any</span> <span m="1543680">guesses?</span></p><p><span
  m="1545870">There's</span> <span m="1546130">an</span> <span
  m="1546210">operator</span> <span m="1546740">in</span> <span
  m="1546960">Python</span> <span m="1547340">called</span> <span
  m="1547660">in--</span> <span m="1548770">x</span> <span m="1549130">in</span>
  <span m="1549410">L.</span> <span m="1550470">How</span> <span
  m="1550600">long</span> <span m="1550780">do</span> <span
  m="1550830">you</span> <span m="1550900">think</span> <span
  m="1551070">this</span> <span m="1551250">takes?</span> <span
  m="1555070">Altogether?</span></p><p><span m="1556770">Linear,</span> <span
  m="1557430">yeah.</span> <span m="1559010">Linear</span> <span
  m="1559310">time.</span> <span m="1559760">In</span> <span
  m="1559860">the</span> <span m="1559940">worst</span> <span
  m="1560170">case,</span> <span m="1560430">you're</span> <span
  m="1560540">going</span> <span m="1560640">to have to</span> <span
  m="1560860">scan</span> <span m="1561190">through</span> <span
  m="1561290">the</span> <span m="1561390">whole</span> <span
  m="1561560">list.</span></p><p><span m="1562090">Lists</span> <span
  m="1562340">aren't</span> <span m="1562600">necessarily</span> <span
  m="1563040">sorted.</span> <span m="1563500">We</span> <span
  m="1563600">don't</span> <span m="1563620">know</span> <span
  m="1563760">anything</span> <span m="1564080">about</span> <span
  m="1564400">them.</span> <span m="1565030">So</span> <span
  m="1565180">you've</span> <span m="1565230">got</span> <span
  m="1565380">to</span> <span m="1565460">just</span> <span
  m="1565600">scan</span> <span m="1565890">through</span> <span
  m="1566140">and</span> <span m="1566250">test</span> <span
  m="1566540">for</span> <span m="1566680">every</span> <span
  m="1566980">item.</span> <span m="1567290">Is</span> <span
  m="1567520">x</span> <span m="1567760">equal</span> <span
  m="1568060">to</span> <span m="1568160">that</span> <span
  m="1568370">item?</span></p><p><span m="1569240">And it's</span> <span
  m="1569380">even</span> <span m="1569600">worse</span> <span
  m="1569870">if</span> <span m="1570040">equal</span> <span
  m="1570360">equals</span> <span m="1570780">costs</span> <span
  m="1571070">a</span> <span m="1571120">lot.</span> <span m="1572030">So</span>
  <span m="1572210">if</span> <span m="1572290">x</span> <span
  m="1572500">is</span> <span m="1572590">some</span> <span
  m="1572790">really</span> <span m="1573000">complicated</span> <span
  m="1573560">thing,</span> <span m="1573720">you</span> <span
  m="1573800">have</span> <span m="1573970">to</span> <span
  m="1574080">take</span> <span m="1574270">that</span> <span
  m="1574410">into</span> <span m="1574610">account.</span> <span
  m="1576870">OK,</span> <span m="1577270">blah, blah,</span> <span
  m="1577640">blah.</span></p><p><span m="1578400">OK,</span> <span
  m="1578570">another</span> <span m="1578830">fun</span> <span
  m="1579040">one.</span> <span m="1579250">This</span> <span
  m="1579410">is</span> <span m="1579530">like</span> <span m="1579750">a</span>
  <span m="1580300">pop</span> <span m="1580540">quiz.</span> <span
  m="1581680">How</span> <span m="1581830">long's</span> <span
  m="1582080">it</span> <span m="1582180">take</span> <span
  m="1582480">to</span> <span m="1582670">compute</span> <span
  m="1582930">the</span> <span m="1583010">length</span> <span
  m="1583290">of</span> <span m="1583340">a</span> <span
  m="1583410">list?</span> <span m="1585660">Constant.</span></p><p><span
  m="1586800">Yeah,</span> <span m="1587030">luckily,</span> <span
  m="1588420">if</span> <span m="1588540">you</span> <span
  m="1588620">didn't</span> <span m="1588800">know</span> <span
  m="1588960">anything,</span> <span m="1589320">you'd</span> <span
  m="1589440">have</span> <span m="1589550">to</span> <span
  m="1589660">scan</span> <span m="1589900">through</span> <span
  m="1590010">the</span> <span m="1590100">list</span> <span
  m="1590400">and</span> <span m="1590620">count</span> <span
  m="1590900">the</span> <span m="1591020">items.</span> <span
  m="1591530">But</span> <span m="1591930">in</span> <span
  m="1592180">Python,</span> <span m="1593100">lists</span> <span
  m="1593390">are</span> <span m="1593510">implemented</span> <span
  m="1593930">with</span> <span m="1594120">a</span> <span
  m="1594230">counter</span> <span m="1594560">built</span> <span
  m="1594840">in.</span></p><p><span m="1595100">It</span> <span
  m="1595360">always</span> <span m="1595610">stores</span> <span
  m="1595960">the</span> <span m="1596050">list</span> <span
  m="1596310">at</span> <span m="1596440">the</span> <span
  m="1596510">beginning--</span> <span m="1597270">stores</span> <span
  m="1597400">the</span> <span m="1597480">length</span> <span m="1597700">of
  the</span> <span m="1597800">list</span> <span m="1598050">at</span> <span
  m="1598110">the</span> <span m="1598180">beginning.</span> <span
  m="1598620">So</span> <span m="1598640">you</span> <span
  m="1598770">just</span> <span m="1599000">look</span> <span
  m="1599190">it</span> <span m="1599270">up.</span> <span
  m="1599790">This</span> <span m="1599980">is</span> <span
  m="1600140">instantaneous.</span></p><p><span m="1602300">It's</span> <span
  m="1602410">important,</span> <span m="1602840">though.</span> <span
  m="1603690">That</span> <span m="1603910">can</span> <span
  m="1604040">matter.</span> <span m="1606270">All</span> <span
  m="1606500">right.</span> <span m="1607920">Let's</span> <span
  m="1608090">do</span> <span m="1608220">some</span> <span
  m="1608420">more.</span></p><p><span m="1618900">What</span> <span
  m="1619070">if</span> <span m="1619190">I</span> <span m="1619240">want</span>
  <span m="1619420">to</span> <span m="1619470">sort</span> <span
  m="1619770">a</span> <span m="1619830">list?</span> <span
  m="1620400">How</span> <span m="1620520">long</span> <span m="1620760">does
  that</span> <span m="1620960">take?</span> <span m="1626580">N</span> <span
  m="1626810">log</span> <span m="1627110">n</span> <span
  m="1630254">where</span> <span m="1630730">n</span> <span
  m="1630970">is</span> <span m="1631220">the</span> <span
  m="1632260">length</span> <span m="1632510">of</span> <span
  m="1632610">the</span> <span m="1632700">list.</span> <span
  m="1633800">Technically</span> <span m="1634580">times</span> <span
  m="1635170">the</span> <span m="1635620">time</span> <span
  m="1635870">to</span> <span m="1635990">compare</span> <span
  m="1636500">two</span> <span m="1636680">items,</span> <span
  m="1640270">which</span> <span m="1640450">usually</span> <span
  m="1640840">we're</span> <span m="1640960">just</span> <span
  m="1641170">sorting</span> <span m="1641650">words.</span> <span
  m="1642130">And</span> <span m="1642270">so</span> <span
  m="1642450">this</span> <span m="1642630">is</span> <span
  m="1642740">constant</span> <span m="1643140">time.</span></p><p><span
  m="1645850">If</span> <span m="1646000">you</span> <span
  m="1646110">look</span> <span m="1646280">at</span> <span
  m="1646390">Python</span> <span m="1646770">sorting</span> <span
  m="1647140">algorithm,</span> <span m="1647530">it</span> <span
  m="1647610">uses</span> <span m="1647940">a</span> <span
  m="1648030">comparison</span> <span m="1648560">sort.</span> <span
  m="1649240">This</span> <span m="1649470">is</span> <span
  m="1649720">the</span> <span m="1649940">topic</span> <span
  m="1650460">of</span> <span m="1650890">lectures</span> <span
  m="1652200">three</span> <span m="1654170">and</span> <span
  m="1654390">four</span> <span m="1654640">and</span> <span
  m="1654760">seven.</span> <span m="1655260">But</span> <span
  m="1655650">in</span> <span m="1655810">particular,</span> <span
  m="1656490">the</span> <span m="1656590">very</span> <span
  m="1656810">next</span> <span m="1657060">lecture,</span> <span
  m="1657500">we</span> <span m="1657700">will</span> <span
  m="1657840">see</span> <span m="1658430">how</span> <span
  m="1658600">this</span> <span m="1658760">is</span> <span
  m="1658860">done</span> <span m="1659230">in</span> <span m="1659540">n</span>
  <span m="1659680">log</span> <span m="1659890">n</span> <span
  m="1660020">time.</span></p><p><span m="1661670">And</span> <span
  m="1662010">that</span> <span m="1662350">is</span> <span
  m="1662470">using</span> <span m="1663180">algorithms.</span> <span
  m="1665690">All</span> <span m="1665770">right,</span> <span
  m="1666480">let's</span> <span m="1666800">go</span> <span
  m="1667050">to</span> <span m="1669370">dictionaries.</span> <span
  m="1672210">Python</span> <span m="1672720">called</span> <span
  m="1673260">dicts.</span> <span m="1675240">And</span> <span
  m="1676410">these</span> <span m="1676640">let</span> <span
  m="1676830">you</span> <span m="1677000">do</span> <span
  m="1677240">things.</span> <span m="1677650">They're a</span> <span
  m="1677920">generalization</span> <span m="1678330">of</span> <span
  m="1678740">lists in</span> <span m="1679110">some</span> <span
  m="1679350">sense.</span> <span m="1679600">Instead</span> <span
  m="1679860">of</span> <span m="1679960">putting</span> <span
  m="1680340">just</span> <span m="1680550">an</span> <span
  m="1680650">index</span> <span m="1681080">here,</span> <span
  m="1681410">an</span> <span m="1681570">integer</span> <span
  m="1682550">between</span> <span m="1682790">0</span> <span
  m="1683130">and</span> <span m="1683210">the</span> <span
  m="1683290">length</span> <span m="1683520">minus</span> <span
  m="1683810">1,</span> <span m="1684330">you can</span> <span
  m="1684450">put</span> <span m="1684590">an</span> <span
  m="1684770">arbitrary</span> <span m="1685170">key</span> <span
  m="1686020">and</span> <span m="1686360">store</span> <span
  m="1686590">a</span> <span m="1686610">value,</span> <span
  m="1686970">for</span> <span m="1687140">example.</span></p><p><span
  m="1688250">How</span> <span m="1688330">long</span> <span m="1688610">does
  this</span> <span m="1688810">take?</span> <span m="1689940">I'm</span> <span
  m="1690040">not</span> <span m="1690190">going</span> <span
  m="1690280">to</span> <span m="1690330">ask</span> <span
  m="1690880">you</span> <span m="1691020">because,</span> <span
  m="1691730">it's</span> <span m="1691860">not</span> <span
  m="1692030">obvious.</span> <span m="1692795">In</span> <span
  m="1693050">fact,</span> <span m="1693380">this</span> <span
  m="1693460">is</span> <span m="1694370">one</span> <span m="1694680">of</span>
  <span m="1694830">the</span> <span m="1695030">most</span> <span
  m="1695570">important</span> <span m="1695950">data</span> <span
  m="1696150">structures</span> <span m="1696860">in</span> <span
  m="1697100">all</span> <span m="1697330">of</span> <span
  m="1697440">computer</span> <span m="1697790">science.</span> <span
  m="1698580">It's</span> <span m="1698600">called</span> <span
  m="1698980">a</span> <span m="1699030">hash</span> <span
  m="1699310">table.</span></p><p><span m="1700410">And</span> <span
  m="1700610">it</span> <span m="1700740">is</span> <span m="1700900">the</span>
  <span m="1700990">topic</span> <span m="1701640">of</span> <span
  m="1702470">lectures</span> <span m="1703420">eight</span> <span
  m="1703610">through</span> <span m="1703770">10.</span> <span
  m="1705270">So</span> <span m="1705500">stay</span> <span
  m="1705760">tuned</span> <span m="1706050">for</span> <span
  m="1706250">how</span> <span m="1706500">to</span> <span m="1706600">do</span>
  <span m="1706740">this</span> <span m="1707360">in</span> <span
  m="1707510">constant</span> <span m="1707910">time,</span> <span
  m="1708350">how</span> <span m="1708530">to</span> <span m="1708600">be</span>
  <span m="1708700">able</span> <span m="1708850">to</span> <span
  m="1708910">store</span> <span m="1709200">an</span> <span
  m="1709260">arbitrary</span> <span m="1709640">key,</span> <span
  m="1710250">get</span> <span m="1710420">it</span> <span
  m="1710510">back</span> <span m="1710760">out</span> <span
  m="1711360">in</span> <span m="1711510">constant</span> <span
  m="1711910">time.</span> <span m="1712120">This</span> <span
  m="1712280">is</span> <span m="1712410">assuming</span> <span
  m="1712800">the</span> <span m="1712900">key</span> <span
  m="1713080">is</span> <span m="1713210">a</span> <span
  m="1713280">single</span> <span m="1713590">word.</span> <span
  m="1714850">Yeah.</span></p><p><span m="1715820">AUDIENCE: Does it</span>
  <span m="1716305">first check</span> <span m="1716790">to see</span> <span
  m="1717275">whether the key</span> <span m="1717760">is already</span> <span
  m="1718245">in the</span> <span m="1718730">dictionary?</span></p><p><span
  m="1719700">PROFESSOR: Yeah,</span> <span m="1720630">it</span> <span
  m="1720730">will</span> <span m="1720980">clobber</span> <span
  m="1721500">any</span> <span m="1721660">existing</span> <span
  m="1722080">key.</span> <span m="1722590">There's</span> <span
  m="1722810">also,</span> <span m="1723230">you know,</span> <span
  m="1724122">you can</span> <span m="1724570">test</span> <span
  m="1724860">whether</span> <span m="1725140">a key</span> <span
  m="1725380">is</span> <span m="1725490">in</span> <span m="1725630">the</span>
  <span m="1725720">dictionary.</span> <span m="1726190">That</span> <span
  m="1726340">also</span> <span m="1726590">takes</span> <span
  m="1726840">constant</span> <span m="1727210">time.</span></p><p><span
  m="1728240">You</span> <span m="1728390">can</span> <span
  m="1728500">delete</span> <span m="1728760">something</span> <span
  m="1729110">from</span> <span m="1729280">the</span> <span
  m="1729360">dictionary.</span> <span m="1729800">All</span> <span
  m="1730010">the</span> <span m="1730100">usual--</span> <span
  m="1731450">dealing</span> <span m="1731710">with</span> <span
  m="1731840">a</span> <span m="1731890">single</span> <span
  m="1732250">key</span> <span m="1732460">in</span> <span
  m="1732560">dictionaries,</span> <span m="1733710">obviously</span> <span
  m="1734100">dictionary.update,</span> <span m="1735170">that</span> <span
  m="1735660">involves</span> <span m="1736010">a</span> <span
  m="1736050">lot</span> <span m="1736220">of</span> <span
  m="1736260">keys.</span> <span m="1736510">That</span> <span
  m="1736650">doesn't</span> <span m="1736870">take</span> <span
  m="1737190">some</span> <span m="1737330">time.</span> <span
  m="1738070">How</span> <span m="1738280">long does</span> <span
  m="1738420">it</span> <span m="1738480">take?</span> <span
  m="1739090">Well,</span> <span m="1739250">you</span> <span
  m="1739390">write</span> <span m="1739570">out</span> <span
  m="1739680">a</span> <span m="1739730">for</span> <span
  m="1739930">loop</span> <span m="1740170">and count</span> <span
  m="1740520">them.</span></p><p><span m="1740975">AUDIENCE: But</span> <span
  m="1741430">how</span> <span m="1741581">can</span> <span
  m="1741733">you</span> <span m="1741885">see whether</span> <span
  m="1742340">[INAUDIBLE]</span> <span m="1742795">dictionary</span> <span
  m="1743250">in constant</span> <span m="1743705">time?</span></p><p><span
  m="1744160">PROFESSOR: How</span> <span m="1744340">do</span> <span
  m="1744400">you</span> <span m="1744500">do</span> <span
  m="1744600">this</span> <span m="1744750">in</span> <span
  m="1744840">constant</span> <span m="1745160">time?</span> <span
  m="1745410">Come</span> <span m="1745680">to</span> <span
  m="1745800">lecture</span> <span m="1746110">eight</span> <span
  m="1746300">through</span> <span m="1746430">10.</span> <span
  m="1748220">I</span> <span m="1748430">should</span> <span
  m="1749040">say</span> <span m="1749450">a</span> <span
  m="1749550">slight</span> <span m="1749890">catch,</span> <span
  m="1750220">which</span> <span m="1750420">is</span> <span
  m="1750540">this</span> <span m="1750730">is</span> <span
  m="1750880">constant</span> <span m="1751310">time</span> <span
  m="1751990">with</span> <span m="1752230">high</span> <span
  m="1752440">probability.</span></p><p><span m="1753480">It's</span> <span
  m="1753565">a</span> <span m="1753650">randomized</span> <span
  m="1754220">algorithm.</span> <span m="1755920">It</span> <span
  m="1756030">doesn't</span> <span m="1756370">always</span> <span
  m="1756680">take</span> <span m="1756880">constant</span> <span
  m="1757230">time. It's</span> <span m="1757520">always</span> <span
  m="1757690">correct.</span> <span m="1758570">But</span> <span
  m="1758700">sometimes,</span> <span m="1759440">very</span> <span
  m="1759920">rarely,</span> <span m="1760640">it</span> <span
  m="1760790">takes</span> <span m="1761000">a</span> <span
  m="1761040">little</span> <span m="1761200">more</span> <span
  m="1761380">than</span> <span m="1761520">constant</span> <span
  m="1761910">time.</span></p><p><span m="1762760">And</span> <span
  m="1763040">I'm</span> <span m="1763100">going</span> <span
  m="1763200">to</span> <span m="1763240">abbreviate</span> <span
  m="1763650">this</span> <span m="1763830">WHP.</span> <span
  m="1766170">And</span> <span m="1766470">we'll</span> <span
  m="1766600">see</span> <span m="1766810">more</span> <span
  m="1767100">what</span> <span m="1767240">that</span> <span
  m="1767420">means</span> <span m="1768490">mostly,</span> <span
  m="1769130">actually,</span> <span m="1769410">in 6046.</span> <span
  m="1770390">But</span> <span m="1770550">we'll</span> <span
  m="1770660">see</span> <span m="1770820">a</span> <span
  m="1770860">fair</span> <span m="1771050">amount</span> <span
  m="1771340">in</span> <span m="1771540">6006</span> <span
  m="1772800">on</span> <span m="1772940">how</span> <span
  m="1773110">this</span> <span m="1773290">works</span> <span
  m="1773600">and</span> <span m="1773680">how</span> <span
  m="1773840">it's</span> <span m="1773960">possible.</span> <span
  m="1774350">It's</span> <span m="1774770">a</span> <span
  m="1774820">big</span> <span m="1775030">area</span> <span
  m="1775250">of</span> <span m="1775310">research.</span></p><p><span
  m="1775680">A lot</span> <span m="1775860">of</span> <span
  m="1775930">people</span> <span m="1776160">work</span> <span
  m="1776340">on</span> <span m="1776430">hashing.</span> <span
  m="1777430">It's</span> <span m="1777610">very</span> <span
  m="1777810">cool</span> <span m="1778140">and</span> <span
  m="1778260">it's</span> <span m="1778350">super</span> <span
  m="1778670">useful.</span> <span m="1779120">If</span> <span
  m="1779230">you</span> <span m="1779330">write</span> <span
  m="1779500">any</span> <span m="1779720">code</span> <span
  m="1779940">these</span> <span m="1780120">days,</span> <span m="1780420">you
  use</span> <span m="1780730">a</span> <span m="1780770">dictionary.</span>
  <span m="1781720">It's</span> <span m="1781920">the</span> <span
  m="1782030">way</span> <span m="1782470">to</span> <span
  m="1782950">solve</span> <span m="1783230">problems.</span></p><p><span
  m="1785470">I'm</span> <span m="1785640">basically</span> <span
  m="1786030">using</span> <span m="1786790">Python</span> <span
  m="1787280">is</span> <span m="1787430">a</span> <span
  m="1787490">platform</span> <span m="1787990">to</span> <span
  m="1788110">advertise</span> <span m="1788720">the</span> <span
  m="1788800">rest</span> <span m="1789040">of</span> <span
  m="1789080">the</span> <span m="1789160">class</span> <span
  m="1789445">you</span> <span m="1789730">may have</span> <span
  m="1790035">noticed.</span></p><p><span m="1790840">Not</span> <span
  m="1791100">every</span> <span m="1791410">topic</span> <span
  m="1791780">we</span> <span m="1791910">cover</span> <span
  m="1792190">in</span> <span m="1792270">this</span> <span
  m="1792420">class</span> <span m="1792720">is</span> <span
  m="1792850">already</span> <span m="1793100">in</span> <span
  m="1793200">Python,</span> <span m="1793600">but</span> <span
  m="1793710">a</span> <span m="1793750">lot</span> <span m="1794070">of</span>
  <span m="1794150">them</span> <span m="1794310">are.</span> <span
  m="1795210">So</span> <span m="1795380">we've</span> <span
  m="1795540">got</span> <span m="1796630">table</span> <span
  m="1796950">doubling.</span> <span m="1798210">We've</span> <span
  m="1798662">got</span> <span m="1802020">dictionaries.</span></p><p><span
  m="1803070">We've</span> <span m="1803210">got</span> <span
  m="1803420">sorting.</span> <span m="1804460">Another</span> <span
  m="1804810">one</span> <span m="1805110">is</span> <span
  m="1805790">longs,</span> <span m="1807280">which</span> <span
  m="1807470">are</span> <span m="1807640">long</span> <span
  m="1807910">integers</span> <span m="1808410">in</span> <span
  m="1808520">Python</span> <span m="1809300">through</span> <span
  m="1809530">version</span> <span m="1809880">two.</span> <span
  m="1811990">And</span> <span m="1812990">this</span> <span
  m="1813310">is</span> <span m="1813800">the</span> <span
  m="1813910">topic</span> <span m="1814440">of</span> <span
  m="1815460">lecture</span> <span m="1816260">11.</span> <span
  m="1817850">And</span> <span m="1818050">so</span> <span
  m="1818230">for</span> <span m="1818370">fun,</span> <span
  m="1819160">if</span> <span m="1819310">I</span> <span m="1819390">have</span>
  <span m="1819600">two</span> <span m="1819750">integers</span> <span
  m="1820140">x</span> <span m="1820350">and</span> <span m="1820470">y,</span>
  <span m="1821360">and</span> <span m="1821570">let's</span> <span
  m="1821810">say</span> <span m="1822140">one</span> <span
  m="1822380">of</span> <span m="1822460">them</span> <span
  m="1822650">is</span> <span m="1823300">this</span> <span
  m="1823600">many</span> <span m="1823880">words</span> <span
  m="1824210">long</span> <span m="1824700">and</span> <span
  m="1824830">the</span> <span m="1824940">other</span> <span
  m="1825140">one</span> <span m="1825400">is</span> <span
  m="1825570">this</span> <span m="1825740">many</span> <span
  m="1825930">words</span> <span m="1826150">long,</span> <span
  m="1826360">how</span> <span m="1826610">long</span> <span
  m="1826860">do</span> <span m="1826910">you</span> <span
  m="1826980">think</span> <span m="1827150">it</span> <span
  m="1827250">takes</span> <span m="1827460">to</span> <span
  m="1827590">add</span> <span m="1827840">them?</span> <span
  m="1833570">Guesses?</span></p><p><span m="1837590">AUDIENCE:</span> <span
  m="1837970">[INAUDIBLE].</span></p><p><span m="1840020">PROFESSOR:
  Plus?</span> <span m="1840900">Times?</span> <span m="1841580">Plus</span>
  <span m="1841930">is</span> <span m="1842070">the</span> <span
  m="1842180">answer.</span></p><p><span m="1844040">You</span> <span
  m="1844150">can</span> <span m="1844280">do</span> <span m="1844400">it</span>
  <span m="1844460">in</span> <span m="1844560">that</span> <span
  m="1844710">much</span> <span m="1844910">time.</span> <span
  m="1847960">If</span> <span m="1848010">you</span> <span
  m="1848140">think</span> <span m="1848380">about</span> <span
  m="1848740">the</span> <span m="1848840">grade</span> <span
  m="1849130">school</span> <span m="1849410">algorithm</span> <span
  m="1849810">for</span> <span m="1849980">adding</span> <span
  m="1850950">really</span> <span m="1851190">big</span> <span
  m="1851670">multi-digit</span> <span m="1852220">numbers,</span> <span
  m="1853030">it'll</span> <span m="1853310">only</span> <span
  m="1853490">take</span> <span m="1853670">that</span> <span
  m="1853810">much</span> <span m="1853970">time.</span> <span
  m="1854500">Multiplication</span> <span m="1854825">is</span> <span
  m="1855150">a</span> <span m="1855190">little</span> <span
  m="1855370">bit</span> <span m="1855500">harder,</span> <span
  m="1855770">though.</span></p><p><span m="1856770">If you</span> <span
  m="1856900">look</span> <span m="1857030">at</span> <span
  m="1857100">the</span> <span m="1857180">grade</span> <span
  m="1857390">school</span> <span m="1857610">algorithm,</span> <span
  m="1857960">it's</span> <span m="1858090">going</span> <span
  m="1858210">to</span> <span m="1858270">be</span> <span m="1858430">x</span>
  <span m="1858710">times</span> <span m="1859080">y--</span> <span
  m="1860090">it's</span> <span m="1860400">quadratic</span> <span
  m="1860700">time</span> <span m="1860970">not</span> <span
  m="1861170">so</span> <span m="1861310">good.</span> <span
  m="1862660">The</span> <span m="1862850">algorithm</span> <span
  m="1863220">that's</span> <span m="1863400">implemented</span> <span
  m="1863800">in</span> <span m="1863900">Python</span> <span
  m="1865600">is</span> <span m="1868030">x</span> <span m="1868310">plus</span>
  <span m="1868540">y</span> <span m="1869410">to</span> <span
  m="1869630">the</span> <span m="1869730">log</span> <span
  m="1870200">base</span> <span m="1870540">2</span> <span m="1870810">of</span>
  <span m="1871010">3.</span></p><p><span m="1871870">By</span> <span
  m="1871980">the</span> <span m="1872090">way,</span> <span
  m="1872250">I</span> <span m="1872330">always</span> <span
  m="1872540">write</span> <span m="1872720">LG</span> <span
  m="1873200">to</span> <span m="1873380">mean</span> <span
  m="1873660">log</span> <span m="1873960">base</span> <span
  m="1874200">2.</span> <span m="1876880">Because it</span> <span
  m="1877070">only</span> <span m="1877270">has</span> <span
  m="1877410">two</span> <span m="1877560">letters,</span> <span
  m="1878100">so</span> <span m="1878470">OK,</span> <span
  m="1878750">this</span> <span m="1878910">is</span> <span
  m="1879070">2.</span> <span m="1880430">Log</span> <span
  m="1880700">base</span> <span m="1880920">2</span> <span m="1881070">of</span>
  <span m="1881160">3</span> <span m="1881570">is</span> <span
  m="1881720">about</span> <span m="1882440">1.6.</span></p><p><span
  m="1884710">So</span> <span m="1884980">while</span> <span
  m="1885540">the</span> <span m="1885740">straightforward</span> <span
  m="1886290">algorithm</span> <span m="1886710">is</span> <span
  m="1886900">basically</span> <span m="1887240">x</span> <span
  m="1887390">plus</span> <span m="1887560">y</span> <span
  m="1887720">squared,</span> <span m="1888870">this</span> <span
  m="1889060">one</span> <span m="1889240">is</span> <span m="1889660">x</span>
  <span m="1889870">plus</span> <span m="1890050">y</span> <span
  m="1890230">to</span> <span m="1890360">the</span> <span
  m="1890460">1.6</span> <span m="1891050">power,</span> <span
  m="1891410">a</span> <span m="1891460">little</span> <span
  m="1891690">better</span> <span m="1891950">than</span> <span
  m="1892110">quadratic.</span> <span m="1892910">And</span> <span
  m="1895210">the</span> <span m="1895350">Python</span> <span
  m="1895820">developers</span> <span m="1896420">found</span> <span
  m="1896630">that</span> <span m="1896760">was</span> <span
  m="1897250">faster</span> <span m="1897680">than</span> <span
  m="1897850">grade school</span> <span m="1898250">multiplication.</span> <span
  m="1899350">And</span> <span m="1899500">so</span> <span
  m="1899580">that's</span> <span m="1899780">what</span> <span
  m="1899840">they</span> <span m="1899920">implemented.</span></p><p><span
  m="1900490">And</span> <span m="1900640">that</span> <span
  m="1900810">is</span> <span m="1900890">something</span> <span m="1901160">we
  will</span> <span m="1901340">cover</span> <span m="1901650">in</span> <span
  m="1901710">lecture</span> <span m="1902010">11,</span> <span
  m="1902340">how</span> <span m="1902490">to</span> <span m="1902600">do</span>
  <span m="1902720">that.</span> <span m="1903240">It's</span> <span
  m="1903360">pretty</span> <span m="1903520">cool.</span> <span
  m="1904510">There</span> <span m="1904790">are</span> <span
  m="1904830">faster</span> <span m="1905220">algorithms,</span> <span
  m="1905950">but</span> <span m="1906110">this</span> <span
  m="1906290">is</span> <span m="1906620">one</span> <span
  m="1906860">that</span> <span m="1907400">works</span> <span
  m="1907700">quite</span> <span m="1907930">practically.</span></p><p><span
  m="1910430">One</span> <span m="1910620">more.</span> <span
  m="1912080">Heap</span> <span m="1912390">queue,</span> <span
  m="1913310">this</span> <span m="1913510">is</span> <span
  m="1913640">in</span> <span m="1913760">the</span> <span
  m="1913860">Python</span> <span m="1914200">standard</span> <span
  m="1914510">library</span> <span m="1915590">and</span> <span
  m="1915760">implements</span> <span m="1916150">something</span> <span
  m="1916440">called</span> <span m="1916540">the</span> <span
  m="1916630">heap,</span> <span m="1917120">which</span> <span
  m="1917410">will</span> <span m="1917490">be</span> <span
  m="1917820">in</span> <span m="1918190">lecture</span> <span
  m="1918520">four.</span> <span m="1919540">So,</span> <span
  m="1919670">coming</span> <span m="1919940">soon</span> <span
  m="1920680">to</span> <span m="1920850">a</span> <span
  m="1920920">classroom</span> <span m="1921290">near</span> <span
  m="1921480">you.</span></p><p><span m="1922780">All  right,</span> <span
  m="1923100">enough</span> <span m="1923270">advertisement.</span> <span
  m="1924760">That</span> <span m="1925000">gives</span> <span
  m="1925160">you</span> <span m="1925250">some</span> <span
  m="1925490">idea</span> <span m="1925790">of</span> <span
  m="1925860">the</span> <span m="1925950">model</span> <span
  m="1926260">of</span> <span m="1926370">computation.</span> <span
  m="1927200">There's</span> <span m="1927470">a</span> <span
  m="1927530">whole</span> <span m="1927730">bunch</span> <span
  m="1927960">more</span> <span m="1928220">in</span> <span
  m="1928340">these</span> <span m="1928560">notes</span> <span
  m="1928850">which</span> <span m="1929070">are</span> <span
  m="1929480">online.</span> <span m="1931330">Go</span> <span
  m="1931460">check</span> <span m="1931680">them</span> <span
  m="1931820">out.</span> <span m="1932930">And</span> <span
  m="1933210">some</span> <span m="1933410">of</span> <span
  m="1933450">them,</span> <span m="1933590">we'll</span> <span
  m="1933750">cover</span> <span m="1934020">in</span> <span
  m="1934050">recitation</span> <span m="1934580">tomorrow.</span></p><p><span
  m="1937430">I'd</span> <span m="1937640">like</span> <span
  m="1937790">to--</span> <span m="1937970">now</span> <span
  m="1938150">that</span> <span m="1938260">we</span> <span
  m="1938460">are</span> <span m="1938630">sort of</span> <span
  m="1938890">comfortable</span> <span m="1939370">for</span> <span
  m="1939530">what</span> <span m="1939770">costs</span> <span
  m="1940130">what</span> <span m="1940430">in</span> <span
  m="1940590">Python,</span> <span m="1941660">I</span> <span
  m="1941790">want</span> <span m="1941980">to</span> <span m="1942040">do
  a</span> <span m="1942230">real</span> <span m="1942460">example.</span> <span
  m="1943350">So</span> <span m="1943510">last</span> <span
  m="1943740">time,</span> <span m="1943890">we</span> <span
  m="1943960">did</span> <span m="1944100">peak</span> <span
  m="1944290">finding.</span> <span m="1945160">We're</span> <span
  m="1945310">going</span> <span m="1945390">to</span> <span
  m="1945430">have</span> <span m="1945630">another</span> <span
  m="1945950">example</span> <span m="1946520">which</span> <span
  m="1946860">is</span> <span m="1947260">called</span> <span
  m="1948210">document</span> <span m="1948690">distance.</span> <span
  m="1951400">So</span> <span m="1951650">let's</span> <span
  m="1951880">do</span> <span m="1951970">that.</span> <span
  m="1955390">Any</span> <span m="1955570">questions</span> <span
  m="1956060">before</span> <span m="1956270">we</span> <span
  m="1956370">go</span> <span m="1956500">on?</span></p><p><span
  m="1960235">All</span> <span m="1960730">right.</span> <span
  m="1990960">So</span> <span m="1992800">document</span> <span
  m="1993190">distance</span> <span m="1993500">problem</span> <span
  m="1993830">is,</span> <span m="1994300">I</span> <span
  m="1994380">give</span> <span m="1994580">you</span> <span
  m="1994680">two</span> <span m="1994830">documents.</span> <span
  m="1995840">I'll</span> <span m="1995920">call them</span> <span
  m="1996280">D1</span> <span m="1997600">D2.</span> <span
  m="1999050">And</span> <span m="1999240">I</span> <span
  m="1999280">want</span> <span m="1999450">to</span> <span
  m="1999510">compute</span> <span m="1999810">the</span> <span
  m="1999910">distance</span> <span m="2000370">between</span> <span
  m="2000720">them.</span> <span m="2002180">And</span> <span
  m="2002280">the</span> <span m="2002380">first</span> <span
  m="2002470">question</span> <span m="2002750">is,</span> <span
  m="2003150">what</span> <span m="2003290">does</span> <span
  m="2003380">that</span> <span m="2003580">mean?</span> <span
  m="2005150">What</span> <span m="2005310">is</span> <span
  m="2005430">this</span> <span m="2005600">distance</span> <span
  m="2005970">function?</span></p><p><span m="2007170">Let</span> <span
  m="2007340">me</span> <span m="2007450">first</span> <span
  m="2007680">tell</span> <span m="2007800">you</span> <span
  m="2007900">some</span> <span m="2008060">motivations</span> <span
  m="2009550">for</span> <span m="2009830">computing</span> <span
  m="2010330">document</span> <span m="2010730">distance.</span> <span
  m="2012010">Let's</span> <span m="2012370">say</span> <span
  m="2013740">you're</span> <span m="2014130">Google</span> <span
  m="2014760">and</span> <span m="2015250">you're</span> <span
  m="2015580">cataloging</span> <span m="2016140">the</span> <span
  m="2016230">entire</span> <span m="2016570">web.</span> <span
  m="2017130">You'd</span> <span m="2017270">like</span> <span
  m="2017430">to</span> <span m="2017540">know</span> <span
  m="2017680">when</span> <span m="2017820">two</span> <span
  m="2018420">web</span> <span m="2018610">pages</span> <span
  m="2018960">are</span> <span m="2019040">basically</span> <span
  m="2019610">identical.</span></p><p><span m="2021060">Because</span> <span
  m="2021760">then</span> <span m="2021850">you</span> <span
  m="2022000">store</span> <span m="2022240">less</span> <span
  m="2022970">and</span> <span m="2023400">because</span> <span
  m="2023690">you</span> <span m="2023810">present it</span> <span
  m="2024210">differently</span> <span m="2024610">to</span> <span
  m="2024710">the</span> <span m="2024810">user.</span> <span
  m="2024990">You</span> <span m="2025140">say,</span> <span
  m="2025420">well,</span> <span m="2026190">there's</span> <span
  m="2026240">this</span> <span m="2026400">page.</span> <span
  m="2026770">And</span> <span m="2026850">there's</span> <span
  m="2027370">lots</span> <span m="2027610">of</span> <span
  m="2027650">extra</span> <span m="2027930">copies.</span> <span
  m="2028320">But you</span> <span m="2028710">just</span> <span
  m="2028950">need--</span> <span m="2029350">here's</span> <span
  m="2029870">the</span> <span m="2030210">canonical</span> <span
  m="2030680">one.</span></p><p><span m="2031470">Or</span> <span
  m="2031780">you're</span> <span m="2031940">Wikipedia.</span> <span
  m="2032960">And</span> <span m="2033235">I don't</span> <span m="2033510">know
  if</span> <span m="2033920">you've</span> <span m="2034000">ever</span> <span
  m="2034140">looked</span> <span m="2034360">at</span> <span
  m="2034420">Wikipedia.</span> <span m="2034980">There's</span> <span
  m="2035060">a</span> <span m="2035110">list</span> <span m="2035350">of</span>
  <span m="2035430">all</span> <span m="2035630">mirrors</span> <span
  m="2036020">of</span> <span m="2036100">Wikipedia.</span></p><p><span
  m="2036720">There's</span> <span m="2036790">like</span> <span
  m="2037460">millions</span> <span m="2037850">of</span> <span
  m="2037980">them.</span> <span m="2038600">And</span> <span
  m="2038990">they</span> <span m="2039440">find</span> <span
  m="2039930">them</span> <span m="2040820">by</span> <span
  m="2041020">hand.</span> <span m="2041620">But</span> <span
  m="2041760">you</span> <span m="2041890">could</span> <span
  m="2042050">do</span> <span m="2042190">that</span> <span
  m="2042670">using</span> <span m="2043110">document</span> <span
  m="2043480">distance.</span> <span m="2044160">Say,</span> <span
  m="2044430">are</span> <span m="2044570">these</span> <span
  m="2044920">basically</span> <span m="2045260">identical</span> <span
  m="2045680">other</span> <span m="2045900">than</span> <span
  m="2046110">like</span> <span m="2046310">some</span> <span
  m="2046610">stuff</span> <span m="2046890">at</span> <span
  m="2046970">the--</span> <span m="2047160">junk</span> <span
  m="2047510">at</span> <span m="2047950">the</span> <span
  m="2048040">beginning</span> <span m="2048420">or the end?</span></p><p><span
  m="2050120">Or</span> <span m="2050570">if</span> <span
  m="2050750">you're</span> <span m="2050840">teaching</span> <span
  m="2051130">this</span> <span m="2051260">class</span> <span m="2051590">and
  you</span> <span m="2051770">want</span> <span m="2051940">to</span> <span
  m="2051989">detect,</span> <span m="2052449">are two</span> <span
  m="2052580">problem</span> <span m="2052900">sets</span> <span
  m="2053179">cheating?</span> <span m="2054690">Are they</span> <span
  m="2054800">identical?</span> <span m="2055290">We</span> <span
  m="2055400">do</span> <span m="2055530">this</span> <span m="2055710">a</span>
  <span m="2055770">lot.</span></p><p><span m="2056230">I'm</span> <span
  m="2056389">not</span> <span m="2056540">going</span> <span
  m="2056630">to</span> <span m="2056710">tell</span> <span
  m="2056870">you</span> <span m="2056989">what</span> <span
  m="2057120">distance</span> <span m="2057449">function</span> <span
  m="2057730">we</span> <span m="2057850">use.</span> <span m="2058719">Because
  that would</span> <span m="2059030">defeat</span> <span m="2059400">the</span>
  <span m="2059480">point.</span> <span m="2060130">It's</span> <span
  m="2060210">not</span> <span m="2060420">the</span> <span
  m="2060510">one</span> <span m="2060679">we</span> <span
  m="2060780">cover</span> <span m="2061020">in</span> <span
  m="2061080">class.</span></p><p><span m="2061920">But</span> <span
  m="2062570">we</span> <span m="2062830">use</span> <span
  m="2063120">automated</span> <span m="2063620">tests</span> <span
  m="2063900">for</span> <span m="2064420">whether</span> <span
  m="2064630">you're</span> <span m="2064760">cheating.</span> <span
  m="2065770">I've</span> <span m="2067560">got</span> <span
  m="2067690">some</span> <span m="2067820">more.</span> <span
  m="2069250">Web</span> <span m="2069500">search.</span></p><p><span
  m="2070570">Let's</span> <span m="2070639">say</span> <span
  m="2070750">you're</span> <span m="2070880">Google</span> <span
  m="2071199">again.</span> <span m="2071880">And</span> <span
  m="2072400">you</span> <span m="2072590">want</span> <span
  m="2072860">to</span> <span m="2072929">implement</span> <span
  m="2074360">searching.</span> <span m="2075139">Like,</span> <span
  m="2075710">I</span> <span m="2075830">give</span> <span
  m="2076090">you</span> <span m="2076659">three</span> <span
  m="2077010">words.</span></p><p><span m="2077389">I'm</span> <span
  m="2077489">searching</span> <span m="2077880">for</span> <span
  m="2078960">introduction</span> <span m="2079489">to</span> <span
  m="2079650">algorithms.</span> <span m="2080909">You</span> <span
  m="2081050">can</span> <span m="2081190">think</span> <span
  m="2081409">of</span> <span m="2081530">introduction to</span> <span
  m="2081929">algorithms</span> <span m="2082280">as</span> <span
  m="2082429">a</span> <span m="2082480">very</span> <span
  m="2082730">short</span> <span m="2083020">document.</span> <span
  m="2083980">And</span> <span m="2084190">you</span> <span
  m="2084380">want</span> <span m="2084580">to</span> <span
  m="2084659">test</span> <span m="2085120">whether</span> <span
  m="2085370">that</span> <span m="2085580">document is</span> <span
  m="2085980">similar</span> <span m="2086460">to</span> <span
  m="2086610">all</span> <span m="2086780">the</span> <span
  m="2086889">other</span> <span m="2087040">documents</span> <span
  m="2087639">on</span> <span m="2087790">the</span> <span
  m="2087860">web.</span></p><p><span m="2088710">And</span> <span
  m="2088889">the</span> <span m="2088949">one</span> <span
  m="2089060">that's</span> <span m="2089199">most</span> <span
  m="2089429">similar,</span> <span m="2089790">the</span> <span m="2090050">one
  that</span> <span m="2090290">has</span> <span m="2090449">the</span> <span
  m="2090500">small</span> <span m="2090770">distance,</span> <span
  m="2091330">that's</span> <span m="2091570">maybe</span> <span
  m="2091820">what</span> <span m="2091980">you</span> <span
  m="2092080">want</span> <span m="2092199">to</span> <span
  m="2092250">put</span> <span m="2092400">at</span> <span
  m="2092489">the</span> <span m="2092580">top.</span> <span
  m="2092969">That's</span> <span m="2093170">obviously</span> <span
  m="2093469">not</span> <span m="2093630">what</span> <span
  m="2093739">Google</span> <span m="2094000">does.</span> <span
  m="2094370">But</span> <span m="2094389">it's</span> <span
  m="2094560">part</span> <span m="2094840">of</span> <span
  m="2094920">what</span> <span m="2095060">it</span> <span
  m="2095159">does.</span></p><p><span m="2096969">So</span> <span
  m="2097450">that's</span> <span m="2097700">why</span> <span
  m="2097880">you</span> <span m="2097970">might</span> <span
  m="2098160">care.</span> <span m="2098750">It's</span> <span
  m="2098900">partly</span> <span m="2099230">also</span> <span
  m="2099450">just</span> <span m="2099660">a</span> <span
  m="2099720">toy</span> <span m="2099900">problem.</span> <span
  m="2100280">It</span> <span m="2100370">lets us</span> <span
  m="2100680">illustrate</span> <span m="2101070">a</span> <span
  m="2101120">lot</span> <span m="2101400">of</span> <span
  m="2102770">the</span> <span m="2103280">techniques</span> <span
  m="2103720">that</span> <span m="2103830">we</span> <span
  m="2104480">develop</span> <span m="2104820">in</span> <span
  m="2104900">this</span> <span m="2105030">class.</span></p><p><span
  m="2107790">All</span> <span m="2108232">right,</span> <span
  m="2108680">I'm</span> <span m="2108870">going</span> <span
  m="2108990">to</span> <span m="2109070">think</span> <span
  m="2109340">of</span> <span m="2110320">a</span> <span
  m="2110430">document</span> <span m="2112280">as</span> <span
  m="2112720">a</span> <span m="2112890">sequence</span> <span
  m="2113290">of</span> <span m="2113410">words.</span> <span
  m="2116790">Just</span> <span m="2116990">to</span> <span
  m="2117050">be</span> <span m="2117210">a</span> <span
  m="2117280">little</span> <span m="2117580">bit</span> <span
  m="2117700">more</span> <span m="2117910">formal,</span> <span
  m="2119410">what</span> <span m="2119600">do</span> <span m="2119670">I</span>
  <span m="2119720">mean</span> <span m="2119920">by</span> <span
  m="2120060">document?</span> <span m="2121610">And</span> <span
  m="2121760">a</span> <span m="2121820">word</span> <span m="2123290">is</span>
  <span m="2123470">just</span> <span m="2123650">going</span> <span
  m="2123770">to</span> <span m="2123850">be</span> <span m="2124690">a</span>
  <span m="2124760">string</span> <span m="2126150">of</span> <span
  m="2127030">alphanumeric</span> <span m="2127650">characters--</span> <span
  m="2129120">A</span> <span m="2129390">through</span> <span
  m="2129550">Z</span> <span m="2130270">and</span> <span m="2130460">zero
  through</span> <span m="2130790">nine.</span></p><p><span
  m="2135180">OK,</span> <span m="2135340">so</span> <span m="2135480">if</span>
  <span m="2135590">I</span> <span m="2135660">have</span> <span
  m="2135820">a</span> <span m="2135890">document</span> <span
  m="2136370">which</span> <span m="2136580">you</span> <span
  m="2136750">also</span> <span m="2136980">think</span> <span
  m="2137160">of</span> <span m="2137250">as</span> <span m="2137370">a</span>
  <span m="2137420">string</span> <span m="2138230">and</span> <span
  m="2138390">you</span> <span m="2138790">basically</span> <span
  m="2139200">delete</span> <span m="2139510">all</span> <span
  m="2139660">the</span> <span m="2139740">white</span> <span
  m="2139960">space</span> <span m="2140280">and</span> <span
  m="2140410">punctuation</span> <span m="2141070">all</span> <span
  m="2141190">the</span> <span m="2141310">other</span> <span
  m="2141780">junk</span> <span m="2142040">that's</span> <span
  m="2142200">in</span> <span m="2142320">there.</span> <span
  m="2143100">This</span> <span m="2143530">Everything</span> <span
  m="2143930">in</span> <span m="2144000">between</span> <span
  m="2144350">those,</span> <span m="2144800">those are</span> <span
  m="2144830">the</span> <span m="2144940">words.</span> <span
  m="2146820">That's</span> <span m="2147050">a</span> <span
  m="2147360">simple</span> <span m="2147730">definition</span> <span
  m="2148270">of</span> <span m="2148720">decomposing</span> <span
  m="2149210">documents</span> <span m="2149630">into</span> <span
  m="2149810">words.</span></p><p><span m="2151490">And</span> <span
  m="2151920">now</span> <span m="2152100">we</span> <span
  m="2152230">can</span> <span m="2152410">think</span> <span
  m="2152630">of</span> <span m="2152790">about</span> <span
  m="2153060">what--</span> <span m="2153240">I</span> <span
  m="2153340">want</span> <span m="2153570">to</span> <span
  m="2153650">know</span> <span m="2153790">whether</span> <span
  m="2153960">D1</span> <span m="2154070">and</span> <span m="2154150">D2</span>
  <span m="2154370">are</span> <span m="2154740">similar.</span> <span
  m="2155340">And</span> <span m="2155600">I've</span> <span
  m="2155920">thought</span> <span m="2156150">about</span> <span
  m="2156390">my</span> <span m="2156520">document</span> <span
  m="2157000">as</span> <span m="2157100">a</span> <span
  m="2157180">collection</span> <span m="2157520">of</span> <span
  m="2157620">words.</span> <span m="2158300">Maybe</span> <span
  m="2158970">they're</span> <span m="2159150">similar</span> <span
  m="2159590">if</span> <span m="2159710">they</span> <span
  m="2159800">share</span> <span m="2160100">a</span> <span
  m="2160140">lot</span> <span m="2160310">of</span> <span
  m="2160390">words</span> <span m="2160680">in</span> <span
  m="2160780">common.</span></p><p><span m="2162540">So</span> <span
  m="2162950">that's the</span> <span m="2163200">idea.</span> <span
  m="2165660">Look</span> <span m="2165860">at</span> <span
  m="2165940">shared</span> <span m="2166250">words</span> <span
  m="2169200">and</span> <span m="2169390">use</span> <span
  m="2169580">that</span> <span m="2169840">to</span> <span
  m="2169960">define</span> <span m="2171570">document</span> <span
  m="2171930">distance.</span> <span m="2172300">This</span> <span
  m="2172500">is</span> <span m="2172620">obviously</span> <span
  m="2173050">only</span> <span m="2173320">one</span> <span
  m="2173560">way</span> <span m="2173750">to</span> <span
  m="2173910">define</span> <span m="2174230">distance.</span></p><p><span
  m="2174770">It'll</span> <span m="2174950">be</span> <span
  m="2175080">the</span> <span m="2175190">way</span> <span
  m="2175340">we</span> <span m="2175450">do</span> <span m="2175560">it</span>
  <span m="2175640">in</span> <span m="2175690">this</span> <span
  m="2175830">class.</span> <span m="2176280">But</span> <span
  m="2177320">there</span> <span m="2177430">are</span> <span
  m="2177480">lots</span> <span m="2177730">of</span> <span
  m="2177830">other</span> <span m="2178020">possibilities.</span> <span
  m="2180730">So</span> <span m="2181700">I'm</span> <span
  m="2181930">going</span> <span m="2182240">to</span> <span
  m="2184890">think</span> <span m="2185260">of</span> <span
  m="2185400">a</span> <span m="2185470">document.</span></p><p><span
  m="2187810">It's</span> <span m="2187960">a</span> <span
  m="2188010">sequence</span> <span m="2188380">of</span> <span
  m="2188460">words.</span> <span m="2188860">But</span> <span
  m="2189040">I</span> <span m="2189460">could</span> <span
  m="2189640">also</span> <span m="2189990">think</span> <span
  m="2190230">of</span> <span m="2190340">it</span> <span m="2190780">as</span>
  <span m="2191260">a</span> <span m="2191850">vector.</span> <span
  m="2195090">So</span> <span m="2195250">if</span> <span m="2195340">I</span>
  <span m="2195390">have</span> <span m="2195520">a</span> <span
  m="2195570">document</span> <span m="2196010">D</span> <span
  m="2196620">and</span> <span m="2196730">I</span> <span
  m="2196770">have</span> <span m="2196980">a</span> <span
  m="2197040">word</span> <span m="2197310">W,</span> <span
  m="2199820">this</span> <span m="2200450">D</span> <span m="2200770">of</span>
  <span m="2200840">W</span> <span m="2201330">is</span> <span
  m="2201500">going</span> <span m="2201640">to</span> <span
  m="2201700">be</span> <span m="2202250">the</span> <span
  m="2202340">number</span> <span m="2202720">of</span> <span
  m="2202800">times</span> <span m="2203930">that</span> <span
  m="2204170">word</span> <span m="2204460">occurs</span> <span
  m="2205590">in</span> <span m="2205770">the</span> <span
  m="2205850">document.</span> <span m="2207160">So,</span> <span
  m="2207310">number</span> <span m="2207570">of</span> <span
  m="2207620">recurrences</span> <span m="2208970">W</span> <span
  m="2209960">in</span> <span m="2210250">the</span> <span
  m="2210340">document</span> <span m="2210940">D.</span></p><p><span
  m="2212260">So</span> <span m="2212450">it's</span> <span m="2212560">a</span>
  <span m="2212610">number.</span> <span m="2213140">It's</span> <span
  m="2213290">an</span> <span m="2213380">integer.</span> <span
  m="2214480">Non-negative</span> <span m="2214990">integer.</span> <span
  m="2216510">Could</span> <span m="2216630">be</span> <span
  m="2216730">0.</span> <span m="2217760">Could be</span> <span
  m="2217850">one.</span> <span m="2218140">Could</span> <span
  m="2218280">be</span> <span m="2218400">a</span> <span
  m="2218450">million.</span></p><p><span m="2220440">I</span> <span
  m="2220480">think</span> <span m="2220710">of</span> <span
  m="2220790">this</span> <span m="2220960">as</span> <span m="2221370">a</span>
  <span m="2221460">giant</span> <span m="2221900">vector.</span> <span
  m="2223210">A</span> <span m="2223520">vector</span> <span
  m="2223890">is</span> <span m="2224010">indexed</span> <span
  m="2225110">by</span> <span m="2225660">all</span> <span
  m="2225920">words.</span> <span m="2227800">And</span> <span
  m="2227970">for</span> <span m="2228060">each</span> <span
  m="2228270">of</span> <span m="2228350">them,</span> <span
  m="2228540">there's</span> <span m="2228700">some</span> <span
  m="2229660">frequency.</span></p><p><span m="2230110">Of</span> <span
  m="2230170">lot</span> <span m="2230370">of</span> <span
  m="2230420">them</span> <span m="2230540">are</span> <span
  m="2230620">zero.</span> <span m="2231530">And</span> <span
  m="2231740">then</span> <span m="2231940">some</span> <span
  m="2232180">of</span> <span m="2232230">them</span> <span
  m="2232410">have</span> <span m="2232730">some</span> <span
  m="2233480">positive</span> <span m="2233880">number</span> <span
  m="2234190">occurrences.</span> <span m="2236120">You</span> <span
  m="2236250">could</span> <span m="2236400">think</span> <span
  m="2236580">of</span> <span m="2236730">every</span> <span
  m="2237020">document</span> <span m="2237480">is</span> <span
  m="2237750">as</span> <span m="2237950">being</span> <span
  m="2238620">one</span> <span m="2238810">of</span> <span
  m="2238860">these</span> <span m="2239020">plots</span> <span
  m="2240410">in</span> <span m="2240580">this</span> <span
  m="2241150">common</span> <span m="2241480">axis.</span></p><p><span
  m="2242600">There's</span> <span m="2242750">infinitely</span> <span
  m="2243150">many</span> <span m="2243350">words</span> <span
  m="2243620">down</span> <span m="2243800">here.</span> <span
  m="2244020">So</span> <span m="2244180">it's</span> <span
  m="2244310">kind</span> <span m="2244450">of</span> <span m="2244520">a</span>
  <span m="2244580">big</span> <span m="2244780">axis.</span> <span
  m="2245220">But</span> <span m="2245745">it's</span> <span
  m="2246070">one</span> <span m="2246250">way</span> <span
  m="2246370">to</span> <span m="2246510">draw</span> <span
  m="2246660">the</span> <span m="2246760">picture.</span></p><p><span
  m="2247600">OK,</span> <span m="2247890">so</span> <span
  m="2248430">for</span> <span m="2248560">example,</span> <span
  m="2253620">take</span> <span m="2253870">two</span> <span
  m="2254090">very</span> <span m="2254290">important</span> <span
  m="2254600">documents.</span> <span m="2256420">Everybody</span> <span
  m="2256770">likes</span> <span m="2257010">cats</span> <span
  m="2257270">and</span> <span m="2257360">dogs.</span> <span
  m="2258270">So</span> <span m="2259350">these</span> <span
  m="2259520">are</span> <span m="2259600">two</span> <span
  m="2259800">word</span> <span m="2259980">documents.</span></p><p><span
  m="2261510">And</span> <span m="2261770">so</span> <span m="2261930">we</span>
  <span m="2262040">can</span> <span m="2262180">draw</span> <span
  m="2262490">them.</span> <span m="2262890">Because</span> <span
  m="2263090">there's</span> <span m="2263230">only</span> <span
  m="2263440">three</span> <span m="2263610">different</span> <span
  m="2263870">words</span> <span m="2264120">here,</span> <span
  m="2264240">we</span> <span m="2264350">can</span> <span
  m="2264460">draw</span> <span m="2264660">them</span> <span
  m="2264840">in</span> <span m="2265010">three</span> <span
  m="2265210">dimensional</span> <span m="2265630">space.</span> <span
  m="2267810">Beyond</span> <span m="2268110">that,</span> <span
  m="2268290">it's a little</span> <span m="2268550">hard</span> <span
  m="2268710">to</span> <span m="2268770">draw.</span></p><p><span
  m="2269110">So</span> <span m="2270040">we</span> <span
  m="2270160">have,</span> <span m="2270580">let's</span> <span
  m="2270820">say,</span> <span m="2271340">which</span> <span
  m="2271560">one's</span> <span m="2271850">the--</span> <span
  m="2272770">let's</span> <span m="2272920">say</span> <span
  m="2273010">this</span> <span m="2273210">one's</span> <span
  m="2273440">the--</span> <span m="2274110">makes it</span> <span
  m="2274340">easier</span> <span m="2274640">to</span> <span
  m="2274710">draw.</span> <span m="2276550">So</span> <span
  m="2276790">there's</span> <span m="2277140">going</span> <span
  m="2277290">to</span> <span m="2277360">be</span> <span
  m="2277540">just</span> <span m="2277750">zero</span> <span
  m="2277780">here</span> <span m="2278710">and</span> <span
  m="2278860">one.</span> <span m="2280350">For</span> <span
  m="2280460">each</span> <span m="2280590">of</span> <span
  m="2280640">the</span> <span m="2280740">axes,</span> <span
  m="2281200">let's</span> <span m="2281300">say</span> <span
  m="2281655">this</span> <span m="2282010">is</span> <span
  m="2283010">dog</span> <span m="2284260">and</span> <span m="2284420">this
  is</span> <span m="2284740">cat.</span></p><p><span m="2286310">OK,</span>
  <span m="2286600">so</span> <span m="2286920">the</span> <span
  m="2287280">cat</span> <span m="2287740">has</span> <span
  m="2288100">won</span> <span m="2288380">the--</span> <span
  m="2288920">it</span> <span m="2289050">has</span> <span
  m="2289270">one</span> <span m="2289490">cat</span> <span
  m="2289860">and</span> <span m="2289990">no</span> <span
  m="2290130">dog.</span> <span m="2290510">So</span> <span
  m="2290760">it's</span> <span m="2290960">here.</span> <span
  m="2292170">It's</span> <span m="2292290">a</span> <span
  m="2292340">vector</span> <span m="2293380">pointing</span> <span
  m="2293940">out</span> <span m="2294510">there.</span></p><p><span
  m="2295480">The</span> <span m="2295850">dog</span> <span
  m="2297130">you've</span> <span m="2297280">got</span> <span
  m="2299220">basically</span> <span m="2299450">pointing</span> <span
  m="2299740">there.</span> <span m="2301160">OK,</span> <span
  m="2301320">so</span> <span m="2301460">these</span> <span
  m="2301660">are</span> <span m="2301730">two</span> <span
  m="2301870">vectors.</span> <span m="2305150">So</span> <span
  m="2305300">how</span> <span m="2305450">do</span> <span m="2305520">I</span>
  <span m="2305590">measure</span> <span m="2305870">how</span> <span
  m="2305980">different</span> <span m="2306330">two</span> <span
  m="2306460">vectors</span> <span m="2306890">are?</span> <span
  m="2307640">Any</span> <span m="2307840">suggestions</span> <span
  m="2308460">from</span> <span m="2309580">vector</span> <span
  m="2309840">calculus?</span></p><p><span m="2313864">AUDIENCE:</span> <span
  m="2314326">Inner</span> <span m="2314557">product?</span></p><p><span
  m="2315720">PROFESSOR: Inner</span> <span m="2315930">product?</span> <span
  m="2316600">Yeah,</span> <span m="2316990">that's</span> <span
  m="2317180">good</span> <span m="2317360">suggestion.</span> <span
  m="2318780">Any</span> <span m="2318960">others.</span></p><p><span
  m="2321550">OK,</span> <span m="2321710">we'll</span> <span
  m="2321820">go</span> <span m="2321990">with inner</span> <span
  m="2322190">product.</span> <span m="2323010">I</span> <span
  m="2323300">like</span> <span m="2323610">inner</span> <span
  m="2323730">product,</span> <span m="2326640">also</span> <span
  m="2326850">known</span> <span m="2327010">as</span> <span
  m="2327110">dot</span> <span m="2327505">product.</span> <span
  m="2328630">Just</span> <span m="2328960">define</span> <span
  m="2329210">that</span> <span m="2329290">quickly.</span></p><p><span
  m="2336780">So</span> <span m="2337070">we</span> <span
  m="2337210">could--</span> <span m="2337550">I'm</span> <span
  m="2337690">going</span> <span m="2337780">to</span> <span
  m="2337840">call</span> <span m="2338020">this</span> <span
  m="2338170">D</span> <span m="2338320">prime</span> <span
  m="2338790">because</span> <span m="2338970">it's</span> <span
  m="2339110">not</span> <span m="2339290">what</span> <span
  m="2339400">we're</span> <span m="2339530">going</span> <span
  m="2339660">to</span> <span m="2339700">end</span> <span m="2339910">up</span>
  <span m="2340080">with.</span> <span m="2342360">We</span> <span
  m="2342480">could</span> <span m="2342620">think</span> <span
  m="2342790">of</span> <span m="2342900">this</span> <span
  m="2343070">as</span> <span m="2343420">the</span> <span
  m="2343480">dot</span> <span m="2343730">product</span> <span
  m="2344583">of</span> <span m="2344936">D1</span> <span m="2345390">and</span>
  <span m="2345490">D2,</span> <span m="2346160">also</span> <span
  m="2346430">known</span> <span m="2346620">as</span> <span
  m="2346750">the</span> <span m="2346850">sum</span> <span
  m="2347200">over</span> <span m="2347410">all</span> <span
  m="2347640">words</span> <span m="2348670">of</span> <span
  m="2349870">D1</span> <span m="2350363">of</span> <span m="2350856">W</span>
  <span m="2351820">times</span> <span m="2352940">D2</span> <span
  m="2353090">of</span> <span m="2353500">W.</span> <span m="2357380">So</span>
  <span m="2357590">for</span> <span m="2357710">example,</span> <span
  m="2358090">you</span> <span m="2358180">take</span> <span
  m="2358360">the</span> <span m="2358460">dot</span> <span
  m="2358690">product</span> <span m="2358950">of</span> <span
  m="2359010">these</span> <span m="2359190">two</span> <span
  m="2359300">guys.</span></p><p><span m="2360010">Those</span> <span
  m="2360470">match.</span> <span m="2361540">So</span> <span
  m="2361870">you</span> <span m="2362030">get</span> <span
  m="2362220">one</span> <span m="2364370">point</span> <span
  m="2364800">there,</span> <span m="2365860">cat and</span> <span
  m="2366240">dog</span> <span m="2366760">multiplied</span> <span
  m="2367210">by</span> <span m="2367370">zero.</span> <span
  m="2367940">So</span> <span m="2368350">you</span> <span
  m="2368720">don't</span> <span m="2368890">get</span> <span
  m="2369020">much</span> <span m="2369260">there.</span></p><p><span
  m="2370600">So</span> <span m="2370730">this</span> <span
  m="2370930">is</span> <span m="2371030">some</span> <span
  m="2371240">measure</span> <span m="2371500">of</span> <span
  m="2371560">distance.</span> <span m="2373410">But</span> <span
  m="2375320">it's</span> <span m="2375420">a</span> <span
  m="2375460">measure</span> <span m="2375790">of,</span> <span
  m="2376260">actually,</span> <span m="2377190">of</span> <span
  m="2377320">commonality.</span> <span m="2378220">So</span> <span
  m="2378500">it would be sort of</span> <span m="2378950">inverse</span> <span
  m="2379350">distance,</span> <span m="2379780">sorry.</span></p><p><span
  m="2381160">If</span> <span m="2381380">you</span> <span
  m="2381500">have</span> <span m="2381640">a</span> <span
  m="2381670">high</span> <span m="2382510">dot</span> <span
  m="2382710">product,</span> <span m="2383200">you</span> <span
  m="2383300">have</span> <span m="2383310">a</span> <span
  m="2383340">lot</span> <span m="2383570">of</span> <span
  m="2383660">things</span> <span m="2383870">in</span> <span
  m="2383960">common.</span> <span m="2384500">Because</span> <span
  m="2384790">a</span> <span m="2384840">lot</span> <span m="2385080">of</span>
  <span m="2385140">these</span> <span m="2385320">things</span> <span
  m="2385600">didn't</span> <span m="2385910">be--</span> <span
  m="2386210">wasn't zero</span> <span m="2386550">times</span> <span
  m="2387180">something.</span> <span m="2387840">It's</span> <span
  m="2387950">actually a</span> <span m="2388400">positive</span> <span
  m="2388770">number</span> <span m="2389010">times</span> <span
  m="2389220">some</span> <span m="2389370">positive</span> <span
  m="2389740">number.</span> <span m="2390460">If you have a</span> <span
  m="2390510">lot</span> <span m="2390790">of</span> <span
  m="2390900">shared</span> <span m="2391170">words,</span> <span
  m="2392150">than</span> <span m="2392290">that</span> <span
  m="2392420">looks</span> <span m="2392610">good.</span></p><p><span
  m="2393270">The</span> <span m="2393370">trouble</span> <span
  m="2393590">of</span> <span m="2393670">this</span> <span
  m="2393880">is</span> <span m="2394000">if</span> <span m="2394140">I</span>
  <span m="2394210">have</span> <span m="2394400">a</span> <span
  m="2394460">long</span> <span m="2394820">document--</span> <span
  m="2395280">say, a</span> <span m="2395450">million</span> <span
  m="2395820">words--</span> <span m="2397160">and</span> <span
  m="2397390">it's</span> <span m="2397530">99%</span> <span
  m="2398620">in</span> <span m="2398730">common</span> <span
  m="2399210">with</span> <span m="2399450">another</span> <span
  m="2399740">document</span> <span m="2400210">that's</span> <span
  m="2400780">a</span> <span m="2400850">million</span> <span
  m="2401180">words</span> <span m="2401410">long,</span> <span
  m="2402760">it's</span> <span m="2402970">still--</span> <span
  m="2404550">it</span> <span m="2404830">looks</span> <span
  m="2405040">super</span> <span m="2405510">similar.</span> <span
  m="2406310">Actually,</span> <span m="2407020">I need to</span> <span
  m="2407280">do</span> <span m="2407400">it</span> <span m="2407500">the</span>
  <span m="2407520">other</span> <span m="2407650">way</span> <span
  m="2407690">around.</span> <span m="2408970">Let's</span> <span
  m="2409170">say</span> <span m="2409640">it's</span> <span
  m="2409840">a</span> <span m="2410800">million</span> <span
  m="2411090">words</span> <span m="2411300">long</span> <span
  m="2411590">and</span> <span m="2411680">half</span> <span
  m="2411990">of</span> <span m="2412050">the</span> <span
  m="2412140">words</span> <span m="2412380">are</span> <span
  m="2412440">in</span> <span m="2412510">common.</span></p><p><span
  m="2412850">So</span> <span m="2412970">not</span> <span
  m="2413190">that</span> <span m="2413360">many,</span> <span
  m="2413610">but</span> <span m="2413790">a</span> <span
  m="2413830">fair</span> <span m="2414050">number.</span> <span
  m="2415190">Then</span> <span m="2415370">I</span> <span
  m="2415450">have</span> <span m="2415650">a</span> <span
  m="2415710">score</span> <span m="2416160">of</span> <span
  m="2416260">like</span> <span m="2416710">500,000.</span> <span
  m="2418590">And</span> <span m="2418740">then</span> <span
  m="2418900">I</span> <span m="2418980">have</span> <span
  m="2419230">two</span> <span m="2419400">documents</span> <span
  m="2419850">which are,</span> <span m="2420000">say,</span> <span
  m="2420240">100</span> <span m="2420610">words</span> <span
  m="2420810">long.</span> <span m="2421020">And</span> <span
  m="2421100">they're</span> <span m="2421220">identical.</span></p><p><span
  m="2422540">Their</span> <span m="2422680">score</span> <span
  m="2423000">is</span> <span m="2423320">maybe</span> <span
  m="2423640">only</span> <span m="2424350">100.</span> <span
  m="2425670">So</span> <span m="2425830">even</span> <span
  m="2426010">though</span> <span m="2426300">they're</span> <span
  m="2426460">identical,</span> <span m="2427310">it's</span> <span
  m="2427470">not</span> <span m="2427620">quite</span> <span
  m="2427870">scale</span> <span m="2428140">invariant.</span> <span
  m="2429170">So</span> <span m="2429300">it's</span> <span
  m="2429400">not</span> <span m="2429600">quite a</span> <span
  m="2429860">perfect</span> <span m="2430100">measure.</span></p><p><span
  m="2431630">Any</span> <span m="2431740">suggestions</span> <span
  m="2432190">for how to</span> <span m="2432550">fix</span> <span
  m="2432875">this?</span> <span m="2433660">This,</span> <span m="2433760">I
  think, is</span> <span m="2434170">a</span> <span m="2434220">little</span>
  <span m="2434350">trickier.</span> <span m="2434740">Yeah?</span></p><p><span
  m="2435722">AUDIENCE:</span> <span m="2436213">Divide</span> <span
  m="2436704">by</span> <span m="2436949">the</span> <span
  m="2437195">length</span> <span m="2437358">of</span> <span
  m="2437522">the</span> <span m="2437686">vectors?</span></p><p><span
  m="2438180">PROFESSOR: Divide</span> <span m="2438560">by</span> <span
  m="2438660">the</span> <span m="2438750">length</span> <span m="2438970">of
  the</span> <span m="2439060">vectors.</span> <span m="2439350">I think</span>
  <span m="2439640">that's</span> <span m="2439840">worth</span> <span
  m="2440000">a</span> <span m="2440090">pillow.</span> <span
  m="2440970">Haven't</span> <span m="2441170">done any</span> <span
  m="2441380">pillows</span> <span m="2441620">yet.</span> <span
  m="2443280">Sorry</span> <span m="2443750">about that.</span> <span
  m="2444770">So,</span> <span m="2446240">divide</span> <span
  m="2446680">by</span> <span m="2446830">the</span> <span
  m="2446910">length</span> <span m="2447140">of</span> <span
  m="2447240">vector.</span> <span m="2447550">That's</span> <span
  m="2448050">good.</span></p><p><span m="2449520">I'm</span> <span
  m="2449940">going</span> <span m="2450040">to</span> <span
  m="2450100">call</span> <span m="2450270">this</span> <span
  m="2450390">D</span> <span m="2450510">double</span> <span
  m="2450780">prime.</span> <span m="2451030">Still</span> <span
  m="2451270">not</span> <span m="2451460">quite</span> <span
  m="2451660">the</span> <span m="2451740">right</span> <span
  m="2451890">answer.</span> <span m="2454190">Or</span> <span
  m="2454340">not--</span> <span m="2454820">no,</span> <span
  m="2455240">it's</span> <span m="2455390">pretty</span> <span
  m="2455550">good.</span> <span m="2456240">It's pretty</span> <span
  m="2456600">good.</span></p><p><span m="2458060">So</span> <span
  m="2458330">here,</span> <span m="2458590">the</span> <span
  m="2458650">length</span> <span m="2458930">of</span> <span
  m="2459010">the</span> <span m="2459080">vectors</span> <span
  m="2459960">is</span> <span m="2460240">the</span> <span
  m="2460370">number</span> <span m="2460720">of</span> <span
  m="2460780">words</span> <span m="2461150">that</span> <span
  m="2461260">occur</span> <span m="2462030">in</span> <span
  m="2462340">them</span> <span m="2465770">This</span> <span
  m="2465980">is</span> <span m="2466080">pretty</span> <span
  m="2466300">cool.</span> <span m="2466610">But</span> <span
  m="2467040">does</span> <span m="2467250">anyone</span> <span
  m="2467480">recognize</span> <span m="2467900">this</span> <span
  m="2468020">formula?</span> <span m="2470610">Angle,</span> <span
  m="2471310">yeah.</span></p><p><span m="2472200">It's</span> <span
  m="2472350">a</span> <span m="2472400">lot</span> <span
  m="2472590">like</span> <span m="2472750">the</span> <span
  m="2472900">angle</span> <span m="2473260">between</span> <span
  m="2473540">the</span> <span m="2473630">two</span> <span
  m="2473750">vectors.</span> <span m="2474650">It's</span> <span
  m="2474790">just</span> <span m="2475010">off</span> <span
  m="2475380">by</span> <span m="2476700">an</span> <span m="2477110">arc</span>
  <span m="2477580">cos.</span> <span m="2478670">This</span> <span
  m="2478830">is</span> <span m="2478930">the</span> <span
  m="2479030">cosine</span> <span m="2479470">of</span> <span
  m="2479530">the</span> <span m="2479660">angle</span> <span
  m="2479910">between</span> <span m="2480160">the</span> <span
  m="2480250">two</span> <span m="2480380">vectors.</span></p><p><span
  m="2481260">And I'm a</span> <span m="2481620">geometer.</span> <span
  m="2482020">I</span> <span m="2482150">like</span> <span
  m="2482360">geometry.</span> <span m="2483020">So</span> <span
  m="2483080">if</span> <span m="2483170">you</span> <span
  m="2483250">take</span> <span m="2483460">arc</span> <span
  m="2483610">cos</span> <span m="2483890">of</span> <span
  m="2483970">that</span> <span m="2484210">thing,</span> <span
  m="2485110">that's</span> <span m="2485410">a</span> <span
  m="2486220">well</span> <span m="2486430">established</span> <span
  m="2486880">distance</span> <span m="2487190">metric.</span> <span
  m="2487520">This</span> <span m="2487690">goes</span> <span
  m="2487870">back</span> <span m="2488180">to</span> <span
  m="2490410">'75,</span> <span m="2491182">if you</span> <span
  m="2491570">can</span> <span m="2491810">believe</span> <span
  m="2492090">it,</span> <span m="2492210">back</span> <span
  m="2492460">when</span> <span m="2492550">people--</span> <span
  m="2492940">early</span> <span m="2493210">days</span> <span
  m="2493410">of</span> <span m="2493480">document,</span> <span
  m="2494360">information</span> <span m="2494850">retrieval,</span> <span
  m="2496050">way</span> <span m="2496190">before</span> <span
  m="2496460">the</span> <span m="2496550">web,</span> <span m="2497500">people
  were</span> <span m="2497670">still</span> <span m="2497880">working</span>
  <span m="2498140">on this</span> <span m="2498310">stuff.</span></p><p><span
  m="2500670">So</span> <span m="2501880">it's</span> <span m="2502080">a</span>
  <span m="2502130">natural</span> <span m="2502440">measure</span> <span
  m="2502760">of the</span> <span m="2502890">angle</span> <span
  m="2503130">between</span> <span m="2503380">the</span> <span
  m="2503470">two</span> <span m="2503600">vectors.</span> <span
  m="2503990">If</span> <span m="2504110">it's</span> <span
  m="2504310">0,</span> <span m="2505240">they're</span> <span
  m="2505600">basically</span> <span m="2505930">identical.</span> <span
  m="2506690">If</span> <span m="2506840">it's</span> <span
  m="2506980">90</span> <span m="2507190">degrees,</span> <span
  m="2507940">they're</span> <span m="2508090">really,</span> <span
  m="2508460">really</span> <span m="2508570">different.</span> <span
  m="2509670">And</span> <span m="2509920">so</span> <span
  m="2510380">that</span> <span m="2510560">gives</span> <span
  m="2510710">you</span> <span m="2510800">a</span> <span
  m="2510840">nice</span> <span m="2511990">way</span> <span m="2512140">to
  compute</span> <span m="2512390">document</span> <span
  m="2512740">distance.</span></p><p><span m="2513030">The</span> <span
  m="2513130">question</span> <span m="2513500">is,</span> <span
  m="2514000">how</span> <span m="2514110">do</span> <span m="2514190">we</span>
  <span m="2514290">actually</span> <span m="2514560">compute</span> <span
  m="2515090">that</span> <span m="2515330">measure?</span> <span
  m="2515670">Now that</span> <span m="2515910">we've</span> <span
  m="2516050">come</span> <span m="2516200">up</span> <span
  m="2516320">with</span> <span m="2516430">something</span> <span
  m="2516710">that's</span> <span m="2516860">reasonable,</span> <span
  m="2518020">how</span> <span m="2518230">do</span> <span m="2518360">I</span>
  <span m="2518430">actually</span> <span m="2519080">find</span> <span
  m="2519400">this</span> <span m="2519550">value?</span> <span
  m="2520460">I</span> <span m="2520570">need</span> <span m="2520840">to</span>
  <span m="2521540">compute</span> <span m="2522010">these</span> <span
  m="2522220">vectors--</span> <span m="2523610">the</span> <span
  m="2523700">number</span> <span m="2523930">of</span> <span
  m="2524000">recurrences</span> <span m="2524520">of</span> <span
  m="2524620">each</span> <span m="2524780">word in the</span> <span
  m="2525140">document.</span></p><p><span m="2526500">And</span> <span
  m="2526970">I</span> <span m="2527110">need</span> <span
  m="2527400">you</span> <span m="2527540">compute</span> <span
  m="2528220">the</span> <span m="2528300">dot</span> <span
  m="2528550">product.</span> <span m="2529000">And</span> <span
  m="2529110">then</span> <span m="2529250">I</span> <span
  m="2529310">need</span> <span m="2529460">to</span> <span
  m="2529570">divide.</span> <span m="2529900">That's</span> <span
  m="2530100">really</span> <span m="2530300">easy.</span></p><p><span
  m="2530630">So, dot</span> <span m="2530890">product--</span> <span
  m="2532660">and I</span> <span m="2532830">also</span> <span
  m="2533070">need</span> <span m="2533260">to</span> <span
  m="2533350">decompose</span> <span m="2533840">a</span> <span
  m="2533900">document</span> <span m="2534330">to</span> <span
  m="2534500">a</span> <span m="2534560">list</span> <span m="2534760">of</span>
  <span m="2534830">words.</span> <span m="2535610">So</span> <span
  m="2535740">there</span> <span m="2535910">are</span> <span
  m="2535950">three</span> <span m="2536190">things</span> <span
  m="2536460">I</span> <span m="2536530">need</span> <span m="2536720">to</span>
  <span m="2536820">do.</span> <span m="2537610">Let</span> <span
  m="2537740">me</span> <span m="2537900">write</span> <span
  m="2538080">them</span> <span m="2538190">down.</span></p><p><span
  m="2550510">So</span> <span m="2550810">a sort</span> <span
  m="2550970">of</span> <span m="2551050">algorithm.</span> <span
  m="2556580">There's</span> <span m="2557070">one,</span> <span
  m="2558640">split</span> <span m="2560700">a</span> <span
  m="2560770">document</span> <span m="2562030">into</span> <span
  m="2562440">words.</span> <span m="2566130">Second</span> <span
  m="2566780">is</span> <span m="2568090">compute</span> <span
  m="2569510">word</span> <span m="2569750">frequencies,</span> <span
  m="2571040">how</span> <span m="2571180">many</span> <span
  m="2571390">times</span> <span m="2571710">each</span> <span
  m="2571890">word</span> <span m="2573600">appears.</span> <span
  m="2574080">This</span> <span m="2574260">is</span> <span
  m="2574400">the</span> <span m="2574540">document</span> <span
  m="2574950">vectors</span> <span m="2575405">.</span></p><p><span
  m="2578380">And</span> <span m="2578680">then the</span> <span
  m="2578760">third</span> <span m="2579020">step</span> <span
  m="2579760">is</span> <span m="2580030">to</span> <span
  m="2581110">compute</span> <span m="2581390">the</span> <span
  m="2581460">dot</span> <span m="2581680">product.</span> <span
  m="2587250">Let</span> <span m="2587370">me</span> <span
  m="2587470">tell</span> <span m="2587630">you</span> <span
  m="2587740">a</span> <span m="2587760">little</span> <span
  m="2587980">bit</span> <span m="2588140">about</span> <span
  m="2588600">how</span> <span m="2588800">each</span> <span
  m="2589010">of</span> <span m="2589070">those</span> <span
  m="2589290">is</span> <span m="2589410">done.</span> <span
  m="2590690">Some</span> <span m="2590940">of</span> <span
  m="2590990">these</span> <span m="2591140">will</span> <span
  m="2591210">be</span> <span m="2591340">covered</span> <span
  m="2591720">more</span> <span m="2592030">in</span> <span
  m="2592370">future</span> <span m="2592680">lectures.</span> <span
  m="2594860">I</span> <span m="2594930">want</span> <span m="2595090">to</span>
  <span m="2595130">give</span> <span m="2595310">you</span> <span
  m="2595400">an</span> <span m="2595480">overview.</span></p><p><span
  m="2596980">There's</span> <span m="2597120">a</span> <span
  m="2597180">lot</span> <span m="2597460">of</span> <span
  m="2597520">ways</span> <span m="2597830">to</span> <span
  m="2597930">do</span> <span m="2598070">each</span> <span
  m="2598240">of</span> <span m="2598290">these</span> <span
  m="2598450">steps.</span> <span m="2599800">If</span> <span
  m="2599980">you</span> <span m="2600110">look</span> <span
  m="2600320">at</span> <span m="2600460">the--</span> <span
  m="2601150">next</span> <span m="2601430">to</span> <span
  m="2601500">the</span> <span m="2601620">lecture</span> <span
  m="2601900">notes</span> <span m="2602150">for</span> <span
  m="2602240">this</span> <span m="2602880">lecture</span> <span
  m="2603200">two,</span> <span m="2604180">there's</span> <span
  m="2604570">a</span> <span m="2604610">bunch</span> <span
  m="2604830">of</span> <span m="2604910">code</span> <span
  m="2605310">and</span> <span m="2605430">a</span> <span
  m="2605480">bunch</span> <span m="2605790">of</span> <span
  m="2605900">data</span> <span m="2606180">examples</span> <span
  m="2606710">of</span> <span m="2607180">documents--</span> <span
  m="2608640">big</span> <span m="2608830">corpuses</span> <span
  m="2609360">of</span> <span m="2609480">text.</span> <span
  m="2610530">And</span> <span m="2610740">you</span> <span
  m="2610860">can</span> <span m="2611000">run,</span> <span
  m="2611550">I</span> <span m="2611650">think,</span> <span
  m="2611840">there</span> <span m="2611930">are</span> <span
  m="2612070">eight</span> <span m="2612310">different</span> <span
  m="2613240">algorithms</span> <span m="2613710">for</span> <span
  m="2614080">it.</span></p><p><span m="2614760">And</span> <span
  m="2615140">let</span> <span m="2615260">me</span> <span
  m="2615370">give</span> <span m="2615570">you--</span> <span
  m="2616280">actually,</span> <span m="2616480">why don't</span> <span
  m="2616660">I</span> <span m="2617010">cut</span> <span m="2617230">to</span>
  <span m="2617310">the</span> <span m="2617400">chase</span> <span
  m="2617670">a</span> <span m="2617730">little</span> <span
  m="2617880">bit</span> <span m="2618480">and</span> <span
  m="2618640">tell</span> <span m="2618850">you</span> <span
  m="2619060">about</span> <span m="2619820">the</span> <span
  m="2619940">run</span> <span m="2620170">times</span> <span
  m="2620460">of</span> <span m="2620550">these</span> <span
  m="2620760">different</span> <span m="2621720">implementations</span> <span
  m="2622430">of</span> <span m="2622560">this</span> <span
  m="2622790">same</span> <span m="2623080">algorithms.</span> <span
  m="2623630">There are</span> <span m="2623700">lots</span> <span
  m="2623930">of sort of</span> <span m="2624030">versions</span> <span
  m="2624300">of</span> <span m="2624570">this</span> <span
  m="2624750">algorithm.</span> <span m="2625290">We</span> <span
  m="2625300">implement</span> <span m="2625690">it a</span> <span
  m="2625740">whole</span> <span m="2625900">bunch.</span></p><p><span
  m="2626910">Every</span> <span m="2627290">semester</span> <span
  m="2627740">I</span> <span m="2627780">teach</span> <span
  m="2628000">this,</span> <span m="2628190">I</span> <span m="2628290">change
  them</span> <span m="2628610">a</span> <span m="2628700">little</span> <span
  m="2628880">bit</span> <span m="2629030">more,</span> <span
  m="2629850">add</span> <span m="2630020">a</span> <span m="2630060">few</span>
  <span m="2630250">more</span> <span m="2630430">variants.</span> <span
  m="2631970">So</span> <span m="2632180">version</span> <span
  m="2632500">one,</span> <span m="2634030">on</span> <span m="2634220">a</span>
  <span m="2634270">particular</span> <span m="2635040">pair of</span> <span
  m="2635480">documents</span> <span m="2636070">which</span> <span
  m="2636340">is</span> <span m="2638030">like</span> <span m="2638320">a</span>
  <span m="2638370">megabyte--</span> <span m="2638950">not</span> <span
  m="2639060">very</span> <span m="2639310">much</span> <span
  m="2639530">text--</span> <span m="2640700">it</span> <span
  m="2640860">takes</span> <span m="2641100">228.1</span> <span
  m="2642410">seconds--</span> <span m="2643290">super</span> <span
  m="2643830">slow.</span> <span m="2645460">Pathetic.</span></p><p><span
  m="2646790">Then</span> <span m="2647170">we</span> <span
  m="2647480">do</span> <span m="2647620">a</span> <span
  m="2647650">little</span> <span m="2647850">bit</span> <span
  m="2648020">of</span> <span m="2648210">algorithmic</span> <span
  m="2648680">tweaking.</span> <span m="2649410">We</span> <span
  m="2649550">get</span> <span m="2649720">down</span> <span
  m="2649980">to</span> <span m="2650080">164</span> <span
  m="2650850">seconds.</span> <span m="2651780">Then</span> <span
  m="2652550">we</span> <span m="2652650">get</span> <span m="2652810">to</span>
  <span m="2653163">123</span> <span m="2653870">seconds.</span></p><p><span
  m="2654740">Then</span> <span m="2654970">we</span> <span
  m="2655080">get</span> <span m="2655220">down</span> <span
  m="2655420">to</span> <span m="2655540">71</span> <span
  m="2656270">seconds.</span> <span m="2657340">Then</span> <span
  m="2657830">we</span> <span m="2657970">get</span> <span
  m="2658160">down</span> <span m="2658480">to</span> <span
  m="2658900">18.3</span> <span m="2660200">seconds.</span> <span
  m="2661460">And</span> <span m="2661550">then</span> <span
  m="2661800">we</span> <span m="2661950">get</span> <span m="2662250">to</span>
  <span m="2662682">11.5</span> <span m="2663980">seconds.</span></p><p><span
  m="2665130">Then</span> <span m="2665360">we</span> <span
  m="2665480">get</span> <span m="2665700">to</span> <span
  m="2666350">1.8</span> <span m="2667430">seconds.</span> <span
  m="2668270">Then</span> <span m="2668960">we</span> <span
  m="2669100">get</span> <span m="2669320">to</span> <span
  m="2669970">0.2</span> <span m="2670620">seconds.</span> <span
  m="2671760">So</span> <span m="2672400">factor</span> <span
  m="2672790">of</span> <span m="2672870">1,000.</span> <span
  m="2673630">This</span> <span m="2673840">is</span> <span
  m="2674010">just</span> <span m="2674220">in</span> <span
  m="2674300">Python.</span></p><p><span m="2676530">2/10</span> <span
  m="2677110">of</span> <span m="2677210">a</span> <span
  m="2677350">second</span> <span m="2677610">to</span> <span
  m="2677870">process</span> <span m="2678220">a</span> <span
  m="2678270">megabytes.</span> <span m="2678730">It's all</span> <span
  m="2679060">right.</span> <span m="2679410">It's</span> <span
  m="2679540">getting</span> <span m="2679750">reasonable.</span></p><p><span
  m="2680750">This is</span> <span m="2681030">not</span> <span
  m="2681240">so</span> <span m="2681380">reasonable.</span> <span
  m="2682090">Some</span> <span m="2682350">of</span> <span
  m="2682400">these</span> <span m="2682570">improvements</span> <span
  m="2683080">are</span> <span m="2683170">algorithmic.</span> <span
  m="2683760">Some</span> <span m="2684010">of</span> <span
  m="2684090">them</span> <span m="2684360">are</span> <span
  m="2684510">just</span> <span m="2684870">better</span> <span
  m="2685110">coding.</span></p><p><span m="2686300">So</span> <span
  m="2686450">there's</span> <span m="2687230">improving</span> <span
  m="2687700">the</span> <span m="2687780">constant</span> <span
  m="2688140">factors.</span> <span m="2689280">But</span> <span
  m="2690480">if</span> <span m="2690670">you</span> <span
  m="2690910">look</span> <span m="2691080">at</span> <span
  m="2691180">larger</span> <span m="2691560">and</span> <span
  m="2691630">larger</span> <span m="2691940">texts,</span> <span
  m="2692720">this will</span> <span m="2692990">become</span> <span
  m="2693310">even</span> <span m="2693490">more</span> <span
  m="2693690">dramatic.</span> <span m="2694210">Because</span> <span
  m="2694480">a</span> <span m="2694530">lot</span> <span m="2694740">of</span>
  <span m="2694830">these</span> <span m="2695550">were</span> <span
  m="2695700">improvements</span> <span m="2696220">from</span> <span
  m="2696380">quadratic</span> <span m="2696860">time</span> <span
  m="2697060">algorithms</span> <span m="2697520">to</span> <span
  m="2697750">linear</span> <span m="2698220">and</span> <span
  m="2698370">log</span> <span m="2698580">n</span> <span
  m="2698750">algorithms.</span></p><p><span m="2699790">And</span> <span
  m="2700040">so</span> <span m="2700180">for a</span> <span
  m="2700410">megabyte,</span> <span m="2701040">yeah,</span> <span
  m="2701270">it's a</span> <span m="2701480">reasonable</span> <span
  m="2701890">improvement.</span> <span m="2702460">But</span> <span
  m="2702580">if</span> <span m="2702670">you</span> <span
  m="2702780">look</span> <span m="2702930">at</span> <span m="2702980">a</span>
  <span m="2703040">gigabyte,</span> <span m="2703530">it'll</span> <span
  m="2703660">be a</span> <span m="2703800">huge</span> <span
  m="2704440">improvement.</span> <span m="2704890">There will</span> <span
  m="2704980">be</span> <span m="2705100">no</span> <span
  m="2705590">comparison.</span></p><p><span m="2706130">In fact,</span> <span
  m="2706730">there</span> <span m="2706820">will</span> <span
  m="2706940">be</span> <span m="2707040">no</span> <span
  m="2707190">comparison.</span> <span m="2707640">Because</span> <span
  m="2707780">this</span> <span m="2707920">one</span> <span
  m="2708080">will</span> <span m="2708180">never</span> <span
  m="2708460">finish.</span> <span m="2709030">So</span> <span
  m="2709760">the</span> <span m="2709860">reason</span> <span
  m="2710120">I</span> <span m="2710180">ran</span> <span
  m="2710390">such</span> <span m="2710580">a</span> <span
  m="2710700">small</span> <span m="2710920">example</span> <span
  m="2711330">so</span> <span m="2711460">I</span> <span
  m="2711570">could</span> <span m="2711800">have</span> <span
  m="2712020">patience</span> <span m="2712450">to</span> <span
  m="2712550">wait</span> <span m="2712730">for</span> <span
  m="2712810">this</span> <span m="2713020">one.</span> <span
  m="2713540">But</span> <span m="2713680">this</span> <span
  m="2713850">one</span> <span m="2713990">you</span> <span
  m="2714120">could</span> <span m="2714260">run</span> <span
  m="2714450">on</span> <span m="2714550">the</span> <span
  m="2714930">bigger</span> <span m="2715260">examples.</span></p><p><span
  m="2717050">All</span> <span m="2717150">right,</span> <span
  m="2719070">so</span> <span m="2720720">where do</span> <span
  m="2720900">I</span> <span m="2720960">want</span> <span m="2721120">to</span>
  <span m="2721160">go</span> <span m="2721310">from</span> <span
  m="2721480">here?</span> <span m="2722490">Five</span> <span
  m="2722860">minutes.</span> <span m="2724380">I want to</span> <span
  m="2724460">tell</span> <span m="2724640">you</span> <span
  m="2724920">about</span> <span m="2725270">some</span> <span
  m="2725590">of</span> <span m="2725660">those</span> <span
  m="2725870">improvements</span> <span m="2726560">and</span> <span
  m="2726690">some</span> <span m="2726900">of</span> <span
  m="2726960">the</span> <span m="2727110">algorithms</span> <span
  m="2727710">here.</span></p><p><span m="2729380">Let's</span> <span
  m="2729580">start</span> <span m="2729820">with</span> <span
  m="2730400">this</span> <span m="2730600">very</span> <span
  m="2730790">simple</span> <span m="2731090">one.</span> <span
  m="2731770">How</span> <span m="2731960">would</span> <span m="2732070">you
  split</span> <span m="2732420">a</span> <span m="2732500">document</span>
  <span m="2732785">into</span> <span m="2733070">words</span> <span
  m="2733820">in</span> <span m="2733970">Python?</span> <span
  m="2736340">Yeah?</span></p><p><span m="2736825">AUDIENCE:</span> <span
  m="2737310">[INAUDIBLE].</span> <span m="2738280">Iterate</span> <span
  m="2738401">through</span> <span m="2738522">the</span> <span
  m="2738643">document,</span> <span m="2738765">[INAUDIBLE]</span> <span
  m="2740462">the</span> <span m="2740705">dictionary?</span></p><p><span
  m="2741680">PROFESSOR: Iterate</span> <span m="2742070">through the--</span>
  <span m="2742270">that's</span> <span m="2742560">actually</span> <span
  m="2742790">how</span> <span m="2742950">we</span> <span m="2743070">do</span>
  <span m="2743220">number</span> <span m="2743520">two.</span> <span
  m="2744490">OK,</span> <span m="2744670">we</span> <span
  m="2744780">can</span> <span m="2744890">talk</span> <span
  m="2745070">about</span> <span m="2745220">that</span> <span
  m="2745350">one.</span> <span m="2746900">Iterate</span> <span
  m="2747350">through</span> <span m="2748210">the</span> <span
  m="2748330">words</span> <span m="2748670">in</span> <span
  m="2748740">the</span> <span m="2748840">document</span> <span
  m="2752220">and</span> <span m="2752500">put</span> <span
  m="2752740">it</span> <span m="2752840">in</span> <span m="2752960">a</span>
  <span m="2753010">dictionary.</span></p><p><span m="2753690">Let's</span>
  <span m="2753830">say,</span> <span m="2753990">count</span> <span
  m="2755650">of</span> <span m="2755740">word</span> <span
  m="2757870">plus</span> <span m="2758300">equals</span> <span
  m="2758840">1.</span> <span m="2759980">This</span> <span
  m="2760170">would</span> <span m="2760310">work</span> <span
  m="2760580">if</span> <span m="2760840">count</span> <span
  m="2761310">is</span> <span m="2761510">something</span> <span
  m="2761770">called</span> <span m="2761950">a count</span> <span
  m="2762320">dictionary</span> <span m="2762930">if</span> <span
  m="2763090">you're</span> <span m="2763630">super</span> <span
  m="2764470">Pythonista.</span> <span m="2765920">Otherwise,</span> <span
  m="2766260">you</span> <span m="2766340">have</span> <span
  m="2766430">to</span> <span m="2766530">check,</span> <span
  m="2766770">is</span> <span m="2766930">the</span> <span
  m="2767030">word</span> <span m="2767190">in</span> <span
  m="2767270">the</span> <span m="2767370">dictionary?</span></p><p><span
  m="2767940">If</span> <span m="2768100">not,</span> <span
  m="2768500">set</span> <span m="2768680">it</span> <span m="2768790">to</span>
  <span m="2768890">one.</span> <span m="2769610">If</span> <span
  m="2769780">it</span> <span m="2769880">is</span> <span
  m="2770060">there,</span> <span m="2771270">add</span> <span
  m="2771480">one</span> <span m="2771680">to</span> <span
  m="2771800">it.</span> <span m="2772700">But</span> <span m="2773030">I</span>
  <span m="2773080">think you know</span> <span m="2773320">what</span> <span
  m="2773650">this</span> <span m="2773800">means.</span></p><p><span
  m="2774000">This</span> <span m="2774150">will</span> <span
  m="2774260">count</span> <span m="2774520">the</span> <span m="2774660">number
  of</span> <span m="2774920">words--</span> <span m="2775920">this</span> <span
  m="2776140">will count</span> <span m="2776460">the</span> <span
  m="2776550">frequency</span> <span m="2777020">of</span> <span
  m="2777090">each</span> <span m="2777240">word</span> <span
  m="2777420">in</span> <span m="2777480">the</span> <span
  m="2777580">dictionary.</span> <span m="2778400">And</span> <span
  m="2778620">becomes</span> <span m="2779130">dictionaries</span> <span
  m="2779720">run</span> <span m="2780030">in</span> <span
  m="2780260">constant</span> <span m="2780770">time</span> <span
  m="2781020">with</span> <span m="2781140">high</span> <span
  m="2781290">probability--</span> <span m="2783610">with</span> <span
  m="2784530">high</span> <span m="2785000">probability--</span> <span
  m="2786020">this</span> <span m="2786240">will</span> <span
  m="2786390">take</span> <span m="2787060">order--</span> <span
  m="2789470">well,</span> <span m="2790240">cheating</span> <span
  m="2790490">a</span> <span m="2790540">little</span> <span
  m="2790740">bit.</span> <span m="2791170">Because</span> <span
  m="2791440">words</span> <span m="2791690">can</span> <span
  m="2791810">be</span> <span m="2791940">really</span> <span
  m="2792210">long.</span></p><p><span m="2792630">And</span> <span
  m="2792740">so</span> <span m="2792900">to</span> <span
  m="2793060">reduce</span> <span m="2793510">a</span> <span
  m="2793600">word</span> <span m="2794100">down</span> <span
  m="2794290">to</span> <span m="2794400">a</span> <span
  m="2794440">machine</span> <span m="2794830">word</span> <span
  m="2795480">could</span> <span m="2795690">take</span> <span
  m="2795910">order</span> <span m="2796110">the</span> <span
  m="2796250">length</span> <span m="2796550">of</span> <span
  m="2796640">the</span> <span m="2796740">word</span> <span
  m="2797030">time.</span> <span m="2798810">To</span> <span
  m="2799020">a</span> <span m="2799070">little</span> <span
  m="2799250">more</span> <span m="2799400">precise,</span> <span
  m="2799980">this</span> <span m="2800120">is</span> <span
  m="2800210">going</span> <span m="2800350">to</span> <span
  m="2800410">be</span> <span m="2800540">the</span> <span
  m="2800640">sum</span> <span m="2801020">of</span> <span
  m="2801110">the</span> <span m="2801190">lengths</span> <span
  m="2801470">of</span> <span m="2801530">the</span> <span
  m="2801610">words</span> <span m="2803250">in</span> <span
  m="2803450">the</span> <span m="2803530">document,</span> <span
  m="2805000">which</span> <span m="2805270">is</span> <span
  m="2805510">also</span> <span m="2805800">known</span> <span
  m="2806030">as</span> <span m="2806240">a</span> <span
  m="2806280">length</span> <span m="2806470">of</span> <span
  m="2806550">the</span> <span m="2806660">document,</span> <span
  m="2808090">basically.</span> <span m="2808700">So</span> <span
  m="2808800">this</span> <span m="2809010">is good.</span> <span
  m="2809130">This</span> <span m="2809330">is</span> <span
  m="2809420">linear</span> <span m="2809690">time</span> <span
  m="2810960">with</span> <span m="2811100">high</span> <span
  m="2811250">probability.</span></p><p><span m="2814500">OK,</span> <span
  m="2814790">that's</span> <span m="2814990">a</span> <span
  m="2815050">good</span> <span m="2815240">algorithm.</span> <span
  m="2815770">That</span> <span m="2816050">is</span> <span
  m="2816210">introduced</span> <span m="2816870">in</span> <span
  m="2821080">algorithm</span> <span m="2821490">four.</span> <span
  m="2822390">So</span> <span m="2822610">we</span> <span m="2822700">got</span>
  <span m="2822850">a</span> <span m="2822900">significant</span> <span
  m="2823890">boost.</span></p><p><span m="2824850">There</span> <span
  m="2825130">are</span> <span m="2825160">other</span> <span
  m="2825370">ways</span> <span m="2825580">to</span> <span
  m="2825670">do</span> <span m="2825770">this.</span> <span
  m="2825960">For</span> <span m="2826060">example,</span> <span
  m="2826900">you</span> <span m="2827090">could</span> <span
  m="2827250">sort</span> <span m="2827570">the</span> <span
  m="2827660">words</span> <span m="2829190">and</span> <span
  m="2829390">then</span> <span m="2829550">run</span> <span
  m="2829820">through</span> <span m="2830000">the</span> <span
  m="2830120">sorted</span> <span m="2830470">list</span> <span
  m="2830930">and</span> <span m="2831100">count,</span> <span
  m="2831510">how</span> <span m="2831710">many</span> <span
  m="2831910">do</span> <span m="2831990">you</span> <span
  m="2832070">get</span> <span m="2832210">in</span> <span m="2832330">a</span>
  <span m="2832400">row</span> <span m="2832640">for</span> <span
  m="2832810">each</span> <span m="2832940">one?</span> <span m="2833430">If
  it's</span> <span m="2833600">sorted,</span> <span m="2834280">you</span>
  <span m="2834440">can</span> <span m="2834600">count--</span> <span
  m="2835820">I mean,</span> <span m="2836000">all</span> <span
  m="2836210">the</span> <span m="2836420">identical</span> <span
  m="2836900">words</span> <span m="2837160">are</span> <span
  m="2837280">put</span> <span m="2837460">right</span> <span
  m="2837610">next</span> <span m="2837820">to</span> <span
  m="2837880">each</span> <span m="2838040">other.</span></p><p><span
  m="2838300">So</span> <span m="2838430">it's</span> <span
  m="2838530">easy</span> <span m="2838740">to</span> <span
  m="2838820">count</span> <span m="2839090">them.</span> <span
  m="2839800">And</span> <span m="2840020">that'll</span> <span
  m="2840260">run</span> <span m="2840480">almost</span> <span
  m="2840850">as</span> <span m="2840950">fast.</span> <span
  m="2841310">That</span> <span m="2841480">was</span> <span
  m="2841880">one</span> <span m="2842050">of</span> <span
  m="2842130">these</span> <span m="2842330">algorithms.</span></p><p><span
  m="2846470">OK,</span> <span m="2847100">so</span> <span
  m="2847270">that's</span> <span m="2847480">a</span> <span
  m="2847540">couple</span> <span m="2847890">different</span> <span
  m="2848160">ways</span> <span m="2848330">to</span> <span
  m="2848430">do</span> <span m="2848560">that.</span> <span
  m="2849350">Let's</span> <span m="2849680">go</span> <span
  m="2849800">back</span> <span m="2850050">to</span> <span
  m="2850150">this</span> <span m="2850330">first</span> <span
  m="2850540">step.</span> <span m="2850740">How</span> <span
  m="2850930">would</span> <span m="2851080">you</span> <span
  m="2851270">split</span> <span m="2851560">a</span> <span
  m="2851630">document</span> <span m="2851890">into</span> <span
  m="2852150">words</span> <span m="2852480">in</span> <span
  m="2852550">the</span> <span m="2852630">first</span> <span
  m="2852880">place?</span> <span m="2853842">Yeah?</span></p><p><span
  m="2854284">AUDIENCE:</span> <span m="2854726">Search</span> <span
  m="2854947">circulated</span> <span m="2855168">spaces</span> <span
  m="2855610">and then</span> <span m="2856052">[INAUDIBLE].</span></p><p><span
  m="2856500">PROFESSOR:</span> <span m="2856860">Run</span> <span
  m="2857200">through</span> <span m="2857390">though</span> <span
  m="2857710">the</span> <span m="2858260">string.</span> <span
  m="2859150">And</span> <span m="2859510">every</span> <span
  m="2859700">time</span> <span m="2859920">you</span> <span
  m="2859990">see</span> <span m="2860360">anything</span> <span
  m="2860660">that's</span> <span m="2860820">not</span> <span
  m="2861100">alphanumeric,</span> <span m="2861870">start</span> <span
  m="2862120">a</span> <span m="2862190">new</span> <span
  m="2862310">word.</span> <span m="2863250">OK,</span> <span m="2863430">that
  would</span> <span m="2863630">run</span> <span m="2863820">in</span> <span
  m="2863890">linear</span> <span m="2864200">time.</span></p><p><span
  m="2865380">That's</span> <span m="2865610">a</span> <span
  m="2865680">good</span> <span m="2866260">answer.</span> <span
  m="2867380">So</span> <span m="2867390">it's</span> <span
  m="2867490">not</span> <span m="2867630">hard.</span> <span
  m="2868590">If</span> <span m="2868800">you're a</span> <span
  m="2869220">fancy</span> <span m="2869930">Pythonista,</span> <span
  m="2871010">you</span> <span m="2871240">might</span> <span
  m="2871520">do</span> <span m="2871710">it</span> <span
  m="2873600">like</span> <span m="2873750">this.</span></p><p><span
  m="2881430">Remember</span> <span m="2881740">my</span> <span
  m="2881960">Reg</span> <span m="2882200">Exes.</span> <span
  m="2885040">This</span> <span m="2885180">will</span> <span
  m="2885290">find</span> <span m="2885550">all</span> <span
  m="2885690">the</span> <span m="2885770">words</span> <span
  m="2885990">in</span> <span m="2886050">a</span> <span
  m="2886140">document.</span> <span m="2887090">Trouble</span> <span
  m="2887480">is,</span> <span m="2887770">in</span> <span
  m="2887880">general,</span> <span m="2888530">re</span> <span
  m="2888870">takes</span> <span m="2889150">exponential</span> <span
  m="2889700">time.</span></p><p><span m="2890660">So</span> <span
  m="2891070">if</span> <span m="2891230">you</span> <span
  m="2891310">think</span> <span m="2891540">about</span> <span
  m="2891740">algorithms,</span> <span m="2893270">be</span> <span
  m="2893540">very</span> <span m="2893880">careful.</span> <span
  m="2894260">Unless</span> <span m="2894530">you</span> <span m="2894610">know
  how</span> <span m="2894890">re</span> <span m="2895070">is</span> <span
  m="2895230">implemented,</span> <span m="2896010">this</span> <span
  m="2896200">probably</span> <span m="2896700">will</span> <span
  m="2898230">run</span> <span m="2898420">in</span> <span
  m="2898480">linear</span> <span m="2898770">time.</span> <span
  m="2899800">But</span> <span m="2899940">it's</span> <span
  m="2900220">not</span> <span m="2900610">obvious</span> <span
  m="2900980">at</span> <span m="2901060">all.</span></p><p><span
  m="2902000">Do</span> <span m="2902110">anything</span> <span
  m="2902440">fancy</span> <span m="2902790">with</span> <span
  m="2903120">regular</span> <span m="2903430">expressions.</span> <span
  m="2904210">If you</span> <span m="2904290">don't</span> <span
  m="2904420">know</span> <span m="2904520">what</span> <span
  m="2904620">this</span> <span m="2904760">means,</span> <span
  m="2904960">don't</span> <span m="2905090">worry</span> <span
  m="2905230">about</span> <span m="2905460">it.</span> <span
  m="2905580">Don't</span> <span m="2905740">use</span> <span
  m="2905900">it.</span></p><p><span m="2907100">If</span> <span
  m="2907280">you</span> <span m="2907360">know</span> <span
  m="2907520">about</span> <span m="2907800">it,</span> <span
  m="2907940">be</span> <span m="2908040">very</span> <span
  m="2908270">careful</span> <span m="2908570">in</span> <span
  m="2908610">this</span> <span m="2908760">class</span> <span m="2908990">when
  you</span> <span m="2909090">use</span> <span m="2909250">re.</span> <span
  m="2909580">Because</span> <span m="2909880">it's</span> <span
  m="2910000">not</span> <span m="2910220">always</span> <span
  m="2910500">linear</span> <span m="2910760">time.</span> <span
  m="2911760">But</span> <span m="2911950">there</span> <span
  m="2912100">is</span> <span m="2912190">an</span> <span
  m="2912290">easy</span> <span m="2912540">algorithm</span> <span
  m="2912920">for</span> <span m="2913040">this,</span> <span
  m="2913330">which</span> <span m="2913570">is</span> <span
  m="2913870">just</span> <span m="2914190">scan</span> <span
  m="2914490">through</span> <span m="2915200">and</span> <span
  m="2915670">look</span> <span m="2915880">for</span> <span
  m="2916600">alpha</span> <span m="2916850">numerics.</span></p><p><span
  m="2918080">String</span> <span m="2918340">them</span> <span
  m="2918480">together.</span> <span m="2918950">It's</span> <span
  m="2919100">good.</span> <span m="2919340">There's</span> <span
  m="2919540">a</span> <span m="2919820">few</span> <span
  m="2920050">other</span> <span m="2920270">algorithms</span> <span
  m="2920920">here</span> <span m="2921110">in</span> <span
  m="2921180">the</span> <span m="2921250">notes.</span></p><p><span
  m="2921530">You</span> <span m="2921590">should</span> <span
  m="2921750">check</span> <span m="2921960">them out.</span> <span
  m="2922670">And</span> <span m="2922880">for</span> <span
  m="2922970">fun,</span> <span m="2924020">look</span> <span
  m="2924240">at</span> <span m="2924300">this</span> <span
  m="2924480">code</span> <span m="2924800">and</span> <span
  m="2924920">see</span> <span m="2925180">how</span> <span
  m="2925500">small</span> <span m="2925880">differences</span> <span
  m="2926930">make</span> <span m="2927190">dramatic</span> <span
  m="2927980">difference</span> <span m="2928280">in</span> <span
  m="2928370">performance.</span> <span m="2929190">Next</span> <span
  m="2929420">class</span> <span m="2929670">will</span> <span
  m="2929750">be</span> <span m="2929840">about</span> <span
  m="2930070">sorting.</span></p>
uid: 76c28e47a69f788cf8b45b5d6605cc2c
type: courses
layout: video
---
