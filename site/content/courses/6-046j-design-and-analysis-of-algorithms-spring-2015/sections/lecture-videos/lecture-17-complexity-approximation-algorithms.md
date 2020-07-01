---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas introduces
  approximation algorithms in the context of NP-hard
  problems.</p><p><strong>Instructors:</strong> Srinivas Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: MEz1J9wY2iM
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9f7923c55583773217a0a17e1d467a94
  - id: MEz1J9wY2iM.srt
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-17-complexity-approximation-algorithms/MEz1J9wY2iM.srt
    title: 3play caption file
    type: null
    uid: 861535928582a2de38cc1aba3e9cde1b
  - id: MEz1J9wY2iM.pdf
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-17-complexity-approximation-algorithms/MEz1J9wY2iM.pdf
    title: 3play pdf file
    type: null
    uid: 272d4a9d48200af44540305ae9583053
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5066fc25fba66b4bbc6786ef9eeb3441
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1f0dd739b1cf4061048478057cefa063
  - id: Video-YouTube-Stream
    media_location: MEz1J9wY2iM
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: Video-YouTube-Stream
    type: Video
    uid: eda232a34a808d12e325d45a3024dc58
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MEz1J9wY2iM/default.jpg'
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: e2a2f7bc7e97e300ce1203f51468320f
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: Video-iTunes U-MP4
    type: Video
    uid: 3e49e3cc009644f610e69f20c7398203
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec17_300k.mp4'
    parent_uid: 1f087eebe86fabc3eb50a5f47537e8e6
    title: Video-Internet Archive-MP4
    type: Video
    uid: b804bd32f5b1f7f904790dc79186b264
