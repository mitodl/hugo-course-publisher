---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas continues
  with cryptography, introducing encryption
  methods.</p><p><strong>Instructors:</strong> Srinivas Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: 9TNI2wHmaeI
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8990f12413d703d777a63033eaf731f6
  - id: 9TNI2wHmaeI.srt
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-22-cryptography-encryption/9TNI2wHmaeI.srt
    title: 3play caption file
    type: null
    uid: b893b32126f93f5020566166219e4c39
  - id: 9TNI2wHmaeI.pdf
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-22-cryptography-encryption/9TNI2wHmaeI.pdf
    title: 3play pdf file
    type: null
    uid: edbe201f06c0e77a874a5f330e65a55a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a8b8858a87a29f8f8a70cb8fc1f1c1f2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 689d2c0096ebaa2a45092403fc9d68ad
  - id: Video-YouTube-Stream
    media_location: 9TNI2wHmaeI
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: Video-YouTube-Stream
    type: Video
    uid: a9f89752712d7b3117a497e0374a0d0b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/9TNI2wHmaeI/default.jpg'
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 79743edf0847703bfdf8ad91e07102c6
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: Video-iTunes U-MP4
    type: Video
    uid: 1206ceb8334d5f152b6ff091d91b285d
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec22_300k.mp4'
    parent_uid: d72d5d2293323f30844d3efdfdd26f92
    title: Video-Internet Archive-MP4
    type: Video
    uid: 39ee9b4af77bc554da2de40af31771ce
inline_embed_id: '17887924lecture22:cryptography:encryption96224412'
order_index: 317
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-22-cryptography-encryption
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-22-cryptography-encryption
title: 'Lecture 22: Cryptography: Encryption'
transcript: >-
  <p><span m="60">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4019">Your</span> <span
  m="4210">support</span> <span m="4710">will</span> <span m="4870">help</span>
  <span m="5110">MIT</span> <span m="5570">OpenCourseWare</span> <span
  m="6360">continue</span> <span m="6870">to</span> <span m="6950">offer</span>
  <span m="7360">high</span> <span m="7600">quality</span> <span
  m="8119">educational</span> <span m="8750">resources</span> <span
  m="9370">for</span> <span m="9520">free.</span> <span m="10730">To</span>
  <span m="10830">make</span> <span m="10940">a</span> <span
  m="10980">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21230">SRINIVAS DEVADAS: All</span> <span m="21340">right.</span> <span
  m="21530">Good</span> <span m="21660">morning,</span> <span
  m="21890">everyone.</span> <span m="23860">So</span> <span
  m="25690">more</span> <span m="25960">of</span> <span m="26040">the</span>
  <span m="26130">same</span> <span m="27090">in</span> <span
  m="27290">terms</span> <span m="27560">of</span> <span
  m="27850">cryptography</span> <span m="28930">and</span> <span
  m="29200">cryptographic</span> <span m="29780">techniques</span> <span
  m="30720">similar</span> <span m="31160">to</span> <span
  m="31280">Tuesday's</span> <span m="31690">lecture.</span> <span
  m="32750">So</span> <span m="32950">if</span> <span m="33020">you</span> <span
  m="33140">liked</span> <span m="33440">it,</span> <span
  m="33780">you'll</span> <span m="33960">like</span> <span
  m="34160">this</span> <span m="34330">one.</span> <span m="35430">If</span>
  <span m="35540">you</span> <span m="35610">didn't</span> <span
  m="35810">like</span> <span m="36060">it,</span> <span m="36730">well,</span>
  <span m="37060">it's</span> <span m="37180">going</span> <span
  m="37280">to</span> <span m="37320">be</span> <span m="37420">more</span>
  <span m="37630">of</span> <span m="37700">the</span> <span
  m="37780">same,</span> <span m="39400">so</span> <span
  m="39760">sorry.</span></p><p><span m="41020">But</span> <span
  m="42220">what</span> <span m="42380">we're</span> <span m="42470">going
  to</span> <span m="42600">do</span> <span m="42810">today</span> <span
  m="43270">is</span> <span m="44340">do</span> <span m="45030">a</span> <span
  m="45190">couple</span> <span m="45420">of</span> <span
  m="45500">things</span> <span m="46020">a</span> <span m="46050">little</span>
  <span m="46230">bit</span> <span m="46370">differently.</span> <span
  m="47840">We're</span> <span m="47940">going</span> <span m="48070">to</span>
  <span m="48120">talk</span> <span m="48280">about</span> <span
  m="48470">encryption.</span> <span m="49760">So</span> <span
  m="49930">we</span> <span m="50030">talked</span> <span m="50250">about</span>
  <span m="50420">hashing,</span> <span m="51200">which,</span> <span
  m="51340">of</span> <span m="51430">course,</span> <span m="51660">you</span>
  <span m="51760">know</span> <span m="51980">about</span> <span
  m="52780">from</span> <span m="53330">the</span> <span m="53500">use</span>
  <span m="53700">of</span> <span m="53800">dictionaries.</span> <span
  m="55150">We</span> <span m="55260">haven't</span> <span
  m="55520">really</span> <span m="55750">talked</span> <span
  m="55980">about</span> <span m="56170">encryption</span> <span
  m="57000">in</span> <span m="57150">046</span> <span m="58100">or</span> <span
  m="58500">even</span> <span m="58770">in</span> <span m="59040">006</span>
  <span m="61310">previously.</span></p><p><span m="62770">But</span> <span
  m="63670">we</span> <span m="63840">look</span> <span m="64069">at</span>
  <span m="64830">two</span> <span m="65040">different</span> <span
  m="65330">kinds</span> <span m="65670">of</span> <span
  m="65810">encryption</span> <span m="66240">algorithms.</span> <span
  m="67940">We</span> <span m="68010">spend</span> <span m="68230">a</span>
  <span m="68280">little</span> <span m="68530">bit</span> <span
  m="68650">of</span> <span m="68730">time</span> <span m="69040">on</span>
  <span m="70330">symmetric</span> <span m="70870">key</span> <span
  m="71060">encryption,</span> <span m="71950">which</span> <span
  m="72020">is</span> <span m="72150">really</span> <span
  m="72340">something</span> <span m="72720">that</span> <span
  m="73590">was</span> <span m="73790">used</span> <span m="74220">in</span>
  <span m="74320">encoding</span> <span m="74760">machines</span> <span
  m="75310">including</span> <span m="75690">the</span> <span
  m="76040">enigma</span> <span m="77200">from</span> <span
  m="78480">World</span> <span m="78730">War</span> <span m="78910">II</span>
  <span m="79210">that</span> <span m="79760">you</span> <span
  m="79950">probably</span> <span m="80360">saw</span> <span m="81180">if</span>
  <span m="81330">you</span> <span m="81430">saw</span> <span
  m="81580"><i>The</i></span> <span m="81680"><i>Imitation</i></span> <span
  m="82220"><i>Game.</i></span> <span m="83190">So</span> <span
  m="83370">there</span> <span m="83660">you</span> <span m="83780">have</span>
  <span m="84700">a</span> <span m="84780">shared</span> <span
  m="85140">secret.</span> <span m="86410">And</span> <span
  m="86620">it's</span> <span m="86740">that</span> <span
  m="87060">single,</span> <span m="88160">what's</span> <span
  m="88390">called,</span> <span m="88560">symmetric</span> <span
  m="89000">shared</span> <span m="89290">secret.</span> <span
  m="89910">Both</span> <span m="90180">parties</span> <span
  m="90570">know</span> <span m="90730">the</span> <span
  m="90850">secret.</span></p><p><span m="92320">And</span> <span
  m="93360">very</span> <span m="93550">quickly,</span> <span
  m="93910">we'll</span> <span m="94340">talk</span> <span
  m="94560">about</span> <span m="96140">what</span> <span m="96470">it</span>
  <span m="97150">means</span> <span m="97570">to</span> <span
  m="97840">actually</span> <span m="98140">exchange</span> <span
  m="98400">a</span> <span m="98660">secret.</span> <span m="99620">So</span>
  <span m="99800">we'll</span> <span m="99880">talk</span> <span
  m="100090">about</span> <span m="100300">key</span> <span
  m="100380">exchange.</span> <span m="101360">And</span> <span
  m="101540">then</span> <span m="102610">I'll</span> <span
  m="103000">move</span> <span m="103260">to</span> <span
  m="103390">asymmetric</span> <span m="104050">key</span> <span
  m="104260">encryption,</span> <span m="105120">which</span> <span
  m="105350">I</span> <span m="105560">alluded</span> <span m="105830">to</span>
  <span m="106110">a</span> <span m="106170">little</span> <span
  m="106380">bit</span> <span m="106960">when</span> <span m="107110">we</span>
  <span m="107240">talked</span> <span m="107470">about</span> <span
  m="107710">digital</span> <span m="108070">signatures</span> <span
  m="108630">last</span> <span m="108910">time.</span> <span m="109520">I</span>
  <span m="109630">talked</span> <span m="109850">about</span> <span
  m="110060">public</span> <span m="110360">keys</span> <span
  m="110640">and</span> <span m="110750">private</span> <span
  m="111070">keys.</span></p><p><span m="111860">But</span> <span
  m="112310">we're</span> <span m="112470">going to</span> <span
  m="112600">actually</span> <span m="112900">look</span> <span
  m="113120">at</span> <span m="113270">a</span> <span m="113460">couple</span>
  <span m="113700">of</span> <span m="113790">different</span> <span
  m="114570">public</span> <span m="114880">key</span> <span
  m="115080">encryption</span> <span m="115490">algorithms</span> <span
  m="115900">today.</span> <span m="116840">The</span> <span
  m="116970">classical</span> <span m="117540">algorithm,</span> <span
  m="118570">the</span> <span m="118680">very</span> <span
  m="118900">first</span> <span m="119230">algorithm</span> <span
  m="120320">really</span> <span m="120650">that</span> <span
  m="121290">stayed</span> <span m="122690">secure,</span> <span
  m="123070">the</span> <span m="123570">RSA</span> <span
  m="124000">algorithm.</span> <span m="124520">It</span> <span
  m="124900">stands</span> <span m="125250">for</span> <span
  m="125460">Rivest,</span> <span m="125910">Shamir,</span> <span
  m="126170">and</span> <span m="126420">Adleman,</span> <span
  m="127270">the</span> <span m="127340">initials</span> <span
  m="127780">of</span> <span m="127890">the</span> <span m="127980">three</span>
  <span m="128160">inventors,</span> <span m="129139">invented</span> <span
  m="129590">at</span> <span m="129690">MIT</span> <span m="130199">in</span>
  <span m="130580">1977</span> <span m="132730">and</span> <span
  m="133260">still</span> <span m="133460">in</span> <span m="133540">use</span>
  <span m="133790">today.</span></p><p><span m="134990">And</span> <span
  m="135640">the</span> <span m="135790">last</span> <span
  m="136040">part</span> <span m="136180">of</span> <span
  m="136320">today's</span> <span m="136800">lecture</span> <span
  m="137410">is</span> <span m="137590">going</span> <span m="137770">to</span>
  <span m="137830">be</span> <span m="139260">looking</span> <span
  m="139670">at</span> <span m="139810">hardness.</span> <span
  m="141220">So</span> <span m="142370">in</span> <span
  m="142550">encryption,</span> <span m="143730">if</span> <span
  m="143870">you</span> <span m="143990">don't</span> <span
  m="144320">know</span> <span m="144520">the</span> <span
  m="144640">secret</span> <span m="145020">key,</span> <span
  m="145840">it</span> <span m="145990">should</span> <span m="146270">be</span>
  <span m="146430">hard</span> <span m="147260">for</span> <span
  m="147490">an</span> <span m="147570">adversary</span> <span
  m="148830">to</span> <span m="150140">discover</span> <span
  m="151220">what</span> <span m="151560">the</span> <span
  m="151650">message</span> <span m="152110">corresponds</span> <span
  m="152580">to.</span> <span m="153040">The</span> <span
  m="153220">adversary</span> <span m="154140">sees</span> <span
  m="154610">what's</span> <span m="154850">called</span> <span
  m="155040">the</span> <span m="155110">cipher</span> <span
  m="155490">text,</span> <span m="155880">which</span> <span
  m="156040">is</span> <span m="156150">the</span> <span
  m="156230">encrypted</span> <span m="156730">text.</span></p><p><span
  m="158270">The</span> <span m="158440">adversary</span> <span
  m="158770">does</span> <span m="158980">not</span> <span
  m="159300">know</span> <span m="159450">the</span> <span
  m="159570">secret</span> <span m="159910">key.</span> <span
  m="160890">If</span> <span m="161510">he</span> <span m="161610">or</span>
  <span m="161690">she</span> <span m="161860">knows</span> <span
  m="162060">the</span> <span m="162140">secret</span> <span
  m="162450">key,</span> <span m="162650">game</span> <span
  m="162930">over.</span> <span m="163990">But</span> <span
  m="164510">assuming</span> <span m="164810">that</span> <span
  m="165190">adversary</span> <span m="165650">does</span> <span
  m="165840">not</span> <span m="166050">know</span> <span m="166200">the</span>
  <span m="166290">secret</span> <span m="166610">key,</span> <span
  m="167280">it</span> <span m="167360">should</span> <span m="167570">be</span>
  <span m="167700">computational</span> <span m="168460">hard</span> <span
  m="169760">to</span> <span m="170160">discover</span> <span
  m="170650">the</span> <span m="170750">message,</span> <span
  m="171560">right?</span> <span m="171810">That</span> <span
  m="172130">makes</span> <span m="172320">sense.</span></p><p><span
  m="173340">So</span> <span m="173800">there's</span> <span
  m="174010">clearly</span> <span m="174310">a</span> <span
  m="174370">relationship</span> <span m="175510">between</span> <span
  m="176810">this</span> <span m="177030">hardness</span> <span
  m="177940">and</span> <span m="178415">NP-complete</span> <span
  m="179210">problems,</span> <span m="179840">which</span> <span
  m="180010">are</span> <span m="180100">computationally</span> <span
  m="180840">hard.</span> <span m="181930">And</span> <span
  m="182110">it's</span> <span m="182250">not</span> <span
  m="182430">surprising</span> <span m="183580">that</span> <span
  m="184270">people</span> <span m="184520">have</span> <span
  m="184670">tried</span> <span m="185150">to</span> <span
  m="185230">build</span> <span m="186610">what</span> <span
  m="186760">are</span> <span m="186830">called</span> <span
  m="187060">cryptosystems,</span> <span m="188060">which</span> <span
  m="188230">are</span> <span m="188410">essentially</span> <span
  m="188850">cryptographic</span> <span m="189400">techniques,</span> <span
  m="190290">based</span> <span m="190830">on</span> <span m="190980">the</span>
  <span m="191050">hardness</span> <span m="191880">of</span> <span
  m="192020">NP-complete</span> <span m="192630">problems,</span> <span
  m="193540">including</span> <span m="194050">graph</span> <span
  m="194370">coloring</span> <span m="194810">and</span> <span
  m="194920">knapsack</span> <span m="195430">and</span> <span
  m="195560">so</span> <span m="195690">on</span> <span m="195790">and</span>
  <span m="195880">so</span> <span m="196030">forth.</span> <span
  m="196810">But</span> <span m="196950">it</span> <span m="197050">turns
  out</span> <span m="197350">there's</span> <span m="197630">a</span> <span
  m="197740">real</span> <span m="198380">subtle</span> <span
  m="200200">difference</span> <span m="201260">between</span> <span
  m="201840">the</span> <span m="201990">kinds</span> <span m="202530">of</span>
  <span m="202650">problems</span> <span m="204130">that</span> <span
  m="205030">have</span> <span m="205250">been</span> <span
  m="206850">useful</span> <span m="208040">in</span> <span
  m="208250">terms</span> <span m="208520">of</span> <span
  m="208630">building</span> <span m="209020">secure</span> <span
  m="209680">cryptosystems</span> <span m="210390">like</span> <span
  m="210650">RSA</span> <span m="211490">and</span> <span
  m="211910">NP-complete</span> <span m="212350">problems.</span></p><p><span
  m="213320">And</span> <span m="213540">we'll</span> <span
  m="213670">talk</span> <span m="213860">about</span> <span
  m="214100">that</span> <span m="215090">at</span> <span m="215250">the</span>
  <span m="215320">end</span> <span m="215450">of</span> <span
  m="215540">lecture.</span> <span m="216140">We'll</span> <span
  m="216350">probably</span> <span m="216560">spend</span> <span
  m="216760">a</span> <span m="216800">bunch</span> <span m="216980">of</span>
  <span m="217030">time</span> <span m="217240">on</span> <span
  m="217340">that.</span> <span m="218960">So</span> <span
  m="219230">let's</span> <span m="219460">get</span> <span
  m="219560">started</span> <span m="219990">with</span> <span
  m="220220">the</span> <span m="220940">symmetric</span> <span
  m="221390">key</span> <span m="221550">encryption,</span> <span
  m="223170">which</span> <span m="223230">is,</span> <span m="223570">at</span>
  <span m="223690">some</span> <span m="223880">level,</span> <span
  m="224240">kind</span> <span m="224410">of</span> <span
  m="224480">boring</span> <span m="225130">from</span> <span
  m="225370">a</span> <span m="225420">mathematical</span> <span
  m="226060">standpoint.</span> <span m="226870">So</span> <span
  m="226920">we</span> <span m="227020">want</span> <span m="227140">to</span>
  <span m="227180">spend</span> <span m="227400">a</span> <span
  m="227460">lot</span> <span m="227640">of</span> <span m="227730">time</span>
  <span m="228020">on</span> <span m="228190">it.</span></p><p><span
  m="229380">It's</span> <span m="229560">definitely</span> <span
  m="229850">very</span> <span m="230080">useful.</span> <span
  m="231520">It</span> <span m="231590">essentially</span> <span
  m="231980">assumes</span> <span m="232540">that</span> <span
  m="233580">there's</span> <span m="233880">a</span> <span
  m="234450">secret</span> <span m="235010">key</span> <span
  m="236410">k.</span> <span m="237280">And</span> <span m="237420">you</span>
  <span m="237500">can</span> <span m="237610">think</span> <span
  m="237750">of</span> <span m="237840">this</span> <span m="238080">as</span>
  <span m="238220">a</span> <span m="238520">128-bit</span> <span
  m="239410">number.</span> <span m="240760">Some</span> <span
  m="240980">people</span> <span m="241200">want it</span> <span
  m="241490">to</span> <span m="241560">be</span> <span
  m="241680">larger,</span> <span m="242370">256.</span></p><p><span
  m="244280">But</span> <span m="244950">it's</span> <span
  m="245140">suddenly</span> <span m="245560">at</span> <span
  m="245820">64.</span> <span m="246670">At</span> <span m="246820">this</span>
  <span m="246990">point,</span> <span m="247330">it's</span> <span
  m="247490">probably</span> <span m="248470">not</span> <span
  m="248790">enough,</span> <span m="249960">even</span> <span
  m="250160">though</span> <span m="250280">2</span> <span
  m="250420">raised</span> <span m="250640">to</span> <span m="250730">64</span>
  <span m="251330">is</span> <span m="251410">still</span> <span
  m="251630">a</span> <span m="251690">fairly</span> <span
  m="252040">large</span> <span m="252320">number.</span> <span
  m="253380">With</span> <span m="253710">parallelism</span> <span
  m="254490">and</span> <span m="254610">with</span> <span
  m="256920">fast</span> <span m="257300">computers,</span> <span
  m="258700">it's</span> <span m="258899">a</span> <span
  m="258950">little</span> <span m="259160">worrisome</span> <span
  m="259940">that</span> <span m="260814">the</span> <span
  m="261290">adversary</span> <span m="261959">only</span> <span
  m="262250">requires</span> <span m="262950">2</span> <span
  m="263180">raised</span> <span m="263410">to</span> <span m="263480">64</span>
  <span m="264060">work</span> <span m="264960">to</span> <span
  m="265130">enumerate</span> <span m="265820">all</span> <span
  m="266120">possible</span> <span m="266570">secret</span> <span
  m="266960">keys</span> <span m="267770">of</span> <span
  m="267980">64-bits</span> <span m="269460">right?</span> <span
  m="270160">So</span> <span m="270360">122</span> <span m="270980">raised
  to</span> <span m="271120">128</span> <span m="271700">is</span> <span
  m="272280">much</span> <span m="272500">better.</span></p><p><span
  m="273910">And</span> <span m="274910">this</span> <span m="275100">is</span>
  <span m="275380">shared</span> <span m="275900">between</span> <span
  m="276680">Alice</span> <span m="277120">and Bob.</span> <span
  m="277830">So</span> <span m="279430">we'll</span> <span
  m="279960">think</span> <span m="280110">about</span> <span
  m="280360">the</span> <span m="280570">protagonists</span> <span
  m="281330">here</span> <span m="282370">as</span> <span
  m="282540">being</span> <span m="283160">Alice</span> <span
  m="283510">and</span> <span m="283610">Bob.</span> <span m="284420">And</span>
  <span m="284650">they</span> <span m="284770">want</span> <span
  m="285020">to</span> <span m="285230">exchange</span> <span
  m="286250">information.</span> <span m="287440">And</span> <span
  m="287980">typically,</span> <span m="288370">the</span> <span
  m="288940">adversary</span> <span m="289860">is</span> <span
  m="290400">mal</span> <span m="291086">for</span> <span
  m="291430">malicious.</span> <span m="294770">But</span> <span
  m="295340">there's</span> <span m="295660">other</span> <span
  m="295840">ways</span> <span m="297410">you</span> <span m="297530">can</span>
  <span m="297620">obviously</span> <span m="297850">name</span> <span
  m="298230">adversaries.</span></p><p><span m="301080">So</span> <span
  m="301870">the</span> <span m="302000">basic</span> <span
  m="302330">equation</span> <span m="302750">here</span> <span
  m="303000">is</span> <span m="303150">really</span> <span
  m="303500">straightforward.</span> <span m="305120">It's</span> <span
  m="305630">C,</span> <span m="305990">which</span> <span m="306170">is</span>
  <span m="306290">the</span> <span m="306575">cipher</span> <span
  m="306860">text.</span> <span m="308310">So a little</span> <span
  m="308740">terminology</span> <span m="309420">here,</span> <span
  m="311210">cipher</span> <span m="311560">text.</span> <span
  m="312880">m</span> <span m="313160">is</span> <span m="314170">the</span>
  <span m="314880">plain</span> <span m="315270">text</span> <span
  m="315690">or</span> <span m="315770">the</span> <span
  m="315880">message.</span></p><p><span m="319100">And</span> <span
  m="319750">plain</span> <span m="319970">text</span> <span
  m="320190">means</span> <span m="320410">you</span> <span
  m="320510">can</span> <span m="320590">just</span> <span
  m="320750">read</span> <span m="320940">it.</span> <span
  m="321240">Cipher</span> <span m="321570">text</span> <span
  m="322110">means</span> <span m="322290">it's</span> <span
  m="322410">scrambled.</span> <span m="323870">K is,</span> <span
  m="324210">of</span> <span m="324310">course,</span> <span
  m="324560">the</span> <span m="324640">secret</span> <span
  m="324960">key</span> <span m="327840">that's</span> <span
  m="328080">up</span> <span m="328240">here.</span> <span m="329130">And</span>
  <span m="329560">the e</span> <span m="329740">is</span> <span
  m="330130">the</span> <span m="330230">encryption</span> <span
  m="330710">function.</span></p><p><span m="337680">Now, in</span> <span
  m="337960">symmetric</span> <span m="338490">key</span> <span
  m="338680">cryptography,</span> <span m="340680">basically</span> <span
  m="341800">the</span> <span m="341980">requirement</span> <span
  m="343250">is</span> <span m="343530">that</span> <span m="344240">you</span>
  <span m="344450">have</span> <span m="344700">to</span> <span
  m="344790">be</span> <span m="344980">able</span> <span m="345390">to</span>
  <span m="346460">get</span> <span m="346730">back</span> <span
  m="347060">the</span> <span m="347160">plain</span> <span
  m="347500">text</span> <span m="348530">from</span> <span
  m="348880">the</span> <span m="348990">cipher</span> <span
  m="349390">text</span> <span m="350610">given</span> <span m="350980">a</span>
  <span m="351050">public</span> <span m="352100">decryption</span> <span
  m="352740">function</span> <span m="353940">and</span> <span
  m="354250">knowledge</span> <span m="354690">of</span> <span
  m="354790">the</span> <span m="354870">secret</span> <span
  m="355210">key.</span> <span m="355930">And</span> <span
  m="356120">this</span> <span m="356250">should</span> <span
  m="356410">be</span> <span m="356570">a</span> <span
  m="356630">straightforward</span> <span m="357250">operation,</span> <span
  m="358110">right?</span> <span m="358780">So</span> <span m="359690">by the
  way,</span> <span m="360390">e</span> <span m="360590">of</span> <span
  m="360720">k</span> <span m="361770">m,</span> <span m="362410">this</span>
  <span m="362570">is</span> <span m="362690">a</span> <span
  m="362760">polytime</span> <span m="363330">computation.</span></p><p><span
  m="364640">It's</span> <span m="364810">not</span> <span
  m="365440">constant</span> <span m="365810">time.</span> <span
  m="366410">It's</span> <span m="366550">typically</span> <span
  m="366910">linear</span> <span m="367220">time.</span> <span
  m="368140">And</span> <span m="368490">you</span> <span
  m="368590">don't</span> <span m="368810">really</span> <span m="369210">want
  it</span> <span m="369540">to</span> <span m="369640">be</span> <span
  m="370160">quadratic</span> <span m="370720">time</span> <span
  m="370980">even,</span> <span m="371980">because</span> <span
  m="372430">you</span> <span m="372560">want</span> <span m="372690">to</span>
  <span m="372750">do</span> <span m="372880">this</span> <span
  m="373210">vary</span> <span m="373750">fast,</span> <span
  m="374570">streaming.</span> <span m="375340">You need to</span> <span
  m="375420">send</span> <span m="375760">streams</span> <span
  m="376310">of</span> <span m="376390">messages,</span> <span
  m="378000">many</span> <span m="378840">gigabytes</span> <span
  m="379300">potentially,</span> <span m="380160">that are</span> <span
  m="380450">all</span> <span m="380670">encrypted.</span></p><p><span
  m="381180">And</span> <span m="381310">this</span> <span m="381430">is</span>
  <span m="381550">actually</span> <span m="381810">what</span> <span
  m="381940">happens</span> <span m="382560">when</span> <span
  m="382680">you</span> <span m="382790">get</span> <span
  m="383280">stuff</span> <span m="383590">from</span> <span
  m="383750">your</span> <span m="383860">satellite</span> <span
  m="384700">and</span> <span m="384990">you're</span> <span
  m="385320">downloading</span> <span m="385800">movies.</span> <span
  m="386380">That's</span> <span m="386670">exactly</span> <span
  m="386990">what</span> <span m="387090">happens.</span> <span
  m="388350">It's</span> <span m="388470">symmetric</span> <span
  m="388810">key</span> <span m="388970">encryption</span> <span m="390040">of
  a</span> <span m="390370">lot</span> <span m="390610">of</span> <span
  m="390680">data.</span></p><p><span m="391670">So</span> <span
  m="392250">backwards</span> <span m="392860">would</span> <span
  m="393060">be</span> <span m="393900">dk</span> <span m="394362">c.</span>
  <span m="396590">And</span> <span m="396770">the</span> <span
  m="396820">only</span> <span m="397010">difference</span> <span
  m="397360">here</span> <span m="397710">is</span> <span m="397950">that</span>
  <span m="398190">everything</span> <span m="398520">else</span> <span
  m="398720">stays</span> <span m="398960">the</span> <span
  m="399070">same.</span> <span m="399960">This</span> <span
  m="400150">is</span> <span m="400320">our</span> <span
  m="400480">decryption</span> <span m="401060">function.</span> <span
  m="404980">All</span> <span m="405090">right.</span></p><p><span
  m="406690">So</span> <span m="407840">that's</span> <span
  m="409180">symmetric</span> <span m="409660">encryption</span> <span
  m="410090">is.</span> <span m="410630">And</span> <span
  m="410840">there's</span> <span m="410990">a</span> <span
  m="411050">requirement</span> <span m="411660">of</span> <span
  m="412730">reversibility</span> <span m="413470">here.</span> <span
  m="414100">So</span> <span m="414260">it's</span> <span m="414410">a</span>
  <span m="414840">lot</span> <span m="415160">different</span> <span
  m="415620">from</span> <span m="415850">one</span> <span m="416040">way</span>
  <span m="416200">hashes</span> <span m="417590">that</span> <span
  m="417700">we</span> <span m="417800">talked</span> <span
  m="418030">about</span> <span m="418250">last</span> <span
  m="418530">time.</span> <span m="419340">Because</span> <span
  m="419690">here,</span> <span m="420880">while</span> <span
  m="421210">you</span> <span m="421330">want</span> <span
  m="423160">going</span> <span m="423500">from</span> <span m="424240">c</span>
  <span m="424640">to m</span> <span m="425490">to</span> <span
  m="425580">be</span> <span m="425710">hard,</span> <span
  m="426800">it's</span> <span m="427090">only</span> <span
  m="427430">hard</span> <span m="428580">if</span> <span m="428840">the</span>
  <span m="429110">adversary</span> <span m="429510">doesn't</span> <span
  m="429790">know</span> <span m="430070">k.</span></p><p><span
  m="431990">If</span> <span m="432210">anybody</span> <span
  m="432570">knows</span> <span m="432820">k,</span> <span m="433320">it
  should</span> <span m="433540">be</span> <span m="433720">easy.</span> <span
  m="434490">In</span> <span m="434700">fact,</span> <span
  m="435730">that</span> <span m="436120">e</span> <span m="436370">and</span>
  <span m="436550">d</span> <span m="437230">are</span> <span
  m="437370">going</span> <span m="437550">to</span> <span m="437610">be</span>
  <span m="438030">virtually</span> <span m="438820">identical</span> <span
  m="440190">in</span> <span m="440380">terms</span> <span m="440730">of</span>
  <span m="440970">complexity</span> <span m="441770">and</span> <span
  m="441890">sometimes</span> <span m="442460">implementation.</span> <span
  m="443850">It's</span> <span m="444030">just</span> <span
  m="444250">you</span> <span m="444370">run it</span> <span
  m="444850">in</span> <span m="444950">reverse,</span> <span
  m="445840">and</span> <span m="446440">you</span> <span m="446580">get</span>
  <span m="446770">back</span> <span m="447300">what</span> <span
  m="447580">you</span> <span m="447890">encrypted.</span> <span
  m="449040">That's</span> <span m="449240">the way</span> <span m="449460">you
  want</span> <span m="449580">to</span> <span m="449630">think</span> <span
  m="449780">about</span> <span m="450020">it.</span></p><p><span
  m="450960">So</span> <span m="451580">really</span> <span
  m="451760">what</span> <span m="451890">happens</span> <span
  m="452250">is</span> <span m="452440">that</span> <span m="453090">you</span>
  <span m="453230">need</span> <span m="453510">reversible</span> <span
  m="454250">operations</span> <span m="457340">in</span> <span
  m="457530">order</span> <span m="457820">to</span> <span
  m="459410">build</span> <span m="461520">e</span> <span m="461997">or</span>
  <span m="462474">d,</span> <span m="464170">which</span> <span
  m="464430">are</span> <span m="464530">the</span> <span
  m="464630">encryption</span> <span m="465030">and</span> <span
  m="465230">the</span> <span m="465340">decryption</span> <span
  m="465680">functions.</span> <span m="466840">So</span> <span
  m="467330">permutation,</span> <span m="468030">for</span> <span
  m="468160">example,</span> <span m="469100">is</span> <span
  m="469300">reversible.</span> <span m="470440">You</span> <span
  m="470480">can</span> <span m="470580">always</span> <span
  m="470900">take</span> <span m="471100">something</span> <span
  m="471460">and</span> <span m="471610">permute</span> <span
  m="472020">it,</span> <span m="472520">and</span> <span m="472680">you</span>
  <span m="472770">can</span> <span m="472890">go</span> <span
  m="473030">backwards.</span></p><p><span m="474660">So</span> <span
  m="475020">you</span> <span m="475540">could</span> <span m="475660">do</span>
  <span m="475960">something</span> <span m="476300">like</span> <span
  m="476500">that.</span> <span m="477390">And</span> <span
  m="477800">the</span> <span m="478160">permutation,</span> <span
  m="479080">the</span> <span m="479460">reverse,</span> <span
  m="479850">looks</span> <span m="480040">like</span> <span
  m="480210">that.</span> <span m="481530">What</span> <span
  m="481670">is</span> <span m="481740">this</span> <span
  m="481930">supposed</span> <span m="482140">to</span> <span
  m="482220">be?</span> <span m="483800">It's</span> <span m="484470">the</span>
  <span m="484810">fact</span> <span m="485110">that</span> <span
  m="485250">I</span> <span m="485320">have</span> <span m="485520">3</span>
  <span m="485750">bits</span> <span m="486050">here.</span> <span
  m="487350">And</span> <span m="487540">they</span> <span
  m="487680">turn</span> <span m="487960">into</span> <span m="490650">3</span>
  <span m="490860">bits</span> <span m="491450">over</span> <span
  m="491650">there.</span></p><p><span m="492300">And</span> <span
  m="492530">obviously,</span> <span m="492860">if</span> <span
  m="493000">I</span> <span m="494080">reverse</span> <span
  m="494450">the</span> <span m="494560">permutation</span> <span m="496265">and
  if</span> <span m="496730">I</span> <span m="496810">just</span> <span
  m="497030">add</span> <span m="497150">a</span> <span m="497200">simple</span>
  <span m="497520">thing</span> <span m="497700">where it</span> <span
  m="497950">was</span> <span m="498040">abc</span> <span m="499220">and</span>
  <span m="499340">I'm</span> <span m="499420">going</span> <span
  m="499530">to</span> <span m="499630">convert</span> <span
  m="499940">it</span> <span m="500050">to</span> <span m="500130">cba,</span>
  <span m="501190">then</span> <span m="501870">cba</span> <span
  m="502270">can</span> <span m="502470">go</span> <span m="502620">back
  to</span> <span m="502890">abc</span> <span m="503580">through</span> <span
  m="503830">the</span> <span m="503960">reverse</span> <span
  m="504220">permutation.</span> <span m="505060">So</span> <span
  m="505220">clearly,</span> <span m="505530">this</span> <span
  m="505710">is</span> <span m="505850">a</span> <span
  m="506060">reversible</span> <span m="506560">operation.</span> <span
  m="507660">But</span> <span m="507800">there</span> <span
  m="507900">are</span> <span m="507920">other</span> <span
  m="508120">operations</span> <span m="508570">that</span> <span
  m="508670">are</span> <span m="508780">reversible</span> <span
  m="509200">as</span> <span m="509330">well.</span></p><p><span
  m="510330">Plus</span> <span m="511670">can</span> <span m="511850">be</span>
  <span m="512330">reversed</span> <span m="513179">by</span> <span
  m="513570">a</span> <span m="513650">negation.</span> <span
  m="515840">And</span> <span m="516500">exclusive</span> <span
  m="516830">OR</span> <span m="518150">is</span> <span m="518580">simply</span>
  <span m="518980">exclusive</span> <span m="519159">OR.</span> <span
  m="519580">Because</span> <span m="519860">if</span> <span
  m="519970">you</span> <span m="520090">do</span> <span m="522010">A</span>
  <span m="522240">exclusive</span> <span m="522669">OR</span> <span
  m="522840">B,</span> <span m="524080">then</span> <span m="524179">you</span>
  <span m="524290">get</span> <span m="524470">C.</span> <span
  m="525905">And</span> <span m="526230">imagine</span> <span
  m="526590">if</span> <span m="526680">you</span> <span m="527540">did</span>
  <span m="528160">B</span> <span m="528490">again</span> <span
  m="528770">to</span> <span m="528860">that,</span> <span m="529180">you</span>
  <span m="529290">get</span> <span m="529430">A</span> <span
  m="529560">back.</span></p><p><span m="530590">That's</span> <span
  m="530770">what</span> <span m="530900">I</span> <span m="530940">mean</span>
  <span m="531130">by</span> <span m="531210">reversal.</span> <span
  m="532230">Because</span> <span m="532590">you</span> <span
  m="532690">have,</span> <span m="532870">essentially,</span> <span
  m="533810">A</span> <span m="534100">exclusive</span> <span m="534360">OR
  A</span> <span m="534520">cancels</span> <span m="534950">out.</span> <span
  m="536240">And</span> <span m="536430">so</span> <span m="536610">it's</span>
  <span m="536820">something</span> <span m="537090">like</span> <span
  m="537310">a</span> <span m="537490">exclusive</span> <span
  m="537940">OR</span> <span m="538090">B</span> <span
  m="539260">exclusive</span> <span m="539480">OR</span> <span
  m="540500">B</span> <span m="540780">again</span> <span
  m="542800">would</span> <span m="542970">give</span> <span
  m="543090">you</span> <span m="543250">A.</span></p><p><span
  m="544330">So</span> <span m="545820">if</span> <span m="545960">you</span>
  <span m="546070">go</span> <span m="546260">look</span> <span
  m="546540">at</span> <span m="547080">AES,</span> <span m="547670">for</span>
  <span m="547800">example,</span> <span m="548320">which</span> <span
  m="548470">is</span> <span m="548560">the</span> <span
  m="548640">Advanced</span> <span m="549110">Encryption</span> <span
  m="549520">Standard,</span> <span m="550480">is</span> <span
  m="550600">really</span> <span m="550780">only</span> <span
  m="550920">about</span> <span m="551180">four</span> <span
  m="551440">lines</span> <span m="551820">of</span> <span
  m="551950">code,</span> <span m="552430">maybe</span> <span
  m="552680">it's</span> <span m="552820">eight</span> <span
  m="552970">lines</span> <span m="553240">of</span> <span
  m="553300">code.</span> <span m="554380">But</span> <span
  m="554550">this</span> <span m="554740">is</span> <span m="556690">a</span>
  <span m="557030">well</span> <span m="557340">used,</span> <span m="557665">it
  has</span> <span m="558110">been</span> <span m="558260">around</span> <span
  m="558520">for</span> <span m="558620">a</span> <span m="558720">while,</span>
  <span m="559410">symmetric</span> <span m="560060">key</span> <span
  m="560430">cipher</span> <span m="561760">that</span> <span
  m="562670">runs</span> <span m="562990">in</span> <span
  m="563100">128-bit</span> <span m="563850">mode</span> <span
  m="564210">as</span> <span m="564360">well</span> <span m="564560">as</span>
  <span m="565560">256-bit</span> <span m="566180">mode.</span></p><p><span
  m="567020">And</span> <span m="567750">it's,</span> <span
  m="568100">like</span> <span m="568260">I</span> <span m="568300">said,</span>
  <span m="568880">a</span> <span m="568920">few</span> <span
  m="569130">lines</span> <span m="569440">of</span> <span
  m="569550">code.</span> <span m="570410">And</span> <span
  m="570530">you'll</span> <span m="570720">see</span> <span
  m="571440">operations</span> <span m="572100">like</span> <span
  m="572410">this,</span> <span m="573440">permutations.</span> <span
  m="574370">And</span> <span m="574540">you'll</span> <span
  m="574680">see</span> <span m="574860">hat</span> <span
  m="575260">symbols</span> <span m="576340">if</span> <span
  m="576500">you</span> <span m="576600">see</span> <span m="576760">a</span>
  <span m="576820">C</span> <span m="577070">program,</span> <span
  m="577590">which</span> <span m="577720">is</span> <span
  m="577800">exclusive</span> <span m="578080">OR.</span></p><p><span
  m="579140">And</span> <span m="579970">you</span> <span m="580320">can</span>
  <span m="580430">see</span> <span m="580640">the</span> <span
  m="580760">encryption</span> <span m="581190">and</span> <span
  m="581260">the</span> <span m="581340">decryption</span> <span
  m="582260">are</span> <span m="582450">identical</span> <span
  m="583230">in</span> <span m="583470">implementation.</span> <span
  m="583840">You're</span> <span m="584210">just</span> <span
  m="584470">going</span> <span m="584560">to</span> <span m="584650">run</span>
  <span m="584860">it</span> <span m="584940">one</span> <span
  m="585140">way,</span> <span m="585330">and</span> <span m="585420">you</span>
  <span m="585550">run</span> <span m="585770">it</span> <span
  m="585850">again.</span> <span m="586500">And</span> <span
  m="586720">you</span> <span m="586810">get</span> <span m="586990">back</span>
  <span m="587240">the</span> <span m="587610">result.</span> <span
  m="588050">Because</span> <span m="588300">these</span> <span
  m="588450">permutations</span> <span m="589040">are</span> <span
  m="589130">reversible.</span> <span m="590060">And</span> <span m="590490">the
  hats</span> <span m="590980">are</span> <span
  m="591070">reversible.</span></p><p><span m="592080">And</span> <span
  m="592680">they're</span> <span m="593050">all</span> <span
  m="593330">signed</span> <span m="593740">integers,</span> <span
  m="594280">so</span> <span m="594500">you're</span> <span
  m="594680">just</span> <span m="594880">sort of</span> <span
  m="595050">adding</span> <span m="595330">them</span> <span
  m="595480">up.</span> <span m="595940">And</span> <span m="596190">it's</span>
  <span m="596890">just</span> <span m="597070">complement</span> <span
  m="597385">arithmetic,</span> <span m="598220">so</span> <span
  m="598380">that</span> <span m="598540">looks</span> <span
  m="598740">the</span> <span m="598840">same</span> <span m="599060">as</span>
  <span m="599170">well.</span> <span m="600140">So</span> <span
  m="600600">I</span> <span m="600630">encourage</span> <span
  m="600960">you</span> <span m="601080">to</span> <span m="601160">go</span>
  <span m="601300">take</span> <span m="601610">a</span> <span
  m="601660">look</span> <span m="601850">at</span> <span m="601910">AES.</span>
  <span m="602440">I'm</span> <span m="602550">not</span> <span
  m="602680">going</span> <span m="602760">to</span> <span
  m="602810">spend</span> <span m="603440">more</span> <span
  m="603640">time</span> <span m="603900">on</span> <span
  m="604040">it.</span></p><p><span m="604500">The</span> <span
  m="604680">key</span> <span m="605300">idea</span> <span
  m="605610">here</span> <span m="605980">is</span> <span m="606200">of</span>
  <span m="606320">symmetry</span> <span m="607470">and</span> <span
  m="607660">reversibility.</span> <span m="609390">We're</span> <span
  m="609490">going</span> <span m="609600">to</span> <span
  m="609640">move</span> <span m="609830">away</span> <span
  m="610000">from</span> <span m="610150">that.</span> <span
  m="611050">Clearly,</span> <span m="611380">we</span> <span
  m="611470">didn't</span> <span m="611670">talk</span> <span
  m="611850">about</span> <span m="612120">that</span> <span
  m="612360">when</span> <span m="612490">we</span> <span
  m="612590">talked</span> <span m="612790">about</span> <span
  m="612970">one</span> <span m="613130">way</span> <span m="613260">hash</span>
  <span m="613510">functions,</span> <span m="613870">et</span> <span
  m="614000">cetera.</span> <span m="614720">That</span> <span
  m="614820">was</span> <span m="615140">a</span> <span
  m="615520">different</span> <span m="616110">situation</span> <span
  m="616960">where</span> <span m="617070">we</span> <span m="617150">had</span>
  <span m="617330">no</span> <span m="617470">secrecy.</span> <span
  m="618500">But</span> <span m="619680">here,</span> <span m="619810">we</span>
  <span m="620050">wanted</span> <span m="620360">symmetry.</span></p><p><span
  m="621770">The</span> <span m="621860">big</span> <span
  m="622020">question</span> <span m="622440">that</span> <span
  m="622850">you</span> <span m="623010">would</span> <span
  m="623110">ask</span> <span m="623560">and</span> <span m="623720">you</span>
  <span m="623810">should</span> <span m="623990">ask</span> <span
  m="624180">yourself</span> <span m="625110">when</span> <span
  m="625420">you</span> <span m="625640">see</span> <span
  m="625980">this,</span> <span m="626300">you</span> <span
  m="626420">say,</span> <span m="626590">OK</span> <span
  m="626800">great.</span> <span m="627470">I</span> <span m="627650">can</span>
  <span m="627830">build</span> <span m="628780">symmetric</span> <span
  m="629220">key</span> <span m="629390">encryption</span> <span
  m="629810">algorithms.</span> <span m="630810">They're</span> <span
  m="630960">actually,</span> <span m="631460">I</span> <span
  m="631570">would</span> <span m="631700">say,</span> <span
  m="631860">somewhat</span> <span m="632350">easier</span> <span
  m="632790">to</span> <span m="632910">do</span> <span m="634030">than</span>
  <span m="634550">to</span> <span m="634650">build</span> <span
  m="634920">hash</span> <span m="635200">functions,</span> <span
  m="635750">which</span> <span m="636020">have</span> <span m="636260">a</span>
  <span m="636490">whole</span> <span m="636730">lot</span> <span
  m="636880">of</span> <span m="636940">more</span> <span
  m="638660">interesting</span> <span m="639050">properties</span> <span
  m="639560">and</span> <span m="639660">hard</span> <span m="639980">to</span>
  <span m="640070">obtain</span> <span m="640380">properties</span> <span
  m="641250">like</span> <span m="641910">collusion</span> <span
  m="642270">resistance.</span> <span m="643260">But</span> <span
  m="645040">the</span> <span m="645100">question</span> <span
  m="645570">really</span> <span m="645850">is</span> <span
  m="646500">how</span> <span m="646850">do</span> <span m="647030">Alice</span>
  <span m="647320">and</span> <span m="647610">Bob</span> <span
  m="648470">share</span> <span m="648980">the</span> <span
  m="649060">secret</span> <span m="649450">key,</span> <span
  m="649680">k?</span></p><p><span m="650950">So</span> <span
  m="651230">you</span> <span m="651380">need</span> <span
  m="651650">that.</span> <span m="652040">You</span> <span
  m="652190">need</span> <span m="652440">this</span> <span
  m="652580">128-bit</span> <span m="653340">number</span> <span
  m="654240">in</span> <span m="654400">order</span> <span m="654770">for</span>
  <span m="655380">there</span> <span m="655660">to</span> <span
  m="655760">be</span> <span m="656010">a</span> <span
  m="656070">channel,</span> <span m="656830">a</span> <span
  m="656920">secure</span> <span m="657340">channel,</span> <span
  m="658240">that</span> <span m="658430">Alice</span> <span
  m="658750">can</span> <span m="658890">communicate</span> <span
  m="659870">to</span> <span m="659990">Bob</span> <span m="660320">with</span>
  <span m="661280">and</span> <span m="661680">vice</span> <span
  m="661840">verse.</span> <span m="662570">And</span> <span
  m="662730">so</span> <span m="662930">now you</span> <span
  m="663030">could</span> <span m="663130">say</span> <span m="663270">Alice
  sends</span> <span m="663530">Bob</span> <span m="663990">a</span> <span
  m="664080">letter.</span> <span m="665320">But</span> <span m="665890">you
  know,</span> <span m="666480">mal</span> <span m="666860">could</span> <span
  m="667240">intercept</span> <span m="667750">that</span> <span
  m="667900">letter.</span></p><p><span m="669000">And</span> <span
  m="669190">even</span> <span m="669470">worse,</span> <span
  m="669840">what</span> <span m="670050">wants</span> <span
  m="670560">to</span> <span m="670670">do</span> <span m="671330">is</span>
  <span m="671850">look</span> <span m="672130">at</span> <span
  m="672200">the</span> <span m="672290">letter,</span> <span
  m="672930">actually</span> <span m="673350">deliver</span> <span
  m="673820">the</span> <span m="673950">letter,</span> <span
  m="675140">which</span> <span m="675290">is</span> <span m="675410">the</span>
  <span m="675480">best</span> <span m="675720">thing</span> <span
  m="675960">for</span> <span m="676180">him,</span> <span m="679330">and</span>
  <span m="680060">Alice and</span> <span m="680520">Bob</span> <span
  m="680920">think</span> <span m="681180">that</span> <span
  m="681580">they</span> <span m="681650">have</span> <span m="681780">a</span>
  <span m="681830">secure</span> <span m="682090">channel.</span> <span
  m="682750">That's</span> <span m="682980">sort of</span> <span
  m="683090">best</span> <span m="683310">case</span> <span
  m="683480">scenario</span> <span m="683870">for</span> <span
  m="684010">mal,</span> <span m="684800">right?</span> <span
  m="685360">So</span> <span m="687040">you could</span> <span m="687190">have
  mal in</span> <span m="687480">the</span> <span m="687550">middle</span> <span
  m="687830">here.</span></p><p><span m="689320">And</span> <span
  m="690750">you've</span> <span m="690880">got</span> <span m="691020">to
  worry</span> <span m="691330">about</span> <span m="691530">stuff</span> <span
  m="691710">like</span> <span m="691860">that.</span> <span
  m="693050">So</span> <span m="693770">key</span> <span
  m="694020">exchange,</span> <span m="695070">let's</span> <span
  m="695610">move</span> <span m="695830">on</span> <span m="697510">to</span>
  <span m="697600">talk</span> <span m="697860">about</span> <span
  m="698530">key</span> <span m="698770">exchange.</span> <span
  m="706445">And</span> <span m="706910">how</span> <span m="707090">does</span>
  <span m="707370">the</span> <span m="707480">secret</span> <span
  m="707880">key</span> <span m="714890">k</span> <span m="716340">get</span>
  <span m="717220">shared?</span> <span m="720060">You</span> <span
  m="720230">can't</span> <span m="720630">put</span> <span
  m="720840">this</span> <span m="721040">out</span> <span m="721900">on</span>
  <span m="722070">a</span> <span m="722120">website,</span> <span
  m="723290">right?</span> <span m="723980">So</span> <span m="724460">it</span>
  <span m="724580">has</span> <span m="724820">to</span> <span
  m="724910">be</span> <span m="725310">the</span> <span m="725450">case,</span>
  <span m="725920">sharing</span> <span m="726750">is</span> <span
  m="729050">something</span> <span m="729370">that</span> <span
  m="729520">has</span> <span m="729810">to</span> <span m="729910">be</span>
  <span m="730160">secure</span> <span m="731540">in</span> <span
  m="731880">the</span> <span m="731970">sense</span> <span
  m="732200">that</span> <span m="732320">there</span> <span
  m="732410">can't</span> <span m="732640">be</span> <span m="732770">any</span>
  <span m="732960">eavesdroppers.</span></p><p><span m="734730">So</span> <span
  m="735440">here's</span> <span m="735680">my</span> <span
  m="736470">favorite</span> <span m="736780">example</span> <span
  m="737810">of</span> <span m="737930">a</span> <span m="738000">puzzle</span>
  <span m="738970">that</span> <span m="739780">most</span> <span
  m="740040">of</span> <span m="740120">you have</span> <span
  m="740270">probably</span> <span m="741910">heard</span> <span
  m="742110">about.</span> <span m="743170">But</span> <span
  m="744280">those</span> <span m="744520">of</span> <span m="744610">you
  who</span> <span m="744820">haven't,</span> <span m="745340">it's</span> <span
  m="745550">really</span> <span m="745750">pretty</span> <span
  m="745960">cool.</span> <span m="746800">And</span> <span
  m="747010">those</span> <span m="747190">of</span> <span m="747270">you
  who</span> <span m="747560">have,</span> <span m="747950">it's</span> <span
  m="748300">still</span> <span m="748620">pretty</span> <span
  m="748870">cool</span> <span m="750600">and</span> <span
  m="750880">worth</span> <span m="752700">recalling.</span></p><p><span
  m="753790">And</span> <span m="754100">there's</span> <span
  m="754300">actually</span> <span m="755260">something</span> <span
  m="755560">that</span> <span m="755730">you</span> <span
  m="755850">probably</span> <span m="756300">haven't</span> <span
  m="756540">thought</span> <span m="756710">about</span> <span
  m="756940">very</span> <span m="757110">much</span> <span
  m="757800">even</span> <span m="758040">if</span> <span
  m="758100">you've</span> <span m="758250">heard</span> <span
  m="758400">about</span> <span m="758600">this</span> <span
  m="758770">puzzle.</span> <span m="759450">That's</span> <span
  m="759700">the</span> <span m="759960">mathematical</span> <span
  m="761090">assumption</span> <span m="761980">made</span> <span
  m="762480">in</span> <span m="762610">the</span> <span
  m="762700">solution</span> <span m="763130">of</span> <span
  m="763220">this</span> <span m="763380">puzzle.</span> <span
  m="764080">That</span> <span m="764280">will</span> <span m="764410">be</span>
  <span m="764530">interesting</span> <span m="764920">to</span> <span
  m="765380">you.</span></p><p><span m="765930">But</span> <span
  m="766190">the</span> <span m="766280">puzzle</span> <span
  m="766600">is</span> <span m="766690">a</span> <span m="766760">pirate</span>
  <span m="767100">puzzle.</span> <span m="767980">So</span> <span
  m="768120">you've</span> <span m="768290">got</span> <span
  m="768410">Alice</span> <span m="768690">and</span> <span
  m="768790">Bob.</span> <span m="770050">Let's</span> <span
  m="770270">call</span> <span m="770420">it</span> <span m="770520">the</span>
  <span m="770820">Caribbean,</span> <span m="771540">because</span> <span
  m="771760">that's</span> <span m="771900">my</span> <span
  m="772020">favorite</span> <span m="772340">ocean.</span> <span
  m="773740">And</span> <span m="775200">Alice</span> <span
  m="775280">and</span> <span m="775410">Bob</span> <span m="775670">are</span>
  <span m="775930">in</span> <span m="776030">two</span> <span
  m="776140">different</span> <span m="776390">islands.</span></p><p><span
  m="777180">And</span> <span m="777510">we</span> <span m="777600">all</span>
  <span m="777730">know</span> <span m="777910">there are</span> <span
  m="778080">pirates</span> <span m="778440">in</span> <span
  m="778510">the</span> <span m="778590">Caribbean,</span> <span
  m="779020">right?</span> <span m="781600">And</span> <span
  m="781790">so</span> <span m="782070">Alice</span> <span m="782350">and</span>
  <span m="782450">Bob</span> <span m="782730">want</span> <span
  m="782940">to</span> <span m="783360">communicate</span> <span
  m="784790">with</span> <span m="784930">each</span> <span
  m="785100">other.</span> <span m="786140">And</span> <span
  m="786870">what</span> <span m="787030">Alice</span> <span
  m="787310">has</span> <span m="788780">are a</span> <span
  m="788820">bunch</span> <span m="789040">of</span> <span
  m="789120">boxes</span> <span m="790450">and</span> <span
  m="791090">locks</span> <span m="791480">and</span> <span
  m="791640">keys.</span></p><p><span m="794930">She's</span> <span
  m="795100">got</span> <span m="795240">the</span> <span m="795320">keys</span>
  <span m="795660">for</span> <span m="795820">her</span> <span
  m="796010">locks</span> <span m="797360">and</span> <span
  m="797630">nothing</span> <span m="797930">else</span> <span
  m="799150">and</span> <span m="800550">the</span> <span m="800660">same</span>
  <span m="800830">thing</span> <span m="800970">with</span> <span
  m="801610">Bob.</span> <span m="802980">So</span> <span m="803750">Bob</span>
  <span m="804030">has</span> <span m="804300">boxes,</span> <span
  m="806080">locks,</span> <span m="809570">keys</span> <span
  m="809790">for</span> <span m="809900">his</span> <span
  m="810070">locks</span> <span m="810460">that</span> <span
  m="810590">he</span> <span m="810700">can</span> <span m="810800">put</span>
  <span m="810930">on</span> <span m="811030">his</span> <span
  m="811160">boxes.</span> <span m="812360">And</span> <span
  m="812990">in</span> <span m="813120">this</span> <span
  m="813280">case,</span> <span m="813470">Alice</span> <span
  m="813860">wants</span> <span m="814070">to</span> <span
  m="814740">send</span> <span m="815010">a</span> <span
  m="815060">message</span> <span m="815510">to</span> <span
  m="815620">Bob.</span></p><p><span m="816690">And</span> <span
  m="816860">Alice</span> <span m="817070">wants</span> <span m="817410">to
  exchange a</span> <span m="817750">key</span> <span m="818020">with</span>
  <span m="818160">Bob,</span> <span m="819110">so</span> <span
  m="819370">they</span> <span m="819500">can</span> <span
  m="819620">eventually</span> <span m="820040">communicate</span> <span
  m="821930">in</span> <span m="822080">a</span> <span m="822130">secure</span>
  <span m="822450">way</span> <span m="823770">regardless</span> <span
  m="824140">of</span> <span m="824220">the</span> <span
  m="824290">pirates</span> <span m="824690">or</span> <span
  m="824820">whoever</span> <span m="825080">else is</span> <span
  m="825430">listening.</span> <span m="827050">So</span> <span
  m="827860">the</span> <span m="827980">problem</span> <span
  m="828270">here,</span> <span m="828590">of</span> <span
  m="828690">course,</span> <span m="828900">is</span> <span
  m="828930">that</span> <span m="829590">if</span> <span m="829720">you</span>
  <span m="829810">just</span> <span m="830030">send</span> <span
  m="830250">a</span> <span m="830290">message</span> <span m="830630">on</span>
  <span m="830730">a</span> <span m="830770">boat--</span> <span
  m="831160">so</span> <span m="831260">the</span> <span
  m="831370">pirates</span> <span m="831720">are</span> <span
  m="831860">kind</span> <span m="832000">of</span> <span
  m="832060">nice,</span> <span m="832310">in</span> <span m="832410">a</span>
  <span m="832470">way,</span> <span m="833090">that</span> <span
  m="833460">they</span> <span m="833640">will</span> <span
  m="834510">deliver</span> <span m="835460">messages.</span> <span
  m="838260">But</span> <span m="839310">they</span> <span m="839560">are</span>
  <span m="840340">curious,</span> <span m="841180">right?</span></p><p><span
  m="841730">So</span> <span m="841880">they're</span> <span
  m="842000">very</span> <span m="842210">curious.</span> <span
  m="843000">And</span> <span m="843220">they</span> <span
  m="843330">will</span> <span m="843910">open</span> <span m="844170">up</span>
  <span m="844310">boxes.</span> <span m="845250">And</span> <span
  m="845450">so</span> <span m="845520">that's</span> <span m="845730">supposed
  to</span> <span m="845770">be</span> <span m="846030">a</span> <span
  m="846090">boat,</span> <span m="846360">by</span> <span m="846470">the</span>
  <span m="846560">way,</span> <span m="846670">not</span> <span
  m="846820">a</span> <span m="846860">box,</span> <span m="848120">a</span>
  <span m="848460">little</span> <span m="848640">mast</span> <span
  m="849000">there.</span></p><p><span m="850880">So</span> <span
  m="852850">I'm</span> <span m="853010">not</span> <span m="853160">a</span>
  <span m="853210">sailor.</span> <span m="854150">But</span> <span
  m="855000">you</span> <span m="855690">have</span> <span
  m="855840">these</span> <span m="856020">boxes</span> <span
  m="856730">that</span> <span m="857670">are</span> <span
  m="857780">going</span> <span m="857890">to</span> <span m="857960">get</span>
  <span m="858100">delivered.</span> <span m="858830">And</span> <span
  m="859290">the</span> <span m="859360">deal</span> <span m="859570">is</span>
  <span m="859680">this.</span></p><p><span m="860740">If</span> <span
  m="861050">there's</span> <span m="861200">an</span> <span
  m="861270">open</span> <span m="861560">box,</span> <span
  m="862370">the</span> <span m="862480">pirate's will</span> <span
  m="862900">open</span> <span m="863080">the</span> <span
  m="863150">box.</span> <span m="863800">And</span> <span m="864010">if</span>
  <span m="864120">there's</span> <span m="864240">any</span> <span
  m="864360">message</span> <span m="864580">in it,</span> <span
  m="864920">they</span> <span m="864990">might</span> <span m="865480">read it,
  they might</span> <span m="865690">throw</span> <span m="865850">it</span>
  <span m="865910">away.</span> <span m="866760">So</span> <span
  m="867550">clearly,</span> <span m="870670">a</span> <span m="871070">secret
  key</span> <span m="871490">can</span> <span m="871720">be</span> <span
  m="871830">exchanged</span> <span m="872550">by</span> <span
  m="872700">just</span> <span m="873710">putting</span> <span
  m="874650">a</span> <span m="874730">box</span> <span m="875090">with</span>
  <span m="875250">a</span> <span m="875280">message</span> <span
  m="875620">in</span> <span m="875730">it</span> <span m="876150">if</span>
  <span m="876280">you</span> <span m="876360">don't</span> <span
  m="876520">lock</span> <span m="876750">it.</span></p><p><span
  m="878350">They</span> <span m="878550">will</span> <span
  m="879090">not</span> <span m="880670">be</span> <span m="880990">able</span>
  <span m="881170">to</span> <span m="881230">open,</span> <span
  m="882400">they'll</span> <span m="882580">not</span> <span
  m="882850">touch,</span> <span m="883220">and</span> <span
  m="883380">they</span> <span m="883460">will</span> <span
  m="883640">deliver</span> <span m="884660">a</span> <span
  m="884760">locked</span> <span m="885175">box.</span> <span
  m="887040">But</span> <span m="887200">if</span> <span m="887290">they</span>
  <span m="887340">ever</span> <span m="887590">see</span> <span
  m="887790">a</span> <span m="887840">key,</span> <span
  m="889170">they'll</span> <span m="889370">keep</span> <span
  m="889590">it.</span> <span m="891390">If they</span> <span
  m="891610">ever</span> <span m="891700">see kind of</span> <span
  m="892070">a</span> <span m="892140">key</span> <span m="892440">on</span>
  <span m="892560">the</span> <span m="892690">boat,</span> <span
  m="893670">they'll</span> <span m="893810">just</span> <span
  m="893970">grab</span> <span m="894210">it</span> <span m="894310">and</span>
  <span m="894430">keep</span> <span m="894640">it.</span> <span
  m="894810">And</span> <span m="894940">then</span> <span m="895130">the</span>
  <span m="895220">next</span> <span m="895450">time</span> <span
  m="895640">around,</span> <span m="896090">they</span> <span
  m="896190">see</span> <span m="896260">a</span> <span m="896310">locked</span>
  <span m="896570">box,</span> <span m="896880">they'll</span> <span
  m="897520">stick</span> <span m="898010">the</span> <span
  m="898210">key</span> <span m="898450">in</span> <span m="898880">and</span>
  <span m="899030">try</span> <span m="899160">and</span> <span
  m="899240">open</span> <span m="899530">it.</span></p><p><span
  m="900140">All</span> <span m="900220">right.</span> <span
  m="901970">So</span> <span m="902190">how</span> <span m="902320">do</span>
  <span m="902390">Alice</span> <span m="902770">and</span> <span
  m="902870">Bob</span> <span m="903850">securely</span> <span
  m="904620">exchange</span> <span m="905560">a</span> <span
  m="905630">secret</span> <span m="906340">where</span> <span
  m="906530">security</span> <span m="907060">is</span> <span
  m="907260">based</span> <span m="907590">on</span> <span
  m="907710">this</span> <span m="907880">notion</span> <span
  m="908920">of</span> <span m="909060">piracy,</span> <span m="909600">I</span>
  <span m="909630">guess,</span> <span m="910190">with</span> <span
  m="910280">the</span> <span m="910390">pirates</span> <span
  m="910960">having</span> <span m="911700">a</span> <span
  m="911810">certain</span> <span m="912140">amount</span> <span
  m="912500">of</span> <span m="915670">capability</span> <span
  m="916980">in</span> <span m="917390">terms</span> <span m="917620">of</span>
  <span m="917720">storing</span> <span m="918620">keys,</span> <span
  m="919160">and</span> <span m="919320">opening</span> <span
  m="919620">up</span> <span m="919750">the</span> <span
  m="919840">locks,</span> <span m="920610">but</span> <span
  m="920740">they</span> <span m="920820">will</span> <span
  m="920950">not</span> <span m="921260">touch</span> <span m="921750">a</span>
  <span m="921840">locked</span> <span m="922180">box?</span> <span
  m="923460">All</span> <span m="923530">right.</span> <span
  m="924670">So</span> <span m="924790">that's</span> <span
  m="924960">the</span> <span m="925050">puzzle.</span></p><p><span
  m="925510">How</span> <span m="925600">many</span> <span m="925740">of</span>
  <span m="925820">you have</span> <span m="925950">heard</span> <span
  m="926100">of</span> <span m="926150">this</span> <span
  m="926290">puzzle</span> <span m="926540">before?</span> <span
  m="927790">So</span> <span m="927930">all of</span> <span
  m="927960">you</span> <span m="928220">keep</span> <span
  m="928430">quiet.</span> <span m="930090">Someone</span> <span
  m="930510">who</span> <span m="930610">hasn't</span> <span
  m="931470">heard</span> <span m="931610">of</span> <span
  m="931700">this</span> <span m="931830">puzzle</span> <span
  m="932120">before,</span> <span m="934350">think</span> <span
  m="934550">for</span> <span m="935030">a</span> <span m="935140">few</span>
  <span m="935320">seconds</span> <span m="935680">here</span> <span
  m="935910">and</span> <span m="936030">see</span> <span m="937180">if</span>
  <span m="938140">a</span> <span m="938270">solution</span> <span
  m="938740">occurs</span> <span m="939100">to you</span> <span
  m="939770">with</span> <span m="939920">respect</span> <span
  m="940290">to</span> <span m="941360">going</span> <span
  m="941580">back</span> <span m="941790">and</span> <span
  m="941910">forth--</span> <span m="942370">so</span> <span
  m="942380">that's</span> <span m="942620">the</span> <span
  m="942940">hint,</span> <span m="943490">going</span> <span
  m="943720">back</span> <span m="943920">and</span> <span
  m="944050">forth--</span> <span m="944900">and</span> <span
  m="945450">being</span> <span m="945680">able</span> <span
  m="945960">to</span> <span m="946380">securely</span> <span
  m="947110">exchange</span> <span m="947980">a</span> <span
  m="948080">message,</span> <span m="948770">which</span> <span
  m="949150">could</span> <span m="949300">be</span> <span m="949460">a</span>
  <span m="950190">128-bit</span> <span m="950850">secret</span> <span
  m="951130">key</span> <span m="951380">written</span> <span m="951660">on
  a</span> <span m="951800">little</span> <span m="952070">note</span> <span
  m="953210">between</span> <span m="953580">Alice</span> <span
  m="953830">and</span> <span m="953940">Bob.</span> <span
  m="955300">Yeah?</span> <span m="955560">Back</span> <span
  m="955820">there.</span></p><p><span m="956578">AUDIENCE: Are</span> <span
  m="957046">they</span> <span m="957514">allowed</span> <span m="957982">to
  pass</span> <span m="958450">locks</span> <span m="959386">such
  that--</span></p><p><span m="960790">SRINIVAS DEVADAS: So</span> <span
  m="961150">if</span> <span m="961520">you</span> <span m="961700">see</span>
  <span m="961940">it</span> <span m="962050">locked,</span> <span
  m="962530">they'll</span> <span m="962670">throw</span> <span m="962940">away
  the</span> <span m="963070">lock,</span> <span m="963410">too.</span> <span
  m="964510">If</span> <span m="964660">the</span> <span m="964770">lock</span>
  <span m="965070">is</span> <span m="965180">on</span> <span
  m="965450">the</span> <span m="965540">box,</span> <span
  m="967210">then</span> <span m="967840">sure,</span> <span m="968370">they
  will</span> <span m="968630">deliver</span> <span m="968960">that</span> <span
  m="969200">box.</span> <span m="970340">But</span> <span m="970510">if</span>
  <span m="970560">the</span> <span m="970660">key is</span> <span
  m="970990">outside</span> <span m="971440">of</span> <span
  m="971540">that</span> <span m="971620">box,</span> <span
  m="972610">then</span> <span m="973050">they'll</span> <span
  m="973370">keep</span> <span m="973540">the</span> <span
  m="973620">key.</span> <span m="981990">No--</span> <span
  m="982940">this</span> <span m="983430">is</span> <span m="983550">a</span>
  <span m="983600">difficult</span> <span m="983930">puzzle.</span> <span
  m="984270">Yeah?</span></p><p><span m="986246">AUDIENCE: Alice</span> <span
  m="986740">could</span> <span m="987234">lock the</span> <span
  m="987728">box</span> <span m="988222">and</span> <span m="988716">send
  it</span> <span m="989210">to Bob.</span></p><p><span m="989710">SRINIVAS
  DEVADAS: Yeah.</span></p><p><span m="990065">AUDIENCE: And then</span> <span
  m="990420">Bob</span> <span m="990881">could</span> <span
  m="991342">also</span> <span m="992725">lock</span> <span
  m="993650">the</span> <span m="994130">box.</span></p><p><span
  m="994572">SRINIVAS DEVADAS: Yeah.</span> <span m="995900">And</span> <span
  m="996030">then?</span> <span m="997090">At</span> <span
  m="997160">that</span> <span m="997300">point--</span> <span
  m="999480">no,</span> <span m="999730">you're on the right</span> <span
  m="999910">track.</span> <span m="1000900">Keep</span> <span
  m="1001070">going.</span> <span m="1001300">Just</span> <span
  m="1001480">push</span> <span m="1001660">it</span> <span m="1001710">a</span>
  <span m="1001760">little</span> <span m="1001890">more.</span> <span
  m="1003740">Couple of</span> <span m="1004000">more</span> <span
  m="1004170">boat</span> <span m="1004400">rides</span> <span
  m="1004790">and</span> <span m="1004910">we're</span> <span
  m="1005020">done.</span> <span m="1006492">Yeah.</span></p><p><span
  m="1008456">AUDIENCE: And</span> <span m="1008947">then</span> <span
  m="1010420">if</span> <span m="1010911">Bob</span> <span
  m="1011402">sends--</span></p><p><span m="1013380">SRINIVAS DEVADAS: So
  there's</span> <span m="1013490">now</span> <span m="1013740">two</span> <span
  m="1013940">locks</span> <span m="1014180">on</span> <span
  m="1014250">the</span> <span m="1014320">box.</span></p><p><span
  m="1014750">AUDIENCE: Yes.</span></p><p><span m="1015590">SRINIVAS DEVADAS:
  And</span> <span m="1016360">Bob</span> <span m="1016560">has</span> <span
  m="1016840">two</span> <span m="1016970">locks</span> <span
  m="1017220">on</span> <span m="1017300">the</span> <span
  m="1017380">box.</span> <span m="1018780">And</span> <span
  m="1018980">so</span> <span m="1019090">what's</span> <span
  m="1019370">Bob</span> <span m="1019450">going</span> <span
  m="1019580">to</span> <span m="1019630">do</span> <span
  m="1019750">next?</span> <span m="1020020">What's</span> <span
  m="1020180">the</span> <span m="1020250">logical</span> <span
  m="1020640">thing</span> <span m="1020830">for</span> <span
  m="1021200">Bob</span> <span m="1021380">to</span> <span m="1021470">do</span>
  <span m="1021600">next?</span></p><p><span m="1023742">AUDIENCE: Send
  it</span> <span m="1024190">back to</span> <span
  m="1024638">Alice.</span></p><p><span m="1025089">SRINIVAS DEVADAS:
  Send</span> <span m="1025369">it</span> <span m="1025450">back</span> <span
  m="1025670">Alice.</span> <span m="1026630">And</span> <span
  m="1026800">now</span> <span m="1027750">the</span> <span
  m="1027890">key's</span> <span m="1028710">inside.</span> <span
  m="1030300">Alice</span> <span m="1030690">now</span> <span
  m="1030910">sees</span> <span m="1031520">two</span> <span
  m="1032099">locks</span> <span m="1033150">on</span> <span
  m="1033530">the</span> <span m="1033680">box.</span> <span
  m="1034170">And</span> <span m="1034339">one</span> <span
  m="1034470">of</span> <span m="1034520">the</span> <span m="1034579">locks
  is</span> <span m="1035859">Bobs.</span> <span m="1036420">And</span> <span
  m="1036569">other is?</span></p><p><span m="1037180">AUDIENCE:
  Hers.</span></p><p><span m="1038069">SRINIVAS DEVADAS: Is</span> <span
  m="1038230">hers.</span></p><p><span m="1038690">AUDIENCE: She can
  unlock</span> <span m="1039035">it.</span></p><p><span m="1039380">SRINIVAS
  DEVADAS: She</span> <span m="1039619">can</span> <span
  m="1039700">unlock</span> <span m="1040000">the</span> <span
  m="1040069">box</span> <span m="1040829">and</span> <span
  m="1041010">send</span> <span m="1041150">it</span> <span
  m="1041240">back</span> <span m="1041430">to</span> <span
  m="1041520">Bob.</span> <span m="1043540">And</span> <span
  m="1043839">all</span> <span m="1044079">of</span> <span
  m="1044180">this</span> <span m="1044359">time,</span> <span
  m="1045160">the</span> <span m="1045339">only</span> <span
  m="1045619">thing</span> <span m="1045800">that's</span> <span
  m="1046010">gone</span> <span m="1046319">in</span> <span
  m="1046470">transit</span> <span m="1047650">is</span> <span
  m="1048030">a</span> <span m="1048109">locked</span> <span
  m="1048524">box.</span> <span m="1049750">No</span> <span
  m="1049970">keys</span> <span m="1050400">have</span> <span
  m="1050560">gone</span> <span m="1050810">into</span> <span
  m="1051130">in</span> <span m="1051270">transit,</span> <span
  m="1052050">whether they're</span> <span m="1052140">inside</span> <span
  m="1052500">the</span> <span m="1052570">box</span> <span
  m="1052930">or</span> <span m="1053510">wherever.</span> <span
  m="1054400">But</span> <span m="1054820">the</span> <span
  m="1054920">only</span> <span m="1055070">thing</span> <span
  m="1055210">that's</span> <span m="1055410">moved</span> <span
  m="1055840">is</span> <span m="1056170">a</span> <span
  m="1056230">locked</span> <span m="1056585">box.</span></p><p><span
  m="1058720">So</span> <span m="1058860">that's</span> <span
  m="1059080">good.</span> <span m="1059410">You're</span> <span
  m="1059690">exactly</span> <span m="1059980">right.</span> <span
  m="1060550">So</span> <span m="1060920">that</span> <span
  m="1061140">gets</span> <span m="1061300">you</span> <span
  m="1063100">a</span> <span m="1063150">Frisbee.</span> <span
  m="1065110">Whoops,</span> <span m="1065470">sorry.</span> <span
  m="1066930">We need</span> <span m="1067320">a</span> <span
  m="1067740">secure</span> <span m="1068070">exchange</span> <span
  m="1068510">there.</span> <span m="1068710">Yeah,</span> <span
  m="1068860">that's</span> <span m="1069020">good.</span></p><p><span
  m="1070730">So</span> <span m="1072680">that</span> <span
  m="1073250">is</span> <span m="1073480">exactly</span> <span
  m="1073850">right.</span> <span m="1074250">So</span> <span
  m="1074280">just</span> <span m="1074520">to</span> <span
  m="1075510">recap,</span> <span m="1076890">Alice</span> <span
  m="1078560">locks</span> <span m="1080150">box</span> <span
  m="1082060">with</span> <span m="1084500">KA,</span> <span
  m="1085610">and</span> <span m="1085750">that's</span> <span
  m="1085910">the</span> <span m="1086020">key</span> <span
  m="1086290">for</span> <span m="1086390">the</span> <span
  m="1086500">lock,</span> <span m="1087590">sends</span> <span m="1087920">it
  to</span> <span m="1088020">Bob.</span> <span m="1089980">Bob</span> <span
  m="1093090">locks</span> <span m="1093520">box</span> <span
  m="1094120">with</span> <span m="1094300">KB,</span> <span
  m="1095870">sends</span> <span m="1096200">it</span> <span
  m="1096340">to</span> <span m="1096450">Alice.</span> <span
  m="1098320">And</span> <span m="1098790">Alice</span> <span
  m="1100780">unlocks--</span> <span m="1103670">oh, I</span> <span
  m="1103800">should've</span> <span m="1104040">said</span> <span
  m="1104220">that</span> <span m="1104980">Alice</span> <span
  m="1105860">puts</span> <span m="1106310">message</span> <span m="1106740">in 
  box.</span></p><p><span m="1112590">And</span> <span m="1113180">that</span>
  <span m="1113360">message</span> <span m="1114080">has</span> <span
  m="1114350">the</span> <span m="1114630">secret</span> <span
  m="1114910">key</span> <span m="1115070">inside</span> <span
  m="1115360">of</span> <span m="1115480">it.</span> <span
  m="1116630">Alice</span> <span m="1116970">unlocks</span> <span
  m="1118170">KA</span> <span m="1120260">and</span> <span
  m="1120940">sends</span> <span m="1122950">box</span> <span
  m="1123540">to</span> <span m="1123650">Bob.</span> <span
  m="1125840">And</span> <span m="1126120">then</span> <span
  m="1126360">Bob</span> <span m="1129310">unlocks</span> <span
  m="1131380">KB</span> <span m="1132920">and</span> <span
  m="1133800">reads</span> <span m="1134130">message.</span> <span
  m="1136130">So</span> <span m="1136260">that's</span> <span
  m="1136590">good.</span> <span m="1137470">That's</span> <span
  m="1137640">all</span> <span m="1137840">good.</span></p><p><span
  m="1139870">Let's</span> <span m="1140070">look</span> <span
  m="1140210">at</span> <span m="1140260">it</span> <span m="1140430">a</span>
  <span m="1140450">little</span> <span m="1140660">more</span> <span
  m="1141760">deeply</span> <span m="1143480">and</span> <span
  m="1143740">think</span> <span m="1143860">about</span> <span
  m="1144070">it</span> <span m="1144610">from</span> <span m="1144810">a</span>
  <span m="1144890">mathematical</span> <span m="1145410">standpoint,</span>
  <span m="1148010">not</span> <span m="1148170">a</span> <span
  m="1148210">physical</span> <span m="1148660">standpoint.</span> <span
  m="1149330">You</span> <span m="1149460">could</span> <span
  m="1149610">think</span> <span m="1149740">about</span> <span
  m="1149920">it</span> <span m="1150030">from</span> <span m="1150160">a</span>
  <span m="1150210">physical</span> <span m="1150550">standpoint</span> <span
  m="1150970">as</span> <span m="1151080">well.</span> <span
  m="1151990">What</span> <span m="1152180">is</span> <span
  m="1152310">the</span> <span m="1152420">relationship</span> <span
  m="1153740">between</span> <span m="1154770">this</span> <span
  m="1155020">locking,</span> <span m="1155700">this</span> <span
  m="1157400">sequence,</span> <span m="1158050">in</span> <span
  m="1158170">this</span> <span m="1158320">case</span> <span
  m="1158490">a</span> <span m="1158560">pair</span> <span m="1158950">of</span>
  <span m="1159090">locks,</span> <span m="1160120">that</span> <span
  m="1160700">we</span> <span m="1160940">require</span> <span
  m="1161810">here</span> <span m="1162550">in</span> <span
  m="1162830">order</span> <span m="1163060">for</span> <span
  m="1163160">this</span> <span m="1163350">to</span> <span
  m="1163440">physically</span> <span m="1163870">make</span> <span
  m="1164080">sense?</span> <span m="1165600">s</span></p><p><span
  m="1165810">I</span> <span m="1165890">mean,</span> <span
  m="1165970">there's</span> <span m="1166130">different</span> <span
  m="1166400">ways</span> <span m="1166660">that you</span> <span
  m="1166800">could</span> <span m="1166940">add</span> <span
  m="1167650">two</span> <span m="1167850">locks</span> <span m="1168190">to
  a</span> <span m="1168420">box.</span> <span m="1169890">There's</span> <span
  m="1170050">many</span> <span m="1170230">different</span> <span
  m="1170460">ways.</span> <span m="1172120">One</span> <span
  m="1172340">way</span> <span m="1172560">is</span> <span m="1172700">to</span>
  <span m="1172800">have</span> <span m="1173000">a</span> <span
  m="1173060">box</span> <span m="1174020">that</span> <span
  m="1174320">is</span> <span m="1174510">locked</span> <span
  m="1174880">if</span> <span m="1175040">I</span> <span m="1175330">look</span>
  <span m="1175630">it</span> <span m="1175730">over</span> <span
  m="1175890">here.</span></p><p><span m="1177440">And</span> <span
  m="1177700">it</span> <span m="1177760">doesn't</span> <span
  m="1177980">open,</span> <span m="1178240">because</span> <span
  m="1178490">the</span> <span m="1178580">lid</span> <span
  m="1178720">doesn't</span> <span m="1178950">open.</span> <span
  m="1179630">I've</span> <span m="1179710">got</span> <span
  m="1179820">suitcases</span> <span m="1180440">like</span> <span
  m="1180630">that.</span> <span m="1181310">And</span> <span
  m="1181470">then</span> <span m="1181720">there</span> <span
  m="1181820">could</span> <span m="1181940">be</span> <span
  m="1182030">another</span> <span m="1182240">spot</span> <span
  m="1182530">here</span> <span m="1183570">that</span> <span
  m="1183740">looks</span> <span m="1183980">it</span> <span
  m="1184060">as</span> <span m="1184170">well.</span> <span
  m="1187030">So</span> <span m="1188010">that</span> <span
  m="1188200">could</span> <span m="1188290">be</span> <span
  m="1188360">one</span> <span m="1188560">way.</span> <span
  m="1189090">Well,</span> <span m="1189250">what's</span> <span
  m="1189440">another</span> <span m="1189670">way</span> <span
  m="1189890">of</span> <span m="1190610">having</span> <span
  m="1190890">two</span> <span m="1191040">locks?</span> <span
  m="1192080">Yeah</span></p><p><span m="1192300">AUDIENCE: Putting a box</span>
  <span m="1192760">within a</span> <span m="1193220">box.</span></p><p><span
  m="1193680">SRINIVAS DEVADAS: Yeah,</span> <span m="1193910">putting</span>
  <span m="1194090">a</span> <span m="1194140">box</span> <span
  m="1194390">within</span> <span m="1194560">a</span> <span
  m="1194610">box.</span> <span m="1194860">That's</span> <span
  m="1195040">great.</span> <span m="1196090">So</span> <span
  m="1196660">if</span> <span m="1196790">you</span> <span
  m="1196900">put</span> <span m="1197020">a</span> <span m="1197090">box</span>
  <span m="1197500">within</span> <span m="1197700">a</span> <span
  m="1197740">box,</span> <span m="1199050">then</span> <span
  m="1199770">does</span> <span m="1199970">this</span> <span
  m="1200120">work?</span> <span m="1202270">It</span> <span
  m="1202430">doesn't</span> <span m="1202690">work,</span> <span
  m="1203430">right?</span></p><p><span m="1204090">So</span> <span
  m="1204260">nested</span> <span m="1204720">locks</span> <span
  m="1205070">actually</span> <span m="1205330">don't</span> <span
  m="1205510">work.</span> <span m="1206350">Because</span> <span
  m="1207090">what</span> <span m="1207230">happened</span> <span
  m="1207520">here</span> <span m="1208370">is</span> <span
  m="1208580">that</span> <span m="1208870">KA</span> <span
  m="1210520">was</span> <span m="1210740">put</span> <span
  m="1211020">first,</span> <span m="1215000">then</span> <span
  m="1215340">KB.</span> <span m="1217680">And</span> <span
  m="1217900">if,</span> <span m="1218020">in</span> <span
  m="1218140">fact,</span> <span m="1218450">you</span> <span
  m="1218540">had</span> <span m="1218990">KA,</span> <span
  m="1220590">and</span> <span m="1220740">then</span> <span
  m="1220900">KB</span> <span m="1221350">out</span> <span
  m="1221550">there,</span> <span m="1222730">then</span> <span
  m="1224440">you</span> <span m="1224690">can't</span> <span
  m="1226700">remove</span> <span m="1228780">KA</span> <span
  m="1230430">without</span> <span m="1232430">removing</span> <span
  m="1234010">KB.</span> <span m="1235990">And</span> <span
  m="1236170">this</span> <span m="1236310">would</span> <span
  m="1236410">be</span> <span m="1236520">the</span> <span
  m="1236630">case</span> <span m="1236870">where</span> <span
  m="1237020">you</span> <span m="1237070">have</span> <span
  m="1237230">nested</span> <span m="1237580">locks.</span></p><p><span
  m="1242180">So</span> <span m="1242430">the</span> <span
  m="1242510">mathematical</span> <span m="1243070">operation</span> <span
  m="1243540">that</span> <span m="1243660">we</span> <span
  m="1243780">require</span> <span m="1244860">is</span> <span
  m="1245390">commutativity</span> <span m="1246860">between</span> <span
  m="1247190">the</span> <span m="1247290">locks.</span> <span
  m="1248890">And</span> <span m="1249470">the</span> <span
  m="1249570">locks</span> <span m="1249860">need</span> <span
  m="1249990">to</span> <span m="1250050">commute.</span> <span
  m="1251010">I</span> <span m="1251170">want</span> <span m="1251300">to</span>
  <span m="1251350">put</span> <span m="1251875">KA</span> <span
  m="1252570">in</span> <span m="1252810">first.</span> <span
  m="1253900">Like</span> <span m="1254080">I</span> <span
  m="1254150">described,</span> <span m="1255140">the</span> <span
  m="1255320">physical</span> <span m="1255770">realization</span> <span
  m="1256320">could</span> <span m="1256450">simply</span> <span
  m="1256730">be</span> <span m="1256880">a</span> <span
  m="1256950">suitcase</span> <span m="1257450">with</span> <span
  m="1258060">two</span> <span m="1258320">different</span> <span
  m="1258580">positions</span> <span m="1259440">for</span> <span
  m="1259590">the</span> <span m="1259700">two</span> <span
  m="1259870">locks.</span> <span m="1260250">And</span> <span
  m="1260620">any</span> <span m="1261210">one</span> <span
  m="1261480">of</span> <span m="1261560">those</span> <span
  m="1261730">positions</span> <span m="1262530">locks</span> <span
  m="1262880">the</span> <span m="1262990">suitcase.</span></p><p><span
  m="1263760">So you</span> <span m="1264120">put KA</span> <span
  m="1264480">here,</span> <span m="1264750">KB</span> <span
  m="1265110">here.</span> <span m="1265820">And</span> <span
  m="1265980">then</span> <span m="1266170">you</span> <span
  m="1266260">can</span> <span m="1266380">take</span> <span
  m="1266910">KA</span> <span m="1267230">out,</span> <span
  m="1268180">right?</span> <span m="1268400">And</span> <span
  m="1268550">it's</span> <span m="1268660">still</span> <span
  m="1268860">locked,</span> <span m="1269120">because</span> <span
  m="1269340">you</span> <span m="1269420">have</span> <span
  m="1269540">KB.</span> <span m="1270860">So</span> <span
  m="1271000">this</span> <span m="1271680">commutativity</span> <span
  m="1273090">between</span> <span m="1278580">the</span> <span
  m="1278720">locks</span> <span m="1279440">and</span> <span
  m="1279730">essentially</span> <span m="1280130">the</span> <span
  m="1280240">keys</span> <span m="1283430">is</span> <span
  m="1283560">what's</span> <span m="1283780">required.</span></p><p><span
  m="1287490">And</span> <span m="1287740">so</span> <span
  m="1288730">now,</span> <span m="1288960">let's</span> <span
  m="1289450">move</span> <span m="1289660">away</span> <span
  m="1289840">from</span> <span m="1290010">pirates</span> <span
  m="1290930">and</span> <span m="1291190">go</span> <span
  m="1291440">into</span> <span m="1291640">the</span> <span
  m="1292610">cryptography</span> <span m="1293130">domain,</span> <span
  m="1293930">pure</span> <span m="1294260">mathematical</span> <span
  m="1294840">domain,</span> <span m="1295770">and</span> <span
  m="1296360">see</span> <span m="1296670">how</span> <span
  m="1297010">this</span> <span m="1297600">turns</span> <span
  m="1297970">into</span> <span m="1298240">what's</span> <span
  m="1298460">called</span> <span m="1298740">the</span> <span
  m="1298830">Diffie-Hellman</span> <span m="1299360">key</span> <span
  m="1299600">exchange,</span> <span m="1300810">which</span> <span
  m="1301080">is</span> <span m="1301250">a</span> <span m="1301810">key</span>
  <span m="1302040">exchange</span> <span m="1303130">algorithm</span> <span
  m="1303860">or</span> <span m="1303970">a</span> <span
  m="1304030">protocol</span> <span m="1305540">that</span> <span
  m="1307180">under</span> <span m="1307420">certain</span> <span
  m="1307650">conditions</span> <span m="1308720">give you</span> <span
  m="1309030">exactly</span> <span m="1309460">what</span> <span
  m="1309620">you</span> <span m="1309710">see</span> <span
  m="1309890">here.</span> <span m="1310590">It</span> <span
  m="1310700">gives</span> <span m="1310830">you a</span> <span
  m="1310940">secure</span> <span m="1311210">key</span> <span
  m="1311480">exchange.</span> <span m="1312420">And</span> <span
  m="1312840">there's</span> <span m="1313280">one</span> <span
  m="1313630">issue</span> <span m="1313980">associated</span> <span
  m="1314430">with</span> <span m="1314580">it,</span> <span
  m="1315410">and</span> <span m="1315510">that'll</span> <span
  m="1315690">be</span> <span m="1315820">kind</span> <span
  m="1315990">of</span> <span m="1316030">clear</span> <span
  m="1316670">once</span> <span m="1316920">we</span> <span
  m="1317030">write</span> <span m="1317190">it</span> <span
  m="1317290">out</span> <span m="1317460">here,</span> <span
  m="1318020">that</span> <span m="1318170">we'll</span> <span
  m="1318290">get</span> <span m="1318440">back</span> <span
  m="1318640">to.</span></p><p><span m="1319720">But</span> <span
  m="1320430">Diffie-Hellman</span> <span m="1321100">key</span> <span
  m="1321260">exchange</span> <span m="1321750">assumes</span> <span
  m="1322190">that</span> <span m="1322320">you</span> <span
  m="1322430">have</span> <span m="1322570">commutative</span> <span
  m="1323230">locks.</span> <span m="1324420">And</span> <span
  m="1327160">this</span> <span m="1327310">is</span> <span
  m="1327390">how</span> <span m="1327510">it</span> <span
  m="1327610">works.</span> <span m="1329930">You'll</span> <span
  m="1330100">see</span> <span m="1330320">what</span> <span
  m="1332430">commutes</span> <span m="1333590">when</span> <span
  m="1333800">I</span> <span m="1334270">give</span> <span
  m="1334550">you</span> <span m="1334720">the</span> <span
  m="1335510">equations</span> <span m="1336040">associated</span> <span
  m="1336540">with</span> <span m="1337260">Diffie-Hellman</span> <span
  m="1337800">key</span> <span m="1337950">exchange.</span> <span
  m="1338760">And</span> <span m="1339640">this</span> <span
  m="1339830">is</span> <span m="1339920">also</span> <span
  m="1343430">described</span> <span m="1343820">in the</span> <span
  m="1343900">'70s.</span></p><p><span m="1345100">So</span> <span
  m="1345290">what</span> <span m="1345430">we're</span> <span
  m="1345530">going</span> <span m="1345650">to</span> <span
  m="1345710">do</span> <span m="1345860">is</span> <span
  m="1346010">we're</span> <span m="1346080">going</span> <span
  m="1346190">to</span> <span m="1346260">work</span> <span
  m="1347690">in</span> <span m="1349110">a</span> <span
  m="1349200">finite</span> <span m="1349630">field</span> <span
  m="1351290">Fp*.</span> <span m="1353120">And</span> <span
  m="1353930">the</span> <span m="1354030">finite</span> <span
  m="1354330">field</span> <span m="1355140">means</span> <span
  m="1355880">that</span> <span m="1356300">we're</span> <span
  m="1356450">going</span> <span m="1356540">to</span> <span
  m="1356600">be</span> <span m="1356700">doing</span> <span
  m="1356970">mod</span> <span m="1357210">p,</span> <span
  m="1358360">where</span> <span m="1358950">p</span> <span
  m="1359150">is</span> <span m="1359320">prime.</span> <span
  m="1361820">And</span> <span m="1362410">the</span> <span
  m="1362500">star</span> <span m="1362980">means</span> <span
  m="1364050">we're</span> <span m="1364140">going</span> <span
  m="1364270">to</span> <span m="1364320">be</span> <span
  m="1364450">only</span> <span m="1364730">looking</span> <span
  m="1365060">at</span> <span m="1366300">invertible</span> <span
  m="1366850">elements</span> <span m="1367300">only.</span> <span
  m="1368930">So</span> <span m="1369130">we</span> <span
  m="1369250">drop</span> <span m="1369610">the</span> <span
  m="1369700">nonvertible</span> <span m="1370360">elements.</span></p><p><span
  m="1372690">These</span> <span m="1372850">things</span> <span
  m="1373040">aren't</span> <span m="1373230">particularly</span> <span
  m="1373750">important.</span> <span m="1377470">And</span> <span
  m="1377690">so</span> <span m="1378630">we'll</span> <span
  m="1378670">drop</span> <span m="1379000">0.</span> <span
  m="1379560">And</span> <span m="1379680">we'll</span> <span
  m="1379990">be</span> <span m="1380160">looking</span> <span
  m="1380490">at</span> <span m="1381080">1,</span> <span m="1381480">2,</span>
  <span m="1382340">to</span> <span m="1382500">p</span> <span
  m="1382620">minus</span> <span m="1382910">1.</span> <span
  m="1383480">So</span> <span m="1383630">all</span> <span
  m="1383790">the</span> <span m="1383880">numbers</span> <span m="1384210">that
  you</span> <span m="1384310">see</span> <span m="1384710">are</span> <span
  m="1385210">going</span> <span m="1385330">to</span> <span
  m="1385370">be</span> <span m="1385440">1</span> <span
  m="1385690">through</span> <span m="1385870">p</span> <span
  m="1386020">minus</span> <span m="1386290">1.</span></p><p><span
  m="1387690">Now,</span> <span m="1387920">what</span> <span
  m="1388160">is</span> <span m="1388950">the</span> <span
  m="1389710">analog</span> <span m="1391400">all</span> <span
  m="1391780">this</span> <span m="1393400">protocol</span> <span
  m="1394440">that</span> <span m="1394720">Alice</span> <span
  m="1395100">and</span> <span m="1395200">Bob,</span> <span
  m="1396120">in</span> <span m="1396280">our</span> <span
  m="1396380">pirate</span> <span m="1396860">puzzle,</span> <span
  m="1400120">operated</span> <span m="1400650">on</span> <span
  m="1401450">or</span> <span m="1402030">ran?</span> <span
  m="1403070">What</span> <span m="1403230">is</span> <span
  m="1403310">the</span> <span m="1403380">analog</span> <span
  m="1404480">in</span> <span m="1405990">the</span> <span
  m="1406120">mathematical</span> <span m="1406700">domain</span> <span
  m="1407070">or</span> <span m="1407120">in</span> <span m="1407240">the</span>
  <span m="1407320">finite</span> <span m="1407690">field</span> <span
  m="1407970">domain?</span> <span m="1409060">Well,</span> <span
  m="1409260">here's</span> <span m="1409480">what</span> <span
  m="1409600">happens.</span></p><p><span m="1411100">Alice</span> <span
  m="1414410">is</span> <span m="1415320">going</span> <span
  m="1415620">to</span> <span m="1416430">select</span> <span
  m="1418540">a</span> <span m="1418680">random</span> <span
  m="1419200">a.</span> <span m="1423128">And</span> <span
  m="1423620">we're</span> <span m="1423780">going</span> <span
  m="1423910">to</span> <span m="1423970">assume</span> <span
  m="1424250">the</span> <span m="1424360">g</span> <span m="1424730">is</span>
  <span m="1424850">public.</span> <span m="1425450">So</span> <span
  m="1425620">she</span> <span m="1425800">just</span> <span
  m="1425960">shouts</span> <span m="1426290">that</span> <span
  m="1426440">out</span> <span m="1427930">to--</span> <span
  m="1431760">Alice</span> <span m="1431880">can</span> <span
  m="1432050">see</span> <span m="1432440">Bob</span> <span
  m="1432710">from</span> <span m="1432890">her</span> <span
  m="1433020">house.</span></p><p><span m="1434950">So</span> <span
  m="1435150">she</span> <span m="1435320">shouts</span> <span
  m="1435685">out</span> <span m="1436050">g</span> <span m="1436170">and
  shouts</span> <span m="1436360">out</span> <span m="1436820">p.</span> <span
  m="1438120">They're</span> <span m="1438280">all</span> <span
  m="1438430">public.</span> <span m="1438860">She doesn't</span> <span
  m="1439130">care</span> <span m="1439450">if</span> <span
  m="1439620">the</span> <span m="1440600">pirates</span> <span
  m="1440970">can</span> <span m="1441100">hear</span> <span
  m="1441340">this.</span></p><p><span m="1442680">And</span> <span
  m="1443600">Alice</span> <span m="1444000">is</span> <span
  m="1444120">going</span> <span m="1444240">to</span> <span
  m="1444290">select</span> <span m="1444690">a,</span> <span
  m="1445190">which</span> <span m="1445320">is</span> <span
  m="1445440">random,</span> <span m="1446440">and</span> <span
  m="1446650">compute</span> <span m="1449690">g</span> <span m="1449960">of
  a.</span> <span m="1451810">And</span> <span m="1452170">this</span> <span
  m="1452310">is</span> <span m="1452480">in</span> <span m="1452640">the</span>
  <span m="1452960">finite</span> <span m="1453310">field,</span> <span
  m="1454250">capital</span> <span m="1454620">G.</span> <span
  m="1455470">So</span> <span m="1455610">you're going</span> <span
  m="1455780">to do</span> <span m="1455950">your</span> <span
  m="1456100">mods.</span> <span m="1457310">And</span> <span
  m="1457870">she's</span> <span m="1458090">just</span> <span
  m="1458210">going</span> <span m="1458310">to</span> <span
  m="1458370">send</span> <span m="1458700">over</span> <span
  m="1460000">g</span> <span m="1460210">of</span> <span m="1460340">a</span>
  <span m="1461930">over to</span> <span m="1462340">Bob.</span></p><p><span
  m="1463550">Now,</span> <span m="1463700">what</span> <span
  m="1463840">Bob</span> <span m="1464100">does</span> <span
  m="1464380">is</span> <span m="1464470">select</span> <span
  m="1464970">b</span> <span m="1467370">and</span> <span
  m="1469600">computes</span> <span m="1475720">g</span> <span
  m="1475940">raise</span> <span m="1476080">to</span> <span
  m="1476180">b</span> <span m="1477540">and</span> <span
  m="1477940">sends</span> <span m="1478250">that</span> <span
  m="1478460">over.</span> <span m="1480490">So</span> <span
  m="1481160">g</span> <span m="1481330">raised</span> <span m="1481560">to a
  is</span> <span m="1481830">being</span> <span m="1481990">sent</span> <span
  m="1482250">over.</span> <span m="1482750">g</span> <span
  m="1482950">raised</span> <span m="1483070">to</span> <span
  m="1483160">b</span> <span m="1483320">is</span> <span
  m="1483440">being</span> <span m="1483600">sent</span> <span
  m="1483860">over,</span> <span m="1484450">sent</span> <span
  m="1484710">over</span> <span m="1484920">to</span> <span
  m="1485080">Alice.</span> <span m="1485600">So Alice</span> <span
  m="1486060">gets</span> <span m="1486190">g raised</span> <span
  m="1486650">to</span> <span m="1486710">b.</span></p><p><span
  m="1489160">And</span> <span m="1489470">the</span> <span
  m="1489580">key</span> <span m="1489940">realization</span> <span
  m="1490540">here</span> <span m="1490870">is</span> <span
  m="1491040">that</span> <span m="1492160">Alice</span> <span
  m="1493880">can</span> <span m="1494190">compute</span> <span
  m="1497300">g</span> <span m="1497530">raised</span> <span
  m="1497810">to</span> <span m="1497890">b</span> <span
  m="1498580">raised</span> <span m="1498960">to</span> <span
  m="1499090">a,</span> <span m="1499310">because</span> <span
  m="1499550">she</span> <span m="1499740">knows</span> <span
  m="1500040">a.</span> <span m="1502880">This</span> <span m="1503310">is all
  going to</span> <span m="1503430">be</span> <span m="1503550">mod</span> <span
  m="1503820">p.</span> <span m="1505030">And</span> <span m="1505210">we're
  going to</span> <span m="1505420">call</span> <span m="1505610">that</span>
  <span m="1505820">K.</span> <span m="1507130">And</span> <span
  m="1507470">thanks</span> <span m="1507710">to</span> <span
  m="1507780">the</span> <span m="1507880">fact</span> <span
  m="1508200">that</span> <span m="1509470">exponentiation</span> <span
  m="1511170">commutes,</span> <span m="1512430">Bob</span> <span
  m="1514210">computes</span> <span m="1517005">g</span> <span
  m="1517270">raised</span> <span m="1517530">to</span> <span
  m="1518110">a</span> <span m="1519280">raised</span> <span
  m="1519670">to</span> <span m="1519760">b,</span> <span
  m="1520460">because</span> <span m="1520770">Bob</span> <span
  m="1520810">knows</span> <span m="1521020">b,</span> <span m="1522130">which
  is</span> <span m="1522240">also</span> <span m="1522560">exactly</span> <span
  m="1523020">K--</span> <span m="1525210">I</span> <span
  m="1525290">should</span> <span m="1525460">say</span> <span m="1525560">mod
  p</span> <span m="1528710">over</span> <span m="1528830">here.</span> <span
  m="1529050">Everything</span> <span m="1529340">is</span> <span
  m="1529440">mod p.</span></p><p><span m="1533430">So</span> <span
  m="1533810">that's</span> <span m="1533990">it.</span> <span
  m="1534920">That's</span> <span m="1535200">Diffie-Hellman</span> <span
  m="1535790">key</span> <span m="1535950">exchange.</span> <span
  m="1538040">You</span> <span m="1538420">have</span> <span
  m="1538620">now</span> <span m="1539080">created</span> <span
  m="1540180">a</span> <span m="1540260">shared</span> <span
  m="1540670">secret</span> <span m="1541690">based</span> <span
  m="1542080">on</span> <span m="1542260">the</span> <span
  m="1543490">commutativity</span> <span m="1544320">of</span> <span
  m="1544520">exponentiation.</span> <span m="1546110">And</span> <span
  m="1547450">the</span> <span m="1547540">part</span> <span
  m="1547830">that's</span> <span m="1548010">still</span> <span
  m="1548630">missing</span> <span m="1549100">here</span> <span
  m="1549840">with</span> <span m="1550000">respect</span> <span
  m="1550300">to</span> <span m="1550370">the</span> <span
  m="1550450">analogy</span> <span m="1551580">is</span> <span
  m="1552340">the</span> <span m="1552470">fact</span> <span
  m="1552930">that</span> <span m="1553680">g</span> <span m="1554000">of</span>
  <span m="1554160">a</span> <span m="1555032">is</span> <span
  m="1555470">essentially</span> <span m="1556280">the</span> <span
  m="1556420">locked</span> <span m="1556830">box.</span></p><p><span
  m="1557760">So</span> <span m="1558910">what</span> <span m="1559130">g
  of</span> <span m="1559290">a is</span> <span m="1559660">hiding</span> <span
  m="1560480">is</span> <span m="1560690">a.</span> <span
  m="1561690">Because</span> <span m="1562110">you</span> <span
  m="1562270">want</span> <span m="1562700">a</span> <span m="1562880">to</span>
  <span m="1562930">be</span> <span m="1563040">hidden</span> <span
  m="1563300">here</span> <span m="1563970">and</span> <span
  m="1564170">the</span> <span m="1564250">same</span> <span
  m="1564410">thing</span> <span m="1564540">with</span> <span
  m="1565130">g</span> <span m="1565290">of</span> <span m="1565380">b.</span>
  <span m="1565660">It</span> <span m="1565760">needs</span> <span
  m="1565930">to</span> <span m="1566010">hide</span> <span
  m="1566270">b.</span> <span m="1567080">So</span> <span m="1567360">the</span>
  <span m="1568180">problem</span> <span m="1568680">that</span> <span
  m="1568900">the</span> <span m="1570380">pirates</span> <span
  m="1571020">had</span> <span m="1571410">was</span> <span
  m="1571590">they</span> <span m="1571700">couldn't</span> <span
  m="1571900">open</span> <span m="1572190">up</span> <span
  m="1572980">the</span> <span m="1573120">box.</span></p><p><span
  m="1574420">The</span> <span m="1574510">problem</span> <span
  m="1574850">that</span> <span m="1575020">the</span> <span
  m="1575520">adversary,</span> <span m="1576240">let's</span> <span
  m="1576430">call</span> <span m="1576580">them</span> <span
  m="1577040">mal,</span> <span m="1577890">has</span> <span
  m="1579170">is</span> <span m="1579450">that</span> <span
  m="1579880">he</span> <span m="1580720">has</span> <span m="1580990">to</span>
  <span m="1581070">invert</span> <span m="1582520">g</span> <span
  m="1582820">of</span> <span m="1582960">a</span> <span m="1584620">in</span>
  <span m="1584900">order to</span> <span m="1585280">discover</span> <span
  m="1585860">a.</span> <span m="1586630">And</span> <span m="1587680">in</span>
  <span m="1587950">this</span> <span m="1588570">particular</span> <span
  m="1589380">finite</span> <span m="1589820">field,</span> <span
  m="1590870">and</span> <span m="1592830">many</span> <span
  m="1593010">such</span> <span m="1593200">finite</span> <span
  m="1593480">fields,</span> <span m="1594280">you</span> <span
  m="1594410">can</span> <span m="1594530">think</span> <span
  m="1594700">of</span> <span m="1594800">this</span> <span
  m="1594990">as</span> <span m="1595120">being</span> <span
  m="1595330">what's</span> <span m="1595510">called</span> <span
  m="1595680">a</span> <span m="1595730">discrete</span> <span
  m="1596300">logarithm</span> <span m="1596830">problem.</span> <span
  m="1597960">So</span> <span m="1598070">if you</span> <span m="1598190">don't
  know</span> <span m="1598540">how to</span> <span m="1598590">computer</span>
  <span m="1598870">logarithms</span> <span m="1599790">in</span> <span
  m="1599900">that</span> <span m="1599980">continuous</span> <span
  m="1600380">domain.</span> <span m="1601100">And</span> <span
  m="1601260">there's</span> <span m="1601430">tables.</span> <span
  m="1601890">And</span> <span m="1601990">it's</span> <span
  m="1602110">pretty</span> <span m="1602280">easy</span> <span
  m="1602500">to</span> <span m="1602610">do.</span></p><p><span
  m="1603720">But</span> <span m="1603960">this</span> <span
  m="1604140">is</span> <span m="1604520">what's</span> <span
  m="1604700">called</span> <span m="1604860">a</span> <span
  m="1604910">discrete</span> <span m="1605320">logarithm</span> <span
  m="1605740">problem,</span> <span m="1606550">because</span> <span
  m="1606820">we're</span> <span m="1606970">in</span> <span
  m="1607060">a</span> <span m="1607110">finite</span> <span
  m="1607450">field.</span> <span m="1608400">And</span> <span
  m="1608490">we</span> <span m="1608580">obviously</span> <span
  m="1608850">want</span> <span m="1609060">integers.</span> <span
  m="1609405">a</span> <span m="1609750">is</span> <span m="1610000">an</span>
  <span m="1610080">integer.</span> <span m="1610980">So</span> <span
  m="1611050">we</span> <span m="1611140">need</span> <span
  m="1611300">to</span> <span m="1611360">discover</span> <span
  m="1612010">what</span> <span m="1612320">does</span> <span
  m="1612570">that</span> <span m="1612730">integer</span> <span
  m="1613180">is.</span> <span m="1614800">Because</span> <span
  m="1615270">we're</span> <span m="1615360">doing</span> <span
  m="1615570">the</span> <span m="1615670">mod p,</span> <span
  m="1616220">et</span> <span m="1616330">cetera,</span> <span
  m="1616800">and</span> <span m="1617100">p is</span> <span
  m="1617370">typically</span> <span m="1617740">on</span> <span
  m="1617910">a</span> <span m="1617980">large</span> <span
  m="1618300">number,</span> <span m="1619490">it's</span> <span
  m="1619690">actually</span> <span m="1620340">a</span> <span
  m="1620430">hard</span> <span m="1620820">problem</span> <span
  m="1621230">computationally</span> <span m="1622650">to</span> <span
  m="1623840">do</span> <span m="1624020">a</span> <span
  m="1624100">discrete</span> <span m="1624660">log.</span></p><p><span
  m="1625520">So</span> <span m="1625850">when</span> <span
  m="1625970">you</span> <span m="1626080">see</span> <span m="1626350">g</span>
  <span m="1626570">of</span> <span m="1626710">a,</span> <span
  m="1628600">you</span> <span m="1628730">know</span> <span
  m="1628900">g,</span> <span m="1629360">you know p,</span> <span
  m="1630820">but</span> <span m="1631130">trying</span> <span
  m="1631360">to</span> <span m="1631840">figure</span> <span
  m="1632200">out</span> <span m="1632920">what</span> <span
  m="1633860">produced</span> <span m="1634250">that</span> <span
  m="1634420">g</span> <span m="1634610">of</span> <span m="1634760">a</span>
  <span m="1635710">is</span> <span m="1635870">a</span> <span
  m="1635920">difficult</span> <span m="1636250">problem.</span> <span
  m="1636920">And</span> <span m="1637010">people</span> <span
  m="1637200">have</span> <span m="1637320">looked</span> <span
  m="1637490">at</span> <span m="1637570">this</span> <span
  m="1637740">for</span> <span m="1637850">30,</span> <span
  m="1638190">40</span> <span m="1638300">years</span> <span
  m="1639010">and</span> <span m="1639140">there's</span> <span
  m="1639270">not</span> <span m="1640940">great</span> <span
  m="1641160">algorithms</span> <span m="1641540">to</span> <span
  m="1641700">solve</span> <span m="1641930">this</span> <span
  m="1642050">problem,</span> <span m="1642370">certainly</span> <span
  m="1642620">not</span> <span m="1642920">anything</span> <span
  m="1643230">that's</span> <span m="1643720">polynomial</span> <span
  m="1644190">time</span> <span m="1644430">solvable.</span> <span
  m="1645440">They're</span> <span m="1645750">all</span> <span
  m="1646000">kind</span> <span m="1646120">of</span> <span
  m="1646180">subexponential.</span> <span m="1647550">And</span> <span
  m="1647890">you</span> <span m="1647980">can</span> <span
  m="1648130">make</span> <span m="1648530">the</span> <span
  m="1648700">numbers</span> <span m="1649070">large</span> <span
  m="1649380">enough</span> <span m="1650120">such</span> <span
  m="1650430">that</span> <span m="1650920">g</span> <span m="1651150">of</span>
  <span m="1651250">a</span> <span m="1652070">is</span> <span
  m="1652290">secure</span> <span m="1653120">in</span> <span
  m="1653260">the</span> <span m="1653340">sense</span> <span
  m="1653600">that</span> <span m="1653730">it</span> <span
  m="1653850">doesn't</span> <span m="1654140">give</span> <span
  m="1654300">away</span> <span m="1654990">what a</span> <span
  m="1655230">is.</span></p><p><span m="1657270">So</span> <span
  m="1657390">that's</span> <span m="1657710">the</span> <span
  m="1658470">insight</span> <span m="1658930">here</span> <span
  m="1659700">that</span> <span m="1660970">Diffie</span> <span
  m="1661160">and</span> <span m="1661700">Hellman</span> <span
  m="1662010">had,</span> <span m="1663260">which</span> <span
  m="1663430">comes</span> <span m="1663680">down</span> <span
  m="1663980">to</span> <span m="1666700">the</span> <span
  m="1666760">discrete</span> <span m="1669220">log</span> <span
  m="1670490">problem</span> <span m="1674160">is</span> <span
  m="1674370">hard.</span> <span m="1675020">And</span> <span
  m="1675240">what</span> <span m="1675470">this</span> <span
  m="1675610">simply</span> <span m="1675910">means</span> <span
  m="1676260">is</span> <span m="1677070">given</span> <span
  m="1678860">g</span> <span m="1679120">of</span> <span m="1679240">a,</span>
  <span m="1679910">the</span> <span m="1680240">discrete</span> <span
  m="1680640">log</span> <span m="1680790">problem</span> <span
  m="1681290">is</span> <span m="1682080">compute</span> <span
  m="1682460">a.</span> <span m="1683160">And</span> <span m="1683510">the
  same</span> <span m="1683795">thing</span> <span m="1684080">for</span> <span
  m="1684140">b,</span> <span m="1684310">of</span> <span
  m="1684410">course.</span></p><p><span m="1685950">There's</span> <span
  m="1686180">one</span> <span m="1686380">other</span> <span
  m="1686560">thing</span> <span m="1686870">that</span> <span
  m="1687650">you</span> <span m="1687870">want</span> <span
  m="1689300">to</span> <span m="1689410">say</span> <span m="1689700">to</span>
  <span m="1689810">be</span> <span m="1689960">precise</span> <span
  m="1690680">to sort</span> <span m="1690900">of</span> <span
  m="1691220">just</span> <span m="1691400">cover</span> <span
  m="1691720">the</span> <span m="1691800">spectrum</span> <span
  m="1692290">with</span> <span m="1692420">respect</span> <span
  m="1692790">to</span> <span m="1692910">how</span> <span
  m="1693720">this</span> <span m="1694400">could</span> <span
  m="1694540">break.</span> <span m="1695490">And</span> <span
  m="1695960">that</span> <span m="1696360">is</span> <span
  m="1697060">what's</span> <span m="1697340">called</span> <span
  m="1697540">the</span> <span m="1697620">Diffie-Hellman</span> <span
  m="1698290">problem,</span> <span m="1699340">for</span> <span
  m="1699800">want</span> <span m="1700020">of</span> <span m="1700110">a</span>
  <span m="1700160">better</span> <span m="1701290">names</span> <span
  m="1701650">and</span> <span m="1702070">since these</span> <span
  m="1702480">are</span> <span m="1702520">the</span> <span
  m="1703050">folks</span> <span m="1703350">who</span> <span
  m="1703470">first</span> <span m="1703750">came</span> <span
  m="1703940">up</span> <span m="1704090">with</span> <span
  m="1704250">it.</span> <span m="1705770">And</span> <span
  m="1705960">the</span> <span m="1706100">Diffie-Hellman</span> <span
  m="1706630">problem</span> <span m="1707480">is</span> <span
  m="1707640">simply</span> <span m="1707960">that</span> <span
  m="1708190">given</span> <span m="1709860">g</span> <span
  m="1710120">of</span> <span m="1710270">a</span> <span m="1711082">and</span>
  <span m="1711490">g</span> <span m="1711680">of</span> <span
  m="1711770">b,</span> <span m="1712140">which</span> <span
  m="1712290">is</span> <span m="1712400">what</span> <span
  m="1712930">the</span> <span m="1713060">pirates</span> <span
  m="1713440">see</span> <span m="1713680">and</span> <span
  m="1713760">what</span> <span m="1714120">the</span> <span
  m="1714415">adversary mal</span> <span m="1714710">sees,</span> <span
  m="1717010">we</span> <span m="1717140">should</span> <span
  m="1717350">not</span> <span m="1717610">be</span> <span
  m="1717760">able</span> <span m="1717940">to</span> <span
  m="1718020">compute</span> <span m="1719280">g</span> <span
  m="1719610">of</span> <span m="1721620">a</span> <span
  m="1721760">times</span> <span m="1722060">b,</span> <span
  m="1723240">which</span> <span m="1723400">is</span> <span
  m="1723720">exactly</span> <span m="1724090">what</span> <span
  m="1724210">we</span> <span m="1724330">get</span> <span
  m="1724450">here.</span></p><p><span m="1724790">g</span> <span
  m="1725050">of</span> <span m="1725170">a</span> <span
  m="1725410">raised</span> <span m="1725670">to</span> <span
  m="1725740">b</span> <span m="1725980">is</span> <span m="1726240">g</span>
  <span m="1726400">of</span> <span m="1726500">a</span> <span
  m="1726610">times</span> <span m="1726920">b.</span> <span
  m="1727600">So</span> <span m="1728180">given</span> <span
  m="1728420">those</span> <span m="1728600">two</span> <span
  m="1728740">things,</span> <span m="1729380">if</span> <span
  m="1729510">there's</span> <span m="1729680">a</span> <span
  m="1729740">way</span> <span m="1729980">of</span> <span
  m="1730190">computing</span> <span m="1731040">g</span> <span
  m="1731240">of</span> <span m="1731340">a</span> <span
  m="1731460">times</span> <span m="1731790">b,</span> <span
  m="1732990">even</span> <span m="1733250">though</span> <span
  m="1733440">you</span> <span m="1734080">potentially</span> <span
  m="1734550">haven't</span> <span m="1734840">discovered</span> <span
  m="1735800">a and</span> <span m="1736130">b</span> <span
  m="1736610">precisely,</span> <span m="1737720">g</span> <span
  m="1737940">of</span> <span m="1738030">a</span> <span
  m="1738160">times</span> <span m="1738520">b</span> <span
  m="1739340">is</span> <span m="1739470">just</span> <span
  m="1739870">the</span> <span m="1739970">secret</span> <span
  m="1740260">key</span> <span m="1740460">that</span> <span
  m="1740610">Alice</span> <span m="1740710">and</span> <span
  m="1740980">Bob</span> <span m="1741210">exchanged.</span> <span
  m="1742060">So</span> <span m="1742570">you're</span> <span
  m="1742770">host.</span> <span m="1743620">Alice</span> <span m="1743930">and
  Bob are</span> <span m="1744190">host</span> <span m="1744800">if</span> <span
  m="1745680">mal</span> <span m="1746180">can do</span> <span
  m="1746290">this.</span></p><p><span m="1747240">So</span> <span
  m="1747410">there's</span> <span m="1747750">two</span> <span
  m="1748000">things</span> <span m="1748280">going</span> <span
  m="1748470">on</span> <span m="1748630">here.</span> <span
  m="1749410">You</span> <span m="1749490">want</span> <span
  m="1749670">the</span> <span m="1749750">Diffie-Hellman</span> <span
  m="1750280">problem</span> <span m="1750660">to</span> <span
  m="1750730">be</span> <span m="1750850">hard.</span> <span
  m="1752540">And</span> <span m="1752910">you</span> <span
  m="1753060">want</span> <span m="1753650">the</span> <span
  m="1753780">discrete</span> <span m="1754140">log</span> <span
  m="1754400">problem</span> <span m="1755400">to</span> <span
  m="1755490">be</span> <span m="1755600">hard.</span> <span
  m="1756500">OK</span> <span m="1757650">So</span> <span
  m="1757840">generally,</span> <span m="1758250">this</span> <span
  m="1758400">is</span> <span m="1758510">how</span> <span
  m="1758680">cryptography</span> <span m="1759180">works.</span></p><p><span
  m="1760500">You</span> <span m="1761360">set</span> <span
  m="1761540">up</span> <span m="1761660">protocols.</span> <span
  m="1762880">And</span> <span m="1763680">there's</span> <span
  m="1763870">some</span> <span m="1764090">information</span> <span
  m="1764630">that's</span> <span m="1764860">bound</span> <span
  m="1765180">to</span> <span m="1765240">be</span> <span
  m="1765370">exposed.</span> <span m="1766330">You</span> <span
  m="1766480">want</span> <span m="1766660">this</span> <span
  m="1766800">information</span> <span m="1768310">to</span> <span
  m="1768420">be</span> <span m="1769200">hard</span> <span
  m="1769570">to</span> <span m="1769630">reverse</span> <span
  m="1770280">to</span> <span m="1770400">get</span> <span
  m="1770640">the</span> <span m="1770790">crucial</span> <span
  m="1771170">information.</span> <span m="1772190">That</span> <span
  m="1772400">requires</span> <span m="1772930">the</span> <span
  m="1773010">computational</span> <span m="1773620">hardness</span> <span
  m="1774130">assumption</span> <span m="1774890">like</span> <span
  m="1775050">the</span> <span m="1775140">two</span> <span
  m="1775310">that</span> <span m="1775460">we've</span> <span
  m="1775620">made</span> <span m="1775820">here.</span> <span
  m="1776760">And</span> <span m="1777350">then</span> <span
  m="1777510">you're</span> <span m="1777620">off</span> <span
  m="1777740">and</span> <span m="1777840">running.</span></p><p><span
  m="1779100">Your</span> <span m="1779380">system</span> <span
  m="1779780">will</span> <span m="1779930">break</span> <span
  m="1780680">if</span> <span m="1780900">your</span> <span
  m="1780980">computational</span> <span m="1781520">hardness</span> <span
  m="1782060">assumptions</span> <span m="1782850">are</span> <span
  m="1783040">incorrect.</span> <span m="1784010">And</span> <span
  m="1784180">they</span> <span m="1784260">may</span> <span
  m="1784420">be</span> <span m="1784550">correct</span> <span
  m="1785100">for</span> <span m="1785490">a</span> <span
  m="1785520">particular</span> <span m="1785890">time,</span> <span
  m="1786500">for</span> <span m="1786660">example,</span> <span
  m="1787080">the</span> <span m="1787150">1970s</span> <span
  m="1788310">for</span> <span m="1788500">particular</span> <span
  m="1788980">parameters.</span> <span m="1789910">But</span> <span
  m="1790110">they</span> <span m="1790200">may</span> <span
  m="1790320">end</span> <span m="1790590">up</span> <span
  m="1791370">being</span> <span m="1791880">incorrect</span> <span
  m="1792370">assumptions,</span> <span m="1793120">at</span> <span
  m="1793240">least</span> <span m="1793460">for</span> <span
  m="1793550">those</span> <span m="1793790">parameters,</span> <span
  m="1795380">at</span> <span m="1795730">a</span> <span
  m="1796080">later</span> <span m="1796330">point</span> <span
  m="1796550">of</span> <span m="1796650">time,</span> <span
  m="1797180">simply</span> <span m="1797460">because</span> <span
  m="1798540">computers</span> <span m="1798930">got</span> <span
  m="1799090">faster.</span></p><p><span m="1800160">It's</span> <span
  m="1800340">like</span> <span m="1800490">2 raised to</span> <span
  m="1800840">40</span> <span m="1801160">was</span> <span
  m="1801290">this</span> <span m="1801450">huge</span> <span
  m="1801670">number</span> <span m="1802800">when</span> <span
  m="1803110">I</span> <span m="1803150">was</span> <span
  m="1803260">your</span> <span m="1803450">age.</span> <span
  m="1804320">Now,</span> <span m="1804470">it's</span> <span
  m="1804610">like</span> <span m="1804750">nothing.</span> <span
  m="1805840">So</span> <span m="1806520">that's</span> <span
  m="1806840">basically</span> <span m="1807320">part</span> <span
  m="1807520">of</span> <span m="1807580">the</span> <span
  m="1807650">game.</span> <span m="1808350">But</span> <span
  m="1808910">the</span> <span m="1809000">good</span> <span
  m="1809210">systems</span> <span m="1810080">are</span> <span
  m="1810220">those</span> <span m="1810600">that</span> <span
  m="1810790">scale</span> <span m="1811700">where</span> <span
  m="1812050">you</span> <span m="1812210">increase</span> <span
  m="1812670">the</span> <span m="1812760">parameter</span> <span
  m="1813260">size</span> <span m="1814250">and</span> <span
  m="1815270">the</span> <span m="1815390">system</span> <span
  m="1815820">and</span> <span m="1815890">the</span> <span
  m="1815960">protocol</span> <span m="1816470">stays</span> <span
  m="1816800">the</span> <span m="1816900">same.</span> <span
  m="1817950">And</span> <span m="1818150">so</span> <span
  m="1818350">you</span> <span m="1818510">just</span> <span
  m="1818690">increase</span> <span m="1820030">p,</span> <span
  m="1820300">for</span> <span m="1820420">example,</span> <span
  m="1821650">in</span> <span m="1821730">this</span> <span
  m="1821920">case.</span> <span m="1822510">And</span> <span
  m="1822680">the</span> <span m="1822740">discrete</span> <span
  m="1823070">long</span> <span m="1823300">problem</span> <span
  m="1823940">is</span> <span m="1824070">still</span> <span
  m="1824300">hard</span> <span m="1824660">for</span> <span
  m="1824790">modern</span> <span m="1825100">computers.</span></p><p><span
  m="1826400">So</span> <span m="1826510">those</span> <span
  m="1826760">are</span> <span m="1826790">the</span> <span
  m="1826910">good</span> <span m="1827470">protocols</span> <span
  m="1828000">and</span> <span m="1828110">the</span> <span
  m="1828190">good</span> <span m="1828400">cryptosystems</span> <span
  m="1829110">that</span> <span m="1829600">stand</span> <span
  m="1829930">the</span> <span m="1830000">test</span> <span
  m="1830240">of</span> <span m="1830350">time,</span> <span
  m="1831010">not</span> <span m="1831390">necessarily</span> <span
  m="1831950">the</span> <span m="1832050">ones</span> <span
  m="1832920">that</span> <span m="1834350">have</span> <span
  m="1834810">exactly</span> <span m="1835510">particular</span> <span
  m="1835810">parameters.</span> <span m="1836850">That's</span> <span
  m="1836990">hard</span> <span m="1837240">to</span> <span
  m="1837310">do.</span> <span m="1837610">Because</span> <span
  m="1838470">as</span> <span m="1838660">I</span> <span
  m="1838700">said,</span> <span m="1839030">Moore's</span> <span
  m="1839290">law</span> <span m="1839920">and</span> <span
  m="1840270">computers</span> <span m="1840650">have</span> <span
  m="1840730">been</span> <span m="1840860">getting</span> <span
  m="1841800">really</span> <span m="1841960">exponentially</span> <span
  m="1842530">faster.</span> <span m="1843740">All</span> <span
  m="1843820">right.</span></p><p><span m="1845830">So</span> <span
  m="1846020">there's</span> <span m="1846780">one</span> <span
  m="1847640">main</span> <span m="1847980">problem</span> <span
  m="1849090">with</span> <span m="1849740">the</span> <span
  m="1849820">Diffie-Hellman</span> <span m="1850680">protocol</span> <span
  m="1851350">and</span> <span m="1851520">the</span> <span
  m="1851970">solution</span> <span m="1852450">to</span> <span
  m="1852550">our</span> <span m="1852660">pirate</span> <span
  m="1853030">puzzle.</span> <span m="1854020">And</span> <span
  m="1854160">so</span> <span m="1854610">can</span> <span
  m="1854730">someone</span> <span m="1854970">tell</span> <span
  m="1855170">me--</span> <span m="1856130">and</span> <span
  m="1856410">it</span> <span m="1856590">could</span> <span
  m="1856720">be</span> <span m="1857130">just</span> <span
  m="1857360">for</span> <span m="1857470">the</span> <span
  m="1857590">sake</span> <span m="1857820">of</span> <span
  m="1857910">the</span> <span m="1858000">Diffie-Hellman</span> <span
  m="1858520">problem</span> <span m="1858870">or just</span> <span
  m="1859250">in</span> <span m="1859300">the</span> <span
  m="1859390">context</span> <span m="1859840">of</span> <span
  m="1859930">the</span> <span m="1860010">Diffie-Hellman</span> <span
  m="1860490">problem,</span> <span m="1861130">but</span> <span
  m="1861260">also</span> <span m="1861500">in</span> <span
  m="1861640">the</span> <span m="1862150">context</span> <span
  m="1862610">of</span> <span m="1862730">the</span> <span
  m="1863000">pirate</span> <span m="1863350">puzzle--</span> <span
  m="1864450">what</span> <span m="1864720">assumption</span> <span
  m="1865290">are</span> <span m="1865590">we making</span> <span
  m="1865810">here</span> <span m="1866120">that's</span> <span
  m="1866450">as</span> <span m="1866670">yet</span> <span
  m="1866960">unstated</span> <span m="1868690">with</span> <span
  m="1868860">respect</span> <span m="1869340">to</span> <span
  m="1870160">this</span> <span m="1870800">secure</span> <span
  m="1871260">key</span> <span m="1871460">exchange</span> <span
  m="1871920">being</span> <span m="1872130">actually</span> <span
  m="1872480">secure?</span> <span m="1874560">Someone.</span> <span
  m="1876080">Yeah.</span></p><p><span m="1877556">AUDIENCE: If I</span> <span
  m="1878049">were to</span> <span m="1878542">intercept</span> <span
  m="1879035">a</span> <span m="1879528">message</span> <span
  m="1880021">from</span> <span m="1880514">[INAUDIBLE]</span> <span
  m="1881500">something</span> <span m="1881993">of their own</span> <span
  m="1882486">back?</span></p><p><span m="1882990">SRINIVAS DEVADAS: What</span>
  <span m="1883150">does</span> <span m="1883230">that</span> <span
  m="1883380">mean?</span> <span m="1885060">The</span> <span
  m="1885150">pirates</span> <span m="1885425">see</span> <span
  m="1885700">a</span> <span m="1885760">locked</span> <span
  m="1886100">box.</span> <span m="1886820">So</span> <span
  m="1886950">the</span> <span m="1887050">first</span> <span
  m="1887380">step</span> <span m="1888030">of</span> <span
  m="1888160">the</span> <span m="1888240">protocol,</span> <span
  m="1889170">Alice</span> <span m="1889650">is</span> <span
  m="1889850">sending</span> <span m="1890350">a</span> <span
  m="1890390">message</span> <span m="1890840">inside</span> <span
  m="1891580">a</span> <span m="1891700">locked</span> <span
  m="1892085">box</span> <span m="1892470">with</span> <span
  m="1892620">a</span> <span m="1892670">single</span> <span
  m="1893140">lock</span> <span m="1893420">in</span> <span
  m="1893510">it.</span></p><p><span m="1896520">You're</span> <span
  m="1896790">kind</span> <span m="1896980">of</span> <span
  m="1897070">on</span> <span m="1897170">the</span> <span
  m="1897240">right</span> <span m="1897460">track.</span> <span
  m="1898120">And</span> <span m="1898430">what</span> <span
  m="1898640">could</span> <span m="1898760">the</span> <span
  m="1898860">pirates</span> <span m="1899380">do</span> <span
  m="1900390">in</span> <span m="1900600">order</span> <span
  m="1900810">to</span> <span m="1901050">break</span> <span
  m="1901560">this</span> <span m="1901750">protocol?</span> <span
  m="1903340">We've</span> <span m="1903620">kind</span> <span
  m="1903860">of</span> <span m="1903920">made</span> <span
  m="1904110">an</span> <span m="1904200">assumption</span> <span
  m="1904690">here.</span> <span m="1905250">And</span> <span
  m="1905600">I</span> <span m="1905620">might</span> <span
  m="1905830">have</span> <span m="1905910">said</span> <span
  m="1906150">it</span> <span m="1906330">explicitly.</span> <span
  m="1907960">Yeah,</span> <span m="1908180">go</span> <span
  m="1908280">ahead.</span></p><p><span m="1908580">AUDIENCE: [INAUDIBLE]</span>
  <span m="1909022">throw the</span> <span m="1909464">box
  away.</span></p><p><span m="1910350">SRINIVAS DEVADAS: They</span> <span
  m="1910560">could just</span> <span m="1910750">throw the</span> <span
  m="1910930">box</span> <span m="1911090">away.</span> <span
  m="1911230">But</span> <span m="1911300">that</span> <span
  m="1911430">doesn't</span> <span m="1911740">break</span> <span
  m="1911950">the</span> <span m="1912030">security</span> <span
  m="1912470">of</span> <span m="1912530">the</span> <span
  m="1912580">protocol.</span> <span m="1913300">That</span> <span
  m="1913450">breaks</span> <span m="1913740">the</span> <span
  m="1913830">functionality</span> <span m="1914450">of</span> <span
  m="1914530">the</span> <span m="1914580">protocol,</span> <span
  m="1915510">right?</span> <span m="1916600">Yeah,</span> <span
  m="1916800">go</span> <span m="1916900">ahead.</span></p><p><span
  m="1917190">AUDIENCE: Put their</span> <span m="1917585">old lock</span> <span
  m="1917980">on</span> <span m="1918375">[INAUDIBLE].</span></p><p><span
  m="1918770">SRINIVAS DEVADAS: Ah,</span> <span m="1919240">that's</span> <span
  m="1919430">exactly</span> <span m="1919830">right,</span> <span
  m="1920080">put</span> <span m="1920260">their</span> <span
  m="1920450">own</span> <span m="1920680">lock</span> <span
  m="1920980">on</span> <span m="1921170">it.</span> <span
  m="1921680">You</span> <span m="1921780">know,</span> <span
  m="1922490">if</span> <span m="1922690">they</span> <span
  m="1922830">had</span> <span m="1923050">locks--</span> <span
  m="1923550">so</span> <span m="1923590">these</span> <span
  m="1923750">pirates</span> <span m="1924330">don't</span> <span
  m="1924550">have</span> <span m="1924690">locks,</span> <span
  m="1925220">right?</span> <span m="1925550">We're making</span> <span
  m="1925800">that</span> <span m="1925960">assumption.</span></p><p><span
  m="1926700">If they</span> <span m="1926900">had</span> <span
  m="1927130">their</span> <span m="1927290">own</span> <span
  m="1927450">lock</span> <span m="1928060">with</span> <span
  m="1928500">a</span> <span m="1928570">key,</span> <span m="1929330">if</span>
  <span m="1929410">they</span> <span m="1929500">just</span> <span
  m="1929700">had</span> <span m="1929800">a</span> <span
  m="1929860">lock</span> <span m="1930250">that</span> <span
  m="1930430">locks</span> <span m="1930940">and they</span> <span
  m="1931040">didn't</span> <span m="1931240">have</span> <span
  m="1931380">the</span> <span m="1931460">key</span> <span
  m="1931660">for</span> <span m="1932300">it,</span> <span m="1932520">they
  will</span> <span m="1932660">wouldn't</span> <span m="1932780">be</span>
  <span m="1932930">able</span> <span m="1933080">to</span> <span
  m="1933130">break</span> <span m="1933390">the</span> <span
  m="1933480">security</span> <span m="1933890">of</span> <span
  m="1933970">the</span> <span m="1934020">protocol.</span> <span
  m="1935140">But</span> <span m="1935230">if</span> <span
  m="1935320">they</span> <span m="1935430">had</span> <span
  m="1935640">a</span> <span m="1935700">lock</span> <span
  m="1936430">and</span> <span m="1936650">a</span> <span m="1936690">key</span>
  <span m="1936990">for</span> <span m="1937110">that</span> <span
  m="1938150">lock,</span> <span m="1938910">then</span> <span
  m="1939320">they</span> <span m="1939540">can</span> <span
  m="1939670">pretend</span> <span m="1940690">to have</span> <span
  m="1940840">delivered</span> <span m="1941340">this</span> <span
  m="1941580">to</span> <span m="1941620">Bob.</span> <span
  m="1942350">And</span> <span m="1942670">there's</span> <span
  m="1942890">no</span> <span m="1943100">authenticity</span> <span
  m="1943820">here</span> <span m="1944190">with</span> <span
  m="1944320">respect</span> <span m="1944600">to</span> <span
  m="1944680">Alice</span> <span m="1945040">doesn't</span> <span
  m="1945330">quite</span> <span m="1945640">know</span> <span
  m="1945910">whether</span> <span m="1946130">she's</span> <span
  m="1946320">communicating</span> <span m="1946820">with</span> <span
  m="1946920">Bob</span> <span m="1947220">or</span> <span
  m="1947330">not.</span></p><p><span m="1947860">She's</span> <span
  m="1948120">at</span> <span m="1948210">the</span> <span
  m="1948280">mercy</span> <span m="1948590">of</span> <span
  m="1948650">the</span> <span m="1948740">pirates</span> <span
  m="1949470">to</span> <span m="1949620">deliver</span> <span
  m="1949960">these</span> <span m="1950200">boxes.</span> <span
  m="1951640">So</span> <span m="1952340">if</span> <span m="1952460">the</span>
  <span m="1952560">pirates</span> <span m="1954730">had</span> <span
  m="1954950">a</span> <span m="1955020">lock</span> <span
  m="1955910">and</span> <span m="1956160">the</span> <span m="1956230">key for
  the</span> <span m="1956610">lock,</span> <span m="1957480">then</span> <span
  m="1957880">we're</span> <span m="1958520">in</span> <span
  m="1958700">a</span> <span m="1958760">situation</span> <span
  m="1959310">where</span> <span m="1960290">Alice</span> <span
  m="1961000">may</span> <span m="1961210">have</span> <span
  m="1961340">exchanged</span> <span m="1961760">the</span> <span
  m="1961870">key</span> <span m="1962390">with</span> <span
  m="1962500">the</span> <span m="1962570">pirates.</span> <span
  m="1964370">And</span> <span m="1964580">she</span> <span
  m="1964730">thinks</span> <span m="1964980">she's</span> <span
  m="1965190">exchanged</span> <span m="1965460">it</span> <span
  m="1965590">with Bob.</span> <span m="1966520">And</span> <span
  m="1967800">she's,</span> <span m="1968040">in</span> <span
  m="1968140">fact,</span> <span m="1968490">communicating</span> <span
  m="1968820">with</span> <span m="1968920">the</span> <span
  m="1968990">pirates.</span></p><p><span m="1970100">So</span> <span
  m="1970370">there's</span> <span m="1970530">a</span> <span m="1971000">man in
  the</span> <span m="1971070">middle</span> <span m="1971390">attack,</span>
  <span m="1981340">which</span> <span m="1981540">corresponds</span> <span
  m="1982020">to</span> <span m="1982120">the</span> <span
  m="1982250">pirates</span> <span m="1984880">having</span> <span
  m="1988000">their</span> <span m="1988280">own</span> <span
  m="1989660">locks</span> <span m="1990190">and</span> <span
  m="1990380">keys.</span> <span m="1991240">And</span> <span
  m="1991560">it's</span> <span m="1991680">even</span> <span
  m="1991920">more</span> <span m="1992130">trivial</span> <span
  m="1993470">in</span> <span m="1993650">the</span> <span
  m="1993730">case</span> <span m="1993990">of</span> <span
  m="1994140">our</span> <span m="1994310">picture</span> <span
  m="1994660">here.</span> <span m="1995500">Because</span> <span
  m="1996150">assuming</span> <span m="1996530">the</span> <span
  m="1996620">pirates</span> <span m="1996950">know</span> <span
  m="1997080">mathematics,</span> <span m="1998460">they</span> <span
  m="1998890">can</span> <span m="1999160">generate</span> <span
  m="1999560">a</span> <span m="1999630">random</span> <span
  m="1999960">number--</span> <span m="2001110">and</span> <span
  m="2001630">the</span> <span m="2001760">number</span> <span
  m="2002020">could</span> <span m="2002190">be</span> <span
  m="2002510">c,</span> <span m="2003050">for</span> <span
  m="2003090">example--</span> <span m="2004280">and</span> <span
  m="2004700">just</span> <span m="2004850">send</span> <span
  m="2005080">back</span> <span m="2005360">g</span> <span
  m="2005430">raised</span> <span m="2005770">to</span> <span
  m="2005880">c.</span></p><p><span m="2007020">And</span> <span
  m="2007790">for</span> <span m="2007980">all</span> <span m="2008130">you
  know,</span> <span m="2008606">they</span> <span m="2009560">could</span>
  <span m="2009700">actually</span> <span m="2010170">get</span> <span
  m="2010480">Bob</span> <span m="2011660">to</span> <span
  m="2012650">send</span> <span m="2013030">g raised</span> <span
  m="2013360">to</span> <span m="2013460">b</span> <span
  m="2013650">back,</span> <span m="2014430">but</span> <span
  m="2014640">they</span> <span m="2014740">would</span> <span
  m="2014960">intercept</span> <span m="2015220">it</span> <span
  m="2015990">and</span> <span m="2016200">replace</span> <span
  m="2016730">it</span> <span m="2017400">with</span> <span m="2017580">g
  raised</span> <span m="2017920">to</span> <span m="2018020">c.</span> <span
  m="2018940">And</span> <span m="2019090">they</span> <span
  m="2019190">know</span> <span m="2019310">what</span> <span
  m="2019500">c</span> <span m="2019700">is.</span> <span m="2021160">So</span>
  <span m="2021440">what's</span> <span m="2021630">happening</span> <span
  m="2021960">now</span> <span m="2022150">is</span> <span m="2022320">so you
  can</span> <span m="2022550">[INAUDIBLE].</span> <span m="2022850">I</span>
  <span m="2022950">won't</span> <span m="2023140">to</span> <span
  m="2023180">go</span> <span m="2023310">through</span> <span
  m="2023500">all</span> <span m="2023670">of</span> <span
  m="2023770">the</span> <span m="2024640">math</span> <span
  m="2024950">here.</span> <span m="2025320">But</span> <span
  m="2025390">you</span> <span m="2025500">can</span> <span
  m="2025660">kind</span> <span m="2026040">of</span> <span
  m="2026540">see</span> <span m="2026770">it, I</span> <span
  m="2026910">hope.</span></p><p><span m="2028130">You</span> <span
  m="2028420">end</span> <span m="2028660">up,</span> <span
  m="2029490">if</span> <span m="2029610">you're</span> <span
  m="2029770">Alice,</span> <span m="2030570">exchanging</span> <span
  m="2031950">a</span> <span m="2032030">secret</span> <span
  m="2032460">key</span> <span m="2035600">with</span> <span
  m="2036070">the</span> <span m="2036160">pirates</span> <span
  m="2036690">as</span> <span m="2036880">opposed</span> <span
  m="2037120">to</span> <span m="2037180">Bob.</span> <span
  m="2038030">And</span> <span m="2038970">the</span> <span
  m="2039170">way</span> <span m="2039360">you</span> <span
  m="2039450">can</span> <span m="2039560">set</span> <span
  m="2039760">this</span> <span m="2039920">up</span> <span
  m="2040430">is</span> <span m="2040580">the</span> <span
  m="2040670">pirates</span> <span m="2041040">actually</span> <span
  m="2043280">will</span> <span m="2044180">get</span> <span
  m="2044350">into</span> <span m="2044520">a</span> <span
  m="2044570">situation</span> <span m="2045050">where</span> <span
  m="2045270">Alice</span> <span m="2045510">and</span> <span
  m="2045630">Bob</span> <span m="2045920">think</span> <span
  m="2046070">that</span> <span m="2046210">they're</span> <span
  m="2046320">communicating</span> <span m="2046840">with</span> <span
  m="2046980">each</span> <span m="2047150">other</span> <span
  m="2047720">in</span> <span m="2047860">a</span> <span
  m="2047930">secure</span> <span m="2048250">fashion,</span> <span
  m="2048980">but</span> <span m="2049120">the</span> <span m="2049190">pirates
  can</span> <span m="2049610">listen</span> <span m="2049900">to</span> <span
  m="2049969">all</span> <span m="2050130">of the</span> <span
  m="2050210">messages.</span> <span m="2051510">They</span> <span
  m="2051690">can</span> <span m="2051810">decrypt</span> <span
  m="2052190">all</span> <span m="2052360">of the</span> <span
  m="2052449">messages,</span> <span m="2053210">because</span> <span
  m="2053449">they</span> <span m="2053570">know</span> <span
  m="2053770">what</span> <span m="2055199">they</span> <span
  m="2055330">secret</span> <span m="2055659">key,</span> <span m="2055860">k,
  is.</span> <span m="2056940">OK.</span></p><p><span m="2057880">And</span>
  <span m="2058020">remember</span> <span m="2058310">that</span> <span
  m="2058510">the secret</span> <span m="2058679">key,</span> <span
  m="2058820">k,</span> <span m="2059730">is</span> <span
  m="2059870">something</span> <span m="2060210">that</span> <span
  m="2060469">is</span> <span m="2060639">probably</span> <span
  m="2061070">going</span> <span m="2061219">to</span> <span
  m="2061270">be</span> <span m="2061429">used</span> <span
  m="2062179">in</span> <span m="2062320">a</span> <span
  m="2062380">symmetric</span> <span m="2062850">key</span> <span
  m="2063090">encryption</span> <span m="2063540">scheme</span> <span
  m="2064710">eventually</span> <span m="2065239">to</span> <span
  m="2065560">send</span> <span m="2066659">real</span> <span
  m="2066860">messages.</span> <span m="2068510">So</span> <span
  m="2069030">you're</span> <span m="2069150">going</span> <span
  m="2069239">to</span> <span m="2069280">have ciphered</span> <span
  m="2069400">text</span> <span m="2070000">with</span> <span
  m="2070110">that</span> <span m="2070250">secret</span> <span
  m="2071000">key,</span> <span m="2071190">capital</span> <span
  m="2071570">K,</span> <span m="2072400">over</span> <span
  m="2072600">there.</span> <span m="2073179">And</span> <span
  m="2073620">if</span> <span m="2074590">the</span> <span
  m="2075130">pirates</span> <span m="2075510">or</span> <span
  m="2075610">mal</span> <span m="2075900">get</span> <span
  m="2076190">to</span> <span m="2076270">know</span> <span
  m="2076400">what</span> <span m="2076530">the</span> <span
  m="2076610">secret</span> <span m="2076900">key,</span> <span
  m="2077130">k,</span> <span m="2077380">is</span> <span
  m="2077730">through</span> <span m="2078150">a</span> <span
  m="2078210">man</span> <span m="2078429">in</span> <span
  m="2078500">the</span> <span m="2078570">middle</span> <span
  m="2078810">attack,</span> <span m="2079570">you've</span> <span
  m="2079739">got</span> <span m="2079860">problems.</span> <span
  m="2081000">All</span> <span m="2081100">right?</span></p><p><span
  m="2082080">So</span> <span m="2083130">the</span> <span
  m="2083260">man</span> <span m="2083429">in</span> <span
  m="2083480">the</span> <span m="2083550">middle</span> <span
  m="2083770">attack</span> <span m="2084460">is</span> <span
  m="2085739">something</span> <span m="2086139">that</span> <span
  m="2086260">we</span> <span m="2086350">have</span> <span
  m="2086460">to</span> <span m="2086530">worry</span> <span
  m="2086750">about.</span> <span m="2087730">What</span> <span
  m="2087870">we're</span> <span m="2087969">going</span> <span
  m="2088080">to</span> <span m="2088139">talk</span> <span
  m="2088320">about</span> <span m="2088570">next</span> <span
  m="2089440">is</span> <span m="2089620">something</span> <span
  m="2090060">that</span> <span m="2091429">addresses</span> <span
  m="2091969">this</span> <span m="2092159">problem.</span> <span
  m="2093030">And</span> <span m="2093460">it</span> <span
  m="2093610">may</span> <span m="2093710">not</span> <span
  m="2093920">seem</span> <span m="2094920">like</span> <span
  m="2095150">it's</span> <span m="2095340">directly</span> <span
  m="2095739">addressing</span> <span m="2096130">the</span> <span
  m="2096210">problem.</span> <span m="2097200">But</span> <span
  m="2097440">fundamentally,</span> <span m="2098000">what's</span> <span
  m="2098180">going</span> <span m="2098360">on</span> <span
  m="2098550">here</span> <span m="2099300">is</span> <span
  m="2099630">you</span> <span m="2099700">need</span> <span
  m="2099980">to</span> <span m="2100080">have</span> <span
  m="2101380">authenticity</span> <span m="2102790">in</span> <span
  m="2103890">who</span> <span m="2104220">you're</span> <span
  m="2104290">communicating</span> <span m="2104870">with.</span></p><p><span
  m="2105310">Alice</span> <span m="2105710">has</span> <span
  m="2105970">to</span> <span m="2106080">somehow</span> <span
  m="2106580">authenticate</span> <span m="2107220">Bob.</span> <span
  m="2108080">And</span> <span m="2108590">Alice</span> <span
  m="2108890">has</span> <span m="2109180">to know</span> <span
  m="2109410">somehow</span> <span m="2109880">that</span> <span
  m="2110410">g</span> <span m="2110710">raised</span> <span
  m="2110990">to</span> <span m="2111070">b</span> <span m="2112040">is</span>
  <span m="2112180">something</span> <span m="2112510">that</span> <span
  m="2112680">came</span> <span m="2113020">from</span> <span
  m="2113240">Bob.</span> <span m="2114560">It's</span> <span
  m="2114750">not</span> <span m="2114980">g raised</span> <span m="2115190">to
  c</span> <span m="2115740">that</span> <span m="2115920">came</span> <span
  m="2116160">from</span> <span m="2116550">somebody</span> <span
  m="2116780">else</span> <span m="2117110">is</span> <span
  m="2117340">in</span> <span m="2117430">the</span> <span
  m="2117500">middle.</span> <span m="2118380">And</span> <span
  m="2118590">that's</span> <span m="2118820">where</span> <span
  m="2119090">asymmetric</span> <span m="2119620">key</span> <span
  m="2119840">cryptography</span> <span m="2120440">and</span> <span
  m="2120560">public</span> <span m="2120890">keys</span> <span m="2121110">come
  in,</span> <span m="2122030">where</span> <span m="2122750">you</span> <span
  m="2122920">have</span> <span m="2123860">a</span> <span
  m="2123940">certified</span> <span m="2124700">public</span> <span
  m="2125060">key</span> <span m="2126150">associated</span> <span
  m="2126700">with</span> <span m="2126990">yourself.</span></p><p><span
  m="2129170">And</span> <span m="2129320">maybe</span> <span
  m="2129580">you</span> <span m="2129830">need</span> <span
  m="2130260">VeriSign</span> <span m="2130675">or</span> <span
  m="2131090">you</span> <span m="2131230">need</span> <span
  m="2131400">the</span> <span m="2131480">DMV,</span> <span
  m="2131840">or</span> <span m="2132240">the</span> <span
  m="2132550">Registry</span> <span m="2132940">of</span> <span
  m="2133000">Motor</span> <span m="2133260">Vehicles,</span> <span
  m="2134090">RMV,</span> <span m="2134750">to</span> <span
  m="2134830">do</span> <span m="2134970">this</span> <span
  m="2135160">for</span> <span m="2135400">you.</span> <span
  m="2136150">But</span> <span m="2136560">you</span> <span
  m="2137130">create</span> <span m="2137500">a</span> <span
  m="2137570">certified</span> <span m="2138150">public</span> <span
  m="2138460">key,</span> <span m="2139020">which</span> <span
  m="2139090">is</span> <span m="2139270">associated</span> <span
  m="2139780">with</span> <span m="2139930">your</span> <span
  m="2140250">identity.</span> <span m="2141430">And</span> <span
  m="2142040">it's</span> <span m="2142160">public.</span> <span
  m="2142840">You</span> <span m="2142970">can</span> <span
  m="2143070">put</span> <span m="2143180">it</span> <span m="2143250">on</span>
  <span m="2143360">a</span> <span m="2143410">website.</span></p><p><span
  m="2145100">And</span> <span m="2145420">everyone</span> <span
  m="2145710">can</span> <span m="2145820">access</span> <span
  m="2146130">it</span> <span m="2146360">using</span> <span
  m="2146750">HTTPS,</span> <span m="2147590">so</span> <span
  m="2147880">they</span> <span m="2147990">know</span> <span
  m="2148180">they're</span> <span m="2148320">going</span> <span
  m="2148550">to</span> <span m="2148640">the</span> <span
  m="2149220">exact</span> <span m="2149590">website</span> <span
  m="2150300">that</span> <span m="2150570">you've</span> <span
  m="2150800">put</span> <span m="2151000">up.</span> <span
  m="2151740">And</span> <span m="2152430">that</span> <span m="2152920">gives
  you</span> <span m="2154040">a</span> <span m="2154470">way</span> <span
  m="2154920">of</span> <span m="2155090">identifying</span> <span
  m="2155670">yourself.</span> <span m="2157230">And</span> <span
  m="2157690">if</span> <span m="2157850">you</span> <span
  m="2158050">can</span> <span m="2158200">do</span> <span
  m="2158320">that,</span> <span m="2158850">you</span> <span
  m="2159010">can</span> <span m="2159120">protect</span> <span
  m="2159440">against</span> <span m="2159830">the</span> <span
  m="2159900">man</span> <span m="2160100">in</span> <span
  m="2160150">the</span> <span m="2160210">middle</span> <span
  m="2160430">attack</span> <span m="2161110">using</span> <span
  m="2161560">asymmetric</span> <span m="2162100">key</span> <span
  m="2162290">cryptography.</span></p><p><span m="2164140">So</span> <span
  m="2164350">that's</span> <span m="2165360">kind</span> <span
  m="2165510">of</span> <span m="2165560">the</span> <span
  m="2165620">final</span> <span m="2167540">part</span> <span
  m="2167770">of</span> <span m="2167870">this</span> <span
  m="2168410">puzzle</span> <span m="2169160">that's</span> <span
  m="2169390">associated</span> <span m="2169940">with</span> <span
  m="2172620">authentication</span> <span m="2173490">and</span> <span
  m="2174270">secret</span> <span m="2174530">key</span> <span
  m="2174790">exchange</span> <span m="2175270">and</span> <span
  m="2175350">all</span> <span m="2175470">of</span> <span
  m="2175550">that.</span> <span m="2176430">Once</span> <span
  m="2176680">we</span> <span m="2176770">do</span> <span
  m="2176890">that,</span> <span m="2177490">you'll</span> <span
  m="2177690">know</span> <span m="2177900">what</span> <span
  m="2178040">the</span> <span m="2178110">functionality is</span> <span
  m="2179020">that</span> <span m="2179140">we</span> <span
  m="2179260">require.</span> <span m="2180210">And</span> <span
  m="2180390">then</span> <span m="2180510">we'll</span> <span
  m="2180640">have</span> <span m="2180770">to</span> <span
  m="2180840">talk</span> <span m="2181040">about</span> <span
  m="2181210">how</span> <span m="2181330">we</span> <span
  m="2181430">can</span> <span m="2181540">build</span> <span
  m="2182500">a</span> <span m="2182600">subsystems.</span></p><p><span
  m="2187650">Cool.</span> <span m="2188020">Any</span> <span
  m="2188200">questions</span> <span m="2188540">so</span> <span
  m="2188670">far?</span> <span m="2189560">How</span> <span
  m="2190060">we</span> <span m="2190160">doing?</span> <span
  m="2192960">OK.</span> <span m="2196060">So</span> <span
  m="2196630">public</span> <span m="2196960">key</span> <span
  m="2197080">encryption,</span> <span m="2199160">let</span> <span
  m="2199320">me</span> <span m="2199420">just</span> <span
  m="2199580">do</span> <span m="2200010">a little</span> <span
  m="2200300">set</span> <span m="2200470">up.</span> <span m="2200880">I</span>
  <span m="2201290">said</span> <span m="2201680">some</span> <span
  m="2201900">of</span> <span m="2201980">this</span> <span
  m="2202230">last</span> <span m="2202500">time.</span> <span
  m="2204370">But</span> <span m="2205370">to</span> <span
  m="2205440">make</span> <span m="2205600">sure</span> <span
  m="2205780">we're</span> <span m="2205930">on</span> <span
  m="2206050">the</span> <span m="2206120">same</span> <span
  m="2206350">page,</span> <span m="2207650">what</span> <span
  m="2207800">we</span> <span m="2207900">have</span> <span
  m="2208170">here</span> <span m="2208580">is</span> <span
  m="2209240">we</span> <span m="2209400">really</span> <span
  m="2209630">want</span> <span m="2209950">a</span> <span
  m="2210030">message</span> <span m="2210540">plus</span> <span
  m="2210840">a</span> <span m="2211620">public</span> <span
  m="2211970">key.</span></p><p><span m="2213970">And</span> <span
  m="2215150">you</span> <span m="2215320">want</span> <span
  m="2215780">to</span> <span m="2215900">obtain</span> <span
  m="2216760">ciphered</span> <span m="2217080">text</span> <span
  m="2221320">using</span> <span m="2221700">this</span> <span
  m="2221940">operation.</span> <span m="2222680">And</span> <span
  m="2222820">this</span> <span m="2222960">plus</span> <span
  m="2223230">is</span> <span m="2223360">not</span> <span
  m="2224670">arithmetic</span> <span m="2225130">addition.</span> <span
  m="2225920">It's</span> <span m="2226080">just</span> <span
  m="2226310">that</span> <span m="2227270">we're</span> <span
  m="2227480">putting</span> <span m="2227680">these</span> <span
  m="2227860">two</span> <span m="2227980">things</span> <span
  m="2228180">together</span> <span m="2228900">into</span> <span
  m="2229110">an</span> <span m="2229200">algorithm,</span> <span
  m="2230080">a</span> <span m="2230180">public</span> <span
  m="2230470">key</span> <span m="2230640">encryption</span> <span
  m="2231060">algorithm,</span> <span m="2231790">that</span> <span
  m="2231930">produces ciphered</span> <span m="2232380">text.</span> <span
  m="2233500">All</span> <span m="2233570">right.</span></p><p><span
  m="2234290">And</span> <span m="2234850">this</span> <span
  m="2235060">public</span> <span m="2235380">key,</span> <span
  m="2236610">just</span> <span m="2236810">to</span> <span
  m="2237010">reiterate</span> <span m="2237460">what</span> <span
  m="2237590">I</span> <span m="2237650">just</span> <span
  m="2237820">said,</span> <span m="2238910">is</span> <span
  m="2239120">going</span> <span m="2239340">to</span> <span
  m="2239440">be</span> <span m="2240420">if</span> <span
  m="2241020">Alice</span> <span m="2242000">is</span> <span
  m="2242260">producing</span> <span m="2242680">the</span> <span
  m="2242760">message</span> <span m="2243790">and</span> <span
  m="2244200">Bob</span> <span m="2244560">is</span> <span
  m="2244670">getting</span> <span m="2244900">the</span> <span
  m="2245070">ciphered</span> <span m="2245380">text,</span> <span
  m="2246460">this</span> <span m="2246650">is</span> <span
  m="2246780">going</span> <span m="2246930">to</span> <span
  m="2247000">be</span> <span m="2247920">Bob's</span> <span m="2248300">public
  key.</span> <span m="2250650">And</span> <span m="2251430">the</span> <span
  m="2251530">fact</span> <span m="2251790">that</span> <span
  m="2251920">it's</span> <span m="2252050">Bob's</span> <span
  m="2252430">public</span> <span m="2252720">key</span> <span
  m="2253800">is</span> <span m="2254000">something</span> <span
  m="2254420">that</span> <span m="2254790">Alice</span> <span
  m="2255100">should</span> <span m="2255290">be</span> <span
  m="2255420">able</span> <span m="2255580">to</span> <span
  m="2255660">authenticate</span> <span m="2256840">using</span> <span
  m="2257180">VeriSign,</span> <span m="2258070">using</span> <span
  m="2258370">the</span> <span m="2258570">Register</span> <span
  m="2258960">of</span> <span m="2259030">Motor</span> <span
  m="2259490">Vehicles,</span> <span m="2260090">what</span> <span
  m="2260260">have</span> <span m="2260440">you.</span> <span
  m="2260970">That's</span> <span m="2261220">what's</span> <span
  m="2261420">going</span> <span m="2261530">to</span> <span
  m="2261570">protect</span> <span m="2261890">against</span> <span
  m="2262190">the</span> <span m="2262280">man</span> <span
  m="2262490">in</span> <span m="2262550">the</span> <span
  m="2262610">middle</span> <span m="2262840">attack.</span> <span
  m="2263600">OK.</span></p><p><span m="2264690">We're not</span> <span
  m="2264880">going</span> <span m="2265200">to</span> <span
  m="2265260">talk</span> <span m="2265440">a</span> <span
  m="2265490">lot</span> <span m="2265730">about</span> <span
  m="2266740">how</span> <span m="2267790">you</span> <span
  m="2267920">can</span> <span m="2268050">get</span> <span m="2268210">a</span>
  <span m="2268270">certificate.</span> <span m="2268920">Your</span> <span
  m="2269020">MIT</span> <span m="2269530">certificate</span> <span
  m="2270300">is</span> <span m="2270440">something</span> <span
  m="2270790">which</span> <span m="2271340">corresponds</span> <span
  m="2271900">to</span> <span m="2272630">your</span> <span
  m="2272870">MIT</span> <span m="2273470">ID.</span> <span
  m="2274310">It's</span> <span m="2274470">got</span> <span
  m="2274600">information,</span> <span m="2275310">what</span> <span
  m="2275490">year</span> <span m="2275760">you</span> <span
  m="2275910">are,</span> <span m="2276170">what</span> <span
  m="2276310">your</span> <span m="2276390">name</span> <span
  m="2276710">is.</span> <span m="2277330">And</span> <span
  m="2277500">when</span> <span m="2277600">you</span> <span
  m="2277690">generate</span> <span m="2278130">that</span> <span
  m="2278290">certificate,</span> <span m="2279470">you</span> <span
  m="2279700">are</span> <span m="2279830">getting</span> <span
  m="2280510">a</span> <span m="2280630">certificate</span> <span
  m="2281340">of</span> <span m="2281580">authenticity</span> <span
  m="2282800">that</span> <span m="2283330">you</span> <span
  m="2283540">are</span> <span m="2283600">you.</span></p><p><span
  m="2284180">And</span> <span m="2284260">of</span> <span
  m="2284350">course,</span> <span m="2284500">you</span> <span
  m="2284580">give</span> <span m="2284760">that</span> <span
  m="2284920">away</span> <span m="2285260">and</span> <span
  m="2285590">you</span> <span m="2285730">hand it</span> <span
  m="2285990">to</span> <span m="2286050">someone</span> <span
  m="2286300">else,</span> <span m="2286890">someone</span> <span
  m="2287180">can</span> <span m="2287290">pretend</span> <span
  m="2287620">to</span> <span m="2287680">be you</span> <span
  m="2288180">as</span> <span m="2288600">well.</span> <span
  m="2289160">But</span> <span m="2289290">that's</span> <span
  m="2289950">what's</span> <span m="2290460">happening</span> <span
  m="2291320">when</span> <span m="2291530">we</span> <span
  m="2291690">talk</span> <span m="2291920">about</span> <span
  m="2293060">public</span> <span m="2293360">keys</span> <span
  m="2293860">and</span> <span m="2294050">you</span> <span
  m="2294330">owning</span> <span m="2294670">public</span> <span
  m="2294960">keys.</span> <span m="2297500">We're</span> <span m="2297660">not
  going</span> <span m="2297740">to,</span> <span m="2298310">as</span> <span
  m="2298510">I</span> <span m="2298570">said,</span> <span
  m="2298850">get</span> <span m="2298990">into</span> <span
  m="2299160">that</span> <span m="2299530">very</span> <span
  m="2299700">much</span> <span m="2299900">more.</span> <span
  m="2301390">I'm</span> <span m="2301580">more</span> <span
  m="2301760">interested</span> <span m="2302160">in</span> <span
  m="2302590">describing</span> <span m="2303810">this</span> <span
  m="2304130">algorithm</span> <span m="2305310">for</span> <span
  m="2305650">public</span> <span m="2305940">key</span> <span
  m="2306100">encryption.</span></p><p><span m="2306960">We'll</span> <span
  m="2307100">look</span> <span m="2307290">at</span> <span m="2307340">a</span>
  <span m="2307400">couple</span> <span m="2308560">that</span> <span
  m="2308800">produces</span> <span m="2309440">a</span> <span
  m="2309700">ciphered</span> <span m="2309910">text</span> <span
  m="2311070">given</span> <span m="2311410">a</span> <span
  m="2311450">message</span> <span m="2312430">and</span> <span
  m="2313160">a</span> <span m="2313250">public</span> <span
  m="2313540">key.</span> <span m="2314440">Now,</span> <span m="2314620">of
  course,</span> <span m="2314990">what</span> <span m="2315150">Bob</span>
  <span m="2315480">needs</span> <span m="2315740">to</span> <span
  m="2315860">do</span> <span m="2317130">is</span> <span m="2317520">to</span>
  <span m="2318550">take</span> <span m="2318990">the ciphered</span> <span
  m="2319080">text.</span> <span m="2321670">And</span> <span
  m="2321830">this</span> <span m="2321930">is</span> <span
  m="2321990">what</span> <span m="2322150">Bob's</span> <span
  m="2322530">doing.</span> <span m="2323750">And</span> <span
  m="2325030">Bob</span> <span m="2325420">has</span> <span m="2325630">a</span>
  <span m="2325690">private</span> <span m="2326190">key</span> <span
  m="2327910">that</span> <span m="2328120">is</span> <span
  m="2328270">distinct</span> <span m="2329340">from</span> <span
  m="2330360">the</span> <span m="2330480">public</span> <span
  m="2330810">key</span> <span m="2333360">and</span> <span
  m="2333830">needs</span> <span m="2334040">to</span> <span
  m="2334130">get</span> <span m="2334310">back</span> <span
  m="2334690">exactly</span> <span m="2335010">the</span> <span
  m="2335330">message</span> <span m="2336000">using</span> <span
  m="2336440">a</span> <span m="2337100">decryption</span> <span
  m="2337600">algorithm</span> <span m="2338920">that</span> <span
  m="2339100">corresponds</span> <span m="2339520">to</span> <span
  m="2339590">the</span> <span m="2339680">message</span> <span
  m="2340030">that</span> <span m="2340170">Alice sent.</span></p><p><span
  m="2341680">OK.</span> <span m="2342720">And</span> <span
  m="2343880">this</span> <span m="2344080">whole</span> <span
  m="2344410">thing</span> <span m="2344630">is</span> <span
  m="2344740">going</span> <span m="2344870">to</span> <span
  m="2344930">work</span> <span m="2346250">provided</span> <span
  m="2350010">knowing</span> <span m="2350370">the</span> <span
  m="2350510">public</span> <span m="2350840">key,</span> <span
  m="2353630">let's</span> <span m="2353790">call it</span> <span
  m="2354060">PK,</span> <span m="2355010">and</span> <span
  m="2355110">the</span> <span m="2355170">private</span> <span
  m="2355440">key.</span> <span m="2356060">We</span> <span
  m="2356150">can't</span> <span m="2356320">call</span> <span
  m="2356450">it</span> <span m="2356550">PK</span> <span m="2356890">as</span>
  <span m="2357060">well,</span> <span m="2357430">obviously.</span> <span
  m="2357990">So</span> <span m="2358260">we</span> <span m="2358330">call
  it</span> <span m="2358520">SK.</span></p><p><span m="2359960">Knowing</span>
  <span m="2360160">the</span> <span m="2360530">PK</span> <span
  m="2362080">does</span> <span m="2362320">not</span> <span
  m="2363520">reveal</span> <span m="2366090">anything</span> <span
  m="2366770">in</span> <span m="2366910">a</span> <span
  m="2366950">mathematical</span> <span m="2367520">sense</span> <span
  m="2370330">about</span> <span m="2370550">SK.</span> <span
  m="2373290">But</span> <span m="2373450">obviously,</span> <span
  m="2374370">in</span> <span m="2374540">order</span> <span
  m="2374700">for</span> <span m="2374790">this</span> <span m="2374970">whole
  thing</span> <span m="2375360">to</span> <span m="2375440">work,</span> <span
  m="2376740">PK</span> <span m="2376995">and</span> <span m="2377250">SK</span>
  <span m="2378240">have</span> <span m="2378460">to</span> <span
  m="2378560">have</span> <span m="2379460">some</span> <span
  m="2380870">mathematical</span> <span m="2381530">relationship.</span> <span
  m="2382950">And</span> <span m="2383270">the</span> <span
  m="2383540">different</span> <span m="2383950">cryptosystems</span> <span
  m="2385310">including</span> <span m="2385730">RSA,</span> <span
  m="2386070">and</span> <span m="2386360">we</span> <span
  m="2386470">look</span> <span m="2386610">at</span> <span m="2386660">a</span>
  <span m="2386710">knapsack</span> <span m="2387190">cryptosystem,</span> <span
  m="2388330">all</span> <span m="2388630">have</span> <span
  m="2388930">different</span> <span m="2390110">algorithms</span> <span
  m="2391140">for</span> <span m="2391440">encryption</span> <span
  m="2392040">and</span> <span m="2392420">decryption.</span> <span
  m="2393310">And</span> <span m="2393440">they</span> <span
  m="2393510">have</span> <span m="2393710">different</span> <span
  m="2394060">mathematical</span> <span m="2394660">relationships</span> <span
  m="2395780">between</span> <span m="2396040">PK</span> <span
  m="2396220">and</span> <span m="2396500">SK.</span></p><p><span
  m="2397440">And</span> <span m="2397620">for</span> <span
  m="2397790">each</span> <span m="2398130">of</span> <span
  m="2398250">these</span> <span m="2399170">relationships,</span> <span
  m="2400320">you</span> <span m="2400460">have</span> <span
  m="2400590">to</span> <span m="2400680">show</span> <span
  m="2401590">that</span> <span m="2402650">the</span> <span
  m="2402810">adversary</span> <span m="2403050">has</span> <span
  m="2403260">to</span> <span m="2403360">solve</span> <span
  m="2403760">a</span> <span m="2403840">computationally</span> <span
  m="2404600">hard</span> <span m="2405020">problem</span> <span
  m="2406120">in</span> <span m="2406300">order</span> <span
  m="2406580">to</span> <span m="2406870">discover</span> <span
  m="2409580">SK</span> <span m="2410480">given</span> <span
  m="2410740">PK.</span> <span m="2412140">And</span> <span
  m="2412360">it</span> <span m="2412490">turns</span> <span
  m="2412730">out</span> <span m="2412890">that</span> <span
  m="2413020">for</span> <span m="2413110">most</span> <span
  m="2413390">of</span> <span m="2413450">these</span> <span
  m="2413600">systems,</span> <span m="2414870">it's</span> <span
  m="2415270">symmetric</span> <span m="2415780">in</span> <span
  m="2415930">the</span> <span m="2416030">sense</span> <span
  m="2416350">that</span> <span m="2417370">these</span> <span
  m="2417570">algorithms,</span> <span m="2419330">at</span> <span
  m="2419670">least for</span> <span m="2419810">RSA,</span> <span
  m="2420580">you</span> <span m="2420760">could</span> <span
  m="2420860">use</span> <span m="2422740">either</span> <span
  m="2422970">one</span> <span m="2423120">of</span> <span
  m="2423210">these</span> <span m="2424230">interchangeably.</span> <span
  m="2425690">And</span> <span m="2425960">there's</span> <span
  m="2426240">issues</span> <span m="2426540">associated</span> <span
  m="2426930">with</span> <span m="2427050">that.</span> <span
  m="2427390">So</span> <span m="2427640">we</span> <span
  m="2427860">really</span> <span m="2428080">won't</span> <span
  m="2428770">go</span> <span m="2428920">too</span> <span
  m="2429100">deep</span> <span m="2429350">into</span> <span
  m="2429510">that.</span></p><p><span m="2430120">But</span> <span
  m="2431180">what</span> <span m="2431360">I</span> <span
  m="2431430">said</span> <span m="2432560">you</span> <span
  m="2432620">should</span> <span m="2432900">hold,</span> <span
  m="2433700">which</span> <span m="2433920">is</span> <span
  m="2434860">you</span> <span m="2435140">have</span> <span
  m="2435340">one,</span> <span m="2435660">it</span> <span
  m="2436060">shouldn't</span> <span m="2436250">tell</span> <span
  m="2436380">you</span> <span m="2436470">anything</span> <span
  m="2436720">about</span> <span m="2436930">the</span> <span
  m="2436990">other.</span> <span m="2438360">There</span> <span
  m="2438530">has</span> <span m="2438760">to</span> <span m="2438840">be</span>
  <span m="2438940">a</span> <span m="2439000">computationally</span> <span
  m="2439640">hard</span> <span m="2439940">problem</span> <span
  m="2440760">associated</span> <span m="2441370">with</span> <span
  m="2442110">discovering</span> <span m="2443830">one</span> <span
  m="2444060">of</span> <span m="2444130">these</span> <span
  m="2444790">only</span> <span m="2445080">given</span> <span
  m="2445990">the</span> <span m="2446300">one</span> <span
  m="2446510">other.</span> <span m="2448350">And</span> <span
  m="2448920">we'll</span> <span m="2449120">talk</span> <span
  m="2449310">about</span> <span m="2449490">what</span> <span
  m="2449660">those</span> <span m="2449840">hardness</span> <span
  m="2450410">assumptions</span> <span m="2450940">are</span> <span
  m="2451750">certainly</span> <span m="2452120">for</span> <span
  m="2452440">RSA</span> <span m="2453060">and</span> <span
  m="2453270">also</span> <span m="2453580">for</span> <span
  m="2454660">another</span> <span m="2455000">cryptosystem,</span> <span
  m="2455990">a</span> <span m="2456090">knapsack.</span></p><p><span
  m="2457730">So</span> <span m="2457940">we're going to</span> <span
  m="2458060">present</span> <span m="2458870">RSA,</span> <span
  m="2460090">which</span> <span m="2460270">is</span> <span
  m="2460380">this</span> <span m="2460570">real</span> <span
  m="2461030">magical</span> <span m="2461620">algorithm.</span> <span
  m="2462400">It's</span> <span m="2462680">amazing</span> <span
  m="2463220">it</span> <span m="2463310">works.</span> <span
  m="2464580">Every</span> <span m="2464820">time</span> <span
  m="2465120">I</span> <span m="2466590">prepare</span> <span
  m="2466900">for</span> <span m="2466970">this</span> <span
  m="2467150">lecture,</span> <span m="2468100">I</span> <span
  m="2468210">got</span> <span m="2468290">to</span> <span
  m="2468420">relearn</span> <span m="2468910">somethings.</span> <span
  m="2470130">And</span> <span m="2471170">that's</span> <span
  m="2471420">because</span> <span m="2473610">there's</span> <span
  m="2474310">one</span> <span m="2475360">subtle</span> <span
  m="2475970">aspect</span> <span m="2476420">of</span> <span
  m="2476550">this.</span></p><p><span m="2477370">It's</span> <span
  m="2477560">all</span> <span m="2477700">about</span> <span
  m="2477880">number</span> <span m="2478120">theory.</span> <span
  m="2478580">Number</span> <span m="2478790">theory</span> <span
  m="2479160">can</span> <span m="2479390">get</span> <span
  m="2479570">pretty</span> <span m="2479760">subtle.</span> <span
  m="2481190">But</span> <span m="2481490">it's</span> <span
  m="2481840">also</span> <span m="2482310">intricate</span> <span
  m="2482770">enough</span> <span m="2483830">that</span> <span
  m="2484390">I</span> <span m="2484500">forget</span> <span
  m="2484760">the</span> <span m="2484840">details.</span></p><p><span
  m="2486850">So</span> <span m="2488560">let's</span> <span
  m="2488780">get</span> <span m="2488910">started</span> <span
  m="2489180">on</span> <span m="2489290">that.</span> <span
  m="2490030">Basically,</span> <span m="2491390">RSA</span> <span
  m="2492750">is</span> <span m="2492970">based</span> <span
  m="2493510">on</span> <span m="2494990">primes</span> <span
  m="2496050">and</span> <span m="2496500">factoring</span> <span
  m="2496940">numbers</span> <span m="2497300">into</span> <span
  m="2497490">primes</span> <span m="2498520">and</span> <span
  m="2498790">using</span> <span m="2501640">number</span> <span
  m="2501940">theory</span> <span m="2502760">to</span> <span
  m="2503220">make</span> <span m="2503470">sure</span> <span
  m="2503850">that</span> <span m="2504050">you</span> <span
  m="2504150">can</span> <span m="2504270">actually</span> <span
  m="2504640">accomplish</span> <span m="2505820">what</span> <span
  m="2506210">this</span> <span m="2506770">is</span> <span
  m="2506940">trying</span> <span m="2507200">to</span> <span
  m="2507280">do.</span> <span m="2509050">The</span> <span
  m="2509310">functionality</span> <span m="2510140">of</span> <span
  m="2510260">RSA</span> <span m="2511240">should</span> <span
  m="2511460">be</span> <span m="2511580">distinct</span> <span
  m="2512470">from</span> <span m="2512750">the</span> <span
  m="2512850">security</span> <span m="2513470">of</span> <span
  m="2513590">RSA.</span> <span m="2515550">When</span> <span
  m="2515690">we</span> <span m="2515800">talk</span> <span
  m="2516000">about</span> <span m="2516170">the</span> <span
  m="2516250">functionality</span> <span m="2516900">of</span> <span
  m="2517000">RSA,</span> <span m="2517450">we are</span> <span
  m="2517720">saying</span> <span m="2518580">for</span> <span
  m="2518900">any</span> <span m="2519250">message,</span> <span
  m="2520550">if</span> <span m="2520900">Alice</span> <span
  m="2521390">uses</span> <span m="2521910">Bob's</span> <span
  m="2522410">public</span> <span m="2522750">key</span> <span
  m="2523130">to</span> <span m="2523290">encrypt</span> <span
  m="2523800">it,</span> <span m="2525270">the</span> <span
  m="2525410">ciphered</span> <span m="2525760">text</span> <span
  m="2526130">resulting</span> <span m="2526720">from</span> <span
  m="2526920">that</span> <span m="2527780">should</span> <span
  m="2528090">be</span> <span m="2528580">decryptable</span> <span
  m="2529710">into</span> <span m="2529960">exactly</span> <span
  m="2530770">the</span> <span m="2531300">message</span> <span
  m="2531700">that</span> <span m="2531890">Alice</span> <span
  m="2532330">sent</span> <span m="2533330">given</span> <span
  m="2533800">Bob's</span> <span m="2534940">private</span> <span
  m="2535260">key.</span></p><p><span m="2536220">That's</span> <span
  m="2536470">the</span> <span m="2536570">functional</span> <span
  m="2537260">requirement</span> <span m="2538240">of</span> <span
  m="2538570">a</span> <span m="2538640">public</span> <span
  m="2538980">key</span> <span m="2540170">encryption</span> <span
  m="2540640">algorithm</span> <span m="2541120">or</span> <span
  m="2541240">a</span> <span m="2541280">public</span> <span
  m="2541540">key</span> <span m="2541700">cryptosystem.</span> <span
  m="2543220">The</span> <span m="2543330">security</span> <span
  m="2543920">requirement</span> <span m="2544990">of</span> <span
  m="2545130">a</span> <span m="2545190">public</span> <span
  m="2545500">key</span> <span m="2545660">cryptosystem</span> <span
  m="2546690">is</span> <span m="2546860">what</span> <span m="2547010">I</span>
  <span m="2547090">wrote</span> <span m="2547280">up</span> <span
  m="2547410">there.</span> <span m="2548520">It's</span> <span
  m="2548730">the</span> <span m="2548810">knowledge</span> <span
  m="2549960">of</span> <span m="2550210">SK</span> <span
  m="2551160">should</span> <span m="2551360">be</span> <span
  m="2551500">hidden</span> <span m="2552260">even</span> <span
  m="2552540">given</span> <span m="2552800">the</span> <span
  m="2552880">knowledge</span> <span m="2553230">of</span> <span
  m="2553320">PK.</span> <span m="2553790">And</span> <span
  m="2554260">there's</span> <span m="2554460">precise</span> <span
  m="2555070">computational</span> <span m="2555660">hardness</span> <span
  m="2556190">assumptions</span> <span m="2557010">that</span> <span
  m="2557190">are</span> <span m="2557300">associated</span> <span
  m="2557760">with</span> <span m="2557920">each</span> <span
  m="2558120">cryptosystem.</span></p><p><span m="2559460">So</span> <span
  m="2559560">let's</span> <span m="2559790">separate</span> <span
  m="2560180">out</span> <span m="2560550">functionality</span> <span
  m="2561220">from</span> <span m="2561390">security.</span> <span
  m="2562200">We're</span> <span m="2562290">going</span> <span
  m="2562390">to</span> <span m="2562450">talk</span> <span
  m="2562620">about</span> <span m="2562790">functionality</span> <span
  m="2563370">for</span> <span m="2563440">the</span> <span
  m="2563520">next</span> <span m="2563720">few</span> <span
  m="2563850">minutes.</span> <span m="2567760">Alice</span> <span
  m="2568250">is</span> <span m="2568420">going</span> <span
  m="2568630">to</span> <span m="2568710">pick</span> <span
  m="2572790">two</span> <span m="2573110">large</span> <span
  m="2575440">secret</span> <span m="2576030">primes,</span> <span
  m="2579610">p</span> <span m="2579810">and</span> <span m="2579980">q.</span>
  <span m="2580970">So</span> <span m="2581190">what</span> <span
  m="2581330">I'm</span> <span m="2581430">going</span> <span
  m="2581550">to</span> <span m="2581600">describe</span> <span
  m="2581970">here</span> <span m="2582660">are</span> <span
  m="2582890">Alice</span> <span m="2583450">generating</span> <span
  m="2584770">her</span> <span m="2585090">public</span> <span
  m="2585510">key</span> <span m="2585890">and</span> <span
  m="2586070">her</span> <span m="2586330">private</span> <span
  m="2586740">key.</span></p><p><span m="2587480">She's</span> <span
  m="2587720">going</span> <span m="2587850">to</span> <span
  m="2587890">then</span> <span m="2588190">publish</span> <span
  m="2588690">her</span> <span m="2588800">public</span> <span
  m="2589170">key</span> <span m="2589960">and</span> <span
  m="2590240">keep</span> <span m="2590510">her</span> <span
  m="2590640">private</span> <span m="2590980">key</span> <span
  m="2591450">secret.</span> <span m="2592360">Bob</span> <span
  m="2592680">does</span> <span m="2592860">the</span> <span
  m="2592950">same</span> <span m="2593160">thing.</span> <span
  m="2594160">And</span> <span m="2594220">then</span> <span
  m="2594330">after</span> <span m="2594580">that,</span> <span
  m="2595250">they</span> <span m="2595290">have</span> <span
  m="2595490">to</span> <span m="2595630">register.</span> <span
  m="2596760">And</span> <span m="2596980">this</span> <span
  m="2597090">is</span> <span m="2597240">not</span> <span
  m="2597650">something</span> <span m="2597960">we'll</span> <span
  m="2598060">spend</span> <span m="2598470">time</span> <span
  m="2598730">on</span> <span m="2599440">beyond</span> <span
  m="2599940">me</span> <span m="2600120">saying</span> <span
  m="2600380">it</span> <span m="2600450">one</span> <span
  m="2600570">more</span> <span m="2600700">time.</span> <span m="2601360">They
  have to</span> <span m="2601570">register</span> <span
  m="2602100">their</span> <span m="2602230">public</span> <span
  m="2602540">keys</span> <span m="2603070">with</span> <span
  m="2603240">the</span> <span m="2603310">VeriSign</span> <span
  m="2603820">or</span> <span m="2603950">the</span> <span
  m="2604060">RMVs</span> <span m="2604590">like</span> <span
  m="2604770">I</span> <span m="2604810">talked</span> <span
  m="2605050">about.</span></p><p><span m="2606190">So</span> <span
  m="2606360">everyone</span> <span m="2606740">knows</span> <span
  m="2607050">that</span> <span m="2607560">Alice's</span> <span
  m="2607960">public</span> <span m="2608250">key</span> <span m="2608570">is
  this</span> <span m="2608710">long</span> <span m="2609000">number.</span>
  <span m="2610380">But</span> <span m="2610560">no</span> <span
  m="2610690">one</span> <span m="2610830">knows</span> <span
  m="2611100">Alice's</span> <span m="2611470">private</span> <span
  m="2611780">key.</span> <span m="2613500">So</span> <span
  m="2613690">Alice</span> <span m="2613810">picks</span> <span
  m="2614220">two</span> <span m="2614370">large</span> <span
  m="2614740">secret</span> <span m="2615150">primes.</span> <span
  m="2615860">So</span> <span m="2615990">these</span> <span
  m="2616230">are</span> <span m="2616490">actually</span> <span
  m="2616760">going</span> <span m="2617010">to</span> <span
  m="2617860">result</span> <span m="2618240">in</span> <span
  m="2618300">the</span> <span m="2618390">creation</span> <span
  m="2618810">of</span> <span m="2618910">our</span> <span
  m="2619000">private</span> <span m="2619340">key.</span></p><p><span
  m="2620560">And</span> <span m="2620750">then</span> <span
  m="2621280">Alice</span> <span m="2621680">computes</span> <span
  m="2625330">N</span> <span m="2625790">equals</span> <span
  m="2626180">pq.</span> <span m="2628600">So</span> <span
  m="2628770">she</span> <span m="2628850">just</span> <span
  m="2629070">multiplies</span> <span m="2629460">those</span> <span
  m="2629720">out.</span> <span m="2631320">She</span> <span
  m="2631490">chooses</span> <span m="2633510">an</span> <span
  m="2634080">encryption</span> <span m="2636350">exponent,</span> <span
  m="2640660">e,</span> <span m="2642300">which</span> <span
  m="2642810">satisfies</span> <span m="2644690">this</span> <span
  m="2644920">little</span> <span m="2645140">equation,</span> <span
  m="2647170">which</span> <span m="2647600">says</span> <span
  m="2647900">that</span> <span m="2648510">it's</span> <span
  m="2648680">relatively</span> <span m="2649180">prime</span> <span
  m="2650770">in</span> <span m="2650940">relation</span> <span
  m="2651560">to</span> <span m="2652800">p</span> <span
  m="2652870">minus</span> <span m="2653190">1</span> <span m="2653560">times
  q</span> <span m="2653940">minus</span> <span m="2654420">1.</span> <span
  m="2654880">And</span> <span m="2655060">she</span> <span
  m="2655190">knows</span> <span m="2655420">p</span> <span
  m="2655580">and</span> <span m="2655700">q.</span> <span m="2655910">So she
  can</span> <span m="2656370">compute</span> <span m="2657090">p</span> <span
  m="2657210">minus</span> <span m="2657490">1</span> <span m="2657740">times
  q</span> <span m="2658010">minus</span> <span
  m="2658410">1.</span></p><p><span m="2659550">So</span> <span
  m="2659690">the</span> <span m="2659820">gcd</span> <span
  m="2660236">of</span> <span m="2660652">e</span> <span m="2661070">and</span>
  <span m="2661410">p</span> <span m="2661550">minus</span> <span
  m="2661820">1,</span> <span m="2662140">q</span> <span
  m="2662290">minus</span> <span m="2662540">1</span> <span
  m="2662940">is</span> <span m="2663110">1.</span> <span m="2664010">And</span>
  <span m="2664230">you</span> <span m="2664310">can</span> <span
  m="2664440">certainly</span> <span m="2664790">accomplish</span> <span
  m="2665300">this</span> <span m="2665930">simply</span> <span
  m="2666740">by</span> <span m="2667330">choosing</span> <span
  m="2667620">e</span> <span m="2667860">to</span> <span m="2667930">be</span>
  <span m="2668590">a</span> <span m="2668750">prime.</span> <span
  m="2669890">Because</span> <span m="2670110">then</span> <span
  m="2670560">a</span> <span m="2670720">gcd</span> <span m="2671210">of</span>
  <span m="2671310">a</span> <span m="2671380">prime</span> <span
  m="2671710">with</span> <span m="2671840">anything</span> <span
  m="2672290">else</span> <span m="2672880">is</span> <span
  m="2673830">1.</span> <span m="2674600">And</span> <span m="2674780">it</span>
  <span m="2675080">turns</span> <span m="2675340">out</span> <span
  m="2675520">that</span> <span m="2675720">RSA</span> <span
  m="2676880">uses--</span> <span m="2678100">this</span> <span
  m="2678320">is</span> <span m="2678400">all</span> <span
  m="2678560">going</span> <span m="2678680">to</span> <span
  m="2678720">be</span> <span m="2678810">public,</span> <span
  m="2679130">by</span> <span m="2679250">the</span> <span
  m="2679360">way.</span> <span m="2681370">e is</span> <span
  m="2681610">going</span> <span m="2681720">to</span> <span
  m="2681760">be</span> <span m="2681870">public.</span> <span
  m="2682560">So</span> <span m="2682760">you</span> <span
  m="2682890">can</span> <span m="2682960">just</span> <span
  m="2683150">fix</span> <span m="2683370">that.</span></p><p><span
  m="2684080">And</span> <span m="2684480">most</span> <span
  m="2684740">RSA</span> <span m="2685050">algorithms</span> <span
  m="2685500">just</span> <span m="2685690">fix</span> <span
  m="2685900">that</span> <span m="2686720">to</span> <span
  m="2686810">be</span> <span m="2687200">a</span> <span
  m="2687620">small</span> <span m="2687980">number.</span> <span
  m="2688470">The</span> <span m="2688890">encryption</span> <span
  m="2689480">exponent</span> <span m="2690190">is</span> <span
  m="2690310">a</span> <span m="2690370">small</span> <span
  m="2690660">number.</span> <span m="2691430">And</span> <span
  m="2691480">the</span> <span m="2691560">reason</span> <span
  m="2691850">it's</span> <span m="2691980">a</span> <span
  m="2692030">small</span> <span m="2692270">number</span> <span
  m="2692910">is</span> <span m="2693070">because</span> <span
  m="2693730">you're</span> <span m="2693870">worried</span> <span
  m="2694090">about</span> <span m="2694290">performance.</span> <span
  m="2695160">And</span> <span m="2695250">we're</span> <span
  m="2695350">going</span> <span m="2695470">to</span> <span
  m="2695520">exponentiate</span> <span m="2696580">using</span> <span
  m="2696950">e.</span> <span m="2697500">And</span> <span
  m="2697790">the</span> <span m="2697870">smaller</span> <span
  m="2698230">it</span> <span m="2698310">is,</span> <span
  m="2698900">the</span> <span m="2699000">faster</span> <span
  m="2699280">the</span> <span m="2699460">encryption</span> <span
  m="2699750">is</span> <span m="2699840">going</span> <span
  m="2699980">to</span> <span m="2700030">go.</span></p><p><span
  m="2700910">So</span> <span m="2701200">if</span> <span m="2701280">you</span>
  <span m="2701370">want</span> <span m="2701480">to</span> <span
  m="2701520">encrypt</span> <span m="2701840">fast</span> <span
  m="2702330">and</span> <span m="2702530">decrypt</span> <span
  m="2703850">more</span> <span m="2704100">slowly,</span> <span
  m="2704530">unfortunately,</span> <span m="2705580">that's</span> <span
  m="2705850">the</span> <span m="2706010">trade</span> <span
  m="2706240">off</span> <span m="2706380">here.</span> <span
  m="2706910">You</span> <span m="2707130">would pick</span> <span
  m="2707290">a</span> <span m="2707350">small</span> <span
  m="2707740">e.</span> <span m="2708330">And</span> <span
  m="2708460">then</span> <span m="2708600">we're</span> <span
  m="2708710">going</span> <span m="2708800">to</span> <span
  m="2708870">compute</span> <span m="2709240">our</span> <span
  m="2709360">decryption</span> <span m="2709800">exponent,</span> <span
  m="2710690">which</span> <span m="2710710">obviously</span> <span
  m="2711000">is</span> <span m="2711090">going</span> <span
  m="2711210">to</span> <span m="2711320">have</span> <span
  m="2711480">to</span> <span m="2711550">be</span> <span
  m="2711650">private.</span></p><p><span m="2712650">Because</span> <span
  m="2713060">that's</span> <span m="2713240">part</span> <span
  m="2713400">of</span> <span m="2713490">our</span> <span
  m="2713580">private</span> <span m="2713870">key.</span> <span
  m="2714470">But</span> <span m="2714610">that's</span> <span
  m="2714790">going</span> <span m="2714890">to</span> <span
  m="2714930">be</span> <span m="2715010">bigger</span> <span
  m="2715500">if</span> <span m="2715660">e is</span> <span
  m="2715880">small.</span> <span m="2716810">And</span> <span
  m="2716990">that's</span> <span m="2717140">just</span> <span
  m="2717320">a</span> <span m="2717380">trade</span> <span
  m="2717600">off.</span></p><p><span m="2718460">It's</span> <span
  m="2718680">symmetric</span> <span m="2719210">in</span> <span
  m="2719340">the</span> <span m="2719430">sense</span> <span
  m="2719690">that</span> <span m="2719810">while</span> <span
  m="2720040">it's</span> <span m="2720140">an</span> <span
  m="2720240">asymmetric</span> <span m="2720830">algorithm,</span> <span
  m="2721610">it's</span> <span m="2721760">kind of</span> <span
  m="2721940">symmetric</span> <span m="2722600">in</span> <span
  m="2722840">the</span> <span m="2723010">mathematical</span> <span
  m="2723610">sense</span> <span m="2724290">that</span> <span
  m="2724500">the</span> <span m="2724590">private</span> <span
  m="2724920">keys</span> <span m="2725290">and</span> <span
  m="2726370">the</span> <span m="2726610">public</span> <span
  m="2726910">key</span> <span m="2727050">operations</span> <span
  m="2728160">are</span> <span m="2728630">symmetric.</span> <span
  m="2730910">So</span> <span m="2731480">what</span> <span
  m="2731620">is</span> <span m="2731760">Alice's</span> <span
  m="2732150">public key?</span> <span m="2733015">Well,</span> <span
  m="2733570">Alice's</span> <span m="2733980">public</span> <span
  m="2734320">key,</span> <span m="2735450">which</span> <span
  m="2735820">she</span> <span m="2735900">can</span> <span
  m="2736010">then</span> <span m="2736200">publish,</span> <span
  m="2739540">is</span> <span m="2739770">simply</span> <span
  m="2740160">m,</span> <span m="2740653">e.</span> <span
  m="2742310">OK.</span></p><p><span m="2750740">Now,</span> <span
  m="2751120">the</span> <span m="2751230">fun</span> <span
  m="2751420">starts.</span> <span m="2753920">We</span> <span
  m="2754620">have</span> <span m="2754730">to</span> <span
  m="2754930">figure</span> <span m="2755230">out</span> <span
  m="2755580">what</span> <span m="2755810">the</span> <span
  m="2755890">private</span> <span m="2756240">key</span> <span
  m="2756410">is</span> <span m="2756520">going</span> <span
  m="2756640">to</span> <span m="2756690">correspond</span> <span
  m="2757160">to.</span> <span m="2758070">And</span> <span
  m="2758250">it</span> <span m="2758340">turns</span> <span
  m="2758630">out--</span> <span m="2761300">and</span> <span
  m="2761430">this</span> <span m="2761550">is</span> <span
  m="2761630">one</span> <span m="2761780">of</span> <span
  m="2761840">those</span> <span m="2762010">things</span> <span
  m="2762220">where</span> <span m="2763160">how did</span> <span
  m="2763340">they ever</span> <span m="2763640">think</span> <span
  m="2763890">of</span> <span m="2764020">this?</span> <span
  m="2765110">And</span> <span m="2765290">that's</span> <span
  m="2765470">still</span> <span m="2765670">true</span> <span
  m="2766460">40</span> <span m="2766840">years</span> <span
  m="2767120">later.</span> <span m="2769020">You</span> <span
  m="2769170">get</span> <span m="2769350">the</span> <span
  m="2769430">decryption</span> <span m="2770000">exponent</span> <span
  m="2772450">using</span> <span m="2773590">the</span> <span
  m="2773820">extended</span> <span m="2774760">Euclidean</span> <span
  m="2775360">algorithm.</span></p><p><span m="2784280">And</span> <span
  m="2784490">this</span> <span m="2784620">is</span> <span
  m="2784720">done</span> <span m="2784910">by</span> <span
  m="2785020">Alice</span> <span m="2787480">secretly,</span> <span
  m="2788670">where</span> <span m="2789840">what</span> <span
  m="2790110">you</span> <span m="2790210">want</span> <span
  m="2790490">is</span> <span m="2791080">to</span> <span
  m="2791200">have</span> <span m="2791360">the</span> <span
  m="2791440">relationship</span> <span m="2792030">that</span> <span
  m="2792320">e</span> <span m="2792500">times</span> <span m="2792880">d</span>
  <span m="2793730">is</span> <span m="2793910">1.</span> <span
  m="2795110">And</span> <span m="2795360">this</span> <span
  m="2795510">is</span> <span m="2795880">mod</span> <span m="2796740">p</span>
  <span m="2797150">minus</span> <span m="2797760">1,</span> <span
  m="2799010">q</span> <span m="2799180">minus</span> <span
  m="2799480">1.</span> <span m="2801230">And</span> <span
  m="2801880">there's</span> <span m="2802450">algorithms</span> <span
  m="2802880">out</span> <span m="2803060">there</span> <span
  m="2804190">that</span> <span m="2804540">would</span> <span
  m="2805500">find</span> <span m="2805860">the</span> <span
  m="2805920">inverse</span> <span m="2807520">that</span> <span
  m="2807690">corresponds</span> <span m="2808220">to</span> <span
  m="2808590">d</span> <span m="2809120">for e</span> <span
  m="2810150">or</span> <span m="2810470">vice</span> <span
  m="2810720">versa.</span> <span m="2811520">And</span> <span
  m="2811880">they're</span> <span m="2812160">polytime</span> <span
  m="2812750">algorithms.</span></p><p><span m="2813810">As</span> <span
  m="2813970">long</span> <span m="2814120">as</span> <span
  m="2814190">you</span> <span m="2814290">know</span> <span
  m="2815140">this</span> <span m="2815500">number</span> <span
  m="2815790">here,</span> <span m="2816150">mod</span> <span
  m="2816380">p</span> <span m="2816560">minus</span> <span
  m="2816820">1,</span> <span m="2817050">q</span> <span
  m="2817180">minus</span> <span m="2817460">1,</span> <span
  m="2818180">and</span> <span m="2818350">you</span> <span
  m="2818430">know</span> <span m="2818540">that</span> <span
  m="2818650">Alice</span> <span m="2818950">knows</span> <span
  m="2819200">that,</span> <span m="2819700">you</span> <span
  m="2819840">can</span> <span m="2819940">get</span> <span
  m="2820100">your</span> <span m="2820200">decryption</span> <span
  m="2820970">exponent.</span> <span m="2822210">And</span> <span
  m="2822720">typically,</span> <span m="2823410">if</span> <span
  m="2823530">a</span> <span m="2823720">is</span> <span
  m="2823790">small,</span> <span m="2824140">as</span> <span
  m="2824250">I</span> <span m="2824300">said,</span> <span m="2824650">d
  is</span> <span m="2825050">going</span> <span m="2825220">to</span> <span
  m="2825270">be</span> <span m="2825850">large.</span> <span
  m="2826880">By</span> <span m="2827030">the</span> <span
  m="2827100">way,</span> <span m="2827200">the</span> <span
  m="2827320">numbers</span> <span m="2827650">here,</span> <span
  m="2828450">p</span> <span m="2828660">and</span> <span m="2828800">q,</span>
  <span m="2829590">are</span> <span m="2829720">going</span> <span
  m="2829860">to</span> <span m="2829910">be</span> <span m="2830070">the</span>
  <span m="2830190">roughly</span> <span m="2830530">1,000</span> <span
  m="2830920">bits</span> <span m="2831570">long.</span> <span
  m="2832710">So</span> <span m="2832810">that's</span> <span
  m="2833080">essentially--</span> <span m="2833550">we're</span> <span
  m="2833690">talking</span> <span m="2833870">about</span> <span
  m="2834010">huge</span> <span m="2834310">primes</span> <span
  m="2834620">here.</span> <span m="2835650">And</span> <span
  m="2835820">so</span> <span m="2835990">n</span> <span
  m="2836210">would</span> <span m="2836340">be</span> <span
  m="2836500">2048</span> <span m="2837120">bits</span> <span
  m="2837340">in</span> <span m="2837420">that</span> <span
  m="2837570">case.</span></p><p><span m="2839180">So</span> <span
  m="2839900">the</span> <span m="2840090">private</span> <span
  m="2840450">key,</span> <span m="2840780">Alice's</span> <span
  m="2841270">private</span> <span m="2841620">key,</span> <span
  m="2847010">you</span> <span m="2847150">can</span> <span
  m="2847260">think</span> <span m="2847440">of</span> <span
  m="2847660">as</span> <span m="2848650">d,</span> <span m="2849110">p,</span>
  <span m="2849566">q.</span> <span m="2852450">So</span> <span
  m="2852580">now,</span> <span m="2852780">it's</span> <span
  m="2852950">clear</span> <span m="2853360">as</span> <span
  m="2853490">to</span> <span m="2853580">what's</span> <span
  m="2853820">public</span> <span m="2854240">and</span> <span
  m="2854390">what's</span> <span m="2854640">private.</span> <span
  m="2855255">n</span> <span m="2855520">and</span> <span m="2855880">e</span>
  <span m="2856130">are</span> <span m="2856220">public.</span> <span
  m="2857040">d, p,</span> <span m="2857510">and</span> <span
  m="2857620">q</span> <span m="2858300">are</span> <span
  m="2858420">private.</span></p><p><span m="2860950">So</span> <span
  m="2861120">that's</span> <span m="2861350">the</span> <span
  m="2861440">set</span> <span m="2861630">up</span> <span
  m="2861760">for</span> <span m="2861930">RSA.</span> <span
  m="2863030">And</span> <span m="2864310">it's</span> <span
  m="2864600">not</span> <span m="2864890">at</span> <span
  m="2864960">all</span> <span m="2865140">clear</span> <span
  m="2866320">that</span> <span m="2866870">RSA</span> <span
  m="2867430">accomplishes</span> <span m="2868160">either</span> <span
  m="2868440">of</span> <span m="2868530">the</span> <span
  m="2868630">two</span> <span m="2868820">things</span> <span
  m="2869170">that</span> <span m="2870160">we</span> <span
  m="2870340">need,</span> <span m="2871210">the</span> <span
  m="2871350">first</span> <span m="2871600">of</span> <span
  m="2871690">which</span> <span m="2872700">is</span> <span
  m="2872910">functionality,</span> <span m="2874000">the</span> <span
  m="2874110">fact</span> <span m="2874370">that</span> <span
  m="2875860">encrypting,</span> <span m="2876470">and</span> <span
  m="2876590">then</span> <span m="2877000">decrypting</span> <span
  m="2877490">a</span> <span m="2877540">message</span> <span
  m="2878470">should</span> <span m="2878710">get</span> <span
  m="2878850">you</span> <span m="2878970">back</span> <span
  m="2879230">that</span> <span m="2879400">message.</span> <span
  m="2880470">So</span> <span m="2880500">that's</span> <span
  m="2880790">the</span> <span m="2880900">first</span> <span
  m="2881150">thing</span> <span m="2881510">we</span> <span
  m="2881650">need</span> <span m="2881790">to</span> <span
  m="2881860">look</span> <span m="2882020">at.</span> <span
  m="2882580">And</span> <span m="2882870">the</span> <span
  m="2882970">security</span> <span m="2883390">part</span> <span
  m="2883650">is</span> <span m="2883750">actually</span> <span
  m="2883980">a</span> <span m="2884000">little</span> <span
  m="2884140">bit</span> <span m="2884230">easier.</span> <span
  m="2885140">Because</span> <span m="2885420">you</span> <span
  m="2885510">can</span> <span m="2885600">see</span> <span
  m="2886640">we're</span> <span m="2886740">going</span> <span
  m="2886850">to</span> <span m="2886890">have</span> <span
  m="2887190">to</span> <span m="2887630">make</span> <span
  m="2887830">assumptions</span> <span m="2888420">about</span> <span
  m="2889950">factoring</span> <span m="2890520">primes</span> <span
  m="2891460">and</span> <span m="2891640">so</span> <span m="2891780">on</span>
  <span m="2891890">and</span> <span m="2891980">so</span> <span
  m="2892120">forth.</span></p><p><span m="2893050">Right</span> <span
  m="2893270">here,</span> <span m="2893580">you</span> <span
  m="2893690">can</span> <span m="2893790">just</span> <span
  m="2893930">see</span> <span m="2894100">that</span> <span
  m="2894350">immediately.</span> <span m="2895690">The</span> <span
  m="2896860">biggest</span> <span m="2897260">assumption</span> <span
  m="2897740">made</span> <span m="2897950">by</span> <span
  m="2898080">RSA</span> <span m="2898590">from</span> <span
  m="2898770">a</span> <span m="2898830">computational</span> <span
  m="2899450">hardness</span> <span m="2899810">standpoint</span> <span
  m="2900840">is</span> <span m="2900990">simply</span> <span
  m="2901300">that</span> <span m="2901820">if the</span> <span
  m="2902010">adversary</span> <span m="2902530">sees</span> <span
  m="2902940">n,</span> <span m="2904450">that</span> <span
  m="2905140">they</span> <span m="2905340">should</span> <span
  m="2905520">not</span> <span m="2905710">be</span> <span
  m="2905780">able</span> <span m="2905920">to</span> <span
  m="2905980">factor</span> <span m="2906430">it</span> <span
  m="2906980">into</span> <span m="2907850">p and</span> <span
  m="2908000">q.</span> <span m="2908660">Because</span> <span
  m="2908850">if</span> <span m="2908930">they</span> <span
  m="2909030">can</span> <span m="2909160">do</span> <span
  m="2909280">that,</span> <span m="2909510">it's</span> <span
  m="2909650">over.</span> <span m="2910860">So</span> <span
  m="2910960">that's</span> <span m="2911590">actually</span> <span
  m="2912140">easier</span> <span m="2912600">than</span> <span
  m="2912810">the</span> <span m="2912920">functionality</span> <span
  m="2914950">argument.</span></p><p><span m="2915870">So</span> <span
  m="2916050">why</span> <span m="2916330">does</span> <span
  m="2916520">this</span> <span m="2916700">work?</span> <span
  m="2922970">And</span> <span m="2923240">amazingly,</span> <span
  m="2923730">we</span> <span m="2923830">can</span> <span
  m="2923930">actually</span> <span m="2924200">do</span> <span
  m="2924370">this</span> <span m="2924590">in</span> <span
  m="2924670">about</span> <span m="2925080">10</span> <span
  m="2925270">minutes.</span> <span m="2926080">I'm going to</span> <span
  m="2926250">explain</span> <span m="2926600">to</span> <span
  m="2926650">you</span> <span m="2926780">why</span> <span
  m="2926970">this</span> <span m="2927150">works</span> <span
  m="2928260">in</span> <span m="2928420">10</span> <span
  m="2928620">minutes.</span> <span m="2929350">And</span> <span
  m="2930100">the</span> <span m="2930230">only</span> <span
  m="2930710">theorem</span> <span m="2931800">that</span> <span
  m="2932010">we'll</span> <span m="2932190">require</span> <span
  m="2933570">on</span> <span m="2933740">top</span> <span m="2933980">of</span>
  <span m="2934100">this,</span> <span m="2935350">which</span> <span
  m="2935560">I</span> <span m="2935610">will</span> <span
  m="2935750">not</span> <span m="2935940">approve,</span> <span
  m="2936720">because</span> <span m="2937000">Fermat</span> <span
  m="2937270">proved</span> <span m="2937550">it</span> <span
  m="2937830">centuries</span> <span m="2938290">ago,</span> <span
  m="2941130">is</span> <span m="2941340">Fermat's</span> <span
  m="2941740">Little</span> <span m="2942000">Theorem</span> <span
  m="2943370">that</span> <span m="2943610">says</span> <span
  m="2945830">that</span> <span m="2947360">when</span> <span
  m="2947480">you</span> <span m="2947570">have</span> <span
  m="2949690">p</span> <span m="2949990">being</span> <span m="2950250">a</span>
  <span m="2950320">prime--</span> <span m="2952020">you</span> <span
  m="2952140">can</span> <span m="2952230">think</span> <span
  m="2952350">of</span> <span m="2952440">this</span> <span
  m="2952650">as</span> <span m="2952840">a</span> <span
  m="2953370">special</span> <span m="2953710">case.</span></p><p><span
  m="2963870">You</span> <span m="2964000">take</span> <span
  m="2964180">m,</span> <span m="2964540">and</span> <span m="2965010">m</span>
  <span m="2965210">is</span> <span m="2965950">an</span> <span
  m="2966090">arbitrary</span> <span m="2966450">number.</span> <span
  m="2967290">And</span> <span m="2967970">if</span> <span m="2968100">p</span>
  <span m="2968270">is</span> <span m="2968370">a</span> <span
  m="2968430">prime,</span> <span m="2973030">then</span> <span
  m="2973250">this</span> <span m="2973420">relationship</span> <span
  m="2973900">holds.</span> <span m="2974760">So</span> <span
  m="2974890">you</span> <span m="2975070">raise</span> <span
  m="2975300">it</span> <span m="2975410">to</span> <span m="2975480">the</span>
  <span m="2975660">p</span> <span m="2975900">minus</span> <span
  m="2976160">1</span> <span m="2976360">power,</span> <span
  m="2977080">and</span> <span m="2977230">you</span> <span
  m="2977320">get</span> <span m="2977460">1,</span> <span m="2978350">mod
  p.</span> <span m="2979190">So</span> <span m="2979320">that's</span> <span
  m="2979770">Fermat's</span> <span m="2979910">Little</span> <span
  m="2980300">Theorem</span> <span m="2980980">that's</span> <span
  m="2981220">going</span> <span m="2981340">to</span> <span
  m="2981380">be</span> <span m="2981510">required.</span> <span
  m="2982160">And</span> <span m="2982280">that's</span> <span
  m="2982450">pretty</span> <span m="2982590">much</span> <span
  m="2982760">the</span> <span m="2982850">only</span> <span
  m="2983180">thing</span> <span m="2983480">that</span> <span
  m="2983960">you</span> <span m="2984060">have</span> <span
  m="2984190">to</span> <span m="2984260">invoke</span> <span m="2985480">beyond
  sort of</span> <span m="2985910">standard</span> <span m="2986860">mod</span>
  <span m="2987150">arithmetic</span> <span m="2987980">to</span> <span
  m="2988110">show</span> <span m="2988330">that</span> <span
  m="2988460">RSA</span> <span m="2988840">works.</span></p><p><span
  m="2991720">So</span> <span m="2991870">what's</span> <span
  m="2992050">going</span> <span m="2992200">on</span> <span
  m="2992340">here?</span> <span m="2993010">Let's</span> <span
  m="2993180">call</span> <span m="2993480">phi</span> <span
  m="2994540">p</span> <span m="2994740">minus</span> <span m="2995070">1</span>
  <span m="2995750">times</span> <span m="2996440">q</span> <span
  m="2996550">minus</span> <span m="2996830">1.</span> <span
  m="2998790">Obviously,</span> <span m="2999120">that's</span> <span
  m="2999280">showed</span> <span m="2999560">up</span> <span
  m="2999810">a</span> <span m="2999890">couple of</span> <span
  m="3000150">times.</span> <span m="3000650">And</span> <span
  m="3001100">you</span> <span m="3001140">may as</span> <span
  m="3001280">well</span> <span m="3002150">represent it</span> <span
  m="3002455">by</span> <span m="3002760">using</span> <span
  m="3003190">a</span> <span m="3003760">smaller,</span> <span
  m="3004620">simpler</span> <span m="3004900">symbol.</span> <span
  m="3005830">So</span> <span m="3005940">we'll</span> <span
  m="3006040">call</span> <span m="3006260">that</span> <span
  m="3006450">phi.</span></p><p><span m="3007530">And</span> <span
  m="3009670">we</span> <span m="3009800">are</span> <span
  m="3009870">going</span> <span m="3010130">to</span> <span
  m="3010840">say</span> <span m="3011100">that</span> <span
  m="3011510">d</span> <span m="3012450">equals</span> <span
  m="3012820">1.</span> <span m="3013870">Mod</span> <span
  m="3014230">phi</span> <span m="3015220">is</span> <span
  m="3015410">given</span> <span m="3015690">to</span> <span
  m="3015820">us.</span> <span m="3021870">And</span> <span
  m="3023470">therefore,</span> <span m="3024680">we</span> <span
  m="3024850">can</span> <span m="3024980">say</span> <span
  m="3025320">that</span> <span m="3025970">ed</span> <span
  m="3026990">equals</span> <span m="3027370">1</span> <span
  m="3027740">plus</span> <span m="3028130">k</span> <span
  m="3028380">phi.</span> <span m="3031080">So</span> <span
  m="3031250">that's</span> <span m="3031653">it.</span></p><p><span
  m="3032840">All</span> <span m="3033090">I'm</span> <span
  m="3033180">saying</span> <span m="3033430">is</span> <span
  m="3033580">the</span> <span m="3033680">remainder.</span> <span
  m="3034510">Then</span> <span m="3034630">you took</span> <span
  m="3034710">to</span> <span m="3034850">the</span> <span
  m="3034920">mod</span> <span m="3035260">with</span> <span
  m="3035450">respect</span> <span m="3035810">to</span> <span
  m="3035900">phi</span> <span m="3036640">was</span> <span
  m="3037310">1.</span> <span m="3037790">So</span> <span m="3038200">the</span>
  <span m="3038300">actual</span> <span m="3038660">number</span> <span
  m="3039460">was</span> <span m="3039610">1</span> <span
  m="3039790">plus</span> <span m="3039990">k</span> <span
  m="3040140">times</span> <span m="3040410">phi.</span> <span
  m="3040900">k</span> <span m="3041130">is</span> <span m="3041230">some</span>
  <span m="3041540">integer.</span> <span m="3043300">Think</span> <span
  m="3043430">of</span> <span m="3043500">it</span> <span m="3043560">as</span>
  <span m="3043630">a</span> <span m="3043690">positive</span> <span
  m="3044060">integer.</span></p><p><span m="3046390">Remember</span> <span
  m="3046590">that</span> <span m="3048620">we</span> <span
  m="3048690">now</span> <span m="3048900">have</span> <span
  m="3049100">the</span> <span m="3049190">p and</span> <span m="3049540">the
  q</span> <span m="3050020">are over</span> <span m="3050220">there.</span>
  <span m="3050570">And</span> <span m="3050770">p</span> <span
  m="3050920">and</span> <span m="3051030">q</span> <span m="3051280">are</span>
  <span m="3051370">primes.</span> <span m="3052440">So</span> <span
  m="3052640">p</span> <span m="3052820">and</span> <span m="3052930">q</span>
  <span m="3054000">are</span> <span m="3054220">primes.</span> <span
  m="3056230">And</span> <span m="3056750">given</span> <span
  m="3057010">that</span> <span m="3057140">that's</span> <span
  m="3057380">the</span> <span m="3057480">case,</span> <span
  m="3058680">we</span> <span m="3058820">really</span> <span
  m="3058980">have</span> <span m="3059140">two</span> <span
  m="3059310">cases</span> <span m="3059720">to</span> <span
  m="3059810">analyze.</span></p><p><span m="3062310">Oh,</span> <span
  m="3062810">I'm</span> <span m="3062920">sorry.</span> <span
  m="3063210">I</span> <span m="3063910">missed</span> <span
  m="3064280">one</span> <span m="3065640">crucial</span> <span
  m="3068180">point,</span> <span m="3068620">which</span> <span
  m="3072634">I</span> <span m="3073100">should</span> <span
  m="3073290">have</span> <span m="3073410">told</span> <span
  m="3073740">you,</span> <span m="3074530">which</span> <span
  m="3074700">is</span> <span m="3074840">I</span> <span m="3074920">gave</span>
  <span m="3075220">you</span> <span m="3075340">this.</span> <span
  m="3076360">But</span> <span m="3076550">I</span> <span
  m="3076610">didn't</span> <span m="3076780">actually</span> <span
  m="3077080">tell</span> <span m="3077370">you</span> <span
  m="3078960">what</span> <span m="3079180">is</span> <span
  m="3079290">going</span> <span m="3079540">on.</span> <span
  m="3080050">I</span> <span m="3080400">mentioned</span> <span m="3080860">it
  in</span> <span m="3081070">passing,</span> <span
  m="3081610">exponentiation.</span> <span m="3083040">But</span> <span
  m="3083260">I</span> <span m="3083330">didn't</span> <span
  m="3083530">tell</span> <span m="3083710">you</span> <span
  m="3083880">exactly</span> <span m="3084510">what</span> <span
  m="3084760">the</span> <span m="3085400">encryption</span> <span
  m="3085980">algorithm</span> <span m="3086410">was</span> <span
  m="3087120">and</span> <span m="3087280">the</span> <span
  m="3087350">decryption</span> <span m="3087790">algorithm</span> <span
  m="3088170">was.</span></p><p><span m="3088670">And</span> <span
  m="3088800">obviously,</span> <span m="3089090">you</span> <span
  m="3089180">need</span> <span m="3089400">that</span> <span
  m="3089890">in</span> <span m="3090070">order</span> <span
  m="3090250">to</span> <span m="3090320">prove</span> <span
  m="3090530">their</span> <span m="3090670">correctness.</span> <span
  m="3091270">I mean,</span> <span m="3091590">it'd</span> <span
  m="3091750">be</span> <span m="3091840">wonderful</span> <span m="3092230">if
  you</span> <span m="3092290">could</span> <span m="3092370">prove</span> <span
  m="3092510">correctness</span> <span m="3093340">of</span> <span
  m="3093670">this.</span> <span m="3093990">There</span> <span
  m="3094140">exists</span> <span m="3094530">an</span> <span
  m="3094630">algorithm</span> <span m="3095940">that</span> <span
  m="3097820">is</span> <span m="3098280">such</span> <span
  m="3098440">that</span> <span m="3099880">RSA</span> <span
  m="3100520">works</span> <span m="3100980">or</span> <span
  m="3101930">public</span> <span m="3102180">key</span> <span
  m="3102300">encryption</span> <span m="3102690">works.</span></p><p><span
  m="3103340">So</span> <span m="3103930">it</span> <span
  m="3104200">turns</span> <span m="3104400">out</span> <span
  m="3104540">it's</span> <span m="3105080">extremely</span> <span
  m="3105510">straightforward.</span> <span m="3106240">c</span> <span
  m="3107160">equals</span> <span m="3107730">m</span> <span
  m="3107960">raised</span> <span m="3108280">to</span> <span
  m="3108350">e.</span> <span m="3108660">And</span> <span
  m="3108850">that's</span> <span m="3109490">part</span> <span
  m="3109690">of</span> <span m="3109780">the</span> <span
  m="3110500">usefulness</span> <span m="3111210">and</span> <span
  m="3111330">the</span> <span m="3112050">power</span> <span
  m="3112410">of</span> <span m="3112650">RSA,</span> <span
  m="3114570">which</span> <span m="3114790">is</span> <span
  m="3115840">you</span> <span m="3116020">take</span> <span m="3116230">m
  and</span> <span m="3116400">you</span> <span m="3116630">exponentiate
  it.</span> <span m="3118860">And</span> <span m="3119070">you</span> <span
  m="3119190">take</span> <span m="3122340">c</span> <span
  m="3122780">and</span> <span m="3122920">you</span> <span
  m="3123060">exponentiate it.</span> <span m="3124310">And</span> <span
  m="3124780">the</span> <span m="3124840">first</span> <span
  m="3125130">is</span> <span m="3125240">the</span> <span
  m="3125310">encryption.</span></p><p><span m="3126350">You</span> <span
  m="3126570">get</span> <span m="3127040">the</span> <span m="3127120">c</span>
  <span m="3127460">through</span> <span m="3127650">encryption,</span> <span
  m="3128480">as</span> <span m="3128660">you</span> <span
  m="3128750">can</span> <span m="3128840">see</span> <span
  m="3129020">over</span> <span m="3129140">there,</span> <span
  m="3129390">the</span> <span m="3129460">ciphered</span> <span
  m="3129720">text.</span> <span m="3130440">And</span> <span
  m="3130750">m</span> <span m="3131020">is</span> <span m="3131100">the</span>
  <span m="3131180">plain</span> <span m="3131400">text.</span> <span
  m="3131970">And</span> <span m="3132100">you</span> <span
  m="3132180">get</span> <span m="3132320">that</span> <span
  m="3132470">back.</span></p><p><span m="3133500">So</span> <span
  m="3133970">our</span> <span m="3134180">goal</span> <span
  m="3134420">here</span> <span m="3135270">is</span> <span
  m="3135480">to</span> <span m="3135580">show</span> <span
  m="3135970">that</span> <span m="3140490">you</span> <span
  m="3140680">have</span> <span m="3143750">essentially</span> <span
  m="3144240">something</span> <span m="3144650">where</span> <span
  m="3146290">when</span> <span m="3146500">you</span> <span
  m="3146630">exponentiate</span> <span m="3148210">m</span> <span
  m="3149160">raised</span> <span m="3149510">to</span> <span
  m="3149670">ed,</span> <span m="3151660">it</span> <span
  m="3151960">should</span> <span m="3152300">give</span> <span
  m="3152520">you</span> <span m="3153690">m.</span> <span
  m="3156730">For</span> <span m="3157430">these</span> <span
  m="3157640">choices</span> <span m="3158070">that</span> <span
  m="3158200">we</span> <span m="3158300">have,</span> <span
  m="3158830">of</span> <span m="3159160">e and</span> <span
  m="3159440">d,</span> <span m="3160080">we've</span> <span
  m="3160250">set</span> <span m="3160500">up</span> <span m="3160670">the
  d</span> <span m="3160770">in</span> <span m="3161140">such</span> <span
  m="3161450">a</span> <span m="3161540">way</span> <span
  m="3162440">that</span> <span m="3162940">m</span> <span
  m="3163160">raised</span> <span m="3163470">to</span> <span
  m="3163580">ed--</span> <span m="3164410">because</span> <span
  m="3164600">if</span> <span m="3164690">you</span> <span
  m="3164790">just</span> <span m="3165000">go</span> <span
  m="3165190">do</span> <span m="3166520">encryption</span> <span
  m="3167030">followed</span> <span m="3167360">by</span> <span
  m="3167470">decryption,</span> <span m="3168480">you</span> <span
  m="3168650">are</span> <span m="3169370">doubly</span> <span
  m="3169810">exponentiating.</span> <span m="3171800">That</span> <span
  m="3171900">make</span> <span m="3172020">sense?</span></p><p><span
  m="3172420">Ask</span> <span m="3172630">me</span> <span
  m="3172730">questions</span> <span m="3173130">if</span> <span
  m="3173280">this</span> <span m="3173450">doesn't</span> <span
  m="3173650">make</span> <span m="3173780">sense.</span> <span
  m="3174510">This</span> <span m="3174630">is</span> <span
  m="3174700">important.</span> <span m="3175600">m</span> <span
  m="3176030">raised to</span> <span m="3176360">ed</span> <span
  m="3176700">should</span> <span m="3176920">give</span> <span
  m="3177030">you</span> <span m="3177120">back</span> <span
  m="3177340">m.</span> <span m="3178930">And if</span> <span m="3178970">you
  can</span> <span m="3179310">show</span> <span m="3179480">that</span> <span
  m="3179680">for</span> <span m="3179860">any</span> <span
  m="3180150">m,</span> <span m="3181070">you're</span> <span
  m="3181280">done.</span> <span m="3181860">That's</span> <span
  m="3182160">the</span> <span m="3182260">functionality</span> <span
  m="3182840">of</span> <span m="3182940">RSA.</span> <span
  m="3183920">All</span> <span m="3183990">right.</span></p><p><span
  m="3186550">So</span> <span m="3186680">that's</span> <span
  m="3187410">encryption</span> <span m="3187860">and</span> <span
  m="3187960">decryption.</span> <span m="3188770">And</span> <span
  m="3188940">so now</span> <span m="3189020">let's</span> <span
  m="3189250">go</span> <span m="3189350">back</span> <span
  m="3189540">to</span> <span m="3190350">here.</span> <span
  m="3193140">Now,</span> <span m="3193510">ed</span> <span
  m="3194080">equals</span> <span m="3194160">1</span> <span m="3194750">mod
  phi.</span> <span m="3195340">Because</span> <span m="3195570">I've</span>
  <span m="3195680">set</span> <span m="3195930">that</span> <span
  m="3196050">up.</span></p><p><span m="3196670">This</span> <span
  m="3196820">is</span> <span m="3196930">how</span> <span m="3197110">I</span>
  <span m="3197200">discovered</span> <span m="3198510">d</span> <span
  m="3199630">given</span> <span m="3199940">e.</span> <span
  m="3200440">So</span> <span m="3200580">that's</span> <span
  m="3200770">a</span> <span m="3200800">given</span> <span
  m="3201060">to</span> <span m="3201170">me.</span> <span
  m="3201440">That's</span> <span m="3201630">part</span> <span
  m="3201840">of</span> <span m="3202440">what's</span> <span
  m="3202620">called</span> <span m="3203250">the</span> <span
  m="3203370">key</span> <span m="3203600">generation</span> <span
  m="3204210">phase</span> <span m="3204630">of</span> <span
  m="3204760">RSA.</span> <span m="3206100">And</span> <span
  m="3207740">that's</span> <span m="3208020">the</span> <span
  m="3208060">mathematical</span> <span m="3208550">relationship</span> <span
  m="3209140">that</span> <span m="3209240">I</span> <span
  m="3209280">keep</span> <span m="3209500">harping</span> <span
  m="3209820">on</span> <span m="3210610">in</span> <span
  m="3210780">terms</span> <span m="3211030">of</span> <span
  m="3211140">the</span> <span m="3211320">relationship</span> <span
  m="3211830">between</span> <span m="3212070">the</span> <span
  m="3212140">public</span> <span m="3212480">and</span> <span
  m="3212650">the</span> <span m="3212720">private</span> <span
  m="3212990">key.</span></p><p><span m="3214320">So</span> <span
  m="3214950">given</span> <span m="3215180">that</span> <span
  m="3215320">p</span> <span m="3215460">and</span> <span m="3215560">q</span>
  <span m="3215760">are</span> <span m="3215860">primes,</span> <span
  m="3217000">I</span> <span m="3217120">have</span> <span
  m="3217290">two</span> <span m="3217460">cases.</span> <span
  m="3223530">The</span> <span m="3224610">first</span> <span
  m="3224900">case</span> <span m="3225220">is</span> <span
  m="3225370">that</span> <span m="3225560">gcd</span> <span
  m="3227510">of</span> <span m="3227850">m,</span> <span m="3228500">p</span>
  <span m="3230050">is</span> <span m="3230760">exactly</span> <span
  m="3231210">1,</span> <span m="3232880">which</span> <span
  m="3233030">means</span> <span m="3233250">that</span> <span
  m="3233600">the</span> <span m="3233750">message</span> <span
  m="3234290">m.</span> <span m="3234620">So</span> <span
  m="3234790">what</span> <span m="3234930">I'm</span> <span
  m="3235030">comparing</span> <span m="3235500">here,</span> <span
  m="3236120">the</span> <span m="3236220">two</span> <span
  m="3236370">cases,</span> <span m="3236860">is</span> <span
  m="3237080">I</span> <span m="3237150">have</span> <span
  m="3237290">the</span> <span m="3237370">message.</span> <span
  m="3238220">And</span> <span m="3238380">I'm</span> <span
  m="3238460">going</span> <span m="3238570">to</span> <span
  m="3238620">break</span> <span m="3238900">up</span> <span
  m="3239030">the</span> <span m="3239100">messages</span> <span
  m="3239920">into</span> <span m="3240190">two</span> <span
  m="3240840">different</span> <span m="3241250">categories.</span></p><p><span
  m="3242010">That's</span> <span m="3242250">it.</span> <span m="3243080">There
  are</span> <span m="3243410">all</span> <span m="3243690">kinds</span> <span
  m="3243970">of</span> <span m="3244040">messages</span> <span m="3244480">that
  are</span> <span m="3244650">possible.</span> <span m="3245140">These</span>
  <span m="3245340">are</span> <span m="3245440">arbitrary</span> <span
  m="3245850">numbers.</span> <span m="3246670">I'm</span> <span
  m="3246780">going</span> <span m="3246880">to</span> <span
  m="3246920">break</span> <span m="3247160">them</span> <span
  m="3247300">up</span> <span m="3247470">into</span> <span
  m="3247740">two</span> <span m="3248790">categories,</span> <span
  m="3249700">one</span> <span m="3250030">of which</span> <span
  m="3250410">where</span> <span m="3250580">the</span> <span
  m="3250650">message</span> <span m="3251530">is</span> <span
  m="3251710">relatively</span> <span m="3252750">prime</span> <span
  m="3253230">in</span> <span m="3253370">relation</span> <span
  m="3253760">to</span> <span m="3253830">the</span> <span
  m="3254570">prime,</span> <span m="3254860">p.</span></p><p><span
  m="3256080">And</span> <span m="3256540">it's</span> <span
  m="3256660">not</span> <span m="3256820">a</span> <span
  m="3256860">multiple</span> <span m="3257300">of</span> <span
  m="3257400">p.</span> <span m="3257800">That's</span> <span
  m="3258000">the</span> <span m="3258060">way</span> <span
  m="3258150">you</span> <span m="3258230">want</span> <span
  m="3258320">to</span> <span m="3258360">think</span> <span
  m="3258500">about</span> <span m="3258900">it.</span> <span
  m="3259460">Obviously,</span> <span m="3259810">gcdmp</span> <span
  m="3261390">would</span> <span m="3261520">be</span> <span
  m="3261690">2</span> <span m="3262040">if</span> <span m="3262270">M</span>
  <span m="3262430">were</span> <span m="3262720">2p.</span> <span
  m="3264100">So</span> <span m="3264980">the case</span> <span
  m="3265080">I'm</span> <span m="3265170">looking</span> <span
  m="3265430">at</span> <span m="3265610">is</span> <span m="3266490">gcd</span>
  <span m="3266980">of</span> <span m="3267080">mp</span> <span
  m="3267390">equals</span> <span m="3267730">1.</span></p><p><span
  m="3268850">And</span> <span m="3269125">then the</span> <span
  m="3269400">another</span> <span m="3269710">case</span> <span
  m="3270550">is</span> <span m="3270760">going</span> <span
  m="3270930">to</span> <span m="3270990">be</span> <span
  m="3271700">trivial,</span> <span m="3272015">actually,</span> <span
  m="3272330">which is</span> <span m="3272810">gcd</span> <span
  m="3274060">of</span> <span m="3274280">mp</span> <span
  m="3276320">equals</span> <span m="3276690">p.</span> <span m="3278060">Did
  I</span> <span m="3278250">say 2</span> <span m="3278830">when</span> <span
  m="3279240">I</span> <span m="3279390">said</span> <span
  m="3279600">gcd</span> <span m="3280090">of</span> <span
  m="3280210">2p,</span> <span m="3280980">p</span> <span
  m="3281220">equals</span> <span m="3281560">2?</span> <span
  m="3282110">Come</span> <span m="3282310">on.</span> <span
  m="3285100">Wake</span> <span m="3285470">up.</span> <span
  m="3285680">Wow,</span> <span m="3285870">that's</span> <span
  m="3286070">it.</span></p><p><span m="3286260">Perfect.</span> <span
  m="3287250">Wake up.</span> <span m="3288230">OK.</span> <span
  m="3289710">So</span> <span m="3290960">gcd</span> <span m="3291240">of</span>
  <span m="3291330">2p</span> <span m="3291760">and</span> <span
  m="3291880">p</span> <span m="3292180">is</span> <span m="3292650">p.</span>
  <span m="3293770">So</span> <span m="3293920">those</span> <span
  m="3294130">are</span> <span m="3294180">the</span> <span
  m="3294280">two</span> <span m="3294420">cases.</span> <span
  m="3297290">All</span> <span m="3297390">right.</span> <span
  m="3299060">So</span> <span m="3299680">by</span> <span
  m="3301160">Fermat's</span> <span m="3302340">Little</span> <span
  m="3302650">Theorem,</span> <span m="3305540">this</span> <span
  m="3305690">is</span> <span m="3305760">really</span> <span
  m="3305970">Fermat's</span> <span m="3306360">theorem.</span> <span
  m="3306700">And</span> <span m="3306800">because</span> <span
  m="3307020">he</span> <span m="3307100">had</span> <span m="3307220">a</span>
  <span m="3307270">last</span> <span m="3307620">theorem,</span> <span
  m="3308170">for</span> <span m="3308470">some</span> <span
  m="3308650">reason,</span> <span m="3308920">some</span> <span
  m="3309100">people</span> <span m="3309360">call</span> <span
  m="3309560">this</span> <span m="3309720">the</span> <span
  m="3309810">Little</span> <span m="3310020">Theorem.</span></p><p><span
  m="3311560">But</span> <span m="3311790">it's</span> <span
  m="3311940">Fermat's</span> <span m="3312220">theorem.</span> <span
  m="3312960">And</span> <span m="3314220">we</span> <span
  m="3314500">know</span> <span m="3314750">what</span> <span
  m="3314850">that</span> <span m="3315050">is.</span> <span
  m="3315270">I</span> <span m="3315350">just</span> <span
  m="3315520">wrote</span> <span m="3315700">that</span> <span
  m="3315840">out</span> <span m="3316020">there.</span></p><p><span
  m="3317500">You</span> <span m="3317670">can</span> <span
  m="3317810">now</span> <span m="3318030">write</span> <span
  m="3318820">something</span> <span m="3319240">that</span> <span
  m="3320520">says</span> <span m="3321170">what</span> <span
  m="3321330">I'm</span> <span m="3321400">going</span> <span
  m="3321550">to</span> <span m="3321620">do</span> <span m="3321810">is</span>
  <span m="3321930">I'm</span> <span m="3322030">going</span> <span
  m="3322130">to</span> <span m="3322180">just</span> <span
  m="3322430">take</span> <span m="3326350">m</span> <span
  m="3326705">raised</span> <span m="3327060">to</span> <span
  m="3329400">p</span> <span m="3329650">minus</span> <span
  m="3330010">1,</span> <span m="3330530">which</span> <span
  m="3330700">is</span> <span m="3330810">1.</span> <span m="3332030">So</span>
  <span m="3332110">this</span> <span m="3332330">thing</span> <span
  m="3332500">is</span> <span m="3332650">1.</span> <span m="3333600">And</span>
  <span m="3333730">then</span> <span m="3333870">I'm</span> <span
  m="3333950">going</span> <span m="3334070">to</span> <span
  m="3334150">raise</span> <span m="3334620">it</span> <span
  m="3334870">to</span> <span m="3335660">k</span> <span
  m="3335960">times</span> <span m="3336470">q</span> <span
  m="3336740">minus</span> <span m="3337060">1.</span></p><p><span
  m="3337530">And you'll</span> <span m="3337660">see</span> <span
  m="3337820">why</span> <span m="3337910">I'm</span> <span
  m="3338010">doing</span> <span m="3338180">this</span> <span
  m="3338330">in</span> <span m="3338410">a</span> <span
  m="3338460">second.</span> <span m="3339170">Because</span> <span
  m="3339440">I</span> <span m="3339480">want</span> <span m="3339640">to</span>
  <span m="3339680">get</span> <span m="3340180">the</span> <span
  m="3340260">1</span> <span m="3340500">plus k</span> <span
  m="3340920">phi</span> <span m="3341210">factor</span> <span
  m="3341670">here.</span> <span m="3342270">So</span> <span
  m="3342380">I'm</span> <span m="3342480">taking</span> <span
  m="3342780">1</span> <span m="3343520">and</span> <span m="3343650">I'm</span>
  <span m="3343740">raising</span> <span m="3344250">it</span> <span
  m="3344730">to</span> <span m="3344860">this</span> <span
  m="3345120">power,</span> <span m="3345620">which</span> <span
  m="3345780">obviously</span> <span m="3346070">is</span> <span
  m="3346130">going</span> <span m="3346230">to</span> <span
  m="3346270">give</span> <span m="3346370">me</span> <span m="3346480">1</span>
  <span m="3346750">back.</span> <span m="3347570">So</span> <span
  m="3347720">all</span> <span m="3347810">of</span> <span
  m="3347890">that</span> <span m="3348120">is</span> <span
  m="3349770">straightforward.</span></p><p><span m="3351100">And</span> <span
  m="3351230">then</span> <span m="3351390">I'm</span> <span
  m="3351460">going</span> <span m="3351560">to</span> <span
  m="3351600">multiply</span> <span m="3351970">this</span> <span
  m="3352180">by</span> <span m="3352400">m.</span> <span m="3353460">OK.</span>
  <span m="3354550">And</span> <span m="3355130">this</span> <span
  m="3355310">is</span> <span m="3355460">clearly</span> <span
  m="3357600">the</span> <span m="3357830">same</span> <span
  m="3358990">as</span> <span m="3359300">m</span> <span m="3359605">mod</span>
  <span m="3359910">p.</span> <span m="3362310">Because</span> <span
  m="3362560">all</span> <span m="3362700">I've</span> <span
  m="3362810">done</span> <span m="3363020">is</span> <span m="3363600">multiply
  it</span> <span m="3365460">by</span> <span m="3365590">1.</span> <span
  m="3366450">All</span> <span m="3366510">right.</span> <span
  m="3366820">So</span> <span m="3367040">why</span> <span
  m="3367210">did</span> <span m="3367360">I</span> <span m="3367410">do</span>
  <span m="3367590">this?</span></p><p><span m="3368310">Well,</span> <span
  m="3368610">I</span> <span m="3368710">did</span> <span
  m="3368920">this,</span> <span m="3369130">because</span> <span
  m="3369850">I</span> <span m="3369970">want</span> <span m="3370140">to</span>
  <span m="3370200">group</span> <span m="3370520">together</span> <span
  m="3371570">these</span> <span m="3371910">two</span> <span
  m="3372500">exponents.</span> <span m="3373570">And</span> <span
  m="3374160">since</span> <span m="3374350">I've run</span> <span
  m="3374490">out</span> <span m="3374720">of</span> <span
  m="3374810">room</span> <span m="3375050">here,</span> <span
  m="3376990">let</span> <span m="3377100">me</span> <span
  m="3377170">just</span> <span m="3377350">erase</span> <span
  m="3378250">and</span> <span m="3378470">finish</span> <span
  m="3378700">this</span> <span m="3378890">properly.</span> <span
  m="3379750">The</span> <span m="3379770">other</span> <span m="3380000">case
  is</span> <span m="3380380">easy</span> <span
  m="3380710">anyway.</span></p><p><span m="3381940">And</span> <span
  m="3382200">so</span> <span m="3382340">I</span> <span m="3382440">can</span>
  <span m="3382580">write</span> <span m="3382820">this</span> <span
  m="3383110">as</span> <span m="3383910">1</span> <span m="3384300">plus</span>
  <span m="3384670">k</span> <span m="3386278">p</span> <span
  m="3386680">minus</span> <span m="3387050">1</span> <span m="3388210">q</span>
  <span m="3388550">minus</span> <span m="3388900">1.</span> <span
  m="3390376">And</span> <span m="3390870">that,</span> <span
  m="3391030">of</span> <span m="3391130">course,</span> <span
  m="3391440">is</span> <span m="3391880">exactly</span> <span
  m="3393110">m</span> <span m="3393395">raised</span> <span
  m="3393680">to</span> <span m="3394065">ed,</span> <span
  m="3395380">right?</span> <span m="3396450">And</span> <span
  m="3397250">so</span> <span m="3397390">what</span> <span
  m="3397510">I've</span> <span m="3397600">done</span> <span
  m="3397800">here</span> <span m="3398090">is,</span> <span
  m="3399290">because</span> <span m="3399870">1</span> <span
  m="3400260">times</span> <span m="3400720">m</span> <span
  m="3400960">is</span> <span m="3401100">clearly</span> <span
  m="3401430">m,</span> <span m="3402050">but</span> <span m="3402200">if</span>
  <span m="3402290">I</span> <span m="3402330">look</span> <span
  m="3402500">at</span> <span m="3402580">this,</span> <span m="3402980">this
  is</span> <span m="3404100">m</span> <span m="3404850">raised</span> <span
  m="3405160">to</span> <span m="3405535">ed.</span> <span m="3405910">So</span>
  <span m="3406090">that's</span> <span m="3407780">clearly</span> <span
  m="3408045">m.</span></p><p><span m="3409080">That's</span> <span
  m="3409260">it.</span> <span m="3411760">Just</span> <span
  m="3412320">figured</span> <span m="3412620">out</span> <span
  m="3412830">that</span> <span m="3413360">when</span> <span
  m="3413580">I</span> <span m="3413670">have</span> <span m="3414630">k</span>
  <span m="3414860">phi</span> <span m="3415160">here,</span> <span
  m="3416540">that's</span> <span m="3416720">going</span> <span
  m="3416830">to</span> <span m="3416900">turn</span> <span
  m="3417050">into</span> <span m="3417200">1,</span> <span
  m="3418030">basically,</span> <span m="3418680">when you</span> <span
  m="3419170">exponentiate it.</span> <span m="3421550">So</span> <span
  m="3421680">that's</span> <span m="3423420">the</span> <span
  m="3423500">hard</span> <span m="3423720">part,</span> <span
  m="3423930">actually,</span> <span m="3424280">as</span> <span
  m="3424370">it</span> <span m="3424470">turns</span> <span
  m="3424720">out,</span> <span m="3425350">of</span> <span
  m="3426400">proving</span> <span m="3426910">RSA's</span> <span
  m="3428070">correctness,</span> <span m="3429100">just</span> <span
  m="3429400">introducing</span> <span m="3429900">this</span> <span
  m="3431360">1</span> <span m="3431650">raised</span> <span
  m="3431910">to</span> <span m="3432000">something.</span> <span
  m="3432770">And</span> <span m="3432910">then</span> <span
  m="3433120">the</span> <span m="3433980">easier</span> <span
  m="3434360">part</span> <span m="3434760">is</span> <span
  m="3434900">simply</span> <span m="3436360">the</span> <span
  m="3436460">case</span> <span m="3436820">where</span> <span
  m="3438000">the</span> <span m="3438310">m</span> <span m="3438750">is</span>
  <span m="3438970">actually</span> <span m="3439250">a</span> <span
  m="3439300">multiple</span> <span m="3439750">of</span> <span
  m="3439890">p.</span></p><p><span m="3440560">So</span> <span
  m="3440710">you</span> <span m="3440810">have</span> <span
  m="3441100">a</span> <span m="3441160">gcd</span> <span m="3442290">m,</span>
  <span m="3442820">comma</span> <span m="3443100">p</span> <span
  m="3444030">equals</span> <span m="3444530">p.</span> <span
  m="3446000">And</span> <span m="3446320">in</span> <span
  m="3446640">this</span> <span m="3446790">case,</span> <span m="3447670">you
  know that</span> <span m="3447860">m</span> <span m="3448180">mod</span> <span
  m="3448440">p</span> <span m="3448825">is</span> <span
  m="3449980">actually</span> <span m="3450270">0.</span> <span
  m="3451940">Because</span> <span m="3452230">m</span> <span
  m="3452730">is</span> <span m="3452860">a</span> <span
  m="3452910">multiple</span> <span m="3453270">of</span> <span
  m="3453380">p.</span> <span m="3454360">So</span> <span
  m="3454580">you're</span> <span m="3454690">basically</span> <span
  m="3455140">exponentiating</span> <span m="3456090">0.</span></p><p><span
  m="3456530">What</span> <span m="3456660">do</span> <span
  m="3456820">you</span> <span m="3456920">do</span> <span
  m="3457100">with</span> <span m="3457200">0?</span> <span
  m="3457860">You're</span> <span m="3458110">going to get</span> <span
  m="3458260">0</span> <span m="3458570">on</span> <span m="3458680">both</span>
  <span m="3458860">sides.</span> <span m="3460220">So</span> <span
  m="3460460">you're</span> <span m="3460810">sending</span> <span
  m="3461050">a</span> <span m="3461090">message</span> <span
  m="3461480">that's</span> <span m="3462540">essentially</span> <span
  m="3462990">0</span> <span m="3463880">mod</span> <span m="3464160">p</span>
  <span m="3464790">And</span> <span m="3465430">when</span> <span
  m="3465580">you</span> <span m="3465650">decrypt</span> <span
  m="3466010">it</span> <span m="3466120">on</span> <span
  m="3466240">that</span> <span m="3466410">side,</span> <span
  m="3466810">you</span> <span m="3467180">get</span> <span
  m="3467300">0.</span></p><p><span m="3468010">But</span> <span
  m="3469150">one</span> <span m="3469430">last</span> <span
  m="3469700">line</span> <span m="3469990">here</span> <span
  m="3470770">is</span> <span m="3471220">simply</span> <span
  m="3471520">that</span> <span m="3472190">m</span> <span
  m="3472380">raised</span> <span m="3472710">to</span> <span
  m="3472840">ed</span> <span m="3474800">is</span> <span m="3476180">m</span>
  <span m="3477270">trivially</span> <span m="3480010">all</span> <span
  m="3480260">of</span> <span m="3480380">this</span> <span
  m="3480540">mod</span> <span m="3480875">p</span> <span m="3481620">if</span>
  <span m="3481790">m</span> <span m="3481990">is</span> <span
  m="3482080">0,</span> <span m="3482910">right?</span> <span
  m="3484090">So</span> <span m="3484930">that</span> <span m="3485040">was
  the</span> <span m="3485160">easy</span> <span m="3485420">case.</span> <span
  m="3486020">So</span> <span m="3486230">it</span> <span m="3486460">was</span>
  <span m="3486570">really</span> <span m="3486780">pretty</span> <span
  m="3486940">straightforward.</span></p><p><span m="3487450">In</span> <span
  m="3487540">one</span> <span m="3487750">case,</span> <span
  m="3488300">we</span> <span m="3488450">took</span> <span m="3488590">1</span>
  <span m="3488950">and</span> <span m="3489080">we</span> <span
  m="3489180">exponentiated</span> <span m="3489850">it</span> <span
  m="3490290">and</span> <span m="3490460">showed</span> <span
  m="3490640">the</span> <span m="3490750">result</span> <span
  m="3491150">in</span> <span m="3491240">a</span> <span
  m="3491280">couple</span> <span m="3491520">steps.</span> <span m="3492170">In
  the other</span> <span m="3492460">case,</span> <span m="3492670">you</span>
  <span m="3492760">had</span> <span m="3492910">messages</span> <span
  m="3493350">that</span> <span m="3493470">were</span> <span
  m="3493750">0</span> <span m="3494060">mod p.</span> <span
  m="3495240">So</span> <span m="3495370">it's</span> <span
  m="3495530">very</span> <span m="3495730">pretty.</span> <span
  m="3496370">It</span> <span m="3496520">works.</span></p><p><span
  m="3497870">And</span> <span m="3499330">so</span> <span
  m="3499610">what</span> <span m="3499820">happened</span> <span
  m="3500130">here?</span> <span m="3500890">I</span> <span
  m="3501010">said</span> <span m="3501220">that</span> <span
  m="3501350">m</span> <span m="3501520">raised</span> <span
  m="3501760">to</span> <span m="3501840">ed</span> <span
  m="3502340">equals</span> <span m="3502690">m.</span> <span
  m="3503740">And</span> <span m="3504690">what</span> <span
  m="3504920">I</span> <span m="3504980">did</span> <span
  m="3505190">here,</span> <span m="3505480">of</span> <span
  m="3505580">course,</span> <span m="3506410">was</span> <span
  m="3506600">I</span> <span m="3506670">did</span> <span
  m="3506920">everything.</span> <span m="3507500">So</span> <span
  m="3507600">it's</span> <span m="3507710">not</span> <span
  m="3507930">quite</span> <span m="3508330">done,</span> <span
  m="3509180">a</span> <span m="3509440">little</span> <span
  m="3509680">slight</span> <span m="3509970">of</span> <span
  m="3510050">hand</span> <span m="3510350">here</span> <span
  m="3510740">as</span> <span m="3510990">I</span> <span
  m="3511470">switched</span> <span m="3511920">over</span> <span
  m="3512610">and</span> <span m="3512840">talked</span> <span
  m="3513120">about</span> <span m="3513480">mod</span> <span
  m="3513990">p.</span></p><p><span m="3515120">So</span> <span
  m="3515250">I</span> <span m="3515370">had</span> <span m="3515890">mod</span>
  <span m="3516200">p</span> <span m="3516480">over</span> <span
  m="3516640">here.</span> <span m="3517410">And</span> <span
  m="3517550">I</span> <span m="3517600">said</span> <span m="3517820">p</span>
  <span m="3517950">and q</span> <span m="3518210">were</span> <span
  m="3518470">primes.</span> <span m="3519340">And</span> <span
  m="3520660">I</span> <span m="3520740">looked</span> <span
  m="3520940">at</span> <span m="3521120">p</span> <span
  m="3521380">first.</span> <span m="3522770">But</span> <span
  m="3522980">what</span> <span m="3523140">I</span> <span
  m="3523190">need</span> <span m="3523390">to</span> <span
  m="3523490">do,</span> <span m="3523900">just</span> <span
  m="3524090">to</span> <span m="3524160">finish</span> <span
  m="3524390">this</span> <span m="3524610">off,</span> <span
  m="3525690">let</span> <span m="3525810">me</span> <span m="3525890">do</span>
  <span m="3525970">this</span> <span m="3526160">over</span> <span
  m="3526330">here,</span> <span m="3527440">is</span> <span
  m="3527680">I</span> <span m="3527770">have</span> <span m="3527880">to</span>
  <span m="3527980">do</span> <span m="3528100">the</span> <span
  m="3528200">same</span> <span m="3528520">argument</span> <span
  m="3528980">for</span> <span m="3529140">q.</span> <span
  m="3530541">And</span> <span m="3531010">I'm</span> <span
  m="3531090">going</span> <span m="3531220">to</span> <span
  m="3531690">put</span> <span m="3531870">it</span> <span
  m="3531970">together</span> <span m="3533530">for</span> <span
  m="3535000">n.</span></p><p><span m="3536160">And</span> <span
  m="3536360">the</span> <span m="3536440">reason</span> <span
  m="3536710">for</span> <span m="3536830">that</span> <span
  m="3537720">is</span> <span m="3537890">simply</span> <span
  m="3538220">that</span> <span m="3538380">I</span> <span
  m="3538460">have</span> <span m="3538710">n</span> <span
  m="3539000">over</span> <span m="3539260">here.</span> <span
  m="3540530">So</span> <span m="3540620">remember</span> <span
  m="3540920">n</span> <span m="3541160">equals</span> <span
  m="3541540">p</span> <span m="3541740">times</span> <span
  m="3542190">q.</span> <span m="3543050">The</span> <span
  m="3544250">encryption</span> <span m="3544920">and</span> <span
  m="3545060">that</span> <span m="3545330">decryption</span> <span
  m="3546460">are</span> <span m="3546890">going</span> <span
  m="3547170">to</span> <span m="3547290">be</span> <span
  m="3547970">done</span> <span m="3548580">mod</span> <span
  m="3549070">o.</span> <span m="3549580">Certainly,</span> <span
  m="3549910">the</span> <span m="3549990">encryption</span> <span
  m="3550850">has</span> <span m="3551110">to</span> <span m="3551200">be</span>
  <span m="3551320">done</span> <span m="3551670">mod</span> <span
  m="3551970">n,</span> <span m="3552740">because</span> <span
  m="3553010">n</span> <span m="3553210">is</span> <span m="3553340">only</span>
  <span m="3553610">public</span> <span m="3554430">number</span> <span
  m="3554750">that</span> <span m="3554910">you</span> <span
  m="3555010">have</span> <span m="3555760">that you</span> <span
  m="3555910">can</span> <span m="3556180">mod</span> <span
  m="3556450">with,</span> <span m="3557090">correct?</span></p><p><span
  m="3557670">So</span> <span m="3558140">what</span> <span
  m="3558290">I've</span> <span m="3558390">done</span> <span
  m="3558600">here,</span> <span m="3558960">this</span> <span
  m="3559120">analysis</span> <span m="3559830">is</span> <span
  m="3560210">for</span> <span m="3560370">p,</span> <span
  m="3561440">can</span> <span m="3561570">do the</span> <span
  m="3561710">same</span> <span m="3564330">for</span> <span
  m="3565160">q.</span> <span m="3566550">It's</span> <span
  m="3566640">exactly</span> <span m="3567000">the</span> <span
  m="3567120">same,</span> <span m="3568080">because</span> <span
  m="3568530">p</span> <span m="3568690">is</span> <span m="3568790">a</span>
  <span m="3568850">prime</span> <span m="3569250">and</span> <span
  m="3569360">q</span> <span m="3569550">is</span> <span m="3569650">also</span>
  <span m="3569940">a</span> <span m="3570010">prime.</span> <span
  m="3571710">But</span> <span m="3572480">I</span> <span
  m="3572620">have</span> <span m="3572720">to</span> <span
  m="3572810">just</span> <span m="3573240">do</span> <span
  m="3573380">one</span> <span m="3573620">last</span> <span
  m="3573940">thing,</span> <span m="3574150">which</span> <span
  m="3574240">is</span> <span m="3574420">put</span> <span
  m="3574580">these</span> <span m="3574770">two</span> <span
  m="3574910">things</span> <span m="3575140">together</span> <span
  m="3575960">and</span> <span m="3576460">say</span> <span
  m="3576680">that</span> <span m="3577310">n</span> <span
  m="3577520">equals</span> <span m="3577850">p</span> <span
  m="3578040">times</span> <span m="3578440">q,</span> <span
  m="3579130">so</span> <span m="3579400">the</span> <span
  m="3579500">math</span> <span m="3579720">is</span> <span m="3579820">all
  going to</span> <span m="3580070">work</span> <span
  m="3580280">out.</span></p><p><span m="3581480">Let me</span> <span
  m="3581570">just</span> <span m="3581740">write</span> <span
  m="3581910">that</span> <span m="3582020">out.</span> <span
  m="3582570">It's</span> <span m="3583260">not</span> <span
  m="3583490">too</span> <span m="3583580">difficult</span> <span
  m="3584790">to</span> <span m="3585040">explain,</span> <span
  m="3585740">once</span> <span m="3585960">I</span> <span
  m="3586000">have</span> <span m="3586200">this</span> <span
  m="3586350">up</span> <span m="3586510">here.</span> <span
  m="3587750">So</span> <span m="3588160">in</span> <span
  m="3588300">both</span> <span m="3588620">cases</span> <span
  m="3589300">of</span> <span m="3589480">p</span> <span m="3589720">and</span>
  <span m="3589840">q,</span> <span m="3590910">so when</span> <span
  m="3591040">I say</span> <span m="3591190">both</span> <span
  m="3591620">cases,</span> <span m="3592100">I</span> <span
  m="3592140">mean</span> <span m="3592790">the</span> <span
  m="3592910">pk's</span> <span m="3593280">and</span> <span
  m="3593400">qk's.</span> <span m="3595330">I</span> <span
  m="3595500">have</span> <span m="3595920">m raised</span> <span
  m="3596560">to</span> <span m="3596860">ed</span> <span
  m="3598250">equals</span> <span m="3598800">m</span> <span
  m="3599870">mod</span> <span m="3600340">p.</span> <span
  m="3602070">And</span> <span m="3602420">m</span> <span
  m="3602630">raised</span> <span m="3602930">to</span> <span
  m="3603060">ed</span> <span m="3604500">is</span> <span m="3604710">the</span>
  <span m="3604780">same</span> <span m="3605070">as</span> <span
  m="3605220">m</span> <span m="3606480">mod q.</span></p><p><span
  m="3609320">And</span> <span m="3609690">since</span> <span
  m="3610490">p</span> <span m="3610690">and</span> <span m="3610850">q</span>
  <span m="3612920">are</span> <span m="3613120">distinct</span> <span
  m="3613640">primes,</span> <span m="3619810">we</span> <span
  m="3620280">can</span> <span m="3620380">say</span> <span
  m="3620650">that</span> <span m="3620850">m raised</span> <span
  m="3621280">to</span> <span m="3621420">ed</span> <span
  m="3622500">equals</span> <span m="3623230">m</span> <span
  m="3624222">mod</span> <span m="3624720">N.</span> <span
  m="3627690">And</span> <span m="3628350">that</span> <span
  m="3628660">essentially</span> <span m="3629070">says</span> <span
  m="3629320">c</span> <span m="3629720">raised</span> <span
  m="3629980">to</span> <span m="3630120">d,</span> <span m="3630865">if</span>
  <span m="3631140">you</span> <span m="3631250">really</span> <span
  m="3631410">want</span> <span m="3631520">to</span> <span
  m="3631560">put</span> <span m="3631690">it</span> <span
  m="3631740">all</span> <span m="3631900">together,</span> <span
  m="3632810">which</span> <span m="3633000">is</span> <span
  m="3633120">m</span> <span m="3633290">raised</span> <span
  m="3633560">to</span> <span m="3633680">e</span> <span
  m="3634580">raised</span> <span m="3634860">to</span> <span
  m="3634940">d,</span> <span m="3636320">equals</span> <span
  m="3636790">m</span> <span m="3638414">mod</span> <span m="3638820">N,</span>
  <span m="3641420">which</span> <span m="3641590">of</span> <span
  m="3641700">course</span> <span m="3643120">is</span> <span
  m="3644130">what</span> <span m="3644310">we</span> <span
  m="3644400">want</span> <span m="3644590">here.</span> <span
  m="3645530">And</span> <span m="3645640">this</span> <span
  m="3645770">thing</span> <span m="3645890">was</span> <span
  m="3646000">also</span> <span m="3646230">mod</span> <span
  m="3647020">N.</span> <span m="3648910">This</span> <span
  m="3649010">is</span> <span m="3649150">mod N,</span> <span m="3649445">mod
  N,</span> <span m="3649740">mod</span> <span m="3649970">N.</span></p><p><span
  m="3651000">All</span> <span m="3651110">right.</span> <span
  m="3652270">So</span> <span m="3652430">that's</span> <span
  m="3652610">RSA.</span> <span m="3653090">That's</span> <span
  m="3653270">your</span> <span m="3653390">first</span> <span
  m="3654420">public</span> <span m="3654730">key</span> <span
  m="3654930">algorithm,</span> <span m="3655400">the</span> <span
  m="3655620">first</span> <span m="3655920">public</span> <span
  m="3656170">key</span> <span m="3656320">algorithm,</span> <span
  m="3657230">at least</span> <span m="3657560">that</span> <span
  m="3657750">stood</span> <span m="3657910">the</span> <span
  m="3658050">test</span> <span m="3658290">of</span> <span
  m="3658390">time,</span> <span m="3659190">still</span> <span
  m="3659470">in</span> <span m="3659540">use</span> <span
  m="3659800">today.</span> <span m="3663900">From</span> <span
  m="3664060">a</span> <span m="3664110">standpoint</span> <span
  m="3664500">of</span> <span m="3664580">computation,</span> <span
  m="3666430">this</span> <span m="3666690">is</span> <span
  m="3667600">the</span> <span m="3667750">hardest</span> <span
  m="3668150">part.</span> <span m="3669670">You</span> <span
  m="3669840">have</span> <span m="3669990">to</span> <span
  m="3670140">exponentiate,</span> <span m="3670866">and</span> <span
  m="3671230">you</span> <span m="3671380">have</span> <span
  m="3671560">these</span> <span m="3671730">large</span> <span
  m="3672100">numbers.</span></p><p><span m="3672900">And</span> <span
  m="3674360">as</span> <span m="3674810">the</span> <span
  m="3674920">years</span> <span m="3675190">have</span> <span
  m="3675310">rolled</span> <span m="3675610">by,</span> <span
  m="3677870">RSA,</span> <span m="3678530">as</span> <span
  m="3678700">I've</span> <span m="3678740">said,</span> <span
  m="3679000">withstood</span> <span m="3679340">the</span> <span
  m="3679410">test</span> <span m="3679660">of</span> <span
  m="3679750">time.</span> <span m="3680400">But</span> <span
  m="3680560">the</span> <span m="3680650">parameters</span> <span
  m="3681710">have</span> <span m="3682040">increased.</span> <span
  m="3683140">Way</span> <span m="3683320">back</span> <span
  m="3683620">then</span> <span m="3684350">in</span> <span
  m="3684460">the</span> <span m="3684550">'70s,</span> <span
  m="3685060">they</span> <span m="3685130">were</span> <span
  m="3685210">thinking</span> <span m="3685460">about</span> <span
  m="3685730">512-bit</span> <span m="3687760">primes.</span> <span
  m="3688960">In</span> <span m="3689060">fact,</span> <span
  m="3689380">I</span> <span m="3689560">can't</span> <span
  m="3689760">recall</span> <span m="3690070">whether</span> <span
  m="3690430">n</span> <span m="3690860">was</span> <span
  m="3691080">512-bits</span> <span m="3691385">or</span> <span m="3691950">p
  and q</span> <span m="3692610">were</span> <span m="3692760">512-bits.</span>
  <span m="3693440">But</span> <span m="3693950">if</span> <span m="3694100">p
  and</span> <span m="3694180">q</span> <span m="3694470">were</span> <span
  m="3694600">512-bits,</span> <span m="3695220">then</span> <span
  m="3695350">n</span> <span m="3695560">would</span> <span
  m="3695670">be</span> <span m="3695800">1024.</span></p><p><span
  m="3696940">And</span> <span m="3697140">now,</span> <span
  m="3698540">NSA</span> <span m="3698970">recommends</span> <span
  m="3700150">8192-bits</span> <span m="3701740">for</span> <span
  m="3702690">n.</span> <span m="3703330">So</span> <span
  m="3703470">there's</span> <span m="3703650">been</span> <span
  m="3703810">an</span> <span m="3703910">increase.</span> <span
  m="3704660">But</span> <span m="3704810">the</span> <span
  m="3704860">nice</span> <span m="3705070">thing</span> <span
  m="3705240">is</span> <span m="3705380">that</span> <span
  m="3706150">it's</span> <span m="3706640">not</span> <span
  m="3706870">like</span> <span m="3708180">there's</span> <span
  m="3708410">an</span> <span m="3708550">exponential</span> <span
  m="3709950">increase</span> <span m="3710530">in</span> <span
  m="3710710">the</span> <span m="3710820">computation.</span> <span
  m="3712040">Because</span> <span m="3712350">the</span> <span
  m="3712470">computation</span> <span m="3713200">is</span> <span
  m="3713890">polynomially</span> <span m="3715110">related</span> <span
  m="3715910">to</span> <span m="3715980">the</span> <span
  m="3716070">number</span> <span m="3716320">of</span> <span
  m="3716380">bits.</span></p><p><span m="3717570">So</span> <span
  m="3718080">if</span> <span m="3719110">you</span> <span
  m="3719260">double</span> <span m="3719650">it,</span> <span
  m="3719960">I</span> <span m="3720230">think,</span> <span
  m="3720630">if</span> <span m="3720690">I</span> <span
  m="3720870">recall</span> <span m="3721150">correctly,</span> <span
  m="3721560">decryption</span> <span m="3722510">is</span> <span
  m="3722700">going</span> <span m="3722920">to</span> <span
  m="3722980">be</span> <span m="3723370">the</span> <span
  m="3723550">cube</span> <span m="3723940">of</span> <span
  m="3724060">that.</span> <span m="3724430">Or</span> <span
  m="3724750">actually,</span> <span m="3725020">verifying</span> <span
  m="3725450">signatures</span> <span m="3726370">is</span> <span
  m="3726510">probably</span> <span m="3726790">the</span> <span
  m="3726890">cube</span> <span m="3727170">of</span> <span
  m="3727260">that.</span> <span m="3727820">But</span> <span
  m="3729340">don't</span> <span m="3729970">worry</span> <span
  m="3730160">too</span> <span m="3730270">much</span> <span
  m="3730460">about</span> <span m="3730680">that.</span> <span
  m="3731470">The</span> <span m="3731550">bottom</span> <span
  m="3731870">line</span> <span m="3732170">is</span> <span
  m="3732370">that</span> <span m="3733020">as</span> <span
  m="3733350">you</span> <span m="3733550">double</span> <span
  m="3735950">the</span> <span m="3736150">size</span> <span
  m="3736550">of</span> <span m="3736640">the</span> <span
  m="3736700">exponent,</span> <span m="3737750">you're</span> <span
  m="3737920">going</span> <span m="3738050">to</span> <span
  m="3738090">have</span> <span m="3738420">a</span> <span
  m="3738650">fairly</span> <span m="3739030">small</span> <span
  m="3739800">increase</span> <span m="3740520">in</span> <span
  m="3740780">the</span> <span m="3741650">time</span> <span
  m="3741980">required</span> <span m="3742530">to</span> <span
  m="3742630">decrypt</span> <span m="3743460">or</span> <span
  m="3743630">to</span> <span m="3743690">verify a</span> <span
  m="3744090">signature,</span> <span m="3745170">et cetera.</span> <span
  m="3746460">But</span> <span m="3746650">it</span> <span
  m="3746730">has</span> <span m="3746960">grown</span> <span
  m="3747230">from</span> <span m="3747400">512</span> <span
  m="3748340">or</span> <span m="3748480">1024</span> <span
  m="3749760">to</span> <span m="3750070">8192.</span></p><p><span
  m="3752270">And</span> <span m="3752440">so</span> <span
  m="3753290">hopefully,</span> <span m="3753550">you</span> <span
  m="3753640">all</span> <span m="3753930">understand</span> <span
  m="3755160">how</span> <span m="3755400">RSA</span> <span
  m="3755780">works</span> <span m="3756240">to</span> <span
  m="3756460">some</span> <span m="3756680">extent.</span> <span
  m="3758340">I</span> <span m="3758480">just</span> <span m="3758910">will
  leave</span> <span m="3759420">it</span> <span m="3759600">at</span> <span
  m="3760860">the</span> <span m="3761510">hardness</span> <span
  m="3762650">assumptions</span> <span m="3763240">here</span> <span
  m="3764270">are,</span> <span m="3764870">like</span> <span
  m="3765190">in</span> <span m="3765280">the</span> <span
  m="3765380">case</span> <span m="3765620">of</span> <span
  m="3765750">Diffie-Hellman,</span> <span m="3768660">two-fold.</span> <span
  m="3770050">And</span> <span m="3771940">the</span> <span
  m="3772050">first</span> <span m="3772310">one</span> <span
  m="3772510">is</span> <span m="3773100">kind of</span> <span
  m="3773370">immediately</span> <span m="3773900">obvious.</span></p><p><span
  m="3776170">Just</span> <span m="3776430">like</span> <span
  m="3776600">it</span> <span m="3776670">was</span> <span
  m="3777060">the</span> <span m="3777200">case</span> <span
  m="3777480">with</span> <span m="3777780">Diffie-Hellman,</span> <span
  m="3778550">where</span> <span m="3778710">you</span> <span
  m="3778820">had</span> <span m="3779260">g</span> <span
  m="3779520">raised</span> <span m="3779760">to</span> <span
  m="3779840">a</span> <span m="3780260">flying</span> <span
  m="3780640">about</span> <span m="3781390">and</span> <span
  m="3781670">obviously</span> <span m="3782270">that</span> <span
  m="3782410">has</span> <span m="3782600">to</span> <span
  m="3782680">hide</span> <span m="3783070">a,</span> <span
  m="3784130">here</span> <span m="3784370">you</span> <span
  m="3784750">got</span> <span m="3785030">N,</span> <span
  m="3785480">capital</span> <span m="3785930">N,</span> <span
  m="3786730">being</span> <span m="3787070">published.</span> <span
  m="3788130">And</span> <span m="3788540">if</span> <span
  m="3788700">anybody</span> <span m="3789160">could</span> <span
  m="3789350">take</span> <span m="3789630">N</span> <span
  m="3790020">and</span> <span m="3790210">factor</span> <span
  m="3790730">it,</span> <span m="3792080">there</span> <span m="3792260">may
  be</span> <span m="3792500">multiple</span> <span
  m="3792830">factorizations.</span> <span m="3793580">But</span> <span
  m="3794130">you're</span> <span m="3794710">going to</span> <span
  m="3794750">get</span> <span m="3794870">a</span> <span
  m="3794910">unique</span> <span m="3795250">prime</span> <span
  m="3795510">factorization.</span> <span m="3796660">So</span> <span
  m="3796680">that's</span> <span m="3796850">what</span> <span
  m="3796980">you</span> <span m="3797070">want,</span> <span
  m="3797440">that</span> <span m="3797590">unique</span> <span
  m="3797910">prime</span> <span m="3798190">factorization</span> <span
  m="3799240">of</span> <span m="3799400">N.</span></p><p><span
  m="3800250">And</span> <span m="3800640">if</span> <span
  m="3800830">you</span> <span m="3800940">get</span> <span
  m="3801210">that,</span> <span m="3801760">then</span> <span
  m="3802075">you've</span> <span m="3802390">broken</span> <span
  m="3803790">the</span> <span m="3804080">System</span> <span
  m="3804830">because</span> <span m="3805100">you</span> <span
  m="3805190">know</span> <span m="3805320">what</span> <span
  m="3805490">p</span> <span m="3805620">and</span> <span m="3805720">q
  are.</span> <span m="3807180">And</span> <span m="3807520">so</span> <span
  m="3807620">this</span> <span m="3807780">is</span> <span
  m="3807930">all</span> <span m="3808130">public</span> <span
  m="3808530">in</span> <span m="3808630">the</span> <span
  m="3808720">sense</span> <span m="3808960">that</span> <span
  m="3809740">this</span> <span m="3810030">algorithm</span> <span
  m="3810410">is</span> <span m="3810500">public.</span> <span
  m="3811120">If</span> <span m="3811250">you're</span> <span
  m="3811340">using</span> <span m="3811660">RSA,</span> <span
  m="3812140">this</span> <span m="3812390">is</span> <span
  m="3812500">what</span> <span m="3812660">you're</span> <span
  m="3812810">following.</span></p><p><span m="3813640">So</span> <span
  m="3813890">the</span> <span m="3814050">person</span> <span
  m="3814370">is</span> <span m="3814470">trying</span> <span
  m="3814650">to</span> <span m="3814710">figure</span> <span
  m="3814980">out</span> <span m="3815100">what</span> <span
  m="3815240">the</span> <span m="3815310">two</span> <span
  m="3815500">primes</span> <span m="3815930">are</span> <span
  m="3816540">that</span> <span m="3816710">together</span> <span
  m="3817090">get</span> <span m="3817250">multiplied</span> <span
  m="3818170">to form</span> <span m="3818720">capital</span> <span
  m="3819015">N.</span> <span m="3819790">And</span> <span m="3819930">so</span>
  <span m="3820000">that's</span> <span m="3820200">a</span> <span
  m="3820250">factorization</span> <span m="3820860">problem.</span> <span
  m="3822030">And</span> <span m="3822120">so</span> <span
  m="3822320">RSA</span> <span m="3824220">hardness</span> <span
  m="3824750">assumptions</span> <span m="3825170">are</span> <span
  m="3829530">given</span> <span m="3829910">N,</span> <span
  m="3832300">hard</span> <span m="3833540">to</span> <span
  m="3833990">factor</span> <span m="3836190">into</span> <span
  m="3837040">p,</span> <span m="3837270">comma</span> <span
  m="3837570">q.</span> <span m="3839230">And</span> <span
  m="3839390">this</span> <span m="3839520">is</span> <span
  m="3839970">factoring.</span> <span m="3843740">And</span> <span
  m="3843980">then</span> <span m="3844580">one</span> <span
  m="3844750">other</span> <span m="3844930">thing,</span> <span
  m="3845210">which</span> <span m="3845430">is</span> <span
  m="3846480">given</span> <span m="3847240">e--</span> <span
  m="3848005">so</span> <span m="3848310">you're</span> <span
  m="3848360">not</span> <span m="3848530">actually</span> <span
  m="3848790">breaking</span> <span m="3849320">the</span> <span
  m="3849650">entire</span> <span m="3849800">cryptosystem.</span> <span
  m="3851130">But</span> <span m="3851360">you're</span> <span
  m="3851700">breaking</span> <span m="3852450">the</span> <span
  m="3853660">privacy</span> <span m="3854360">associated</span> <span
  m="3854860">with</span> <span m="3855010">a</span> <span
  m="3855070">particular</span> <span m="3855650">message.</span></p><p><span
  m="3857680">And</span> <span m="3858140">so</span> <span
  m="3858440">you</span> <span m="3858580">could</span> <span
  m="3858690">break</span> <span m="3858880">the</span> <span
  m="3858950">privacy</span> <span m="3859380">associated</span> <span
  m="3859730">with</span> <span m="3859840">a</span> <span
  m="3859890">particular</span> <span m="3860280">message.</span> <span
  m="3860820">You're</span> <span m="3861140">given</span> <span
  m="3861400">e,</span> <span m="3861630">because</span> <span
  m="3861860">that's</span> <span m="3862080">public.</span> <span
  m="3863370">And</span> <span m="3864920">you</span> <span
  m="3865680">don't</span> <span m="3865840">know</span> <span
  m="3865970">what</span> <span m="3866140">p</span> <span
  m="3866320">and</span> <span m="3866410">q</span> <span
  m="3866730">are.</span> <span m="3867830">But</span> <span m="3868595">you
  know</span> <span m="3869030">that</span> <span m="3871420">e</span> <span
  m="3871740">is</span> <span m="3872230">relatively</span> <span
  m="3872750">prime</span> <span m="3873690">with</span> <span
  m="3873870">respect</span> <span m="3874260">to</span> <span
  m="3875035">p</span> <span m="3875510">minus</span> <span
  m="3875900">1,</span> <span m="3876140">q</span> <span
  m="3876300">minus</span> <span m="3876560">1,</span> <span
  m="3877130">because</span> <span m="3877310">that's</span> <span
  m="3877520">RSA</span> <span m="3877750">algorithm.</span> <span
  m="3878680">And</span> <span m="3878860">that's</span> <span
  m="3879170">a</span> <span m="3879270">publicly</span> <span
  m="3879720">known.</span></p><p><span m="3880480">And</span> <span
  m="3880650">you</span> <span m="3880770">also</span> <span
  m="3881170">know</span> <span m="3881380">c,</span> <span
  m="3883650">which</span> <span m="3883800">is</span> <span m="3883900">the
  ciphered</span> <span m="3883970">text.</span> <span m="3885030">And</span>
  <span m="3885260">so</span> <span m="3885420">what</span> <span
  m="3885570">you're</span> <span m="3885690">doing</span> <span
  m="3885990">is</span> <span m="3886110">you're</span> <span
  m="3886230">trying</span> <span m="3886410">to</span> <span
  m="3886460">discover</span> <span m="3886810">m.</span> <span
  m="3887520">So</span> <span m="3887630">you're</span> <span
  m="3887740">trying</span> <span m="3887930">to</span> <span
  m="3887990">break</span> <span m="3888730">a</span> <span
  m="3888820">particular</span> <span m="3889420">encryption</span> <span
  m="3890410">that</span> <span m="3890580">was</span> <span
  m="3890780">created</span> <span m="3891630">by</span> <span
  m="3891960">the</span> <span m="3892265">RSA</span> <span
  m="3892570">algorithm.</span> <span m="3893520">And</span> <span
  m="3893810">you</span> <span m="3894040">haven't</span> <span
  m="3894290">discovered</span> <span m="3894700">the</span> <span
  m="3894780">private</span> <span m="3895080">key</span> <span
  m="3895290">here.</span> <span m="3895910">That's</span> <span
  m="3896210">only</span> <span m="3896440">discoverable</span> <span
  m="3897250">through</span> <span m="3897570">the</span> <span
  m="3897680">factoring</span> <span m="3898650">problem.</span></p><p><span
  m="3899450">But</span> <span m="3899650">you</span> <span
  m="3899790">could</span> <span m="3900830">break</span> <span
  m="3901170">security</span> <span m="3902440">if</span> <span
  m="3902640">you</span> <span m="3902750">can</span> <span
  m="3902900">find</span> <span m="3903460">m</span> <span
  m="3905170">such</span> <span m="3905580">that</span> <span m="3908650">m
  raised</span> <span m="3909230">to</span> <span m="3909730">e</span> <span
  m="3910120">is</span> <span m="3910900">c</span> <span m="3912340">mod</span>
  <span m="3912570">N.</span> <span m="3913440">So</span> <span
  m="3913610">you're</span> <span m="3913900">doing</span> <span
  m="3914130">the</span> <span m="3914310">searching</span> <span
  m="3915490">for</span> <span m="3915670">an</span> <span m="3915750">m.</span>
  <span m="3916160">So</span> <span m="3916300">you're</span> <span
  m="3916410">trying</span> <span m="3916590">to</span> <span
  m="3916630">discover</span> <span m="3917010">an m</span> <span
  m="3917450">that</span> <span m="3917600">you</span> <span
  m="3917680">can</span> <span m="3917790">exponentiate</span> <span
  m="3918850">to</span> <span m="3918970">get</span> <span
  m="3919200">what</span> <span m="3919380">you</span> <span
  m="3919500">have</span> <span m="3919740">on</span> <span
  m="3919820">the</span> <span m="3919890">right-hand</span> <span
  m="3920130">side.</span></p><p><span m="3920790">Because</span> <span
  m="3920980">clearly,</span> <span m="3921170">you</span> <span
  m="3921350">can</span> <span m="3921620">compute</span> <span
  m="3921910">what's</span> <span m="3922140">on</span> <span
  m="3922280">the</span> <span m="3922360">right-hand</span> <span
  m="3922660">side.</span> <span m="3923840">So</span> <span
  m="3923990">this</span> <span m="3924150">is</span> <span
  m="3924530">simply</span> <span m="3924800">called</span> <span
  m="3925060">RSA</span> <span m="3925420">problem.</span> <span
  m="3929160">So</span> <span m="3929310">those</span> <span
  m="3929530">are</span> <span m="3929560">the</span> <span
  m="3929710">two</span> <span m="3929880">computational</span> <span
  m="3930490">assumptions</span> <span m="3931510">that</span> <span
  m="3931660">you</span> <span m="3931740">need</span> <span
  m="3931890">to</span> <span m="3931960">make</span> <span
  m="3932520">in</span> <span m="3932670">order</span> <span
  m="3932820">for</span> <span m="3932960">RSA</span> <span
  m="3933320">to</span> <span m="3933400">be</span> <span
  m="3933500">secure.</span> <span m="3935800">Cool.</span> <span
  m="3936120">Any</span> <span m="3936260">questions?</span></p><p><span
  m="3940123">AUDIENCE: [INAUDIBLE]</span> <span
  m="3941620">center?</span></p><p><span m="3943620">SRINIVAS DEVADAS: So</span>
  <span m="3943750">that's</span> <span m="3943980">anonymity.</span> <span
  m="3945060">Yes.</span> <span m="3945630">There's</span> <span
  m="3946390">ring</span> <span m="3946700">cryptography.</span> <span
  m="3947840">And</span> <span m="3948400">there's a</span> <span
  m="3948490">whole</span> <span m="3948720">host</span> <span
  m="3948930">of</span> <span m="3949010">protocols.</span> <span
  m="3949980">I</span> <span m="3950120">actually</span> <span
  m="3950430">did</span> <span m="3950780">some</span> <span
  m="3951220">of</span> <span m="3951270">them</span> <span
  m="3951390">based</span> <span m="3951670">on</span> <span
  m="3952120">RSA,</span> <span m="3952680">where</span> <span m="3953030">you
  can,</span> <span m="3954550">by</span> <span m="3954700">collecting</span>
  <span m="3955220">a</span> <span m="3955280">bunch</span> <span
  m="3955570">of</span> <span m="3955680">private</span> <span
  m="3956000">keys</span> <span m="3956280">together,</span> <span
  m="3959170">essentially</span> <span m="3959560">set</span> <span
  m="3959740">it</span> <span m="3959840">up</span> <span m="3960010">so</span>
  <span m="3960920">it</span> <span m="3961130">can</span> <span
  m="3961270">be</span> <span m="3961370">verified</span> <span
  m="3962130">that</span> <span m="3963620">the</span> <span
  m="3963960">message</span> <span m="3964410">came</span> <span
  m="3964700">from</span> <span m="3965450">a</span> <span
  m="3965530">collection</span> <span m="3965990">of</span> <span
  m="3966090">people,</span> <span m="3966850">but</span> <span
  m="3967090">you</span> <span m="3967200">can't</span> <span
  m="3967450">tell</span> <span m="3967870">which</span> <span
  m="3968520">person</span> <span m="3968910">the</span> <span
  m="3968990">message</span> <span m="3969280">came</span> <span
  m="3969480">from.</span></p><p><span m="3970680">So</span> <span
  m="3970870">there's</span> <span m="3971070">just</span> <span
  m="3971230">a</span> <span m="3971270">whole</span> <span
  m="3971520">host</span> <span m="3971790">of</span> <span
  m="3971880">things.</span> <span m="3972550">There's</span> <span
  m="3972910">thousands</span> <span m="3973350">of</span> <span
  m="3973430">papers</span> <span m="3973780">written.</span> <span
  m="3974400">There's a</span> <span m="3974570">wonderful</span> <span
  m="3974960">field.</span> <span m="3975740">I</span> <span
  m="3975880">encourage</span> <span m="3976230">you</span> <span
  m="3976430">to</span> <span m="3976550">look</span> <span
  m="3976730">into</span> <span m="3976990">it</span> <span
  m="3977620">if</span> <span m="3978220">your</span> <span
  m="3978470">interests</span> <span m="3979560">are</span> <span
  m="3979850">inclined</span> <span m="3980330">this</span> <span
  m="3980470">way.</span> <span m="3981110">And</span> <span
  m="3981480">it's</span> <span m="3981730">just</span> <span
  m="3982050">gone</span> <span m="3982260">on</span> <span
  m="3982410">and</span> <span m="3982520">on.</span></p><p><span
  m="3982860">It's</span> <span m="3982980">become</span> <span
  m="3983220">more</span> <span m="3983500">important</span> <span
  m="3984420">with</span> <span m="3984620">the</span> <span
  m="3984690">internet.</span> <span m="3985870">RSA,</span> <span
  m="3986760">the</span> <span m="3986990">company,</span> <span
  m="3987430">was</span> <span m="3987960">probably</span> <span
  m="3988250">founded</span> <span m="3988590">in</span> <span
  m="3988640">the</span> <span m="3988730">late</span> <span
  m="3988960">'70s.</span> <span m="3989970">And</span> <span
  m="3990370">they</span> <span m="3990530">struggled</span> <span
  m="3990910">for</span> <span m="3991050">a</span> <span
  m="3991100">while.</span> <span m="3991800">And</span> <span
  m="3991980">then</span> <span m="3992110">eventually,</span> <span
  m="3992470">they</span> <span m="3992550">were</span> <span
  m="3992670">used</span> <span m="3992990">for</span> <span
  m="3993240">Secure</span> <span m="3993660">Sockets</span> <span
  m="3994050">Layer</span> <span m="3994810">in</span> <span
  m="3995030">Netscape,</span> <span m="3995720">which</span> <span
  m="3995890">was</span> <span m="3996020">their</span> <span
  m="3996170">big</span> <span m="3996370">break.</span></p><p><span
  m="3997060">And</span> <span m="3997230">then,</span> <span
  m="3997380">of</span> <span m="3997470">course,</span> <span
  m="3998650">Netscape</span> <span m="3999000">meant</span> <span
  m="3999400">the</span> <span m="3999520">internet</span> <span
  m="3999660">was</span> <span m="3999890">around.</span> <span
  m="4000510">And</span> <span m="4000640">so</span> <span
  m="4000820">really,</span> <span m="4000990">the</span> <span
  m="4001090">internet</span> <span m="4001680">made</span> <span
  m="4002120">RSA</span> <span m="4002550">what</span> <span
  m="4002710">it</span> <span m="4002820">is</span> <span
  m="4002970">today.</span> <span m="4004140">And</span> <span
  m="4004320">so</span> <span m="4004710">just</span> <span m="4004940">a</span>
  <span m="4005000">whole</span> <span m="4005270">host</span> <span
  m="4005580">of</span> <span m="4006110">wonderful</span> <span
  m="4006740">algorithms</span> <span m="4006900">out</span> <span
  m="4007040">there,</span> <span m="4007930">some</span> <span m="4008190">of
  which are</span> <span m="4008445">based in</span> <span
  m="4008700">RSA</span> <span m="4009690">and</span> <span
  m="4009830">some</span> <span m="4010020">that</span> <span
  m="4010120">are</span> <span m="4010200">broken.</span></p><p><span
  m="4011050">And</span> <span m="4011220">so</span> <span
  m="4011380">let's</span> <span m="4011560">talk</span> <span
  m="4011860">for</span> <span m="4011940">the</span> <span
  m="4012170">last</span> <span m="4012880">few</span> <span
  m="4013060">minutes</span> <span m="4013750">about</span> <span
  m="4014000">all</span> <span m="4014260">of</span> <span
  m="4014380">the</span> <span m="4016260">fits</span> <span
  m="4016590">and</span> <span m="4017530">starts</span> <span
  m="4018540">that</span> <span m="4018910">occurred</span> <span
  m="4019650">in</span> <span m="4019900">cryptography.</span> <span
  m="4021020">And</span> <span m="4021550">precisely</span> <span
  m="4022790">what</span> <span m="4023200">I'd</span> <span
  m="4023440">like</span> <span m="4023580">to</span> <span
  m="4023650">focus</span> <span m="4023960">on</span> <span
  m="4024440">for</span> <span m="4024590">the</span> <span
  m="4024780">time</span> <span m="4025000">we</span> <span
  m="4025090">have</span> <span m="4025270">left</span> <span
  m="4026010">is</span> <span m="4026470">hardness.</span> <span
  m="4027640">So</span> <span m="4028300">we</span> <span
  m="4028420">spent</span> <span m="4028590">a</span> <span
  m="4028640">lot</span> <span m="4028810">of</span> <span
  m="4028870">time</span> <span m="4029350">talking</span> <span
  m="4029590">about</span> <span m="4029790">hard</span> <span
  m="4030040">problems.</span></p><p><span m="4031010">And</span> <span
  m="4031200">we</span> <span m="4031310">talked</span> <span
  m="4031570">about</span> <span m="4032810">NP-complete</span> <span
  m="4033410">problems</span> <span m="4034330">that</span> <span
  m="4034670">are</span> <span m="4036660">hard.</span> <span
  m="4037600">But</span> <span m="4037870">they're</span> <span
  m="4038020">hard</span> <span m="4039090">in</span> <span
  m="4039260">the</span> <span m="4039370">worst</span> <span
  m="4039730">case.</span> <span m="4040760">So</span> <span
  m="4043130">you</span> <span m="4044230">have</span> <span
  m="4044420">a</span> <span m="4044470">situation</span> <span
  m="4045060">where</span> <span m="4048620">you</span> <span
  m="4048730">have</span> <span m="4049170">NP-complete</span> <span
  m="4049870">problems.</span></p><p><span m="4059420">And</span> <span
  m="4059930">I'd</span> <span m="4060030">like</span> <span
  m="4060180">to</span> <span m="4060240">talk</span> <span m="4060420">a</span>
  <span m="4060460">little</span> <span m="4060630">bit</span> <span
  m="4060770">about</span> <span m="4060980">the</span> <span
  m="4061030">relationship</span> <span m="4061530">between</span> <span
  m="4061760">NP-completeness</span> <span m="4062880">and</span> <span
  m="4063070">crypto.</span> <span m="4064030">Because</span> <span
  m="4064260">we've</span> <span m="4064480">made</span> <span
  m="4064790">these</span> <span m="4064980">assumptions</span> <span
  m="4065470">about</span> <span m="4065660">hardness.</span> <span
  m="4066660">Now,</span> <span m="4066670">what's</span> <span
  m="4066940">interesting</span> <span m="4067430">here</span> <span
  m="4068500">is</span> <span m="4068720">that</span> <span m="4069870">N</span>
  <span m="4070590">composite</span> <span m="4072190">is</span> <span
  m="4072430">clearly</span> <span m="4073000">in</span> <span
  m="4073150">NP,</span> <span m="4076310">but</span> <span
  m="4076850">unknown</span> <span m="4080150">if</span> <span
  m="4080400">NP-complete.</span></p><p><span m="4082940">So</span> <span
  m="4083160">this</span> <span m="4083330">is</span> <span
  m="4083410">very</span> <span m="4083580">interesting.</span> <span
  m="4084380">The</span> <span m="4084520">tried</span> <span
  m="4084820">and</span> <span m="4084970">trusted</span> <span
  m="4085420">algorithm</span> <span m="4085870">for</span> <span
  m="4086020">public</span> <span m="4086360">key</span> <span
  m="4086550">encryption</span> <span m="4088290">relies</span> <span
  m="4088760">on</span> <span m="4088840">a</span> <span
  m="4088920">computational</span> <span m="4089560">assumption</span> <span
  m="4090450">where</span> <span m="4090610">the</span> <span
  m="4090770">problem</span> <span m="4091220">associated</span> <span
  m="4091630">with</span> <span m="4091740">that</span> <span
  m="4091880">assumption</span> <span m="4092660">is</span> <span
  m="4092800">not</span> <span m="4092960">even</span> <span
  m="4093150">known</span> <span m="4093370">to</span> <span
  m="4093450">be</span> <span m="4093795">NPC.</span> <span
  m="4094810">All</span> <span m="4094890">right.</span> <span
  m="4095930">So</span> <span m="4096670">that's</span> <span m="4096840">kind
  of</span> <span m="4096920">wild.</span></p><p><span m="4097920">So</span>
  <span m="4098380">how</span> <span m="4098500">does</span> <span
  m="4098660">this</span> <span m="4098930">work?</span> <span
  m="4099430">Or</span> <span m="4099630">why</span> <span m="4099970">does
  this</span> <span m="4100130">work?</span> <span m="4101210">Now,</span> <span
  m="4101380">if</span> <span m="4101470">you take</span> <span
  m="4102160">other</span> <span m="4102410">problems,</span> <span
  m="4102850">like,</span> <span m="4103069">is</span> <span
  m="4103290">a</span> <span m="4103380">graph</span> <span
  m="4105560">3-colorable?</span> <span m="4109840">And</span> <span
  m="4110050">so</span> <span m="4110189">what</span> <span
  m="4110310">does</span> <span m="4110390">that</span> <span
  m="4110569">mean?</span></p><p><span m="4111790">Well,</span> <span
  m="4112090">you</span> <span m="4112250">have</span> <span
  m="4112760">three</span> <span m="4112939">colors.</span> <span
  m="4113810">And</span> <span m="4114450">you're</span> <span
  m="4114979">not</span> <span m="4115120">allowed</span> <span
  m="4118580">to</span> <span m="4119370">reuse</span> <span
  m="4120569">the</span> <span m="4120710">same</span> <span
  m="4120970">color</span> <span m="4121580">on</span> <span
  m="4122060">two</span> <span m="4124069">ends</span> <span
  m="4124410">of</span> <span m="4124550">an</span> <span
  m="4124670">edge.</span> <span m="4125189">So</span> <span
  m="4125660">if</span> <span m="4125990">you</span> <span
  m="4126090">put</span> <span m="4126580">red</span> <span
  m="4127510">over</span> <span m="4127710">here,</span> <span m="4128710">you
  can</span> <span m="4128890">put</span> <span m="4129090">red</span> <span
  m="4129260">here,</span> <span m="4129580">but</span> <span
  m="4129720">you</span> <span m="4129830">can't</span> <span
  m="4129910">put</span> <span m="4130100">red</span> <span
  m="4130300">here</span> <span m="4130660">and</span> <span
  m="4130810">there.</span> <span m="4131800">And</span> <span
  m="4131950">so</span> <span m="4132020">that</span> <span
  m="4132189">graph</span> <span m="4132470">is</span> <span
  m="4132710">3-colorable.</span></p><p><span m="4133890">But</span> <span
  m="4134060">if</span> <span m="4134130">you</span> <span
  m="4134210">had</span> <span m="4134390">a</span> <span
  m="4134430">click,</span> <span m="4136260">then</span> <span
  m="4136840">this</span> <span m="4137010">would</span> <span
  m="4137149">not</span> <span m="4137430">be</span> <span
  m="4137600">3-colorable.</span> <span m="4139410">Because</span> <span
  m="4140200">you</span> <span m="4140350">have</span> <span
  m="4140490">all</span> <span m="4140620">these</span> <span
  m="4140800">edges.</span> <span m="4141439">You</span> <span
  m="4141569">have</span> <span m="4141670">three</span> <span
  m="4141859">edges</span> <span m="4142120">coming</span> <span
  m="4142340">out.</span> <span m="4142899">And</span> <span
  m="4143080">so</span> <span m="4143189">clearly,</span> <span
  m="4143450">the</span> <span m="4143540">degree</span> <span
  m="4144830">from</span> <span m="4145109">a</span> <span
  m="4145240">vertex</span> <span m="4145700">is</span> <span
  m="4145810">going</span> <span m="4145920">to</span> <span
  m="4145970">tell</span> <span m="4146140">you</span> <span
  m="4146319">what</span> <span m="4146670">you</span> <span
  m="4146840">have.</span></p><p><span m="4147420">So</span> <span
  m="4147550">if you</span> <span m="4147620">have</span> <span
  m="4147779">a</span> <span m="4147910">4-click</span> <span
  m="4148460">over</span> <span m="4148609">there,</span> <span
  m="4149270">immediately</span> <span m="4149700">it's</span> <span
  m="4149830">not</span> <span m="4150090">3-colorable.</span> <span
  m="4151020">But</span> <span m="4151950">checking</span> <span
  m="4152260">whether a</span> <span m="4152529">graphic is</span> <span
  m="4152844">3-colorable</span> <span m="4154120">is</span> <span
  m="4154700">NPC.</span> <span m="4160330">You</span> <span
  m="4160920">can</span> <span m="4161040">use</span> <span m="4161300">a</span>
  <span m="4161410">three set</span> <span m="4163620">as</span> <span
  m="4163760">a</span> <span m="4163819">way</span> <span m="4163939">of</span>
  <span m="4164029">showing</span> <span m="4164260">that.</span></p><p><span
  m="4165800">So</span> <span m="4167160">you</span> <span
  m="4167370">can</span> <span m="4167520">say,</span> <span
  m="4167770">oh,</span> <span m="4167939">wow,</span> <span
  m="4168380">maybe</span> <span m="4169200">I</span> <span
  m="4169340">shouldn't</span> <span m="4169510">be</span> <span
  m="4169609">worried</span> <span m="4169840">about</span> <span
  m="4170029">RSA.</span> <span m="4171770">I</span> <span
  m="4171920">should</span> <span m="4172100">just</span> <span
  m="4172279">be</span> <span m="4172380">building</span> <span
  m="4172680">cryptosystems</span> <span m="4173880">based</span> <span
  m="4174149">on</span> <span m="4174260">3-colorability.</span> <span
  m="4175210">Because</span> <span m="4175920">it</span> <span
  m="4176060">seems</span> <span m="4176310">like</span> <span
  m="4176470">a</span> <span m="4176870">much</span> <span
  m="4177080">simpler</span> <span m="4177410">problem</span> <span
  m="4178100">than</span> <span m="4178240">all</span> <span
  m="4178380">these</span> <span m="4178779">grungy</span> <span
  m="4179050">map</span> <span m="4179319">that</span> <span
  m="4179399">you</span> <span m="4179490">have</span> <span m="4179630">out
  there--</span> <span m="4180350">actually,</span> <span
  m="4180609">beautiful</span> <span m="4180960">map</span> <span
  m="4181229">that you</span> <span m="4181300">have</span> <span
  m="4181689">out there.</span> <span m="4182490">OK.</span></p><p><span
  m="4183250">So</span> <span m="4184790">that's</span> <span
  m="4185490">something</span> <span m="4185790">that's</span> <span
  m="4185970">a perfectly</span> <span m="4186390">reasonable</span> <span
  m="4187210">question</span> <span m="4187550">to</span> <span
  m="4187640">ask.</span> <span m="4188560">And</span> <span
  m="4188689">then</span> <span m="4188819">we</span> <span
  m="4188910">have</span> <span m="4189029">Knapsack.</span> <span
  m="4191370">Knapsack</span> <span m="4191470">is</span> <span
  m="4191859">simply</span> <span m="4192850">you've</span> <span
  m="4192960">got</span> <span m="4193069">a</span> <span
  m="4193109">bunch</span> <span m="4193350">of</span> <span
  m="4193479">items</span> <span m="4195850">and</span> <span
  m="4196520">you</span> <span m="4196710">just</span> <span
  m="4196880">want</span> <span m="4197310">to</span> <span
  m="4197460">figure</span> <span m="4197760">out</span> <span
  m="4198950">whether</span> <span m="4199150">you</span> <span
  m="4199290">can</span> <span m="4199440">get</span> <span
  m="4199680">this</span> <span m="4199880">particular</span> <span
  m="4200250">sum</span> <span m="4200620">S.</span> <span
  m="4203210">Knapsack</span> <span m="4205350">is</span> <span
  m="4205550">NPC</span> <span m="4206430">as</span> <span
  m="4206540">well.</span></p><p><span m="4211620">And</span> <span
  m="4211790">you</span> <span m="4211900">got</span> <span m="4211980">a</span>
  <span m="4212020">bunch</span> <span m="4212250">of</span> <span
  m="4212340">weights</span> <span m="4212650">given</span> <span
  m="4212890">to</span> <span m="4213296">you.</span> <span
  m="4214110">And</span> <span m="4214290">the</span> <span
  m="4214360">BI</span> <span m="4215260">are</span> <span
  m="4215430">going</span> <span m="4215580">to</span> <span
  m="4215650">have</span> <span m="4215780">to</span> <span
  m="4215840">be</span> <span m="4215950">0,</span> <span m="4216270">1.</span>
  <span m="4217350">So</span> <span m="4217520">you</span> <span
  m="4217650">just</span> <span m="4217830">want</span> <span
  m="4217980">to</span> <span m="4218050">discover</span> <span
  m="4219610">a</span> <span m="4219750">particular</span> <span
  m="4220150">assignment</span> <span m="4220740">of</span> <span
  m="4220830">the</span> <span m="4220910">BIs,</span> <span
  m="4221820">such</span> <span m="4222150">that</span> <span
  m="4222480">you</span> <span m="4222630">pick</span> <span
  m="4222990">the</span> <span m="4223100">appropriate</span> <span
  m="4223620">items</span> <span m="4224460">to</span> <span
  m="4224570">put</span> <span m="4224770">into</span> <span
  m="4224900">the</span> <span m="4225010">knapsack,</span> <span
  m="4226090">right?</span> <span m="4226350">That's</span> <span
  m="4226730">it.</span></p><p><span m="4227110">That's</span> <span
  m="4227490">a</span> <span m="4227530">perfectly</span> <span
  m="4228230">reasonable</span> <span m="4228770">problem</span> <span
  m="4229830">to</span> <span m="4229960">potentially</span> <span
  m="4230650">use</span> <span m="4231440">as</span> <span m="4231640">a</span>
  <span m="4231690">basis</span> <span m="4232180">for</span> <span
  m="4232320">computational</span> <span m="4232920">hardness</span> <span
  m="4233760">to</span> <span m="4233880">go</span> <span
  m="4234060">build</span> <span m="4234310">cryptosystems.</span> <span
  m="4236060">And</span> <span m="4236240">people</span> <span
  m="4236470">did</span> <span m="4236610">that.</span> <span
  m="4237530">People</span> <span m="4237570">did</span> <span
  m="4237730">that</span> <span m="4237880">for</span> <span
  m="4237980">years.</span> <span m="4238940">They</span> <span
  m="4239070">tried</span> <span m="4239480">and</span> <span
  m="4239560">they</span> <span m="4239680">tried.</span></p><p><span
  m="4240670">And they</span> <span m="4241120">produced</span> <span
  m="4241530">cryptosystems,</span> <span m="4242160">public</span> <span
  m="4242490">key</span> <span m="4242660">cryptosystems,</span> <span
  m="4243770">based</span> <span m="4244190">on</span> <span
  m="4244340">Knapsack</span> <span m="4245860">that</span> <span
  m="4247410">look</span> <span m="4247730">fantastic.</span> <span
  m="4248350">And</span> <span m="4248460">they</span> <span
  m="4248550">work</span> <span m="4248970">from</span> <span
  m="4249150">a</span> <span m="4249200">functionality</span> <span
  m="4249890">standpoint</span> <span m="4250970">in</span> <span
  m="4251100">the</span> <span m="4251200">sense</span> <span
  m="4251520">that</span> <span m="4252010">you</span> <span
  m="4252460">would</span> <span m="4252950">use</span> <span
  m="4253270">this</span> <span m="4253460">Knapsack--</span> <span
  m="4254050">and</span> <span m="4254130">I'll</span> <span
  m="4254260">give</span> <span m="4254370">you</span> <span
  m="4254450">a</span> <span m="4254500">sense</span> <span
  m="4254750">of</span> <span m="4254840">how</span> <span
  m="4255000">this</span> <span m="4255150">is</span> <span
  m="4255300">done</span> <span m="4255540">in</span> <span m="4255620">a</span>
  <span m="4255660">minute--</span> <span m="4257370">problem</span> <span
  m="4259900">to</span> <span m="4260060">encrypt.</span> <span
  m="4261390">And</span> <span m="4261530">then</span> <span
  m="4261710">you'd</span> <span m="4261900">use</span> <span
  m="4262110">a</span> <span m="4262170">different</span> <span
  m="4262450">kind</span> <span m="4262770">of</span> <span
  m="4262840">Knapsack</span> <span m="4263300">problem</span> <span
  m="4263830">to</span> <span m="4264130">decrypt.</span></p><p><span
  m="4265260">And</span> <span m="4265760">when you</span> <span
  m="4266250">encrypt it</span> <span m="4266680">and</span> <span
  m="4266790">decrypt it,</span> <span m="4267240">you</span> <span
  m="4267360">did</span> <span m="4267540">get</span> <span
  m="4267690">that</span> <span m="4267860">same</span> <span
  m="4268050">message</span> <span m="4268360">back,</span> <span
  m="4269100">except</span> <span m="4269990">the whole</span> <span
  m="4270260">world</span> <span m="4270480">knew</span> <span m="4270590">what
  the</span> <span m="4270670">message</span> <span m="4270960">was.</span>
  <span m="4271720">Because</span> <span m="4272360">the</span> <span
  m="4272570">problem</span> <span m="4273060">associated</span> <span
  m="4273630">with</span> <span m="4274150">the</span> <span
  m="4274230">Knapsack</span> <span m="4275810">wasn't</span> <span
  m="4276050">hard</span> <span m="4276340">enough.</span> <span
  m="4277760">So</span> <span m="4278230">the</span> <span
  m="4278340">computational</span> <span m="4278990">hardness</span> <span
  m="4279620">was</span> <span m="4279860">what</span> <span
  m="4280540">broke</span> <span m="4281040">the</span> <span
  m="4281200">Knapsack</span> <span m="4281660">schemes.</span></p><p><span
  m="4282660">And</span> <span m="4283320">then</span> <span
  m="4283510">you</span> <span m="4283630">come</span> <span
  m="4283920">down</span> <span m="4284240">to</span> <span
  m="4284650">asking</span> <span m="4285210">why</span> <span
  m="4285680">is</span> <span m="4285890">it</span> <span
  m="4286580">that</span> <span m="4287870">this</span> <span
  m="4288290">problem</span> <span m="4288820">that's</span> <span
  m="4289150">not</span> <span m="4290220">an</span> <span
  m="4290430">NPC</span> <span m="4291820">seems</span> <span
  m="4292200">to</span> <span m="4292350">have</span> <span
  m="4292450">stood</span> <span m="4292830">the</span> <span
  m="4292940">test</span> <span m="4293270">of</span> <span
  m="4293520">time,</span> <span m="4294310">but</span> <span
  m="4294470">all</span> <span m="4294700">these</span> <span
  m="4294900">other</span> <span m="4295130">problems,</span> <span
  m="4296100">like</span> <span m="4296290">Knapsack</span> <span
  m="4296850">and</span> <span m="4297090">3-colorability,</span> <span
  m="4297770">which is</span> <span m="4297990">even</span> <span
  m="4298180">worse</span> <span m="4298400">than</span> <span
  m="4298480">Knapsack,</span> <span m="4299790">when</span> <span
  m="4300330">people</span> <span m="4300530">have</span> <span
  m="4300630">built</span> <span m="4300950">cryptosystems</span> <span
  m="4301630">based</span> <span m="4301880">on</span> <span
  m="4302010">this,</span> <span m="4302540">they've</span> <span
  m="4302710">all</span> <span m="4302910">been</span> <span
  m="4303080">broken</span> <span m="4303710">very</span> <span
  m="4304040">quickly?</span> <span m="4305220">And</span> <span
  m="4305420">so</span> <span m="4305530">why</span> <span m="4305750">is</span>
  <span m="4305880">that?</span> <span m="4307210">What</span> <span
  m="4308710">do</span> <span m="4308750">you</span> <span
  m="4308860">think</span> <span m="4309910">the</span> <span
  m="4310960">reason</span> <span m="4311300">is,</span> <span m="4312090">sort
  of</span> <span m="4312300">at</span> <span m="4312350">a</span> <span
  m="4312400">high</span> <span m="4312590">level?</span> <span
  m="4314340">What</span> <span m="4314540">does</span> <span
  m="4314660">NP-completenss</span> <span m="4315330">say?</span></p><p><span
  m="4319740">When</span> <span m="4320330">we</span> <span
  m="4320570">talk</span> <span m="4320770">about</span> <span
  m="4320920">complexity,</span> <span m="4321450">what</span> <span
  m="4321690">are</span> <span m="4321750">we</span> <span
  m="4321870">worried</span> <span m="4322130">about?</span> <span
  m="4323570">Most</span> <span m="4323880">of</span> <span
  m="4323940">the</span> <span m="4324030">time,</span> <span
  m="4324330">what</span> <span m="4324470">are</span> <span
  m="4324500">we</span> <span m="4324630">talking</span> <span
  m="4324930">about</span> <span m="4325200">when</span> <span
  m="4325300">we</span> <span m="4325390">talk</span> <span
  m="4325570">about</span> <span m="4325740">complexity</span> <span
  m="4326770">of</span> <span m="4326890">an</span> <span
  m="4326990">algorithm?</span> <span m="4327940">Or</span> <span
  m="4328140">in</span> <span m="4328300">this</span> <span
  m="4328470">case,</span> <span m="4329250">in</span> <span
  m="4329580">the</span> <span m="4329680">case</span> <span
  m="4329890">of</span> <span m="4329980">a</span> <span
  m="4330060">problem,</span> <span m="4330960">what</span> <span
  m="4332190">adjective</span> <span m="4333370">do</span> <span
  m="4333420">we</span> <span m="4333570">put</span> <span m="4333800">in</span>
  <span m="4333960">front</span> <span m="4334350">of</span> <span
  m="4335450">runtime,</span> <span m="4336070">for</span> <span
  m="4336190">example,</span> <span m="4337130">then</span> <span
  m="4337190">we</span> <span m="4337310">compute</span> <span
  m="4337680">complexity?</span></p><p><span m="4338627">AUDIENCE: Worst</span>
  <span m="4339064">[INAUDIBLE].</span></p><p><span m="4339940">SRINIVAS
  DEVADAS: Worst</span> <span m="4340210">case,</span> <span
  m="4341060">right?</span> <span m="4341420">Worst</span> <span
  m="4341750">case.</span> <span m="4343080">In</span> <span
  m="4343310">the</span> <span m="4343430">worst</span> <span
  m="4343760">case,</span> <span m="4345190">you're</span> <span
  m="4345380">going</span> <span m="4345580">to</span> <span
  m="4345650">be</span> <span m="4345790">able</span> <span
  m="4345920">to</span> <span m="4346000">create</span> <span
  m="4346330">random</span> <span m="4346760">graphs</span> <span
  m="4347700">where</span> <span m="4347900">it</span> <span
  m="4348040">takes</span> <span m="4348490">exponential</span> <span
  m="4349260">time</span> <span m="4350020">to</span> <span
  m="4350150">discover</span> <span m="4350830">whether</span> <span
  m="4351030">they're</span> <span m="4351300">3-colorable</span> <span
  m="4351910">or</span> <span m="4352000">not.</span> <span
  m="4353170">But</span> <span m="4353310">in the</span> <span
  m="4353490">average</span> <span m="4353980">case,</span> <span
  m="4354700">all</span> <span m="4354980">you</span> <span
  m="4355100">do</span> <span m="4355370">is</span> <span m="4355600">if
  you</span> <span m="4355680">have</span> <span m="4355840">a</span> <span
  m="4355880">large</span> <span m="4356400">graph,</span> <span
  m="4357370">if</span> <span m="4357590">there's</span> <span
  m="4358010">one</span> <span m="4358390">little</span> <span
  m="4358540">4-click</span> <span m="4359170">in</span> <span
  m="4359260">the</span> <span m="4359360">graph</span> <span
  m="4360200">and</span> <span m="4360370">you</span> <span
  m="4360500">can</span> <span m="4360640">find</span> <span
  m="4361000">it,</span> <span m="4361440">instantly</span> <span
  m="4361930">you</span> <span m="4362090">know</span> <span
  m="4362330">that</span> <span m="4362450">it's</span> <span
  m="4362570">not</span> <span m="4362780">3-colorable,</span> <span
  m="4364000">right?</span></p><p><span m="4364500">So</span> <span
  m="4364630">it</span> <span m="4364770">turns</span> <span
  m="4365070">out</span> <span m="4365290">that's</span> <span
  m="4365510">3-colorability</span> <span m="4366210">is</span> <span
  m="4366360">just</span> <span m="4366550">the</span> <span
  m="4366620">worst</span> <span m="4366920">thing</span> <span
  m="4367110">ever</span> <span m="4367820">when</span> <span
  m="4367970">it</span> <span m="4368070">comes</span> <span
  m="4368390">to</span> <span m="4368680">cryptography.</span> <span
  m="4369740">Because</span> <span m="4370510">the</span> <span
  m="4370710">larger</span> <span m="4371160">the</span> <span
  m="4371290">graph--</span> <span m="4371690">and you</span> <span
  m="4371770">need</span> <span m="4372030">this</span> <span
  m="4372170">graph</span> <span m="4372390">to</span> <span
  m="4372480">be</span> <span m="4372600">large.</span> <span
  m="4373020">Because</span> <span m="4373790">anything</span> <span
  m="4374170">that's</span> <span m="4374350">small, is</span> <span
  m="4374850">constant</span> <span m="4375200">time,</span> <span
  m="4375610">right?</span> <span m="4376050">Because</span> <span
  m="4376300">so what</span> <span m="4376420">if it's</span> <span
  m="4376760">exponential?</span> <span m="4377370">It's</span> <span
  m="4377530">constant</span> <span m="4377870">time.</span></p><p><span
  m="4378450">So</span> <span m="4378590">you</span> <span
  m="4378700">need</span> <span m="4378940">the</span> <span
  m="4379140">graph</span> <span m="4379430">to</span> <span
  m="4379540">be</span> <span m="4379680">large.</span> <span
  m="4380620">When</span> <span m="4380720">you</span> <span
  m="4380790">have</span> <span m="4380970">a</span> <span
  m="4381030">random</span> <span m="4381410">graph</span> <span
  m="4381810">that's</span> <span m="4382010">large,</span> <span
  m="4383340">the</span> <span m="4383600">chances</span> <span
  m="4384120">you're</span> <span m="4384210">going</span> <span
  m="4384410">to</span> <span m="4384460">find</span> <span m="4384700">a
  4-click</span> <span m="4385360">in</span> <span m="4385520">a</span> <span
  m="4385630">2,000</span> <span m="4386250">vertex</span> <span
  m="4386680">graph</span> <span m="4387470">is</span> <span
  m="4387650">pretty</span> <span m="4387920">high.</span> <span
  m="4389120">And</span> <span m="4389190">so</span> <span m="4389330">if
  you</span> <span m="4389470">just</span> <span m="4389680">go</span> <span
  m="4389810">scan</span> <span m="4390360">and</span> <span
  m="4390450">look</span> <span m="4390640">for a</span> <span
  m="4390810">4-click,</span> <span m="4391770">instantly</span> <span
  m="4392050">you</span> <span m="4392220">know</span> <span m="4392400">that
  this</span> <span m="4392670">graph</span> <span m="4392920">is</span> <span
  m="4393050">not</span> <span m="4393270">3-colorable,</span> <span
  m="4394400">right?</span></p><p><span m="4394830">So</span> <span
  m="4395040">in</span> <span m="4395170">the</span> <span
  m="4395310">average</span> <span m="4395820">case,</span> <span
  m="4397120">3-colorability</span> <span m="4398110">is</span> <span
  m="4398690">easy.</span> <span m="4399640">It's</span> <span
  m="4400080">easy</span> <span m="4400510">to</span> <span
  m="4400640">solve</span> <span m="4401130">in</span> <span
  m="4401270">the</span> <span m="4401350">average</span> <span
  m="4401690">case.</span> <span m="4402590">And</span> <span
  m="4404260">the</span> <span m="4404720">wonderful</span> <span
  m="4405270">thing</span> <span m="4405410">about</span> <span
  m="4405620">factoring</span> <span m="4406540">is</span> <span
  m="4407540">as</span> <span m="4407710">long</span> <span
  m="4407870">as</span> <span m="4407930">the</span> <span
  m="4407990">numbers</span> <span m="4408260">are</span> <span
  m="4408330">large,</span> <span m="4409390">doesn't</span> <span
  m="4409650">matter</span> <span m="4409900">what</span> <span
  m="4410000">the</span> <span m="4410060">numbers</span> <span
  m="4410390">are,</span> <span m="4410940">it's</span> <span
  m="4411090">hard</span> <span m="4411380">to</span> <span
  m="4411460">factor</span> <span m="4412020">in</span> <span
  m="4412130">the</span> <span m="4412220">average</span> <span
  m="4412680">case.</span></p><p><span m="4413980">So</span> <span
  m="4414120">that's</span> <span m="4414450">the</span> <span
  m="4414540">big</span> <span m="4414710">difference.</span> <span
  m="4415030">If you're</span> <span m="4415150">going</span> <span
  m="4415230">to</span> <span m="4415290">take</span> <span
  m="4415470">anything</span> <span m="4415740">away</span> <span
  m="4416040">from</span> <span m="4416220">the</span> <span
  m="4416280">rest</span> <span m="4416490">of</span> <span
  m="4416570">this,</span> <span m="4417160">it's</span> <span
  m="4417370">the</span> <span m="4417470">difference</span> <span
  m="4417850">between</span> <span m="4418670">problems</span> <span
  m="4419270">that</span> <span m="4420550">cryptographics</span> <span
  m="4421030">systems</span> <span m="4421450">are</span> <span
  m="4421550">based</span> <span m="4421890">on.</span> <span m="4424070">The
  systems</span> <span m="4424450">that have</span> <span
  m="4424680">stood</span> <span m="4425020">the</span> <span
  m="4425100">test</span> <span m="4425340">of</span> <span
  m="4425450">time,</span> <span m="4426270">they're</span> <span
  m="4426330">based</span> <span m="4426620">on</span> <span
  m="4426740">problems</span> <span m="4427190">that</span> <span
  m="4427290">are</span> <span m="4427400">hard</span> <span
  m="4427780">on</span> <span m="4427900">the</span> <span
  m="4428060">average.</span></p><p><span m="4429320">And</span> <span
  m="4430560">the</span> <span m="4431150">NP-complete</span> <span
  m="4431690">problems,</span> <span m="4432650">like</span> <span
  m="4433050">the</span> <span m="4433190">simple</span> <span
  m="4433450">ones</span> <span m="4433720">here,</span> <span
  m="4434810">are</span> <span m="4435480">hard</span> <span
  m="4435930">in</span> <span m="4436030">the</span> <span
  m="4436150">worst</span> <span m="4436460">case.</span> <span
  m="4437600">And</span> <span m="4437640">this</span> <span
  m="4437760">is</span> <span m="4437880">also</span> <span
  m="4438150">true</span> <span m="4439030">for</span> <span
  m="4439690">Knapsack.</span> <span m="4442290">So</span> <span
  m="4442430">that's</span> <span m="4442790">the</span> <span
  m="4442900">essence</span> <span m="4443260">of</span> <span
  m="4443400">it.</span></p><p><span m="4445000">I'll</span> <span
  m="4445150">just</span> <span m="4445360">give</span> <span
  m="4445500">you</span> <span m="4446130">a</span> <span
  m="4446240">sense.</span> <span m="4447450">You</span> <span
  m="4447590">can</span> <span m="4447720">read</span> <span
  m="4447910">the</span> <span m="4447980">notes.</span> <span
  m="4449650">There's</span> <span m="4450410">a</span> <span
  m="4450520">way</span> <span m="4451110">of</span> <span
  m="4451840">generating</span> <span m="4453020">secret</span> <span
  m="4453550">keys</span> <span m="4454140">and</span> <span
  m="4454350">public</span> <span m="4454720">keys</span> <span
  m="4455540">using</span> <span m="4455940">Knapsack</span> <span
  m="4456850">that</span> <span m="4456960">I</span> <span
  m="4457020">think</span> <span m="4457250">is</span> <span
  m="4457510">kind</span> <span m="4457810">of</span> <span
  m="4457910">interesting</span> <span m="4458790">that</span> <span
  m="4458990">is</span> <span m="4459170">worth</span> <span
  m="4460030">looking</span> <span m="4460370">at,</span> <span
  m="4460800">even</span> <span m="4461030">though</span> <span
  m="4461440">all</span> <span m="4461640">of</span> <span
  m="4461700">these</span> <span m="4461850">systems</span> <span
  m="4462210">are</span> <span m="4462280">broken.</span></p><p><span
  m="4463090">It's</span> <span m="4463400">just</span> <span
  m="4463570">kind</span> <span m="4463690">of</span> <span
  m="4463760">cool.</span> <span m="4464380">You</span> <span
  m="4464440">know,</span> <span m="4464510">how</span> <span
  m="4464680">would</span> <span m="4464810">you</span> <span
  m="4464940">get</span> <span m="4465340">encryption</span> <span
  m="4465940">out of</span> <span m="4466100">a</span> <span
  m="4466150">knapsack?</span> <span m="4466980">I mean, you're</span> <span
  m="4467120">putting</span> <span m="4467350">things</span> <span
  m="4467550">in</span> <span m="4467660">a</span> <span
  m="4467730">knapsack</span> <span m="4468200">and</span> <span
  m="4468300">taking</span> <span m="4468520">things</span> <span
  m="4468760">out.</span> <span m="4469320">How</span> <span
  m="4469490">can</span> <span m="4469620">you</span> <span
  m="4469710">set</span> <span m="4469920">it</span> <span m="4470020">up</span>
  <span m="4470180">so</span> <span m="4470350">you</span> <span
  m="4470500">get</span> <span m="4470810">an</span> <span
  m="4471040">asymmetric</span> <span m="4472270">key</span> <span
  m="4472590">system,</span> <span m="4473170">a</span> <span
  m="4473230">public</span> <span m="4473520">key</span> <span
  m="4473680">system,</span> <span m="4474210">through</span> <span
  m="4474610">a</span> <span m="4474660">Knapsack</span> <span
  m="4475130">problem?</span></p><p><span m="4475800">So</span> <span
  m="4476010">I'll</span> <span m="4476110">just</span> <span
  m="4476270">give</span> <span m="4476390">you</span> <span
  m="4476490">a</span> <span m="4476550">sense</span> <span
  m="4476790">of</span> <span m="4476860">that.</span> <span m="4477240">And
  you</span> <span m="4477360">can</span> <span m="4477460">read.</span> <span
  m="4478090">I</span> <span m="4478180">won't</span> <span
  m="4478410">finish.</span> <span m="4479150">But</span> <span
  m="4479480">I'd</span> <span m="4479630">like</span> <span
  m="4479770">to</span> <span m="4479870">do</span> <span
  m="4480090">what</span> <span m="4480300">we</span> <span
  m="4480410">did</span> <span m="4480590">here</span> <span
  m="4482350">for</span> <span m="4482590">RSA</span> <span
  m="4484440">in</span> <span m="4484560">the</span> <span
  m="4484640">time</span> <span m="4484840">that</span> <span
  m="4484970">I</span> <span m="4485020">have</span> <span
  m="4485170">left</span> <span m="4485610">for</span> <span
  m="4486100">Knapsack.</span> <span m="4487490">That</span> <span
  m="4487990">is</span> <span m="4488120">kind of</span> <span
  m="4488320">cool.</span></p><p><span m="4489140">You</span> <span
  m="4489250">get</span> <span m="4489390">a</span> <span
  m="4489460">sense</span> <span m="4489760">of</span> <span
  m="4489890">the</span> <span m="4489940">variety</span> <span
  m="4490310">of</span> <span m="4490680">different</span> <span
  m="4491040">public</span> <span m="4491320">key</span> <span
  m="4491530">cryptosystems</span> <span m="4492290">that</span> <span
  m="4492400">are</span> <span m="4492530">out</span> <span
  m="4492750">there</span> <span m="4493520">by</span> <span
  m="4493700">looking</span> <span m="4494060">at</span> <span
  m="4494190">something</span> <span m="4494610">that</span> <span
  m="4494760">is</span> <span m="4495220">very</span> <span
  m="4495730">different</span> <span m="4496470">from</span> <span
  m="4496790">RSA.</span> <span m="4499940">So</span> <span
  m="4502830">in</span> <span m="4503190">the</span> <span
  m="4503270">Knapsack</span> <span m="4503730">problem,</span> <span
  m="4504660">the</span> <span m="4504780">general</span> <span
  m="4505330">Knapsack</span> <span m="4505850">problem,</span> <span
  m="4512140">what's</span> <span m="4512380">hard</span> <span
  m="4513320">is</span> <span m="4513430">NPC.</span> <span
  m="4514720">There's</span> <span m="4514940">a</span> <span
  m="4515010">super</span> <span m="4515510">increasing</span> <span
  m="4516050">Knapsack</span> <span m="4516570">problem</span> <span
  m="4522910">that's</span> <span m="4523160">easy,</span> <span
  m="4524250">that</span> <span m="4524400">can</span> <span m="4524670">be
  solved</span> <span m="4527070">in</span> <span m="4527490">linear</span>
  <span m="4527870">time.</span></p><p><span m="4529290">What</span> <span
  m="4529510">is</span> <span m="4529620">a</span> <span
  m="4529820">super</span> <span m="4530050">increasing</span> <span
  m="4530460">knapsack?</span> <span m="4531960">Well,</span> <span
  m="4532390">a</span> <span m="4532510">super</span> <span
  m="4532750">increasing</span> <span m="4533190">knapsack</span> <span
  m="4534140">is</span> <span m="4534260">something</span> <span
  m="4534640">where</span> <span m="4535060">I</span> <span
  m="4535420">Wj</span> <span m="4544180">has</span> <span
  m="4544460">this</span> <span m="4544630">property.</span> <span
  m="4545460">So</span> <span m="4545820">an</span> <span
  m="4545900">example</span> <span m="4546270">of</span> <span
  m="4546360">that</span> <span m="4546660">is</span> <span
  m="4547720">2,</span> <span m="4548220">3,</span> <span m="4549220">6,</span>
  <span m="4550220">13,</span> <span m="4551220">27,</span> <span
  m="4552720">52.</span></p><p><span m="4555160">So</span> <span
  m="4555300">the</span> <span m="4555410">rates</span> <span
  m="4555580">are</span> <span m="4555760">super</span> <span
  m="4556010">increasing.</span> <span m="4556490">2</span> <span
  m="4556620">plus</span> <span m="4556840">3</span> <span m="4557030">is</span>
  <span m="4557160">less</span> <span m="4557320">than</span> <span
  m="4557460">6.</span> <span m="4558100">2</span> <span m="4558230">plus</span>
  <span m="4558430">3</span> <span m="4558600">plus</span> <span
  m="4558820">6</span> <span m="4559240">is</span> <span m="4559400">less</span>
  <span m="4559580">than</span> <span m="4559730">13</span> <span
  m="4560620">and</span> <span m="4560750">so</span> <span m="4560870">on</span>
  <span m="4561000">and</span> <span m="4561080">so</span> <span
  m="4561220">forth.</span> <span m="4562150">Do</span> <span
  m="4562230">you</span> <span m="4562380">see</span> <span
  m="4562560">why</span> <span m="4563270">super</span> <span
  m="4563590">increasing</span> <span m="4564010">knapsack</span> <span
  m="4564550">is</span> <span m="4564810">easily</span> <span
  m="4565160">solvable?</span> <span m="4567330">I</span> <span
  m="4567440">mean,</span> <span m="4567560">what</span> <span m="4567680">is
  a</span> <span m="4567780">knapsack?</span></p><p><span m="4568560">I</span>
  <span m="4568680">got</span> <span m="4568870">a</span> <span
  m="4568920">limit</span> <span m="4569430">on</span> <span m="4570560">the
  amount of</span> <span m="4570640">stuff</span> <span m="4570960">I</span>
  <span m="4571020">can</span> <span m="4571140">put</span> <span
  m="4571310">into</span> <span m="4571440">the</span> <span
  m="4571540">knapsack.</span> <span m="4572500">And</span> <span
  m="4573280">I</span> <span m="4573370">want</span> <span m="4573490">to</span>
  <span m="4573530">make</span> <span m="4574490">to</span> <span
  m="4574580">be</span> <span m="4574690">able</span> <span
  m="4574830">to</span> <span m="4574890">say</span> <span
  m="4575100">yes</span> <span m="4575350">or</span> <span m="4575450">no</span>
  <span m="4576100">in</span> <span m="4576230">terms</span> <span
  m="4576470">of</span> <span m="4576620">whether</span> <span
  m="4576850">it</span> <span m="4576990">fits</span> <span
  m="4577200">exactly</span> <span m="4577730">or</span> <span
  m="4577820">not,</span> <span m="4578510">just</span> <span
  m="4579120">in</span> <span m="4579630">terms</span> <span
  m="4579840">of</span> <span m="4579940">our</span> <span
  m="4580050">definition.</span> <span m="4580900">So</span> <span
  m="4581070">what</span> <span m="4581320">I</span> <span m="4581400">do</span>
  <span m="4581550">here</span> <span m="4582690">in</span> <span
  m="4583110">super</span> <span m="4583300">increasing</span> <span
  m="4583700">knapsack?</span> <span m="4585650">Yep.</span></p><p><span
  m="4586893">AUDIENCE: [INAUDIBLE]</span> <span m="4588312">from</span> <span
  m="4588785">the biggest</span> <span m="4589258">to the</span> <span
  m="4589731">smallest</span> <span m="4590204">[INAUDIBLE].</span></p><p><span
  m="4591150">SRINIVAS DEVADAS: Exactly.</span> <span m="4591940">That</span>
  <span m="4592090">means</span> <span m="4592230">that there's</span> <span
  m="4592380">a</span> <span m="4592420">linear</span> <span
  m="4592700">time</span> <span m="4592950">algorithm</span> <span
  m="4593730">that</span> <span m="4593880">basically</span> <span
  m="4594230">solves</span> <span m="4594520">the</span> <span
  m="4594610">problem.</span> <span m="4595300">And</span> <span
  m="4595470">you</span> <span m="4595580">know</span> <span
  m="4595820">that</span> <span m="4597220">you</span> <span
  m="4597890">can</span> <span m="4598000">do</span> <span
  m="4598110">that,</span> <span m="4598730">and</span> <span
  m="4598970">you</span> <span m="4599080">would</span> <span
  m="4599210">get</span> <span m="4599360">the</span> <span
  m="4599440">correct</span> <span m="4599700">answer.</span> <span
  m="4600850">So</span> <span m="4601010">that's</span> <span
  m="4601150">pretty</span> <span m="4601310">much</span> <span
  m="4601480">what</span> <span m="4601850">you've</span> <span
  m="4601920">got.</span> <span m="4602840">That'll</span> <span
  m="4603160">give</span> <span m="4603280">you</span> <span
  m="4603360">the</span> <span m="4603440">highest</span> <span
  m="4603740">weight.</span></p><p><span m="4605710">If</span> <span
  m="4605820">you</span> <span m="4605880">have</span> <span
  m="4606000">13</span> <span m="4606400">exactly,</span> <span
  m="4607310">you</span> <span m="4607360">know you</span> <span
  m="4607720">can't</span> <span m="4607870">put</span> <span
  m="4607970">52</span> <span m="4608470">and</span> <span
  m="4608560">27.</span> <span m="4609100">You</span> <span
  m="4609210">get</span> <span m="4609450">13.</span> <span
  m="4610170">There's</span> <span m="4610330">no</span> <span
  m="4610440">point</span> <span m="4610670">in</span> <span
  m="4610740">putting</span> <span m="4611070">2</span> <span
  m="4611300">and</span> <span m="4611420">3</span> <span m="4611620">and</span>
  <span m="4611740">6,</span> <span m="4612580">because</span> <span
  m="4612830">that's</span> <span m="4613000">not</span> <span
  m="4613130">going</span> <span m="4613220">to</span> <span
  m="4613260">give</span> <span m="4613400">you</span> <span
  m="4614440">13.</span> <span m="4616400">So</span> <span
  m="4616520">that's</span> <span m="4616760">clearly</span> <span
  m="4617150">easy.</span></p><p><span m="4617920">So</span> <span
  m="4618350">we've</span> <span m="4618430">got</span> <span
  m="4618720">an</span> <span m="4618920">interesting</span> <span
  m="4619350">case</span> <span m="4619620">here,</span> <span
  m="4620950">assuming</span> <span m="4621210">this</span> <span m="4621370">is
  all</span> <span m="4621620">going</span> <span m="4621720">to</span> <span
  m="4621780">work</span> <span m="4622010">out</span> <span
  m="4622410">from</span> <span m="4622630">an</span> <span
  m="4622820">adversarial</span> <span m="4623390">standpoint,</span> <span
  m="4624200">which</span> <span m="4624370">unfortunately</span> <span
  m="4624645">it</span> <span m="4624920">doesn't,</span> <span
  m="4625670">you</span> <span m="4625930">can</span> <span
  m="4626150">look</span> <span m="4626340">and</span> <span
  m="4626470">say,</span> <span m="4626990">ah,</span> <span
  m="4628160">I</span> <span m="4628270">want</span> <span
  m="4628480">encryption</span> <span m="4629020">to</span> <span
  m="4629120">be</span> <span m="4629920">the</span> <span
  m="4630040">super</span> <span m="4630310">increasing</span> <span
  m="4630740">knapsack.</span> <span m="4632070">Because</span> <span
  m="4632730">that</span> <span m="4632860">should</span> <span
  m="4632980">be</span> <span m="4633110">easy</span> <span
  m="4633360">to</span> <span m="4633480">do.</span> <span
  m="4634730">And</span> <span m="4635110">I</span> <span
  m="4635180">want</span> <span m="4635480">the</span> <span
  m="4635910">decryption,</span> <span m="4636990">not</span> <span
  m="4637410">knowing</span> <span m="4638360">the</span> <span
  m="4640850">private</span> <span m="4641190">key,</span> <span
  m="4641630">to</span> <span m="4641920">be</span> <span m="4642050">as</span>
  <span m="4642200">hard</span> <span m="4642410">as</span> <span
  m="4642510">knapsack.</span> <span m="4643580">OK.</span></p><p><span
  m="4644250">So</span> <span m="4644410">that's</span> <span
  m="4644610">the</span> <span m="4644690">kind</span> <span
  m="4644910">of</span> <span m="4644990">thing</span> <span
  m="4645190">that</span> <span m="4645350">you</span> <span
  m="4645470">could</span> <span m="4645610">do</span> <span
  m="4646590">if</span> <span m="4646860">you</span> <span
  m="4648170">built</span> <span m="4648710">a</span> <span
  m="4648910">cryptosystem.</span> <span m="4649550">And</span> <span
  m="4649640">people</span> <span m="4649910">did,</span> <span
  m="4650230">Merkle</span> <span m="4650510">and</span> <span
  m="4650740">Hellman.</span> <span m="4651550">Hellman</span> <span
  m="4651830">is</span> <span m="4651910">the</span> <span
  m="4651980">same</span> <span m="4652190">guy,</span> <span
  m="4652570">the</span> <span m="4653020">second</span> <span
  m="4653270">name,</span> <span m="4653600">in</span> <span
  m="4653650">Diffie-Hellman.</span> <span m="4654600">They</span> <span
  m="4655110">proposed</span> <span m="4655630">this</span> <span
  m="4656230">particular</span> <span m="4656710">system</span> <span
  m="4657590">that</span> <span m="4657850">ended</span> <span
  m="4658370">up</span> <span m="4658970">being</span> <span
  m="4659210">broken</span> <span m="4659610">soon</span> <span
  m="4659850">after.</span></p><p><span m="4660830">But</span> <span
  m="4660950">the</span> <span m="4661070">idea</span> <span
  m="4661490">is</span> <span m="4661840">that</span> <span
  m="4662030">you</span> <span m="4662200">create</span> <span
  m="4662520">a</span> <span m="4662580">private</span> <span
  m="4663020">key.</span> <span m="4666150">And</span> <span
  m="4666480">the</span> <span m="4666550">private</span> <span
  m="4666850">key</span> <span m="4667250">is</span> <span m="4667480">a</span>
  <span m="4667560">super</span> <span m="4667910">increasing</span> <span
  m="4668350">knapsack.</span> <span m="4674980">And</span> <span
  m="4675140">then</span> <span m="4675320">you</span> <span
  m="4675440">use</span> <span m="4675650">a</span> <span
  m="4675720">private</span> <span m="4676110">transform</span> <span
  m="4683170">in</span> <span m="4683360">order</span> <span
  m="4683570">to</span> <span m="4683660">get</span> <span
  m="4684990">a--</span> <span m="4686720">and</span> <span
  m="4686970">this</span> <span m="4687120">is</span> <span
  m="4687270">really</span> <span m="4687520">I</span> <span
  m="4687580">put</span> <span m="4687740">it</span> <span m="4687840">in</span>
  <span m="4687850">quotes,</span> <span m="4688270">because</span> <span
  m="4689430">this</span> <span m="4689600">was</span> <span
  m="4689760">the</span> <span m="4689810">bug--</span> <span
  m="4693490">&quot;hard&quot;</span> <span m="4693900">Knapsack</span> <span
  m="4694410">problem.</span> <span m="4697650">And</span> <span
  m="4697970">this</span> <span m="4698260">corresponded</span> <span
  m="4698740">to</span> <span m="4700100">the</span> <span
  m="4700260">public</span> <span m="4700600">key.</span></p><p><span
  m="4705500">And</span> <span m="4705690">so</span> <span
  m="4706390">what</span> <span m="4706590">you</span> <span
  m="4706710">do</span> <span m="4706990">is</span> <span m="4707350">you</span>
  <span m="4707500">won't</span> <span m="4707620">actually</span> <span
  m="4707860">have</span> <span m="4708000">to</span> <span
  m="4708070">solve</span> <span m="4708900">Knapsack</span> <span
  m="4709460">for</span> <span m="4709630">encryption,</span> <span
  m="4711270">the</span> <span m="4711440">hard</span> <span
  m="4711650">problem.</span> <span m="4712460">The</span> <span
  m="4712670">encryption</span> <span m="4713170">would</span> <span
  m="4713300">just</span> <span m="4713460">simply</span> <span
  m="4713790">take</span> <span m="4714000">the</span> <span
  m="4714090">public</span> <span m="4714420">key,</span> <span
  m="4714600">which</span> <span m="4714700">is</span> <span
  m="4715260">completely</span> <span m="4715860">public,</span> <span
  m="4716810">and</span> <span m="4717630">you</span> <span
  m="4717820">would</span> <span m="4718930">create</span> <span
  m="4720440">the</span> <span m="4720730">encryption</span> <span
  m="4721120">of</span> <span m="4721210">a</span> <span
  m="4721260">message</span> <span m="4722340">using</span> <span
  m="4722710">this</span> <span m="4723610">particular</span> <span
  m="4724600">public</span> <span m="4725050">key</span> <span
  m="4725450">in</span> <span m="4725590">a</span> <span
  m="4725640">polynomial</span> <span m="4728580">time.</span> <span
  m="4729680">But</span> <span m="4729830">the</span> <span
  m="4729900">inversion,</span> <span m="4732440">not</span> <span
  m="4732810">knowing</span> <span m="4733080">the</span> <span
  m="4733190">private</span> <span m="4733510">key,</span> <span m="4734830">you
  would</span> <span m="4734990">force the</span> <span
  m="4735370">adversary</span> <span m="4735970">to</span> <span
  m="4736070">solve</span> <span m="4737820">what</span> <span
  m="4737980">you</span> <span m="4738080">think</span> <span
  m="4738290">was</span> <span m="4738420">hard</span> <span
  m="4738790">general</span> <span m="4739090">Knapsack</span> <span
  m="4739520">problem</span> <span m="4740050">to</span> <span
  m="4740430">actually</span> <span m="4740770">break</span> <span
  m="4741020">the</span> <span m="4741100">scheme</span> <span
  m="4741810">or</span> <span m="4742120">to</span> <span m="4742240">get</span>
  <span m="4742940">the</span> <span m="4743030">decryption.</span></p><p><span
  m="4743920">And</span> <span m="4744070">so</span> <span
  m="4744190">let</span> <span m="4744300">me</span> <span
  m="4744420">show</span> <span m="4744740">you</span> <span
  m="4744970">really</span> <span m="4745270">quickly</span> <span
  m="4746130">how</span> <span m="4746980">this</span> <span
  m="4747210">works</span> <span m="4747500">with</span> <span
  m="4747630">numbers.</span> <span m="4748230">And</span> <span
  m="4749220">we</span> <span m="4749370">won't</span> <span m="4749680">have
  you</span> <span m="4749750">worry</span> <span m="4749940">about</span> <span
  m="4751090">symbols</span> <span m="4751550">and</span> <span
  m="4751670">things</span> <span m="4751850">like</span> <span
  m="4752000">that.</span> <span m="4752820">So</span> <span
  m="4753410">just</span> <span m="4753560">give</span> <span
  m="4753700">me</span> <span m="4753880">a</span> <span
  m="4755210">couple</span> <span m="4755500">of</span> <span
  m="4755580">extra</span> <span m="4755860">minutes</span> <span
  m="4756140">here.</span></p><p><span m="4757080">So</span> <span
  m="4757190">let's</span> <span m="4757370">say</span> <span
  m="4757510">that</span> <span m="4757670">I</span> <span
  m="4757740">had</span> <span m="4757940">a</span> <span
  m="4757990">message.</span> <span m="4762310">Oh,</span> <span
  m="4762430">before</span> <span m="4762660">I</span> <span
  m="4762720">do</span> <span m="4762850">that,</span> <span
  m="4764250">let</span> <span m="4764440">me</span> <span
  m="4765360">look</span> <span m="4765590">at--</span> <span
  m="4766680">let's</span> <span m="4766860">say,</span> <span
  m="4766960">that</span> <span m="4767080">we</span> <span
  m="4767190">chose</span> <span m="4767520">N</span> <span
  m="4767720">equals</span> <span m="4768050">31</span> <span
  m="4769210">and</span> <span m="4769420">M</span> <span
  m="4769650">equals</span> <span m="4769960">105.</span> <span
  m="4771200">This</span> <span m="4772040">is</span> <span
  m="4772110">actually</span> <span m="4772400">the</span> <span
  m="4772490">message.</span></p><p><span m="4776520">No,</span> <span
  m="4776620">I'm</span> <span m="4776700">sorry.</span> <span
  m="4777950">Capital</span> <span m="4778280">M</span> <span
  m="4778380">is</span> <span m="4778470">not</span> <span
  m="4778620">the</span> <span m="4778700">message.</span> <span
  m="4779260">These</span> <span m="4779450">are</span> <span
  m="4779540">public</span> <span m="4780450">parameters.</span> <span
  m="4783150">And</span> <span m="4784100">we're</span> <span
  m="4784340">going</span> <span m="4784610">to</span> <span
  m="4785480">take--</span> <span m="4787140">this</span> <span
  m="4787380">is</span> <span m="4787510">a</span> <span
  m="4787560">transform.</span></p><p><span m="4792140">Oh,</span> <span
  m="4792280">I'm</span> <span m="4792410">sorry.</span> <span
  m="4792620">These</span> <span m="4792830">are</span> <span
  m="4792850">not</span> <span m="4793030">public.</span> <span
  m="4793660">These</span> <span m="4793820">are</span> <span
  m="4793890">private.</span> <span m="4794600">My bad.</span> <span
  m="4797230">So</span> <span m="4797410">what</span> <span
  m="4797550">I'm</span> <span m="4797600">going</span> <span
  m="4797930">to</span> <span m="4797990">show</span> <span
  m="4798220">you</span> <span m="4798450">is</span> <span
  m="4798620">I'm</span> <span m="4798710">going</span> <span
  m="4798800">to</span> <span m="4798870">take</span> <span m="4799050">a</span>
  <span m="4799290">super</span> <span m="4799570">increasing</span> <span
  m="4800000">Knapsack.</span> <span m="4800830">And</span> <span
  m="4800970">that's</span> <span m="4801120">exactly</span> <span
  m="4801490">what</span> <span m="4801620">I</span> <span
  m="4801670">have</span> <span m="4801840">up</span> <span
  m="4801960">there.</span></p><p><span m="4802620">So</span> <span
  m="4802820">that</span> <span m="4803210">corresponds</span> <span
  m="4803590">to</span> <span m="4803860">an</span> <span
  m="4804010">easy</span> <span m="4804330">Knapsack</span> <span
  m="4804780">problem.</span> <span m="4805580">I'm</span> <span
  m="4805710">going</span> <span m="4805820">to</span> <span
  m="4805870">convert</span> <span m="4806280">it</span> <span
  m="4806880">using</span> <span m="4807240">these</span> <span
  m="4807850">private</span> <span m="4808230">parameters,</span> <span
  m="4809540">N</span> <span m="4809690">equals</span> <span
  m="4810090">31</span> <span m="4810610">and</span> <span m="4810720">M</span>
  <span m="4810890">equals</span> <span m="4811150">105.</span> <span
  m="4812480">And</span> <span m="4812680">so</span> <span
  m="4812840">our</span> <span m="4812970">private</span> <span
  m="4813400">key</span> <span m="4815240">is</span> <span
  m="4815440">our</span> <span m="4815570">super</span> <span
  m="4815850">increasing</span> <span m="4816290">knapsack,</span> <span
  m="4817310">which</span> <span m="4817430">is</span> <span
  m="4817610">2,</span> <span m="4818030">3,</span> <span m="4818610">6,</span>
  <span m="4819506">13,</span> <span m="4820402">27,</span> <span
  m="4822100">and</span> <span m="4822260">52.</span></p><p><span
  m="4823720">And</span> <span m="4824280">the</span> <span
  m="4824370">public</span> <span m="4824700">key,</span> <span
  m="4829120">what</span> <span m="4829400">I'm</span> <span
  m="4829480">going</span> <span m="4829610">to</span> <span
  m="4829680">do</span> <span m="4829920">is</span> <span
  m="4830080">simply</span> <span m="4832410">multiply</span> <span
  m="4833550">each</span> <span m="4833800">of</span> <span
  m="4833940">these,</span> <span m="4835400">2</span> <span
  m="4835730">times</span> <span m="4836170">N.</span> <span
  m="4837310">And</span> <span m="4837750">I'm</span> <span
  m="4837830">going</span> <span m="4837990">to</span> <span
  m="4838080">take</span> <span m="4839470">mod</span> <span
  m="4839890">M.</span> <span m="4841720">So</span> <span m="4841870">for</span>
  <span m="4842010">each</span> <span m="4842210">of</span> <span
  m="4842290">those</span> <span m="4842470">values,</span> <span
  m="4842950">I</span> <span m="4843010">multiplied</span> <span
  m="4843550">by</span> <span m="4843710">N,</span> <span
  m="4844060">which</span> <span m="4844200">is</span> <span
  m="4844300">31,</span> <span m="4844850">and</span> <span
  m="4845000">take</span> <span m="4845140">the</span> <span
  m="4845210">mod</span> <span m="4845540">of</span> <span
  m="4845600">105,</span> <span m="4846560">and</span> <span
  m="4846720">I</span> <span m="4846780">end</span> <span m="4846920">up</span>
  <span m="4847030">getting</span> <span m="4847270">62,</span> <span
  m="4848600">93,</span> <span m="4849584">81,</span> <span
  m="4850568">88,</span> <span m="4852044">102,</span> <span
  m="4853370">and</span> <span m="4853600">37.</span></p><p><span
  m="4855480">So</span> <span m="4859170">you</span> <span
  m="4859310">can</span> <span m="4859420">get</span> <span m="4859550">a</span>
  <span m="4859610">private</span> <span m="4859950">key</span> <span
  m="4860210">and</span> <span m="4860300">a</span> <span
  m="4860360">public</span> <span m="4860660">key</span> <span
  m="4861250">using</span> <span m="4861580">this</span> <span
  m="4861750">private</span> <span m="4862030">transform.</span> <span
  m="4863950">I'll</span> <span m="4864040">let</span> <span
  m="4864210">you</span> <span m="4864300">look</span> <span
  m="4864420">at</span> <span m="4864480">the</span> <span
  m="4864550">notes.</span> <span m="4864940">But</span> <span
  m="4865140">basically</span> <span m="4865490">what</span> <span
  m="4865590">happens</span> <span m="4865930">is</span> <span
  m="4866430">when</span> <span m="4866550">you</span> <span
  m="4866660">take</span> <span m="4866850">a</span> <span
  m="4866910">particular</span> <span m="4867270">message</span> <span
  m="4867730">M,</span> <span m="4869500">what</span> <span
  m="4869660">you</span> <span m="4869760">end</span> <span
  m="4869920">up</span> <span m="4870030">doing</span> <span
  m="4870360">is</span> <span m="4871080">you</span> <span
  m="4871280">want</span> <span m="4871460">to</span> <span
  m="4871510">encrypt</span> <span m="4871780">it</span> <span
  m="4872050">using</span> <span m="4872310">the</span> <span
  m="4872410">public</span> <span m="4872740">key,</span> <span
  m="4873560">which</span> <span m="4873680">is</span> <span
  m="4873830">this</span> <span m="4874040">quantity</span> <span
  m="4874440">over</span> <span m="4874590">here.</span> <span
  m="4875690">And</span> <span m="4876350">the</span> <span
  m="4876470">way</span> <span m="4876620">you</span> <span
  m="4876720">encrypt</span> <span m="4877090">that</span> <span
  m="4877800">is</span> <span m="4878450">simply</span> <span
  m="4878860">by</span> <span m="4880450">taking</span> <span
  m="4880840">a</span> <span m="4880900">particular</span> <span
  m="4881240">message.</span></p><p><span m="4882090">And</span> <span
  m="4882130">let's</span> <span m="4882280">say</span> <span
  m="4882400">that</span> <span m="4882540">the</span> <span
  m="4882600">message</span> <span m="4882920">is</span> <span
  m="4883050">written</span> <span m="4883360">as</span> <span
  m="4883540">011000.</span> <span m="4886770">Then</span> <span
  m="4887020">all</span> <span m="4887180">you</span> <span
  m="4887320">do</span> <span m="4887570">is</span> <span m="4887770">add</span>
  <span m="4888030">up</span> <span m="4888980">93</span> <span
  m="4889680">and</span> <span m="4889810">81,</span> <span
  m="4890880">because</span> <span m="4891080">those</span> <span
  m="4891150">are</span> <span m="4891435">those</span> <span
  m="4891720">two.</span> <span m="4892440">And</span> <span
  m="4892570">you</span> <span m="4892680">say</span> <span
  m="4892850">this</span> <span m="4893220">is</span> <span
  m="4893370">going</span> <span m="4893490">to</span> <span
  m="4893530">get</span> <span m="4893660">encrypted</span> <span
  m="4894970">by</span> <span m="4895240">174.</span> <span
  m="4897200">So</span> <span m="4897490">the</span> <span
  m="4897600">message</span> <span m="4897960">encryption</span> <span
  m="4898830">is</span> <span m="4898980">simply</span> <span
  m="4899500">a</span> <span m="4899620">simple</span> <span
  m="4899980">operation</span> <span m="4900520">where you</span> <span
  m="4900800">add</span> <span m="4901040">up</span> <span
  m="4901530">weights</span> <span m="4901820">of</span> <span
  m="4901910">the</span> <span m="4901970">knapsack.</span> <span
  m="4903430">So</span> <span m="4903450">you</span> <span
  m="4903570">end</span> <span m="4903720">up</span> <span
  m="4903820">getting</span> <span m="4904050">174</span> <span m="4904890">out
  here.</span></p><p><span m="4906320">And</span> <span m="4907770">the</span>
  <span m="4908250">hope</span> <span m="4908560">is,</span> <span
  m="4908870">of</span> <span m="4908970">course,</span> <span
  m="4909850">that</span> <span m="4910350">when</span> <span
  m="4910500">adversary</span> <span m="4911100">sees</span> <span
  m="4911450">174--</span> <span m="4912250">and</span> <span
  m="4912330">this</span> <span m="4912460">is</span> <span
  m="4912720">the</span> <span m="4912810">part</span> <span
  m="4913070">where</span> <span m="4913660">things</span> <span
  m="4913860">get</span> <span m="4914000">a</span> <span
  m="4914040">little</span> <span m="4914270">iffy--</span> <span
  m="4918030">that</span> <span m="4918280">it's</span> <span
  m="4918420">hard--</span> <span m="4919780">you</span> <span
  m="4919920">have</span> <span m="4920020">to</span> <span
  m="4920060">think</span> <span m="4920210">about</span> <span
  m="4920390">lots</span> <span m="4920610">of</span> <span
  m="4920680">numbers</span> <span m="4920990">here,</span> <span
  m="4921160">of</span> <span m="4921240">course--</span> <span
  m="4922260">for</span> <span m="4922340">the</span> <span
  m="4922550">adversary</span> <span m="4923520">to</span> <span
  m="4923670">figure</span> <span m="4923980">out</span> <span
  m="4925180">that</span> <span m="4925510">that</span> <span
  m="4926020">174</span> <span m="4926540">is</span> <span
  m="4926640">actually</span> <span m="4926910">93</span> <span
  m="4927440">plus</span> <span m="4927540">81.</span> <span
  m="4928610">OK.</span> <span m="4930490">So</span> <span
  m="4930730">the</span> <span m="4930840">diverse</span> <span
  m="4931250">is</span> <span m="4931380">not</span> <span
  m="4931920">necessarily</span> <span m="4933160">an</span> <span
  m="4933310">easy</span> <span m="4933630">problem.</span></p><p><span
  m="4934470">And</span> <span m="4934540">that's</span> <span
  m="4934710">exactly</span> <span m="4935060">what</span> <span
  m="4935210">Knapsack</span> <span m="4935590">is,</span> <span
  m="4935800">right?</span> <span m="4936400">I</span> <span
  m="4936520">tell</span> <span m="4936700">you</span> <span
  m="4936830">what</span> <span m="4936980">the</span> <span
  m="4937060">sum</span> <span m="4937430">is</span> <span
  m="4938400">over</span> <span m="4938610">there,</span> <span
  m="4938880">which</span> <span m="4939010">is</span> <span
  m="4939130">S.</span> <span m="4939840">And</span> <span m="4939970">I</span>
  <span m="4940040">tell</span> <span m="4940200">you</span> <span
  m="4940340">what</span> <span m="4940490">the</span> <span
  m="4940580">weights</span> <span m="4940940">are.</span> <span
  m="4941710">And</span> <span m="4941780">it's</span> <span
  m="4941880">hard</span> <span m="4942230">for</span> <span
  m="4942350">you</span> <span m="4942500">to</span> <span
  m="4942590">figure</span> <span m="4942830">out</span> <span
  m="4942950">what</span> <span m="4943080">the</span> <span
  m="4943150">BIs</span> <span m="4943470">are.</span> <span
  m="4944950">So</span> <span m="4945130">now</span> <span
  m="4945300">you</span> <span m="4945430">see</span> <span
  m="4945900">why</span> <span m="4946480">this</span> <span
  m="4946960">didn't</span> <span m="4947150">work.</span></p><p><span
  m="4948550">So</span> <span m="4948940">you</span> <span
  m="4949150">have</span> <span m="4949380">to</span> <span
  m="4949490">have</span> <span m="4950270">a</span> <span
  m="4950330">situation</span> <span m="4950940">where</span> <span
  m="4951650">in</span> <span m="4951800">the</span> <span
  m="4951890">average</span> <span m="4952460">case</span> <span
  m="4953460">whatever</span> <span m="4954240">you</span> <span
  m="4954390">produce</span> <span m="4954910">for</span> <span m="4955020">the
  ciphered</span> <span m="4955150">text</span> <span m="4955850">here,</span>
  <span m="4957040">you're</span> <span m="4957240">sending</span> <span
  m="4957650">out</span> <span m="4957830">the</span> <span
  m="4957920">ciphered</span> <span m="4958180">text</span> <span
  m="4958530">according to</span> <span m="4958840">this</span> <span
  m="4959020">cryptosystem,</span> <span m="4959590">which</span> <span
  m="4959710">is</span> <span m="4959800">174,</span> <span
  m="4961140">and</span> <span m="4961820">you</span> <span
  m="4961950">want</span> <span m="4962060">to</span> <span
  m="4962100">make</span> <span m="4962250">sure</span> <span
  m="4962490">that</span> <span m="4963620">the</span> <span
  m="4963990">adversary</span> <span m="4964590">can't</span> <span
  m="4964880">figure</span> <span m="4965190">out</span> <span m="4965390">that
  this</span> <span m="4965540">is</span> <span m="4965690">actually</span>
  <span m="4966010">93</span> <span m="4966530">plus</span> <span
  m="4966620">81.</span> <span m="4967830">Amazingly,</span> <span
  m="4968310">people</span> <span m="4968560">thought</span> <span
  m="4969170">they</span> <span m="4969310">could</span> <span
  m="4969550">build</span> <span m="4970110">systems</span> <span
  m="4970480">using</span> <span m="4970750">this</span> <span
  m="4971770">assuming</span> <span m="4972160">these</span> <span
  m="4972360">numbers</span> <span m="4972650">were</span> <span
  m="4972770">much</span> <span m="4972970">larger</span> <span
  m="4973300">than</span> <span m="4973460">they</span> <span
  m="4973570">are</span> <span m="4973740">here.</span> <span
  m="4974500">But</span> <span m="4976050">that</span> <span
  m="4976330">certainly</span> <span m="4976600">wasn't</span> <span
  m="4976850">the</span> <span m="4976920">case.</span> <span
  m="4977220">Because</span> <span m="4977460">in the</span> <span
  m="4977620">average</span> <span m="4978060">case,</span> <span
  m="4978790">you</span> <span m="4978970">end</span> <span
  m="4979160">up</span> <span m="4979450">being</span> <span
  m="4979780">able</span> <span m="4979910">to</span> <span
  m="4979960">break</span> <span m="4980190">these</span> <span
  m="4980350">systems.</span></p><p><span m="4981590">The</span> <span
  m="4981670">last</span> <span m="4981950">thing</span> <span
  m="4982130">is,</span> <span m="4982440">of</span> <span
  m="4982560">course,</span> <span m="4983680">you</span> <span
  m="4983860">don't</span> <span m="4983990">want</span> <span
  m="4984090">to</span> <span m="4984160">necessarily</span> <span
  m="4984740">solve</span> <span m="4985230">the</span> <span
  m="4985300">hard</span> <span m="4985730">Knapsack</span> <span
  m="4986250">problem</span> <span m="4987450">associated</span> <span
  m="4988010">with</span> <span m="4989840">this.</span> <span
  m="4990420">So</span> <span m="4990570">what</span> <span
  m="4990720">ends</span> <span m="4990900">up</span> <span
  m="4991000">happening</span> <span m="4991410">is</span> <span
  m="4992290">you</span> <span m="4992470">end</span> <span
  m="4992710">up</span> <span m="4994630">using</span> <span
  m="4995170">N</span> <span m="4995360">equals</span> <span
  m="4995750">31.</span> <span m="4996330">So if you</span> <span
  m="4996610">want</span> <span m="4996890">to decrypt,</span> <span
  m="4997630">you</span> <span m="4997760">have</span> <span
  m="4998000">N</span> <span m="4998190">equals</span> <span
  m="4998530">31</span> <span m="4999470">and</span> <span m="4999720">M</span>
  <span m="5000040">equals</span> <span m="5000360">105.</span> <span
  m="5001620">And</span> <span m="5002090">what</span> <span
  m="5002270">you're</span> <span m="5002350">going</span> <span
  m="5002470">to</span> <span m="5002540">do</span> <span m="5002700">is</span>
  <span m="5002870">take</span> <span m="5003140">this</span> <span
  m="5003840">and</span> <span m="5003960">multiply</span> <span
  m="5004550">it</span> <span m="5005240">by</span> <span m="5005960">N</span>
  <span m="5006450">inverse</span> <span m="5007410">mod</span> <span
  m="5007770">M.</span></p><p><span m="5010270">So</span> <span
  m="5012470">rather</span> <span m="5012670">than</span> <span
  m="5012800">doing</span> <span m="5013490">times</span> <span
  m="5013890">N</span> <span m="5014260">mod</span> <span m="5014530">M,</span>
  <span m="5015090">you</span> <span m="5015210">divide</span> <span
  m="5015650">by</span> <span m="5015830">N</span> <span m="5016480">mod
  M.</span> <span m="5017200">And</span> <span m="5017760">you</span> <span
  m="5017910">can</span> <span m="5018030">do</span> <span
  m="5018170">this</span> <span m="5018450">operation</span> <span
  m="5019570">relatively</span> <span m="5019990">simply.</span> <span
  m="5020720">And</span> <span m="5020860">you</span> <span
  m="5020960">can</span> <span m="5021070">go</span> <span
  m="5021210">back</span> <span m="5021440">from</span> <span
  m="5021590">174</span> <span m="5023140">to</span> <span
  m="5025860">figuring</span> <span m="5026210">out</span> <span
  m="5026810">what</span> <span m="5027110">the</span> <span
  m="5027330">actual</span> <span m="5027670">message</span> <span
  m="5028010">was</span> <span m="5028970">by</span> <span
  m="5030690">computing</span> <span m="5031080">this</span> <span
  m="5031620">quantity.</span></p><p><span m="5032770">So</span> <span
  m="5033250">I'll</span> <span m="5033450">stop</span> <span
  m="5033710">there.</span> <span m="5034280">I</span> <span
  m="5034460">didn't</span> <span m="5034830">quite</span> <span
  m="5035060">get</span> <span m="5035270">to</span> <span
  m="5035640">everything</span> <span m="5035960">that</span> <span
  m="5036060">I</span> <span m="5036100">wanted</span> <span
  m="5036320">to</span> <span m="5036390">cover.</span> <span
  m="5036720">But</span> <span m="5037420">take</span> <span
  m="5037590">a</span> <span m="5037630">look</span> <span m="5037740">at</span>
  <span m="5037790">the</span> <span m="5037870">notes.</span> <span
  m="5038460">Get</span> <span m="5038570">a</span> <span
  m="5038630">sense</span> <span m="5038920">for</span> <span
  m="5039830">why</span> <span m="5040140">the</span> <span
  m="5040270">difference</span> <span m="5041550">exists</span> <span
  m="5041950">between</span> <span m="5042330">NP-complete</span> <span
  m="5042820">problems</span> <span m="5043690">and</span> <span
  m="5044040">problems</span> <span m="5044400">that</span> <span
  m="5044500">were</span> <span m="5044590">used in</span> <span
  m="5045040">cryptosystems.</span> <span m="5046260">And</span> <span
  m="5047290">happy</span> <span m="5047520">to</span> <span
  m="5047590">stick</span> <span m="5047760">around</span> <span
  m="5048040">and</span> <span m="5048270">answer</span> <span
  m="5048550">questions.</span></p>
uid: d72d5d2293323f30844d3efdfdd26f92
type: course
layout: video
---
