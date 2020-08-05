---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  cryptography are discussed.</p> <p><strong>Instructors:</strong> Ling Ren</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ZLOhV4XQ_tI
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: Video-YouTube-Stream
    type: Video
    uid: 73276c3bfed7d10623a346d0518ae0bf
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ZLOhV4XQ_tI/default.jpg'
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b8a0012f55415786c1a3ba0040cbc286
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: ZLOhV4XQ_tI
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: cc1eefcce55bf31cdd14a2035d01d58d
  - id: ZLOhV4XQ_tI.srt
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-11-cryptography-more-primitives/ZLOhV4XQ_tI.srt
    title: 3play caption file
    type: null
    uid: ae596e65c0203dfa7c2072318808494a
  - id: ZLOhV4XQ_tI.pdf
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-11-cryptography-more-primitives/ZLOhV4XQ_tI.pdf
    title: 3play pdf file
    type: null
    uid: 286c129e521495051cb9a87e27d8870b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ae60604bb93fb1f301ccdd92b01eab8f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5ac3426aac5c4ea47cdb7f0259784b0b
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: Video-iTunes U-MP4
    type: Video
    uid: 8a0c3bdeaad320118daee43f113ce643
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec11_300k.mp4'
    parent_uid: bacbfc2882416b8008c96c300030e6b1
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5b3334b596e31bb6d642f3164f954dad
inline_embed_id: '61530954recitation11:cryptography:moreprimitives95089154'
order_index: 450
parent_uid: 8c671299aae36eba669ca13490c21dec
related_resources_text: ''
short_url: recitation-11-cryptography-more-primitives
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-11-cryptography-more-primitives
title: 'Recitation 11: Cryptography: More Primitives'
transcript: >-
  <p><span m="80">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4019">Your</span> <span
  m="4210">support</span> <span m="4710">will</span> <span m="4870">help</span>
  <span m="5110">MIT</span> <span m="5570">OpenCourseWare</span> <span
  m="6360">continue</span> <span m="6870">to</span> <span m="6950">offer</span>
  <span m="7360">high-quality</span> <span m="8119">educational</span> <span
  m="8750">resources</span> <span m="9370">for</span> <span
  m="9520">free.</span> <span m="10730">To</span> <span m="10830">make</span>
  <span m="10940">a</span> <span m="10990">donation</span> <span
  m="11670">or</span> <span m="11940">view</span> <span
  m="12380">additional</span> <span m="12800">materials</span> <span
  m="13340">from</span> <span m="13490">hundreds</span> <span
  m="13920">of</span> <span m="14030">MIT</span> <span m="14450">courses,</span>
  <span m="15580">visit</span> <span m="15780">MIT</span> <span
  m="16210">OpenCourseWare</span> <span m="17250">at</span> <span
  m="17420">ocw.mit.edu.</span></p><p><span m="21420">PROFESSOR: So</span> <span
  m="21780">finally,</span> <span m="22090">it's</span> <span
  m="22350">our</span> <span m="22960">last</span> <span
  m="23280">recitation.</span> <span m="24770">And</span> <span
  m="25910">finally,</span> <span m="26280">it's</span> <span
  m="26430">my</span> <span m="26850">favorite</span> <span
  m="27170">topic--</span> <span m="28330">cryptography--</span> <span
  m="29350">because</span> <span m="29850">I</span> <span m="30360">work</span>
  <span m="30600">in</span> <span m="31270">this</span> <span
  m="31470">area.</span> <span m="32990">So</span> <span m="33230">I</span>
  <span m="33360">have</span> <span m="33790">probably</span> <span
  m="35060">a</span> <span m="35130">little</span> <span m="35280">bit</span>
  <span m="35410">more</span> <span m="35630">than</span> <span
  m="36160">what's</span> <span m="36390">required</span> <span
  m="37390">to</span> <span m="37580">tell</span> <span m="37800">you.</span>
  <span m="40370">So</span> <span m="41900">this</span> <span
  m="42450">recitation</span> <span m="43900">is</span> <span
  m="45700">access</span> <span m="46210">more</span> <span
  m="46430">primitives,</span> <span m="51930">so</span> <span
  m="52800">we'll</span> <span m="53090">introduce</span> <span
  m="53540">several</span> <span m="53990">more</span> <span
  m="54200">primitives</span> <span m="54780">that</span> <span
  m="55350">may</span> <span m="55710">be</span> <span m="55870">useful</span>
  <span m="56290">to</span> <span m="56430">your</span> <span
  m="56620">future</span> <span m="57850">work</span> <span m="58220">or</span>
  <span m="58490">study.</span> <span m="59710">And</span> <span
  m="60290">so</span> <span m="60440">the</span> <span m="60510">first</span>
  <span m="60780">one</span> <span m="61250">is</span> <span
  m="61650">digital</span> <span m="61990">signature.</span></p><p><span
  m="71280">So</span> <span m="71370">we</span> <span m="71500">have</span>
  <span m="71970">briefly</span> <span m="72840">mentioned</span> <span
  m="73290">digital</span> <span m="73620">signatures</span> <span
  m="74150">in</span> <span m="74260">the</span> <span m="74670">lecture,</span>
  <span m="75390">but</span> <span m="76050">mainly</span> <span
  m="76690">as</span> <span m="76900">an</span> <span
  m="77390">application</span> <span m="78120">of</span> <span
  m="78850">Hatch,</span> <span m="79710">so</span> <span m="79900">now</span>
  <span m="80590">I'm</span> <span m="80680">going</span> <span
  m="80920">to</span> <span m="81310">introduce</span> <span m="81730">it</span>
  <span m="81880">as</span> <span m="82070">a</span> <span
  m="82190">standalone</span> <span m="83220">primitive.</span> <span
  m="86500">So</span> <span m="86710">as</span> <span m="87240">you</span> <span
  m="87370">may</span> <span m="87520">have</span> <span
  m="87700">already</span> <span m="87960">known,</span> <span
  m="88220">digital</span> <span m="88550">signature</span> <span
  m="91690">is</span> <span m="92010">used</span> <span m="92410">for</span>
  <span m="92700">verifying</span> <span m="93350">message</span> <span
  m="94090">authenticity.</span> <span m="95330">And</span> <span
  m="95530">it's</span> <span m="96120">a</span> <span m="96530">pair of</span>
  <span m="96950">function</span> <span m="103460">sign</span> <span
  m="104740">and</span> <span m="105040">verify.</span> <span
  m="107840">So</span> <span m="108510">sign</span> <span
  m="109020">takes</span> <span m="109350">a</span> <span
  m="110300">secret</span> <span m="110680">key</span> <span
  m="112300">and</span> <span m="112450">the</span> <span
  m="112510">message.</span> <span m="114090">It</span> <span
  m="114280">outputs</span> <span m="116664">a</span> <span
  m="117120">signature,</span> <span m="118430">which we</span> <span
  m="120090">refer</span> <span m="120400">to</span> <span m="120520">as</span>
  <span m="120660">sigma.</span></p><p><span m="123320">And</span> <span
  m="123670">verify</span> <span m="124180">takes</span> <span
  m="124540">a</span> <span m="124670">public</span> <span
  m="124970">key,</span> <span m="126126">a</span> <span
  m="126540">message,</span> <span m="127920">and</span> <span
  m="128110">a</span> <span m="128199">signature,</span> <span
  m="129570">and</span> <span m="129820">outputs</span> <span
  m="131496">on</span> <span m="132750">either</span> <span
  m="132950">true</span> <span m="133300">or false.</span> <span
  m="134460">It</span> <span m="134580">either</span> <span
  m="134820">accepts</span> <span m="135170">the</span> <span
  m="135340">signature</span> <span m="135630">or</span> <span
  m="135900">reject.</span> <span m="138000">So</span> <span
  m="138800">we</span> <span m="139060">use</span> <span
  m="140100">secret</span> <span m="140355">key</span> <span
  m="140610">to</span> <span m="140740">sign</span> <span m="141220">and</span>
  <span m="141310">public</span> <span m="141500">key</span> <span
  m="141570">to</span> <span m="141670">verify.</span> <span
  m="142430">That</span> <span m="142660">means</span> <span
  m="143630">so</span> <span m="144200">if</span> <span m="144380">I</span>
  <span m="144510">want</span> <span m="144680">to</span> <span
  m="144740">send</span> <span m="144900">the</span> <span
  m="144960">message,</span> <span m="145470">I</span> <span
  m="145600">should</span> <span m="145800">be</span> <span
  m="145920">the</span> <span m="146050">only</span> <span m="146260">one</span>
  <span m="148080">who</span> <span m="148530">was</span> <span
  m="148680">able</span> <span m="148930">to</span> <span m="149260">sign</span>
  <span m="149580">it.</span></p><p><span m="150080">And</span> <span
  m="150310">everyone</span> <span m="150900">can</span> <span
  m="151110">verify</span> <span m="151700">that</span> <span
  m="151960">this</span> <span m="152120">message</span> <span
  m="153090">indeed</span> <span m="153510">comes</span> <span
  m="153750">from</span> <span m="153920">me.</span> <span m="156360">So</span>
  <span m="157570">what</span> <span m="157850">properties</span> <span
  m="158560">do</span> <span m="158790">we</span> <span m="159020">want</span>
  <span m="160460">from</span> <span m="160970">digital</span> <span
  m="161300">signatures?</span> <span m="168850">Any</span> <span
  m="169010">thoughts</span> <span m="169670">on</span> <span
  m="169760">that?</span> <span m="175314">Go ahead.</span></p><p><span
  m="175798">AUDIENCE: [INAUDIBLE]</span> <span m="178702">given</span> <span
  m="179186">the</span> <span m="180154">signature</span> <span m="180638">in a
  message</span> <span m="181122">[INAUDIBLE]</span> <span m="181606">to get the
  secret key.</span></p><p><span m="182590">PROFESSOR: OK,</span> <span
  m="182910">that's</span> <span m="183110">definitely</span> <span
  m="183450">one.</span> <span m="185860">I'll</span> <span
  m="186770">put</span> <span m="186970">a</span> <span m="188460">more</span>
  <span m="188630">general</span> <span m="189640">description</span> <span
  m="190380">of</span> <span m="190740">what</span> <span m="190890">you</span>
  <span m="190960">just</span> <span m="191140">said.</span> <span
  m="196170">Any</span> <span m="196310">other</span> <span
  m="196540">answers?</span></p><p><span m="199876">AUDIENCE: And</span> <span
  m="200367">only</span> <span m="200858">one</span> <span
  m="201349">signature</span> <span m="202822">[INAUDIBLE],</span> <span
  m="205277">like</span> <span m="205768">on any message</span> <span
  m="206259">coming</span> <span m="206750">out,</span> <span m="207241">can you
  have one signature?</span></p><p><span m="209210">PROFESSOR: OK,</span> <span
  m="210880">so</span> <span m="210990">what's</span> <span
  m="211080">your</span> <span m="211190">name?</span></p><p><span
  m="211690">AUDIENCE: Hugo.</span></p><p><span m="212900">PROFESSOR:
  Hugo</span> <span m="213710">says</span> <span m="215480">a</span> <span
  m="215580">message</span> <span m="215980">should</span> <span
  m="216170">only</span> <span m="216380">have</span> <span
  m="216770">one</span> <span m="217100">signature.</span> <span
  m="218100">Let's</span> <span m="218260">think</span> <span
  m="218400">about</span> <span m="218720">whether</span> <span
  m="218930">that's</span> <span m="219170">necessary.</span> <span
  m="220190">So</span> <span m="220640">if</span> <span m="222340">my</span>
  <span m="222500">algorithm</span> <span m="223010">is</span> <span
  m="223150">a</span> <span m="223230">randomized</span> <span
  m="223750">one</span> <span m="224750">that</span> <span m="225550">for</span>
  <span m="226400">the</span> <span m="226490">same</span> <span
  m="226700">message I</span> <span m="227080">output</span> <span
  m="228700">many</span> <span m="229030">possible</span> <span
  m="229510">signatures.</span> <span m="230430">So</span> <span
  m="231070">why</span> <span m="231230">is</span> <span m="231340">that</span>
  <span m="231500">bad?</span></p><p><span m="234630">So</span> <span
  m="234850">for</span> <span m="235280">any</span> <span m="235590">of</span>
  <span m="235700">them,</span> <span m="236040">they</span> <span
  m="236150">will all</span> <span m="236350">verify</span> <span
  m="237050">if</span> <span m="237270">that's</span> <span
  m="237700">how</span> <span m="237930">my</span> <span
  m="238080">algorithm</span> <span m="238500">works.</span> <span
  m="240420">I</span> <span m="240680">think</span> <span
  m="241080">that's</span> <span m="241830">fine.</span> <span
  m="242040">That's</span> <span m="242220">OK.</span> <span
  m="243460">It's</span> <span m="243600">not</span> <span m="243770">a</span>
  <span m="243810">bad</span> <span m="244040">thing.</span> <span
  m="244160">Actually,</span> <span m="244720">randomized</span> <span
  m="245220">signature</span> <span m="246790">is</span> <span
  m="247000">considered</span> <span m="247950">more</span> <span
  m="248160">secure.</span> <span m="248520">They</span> <span m="248950">are
  less</span> <span m="249130">efficient.</span> <span m="259370">Any</span>
  <span m="259500">other</span> <span m="259750">thoughts?</span></p><p><span
  m="265436">AUDIENCE: Do you</span> <span m="265923">care</span> <span
  m="266410">about speed at all,</span> <span m="266897">like</span> <span
  m="267384">how</span> <span m="267871">long</span> <span m="268358">it
  takes</span> <span m="268845">to sign and verify?</span></p><p><span
  m="269820">PROFESSOR: That's</span> <span m="270210">definitely</span> <span
  m="270620">one,</span> <span m="271270">but</span> <span m="272440">we</span>
  <span m="272690">haven't</span> <span m="272930">got</span> <span
  m="273090">any</span> <span m="273280">scheme</span> <span
  m="273530">yet,</span> <span m="273760">so</span> <span m="274470">we</span>
  <span m="274890">care</span> <span m="275090">about</span> <span
  m="275380">functionality</span> <span m="275970">first.</span> <span
  m="278280">There</span> <span m="278500">are</span> <span
  m="279110">faster</span> <span m="279900">signatures</span> <span
  m="280730">and</span> <span m="281170">slower ones.</span> <span
  m="283250">So</span> <span m="283430">the</span> <span m="283490">first</span>
  <span m="283740">one</span> <span m="283930">is</span> <span
  m="284050">actually</span> <span m="284710">very</span> <span
  m="284940">trivial.</span> <span m="287280">We</span> <span
  m="287460">first</span> <span m="287730">want</span> <span
  m="287970">correctness.</span> <span m="290590">What</span> <span
  m="290700">does</span> <span m="290830">that</span> <span
  m="290970">mean?</span></p><p><span m="294330">That</span> <span
  m="294470">means</span> <span m="295270">if</span> <span
  m="295530">this</span> <span m="296250">sigma</span> <span
  m="296880">is</span> <span m="297080">indeed</span> <span
  m="297780">generated</span> <span m="299040">by</span> <span
  m="299290">the</span> <span m="299560">sign</span> <span
  m="299880">function</span> <span m="300680">that</span> <span
  m="300870">verified</span> <span m="301420">that</span> <span m="301880">the
  output</span> <span m="302030">1.</span> <span m="303020">Otherwise,</span>
  <span m="303420">they</span> <span m="303500">should</span> <span
  m="303680">put</span> <span m="304130">output</span> <span
  m="304220">0.</span> <span m="305610">That's</span> <span
  m="305830">actually</span> <span m="306150">the</span> <span
  m="307290">first</span> <span m="307860">and</span> <span
  m="308040">the</span> <span m="308110">most</span> <span
  m="308430">basic</span> <span m="308760">property</span> <span m="309000">we
  want.</span> <span m="312100">I</span> <span m="312860">don't</span> <span
  m="312970">want</span> <span m="313100">to</span> <span
  m="313150">write</span> <span m="313330">it</span> <span
  m="313500">because</span> <span m="313850">it's--</span> <span
  m="316720">so</span> <span m="316880">the</span> <span m="317020">other</span>
  <span m="317180">one.</span></p><p><span m="320230">So</span> <span
  m="320340">your</span> <span m="320610">answer</span> <span
  m="320890">is</span> <span m="321000">very</span> <span
  m="321210">close</span> <span m="321700">that</span> <span
  m="322750">you</span> <span m="322870">don't</span> <span
  m="322990">want</span> <span m="323130">to</span> <span
  m="323180">extract</span> <span m="323580">the</span> <span
  m="323670">secret</span> <span m="323960">key.</span> <span
  m="326060">But</span> <span m="326330">to</span> <span m="326450">make</span>
  <span m="326630">it</span> <span m="326710">more</span> <span
  m="326850">general,</span> <span m="327600">what</span> <span
  m="327770">we</span> <span m="328060">really</span> <span
  m="328290">want</span> <span m="329010">is</span> <span
  m="330010">unforgeability.</span> <span m="336910">That</span> <span
  m="337140">means</span> <span m="337790">if</span> <span m="337940">I</span>
  <span m="338050">have</span> <span m="338260">the</span> <span
  m="338350">secret</span> <span m="338630">key</span> <span
  m="339160">and</span> <span m="340050">someone</span> <span
  m="340390">else--</span> <span m="341150">an</span> <span
  m="341350">adversary,</span> <span m="341600">who</span> <span
  m="341860">does</span> <span m="342040">not</span> <span
  m="342250">have</span> <span m="342400">the</span> <span
  m="342490">secret</span> <span m="342790">key--</span> <span
  m="343430">should</span> <span m="343740">not</span> <span
  m="344040">be</span> <span m="344170">able</span> <span m="345040">to</span>
  <span m="346020">sign</span> <span m="346600">the</span> <span
  m="346670">message</span> <span m="347180">to</span> <span
  m="347330">pretend</span> <span m="347890">to</span> <span
  m="347980">be</span> <span m="348120">me.</span></p><p><span
  m="351760">So</span> <span m="352140">they</span> <span
  m="352320">should</span> <span m="352560">not</span> <span
  m="353700">be</span> <span m="353830">able</span> <span m="354330">to</span>
  <span m="354440">produce</span> <span m="356860">m star</span> <span
  m="357560">sigma star,</span> <span m="360130">such</span> <span
  m="360720">that</span> <span m="364670">it</span> <span
  m="364810">verifies.</span> <span m="368940">Make</span> <span
  m="369080">sense?</span> <span m="372200">So</span> <span
  m="372630">what</span> <span m="372790">you</span> <span
  m="372910">said</span> <span m="373240">is</span> <span m="373460">a</span>
  <span m="373550">special</span> <span m="373890">case</span> <span
  m="374110">of</span> <span m="374240">this.</span> <span m="374650">So</span>
  <span m="374870">if</span> <span m="376250">they</span> <span
  m="376410">can</span> <span m="376640">extract,</span> <span
  m="377130">somehow</span> <span m="377440">extract</span> <span
  m="377920">the</span> <span m="378020">secret</span> <span
  m="378350">key,</span> <span m="378790">then,</span> <span
  m="379050">of</span> <span m="379170">course</span> <span
  m="379410">they</span> <span m="379530">can</span> <span
  m="380280">forge</span> <span m="380620">my</span> <span
  m="380760">signature</span> <span m="381890">on</span> <span
  m="382120">any</span> <span m="382340">other</span> <span
  m="382490">messages.</span> <span m="384980">But</span> <span
  m="385600">we</span> <span m="385750">do</span> <span m="385900">want</span>
  <span m="386090">to</span> <span m="386260">also</span> <span
  m="386590">prevent</span> <span m="386990">attack</span> <span
  m="387450">where</span> <span m="387630">they</span> <span
  m="388950">cannot</span> <span m="389320">extract</span> <span
  m="389690">the</span> <span m="389780">secret</span> <span
  m="390120">key,</span> <span m="390370">but</span> <span
  m="390520">they</span> <span m="390630">somehow</span> <span
  m="390980">can</span> <span m="391620">forge</span> <span m="392180">another
  signature.</span></p><p><span m="394380">But</span> <span
  m="394520">usually</span> <span m="394850">we</span> <span
  m="394960">want</span> <span m="395260">to</span> <span m="395390">make</span>
  <span m="395660">the</span> <span m="397910">adversary</span> <span
  m="399230">more</span> <span m="399420">powerful</span> <span
  m="401100">because</span> <span m="402350">then</span> <span
  m="402950">we</span> <span m="403090">have</span> <span
  m="403260">higher</span> <span m="403550">confidence</span> <span
  m="404040">that</span> <span m="405160">we</span> <span
  m="405440">won't</span> <span m="405690">be</span> <span
  m="405830">attacked.</span> <span m="406960">So</span> <span
  m="407300">adversary</span> <span m="408800">is</span> <span
  m="410010">totally</span> <span m="410510">reasonable</span> <span
  m="410990">for</span> <span m="411220">it</span> <span m="411550">to</span>
  <span m="411710">see</span> <span m="412360">a</span> <span
  m="412480">bunch</span> <span m="412730">of</span> <span
  m="412850">messages</span> <span m="413380">from</span> <span
  m="413640">me.</span> <span m="420240">Because</span> <span
  m="420600">I</span> <span m="420750">am</span> <span m="420960">signing</span>
  <span m="421500">messages</span> <span m="422310">and</span> <span
  m="422420">output</span> <span m="422610">it</span> <span m="423120">to</span>
  <span m="423250">the</span> <span m="423350">world.</span> <span
  m="424070">So</span> <span m="424440">an</span> <span
  m="424750">adversary</span> <span m="425350">may</span> <span
  m="425630">have</span> <span m="425820">seen</span> <span
  m="426190">some</span> <span m="426470">of</span> <span m="426600">the</span>
  <span m="426910">message,</span> <span m="427840">signature</span> <span
  m="428300">pairs,</span> <span m="429690">I</span> <span
  m="430010">generated.</span> <span m="431590">But</span> <span
  m="431750">still</span> <span m="432190">we</span> <span m="432380">do</span>
  <span m="432510">not</span> <span m="432830">want</span> <span
  m="433170">to</span> <span m="433990">create</span> <span m="434380">a</span>
  <span m="434540">forgery.</span></p><p><span m="435050">Now</span> <span
  m="435530">how</span> <span m="435720">is</span> <span m="435850">that</span>
  <span m="436010">defined?</span> <span m="437710">Because</span> <span
  m="437820">see</span> <span m="438060">you can</span> <span
  m="438180">definitely</span> <span m="438580">send</span> <span
  m="438900">one</span> <span m="439080">of</span> <span m="439190">these</span>
  <span m="439370">back.</span> <span m="440440">That's</span> <span
  m="440780">a</span> <span m="441160">valid</span> <span
  m="442370">message</span> <span m="442760">signature</span> <span
  m="443210">pair.</span> <span m="444002">So</span> <span m="444400">our</span>
  <span m="444790">unforgeability</span> <span m="445370">requirement</span>
  <span m="446110">is</span> <span m="446300">defined</span> <span
  m="446690">to</span> <span m="446790">be--</span> <span m="448470">he</span>
  <span m="448610">should</span> <span m="448880">not</span> <span
  m="449560">be</span> <span m="449710">able</span> <span m="450060">to</span>
  <span m="450810">send</span> <span m="451150">such</span> <span
  m="451390">a</span> <span m="451470">pair</span> <span m="451960">where</span>
  <span m="452210">m star</span> <span m="454000">is</span> <span
  m="454250">different</span> <span m="455750">from</span> <span
  m="456510">any</span> <span m="456770">message</span> <span
  m="457855">he</span> <span m="458320">has</span> <span
  m="458580">already</span> <span m="458870">seen.</span> <span m="461730">There
  is</span> <span m="462040">no</span> <span m="462230">way</span> <span
  m="462480">to</span> <span m="463050">prevent</span> <span
  m="464170">the</span> <span m="464440">adversary</span> <span
  m="464610">from</span> <span m="465240">sending</span> <span
  m="465750">one</span> <span m="465980">of</span> <span m="466090">the</span>
  <span m="466210">message</span> <span m="466810">signature</span> <span
  m="467260">pairs</span> <span m="468100">he</span> <span m="468190">has</span>
  <span m="468350">seen</span> <span m="468540">before.</span></p><p><span
  m="477350">So</span> <span m="477570">far,</span> <span
  m="478970">pretty</span> <span m="479200">straightforward.</span> <span
  m="484080">Now,</span> <span m="484170">how</span> <span m="484340">can</span>
  <span m="484470">we</span> <span m="484630">get</span> <span
  m="486160">digital</span> <span m="486470">signatures?</span> <span
  m="488040">So in the</span> <span m="488350">early</span> <span
  m="488630">days,</span> <span m="492200">researchers--</span> <span
  m="493060">and</span> <span m="493460">it's</span> <span
  m="493590">actually</span> <span m="494510">great</span> <span
  m="494930">computer</span> <span m="495230">scientists--</span> <span
  m="496040">they</span> <span m="496160">proposed</span> <span
  m="498710">a</span> <span m="498790">digital</span> <span
  m="499180">signature</span> <span m="501510">can</span> <span
  m="501720">be</span> <span m="501890">implemented</span> <span
  m="508430">as</span> <span m="508700">the</span> <span
  m="508790">inverse</span> <span m="510350">of</span> <span
  m="511570">public</span> <span m="512250">key</span> <span
  m="512440">encryption.</span> <span m="519460">What</span> <span
  m="519659">does</span> <span m="519700">that</span> <span
  m="519909">mean?</span> <span m="520955">So</span> <span
  m="521330">I'll</span> <span m="521549">use</span> <span m="521960">RSA</span>
  <span m="522450">as the</span> <span m="522590">example.</span></p><p><span
  m="527280">So</span> <span m="527490">RSA</span> <span
  m="528400">encryption</span> <span m="531050">is</span> <span
  m="534480">m</span> <span m="534780">to</span> <span m="534900">the e</span>
  <span m="535940">mod</span> <span m="536190">n.</span> <span
  m="537720">The</span> <span m="537850">encryption</span> <span
  m="538430">is</span> <span m="539950">c</span> <span m="540320">to</span>
  <span m="540460">the</span> <span m="540765">d</span> <span
  m="542250">mod</span> <span m="542450">n.</span> <span m="551380">So</span>
  <span m="551560">the</span> <span m="551660">first</span> <span
  m="551950">attempt</span> <span m="552500">is</span> <span m="553410">we
  will</span> <span m="553680">just</span> <span m="555110">use</span> <span
  m="555340">this</span> <span m="556150">as</span> <span m="556460">our</span>
  <span m="559170">sign</span> <span m="560260">function</span> <span
  m="561730">and</span> <span m="561880">use</span> <span m="562140">this</span>
  <span m="564200">as</span> <span m="564570">our verify</span> <span
  m="564820">function.</span> <span m="567150">So</span> <span
  m="567370">now</span> <span m="568170">the</span> <span
  m="568290">symbol</span> <span m="568760">is</span> <span m="568860">a</span>
  <span m="568970">little</span> <span m="569040">bit</span> <span
  m="569240">confusing.</span> <span m="570130">So</span> <span
  m="570230">now</span> <span m="570400">I'm</span> <span
  m="570580">signing</span> <span m="571300">a</span> <span
  m="571400">message</span> <span m="572920">[INAUDIBLE]</span> <span
  m="573330">c.</span></p><p><span m="576300">Let</span> <span
  m="576520">me</span> <span m="576640">actually</span> <span
  m="576950">change</span> <span m="577210">it.</span> <span m="578290">This
  is</span> <span m="578570">RSA</span> <span m="579030">encryption.</span>
  <span m="579520">I'm</span> <span m="579630">going</span> <span
  m="579840">to</span> <span m="579950">transform</span> <span
  m="580490">it</span> <span m="580770">into</span> <span
  m="581710">signature</span> <span m="582250">scheme</span> <span
  m="583180">where</span> <span m="583370">sign</span> <span
  m="584540">signs</span> <span m="584860">a</span> <span
  m="584920">message,</span> <span m="585440">and</span> <span
  m="585650">verify,</span> <span m="586870">raise</span> <span
  m="587400">the</span> <span m="587530">signature</span> <span
  m="587990">sigma</span> <span m="588600">to</span> <span m="589230">the</span>
  <span m="589320">power</span> <span m="589570">of</span> <span
  m="589640">e,</span> <span m="591570">and</span> <span
  m="591860">checks</span> <span m="595720">whether</span> <span
  m="596000">or</span> <span m="596100">not</span> <span m="597190">I</span>
  <span m="597350">get</span> <span m="597600">back</span> <span
  m="597790">my</span> <span m="597900">message.</span></p><p><span
  m="603590">So</span> <span m="603700">this</span> <span
  m="604060">actually</span> <span m="604440">makes</span> <span
  m="604750">a</span> <span m="604800">lot</span> <span m="604970">of</span>
  <span m="605070">sense.</span> <span m="606340">Why?</span> <span
  m="606970">Because</span> <span m="610020">think</span> <span
  m="610730">of</span> <span m="610850">m</span> <span m="611150">as</span>
  <span m="611330">a</span> <span m="611400">ciphertext.</span> <span
  m="612890">Then</span> <span m="613160">if</span> <span m="613320">I</span>
  <span m="613410">decrypt</span> <span m="613910">it,</span> <span
  m="615350">and</span> <span m="615520">then</span> <span
  m="615730">re-encrypt</span> <span m="616220">it,</span> <span
  m="618500">I</span> <span m="618630">should</span> <span m="618860">get</span>
  <span m="619050">back</span> <span m="619450">my</span> <span
  m="619780">ciphertext.</span> <span m="620560">So</span> <span
  m="620910">correctness--</span> <span m="622950">we</span> <span
  m="623080">have</span> <span m="623270">correctness.</span></p><p><span
  m="626480">And</span> <span m="626780">why</span> <span m="626980">is</span>
  <span m="627080">it</span> <span m="627170">unforgeable?</span> <span
  m="629630">Because</span> <span m="630000">an</span> <span
  m="630170">attacker</span> <span m="630610">does</span> <span
  m="630790">not</span> <span m="630980">have</span> <span m="631150">the</span>
  <span m="631280">secret key,</span> <span m="632400">so</span> <span
  m="632590">he</span> <span m="632700">should</span> <span
  m="633270">not</span> <span m="633470">be</span> <span m="633650">able</span>
  <span m="633880">to</span> <span m="634690">decrypt</span> <span
  m="635830">this</span> <span m="636850">m</span> <span m="637050">here.</span>
  <span m="639960">He cannot</span> <span m="640340">run</span> <span
  m="640480">this</span> <span m="640660">algorithm.</span> <span
  m="646040">That's</span> <span m="646260">the</span> <span
  m="646390">reasoning</span> <span m="646740">behind</span> <span
  m="647050">it.</span> <span m="648670">So far so</span> <span
  m="648760">good?</span></p><p><span m="653630">But,</span> <span
  m="653820">unfortunately,</span> <span m="656140">it</span> <span
  m="656260">is</span> <span m="656400">broken.</span> <span
  m="658850">And</span> <span m="660690">so</span> <span m="660880">I'll</span>
  <span m="661890">give</span> <span m="662050">you,</span> <span
  m="663290">say,</span> <span m="663560">seven</span> <span
  m="663800">minutes</span> <span m="664130">to</span> <span
  m="664270">think</span> <span m="664440">about</span> <span
  m="664620">it.</span> <span m="665350">Can</span> <span m="665480">you</span>
  <span m="665660">come</span> <span m="665840">up</span> <span
  m="666070">with</span> <span m="666270">an</span> <span
  m="666520">attack,</span> <span m="667050">a</span> <span
  m="667160">forgery?</span> <span m="669680">You</span> <span
  m="669790">can</span> <span m="669940">see</span> <span m="670150">a</span>
  <span m="670200">bunch</span> <span m="670390">of</span> <span
  m="670490">messages</span> <span m="671200">and</span> <span
  m="671360">then</span> <span m="671740">output</span> <span
  m="671950">a</span> <span m="672880">forgery</span> <span
  m="674080">for</span> <span m="674400">a</span> <span
  m="674440">message</span> <span m="674810">you</span> <span
  m="675460">haven't</span> <span m="675730">seen</span> <span
  m="675870">before.</span> <span m="703650">So</span> <span
  m="703970">is</span> <span m="704070">the</span> <span
  m="704350">algorithm</span> <span m="704630">clear?</span></p><p><span
  m="754186">AUDIENCE: [INAUDIBLE].</span></p><p><span m="757070">PROFESSOR:
  Can</span> <span m="757490">you speak</span> <span
  m="757630">louder?</span></p><p><span m="757860">AUDIENCE: Is it just</span>
  <span m="758348">the product</span> <span m="758836">of any
  messages?</span></p><p><span m="760790">PROFESSOR: Exactly.</span> <span
  m="762000">So</span> <span m="762280">if</span> <span m="762570">an</span>
  <span m="762660">adversary</span> <span m="763280">had</span> <span
  m="763450">seen</span> <span m="763810">a</span> <span m="763860">bunch</span>
  <span m="764070">of</span> <span m="764160">messages--</span> <span
  m="765990">because</span> <span m="766300">RSA</span> <span
  m="766880">has</span> <span m="767180">this</span> <span
  m="769070">sometimes</span> <span m="769570">good,</span> <span
  m="769810">sometimes</span> <span m="770220">nice,</span> <span
  m="770440">sometimes</span> <span m="770840">bad</span> <span
  m="771130">property,</span> <span m="771870">that</span> <span
  m="772140">is</span> <span m="773180">multiplicative,</span> <span
  m="774360">homomorphic,</span> <span m="776680">or</span> <span
  m="777890">to</span> <span m="778210">use</span> <span m="778330">a</span>
  <span m="778490">less</span> <span m="778730">fancy</span> <span
  m="779030">word--</span> <span m="779420">malleable.</span> <span
  m="780910">So</span> <span m="781700">if</span> <span m="781930">they,</span>
  <span m="782060">an</span> <span m="782290">adversary,</span> <span
  m="782580">sees</span> <span m="783180">this</span> <span
  m="783340">message,</span> <span m="784530">it</span> <span
  m="784720">can</span> <span m="785590">set</span> <span m="785920">m
  star</span> <span m="786760">to</span> <span m="786960">be</span> <span
  m="787675">m1</span> <span m="788410">times</span> <span m="788740">m2</span>
  <span m="789640">and</span> <span m="790140">sigma star</span> <span
  m="791310">to</span> <span m="791660">sigma</span> <span m="792070">1</span>
  <span m="792700">times</span> <span m="793350">sigma</span> <span
  m="793700">2.</span> <span m="795700">You</span> <span m="795820">can</span>
  <span m="795990">check.</span> <span m="796460">This</span> <span
  m="796700">is</span> <span m="796850">a</span> <span m="797180">valid</span>
  <span m="797540">signature,</span> <span m="798420">message</span> <span
  m="798780">signature</span> <span m="799030">pair.</span></p><p><span
  m="804380">You</span> <span m="804530">take</span> <span
  m="804810">this</span> <span m="805160">entire</span> <span
  m="805480">thing</span> <span m="806100">raised</span> <span
  m="806310">to</span> <span m="806430">d.</span> <span m="807980">They
  are</span> <span m="808230">raised</span> <span m="808330">to</span> <span
  m="808470">d</span> <span m="808930">individually</span> <span
  m="809500">and</span> <span m="809650">then</span> <span
  m="809820">multiply</span> <span m="810190">together,</span> <span
  m="810520">and</span> <span m="810770">that's</span> <span
  m="810950">exactly</span> <span m="811660">this</span> <span
  m="811820">message</span> <span m="812170">here.</span> <span
  m="817320">Attack</span> <span m="817590">one.</span> <span
  m="818370">OK.</span> <span m="818860">There's</span> <span
  m="819090">actually</span> <span m="819430">another</span> <span
  m="819720">attack.</span> <span m="823800">That's</span> <span
  m="824620">even</span> <span m="825590">simpler</span> <span
  m="827160">and</span> <span m="827340">tells</span> <span
  m="827560">you</span> <span m="827720">this</span> <span
  m="827960">scheme</span> <span m="828220">is</span> <span
  m="829070">even</span> <span m="829360">more</span> <span
  m="829510">broken.</span></p><p><span m="837020">So</span> <span
  m="837180">all</span> <span m="837390">I</span> <span m="837440">want</span>
  <span m="837610">to</span> <span m="837680">do</span> <span
  m="838330">is</span> <span m="838570">to</span> <span m="838830">come</span>
  <span m="839010">up</span> <span m="839160">with</span> <span
  m="839320">a</span> <span m="839360">sigma</span> <span m="840220">when</span>
  <span m="840400">it's</span> <span m="840480">raised</span> <span
  m="840740">to</span> <span m="840900">e,</span> <span m="842100">that's</span>
  <span m="842320">equal</span> <span m="842590">to</span> <span
  m="842720">m.</span> <span m="843690">So</span> <span m="843950">I'm</span>
  <span m="844110">going</span> <span m="844370">to</span> <span
  m="845760">select</span> <span m="846230">the</span> <span
  m="846410">sigma,</span> <span m="848670">compute,</span> <span
  m="852770">m</span> <span m="854130">sigma</span> <span
  m="854570">raised</span> <span m="854920">to e,</span> <span
  m="855270">because</span> <span m="855540">e</span> <span m="855850">is
  my</span> <span m="855980">public</span> <span m="856280">key,</span> <span
  m="858220">mod</span> <span m="858590">m.</span> <span m="858990">I</span>
  <span m="859090">can</span> <span m="859230">do</span> <span
  m="859340">that.</span> <span m="859830">And</span> <span
  m="860135">then</span> <span m="860440">output</span> <span
  m="860730">sigma</span> <span m="861020">m--</span> <span m="862042">oh</span>
  <span m="862410">sorry, m</span> <span m="862630">sigma.</span></p><p><span
  m="866800">I</span> <span m="866880">select</span> <span m="867210">the</span>
  <span m="867380">signature</span> <span m="867720">first,</span> <span
  m="868260">and</span> <span m="868490">I</span> <span m="868560">raise</span>
  <span m="868860">it</span> <span m="868990">to</span> <span
  m="869640">the</span> <span m="869810">power</span> <span m="870100">of</span>
  <span m="870160">e.</span> <span m="870490">I get</span> <span
  m="870740">a</span> <span m="872070">very</span> <span
  m="872250">strange</span> <span m="872580">message,</span> <span
  m="873090">but it</span> <span m="873320">doesn't</span> <span
  m="873520">matter.</span> <span m="874030">That's</span> <span
  m="874260">my</span> <span m="874420">forgery.</span> <span
  m="882140">OK,</span> <span m="882330">so</span> <span m="882480">now</span>
  <span m="882630">you</span> <span m="882750">can</span> <span
  m="882900">see</span> <span m="883420">this</span> <span
  m="883640">scheme</span> <span m="883880">is</span> <span
  m="885380">basically</span> <span m="885830">totally</span> <span
  m="886300">broken.</span> <span m="887340">But</span> <span
  m="887540">they</span> <span m="887630">actually</span> <span
  m="888050">come</span> <span m="888260">from</span> <span
  m="888540">our,</span> <span m="889315">well,</span> <span
  m="889660">several</span> <span m="890380">renown</span> <span
  m="890720">scientists.</span></p><p><span m="891055">But</span> <span
  m="891390">why</span> <span m="891590">is</span> <span m="891700">that</span>
  <span m="891850">a</span> <span m="891900">case?</span> <span
  m="892730">Because</span> <span m="893160">actually</span> <span
  m="893580">that</span> <span m="893840">definition</span> <span
  m="894560">didn't</span> <span m="894820">exist</span> <span
  m="895520">when</span> <span m="895840">they</span> <span
  m="895970">were</span> <span m="896120">trying</span> <span
  m="896420">to</span> <span m="897640">when</span> <span m="897880">they
  were</span> <span m="898220">working</span> <span m="898550">on</span> <span
  m="898630">this</span> <span m="898820">problem.</span> <span
  m="901850">And</span> <span m="902180">so</span> <span m="902350">that</span>
  <span m="902650">definition</span> <span m="903340">looks</span> <span
  m="903830">obvious</span> <span m="904290">today,</span> <span
  m="904670">but</span> <span m="904900">it's</span> <span
  m="905110">actually</span> <span m="905490">not</span> <span
  m="905950">obvious</span> <span m="906360">at</span> <span
  m="906520">all.</span></p><p><span m="907120">And</span> <span
  m="908570">I</span> <span m="908680">think</span> <span m="909510">this</span>
  <span m="911000">algorithm</span> <span m="911520">came</span> <span
  m="912030">in the</span> <span m="912280">70s,</span> <span
  m="912640">'78.</span> <span m="913740">And</span> <span m="914260">in</span>
  <span m="914730">'82,</span> <span m="915760">Goldwasser</span> <span
  m="915990">and</span> <span m="916350">Micali,</span> <span
  m="916880">two</span> <span m="917010">professors</span> <span
  m="917480">from</span> <span m="917680">MIT,</span> <span
  m="918210">proposed</span> <span m="918580">the</span> <span
  m="918670">definition</span> <span m="919250">for</span> <span
  m="919560">signature</span> <span m="920180">encryption</span> <span
  m="920840">and</span> <span m="920950">basically</span> <span
  m="921430">everything</span> <span m="921735">in</span> <span
  m="922040">cryptography.</span> <span m="923000">And</span> <span
  m="923210">they</span> <span m="923290">won</span> <span
  m="923560">another</span> <span m="923800">Turing</span> <span
  m="923960">Award</span> <span m="924180">for</span> <span
  m="924360">that.</span></p><p><span m="927940">OK,</span> <span
  m="928280">so</span> <span m="928480">let's</span> <span m="928670">try</span>
  <span m="928830">to</span> <span m="928940">fix</span> <span
  m="929160">it.</span> <span m="937570">Any</span> <span
  m="937820">ideas?</span> <span m="942760">We</span> <span m="942980">do</span>
  <span m="943100">not</span> <span m="943300">want</span> <span
  m="943450">to</span> <span m="943550">change</span> <span
  m="943890">the</span> <span m="946040">framework.</span> <span
  m="947150">Let's</span> <span m="947330">still</span> <span
  m="947650">use</span> <span m="947930">RSA</span> <span m="949140">and</span>
  <span m="949960">combine</span> <span m="950410">it</span> <span
  m="950570">with</span> <span m="950770">some</span> <span
  m="951390">other</span> <span m="953250">primitive</span> <span
  m="953670">you</span> <span m="953770">have</span> <span
  m="953920">seen</span> <span m="955040">to</span> <span m="955160">try</span>
  <span m="955340">to</span> <span m="955450">fix</span> <span
  m="955670">it.</span></p><p><span m="988680">What</span> <span
  m="988920">do</span> <span m="988980">we want</span> <span
  m="989150">to</span> <span m="989210">do?</span> <span m="989480">We</span>
  <span m="989550">want</span> <span m="989740">to</span> <span
  m="989890">break</span> <span m="990240">this</span> <span
  m="991910">multiplicative</span> <span m="992960">property.</span> <span
  m="997190">And</span> <span m="997360">we</span> <span m="997470">want</span>
  <span m="997640">to</span> <span m="997780">break</span> <span
  m="998090">this,</span> <span m="1000430">this</span> <span
  m="1000640">step,</span> <span m="1001640">whatever</span> <span
  m="1001980">it's</span> <span m="1002110">called.</span> <span
  m="1004960">Go</span> <span m="1005060">ahead.</span></p><p><span
  m="1005230">AUDIENCE: Can we</span> <span m="1006694">change</span> <span
  m="1007670">the</span> <span m="1008158">n,</span> <span
  m="1009622">maybe?</span></p><p><span m="1010600">PROFESSOR: Change</span>
  <span m="1011260">this</span> <span m="1011510">n?</span></p><p><span
  m="1011840">AUDIENCE: Yeah.</span></p><p><span m="1012770">PROFESSOR:
  Right</span> <span m="1013000">now,</span> <span m="1013200">just</span> <span
  m="1013380">to</span> <span m="1013520">remind</span> <span
  m="1013810">you,</span> <span m="1013980">it's</span> <span
  m="1014220">a</span> <span m="1014530">product</span> <span
  m="1014960">of</span> <span m="1015070">two</span> <span
  m="1015280">primes,</span> <span m="1015750">OK, pq.</span> <span
  m="1017850">It's</span> <span m="1017990">a</span> <span
  m="1018060">product</span> <span m="1018450">of</span> <span
  m="1018500">two</span> <span m="1018610">primes.</span> <span m="1018850">It's
  how</span> <span m="1019280">RSA</span> <span m="1019890">works.</span> <span
  m="1021330">What's</span> <span m="1021490">your</span> <span
  m="1021680">idea?</span> <span m="1022170">Go</span> <span
  m="1022280">ahead.</span></p><p><span m="1022500">AUDIENCE: Before</span>
  <span m="1022973">it</span> <span m="1023446">raised</span> <span
  m="1023919">to the</span> <span m="1025338">power,</span> <span m="1026284">we
  can get</span> <span m="1026757">the</span> <span m="1027230">hash</span>
  <span m="1027703">function</span> <span m="1028176">of it.</span></p><p><span
  m="1028650">PROFESSOR: Exactly.</span> <span m="1031660">Let's</span> <span
  m="1031839">just</span> <span m="1032020">make</span> <span
  m="1032190">a</span> <span m="1032260">small</span> <span
  m="1032520">change.</span> <span m="1035220">So</span> <span
  m="1035579">sign</span> <span m="1036359">will</span> <span
  m="1036640">be</span> <span m="1037800">hash</span> <span
  m="1038050">of</span> <span m="1038190">m,</span> <span
  m="1040420">raised</span> <span m="1040660">to</span> <span
  m="1040730">d.</span> <span m="1041619">And</span> <span
  m="1044349">verify</span> <span m="1044849">will</span> <span
  m="1045050">be--</span> <span m="1048540">just</span> <span
  m="1048780">check</span> <span m="1049000">whether</span> <span
  m="1049250">hash</span> <span m="1049530">of</span> <span m="1049660">m</span>
  <span m="1050130">equals</span> <span m="1051810">signature</span> <span
  m="1052390">is</span> <span m="1052490">to</span> <span m="1052570">e.</span>
  <span m="1060710">This</span> <span m="1062030">indeed</span> <span
  m="1062420">fixes</span> <span m="1063370">these</span> <span
  m="1063690">attacks.</span> <span m="1064530">Why?</span> <span
  m="1064810">Because</span> <span m="1065100">now</span> <span
  m="1065350">you</span> <span m="1065570">need--</span> <span
  m="1066090">well,</span> <span m="1066830">if</span> <span
  m="1066950">you</span> <span m="1067070">do</span> <span
  m="1067210">this--</span> <span m="1067890">hash</span> <span
  m="1068200">of</span> <span m="1068340">m</span> <span m="1068700">and</span>
  <span m="1069060">1</span> <span m="1069420">times</span> <span
  m="1069950">hash</span> <span m="1070230">of</span> <span
  m="1070450">m2</span> <span m="1070820">is</span> <span m="1070990">not</span>
  <span m="1071200">going</span> <span m="1071380">to</span> <span
  m="1071490">be</span> <span m="1071690">hash</span> <span
  m="1071930">of</span> <span m="1072100">m star</span> <span
  m="1073250">because</span> <span m="1073670">hash is</span> <span
  m="1073780">supposed</span> <span m="1074130">to</span> <span
  m="1074210">be</span> <span m="1074990">[INAUDIBLE]</span> <span
  m="1075270">random.</span></p><p><span m="1076450">That's</span> <span
  m="1076660">not</span> <span m="1076840">going</span> <span
  m="1077000">to</span> <span m="1077090">work.</span> <span
  m="1077900">And</span> <span m="1078090">here,</span> <span
  m="1081150">what</span> <span m="1081320">the</span> <span
  m="1081410">attacker</span> <span m="1081780">needs</span> <span
  m="1081920">to</span> <span m="1082040">do</span> <span m="1084970">is</span>
  <span m="1085150">to</span> <span m="1085290">find</span> <span
  m="1086560">hash</span> <span m="1086890">of</span> <span
  m="1087030">m,</span> <span m="1088220">such</span> <span
  m="1088550">that</span> <span m="1089210">it's</span> <span
  m="1090000">sigma</span> <span m="1090420">raised to e.</span> <span
  m="1091360">It</span> <span m="1091520">can</span> <span
  m="1091670">still</span> <span m="1091880">do</span> <span
  m="1092030">this,</span> <span m="1092710">but</span> <span
  m="1092910">it</span> <span m="1093260">does</span> <span
  m="1093440">not</span> <span m="1093690">know</span> <span
  m="1094150">what</span> <span m="1094340">this</span> <span
  m="1094500">message</span> <span m="1094870">is</span> <span
  m="1095730">because</span> <span m="1096060">of the</span> <span
  m="1096920">one-wayness</span> <span m="1098300">of</span> <span
  m="1098450">hash</span> <span m="1098640">function.</span> <span
  m="1099740">If</span> <span m="1099890">we</span> <span m="1100030">use</span>
  <span m="1100240">a</span> <span m="1100410">good</span> <span
  m="1100850">hash</span> <span m="1101000">function</span> <span
  m="1101330">there,</span> <span m="1102450">then</span> <span
  m="1102850">it</span> <span m="1103120">indeed</span> <span
  m="1103510">fixes</span> <span m="1104350">both the</span> <span
  m="1104620">attacks.</span> <span m="1105490">But</span> <span
  m="1105650">we</span> <span m="1105730">have</span> <span
  m="1105880">seen</span> <span m="1106110">the</span> <span
  m="1106200">lecture</span> <span m="1106570">that</span> <span
  m="1106750">this</span> <span m="1106910">hash</span> <span
  m="1107120">function</span> <span m="1107790">also</span> <span
  m="1108070">needs</span> <span m="1108270">to</span> <span
  m="1108390">be</span> <span m="1108720">collision</span> <span
  m="1109070">resistant.</span> <span m="1110750">Remember</span> <span
  m="1111050">that?</span> <span m="1112400">A</span> <span
  m="1112960">question?</span></p><p><span m="1113300">AUDIENCE: Isn't the
  message</span> <span m="1113730">public?</span></p><p><span
  m="1115450">PROFESSOR: Yeah,</span> <span m="1115880">the</span> <span
  m="1115950">message--</span> <span m="1117094">oh,</span> <span
  m="1118300">OK.</span> <span m="1120640">Good</span> <span
  m="1120810">point.</span> <span m="1127671">Oh,</span> <span
  m="1128140">no,</span> <span m="1128290">but,</span> <span
  m="1128710">OK,</span> <span m="1128920">you are</span> <span
  m="1129060">talking</span> <span m="1129270">about</span> <span
  m="1129450">this</span> <span m="1129600">attack,</span> <span
  m="1129900">right?</span> <span m="1131070">So</span> <span
  m="1131250">the</span> <span m="1131380">attacker</span> <span
  m="1131870">needs</span> <span m="1132100">to</span> <span
  m="1132270">find</span> <span m="1132600">the</span> <span
  m="1132690">public</span> <span m="1133010">message,</span> <span
  m="1133570">but</span> <span m="1133800">all</span> <span
  m="1133940">he</span> <span m="1134020">can</span> <span m="1134190">do</span>
  <span m="1134410">is</span> <span m="1134550">select</span> <span
  m="1134950">the</span> <span m="1135060">sigma,</span> <span
  m="1136050">and</span> <span m="1136260">raise</span> <span
  m="1136500">it</span> <span m="1136590">to</span> <span
  m="1136680">e.</span></p><p><span m="1137490">That's</span> <span
  m="1137790">going</span> <span m="1137990">to</span> <span
  m="1138100">be</span> <span m="1138430">its</span> <span
  m="1138640">hash</span> <span m="1138930">of</span> <span
  m="1139020">m.</span> <span m="1139640">And</span> <span
  m="1139860">then</span> <span m="1140070">he</span> <span
  m="1140250">cannot</span> <span m="1141860">figure</span> <span
  m="1142100">out</span> <span m="1142260">where</span> <span
  m="1142450">this</span> <span m="1142620">m</span> <span
  m="1142800">is.</span> <span m="1146631">But</span> <span m="1147114">what
  about the other way?</span></p><p><span m="1147597">AUDIENCE: I mean,</span>
  <span m="1148080">if he has</span> <span m="1148563">two messages,</span>
  <span m="1149046">he can</span> <span m="1149529">still get m star,</span>
  <span m="1150012">and</span> <span m="1150495">then get</span> <span
  m="1150978">hash of</span> <span m="1151461">m star.</span></p><p><span
  m="1154370">PROFESSOR: OK,</span> <span m="1154770">so</span> <span
  m="1155120">he</span> <span m="1155380">then</span> <span
  m="1155590">he</span> <span m="1155760">gets,</span> <span m="1156240">has
  of</span> <span m="1156480">m1.</span> <span m="1157030">He</span> <span
  m="1157240">gets</span> <span m="1157450">hash</span> <span
  m="1157650">of</span> <span m="1157690">m2.</span> <span
  m="1158590">But</span> <span m="1158710">you</span> <span
  m="1158840">need</span> <span m="1159000">to</span> <span
  m="1159120">find</span> <span m="1159500">the m star,</span> <span
  m="1160070">such</span> <span m="1160340">that</span> <span
  m="1160520">its</span> <span m="1160700">hash</span> <span
  m="1161020">is</span> <span m="1161180">the</span> <span
  m="1161320">multiplication</span> <span m="1162010">of</span> <span
  m="1162120">these</span> <span m="1162310">two.</span> <span
  m="1163030">And,</span> <span m="1163460">yeah,</span> <span
  m="1163760">he</span> <span m="1163880">does</span> <span
  m="1164050">not</span> <span m="1164230">know</span> <span
  m="1164360">how</span> <span m="1164470">to</span> <span
  m="1164550">find</span> <span m="1164770">that</span> <span
  m="1164930">message.</span> <span m="1173530">So</span> <span
  m="1173760">if</span> <span m="1173950">the</span> <span
  m="1174050">hash</span> <span m="1174500">is</span> <span
  m="1176190">not</span> <span m="1176510">multiplicative,</span> <span
  m="1177560">one-way,</span> <span m="1178130">and</span> <span
  m="1178330">collision</span> <span m="1178650">resistant,</span> <span
  m="1179700">then</span> <span m="1179980">it</span> <span
  m="1180090">seems</span> <span m="1180410">that</span> <span
  m="1181020">we</span> <span m="1181110">have</span> <span
  m="1181260">fixed</span> <span m="1181600">all</span> <span
  m="1181760">the</span> <span m="1182140">attacks</span> <span
  m="1182490">we</span> <span m="1182690">know.</span></p><p><span
  m="1183920">However,</span> <span m="1185570">how</span> <span
  m="1185770">do</span> <span m="1185880">we</span> <span
  m="1186000">know</span> <span m="1186510">there</span> <span
  m="1186720">are</span> <span m="1186790">no</span> <span
  m="1187030">other</span> <span m="1187430">attacks?</span> <span
  m="1188680">So</span> <span m="1188870">actually,</span> <span
  m="1189310">indeed,</span> <span m="1189600">this</span> <span
  m="1189740">is</span> <span m="1189870">a</span> <span m="1189940">good</span>
  <span m="1190120">idea.</span> <span m="1190850">We</span> <span
  m="1191160">have</span> <span m="1194020">several</span> <span
  m="1194630">national</span> <span m="1194980">standards</span> <span
  m="1195730">that</span> <span m="1196050">just</span> <span
  m="1196280">use</span> <span m="1196520">this</span> <span
  m="1197200">but</span> <span m="1197400">slightly</span> <span
  m="1197810">differently.</span> <span m="1198650">I can--</span> <span
  m="1200620">this is</span> <span m="1200880">just</span> <span
  m="1201080">for</span> <span m="1201250">your</span> <span
  m="1201600">information.</span> <span m="1208870">So</span> <span
  m="1209170">there's</span> <span m="1209460">a</span> <span
  m="1209550">standard</span> <span m="1210140">called</span> <span
  m="1211650">[? NC, ?]</span> <span m="1213260">whatever--</span> <span
  m="1214070">X93.1.</span></p><p><span m="1219570">It</span> <span
  m="1220250">uses</span> <span m="1220690">RSA,</span> <span
  m="1222520">this</span> <span m="1222770">word</span> <span
  m="1224670">padding,</span> <span m="1233590">so</span> <span
  m="1233940">it</span> <span m="1234180">takes</span> <span
  m="1234430">the</span> <span m="1234520">hash</span> <span
  m="1234750">of</span> <span m="1234850">the</span> <span
  m="1234950">message</span> <span m="1235410">and</span> <span
  m="1235530">pad</span> <span m="1236280">with</span> <span
  m="1236500">this</span> <span m="1238000">hex</span> <span
  m="1238330">stream,</span> <span m="1239770">and</span> <span
  m="1240730">prepended</span> <span m="1241390">and</span> <span
  m="1241600">append</span> <span m="1241930">another</span> <span
  m="1242240">hex stream.</span> <span m="1243330">Why</span> <span
  m="1243640">do</span> <span m="1243950">they</span> <span
  m="1244060">do</span> <span m="1244210">that?</span> <span
  m="1245810">They</span> <span m="1245940">don't</span> <span
  m="1246080">know</span> <span m="1246210">either,</span> <span
  m="1246640">but</span> <span m="1246910">they</span> <span
  m="1247010">just</span> <span m="1247290">think</span> <span
  m="1247880">it's</span> <span m="1248070">probably</span> <span
  m="1248770">more</span> <span m="1248940">secure</span> <span
  m="1249340">than</span> <span m="1250430">only</span> <span
  m="1250660">using</span> <span m="1250980">a</span> <span
  m="1251030">hash.</span> <span m="1251750">There's</span> <span
  m="1251970">another</span> <span m="1252240">standard</span> <span
  m="1252690">that</span> <span m="1252890">has</span> <span
  m="1253060">a</span> <span m="1253120">different</span> <span
  m="1253420">steam</span> <span m="1253790">and a</span> <span
  m="1253870">difference</span> <span m="1254200">stream</span> <span
  m="1254340">here,</span> <span m="1254760">and</span> <span
  m="1255260">it</span> <span m="1255540">doesn't</span> <span
  m="1255730">matter.</span> <span m="1260140">So</span> <span
  m="1260620">that's</span> <span m="1260840">indeed</span> <span
  m="1261450">a</span> <span m="1261600">weakness</span> <span
  m="1262100">of</span> <span m="1262600">these</span> <span
  m="1263300">types</span> <span m="1263590">of</span> <span
  m="1263870">approaches.</span></p><p><span m="1264940">So</span> <span
  m="1265260">their</span> <span m="1265570">security</span> <span
  m="1266230">is</span> <span m="1266420">what</span> <span
  m="1266630">we</span> <span m="1266790">call</span> <span
  m="1267310">ad</span> <span m="1267510">hoc.</span> <span
  m="1269240">We</span> <span m="1269370">do</span> <span m="1269460">not</span>
  <span m="1269700">know</span> <span m="1269810">how</span> <span
  m="1269940">to</span> <span m="1270020">break</span> <span
  m="1270250">them.</span> <span m="1270780">But</span> <span
  m="1270840">we</span> <span m="1270970">do</span> <span m="1271060">not</span>
  <span m="1271310">know</span> <span m="1271530">how</span> <span
  m="1271680">to</span> <span m="1271800">prove</span> <span
  m="1272120">they</span> <span m="1272240">are</span> <span
  m="1272390">secure</span> <span m="1272750">either.</span> <span
  m="1276000">Yet,</span> <span m="1276310">that's</span> <span
  m="1276540">what</span> <span m="1276770">people</span> <span
  m="1277000">do</span> <span m="1277270">in</span> <span
  m="1277420">practice.</span></p><p><span m="1280620">So,</span> <span
  m="1280770">unfortunately,</span> <span m="1281780">that's</span> <span
  m="1283160">all</span> <span m="1283280">I</span> <span m="1283340">can</span>
  <span m="1283520">tell</span> <span m="1283660">you</span> <span
  m="1283770">today,</span> <span m="1284255">so</span> <span
  m="1284530">how</span> <span m="1284980">not</span> <span
  m="1285170">to</span> <span m="1285360">construct</span> <span
  m="1285850">the</span> <span m="1286560">digital</span> <span
  m="1286840">signature.</span> <span m="1287490">I</span> <span
  m="1287600">cannot</span> <span m="1287890">tell</span> <span
  m="1288040">you</span> <span m="1288160">how</span> <span
  m="1288310">to</span> <span m="1288600">construct</span> <span
  m="1289090">the</span> <span m="1289210">secure</span> <span
  m="1289880">digital</span> <span m="1290210">signature</span> <span
  m="1290630">because</span> <span m="1290860">that's</span> <span
  m="1291890">out</span> <span m="1292060">of</span> <span
  m="1292150">the</span> <span m="1292230">scope</span> <span
  m="1292510">of</span> <span m="1292640">this</span> <span
  m="1292810">class.</span> <span m="1293180">And</span> <span
  m="1293470">it's</span> <span m="1294496">a</span> <span
  m="1294880">major</span> <span m="1295160">topic</span> <span
  m="1295660">in</span> <span m="1295970">cryptography.</span> <span
  m="1304790">Any</span> <span m="1304930">questions</span> <span m="1305280">so
  far?</span> <span m="1312822">Go ahead.</span></p><p><span
  m="1313818">AUDIENCE: The hash function</span> <span m="1314316">here</span>
  <span m="1314814">is</span> <span m="1315312">the</span> <span m="1315810">one
  way, yeah?</span></p><p><span m="1317820">PROFESSOR: Yes,</span> <span
  m="1318360">it's</span> <span m="1318800">one-way,</span> <span
  m="1319800">collision</span> <span m="1319880">resistance,</span> <span
  m="1320570">and--</span></p><p><span m="1321220">AUDIENCE: So what is
  the</span> <span m="1321667">use</span> <span m="1322114">of using</span>
  <span m="1322561">the RSA?</span> <span m="1323008">Couldn't</span> <span
  m="1323455">we just</span> <span m="1323902">use the</span> <span
  m="1324349">only</span> <span m="1324796">hash</span> <span
  m="1325250">function then?</span></p><p><span m="1329100">PROFESSOR:
  OK,</span> <span m="1329410">good</span> <span m="1329600">question.</span>
  <span m="1331050">So,</span> <span m="1331330">OK,</span> <span
  m="1331940">let's</span> <span m="1332120">be</span> <span
  m="1332250">clear</span> <span m="1332620">what</span> <span
  m="1333250">you're</span> <span m="1333340">saying.</span></p><p><span
  m="1334725">AUDIENCE: OK,</span> <span m="1335210">never
  mind.</span></p><p><span m="1336430">PROFESSOR: Can you</span> <span
  m="1336560">answer</span> <span m="1336970">your own</span> <span
  m="1337060">question?</span></p><p><span m="1337400">AUDIENCE: So</span> <span
  m="1337892">my question was,</span> <span m="1338384">well,</span> <span
  m="1338876">why</span> <span m="1339368">do we</span> <span m="1339860">have
  to use the RSA?</span> <span m="1340352">Why,</span> <span m="1340844">when we
  have</span> <span m="1341336">the</span> <span m="1341828">hatch
  function?</span> <span m="1342320">You want me--</span> <span
  m="1344780">so</span> <span m="1346256">[INAUDIBLE]</span> <span
  m="1347732">couldn't</span> <span m="1348224">create</span> <span
  m="1349208">the</span> <span m="1349700">forgery.</span> <span
  m="1350684">[INAUDIBLE].</span></p><p><span m="1352580">PROFESSOR: How</span>
  <span m="1352730">does</span> <span m="1352920">it</span> <span
  m="1353170">create</span> <span m="1353470">a</span> <span
  m="1353520">forgery?</span> <span m="1354170">Just</span> <span
  m="1354390">answer</span> <span m="1354540">your own</span> <span
  m="1354740">question.</span> <span m="1355400">Let</span> <span
  m="1355710">everyone</span> <span m="1356030">else</span> <span
  m="1356210">know.</span> <span m="1356540">Maybe</span> <span
  m="1357020">they</span> <span m="1357120">have</span> <span
  m="1357300">the</span> <span m="1357380">same</span> <span
  m="1357540">question.</span> <span m="1359770">So</span> <span
  m="1360130">answer</span> <span m="1360360">your own</span> <span
  m="1360780">question.</span></p><p><span m="1362208">AUDIENCE: So</span> <span
  m="1362707">my</span> <span m="1363206">answer</span> <span
  m="1363705">is</span> <span m="1364204">so</span> <span
  m="1364703">adversary</span> <span m="1365202">can't</span> <span
  m="1365701">just</span> <span m="1366200">choose</span> <span
  m="1366699">random</span> <span m="1367198">message and hash</span> <span
  m="1367697">it and</span> <span m="1368196">[INAUDIBLE].</span></p><p><span
  m="1368700">PROFESSOR: Yeah.</span> <span m="1369730">What's</span> <span
  m="1369910">the</span> <span m="1369990">problem?</span> <span
  m="1370400">Problem</span> <span m="1370740">is</span> <span
  m="1370850">that</span> <span m="1371100">a</span> <span
  m="1371160">hash</span> <span m="1371450">function</span> <span
  m="1371950">is</span> <span m="1372050">a</span> <span
  m="1372100">public</span> <span m="1372410">function</span> <span
  m="1372810">that</span> <span m="1372970">everybody</span> <span
  m="1373390">can</span> <span m="1373520">compute.</span> <span
  m="1374240">So</span> <span m="1374420">the</span> <span
  m="1374530">attacker</span> <span m="1374870">just</span> <span
  m="1375090">chooses</span> <span m="1375220">a</span> <span
  m="1375280">message,</span> <span m="1375640">compute</span> <span
  m="1376060">as hash,</span> <span m="1376880">so</span> <span
  m="1377440">using</span> <span m="1377710">a</span> <span
  m="1377750">hash</span> <span m="1377990">is</span> <span
  m="1378150">not</span> <span m="1378280">a</span> <span
  m="1378320">signature.</span> <span m="1379260">But</span> <span
  m="1379520">good</span> <span m="1379640">point.</span> <span
  m="1379920">I'm</span> <span m="1380070">actually</span> <span
  m="1380390">coming</span> <span m="1380600">to</span> <span
  m="1380690">that.</span> <span m="1382070">So</span> <span
  m="1382600">far</span> <span m="1382940">we</span> <span
  m="1383060">have</span> <span m="1383250">seen</span> <span
  m="1384150">three</span> <span m="1384710">major</span> <span
  m="1385070">primitives--</span> <span m="1389000">private</span> <span
  m="1389345">key</span> <span m="1389980">encryption,</span> <span
  m="1393340">public</span> <span m="1394060">key</span> <span
  m="1394240">encryption,</span> <span m="1398030">and</span> <span
  m="1398270">digital</span> <span m="1398620">signature.</span></p><p><span
  m="1404870">So</span> <span m="1404960">if</span> <span m="1405150">we</span>
  <span m="1405650">categorize</span> <span m="1406300">them</span> <span
  m="1407900">a</span> <span m="1407980">little</span> <span
  m="1408140">bit--</span> <span m="1409310">so</span> <span
  m="1409440">these</span> <span m="1409770">two</span> <span
  m="1410475">are</span> <span m="1410750">asymmetric</span> <span
  m="1411430">key.</span> <span m="1413940">They are</span> <span
  m="1414170">public</span> <span m="1414460">key</span> <span m="1414860">and
  secret key.</span> <span m="1415670">This</span> <span m="1415850">one</span>
  <span m="1416280">is</span> <span m="1416550">symmetric</span> <span
  m="1416815">key.</span> <span m="1420150">And</span> <span
  m="1420710">these</span> <span m="1421050">two</span> <span
  m="1423300">are</span> <span m="1424320">for</span> <span
  m="1424650">secrecy.</span> <span m="1429580">They</span> <span
  m="1429700">are</span> <span m="1429880">trying</span> <span
  m="1430200">to</span> <span m="1430890">hide</span> <span
  m="1431340">the</span> <span m="1431440">message.</span> <span
  m="1432510">And</span> <span m="1432940">this</span> <span
  m="1433200">one</span> <span m="1433680">is</span> <span
  m="1433920">for</span> <span m="1435440">integrity.</span> <span
  m="1439450">Meaning,</span> <span m="1440010">the</span> <span
  m="1440110">message</span> <span m="1440530">is</span> <span
  m="1442250">what</span> <span m="1442500">the</span> <span
  m="1442830">sender</span> <span m="1442950">sends.</span></p><p><span
  m="1444180">So</span> <span m="1444770">you</span> <span
  m="1444880">can</span> <span m="1445030">see</span> <span m="1445340">we
  are</span> <span m="1445590">missing</span> <span m="1446340">one</span> <span
  m="1446630">primitive</span> <span m="1447000">here.</span> <span
  m="1448240">What</span> <span m="1448400">if</span> <span
  m="1448650">the</span> <span m="1448780">two</span> <span
  m="1448950">parties,</span> <span m="1449910">they</span> <span
  m="1450040">do</span> <span m="1450190">share</span> <span
  m="1450530">a</span> <span m="1450580">secret</span> <span
  m="1450890">key,</span> <span m="1451880">and</span> <span
  m="1453560">one</span> <span m="1453750">party</span> <span
  m="1454070">wants</span> <span m="1454310">to</span> <span
  m="1454430">verify</span> <span m="1455010">the</span> <span
  m="1455130">other</span> <span m="1455330">party?</span> <span m="1455820">The
  other</span> <span m="1456080">message</span> <span m="1456550">indeed
  does</span> <span m="1456780">come</span> <span m="1457050">from</span> <span
  m="1457280">the</span> <span m="1457400">other</span> <span
  m="1457550">party.</span> <span m="1458850">So</span> <span
  m="1459010">indeed</span> <span m="1459420">we</span> <span
  m="1459540">do</span> <span m="1459740">have</span> <span m="1461220">a</span>
  <span m="1461280">primitive</span> <span m="1461650">for</span> <span
  m="1461770">that.</span> <span m="1462120">It's</span> <span
  m="1462370">called</span> <span m="1463890">message</span> <span
  m="1465610">authentication</span> <span m="1466980">code.</span></p><p><span
  m="1469640">So</span> <span m="1469740">its</span> <span
  m="1469900">definition</span> <span m="1470470">is</span> <span
  m="1470620">basically</span> <span m="1471100">exactly</span> <span
  m="1471480">the</span> <span m="1471580">same</span> <span
  m="1471930">as</span> <span m="1472930">digital</span> <span
  m="1473270">signature.</span> <span m="1475370">I'm</span> <span
  m="1475760">just</span> <span m="1475970">going</span> <span
  m="1476170">to</span> <span m="1476660">change it</span> <span
  m="1477040">here.</span> <span m="1479630">Except</span> <span
  m="1479990">that</span> <span m="1480450">it</span> <span
  m="1480650">has</span> <span m="1481440">only</span> <span
  m="1481650">one</span> <span m="1481860">key.</span> <span
  m="1485960">So</span> <span m="1486520">the</span> <span
  m="1486670">sign</span> <span m="1487250">function</span> <span
  m="1487870">is</span> <span m="1488040">replaced</span> <span
  m="1488790">by</span> <span m="1488940">a</span> <span m="1489020">MAC.</span>
  <span m="1490440">And</span> <span m="1490830">there's</span> <span
  m="1491040">no</span> <span m="1491190">notion</span> <span
  m="1491590">of</span> <span m="1491730">secret</span> <span m="1492040">key
  and public</span> <span m="1492410">key.</span> <span m="1494160">We</span>
  <span m="1494240">have</span> <span m="1494420">only</span> <span
  m="1494580">one</span> <span m="1494760">key.</span> <span
  m="1495430">And</span> <span m="1495580">how</span> <span
  m="1495770">do</span> <span m="1495820">we</span> <span
  m="1495940">verify?</span></p><p><span m="1497710">OK,</span> <span
  m="1497900">so</span> <span m="1498020">verify</span> <span
  m="1498390">function</span> <span m="1499010">basically</span> <span
  m="1499950">just</span> <span m="1500160">becomes</span> <span
  m="1502580">the</span> <span m="1502680">other</span> <span
  m="1502860">guy</span> <span m="1503120">also</span> <span
  m="1503690">recomputes</span> <span m="1505110">the</span> <span
  m="1505220">MAC</span> <span m="1505960">of</span> <span
  m="1506300">the</span> <span m="1506390">message</span> <span
  m="1506860">and</span> <span m="1507100">checks</span> <span
  m="1507340">whether</span> <span m="1508050">that's</span> <span
  m="1508260">the</span> <span m="1508360">signature.</span> <span
  m="1512810">So</span> <span m="1513090">verifier</span> <span
  m="1514310">just</span> <span m="1514460">to</span> <span
  m="1514580">recompute</span> <span m="1519540">and</span> <span
  m="1519780">compare</span> <span m="1527500">correctness--</span> <span
  m="1528700">we</span> <span m="1529010">also</span> <span
  m="1529260">want</span> <span m="1529440">correctness.</span> <span
  m="1530270">We</span> <span m="1530380">also</span> <span
  m="1530610">want</span> <span m="1530960">unforgeability</span> <span
  m="1531490">And</span> <span m="1531640">it's</span> <span m="1532080">defined
  in</span> <span m="1532400">exactly</span> <span m="1532880">the</span> <span
  m="1532990">same</span> <span m="1533180">way.</span></p><p><span
  m="1538410">Now,</span> <span m="1539120">actually,</span> <span
  m="1539530">I</span> <span m="1540320">would</span> <span
  m="1540570">have</span> <span m="1540870">asked</span> <span
  m="1541180">this</span> <span m="1541390">question</span> <span
  m="1542290">here--</span> <span m="1543810">is</span> <span
  m="1544060">hash</span> <span m="1544590">a</span> <span
  m="1545230">valid</span> <span m="1545670">MAC?</span> <span
  m="1551350">The</span> <span m="1551530">answer</span> <span m="1551680">is
  still</span> <span m="1551980">no</span> <span m="1552610">because</span>
  <span m="1553220">MAC</span> <span m="1553500">is</span> <span
  m="1553650">a</span> <span m="1553690">public</span> <span
  m="1554000">function that</span> <span m="1554380">everyone can</span> <span
  m="1554760">compute,</span> <span m="1555360">and</span> <span
  m="1555660">it's</span> <span m="1555770">trivial</span> <span
  m="1556290">come</span> <span m="1556480">up</span> <span
  m="1556610">with</span> <span m="1556760">a</span> <span
  m="1556810">forgery.</span> <span m="1559120">So</span> <span
  m="1559310">thank you</span> <span m="1559480">for</span> <span
  m="1559810">asking</span> <span m="1560070">that</span> <span
  m="1560230">question.</span> <span m="1564260">But</span> <span
  m="1564370">the</span> <span m="1564460">hash</span> <span
  m="1564740">is</span> <span m="1564880">actually</span> <span
  m="1565540">very</span> <span m="1565770">close.</span></p><p><span
  m="1579640">How</span> <span m="1579750">can</span> <span
  m="1579890">we</span> <span m="1580010">get</span> <span m="1580210">a</span>
  <span m="1580640">message</span> <span m="1581040">authentication</span> <span
  m="1581610">code?</span> <span m="1584970">So</span> <span
  m="1585170">several</span> <span m="1585380">ideas.</span> <span
  m="1586760">Can</span> <span m="1586920">we</span> <span
  m="1588800">just</span> <span m="1589320">hash</span> <span
  m="1590890">the</span> <span m="1591010">key</span> <span
  m="1591650">concatenated</span> <span m="1592490">with</span> <span
  m="1592650">the</span> <span m="1592720">message?</span> <span
  m="1594750">Then</span> <span m="1595920">some</span> <span
  m="1596430">other</span> <span m="1596630">random</span> <span
  m="1596990">attacker</span> <span m="1597690">who</span> <span
  m="1597860">doesn't</span> <span m="1598100">have</span> <span
  m="1598240">the</span> <span m="1598360">key</span> <span
  m="1598680">does</span> <span m="1598810">not</span> <span
  m="1599010">know</span> <span m="1599140">how</span> <span
  m="1599250">to</span> <span m="1599350">compute</span> <span
  m="1599730">this</span> <span m="1599920">thing.</span> <span
  m="1602700">That's</span> <span m="1602850">a</span> <span
  m="1602920">reasonable</span> <span m="1603260">idea.</span></p><p><span
  m="1604512">But,</span> <span m="1604980">well, if</span> <span
  m="1605260">we</span> <span m="1605420">can</span> <span m="1605550">do
  it</span> <span m="1605820">this</span> <span m="1606000">way,</span> <span
  m="1606270">how</span> <span m="1606460">about</span> <span
  m="1606800">we</span> <span m="1607080">do</span> <span m="1607740">the</span>
  <span m="1607830">message</span> <span m="1608340">concatenated</span> <span
  m="1608950">with</span> <span m="1609180">the</span> <span
  m="1609400">key.</span> <span m="1610905">Or</span> <span
  m="1611370">if</span> <span m="1611480">you</span> <span
  m="1611600">want,</span> <span m="1611830">you</span> <span
  m="1611920">can</span> <span m="1612090">do</span> <span
  m="1612270">key</span> <span m="1612560">concatenated</span> <span
  m="1613010">with</span> <span m="1613170">message</span> <span m="1613510">and
  then</span> <span m="1613650">concatenated</span> <span
  m="1614140">with</span> <span m="1614420">the key.</span> <span
  m="1620460">So</span> <span m="1620610">it</span> <span
  m="1620720">turns</span> <span m="1620950">out</span> <span
  m="1623070">this</span> <span m="1623210">doesn't</span> <span
  m="1623460">work</span> <span m="1624710">for</span> <span
  m="1624870">some</span> <span m="1625830">very</span> <span
  m="1627280">advanced</span> <span m="1627720">reasons.</span> <span
  m="1628590">And</span> <span m="1628730">this</span> <span
  m="1628900">one</span> <span m="1629410">may</span> <span
  m="1629910">or</span> <span m="1630000">may</span> <span
  m="1630120">not.</span></p><p><span m="1631240">For</span> <span
  m="1631890">SHA1,</span> <span m="1634480">it</span> <span
  m="1634570">doesn't</span> <span m="1634820">work,</span> <span
  m="1635220">unfortunately.</span> <span m="1636510">And</span> <span
  m="1636680">for</span> <span m="1636920">SHA3--</span> <span
  m="1638800">that's</span> <span m="1639010">the</span> <span
  m="1639140">replacement</span> <span m="1639870">for</span> <span
  m="1640040">SHA1</span> <span m="1641040">and</span> <span
  m="1641300">SHA2--</span> <span m="1641950">it</span> <span
  m="1642090">actually</span> <span m="1642390">works.</span> <span
  m="1643290">So</span> <span m="1643500">the</span> <span
  m="1643610">simplest</span> <span m="1644840">MAC</span> <span
  m="1645200">we</span> <span m="1645240">can</span> <span
  m="1645360">imagine</span> <span m="1645820">is</span> <span
  m="1646030">just</span> <span m="1646260">to</span> <span
  m="1647110">choose</span> <span m="1647660">SHA3</span> <span
  m="1648180">as</span> <span m="1648350">the</span> <span
  m="1648430">hash</span> <span m="1648640">function,</span> <span
  m="1649190">and</span> <span m="1650140">input</span> <span
  m="1652410">is</span> <span m="1652590">the</span> <span
  m="1652730">key</span> <span m="1653090">and</span> <span
  m="1653530">then</span> <span m="1653750">the</span> <span
  m="1653830">message.</span> <span m="1655370">Not</span> <span
  m="1655450">the</span> <span m="1655540">other</span> <span
  m="1655700">way.</span> <span m="1658060">It's</span> <span
  m="1658260">also,</span> <span m="1658550">just</span> <span
  m="1659060">FYI,</span> <span m="1659400">purpose.</span></p><p><span
  m="1661160">By</span> <span m="1661400">the</span> <span
  m="1661510">way,</span> <span m="1661640">there's</span> <span
  m="1661890">another</span> <span m="1662620">reasonable</span> <span
  m="1663430">thought.</span> <span m="1664660">That</span> <span
  m="1664870">is,</span> <span m="1665510">how</span> <span
  m="1665670">about</span> <span m="1666050">we</span> <span
  m="1667560">encrypt</span> <span m="1668490">the</span> <span
  m="1668650">hash?</span> <span m="1672104">Now,</span> <span
  m="1672550">everyone</span> <span m="1672910">can</span> <span
  m="1673030">compute</span> <span m="1673370">the</span> <span
  m="1673420">hash,</span> <span m="1673710">but</span> <span
  m="1673820">they</span> <span m="1673910">don't</span> <span
  m="1674250">know</span> <span m="1674400">how</span> <span
  m="1674510">to</span> <span m="1674610">encrypt.</span> <span
  m="1675530">If</span> <span m="1675570">I</span> <span m="1675660">use,</span>
  <span m="1676090">say,</span> <span m="1676410">a secret key</span> <span
  m="1676810">encryption,</span> <span m="1678850">this</span> <span
  m="1679130">turns</span> <span m="1679534">out to</span> <span
  m="1679938">be</span> <span m="1681150">wrong</span> <span
  m="1681730">as</span> <span m="1681900">well.</span></p><p><span
  m="1691230">That's</span> <span m="1692010">digital</span> <span
  m="1692370">signature</span> <span m="1692840">in</span> <span
  m="1693302">MAC.</span> <span m="1697000">But</span> <span
  m="1697080">one</span> <span m="1697290">caveat</span> <span
  m="1697690">here,</span> <span m="1699070">our</span> <span
  m="1699370">unforgeability</span> <span m="1700140">is</span> <span
  m="1700260">defined</span> <span m="1700620">this</span> <span
  m="1700770">way.</span> <span m="1701310">A</span> <span
  m="1701360">little</span> <span m="1701560">bit</span> <span
  m="1701700">strange,</span> <span m="1702110">but</span> <span m="1702270">it
  makes</span> <span m="1702440">sense.</span> <span m="1703890">But</span>
  <span m="1705290">it</span> <span m="1705670">indeed</span> <span
  m="1706830">has</span> <span m="1707010">some</span> <span
  m="1707370">weakness</span> <span m="1708210">in</span> <span
  m="1708370">some</span> <span m="1708620">applications.</span></p><p><span
  m="1710240">So</span> <span m="1710720">imagine,</span> <span
  m="1711770">say,</span> <span m="1712050">I</span> <span
  m="1712290">send</span> <span m="1712530">you</span> <span
  m="1712670">a</span> <span m="1712730">message--</span> <span
  m="1713720">today's</span> <span m="1714260">recitation</span> <span
  m="1714710">is</span> <span m="1714870">canceled.</span> <span
  m="1716340">And</span> <span m="1716990">it</span> <span
  m="1717130">has</span> <span m="1717290">my</span> <span
  m="1717460">signature</span> <span m="1717850">on</span> <span
  m="1718010">it.</span> <span m="1718890">So</span> <span
  m="1719010">you</span> <span m="1719120">can</span> <span
  m="1719450">verify</span> <span m="1720050">it</span> <span
  m="1720230">indeed</span> <span m="1720650">comes</span> <span
  m="1720890">from</span> <span m="1721060">me.</span> <span
  m="1722040">But</span> <span m="1722480">once</span> <span
  m="1722780">I</span> <span m="1722860">send</span> <span
  m="1723130">that</span> <span m="1723270">message,</span> <span
  m="1724050">every</span> <span m="1724350">of</span> <span
  m="1724450">you</span> <span m="1724880">has</span> <span
  m="1725070">that</span> <span m="1725210">message.</span> <span
  m="1725820">So</span> <span m="1725950">next</span> <span
  m="1726260">week,</span> <span m="1726560">one</span> <span
  m="1726770">of</span> <span m="1726860">you</span> <span
  m="1727020">can</span> <span m="1727240">send</span> <span
  m="1727450">that</span> <span m="1727590">message</span> <span
  m="1727910">again,</span> <span m="1728250">saying,</span> <span
  m="1729040">today's</span> <span m="1729390">recitation</span> <span
  m="1729840">is</span> <span m="1729990">canceled.</span></p><p><span
  m="1731550">Then</span> <span m="1731670">you</span> <span
  m="1731780">have</span> <span m="1731980">no</span> <span
  m="1732080">idea</span> <span m="1732460">whether</span> <span
  m="1733090">it's</span> <span m="1733270">indeed</span> <span
  m="1733610">me</span> <span m="1733840">sending</span> <span
  m="1734130">the</span> <span m="1734170">message</span> <span
  m="1734480">again</span> <span m="1734820">or</span> <span
  m="1735100">someone</span> <span m="1735750">doing</span> <span
  m="1736355">an</span> <span m="1736670">April</span> <span
  m="1736940">Fool's</span> <span m="1737150">Day</span> <span
  m="1738040">joke.</span> <span m="1740840">So</span> <span
  m="1741060">how</span> <span m="1741700">do</span> <span m="1741780">we</span>
  <span m="1742100">prevent</span> <span m="1742440">that?</span> <span
  m="1743670">Well, of</span> <span m="1744020">course,</span> <span
  m="1744230">one</span> <span m="1744670">thing</span> <span
  m="1744880">I</span> <span m="1744930">can</span> <span m="1745100">do</span>
  <span m="1745350">is</span> <span m="1745510">if</span> <span
  m="1745630">I'm</span> <span m="1745800">smart</span> <span
  m="1746160">I'll</span> <span m="1746280">say,</span> <span
  m="1746700">today,</span> <span m="1747530">like in</span> <span
  m="1747650">parenthesis,</span> <span m="1748450">May</span> <span
  m="1748860">the</span> <span m="1749150">8th,</span> <span
  m="1749570">recitation</span> <span m="1750020">is</span> <span
  m="1750210">canceled.</span></p><p><span m="1750780">Then</span> <span
  m="1750940">you</span> <span m="1751060">cannot</span> <span
  m="1751370">repeat</span> <span m="1751670">that</span> <span
  m="1751830">message.</span> <span m="1752940">But</span> <span
  m="1754040">we</span> <span m="1754180">want</span> <span
  m="1754330">to</span> <span m="1754420">protect</span> <span
  m="1754940">human</span> <span m="1755290">stability.</span> <span
  m="1755980">That's</span> <span m="1756200">the</span> <span
  m="1756510">whole</span> <span m="1756710">point</span> <span
  m="1757000">of</span> <span m="1758520">cryptography.</span> <span
  m="1760360">So</span> <span m="1760840">one</span> <span
  m="1761040">thing</span> <span m="1761220">we</span> <span
  m="1761350">could</span> <span m="1761550">do,</span> <span
  m="1763760">let's</span> <span m="1763940">see.</span> <span
  m="1782000">Very</span> <span m="1782460">simple</span> <span
  m="1782740">modification.</span></p><p><span m="1785850">When</span> <span
  m="1786070">I</span> <span m="1786120">sign</span> <span
  m="1786450">the</span> <span m="1786490">message,</span> <span
  m="1792520">I'll</span> <span m="1792710">sign</span> <span
  m="1794050">1,</span> <span m="1795040">concatenated</span> <span
  m="1795840">with</span> <span m="1796050">my</span> <span
  m="1796170">message.</span> <span m="1797990">Next</span> <span
  m="1798150">time</span> <span m="1798380">I</span> <span
  m="1798470">sign</span> <span m="1798750">2,</span> <span
  m="1799630">concatenated</span> <span m="1800030">with</span> <span
  m="1800230">my</span> <span m="1800350">message.</span> <span
  m="1800910">And</span> <span m="1801060">then</span> <span
  m="1801230">3,</span> <span m="1801540">4,</span> <span m="1801950">and</span>
  <span m="1802340">just</span> <span m="1803140">have</span> <span
  m="1803350">this</span> <span m="1804330">counter</span> <span
  m="1804560">that</span> <span m="1805630">keeps</span> <span
  m="1805910">incrementing.</span> <span m="1807570">It naturally</span> <span
  m="1808280">fixes.</span> <span m="1811210">So</span> <span
  m="1811330">you</span> <span m="1811390">can</span> <span
  m="1811510">verify</span> <span m="1811960">if</span> <span
  m="1812060">you</span> <span m="1812460">receive</span> <span
  m="1814280">the</span> <span m="1814500">same</span> <span
  m="1814740">message</span> <span m="1815100">with</span> <span
  m="1815240">the</span> <span m="1815320">same</span> <span
  m="1815520">counter,</span> <span m="1815940">then</span> <span
  m="1816110">you</span> <span m="1816230">know</span> <span
  m="1816470">it's</span> <span m="1816570">someone</span> <span
  m="1816930">else</span> <span m="1817160">who</span> <span
  m="1817310">is</span> <span m="1817470">resending</span> <span
  m="1817950">it.</span></p><p><span m="1821050">So</span> <span
  m="1821240">that's</span> <span m="1823100">one</span> <span
  m="1823360">thing</span> <span m="1824270">we</span> <span
  m="1824400">need</span> <span m="1824550">to</span> <span
  m="1824760">do</span> <span m="1825060">for</span> <span
  m="1825300">signature</span> <span m="1826390">in</span> <span
  m="1827330">practical</span> <span m="1827810">use.</span> <span
  m="1828840">Now,</span> <span m="1830870">consider</span> <span
  m="1831260">another</span> <span m="1833110">totally</span> <span
  m="1833610">different</span> <span m="1834390">application.</span> <span
  m="1836910">So</span> <span m="1837730">say</span> <span m="1839180">I</span>
  <span m="1839250">think</span> <span m="1839440">everyone</span> <span
  m="1840080">uses</span> <span m="1840870">Google</span> <span
  m="1841120">Drive,</span> <span m="1841640">Dropbox,</span> <span
  m="1842780">something</span> <span m="1843050">like</span> <span
  m="1843200">that.</span> <span m="1844180">You</span> <span
  m="1844310">store</span> <span m="1844850">a</span> <span
  m="1844960">bunch</span> <span m="1845210">of</span> <span
  m="1845320">files</span> <span m="1849840">on</span> <span
  m="1851060">this</span> <span m="1851760">cloud</span> <span
  m="1852110">server.</span> <span m="1856190">Now</span> <span
  m="1856740">you</span> <span m="1856880">are</span> <span
  m="1857000">here.</span></p><p><span m="1859230">You'll</span> <span
  m="1859280">have</span> <span m="1859830">a,</span> <span m="1859930">say,
  cell</span> <span m="1860150">phone,</span> <span m="1860560">and</span> <span
  m="1860930">you</span> <span m="1861050">can</span> <span
  m="1861150">access</span> <span m="1861550">your</span> <span
  m="1861660">files.</span> <span m="1863486">But</span> <span
  m="1863940">how</span> <span m="1865000">do</span> <span
  m="1865080">you</span> <span m="1865260">know</span> <span
  m="1866960">when</span> <span m="1867100">you</span> <span
  m="1867290">read</span> <span m="1867640">a</span> <span
  m="1867760">file,</span> <span m="1868640">it</span> <span
  m="1868770">is</span> <span m="1868940">indeed</span> <span
  m="1869540">your</span> <span m="1869710">file</span> <span
  m="1870040">unmodified?</span> <span m="1872360">How</span> <span
  m="1872470">do,</span> <span m="1872590">maybe</span> <span
  m="1873290">Google</span> <span m="1875230">messes</span> <span
  m="1875540">with</span> <span m="1875690">you,</span> <span
  m="1876320">or</span> <span m="1876440">there's</span> <span
  m="1876660">someone</span> <span m="1877020">in</span> <span
  m="1877090">the</span> <span m="1877160">middle</span> <span
  m="1877690">who</span> <span m="1878570">changes</span> <span
  m="1878920">your</span> <span m="1879040">file?</span></p><p><span
  m="1882190">Usually,</span> <span m="1882700">most</span> <span
  m="1883010">people</span> <span m="1883250">do</span> <span
  m="1883340">not</span> <span m="1883540">care</span> <span
  m="1883690">about</span> <span m="1883890">that,</span> <span
  m="1884450">while</span> <span m="1885070">in</span> <span
  m="1885410">cryptography,</span> <span m="1886330">we</span> <span
  m="1886360">do</span> <span m="1886510">care</span> <span
  m="1886660">about</span> <span m="1886850">that.</span> <span
  m="1889610">So</span> <span m="1890340">in</span> <span
  m="1890520">that</span> <span m="1890730">case,</span> <span
  m="1891580">MAC</span> <span m="1892330">and</span> <span
  m="1892710">signatures</span> <span m="1893360">do</span> <span
  m="1893470">not</span> <span m="1893640">help</span> <span
  m="1893930">us.</span> <span m="1894660">Why?</span> <span
  m="1895060">Because</span> <span m="1895410">if</span> <span
  m="1895580">you</span> <span m="1896880">just</span> <span
  m="1897050">store</span> <span m="1897510">a</span> <span
  m="1897680">MAC</span> <span m="1900570">alongside</span> <span
  m="1901800">each</span> <span m="1902030">file,</span> <span
  m="1903280">what</span> <span m="1903490">went</span> <span
  m="1903660">wrong?</span> <span m="1908527">Go ahead.</span></p><p><span
  m="1909020">AUDIENCE: You need to modify the MAC</span> <span
  m="1909513">too.</span></p><p><span m="1912970">PROFESSOR: But</span> <span
  m="1913120">if</span> <span m="1913270">they</span> <span
  m="1913390">modify</span> <span m="1913790">the</span> <span
  m="1913880">file,</span> <span m="1914280">they</span> <span
  m="1914460">do</span> <span m="1914600">not</span> <span
  m="1914840">know</span> <span m="1915050">how</span> <span
  m="1915190">to</span> <span m="1915330">generate</span> <span
  m="1915600">a</span> <span m="1915870">MAC</span> <span m="1916280">for</span>
  <span m="1918620">their</span> <span m="1918830">version</span> <span
  m="1919130">of</span> <span m="1919230">the</span> <span
  m="1919300">file.</span> <span m="1921320">But</span> <span
  m="1921720">what</span> <span m="1921900">they</span> <span
  m="1922010">can</span> <span m="1922180">do</span> <span m="1922390">is</span>
  <span m="1923600">you</span> <span m="1923700">have</span> <span
  m="1923850">this</span> <span m="1924030">file</span> <span
  m="1924690">and</span> <span m="1924830">then</span> <span
  m="1924990">you</span> <span m="1925140">come</span> <span
  m="1925490">and</span> <span m="1925730">write</span> <span
  m="1925950">it,</span> <span m="1926230">and</span> <span
  m="1926690">you</span> <span m="1926770">generate</span> <span
  m="1927130">a</span> <span m="1927240">new</span> <span
  m="1927460">MAC.</span> <span m="1928310">When</span> <span
  m="1928420">you</span> <span m="1928710">read</span> <span
  m="1928890">it,</span> <span m="1929580">they</span> <span
  m="1929720">give</span> <span m="1929920">you</span> <span
  m="1930040">the</span> <span m="1930240">old</span> <span
  m="1930420">version.</span> <span m="1932600">That</span> <span
  m="1932830">has the</span> <span m="1933140">valid</span> <span
  m="1933620">signature</span> <span m="1934370">or</span> <span
  m="1934510">MAC</span> <span m="1934990">on</span> <span m="1935190">it</span>
  <span m="1935700">because</span> <span m="1935820">you</span> <span
  m="1935970">generated</span> <span m="1936420">that</span> <span
  m="1936610">for it.</span> <span m="1942340">You all</span> <span
  m="1942500">see</span> <span m="1942630">the</span> <span
  m="1942720">problem?</span> <span m="1942980">You</span> <span
  m="1943460">haven't</span> <span m="1943690">seen</span> <span
  m="1943790">the</span> <span
  m="1943840">problem?</span></p><p>&nbsp;</p><p><span m="1945478">AUDIENCE:
  What do you mean they</span> <span m="1945934">give you</span> <span
  m="1946390">the old</span> <span m="1946846">version?</span></p><p><span
  m="1947760">PROFESSOR: OK,</span> <span m="1947980">so</span> <span
  m="1948110">you</span> <span m="1948260">have</span> <span
  m="1948420">this</span> <span m="1948580">file.</span> <span
  m="1949080">You</span> <span m="1949220">generate</span> <span
  m="1949580">a</span> <span m="1949620">MAC,</span> <span
  m="1950410">but</span> <span m="1950750">you--</span> <span
  m="1952710">at</span> <span m="1952820">some</span> <span
  m="1952970">point,</span> <span m="1953160">you</span> <span
  m="1953240">want</span> <span m="1953360">to</span> <span
  m="1953420">update</span> <span m="1953730">the</span> <span
  m="1953780">file.</span> <span m="1954720">You</span> <span
  m="1954930">want</span> <span m="1955100">to</span> <span
  m="1955610">update</span> <span m="1956020">this</span> <span
  m="1956260">file</span> <span m="1956660">to</span> <span
  m="1957210">this</span> <span m="1957410">file</span> <span
  m="1957660">prime,</span> <span m="1958430">and</span> <span
  m="1958650">generate</span> <span m="1958925">a</span> <span
  m="1959200">new</span> <span m="1959280">MAC.</span> <span
  m="1960900">Maybe</span> <span m="1961290">then</span> <span
  m="1961720">file</span> <span m="1961960">double</span> <span
  m="1962200">prime,</span> <span m="1962490">MAC</span> <span
  m="1962620">double</span> <span m="1962840">prime.</span> <span
  m="1964590">In</span> <span m="1964730">this</span> <span
  m="1964910">application,</span> <span m="1965620">we</span> <span
  m="1965740">want</span> <span m="1965990">freshness.</span></p><p><span
  m="1966660">When</span> <span m="1966790">you</span> <span
  m="1966950">read</span> <span m="1967120">this</span> <span
  m="1967290">file,</span> <span m="1967700">you</span> <span
  m="1967830">want</span> <span m="1968100">the</span> <span
  m="1968230">latest</span> <span m="1968630">version</span> <span
  m="1968990">of</span> <span m="1969110">the</span> <span
  m="1969180">file.</span> <span m="1969740">So</span> <span
  m="1970680">it</span> <span m="1970790">should</span> <span
  m="1970950">be</span> <span m="1971880">what</span> <span
  m="1972050">you</span> <span m="1972200">wrote</span> <span
  m="1972470">there</span> <span m="1972690">last</span> <span
  m="1972960">time.</span> <span m="1974200">But</span> <span
  m="1974490">when</span> <span m="1974600">you are</span> <span
  m="1974720">trying</span> <span m="1975020">to</span> <span
  m="1975130">read</span> <span m="1975290">the</span> <span
  m="1975370">file,</span> <span m="1975870">an</span> <span
  m="1976050">attacker</span> <span m="1976480">can</span> <span
  m="1976690">give</span> <span m="1976840">you</span> <span
  m="1977150">this</span> <span m="1977450">pair.</span> <span
  m="1979210">If</span> <span m="1979300">you</span> <span
  m="1979400">check</span> <span m="1979610">the</span> <span
  m="1979700">MAC,</span> <span m="1980410">it's</span> <span
  m="1980590">going</span> <span m="1980770">to</span> <span
  m="1980870">match.</span> <span m="1983390">This</span> <span
  m="1983550">is</span> <span m="1983700">also</span> <span m="1984040">a</span>
  <span m="1984110">valid</span> <span m="1984800">message</span> <span
  m="1985320">MAC</span> <span m="1985580">pair.</span></p><p><span
  m="1989180">Now,</span> <span m="1989390">everyone</span> <span
  m="1989700">sees</span> <span m="1989890">the</span> <span
  m="1989970">problem.</span> <span m="1993600">OK,</span> <span
  m="1993820">so</span> <span m="1993970">what</span> <span
  m="1994280">can</span> <span m="1994400">we</span> <span
  m="1994490">do?</span> <span m="1997090">Well,</span> <span
  m="1997290">one</span> <span m="1997330">thing</span> <span
  m="1997490">we</span> <span m="1997650">could</span> <span
  m="1997860">do</span> <span m="1999800">is</span> <span
  m="2000590">store</span> <span m="2001380">all</span> <span
  m="2001600">these</span> <span m="2001850">MACs</span> <span
  m="2003020">here</span> <span m="2004870">on your phone.</span> <span
  m="2005660">MAC1,</span> <span m="2006220">MAC2--</span> <span
  m="2009120">a</span> <span m="2009220">MAC</span> <span m="2009500">for</span>
  <span m="2009810">every</span> <span m="2010780">single</span> <span
  m="2011090">file.</span> <span m="2011960">But</span> <span
  m="2012180">if</span> <span m="2012270">you</span> <span m="2012370">do</span>
  <span m="2012530">that,</span> <span m="2013030">in</span> <span
  m="2013190">fact,</span> <span m="2013510">we</span> <span
  m="2013660">do</span> <span m="2013750">not</span> <span
  m="2013970">need</span> <span m="2014140">MAC</span> <span
  m="2014380">anymore.</span> <span m="2015770">We</span> <span
  m="2016020">can</span> <span m="2016210">just</span> <span m="2016530">use
  hash.</span></p><p><span m="2021970">So</span> <span m="2023550">I'll</span>
  <span m="2023700">say</span> <span m="2023890">sigma--</span> <span
  m="2026226">I'll</span> <span m="2026640">use</span> <span
  m="2026790">sigmas,</span> <span m="2027200">but</span> <span
  m="2027470">they</span> <span m="2028710">mean</span> <span
  m="2028880">hashes.</span> <span m="2032850">This</span> <span
  m="2032930">is</span> <span m="2033350">probably</span> <span
  m="2035580">good</span> <span m="2035750">enough</span> <span
  m="2036120">in</span> <span m="2036280">practice.</span> <span
  m="2038710">I'll</span> <span m="2038910">say</span> <span
  m="2039150">these</span> <span m="2039680">files</span> <span
  m="2040050">are</span> <span m="2040330">x1,</span> <span
  m="2043150">x2,</span> <span m="2043640">x3,</span> <span
  m="2043860">x4.</span> <span m="2045190">Now</span> <span
  m="2045280">you</span> <span m="2045410">just</span> <span
  m="2045600">create</span> <span m="2045920">a</span> <span
  m="2045980">hash</span> <span m="2046360">for</span> <span
  m="2046530">each</span> <span m="2046690">of</span> <span
  m="2046800">them</span> <span m="2047000">and</span> <span
  m="2047130">store</span> <span m="2047340">them</span> <span
  m="2047420">locally.</span> <span m="2048360">And</span> <span
  m="2049750">the</span> <span m="2049860">model</span> <span
  m="2050139">here</span> <span m="2050550">is</span> <span
  m="2050880">that</span> <span m="2051510">an</span> <span
  m="2051670">attacker</span> <span m="2052090">cannot</span> <span
  m="2052460">modify</span> <span m="2053520">files</span> <span
  m="2054400">on</span> <span m="2054500">your</span> <span
  m="2054719">own</span> <span m="2054840">computer</span> <span
  m="2055000">or</span> <span m="2055120">on</span> <span m="2055320">your
  own</span> <span m="2055929">phone.</span></p><p><span m="2057130">And</span>
  <span m="2057310">then</span> <span m="2057469">you</span> <span
  m="2057560">can</span> <span m="2057690">download</span> <span
  m="2057980">the</span> <span m="2058030">file.</span> <span
  m="2058560">Match--</span> <span m="2059239">compares</span> <span
  m="2059499">it</span> <span m="2059760">with</span> <span
  m="2059969">the</span> <span m="2060070">latest</span> <span
  m="2060630">version</span> <span m="2060920">of</span> <span
  m="2061030">the</span> <span m="2061100">hash,</span> <span
  m="2061860">and</span> <span m="2061989">then</span> <span
  m="2062120">you're</span> <span m="2062280">convinced</span> <span
  m="2062699">that</span> <span m="2062889">it's</span> <span
  m="2063100">the</span> <span m="2063199">latest</span> <span
  m="2063510">version.</span> <span m="2065880">This</span> <span
  m="2066000">is</span> <span m="2066090">probably</span> <span
  m="2066429">a</span> <span m="2066510">good</span> <span
  m="2066659">enough</span> <span m="2066870">solution.</span> <span
  m="2068050">The</span> <span m="2068210">only</span> <span
  m="2070250">downside</span> <span m="2070750">is</span> <span
  m="2070920">that</span> <span m="2071170">we</span> <span
  m="2071350">do</span> <span m="2071550">have</span> <span
  m="2071770">to</span> <span m="2072010">store</span> <span
  m="2072780">a</span> <span m="2072810">lot</span> <span m="2072989">of</span>
  <span m="2073469">hashes</span> <span m="2074400">if</span> <span
  m="2075850">you</span> <span m="2075960">have</span> <span
  m="2076130">a</span> <span m="2076170">lot</span> <span m="2076350">of</span>
  <span m="2076429">files.</span></p><p><span m="2077659">Or</span> <span
  m="2077960">in</span> <span m="2078159">our</span> <span
  m="2079030">algorithmic</span> <span m="2080030">terminology,</span> <span
  m="2083590">we</span> <span m="2083750">say</span> <span
  m="2085611">your</span> <span m="2086080">space</span> <span
  m="2086550">complexity</span> <span m="2088780">is</span> <span
  m="2089010">o</span> <span m="2089199">of</span> <span m="2089610">n.</span>
  <span m="2092670">Here,</span> <span m="2092989">I</span> <span
  m="2093050">mean</span> <span m="2093330">your</span> <span
  m="2093719">local</span> <span m="2094090">space.</span> <span
  m="2099930">So</span> <span m="2100020">can</span> <span m="2100170">we</span>
  <span m="2100460">somehow</span> <span m="2101070">reduce</span> <span
  m="2102090">the</span> <span m="2102370">local</span> <span
  m="2102680">space</span> <span m="2102980">complexity?</span> <span
  m="2107690">Well,</span> <span m="2107960">one</span> <span
  m="2108090">thing</span> <span m="2108210">we</span> <span
  m="2108340">could</span> <span m="2108540">do</span> <span
  m="2108920">is</span> <span m="2109170">to</span> <span
  m="2110140">concatenate</span> <span m="2110710">all</span> <span
  m="2110850">the</span> <span m="2110920">files</span> <span
  m="2111270">together,</span> <span m="2112780">generate</span> <span
  m="2113170">a</span> <span m="2113220">single</span> <span
  m="2113470">hash,</span> <span m="2114260">and</span> <span
  m="2114450">store</span> <span m="2114630">that</span> <span
  m="2114840">one</span> <span m="2115000">hash.</span></p><p><span
  m="2125900">So</span> <span m="2126840">hash</span> <span
  m="2127030">everything</span> <span m="2127700">in</span> <span
  m="2127890">one</span> <span m="2128080">try.</span> <span
  m="2129860">Then</span> <span m="2130070">we</span> <span
  m="2130220">do</span> <span m="2130420">have</span> <span m="2131770">o</span>
  <span m="2132040">of 1</span> <span m="2132220">space,</span> <span
  m="2134970">but</span> <span m="2135110">there's</span> <span
  m="2135360">a</span> <span m="2135430">bigger</span> <span
  m="2135660">problem.</span> <span m="2139190">Can</span> <span
  m="2139370">anyone</span> <span m="2139610">tell</span> <span
  m="2139730">me?</span></p><p><span m="2143581">AUDIENCE: You</span> <span
  m="2144074">don't know</span> <span m="2144567">which file to</span> <span
  m="2145060">modify?</span></p><p><span m="2149500">PROFESSOR: Oh,</span> <span
  m="2150610">OK,</span> <span m="2151140">I</span> <span
  m="2151280">think</span> <span m="2152430">you</span> <span
  m="2152540">are</span> <span m="2152610">thinking</span> <span
  m="2152800">in</span> <span m="2153970">the</span> <span
  m="2154370">right</span> <span m="2154620">thing.</span> <span
  m="2155320">So</span> <span m="2155950">how</span> <span m="2156110">do</span>
  <span m="2156230">I</span> <span m="2156300">verify?</span> <span
  m="2157860">I</span> <span m="2157970">cannot</span> <span
  m="2158330">verify</span> <span m="2158700">a</span> <span
  m="2158760">single</span> <span m="2159040">file.</span> <span m="2159290">I
  have</span> <span m="2159550">to</span> <span m="2159650">download</span>
  <span m="2160070">all</span> <span m="2160360">the</span> <span
  m="2160450">files</span> <span m="2161640">and</span> <span
  m="2162330">recompute</span> <span m="2162470">a</span> <span
  m="2162610">hash</span> <span m="2162820">to</span> <span
  m="2163300">verify.</span> <span m="2164990">So</span> <span
  m="2165520">the</span> <span m="2165640">time</span> <span
  m="2165930">complexity</span> <span m="2167990">is</span> <span m="2168260">o
  of</span> <span m="2168400">n.</span></p><p><span m="2171670">And,</span>
  <span m="2171890">also,</span> <span m="2172250">if</span> <span
  m="2172410">I</span> <span m="2172490">want</span> <span m="2172660">to</span>
  <span m="2172750">update</span> <span m="2173150">this</span> <span
  m="2173330">file,</span> <span m="2173990">I</span> <span m="2174330">have
  to</span> <span m="2174460">recompute</span> <span m="2174720">the</span>
  <span m="2174810">hash.</span> <span m="2175640">That</span> <span
  m="2175840">involves,</span> <span m="2176560">again,</span> <span
  m="2176910">downloading</span> <span m="2177350">all</span> <span
  m="2177510">the</span> <span m="2178270">files</span> <span
  m="2179180">and</span> <span m="2179360">feed</span> <span
  m="2179540">them</span> <span m="2179690">into</span> <span
  m="2179910">that</span> <span m="2180070">hash.</span> <span
  m="2186150">And</span> <span m="2186590">we</span> <span m="2186790">do</span>
  <span m="2187040">have</span> <span m="2187350">a</span> <span
  m="2187740">better</span> <span m="2187960">solution</span> <span
  m="2188590">than</span> <span m="2189630">both</span> <span
  m="2189840">of</span> <span m="2189950">them,</span> <span
  m="2190940">which</span> <span m="2191120">is</span> <span
  m="2191260">called</span> <span m="2192050">a</span> <span m="2192440">hash
  tree</span> <span m="2193190">or</span> <span m="2193570">a Merkle</span>
  <span m="2193790">tree,</span> <span m="2194460">which was</span> <span
  m="2194600">invented</span> <span m="2195030">by</span> <span
  m="2195140">Merkle.</span></p><p><span m="2198720">What</span> <span
  m="2198860">we</span> <span m="2198990">will</span> <span
  m="2199140">do</span> <span m="2200020">is</span> <span m="2201410">so</span>
  <span m="2201670">first</span> <span m="2202170">for</span> <span
  m="2202360">every</span> <span m="2202590">file,</span> <span
  m="2203650">we're</span> <span m="2203840">going</span> <span
  m="2204030">to</span> <span m="2204140">create</span> <span
  m="2204460">a</span> <span m="2204510">hash.</span> <span
  m="2211020">Let</span> <span m="2211120">me,</span> <span
  m="2211230">again,</span> <span m="2211600">use sigma</span> <span
  m="2212200">because</span> <span m="2213050">h</span> <span
  m="2213510">is</span> <span m="2213770">unclear</span> <span
  m="2214220">whether</span> <span m="2214420">it's</span> <span
  m="2214550">a</span> <span m="2214620">hash</span> <span
  m="2214860">value</span> <span m="2215140">or a</span> <span
  m="2215330">hash</span> <span m="2215550">function.</span> <span
  m="2217290">Sigma</span> <span m="2217780">2,</span> <span
  m="2218340">sigma</span> <span m="2218820">3,</span> <span
  m="2219240">sigma</span> <span m="2219723">4.</span> <span
  m="2224070">So</span> <span m="2224200">I</span> <span m="2224280">said</span>
  <span m="2224490">a</span> <span m="2224530">hash</span> <span
  m="2224820">tree.</span> <span m="2225480">And</span> <span
  m="2226750">guess</span> <span m="2226950">what's</span> <span
  m="2227660">the</span> <span m="2227740">next</span> <span
  m="2227930">step</span> <span m="2228140">to</span> <span
  m="2228631">do?</span></p><p><span m="2229613">AUDIENCE: Cross</span> <span
  m="2230104">the</span> <span m="2230595">hashes.</span></p><p><span
  m="2231580">PROFESSOR: Yeah.</span> <span m="2231800">Exactly.</span> <span
  m="2233485">We're</span> <span m="2233890">going</span> <span
  m="2234120">to</span> <span m="2235510">create</span> <span
  m="2235900">a</span> <span m="2236670">sigma</span> <span
  m="2237090">5,</span> <span m="2238000">which</span> <span
  m="2238220">is</span> <span m="2238420">the</span> <span
  m="2238570">hash</span> <span m="2240495">of</span> <span
  m="2240900">sigma</span> <span m="2241410">1,</span> <span
  m="2241820">concatenated</span> <span m="2242580">with</span> <span
  m="2242920">sigma</span> <span m="2243260">2.</span> <span
  m="2245160">So</span> <span m="2245390">we</span> <span m="2245490">do</span>
  <span m="2245600">the</span> <span m="2245700">same</span> <span
  m="2245890">thing</span> <span m="2246060">here.</span> <span
  m="2251351">And</span> <span m="2251840">so</span> <span m="2251960">you
  all</span> <span m="2252230">know</span> <span m="2252370">what</span> <span
  m="2252510">it</span> <span m="2252590">is,</span> <span
  m="2252770">right?</span> <span m="2253010">I</span> <span
  m="2253070">don't</span> <span m="2253210">need</span> <span
  m="2253330">to</span> <span m="2253420">write</span> <span
  m="2253600">it.</span> <span m="2254840">And</span> <span
  m="2255270">keep</span> <span m="2255460">going</span> <span
  m="2257350">until</span> <span m="2257950">we</span> <span m="2258130">got
  a</span> <span m="2259480">root</span> <span
  m="2259610">hash.</span></p><p><span m="2265280">And</span> <span
  m="2265420">now</span> <span m="2265580">we're</span> <span
  m="2265730">going</span> <span m="2265940">to</span> <span
  m="2266020">store</span> <span m="2266360">this</span> <span
  m="2266590">thing</span> <span m="2268440">locally</span> <span
  m="2269080">on</span> <span m="2269210">the</span> <span
  m="2269330">side.</span> <span m="2278880">So</span> <span
  m="2279100">what's</span> <span m="2279280">the</span> <span
  m="2279370">local</span> <span m="2279670">storage</span> <span
  m="2280060">complexity?</span> <span m="2282950">o of 1--</span> <span
  m="2283780">we're</span> <span m="2283900">only</span> <span
  m="2284180">storing</span> <span m="2284520">one</span> <span
  m="2284710">hash</span> <span m="2285130">locally.</span> <span
  m="2286610">Now,</span> <span m="2286700">what's</span> <span
  m="2286880">the</span> <span m="2287000">time</span> <span
  m="2287230">complexity?</span> <span m="2292970">OK,</span> <span
  m="2293250">so</span> <span m="2293370">how</span> <span m="2293500">do</span>
  <span m="2293620">I</span> <span m="2293680">verify?</span></p><p><span
  m="2295900">Yeah.</span> <span m="2297260">Log in--</span> <span
  m="2299120">how</span> <span m="2299250">do</span> <span m="2299340">I</span>
  <span m="2299420">verify?</span> <span m="2300060">I</span> <span
  m="2300180">need</span> <span m="2300390">to,</span> <span
  m="2301380">so,</span> <span m="2301590">first</span> <span
  m="2301920">verify</span> <span m="2302285">if</span> <span
  m="2302650">this</span> <span m="2302910">hash</span> <span
  m="2303150">matches,</span> <span m="2304450">and</span> <span
  m="2304610">then</span> <span m="2304840">read</span> <span
  m="2305080">this</span> <span m="2305270">hash,</span> <span
  m="2305660">and</span> <span m="2306140">verify</span> <span
  m="2306540">whether</span> <span m="2307420">this</span> <span
  m="2307660">link</span> <span m="2308130">matches,</span> <span
  m="2308920">and</span> <span m="2309060">verify</span> <span
  m="2309400">whether</span> <span m="2309670">this</span> <span
  m="2309870">one</span> <span m="2310030">matches,</span> <span
  m="2311120">and</span> <span m="2311230">then</span> <span
  m="2311380">I'm</span> <span m="2311480">done.</span> <span
  m="2312600">If</span> <span m="2312730">I</span> <span m="2312780">want</span>
  <span m="2312930">to</span> <span m="2312980">update,</span> <span
  m="2313630">I</span> <span m="2313760">also</span> <span
  m="2314050">need</span> <span m="2314190">to</span> <span
  m="2314280">update</span> <span m="2314590">this</span> <span
  m="2314760">hash,</span> <span m="2315640">then</span> <span
  m="2315950">it</span> <span m="2316320">causes</span> <span
  m="2316740">this</span> <span m="2316960">hash</span> <span m="2317300">to
  change</span> <span m="2317640">and</span> <span m="2317760">then</span> <span
  m="2317920">that</span> <span m="2318120">hash</span> <span
  m="2318300">to</span> <span m="2318450">change.</span></p><p><span
  m="2319941">But</span> <span m="2320320">it's</span> <span
  m="2320550">always</span> <span m="2321290">some</span> <span
  m="2321630">path</span> <span m="2322260">in</span> <span
  m="2322420">that</span> <span m="2322640">tree.</span> <span
  m="2323580">It</span> <span m="2323710">doesn't</span> <span
  m="2324020">affect</span> <span m="2324390">anything</span> <span
  m="2325060">globally.</span> <span m="2325930">Question.</span></p><p><span
  m="2326260">AUDIENCE: But</span> <span m="2326740">you're not</span> <span
  m="2327220">storing</span> <span m="2327700">like</span> <span
  m="2328180">sigma 5?</span></p><p><span m="2329140">PROFESSOR: Say</span>
  <span m="2329320">again.</span></p><p><span m="2329580">AUDIENCE:
  You're</span> <span m="2329930">not</span> <span m="2330280">storing
  sigma</span> <span m="2330645">5.</span></p><p><span m="2332280">PROFESSOR:
  I</span> <span m="2332490">am</span> <span m="2332650">not.</span> <span
  m="2332850">I</span> <span m="2332930">have</span> <span m="2333240">to</span>
  <span m="2333370">go</span> <span m="2333570">ahead</span> <span
  m="2333700">and</span> <span m="2333850">read</span> <span
  m="2334040">it.</span></p><p><span m="2335124">AUDIENCE: From</span> <span
  m="2335536">where?</span></p><p><span m="2336360">PROFESSOR: From</span> <span
  m="2337380">Google</span> <span m="2337610">Drive</span> <span
  m="2337910">or</span> <span m="2338010">Dropbox.</span></p><p><span
  m="2340558">AUDIENCE: So are</span> <span m="2341050">we sure</span> <span
  m="2341542">that that is</span> <span m="2342034">secure?</span></p><p><span
  m="2343020">PROFESSOR: OK,</span> <span m="2343730">yeah,</span> <span
  m="2343940">so</span> <span m="2344080">that's</span> <span
  m="2344530">the</span> <span m="2344630">next</span> <span
  m="2344840">thing</span> <span m="2344970">we're</span> <span
  m="2345090">going</span> <span m="2345250">to</span> <span
  m="2345330">do.</span> <span m="2346280">Is</span> <span
  m="2346460">this</span> <span m="2346700">secure?</span> <span
  m="2347580">Or</span> <span m="2347960">in</span> <span
  m="2348100">other</span> <span m="2348260">words,</span> <span
  m="2348960">can</span> <span m="2349430">the</span> <span
  m="2349550">adversary</span> <span m="2350540">change</span> <span
  m="2351080">one</span> <span m="2351320">of</span> <span
  m="2351420">the</span> <span m="2351520">files,</span> <span
  m="2352530">and</span> <span m="2352720">somehow</span> <span
  m="2353090">maintain</span> <span m="2354080">the</span> <span
  m="2354210">same</span> <span m="2355730">root</span> <span
  m="2356130">hash?</span> <span m="2358010">That's</span> <span
  m="2358210">your</span> <span m="2358410">question</span> <span
  m="2358680">then.</span> <span m="2368560">Of</span> <span
  m="2368700">course,</span> <span m="2369020">we</span> <span
  m="2369090">assume the</span> <span m="2369510">hash is</span> <span
  m="2371340">collision</span> <span m="2371750">resistant.</span> <span
  m="2372210">Or</span> <span m="2372440">I</span> <span
  m="2372550">should</span> <span m="2372750">say</span> <span
  m="2373000">if</span> <span m="2373200">the</span> <span
  m="2373300">hash</span> <span m="2373660">is</span> <span
  m="2373860">collision</span> <span m="2374180">resistant,</span> <span
  m="2374930">then</span> <span m="2375120">this</span> <span
  m="2375300">hash</span> <span m="2375540">tree</span> <span
  m="2376330">is</span> <span m="2376770">collision</span> <span
  m="2377160">resistant.</span></p><p><span m="2381590">Any</span> <span
  m="2381740">intuition?</span> <span m="2398140">Or anyone</span> <span
  m="2398490">wants</span> <span m="2398770">to</span> <span
  m="2398790">prove</span> <span m="2399000">it?</span> <span m="2404559">Go
  ahead.</span></p><p><span m="2405048">AUDIENCE: So like</span> <span
  m="2405537">if the</span> <span m="2406026">root</span> <span
  m="2407004">eventually</span> <span m="2407982">one</span> <span
  m="2408471">of</span> <span m="2408960">the leaves</span> <span
  m="2409449">will be</span> <span m="2409938">different</span> <span
  m="2410427">because</span> <span m="2410916">it changes.</span></p><p><span
  m="2411405">PROFESSOR: Yep.</span></p><p><span m="2412383">AUDIENCE:
  Now,</span> <span m="2412872">you want the root</span> <span m="2413361">to be
  the same</span> <span m="2413850">than</span> <span m="2414339">the
  other</span> <span m="2414828">hash</span> <span m="2415317">has</span> <span
  m="2415806">to be</span> <span m="2416295">different,</span> <span
  m="2417273">but there's no</span> <span m="2417762">collisions.</span> <span
  m="2418740">I mean,</span> <span m="2419229">it's hard to find the</span>
  <span m="2419718">other hash.</span></p><p><span m="2422200">PROFESSOR:
  Correct,</span> <span m="2423010">so</span> <span m="2424370">I'll</span>
  <span m="2424530">just</span> <span m="2424700">repeat</span> <span
  m="2424980">what</span> <span m="2425120">you</span> <span
  m="2425210">said,</span> <span m="2425670">but</span> <span
  m="2425840">I'll</span> <span m="2425960">start</span> <span
  m="2426220">with</span> <span m="2426420">the</span> <span
  m="2426620">leaf</span> <span m="2427250">because</span> <span
  m="2427510">that's</span> <span m="2427730">easier</span> <span
  m="2428030">for</span> <span m="2428140">me</span> <span m="2428250">to</span>
  <span m="2428350">think</span> <span m="2428500">about.</span> <span
  m="2428750">So</span> <span m="2429120">say</span> <span m="2429320">I</span>
  <span m="2429400">change</span> <span m="2429750">this</span> <span
  m="2429920">one,</span> <span m="2430860">this</span> <span
  m="2431060">block.</span> <span m="2432160">Now,</span> <span
  m="2432680">I</span> <span m="2432800">claim</span> <span
  m="2433340">this</span> <span m="2433900">hash</span> <span
  m="2434220">here</span> <span m="2434550">will</span> <span
  m="2434770">change.</span> <span m="2435800">If</span> <span
  m="2435920">it</span> <span m="2436040">doesn't,</span> <span
  m="2436460">then</span> <span m="2436670">I</span> <span
  m="2436760">have</span> <span m="2436950">found</span> <span
  m="2437190">the</span> <span m="2437250">collision.</span></p><p><span
  m="2439090">Because this</span> <span m="2439380">x4</span> <span
  m="2439860">prime</span> <span m="2441540">has</span> <span
  m="2441730">the</span> <span m="2441820">same</span> <span
  m="2442030">hash</span> <span m="2442480">as</span> <span
  m="2442660">the</span> <span m="2442770">original</span> <span
  m="2443310">x4.</span> <span m="2444700">So</span> <span m="2444830">if</span>
  <span m="2445000">this</span> <span m="2445330">sigma</span> <span
  m="2445680">4</span> <span m="2446170">changes,</span> <span
  m="2446880">then</span> <span m="2447090">sigma</span> <span
  m="2447410">6</span> <span m="2447650">will</span> <span
  m="2447820">change.</span> <span m="2448860">Otherwise,</span> <span
  m="2449160">I</span> <span m="2449270">have</span> <span
  m="2449420">found</span> <span m="2449590">the</span> <span
  m="2449670">collision.</span> <span m="2451960">Because</span> <span
  m="2452140">this</span> <span m="2452280">sigma</span> <span
  m="2452870">3</span> <span m="2453290">concatenate</span> <span
  m="2453890">with the</span> <span m="2454250">new</span> <span
  m="2454390">sigma</span> <span m="2454720">4</span> <span m="2455770">is
  my</span> <span m="2455900">collision.</span> <span m="2456780">So</span>
  <span m="2457230">same</span> <span m="2457470">argument--</span> <span
  m="2458050">either</span> <span m="2458390">this</span> <span
  m="2458560">one</span> <span m="2458740">changes,</span> <span
  m="2459300">or</span> <span m="2459470">I</span> <span m="2459570">have</span>
  <span m="2459720">found</span> <span m="2459890">the</span> <span
  m="2459950">collision.</span> <span m="2460970">I repeat the</span> <span
  m="2461170">argument</span> <span m="2462300">all</span> <span
  m="2462430">the</span> <span m="2462510">way</span> <span
  m="2462620">to</span> <span m="2463420">the</span> <span
  m="2463510">root.</span> <span m="2471500">Any</span> <span
  m="2471660">question</span> <span m="2471930">about</span> <span
  m="2472120">that?</span></p><p><span m="2473775">AUDIENCE: What if</span>
  <span m="2474270">like</span> <span m="2475260">the</span> <span
  m="2475755">adversary</span> <span m="2476250">changes</span> <span
  m="2476745">like two</span> <span m="2477240">hash</span> <span
  m="2477735">options--for example,</span> <span m="2478230">x1</span> <span
  m="2479715">and</span> <span m="2480705">x2--</span> <span
  m="2481695">but</span> <span m="2482685">sigma 1</span> <span
  m="2483180">and</span> <span m="2483675">sigma 2</span> <span
  m="2484170">changes,</span> <span m="2485160">but</span> <span
  m="2485655">sigma</span> <span m="2486150">5</span> <span
  m="2486645">stays</span> <span m="2487140">the same?</span></p><p><span
  m="2487640">PROFESSOR: OK,</span> <span m="2487990">so</span> <span
  m="2488210">then</span> <span m="2488850">we</span> <span
  m="2488950">have</span> <span m="2489120">found</span> <span
  m="2489310">the</span> <span m="2489370">collision</span> <span
  m="2489980">that</span> <span m="2490150">is</span> <span
  m="2491280">sigma</span> <span m="2491660">1</span> <span
  m="2492330">concatenated</span> <span m="2492880">with</span> <span
  m="2493020">sigma</span> <span m="2493270">2.</span> <span
  m="2493910">That's</span> <span m="2494120">a</span> <span
  m="2494180">collision</span> <span m="2494710">with</span> <span
  m="2495320">the</span> <span m="2495470">new</span> <span
  m="2495600">sigma</span> <span m="2495740">1</span> <span
  m="2496210">concatenated</span> <span m="2496910">with the</span> <span
  m="2497160">new</span> <span m="2497280">sigma</span> <span
  m="2497390">2.</span> <span m="2501919">Make sense?</span></p><p><span
  m="2508793">AUDIENCE: If the</span> <span m="2509284">concatenation</span>
  <span m="2509775">stayed</span> <span m="2510266">the</span> <span
  m="2510757">same,</span> <span m="2511248">like</span> <span
  m="2511739">sigma</span> <span m="2512230">1 and</span> <span
  m="2512721">sigma</span> <span m="2513212">2</span> <span
  m="2513703">concatenation.</span></p><p><span m="2515200">PROFESSOR: So</span>
  <span m="2515520">if the</span> <span m="2515910">concatenation</span> <span
  m="2516590">stayed</span> <span m="2516820">the</span> <span
  m="2516880">same,</span> <span m="2517140">that</span> <span
  m="2517360">means</span> <span m="2518090">both</span> <span
  m="2518410">of</span> <span m="2518510">them</span> <span
  m="2518680">are</span> <span m="2518760">the</span> <span
  m="2518850">same.</span></p><p><span m="2519100">AUDIENCE: They</span> <span
  m="2519578">had to make</span> <span m="2520056">sure</span> <span
  m="2520534">they</span> <span m="2521012">are</span> <span
  m="2521490">changed?</span></p><p><span m="2523880">PROFESSOR: So</span> <span
  m="2523960">I'm</span> <span m="2524170">not</span> <span
  m="2524290">sure</span> <span m="2524740">I</span> <span
  m="2524840">understand</span> <span m="2525270">your</span> <span
  m="2525360">question.</span> <span m="2525680">So</span> <span
  m="2526080">concatenation</span> <span m="2526720">is</span> <span
  m="2526910">basically</span> <span m="2527410">just</span> <span
  m="2527690">a</span> <span m="2527990">bunch</span> <span
  m="2528180">of</span> <span m="2528280">bits</span> <span
  m="2528680">then</span> <span m="2528890">followed</span> <span
  m="2529200">by</span> <span m="2529330">another</span> <span
  m="2529590">bunch</span> <span m="2529760">of</span> <span
  m="2529890">bits.</span> <span m="2530660">If</span> <span
  m="2530880">this</span> <span m="2531070">entire</span> <span
  m="2531400">thing</span> <span m="2531590">is</span> <span
  m="2531680">the</span> <span m="2531770">same,</span> <span
  m="2532120">that</span> <span m="2532150">means</span> <span
  m="2532400">this</span> <span m="2532640">part</span> <span
  m="2532870">is</span> <span m="2533000">the</span> <span
  m="2533110">same</span> <span m="2533380">and</span> <span
  m="2533460">this</span> <span m="2533600">part</span> <span
  m="2533780">is</span> <span m="2533910">the</span> <span
  m="2534000">same.</span> <span m="2535360">And</span> <span
  m="2535530">if</span> <span m="2535610">your</span> <span
  m="2535710">sigma</span> <span m="2536360">1,</span> <span
  m="2536730">new</span> <span m="2536890">sigma</span> <span
  m="2537220">1</span> <span m="2537530">is</span> <span m="2537690">the</span>
  <span m="2537780">same</span> <span m="2538080">as</span> <span
  m="2538190">your</span> <span m="2538690">old</span> <span
  m="2538890">sigma</span> <span m="2539200">1,</span> <span
  m="2539480">that</span> <span m="2539690">means</span> <span
  m="2539920">I</span> <span m="2540000">have</span> <span
  m="2540160">found</span> <span m="2540330">a</span> <span
  m="2540380">collision</span> <span m="2540660">here.</span> <span
  m="2541920">Because we</span> <span m="2542050">changed</span> <span
  m="2542370">it,</span> <span m="2542650">but</span> <span
  m="2542880">your</span> <span m="2543000">sigma</span> <span
  m="2543310">doesn't change.</span></p><p><span m="2566500">So</span> <span
  m="2566650">lastly,</span> <span m="2567880">I'm</span> <span
  m="2568860">going</span> <span m="2569070">to</span> <span
  m="2569150">do</span> <span m="2569280">a</span> <span
  m="2569340">quick</span> <span m="2569540">review</span> <span
  m="2570160">of</span> <span m="2570430">the</span> <span
  m="2570530">knapsack</span> <span m="2570940">problem</span> <span
  m="2572140">because</span> <span m="2572530">I</span> <span
  m="2572640">think</span> <span m="2573230">in</span> <span
  m="2573300">the</span> <span m="2573410">lecture,</span> <span
  m="2574640">we</span> <span m="2574910">may run</span> <span
  m="2575070">out</span> <span m="2575210">of</span> <span
  m="2575260">time</span> <span m="2575540">and</span> <span m="2575680">I
  didn't mention</span> <span m="2576410">everything.</span> <span
  m="2590660">So</span> <span m="2590950">if</span> <span m="2591060">you</span>
  <span m="2591470">recall,</span> <span m="2591850">the</span> <span
  m="2592500">knapsack</span> <span m="2592720">cryptosystem,</span> <span
  m="2594110">it</span> <span m="2594310">says</span> <span
  m="2595320">you</span> <span m="2595440">have</span> <span
  m="2595660">a</span> <span m="2597410">knapsack</span> <span
  m="2597810">problem.</span> <span m="2601700">I'll</span> <span
  m="2602180">call</span> <span m="2602640">u1</span> <span
  m="2602830">to</span> <span m="2603140">un.</span> <span
  m="2603950">And</span> <span m="2604090">then</span> <span
  m="2604210">we're</span> <span m="2604380">going</span> <span
  m="2604590">to</span> <span m="2604710">transform</span> <span
  m="2605310">it.</span></p><p><span m="2606520">OK,</span> <span
  m="2606710">this</span> <span m="2606910">is</span> <span m="2607070">a</span>
  <span m="2607310">super</span> <span m="2607610">increasing</span> <span
  m="2610150">sequence.</span> <span m="2610860">I'm</span> <span
  m="2611010">going</span> <span m="2611210">to</span> <span
  m="2611320">transform</span> <span m="2611790">into</span> <span
  m="2612040">a</span> <span m="2612130">general</span> <span
  m="2612550">one</span> <span m="2616370">by</span> <span
  m="2617030">multiplying</span> <span m="2617800">n</span> <span
  m="2619190">and</span> <span m="2619380">then</span> <span
  m="2620320">mod</span> <span m="2620560">m.</span> <span m="2623125">So</span>
  <span m="2623580">this</span> <span m="2623800">is</span> <span
  m="2623970">an</span> <span m="2624180">easy</span> <span
  m="2624490">problem,</span> <span m="2625030">and</span> <span
  m="2625270">that</span> <span m="2625480">is</span> <span m="2625590">a</span>
  <span m="2625650">hard</span> <span m="2625900">problem.</span> <span
  m="2626860">So</span> <span m="2626960">how</span> <span m="2627120">do</span>
  <span m="2627240">I</span> <span m="2627370">encrypt?</span> <span
  m="2628310">I'm</span> <span m="2628590">going</span> <span
  m="2628820">to</span> <span m="2631020">take</span> <span m="2631270">a</span>
  <span m="2631570">subset</span> <span m="2632000">sum,</span> <span
  m="2634670">which</span> <span m="2634940">is</span> <span
  m="2635100">mi,</span> <span m="2636310">Wi,</span> <span
  m="2637020">where</span> <span m="2637320">mi</span> <span m="2637350">is
  the</span> <span m="2637810">i-th</span> <span m="2638000">bit</span> <span
  m="2638270">in the</span> <span m="2638761">message.</span></p><p><span
  m="2642200">So</span> <span m="2642550">how</span> <span m="2642880">do</span>
  <span m="2642970">I</span> <span m="2643050">decrypt?</span> <span
  m="2644880">I'll</span> <span m="2645270">take</span> <span
  m="2645510">this,</span> <span m="2647450">transform</span> <span
  m="2647930">this</span> <span m="2648110">s</span> <span
  m="2648670">back</span> <span m="2649110">to</span> <span
  m="2649606">the</span> <span m="2652210">super</span> <span
  m="2652470">increasing</span> <span m="2652880">domain</span> <span
  m="2654070">by</span> <span m="2654990">multiplying</span> <span
  m="2655550">inverse of</span> <span m="2655960">n.</span> <span
  m="2658660">So</span> <span m="2658750">that's</span> <span
  m="2659000">going</span> <span m="2659210">to</span> <span
  m="2659320">be</span> <span m="2662670">inverse</span> <span
  m="2662935">of</span> <span m="2663200">n</span> <span
  m="2663670">multiplied</span> <span m="2664320">by</span> <span
  m="2664520">this</span> <span m="2666140">mi</span> <span
  m="2666750">Wi.</span> <span m="2668630">That's</span> <span
  m="2668820">how</span> <span m="2668970">I</span> <span
  m="2669100">encrypt</span> <span m="2669440">it.</span> <span
  m="2670940">And</span> <span m="2671080">then</span> <span
  m="2671290">each</span> <span m="2672210">Wi</span> <span
  m="2673520">is</span> <span m="2673960">n</span> <span
  m="2674480">times</span> <span m="2677500">ui.</span></p><p><span
  m="2682000">So far</span> <span m="2682160">so</span> <span
  m="2682200">good.</span> <span m="2684200">So</span> <span
  m="2684360">that</span> <span m="2684730">gives</span> <span
  m="2684980">me</span> <span m="2686830">mi</span> <span
  m="2688550">times</span> <span m="2689440">ui</span> <span
  m="2689950">sigma.</span> <span m="2693720">Of course,</span> <span
  m="2694050">every</span> <span m="2694350">step</span> <span
  m="2694700">is</span> <span m="2695280">modulo</span> <span
  m="2695860">m.</span> <span m="2699500">So</span> <span m="2699730">the</span>
  <span m="2700300">first</span> <span m="2700610">thing</span> <span
  m="2700790">I'm</span> <span m="2700890">going</span> <span
  m="2701120">to</span> <span m="2701690">claim</span> <span
  m="2702260">is</span> <span m="2702430">that</span> <span m="2703230">m</span>
  <span m="2703560">has</span> <span m="2703780">to</span> <span
  m="2703930">be</span> <span m="2704090">larger</span> <span
  m="2704740">than</span> <span m="2705060">sigma</span> <span
  m="2705910">ui.</span> <span m="2708040">If</span> <span
  m="2708200">that's</span> <span m="2708410">the</span> <span
  m="2708520">case,</span> <span m="2709230">then</span> <span
  m="2710000">the</span> <span m="2710140">t--</span> <span
  m="2710910">my</span> <span m="2711080">t</span> <span m="2711360">is</span>
  <span m="2711640">just</span> <span m="2711890">this</span> <span
  m="2712980">subset</span> <span m="2713370">sum.</span></p><p><span
  m="2713950">So</span> <span m="2714120">if</span> <span m="2714280">I</span>
  <span m="2714380">solve</span> <span m="2715320">this</span> <span
  m="2716090">knapsack</span> <span m="2716450">problem,</span> <span
  m="2717380">I</span> <span m="2717500">get</span> <span m="2717680">the</span>
  <span m="2717760">same</span> <span m="2718010">answer</span> <span
  m="2718450">as</span> <span m="2718650">solving</span> <span
  m="2719050">the</span> <span m="2719420">original,</span> <span
  m="2720310">the</span> <span m="2720540">general</span> <span
  m="2720900">knapsack</span> <span m="2721270">problem.</span> <span
  m="2722970">If</span> <span m="2723110">my</span> <span m="2723270">m</span>
  <span m="2723510">is</span> <span m="2723650">not</span> <span
  m="2724250">that</span> <span m="2724490">large,</span> <span m="2724980">if
  the m</span> <span m="2725230">is</span> <span m="2725360">too</span> <span
  m="2725510">small,</span> <span m="2726100">then</span> <span
  m="2726310">I</span> <span m="2726360">have</span> <span m="2726490">a</span>
  <span m="2726550">problem.</span> <span m="2727340">Because</span> <span
  m="2727690">then</span> <span m="2727860">my t</span> <span m="2728140">will
  be</span> <span m="2728420">the</span> <span m="2728990">subset</span> <span
  m="2729355">sum</span> <span m="2730360">minus</span> <span
  m="2730940">sum</span> <span m="2731220">multiple</span> <span
  m="2731640">of</span> <span m="2731810">m.</span> <span
  m="2733160">Then</span> <span m="2733480">it's</span> <span
  m="2733660">a</span> <span m="2733770">different</span> <span
  m="2734150">problem.</span> <span m="2734790">I</span> <span
  m="2734900">do</span> <span m="2735030">not</span> <span
  m="2735270">get</span> <span m="2735430">the</span> <span
  m="2735520">same</span> <span m="2735790">message</span> <span
  m="2735910">back.</span></p><p><span m="2742080">OK,</span> <span
  m="2742650">then</span> <span m="2745090">we</span> <span
  m="2745220">have</span> <span m="2745400">a</span> <span
  m="2745470">problem.</span> <span m="2747060">So</span> <span
  m="2750520">because</span> <span m="2750710">we</span> <span
  m="2751130">defined</span> <span m="2751510">density</span> <span
  m="2752150">to</span> <span m="2752310">be</span> <span m="2752500">n</span>
  <span m="2753610">over</span> <span m="2753870">the</span> <span
  m="2754130">log</span> <span m="2754480">of</span> <span
  m="2756582">max</span> <span m="2757460">ui.</span> <span m="2758936">Does
  everyone</span> <span m="2759430">remember</span> <span
  m="2759720">this</span> <span m="2759910">part?</span> <span
  m="2763050">So</span> <span m="2763120">each</span> <span
  m="2763400">ui</span> <span m="2765990">is</span> <span m="2766190">in</span>
  <span m="2766320">the</span> <span m="2766450">range</span> <span
  m="2766950">of</span> <span m="2767530">1</span> <span m="2768020">to</span>
  <span m="2768280">m,</span> <span m="2769720">or</span> <span
  m="2769840">maybe</span> <span m="2770100">0</span> <span m="2770410">to
  m.</span> <span m="2770560">If</span> <span m="2772050">I</span> <span
  m="2772140">have</span> <span m="2772370">a</span> <span
  m="2772620">bunch</span> <span m="2772830">of</span> <span
  m="2772950">them,</span> <span m="2773240">then</span> <span m="2773950">this
  is</span> <span m="2774190">not</span> <span m="2774500">super</span> <span
  m="2774750">rigorous.</span></p><p><span m="2775430">If</span> <span
  m="2775560">I</span> <span m="2775650">have</span> <span m="2775810">a</span>
  <span m="2775860">bunch</span> <span m="2776070">of</span> <span
  m="2776180">them,</span> <span m="2776380">chances</span> <span
  m="2776810">are</span> <span m="2776920">that</span> <span
  m="2777170">some</span> <span m="2777380">of</span> <span
  m="2777490">them</span> <span m="2777710">are</span> <span
  m="2779430">very</span> <span m="2779630">close</span> <span
  m="2780050">to</span> <span m="2780190">m.</span> <span
  m="2781960">Because</span> <span m="2782490">it's</span> <span
  m="2782610">unlikely</span> <span m="2783050">that</span> <span
  m="2783260">all</span> <span m="2783380">of</span> <span
  m="2783490">them</span> <span m="2783700">are</span> <span
  m="2785060">small.</span> <span m="2785700">So</span> <span
  m="2786090">this</span> <span m="2786340">thing</span> <span
  m="2786870">is</span> <span m="2787100">roughly</span> <span
  m="2788460">n</span> <span m="2788840">over</span> <span
  m="2790340">log</span> <span m="2791160">of</span> <span m="2792090">m.</span>
  <span m="2798450">So</span> <span m="2798620">then</span> <span
  m="2798820">we</span> <span m="2798940">have</span> <span m="2799890">a</span>
  <span m="2800050">dilemma.</span> <span m="2801070">If</span> <span
  m="2801300">we</span> <span m="2803120">set</span> <span m="2803580">m</span>
  <span m="2803890">to</span> <span m="2804080">be</span> <span
  m="2804570">a</span> <span m="2804690">small</span> <span
  m="2805040">number,</span> <span m="2806420">then</span> <span
  m="2806840">my</span> <span m="2806990">density</span> <span
  m="2807265">is</span> <span m="2807540">fine,</span> <span
  m="2808410">but</span> <span m="2808560">that</span> <span
  m="2808790">means</span> <span m="2809180">all</span> <span
  m="2809390">of</span> <span m="2809500">my</span> <span
  m="2809670">ui's</span> <span m="2810190">needs</span> <span
  m="2810360">to</span> <span m="2810460">be</span> <span
  m="2810580">small</span> <span m="2810950">because</span> <span
  m="2811560">m</span> <span m="2812010">needs</span> <span
  m="2812130">to</span> <span m="2812230">be</span> <span
  m="2812330">greater</span> <span m="2812680">than</span> <span
  m="2813290">the</span> <span m="2813390">sum</span> <span
  m="2813610">of</span> <span m="2813710">them.</span></p><p><span
  m="2814730">If</span> <span m="2815210">all</span> <span
  m="2815580">the</span> <span m="2815950">ui's</span> <span
  m="2816330">are</span> <span m="2816410">small,</span> <span
  m="2816890">then</span> <span m="2817080">I</span> <span
  m="2817140">have</span> <span m="2817320">a</span> <span
  m="2817370">very</span> <span m="2817560">limited</span> <span
  m="2817910">choices</span> <span m="2818610">of</span> <span
  m="2818750">them,</span> <span m="2819680">then</span> <span
  m="2820130">actually</span> <span m="2820640">an</span> <span
  m="2820880">attacker</span> <span m="2821290">can</span> <span
  m="2821420">just guess</span> <span m="2822260">what</span> <span
  m="2822390">ui</span> <span m="2823030">I</span> <span
  m="2823610">chose</span> <span m="2824010">by</span> <span m="2824390">a brute
  force</span> <span m="2824820">algorithm</span> <span m="2825710">or</span>
  <span m="2826050">something</span> <span m="2826380">like</span> <span
  m="2826570">that.</span> <span m="2827210">And</span> <span
  m="2827530">if</span> <span m="2827960">I</span> <span
  m="2828100">choose</span> <span m="2828380">m</span> <span
  m="2828630">to</span> <span m="2828740">be</span> <span
  m="2829030">large,</span> <span m="2829640">or</span> <span
  m="2829830">if</span> <span m="2829950">I</span> <span
  m="2830030">choose</span> <span m="2830290">all</span> <span
  m="2830440">the</span> <span m="2830490">ui's</span> <span
  m="2830800">to</span> <span m="2830980">be</span> <span
  m="2831140">large,</span> <span m="2831930">to</span> <span
  m="2832170">choose</span> <span m="2832400">them</span> <span
  m="2832550">from</span> <span m="2832720">large range,</span> <span
  m="2833820">then</span> <span m="2834060">my</span> <span m="2834180">m</span>
  <span m="2835450">is</span> <span m="2835630">going</span> <span
  m="2835800">to</span> <span m="2835870">be</span> <span
  m="2835970">very</span> <span m="2836190">large.</span> <span
  m="2836980">And</span> <span m="2837120">this</span> <span
  m="2837280">density</span> <span m="2838520">is</span> <span
  m="2838730">low.</span> <span m="2839740">And</span> <span
  m="2840170">that's</span> <span m="2840450">vulnerable</span> <span
  m="2841170">to the low</span> <span m="2841370">density</span> <span
  m="2841760">attacks.</span> <span m="2843510">And</span> <span
  m="2843820">so</span> <span m="2843950">how low</span> <span
  m="2844400">a</span> <span m="2844450">density is</span> <span
  m="2844910">considered</span> <span m="2845290">low?</span></p><p><span
  m="2845740">So</span> <span m="2847760">several</span> <span
  m="2848080">people</span> <span m="2848900">proposed</span> <span
  m="2849570">that</span> <span m="2851290">based</span> <span
  m="2851540">on</span> <span m="2851670">heuristics,</span> <span
  m="2852430">that</span> <span m="2852830">if</span> <span
  m="2853070">this</span> <span m="2853280">density</span> <span
  m="2854400">is</span> <span m="2854610">less</span> <span
  m="2854840">than</span> <span m="2855250">0.45,</span> <span
  m="2857410">then</span> <span m="2858130">it's</span> <span
  m="2858320">considered</span> <span m="2858690">low</span> <span
  m="2858890">density,</span> <span m="2859440">and</span> <span
  m="2859700">it</span> <span m="2859860">can</span> <span m="2860010">be</span>
  <span m="2860140">attacked.</span> <span m="2861320">And</span> <span
  m="2861490">this</span> <span m="2861900">threshold</span> <span
  m="2863160">had been</span> <span m="2864230">improved.</span> <span
  m="2867840">So</span> <span m="2868720">but</span> <span
  m="2869140">while</span> <span m="2869950">most</span> <span
  m="2870360">of</span> <span m="2870500">the</span> <span
  m="2870610">knapsack</span> <span m="2871580">cryptosystems</span> <span
  m="2872380">are</span> <span m="2872470">broken,</span> <span
  m="2872990">there</span> <span m="2873270">are</span> <span
  m="2873460">few</span> <span m="2873910">that</span> <span
  m="2874160">have</span> <span m="2875140">so</span> <span
  m="2875350">far</span> <span m="2875810">stood</span> <span
  m="2876070">the</span> <span m="2876200">test</span> <span
  m="2876450">of</span> <span m="2876540">time.</span> <span
  m="2877280">So</span> <span m="2877420">they</span> <span
  m="2877550">are</span> <span m="2877650">still</span> <span
  m="2877830">interesting</span> <span m="2878380">because</span> <span
  m="2878730">knapsack</span> <span m="2879150">problems,</span> <span
  m="2879940">knapsack</span> <span m="2880430">cryptosystems</span> <span
  m="2881530">will</span> <span m="2881760">be</span> <span
  m="2881930">much</span> <span m="2882170">faster</span> <span
  m="2882990">than</span> <span m="2883580">RSA</span> <span
  m="2884400">or</span> <span m="2884600">any</span> <span
  m="2884790">number</span> <span m="2885140">theory</span> <span
  m="2885260">based,</span> <span m="2886170">because</span> <span
  m="2886540">we are</span> <span m="2886730">just</span> <span
  m="2886940">adding</span> <span m="2887210">numbers</span> <span
  m="2887560">here.</span></p><p><span m="2888220">An</span> <span
  m="2888420">RSA</span> <span m="2889010">have</span> <span
  m="2889310">this</span> <span m="2889580">operation</span> <span
  m="2890770">where</span> <span m="2890990">m</span> <span m="2891270">is
  a</span> <span m="2891460">1,000</span> <span m="2891980">bit</span> <span
  m="2892090">number,</span> <span m="2892500">and</span> <span
  m="2892660">e</span> <span m="2892900">is</span> <span m="2893040">also</span>
  <span m="2893330">1,000</span> <span m="2893830">bit</span> <span
  m="2893930">number.</span> <span m="2894620">And</span> <span
  m="2896030">take</span> <span m="2896260">this</span> <span
  m="2897050">exponentiation</span> <span m="2897750">is</span> <span
  m="2897910">actually</span> <span m="2898360">very</span> <span
  m="2898570">slow.</span> <span m="2899400">So</span> <span
  m="2899570">knapsack</span> <span m="2900730">cryptosystem</span> <span
  m="2901150">are</span> <span m="2901360">still</span> <span
  m="2901490">interesting.</span> <span m="2902620">However,</span> <span
  m="2903040">the</span> <span m="2903550">original</span> <span
  m="2903830">motivation</span> <span m="2904890">turned</span> <span
  m="2905240">out</span> <span m="2905450">to</span> <span m="2905530">be</span>
  <span m="2906170">unsuccessful.</span> <span m="2907440">The</span> <span
  m="2907630">original</span> <span m="2907880">motivation</span> <span
  m="2908300">is</span> <span m="2908470">to</span> <span
  m="2908610">base</span> <span m="2911490">cryptography</span> <span
  m="2912890">on</span> <span m="2913080">the</span> <span m="2913180">NP
  complete</span> <span m="2913500">problem.</span></p><p><span
  m="2914490">That's</span> <span m="2914770">not</span> <span
  m="2914980">going</span> <span m="2915160">to</span> <span
  m="2915260">work</span> <span m="2915710">because</span> <span
  m="2916520">NP</span> <span m="2916630">problems</span> <span
  m="2917870">are</span> <span m="2918150">hard,</span> <span
  m="2919070">only</span> <span m="2919370">in the</span> <span
  m="2919470">worst</span> <span m="2919720">case.</span> <span
  m="2920520">And</span> <span m="2920920">we</span> <span
  m="2921120">need</span> <span m="2921820">cryptography</span> <span
  m="2922450">to</span> <span m="2922560">be</span> <span
  m="2922680">hard</span> <span m="2923660">in the</span> <span
  m="2923820">average</span> <span m="2924140">case.</span> <span
  m="2925540">Because</span> <span m="2925840">if</span> <span
  m="2925970">they</span> <span m="2926100">are</span> <span
  m="2926350">only</span> <span m="2926580">hard in the</span> <span
  m="2926950">worst</span> <span m="2927190">case,</span> <span
  m="2927550">that</span> <span m="2927740">means</span> <span
  m="2927990">there</span> <span m="2928150">are</span> <span
  m="2928220">several</span> <span m="2928540">instances</span> <span
  m="2929050">of</span> <span m="2929500">this</span> <span
  m="2929710">problem</span> <span m="2930110">that</span> <span
  m="2930290">are</span> <span m="2930350">hard.</span> <span
  m="2931160">So</span> <span m="2931530">either</span> <span
  m="2932145">you</span> <span m="2932500">pick</span> <span
  m="2932750">a</span> <span m="2932830">secret</span> <span
  m="2933130">key</span> <span m="2934130">that</span> <span
  m="2934680">doesn't</span> <span m="2935030">correspond</span> <span
  m="2935520">to</span> <span m="2935860">a</span> <span m="2935920">hard</span>
  <span m="2936200">problem,</span> <span m="2937260">or</span> <span
  m="2937620">you</span> <span m="2937750">pick</span> <span
  m="2937880">a</span> <span m="2938000">secret</span> <span
  m="2938345">key</span> <span m="2938690">that's</span> <span
  m="2939740">corresponds</span> <span m="2940130">to</span> <span
  m="2940250">a</span> <span m="2940300">hard</span> <span
  m="2940530">problem.</span></p><p><span m="2940910">But</span> <span
  m="2941140">everyone</span> <span m="2941480">else</span> <span
  m="2941670">picks</span> <span m="2941870">the</span> <span
  m="2941990">same</span> <span m="2942180">secret</span> <span
  m="2942650">key</span> <span m="2944290">because</span> <span
  m="2944510">everyone</span> <span m="2944820">wants</span> <span
  m="2945010">to</span> <span m="2945100">be</span> <span
  m="2945200">secure.</span> <span m="2947430">That's</span> <span
  m="2947700">the</span> <span m="2948100">reason</span> <span
  m="2948880">why</span> <span m="2950470">it's</span> <span
  m="2950690">unlikely</span> <span m="2951330">to</span> <span
  m="2952710">get</span> <span m="2952920">cryptography</span> <span
  m="2953520">from</span> <span m="2953910">NP</span> <span
  m="2954010">hard</span> <span m="2954240">problems.</span> <span
  m="2958470">That's</span> <span m="2958680">all</span> <span
  m="2958800">for</span> <span m="2958910">today's</span> <span
  m="2959220">recitation.</span> <span m="2959860">And</span> <span
  m="2960740">thanks</span> <span m="2960990">everyone</span> <span
  m="2961320">for</span> <span m="2961750">the</span> <span
  m="2961840">entire</span> <span m="2962060">semester.</span> <span
  m="2962660">Thank</span> <span m="2962960">you for participation.</span></p>
uid: bacbfc2882416b8008c96c300030e6b1
type: course
layout: video
---