inline_embed_id: '90873438lecture17:complexity:approximationalgorithms78982074'
order_index: 267
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-17-complexity-approximation-algorithms
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-17-complexity-approximation-algorithms
title: 'Lecture 17: Complexity: Approximation Algorithms'
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
  m="21180">PROFESSOR: Let's</span> <span m="21400">get</span> <span
  m="21530">started.</span> <span m="22900">Thanks</span> <span
  m="23010">for</span> <span m="23090">coming</span> <span m="23320">to</span>
  <span m="23600">lecture.</span> <span m="24170">Know</span> <span
  m="24310">there's</span> <span m="24520">a</span> <span m="24580">quiz</span>
  <span m="25070">coming</span> <span m="25320">up.</span> <span
  m="25830">There</span> <span m="25980">will</span> <span m="26120">be a</span>
  <span m="26270">tangible</span> <span m="26980">benefit</span> <span
  m="27510">of</span> <span m="27630">attending</span> <span
  m="28040">this</span> <span m="28230">lecture.</span> <span
  m="30500">And</span> <span m="30660">it's</span> <span m="30800">not</span>
  <span m="31040">Frisbees.</span> <span m="32310">OK?</span> <span
  m="34130">We'll</span> <span m="34330">figure</span> <span m="34610">it</span>
  <span m="34680">out</span> <span m="34890">soon.</span></p><p><span
  m="36270">So,</span> <span m="37350">two</span> <span
  m="37490">lectures</span> <span m="37950">on</span> <span
  m="38530">approximation</span> <span m="39150">algorithms.</span> <span
  m="40500">One</span> <span m="40700">today</span> <span m="41010">and</span>
  <span m="42250">one,</span> <span m="43060">I</span> <span
  m="43420">guess</span> <span m="43690">a</span> <span m="43760">week</span>
  <span m="44060">and</span> <span m="44480">two</span> <span
  m="44650">days</span> <span m="44940">from</span> <span m="45110">today</span>
  <span m="45510">on</span> <span m="45720">Thursday</span> <span
  m="46190">after</span> <span m="46510">the</span> <span
  m="46630">break.</span> <span m="47980">Eric</span> <span
  m="48290">will</span> <span m="48510">give</span> <span m="48730">that</span>
  <span m="48890">one.</span> <span m="49420">So</span> <span
  m="49550">this</span> <span m="49720">is</span> <span m="49850">more</span>
  <span m="50080">of</span> <span m="50210">an</span> <span
  m="50380">introductory</span> <span m="51020">lecture.</span> <span
  m="52310">Eric</span> <span m="52380">talked</span> <span
  m="52700">about</span> <span m="53520">NP</span> <span
  m="53810">complete</span> <span m="54140">problems</span> <span m="54610">and
  NP</span> <span m="54950">hard</span> <span m="55230">problems.</span> <span
  m="56740">He</span> <span m="56910">talked</span> <span m="57150">about</span>
  <span m="57360">how</span> <span m="57530">you</span> <span
  m="57690">could</span> <span m="57830">show</span> <span m="58260">that</span>
  <span m="58710">problems</span> <span m="59880">are</span> <span
  m="60130">NP</span> <span m="60380">complete</span> <span m="60780">or</span>
  <span m="60870">NP</span> <span m="61130">hard.</span> <span
  m="62180">So</span> <span m="62230">what</span> <span m="62360">happens</span>
  <span m="62750">when</span> <span m="62900">you</span> <span
  m="63040">discover</span> <span m="64230">that</span> <span m="64560">a</span>
  <span m="64680">problem</span> <span m="65010">is</span> <span
  m="65110">NP</span> <span m="65330">complete</span> <span m="65700">or</span>
  <span m="65930">NP</span> <span m="66040">hard?</span></p><p><span
  m="67040">Well,</span> <span m="67460">there's</span> <span m="67710">a</span>
  <span m="68300">variety</span> <span m="68860">of</span> <span
  m="69290">strategies.</span> <span m="70850">You</span> <span
  m="70970">could</span> <span m="71090">just</span> <span m="71360">kind</span>
  <span m="71480">of</span> <span m="71520">give</span> <span
  m="71730">up,</span> <span m="72660">and</span> <span m="72870">say</span>
  <span m="73030">this</span> <span m="73200">is</span> <span
  m="73300">intractable.</span> <span m="73990">I</span> <span
  m="74060">want</span> <span m="74240">a</span> <span
  m="74290">different</span> <span m="74550">job.</span> <span
  m="76210">You</span> <span m="76460">could</span> <span m="77400">say</span>
  <span m="77710">that</span> <span m="78060">I'm</span> <span
  m="78280">just</span> <span m="78560">going</span> <span m="78840">to</span>
  <span m="79380">do</span> <span m="79490">the</span> <span
  m="79600">best</span> <span m="79860">I</span> <span m="79940">can</span>
  <span m="80900">without</span> <span m="81220">any</span> <span
  m="81450">theoretical</span> <span m="82050">guarantees.</span> <span
  m="83520">I'm</span> <span m="83830">going</span> <span m="83950">to</span>
  <span m="83990">use</span> <span m="84200">a</span> <span
  m="84250">heuristic.</span> <span m="85010">I'm</span> <span
  m="85180">going</span> <span m="85300">to</span> <span m="85380">think</span>
  <span m="85600">of</span> <span m="85700">the</span> <span
  m="85800">simplest,</span> <span m="86510">greedy</span> <span
  m="86840">heuristic.</span> <span m="87830">I'm</span> <span
  m="87950">going</span> <span m="88060">to</span> <span m="88120">code</span>
  <span m="88370">it</span> <span m="88460">up</span> <span m="88820">and</span>
  <span m="88970">I'm</span> <span m="89050">going</span> <span
  m="89170">to</span> <span m="89220">move</span> <span
  m="89400">on.</span></p><p><span m="91170">Or</span> <span
  m="91750">you</span> <span m="91970">could</span> <span m="92140">do</span>
  <span m="92300">approximation</span> <span m="92900">algorithms.</span> <span
  m="94630">You</span> <span m="94720">could</span> <span m="94840">say,</span>
  <span m="95320">I'm</span> <span m="95560">going</span> <span
  m="95670">to</span> <span m="95730">think</span> <span m="95880">up</span>
  <span m="96230">an</span> <span m="96510">interesting,</span> <span
  m="97140">greedy</span> <span m="97470">heuristic.</span> <span
  m="98760">But</span> <span m="99230">I'm</span> <span m="99410">going</span>
  <span m="99630">to</span> <span m="99830">prove</span> <span
  m="101570">that</span> <span m="102180">this</span> <span
  m="102520">greedy</span> <span m="102800">heuristic,</span> <span
  m="104010">in</span> <span m="104580">every</span> <span
  m="104970">conceivable</span> <span m="105580">situation</span> <span
  m="106330">with</span> <span m="106500">respect</span> <span
  m="106900">to</span> <span m="106990">the</span> <span
  m="107110">inputs,</span> <span m="108040">is</span> <span
  m="108230">going</span> <span m="108430">to</span> <span m="108480">be</span>
  <span m="108690">within</span> <span m="109160">some</span> <span
  m="109510">factor</span> <span m="110280">of</span> <span
  m="110610">optimal.</span> <span m="111880">Right?</span></p><p><span
  m="112150">And</span> <span m="112280">that's</span> <span
  m="112590">what</span> <span m="112730">we're going to do</span> <span
  m="112830">today.</span> <span m="113900">We're</span> <span
  m="114000">going</span> <span m="114110">to</span> <span
  m="114210">take</span> <span m="114830">a</span> <span m="114950">bunch</span>
  <span m="115260">of</span> <span m="115390">NP</span> <span
  m="115640">complete</span> <span m="115990">problems,</span> <span
  m="117030">and</span> <span m="117380">we're</span> <span
  m="117490">going</span> <span m="117730">to</span> <span
  m="119180">essentially</span> <span m="119750">create</span> <span
  m="121590">simple</span> <span m="122740">heuristics</span> <span
  m="123260">with</span> <span m="123370">these</span> <span
  m="123540">problems,</span> <span m="124040">simple</span> <span
  m="124550">strategies</span> <span m="125280">that</span> <span
  m="125390">are</span> <span m="125490">polynomial</span> <span
  m="126140">time,</span> <span m="127220">to</span> <span
  m="127730">quote,</span> <span m="128160">&quot;solve</span> <span
  m="128630">these</span> <span m="128830">problems.&quot;</span> <span
  m="130080">And</span> <span m="131160">what</span> <span
  m="131330">does</span> <span m="131440">it</span> <span m="131550">mean</span>
  <span m="131720">to</span> <span m="131800">solve</span> <span
  m="132120">these</span> <span m="132270">problems?</span> <span
  m="133100">Well,</span> <span m="133360">you know</span> <span
  m="133620">that</span> <span m="134250">if it's</span> <span
  m="134490">polynomial</span> <span m="134980">time,</span> <span
  m="135480">you're</span> <span m="135850">not</span> <span
  m="136000">guaranteed</span> <span m="136640">to</span> <span
  m="136720">get</span> <span m="136940">the</span> <span
  m="137010">optimum</span> <span m="137530">answer</span> <span
  m="138520">every</span> <span m="138800">time.</span> <span
  m="139650">But</span> <span m="140520">you'll</span> <span
  m="140760">call</span> <span m="140970">it a</span> <span
  m="141050">solution--</span> <span m="141760">an</span> <span
  m="141880">approximate</span> <span m="142410">solution--</span> <span
  m="143220">because</span> <span m="143460">you're</span> <span
  m="143620">within</span> <span m="143870">a</span> <span
  m="143920">factor</span> <span m="144390">of two</span> <span
  m="145170">for</span> <span m="145380">every</span> <span
  m="145750">possible</span> <span m="146190">input.</span> <span
  m="147010">That's</span> <span m="147220">one</span> <span
  m="147370">example.</span></p><p><span m="148480">Or,</span> <span
  m="149270">you</span> <span m="149380">have</span> <span m="150110">a</span>
  <span m="150170">more</span> <span m="151800">complicated</span> <span
  m="152830">approximation</span> <span m="153560">factor</span> <span
  m="154110">that</span> <span m="154260">we'll</span> <span
  m="154390">get</span> <span m="154580">to</span> <span m="154670">in</span>
  <span m="154760">a</span> <span m="154820">second,</span> <span
  m="155660">where</span> <span m="156120">it's</span> <span
  m="156290">not</span> <span m="156470">quite</span> <span m="156690">a</span>
  <span m="156740">factor</span> <span m="157140">of two.</span> <span
  m="157780">It might</span> <span m="157960">be</span> <span
  m="158050">a</span> <span m="158100">factor</span> <span m="158410">of</span>
  <span m="158520">two</span> <span m="158740">for</span> <span
  m="159270">small</span> <span m="159700">size</span> <span
  m="159990">problems.</span> <span m="160860">Might</span> <span
  m="161050">be</span> <span m="161140">a</span> <span m="161190">factor</span>
  <span m="161570">of</span> <span m="161670">10</span> <span
  m="161870">for</span> <span m="162020">larger</span> <span
  m="162380">problems.</span> <span m="163290">And</span> <span
  m="163550">so</span> <span m="163690">on</span> <span m="163810">and</span>
  <span m="163890">so</span> <span m="164050">forth.</span></p><p><span
  m="164800">And</span> <span m="164960">then</span> <span m="165070">the</span>
  <span m="165160">last</span> <span m="165420">thing</span> <span
  m="165610">is,</span> <span m="166160">it'd</span> <span m="166340">be</span>
  <span m="166430">great</span> <span m="166870">if</span> <span
  m="167320">you</span> <span m="167480">could</span> <span
  m="167680">spend</span> <span m="168060">more</span> <span
  m="168260">time</span> <span m="169210">and</span> <span m="169450">get</span>
  <span m="169660">better</span> <span m="169880">solutions.</span> <span
  m="171150">And</span> <span m="171450">those</span> <span
  m="171690">are</span> <span m="171920">approximation</span> <span
  m="172520">schemes.</span> <span m="173410">And</span> <span
  m="173570">we'll</span> <span m="173690">look</span> <span
  m="173860">at</span> <span m="174020">approximation</span> <span
  m="174590">schemes</span> <span m="175030">as</span> <span
  m="175160">well.</span> <span m="176370">So,</span> <span
  m="177040">just</span> <span m="177280">dive</span> <span m="177540">in</span>
  <span m="177920">each</span> <span m="178130">of</span> <span
  m="178230">these</span> <span m="178430">problems,</span> <span
  m="179440">depending</span> <span m="179750">on</span> <span
  m="179840">whether</span> <span m="180130">it's</span> <span
  m="180530">decision</span> <span m="182110">or</span> <span
  m="182920">optimization</span> <span m="183800">is</span> <span
  m="184480">NP</span> <span m="184850">complete</span> <span
  m="185440">or</span> <span m="185670">NP</span> <span m="186000">hard.</span>
  <span m="187410">I'll</span> <span m="187480">define</span> <span
  m="187810">these</span> <span m="187980">problems</span> <span
  m="189090">as</span> <span m="189260">we</span> <span m="189370">go</span>
  <span m="189470">along.</span></p><p><span m="190300">But</span> <span
  m="190670">basically,</span> <span m="191130">the</span> <span
  m="191230">name</span> <span m="191420">of</span> <span m="191480">the</span>
  <span m="191560">game</span> <span m="191840">here</span> <span
  m="192560">is,</span> <span m="193720">grab</span> <span m="193840">a</span>
  <span m="193910">problem,</span> <span m="194500">define</span> <span
  m="194900">it,</span> <span m="195710">think</span> <span m="195940">of</span>
  <span m="196090">an</span> <span m="196240">interesting</span> <span
  m="196700">heuristic,</span> <span m="197760">do</span> <span
  m="197920">a</span> <span m="198000">proof.</span> <span m="198950">OK?</span>
  <span m="199420">And</span> <span m="200370">that's</span> <span
  m="201080">essentially</span> <span m="201450">what</span> <span
  m="201570">we're</span> <span m="201670">going</span> <span
  m="201760">to</span> <span m="201840">do</span> <span m="202030">three</span>
  <span m="202230">times.</span> <span m="203070">The good</span> <span
  m="203350">news is</span> <span m="203910">the</span> <span
  m="204020">proofs</span> <span m="204320">aren't</span> <span
  m="204690">tortuous.</span> <span m="205800">They're</span> <span
  m="206000">not</span> <span m="206220">30-minute</span> <span
  m="206650">proofs.</span> <span m="207810">And</span> <span
  m="208400">they</span> <span m="208490">should</span> <span
  m="208640">be</span> <span m="208740">pretty</span> <span
  m="208950">intuitive.</span> <span m="209810">And</span> <span
  m="210070">we'll</span> <span m="210230">see</span> <span m="210370">if</span>
  <span m="210440">we</span> <span m="210540">can</span> <span
  m="210890">extract</span> <span m="211320">them</span> <span
  m="211470">out</span> <span m="211560">of</span> <span m="211610">you.</span>
  <span m="213710">A</span> <span m="213840">painful</span> <span
  m="214310">extraction</span> <span m="214840">process.</span> <span
  m="216780">I</span> <span m="216930">went</span> <span m="217100">to</span>
  <span m="217150">the</span> <span m="217280">dentist</span> <span
  m="217650">yesterday.</span> <span m="220620">Not</span> <span
  m="220840">for</span> <span
  m="220960">extraction.</span></p><p>&nbsp;</p><p><span m="229930">I</span>
  <span m="230090">should've</span> <span m="230300">said,</span> <span
  m="230540">I</span> <span m="230570">went</span> <span m="230740">to</span>
  <span m="230800">the</span> <span m="230900">dentist</span> <span
  m="231290">yesterday</span> <span m="231750">and</span> <span
  m="231860">I'm</span> <span m="231950">now</span> <span
  m="232180">going</span> <span m="232270">to</span> <span
  m="232400">take</span> <span m="232590">it</span> <span m="232680">out</span>
  <span m="232880">on</span> <span m="233070">you,</span> <span
  m="234050">right?</span> <span m="236730">OK,</span> <span
  m="237000">so</span> <span m="237150">what's</span> <span m="237340">an</span>
  <span m="237420">approximation</span> <span m="238110">algorithm?</span> <span
  m="239060">An</span> <span m="239290">algorithm,</span> <span
  m="243710">for</span> <span m="243930">a</span> <span
  m="243990">problem</span> <span m="244470">of</span> <span
  m="244580">size</span> <span m="244990">n,</span> <span m="249430">and</span>
  <span m="249620">so</span> <span m="249700">it's</span> <span
  m="249820">going</span> <span m="249970">to</span> <span m="250040">be</span>
  <span m="250310">parameterized.</span> <span m="251090">And</span> <span
  m="251360">the approximation</span> <span m="251890">factor</span> <span
  m="252280">may</span> <span m="252390">also</span> <span m="252660">be</span>
  <span m="252780">parameterized.</span> <span m="253830">It'd</span> <span
  m="253940">be</span> <span m="254020">nice</span> <span m="254320">if</span>
  <span m="254420">it</span> <span m="254560">weren't,</span> <span
  m="255190">if it were</span> <span m="255270">a</span> <span
  m="255350">constant</span> <span m="255820">factor</span> <span
  m="256190">approximation.</span> <span m="257260">But</span> <span
  m="257430">sometimes</span> <span m="257839">you</span> <span
  m="257970">can't</span> <span m="258200">do</span> <span
  m="258339">that.</span> <span m="259790">And</span> <span m="259829">in</span>
  <span m="259910">fact,</span> <span m="260140">sometimes</span> <span
  m="260459">you</span> <span m="260550">can</span> <span
  m="260649">prove</span> <span m="260910">that</span> <span
  m="261390">constant</span> <span m="261850">factor</span> <span
  m="262280">approximation</span> <span m="263660">algorithms</span> <span
  m="265840">don't</span> <span m="266120">exist.</span> <span
  m="266610">And</span> <span m="266740">if</span> <span m="266820">they</span>
  <span m="266930">do,</span> <span m="267140">then</span> <span
  m="267320">p</span> <span m="267470">equals</span> <span m="267740">NP.</span>
  <span m="268720">All right?</span> <span m="268900">So</span> <span
  m="269070">it's</span> <span m="269800">gets</span> <span
  m="270370">very</span> <span m="270710">interesting.</span></p><p><span
  m="272170">So,</span> <span m="272990">in</span> <span m="273110">this</span>
  <span m="273270">case,</span> <span m="273620">approximation</span> <span
  m="274260">algorithms</span> <span m="274730">or</span> <span
  m="274830">schemes</span> <span m="275240">exist</span> <span
  m="275650">for</span> <span m="275770">these</span> <span
  m="275940">three</span> <span m="276130">problems,</span> <span
  m="276980">which</span> <span m="277140">is</span> <span m="277230">why</span>
  <span m="277410">we</span> <span m="277610">are</span> <span
  m="278340">looking</span> <span m="278660">at</span> <span
  m="278760">them</span> <span m="278880">today.</span> <span
  m="279910">But</span> <span m="280770">you</span> <span m="280880">got</span>
  <span m="281010">a</span> <span m="281060">problem</span> <span
  m="281410">of</span> <span m="281480">size</span> <span m="281780">n.</span>
  <span m="282780">And</span> <span m="283110">we're</span> <span
  m="283180">going</span> <span m="283300">to</span> <span
  m="283350">define</span> <span m="284770">an</span> <span
  m="284940">approximation</span> <span m="285640">ratio,</span> <span
  m="293900">row of n,</span> <span m="296510">for</span> <span
  m="297200">any</span> <span m="297590">input--</span> <span
  m="300340">if</span> <span m="300540">for</span> <span m="300710">any</span>
  <span m="300890">input--</span> <span m="301620">excuse</span> <span
  m="301920">me.</span> <span m="309700">The</span> <span
  m="310040">algorithm</span> <span m="310830">produces</span> <span
  m="311130">a</span> <span m="311390">solution</span> <span
  m="316740">with</span> <span m="316920">cost</span> <span m="317360">C</span>
  <span m="320970">that</span> <span m="321490">satisfies</span> <span
  m="322290">this</span> <span m="322950">little</span> <span
  m="323130">property,</span> <span m="324930">which</span> <span
  m="325140">says</span> <span m="325380">that</span> <span
  m="326720">the</span> <span m="326850">max</span> <span m="327510">of</span>
  <span m="327850">C</span> <span m="328280">divided</span> <span
  m="328700">by</span> <span m="330050">Copt</span> <span
  m="331601">divided</span> <span m="332040">by--</span> <span
  m="332550">oh,</span> <span m="332890">sorry--</span> <span
  m="333320">and</span> <span m="333700">Copt</span> <span
  m="334160">divided</span> <span m="334450">by</span> <span m="334590">C</span>
  <span m="335920">is</span> <span m="336130">less</span> <span
  m="336320">than</span> <span m="336420">or</span> <span
  m="336530">equal</span> <span m="336780">to</span> <span m="336910">row</span>
  <span m="337140">n.</span></p><p><span m="339430">And</span> <span
  m="339900">the</span> <span m="340020">only</span> <span
  m="340210">reason</span> <span m="340450">you</span> <span
  m="340520">have</span> <span m="340680">two</span> <span
  m="340840">terms</span> <span m="341230">in</span> <span
  m="341340">here</span> <span m="342090">is</span> <span
  m="342230">because</span> <span m="342810">you</span> <span
  m="342930">haven't</span> <span m="343490">said</span> <span
  m="343880">whether</span> <span m="344120">it's</span> <span
  m="344240">a</span> <span m="344280">minimization</span> <span
  m="344900">problem</span> <span m="345310">or a</span> <span
  m="345430">maximization</span> <span m="346130">problem.</span> <span
  m="346950">Right, so of</span> <span m="347230">it'</span> <span
  m="347410">a</span> <span m="347460">minimization</span> <span
  m="348040">problem,</span> <span m="349840">you</span> <span
  m="349940">don't</span> <span m="350360">want</span> <span
  m="350610">to</span> <span m="350670">be</span> <span m="351100">too</span>
  <span m="351260">much</span> <span m="351480">greater</span> <span
  m="351930">than</span> <span m="352080">the</span> <span
  m="352160">minimum.</span> <span m="353000">If it's</span> <span
  m="353160">a</span> <span m="353200">maximization</span> <span
  m="353900">problem,</span> <span m="354170">you</span> <span
  m="354440">don't</span> <span m="354520">want to be</span> <span
  m="354630">too</span> <span m="354760">much</span> <span
  m="354960">smaller</span> <span m="355390">than</span> <span
  m="355530">the</span> <span m="355610">maximum.</span> <span
  m="356530">And</span> <span m="356690">so</span> <span m="356770">you</span>
  <span m="356880">just</span> <span m="357090">stick</span> <span
  m="357220">those</span> <span m="357440">two</span> <span
  m="357600">things</span> <span m="357830">in</span> <span
  m="357950">there.</span> <span m="358610">And</span> <span
  m="358960">you</span> <span m="359080">don't</span> <span
  m="359220">worry</span> <span m="359460">about</span> <span
  m="359670">whether</span> <span m="359890">it's</span> <span
  m="360300">min</span> <span m="360680">or</span> <span m="360840">max</span>
  <span m="361220">in</span> <span m="361330">terms</span> <span
  m="361590">of</span> <span m="361730">the</span> <span
  m="361880">objective</span> <span m="362360">function,</span> <span
  m="363200">and</span> <span m="363350">you</span> <span m="363450">want
  it</span> <span m="363720">to</span> <span m="363780">be</span> <span
  m="363980">a</span> <span m="364200">particular</span> <span
  m="364530">ratio.</span> <span m="365580">OK?</span></p><p><span
  m="366610">Now</span> <span m="366740">I</span> <span m="366830">did</span>
  <span m="367010">say</span> <span m="367190">row of</span> <span
  m="367490">n</span> <span m="367730">there.</span> <span m="368550">So</span>
  <span m="368780">this</span> <span m="368990">could</span> <span
  m="369110">be</span> <span m="369240">a</span> <span
  m="369300">constant</span> <span m="370310">or</span> <span
  m="370500">it</span> <span m="370550">could</span> <span m="370660">be</span>
  <span m="370780">a</span> <span m="370820">function</span> <span
  m="371150">of</span> <span m="371260">no.</span> <span m="372300">If
  it's</span> <span m="372400">a</span> <span m="372460">function</span> <span
  m="372770">of</span> <span m="372890">n,</span> <span m="375240">it's</span>
  <span m="375410">going</span> <span m="375570">to</span> <span
  m="375620">be</span> <span m="375760">an</span> <span
  m="375840">increasing</span> <span m="376320">function</span> <span
  m="376670">of</span> <span m="376770">n.</span> <span m="377682">OK?</span>
  <span m="378830">Otherwise</span> <span m="379270">you</span> <span
  m="379380">could</span> <span m="379480">just</span> <span m="379610">bound
  it,</span> <span m="380030">and</span> <span m="380100">have</span> <span
  m="380600">a</span> <span m="380710">constant,</span> <span
  m="381120">obviously.</span></p><p><span m="381980">So,</span> <span
  m="382920">you</span> <span m="383050">might</span> <span
  m="383200">have</span> <span m="383380">something</span> <span
  m="383690">like--</span> <span m="384040">and we'll see</span> <span
  m="384400">one</span> <span m="384530">of</span> <span
  m="384580">these--</span> <span m="385310">log</span> <span
  m="385700">n</span> <span m="385870">approximation</span> <span
  m="386490">scheme,</span> <span m="388610">which</span> <span
  m="388830">says</span> <span m="390000">that</span> <span
  m="391430">you're</span> <span m="391590">going</span> <span
  m="391680">to</span> <span m="391720">be</span> <span m="391840">within</span>
  <span m="391990">logarithmic</span> <span m="394470">of</span> <span
  m="394670">the</span> <span m="394870">answer--</span> <span
  m="395630">the</span> <span m="395700">minimum</span> <span
  m="396050">or</span> <span m="396110">maximum.</span> <span
  m="397210">But</span> <span m="398020">if it's</span> <span
  m="398260">a</span> <span m="398320">million,</span> <span
  m="398720">then</span> <span m="399830">if</span> <span m="399940">you</span>
  <span m="400030">do</span> <span m="400160">log</span> <span
  m="400410">of</span> <span m="400790">base</span> <span m="401120">two,</span>
  <span m="401300">then</span> <span m="401970">you're</span> <span
  m="402240">within</span> <span m="402480">a</span> <span
  m="402530">factor</span> <span m="402810">of</span> <span
  m="402870">20,</span> <span m="404390">which</span> <span
  m="404440">isn't</span> <span m="404600">that</span> <span
  m="404730">great.</span> <span m="405330">But</span> <span
  m="405770">let's</span> <span m="405940">just</span> <span
  m="406040">say</span> <span m="406190">if you're</span> <span
  m="406260">happy</span> <span m="406570">with</span> <span
  m="406740">it,</span> <span m="407270">and</span> <span m="407530">if
  it</span> <span m="407640">goes</span> <span m="407820">to</span> <span
  m="407900">a</span> <span m="407960">billion,</span> <span
  m="408360">it's</span> <span m="408500">a</span> <span
  m="408550">factor</span> <span m="408820">30,</span> <span
  m="409650">and</span> <span m="409840">so</span> <span m="409960">on</span>
  <span m="410070">and</span> <span m="410150">so</span> <span
  m="410290">forth.</span> <span m="410920">Actually,</span> <span m="411250">it
  could</span> <span m="411420">grow.</span></p><p><span m="412910">So</span>
  <span m="413010">that's</span> <span m="413260">an</span> <span
  m="413360">algorithm.</span> <span m="416070">If</span> <span
  m="416150">these</span> <span m="417270">terms</span> <span m="417640">are
  used</span> <span m="419460">interchangeably,</span> <span
  m="420820">we'll</span> <span m="420930">try</span> <span
  m="421170">and</span> <span m="421520">differentiate.</span> <span
  m="422200">But</span> <span m="422340">we</span> <span m="422470">do</span>
  <span m="422640">have</span> <span m="423520">something</span> <span
  m="423830">that</span> <span m="423930">we</span> <span m="424010">call</span>
  <span m="424250">an</span> <span m="424290">approximation</span> <span
  m="424940">scheme.</span> <span m="426610">And</span> <span
  m="426770">the</span> <span m="426830">big</span> <span
  m="426990">difference</span> <span m="427360">between</span> <span
  m="428030">approximation</span> <span m="428660">algorithms</span> <span
  m="429140">an</span> <span m="429200">approximation</span> <span
  m="429790">schemes</span> <span m="430810">is</span> <span
  m="431000">that</span> <span m="431510">I'm</span> <span
  m="431700">going</span> <span m="431810">to</span> <span
  m="431850">have</span> <span m="432040">a</span> <span
  m="432080">little</span> <span m="432460">knob</span> <span
  m="432960">in</span> <span m="433180">an</span> <span
  m="433270">approximation</span> <span m="433880">scheme</span> <span
  m="434660">that's</span> <span m="435140">going</span> <span
  m="435310">to</span> <span m="435360">let</span> <span m="435610">me</span>
  <span m="436180">do</span> <span m="436360">more</span> <span
  m="436580">work</span> <span m="437400">to</span> <span m="437550">get</span>
  <span m="437730">something</span> <span m="438020">better.</span> <span
  m="439070">OK?</span></p><p><span m="439690">And</span> <span
  m="440060">that's</span> <span m="440610">essentially</span> <span
  m="440970">what</span> <span m="441090">a</span> <span
  m="441140">scheme</span> <span m="441520">is,</span> <span
  m="441900">where</span> <span m="442290">we're</span> <span
  m="442440">going</span> <span m="442560">to</span> <span
  m="442640">take</span> <span m="442890">an</span> <span
  m="443090">input--</span> <span m="443590">an</span> <span
  m="443690">additional</span> <span m="444100">input--</span> <span
  m="447890">epsilon,</span> <span m="449200">strictly</span> <span
  m="449630">greater</span> <span m="449840">than</span> <span
  m="449980">zero.</span> <span m="452050">And</span> <span
  m="453820">for</span> <span m="454130">any</span> <span
  m="455980">fixed</span> <span m="456930">epsilon,</span> <span
  m="459690">the</span> <span m="459810">scheme--</span> <span
  m="462410">it's</span> <span m="462540">an</span> <span
  m="462620">approximation</span> <span m="463180">scheme</span> <span
  m="463610">as</span> <span m="463790">opposed</span> <span
  m="464020">to</span> <span m="464080">an</span> <span
  m="464180">algorithm--</span> <span m="465670">is</span> <span
  m="465990">a</span> <span m="466790">1</span> <span m="467120">plus</span>
  <span m="467410">epsilon</span> <span m="470280">approximation</span> <span
  m="470930">algorithm.</span></p><p><span m="478870">And</span> <span
  m="479100">so</span> <span m="479240">here</span> <span m="479510">we</span>
  <span m="479660">just</span> <span m="479830">say</span> <span
  m="480020">that</span> <span m="480200">this</span> <span m="480330">is</span>
  <span m="480460">a</span> <span m="480570">row</span> <span
  m="480820">n</span> <span m="481860">approximation</span> <span
  m="482840">algorithm</span> <span m="485480">if</span> <span
  m="485650">it</span> <span m="485760">satisfies</span> <span
  m="486240">this</span> <span m="486390">property.</span> <span
  m="487270">And</span> <span m="487420">here</span> <span m="487720">we</span>
  <span m="487830">have</span> <span m="488050">a</span> <span
  m="488330">family</span> <span m="489370">of</span> <span
  m="489530">algorithms</span> <span m="490480">that</span> <span
  m="490560">are</span> <span m="490650">parameterized</span> <span
  m="492130">by</span> <span m="492830">n</span> <span m="493750">in</span>
  <span m="493880">terms</span> <span m="494090">of</span> <span
  m="494170">run</span> <span m="494470">time,</span> <span m="495810">as</span>
  <span m="496050">well</span> <span m="496230">as</span> <span
  m="496330">epsilon.</span></p><p><span m="498960">And</span> <span
  m="499570">so</span> <span m="500880">you</span> <span m="501020">might</span>
  <span m="501200">have</span> <span m="501380">a</span> <span
  m="501430">situation</span> <span m="501970">where</span> <span
  m="503430">you</span> <span m="503540">have</span> <span
  m="504000">order</span> <span m="505000">n</span> <span
  m="505300">raised</span> <span m="505700">to</span> <span m="507110">q</span>
  <span m="507400">divided</span> <span m="507780">by</span> <span
  m="507920">epsilon</span> <span m="509890">running</span> <span
  m="510230">time</span> <span m="514419">for</span> <span m="514830">an</span>
  <span m="514940">approximation</span> <span m="515500">algorithm.</span> <span
  m="516669">And</span> <span m="516990">what</span> <span
  m="517210">this</span> <span m="517350">means</span> <span
  m="517620">is</span> <span m="517750">that</span> <span m="518490">if</span>
  <span m="518600">you're</span> <span m="518890">within</span> <span
  m="519470">10%</span> <span m="520250">of</span> <span
  m="520419">optimal,</span> <span m="521669">then</span> <span
  m="522200">you're</span> <span m="522360">going</span> <span
  m="522460">to</span> <span m="522520">put</span> <span m="523470">0.1</span>
  <span m="523990">down</span> <span m="524220">here.</span> <span
  m="525180">And</span> <span m="525280">this</span> <span m="525390">is</span>
  <span m="525500">going</span> <span m="525670">to</span> <span
  m="525720">be</span> <span m="526540">an</span> <span m="526700">n</span>
  <span m="526880">raised</span> <span m="527150">to</span> <span
  m="527240">20</span> <span m="528900">algorithm.</span> <span
  m="529390">Polynomial</span> <span m="529880">time!</span> <span
  m="530350">Wonderful!</span> <span m="531060">Solve</span> <span
  m="531560">the world's</span> <span m="531920">problems.</span> <span
  m="532880">Not</span> <span m="533060">really.</span> <span m="533720">I
  mean,</span> <span m="533980">n raised to</span> <span m="534320">20</span>
  <span m="534570">is</span> <span m="534670">pretty</span> <span
  m="534840">bad.</span> <span m="535460">But</span> <span
  m="536000">it's</span> <span m="536500">not</span> <span
  m="536790">exponential.</span> <span m="538090">Right?</span></p><p><span
  m="538420">So</span> <span m="539280">you</span> <span m="539610">see</span>
  <span m="539830">that</span> <span m="540020">there</span> <span
  m="540110">is</span> <span m="540190">a</span> <span m="542620">growth</span>
  <span m="542970">here</span> <span m="543890">of</span> <span
  m="544980">polynomial</span> <span m="545470">degree</span> <span
  m="546570">with</span> <span m="546720">respect</span> <span m="547070">to
  epsilon.</span> <span m="547800">And</span> <span m="548000">it's</span> <span
  m="548170">a</span> <span m="548520">pretty</span> <span
  m="550420">fast</span> <span m="550800">growth.</span> <span
  m="551860">If</span> <span m="551950">you</span> <span m="552030">want</span>
  <span m="552120">to</span> <span m="552160">go</span> <span
  m="552250">to</span> <span m="552570">epsilon</span> <span
  m="552970">equals</span> <span m="553210">0.01,</span> <span m="554400">I
  mean,</span> <span m="554860">even</span> <span m="555070">n</span> <span
  m="555180">raised to</span> <span m="555430">20 is</span> <span
  m="555770">probably</span> <span m="556010">untenable.</span> <span
  m="557230">But</span> <span m="557360">certainly</span> <span
  m="557540">n</span> <span m="557650">raised to</span> <span
  m="557920">200</span> <span m="558660">is</span> <span
  m="558800">completely</span> <span m="559190">untenable.</span> <span
  m="560350">Right?</span></p><p><span m="561020">So</span> <span
  m="561220">this</span> <span m="561470">is</span> <span
  m="561590">what's</span> <span m="561840">called</span> <span
  m="562500">a</span> <span m="562600">PTAS,</span> <span
  m="564860">which</span> <span m="565230">is</span> <span
  m="568450">probabilistic</span> <span m="571160">time</span> <span
  m="573800">approximation</span> <span m="575060">scheme.</span> <span
  m="577120">And</span> <span m="577360">don't</span> <span
  m="577440">worry</span> <span m="577590">too</span> <span
  m="577710">much</span> <span m="577850">about</span> <span
  m="577990">the</span> <span m="578060">probabilistic.</span> <span
  m="580610">It's</span> <span m="580780">a</span> <span
  m="580890">function</span> <span m="583240">of</span> <span
  m="583390">epsilon.</span> <span m="583840">That's</span> <span
  m="584040">the</span> <span m="584140">way</span> <span m="584290">you</span>
  <span m="584380">want</span> <span m="584490">to</span> <span
  m="584540">think</span> <span m="584690">about</span> <span
  m="584920">it.</span> <span m="585400">The</span> <span m="585990">run</span>
  <span m="586405">time.</span> <span m="586820">And we'll</span> <span
  m="587260">look</span> <span m="587480">at</span> <span m="587540">a</span>
  <span m="587610">particular</span> <span m="587960">scheme</span> <span
  m="590780">later</span> <span m="591040">in</span> <span m="591120">the</span>
  <span m="591190">lecture.</span></p><p><span m="591920">But</span> <span
  m="592080">clearly</span> <span m="592400">this</span> <span
  m="592550">is</span> <span m="593280">polynomial</span> <span
  m="593950">in</span> <span m="594250">n,</span> <span m="595190">OK?</span>
  <span m="596150">But</span> <span m="596380">it's</span> <span
  m="597160">not</span> <span m="597510">polynomial</span> <span
  m="598310">in</span> <span m="598640">epsilon.</span> <span
  m="599890">All</span> <span m="599940">right?</span> <span m="600370">So
  a</span> <span m="600570">PTAS</span> <span m="601690">is</span> <span
  m="601890">going</span> <span m="602050">to</span> <span m="602110">be</span>
  <span m="602570">poly</span> <span m="604220">in</span> <span
  m="604510">n,</span> <span m="606120">but</span> <span m="606260">not</span>
  <span m="606450">necessarily</span> <span m="613140">in</span> <span
  m="613350">epsilon.</span> <span m="614150">And</span> <span
  m="614300">I</span> <span m="614370">say</span> <span m="614530">not</span>
  <span m="614740">necessarily</span> <span m="616280">because</span> <span
  m="618150">we</span> <span m="618840">still</span> <span
  m="619110">call</span> <span m="619310">it</span> <span m="619380">a</span>
  <span m="619450">PTAS.</span> <span m="620010">We</span> <span
  m="620110">just</span> <span m="620260">say,</span> <span
  m="620780">fully</span> <span m="621740">polynomial</span> <span
  m="622810">time</span> <span m="623280">approximation</span> <span
  m="623990">scheme,</span> <span m="624770">FPTAS,</span> <span
  m="625950">if</span> <span m="626130">it's</span> <span
  m="626580">polynomial</span> <span m="627110">in</span> <span
  m="627270">both</span> <span m="628110">n</span> <span m="628440">and</span>
  <span m="628630">1</span> <span m="628810">over</span> <span
  m="629000">epsilon.</span> <span m="630210">Right?</span> <span
  m="630530">So</span> <span m="630740">fully</span> <span
  m="631060">PTAS</span> <span m="635080">is</span> <span m="637340">poly</span>
  <span m="637750">in</span> <span m="638110">n</span> <span
  m="639250">and</span> <span m="640260">1</span> <span m="640500">over</span>
  <span m="640660">epsilon.</span></p><p><span m="641790">So</span> <span
  m="641990">a fully</span> <span m="642340">PTAS</span> <span
  m="642620">scheme</span> <span m="644420">would</span> <span
  m="644570">be</span> <span m="644680">something</span> <span
  m="645060">like</span> <span m="645950">n</span> <span
  m="646230">divided</span> <span m="646600">by</span> <span
  m="646750">epsilon</span> <span m="647190">square.</span> <span
  m="648970">OK?</span> <span m="650130">So</span> <span m="650330">as</span>
  <span m="650440">epsilon</span> <span m="651430">shrinks,</span> <span
  m="652950">obviously</span> <span m="653360">the</span> <span m="653440">run
  time</span> <span m="653830">is</span> <span m="653930">going</span> <span
  m="654170">to</span> <span m="654470">grow</span> <span
  m="655400">because</span> <span m="655610">you've</span> <span
  m="655700">got</span> <span m="655870">1</span> <span m="656030">over</span>
  <span m="656190">epsilon</span> <span m="656570">square.</span> <span
  m="657470">But</span> <span m="657740">it's</span> <span m="657900">not</span>
  <span m="658690">anywhere</span> <span m="659190">as</span> <span
  m="659350">bad</span> <span m="659680">as</span> <span m="659840">the</span>
  <span m="660130">n</span> <span m="660350">raised</span> <span
  m="660680">to</span> <span m="660780">2</span> <span m="660980">divided</span>
  <span m="661300">by</span> <span m="661430">epsilon</span> <span
  m="662340">in</span> <span m="662490">terms</span> <span m="662710">of</span>
  <span m="662810">its</span> <span m="662950">growth</span> <span
  m="663270">rate.</span> <span m="664180">OK?</span></p><p><span
  m="665070">So</span> <span m="665240">there's</span> <span
  m="665400">lots</span> <span m="665630">of</span> <span m="666100">NP</span>
  <span m="666370">complete</span> <span m="666670">problems</span> <span
  m="667070">that</span> <span m="667190">have</span> <span
  m="667380">PTAS's</span> <span m="668210">and</span> <span
  m="668370">that</span> <span m="668780">some</span> <span m="669000">of</span>
  <span m="669050">them</span> <span m="669160">have</span> <span
  m="669450">FPTAS's</span> <span m="670110">as</span> <span
  m="670390">well.</span> <span m="671040">And</span> <span m="671210">so</span>
  <span m="671300">on</span> <span m="671390">and</span> <span
  m="671470">so</span> <span m="671600">forth.</span> <span
  m="671810">Question?</span></p><p><span m="672480">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="675330">PROFESSOR: So</span> <span
  m="676050">we</span> <span m="676200">won't</span> <span m="676380">get</span>
  <span m="676480">into</span> <span m="676610">that</span> <span
  m="677690">today.</span> <span m="678570">But</span> <span
  m="679070">you</span> <span m="679150">can</span> <span
  m="679260">think</span> <span m="679410">of</span> <span m="679510">it</span>
  <span m="679630">as</span> <span m="684670">the</span> <span
  m="685190">probability</span> <span m="686260">over</span> <span
  m="687720">the</span> <span m="687860">space</span> <span m="688350">of</span>
  <span m="689680">possible</span> <span m="690360">solutions</span> <span
  m="690870">that</span> <span m="690960">you</span> <span
  m="691070">have.</span> <span m="692420">You</span> <span
  m="692580">can</span> <span m="692930">distribution</span> <span
  m="694320">of</span> <span m="694440">inputs.</span> <span
  m="696270">The</span> <span m="696370">bottom</span> <span
  m="696580">line</span> <span m="696780">is</span> <span m="697050">that
  we</span> <span m="697230">actually</span> <span m="697540">won't</span> <span
  m="697810">cover</span> <span m="698090">that</span> <span
  m="698710">today.</span> <span m="699360">So</span> <span
  m="699700">let's</span> <span m="700160">shelve</span> <span
  m="700630">for</span> <span m="701800">the</span> <span m="701860">next</span>
  <span m="702160">lecture,</span> <span m="702750">OK?</span></p><p><span
  m="703400">So</span> <span m="703530">just</span> <span
  m="703700">worry</span> <span m="703920">about</span> <span
  m="704130">the</span> <span m="704210">fact</span> <span
  m="704560">that</span> <span m="707500">it's</span> <span
  m="708390">polynomial</span> <span m="709250">in</span> <span
  m="709692">n</span> <span m="711460">and</span> <span m="711620">not</span>
  <span m="711860">in</span> <span m="711970">epsilon</span> <span
  m="712410">for</span> <span m="712540">the</span> <span
  m="712630">first</span> <span m="712890">part.</span> <span
  m="713640">And</span> <span m="714210">it's</span> <span
  m="714430">polynomial</span> <span m="714940">in</span> <span
  m="715050">n</span> <span m="715330">and</span> <span
  m="715460">epsilon</span> <span m="715840">for</span> <span
  m="715990">the</span> <span m="716350">second</span> <span
  m="716620">part.</span> <span m="717070">OK?</span></p><p><span
  m="718090">AUDIENCE: [INAUDIBLE]</span></p><p><span m="720230">PROFESSOR:
  Oh</span> <span m="720540">I</span> <span m="720650">see.</span> <span
  m="720810">So,</span> <span m="720910">it's</span> <span m="721110">a</span>
  <span m="721510">good</span> <span m="721690">point.</span> <span
  m="722100">So</span> <span m="722180">for</span> <span m="722810">the</span>
  <span m="722910">purposes</span> <span m="723290">of</span> <span
  m="723390">this</span> <span m="723550">lecture,</span> <span
  m="724380">thank</span> <span m="724450">you</span> <span m="724520">so</span>
  <span m="724630">much.</span> <span m="725570">I'm</span> <span
  m="725710">glad I didn't</span> <span m="726080">have</span> <span
  m="726190">to</span> <span m="726250">get</span> <span m="726360">into</span>
  <span m="726510">that.</span> <span m="727900">Polynomial</span> <span
  m="728570">time.</span> <span m="729880">Good.</span> <span
  m="730310">Better</span> <span m="730570">answer.</span> <span
  m="732000">Either</span> <span m="732210">way,</span> <span
  m="732340">we're</span> <span m="732450">not</span> <span
  m="732560">going</span> <span m="732650">to</span> <span
  m="732700">cover</span> <span m="732930">that.</span> <span
  m="734400">All</span> <span m="734480">right?</span> <span
  m="735360">Good.</span> <span m="735850">So,</span> <span
  m="736420">it's</span> <span m="736590">polynomial.</span> <span
  m="737780">I</span> <span m="737960">mean,</span> <span m="738050">you</span>
  <span m="738150">could</span> <span m="738280">have</span> <span
  m="738450">probabilistic</span> <span m="738990">algorithms</span> <span
  m="739420">that</span> <span m="739530">have</span> <span
  m="739770">this</span> <span m="739930">kind</span> <span m="740200">of</span>
  <span m="741290">behavior,</span> <span m="742050">of</span> <span
  m="742150">course.</span> <span m="743040">But</span> <span
  m="743280">we're</span> <span m="743380">not</span> <span
  m="743520">going</span> <span m="743600">to</span> <span
  m="743640">cover</span> <span m="743830">that</span> <span
  m="744390">in</span> <span m="744830">today's</span> <span
  m="745090">lecture.</span> <span m="745980">But</span> <span
  m="746230">thanks</span> <span m="746430">for</span> <span
  m="746530">pointing</span> <span m="746790">that</span> <span
  m="746890">out</span> <span m="747160">Eric.</span></p><p><span
  m="748090">So,</span> <span m="748840">that's</span> <span
  m="749090">our</span> <span m="749180">set</span> <span m="749350">up.</span>
  <span m="750400">We</span> <span m="750520">essentially</span> <span
  m="750950">have</span> <span m="753420">a</span> <span
  m="753530">situation</span> <span m="754090">where</span> <span
  m="755020">it'd</span> <span m="755140">be</span> <span
  m="755240">great</span> <span m="755910">if</span> <span m="756080">we</span>
  <span m="756180">could</span> <span m="756340">tackle</span> <span
  m="756880">NP</span> <span m="757000">complete</span> <span
  m="757350">problems</span> <span m="757820">using</span> <span
  m="758170">this</span> <span m="758690">hammer,</span> <span
  m="759900">right?</span> <span m="760900">Any</span> <span
  m="761070">questions</span> <span m="761380">so</span> <span
  m="761510">far?</span> <span m="764590">All</span> <span
  m="764740">right.</span></p><p><span m="767660">Vertex</span> <span
  m="768170">cover.</span> <span m="770380">So</span> <span
  m="770600">let's</span> <span m="770820">dive</span> <span
  m="771020">right</span> <span m="771220">in.</span> <span
  m="774360">Let's</span> <span m="774480">talk</span> <span
  m="774800">about</span> <span m="775980">a</span> <span
  m="776070">particular</span> <span m="776470">problem,</span> <span
  m="777100">very</span> <span m="777510">simple</span> <span
  m="777830">problem.</span> <span m="779110">What</span> <span
  m="779290">you</span> <span m="779390">have</span> <span m="779780">is</span>
  <span m="780760">an</span> <span m="781000">undirected</span> <span
  m="781610">graph,</span> <span m="782680">G(V,E).</span> <span
  m="792630">And</span> <span m="793830">all</span> <span m="794040">we</span>
  <span m="794180">want</span> <span m="794830">is</span> <span
  m="794980">a</span> <span m="795050">set</span> <span m="795260">of</span>
  <span m="795340">vertices</span> <span m="796400">that</span> <span
  m="796770">cover</span> <span m="797330">all</span> <span m="797580">of</span>
  <span m="797690">the</span> <span m="797830">edges.</span> <span
  m="802010">So</span> <span m="802400">a</span> <span m="802490">set</span>
  <span m="802770">of vertices</span> <span m="806680">that</span> <span
  m="806870">cover</span> <span m="809700">all</span> <span
  m="810040">edges.</span> <span m="810780">What</span> <span
  m="810860">does</span> <span m="810960">it</span> <span m="811040">mean</span>
  <span m="811230">to</span> <span m="811330">cover?</span> <span
  m="812170">It's</span> <span m="812380">the</span> <span
  m="812570">obvious</span> <span m="812940">thing.</span> <span
  m="814200">If</span> <span m="814370">I</span> <span m="814450">have</span>
  <span m="814620">something</span> <span m="814890">like</span> <span
  m="815140">this.</span> <span m="818150">As</span> <span
  m="818440">long</span> <span m="818860">as</span> <span m="820970">I</span>
  <span m="821090">have</span> <span m="821880">a</span> <span
  m="821970">vertex</span> <span m="823170">in</span> <span m="823310">my</span>
  <span m="824480">set</span> <span m="824750">of</span> <span
  m="824820">vertices</span> <span m="825310">that</span> <span
  m="825420">I'm</span> <span m="825530">calling</span> <span
  m="825890">a</span> <span m="825990">cover</span> <span m="826960">that</span>
  <span m="827240">touches</span> <span m="828430">one</span> <span
  m="830160">endpoint</span> <span m="830760">of</span> <span
  m="830870">an</span> <span m="830970">edge,</span> <span
  m="831970">we're</span> <span m="832130">going</span> <span
  m="832290">to</span> <span m="832370">call</span> <span m="832700">that</span>
  <span m="832890">edge</span> <span m="833740">covered,</span> <span
  m="834910">OK?</span></p><p><span m="835800">So,</span> <span
  m="836360">in</span> <span m="836520">this</span> <span m="836700">case</span>
  <span m="837600">it's</span> <span m="837950">pretty</span> <span
  m="838260">clear</span> <span m="839360">that</span> <span
  m="839570">the</span> <span m="839630">vertex</span> <span
  m="840030">cover</span> <span m="841180">is</span> <span
  m="841370">simply</span> <span m="841670">that.</span> <span
  m="842570">Because</span> <span m="843060">that</span> <span
  m="843670">vertex</span> <span m="844820">touches</span> <span
  m="846060">all</span> <span m="846310">of</span> <span m="846390">the</span>
  <span m="846500">edges</span> <span m="847400">at</span> <span
  m="847500">least</span> <span m="848260">at</span> <span m="848650">one</span>
  <span m="848950">of</span> <span m="849020">the</span> <span
  m="849090">endpoints.</span> <span m="850570">A</span> <span
  m="850580">vertex</span> <span m="850860">is</span> <span
  m="850930">going</span> <span m="851040">to</span> <span
  m="851100">touch</span> <span m="851270">one</span> <span
  m="851470">endpoint</span> <span m="851780">of</span> <span
  m="851860">an</span> <span m="851960">edge.</span> <span m="852580">But</span>
  <span m="853000">this</span> <span m="853620">vertex</span> <span
  m="854050">cover</span> <span m="854410">that</span> <span
  m="854530">I've</span> <span m="854630">shaded</span> <span
  m="855420">touches</span> <span m="856960">every</span> <span
  m="857290">edge.</span> <span m="858280">So</span> <span
  m="858410">that's</span> <span m="858600">a</span> <span
  m="858640">vertex</span> <span m="859000">cover.</span></p><p><span
  m="860180">If,</span> <span m="860350">in</span> <span m="860630">fact,</span>
  <span m="861780">I</span> <span m="861950">had</span> <span
  m="863270">an</span> <span m="863460">extra</span> <span
  m="863810">edge</span> <span m="864080">here,</span> <span
  m="864890">then</span> <span m="865650">I</span> <span m="865790">now</span>
  <span m="866010">have</span> <span m="866160">to</span> <span
  m="866230">pick</span> <span m="866480">one--</span> <span
  m="867320">or</span> <span m="867710">this</span> <span m="867920">one</span>
  <span m="868520">of</span> <span m="868800">that</span> <span
  m="869120">one</span> <span m="870050">in</span> <span m="870230">order</span>
  <span m="870370">to</span> <span m="870450">complete</span> <span
  m="870870">my</span> <span m="871000">cover.</span> <span
  m="872080">OK?</span> <span m="873100">That's</span> <span
  m="873470">it.</span> <span m="874210">That's</span> <span
  m="874380">vertex</span> <span m="874580">cover.</span> <span
  m="876030">Decision</span> <span m="876430">problem,</span> <span
  m="878310">NP</span> <span m="878560">complete</span> <span
  m="879720">to</span> <span m="880060">figure</span> <span
  m="880330">out</span> <span m="880810">if</span> <span
  m="881150">there's</span> <span m="881320">a certain</span> <span
  m="881390">number</span> <span m="882580">that</span> <span
  m="883640">is</span> <span m="883860">below</span> <span m="884090">a</span>
  <span m="884140">certain</span> <span m="884390">value</span> <span
  m="884820">that</span> <span m="885470">do</span> <span m="885590">the</span>
  <span m="885730">covering.</span> <span m="887880">You</span> <span
  m="888150">obviously</span> <span m="888470">have</span> <span
  m="888610">an</span> <span m="888670">optimization</span> <span
  m="889990">problem</span> <span m="890600">associated</span> <span
  m="891010">with</span> <span m="891130">that.</span> <span
  m="891990">And</span> <span m="892150">so</span> <span m="892280">on</span>
  <span m="892410">and</span> <span m="892490">so</span> <span
  m="892620">forth.</span> <span m="893350">So</span> <span
  m="893400">that's</span> <span m="893640">our</span> <span
  m="893910">simple</span> <span m="894280">set</span> <span
  m="894480">up</span> <span m="894800">for</span> <span m="895250">our</span>
  <span m="895400">first</span> <span m="896020">hard</span> <span
  m="896470">problem.</span> <span m="897590">All right?</span></p><p><span
  m="899090">And</span> <span m="899290">so,</span> <span m="899960">just</span>
  <span m="900140">to write</span> <span m="900350">that</span> <span
  m="900480">out,</span> <span m="901340">find</span> <span m="901770">a</span>
  <span m="901830">subset</span> <span m="904930">V</span> <span
  m="907230">prime,</span> <span m="908050">which</span> <span
  m="908200">is</span> <span m="908380">a</span> <span m="908920">subset</span>
  <span m="909320">of</span> <span m="909690">capital</span> <span
  m="910090">V,</span> <span m="911230">such</span> <span m="911570">that</span>
  <span m="913090">if</span> <span m="913330">(U,V)</span> <span
  m="916920">is</span> <span m="917110">an</span> <span m="917250">edge</span>
  <span m="919400">of</span> <span m="919580">G--</span> <span
  m="920260">belongs</span> <span m="920610">to</span> <span
  m="920730">E--</span> <span m="922500">then</span> <span m="926620">we</span>
  <span m="926780">have</span> <span m="927350">either</span> <span
  m="927760">U</span> <span m="928170">belonging</span> <span
  m="929750">to</span> <span m="929860">V</span> <span m="930040">prime,</span>
  <span m="931680">or</span> <span m="931810">V</span> <span
  m="932140">belonging</span> <span m="932480">to</span> <span
  m="932600">V</span> <span m="932760">prime,</span> <span m="933460">or</span>
  <span m="933805">both.</span> <span m="935370">And it's</span> <span
  m="935450">quite</span> <span m="935660">possible</span> <span
  m="936010">that</span> <span m="936170">your</span> <span
  m="936220">vertex</span> <span m="936630">cover</span> <span
  m="936900">is</span> <span m="936990">such</span> <span
  m="937230">that,</span> <span m="937930">for</span> <span m="938210">a</span>
  <span m="938250">given</span> <span m="938550">edge,</span> <span
  m="940350">you</span> <span m="940460">have</span> <span m="940590">two</span>
  <span m="940730">vertices</span> <span m="941290">that</span> <span
  m="941510">touch</span> <span m="941970">each</span> <span
  m="942180">of</span> <span m="942270">the</span> <span
  m="942350">endpoints</span> <span m="942970">of</span> <span
  m="943140">the</span> <span m="943250">edge.</span> <span m="944690">And
  the</span> <span m="944990">optimization</span> <span
  m="945630">problem,</span> <span m="946860">which</span> <span
  m="946940">is</span> <span m="947030">what</span> <span m="947210">we'd</span>
  <span m="947340">like</span> <span m="947500">to</span> <span
  m="947590">do</span> <span m="947770">here,</span> <span m="949790">is</span>
  <span m="949980">find</span> <span m="950280">a</span> <span
  m="950350">V</span> <span m="950540">prime</span> <span m="952330">so</span>
  <span m="953440">the</span> <span m="953550">cardinality</span> <span
  m="955090">is</span> <span m="955270">minimum.</span> <span
  m="958330">OK?</span> <span m="962030">So</span> <span
  m="962360">that's</span> <span m="962600">it.</span></p><p><span
  m="965800">So,</span> <span m="968220">we</span> <span m="968330">don't
  know</span> <span m="968610">of a</span> <span m="968690">polynomial</span>
  <span m="969330">time</span> <span m="970490">algorithm</span> <span
  m="971620">to</span> <span m="971730">solve</span> <span
  m="972000">this</span> <span m="972120">problem.</span> <span
  m="973260">So</span> <span m="973650">we</span> <span m="973780">resort</span>
  <span m="974160">to</span> <span m="974240">heuristics.</span> <span
  m="976190">What</span> <span m="976520">is</span> <span m="977790">an</span>
  <span m="978270">intuitive</span> <span m="979580">heuristic</span> <span
  m="980290">for</span> <span m="980500">this</span> <span
  m="980690">problem?</span> <span m="982550">Suppose</span> <span
  m="982810">I</span> <span m="982910">wanted</span> <span m="983310">to</span>
  <span m="983570">implement</span> <span m="984620">a</span> <span
  m="984730">poly</span> <span m="985190">time,</span> <span
  m="986730">greedy</span> <span m="987240">algorithm</span> <span
  m="988540">for</span> <span m="988710">this</span> <span
  m="988900">problem.</span> <span m="990090">What</span> <span
  m="990260">would</span> <span m="990410">be</span> <span m="992040">the</span>
  <span m="992150">first</span> <span m="992440">thing</span> <span
  m="992590">that</span> <span m="992700">you'd</span> <span
  m="992830">think</span> <span m="993040">of?</span> <span
  m="994830">Yeah,</span> <span m="994960">go</span> <span
  m="995060">ahead.</span></p><p><span m="995902">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="997320">PROFESSOR: Find</span> <span
  m="997660">the</span> <span m="997730">max</span> <span
  m="998050">degree.</span> <span m="998450">I</span> <span
  m="998510">love</span> <span m="998810">that</span> <span
  m="998940">answer.</span> <span m="1000290">It's</span> <span
  m="1001300">the</span> <span m="1001440">wrong</span> <span
  m="1001710">answer</span> <span m="1003470">for</span> <span
  m="1003630">this</span> <span m="1003840">problem.</span> <span
  m="1004470">But</span> <span m="1004650">I</span> <span
  m="1004680">love</span> <span m="1004900">it</span> <span
  m="1005000">because</span> <span m="1005450">it</span> <span
  m="1005730">sets</span> <span m="1006060">me</span> <span
  m="1006240">up</span> <span m="1006400">for--</span> <span
  m="1007620">ta-DA!</span> <span m="1009086">All</span> <span
  m="1009540">this</span> <span m="1009680">work</span> <span
  m="1009900">I</span> <span m="1009960">did</span> <span
  m="1010150">before</span> <span m="1010420">lecture,</span> <span
  m="1011950">OK?</span> <span m="1013660">All</span> <span
  m="1013750">right.</span></p><p><span m="1015040">So,</span> <span
  m="1016640">it</span> <span m="1016810">turns</span> <span
  m="1017110">out,</span> <span m="1018410">that</span> <span
  m="1020420">it's</span> <span m="1020570">not</span> <span m="1020770">an
  incorrect</span> <span m="1021220">answer.</span> <span
  m="1022490">It's</span> <span m="1023830">really</span> <span
  m="1024810">not</span> <span m="1025020">the</span> <span
  m="1025089">best</span> <span m="1025430">answer</span> <span
  m="1026540">in</span> <span m="1026710">terms</span> <span
  m="1027040">of</span> <span m="1027240">the</span> <span
  m="1027359">heuristic</span> <span m="1027900">you</span> <span
  m="1028050">apply</span> <span m="1029139">to</span> <span
  m="1029579">get</span> <span m="1030339">an</span> <span
  m="1030510">approximation</span> <span m="1032690">algorithm.</span> <span
  m="1033420">So</span> <span m="1033510">we're</span> <span
  m="1033880">still</span> <span m="1034359">in</span> <span
  m="1034829">the</span> <span m="1035190">context</span> <span
  m="1035609">of</span> <span m="1035720">an</span> <span
  m="1035780">approximation</span> <span m="1036480">algorithm,</span> <span
  m="1037470">not</span> <span m="1037730">an approximation</span> <span
  m="1038329">scheme.</span> <span m="1039589">And</span> <span
  m="1040589">what</span> <span m="1040839">we</span> <span
  m="1040950">have</span> <span m="1041230">here</span> <span
  m="1041750">is</span> <span m="1042210">a</span> <span
  m="1042369">perfectly</span> <span m="1043010">fine</span> <span
  m="1043260">heuristic</span> <span m="1044140">that,</span> <span
  m="1045119">who</span> <span m="1045210">knows?</span> <span
  m="1045470">It</span> <span m="1045569">might</span> <span
  m="1045740">actually</span> <span m="1046030">work</span> <span
  m="1046329">better</span> <span m="1047280">in</span> <span
  m="1047460">practice</span> <span m="1048450">than</span> <span
  m="1048630">this</span> <span m="1048810">other</span> <span
  m="1049560">approximation</span> <span m="1050300">algorithm</span> <span
  m="1050710">that</span> <span m="1050830">I'm</span> <span
  m="1050910">going</span> <span m="1051020">to</span> <span
  m="1051080">talk</span> <span m="1051270">about</span> <span m="1051540">and
  prove.</span></p><p><span m="1052470">But</span> <span m="1052870">the</span>
  <span m="1052960">fact</span> <span m="1053230">of</span> <span
  m="1053290">the</span> <span m="1053350">matter</span> <span
  m="1053660">is</span> <span m="1053860">that</span> <span
  m="1054460">this</span> <span m="1054730">approximation</span> <span
  m="1055310">algorithm</span> <span m="1055760">that</span> <span
  m="1056290">has,</span> <span m="1056790">as</span> <span m="1057000">a</span>
  <span m="1057060">heuristic,</span> <span m="1058820">picking</span> <span
  m="1059120">the</span> <span m="1059230">maximum</span> <span
  m="1059820">degree</span> <span m="1061030">continually.</span> <span
  m="1062420">And</span> <span m="1063510">completing</span> <span
  m="1064210">your</span> <span m="1064390">vertex</span> <span
  m="1064860">cover</span> <span m="1065210">by</span> <span
  m="1065400">picking</span> <span m="1065750">the</span> <span
  m="1065840">maximum</span> <span m="1066280">degree</span> <span
  m="1066650">continually</span> <span m="1068020">is</span> <span
  m="1069400">a</span> <span m="1069480">log</span> <span m="1069820">n</span>
  <span m="1070940">approximation</span> <span m="1072290">algorithm.</span>
  <span m="1073470">And</span> <span m="1073760">what</span> <span
  m="1073930">that</span> <span m="1074070">means</span> <span
  m="1074320">is</span> <span m="1074470">that</span> <span m="1074990">I</span>
  <span m="1075090">can</span> <span m="1075270">construct--</span> <span
  m="1076050">and</span> <span m="1076490">that</span> <span
  m="1076670">example</span> <span m="1077050">is</span> <span
  m="1077210">right</span> <span m="1077390">up</span> <span
  m="1077530">there--</span> <span m="1079800">an</span> <span
  m="1079920">example</span> <span m="1080450">where,</span> <span
  m="1082260">regardless</span> <span m="1082920">of</span> <span
  m="1084040">what</span> <span m="1084350">n</span> <span
  m="1084610">is,</span> <span m="1085660">this</span> <span
  m="1086080">particular</span> <span m="1086420">heuristic--</span> <span
  m="1086940">the</span> <span m="1087010">maximum</span> <span
  m="1087460">degree</span> <span m="1087740">heuristic--</span> <span
  m="1088740">might</span> <span m="1089100">be</span> <span
  m="1089610">log</span> <span m="1089900">n</span> <span m="1090190">off</span>
  <span m="1090900">from</span> <span m="1091180">optimal.</span> <span
  m="1092410">OK?</span></p><p><span m="1093370">Whereas,</span> <span
  m="1094060">this</span> <span m="1094250">other</span> <span
  m="1094470">scheme</span> <span m="1094730">that</span> <span
  m="1094850">we're</span> <span m="1094930">going</span> <span
  m="1095040">to</span> <span m="1095100">talk</span> <span
  m="1095310">about</span> <span m="1096080">is</span> <span
  m="1096220">going</span> <span m="1096320">to</span> <span
  m="1096360">be</span> <span m="1096450">within</span> <span
  m="1096650">a</span> <span m="1096700">factor</span> <span
  m="1097040">of</span> <span m="1097150">two</span> <span m="1098040">of</span>
  <span m="1098180">optimal</span> <span m="1099000">regardless</span> <span
  m="1099890">of</span> <span m="1100020">the</span> <span
  m="1100090">input</span> <span m="1100420">that</span> <span
  m="1100520">you</span> <span m="1100650">apply.</span> <span
  m="1101580">Right?</span> <span m="1102110">So,</span> <span
  m="1103650">you</span> <span m="1103760">have</span> <span
  m="1103860">a</span> <span m="1104160">domination</span> <span
  m="1104970">here</span> <span m="1105410">with</span> <span
  m="1105560">respect</span> <span m="1105950">to</span> <span
  m="1106480">the</span> <span m="1106600">two</span> <span
  m="1106750">approximation</span> <span m="1107330">algorithms.</span> <span
  m="1107740">You've</span> <span m="1107840">got</span> <span
  m="1108030">one</span> <span m="1108280">that</span> <span
  m="1108420">is</span> <span m="1108580">log</span> <span m="1108860">n.</span>
  <span m="1109720">Row</span> <span m="1109940">n</span> <span
  m="1110150">is</span> <span m="1110260">log</span> <span m="1110510">n,</span>
  <span m="1110780">as</span> <span m="1111020">I've</span> <span
  m="1111140">defined</span> <span m="1111520">over</span> <span
  m="1111630">there.</span> <span m="1112300">And</span> <span
  m="1112560">on</span> <span m="1112700">the other</span> <span
  m="1112800">side,</span> <span m="1113070">you've</span> <span
  m="1113180">got</span> <span m="1113370">two,</span> <span
  m="1113950">right?</span> <span m="1114560">So</span> <span m="1114730">if
  you're</span> <span m="1114940">a</span> <span
  m="1115120">theoretician,</span> <span m="1116240">you</span> <span
  m="1116360">know</span> <span m="1116480">what</span> <span
  m="1116590">you're</span> <span m="1116680">going</span> <span
  m="1116770">to</span> <span m="1116820">pick.</span> <span
  m="1117790">You're</span> <span m="1117940">going</span> <span
  m="1118060">to</span> <span m="1118130">pick</span> <span
  m="1118640">two.</span> <span m="1119530">It turns out,</span> <span
  m="1119960">if</span> <span m="1120050">you're a</span> <span
  m="1120190">practitioner,</span> <span m="1120860">you</span> <span
  m="1120980">might</span> <span m="1121110">actually</span> <span
  m="1121360">pick</span> <span m="1121540">this</span> <span
  m="1121680">one,</span> <span m="1122470">right?</span> <span
  m="1122770">But</span> <span m="1123380">this</span> <span
  m="1123540">is</span> <span m="1123650">a</span> <span
  m="1123720">theory</span> <span m="1124260">course.</span></p><p><span
  m="1125880">So</span> <span m="1126560">what</span> <span
  m="1126760">is</span> <span m="1126850">going</span> <span
  m="1127060">on</span> <span m="1127180">here?</span> <span
  m="1128480">Well,</span> <span m="1128780">this</span> <span
  m="1129040">is</span> <span m="1129200">a</span> <span
  m="1129470">concocted</span> <span m="1129730">example</span> <span
  m="1130650">that</span> <span m="1130840">shows</span> <span
  m="1131190">you</span> <span m="1131900">that</span> <span
  m="1132070">a</span> <span m="1132120">maximum</span> <span
  m="1132570">degree</span> <span m="1132880">heuristic</span> <span
  m="1134030">could</span> <span m="1134280">be</span> <span
  m="1135100">as</span> <span m="1135440">far</span> <span
  m="1135810">off</span> <span m="1136620">as</span> <span
  m="1139000">log</span> <span m="1139560">n,</span> <span
  m="1140480">right?</span> <span m="1141380">And</span> <span
  m="1141600">so</span> <span m="1142490">if</span> <span m="1142640">you</span>
  <span m="1142740">look</span> <span m="1142930">at</span> <span
  m="1143500">what's</span> <span m="1143720">going</span> <span
  m="1143880">on</span> <span m="1144020">here,</span> <span
  m="1150620">you</span> <span m="1150810">end</span> <span
  m="1151060">up</span> <span m="1153430">with</span> <span
  m="1155930">something</span> <span m="1156260">where</span> <span
  m="1159410">you</span> <span m="1159570">have</span> <span
  m="1159810">a</span> <span m="1159870">bunch</span> <span
  m="1160240">of</span> <span m="1160330">vertices</span> <span
  m="1160770">up</span> <span m="1160950">on</span> <span
  m="1161100">top,</span> <span m="1162150">OK?</span> <span
  m="1163080">And</span> <span m="1164800">you</span> <span
  m="1165510">end</span> <span m="1165750">up</span> <span
  m="1165970">with</span> <span m="1168370">case</span> <span
  m="1168790">k</span> <span m="1168970">factorial</span> <span
  m="1169500">vertices</span> <span m="1169910">up</span> <span
  m="1170080">on</span> <span m="1170230">top.</span></p><p><span
  m="1170600">So</span> <span m="1170720">k</span> <span
  m="1171000">equals</span> <span m="1171120">three</span> <span
  m="1171360">in</span> <span m="1171450">this</span> <span
  m="1171620">case.</span> <span m="1171900">I have</span> <span
  m="1172030">six</span> <span m="1172280">vertices</span> <span
  m="1172710">up</span> <span m="1172860">there.</span> <span
  m="1174500">I</span> <span m="1174600">got</span> <span m="1174790">two</span>
  <span m="1175140">down</span> <span m="1175330">here</span> <span
  m="1175540">because</span> <span m="1175760">this</span> <span
  m="1175880">is</span> <span m="1176330">6</span> <span
  m="1176600">divided</span> <span m="1176900">by</span> <span
  m="1177020">3,</span> <span m="1177470">because</span> <span
  m="1177680">k</span> <span m="1177810">is</span> <span m="1177970">3.</span>
  <span m="1178650">And</span> <span m="1178910">then I</span> <span
  m="1178960">got</span> <span m="1179140">6</span> <span
  m="1179310">divided</span> <span m="1179580">by</span> <span
  m="1179680">3</span> <span m="1179950">here,</span> <span
  m="1180170">so</span> <span m="1180280">that's</span> <span
  m="1180530">2</span> <span m="1180770">and</span> <span m="1180900">6</span>
  <span m="1181060">divided</span> <span m="1181310">by</span> <span
  m="1181390">1</span> <span m="1181630">here.</span> <span
  m="1182230">And</span> <span m="1182400">so</span> <span
  m="1182490">that's</span> <span m="1182700">6.</span> <span
  m="1183560">OK?</span> <span m="1184140">And</span> <span
  m="1184350">so</span> <span m="1184560">these</span> <span
  m="1184880">edges</span> <span m="1185220">are</span> <span
  m="1185310">set</span> <span m="1185470">up</span> <span m="1185600">in</span>
  <span m="1185690">such</span> <span m="1185890">a</span> <span
  m="1185950">way</span> <span m="1186750">that</span> <span
  m="1187570">it's</span> <span m="1187720">a</span> <span
  m="1187950">pathological</span> <span m="1188370">example.</span> <span
  m="1190100">And</span> <span m="1191270">I</span> <span
  m="1192170">misspoke</span> <span m="1192680">in</span> <span
  m="1192790">terms</span> <span m="1193060">of</span> <span
  m="1193210">the</span> <span m="1193510">approximation</span> <span
  m="1194280">algorithm.</span> <span m="1195350">I</span> <span
  m="1195660">will</span> <span m="1196000">correct</span> <span
  m="1196250">myself</span> <span m="1196590">in</span> <span
  m="1196850">just</span> <span m="1197130">a</span> <span
  m="1197190">second,</span> <span m="1198110">in</span> <span
  m="1198200">terms</span> <span m="1198400">of</span> <span
  m="1198490">log</span> <span m="1198730">n.</span> <span m="1198840">It</span>
  <span m="1199340">does</span> <span m="1199580">grow</span> <span
  m="1199860">with</span> <span m="1201650">the</span> <span
  m="1201970">size</span> <span m="1202240">of</span> <span
  m="1202330">the</span> <span m="1202400">graph.</span> <span m="1203110">Well,
  I'll</span> <span m="1203430">precisely</span> <span m="1203840">tell</span>
  <span m="1204010">you</span> <span m="1204150">what</span> <span
  m="1204360">this</span> <span m="1205090">approximation</span> <span
  m="1205630">algorithm</span> <span m="1206030">is</span> <span
  m="1206310">in</span> <span m="1206430">terms</span> <span
  m="1206650">of</span> <span m="1206770">the</span> <span
  m="1207010">row</span> <span m="1207230">n</span> <span
  m="1207670">factor</span> <span m="1208520">in</span> <span
  m="1208670">just</span> <span m="1208910">a</span> <span
  m="1208960">minute.</span></p><p><span m="1209620">But</span> <span
  m="1209650">let's</span> <span m="1209820">just</span> <span
  m="1210000">take</span> <span m="1210170">a</span> <span
  m="1210230">look</span> <span m="1210450">at</span> <span
  m="1211350">this</span> <span m="1212480">problem</span> <span
  m="1212820">here</span> <span m="1213220">and</span> <span
  m="1213400">see</span> <span m="1213610">what</span> <span
  m="1213750">happens</span> <span m="1214090">when</span> <span
  m="1214190">you</span> <span m="1214320">apply</span> <span
  m="1214790">this</span> <span m="1215030">maximum</span> <span
  m="1215470">degree</span> <span m="1216240">heuristic,</span> <span
  m="1217020">right?</span> <span m="1217460">And</span> <span
  m="1217640">we</span> <span m="1217730">have</span> <span
  m="1217870">to</span> <span m="1217990">take</span> <span
  m="1218180">into</span> <span m="1218370">account</span> <span
  m="1218780">the</span> <span m="1218870">fact</span> <span
  m="1219160">that,</span> <span m="1219760">if</span> <span
  m="1219880">you</span> <span m="1219990">have</span> <span
  m="1220280">ties,</span> <span m="1221700">in</span> <span
  m="1221880">terms</span> <span m="1222130">of</span> <span
  m="1222210">maximum</span> <span m="1222630">degree,</span> <span
  m="1223460">you</span> <span m="1223620">may</span> <span
  m="1223720">end</span> <span m="1223970">up</span> <span
  m="1224300">doing</span> <span m="1224570">the</span> <span
  m="1224700">wrong</span> <span m="1225170">thing.</span> <span
  m="1225770">Because</span> <span m="1226110">you</span> <span
  m="1226240">haven't</span> <span m="1226570">defined</span> <span
  m="1227070">what</span> <span m="1227200">the</span> <span
  m="1227310">tiebreak</span> <span m="1227780">is</span> <span
  m="1227990">when</span> <span m="1228110">you</span> <span
  m="1228190">have</span> <span m="1228380">two</span> <span
  m="1228550">nodes</span> <span m="1229000">that</span> <span
  m="1229130">have</span> <span m="1229330">the</span> <span
  m="1229400">same</span> <span m="1229770">degree.</span> <span
  m="1230710">You</span> <span m="1230930">could</span> <span
  m="1231120">do</span> <span m="1231220">the</span> <span
  m="1231330">wrong</span> <span m="1231580">thing</span> <span
  m="1231800">and</span> <span m="1231910">pick</span> <span
  m="1232190">the</span> <span m="1232240">bad</span> <span
  m="1232700">node</span> <span m="1233070">for</span> <span
  m="1233290">this</span> <span m="1233460">particular</span> <span
  m="1233760">problem,</span> <span m="1234270">right?</span> <span
  m="1234490">You</span> <span m="1234590">have</span> <span
  m="1234750">to</span> <span m="1234850">do</span> <span m="1234970">a</span>
  <span m="1235030">worst</span> <span m="1235420">case</span> <span
  m="1236130">analysis.</span></p><p><span m="1237830">So</span> <span
  m="1238940">in</span> <span m="1239150">the</span> <span
  m="1239250">worst</span> <span m="1239570">case,</span> <span
  m="1240720">when</span> <span m="1240900">you</span> <span
  m="1241010">create</span> <span m="1241310">a</span> <span
  m="1241350">vertex</span> <span m="1241810">cover</span> <span
  m="1242650">using</span> <span m="1243190">maximum</span> <span
  m="1243690">degree,</span> <span m="1245010">what</span> <span
  m="1245240">is</span> <span m="1245350">the</span> <span
  m="1245450">worst</span> <span m="1245720">case</span> <span
  m="1246000">in</span> <span m="1246120">terms</span> <span
  m="1246380">of</span> <span m="1246480">the</span> <span
  m="1246570">number</span> <span m="1247000">of</span> <span
  m="1247150">vertices</span> <span m="1248050">that</span> <span
  m="1248190">we</span> <span m="1248340">picked</span> <span
  m="1248570">for</span> <span m="1248670">this</span> <span
  m="1248850">particular</span> <span m="1249150">example?</span> <span
  m="1251380">Someone?</span> <span m="1252280">What</span> <span
  m="1252420">is</span> <span m="1252440">the</span> <span
  m="1252570">worst</span> <span m="1252770">case</span> <span
  m="1252960">in</span> <span m="1253060">terms</span> <span
  m="1253270">of</span> <span m="1253350">the</span> <span
  m="1253420">number</span> <span m="1253710">of</span> <span
  m="1253860">vertices?</span> <span m="1254100">Yeah,</span> <span
  m="1254260">back</span> <span m="1254440">there.</span></p><p><span
  m="1255210">AUDIENCE: Eleven?</span></p><p><span m="1256070">PROFESSOR:
  Eleven.</span> <span m="1256550">And where</span> <span m="1256760">did
  you</span> <span m="1256830">get</span> <span m="1256970">that</span> <span
  m="1257150">from?</span></p><p><span m="1257895">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="1260630">PROFESSOR: You</span> <span
  m="1260840">grab</span> <span m="1261110">all</span> <span m="1261290">of
  the</span> <span m="1261380">ones</span> <span m="1261580">on</span> <span
  m="1261650">the</span> <span m="1261720">bottom.</span> <span
  m="1262210">Fantastic.</span> <span m="1263520">All right,</span> <span
  m="1263570">there you go.</span> <span m="1264260">Could</span> <span
  m="1264410">you</span> <span m="1264840">stand</span> <span
  m="1265170">up?</span> <span m="1268170">Whoa.</span> <span
  m="1268980">All</span> <span m="1269070">right.</span> <span
  m="1271900">It</span> <span m="1272010">was</span> <span
  m="1272150">the</span> <span m="1272240">dentist</span> <span
  m="1272640">yesterday.</span></p><p><span m="1275750">So,</span> <span
  m="1278160">that's</span> <span m="1278360">exactly</span> <span
  m="1278670">right.</span> <span m="1279340">That's</span> <span
  m="1279780">exactly</span> <span m="1280300">right.</span> <span
  m="1280660">So</span> <span m="1280680">what</span> <span
  m="1280860">could</span> <span m="1280950">happen</span> <span
  m="1281990">is</span> <span m="1284760">you</span> <span
  m="1284910">could</span> <span m="1285050">pick</span> <span
  m="1285190">this,</span> <span m="1285540">because</span> <span
  m="1285760">that's</span> <span m="1286030">degree</span> <span
  m="1286320">3.</span> <span m="1286710">Notice</span> <span
  m="1286990">that</span> <span m="1287090">the</span> <span
  m="1287150">maximum</span> <span m="1287450">degree</span> <span
  m="1287720">here</span> <span m="1287930">is</span> <span
  m="1288070">3,</span> <span m="1289210">of</span> <span m="1289330">any</span>
  <span m="1289510">node.</span> <span m="1290220">Right?</span> <span
  m="1290910">So</span> <span m="1291360">if</span> <span m="1291490">I</span>
  <span m="1291550">pick</span> <span m="1291880">something</span> <span
  m="1292130">of</span> <span m="1292210">degree</span> <span
  m="1292500">three,</span> <span m="1293120">I'm</span> <span
  m="1293260">good.</span> <span m="1293620">I'm</span> <span
  m="1294160">in</span> <span m="1294320">keeping</span> <span
  m="1294600">with</span> <span m="1294710">my</span> <span
  m="1294840">heuristic.</span> <span m="1297160">I</span> <span
  m="1297270">could</span> <span m="1298270">pick</span> <span
  m="1298440">all</span> <span m="1298580">the</span> <span
  m="1298680">ones</span> <span m="1298880">at</span> <span
  m="1298950">the</span> <span m="1299040">top,</span> <span
  m="1300280">right?</span> <span m="1301250">And</span> <span
  m="1301440">then</span> <span m="1301560">I'm</span> <span
  m="1301640">done,</span> <span m="1302570">right?</span> <span
  m="1303190">That's</span> <span m="1303430">a</span> <span
  m="1303460">good--</span> <span m="1306020">that's</span> <span
  m="1306270">a</span> <span m="1306330">good</span> <span
  m="1306550">does</span> <span m="1306860">solution.</span> <span
  m="1307400">That's</span> <span m="1308250">a</span> <span
  m="1308350">good</span> <span m="1308590">trajectory.</span> <span
  m="1309700">But</span> <span m="1310930">all</span> <span
  m="1311120">I've</span> <span m="1311220">said</span> <span
  m="1311490">is,</span> <span m="1311890">the</span> <span
  m="1312010">heuristic</span> <span m="1312420">is</span> <span
  m="1312530">maximum</span> <span m="1312880">degree.</span> <span
  m="1313260">So</span> <span m="1313410">there's</span> <span
  m="1313580">nothing</span> <span m="1313780">that's</span> <span
  m="1313860">stopping</span> <span m="1314080">me</span> <span
  m="1314250">from</span> <span m="1314380">picking</span> <span
  m="1314620">this.</span> <span m="1315390">And</span> <span
  m="1315520">then</span> <span m="1315630">once</span> <span
  m="1315810">I</span> <span m="1315860">pick</span> <span
  m="1316050">that,</span> <span m="1316450">I</span> <span
  m="1316560">could</span> <span m="1316690">pick</span> <span
  m="1316830">this</span> <span m="1316970">one.</span> <span
  m="1317720">And</span> <span m="1317850">then</span> <span
  m="1318010">I'm</span> <span m="1318110">down</span> <span
  m="1318480">to,</span> <span m="1318620">once</span> <span
  m="1318810">I've</span> <span m="1319350">taken</span> <span
  m="1319600">away</span> <span m="1319780">these</span> <span
  m="1320060">two,</span> <span m="1320850">remember</span> <span
  m="1321290">that</span> <span m="1321640">now</span> <span
  m="1321870">the</span> <span m="1321970">maximum</span> <span
  m="1322350">degree</span> <span m="1322710">in</span> <span
  m="1322810">the</span> <span m="1322890">entire</span> <span
  m="1323810">graph</span> <span m="1324760">is</span> <span
  m="1325030">two.</span> <span m="1326140">Right?</span> <span
  m="1326650">Because</span> <span m="1327740">each</span> <span
  m="1327940">of</span> <span m="1328020">these</span> <span
  m="1328200">things</span> <span m="1328520">is</span> <span
  m="1329100">losing</span> <span m="1330010">the</span> <span
  m="1330380">degree--</span> <span m="1330950">losing</span> <span
  m="1331530">one</span> <span m="1331860">from</span> <span
  m="1332070">its</span> <span m="1332220">degree--</span> <span
  m="1332970">as</span> <span m="1333310">I</span> <span m="1333620">go</span>
  <span m="1333720">along.</span></p><p><span m="1334620">So</span> <span
  m="1334700">then</span> <span m="1334870">I</span> <span
  m="1334990">could</span> <span m="1335150">pick</span> <span
  m="1335290">this</span> <span m="1335410">one,</span> <span
  m="1335620">this</span> <span m="1335760">one,</span> <span
  m="1335940">this</span> <span m="1336080">one,</span> <span
  m="1336260">et</span> <span m="1336320">cetera.</span> <span
  m="1337030">And</span> <span m="1337170">so</span> <span m="1337240">I</span>
  <span m="1337320">could</span> <span m="1337470">end</span> <span
  m="1337620">up</span> <span m="1337730">with</span> <span
  m="1337860">11.</span> <span m="1338760">OK?</span> <span
  m="1339760">So</span> <span m="1340080">if</span> <span m="1340210">you</span>
  <span m="1340290">go</span> <span m="1340450">do</span> <span
  m="1341090">the</span> <span m="1341200">math</span> <span
  m="1342510">really</span> <span m="1342720">quickly--</span> <span
  m="1343470">and</span> <span m="1343610">this</span> <span
  m="1343720">is</span> <span m="1343820">where</span> <span
  m="1344040">I'll</span> <span m="1345070">correct</span> <span
  m="1346080">what</span> <span m="1346300">I</span> <span
  m="1347040">said</span> <span m="1347280">before--</span> <span
  m="1348730">the</span> <span m="1348780">algo</span> <span
  m="1350490">could</span> <span m="1350960">pick</span> <span
  m="1354020">all</span> <span m="1354690">the</span> <span
  m="1354810">bottom</span> <span m="1355240">vertices.</span> <span
  m="1360410">And</span> <span m="1360650">so</span> <span
  m="1360820">the</span> <span m="1360940">solution</span> <span
  m="1362840">and</span> <span m="1363010">the</span> <span
  m="1363090">top</span> <span m="1363330">vertices</span> <span
  m="1363750">are</span> <span m="1363880">optimal.</span> <span
  m="1364730">Top</span> <span m="1365950">optimal.</span> <span
  m="1367890">So</span> <span m="1368050">that's</span> <span
  m="1368360">k</span> <span m="1368540">factorial,</span> <span
  m="1369100">right?</span> <span m="1369620">According</span> <span
  m="1369940">to</span> <span m="1370000">my</span> <span
  m="1372080">parameterized</span> <span m="1372730">graph.</span> <span
  m="1373120">That's</span> <span m="1373310">k</span> <span
  m="1373450">factorial</span> <span m="1374010">in</span> <span
  m="1374110">terms</span> <span m="1374330">of</span> <span
  m="1374410">the</span> <span m="1374490">optimal</span> <span
  m="1374920">solution</span> <span m="1375410">for</span> <span
  m="1375520">this</span> <span m="1375750">graph.</span> <span
  m="1376740">But</span> <span m="1376980">if</span> <span m="1377020">I
  pick</span> <span m="1377200">the</span> <span m="1377280">ones</span> <span
  m="1377470">that</span> <span m="1377600">are</span> <span
  m="1378600">the</span> <span m="1378670">bottom,</span> <span
  m="1379510">then</span> <span m="1379660">it's</span> <span
  m="1379780">k</span> <span m="1379950">factorial</span> <span
  m="1381440">divided</span> <span m="1381800">by</span> <span
  m="1381960">k,</span> <span m="1383670">plus</span> <span m="1383880">1</span>
  <span m="1384070">over</span> <span m="1384250">k</span> <span
  m="1384410">minus</span> <span m="1384750">1,</span> <span
  m="1385750">plus</span> <span m="1385920">da</span> <span
  m="1386090">da</span> <span m="1386410">da</span> <span m="1386720">da,</span>
  <span m="1387370">plus</span> <span m="1387610">1.</span> <span
  m="1388390">Which</span> <span m="1388520">is</span> <span
  m="1388630">our</span> <span m="1389240">harmonic</span> <span
  m="1389740">number.</span> <span m="1390590">And</span> <span
  m="1390740">that's</span> <span m="1390920">approximately</span> <span
  m="1391610">k</span> <span m="1391810">factorial</span> <span
  m="1392930">log</span> <span m="1393500">k,</span> <span
  m="1394990">OK?</span> <span m="1395710">And</span> <span
  m="1396010">this</span> <span m="1396160">is</span> <span
  m="1396280">where</span> <span m="1396490">I</span> <span
  m="1396530">misspoke.</span> <span m="1397450">I</span> <span
  m="1397570">kept</span> <span m="1397780">saying</span> <span
  m="1397980">log</span> <span m="1398290">n,</span> <span
  m="1398430">log</span> <span m="1398730">n.</span></p><p><span
  m="1399510">But</span> <span m="1400230">that's</span> <span
  m="1400460">not</span> <span m="1400820">completely</span> <span
  m="1401230">correct.</span> <span m="1402620">Because</span> <span
  m="1403710">if</span> <span m="1403840">I</span> <span
  m="1403900">think</span> <span m="1404080">of</span> <span
  m="1404210">n</span> <span m="1404490">as</span> <span
  m="1404610">being</span> <span m="1404790">the</span> <span
  m="1404900">size</span> <span m="1405360">of</span> <span
  m="1405460">the</span> <span m="1405550">input,</span> <span
  m="1406750">k</span> <span m="1406940">factorial</span> <span
  m="1407550">is</span> <span m="1407680">n,</span> <span
  m="1408570">right?</span> <span m="1409520">And</span> <span
  m="1409750">so</span> <span m="1410140">if</span> <span m="1410270">you</span>
  <span m="1410360">see</span> <span m="1410580">that</span> <span
  m="1410710">I</span> <span m="1410770">have</span> <span
  m="1410950">log</span> <span m="1411235">k</span> <span
  m="1411520">here,</span> <span m="1413300">then</span> <span
  m="1415100">remember</span> <span m="1415380">that</span> <span
  m="1416490">this</span> <span m="1416660">is</span> <span
  m="1416780">log</span> <span m="1417170">k</span> <span
  m="1417910">where</span> <span m="1418640">k</span> <span
  m="1418780">factorial</span> <span m="1419350">equals</span> <span
  m="1419670">n.</span> <span m="1420120">So</span> <span m="1420240">this
  is</span> <span m="1420350">another</span> <span m="1421060">log</span> <span
  m="1421380">factor,</span> <span m="1421890">roughly</span> <span
  m="1422210">speaking.</span> <span m="1423150">Right?</span> <span
  m="1423460">So</span> <span m="1423610">think</span> <span m="1424010">of
  it</span> <span m="1424160">approximately</span> <span m="1424810">as</span>
  <span m="1425340">log</span> <span m="1425610">log</span> <span
  m="1425880">n</span> <span m="1426590">approximation,</span> <span
  m="1428040">OK?</span> <span m="1428810">Which</span> <span
  m="1428930">is</span> <span m="1429040">pretty</span> <span
  m="1429220">good.</span> <span m="1429820">But</span> <span
  m="1429980">it</span> <span m="1430080">does</span> <span m="1430340">grow
  with</span> <span m="1430530">n,</span> <span m="1431470">right?</span> <span
  m="1432110">The</span> <span m="1432240">point</span> <span
  m="1432520">is</span> <span m="1432670">this</span> <span
  m="1432840">does</span> <span m="1433080">grow</span> <span
  m="1433270">with</span> <span m="1433590">n.</span></p><p><span
  m="1434260">So</span> <span m="1435010">it's</span> <span
  m="1435180">not</span> <span m="1435420">the</span> <span
  m="1435500">best</span> <span m="1435780">approximation</span> <span
  m="1436430">scheme</span> <span m="1437410">that</span> <span
  m="1437590">you</span> <span m="1437690">can</span> <span
  m="1437820">think</span> <span m="1438050">of.</span> <span
  m="1439710">Because</span> <span m="1440330">the</span> <span
  m="1440540">approximation</span> <span m="1441110">factor</span> <span
  m="1441530">grows</span> <span m="1442170">with</span> <span
  m="1442350">the</span> <span m="1442440">size</span> <span
  m="1442920">of</span> <span m="1443040">your</span> <span
  m="1443190">problem.</span> <span m="1444200">So</span> <span
  m="1444280">it'd</span> <span m="1444360">be</span> <span
  m="1444470">great</span> <span m="1445270">if</span> <span
  m="1445460">you</span> <span m="1445570">could</span> <span
  m="1445720">come</span> <span m="1445910">up</span> <span
  m="1446370">with</span> <span m="1447080">a</span> <span
  m="1447180">constant</span> <span m="1447640">factor</span> <span
  m="1447960">approximation</span> <span m="1448560">scheme</span> <span
  m="1449520">that</span> <span m="1449820">would</span> <span
  m="1449960">beat</span> <span m="1450100">this</span> <span
  m="1450330">one,</span> <span m="1450910">certainly</span> <span
  m="1451210">from</span> <span m="1451360">a</span> <span
  m="1451420">theoretical</span> <span m="1451890">standpoint,</span> <span
  m="1452650">right?</span> <span m="1453110">But</span> <span
  m="1453300">this</span> <span m="1453440">one,</span> <span
  m="1454560">maximum</span> <span m="1454960">degree,</span> <span
  m="1455700">chances</span> <span m="1456090">are,</span> <span m="1456350">if
  you're a</span> <span m="1456480">practitioner,</span> <span
  m="1457120">this</span> <span m="1457280">is</span> <span
  m="1457380">what</span> <span m="1457550">you'd</span> <span
  m="1458090">code.</span> <span m="1458700">Not</span> <span
  m="1458870">the</span> <span m="1458930">one</span> <span
  m="1459110">I'm</span> <span m="1459190">going</span> <span
  m="1459330">to</span> <span m="1459370">describe.</span> <span
  m="1460340">OK?</span></p><p><span m="1460910">But</span> <span
  m="1461140">we're</span> <span m="1461230">going</span> <span
  m="1461340">to</span> <span m="1461390">analyze</span> <span
  m="1461830">the</span> <span m="1461900">one</span> <span
  m="1462240">I've</span> <span m="1462410">described.</span> <span
  m="1463170">I've</span> <span m="1463320">just</span> <span
  m="1463460">shown</span> <span m="1463720">you</span> <span
  m="1464620">that</span> <span m="1464930">there</span> <span
  m="1465150">is</span> <span m="1465260">an</span> <span
  m="1465330">example</span> <span m="1466610">where</span> <span
  m="1468190">you</span> <span m="1468290">have</span> <span
  m="1468510">this</span> <span m="1469070">log</span> <span
  m="1469345">k</span> <span m="1469620">factor.</span> <span
  m="1470380">We</span> <span m="1470550">haven't</span> <span
  m="1470730">done</span> <span m="1470840">a</span> <span
  m="1470890">proof</span> <span m="1471660">of</span> <span
  m="1471810">the</span> <span m="1471890">fact</span> <span
  m="1472260">that</span> <span m="1473280">there's</span> <span
  m="1473770">no</span> <span m="1474040">worse</span> <span
  m="1474480">example</span> <span m="1475080">than</span> <span
  m="1475240">this</span> <span m="1475440">one.</span> <span
  m="1476200">OK?</span> <span m="1476560">So</span> <span
  m="1476940">I'm</span> <span m="1477090">just</span> <span
  m="1477570">claiming,</span> <span m="1477970">at</span> <span
  m="1478070">this</span> <span m="1478230">point,</span> <span
  m="1478920">that</span> <span m="1479540">this</span> <span
  m="1479750">is</span> <span m="1480130">at</span> <span
  m="1480330">best,</span> <span m="1482320">a</span> <span
  m="1482380">log</span> <span m="1482750">k</span> <span
  m="1483620">approximation</span> <span m="1484330">algorithm.</span> <span
  m="1485280">We</span> <span m="1485380">haven't</span> <span
  m="1485570">actually</span> <span m="1485840">shown</span> <span
  m="1486650">that</span> <span m="1486800">it</span> <span
  m="1486930">is,</span> <span m="1487080">in</span> <span
  m="1487180">fact,</span> <span m="1487620">a</span> <span m="1487710">log
  k</span> <span m="1488070">approximation</span> <span
  m="1488620">algorithm.</span> <span m="1489040">At</span> <span
  m="1489190">best,</span> <span m="1489620">it's</span> <span
  m="1489810">that.</span> <span m="1490630">OK?</span> <span
  m="1491420">Any</span> <span m="1491550">questions?</span></p><p><span
  m="1494830">All</span> <span m="1494950">right.</span> <span
  m="1495190">So</span> <span m="1495520">what's</span> <span
  m="1495730">another</span> <span m="1495980">heuristic?</span> <span
  m="1497230">What's</span> <span m="1498190">another</span> <span
  m="1498500">heuristic</span> <span m="1499580">for</span> <span
  m="1501170">doing</span> <span m="1501410">vertex</span> <span
  m="1501800">cover?</span> <span m="1504170">We</span> <span
  m="1504320">did</span> <span m="1504490">this</span> <span
  m="1505010">picking</span> <span m="1505310">the maximum</span> <span
  m="1505710">degree.</span> <span m="1507440">Nice</span> <span
  m="1507790">and</span> <span m="1507960">simple.</span> <span
  m="1510090">But</span> <span m="1510650">it</span> <span
  m="1510990">didn't</span> <span m="1511220">quite</span> <span
  m="1511600">work</span> <span m="1511840">out</span> <span
  m="1512030">for</span> <span m="1512230">us.</span> <span
  m="1516960">Any</span> <span m="1517140">other</span> <span
  m="1517300">ideas?</span> <span m="1522350">So,</span> <span
  m="1523230">I</span> <span m="1523430">picked</span> <span
  m="1523730">vertices.</span> <span m="1524540">What</span> <span
  m="1524750">else</span> <span m="1524910">could I</span> <span
  m="1525100">pick?</span> <span m="1527660">I</span> <span
  m="1527780">could</span> <span m="1527910">pick</span> <span
  m="1528040">edges,</span> <span m="1528690">right?</span> <span
  m="1529270">So,</span> <span m="1530110">I</span> <span
  m="1530210">could</span> <span m="1530360">pick</span> <span
  m="1531460">random</span> <span m="1531820">edges.</span> <span m="1533700">It
  turns</span> <span m="1533990">out</span> <span m="1534580">that</span> <span
  m="1534830">actually</span> <span m="1535070">works</span> <span
  m="1535280">better</span> <span m="1537000">from</span> <span
  m="1537260">a</span> <span m="1537750">theoretical</span> <span
  m="1538270">standpoint.</span></p><p><span m="1547800">So,</span> <span
  m="1549050">what we're</span> <span m="1549210">going</span> <span
  m="1549410">to</span> <span m="1549450">do</span> <span
  m="1549550">here</span> <span m="1549870">is</span> <span
  m="1550370">simply</span> <span m="1551700">set</span> <span
  m="1552010">the</span> <span m="1552440">cover</span> <span m="1555370">to
  be</span> <span m="1556070">null.</span> <span m="1557430">Go</span> <span
  m="1557600">ahead</span> <span m="1558000">and</span> <span
  m="1558490">set</span> <span m="1558700">all</span> <span
  m="1558840">of</span> <span m="1558920">the</span> <span
  m="1559000">edges</span> <span m="1560100">to be</span> <span
  m="1560230">E</span> <span m="1560530">prime.</span> <span
  m="1561850">And</span> <span m="1562030">then</span> <span
  m="1562210">we're</span> <span m="1562290">going</span> <span
  m="1562410">to</span> <span m="1562450">iterate</span> <span
  m="1565450">over</span> <span m="1566320">these</span> <span
  m="1566580">edges.</span> <span m="1577260">I'm</span> <span
  m="1577430">not</span> <span m="1577610">even</span> <span
  m="1577830">specifying</span> <span m="1579290">the</span> <span
  m="1579420">way</span> <span m="1579700">I'm</span> <span
  m="1579800">going</span> <span m="1580020">to</span> <span
  m="1580540">select</span> <span m="1580990">these</span> <span
  m="1581180">edges.</span> <span m="1582040">And</span> <span
  m="1582270">I</span> <span m="1582360">still</span> <span
  m="1582690">will</span> <span m="1582800">be</span> <span
  m="1582960">able</span> <span m="1583130">to</span> <span
  m="1583200">do</span> <span m="1583330">a</span> <span
  m="1583420">proof</span> <span m="1584390">of</span> <span
  m="1584710">2</span> <span m="1584860">approximation.</span> <span
  m="1586730">OK?</span> <span m="1591240">Oh!</span> <span m="1591550">I</span>
  <span m="1591650">forgot</span> <span m="1592670">the</span> <span
  m="1592770">best</span> <span m="1593020">part.</span> <span
  m="1594860">This</span> <span m="1595360">is</span> <span
  m="1595570">on</span> <span m="1595770">your</span> <span
  m="1595950">quiz.</span> <span m="1597600">That</span> <span
  m="1597630">was</span> <span m="1597860">the</span> <span
  m="1597980">tangible</span> <span m="1598430">benefit</span> <span
  m="1598800">of</span> <span m="1598900">attending</span> <span
  m="1599230">the</span> <span m="1599330">lecture.</span> <span
  m="1601910">So</span> <span m="1602120">copy</span> <span
  m="1602400">that</span> <span m="1602590">down.</span></p><p><span
  m="1616420">So</span> <span m="1616710">this</span> <span
  m="1616890">is</span> <span m="1616980">very</span> <span
  m="1617160">simple.</span> <span m="1617550">It's</span> <span
  m="1618380">not</span> <span m="1618590">a</span> <span
  m="1619620">complicated</span> <span m="1620760">problem.</span> <span
  m="1621850">This</span> <span m="1622390">is</span> <span
  m="1623360">not</span> <span m="1623770">simple</span> <span
  m="1624800">heuristics</span> <span m="1625380">that</span> <span
  m="1625510">are</span> <span m="1625580">going</span> <span
  m="1625690">to</span> <span m="1625730">be</span> <span
  m="1625870">particularly</span> <span m="1626320">complicated.</span> <span
  m="1627630">You</span> <span m="1627790">just</span> <span
  m="1627970">do</span> <span m="1628130">some</span> <span
  m="1628270">selections,</span> <span m="1628930">and</span> <span
  m="1629060">then</span> <span m="1629190">you</span> <span
  m="1629870">iterate</span> <span m="1630230">over</span> <span
  m="1630360">the</span> <span m="1630470">graph.</span> <span
  m="1631050">And</span> <span m="1631160">you</span> <span
  m="1631270">take</span> <span m="1631490">away</span> <span
  m="1631820">stuff</span> <span m="1632260">from</span> <span
  m="1632430">the</span> <span m="1632510">graph.</span> <span
  m="1633160">Typically,</span> <span m="1633490">you</span> <span
  m="1633600">take</span> <span m="1633800">away</span> <span
  m="1633990">vertices</span> <span m="1634550">as</span> <span
  m="1634670">well</span> <span m="1634860">as</span> <span
  m="1634950">edges.</span> <span m="1635930">And</span> <span
  m="1636610">you</span> <span m="1636790">keep</span> <span
  m="1636980">going</span> <span m="1637400">until</span> <span
  m="1637750">you</span> <span m="1637830">got</span> <span
  m="1637990">nothing</span> <span m="1638300">left,</span> <span
  m="1639310">right?</span> <span m="1639560">And</span> <span
  m="1639690">then</span> <span m="1639800">you</span> <span
  m="1639900">look</span> <span m="1640040">at</span> <span
  m="1640090">your</span> <span m="1640220">cover,</span> <span
  m="1641130">and</span> <span m="1641250">you</span> <span
  m="1641350">say,</span> <span m="1641570">what</span> <span
  m="1641750">is</span> <span m="1641850">the</span> <span
  m="1641940">size</span> <span m="1642360">of</span> <span
  m="1642450">my</span> <span m="1642610">cover?</span> <span
  m="1651900">And</span> <span m="1652110">here</span> <span
  m="1652380">we</span> <span m="1652490">return</span> <span
  m="1656830">C,</span> <span m="1657990">all right?</span> <span
  m="1658650">So</span> <span m="1659340">I</span> <span
  m="1659450">won't</span> <span m="1659610">spend</span> <span
  m="1659790">any</span> <span m="1659930">time</span> <span
  m="1660140">on</span> <span m="1660250">that.</span> <span
  m="1661330">You</span> <span m="1661500">can</span> <span
  m="1661630">read</span> <span m="1661830">it.</span> <span
  m="1662250">It's</span> <span m="1662890">simple</span> <span
  m="1663430">iterative</span> <span m="1663830">algorithm</span> <span
  m="1665420">that</span> <span m="1665870">fixed</span> <span
  m="1666170">edges</span> <span m="1667130">randomly</span> <span
  m="1668070">and</span> <span m="1668240">keeps</span> <span
  m="1668470">going.</span></p><p><span m="1670790">So,</span> <span
  m="1672830">now</span> <span m="1673040">comes</span> <span
  m="1673320">the</span> <span m="1673410">fun</span> <span
  m="1673630">part,</span> <span m="1675180">which</span> <span
  m="1675350">is</span> <span m="1676010">we</span> <span
  m="1676150">need</span> <span m="1676300">to</span> <span
  m="1676360">show</span> <span m="1677800">that</span> <span
  m="1678460">that</span> <span m="1679200">little</span> <span
  m="1679470">algorithm</span> <span m="1681220">is</span> <span
  m="1681460">always</span> <span m="1682000">going</span> <span
  m="1682240">to</span> <span m="1682350">be</span> <span
  m="1684160">within</span> <span m="1684450">a</span> <span
  m="1684500">factor</span> <span m="1684850">of</span> <span
  m="1684930">2</span> <span m="1686260">of</span> <span
  m="1686410">optimal,</span> <span m="1687680">OK?</span> <span
  m="1688990">And</span> <span m="1689860">you</span> <span
  m="1689990">can</span> <span m="1690110">play</span> <span
  m="1690260">around</span> <span m="1690650">with</span> <span
  m="1690960">this</span> <span m="1691160">example.</span> <span
  m="1694020">In</span> <span m="1694210">fact,</span> <span
  m="1694490">in</span> <span m="1694570">this</span> <span
  m="1694720">case,</span> <span m="1694910">you</span> <span
  m="1694990">have</span> <span m="1695120">6</span> <span
  m="1695390">and</span> <span m="1695510">11.</span> <span
  m="1696340">So</span> <span m="1696490">that's</span> <span
  m="1696710">a</span> <span m="1696770">factor</span> <span m="1697100">of
  2,</span> <span m="1697290">of</span> <span m="1697390">course.</span> <span
  m="1698550">So</span> <span m="1698710">even</span> <span
  m="1698890">this</span> <span m="1699250">algorithm</span> <span
  m="1699690">is</span> <span m="1700300">better</span> <span
  m="1700490">than</span> <span m="1700610">a</span> <span
  m="1700660">factor</span> <span m="1700980">of 2.</span> <span
  m="1701210">But</span> <span m="1701570">it</span> <span
  m="1701700">won't</span> <span m="1701930">be</span> <span
  m="1702070">if</span> <span m="1702210">I</span> <span
  m="1702840">expanded</span> <span m="1703460">the</span> <span
  m="1703550">graph</span> <span m="1703900">and</span> <span
  m="1704010">increased</span> <span m="1704410">k.</span> <span
  m="1705180">But</span> <span m="1705420">that</span> <span
  m="1705680">algorithm</span> <span m="1706060">that</span> <span
  m="1706180">I</span> <span m="1706220">have</span> <span m="1706400">up</span>
  <span m="1706540">there</span> <span m="1707050">is</span> <span
  m="1707200">always</span> <span m="1707440">going</span> <span
  m="1707540">to</span> <span m="1707580">be</span> <span
  m="1707680">within</span> <span m="1707880">a</span> <span
  m="1707930">factor</span> <span m="1708240">of 2.</span> <span
  m="1709010">And</span> <span m="1709330">we</span> <span
  m="1709450">want</span> <span m="1709580">to</span> <span
  m="1709620">prove</span> <span m="1709830">that,</span> <span
  m="1710610">all</span> <span m="1710670">right?</span></p><p><span
  m="1712800">So</span> <span m="1713060">how</span> <span m="1713170">do</span>
  <span m="1713230">we</span> <span m="1713320">go</span> <span
  m="1713450">about</span> <span m="1714130">proving</span> <span
  m="1714450">that?</span> <span m="1717960">We</span> <span
  m="1718110">want</span> <span m="1718240">to</span> <span
  m="1718310">prove,</span> <span m="1719060">in</span> <span
  m="1719210">particular,</span> <span m="1719730">that</span> <span
  m="1721670">a</span> <span m="1721925">prox</span> <span
  m="1722240">vertex</span> <span m="1722730">cover</span> <span
  m="1727020">is</span> <span m="1727170">a</span> <span m="1727330">2</span>
  <span m="1727760">approximation</span> <span m="1733253">algorithm.</span>
  <span m="1739230">So,</span> <span m="1740580">any</span> <span
  m="1740920">ideas?</span> <span m="1743070">How would I prove</span> <span
  m="1743570">something</span> <span m="1743800">like</span> <span
  m="1743970">this?</span> <span m="1747180">Where do</span> <span
  m="1747380">you</span> <span m="1747430">think</span> <span
  m="1747590">this</span> <span m="1747710">factor</span> <span m="1748060">of
  2</span> <span m="1748250">comes</span> <span m="1748470">from?</span> <span
  m="1750610">Someone</span> <span m="1750860">who</span> <span
  m="1750930">hasn't</span> <span m="1751180">answered</span> <span
  m="1751460">yet.</span> <span m="1755170">You</span> <span
  m="1755360">answered</span> <span m="1755670">a lot of</span> <span
  m="1755970">questions</span> <span m="1756390">in</span> <span
  m="1756500">the</span> <span m="1756600">past,</span> <span m="1756880">all
  right?</span> <span m="1761160">No?</span> <span m="1761540">Someone?</span>
  <span m="1764000">All</span> <span m="1764100">right.</span></p><p><span
  m="1764931">AUDIENCE: [INAUDIBLE]</span></p><p><span m="1767340">PROFESSOR:
  I'm</span> <span m="1767450">sorry?</span></p><p><span m="1767810">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="1770440">PROFESSOR: That's</span> <span
  m="1770710">an</span> <span m="1771030">excellent</span> <span
  m="1771520">observation.</span> <span m="1773040">The</span> <span
  m="1773420">observation</span> <span m="1774150">is</span> <span
  m="1774440">that</span> <span m="1775050">the</span> <span
  m="1775340">edges</span> <span m="1776920">we</span> <span
  m="1777200">pick</span> <span m="1778510">do</span> <span
  m="1778670">not</span> <span m="1778970">intersect</span> <span
  m="1779420">each</span> <span m="1779600">other.</span> <span
  m="1780160">So,</span> <span m="1781030">I</span> <span
  m="1781130">gave</span> <span m="1781340">you</span> <span
  m="1781480">a</span> <span m="1781550">Frisbee</span> <span
  m="1782000">for</span> <span m="1782350">the</span> <span
  m="1782660">wrong</span> <span m="1782880">answer.</span> <span
  m="1783740">So</span> <span m="1783810">for</span> <span
  m="1783890">this</span> <span m="1784060">correct</span> <span
  m="1784340">one,</span> <span m="1784500">I</span> <span
  m="1784530">won't</span> <span m="1784740">give</span> <span
  m="1784870">you</span> <span m="1784980">one?</span> <span
  m="1786130">That's</span> <span m="1786340">fair,</span> <span
  m="1787090">right?</span> <span m="1787400">No.</span> <span
  m="1788790">That's</span> <span m="1789300">unfair.</span> <span
  m="1789860">Right?</span> <span m="1790746">There you go.</span> <span
  m="1791190">Sorry.</span></p><p><span m="1794240">So,</span> <span
  m="1794850">the</span> <span m="1795180">key</span> <span
  m="1795360">observation</span> <span m="1795880">was</span> <span
  m="1797410">in</span> <span m="1797550">this</span> <span
  m="1797740">algorithm,</span> <span m="1798700">I'm</span> <span
  m="1798840">going</span> <span m="1798950">to</span> <span
  m="1798990">be</span> <span m="1799120">picking</span> <span
  m="1799490">edges.</span> <span m="1800640">And</span> <span
  m="1801340">the</span> <span m="1801510">edges</span> <span
  m="1802790">will</span> <span m="1803000">not</span> <span
  m="1803390">share</span> <span m="1804720">vertices,</span> <span
  m="1805990">right?</span> <span m="1806470">Because</span> <span
  m="1806710">I</span> <span m="1806770">delete</span> <span
  m="1807250">the</span> <span m="1807675">vertices</span> <span
  m="1808450">once</span> <span m="1808680">I've picked</span> <span
  m="1808940">an</span> <span m="1809030">edge,</span> <span
  m="1810260">correct?</span> <span m="1810650">So</span> <span
  m="1810820">there's</span> <span m="1811010">no</span> <span
  m="1811170">way</span> <span m="1811350">that</span> <span
  m="1811500">the</span> <span m="1811570">edges</span> <span
  m="1811860">will</span> <span m="1811960">share</span> <span
  m="1812270">vertices.</span> <span m="1813340">So</span> <span
  m="1813500">what</span> <span m="1813610">does</span> <span
  m="1813690">that</span> <span m="1813880">mean?</span></p><p><span
  m="1814660">Well,</span> <span m="1814950">that</span> <span
  m="1815110">means</span> <span m="1815420">that,</span> <span
  m="1818350">I'm</span> <span m="1818730">getting--</span> <span
  m="1819350">let's</span> <span m="1819560">say,</span> <span
  m="1819750">I</span> <span m="1819830">get</span> <span m="1822270">A</span>
  <span m="1822710">edges.</span> <span m="1823320">So</span> <span
  m="1823570">let</span> <span m="1823870">A</span> <span
  m="1825270">denote</span> <span m="1829060">the</span> <span
  m="1829230">edges</span> <span m="1829840">that</span> <span
  m="1830000">are</span> <span m="1830130">picked.</span> <span
  m="1834220">So</span> <span m="1834370">I'm</span> <span
  m="1834480">going</span> <span m="1834590">to</span> <span
  m="1834630">get</span> <span m="1834760">edges</span> <span
  m="1835140">that</span> <span m="1835270">look</span> <span
  m="1835430">like</span> <span m="1835610">that.</span> <span
  m="1838470">OK?</span> <span m="1839450">And</span> <span m="1839560">I</span>
  <span m="1839630">got</span> <span m="1840290">continuality</span> <span
  m="1840870">of</span> <span m="1841020">A</span> <span
  m="1842000">edges.</span> <span m="1843400">I</span> <span
  m="1843530">know</span> <span m="1843870">that</span> <span
  m="1844020">in</span> <span m="1844150">my</span> <span
  m="1844300">vertex</span> <span m="1844860">cover,</span> <span
  m="1846460">that,</span> <span m="1847270">obviously,</span> <span
  m="1848070">I</span> <span m="1848220">have</span> <span m="1849210">to</span>
  <span m="1849310">pick</span> <span m="1850440">vertices</span> <span
  m="1850900">that</span> <span m="1851140">cover</span> <span
  m="1851410">all</span> <span m="1851560">the</span> <span
  m="1851670">edges.</span> <span m="1852800">Now I'm</span> <span
  m="1853100">picking</span> <span m="1853450">edges,</span> <span
  m="1854490">and</span> <span m="1854950">what's</span> <span
  m="1855140">happening,</span> <span m="1855570">of</span> <span
  m="1855670">course,</span> <span m="1855920">is</span> <span
  m="1855950">that</span> <span m="1856110">I'm</span> <span
  m="1856230">picking</span> <span m="1857490">2</span> <span
  m="1857880">A</span> <span m="1859190">vertices.</span></p><p><span
  m="1864150">So</span> <span m="1864410">my</span> <span m="1864580">C--</span>
  <span m="1866990">and</span> <span m="1867100">remember,</span> <span
  m="1867360">my</span> <span m="1867680">cost was</span> <span
  m="1867810">C.</span> <span m="1868720">And</span> <span m="1869020">I
  had</span> <span m="1869510">Copt,</span> <span m="1870000">that</span> <span
  m="1870210">corresponds</span> <span m="1870640">to</span> <span
  m="1870720">the</span> <span m="1870820">optimum</span> <span
  m="1871310">cost.</span> <span m="1872200">And</span> <span
  m="1872350">so</span> <span m="1872450">the</span> <span
  m="1872570">cost</span> <span m="1873190">that</span> <span
  m="1873830">this</span> <span m="1874030">algorithm</span> <span
  m="1874400">produces</span> <span m="1875360">is</span> <span
  m="1875550">2</span> <span m="1875730">times</span> <span
  m="1876070">A,</span> <span m="1876970">right?</span> <span
  m="1877770">Make</span> <span m="1878040">sense?</span> <span
  m="1878340">Because</span> <span m="1878960">I'm</span> <span
  m="1879110">picking</span> <span m="1879370">vertices,</span> <span
  m="1880310">we</span> <span m="1880530">are</span> <span
  m="1880670">picking</span> <span m="1880920">edges.</span> <span
  m="1881950">There's</span> <span m="1882190">no</span> <span
  m="1883610">overlap.</span> <span m="1884470">And</span> <span
  m="1884590">therefore,</span> <span m="1884840">the</span> <span
  m="1884940">cost</span> <span m="1885700">is</span> <span m="1886010">2</span>
  <span m="1886170">times</span> <span m="1886450">A,</span> <span
  m="1887230">right?</span> <span m="1887740">So</span> <span
  m="1887920">as</span> <span m="1888110">long</span> <span
  m="1888440">as</span> <span m="1888580">I</span> <span m="1888650">can</span>
  <span m="1888830">now</span> <span m="1889040">say</span> <span
  m="1890070">that</span> <span m="1890780">Copt,</span> <span
  m="1892210">which</span> <span m="1892350">is</span> <span
  m="1892430">the</span> <span m="1892500">optimum,</span> <span
  m="1893500">is</span> <span m="1893680">less</span> <span
  m="1893920">than</span> <span m="1894060">or</span> <span
  m="1894160">equal</span> <span m="1894400">to</span> <span
  m="1894620">A,</span> <span m="1895640">right?</span></p><p><span
  m="1896250">I</span> <span m="1896410">have</span> <span m="1896600">my</span>
  <span m="1896730">factor</span> <span m="1897070">of 2</span> <span
  m="1897580">approximation</span> <span m="1898160">algorithm.</span> <span
  m="1899490">So</span> <span m="1899560">that's</span> <span
  m="1899750">it.</span> <span m="1900590">It's</span> <span
  m="1901200">a</span> <span m="1901470">simple</span> <span
  m="1902120">argument</span> <span m="1903220">that</span> <span
  m="1903410">says</span> <span m="1903640">now</span> <span
  m="1904330">show</span> <span m="1909960">that</span> <span
  m="1910340">Copt</span> <span m="1913130">is</span> <span m="1915800">at
  least</span> <span m="1916130">A.</span> <span m="1918030">Copt,</span> <span
  m="1918400">I'm</span> <span m="1918510">minimizing.</span> <span
  m="1919270">Copt</span> <span m="1919630">should</span> <span
  m="1919760">be</span> <span m="1919900">at least</span> <span
  m="1920200">A.</span> <span m="1920840">Right?</span> <span m="1922870">I
  hope</span> <span m="1922940">I</span> <span m="1923030">said</span> <span
  m="1923220">that</span> <span m="1923310">right</span> <span
  m="1923530">before.</span> <span m="1923860">But</span> <span
  m="1924580">I</span> <span m="1924690">wrote</span> <span
  m="1924880">that</span> <span m="1925000">down</span> <span
  m="1925180">here</span> <span m="1925340">correctly.</span> <span
  m="1926290">So</span> <span m="1926430">if</span> <span m="1926600">I</span>
  <span m="1926680">say</span> <span m="1926920">that</span> <span
  m="1927150">Copt</span> <span m="1927700">is at least</span> <span
  m="1927960">A,</span> <span m="1929190">then</span> <span m="1929870">I</span>
  <span m="1929970">got</span> <span m="1930120">my</span> <span
  m="1930890">proof</span> <span m="1931130">here</span> <span
  m="1931700">of</span> <span m="1931800">2</span> <span
  m="1931920">approximation.</span> <span m="1932770">Because</span> <span
  m="1932940">I'm</span> <span m="1933030">getting</span> <span
  m="1933230">2</span> <span m="1933410">A</span> <span m="1933520">back,</span>
  <span m="1934380">right?</span> <span m="1934690">So</span> <span
  m="1934950">if</span> <span m="1935050">you</span> <span m="1935130">go</span>
  <span m="1935270">look</span> <span m="1935470">at</span> <span
  m="1936040">C</span> <span m="1936420">divided</span> <span
  m="1936860">by--</span> <span m="1937190">so</span> <span
  m="1937290">this</span> <span m="1937440">means,</span> <span
  m="1937720">of</span> <span m="1937810">course,</span> <span
  m="1938100">that</span> <span m="1939710">C</span> <span m="1941060">is</span>
  <span m="1942720">less</span> <span m="1943030">than</span> <span
  m="1943190">or</span> <span m="1943290">equal</span> <span
  m="1943500">to</span> <span m="1943893">2</span> <span
  m="1945370">Copt,</span> <span m="1946700">if</span> <span
  m="1946900">I</span> <span m="1946960">can</span> <span
  m="1947110">show--</span> <span m="1949750">make</span> <span
  m="1949910">that</span> <span m="1950060">statement.</span></p><p><span
  m="1951140">And</span> <span m="1951350">it</span> <span
  m="1951430">turns</span> <span m="1951650">out</span> <span
  m="1952190">that's</span> <span m="1953710">a</span> <span
  m="1954070">fairly</span> <span m="1954380">easy</span> <span
  m="1954670">statement</span> <span m="1955100">to</span> <span
  m="1955160">argue</span> <span m="1956550">simply</span> <span
  m="1956890">because</span> <span m="1958350">of</span> <span
  m="1958480">the</span> <span m="1958570">definition</span> <span
  m="1959750">of</span> <span m="1959930">vertex</span> <span
  m="1960350">cover.</span> <span m="1962070">Remember</span> <span
  m="1963160">that</span> <span m="1964540">I'm</span> <span
  m="1964710">going</span> <span m="1964990">to</span> <span
  m="1965110">have</span> <span m="1965440">to</span> <span
  m="1966010">cover</span> <span m="1967100">every</span> <span
  m="1967550">edge,</span> <span m="1968530">correct?</span> <span
  m="1969510">So</span> <span m="1969950">I'm</span> <span
  m="1970100">going</span> <span m="1970340">to</span> <span
  m="1970490">cover--</span> <span m="1971260">need</span> <span
  m="1971610">to</span> <span m="1971730">cover</span> <span
  m="1975820">every</span> <span m="1976330">edge,</span> <span
  m="1979170">including</span> <span m="1982540">all</span> <span
  m="1982940">edges</span> <span m="1983360">in</span> <span
  m="1983530">A.</span> <span m="1986790">A is</span> <span m="1987130">a</span>
  <span m="1987210">subset</span> <span m="1987720">of</span> <span
  m="1987820">edges.</span> <span m="1989070">I</span> <span
  m="1989190">have</span> <span m="1989310">to</span> <span
  m="1989340">cover</span> <span m="1989810">all the</span> <span
  m="1989880">edges.</span> <span m="1990960">Clearly,</span> <span
  m="1991180">I have</span> <span m="1991320">to</span> <span
  m="1991390">cover</span> <span m="1991640">the</span> <span m="1991760">A
  edges,</span> <span m="1992310">which</span> <span m="1992460">are</span>
  <span m="1992540">a</span> <span m="1992600">subset</span> <span
  m="1992990">of</span> <span m="1993090">all</span> <span m="1993220">of</span>
  <span m="1993310">the</span> <span m="1993390">edges,</span> <span
  m="1994276">right?</span> <span m="1995010">How</span> <span
  m="1995340">am</span> <span m="1995430">I</span> <span
  m="1995500">going</span> <span m="1995710">to</span> <span
  m="1995800">cover</span> <span m="1997010">all</span> <span
  m="1997300">of</span> <span m="1997430">the</span> <span m="1998390">A
  edges</span> <span m="1999500">that</span> <span m="1999670">happened</span>
  <span m="2000070">to</span> <span m="2000960">all</span> <span
  m="2001300">be</span> <span m="2001480">disjoint</span> <span
  m="2002560">in</span> <span m="2002710">terms</span> <span
  m="2002960">of</span> <span m="2003070">their</span> <span
  m="2003220">vertices?</span> <span m="2004320">I'm</span> <span
  m="2004510">going</span> <span m="2004700">to</span> <span
  m="2004760">have</span> <span m="2005100">to</span> <span
  m="2005230">pick</span> <span m="2006670">one</span> <span
  m="2007020">vertex</span> <span m="2008250">for</span> <span
  m="2008610">each</span> <span m="2008880">of</span> <span
  m="2008970">these</span> <span m="2009160">edges,</span> <span
  m="2010420">right?</span> <span m="2011340">I mean,</span> <span m="2011500">I
  could</span> <span m="2011690">pick</span> <span m="2011850">this</span> <span
  m="2012010">one</span> <span m="2012270">or</span> <span
  m="2012350">that</span> <span m="2012520">one.</span> <span
  m="2012850">But</span> <span m="2012960">I</span> <span
  m="2012990">have</span> <span m="2013140">to</span> <span
  m="2013210">pick</span> <span m="2013320">one</span> <span
  m="2013510">of</span> <span m="2013600">them.</span> <span
  m="2014190">I</span> <span m="2014290">could</span> <span
  m="2014540">pick</span> <span m="2014670">this one</span> <span m="2014970">or
  that</span> <span m="2015010">one.</span> <span m="2016790">And</span> <span
  m="2016960">so</span> <span m="2017050">on</span> <span m="2017170">and</span>
  <span m="2017250">so</span> <span m="2017390">forth,</span> <span
  m="2018330">right?</span></p><p><span m="2018900">So</span> <span
  m="2019050">it</span> <span m="2019160">is</span> <span
  m="2019280">clear</span> <span m="2020260">that,</span> <span
  m="2021000">given</span> <span m="2021350">this</span> <span
  m="2021610">disjoint</span> <span m="2023340">collection</span> <span
  m="2023830">of</span> <span m="2023950">edges</span> <span
  m="2024340">corresponding</span> <span m="2024850">to</span> <span
  m="2024960">A,</span> <span m="2025670">that</span> <span
  m="2025900">Copt</span> <span m="2026580">is</span> <span m="2026740">greater
  than or</span> <span m="2027130">equal to</span> <span m="2027490">A,</span>
  <span m="2028450">OK?</span> <span m="2029440">And</span> <span
  m="2029810">that's</span> <span m="2029980">it.</span> <span
  m="2030980">So</span> <span m="2031480">I</span> <span m="2031620">had
  to</span> <span m="2031700">cover</span> <span m="2032000">all.</span> <span
  m="2032650">This</span> <span m="2032870">requires,</span> <span
  m="2035050">since</span> <span m="2039450">no</span> <span
  m="2039670">two</span> <span m="2039810">edges</span> <span
  m="2040080">share</span> <span m="2040410">an</span> <span
  m="2040520">endpoint,</span> <span m="2042100">this</span> <span
  m="2042320">means</span> <span m="2042650">that</span> <span
  m="2043690">I</span> <span m="2044080">need</span> <span m="2044370">to</span>
  <span m="2044980">pick</span> <span m="2047120">a</span> <span
  m="2047220">different</span> <span m="2047710">vertex</span> <span
  m="2052980">from</span> <span m="2053190">each</span> <span m="2053460">edge
  in</span> <span m="2053760">A.</span> <span m="2059550">And</span> <span
  m="2059790">that</span> <span m="2059929">implies</span> <span
  m="2063590">that</span> <span m="2064120">Copt</span> <span
  m="2064460">is</span> <span m="2064570">greater</span> <span
  m="2064750">than</span> <span m="2064820">or</span> <span
  m="2064909">equal</span> <span m="2065110">to</span> <span
  m="2065230">A.</span> <span m="2066150">All right?</span> <span
  m="2067350">Any</span> <span m="2067469">questions</span> <span
  m="2067760">about</span> <span m="2067929">that?</span> <span m="2069630">We
  all good here?</span> <span m="2070510">Yup?</span> <span
  m="2071400">Understood</span> <span m="2071520">the</span> <span
  m="2071630">proof?</span></p><p><span m="2073550">So</span> <span
  m="2073880">that's</span> <span m="2074080">our</span> <span
  m="2074170">first</span> <span m="2075139">approximation</span> <span
  m="2075670">algorithm</span> <span m="2076590">where</span> <span
  m="2076730">we</span> <span m="2076830">actually</span> <span
  m="2077040">had</span> <span m="2077159">a</span> <span
  m="2077210">proof.</span> <span m="2078760">And</span> <span
  m="2079010">so,</span> <span m="2079929">this</span> <span
  m="2080080">is</span> <span m="2080179">kind</span> <span
  m="2080290">of</span> <span m="2080360">cool.</span> <span
  m="2081510">It</span> <span m="2082190">obviously</span> <span
  m="2082520">a</span> <span m="2082580">pretty</span> <span
  m="2082770">simple</span> <span m="2083080">algorithm.</span> <span
  m="2083770">You're</span> <span m="2083949">guaranteed</span> <span
  m="2084480">to</span> <span m="2084540">be</span> <span
  m="2084670">within</span> <span m="2084880">a</span> <span
  m="2084940">factor</span> <span m="2085270">of 2.</span> <span m="2086560">It
  doesn't</span> <span m="2086830">mean</span> <span m="2087000">that</span>
  <span m="2087340">that's</span> <span m="2087600">the</span> <span
  m="2087679">best</span> <span m="2087889">heuristic</span> <span
  m="2088300">you</span> <span m="2088389">can</span> <span
  m="2088489">come</span> <span m="2088650">up</span> <span
  m="2088780">with.</span> <span m="2090679">It</span> <span
  m="2090920">doesn't</span> <span m="2091219">mean</span> <span
  m="2092300">that</span> <span m="2093550">this</span> <span
  m="2093630">is</span> <span m="2093719">what</span> <span
  m="2093900">you'd</span> <span m="2094429">code.</span> <span
  m="2095739">But</span> <span m="2096360">this</span> <span
  m="2096620">is</span> <span m="2096750">the</span> <span
  m="2097500">best</span> <span m="2098050">approximation</span> <span
  m="2098600">algorithm</span> <span m="2099800">that</span> <span
  m="2100600">you're</span> <span m="2100740">going</span> <span
  m="2100840">to</span> <span m="2100890">cover</span> <span
  m="2101700">for</span> <span m="2101850">vertex</span> <span
  m="2102190">cover,</span> <span m="2103150">OK?</span></p><p><span
  m="2105050">So,</span> <span m="2108000">what</span> <span
  m="2108190">about</span> <span m="2109520">other</span> <span
  m="2109750">problems?</span> <span m="2110370">What's</span> <span
  m="2110940">the</span> <span m="2111120">state</span> <span
  m="2111390">of</span> <span m="2111500">the</span> <span
  m="2112220">world</span> <span m="2112620">with</span> <span
  m="2112750">respect</span> <span m="2113080">to approximation?</span> <span
  m="2114340">There's</span> <span m="2114550">lots</span> <span
  m="2114940">of</span> <span m="2115940">NP</span> <span
  m="2116200">complete</span> <span m="2116570">and NP</span> <span
  m="2116880">hard</span> <span m="2117130">problems</span> <span
  m="2117550">for</span> <span m="2117670">which</span> <span
  m="2117850">we</span> <span m="2117960">know</span> <span
  m="2118100">approximation</span> <span m="2118680">schemes.</span> <span
  m="2120030">And</span> <span m="2120640">we</span> <span
  m="2120760">like</span> <span m="2120900">to</span> <span
  m="2120980">move</span> <span m="2121300">towards</span> <span
  m="2122330">approximation</span> <span m="2122950">schemes</span> <span
  m="2124080">slowly.</span> <span m="2124910">But</span> <span
  m="2125110">I'd</span> <span m="2125160">like</span> <span
  m="2125330">to</span> <span m="2125430">look</span> <span
  m="2125630">at</span> <span m="2125690">a</span> <span
  m="2126010">problem</span> <span m="2127120">that</span> <span
  m="2127550">perhaps</span> <span m="2127960">is</span> <span
  m="2128610">a</span> <span m="2128720">little</span> <span
  m="2129020">more</span> <span m="2129190">compelling</span> <span
  m="2130350">than</span> <span m="2130570">vertex</span> <span
  m="2130990">cover</span> <span m="2132020">before</span> <span
  m="2132230">we</span> <span m="2132350">get</span> <span m="2132560">to</span>
  <span m="2133170">approximation</span> <span m="2133770">schemes.</span> <span
  m="2134310">And</span> <span m="2134440">that's</span> <span
  m="2134590">what's</span> <span m="2134790">called</span> <span
  m="2135080">set</span> <span m="2135440">cover.</span></p><p><span
  m="2144220">So</span> <span m="2144440">set</span> <span
  m="2144750">cover</span> <span m="2147740">tries</span> <span
  m="2148160">to</span> <span m="2148280">cover</span> <span
  m="2148700">a</span> <span m="2148810">set</span> <span
  m="2150430">with</span> <span m="2150570">subsets.</span> <span
  m="2152810">And</span> <span m="2153220">it's</span> <span
  m="2153390">very</span> <span m="2153550">useful</span> <span
  m="2153950">in</span> <span m="2154770">optimization</span> <span
  m="2158050">where</span> <span m="2158300">you</span> <span
  m="2158420">have</span> <span m="2159810">overlapping</span> <span
  m="2160380">sets,</span> <span m="2162400">maybe</span> <span
  m="2162700">it's</span> <span m="2163100">schedules,</span> <span
  m="2163710">it's</span> <span m="2163940">tasks,</span> <span
  m="2164510">it's</span> <span m="2166090">people</span> <span
  m="2166590">getting</span> <span m="2166800">invited</span> <span
  m="2167150">to</span> <span m="2167240">dinner,</span> <span
  m="2168170">et</span> <span m="2168300">cetera,</span> <span
  m="2168630">and</span> <span m="2168960">you</span> <span
  m="2169110">want</span> <span m="2169280">to</span> <span
  m="2169610">make</span> <span m="2169820">sure</span> <span
  m="2169990">everybody</span> <span m="2170340">gets</span> <span
  m="2170520">invited.</span> <span m="2171400">You</span> <span
  m="2171520">want</span> <span m="2171620">to</span> <span
  m="2171660">invite</span> <span m="2171950">families,</span> <span
  m="2173520">and</span> <span m="2174380">there's</span> <span
  m="2174550">overlapping</span> <span m="2175030">families,</span> <span
  m="2175600">because</span> <span m="2175850">people</span> <span
  m="2176060">have</span> <span m="2176200">relationships.</span> <span
  m="2177840">And</span> <span m="2178710">you</span> <span
  m="2178860">want</span> <span m="2179010">to</span> <span
  m="2179920">eventually</span> <span m="2180310">minimize</span> <span
  m="2180680">the</span> <span m="2180740">number</span> <span
  m="2181010">of</span> <span m="2181250">dinners</span> <span
  m="2181590">you</span> <span m="2181700">actually</span> <span
  m="2181970">have</span> <span m="2182090">to</span> <span
  m="2182180">have.</span> <span m="2183010">And</span> <span
  m="2183500">that's,</span> <span m="2184340">I</span> <span m="2184450">don't
  know,</span> <span m="2184540">hopefully</span> <span m="2185070">a</span>
  <span m="2185110">motivating</span> <span m="2185630">example.</span> <span
  m="2188330">If it</span> <span m="2188570">wasn't,</span> <span
  m="2189930">too</span> <span m="2190070">bad.</span></p><p><span
  m="2193460">So</span> <span m="2193530">you</span> <span m="2193790">do
  have</span> <span m="2193900">a</span> <span m="2193980">family</span> <span
  m="2194460">of</span> <span m="2194670">possibly</span> <span
  m="2195190">overlapping</span> <span m="2195810">subsets.</span> <span
  m="2200410">S1,</span> <span m="2201480">S2,</span> <span
  m="2202740">Sm,</span> <span m="2204620">subset</span> <span
  m="2205020">of</span> <span m="2205140">equal</span> <span
  m="2205720">to</span> <span m="2205920">x.</span> <span m="2206460">So</span>
  <span m="2206580">that's</span> <span m="2206760">that</span> <span
  m="2206900">big</span> <span m="2207080">set</span> <span
  m="2207340">that</span> <span m="2207440">we</span> <span
  m="2207540">have.</span> <span m="2208570">Such</span> <span
  m="2208880">that</span> <span m="2209510">I</span> <span
  m="2209610">want</span> <span m="2209760">to</span> <span
  m="2209810">cover</span> <span m="2210270">all</span> <span
  m="2210500">of</span> <span m="2210590">the</span> <span
  m="2210660">elements.</span> <span m="2211740">So</span> <span
  m="2211860">that's</span> <span m="2212040">what</span> <span
  m="2212210">this</span> <span m="2214110">little</span> <span
  m="2215060">equation</span> <span m="2215580">corresponds</span> <span
  m="2216080">to.</span> <span m="2216680">The</span> <span
  m="2216760">union</span> <span m="2217140">of</span> <span
  m="2217260">all</span> <span m="2217480">the</span> <span
  m="2217570">selected</span> <span m="2219000">SI's</span> <span
  m="2220160">should</span> <span m="2220460">equal</span> <span
  m="2221360">x.</span> <span m="2222580">I</span> <span m="2222630">need</span>
  <span m="2222770">to</span> <span m="2222840">cover</span> <span
  m="2223100">it</span> <span m="2223170">all.</span> <span
  m="2224720">And</span> <span m="2226230">I</span> <span m="2226390">do</span>
  <span m="2226570">want</span> <span m="2226700">to</span> <span
  m="2226750">minimize.</span> <span m="2229890">It's</span> <span
  m="2229950">called</span> <span m="2230010">a</span> <span
  m="2230240">C.</span> <span m="2232630">Find</span> <span m="2232970">C</span>
  <span m="2233310">subset</span> <span m="2235420">1,</span> <span
  m="2235880">2,</span> <span m="2236860">m.</span> <span m="2237240">So</span>
  <span m="2237310">I'm</span> <span m="2237420">selecting</span> <span
  m="2237880">a</span> <span m="2237940">bunch</span> <span
  m="2238140">of</span> <span m="2238210">these</span> <span
  m="2238390">things.</span> <span m="2238750">So</span> <span
  m="2239000">C</span> <span m="2239325">is</span> <span
  m="2239650">simply--</span> <span m="2240430">capital</span> <span
  m="2240760">C</span> <span m="2240970">here</span> <span m="2241250">is</span>
  <span m="2242740">some</span> <span m="2242910">subset</span> <span
  m="2243310">of</span> <span m="2243450">the</span> <span
  m="2244730">indices.</span> <span m="2246530">And</span> <span
  m="2246770">the</span> <span m="2246820">only</span> <span
  m="2246970">reason</span> <span m="2247190">I</span> <span
  m="2248140">do</span> <span m="2248330">that</span> <span
  m="2250220">is</span> <span m="2250550">to</span> <span m="2250670">say</span>
  <span m="2250910">that</span> <span m="2251090">I</span> <span
  m="2251130">want</span> <span m="2251300">to</span> <span
  m="2251350">do</span> <span m="2251480">this</span> <span
  m="2251740">while</span> <span m="2252830">minimizing.</span> <span
  m="2253430">I</span> <span m="2253470">wanted</span> <span
  m="2253640">to</span> <span m="2253720">I</span> <span
  m="2253900">equals</span> <span m="2254140">1</span> <span
  m="2254330">through</span> <span m="2254520">m</span> <span
  m="2256424">while</span> <span m="2256900">minimizing</span> <span
  m="2257470">C.</span></p><p><span m="2265940">OK?</span> <span
  m="2269200">Let</span> <span m="2269330">me</span> <span
  m="2269400">get</span> <span m="2269540">this</span> <span
  m="2269620">right.</span> <span m="2270550">So</span> <span
  m="2271270">this</span> <span m="2271820">is</span> <span
  m="2271890">what</span> <span m="2272060">I</span> <span
  m="2272120">have.</span> <span m="2272550">Find</span> <span
  m="2272980">C,</span> <span m="2275370">subset</span> <span
  m="2275800">of</span> <span m="2275960">these,</span> <span
  m="2278090">such</span> <span m="2278490">that--</span> <span
  m="2278800">I'm</span> <span m="2278940">sorry.</span> <span
  m="2279200">There's</span> <span m="2279350">one</span> <span
  m="2279490">more.</span> <span m="2283450">Union</span> <span
  m="2284070">of</span> <span m="2284230">I</span> <span
  m="2284760">belonging</span> <span m="2285260">to</span> <span
  m="2285390">C,</span> <span m="2287550">SI</span> <span
  m="2288770">equals</span> <span m="2289190">x.</span> <span
  m="2290600">OK?</span> <span m="2293980">Sorry</span> <span
  m="2294270">for</span> <span m="2294330">the</span> <span
  m="2294430">mess</span> <span m="2294720">here.</span> <span
  m="2296340">But</span> <span m="2296870">this</span> <span
  m="2297140">last</span> <span m="2297340">line</span> <span
  m="2297670">there--</span> <span m="2297960">so</span> <span
  m="2298170">this</span> <span m="2298370">is</span> <span
  m="2298490">simply</span> <span m="2299550">a</span> <span
  m="2299710">specification</span> <span m="2301140">of</span> <span
  m="2301330">the</span> <span m="2301420">problem.</span> <span
  m="2302390">I'm</span> <span m="2302630">going</span> <span
  m="2302890">to</span> <span m="2302950">be</span> <span
  m="2303080">given</span> <span m="2303480">x,</span> <span
  m="2303780">and</span> <span m="2304080">I'm</span> <span
  m="2304190">going</span> <span m="2304290">to</span> <span
  m="2304330">be</span> <span m="2304420">given</span> <span
  m="2304720">a</span> <span m="2304790">large</span> <span
  m="2305230">collection</span> <span m="2305710">of</span> <span
  m="2305850">subsets,</span> <span m="2306870">such</span> <span
  m="2307160">that</span> <span m="2308090">the</span> <span
  m="2308250">union</span> <span m="2308610">of</span> <span
  m="2308760">all</span> <span m="2309050">of</span> <span
  m="2309150">those</span> <span m="2309340">subsets</span> <span
  m="2311010">are</span> <span m="2311190">going</span> <span
  m="2311420">to</span> <span m="2311500">cover</span> <span
  m="2311840">x.</span> <span m="2313100">And</span> <span
  m="2313690">now</span> <span m="2313860">I'm</span> <span
  m="2314000">saying,</span> <span m="2314990">I</span> <span
  m="2315010">want</span> <span m="2315170">to</span> <span
  m="2315270">look</span> <span m="2315460">inside</span> <span
  m="2316050">and</span> <span m="2316140">I</span> <span
  m="2316170">want</span> <span m="2316320">to</span> <span
  m="2316400">select</span> <span m="2316840">all</span> <span
  m="2317090">of</span> <span m="2317150">them.</span> <span
  m="2319810">I</span> <span m="2319890">want</span> <span m="2320040">to</span>
  <span m="2320090">select</span> <span m="2321180">a</span> <span
  m="2321280">bunch</span> <span m="2321530">of</span> <span
  m="2321600">these</span> <span m="2321790">things.</span> <span
  m="2322190">You</span> <span m="2322290">know,</span> <span
  m="2322350">C,</span> <span m="2322630">which</span> <span
  m="2322790">is</span> <span m="2322900">some</span> <span
  m="2323800">subset</span> <span m="2324270">of</span> <span
  m="2324370">these</span> <span m="2324550">indices,</span> <span
  m="2325100">so</span> <span m="2325510">1</span> <span m="2325650">may</span>
  <span m="2325790">not</span> <span m="2325990">be</span> <span
  m="2326150">in</span> <span m="2326270">it.</span> <span m="2327090">2</span>
  <span m="2327200">may</span> <span m="2327340">be</span> <span
  m="2327520">in</span> <span m="2327610">it.</span> <span m="2328240">4</span>
  <span m="2328530">may</span> <span m="2328810">be in</span> <span
  m="2328900">it,</span> <span m="2329185">et</span> <span
  m="2329470">cetera.</span> <span m="2330120">And</span> <span
  m="2330410">such</span> <span m="2330620">that</span> <span
  m="2330930">those</span> <span m="2333390">subsets</span> <span
  m="2333880">that</span> <span m="2333980">are</span> <span
  m="2334160">in</span> <span m="2334390">this</span> <span
  m="2334980">capital</span> <span m="2335360">C</span> <span
  m="2335600">set</span> <span m="2336200">add</span> <span
  m="2336620">up</span> <span m="2336750">to</span> <span m="2336870">x.</span>
  <span m="2337802">OK?</span></p><p><span m="2339270">So</span> <span
  m="2339460">pictorially,</span> <span m="2341470">may</span> <span
  m="2341630">make</span> <span m="2341820">things</span> <span
  m="2344990">clearer.</span> <span m="2347740">You</span> <span
  m="2347880">have,</span> <span m="2350060">let's</span> <span
  m="2350290">say,</span> <span m="2351520">a</span> <span
  m="2351610">grid</span> <span m="2351900">here</span> <span
  m="2352760">corresponding</span> <span m="2353270">to</span> <span
  m="2354770">x.</span> <span m="2356410">So</span> <span
  m="2356570">each</span> <span m="2356830">of</span> <span
  m="2356940">these</span> <span m="2357200">dots</span> <span
  m="2357570">that</span> <span m="2357690">I'm</span> <span
  m="2357810">drawing</span> <span m="2358110">here</span> <span
  m="2358490">are</span> <span m="2358710">elements</span> <span
  m="2359210">that</span> <span m="2359390">need</span> <span
  m="2359580">to</span> <span m="2359640">be</span> <span
  m="2359800">covered.</span> <span m="2365130">So</span> <span
  m="2365230">that's</span> <span m="2365320">my</span> <span
  m="2365490">x.</span> <span m="2366930">And</span> <span m="2367400">I</span>
  <span m="2367500">might</span> <span m="2367740">have</span> <span
  m="2372570">S1</span> <span m="2373670">corresponding</span> <span
  m="2374200">to</span> <span m="2374270">that.</span> <span
  m="2376390">This</span> <span m="2379220">is</span> <span
  m="2380230">S3,</span> <span m="2381942">right?</span> <span
  m="2382380">And</span> <span m="2383670">S2</span> <span m="2384930">is</span>
  <span m="2385130">this</span> <span m="2385300">thing</span> <span
  m="2385480">in</span> <span m="2385540">the</span> <span
  m="2385610">middle.</span> <span m="2390190">That's</span> <span
  m="2390450">S2.</span> <span m="2392600">S5</span> <span m="2396930">is</span>
  <span m="2397230">this</span> <span m="2397390">one</span> <span
  m="2397610">here.</span> <span m="2400270">And</span> <span
  m="2402190">I</span> <span m="2402300">got</span> <span m="2402430">a</span>
  <span m="2402500">little</span> <span m="2402810">S4</span> <span
  m="2403400">over</span> <span m="2403530">here.</span> <span
  m="2407420">And</span> <span m="2407610">finally,</span> <span
  m="2412130">I</span> <span m="2412240">got--</span> <span
  m="2413580">let's</span> <span m="2413810">see--</span> <span
  m="2415490">S6,</span> <span m="2416160">yup.</span> <span
  m="2419870">Which</span> <span m="2420060">is</span> <span
  m="2420650">kind</span> <span m="2420750">of</span> <span
  m="2420820">this</span> <span m="2420950">funky</span> <span
  m="2421260">thing</span> <span m="2423650">that</span> <span
  m="2424410">goes</span> <span m="2424660">like</span> <span
  m="2424890">that.</span></p><p><span m="2430050">So</span> <span
  m="2430080">this</span> <span m="2430260">thing</span> <span
  m="2430410">here</span> <span m="2430710">is</span> <span
  m="2431080">S6.</span> <span m="2432680">All</span> <span
  m="2432770">right?</span> <span m="2434800">OK.</span> <span
  m="2435100">What's</span> <span m="2435440">the</span> <span
  m="2435520">optimum?</span> <span m="2436340">You</span> <span
  m="2437330">got</span> <span m="2437600">30</span> <span
  m="2437820">seconds.</span> <span m="2441480">What's</span> <span
  m="2442430">the</span> <span m="2442530">optimum</span> <span
  m="2443050">cover?</span> <span m="2445890">Yeah,</span> <span
  m="2446070">go</span> <span m="2446150">ahead.</span> <span m="2448170">You
  had</span> <span m="2448300">your</span> <span m="2448470">hand</span> <span
  m="2448630">up.</span></p><p><span m="2449608">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2453740">PROFESSOR: Yep.</span> <span
  m="2454250">That's</span> <span m="2454440">exactly</span> <span
  m="2454740">right.</span> <span m="2455070">So</span> <span
  m="2455160">the</span> <span m="2455270">optimum</span> <span
  m="2457540">S3,</span> <span m="2459000">S4,</span> <span
  m="2459800">S5.</span> <span m="2461025">All right.</span></p><p><span
  m="2461460">AUDIENCE: [INAUDIBLE]</span></p><p><span m="2467542">PROFESSOR:
  Oh.</span> <span m="2468020">S3.</span> <span m="2468660">Yeah,</span> <span
  m="2468760">S4</span> <span m="2469300">is</span> <span
  m="2469410">this</span> <span m="2469550">one</span> <span
  m="2469720">here.</span> <span m="2470840">S6,</span> <span
  m="2471000">S5,</span> <span m="2471790">OK</span> <span
  m="2472000">good.</span> <span m="2474820">S3.</span> <span
  m="2476400">And</span> <span m="2476610">then--</span> <span
  m="2476890">oh!</span> <span m="2477380">You know what?</span> <span
  m="2478420">You're</span> <span m="2478540">right.</span> <span
  m="2479860">Let's</span> <span m="2480260">make</span> <span
  m="2480410">you</span> <span m="2480520">right.</span> <span
  m="2486210">Don't</span> <span m="2486500">erase</span> <span
  m="2486800">that.</span> <span m="2487940">Here you go.</span></p><p><span
  m="2493990">So</span> <span m="2494160">that's</span> <span
  m="2494430">3,</span> <span m="2495200">right?</span> <span
  m="2495430">So</span> <span m="2496250">C</span> <span
  m="2497790">would</span> <span m="2498020">be--</span> <span
  m="2499130">cardinality</span> <span m="2499670">of</span> <span
  m="2499750">C</span> <span m="2501150">would</span> <span
  m="2501300">be</span> <span m="2501440">3.</span> <span m="2503600">So</span>
  <span m="2505130">it's a</span> <span m="2505240">nontrivial</span> <span
  m="2505830">problem.</span> <span m="2507620">It's</span> <span
  m="2507910">not</span> <span m="2508170">clear</span> <span
  m="2508430">how</span> <span m="2508590">you're</span> <span
  m="2508730">going</span> <span m="2508900">to</span> <span
  m="2508980">do</span> <span m="2509110">this.</span> <span
  m="2509910">I've</span> <span m="2510010">got</span> <span
  m="2510190">to</span> <span m="2510230">use</span> <span m="2510430">a</span>
  <span m="2510550">heuristic.</span> <span m="2512800">Hard</span> <span
  m="2513360">in</span> <span m="2513520">terms</span> <span
  m="2513800">of</span> <span m="2514190">optimization.</span> <span
  m="2515640">Optimal</span> <span m="2516260">requires</span> <span
  m="2516840">exponential</span> <span m="2517310">time,</span> <span
  m="2517710">as</span> <span m="2517810">far</span> <span m="2517850">as</span>
  <span m="2517930">we</span> <span m="2518050">know.</span> <span
  m="2519280">And</span> <span m="2520330">we're</span> <span
  m="2520530">just</span> <span m="2520650">going</span> <span
  m="2520830">to</span> <span m="2520890">go</span> <span m="2521060">off</span>
  <span m="2521250">and</span> <span m="2521390">say,</span> <span
  m="2521750">hey</span> <span m="2522120">let's</span> <span
  m="2523690">design</span> <span m="2524140">an</span> <span
  m="2524230">approximation</span> <span m="2524830">algorithm,</span> <span
  m="2525830">right?</span> <span m="2526250">So</span> <span
  m="2526430">let's</span> <span m="2526930">think</span> <span m="2527150">of
  a</span> <span m="2527270">heuristic.</span> <span m="2528590">What's</span>
  <span m="2529130">a</span> <span m="2529170">good</span> <span
  m="2529290">heuristic?</span> <span m="2531820">What's</span> <span
  m="2532710">a</span> <span m="2532750">good</span> <span
  m="2532900">heuristic</span> <span m="2533350">for</span> <span
  m="2533450">this</span> <span m="2533620">problem?</span> <span m="2535280">I
  hope</span> <span m="2535480">I haven't</span> <span m="2535570">scared</span>
  <span m="2535920">you.</span> <span m="2537420">What's</span> <span
  m="2537630">a</span> <span m="2537660">good</span> <span
  m="2537780">heuristic</span> <span m="2538200">for</span> <span
  m="2538270">this</span> <span m="2538440">problem?</span> <span
  m="2539150">What's</span> <span m="2539290">the obvious</span> <span
  m="2539690">heuristic?</span> <span m="2540180">Yeah?</span></p><p><span
  m="2540610">AUDIENCE: [INAUDIBLE]</span></p><p><span m="2542090">PROFESSOR:
  The</span> <span m="2542280">largest</span> <span m="2542630">subset.</span>
  <span m="2543130">And</span> <span m="2543240">in</span> <span
  m="2543300">this</span> <span m="2543460">particular</span> <span
  m="2543760">case,</span> <span m="2544450">it's</span> <span
  m="2544610">actually</span> <span m="2544930">the</span> <span
  m="2545020">best</span> <span m="2545470">also</span> <span
  m="2545960">in</span> <span m="2547830">terms</span> <span
  m="2548060">of</span> <span m="2548220">theory.</span> <span
  m="2549900">So,</span> <span m="2556920">approximate</span> <span
  m="2557520">set</span> <span m="2557800">cover--</span> <span
  m="2563820">at</span> <span m="2563920">least</span> <span m="2564090">the
  best that</span> <span m="2564520">we're</span> <span
  m="2564680">concerned</span> <span m="2565000">about</span> <span
  m="2565450">in</span> <span m="2565590">this</span> <span
  m="2565770">lecture.</span> <span m="2575360">And</span> <span
  m="2575560">what</span> <span m="2575710">is</span> <span
  m="2576420">approximates</span> <span m="2576890">set</span> <span
  m="2577050">cover?</span> <span m="2578000">It's</span> <span
  m="2578850">pick</span> <span m="2580750">largest</span> <span
  m="2582760">SI.</span> <span m="2585130">Remove</span> <span
  m="2587980">all</span> <span m="2588510">elements</span> <span
  m="2591660">in</span> <span m="2591950">SI</span> <span
  m="2592930">from</span> <span m="2593390">x,</span> <span
  m="2597420">and</span> <span m="2597760">other</span> <span
  m="2598020">Sj.</span> <span m="2601270">So</span> <span
  m="2601460">you're</span> <span m="2601630">constantly</span> <span
  m="2602090">shrinking.</span> <span m="2603260">And</span> <span
  m="2603440">then</span> <span m="2603610">keep</span> <span
  m="2603780">doing</span> <span m="2603990">that.</span> <span
  m="2605710">So</span> <span m="2606560">you'll</span> <span
  m="2606980">have</span> <span m="2607090">a</span> <span
  m="2607120">new</span> <span m="2607270">problem.</span> <span
  m="2608120">And</span> <span m="2608380">you're</span> <span
  m="2608510">going</span> <span m="2608740">to</span> <span
  m="2608900">specify</span> <span m="2609560">that</span> <span
  m="2609760">new</span> <span m="2609900">problem</span> <span
  m="2610490">on</span> <span m="2610670">every</span> <span
  m="2610910">iteration,</span> <span m="2611520">just</span> <span
  m="2611790">like</span> <span m="2611940">we</span> <span
  m="2612050">did</span> <span m="2612720">for</span> <span
  m="2612980">vertex</span> <span m="2613360">cover</span> <span
  m="2613670">and</span> <span m="2613870">we've</span> <span
  m="2614120">done</span> <span m="2614340">many</span> <span
  m="2614580">a</span> <span m="2614640">time.</span></p><p><span
  m="2615490">If</span> <span m="2615610">you</span> <span m="2615700">do</span>
  <span m="2615810">that</span> <span m="2616000">over</span> <span
  m="2616150">here,</span> <span m="2617450">notice</span> <span
  m="2617690">that</span> <span m="2618530">what</span> <span
  m="2618950">you</span> <span m="2619040">end</span> <span
  m="2619230">up</span> <span m="2620480">with</span> <span
  m="2620840">is</span> <span m="2621870">picking</span> <span
  m="2622570">S1,</span> <span m="2623900">because</span> <span
  m="2624080">S1</span> <span m="2624550">is</span> <span m="2625360">the</span>
  <span m="2625430">big</span> <span m="2625600">boy</span> <span
  m="2625840">here,</span> <span m="2626830">in</span> <span
  m="2626980">the</span> <span m="2627060">sense</span> <span
  m="2627350">that</span> <span m="2627550">it's</span> <span
  m="2627790">got</span> <span m="2628120">six</span> <span
  m="2629450">elements</span> <span m="2629880">in</span> <span
  m="2630020">it.</span> <span m="2630740">Right?</span> <span
  m="2631110">Up</span> <span m="2631320">on</span> <span
  m="2631440">top.</span> <span m="2632670">And</span> <span
  m="2632900">so</span> <span m="2633660">you'd</span> <span
  m="2633820">pick</span> <span m="2634780">approx</span> <span
  m="2635970">or</span> <span m="2636140">heuristic</span> <span
  m="2638090">algo</span> <span m="2639460">would</span> <span
  m="2639710">pick</span> <span m="2640540">S1,</span> <span
  m="2641720">S4,</span> <span m="2642962">S5,</span> <span m="2644450">and
  S3</span> <span m="2645780">in</span> <span m="2646000">that</span> <span
  m="2646220">order.</span> <span m="2647660">I</span> <span
  m="2647770">won't</span> <span m="2647960">go</span> <span
  m="2648080">over</span> <span m="2648270">it.</span> <span
  m="2649450">It's</span> <span m="2649630">not</span> <span
  m="2649780">that</span> <span m="2649920">important.</span></p><p><span
  m="2652060">The</span> <span m="2652490">point</span> <span
  m="2652780">is</span> <span m="2652900">it</span> <span
  m="2652990">doesn't</span> <span m="2653230">get</span> <span
  m="2653390">you</span> <span m="2653530">the</span> <span
  m="2654160">optimum</span> <span m="2654640">for</span> <span
  m="2654770">this</span> <span m="2654980">problem.</span> <span
  m="2655790">And</span> <span m="2656080">in</span> <span
  m="2656240">general,</span> <span m="2657200">you</span> <span
  m="2657340">could</span> <span m="2657440">always</span> <span
  m="2657720">concoct</span> <span m="2658790">examples</span> <span
  m="2659300">where</span> <span m="2659840">any</span> <span
  m="2660060">heuristic</span> <span m="2660520">fails,</span> <span
  m="2660850">of</span> <span m="2660960">course,</span> <span
  m="2661400">right?</span> <span m="2661810">Because</span> <span
  m="2662210">this</span> <span m="2662350">problem</span> <span
  m="2662650">is</span> <span m="2662740">hard.</span> <span
  m="2663870">But</span> <span m="2664260">it's</span> <span
  m="2664770">four</span> <span m="2665170">as</span> <span
  m="2665290">opposed</span> <span m="2665550">to</span> <span
  m="2665630">three.</span> <span m="2666580">And</span> <span
  m="2667660">the</span> <span m="2667740">big</span> <span
  m="2667860">question,</span> <span m="2668190">again,</span> <span
  m="2668650">as</span> <span m="2668870">always,</span> <span
  m="2669460">is,</span> <span m="2670160">what's</span> <span
  m="2670400">the</span> <span m="2670490">bound?</span> <span
  m="2671780">What's</span> <span m="2672060">the</span> <span
  m="2672150">bound</span> <span m="2672730">if</span> <span
  m="2672890">you</span> <span m="2673040">applied</span> <span
  m="2673450">this</span> <span m="2673930">heuristic?</span> <span
  m="2675980">And</span> <span m="2676510">what</span> <span
  m="2676740">can</span> <span m="2676840">you</span> <span
  m="2676930">show</span> <span m="2677230">with</span> <span
  m="2677390">respect</span> <span m="2677690">to</span> <span
  m="2677750">the</span> <span m="2678220">approximation</span> <span
  m="2679100">algorithm?</span> <span m="2679650">What</span> <span
  m="2679830">is</span> <span m="2679960">row</span> <span m="2680170">n</span>
  <span m="2680390">here?</span></p><p><span m="2681430">So</span> <span
  m="2681550">that's</span> <span m="2681750">what</span> <span
  m="2681880">we</span> <span m="2681970">have</span> <span
  m="2682090">to</span> <span m="2682170">do</span> <span
  m="2682310">here,</span> <span m="2683400">in</span> <span
  m="2683510">terms</span> <span m="2683710">of</span> <span
  m="2683790">what</span> <span m="2683940">the</span> <span
  m="2684010">bound</span> <span m="2684330">is.</span> <span
  m="2685360">And</span> <span m="2686280">we're</span> <span
  m="2686470">actually</span> <span m="2686720">going</span> <span
  m="2686830">to</span> <span m="2686890">do an</span> <span
  m="2686990">analysis</span> <span m="2687590">here</span> <span
  m="2688710">that</span> <span m="2689330">is</span> <span
  m="2689770">pretty</span> <span m="2690060">straightforward.</span> <span
  m="2690990">It's</span> <span m="2691060">got</span> <span
  m="2691150">a</span> <span m="2691220">little</span> <span
  m="2691380">bit</span> <span m="2691490">of</span> <span
  m="2691560">algebra</span> <span m="2692020">in</span> <span
  m="2692140">it.</span> <span m="2693160">But if</span> <span
  m="2693300">you</span> <span m="2693380">go</span> <span
  m="2693560">look</span> <span m="2693750">at</span> <span
  m="2693910">that</span> <span m="2694160">this,</span> <span
  m="2695270">it's</span> <span m="2695480">covered</span> <span
  m="2696160">in</span> <span m="2696310">CLRS,</span> <span
  m="2696620">the</span> <span m="2696710">textbook.</span> <span
  m="2697150">But</span> <span m="2697290">the</span> <span
  m="2697350">analysis</span> <span m="2697770">in</span> <span
  m="2697910">there</span> <span m="2698670">uses</span> <span
  m="2698990">harmonic</span> <span m="2699450">numbers,</span> <span
  m="2700520">and</span> <span m="2701260">is</span> <span
  m="2701750">substantially</span> <span m="2702190">more</span> <span
  m="2702830">complicated</span> <span m="2704190">for,</span> <span
  m="2705670">in</span> <span m="2705800">my</span> <span
  m="2705940">mind,</span> <span m="2706190">no</span> <span
  m="2706300">reason.</span></p><p><span m="2708430">And</span> <span
  m="2708570">so</span> <span m="2709010">we</span> <span
  m="2709120">have</span> <span m="2709240">a</span> <span
  m="2709300">simpler</span> <span m="2709580">analysis</span> <span
  m="2710050">here</span> <span m="2710870">that</span> <span
  m="2711200">is</span> <span m="2711360">simply</span> <span
  m="2711660">going</span> <span m="2711820">to</span> <span
  m="2711870">be</span> <span m="2712100">a</span> <span
  m="2712160">matter</span> <span m="2712550">of</span> <span
  m="2712990">counting.</span> <span m="2714630">We</span> <span
  m="2714820">are</span> <span m="2715050">picking</span> <span
  m="2716060">the</span> <span m="2716200">maximum</span> <span
  m="2717420">number</span> <span m="2718910">of</span> <span
  m="2721700">elements</span> <span m="2722410">every</span> <span
  m="2722730">time.</span> <span m="2723550">The</span> <span
  m="2723680">best</span> <span m="2723960">we</span> <span
  m="2724070">can</span> <span m="2724200">do.</span> <span m="2724520">It's
  a</span> <span m="2724795">greedy</span> <span m="2725070">heuristic.</span>
  <span m="2726020">We're</span> <span m="2726140">trying</span> <span
  m="2726450">to</span> <span m="2727890">shrink</span> <span
  m="2729070">our</span> <span m="2730150">problem</span> <span
  m="2731750">as</span> <span m="2732640">much</span> <span
  m="2732920">as</span> <span m="2733060">possible.</span> <span
  m="2734000">Initially</span> <span m="2734430">we</span> <span
  m="2734520">have</span> <span m="2734740">x.</span> <span
  m="2735830">And</span> <span m="2736200">then</span> <span
  m="2736410">we're</span> <span m="2736510">going</span> <span
  m="2736630">to</span> <span m="2736670">get</span> <span m="2736790">a</span>
  <span m="2736830">new</span> <span m="2737030">problem,</span> <span
  m="2738260">let's</span> <span m="2738440">call</span> <span
  m="2738620">it</span> <span m="2738740">x0</span> <span
  m="2739250">first,</span> <span m="2739910">for</span> <span
  m="2740160">the</span> <span m="2740290">initial</span> <span
  m="2740640">problem.</span> <span m="2741540">You're</span> <span
  m="2741650">going</span> <span m="2741730">to</span> <span
  m="2741770">get</span> <span m="2741860">a</span> <span m="2741890">new</span>
  <span m="2742080">problem,</span> <span m="2742460">x1.</span> <span
  m="2743480">And</span> <span m="2743690">we're</span> <span
  m="2743810">maximally</span> <span m="2744410">shrinking</span> <span
  m="2747490">x1</span> <span m="2748110">in</span> <span
  m="2748270">relation</span> <span m="2748640">to</span> <span
  m="2748820">x0,</span> <span m="2749850">in</span> <span
  m="2749920">the</span> <span m="2750070">sense</span> <span
  m="2750200">that</span> <span m="2750940">we're</span> <span
  m="2751050">going</span> <span m="2751220">to</span> <span
  m="2751740">remove</span> <span m="2752320">as</span> <span
  m="2752560">many</span> <span m="2752770">elements</span> <span
  m="2753120">as</span> <span m="2753230">we</span> <span
  m="2753350">can.</span> <span m="2754030">Because</span> <span
  m="2754120">that</span> <span m="2754260">is</span> <span
  m="2754390">precisely</span> <span m="2755490">our</span> <span
  m="2755690">heuristic.</span></p><p><span m="2756740">So</span> <span
  m="2756960">the</span> <span m="2757060">big</span> <span
  m="2757220">question</span> <span m="2757580">is,</span> <span
  m="2758210">as</span> <span m="2758530">we</span> <span m="2758690">go</span>
  <span m="2759410">from</span> <span m="2760620">the</span> <span
  m="2760780">biggest</span> <span m="2761630">problem</span> <span
  m="2761930">that</span> <span m="2762050">we</span> <span
  m="2762150">have,</span> <span m="2762450">the</span> <span
  m="2762530">original</span> <span m="2762860">problem</span> <span
  m="2763280">to</span> <span m="2763410">smaller</span> <span
  m="2763770">and</span> <span m="2763860">smaller</span> <span
  m="2764150">problems,</span> <span m="2765090">when do we</span> <span
  m="2765500">end</span> <span m="2765680">up</span> <span
  m="2765820">with</span> <span m="2765930">nothing?</span> <span
  m="2767020">When</span> <span m="2767150">we</span> <span
  m="2767240">end</span> <span m="2767420">up</span> <span
  m="2767540">with</span> <span m="2767670">nothing,</span> <span
  m="2768580">that's</span> <span m="2768880">when</span> <span
  m="2769610">the</span> <span m="2769710">number</span> <span
  m="2769950">of</span> <span m="2770040">iterations</span> <span
  m="2771300">that</span> <span m="2771570">corresponds</span> <span
  m="2772080">to</span> <span m="2772170">the</span> <span
  m="2772270">number</span> <span m="2772600">of</span> <span
  m="2773440">SI's</span> <span m="2773920">that</span> <span
  m="2774030">we</span> <span m="2774180">picked</span> <span
  m="2775030">is</span> <span m="2775250">going</span> <span
  m="2775450">to</span> <span m="2775520">be</span> <span m="2776440">the</span>
  <span m="2776780">collection</span> <span m="2777300">of</span> <span
  m="2778280">SI's</span> <span m="2778640">in</span> <span
  m="2778750">our</span> <span m="2778830">solution.</span> <span
  m="2779440">And</span> <span m="2779540">the</span> <span
  m="2779620">cardinality</span> <span m="2780200">of</span> <span
  m="2780300">that</span> <span m="2781000">is</span> <span
  m="2781390">our</span> <span m="2781560">cost,</span> <span
  m="2782640">right?</span> <span m="2783210">So</span> <span
  m="2783650">that's</span> <span m="2784260">all</span> <span
  m="2784400">pretty</span> <span m="2784580">straightforward,</span> <span
  m="2786210">hopefully.</span></p><p><span m="2787230">So</span> <span
  m="2787850">what</span> <span m="2788190">we</span> <span
  m="2788290">need</span> <span m="2788430">to</span> <span
  m="2788490">do,</span> <span m="2788720">of</span> <span
  m="2788820">course,</span> <span m="2789200">is</span> <span
  m="2789400">show</span> <span m="2789710">a</span> <span
  m="2789790">proof.</span> <span m="2790980">And</span> <span
  m="2792090">the</span> <span m="2792200">way we're</span> <span
  m="2792410">going</span> <span m="2792510">to</span> <span
  m="2792560">do</span> <span m="2792680">this</span> <span
  m="2793030">is</span> <span m="2793530">by</span> <span m="2793720">a</span>
  <span m="2793790">fairly</span> <span m="2794070">straightforward</span> <span
  m="2794600">counting</span> <span m="2794990">argument.</span> <span
  m="2796560">Assume</span> <span m="2797070">there's</span> <span
  m="2797290">a</span> <span m="2797390">cover</span> <span
  m="2800410">Copt,</span> <span m="2802410">since</span> <span
  m="2802660">that</span> <span m="2802910">Copt</span> <span
  m="2804440">equals</span> <span m="2804890">t.</span> <span
  m="2806291">OK?</span> <span m="2806760">So</span> <span
  m="2807120">the</span> <span m="2807220">cardinality</span> <span
  m="2807670">of</span> <span m="2807740">Copt</span> <span
  m="2808300">equals</span> <span m="2808690">t.</span> <span m="2809010">So
  I'm</span> <span m="2809230">just assuming</span> <span
  m="2809710">that</span> <span m="2809890">this</span> <span
  m="2810130">t</span> <span m="2811420">subset's</span> <span
  m="2812500">in</span> <span m="2812620">my</span> <span
  m="2812760">optimum</span> <span m="2813680">cover,</span> <span
  m="2814730">OK?</span> <span m="2816570">t</span> <span
  m="2816780">subset's</span> <span m="2817130">in</span> <span m="2817280">my
  optimum</span> <span m="2817740">cover.</span></p><p><span
  m="2819190">Now</span> <span m="2819640">let</span> <span m="2820900">x</span>
  <span m="2821220">of</span> <span m="2821340">k</span> <span
  m="2823490">be</span> <span m="2823810">the</span> <span
  m="2823980">set</span> <span m="2824290">of</span> <span
  m="2824430">elements</span> <span m="2829400">in</span> <span
  m="2829670">iteration</span> <span m="2830270">k.</span> <span
  m="2833540">And</span> <span m="2833720">let's</span> <span
  m="2833870">assume</span> <span m="2834130">that</span> <span
  m="2834410">x0</span> <span m="2834820">equals</span> <span
  m="2835230">x.</span> <span m="2836070">So</span> <span
  m="2836610">initially,</span> <span m="2837500">I'm at</span> <span
  m="2837830">0.</span> <span m="2838870">And</span> <span m="2839200">I</span>
  <span m="2839240">want</span> <span m="2839390">to</span> <span
  m="2839430">subscript</span> <span m="2839940">this</span> <span
  m="2840210">because</span> <span m="2840520">I</span> <span
  m="2840610">want</span> <span m="2840870">to</span> <span
  m="2841650">point</span> <span m="2842125">to</span> <span
  m="2843190">each</span> <span m="2843490">of</span> <span
  m="2843620">the</span> <span m="2844250">problems</span> <span
  m="2845090">that</span> <span m="2845830">I'm</span> <span
  m="2845990">going</span> <span m="2846190">to</span> <span
  m="2846270">have</span> <span m="2846800">as</span> <span m="2847200">I</span>
  <span m="2847480">shrink</span> <span m="2848670">this</span> <span
  m="2849620">set</span> <span m="2850810">down</span> <span
  m="2851120">to</span> <span m="2851220">nothing.</span></p><p><span
  m="2853730">Now</span> <span m="2854000">I</span> <span
  m="2854140">know</span> <span m="2854420">that</span> <span
  m="2854650">for</span> <span m="2854810">all</span> <span
  m="2855180">k,</span> <span m="2856320">including</span> <span
  m="2856750">of</span> <span m="2856860">course</span> <span
  m="2858540">x0,</span> <span m="2859970">xk</span> <span
  m="2861200">can</span> <span m="2861550">be</span> <span
  m="2861690">covered</span> <span m="2864100">by</span> <span
  m="2864640">t</span> <span m="2864960">sets.</span> <span
  m="2866610">OK?</span> <span m="2867360">I</span> <span
  m="2867440">mean,</span> <span m="2867540">that's</span> <span
  m="2868760">kind</span> <span m="2868930">of</span> <span m="2868990">a</span>
  <span m="2869050">vacuous</span> <span m="2869530">statement</span> <span
  m="2870480">because</span> <span m="2870830">I</span> <span
  m="2871420">assumed</span> <span m="2871850">that</span> <span
  m="2872040">x0</span> <span m="2872630">could</span> <span
  m="2872750">be</span> <span m="2872870">covered</span> <span
  m="2873170">by</span> <span m="2873300">t</span> <span
  m="2873550">sets.</span> <span m="2874350">And</span> <span
  m="2874550">x0</span> <span m="2875020">is</span> <span
  m="2875140">only</span> <span m="2875310">shrinking</span> <span
  m="2875910">to</span> <span m="2876250">x1,</span> <span m="2876530">to</span>
  <span m="2876620">x2,</span> <span m="2877010">et</span> <span
  m="2877130">cetera.</span> <span m="2877920">And</span> <span
  m="2878100">I'm</span> <span m="2878170">just</span> <span
  m="2878310">saying,</span> <span m="2879070">all</span> <span
  m="2879270">of</span> <span m="2879350">these</span> <span
  m="2879530">things</span> <span m="2879950">could</span> <span
  m="2880080">be</span> <span m="2880200">covered--</span> <span
  m="2881340">each</span> <span m="2881530">of</span> <span
  m="2881620">those</span> <span m="2882120">intermediate</span> <span
  m="2882640">problems</span> <span m="2883060">as</span> <span
  m="2883180">well,</span> <span m="2883390">can</span> <span
  m="2883510">be</span> <span m="2883610">covered--</span> <span
  m="2883910">by</span> <span m="2884050">t.</span> <span m="2884540">In</span>
  <span m="2884660">fact,</span> <span m="2885290">in</span> <span
  m="2885520">the</span> <span m="2885730">solution</span> <span
  m="2886130">that</span> <span m="2886250">we</span> <span
  m="2886360">have,</span> <span m="2887100">the</span> <span
  m="2887240">optimal</span> <span m="2887720">solution,</span> <span
  m="2889390">if</span> <span m="2890120">these</span> <span
  m="2891020">x0's</span> <span m="2891560">are</span> <span
  m="2891670">coming</span> <span m="2891950">from</span> <span
  m="2892120">my</span> <span m="2892230">heuristic.</span> <span
  m="2893210">But</span> <span m="2893320">if they</span> <span
  m="2893400">were</span> <span m="2893450">coming</span> <span
  m="2893690">from</span> <span m="2893820">an</span> <span
  m="2893910">optimum</span> <span m="2894310">solution,</span> <span
  m="2895620">then</span> <span m="2896540">x0</span> <span m="2897340">would
  be</span> <span m="2897550">covered</span> <span m="2897810">by</span> <span
  m="2897970">t.</span> <span m="2898936">x1</span> <span
  m="2899420">would</span> <span m="2899550">be</span> <span
  m="2899680">covered</span> <span m="2899980">by</span> <span
  m="2900110">t</span> <span m="2900310">minus</span> <span
  m="2900610">1.</span> <span m="2901840">And</span> <span m="2902120">t</span>
  <span m="2902240">minus</span> <span m="2902540">2,</span> <span
  m="2902760">and</span> <span m="2902870">so</span> <span m="2902970">on</span>
  <span m="2903090">and</span> <span m="2903180">so</span> <span
  m="2903330">forth.</span></p><p><span m="2903990">But</span> <span
  m="2904810">I</span> <span m="2905080">don't</span> <span
  m="2905340">have</span> <span m="2905610">an</span> <span
  m="2905700">optimum</span> <span m="2906080">algorithm</span> <span
  m="2906490">here.</span> <span m="2907180">I</span> <span
  m="2907300">just</span> <span m="2907510">have</span> <span
  m="2907700">my</span> <span m="2907850">heuristic</span> <span
  m="2908310">algorithm.</span> <span m="2909050">And</span> <span
  m="2909190">I'm</span> <span m="2909260">just</span> <span
  m="2909420">making</span> <span m="2909790">a</span> <span
  m="2909860">fairly</span> <span m="2910180">vacuous</span> <span
  m="2910610">statement,</span> <span m="2910950">as</span> <span
  m="2911070">I</span> <span m="2911140">said,</span> <span
  m="2911890">based</span> <span m="2912130">on</span> <span
  m="2912210">my</span> <span m="2912330">definition,</span> <span
  m="2913290">that</span> <span m="2913720">the</span> <span
  m="2913800">original</span> <span m="2914240">problem</span> <span
  m="2914960">can</span> <span m="2915090">be</span> <span
  m="2915190">covered</span> <span m="2915500">using</span> <span
  m="2915830">t.</span> <span m="2916420">And</span> <span
  m="2916570">therefore,</span> <span m="2916970">a</span> <span
  m="2917030">smaller</span> <span m="2917410">problem,</span> <span
  m="2918110">when</span> <span m="2918240">I</span> <span
  m="2918360">remove</span> <span m="2918670">elements</span> <span
  m="2919050">from</span> <span m="2919260">it,</span> <span
  m="2919580">could</span> <span m="2919700">also</span> <span
  m="2919940">be</span> <span m="2920060">covered</span> <span
  m="2920340">using</span> <span m="2920630">t.</span> <span
  m="2921460">OK?</span> <span m="2922520">So</span> <span
  m="2922920">far,</span> <span m="2923060">so</span> <span
  m="2923180">good?</span></p><p><span m="2925640">So</span> <span
  m="2925850">now,</span> <span m="2930420">one</span> <span
  m="2930810">of</span> <span m="2930910">them</span> <span
  m="2934550">covers</span> <span m="2936290">what?</span> <span
  m="2937680">What</span> <span m="2937840">can</span> <span
  m="2937950">I</span> <span m="2938000">say</span> <span
  m="2938230">about</span> <span m="2938440">one</span> <span
  m="2938660">of</span> <span m="2938780">them?</span> <span
  m="2939720">What</span> <span m="2939920">principle</span> <span
  m="2940500">can</span> <span m="2940620">I</span> <span m="2940680">use</span>
  <span m="2941750">to</span> <span m="2942290">make</span> <span
  m="2942590">a</span> <span m="2942680">claim</span> <span
  m="2943580">about</span> <span m="2944350">the</span> <span
  m="2944490">number</span> <span m="2944750">of</span> <span
  m="2944910">elements</span> <span m="2945960">that</span> <span
  m="2946080">are</span> <span m="2946190">covered</span> <span
  m="2946680">by</span> <span m="2948770">one</span> <span m="2949050">of</span>
  <span m="2949150">these</span> <span m="2949670">t</span> <span
  m="2949870">sets?</span> <span m="2953540">Remember</span> <span
  m="2955320">a</span> <span m="2955430">principle</span> <span
  m="2955910">from</span> <span m="2956070">way</span> <span
  m="2956210">back?</span> <span m="2958010">6042?</span> <span
  m="2959700">My</span> <span m="2959820">favorite</span> <span
  m="2960230">principle?</span> <span m="2961160">Flapping.</span> <span
  m="2961650">Think</span> <span m="2962040">flapping.</span> <span
  m="2963920">Pigeon</span> <span m="2964220">hole.</span> <span
  m="2965160">Pigeon hole</span> <span m="2965560">principle,</span> <span
  m="2966720">right?</span> <span m="2967440">See,</span> <span
  m="2967650">you</span> <span m="2967790">have</span> <span
  m="2967940">to</span> <span m="2968080">remember</span> <span
  m="2968830">all</span> <span m="2969090">of</span> <span
  m="2969650">the</span> <span m="2969880">material</span> <span
  m="2970600">that</span> <span m="2970820">you</span> <span
  m="2970950">learned</span> <span m="2971220">at</span> <span
  m="2971270">MIT</span> <span m="2971850">for</span> <span
  m="2971970">the</span> <span m="2972060">rest</span> <span
  m="2972290">of</span> <span m="2972370">your</span> <span
  m="2972460">life.</span> <span m="2973420">OK?</span> <span
  m="2974270">You</span> <span m="2974400">never</span> <span
  m="2974880">know</span> <span m="2975380">when</span> <span
  m="2975550">it's</span> <span m="2975650">going</span> <span
  m="2975770">to</span> <span m="2975820">be</span> <span
  m="2975900">useful.</span></p><p><span m="2977160">OK,</span> <span
  m="2977610">so</span> <span m="2977930">here you</span> <span
  m="2978200">go,</span> <span m="2978390">pigeon</span> <span
  m="2978740">hole.</span> <span m="2979090">My</span> <span
  m="2979280">favorite</span> <span m="2979680">principle.</span> <span
  m="2982750">It's</span> <span m="2983340">such</span> <span
  m="2983640">a</span> <span m="2983720">trivial</span> <span
  m="2984120">principle.</span> <span m="2986110">So</span> <span
  m="2986280">one</span> <span m="2986460">of</span> <span
  m="2986530">them</span> <span m="2986700">covers</span> <span
  m="2988450">at</span> <span m="2988670">least</span> <span
  m="2990930">xk</span> <span m="2991810">divided</span> <span
  m="2992130">by</span> <span m="2992320">t.</span> <span m="2993390">I
  mean,</span> <span m="2993480">why</span> <span m="2993680">is</span> <span
  m="2993790">this</span> <span m="2993920">even</span> <span
  m="2994130">a</span> <span m="2994190">principle?</span> <span
  m="2994910">Right?</span> <span m="2996970">Elements.</span> <span
  m="2999990">OK,</span> <span m="3001500">so</span> <span
  m="3001650">that's</span> <span m="3001850">it,</span> <span
  m="3002370">right?</span> <span m="3002810">That's</span> <span
  m="3003220">the</span> <span m="3003370">observation.</span> <span
  m="3005730">And,</span> <span m="3008310">now</span> <span
  m="3008520">that</span> <span m="3008690">implies</span> <span
  m="3010610">that</span> <span m="3010810">an</span> <span
  m="3010960">algorithm--</span> <span m="3011690">because</span> <span
  m="3011960">it's</span> <span m="3012100">going</span> <span
  m="3012230">to</span> <span m="3012300">pick</span> <span
  m="3012540">the</span> <span m="3012610">maximum</span> <span
  m="3013290">of</span> <span m="3013410">these,</span> <span
  m="3013890">right?</span> <span m="3014480">The</span> <span
  m="3014600">algorithm</span> <span m="3014960">is</span> <span
  m="3015050">going</span> <span m="3015150">to</span> <span
  m="3015210">pick</span> <span m="3015380">the</span> <span
  m="3015450">maximum</span> <span m="3015930">of</span> <span
  m="3016050">these.</span> <span m="3017020">So,</span> <span
  m="3018870">it's</span> <span m="3019080">going</span> <span
  m="3019210">to</span> <span m="3019270">pick</span> <span m="3020940">a
  set</span> <span m="3022960">of</span> <span m="3023370">current</span> <span
  m="3023680">size</span> <span m="3028320">greater</span> <span
  m="3028570">than</span> <span m="3028720">or</span> <span
  m="3028810">equal</span> <span m="3029120">to</span> <span
  m="3029750">xk</span> <span m="3031080">divided</span> <span
  m="3031380">by</span> <span m="3031500">t.</span> <span
  m="3032770">Otherwise,</span> <span m="3033130">the algorithm</span> <span
  m="3033230">would</span> <span m="3033540">be</span> <span
  m="3033650">incorrect.</span> <span m="3034180">It's</span> <span
  m="3034310">not</span> <span m="3034480">doing</span> <span
  m="3034730">what</span> <span m="3034880">you</span> <span
  m="3035000">told</span> <span m="3035270">it</span> <span
  m="3035380">to</span> <span m="3035500">do.</span> <span
  m="3036490">Right?</span> <span m="3037490">It's</span> <span
  m="3037820">got</span> <span m="3037960">to</span> <span
  m="3037990">pick</span> <span m="3038150">the</span> <span
  m="3038210">maximum.</span></p><p><span m="3039300">So</span> <span
  m="3040160">keep</span> <span m="3040300">chugging</span> <span
  m="3040660">here.</span> <span m="3042650">And</span> <span
  m="3043390">one</span> <span m="3043670">real</span> <span
  m="3047090">observation,</span> <span m="3047920">and</span> <span
  m="3048110">then</span> <span m="3048220">the</span> <span
  m="3048290">rest</span> <span m="3048480">of</span> <span
  m="3048550">it</span> <span m="3048620">is</span> <span
  m="3048770">algebra.</span> <span m="3056060">So,</span> <span
  m="3056650">what</span> <span m="3056830">I</span> <span
  m="3056880">can</span> <span m="3057020">say</span> <span
  m="3057250">is</span> <span m="3057560">that</span> <span
  m="3058200">for</span> <span m="3058440">all</span> <span
  m="3058901">k,</span> <span m="3060745">xk</span> <span
  m="3061210">plus</span> <span m="3061480">1,</span> <span
  m="3062360">which</span> <span m="3062580">is</span> <span
  m="3062650">shrinking,</span> <span m="3064010">is</span> <span
  m="3064230">less</span> <span m="3064460">than</span> <span
  m="3064610">or</span> <span m="3064690">equal</span> <span
  m="3065000">to</span> <span m="3065140">1</span> <span
  m="3065570">minus</span> <span m="3066270">1</span> <span
  m="3066530">over</span> <span m="3066770">t,</span> <span
  m="3068088">xk.</span> <span m="3070600">OK?</span> <span
  m="3071190">That's</span> <span m="3071790">the</span> <span
  m="3071900">way</span> <span m="3072090">I'm</span> <span
  m="3072180">shrinking.</span> <span m="3073260">Right?</span> <span
  m="3073720">This</span> <span m="3073940">is</span> <span
  m="3074080">again,</span> <span m="3075220">a</span> <span
  m="3075330">fairly</span> <span m="3075820">conservative</span> <span
  m="3076520">statement.</span> <span m="3078290">Because</span> <span
  m="3078700">the fact of</span> <span m="3079120">the</span> <span
  m="3079220">matter</span> <span m="3079510">is</span> <span
  m="3079680">that</span> <span m="3080210">I'm</span> <span
  m="3080390">putting</span> <span m="3080720">t</span> <span
  m="3081050">in</span> <span m="3081310">as</span> <span m="3081420">a</span>
  <span m="3081520">constant</span> <span m="3082100">here,</span> <span
  m="3083140">right?</span> <span m="3083650">But</span> <span m="3083860">t
  is</span> <span m="3084140">actually,</span> <span m="3084860">in</span> <span
  m="3085020">effect,</span> <span m="3085310">changing,</span> <span
  m="3086070">obviously,</span> <span m="3086430">halfway</span> <span
  m="3086800">through</span> <span m="3086930">the</span> <span
  m="3087020">algorithm.</span> <span m="3088020">I</span> <span
  m="3088230">don't</span> <span m="3088390">need</span> <span
  m="3089150">t</span> <span m="3089990">sets</span> <span m="3090570">to</span>
  <span m="3090700">cover</span> <span m="3091010">the</span> <span
  m="3091200">x--</span> <span m="3092540">whatever</span> <span
  m="3092750">it</span> <span m="3092820">is--</span> <span
  m="3092960">xk</span> <span m="3093330">over</span> <span m="3093500">2</span>
  <span m="3093790">or</span> <span m="3093850">whatever</span> <span
  m="3094100">it</span> <span m="3094160">is</span> <span
  m="3094310">that</span> <span m="3094430">I</span> <span
  m="3094796">have.</span> <span m="3095162">I</span> <span
  m="3095530">need</span> <span m="3095730">the</span> <span m="3095820">t
  for</span> <span m="3096190">x0.</span></p><p><span m="3097090">Maybe</span>
  <span m="3098310">I</span> <span m="3098540">did</span> <span m="3098880">a
  bad</span> <span m="3099280">selection</span> <span m="3099690">with</span>
  <span m="3099800">my</span> <span m="3099920">heuristic,</span> <span
  m="3100380">and</span> <span m="3100460">I</span> <span
  m="3100510">still</span> <span m="3102370">would</span> <span
  m="3102550">need</span> <span m="3102800">t,</span> <span
  m="3103200">which</span> <span m="3103360">is</span> <span
  m="3103440">optimum,</span> <span m="3103860">remember,</span> <span
  m="3104440">for</span> <span m="3104720">x1.</span> <span
  m="3105580">But</span> <span m="3105730">halfway</span> <span
  m="3106070">through</span> <span m="3106170">the algorithm</span> <span
  m="3106680">after I</span> <span m="3106970">picked</span> <span
  m="3107190">a</span> <span m="3107230">bunch</span> <span
  m="3107450">of</span> <span m="3107510">sets,</span> <span
  m="3108270">I'm</span> <span m="3108420">still</span> <span
  m="3108760">saying</span> <span m="3109400">I</span> <span
  m="3109500">need</span> <span m="3109740">t,</span> <span
  m="3110640">OK?</span> <span m="3111090">Because</span> <span
  m="3111310">I</span> <span m="3111410">just</span> <span
  m="3111660">need</span> <span m="3111830">that</span> <span
  m="3111990">for</span> <span m="3112080">my</span> <span
  m="3112240">proof.</span> <span m="3113390">That's</span> <span
  m="3113590">all</span> <span m="3113730">I</span> <span
  m="3113790">need</span> <span m="3113980">for</span> <span
  m="3114060">the</span> <span m="3114160">proof.</span> <span
  m="3114470">In</span> <span m="3114630">CLRS,</span> <span
  m="3115760">this</span> <span m="3116000">actually</span> <span
  m="3116300">varies</span> <span m="3117120">and</span> <span
  m="3117330">it</span> <span m="3117430">turns</span> <span
  m="3117640">into</span> <span m="3117770">a</span> <span
  m="3117810">harmonic</span> <span m="3118300">series.</span> <span
  m="3119380">We</span> <span m="3119480">won't</span> <span
  m="3119550">go</span> <span m="3119680">there.</span> <span
  m="3120640">OK?</span> <span m="3121230">You</span> <span
  m="3121400">can</span> <span m="3121650">do</span> <span
  m="3121770">the</span> <span m="3123610">natural</span> <span
  m="3124090">logarithm</span> <span m="3124630">of</span> <span
  m="3124900">n</span> <span m="3125150">plus</span> <span m="3125380">1,</span>
  <span m="3126100">a</span> <span m="3126395">proof,</span> <span
  m="3126690">just</span> <span m="3126920">doing</span> <span
  m="3127120">the</span> <span m="3127520">simpler</span> <span
  m="3127930">analysis.</span> <span m="3129070">OK?</span></p><p><span
  m="3130220">So</span> <span m="3130550">you</span> <span
  m="3130700">see</span> <span m="3130830">what's</span> <span
  m="3130950">happening</span> <span m="3131230">here.</span> <span
  m="3132110">That's</span> <span m="3132360">my</span> <span
  m="3133470">shrinkage.</span> <span m="3134280">That's</span> <span
  m="3134620">the</span> <span m="3136280">recurrence,</span> <span
  m="3136830">if</span> <span m="3136930">you</span> <span
  m="3137040">will,</span> <span m="3137610">that</span> <span
  m="3137770">tells</span> <span m="3138050">me</span> <span
  m="3138260">how</span> <span m="3138740">my</span> <span
  m="3138980">problem</span> <span m="3139340">size</span> <span
  m="3139730">is</span> <span m="3139870">shrinking.</span> <span
  m="3140970">And</span> <span m="3141420">when</span> <span
  m="3141650">do</span> <span m="3141770">I</span> <span m="3141920">end?</span>
  <span m="3143160">What</span> <span m="3143330">is</span> <span
  m="3143410">my</span> <span m="3143560">stopping</span> <span
  m="3143990">point?</span> <span m="3147400">What's</span> <span
  m="3147590">my</span> <span m="3147700">stopping</span> <span
  m="3148020">point?</span> <span m="3149242">Mathematically?</span> <span
  m="3155650">When</span> <span m="3155800">do we</span> <span
  m="3156010">end</span> <span m="3156240">this</span> <span
  m="3156390">lecture?</span> <span m="3158720">When</span> <span
  m="3158900">you</span> <span m="3158990">give</span> <span
  m="3159080">me</span> <span m="3159180">the</span> <span
  m="3159260">answer.</span> <span m="3160440">No,</span> <span
  m="3160780">not</span> <span m="3161060">quite.</span> <span
  m="3161850">So</span> <span m="3162030">I</span> <span m="3162180">end</span>
  <span m="3162490">when?</span> <span m="3162860">I</span> <span
  m="3162940">got</span> <span m="3163080">nothing</span> <span
  m="3163360">to</span> <span m="3163430">cover,</span> <span
  m="3163940">right?</span> <span m="3164540">So</span> <span
  m="3164830">when</span> <span m="3165000">one</span> <span
  m="3165140">of</span> <span m="3165210">these</span> <span
  m="3165390">things</span> <span m="3170380">gets</span> <span
  m="3170630">down</span> <span m="3170960">to</span> <span
  m="3173220">xk</span> <span m="3174820">equals</span> <span
  m="3175270">0,</span> <span m="3176610">right?</span> <span
  m="3176990">When</span> <span m="3177160">xk</span> <span
  m="3177540">equals</span> <span m="3177810">0,</span> <span
  m="3178470">I'm</span> <span m="3178630">done.</span></p><p><span
  m="3183310">I'm</span> <span m="3183450">constantly</span> <span
  m="3183910">taking</span> <span m="3184160">stuff</span> <span
  m="3184410">away.</span> <span m="3185140">When</span> <span
  m="3185260">xk</span> <span m="3185430">equals</span> <span
  m="3185890">0,</span> <span m="3186440">I'm</span> <span
  m="3186580">going</span> <span m="3186690">to</span> <span
  m="3186730">be</span> <span m="3186820">done.</span> <span
  m="3187670">OK?</span> <span m="3188490">And</span> <span
  m="3190670">I'm</span> <span m="3190780">going</span> <span
  m="3190910">to</span> <span m="3190970">move</span> <span m="3191280">a</span>
  <span m="3191310">little</span> <span m="3191480">bit</span> <span
  m="3191650">between</span> <span m="3191910">discrete</span> <span
  m="3192340">and</span> <span m="3192450">continuous</span> <span
  m="3192960">here.</span> <span m="3193670">It's</span> <span
  m="3194110">all</span> <span m="3194330">going to be</span> <span
  m="3194470">fine.</span> <span m="3195370">But</span> <span
  m="3195670">what</span> <span m="3197030">I</span> <span
  m="3197330">have</span> <span m="3197560">is,</span> <span
  m="3198130">if</span> <span m="3198290">I</span> <span m="3198330">just</span>
  <span m="3198510">take</span> <span m="3198720">that,</span> <span
  m="3199980">I</span> <span m="3200060">can</span> <span
  m="3200350">turn</span> <span m="3200600">this.</span> <span m="3201090">This
  is</span> <span m="3201220">a</span> <span m="3201420">recurrence.</span>
  <span m="3202470">I want to</span> <span m="3202680">turn</span> <span
  m="3202960">that</span> <span m="3203040">into</span> <span
  m="3203210">a</span> <span m="3204260">series.</span></p><p><span
  m="3205470">So</span> <span m="3205480">I</span> <span m="3205560">can</span>
  <span m="3205700">say</span> <span m="3205820">something</span> <span
  m="3206130">like</span> <span m="3206830">1</span> <span
  m="3207060">minus</span> <span m="3207390">1</span> <span
  m="3207590">over</span> <span m="3207810">t,</span> <span
  m="3209240">raised</span> <span m="3209490">to</span> <span
  m="3209600">k,</span> <span m="3210490">times</span> <span
  m="3211000">n.</span> <span m="3212060">And</span> <span
  m="3212260">this</span> <span m="3212440">is</span> <span
  m="3213040">the</span> <span m="3213140">cardinality</span> <span
  m="3213690">of</span> <span m="3213840">x,</span> <span m="3214150">which
  is</span> <span m="3214400">the</span> <span m="3214480">cardinality</span>
  <span m="3215010">of</span> <span m="3215170">x0.</span> <span
  m="3216930">So</span> <span m="3217070">that's</span> <span
  m="3217210">what</span> <span m="3217350">I</span> <span
  m="3217390">have</span> <span m="3217560">up</span> <span
  m="3217680">there.</span> <span m="3218660">And</span> <span
  m="3218810">that's</span> <span m="3218980">essentially</span> <span
  m="3219290">what</span> <span m="3219380">happens.</span> <span
  m="3219860">I</span> <span m="3219990">constantly</span> <span
  m="3220530">shrink</span> <span m="3221040">as</span> <span
  m="3221220">I</span> <span m="3221270">go</span> <span
  m="3221400">along.</span> <span m="3221790">And I</span> <span
  m="3222210">have a</span> <span m="3222280">constant</span> <span
  m="3222690">rate</span> <span m="3222900">of</span> <span
  m="3222970">shrinkage</span> <span m="3223390">here.</span> <span
  m="3224330">Which</span> <span m="3224620">is</span> <span
  m="3224830">the</span> <span m="3224910">conservative</span> <span
  m="3225350">part</span> <span m="3225570">of</span> <span
  m="3225670">it.</span> <span m="3225910">So</span> <span
  m="3226070">keep</span> <span m="3226250">that</span> <span
  m="3226380">in</span> <span m="3226470">mind.</span> <span
  m="3226790">But</span> <span m="3227480">it</span> <span
  m="3227520">doesn't</span> <span m="3227740">matter</span> <span
  m="3227990">from</span> <span m="3228130">an analysis</span> <span
  m="3228600">standpoint.</span> <span m="3229920">OK?</span></p><p><span
  m="3230570">So</span> <span m="3230790">if</span> <span m="3230890">you</span>
  <span m="3231110">look</span> <span m="3231270">at</span> <span
  m="3231340">that,</span> <span m="3231860">and</span> <span
  m="3231990">you</span> <span m="3232080">say,</span> <span
  m="3232230">what</span> <span m="3232350">happens</span> <span
  m="3232630">here?</span> <span m="3233000">Well,</span> <span
  m="3233040">I</span> <span m="3233110">can</span> <span
  m="3233240">just</span> <span m="3233380">say</span> <span
  m="3233550">that</span> <span m="3233720">this</span> <span
  m="3233860">is</span> <span m="3234000">less</span> <span
  m="3234190">than</span> <span m="3234330">or</span> <span
  m="3234420">equal</span> <span m="3234700">to</span> <span
  m="3235530">e</span> <span m="3236070">raised</span> <span
  m="3236380">to</span> <span m="3236460">minus--</span> <span
  m="3236890">you</span> <span m="3237320">knew</span> <span m="3237480">you
  were going to</span> <span m="3237520">get</span> <span m="3237650">an</span>
  <span m="3237780">e,</span> <span m="3238140">because</span> <span
  m="3238370">you</span> <span m="3238480">saw</span> <span m="3239060">a</span>
  <span m="3239220">natural</span> <span m="3239620">algorithm</span> <span
  m="3240070">here,</span> <span m="3240950">right?</span> <span
  m="3242370">And</span> <span m="3242620">so,</span> <span
  m="3243950">that's</span> <span m="3244140">what</span> <span
  m="3244260">we</span> <span m="3244360">got.</span></p><p>&nbsp;</p><p><span
  m="3246380">And</span> <span m="3248020">basically,</span> <span
  m="3248830">that's</span> <span m="3249060">it.</span> <span
  m="3250090">You</span> <span m="3250860">can</span> <span
  m="3250930">do</span> <span m="3251030">a</span> <span
  m="3251080">little</span> <span m="3251220">bit</span> <span
  m="3251330">of</span> <span m="3251410">algebra.</span> <span
  m="3252150">I'll</span> <span m="3252270">just</span> <span
  m="3252430">write</span> <span m="3252610">this</span> <span
  m="3252750">out</span> <span m="3252950">for</span> <span
  m="3253130">you.</span> <span m="3253930">But</span> <span
  m="3254170">I</span> <span m="3254240">won't</span> <span
  m="3254400">really</span> <span m="3254540">explain</span> <span
  m="3254940">it.</span> <span m="3256740">You're</span> <span
  m="3257360">going</span> <span m="3257630">to</span> <span
  m="3257700">have</span> <span m="3258380">Xk</span> <span
  m="3258930">equals</span> <span m="3259200">0.</span> <span
  m="3259460">You're</span> <span m="3259650">done.</span> <span
  m="3260530">The</span> <span m="3260620">cost,</span> <span
  m="3261160">of</span> <span m="3261280">course,</span> <span
  m="3261570">is</span> <span m="3261740">k.</span> <span
  m="3262770">Right?</span> <span m="3263070">The</span> <span
  m="3263160">cost</span> <span m="3263510">is</span> <span
  m="3263660">k,</span> <span m="3264010">because</span> <span
  m="3264270">you've</span> <span m="3264610">selected</span> <span
  m="3265700">k</span> <span m="3266660">subsets.</span> <span m="3267410">All
  right,</span> <span m="3267670">so</span> <span m="3267930">that's</span>
  <span m="3268240">your</span> <span m="3268400">cost,</span> <span
  m="3269010">all right?</span> <span m="3269470">So,</span> <span
  m="3269980">when</span> <span m="3270140">you</span> <span
  m="3270220">get</span> <span m="3270370">to</span> <span
  m="3270470">the</span> <span m="3270550">point,</span> <span
  m="3270810">you're</span> <span m="3270950">done.</span> <span
  m="3271360">And</span> <span m="3271490">the</span> <span
  m="3271560">cost</span> <span m="3271840">is</span> <span
  m="3271940">k.</span> <span m="3272760">So</span> <span
  m="3273030">what</span> <span m="3273220">you</span> <span
  m="3273310">need</span> <span m="3273620">is,</span> <span
  m="3275240">you</span> <span m="3275360">need</span> <span
  m="3275550">to</span> <span m="3275610">say</span> <span
  m="3275850">that</span> <span m="3276870">e</span> <span
  m="3277090">raised</span> <span m="3277300">to</span> <span
  m="3277370">minus</span> <span m="3277670">kt</span> <span
  m="3278600">divided</span> <span m="3278910">by</span> <span
  m="3279070">n</span> <span m="3279450">is</span> <span
  m="3279590">strictly</span> <span m="3280120">less</span> <span
  m="3280380">than</span> <span m="3280520">1.</span> <span
  m="3281930">Because</span> <span m="3282180">that</span> <span
  m="3282310">is</span> <span m="3282400">effectively</span> <span
  m="3284510">when</span> <span m="3285070">you</span> <span
  m="3285180">have</span> <span m="3285690">strictly</span> <span
  m="3286170">less</span> <span m="3286390">than</span> <span
  m="3286510">1</span> <span m="3286740">element.</span> <span
  m="3287150">It's</span> <span m="3287330">discrete.</span> <span
  m="3287800">So</span> <span m="3287890">that</span> <span
  m="3288020">means</span> <span m="3288170">you</span> <span
  m="3288260">have</span> <span m="3288380">zero</span> <span
  m="3288720">elements</span> <span m="3289090">left</span> <span
  m="3289310">to</span> <span m="3289400">cover.</span> <span
  m="3290030">That</span> <span m="3290160">means</span> <span
  m="3290310">you're</span> <span m="3290430">done</span> <span
  m="3291350">OK?</span></p><p><span m="3291980">So</span> <span
  m="3292970">that's</span> <span m="3293410">your</span> <span
  m="3293790">condition</span> <span m="3294740">for</span> <span
  m="3294940">stopping.</span> <span m="3295840">So</span> <span
  m="3295980">this</span> <span m="3296340">done</span> <span
  m="3297460">means</span> <span m="3297750">that</span> <span
  m="3297920">e</span> <span m="3298050">raised</span> <span
  m="3298220">to</span> <span m="3298280">minus</span> <span
  m="3298540">kt</span> <span m="3299390">times</span> <span
  m="3299860">n</span> <span m="3300580">is</span> <span
  m="3301180">strictly</span> <span m="3301530">less</span> <span
  m="3301720">than</span> <span m="3301850">1.</span> <span
  m="3302750">And</span> <span m="3303060">if</span> <span
  m="3303140">you</span> <span m="3303220">go</span> <span m="3303360">do</span>
  <span m="3303480">that,</span> <span m="3304460">you'll</span> <span
  m="3305360">get</span> <span m="3305730">k</span> <span
  m="3306050">over</span> <span m="3306340">t,</span> <span
  m="3309330">just</span> <span m="3309800">about</span> <span
  m="3310090">greater</span> <span m="3310330">than</span> <span
  m="3311000">natural</span> <span m="3311480">logarithm</span> <span
  m="3311960">of</span> <span m="3312090">m(n).</span> <span
  m="3313460">The</span> <span m="3313570">algorithm</span> <span
  m="3314970">terminates</span> <span m="3316670">if</span> <span
  m="3316800">we</span> <span m="3316890">just</span> <span
  m="3317340">do</span> <span m="3317450">a</span> <span
  m="3317510">little</span> <span m="3317870">manipulation.</span> <span
  m="3319210">And</span> <span m="3319360">that</span> <span
  m="3319510">implies</span> <span m="3320010">that</span> <span
  m="3321140">k</span> <span m="3321760">over</span> <span m="3321960">t</span>
  <span m="3323170">less</span> <span m="3323420">than</span> <span
  m="3323520">or</span> <span m="3323620">equal</span> <span
  m="3323900">to</span> <span m="3324020">natural</span> <span
  m="3324420">logarithm</span> <span m="3324900">of</span> <span
  m="3325030">n</span> <span m="3325660">plus</span> <span m="3326050">1</span>
  <span m="3328730">is</span> <span m="3329130">valid.</span> <span
  m="3330370">Right?</span></p><p><span m="3330740">k over</span> <span
  m="3330900">t</span> <span m="3331220">is</span> <span
  m="3332410">going</span> <span m="3332510">to</span> <span
  m="3332550">be</span> <span m="3332620">less</span> <span
  m="3332810">than</span> <span m="3332910">or</span> <span
  m="3332920">equal</span> <span m="3333130">to</span> <span
  m="3333290">natural</span> <span m="3333770">logarithm</span> <span
  m="3333990">of</span> <span m="3334100">n</span> <span m="3334380">plus</span>
  <span m="3334650">1.</span> <span m="3334990">Because</span> <span
  m="3335940">the</span> <span m="3336140">instant</span> <span
  m="3336500">it</span> <span m="3336600">becomes</span> <span
  m="3336900">greater,</span> <span m="3337530">the</span> <span
  m="3337810">algorithm</span> <span m="3338170">terminates.</span> <span
  m="3339330">Right?</span> <span m="3339620">And</span> <span
  m="3339750">that's</span> <span m="3339940">how</span> <span
  m="3340060">you</span> <span m="3340170">got</span> <span
  m="3340340">your</span> <span m="3340460">proof</span> <span
  m="3341450">over</span> <span m="3341600">here.</span> <span
  m="3341770">Because</span> <span m="3342270">this</span> <span
  m="3342470">is</span> <span m="3342510">exactly</span> <span
  m="3342830">what</span> <span m="3342960">we</span> <span
  m="3343050">want.</span> <span m="3343790">k is</span> <span
  m="3344220">our</span> <span m="3344570">C</span> <span
  m="3345400">from</span> <span m="3345640">way</span> <span
  m="3345770">back</span> <span m="3346380">where</span> <span
  m="3346620">it's</span> <span m="3346780">the</span> <span
  m="3346890">cost</span> <span m="3347340">of</span> <span
  m="3347520">our</span> <span m="3347620">heuristic</span> <span
  m="3348170">or</span> <span m="3348370">the</span> <span
  m="3348450">cost</span> <span m="3348790">of</span> <span
  m="3348890">our</span> <span m="3349020">approximation.</span> <span
  m="3350250">t</span> <span m="3350520">is</span> <span m="3350630">the</span>
  <span m="3350750">optimum</span> <span m="3351270">cost.</span> <span
  m="3352550">That's</span> <span m="3352760">what</span> <span
  m="3352900">I</span> <span m="3352960">defined</span> <span
  m="3353340">it</span> <span m="3353430">as.</span> <span
  m="3354040">And</span> <span m="3354260">this</span> <span
  m="3354370">is</span> <span m="3354500">a</span> <span
  m="3354560">bound</span> <span m="3355480">on</span> <span
  m="3355700">k</span> <span m="3355880">over</span> <span m="3356080">t.</span>
  <span m="3357250">All</span> <span m="3357320">right?</span> <span
  m="3358730">Cool.</span> <span m="3359790">Any</span> <span
  m="3359920">questions</span> <span m="3360270">on</span> <span
  m="3360370">this?</span></p><p><span m="3365270">OK.</span> <span
  m="3367000">So</span> <span m="3367250">this</span> <span
  m="3367460">approximation</span> <span m="3368010">ratio</span> <span
  m="3368390">gets</span> <span m="3368610">worse</span> <span
  m="3369290">for</span> <span m="3369510">larger</span> <span
  m="3369830">problems,</span> <span m="3370740">just</span> <span
  m="3370930">like</span> <span m="3371100">this</span> <span
  m="3371250">other</span> <span m="3372670">approximation's</span> <span
  m="3373990">algorithm</span> <span m="3374410">that</span> <span
  m="3374570">we</span> <span m="3374680">didn't</span> <span
  m="3374820">actually</span> <span m="3375100">prove</span> <span
  m="3375730">from</span> <span m="3375970">the</span> <span
  m="3376060">very</span> <span m="3376250">first</span> <span
  m="3376540">problem.</span> <span m="3377360">That</span> <span
  m="3377530">also</span> <span m="3377790">got</span> <span
  m="3377970">worse.</span> <span m="3380580">We</span> <span
  m="3380680">had</span> <span m="3380780">a</span> <span m="3380860">log</span>
  <span m="3381115">k</span> <span m="3381370">factor</span> <span
  m="3381770">for</span> <span m="3381880">that.</span> <span
  m="3382520">And</span> <span m="3383050">as</span> <span
  m="3383360">your</span> <span m="3383570">problem</span> <span
  m="3383850">size</span> <span m="3384100">increased,</span> <span
  m="3384670">obviously</span> <span m="3385040">the</span> <span
  m="3385300">approximation</span> <span m="3385820">factor</span> <span
  m="3386120">increased.</span> <span m="3386970">This</span> <span
  m="3387120">is</span> <span m="3387190">a</span> <span
  m="3387280">little</span> <span m="3387460">clearer</span> <span
  m="3388600">as</span> <span m="3390190">to</span> <span
  m="3390280">what</span> <span m="3390430">the</span> <span
  m="3390520">increase</span> <span m="3390980">looks</span> <span
  m="3391250">like</span> <span m="3391820">in</span> <span
  m="3392010">relation</span> <span m="3392550">to</span> <span
  m="3393210">the</span> <span m="3393280">original</span> <span
  m="3393700">size</span> <span m="3394380">of</span> <span
  m="3394480">n.</span> <span m="3395650">So</span> <span m="3395810">it's
  just</span> <span m="3396140">natural</span> <span
  m="3396415">logarithm</span> <span m="3396760">of</span> <span
  m="3396980">n</span> <span m="3397660">plus</span> <span
  m="3397860">1.</span></p><p><span m="3399610">So,</span> <span
  m="3399760">so</span> <span m="3399960">far,</span> <span
  m="3400660">we've</span> <span m="3400860">done</span> <span
  m="3401050">approximation</span> <span m="3401550">algorithms,</span> <span
  m="3402280">a couple</span> <span m="3402500">of</span> <span
  m="3402560">different</span> <span m="3402770">varieties.</span> <span
  m="3403650">We</span> <span m="3403770">had</span> <span m="3403850">a</span>
  <span m="3403890">constant</span> <span m="3404270">factor</span> <span
  m="3404620">one,</span> <span m="3405330">and</span> <span
  m="3405460">then</span> <span m="3405560">we</span> <span
  m="3405660">had</span> <span m="3406700">a</span> <span m="3406810">row</span>
  <span m="3407170">of n</span> <span m="3407480">that</span> <span
  m="3407600">actually</span> <span m="3407920">had</span> <span
  m="3408290">a</span> <span m="3408410">dependence</span> <span
  m="3408990">on</span> <span m="3409170">n.</span> <span m="3410450">Now</span>
  <span m="3410610">let's</span> <span m="3410880">move,</span> <span
  m="3411120">and</span> <span m="3411200">we'll</span> <span
  m="3411300">do</span> <span m="3411420">one</span> <span
  m="3411620">last</span> <span m="3411850">example</span> <span
  m="3413140">on</span> <span m="3413570">partition,</span> <span
  m="3414700">which</span> <span m="3415730">it</span> <span
  m="3415880">turns</span> <span m="3416110">out</span> <span
  m="3416320">has</span> <span m="3416580">a</span> <span
  m="3417040">trivial</span> <span m="3418130">constant</span> <span
  m="3418580">factor</span> <span m="3418940">approximation</span> <span
  m="3419560">scheme.</span> <span m="3421120">And</span> <span
  m="3421420">this</span> <span m="3422160">obvious</span> <span
  m="3422500">thing,</span> <span m="3422690">and we'll</span> <span
  m="3422870">get</span> <span m="3423000">to</span> <span
  m="3423060">that</span> <span m="3423210">in</span> <span
  m="3423300">just</span> <span m="3423510">a</span> <span
  m="3423560">second.</span></p><p><span m="3424650">But</span> <span
  m="3425090">what</span> <span m="3425290">is</span> <span
  m="3426450">nice</span> <span m="3426720">about</span> <span
  m="3426940">partition</span> <span m="3427460">is</span> <span
  m="3427830">you</span> <span m="3427930">can</span> <span
  m="3428020">actually</span> <span m="3428250">get</span> <span
  m="3428370">a</span> <span m="3428440">PTAS,</span> <span
  m="3429540">right?</span> <span m="3430280">Polynomial</span> <span
  m="3430910">time</span> <span m="3431260">approximation</span> <span
  m="3431890">scheme,</span> <span m="3432900">and</span> <span
  m="3433060">FPTAS,</span> <span m="3433740">fully</span> <span
  m="3434050">polynomial</span> <span m="3434670">time</span> <span
  m="3434950">approximation</span> <span m="3435570">scheme,</span> <span
  m="3436640">that</span> <span m="3437790">essentially</span> <span
  m="3438290">give</span> <span m="3438540">you</span> <span
  m="3439260">with</span> <span m="3439940">higher</span> <span
  m="3440330">and</span> <span m="3440400">higher</span> <span
  m="3440690">run</span> <span m="3440960">times.</span> <span
  m="3442420">They're</span> <span m="3442550">going</span> <span
  m="3442660">to</span> <span m="3442700">give</span> <span
  m="3442840">you</span> <span m="3443870">solutions</span> <span
  m="3444310">that</span> <span m="3444420">are</span> <span
  m="3444510">closer</span> <span m="3444840">and</span> <span
  m="3444930">closer</span> <span m="3445260">to</span> <span
  m="3445320">optimal,</span> <span m="3445900">right?</span> <span
  m="3446460">If</span> <span m="3446600">you want to do</span> <span
  m="3446870">the</span> <span m="3446990">FPTAS,</span> <span
  m="3447680">we'll</span> <span m="3448120">do</span> <span
  m="3448200">the</span> <span m="3448330">PTAS.</span></p><p><span
  m="3450780">So</span> <span m="3450960">partition</span> <span
  m="3451450">is</span> <span m="3452380">a</span> <span
  m="3452470">trivial</span> <span m="3452880">little</span> <span
  m="3453100">problem</span> <span m="3453670">to</span> <span
  m="3453860">define.</span> <span m="3454860">It's</span> <span
  m="3455050">just</span> <span m="3455320">you</span> <span
  m="3455500">have</span> <span m="3455670">a</span> <span
  m="3455720">set,</span> <span m="3456220">and</span> <span
  m="3456390">you</span> <span m="3456500">want</span> <span
  m="3456750">to</span> <span m="3457390">partition</span> <span
  m="3457850">it</span> <span m="3457980">into</span> <span
  m="3458210">two</span> <span m="3458390">sets</span> <span
  m="3460210">such</span> <span m="3460470">that</span> <span
  m="3460860">they're</span> <span m="3460970">not</span> <span
  m="3461220">unbalanced.</span> <span m="3462140">So</span> <span
  m="3462380">your</span> <span m="3462930">cost</span> <span
  m="3463450">is</span> <span m="3463670">the</span> <span
  m="3464270">imbalance</span> <span m="3465830">between</span> <span
  m="3466270">the</span> <span m="3466710">two</span> <span
  m="3466880">sets.</span> <span m="3467900">And</span> <span
  m="3468010">you</span> <span m="3468090">want</span> <span
  m="3468190">to</span> <span m="3468230">minimize</span> <span
  m="3468710">that</span> <span m="3468900">cost.</span> <span
  m="3469570">You'd</span> <span m="3470040">love</span> <span
  m="3470330">to</span> <span m="3470440">have</span> <span
  m="3470850">two</span> <span m="3471050">sets</span> <span
  m="3471370">that</span> <span m="3471500">are</span> <span
  m="3471540">exactly</span> <span m="3472060">the</span> <span
  m="3472160">same</span> <span m="3472790">weight.</span> <span
  m="3473500">But</span> <span m="3473650">if</span> <span
  m="3473740">one</span> <span m="3473890">of</span> <span
  m="3473970">them</span> <span m="3474130">is</span> <span
  m="3474340">extremely</span> <span m="3477730">unbalanced</span> <span
  m="3478190">with</span> <span m="3478330">respect</span> <span
  m="3478610">to</span> <span m="3478660">the</span> <span
  m="3478740">other,</span> <span m="3479180">then</span> <span
  m="3479280">it's</span> <span m="3479760">bad.</span> <span
  m="3480190">Either</span> <span m="3480370">way.</span> <span
  m="3482490">So,</span> <span m="3482910">here</span> <span
  m="3483040">we</span> <span m="3483100">go</span> <span
  m="3483270">with</span> <span m="3483330">partition.</span></p><p><span
  m="3490810">Set</span> <span m="3491230">S</span> <span m="3493850">of</span>
  <span m="3494190">n</span> <span m="3494350">items</span> <span
  m="3498260">with</span> <span m="3498540">weights</span> <span
  m="3502110">S1</span> <span m="3503910">through</span> <span
  m="3504200">Sn,</span> <span m="3506700">assume</span> <span
  m="3508500">S1</span> <span m="3509045">greater</span> <span
  m="3509390">than</span> <span m="3509570">S2,</span> <span
  m="3513440">Sn,</span> <span m="3514130">without</span> <span
  m="3514400">loss</span> <span m="3514620">of</span> <span
  m="3514700">generality.</span> <span m="3515930">So</span> <span
  m="3516010">this is</span> <span m="3516210">just</span> <span
  m="3516430">an</span> <span m="3516540">ordering</span> <span
  m="3516930">thing.</span> <span m="3517220">I</span> <span
  m="3517280">mean,</span> <span m="3517420">obviously,</span> <span
  m="3517710">there's</span> <span m="3517870">some</span> <span
  m="3518070">order.</span> <span m="3518730">I'm</span> <span
  m="3518970">not</span> <span m="3519130">even</span> <span
  m="3519320">claiming</span> <span m="3519730">uniqueness</span> <span
  m="3520280">here.</span> <span m="3520960">I'm</span> <span
  m="3521120">just</span> <span m="3521260">saying</span> <span
  m="3521560">just</span> <span m="3521990">assume</span> <span
  m="3522230">that</span> <span m="3522400">this</span> <span
  m="3522570">is</span> <span m="3522690">the</span> <span
  m="3522750">order.</span> <span m="3523430">The</span> <span
  m="3523610">analysis</span> <span m="3524050">is</span> <span
  m="3524160">much</span> <span m="3524480">better</span> <span
  m="3524770">if</span> <span m="3524870">you</span> <span m="3524940">do</span>
  <span m="3525070">this--</span> <span m="3526910">if</span> <span
  m="3527070">you</span> <span m="3527340">make this</span> <span
  m="3527580">assumption.</span> <span m="3529230">And</span> <span
  m="3529630">I</span> <span m="3529660">want</span> <span m="3529810">to</span>
  <span m="3529860">partition</span> <span m="3532330">into</span> <span
  m="3533940">A</span> <span m="3535796">and</span> <span m="3536260">B</span>
  <span m="3537950">to</span> <span m="3538070">minimize</span> <span
  m="3544030">max</span> <span m="3545780">of</span> <span
  m="3546270">sigma</span> <span m="3546585">I</span> <span
  m="3547180">belongs</span> <span m="3547580">to</span> <span
  m="3547740">A.</span> <span m="3549090">Si</span> <span
  m="3550840">sigma</span> <span m="3551320">I</span> <span
  m="3551530">belongs</span> <span m="3551970">to</span> <span
  m="3552080">B</span> <span m="3553950">Si.</span> <span m="3555650">And</span>
  <span m="3556320">this</span> <span m="3556660">is</span> <span
  m="3556840">the</span> <span m="3556960">weight</span> <span
  m="3558620">of</span> <span m="3558750">A.</span> <span m="3559956">And</span>
  <span m="3560360">this</span> <span m="3560490">is</span> <span
  m="3560640">the</span> <span m="3560750">weight</span> <span
  m="3562040">of</span> <span m="3562420">B.</span></p><p><span
  m="3565140">And</span> <span m="3565360">so</span> <span
  m="3567000">there's</span> <span m="3567220">only</span> <span
  m="3567410">so</span> <span m="3567680">much</span> <span
  m="3567960">you</span> <span m="3568090">can</span> <span
  m="3568210">do.</span> <span m="3569800">If</span> <span
  m="3570560">you</span> <span m="3570640">have</span> <span
  m="3571460">2L</span> <span m="3572910">equals</span> <span
  m="3573690">sigma</span> <span m="3574210">I</span> <span
  m="3574430">equals</span> <span m="3574770">1</span> <span
  m="3575110">through</span> <span m="3575360">n</span> <span
  m="3575740">Si--</span> <span m="3578430">so</span> <span
  m="3578870">I'm</span> <span m="3579020">just</span> <span
  m="3579210">calling</span> <span m="3579410">that</span> <span
  m="3579570">2L--</span> <span m="3580160">the</span> <span
  m="3580870">sum</span> <span m="3581050">of</span> <span
  m="3581140">all</span> <span m="3581270">the</span> <span
  m="3581350">weights.</span> <span m="3582210">Then</span> <span
  m="3583770">my</span> <span m="3583970">optimum</span> <span
  m="3584410">solution</span> <span m="3585690">is</span> <span
  m="3585860">what?</span> <span m="3587070">What</span> <span
  m="3587210">is</span> <span m="3587330">the</span> <span
  m="3587460">lower</span> <span m="3587700">bound</span> <span
  m="3587990">on</span> <span m="3588070">the</span> <span
  m="3588120">optimum</span> <span m="3588570">solution?</span> <span
  m="3590900">If</span> <span m="3591330">it's</span> <span
  m="3591600">2L?</span> <span m="3593140">What's</span> <span
  m="3593310">the</span> <span m="3593360">trivial</span> <span
  m="3593650">lower</span> <span m="3593870">bound?</span> <span
  m="3595870">Just</span> <span m="3596100">L,</span> <span
  m="3596340">right?</span> <span m="3597190">So</span> <span
  m="3597330">I</span> <span m="3597380">could have</span> <span
  m="3597620">L</span> <span m="3597830">here</span> <span
  m="3598110">and</span> <span m="3598280">L</span> <span
  m="3598480">there.</span> <span m="3599480">And</span> <span
  m="3599840">if</span> <span m="3599970">I</span> <span m="3600040">had</span>
  <span m="3600630">2L</span> <span m="3601300">here</span> <span
  m="3601560">and</span> <span m="3601700">0</span> <span
  m="3602060">here,</span> <span m="3604020">then</span> <span
  m="3605230">oh!</span> <span m="3606540">That's</span> <span
  m="3606680">right.</span> <span m="3607000">I</span> <span
  m="3607030">want</span> <span m="3607160">to</span> <span
  m="3607210">minimize.</span> <span m="3607730">Remember,</span> <span
  m="3608010">don't--</span> <span m="3609460">maybe</span> <span
  m="3609610">that's</span> <span m="3609760">what</span> <span
  m="3609880">threw</span> <span m="3610000">you</span> <span m="3610150">off. 
  It</span> <span m="3610420">threw</span> <span m="3610580">me</span> <span
  m="3610720">off</span> <span m="3610890">right</span> <span
  m="3611030">here.</span> <span m="3611650">I</span> <span
  m="3611750">see</span> <span m="3611910">a</span> <span m="3611950">max</span>
  <span m="3612230">here,</span> <span m="3612770">and</span> <span
  m="3612890">I</span> <span m="3612940">got</span> <span m="3613050">a</span>
  <span m="3613190">little worried.</span></p><p><span m="3613940">But</span>
  <span m="3614600">I</span> <span m="3614680">want</span> <span
  m="3614800">to</span> <span m="3614850">minimize</span> <span
  m="3615320">the</span> <span m="3615400">maximum</span> <span
  m="3615990">of</span> <span m="3616090">these</span> <span
  m="3616280">two</span> <span m="3616450">quantities,</span> <span
  m="3617540">OK?</span> <span m="3618340">And</span> <span
  m="3618630">so</span> <span m="3619860">the</span> <span
  m="3620030">best</span> <span m="3620270">I</span> <span
  m="3620320">could</span> <span m="3620470">do</span> <span
  m="3620640">is</span> <span m="3620850">to</span> <span
  m="3621150">keep</span> <span m="3621390">them</span> <span
  m="3621530">equal.</span> <span m="3622380">And</span> <span
  m="3622690">if</span> <span m="3622800">I</span> <span m="3622870">get</span>
  <span m="3623100">L</span> <span m="3623360">for</span> <span
  m="3623490">both</span> <span m="3623690">of</span> <span
  m="3623790">them,</span> <span m="3624330">that</span> <span
  m="3624470">would</span> <span m="3624590">minimize</span> <span
  m="3625450">the</span> <span m="3625540">maximum</span> <span m="3625970">of
  those</span> <span m="3626150">two</span> <span m="3626290">quantities.</span>
  <span m="3627170">If</span> <span m="3627340">I had</span> <span
  m="3627510">2L</span> <span m="3627910">and</span> <span m="3628040">0,</span>
  <span m="3628880">then</span> <span m="3629000">the</span> <span
  m="3629060">maximum</span> <span m="3629470">of those</span> <span
  m="3629640">two</span> <span m="3629780">quantities</span> <span
  m="3630160">is</span> <span m="3630280">2L,</span> <span
  m="3631020">and</span> <span m="3631330">obviously</span> <span
  m="3631570">I</span> <span m="3631610">haven't</span> <span
  m="3631840">done</span> <span m="3631980">any</span> <span
  m="3632110">minimization.</span> <span m="3633320">So</span> <span
  m="3633480">now</span> <span m="3633630">you</span> <span
  m="3633770">see</span> <span m="3634600">why</span> <span
  m="3634950">there's</span> <span m="3635240">a</span> <span
  m="3635630">trivial</span> <span m="3640020">optimum</span> <span
  m="3640470">solution</span> <span m="3642710">is</span> <span
  m="3642880">greater</span> <span m="3643050">than</span> <span
  m="3643210">or</span> <span m="3643240">equal</span> <span
  m="3643450">to</span> <span m="3643530">L.</span> <span
  m="3645398">Right?</span></p><p><span m="3647270">And now you</span> <span
  m="3647410">see</span> <span m="3647590">why</span> <span
  m="3647750">there's</span> <span m="3647920">a</span> <span
  m="3648030">trivial</span> <span m="3648960">two</span> <span
  m="3649370">approximation</span> <span m="3650070">algorithm.</span> <span
  m="3651440">Because</span> <span m="3652310">the</span> <span
  m="3652500">worst</span> <span m="3652760">I</span> <span
  m="3652810">could</span> <span m="3652980">do</span> <span
  m="3653120">is</span> <span m="3653250">2L,</span> <span
  m="3654620">right?</span> <span m="3654680">I could</span> <span
  m="3654840">dump</span> <span m="3655050">all</span> <span
  m="3655210">of</span> <span m="3655270">them</span> <span
  m="3655410">on</span> <span m="3655500">one</span> <span
  m="3655670">side,</span> <span m="3656410">constant</span> <span
  m="3656810">time,</span> <span m="3657610">and</span> <span
  m="3658020">the</span> <span m="3658200">other</span> <span
  m="3658370">one</span> <span m="3658520">is</span> <span m="3658610">0.</span>
  <span m="3659380">And</span> <span m="3659620">my</span> <span
  m="3660220">cost</span> <span m="3660570">is</span> <span
  m="3660690">2L.</span> <span m="3661440">So</span> <span
  m="3661700">I'm</span> <span m="3661850">within</span> <span
  m="3662070">a</span> <span m="3662140">factor</span> <span m="3662470">of
  2</span> <span m="3662930">in</span> <span m="3663060">this</span> <span
  m="3663220">problem</span> <span m="3663960">trivially.</span> <span
  m="3664820">So,</span> <span m="3666400">unfortunately</span> <span
  m="3666920">that's</span> <span m="3667180">not</span> <span
  m="3667510">the</span> <span m="3667600">end</span> <span
  m="3667740">of</span> <span m="3667830">the</span> <span
  m="3667890">lecture,</span> <span m="3668930">OK?</span></p><p><span
  m="3670000">So,</span> <span m="3671000">we've</span> <span
  m="3671170">got</span> <span m="3671300">to</span> <span m="3671340">do</span>
  <span m="3671450">better.</span> <span m="3672100">I</span> <span
  m="3672180">mean,</span> <span m="3672300">clearly,</span> <span
  m="3672580">there's</span> <span m="3672760">more</span> <span
  m="3672990">here.</span> <span m="3673680">You'd</span> <span
  m="3673850">like</span> <span m="3674060">to</span> <span
  m="3674150">get</span> <span m="3674480">much</span> <span
  m="3674680">closer.</span> <span m="3675590">This</span> <span
  m="3675720">is</span> <span m="3675780">a</span> <span
  m="3675850">different</span> <span m="3676100">kind</span> <span
  m="3676370">of</span> <span m="3676440">problem.</span> <span
  m="3677180">And</span> <span m="3677390">it would</span> <span
  m="3677450">be</span> <span m="3677580">wonderful</span> <span m="3677850">if
  we could</span> <span m="3678180">get</span> <span m="3678360">within</span>
  <span m="3678580">epsilon.</span> <span m="3679820">Right?</span> <span
  m="3679920">I'm within</span> <span m="3680190">1%.</span> <span
  m="3681040">How</span> <span m="3681180">long</span> <span
  m="3681340">does</span> <span m="3681470">it</span> <span
  m="3681560">take</span> <span m="3681750">me?</span> <span m="3682400">I'm
  within</span> <span m="3682590">0.01%,</span> <span
  m="3683600">guaranteed.</span> <span m="3684420">How</span> <span
  m="3684550">long</span> <span m="3684720">does</span> <span
  m="3684850">it</span> <span m="3684940">take</span> <span
  m="3685140">me?</span> <span m="3685780">Right?</span> <span
  m="3685990">That's</span> <span m="3686190">what</span> <span
  m="3686350">an</span> <span m="3686510">approximation</span> <span
  m="3687080">scheme</span> <span m="3687450">is,</span> <span
  m="3688060">as</span> <span m="3688230">opposed</span> <span
  m="3688470">to</span> <span m="3688550">just</span> <span m="3688790">a</span>
  <span m="3688850">plain</span> <span m="3689110">algorithm.</span></p><p><span
  m="3690000">So</span> <span m="3690200">if</span> <span
  m="3690300">you're</span> <span m="3690410">actually</span> <span
  m="3690660">going to talk</span> <span m="3690840">about</span> <span
  m="3692510">epsilon</span> <span m="3694110">here,</span> <span
  m="3695070">and</span> <span m="3695410">we're</span> <span
  m="3695550">just</span> <span m="3695650">doing</span> <span
  m="3695810">a</span> <span m="3695880">PTAS.</span> <span
  m="3698380">So</span> <span m="3698750">we're</span> <span
  m="3698850">going</span> <span m="3698940">to</span> <span
  m="3698990">see</span> <span m="3699130">something</span> <span
  m="3699480">that</span> <span m="3700750">is</span> <span
  m="3700920">not</span> <span m="3701620">polynomial</span> <span
  m="3702220">in</span> <span m="3702640">1</span> <span m="3702820">over</span>
  <span m="3702980">epsilon.</span> <span m="3703890">It's</span> <span
  m="3704020">polynomial</span> <span m="3704530">in</span> <span
  m="3704680">n.</span> <span m="3705680">But</span> <span
  m="3706690">not</span> <span m="3706890">polynomial</span> <span
  m="3707450">in</span> <span m="3708040">1</span> <span m="3708310">over</span>
  <span m="3708470">epsilon.</span> <span m="3709480">But</span> <span
  m="3709590">there's</span> <span m="3709830">an</span> <span
  m="3709880">FPTAS</span> <span m="3710530">with</span> <span
  m="3710620">this</span> <span m="3710750">problem</span> <span
  m="3711970">that</span> <span m="3712630">you're</span> <span
  m="3712860">not</span> <span m="3712990">responsible</span> <span
  m="3713470">for.</span></p><p><span m="3721160">So</span> <span
  m="3721320">this</span> <span m="3721500">is</span> <span
  m="3721790">going</span> <span m="3721910">to</span> <span
  m="3721950">be</span> <span m="3722040">an</span> <span
  m="3722110">interesting</span> <span m="3722480">algorithm</span> <span
  m="3722850">simply</span> <span m="3723130">because</span> <span
  m="3724820">we</span> <span m="3724890">now</span> <span
  m="3725090">have</span> <span m="3725180">to</span> <span
  m="3725260">do</span> <span m="3725380">something</span> <span
  m="3725700">with</span> <span m="3725850">epsilon.</span> <span
  m="3726390">It's</span> <span m="3726530">going</span> <span
  m="3726630">to</span> <span m="3726670">have</span> <span
  m="3726840">an</span> <span m="3726910">extra</span> <span
  m="3727190">input.</span> <span m="3727920">It's</span> <span
  m="3728080">not</span> <span m="3728190">going</span> <span
  m="3728310">to</span> <span m="3728350">be</span> <span m="3728450">the</span>
  <span m="3728560">simple</span> <span m="3728950">heuristic,</span> <span
  m="3729530">where</span> <span m="3729740">I'm</span> <span
  m="3729840">going</span> <span m="3729940">to</span> <span
  m="3729980">do</span> <span m="3730090">maximum</span> <span
  m="3730500">degree</span> <span m="3730930">or</span> <span
  m="3731020">maximum</span> <span m="3731390">number</span> <span
  m="3731580">of</span> <span m="3731650">elements</span> <span
  m="3732110">or</span> <span m="3732600">anything</span> <span
  m="3732840">like</span> <span m="3733050">that.</span> <span
  m="3734020">I</span> <span m="3734130">want</span> <span m="3734300">to</span>
  <span m="3734400">take</span> <span m="3734610">this</span> <span
  m="3734740">epsilon</span> <span m="3735230">and actually</span> <span
  m="3735530">do</span> <span m="3735650">something</span> <span
  m="3735940">with</span> <span m="3736110">it.</span> <span m="3736775">All
  right?</span> <span m="3737170">So</span> <span m="3737670">how</span> <span
  m="3737830">does</span> <span m="3737930">this</span> <span
  m="3738080">work?</span></p><p><span m="3739100">Well,</span> <span
  m="3741770">basically</span> <span m="3742200">what</span> <span
  m="3742320">happens</span> <span m="3742630">in</span> <span
  m="3742730">PTAS's,</span> <span m="3744060">or</span> <span m="3744240">in
  a</span> <span m="3744270">bunch</span> <span m="3744520">of</span> <span
  m="3744620">them,</span> <span m="3745430">is</span> <span
  m="3745590">that</span> <span m="3746030">you</span> <span
  m="3746190">essentially</span> <span m="3746620">do</span> <span
  m="3746780">an</span> <span m="3746860">exponential</span> <span
  m="3747660">amount</span> <span m="3747920">of</span> <span
  m="3748000">work</span> <span m="3750390">given</span> <span
  m="3750780">a</span> <span m="3750830">particular</span> <span
  m="3751170">epsilon</span> <span m="3752050">to</span> <span
  m="3752200">get</span> <span m="3752860">a</span> <span
  m="3752970">partial</span> <span m="3754210">optimum</span> <span
  m="3754710">solution.</span> <span m="3756100">So</span> <span
  m="3756730">you</span> <span m="3756890">can</span> <span
  m="3757010">think</span> <span m="3757180">of</span> <span
  m="3761350">epsilon</span> <span m="3761770">as</span> <span
  m="3761880">essentially</span> <span m="3762230">being</span> <span
  m="3762410">1</span> <span m="3763320">divided</span> <span
  m="3763610">by</span> <span m="3763760">m</span> <span m="3763980">plus</span>
  <span m="3764230">1,</span> <span m="3765410">where</span> <span m="3765630">m
  is</span> <span m="3765840">some</span> <span m="3766040">quantity.</span>
  <span m="3767200">And</span> <span m="3768500">as</span> <span
  m="3768970">m</span> <span m="3769240">grows,</span> <span
  m="3770550">the</span> <span m="3770630">complexity</span> <span
  m="3771050">of your</span> <span m="3771110">algorithm</span> <span
  m="3771540">is</span> <span m="3771630">going</span> <span
  m="3771740">to</span> <span m="3771790">grow.</span> <span
  m="3772840">But</span> <span m="3773240">obviously,</span> <span
  m="3773570">as</span> <span m="3773700">m</span> <span
  m="3773900">grows,</span> <span m="3774830">you're</span> <span
  m="3774980">getting</span> <span m="3775150">a</span> <span
  m="3775220">tighter</span> <span m="3775550">and</span> <span
  m="3775680">tighter</span> <span m="3776710">epsilon.</span> <span
  m="3777650">You're</span> <span m="3777750">getting</span> <span
  m="3778350">guaranteed</span> <span m="3778900">closer</span> <span
  m="3779230">and</span> <span m="3779330">closer</span> <span
  m="3779880">to</span> <span m="3780210">your</span> <span
  m="3780340">optimum.</span></p><p><span m="3781840">And</span> <span
  m="3782080">so</span> <span m="3782510">we're</span> <span m="3782650">going
  to have</span> <span m="3782850">two</span> <span m="3783050">phases</span>
  <span m="3783470">here</span> <span m="3784560">in</span> <span
  m="3784760">this</span> <span m="3784950">particular</span> <span
  m="3785580">approximation</span> <span m="3786200">scheme.</span> <span
  m="3788230">The</span> <span m="3788370">first</span> <span
  m="3788690">phase</span> <span m="3790060">is</span> <span
  m="3791900">find</span> <span m="3793500">an</span> <span
  m="3793680">optimal</span> <span m="3795910">partition,</span> <span
  m="3798550">A</span> <span m="3798690">prime,</span> <span
  m="3799490">B</span> <span m="3799730">prime,</span> <span
  m="3802110">of</span> <span m="3803290">S1</span> <span
  m="3804350">through</span> <span m="3804690">Sm.</span> <span
  m="3806030">And</span> <span m="3807390">we're</span> <span
  m="3807530">just</span> <span m="3807630">going to</span> <span
  m="3807760">assume</span> <span m="3808100">that</span> <span
  m="3808890">this</span> <span m="3809080">exhaustive</span> <span
  m="3809540">search,</span> <span m="3810640">which looks</span> <span
  m="3811030">at</span> <span m="3811130">all</span> <span
  m="3811330">possible</span> <span m="3811700">subsets,</span> <span
  m="3812960">and</span> <span m="3813390">picks</span> <span
  m="3813630">the</span> <span m="3813700">best</span> <span
  m="3813930">one.</span> <span m="3814890">OK?</span> <span
  m="3815640">And</span> <span m="3816140">how</span> <span
  m="3816300">many</span> <span m="3816460">subsets</span> <span
  m="3816890">are</span> <span m="3817060">there</span> <span
  m="3818030">for</span> <span m="3818870">a</span> <span m="3819080">set</span>
  <span m="3819370">of</span> <span m="3819470">size</span> <span
  m="3819850">m?</span> <span m="3820690">It's</span> <span m="3820910">2</span>
  <span m="3821090">raised</span> <span m="3821390">to</span> <span
  m="3821480">m.</span></p><p><span m="3822310">So</span> <span
  m="3822450">this</span> <span m="3822610">is</span> <span
  m="3822720">going</span> <span m="3822900">to</span> <span
  m="3822960">be</span> <span m="3823210">an</span> <span
  m="3823300">exponential</span> <span m="3823990">order,</span> <span
  m="3824500">2</span> <span m="3824690">raised</span> <span
  m="3824980">to</span> <span m="3825060">m</span> <span
  m="3825820">algorithm.</span> <span m="3826950">OK?</span> <span
  m="3827500">I'm</span> <span m="3827660">just</span> <span
  m="3827820">going</span> <span m="3827940">to</span> <span
  m="3828010">find</span> <span m="3828320">the</span> <span
  m="3828390">optimum</span> <span m="3829000">partition</span> <span
  m="3830060">through</span> <span m="3830260">exhaustive</span> <span
  m="3830700">search</span> <span m="3831270">for</span> <span
  m="3831820">m.</span> <span m="3832780">Right?</span> <span
  m="3833000">m</span> <span m="3833260">is</span> <span m="3833900">less</span>
  <span m="3834220">than</span> <span m="3834470">n.</span> <span
  m="3839580">So</span> <span m="3839720">I'm</span> <span
  m="3839840">picking</span> <span m="3840100">something</span> <span
  m="3840480">that's</span> <span m="3840680">a</span> <span
  m="3840750">smaller</span> <span m="3841270">problem.</span> <span
  m="3841660">I'm</span> <span m="3841760">going</span> <span
  m="3841870">to</span> <span m="3841910">seed</span> <span
  m="3842280">this.</span> <span m="3842940">So,</span> <span
  m="3843050">the</span> <span m="3843110">way</span> <span
  m="3843240">this</span> <span m="3843490">scheme</span> <span
  m="3843700">works</span> <span m="3844000">is,</span> <span
  m="3844160">I'm</span> <span m="3844280">seeding</span> <span
  m="3845340">my</span> <span m="3846870">actual</span> <span
  m="3847300">algorithm--</span> <span m="3847760">my</span> <span
  m="3847830">actual</span> <span m="3848140">heuristic--</span> <span
  m="3849210">with</span> <span m="3850170">an</span> <span
  m="3850370">initial</span> <span m="3851800">partial</span> <span
  m="3852310">solution.</span> <span m="3853390">And</span> <span
  m="3854460">depending</span> <span m="3854770">on</span> <span
  m="3855230">how</span> <span m="3855360">much</span> <span
  m="3855600">work</span> <span m="3855860">I</span> <span m="3855940">do</span>
  <span m="3857180">to</span> <span m="3857980">create</span> <span
  m="3858330">the</span> <span m="3858400">seed,</span> <span m="3859615">I'm
  going to</span> <span m="3860020">end</span> <span m="3860210">up</span> <span
  m="3860680">having</span> <span m="3860970">higher</span> <span
  m="3861200">complexity.</span> <span m="3862280">And</span> <span
  m="3862540">obviously</span> <span m="3862850">that's</span> <span
  m="3863020">a</span> <span m="3863070">function</span> <span
  m="3863520">of</span> <span m="3864520">small</span> <span
  m="3864880">m,</span> <span m="3865810">or</span> <span m="3865950">1</span>
  <span m="3866110">over</span> <span m="3866260">epsilon.</span></p><p><span
  m="3867990">And</span> <span m="3868140">so</span> <span
  m="3868250">this</span> <span m="3868470">takes--</span> <span
  m="3870240">this</span> <span m="3870680">optimal</span> <span
  m="3871680">takes</span> <span m="3872430">order</span> <span
  m="3872770">to</span> <span m="3872920">raise</span> <span m="3873230">to
  m</span> <span m="3873510">time.</span> <span m="3875460">And</span> <span
  m="3875640">you</span> <span m="3875720">can</span> <span
  m="3875830">think</span> <span m="3875970">of</span> <span
  m="3876060">that</span> <span m="3876310">as</span> <span
  m="3877940">order</span> <span m="3878940">2</span> <span
  m="3879130">raised</span> <span m="3879390">to</span> <span
  m="3879500">1</span> <span m="3879730">over</span> <span
  m="3879960">epsilon.</span> <span m="3882420">And</span> <span
  m="3882580">so</span> <span m="3882670">that's</span> <span
  m="3882830">why</span> <span m="3883090">it's a</span> <span
  m="3883190">PTAS,</span> <span m="3884580">and</span> <span
  m="3884730">not</span> <span m="3884890">an</span> <span
  m="3884980">FPTAS.</span> <span m="3886710">OK?</span> <span
  m="3888450">So</span> <span m="3888650">this</span> <span
  m="3888930">is</span> <span m="3889350">PTAS.</span></p><p><span
  m="3896820">What</span> <span m="3897020">else</span> <span
  m="3897210">do</span> <span m="3897300">we</span> <span
  m="3897360">need</span> <span m="3897490">to</span> <span
  m="3897570">do?</span> <span m="3897880">Well,</span> <span
  m="3898140">I</span> <span m="3898260">don't</span> <span
  m="3898460">actually</span> <span m="3898730">have</span> <span
  m="3898900">a</span> <span m="3898950">solution</span> <span
  m="3899340">yet.</span> <span m="3900080">Because</span> <span
  m="3900270">if</span> <span m="3900360">m</span> <span m="3900570">is</span>
  <span m="3900680">really</span> <span m="3900870">small--</span> <span
  m="3901950">and</span> <span m="3902250">by</span> <span
  m="3902370">the</span> <span m="3902430">way,</span> <span
  m="3902520">m</span> <span m="3902740">can</span> <span m="3902910">be</span>
  <span m="3903300">0</span> <span m="3903720">as</span> <span
  m="3903850">well.</span> <span m="3905690">Right?</span> <span
  m="3906680">Epsilon</span> <span m="3907080">would</span> <span
  m="3907200">then</span> <span m="3907390">be</span> <span
  m="3907620">at</span> <span m="3908040">2</span> <span
  m="3908280">approximation,</span> <span m="3909460">1</span> <span
  m="3909710">divided</span> <span m="3910060">by--</span> <span
  m="3910750">this</span> <span m="3911420">would</span> <span
  m="3911510">be</span> <span m="3911600">one</span> <span
  m="3911900">half.</span> <span m="3912970">And</span> <span
  m="3913170">so</span> <span m="3913310">1</span> <span m="3913470">over</span>
  <span m="3913590">epsilon</span> <span m="3913940">is</span> <span
  m="3914080">2.</span> <span m="3914710">So</span> <span
  m="3914880">then</span> <span m="3915050">you've</span> <span
  m="3915150">got</span> <span m="3915270">your trivial</span> <span
  m="3916650">algorithm</span> <span m="3917120">that</span> <span
  m="3917250">we</span> <span m="3917350">had,</span> <span
  m="3917600">the</span> <span m="3917680">2</span> <span
  m="3917810">approximation</span> <span m="3918360">scheme.</span> <span
  m="3919270">So</span> <span m="3919440">that</span> <span
  m="3919780">makes</span> <span m="3920000">sense?</span></p><p><span
  m="3921890">So</span> <span m="3922020">the</span> <span
  m="3922120">second</span> <span m="3922470">phase</span> <span
  m="3923600">is</span> <span m="3924340">you're</span> <span
  m="3924790">going</span> <span m="3924910">to</span> <span
  m="3924960">start</span> <span m="3925350">with</span> <span
  m="3925620">your</span> <span m="3925810">seed</span> <span
  m="3927460">corresponding</span> <span m="3927980">to</span> <span
  m="3929010">A</span> <span m="3929500">and</span> <span m="3929770">B.</span>
  <span m="3931460">You're going</span> <span m="3931690">to</span> <span
  m="3931780">set</span> <span m="3931970">them</span> <span
  m="3932100">to</span> <span m="3932190">A</span> <span
  m="3932330">prime</span> <span m="3932760">and B</span> <span
  m="3932940">prime.</span> <span m="3934190">And</span> <span
  m="3934550">what</span> <span m="3934710">I'm</span> <span
  m="3934790">going</span> <span m="3934940">to</span> <span
  m="3935020">do</span> <span m="3935320">is,</span> <span
  m="3936280">for</span> <span m="3936490">I</span> <span
  m="3936730">equals</span> <span m="3937630">m</span> <span
  m="3937850">plus</span> <span m="3938140">1</span> <span m="3940020">to</span>
  <span m="3940190">n,</span> <span m="3942310">if</span> <span
  m="3944170">w(a)</span> <span m="3946240">less</span> <span
  m="3946580">than</span> <span m="3946720">or</span> <span
  m="3946810">equal</span> <span m="3947120">to</span> <span
  m="3947670">w(b),</span> <span m="3952670">A</span> <span
  m="3952960">equals</span> <span m="3954350">A</span> <span
  m="3955330">union</span> <span m="3955890">I--</span> <span
  m="3958700">running</span> <span m="3958920">out</span> <span
  m="3959020">of</span> <span m="3959090">room--</span> <span
  m="3960170">else</span> <span m="3962540">B</span> <span
  m="3962970">equals</span> <span m="3965130">B</span> <span
  m="3966900">union</span> <span m="3967220">I.</span> <span
  m="3970050">OK?</span></p><p><span m="3970750">So</span> <span
  m="3971730">it's</span> <span m="3971930">not</span> <span
  m="3972090">that</span> <span m="3972580">hard</span> <span
  m="3972830">to</span> <span m="3972910">see,</span> <span
  m="3973050">hopefully.</span> <span m="3974350">All</span> <span
  m="3974520">I'm</span> <span m="3974620">doing</span> <span
  m="3974830">here</span> <span m="3975100">is,</span> <span
  m="3975760">I'm</span> <span m="3976020">just</span> <span
  m="3976250">going</span> <span m="3976710">in</span> <span
  m="3976850">a</span> <span m="3976880">very</span> <span
  m="3977090">greedy</span> <span m="3977460">way.</span> <span
  m="3978130">I</span> <span m="3978250">got</span> <span m="3978420">my</span>
  <span m="3979790">initial</span> <span m="3980210">A prime</span> <span
  m="3980500">and</span> <span m="3980790">B</span> <span
  m="3980970">prime.</span> <span m="3981370">I</span> <span
  m="3981450">set</span> <span m="3981670">them</span> <span
  m="3981800">to</span> <span m="3981900">A and</span> <span
  m="3982200">B.</span> <span m="3982800">And</span> <span m="3982940">I</span>
  <span m="3983000">say,</span> <span m="3983160">oh,</span> <span
  m="3983330">I</span> <span m="3983420">got</span> <span
  m="3983600">this</span> <span m="3983750">element</span> <span
  m="3984150">here.</span> <span m="3984710">Which</span> <span
  m="3984880">one</span> <span m="3985030">is</span> <span
  m="3985120">bigger?</span> <span m="3985970">This</span> <span
  m="3986060">one</span> <span m="3986180">is</span> <span
  m="3986250">bigger?</span> <span m="3986620">I'm</span> <span
  m="3986750">going</span> <span m="3986850">to</span> <span
  m="3986890">put</span> <span m="3987230">the</span> <span
  m="3987370">element</span> <span m="3987660">over</span> <span
  m="3987800">here.</span> <span m="3988440">And</span> <span
  m="3988570">then</span> <span m="3988710">I</span> <span
  m="3988780">look</span> <span m="3988960">at</span> <span
  m="3989000">it</span> <span m="3989090">again.</span> <span m="3989500">I
  got</span> <span m="3989840">another</span> <span m="3990080">element.</span>
  <span m="3990550">Which</span> <span m="3990680">one</span> <span
  m="3990810">is</span> <span m="3990900">bigger?</span> <span
  m="3991530">And</span> <span m="3991670">I</span> <span m="3991720">go</span>
  <span m="3991870">this</span> <span m="3992050">way,</span> <span
  m="3992190">that</span> <span m="3992390">way.</span> <span
  m="3993060">That's</span> <span m="3993520">pretty</span> <span
  m="3993650">much</span> <span m="3993820">it.</span></p><p><span
  m="3994760">So,</span> <span m="3995220">again,</span> <span
  m="3995430">all</span> <span m="3995540">of these</span> <span
  m="3995780">algorithms</span> <span m="3996200">are</span> <span
  m="3996470">really</span> <span m="3996900">straightforward.</span> <span
  m="3998740">The</span> <span m="3999810">interesting</span> <span
  m="4000240">part's--</span> <span m="4000670">the</span> <span
  m="4000750">fun</span> <span m="4000960">part's--</span> <span
  m="4001720">in</span> <span m="4001890">showing</span> <span
  m="4002660">the</span> <span m="4003410">approximation</span> <span
  m="4004910">guarantee.</span> <span m="4006530">So</span> <span
  m="4006700">we're</span> <span m="4006800">good</span> <span
  m="4006920">here?</span> <span m="4008610">Yup?</span> <span
  m="4010550">All</span> <span m="4010670">right.</span></p><p><span
  m="4011120">So</span> <span m="4012060">back to</span> <span
  m="4012330">analysis.</span> <span m="4014090">One</span> <span
  m="4014250">last</span> <span m="4014490">time.</span> <span
  m="4020210">So,</span> <span m="4020890">let's</span> <span
  m="4021120">see.</span> <span m="4023980">We</span> <span
  m="4024140">want</span> <span m="4024270">to</span> <span
  m="4024310">show</span> <span m="4024590">that</span> <span
  m="4024980">a</span> <span m="4025080">prox</span> <span
  m="4027210">partition--</span> <span m="4032534">ah,</span> <span
  m="4033030">you</span> <span m="4033180">know how</span> <span m="4033490">to
  spell</span> <span m="4033900">partition--</span> <span m="4035100">is</span>
  <span m="4035430">PTAS.</span> <span m="4038610">I</span> <span
  m="4038680">guess</span> <span m="4038800">I</span> <span
  m="4038900">don't,</span> <span m="4039200">but</span> <span
  m="4039540">you</span> <span m="4039700">do.</span> <span
  m="4043200">Let's</span> <span m="4043340">assume</span> <span
  m="4044590">that</span> <span m="4046060">w(a)</span> <span
  m="4047040">is</span> <span m="4047270">greater</span> <span
  m="4047490">than</span> <span m="4047640">or</span> <span
  m="4047690">equal</span> <span m="4047930">to w(b)</span> <span
  m="4051090">to</span> <span m="4051200">end</span> <span
  m="4051510">with.</span> <span m="4052070">Right?</span> <span
  m="4052290">So</span> <span m="4052400">I'm</span> <span
  m="4052510">just</span> <span m="4052640">saying,</span> <span
  m="4053160">at</span> <span m="4053300">the</span> <span
  m="4053360">end</span> <span m="4053660">here,</span> <span
  m="4054030">I'm</span> <span m="4054150">just</span> <span
  m="4054310">marking</span> <span m="4054760">the</span> <span
  m="4054860">one</span> <span m="4055080">that</span> <span
  m="4055190">was</span> <span m="4055320">larger</span> <span
  m="4056080">that</span> <span m="4056220">came</span> <span
  m="4056440">out</span> <span m="4056540">of</span> <span
  m="4056610">the</span> <span m="4056680">max</span> <span
  m="4057380">as</span> <span m="4057590">A.</span> <span
  m="4058260">Right?</span> <span m="4058610">Without</span> <span
  m="4058860">loss</span> <span m="4059050">of</span> <span
  m="4059150">generality.</span> <span m="4060220">Just</span> <span
  m="4060400">to</span> <span m="4060460">make</span> <span
  m="4060600">things</span> <span m="4060780">easier,</span> <span
  m="4061470">I</span> <span m="4061580">don't want</span> <span
  m="4061720">to</span> <span m="4061760">keep</span> <span
  m="4061920">interchanging</span> <span m="4062480">things.</span> <span
  m="4063740">So</span> <span m="4063960">our</span> <span
  m="4064310">approximation</span> <span m="4064970">ratio</span> <span
  m="4068980">is</span> <span m="4069220">w(a)</span> <span
  m="4070600">divided</span> <span m="4071010">by</span> <span
  m="4071220">L,</span> <span m="4072440">right?</span> <span
  m="4073180">w(a)</span> <span m="4073800">could</span> <span m="4074020">at
  best</span> <span m="4074270">be</span> <span m="4074520">L</span> <span
  m="4075560">if I</span> <span m="4075640">got</span> <span
  m="4075810">a</span> <span m="4075860">perfect</span> <span
  m="4077220">partition,</span> <span m="4077760">perfectly</span> <span
  m="4078220">balanced.</span> <span m="4079220">But</span> <span
  m="4079660">it</span> <span m="4079780">could</span> <span
  m="4079890">be</span> <span m="4079980">a</span> <span
  m="4080040">little</span> <span m="4080140">bit</span> <span
  m="4080270">more.</span> <span m="4080690">And</span> <span
  m="4080830">that's</span> <span m="4081010">my</span> <span
  m="4081160">approximation</span> <span m="4081810">ratio,</span> <span
  m="4083000">OK?</span></p><p><span m="4083660">So</span> <span
  m="4084290">I</span> <span m="4084420">need</span> <span m="4084590">to</span>
  <span m="4084680">now</span> <span m="4085930">figure</span> <span
  m="4086270">out</span> <span m="4087180">how</span> <span
  m="4087480">the</span> <span m="4087580">approximation</span> <span
  m="4088250">ratio</span> <span m="4089520">reflects</span> <span
  m="4090090">on</span> <span m="4090310">the</span> <span
  m="4090460">run</span> <span m="4090710">time,</span> <span
  m="4091540">and</span> <span m="4091730">is</span> <span
  m="4091860">related</span> <span m="4092450">to</span> <span
  m="4093590">m</span> <span m="4093960">and,</span> <span
  m="4094260">therefore,</span> <span m="4094670">epsilon.</span> <span
  m="4096010">All right?</span> <span m="4097710">So</span> <span
  m="4098310">what</span> <span m="4098470">I'm</span> <span
  m="4098540">going</span> <span m="4098649">to</span> <span
  m="4098689">do</span> <span m="4098800">here</span> <span
  m="4099130">is,</span> <span m="4099340">I'm</span> <span
  m="4099470">going</span> <span m="4099600">to</span> <span m="4099689">look
  at</span> <span m="4104170">a</span> <span m="4104279">point</span> <span
  m="4104740">in</span> <span m="4104899">time</span> <span
  m="4106229">where</span> <span m="4109911">I have</span> <span m="4110359">A
  and</span> <span m="4110750">B--</span> <span m="4111149">and</span> <span
  m="4111300">remember</span> <span m="4111600">that</span> <span
  m="4112380">w(a)</span> <span m="4112830">is</span> <span
  m="4113660">defined</span> <span m="4114149">to</span> <span
  m="4114229">be</span> <span m="4114340">greater</span> <span
  m="4114600">than</span> <span m="4114750">w(b).</span> <span
  m="4115830">But</span> <span m="4115990">here,</span> <span
  m="4117160">I'm</span> <span m="4117590">looking</span> <span
  m="4117990">at</span> <span m="4118300">some</span> <span
  m="4118529">point</span> <span m="4118880">in</span> <span
  m="4119010">time,</span> <span m="4120350">which</span> <span
  m="4120460">is</span> <span m="4120550">not</span> <span
  m="4120729">necessarily</span> <span m="4122060">at</span> <span
  m="4124149">the</span> <span m="4124430">very</span> <span
  m="4124830">end</span> <span m="4125140">here.</span></p><p><span
  m="4126859">It</span> <span m="4127069">could</span> <span
  m="4127250">be.</span> <span m="4127569">But</span> <span
  m="4127840">you</span> <span m="4127960">can</span> <span
  m="4128050">think</span> <span m="4128200">of</span> <span
  m="4128270">this</span> <span m="4128490">as</span> <span
  m="4128630">being,</span> <span m="4129350">I'm</span> <span
  m="4129470">just</span> <span m="4129590">going</span> <span
  m="4129670">to</span> <span m="4129729">say</span> <span m="4130140">B</span>
  <span m="4130790">or</span> <span m="4132680">intermediate</span> <span
  m="4134240">B.</span> <span m="4135000">And</span> <span
  m="4135149">this</span> <span m="4135439">won't</span> <span
  m="4135630">matter</span> <span m="4135880">too</span> <span
  m="4135990">much.</span> <span m="4136310">But</span> <span
  m="4136800">I'm</span> <span m="4137390">just</span> <span
  m="4137790">being</span> <span m="4137930">a</span> <span
  m="4137979">little</span> <span m="4139060">bit</span> <span
  m="4140800">of</span> <span m="4140870">a</span> <span
  m="4140920">stickler</span> <span m="4141319">here.</span> <span
  m="4142189">I'll</span> <span m="4142410">explain</span> <span
  m="4143170">why</span> <span m="4143399">I</span> <span
  m="4143490">said</span> <span m="4143819">that</span> <span
  m="4143970">in</span> <span m="4144220">just</span> <span m="4144430">a</span>
  <span m="4144470">minute.</span> <span m="4145560">But</span> <span
  m="4145620">the</span> <span m="4145770">point</span> <span
  m="4146069">is,</span> <span m="4146930">I</span> <span
  m="4147050">have</span> <span m="4148700">a</span> <span
  m="4148810">situation</span> <span m="4149420">where</span> <span
  m="4150260">I</span> <span m="4150380">know</span> <span
  m="4150590">that</span> <span m="4150979">w(a)</span> <span
  m="4151220">is</span> <span m="4151439">greater</span> <span
  m="4151640">than</span> <span m="4151790">w(b)</span> <span
  m="4152290">or</span> <span m="4152380">greater</span> <span
  m="4152540">than</span> <span m="4152640">or</span> <span
  m="4152689">equal</span> <span m="4152890">to</span> <span
  m="4152950">w(b)</span> <span m="4153245">because</span> <span
  m="4153540">I</span> <span m="4153630">assumed</span> <span
  m="4153939">it.</span> <span m="4154479">That's</span> <span
  m="4154660">how</span> <span m="4154740">I</span> <span
  m="4154840">marked</span> <span m="4155139">it.</span> <span
  m="4155939">And</span> <span m="4156479">I'm</span> <span
  m="4156590">going</span> <span m="4156729">to</span> <span
  m="4156790">look</span> <span m="4156979">at</span> <span m="4157750">k</span>
  <span m="4159010">is</span> <span m="4159260">the</span> <span
  m="4159460">last</span> <span m="4160600">element</span> <span
  m="4165347">added</span> <span m="4170760">to</span> <span
  m="4171079">A.</span> <span m="4172450">It's</span> <span
  m="4172939">been</span> <span m="4173100">added.</span></p><p><span
  m="4174439">Now</span> <span m="4175140">this</span> <span
  m="4175529">could</span> <span m="4175689">have</span> <span
  m="4175800">been</span> <span m="4175979">added</span> <span
  m="4181899">in</span> <span m="4182080">the</span> <span
  m="4182170">first</span> <span m="4182590">phase</span> <span
  m="4183859">or</span> <span m="4184130">the</span> <span
  m="4184270">second</span> <span m="4184620">phase.</span> <span
  m="4186120">It's</span> <span m="4186250">quite</span> <span
  m="4186660">possible</span> <span m="4188250">that</span> <span
  m="4188630">for</span> <span m="4188830">a</span> <span
  m="4188859">given</span> <span m="4189250">m,</span> <span
  m="4190560">that</span> <span m="4191080">if</span> <span
  m="4191189">it's</span> <span m="4191319">large,</span> <span
  m="4191720">for</span> <span m="4191859">example,</span> <span
  m="4192990">that</span> <span m="4195880">A</span> <span
  m="4196010">prime</span> <span m="4196470">that</span> <span
  m="4196620">you</span> <span m="4196720">end</span> <span
  m="4196930">up</span> <span m="4197080">with</span> <span
  m="4198600">is</span> <span m="4198810">your</span> <span m="4198930">A</span>
  <span m="4199290">to</span> <span m="4199390">begin</span> <span
  m="4199660">with</span> <span m="4199840">here,</span> <span
  m="4200640">and</span> <span m="4200800">that</span> <span
  m="4200920">you</span> <span m="4201010">never</span> <span
  m="4201650">execute</span> <span m="4203390">this</span> <span
  m="4203870">statement</span> <span m="4204990">OK?</span> <span
  m="4205280">It's</span> <span m="4205430">quite</span> <span
  m="4205610">possible,</span> <span m="4206650">right?</span> <span
  m="4207900">You</span> <span m="4208620">got</span> <span
  m="4208840">your</span> <span m="4209490">initial</span> <span
  m="4210150">seed</span> <span m="4210970">and</span> <span
  m="4211320">never</span> <span m="4211400">added</span> <span
  m="4211720">to</span> <span m="4211840">it.</span> <span
  m="4212900">And</span> <span m="4212940">that</span> <span
  m="4213050">was</span> <span m="4213160">it.</span> <span
  m="4213430">Because</span> <span m="4214020">your</span> <span
  m="4214200">m</span> <span m="4214570">was</span> <span
  m="4214730">large,</span> <span m="4215640">for</span> <span
  m="4215790">example,</span> <span m="4216240">right?</span></p><p><span
  m="4216940">So</span> <span m="4217350">what</span> <span
  m="4217510">I'm</span> <span m="4217600">saying</span> <span
  m="4217860">here</span> <span m="4218160">is,</span> <span
  m="4218770">k</span> <span m="4219170">is</span> <span m="4219370">the</span>
  <span m="4219490">last</span> <span m="4220130">element</span> <span
  m="4221090">added</span> <span m="4221400">to</span> <span
  m="4221590">A.</span> <span m="4222550">OK?</span> <span m="4223270">So
  there's</span> <span m="4223420">clearly</span> <span m="4223580">a</span>
  <span m="4223710">last</span> <span m="4223970">element.</span> <span
  m="4224270">I'm</span> <span m="4224360">just</span> <span
  m="4224510">marking</span> <span m="4224800">that.</span> <span
  m="4226100">And</span> <span m="4226880">we</span> <span
  m="4226980">know</span> <span m="4227140">that</span> <span m="4227300">A
  is</span> <span m="4227670">greater</span> <span m="4227870">than</span> <span
  m="4227970">or</span> <span m="4228060">equal</span> <span
  m="4228280">to</span> <span m="4228350">B.</span> <span m="4229136">Now
  it</span> <span m="4229530">may</span> <span m="4229760">be</span> <span
  m="4229910">true</span> <span m="4230210">that</span> <span
  m="4230860">if</span> <span m="4231000">I'm</span> <span
  m="4231110">looking</span> <span m="4231400">at</span> <span
  m="4231490">the</span> <span m="4231570">snapshot</span> <span
  m="4232360">when</span> <span m="4232700">just</span> <span
  m="4233030">after</span> <span m="4233420">I</span> <span
  m="4233490">add</span> <span m="4233870">the</span> <span
  m="4233970">k-th</span> <span m="4234210">element</span> <span
  m="4234620">to</span> <span m="4234680">A,</span> <span m="4235590">I</span>
  <span m="4236360">may</span> <span m="4236700">not</span> <span m="4236800">be
  done</span> <span m="4237130">yet,</span> <span m="4237890">in</span> <span
  m="4238060">terms</span> <span m="4238330">of</span> <span
  m="4238440">I</span> <span m="4238520">still</span> <span
  m="4238750">have</span> <span m="4239040">a</span> <span
  m="4239180">few</span> <span m="4239370">elements.</span> <span
  m="4240200">And</span> <span m="4240340">I</span> <span m="4240450">may</span>
  <span m="4240550">be</span> <span m="4240740">adding</span> <span
  m="4241630">elements</span> <span m="4242050">to</span> <span
  m="4242140">B.</span> <span m="4242910">But</span> <span
  m="4243320">regardless,</span> <span m="4244100">given</span> <span
  m="4244320">my</span> <span m="4244450">definition,</span> <span
  m="4245550">I</span> <span m="4245650">know</span> <span
  m="4245820">that</span> <span m="4247160">the</span> <span
  m="4247230">rate</span> <span m="4247400">of</span> <span m="4247490">B</span>
  <span m="4247660">is</span> <span m="4247780">less</span> <span
  m="4247970">than</span> <span m="4248190">the</span> <span
  m="4248290">rate</span> <span m="4248440">of</span> <span
  m="4248540">A.</span> <span m="4249200">Because</span> <span
  m="4249330">even</span> <span m="4249550">though</span> <span
  m="4250500">the</span> <span m="4250650">last</span> <span
  m="4250940">element</span> <span m="4251880">overall</span> <span
  m="4252870">may be</span> <span m="4253140">added</span> <span
  m="4253520">to</span> <span m="4253860">B,</span> <span
  m="4255660">w(b)</span> <span m="4256230">is</span> <span
  m="4257010">less</span> <span m="4257250">than</span> <span
  m="4258090">w(a),</span> <span m="4258490">and</span> <span
  m="4259490">I'm</span> <span m="4259620">only</span> <span
  m="4259760">looking</span> <span m="4259980">at</span> <span
  m="4260060">the</span> <span m="4260150">last</span> <span
  m="4260410">element</span> <span m="4260780">added</span> <span
  m="4261110">to</span> <span m="4262270">A</span> <span
  m="4262440">here.</span> <span m="4263220">OK?</span></p><p><span
  m="4264570">So</span> <span m="4265520">why</span> <span
  m="4265980">all</span> <span m="4266200">of</span> <span
  m="4266310">this</span> <span m="4268160">skulduggery?</span> <span
  m="4270090">Well,</span> <span m="4273470">there's</span> <span
  m="4273600">a</span> <span m="4273650">method</span> <span
  m="4273990">here</span> <span m="4274230">to</span> <span
  m="4274320">the</span> <span m="4274400">madness.</span> <span
  m="4276300">We're going</span> <span m="4276450">to</span> <span
  m="4276520">analyze</span> <span m="4278050">what</span> <span
  m="4278740">possibly</span> <span m="4279200">happens</span> <span
  m="4279590">in</span> <span m="4279680">the</span> <span
  m="4279780">first</span> <span m="4280180">phase</span> <span
  m="4281170">and</span> <span m="4281320">the</span> <span
  m="4281410">second</span> <span m="4281770">phase,</span> <span
  m="4282680">and</span> <span m="4282990">get</span> <span
  m="4283130">our</span> <span m="4283410">approximation</span> <span
  m="4286340">ratio.</span> <span m="4288802">Shouldn't take</span> <span
  m="4289285">too long.</span></p><p><span m="4299450">So</span> <span
  m="4299550">there's</span> <span m="4300010">two</span> <span
  m="4300200">cases</span> <span m="4300570">here</span> <span
  m="4300730">that</span> <span m="4300860">we</span> <span
  m="4300940">need</span> <span m="4301060">to</span> <span
  m="4301120">analyze.</span> <span m="4302150">The</span> <span
  m="4302290">first</span> <span m="4302480">one</span> <span
  m="4302600">is</span> <span m="4302690">easy.</span> <span m="4303370">The
  second</span> <span m="4303620">one</span> <span m="4303720">is</span> <span
  m="4303790">a</span> <span m="4303850">little</span> <span
  m="4304020">more</span> <span m="4304190">involved.</span> <span
  m="4305250">I'm</span> <span m="4305440">going</span> <span m="4305600">to
  now</span> <span m="4305660">assume</span> <span m="4306360">that</span> <span
  m="4308730">k</span> <span m="4309000">was</span> <span m="4309460">the</span>
  <span m="4309580">last</span> <span m="4309890">element</span> <span
  m="4310240">and</span> <span m="4310360">was</span> <span
  m="4310500">added</span> <span m="4310800">in</span> <span
  m="4310890">the</span> <span m="4310980">first</span> <span
  m="4311500">phase,</span> <span m="4312700">OK?</span> <span
  m="4313620">If</span> <span m="4313850">k</span> <span m="4314110">is</span>
  <span m="4314600">added</span> <span m="4317280">to</span> <span
  m="4317550">A,</span> <span m="4326130">what</span> <span
  m="4326270">can</span> <span m="4326390">I</span> <span
  m="4326450">say?</span> <span m="4327840">If</span> <span m="4328000">k</span>
  <span m="4328200">was</span> <span m="4328390">added</span> <span
  m="4329190">in</span> <span m="4329310">the</span> <span
  m="4329400">first</span> <span m="4329860">phase</span> <span
  m="4330350">to</span> <span m="4330690">A,</span> <span m="4331426">and</span>
  <span m="4332220">that's</span> <span m="4332490">the</span> <span
  m="4332610">last</span> <span m="4333020">element</span> <span
  m="4333460">added</span> <span m="4334480">throughout</span> <span
  m="4335710">the</span> <span m="4336080">algorithm,</span> <span
  m="4337440">by</span> <span m="4337600">the</span> <span
  m="4337710">time</span> <span m="4338000">you</span> <span
  m="4338100">get</span> <span m="4338240">a</span> <span
  m="4338290">partition,</span> <span m="4339270">what can you</span> <span
  m="4339741">say?</span> <span m="4343040">What</span> <span
  m="4343170">can</span> <span m="4343280">you</span> <span
  m="4343350">say</span> <span m="4343510">about</span> <span
  m="4343680">the</span> <span m="4343770">solution?</span> <span
  m="4344220">What</span> <span m="4344400">strong</span> <span
  m="4344890">statement</span> <span m="4345840">can</span> <span
  m="4345980">you</span> <span m="4346060">make</span> <span
  m="4346270">about</span> <span m="4346500">the</span> <span
  m="4346570">solution?</span> <span m="4349960">What's</span> <span
  m="4350130">the</span> <span m="4350220">only</span> <span
  m="4350480">interesting</span> <span m="4351460">strong</span> <span
  m="4351840">statement</span> <span m="4352290">that</span> <span
  m="4352430">you</span> <span m="4352510">can</span> <span
  m="4352620">make</span> <span m="4352810">about</span> <span
  m="4353010">a</span> <span m="4353060">solution?</span></p><p><span
  m="4355770">So</span> <span m="4356100">I</span> <span m="4356920">got</span>
  <span m="4357160">to</span> <span m="4357280">A.</span> <span
  m="4358050">Remember</span> <span m="4358340">what</span> <span
  m="4358490">the</span> <span m="4358850">first</span> <span m="4359100">phase
  is.</span> <span m="4359540">What's</span> <span m="4359750">the</span> <span
  m="4359840">first</span> <span m="4360090">phase?</span> <span
  m="4362240">Well,</span> <span m="4362550">it's</span> <span
  m="4362710">optimal,</span> <span m="4363870">right?</span> <span
  m="4364810">So,</span> <span m="4365980">after</span> <span
  m="4366220">that,</span> <span m="4366690">what</span> <span
  m="4366890">happened</span> <span m="4367110">to</span> <span
  m="4367160">A?</span> <span m="4369120">Well</span> <span
  m="4369260">it</span> <span m="4369350">didn't</span> <span
  m="4369570">change.</span> <span m="4370830">Right?</span> <span
  m="4371630">So,</span> <span m="4372760">what</span> <span
  m="4372900">you</span> <span m="4372970">got</span> <span
  m="4373140">is</span> <span m="4373220">optimum.</span> <span
  m="4374600">Right? Because</span> <span m="4375150">w(a)</span> <span
  m="4375575">was</span> <span m="4376000">defined</span> <span
  m="4376300">to</span> <span m="4376340">be</span> <span
  m="4376430">greater</span> <span m="4376610">than</span> <span
  m="4376690">or</span> <span m="4376750">equal</span> <span
  m="4376910">to</span> <span m="4376980">w(b).</span> <span
  m="4377950">w(a)</span> <span m="4378390">was</span> <span
  m="4378550">optimum</span> <span m="4379040">for</span> <span
  m="4379200">the</span> <span m="4379280">smaller</span> <span
  m="4379680">problem,</span> <span m="4380140">whatever</span> <span
  m="4380470">m</span> <span m="4380700">was.</span> <span
  m="4381460">You</span> <span m="4381590">never</span> <span
  m="4381820">added</span> <span m="4382080">anything</span> <span
  m="4382370">else</span> <span m="4382590">to</span> <span
  m="4382710">it.</span> <span m="4383530">So</span> <span
  m="4383730">you're</span> <span m="4383840">done.</span> <span
  m="4384100">It's</span> <span m="4384240">optimum.</span></p><p><span
  m="4384990">So</span> <span m="4385480">in</span> <span
  m="4385610">this</span> <span m="4385790">case,</span> <span
  m="4386050">your</span> <span m="4386410">approximation</span> <span
  m="4387000">ratio is</span> <span m="4387490">1</span> <span
  m="4388200">because</span> <span m="4388370">you</span> <span
  m="4388450">got</span> <span m="4388630">the</span> <span
  m="4388810">optimum</span> <span m="4389290">solution,</span> <span
  m="4390380">right?</span> <span m="4391140">So</span> <span m="4391310">if
  k</span> <span m="4391610">is</span> <span m="4391790">added</span> <span
  m="4391870">to A</span> <span m="4392090">in</span> <span
  m="4392190">the</span> <span m="4392280">first</span> <span
  m="4392620">place,</span> <span m="4393310">this</span> <span
  m="4393550">means</span> <span m="4396390">A</span> <span
  m="4396770">equals</span> <span m="4397160">A</span> <span
  m="4397290">prime.</span> <span m="4399560">We</span> <span
  m="4399770">have</span> <span m="4402430">an</span> <span
  m="4402850">optimal</span> <span m="4404430">partition.</span> <span
  m="4409350">Since</span> <span m="4411490">we</span> <span
  m="4411680">can't</span> <span m="4412210">do</span> <span
  m="4414120">better</span> <span m="4417080">than</span> <span
  m="4420050">w(a)</span> <span m="4420460">prime</span> <span m="4423650">when
  we</span> <span m="4424140">have</span> <span m="4427580">n</span> <span
  m="4427900">greater</span> <span m="4428140">than</span> <span
  m="4428350">m</span> <span m="4429360">items.</span> <span
  m="4431590">And</span> <span m="4431930">we</span> <span
  m="4432050">know</span> <span m="4434550">w(a)</span> <span
  m="4435060">prime</span> <span m="4437220">is</span> <span
  m="4437430">optimal</span> <span m="4439760">for</span> <span
  m="4439910">the</span> <span m="4440040">m items.</span> <span
  m="4443160">OK?</span></p><p><span m="4444540">So</span> <span
  m="4445240">that's</span> <span m="4445510">cool.</span> <span
  m="4447000">That's</span> <span m="4447190">good.</span> <span
  m="4447700">So</span> <span m="4448120">we</span> <span m="4448440">got</span>
  <span m="4448640">an approximation</span> <span m="4449200">ratio</span> <span
  m="4449750">of</span> <span m="4450280">1</span> <span
  m="4450570">there.</span> <span m="4452640">And</span> <span
  m="4453020">remember</span> <span m="4453410">that,</span> <span
  m="4454390">this</span> <span m="4454690">is</span> <span
  m="4454870">not</span> <span m="4455070">taking</span> <span
  m="4455650">overall</span> <span m="4456170">exponential</span> <span
  m="4456800">time</span> <span m="4457090">necessarily.</span> <span
  m="4458480">It's</span> <span m="4458660">just</span> <span
  m="4458900">a</span> <span m="4458940">case</span> <span
  m="4459920">where</span> <span m="4460530">I've</span> <span
  m="4460650">picked</span> <span m="4461030">some</span> <span
  m="4461290">arbitrary</span> <span m="4461950">m,</span> <span
  m="4463080">and</span> <span m="4463720">it</span> <span
  m="4463840">happens</span> <span m="4464270">to</span> <span
  m="4464360">be</span> <span m="4464470">the</span> <span
  m="4464580">case</span> <span m="4464950">that</span> <span
  m="4465990">A</span> <span m="4466220">equals</span> <span
  m="4466550">A</span> <span m="4466690">prime</span> <span
  m="4467140">at</span> <span m="4467250">the</span> <span
  m="4467310">end</span> <span m="4467560">of</span> <span
  m="4467650">the</span> <span m="4468090">algorithm.</span> <span
  m="4468740">So</span> <span m="4469170">I am</span> <span
  m="4469500">taking</span> <span m="4469810">exponential</span> <span
  m="4470300">time</span> <span m="4470620">in</span> <span
  m="4471180">m--</span> <span m="4472940">m</span> <span m="4473130">as</span>
  <span m="4473220">in</span> <span m="4473330">Mary--</span> <span
  m="4474200">but</span> <span m="4474310">I'm</span> <span
  m="4474400">not</span> <span m="4474710">taking</span> <span
  m="4475010">exponential</span> <span m="4475420">time</span> <span
  m="4476140">in</span> <span m="4476680">n--</span> <span
  m="4477730">right?</span> <span m="4478030">n</span> <span
  m="4478200">as</span> <span m="4478330">in</span> <span
  m="4478380">Nancy.</span></p><p><span m="4481290">So</span> <span
  m="4482130">the</span> <span m="4482270">second</span> <span
  m="4482600">part</span> <span m="4483020">is</span> <span
  m="4483200">where</span> <span m="4483380">the</span> <span
  m="4483480">approximation</span> <span m="4484030">ratio</span> <span
  m="4484420">comes</span> <span m="4484680">in.</span> <span
  m="4487050">k</span> <span m="4487350">is</span> <span
  m="4487850">added</span> <span m="4491940">to A</span> <span m="4493560">in
  the</span> <span m="4494270">second</span> <span m="4494810">phase.</span>
  <span m="4501480">So</span> <span m="4501520">here,</span> <span
  m="4501860">what we're going</span> <span m="4502200">to</span> <span
  m="4502250">do</span> <span m="4502400">is,</span> <span
  m="4502550">we're</span> <span m="4502610">going</span> <span
  m="4502700">to</span> <span m="4502760">say</span> <span m="4503130">we</span>
  <span m="4503250">know</span> <span m="4505160">w(a)</span> <span
  m="4506530">minus</span> <span m="4507480">Sk</span> <span
  m="4508850">is</span> <span m="4509050">less</span> <span
  m="4509280">than</span> <span m="4509390">or</span> <span
  m="4509490">equal</span> <span m="4509800">to</span> <span
  m="4509970">w(b).</span> <span m="4512060">This is</span> <span
  m="4512170">the</span> <span m="4512250">second</span> <span
  m="4512630">phase</span> <span m="4512960">we're</span> <span
  m="4513090">talking</span> <span m="4513370">about</span> <span
  m="4513600">here.</span> <span m="4514640">The only</span> <span
  m="4514970">reason</span> <span m="4515865">Sk</span> <span
  m="4516600">was</span> <span m="4516820">added</span> <span
  m="4517270">to</span> <span m="4517440">A</span> <span m="4518180">was</span>
  <span m="4518550">because</span> <span m="4518890">you</span> <span
  m="4519120">decided</span> <span m="4519600">that</span> <span
  m="4520680">A</span> <span m="4521000">was</span> <span m="4521270">the</span>
  <span m="4521830">side</span> <span m="4522800">that</span> <span
  m="4522960">was</span> <span m="4523060">smaller,</span> <span
  m="4524060">right,</span> <span m="4524250">or</span> <span
  m="4524430">perhaps</span> <span m="4524730">equal.</span> <span
  m="4525590">So</span> <span m="4525690">that's</span> <span
  m="4525890">the</span> <span m="4525970">reason</span> <span
  m="4526190">you</span> <span m="4526280">added</span> <span
  m="4526840">into</span> <span m="4527300">it.</span> <span
  m="4527880">So</span> <span m="4527920">you</span> <span
  m="4528040">know</span> <span m="4528330">that</span> <span
  m="4528725">w(a)</span> <span m="4529120">minus</span> <span
  m="4529470">Sk</span> <span m="4529890">is</span> <span m="4530270">less than
  or</span> <span m="4530400">equal</span> <span m="4530620">to</span> <span
  m="4530700">w(b)</span> <span m="4532080">at</span> <span
  m="4532540">that</span> <span m="4532740">time.</span></p><p><span
  m="4533410">So</span> <span m="4533530">think</span> <span
  m="4533920">of</span> <span m="4534030">A and</span> <span
  m="4534310">B</span> <span m="4534500">here</span> <span m="4535250">as</span>
  <span m="4535540">being</span> <span m="4536020">variables</span> <span
  m="4536630">that are obviously</span> <span m="4537090">changing,</span> <span
  m="4538110">right?</span> <span m="4540200">But</span> <span
  m="4540920">what</span> <span m="4541130">I'm</span> <span
  m="4541230">saying</span> <span m="4541460">here</span> <span
  m="4542450">is,</span> <span m="4543550">even</span> <span
  m="4544350">if</span> <span m="4544440">you</span> <span
  m="4544560">look--</span> <span m="4545410">this</span> <span m="4545580">is
  the</span> <span m="4545720">algorithm</span> <span m="4546140">where</span>
  <span m="4546320">A and</span> <span m="4546580">B,</span> <span
  m="4546920">you</span> <span m="4547060">constantly</span> <span
  m="4547540">look</span> <span m="4547700">at</span> <span
  m="4547760">them</span> <span m="4547910">and</span> <span
  m="4547990">decide</span> <span m="4548320">which</span> <span
  m="4548470">way</span> <span m="4548640">to</span> <span
  m="4548740">go.</span> <span m="4549600">But</span> <span
  m="4549740">if</span> <span m="4549880">you</span> <span
  m="4549980">look</span> <span m="4550150">at</span> <span
  m="4551040">the</span> <span m="4552140">last</span> <span
  m="4552470">step,</span> <span m="4553360">then</span> <span
  m="4553750">you</span> <span m="4553890">look</span> <span
  m="4554040">at</span> <span m="4554120">the</span> <span
  m="4554200">final</span> <span m="4554730">values.</span> <span
  m="4555830">Then</span> <span m="4557170">you</span> <span
  m="4557330">could</span> <span m="4557460">certainly</span> <span
  m="4557690">make</span> <span m="4557850">the</span> <span
  m="4557940">statement</span> <span m="4558370">for those</span> <span
  m="4558630">final</span> <span m="4558910">values,</span> <span
  m="4559750">that</span> <span m="4560760">the</span> <span
  m="4560900">w(a),</span> <span m="4561370">which</span> <span
  m="4561520">is</span> <span m="4561650">the</span> <span
  m="4561760">resultant</span> <span m="4562290">value,</span> <span
  m="4563150">minus</span> <span m="4563510">Sk,</span> <span
  m="4564320">should</span> <span m="4564560">have been</span> <span
  m="4564680">less</span> <span m="4564860">than</span> <span
  m="4564970">or</span> <span m="4564990">equal</span> <span
  m="4565190">to</span> <span m="4565270">w(b).</span> <span
  m="4566500">And</span> <span m="4566910">you</span> <span
  m="4567010">had</span> <span m="4567130">a</span> <span
  m="4567300">smaller</span> <span m="4568050">w(a)</span> <span
  m="4569140">to</span> <span m="4569210">begin</span> <span
  m="4569440">with.</span> <span m="4570560">And</span> <span
  m="4570880">you</span> <span m="4570980">added</span> <span
  m="4571270">Sk</span> <span m="4571590">to</span> <span m="4571720">it.</span>
  <span m="4572300">And</span> <span m="4572690">that</span> <span
  m="4573010">happened</span> <span m="4573310">in</span> <span
  m="4574270">the</span> <span m="4574360">second</span> <span
  m="4574660">phase.</span> <span m="4575500">OK?</span> <span
  m="4576540">So</span> <span m="4576710">this</span> <span
  m="4576910">is</span> <span m="4577040">why</span> <span m="4577315">k</span>
  <span m="4577590">was</span> <span m="4577770">added.</span> <span
  m="4578710">This</span> <span m="4578870">is</span> <span
  m="4579000">why</span> <span m="4581830">k</span> <span m="4582050">was</span>
  <span m="4582220">added</span> <span m="4582530">to</span> <span
  m="4582630">A.</span></p><p><span m="4587750">I</span> <span
  m="4587830">want</span> <span m="4588010">to be a</span> <span
  m="4588050">little</span> <span m="4588280">careful</span> <span
  m="4588580">here</span> <span m="4589280">given</span> <span
  m="4589510">that</span> <span m="4589690">we're</span> <span
  m="4590490">overloading</span> <span m="4591050">A and</span> <span
  m="4591350">B</span> <span m="4591950">without</span> <span
  m="4592170">trying</span> <span m="4592420">to</span> <span
  m="4592460">point</span> <span m="4592800">out</span> <span
  m="4593420">what</span> <span m="4593780">each</span> <span
  m="4593970">of</span> <span m="4594040">these</span> <span
  m="4594190">statements</span> <span m="4594560">actually</span> <span
  m="4594880">means.</span> <span m="4595480">And</span> <span
  m="4596830">ask</span> <span m="4596990">questions</span> <span
  m="4597380">if</span> <span m="4597980">you're</span> <span
  m="4598090">confused.</span> <span m="4600770">I</span> <span
  m="4600900">know</span> <span m="4601160">that</span> <span
  m="4602650">w(a)</span> <span m="4603920">minus</span> <span
  m="4604400">Sk</span> <span m="4605180">is</span> <span
  m="4605380">less</span> <span m="4605580">than</span> <span
  m="4605670">or</span> <span m="4605770">equal</span> <span
  m="4606040">to</span> <span m="4606620">2L</span> <span
  m="4607320">minus</span> <span m="4607510">w(a).</span> <span
  m="4608956">That's</span> <span m="4609440">just</span> <span
  m="4609630">a</span> <span m="4609690">substitution.</span> <span
  m="4610720">Because</span> <span m="4610950">w(a)</span> <span
  m="4611205">plus</span> <span m="4611580">w(b)</span> <span
  m="4612120">equals</span> <span m="4612470">2L.</span></p><p><span
  m="4619740">And</span> <span m="4621830">then,</span> <span
  m="4623130">last</span> <span m="4623610">little trick,</span> <span
  m="4624020">again</span> <span m="4624230">it's</span> <span
  m="4624760">algebra.</span> <span m="4625290">Nothing</span> <span
  m="4625530">profound</span> <span m="4625920">here.</span> <span
  m="4627280">We</span> <span m="4627710">have</span> <span
  m="4627910">our</span> <span m="4628040">assumption</span> <span
  m="4628500">that</span> <span m="4628660">we</span> <span
  m="4628790">ordered</span> <span m="4629170">these</span> <span
  m="4629390">things.</span> <span m="4631330">So</span> <span
  m="4631560">you</span> <span m="4631660">had</span> <span
  m="4631920">S1</span> <span m="4632420">through--</span> <span
  m="4633380">Sn,</span> <span m="4633780">excuse me.</span> <span
  m="4634390">The whole</span> <span m="4634670">thing</span> <span
  m="4635030">was</span> <span m="4635180">ordered.</span> <span
  m="4637040">And</span> <span m="4637210">so</span> <span m="4638090">we</span>
  <span m="4638300">can</span> <span m="4638440">say</span> <span
  m="4642060">that</span> <span m="4644210">S1,</span> <span
  m="4645390">S2,</span> <span m="4645810">all</span> <span
  m="4645960">the</span> <span m="4646070">way</span> <span
  m="4646200">to</span> <span m="4646380">Sm,</span> <span m="4647750">is</span>
  <span m="4648010">greater</span> <span m="4648220">than</span> <span
  m="4648350">or</span> <span m="4648460">equal</span> <span
  m="4648710">to</span> <span m="4648780">Sk.</span> <span m="4650690">We</span>
  <span m="4650830">are</span> <span m="4650970">actually</span> <span
  m="4651290">doing</span> <span m="4651520">this</span> <span
  m="4651940">in</span> <span m="4652110">order.</span> <span m="4652740">We
  are</span> <span m="4652830">taking</span> <span m="4653080">the</span> <span
  m="4653190">bigger</span> <span m="4653970">elements</span> <span
  m="4654440">and then</span> <span m="4654660">deciding</span> <span
  m="4655040">where</span> <span m="4655170">they</span> <span
  m="4655310">go.</span> <span m="4656150">So</span> <span m="4656270">we</span>
  <span m="4656370">sorted</span> <span m="4656730">those</span> <span
  m="4656930">things</span> <span m="4657630">initially.</span> <span
  m="4658460">And</span> <span m="4658700">so</span> <span
  m="4659310">what</span> <span m="4659530">we</span> <span
  m="4659670">end</span> <span m="4659830">up</span> <span
  m="4659970">with</span> <span m="4660330">when</span> <span
  m="4660540">we</span> <span m="4660630">look</span> <span
  m="4660780">at</span> <span m="4660910">Sk,</span> <span m="4661830">we
  have</span> <span m="4662090">taken</span> <span m="4662400">care</span> <span
  m="4662750">of</span> <span m="4663280">values</span> <span
  m="4663860">prior</span> <span m="4664270">to</span> <span
  m="4664360">Sk</span> <span m="4665250">that</span> <span
  m="4665370">are</span> <span m="4665440">all</span> <span
  m="4665750">greater</span> <span m="4665970">than</span> <span
  m="4666080">or</span> <span m="4666200">equal</span> <span
  m="4666530">to</span> <span m="4666620">Sk.</span> <span
  m="4667570">Right?</span> <span m="4667990">That's,</span> <span
  m="4668900">again,</span> <span m="4669280">using</span> <span
  m="4669690">our</span> <span m="4670440">initial</span> <span
  m="4670810">assumption.</span></p><p><span m="4672080">So</span> <span
  m="4672570">what</span> <span m="4672730">that</span> <span
  m="4672910">means</span> <span m="4673200">is</span> <span
  m="4674350">2L</span> <span m="4675920">is</span> <span
  m="4676120">greater</span> <span m="4676340">than</span> <span
  m="4676460">or</span> <span m="4676550">equal</span> <span
  m="4676880">to</span> <span m="4678600">m</span> <span m="4678870">plus</span>
  <span m="4679100">1</span> <span m="4680500">Sk</span> <span
  m="4682010">since</span> <span m="4683360">k</span> <span
  m="4683640">is</span> <span m="4683790">greater</span> <span
  m="4683980">than</span> <span m="4684160">m.</span> <span
  m="4685950">Again,</span> <span m="4686190">this</span> <span
  m="4686320">is</span> <span m="4686440">not</span> <span
  m="4686820">particularly</span> <span m="4687370">tight.</span> <span
  m="4688650">Because</span> <span m="4688870">m</span> <span
  m="4689090">could</span> <span m="4689220">be</span> <span
  m="4690290">really</span> <span m="4690510">pretty</span> <span
  m="4690720">small</span> <span m="4691150">in</span> <span
  m="4691230">relation</span> <span m="4691620">to</span> <span
  m="4691730">n.</span> <span m="4692430">But</span> <span m="4692560">I</span>
  <span m="4692620">do</span> <span m="4692830">know</span> <span
  m="4693040">that</span> <span m="4693160">I</span> <span
  m="4693210">can</span> <span m="4693340">make</span> <span
  m="4693510">the</span> <span m="4693590">statement</span> <span
  m="4694080">that</span> <span m="4695510">since</span> <span
  m="4695750">the</span> <span m="4695840">values</span> <span
  m="4696300">are</span> <span m="4696940">decreasing,</span> <span
  m="4697980">that</span> <span m="4698450">2L,</span> <span
  m="4699160">which</span> <span m="4699320">is</span> <span
  m="4699430">the</span> <span m="4699510">sum</span> <span
  m="4699780">of</span> <span m="4699890">all</span> <span m="4700120">of</span>
  <span m="4700200">those,</span> <span m="4700920">is</span> <span
  m="4701120">greater</span> <span m="4701310">than</span> <span
  m="4701450">or</span> <span m="4701470">equal</span> <span
  m="4701710">to</span> <span m="4701840">m</span> <span m="4702060">plus</span>
  <span m="4702280">1</span> <span m="4702600">times</span> <span
  m="4702890">Sk,</span> <span m="4703600">regardless</span> <span
  m="4704100">of</span> <span m="4704180">what</span> <span m="4704350">m</span>
  <span m="4704520">is.</span> <span m="4705510">Right?</span> <span
  m="4706580">And</span> <span m="4706830">so,</span> <span
  m="4707480">that's</span> <span m="4707750">pretty</span> <span
  m="4708060">much</span> <span m="4708220">it.</span> <span
  m="4709250">Once</span> <span m="4709450">you</span> <span
  m="4709570">do</span> <span m="4709680">that,</span> <span
  m="4709880">you</span> <span m="4709970">have</span> <span
  m="4710150">your</span> <span m="4710960">approximation</span> <span
  m="4712840">ratio.</span> <span m="4714640">Let's</span> <span
  m="4715020">leave</span> <span m="4715240">that</span> <span
  m="4715370">up</span> <span m="4715500">there</span> <span
  m="4715750">because</span> <span m="4716050">that's</span> <span
  m="4716310">the</span> <span m="4716430">algorithm.</span> <span
  m="4717670">Finish</span> <span m="4718160">this off</span> <span
  m="4721678">with a little</span> <span m="4722171">algebra.</span></p><p><span
  m="4732050">So</span> <span m="4732370">w(a)</span> <span
  m="4734510">divided</span> <span m="4734860">by</span> <span
  m="4735070">L</span> <span m="4736160">is</span> <span m="4736360">less</span>
  <span m="4736570">than</span> <span m="4736690">or</span> <span
  m="4736780">equal</span> <span m="4737050">to</span> <span m="4737220">L
  plus</span> <span m="4738980">Sk</span> <span m="4739440">divided</span> <span
  m="4739750">by</span> <span m="4739900">2,</span> <span
  m="4740940">divided</span> <span m="4741250">by</span> <span
  m="4741400">L.</span> <span m="4742330">I'm</span> <span
  m="4742640">basically</span> <span m="4743060">substituting.</span> <span
  m="4743990">I</span> <span m="4744090">have</span> <span
  m="4744310">this</span> <span m="4744700">and</span> <span
  m="4744840">I</span> <span m="4744880">have</span> <span
  m="4745090">that.</span> <span m="4745900">And</span> <span
  m="4746330">I'm</span> <span m="4746430">playing</span> <span
  m="4746710">around</span> <span m="4746960">with</span> <span
  m="4747150">it.</span> <span m="4748900">And</span> <span m="4750110">I</span>
  <span m="4750240">got</span> <span m="4750600">1</span> <span
  m="4750930">plus</span> <span m="4752010">Sk</span> <span
  m="4753550">divided</span> <span m="4753930">by--</span> <span
  m="4756600">1</span> <span m="4756930">plus</span> <span m="4757060">Sk</span>
  <span m="4757490">divided</span> <span m="4757920">by</span> <span
  m="4758070">2L,</span> <span m="4761110">which</span> <span
  m="4761400">is--</span> <span m="4763230">now</span> <span
  m="4763340">this</span> <span m="4763530">I</span> <span
  m="4763590">could</span> <span m="4763730">say</span> <span
  m="4763890">is</span> <span m="4764010">equal.</span> <span
  m="4765720">That's</span> <span m="4765990">simply</span> <span
  m="4766240">equal.</span> <span m="4767270">This,</span> <span
  m="4767570">I</span> <span m="4767670">have</span> <span m="4767830">a</span>
  <span m="4767870">less</span> <span m="4768060">than</span> <span
  m="4768150">or</span> <span m="4768230">equal</span> <span
  m="4768490">to.</span> <span m="4769140">And</span> <span
  m="4769260">then</span> <span m="4769370">I</span> <span
  m="4769430">can</span> <span m="4769580">go</span> <span
  m="4769800">less</span> <span m="4770030">than</span> <span
  m="4770120">or</span> <span m="4770210">equal</span> <span
  m="4770510">to</span> <span m="4771180">1</span> <span m="4771430">plus</span>
  <span m="4771690">Sk</span> <span m="4773200">divided</span> <span
  m="4773560">by</span> <span m="4774600">m</span> <span m="4774850">plus</span>
  <span m="4775100">1</span> <span m="4776540">Sk.</span> <span
  m="4777830">And</span> <span m="4777990">then</span> <span
  m="4779070">I</span> <span m="4779180">got</span> <span m="4779770">1</span>
  <span m="4781330">plus</span> <span m="4781510">1</span> <span
  m="4782320">divided</span> <span m="4782640">by</span> <span
  m="4782780">m</span> <span m="4782990">plus</span> <span m="4783220">1,</span>
  <span m="4784340">which</span> <span m="4784570">is,</span> <span
  m="4784680">of</span> <span m="4784770">course,</span> <span
  m="4786790">1</span> <span m="4787030">plus epsilon.</span></p><p><span
  m="4789180">So</span> <span m="4789480">all</span> <span m="4789780">I</span>
  <span m="4789840">did</span> <span m="4790020">here</span> <span
  m="4790310">was</span> <span m="4791080">use</span> <span
  m="4791400">this</span> <span m="4791640">fact</span> <span
  m="4792470">and</span> <span m="4793540">essentially</span> <span
  m="4793970">relate</span> <span m="4794400">2L</span> <span
  m="4794675">to</span> <span m="4794950">Sk.</span> <span
  m="4795800">And</span> <span m="4795940">once</span> <span
  m="4796130">I</span> <span m="4796170">could</span> <span
  m="4796320">relate</span> <span m="4796620">2L</span> <span
  m="4796890">to</span> <span m="4797050">Sk,</span> <span
  m="4798250">substituting</span> <span m="4799800">for</span> <span
  m="4801410">Sk</span> <span m="4803200">in</span> <span
  m="4803910">here,</span> <span m="4805200">I</span> <span
  m="4805850">ended</span> <span m="4806120">up</span> <span
  m="4806280">with</span> <span m="4807140">the</span> <span
  m="4807340">approximation</span> <span m="4807880">ratio</span> <span
  m="4808220">that</span> <span m="4808340">I</span> <span
  m="4808390">want,</span> <span m="4808690">w(a)</span> <span
  m="4809570">over</span> <span m="4809830">L,</span> <span
  m="4810370">is</span> <span m="4810530">L</span> <span m="4810720">plus</span>
  <span m="4810920">Sk</span> <span m="4811240">divided</span> <span
  m="4811540">by</span> <span m="4811670">2.</span> <span
  m="4812490">That</span> <span m="4812700">simply</span> <span
  m="4812940">comes</span> <span m="4813150">from</span> <span
  m="4813310">here.</span> <span m="4815190">And</span> <span
  m="4815750">plug</span> <span m="4815970">that</span> <span
  m="4816110">in,</span> <span m="4817140">divided</span> <span
  m="4817440">by</span> <span m="4817570">L.</span> <span m="4818320">And</span>
  <span m="4818460">then</span> <span m="4819060">I</span> <span
  m="4819160">have</span> <span m="4819910">Sk</span> <span
  m="4820250">divided</span> <span m="4820520">by</span> <span
  m="4820640">2L.</span> <span m="4821370">And</span> <span
  m="4821510">then</span> <span m="4821590">this</span> <span
  m="4821770">part</span> <span m="4822000">here,</span> <span
  m="4822340">2L</span> <span m="4823430">is</span> <span
  m="4823630">going</span> <span m="4823850">to</span> <span
  m="4824750">get</span> <span m="4824910">substituted</span> <span
  m="4825480">by</span> <span m="4825760">m</span> <span m="4825940">plus</span>
  <span m="4826160">1</span> <span m="4826490">Sk</span> <span
  m="4827390">and</span> <span m="4828630">voila.</span> <span
  m="4829580">I'm</span> <span m="4829760">over</span> <span
  m="4829900">here.</span> <span m="4830780">OK?</span></p><p><span
  m="4831640">So</span> <span m="4832640">the</span> <span
  m="4832730">story</span> <span m="4833060">behind</span> <span
  m="4834100">this</span> <span m="4835060">particular</span> <span
  m="4837480">problem</span> <span m="4837870">was</span> <span
  m="4838370">it</span> <span m="4838510">was in</span> <span
  m="4838820">the</span> <span m="4838870">quiz.</span> <span
  m="4839840">And</span> <span m="4840300">Eric,</span> <span
  m="4840680">I</span> <span m="4840800">guess</span> <span
  m="4841030">took</span> <span m="4841230">the</span> <span
  m="4841340">quiz.</span> <span m="4842185">Did</span> <span
  m="4842470">you</span> <span m="4842640">actually</span> <span
  m="4842870">take</span> <span m="4843110">the</span> <span
  m="4843190">quiz?</span> <span m="4844010">Or</span> <span
  m="4844160">edit</span> <span m="4844440">the</span> <span
  m="4844530">quiz?</span> <span m="4845430">And</span> <span
  m="4845560">he</span> <span m="4845660">says,</span> <span
  m="4845900">this</span> <span m="4846100">problem</span> <span
  m="4846440">is</span> <span m="4846520">impossible.</span> <span
  m="4849330">It</span> <span m="4849460">was</span> <span m="4850060">a</span>
  <span m="4850110">problem.</span> <span m="4850400">He</span> <span
  m="4850490">said,</span> <span m="4850660">this</span> <span
  m="4850780">problem</span> <span m="4851040">is</span> <span
  m="4851110">impossible.</span> <span m="4852100">I</span> <span
  m="4852330">had</span> <span m="4852480">to</span> <span
  m="4852770">Google</span> <span m="4853060">it</span> <span
  m="4853350">to</span> <span m="4853470">find</span> <span
  m="4853720">out</span> <span m="4853860">the</span> <span
  m="4853940">answer.</span> <span m="4855090">Or</span> <span
  m="4855230">something</span> <span m="4855470">like</span> <span
  m="4855660">that.</span> <span m="4856250">And</span> <span
  m="4856270">I</span> <span m="4856330">said,</span> <span
  m="4856710">well,</span> <span m="4856880">I'm</span> <span
  m="4856920">going</span> <span m="4857040">to</span> <span
  m="4857100">give</span> <span m="4857380">the</span> <span
  m="4857470">answer</span> <span m="4857830">in</span> <span
  m="4857900">lecture,</span> <span m="4859110">right?</span> <span
  m="4859600">So</span> <span m="4859740">there</span> <span
  m="4859840">you</span> <span m="4859950">go.</span> <span
  m="4860840">So</span> <span m="4861000">remember</span> <span
  m="4861310">this.</span> <span m="4861710">Write</span> <span
  m="4861850">it</span> <span m="4861950">down.</span> <span
  m="4862520">Four</span> <span m="4862800">points</span> <span
  m="4863370">for</span> <span m="4863500">coming</span> <span m="4863710">to
  lecture</span> <span m="4864090">today.</span> <span m="4865690">See</span>
  <span m="4865880">you</span> <span m="4865940">guys</span> <span
  m="4866240">next time.</span></p>
uid: 1f087eebe86fabc3eb50a5f47537e8e6
type: courses
layout: video
---
