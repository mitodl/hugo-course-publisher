---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine introduces
  the van Emde Boas Tree data structure and its uses.</p><p><strong>Instructors:
  </strong>Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: hmReJCupbNU
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 652e2c46ec127c799e17f36e9ef7ea3e
  - id: hmReJCupbNU.srt
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-4-divide-conquer-van-emde-boas-trees/hmReJCupbNU.srt
    title: 3play caption file
    type: null
    uid: 424d869ef72417ac2a4f48647c740171
  - id: hmReJCupbNU.pdf
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-4-divide-conquer-van-emde-boas-trees/hmReJCupbNU.pdf
    title: 3play pdf file
    type: null
    uid: 2afff3384e87750b2a409296d47f7891
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 60599dcf707f28ef244f0869a7c82d46
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c2047b5550ab6509fcc0050a3991caa5
  - id: Video-YouTube-Stream
    media_location: hmReJCupbNU
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: Video-YouTube-Stream
    type: Video
    uid: 994307c9327c4512903ad8492b7a7ecf
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/hmReJCupbNU/default.jpg'
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 847ada533a2bd2ff1e49cbba29711e77
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: Video-iTunes U-MP4
    type: Video
    uid: 2b79402136f600401c6a69ee6f10545f
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec04_300k.mp4'
    parent_uid: ee3a8f82c04e8d311c7b102978bd78a9
    title: Video-Internet Archive-MP4
    type: Video
    uid: 40284469dbb954f96f296782069d2fe5
inline_embed_id: '64379674lecture4:divide&conquer:vanemdeboastrees33657709'
order_index: 137
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-4-divide-conquer-van-emde-boas-trees
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-4-divide-conquer-van-emde-boas-trees
title: 'Lecture 4: Divide & Conquer: van Emde Boas Trees'
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
  m="12800">materials</span> <span m="13340">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15560">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21440">PROFESSOR: All</span> <span m="21540">right.</span> <span
  m="21790">Welcome</span> <span m="22130">back</span> <span m="22440">to</span>
  <span m="22700">6046.</span></p><p><span m="23780">AUDIENCE:
  Woohoo.</span></p><p><span m="24780">PROFESSOR: Are</span> <span
  m="24900">you</span> <span m="25060">guys</span> <span m="25360">ready</span>
  <span m="25640">to</span> <span m="25750">learn</span> <span
  m="26010">an</span> <span m="26140">awesome</span> <span m="26590">data</span>
  <span m="26860">structure?</span></p><p><span m="27440">AUDIENCE:
  Woohoo.</span></p><p><span m="28316">PROFESSOR: Yeah,</span> <span
  m="29630">let's</span> <span m="29830">do</span> <span m="30000">it.</span>
  <span m="31120">This</span> <span m="31370">is</span> <span m="31430">a</span>
  <span m="31530">data</span> <span m="31750">structure</span> <span
  m="32119">named</span> <span m="32369">after</span> <span m="32920">a</span>
  <span m="33020">human</span> <span m="33310">being,</span> <span
  m="34360">Peter</span> <span m="34730">van Emde</span> <span
  m="35060">Boas.</span> <span m="36640">I</span> <span m="36780">was</span>
  <span m="36950">just</span> <span m="37680">corresponding</span> <span
  m="38160">with</span> <span m="38300">him</span> <span
  m="38700">yesterday.</span> <span m="40390">And</span> <span
  m="40670">he,</span> <span m="41020">in</span> <span m="41250">the</span>
  <span m="41390">'70s,</span> <span m="42050">he</span> <span
  m="42150">invented</span> <span m="42550">this</span> <span
  m="42720">really</span> <span m="43040">cool</span> <span
  m="43240">data</span> <span m="43450">structure.</span> <span
  m="43880">Its</span> <span m="44120">super</span> <span m="44525">fast</span>
  <span m="44930">It's amazing.</span></p><p><span m="46130">It's</span> <span
  m="46360">actually</span> <span m="46790">pretty</span> <span
  m="47070">simple</span> <span m="47710">to</span> <span
  m="47810">implement.</span> <span m="48300">And</span> <span
  m="48460">it's</span> <span m="48580">used</span> <span m="48770">a</span>
  <span m="48830">lot,</span> <span m="49130">in</span> <span
  m="49270">practice,</span> <span m="50280">in</span> <span
  m="50570">network</span> <span m="50930">routers,</span> <span
  m="51390">among</span> <span m="51700">other</span> <span
  m="51890">things.</span> <span m="53230">And</span> <span
  m="53580">we're</span> <span m="53740">going</span> <span m="53880">to</span>
  <span m="54190">cover it</span> <span m="54540">today.</span> <span
  m="54830">So</span> <span m="55040">let</span> <span m="55180">me</span> <span
  m="55290">first</span> <span m="55590">tell</span> <span m="55730">you</span>
  <span m="55920">what</span> <span m="56750">it</span> <span
  m="56920">does.</span></p><p><span m="58730">So</span> <span
  m="59170">it's</span> <span m="59390">an</span> <span m="59500">old</span>
  <span m="59710">data</span> <span m="59950">structure.</span> <span
  m="60290">But</span> <span m="60430">I</span> <span m="60490">feel</span>
  <span m="60670">like</span> <span m="60830">it's</span> <span
  m="61070">taken</span> <span m="61370">us</span> <span
  m="61560">decades</span> <span m="62050">to</span> <span
  m="62200">really</span> <span m="62770">understand.</span></p><p><span
  m="63230">Question.</span></p><p><span m="63610">AUDIENCE: You're</span> <span
  m="64087">mic's not</span> <span m="64564">on.</span></p><p><span
  m="65519">PROFESSOR: In</span> <span m="65710">what</span> <span
  m="65930">sense?</span> <span m="67870">It's</span> <span m="68120">not</span>
  <span m="68380">amplified.</span> <span m="69190">It's</span> <span
  m="69460">just</span> <span m="69640">for</span> <span m="69710">the</span>
  <span m="69810">cameras.</span></p><p><span m="71490">So</span> <span
  m="74200">it's</span> <span m="74420">taken</span> <span m="74630">us</span>
  <span m="74790">decades,</span> <span m="75250">really,</span> <span
  m="75410">to</span> <span m="75520">understand</span> <span
  m="76330">this</span> <span m="76520">data</span> <span
  m="76730">structure,</span> <span m="77240">exactly</span> <span
  m="77640">how</span> <span m="77840">it</span> <span m="77880">works</span>
  <span m="78270">and</span> <span m="78450">why</span> <span
  m="78660">it's</span> <span m="78790">useful.</span> <span
  m="81530">The</span> <span m="81620">problem it's</span> <span
  m="82090">solving</span> <span m="83500">is</span> <span m="84550">what</span>
  <span m="84790">you</span> <span m="84880">might</span> <span
  m="85080">call</span> <span m="85400">a</span> <span
  m="86990">predecessor</span> <span m="87900">problem.</span> <span
  m="88560">It's</span> <span m="88720">very</span> <span
  m="88990">similar</span> <span m="89410">to</span> <span m="89530">the</span>
  <span m="89650">sort</span> <span m="89860">of</span> <span
  m="90300">problem</span> <span m="90760">that</span> <span
  m="91190">binary</span> <span m="91460">search</span> <span
  m="91770">trees</span> <span m="91960">solve.</span> <span
  m="92310">But</span> <span m="92470">we're</span> <span m="92590">going</span>
  <span m="92710">to</span> <span m="92800">do</span> <span m="92950">it</span>
  <span m="93210">faster,</span> <span m="95810">but</span> <span
  m="96090">in</span> <span m="96220">a</span> <span m="96300">somewhat</span>
  <span m="96620">different</span> <span m="96910">model,</span> <span
  m="98460">in that</span> <span m="98650">the</span> <span
  m="98970">elements</span> <span m="99440">we're</span> <span
  m="99680">going</span> <span m="99920">to</span> <span m="99980">be</span>
  <span m="100110">storing</span> <span m="101320">are</span> <span
  m="103210">not</span> <span m="103510">just</span> <span
  m="103750">things</span> <span m="104000">that</span> <span
  m="104110">we</span> <span m="104230">know</span> <span m="104350">how</span>
  <span m="104460">to</span> <span m="104570">compare.</span></p><p><span
  m="105030">That</span> <span m="105180">would</span> <span
  m="105260">be</span> <span m="105360">the</span> <span
  m="105450">comparison</span> <span m="105920">model.</span> <span
  m="106580">We're</span> <span m="106720">storing</span> <span
  m="107140">integers.</span> <span m="108250">And the</span> <span
  m="108560">integers</span> <span m="109030">come</span> <span
  m="109190">from</span> <span m="109330">a</span> <span
  m="109420">universe,</span> <span m="109685">U,</span> <span
  m="110880">of</span> <span m="111010">size</span> <span
  m="111880">little</span> <span m="112110">u.</span> <span
  m="113220">And</span> <span m="113300">we'll</span> <span
  m="113500">assume</span> <span m="113800">that</span> <span
  m="113940">they're</span> <span m="114060">non-negative,</span> <span
  m="114650">so</span> <span m="115270">from</span> <span m="115460">0</span>
  <span m="115770">to</span> <span m="115830">u</span> <span
  m="115970">minus</span> <span m="116230">1.</span> <span
  m="116410">Although</span> <span m="116570">you</span> <span
  m="116740">could</span> <span m="117330">support</span> <span
  m="117670">negative</span> <span m="118030">integers</span> <span
  m="118450">without</span> <span m="118790">much</span> <span
  m="118990">more</span> <span m="119240">effort.</span></p><p><span
  m="120730">And</span> <span m="121030">the</span> <span
  m="121140">operations</span> <span m="121690">we</span> <span
  m="121780">want</span> <span m="121960">to</span> <span
  m="122040">support,</span> <span m="123860">we're</span> <span
  m="124030">storing</span> <span m="124270">a</span> <span
  m="124330">set</span> <span m="124630">of</span> <span m="124740">n</span>
  <span m="124930">of</span> <span m="124990">those</span> <span
  m="125170">elements.</span> <span m="126430">We</span> <span
  m="126580">want</span> <span m="126830">to</span> <span m="126920">do</span>
  <span m="127990">insert,</span> <span m="130139">delete,</span> <span
  m="133400">and</span> <span m="133840">successor.</span> <span
  m="140230">So</span> <span m="140940">these</span> <span m="141200">are</span>
  <span m="141270">operations</span> <span m="141680">you</span> <span
  m="141770">should</span> <span m="141970">be</span> <span
  m="142080">familiar</span> <span m="142470">with.</span> <span
  m="142700">You</span> <span m="142780">should</span> <span
  m="142980">know</span> <span m="143110">how</span> <span m="143230">to</span>
  <span m="143300">solve</span> <span m="143610">these</span> <span
  m="143790">in</span> <span m="143890">log</span> <span m="143990">n</span>
  <span m="144360">time</span> <span m="144750">per</span> <span
  m="144900">operation</span> <span m="145430">with</span> <span
  m="145580">a</span> <span m="145630">balanced</span> <span
  m="145980">binary</span> <span m="146210">search</span> <span
  m="146460">tree,</span> <span m="146640">like</span> <span
  m="147060">AVL</span> <span m="147150">trees.</span></p><p><span
  m="147550">You</span> <span m="147830">want</span> <span m="147960">to</span>
  <span m="148000">add</span> <span m="148240">something</span> <span
  m="148550">to</span> <span m="148640">the</span> <span m="148750">set,</span>
  <span m="149040">delete</span> <span m="149290">something</span> <span
  m="149610">from</span> <span m="149750">the</span> <span
  m="149860">set,</span> <span m="150550">or</span> <span
  m="151390">given</span> <span m="152420">a</span> <span
  m="152510">value</span> <span m="153070">I</span> <span m="153190">want</span>
  <span m="153490">to</span> <span m="153610">know</span> <span
  m="153960">the</span> <span m="154250">next</span> <span
  m="154640">largest</span> <span m="155040">value</span> <span
  m="155400">that</span> <span m="155540">is</span> <span m="155710">in</span>
  <span m="155890">the</span> <span m="155990">set.</span> <span
  m="158730">So</span> <span m="159710">if</span> <span m="159920">you</span>
  <span m="160020">draw</span> <span m="160310">that</span> <span
  m="161950">as</span> <span m="162230">a</span> <span m="162330">one</span>
  <span m="162540">dimensional</span> <span m="163130">thing,</span> <span
  m="163790">you've</span> <span m="163930">got</span> <span
  m="164220">some</span> <span m="164600">items</span> <span
  m="165060">which</span> <span m="165320">are</span> <span m="165470">in</span>
  <span m="165680">your</span> <span m="165860">set.</span> <span
  m="168210">And</span> <span m="168650">then,</span> <span
  m="169090">you</span> <span m="169540">have</span> <span m="169740">a</span>
  <span m="169800">query.</span> <span m="172870">So</span> <span
  m="172980">you</span> <span m="173220">ask</span> <span m="173430">for</span>
  <span m="173510">the</span> <span m="173620">successor</span> <span
  m="174360">of</span> <span m="174620">this</span> <span
  m="174840">value.</span></p><p><span m="176130">Then</span> <span
  m="176280">you're</span> <span m="176440">asking</span> <span
  m="176860">for,</span> <span m="177090">what</span> <span m="177320">is</span>
  <span m="177510">the</span> <span m="177680">next</span> <span
  m="179010">value</span> <span m="179340">that's</span> <span
  m="179540">in</span> <span m="179630">the</span> <span m="179730">set?</span>
  <span m="180010">So</span> <span m="180120">you</span> <span
  m="180240">want</span> <span m="180360">to</span> <span
  m="180420">return</span> <span m="181280">this</span> <span
  m="181530">item.</span> <span m="182980">OK,</span> <span
  m="183050">predecessor</span> <span m="183730">would</span> <span
  m="183870">be</span> <span m="183980">the</span> <span
  m="184070">symmetric</span> <span m="184530">thing.</span> <span
  m="184730">But</span> <span m="184880">if</span> <span m="184990">you</span>
  <span m="185090">could</span> <span m="185240">solve</span> <span
  m="185540">successor,</span> <span m="186110">you</span> <span
  m="186260">could</span> <span m="186440">usually</span> <span
  m="186760">solve</span> <span m="187080">predecessor.</span> <span
  m="188280">So</span> <span m="188420">we'll</span> <span
  m="188560">focus</span> <span m="188940">on</span> <span
  m="189080">these</span> <span m="189270">three</span> <span
  m="189450">operations,</span> <span m="190030">although,</span> <span
  m="190950">in</span> <span m="191090">the</span> <span
  m="191170">textbook,</span> <span m="191690">you'll</span> <span
  m="191700">see</span> <span m="191840">there</span> <span
  m="191940">are</span> <span m="191990">lots</span> <span m="192270">of</span>
  <span m="192380">operations</span> <span m="192860">you</span> <span
  m="193000">could</span> <span m="193230">do</span> <span
  m="193950">with</span> <span m="194070">van Emde</span> <span
  m="194230">Boas.</span></p><p><span m="195740">So</span> <span
  m="195920">far</span> <span m="196100">so</span> <span m="196280">good.</span>
  <span m="197110">We</span> <span m="197240">know</span> <span
  m="197370">how</span> <span m="197520">to</span> <span m="197640">do</span>
  <span m="197770">this</span> <span m="198060">in</span> <span
  m="198280">log</span> <span m="198630">n</span> <span m="198770">time.</span>
  <span m="199570">We</span> <span m="199770">are</span> <span
  m="199840">going</span> <span m="200060">to</span> <span m="200180">do</span>
  <span m="200400">it</span> <span m="200680">in</span> <span
  m="203000">log</span> <span m="204170">log</span> <span m="205260">u</span>
  <span m="205540">time.</span> <span m="207750">Woah,</span> <span
  m="209140">amazing.</span> <span m="210230">So</span> <span
  m="210440">an</span> <span m="210510">extra</span> <span
  m="210830">log,</span> <span m="211880">but</span> <span
  m="212050">we're</span> <span m="212710">cheating</span> <span
  m="213020">a</span> <span m="213080">little</span> <span
  m="213350">bit,</span> <span m="213540">in that</span> <span
  m="213720">we're</span> <span m="213940">replacing</span> <span
  m="214520">n</span> <span m="214760">with</span> <span
  m="214930">u.</span></p><p><span m="215840">Now</span> <span
  m="216070">in</span> <span m="216230">a</span> <span m="216290">lot</span>
  <span m="216540">of</span> <span m="216670">applications,</span> <span
  m="217300">u</span> <span m="217710">is</span> <span m="218370">pretty</span>
  <span m="218630">reasonable,</span> <span m="219230">like</span> <span
  m="219630">2 to</span> <span m="219880">the</span> <span m="219990">32</span>
  <span m="220310">or</span> <span m="220630">2 to</span> <span
  m="220760">the</span> <span m="221030">64,</span> <span m="222200">depending
  on</span> <span m="222470">what</span> <span m="222590">kind</span> <span
  m="222760">of</span> <span m="222840">integers</span> <span m="223190">you 
  usually</span> <span m="223630">work</span> <span m="223880">with.</span>
  <span m="224620">So</span> <span m="224800">log</span> <span
  m="225130">log</span> <span m="225350">of</span> <span m="225420">that</span>
  <span m="225700">is</span> <span m="225840">usually</span> <span
  m="226200">really</span> <span m="226530">tiny,</span> <span
  m="226960">and</span> <span m="227070">often</span> <span
  m="227410">smaller</span> <span m="227830">than</span> <span
  m="228010">log</span> <span m="228280">n.</span></p><p><span
  m="229630">So</span> <span m="229960">in</span> <span
  m="230110">particular,</span> <span m="230710">on</span> <span
  m="230790">the</span> <span m="230880">theory</span> <span
  m="231310">side,</span> <span m="234740">for</span> <span
  m="234880">example,</span> <span m="235190">if</span> <span
  m="235260">u</span> <span m="235410">is</span> <span m="235510">a</span> <span
  m="235560">polynomial</span> <span m="236160">in</span> <span
  m="236250">n,</span> <span m="237280">or</span> <span m="237500">even</span>
  <span m="238820">larger</span> <span m="239230">than</span> <span
  m="239370">that,</span> <span m="239580">you</span> <span
  m="239710">can</span> <span m="239850">support</span> <span
  m="241350">n</span> <span m="241670">to</span> <span m="241780">the</span>
  <span m="242070">polylog</span> <span m="244006">n.</span> <span
  m="245960">Then</span> <span m="247450">log</span> <span m="247870">log
  u</span> <span m="248220">is the</span> <span m="248310">same</span> <span
  m="248850">as</span> <span m="250430">log</span> <span m="250700">log</span>
  <span m="250930">n,</span> <span m="254770">up to</span> <span
  m="254850">constant</span> <span m="255220">factors.</span> <span
  m="256040">And</span> <span m="256190">so</span> <span m="256290">this</span>
  <span m="256470">is</span> <span m="256579">an</span> <span
  m="256760">exponential</span> <span m="257480">improvement</span> <span
  m="258089">over</span> <span m="258529">regular</span> <span
  m="259040">balanced</span> <span m="259470">binary</span> <span
  m="259779">search</span> <span m="259980">trees.</span></p><p><span
  m="260805">OK,</span> <span m="261170">so</span> <span m="261390">super</span>
  <span m="261760">fast,</span> <span m="263040">and</span> <span
  m="263330">it's</span> <span m="263430">also</span> <span
  m="263690">pretty</span> <span m="263960">clean</span> <span
  m="264370">and</span> <span m="264870">simple,</span> <span
  m="267120">though</span> <span m="267290">it'll</span> <span
  m="267440">take</span> <span m="267640">us</span> <span m="267770">a</span>
  <span m="267810">little</span> <span m="267970">while</span> <span
  m="268240">to</span> <span m="268340">get</span> <span
  m="268540">there.</span> <span m="269780">One</span> <span
  m="270250">application</span> <span m="271000">for</span> <span
  m="271140">this,</span> <span m="271820">as</span> <span m="271990">I</span>
  <span m="272020">mentioned,</span> <span m="272480">is</span> <span
  m="272740">in</span> <span m="273560">network</span> <span
  m="273890">routers.</span> <span m="275080">And</span> <span
  m="275330">I</span> <span m="275650">believe</span> <span
  m="276030">most</span> <span m="276330">network</span> <span
  m="276660">routers</span> <span m="277520">use</span> <span
  m="277790">the</span> <span m="278060">van Emde</span> <span
  m="278330">Boas</span> <span m="278610">data</span> <span
  m="278800">structure</span> <span m="279140">these</span> <span
  m="279390">days,</span> <span m="279680">though</span> <span
  m="280000">just</span> <span m="280270">changed</span> <span
  m="281590">in</span> <span m="281750">the</span> <span m="281840">last</span>
  <span m="282840">decade</span> <span m="283220">or</span> <span
  m="283330">so.</span></p><p><span m="285190">Network</span> <span
  m="285560">router,</span> <span m="285870">you</span> <span
  m="286010">have</span> <span m="286310">to</span> <span
  m="286400">store</span> <span m="286600">a</span> <span
  m="286660">routing</span> <span m="287000">table,</span> <span
  m="287420">which</span> <span m="287810">looks</span> <span
  m="288100">like,</span> <span m="288800">for</span> <span m="289560">IP</span>
  <span m="289950">range</span> <span m="290270">from</span> <span
  m="290460">this</span> <span m="290720">to</span> <span
  m="290820">this,</span> <span m="291170">please</span> <span
  m="292240">send</span> <span m="292520">your</span> <span
  m="292810">packets</span> <span m="293250">along</span> <span
  m="293500">this</span> <span m="293690">port.</span> <span
  m="294030">For</span> <span m="294160">IP</span> <span m="294440">range</span>
  <span m="294680">from</span> <span m="294820">this</span> <span
  m="295000">to</span> <span m="295100">this,</span> <span
  m="295460">send</span> <span m="295600">along</span> <span
  m="295870">this</span> <span m="295970">port.</span> <span
  m="296930">So</span> <span m="297180">if</span> <span m="297260">you</span>
  <span m="297440">mark</span> <span m="297920">the</span> <span
  m="298810">beginnings</span> <span m="299370">of</span> <span
  m="299470">those</span> <span m="299700">ranges</span> <span
  m="300430">as</span> <span m="301640">items</span> <span m="302130">in</span>
  <span m="302290">your</span> <span m="302450">set,</span> <span
  m="303650">and</span> <span m="304220">given</span> <span m="305250">an</span>
  <span m="305580">actual</span> <span m="305940">IP</span> <span
  m="306220">address,</span> <span m="306520">you</span> <span
  m="306630">want</span> <span m="306810">to</span> <span m="306860">know</span>
  <span m="307030">what</span> <span m="307240">range</span> <span
  m="307510">it's</span> <span m="307650">in,</span> <span
  m="308110">that</span> <span m="308320">is</span> <span m="308510">a</span>
  <span m="308580">predecessor</span> <span m="309170">or a</span> <span
  m="309320">successor</span> <span m="309810">problem.</span> <span
  m="310860">And</span> <span m="311040">so</span> <span m="311810">van
  Emde</span> <span m="311970">Boas</span> <span m="312400">lets</span> <span
  m="312540">you</span> <span m="312620">solve</span> <span
  m="312820">that</span> <span m="313000">really</span> <span
  m="313190">fast.</span></p><p><span m="313880">u,</span> <span
  m="314420">for</span> <span m="314850">IPV4</span> <span m="315580">is</span>
  <span m="315710">only</span> <span m="318220">is</span> <span
  m="318320">only</span> <span m="318500">2 to the</span> <span
  m="318995">32.</span> <span m="319490">So</span> <span
  m="319580">that's</span> <span m="320300">super</span> <span
  m="320620">fast</span> <span m="320970">and practical.</span> <span
  m="321520">It's</span> <span m="321620">going</span> <span
  m="321720">to</span> <span m="321800">take</span> <span m="321980">like</span>
  <span m="322140">five</span> <span m="322480">operations</span> <span
  m="323150">to</span> <span m="323280">do</span> <span m="324120">log</span>
  <span m="324410">log</span> <span m="324790">2 to</span> <span
  m="325055">the</span> <span m="325320">32.</span> <span m="327740">So</span>
  <span m="328340">that's</span> <span m="330620">it.</span> <span
  m="330800">And</span> <span m="331130">as</span> <span m="331230">you</span>
  <span m="331340">may</span> <span m="331450">know,</span> <span
  m="331710">network</span> <span m="331970">routers</span> <span
  m="332250">are</span> <span m="332310">basically</span> <span
  m="332990">computers.</span></p><p><span m="333700">And</span> <span
  m="333840">so</span> <span m="334620">they used</span> <span m="334740">to
  have</span> <span m="334950">a</span> <span m="334980">lot</span> <span
  m="335150">of</span> <span m="335210">specialized</span> <span
  m="335660">hardware.</span> <span m="335960">These</span> <span
  m="336180">days</span> <span m="336380">it's</span> <span
  m="336490">pretty</span> <span m="336730">general</span> <span
  m="337060">purpose.</span> <span m="337940">And</span> <span
  m="338140">so</span> <span m="338310">you</span> <span m="338480">want</span>
  <span m="338810">nice</span> <span m="339830">data</span> <span
  m="340090">structures,</span> <span m="341280">like</span> <span
  m="341470">the</span> <span m="341550">one</span> <span
  m="341660">we'll</span> <span m="341760">cover.</span></p><p><span
  m="343060">OK,</span> <span m="343350">so</span> <span m="345120">we</span>
  <span m="345240">want</span> <span m="345430">to</span> <span
  m="345480">shoot</span> <span m="345810">for</span> <span
  m="346060">log</span> <span m="346300">log</span> <span m="346490">u.</span>
  <span m="346660">We're</span> <span m="346800">going</span> <span
  m="346930">to</span> <span m="346980">get</span> <span m="347310">there</span>
  <span m="347550">by</span> <span m="347860">a</span> <span
  m="347940">series</span> <span m="348930">of</span> <span
  m="349100">improvements</span> <span m="350990">on</span> <span
  m="351200">a</span> <span m="351250">very</span> <span
  m="351550">simple</span> <span m="351910">idea.</span> <span
  m="352510">This</span> <span m="352720">is</span> <span m="352870">not</span>
  <span m="353230">the</span> <span m="353430">original</span> <span
  m="353950">way</span> <span m="354140">that</span> <span m="354260">van
  Emde</span> <span m="354520">Boas</span> <span m="354830">got</span> <span
  m="355020">to</span> <span m="355110">this</span> <span
  m="356100">concept.</span> <span m="356570">But</span> <span m="356710">it's
  sort of</span> <span m="356810">the</span> <span m="357150">modern</span>
  <span m="357540">take</span> <span m="357820">on</span> <span
  m="358070">it.</span> <span m="358200">It's</span> <span m="358290">one</span>
  <span m="358440">that's</span> <span m="358610">in</span> <span
  m="358730">the</span> <span m="358820">textbook.</span></p><p><span
  m="360280">So</span> <span m="360360">the</span> <span m="360430">first</span>
  <span m="360680">question</span> <span m="361030">is,</span> <span
  m="361940">how</span> <span m="362210">might</span> <span m="362500">we</span>
  <span m="362640">get</span> <span m="362940">a</span> <span
  m="363020">log</span> <span m="363380">log</span> <span m="363640">u</span>
  <span m="363820">bound?</span> <span m="364920">Where</span> <span
  m="365210">might</span> <span m="365460">that</span> <span
  m="365870">come</span> <span m="366070">from?</span> <span m="366730">That's
  a</span> <span m="366750">question</span> <span m="367070">for</span> <span
  m="367170">you.</span> <span m="371450">This</span> <span m="371510">is</span>
  <span m="371610">just</span> <span m="371870">intuition.</span> <span
  m="382320">Any</span> <span m="382520">suggestions?</span></p><p><span
  m="392980">We</span> <span m="393110">see</span> <span m="393290">logs</span>
  <span m="393750">all</span> <span m="393890">the</span> <span
  m="393990">time.</span> <span m="394520">So,</span> <span
  m="394730">yeah.</span></p><p><span m="395140">AUDIENCE: You organize</span>
  <span m="395610">the</span> <span m="396080">height</span> <span m="396550">of
  a tree</span> <span m="397020">into a tree.</span></p><p><span
  m="397960">PROFESSOR: Ah,</span> <span m="398360">good.</span> <span
  m="398630">You</span> <span m="398760">organize</span> <span
  m="399150">the</span> <span m="399230">height</span> <span
  m="399650">of</span> <span m="399770">the</span> <span m="399860">tree</span>
  <span m="400280">into</span> <span m="400530">a</span> <span
  m="400600">tree.</span> <span m="400930">So</span> <span m="401640">we</span>
  <span m="401770">normally</span> <span m="402180">think</span> <span
  m="402810">of</span> <span m="403900">a</span> <span m="404010">tree,</span>
  <span m="404640">let's</span> <span m="404930">say</span> <span
  m="405520">we</span> <span m="405650">have u</span> <span
  m="405840">down</span> <span m="406350">here.</span> <span
  m="407560">So</span> <span m="407640">the</span> <span
  m="407730">height</span> <span m="408910">is</span> <span
  m="409170">log</span> <span m="409530">u.</span> <span m="411340">So</span>
  <span m="411530">somehow,</span> <span m="411990">we</span> <span
  m="412140">want</span> <span m="412420">a</span> <span
  m="414430">binary</span> <span m="414790">search</span> <span
  m="415810">on</span> <span m="416000">the</span> <span
  m="416070">levels</span> <span m="416490">of</span> <span
  m="416590">this</span> <span m="416790">tree.</span></p><p><span
  m="417420">Right,</span> <span m="417560">if</span> <span m="417670">we</span>
  <span m="417760">could</span> <span m="417890">kind of</span> <span
  m="418295">start</span> <span m="418700">in</span> <span m="418810">the</span>
  <span m="418870">middle</span> <span m="419120">level,</span> <span
  m="419750">and</span> <span m="419960">then</span> <span
  m="420090">decide</span> <span m="421070">whether</span> <span m="421280">we
  need to</span> <span m="421600">go</span> <span m="421770">up</span> <span
  m="422090">or</span> <span m="422180">down,</span> <span m="423760">I'm</span>
  <span m="424040">totally</span> <span m="424560">unclear</span> <span
  m="424850">what</span> <span m="424970">that</span> <span
  m="425350">would</span> <span m="425530">mean.</span> <span
  m="425870">But</span> <span m="426030">in</span> <span m="426110">fact,</span>
  <span m="426450">that's</span> <span m="426530">exactly</span> <span
  m="426910">the</span> <span m="427000">van Emde</span> <span
  m="427390">Boas</span> <span m="427690">will</span> <span
  m="427840">do.</span> <span m="428600">So</span> <span m="428750">you</span>
  <span m="428900">can</span> <span m="429110">binary</span> <span
  m="429470">search--</span> <span m="431110">I</span> <span
  m="432310">think</span> <span m="432450">we</span> <span
  m="432560">won't</span> <span m="432790">see</span> <span
  m="432910">that</span> <span m="433090">until the</span> <span
  m="433250">very</span> <span m="433520">end--</span> <span
  m="434338">but</span> <span m="435682">on</span> <span
  m="437930">levels</span> <span m="438310">of</span> <span m="438430">a</span>
  <span m="438500">tree.</span></p><p><span m="442520">So</span> <span
  m="442680">at least</span> <span m="442800">some</span> <span
  m="443040">intuition.</span> <span m="446030">Now</span> <span
  m="447730">let's</span> <span m="447970">think</span> <span
  m="448130">about</span> <span m="448320">this</span> <span
  m="448490">in</span> <span m="448580">terms</span> <span m="448800">of</span>
  <span m="448860">recurrences.</span> <span m="449800">There's</span> <span
  m="450080">a</span> <span m="450210">recurrence</span> <span
  m="450720">for</span> <span m="450870">binary</span> <span
  m="451240">search,</span> <span m="452910">which</span> <span
  m="453180">is</span> <span m="454090">usually</span> <span
  m="455070">you</span> <span m="455170">have</span> <span m="455480">k</span>
  <span m="455750">things,</span> <span m="456750">t</span> <span
  m="457050">of</span> <span m="457170">k</span> <span m="458070">is</span>
  <span m="458530">t of k</span> <span m="459010">over</span> <span
  m="459220">2</span> <span m="459460">plus</span> <span m="460350">order</span>
  <span m="460620">1.</span> <span m="462580">You</span> <span
  m="462810">spend</span> <span m="462940">constant</span> <span
  m="463330">time</span> <span m="463590">to</span> <span
  m="463660">decide</span> <span m="464070">whether</span> <span
  m="464240">you</span> <span m="464300">should</span> <span
  m="464440">go</span> <span m="464570">left</span> <span m="464810">or</span>
  <span m="464920">right</span> <span m="465140">in</span> <span
  m="465230">a</span> <span m="465320">binary</span> <span
  m="465630">search,</span> <span m="465900">or</span> <span
  m="465960">in</span> <span m="466030">this</span> <span m="466180">case</span>
  <span m="466400">up</span> <span m="466560">and</span> <span
  m="466680">down</span> <span m="466960">somehow.</span> <span
  m="467950">And</span> <span m="468150">then</span> <span m="468300">you</span>
  <span m="468410">reduce</span> <span m="468770">to a</span> <span
  m="468880">problem</span> <span m="469190">of</span> <span
  m="469280">half</span> <span m="469530">the</span> <span
  m="469620">size.</span></p><p><span m="470140">So</span> <span
  m="470330">this</span> <span m="470550">solves</span> <span
  m="470910">to</span> <span m="471780">log</span> <span m="472060">k.</span>
  <span m="474670">In</span> <span m="474840">our</span> <span
  m="474990">case,</span> <span m="476170">k</span> <span m="476650">is</span>
  <span m="476900">actually</span> <span m="477280">log</span> <span
  m="477590">u.</span> <span m="478360">So</span> <span m="479220">we</span>
  <span m="479450">want</span> <span m="479690">a</span> <span
  m="479750">recurrence</span> <span m="480440">that</span> <span
  m="480550">looks</span> <span m="480780">something</span> <span
  m="481110">like</span> <span m="481670">t</span> <span m="482086">of</span>
  <span m="482502">log</span> <span m="482920">u</span> <span
  m="483780">equals</span> <span m="484490">t</span> <span m="484970">of</span>
  <span m="486530">log</span> <span m="486810">u/2</span> <span
  m="488800">plus</span> <span m="489290">order</span> <span
  m="489560">1.</span> <span m="491180">OK,</span> <span m="491270">even</span>
  <span m="491480">if</span> <span m="491590">you</span> <span
  m="491710">don't</span> <span m="491900">believe</span> <span
  m="492180">in</span> <span m="492250">the</span> <span
  m="492350">binary</span> <span m="492640">search</span> <span
  m="493250">perspective,</span> <span m="493680">this</span> <span
  m="493860">is</span> <span m="493980">clearly</span> <span m="494260">a</span>
  <span m="494320">recurrence</span> <span m="494710">that</span> <span
  m="494910">solves</span> <span m="495310">to</span> <span
  m="496000">log</span> <span m="496260">log</span> <span m="496450">u.</span>
  <span m="498000">I'm</span> <span m="498080">just</span> <span
  m="498230">substituting</span> <span m="498770">k equals</span> <span
  m="499170">log</span> <span m="499410">u</span> <span m="499540">here.</span>
  <span m="500080">So</span> <span m="500360">that</span> <span
  m="500570">could</span> <span m="500700">be</span> <span m="501060">on</span>
  <span m="501210">the</span> <span m="501290">right</span> <span
  m="501470">track.</span></p><p><span m="502550">Now,</span> <span
  m="502910">that's</span> <span m="503160">in</span> <span
  m="503250">terms</span> <span m="503490">of</span> <span m="503600">log</span>
  <span m="503870">u.</span> <span m="504010">What</span> <span
  m="504140">if</span> <span m="504280">I</span> <span m="504350">wanted</span>
  <span m="504630">to</span> <span m="504800">rewrite</span> <span
  m="505180">this</span> <span m="505470">recurrence</span> <span
  m="505980">in</span> <span m="506120">terms</span> <span m="506390">u?</span>
  <span m="506850">What</span> <span m="507190">would</span> <span
  m="507530">I</span> <span m="507600">get?</span> <span m="508270">If</span>
  <span m="509110">I</span> <span m="509170">wanted</span> <span
  m="509440">to</span> <span m="509980">have</span> <span m="510220">this</span>
  <span m="510590">still</span> <span m="510850">solve</span> <span
  m="511530">to</span> <span m="512000">log</span> <span m="512280">log</span>
  <span m="512510">u,</span> <span m="513299">what</span> <span
  m="513570">should</span> <span m="513870">I</span> <span
  m="513990">write</span> <span m="515010">here?</span></p><p><span
  m="530010">If</span> <span m="530200">I</span> <span m="530500">change</span>
  <span m="530950">the</span> <span m="531930">logarithm</span> <span
  m="532460">of</span> <span m="532580">a</span> <span m="532630">number</span>
  <span m="533170">by</span> <span m="533390">a</span> <span
  m="533460">factor</span> <span m="533790">of</span> <span m="533890">2,</span>
  <span m="534480">how</span> <span m="534690">does</span> <span
  m="534780">u</span> <span m="534950">change?</span></p><p><span
  m="537840">AUDIENCE: Square root.</span></p><p><span m="538210">PROFESSOR:
  Square</span> <span m="538380">root.</span> <span m="545060">OK,</span> <span
  m="545370">So</span> <span m="545820">I've</span> <span
  m="545980">changed</span> <span m="546460">what</span> <span
  m="546670">the</span> <span m="547230">variable</span> <span
  m="547690">is</span> <span m="547840">here.</span> <span m="548180">But</span>
  <span m="548330">this</span> <span m="548500">is</span> <span
  m="548600">really</span> <span m="548800">the</span> <span
  m="548910">same</span> <span m="549150">recurrence.</span> <span m="550150">It
  will</span> <span m="550260">still</span> <span m="550500">solve</span> <span
  m="550930">to</span> <span m="551930">log</span> <span m="552200">log</span>
  <span m="552410">u.</span> <span m="553020">The</span> <span
  m="553120">number</span> <span m="553420">of</span> <span
  m="553500">times</span> <span m="553890">you</span> <span
  m="554000">have</span> <span m="554330">to</span> <span
  m="554680">apply</span> <span m="555000">square root</span> <span
  m="555300">to a</span> <span m="555560">number</span> <span
  m="555870">to</span> <span m="555970">get</span> <span m="556190">to</span>
  <span m="556280">1</span> <span m="556960">is</span> <span
  m="557200">log</span> <span m="557440">log</span> <span
  m="557650">u.</span></p><p><span m="557990">So</span> <span
  m="558200">this</span> <span m="558390">is</span> <span m="558520">some</span>
  <span m="558700">more</span> <span m="558880">intuition</span> <span
  m="559370">for</span> <span m="561210">how</span> <span m="561500">van
  Emde</span> <span m="561710">Boas</span> <span m="562170">is</span> <span
  m="562260">going</span> <span m="562450">to</span> <span
  m="562570">achieve</span> <span m="562970">log</span> <span
  m="563130">log</span> <span m="563360">u.</span> <span m="563530">And</span>
  <span m="563610">in</span> <span m="563690">fact,</span> <span
  m="563950">this</span> <span m="564150">is</span> <span m="564370">the</span>
  <span m="564650">primary</span> <span m="565090">intuition</span> <span
  m="565590">we'll</span> <span m="565750">be</span> <span
  m="566510">using.</span> <span m="568490">So</span> <span
  m="570040">what</span> <span m="570240">we</span> <span
  m="570360">would</span> <span m="570510">like</span> <span
  m="570970">is</span> <span m="571220">to</span> <span m="571350">some</span>
  <span m="571720">take</span> <span m="571970">our</span> <span
  m="572080">problem,</span> <span m="572560">which</span> <span
  m="572740">has</span> <span m="572930">size</span> <span m="573220">u,</span>
  <span m="573960">and</span> <span m="574190">split</span> <span
  m="574620">it</span> <span m="574760">into</span> <span
  m="575080">problems</span> <span m="575710">of</span> <span
  m="575810">size</span> <span m="576110">square</span> <span
  m="576380">root</span> <span m="576470">of</span> <span m="576600">u,</span>
  <span m="577400">so</span> <span m="577590">that</span> <span
  m="577730">we</span> <span m="577930">only</span> <span m="578210">have</span>
  <span m="578410">to</span> <span m="578520">recurse</span> <span
  m="578920">on</span> <span m="579050">one</span> <span m="579340">of</span>
  <span m="579450">them.</span> <span m="580150">And</span> <span
  m="580340">then,</span> <span m="580500">we'll</span> <span
  m="580640">get</span> <span m="580850">this</span> <span
  m="581020">recurrence.</span></p><p><span m="582960">OK,</span> <span
  m="586050">that's</span> <span m="586870">where</span> <span
  m="587000">we're</span> <span m="587110">going</span> <span
  m="587230">to</span> <span m="587300">go.</span> <span m="589610">But</span>
  <span m="589630">we're</span> <span m="589760">going</span> <span
  m="589870">to</span> <span m="589940">start</span> <span
  m="590390">with</span> <span m="590610">a</span> <span m="590740">very</span>
  <span m="591240">simple</span> <span m="591620">data</span> <span
  m="591860">structure</span> <span m="593480">for</span> <span
  m="593600">representing</span> <span m="596040">a</span> <span
  m="596130">set</span> <span m="596390">of</span> <span m="596500">n</span>
  <span m="596730">numbers</span> <span m="597180">from</span> <span
  m="597350">the</span> <span m="597450">universe</span> <span
  m="597970">0</span> <span m="598140">up to</span> <span m="598230">u</span>
  <span m="598480">minus</span> <span m="598810">1.</span> <span
  m="602370">And</span> <span m="602610">let's</span> <span
  m="602830">say,</span> <span m="603100">initially,</span> <span
  m="603670">our</span> <span m="603870">goal</span> <span m="604270">is</span>
  <span m="604470">for</span> <span m="604610">insert</span> <span
  m="605050">and</span> <span m="605200">delete</span> <span
  m="605530">to</span> <span m="605640">be</span> <span
  m="605860">constant</span> <span m="606450">time.</span> <span
  m="608300">But</span> <span m="608450">let's</span> <span
  m="608650">not</span> <span m="608810">worry</span> <span
  m="608990">about</span> <span m="609200">successor.</span> <span
  m="609690">Successor</span> <span m="610230">could</span> <span
  m="610380">take</span> <span m="610580">linear</span> <span
  m="610910">time.</span></p><p><span m="611490">What</span> <span
  m="611770">would</span> <span m="612030">be</span> <span m="612170">a</span>
  <span m="612210">good</span> <span m="612400">data</span> <span
  m="612620">structure</span> <span m="613060">for</span> <span
  m="614030">storing</span> <span m="615210">items</span> <span
  m="615650">in</span> <span m="615770">this</span> <span
  m="615920">universe?</span> <span m="617000">I</span> <span
  m="617110">want</span> <span m="617770">u</span> <span m="618090">to</span>
  <span m="618240">be</span> <span m="618400">involved</span> <span
  m="618980">somehow.</span> <span m="619440">I</span> <span
  m="619530">don't</span> <span m="619700">just</span> <span
  m="619870">want</span> <span m="620020">to,</span> <span
  m="620060">like,</span> <span m="620280">store</span> <span
  m="620510">them</span> <span m="620740">in</span> <span m="620860">a</span>
  <span m="621940">linked</span> <span m="622200">list</span> <span
  m="622450">of</span> <span m="622550">items</span> <span m="623040">or</span>
  <span m="623160">assorted</span> <span m="623490">array</span> <span
  m="623680">of</span> <span m="623780">items.</span> <span m="624660">I</span>
  <span m="624820">would</span> <span m="624980">like</span> <span
  m="626750">u</span> <span m="626990">to</span> <span m="627150">be</span>
  <span m="627290">involved,</span> <span m="628270">insert</span> <span
  m="628430">and</span> <span m="628690">delete</span> <span
  m="628960">constant</span> <span m="629380">time.</span></p><p><span
  m="635040">Very</span> <span m="635460">simple.</span> <span
  m="645650">Yeah.</span></p><p><span m="646133">AUDIENCE: Simply</span> <span
  m="646616">an</span> <span m="647099">array.</span></p><p><span
  m="648080">PROFESSOR: In an</span> <span m="648330">array,</span> <span
  m="648450">yeah.</span> <span m="648790">What's</span> <span
  m="649050">the</span> <span m="649250">array</span> <span
  m="649430">indexed</span> <span m="649960">by?</span></p><p><span
  m="651514">AUDIENCE: It</span> <span m="651972">would</span> <span
  m="652430">be</span> <span m="652888">index</span> <span
  m="653346">n.</span></p><p><span m="654720">PROFESSOR:
  Sorry?</span></p><p><span m="655460">AUDIENCE: By the</span> <span
  m="655930">index</span> <span m="656400">of n.</span></p><p><span
  m="656870">PROFESSOR: The</span> <span m="657010">index</span> <span
  m="657390">of</span> <span m="657560">n,</span> <span
  m="658210">close.</span></p><p><span m="659964">AUDIENCE: The</span> <span
  m="660396">value.</span></p><p><span m="661260">PROFESSOR:
  Sorry?</span></p><p><span m="662100">AUDIENCE: The</span> <span
  m="662480">value.</span></p><p><span m="662860">PROFESSOR: The</span> <span
  m="662970">value,</span> <span m="663560">yeah.</span> <span
  m="664730">Good.</span> <span m="664990">So</span> <span m="665100">I</span>
  <span m="665210">want--</span> <span m="666530">this</span> <span
  m="666790">is</span> <span m="666940">normally</span> <span
  m="667280">called</span> <span m="667450">a</span> <span m="667490">bit</span>
  <span m="667730">vector,</span> <span m="669970">where</span> <span
  m="672820">I</span> <span m="672930">want</span> <span m="673220">array</span>
  <span m="673590">of</span> <span m="673670">size</span> <span
  m="674000">u,</span> <span m="676220">and</span> <span m="676420">for</span>
  <span m="676920">each</span> <span m="684960">cell</span> <span
  m="685530">in</span> <span m="685720">the</span> <span
  m="685860">array,</span> <span m="686540">I'm</span> <span
  m="686630">going</span> <span m="686740">to</span> <span
  m="686800">write</span> <span m="686990">0 or</span> <span
  m="687430">1.</span> <span m="687730">0</span> <span m="688060">means</span>
  <span m="688550">absent.</span> <span m="689810">1</span> <span
  m="690160">means</span> <span m="690570">present.</span> <span m="691820">It's
  in</span> <span m="692195">the set.</span></p><p><span m="695980">So</span>
  <span m="696590">let</span> <span m="696830">me</span> <span
  m="697080">draw</span> <span m="697760">a</span> <span
  m="697890">picture,</span> <span m="699120">maybe</span> <span
  m="699530">over</span> <span m="699700">here.</span> <span m="715410">Let
  me</span> <span m="715520">take</span> <span m="715970">my</span> <span
  m="716210">example</span> <span m="718892">and</span> <span
  m="719760">give</span> <span m="720150">you</span> <span m="720540">a
  frisbee.</span> <span m="728390">Let</span> <span m="728840">me</span> <span
  m="729290">put</span> <span m="729460">it</span> <span m="729890">in</span>
  <span m="730020">the</span> <span m="730090">middle.</span></p><p><span
  m="759470">So</span> <span m="759700">this</span> <span m="759870">is</span>
  <span m="759960">an</span> <span m="760000">example</span> <span
  m="760460">of</span> <span m="760590">a</span> <span m="760660">set</span>
  <span m="761470">with--</span> <span m="762030">if</span> <span
  m="762260">I</span> <span m="762760">maybe</span> <span
  m="762970">highlight</span> <span m="763960">a</span> <span
  m="764070">little</span> <span m="764300">bit--</span> <span
  m="765120">here's</span> <span m="765630">1.</span> <span
  m="768580">Here's</span> <span m="769080">a</span> <span m="769160">1,</span>
  <span m="770330">and a</span> <span m="770420">one,</span> <span
  m="770890">and a</span> <span m="771360">one.</span> <span
  m="772830">So</span> <span m="773130">there</span> <span m="773430">are</span>
  <span m="774510">4</span> <span m="774990">elements</span> <span
  m="775390">in</span> <span m="775480">the</span> <span m="775590">set.</span>
  <span m="777260">The</span> <span m="777380">universe</span> <span
  m="777850">size</span> <span m="778280">is</span> <span m="778540">16.</span>
  <span m="783820">n</span> <span m="784500">equals</span> <span
  m="785130">4,</span> <span m="786200">in</span> <span m="786330">this</span>
  <span m="786510">particular</span> <span
  m="786920">example.</span></p><p><span m="788230">If</span> <span
  m="788330">I</span> <span m="788390">want</span> <span m="788640">to</span>
  <span m="788780">insert</span> <span m="789360">into</span> <span
  m="789630">this</span> <span m="789830">set,</span> <span m="790250">I</span>
  <span m="790420">just</span> <span m="791140">change</span> <span
  m="791640">0</span> <span m="791930">to a</span> <span m="792130">1.</span>
  <span m="792930">If I</span> <span m="792980">want</span> <span
  m="793170">to</span> <span m="793230">delete</span> <span
  m="793570">from</span> <span m="793720">the</span> <span
  m="793810">set,</span> <span m="794040">I</span> <span
  m="794110">change</span> <span m="794390">a</span> <span m="794450">1</span>
  <span m="794630">to a</span> <span m="794750">0.</span> <span
  m="795460">So</span> <span m="795610">those</span> <span m="795760">are</span>
  <span m="795850">constant</span> <span m="796260">time.</span> <span
  m="797300">Good.</span></p><p><span m="806220">If</span> <span
  m="806510">I</span> <span m="806610">want</span> <span m="806860">to</span>
  <span m="806930">do a</span> <span m="807090">successor</span> <span
  m="807590">query,</span> <span m="809570">not</span> <span
  m="809800">so</span> <span m="809950">good.</span> <span m="812570">I</span>
  <span m="812770">might</span> <span m="813190">need</span> <span
  m="813420">to</span> <span m="813530">spend</span> <span
  m="813860">order</span> <span m="814080">u</span> <span
  m="814290">time.</span> <span m="816890">Maybe</span> <span
  m="817230">I</span> <span m="817300">asked</span> <span m="817650">for</span>
  <span m="817760">the</span> <span m="817870">successor</span> <span
  m="818420">of</span> <span m="818490">this</span> <span
  m="818690">item,</span> <span m="819520">and</span> <span
  m="820030">the</span> <span m="820170">only</span> <span
  m="820660">thing</span> <span m="820860">to</span> <span m="820980">do</span>
  <span m="821240">is</span> <span m="821370">just</span> <span
  m="821810">keep</span> <span m="822280">jumping</span> <span
  m="822820">until</span> <span m="823570">I</span> <span m="823700">get</span>
  <span m="823890">to a</span> <span m="824070">1.</span></p><p><span
  m="824840">And</span> <span m="825070">the</span> <span
  m="825140">worst</span> <span m="825360">case,</span> <span
  m="825680">there's</span> <span m="826490">almost</span> <span
  m="826780">to</span> <span m="826850">u</span> <span m="827200">0's</span>
  <span m="827510">in</span> <span m="827915">a row,</span> <span
  m="828320">or</span> <span m="828740">u</span> <span m="828910">minus</span>
  <span m="829220">n.</span> <span m="830900">So</span> <span
  m="831080">that's</span> <span m="831280">really</span> <span
  m="831470">slow.</span> <span m="831980">But</span> <span
  m="832130">this,</span> <span m="832350">in</span> <span
  m="832500">fact,</span> <span m="832820">will</span> <span
  m="832990">be</span> <span m="833150">our</span> <span
  m="833260">starting</span> <span m="833600">point.</span> <span m="833930">It
  may</span> <span m="834130">seem</span> <span m="834420">really</span> <span
  m="834670">silly.</span> <span m="835730">But</span> <span
  m="836460">it's</span> <span m="836630">actually</span> <span
  m="837770">a</span> <span m="837880">good</span> <span
  m="838090">starting</span> <span m="838410">point</span> <span
  m="838770">for</span> <span m="839220">van Emde</span> <span
  m="839400">Boas.</span></p><p><span m="841570">So</span> <span
  m="842950">the</span> <span m="843060">second</span> <span
  m="843770">idea</span> <span m="845800">is,</span> <span
  m="846540">we're</span> <span m="846840">going</span> <span
  m="847840">to</span> <span m="855180">take</span> <span m="855390">our</span>
  <span m="855510">universe</span> <span m="856010">and</span> <span
  m="856200">split</span> <span m="856610">it</span> <span
  m="857480">into</span> <span m="858930">clusters.</span> <span m="862260">van
  Emde</span> <span m="862500">Boas,</span> <span m="862790">the</span> <span
  m="863030">person,</span> <span m="863370">likes</span> <span
  m="863560">to</span> <span m="863650">call</span> <span
  m="863810">these</span> <span m="863980">galaxies.</span> <span m="864700">I
  think</span> <span m="865140">that's</span> <span m="865260">a</span> <span
  m="865340">nice</span> <span m="865595">name</span> <span
  m="865850">for</span> <span m="867600">pieces</span> <span
  m="868010">of</span> <span m="868100">the</span> <span
  m="868200">universe.</span> <span m="869290">But</span> <span
  m="870690">textbook</span> <span m="871130">calls</span> <span
  m="871330">it</span> <span m="871470">clusters.</span> <span
  m="871950">Because</span> <span m="872130">they</span> <span m="872410">used
  to call it</span> <span m="872630">clusters.</span></p><p><span
  m="873070">So</span> <span m="875740">now,</span> <span m="875890">it's</span>
  <span m="876000">question</span> <span m="876270">of how</span> <span
  m="876490">big</span> <span m="876680">the</span> <span
  m="876760">cluster</span> <span m="877130">should</span> <span
  m="877340">be.</span> <span m="878630">But</span> <span m="878830">I</span>
  <span m="878890">gave</span> <span m="879170">you</span> <span
  m="879260">this</span> <span m="879440">picture,</span> <span
  m="881301">and</span> <span m="881690">I</span> <span m="881860">want</span>
  <span m="882040">to</span> <span m="882110">think</span> <span
  m="882360">about</span> <span m="882600">these</span> <span
  m="882790">galaxies</span> <span m="883290">as</span> <span
  m="883350">separate</span> <span m="883800">chunks,</span> <span
  m="884420">and</span> <span m="884680">I ask</span> <span m="885020">for
  the</span> <span m="885170">successor</span> <span m="885660">of</span> <span
  m="885730">this,</span> <span m="885930">how</span> <span
  m="886260">could</span> <span m="886480">I</span> <span
  m="886810">possibly</span> <span m="887320">speed</span> <span
  m="887730">up</span> <span m="887950">the</span> <span
  m="888070">successor</span> <span m="889020">search?</span> <span
  m="891508">Yeah.</span></p><p><span m="892924">AUDIENCE: You could</span>
  <span m="893396">form</span> <span m="893868">a tree</span> <span
  m="896228">for</span> <span m="896700">each</span> <span m="897172">cluster
  and</span> <span m="897644">connect--</span></p><p><span m="898130">PROFESSOR:
  You</span> <span m="898260">could</span> <span m="898400">form a</span> <span
  m="898670">tree</span> <span m="899060">here</span> <span
  m="899510">and</span> <span m="899920">store</span> <span
  m="900780">what</span> <span m="901150">at</span> <span
  m="901320">the--</span></p><p><span m="901580">[INTERPOSING
  VOICES]</span></p><p><span m="902073">AUDIENCE: Could</span> <span
  m="902566">store</span> <span m="903059">an or</span> <span
  m="903552">between</span> <span m="904045">the</span> <span
  m="904538">two</span> <span m="905031">bits.</span></p><p><span
  m="905530">PROFESSOR: Cool.</span> <span m="906250">I</span> <span
  m="906690">like</span> <span m="906900">this.</span> <span
  m="907660">So</span> <span m="907780">I</span> <span m="907820">could</span>
  <span m="907970">store</span> <span m="908140">the</span> <span
  m="908290">or</span> <span m="908620">of</span> <span m="908690">these</span>
  <span m="908920">two</span> <span m="909060">bits--</span> <span
  m="910516">clean this</span> <span m="910980">up a</span> <span
  m="911040">little</span> <span m="911260">bit--</span> <span
  m="911830">or</span> <span m="912090">of</span> <span m="912140">these</span>
  <span m="912360">two</span> <span m="912510">bits,</span> <span
  m="912970">or</span> <span m="913200">of these</span> <span m="913390">two
  bits,</span> <span m="914690">and</span> <span m="914850">so</span> <span
  m="915000">on.</span> <span m="919096">The</span> <span m="919570">or</span>
  <span m="919790">is</span> <span m="919890">interesting,</span> <span
  m="920340">because</span> <span m="921650">this</span> <span
  m="921910">0</span> <span m="922280">bit,</span> <span m="922630">in</span>
  <span m="922730">particular,</span> <span m="923210">tells</span> <span
  m="923460">me</span> <span m="923560">there's</span> <span
  m="923770">nothing</span> <span m="924220">in</span> <span
  m="924330">here.</span> <span m="926170">So</span> <span m="926510">I</span>
  <span m="926590">should</span> <span m="926760">just</span> <span
  m="926900">be</span> <span m="926980">able</span> <span m="927140">to</span>
  <span m="927200">skip</span> <span m="927500">over it.</span></p><p><span
  m="928800">So</span> <span m="928970">you're</span> <span
  m="929200">imagining</span> <span m="929560">a</span> <span
  m="929660">kind</span> <span m="929870">of</span> <span
  m="930310">binary</span> <span m="930680">search-ish</span> <span
  m="931360">thing.</span> <span m="932330">It's</span> <span
  m="932460">a</span> <span m="932520">good</span> <span m="932640">idea.</span>
  <span m="937440">So</span> <span m="937830">each</span> <span
  m="938060">node</span> <span m="938280">here,</span> <span
  m="938420">I'm</span> <span m="938490">just</span> <span
  m="938650">writing</span> <span m="938890">the</span> <span
  m="939030">or</span> <span m="939470">of its two</span> <span
  m="939600">children.</span> <span m="944710">And</span> <span
  m="944800">in</span> <span m="944860">fact,</span> <span m="945120">you</span>
  <span m="945730">could</span> <span m="945940">do</span> <span
  m="946100">this</span> <span m="946280">all</span> <span m="946450">the</span>
  <span m="946520">way</span> <span m="946730">up.</span> <span
  m="946910">You</span> <span m="947030">could</span> <span
  m="947170">build</span> <span m="947460">an entire</span> <span
  m="948000">binary</span> <span m="948370">tree.</span></p><p><span
  m="950730">But</span> <span m="950870">remember,</span> <span
  m="951300">what</span> <span m="951460">we're</span> <span
  m="951580">trying</span> <span m="951900">to</span> <span m="951970">do</span>
  <span m="952270">is</span> <span m="952470">a</span> <span
  m="952690">binary</span> <span m="953090">search</span> <span
  m="953460">on</span> <span m="953600">the</span> <span
  m="953670">levels</span> <span m="954190">of</span> <span
  m="954300">the</span> <span m="954400">tree.</span> <span
  m="955520">And</span> <span m="955840">so,</span> <span m="956010">in</span>
  <span m="956090">particular,</span> <span m="956690">I'm</span> <span
  m="956890">going</span> <span m="957030">to</span> <span
  m="957100">focus</span> <span m="957550">on</span> <span
  m="958700">this</span> <span m="959270">level.</span> <span
  m="960570">This</span> <span m="960650">is</span> <span m="960790">the</span>
  <span m="960940">middle</span> <span m="961240">level</span> <span
  m="961550">of</span> <span m="961710">that</span> <span m="961970">tree</span>
  <span m="962220">if</span> <span m="962370">I</span> <span m="962440">drew
  out</span> <span m="962790">the</span> <span m="962860">whole</span> <span
  m="963080">thing.</span></p><p><span m="965410">And</span> <span
  m="965710">that</span> <span m="966010">level</span> <span
  m="966150">is</span> <span m="966300">interesting,</span> <span
  m="966740">because</span> <span m="967110">it's</span> <span
  m="967500">just</span> <span m="967650">summarizing--</span> <span
  m="968760">is</span> <span m="968930">there</span> <span
  m="969090">anybody</span> <span m="969630">in</span> <span
  m="969730">here,</span> <span m="970280">is</span> <span
  m="970470">there</span> <span m="970600">anybody</span> <span
  m="971080">in</span> <span m="971190">this</span> <span
  m="971370">cluster,</span> <span m="971860">is</span> <span
  m="972000">there</span> <span m="972120">anybody</span> <span
  m="972500">in</span> <span m="972580">this</span> <span
  m="972740">cluster,</span> <span m="973200">is</span> <span
  m="973320">there</span> <span m="973470">anybody</span> <span
  m="974100">in</span> <span m="974190">this</span> <span
  m="974350">cluster.</span> <span m="975440">So</span> <span
  m="975720">we</span> <span m="975840">call</span> <span m="976080">this</span>
  <span m="976380">the</span> <span m="977440">summary</span> <span
  m="977920">vector.</span> <span m="982820">So</span> <span
  m="982950">we'll</span> <span m="983100">come</span> <span
  m="983270">back</span> <span m="983460">to</span> <span m="983520">your</span>
  <span m="983680">tree</span> <span m="984270">perspective</span> <span
  m="984940">at</span> <span m="985200">some</span> <span
  m="985420">point.</span> <span m="986660">That</span> <span
  m="986860">is</span> <span m="988380">a</span> <span m="988500">good</span>
  <span m="988740">big</span> <span m="988940">picture</span> <span
  m="989260">of what's</span> <span m="989490">going</span> <span
  m="989740">on.</span></p><p><span m="990470">But</span> <span
  m="990500">at</span> <span m="990580">this</span> <span
  m="990750">level,</span> <span m="991010">I'm</span> <span
  m="991100">just</span> <span m="991270">going</span> <span
  m="991360">to</span> <span m="991400">say,</span> <span m="991600">well
  let's</span> <span m="991900">store</span> <span m="992120">the</span> <span
  m="992220">bit</span> <span m="992420">vector.</span> <span
  m="992780">Let's</span> <span m="993040">also</span> <span
  m="993410">store</span> <span m="993680">this</span> <span
  m="993810">summary</span> <span m="994210">vector.</span> <span
  m="996570">And</span> <span m="996750">now,</span> <span
  m="997740">when</span> <span m="997920">I</span> <span m="997960">want</span>
  <span m="998150">to</span> <span m="998200">find</span> <span
  m="998480">the</span> <span m="998540">successor</span> <span
  m="998990">of</span> <span m="999120">something,</span> <span
  m="999950">first</span> <span m="1000310">I'll</span> <span
  m="1000410">look</span> <span m="1000730">inside</span> <span
  m="1001260">the</span> <span m="1001320">cluster.</span> <span
  m="1002610">If</span> <span m="1002760">I</span> <span
  m="1002830">don't</span> <span m="1003120">find</span> <span
  m="1003430">my</span> <span m="1003560">answer,</span> <span
  m="1004370">I'll</span> <span m="1004510">go</span> <span
  m="1004690">up</span> <span m="1004880">to</span> <span m="1004990">the</span>
  <span m="1005120">summary</span> <span m="1005580">vector</span> <span
  m="1006000">and</span> <span m="1006100">find</span> <span
  m="1006700">where</span> <span m="1007090">is</span> <span
  m="1007230">the</span> <span m="1007330">next</span> <span
  m="1007600">cluster</span> <span m="1008000">that</span> <span
  m="1008110">has</span> <span m="1008330">something</span> <span
  m="1008840">in</span> <span m="1008920">it.</span></p><p><span
  m="1009880">And</span> <span m="1010020">then</span> <span
  m="1010120">I'll</span> <span m="1010200">go</span> <span
  m="1010350">into</span> <span m="1010650">that</span> <span
  m="1010870">cluster</span> <span m="1011740">and</span> <span
  m="1012040">look</span> <span m="1012220">for</span> <span
  m="1012300">the</span> <span m="1012390">first</span> <span
  m="1012710">one.</span> <span m="1014450">OK,</span> <span
  m="1014670">that's</span> <span m="1017630">a</span> <span
  m="1017760">good</span> <span m="1017990">next</span> <span
  m="1018280">step.</span> <span m="1019560">So</span> <span
  m="1019720">this</span> <span m="1019930">will</span> <span
  m="1020330">split</span> <span m="1023220">the</span> <span
  m="1023330">universe</span> <span m="1026050">into</span> <span
  m="1026790">clusters.</span></p><p><span m="1030280">How</span> <span
  m="1030780">big</span> <span m="1031020">should</span> <span
  m="1031210">the</span> <span m="1031310">clusters</span> <span
  m="1031819">be</span> <span m="1033480">to</span> <span
  m="1033609">balance</span> <span m="1034140">out?</span> <span
  m="1035040">There's</span> <span m="1035280">three</span> <span
  m="1035520">searches</span> <span m="1035900">I'm</span> <span
  m="1036000">doing.</span> <span m="1036260">One</span> <span
  m="1036450">is</span> <span m="1036560">within</span> <span
  m="1036839">a</span> <span m="1036900">cluster.</span> <span
  m="1037829">One</span> <span m="1038060">is</span> <span m="1038220">in</span>
  <span m="1038400">the</span> <span m="1038490">summary</span> <span
  m="1038920">vector.</span> <span m="1039700">And</span> <span
  m="1039900">one</span> <span m="1040119">is</span> <span
  m="1040300">within</span> <span m="1041762">another</span> <span
  m="1042140">cluster.</span> <span m="1043498">Yeah.</span></p><p><span
  m="1043922">AUDIENCE: Square root</span> <span
  m="1044346">u.</span></p><p><span m="1044770">PROFESSOR: Square</span> <span
  m="1045220">root u.</span> <span m="1046000">Yeah.</span> <span
  m="1046410">That</span> <span m="1046599">will</span> <span
  m="1046720">balance</span> <span m="1047140">out.</span> <span
  m="1047740">If</span> <span m="1047869">there's</span> <span
  m="1047990">square</span> <span m="1048220">root</span> <span
  m="1048310">of</span> <span m="1048390">u</span> <span
  m="1049000">size,</span> <span m="1049640">then</span> <span
  m="1049770">the</span> <span m="1049850">number</span> <span
  m="1050160">of</span> <span m="1050230">clusters</span> <span
  m="1050610">will</span> <span m="1050700">be</span> <span
  m="1050810">square</span> <span m="1051040">root</span> <span
  m="1051110">of</span> <span m="1051200">u.</span> <span m="1051350">So</span>
  <span m="1051490">the</span> <span m="1051600">search</span> <span
  m="1051870">in the</span> <span m="1052000">summary</span> <span
  m="1052310">vector</span> <span m="1052620">will</span> <span
  m="1052710">be</span> <span m="1052840">the</span> <span
  m="1052970">same</span> <span m="1053270">as</span> <span
  m="1053380">the</span> <span m="1053460">cost</span> <span
  m="1053760">down</span> <span m="1053930">here.</span></p><p><span
  m="1054410">Also</span> <span m="1054810">we</span> <span
  m="1054950">know</span> <span m="1055200">that</span> <span
  m="1055320">we</span> <span m="1055460">kind</span> <span
  m="1055690">of</span> <span m="1055750">want</span> <span
  m="1055910">to</span> <span m="1055970">do</span> <span
  m="1056130">square</span> <span m="1056390">root</span> <span
  m="1056460">of</span> <span m="1056540">u</span> <span
  m="1056680">recursion</span> <span m="1057160">somehow.</span> <span
  m="1058000">So</span> <span m="1058150">this</span> <span
  m="1058330">is</span> <span m="1058500">not</span> <span
  m="1058740">yet</span> <span m="1058930">the</span> <span
  m="1058990">recursive</span> <span m="1059460">version.</span> <span
  m="1060030">But</span> <span m="1060610">square</span> <span
  m="1060850">root</span> <span m="1060930">of</span> <span m="1061030">u</span>
  <span m="1061230">is</span> <span m="1061460">exactly</span> <span
  m="1061940">right.</span> <span m="1062140">And I</span> <span m="1062570">owe
  some</span> <span m="1062820">frisbees,</span> <span m="1063270">sorry.</span>
  <span m="1064350">Here's</span> <span m="1064800">one frisbee.</span> <span
  m="1066710">And</span> <span m="1067640">yeah,</span> <span
  m="1069110">cool.</span></p><p><span m="1070860">And</span> <span
  m="1071060">I</span> <span m="1071120">think</span> <span
  m="1071660">also</span> <span m="1073130">you</span> <span
  m="1073600">one.</span> <span m="1074552">Sorry.</span> <span
  m="1076460">So</span> <span m="1078720">clusters</span> <span
  m="1080290">have</span> <span m="1080630">size</span> <span
  m="1081080">square</span> <span m="1081350">root</span> <span
  m="1081430">of</span> <span m="1081570">u,</span> <span m="1082420">the</span>
  <span m="1082520">square</span> <span m="1082770">root</span> <span
  m="1082840">of</span> <span m="1082940">u</span> <span m="1083350">of</span>
  <span m="1083520">them.</span> <span m="1084260">And,</span> <span
  m="1085880">cool.</span></p><p><span m="1086350">So</span> <span
  m="1086520">now,</span> <span m="1086950">when</span> <span
  m="1087140">I</span> <span m="1087210">want</span> <span m="1089220">to</span>
  <span m="1089310">do</span> <span m="1089420">an</span> <span
  m="1089510">insert</span> <span m="1089840">or</span> <span
  m="1089900">a</span> <span m="1090000">delete,</span> <span
  m="1090250">it's</span> <span m="1090360">still--</span> <span
  m="1091980">let's</span> <span m="1092240">not</span> <span
  m="1092360">worry</span> <span m="1092510">about</span> <span
  m="1092730">delete.</span> <span m="1093340">That's</span> <span
  m="1093630">a</span> <span m="1093680">little</span> <span
  m="1093870">tricky.</span> <span m="1094580">To</span> <span
  m="1094780">do</span> <span m="1094910">an</span> <span
  m="1095000">insert,</span> <span m="1095380">it's</span> <span
  m="1095510">still</span> <span m="1095740">easy.</span> <span
  m="1096170">If</span> <span m="1096300">I</span> <span
  m="1096410">insert</span> <span m="1096770">into</span> <span
  m="1096960">here,</span> <span m="1097820">I</span> <span
  m="1097910">set</span> <span m="1098150">it</span> <span m="1098270">to</span>
  <span m="1098370">1.</span> <span m="1098960">And</span> <span
  m="1099120">I</span> <span m="1099200">check,</span> <span
  m="1099970">if</span> <span m="1100070">this</span> <span
  m="1100230">is</span> <span m="1100360">already</span> <span
  m="1100690">0,</span> <span m="1101140">I</span> <span
  m="1101280">should</span> <span m="1101510">also</span> <span
  m="1101770">set</span> <span m="1102020">that</span> <span
  m="1102230">to</span> <span m="1102330">1.</span></p><p><span
  m="1103210">Now</span> <span m="1103570">deleting</span> <span
  m="1104130">would</span> <span m="1104290">be</span> <span
  m="1104480">tricky.</span> <span m="1104830">To</span> <span
  m="1104930">delete</span> <span m="1105250">this</span> <span
  m="1105440">guy</span> <span m="1105620">and</span> <span
  m="1105700">realize</span> <span m="1106060">that</span> <span
  m="1106180">there's</span> <span m="1106340">nothing</span> <span
  m="1106680">else,</span> <span m="1107040">eh.</span> <span
  m="1107920">Let's</span> <span m="1108090">not</span> <span
  m="1108230">worry</span> <span m="1108370">about</span> <span
  m="1108600">that</span> <span m="1108880">until</span> <span
  m="1109170">we</span> <span m="1109280">do</span> <span m="1109470">a</span>
  <span m="1109500">lot</span> <span m="1109680">more</span> <span
  m="1109830">work.</span> <span m="1110890">Let's</span> <span
  m="1111050">just</span> <span m="1111200">focus</span> <span
  m="1111480">on</span> <span m="1111600">insert</span> <span
  m="1111980">and</span> <span m="1112120">successor.</span></p><p><span
  m="1113790">So</span> <span m="1116050">insert,</span> <span
  m="1117510">with</span> <span m="1117650">this</span> <span
  m="1117790">strategy,</span> <span m="1118360">is</span> <span
  m="1118470">still</span> <span m="1118830">constant</span> <span
  m="1119280">time.</span> <span m="1120940">It's</span> <span
  m="1121540">two</span> <span m="1121730">steps</span> <span
  m="1122170">instead</span> <span m="1122280">of</span> <span
  m="1122360">one,</span> <span m="1122700">but</span> <span
  m="1122890">it's</span> <span m="1123180">good.</span> <span
  m="1124730">Successor</span> <span m="1128160">does</span> <span
  m="1128660">three</span> <span m="1128920">things.</span> <span
  m="1130360">First,</span> <span m="1130760">we</span> <span
  m="1131730">look,</span> <span m="1133010">let's</span> <span
  m="1133210">say,</span> <span m="1133870">successor</span> <span
  m="1134460">of</span> <span m="1134710">x.</span></p><p><span
  m="1136230">First</span> <span m="1136470">thing</span> <span
  m="1136600">we</span> <span m="1136730">do</span> <span m="1136940">is</span>
  <span m="1137210">look</span> <span m="1137590">in</span> <span
  m="1138010">x's</span> <span m="1138420">cluster.</span> <span
  m="1142930">Then,</span> <span m="1143510">if</span> <span
  m="1144940">we</span> <span m="1145030">don't</span> <span
  m="1145300">find</span> <span m="1145530">what</span> <span
  m="1145640">we're</span> <span m="1145740">looking</span> <span
  m="1146050">for,</span> <span m="1146860">then</span> <span
  m="1147250">we'll</span> <span m="1150680">look</span> <span
  m="1151000">for</span> <span m="1152460">the</span> <span
  m="1152580">next</span> <span m="1154220">1</span> <span
  m="1154520">bit</span> <span m="1155310">in</span> <span
  m="1155730">the</span> <span m="1155850">summary</span> <span
  m="1156290">vector,</span> <span m="1160690">and</span> <span
  m="1160930">then,</span> <span m="1161720">we'll</span> <span
  m="1161980">look</span> <span m="1162170">for</span> <span
  m="1163370">the</span> <span m="1163480">first</span> <span
  m="1163920">1</span> <span m="1169380">in</span> <span m="1170150">that</span>
  <span m="1170340">cluster.</span></p><p><span m="1174190">So</span> <span
  m="1174300">there</span> <span m="1174440">are</span> <span
  m="1174490">two</span> <span m="1174660">cases.</span> <span
  m="1175190">In</span> <span m="1175400">the</span> <span
  m="1175520">lucky</span> <span m="1175840">case,</span> <span
  m="1176630">we</span> <span m="1176770">find</span> <span
  m="1176990">the</span> <span m="1177040">successor</span> <span
  m="1177600">in</span> <span m="1177800">the</span> <span
  m="1177880">cluster</span> <span m="1178145">that</span> <span
  m="1178410">we</span> <span m="1178580">started</span> <span
  m="1178960">in.</span> <span m="1179670">So</span> <span
  m="1179810">that</span> <span m="1179990">only</span> <span
  m="1180190">takes</span> <span m="1180420">root u</span> <span
  m="1180740">time.</span> <span m="1181590">If</span> <span
  m="1181960">we're</span> <span m="1182110">unlucky,</span> <span
  m="1182500">we</span> <span m="1182630">research</span> <span
  m="1183040">in</span> <span m="1183110">the</span> <span
  m="1183180">summary.</span> <span m="1184100">That</span> <span
  m="1184280">takes</span> <span m="1184460">root</span> <span
  m="1184580">u</span> <span m="1184760">time.</span> <span
  m="1185530">And</span> <span m="1185620">then</span> <span
  m="1185710">we</span> <span m="1185810">find</span> <span
  m="1185990">the</span> <span m="1186060">first</span> <span
  m="1186330">1</span> <span m="1186490">bit.</span> <span
  m="1186660">That</span> <span m="1186840">takes</span> <span
  m="1187340">root</span> <span m="1187470">u</span> <span
  m="1187600">time.</span></p><p><span m="1187880">Whole</span> <span
  m="1188090">thing</span> <span m="1188470">is</span> <span
  m="1188700">square</span> <span m="1188950">root</span> <span
  m="1189040">of</span> <span m="1189100">u,</span> <span
  m="1189990">which</span> <span m="1190310">is,</span> <span
  m="1191040">of</span> <span m="1191060">course,</span> <span
  m="1191620">not</span> <span m="1191750">very</span> <span
  m="1191930">good,</span> <span m="1192590">compared</span> <span
  m="1192920">to</span> <span m="1193000">log</span> <span m="1193265">n.</span>
  <span m="1193930">But</span> <span m="1194150">it's</span> <span
  m="1194340">a</span> <span m="1194410">lot</span> <span
  m="1194620">better</span> <span m="1194850">than</span> <span
  m="1195040">u,</span> <span m="1195890">which</span> <span
  m="1196140">is</span> <span m="1196290">our</span> <span
  m="1196700">first</span> <span m="1196990">method,</span> <span
  m="1198010">the</span> <span m="1198100">bit</span> <span
  m="1198290">vector.</span> <span m="1199070">So</span> <span
  m="1199300">we've</span> <span m="1199440">improved</span> <span
  m="1199730">from</span> <span m="1199880">u</span> <span m="1200060">to</span>
  <span m="1200160">square</span> <span m="1200430">root</span> <span
  m="1200490">of</span> <span m="1200580">u.</span> <span m="1201230">Now</span>
  <span m="1201410">of</span> <span m="1201500">course,</span> <span
  m="1201750">the</span> <span m="1201860">idea</span> <span
  m="1202130">is</span> <span m="1202390">to</span> <span
  m="1202540">recurse.</span></p><p><span m="1203660">Instead</span> <span
  m="1204010">of</span> <span m="1204120">just</span> <span
  m="1205230">doing</span> <span m="1205540">a</span> <span
  m="1205590">bit</span> <span m="1205810">vector at</span> <span
  m="1206120">each</span> <span m="1206350">of</span> <span
  m="1206400">these</span> <span m="1206550">levels,</span> <span
  m="1206910">we're</span> <span m="1207010">going</span> <span
  m="1207130">to</span> <span m="1207190">recursively</span> <span
  m="1207820">represent</span> <span m="1208390">each</span> <span
  m="1208580">of</span> <span m="1208680">these</span> <span
  m="1208960">clusters</span> <span m="1210040">in</span> <span
  m="1210300">this</span> <span m="1210550">way.</span> <span
  m="1211820">This</span> <span m="1211980">is</span> <span
  m="1212090">where</span> <span m="1212280">things</span> <span
  m="1212620">get</span> <span m="1212760">a</span> <span
  m="1212800">little</span> <span m="1212960">magical,</span> <span
  m="1213290">in</span> <span m="1213540">the</span> <span
  m="1213600">magic</span> <span m="1213960">of</span> <span
  m="1214880">divide</span> <span m="1215130">and</span> <span
  m="1215220">conquer.</span> <span m="1217730">And</span> <span
  m="1218020">then,</span> <span m="1218210">we'll</span> <span
  m="1218340">get</span> <span m="1218640">t</span> <span m="1218740">of</span>
  <span m="1218960">square</span> <span m="1219240">root</span> <span
  m="1219330">of</span> <span m="1219420">u</span> <span
  m="1219710">instead</span> <span m="1220110">of</span> <span
  m="1221150">square</span> <span m="1221480">root</span> <span
  m="1221560">of</span> <span m="1221640">u.</span> <span m="1223070">And</span>
  <span m="1223260">then</span> <span m="1223380">we'll</span> <span
  m="1223480">get</span> <span m="1223620">a</span> <span m="1223690">log</span>
  <span m="1223970">log</span> <span m="1224930">cost.</span></p><p><span
  m="1226280">So</span> <span m="1231190">before</span> <span
  m="1231690">I</span> <span m="1231740">get</span> <span
  m="1232020">there,</span> <span m="1232320">let</span> <span
  m="1232380">me</span> <span m="1232920">give</span> <span
  m="1233080">you</span> <span m="1233210">a</span> <span
  m="1233230">little</span> <span m="1233450">bit</span> <span
  m="1233600">of</span> <span m="1233780">terminology</span> <span
  m="1238220">and</span> <span m="1238690">an</span> <span
  m="1238790">example</span> <span m="1240460">for</span> <span
  m="1240650">dealing</span> <span m="1241080">with</span> <span
  m="1241890">clusters.</span> <span m="1245770">OK,</span> <span
  m="1245990">in</span> <span m="1246080">general,</span> <span
  m="1247460">remember</span> <span m="1247630">the</span> <span
  m="1247760">things</span> <span m="1247980">we're</span> <span
  m="1248080">searching</span> <span m="1248430">for are</span> <span
  m="1248690">just</span> <span m="1248890">integers.</span> <span
  m="1250580">And</span> <span m="1251500">what</span> <span
  m="1251680">we're</span> <span m="1251810">talking</span> <span
  m="1252260">about</span> <span m="1252710">is</span> <span
  m="1253090">essentially</span> <span m="1253510">dividing</span> <span
  m="1254870">an</span> <span m="1255010">integer,</span> <span
  m="1255360">like</span> <span m="1255570">x,</span> <span
  m="1255880">by</span> <span m="1256030">square</span> <span
  m="1256350">root</span> <span m="1256430">of</span> <span
  m="1256540">u.</span></p><p><span m="1257710">And</span> <span
  m="1258060">so</span> <span m="1258190">this</span> <span
  m="1258460">is,</span> <span m="1258700">whatever,</span> <span
  m="1260820">the</span> <span m="1260940">quotient.</span> <span
  m="1261470">And</span> <span m="1261590">this</span> <span
  m="1261720">is</span> <span m="1261890">the</span> <span
  m="1262010">remainder.</span> <span m="1262660">So</span> <span
  m="1262670">I</span> <span m="1262740">want</span> <span m="1263010">j</span>
  <span m="1263290">to</span> <span m="1263390">be</span> <span
  m="1264330">between</span> <span m="1264690">0</span> <span
  m="1265210">and</span> <span m="1265470">strictly</span> <span
  m="1265830">less</span> <span m="1266080">than</span> <span
  m="1266180">square</span> <span m="1266450">root</span> <span
  m="1266530">of</span> <span m="1266620">u.</span> <span
  m="1267290">Then</span> <span m="1267480">this</span> <span
  m="1267670">is</span> <span m="1267820">unique,</span> <span
  m="1269300">fundamental</span> <span m="1269770">theorem</span> <span
  m="1269980">of</span> <span m="1270050">arithmetic,</span> <span
  m="1270560">or</span> <span m="1270630">something.</span></p><p><span
  m="1272350">And</span> <span m="1272690">i</span> <span m="1273680">is</span>
  <span m="1274060">the</span> <span m="1274310">cluster</span> <span
  m="1274880">number.</span> <span m="1275950">And</span> <span
  m="1276110">then</span> <span m="1276270">j</span> <span m="1276740">is</span>
  <span m="1276960">the</span> <span m="1277060">position</span> <span
  m="1277430">of</span> <span m="1277540">x</span> <span
  m="1277790">within</span> <span m="1278130">that</span> <span
  m="1278330">cluster.</span> <span m="1279860">So</span> <span
  m="1280110">let's</span> <span m="1280400">do</span> <span
  m="1280810">an</span> <span m="1280920">example</span> <span
  m="1282050">like</span> <span m="1284550">x</span> <span
  m="1285130">equals</span> <span m="1285580">9.</span> <span
  m="1288000">So</span> <span m="1288850">I</span> <span
  m="1288920">didn't</span> <span m="1289180">number</span> <span
  m="1289420">them</span> <span m="1289600">over</span> <span
  m="1289790">here.</span> <span m="1290720">This</span> <span
  m="1290830">is</span> <span m="1291420">x</span> <span
  m="1291680">equals</span> <span m="1291920">0,</span> <span
  m="1292416">1,</span> <span m="1292912">2,</span> <span m="1293408">3,</span>
  <span m="1293904">4,</span> <span m="1294400">5,</span> <span
  m="1294896">6,</span> <span m="1295392">7,</span> <span m="1295888">8,</span>
  <span m="1296384">9--</span> <span m="1296880">here's the</span> <span
  m="1297180">guy</span> <span m="1297480">I'm</span> <span
  m="1297500">interested</span> <span m="1297940">in--</span> <span
  m="1298630">10,</span> <span m="1299110">11,</span> <span
  m="1299590">12,</span> <span m="1301030">and</span> <span
  m="1301510">so</span> <span m="1301670">on.</span></p><p><span
  m="1303860">So</span> <span m="1304040">9</span> <span m="1304400">is</span>
  <span m="1304510">here.</span> <span m="1305110">This</span> <span
  m="1305310">is</span> <span m="1305460">cluster</span> <span
  m="1305930">number</span> <span m="1306700">0,</span> <span
  m="1307260">1,</span> <span m="1307990">2.</span> <span m="1309380">So</span>
  <span m="1309540">I</span> <span m="1309600">claim</span> <span
  m="1309930">9</span> <span m="1310410">equals</span> <span
  m="1311260">2</span> <span m="1311800">times</span> <span
  m="1312220">square</span> <span m="1312490">root</span> <span
  m="1312560">of</span> <span m="1312660">u.</span> <span
  m="1312870">Here</span> <span m="1313160">is</span> <span
  m="1313320">4.</span> <span m="1313860">I</span> <span
  m="1313910">conveniently</span> <span m="1314380">chose</span> <span
  m="1314640">u</span> <span m="1314800">to</span> <span m="1314870">be</span>
  <span m="1315060">a</span> <span m="1315130">perfect</span> <span
  m="1315470">square.</span> <span m="1317110">And</span> <span
  m="1317590">it</span> <span m="1317740">is</span> <span
  m="1317940">item</span> <span m="1318340">0,1</span> <span
  m="1320330">within</span> <span m="1321130">the</span> <span
  m="1321220">cluster.</span></p><p><span m="1321810">And</span> <span
  m="1322010">indeed,</span> <span m="1322280">9</span> <span
  m="1322530">equals</span> <span m="1322780">2</span> <span
  m="1322910">times</span> <span m="1323170">4</span> <span
  m="1323340">plus</span> <span m="1323620">1.</span> <span
  m="1325370">So</span> <span m="1326520">in</span> <span
  m="1326650">general,</span> <span m="1327120">if</span> <span
  m="1328080">you're</span> <span m="1328490">given</span> <span
  m="1328810">x,</span> <span m="1329360">and</span> <span m="1329650">I</span>
  <span m="1329780">said,</span> <span m="1330190">ah,</span> <span
  m="1330665">look</span> <span m="1331140">in</span> <span
  m="1331300">x's</span> <span m="1331730">cluster,</span> <span
  m="1332170">what</span> <span m="1332300">that</span> <span
  m="1332470">means</span> <span m="1332770">is</span> <span
  m="1333300">look</span> <span m="1333630">at</span> <span m="1333940">x</span>
  <span m="1334690">integer</span> <span m="1335080">divided</span> <span
  m="1335580">by</span> <span m="1336010">square</span> <span
  m="1336270">root</span> <span m="1336350">of</span> <span
  m="1336440">u.</span> <span m="1337440">That's</span> <span
  m="1337710">the</span> <span m="1338030">cluster</span> <span
  m="1338400">number.</span> <span m="1339060">And</span> <span
  m="1339260">I'll</span> <span m="1339390">try</span> <span
  m="1339540">to</span> <span m="1339620">search</span> <span
  m="1339910">in</span> <span m="1340010">there.</span></p><p>&nbsp;</p><p><span
  m="1342510">And</span> <span m="1342860">I</span> <span
  m="1343210">look</span> <span m="1343610">in</span> <span
  m="1343780">the</span> <span m="1343860">summary</span> <span
  m="1344330">vector,</span> <span m="1344690">starting</span> <span
  m="1345220">from</span> <span m="1346010">that</span> <span
  m="1346380">cluster</span> <span m="1346860">name,</span> <span
  m="1347290">the</span> <span m="1347400">name</span> <span
  m="1347650">of</span> <span m="1347750">the</span> <span
  m="1347850">cluster</span> <span m="1348210">for</span> <span
  m="1348330">this</span> <span m="1348580">guy,</span> <span
  m="1349630">finding</span> <span m="1350070">the</span> <span
  m="1350150">next</span> <span m="1350470">cluster.</span> <span
  m="1351340">Then</span> <span m="1351460">I'll</span> <span
  m="1351550">multiply</span> <span m="1352120">by</span> <span
  m="1352260">square</span> <span m="1352500">root</span> <span
  m="1352560">of</span> <span m="1352640">u</span> <span m="1352790">to</span>
  <span m="1352850">get</span> <span m="1353040">here,</span> <span
  m="1353860">and</span> <span m="1354160">then</span> <span
  m="1355020">continue</span> <span m="1355450">on.</span></p><p><span
  m="1356930">In</span> <span m="1357070">general,</span> <span
  m="1357900">because</span> <span m="1358250">dividing</span> <span
  m="1358720">to</span> <span m="1358770">multiplying--</span> <span
  m="1360240">I</span> <span m="1360340">don't</span> <span
  m="1360440">want</span> <span m="1360670">to have to</span> <span
  m="1360740">think</span> <span m="1360910">about</span> <span
  m="1361120">it</span> <span m="1361240">too</span> <span
  m="1361390">hard.</span> <span m="1363220">I'm</span> <span
  m="1363350">going</span> <span m="1363600">to</span> <span
  m="1363730">say,</span> <span m="1366460">define</span> <span
  m="1366670">some</span> <span m="1366810">functions</span> <span
  m="1367490">to</span> <span m="1367610">make</span> <span
  m="1367850">this</span> <span m="1368330">a</span> <span
  m="1368700">little</span> <span m="1369360">easier,</span> <span
  m="1370580">more</span> <span m="1370780">intuitive.</span> <span
  m="1371290">So</span> <span m="1371540">when</span> <span m="1371650">I</span>
  <span m="1371700">do</span> <span m="1371830">integer</span> <span
  m="1372200">division</span> <span m="1372590">by</span> <span
  m="1372720">square</span> <span m="1373000">root</span> <span
  m="1373080">of</span> <span m="1373180">u,</span> <span
  m="1373940">which</span> <span m="1373960">is</span> <span
  m="1374090">like</span> <span m="1374270">taking</span> <span
  m="1374570">the</span> <span m="1374650">floor,</span> <span
  m="1375030">I'll</span> <span m="1375140">call</span> <span
  m="1375310">that</span> <span m="1375470">high</span> <span
  m="1375840">of</span> <span m="1375990">x,</span> <span m="1376270">the</span>
  <span m="1376350">high</span> <span m="1377570">part</span> <span
  m="1377910">of</span> <span m="1378040">x.</span></p><p><span
  m="1378370">And</span> <span m="1378570">low of</span> <span
  m="1379000">x</span> <span m="1379270">is</span> <span
  m="1379410">going</span> <span m="1379560">to</span> <span
  m="1379640">be</span> <span m="1380380">the</span> <span
  m="1380500">remainder.</span> <span m="1381320">That's</span> <span
  m="1381600">the</span> <span m="1382330">j</span> <span m="1382690">up</span>
  <span m="1382860">here.</span> <span m="1387350">And</span> <span
  m="1387630">if</span> <span m="1387750">I</span> <span m="1388020">have</span>
  <span m="1388500">the</span> <span m="1388750">high</span> <span
  m="1389040">and</span> <span m="1389160">the</span> <span
  m="1389250">low</span> <span m="1389440">part,</span> <span
  m="1389720">the</span> <span m="1389850">i</span> <span m="1389980">and</span>
  <span m="1390090">the</span> <span m="1390170">j,</span> <span
  m="1390910">I'm</span> <span m="1391030">going</span> <span
  m="1391110">to</span> <span m="1391150">use</span> <span
  m="1391450">index</span> <span m="1393110">to</span> <span
  m="1393400">go</span> <span m="1393570">back</span> <span
  m="1394000">to</span> <span m="1394440">x.</span> <span m="1395070">So</span>
  <span m="1395450">index</span> <span m="1395840">of</span> <span
  m="1395960">ij</span> <span m="1396470">is</span> <span
  m="1396650">going</span> <span m="1396800">to</span> <span
  m="1396860">be</span> <span m="1397050">i</span> <span
  m="1397530">times</span> <span m="1397800">square</span> <span
  m="1398100">root</span> <span m="1398190">of</span> <span m="1398290">u</span>
  <span m="1399180">plus</span> <span m="1399650">j.</span></p><p><span
  m="1402370">Now</span> <span m="1403590">why</span> <span
  m="1403840">do</span> <span m="1403980">I</span> <span m="1404040">call</span>
  <span m="1404340">these</span> <span m="1404520">high</span> <span
  m="1404850">and</span> <span m="1405040">low?</span> <span m="1412570">I'll
  give</span> <span m="1412710">you</span> <span m="1412810">a hint.</span>
  <span m="1422530">Here's</span> <span m="1422810">the</span> <span
  m="1422940">binary</span> <span m="1423220">representation</span> <span
  m="1423860">of</span> <span m="1423940">x.</span> <span m="1436820">In</span>
  <span m="1436860">this</span> <span m="1437040">case,</span> <span
  m="1437340">high</span> <span m="1437540">of</span> <span m="1437660">x</span>
  <span m="1438010">is</span> <span m="1439260">2.</span> <span
  m="1441160">And</span> <span m="1441340">low</span> <span
  m="1441550">of</span> <span m="1441680">x</span> <span m="1441900">is</span>
  <span m="1442050">1.</span> <span m="1446282">Yeah.</span></p><p><span
  m="1447230">AUDIENCE: So</span> <span m="1447704">the</span> <span
  m="1448178">high x</span> <span m="1448652">corresponds to</span> <span
  m="1449130">the first</span> <span m="1449370">two,</span> <span
  m="1449550">which</span> <span m="1450043">is the</span> <span
  m="1450536">first</span> <span m="1451029">2 bit.</span> <span
  m="1451522">And</span> <span m="1452015">the low x</span> <span
  m="1452508">corresponds</span> <span m="1453001">to</span> <span
  m="1453494">[INAUDIBLE].</span></p><p><span m="1453990">PROFESSOR:
  Right.</span> <span m="1455930">High</span> <span m="1456130">of</span> <span
  m="1456240">x</span> <span m="1456460">corresponds</span> <span
  m="1457090">to</span> <span m="1459310">the</span> <span
  m="1459480">high</span> <span m="1459940">half</span> <span
  m="1460330">of</span> <span m="1460470">the</span> <span
  m="1460550">bits.</span> <span m="1461480">And</span> <span m="1461670">low
  of</span> <span m="1462060">x</span> <span m="1462370">corresponds</span>
  <span m="1463090">to</span> <span m="1464310">the</span> <span
  m="1464870">bottom</span> <span m="1465200">half</span> <span
  m="1465570">of</span> <span m="1465700">the bits.</span> <span
  m="1466230">So</span> <span m="1466410">these</span> <span
  m="1466600">are</span> <span m="1466630">the</span> <span
  m="1466720">high</span> <span m="1466980">order</span> <span
  m="1467190">bits</span> <span m="1467920">and</span> <span
  m="1468040">the</span> <span m="1468130">low</span> <span
  m="1468250">order</span> <span m="1468470">bits.</span></p><p><span
  m="1469520">And</span> <span m="1469870">if</span> <span
  m="1469990">you</span> <span m="1470090">think</span> <span
  m="1470310">about</span> <span m="1470550">it,</span> <span
  m="1470620">remember</span> <span m="1471170">when</span> <span
  m="1471400">we</span> <span m="1471540">take</span> <span
  m="1471750">square</span> <span m="1472120">root</span> <span
  m="1472220">of</span> <span m="1472320">u</span> <span m="1472890">in</span>
  <span m="1473050">logarithm,</span> <span m="1473910">it</span> <span
  m="1474060">takes</span> <span m="1474330">log</span> <span
  m="1474660">u</span> <span m="1474790">and</span> <span
  m="1474950">divides</span> <span m="1475460">it</span> <span
  m="1475560">in</span> <span m="1475610">half.</span> <span
  m="1476810">So</span> <span m="1477250">it's</span> <span
  m="1477410">exactly,</span> <span m="1478080">in</span> <span
  m="1478180">the</span> <span m="1478260">bit</span> <span
  m="1478480">factor,</span> <span m="1478880">which</span> <span
  m="1479050">is</span> <span m="1479160">log</span> <span m="1479450">u</span>
  <span m="1479570">bits</span> <span m="1479830">long,</span> <span
  m="1480370">we're</span> <span m="1480540">dividing</span> <span
  m="1481110">in</span> <span m="1481370">half</span> <span
  m="1481690">here,</span> <span m="1482900">and</span> <span
  m="1483040">looking</span> <span m="1483270">at</span> <span
  m="1483360">the</span> <span m="1483430">high</span> <span
  m="1483730">bits</span> <span m="1484280">versus</span> <span
  m="1484580">the</span> <span m="1484650">low</span> <span
  m="1484850">bits.</span></p><p><span m="1487260">OK?</span> <span
  m="1488730">So</span> <span m="1488930">that's</span> <span
  m="1489760">another</span> <span m="1490270">interpretation</span> <span
  m="1490890">of</span> <span m="1490970">what</span> <span
  m="1491140">this</span> <span m="1491290">is</span> <span
  m="1491390">doing.</span> <span m="1491780">And if</span> <span
  m="1491790">you</span> <span m="1491880">don't</span> <span
  m="1492070">like</span> <span m="1492920">doing</span> <span
  m="1493160">division,</span> <span m="1493860">as</span> <span
  m="1494150">many</span> <span m="1494380">computers</span> <span
  m="1494790">don't</span> <span m="1494940">like</span> <span
  m="1495120">to</span> <span m="1495230">do,</span> <span
  m="1496110">all</span> <span m="1496330">we're</span> <span
  m="1496520">actually</span> <span m="1496830">doing</span> <span
  m="1497090">is</span> <span m="1497530">masking</span> <span
  m="1498000">out</span> <span m="1498140">these</span> <span
  m="1498340">bits,</span> <span m="1498700">or</span> <span
  m="1498810">taking</span> <span m="1499110">these</span> <span
  m="1499290">bits</span> <span m="1499530">and</span> <span
  m="1499610">shifting</span> <span m="1499920">them</span> <span
  m="1500080">over.</span> <span m="1501060">So</span> <span
  m="1501220">these</span> <span m="1501400">are</span> <span
  m="1501470">very</span> <span m="1501730">efficient</span> <span
  m="1502150">to</span> <span m="1502240">actually</span> <span
  m="1503190">do.</span></p><p><span m="1503620">And</span> <span
  m="1503990">maybe</span> <span m="1504230">get</span> <span
  m="1504400">some</span> <span m="1504630">intuition</span> <span
  m="1505140">for</span> <span m="1506380">why</span> <span
  m="1506620">they're</span> <span m="1506800">relevant.</span> <span
  m="1507950">So</span> <span m="1512730">let's</span> <span
  m="1512930">recurse,</span> <span m="1513430">shall we?</span> <span
  m="1521975">I think</span> <span m="1522460">now</span> <span
  m="1522670">we</span> <span m="1522770">know</span> <span
  m="1523270">how</span> <span m="1523510">this</span> <span
  m="1524020">splitting</span> <span m="1524450">things</span> <span
  m="1524670">up</span> <span m="1524820">works.</span></p><p><span
  m="1542230">So</span> <span m="1542620">I'm</span> <span
  m="1542790">going</span> <span m="1543000">to</span> <span
  m="1543130">call</span> <span m="1545690">the</span> <span
  m="1545810">overall</span> <span m="1546180">structure</span> <span
  m="1546720">v,</span> <span m="1547150">or</span> <span m="1548020">a</span>
  <span m="1548170">van Emde</span> <span m="1548380">Boas</span> <span
  m="1548710">structure I'm</span> <span m="1548800">trying</span> <span
  m="1548990">to</span> <span m="1549040">represent</span> <span
  m="1549500">is</span> <span m="1549700">v.</span> <span m="1551810">And</span>
  <span m="1553160">v</span> <span m="1553310">is</span> <span
  m="1553410">going</span> <span m="1553570">to</span> <span
  m="1553650">consist</span> <span m="1554180">of</span> <span
  m="1554540">two</span> <span m="1554750">parts.</span> <span
  m="1556390">One</span> <span m="1556750">is</span> <span m="1558550">an</span>
  <span m="1558720">array</span> <span m="1559600">of</span> <span
  m="1559810">all of</span> <span m="1560100">the</span> <span
  m="1560210">clusters.</span></p><p><span m="1568870">I'm</span> <span
  m="1568980">going</span> <span m="1569070">to</span> <span
  m="1569130">abbreviate</span> <span m="1569590">van Emde</span> <span
  m="1569890">Boas</span> <span m="1570500">as</span> <span
  m="1570810">VEB.</span> <span m="1573920">And</span> <span
  m="1575910">recursively,</span> <span m="1577060">each</span> <span
  m="1577300">of</span> <span m="1577420">those</span> <span
  m="1577710">clusters</span> <span m="1578190">is</span> <span
  m="1578310">going</span> <span m="1578510">to</span> <span
  m="1578590">be</span> <span m="1578720">represented</span> <span
  m="1579360">by</span> <span m="1579590">a</span> <span
  m="1579710">smaller</span> <span m="1580680">VEB</span> <span
  m="1581110">structure,</span> <span m="1582280">of</span> <span
  m="1582420">size</span> <span m="1582750">square</span> <span
  m="1583110">root</span> <span m="1583330">of</span> <span
  m="1583570">the</span> <span m="1583660">given</span> <span
  m="1583950">one.</span></p><p><span m="1585776">OK,</span> <span
  m="1586180">and</span> <span m="1587970">i</span> <span
  m="1588300">ranges</span> <span m="1588890">from</span> <span
  m="1589210">0</span> <span m="1589800">to</span> <span
  m="1591470">square</span> <span m="1591880">root</span> <span
  m="1591960">of</span> <span m="1592070">u</span> <span
  m="1592200">minus</span> <span m="1592520">1.</span> <span
  m="1593901">OK,</span> <span m="1594280">so</span> <span
  m="1594440">there's</span> <span m="1594560">square</span> <span
  m="1594860">root</span> <span m="1594940">of</span> <span m="1595000">u</span>
  <span m="1595150">of</span> <span m="1595250">them.</span> <span
  m="1596500">Total</span> <span m="1596780">sizes</span> <span m="1597280">is
  u.</span> <span m="1598640">And</span> <span m="1598810">then,</span> <span
  m="1598980">in</span> <span m="1599090">addition,</span> <span
  m="1600650">we're</span> <span m="1600750">going</span> <span
  m="1600850">to</span> <span m="1600950">have</span> <span m="1601110">a</span>
  <span m="1601180">summary</span> <span m="1601530">structure.</span> <span
  m="1603160">And</span> <span m="1603290">this</span> <span
  m="1603440">is</span> <span m="1603560">also</span> <span m="1604980">a</span>
  <span m="1605120">size</span> <span m="1606510">square</span> <span
  m="1606880">root</span> <span m="1606960">of</span> <span m="1607090">u</span>
  <span m="1607904">VEB.</span> <span m="1613230">OK,</span> <span
  m="1615600">you</span> <span m="1615680">should</span> <span
  m="1615890">think</span> <span m="1616060">about</span> <span
  m="1616430">inserts</span> <span m="1617020">and</span> <span
  m="1617210">successors.</span> <span m="1617860">Those</span> <span
  m="1618090">are</span> <span m="1618190">the</span> <span
  m="1618210">two</span> <span m="1618400">operations</span> <span
  m="1619690">I</span> <span m="1620080">care</span> <span
  m="1620330">about</span> <span m="1620710">for</span> <span
  m="1620810">now.</span> <span m="1622080">Let's</span> <span
  m="1622260">start</span> <span m="1622430">with</span> <span
  m="1622550">insert.</span> <span m="1622810">That's</span> <span
  m="1623010">easier.</span></p><p><span m="1640360">So</span> <span
  m="1640510">if</span> <span m="1640600">I</span> <span m="1640660">want</span>
  <span m="1640840">to</span> <span m="1640930">insert</span> <span
  m="1641780">an</span> <span m="1641970">item,</span> <span
  m="1642260">x,</span> <span m="1642790">into</span> <span
  m="1644490">data</span> <span m="1644700">structure</span> <span
  m="1645080">v,</span> <span m="1646560">then</span> <span
  m="1648240">first</span> <span m="1648520">thing</span> <span
  m="1648720">I</span> <span m="1648780">should</span> <span
  m="1648970">do</span> <span m="1649090">is</span> <span
  m="1649190">insert</span> <span m="1649610">into</span> <span
  m="1649910">its</span> <span m="1650050">corresponding</span> <span
  m="1650640">cluster.</span> <span m="1651190">So</span> <span
  m="1651390">let's</span> <span m="1651620">just</span> <span
  m="1651820">get</span> <span m="1652030">comfortable</span> <span
  m="1653260">with</span> <span m="1653410">that</span> <span
  m="1653600">notation.</span> <span m="1654950">We're</span> <span
  m="1655110">inserting</span> <span m="1655840">into</span> <span
  m="1656930">the</span> <span m="1657090">cluster</span> <span
  m="1659380">whose</span> <span m="1659650">number</span> <span
  m="1660110">is</span> <span m="1660660">high</span> <span
  m="1660890">of</span> <span m="1661000">x.</span> <span
  m="1661760">That</span> <span m="1661970">is</span> <span
  m="1662410">where</span> <span m="1662550">x</span> <span
  m="1662810">belongs.</span> <span m="1664780">The</span> <span
  m="1664860">name</span> <span m="1665070">of</span> <span
  m="1665180">its</span> <span m="1665370">cluster</span> <span
  m="1665760">should</span> <span m="1665930">be</span> <span
  m="1666070">high</span> <span m="1666300">of</span> <span
  m="1666390">x.</span></p><p><span m="1667270">And</span> <span
  m="1667700">what</span> <span m="1667840">we're</span> <span
  m="1668040">going</span> <span m="1668170">to</span> <span
  m="1668240">be</span> <span m="1668360">inserting</span> <span
  m="1668820">recursively</span> <span m="1669350">into</span> <span
  m="1669560">there</span> <span m="1670180">is</span> <span
  m="1670350">low</span> <span m="1670630">of</span> <span m="1670770">x.</span>
  <span m="1671150">That</span> <span m="1671350">is</span> <span
  m="1671570">the</span> <span m="1671710">name</span> <span
  m="1672020">of</span> <span m="1672220">x</span> <span
  m="1672660">local</span> <span m="1673150">to</span> <span
  m="1673250">that</span> <span m="1673480">cluster.</span> <span
  m="1674950">x</span> <span m="1675240">is</span> <span m="1675360">a</span>
  <span m="1675430">global</span> <span m="1675780">name</span> <span
  m="1676200">with</span> <span m="1676380">respect</span> <span
  m="1676710">to</span> <span m="1676800">v.</span> <span
  m="1677380">This</span> <span m="1677540">cluster</span> <span
  m="1677910">only</span> <span m="1678120">represents</span> <span
  m="1678740">a</span> <span m="1678790">small</span> <span
  m="1679350">range</span> <span m="1679840">of</span> <span
  m="1680010">square</span> <span m="1680320">root</span> <span
  m="1680400">of</span> <span m="1680490">u</span> <span
  m="1680690">items.</span> <span m="1681590">So</span> <span
  m="1681740">this</span> <span m="1681960">gets</span> <span
  m="1682150">us</span> <span m="1682290">from</span> <span
  m="1682440">the</span> <span m="1682510">big</span> <span
  m="1682680">space</span> <span m="1682960">of</span> <span
  m="1683220">size</span> <span m="1683320">u</span> <span m="1683550">to</span>
  <span m="1683710">the</span> <span m="1683850">small</span> <span
  m="1684090">space</span> <span m="1684380">of size</span> <span
  m="1684660">square</span> <span m="1684850">root</span> <span
  m="1684940">of</span> <span m="1685020">u</span> <span
  m="1685780">within</span> <span m="1685950">that</span> <span
  m="1686100">cluster.</span> <span m="1686860">So</span> <span
  m="1686970">that's</span> <span m="1687980">basically</span> <span
  m="1688260">what</span> <span m="1688380">high and</span> <span
  m="1688580">low were</span> <span m="1688890">made</span> <span
  m="1689150">for.</span></p><p><span m="1690220">But</span> <span
  m="1690390">then,</span> <span m="1690580">we</span> <span
  m="1690660">have</span> <span m="1690810">to</span> <span
  m="1690900">also</span> <span m="1691230">update</span> <span
  m="1691690">the</span> <span m="1691790">summary</span> <span
  m="1692160">structure.</span> <span m="1693170">So</span> <span
  m="1693410">we</span> <span m="1693530">need,</span> <span
  m="1694180">just</span> <span m="1694410">in</span> <span
  m="1694500">case--</span> <span m="1695400">Maybe</span> <span
  m="1695840">it's</span> <span m="1695970">already</span> <span
  m="1696310">there.</span> <span m="1697150">But</span> <span
  m="1698040">in</span> <span m="1698240">the</span> <span
  m="1698300">worst</span> <span m="1698490">case,</span> <span
  m="1698690">it</span> <span m="1698760">isn't.</span> <span
  m="1699110">So</span> <span m="1699250">we'll</span> <span
  m="1699360">just</span> <span m="1699530">think</span> <span m="1699690">of
  that</span> <span m="1699990">as</span> <span m="1700090">recursively</span>
  <span m="1700810">inserting</span> <span m="1702850">into</span> <span
  m="1704210">v</span> <span m="1704475">dot</span> <span
  m="1704740">summary</span> <span m="1710290">the</span> <span
  m="1710390">name</span> <span m="1710640">of</span> <span
  m="1710730">the</span> <span m="1710840">cluster,</span> <span
  m="1711470">which</span> <span m="1711570">is</span> <span
  m="1711700">high</span> <span m="1711940">of</span> <span
  m="1712060">x.</span></p><p><span m="1713210">High</span> <span
  m="1713450">of</span> <span m="1713530">x</span> <span m="1713770">is</span>
  <span m="1713880">keeping</span> <span m="1714170">track</span> <span
  m="1714460">of</span> <span m="1714580">which</span> <span
  m="1715260">clusters</span> <span m="1715770">are</span> <span
  m="1715880">non-empty.</span> <span m="1716810">We've</span> <span
  m="1716950">just</span> <span m="1717190">inserted</span> <span
  m="1717610">something</span> <span m="1717930">into</span> <span
  m="1718080">this</span> <span m="1718260">cluster.</span> <span
  m="1718660">So</span> <span m="1718800">it's</span> <span
  m="1718920">non-empty.</span> <span m="1719740">We</span> <span
  m="1719850">better</span> <span m="1720090">mark</span> <span
  m="1720360">that</span> <span m="1721420">that</span> <span
  m="1721660">cluster,</span> <span m="1722120">high of</span> <span
  m="1722420">x,</span> <span m="1723170">is</span> <span
  m="1723540">non-empty</span> <span m="1724090">in</span> <span
  m="1724230">the</span> <span m="1724310">summary</span> <span
  m="1724630">structure.</span></p><p><span m="1725850">Why?</span> <span
  m="1726140">So</span> <span m="1726340">we</span> <span m="1726470">can</span>
  <span m="1726610">do</span> <span m="1727060">successor.</span> <span
  m="1727820">So</span> <span m="1728050">let's</span> <span
  m="1728290">move</span> <span m="1728500">on</span> <span
  m="1729600">to</span> <span m="1729980">successor.</span> <span
  m="1740440">Actually,</span> <span m="1740720">I</span> <span
  m="1740820">want</span> <span m="1741140">to</span> <span
  m="1741490">mimic</span> <span m="1742840">the</span> <span
  m="1742920">successor</span> <span m="1743550">written</span> <span
  m="1744150">here</span> <span m="1744300">on</span> <span
  m="1744380">the</span> <span m="1744490">bottom</span> <span
  m="1744770">of</span> <span m="1744880">the</span> <span
  m="1744940">board.</span></p><p><span m="1748250">So</span> <span
  m="1748430">what</span> <span m="1748550">we</span> <span
  m="1748660">had</span> <span m="1748910">in</span> <span
  m="1749040">the</span> <span m="1749170">non-recursive</span> <span
  m="1750190">version</span> <span m="1750610">was</span> <span
  m="1750830">three</span> <span m="1751090">steps.</span> <span
  m="1751780">So</span> <span m="1751960">we're</span> <span
  m="1752050">going</span> <span m="1752170">to</span> <span
  m="1752250">do</span> <span m="1752380">the</span> <span
  m="1752490">same</span> <span m="1752740">thing</span> <span
  m="1752950">here.</span> <span m="1754120">We're</span> <span
  m="1754250">going</span> <span m="1754400">to</span> <span
  m="1754590">look</span> <span m="1754900">within</span> <span
  m="1755340">x's</span> <span m="1755720">cluster.</span> <span
  m="1756120">We</span> <span m="1756230">now</span> <span
  m="1756410">know</span> <span m="1756600">that</span> <span
  m="1756840">is</span> <span m="1757700">the</span> <span
  m="1757850">cluster</span> <span m="1758260">known</span> <span
  m="1758500">as</span> <span m="1758690">high</span> <span m="1758940">of
  x.</span></p><p><span m="1762790">And</span> <span m="1763530">either</span>
  <span m="1763740">we</span> <span m="1763850">find,</span> <span
  m="1764110">and</span> <span m="1764270">we're</span> <span
  m="1764410">happy,</span> <span m="1765120">or</span> <span
  m="1765270">we</span> <span m="1765400">don't.</span> <span
  m="1765880">Then</span> <span m="1766040">we're</span> <span
  m="1766160">going</span> <span m="1766290">to</span> <span
  m="1766370">look</span> <span m="1766630">at</span> <span m="1766850">v</span>
  <span m="1766990">dot</span> <span m="1767230">summary</span> <span
  m="1768250">search</span> <span m="1768540">for</span> <span
  m="1768650">this</span> <span m="1769650">the</span> <span
  m="1769790">successor</span> <span m="1771440">of</span> <span
  m="1771570">high</span> <span m="1771790">of</span> <span
  m="1771930">x.</span> <span m="1773140">Right,</span> <span
  m="1773350">finding</span> <span m="1773650">the</span> <span
  m="1773740">next</span> <span m="1774050">1</span> <span
  m="1774310">bit,</span> <span m="1774620">that</span> <span
  m="1774800">is</span> <span m="1774970">successor.</span></p><p><span
  m="1777060">And</span> <span m="1777380">then,</span> <span
  m="1778780">I</span> <span m="1778890">want</span> <span m="1779050">to</span>
  <span m="1779100">find</span> <span m="1779340">the</span> <span
  m="1779410">first</span> <span m="1779890">1</span> <span
  m="1780180">bit</span> <span m="1781350">in</span> <span
  m="1781570">that</span> <span m="1781890">cluster.</span> <span
  m="1782330">Is</span> <span m="1782440">that</span> <span m="1782630">a</span>
  <span m="1782690">successor</span> <span m="1783200">also?</span> <span
  m="1792470">Yeah.</span> <span m="1792750">That's</span> <span
  m="1792970">just</span> <span m="1793360">the</span> <span
  m="1793460">successor</span> <span m="1793800">of</span> <span
  m="1794430">negative</span> <span m="1794780">infinity.</span> <span
  m="1796460">Finding</span> <span m="1796740">the</span> <span
  m="1796820">minimum</span> <span m="1797180">element</span> <span
  m="1797580">in</span> <span m="1797660">a</span> <span
  m="1797720">cluster</span> <span m="1798705">is</span> <span
  m="1799140">the</span> <span m="1799200">successor</span> <span
  m="1799790">of</span> <span m="1800580">-1,</span> <span m="1801250">or</span>
  <span m="1801520">0,</span> <span m="1801990">or</span> <span
  m="1802440">not</span> <span m="1802630">zero.</span> <span
  m="1802940">But</span> <span m="1803480">-1</span> <span
  m="1803720">would</span> <span m="1803880">work,</span> <span
  m="1804440">or</span> <span m="1804640">negative</span> <span
  m="1804900">infinity,</span> <span m="1805460">maybe</span> <span
  m="1805730">more</span> <span m="1805880">intuitively.</span></p><p><span
  m="1806690">That'll</span> <span m="1806930">find</span> <span
  m="1807200">the</span> <span m="1807270">smallest</span> <span
  m="1807630">thing</span> <span m="1807750">here.</span> <span
  m="1808010">So</span> <span m="1808090">each</span> <span
  m="1808320">of</span> <span m="1808410">these</span> <span
  m="1808760">is</span> <span m="1808930">a</span> <span
  m="1808990">recursive</span> <span m="1809490">call.</span> <span
  m="1810490">I</span> <span m="1810570">can</span> <span
  m="1810710">think</span> <span m="1810890">of</span> <span
  m="1811000">it</span> <span m="1811170">as</span> <span
  m="1811420">recursively</span> <span m="1812440">calling</span> <span
  m="1812790">successor.</span> <span m="1815230">So</span> <span
  m="1816000">let's</span> <span m="1816340">do</span> <span
  m="1816450">that.</span></p><p><span m="1824770">I</span> <span
  m="1824800">want</span> <span m="1824940">to</span> <span
  m="1825000">find</span> <span m="1825160">the</span> <span
  m="1825210">successor</span> <span m="1825700">of</span> <span
  m="1825820">x</span> <span m="1826230">in</span> <span m="1826470">v.</span>
  <span m="1827870">First</span> <span m="1828220">thing</span> <span
  m="1828410">I'm</span> <span m="1828490">going</span> <span
  m="1828630">to</span> <span m="1828710">do</span> <span m="1829550">is</span>
  <span m="1830780">do</span> <span m="1830930">the</span> <span
  m="1831090">ij</span> <span m="1831610">breakdown.</span> <span
  m="1832220">I'll</span> <span m="1832300">let</span> <span
  m="1832550">i</span> <span m="1832830">be</span> <span m="1833000">high</span>
  <span m="1833280">of</span> <span m="1833410">x</span> <span
  m="1834350">and</span> <span m="1834650">j</span> <span
  m="1835740">be--</span> <span m="1837800">I</span> <span
  m="1838280">could</span> <span m="1838480">do</span> <span
  m="1838580">low</span> <span m="1838610">of</span> <span m="1839000">x.</span>
  <span m="1839380">But</span> <span m="1839600">what</span> <span
  m="1839770">I'm</span> <span m="1839830">going</span> <span
  m="1839930">to</span> <span m="1840010">try</span> <span
  m="1840330">for</span> <span m="1841060">is</span> <span m="1841340">to</span>
  <span m="1841460">search</span> <span m="1842360">within</span> <span
  m="1843750">this</span> <span m="1844050">cluster,</span> <span
  m="1844940">high</span> <span m="1845200">of</span> <span
  m="1845310">x.</span></p><p><span m="1846310">So</span> <span
  m="1846440">I'm</span> <span m="1846510">going</span> <span
  m="1846590">to</span> <span m="1846660">look</span> <span
  m="1846870">for</span> <span m="1847350">the</span> <span
  m="1847530">successor</span> <span m="1850645">of</span> <span
  m="1852100">cluster</span> <span m="1852580">i,</span> <span
  m="1853000">which</span> <span m="1853190">is</span> <span
  m="1853590">cluster</span> <span m="1853910">high of</span> <span
  m="1854180">x,</span> <span m="1857060">of</span> <span m="1858250">low
  of</span> <span m="1858670">x.</span> <span m="1859914">OK,</span> <span
  m="1860740">so</span> <span m="1860920">that's</span> <span
  m="1861220">this</span> <span m="1861430">first</span> <span
  m="1861680">step</span> <span m="1862330">of</span> <span
  m="1862510">looking</span> <span m="1862910">in</span> <span
  m="1863140">x's</span> <span m="1863510">cluster.</span> <span
  m="1863870">This</span> <span m="1864050">is x's</span> <span
  m="1864160">cluster.</span> <span m="1865310">This</span> <span
  m="1865450">is</span> <span m="1865570">x's</span> <span
  m="1865880">name</span> <span m="1866130">in</span> <span
  m="1866210">the</span> <span m="1866300">cluster.</span></p><p><span
  m="1867240">I'm</span> <span m="1867320">going</span> <span
  m="1867400">to</span> <span m="1867470">try</span> <span m="1867700">to</span>
  <span m="1867790">find</span> <span m="1867970">the</span> <span
  m="1868030">successor.</span> <span m="1868540">But</span> <span
  m="1868680">it</span> <span m="1868800">might</span> <span
  m="1869050">say</span> <span m="1869550">infinity.</span> <span
  m="1870110">I</span> <span m="1870160">didn't</span> <span
  m="1870390">find</span> <span m="1870630">anything.</span> <span
  m="1872160">And</span> <span m="1872350">then</span> <span
  m="1872620">I'll</span> <span m="1872930">be</span> <span
  m="1874290">unhappy</span> <span m="1874790">if</span> <span
  m="1874980">j</span> <span m="1875120">equals</span> <span
  m="1875400">infinity.</span> <span m="1881270">So</span> <span
  m="1882270">that's</span> <span m="1882550">line</span> <span
  m="1882880">one.</span></p><p><span m="1892070">Well,</span> <span
  m="1892340">then</span> <span m="1892490">we're</span> <span
  m="1892660">in</span> <span m="1892730">the</span> <span
  m="1892840">wrong</span> <span m="1893160">cluster.</span> <span
  m="1893830">High of x</span> <span m="1894320">is</span> <span
  m="1894430">not</span> <span m="1894600">the</span> <span
  m="1894680">right</span> <span m="1894840">cluster.</span> <span
  m="1895570">Let's</span> <span m="1895830">find</span> <span
  m="1896180">the</span> <span m="1896290">correct</span> <span
  m="1896690">cluster,</span> <span m="1897380">which</span> <span
  m="1897550">is</span> <span m="1897650">going</span> <span
  m="1897800">to</span> <span m="1897860">be</span> <span m="1898000">the</span>
  <span m="1898120">next</span> <span m="1898630">non-empty</span> <span
  m="1899240">cluster.</span> <span m="1900370">So</span> <span
  m="1900520">I'm</span> <span m="1900700">going</span> <span
  m="1900820">to</span> <span m="1900930">change</span> <span
  m="1901360">i</span> <span m="1901870">to</span> <span m="1902330">be</span>
  <span m="1905650">the</span> <span m="1905890">successor</span> <span
  m="1909610">in</span> <span m="1909870">the</span> <span
  m="1909990">summary</span> <span m="1910360">structure</span> <span
  m="1915313">of</span> <span m="1915810">i.</span></p><p><span
  m="1917025">So</span> <span m="1917430">i</span> <span m="1917600">was</span>
  <span m="1917800">the</span> <span m="1917920">name</span> <span
  m="1918100">of</span> <span m="1918190">a</span> <span
  m="1918260">cluster.</span> <span m="1919480">It</span> <span
  m="1919650">may</span> <span m="1919800">have</span> <span
  m="1920010">items</span> <span m="1920340">in</span> <span
  m="1920450">it.</span> <span m="1920650">But</span> <span
  m="1920900">we</span> <span m="1921030">want</span> <span
  m="1921180">to</span> <span m="1921240">find</span> <span
  m="1921440">the</span> <span m="1921510">next</span> <span
  m="1922140">non-empty</span> <span m="1922580">thing.</span> <span
  m="1922830">Because</span> <span m="1923260">we</span> <span
  m="1923380">know</span> <span m="1925010">the</span> <span
  m="1925130">successor</span> <span m="1925570">we're</span> <span
  m="1925680">looking</span> <span m="1925950">for</span> <span
  m="1926210">is</span> <span m="1926300">not</span> <span
  m="1926620">here.</span> <span m="1929560">OK.</span></p><p><span
  m="1929990">So</span> <span m="1930370">this</span> <span
  m="1930570">is</span> <span m="1930640">the</span> <span
  m="1930730">cluster</span> <span m="1931070">we</span> <span
  m="1931330">now</span> <span m="1931450">belong</span> <span
  m="1931890">in.</span> <span m="1933190">What</span> <span
  m="1933490">item</span> <span m="1933770">in</span> <span
  m="1933840">the</span> <span m="1933930">cluster</span> <span
  m="1934190">do</span> <span m="1934450">we</span> <span
  m="1934530">want?</span> <span m="1935000">Well,</span> <span
  m="1935200">we</span> <span m="1935300">want</span> <span
  m="1935350">to</span> <span m="1935410">find</span> <span
  m="1935810">the</span> <span m="1935920">minimum</span> <span
  m="1936510">item</span> <span m="1936840">in</span> <span
  m="1936950">that</span> <span m="1937120">cluster.</span> <span
  m="1937620">And</span> <span m="1938050">we're</span> <span
  m="1938090">going</span> <span m="1938180">to</span> <span
  m="1938250">do</span> <span m="1938380">that</span> <span m="1938620">by
  a</span> <span m="1938800">recursive</span> <span m="1939320">call,</span>
  <span m="1943670">which</span> <span m="1944280">is</span> <span
  m="1944960">j</span> <span m="1946250">is</span> <span m="1946640">the</span>
  <span m="1946850">successor</span> <span m="1949900">within</span> <span
  m="1950490">cluster</span> <span m="1950940">i</span> <span
  m="1958844">of</span> <span m="1959812">minus</span> <span
  m="1960300">infinity,</span> <span m="1960730">I'll</span> <span
  m="1961150">say.</span> <span m="1962280">-1</span> <span
  m="1962480">would</span> <span m="1962600">also</span> <span
  m="1962840">work.</span></p><p><span m="1963800">So</span> <span
  m="1963880">this</span> <span m="1964030">will</span> <span
  m="1964120">find</span> <span m="1964360">the</span> <span
  m="1964460">smallest</span> <span m="1964910">item</span> <span
  m="1965140">in</span> <span m="1965200">the</span> <span
  m="1965280">cluster.</span> <span m="1966450">And</span> <span
  m="1966570">then,</span> <span m="1968890">in</span> <span
  m="1968990">both</span> <span m="1969210">cases,</span> <span
  m="1969680">we</span> <span m="1969810">get</span> <span m="1970070">i</span>
  <span m="1970230">and</span> <span m="1970410">j,</span> <span
  m="1970720">which</span> <span m="1970950">together</span> <span
  m="1971530">in</span> <span m="1971820">this</span> <span
  m="1972500">form</span> <span m="1973050">describe</span> <span
  m="1973900">the</span> <span m="1973990">value</span> <span
  m="1974360">x</span> <span m="1974640">that</span> <span m="1974720">we</span>
  <span m="1974820">care</span> <span m="1975020">about.</span> <span
  m="1975860">So</span> <span m="1976020">I'm</span> <span
  m="1976200">just</span> <span m="1976380">going</span> <span
  m="1976480">to</span> <span m="1976550">say,</span> <span
  m="1976780">return</span> <span m="1980410">index</span> <span
  m="1981290">of</span> <span m="1981490">ij.</span> <span
  m="1982610">That's</span> <span m="1982780">how</span> <span
  m="1982930">we</span> <span m="1983080">reconstruct</span> <span
  m="1983750">an</span> <span m="1983870">item</span> <span
  m="1985250">name</span> <span m="1985810">for</span> <span
  m="1986050">the</span> <span m="1986410">structure</span> <span
  m="1986890">v.</span></p><p><span m="1988140">We</span> <span
  m="1988270">knew</span> <span m="1988410">which</span> <span
  m="1988860">substructure</span> <span m="1989450">it's</span> <span
  m="1989580">in.</span> <span m="1990260">And</span> <span
  m="1990500">we</span> <span m="1990590">know</span> <span
  m="1990690">its</span> <span m="1990820">name</span> <span
  m="1991010">within</span> <span m="1991820">the</span> <span
  m="1992160">substructure,</span> <span m="1992740">within</span> <span
  m="1992920">the</span> <span m="1993010">cluster.</span> <span
  m="1994790">Is</span> <span m="1995240">this</span> <span
  m="1995480">algorithm</span> <span m="1995980">clearly</span> <span
  m="1996400">correct?</span> <span m="1998280">Good.</span> <span
  m="1998905">It's</span> <span m="1999180">also</span> <span
  m="1999990">really</span> <span m="2000540">bad.</span></p><p><span
  m="2001120">Well,</span> <span m="2001730">it's</span> <span
  m="2001840">better</span> <span m="2002050">than</span> <span
  m="2002220">everything</span> <span m="2002540">we've</span> <span
  m="2002680">done</span> <span m="2002880">so</span> <span
  m="2003070">far.</span> <span m="2003350">The last</span> <span
  m="2004450">result</span> <span m="2004710">we</span> <span
  m="2004800">had</span> <span m="2004970">was</span> <span
  m="2005090">square</span> <span m="2005430">root</span> <span
  m="2005510">of</span> <span m="2005620">u.</span> <span
  m="2005790">This</span> <span m="2005990">is</span> <span
  m="2006070">going</span> <span m="2006210">to</span> <span
  m="2006270">be</span> <span m="2006390">better</span> <span
  m="2006640">than</span> <span m="2006780">that,</span> <span
  m="2007040">but</span> <span m="2008310">still</span> <span
  m="2008620">not</span> <span m="2009270">log</span> <span
  m="2009560">log</span> <span m="2009740">u.</span> <span
  m="2010440">Why?</span> <span m="2011370">Both</span> <span
  m="2011590">of</span> <span m="2011670">these</span> <span
  m="2012090">are</span> <span m="2012190">bad.</span></p><p><span
  m="2018990">Yeah.</span></p><p><span m="2019666">AUDIENCE: You</span> <span
  m="2020162">make</span> <span m="2020658">more</span> <span
  m="2021154">than</span> <span m="2021650">one</span> <span m="2022146">call
  to</span> <span m="2022642">[? your insert. ?]</span></p><p><span
  m="2023138">PROFESSOR: Right.</span> <span m="2023640">I</span> <span
  m="2023790">make</span> <span m="2024050">more</span> <span
  m="2024320">than</span> <span m="2024480">one</span> <span
  m="2024710">recursive</span> <span m="2025180">call</span> <span
  m="2026150">to</span> <span m="2026440">whatever</span> <span
  m="2026750">the</span> <span m="2026830">operation</span> <span
  m="2027250">is</span> <span m="2027350">here.</span> <span
  m="2027550">Insert</span> <span m="2027980">calls</span> <span
  m="2028230">insert</span> <span m="2028610">twice.</span> <span
  m="2029600">Here,</span> <span m="2030140">successor</span> <span
  m="2030740">calls</span> <span m="2031060">successor</span> <span
  m="2031770">potentially</span> <span m="2032370">three</span> <span
  m="2032630">times.</span> <span m="2035830">This</span> <span
  m="2036030">is</span> <span m="2036180">a</span> <span m="2036210">good</span>
  <span m="2036510">challenge</span> <span m="2036990">for</span> <span
  m="2037090">me.</span></p><p><span m="2037430">Let's</span> <span
  m="2037470">see.</span> <span m="2039411">Eh,</span> <span m="2039880">not
  bad.</span> <span m="2040480">Off</span> <span m="2040720">by</span> <span
  m="2040880">one.</span> <span m="2042564">OK,</span> <span m="2043520">that's
  a</span> <span m="2043810">common</span> <span m="2044120">problem</span>
  <span m="2044410">in</span> <span m="2044480">computer</span> <span
  m="2044770">science,</span> <span m="2045120">right?</span> <span
  m="2045250">Always</span> <span m="2045290">off</span> <span
  m="2045610">by</span> <span m="2045730">one</span> <span
  m="2045910">errors.</span></p><p><span m="2047770">OK,</span> <span
  m="2048030">so</span> <span m="2048250">let's</span> <span
  m="2048449">think</span> <span m="2048630">of</span> <span
  m="2048719">it</span> <span m="2048810">in</span> <span
  m="2048900">terms</span> <span m="2049139">of</span> <span
  m="2049210">recurrences,</span> <span m="2049690">in</span> <span
  m="2049920">case</span> <span m="2050199">that's</span> <span
  m="2050409">not</span> <span m="2050580">clear.</span> <span
  m="2050830">Here</span> <span m="2051060">we</span> <span
  m="2051159">have</span> <span m="2051429">t</span> <span m="2051530">of</span>
  <span m="2051780">u</span> <span m="2053400">is</span> <span
  m="2054040">2</span> <span m="2054690">times</span> <span m="2055060">t
  of</span> <span m="2055330">square</span> <span m="2055639">root</span> <span
  m="2055719">of</span> <span m="2055820">u.</span> <span
  m="2056929">Right,</span> <span m="2057040">to</span> <span
  m="2057170">solve</span> <span m="2057480">a</span> <span
  m="2057530">problem</span> <span m="2057840">of</span> <span
  m="2057909">size</span> <span m="2058179">u,</span> <span m="2058739">I</span>
  <span m="2058850">solve</span> <span m="2059179">two</span> <span
  m="2059440">problems</span> <span m="2059700">of</span> <span
  m="2059960">size</span> <span m="2060310">square</span> <span
  m="2060570">root</span> <span m="2060639">of</span> <span m="2060750">u</span>
  <span m="2061909">plus</span> <span m="2062659">constant.</span> <span
  m="2063280">Because</span> <span m="2064250">high</span> <span
  m="2064520">of</span> <span m="2064650">x</span> <span m="2064940">and</span>
  <span m="2065030">low</span> <span m="2065300">of x,</span> <span
  m="2065570">I'm</span> <span m="2065750">assuming,</span> <span
  m="2066050">take</span> <span m="2066290">constant</span> <span
  m="2066690">time</span> <span m="2066969">to</span> <span
  m="2067090">do.</span></p><p><span m="2067449">It's just,</span> <span
  m="2067750">I</span> <span m="2067820">have</span> <span m="2067969">an</span>
  <span m="2068050">integer.</span> <span m="2068610">I</span> <span
  m="2068820">divide</span> <span m="2069090">it</span> <span
  m="2069190">in</span> <span m="2069219">half.</span> <span
  m="2069750">Those</span> <span m="2069940">are</span> <span
  m="2070040">cheap.</span> <span m="2073949">What</span> <span
  m="2074110">does</span> <span m="2074260">this</span> <span
  m="2074420">solve</span> <span m="2074730">to?</span> <span
  m="2075920">It's</span> <span m="2076010">probably</span> <span
  m="2076300">easier</span> <span m="2076590">to</span> <span
  m="2076679">think</span> <span m="2076880">of</span> <span
  m="2076969">it</span> <span m="2077040">in</span> <span
  m="2077130">terms</span> <span m="2077370">of</span> <span
  m="2077469">log</span> <span m="2077820">u.</span> <span
  m="2078489">Then</span> <span m="2078650">we</span> <span
  m="2078739">could</span> <span m="2078850">apply</span> <span
  m="2079120">the</span> <span m="2079230">master</span> <span
  m="2079590">method.</span></p><p><span m="2080900">Right,</span> <span
  m="2081060">this</span> <span m="2081270">is</span> <span
  m="2081409">the</span> <span m="2081500">same</span> <span
  m="2081810">thing</span> <span m="2082090">as</span> <span
  m="2082429">t</span> <span m="2082600">prime</span> <span
  m="2082869">of</span> <span m="2083480">log</span> <span m="2083880">u</span>
  <span m="2085270">is</span> <span m="2085739">2</span> <span
  m="2086270">times</span> <span m="2086830">t</span> <span
  m="2087360">of</span> <span m="2088320">log</span> <span m="2088790">u</span>
  <span m="2089210">divided</span> <span m="2089600">by</span> <span
  m="2089780">2</span> <span m="2091199">plus</span> <span
  m="2091520">order</span> <span m="2091750">1.</span> <span
  m="2098750">This</span> <span m="2099150">is</span> <span
  m="2099230">not</span> <span m="2099440">quite</span> <span
  m="2099850">the</span> <span m="2100190">merge</span> <span
  m="2100460">sort</span> <span m="2100640">recurrence.</span> <span
  m="2101270">But</span> <span m="2102620">it's</span> <span
  m="2102880">not</span> <span m="2103170">good.</span></p><p><span
  m="2104790">One</span> <span m="2104970">way</span> <span
  m="2105080">to</span> <span m="2105160">think</span> <span
  m="2105330">of</span> <span m="2105390">it, is</span> <span
  m="2105550">we</span> <span m="2105650">start</span> <span
  m="2105910">with</span> <span m="2106060">the</span> <span
  m="2106230">total</span> <span m="2106530">weight</span> <span
  m="2106790">of</span> <span m="2106910">log</span> <span m="2107180">u.</span>
  <span m="2107860">We</span> <span m="2108000">split</span> <span
  m="2108410">into</span> <span m="2109760">log</span> <span
  m="2110070">over</span> <span m="2110260">2,</span> <span
  m="2110470">but</span> <span m="2110670">two</span> <span
  m="2110830">copies</span> <span m="2111270">of</span> <span
  m="2111400">it.</span> <span m="2111580">So</span> <span
  m="2111730">we're</span> <span m="2111860">not</span> <span
  m="2113020">saving</span> <span m="2113760">anything.</span> <span
  m="2114190">And</span> <span m="2114280">we</span> <span
  m="2114380">didn't</span> <span m="2114600">reduce</span> <span
  m="2114900">the</span> <span m="2114990">problem</span> <span
  m="2115870">strictly.</span></p><p><span m="2116520">In</span> <span
  m="2116770">terms</span> <span m="2117020">of</span> <span
  m="2117080">the</span> <span m="2117150">recursion</span> <span
  m="2117590">tree,</span> <span m="2118210">we</span> <span
  m="2118350">have,</span> <span m="2118620">you know,</span> <span
  m="2118940">log</span> <span m="2119280">u--</span> <span
  m="2120610">well,</span> <span m="2121270">it's</span> <span
  m="2121430">hard</span> <span m="2121660">to</span> <span
  m="2121760">think</span> <span m="2121940">about</span> <span
  m="2122140">because</span> <span m="2122310">we</span> <span
  m="2122400">have</span> <span m="2122580">constant</span> <span
  m="2126410">total</span> <span m="2126690">cost.</span> <span
  m="2128500">You</span> <span m="2128660">could</span> <span
  m="2128750">just</span> <span m="2128890">plug</span> <span
  m="2129060">this</span> <span m="2129210">in</span> <span m="2129380">with
  the</span> <span m="2129460">Master</span> <span m="2129780">method,</span>
  <span m="2130520">or</span> <span m="2130710">see</span> <span
  m="2131120">that</span> <span m="2131340">essentially</span> <span
  m="2131770">we're</span> <span m="2131950">conserving</span> <span
  m="2132490">mass.</span></p><p><span m="2132990">We</span> <span
  m="2133090">started</span> <span m="2133340">with</span> <span
  m="2133430">log</span> <span m="2133670">u</span> <span
  m="2134005">mass.</span> <span m="2134640">We</span> <span
  m="2134770">have</span> <span m="2134970">two</span> <span
  m="2135150">copies</span> <span m="2135580">of</span> <span
  m="2135670">log</span> <span m="2135910">u</span> <span
  m="2135960">over</span> <span m="2136140">2.</span> <span
  m="2136350">That's</span> <span m="2136660">the</span> <span
  m="2136810">same</span> <span m="2137120">total</span> <span
  m="2137380">mass.</span> <span m="2138290">So</span> <span
  m="2138600">how</span> <span m="2138780">many</span> <span
  m="2139260">recursions</span> <span m="2139780">do</span> <span
  m="2139880">we</span> <span m="2139990">do?</span> <span
  m="2141270">Well</span> <span m="2141510">we</span> <span
  m="2141620">do</span> <span m="2141800">do</span> <span m="2142440">log</span>
  <span m="2142710">log</span> <span m="2142890">u</span> <span
  m="2143030">recursions.</span> <span m="2144360">The total</span> <span
  m="2144630">number</span> <span m="2144890">of</span> <span
  m="2144960">leaves</span> <span m="2145310">in</span> <span
  m="2145400">that</span> <span m="2145550">recursion</span> <span
  m="2145960">tree</span> <span m="2146270">is</span> <span
  m="2146960">log</span> <span m="2147270">u.</span></p><p><span
  m="2148080">Each</span> <span m="2148270">of</span> <span
  m="2148340">them,</span> <span m="2148490">we</span> <span
  m="2148700">pay</span> <span m="2148780">constant.</span> <span
  m="2150060">So</span> <span m="2150280">this</span> <span
  m="2150510">is</span> <span m="2152270">log</span> <span m="2152570">u,</span>
  <span m="2156980">not</span> <span m="2157210">log</span> <span
  m="2157440">log</span> <span m="2157660">u.</span> <span m="2158490">To</span>
  <span m="2158590">get</span> <span m="2158770">log</span> <span
  m="2158970">log u,</span> <span m="2159320">we</span> <span
  m="2159430">need</span> <span m="2159580">to</span> <span
  m="2159650">change</span> <span m="2159920">this</span> <span
  m="2160140">2</span> <span m="2160880">into</span> <span m="2161140">a
  1.</span> <span m="2161570">We</span> <span m="2161890">can</span> <span
  m="2162000">only</span> <span m="2162230">afford</span> <span
  m="2162560">one</span> <span m="2162830">recursive</span> <span
  m="2163340">call.</span> <span m="2164220">If we</span> <span
  m="2164300">have</span> <span m="2164410">two</span> <span
  m="2164640">recursive</span> <span m="2165090">calls,</span> <span
  m="2165990">we</span> <span m="2166130">get</span> <span
  m="2166550">logarithmic</span> <span
  m="2167110">performance.</span></p><p><span m="2167570">If</span> <span
  m="2167690">we</span> <span m="2167760">have</span> <span
  m="2167940">three</span> <span m="2168250">recursive</span> <span
  m="2168690">calls,</span> <span m="2168990">it's</span> <span
  m="2169100">even</span> <span m="2169320">worse.</span> <span
  m="2171240">Here,</span> <span m="2171500">I</span> <span
  m="2171550">would</span> <span m="2171690">definitely</span> <span
  m="2171980">use</span> <span m="2172100">the</span> <span
  m="2172180">Master</span> <span m="2172520">method.</span> <span
  m="2173375">It's</span> <span m="2173730">less</span> <span
  m="2174040">obvious.</span> <span m="2176400">In</span> <span
  m="2176510">this</span> <span m="2176710">case,</span> <span
  m="2177060">we</span> <span m="2177070">get</span> <span
  m="2178520">log</span> <span m="2179700">u</span> <span m="2180700">to</span>
  <span m="2180780">the</span> <span m="2180930">log</span> <span
  m="2181780">base</span> <span m="2182090">2</span> <span m="2182430">of</span>
  <span m="2182630">3</span> <span m="2182910">power,</span> <span
  m="2184900">which</span> <span m="2185060">is</span> <span
  m="2185240">log</span> <span m="2185520">u</span> <span m="2185670">to</span>
  <span m="2185790">the</span> <span m="2185910">1.6</span> <span
  m="2186950">or</span> <span m="2187050">so,</span> <span m="2188320">so</span>
  <span m="2188740">both</span> <span m="2188990">worse</span> <span
  m="2189420">than</span> <span m="2189650">log</span> <span
  m="2190070">n.</span></p><p><span m="2190600">This</span> <span
  m="2190770">is</span> <span m="2190860">strictly</span> <span
  m="2191170">worse than</span> <span m="2191500">log</span> <span
  m="2191780">n.</span> <span m="2191930">This</span> <span
  m="2192120">is</span> <span m="2192800">maybe</span> <span
  m="2193640">just</span> <span m="2193780">a</span> <span
  m="2193840">little</span> <span m="2194070">bit</span> <span
  m="2194220">worse</span> <span m="2194380">than log</span> <span
  m="2194650">n,</span> <span m="2194920">depending</span> <span m="2195250">on
  how</span> <span m="2195460">u</span> <span m="2195710">relates</span> <span
  m="2196050">to</span> <span m="2196140">n.</span> <span m="2197156">OK,</span>
  <span m="2197550">so</span> <span m="2197700">we're</span> <span
  m="2197780">not</span> <span m="2197970">there</span> <span
  m="2198180">yet.</span> <span m="2198620">But</span> <span
  m="2199060">we're</span> <span m="2199370">on</span> <span
  m="2199470">the</span> <span m="2199570">right</span> <span
  m="2199760">track.</span> <span m="2200100">We</span> <span
  m="2200200">have</span> <span m="2200490">the</span> <span
  m="2200590">right</span> <span m="2200730">kind</span> <span
  m="2200880">of</span> <span m="2200950">structure.</span> <span
  m="2201380">We</span> <span m="2201470">have</span> <span m="2201610">a</span>
  <span m="2201670">problem</span> <span m="2202000">of</span> <span
  m="2202070">size</span> <span m="2202330">u.</span></p><p><span
  m="2203040">We</span> <span m="2203280">split</span> <span m="2203610">it
  up</span> <span m="2203820">into</span> <span m="2204410">square</span> <span
  m="2204730">root</span> <span m="2204810">of</span> <span m="2204890">u</span>
  <span m="2205040">sub problems</span> <span m="2205660">of</span> <span
  m="2205750">size</span> <span m="2206300">u.</span> <span
  m="2206640">From</span> <span m="2206810">a</span> <span
  m="2206860">data</span> <span m="2207160">structures</span> <span
  m="2207590">perspective,</span> <span m="2208200">this</span> <span
  m="2208360">the</span> <span m="2208480">first</span> <span
  m="2208690">time</span> <span m="2208860">we're</span> <span
  m="2208950">using</span> <span m="2209200">divide</span> <span
  m="2209430">and</span> <span m="2209500">conquer</span> <span
  m="2209850">for</span> <span m="2210030">data</span> <span
  m="2210320">structures.</span> <span m="2210780">It's</span> <span
  m="2210910">a</span> <span m="2210950">little</span> <span
  m="2211140">different</span> <span m="2211900">from</span> <span
  m="2212130">algorithms.</span> <span m="2213490">So</span> <span
  m="2213570">that's</span> <span m="2213820">how</span> <span
  m="2214550">the</span> <span m="2214710">data</span> <span
  m="2214930">structure</span> <span m="2215440">is</span> <span
  m="2216220">being</span> <span m="2216390">laid</span> <span
  m="2216650">out.</span></p><p><span m="2217570">But</span> <span
  m="2217760">now</span> <span m="2218040">we're</span> <span
  m="2218190">worried</span> <span m="2218400">about</span> <span
  m="2218650">the</span> <span m="2218890">algorithms</span> <span
  m="2219380">on</span> <span m="2219520">those</span> <span
  m="2219660">data</span> <span m="2219840">structures.</span> <span
  m="2220220">Those,</span> <span m="2220550">we</span> <span
  m="2220670">can</span> <span m="2220800">only</span> <span
  m="2221050">afford</span> <span m="2221280">t</span> <span
  m="2221490">of</span> <span m="2221570">u</span> <span
  m="2221740">equals</span> <span m="2221990">1</span> <span
  m="2222440">times</span> <span m="2222740">[? t of ?]</span> <span
  m="2222960">squared</span> <span m="2223300">of</span> <span
  m="2223370">u</span> <span m="2223490">plus</span> <span
  m="2223750">order</span> <span m="2223940">1.</span> <span
  m="2224150">Then</span> <span m="2224330">we</span> <span
  m="2224430">get</span> <span m="2224640">log</span> <span
  m="2224900">log</span> <span m="2225100">u.</span> <span
  m="2226390">So,</span> <span m="2226580">here</span> <span
  m="2226750">we</span> <span m="2226850">have</span> <span
  m="2226960">two</span> <span m="2227110">recursive</span> <span
  m="2227520">calls.</span> <span m="2227710">Somehow</span> <span
  m="2228940">we</span> <span m="2229100">have</span> <span
  m="2229300">to</span> <span m="2229380">have</span> <span
  m="2229590">only</span> <span m="2229790">one.</span></p><p><span
  m="2230030">Let's</span> <span m="2230220">start</span> <span
  m="2230430">by</span> <span m="2230540">fixing</span> <span
  m="2231550">insert.</span> <span m="2236360">Insert?</span> <span
  m="2240780">No.</span> <span m="2241170">Let's</span> <span
  m="2241420">start</span> <span m="2241620">by</span> <span
  m="2242010">fixing</span> <span m="2242320">successor.</span> <span
  m="2242890">I</span> <span m="2242970">think</span> <span
  m="2243150">that</span> <span m="2243280">will</span> <span
  m="2243380">be</span> <span m="2243540">more</span> <span
  m="2244340">intuitive.</span> <span m="2246330">Let's</span> <span
  m="2246550">look</span> <span m="2246690">at</span> <span
  m="2246780">successor.</span></p><p><span m="2247230">Because</span> <span
  m="2247360">successor</span> <span m="2247760">is</span> <span
  m="2247880">almost</span> <span m="2248380">there.</span> <span
  m="2249000">A</span> <span m="2249070">lot</span> <span m="2249310">of</span>
  <span m="2249370">the</span> <span m="2249480">time,</span> <span
  m="2249810">it's</span> <span m="2249900">just</span> <span
  m="2250080">going</span> <span m="2250200">to</span> <span
  m="2250440">make</span> <span m="2250640">this</span> <span
  m="2250830">call,</span> <span m="2251650">and</span> <span
  m="2251820">we're</span> <span m="2251900">happy.</span> <span
  m="2253040">The</span> <span m="2253140">bad</span> <span
  m="2253390">cases</span> <span m="2253750">is when</span> <span
  m="2253890">we</span> <span m="2253990">need</span> <span
  m="2254170">that</span> <span m="2254260">make</span> <span
  m="2254470">both</span> <span m="2254730">of</span> <span
  m="2254830">these</span> <span m="2255060">calls.</span> <span
  m="2257040">Then</span> <span m="2257390">there's</span> <span
  m="2257600">three</span> <span m="2257820">total,</span> <span
  m="2258210">very</span> <span m="2258420">bad.</span></p><p><span
  m="2260590">How</span> <span m="2260860">could</span> <span
  m="2261130">I</span> <span m="2261230">get</span> <span m="2261420">rid</span>
  <span m="2261550">of</span> <span m="2261650">this</span> <span
  m="2261860">call?</span> <span m="2264420">I</span> <span
  m="2264570">was</span> <span m="2264700">being</span> <span
  m="2264870">all</span> <span m="2265010">clever,</span> <span
  m="2265660">that</span> <span m="2265840">the</span> <span
  m="2265970">minimum</span> <span m="2266360">element</span> <span
  m="2266740">is</span> <span m="2266910">the</span> <span
  m="2267000">successor</span> <span m="2267670">of</span> <span
  m="2267820">negative</span> <span m="2268100">infinity.</span> <span
  m="2268700">But</span> <span m="2269470">that's</span> <span
  m="2269580">actually</span> <span m="2269810">not</span> <span m="2270110">the
  right</span> <span m="2270410">idea.</span> <span
  m="2272360">Yeah.</span></p><p><span m="2272715">[? AUDIENCE: Catching
  ?]</span> <span m="2273070">the</span> <span m="2274058">minimum</span> <span
  m="2274552">element</span> <span m="2275046">in</span> <span
  m="2275540">cluster</span> <span m="2276034">i.</span></p><p><span
  m="2277520">PROFESSOR: Store</span> <span m="2278020">the</span> <span
  m="2278140">minimum</span> <span m="2278510">element</span> <span
  m="2278840">of</span> <span m="2279000">cluster</span> <span
  m="2279360">i.</span> <span m="2279560">Yeah.</span> <span
  m="2279840">In</span> <span m="2279920">general,</span> <span
  m="2280720">for</span> <span m="2280940">every</span> <span
  m="2281406">structure</span> <span m="2282340">v,</span> <span
  m="2283390">let's</span> <span m="2284230">store</span> <span
  m="2284520">the</span> <span m="2284610">minimum.</span> <span
  m="2285690">Why</span> <span m="2285820">not?</span> <span
  m="2286450">We</span> <span m="2286580">know</span> <span
  m="2287480">how</span> <span m="2287640">to</span> <span
  m="2287700">augment</span> <span m="2288100">structures.</span></p><p><span
  m="2291570">Here</span> <span m="2291780">in</span> <span
  m="2291860">006,</span> <span m="2292560">you</span> <span
  m="2292910">took</span> <span m="2293580">an</span> <span
  m="2293720">AVL</span> <span m="2293970">tree,</span> <span
  m="2294330">and</span> <span m="2294820">you augment</span> <span
  m="2295070">node</span> <span m="2295320">to</span> <span
  m="2295410">store</span> <span m="2295670">the</span> <span
  m="2295760">sub-tree</span> <span m="2296170">size</span> <span
  m="2296490">of</span> <span m="2296580">the</span> <span
  m="2296680">node.</span> <span m="2297120">In</span> <span
  m="2297210">this</span> <span m="2297380">case,</span> <span
  m="2298080">we're</span> <span m="2298200">doing</span> <span
  m="2298710">a</span> <span m="2298810">similar</span> <span
  m="2299130">kind</span> <span m="2299310">of</span> <span
  m="2299400">augmentation.</span> <span m="2300400">Just</span> <span
  m="2300570">for</span> <span m="2300700">every</span> <span
  m="2301060">structure,</span> <span m="2301420">keep</span> <span
  m="2301640">track</span> <span m="2301930">of</span> <span
  m="2302010">what</span> <span m="2302180">the</span> <span
  m="2302260">minimum</span> <span m="2302630">is.</span> <span
  m="2304130">So</span> <span m="2304300">that</span> <span
  m="2304490">will</span> <span m="2304600">be</span> <span
  m="2304880">idea</span> <span m="2305370">number</span> <span
  m="2306650">four.</span></p><p><span m="2324520">I'm</span> <span
  m="2324650">going</span> <span m="2324760">to</span> <span
  m="2324840">add</span> <span m="2325110">something</span> <span
  m="2325410">here.</span> <span m="2325630">But</span> <span
  m="2325770">for</span> <span m="2325880">now,</span> <span
  m="2326090">let's</span> <span m="2326480">store</span> <span
  m="2326690">the</span> <span m="2326780">minimums.</span> <span
  m="2327730">So</span> <span m="2328690">to</span> <span m="2328820">do</span>
  <span m="2329060">an</span> <span m="2329150">insert</span> <span
  m="2332030">into</span> <span m="2332260">to</span> <span
  m="2332370">structure</span> <span m="2332770">v,</span> <span
  m="2333230">item</span> <span m="2333550">x,</span> <span
  m="2334370">first</span> <span m="2334610">thing</span> <span
  m="2334760">we'll</span> <span m="2334860">do</span> <span
  m="2335070">is</span> <span m="2335150">just</span> <span
  m="2335290">say,</span> <span m="2335590">well,</span> <span
  m="2335790">if</span> <span m="2335930">x</span> <span m="2336160">is--</span>
  <span m="2336920">let's</span> <span m="2337140">see</span> <span
  m="2337260">if</span> <span m="2337370">it's</span> <span
  m="2337540">the</span> <span m="2337630">new</span> <span
  m="2337750">minimum.</span> <span m="2338260">Maybe</span> <span
  m="2338580">x</span> <span m="2339250">is</span> <span
  m="2339370">smaller</span> <span m="2339890">than</span> <span
  m="2340660">v</span> <span m="2340880">dot</span> <span
  m="2341130">min.</span></p><p><span m="2342522">If</span> <span
  m="2342990">that's</span> <span m="2343200">the</span> <span
  m="2343290">case,</span> <span m="2344940">let's</span> <span
  m="2345210">just</span> <span m="2345340">set</span> <span
  m="2345520">v</span> <span m="2345640">dot</span> <span m="2345880">min</span>
  <span m="2346020">to x.</span> <span m="2348680">OK?</span> <span
  m="2349090">And</span> <span m="2349480">then,</span> <span
  m="2349710">the</span> <span m="2350150">rest</span> <span
  m="2350490">is</span> <span m="2350580">the</span> <span
  m="2350670">same,</span> <span m="2351170">same</span> <span
  m="2351670">insertion</span> <span m="2352070">algorithm</span> <span
  m="2352640">as</span> <span m="2353320">over</span> <span
  m="2353900">here,</span> <span m="2355800">these</span> <span
  m="2356020">two</span> <span m="2356150">recursive</span> <span
  m="2356570">calls.</span> <span m="2357340">I</span> <span
  m="2357440">just</span> <span m="2357590">spent</span> <span
  m="2357870">constant</span> <span m="2358320">additional</span> <span
  m="2358670">time.</span> <span m="2359020">And</span> <span
  m="2359210">now</span> <span m="2359450">every</span> <span
  m="2359780">structure</span> <span m="2360110">knows</span> <span
  m="2360320">it's</span> <span m="2360440">minimum.</span></p><p><span
  m="2361650">Again,</span> <span m="2361920">ignore</span> <span
  m="2362190">delete</span> <span m="2362550">for</span> <span
  m="2362640">now.</span> <span m="2362870">That's</span> <span
  m="2363230">trickier.</span> <span m="2365210">OK,</span> <span
  m="2366800">now</span> <span m="2366980">every</span> <span
  m="2367245">structure</span> <span m="2367510">knows</span> <span
  m="2367690">its</span> <span m="2367810">minimum,</span> <span
  m="2368620">which</span> <span m="2368880">means</span> <span
  m="2370110">we</span> <span m="2370310">can</span> <span
  m="2370450">replace</span> <span m="2371310">this</span> <span
  m="2371590">call</span> <span m="2372800">with</span> <span
  m="2373020">just</span> <span m="2373350">v</span> <span m="2373700">dot
  cluster i</span> <span m="2374050">dot</span> <span m="2374430">min.</span>
  <span m="2377060">One</span> <span m="2377270">down.</span></p><p><span
  m="2379060">OK,</span> <span m="2379260">so</span> <span m="2380310">if</span>
  <span m="2380430">we</span> <span m="2380510">look</span> <span
  m="2380730">at</span> <span m="2381620">successor,</span> <span
  m="2386346">of</span> <span m="2387840">v comma</span> <span
  m="2388610">x.</span> <span m="2390330">I'm</span> <span
  m="2390340">going</span> <span m="2390450">to</span> <span
  m="2390510">replace</span> <span m="2391020">the</span> <span
  m="2391130">last</span> <span m="2391840">line,</span> <span
  m="2392350">or</span> <span m="2392430">next</span> <span
  m="2392660">to</span> <span m="2392730">last</span> <span
  m="2393010">line</span> <span m="2393270">with</span> <span
  m="2393940">j</span> <span m="2394430">equals</span> <span
  m="2396660">v</span> <span m="2397930">cluster</span> <span
  m="2398400">i</span> <span m="2402310">dot</span> <span
  m="2402745">min.</span></p><p><span m="2410070">So</span> <span
  m="2410320">now,</span> <span m="2410560">we're</span> <span
  m="2410660">down</span> <span m="2410920">to</span> <span
  m="2411590">log</span> <span m="2412220">u</span> <span
  m="2412550">performance.</span> <span m="2413430">We</span> <span
  m="2413540">only</span> <span m="2413760">have,</span> <span
  m="2414330">at</span> <span m="2414460">most,</span> <span
  m="2414740">two</span> <span m="2414910">recursive</span> <span
  m="2415360">calls.</span> <span m="2415610">So</span> <span
  m="2415800">that's</span> <span m="2416550">partial</span> <span
  m="2416910">progress.</span> <span m="2419540">But</span> <span
  m="2419660">we</span> <span m="2419760">need</span> <span
  m="2419940">another</span> <span m="2420240">idea</span> <span
  m="2420570">to</span> <span m="2420680">get</span> <span
  m="2420850">rid</span> <span m="2420970">of</span> <span
  m="2421560">the</span> <span m="2421650">second</span> <span
  m="2422000">one.</span> <span m="2423730">And</span> <span
  m="2426740">the</span> <span m="2426860">intuition</span> <span
  m="2427300">here</span> <span m="2427560">is</span> <span
  m="2427690">that</span> <span m="2427840">really,</span> <span
  m="2428260">only</span> <span m="2428630">one</span> <span
  m="2428940">of</span> <span m="2429040">these</span> <span
  m="2429250">call</span> <span m="2429540">should</span> <span
  m="2429810">matter.</span></p><p><span m="2431150">OK,</span> <span
  m="2431300">let's</span> <span m="2431990">draw</span> <span
  m="2432890">the</span> <span m="2432980">big</span> <span
  m="2433150">picture.</span> <span m="2435500">Here's</span> <span
  m="2435610">what</span> <span m="2435830">the</span> <span
  m="2435900">recursive</span> <span m="2436410">thing</span> <span
  m="2436610">looks</span> <span m="2436850">like.</span> <span
  m="2437220">We've</span> <span m="2437380">got</span> <span
  m="2437440">v</span> <span m="2437590">dot</span> <span
  m="2437820">summary.</span> <span m="2441340">Then</span> <span
  m="2441570">we've</span> <span m="2441720">got</span> <span
  m="2442290">a</span> <span m="2442390">cluster</span> <span
  m="2442750">0,</span> <span m="2443990">cluster</span> <span
  m="2444380">1,</span> <span m="2446340">cluster</span> <span
  m="2448230">square</span> <span m="2448450">root</span> <span
  m="2448530">of</span> <span m="2448630">u</span> <span
  m="2448740">minus</span> <span m="2449060">1.</span> <span
  m="2450900">Each</span> <span m="2451120">of</span> <span
  m="2451200">those</span> <span m="2451460">is a</span> <span
  m="2451530">recursive</span> <span m="2451960">structure.</span></p><p><span
  m="2453930">And</span> <span m="2454280">we're</span> <span
  m="2454450">also</span> <span m="2454960">just</span> <span
  m="2455130">storing</span> <span m="2455460">the</span> <span
  m="2455610">min</span> <span m="2455760">over</span> <span
  m="2455950">here</span> <span m="2456230">as</span> <span m="2456390">a</span>
  <span m="2457300">copy.</span> <span m="2460240">So</span> <span
  m="2460540">when</span> <span m="2460820">I</span> <span m="2461010">do</span>
  <span m="2461240">a</span> <span m="2461350">query</span> <span
  m="2462760">for,</span> <span m="2464900">I don't</span> <span
  m="2465360">know,</span> <span m="2465820">the</span> <span
  m="2466080">successor</span> <span m="2466650">of</span> <span
  m="2466900">this</span> <span m="2467260">guy,</span> <span
  m="2470880">there's</span> <span m="2471050">kind</span> <span
  m="2471220">of</span> <span m="2471320">two</span> <span
  m="2471480">cases.</span> <span m="2471950">One</span> <span
  m="2472280">situation</span> <span m="2472920">is</span> <span
  m="2473140">that</span> <span m="2473660">I</span> <span
  m="2474860">find</span> <span m="2475100">the</span> <span
  m="2475180">successor</span> <span m="2475750">somewhere</span> <span
  m="2476160">in</span> <span m="2476250">this</span> <span
  m="2476470">interval.</span></p><p><span m="2477620">In that</span> <span
  m="2477800">case,</span> <span m="2478240">I'm</span> <span
  m="2478360">happy.</span> <span m="2478700">Because</span> <span
  m="2479100">I</span> <span m="2479150">just</span> <span
  m="2479360">need</span> <span m="2479510">this</span> <span
  m="2479690">one</span> <span m="2480310">recursive</span> <span
  m="2480720">call.</span> <span m="2482550">OK,</span> <span
  m="2482670">the</span> <span m="2482780">other</span> <span m="2482930">case
  is</span> <span m="2483320">that</span> <span m="2483440">I</span> <span
  m="2483500">don't</span> <span m="2483890">find</span> <span
  m="2484170">what</span> <span m="2484300">I'm</span> <span
  m="2484380">looking</span> <span m="2484640">for</span> <span
  m="2484840">here.</span> <span m="2485840">Then</span> <span
  m="2485970">I</span> <span m="2486050">have</span> <span m="2486240">to</span>
  <span m="2486370">do</span> <span m="2486770">a</span> <span
  m="2486840">successor</span> <span m="2487370">up</span> <span
  m="2487560">here.</span> <span m="2489030">And</span> <span
  m="2489130">then</span> <span m="2489340">I'm</span> <span
  m="2489480">done.</span></p><p><span m="2490250">Then</span> <span
  m="2490420">I</span> <span m="2490490">can</span> <span
  m="2490670">teleport</span> <span m="2491200">into</span> <span
  m="2491780">whatever</span> <span m="2492090">cluster it</span> <span
  m="2492480">is.</span> <span m="2493030">And</span> <span
  m="2493250">I've</span> <span m="2493380">stored</span> <span
  m="2493740">the</span> <span m="2493890">min</span> <span
  m="2494280">by</span> <span m="2494410">now.</span> <span
  m="2494710">So</span> <span m="2494970">that's</span> <span
  m="2495700">constant</span> <span m="2496100">time</span> <span
  m="2496440">to</span> <span m="2497040">jump</span> <span
  m="2497290">into</span> <span m="2497460">the</span> <span
  m="2497570">right</span> <span m="2497750">spot</span> <span
  m="2498040">in</span> <span m="2498200">the</span> <span
  m="2498280">cluster.</span> <span m="2500880">So</span> <span
  m="2501150">either</span> <span m="2502130">I</span> <span m="2502240">find
  what I'm</span> <span m="2502570">looking</span> <span m="2502860">for</span>
  <span m="2503030">here,</span> <span m="2503580">or</span> <span
  m="2504000">I</span> <span m="2504100">find</span> <span
  m="2504410">what</span> <span m="2504520">I'm</span> <span
  m="2504630">looking</span> <span m="2504860">for</span> <span
  m="2505090">here.</span></p><p><span m="2506420">What</span> <span
  m="2506460">would</span> <span m="2506560">be</span> <span
  m="2506700">really</span> <span m="2507000">nice</span> <span
  m="2507320">is</span> <span m="2507440">if</span> <span m="2507600">I</span>
  <span m="2507670">could</span> <span m="2507840">tell</span> <span
  m="2508090">ahead</span> <span m="2508430">of</span> <span
  m="2508540">time</span> <span m="2509350">which</span> <span
  m="2509620">one</span> <span m="2509850">is</span> <span
  m="2509950">going</span> <span m="2510150">to</span> <span
  m="2510260">succeed.</span> <span m="2510800">Because</span> <span
  m="2511160">then,</span> <span m="2511670">if</span> <span
  m="2511810">I</span> <span m="2511880">know</span> <span
  m="2512080">this</span> <span m="2512250">is</span> <span
  m="2512370">not</span> <span m="2512570">going</span> <span
  m="2512660">to</span> <span m="2512720">find</span> <span
  m="2513000">anything,</span> <span m="2513710">I</span> <span
  m="2513890">might as</span> <span m="2514050">well</span> <span
  m="2514140">just</span> <span m="2514310">go</span> <span
  m="2514760">immediately</span> <span m="2515290">up</span> <span
  m="2515410">here,</span> <span m="2516190">and</span> <span
  m="2516370">look</span> <span m="2516520">at</span> <span
  m="2516580">the</span> <span m="2516690">successor</span> <span
  m="2517790">in</span> <span m="2518010">the</span> <span
  m="2518090">summary</span> <span m="2518440">structure.</span> <span
  m="2519230">If</span> <span m="2519370">I</span> <span m="2519450">know</span>
  <span m="2519640">I'm</span> <span m="2519730">going</span> <span
  m="2519850">to</span> <span m="2519910">find</span> <span
  m="2520140">something</span> <span m="2520360">here,</span> <span
  m="2520650">I'll</span> <span m="2520770">just</span> <span
  m="2521390">do</span> <span m="2521530">the</span> <span
  m="2521610">successor</span> <span m="2522010">here.</span> <span
  m="2522180">And</span> <span m="2522240">I'm</span> <span
  m="2522350">done.</span></p><p><span m="2523600">If I</span> <span
  m="2523680">could</span> <span m="2523860">just</span> <span
  m="2524030">get</span> <span m="2524140">away</span> <span
  m="2524320">with</span> <span m="2524460">one</span> <span
  m="2524810">or</span> <span m="2525150">the</span> <span
  m="2525320">other</span> <span m="2525600">of these</span> <span
  m="2525800">calls,</span> <span m="2526070">not</span> <span
  m="2526270">both,</span> <span m="2527030">I'd</span> <span
  m="2527330">be</span> <span m="2527460">very</span> <span
  m="2527690">happy.</span> <span m="2528000">How</span> <span
  m="2528230">could</span> <span m="2528380">I</span> <span
  m="2528450">tell</span> <span m="2528700">that?</span> <span
  m="2530072">Yeah.</span></p><p><span m="2531064">AUDIENCE: Store</span> <span
  m="2531560">the</span> <span m="2532056">max.</span></p><p><span
  m="2533050">PROFESSOR: Store</span> <span m="2533330">the</span> <span
  m="2533420">max.</span> <span m="2535510">Store</span> <span
  m="2535800">the</span> <span m="2535990">min</span> <span
  m="2536140">and</span> <span m="2536400">the</span> <span
  m="2536470">max.</span> <span m="2536840">Why</span> <span
  m="2536980">not?</span> <span m="2539230">OK,</span> <span
  m="2539910">I</span> <span m="2540020">just</span> <span
  m="2540350">need</span> <span m="2540530">a</span> <span
  m="2540600">similar</span> <span m="2541240">line</span> <span
  m="2541510">here.</span> <span m="2541830">If</span> <span
  m="2541910">x</span> <span m="2542790">is</span> <span
  m="2543120">bigger</span> <span m="2543560">than</span> <span
  m="2543860">v</span> <span m="2544300">dot</span> <span
  m="2544730">max,</span> <span m="2545830">change</span> <span
  m="2546160">the</span> <span m="2546260">max.</span> <span
  m="2551090">So</span> <span m="2551300">now,</span> <span
  m="2551490">I've</span> <span m="2551880">augmented</span> <span
  m="2552370">my</span> <span m="2552500">data</span> <span
  m="2552720">structure</span> <span m="2553080">to</span> <span
  m="2553150">have</span> <span m="2553330">the</span> <span m="2553400">min
  and</span> <span m="2553680">max</span> <span m="2553960">at</span> <span
  m="2554030">every</span> <span m="2554260">level.</span></p><p><span
  m="2555200">And</span> <span m="2555400">what's</span> <span
  m="2555600">going</span> <span m="2555820">on</span> <span
  m="2555980">here</span> <span m="2556200">is,</span> <span
  m="2557640">I</span> <span m="2557780">won't</span> <span
  m="2558260">find</span> <span m="2558690">an</span> <span
  m="2558780">answer</span> <span m="2559690">if</span> <span
  m="2559880">I</span> <span m="2560300">am</span> <span
  m="2561680">greater</span> <span m="2561900">than</span> <span
  m="2562020">or</span> <span m="2562090">equal</span> <span
  m="2562310">to</span> <span m="2562420">the</span> <span
  m="2562520">maximum</span> <span m="2563060">within</span> <span
  m="2563420">this</span> <span m="2563590">cluster.</span> <span
  m="2564670">That's</span> <span m="2564910">how</span> <span
  m="2565060">I</span> <span m="2565150">tell.</span> <span
  m="2566580">If</span> <span m="2566790">I'm</span> <span
  m="2567320">equal</span> <span m="2567650">to</span> <span
  m="2567750">the</span> <span m="2567840">max,</span> <span
  m="2568260">or</span> <span m="2568390">if</span> <span m="2568500">I'm</span>
  <span m="2568620">beyond</span> <span m="2569040">the</span> <span
  m="2569100">max,</span> <span m="2569420">if</span> <span
  m="2569520">all</span> <span m="2569780">the</span> <span
  m="2569900">items</span> <span m="2570170">are</span> <span
  m="2570310">over</span> <span m="2570480">here,</span> <span
  m="2571260">the</span> <span m="2571350">max will</span> <span
  m="2571690">be</span> <span m="2571830">to</span> <span m="2571960">my</span>
  <span m="2572530">left.</span></p><p><span m="2572860">And</span> <span
  m="2572950">then</span> <span m="2573070">I</span> <span
  m="2573130">know</span> <span m="2573370">I</span> <span
  m="2573450">will</span> <span m="2573630">fail</span> <span
  m="2574030">within</span> <span m="2574260">the</span> <span
  m="2574350">cluster.</span> <span m="2574830">So</span> <span
  m="2575020">I</span> <span m="2575200">might as well</span> <span
  m="2575390">just</span> <span m="2575570">go</span> <span m="2575740">up
  to</span> <span m="2575900">summary</span> <span m="2576260">and</span> <span
  m="2576420">do</span> <span m="2576540">it</span> <span
  m="2576650">there.</span> <span m="2579230">On</span> <span
  m="2579240">the</span> <span m="2579340">other</span> <span
  m="2579490">hand,</span> <span m="2579740">if</span> <span
  m="2579840">I'm</span> <span m="2579880">less</span> <span
  m="2580140">than</span> <span m="2580240">the</span> <span
  m="2580310">max,</span> <span m="2580565">then I'm</span> <span
  m="2580820">guaranteed</span> <span m="2581430">I</span> <span
  m="2581490">will</span> <span m="2581630">find</span> <span
  m="2581890">something</span> <span m="2582340">in</span> <span
  m="2582410">this</span> <span m="2582550">cluster.</span> <span
  m="2582960">And</span> <span m="2583070">so</span> <span m="2583180">I</span>
  <span m="2583280">can</span> <span m="2583420">just</span> <span
  m="2583590">search</span> <span m="2583850">in</span> <span
  m="2583960">there.</span></p><p><span m="2585630">So</span> <span
  m="2585880">all</span> <span m="2586090">I</span> <span
  m="2586160">need</span> <span m="2586370">to</span> <span
  m="2586480">do--</span> <span m="2587175">I'll</span> <span
  m="2587430">probably</span> <span m="2587740">have</span> <span
  m="2587920">to</span> <span m="2588070">rewrite</span> <span
  m="2588530">this</span> <span m="2589410">slightly.</span> <span
  m="2592420">If</span> <span m="2592650">x</span> <span m="2593110">is--</span>
  <span m="2601305">not</span> <span m="2601750">x,</span> <span
  m="2603300">close.</span> <span m="2605980">I'm</span> <span
  m="2606100">going</span> <span m="2606210">to</span> <span
  m="2606290">mimic</span> <span m="2606870">this</span> <span
  m="2607470">code</span> <span m="2608070">a</span> <span
  m="2608150">little</span> <span m="2608360">bit,</span> <span
  m="2610520">at</span> <span m="2610700">least</span> <span
  m="2610880">the</span> <span m="2610990">first</span> <span
  m="2611200">line</span> <span m="2612150">is</span> <span
  m="2612330">going</span> <span m="2612520">to</span> <span
  m="2612590">be</span> <span m="2613350">i</span> <span
  m="2613680">equals</span> <span m="2614130">high of</span> <span
  m="2614460">x.</span> <span m="2615590">And</span> <span
  m="2615790">now,</span> <span m="2616650">that's</span> <span
  m="2616970">the</span> <span m="2617060">cluster</span> <span
  m="2617490">I'm</span> <span m="2617590">starting</span> <span
  m="2618020">in.</span></p><p><span m="2618310">And</span> <span
  m="2618480">I</span> <span m="2618510">want</span> <span m="2618720">to</span>
  <span m="2618800">look</span> <span m="2619030">at</span> <span
  m="2619120">the</span> <span m="2619200">maximum</span> <span
  m="2620210">of</span> <span m="2620480">that</span> <span
  m="2620880">cluster.</span> <span m="2638630">So</span> <span
  m="2638730">I'm</span> <span m="2638820">looking</span> <span
  m="2639160">at</span> <span m="2639300">v</span> <span m="2639640">dot
  cluster</span> <span m="2640020">i</span> <span m="2640513">dot</span> <span
  m="2641006">max.</span> <span m="2641920">And</span> <span
  m="2642080">I</span> <span m="2642120">want</span> <span m="2642340">to</span>
  <span m="2642390">know,</span> <span m="2642900">is</span> <span
  m="2643250">x</span> <span m="2643640">before</span> <span
  m="2644060">that?</span> <span m="2644330">Now</span> <span
  m="2644610">within</span> <span m="2644900">that</span> <span
  m="2645070">cluster,</span> <span m="2645540">x is</span> <span
  m="2645900">known</span> <span m="2646150">as</span> <span
  m="2646340">low</span> <span m="2646550">of</span> <span
  m="2646670">x.</span></p><p><span m="2647180">So</span> <span
  m="2647330">I</span> <span m="2648730">compare</span> <span m="2649070">low
  of</span> <span m="2649350">x</span> <span m="2650190">to</span> <span
  m="2650530">cluster</span> <span m="2650900">i's</span> <span
  m="2651160">maximum</span> <span m="2651660">element.</span> <span
  m="2652520">If</span> <span m="2652690">we're</span> <span
  m="2652800">strictly</span> <span m="2653200">to</span> <span
  m="2653310">the</span> <span m="2653430">left,</span> <span
  m="2653790">then</span> <span m="2654140">there</span> <span
  m="2654340">is</span> <span m="2654580">a</span> <span
  m="2654650">successor</span> <span m="2655210">guaranteed</span> <span
  m="2656180">within</span> <span m="2656570">that</span> <span
  m="2656790">substructure.</span> <span m="2658020">And</span> <span
  m="2658230">so,</span> <span m="2658620">I</span> <span
  m="2658740">should</span> <span m="2658990">do</span> <span
  m="2659620">this</span> <span m="2659820">line.</span> <span
  m="2662980">I</span> <span m="2663070">wish</span> <span m="2663300">I</span>
  <span m="2663340">could</span> <span m="2663520">copy</span> <span
  m="2663820">paste.</span> <span m="2664310">But</span> <span
  m="2665220">I</span> <span m="2665360">will</span> <span
  m="2667870">copy</span> <span m="2668210">by</span> <span
  m="2668440">hand.</span></p><p><span m="2670220">Successor</span> <span
  m="2672540">within</span> <span m="2673800">v</span> <span
  m="2674210">dot</span> <span m="2674800">cluster</span> <span
  m="2675200">i,</span> <span m="2679832">of</span> <span m="2680790">low</span>
  <span m="2681110">of</span> <span m="2681200">x.</span> <span
  m="2683692">OK,</span> <span m="2684310">then</span> <span
  m="2684510">I've</span> <span m="2684640">found</span> <span
  m="2684990">the</span> <span m="2685110">item</span> <span
  m="2685340">I'm</span> <span m="2685450">looking</span> <span
  m="2685730">for.</span> <span m="2689140">Else,</span> <span
  m="2693560">I'm</span> <span m="2693660">beyond</span> <span
  m="2694010">the</span> <span m="2694060">max,</span> <span
  m="2694850">I</span> <span m="2694960">know</span> <span
  m="2695110">this</span> <span m="2695280">is</span> <span
  m="2695370">the</span> <span m="2695510">wrong</span> <span
  m="2695800">cluster.</span> <span m="2696760">And</span> <span
  m="2696950">so</span> <span m="2697030">I</span> <span
  m="2697120">should</span> <span m="2697330">immediately</span> <span
  m="2697880">do</span> <span m="2698580">these</span> <span
  m="2698780">two</span> <span m="2698940">lines,</span> <span
  m="2700080">well,</span> <span m="2700450">except</span> <span
  m="2700780">I've</span> <span m="2701030">made</span> <span
  m="2701250">the</span> <span m="2701320">second</span> <span
  m="2701610">line</span> <span m="2702140">use</span> <span
  m="2702390">the</span> <span m="2702570">min.</span></p><p><span
  m="2703400">So</span> <span m="2703610">it will</span> <span
  m="2703700">only</span> <span m="2703910">be</span> <span
  m="2704060">one</span> <span m="2704300">recursive</span> <span
  m="2704730">call,</span> <span m="2705380">followed</span> <span
  m="2705770">by</span> <span m="2705920">a</span> <span m="2705970">min.</span>
  <span m="2709790">OK,</span> <span m="2710070">so</span> <span
  m="2710270">this</span> <span m="2710460">is</span> <span
  m="2710570">going</span> <span m="2710700">to</span> <span
  m="2710780">be</span> <span m="2711940">i</span> <span
  m="2712360">equals</span> <span m="2718890">the</span> <span
  m="2718990">successor</span> <span m="2720290">within</span> <span
  m="2720940">v</span> <span m="2721110">dot summary</span> <span
  m="2725030">of</span> <span m="2726030">high of</span> <span
  m="2726300">x.</span> <span m="2740460">And</span> <span
  m="2740730">then</span> <span m="2741440">j</span> <span m="2742930">is</span>
  <span m="2743410">that</span> <span m="2743630">line</span> <span
  m="2744160">successor</span> <span m="2749030">within--</span> <span
  m="2749950">oh,</span> <span m="2750060">sorry--</span> <span
  m="2750950">the</span> <span m="2751040">line</span> <span
  m="2751230">that</span> <span m="2751330">I</span> <span
  m="2751370">used</span> <span m="2751610">to</span> <span
  m="2751670">have</span> <span m="2751930">here,</span> <span
  m="2752870">which</span> <span m="2752950">is</span> <span
  m="2753070">going</span> <span m="2753210">to</span> <span
  m="2753300">be</span> <span m="2754100">v</span> <span
  m="2754670">cluster</span> <span m="2755160">i</span> <span
  m="2755540">dot</span> <span m="2755740">min.</span></p><p><span
  m="2760830">OK,</span> <span m="2761290">and</span> <span
  m="2761710">then,</span> <span m="2761960">in</span> <span
  m="2762110">both</span> <span m="2762410">cases,</span> <span
  m="2763030">I</span> <span m="2763190">return</span> <span
  m="2765670">index</span> <span m="2766120">of</span> <span
  m="2766240">ij.</span> <span m="2772030">OK,</span> <span
  m="2772210">so</span> <span m="2772380">we're</span> <span
  m="2772520">doing</span> <span m="2772840">essentially</span> <span
  m="2773590">the</span> <span m="2773710">same</span> <span
  m="2773960">logic</span> <span m="2774310">as</span> <span
  m="2774440">over</span> <span m="2774640">here.</span> <span
  m="2774890">Although</span> <span m="2775040">I've</span> <span
  m="2775160">replaced</span> <span m="2775580">the</span> <span
  m="2775700">step</span> <span m="2776180">with</span> <span
  m="2776320">the</span> <span m="2776520">min,</span> <span
  m="2777155">to</span> <span m="2777480">get</span> <span
  m="2777590">rid</span> <span m="2777700">of</span> <span
  m="2777760">that</span> <span m="2777920">recursive</span> <span
  m="2778340">call.</span> <span m="2778940">But</span> <span
  m="2779070">I'm</span> <span m="2779180">really</span> <span
  m="2779420">only</span> <span m="2779610">doing</span> <span
  m="2779860">one</span> <span m="2780110">or</span> <span
  m="2780370">the</span> <span m="2780550">other</span> <span
  m="2780760">of</span> <span m="2780810">these,</span> <span
  m="2781060">using</span> <span m="2781460">max</span> <span
  m="2782470">to</span> <span m="2782620">distinguish.</span></p><p><span
  m="2783380">If</span> <span m="2783760">I'm</span> <span
  m="2784020">left</span> <span m="2784240">of</span> <span
  m="2784310">the</span> <span m="2784400">max,</span> <span
  m="2785230">I</span> <span m="2785360">do the</span> <span
  m="2785510">successor</span> <span m="2785970">within</span> <span
  m="2786610">cluster</span> <span m="2787020">high</span> <span
  m="2787220">of</span> <span m="2787330">x.</span> <span m="2788290">If</span>
  <span m="2788480">I'm</span> <span m="2788740">right</span> <span
  m="2789000">of</span> <span m="2789110">the</span> <span
  m="2789190">max,</span> <span m="2793040">then</span> <span
  m="2793160">I</span> <span m="2793210">do the</span> <span
  m="2793430">successor</span> <span m="2793900">immediately</span> <span
  m="2794330">in</span> <span m="2794470">summary</span> <span
  m="2794800">structure.</span> <span m="2795170">Because</span> <span
  m="2795380">I</span> <span m="2795450">know</span> <span
  m="2795660">this</span> <span m="2795830">won't</span> <span
  m="2796030">find</span> <span m="2796220">anything</span> <span
  m="2796540">useful.</span> <span m="2797650">And</span> <span
  m="2797810">then</span> <span m="2797940">I</span> <span
  m="2797990">find</span> <span m="2798240">the min</span> <span
  m="2798390">within</span> <span m="2798840">that</span> <span
  m="2800480">non-empty</span> <span m="2800920">structure.</span></p><p><span
  m="2803000">And</span> <span m="2803200">in</span> <span
  m="2803270">both</span> <span m="2803460">cases,</span> <span
  m="2803980">ij</span> <span m="2804590">is</span> <span m="2804940">the</span>
  <span m="2805170">element</span> <span m="2805320">I'm</span> <span
  m="2805390">looking</span> <span m="2805660">for.</span> <span
  m="2806000">I</span> <span m="2806060">put</span> <span m="2806250">it</span>
  <span m="2806330">back</span> <span m="2806520">together</span> <span
  m="2806930">with</span> <span m="2807110">index.</span> <span
  m="2810330">Clear?</span> <span m="2812840">What's</span> <span
  m="2813010">the</span> <span m="2813100">running</span> <span
  m="2813330">time</span> <span m="2813710">of</span> <span
  m="2813840">successor</span> <span m="2814360">now?</span> <span
  m="2817150">Log</span> <span m="2817420">log</span> <span
  m="2817600">u.</span></p><p><span m="2822230">Awesome.</span> <span
  m="2823720">We've</span> <span m="2823900">finished</span> <span
  m="2824670">successor.</span> <span m="2826300">Sadly,</span> <span
  m="2827270">we</span> <span m="2827400">have</span> <span
  m="2827530">not</span> <span m="2827750">finished</span> <span
  m="2828110">insert.</span> <span m="2829390">Insert</span> <span
  m="2829840">still</span> <span m="2830130">takes</span> <span
  m="2830470">log</span> <span m="2830750">u</span> <span
  m="2830910">time.</span> <span m="2831300">But,</span> <span
  m="2831585">b</span> <span m="2831870">progress.</span> <span
  m="2833720">Maybe</span> <span m="2834280">your</span> <span
  m="2834560">routing</span> <span m="2834870">table</span> <span
  m="2835230">doesn't</span> <span m="2835320">change</span> <span
  m="2835550">that</span> <span m="2835730">often,</span> <span
  m="2836150">so</span> <span m="2836380">you</span> <span
  m="2836550">can</span> <span m="2836660">afford</span> <span
  m="2836950">to</span> <span m="2837020">pay</span> <span
  m="2837280">some</span> <span m="2837470">extra</span> <span
  m="2837750">time</span> <span m="2838130">for</span> <span
  m="2838340">insert,</span> <span m="2839730">as</span> <span
  m="2839910">long</span> <span m="2840150">as</span> <span
  m="2840240">you</span> <span m="2840390">can</span> <span
  m="2840570">route</span> <span m="2840860">packets</span> <span
  m="2841260">really</span> <span m="2841450">fast,</span> <span
  m="2841790">as</span> <span m="2841870">long</span> <span
  m="2842010">as</span> <span m="2842090">you</span> <span
  m="2842180">can</span> <span m="2842280">find</span> <span
  m="2842750">where</span> <span m="2843480">something</span> <span
  m="2843830">belongs,</span> <span m="2844310">the</span> <span
  m="2844390">successor</span> <span m="2844950">in</span> <span
  m="2845040">log</span> <span m="2845310">log</span> <span m="2845580">u
  time.</span></p><p><span m="2846760">But</span> <span m="2847690">for</span>
  <span m="2847830">kicks,</span> <span m="2849280">let's</span> <span
  m="2849370">do</span> <span m="2849490">insert</span> <span
  m="2849940">in</span> <span m="2850140">log</span> <span
  m="2850380">log</span> <span m="2850530">u</span> <span m="2850760">as</span>
  <span m="2850860">well.</span> <span m="2851730">This</span> <span
  m="2851840">is</span> <span m="2851970">going</span> <span
  m="2852120">to</span> <span m="2852200">be</span> <span m="2853190">a</span>
  <span m="2853270">little</span> <span m="2853470">harder,</span> <span
  m="2855070">or</span> <span m="2855450">I</span> <span
  m="2855570">would</span> <span m="2855720">say</span> <span m="2855890">a
  more</span> <span m="2857920">surprising</span> <span m="2858670">idea.</span>
  <span m="2861710">This may be--</span></p><p><span m="2875681">I</span> <span
  m="2876190">don't</span> <span m="2876450">have</span> <span
  m="2876560">a</span> <span m="2876620">great</span> <span
  m="2876820">intuition</span> <span m="2877230">for</span> <span
  m="2877350">this</span> <span m="2877630">step.</span> <span
  m="2877960">I'm</span> <span m="2878220">thinking.</span> <span
  m="2881330">But</span> <span m="2882230">again,</span> <span
  m="2882740">most</span> <span m="2883110">of</span> <span
  m="2883150">the</span> <span m="2883280">time,</span> <span
  m="2883530">this</span> <span m="2883620">should</span> <span m="2883910">be
  fine,</span> <span m="2884245">right?</span> <span m="2885010">Most</span>
  <span m="2885270">of</span> <span m="2885370">the</span> <span
  m="2885470">time,</span> <span m="2885670">we</span> <span
  m="2885820">insert</span> <span m="2886230">into</span> <span
  m="2886450">cluster</span> <span m="2886810">high of</span> <span
  m="2887070">x,</span> <span m="2887720">low of</span> <span
  m="2887990">x,</span> <span m="2888720">and</span> <span
  m="2888860">we're</span> <span m="2888960">done.</span> <span
  m="2889810">As</span> <span m="2889910">long</span> <span
  m="2890100">as</span> <span m="2890180">there is</span> <span
  m="2890390">something</span> <span m="2890730">already</span> <span
  m="2891250">in</span> <span m="2891370">that</span> <span
  m="2891560">cluster,</span> <span m="2894100">we</span> <span
  m="2894290">don't</span> <span m="2894490">need</span> <span
  m="2894810">to</span> <span m="2894920">update</span> <span
  m="2895230">the</span> <span m="2895310">summary</span> <span
  m="2895620">structure.</span></p><p><span m="2896330">As</span> <span
  m="2896460">long</span> <span m="2896730">as</span> <span
  m="2896970">high</span> <span m="2897200">of</span> <span m="2897310">x</span>
  <span m="2897490">has</span> <span m="2897660">already</span> <span
  m="2898120">been</span> <span m="2898270">inserted</span> <span
  m="2898770">into</span> <span m="2898960">the</span> <span
  m="2899070">summary</span> <span m="2899380">structure,</span> <span
  m="2900220">we</span> <span m="2900360">can</span> <span
  m="2900480">get</span> <span m="2900620">away</span> <span
  m="2900830">with</span> <span m="2901020">just</span> <span
  m="2901160">this</span> <span m="2901320">first</span> <span
  m="2901550">step.</span> <span m="2902200">The</span> <span
  m="2902320">tricky</span> <span m="2902630">part</span> <span
  m="2902830">is</span> <span m="2902990">detecting.</span> <span
  m="2905110">How</span> <span m="2905390">would</span> <span
  m="2905510">we</span> <span m="2905650">know?</span> <span
  m="2906810">Well,</span> <span m="2907330">that's</span> <span
  m="2907680">not</span> <span m="2908070">enough</span> <span
  m="2908300">just</span> <span m="2908500">to</span> <span
  m="2908580">detect</span> <span m="2909030">it.</span></p><p><span
  m="2910210">If</span> <span m="2911620">high of</span> <span
  m="2911730">x</span> <span m="2911980">is</span> <span m="2912100">not</span>
  <span m="2912340">in</span> <span m="2912530">v dot</span> <span
  m="2912820">summary,</span> <span m="2913110">we</span> <span
  m="2913220">have</span> <span m="2913480">to</span> <span
  m="2913600">do</span> <span m="2913800">this</span> <span
  m="2913900">insert.</span> <span m="2914685">We</span> <span
  m="2915000">can't</span> <span m="2915230">get</span> <span
  m="2915360">away</span> <span m="2915570">with</span> <span
  m="2915740">it.</span> <span m="2917420">But</span> <span
  m="2917640">that's</span> <span m="2918020">kind</span> <span
  m="2918280">of</span> <span m="2918360">rare.</span> <span
  m="2918720">That</span> <span m="2918880">only</span> <span
  m="2919090">happens</span> <span m="2919400">the</span> <span
  m="2919470">very</span> <span m="2919740">first</span> <span
  m="2920010">time</span> <span m="2920220">you</span> <span
  m="2920350">insert</span> <span m="2920740">into</span> <span
  m="2920920">that</span> <span m="2921130">cluster.</span> <span
  m="2922030">Every</span> <span m="2922360">subsequent</span> <span
  m="2922870">time,</span> <span m="2923280">it's</span> <span
  m="2923320">going</span> <span m="2923440">to</span> <span
  m="2923500">be</span> <span m="2923630">really</span> <span
  m="2923830">cheap.</span> <span m="2924080">We</span> <span
  m="2924160">just</span> <span m="2924370">have</span> <span
  m="2924490">to</span> <span m="2924600">do</span> <span
  m="2924720">this.</span></p><p><span m="2927650">It's</span> <span
  m="2927790">easy</span> <span m="2927990">enough</span> <span
  m="2928170">to</span> <span m="2928250">keep</span> <span
  m="2928410">track</span> <span m="2928630">of</span> <span
  m="2928700">whether</span> <span m="2928920">a cluster is</span> <span
  m="2929290">empty.</span> <span m="2931590">For</span> <span
  m="2931720">example,</span> <span m="2932450">we're</span> <span
  m="2932600">storing</span> <span m="2932900">the</span> <span
  m="2933070">min.</span> <span m="2933300">We</span> <span
  m="2933400">can</span> <span m="2933530">say</span> <span m="2933850">v</span>
  <span m="2933980">dot</span> <span m="2934190">min</span> <span
  m="2934430">is</span> <span m="2934700">none,</span> <span
  m="2935250">special</span> <span m="2935620">value,</span> <span
  m="2936720">whenever</span> <span m="2937910">the</span> <span
  m="2937990">structure</span> <span m="2938360">v</span> <span
  m="2938590">is</span> <span m="2938910">empty.</span></p><p><span
  m="2940670">But</span> <span m="2940840">we</span> <span
  m="2940950">still</span> <span m="2941120">have</span> <span
  m="2941260">this</span> <span m="2941430">problem,</span> <span
  m="2941860">that</span> <span m="2941980">the</span> <span
  m="2942080">first</span> <span m="2942490">time</span> <span
  m="2942700">we</span> <span m="2942830">insert</span> <span
  m="2943120">into</span> <span m="2943330">a</span> <span
  m="2943390">cluster,</span> <span m="2944310">it's</span> <span
  m="2944500">expensive.</span> <span m="2945330">Because</span> <span
  m="2945510">we</span> <span m="2945590">have</span> <span
  m="2945680">to</span> <span m="2945770">do</span> <span
  m="2945890">this.</span> <span m="2946160">And</span> <span
  m="2946470">we</span> <span m="2946560">have</span> <span
  m="2946760">to</span> <span m="2946870">do</span> <span
  m="2947000">this.</span> <span m="2949390">How</span> <span
  m="2949630">could</span> <span m="2949800">we</span> <span
  m="2949960">avoid,</span> <span m="2952870">in</span> <span
  m="2953100">the</span> <span m="2953230">case</span> <span
  m="2953770">where</span> <span m="2955960">a</span> <span
  m="2956060">cluster</span> <span m="2956450">is</span> <span
  m="2956570">empty--</span> <span m="2957110">remember,</span> <span
  m="2958250">an</span> <span m="2958870">overall</span> <span
  m="2959030">structure</span> <span m="2959360">looks</span> <span
  m="2959570">like</span> <span m="2959720">this.</span> <span
  m="2960070">We</span> <span m="2960170">can</span> <span
  m="2960190">tell</span> <span m="2960380">that it's</span> <span
  m="2960570">empty</span> <span m="2960860">by</span> <span
  m="2961000">saying</span> <span m="2961260">min</span> <span
  m="2961610">equals</span> <span m="2962010">none,</span> <span
  m="2962230">let's</span> <span m="2962590">say.</span></p><p><span
  m="2964590">What</span> <span m="2964800">could</span> <span
  m="2964960">I</span> <span m="2965010">do?</span> <span
  m="2965600">Sorry,</span> <span m="2966030">there's</span> <span
  m="2966160">also</span> <span m="2966390">a</span> <span
  m="2966440">max</span> <span m="2966870">now.</span> <span
  m="2970820">What</span> <span m="2971050">could</span> <span
  m="2971190">I</span> <span m="2971240">do</span> <span m="2973610">to</span>
  <span m="2973830">speed</span> <span m="2974320">up</span> <span
  m="2974580">inserting</span> <span m="2975140">into</span> <span
  m="2975390">an</span> <span m="2975510">empty</span> <span
  m="2975810">cluster?</span> <span m="2976800">Because</span> <span
  m="2976930">I'm</span> <span m="2977030">first</span> <span
  m="2977310">going</span> <span m="2977410">to</span> <span
  m="2977450">have</span> <span m="2977610">to</span> <span
  m="2977680">insert</span> <span m="2977990">into</span> <span
  m="2978180">the</span> <span m="2978270">empty</span> <span
  m="2978480">cluster.</span> <span m="2979220">Then</span> <span
  m="2979320">I'm going to</span> <span m="2979360">have</span> <span
  m="2979590">to</span> <span m="2979680">answer</span> <span
  m="2979920">into</span> <span m="2980080">the</span> <span
  m="2980180">summary.</span></p><p><span m="2980500">I</span> <span
  m="2980570">can't</span> <span m="2980840">get</span> <span
  m="2980960">away</span> <span m="2981220">from</span> <span
  m="2981430">this.</span> <span m="2982260">So</span> <span
  m="2982470">I'd</span> <span m="2982610">like</span> <span
  m="2982830">this</span> <span m="2983020">to</span> <span
  m="2983130">become</span> <span m="2983470">cheap,</span> <span
  m="2985020">in</span> <span m="2985130">the</span> <span
  m="2985200">special</span> <span m="2985590">case</span> <span
  m="2986080">when</span> <span m="2986460">this</span> <span
  m="2986630">cluster is</span> <span m="2987100">empty.</span> <span
  m="2993260">Yeah.</span></p><p><span m="2993550">AUDIENCE: Lazy</span> <span
  m="2993840">propogation.</span></p><p><span m="2995070">PROFESSOR: Lazy</span>
  <span m="2995510">propagation--</span> <span m="2996650">you</span> <span
  m="2996730">want</span> <span m="2996820">to</span> <span
  m="2996860">elaborate?</span></p><p><span m="2997800">AUDIENCE: Yeah.</span>
  <span m="2998780">We</span> <span m="2999270">mark</span> <span
  m="2999760">the</span> <span m="3001720">place</span> <span
  m="3002210">we</span> <span m="3002700">want to</span> <span
  m="3003190">insert</span> <span m="3003680">in.</span> <span
  m="3004660">And</span> <span m="3005150">then</span> <span m="3005640">we
  will</span> <span m="3006130">take it down</span> <span m="3006620">whenever
  we</span> <span m="3007110">[? insert ?]</span> <span
  m="3007600">there.</span></p><p><span m="3008090">PROFESSOR: Good.</span>
  <span m="3008580">So</span> <span m="3009360">when</span> <span
  m="3009520">I</span> <span m="3009620">insert</span> <span
  m="3010020">into</span> <span m="3010230">an</span> <span
  m="3010340">empty</span> <span m="3010660">structure,</span> <span
  m="3011690">I'm</span> <span m="3011840">just</span> <span
  m="3012010">going</span> <span m="3012120">to</span> <span
  m="3012170">have</span> <span m="3012580">a</span> <span
  m="3013220">little</span> <span m="3013450">lazy</span> <span
  m="3013800">field,</span> <span m="3014190">or</span> <span
  m="3014270">something.</span> <span m="3015460">And</span> <span
  m="3015840">I'll</span> <span m="3015960">put</span> <span
  m="3016180">the</span> <span m="3016310">item</span> <span
  m="3016570">in</span> <span m="3016670">there.</span> <span
  m="3018170">And</span> <span m="3018340">then</span> <span
  m="3018520">the</span> <span m="3018610">next</span> <span
  m="3019040">time</span> <span m="3019240">I</span> <span
  m="3019310">insert</span> <span m="3019650">into</span> <span
  m="3019840">it,</span> <span m="3019940">maybe</span> <span
  m="3020180">I'll</span> <span m="3020260">carry</span> <span
  m="3020560">it</span> <span m="3020660">down</span> <span m="3020920">a</span>
  <span m="3020980">little</span> <span m="3021180">bit.</span> <span
  m="3022550">That</span> <span m="3022780">actually</span> <span
  m="3023140">works.</span> <span m="3024120">And</span> <span
  m="3024220">that</span> <span m="3024370">was</span> <span
  m="3024730">the</span> <span m="3024860">original</span> <span
  m="3025300">van</span> <span m="3025580">Emde Boas</span> <span
  m="3025830">structure,</span> <span m="3027750">[? I ?]</span> <span
  m="3028010">[? learned ?]</span> <span m="3028365">[? recently.
  ?]</span></p><p><span m="3029070">So</span> <span m="3030880">that</span>
  <span m="3031050">works.</span> <span m="3031390">But</span> <span
  m="3031680">it's</span> <span m="3031940">a</span> <span
  m="3032030">little</span> <span m="3032250">more</span> <span
  m="3032410">complicated</span> <span m="3033050">than</span> <span
  m="3033390">the</span> <span m="3033510">solution</span> <span
  m="3033900">I</span> <span m="3033920">have</span> <span m="3034120">in</span>
  <span m="3034200">mind.</span> <span m="3035040">So I'm</span> <span
  m="3035340">going</span> <span m="3035440">to</span> <span
  m="3037920">unify</span> <span m="3038910">that</span> <span
  m="3039100">lazy</span> <span m="3039420">field</span> <span
  m="3040120">with</span> <span m="3040370">the</span> <span
  m="3040450">minimum</span> <span m="3040830">field.</span> <span
  m="3041940">Say,</span> <span m="3042440">when</span> <span
  m="3042660">I</span> <span m="3042850">insert</span> <span m="3043270">into
  a</span> <span m="3043510">structure,</span> <span m="3043870">if</span> <span
  m="3043980">there's</span> <span m="3044150">nothing</span> <span
  m="3044530">here,</span> <span m="3045370">I'm</span> <span
  m="3045440">just</span> <span m="3045570">going</span> <span
  m="3045680">to</span> <span m="3045730">put</span> <span
  m="3045940">the</span> <span m="3046050">item</span> <span
  m="3046270">there,</span> <span m="3046520">and</span> <span
  m="3046680">not</span> <span m="3046910">recurse.</span> <span
  m="3049370">I</span> <span m="3049450">just</span> <span m="3049820">am</span>
  <span m="3049990">not</span> <span m="3050230">going</span> <span
  m="3050350">to</span> <span m="3050410">store</span> <span
  m="3050660">the</span> <span m="3050760">minimum</span> <span
  m="3051210">item</span> <span m="3052270">recursively.</span></p><p><span
  m="3054286">Definitely</span> <span m="3054740">frisbee.</span> <span
  m="3057940">So</span> <span m="3060010">that's</span> <span
  m="3060330">the</span> <span m="3060490">last</span> <span
  m="3060820">idea,</span> <span m="3061445">pretty</span> <span
  m="3061740">much.</span> <span m="3071040">Idea</span> <span
  m="3071380">number</span> <span m="3071650">five</span> <span
  m="3072320">is,</span> <span m="3073700">don't</span> <span
  m="3075540">store</span> <span m="3077670">the</span> <span
  m="3077750">min</span> <span m="3078030">recursively.</span> <span
  m="3083880">This</span> <span m="3084070">is</span> <span
  m="3084210">effectively</span> <span m="3084620">equivalent</span> <span
  m="3085120">to</span> <span m="3085950">lazy.</span></p><p><span
  m="3087080">But</span> <span m="3087220">we're</span> <span
  m="3087320">actually</span> <span m="3087540">just</span> <span
  m="3087700">never</span> <span m="3087990">going</span> <span
  m="3088130">to</span> <span m="3088480">get</span> <span
  m="3088620">around</span> <span m="3088970">to</span> <span
  m="3089080">moving</span> <span m="3089370">this</span> <span
  m="3089540">guy</span> <span m="3089680">down.</span> <span
  m="3090890">Just</span> <span m="3091350">leave</span> <span
  m="3091580">it</span> <span m="3091670">there.</span> <span
  m="3092180">First,</span> <span m="3092550">if</span> <span
  m="3093210">the</span> <span m="3093300">min</span> <span
  m="3093480">field</span> <span m="3093720">is</span> <span
  m="3093820">blank,</span> <span m="3094260">store</span> <span
  m="3094500">the</span> <span m="3094650">item</span> <span
  m="3094870">there.</span> <span m="3095628">Yeah.</span></p><p><span
  m="3096106">AUDIENCE: What do</span> <span m="3096584">you</span> <span
  m="3097062">mean</span> <span m="3097540">by</span> <span m="3098018">moving
  the</span> <span m="3098496">guy down?</span></p><p><span
  m="3099460">PROFESSOR: Don't</span> <span m="3099660">worry</span> <span
  m="3099800">about</span> <span m="3100000">moving</span> <span
  m="3100240">the</span> <span m="3100320">guy</span> <span
  m="3100450">down.</span> <span m="3100670">We're</span> <span
  m="3100760">not</span> <span m="3100910">going</span> <span
  m="3101020">to</span> <span m="3101100">do</span> <span
  m="3101220">it.</span></p><p><span m="3101430">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="3103230">PROFESSOR: But</span> <span
  m="3103510">in</span> <span m="3103880">general,</span> <span
  m="3104330">moving</span> <span m="3104700">down</span> <span
  m="3105000">means,</span> <span m="3105760">when</span> <span
  m="3105940">I</span> <span m="3106000">want</span> <span m="3106190">to</span>
  <span m="3106230">insert</span> <span m="3106560">an</span> <span
  m="3106660">item,</span> <span m="3106980">I</span> <span
  m="3107060">have</span> <span m="3107270">to</span> <span
  m="3108010">move</span> <span m="3108250">it</span> <span
  m="3108340">down</span> <span m="3108640">into</span> <span
  m="3108960">its</span> <span m="3109400">sub</span> <span
  m="3109630">cluster.</span> <span m="3110570">So</span> <span
  m="3110690">I</span> <span m="3110780">want</span> <span m="3110980">to</span>
  <span m="3111220">insert</span> <span m="3111570">x</span> <span
  m="3111880">into</span> <span m="3112140">the</span> <span
  m="3112240">cluster,</span> <span m="3114020">high</span> <span
  m="3114210">of</span> <span m="3114330">x</span> <span m="3115040">with</span>
  <span m="3115140">low</span> <span m="3115340">of</span> <span
  m="3115430">x,</span> <span m="3115820">that</span> <span
  m="3116070">recursive</span> <span m="3116460">call.</span> <span
  m="3116680">That's</span> <span m="3116890">moving</span> <span
  m="3117190">it</span> <span m="3117300">down.</span> <span
  m="3118230">I'm</span> <span m="3118330">not</span> <span
  m="3118470">going</span> <span m="3118570">to</span> <span
  m="3118650">do</span> <span m="3118770">that.</span></p><p><span
  m="3119320">If</span> <span m="3119660">the</span> <span
  m="3120430">structure</span> <span m="3120780">is</span> <span
  m="3120910">empty,</span> <span m="3122590">I'm</span> <span
  m="3122610">going</span> <span m="3122700">to</span> <span
  m="3122770">set</span> <span m="3123030">v</span> <span m="3123190">dot</span>
  <span m="3123380">min</span> <span m="3123620">equal</span> <span
  m="3123880">to</span> <span m="3123960">x,</span> <span m="3124510">and</span>
  <span m="3124630">then</span> <span m="3124750">stop.</span> <span
  m="3126910">Let</span> <span m="3127050">me</span> <span
  m="3127540">illustrate</span> <span m="3131280">with</span> <span
  m="3131500">some</span> <span m="3131840">code,</span> <span
  m="3133810">maybe</span> <span m="3137240">over</span> <span
  m="3138230">here.</span></p><p><span m="3164960">Here's</span> <span
  m="3165200">what</span> <span m="3165330">I</span> <span
  m="3165400">mean.</span> <span m="3166170">If</span> <span
  m="3166380">v</span> <span m="3166530">dot</span> <span m="3166750">min</span>
  <span m="3168030">is</span> <span m="3168360">special</span> <span
  m="3168870">none</span> <span m="3169110">value--</span> <span
  m="3170540">use</span> <span m="3170740">Python</span> <span
  m="3171090">notation</span> <span m="3171500">here--</span> <span
  m="3172620">then</span> <span m="3173960">I'm</span> <span
  m="3174150">just</span> <span m="3174270">going</span> <span
  m="3174370">to</span> <span m="3174430">set</span> <span m="3174670">v</span>
  <span m="3174790">dot</span> <span m="3174980">min</span> <span
  m="3175140">equal</span> <span m="3175340">to</span> <span
  m="3175410">x.</span> <span m="3175730">I</span> <span
  m="3175800">should</span> <span m="3176010">also</span> <span
  m="3176230">set</span> <span m="3176490">v</span> <span m="3176640">dot</span>
  <span m="3176750">max</span> <span m="3177050">equal</span> <span
  m="3177260">to</span> <span m="3177320">x.</span> <span m="3178470">Because
  I</span> <span m="3178580">want</span> <span m="3178730">to</span> <span
  m="3178780">keep</span> <span m="3178970">track</span> <span m="3179290">of
  the</span> <span m="3179420">maximum.</span> <span m="3180570">And</span>
  <span m="3180750">then,</span> <span m="3181110">stop.</span> <span
  m="3181540">Return.</span></p><p><span m="3183480">That's</span> <span
  m="3183680">all</span> <span m="3183950">I</span> <span
  m="3184040">will</span> <span m="3184210">do</span> <span
  m="3184370">for</span> <span m="3184530">inserting</span> <span
  m="3184960">into</span> <span m="3185180">an</span> <span
  m="3185270">empty</span> <span m="3185540">structure,</span> <span
  m="3186490">is</span> <span m="3186660">stick</span> <span
  m="3186990">it</span> <span m="3187420">in</span> <span m="3187600">the</span>
  <span m="3187670">max</span> <span m="3187995">field.</span> <span
  m="3191040">OK,</span> <span m="3191270">this</span> <span
  m="3191460">may</span> <span m="3191600">seem</span> <span
  m="3191810">like</span> <span m="3191990">a</span> <span
  m="3192050">minor</span> <span m="3192380">change.</span> <span
  m="3193120">But</span> <span m="3193430">it's</span> <span
  m="3193620">going</span> <span m="3193760">to</span> <span
  m="3193920">make</span> <span m="3194150">this</span> <span
  m="3194970">cheap.</span> <span m="3196550">So</span> <span
  m="3196700">the</span> <span m="3196810">rest</span> <span m="3196990">of
  the</span> <span m="3197150">algorithm</span> <span m="3197540">is</span>
  <span m="3197630">going</span> <span m="3197750">to</span> <span
  m="3197830">be</span> <span m="3198030">pretty</span> <span
  m="3198340">similar.</span></p><p><span m="3200040">There's</span> <span
  m="3200110">a</span> <span m="3200230">couple</span> <span
  m="3200910">annoying</span> <span m="3201500">special</span> <span
  m="3201870">cases,</span> <span m="3203700">which</span> <span
  m="3203950">is,</span> <span m="3204050">we</span> <span
  m="3204160">have</span> <span m="3204360">to</span> <span
  m="3204460">keep</span> <span m="3204710">the</span> <span
  m="3204890">min</span> <span m="3205010">up</span> <span m="3205220">to</span>
  <span m="3205320">date.</span> <span m="3206070">And</span> <span
  m="3206220">we</span> <span m="3206300">have</span> <span
  m="3206460">to</span> <span m="3206550">keep</span> <span
  m="3206720">the</span> <span m="3206800">max</span> <span
  m="3207130">up</span> <span m="3207240">to date,</span> <span
  m="3208570">in</span> <span m="3208650">general.</span> <span
  m="3211860">This</span> <span m="3212050">one</span> <span
  m="3212210">is</span> <span m="3212300">easy.</span> <span
  m="3212750">We</span> <span m="3212850">just</span> <span
  m="3212920">set</span> <span m="3213280">v dot</span> <span
  m="3213450">max</span> <span m="3213780">equal</span> <span
  m="3213980">to</span> <span m="3214040">x.</span> <span
  m="3216086">Because</span> <span m="3216490">we're</span> <span
  m="3216580">not</span> <span m="3216710">doing</span> <span
  m="3216900">anything</span> <span m="3217180">fancy with</span> <span
  m="3217590">max.</span></p><p><span m="3217880">Min</span> <span
  m="3218130">is</span> <span m="3218230">a</span> <span
  m="3218290">little</span> <span m="3218490">special.</span> <span
  m="3219000">Because</span> <span m="3220840">if</span> <span
  m="3221000">we're</span> <span m="3221610">inserting</span> <span
  m="3221900">an</span> <span m="3222190">item</span> <span
  m="3222570">smaller</span> <span m="3223150">than</span> <span
  m="3223300">the</span> <span m="3223390">current</span> <span
  m="3223680">minimum,</span> <span m="3225860">then</span> <span
  m="3226030">really</span> <span m="3226480">x</span> <span
  m="3226830">belongs</span> <span m="3227260">in</span> <span
  m="3227380">the</span> <span m="3227480">slot.</span> <span
  m="3227960">And</span> <span m="3228110">then</span> <span
  m="3228230">whatever</span> <span m="3228560">was</span> <span
  m="3228740">in</span> <span m="3228840">here</span> <span
  m="3229500">needs</span> <span m="3229670">to</span> <span
  m="3229750">be</span> <span m="3229900">recursively</span> <span
  m="3230430">inserted.</span> <span m="3231390">OK,</span> <span
  m="3231780">so</span> <span m="3232010">I'm</span> <span
  m="3232200">going</span> <span m="3232430">to</span> <span
  m="3232560">say</span> <span m="3232820">swap</span> <span
  m="3234740">x</span> <span m="3235380">with</span> <span m="3236840">v</span>
  <span m="3236980">dot</span> <span m="3237250">min.</span></p><p><span
  m="3239140">So</span> <span m="3239250">I'm</span> <span
  m="3239310">going</span> <span m="3239390">to</span> <span
  m="3239440">put</span> <span m="3239620">x</span> <span
  m="3239880">into</span> <span m="3240050">the</span> <span m="3240260">v
  dot</span> <span m="3240610">min slot.</span> <span m="3240960">And I'm
  going</span> <span m="3241050">to</span> <span m="3241190">pull</span> <span
  m="3241550">out</span> <span m="3241660">whatever</span> <span
  m="3242000">item</span> <span m="3242240">was</span> <span
  m="3242400">in</span> <span m="3242510">there</span> <span
  m="3243200">and</span> <span m="3243380">call</span> <span
  m="3243620">it</span> <span m="3243720">x</span> <span m="3244220">now.</span>
  <span m="3244800">And</span> <span m="3245010">now</span> <span
  m="3245260">my</span> <span m="3245620">remaining</span> <span
  m="3246060">goal is</span> <span m="3246450">to</span> <span
  m="3246590">insert</span> <span m="3246930">x</span> <span
  m="3247230">into</span> <span m="3247470">the</span> <span
  m="3247540">rest</span> <span m="3247760">of the</span> <span
  m="3247810">structure.</span> <span m="3248210">There's</span> <span
  m="3248360">only</span> <span m="3248580">one</span> <span
  m="3248870">item</span> <span m="3249170">that</span> <span
  m="3249270">gets</span> <span m="3249560">this</span> <span
  m="3250890">freedom</span> <span m="3251820">of</span> <span
  m="3251990">not</span> <span m="3252250">being</span> <span
  m="3252430">recursively</span> <span m="3252940">stored.</span> <span
  m="3253260">And it's</span> <span m="3253430">always</span> <span
  m="3253670">going</span> <span m="3253790">to</span> <span
  m="3253850">be</span> <span m="3253960">the</span> <span
  m="3254050">minimum</span> <span m="3254370">one.</span></p><p><span
  m="3255000">So</span> <span m="3255120">this</span> <span
  m="3255290">way,</span> <span m="3256410">the</span> <span
  m="3256510">new</span> <span m="3256660">value</span> <span
  m="3257000">x</span> <span m="3257640">goes</span> <span
  m="3257890">there.</span> <span m="3258590">Whatever</span> <span
  m="3258910">it</span> <span m="3258980">used</span> <span
  m="3259180">to</span> <span m="3259240">be</span> <span
  m="3259380">there</span> <span m="3259690">now</span> <span
  m="3259930">has</span> <span m="3260150">to</span> <span m="3260220">be</span>
  <span m="3260340">recursively</span> <span m="3260830">inserted.</span> <span
  m="3261190">Because</span> <span m="3261440">every</span> <span
  m="3261760">item</span> <span m="3261980">except</span> <span
  m="3262330">the</span> <span m="3262420">minimum,</span> <span
  m="3263170">we're</span> <span m="3263280">going</span> <span
  m="3263410">to</span> <span m="3263470">recursively</span> <span
  m="3264030">insert.</span></p><p><span m="3265660">So</span> <span
  m="3265840">the</span> <span m="3265940">rest</span> <span
  m="3266200">is</span> <span m="3266290">pretty</span> <span
  m="3266470">much</span> <span m="3266670">the</span> <span
  m="3266750">same.</span> <span m="3267680">But</span> <span
  m="3268090">we're</span> <span m="3268250">going</span> <span
  m="3268530">to,</span> <span m="3271960">instead</span> <span
  m="3272360">of</span> <span m="3272490">always</span> <span
  m="3272980">inserting</span> <span m="3273500">into</span> <span
  m="3273670">the</span> <span m="3273770">summary</span> <span
  m="3274110">structure,</span> <span m="3274940">we're</span> <span
  m="3275060">going</span> <span m="3275160">to</span> <span
  m="3275230">see</span> <span m="3276010">whether</span> <span
  m="3276290">it's</span> <span m="3276450">necessary.</span> <span
  m="3277740">Because</span> <span m="3278060">we</span> <span
  m="3278160">know</span> <span m="3278270">how</span> <span
  m="3278380">to</span> <span m="3278470">do</span> <span
  m="3278600">that.</span> <span m="3279370">We</span> <span
  m="3279390">just</span> <span m="3279570">look</span> <span
  m="3279960">at</span> <span m="3280750">a</span> <span
  m="3280800">cluster</span> <span m="3281180">high</span> <span
  m="3281400">of</span> <span m="3281470">x.</span> <span m="3282720">And</span>
  <span m="3282930">we</span> <span m="3283060">see,</span> <span m="3285360">is
  it</span> <span m="3285570">empty?</span></p><p><span
  m="3287720">Cluster</span> <span m="3289850">high</span> <span m="3290150">of
  x--</span> <span m="3292070">and</span> <span m="3292550">empty</span> <span
  m="3292890">means</span> <span m="3293650">its</span> <span
  m="3293790">minimum</span> <span m="3295070">is</span> <span
  m="3295320">none.</span> <span m="3299450">So</span> <span
  m="3300040">we're</span> <span m="3301030">going</span> <span
  m="3301340">to--</span> <span m="3301600">in</span> <span
  m="3301710">fact,</span> <span m="3302360">the</span> <span
  m="3302450">next</span> <span m="3302670">line</span> <span
  m="3302860">after</span> <span m="3303140">this</span> <span
  m="3303340">one</span> <span m="3304020">is</span> <span
  m="3304200">going</span> <span m="3304420">to</span> <span
  m="3304530">be</span> <span m="3305670">insert</span> <span
  m="3307500">v</span> <span m="3309230">cluster</span> <span m="3309670">high
  of</span> <span m="3309950">x,</span> <span m="3317550">comma</span> <span
  m="3318560">low</span> <span m="3318790">of</span> <span m="3318890">x.</span>
  <span m="3321270">All right,</span> <span m="3321750">that's</span> <span
  m="3322710">this</span> <span m="3322930">line.</span> <span m="3323970">We're
  always</span> <span m="3324240">going</span> <span m="3324370">to</span> <span
  m="3324440">do</span> <span m="3324570">that.</span></p><p><span
  m="3327680">And</span> <span m="3328020">in</span> <span
  m="3328170">the</span> <span m="3328260">special</span> <span
  m="3328620">case,</span> <span m="3328880">where</span> <span
  m="3329000">there</span> <span m="3329110">was</span> <span
  m="3329260">not</span> <span m="3329580">previously</span> <span
  m="3330080">nothing</span> <span m="3330590">in</span> <span
  m="3331340">v</span> <span m="3331470">cluster</span> <span m="3331840">high
  of</span> <span m="3332130">x,</span> <span m="3332690">we</span> <span
  m="3332810">need</span> <span m="3332970">to</span> <span
  m="3333070">update</span> <span m="3333910">the</span> <span
  m="3333990">summary</span> <span m="3334270">structure.</span> <span
  m="3335080">And</span> <span m="3335220">we</span> <span m="3335330">do</span>
  <span m="3335490">that</span> <span m="3336450">with</span> <span
  m="3336630">this</span> <span m="3336840">line.</span> <span
  m="3338550">So</span> <span m="3338700">I'm</span> <span
  m="3338820">going</span> <span m="3339030">to</span> <span
  m="3339150">insert</span> <span m="3344620">into</span> <span m="3345220">v
  dot</span> <span m="3345590">summary</span> <span m="3353620">high</span>
  <span m="3354070">of</span> <span m="3354230">x.</span></p><p><span
  m="3357900">But</span> <span m="3358040">I'm</span> <span
  m="3358240">only</span> <span m="3358590">doing</span> <span
  m="3358820">that</span> <span m="3359000">in</span> <span
  m="3359090">the</span> <span m="3359180">case</span> <span
  m="3359450">when</span> <span m="3359610">I</span> <span
  m="3359680">need</span> <span m="3359920">to.</span> <span m="3361060">If
  it</span> <span m="3361120">was</span> <span m="3361240">already</span> <span
  m="3361530">non-empty,</span> <span m="3362030">I</span> <span
  m="3362080">know</span> <span m="3362240">this</span> <span
  m="3362400">has</span> <span m="3362520">already</span> <span
  m="3362770">happened.</span> <span m="3363320">So</span> <span
  m="3363420">I</span> <span m="3363520">don't</span> <span
  m="3363530">need</span> <span m="3363660">to</span> <span
  m="3363730">bother</span> <span m="3363990">with</span> <span
  m="3364090">that</span> <span m="3364405">insertion.</span> <span
  m="3366640">OK,</span> <span m="3366830">this</span> <span
  m="3367210">is</span> <span m="3367470">a</span> <span
  m="3367550">weird</span> <span m="3367820">algorithm.</span> <span
  m="3368230">Because</span> <span m="3368540">it</span> <span
  m="3368640">doesn't</span> <span m="3369000">look</span> <span
  m="3369490">much</span> <span m="3369920">better.</span></p><p><span
  m="3371150">In</span> <span m="3371220">the</span> <span
  m="3371320">worst</span> <span m="3371570">case,</span> <span
  m="3371770">we're</span> <span m="3371880">doing</span> <span
  m="3372080">two</span> <span m="3372310">recursive</span> <span
  m="3372810">calls</span> <span m="3374350">to</span> <span
  m="3374560">insert.</span> <span m="3375110">But</span> <span
  m="3375250">I</span> <span m="3375310">claim</span> <span
  m="3375740">this</span> <span m="3375930">runs</span> <span
  m="3376260">in</span> <span m="3376390">log</span> <span
  m="3376630">log</span> <span m="3376810">u</span> <span
  m="3376950">time.</span> <span m="3378756">Why?</span> <span
  m="3385152">Yeah.</span></p><p><span m="3386628">AUDIENCE: Because</span>
  <span m="3387612">when</span> <span m="3388104">we</span> <span
  m="3388596">update</span> <span m="3389088">the</span> <span m="3389580">v
  dot</span> <span m="3390072">summary,</span> <span m="3390564">we</span> <span
  m="3391056">[? just ?]</span> <span m="3391548">[? have the ?]</span> <span
  m="3392040">[? first ?]</span> <span m="3392532">[? line.
  ?]</span></p><p><span m="3393050">PROFESSOR: Good.</span> <span
  m="3393440">Yeah.</span> <span m="3394230">In</span> <span
  m="3394420">the</span> <span m="3394530">case</span> <span
  m="3394930">when</span> <span m="3395070">I</span> <span
  m="3395120">have</span> <span m="3395310">to</span> <span
  m="3395400">do</span> <span m="3395500">this</span> <span
  m="3395630">summary</span> <span m="3396000">insertion,</span> <span
  m="3396540">I</span> <span m="3396630">know</span> <span
  m="3396810">this</span> <span m="3397020">guy</span> <span
  m="3397210">was</span> <span m="3397590">empty.</span> <span
  m="3398190">Cluster</span> <span m="3398600">high of</span> <span
  m="3398900">x</span> <span m="3399050">was</span> <span
  m="3399160">empty.</span> <span m="3399770">So</span> <span
  m="3399920">this</span> <span m="3400230">call</span> <span
  m="3401110">is</span> <span m="3401220">just</span> <span
  m="3401400">going</span> <span m="3401510">to</span> <span
  m="3401590">do</span> <span m="3401780">these</span> <span
  m="3402130">two</span> <span m="3402290">lines.</span></p><p><span
  m="3403640">Because</span> <span m="3403960">I</span> <span
  m="3404080">optimized</span> <span m="3404560">the</span> <span
  m="3404670">case</span> <span m="3404990">of</span> <span
  m="3405180">empty--</span> <span m="3405680">when a</span> <span
  m="3406130">structure</span> <span m="3406425">is</span> <span
  m="3406720">empty,</span> <span m="3406980">I spend</span> <span
  m="3407380">constant</span> <span m="3407920">time,</span> <span
  m="3408160">no</span> <span m="3408370">recursive</span> <span
  m="3408800">calls.</span> <span m="3409960">That</span> <span
  m="3410140">means</span> <span m="3410860">in</span> <span
  m="3411050">the</span> <span m="3411150">case</span> <span
  m="3411440">when</span> <span m="3411680">cluster</span> <span
  m="3412030">high</span> <span m="3412240">of</span> <span m="3412350">x</span>
  <span m="3412500">is</span> <span m="3412610">empty,</span> <span
  m="3412900">and</span> <span m="3412990">I</span> <span
  m="3413060">have</span> <span m="3413280">to</span> <span
  m="3413380">pay</span> <span m="3413690">to</span> <span
  m="3413760">insert</span> <span m="3414110">into</span> <span
  m="3414300">the</span> <span m="3414360">summary</span> <span
  m="3414710">structure,</span> <span m="3415450">I</span> <span
  m="3415580">know</span> <span m="3415700">my</span> <span
  m="3415850">second</span> <span m="3416240">call</span> <span
  m="3416490">is</span> <span m="3416620">going</span> <span
  m="3416750">to</span> <span m="3416810">be</span> <span
  m="3416980">free,</span> <span m="3417420">only</span> <span
  m="3417630">take</span> <span m="3417810">constant</span> <span
  m="3418190">time.</span></p><p><span m="3419540">So</span> <span
  m="3419680">either</span> <span m="3419980">I</span> <span
  m="3420020">do</span> <span m="3420210">this,</span> <span
  m="3420720">in</span> <span m="3420850">which</span> <span
  m="3421030">case</span> <span m="3421260">this</span> <span
  m="3421400">takes</span> <span m="3421620">constant</span> <span
  m="3421940">time,</span> <span m="3422510">or</span> <span
  m="3422660">I</span> <span m="3422700">don't</span> <span
  m="3422940">do</span> <span m="3423050">this,</span> <span
  m="3423870">in</span> <span m="3423960">which</span> <span
  m="3424120">case</span> <span m="3425000">I</span> <span
  m="3425090">make</span> <span m="3425290">one</span> <span
  m="3425460">recursive</span> <span m="3425830">call.</span> <span
  m="3426090">In</span> <span m="3426180">both</span> <span
  m="3426400">cases,</span> <span m="3426770">I</span> <span
  m="3426810">really</span> <span m="3427130">am</span> <span
  m="3427250">only</span> <span m="3427420">making</span> <span
  m="3427750">one</span> <span m="3428000">recursive</span> <span
  m="3428440">call.</span></p><p><span m="3430690">OK,</span> <span
  m="3431290">so</span> <span m="3434630">this</span> <span
  m="3434870">runs</span> <span m="3436880">in</span> <span
  m="3437010">log</span> <span m="3437310">log</span> <span
  m="3437530">u.</span> <span m="3439560">Because</span> <span
  m="3439730">I</span> <span m="3439790">get</span> <span m="3440030">the</span>
  <span m="3440150">t</span> <span m="3440370">of</span> <span
  m="3440450">u</span> <span m="3440700">equals</span> <span
  m="3441060">1</span> <span m="3441500">times</span> <span
  m="3441820">square</span> <span m="3442090">root</span> <span
  m="3442170">of</span> <span m="3442260">t</span> <span m="3442450">of</span>
  <span m="3442530">u</span> <span m="3442840">plus</span> <span
  m="3443150">order</span> <span m="3443370">1</span> <span
  m="3444020">recurrence.</span> <span m="3444490">All</span> <span
  m="3444730">the</span> <span m="3444800">work</span> <span
  m="3445100">I'm</span> <span m="3445200">doing</span> <span
  m="3445450">here</span> <span m="3446270">is</span> <span
  m="3446520">constant</span> <span m="3446920">time,</span> <span
  m="3448540">other</span> <span m="3448760">than</span> <span
  m="3448970">the</span> <span m="3449030">recursive</span> <span
  m="3449230">calls.</span> <span m="3452950">Question?</span></p><p><span
  m="3453400">AUDIENCE: So</span> <span m="3453896">when</span> <span
  m="3454392">we</span> <span m="3454888">insert</span> <span
  m="3455384">the</span> <span m="3455880">first</span> <span
  m="3456376">time,</span> <span m="3456872">we don't</span> <span
  m="3457368">update</span> <span m="3457864">v</span> <span
  m="3458360">dot</span> <span m="3458856">summary?</span></p><p><span
  m="3460350">PROFESSOR: When</span> <span m="3460500">I</span> <span
  m="3460590">insert</span> <span m="3460990">into</span> <span
  m="3461360">a</span> <span m="3461420">completely</span> <span
  m="3461840">empty</span> <span m="3462040">structure,</span> <span
  m="3462480">we</span> <span m="3462600">don't</span> <span
  m="3462800">update</span> <span m="3463150">summary</span> <span
  m="3463500">at</span> <span m="3463570">all.</span> <span
  m="3463800">That's</span> <span m="3464020">right.</span> <span
  m="3464430">We</span> <span m="3464560">just</span> <span m="3464830">store
  it</span> <span m="3465180">in</span> <span m="3465280">the</span> <span
  m="3465340">min,</span> <span m="3465570">and</span> <span
  m="3465670">we're</span> <span m="3465780">done.</span></p><p><span
  m="3466870">AUDIENCE: Oh.</span> <span m="3467760">So</span> <span
  m="3468205">then,</span> <span m="3469990">if</span> <span
  m="3470150">you</span> <span m="3470606">were</span> <span
  m="3471062">to</span> <span m="3471520">[? call ?]</span> <span
  m="3471690">the</span> <span m="3472093">successor,</span> <span
  m="3472496">and you--</span></p><p><span m="3472900">PROFESSOR: Good.</span>
  <span m="3474070">Yeah.</span> <span m="3474340">The</span> <span
  m="3474460">successor</span> <span m="3474960">algorithm</span> <span
  m="3475440">is</span> <span m="3475580">currently</span> <span
  m="3475980">incorrect.</span> <span m="3477000">Thank you.</span> <span
  m="3478146">Here's some</span> <span m="3478580">frisbees</span> <span
  m="3479990">for</span> <span m="3480050">that</span> <span
  m="3480290">question</span> <span m="3480880">and</span> <span
  m="3481150">the</span> <span m="3481230">last</span> <span
  m="3481610">answer.</span> <span m="3485420">Yeah.</span> <span
  m="3485730">This</span> <span m="3485970">code</span> <span
  m="3486260">is</span> <span m="3486380">now</span> <span
  m="3486770">slightly</span> <span m="3487420">wrong.</span></p><p><span
  m="3488110">Because</span> <span m="3489340">sometimes</span> <span
  m="3489860">I'm</span> <span m="3489950">storing</span> <span
  m="3490300">elements</span> <span m="3490790">in</span> <span m="3491010">v
  dot</span> <span m="3491420">min.</span> <span m="3492480">And</span> <span
  m="3492880">successor</span> <span m="3493140">is</span> <span
  m="3493400">just</span> <span m="3493560">completely</span> <span
  m="3494000">ignoring</span> <span m="3494490">them.</span> <span
  m="3495240">So</span> <span m="3495550">it's</span> <span
  m="3495740">not</span> <span m="3495890">going</span> <span
  m="3495990">to</span> <span m="3496040">find</span> <span
  m="3496400">those</span> <span m="3496580">items.</span> <span
  m="3498040">Luckily,</span> <span m="3498620">it's</span> <span
  m="3498810">a</span> <span m="3498850">very</span> <span
  m="3499090">simple</span> <span m="3499400">fix.</span></p><p><span
  m="3506360">Out</span> <span m="3506510">of</span> <span
  m="3506580">room,</span> <span m="3506840">but</span> <span
  m="3507250">please</span> <span m="3507580">insert</span> <span
  m="3508080">right</span> <span m="3508330">in</span> <span
  m="3508450">here.</span> <span m="3510180">If</span> <span
  m="3511910">x</span> <span m="3512510">is</span> <span m="3513110">less</span>
  <span m="3513900">v</span> <span m="3514130">dot</span> <span
  m="3514415">min,</span> <span m="3517990">return</span> <span
  m="3518510">v</span> <span m="3518620">dot</span> <span
  m="3518860">min.</span> <span m="3521150">That's</span> <span
  m="3521370">all</span> <span m="3521550">we</span> <span
  m="3521670">need</span> <span m="3521840">to</span> <span
  m="3521950">do.</span></p><p><span m="3523440">The</span> <span
  m="3523710">min</span> <span m="3523970">is</span> <span
  m="3524080">special.</span> <span m="3524590">Because</span> <span
  m="3525300">we're</span> <span m="3525430">not</span> <span
  m="3525640">storing</span> <span m="3525940">it</span> <span
  m="3526000">recursively.</span> <span m="3526730">And</span> <span
  m="3526850">so,</span> <span m="3526980">we</span> <span
  m="3527080">can't</span> <span m="3527390">rely</span> <span
  m="3527850">on</span> <span m="3527980">all</span> <span m="3528170">of</span>
  <span m="3528260">our</span> <span m="3528370">recursive</span> <span
  m="3528810">structures.</span> <span m="3529240">We</span> <span
  m="3529330">can't</span> <span m="3529590">rely</span> <span
  m="3529970">on</span> <span m="3530070">cluster</span> <span
  m="3530400">i.</span> <span m="3530630">We</span> <span
  m="3531050">can't</span> <span m="3531260">rely</span> <span
  m="3531480">on</span> <span m="3531570">summary,</span> <span
  m="3532580">on</span> <span m="3532810">reporting</span> <span
  m="3533450">about</span> <span m="3533960">v</span> <span
  m="3534100">dot</span> <span m="3534240">min.</span></p><p><span
  m="3534510">v</span> <span m="3534830">dot min</span> <span m="3534950">is
  just</span> <span m="3535140">a</span> <span m="3535180">special</span> <span
  m="3535740">item</span> <span m="3537100">sitting</span> <span
  m="3537420">there.</span> <span m="3537720">It's</span> <span
  m="3537990">represented</span> <span m="3538480">nowhere</span> <span
  m="3538750">else.</span> <span m="3541560">But</span> <span
  m="3541760">we</span> <span m="3541870">can</span> <span
  m="3542020">check.</span> <span m="3542350">Because</span> <span
  m="3542710">it's the</span> <span m="3542810">minimum</span> <span
  m="3543160">element,</span> <span m="3543480">and</span> <span
  m="3543540">we're</span> <span m="3543620">looking</span> <span
  m="3543850">for</span> <span m="3544000">successors,</span> <span
  m="3545000">it's</span> <span m="3545180">really</span> <span
  m="3545470">easy</span> <span m="3545720">to</span> <span
  m="3545830">check</span> <span m="3546160">for</span> <span
  m="3546540">whether</span> <span m="3546810">it's</span> <span
  m="3546940">the</span> <span m="3547060">item</span> <span
  m="3547250">we're</span> <span m="3547340">looking</span> <span
  m="3547640">for.</span> <span m="3549080">Because</span> <span
  m="3549300">it's</span> <span m="3549430">the</span> <span
  m="3549490">smallest</span> <span m="3550030">one.</span></p><p><span
  m="3550320">If</span> <span m="3550510">we're</span> <span
  m="3550640">smaller</span> <span m="3551020">than</span> <span
  m="3551170">it,</span> <span m="3551480">then that's</span> <span
  m="3551790">clearly</span> <span m="3552070">the</span> <span
  m="3552190">successor.</span> <span m="3553372">OK,</span> <span
  m="3553710">so</span> <span m="3553970">in</span> <span
  m="3554030">that</span> <span m="3554180">case,</span> <span
  m="3554470">we</span> <span m="3554620">just</span> <span
  m="3554750">spent</span> <span m="3554960">constant</span> <span
  m="3555260">time.</span> <span m="3555970">So</span> <span
  m="3556110">it</span> <span m="3556180">actually</span> <span
  m="3556650">speeds</span> <span m="3557030">up</span> <span
  m="3557220">some</span> <span m="3557420">situations</span> <span
  m="3557930">for</span> <span m="3558060">successor.</span> <span
  m="3558520">We're</span> <span m="3558610">not</span> <span
  m="3558830">exploiting</span> <span m="3559280">that</span> <span
  m="3559430">here.</span></p><p><span m="3560220">It doesn't</span> <span
  m="3560430">help</span> <span m="3560650">much</span> <span
  m="3560840">in</span> <span m="3560910">the</span> <span
  m="3560990">worst</span> <span m="3561220">case.</span> <span
  m="3561450">But</span> <span m="3561580">now,</span> <span
  m="3561990">it</span> <span m="3562120">should</span> <span
  m="3562240">be</span> <span m="3562360">correct.</span> <span
  m="3562870">Hopefully,</span> <span m="3563490">you're</span> <span
  m="3563600">happy.</span> <span m="3565460">Any</span> <span
  m="3565660">other</span> <span m="3565830">questions?</span></p><p><span
  m="3569670">So</span> <span m="3570040">at</span> <span
  m="3570130">this</span> <span m="3570280">point,</span> <span
  m="3570500">we</span> <span m="3570650">have</span> <span
  m="3571200">what</span> <span m="3571390">I</span> <span
  m="3571460">will</span> <span m="3571560">call</span> <span
  m="3571870">a</span> <span m="3572020">van Emde</span> <span
  m="3572130">Boas.</span> <span m="3573470">This</span> <span
  m="3573780">last</span> <span m="3574130">version--</span> <span
  m="3574900">we</span> <span m="3575040">can</span> <span m="3575140">do</span>
  <span m="3575230">insert</span> <span m="3575840">and</span> <span
  m="3576090">successor</span> <span m="3577160">in</span> <span
  m="3577290">log</span> <span m="3577560">log</span> <span m="3577740">u</span>
  <span m="3577870">time.</span> <span m="3581100">Yeah,</span> <span
  m="3581940">sorry.</span> <span m="3582510">I</span> <span
  m="3582600">modified</span> <span m="3583010">the</span> <span
  m="3583090">wrong</span> <span m="3583300">successor</span> <span
  m="3583750">algorithm,</span> <span m="3584120">didn't</span> <span
  m="3584510">I?</span></p><p><span m="3585430">I</span> <span
  m="3585550">meant</span> <span m="3585810">to</span> <span
  m="3585900">modify</span> <span m="3586250">this</span> <span
  m="3586500">one.</span> <span m="3586910">This</span> <span
  m="3587120">is</span> <span m="3587230">the</span> <span
  m="3587330">fast</span> <span m="3587650">one.</span> <span
  m="3587830">So</span> <span m="3588690">please</span> <span
  m="3588990">put</span> <span m="3590220">that</span> <span
  m="3590470">code</span> <span m="3590880">here.</span> <span
  m="3593300">That's</span> <span m="3593680">the</span> <span
  m="3593800">log</span> <span m="3594080">log</span> <span m="3594320">u</span>
  <span m="3594500">version</span> <span m="3594850">of</span> <span
  m="3594920">successor.</span> <span m="3595940">We</span> <span
  m="3596090">just</span> <span m="3596300">added</span> <span
  m="3596710">this</span> <span m="3596980">constant</span> <span
  m="3597370">time</span> <span m="3597590">check.</span> <span
  m="3598790">And</span> <span m="3599270">now</span> <span
  m="3599580">this</span> <span m="3599870">runs</span> <span
  m="3600140">in</span> <span m="3600230">log</span> <span
  m="3600470">log</span> <span m="3600660">u</span> <span
  m="3600770">time.</span></p><p><span m="3601050">The</span> <span
  m="3601130">key</span> <span m="3601350">idea</span> <span
  m="3601640">here</span> <span m="3601900">was</span> <span
  m="3602150">if</span> <span m="3602330">we</span> <span
  m="3602420">store</span> <span m="3602660">the</span> <span
  m="3602750">max,</span> <span m="3603770">then</span> <span
  m="3603900">we</span> <span m="3604020">know</span> <span
  m="3604350">which</span> <span m="3604580">of</span> <span
  m="3604640">the</span> <span m="3604730">two</span> <span
  m="3604890">recursive</span> <span m="3605300">calls</span> <span
  m="3605590">we</span> <span m="3605680">need</span> <span
  m="3605860">to</span> <span m="3605950">do.</span> <span m="3606780">If</span>
  <span m="3606940">we</span> <span m="3607010">store</span> <span
  m="3607190">the</span> <span m="3607370">min,</span> <span
  m="3607680">this</span> <span m="3607920">doesn't</span> <span
  m="3608210">end</span> <span m="3608380">up</span> <span
  m="3608500">being</span> <span m="3608700">a</span> <span
  m="3608750">recursive</span> <span m="3609180">call.</span> <span
  m="3610030">So</span> <span m="3610050">that's</span> <span
  m="3610280">very</span> <span m="3610430">clean.</span></p><p><span
  m="3611170">With</span> <span m="3611330">insert,</span> <span
  m="3611800">we</span> <span m="3611930">needed</span> <span
  m="3612190">this</span> <span m="3612350">trickier</span> <span
  m="3612730">idea</span> <span m="3613050">that</span> <span
  m="3613250">the</span> <span m="3613340">min,</span> <span
  m="3613710">we're</span> <span m="3613810">not</span> <span
  m="3613990">even</span> <span m="3614190">going</span> <span
  m="3614390">to</span> <span m="3614490">recursively</span> <span
  m="3615040">represent.</span> <span m="3615560">We'll</span> <span
  m="3615680">just</span> <span m="3615970">keep</span> <span
  m="3616160">it</span> <span m="3616280">there.</span> <span
  m="3617390">That</span> <span m="3617570">requires</span> <span
  m="3618120">this</span> <span m="3618300">extra</span> <span
  m="3618600">little</span> <span m="3618820">check</span> <span
  m="3619090">for</span> <span m="3619210">successor.</span> <span
  m="3620340">But</span> <span m="3620530">it</span> <span
  m="3620630">allows</span> <span m="3621010">us</span> <span
  m="3621120">to</span> <span m="3621230">do</span> <span
  m="3621410">insert</span> <span m="3622150">cheaply</span> <span
  m="3622580">in</span> <span m="3622720">all</span> <span
  m="3622970">cases--</span> <span m="3624890">cheap</span> <span
  m="3625280">meaning</span> <span m="3625720">only</span> <span
  m="3625960">one</span> <span m="3626180">recursive</span> <span
  m="3626650">call.</span></p><p><span m="3627530">Either</span> <span
  m="3628000">we</span> <span m="3628130">need</span> <span
  m="3628310">to</span> <span m="3628400">update</span> <span
  m="3628730">the</span> <span m="3628810">summary</span> <span
  m="3629160">structure,</span> <span m="3629530">in</span> <span
  m="3629590">which</span> <span m="3629760">case</span> <span
  m="3629980">that</span> <span m="3630160">thing</span> <span
  m="3630300">was</span> <span m="3630480">empty,</span> <span
  m="3631310">and</span> <span m="3631480">so</span> <span m="3632470">we</span>
  <span m="3632650">can</span> <span m="3632790">think</span> <span
  m="3632970">of</span> <span m="3633050">that</span> <span
  m="3633220">cluster--</span> <span m="3634720">so</span> <span
  m="3635340">we</span> <span m="3635520">have</span> <span
  m="3635630">this</span> <span m="3635710">special</span> <span
  m="3636030">case</span> <span m="3636260">of</span> <span
  m="3636360">inserting</span> <span m="3636740">into</span> <span
  m="3636910">an</span> <span m="3636980">empty</span> <span
  m="3637200">cluster,</span> <span m="3637920">which</span> <span
  m="3638140">is</span> <span m="3638240">super</span> <span
  m="3638520">cheap,</span> <span m="3639520">or</span> <span
  m="3640170">most</span> <span m="3640490">of the</span> <span
  m="3640590">time,</span> <span m="3640850">you</span> <span
  m="3640920">imagine</span> <span m="3641460">that</span> <span
  m="3642050">the</span> <span m="3642150">cluster</span> <span
  m="3642450">was</span> <span m="3642570">already</span> <span
  m="3642920">non-empty.</span> <span m="3643400">And</span> <span
  m="3643490">so</span> <span m="3643610">we</span> <span
  m="3643690">don't</span> <span m="3643880">need</span> <span
  m="3644160">to</span> <span m="3644240">update</span> <span
  m="3644570">the</span> <span m="3644660">summary</span> <span
  m="3644990">structure.</span> <span m="3645370">And</span> <span
  m="3645520">then</span> <span m="3645630">we</span> <span
  m="3645720">just</span> <span m="3645920">do</span> <span
  m="3646000">this</span> <span m="3646200">recursion.</span></p><p><span
  m="3648110">So</span> <span m="3648230">in</span> <span m="3648300">all</span>
  <span m="3648460">cases,</span> <span m="3649010">everything</span> <span
  m="3649920">is</span> <span m="3650000">cheap.</span> <span
  m="3651210">Now</span> <span m="3651400">the</span> <span
  m="3651530">one</span> <span m="3651780">thing</span> <span
  m="3651990">I've</span> <span m="3652100">been</span> <span
  m="3652240">avoiding</span> <span m="3653020">is</span> <span
  m="3653970">delete.</span> <span m="3654940">Yeah,</span> <span
  m="3655120">question.</span></p><p><span m="3655991">AUDIENCE:
  [INAUDIBLE]</span> <span m="3656462">If</span> <span m="3656933">x is</span>
  <span m="3657404">greater than</span> <span m="3657875">[? v ?]</span> <span
  m="3658346">max,</span> <span m="3658817">[? we ?]</span> <span m="3659288">[?
  swap ?]</span> <span m="3659759">[? x ?]</span> <span m="3660230">[? with
  ?]</span> <span m="3660701">[? v ?]</span> <span m="3661172">[? max?
  ?]</span></p><p><span m="3663060">PROFESSOR: So</span> <span
  m="3665220">if</span> <span m="3665420">x</span> <span m="3665660">is</span>
  <span m="3665820">greater</span> <span m="3666030">than</span> <span
  m="3666180">v</span> <span m="3666300">max,</span> <span
  m="3666580">I'm</span> <span m="3666670">just</span> <span
  m="3666880">going</span> <span m="3666980">to</span> <span
  m="3667290">update</span> <span m="3667750">v</span> <span
  m="3667880">max.</span> <span m="3668730">V</span> <span
  m="3669015">max</span> <span m="3669300">is</span> <span
  m="3669490">stored</span> <span m="3669790">recursively.</span> <span
  m="3670240">We're</span> <span m="3670330">not</span> <span
  m="3670480">doing</span> <span m="3670640">anything</span> <span
  m="3671000">fancy</span> <span m="3671860">with</span> <span
  m="3672000">v</span> <span m="3672260">max.</span> <span
  m="3672520">And</span> <span m="3672790">we</span> <span
  m="3672890">had,</span> <span m="3673470">at</span> <span
  m="3673580">some</span> <span m="3673740">point,</span> <span
  m="3674020">a</span> <span m="3674080">similar</span> <span
  m="3674470">line.</span></p><p><span m="3675650">So</span> <span
  m="3675700">this</span> <span m="3675880">is</span> <span
  m="3675980">just</span> <span m="3676210">updating</span> <span
  m="3676740">v</span> <span m="3676880">max.</span> <span
  m="3678616">Yeah,</span> <span m="3679010">nothing</span> <span
  m="3679300">special</span> <span m="3679680">there.</span> <span
  m="3680280">In</span> <span m="3680370">your</span> <span
  m="3680510">problem</span> <span m="3680820">set,</span> <span
  m="3681100">you'll</span> <span m="3681230">look</span> <span
  m="3681440">at</span> <span m="3681510">a</span> <span m="3681550">more</span>
  <span m="3681790">symmetric</span> <span m="3682270">version,</span> <span
  m="3683100">where</span> <span m="3683370">you</span> <span
  m="3683500">don't</span> <span m="3683730">recursively</span> <span
  m="3684190">store</span> <span m="3684410">min</span> <span
  m="3684660">and</span> <span m="3684920">max.</span> <span
  m="3685620">It</span> <span m="3685760">works</span> <span
  m="3686080">about</span> <span m="3686330">the</span> <span
  m="3686400">same.</span></p><p><span m="3686700">But</span> <span
  m="3687380">in</span> <span m="3687740">some</span> <span
  m="3687960">ways,</span> <span m="3688120">the</span> <span
  m="3688210">code</span> <span m="3688430">is</span> <span
  m="3688530">actually</span> <span m="3688960">prettier.</span> <span
  m="3690430">So</span> <span m="3690620">you'll</span> <span
  m="3690790">get</span> <span m="3690930">to do</span> <span
  m="3691110">that.</span> <span m="3691980">Other</span> <span
  m="3692140">questions?</span></p><p><span m="3695410">All</span> <span
  m="3695500">right.</span> <span m="3697900">So,</span> <span
  m="3699710">delete.</span> <span m="3700880">We have</span> <span
  m="3701060">insert and</span> <span m="3701550">successor.</span> <span
  m="3702610">And</span> <span m="3702870">through</span> <span
  m="3703060">all</span> <span m="3703220">these</span> <span
  m="3703370">steps,</span> <span m="3703680">it</span> <span
  m="3703750">would</span> <span m="3703860">actually</span> <span
  m="3704090">be</span> <span m="3704180">very</span> <span
  m="3704530">hard</span> <span m="3704760">to</span> <span
  m="3704860">do</span> <span m="3704980">delete.</span> <span
  m="3706280">It</span> <span m="3706370">turns</span> <span
  m="3706610">out,</span> <span m="3706770">at</span> <span
  m="3706850">this</span> <span m="3707000">point,</span> <span
  m="3708030">delete</span> <span m="3708340">is</span> <span
  m="3708550">no</span> <span m="3708670">problem.</span></p><p><span
  m="3710810">So</span> <span m="3712120">let</span> <span m="3712290">me</span>
  <span m="3712430">give</span> <span m="3712620">you</span> <span
  m="3712790">some</span> <span m="3713300">delete</span> <span
  m="3713680">codes.</span> <span m="3741650">It's</span> <span
  m="3741860">a</span> <span m="3741930">little</span> <span
  m="3742200">bit</span> <span m="3742380">long.</span> <span
  m="3746190">Maybe</span> <span m="3746450">I'll</span> <span
  m="3746640">start</span> <span m="3746910">with</span> <span
  m="3747040">a</span> <span m="3747080">high</span> <span
  m="3747230">level</span> <span m="3747470">picture,</span> <span
  m="3749401">sort</span> <span m="3749880">of the</span> <span
  m="3749930">main</span> <span m="3750210">cases.</span></p><p><span
  m="3756260">Deleting</span> <span m="3756640">the</span> <span
  m="3756720">min</span> <span m="3757070">is</span> <span m="3757200">a</span>
  <span m="3757250">little</span> <span m="3757470">bit</span> <span
  m="3757670">special,</span> <span m="3758150">as</span> <span
  m="3758220">you</span> <span m="3758330">might</span> <span
  m="3758500">imagine.</span> <span m="3758930">That</span> <span
  m="3759200">element</span> <span m="3759520">is</span> <span
  m="3759660">different</span> <span m="3759980">from</span> <span
  m="3760130">every</span> <span m="3760370">other</span> <span
  m="3760580">element.</span> <span m="3761090">So</span> <span
  m="3761820">if</span> <span m="3762030">x</span> <span
  m="3762230">equals</span> <span m="3762490">min,</span> <span
  m="3763070">we're</span> <span m="3763190">going</span> <span
  m="3763330">to</span> <span m="3763650">do</span> <span
  m="3763790">something</span> <span m="3764250">else.</span> <span
  m="3764660">But</span> <span m="3764890">let</span> <span
  m="3765120">me</span> <span m="3765710">specify</span> <span
  m="3766130">that</span> <span m="3766300">later.</span></p><p><span
  m="3766620">Let's</span> <span m="3766830">get</span> <span
  m="3766990">to</span> <span m="3767070">the</span> <span
  m="3767200">bulk</span> <span m="3767460">of</span> <span
  m="3767520">the</span> <span m="3767610">code,</span> <span
  m="3769250">which</span> <span m="3769500">is</span> <span
  m="3770800">we're</span> <span m="3770940">going</span> <span
  m="3771160">to</span> <span m="3771330">delete</span> <span m="3787320">low
  of</span> <span m="3787660">x</span> <span m="3788040">from</span> <span
  m="3788450">cluster</span> <span m="3789170">high of</span> <span
  m="3789550">x.</span> <span m="3790220">That's</span> <span
  m="3790450">the</span> <span m="3790600">obvious</span> <span
  m="3790970">recursion</span> <span m="3791410">to</span> <span
  m="3791520">do.</span> <span m="3792600">This is</span> <span
  m="3792760">essentially</span> <span m="3793370">the</span> <span
  m="3793540">reverse</span> <span m="3794180">of</span> <span
  m="3795380">insert</span> <span m="3796220">over</span> <span
  m="3796390">here.</span> <span m="3797490">The</span> <span
  m="3797630">first</span> <span m="3797870">thing</span> <span
  m="3797990">we</span> <span m="3798080">do</span> <span m="3798250">is</span>
  <span m="3798360">undo</span> <span m="3798620">this.</span></p><p><span
  m="3799450">In</span> <span m="3799510">all</span> <span
  m="3799640">cases,</span> <span m="3800020">insert</span> <span
  m="3800120">was</span> <span m="3800410">doing</span> <span
  m="3800620">that.</span> <span m="3801030">So</span> <span
  m="3801160">in</span> <span m="3801240">all</span> <span
  m="3801350">cases,</span> <span m="3801730">delete</span> <span
  m="3802010">has</span> <span m="3802230">to</span> <span m="3802310">do</span>
  <span m="3802420">that,</span> <span m="3803620">other</span> <span
  m="3803830">than</span> <span m="3804010">the</span> <span
  m="3804110">special</span> <span m="3804630">case</span> <span
  m="3804910">of</span> <span m="3805020">the</span> <span
  m="3805090">min.</span> <span m="3806730">And</span> <span
  m="3806880">then,</span> <span m="3807510">we</span> <span
  m="3807700">need</span> <span m="3807850">to</span> <span
  m="3807940">do</span> <span m="3808270">the</span> <span
  m="3808390">inverse</span> <span m="3808680">of</span> <span
  m="3808760">this.</span> <span m="3809090">So</span> <span
  m="3809260">if</span> <span m="3809350">that</span> <span
  m="3809530">was</span> <span m="3809730">the</span> <span
  m="3809920">last</span> <span m="3810490">item,</span> <span
  m="3812810">then</span> <span m="3813400">we</span> <span
  m="3813580">need</span> <span m="3813740">to</span> <span
  m="3813830">delete</span> <span m="3814080">from</span> <span
  m="3814190">the</span> <span m="3814270">summary</span> <span
  m="3814600">structure.</span></p><p><span m="3816100">So</span> <span
  m="3817392">it's</span> <span m="3817820">actually</span> <span
  m="3818100">pretty</span> <span m="3818570">symmetric,</span> <span
  m="3820250">other</span> <span m="3820490">than</span> <span
  m="3820730">the</span> <span m="3820840">tiny</span> <span
  m="3821050">details.</span> <span m="3823260">So</span> <span
  m="3823980">after</span> <span m="3824310">we</span> <span
  m="3824460">delete,</span> <span m="3825420">we</span> <span m="3825530">can
  check,</span> <span m="3826040">is</span> <span m="3826250">that</span> <span
  m="3826500">structure</span> <span m="3826980">empty.</span> <span
  m="3828300">Because</span> <span m="3829210">then,</span> <span
  m="3829570">the</span> <span m="3829860">min</span> <span
  m="3830150">would</span> <span m="3830350">equal</span> <span
  m="3830710">none.</span> <span m="3833110">OK.</span> <span
  m="3835050">If</span> <span m="3835320">that's</span> <span
  m="3835540">the</span> <span m="3835620">case,</span> <span
  m="3835990">we</span> <span m="3836210">delete</span> <span
  m="3837340">from</span> <span m="3837620">the summary</span> <span
  m="3837940">structure.</span></p><p><span m="3853960">OK.</span> <span
  m="3858350">Cool.</span> <span m="3860120">And</span> <span
  m="3860540">there</span> <span m="3860810">is</span> <span
  m="3860920">a</span> <span m="3860980">bit</span> <span m="3861250">of</span>
  <span m="3861370">a</span> <span m="3861500">special</span> <span
  m="3861890">case</span> <span m="3862870">at</span> <span
  m="3863000">the</span> <span m="3863130">end,</span> <span
  m="3863620">which</span> <span m="3863960">is</span> <span
  m="3864130">when</span> <span m="3864770">we</span> <span
  m="3864940">deleted</span> <span m="3865860">the</span> <span
  m="3866090">maximum</span> <span m="3866710">element.</span> <span
  m="3871130">OK,</span> <span m="3871360">so</span> <span m="3871580">I</span>
  <span m="3871670">need</span> <span m="3871850">to</span> <span
  m="3871920">fill</span> <span m="3872120">these</span> <span
  m="3872330">in.</span></p><p><span m="3876570">And</span> <span
  m="3877920">it's</span> <span m="3878240">important</span> <span
  m="3878700">that</span> <span m="3878830">these</span> <span
  m="3879040">are</span> <span m="3879130">filled</span> <span
  m="3879420">in</span> <span m="3879560">right.</span> <span
  m="3879980">Because</span> <span m="3880380">in</span> <span
  m="3880460">some</span> <span m="3880680">situations</span> <span
  m="3881230">here,</span> <span m="3881370">we</span> <span
  m="3881800">are</span> <span m="3881930">making</span> <span
  m="3882250">two</span> <span m="3882450">recursive</span> <span
  m="3882890">calls.</span> <span m="3884170">But</span> <span
  m="3884300">again,</span> <span m="3885000">we'd</span> <span
  m="3885260">like</span> <span m="3885480">it</span> <span
  m="3885640">to</span> <span m="3885770">be,</span> <span
  m="3886900">when</span> <span m="3887060">we</span> <span
  m="3887180">do</span> <span m="3887340">both</span> <span
  m="3887650">calls,</span> <span m="3888000">we</span> <span
  m="3888100">want</span> <span m="3888380">one</span> <span
  m="3888530">of</span> <span m="3888610">them</span> <span
  m="3888740">to</span> <span m="3888860">be</span> <span
  m="3889020">cheap.</span> <span m="3890330">Now</span> <span
  m="3890430">this</span> <span m="3890600">one's</span> <span
  m="3890790">hard</span> <span m="3890970">to</span> <span
  m="3891040">make</span> <span m="3891240">cheap.</span></p><p><span
  m="3891610">So</span> <span m="3892180">when</span> <span
  m="3892410">we</span> <span m="3892560">delete</span> <span
  m="3892880">from</span> <span m="3893000">the</span> <span
  m="3893080">summary</span> <span m="3893390">structure,</span> <span
  m="3894150">we</span> <span m="3894260">want</span> <span
  m="3894540">this</span> <span m="3894750">to</span> <span
  m="3894860">delete</span> <span m="3895760">to</span> <span
  m="3895920">have</span> <span m="3896010">taken</span> <span
  m="3896300">only</span> <span m="3896530">constant</span> <span
  m="3896910">time,</span> <span m="3897150">no</span> <span
  m="3897280">recursions.</span> <span m="3899220">And</span> <span
  m="3899420">that's</span> <span m="3900340">going</span> <span
  m="3900430">to</span> <span m="3900490">correspond</span> <span
  m="3900910">to</span> <span m="3900990">this</span> <span
  m="3901190">case.</span> <span m="3901550">Because</span> <span
  m="3901970">if</span> <span m="3903040">we</span> <span
  m="3903180">made</span> <span m="3903470">the</span> <span
  m="3903550">cluster</span> <span m="3903910">empty,</span> <span
  m="3904700">that</span> <span m="3904860">means</span> <span
  m="3905060">we</span> <span m="3905230">deleted</span> <span
  m="3905600">the</span> <span m="3905680">last</span> <span
  m="3906040">item.</span> <span m="3906720">What's</span> <span
  m="3906920">the</span> <span m="3907000">last</span> <span
  m="3907270">item?</span></p><p><span m="3907700">Has</span> <span
  m="3908010">to</span> <span m="3908110">be</span> <span m="3908240">v
  dot</span> <span m="3908620">min.</span> <span m="3910630">If</span> <span
  m="3910810">you</span> <span m="3910890">have</span> <span
  m="3911050">a</span> <span m="3911240">size</span> <span m="3911540">1</span>
  <span m="3911720">structure,</span> <span m="3912130">it's</span> <span
  m="3912280">always</span> <span m="3912710">because</span> <span
  m="3913190">that</span> <span m="3913370">item</span> <span
  m="3913610">is</span> <span m="3913730">in</span> <span m="3914050">v
  dot</span> <span m="3914180">min,</span> <span m="3914310">everything</span>
  <span m="3914740">else is</span> <span m="3915020">empty.</span> <span
  m="3916160">So</span> <span m="3916220">that's</span> <span
  m="3916470">the</span> <span m="3916560">case</span> <span
  m="3916820">of</span> <span m="3916940">deleting</span> <span m="3917320">v
  dot</span> <span m="3917460">min.</span> <span m="3918260">So</span> <span
  m="3918660">we</span> <span m="3918770">want</span> <span
  m="3919070">this</span> <span m="3919420">case</span> <span
  m="3920460">to</span> <span m="3920620">take</span> <span
  m="3920930">constant</span> <span m="3921310">time</span> <span
  m="3922300">when</span> <span m="3922500">it's</span> <span
  m="3922660">the</span> <span m="3922770">last</span> <span
  m="3923870">item</span> <span m="3924200">we're</span> <span
  m="3924280">deleting.</span></p><p><span m="3926010">So</span> <span
  m="3928100">let's</span> <span m="3929640">fill</span> <span m="3929900">that
  in</span> <span m="3930120">a</span> <span m="3930170">little.</span> <span
  m="3938220">Let's see</span> <span m="3938520">if I</span> <span
  m="3938590">can</span> <span m="3938780">fit</span> <span m="3938940">it
  in.</span> <span m="3989090">This</span> <span m="3989280">is</span> <span
  m="3989400">code</span> <span m="3989690">that</span> <span
  m="3989790">turns</span> <span m="3990120">out</span> <span
  m="3990270">to</span> <span m="3990380">work</span> <span
  m="3990850">in</span> <span m="3991000">this</span> <span
  m="3992510">if</span> <span m="3992710">x</span> <span
  m="3992910">equals</span> <span m="3993170">v</span> <span
  m="3993280">dot</span> <span m="3993460">min.</span></p><p><span
  m="3993650">It's</span> <span m="3993820">a</span> <span
  m="3993900">little</span> <span m="3994170">bit</span> <span
  m="3994340">subtle.</span> <span m="3996200">But</span> <span
  m="3997420">the</span> <span m="3997670">key</span> <span
  m="3997940">thing</span> <span m="3998160">to</span> <span
  m="3998290">check</span> <span m="3998600">here</span> <span
  m="3998910">is,</span> <span m="3999460">we</span> <span
  m="3999600">want</span> <span m="3999770">to</span> <span
  m="3999810">know,</span> <span m="3999940">is</span> <span
  m="4000130">this</span> <span m="4000300">the</span> <span
  m="4000400">last</span> <span m="4000770">item.</span> <span
  m="4001810">And</span> <span m="4002070">one</span> <span
  m="4002220">way</span> <span m="4002360">to</span> <span m="4002470">do</span>
  <span m="4002610">that</span> <span m="4002890">is</span> <span
  m="4003030">to</span> <span m="4003180">look</span> <span
  m="4003930">at</span> <span m="4004070">the</span> <span
  m="4004150">summary</span> <span m="4004530">structure,</span> <span
  m="4004980">and</span> <span m="4005090">say,</span> <span
  m="4005860">do</span> <span m="4005960">you</span> <span
  m="4006120">have</span> <span m="4006460">any</span> <span
  m="4006780">non-empty</span> <span m="4007250">clusters?</span></p><p><span
  m="4008490">If</span> <span m="4008610">you</span> <span
  m="4008730">don't</span> <span m="4008860">have</span> <span
  m="4009010">any</span> <span m="4009150">non-empty</span> <span
  m="4009510">clusters,</span> <span m="4009850">that</span> <span
  m="4009990">means</span> <span m="4010170">your</span> <span
  m="4010330">min</span> <span m="4011100">is</span> <span
  m="4011270">none.</span> <span m="4012250">And</span> <span
  m="4012310">that</span> <span m="4012440">means,</span> <span
  m="4012610">the</span> <span m="4012790">only</span> <span
  m="4013220">thing</span> <span m="4013470">keeping</span> <span
  m="4013770">the</span> <span m="4013860">structure</span> <span
  m="4014590">non-empty</span> <span m="4015460">is</span> <span
  m="4015650">the</span> <span m="4015740">minimum</span> <span
  m="4016090">element.</span> <span m="4016650">That's</span> <span
  m="4016860">stored</span> <span m="4017090">in</span> <span m="4017170">v
  dot</span> <span m="4017290">min.</span> <span m="4018120">So</span> <span
  m="4018140">in</span> <span m="4018190">that</span> <span
  m="4018370">case,</span> <span m="4018700">that's</span> <span
  m="4018910">the</span> <span m="4019010">one</span> <span
  m="4019260">situation</span> <span m="4019860">when</span> <span
  m="4020150">v</span> <span m="4020240">dot</span> <span m="4020450">min</span>
  <span m="4020670">becomes</span> <span m="4021150">none.</span></p><p><span
  m="4023070">We</span> <span m="4024680">never</span> <span
  m="4024920">set</span> <span m="4025170">v</span> <span m="4025260">dot</span>
  <span m="4025420">min</span> <span m="4025950">equals</span> <span
  m="4026230">none</span> <span m="4026480">in</span> <span
  m="4026560">the</span> <span m="4026690">other</span> <span
  m="4026910">algorithms.</span> <span m="4027420">Because</span> <span
  m="4028870">initially</span> <span m="4029370">everything</span> <span
  m="4029710">is</span> <span m="4029820">none.</span> <span
  m="4030590">But</span> <span m="4030970">when</span> <span
  m="4031110">we're</span> <span m="4031240">inserting,</span> <span
  m="4031770">we</span> <span m="4031860">never</span> <span
  m="4032700">empty</span> <span m="4033030">a</span> <span
  m="4033080">structure.</span> <span m="4033510">Now</span> <span
  m="4033750">we're</span> <span m="4033840">doing</span> <span
  m="4034040">delete.</span> <span m="4034620">This</span> <span
  m="4034790">is</span> <span m="4034890">the</span> <span
  m="4035010">one</span> <span m="4035250">situation</span> <span
  m="4035900">when</span> <span m="4036060">v</span> <span
  m="4036190">dot</span> <span m="4036440">min</span> <span
  m="4036570">becomes</span> <span m="4037160">none</span> <span
  m="4037440">from</span> <span m="4037720">scratch.</span></p><p><span
  m="4039050">In</span> <span m="4039190">that</span> <span
  m="4039400">case,</span> <span m="4039760">no</span> <span
  m="4040110">recursive</span> <span m="4040630">calls.</span> <span
  m="4041780">So</span> <span m="4041920">that</span> <span
  m="4042090">means</span> <span m="4042330">this</span> <span
  m="4042620">algorithm</span> <span m="4043040">is</span> <span
  m="4043120">efficient.</span> <span m="4044270">Because</span> <span
  m="4044610">if</span> <span m="4044740">I</span> <span m="4044810">had</span>
  <span m="4044990">to</span> <span m="4045070">delete</span> <span
  m="4045270">from</span> <span m="4045390">the</span> <span
  m="4045470">summary</span> <span m="4045770">structure,</span> <span
  m="4046500">this</span> <span m="4046680">only</span> <span
  m="4046870">had</span> <span m="4047040">a</span> <span
  m="4047090">single</span> <span m="4047380">item,</span> <span
  m="4048150">which</span> <span m="4048310">is</span> <span
  m="4048460">this</span> <span m="4048580">situation.</span> <span
  m="4049610">Then</span> <span m="4049730">I</span> <span
  m="4049800">just</span> <span m="4049950">set</span> <span
  m="4050120">v</span> <span m="4050220">dot</span> <span m="4050390">min</span>
  <span m="4050540">equals</span> <span m="4051110">to</span> <span
  m="4051260">none.</span> <span m="4051630">And</span> <span
  m="4051770">I'm</span> <span m="4051860">done.</span> <span
  m="4052700">So</span> <span m="4052750">this</span> <span
  m="4052930">will,</span> <span m="4053190">overall,</span> <span
  m="4053570">run</span> <span m="4054200">in</span> <span
  m="4054410">log</span> <span m="4054730">log u</span> <span
  m="4054900">time.</span></p><p><span m="4060170">Now,</span> <span
  m="4060760">it</span> <span m="4060910">could</span> <span
  m="4061080">be</span> <span m="4061200">we're</span> <span
  m="4061320">deleting</span> <span m="4061710">the</span> <span
  m="4061870">min,</span> <span m="4062000">but</span> <span
  m="4062130">it</span> <span m="4062210">was</span> <span
  m="4062380">not</span> <span m="4062680">the</span> <span
  m="4062830">only</span> <span m="4063080">item.</span> <span
  m="4063820">So</span> <span m="4063970">that's</span> <span
  m="4064310">this</span> <span m="4064450">situation.</span> <span
  m="4066570">In</span> <span m="4066780">that</span> <span
  m="4067030">situation,</span> <span m="4068270">we</span> <span
  m="4068400">want</span> <span m="4068610">to</span> <span
  m="4068670">find</span> <span m="4069040">out</span> <span
  m="4069260">what</span> <span m="4069540">the</span> <span
  m="4069630">min</span> <span m="4069910">actually</span> <span
  m="4070380">is.</span> <span m="4070940">Right?</span></p><p><span
  m="4071080">We</span> <span m="4071180">just</span> <span
  m="4071320">deleted</span> <span m="4071690">the</span> <span
  m="4071770">min.</span> <span m="4072530">We</span> <span
  m="4072640">want</span> <span m="4072830">to</span> <span
  m="4072870">put</span> <span m="4073110">something</span> <span
  m="4073550">in</span> <span m="4073620">v</span> <span m="4073740">dot
  min.</span> <span m="4074070">We</span> <span m="4074170">can't</span> <span
  m="4074390">set</span> <span m="4074570">it</span> <span m="4074680">to</span>
  <span m="4074780">none.</span> <span m="4075040">Because</span> <span
  m="4075320">that</span> <span m="4075470">indicates</span> <span
  m="4075860">the</span> <span m="4075940">whole</span> <span
  m="4076080">structure</span> <span m="4076430">is</span> <span
  m="4076500">empty.</span> <span m="4076890">So</span> <span
  m="4076980">we</span> <span m="4077110">have</span> <span
  m="4077340">to</span> <span m="4077510">recursively</span> <span
  m="4078620">rip</span> <span m="4078910">out</span> <span
  m="4079230">the</span> <span m="4079320">new</span> <span
  m="4079580">minimum</span> <span m="4079950">out</span> <span
  m="4080140">item.</span> <span m="4081190">Because</span> <span
  m="4081380">it</span> <span m="4081490">should</span> <span
  m="4081710">not</span> <span m="4081990">be</span> <span
  m="4082120">recursively</span> <span m="4082630">stored</span> <span
  m="4082920">anymore.</span></p><p><span m="4083660">And</span> <span
  m="4083830">then</span> <span m="4083980">we're</span> <span
  m="4084090">going</span> <span m="4084190">to</span> <span
  m="4084250">stick</span> <span m="4084520">it</span> <span
  m="4084650">into</span> <span m="4085500">v</span> <span
  m="4085620">dot</span> <span m="4085820">min.</span> <span
  m="4086200">So</span> <span m="4088130">now,</span> <span
  m="4088280">finding</span> <span m="4088640">minimum</span> <span
  m="4088970">items</span> <span m="4089290">is</span> <span
  m="4089430">actually</span> <span m="4089730">pretty</span> <span
  m="4090020">easy.</span> <span m="4090380">We</span> <span
  m="4090400">just</span> <span m="4090570">looked</span> <span
  m="4090760">at</span> <span m="4090970">the</span> <span
  m="4091060">first</span> <span m="4091420">non-empty</span> <span
  m="4091800">structure.</span> <span m="4092990">And</span> <span
  m="4093150">we</span> <span m="4093250">looked</span> <span
  m="4093580">at</span> <span m="4094050">the--</span> <span
  m="4094510">I</span> <span m="4094780">think I'm</span> <span
  m="4095050">missing--</span> <span m="4096039">oh,</span> <span
  m="4096399">v</span> <span m="4096649">dot</span> <span m="4096990">cluster
  i</span> <span m="4097790">min,</span> <span m="4098970">I guess,</span> <span
  m="4099149">closed</span> <span m="4099490">parenthesis.</span></p><p><span
  m="4101710">That</span> <span m="4102040">is</span> <span
  m="4102260">the</span> <span m="4102390">minimum</span> <span
  m="4102819">item</span> <span m="4103660">in</span> <span
  m="4103830">the</span> <span m="4104140">first</span> <span
  m="4104550">cluster.</span> <span m="4106300">So</span> <span
  m="4106470">I</span> <span m="4106600">want</span> <span m="4106859">to</span>
  <span m="4106960">recursively</span> <span m="4107640">delete</span> <span
  m="4107979">it.</span> <span m="4109370">So</span> <span
  m="4109500">I'm</span> <span m="4109580">setting</span> <span
  m="4109920">x</span> <span m="4110170">to</span> <span m="4110270">that</span>
  <span m="4110550">thing.</span> <span m="4110770">And</span> <span
  m="4110859">then</span> <span m="4110990">I'm</span> <span
  m="4111060">going</span> <span m="4111160">to</span> <span
  m="4111240">do</span> <span m="4111390">all</span> <span
  m="4111569">this</span> <span m="4111760">code,</span> <span
  m="4112100">which</span> <span m="4112250">will</span> <span
  m="4112399">delete</span> <span m="4112760">x</span> <span
  m="4113090">from</span> <span m="4113270">that</span> <span
  m="4113470">structure.</span> <span m="4114970">And</span> <span
  m="4115300">then--</span> <span m="4117450">I</span> <span
  m="4117580">mean,</span> <span m="4117819">I'm</span> <span
  m="4117920">doing</span> <span m="4118109">it</span> <span
  m="4118220">all</span> <span m="4118370">right</span> <span
  m="4118540">here.</span></p><p><span m="4118770">But</span> <span
  m="4118899">then,</span> <span m="4119060">I'm</span> <span
  m="4119130">going</span> <span m="4119210">to</span> <span
  m="4119439">set</span> <span m="4119590">v</span> <span m="4119750">dot</span>
  <span m="4119960">min</span> <span m="4120040">to be</span> <span
  m="4120210">that</span> <span m="4120439">value.</span> <span
  m="4121689">So</span> <span m="4121840">then</span> <span m="4122140">v</span>
  <span m="4122270">dot</span> <span m="4122450">min</span> <span
  m="4122670">has</span> <span m="4122990">a</span> <span m="4123050">new</span>
  <span m="4123229">value.</span> <span m="4123899">Because</span> <span
  m="4124100">I</span> <span m="4124149">deleted</span> <span
  m="4124510">the</span> <span m="4124620">old</span> <span
  m="4124819">one.</span> <span m="4125840">And</span> <span
  m="4126750">it's</span> <span m="4126880">no</span> <span
  m="4127069">longer</span> <span m="4127380">recursively</span> <span
  m="4127910">stored.</span> <span m="4128250">I</span> <span
  m="4128300">don't</span> <span m="4128450">want</span> <span
  m="4128620">two</span> <span m="4128750">copies</span> <span
  m="4129180">of</span> <span m="4129310">x</span> <span
  m="4129575">floating</span> <span m="4129840">around.</span></p><p><span
  m="4131109">So</span> <span m="4131319">that's</span> <span
  m="4131540">why</span> <span m="4131720">I</span> <span m="4131800">do,</span>
  <span m="4132670">even</span> <span m="4132930">in</span> <span
  m="4133029">this</span> <span m="4133229">if</span> <span
  m="4133399">case,</span> <span m="4133700">I</span> <span
  m="4133760">do</span> <span m="4133950">all</span> <span
  m="4134120">these</span> <span m="4134260">steps.</span> <span
  m="4136939">Cool?</span> <span m="4138540">You</span> <span
  m="4138680">can</span> <span m="4138800">see</span> <span
  m="4139170">delete--</span> <span m="4139560">is that</span> <span
  m="4139939">a question?</span></p><p><span m="4140409">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="4143200">PROFESSOR: Oh,</span> <span
  m="4143340">why</span> <span m="4143540">did I</span> <span
  m="4143710">set</span> <span m="4143850">v dot</span> <span
  m="4144090">max</span> <span m="4144440">to none?</span></p><p><span
  m="4144790">AUDIENCE: Because</span> <span m="4145290">[? that's the ?]</span>
  <span m="4145790">all</span> <span m="4146290">[? these ?]</span> <span
  m="4146790">[INAUDIBLE]</span> <span m="4147290">[? x ?]</span> <span
  m="4147790">equals</span> <span m="4148290">v dot</span> <span
  m="4148790">max,</span> <span m="4149790">the</span> <span m="4150290">last
  time.</span></p><p><span m="4150790">AUDIENCE: [? Do you ?]</span> <span
  m="4151290">[? find v dot max? ?]</span></p><p><span m="4152200">PROFESSOR:
  Oh,</span> <span m="4152390">right.</span> <span m="4152830">I'm</span> <span
  m="4153050">not</span> <span m="4153240">done</span> <span
  m="4153450">yet.</span> <span m="4153729">I</span> <span
  m="4153779">haven't</span> <span m="4154040">specified</span> <span
  m="4154410">what</span> <span m="4154569">to</span> <span
  m="4154640">do</span> <span m="4154740">here.</span> <span
  m="4155988">OK,</span> <span m="4157399">you</span> <span
  m="4157580">really</span> <span m="4157760">want</span> <span
  m="4157920">to</span> <span m="4157960">know?</span> <span
  m="4159226">OK.</span> <span m="4161140">Let's</span> <span
  m="4161540">go</span> <span m="4161990">somewhere</span> <span
  m="4162319">else.</span> <span m="4164920">I have</span> <span
  m="4164939">enough</span> <span m="4165369">room,</span> <span
  m="4165799">I</span> <span m="4166229">think.</span></p><p><span
  m="4167990">Eh,</span> <span m="4168430">maybe I</span> <span m="4168800">can
  squeeze</span> <span m="4168899">it in.</span> <span m="4169909">It's
  going</span> <span m="4170350">to</span> <span m="4170420">be</span> <span
  m="4170630">super</span> <span m="4170920">compact.</span> <span
  m="4173050">So,</span> <span m="4174770">when</span> <span
  m="4174930">x</span> <span m="4175090">equals</span> <span m="4175319">v
  dot</span> <span m="4175569">max,</span> <span m="4175840">there</span> <span
  m="4175979">are</span> <span m="4176029">two</span> <span
  m="4176170">cases.</span> <span m="4183720">So</span> <span
  m="4183880">max</span> <span m="4184189">is</span> <span m="4184290">a</span>
  <span m="4184340">little</span> <span m="4184560">different.</span> <span
  m="4184880">We</span> <span m="4184990">just</span> <span
  m="4185250">need</span> <span m="4185420">to</span> <span
  m="4185490">keep</span> <span m="4185689">it</span> <span
  m="4185770">up</span> <span m="4185910">to</span> <span
  m="4186010">date.</span> <span m="4187700">So</span> <span
  m="4187990">it's</span> <span m="4188430">not</span> <span
  m="4188620">that</span> <span m="4188800">hard.</span> <span
  m="4189109">We</span> <span m="4189180">don't</span> <span
  m="4189310">have</span> <span m="4189399">to</span> <span
  m="4189479">do</span> <span m="4189600">any</span> <span
  m="4189729">recursive</span> <span m="4191149">magic.</span></p><p><span
  m="4209600">Well,</span> <span m="4210673">I</span> <span
  m="4211096">need</span> <span m="4211520">another</span> <span
  m="4211800">line.</span> <span m="4212240">Sorry.</span> <span
  m="4213510">Let</span> <span m="4213730">me</span> <span m="4213950">go</span>
  <span m="4214240">up to</span> <span m="4214380">the</span> <span
  m="4214470">other</span> <span m="4214560">board.</span> <span
  m="4254066">OK,</span> <span m="4254610">I</span> <span
  m="4254740">think</span> <span m="4254970">that's</span> <span
  m="4255210">the</span> <span m="4255260">complete</span> <span
  m="4255550">delete</span> <span m="4255840">code.</span> <span m="4256550">You
  asked</span> <span m="4256900">for</span> <span m="4257080">it.</span> <span
  m="4257290">You've</span> <span m="4257450">got</span> <span
  m="4257670">it.</span></p><p><span m="4259150">So,</span> <span
  m="4262360">at</span> <span m="4262490">this</span> <span
  m="4262630">point,</span> <span m="4262810">we</span> <span
  m="4262920">have</span> <span m="4263090">just</span> <span
  m="4263420">deleted</span> <span m="4263810">the</span> <span
  m="4263890">max,</span> <span m="4264190">which</span> <span
  m="4264380">means</span> <span m="4264600">we</span> <span
  m="4264710">need</span> <span m="4264870">to</span> <span
  m="4264930">find,</span> <span m="4266030">basically,</span> <span
  m="4266310">the</span> <span m="4266420">predecessor</span> <span
  m="4267100">of</span> <span m="4267170">x.</span> <span m="4267410">But</span>
  <span m="4267520">we</span> <span m="4267610">can't</span> <span
  m="4267800">afford</span> <span m="4268110">a</span> <span
  m="4268180">recursive</span> <span m="4268610">call.</span> <span
  m="4270160">I</span> <span m="4270260">mean,</span> <span
  m="4270450">that's</span> <span m="4270570">OK.</span> <span
  m="4270660">It's</span> <span m="4271100">just,</span> <span
  m="4271200">we're</span> <span m="4271320">trying</span> <span
  m="4271500">to</span> <span m="4271540">find</span> <span
  m="4271740">the</span> <span m="4271800">max</span> <span
  m="4272210">in</span> <span m="4272320">what</span> <span
  m="4272480">remains.</span></p><p><span m="4273990">Imagine</span> <span
  m="4274480">v dot</span> <span m="4274790">max</span> <span
  m="4274980">is</span> <span m="4275080">just</span> <span
  m="4275300">wrong.</span> <span m="4276030">So</span> <span
  m="4276210">we've</span> <span m="4276300">got</span> <span
  m="4276410">to</span> <span m="4276460">set</span> <span m="4276660">it</span>
  <span m="4276760">from</span> <span m="4276860">scratch.</span> <span
  m="4277840">It's</span> <span m="4277950">not</span> <span
  m="4278100">that</span> <span m="4278230">hard</span> <span
  m="4278420">to</span> <span m="4278500">do.</span> <span
  m="4279410">Basically,</span> <span m="4279950">we</span> <span
  m="4280090">want</span> <span m="4280300">to</span> <span
  m="4280370">take</span> <span m="4280690">the</span> <span
  m="4282210">last</span> <span m="4282810">non-empty</span> <span
  m="4283250">structure.</span> <span m="4283850">That</span> <span
  m="4284020">would</span> <span m="4284120">v dot summary dot max,</span> <span
  m="4286430">and</span> <span m="4286590">then</span> <span
  m="4286760">find</span> <span m="4287190">the</span> <span
  m="4287470">last</span> <span m="4287980">item</span> <span
  m="4288330">in</span> <span m="4288440">that</span> <span
  m="4288630">cluster.</span></p><p><span m="4290410">OK,</span> <span
  m="4290580">so</span> <span m="4291000">cluster</span> <span
  m="4291390">i</span> <span m="4291670">is</span> <span m="4291940">the</span>
  <span m="4292050">last</span> <span m="4292410">one</span> <span
  m="4292700">for</span> <span m="4292830">v dot</span> <span
  m="4293160">summary.</span> <span m="4294030">And</span> <span
  m="4294160">then</span> <span m="4294260">we</span> <span
  m="4294370">look</span> <span m="4294590">v</span> <span
  m="4294720">dot</span> <span m="4295000">cluster of i</span> <span
  m="4295390">dot max.</span> <span m="4296950">And</span> <span
  m="4297050">we</span> <span m="4297160">combine</span> <span
  m="4297620">it</span> <span m="4297700">with</span> <span
  m="4297850">i.</span> <span m="4298190">That</span> <span
  m="4298440">gives</span> <span m="4298660">us</span> <span
  m="4298800">the</span> <span m="4298910">name</span> <span
  m="4299220">of</span> <span m="4299400">that</span> <span
  m="4299670">item</span> <span m="4300050">in</span> <span
  m="4300950">the</span> <span m="4301190">last</span> <span
  m="4302000">cluster,</span> <span m="4302670">the last</span> <span
  m="4302970">non-empty</span> <span m="4303290">cluster.</span></p><p><span
  m="4304410">But</span> <span m="4304850">there's</span> <span
  m="4305100">a</span> <span m="4305160">special</span> <span
  m="4305500">case,</span> <span m="4306040">which</span> <span
  m="4306210">is</span> <span m="4306420">maybe</span> <span
  m="4307440">this</span> <span m="4307770">returns</span> <span
  m="4308250">none.</span> <span m="4308640">Maybe</span> <span
  m="4309260">there</span> <span m="4309390">actually</span> <span
  m="4309690">is</span> <span m="4309860">nothing</span> <span
  m="4310280">in</span> <span m="4310410">v dot</span> <span
  m="4310750">summary.</span> <span m="4312340">That</span> <span
  m="4312510">means</span> <span m="4312740">we</span> <span
  m="4313190">just</span> <span m="4313390">deleted</span> <span
  m="4313820">the</span> <span m="4313890">last</span> <span
  m="4314140">item,</span> <span m="4314370">I</span> <span
  m="4314440">guess.</span> <span m="4315110">Or</span> <span
  m="4315450">there's</span> <span m="4315600">only</span> <span
  m="4315790">one</span> <span m="4316030">left.</span> <span
  m="4317240">We</span> <span m="4317340">deleted</span> <span
  m="4317770">the</span> <span m="4317880">next</span> <span
  m="4318150">to</span> <span m="4318230">last</span> <span
  m="4318490">time.</span></p><p><span m="4319450">Now</span> <span
  m="4319630">there's</span> <span m="4319870">only</span> <span
  m="4320160">one</span> <span m="4320410">item</span> <span
  m="4320650">left,</span> <span m="4321140">namely</span> <span
  m="4321450">v</span> <span m="4321580">dot</span> <span
  m="4321790">min.</span> <span m="4322190">So</span> <span
  m="4322370">we</span> <span m="4322480">set</span> <span m="4322710">v
  dot</span> <span m="4322960">max</span> <span m="4323230">equal</span> <span
  m="4323420">to v</span> <span m="4323540">dot min.</span> <span
  m="4324790">So</span> <span m="4324960">that's</span> <span
  m="4325200">a</span> <span m="4325260">special</span> <span
  m="4325600">case.</span> <span m="4326480">But</span> <span
  m="4326630">most</span> <span m="4326850">the</span> <span
  m="4326940">time,</span> <span m="4327370">you're just</span> <span
  m="4327750">doing</span> <span m="4328170">a</span> <span
  m="4328570">couple</span> <span m="4328890">dot</span> <span
  m="4329100">max's,</span> <span m="4329800">and</span> <span
  m="4330020">you're</span> <span m="4330140">done.</span> <span
  m="4331190">So</span> <span m="4331250">that's</span> <span
  m="4331430">how</span> <span m="4331500">you</span> <span
  m="4331600">maintain</span> <span m="4331920">the</span> <span
  m="4331980">maxes,</span> <span m="4332630">even</span> <span
  m="4332810">when</span> <span m="4332930">you're</span> <span
  m="4333020">deleting.</span></p><p><span m="4334080">And</span> <span
  m="4334810">unless</span> <span m="4334960">I</span> <span
  m="4335060">made</span> <span m="4335300">an</span> <span
  m="4335550">error,</span> <span m="4335810">I</span> <span
  m="4335880">think</span> <span m="4336080">all</span> <span
  m="4336400">these</span> <span m="4336570">algorithms</span> <span
  m="4336900">work</span> <span m="4337070">together.</span> <span
  m="4337390">You're</span> <span m="4337480">going</span> <span
  m="4337580">to</span> <span m="4337690">insert,</span> <span
  m="4338170">delete,</span> <span m="4338590">and</span> <span
  m="4338900">successor.</span> <span m="4339590">And</span> <span
  m="4339970">symmetrically,</span> <span m="4340560">you can do</span> <span
  m="4340660">predecessor</span> <span m="4341890">in</span> <span
  m="4342220">log</span> <span m="4342580">log</span> <span m="4342830">u</span>
  <span m="4343000">time</span> <span m="4343300">per</span> <span
  m="4343420">operation,</span> <span m="4344380">super</span> <span
  m="4344910">fast.</span></p><p><span m="4348340">Let</span> <span
  m="4348480">me</span> <span m="4348590">tell</span> <span
  m="4348850">you</span> <span m="4349010">a</span> <span
  m="4349040">couple</span> <span m="4349320">other</span> <span
  m="4349510">things.</span> <span m="4351160">One</span> <span
  m="4351340">is,</span> <span m="4351790">there's</span> <span
  m="4352120">a</span> <span m="4352140">matching</span> <span
  m="4352500">lower</span> <span m="4352760">bound.</span> <span
  m="4354110">Log</span> <span m="4354410">log--</span> <span
  m="4355090">maybe</span> <span m="4355190">you</span> <span
  m="4355550">wonder,</span> <span m="4356020">can</span> <span
  m="4356160">I</span> <span m="4356230">get</span> <span m="4356540">log</span>
  <span m="4356870">log</span> <span m="4357140">log</span> <span
  m="4357580">time,</span> <span m="4358330">log</span> <span
  m="4358650">log</span> <span m="4358930">log</span> <span
  m="4359230">log</span> <span m="4359600">time,</span> <span
  m="4360050">or</span> <span m="4360240">whatever?</span> <span
  m="4361300">No.</span></p><p><span m="4363180">In</span> <span
  m="4363370">most</span> <span m="4363670">reasonable</span> <span
  m="4365380">choices</span> <span m="4365800">of</span> <span
  m="4365910">parameters--</span> <span m="4366570">it's</span> <span
  m="4366750">a</span> <span m="4366800">little</span> <span
  m="4367020">bit</span> <span m="4367150">more</span> <span
  m="4367300">complicated</span> <span m="4367820">than</span> <span
  m="4367940">this--</span> <span m="4368190">but</span> <span
  m="4368370">for</span> <span m="4369150">most</span> <span m="4369450">of
  the</span> <span m="4369570">time</span> <span m="4369890">that you</span>
  <span m="4370050">care</span> <span m="4370230">about,</span> <span
  m="4370940">log</span> <span m="4371190">log</span> <span m="4371320">u</span>
  <span m="4371520">is</span> <span m="4371800">the</span> <span
  m="4371890">right</span> <span m="4372080">answer.</span> <span
  m="4374330">This</span> <span m="4374480">was</span> <span
  m="4374580">proved</span> <span m="4374780">in</span> <span
  m="4374860">2007.</span> <span m="4375770">So</span> <span
  m="4376810">it</span> <span m="4376930">took</span> <span
  m="4377090">us</span> <span m="4377240">decades</span> <span
  m="4377630">to</span> <span m="4377750">really</span> <span
  m="4377990">understand.</span> <span m="4379536">It's</span> <span
  m="4379990">by</span> <span m="4381280">a</span> <span
  m="4381400">former</span> <span m="4382020">MIT</span> <span
  m="4382360">student.</span></p><p><span m="4386250">So</span> <span
  m="4386480">I'll</span> <span m="4386560">give</span> <span
  m="4386740">you</span> <span m="4386900">some</span> <span
  m="4388440">range</span> <span m="4388790">where</span> <span
  m="4388950">it</span> <span m="4389010">holds,</span> <span
  m="4398390">which</span> <span m="4398620">will</span> <span
  m="4398780">raise</span> <span m="4399010">another</span> <span
  m="4399350">issue.</span> <span m="4399590">But,</span> <span
  m="4405070">OK.</span> <span m="4406300">So</span> <span
  m="4406770">this</span> <span m="4407230">range</span> <span
  m="4407495">is</span> <span m="4407760">the</span> <span m="4407930">range
  I</span> <span m="4408220">talked</span> <span m="4408450">about</span> <span
  m="4408630">before.</span> <span m="4408910">This</span> <span
  m="4409090">is</span> <span m="4409180">when</span> <span m="4409330">log
  log</span> <span m="4409740">u</span> <span m="4409860">equals</span> <span
  m="4410230">log</span> <span m="4410450">log</span> <span
  m="4410660">n.</span> <span m="4411120">So</span> <span
  m="4411300">that's</span> <span m="4411450">kind</span> <span
  m="4411690">of</span> <span m="4411770">the</span> <span
  m="4411950">case</span> <span m="4412180">where</span> <span
  m="4412290">you</span> <span m="4412370">care</span> <span
  m="4412590">about</span> <span m="4412730">applying</span> <span
  m="4413090">it.</span></p><p><span m="4413390">If</span> <span
  m="4413560">log</span> <span m="4413750">log</span> <span m="4413910">u
  is</span> <span m="4414120">more</span> <span m="4414270">like</span> <span
  m="4414440">log</span> <span m="4414700">n,</span> <span
  m="4415300">it's</span> <span m="4415410">not</span> <span
  m="4415580">so</span> <span m="4415750">interesting.</span> <span
  m="4417090">But</span> <span m="4417200">as</span> <span
  m="4417290">long</span> <span m="4417510">as</span> <span m="4417590">u</span>
  <span m="4417770">is</span> <span m="4417890">not</span> <span
  m="4418130">too</span> <span m="4418310">big,</span> <span m="4419210">this
  is</span> <span m="4419250">a little</span> <span m="4419570">bit</span> <span
  m="4419720">bigger</span> <span m="4419940">than</span> <span
  m="4420100">polynomial</span> <span m="4420390">n.</span> <span
  m="4422100">Then</span> <span m="4424190">this</span> <span
  m="4424400">is</span> <span m="4424490">the</span> <span
  m="4424600">right</span> <span m="4424780">answer.</span></p><p><span
  m="4425790">Now</span> <span m="4425840">technically,</span> <span
  m="4426430">you</span> <span m="4426520">need</span> <span
  m="4426690">another</span> <span m="4426960">assumption,</span> <span
  m="4427360">which</span> <span m="4427520">is</span> <span
  m="4427630">the</span> <span m="4427730">space</span> <span
  m="4428150">of</span> <span m="4428250">your</span> <span
  m="4428360">data</span> <span m="4428550">structure</span> <span
  m="4428810">is</span> <span m="4429070">not</span> <span m="4429360">to</span>
  <span m="4429560">super</span> <span m="4429880">linear.</span> <span
  m="4430970">Now</span> <span m="4431120">this</span> <span
  m="4431290">is</span> <span m="4431380">a</span> <span
  m="4431440">little</span> <span m="4431610">awkward.</span> <span
  m="4431990">Because</span> <span m="4433090">the</span> <span
  m="4433270">space</span> <span m="4433720">of</span> <span
  m="4433820">this</span> <span m="4434030">data</span> <span
  m="4434230">show</span> <span m="4434360">structure is</span> <span
  m="4434730">actually</span> <span m="4435140">order</span> <span
  m="4436130">u,</span> <span m="4436625">not</span> <span m="4437120">n.</span>
  <span m="4439120">So</span> <span m="4439310">the</span> <span
  m="4439480">last</span> <span m="4439840">issue</span> <span
  m="4440150">is</span> <span m="4440390">space.</span></p><p>&nbsp;</p><p><span
  m="4446140">Space</span> <span m="4446570">is</span> <span m="4446830">order
  u.</span> <span m="4447430">Let</span> <span m="4447580">me</span> <span
  m="4448100">go</span> <span m="4448270">back</span> <span
  m="4448600">to</span> <span m="4448710">this</span> <span
  m="4449550">binary</span> <span m="4449910">tree</span> <span
  m="4450170">picture.</span> <span m="4451290">So</span> <span
  m="4452290">we</span> <span m="4452450">had</span> <span
  m="4452560">the</span> <span m="4452650">idea</span> <span
  m="4452880">of,</span> <span m="4452950">well,</span> <span
  m="4453260">there's</span> <span m="4453360">all</span> <span
  m="4453580">these</span> <span m="4453790">bits</span> <span
  m="4454050">at</span> <span m="4454120">the</span> <span
  m="4454200">bottom.</span> <span m="4455640">We're</span> <span
  m="4455990">building</span> <span m="4456500">a</span> <span
  m="4456550">big</span> <span m="4457240">binary</span> <span
  m="4457530">tree</span> <span m="4457740">above</span> <span
  m="4458110">those.</span> <span m="4458860">The</span> <span
  m="4458970">leaves</span> <span m="4459340">are</span> <span
  m="4459510">the</span> <span m="4459600">actual</span> <span
  m="4459960">data.</span> <span m="4460890">And</span> <span
  m="4461090">then</span> <span m="4461230">we're</span> <span
  m="4461330">summarizing,</span> <span m="4462080">by</span> <span
  m="4462250">for</span> <span m="4462420">every</span> <span
  m="4462920">node,</span> <span m="4463410">we're</span> <span
  m="4463720">writing</span> <span m="4464180">the</span> <span
  m="4464390">or</span> <span m="4464760">of</span> <span m="4464860">the</span>
  <span m="4464960">two</span> <span m="4465200">nodes</span> <span
  m="4465420">below it,</span> <span m="4465750">which</span> <span
  m="4465930">is</span> <span m="4466050">summarizing</span> <span
  m="4466800">whether</span> <span m="4466990">that</span> <span
  m="4467210">thing</span> <span m="4467360">is</span> <span
  m="4467480">non-empty.</span></p><p><span m="4472230">What</span> <span
  m="4472530">van Emde</span> <span m="4472690">Boas</span> <span
  m="4473130">is</span> <span m="4473280">doing--</span> <span
  m="4473780">so</span> <span m="4473950">first</span> <span
  m="4474180">of</span> <span m="4474250">all,</span> <span
  m="4474400">you</span> <span m="4474510">see</span> <span
  m="4474730">that</span> <span m="4474900">the</span> <span
  m="4475000">total</span> <span m="4475330">number</span> <span
  m="4475660">of</span> <span m="4475930">nodes</span> <span
  m="4476270">in</span> <span m="4476350">this</span> <span
  m="4476500">tree</span> <span m="4476780">is</span> <span
  m="4476890">order</span> <span m="4477140">u.</span> <span
  m="4477900">Because</span> <span m="4478390">there's</span> <span
  m="4478850">u</span> <span m="4479310">leaves.</span> <span m="4479720">The
  total</span> <span m="4479950">size</span> <span m="4480240">of a</span> <span
  m="4480330">binary</span> <span m="4480630">tree</span> <span
  m="4480790">with</span> <span m="4480900">u</span> <span
  m="4481060">leaves</span> <span m="4481395">is</span> <span
  m="4481730">order</span> <span m="4481850">u,</span> <span
  m="4482650">2u</span> <span m="4483000">minus</span> <span
  m="4483250">1,</span> <span m="4483690">right?</span> <span
  m="4486630">And</span> <span m="4486860">you</span> <span
  m="4486980">can</span> <span m="4487100">kind</span> <span m="4487360">of
  see</span> <span m="4487620">what</span> <span m="4487890">van Emde</span>
  <span m="4487980">Boas</span> <span m="4488240">is</span> <span
  m="4488340">doing</span> <span m="4488590">here.</span></p><p><span
  m="4489300">First,</span> <span m="4490250">it's</span> <span
  m="4491160">thinking</span> <span m="4491520">about</span> <span
  m="4491800">the</span> <span m="4491860">middle</span> <span
  m="4492150">level.</span> <span m="4492670">Now it's</span> <span
  m="4492890">not</span> <span m="4493060">directly</span> <span
  m="4493560">looking</span> <span m="4493850">at</span> <span
  m="4493950">these</span> <span m="4494110">bits.</span> <span m="4494470">It
  says,</span> <span m="4495170">hey</span> <span m="4495310">look,</span> <span
  m="4496690">I</span> <span m="4496850">know</span> <span m="4497050">my</span>
  <span m="4497370">item,</span> <span m="4497940">the</span> <span
  m="4498330">thing</span> <span m="4498520">I'm</span> <span
  m="4498600">doing</span> <span m="4498860">a</span> <span
  m="4499080">successor</span> <span m="4499680">of,</span> <span
  m="4499880">let's</span> <span m="4500060">say,</span> <span
  m="4500220">is</span> <span m="4500610">three.</span> <span
  m="4501430">I</span> <span m="4501490">want</span> <span m="4501650">to
  know</span> <span m="4501830">the successor</span> <span m="4502330">of</span>
  <span m="4502390">this</span> <span m="4502550">position.</span></p><p><span
  m="4503580">First,</span> <span m="4504000">I</span> <span
  m="4504130">want</span> <span m="4504310">to</span> <span
  m="4504380">check,</span> <span m="4504990">should</span> <span
  m="4505290">I</span> <span m="4505350">recurse</span> <span
  m="4505920">in</span> <span m="4506110">this</span> <span
  m="4506360">block,</span> <span m="4508160">or</span> <span
  m="4508610">should</span> <span m="4508860">I</span> <span
  m="4508910">recurse</span> <span m="4510150">in</span> <span
  m="4510390">the</span> <span m="4510490">summary</span> <span
  m="4510880">block--</span> <span m="4512220">which</span> <span m="4512380">I
  didn't</span> <span m="4512600">draw.</span> <span m="4513010">But</span>
  <span m="4513090">it's</span> <span m="4513610">the</span> <span
  m="4514410">part</span> <span m="4514580">of</span> <span
  m="4514650">the</span> <span m="4514730">tree</span> <span
  m="4514910">that</span> <span m="4515030">would</span> <span
  m="4515650">be</span> <span m="4515780">up</span> <span
  m="4515910">here.</span> <span m="4516340">And</span> <span
  m="4516490">that's</span> <span m="4516670">exactly</span> <span
  m="4517160">what</span> <span m="4517300">we're</span> <span
  m="4517410">doing</span> <span m="4517680">with</span> <span
  m="4520630">successor.</span></p><p><span m="4523280">Should</span> <span
  m="4523580">we</span> <span m="4524130">recursively</span> <span
  m="4524730">look</span> <span m="4524950">within</span> <span
  m="4525220">cluster</span> <span m="4525570">i?</span> <span
  m="4526310">Or</span> <span m="4526450">should</span> <span
  m="4526620">we</span> <span m="4526720">look</span> <span
  m="4526900">within</span> <span m="4527140">the</span> <span
  m="4527210">summary</span> <span m="4527500">structure?</span> <span
  m="4527800">We</span> <span m="4527930">only</span> <span
  m="4528200">do</span> <span m="4528340">one</span> <span m="4528540">or</span>
  <span m="4528600">the</span> <span m="4528770">other.</span> <span
  m="4529790">And</span> <span m="4529860">that's</span> <span
  m="4530110">the</span> <span m="4530210">sense</span> <span
  m="4530540">in</span> <span m="4530670">which</span> <span
  m="4530900">we</span> <span m="4531140">are</span> <span
  m="4531270">binary</span> <span m="4531720">searching</span> <span
  m="4532190">on</span> <span m="4532340">the</span> <span
  m="4532430">levels</span> <span m="4532850">of</span> <span
  m="4532940">this</span> <span m="4533110">tree.</span></p><p><span
  m="4533750">Either</span> <span m="4534050">we</span> <span
  m="4534180">will</span> <span m="4534320">spend</span> <span
  m="4534620">all</span> <span m="4534920">of</span> <span
  m="4535030">our</span> <span m="4535150">work</span> <span
  m="4535940">recursively</span> <span m="4536710">looking</span> <span
  m="4537060">for</span> <span m="4537150">the</span> <span
  m="4537260">successor</span> <span m="4537720">within</span> <span
  m="4537950">the</span> <span m="4538020">summary</span> <span
  m="4538320">structure,</span> <span m="4538630">which</span> <span
  m="4538810">is</span> <span m="4538920">like</span> <span
  m="4539130">finding</span> <span m="4539460">the</span> <span
  m="4539550">next</span> <span m="4539790">1</span> <span
  m="4540000">bit</span> <span m="4540210">in</span> <span
  m="4540350">this</span> <span m="4541050">row,</span> <span
  m="4541810">the</span> <span m="4541890">middle</span> <span
  m="4542100">row,</span> <span m="4542960">or</span> <span
  m="4543310">we</span> <span m="4543450">will</span> <span
  m="4543570">spend</span> <span m="4543800">all</span> <span
  m="4544000">of</span> <span m="4544070">our</span> <span
  m="4544180">time</span> <span m="4544550">doing</span> <span
  m="4545080">successor</span> <span m="4545610">in</span> <span
  m="4545720">here.</span> <span m="4546900">And</span> <span
  m="4547070">we</span> <span m="4547150">can</span> <span m="4547240">do</span>
  <span m="4547340">that.</span> <span m="4547540">Because</span> <span
  m="4547810">we</span> <span m="4547890">have</span> <span
  m="4547990">the</span> <span m="4548060">max</span> <span
  m="4548370">augmented.</span></p><p><span m="4549360">OK,</span> <span
  m="4549720">but</span> <span m="4551000">that's</span> <span
  m="4551380">the</span> <span m="4551470">sense</span> <span
  m="4551770">in</span> <span m="4551860">which,</span> <span
  m="4552130">kind</span> <span m="4552530">of,</span> <span m="4552640">you
  are</span> <span m="4552880">binary</span> <span m="4553210">searching</span>
  <span m="4553520">in the</span> <span m="4553600">levels</span> <span
  m="4553940">of</span> <span m="4554010">this</span> <span
  m="4554090">tree.</span> <span m="4554590">So</span> <span
  m="4554750">that's</span> <span m="4555720">that</span> <span
  m="4555890">early</span> <span m="4556160">intuition</span> <span
  m="4556545">for</span> <span m="4556930">van Emde</span> <span
  m="4557185">Boas</span> <span m="4557870">is</span> <span
  m="4558230">kind</span> <span m="4558420">of</span> <span
  m="4558470">what</span> <span m="4558580">we're</span> <span
  m="4558680">doing.</span> <span m="4559800">The</span> <span
  m="4559910">trouble</span> <span m="4560280">is,</span> <span
  m="4560440">to</span> <span m="4560540">store</span> <span
  m="4560770">that</span> <span m="4560950">tree</span> <span
  m="4561200">takes</span> <span m="4561540">order</span> <span
  m="4562270">u</span> <span m="4562760">space.</span></p><p><span
  m="4564970">We'd</span> <span m="4565140">really</span> <span
  m="4565350">like</span> <span m="4565530">to</span> <span
  m="4565630">spend</span> <span m="4566400">order</span> <span
  m="4566630">n</span> <span m="4566920">space.</span> <span
  m="4567920">And</span> <span m="4568780">I</span> <span
  m="4568810">have</span> <span m="4569010">four</span> <span
  m="4569260">minutes.</span> <span m="4569680">So</span> <span
  m="4571310">you'll</span> <span m="4571540">see</span> <span
  m="4572850">part</span> <span m="4573100">of</span> <span
  m="4573170">the</span> <span m="4573300">answer</span> <span
  m="4573580">to</span> <span m="4573690">this.</span> <span
  m="4577132">My</span> <span m="4577629">poor</span> <span
  m="4578126">microphone.</span> <span m="4583600">Let</span> <span
  m="4583780">me</span> <span m="4583890">give</span> <span
  m="4584050">you</span> <span m="4584300">an</span> <span
  m="4584440">idea</span> <span m="4584860">of how</span> <span
  m="4584980">to</span> <span m="4585050">fix</span> <span m="4585430">the
  space</span> <span m="4585830">bound.</span></p><p><span
  m="4586390">Let's</span> <span m="4586840">erase</span> <span
  m="4587010">some</span> <span m="4587170">algorithms.</span> <span
  m="4601880">The</span> <span m="4602340">main</span> <span
  m="4602540">idea</span> <span m="4602800">here</span> <span
  m="4603050">is</span> <span m="4604120">only</span> <span
  m="4604620">store</span> <span m="4607200">non-empty</span> <span
  m="4607680">clusters,</span> <span m="4610910">pretty</span> <span
  m="4611220">simple</span> <span m="4611690">idea.</span> <span
  m="4614930">We</span> <span m="4615150">want</span> <span
  m="4615400">to</span> <span m="4615490">spend</span> <span
  m="4616050">space</span> <span m="4616460">only</span> <span
  m="4616750">for</span> <span m="4616980">the</span> <span
  m="4617390">present</span> <span m="4617770">items,</span> <span
  m="4618180">not</span> <span m="4618380">for</span> <span
  m="4618450">the</span> <span m="4618560">absent</span> <span
  m="4618860">ones.</span> <span m="4619200">So</span> <span
  m="4619400">don't</span> <span m="4619630">store</span> <span
  m="4619800">the</span> <span m="4619930">absent</span> <span
  m="4620310">ones.</span></p><p><span m="4621940">In</span> <span
  m="4622150">particular,</span> <span m="4622660">we're</span> <span
  m="4622900">doing</span> <span m="4623210">all</span> <span
  m="4623370">this</span> <span m="4623780">work</span> <span
  m="4624180">around</span> <span m="4624630">when</span> <span
  m="4624790">clusters</span> <span m="4625940">are</span> <span
  m="4626240">empty,</span> <span m="4627240">in which</span> <span
  m="4627410">case</span> <span m="4627560">we</span> <span
  m="4627660">can</span> <span m="4627790">see</span> <span
  m="4627990">that</span> <span m="4628160">just</span> <span
  m="4628320">by</span> <span m="4628410">looking</span> <span
  m="4628670">at</span> <span m="4628750">the</span> <span
  m="4628920">min</span> <span m="4629040">item,</span> <span
  m="4630270">or</span> <span m="4630540">when</span> <span
  m="4630700">they're</span> <span m="4630810">non-empty.</span> <span
  m="4631360">So</span> <span m="4631540">let's</span> <span
  m="4631800">just</span> <span m="4632090">store</span> <span
  m="4632390">the</span> <span m="4632510">non-empty</span> <span
  m="4632940">ones.</span> <span m="4633380">That</span> <span
  m="4633810">will</span> <span m="4633960">get</span> <span
  m="4634090">you</span> <span m="4634180">down</span> <span
  m="4634380">to</span> <span m="4634640">almost</span> <span
  m="4635160">order</span> <span m="4635370">n</span> <span
  m="4635540">space,</span> <span m="4635980">not</span> <span
  m="4636120">quite,</span> <span m="4637170">but</span> <span
  m="4637300">close.</span></p><p><span m="4639070">To</span> <span
  m="4639200">do</span> <span m="4639460">this,</span> <span
  m="4640290">v</span> <span m="4640570">dot</span> <span
  m="4641090">cluster</span> <span m="4642150">is</span> <span
  m="4642360">no</span> <span m="4642590">longer</span> <span
  m="4643220">an</span> <span m="4643400">array.</span> <span
  m="4644370">Just</span> <span m="4644580">make</span> <span
  m="4644800">it</span> <span m="4645690">a</span> <span m="4645740">hash</span>
  <span m="4646010">table,</span> <span m="4647140">a</span> <span
  m="4647240">dictionary</span> <span m="4647820">in</span> <span
  m="4647940">Python.</span> <span m="4649460">So</span> <span
  m="4651340">v</span> <span m="4651700">dot</span> <span
  m="4651940">cluster--</span> <span m="4652740">we were</span> <span
  m="4653090">always</span> <span m="4653460">doing v dot</span> <span
  m="4653540">cluster</span> <span m="4653920">of i.</span> <span
  m="4654750">Just</span> <span m="4654970">make</span> <span
  m="4655130">that</span> <span m="4655280">into</span> <span
  m="4655500">dictionary</span> <span m="4655880">instead</span> <span
  m="4656130">of</span> <span m="4656190">an</span> <span
  m="4656270">array.</span></p><p><span m="4657020">And</span> <span
  m="4657260">you</span> <span m="4657350">save</span> <span
  m="4657670">most</span> <span m="4657910">of</span> <span
  m="4657950">the</span> <span m="4658040">space.</span> <span
  m="4658360">You</span> <span m="4658470">only</span> <span
  m="4658610">have</span> <span m="4658710">to</span> <span
  m="4658800">store</span> <span m="4659080">the</span> <span
  m="4659310">non-empty</span> <span m="4660500">items.</span> <span
  m="4667260">And</span> <span m="4667540">you</span> <span
  m="4667620">should</span> <span m="4667810">know</span> <span
  m="4667940">from</span> <span m="4668050">006,</span> <span
  m="4668590">hash</span> <span m="4668770">table</span> <span
  m="4669140">is</span> <span m="4669470">constant</span> <span
  m="4670030">expected.</span> <span m="4671320">We'll</span> <span
  m="4672010">prove</span> <span m="4672330">that</span> <span
  m="4672560">formally</span> <span m="4673600">in</span> <span
  m="4673800">lecture</span> <span m="4674110">eight,</span> <span
  m="4674390">I</span> <span m="4674470">think.</span> <span
  m="4674870">But</span> <span m="4675950">for</span> <span
  m="4676090">now,</span> <span m="4676450">take</span> <span
  m="4676870">hashing</span> <span m="4677350">as</span> <span
  m="4677550">given.</span></p><p><span m="4678700">Everything</span> <span
  m="4679080">we</span> <span m="4679170">did</span> <span
  m="4679300">before</span> <span m="4679760">is</span> <span
  m="4679870">essentially</span> <span m="4680320">the</span> <span
  m="4680400">same</span> <span m="4680610">cost,</span> <span
  m="4680950">but</span> <span m="4681090">an</span> <span
  m="4681190">expectation,</span> <span m="4682830">no</span> <span
  m="4682930">longer</span> <span m="4683170">worst</span> <span
  m="4683400">case.</span> <span m="4684420">But</span> <span
  m="4684610">now</span> <span m="4684750">the</span> <span
  m="4684840">space</span> <span m="4685220">goes</span> <span
  m="4685430">way</span> <span m="4685610">down.</span> <span
  m="4687140">Because</span> <span m="4687490">if</span> <span
  m="4687610">you</span> <span m="4687750">look</span> <span
  m="4688320">at</span> <span m="4688500">an</span> <span
  m="4688640">item,</span> <span m="4690750">when</span> <span
  m="4690920">you</span> <span m="4691010">insert</span> <span
  m="4691350">an</span> <span m="4691470">item,</span> <span
  m="4692290">it</span> <span m="4692720">sort</span> <span
  m="4693190">of</span> <span m="4693390">goes</span> <span
  m="4693750">to</span> <span m="4693920">log</span> <span
  m="4694240">log</span> <span m="4694440">u</span> <span
  m="4694570">different</span> <span m="4694890">places,</span> <span
  m="4695620">in</span> <span m="4695730">the</span> <span
  m="4695810">worst</span> <span m="4696030">case.</span></p><p><span
  m="4696910">But,</span> <span m="4700150">yeah.</span> <span
  m="4701800">We</span> <span m="4702050">end</span> <span m="4702260">up</span>
  <span m="4702460">with</span> <span m="4703480">n</span> <span
  m="4704340">log</span> <span m="4704800">log</span> <span m="4705140">u</span>
  <span m="4706210">space,</span> <span m="4707280">which</span> <span
  m="4707470">is</span> <span m="4707600">pretty</span> <span
  m="4707790">good,</span> <span m="4708740">almost</span> <span
  m="4709180">linear</span> <span m="4709450">space.</span> <span
  m="4711200">It's</span> <span m="4711320">a</span> <span
  m="4711370">little</span> <span m="4711570">tricky</span> <span
  m="4711840">to</span> <span m="4711940">see</span> <span
  m="4712120">why</span> <span m="4712390">you</span> <span
  m="4712480">get</span> <span m="4712640">log</span> <span
  m="4712890">log</span> <span m="4713010">u.</span> <span
  m="4713160">But</span> <span m="4713680">I</span> <span
  m="4713770">guess</span> <span m="4713960">if</span> <span
  m="4714030">you</span> <span m="4714140">look</span> <span
  m="4714290">at</span> <span m="4714350">the</span> <span
  m="4714480">insert</span> <span m="4714780">algorithm,</span> <span
  m="4718330">even</span> <span m="4718630">though</span> <span
  m="4719310">we</span> <span m="4719500">had</span> <span
  m="4719680">two</span> <span m="4719840">recursive</span> <span
  m="4720250">calls</span> <span m="4720570">in</span> <span
  m="4720640">the</span> <span m="4720730">worst</span> <span
  m="4720950">case.</span></p><p><span m="4721710">One</span> <span
  m="4721920">of</span> <span m="4722020">them</span> <span
  m="4722180">was</span> <span m="4722360">free.</span> <span
  m="4723430">When</span> <span m="4723540">we</span> <span
  m="4723640">do</span> <span m="4723790">both</span> <span
  m="4724050">of</span> <span m="4724110">them,</span> <span
  m="4724250">we</span> <span m="4724340">insert</span> <span
  m="4724640">here.</span> <span m="4725510">This</span> <span
  m="4725720">one</span> <span m="4727000">happens</span> <span
  m="4727320">to</span> <span m="4727390">be</span> <span
  m="4727520">free.</span> <span m="4727710">Because</span> <span
  m="4727910">it</span> <span m="4727950">was</span> <span
  m="4728070">empty.</span> <span m="4728380">But</span> <span
  m="4728510">we</span> <span m="4728620">still</span> <span
  m="4729160">pay</span> <span m="4729360">for</span> <span
  m="4729675">it.</span></p><p><span m="4729990">We</span> <span
  m="4730110">set</span> <span m="4730420">v</span> <span m="4730540">dot</span>
  <span m="4730730">min</span> <span m="4731100">equal</span> <span
  m="4731390">to</span> <span m="4731470">x.</span> <span m="4732310">And
  so</span> <span m="4732460">that</span> <span m="4732650">structure</span>
  <span m="4733140">went</span> <span m="4733400">from</span> <span
  m="4733760">empty</span> <span m="4734390">to</span> <span
  m="4734520">non-empty.</span> <span m="4735110">So</span> <span
  m="4735270">this</span> <span m="4735460">costs</span> <span
  m="4736170">1.</span> <span m="4737880">And</span> <span
  m="4738030">then</span> <span m="4738150">we</span> <span
  m="4738250">recursively</span> <span m="4738940">call</span> <span
  m="4739270">insert</span> <span m="4739640">v</span> <span
  m="4739750">dot</span> <span m="4739960">summary</span> <span
  m="4740785">on</span> <span m="4741160">high</span> <span
  m="4741440">of</span> <span m="4741580">x.</span></p><p><span
  m="4742300">So</span> <span m="4742460">we</span> <span
  m="4742560">might,</span> <span m="4743260">when</span> <span
  m="4743410">we</span> <span m="4743580">insert</span> <span
  m="4744010">one</span> <span m="4744250">item</span> <span
  m="4744500">x,</span> <span m="4745090">if</span> <span
  m="4745260">lots</span> <span m="4745470">of</span> <span
  m="4745570">things</span> <span m="4745760">were</span> <span
  m="4745880">empty,</span> <span m="4746580">actually</span> <span
  m="4747160">log</span> <span m="4747560">log</span> <span m="4747820">u</span>
  <span m="4748520">structures</span> <span m="4749050">become</span> <span
  m="4749370">non-empty,</span> <span m="4750350">and</span> <span
  m="4750430">that's</span> <span m="4750590">why</span> <span
  m="4750710">you</span> <span m="4750800">pay</span> <span
  m="4750980">log</span> <span m="4751270">log u</span> <span
  m="4751600">for</span> <span m="4751810">each</span> <span
  m="4752460">item</span> <span m="4752670">you</span> <span
  m="4752760">insert.</span> <span m="4753180">It's</span> <span
  m="4753610">kind</span> <span m="4753860">of</span> <span
  m="4753930">annoying.</span></p><p><span m="4754880">There</span> <span
  m="4755010">is</span> <span m="4755210">a</span> <span m="4755270">fix,</span>
  <span m="4755850">which</span> <span m="4755950">is</span> <span
  m="4756120">in</span> <span m="4756280">my</span> <span
  m="4756400">notes.</span> <span m="4756760">You</span> <span
  m="4756900">can</span> <span m="4757060">read</span> <span
  m="4757260">it,</span> <span m="4758050">for</span> <span
  m="4758380">reducing</span> <span m="4758800">this</span> <span
  m="4758990">further</span> <span m="4759840">to</span> <span
  m="4760000">order</span> <span m="4760210">n.</span> <span
  m="4761960">But,</span> <span m="4763260">OK,</span> <span
  m="4763390">I</span> <span m="4763460">have</span> <span m="4763580">30</span>
  <span m="4763780">seconds</span> <span m="4764140">to</span> <span
  m="4764220">explain</span> <span m="4764570">it.</span> <span
  m="4765500">The</span> <span m="4765640">idea</span> <span
  m="4765940">is--</span> <span m="4767010">you're</span> <span
  m="4767150">not</span> <span m="4767310">responsible</span> <span
  m="4767770">for</span> <span m="4767890">knowing</span> <span
  m="4768120">it.</span> <span m="4768240">This</span> <span
  m="4768390">is</span> <span m="4768480">just</span> <span
  m="4768760">in</span> <span m="4768820">case</span> <span
  m="4769080">you're</span> <span m="4769490">curious.</span></p><p><span
  m="4772500">The</span> <span m="4772610">idea</span> <span
  m="4772830">is,</span> <span m="4773190">instead</span> <span
  m="4773670">of</span> <span m="4773760">going</span> <span
  m="4774130">all</span> <span m="4774430">the</span> <span
  m="4774520">way</span> <span m="4774690">down</span> <span
  m="4775200">in</span> <span m="4775310">the</span> <span
  m="4775390">recursion,</span> <span m="4776780">at</span> <span
  m="4776930">the</span> <span m="4777010">very</span> <span
  m="4777280">bottom,</span> <span m="4777790">you</span> <span
  m="4777890">say,</span> <span m="4778170">well,</span> <span
  m="4778480">normally</span> <span m="4778800">if</span> <span
  m="4778920">you</span> <span m="4779650">stop</span> <span
  m="4779970">the</span> <span m="4780040">recursion</span> <span
  m="4780510">when</span> <span m="4780610">you</span> <span
  m="4780660">have</span> <span m="4781370">u</span> <span
  m="4781620">equals</span> <span m="4781890">1,</span> <span
  m="4782610">just</span> <span m="4782750">stop</span> <span
  m="4783070">the</span> <span m="4783160">recursion</span> <span
  m="4785150">when</span> <span m="4785900">n</span> <span m="4787860">is</span>
  <span m="4788090">very</span> <span m="4788830">small,</span> <span
  m="4790130">like</span> <span m="4790630">log</span> <span
  m="4791090">log</span> <span m="4791420">u.</span></p><p><span
  m="4792810">When</span> <span m="4792930">I'm</span> <span
  m="4793090">only</span> <span m="4793350">storing</span> <span
  m="4793660">log</span> <span m="4793910">log</span> <span m="4794080">u</span>
  <span m="4794210">items,</span> <span m="4795430">put</span> <span
  m="4795500">them</span> <span m="4795630">in</span> <span m="4795730">a</span>
  <span m="4795830">linked</span> <span m="4796160">list.</span> <span
  m="4796600">I</span> <span m="4796700">don't</span> <span
  m="4796720">care.</span> <span m="4796950">You</span> <span
  m="4797060">can</span> <span m="4797170">do</span> <span
  m="4797280">whatever</span> <span m="4797560">you</span> <span
  m="4797690">want</span> <span m="4797910">on</span> <span
  m="4797990">log</span> <span m="4798330">log</span> <span m="4798590">u</span>
  <span m="4798740">items</span> <span m="4799040">in</span> <span
  m="4799130">log</span> <span m="4799350">log</span> <span m="4799510">u</span>
  <span m="4799630">time.</span> <span m="4800690">It's</span> <span
  m="4800890">just</span> <span m="4801060">a</span> <span
  m="4801160">tiny</span> <span m="4801640">tweak.</span> <span
  m="4802120">But</span> <span m="4802300">it</span> <span
  m="4802400">turns</span> <span m="4802640">out,</span> <span
  m="4802780">it</span> <span m="4802930">gets</span> <span
  m="4803130">rid</span> <span m="4803260">of</span> <span
  m="4803360">that</span> <span m="4803550">log</span> <span
  m="4804080">u</span> <span m="4804530">in</span> <span m="4804670">the</span>
  <span m="4804740">space.</span></p><p><span m="4805720">So</span> <span
  m="4806560">it's</span> <span m="4806710">a</span> <span
  m="4806760">little</span> <span m="4806950">bit</span> <span
  m="4807540">messier.</span> <span m="4808160">And</span> <span
  m="4808400">I</span> <span m="4808430">don't</span> <span
  m="4808540">know</span> <span m="4808610">if</span> <span
  m="4808690">you'd</span> <span m="4808800">want</span> <span
  m="4808920">to</span> <span m="4808960">implement</span> <span m="4809380">it
  that</span> <span m="4809530">way.</span> <span m="4809650">But</span> <span
  m="4809810">you</span> <span m="4809920">can</span> <span
  m="4810170">reduce</span> <span m="4810650">to</span> <span
  m="4811090">linear</span> <span m="4811250">space.</span> <span
  m="4811910">And</span> <span m="4812030">that's</span> <span
  m="4812240">van</span> <span m="4812390">Emde</span> <span
  m="4812480">Boas.</span></p>
uid: ee3a8f82c04e8d311c7b102978bd78a9
type: course
layout: video
---
