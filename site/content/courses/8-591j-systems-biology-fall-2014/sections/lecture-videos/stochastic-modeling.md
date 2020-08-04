---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Prof. Jeff Gore discusses
  modeling stochastic systems. The discussion of the master equation continues
  from last lecture. Then he talks about the Gillespie algorithm, an exact way
  to simulate stochastic systems. He then moves on to the Fokker-Planck
  equation.</p> <p><strong>Instructor:</strong> Prof. Jeff Gore</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: EXBO08-78IU
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: Video-YouTube-Stream
    type: Video
    uid: dee26ebf711531bfec886ca24721e23b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/EXBO08-78IU/default.jpg'
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 45a8898c9e23045458f9e7ddc12578bc
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1020693367'
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: Video-iTunes U-MP4
    type: Video
    uid: 26fa6a73b1a3df5e815dad77960fd9cb
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT8.591JF14/MIT8_591JF14_lec10_300k.mp4'
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 38e3f0a7556890b929b583e12257ca4f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: EXBO08-78IU
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f7f0865c50ad17577936ab2e1ce2fb03
  - id: EXBO08-78IU.srt
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/stochastic-modeling/EXBO08-78IU.srt
    title: 3play caption file
    type: null
    uid: e60310e66ffa54d9d6697c7306f6ac6f
  - id: EXBO08-78IU.pdf
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    technical_location: >-
      https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/stochastic-modeling/EXBO08-78IU.pdf
    title: 3play pdf file
    type: null
    uid: 7b1cc0c5e4ed2aebca0c3cd32a7736a4
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2cb2e67063cf01bdb83fbd2bb4ff8e4d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a84a49e74da72edc1088dcd34c1649d5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a12db6737b5ae11160f1789ea4d6a155
inline_embed_id: 57962098stochasticmodeling48579739
order_index: 104
parent_uid: 2c19124a07b81891918cf65ff26fbc3c
related_resources_text: ''
short_url: stochastic-modeling
technical_location: >-
  https://ocw.mit.edu/courses/physics/8-591j-systems-biology-fall-2014/lecture-videos/stochastic-modeling
title: Stochastic Modeling
transcript: >-
  <p><span m="70">The</span> <span m="190">following</span> <span
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
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21225">PROFESSOR: Today</span> <span m="21610">what</span> <span
  m="21790">we</span> <span m="21840">want</span> <span m="21980">to</span>
  <span m="22020">do</span> <span m="22240">is</span> <span
  m="22750">discuss</span> <span m="23520">various</span> <span
  m="23860">approaches</span> <span m="24340">that</span> <span
  m="24520">you</span> <span m="24660">might</span> <span m="24880">want</span>
  <span m="25010">to</span> <span m="25070">take</span> <span
  m="25420">towards</span> <span m="26100">trying</span> <span
  m="26330">to</span> <span m="26370">understand</span> <span
  m="27360">stochastic</span> <span m="27970">systems.</span> <span
  m="28330">In</span> <span m="28400">particular,</span> <span
  m="29000">how</span> <span m="29210">is</span> <span m="29310">it that</span>
  <span m="29420">we</span> <span m="29550">might</span> <span
  m="29750">model</span> <span m="30120">or</span> <span
  m="30210">simulate</span> <span m="31085">a</span> <span
  m="31370">stochastic</span> <span m="31950">system?</span></p><p><span
  m="32820">Now,</span> <span m="33770">we</span> <span m="33980">will</span>
  <span m="34190">kind</span> <span m="34300">of</span> <span
  m="34350">continue</span> <span m="34770">our</span> <span
  m="34870">discussion</span> <span m="35300">of</span> <span
  m="35370">the</span> <span m="35440">master</span> <span
  m="35870">equation</span> <span m="36280">from</span> <span
  m="36450">last</span> <span m="36740">time.</span> <span
  m="37280">Hopefully</span> <span m="37690">now</span> <span
  m="37890">you've</span> <span m="38150">kind</span> <span m="38280">of</span>
  <span m="38400">thought</span> <span m="38590">about</span> <span m="38760">it
  a</span> <span m="38810">bit</span> <span m="38960">more</span> <span
  m="39160">in</span> <span m="39220">the</span> <span m="39280">context</span>
  <span m="39610">of</span> <span m="39650">the</span> <span
  m="39710">reading.</span> <span m="40040">And</span> <span
  m="40315">we'll</span> <span m="40680">discuss</span> <span
  m="41130">kind</span> <span m="41240">of</span> <span m="41410">what</span>
  <span m="41850">it</span> <span m="41950">means</span> <span
  m="42450">to</span> <span m="42520">be</span> <span m="42630">using</span>
  <span m="42900">the</span> <span m="42960">master</span> <span
  m="43280">equation</span> <span m="44040">and</span> <span
  m="44160">how</span> <span m="44400">to</span> <span
  m="44720">formulate</span> <span m="45140">the</span> <span
  m="45200">master</span> <span m="45490">equation</span> <span
  m="45850">for</span> <span m="45970">more</span> <span
  m="46170">complicated</span> <span m="46720">situations,</span> <span
  m="47210">for</span> <span m="47280">example,</span> <span m="47600">when
  you</span> <span m="47700">have</span> <span m="47800">more</span> <span
  m="47900">than</span> <span m="48030">one</span> <span
  m="48190">chemical</span> <span m="48490">species.</span></p><p><span
  m="50240">And</span> <span m="50370">then</span> <span m="50520">we'll</span>
  <span m="51110">talk</span> <span m="51300">about</span> <span
  m="51600">the</span> <span m="51730">idea</span> <span m="51980">of</span>
  <span m="52040">this</span> <span m="52200">Gillespie</span> <span
  m="52700">method,</span> <span m="53020">which</span> <span
  m="53160">is</span> <span m="53990">an</span> <span m="54110">exact</span>
  <span m="55050">way</span> <span m="55410">to</span> <span
  m="55780">simulate</span> <span m="56260">stochastic</span> <span
  m="56870">systems,</span> <span m="57730">and</span> <span
  m="58260">it's</span> <span m="58920">both</span> <span m="59380">exact</span>
  <span m="59840">and</span> <span m="60080">computationally</span> <span
  m="61880">tractable</span> <span m="62450">as</span> <span
  m="62550">compared</span> <span m="62850">to</span> <span
  m="63190">what</span> <span m="63340">you</span> <span m="63400">might</span>
  <span m="63540">call</span> <span m="63760">various</span> <span
  m="64080">naive</span> <span m="64480">methods.</span> <span
  m="66120">And</span> <span m="66380">the</span> <span
  m="66550">Gillespie</span> <span m="66930">method</span> <span
  m="67220">is</span> <span m="67830">really</span> <span m="68260">sort
  of</span> <span m="69040">qualitatively</span> <span
  m="69490">different</span> <span m="69830">from</span> <span
  m="70400">the</span> <span m="70510">master</span> <span
  m="70810">equation</span> <span m="71150">because</span> <span
  m="72100">in</span> <span m="72200">the</span> <span m="72270">master</span>
  <span m="72510">equation,</span> <span m="72780">you're</span> <span
  m="72860">looking</span> <span m="73180">at</span> <span m="73420">the</span>
  <span m="74020">evolution</span> <span m="74480">of</span> <span
  m="74570">probability</span> <span m="75330">distributions</span> <span
  m="76730">across</span> <span m="76980">the</span> <span
  m="77060">system,</span> <span m="78050">whereas</span> <span
  m="78350">the</span> <span m="78430">Gillespie</span> <span
  m="78770">method</span> <span m="79070">is</span> <span
  m="79190">really</span> <span m="79800">a</span> <span m="79900">way</span>
  <span m="80160">to</span> <span m="80310">generate</span> <span
  m="80820">individual</span> <span m="81490">stochastic</span> <span
  m="82000">trajectories.</span></p><p><span m="83670">So</span> <span
  m="83770">if</span> <span m="83810">you</span> <span m="83910">start</span>
  <span m="84290">with</span> <span m="84430">somehow</span> <span
  m="84750">similar</span> <span m="85240">initial</span> <span
  m="85550">conditions,</span> <span m="86060">then</span> <span
  m="86100">you</span> <span m="86210">can</span> <span
  m="86340">actually</span> <span m="86760">get--</span> <span
  m="88110">you</span> <span m="88230">can</span> <span m="88430">get,</span>
  <span m="88880">for</span> <span m="88970">example,</span> <span
  m="89755">the</span> <span m="90160">probability</span> <span
  m="90520">distributions</span> <span m="90970">from</span> <span
  m="91200">the</span> <span m="91280">Gillespie</span> <span
  m="91640">method</span> <span m="91940">by</span> <span
  m="92020">running</span> <span m="92280">many</span> <span
  m="92550">individual</span> <span m="93030">trajectories.</span> <span
  m="93870">But</span> <span m="94920">it's</span> <span m="95570">kind</span>
  <span m="95730">of</span> <span m="96140">conceptually</span> <span
  m="96580">rather different</span> <span m="96970">because</span> <span
  m="97400">of</span> <span m="97490">this</span> <span m="97650">notion</span>
  <span m="98040">of</span> <span m="98350">whether</span> <span
  m="98540">you</span> <span m="98620">think</span> <span m="98740">about</span>
  <span m="98920">probabilities</span> <span m="99490">or</span> <span
  m="99630">you're</span> <span m="99730">thinking</span> <span
  m="100000">about</span> <span m="101330">individual</span> <span
  m="101860">instantiations</span> <span m="102640">of</span> <span
  m="102770">some</span> <span m="103230">stochastic</span> <span
  m="103690">trajectory.</span> <span m="104150">So we'll</span> <span
  m="104300">try</span> <span m="104460">to</span> <span m="104520">make</span>
  <span m="104700">sense</span> <span m="104980">of</span> <span
  m="105740">when</span> <span m="106040">you</span> <span
  m="106180">might</span> <span m="106390">want</span> <span
  m="106510">to</span> <span m="106550">use</span> <span m="106690">one</span>
  <span m="106860">or</span> <span m="106930">the</span> <span
  m="107010">other.</span></p><p><span m="107990">And</span> <span
  m="108100">then</span> <span m="108640">finally</span> <span
  m="108890">we'll</span> <span m="109060">talk</span> <span
  m="109290">about</span> <span m="109520">this</span> <span
  m="109960">Fokker-Planck</span> <span m="110400">approximation,</span> <span
  m="111650">which,</span> <span m="112100">as</span> <span
  m="112600">the</span> <span m="112780">reading</span> <span
  m="113040">indicated,</span> <span m="113850">for</span> <span
  m="114070">intermediate</span> <span m="115090">ends,</span> <span
  m="115980">it's</span> <span m="116330">useful</span> <span
  m="117306">to</span> <span m="118180">make</span> <span m="118390">this</span>
  <span m="118520">kind</span> <span m="118630">of</span> <span
  m="118690">continuous</span> <span m="119090">approximation,</span> <span
  m="120260">and</span> <span m="120370">then</span> <span m="120510">you
  can</span> <span m="120730">get</span> <span m="120850">a</span> <span
  m="120900">lot</span> <span m="121080">of</span> <span
  m="121150">intuition</span> <span m="121830">from</span> <span
  m="122950">your</span> <span m="123150">knowledge</span> <span
  m="123530">about</span> <span m="123980">diffusion</span> <span
  m="124710">on</span> <span m="125530">effective</span> <span
  m="126010">[INAUDIBLE]</span> <span m="126270">landscapes.</span></p><p><span
  m="128680">Are</span> <span m="128870">there</span> <span
  m="129139">any</span> <span m="129590">questions</span> <span
  m="130050">about</span> <span m="132010">this</span> <span
  m="132340">or</span> <span m="132860">administrative</span> <span
  m="133470">things</span> <span m="133740">before</span> <span
  m="134040">we</span> <span m="134140">get</span> <span
  m="134270">going?</span> <span m="137020">I</span> <span
  m="137170">just</span> <span m="137290">want</span> <span m="137390">to</span>
  <span m="137430">remind</span> <span m="137650">you</span> <span
  m="137740">that</span> <span m="137950">the</span> <span
  m="138590">midterm</span> <span m="139420">is</span> <span
  m="139600">indeed</span> <span m="140210">next</span> <span
  m="140570">Thursday</span> <span m="141620">evening,</span> <span
  m="142150">7-9</span> <span m="142600">PM.</span> <span m="144600">If</span>
  <span m="144700">you</span> <span m="144750">have</span> <span
  m="144840">a</span> <span m="144890">problem</span> <span
  m="145490">with</span> <span m="145630">that</span> <span
  m="145850">time,</span> <span m="146600">then</span> <span
  m="146840">you</span> <span m="146940">should</span> <span
  m="147190">have</span> <span m="147340">emailed</span> <span m="147740">[?
  Sarab. ?]</span> <span m="149960">And if</span> <span m="150050">you</span>
  <span m="150130">haven't</span> <span m="150310">emailed</span> <span
  m="150490">him</span> <span m="150550">yet,</span> <span m="151050">you</span>
  <span m="151150">should</span> <span m="151650">do</span> <span
  m="151790">it</span> <span m="151930">right</span> <span
  m="152120">now.</span> <span m="152930">And--</span> <span
  m="153490">yes.</span></p><p><span m="157500">All right.</span> <span
  m="157630">So</span> <span m="157710">let's</span> <span
  m="158460">think</span> <span m="158570">about</span> <span
  m="158710">the</span> <span m="158770">master</span> <span
  m="159220">equation</span> <span m="159540">a</span> <span
  m="159610">little</span> <span m="159720">bit</span> <span
  m="159810">more.</span> <span m="161740">Now</span> <span
  m="162250">before</span> <span m="162520">what</span> <span
  m="162790">we</span> <span m="162870">did</span> <span m="163040">is</span>
  <span m="163140">we</span> <span m="163300">thought</span> <span
  m="163460">about</span> <span m="163740">the</span> <span
  m="163830">simplest</span> <span m="164590">possible</span> <span
  m="165070">case</span> <span m="165390">of the</span> <span
  m="165480">master</span> <span m="165745">equation,</span> <span
  m="166010">which</span> <span m="166250">is,</span> <span m="166880">if</span>
  <span m="167010">you</span> <span m="167110">just</span> <span
  m="167340">have</span> <span m="168150">something</span> <span
  m="168560">being</span> <span m="168820">created</span> <span m="169230">at
  a</span> <span m="169350">constant</span> <span m="169770">rate</span> <span
  m="170110">and</span> <span m="170190">then</span> <span
  m="170330">being</span> <span m="170540">degraded</span> <span
  m="171740">at</span> <span m="172200">a</span> <span m="172250">rate</span>
  <span m="172420">that's</span> <span m="172710">proportional</span> <span
  m="173220">to</span> <span m="173280">the</span> <span
  m="173380">number</span> <span m="174200">of</span> <span
  m="174840">that</span> <span m="175030">chemical</span> <span
  m="175310">species.</span> <span m="176600">And</span> <span
  m="176860">I'm</span> <span m="177210">going</span> <span m="177290">to</span>
  <span m="177340">be</span> <span m="177420">using</span> <span
  m="177820">the</span> <span m="178980">nomenclature</span> <span
  m="179480">that's</span> <span m="179640">a</span> <span
  m="179690">little</span> <span m="179860">bit</span> <span
  m="180050">closer</span> <span m="180440">to</span> <span
  m="180510">what</span> <span m="181150">was</span> <span m="181400">in</span>
  <span m="181470">your</span> <span m="181600">reading,</span> <span
  m="181900">just</span> <span m="182440">for,</span> <span
  m="183050">hopefully,</span> <span m="183480">clarity.</span> <span
  m="183810">And</span> <span m="183890">I</span> <span m="183930">think</span>
  <span m="184080">that</span> <span m="184850">some</span> <span
  m="185080">of</span> <span m="185130">my</span> <span
  m="185260">choices</span> <span m="185940">from</span> <span
  m="186990">last</span> <span m="187370">lecture</span> <span
  m="187580">were</span> <span m="187700">maybe</span> <span
  m="187980">unfortunate.</span></p><p><span m="189640">So</span> <span
  m="190130">here,</span> <span m="191570">this</span> <span
  m="191870">is,</span> <span m="192020">for</span> <span
  m="192160">example,</span> <span m="193090">m would</span> <span
  m="193350">be</span> <span m="193450">the</span> <span
  m="193560">number</span> <span m="194020">of</span> <span
  m="194110">mRNA,</span> <span m="194670">for</span> <span
  m="194760">example,</span> <span m="195040">in</span> <span
  m="195100">the</span> <span m="195180">cell.</span> <span
  m="196200">This</span> <span m="196360">is</span> <span m="196570">the</span>
  <span m="196790">rate</span> <span m="197050">of</span> <span
  m="197180">creation</span> <span m="198500">of the</span> <span
  m="198680">mRNA,</span> <span m="199460">and</span> <span
  m="199650">then</span> <span m="200330">the</span> <span
  m="200480">rate</span> <span m="200610">of</span> <span
  m="200670">degradation</span> <span m="201120">of the</span> <span
  m="201240">mRNA.</span> <span m="203800">So</span> <span m="204250">m</span>
  <span m="204610">is</span> <span m="204945">the</span> <span
  m="205280">number</span> <span m="205930">of</span> <span
  m="206020">mRNA.</span> <span m="209820">And</span> <span m="210430">if</span>
  <span m="210490">we</span> <span m="210560">want</span> <span
  m="210710">understand</span> <span m="211090">gene</span> <span
  m="211340">expression,</span> <span m="212000">we</span> <span
  m="212120">might</span> <span m="212310">include an</span> <span
  m="212760">equation</span> <span m="213120">for</span> <span
  m="213200">the</span> <span m="213280">protein,</span> <span
  m="213720">so</span> <span m="214000">we might</span> <span
  m="214070">have</span> <span m="214180">some</span> <span m="214340">p
  dot,</span> <span m="215590">where</span> <span m="216090">some</span> <span
  m="216670">Kp.</span></p><p><span m="222850">Now--</span> <span
  m="223490">oh,</span> <span m="223650">sorry.</span> <span
  m="224550">Again,</span> <span m="225030">I</span> <span
  m="225170">always</span> <span m="225400">do</span> <span
  m="225490">this.</span> <span m="226560">All right.</span> <span
  m="226920">So</span> <span m="227270">we're</span> <span
  m="227420">going</span> <span m="227530">to</span> <span
  m="227620">have</span> <span m="227910">this</span> <span m="228280">be
  an</span> <span m="228510">n dot.</span> <span m="232030">So</span> <span
  m="232210">now</span> <span m="232440">n</span> <span m="232830">is</span>
  <span m="233440">going</span> <span m="233590">to be</span> <span
  m="233630">the</span> <span m="233730">number</span> <span
  m="234080">of</span> <span m="234150">the</span> <span
  m="234250">protein.</span></p><p><span m="240790">Now</span> <span
  m="240890">this</span> <span m="240930">really</span> <span
  m="241140">is</span> <span m="241290">kind</span> <span m="241400">of</span>
  <span m="241470">the</span> <span m="241540">simplest</span> <span
  m="242290">possible</span> <span m="243790">model</span> <span
  m="244110">that</span> <span m="244430">you</span> <span
  m="244680">might</span> <span m="244890">write</span> <span
  m="245010">down</span> <span m="245280">for</span> <span
  m="245420">gene</span> <span m="245600">expression</span> <span
  m="246050">that</span> <span m="246150">includes</span> <span
  m="246630">the</span> <span m="247000">mRNA</span> <span m="247440">and
  the</span> <span m="247520">protein.</span> <span m="249080">So</span> <span
  m="249200">there's</span> <span m="249410">no</span> <span
  m="251130">autoregulation</span> <span m="251990">of</span> <span
  m="252150">any</span> <span m="252310">sort.</span> <span
  m="253370">It's</span> <span m="253780">just</span> <span
  m="253970">that</span> <span m="254090">the</span> <span
  m="254220">mRNA</span> <span m="254580">is</span> <span
  m="256320">involved</span> <span m="256820">in</span> <span
  m="257550">increasing</span> <span m="258010">the</span> <span
  m="258100">protein,</span> <span m="258769">but</span> <span
  m="258880">then</span> <span m="259040">we</span> <span m="259649">have</span>
  <span m="259820">degradation</span> <span m="260290">of the protein as</span>
  <span m="260760">well.</span></p><p><span m="263770">So</span> <span
  m="263870">what</span> <span m="263960">we</span> <span m="264030">want</span>
  <span m="264160">to</span> <span m="264200">do</span> <span
  m="264360">is</span> <span m="264480">kind</span> <span m="264700">of</span>
  <span m="264860">try</span> <span m="265010">to</span> <span
  m="265090">understand</span> <span m="265610">how</span> <span
  m="265720">to</span> <span m="265800">formulate</span> <span
  m="266280">the</span> <span m="266340">master</span> <span
  m="266680">equation</span> <span m="267080">here.</span> <span
  m="267760">But</span> <span m="267860">then</span> <span
  m="267970">also,</span> <span m="268340">we</span> <span
  m="268470">want</span> <span m="268690">to</span> <span m="268750">make</span>
  <span m="268910">sure</span> <span m="269250">that we</span> <span
  m="269400">understand</span> <span m="269860">what</span> <span
  m="270010">the</span> <span m="270080">master</span> <span
  m="270370">equation</span> <span m="271070">is</span> <span
  m="271210">actually</span> <span m="271450">telling</span> <span
  m="271790">us</span> <span m="271940">and</span> <span m="272010">how</span>
  <span m="273090">it</span> <span m="273130">might</span> <span
  m="273290">be</span> <span m="273360">used.</span></p><p><span
  m="274430">So</span> <span m="274550">first</span> <span m="274810">of</span>
  <span m="274880">all,</span> <span m="276040">in</span> <span
  m="276250">this</span> <span m="276460">model,</span> <span
  m="277520">I</span> <span m="277680">want</span> <span m="277850">to</span>
  <span m="277890">know</span> <span m="278020">is</span> <span
  m="278240">there,</span> <span m="278710">in</span> <span
  m="278860">principle,</span> <span m="279840">protein</span> <span
  m="280900">bursts?</span> <span m="284920">So</span> <span
  m="285240">before</span> <span m="285650">we</span> <span
  m="285800">talked</span> <span m="286110">about</span> <span
  m="290340">the</span> <span m="290390">fact that</span> <span
  m="290770">in--</span> <span m="291190">at</span> <span
  m="291340">least</span> <span m="291580">in</span> <span m="292660">[? Sunny's
  ?]</span> <span m="292790">paper that</span> <span m="293270">we</span> <span
  m="293400">read--</span> <span m="294170">they</span> <span
  m="294290">could</span> <span m="294390">observe</span> <span
  m="295130">protein</span> <span m="295460">bursts,</span> <span m="295750">at
  least</span> <span m="296470">in</span> <span m="296540">those</span> <span
  m="296690">experiments</span> <span m="297065">in</span> <span m="297440">e
  Coli.</span> <span m="298460">Question</span> <span m="298820">is,</span>
  <span m="303760">should</span> <span m="304230">this</span> <span
  m="304360">model</span> <span m="304720">somehow</span> <span
  m="305120">exhibit</span> <span m="305400">protein</span> <span
  m="305740">bursts,</span> <span m="306160">and</span> <span
  m="306560">why</span> <span m="306840">or</span> <span m="307370">why</span>
  <span m="307540">not?</span> <span m="309130">I</span> <span
  m="309280">just</span> <span m="309420">want</span> <span m="309550">to</span>
  <span m="309830">see</span> <span m="310210">where</span> <span
  m="310390">we</span> <span m="310560">are</span> <span m="310980">on</span>
  <span m="311420">this.</span></p><p><span m="316570">I</span> <span
  m="316670">think</span> <span m="317240">this</span> <span
  m="317460">is</span> <span m="317550">something</span> <span
  m="318340">that,</span> <span m="318690">depending</span> <span
  m="319000">on</span> <span m="319090">how</span> <span m="319270">you</span>
  <span m="319600">interpret</span> <span m="319940">the</span> <span
  m="319990">question,</span> <span m="320350">you</span> <span
  m="320440">might</span> <span m="320950">decide</span> <span
  m="321240">the</span> <span m="321330">answer</span> <span
  m="321510">is</span> <span m="321580">yes</span> <span m="321790">or</span>
  <span m="321840">no.</span> <span m="321990">But</span> <span
  m="322100">I'm</span> <span m="322320">curious--</span> <span
  m="324030">I</span> <span m="324280">think</span> <span m="324400">it's</span>
  <span m="324790">worth</span> <span m="325020">discussing</span> <span
  m="325460">what</span> <span m="325630">the</span> <span
  m="325690">implications</span> <span m="325980">are</span> <span
  m="326270">here.</span> <span m="332970">And</span> <span
  m="333180">the</span> <span m="333470">relevant</span> <span
  m="333830">part</span> <span m="334040">of</span> <span m="334130">this</span>
  <span m="334310">is</span> <span m="334360">going</span> <span m="334500">to
  be the</span> <span m="334630">discussion</span> <span
  m="335100">afterwards,</span> <span m="335480">so</span> <span
  m="335610">I'd</span> <span m="335900">say</span> <span
  m="336580">don't</span> <span m="336990">worry</span> <span
  m="337260">too</span> <span m="337380">much</span> <span
  m="337600">about</span> <span m="338430">what</span> <span
  m="338590">you</span> <span m="338680">think</span> <span m="338870">right
  now.</span> <span m="339170">But I'm</span> <span m="339260">just</span> <span
  m="339370">curious.</span> <span m="341120">This</span> <span
  m="341350">model,</span> <span m="341800">does</span> <span
  m="341980">it</span> <span m="342670">include,</span> <span
  m="343280">somehow,</span> <span m="343630">protein</span> <span
  m="344080">bursts?</span> <span m="345240">Ready?</span> <span
  m="345990">Three,</span> <span m="346900">two,</span> <span
  m="347750">one.</span></p><p><span m="349440">OK.</span> <span
  m="349630">So</span> <span m="349800">we</span> <span m="349910">got--</span>
  <span m="351360">I'd</span> <span m="351470">say</span> <span
  m="351700">at</span> <span m="351800">least</span> <span m="351960">a</span>
  <span m="352000">majority</span> <span m="352690">of</span> <span
  m="352840">people</span> <span m="353110">are</span> <span
  m="353180">saying</span> <span m="353490">no.</span> <span
  m="356510">But</span> <span m="356650">then</span> <span
  m="356720">some</span> <span m="356870">people</span> <span
  m="357050">are</span> <span m="357110">saying</span> <span
  m="357310">yes.</span> <span m="357560">So</span> <span m="357680">can</span>
  <span m="359060">somebody</span> <span m="359420">volunteer</span> <span
  m="363200">why</span> <span m="363530">or</span> <span m="363650">why</span>
  <span m="363840">not?</span> <span m="365150">Yes?</span></p><p><span
  m="365620">AUDIENCE: I think</span> <span m="366085">the difference is</span>
  <span m="367015">if we're--</span> <span m="367945">are</span> <span
  m="368410">we</span> <span m="368560">using this</span> <span m="369010">in
  a</span> <span m="370420">continuous</span> <span m="370900">fashion</span>
  <span m="371380">or are we using this in</span> <span m="371860">a</span>
  <span m="372340">discrete</span> <span m="372820">fashion</span> <span
  m="373300">[INAUDIBLE].</span></p><p><span m="376190">PROFESSOR: Yeah.</span>
  <span m="376670">OK.</span> <span m="376940">All</span> <span
  m="376980">right.</span> <span m="377210">All</span> <span
  m="377330">right.</span> <span m="377530">So</span> <span
  m="377610">he's</span> <span m="377780">answered</span> <span
  m="378080">both</span> <span m="378780">possible</span> <span
  m="379160">sides</span> <span m="379490">of</span> <span m="379540">the</span>
  <span m="379630">argument.</span> <span m="381690">And</span> <span
  m="382040">the</span> <span m="382140">point</span> <span
  m="382440">here</span> <span m="382700">is</span> <span m="382790">that</span>
  <span m="382920">if</span> <span m="383010">you</span> <span
  m="383160">just</span> <span m="384530">simulate</span> <span
  m="385100">this</span> <span m="385800">from the</span> <span
  m="386100">standpoint--</span> <span m="386470">certainly,</span> <span
  m="387160">for</span> <span m="387270">example,</span> <span
  m="388630">this</span> <span m="388900">continuous,</span> <span
  m="389250">this</span> <span m="389350">discrete--</span> <span
  m="390040">so</span> <span m="390510">if</span> <span m="391180">you
  just</span> <span m="391370">simulate</span> <span m="391720">this</span>
  <span m="391890">as</span> <span m="392860">a</span> <span
  m="392970">deterministic</span> <span m="393950">pair</span> <span
  m="394170">of</span> <span m="394260">differential</span> <span
  m="394710">equations,</span> <span m="395690">then</span> <span
  m="395800">will</span> <span m="395940">there</span> <span
  m="396110">be</span> <span m="396330">bursts?</span> <span
  m="397940">No.</span> <span m="400280">Because</span> <span
  m="400470">everything</span> <span m="400780">is</span> <span
  m="400870">well-behaved</span> <span m="401650">here.</span></p><p><span
  m="403510">On</span> <span m="403640">the</span> <span m="403710">other</span>
  <span m="403830">hand,</span> <span m="404170">if</span> <span
  m="404200">we</span> <span m="404310">go</span> <span m="404580">and</span>
  <span m="404670">we</span> <span m="404800">do</span> <span
  m="405830">a</span> <span m="405950">full</span> <span
  m="406210">Gillespie</span> <span m="406770">simulation</span> <span
  m="407320">of</span> <span m="407610">this</span> <span m="408360">pair</span>
  <span m="408590">of</span> <span m="409690">equations,</span> <span
  m="410850">then</span> <span m="411350">in</span> <span m="411460">the</span>
  <span m="411540">proper</span> <span m="412180">parameter</span> <span
  m="412485">regime,</span> <span m="412790">we</span> <span
  m="413020">actually</span> <span m="413210">will</span> <span
  m="413430">get</span> <span m="413580">protein</span> <span
  m="413860">bursts,</span> <span m="417760">which</span> <span
  m="418050">is,</span> <span m="418280">in</span> <span m="418380">some</span>
  <span m="418540">ways,</span> <span m="418690">weird,</span> <span
  m="419670">that</span> <span m="420220">depending</span> <span
  m="420770">upon</span> <span m="421150">the</span> <span
  m="421250">framework</span> <span m="421900">that</span> <span
  m="422060">you're</span> <span m="422210">going</span> <span
  m="422320">to</span> <span m="422640">be</span> <span
  m="422830">analyzing</span> <span m="423250">this</span> <span
  m="423400">in,</span> <span m="423500">you</span> <span m="423730">can</span>
  <span m="424020">get</span> <span m="424150">qualitatively</span> <span
  m="424850">different</span> <span m="425170">behaviors</span> <span
  m="425465">for</span> <span m="425760">things.</span></p><p><span
  m="427630">But</span> <span m="427740">there's</span> <span
  m="427890">a</span> <span m="427950">sense</span> <span m="428290">here</span>
  <span m="428490">that</span> <span m="429090">the</span> <span
  m="430530">deterministic,</span> <span m="431930">continuous</span> <span
  m="433270">evolution</span> <span m="433680">of</span> <span
  m="433740">these</span> <span m="433900">quantities</span> <span
  m="434580">would</span> <span m="434700">be</span> <span m="434820">the</span>
  <span m="434950">average</span> <span m="435380">over</span> <span
  m="435530">many</span> <span m="435780">of</span> <span
  m="435830">these</span> <span m="436030">stochastic</span> <span
  m="436370">trajectories,</span> <span m="436840">and</span> <span
  m="436900">the</span> <span m="437020">stochastic</span> <span
  m="437370">ones</span> <span m="437570">do</span> <span m="437740">have</span>
  <span m="437890">bursts,</span> <span m="438130">but if you</span> <span
  m="438300">average</span> <span m="438510">over</span> <span
  m="438700">many,</span> <span m="438950">many</span> <span
  m="439050">of</span> <span m="439110">them,</span> <span
  m="439250">then</span> <span m="439760">you</span> <span m="439890">end</span>
  <span m="440020">up</span> <span m="440120">getting</span> <span
  m="440310">some</span> <span m="440480">well-behaved</span> <span
  m="442090">pair</span> <span m="442290">of</span> <span
  m="442670">equations.</span></p><p><span m="443910">So</span> <span
  m="444020">we'll</span> <span m="444180">kind</span> <span
  m="444340">of</span> <span m="444420">try</span> <span m="444600">to</span>
  <span m="444690">make</span> <span m="444900">sense</span> <span
  m="445150">of</span> <span m="445210">this</span> <span m="445390">more</span>
  <span m="445970">later</span> <span m="446150">on.</span> <span m="446290">But
  I</span> <span m="446460">think</span> <span m="446510">this</span> <span
  m="446730">just</span> <span m="446950">highlights</span> <span
  m="447470">that</span> <span m="449460">you</span> <span m="449560">can</span>
  <span m="449670">get</span> <span m="449910">really</span> <span
  m="450200">qualitatively</span> <span m="450930">different</span> <span
  m="451170">behaviors</span> <span m="451800">for</span> <span
  m="451890">the</span> <span m="451990">same</span> <span m="452460">set</span>
  <span m="452670">of</span> <span m="452730">equations</span> <span
  m="453270">depending</span> <span m="453690">upon</span> <span
  m="454880">what</span> <span m="455170">you're</span> <span
  m="455480">looking</span> <span m="455660">at.</span></p><p><span
  m="458460">And</span> <span m="458880">these</span> <span
  m="459000">protein</span> <span m="459240">bursts</span> <span
  m="459510">can</span> <span m="459600">be</span> <span
  m="459950">dramatic</span> <span m="460980">events,</span> <span
  m="461390">right,</span> <span m="461990">where</span> <span
  m="462330">the</span> <span m="462390">protein</span> <span
  m="462760">number</span> <span m="463270">pops</span> <span
  m="463570">up</span> <span m="464320">by</span> <span m="464450">a</span>
  <span m="464530">lot.</span> <span m="465900">So</span> <span
  m="466000">this</span> <span m="466390">really,</span> <span
  m="466740">then,</span> <span m="467190">if</span> <span m="467310">you</span>
  <span m="467380">look</span> <span m="467510">at the</span> <span
  m="467580">individual</span> <span m="467950">trajectories</span> <span
  m="468410">here,</span> <span m="468570">they</span> <span
  m="468680">would</span> <span m="468800">look</span> <span
  m="468950">very</span> <span m="469160">different</span> <span
  m="470060">whether</span> <span m="470330">you</span> <span
  m="470460">were</span> <span m="470550">doing</span> <span
  m="470750">kind</span> <span m="470860">of</span> <span m="470920">a</span>
  <span m="470970">stochastic</span> <span m="471480">treatment</span> <span
  m="472170">or</span> <span m="472340">the</span> <span
  m="472490">deterministic one.</span></p><p><span m="476040">Can</span> <span
  m="476190">somebody</span> <span m="477090">remind</span> <span
  m="477590">us</span> <span m="477820">the</span> <span
  m="477920">situation</span> <span m="478600">in</span> <span
  m="478670">which</span> <span m="478820">we</span> <span m="479570">get</span>
  <span m="479860">protein</span> <span m="480240">bursts</span> <span
  m="482300">in</span> <span m="482630">the</span> <span
  m="482700">stochastic</span> <span m="483210">model?</span> <span
  m="485250">In particular,</span> <span m="485580">will</span> <span
  m="485730">we</span> <span m="485840">always</span> <span
  m="486200">get</span> <span m="487470">these</span> <span
  m="487700">discrete</span> <span m="488070">protein</span> <span
  m="488390">bursts?</span> <span m="489285">Or</span> <span
  m="489640">what</span> <span m="489760">determines</span> <span
  m="490160">the</span> <span m="490240">size</span> <span m="490670">of</span>
  <span m="490760">a</span> <span m="490830">protein</span> <span
  m="491130">burst?</span> <span m="495020">Yes.</span></p><p><span
  m="495420">AUDIENCE: Does it have to do</span> <span m="495896">with</span>
  <span m="496372">the</span> <span m="496848">lag time</span> <span
  m="497324">between</span> <span m="497800">when the</span> <span
  m="498276">mRNA</span> <span m="498752">is created</span> <span
  m="499228">[INAUDIBLE]?</span></p><p><span m="504480">PROFESSOR: OK.</span>
  <span m="504570">Right.</span> <span m="505020">So</span> <span
  m="505220">there's</span> <span m="505590">a</span> <span
  m="505720">lag</span> <span m="506070">time</span> <span
  m="506330">between</span> <span m="506930">the</span> <span
  m="507060">time</span> <span m="507340">that</span> <span
  m="507560">mRNA</span> <span m="507980">is</span> <span
  m="508140">created,</span> <span m="508850">and</span> <span
  m="509700">then</span> <span m="509900">the</span> <span
  m="509960">next</span> <span m="510310">thing</span> <span
  m="510460">would</span> <span m="510590">be--</span></p><p><span
  m="511040">AUDIENCE:</span> <span m="511507">When</span> <span m="511974">the
  protein</span> <span m="512441">[INAUDIBLE].</span></p><p><span
  m="516070">PROFESSOR: When</span> <span m="516240">the</span> <span
  m="516340">protein</span> <span m="516850">is</span> <span m="517169">[?
  totaled-- ?]</span> <span m="517600">OK.</span> <span m="517750">So</span>
  <span m="517870">there</span> <span m="518000">are</span> <span
  m="518030">multiple</span> <span m="518409">time</span> <span
  m="518690">scales,</span> <span m="519070">right?</span> <span
  m="520929">So</span> <span m="521080">after</span> <span m="521429">an
  mRNA</span> <span m="521840">is</span> <span m="522159">created,</span> <span
  m="522710">and</span> <span m="522830">that's</span> <span
  m="523150">through</span> <span m="523360">this</span> <span
  m="523559">process</span> <span m="523970">here--</span> <span
  m="525050">so</span> <span m="525110">now</span> <span m="525450">out</span>
  <span m="525640">pops</span> <span m="525890">an</span> <span
  m="525950">mRNA--</span> <span m="528210">now</span> <span
  m="528390">there</span> <span m="528500">are</span> <span
  m="528560">multiple</span> <span m="529080">time</span> <span
  m="529420">scales.</span> <span m="531430">There's</span> <span
  m="531710">the</span> <span m="531810">time</span> <span
  m="532150">scale</span> <span m="532570">for</span> <span
  m="533100">mRNA</span> <span m="533550">degradation.</span> <span
  m="534870">That</span> <span m="535090">goes</span> <span m="535310">as</span>
  <span m="535410">1</span> <span m="535620">over</span> <span
  m="535770">gamma</span> <span m="536020">m.</span> <span
  m="538050">There's</span> <span m="538240">a</span> <span
  m="538290">time</span> <span m="538560">scale</span> <span
  m="539290">for</span> <span m="539470">protein</span> <span
  m="539910">degradation</span> <span m="540800">after</span> <span
  m="541090">a</span> <span m="541150">protein</span> <span m="541450">is</span>
  <span m="541540">made.</span> <span m="542380">That</span> <span
  m="542610">goes</span> <span m="542850">as</span> <span m="542970">1</span>
  <span m="543140">over</span> <span m="543290">gamma p.</span> <span
  m="544590">But</span> <span m="544710">then</span> <span
  m="544820">there's</span> <span m="544980">also</span> <span
  m="545690">a</span> <span m="545800">time</span> <span m="546140">scale</span>
  <span m="546480">associated</span> <span m="547120">with</span> <span
  m="548190">kind</span> <span m="548330">of</span> <span m="548390">the</span>
  <span m="548520">rate</span> <span m="548760">of</span> <span
  m="548860">protein</span> <span m="549200">production</span> <span
  m="549530">from</span> <span m="549850">each</span> <span m="550020">of</span>
  <span m="550070">those</span> <span m="550240">mRNAs,</span> <span
  m="551230">and</span> <span m="551320">that's</span> <span
  m="551600">determined</span> <span m="552000">by</span> <span
  m="552600">Kp.</span> <span m="554010">So</span> <span m="555170">we</span>
  <span m="555300">get</span> <span m="555530">big</span> <span
  m="555720">protein</span> <span m="556080">bursts if</span> <span
  m="556560">what?</span> <span m="559840">What</span> <span
  m="559960">determines</span> <span m="561180">the</span> <span
  m="561260">size</span> <span m="561660">of</span> <span
  m="561700">these</span> <span m="561850">protein</span> <span
  m="562130">bursts?</span> <span m="566596">Yes.</span></p><p><span
  m="567093">AUDIENCE: [INAUDIBLE]</span></p><p><span m="579630">PROFESSOR:
  Right.</span> <span m="579880">It's</span> <span m="580020">always</span>
  <span m="580210">confusing.</span> <span m="580490">We</span> <span
  m="580720">talk</span> <span m="580880">about</span> <span
  m="580970">times.</span> <span m="582100">But</span> <span
  m="582220">in</span> <span m="582280">particular,</span> <span
  m="582650">we</span> <span m="582750">have</span> <span
  m="582910">protein</span> <span m="583450">bursts</span> <span
  m="584270">in</span> <span m="584920">the</span> <span
  m="585210">stochastic</span> <span m="585850">situation</span> <span
  m="586640">if</span> <span m="586790">we</span> <span m="586860">do a</span>
  <span m="587130">stochastic</span> <span m="587400">simulation.</span> <span
  m="588630">And</span> <span m="588980">that's</span> <span
  m="589280">in</span> <span m="589480">the</span> <span
  m="590460">regime</span> <span m="591340">if</span> <span
  m="591980">Kp,</span> <span m="593720">the</span> <span m="594240">rate</span>
  <span m="594360">of</span> <span m="594430">protein</span> <span
  m="594700">synthesis</span> <span m="595910">from</span> <span
  m="596090">the</span> <span m="596250">mRNA</span> <span m="596370">is</span>
  <span m="596510">somehow</span> <span m="596740">much</span> <span
  m="597020">larger</span> <span m="597430">than</span> <span
  m="598180">this</span> <span m="599220">gamma m.</span> <span
  m="604850">Have</span> <span m="605060">I</span> <span
  m="605530">screwed</span> <span m="605780">up?</span> <span
  m="606060">Yes.</span></p><p><span m="607540">AUDIENCE: So</span> <span
  m="608610">this</span> <span m="608810">is</span> <span
  m="608970">also--</span> <span m="609970">in the</span> <span m="610130">sense
  of</span> <span m="610480">being</span> <span m="610850">different</span>
  <span m="611230">from the</span> <span m="611701">deterministic</span> <span
  m="612172">equations,</span> <span m="612643">we</span> <span
  m="613114">probably</span> <span m="613585">also want</span> <span
  m="614998">the total number</span> <span m="615469">of</span> <span
  m="615940">mRNAs</span> <span m="616411">[INAUDIBLE].</span> <span
  m="617824">Is that</span> <span m="618295">sort of--</span></p><p><span
  m="618770">PROFESSOR: Right.</span> <span m="619500">Yeah,</span> <span
  m="619660">I</span> <span m="619830">think</span> <span m="619980">that</span>
  <span m="620120">it--</span> <span m="620470">and</span> <span
  m="621310">the</span> <span m="621430">question</span> <span
  m="621770">of</span> <span m="622220">what</span> <span m="622400">mRNA</span>
  <span m="622920">number</span> <span m="623210">you</span> <span
  m="623340">need.</span> <span m="623850">I mean,</span> <span m="623990">it
  depends</span> <span m="624180">on</span> <span m="624250">what</span> <span
  m="624380">you</span> <span m="624450">mean</span> <span m="624590">by</span>
  <span m="624700">protein</span> <span m="625050">bursts.</span> <span
  m="625330">I</span> <span m="625380">would</span> <span m="625490">say</span>
  <span m="625590">that</span> <span m="627900">so</span> <span
  m="628070">long</span> <span m="628280">as</span> <span m="628400">this</span>
  <span m="628600">is</span> <span m="628730">true,</span> <span
  m="629960">what</span> <span m="630060">that</span> <span
  m="630170">means</span> <span m="630370">is</span> <span
  m="630490">that</span> <span m="630890">each</span> <span
  m="631080">mRNA</span> <span m="631570">will,</span> <span
  m="631750">indeed,</span> <span m="632520">kind</span> <span
  m="632680">of</span> <span m="632780">lead</span> <span m="633110">to</span>
  <span m="633880">a</span> <span m="633980">burst</span> <span
  m="634330">of</span> <span m="634410">proteins</span> <span
  m="634790">being</span> <span m="634940">made,</span> <span
  m="635190">where</span> <span m="635610">the</span> <span m="635740">burst
  is,</span> <span m="636090">again,</span> <span
  m="636500">geometrically</span> <span m="636990">distributed</span> <span
  m="637660">with</span> <span m="637810">some--</span> <span
  m="639120">now</span> <span m="639800">there's</span> <span
  m="640200">another</span> <span m="640430">question,</span> <span
  m="640720">which</span> <span m="640840">is,</span> <span
  m="640980">are</span> <span m="641140">those</span> <span
  m="641510">protein</span> <span m="641970">bursts</span> <span
  m="642440">kind</span> <span m="642590">of</span> <span
  m="642780">large</span> <span m="643310">compared</span> <span
  m="643660">to</span> <span m="643730">the</span> <span
  m="643830">steady</span> <span m="644150">state</span> <span
  m="644460">protein</span> <span m="644790">concentration?</span> <span
  m="646670">And</span> <span m="646840">that's</span> <span
  m="647080">going</span> <span m="647180">to</span> <span
  m="647250">depend</span> <span m="647800">upon</span> <span
  m="649350">Km</span> <span m="649770">and</span> <span m="650140">gamma</span>
  <span m="650370">p</span> <span m="650590">as</span> <span
  m="650690">well.</span> <span m="651390">Is that--</span></p><p><span
  m="652260">AUDIENCE: Yeah.</span> <span m="652750">So I guess</span> <span
  m="653240">[INAUDIBLE]</span> <span m="654710">which</span> <span
  m="655200">is,</span> <span m="655690">I guess</span> <span m="656180">it
  would also</span> <span m="656670">depend on how big</span> <span
  m="657160">[INAUDIBLE].</span></p><p><span m="658630">PROFESSOR: All</span>
  <span m="658730">right,</span> <span m="658740">well--</span> <span
  m="659580">and</span> <span m="659800">you're saying</span> <span
  m="660290">time</span> <span m="660620">resolution</span> <span
  m="660770">in</span> <span m="660840">terms</span> <span m="661020">of</span>
  <span m="661070">just</span> <span m="661230">measuring--</span></p><p><span
  m="662565">AUDIENCE: Yeah.</span> <span
  m="662920">[INAUDIBLE]</span></p><p><span m="663460">PROFESSOR: Yeah.</span>
  <span m="664070">Well,</span> <span m="664360">OK,</span> <span
  m="664520">but</span> <span m="664590">right</span> <span
  m="664790">now</span> <span m="665080">we're</span> <span
  m="665240">kind</span> <span m="665430">of</span> <span
  m="665500">imagining</span> <span m="665795">that</span> <span
  m="666090">we</span> <span m="666190">live</span> <span m="666400">in</span>
  <span m="666500">this</span> <span m="666640">perfect</span> <span
  m="666900">world</span> <span m="667200">where</span> <span
  m="667340">we</span> <span m="667460">know</span> <span m="667730">at</span>
  <span m="668000">every</span> <span m="668430">moment</span> <span
  m="668730">of</span> <span m="668800">time</span> <span
  m="669480">exactly</span> <span m="669960">how</span> <span
  m="670090">many</span> <span m="670330">of</span> <span
  m="670490">everything</span> <span m="670850">there</span> <span
  m="670960">is.</span> <span m="671220">So</span> <span m="671550">in</span>
  <span m="671740">some ways</span> <span m="672010">we</span> <span
  m="672180">haven't</span> <span m="672600">really</span> <span
  m="672820">said</span> <span m="673010">anything</span> <span
  m="673350">yet</span> <span m="673580">about</span> <span
  m="673880">time</span> <span m="674140">resolution.</span> <span
  m="674540">We're</span> <span m="674640">assuming</span> <span
  m="675450">that</span> <span m="675720">our</span> <span
  m="675880">time</span> <span m="676060">resolution</span> <span
  m="677330">and</span> <span m="677500">our</span> <span m="677570">number
  resolution</span> <span m="678070">is</span> <span m="678220">actually</span>
  <span m="678800">perfect.</span></p><p><span m="680460">But</span> <span
  m="680660">still,</span> <span m="681340">depending</span> <span
  m="681650">upon</span> <span m="681830">the</span> <span
  m="681880">regime</span> <span m="682200">that</span> <span
  m="682340">you're</span> <span m="682480">in,</span> <span
  m="682620">the</span> <span m="682710">protein</span> <span
  m="684100">numbers</span> <span m="684670">could</span> <span
  m="684980">look</span> <span m="685190">something</span> <span
  m="685640">like--</span> <span m="687580">so</span> <span m="687700">if</span>
  <span m="687790">you</span> <span m="687920">look</span> <span
  m="688070">at</span> <span m="688180">the</span> <span
  m="688870">protein</span> <span m="689450">number,</span> <span
  m="690530">which</span> <span m="690790">is</span> <span
  m="691740">defined</span> <span m="692020">as</span> <span m="692300">this
  n</span> <span m="693350">as</span> <span m="693450">a</span> <span
  m="693500">function</span> <span m="693750">of</span> <span
  m="693810">time,</span> <span m="695570">then</span> <span
  m="696150">in</span> <span m="696310">one</span> <span
  m="696520">regime,</span> <span m="696900">you're</span> <span
  m="697010">going</span> <span m="697100">to</span> <span m="697150">see</span>
  <span m="697460">where</span> <span m="697980">it's</span> <span
  m="698100">kind</span> <span m="698210">of</span> <span m="698260">low.</span>
  <span m="698820">You</span> <span m="698900">get</span> <span
  m="699000">a</span> <span m="699040">big</span> <span m="699390">burst</span>
  <span m="700710">and</span> <span m="700870">then</span> <span
  m="701100">it</span> <span m="701210">kind</span> <span m="701700">of</span>
  <span m="701740">comes</span> <span m="701950">down,</span> <span
  m="702370">and</span> <span m="702460">then</span> <span m="702590">a</span>
  <span m="702910">big</span> <span m="703100">burst,</span> <span
  m="703540">and</span> <span m="703600">then</span> <span m="703700">it kind
  of</span> <span m="703890">comes</span> <span m="704090">down,</span> <span
  m="704610">and</span> <span m="705030">burst,</span> <span m="705370">and
  it</span> <span m="705710">kind</span> <span m="705910">of</span> <span
  m="706030">comes down,</span> <span m="706210">right?</span> <span
  m="706650">So</span> <span m="706760">this</span> <span m="707180">is</span>
  <span m="707300">in</span> <span m="707380">the</span> <span
  m="707460">regime</span> <span m="707830">where</span> <span
  m="708080">you</span> <span m="708720">have</span> <span
  m="708920">infrequent</span> <span m="710020">mRNAs</span> <span
  m="710550">being</span> <span m="710710">produced,</span> <span
  m="711100">and</span> <span m="711180">then</span> <span
  m="711340">large</span> <span m="714180">size</span> <span
  m="714880">bursts</span> <span m="715260">from</span> <span
  m="715420">each</span> <span m="715930">mRNA.</span> <span
  m="717220">And</span> <span m="717700">then</span> <span m="717800">you</span>
  <span m="717870">kind</span> <span m="718010">of</span> <span
  m="718090">get</span> <span m="718340">this</span> <span
  m="718530">effective</span> <span m="718980">degradation</span> <span
  m="719510">or</span> <span m="719580">dilution</span> <span
  m="720030">of</span> <span m="720450">the</span> <span
  m="720540">protein</span> <span m="720820">numbers</span> <span
  m="721100">over</span> <span m="721230">time.</span> <span
  m="722740">And</span> <span m="724050">this</span> <span
  m="724410">distribution,</span> <span m="725310">if</span> <span
  m="725380">you</span> <span m="725440">take</span> <span m="725590">a</span>
  <span m="725620">histogram</span> <span m="726270">of</span> <span
  m="726380">it,</span> <span m="727700">is</span> <span
  m="727940">what?</span></p><p><span m="738390">AUDIENCE:</span> <span
  m="738873">[INAUDIBLE]</span></p><p><span m="740820">PROFESSOR: Right.</span>
  <span m="741040">So</span> <span m="741480">I'm</span> <span
  m="741950">imagining</span> <span m="742450">that</span> <span
  m="742690">we</span> <span m="743070">look</span> <span m="743240">at</span>
  <span m="743290">this</span> <span m="743490">for</span> <span
  m="743590">a</span> <span m="743640">long</span> <span
  m="743920">period</span> <span m="744070">of</span> <span
  m="744120">time.</span> <span m="744940">And</span> <span
  m="745030">then</span> <span m="745120">we</span> <span m="745190">come</span>
  <span m="745330">over</span> <span m="745470">here</span> <span
  m="745650">and</span> <span m="745720">we</span> <span
  m="745810">histogram</span> <span m="746380">it.</span> <span
  m="747370">So</span> <span m="747660">now</span> <span m="747940">we</span>
  <span m="748410">come</span> <span m="748580">over</span> <span
  m="748710">here,</span> <span m="749130">we</span> <span
  m="749310">turn</span> <span m="749550">to</span> <span m="749600">the</span>
  <span m="749670">left,</span> <span m="750020">we</span> <span
  m="750140">say</span> <span m="750390">number</span> <span
  m="751640">has</span> <span m="751800">a</span> <span
  m="751850">function</span> <span m="752660">of--</span> <span
  m="752880">this</span> <span m="753060">is</span> <span
  m="753180">number</span> <span m="753510">n.</span> <span
  m="755200">The</span> <span m="755330">frequency</span> <span
  m="755665">that</span> <span m="756000">we</span> <span
  m="756190">observe,</span> <span m="756720">some</span> <span
  m="757060">number</span> <span m="757440">of</span> <span
  m="757540">proteins.</span> <span m="758490">So</span> <span
  m="758600">frequency.</span> <span m="761320">And</span> <span
  m="761910">this</span> <span m="762150">is</span> <span
  m="762260">going</span> <span m="762380">to</span> <span m="762540">do</span>
  <span m="762720">something.</span></p><p><span m="767120">So</span> <span
  m="767690">what</span> <span m="768080">about--</span> <span
  m="768910">it</span> <span m="769100">may</span> <span m="769190">not</span>
  <span m="769330">be</span> <span m="769470">a beautiful</span> <span
  m="769710">drawing,</span> <span m="770050">but</span> <span
  m="770890">you're</span> <span m="771030">supposed</span> <span
  m="771330">to</span> <span m="771380">know</span> <span m="771470">the</span>
  <span m="771590">answer.</span> <span m="772690">I'm</span> <span
  m="772840">trying</span> <span m="773010">to</span> <span
  m="773370">review</span> <span m="773860">things</span> <span
  m="774190">for</span> <span m="774400">you</span> <span
  m="774550">because</span> <span m="774810">I</span> <span
  m="774870">hear</span> <span m="775060">that</span> <span
  m="775170">you</span> <span m="775260">have</span> <span m="775410">a</span>
  <span m="775470">big</span> <span m="775730">exam</span> <span
  m="776110">coming</span> <span m="776390">up,</span> <span
  m="777060">and</span> <span m="777220">I</span> <span m="777320">want</span>
  <span m="777480">to</span> <span m="777520">make</span> <span
  m="777670">sure</span> <span m="777840">that--</span></p><p><span
  m="781800">Gamma.</span> <span m="782065">It's a</span> <span
  m="782330">gamma,</span> <span m="782910">right?</span> <span
  m="783470">So</span> <span m="783590">this</span> <span m="784770">is</span>
  <span m="784870">what</span> <span m="785100">we</span> <span
  m="786860">learned</span> <span m="787160">earlier.</span> <span
  m="787520">So</span> <span m="787660">this</span> <span m="787870">is a</span>
  <span m="788120">gamma</span> <span m="788460">distribution.</span> <span
  m="789250">And</span> <span m="789510">you</span> <span
  m="789620">should</span> <span m="789830">know</span> <span
  m="791360">what</span> <span m="791500">this</span> <span
  m="791660">gamma</span> <span m="791910">distribution</span> <span
  m="792420">looks</span> <span m="792670">like.</span> <span
  m="793375">In</span> <span m="793700">particular,</span> <span
  m="794160">there</span> <span m="794560">are</span> <span
  m="794600">these</span> <span m="794970">two</span> <span
  m="795160">parameters</span> <span m="795420">that</span> <span
  m="795680">describe</span> <span m="796120">this gamma</span> <span
  m="796415">distribution</span> <span m="796710">as</span> <span
  m="796820">a</span> <span m="796870">function</span> <span
  m="797280">of</span> <span m="798200">underlying</span> <span
  m="798610">parameters</span> <span m="799050">in</span> <span
  m="799100">the</span> <span m="799150">model.</span></p><p><span
  m="799500">AUDIENCE:</span> <span m="799978">[INAUDIBLE]</span></p><p><span
  m="805240">PROFESSOR: Maybe.</span> <span m="806840">I</span> <span
  m="807160">don't</span> <span m="807300">want</span> <span
  m="807440">to</span> <span m="807840">get</span> <span m="808920">too</span>
  <span m="809030">much</span> <span m="809190">into</span> <span
  m="809300">this</span> <span m="809470">because,</span> <span
  m="810730">well,</span> <span m="811590">on</span> <span
  m="811740">Thursday</span> <span m="812090">we</span> <span
  m="812200">spent</span> <span m="813110">a</span> <span m="813210">long</span>
  <span m="813450">time</span> <span m="813720">talking</span> <span
  m="813940">about</span> <span m="814100">it.</span> <span
  m="815320">Once</span> <span m="815530">we</span> <span m="815660">get
  going,</span> <span m="815940">we'll</span> <span m="816070">spend</span>
  <span m="816270">another</span> <span m="816500">long</span> <span
  m="816700">time</span> <span m="816960">taling about</span> <span
  m="817280">it</span> <span m="817370">again.</span> <span
  m="818250">But</span> <span m="818845">you</span> <span
  m="819120">should</span> <span m="819460">review</span> <span
  m="820650">your</span> <span m="820800">notes</span> <span
  m="821480">from</span> <span m="821650">Thursday</span> <span
  m="821980">before</span> <span m="823600">the</span> <span
  m="823690">exam.</span></p><p><span m="827150">So</span> <span
  m="827260">this</span> <span m="827430">thing</span> <span
  m="827580">is</span> <span m="827720">gamma</span> <span
  m="828050">distributed.</span> <span m="828670">And</span> <span
  m="828740">if</span> <span m="828810">we</span> <span m="828910">looked</span>
  <span m="829090">at the</span> <span m="829340">mRNA</span> <span
  m="829910">number</span> <span m="831040">as</span> <span m="831160">a</span>
  <span m="831210">function of</span> <span m="831400">time</span> <span
  m="831710">and we</span> <span m="831790">did</span> <span m="831910">a</span>
  <span m="831940">histogram</span> <span m="832500">of</span> <span
  m="832590">that,</span> <span m="833620">the</span> <span
  m="833770">mRNA</span> <span m="834420">distribution</span> <span
  m="834990">would</span> <span m="835160">be</span> <span
  m="835280">what?</span> <span m="837320">It's</span> <span
  m="837470">poisson.</span> <span m="839290">So</span> <span
  m="839480">it's</span> <span m="839560">important</span> <span
  m="839850">to</span> <span m="839950">remember</span> <span
  m="840120">that</span> <span m="842370">just</span> <span
  m="842570">because</span> <span m="842740">I</span> <span
  m="842820">tell</span> <span m="843090">you</span> <span
  m="843230">that</span> <span m="843380">a</span> <span
  m="843570">protein</span> <span m="843860">number is</span> <span
  m="844170">gamma</span> <span m="844380">distributed,</span> <span
  m="844780">that</span> <span m="844920">doesn't</span> <span
  m="845490">immediately</span> <span m="846060">tell</span> <span
  m="846300">you</span> <span m="846430">exactly</span> <span
  m="846860">what</span> <span m="846990">you</span> <span
  m="847040">should</span> <span m="847160">be</span> <span
  m="847240">expecting</span> <span m="848060">for</span> <span
  m="848400">the</span> <span m="849880">distribution</span> <span
  m="850340">of,</span> <span m="850530">say,</span> <span m="850660">the</span>
  <span m="850780">number</span> <span m="851250">of</span> <span
  m="851380">protein as a</span> <span m="851770">function</span> <span
  m="852000">of</span> <span m="852060">time.</span></p><p><span
  m="852520">I</span> <span m="852570">mean,</span> <span
  m="852800">there</span> <span m="853030">are</span> <span
  m="853060">many</span> <span m="853330">different</span> <span
  m="854140">things</span> <span m="854490">I</span> <span
  m="854540">could</span> <span m="854750">plot</span> <span
  m="854940">over</span> <span m="855060">here</span> <span
  m="855210">that</span> <span m="855320">would</span> <span
  m="855410">all</span> <span m="855630">kind</span> <span m="855770">of</span>
  <span m="856690">come</span> <span m="856910">down</span> <span
  m="857090">to</span> <span m="857370">a</span> <span m="857480">gamma</span>
  <span m="857780">distribution</span> <span m="858080">over</span> <span
  m="858210">here.</span> <span m="859890">So</span> <span
  m="860200">it's</span> <span m="860340">important</span> <span
  m="860640">to</span> <span m="860680">kind</span> <span m="860810">of</span>
  <span m="860880">keep</span> <span m="861020">in</span> <span
  m="861070">mind</span> <span m="861270">the</span> <span
  m="861310">different</span> <span m="861630">representations</span> <span
  m="862340">that</span> <span m="862450">you</span> <span
  m="862550">might</span> <span m="863350">want</span> <span
  m="863480">to</span> <span m="863520">think</span> <span
  m="863650">about</span> <span m="863870">the data.</span></p><p><span
  m="873360">So</span> <span m="873460">what we</span> <span
  m="873530">want</span> <span m="873840">to do</span> <span
  m="873900">now</span> <span m="874100">is</span> <span m="874170">we</span>
  <span m="874290">want</span> <span m="874460">to</span> <span
  m="875030">think</span> <span m="875160">a</span> <span
  m="875210">little</span> <span m="875390">bit</span> <span
  m="875490">more</span> <span m="875700">about</span> <span
  m="875900">this</span> <span m="876060">master</span> <span
  m="876420">equation</span> <span m="876960">in</span> <span
  m="877100">the</span> <span m="877190">context</span> <span
  m="877710">of</span> <span m="879100">if</span> <span m="879260">we're</span>
  <span m="879400">going to</span> <span m="879830">divide it</span> <span
  m="880150">up</span> <span m="880690">into</span> <span
  m="881400">these</span> <span m="881580">states.</span> <span
  m="881980">Now</span> <span m="882590">I</span> <span m="882710">would
  say</span> <span m="882900">that</span> <span m="883090">any</span> <span
  m="883400">time</span> <span m="884270">that</span> <span
  m="884430">you</span> <span m="884570">are</span> <span
  m="884670">asked</span> <span m="884920">to</span> <span
  m="885000">write</span> <span m="885180">down</span> <span
  m="885870">the</span> <span m="886390">master</span> <span
  m="886810">equation</span> <span m="887930">for</span> <span
  m="888100">something--</span> <span m="889240">so</span> <span
  m="889350">now</span> <span m="891840">how</span> <span m="892060">many</span>
  <span m="892660">equations</span> <span m="892890">will</span> <span
  m="893530">the</span> <span m="893590">master</span> <span
  m="893950">equation--</span> <span m="897920">I</span> <span
  m="897990">say</span> <span m="898130">master</span> <span
  m="898450">equation,</span> <span m="898880">but</span> <span
  m="899190">there</span> <span m="899370">is</span> <span
  m="899490">really</span> <span m="899810">more</span> <span
  m="900010">than</span> <span m="900130">one,</span> <span
  m="900300">maybe.</span> <span m="900730">So</span> <span
  m="900870">how</span> <span m="901330">many</span> <span
  m="902410">equations</span> <span m="902840">will</span> <span
  m="902940">be</span> <span m="903030">involved</span> <span
  m="903390">in</span> <span m="903450">the</span> <span
  m="903530">master</span> <span m="903870">equation</span> <span
  m="904800">kind</span> <span m="904950">of</span> <span
  m="905040">description</span> <span m="905600">of</span> <span
  m="905760">this</span> <span m="905850">model?</span></p><p><span
  m="912440">Infinitely</span> <span m="912810">many.</span> <span
  m="913320">But</span> <span m="913540">there</span> <span m="913740">were
  infinitely</span> <span m="914000">many</span> <span m="914250">already</span>
  <span m="914650">when</span> <span m="914830">we</span> <span
  m="914920">had</span> <span m="915070">just</span> <span
  m="915230">one,</span> <span m="915970">when</span> <span m="916280">we</span>
  <span m="916460">just</span> <span m="916640">had</span> <span
  m="916720">the</span> <span m="916930">mRNA</span> <span
  m="917060">distribution.</span> <span m="919510">Well,</span> <span
  m="919740">you know,</span> <span m="920050">infinite</span> <span
  m="920650">times</span> <span m="920900">infinite</span> <span m="921400">is
  still</span> <span m="921730">infinite.</span> <span m="923420">So</span>
  <span m="923600">long</span> <span m="923820">as</span> <span
  m="923930">it's</span> <span m="925840">a</span> <span
  m="926280">countably</span> <span m="926880">infinite</span> <span
  m="927280">number.</span> <span m="928160">But</span> <span
  m="928880">yeah,</span> <span m="929130">but</span> <span
  m="929140">it's</span> <span m="930530">still</span> <span
  m="930780">infinite,</span> <span m="931130">always.</span> <span
  m="931490">All</span> <span m="931770">right.</span></p><p><span
  m="932430">So</span> <span m="932590">what</span> <span m="932700">we</span>
  <span m="932790">want</span> <span m="932900">to</span> <span
  m="932940">do</span> <span m="933120">is</span> <span m="933480">divide</span>
  <span m="934120">up</span> <span m="934370">the</span> <span
  m="934450">states.</span> <span m="934800">So</span> <span
  m="935200">when</span> <span m="935410">somebody</span> <span
  m="935600">asks</span> <span m="935870">you</span> <span
  m="936030">for--</span> <span m="937080">the</span> <span
  m="937390">equation's</span> <span m="938010">describing</span> <span
  m="938450">how</span> <span m="938580">those</span> <span
  m="938800">probabilities</span> <span m="939350">are</span> <span
  m="939410">going</span> <span m="939520">to</span> <span
  m="939600">vary,</span> <span m="940410">really</span> <span
  m="940660">what</span> <span m="940800">we're</span> <span
  m="940920">interested</span> <span m="941210">in</span> <span
  m="941290">is</span> <span m="941590">some</span> <span m="942550">derivative
  with</span> <span m="943010">respect</span> <span m="943260">to</span> <span
  m="943320">time</span> <span m="943660">of</span> <span m="944070">some</span>
  <span m="944290">probabilities</span> <span m="945570">described</span> <span
  m="946050">by</span> <span m="946220">m,n.</span> <span m="947410">We</span>
  <span m="947530">want</span> <span m="947700">to</span> <span m="947740">know
  the derivative with</span> <span m="948230">respect</span> <span
  m="948530">to</span> <span m="948590">time</span> <span m="951480">for</span>
  <span m="951740">all</span> <span m="952220">m,n's.</span> <span
  m="953140">So</span> <span m="953350">that's</span> <span
  m="953570">why</span> <span m="953700">there are</span> <span
  m="953960">infinite</span> <span m="954360">number,</span> <span
  m="954650">because</span> <span m="955850">m</span> <span
  m="956150">goes</span> <span m="956290">in</span> <span m="956350">one</span>
  <span m="956470">direction,</span> <span m="956760">n</span> <span
  m="956950">goes</span> <span m="957080">in another.</span> <span
  m="958400">Lots of</span> <span m="958610">them,</span> <span
  m="958880">OK?</span></p><p><span m="959560">Now</span> <span
  m="961840">it's</span> <span m="962020">always</span> <span
  m="962390">tempting</span> <span m="962790">to</span> <span
  m="962850">just</span> <span m="963030">write</span> <span
  m="963390">down</span> <span m="963580">this</span> <span
  m="963740">derivative</span> <span m="964680">and</span> <span
  m="964910">then</span> <span m="966580">just</span> <span
  m="966920">write</span> <span m="967200">down</span> <span
  m="967430">the</span> <span m="967520">equation.</span> <span
  m="968600">If</span> <span m="968700">you</span> <span m="968720">do</span>
  <span m="968910">that,</span> <span m="969235">that's</span> <span
  m="969560">fine,</span> <span m="970010">but</span> <span m="970210">I</span>
  <span m="970270">would</span> <span m="970480">recommend</span> <span
  m="970840">that</span> <span m="971200">in</span> <span
  m="971370">general</span> <span m="971780">what</span> <span
  m="971930">you</span> <span m="972030">do</span> <span m="972240">is</span>
  <span m="972330">you</span> <span m="972470">try</span> <span
  m="972690">to</span> <span m="973230">write</span> <span m="973580">a</span>
  <span m="973670">little</span> <span m="973890">chart</span> <span
  m="974180">out</span> <span m="974540">to</span> <span m="974700">keep</span>
  <span m="974870">track</span> <span m="975180">of</span> <span
  m="975330">what</span> <span m="975480">directions</span> <span
  m="976060">things</span> <span m="976310">can</span> <span
  m="976440">go.</span> <span m="978280">So</span> <span m="978390">for</span>
  <span m="978490">example,</span> <span m="978850">here</span> <span
  m="980400">we</span> <span m="980580">have</span> <span m="980680">the</span>
  <span m="980760">probability</span> <span m="981270">of</span> <span
  m="981380">being</span> <span m="981720">the m,n</span> <span
  m="982220">state.</span> <span m="985000">Now</span> <span
  m="985220">there's</span> <span m="985770">going</span> <span
  m="985880">to</span> <span m="985940">be</span> <span m="986060">ways</span>
  <span m="986450">of</span> <span m="986560">going</span> <span
  m="986880">here.</span> <span m="987180">And</span> <span
  m="987240">this</span> <span m="987380">is</span> <span
  m="987520">going</span> <span m="987630">to</span> <span m="987680">be</span>
  <span m="987810">going</span> <span m="988950">probability</span> <span
  m="989550">of</span> <span m="989610">being</span> <span m="989790">an</span>
  <span m="989880">m</span> <span m="990120">plus</span> <span
  m="990410">1,n.</span></p><p><span m="998006">What</span> <span
  m="998490">I'm</span> <span m="998550">going</span> <span m="998630">to</span>
  <span m="998670">do</span> <span m="998770">is</span> <span
  m="998850">I'm</span> <span m="998960">going</span> <span m="999050">to</span>
  <span m="999090">give</span> <span m="999350">you</span> <span
  m="1000000">just</span> <span m="1000240">a</span> <span
  m="1000350">couple</span> <span m="1000640">minutes.</span> <span
  m="1001330">And</span> <span m="1001520">in</span> <span
  m="1002200">two</span> <span m="1002400">minutes,</span> <span
  m="1002710">I</span> <span m="1002770">want</span> <span
  m="1002990">you</span> <span m="1003110">to</span> <span
  m="1003350">try</span> <span m="1003700">to</span> <span
  m="1003810">write</span> <span m="1004000">down</span> <span
  m="1004320">as</span> <span m="1004770">many</span> <span
  m="1005590">of</span> <span m="1006340">the</span> <span
  m="1007050">rates,</span> <span m="1008540">the f's</span> <span
  m="1008940">and n's</span> <span m="1009620">that</span> <span
  m="1009700">correspond</span> <span m="1010240">to</span> <span
  m="1010320">all</span> <span m="1010470">these</span> <span
  m="1010630">transitions.</span> <span m="1011520">You</span> <span
  m="1011660">may</span> <span m="1011800">not</span> <span
  m="1011980">be</span> <span m="1012090">able</span> <span
  m="1012210">to</span> <span m="1012270">get</span> <span
  m="1012440">through</span> <span m="1012590">all</span> <span
  m="1012880">of</span> <span m="1012950">them,</span> <span
  m="1013430">but</span> <span m="1014230">if</span> <span
  m="1014440">you</span> <span m="1014650">don't</span> <span
  m="1015130">try</span> <span m="1015600">to</span> <span
  m="1015720">figure</span> <span m="1015980">out</span> <span
  m="1016110">some</span> <span m="1016330">of</span> <span
  m="1016400">them,</span> <span m="1016590">then</span> <span
  m="1016740">you're</span> <span m="1016860">going</span> <span
  m="1016980">to</span> <span m="1017100">have</span> <span
  m="1017300">trouble</span> <span m="1018070">doing</span> <span
  m="1018320">it</span> <span m="1018820">at a later date.</span></p><p><span
  m="1034819">Do</span> <span m="1034920">you</span> <span
  m="1035050">understand</span> <span m="1035400">what</span> <span
  m="1035510">I'm</span> <span m="1035579">asking</span> <span
  m="1035810">you</span> <span m="1035859">to</span> <span
  m="1035920">do?</span> <span m="1038230">So</span> <span
  m="1038390">next</span> <span m="1038670">to</span> <span
  m="1038710">each</span> <span m="1038990">one</span> <span
  m="1039140">of</span> <span m="1039180">these</span> <span
  m="1039329">arrows,</span> <span m="1039819">you</span> <span
  m="1039920">should</span> <span m="1040000">write</span> <span
  m="1040430">something.</span> <span m="1044480">So I'll</span> <span
  m="1044640">give</span> <span m="1044740">you</span> <span
  m="1044819">two</span> <span m="1045000">minutes</span> <span
  m="1045310">to</span> <span m="1045930">kind</span> <span
  m="1046099">of</span> <span m="1046190">do</span> <span
  m="1046290">your</span> <span m="1046460">best</span> <span
  m="1046810">of</span> <span m="1047579">writing</span> <span
  m="1047800">these</span> <span m="1047930">things</span> <span
  m="1048119">down.</span></p><p>&nbsp;</p><p><span m="1178690">All
  right.</span> <span m="1178910">Why don't</span> <span m="1179020">we</span>
  <span m="1179720">reconvene,</span> <span m="1180410">and</span> <span
  m="1182070">we'll</span> <span m="1182640">see</span> <span
  m="1182880">how</span> <span m="1183060">we</span> <span
  m="1183190">are?</span> <span m="1184660">So</span> <span
  m="1185610">this</span> <span m="1185800">is</span> <span
  m="1186510">very</span> <span m="1186750">similar</span> <span
  m="1187015">to</span> <span m="1187280">what</span> <span
  m="1187330">we</span> <span m="1187460">did</span> <span m="1187720">on</span>
  <span m="1187860">Thursday.</span> <span m="1189290">We</span> <span
  m="1189460">have</span> <span m="1189560">to</span> <span
  m="1189630">remember</span> <span m="1189950">that</span> <span
  m="1190200">m's</span> <span m="1190620">are</span> <span
  m="1190710">the</span> <span m="1190920">mRNAs,</span> <span
  m="1191195">and</span> <span m="1191470">this</span> <span
  m="1191670">is</span> <span m="1191780">what</span> <span
  m="1191950">we</span> <span m="1192880">solved</span> <span
  m="1193200">before,</span> <span m="1194750">where</span> <span
  m="1194970">it's</span> <span m="1195460">just</span> <span
  m="1195730">a</span> <span m="1195780">long</span> <span
  m="1196830">row.</span></p><p><span m="1198430">Now</span> <span
  m="1199280">first</span> <span m="1199530">of</span> <span
  m="1199580">all,</span> <span m="1200170">the</span> <span
  m="1200490">mRNA</span> <span m="1201940">distributions</span> <span
  m="1203100">and</span> <span m="1203280">the</span> <span
  m="1203380">rates,</span> <span m="1203910">do</span> <span
  m="1204150">they</span> <span m="1204490">depend</span> <span
  m="1204980">on</span> <span m="1206530">the</span> <span
  m="1206610">protein</span> <span m="1207600">numbers?</span> <span
  m="1208607">No.</span> <span m="1209950">So</span> <span
  m="1210070">what</span> <span m="1210200">that</span> <span
  m="1210340">mean</span> <span m="1210470">about,</span> <span
  m="1210870">say,</span> <span m="1211190">this</span> <span
  m="1211730">arrow</span> <span m="1212120">as</span> <span
  m="1212250">compared</span> <span m="1212570">to</span> <span
  m="1212920">the</span> <span m="1213170">arrow that</span> <span
  m="1213320">would</span> <span m="1213430">be</span> <span
  m="1213520">down</span> <span m="1214490">here?</span> <span
  m="1215980">It's</span> <span m="1216080">going</span> <span
  m="1216200">to</span> <span m="1216290">be the same,</span> <span
  m="1217550">because</span> <span m="1217900">n</span> <span
  m="1218220">does</span> <span m="1218360">not</span> <span
  m="1218550">appear</span> <span m="1219110">in</span> <span
  m="1219190">that</span> <span m="1219740">equation</span> <span
  m="1220040">describing</span> <span m="1220400">mRNA.</span> <span
  m="1221310">If</span> <span m="1221490">we</span> <span m="1221570">had</span>
  <span m="1222110">autoregulation</span> <span m="1222800">of</span> <span
  m="1222860">some</span> <span m="1223010">sort,</span> <span
  m="1223330">then</span> <span m="1223350">it</span> <span
  m="1223410">would.</span> <span m="1226550">So</span> <span
  m="1226840">let's</span> <span m="1227530">go</span> <span
  m="1227630">through.</span></p><p><span m="1228690">All</span> <span
  m="1228880">right.</span> <span m="1229140">What</span> <span
  m="1229400">we're</span> <span m="1229590">going</span> <span
  m="1229820">to</span> <span m="1229860">do</span> <span m="1230030">is</span>
  <span m="1230110">we're</span> <span m="1230200">going</span> <span
  m="1230280">to</span> <span m="1230320">do</span> <span m="1230420">a</span>
  <span m="1230440">verbal</span> <span m="1231010">yelling</span> <span
  m="1231350">out.</span> <span m="1231880">OK,</span> <span
  m="1232110">ready.</span> <span m="1233060">This</span> <span
  m="1233290">arrow.</span></p><p><span m="1233555">AUDIENCE:</span> <span
  m="1234295">Km.</span></p><p><span m="1238100">PROFESSOR: This</span> <span
  m="1238300">one</span> <span m="1238460">here</span> <span
  m="1238740">is,</span> <span m="1239030">3,2,1--</span></p><p><span
  m="1239655">AUDIENCE: Km.</span></p><p><span m="1240360">PROFESSOR: Km.</span>
  <span m="1241060">All</span> <span m="1241250">right.</span> <span
  m="1242720">All</span> <span m="1242810">right.</span> <span
  m="1243890">Ready,</span> <span m="1244150">3,</span> <span
  m="1244760">2,</span> <span m="1245280">1.</span></p><p><span
  m="1246754">AUDIENCE: Gamma m times m.</span></p><p><span
  m="1248080">PROFESSOR: Gamma</span> <span m="1248420">m</span> <span
  m="1248660">times</span> <span m="1249100">m.</span> <span
  m="1251300">3,</span> <span m="1251780">2,</span> <span
  m="1252170">1.</span></p><p><span m="1252880">AUDIENCE: Gamma n</span> <span
  m="1253362">times</span> <span m="1253844">m</span> <span m="1254326">plus
  1.</span></p><p><span m="1254810">PROFESSOR: Gamma</span> <span
  m="1255070">m</span> <span m="1255380">times</span> <span m="1255710">m</span>
  <span m="1255990">plus</span> <span m="1256390">1.</span> <span
  m="1257720">Now</span> <span m="1257770">remember</span> <span
  m="1258510">that</span> <span m="1258950">there</span> <span
  m="1259130">are</span> <span m="1259230">more</span> <span
  m="1259680">mRNA</span> <span m="1260090">over</span> <span
  m="1260290">here</span> <span m="1260660">then</span> <span
  m="1260790">there</span> <span m="1260910">are</span> <span
  m="1261020">here,</span> <span m="1261300">which</span> <span
  m="1261450">means</span> <span m="1261630">that</span> <span
  m="1261790">the</span> <span m="1262010">rate</span> <span
  m="1262300">of</span> <span m="1262440">degradation</span> <span
  m="1263050">will</span> <span m="1263180">increase.</span> <span
  m="1266900">Now</span> <span m="1267690">coming</span> <span
  m="1268050">here,</span> <span m="1268310">now</span> <span
  m="1268480">this</span> <span m="1268660">is</span> <span
  m="1268790">talking</span> <span m="1269040">about</span> <span
  m="1269240">the</span> <span m="1269310">creation</span> <span
  m="1269900">and</span> <span m="1269990">destruction</span> <span
  m="1270710">of</span> <span m="1271090">the</span> <span
  m="1271320">proteins,</span> <span m="1272160">changes in</span> <span
  m="1272540">n.</span> <span m="1273420">All right,</span> <span
  m="1273600">this</span> <span m="1273820">arrow</span> <span
  m="1274080">here.</span> <span m="1274450">Ready,</span> <span
  m="1274790">3,</span> <span m="1275210">2,</span> <span
  m="1275510">1.</span></p><p><span m="1276080">AUDIENCE: Kp</span> <span
  m="1276556">times</span> <span m="1277032">m.</span></p><p><span
  m="1277984">PROFESSOR: It's</span> <span m="1278460">Kp</span> <span
  m="1279620">times</span> <span m="1279950">m.</span> <span
  m="1281100">So</span> <span m="1281280">this</span> <span
  m="1281430">is</span> <span m="1281530">the</span> <span
  m="1281630">rate</span> <span m="1281790">of</span> <span
  m="1281880">creation,</span> <span m="1282750">going</span> <span
  m="1283040">from</span> <span m="1285160">n</span> <span
  m="1285350">minus</span> <span m="1285600">1</span> <span
  m="1285860">to</span> <span m="1285990">n.</span> <span
  m="1286980">That's</span> <span m="1287270">fine.</span> <span m="1288070">You
  know,</span> <span m="1288830">I</span> <span m="1289140">was</span> <span
  m="1289260">looking</span> <span m="1289440">at</span> <span
  m="1289490">my</span> <span m="1289600">notes</span> <span
  m="1289960">from</span> <span m="1290430">last</span> <span m="1290860">year,
  and</span> <span m="1291160">I</span> <span m="1291270">got</span> <span
  m="1291450">one</span> <span m="1291560">of</span> <span
  m="1291600">these</span> <span m="1291730">things</span> <span
  m="1291890">incorrect,</span> <span m="1292330">so--</span> <span
  m="1294120">and</span> <span m="1294230">then,</span> <span
  m="1294440">OK,</span> <span m="1294680">ready.</span> <span
  m="1295030">This</span> <span m="1295180">one</span> <span
  m="1295310">here,</span> <span m="1295540">3,</span> <span
  m="1295940">2,</span> <span m="1296250">1.</span> <span m="1298440">Kp</span>
  <span m="1298840">times</span> <span m="1299180">m.</span> <span
  m="1300600">So</span> <span m="1301420">here</span> <span
  m="1302430">the</span> <span m="1302530">same</span> <span
  m="1303190">rate,</span> <span m="1304320">and</span> <span
  m="1304430">should</span> <span m="1304550">we</span> <span
  m="1304640">be</span> <span m="1304750">surprised</span> <span
  m="1305270">by</span> <span m="1305370">that?</span></p><p><span
  m="1307000">So</span> <span m="1307120">the</span> <span
  m="1307210">number</span> <span m="1307520">of</span> <span
  m="1307610">proteins</span> <span m="1308060">are</span> <span
  m="1308120">changing,</span> <span m="1308430">but</span> <span
  m="1308550">here it's</span> <span m="1308870">the</span> <span
  m="1308950">number</span> <span m="1309120">of</span> <span
  m="1309200">mRNA</span> <span m="1309640">that</span> <span
  m="1309760">matters,</span> <span m="1310330">because</span> <span
  m="1310470">we're</span> <span m="1310570">talking</span> <span
  m="1310750">about</span> <span m="1310880">the</span> <span
  m="1311390">rate</span> <span m="1311610">of</span> <span
  m="1311710">translation,</span> <span m="1312410">right?</span> <span
  m="1314170">Now</span> <span m="1314670">this</span> <span
  m="1314890">one</span> <span m="1315000">here,</span> <span
  m="1315340">3,</span> <span m="1315770">2,</span> <span m="1316170">1.</span>
  <span m="1318590">Gamma</span> <span m="1318920">p</span> <span
  m="1319310">times</span> <span m="1319820">n.</span> <span
  m="1320720">And</span> <span m="1320900">here,</span> <span
  m="1321320">3,</span> <span m="1321870">2,</span> <span
  m="1322370">1.</span></p><p><span m="1323204">AUDIENCE: Gamma</span> <span
  m="1323618">p</span> <span m="1324032">times</span> <span m="1324446">n plus
  1.</span></p><p><span m="1324860">PROFESSOR: Gamma</span> <span
  m="1325150">p</span> <span m="1325370">times</span> <span m="1325670">n</span>
  <span m="1325920">plus</span> <span m="1326230">1.</span> <span
  m="1326590">All</span> <span m="1326700">right.</span> <span
  m="1327220">Perfect.</span> <span m="1328380">Now</span> <span
  m="1328970">this</span> <span m="1329260">is,</span> <span
  m="1329710">of</span> <span m="1329830">course,</span> <span
  m="1330130">as</span> <span m="1330230">you</span> <span
  m="1330330">can</span> <span m="1330430">imagine,</span> <span
  m="1330610">the</span> <span m="1330780">simplest</span> <span
  m="1331350">possible</span> <span m="1332210">kind</span> <span
  m="1332340">of</span> <span m="1332800">set</span> <span m="1333040">of</span>
  <span m="1333100">equations</span> <span m="1333620">that</span> <span
  m="1333690">we</span> <span m="1333790">could</span> <span
  m="1333970">have</span> <span m="1334130">written</span> <span
  m="1334290">down.</span> <span m="1335170">If</span> <span
  m="1335240">you</span> <span m="1335350">have</span> <span
  m="1337040">other</span> <span m="1337360">crazy</span> <span
  m="1337730">things,</span> <span m="1338570">you</span> <span
  m="1338750">get</span> <span m="1339250">different</span> <span
  m="1339560">distributions,</span> <span m="1340580">if</span> <span
  m="1340660">you</span> <span m="1340740">have</span> <span
  m="1340860">autoregulation</span> <span m="1341500">or</span> <span
  m="1341790">if</span> <span m="1341870">you</span> <span
  m="1342000">have</span> <span m="1342660">interactions</span> <span
  m="1343400">of</span> <span m="1343490">something</span> <span
  m="1343790">with</span> <span m="1343880">something</span> <span
  m="1344130">else,</span> <span m="1345570">or</span> <span
  m="1345690">the</span> <span m="1345780">same</span> <span
  m="1346010">thing,</span> <span m="1346490">so</span> <span
  m="1346650">forth.</span></p><p><span m="1346940">But</span> <span
  m="1347760">I</span> <span m="1348810">think</span> <span
  m="1349060">it's</span> <span m="1349370">really</span> <span
  m="1349590">very</span> <span m="1349810">useful</span> <span
  m="1350190">to</span> <span m="1350510">kind</span> <span
  m="1350630">of</span> <span m="1350710">write</span> <span
  m="1350910">this</span> <span m="1351060">thing</span> <span
  m="1351210">down</span> <span m="1351500">to</span> <span
  m="1351900">clarify</span> <span m="1353460">your</span> <span
  m="1353570">thinking</span> <span m="1353930">in</span> <span
  m="1354290">these</span> <span m="1354430">problems.</span> <span
  m="1355220">And</span> <span m="1355320">then</span> <span
  m="1355490">you</span> <span m="1355630">can</span> <span
  m="1356590">fill</span> <span m="1357120">out--</span> <span
  m="1358720">for</span> <span m="1358960">change</span> <span
  m="1359100">of</span> <span m="1359240">probability,</span> <span
  m="1359640">you</span> <span m="1359860">have</span> <span
  m="1360030">mn.</span> <span m="1360640">You</span> <span
  m="1360760">come</span> <span m="1360930">here</span> <span
  m="1361180">and</span> <span m="1361240">you</span> <span
  m="1361310">just</span> <span m="1361810">go</span> <span
  m="1362140">around</span> <span m="1362490">and</span> <span
  m="1362560">you</span> <span m="1362770">count,</span> <span
  m="1363080">take</span> <span m="1363320">all</span> <span
  m="1363560">the</span> <span m="1364300">arrows</span> <span
  m="1364550">coming</span> <span m="1364780">in,</span> <span
  m="1365010">and</span> <span m="1365890">those</span> <span
  m="1366010">are</span> <span m="1366060">ways</span> <span
  m="1366220">of</span> <span m="1366290">increasing</span> <span
  m="1366720">your</span> <span m="1366820">probability.</span> <span
  m="1368300">And</span> <span m="1368660">ways</span> <span
  m="1368950">going</span> <span m="1369140">out</span> <span
  m="1369320">are</span> <span m="1369400">ways</span> <span
  m="1369600">of</span> <span m="1369740">decreasing</span> <span
  m="1370140">your</span> <span m="1370240">probability.</span></p><p><span
  m="1372260">Now</span> <span m="1372450">in</span> <span
  m="1372570">all</span> <span m="1372690">those</span> <span
  m="1372850">cases</span> <span m="1373190">you</span> <span
  m="1373270">have</span> <span m="1373370">to</span> <span
  m="1373740">multiply</span> <span m="1374100">these</span> <span
  m="1374270">raw</span> <span m="1374550">rates</span> <span
  m="1374830">by</span> <span m="1375010">the</span> <span
  m="1375110">probabilities</span> <span m="1375730">of</span> <span
  m="1375780">being</span> <span m="1375980">in all</span> <span
  m="1376190">these</span> <span m="1376260">other</span> <span
  m="1376380">states.</span></p><p><span m="1386220">So</span> <span
  m="1386400">can</span> <span m="1386550">you</span> <span
  m="1386640">use</span> <span m="1386830">the</span> <span
  m="1386910">master</span> <span m="1387350">equation</span> <span
  m="1387850">to</span> <span m="1387950">get</span> <span
  m="1388220">these</span> <span m="1388530">probabilities</span> <span
  m="1390450">if</span> <span m="1390590">you're</span> <span
  m="1390790">out</span> <span m="1390970">of</span> <span
  m="1391050">equilibrium,</span> <span m="1392600">out</span> <span
  m="1392740">of</span> <span m="1392810">steady state?</span> <span
  m="1396890">So that's a</span> <span m="1397080">question.</span> <span
  m="1397650">So</span> <span m="1399840">the</span> <span
  m="1399940">master</span> <span m="1400300">equation</span> <span
  m="1401890">useful</span> <span m="1402480">out</span> <span
  m="1402700">of</span> <span m="1402770">steady</span> <span
  m="1402980">state?</span> <span m="1410390">Yes.</span> <span
  m="1412540">Ready.</span> <span m="1413350">3,</span> <span
  m="1414320">2,</span> <span m="1415060">1.</span> <span m="1419090">All</span>
  <span m="1419260">right.</span> <span m="1419520">So</span> <span
  m="1419650">we</span> <span m="1419770">got</span> <span m="1422000">a</span>
  <span m="1422100">fair</span> <span m="1422570">number</span> <span
  m="1423010">of--</span> <span m="1425990">there</span> <span
  m="1426340">is</span> <span m="1426430">some</span> <span
  m="1426700">disagreement,</span> <span m="1427130">but
  yeah.</span></p><p><span m="1427280">So it</span> <span
  m="1427340">actually--</span> <span m="1427640">the</span> <span
  m="1427740">answer</span> <span m="1427960">is</span> <span
  m="1428090">yes.</span> <span m="1429360">And</span> <span
  m="1429430">that's</span> <span m="1429600">because</span> <span
  m="1429870">you</span> <span m="1430020">can</span> <span
  m="1430350">start</span> <span m="1431380">with</span> <span
  m="1431540">any</span> <span m="1431990">distribution</span> <span
  m="1432660">of</span> <span m="1432760">probabilities</span> <span
  m="1433220">across</span> <span m="1433460">all</span> <span
  m="1433540">the</span> <span m="1433600">states</span> <span m="1433850">that
  you'd</span> <span m="1433990">like.</span> <span m="1434940">It</span> <span
  m="1435020">could</span> <span m="1435150">be</span> <span
  m="1435240">that</span> <span m="1435370">all</span> <span
  m="1435800">of</span> <span m="1435880">the</span> <span
  m="1435980">probabilities</span> <span m="1436410">at</span> <span
  m="1436470">one</span> <span m="1436670">state.</span> <span m="1437020">It
  could</span> <span m="1437130">be</span> <span m="1437820">however</span>
  <span m="1438160">you</span> <span m="1438240">like.</span> <span
  m="1438930">And</span> <span m="1439150">the</span> <span
  m="1439210">master</span> <span m="1439570">equation</span> <span
  m="1439970">tells</span> <span m="1440240">you</span> <span
  m="1440310">about</span> <span m="1440450">how</span> <span
  m="1440560">that</span> <span m="1440770">probability</span> <span
  m="1441420">distribution</span> <span m="1441850">will</span> <span
  m="1441950">change</span> <span m="1442350">over</span> <span
  m="1442510">time.</span></p><p><span m="1444800">Now</span> <span
  m="1445280">if</span> <span m="1445400">you</span> <span
  m="1445540">let</span> <span m="1445790">that</span> <span
  m="1446030">run</span> <span m="1447120">forever,</span> <span
  m="1447510">then</span> <span m="1447640">you</span> <span
  m="1447770">come</span> <span m="1448020">to</span> <span
  m="1448100">some</span> <span m="1448350">equilibrium</span> <span
  m="1448980">steady</span> <span m="1449060">state.</span> <span
  m="1450870">And</span> <span m="1451970">that's</span> <span
  m="1452120">a</span> <span m="1452140">very</span> <span
  m="1452390">interesting</span> <span m="1452720">quantity, is</span> <span
  m="1453210">the</span> <span m="1453320">steady</span> <span
  m="1453540">state</span> <span m="1453730">distribution</span> <span
  m="1454160">of these</span> <span m="1454250">probabilities.</span> <span
  m="1454640">But</span> <span m="1455070">you</span> <span
  m="1455190">can</span> <span m="1455310">actually</span> <span
  m="1456020">calculate</span> <span m="1456520">from</span> <span
  m="1457400">any</span> <span m="1457690">initial</span> <span
  m="1458070">distribution</span> <span m="1458450">of</span> <span
  m="1458490">probabilities</span> <span m="1459670">evolving</span> <span
  m="1459960">to</span> <span m="1460080">any</span> <span
  m="1460370">later</span> <span m="1460590">time</span> <span
  m="1460770">t</span> <span m="1461300">what</span> <span
  m="1461440">the</span> <span m="1461520">probability</span> <span
  m="1462010">would</span> <span m="1462170">be</span> <span
  m="1462320">later.</span></p><p><span m="1465470">This</span> <span
  m="1465650">comes</span> <span m="1465960">to</span> <span
  m="1466330">another</span> <span m="1467020">question</span> <span
  m="1467470">here.</span> <span m="1469240">All</span> <span
  m="1469290">right.</span> <span m="1469450">So</span> <span
  m="1469610">let's</span> <span m="1469790">imagine</span> <span
  m="1470470">that</span> <span m="1470620">at</span> <span
  m="1470760">time</span> <span m="1471140">t</span> <span
  m="1471260">equal</span> <span m="1471390">to</span> <span
  m="1471440">0,</span> <span m="1472270">I</span> <span m="1472400">tell</span>
  <span m="1472620">you</span> <span m="1472710">that</span> <span
  m="1472860">there</span> <span m="1473090">are</span> <span
  m="1473400">m</span> <span m="1473650">not</span> <span
  m="1473990">mRNA</span> <span m="1474920">and</span> <span
  m="1475280">P</span> <span m="1475530">not--</span> <span m="1477875">I</span>
  <span m="1478160">always</span> <span m="1478480">do</span> <span
  m="1478610">this.</span> <span m="1481056">I don't know,</span> <span
  m="1481540">somehow</span> <span m="1481860">my</span> <span
  m="1482000">brain</span> <span m="1482630">does</span> <span
  m="1482800">not</span> <span m="1483030">like</span> <span
  m="1484430">this.</span> <span m="1486780">Because</span> <span
  m="1486990">the</span> <span m="1487110">P's</span> <span
  m="1487720">we</span> <span m="1487890">want</span> <span
  m="1488040">to</span> <span m="1488180">be</span> <span
  m="1488370">probabilities.</span> <span m="1492400">We</span> <span
  m="1492500">start</span> <span m="1492790">with m</span> <span
  m="1492910">not</span> <span m="1493140">mRNA,</span> <span
  m="1493830">n</span> <span m="1493980">not</span> <span
  m="1494390">protein.</span></p><p><span m="1498050">And</span> <span
  m="1498740">maybe</span> <span m="1499000">it's</span> <span
  m="1499110">a</span> <span m="1499150">complicated</span> <span
  m="1499610">situation.</span> <span m="1500270">We</span> <span
  m="1500580">can't</span> <span m="1500880">calculate</span> <span
  m="1501320">this</span> <span m="1501500">analytically.</span> <span
  m="1502390">So</span> <span m="1502520">what we</span> <span
  m="1502640">do</span> <span m="1502720">is</span> <span m="1502800">we</span>
  <span m="1502890">go</span> <span m="1503000">to</span> <span
  m="1503050">our</span> <span m="1503150">computer,</span> <span
  m="1503550">and</span> <span m="1503950">we</span> <span m="1504090">have
  it</span> <span m="1504310">solve</span> <span m="1505380">how</span> <span
  m="1505620">this</span> <span m="1505920">probability</span> <span
  m="1506410">distribution</span> <span m="1507920">will</span> <span
  m="1508150">evolve so</span> <span m="1508470">that</span> <span
  m="1508590">time</span> <span m="1509320">T</span> <span
  m="1509600">equal</span> <span m="1509860">to</span> <span
  m="1509930">some</span> <span m="1511020">time--</span> <span
  m="1511330">if</span> <span m="1511430">we'd</span> <span
  m="1511510">like</span> <span m="1511730">we</span> <span m="1511850">can
  say</span> <span m="1512070">this</span> <span m="1512290">is</span> <span
  m="1512440">T1.</span> <span m="1513920">I'll</span> <span
  m="1514070">tell</span> <span m="1514210">you,</span> <span
  m="1514260">oh,</span> <span m="1514450">the</span> <span
  m="1514560">probability</span> <span m="1514970">of</span> <span
  m="1515010">having</span> <span m="1515380">m</span> <span
  m="1515750">and</span> <span m="1516010">n</span> <span
  m="1517150">mRNA</span> <span m="1517530">and</span> <span
  m="1517830">protein</span> <span m="1518420">is</span> <span
  m="1518600">going</span> <span m="1518700">to</span> <span m="1518740">be
  equal to</span> <span m="1518930">something</span> <span
  m="1519200">P1.</span></p><p><span m="1522210">Now</span> <span
  m="1522330">the</span> <span m="1522410">question</span> <span
  m="1522670">is,</span> <span m="1522750">let's</span> <span
  m="1522930">say</span> <span m="1524240">I</span> <span
  m="1525010">then</span> <span m="1525350">go and</span> <span
  m="1525550">I</span> <span m="1525630">do</span> <span m="1525970">this</span>
  <span m="1526310">simulation</span> <span m="1526750">again.</span> <span
  m="1530110">Now</span> <span m="1530710">I</span> <span
  m="1530840">calculate</span> <span m="1531710">some</span> <span
  m="1532030">other</span> <span m="1532440">at</span> <span
  m="1532610">time</span> <span m="1532860">T1</span> <span
  m="1533670">again,</span> <span m="1534150">the</span> <span
  m="1534590">probability</span> <span m="1535050">that</span> <span
  m="1535140">you're</span> <span m="1535340">in</span> <span
  m="1535440">the</span> <span m="1535580">m,n</span> <span
  m="1536150">state.</span> <span m="1536420">The</span> <span
  m="1536690">question</span> <span m="1536980">is,</span> <span
  m="1537300">will</span> <span m="1537510">you</span> <span
  m="1537670">again</span> <span m="1538070">get</span> <span
  m="1538340">P1?</span> <span m="1542090">So</span> <span
  m="1542200">this</span> <span m="1542360">is</span> <span m="1542420">a</span>
  <span m="1542480">question</span> <span m="1542740">mark.</span> <span
  m="1543030">And</span> <span m="1543390">A</span> <span m="1543690">is</span>
  <span m="1544070">yes,</span> <span m="1545890">B</span> <span
  m="1546190">is</span> <span m="1546510">no.</span> <span m="1557130">All
  right.</span> <span m="1557250">I'm</span> <span m="1557370">going to</span>
  <span m="1557420">give</span> <span m="1557530">you</span> <span
  m="1558180">15</span> <span m="1558900">seconds.</span> <span
  m="1560120">I</span> <span m="1560320">think</span> <span
  m="1560590">this</span> <span m="1560840">is</span> <span
  m="1561650">very</span> <span m="1562020">important</span> <span
  m="1562650">that</span> <span m="1563020">you</span> <span
  m="1563280">understand</span> <span m="1563970">what</span> <span
  m="1564170">the</span> <span m="1564230">master</span> <span
  m="1564500">equation</span> <span m="1564930">is</span> <span
  m="1565120">doing</span> <span m="1565430">and</span> <span
  m="1565550">what</span> <span m="1565690">it</span> <span
  m="1565780">is</span> <span m="1565930">not</span> <span
  m="1566230">doing.</span></p><p><span m="1575884">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="1578850">PROFESSOR: I'm</span> <span
  m="1578960">sorry,</span> <span m="1579120">what's</span> <span
  m="1579210">that?</span> <span m="1581070">Right.</span> <span
  m="1581540">OK.</span> <span m="1581720">So</span> <span m="1581950">I</span>
  <span m="1582090">mean,</span> <span m="1582470">this</span> <span
  m="1582670">is</span> <span m="1582790">just--</span> <span
  m="1585440">you</span> <span m="1585695">know,</span> <span
  m="1585950">you</span> <span m="1586550">program</span> <span
  m="1586970">in</span> <span m="1587090">your</span> <span
  m="1587220">computer</span> <span m="1589130">to</span> <span
  m="1592820">use</span> <span m="1593100">the</span> <span
  m="1593160">master</span> <span m="1593400">equation</span> <span
  m="1593580">to</span> <span m="1593750">solve</span> <span
  m="1593920">how</span> <span m="1594030">the</span> <span
  m="1594150">probabilities</span> <span m="1594690">are</span> <span
  m="1594770">going</span> <span m="1594880">to</span> <span
  m="1595070">evolve.</span> <span m="1596150">I'm</span> <span m="1596230">just
  telling</span> <span m="1596640">you,</span> <span m="1596780">start</span>
  <span m="1597170">with</span> <span m="1597260">some</span> <span
  m="1597490">initial</span> <span m="1598330">distribution.</span> <span
  m="1598760">And if</span> <span m="1598980">you</span> <span
  m="1599400">do</span> <span m="1599520">it</span> <span
  m="1599580">once,</span> <span m="1600720">it</span> <span
  m="1600870">says,</span> <span m="1601110">oh,</span> <span
  m="1601280">the</span> <span m="1601390">probability</span> <span
  m="1601685">that you're</span> <span m="1601980">going</span> <span
  m="1602100">to</span> <span m="1602250">have</span> <span
  m="1602730">m--</span> <span m="1603150">this</span> <span
  m="1603430">time</span> <span m="1603670">you're going to</span> <span
  m="1603760">have</span> <span m="1605210">mRNA</span> <span
  m="1605730">proteins</span> <span m="1606100">is</span> <span
  m="1606250">going</span> <span m="1606360">to</span> <span
  m="1606420">be</span> <span m="1606600">P1,</span> <span m="1607130">so</span>
  <span m="1607240">it's</span> <span m="1607370">10%.</span> <span
  m="1609550">Great.</span></p><p><span m="1610460">Now</span> <span
  m="1610620">I'm</span> <span m="1610780">asking</span> <span
  m="1611020">just,</span> <span m="1611430">if</span> <span
  m="1611640">you</span> <span m="1612580">go</span> <span
  m="1612670">back</span> <span m="1612880">and</span> <span
  m="1612980">do</span> <span m="1613080">it</span> <span
  m="1613130">again,</span> <span m="1613350">will</span> <span
  m="1613470">you</span> <span m="1613590">again</span> <span
  m="1613870">get</span> <span m="1614030">10%,</span> <span
  m="1616350">or</span> <span m="1616550">is</span> <span
  m="1616630">this</span> <span m="1616770">output</span> <span
  m="1617320">stochastic?</span> <span m="1624990">It's</span> <span
  m="1625200">OK</span> <span m="1625470">that</span> <span
  m="1625600">if</span> <span m="1625880">you're</span> <span
  m="1626000">confused</span> <span m="1626430">by</span> <span
  m="1626540">this</span> <span m="1626710">distinction.</span> <span
  m="1628320">I</span> <span m="1628410">think</span> <span
  m="1628640">that</span> <span m="1628960">it's</span> <span
  m="1629090">easy</span> <span m="1629290">to</span> <span
  m="1629340">get</span> <span m="1629430">confused</span> <span
  m="1629730">by,</span> <span m="1629830">which</span> <span
  m="1629990">is</span> <span m="1630090">why</span> <span
  m="1630270">I'm</span> <span m="1630890">doing</span> <span
  m="1631000">this.</span> <span m="1631420">But</span> <span
  m="1632270">let's</span> <span m="1632620">just</span> <span
  m="1632740">see</span> <span m="1632880">where</span> <span
  m="1633000">we</span> <span m="1633110">are.</span> <span
  m="1633250">Ready?</span> <span m="1634020">3,</span> <span
  m="1634900">2,</span> <span m="1635690">1.</span></p><p>&nbsp;</p><p><span
  m="1638350">All</span> <span m="1638450">right.</span> <span
  m="1638650">So</span> <span m="1638880">I'd</span> <span
  m="1639070">say</span> <span m="1639310">a</span> <span
  m="1639390">majority</span> <span m="1640210">again.</span> <span
  m="1640880">We're</span> <span m="1641030">kind</span> <span
  m="1641280">of</span> <span m="1641360">at</span> <span m="1641480">the</span>
  <span m="1642090">80-20,</span> <span m="1642924">75-25.</span> <span
  m="1644320">A</span> <span m="1644390">majority</span> <span
  m="1644820">here</span> <span m="1645240">are</span> <span
  m="1645460">saying</span> <span m="1645840">that,</span> <span
  m="1646590">yes,</span> <span m="1646990">you</span> <span
  m="1647090">will</span> <span m="1647120">get</span> <span
  m="1647400">the</span> <span m="1647690">same</span> <span
  m="1647940">probability.</span> <span m="1650270">And</span> <span
  m="1650530">this</span> <span m="1650710">is</span> <span
  m="1651810">very</span> <span m="1652220">important</span> <span
  m="1652570">that</span> <span m="1652650">we</span> <span
  m="1652760">understand</span> <span m="1654020">kind</span> <span
  m="1654150">of</span> <span m="1654300">where</span> <span
  m="1654640">this</span> <span m="1655230">where</span> <span
  m="1656250">the</span> <span m="1656340">stochasticity</span> <span
  m="1657130">is</span> <span m="1657220">somehow</span> <span
  m="1657520">embedded</span> <span m="1657970">in</span> <span
  m="1658040">these</span> <span m="1658200">different</span> <span
  m="1658880">representations</span> <span m="1659640">of</span> <span
  m="1660180">these</span> <span m="1660320">modelings.</span></p><p><span
  m="1664500">The</span> <span m="1664610">master</span> <span
  m="1664900">equation</span> <span m="1665940">is</span> <span
  m="1666090">a</span> <span m="1666150">set</span> <span m="1666410">of</span>
  <span m="1666550">differential</span> <span m="1667030">equations</span> <span
  m="1668070">telling you</span> <span m="1668350">about</span> <span
  m="1668460">how</span> <span m="1668550">the</span> <span
  m="1668650">probabilities</span> <span m="1669560">change</span> <span
  m="1670000">over</span> <span m="1670140">time</span> <span
  m="1670720">given</span> <span m="1671080">some</span> <span
  m="1671250">initial</span> <span m="1671500">conditions.</span> <span
  m="1672800">Now</span> <span m="1673430">we're</span> <span
  m="1673580">using</span> <span m="1673960">these</span> <span
  m="1674180">things</span> <span m="1674570">to</span> <span
  m="1675140">calculate</span> <span m="1676580">the</span> <span
  m="1676910">evolution</span> <span m="1677370">of</span> <span
  m="1677450">some</span> <span m="1677660">random</span> <span
  m="1677950">process,</span> <span m="1678510">but</span> <span
  m="1678600">the</span> <span m="1678690">probabilities</span> <span
  m="1679180">themselves</span> <span m="1679720">evolve</span> <span
  m="1680210">deterministically.</span> <span m="1686090">So</span> <span
  m="1686280">what</span> <span m="1686400">that</span> <span
  m="1686530">means</span> <span m="1686780">is</span> <span
  m="1686890">that</span> <span m="1688410">although</span> <span
  m="1688660">these</span> <span m="1688840">things</span> <span
  m="1689010">are</span> <span m="1689080">probabilities,</span> <span
  m="1690730">if</span> <span m="1691530">you</span> <span
  m="1691870">start</span> <span m="1692240">somewhere</span> <span
  m="1692600">and</span> <span m="1692680">you</span> <span
  m="1692890">use</span> <span m="1693070">the master</span> <span
  m="1693290">equation to</span> <span m="1693460">solve,</span> <span
  m="1693940">you</span> <span m="1694020">get</span> <span
  m="1694150">the</span> <span m="1694210">same</span> <span
  m="1694510">thing</span> <span m="1694810">every</span> <span
  m="1694990">time</span> <span m="1695160">you</span> <span
  m="1695220">do</span> <span m="1695350">it.</span></p><p><span
  m="1696520">Now</span> <span m="1696640">this</span> <span
  m="1696800">is</span> <span m="1696910">not</span> <span
  m="1698210">true</span> <span m="1698830">for</span> <span
  m="1698950">the</span> <span m="1699060">Gillespie</span> <span
  m="1699790">simulation,</span> <span m="1700045">because</span> <span
  m="1700300">that,</span> <span m="1700620">you're</span> <span
  m="1700770">looking</span> <span m="1701000">at an</span> <span
  m="1701170">individual</span> <span m="1701700">trajectory.</span> <span
  m="1703160">An</span> <span m="1703300">individual</span> <span
  m="1703760">trajectory,</span> <span m="1705310">then</span> <span
  m="1705630">the</span> <span m="1706080">stochasticity</span> <span
  m="1706830">is</span> <span m="1707360">embedded</span> <span
  m="1707540">in</span> <span m="1707820">that</span> <span
  m="1708000">trajectory</span> <span m="1708420">itself,</span> <span
  m="1710340">whereas</span> <span m="1711020">in</span> <span
  m="1711140">the</span> <span m="1711200">master</span> <span
  m="1711510">equation,</span> <span m="1711840">the</span> <span
  m="1711910">stochasticity</span> <span m="1713340">arises</span> <span
  m="1713800">because</span> <span m="1714160">these</span> <span
  m="1714320">are</span> <span m="1714390">probabilities</span> <span
  m="1714675">that</span> <span m="1714960">are</span> <span
  m="1715040">calculating,</span> <span m="1715530">so</span> <span
  m="1715690">any</span> <span m="1716030">individual</span> <span
  m="1716470">instantiation</span> <span m="1717210">will</span> <span
  m="1717440">be</span> <span m="1718110">probabilistic</span> <span
  m="1718650">because</span> <span m="1718720">you are</span> <span
  m="1718950">sampling</span> <span m="1719490">from</span> <span
  m="1720260">those</span> <span m="1720510">different</span> <span
  m="1720730">probability</span> <span
  m="1721010">distributions.</span></p><p><span m="1724750">Now</span> <span
  m="1725520">this</span> <span m="1725720">is,</span> <span
  m="1726000">I</span> <span m="1726090">think,</span> <span
  m="1726230">a</span> <span m="1726290">sufficiently</span> <span
  m="1726710">important</span> <span m="1727090">point</span> <span
  m="1727350">that</span> <span m="1727490">if</span> <span
  m="1728530">there</span> <span m="1728850">are</span> <span
  m="1728950">questions</span> <span m="1729500">about</span> <span
  m="1729700">it,</span> <span m="1729820">we</span> <span
  m="1729920">should</span> <span m="1731390">talk</span> <span
  m="1731950">about</span> <span m="1732150">it.</span> <span
  m="1736092">Yeah.</span></p><p><span m="1736571">AUDIENCE:</span> <span
  m="1737050">How do you</span> <span m="1737529">make the</span> <span
  m="1739450">simulations?</span> <span m="1740220">Would you</span> <span
  m="1740560">essentially--</span> <span m="1741520">can you</span> <span
  m="1742000">take</span> <span m="1742480">a sum over</span> <span
  m="1742960">different</span> <span m="1743920">Gillespie?</span></p><p><span
  m="1745390">PROFESSOR: So</span> <span m="1745520">it's</span> <span
  m="1745690">true</span> <span m="1745980">that</span> <span
  m="1746090">you</span> <span m="1746490">can</span> <span m="1746870">do
  a</span> <span m="1747300">sum</span> <span m="1747510">over</span> <span
  m="1747640">different</span> <span m="1747880">Gillespie.</span> <span
  m="1749100">But</span> <span m="1750300">we</span> <span
  m="1750460">haven't</span> <span m="1750670">yet</span> <span
  m="1751100">told</span> <span m="1751350">you</span> <span
  m="1751430">about,</span> <span m="1751690">what</span> <span
  m="1751790">the</span> <span m="1751850">Gillespie</span> <span
  m="1752170">algorithm</span> <span m="1752530">is,</span> <span
  m="1752670">so</span> <span m="1753570">I</span> <span
  m="1753640">can't</span> <span m="1754080">use</span> <span
  m="1754290">that.</span> <span m="1754760">But</span> <span
  m="1755680">indeed,</span> <span m="1756790">you</span> <span
  m="1756950">can</span> <span m="1757050">just</span> <span
  m="1757260">use</span> <span m="1758170">a</span> <span
  m="1758270">standard</span> <span m="1759270">solver</span> <span
  m="1760250">of</span> <span m="1761560">differential</span> <span
  m="1762000">equations.</span> <span m="1763740">So</span> <span
  m="1763870">whatever</span> <span m="1764390">program</span> <span
  m="1764760">you</span> <span m="1764840">use</span> <span
  m="1765190">is</span> <span m="1765300">going</span> <span
  m="1765410">to</span> <span m="1765450">have</span> <span
  m="1765940">some</span> <span m="1766230">way</span> <span
  m="1766550">of</span> <span m="1766710">doing</span> <span
  m="1766940">this.</span></p><p><span m="1768630">And</span> <span
  m="1769110">once</span> <span m="1769370">you've</span> <span
  m="1769510">written</span> <span m="1769670">down</span> <span
  m="1769810">these</span> <span m="1769910">equations,</span> <span
  m="1770320">the</span> <span m="1770410">fact</span> <span
  m="1770700">that</span> <span m="1770800">these</span> <span
  m="1770870">are</span> <span m="1770910">actually</span> <span
  m="1771130">probabilities</span> <span m="1771700">doesn't</span> <span
  m="1771950">matter.</span> <span m="1772760">So</span> <span
  m="1772830">those</span> <span m="1773080">could</span> <span
  m="1773200">have</span> <span m="1773290">been</span> <span
  m="1774310">something</span> <span m="1774610">else.</span> <span
  m="1775170">So</span> <span m="1775470">this</span> <span
  m="1775680">could</span> <span m="1775800">be</span> <span
  m="1776510">the</span> <span m="1776600">number</span> <span
  m="1776860">of</span> <span m="1777210">eggs,</span> <span
  m="1778580">whatever,</span> <span m="1778880">right?</span> <span
  m="1780240">So</span> <span m="1781570">once</span> <span
  m="1782090">you've</span> <span m="1782210">gotten</span> <span
  m="1782450">the</span> <span m="1782530">equations,</span> <span
  m="1783270">then</span> <span m="1783670">equations</span> <span
  m="1784030">just</span> <span m="1784170">tell</span> <span
  m="1784360">you</span> <span m="1784410">how</span> <span
  m="1784500">the</span> <span m="1784590">problems</span> <span
  m="1784990">are</span> <span m="1785050">going</span> <span
  m="1785130">to</span> <span m="1785170">change</span> <span
  m="1785420">over</span> <span m="1785550">time.</span> <span
  m="1787176">Yeah.</span></p><p><span m="1789640">AUDIENCE: Maybe</span> <span
  m="1789820">this</span> <span m="1790050">is</span> <span m="1790430">a
  silly</span> <span m="1790883">question,</span> <span m="1791336">but</span>
  <span m="1792242">in practice,</span> <span m="1792695">do</span> <span
  m="1793150">you</span> <span m="1793610">have to</span> <span
  m="1794420">assume</span> <span m="1797065">all the probabilities</span> <span
  m="1797520">are</span> <span m="1797975">0</span> <span
  m="1798430">above</span> <span m="1798885">some</span> <span
  m="1799340">number?</span></p><p><span m="1799940">PROFESSOR: Oh no,</span>
  <span m="1800200">that's not at all</span> <span m="1800550">a silly</span>
  <span m="1800590">question,</span> <span
  m="1804190">because--</span></p><p><span m="1805510">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="1806480">PROFESSOR: Exactly.</span> <span
  m="1807060">Right.</span> <span m="1808510">And</span> <span
  m="1809360">yes,</span> <span m="1809670">it's</span> <span
  m="1810250">a</span> <span m="1810290">very</span> <span
  m="1810460">good</span> <span m="1810600">question.</span> <span
  m="1812020">So</span> <span m="1812490">I</span> <span m="1812590">told</span>
  <span m="1812780">you</span> <span m="1812820">this</span> <span
  m="1812940">is</span> <span m="1812980">an</span> <span
  m="1813100">infinite</span> <span m="1813600">set</span> <span
  m="1813930">of</span> <span m="1814130">differential</span> <span
  m="1814550">equations.</span> <span m="1815930">But</span> <span
  m="1816080">at</span> <span m="1816400">the same time</span> <span
  m="1816870">I told you</span> <span m="1817370">this</span> <span
  m="1817510">master</span> <span m="1817710">equation's</span> <span
  m="1818040">supposed</span> <span m="1818180">to be</span> <span
  m="1818250">useful</span> <span m="1818710">for</span> <span
  m="1818830">something,</span> <span m="1819330">and</span> <span
  m="1820270">kind</span> <span m="1820410">of</span> <span
  m="1820470">at</span> <span m="1820570">the</span> <span
  m="1820660">face</span> <span m="1820920">of</span> <span
  m="1820990">it,</span> <span m="1821080">these</span> <span
  m="1821270">are</span> <span m="1821410">incompatible</span> <span
  m="1822090">ideas.</span></p><p><span m="1823560">And</span> <span
  m="1824040">the</span> <span m="1824120">basic</span> <span
  m="1824420">answer</span> <span m="1824760">is</span> <span
  m="1824950">that</span> <span m="1827330">you</span> <span
  m="1827450">have</span> <span m="1827530">to</span> <span
  m="1827620">include</span> <span m="1828100">all</span> <span
  m="1828460">the</span> <span m="1828550">states</span> <span
  m="1828870">where</span> <span m="1828970">there</span> <span
  m="1829200">is</span> <span m="1829930">a</span> <span m="1831000">sort</span>
  <span m="1831210">of</span> <span m="1831670">non-negligible</span> <span
  m="1832830">probability.</span> <span m="1835990">We</span> <span
  m="1836170">could</span> <span m="1836240">be</span> <span
  m="1836320">concrete,</span> <span m="1836760">though.</span> <span
  m="1837110">So</span> <span m="1837150">let's</span> <span
  m="1837350">imagine</span> <span m="1837870">that</span> <span
  m="1839470">I</span> <span m="1839540">tell</span> <span
  m="1839760">you</span> <span m="1839930">we</span> <span
  m="1840060">want</span> <span m="1840210">to</span> <span
  m="1840270">look</span> <span m="1840430">at</span> <span
  m="1840530">the</span> <span m="1841070">mRNA</span> <span
  m="1841390">number</span> <span m="1841710">here.</span> <span
  m="1844120">And</span> <span m="1844390">I</span> <span
  m="1844450">tell</span> <span m="1844640">you</span> <span
  m="1844690">that</span> <span m="1844810">OK,</span> <span
  m="1845010">Km</span> <span m="1845680">is</span> <span
  m="1845880">equal</span> <span m="1846140">to--</span> <span
  m="1850550">well,</span> <span m="1850810">let</span> <span
  m="1850970">me</span> <span m="1851530">make</span> <span
  m="1851730">sure.</span> <span m="1852540">Gamma</span> <span
  m="1852720">m.</span> <span m="1854370">What</span> <span
  m="1854540">are</span> <span m="1854600">typical</span> <span
  m="1854840">lifetimes</span> <span m="1855260">of</span> <span
  m="1855310">mRNAs</span> <span m="1856200">in</span> <span
  m="1856470">bacteria</span> <span m="1856720">again?</span></p><p><span
  m="1858240">AUDIENCE: [INAUDIBLE]</span></p><p><span m="1859530">PROFESSOR:
  Right.</span> <span m="1860000">Order</span> <span m="1860380">a</span> <span
  m="1860430">minute.</span> <span m="1860790">So</span> <span
  m="1861550">that</span> <span m="1861880">means</span> <span
  m="1862090">that--</span> <span m="1862730">let's</span> <span
  m="1862900">say</span> <span m="1862980">this</span> <span
  m="1863200">is</span> <span m="1863410">0.5</span> <span
  m="1865190">minutes</span> <span m="1866960">minus</span> <span
  m="1867220">1.</span> <span m="1869790">To get</span> <span
  m="1870010">a</span> <span m="1870100">lifetime</span> <span
  m="1870530">of</span> <span m="1872220">around 2 minutes.</span> <span
  m="1875180">And</span> <span m="1875290">then</span> <span
  m="1875450">let's</span> <span m="1875880">imagine</span> <span
  m="1876340">that</span> <span m="1876450">this</span> <span
  m="1876680">is</span> <span m="1876860">then</span> <span
  m="1878020">50</span> <span m="1879270">per</span> <span
  m="1879430">minute.</span> <span m="1882920">So</span> <span
  m="1883100">an</span> <span m="1883200">mRNA</span> <span
  m="1883630">is</span> <span m="1884000">kind</span> <span
  m="1884120">of</span> <span m="1884180">made</span> <span
  m="1885130">once</span> <span m="1885370">a</span> <span
  m="1885520">minute.</span> <span m="1886870">There's</span> <span
  m="1887020">50</span> <span m="1887320">of</span> <span
  m="1887380">them.</span> <span m="1888000">That's</span> <span
  m="1888140">a</span> <span m="1888190">lot,</span> <span
  m="1888600">but</span> <span m="1889320">whatever.</span> <span
  m="1890020">There are a</span> <span m="1890240">few genes.</span> <span
  m="1890520">Minute.</span> <span m="1891850">I</span> <span
  m="1891950">wanted</span> <span m="1892260">the</span> <span
  m="1892390">number</span> <span m="1892760">to</span> <span
  m="1892820">be</span> <span m="1892920">something.</span></p><p><span
  m="1893520">So</span> <span m="1893870">there's</span> <span
  m="1894110">a</span> <span m="1894340">fair</span> <span
  m="1894630">rate</span> <span m="1894830">of</span> <span
  m="1894890">mRNA</span> <span m="1895440">production.</span> <span
  m="1897620">Now</span> <span m="1898930">how</span> <span
  m="1899170">many</span> <span m="1899440">equations</span> <span
  m="1900630">do</span> <span m="1900700">you</span> <span
  m="1900770">think</span> <span m="1900970">you</span> <span
  m="1901120">might</span> <span m="1901580">need</span> <span
  m="1901950">to</span> <span m="1902718">simulate?</span> <span
  m="1904590">So</span> <span m="1904710">we'll</span> <span
  m="1904890">think</span> <span m="1905090">about</span> <span
  m="1905320">this.</span> <span m="1906280">First</span> <span
  m="1906470">of</span> <span m="1906530">all,</span> <span
  m="1906900">does</span> <span m="1907050">it</span> <span
  m="1907140">depend</span> <span m="1907420">upon</span> <span
  m="1907620">the</span> <span m="1907680">initial</span> <span
  m="1907930">conditions</span> <span m="1908330">or</span> <span
  m="1908380">not?</span></p><p><span m="1911295">AUDIENCE:
  Maybe.</span></p><p><span m="1913170">PROFESSOR: Yeah.</span> <span
  m="1914200">It</span> <span m="1914590">does.</span> <span
  m="1916710">So</span> <span m="1916930">be</span> <span
  m="1917080">careful.</span> <span m="1919540">But</span> <span
  m="1919650">let's</span> <span m="1919910">say</span> <span
  m="1920040">that</span> <span m="1920150">I</span> <span
  m="1920240">tell</span> <span m="1920560">you</span> <span
  m="1920750">that</span> <span m="1920870">we</span> <span
  m="1920990">start</span> <span m="1923570">with</span> <span
  m="1924730">50</span> <span m="1925520">mRNA.</span> <span m="1926930">The
  question</span> <span m="1927170">is,</span> <span m="1927300">how</span>
  <span m="1927630">many</span> <span m="1928010">equations</span> <span
  m="1928680">do</span> <span m="1928760">you</span> <span
  m="1928820">think</span> <span m="1929010">you</span> <span
  m="1929110">might</span> <span m="1929650">have</span> <span
  m="1929810">to</span> <span m="1929880">write</span> <span
  m="1930020">down?</span> <span m="1930370">And let's</span> <span
  m="1930550">say</span> <span m="1930610">we</span> <span
  m="1931120">want</span> <span m="1931260">to</span> <span
  m="1931300">understand</span> <span m="1931680">this</span> <span
  m="1932940">once</span> <span m="1933150">it</span> <span
  m="1933240">gets</span> <span m="1933380">to,</span> <span
  m="1933580">say,</span> <span m="1933720">the</span> <span
  m="1933840">equilibrium.</span></p><p><span m="1937340">All</span> <span
  m="1937520">right.</span> <span m="1937820">Number</span> <span
  m="1938140">of</span> <span m="1938210">equations.</span> <span
  m="1942090">Give</span> <span m="1942620">me</span> <span m="1942720">a</span>
  <span m="1942770">moment</span> <span m="1943200">to</span> <span
  m="1943790">come</span> <span m="1944000">up</span> <span
  m="1944150">with</span> <span m="1944260">some</span> <span
  m="1944420">reasonable</span> <span m="1944790">options.</span> <span
  m="1965430">Well,</span> <span m="1965660">these</span> <span
  m="1965890">are--</span> <span m="1976480">let's</span> <span
  m="1976670">say</span> <span m="1976810">that</span> <span
  m="1977610">this</span> <span m="1977790">could</span> <span
  m="1977910">show</span> <span m="1978090">up</span> <span
  m="1978240">on</span> <span m="1978340">your</span> <span
  m="1978420">homework.</span> <span m="1979230">So</span> <span
  m="1979340">the</span> <span m="1979400">question</span> <span
  m="1979750">is,</span> <span m="1979860">how</span> <span
  m="1979980">many</span> <span m="1980110">equations</span> <span
  m="1980490">are</span> <span m="1980540">you</span> <span
  m="1980620">going</span> <span m="1980680">to</span> <span
  m="1980740">program</span> <span m="1981170">into</span> <span
  m="1981450">your</span> <span m="1982190">intersimulation?</span> <span
  m="1985170">And</span> <span m="1985330">it</span> <span
  m="1985400">may</span> <span m="1985580">be--</span> <span m="1986150">doesn't
  have</span> <span m="1986290">to be</span> <span m="1986470">exactly</span>
  <span m="1987060">any</span> <span m="1987130">of</span> <span
  m="1987230">these</span> <span m="1987370">number,</span> <span
  m="1987810">but</span> <span m="1988810">order.</span> <span m="1994250">Do
  you</span> <span m="1994350">guys</span> <span m="1994490">understand</span>
  <span m="1994790">the</span> <span m="1994850">question?</span></p><p><span
  m="1999830">So</span> <span m="1999950">we</span> <span
  m="2000050">need</span> <span m="2000210">a</span> <span
  m="2000260">different</span> <span m="2000790">equation</span> <span
  m="2001470">for</span> <span m="2001690">each</span> <span
  m="2003140">of</span> <span m="2003180">these</span> <span
  m="2003310">probabilities.</span> <span m="2004000">So</span> <span
  m="2004080">in</span> <span m="2004160">principle</span> <span
  m="2005270">we</span> <span m="2005410">have--</span> <span
  m="2006800">the</span> <span m="2007210">master</span> <span
  m="2007570">equation</span> <span m="2007940">gives</span> <span
  m="2008120">us</span> <span m="2008220">an</span> <span
  m="2008390">infinite</span> <span m="2008710">number</span> <span
  m="2009820">of</span> <span m="2009930">equations.</span> <span
  m="2010910">So</span> <span m="2010940">we</span> <span
  m="2011040">have</span> <span m="2011380">d</span> <span
  m="2012110">the</span> <span m="2012190">probability</span> <span
  m="2012830">of</span> <span m="2012930">having</span> <span
  m="2013270">0</span> <span m="2013730">mRNA</span> <span
  m="2014300">with</span> <span m="2014380">respect</span> <span
  m="2014760">to</span> <span m="2014800">time.</span> <span
  m="2017170">That's</span> <span m="2017460">going</span> <span
  m="2017580">to</span> <span m="2017640">be--</span> <span
  m="2021470">any</span> <span m="2021650">idea</span> <span
  m="2021860">what</span> <span m="2021950">this</span> <span
  m="2022100">is</span> <span m="2022140">going</span> <span
  m="2022240">to</span> <span m="2022290">be?</span></p><p><span
  m="2026806">AUDIENCE: [INAUDIBLE]</span></p><p><span m="2028740">PROFESSOR:
  Right.</span> <span m="2029010">So</span> <span m="2029110">we</span> <span
  m="2029210">have</span> <span m="2029310">a</span> <span
  m="2029410">minus</span> <span m="2030000">Km</span> <span
  m="2031930">times</span> <span m="2032280">what?</span> <span
  m="2037840">Times</span> <span m="2038110">p0,</span> <span
  m="2039240">right.</span> <span m="2039980">So</span> <span
  m="2040130">this</span> <span m="2040300">is</span> <span
  m="2040420">because</span> <span m="2040820">if</span> <span
  m="2040910">we</span> <span m="2041000">start</span> <span
  m="2041270">out</span> <span m="2041710">down</span> <span
  m="2041880">here</span> <span m="2042240">at</span> <span
  m="2042350">P0.</span> <span m="2043710">Now</span> <span
  m="2043860">we</span> <span m="2043940">have</span> <span
  m="2045470">Km.</span> <span m="2047730">So</span> <span m="2047820">I</span>
  <span m="2048110">was</span> <span m="2048219">just</span> <span
  m="2048389">about</span> <span m="2048489">to</span> <span
  m="2048570">violate</span> <span m="2048909">my</span> <span m="2049020">rule
  and</span> <span m="2049350">just</span> <span m="2049520">write</span> <span
  m="2049710">down</span> <span m="2050520">an</span> <span
  m="2050639">equation</span> <span m="2051159">without</span> <span
  m="2051699">drawing</span> <span m="2051989">this</span> <span
  m="2052060">thing.</span> <span m="2054730">So</span> <span
  m="2054820">it's</span> <span m="2055260">Km</span> <span
  m="2055790">times</span> <span m="2056010">p0.</span> <span
  m="2056540">That's</span> <span m="2056710">a way</span> <span
  m="2056840">you</span> <span m="2057040">lose</span> <span
  m="2057230">probability,</span> <span m="2057500">but you can</span> <span
  m="2057820">also</span> <span m="2057909">gain</span> <span
  m="2058199">probability</span> <span m="2060100">at</span> <span
  m="2060239">a</span> <span m="2060280">rate</span> <span
  m="2060520">that</span> <span m="2060800">goes</span> <span
  m="2061010">as</span> <span m="2061210">gamma</span> <span
  m="2061929">m</span> <span m="2063040">times</span> <span
  m="2065844">P1.</span></p><p><span m="2071630">So</span> <span
  m="2071710">that's</span> <span m="2072360">how</span> <span
  m="2073170">this</span> <span m="2073719">probability</span> <span
  m="2074159">is</span> <span m="2074250">going to change</span> <span
  m="2074670">over time.</span> <span m="2075340">But</span> <span
  m="2075429">we</span> <span m="2075510">have</span> <span m="2075580">a</span>
  <span m="2075630">different</span> <span m="2075889">equation for you</span>
  <span m="2076389">for</span> <span m="2076540">p1,</span> <span
  m="2077100">for</span> <span m="2077380">p2,</span> <span
  m="2077800">for</span> <span m="2078110">p3,</span> <span
  m="2078730">for</span> <span m="2078984">p4,</span> <span
  m="2079239">all</span> <span m="2079520">the</span> <span
  m="2079590">way,</span> <span m="2079699">in</span> <span
  m="2079780">principle,</span> <span m="2080210">to</span> <span
  m="2080389">p1,683,000,</span> <span m="2084060">bla</span> <span
  m="2084300">bla bla,</span> <span m="2084780">right?</span> <span
  m="2085949">So</span> <span m="2086070">that's</span> <span
  m="2087010">problematic,</span> <span m="2087580">because</span> <span
  m="2087960">if</span> <span m="2088030">we</span> <span
  m="2088150">have</span> <span m="2088300">to</span> <span
  m="2088380">actually</span> <span m="2088650">in</span> <span
  m="2088750">our</span> <span m="2088989">program</span> <span
  m="2089929">code</span> <span m="2090260">up</span> <span
  m="2091719">100,000,000</span> <span m="2092320">equations,</span> <span
  m="2092860">or</span> <span m="2093120">it could</span> <span
  m="2093380">be</span> <span m="2093510">worse.</span> <span
  m="2095190">Then</span> <span m="2096290">we're</span> <span
  m="2096550">going</span> <span m="2096630">have</span> <span
  m="2096719">trouble</span> <span m="2097430">with</span> <span
  m="2098020">our</span> <span m="2098100">computers.</span> <span
  m="2099580">So</span> <span m="2099760">you</span> <span
  m="2099890">always</span> <span m="2100080">have</span> <span
  m="2100200">to</span> <span m="2100540">have</span> <span
  m="2100700">some</span> <span m="2101000">notion</span> <span
  m="2101400">of</span> <span m="2103260">what</span> <span
  m="2103410">you</span> <span m="2103470">should</span> <span
  m="2103580">be</span> <span m="2103640">doing.</span></p><p><span
  m="2103790">And</span> <span m="2103950">this</span> <span
  m="2104160">also</span> <span m="2104540">highlights</span> <span
  m="2105060">that</span> <span m="2106020">it's</span> <span
  m="2106820">really</span> <span m="2107070">important</span> <span
  m="2107480">to</span> <span m="2107580">have</span> <span
  m="2107680">some</span> <span m="2108170">intuitive</span> <span
  m="2108680">notion</span> <span m="2109470">of</span> <span
  m="2109620">what's</span> <span m="2109820">going</span> <span
  m="2110060">on</span> <span m="2110360">in</span> <span
  m="2110460">your</span> <span m="2110490">system</span> <span
  m="2111290">before</span> <span m="2111830">you</span> <span
  m="2111950">go</span> <span m="2112190">and</span> <span
  m="2112290">you</span> <span m="2112360">start</span> <span
  m="2112670">programming,</span> <span m="2113230">because</span> <span
  m="2115130">in</span> <span m="2115280">that</span> <span
  m="2115430">case--</span> <span m="2116380">well,</span> <span
  m="2116650">you're</span> <span m="2116860">likely</span> <span
  m="2117170">to</span> <span m="2117270">write down</span> <span
  m="2117510">something</span> <span m="2117810">that's wrong.</span> <span
  m="2118340">You</span> <span m="2118460">won't</span> <span
  m="2118610">know</span> <span m="2118870">if</span> <span
  m="2118950">you</span> <span m="2119050">have</span> <span
  m="2119170">the</span> <span m="2119230">right</span> <span
  m="2119410">answer,</span> <span m="2119880">and</span> <span
  m="2119960">you</span> <span m="2120040">might</span> <span
  m="2122140">do</span> <span m="2122290">something</span> <span
  m="2122520">that</span> <span m="2122580">doesn't</span> <span
  m="2122760">make</span> <span m="2122880">any</span> <span
  m="2122980">sense.</span> <span m="2123580">So</span> <span
  m="2124630">you</span> <span m="2124730">have</span> <span
  m="2124850">to</span> <span m="2124890">have</span> <span
  m="2124970">some</span> <span m="2125260">notion</span> <span
  m="2125610">of</span> <span m="2125730">what</span> <span
  m="2126100">the</span> <span m="2126180">system</span> <span
  m="2126490">should</span> <span m="2126640">look</span> <span
  m="2126810">like</span> <span m="2127030">before</span> <span
  m="2127300">you</span> <span m="2127380">even</span> <span
  m="2127560">start</span> <span m="2128800">coding</span> <span
  m="2129030">it.</span> <span m="2133880">My</span> <span m="2134240">question
  is,</span> <span m="2135230">how</span> <span m="2135380">many</span> <span
  m="2135520">of</span> <span m="2135560">these</span> <span
  m="2135670">equations</span> <span m="2136300">should</span> <span
  m="2136590">we</span> <span m="2137550">simulate?</span></p><p><span
  m="2150590">OK.</span> <span m="2152070">Let's</span> <span
  m="2152300">just</span> <span m="2152400">see</span> <span
  m="2152530">where</span> <span m="2152660">we</span> <span
  m="2152760">are.</span> <span m="2153160">Ready.</span> <span
  m="2153620">3,</span> <span m="2154680">2,</span> <span m="2155210">1.</span>
  <span m="2158570">OK.</span> <span m="2158800">So</span> <span
  m="2159020">I'd</span> <span m="2159110">say that</span> <span
  m="2159350">we</span> <span m="2159450">have,</span> <span
  m="2161720">it's</span> <span m="2161890">basically</span> <span
  m="2162190">between</span> <span m="2162430">C</span> <span
  m="2162730">and</span> <span m="2162910">D.</span> <span
  m="2163540">Yeah.</span> <span m="2165590">I</span> <span
  m="2165790">would</span> <span m="2165930">say</span> <span
  m="2167590">some</span> <span m="2167750">people</span> <span
  m="2167940">are</span> <span m="2168050">maybe</span> <span
  m="2168260">more</span> <span m="2168440">careful</span> <span
  m="2168920">than</span> <span m="2169020">I</span> <span
  m="2169160">am.</span> <span m="2169770">Can</span> <span
  m="2170930">one</span> <span m="2171070">of</span> <span
  m="2171120">the</span> <span m="2171250">Ds</span> <span
  m="2172580">maybe</span> <span m="2172860">defend</span> <span
  m="2173970">why</span> <span m="2174370">they're</span> <span
  m="2174490">saying</span> <span m="2174690">D?</span></p><p><span
  m="2180585">AUDIENCE: [INAUDIBLE]</span></p><p><span m="2186300">PROFESSOR:
  The</span> <span m="2186380">mean</span> <span m="2186870">is</span> <span
  m="2186980">100,</span> <span m="2187330">and</span> <span
  m="2187420">when</span> <span m="2187520">you</span> <span
  m="2187600">say--</span> <span m="2188140">I</span> <span
  m="2188230">mean,</span> <span m="2188370">I</span> <span
  m="2188960">think</span> <span m="2189150">that</span> <span
  m="2189340">whatever</span> <span m="2189580">you're</span> <span
  m="2189680">thinking</span> <span m="2189920">is</span> <span
  m="2190040">correct,</span> <span m="2190330">but</span> <span
  m="2190460">I</span> <span m="2190600">think</span> <span
  m="2190900">that</span> <span m="2191210">the</span> <span
  m="2191430">words</span> <span m="2191740">are</span> <span
  m="2191800">a</span> <span m="2191860">little</span> <span
  m="2192040">dangerous.</span> <span m="2192780">And</span> <span
  m="2192870">why</span> <span m="2193060">am</span> <span m="2193160">I</span>
  <span m="2193230">concerned</span> <span m="2193630">about--</span> <span
  m="2194940">you</span> <span m="2195140">said--</span> <span
  m="2200280">is</span> <span m="2200620">the</span> <span
  m="2200720">mean</span> <span m="2201230">100</span> <span
  m="2201660">for</span> <span m="2201780">all</span> <span
  m="2201950">time?</span></p><p><span m="2204975">AUDIENCE: [INAUDIBLE]</span>
  <span m="2205448">and</span> <span m="2205921">steady</span> <span
  m="2206394">state.</span></p><p><span m="2207820">PROFESSOR:</span> <span
  m="2207940">And</span> <span m="2208150">steady state.</span> <span
  m="2208430">Right.</span> <span m="2208710">I</span> <span
  m="2208920">think</span> <span m="2209060">that</span> <span m="2209340">was
  the--</span> <span m="2211640">for</span> <span m="2211800">long</span> <span
  m="2212150">times,</span> <span m="2212620">the</span> <span
  m="2213320">mean</span> <span m="2213710">number</span> <span
  m="2214010">of</span> <span m="2214050">mRNA</span> <span
  m="2214430">will,</span> <span m="2214670">indeed,</span> <span
  m="2214920">be</span> <span m="2215030">100.</span> <span
  m="2216170">So</span> <span m="2216330">the</span> <span
  m="2216610">mean</span> <span m="2217240">number</span> <span
  m="2217480">of</span> <span m="2217570">m,</span> <span m="2218530">in</span>
  <span m="2218630">this</span> <span m="2218790">case,</span> <span
  m="2219160">will</span> <span m="2219330">be</span> <span
  m="2219670">Km</span> <span m="2220830">divided</span> <span
  m="2221150">by</span> <span m="2221240">gamma</span> <span
  m="2221580">m,</span> <span m="2222830">which</span> <span
  m="2223010">is</span> <span m="2223120">going</span> <span
  m="2223290">to</span> <span m="2223330">be</span> <span
  m="2223430">equal</span> <span m="2223610">to</span> <span
  m="2223680">50</span> <span m="2224010">divided</span> <span
  m="2224350">by</span> <span m="2224500">that.</span> <span
  m="2224980">That</span> <span m="2225160">gets</span> <span
  m="2225350">us</span> <span m="2225430">100.</span> <span
  m="2229560">Now</span> <span m="2229760">will it</span> <span
  m="2229950">be</span> <span m="2230040">exactly</span> <span
  m="2230450">100?</span> <span m="2232310">No.</span> <span
  m="2232550">It's</span> <span m="2232640">going</span> <span m="2232780">to
  be</span> <span m="2232820">100</span> <span m="2233150">plus</span> <span
  m="2233350">or</span> <span m="2233390">minus</span> <span
  m="2233620">what?</span> <span m="2236570">Plus or</span> <span
  m="2236910">minus</span> <span m="2237090">10.</span> <span
  m="2237890">Right.</span> <span m="2238490">Because</span> <span
  m="2238750">this</span> <span m="2238970">distribution</span> <span
  m="2239640">at</span> <span m="2239900">steady</span> <span
  m="2240150">state</span> <span m="2240570">is</span> <span
  m="2240720">what?</span></p><p><span m="2241462">AUDIENCE: It's
  Poisson.</span></p><p><span m="2242610">PROFESSOR: It's</span> <span
  m="2242870">Poisson.</span> <span m="2243700">What's</span> <span
  m="2243920">the</span> <span m="2245140">variance</span> <span
  m="2245650">of</span> <span m="2245730">a</span> <span
  m="2245790">Poisson</span> <span m="2246150">distribution?</span> <span
  m="2248360">It's</span> <span m="2248470">equal</span> <span
  m="2248720">to</span> <span m="2248850">the mean.</span> <span
  m="2249360">So</span> <span m="2249510">for</span> <span
  m="2249640">Poisson,</span> <span m="2252870">the</span> <span
  m="2252940">variance</span> <span m="2253460">is</span> <span
  m="2253630">equal</span> <span m="2253910">to</span> <span m="2253990">the
  mean.</span> <span m="2257380">Variance</span> <span m="2258510">is</span>
  <span m="2258650">the</span> <span m="2258730">square</span> <span
  m="2259060">of</span> <span m="2259160">the</span> <span
  m="2259260">standard</span> <span m="2259380">deviation,</span> <span
  m="2260430">which</span> <span m="2260490">means</span> <span
  m="2260740">that</span> <span m="2260940">this</span> <span
  m="2261110">is</span> <span m="2261180">going</span> <span
  m="2261260">to</span> <span m="2261300">be</span> <span
  m="2261450">plus</span> <span m="2261740">or</span> <span
  m="2261810">minus</span> <span m="2262260">10.</span> <span
  m="2265800">That's</span> <span m="2265880">kind</span> <span
  m="2266020">of</span> <span m="2266150">the</span> <span
  m="2266250">typical</span> <span m="2266560">width</span> <span
  m="2266840">of</span> <span m="2266910">the</span> <span
  m="2266980">distribution.</span> <span m="2268180">So</span> <span
  m="2268540">what</span> <span m="2268780">it</span> <span m="2268910">means
  is</span> <span m="2269200">that</span> <span m="2269420">at</span> <span
  m="2269540">equilibrium,</span> <span m="2271350">we're</span> <span
  m="2271440">going</span> <span m="2271520">to</span> <span m="2271560">be
  at</span> <span m="2271630">100</span> <span m="2273900">and</span> <span
  m="2274030">it's</span> <span m="2274160">going</span> <span
  m="2274260">to</span> <span m="2274340">kind</span> <span
  m="2274480">of</span> <span m="2274590">look</span> <span
  m="2274780">like</span> <span m="2274970">this.</span> <span
  m="2277380">So</span> <span m="2277430">this</span> <span m="2282460">might
  be</span> <span m="2282560">2</span> <span m="2282940">sigma,</span> <span
  m="2283400">so</span> <span m="2283530">this</span> <span
  m="2283700">could</span> <span m="2283820">be</span> <span
  m="2283910">20.</span> <span m="2284270">But</span> <span
  m="2285050">each</span> <span m="2285210">of</span> <span m="2285250">these
  is</span> <span m="2285490">10.</span></p><p><span m="2289290">So</span> <span
  m="2289500">if</span> <span m="2289660">you</span> <span
  m="2289770">want</span> <span m="2289910">to</span> <span
  m="2289970">capture</span> <span m="2290280">this,</span> <span
  m="2290610">you</span> <span m="2290990">might</span> <span
  m="2291150">want</span> <span m="2291280">to</span> <span
  m="2291320">go</span> <span m="2291470">out</span> <span m="2291630">to</span>
  <span m="2291730">a</span> <span m="2291780">few</span> <span
  m="2292120">sigma.</span> <span m="2295950">So</span> <span
  m="2296030">let's</span> <span m="2296130">say</span> <span
  m="2296210">you</span> <span m="2296290">want</span> <span
  m="2296400">to</span> <span m="2296440">go out</span> <span
  m="2296540">to</span> <span m="2296640">3</span> <span
  m="2296900">sigma,</span> <span m="2297830">then</span> <span
  m="2297860">you</span> <span m="2297930">might</span> <span
  m="2298080">want</span> <span m="2298180">to</span> <span
  m="2298220">get</span> <span m="2298340">out</span> <span
  m="2298500">to</span> <span m="2298620">130</span> <span
  m="2298970">maybe.</span> <span m="2301930">So</span> <span
  m="2302060">then,</span> <span m="2302790">if</span> <span
  m="2303020">you</span> <span m="2303040">want</span> <span
  m="2303180">to</span> <span m="2303220">be</span> <span
  m="2303300">more</span> <span m="2303460">careful</span> <span m="2303750">you
  go out to</span> <span m="2303900">140</span> <span m="2304580">or</span>
  <span m="2304700">150.</span> <span m="2305510">But</span> <span
  m="2305630">this</span> <span m="2305750">thing</span> <span
  m="2305890">is</span> <span m="2306000">going</span> <span
  m="2306100">to</span> <span m="2306170">decay</span> <span
  m="2306430">exponentially,</span> <span m="2307510">so</span> <span
  m="2307590">you</span> <span m="2307700">don't</span> <span
  m="2307890">need</span> <span m="2308010">to</span> <span
  m="2308050">go</span> <span m="2308150">up</span> <span m="2308260">TO</span>
  <span m="2308340">1,000,</span> <span m="2310920">because</span> <span
  m="2311160">the</span> <span m="2311260">probability's</span> <span
  m="2311760">going</span> <span m="2311850">to</span> <span
  m="2311890">be</span> <span m="2311970">0</span> <span m="2312330">0</span>
  <span m="2312590">0.</span> <span m="2313840">Certain</span> <span
  m="2314150">once</span> <span m="2314400">you're at</span> <span
  m="2314490">200</span> <span m="2315530">you</span> <span
  m="2315630">don't</span> <span m="2315850">have</span> <span
  m="2315920">to</span> <span m="2316010">worry</span> <span
  m="2316120">about</span> <span m="2316570">it.</span></p><p><span
  m="2316690">But</span> <span m="2316770">of</span> <span
  m="2316840">course,</span> <span m="2317460">you have to</span> <span
  m="2317510">remember</span> <span m="2317690">the</span> <span
  m="2317760">initial</span> <span m="2317980">condition</span> <span
  m="2318290">we</span> <span m="2318380">started</span> <span
  m="2318720">at</span> <span m="2318780">50.</span> <span m="2322930">So</span>
  <span m="2323070">we</span> <span m="2323140">started</span> <span
  m="2323650">at</span> <span m="2323800">this</span> <span
  m="2323950">point,</span> <span m="2325000">which</span> <span
  m="2325090">means we</span> <span m="2325190">definitely</span> <span
  m="2325580">have</span> <span m="2325710">to</span> <span
  m="2325790">include</span> <span m="2326070">that</span> <span
  m="2326220">equation.</span> <span m="2326660">Otherwise</span> <span
  m="2326870">we're</span> <span m="2327030">in</span> <span
  m="2327100">trouble.</span> <span m="2328990">Now</span> <span
  m="2329530">how</span> <span m="2329790">much</span> <span
  m="2330140">do</span> <span m="2330230">we</span> <span
  m="2330350">have</span> <span m="2330490">to</span> <span
  m="2330570">go</span> <span m="2331400">to</span> <span
  m="2332400">below</span> <span m="2332870">50</span> <span
  m="2334710">Any--</span></p><p><span m="2344132">AUDIENCE: My</span> <span
  m="2344631">guess</span> <span m="2345130">would be</span> <span
  m="2345629">that it</span> <span m="2346128">would be</span> <span
  m="2346630">not</span> <span m="2346860">much</span> <span
  m="2347090">more</span> <span m="2347564">than the</span> <span m="2348038">[?
  few ?]</span> <span m="2348512">times</span> <span m="2348986">5,</span> <span
  m="2350408">because</span> <span m="2350882">if it</span> <span
  m="2351356">were</span> <span m="2351830">already at</span> <span
  m="2352310">equilibrium</span> <span m="2352550">that would</span> <span
  m="2353007">be the mean.</span> <span m="2353464">But it's not,</span> <span
  m="2353921">and so</span> <span m="2354378">the driving force</span> <span
  m="2354835">is</span> <span m="2355292">still</span> <span m="2355749">going
  to push it</span> <span m="2356206">back</span> <span m="2356663">to</span>
  <span m="2357120">[INAUDIBLE].</span></p><p><span m="2357580">PROFESSOR:
  That's</span> <span m="2357760">right.</span> <span m="2358140">So</span>
  <span m="2359050">it's</span> <span m="2359210">going</span> <span
  m="2359290">to</span> <span m="2359330">be</span> <span m="2359400">a</span>
  <span m="2359460">bias</span> <span m="2359950">random</span> <span
  m="2360190">walk</span> <span m="2360470">here,</span> <span
  m="2361150">where</span> <span m="2361390">it's</span> <span
  m="2361600">going</span> <span m="2361700">to</span> <span
  m="2361770">be</span> <span m="2361970">sort</span> <span
  m="2362140">of</span> <span m="2362210">maybe</span> <span
  m="2362460">twice</span> <span m="2362830">as</span> <span
  m="2362930">likely</span> <span m="2363240">at</span> <span
  m="2363300">each</span> <span m="2363450">step</span> <span
  m="2363870">to</span> <span m="2363990">be</span> <span
  m="2364130">moving</span> <span m="2364380">right</span> <span m="2364760">as
  to be</span> <span m="2364930">moving</span> <span m="2365180">left.</span>
  <span m="2366060">That</span> <span m="2366150">means</span> <span
  m="2366270">it</span> <span m="2366340">could</span> <span
  m="2366450">very</span> <span m="2366640">well</span> <span
  m="2366860">go</span> <span m="2366940">to</span> <span m="2367010">49,</span>
  <span m="2367430">48.</span> <span m="2367850">But</span> <span
  m="2368160">it's</span> <span m="2368370">not</span> <span
  m="2368630">really</span> <span m="2368870">going</span> <span
  m="2368950">to</span> <span m="2368990">go</span> <span
  m="2369140">below</span> <span m="2369330">40,</span> <span
  m="2369800">say.</span> <span m="2370940">Of</span> <span
  m="2371040">course</span> <span m="2371100">you have to</span> <span
  m="2371290">quantify</span> <span m="2371650">these</span> <span
  m="2371800">things</span> <span m="2372040">if you</span> <span
  m="2372130">want</span> <span m="2372210">to</span> <span
  m="2372250">be</span> <span m="2372340">careful.</span> <span
  m="2373090">But</span> <span m="2373600">certainly</span> <span
  m="2373990">I</span> <span m="2374030">would</span> <span
  m="2374120">say</span> <span m="2374230">going</span> <span
  m="2374460">from,</span> <span m="2375980">I</span> <span
  m="2376110">don't</span> <span m="2376200">know,</span> <span
  m="2376330">35</span> <span m="2376980">to</span> <span m="2377080">135</span>
  <span m="2378540">would</span> <span m="2378730">be</span> <span
  m="2379270">fine</span> <span m="2379640">with</span> <span
  m="2379770">me.</span> <span m="2380180">You</span> <span m="2380340">would
  get</span> <span m="2380540">full</span> <span m="2380750">credit</span> <span
  m="2381120">on</span> <span m="2381240">your</span> <span
  m="2381340">problem</span> <span m="2381580">set.</span></p><p><span
  m="2383510">So</span> <span m="2383660">we'll</span> <span
  m="2383850">say--</span> <span m="2384840">I'm going to</span> <span
  m="2384910">make</span> <span m="2385100">this</span> <span
  m="2385260">up--</span> <span m="2386830">from</span> <span
  m="2387030">35</span> <span m="2387900">to</span> <span
  m="2388060">135,</span> <span m="2389350">134</span> <span m="2390090">just so
  it could be</span> <span m="2390445">100</span> <span
  m="2390800">equations.</span> <span m="2391900">So</span> <span
  m="2392030">I'd</span> <span m="2392230">say</span> <span
  m="2392340">I'd</span> <span m="2392480">be fine</span> <span
  m="2392860">with</span> <span m="2393331">100</span> <span
  m="2393802">equations.</span> <span m="2397100">So</span> <span
  m="2397230">you</span> <span m="2397370">would</span> <span
  m="2397500">simulate</span> <span m="2398100">the</span> <span
  m="2398200">change</span> <span m="2398610">in</span> <span
  m="2398660">the</span> <span m="2398740">probabilities</span> <span
  m="2399410">of</span> <span m="2400090">P35</span> <span m="2400730">to</span>
  <span m="2401100">P134,</span> <span m="2402480">for</span> <span
  m="2402640">example.</span> <span m="2406050">So</span> <span
  m="2406310">although</span> <span m="2406550">in</span> <span
  m="2406660">principle,</span> <span m="2407220">the</span> <span
  m="2407320">master</span> <span m="2407480">equation</span> <span
  m="2407810">specifies</span> <span m="2408790">how</span> <span
  m="2408960">the</span> <span m="2409050">probabilities</span> <span
  m="2409480">for</span> <span m="2409910">an</span> <span
  m="2410040">infinite</span> <span m="2410400">number</span> <span
  m="2410870">of</span> <span m="2411000">equations are</span> <span
  m="2411450">going</span> <span m="2411530">to</span> <span
  m="2411570">change,</span> <span m="2412540">you</span> <span
  m="2412740">only</span> <span m="2412940">need</span> <span
  m="2413110">to</span> <span m="2413220">simulate</span> <span
  m="2413650">a</span> <span m="2413760">finite</span> <span
  m="2414110">number</span> <span m="2414350">of</span> <span
  m="2414420">them</span> <span m="2414560">depending</span> <span
  m="2414990">upon</span> <span m="2415750">the</span> <span
  m="2415890">dynamics</span> <span m="2416300">of your</span> <span
  m="2416410">system.</span> <span m="2419250">Yes.</span> <span
  m="2420100">Thank</span> <span m="2420300">you</span> <span
  m="2420380">for</span> <span m="2420470">the</span> <span
  m="2420590">question,</span> <span m="2420950">because it's</span> <span
  m="2421340">a</span> <span m="2422080">very</span> <span
  m="2422200">important</span> <span m="2422550">practical</span> <span
  m="2422900">thing.</span></p><p><span m="2423457">AUDIENCE: So in
  practice,</span> <span m="2426720">you</span> <span m="2427010">don't
  know</span> <span m="2427680">what the</span> <span m="2428160">solution
  is,</span> <span m="2429072">which</span> <span m="2429530">is</span> <span
  m="2429850">sort of</span> <span m="2430080">why</span> <span m="2430300">you
  would</span> <span m="2430778">[INAUDIBLE].</span> <span m="2431256">Do
  you</span> <span m="2432212">explain</span> <span m="2432690">your
  range</span> <span m="2433168">and</span> <span m="2433646">see</span> <span
  m="2434124">if</span> <span m="2434602">the solution
  changes?</span></p><p><span m="2435210">PROFESSOR: So</span> <span
  m="2435260">the</span> <span m="2435320">question</span> <span
  m="2435640">is,</span> <span m="2436480">in</span> <span
  m="2436580">this</span> <span m="2436740">case,</span> <span
  m="2437350">it's</span> <span m="2437470">a</span> <span
  m="2437520">little</span> <span m="2437770">bit</span> <span
  m="2437890">cheating</span> <span m="2438160">because we</span> <span
  m="2438440">already</span> <span m="2438510">kind of knew</span> <span
  m="2438750">the</span> <span m="2438860">answer.</span> <span
  m="2440980">We</span> <span m="2441120">didn't</span> <span
  m="2441330">know</span> <span m="2441490">exactly</span> <span
  m="2442080">how</span> <span m="2442200">the</span> <span
  m="2442290">time</span> <span m="2442950">dependence</span> <span
  m="2443370">was</span> <span m="2443460">going</span> <span m="2443680">to
  go.</span> <span m="2444410">How is it</span> <span m="2444490">that</span>
  <span m="2444580">the</span> <span m="2444710">mean</span> <span
  m="2444950">is</span> <span m="2445040">going</span> <span
  m="2445130">to</span> <span m="2445170">change</span> <span
  m="2445430">over</span> <span m="2445530">time</span> <span
  m="2445940">on</span> <span m="2446090">average?</span> <span
  m="2450940">Exponentially,</span> <span m="2451530">right?</span> <span
  m="2451780">So</span> <span m="2451970">on</span> <span
  m="2452190">average</span> <span m="2452570">you</span> <span
  m="2452740">will</span> <span m="2452870">start at</span> <span
  m="2453140">50.</span> <span m="2453430">You exponentially</span> <span
  m="2453890">relax</span> <span m="2454180">to 100.</span> <span
  m="2455990">But</span> <span m="2456380">in</span> <span
  m="2456460">many</span> <span m="2456640">cases,</span> <span
  m="2456990">we</span> <span m="2457050">don't</span> <span
  m="2457340">know</span> <span m="2457930">so</span> <span
  m="2458120">much</span> <span m="2458340">about</span> <span
  m="2458490">the</span> <span m="2458530">system.</span> <span
  m="2459280">And</span> <span m="2459420">I'd</span> <span
  m="2459560">say</span> <span m="2459660">that</span> <span
  m="2460570">what,</span> <span m="2460690">in</span> <span
  m="2460760">general,</span> <span m="2460970">you</span> <span
  m="2461130">can</span> <span m="2461200">do</span> <span
  m="2461310">is,</span> <span m="2461470">you</span> <span
  m="2461650">have</span> <span m="2461850">to</span> <span
  m="2461950">always</span> <span m="2462120">specify</span> <span
  m="2462450">a</span> <span m="2462500">finite</span> <span
  m="2462760">number</span> <span m="2462920">of</span> <span
  m="2463040">equations.</span> <span m="2464060">But</span> <span
  m="2464210">then</span> <span m="2464350">what</span> <span
  m="2464450">you</span> <span m="2464490">can</span> <span
  m="2464570">do</span> <span m="2464730">is,</span> <span
  m="2464860">you</span> <span m="2464990">can</span> <span
  m="2465120">put</span> <span m="2465320">in,</span> <span
  m="2466050">like,</span> <span m="2466210">reflecting</span> <span
  m="2466740">boundary</span> <span m="2467150">conditions</span> <span
  m="2467580">or</span> <span m="2467670">so</span> <span m="2468290">on</span>
  <span m="2468450">the</span> <span m="2468550">end,</span> <span
  m="2469040">so</span> <span m="2469150">you</span> <span
  m="2469240">don't</span> <span m="2469410">allow</span> <span
  m="2470540">probability</span> <span m="2470875">to</span> <span
  m="2471210">escape.</span></p><p><span m="2472680">But</span> <span
  m="2472830">then</span> <span m="2473390">what</span> <span m="2473580">you
  can</span> <span m="2473660">do</span> <span m="2473740">is</span> <span
  m="2473800">you can</span> <span m="2473980">run</span> <span
  m="2474160">the</span> <span m="2474230">simulation,</span> <span
  m="2474690">and</span> <span m="2474890">if</span> <span
  m="2475090">you</span> <span m="2475210">have</span> <span
  m="2476430">some</span> <span m="2476710">reasonable</span> <span
  m="2477090">probability</span> <span m="2477480">to</span> <span
  m="2477580">any</span> <span m="2477880">of</span> <span
  m="2477950">your</span> <span m="2478080">boundaries,</span> <span
  m="2478560">then</span> <span m="2478650">you</span> <span
  m="2478720">know</span> <span m="2478860">you're</span> <span
  m="2479000">in</span> <span m="2479060">trouble</span> <span
  m="2479720">and</span> <span m="2479850">you</span> <span
  m="2479900">have</span> <span m="2480050">to</span> <span
  m="2480120">extend</span> <span m="2480550">it</span> <span m="2480992">from
  there.</span> <span m="2482320">So</span> <span m="2482470">you</span> <span
  m="2482610">can</span> <span m="2483260">look</span> <span
  m="2483380">to</span> <span m="2483600">say,</span> <span
  m="2483810">oh,</span> <span m="2484030">is</span> <span m="2484150">it</span>
  <span m="2484240">above</span> <span m="2484570">10</span> <span
  m="2484720">to</span> <span m="2484760">the</span> <span
  m="2484840">minus</span> <span m="2485330">3</span> <span
  m="2485930">or</span> <span m="2486000">4,</span> <span
  m="2486490">whatever.</span> <span m="2487230">And</span> <span
  m="2487390">then</span> <span m="2487550">if</span> <span
  m="2487680">it</span> <span m="2487760">is,</span> <span
  m="2488400">then</span> <span m="2488500">you know you</span> <span
  m="2488740">have</span> <span m="2488820">to go</span> <span
  m="2488970">further.</span> <span m="2494790">Any</span> <span
  m="2494960">other</span> <span m="2495130">questions</span> <span
  m="2495580">about</span> <span m="2495830">how--</span> <span
  m="2496290">you're</span> <span m="2496520">actually</span> <span
  m="2496700">going</span> <span m="2496780">to</span> <span
  m="2496820">be</span> <span m="2496920">doing</span> <span
  m="2497610">simulations</span> <span m="2498180">of</span> <span
  m="2498290">this,</span> <span m="2498550">so</span> <span
  m="2498920">these</span> <span m="2499090">are</span> <span
  m="2499180">relevant</span> <span m="2499520">questions</span> <span
  m="2499930">for</span> <span m="2500020">you.</span> <span
  m="2507160">All</span> <span m="2507250">right.</span></p><p><span
  m="2510880">So</span> <span m="2510990">that's</span> <span
  m="2511916">the</span> <span m="2512380">master</span> <span
  m="2512700">equation.</span> <span m="2514490">But</span> <span
  m="2514940">I'd</span> <span m="2515040">say</span> <span
  m="2515360">the</span> <span m="2515790">key, key</span> <span
  m="2516230">thing</span> <span m="2516430">to</span> <span
  m="2516490">remember</span> <span m="2516870">is</span> <span
  m="2516980">that</span> <span m="2517280">it</span> <span
  m="2517950">tells</span> <span m="2518230">you</span> <span
  m="2518580">how</span> <span m="2518780">to</span> <span
  m="2518890">calculate</span> <span m="2519360">the</span> <span
  m="2519440">deterministic</span> <span m="2520390">evolution</span> <span
  m="2521170">of</span> <span m="2521830">the</span> <span
  m="2521960">probability</span> <span m="2522850">of</span> <span
  m="2522960">these</span> <span m="2523120">states</span> <span
  m="2524070">given</span> <span m="2524760">some</span> <span
  m="2525020">potentially</span> <span m="2525640">complicated</span> <span
  m="2526170">set</span> <span m="2526300">of</span> <span
  m="2526350">interactions.</span></p><p><span m="2527580">Now,</span> <span
  m="2528950">a</span> <span m="2529030">rather</span> <span
  m="2529290">orthogonal</span> <span m="2529960">view</span> <span
  m="2530210">to</span> <span m="2530300">the</span> <span
  m="2530380">master</span> <span m="2530640">equation</span> <span
  m="2531060">is</span> <span m="2531260">to</span> <span m="2531370">use</span>
  <span m="2531580">the</span> <span m="2531730">Gillespie</span> <span
  m="2532510">algorithm,</span> <span m="2533080">or</span> <span
  m="2533270">in</span> <span m="2533340">general,</span> <span m="2533580">to
  do</span> <span m="2534020">direct</span> <span m="2534500">stochastic</span>
  <span m="2534940">simulations</span> <span m="2535560">of</span> <span
  m="2535650">individual</span> <span m="2536190">trajectories.</span> <span
  m="2536610">Yeah.</span> <span m="2536750">Question</span> <span
  m="2537020">before</span> <span m="2537220">we</span> <span
  m="2537300">go.</span></p><p><span m="2539890">AUDIENCE: So if</span> <span
  m="2540372">we</span> <span m="2540854">just</span> <span m="2541336">set it
  to 0,</span> <span m="2541818">the probabilities</span> <span
  m="2542300">outside the range</span> <span m="2542782">we think we
  need,</span> <span m="2543264">would we be</span> <span
  m="2543746">losing</span> <span m="2544228">probability?</span></p><p><span
  m="2547900">PROFESSOR: So</span> <span m="2547960">the</span> <span
  m="2548010">question</span> <span m="2548290">is</span> <span
  m="2548370">whether</span> <span m="2548610">we're</span> <span
  m="2548780">somehow</span> <span m="2549030">losing</span> <span
  m="2549270">probability.</span> <span m="2549710">So</span> <span
  m="2549880">what</span> <span m="2550310">I</span> <span
  m="2550390">was</span> <span m="2550570">proposing</span> <span
  m="2551200">before</span> <span m="2551600">is</span> <span
  m="2551690">that</span> <span m="2552480">you</span> <span
  m="2552900">always</span> <span m="2553110">want</span> <span
  m="2553460">probabilities</span> <span m="2553960">to</span> <span
  m="2554040">sum</span> <span m="2554210">to</span> <span m="2554290">1.</span>
  <span m="2554640">Otherwise</span> <span m="2556620">it's</span> <span
  m="2556760">not</span> <span m="2556950">our</span> <span
  m="2557040">probability</span> <span m="2557730">and</span> <span
  m="2557810">the</span> <span m="2557870">mathematicians</span> <span
  m="2558470">get</span> <span m="2558580">upset.</span> <span
  m="2560690">And</span> <span m="2562020">the</span> <span
  m="2562410">key</span> <span m="2562610">thing</span> <span
  m="2562780">there</span> <span m="2563000">is</span> <span
  m="2563110">that</span> <span m="2563940">you</span> <span
  m="2564310">want</span> <span m="2564470">to</span> <span
  m="2564530">start</span> <span m="2565050">with--</span> <span
  m="2566200">you</span> <span m="2566880">have</span> <span
  m="2567130">to</span> <span m="2567210">include</span> <span
  m="2567580">all</span> <span m="2567810">the</span> <span
  m="2567890">states</span> <span m="2568260">that</span> <span
  m="2568380">have</span> <span m="2569010">probability</span> <span
  m="2569285">at the</span> <span m="2569560">beginning.</span></p><p><span
  m="2572050">So</span> <span m="2572340">in</span> <span
  m="2572560">that</span> <span m="2572740">sense,</span> <span
  m="2573460">you're</span> <span m="2573600">given</span> <span
  m="2573840">an</span> <span m="2573940">initial</span> <span
  m="2574210">distribution,</span> <span m="2574760">and</span> <span
  m="2574880">you</span> <span m="2574970">have</span> <span
  m="2575150">to</span> <span m="2575220">include</span> <span
  m="2575480">all</span> <span m="2575660">those</span> <span
  m="2575830">states.</span> <span m="2576170">Otherwise</span> <span
  m="2576790">you're</span> <span m="2576940">definitely</span> <span
  m="2577790">going</span> <span m="2577900">to</span> <span
  m="2577940">do</span> <span m="2578020">something</span> <span
  m="2578230">funny.</span> <span m="2579190">You</span> <span
  m="2579290">start</span> <span m="2579530">out</span> <span
  m="2579680">with</span> <span m="2579780">a</span> <span
  m="2579820">normalized</span> <span m="2580210">probability</span> <span
  m="2580500">distribution.</span> <span m="2581270">And</span> <span
  m="2581380">then</span> <span m="2581510">I</span> <span
  m="2581560">guess</span> <span m="2581740">what I</span> <span
  m="2581830">was</span> <span m="2581960">proposing</span> <span
  m="2582390">is</span> <span m="2582460">that</span> <span
  m="2582640">you</span> <span m="2582810">have</span> <span
  m="2582960">a</span> <span m="2583010">finite</span> <span
  m="2583450">number</span> <span m="2583650">of</span> <span
  m="2583730">equations,</span> <span m="2584570">but</span> <span
  m="2584720">you</span> <span m="2584800">don't</span> <span
  m="2585060">let</span> <span m="2585210">the</span> <span
  m="2585290">probability</span> <span m="2586400">leave</span> <span
  m="2586870">or</span> <span m="2587010">come</span> <span
  m="2587240">in</span> <span m="2587630">from</span> <span
  m="2587810">those</span> <span m="2588040">ends.</span></p><p><span
  m="2590280">And</span> <span m="2590610">if</span> <span
  m="2590730">you</span> <span m="2590810">do</span> <span
  m="2590920">that,</span> <span m="2591270">then</span> <span
  m="2591300">you</span> <span m="2591510">will</span> <span
  m="2591680">always</span> <span m="2592010">have</span> <span
  m="2592120">a</span> <span m="2592160">normalized</span> <span
  m="2592570">probability</span> <span m="2593000">distribution.</span> <span
  m="2594470">Of</span> <span m="2594550">course,</span> <span
  m="2595370">at</span> <span m="2595490">the</span> <span
  m="2595630">ends</span> <span m="2595950">you've</span> <span
  m="2596070">kind</span> <span m="2596240">of</span> <span
  m="2596340">violated</span> <span m="2597600">the</span> <span
  m="2597800">actual</span> <span m="2598400">equations,</span> <span
  m="2600270">and</span> <span m="2600690">that's</span> <span
  m="2600880">why</span> <span m="2601010">you</span> <span
  m="2601090">have</span> <span m="2601180">to</span> <span
  m="2601250">make</span> <span m="2601370">sure</span> <span
  m="2601600">that</span> <span m="2601760">you</span> <span
  m="2601850">don't</span> <span m="2602030">have</span> <span
  m="2602150">significant</span> <span m="2602530">probability</span> <span
  m="2603420">at</span> <span m="2603530">any</span> <span m="2603700">of</span>
  <span m="2603760">your</span> <span m="2603850">boundaries.</span> <span
  m="2606440">Does</span> <span m="2606580">that</span> <span
  m="2607430">answer?</span> <span m="2608970">Not</span> <span
  m="2609130">quite?</span></p><p><span m="2609390">AUDIENCE: Because I'm
  wondering</span> <span m="2609876">if</span> <span
  m="2610362">[INAUDIBLE].</span></p><p><span m="2617170">PROFESSOR: So</span>
  <span m="2617500">I</span> <span m="2617600">was</span> <span
  m="2617760">not</span> <span m="2618170">suggesting</span> <span
  m="2618580">that</span> <span m="2618630">you</span> <span
  m="2618730">set</span> <span m="2619070">the</span> <span
  m="2619210">probabilities</span> <span m="2619730">equal</span> <span
  m="2619900">to</span> <span m="2619950">0.</span> <span m="2620630">I</span>
  <span m="2620730">was</span> <span m="2620840">suggesting</span> <span
  m="2621230">that</span> <span m="2621690">you</span> <span
  m="2621820">do</span> <span m="2622210">what's</span> <span
  m="2622510">kind</span> <span m="2622660">of</span> <span
  m="2622730">like</span> <span m="2622910">what</span> <span
  m="2623630">the</span> <span m="2623910">equations</span> <span
  m="2624320">actually</span> <span m="2624580">here,</span> <span
  m="2624820">which is that</span> <span m="2624970">you</span> <span
  m="2625100">don't</span> <span m="2625280">allow</span> <span
  m="2625500">any</span> <span m="2625710">probability</span> <span
  m="2626220">to</span> <span m="2626380">leave.</span> <span
  m="2626920">There's</span> <span m="2627080">no</span> <span
  m="2627240">probably</span> <span m="2627570">flux</span> <span
  m="2628310">on</span> <span m="2628460">this</span> <span
  m="2628600">edge.</span></p><p><span m="2629540">So</span> <span
  m="2629740">for</span> <span m="2629820">example,</span> <span
  m="2630370">out</span> <span m="2630590">at</span> <span
  m="2630690">P134,</span> <span m="2633550">I</span> <span
  m="2633920">would</span> <span m="2634120">just</span> <span
  m="2634300">say,</span> <span m="2634470">OK,</span> <span
  m="2634660">well,</span> <span m="2634780">here's</span> <span
  m="2635130">the</span> <span m="2635200">probability</span> <span
  m="2635700">that</span> <span m="2636000">you have</span> <span
  m="2636430">134</span> <span m="2636790">mRNA.</span> <span
  m="2637500">And</span> <span m="2638810">in</span> <span
  m="2638940">principle</span> <span m="2639330">there</span> <span
  m="2639530">are</span> <span m="2639690">these</span> <span
  m="2639920">two</span> <span m="2640610">arrows,</span> <span
  m="2641350">but</span> <span m="2642310">you can</span> <span
  m="2642470">just</span> <span m="2642600">get</span> <span
  m="2642710">rid</span> <span m="2642810">of</span> <span
  m="2642850">them.</span> <span m="2644580">So</span> <span
  m="2645410">now</span> <span m="2645680">any</span> <span
  m="2645890">probability</span> <span m="2646160">that</span> <span
  m="2646430">enters</span> <span m="2647060">here</span> <span
  m="2648400">can</span> <span m="2648510">only</span> <span
  m="2648820">come</span> <span m="2649000">back.</span> <span
  m="2649900">And</span> <span m="2650160">I've</span> <span
  m="2650460">somehow</span> <span m="2650720">violated</span> <span
  m="2651190">my</span> <span m="2651310">equations.</span> <span
  m="2651750">But</span> <span m="2652130">if</span> <span
  m="2652570">P134</span> <span m="2653260">is</span> <span
  m="2653330">essentially</span> <span m="2653700">0,</span> <span
  m="2654010">then</span> <span m="2654130">it</span> <span
  m="2654460">doesn't</span> <span m="2654630">matter.</span></p><p><span
  m="2662120">So</span> <span m="2662300">instead</span> <span
  m="2666470">of</span> <span m="2666520">looking</span> <span
  m="2666760">at</span> <span m="2666850">these</span> <span
  m="2666990">probabilities</span> <span m="2667380">evolve</span> <span
  m="2668250">kind of</span> <span m="2668450">as</span> <span
  m="2668880">a</span> <span m="2668930">whole,</span> <span
  m="2669840">we</span> <span m="2669960">can</span> <span
  m="2670080">instead</span> <span m="2670320">look</span> <span
  m="2670450">at</span> <span m="2670500">individual</span> <span
  m="2670910">trajectories,</span> <span m="2671360">right?</span> <span
  m="2671520">So</span> <span m="2672060">the</span> <span
  m="2672160">idea</span> <span m="2672440">here</span> <span
  m="2672790">is</span> <span m="2672890">that</span> <span
  m="2673870">if</span> <span m="2674090">we</span> <span
  m="2675250">start</span> <span m="2675630">with</span> <span
  m="2675730">the</span> <span m="2675790">situation--</span> <span
  m="2676210">actually,</span> <span m="2676510">we can take</span> <span
  m="2676690">this</span> <span m="2677150">thing</span> <span
  m="2677320">here.</span> <span m="2679610">So</span> <span
  m="2679710">we</span> <span m="2679790">know</span> <span
  m="2679950">that</span> <span m="2680170">at steady</span> <span
  m="2680390">state it's going to be</span> <span m="2680470">100.</span> <span
  m="2681700">Starts</span> <span m="2682010">out</span> <span
  m="2682130">at</span> <span m="2682230">50.</span> <span
  m="2683180">And</span> <span m="2683300">in</span> <span
  m="2683350">this</span> <span m="2683540">case,</span> <span
  m="2684900">with</span> <span m="2685090">the</span> <span
  m="2685150">master</span> <span m="2685510">equation</span> <span
  m="2685850">you say,</span> <span m="2685950">OK,</span> <span
  m="2686180">well,</span> <span m="2686410">you</span> <span
  m="2686520">start</span> <span m="2686750">out</span> <span
  m="2686910">with</span> <span m="2687040">all</span> <span
  m="2687350">the</span> <span m="2687420">probability</span> <span
  m="2687790">right</span> <span m="2687890">here.</span></p><p><span
  m="2688060">So</span> <span m="2688160">you have</span> <span
  m="2688290">kind</span> <span m="2688420">of</span> <span m="2688490">a</span>
  <span m="2688610">delta</span> <span m="2688860">function at</span> <span
  m="2689310">50.</span> <span m="2690790">But</span> <span
  m="2690900">then</span> <span m="2691110">what</span> <span
  m="2691230">happens</span> <span m="2691490">is</span> <span
  m="2691570">this</span> <span m="2691740">thing</span> <span
  m="2691890">kind</span> <span m="2692040">of</span> <span
  m="2692120">evolves,</span> <span m="2692900">and</span> <span
  m="2693210">over</span> <span m="2693420">time</span> <span
  m="2694280">this</span> <span m="2694450">thing</span> <span
  m="2694570">kind</span> <span m="2694710">of</span> <span
  m="2695070">spreads</span> <span m="2699550">until</span> <span
  m="2699850">you</span> <span m="2699920">have</span> <span
  m="2700080">something</span> <span m="2700330">that</span> <span
  m="2700580">looks</span> <span m="2700900">like</span> <span
  m="2702490">this,</span> <span m="2704090">where</span> <span
  m="2704230">you</span> <span m="2704320">have</span> <span
  m="2704510">a</span> <span m="2704580">Poisson</span> <span
  m="2704980">distribution</span> <span m="2705450">centered</span> <span
  m="2705690">around</span> <span m="2705880">100.</span> <span
  m="2707330">And</span> <span m="2707450">this</span> <span
  m="2707960">Poisson</span> <span m="2708140">distribution's going</span> <span
  m="2708500">to</span> <span m="2708710">be</span> <span
  m="2708790">very</span> <span m="2709000">close</span> <span m="2709220">to
  a</span> <span m="2709350">Gaussian,</span> <span m="2710800">because</span>
  <span m="2710980">you</span> <span m="2711060">have</span> <span
  m="2711160">a</span> <span m="2711200">significant</span> <span
  m="2711680">number.</span></p><p><span m="2712680">So</span> <span
  m="2712810">the</span> <span m="2713070">master</span> <span
  m="2713380">equation</span> <span m="2713620">tells</span> <span
  m="2713900">you how this</span> <span m="2714020">probability</span> <span
  m="2714340">distribution</span> <span m="2714750">evolves.</span> <span
  m="2716610">Now</span> <span m="2717500">this</span> <span
  m="2718020">is</span> <span m="2718220">the</span> <span
  m="2718690">number</span> <span m="2719360">m</span> <span
  m="2721320">and</span> <span m="2721460">this</span> <span
  m="2722450">is</span> <span m="2722660">kind</span> <span
  m="2722850">of</span> <span m="2723070">the</span> <span
  m="2723170">frequency</span> <span m="2723440">that</span> <span
  m="2723710">you</span> <span m="2723800">observe</span> <span
  m="2724070">it.</span> <span m="2725330">So</span> <span m="2725480">we</span>
  <span m="2725580">can</span> <span m="2725690">also</span> <span
  m="2726030">kind</span> <span m="2726150">of</span> <span
  m="2726230">flip</span> <span m="2726470">things</span> <span
  m="2726910">so</span> <span m="2727160">we</span> <span
  m="2727420">instead</span> <span m="2728340">plot</span> <span
  m="2728930">the</span> <span m="2729010">number</span> <span
  m="2729260">m</span> <span m="2730090">on</span> <span m="2731790">the</span>
  <span m="2731900">y-axis.</span> <span m="2734310">And</span> <span
  m="2734380">we</span> <span m="2734460">already</span> <span
  m="2734620">said</span> <span m="2735360">the</span> <span
  m="2735480">deterministic</span> <span m="2736150">equations</span> <span
  m="2738570">will</span> <span m="2738690">look</span> <span
  m="2738820">like</span> <span m="2738960">this.</span> <span
  m="2739180">And</span> <span m="2739380">the</span> <span
  m="2739450">characteristic</span> <span m="2740120">time</span> <span
  m="2740450">scale</span> <span m="2741030">for</span> <span
  m="2741150">this</span> <span m="2742100">is</span> <span
  m="2742310">what?</span></p><p><span m="2749670">1</span> <span
  m="2749820">over</span> <span m="2749980">mm,</span> <span
  m="2750430">right?</span> <span m="2750590">So</span> <span
  m="2750650">this</span> <span m="2750820">thing</span> <span
  m="2751890">relaxes</span> <span m="2752770">to</span> <span
  m="2752960">the</span> <span m="2753040">equilibrium,</span> <span
  m="2754230">time</span> <span m="2754410">scale</span> <span
  m="2754670">determined</span> <span m="2755020">by</span> <span
  m="2755160">the</span> <span m="2755750">degradation</span> <span
  m="2756230">time</span> <span m="2756540">of</span> <span
  m="2756600">the</span> <span m="2756750">mRNA.</span> <span
  m="2757840">So</span> <span m="2758200">these</span> <span
  m="2759000">are</span> <span m="2759110">things</span> <span
  m="2759400">that</span> <span m="2759550">should</span> <span
  m="2759740">be</span> <span m="2759900">really--</span> <span
  m="2760270">you</span> <span m="2760670">want</span> <span
  m="2760910">to</span> <span m="2760980">be</span> <span
  m="2761120">kind</span> <span m="2761230">of</span> <span
  m="2762390">drilled</span> <span m="2762740">into</span> <span
  m="2762880">your</span> <span m="2763000">head, and</span> <span
  m="2763290">I'm</span> <span m="2763400">trying</span> <span
  m="2763680">to</span> <span m="2763750">drill,</span> <span
  m="2764560">so</span> <span m="2765000">you'll</span> <span
  m="2765350">hear</span> <span m="2765550">them</span> <span m="2765690">again
  and</span> <span m="2765890">again.</span></p><p><span m="2767110">Now</span>
  <span m="2769000">the</span> <span m="2769360">master</span> <span
  m="2769690">equation,</span> <span m="2770150">indeed,</span> <span
  m="2770750">since</span> <span m="2771020">everything's</span> <span
  m="2771320">linear</span> <span m="2771610">here,</span> <span
  m="2771880">the</span> <span m="2772280">expectation</span> <span
  m="2772920">value</span> <span m="2773330">over</span> <span
  m="2774090">the</span> <span m="2774190">probability</span> <span
  m="2774440">distributions</span> <span m="2774970">actually</span> <span
  m="2775760">does</span> <span m="2776050">behave</span> <span
  m="2776310">like</span> <span m="2776490">this.</span> <span
  m="2777010">So</span> <span m="2777160">the</span> <span
  m="2777250">mean</span> <span m="2777620">of</span> <span
  m="2777670">the</span> <span m="2777740">distributions</span> <span
  m="2778390">as</span> <span m="2778500">a</span> <span m="2778680">function
  of</span> <span m="2778770">time</span> <span m="2779070">look</span> <span
  m="2779330">like</span> <span m="2779470">that.</span> <span
  m="2780600">And</span> <span m="2781320">in</span> <span
  m="2781450">some</span> <span m="2781610">ways,</span> <span
  m="2781790">if</span> <span m="2781880">we</span> <span
  m="2781970">were</span> <span m="2782040">to</span> <span
  m="2782120">plot</span> <span m="2782500">this,</span> <span
  m="2782710">we</span> <span m="2782820">would</span> <span
  m="2782970">say,</span> <span m="2783060">OK,</span> <span
  m="2783300">well,</span> <span m="2783600">first</span> <span
  m="2783830">of</span> <span m="2783880">all</span> <span
  m="2784030">it's</span> <span m="2784140">all</span> <span
  m="2784520">here.</span> <span m="2785550">Then</span> <span
  m="2786070">it</span> <span m="2786220">kind</span> <span
  m="2786370">of</span> <span m="2786710">looks</span> <span
  m="2786840">like</span> <span m="2786980">this.</span> <span
  m="2789180">So</span> <span m="2789250">this</span> <span
  m="2789630">is</span> <span m="2790220">somehow</span> <span m="2790690">how
  those</span> <span m="2790840">probability</span> <span
  m="2791120">distributions</span> <span m="2791580">are</span> <span
  m="2791640">kind</span> <span m="2791770">of</span> <span
  m="2792100">expanding</span> <span m="2792415">over</span> <span
  m="2792730">time.</span></p><p><span m="2794390">Now</span> <span
  m="2794560">for</span> <span m="2794860">an</span> <span
  m="2795040">individual</span> <span m="2795690">trajectories,</span> <span
  m="2796120">if</span> <span m="2796210">we</span> <span m="2796330">run</span>
  <span m="2796580">a bunch</span> <span m="2796880">of</span> <span
  m="2796970">stochastic</span> <span m="2797390">simulations,</span> <span
  m="2798720">we'll</span> <span m="2798900">get</span> <span
  m="2799060">something</span> <span m="2799270">that</span> <span
  m="2799360">on</span> <span m="2799610">average</span> <span
  m="2799940">looks</span> <span m="2800100">like</span> <span
  m="2800230">this,</span> <span m="2800480">but</span> <span
  m="2801680">it</span> <span m="2801770">might</span> <span
  m="2803000">look</span> <span m="2803110">like</span> <span
  m="2803290">this.</span> <span m="2804440">A</span> <span
  m="2804520">different</span> <span m="2804790">one</span> <span
  m="2804980">might</span> <span m="2805190">look</span> <span
  m="2805360">like</span> <span m="2805560">this,</span> <span
  m="2808260">and</span> <span m="2808660">so</span> <span
  m="2809680">on,</span> <span m="2810010">although</span> <span
  m="2810220">they</span> <span m="2810330">shouldn't</span> <span
  m="2810860">converge</span> <span m="2811340">there</span> <span
  m="2812860">because</span> <span m="2812940">that's</span> <span
  m="2813260">not</span> <span m="2813410">consistent.</span></p><p><span
  m="2815630">And</span> <span m="2815820">if</span> <span
  m="2815900">you</span> <span m="2816110">did</span> <span m="2816240">a</span>
  <span m="2816280">histogram</span> <span m="2817440">at</span> <span
  m="2817590">all</span> <span m="2817670">those</span> <span
  m="2817800">different</span> <span m="2818030">times</span> <span
  m="2818440">of</span> <span m="2818590">the</span> <span
  m="2818720">individual</span> <span m="2819150">stochastic</span> <span
  m="2819480">trajectories,</span> <span m="2820170">you</span> <span
  m="2820300">should</span> <span m="2820520">recover</span> <span
  m="2821010">the</span> <span m="2821140">probability</span> <span
  m="2821600">distribution</span> <span m="2822480">that you</span> <span
  m="2822650">got</span> <span m="2822880">for</span> <span
  m="2822970">the</span> <span m="2823050">master</span> <span
  m="2823350">equation.</span></p><p><span m="2826480">So</span> <span
  m="2826520">this</span> <span m="2826730">is</span> <span m="2826980">a</span>
  <span m="2827100">powerful</span> <span m="2827510">way</span> <span
  m="2827630">just</span> <span m="2827800">to</span> <span
  m="2827860">make</span> <span m="2828070">sure</span> <span
  m="2828860">that,</span> <span m="2829210">for</span> <span
  m="2829310">example,</span> <span m="2829500">your</span> <span
  m="2829600">simulations</span> <span m="2830100">are</span> <span
  m="2830160">working,</span> <span m="2831330">that</span> <span
  m="2831500">you</span> <span m="2831600">can</span> <span
  m="2831730">check</span> <span m="2831980">to</span> <span
  m="2832060">make</span> <span m="2832230">sure</span> <span
  m="2832500">that</span> <span m="2832630">everything</span> <span
  m="2832940">behaves</span> <span m="2834150">in</span> <span
  m="2834280">a</span> <span m="2834320">consistent</span> <span
  m="2834700">way.</span></p><p><span m="2836940">Now</span> <span
  m="2837440">there's</span> <span m="2837630">a</span> <span
  m="2837670">major</span> <span m="2837880">question,</span> <span
  m="2838220">though, of</span> <span m="2838600">how</span> <span
  m="2838870">is</span> <span m="2839000">it</span> <span
  m="2839090">that</span> <span m="2839230">you</span> <span
  m="2839300">should</span> <span m="2839550">generate</span> <span
  m="2840020">these</span> <span m="2840150">stochastic</span> <span
  m="2840730">trajectories?</span> <span m="2843550">And</span> <span
  m="2845470">the</span> <span m="2845670">sort</span> <span
  m="2845850">of</span> <span m="2845920">most</span> <span
  m="2846140">straightforward</span> <span m="2846860">thing</span> <span
  m="2847050">to</span> <span m="2847110">do</span> <span m="2848150">is</span>
  <span m="2848800">to</span> <span m="2849375">just</span> <span
  m="2849860">divide</span> <span m="2850310">up</span> <span
  m="2850400">time</span> <span m="2850760">into</span> <span
  m="2851110">a</span> <span m="2851280">bunch</span> <span
  m="2851480">of</span> <span m="2851530">little</span> <span
  m="2851710">delta</span> <span m="2851900">t's,</span> <span m="2852230">and
  just</span> <span m="2852380">ask</span> <span m="2852640">whether</span>
  <span m="2852820">anything</span> <span m="2853060">happened.</span> <span
  m="2854450">So</span> <span m="2854960">let</span> <span
  m="2855140">me--</span></p><p><span m="2867080">So</span> <span
  m="2867290">what</span> <span m="2867710">we want to do</span> <span
  m="2867800">is</span> <span m="2867890">we</span> <span
  m="2867990">want</span> <span m="2868130">to</span> <span
  m="2868170">imagine</span> <span m="2868900">we</span> <span
  m="2869060">have</span> <span m="2874540">maybe</span> <span
  m="2874870">m</span> <span m="2875240">chemical</span> <span
  m="2875610">species.</span> <span m="2876400">So now these</span> <span
  m="2876980">are</span> <span m="2877030">different</span> <span
  m="2877370">m's</span> <span m="2877660">and</span> <span
  m="2878010">n's.</span> <span m="2878390">Be careful.</span> <span
  m="2878930">m</span> <span m="2879260">chemical</span> <span
  m="2879560">species,</span> <span m="2880420">they</span> <span
  m="2880510">could</span> <span m="2880680">be</span> <span
  m="2880830">anything,</span> <span m="2881340">could</span> <span
  m="2881470">be</span> <span m="2882480">proteins,</span> <span
  m="2883030">they</span> <span m="2883120">could</span> <span
  m="2883300">be</span> <span m="2885010">small</span> <span
  m="2885300">molecules,</span> <span m="2885470">something.</span> <span
  m="2886400">And</span> <span m="2886490">there</span> <span m="2886620">are
  n</span> <span m="2887250">possible</span> <span
  m="2887610">reactions.</span></p><p><span m="2889690">And</span> <span
  m="2889860">indeed,</span> <span m="2890670">in</span> <span
  m="2890800">some</span> <span m="2890990">cases</span> <span
  m="2891260">people</span> <span m="2891500">want</span> <span
  m="2891630">to</span> <span m="2892160">study</span> <span
  m="2892440">the</span> <span m="2892780">stochastic</span> <span
  m="2893100">dynamics</span> <span m="2893680">of</span> <span
  m="2895000">large</span> <span m="2896050">networks.</span> <span
  m="2896770">So</span> <span m="2896840">you</span> <span
  m="2896970">could</span> <span m="2897130">have</span> <span
  m="2899280">50</span> <span m="2899640">chemical</span> <span
  m="2899930">species</span> <span m="2900500">and</span> <span
  m="2900840">300</span> <span m="2902390">different</span> <span
  m="2903120">reactions.</span> <span m="2904200">So</span> <span
  m="2904310">this</span> <span m="2904450">could</span> <span
  m="2904560">be</span> <span m="2904660">rather</span> <span
  m="2904880">complicated.</span> <span m="2907820">And</span> <span
  m="2908560">these</span> <span m="2908940">m</span> <span
  m="2909140">chemical</span> <span m="2909390">species</span> <span
  m="2911040">have,</span> <span m="2911750">we'll</span> <span
  m="2911900">say,</span> <span m="2912060">numbers</span> <span
  m="2914080">or</span> <span m="2914250">if</span> <span
  m="2914290">you'd</span> <span m="2914420">like,</span> <span
  m="2915160">in</span> <span m="2915240">some</span> <span m="2915430">cases
  it</span> <span m="2915490">could</span> <span m="2915600">be</span> <span
  m="2915680">concentrations,</span> <span m="2916870">Xi,</span> <span
  m="2918030">so</span> <span m="2918160">then</span> <span
  m="2918520">the</span> <span m="2918630">whole</span> <span
  m="2918840">thing</span> <span m="2919520">can</span> <span
  m="2919610">be</span> <span m="2919680">described as</span> <span
  m="2920090">some</span> <span m="2921320">vector</span> <span
  m="2921610">X.</span></p><p><span m="2924140">And</span> <span
  m="2924630">the</span> <span m="2924720">question</span> <span
  m="2925010">is,</span> <span m="2925580">how</span> <span m="2925760">should
  we</span> <span m="2925880">assimilate</span> <span m="2926165">this?</span>
  <span m="2928740">The</span> <span m="2928910">so-called,</span> <span
  m="2929235">what</span> <span m="2929560">we</span> <span
  m="2929690">often</span> <span m="2929930">call</span> <span
  m="2930390">the</span> <span m="2930510">naive</span> <span
  m="2931000">protocol--</span> <span m="2931890">and</span> <span
  m="2932100">this</span> <span m="2932250">is</span> <span
  m="2932370">indeed</span> <span m="2934100">what</span> <span
  m="2934330">I</span> <span m="2934470">did</span> <span m="2934770">in</span>
  <span m="2934860">graduate</span> <span m="2935210">school</span> <span
  m="2935500">because</span> <span m="2935830">nobody</span> <span
  m="2936290">told</span> <span m="2936580">me</span> <span
  m="2937540">that</span> <span m="2937650">I</span> <span
  m="2937690">wasn't</span> <span m="2937970">supposed to</span> <span
  m="2938150">do</span> <span m="2938270">it--</span> <span
  m="2939400">is</span> <span m="2939570">that</span> <span
  m="2939760">you</span> <span m="2940340">divide</span> <span
  m="2940730">time</span> <span m="2941110">into</span> <span
  m="2941420">little</span> <span m="2942140">time</span> <span
  m="2942340">segments</span> <span m="2942710">delta</span> <span
  m="2942920">t.</span></p><p><span m="2949550">Small</span> <span
  m="2949940">delta</span> <span m="2950170">t.</span> <span
  m="2950670">And</span> <span m="2950800">you</span> <span
  m="2950880">just</span> <span m="2951090">do</span> <span
  m="2951180">this</span> <span m="2951490">over</span> <span
  m="2951670">and</span> <span m="2951730">over.</span> <span
  m="2951880">And</span> <span m="2952340">for</span> <span
  m="2952500">each</span> <span m="2952700">delta</span> <span
  m="2952920">t</span> <span m="2953340">you ask,</span> <span
  m="2953480">did</span> <span m="2953690">anything</span> <span
  m="2953960">happen?</span> <span m="2956440">If</span> <span
  m="2956540">it</span> <span m="2956650">did,</span> <span
  m="2957010">then</span> <span m="2957430">you</span> <span
  m="2957620">update.</span> <span m="2958130">If</span> <span
  m="2958280">not,</span> <span m="2958890">you keep on going.</span> <span
  m="2960450">Now</span> <span m="2960860">the</span> <span
  m="2961000">problem</span> <span m="2961470">with</span> <span
  m="2961610">this</span> <span m="2961760">approach--</span> <span
  m="2963230">well,</span> <span m="2963560">what</span> <span
  m="2963960">is</span> <span m="2964060">the</span> <span
  m="2964140">problem</span> <span m="2964360">with this
  approach?</span></p><p><span m="2969170">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2971580">PROFESSOR: Yeah.</span> <span
  m="2971890">Time is</span> <span m="2972250">continuous.</span> <span
  m="2972830">So</span> <span m="2974950">one</span> <span
  m="2975130">problem</span> <span m="2975470">is</span> <span
  m="2975600">that,</span> <span m="2976160">well,</span> <span
  m="2976410">you</span> <span m="2976700">don't</span> <span
  m="2976880">like</span> <span m="2977860">discrete</span> <span
  m="2978230">time.</span> <span m="2979050">That's</span> <span
  m="2979580">understandable.</span> <span m="2981820">But</span> <span
  m="2982370">I'm</span> <span m="2982480">going</span> <span
  m="2982560">to</span> <span m="2982600">say,</span> <span
  m="2982710">well,</span> <span m="2983290">you</span> <span
  m="2983380">know,</span> <span m="2984260">the</span> <span
  m="2984370">details--</span> <span m="2984860">a</span> <span
  m="2985110">delta</span> <span m="2985340">t</span> <span m="2985470">may
  be</span> <span m="2985770">small,</span> <span m="2986870">so</span> <span
  m="2987580">you</span> <span m="2987940">won't</span> <span
  m="2988100">notice.</span> <span m="2991140">I'm</span> <span
  m="2991380">saying,</span> <span m="2991680">if</span> <span
  m="2991850">I</span> <span m="2991930">said</span> <span
  m="2992070">delta</span> <span m="2992380">t</span> <span
  m="2992550">being</span> <span m="2992800">small,</span> <span
  m="2993190">then</span> <span m="2993340">I'm</span> <span
  m="2993430">going</span> <span m="2993530">to</span> <span
  m="2993610">claim</span> <span m="2993840">that</span> <span
  m="2993930">you're</span> <span m="2994030">not</span> <span
  m="2994190">going</span> <span m="2994270">to</span> <span
  m="2994320">notice</span> <span m="2994680">that</span> <span
  m="2995680">I've--</span></p><p><span m="2996704">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2997880">PROFESSOR: But then</span> <span
  m="2998250">the simulation</span> <span m="2998800">is</span> <span
  m="2998900">slow,</span> <span m="2999150">right?</span> <span
  m="2999310">So</span> <span m="2999390">there's</span> <span
  m="2999560">a</span> <span m="2999620">fundamental</span> <span
  m="3000100">trade-off</span> <span m="3000490">here.</span> <span
  m="3001080">And</span> <span m="3001170">in</span> <span
  m="3001220">particular,</span> <span m="3002660">the</span> <span
  m="3002790">problem with this</span> <span m="3003270">protocol is</span>
  <span m="3003730">that</span> <span m="3003930">for</span> <span
  m="3004100">it</span> <span m="3004270">to</span> <span
  m="3004360">behave</span> <span m="3004860">reasonably,</span> <span
  m="3007070">delta</span> <span m="3007270">t has to be</span> <span
  m="3007770">very</span> <span m="3008070">small.</span> <span
  m="3009070">And</span> <span m="3011610">what</span> <span
  m="3011720">do</span> <span m="3011810">I</span> <span m="3011890">mean</span>
  <span m="3012090">by</span> <span m="3012220">very small,
  though?</span></p><p><span m="3018598">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="3025090">PROFESSOR: That's</span> <span
  m="3025340">right.</span> <span m="3027910">For</span> <span m="3028050">this
  to</span> <span m="3028340">work,</span> <span m="3029690">delta</span> <span
  m="3029750">t</span> <span m="3029920">has</span> <span m="3030610">to</span>
  <span m="3030670">be</span> <span m="3033210">such</span> <span
  m="3034770">that</span> <span m="3035040">unlikely</span> <span
  m="3035620">for</span> <span m="3035720">anything</span> <span m="3035930">to
  happen.</span> <span m="3041610">But</span> <span m="3042070">this</span>
  <span m="3042280">is</span> <span m="3042340">already</span> <span
  m="3042670">a</span> <span m="3042720">problem,</span> <span
  m="3043120">because</span> <span m="3043240">that</span> <span
  m="3043390">means</span> <span m="3043590">that</span> <span
  m="3044120">we're</span> <span m="3044370">doing</span> <span
  m="3044580">a</span> <span m="3044650">lot</span> <span m="3044900">of</span>
  <span m="3044960">simulations,</span> <span m="3045570">and</span> <span
  m="3045670">then</span> <span m="3045880">just</span> <span
  m="3046710">nothing's</span> <span m="3047050">happening.</span> <span
  m="3051420">How</span> <span m="3052730">do</span> <span m="3052790">we</span>
  <span m="3052880">figure</span> <span m="3053180">out</span> <span
  m="3054500">what</span> <span m="3054660">that</span> <span
  m="3054860">probability</span> <span m="3055500">is?</span></p><p><span
  m="3063680">So</span> <span m="3063830">in</span> <span
  m="3063900">particular,</span> <span m="3064590">we</span> <span
  m="3064740">can</span> <span m="3064870">ask</span> <span
  m="3065160">about--</span> <span m="3066420">well,</span> <span
  m="3067600">given</span> <span m="3069400">possible</span> <span
  m="3069740">reactions,</span> <span m="3071080">we'll</span> <span
  m="3071250">say</span> <span m="3071470">with</span> <span
  m="3071800">rates</span> <span m="3074010">rs</span> <span m="3074230">of
  i.</span> <span m="3075370">So</span> <span m="3075460">the</span> <span
  m="3075560">probability</span> <span m="3076410">that</span> <span
  m="3076550">the</span> <span m="3076650">i'th</span> <span
  m="3076870">reaction</span> <span m="3077300">occurs</span> <span
  m="3079880">is</span> <span m="3080090">equal</span> <span
  m="3080350">to</span> <span m="3081230">r</span> <span m="3081640">i</span>
  <span m="3082140">times</span> <span m="3082410">delta</span> <span
  m="3082690">t</span> <span m="3084170">for</span> <span
  m="3084300">small</span> <span m="3084620">delta</span> <span
  m="3084870">t,</span> <span m="3089500">because</span> <span
  m="3089640">each</span> <span m="3089840">of</span> <span
  m="3089890">these</span> <span m="3090060">reactions</span> <span
  m="3090600">will</span> <span m="3090730">occur</span> <span
  m="3091030">kind</span> <span m="3091170">of</span> <span
  m="3091600">at</span> <span m="3091740">a</span> <span
  m="3091800">rate--</span> <span m="3092130">they're</span> <span
  m="3093610">going</span> <span m="3093700">to</span> <span
  m="3093740">be</span> <span m="3093840">exponential</span> <span
  m="3094270">distributions</span> <span m="3095280">of</span> <span
  m="3095480">the</span> <span m="3095540">times</span> <span m="3096230">for
  them to</span> <span m="3096420">occur.</span> <span m="3097330">This</span>
  <span m="3097390">is</span> <span m="3097450">a</span> <span
  m="3097530">Poisson</span> <span m="3097960">process</span> <span
  m="3098690">because</span> <span m="3098970">it's</span> <span
  m="3099100">random.</span></p><p><span m="3100440">Now</span> <span
  m="3101280">what</span> <span m="3101490">we</span> <span
  m="3101580">want</span> <span m="3101710">to</span> <span
  m="3101750">know</span> <span m="3101950">is</span> <span
  m="3102040">the</span> <span m="3102140">probability</span> <span
  m="3103900">that</span> <span m="3104430">nothing</span> <span
  m="3104960">is</span> <span m="3105090">going</span> <span
  m="3105180">to</span> <span m="3105220">happen</span> <span
  m="3108300">because</span> <span m="3108570">that's</span> <span
  m="3109220">how</span> <span m="3109370">we're</span> <span
  m="3109500">going</span> <span m="3109580">to</span> <span
  m="3109620">have</span> <span m="3109780">set</span> <span
  m="3110040">delta</span> <span m="3110280">t.</span> <span
  m="3113680">Well,</span> <span m="3113980">what</span> <span
  m="3114130">we</span> <span m="3114220">can</span> <span
  m="3114310">imagine</span> <span m="3114670">is,</span> <span
  m="3115260">then</span> <span m="3115460">we</span> <span
  m="3115610">say,</span> <span m="3115730">well,</span> <span
  m="3115990">what's</span> <span m="3116280">the</span> <span
  m="3116420">probability</span> <span m="3118280">that</span> <span
  m="3118860">is,</span> <span m="3119090">say,</span> <span
  m="3120670">not</span> <span m="3122000">reaction</span> <span
  m="3122300">1</span> <span m="3123610">and</span> <span m="3125840">not</span>
  <span m="3126240">2</span> <span m="3127910">and</span> <span
  m="3130010">dot</span> <span m="3130110">dot dot.</span> <span
  m="3130870">OK.</span> <span m="3131500">Well,</span> <span
  m="3132260">and</span> <span m="3132430">this</span> <span
  m="3132880">is</span> <span m="3133190">in</span> <span
  m="3133500">some</span> <span m="3133670">time</span> <span
  m="3133900">delta</span> <span m="3134373">t.</span></p><p><span
  m="3140050">Well,</span> <span m="3140190">actually,</span> <span
  m="3143470">we</span> <span m="3143610">know</span> <span
  m="3143760">that</span> <span m="3143920">if</span> <span
  m="3144750">the</span> <span m="3144890">fundamental</span> <span
  m="3145310">process</span> <span m="3145730">just</span> <span
  m="3145900">looks</span> <span m="3146030">like</span> <span
  m="3146170">this,</span> <span m="3146430">then</span> <span
  m="3146640">we're</span> <span m="3146770">going</span> <span
  m="3146850">to</span> <span m="3146890">get</span> <span
  m="3147090">exponential</span> <span m="3147630">distributions</span> <span
  m="3148230">for</span> <span m="3148330">each</span> <span
  m="3148460">of</span> <span m="3148510">those.</span> <span
  m="3152170">So</span> <span m="3152600">we</span> <span m="3152770">end</span>
  <span m="3153160">up</span> <span m="3153250">with</span> <span
  m="3153460">e</span> <span m="3153980">to</span> <span m="3154100">the</span>
  <span m="3154320">r1,</span> <span m="3156090">and</span> <span
  m="3156210">indeed,</span> <span m="3156450">once</span> <span
  m="3156660">we</span> <span m="3156800">write</span> <span
  m="3156990">an</span> <span m="3157070">exponential,</span> <span
  m="3158140">we</span> <span m="3158240">don't</span> <span
  m="3158460">have</span> <span m="3158750">to</span> <span
  m="3159060">write</span> <span m="3159810">delta</span> <span
  m="3160220">t.</span> <span m="3160330">This</span> <span
  m="3160490">is</span> <span m="3160570">just</span> <span
  m="3160740">some</span> <span m="3160920">time</span> <span
  m="3161250">t.</span> <span m="3163580">For</span> <span
  m="3163680">this</span> <span m="3163880">to be true</span> <span
  m="3164260">requires</span> <span m="3164630">a delta t</span> <span
  m="3164890">is</span> <span m="3165100">very</span> <span
  m="3165270">small.</span> <span m="3166830">But</span> <span
  m="3167310">if</span> <span m="3167510">we</span> <span
  m="3167630">want</span> <span m="3167820">to</span> <span
  m="3167880">just</span> <span m="3168050">ask,</span> <span
  m="3168880">what's</span> <span m="3169060">the</span> <span
  m="3169160">probability</span> <span m="3170000">that</span> <span
  m="3170710">reaction</span> <span m="3171100">1</span> <span
  m="3171380">has</span> <span m="3171620">not</span> <span
  m="3171810">happened</span> <span m="3172130">in some time</span> <span
  m="3172360">t,</span> <span m="3172590">this</span> <span
  m="3172760">actually</span> <span m="3173100">is,</span> <span
  m="3173310">indeed,</span> <span m="3173620">precisely</span> <span
  m="3174050">equal</span> <span m="3174260">to</span> <span m="3174400">e to
  the</span> <span m="3174870">r1t.</span> <span m="3180500">Yeah,</span> <span
  m="3180630">details.</span></p><p><span m="3186080">And this</span> <span
  m="3186240">is e to the</span> <span m="3186500">minus</span> <span
  m="3186760">r2t</span> <span m="3188380">dot</span> <span
  m="3188550">dot</span> <span m="3188690">dot</span> <span
  m="3190670">minus.</span> <span m="3191890">And</span> <span
  m="3192500">we</span> <span m="3192700">go</span> <span m="3192890">up
  to</span> <span m="3193020">n,</span> <span m="3193480">r to the nt,</span>
  <span m="3196400">because</span> <span m="3196640">each</span> <span
  m="3196860">of</span> <span m="3196930">those</span> <span
  m="3197550">chemical</span> <span m="3197850">reactions</span> <span
  m="3198240">are</span> <span m="3198270">going</span> <span
  m="3198350">to</span> <span m="3198390">be</span> <span
  m="3198440">exponentially</span> <span m="3198950">distributed</span> <span
  m="3199500">in</span> <span m="3199920">terms</span> <span
  m="3200140">of</span> <span m="3200250">how</span> <span
  m="3200460">long</span> <span m="3200740">you have to</span> <span
  m="3200840">wait</span> <span m="3201030">for</span> <span
  m="3201130">them</span> <span m="3201260">to</span> <span
  m="3201300">happen.</span></p><p><span m="3206090">And</span> <span
  m="3206330">what's</span> <span m="3206770">neat</span> <span
  m="3206930">about</span> <span m="3207110">this</span> <span
  m="3207310">is</span> <span m="3207430">that</span> <span
  m="3207630">this</span> <span m="3208610">means</span> <span
  m="3208870">that</span> <span m="3209050">if</span> <span
  m="3209170">you</span> <span m="3209280">just</span> <span
  m="3209530">ask</span> <span m="3210640">about</span> <span
  m="3210910">the</span> <span m="3210990">probability</span> <span
  m="3211440">distribution</span> <span m="3212930">for</span> <span
  m="3217570">all</span> <span m="3217800">of</span> <span
  m="3217870">them</span> <span m="3218010">combined</span> <span
  m="3218640">by</span> <span m="3218780">saying</span> <span
  m="3219130">that</span> <span m="3219280">none</span> <span
  m="3219450">of</span> <span m="3219530">them</span> <span
  m="3219640">have</span> <span m="3219950">happened,</span> <span
  m="3220480">this</span> <span m="3220750">is</span> <span
  m="3220900">actually</span> <span m="3221130">just</span> <span
  m="3221290">equal</span> <span m="3221530">to</span> <span
  m="3222320">the</span> <span m="3222460">exponent</span> <span
  m="3223470">of</span> <span m="3223940">minus--</span> <span
  m="3224920">now</span> <span m="3225570">we</span> <span
  m="3225710">might</span> <span m="3225930">pull the</span> <span
  m="3226080">t</span> <span m="3226970">out</span> <span m="3227260">and</span>
  <span m="3227400">we</span> <span m="3227480">just</span> <span
  m="3227780">sum</span> <span m="3228110">over</span> <span
  m="3228350">ri.</span></p><p><span m="3234130">So this</span> <span
  m="3234300">is</span> <span m="3234980">actually,</span> <span
  m="3235510">somehow,</span> <span m="3235860">a</span> <span
  m="3235920">little</span> <span m="3236110">bit</span> <span
  m="3236260">surprising,</span> <span m="3236880">which</span> <span
  m="3237060">is</span> <span m="3237170">that</span> <span
  m="3238310">each</span> <span m="3238530">of</span> <span
  m="3238600">those</span> <span m="3238780">chemical</span> <span
  m="3239120">reactions</span> <span m="3240050">occur, and</span> <span
  m="3240380">they're</span> <span m="3240600">occurring at</span> <span
  m="3240940">different</span> <span m="3241140">rates.</span> <span
  m="3241300">Some of them</span> <span m="3241560">might</span> <span
  m="3241700">be</span> <span m="3241790">fast,</span> <span m="3242200">some of
  them</span> <span m="3242260">might</span> <span m="3242460">be</span> <span
  m="3242530">slow.</span> <span m="3243160">The</span> <span
  m="3243300">ri's</span> <span m="3243850">can</span> <span
  m="3243930">be</span> <span m="3244290">different</span> <span
  m="3244390">by</span> <span m="3245780">orders</span> <span
  m="3246080">of</span> <span m="3246140">magnitude.</span> <span
  m="3248470">But</span> <span m="3248630">still,</span> <span
  m="3249590">over</span> <span m="3249850">these</span> <span
  m="3250100">hundreds</span> <span m="3250690">of</span> <span
  m="3250780">chemical</span> <span m="3251035">reactions,</span> <span
  m="3251460">if</span> <span m="3251960">the</span> <span
  m="3252200">only</span> <span m="3252560">thing you</span> <span
  m="3252720">want to know</span> <span m="3252750">is,</span> <span
  m="3252860">oh,</span> <span m="3253020">what's</span> <span
  m="3253160">the</span> <span m="3253240">probability</span> <span
  m="3253680">that</span> <span m="3254240">none</span> <span
  m="3254450">of</span> <span m="3254490">them</span> <span
  m="3254670">have</span> <span m="3254890">happened,</span> <span
  m="3255430">that</span> <span m="3255610">is</span> <span
  m="3255710">also</span> <span m="3256030">going</span> <span
  m="3256150">to</span> <span m="3256310">end</span> <span
  m="3256480">up--</span> <span m="3257640">that's</span> <span
  m="3257860">going</span> <span m="3257940">to</span> <span
  m="3257990">decay</span> <span m="3258280">exponentially.</span></p><p><span
  m="3261470">And</span> <span m="3261530">this</span> <span
  m="3261670">actually</span> <span m="3261900">tells</span> <span
  m="3262140">us</span> <span m="3262240">something</span> <span
  m="3262490">very</span> <span m="3262700">interesting,</span> <span
  m="3263130">which</span> <span m="3263140">is</span> <span
  m="3263240">that</span> <span m="3263360">if</span> <span
  m="3263460">we</span> <span m="3263560">want</span> <span
  m="3263720">to</span> <span m="3263760">know</span> <span
  m="3264660">the</span> <span m="3264760">distribution</span> <span
  m="3265410">of</span> <span m="3265490">times</span> <span
  m="3266470">for</span> <span m="3266825">the</span> <span
  m="3267180">first</span> <span m="3267750">thing</span> <span
  m="3267990">to</span> <span m="3268060">happen,</span> <span
  m="3269200">that's</span> <span m="3269450">also</span> <span
  m="3269810">going</span> <span m="3269920">to</span> <span
  m="3269990">be</span> <span m="3270600">exponentially</span> <span
  m="3270910">distributed.</span> <span m="3274480">And</span> <span
  m="3274770">it's</span> <span m="3274930">just</span> <span
  m="3275100">exponentially</span> <span m="3275500">distributed</span> <span
  m="3275920">with</span> <span m="3276060">a</span> <span
  m="3276150">rate</span> <span m="3276420">that</span> <span
  m="3276690">is</span> <span m="3277200">given</span> <span
  m="3277470">by</span> <span m="3277560">the</span> <span
  m="3277660">sum</span> <span m="3279150">of</span> <span
  m="3279250">these</span> <span m="3279710">rates.</span> <span
  m="3280980">Now</span> <span m="3281710">that's</span> <span
  m="3282050">the</span> <span m="3282140">basic</span> <span
  m="3282740">insight</span> <span m="3283230">behind</span> <span
  m="3283720">this</span> <span m="3283790">GIllespie</span> <span
  m="3284130">algorithm,</span> <span m="3285960">where</span> <span
  m="3286700">instead</span> <span m="3287270">of</span> <span
  m="3287570">dividing</span> <span m="3288110">things</span> <span
  m="3288400">up</span> <span m="3288560">into</span> <span m="3288750">a</span>
  <span m="3288850">bunch</span> <span m="3289080">of little</span> <span
  m="3289160">times</span> <span m="3289920">delta</span> <span
  m="3290160">t,</span> <span m="3291180">instead</span> <span m="3291590">what
  you</span> <span m="3291770">do</span> <span m="3291920">is</span> <span
  m="3292010">you</span> <span m="3292100">ask,</span> <span
  m="3293960">how</span> <span m="3294170">long</span> <span m="3294410">am
  I</span> <span m="3294430">going to</span> <span m="3294670">have</span> <span
  m="3294780">to</span> <span m="3294870">wait</span> <span
  m="3295200">before</span> <span m="3295330">the</span> <span
  m="3295430">first</span> <span m="3295710">thing</span> <span
  m="3295840">happens?</span> <span m="3298480">And</span> <span
  m="3298720">you</span> <span m="3298800">just</span> <span
  m="3299040">sample</span> <span m="3299470">from</span> <span
  m="3299600">an</span> <span m="3299670">exponential</span> <span
  m="3300300">with</span> <span m="3301440">this</span> <span
  m="3301660">rate</span> <span m="3301930">r</span> <span m="3302230">that
  is</span> <span m="3302410">the</span> <span m="3302500">sum</span> <span
  m="3302800">of</span> <span m="3302840">the</span> <span
  m="3302930">rates.</span></p><p><span m="3311920">Maybe</span> <span
  m="3312210">it's</span> <span m="3312320">even</span> <span
  m="3312490">worth</span> <span m="3312690">saying</span> <span
  m="3312950">that,</span> <span m="3313230">OK,</span> <span
  m="3313410">so</span> <span m="3313520">there's</span> <span
  m="3313720">the</span> <span m="3314310">naive</span> <span
  m="3314750">algorithm</span> <span m="3315150">where</span> <span
  m="3315260">you</span> <span m="3315310">just</span> <span
  m="3315450">divide</span> <span m="3315780">a bunch of</span> <span
  m="3315960">delta</span> <span m="3316190">t's,</span> <span
  m="3316480">you</span> <span m="3316610">just</span> <span
  m="3316770">take</span> <span m="3316960">a</span> <span
  m="3317010">little</span> <span m="3317180">steps,</span> <span
  m="3317610">you say,</span> <span m="3317830">OK,</span> <span
  m="3317950">nothing,</span> <span m="3318230">nothing,</span> <span
  m="3318490">nothing,</span> <span m="3318720">nothing,</span> <span
  m="3319180">and</span> <span m="3319240">then</span> <span
  m="3319320">eventually</span> <span m="3319610">something</span> <span
  m="3319800">happens,</span> <span m="3320250">and</span> <span
  m="3320330">then</span> <span m="3320420">you</span> <span
  m="3320540">update,</span> <span m="3320940">you</span> <span
  m="3321040">keep</span> <span m="3321170">on</span> <span
  m="3321240">going.</span></p><p><span m="3322030">There's</span> <span
  m="3322370">the</span> <span m="3322530">somewhat</span> <span
  m="3323070">less</span> <span m="3323980">naive</span> <span
  m="3324580">algorithm,</span> <span m="3326040">which</span> <span
  m="3326180">is</span> <span m="3326260">exact,</span> <span
  m="3327390">so</span> <span m="3327500">it's</span> <span
  m="3327630">not</span> <span m="3327810">the</span> <span
  m="3327860">same</span> <span m="3328090">concerns,</span> <span
  m="3329030">the</span> <span m="3329310">j hat</span> <span
  m="3329590">which</span> <span m="3329610">is</span> <span
  m="3329700">that</span> <span m="3330150">you</span> <span
  m="3330290">could</span> <span m="3330500">just</span> <span
  m="3331340">sample</span> <span m="3331860">from</span> <span
  m="3332230">n</span> <span m="3332550">different</span> <span
  m="3332850">exponentials,</span> <span m="3334840">each</span> <span
  m="3335030">with</span> <span m="3335120">their</span> <span
  m="3335280">own</span> <span m="3335420">rates,</span> <span
  m="3336200">and</span> <span m="3336310">then</span> <span
  m="3336400">just</span> <span m="3336530">take</span> <span
  m="3336680">the</span> <span m="3336770">minimum</span> <span m="3337200">of
  them</span> <span m="3338490">and say,</span> <span m="3338630">OK,</span>
  <span m="3338800">that's</span> <span m="3339040">the</span> <span
  m="3339760">that</span> <span m="3339900">happened</span> <span
  m="3340200">first,</span> <span m="3341330">and</span> <span
  m="3341490">then</span> <span m="3342000">update</span> <span m="3342300">from
  that.</span> <span m="3342420">And</span> <span m="3342540">that's</span>
  <span m="3342710">an</span> <span m="3342780">exact</span> <span
  m="3343220">algorithm.</span></p><p><span m="3344310">But</span> <span
  m="3344460">the</span> <span m="3344550">problem is</span> <span
  m="3344850">that</span> <span m="3344970">you</span> <span
  m="3345040">have</span> <span m="3345240">to</span> <span
  m="3346030">sample</span> <span m="3346400">from</span> <span
  m="3347130">possibly</span> <span m="3347480">many</span> <span
  m="3347820">different</span> <span m="3348140">exponentials.</span> <span
  m="3349790">And</span> <span m="3350470">that's</span> <span
  m="3350660">not</span> <span m="3350800">a</span> <span
  m="3350820">disaster,</span> <span m="3351280">but</span> <span
  m="3351390">again,</span> <span m="3351680">it's</span> <span
  m="3351890">computationally</span> <span m="3352650">slow.</span> <span
  m="3353000">So</span> <span m="3353120">the</span> <span
  m="3353210">Gillespie</span> <span m="3353630">algorithm</span> <span
  m="3355340">removes</span> <span m="3355860">the</span> <span
  m="3355940">requirement</span> <span m="3356580">to</span> <span
  m="3356930">from</span> <span m="3357050">those</span> <span
  m="3357210">n</span> <span m="3357300">exponentials,</span> <span
  m="3357800">because</span> <span m="3358520">instead</span> <span
  m="3358970">what</span> <span m="3359200">you</span> <span
  m="3359470">do</span> <span m="3359620">is</span> <span m="3359710">you</span>
  <span m="3359810">just</span> <span m="3360040">say,</span> <span
  m="3362720">the</span> <span m="3363450">numbers,</span> <span
  m="3363930">or</span> <span m="3363960">the</span> <span
  m="3364040">concentrations,</span> <span m="3365780">give</span> <span
  m="3367610">all</span> <span m="3367930">of</span> <span
  m="3370710">the</span> <span m="3370930">ri,</span> <span
  m="3372650">give</span> <span m="3372790">you</span> <span
  m="3372920">all</span> <span m="3373030">the</span> <span
  m="3373120">rates.</span></p><p><span m="3381290">And</span> <span
  m="3381380">then</span> <span m="3381550">what</span> <span
  m="3381700">you</span> <span m="3381800">do</span> <span m="3381920">is</span>
  <span m="3382020">you</span> <span m="3382620">sample</span> <span
  m="3384640">from</span> <span m="3385770">an</span> <span
  m="3386100">exponential</span> <span m="3389500">with</span> <span
  m="3389770">rate</span> <span m="3393540">r,</span> <span
  m="3393980">which</span> <span m="3394120">is</span> <span
  m="3394990">the</span> <span m="3395110">sum</span> <span
  m="3395530">over</span> <span m="3395720">all</span> <span
  m="3395880">the</span> <span m="3395960">ri.</span> <span
  m="3397770">That</span> <span m="3397900">tells</span> <span
  m="3398090">you,</span> <span m="3398880">when</span> <span
  m="3399100">is</span> <span m="3399190">the</span> <span
  m="3399280">first</span> <span m="3399610">reaction</span> <span
  m="3400100">going to</span> <span m="3400170">occur.</span> <span
  m="3404020">And</span> <span m="3404060">then</span> <span
  m="3404230">what</span> <span m="3404370">you</span> <span
  m="3404450">do</span> <span m="3404610">is</span> <span m="3404730">you
  ask,</span> <span m="3404800">well,</span> <span m="3405150">which</span>
  <span m="3405320">reaction</span> <span m="3405740">did</span> <span
  m="3405980">occur?</span> <span m="3407450">Because</span> <span
  m="3407630">you</span> <span m="3407750">actually</span> <span
  m="3407970">don't</span> <span m="3408540">know</span> <span
  m="3409160">that</span> <span m="3409840">yet.</span> <span
  m="3411990">And</span> <span m="3412730">there,</span> <span
  m="3413190">it's</span> <span m="3413320">just</span> <span
  m="3413500">the</span> <span m="3413600">probabilities</span> <span
  m="3414390">of</span> <span m="3414500">each</span> <span
  m="3414700">of</span> <span m="3414760">them.</span> <span
  m="3415180">So</span> <span m="3415310">the</span> <span
  m="3415650">probabilities</span> <span m="3416750">Pi</span> <span
  m="3417170">is</span> <span m="3417300">just</span> <span
  m="3417440">going</span> <span m="3417530">to</span> <span
  m="3417570">be</span> <span m="3418100">the</span> <span m="3418320">ri</span>
  <span m="3418990">divided</span> <span m="3419430">by</span> <span
  m="3419800">the</span> <span m="3419880">sum</span> <span
  m="3420150">over</span> <span m="3420380">the</span> <span
  m="3420850">ri,</span> <span m="3421030">so this</span> <span
  m="3421230">big</span> <span m="3421390">R.</span></p><p><span
  m="3426440">So</span> <span m="3426590">it</span> <span m="3426800">may be
  that</span> <span m="3427100">you</span> <span m="3427430">had</span> <span
  m="3427950">300</span> <span m="3428460">possible</span> <span
  m="3428800">chemical</span> <span m="3429120">reactions,</span> <span
  m="3430150">but</span> <span m="3430250">you</span> <span
  m="3430350">only</span> <span m="3430480">have</span> <span
  m="3430570">to</span> <span m="3430680">do</span> <span m="3431030">two</span>
  <span m="3431460">things</span> <span m="3431760">here.</span> <span
  m="3432030">And</span> <span m="3432180">they're both</span> <span
  m="3432380">kind</span> <span m="3432490">of</span> <span
  m="3432540">simple,</span> <span m="3432840">right?</span> <span
  m="3433020">You</span> <span m="3433090">sample</span> <span
  m="3433760">from</span> <span m="3433990">one</span> <span
  m="3434150">exponential,</span> <span m="3434740">gives</span> <span
  m="3434880">you</span> <span m="3434950">how</span> <span
  m="3435080">long</span> <span m="3435410">you had to</span> <span
  m="3435560">wait</span> <span m="3436220">for</span> <span
  m="3436350">something</span> <span m="3436580">to</span> <span
  m="3436620">happen.</span> <span m="3437680">And</span> <span
  m="3437730">then</span> <span m="3437860">you</span> <span
  m="3437970">just</span> <span m="3438620">sample</span> <span
  m="3439000">from</span> <span m="3439140">another</span> <span
  m="3439690">simple</span> <span m="3439930">probability thing</span> <span
  m="3440400">here</span> <span m="3440580">that just</span> <span
  m="3440800">tells</span> <span m="3441040">you</span> <span
  m="3441760">which</span> <span m="3442240">of</span> <span
  m="3442300">the</span> <span m="3443530">n</span> <span
  m="3444600">possible</span> <span m="3445060">chemical</span> <span
  m="3445230">reactions</span> <span m="3445930">was</span> <span m="3446160">it
  that</span> <span m="3446340">actually</span> <span
  m="3446860">occurred.</span> <span m="3447400">And of</span> <span
  m="3447480">course,</span> <span m="3448130">the</span> <span
  m="3448650">chemical</span> <span m="3448990">reactions</span> <span
  m="3449340">that</span> <span m="3449560">were</span> <span
  m="3449980">occurring</span> <span m="3450280">at</span> <span
  m="3450350">a</span> <span m="3450400">faster</span> <span
  m="3450830">rate</span> <span m="3450900">have</span> <span
  m="3451000">a</span> <span m="3451040">higher</span> <span
  m="3451340">probability</span> <span m="3452030">of</span> <span
  m="3452280">being</span> <span m="3452490">chosen.</span></p><p><span
  m="3454560">So</span> <span m="3454660">this</span> <span
  m="3454760">actually</span> <span m="3455080">is</span> <span
  m="3455230">an</span> <span m="3455430">exact</span> <span
  m="3455980">procedure</span> <span m="3456990">in</span> <span
  m="3457060">the</span> <span m="3457120">sense</span> <span
  m="3457370">that</span> <span m="3457470">there's</span> <span
  m="3457690">no</span> <span m="3460730">digitization</span> <span
  m="3461270">of</span> <span m="3461340">time</span> <span
  m="3462220">or</span> <span m="3462370">anything</span> <span m="3462620">of
  the</span> <span m="3462680">sort.</span> <span m="3463340">So</span> <span
  m="3463410">this</span> <span m="3463590">actually</span> <span
  m="3464010">is</span> <span m="3465250">computationally</span> <span
  m="3466620">efficient</span> <span m="3467330">and</span> <span
  m="3467970">is</span> <span m="3468320">exact,</span> <span
  m="3469580">assuming</span> <span m="3469810">that</span> <span
  m="3470960">your</span> <span m="3471170">description</span> <span
  m="3471660">of the</span> <span m="3471800">chemical</span> <span
  m="3472080">reactions</span> <span m="3472450">was</span> <span
  m="3472580">accurate</span> <span m="3473000">to begin
  with.</span></p><p><span m="3475510">So</span> <span m="3475590">then</span>
  <span m="3475750">what</span> <span m="3475840">we</span> <span
  m="3475930">do</span> <span m="3476030">is</span> <span m="3476160">we</span>
  <span m="3476260">update</span> <span m="3476740">time.</span> <span
  m="3480820">This</span> <span m="3481160">is</span> <span
  m="3481290">in</span> <span m="3481390">some</span> <span
  m="3481670">ways--</span> <span m="3482710">when</span> <span
  m="3482850">you</span> <span m="3482910">do</span> <span
  m="3483070">computations,</span> <span m="3484150">when</span> <span
  m="3484320">you</span> <span m="3484530">actually</span> <span
  m="3484780">do</span> <span m="3484900">simulations--</span> <span
  m="3485370">this</span> <span m="3485530">is</span> <span
  m="3485630">maybe</span> <span m="3485880">the</span> <span
  m="3486060">annoying</span> <span m="3486480">part</span> <span
  m="3487130">about</span> <span m="3487360">the</span> <span
  m="3487420">Gillespie</span> <span m="3487760">algorithm,</span> <span
  m="3488110">which</span> <span m="3488240">is</span> <span
  m="3488340">that</span> <span m="3488830">now</span> <span
  m="3489120">your</span> <span m="3489290">times</span> <span
  m="3489790">are</span> <span m="3489840">not</span> <span
  m="3490020">equally</span> <span m="3490300">spaced,</span> <span
  m="3490800">and</span> <span m="3490910">so</span> <span
  m="3491010">then</span> <span m="3491570">you</span> <span
  m="3491710">just</span> <span m="3491850">have</span> <span
  m="3491970">to</span> <span m="3492180">make</span> <span
  m="3492420">sure</span> <span m="3492630">you</span> <span
  m="3493520">remember</span> <span m="3493820">that,</span> <span
  m="3494040">you</span> <span m="3494120">don't</span> <span
  m="3494560">plot</span> <span m="3494810">something</span> <span
  m="3495030">that's</span> <span m="3495190">incorrect.</span> <span
  m="3496150">Because</span> <span m="3496760">your</span> <span
  m="3496870">times</span> <span m="3497280">are</span> <span
  m="3497330">going</span> <span m="3497420">to</span> <span
  m="3497460">hop</span> <span m="3500200">at</span> <span
  m="3500380">different</span> <span m="3500810">time</span> <span
  m="3501250">intervals.</span> <span m="3502700">But</span> <span
  m="3503150">that's</span> <span m="3503350">doable.</span> <span
  m="3504100">You</span> <span m="3504220">have</span> <span
  m="3504420">to</span> <span m="3504530">update</span> <span
  m="3504610">your</span> <span m="3504740">time</span> <span
  m="3505080">and</span> <span m="3505290">you have to</span> <span
  m="3505460">update</span> <span m="3505760">your</span> <span
  m="3507230">abundances.</span> <span m="3509300">And</span> <span
  m="3509450">then</span> <span m="3510120">what</span> <span
  m="3510230">you</span> <span m="3510290">do</span> <span m="3510500">is</span>
  <span m="3512020">repeat.</span></p><p><span m="3517880">I</span> <span
  m="3517960">think</span> <span m="3518140">the</span> <span
  m="3518410">notes</span> <span m="3518730">kind</span> <span
  m="3518920">of</span> <span m="3519020">allude</span> <span
  m="3519410">to</span> <span m="3519480">this</span> <span
  m="3519640">Gillespie</span> <span m="3519950">algorithm</span> <span
  m="3520250">but</span> <span m="3521020">are</span> <span
  m="3521130">not</span> <span m="3521320">quite</span> <span
  m="3521680">explicit</span> <span m="3522160">about</span> <span
  m="3523230">what</span> <span m="3523410">you</span> <span
  m="3523500">actually</span> <span m="3523790">do</span> <span
  m="3525450">to</span> <span m="3525570">go</span> <span
  m="3525690">through</span> <span m="3525810">this</span> <span
  m="3525940">process.</span> <span m="3527350">For</span> <span
  m="3527450">the</span> <span m="3527530">simulations</span> <span
  m="3528070">that</span> <span m="3528180">you're</span> <span
  m="3528320">going</span> <span m="3528410">to</span> <span
  m="3528460">do</span> <span m="3528600">in</span> <span
  m="3528680">this</span> <span m="3528870">class,</span> <span
  m="3529690">I</span> <span m="3529800">would</span> <span
  m="3529960">say</span> <span m="3530160">that</span> <span
  m="3533770">you</span> <span m="3534110">don't get</span> <span
  m="3534470">the</span> <span m="3534540">full</span> <span
  m="3534740">benefits</span> <span m="3535210">of</span> <span
  m="3535270">the</span> <span m="3535340">Gillespie</span> <span m="3535720">in
  the sense</span> <span m="3536050">that</span> <span m="3536290">you're</span>
  <span m="3536430">not</span> <span m="3536660">going</span> <span
  m="3536740">to</span> <span m="3536780">be</span> <span
  m="3536860">simulating</span> <span m="3537640">hundreds</span> <span
  m="3538120">of</span> <span m="3538420">differential</span> <span
  m="3538790">equations</span> <span m="3539540">with</span> <span
  m="3539690">hundreds</span> <span m="3540020">of</span> <span
  m="3540070">different</span> <span m="3540650">things.</span> <span
  m="3541820">But</span> <span m="3542080">it's</span> <span
  m="3542460">in</span> <span m="3542560">those</span> <span
  m="3542740">complicated</span> <span m="3544390">models</span> <span
  m="3544820">that</span> <span m="3544910">you</span> <span
  m="3545100">really</span> <span m="3545370">have</span> <span
  m="3545640">to</span> <span m="3545770">do</span> <span
  m="3546180">this</span> <span m="3546350">kind</span> <span
  m="3546470">of</span> <span m="3546520">Gillespie</span> <span
  m="3546890">approach,</span> <span m="3547470">as</span> <span
  m="3547690">compared</span> <span m="3548060">to</span> <span
  m="3548180">even</span> <span m="3548450">this</span> <span
  m="3549010">somewhat</span> <span m="3551060">better</span> <span
  m="3551350">model,</span> <span m="3551560">which</span> <span
  m="3551700">is</span> <span m="3551820">you sample</span> <span
  m="3552090">from the different</span> <span
  m="3552360">exponentials.</span></p><p><span m="3556230">Are</span> <span
  m="3556320">there</span> <span m="3556410">any</span> <span
  m="3556470">questions</span> <span m="3556810">about</span> <span
  m="3557050">why</span> <span m="3557260">this</span> <span
  m="3557460">might</span> <span m="3557680">work,</span> <span
  m="3558270">why</span> <span m="3558330">you</span> <span
  m="3558470">might</span> <span m="3558660">want</span> <span
  m="3558790">to</span> <span m="3558870">do</span> <span m="3559140">it?</span>
  <span m="3560240">Yes.</span></p><p><span m="3560990">AUDIENCE: What do you
  mean</span> <span m="3561480">by sample</span> <span m="3561970">the</span>
  <span m="3562460">exponentials?</span></p><p><span m="3563930">PROFESSOR:
  Right.</span> <span m="3566000">What</span> <span m="3566170">I</span> <span
  m="3566230">mean</span> <span m="3566530">is</span> <span
  m="3566960">that</span> <span m="3567320">you</span> <span
  m="3568430">go</span> <span m="3568570">to</span> <span
  m="3568640">Matlab</span> <span m="3569220">and</span> <span
  m="3569290">you</span> <span m="3569390">say,</span> <span
  m="3570670">random--</span> <span m="3573330">I'm</span> <span
  m="3573460">sort</span> <span m="3573690">of</span> <span
  m="3573750">serious,</span> <span m="3574190">but--</span> <span
  m="3580330">sorry,</span> <span m="3580730">I'm</span> <span
  m="3580850">trying</span> <span m="3581080">to</span> <span
  m="3581130">get</span> <span m="3581270">a new--</span> <span m="3583000">All
  right.</span> <span m="3583270">So</span> <span m="3583700">you</span> <span
  m="3584420">the</span> <span m="3584560">exponential.</span> <span
  m="3586170">So</span> <span m="3586300">it's</span> <span m="3586720">a</span>
  <span m="3586790">probability</span> <span m="3587490">distribution.</span>
  <span m="3589460">So</span> <span m="3589660">this</span> <span
  m="3589870">is</span> <span m="3590460">the</span> <span
  m="3590570">probability</span> <span m="3591360">is</span> <span
  m="3591500">a</span> <span m="3591550">function</span> <span
  m="3591840">of</span> <span m="3591910">time</span> <span
  m="3594010">and</span> <span m="3594090">then</span> <span
  m="3594440">t.</span> <span m="3596530">And</span> <span
  m="3597540">it's</span> <span m="3597750">going</span> <span
  m="3597850">to</span> <span m="3597910">look</span> <span
  m="3598090">something</span> <span m="3598310">like</span> <span
  m="3598470">this.</span> <span m="3601500">This thing</span> <span
  m="3601750">is</span> <span m="3601960">going</span> <span
  m="3602070">to</span> <span m="3602130">be</span> <span
  m="3602420">some--</span> <span m="3604720">given</span> <span
  m="3604900">that,</span> <span m="3605320">in</span> <span
  m="3605420">general,</span> <span m="3605740">it's</span> <span
  m="3605840">going</span> <span m="3605940">to</span> <span
  m="3606000">be</span> <span m="3606730">the</span> <span
  m="3606860">probability</span> <span m="3608080">t</span> <span
  m="3608520">is</span> <span m="3608670">going</span> <span
  m="3608780">to</span> <span m="3608840">be</span> <span m="3609760">e</span>
  <span m="3610650">to</span> <span m="3610770">the minus</span> <span
  m="3611780">rt.</span> <span m="3613750">And</span> <span m="3613970">then
  do</span> <span m="3614290">I</span> <span m="3614410">put</span> <span
  m="3614600">r</span> <span m="3614830">here</span> <span m="3615140">or
  do</span> <span m="3615240">I put</span> <span m="3615340">1</span> <span
  m="3615500">over</span> <span m="3615680">r?</span></p><p><span
  m="3616878">AUDIENCE: [INAUDIBLE]</span></p><p><span m="3619298">PROFESSOR: Is
  it 1 over r?</span> <span m="3623820">Well,</span> <span
  m="3624440">what</span> <span m="3624670">should</span> <span
  m="3624950">be</span> <span m="3625010">the</span> <span
  m="3625140">units</span> <span m="3625710">of</span> <span
  m="3625820">a</span> <span m="3625870">probability</span> <span
  m="3626250">distribution?</span> <span m="3630300">1</span> <span
  m="3630470">over</span> <span m="3630600">time,</span> <span
  m="3630860">in</span> <span m="3630930">this case.</span> <span
  m="3631400">It's 1</span> <span m="3631630">over</span> <span
  m="3631840">whatever's</span> <span m="3632200">on</span> <span
  m="3632310">this</span> <span m="3632500">x-axis,</span> <span
  m="3633120">because</span> <span m="3633770">if</span> <span
  m="3633870">you</span> <span m="3633960">want</span> <span
  m="3634110">to</span> <span m="3634150">get</span> <span
  m="3634290">the</span> <span m="3634500">actual,</span> <span
  m="3634990">honest</span> <span m="3635290">to</span> <span
  m="3635370">goodness</span> <span m="3635740">probability--</span> <span
  m="3636230">so</span> <span m="3636770">if you</span> <span m="3637000">want
  the</span> <span m="3637140">probability</span> <span m="3638200">that</span>
  <span m="3640150">t</span> <span m="3640590">is,</span> <span
  m="3640820">say,</span> <span m="3643700">between</span> <span
  m="3644590">t1</span> <span m="3646820">and</span> <span m="3647150">t1</span>
  <span m="3647740">plus</span> <span m="3648060">delta</span> <span
  m="3648330">t.</span> <span m="3651050">If you</span> <span
  m="3651150">want</span> <span m="3651280">an</span> <span
  m="3651380">actual</span> <span m="3651720">probability,</span> <span
  m="3652280">then</span> <span m="3652430">this</span> <span
  m="3652650">thing</span> <span m="3652820">is</span> <span
  m="3652900">equal</span> <span m="3653150">to</span> <span
  m="3654960">the</span> <span m="3655140">probability</span> <span
  m="3655640">density</span> <span m="3657280">at</span> <span
  m="3658530">t1,</span> <span m="3659090">in</span> <span
  m="3659180">this</span> <span m="3659330">case,</span> <span
  m="3661090">times</span> <span m="3661540">delta</span> <span
  m="3661800">t.</span> <span m="3666240">So</span> <span m="3666540">that
  means</span> <span m="3666770">thing</span> <span m="3666930">has</span> <span
  m="3667150">to</span> <span m="3667210">have</span> <span m="3667340">a</span>
  <span m="3667450">1</span> <span m="3667760">over</span> <span
  m="3668110">time,</span> <span m="3668530">and</span> <span
  m="3668590">that</span> <span m="3668740">gives</span> <span
  m="3668960">us</span> <span m="3669150">r</span> <span
  m="3669440">here.</span></p><p><span m="3674960">So</span> <span
  m="3675410">this</span> <span m="3675590">is</span> <span
  m="3675930">probability</span> <span m="3676210">density,</span> <span
  m="3676930">and</span> <span m="3677340">what</span> <span
  m="3677800">I'm</span> <span m="3677980">saying</span> <span
  m="3678370">is</span> <span m="3678480">that</span> <span m="3679220">when
  I</span> <span m="3679450">say</span> <span m="3679630">sample</span> <span
  m="3680150">from</span> <span m="3680310">this</span> <span
  m="3680440">probability</span> <span m="3680700">distribution,</span> <span
  m="3681590">what</span> <span m="3681720">it</span> <span
  m="3681780">means</span> <span m="3682060">is</span> <span
  m="3682210">that</span> <span m="3682440">it's</span> <span
  m="3682610">like</span> <span m="3682790">rolling</span> <span
  m="3683120">a</span> <span m="3683190">die,</span> <span m="3684470">but
  that</span> <span m="3684710">it's</span> <span m="3684860">a</span> <span
  m="3684920">biased</span> <span m="3685290">die</span> <span
  m="3685530">because</span> <span m="3686130">it's</span> <span
  m="3686340">continuous</span> <span m="3686810">thing</span> <span
  m="3687070">over</span> <span m="3687230">the</span> <span
  m="3687320">time.</span> <span m="3688460">But</span> <span
  m="3688610">just</span> <span m="3688770">like</span> <span
  m="3689320">when</span> <span m="3690500">you</span> <span m="3690540">have
  a</span> <span m="3690650">six-sided</span> <span m="3690990">die</span> <span
  m="3691190">and</span> <span m="3691270">I</span> <span
  m="3691300">say,</span> <span m="3691450">OK,</span> <span
  m="3692380">sample</span> <span m="3692790">from</span> <span
  m="3692950">the</span> <span m="3693020">die,</span> <span
  m="3693380">you're</span> <span m="3693520">playing</span> <span
  m="3693680">Monopoly,</span> <span m="3694450">you</span> <span
  m="3694860">throw</span> <span m="3695070">the</span> <span m="3695140">die
  and you</span> <span m="3695540">get</span> <span m="3696200">1,</span> <span
  m="3696400">2,</span> <span m="3696450">3,</span> <span m="3696610">4,</span>
  <span m="3696730">5,</span> <span m="3696870">6.</span> <span m="3697350">And
  you</span> <span m="3697490">do</span> <span m="3697580">that</span> <span
  m="3697720">over and over</span> <span m="3698020">again.</span></p><p><span
  m="3699150">Same</span> <span m="3699390">thing</span> <span
  m="3699500">here.</span> <span m="3699780">You</span> <span
  m="3699890">kind</span> <span m="3700030">of</span> <span
  m="3700590">roll</span> <span m="3700980">the</span> <span
  m="3701060">die</span> <span m="3702050">and</span> <span
  m="3702600">see</span> <span m="3702710">what</span> <span
  m="3702780">happens.</span> <span m="3703040">And</span> <span
  m="3703110">indeed,</span> <span m="3704490">you're</span> <span
  m="3704630">going</span> <span m="3704710">to</span> <span
  m="3704750">get</span> <span m="3704850">some</span> <span
  m="3704950">practice</span> <span m="3705360">with</span> <span
  m="3705440">probability</span> <span m="3705720">distributions</span> <span
  m="3706960">on</span> <span m="3707160">the</span> <span
  m="3707280">homework</span> <span m="3707580">that</span> <span
  m="3707890">you're</span> <span m="3708010">doing</span> <span
  m="3708240">right</span> <span m="3708460">now</span> <span
  m="3708730">because</span> <span m="3710000">you're</span> <span
  m="3710420">asked</span> <span m="3710640">to</span> <span
  m="3710950">demonstrate</span> <span m="3711680">that</span> <span
  m="3712770">you</span> <span m="3712910">can</span> <span
  m="3713000">sample</span> <span m="3713540">from</span> <span
  m="3713710">a</span> <span m="3713760">uniform</span> <span
  m="3714240">distribution,</span> <span m="3715490">which</span> <span
  m="3715660">something that's</span> <span m="3716050">just</span> <span
  m="3716410">equally</span> <span m="3716790">probable</span> <span
  m="3717150">across</span> <span m="3717440">the</span> <span
  m="3717540">unit</span> <span m="3718910">line,</span> <span
  m="3719430">and</span> <span m="3719910">do</span> <span m="3720000">a</span>
  <span m="3720040">transformation</span> <span m="3720570">and</span> <span
  m="3720690">get</span> <span m="3720930">an</span> <span
  m="3721040">exponential</span> <span
  m="3721510">distribution.</span></p><p><span m="3723080">And</span> <span
  m="3723220">it</span> <span m="3723290">used</span> <span
  m="3723510">to</span> <span m="3723570">be</span> <span
  m="3723760">that</span> <span m="3724390">everybody</span> <span
  m="3724820">knew</span> <span m="3725090">all</span> <span
  m="3725220">these</span> <span m="3725390">tricks</span> <span
  m="3725710">because</span> <span m="3725950">you</span> <span
  m="3726070">had</span> <span m="3726230">to</span> <span
  m="3726300">kind</span> <span m="3726450">of</span> <span
  m="3726750">know</span> <span m="3726990">them</span> <span
  m="3727260">in</span> <span m="3727390">order</span> <span
  m="3727590">to</span> <span m="3727870">do</span> <span
  m="3728070">computation.</span> <span m="3729280">But</span> <span
  m="3729650">now,</span> <span m="3730750">Matlab,</span> <span
  m="3731310">or</span> <span m="3731400">whatever</span> <span
  m="3731620">program</span> <span m="3731870">you</span> <span
  m="3731950">use,</span> <span m="3732200">they</span> <span
  m="3732310">know</span> <span m="3732510">all</span> <span
  m="3732620">the</span> <span m="3732700">tricks,</span> <span
  m="3732940">so</span> <span m="3733040">you</span> <span
  m="3733190">just</span> <span m="3733740">ask</span> <span
  m="3734000">it</span> <span m="3734060">to</span> <span
  m="3734170">sample</span> <span m="3734540">from an</span> <span
  m="3734710">exponential</span> <span m="3735240">with</span> <span
  m="3735380">this</span> <span m="3736690">property</span> <span
  m="3737005">and it</span> <span m="3737320">does</span> <span
  m="3737510">it</span> <span m="3737650">for</span> <span
  m="3737870">you.</span> <span m="3738660">But</span> <span
  m="3738830">you</span> <span m="3738910">still</span> <span
  m="3739080">need</span> <span m="3739260">to know</span> <span
  m="3739340">what</span> <span m="3739440">it's</span> <span
  m="3739550">doing.</span></p><p><span m="3743100">So</span> <span
  m="3743310">just</span> <span m="3743510">to</span> <span
  m="3743570">be</span> <span m="3743660">clear,</span> <span
  m="3744170">what</span> <span m="3744380">is</span> <span
  m="3744530">the</span> <span m="3744680">most</span> <span
  m="3745610">likely</span> <span m="3747300">time</span> <span m="3747840">that
  you're</span> <span m="3748020">going</span> <span m="3748120">to</span> <span
  m="3748160">get</span> <span m="3748340">out</span> <span
  m="3748650">from</span> <span m="3748950">the</span> <span
  m="3749000">exponential?</span> <span m="3752790">0.</span> <span
  m="3755720">It has a</span> <span m="3755850">peak</span> <span
  m="3756100">here</span> <span m="3756360">but</span> <span
  m="3756500">the</span> <span m="3756570">mean</span> <span
  m="3756990">is</span> <span m="3757210">over</span> <span
  m="3757390">here.</span> <span m="3764190">Any</span> <span
  m="3764360">other</span> <span m="3764470">questions</span> <span
  m="3764820">about</span> <span m="3765720">how</span> <span
  m="3767640">the</span> <span m="3767920">Gillespie</span> <span
  m="3768020">algorithm</span> <span m="3768430">works?</span></p><p><span
  m="3774370">Can</span> <span m="3774540">somebody</span> <span
  m="3775560">tell</span> <span m="3775810">me</span> <span
  m="3776160">how</span> <span m="3776870">a</span> <span
  m="3776990">protein</span> <span m="3777520">burst</span> <span
  m="3778030">arises?</span> <span m="3779370">So</span> <span
  m="3779670">we</span> <span m="3779800">had</span> <span
  m="3779970">this</span> <span m="3780330">original</span> <span
  m="3780740">question</span> <span m="3781080">about</span> <span
  m="3781220">whether</span> <span m="3781580">there were</span> <span
  m="3781630">protein</span> <span m="3782050">bursts</span> <span
  m="3782480">in</span> <span m="3782560">that</span> <span
  m="3782700">model</span> <span m="3783000">that</span> <span
  m="3783100">I</span> <span m="3783140">wrote</span> <span
  m="3783330">down,</span> <span m="3784880">where</span> <span
  m="3784990">we</span> <span m="3785080">just</span> <span
  m="3785260">had</span> <span m="3786100">m dot</span> <span
  m="3786990">is</span> <span m="3787190">equal</span> <span
  m="3787350">to--</span></p><p><span m="3798840">Now</span> <span
  m="3801110">what</span> <span m="3801250">we</span> <span
  m="3801660">said</span> <span m="3802040">was</span> <span
  m="3802160">that</span> <span m="3802830">the</span> <span
  m="3802930">master</span> <span m="3803320">equation</span> <span
  m="3803730">would</span> <span m="3803910">not--</span> <span
  m="3804610">the</span> <span m="3804750">protein</span> <span
  m="3805090">burst would</span> <span m="3805430">somehow</span> <span
  m="3806800">be</span> <span m="3807280">there</span> <span
  m="3807480">are</span> <span m="3807630">but</span> <span m="3807740">you
  would</span> <span m="3807880">never</span> <span m="3808150">see</span> <span
  m="3808390">them,</span> <span m="3808950">or</span> <span
  m="3809310">somehow</span> <span m="3809500">the</span> <span
  m="3809540">protein</span> <span m="3809740">burst</span> <span
  m="3810020">would</span> <span m="3810160">influence</span> <span
  m="3810630">how</span> <span m="3811610">the</span> <span m="3811980">mean
  and</span> <span m="3812420">everything</span> <span m="3812900">have</span>
  <span m="3813350">evolved,</span> <span m="3813880">but</span> <span
  m="3813910">you</span> <span m="3814020">wouldn't</span> <span
  m="3814200">actually</span> <span m="3814380">see</span> <span
  m="3814570">any</span> <span m="3814730">big</span> <span
  m="3815090">jumps.</span> <span m="3815510">But</span> <span
  m="3815690">then</span> <span m="3815830">we</span> <span
  m="3815900">said,</span> <span m="3816040">oh,</span> <span
  m="3816200">but</span> <span m="3816290">if</span> <span
  m="3816340">you</span> <span m="3816430">did</span> <span m="3816690">a</span>
  <span m="3816750">stochastic</span> <span m="3817100">simulation,</span> <span
  m="3817490">you</span> <span m="3817600">would.</span> <span
  m="3818900">So</span> <span m="3819030">the</span> <span
  m="3819110">claim</span> <span m="3819410">here</span> <span
  m="3819650">is</span> <span m="3820180">that</span> <span
  m="3820680">the</span> <span m="3820780">Gillespie</span> <span
  m="3821180">algorithm,</span> <span m="3821910">what</span> <span
  m="3822040">I've</span> <span m="3822120">just</span> <span
  m="3822300">told</span> <span m="3822450">you</span> <span
  m="3822500">here,</span> <span m="3823200">will</span> <span
  m="3823870">lead</span> <span m="3824260">to</span> <span
  m="3824360">protein</span> <span m="3824700">bursts.</span> <span
  m="3827500">When</span> <span m="3828230">I</span> <span
  m="3828300">make</span> <span m="3828500">that</span> <span
  m="3828660">statement,</span> <span m="3828950">what</span> <span
  m="3829080">is</span> <span m="3829150">it that</span> <span m="3829290">I
  actually</span> <span m="3829570">mean?</span></p><p><span
  m="3834910">If</span> <span m="3835060">we</span> <span m="3835170">do</span>
  <span m="3835390">a</span> <span m="3835460">Gillespie</span> <span
  m="3835740">of</span> <span m="3836010">this,</span> <span
  m="3836780">will</span> <span m="3837090">the--</span> <span
  m="3837480">OK,</span> <span m="3837610">let's</span> <span
  m="3837850">just</span> <span m="3838260">hold</span> <span
  m="3838400">on.</span> <span m="3838590">Let</span> <span
  m="3839010">me</span> <span m="3839160">do</span> <span m="3839380">a</span>
  <span m="3839470">quick</span> <span m="3839680">vote.</span> <span
  m="3840360">Will</span> <span m="3840860">we</span> <span
  m="3841010">have</span> <span m="3841550">cases</span> <span
  m="3842010">where</span> <span m="3842810">delta</span> <span
  m="3843640">n</span> <span m="3844360">is</span> <span
  m="3844480">greater</span> <span m="3844780">than</span> <span
  m="3844990">1?</span> <span m="3847840">If</span> <span m="3848020">I</span>
  <span m="3848100">go</span> <span m="3848290">through</span> <span
  m="3848450">this</span> <span m="3848610">process,</span> <span
  m="3848865">if</span> <span m="3849120">I'm</span> <span
  m="3849240">using</span> <span m="3849460">the</span> <span
  m="3849520">Gillespie</span> <span m="3850090">and</span> <span
  m="3850680">I'm</span> <span m="3850840">tracking</span> <span
  m="3851270">how</span> <span m="3851870">mRNA</span> <span
  m="3852205">and</span> <span m="3852540">protein</span> <span
  m="3852830">number</span> <span m="3853080">are changing</span> <span
  m="3853240">over</span> <span m="3853390">time,</span> <span
  m="3854000">will</span> <span m="3854440">I</span> <span
  m="3854520">get</span> <span m="3855850">these</span> <span
  m="3856010">things,</span> <span m="3856220">protein</span> <span
  m="3856490">bursts,</span> <span m="3856980">where</span> <span
  m="3857580">delta</span> <span m="3857980">n</span> <span
  m="3858380">is</span> <span m="3858500">larger</span> <span
  m="3858780">than</span> <span m="3858980">1</span> <span m="3859500">in</span>
  <span m="3859640">one</span> <span m="3859790">of</span> <span
  m="3859830">these</span> <span m="3860230">time</span> <span
  m="3860520">cycles?</span></p><p><span m="3868460">Ready?</span> <span
  m="3869010">3,</span> <span m="3870670">2,</span> <span m="3871930">1.</span>
  <span m="3876510">So</span> <span m="3877150">most</span> <span
  m="3877580">of</span> <span m="3877620">the</span> <span
  m="3877700">group</span> <span m="3877930">is</span> <span
  m="3878040">saying</span> <span m="3879500">that it's going</span> <span
  m="3879700">to</span> <span m="3879810">be</span> <span m="3879910">no.</span>
  <span m="3880580">But</span> <span m="3882130">again,</span> <span
  m="3882480">it's</span> <span m="3883160">mixed.</span> <span
  m="3883770">So</span> <span m="3884260">can</span> <span
  m="3884370">somebody</span> <span m="3884620">say</span> <span
  m="3884810">why</span> <span m="3885670">we</span> <span
  m="3885820">don't</span> <span m="3886010">get--</span></p><p><span
  m="3887760">AUDIENCE: [INAUDIBLE]</span> <span m="3891050">It seems
  like</span> <span m="3891530">the</span> <span m="3892100">structure</span>
  <span m="3892910">of</span> <span m="3893320">the</span> <span
  m="3893420">simulation</span> <span m="3893850">is</span> <span
  m="3894280">to</span> <span m="3894747">make sure</span> <span
  m="3895214">[INAUDIBLE].</span></p><p><span m="3896150">PROFESSOR:
  That's</span> <span m="3896350">right.</span> <span m="3896760">Yeah.</span>
  <span m="3897140">So</span> <span m="3897290">the</span> <span
  m="3897370">simulation</span> <span m="3898650">as</span> <span
  m="3899120">written--</span> <span m="3899790">you</span> <span
  m="3899920">could</span> <span m="3900130">imagine</span> <span
  m="3901190">some</span> <span m="3901420">sort</span> <span
  m="3901560">of</span> <span m="3901640">phenomenological</span> <span
  m="3902870">version</span> <span m="3903330">of</span> <span
  m="3903410">this</span> <span m="3903590">where</span> <span
  m="3903710">you</span> <span m="3903850">allowed,</span> <span
  m="3904190">actually,</span> <span m="3904430">for</span> <span
  m="3904680">protein bursts.</span> <span m="3904880">But</span> <span
  m="3905640">as</span> <span m="3906060">kind</span> <span
  m="3906240">of</span> <span m="3906360">specified</span> <span
  m="3907140">is</span> <span m="3907250">that</span> <span
  m="3907550">we</span> <span m="3908010">ask,</span> <span
  m="3909300">what's</span> <span m="3909530">the</span> <span
  m="3909600">time</span> <span m="3909890">for</span> <span
  m="3910060">one</span> <span m="3910410">thing</span> <span
  m="3910640">to</span> <span m="3910710">happen?</span> <span
  m="3914870">But</span> <span m="3914990">the</span> <span
  m="3915070">claim</span> <span m="3915360">somehow</span> <span
  m="3915900">is,</span> <span m="3916290">OK,</span> <span
  m="3916520">well,</span> <span m="3916710">we</span> <span
  m="3916790">can</span> <span m="3916860">still</span> <span
  m="3917110">get</span> <span m="3917290">protein</span> <span
  m="3917660">bursts</span> <span m="3918120">from</span> <span
  m="3918300">this.</span> <span m="3918540">And</span> <span
  m="3919350">how</span> <span m="3919630">does that</span> <span
  m="3919910">happen?</span></p><p><span m="3924284">AUDIENCE: You can have the
  rate</span> <span m="3926228">for</span> <span m="3926714">something
  happening</span> <span m="3927200">increase  suddenly,</span> <span
  m="3927686">and that</span> <span m="3928172">would</span> <span
  m="3928658">happen if</span> <span m="3929144">we</span> <span m="3930475">go
  from</span> <span m="3932239">m equals</span> <span m="3932712">0</span> <span
  m="3933185">to m</span> <span m="3933658">equals</span> <span
  m="3934131">1--</span></p><p><span m="3934604">PROFESSOR: Yeah,</span> <span
  m="3935080">for</span> <span m="3935270">example,</span> <span
  m="3935950">if</span> <span m="3936060">we</span> <span
  m="3936180">didn't</span> <span m="3936420">have</span> <span
  m="3936560">an</span> <span m="3936640">mRNA</span> <span
  m="3936980">before</span> <span m="3937480">and we</span> <span
  m="3937560">got</span> <span m="3937780">an</span> <span
  m="3937870">mRNA.</span> <span m="3938610">What</span> <span
  m="3938750">it</span> <span m="3938810">means</span> <span
  m="3939080">that</span> <span m="3939240">if</span> <span
  m="3939300">you</span> <span m="3939430">look</span> <span
  m="3939620">at</span> <span m="3940090">n</span> <span m="3940340">as</span>
  <span m="3940440">a</span> <span m="3940500">function</span> <span
  m="3940760">of</span> <span m="3940830">time</span> <span
  m="3942920">during</span> <span m="3943330">one of</span> <span
  m="3943500">these</span> <span m="3943610">protein</span> <span
  m="3943820">bursts--</span> <span m="3945540">before,</span> <span
  m="3945930">I</span> <span m="3945980">was</span> <span
  m="3946090">drawing</span> <span m="3946280">it</span> <span
  m="3946330">just</span> <span m="3947050">hopping</span> <span
  m="3947350">up,</span> <span m="3947420">but</span> <span
  m="3947570">really,</span> <span m="3947860">in</span> <span
  m="3947950">the</span> <span m="3948000">context</span> <span
  m="3948340">of</span> <span m="3948390">the</span> <span
  m="3948460">Gillespie,</span> <span m="3948750">it</span> <span
  m="3948920">would</span> <span m="3949030">be</span> <span
  m="3949170">that</span> <span m="3949310">it</span> <span
  m="3949370">would</span> <span m="3949470">hop,</span> <span
  m="3950460">hop.</span> <span m="3951175">So</span> <span m="3951480">there
  would</span> <span m="3951680">be</span> <span m="3951840">little</span> <span
  m="3952210">time</span> <span m="3952590">jumps.</span> <span
  m="3956370">So</span> <span m="3956530">this</span> <span
  m="3956720">is</span> <span m="3956820">a</span> <span
  m="3956890">protein</span> <span m="3957290">burst,</span> <span
  m="3957630">but</span> <span m="3957760">it's</span> <span
  m="3958730">really</span> <span m="3958880">before</span> <span
  m="3959220">this</span> <span m="3959400">mRNA</span> <span
  m="3959710">is</span> <span m="3959810">degraded,</span> <span
  m="3960170">you</span> <span m="3960250">get</span> <span
  m="3960480">1,</span> <span m="3960710">1,</span> <span m="3960860">1,</span>
  <span m="3961030">1.</span></p><p><span m="3961210">So</span> <span
  m="3961500">each</span> <span m="3961720">of</span> <span
  m="3961780">these</span> <span m="3961980">as</span> <span
  m="3962130">is</span> <span m="3962300">delta</span> <span
  m="3962600">n</span> <span m="3962750">of</span> <span m="3962850">1.</span>
  <span m="3965800">So</span> <span m="3965910">this</span> <span
  m="3966080">is</span> <span m="3966820">whatever,</span> <span
  m="3967150">6,</span> <span m="3967320">7.</span> <span m="3968170">And</span>
  <span m="3968330">then</span> <span m="3969180">what</span> <span
  m="3969330">can</span> <span m="3969470">happen</span> <span
  m="3969780">is</span> <span m="3969920">that</span> <span
  m="3970530">we</span> <span m="3970640">get</span> <span
  m="3970770">the</span> <span m="3971000">mRNA</span> <span
  m="3971220">degraded.</span> <span m="3972680">And</span> <span
  m="3972840">so</span> <span m="3972920">then</span> <span
  m="3973140">we're</span> <span m="3973280">going</span> <span
  m="3973380">to</span> <span m="3973690">get</span> <span m="3974130">a</span>
  <span m="3974240">slower</span> <span m="3974500">thing</span> <span
  m="3974997">where it--</span> <span m="3980970">looks like</span> <span
  m="3980990">that.</span> <span m="3982060">So</span> <span
  m="3982180">the</span> <span m="3982270">Gillespie,</span> <span
  m="3982620">everything</span> <span m="3983310">is</span> <span
  m="3985500">being</span> <span m="3985630">created</span> <span
  m="3985890">and</span> <span m="3986340">destroyed</span> <span
  m="3986720">in</span> <span m="3986820">units</span> <span
  m="3987030">of</span> <span m="3987100">1.</span> <span m="3987740">But</span>
  <span m="3987900">it</span> <span m="3987950">could</span> <span
  m="3988060">be</span> <span m="3988140">that the</span> <span
  m="3988330">time</span> <span m="3988770">interval</span> <span
  m="3989980">over</span> <span m="3990130">this</span> <span
  m="3990260">burst</span> <span m="3990690">is just very</span> <span
  m="3990840">short,</span> <span m="3991160">so then</span> <span
  m="3991310">it</span> <span m="3991510">goes</span> <span
  m="3991680">up</span> <span m="3991750">very</span> <span
  m="3991890">quickly,</span> <span m="3992190">but then it's</span> <span
  m="3993190">slower to go away.</span></p><p><span m="3999200">So</span> <span
  m="3999540">what</span> <span m="3999720">I want to</span> <span
  m="3999850">do</span> <span m="3999950">in</span> <span
  m="4000040">just</span> <span m="4000200">the</span> <span
  m="4000270">last</span> <span m="4000500">15</span> <span
  m="4000760">minutes</span> <span m="4001000">is</span> <span
  m="4001160">talk</span> <span m="4001490">a</span> <span
  m="4001570">bit</span> <span m="4001740">about</span> <span
  m="4001900">the</span> <span m="4001960">Fokker-Planck</span> <span
  m="4002660">approximation.</span> <span m="4004380">I</span> <span
  m="4004470">would</span> <span m="4004610">say</span> <span
  m="4004870">that</span> <span m="4006150">all</span> <span
  m="4006450">these</span> <span m="4006660">different</span> <span
  m="4006890">approaches</span> <span m="4007480">are</span> <span
  m="4007650">useful</span> <span m="4008370">to</span> <span
  m="4008490">varying</span> <span m="4008740">degrees</span> <span
  m="4009130">in</span> <span m="4009250">terms</span> <span
  m="4009580">of</span> <span m="4009720">actually</span> <span
  m="4010130">doing</span> <span m="4010470">simulations,</span> <span
  m="4011570">doing</span> <span m="4012170">analytic</span> <span
  m="4012600">calculations,</span> <span m="4013930">getting</span> <span
  m="4014200">intuition.</span> <span m="4015050">And</span> <span
  m="4016680">the</span> <span m="4016760">Fokker-Planck</span> <span
  m="4017350">approach,</span> <span m="4019220">I'd</span> <span
  m="4019400">say</span> <span m="4020270">it's</span> <span
  m="4020470">more</span> <span m="4020700">or</span> <span
  m="4020740">less</span> <span m="4020930">useful</span> <span
  m="4021290">for</span> <span m="4021440">different</span> <span
  m="4021680">people</span> <span m="4021950">depending</span> <span
  m="4022270">on</span> <span m="4022890">what</span> <span
  m="4023120">you're</span> <span m="4023180">doing.</span></p><p><span
  m="4023890">So</span> <span m="4024730">the</span> <span
  m="4025110">basic</span> <span m="4025400">idea,</span> <span
  m="4026030">as</span> <span m="4026270">kind</span> <span
  m="4026400">of</span> <span m="4026530">you</span> <span
  m="4026750">answered</span> <span m="4028390">in</span> <span
  m="4028530">the</span> <span m="4028730">pre-class</span> <span
  m="4029140">reading,</span> <span m="4029410">is</span> <span
  m="4029510">that</span> <span m="4030570">in</span> <span
  m="4030730">cases</span> <span m="4031180">where</span> <span
  m="4031530">n</span> <span m="4031790">is</span> <span
  m="4032400">large</span> <span m="4032740">enough</span> <span
  m="4032990">that</span> <span m="4033070">you</span> <span
  m="4033200">don't</span> <span m="4033520">feel</span> <span
  m="4033660">like</span> <span m="4033810">you</span> <span
  m="4033900">need</span> <span m="4034070">to</span> <span
  m="4034210">take</span> <span m="4035370">into</span> <span
  m="4035570">account</span> <span m="4035950">the</span> <span
  m="4036070">discrete</span> <span m="4036480">nature</span> <span
  m="4036870">of</span> <span m="4036950">the</span> <span
  m="4037020">molecules,</span> <span m="4038690">yet</span> <span
  m="4038870">at</span> <span m="4038970">the</span> <span
  m="4039070">same</span> <span m="4039140">time</span> <span
  m="4039320">it's</span> <span m="4039440">not</span> <span
  m="4039630">so</span> <span m="4039910">large</span> <span m="4040180">that
  you</span> <span m="4040290">can</span> <span m="4040430">totally</span> <span
  m="4040790">ignore</span> <span m="4041140">the</span> <span
  m="4041240">fluctuations,</span> <span m="4042250">then</span> <span
  m="4042830">the</span> <span m="4042930">Fokker-Planck</span> <span
  m="4043440">approach</span> <span m="4043670">is</span> <span
  m="4043770">nice</span> <span m="4044060">because</span> <span
  m="4044660">it</span> <span m="4044780">allows</span> <span
  m="4045150">you</span> <span m="4045300">to</span> <span
  m="4046020">get</span> <span m="4046330">some</span> <span
  m="4046510">sense</span> <span m="4046800">of</span> <span
  m="4046850">what's</span> <span m="4047030">going</span> <span
  m="4047200">on</span> <span m="4047350">without</span> <span
  m="4048250">all</span> <span m="4048590">of</span> <span
  m="4048730">the</span> <span m="4048810">crazy</span> <span
  m="4049290">details</span> <span m="4050140">of,</span> <span
  m="4051140">for</span> <span m="4051230">example,</span> <span
  m="4051490">the</span> <span m="4051550">master</span> <span
  m="4051920">equation.</span> <span m="4054540">And</span> <span
  m="4054710">then</span> <span m="4054960">it</span> <span
  m="4055040">also,</span> <span m="4055460">because</span> <span
  m="4055740">of</span> <span m="4055790">this</span> <span
  m="4055920">idea</span> <span m="4056130">of</span> <span
  m="4056210">an</span> <span m="4056310">effective</span> <span
  m="4056680">potential,</span> <span m="4057490">it</span> <span
  m="4057570">allows</span> <span m="4057830">you</span> <span
  m="4057930">to</span> <span m="4058040">bring</span> <span
  m="4058570">all</span> <span m="4058840">the</span> <span
  m="4058950">intuition</span> <span m="4059390">from</span> <span
  m="4059590">that</span> <span m="4060350">into</span> <span
  m="4060950">your</span> <span m="4061500">study</span> <span
  m="4061790">of</span> <span m="4061850">these</span> <span
  m="4062010">gene</span> <span m="4062190">circuits.</span></p><p><span
  m="4063780">Now</span> <span m="4064060">I'm</span> <span
  m="4064220">not</span> <span m="4064390">going</span> <span
  m="4064470">to</span> <span m="4064510">go</span> <span
  m="4064650">through</span> <span m="4064810">the</span> <span
  m="4064900">whole</span> <span m="4065340">derivation,</span> <span
  m="4066580">but</span> <span m="4066760">if</span> <span
  m="4066950">you</span> <span m="4067050">have</span> <span
  m="4067170">questions</span> <span m="4067610">about</span> <span
  m="4067840">that,</span> <span m="4068180">please</span> <span
  m="4068940">come</span> <span m="4069220">up</span> <span
  m="4069540">after</span> <span m="4069810">class and</span> <span
  m="4070130">I'm</span> <span m="4070270">happy</span> <span
  m="4070540">to</span> <span m="4070610">go</span> <span
  m="4070750">through</span> <span m="4070990">it</span> <span
  m="4071110">with</span> <span m="4071250">you,</span> <span
  m="4071710">because</span> <span m="4072080">it's</span> <span
  m="4074170">sort</span> <span m="4074420">of</span> <span
  m="4074540">fun.</span> <span m="4077620">But</span> <span
  m="4077830">the</span> <span m="4078130">notes</span> <span
  m="4079470">do</span> <span m="4079650">go</span> <span
  m="4079770">over</span> <span m="4079970">it.</span> <span
  m="4081490">I</span> <span m="4081560">think</span> <span
  m="4081710">that's</span> <span m="4082030">what's</span> <span
  m="4082680">perhaps</span> <span m="4083470">useful</span> <span
  m="4083910">to just</span> <span m="4084140">remind</span> <span
  m="4084470">ourselves</span> <span m="4084930">of</span> <span
  m="4085630">is</span> <span m="4086240">how</span> <span m="4086610">it</span>
  <span m="4086740">maybe</span> <span m="4087030">leads</span> <span
  m="4087470">to</span> <span m="4089660">a</span> <span
  m="4089680">Gaussian</span> <span m="4090160">with</span> <span
  m="4090270">some</span> <span m="4090490">width</span> <span
  m="4091020">depending</span> <span m="4091390">upon</span> <span
  m="4091630">the</span> <span m="4091690">shapes</span> <span
  m="4092370">of</span> <span m="4092650">the</span> <span
  m="4092750">production</span> <span m="4093160">degradation</span> <span
  m="4093550">curves.</span></p><p><span m="4101520">So</span> <span
  m="4101620">the</span> <span m="4101720">basic</span> <span
  m="4101930">notion</span> <span m="4102310">here</span> <span
  m="4102590">is</span> <span m="4102700">that,</span> <span
  m="4103580">depending</span> <span m="4104090">on</span> <span
  m="4106250">the</span> <span m="4106520">f's</span> <span
  m="4106630">and</span> <span m="4106910">g's,</span> <span
  m="4106990">the</span> <span m="4107490">production</span> <span
  m="4107870">degradation</span> <span m="4108270">terms,</span> <span
  m="4109090">we</span> <span m="4109520">get</span> <span
  m="4109800">different</span> <span m="4110130">shaped</span> <span
  m="4110880">effective</span> <span m="4111350">potentials.</span> <span
  m="4121890">So</span> <span m="4122050">in</span> <span
  m="4122140">general</span> <span m="4122569">we</span> <span
  m="4122700">have</span> <span m="4122859">something that</span> <span
  m="4123170">looks</span> <span m="4123390">like--</span> <span m="4123569">we
  have some</span> <span m="4123609">n dot,</span> <span
  m="4125040">there's</span> <span m="4125189">some</span> <span
  m="4125390">fn,</span> <span m="4126020">and</span> <span
  m="4126130">then</span> <span m="4126229">there's</span> <span
  m="4126380">a</span> <span m="4126420">minus</span> <span
  m="4126899">gn.</span></p><p><span m="4129250">So</span> <span
  m="4129420">for</span> <span m="4129680">example,</span> <span
  m="4130080">for</span> <span m="4130399">something</span> <span
  m="4130740">that is</span> <span m="4131060">just</span> <span
  m="4131700">simple</span> <span m="4132370">expression,</span> <span
  m="4134020">in</span> <span m="4134100">the</span> <span
  m="4134170">case</span> <span m="4134490">of--</span> <span
  m="4134609">let's</span> <span m="4134819">just</span> <span
  m="4134950">imagine</span> <span m="4135380">now</span> <span
  m="4135580">that</span> <span m="4135710">there</span> <span
  m="4135859">is--</span> <span m="4136140">if you</span> <span
  m="4136560">want</span> <span m="4136825">we can say</span> <span
  m="4137090">it's</span> <span m="4137220">a</span> <span
  m="4137260">protein</span> <span m="4138359">where it's</span> <span
  m="4138490">just</span> <span m="4139340">some</span> <span
  m="4139540">k</span> <span m="4140229">minus</span> <span
  m="4141460">gamma</span> <span m="4141830">n.</span> <span
  m="4142310">Or</span> <span m="4142689">if</span> <span
  m="4142770">you'd</span> <span m="4142910">like,</span> <span
  m="4143109">we</span> <span m="4143210">could</span> <span
  m="4143350">say,</span> <span m="4143460">oh,</span> <span
  m="4143550">this</span> <span m="4143700">is</span> <span
  m="4143870">mRNA</span> <span m="4144279">number.</span> <span
  m="4144800">But</span> <span m="4145000">something that's</span> <span
  m="4145439">just</span> <span m="4145620">simple</span> <span
  m="4145939">production,</span> <span m="4147010">and</span> <span
  m="4147140">then</span> <span m="4147620">first</span> <span
  m="4147930">order</span> <span m="4148140">degradation.</span></p><p><span
  m="4152229">The</span> <span m="4152340">question</span> <span
  m="4152660">is,</span> <span m="4152840">how</span> <span
  m="4153300">do</span> <span m="4153420">we</span> <span m="4154350">go</span>
  <span m="4154470">about</span> <span m="4155640">understanding</span> <span
  m="4156120">this</span> <span m="4156260">in the</span> <span
  m="4156340">context</span> <span m="4156790">of</span> <span
  m="4156960">the</span> <span m="4157040">Fokker-Planck</span> <span
  m="4157720">approximation?</span> <span m="4158790">And</span> <span
  m="4160520">it</span> <span m="4160569">turns</span> <span
  m="4160790">out</span> <span m="4160939">that</span> <span
  m="4161060">you</span> <span m="4161170">can</span> <span
  m="4162080">write</span> <span m="4162359">it</span> <span
  m="4162550">in</span> <span m="4162760">what</span> <span
  m="4162880">is</span> <span m="4163490">essentially</span> <span
  m="4163880">a</span> <span m="4164720">diffusion</span> <span
  m="4165290">equation</span> <span m="4166069">where</span> <span
  m="4166220">you</span> <span m="4166300">have</span> <span
  m="4166439">some</span> <span m="4166630">probability</span> <span
  m="4167050">flux</span> <span m="4169109">that's</span> <span
  m="4169319">moving</span> <span m="4169560">around.</span> <span
  m="4170140">And</span> <span m="4171069">within</span> <span
  m="4171430">that</span> <span m="4171779">realm,</span> <span
  m="4172410">you</span> <span m="4172600">can</span> <span
  m="4173729">write</span> <span m="4174000">that</span> <span
  m="4174140">the</span> <span m="4174870">probability</span> <span
  m="4175359">distribution</span> <span m="4175990">of</span> <span
  m="4176270">the</span> <span m="4176350">number</span> <span
  m="4177380">is</span> <span m="4177540">going</span> <span
  m="4177660">to</span> <span m="4178140">be</span> <span
  m="4178250">something</span> <span m="4178510">that--</span> <span
  m="4178890">so</span> <span m="4179040">there's</span> <span m="4179210">going
  to be</span> <span m="4179350">some</span> <span m="4179500">constant.</span>
  <span m="4180700">There's</span> <span m="4180939">f</span> <span
  m="4181350">plus</span> <span m="4181939">g.</span> <span
  m="4182140">And</span> <span m="4182620">these</span> <span
  m="4182800">are</span> <span m="4182850">both</span> <span
  m="4183040">functions</span> <span m="4183420">of n.</span> <span
  m="4185109">And then</span> <span m="4185210">you</span> <span
  m="4185279">have</span> <span m="4185609">e</span> <span m="4185819">to</span>
  <span m="4185910">the</span> <span m="4186010">minus</span> <span
  m="4188160">[INAUDIBLE]</span></p><p><span m="4189000">So</span> <span
  m="4189130">the</span> <span m="4189220">idea</span> <span
  m="4189430">here</span> <span m="4189689">is</span> <span
  m="4189810">that</span> <span m="4191800">this</span> <span
  m="4192130">behaves</span> <span m="4192640">as</span> <span
  m="4192760">some</span> <span m="4192970">effective</span> <span
  m="4193310">potential.</span> <span m="4202370">Of</span> <span
  m="4202530">course,</span> <span m="4203130">it's</span> <span
  m="4203320">not</span> <span m="4203630">quite</span> <span
  m="4204260">true</span> <span m="4204540">because</span> <span
  m="4204820">f</span> <span m="4205060">and</span> <span m="4205200">g</span>
  <span m="4205420">also</span> <span m="4205860">are</span> <span
  m="4205950">functions</span> <span m="4206310">of</span> <span
  m="4206410">n,</span> <span m="4206850">they're</span> <span
  m="4206910">are</span> <span m="4207550">not</span> <span
  m="4208270">in</span> <span m="4208420">here.</span> <span
  m="4208680">But</span> <span m="4208830">this</span> <span
  m="4208990">is</span> <span m="4209100">the</span> <span
  m="4209220">dominant</span> <span m="4209790">term</span> <span
  m="4210110">because</span> <span m="4210390">it's</span> <span
  m="4210600">in</span> <span m="4210730">the</span> <span
  m="4210810">exponential.</span> <span m="4213770">And</span> <span
  m="4214220">here</span> <span m="4214520">phi n</span> <span
  m="4215120">is</span> <span m="4215280">defined</span> <span
  m="4216010">as</span> <span m="4216260">the</span> <span
  m="4216360">following.</span> <span m="4218770">So</span> <span
  m="4218920">it's</span> <span m="4219020">minus</span> <span
  m="4219420">this</span> <span m="4219620">integral</span> <span
  m="4220100">over</span> <span m="4220280">n</span> <span m="4220690">of</span>
  <span m="4222290">the f</span> <span m="4222390">minus</span> <span
  m="4223050">g</span> <span m="4223400">and</span> <span m="4223560">f</span>
  <span m="4223800">plus</span> <span m="4224330">g</span> <span
  m="4225680">dn</span> <span m="4227396">that</span> <span
  m="4227820">we</span> <span m="4228170">integrate</span> <span
  m="4228660">over</span> <span m="4228840">n</span> <span
  m="4228970">prime.</span></p><p><span m="4231980">And</span> <span
  m="4232120">we're</span> <span m="4232550">going</span> <span
  m="4232640">to</span> <span m="4233160">kind</span> <span
  m="4233300">of</span> <span m="4233400">go</span> <span m="4233560">through
  what</span> <span m="4233800">some</span> <span m="4233950">of</span> <span
  m="4234050">these</span> <span m="4234100">different</span> <span
  m="4234310">f's</span> <span m="4234560">and</span> <span
  m="4234680">g's</span> <span m="4234930">might</span> <span
  m="4235130">look</span> <span m="4235330">like</span> <span
  m="4235490">to</span> <span m="4235560">try</span> <span m="4235780">to</span>
  <span m="4235850">get</span> <span m="4235940">a</span> <span
  m="4235990">sense</span> <span m="4236180">of</span> <span
  m="4236280">why</span> <span m="4236420">this</span> <span
  m="4236600">happened.</span> <span m="4238730">It</span> <span
  m="4238880">is</span> <span m="4239020">worth</span> <span
  m="4239260">mentioning</span> <span m="4239610">that</span> <span
  m="4240170">you</span> <span m="4240340">can</span> <span
  m="4240560">do</span> <span m="4240760">this</span> <span
  m="4241300">for</span> <span m="4241530">any</span> <span m="4241850">f</span>
  <span m="4242050">and</span> <span m="4242210">g</span> <span
  m="4243800">when</span> <span m="4243890">it's</span> <span
  m="4243980">just</span> <span m="4244160">in</span> <span
  m="4244250">one</span> <span m="4244430">dimension,</span> <span
  m="4244900">so</span> <span m="4245120">you</span> <span
  m="4245280">just</span> <span m="4245610">have</span> <span
  m="4246380">n.</span> <span m="4248010">Once</span> <span
  m="4248290">you</span> <span m="4248380">have</span> <span
  m="4249580">it</span> <span m="4249740">in</span> <span m="4249850">two</span>
  <span m="4250020">dimensions,</span> <span m="4250720">so</span> <span
  m="4250830">once</span> <span m="4251070">you</span> <span
  m="4251190">actually</span> <span m="4251410">have</span> <span
  m="4251600">mRNA</span> <span m="4252070">and protein,</span> <span
  m="4252350">for</span> <span m="4252430">example,</span> <span
  m="4253310">you're</span> <span m="4253520">not</span> <span
  m="4253750">guaranteed</span> <span m="4254200">to</span> <span m="4254250">to
  be</span> <span m="4254430">able to</span> <span m="4254510">write it</span>
  <span m="4254720">as</span> <span m="4254920">an</span> <span
  m="4255010">effective</span> <span m="4255370">potential.</span> <span
  m="4257960">Although</span> <span m="4258350">I</span> <span
  m="4258430">guess</span> <span m="4258590">if</span> <span
  m="4258990">you're</span> <span m="4259100">willing</span> <span
  m="4259490">to</span> <span m="4260180">invoke</span> <span
  m="4260540">a</span> <span m="4260630">vector</span> <span
  m="4261040">potential,</span> <span m="4264810">then</span> <span
  m="4264980">maybe</span> <span m="4265230">you can.</span></p><p><span
  m="4265770">But</span> <span m="4266460">in</span> <span
  m="4266550">terms</span> <span m="4266760">of</span> <span
  m="4266810">just</span> <span m="4267240">a</span> <span
  m="4267550">simple</span> <span m="4267810">potential,</span> <span
  m="4268190">then</span> <span m="4269620">you</span> <span
  m="4269740">can</span> <span m="4269900">do</span> <span m="4270030">it</span>
  <span m="4270150">one</span> <span m="4270300">dimension,</span> <span
  m="4270530">but</span> <span m="4270630">not</span> <span
  m="4270790">necessarily</span> <span m="4271140">in more.</span> <span
  m="4276320">And</span> <span m="4276440">I</span> <span
  m="4276470">think</span> <span m="4276610">that,</span> <span
  m="4276750">in</span> <span m="4276840">general,</span> <span
  m="4277120">our</span> <span m="4277260">intuition</span> <span
  m="4277780">is</span> <span m="4277890">not</span> <span m="4278080">as</span>
  <span m="4278190">useful</span> <span m="4278930">when</span> <span
  m="4279380">you</span> <span m="4279510">have</span> <span
  m="4280520">the</span> <span m="4280590">equivalent</span> <span
  m="4280950">of</span> <span m="4281040">magnetic</span> <span
  m="4281510">fields</span> <span m="4282020">and</span> <span
  m="4282030">so</span> <span m="4282140">forth</span> <span
  m="4282630">here</span> <span m="4282870">anyway.</span></p><p><span
  m="4285070">What</span> <span m="4285200">I</span> <span
  m="4285220">want</span> <span m="4285350">to</span> <span
  m="4285390">do</span> <span m="4285500">is</span> <span
  m="4285620">just</span> <span m="4286060">try</span> <span
  m="4286250">to</span> <span m="4286320">understand</span> <span
  m="4287280">why</span> <span m="4288930">this</span> <span
  m="4289190">thing</span> <span m="4289650">looks</span> <span
  m="4289950">the</span> <span m="4290020">way</span> <span
  m="4290120">it</span> <span m="4290210">does</span> <span
  m="4291270">for</span> <span m="4292260">this</span> <span
  m="4292520">simple</span> <span m="4292900">regulation</span> <span
  m="4293370">case.</span> <span m="4294260">And</span> <span
  m="4294400">then</span> <span m="4295110">we're</span> <span
  m="4295270">going</span> <span m="4295360">to</span> <span
  m="4295860">ask</span> <span m="4296300">if</span> <span m="4296510">we</span>
  <span m="4296610">change</span> <span m="4296950">one</span> <span
  m="4297100">thing</span> <span m="4297240">or</span> <span
  m="4297280">another,</span> <span m="4297560">how</span> <span
  m="4297710">does</span> <span m="4297840">it</span> <span
  m="4297900">affect</span> <span m="4299710">the</span> <span
  m="4300080">resulting</span> <span m="4301360">variance.</span></p><p><span
  m="4315940">So</span> <span m="4315990">for</span> <span
  m="4316170">unregulated</span> <span m="4317450">expression,</span> <span
  m="4318200">such</span> <span m="4318430">as</span> <span
  m="4318530">here,</span> <span m="4322210">if</span> <span
  m="4322310">we</span> <span m="4322400">look</span> <span
  m="4322520">at</span> <span m="4322580">the</span> <span
  m="4322670">production</span> <span m="4322945">and</span> <span
  m="4323220">degradation</span> <span m="4323720">as</span> <span
  m="4323810">a</span> <span m="4323870">function</span> <span
  m="4324170">of</span> <span m="4324270">n,</span> <span m="4328180">fn</span>
  <span m="4329480">is</span> <span m="4329620">just</span> <span
  m="4329920">some</span> <span m="4330240">constant</span> <span
  m="4330730">k,</span> <span m="4331890">whereas</span> <span
  m="4332260">gn</span> <span m="4335040">is</span> <span m="4335380">a
  line</span> <span m="4336000">that</span> <span m="4336080">goes</span> <span
  m="4336320">up</span> <span m="4336550">as</span> <span m="4336970">gamma
  n.</span> <span m="4342430">Now</span> <span m="4343660">in</span> <span
  m="4343830">this</span> <span m="4344020">situation,</span> <span
  m="4345430">if</span> <span m="4347050">you</span> <span m="4347160">do</span>
  <span m="4347330">this</span> <span m="4347480">integral--</span> <span
  m="4348120">and</span> <span m="4348300">really,</span> <span
  m="4348560">what</span> <span m="4348670">you</span> <span
  m="4348740">can</span> <span m="4348990">imagine</span> <span m="4349400">is
  what</span> <span m="4349750">this</span> <span m="4350000">integral</span>
  <span m="4350370">looks</span> <span m="4350610">like</span> <span
  m="4351440">right</span> <span m="4351750">around</span> <span
  m="4353150">that</span> <span m="4354330">steady</span> <span
  m="4354540">state,</span> <span m="4354890">because</span> <span
  m="4355040">that's</span> <span m="4355240">kind</span> <span
  m="4355380">of</span> <span m="4355810">what</span> <span
  m="4356110">we</span> <span m="4356200">want</span> <span
  m="4356370">to</span> <span m="4356410">know,</span> <span
  m="4356600">if</span> <span m="4356670">we</span> <span m="4356710">want
  to</span> <span m="4357000">something</span> <span m="4357240">about,</span>
  <span m="4357660">for</span> <span m="4357740">example,</span> <span
  m="4357970">the</span> <span m="4358050">width</span> <span
  m="4358300">of</span> <span m="4358350">a</span> <span
  m="4358410">distribution.</span></p><p><span m="4360630">Well,</span> <span
  m="4361890">there's</span> <span m="4362120">going to b e</span> <span
  m="4362320">two</span> <span m="4362470">terms.</span> <span
  m="4362740">In</span> <span m="4362830">the</span> <span
  m="4362890">numerator</span> <span m="4363350">there's</span> <span
  m="4363510">an</span> <span m="4363600">f</span> <span
  m="4363730">minus</span> <span m="4364140">g.</span> <span
  m="4364810">In</span> <span m="4364920">the</span> <span
  m="4365000">denominator</span> <span m="4365610">there's</span> <span
  m="4365710">an</span> <span m="4365790">f</span> <span m="4366040">plus</span>
  <span m="4366330">g.</span> <span m="4368520">Now</span> <span
  m="4369520">f</span> <span m="4369740">minus</span> <span m="4370120">g</span>
  <span m="4370330">is</span> <span m="4370440">actually</span> <span
  m="4370740">equal</span> <span m="4371000">to</span> <span
  m="4371430">0</span> <span m="4372270">right</span> <span
  m="4372450">at</span> <span m="4372560">that</span> <span
  m="4373220">steady</span> <span m="4373370">state,</span> <span
  m="4373510">and that's</span> <span m="4373740">why</span> <span
  m="4374050">it's</span> <span m="4374320">a</span> <span m="4374450">steady
  state,</span> <span m="4375050">because</span> <span m="4375270">production
  and</span> <span m="4375690">degradation</span> <span m="4376220">are</span>
  <span m="4377000">equal.</span> <span m="4379440">Now</span> <span
  m="4379750">as</span> <span m="4380010">you</span> <span m="4380290">go</span>
  <span m="4380440">away</span> <span m="4380840">from</span> <span
  m="4381030">that</span> <span m="4381210">location,</span> <span
  m="4382570">what</span> <span m="4382680">you're</span> <span
  m="4382740">doing</span> <span m="4382900">is</span> <span
  m="4382960">you're</span> <span m="4383100">integrating</span> <span
  m="4383580">the</span> <span m="4383680">difference</span> <span
  m="4384170">between</span> <span m="4384400">the</span> <span m="4384490">f
  and the g.</span></p><p><span m="4386130">And</span> <span m="4386350">you
  can</span> <span m="4386520">see</span> <span m="4386710">that</span> <span
  m="4386870">around</span> <span m="4387170">here</span> <span
  m="4387380">these</span> <span m="4387550">things</span> <span
  m="4388870">are</span> <span m="4389000">separating</span> <span
  m="4389400">kind</span> <span m="4389590">of--</span> <span
  m="4390140">well,</span> <span m="4392590">everything's</span> <span
  m="4392950">a</span> <span m="4393000">line</span> <span
  m="4393510">here.</span> <span m="4394080">And</span> <span
  m="4394200">indeed,</span> <span m="4394900">even</span> <span
  m="4395160">if</span> <span m="4395510">f and g</span> <span
  m="4395900">were</span> <span m="4396030">not</span> <span
  m="4396300">linear,</span> <span m="4397630">close</span> <span
  m="4398030">to</span> <span m="4399120">that</span> <span m="4399300">steady
  state</span> <span m="4399640">they</span> <span m="4399750">would</span>
  <span m="4399930">be</span> <span m="4400280">linear.</span> <span
  m="4401580">What we can</span> <span m="4401720">see</span> <span
  m="4401820">is that</span> <span m="4401930">as</span> <span
  m="4402170">you're</span> <span m="4402300">integrating,</span> <span
  m="4402710">you're</span> <span m="4402850">integrating</span> <span
  m="4403400">across</span> <span m="4403760">something</span> <span
  m="4403940">that</span> <span m="4404050">is</span> <span
  m="4404160">growing</span> <span m="4404820">linearly.</span> <span
  m="4406350">That's</span> <span m="4406620">what</span> <span
  m="4406710">gives</span> <span m="4406860">you</span> <span
  m="4407030">a</span> <span m="4407120">quadratic.</span> <span
  m="4411010">And</span> <span m="4411150">that's</span> <span
  m="4411380">why</span> <span m="4412040">this</span> <span
  m="4412180">effect</span> <span m="4412530">of</span> <span
  m="4412610">potential</span> <span m="4413090">ends</span> <span
  m="4413310">up</span> <span m="4413720">behaving</span> <span
  m="4415870">as</span> <span m="4416060">if</span> <span
  m="4416240">you're</span> <span m="4416440">in</span> <span
  m="4416530">a</span> <span m="4416590">quadratic</span> <span
  m="4417110">trap.</span></p><p><span m="4419800">Now</span> <span
  m="4419990">I</span> <span m="4420090">encourage</span> <span
  m="4420430">you</span> <span m="4420500">to</span> <span m="4420560">go</span>
  <span m="4420750">ahead</span> <span m="4420890">and</span> <span
  m="4421170">do</span> <span m="4421480">that</span> <span
  m="4421660">integral</span> <span m="4422090">at</span> <span
  m="4422170">some</span> <span m="4422310">point.</span> <span
  m="4422800">I</span> <span m="4422870">was</span> <span
  m="4423000">planning</span> <span m="4423280">on</span> <span
  m="4423350">doing</span> <span m="4423570">it</span> <span
  m="4423700">for</span> <span m="4423950">you</span> <span
  m="4425180">today,</span> <span m="4425690">but</span> <span
  m="4426040">we</span> <span m="4426240">are</span> <span
  m="4426350">running</span> <span m="4426560">out</span> <span
  m="4426610">of</span> <span m="4426650">time.</span> <span
  m="4427120">Once</span> <span m="4427210">again,</span> <span
  m="4427530">I'm</span> <span m="4427580">happy</span> <span
  m="4427780">to</span> <span m="4427850">do</span> <span m="4427980">it,</span>
  <span m="4428290">just</span> <span m="4429100">after</span> <span
  m="4429270">class.</span> <span m="4430640">And</span> <span
  m="4430780">indeed,</span> <span m="4431130">what you</span> <span
  m="4431180">can</span> <span m="4431270">see</span> <span
  m="4431420">is</span> <span m="4431540">that</span> <span
  m="4431760">because</span> <span m="4432180">you're</span> <span
  m="4432320">integrating</span> <span m="4432800">across</span> <span
  m="4433170">here,</span> <span m="4434070">you</span> <span
  m="4434280">end</span> <span m="4434430">up</span> <span
  m="4434530">getting</span> <span m="4434940">a</span> <span
  m="4435170">quadratic</span> <span m="4435740">increase</span> <span
  m="4436180">in</span> <span m="4436260">the effective</span> <span
  m="4436550">potential.</span> <span m="4437830">And</span> <span
  m="4437940">if</span> <span m="4438020">you</span> <span
  m="4438140">look</span> <span m="4438330">at</span> <span
  m="4438840">what</span> <span m="4438980">the</span> <span
  m="4439040">variance of</span> <span m="4439380">that</span> <span
  m="4439550">thing</span> <span m="4439690">is,</span> <span
  m="4439880">you</span> <span m="4440130">indeed</span> <span
  m="4440560">find</span> <span m="4441040">that</span> <span
  m="4441250">the</span> <span m="4441400">variance</span> <span
  m="4441830">is</span> <span m="4441910">equal</span> <span
  m="4442110">to</span> <span m="4442190">the</span> <span
  m="4442280">mean</span> <span m="4442470">here.</span></p><p><span
  m="4447380">So</span> <span m="4447580">what</span> <span m="4447750">I</span>
  <span m="4447860">want</span> <span m="4448060">to</span> <span
  m="4448160">ask</span> <span m="4448950">in</span> <span
  m="4449100">terms</span> <span m="4449330">of</span> <span
  m="4449460">trying</span> <span m="4449670">to</span> <span
  m="4449710">get</span> <span m="4449890">intuition</span> <span
  m="4450500">is,</span> <span m="4450680">what</span> <span
  m="4450880">happens</span> <span m="4451660">if</span> <span
  m="4452190">we</span> <span m="4452400">pull</span> <span
  m="4452780">these</span> <span m="4453030">curves</span> <span
  m="4453380">down?</span> <span m="4456340">So</span> <span
  m="4456480">in</span> <span m="4456530">particular,</span> <span
  m="4457740">let's</span> <span m="4457860">imagine</span> <span
  m="4458280">that</span> <span m="4458370">we</span> <span
  m="4458450">have</span> <span m="4458630">a</span> <span
  m="4458680">situation</span> <span m="4459240">where--</span> <span
  m="4462310">I'm going to re-parameterize</span> <span
  m="4462740">things,</span> <span m="4463440">so</span> <span
  m="4463530">again,</span> <span m="4463790">we're</span> <span
  m="4463950">kind</span> <span m="4464080">of</span> <span
  m="4464170">keeping</span> <span m="4467020">the</span> <span
  m="4467150">number</span> <span m="4467390">of the</span> <span
  m="4467470">equilibrium</span> <span m="4467890">constant.</span> <span
  m="4469760">But</span> <span m="4469870">now</span> <span
  m="4470070">what</span> <span m="4470160">I'm</span> <span
  m="4470220">going</span> <span m="4470300">to</span> <span
  m="4470340">do</span> <span m="4470440">is</span> <span m="4470530">I'm</span>
  <span m="4470630">going</span> <span m="4470730">to</span> <span
  m="4470830">have</span> <span m="4470930">an</span> <span
  m="4471030">fn</span> <span m="4471370">that</span> <span
  m="4471480">looks</span> <span m="4471650">like</span> <span
  m="4471800">this,</span> <span m="4472783">and</span> <span
  m="4473750">gn</span> <span m="4474090">looks</span> <span
  m="4474320">like--</span> <span m="4474840">now</span> <span
  m="4475060">gn</span> <span m="4476240">is</span> <span
  m="4476320">going</span> <span m="4476420">to</span> <span
  m="4476460">be</span> <span m="4476600">some</span> <span
  m="4476990">1/2</span> <span m="4477350">of</span> <span
  m="4477600">lambda,</span> <span m="4478840">and</span> <span
  m="4478960">this</span> <span m="4479030">fn</span> <span
  m="4480150">is</span> <span m="4480290">equal</span> <span
  m="4480490">to</span> <span m="4480750">k</span> <span
  m="4481620">minus</span> <span m="4482280">1/2</span> <span
  m="4483540">of</span> <span m="4483730">gamma</span> <span
  m="4483800">n.</span></p><p><span m="4489780">Now</span> <span
  m="4489990">the</span> <span m="4490080">question</span> <span
  m="4490520">is,</span> <span m="4491260">in</span> <span
  m="4491500">this</span> <span m="4491730">situation,</span> <span
  m="4493190">what</span> <span m="4493350">will</span> <span
  m="4493460">be</span> <span m="4493580">the</span> <span
  m="4493690">variance</span> <span m="4494055">over the mean?</span> <span
  m="4501790">Well,</span> <span m="4501880">first</span> <span
  m="4502070">of</span> <span m="4502110">all,</span> <span
  m="4502200">the</span> <span m="4502270">variance</span> <span
  m="4502610">over</span> <span m="4502730">the</span> <span
  m="4502820">mean</span> <span m="4503960">here</span> <span
  m="4504370">was</span> <span m="4504500">equal</span> <span
  m="4504660">to</span> <span m="4504730">what?</span> <span
  m="4512190">Although</span> <span m="4512450">should</span> <span
  m="4513020">we</span> <span m="4513130">do</span> <span
  m="4513270">vote?</span> <span m="4519010">Here are</span> <span
  m="4519210">going</span> <span m="4519300">to</span> <span
  m="4519340">be</span> <span m="4519380">some</span> <span
  m="4519690">options.</span></p><p><span m="4536920">Question is</span> <span
  m="4537350">variance</span> <span m="4537790">over</span> <span
  m="4537930">the</span> <span m="4538030">mean</span> <span
  m="4538350">in</span> <span m="4538480">this</span> <span
  m="4538930">situation.</span> <span m="4547590">I'm worried that</span> <span
  m="4548030">this</span> <span m="4548330">is</span> <span
  m="4548420">not</span> <span m="4548570">going</span> <span
  m="4548660">to</span> <span m="4548700">work,</span> <span
  m="4548900">but</span> <span m="4549250">let's</span> <span
  m="4549390">just</span> <span m="4549490">see</span> <span
  m="4549600">where</span> <span m="4549840">are.</span> <span
  m="4550410">Ready,</span> <span m="4551150">3,</span> <span
  m="4552110">2,</span> <span m="4552850">1.</span> <span m="4556550">All
  right.</span> <span m="4556710">So</span> <span m="4556810">I'd</span> <span
  m="4556960">say</span> <span m="4557110">that</span> <span
  m="4557300">at</span> <span m="4557380">least</span> <span
  m="4558600">broadly,</span> <span m="4559780">people</span> <span
  m="4559990">are</span> <span m="4560310">agreeing</span> <span
  m="4560540">that</span> <span m="4560820">the</span> <span
  m="4561070">variance</span> <span m="4561370">over</span> <span
  m="4561480">the</span> <span m="4561540">mean</span> <span
  m="4561720">here</span> <span m="4561940">is</span> <span
  m="4562020">equal</span> <span m="4562180">to 1.</span></p><p><span
  m="4562250">And again,</span> <span m="4563340">this</span> <span
  m="4563500">is</span> <span m="4564160">the</span> <span
  m="4564260">situation</span> <span m="4564710">that we've</span> <span
  m="4564770">analyzed</span> <span m="4565320">many</span> <span
  m="4565580">times,</span> <span m="4566030">which</span> <span
  m="4566200">is</span> <span m="4566330">that</span> <span
  m="4566750">in</span> <span m="4566870">this</span> <span
  m="4567010">situation</span> <span m="4567370">we</span> <span
  m="4567450">get</span> <span m="4567560">a</span> <span
  m="4567620">poisson,</span> <span m="4568950">where</span> <span
  m="4569940">the</span> <span m="4570140">poisson</span> <span
  m="4570300">only</span> <span m="4570540">has</span> <span
  m="4570730">one</span> <span m="4571680">free</span> <span
  m="4571890">parameter,</span> <span m="4572650">and</span> <span
  m="4572810">that</span> <span m="4573300">parameter</span> <span
  m="4573780">specifies</span> <span m="4574190">both</span> <span
  m="4574510">the</span> <span m="4574950">mean</span> <span m="4575190">and
  the</span> <span m="4575370">variance.</span> <span m="4577050">So</span>
  <span m="4577200">for</span> <span m="4577550">a poisson,</span> <span
  m="4577970">the</span> <span m="4578020">variance</span> <span
  m="4578310">of</span> <span m="4578420">the</span> <span
  m="4578470">mean</span> <span m="4578660">is</span> <span
  m="4578900">indeed</span> <span m="4579110">equal</span> <span
  m="4579290">to</span> <span m="4579340">1.</span> <span m="4580550">So</span>
  <span m="4580740">the</span> <span m="4580880">Fokker-Planck</span> <span
  m="4581740">approximation</span> <span m="4582340">actually</span> <span
  m="4583620">accurately</span> <span m="4584330">recapitulates</span> <span
  m="4584970">that.</span></p><p><span m="4588220">Now</span> <span
  m="4588430">the</span> <span m="4588510">question</span> <span
  m="4588810">is,</span> <span m="4588920">what</span> <span
  m="4589080">will</span> <span m="4589180">the</span> <span
  m="4589250">variance</span> <span m="4589870">over</span> <span
  m="4590040">the</span> <span m="4590120">mean</span> <span
  m="4590360">be</span> <span m="4590730">in</span> <span m="4591610">the</span>
  <span m="4591760">situation</span> <span m="4592035">that</span> <span
  m="4592310">I've</span> <span m="4592450">just</span> <span
  m="4592630">drawn</span> <span m="4592880">here?</span> <span
  m="4595060">So</span> <span m="4595170">I'm</span> <span m="4595290">going
  to</span> <span m="4595350">give</span> <span m="4595490">you</span> <span
  m="4595840">a</span> <span m="4596130">minute</span> <span
  m="4596510">to</span> <span m="4596590">try</span> <span m="4596940">to</span>
  <span m="4597610">think</span> <span m="4597810">about</span> <span
  m="4598540">what</span> <span m="4598720">this</span> <span
  m="4598950">means.</span> <span m="4599720">And</span> <span
  m="4599820">there</span> <span m="4599930">are</span> <span
  m="4599950">multiple</span> <span m="4600330">ways</span> <span
  m="4600700">of</span> <span m="4601110">figuring</span> <span
  m="4601430">it</span> <span m="4601510">out.</span> <span
  m="4602100">You</span> <span m="4602180">can</span> <span
  m="4602630">look</span> <span m="4602950">at,</span> <span
  m="4603100">maybe,</span> <span m="4603310">the</span> <span
  m="4603400">integral.</span> <span m="4604080">You</span> <span
  m="4604220">can</span> <span m="4604350">think</span> <span
  m="4604530">about</span> <span m="4605340">the</span> <span
  m="4605510">biological</span> <span m="4606240">intuition</span> <span
  m="4607250">to</span> <span m="4607390">make</span> <span
  m="4607590">at</span> <span m="4607640">least</span> <span
  m="4607800">a</span> <span m="4607870">guess</span> <span
  m="4608330">of</span> <span m="4609130">of</span> <span
  m="4609210">what</span> <span m="4609410">it should</span> <span
  m="4609510">do.</span></p><p><span m="4610630">The</span> <span
  m="4611120">question</span> <span m="4611480">is,</span> <span
  m="4611640">if</span> <span m="4613490">the</span> <span
  m="4613580">production</span> <span m="4613990">rate</span> <span
  m="4614080">and</span> <span m="4614220">the</span> <span
  m="4614280">degradation</span> <span m="4614860">rate</span> <span
  m="4615050">look</span> <span m="4615160">like</span> <span
  m="4615270">this,</span> <span m="4615930">what</span> <span
  m="4616130">does</span> <span m="4616270">that</span> <span
  m="4617690">mean</span> <span m="4618220">for</span> <span
  m="4618370">the</span> <span m="4619000">variance</span> <span
  m="4619340">over</span> <span m="4619470">the</span> <span
  m="4619560">mean?</span> <span m="4620930">So I'll give you a</span> <span
  m="4621410">minute</span> <span m="4621680">to</span> <span
  m="4621820">kind</span> <span m="4621970">of</span> <span m="4622110">play
  with it.</span></p><p><span m="4676570">Why don't</span> <span
  m="4676700">we</span> <span m="4676800">go</span> <span
  m="4676890">ahead</span> <span m="4677110">and</span> <span
  m="4677300">vote,</span> <span m="4677440">just so</span> <span
  m="4677570">I</span> <span m="4677650">can</span> <span m="4678620">get</span>
  <span m="4678740">a</span> <span m="4678780">sense</span> <span
  m="4678980">of</span> <span m="4679050">where</span> <span
  m="4679160">we</span> <span m="4679250">are?</span> <span
  m="4679380">And</span> <span m="4679490">also,</span> <span
  m="4680420">it's</span> <span m="4680560">OK</span> <span
  m="4680820">if</span> <span m="4680920">you</span> <span
  m="4681060">can't</span> <span m="4681440">actually</span> <span
  m="4681780">figure</span> <span m="4682120">this</span> <span
  m="4682320">out</span> <span m="4682540">or</span> <span
  m="4682600">you're</span> <span m="4682720">confused.</span> <span
  m="4683520">But</span> <span m="4684040">go</span> <span
  m="4684210">ahead</span> <span m="4684350">and</span> <span
  m="4684600">make</span> <span m="4684750">your</span> <span
  m="4684840">best</span> <span m="4685080">guess</span> <span
  m="4685310">anyways,</span> <span m="4685930">because</span> <span
  m="4686170">it's</span> <span m="4686320">also</span> <span
  m="4686520">useful</span> <span m="4688230">if</span> <span
  m="4688370">you</span> <span m="4688480">can</span> <span
  m="4688600">guess</span> <span m="4688990">kind</span> <span
  m="4689100">of</span> <span m="4689160">the</span> <span m="4689230">direction
  it'll</span> <span m="4689750">go,</span> <span m="4689940">even</span> <span
  m="4690080">if</span> <span m="4690160">you</span> <span
  m="4690240">can't</span> <span m="4690460">figure</span> <span
  m="4690710">out</span> <span m="4691280">its</span> <span
  m="4691430">magnitude.</span></p><p><span m="4692520">So</span> <span
  m="4692740">let's</span> <span m="4693120">vote.</span> <span
  m="4693500">Ready,</span> <span m="4693850">3,</span> <span
  m="4694850">2,</span> <span m="4695760">1.</span> <span m="4698460">OK.</span>
  <span m="4698760">So</span> <span m="4699770">it's</span> <span
  m="4700420">a</span> <span m="4700470">mixture</span> <span
  m="4700890">now,</span> <span m="4701140">I'd</span> <span
  m="4701380">say,</span> <span m="4701670">of</span> <span
  m="4703030">A,</span> <span m="4703415">B,</span> <span m="4703800">C,</span>
  <span m="4704115">Ds.</span> <span m="4707740">Yeah,</span> <span
  m="4707950">I</span> <span m="4708040">think</span> <span
  m="4708200">this</span> <span m="4709230">is,</span> <span
  m="4709680">I</span> <span m="4709770">think,</span> <span
  m="4710020">hard</span> <span m="4710720">and</span> <span
  m="4711050">confusing.</span> <span m="4712860">I</span> <span
  m="4712880">maybe</span> <span m="4713160">won't</span> <span
  m="4713580">have--</span> <span m="4721990">all right.</span> <span
  m="4722180">I'll</span> <span m="4722510">maybe</span> <span
  m="4722740">say</span> <span m="4722940">something.</span> <span
  m="4723260">It may be</span> <span m="4723330">that</span> <span
  m="4724110">talking</span> <span m="4724980">to</span> <span
  m="4725080">each</span> <span m="4725250">other</span> <span
  m="4725420">won't</span> <span m="4725550">help</span> <span m="4725880">that
  much.</span></p><p><span m="4726860">OK,</span> <span m="4727040">so</span>
  <span m="4728220">in</span> <span m="4728280">this</span> <span
  m="4728440">case,</span> <span m="4729480">what's</span> <span
  m="4729740">relevant</span> <span m="4730140">is</span> <span
  m="4730320">both</span> <span m="4730750">the f</span> <span
  m="4730920">minus</span> <span m="4731500">g</span> <span
  m="4731670">and</span> <span m="4731740">the</span> <span m="4731850">f
  plus</span> <span m="4732430">g.</span> <span m="4734740">And</span> <span
  m="4734900">it</span> <span m="4735410">turns</span> <span
  m="4735660">out</span> <span m="4735760">that</span> <span
  m="4735980">f</span> <span m="4736220">minus</span> <span m="4736650">g</span>
  <span m="4736870">actually</span> <span m="4737260">behaves</span> <span
  m="4737620">the</span> <span m="4737680">same</span> <span
  m="4737990">way,</span> <span m="4738190">because</span> <span
  m="4738530">at</span> <span m="4738700">the</span> <span
  m="4738790">fixed</span> <span m="4739160">point,</span> <span
  m="4740330">or</span> <span m="4740560">at the</span> <span
  m="4740700">equilibrium,</span> <span m="4741380">it</span> <span
  m="4741490">starts</span> <span m="4741720">at</span> <span
  m="4741810">0</span> <span m="4742070">and</span> <span
  m="4742140">then</span> <span m="4742230">it</span> <span
  m="4742300">actually</span> <span m="4742490">grows</span> <span
  m="4743320">in</span> <span m="4743400">the</span> <span
  m="4743470">same</span> <span m="4743730">way</span> <span
  m="4743940">as</span> <span m="4744060">you</span> <span m="4744140">go</span>
  <span m="4744440">away from it.</span> <span m="4745310">The</span> <span
  m="4745450">difference</span> <span m="4745920">is</span> <span
  m="4746230">the f</span> <span m="4746410">plus</span> <span
  m="4746980">g,</span> <span m="4747200">where</span> <span
  m="4748800">that's</span> <span m="4748930">very</span> <span
  m="4749100">much</span> <span m="4749230">not</span> <span
  m="4749410">equal</span> <span m="4749630">to 0.</span> <span
  m="4750860">And</span> <span m="4751100">f</span> <span
  m="4751320">plus</span> <span m="4751660">g</span> <span m="4751890">at</span>
  <span m="4752100">the</span> <span m="4752960">equilibrium,</span> <span
  m="4753500">this</span> <span m="4754135">f</span> <span
  m="4754520">plus</span> <span m="4754780">g</span> <span
  m="4754920">here</span> <span m="4755670">is</span> <span
  m="4755810">around</span> <span m="4756110">2k,</span> <span
  m="4757660">whereas</span> <span m="4758010">f</span> <span
  m="4758210">plus</span> <span m="4758420">g</span> <span
  m="4758540">over</span> <span m="4758660">here</span> <span
  m="4760690">is</span> <span m="4760810">around</span> <span
  m="4761480">1k.</span></p><p><span m="4764540">What</span> <span
  m="4764660">that</span> <span m="4764780">means</span> <span
  m="4765030">is</span> <span m="4765150">that</span> <span
  m="4766690">in</span> <span m="4766810">both</span> <span
  m="4767010">cases</span> <span m="4767230">you</span> <span
  m="4767320">have</span> <span m="4767400">a</span> <span
  m="4767460">quadratic</span> <span m="4767970">potential.</span> <span
  m="4769180">But</span> <span m="4769790">here</span> <span
  m="4770060">the</span> <span m="4770180">quadratic</span> <span
  m="4770650">potential</span> <span m="4770970">actually</span> <span
  m="4771260">ends</span> <span m="4771370">up</span> <span
  m="4771480">being</span> <span m="4771640">steeper.</span> <span
  m="4772990">So</span> <span m="4773310">if</span> <span
  m="4773450">this</span> <span m="4773650">were</span> <span
  m="4773800">unregulated,</span> <span m="4774440">then</span> <span
  m="4774570">over</span> <span m="4774710">here</span> <span
  m="4775010">we</span> <span m="4775120">still</span> <span
  m="4775410">get</span> <span m="4777650">a</span> <span
  m="4777720">quadratic,</span> <span m="4778220">but</span> <span
  m="4778310">it's</span> <span m="4778730">with</span> <span
  m="4779240">steeper</span> <span m="4779590">walls.</span> <span
  m="4780970">So</span> <span m="4781120">actually</span> <span
  m="4781550">here,</span> <span m="4782890">this,</span> <span
  m="4783240">the</span> <span m="4783350">variance</span> <span
  m="4783720">over</span> <span m="4783840">the</span> <span
  m="4783930">mean,</span> <span m="4785290">ends</span> <span
  m="4785490">up</span> <span m="4785680">being</span> <span
  m="4785950">1/2.</span></p><p><span m="4789110">It's</span> <span
  m="4789330">useful</span> <span m="4789720">to</span> <span
  m="4789770">go</span> <span m="4789910">ahead</span> <span
  m="4790080">and</span> <span m="4790170">just</span> <span
  m="4790370">play</span> <span m="4790720">with</span> <span
  m="4791660">these</span> <span m="4791780">equations</span> <span
  m="4792190">to</span> <span m="4792300">see</span> <span
  m="4793100">why</span> <span m="4793240">that</span> <span
  m="4793380">happens.</span> <span m="4794890">And</span> <span
  m="4795050">I</span> <span m="4795110">think</span> <span
  m="4795260">that's</span> <span m="4795660">a</span> <span
  m="4795770">nice</span> <span m="4796040">way</span> <span
  m="4796160">to</span> <span m="4796240">think</span> <span
  m="4796430">about</span> <span m="4796580">this</span> <span m="4797025">is,
  in this</span> <span m="4797470">limit,</span> <span m="4797770">where</span>
  <span m="4797870">we</span> <span m="4798020">pull</span> <span
  m="4798290">this</span> <span m="4798450">crossing</span> <span
  m="4798740">point</span> <span m="4798930">all</span> <span m="4799080">the
  way down</span> <span m="4799190">to</span> <span m="4799410">0,</span> <span
  m="4803800">now</span> <span m="4803970">we</span> <span
  m="4804050">have</span> <span m="4804140">something</span> <span
  m="4804370">that looks</span> <span m="4804849">kind of</span> <span
  m="4805328">like this.</span> <span m="4810120">So</span> <span
  m="4810260">very,</span> <span m="4810890">very</span> <span
  m="4811830">low</span> <span m="4812340">rate</span> <span
  m="4812630">of</span> <span m="4812700">degradation.</span></p><p><span
  m="4814000">But</span> <span m="4814080">then</span> <span
  m="4814180">also</span> <span m="4814440">the</span> <span
  m="4814550">production</span> <span m="4815090">rate</span> <span
  m="4815840">essentially</span> <span m="4816070">goes</span> <span
  m="4816360">to</span> <span m="4816450">0</span> <span m="4818680">when</span>
  <span m="4818840">we're</span> <span m="4819030">at</span> <span
  m="4819130">this</span> <span m="4819290">point.</span> <span
  m="4821300">So</span> <span m="4821380">we</span> <span
  m="4821460">could</span> <span m="4821590">still</span> <span
  m="4821830">parameterize</span> <span m="4822150">as</span> <span
  m="4822470">k over gamma</span> <span m="4822810">if</span> <span
  m="4823260">we</span> <span m="4823360">want,</span> <span m="4823645">with
  some--</span> <span m="4826020">but</span> <span m="4826810">we</span> <span
  m="4826910">could</span> <span m="4827000">just</span> <span
  m="4827090">think</span> <span m="4827170">about</span> <span
  m="4827310">this</span> <span m="4827450">as</span> <span
  m="4828480">being</span> <span m="4828740">at</span> <span
  m="4829450">100</span> <span m="4830020">of</span> <span
  m="4830140">these</span> <span m="4830640">mRNAs,</span> <span
  m="4831160">say.</span> <span m="4831870">But</span> <span
  m="4831990">then</span> <span m="4832470">we're</span> <span
  m="4832650">changing</span> <span m="4833020">the</span> <span
  m="4833090">production</span> <span m="4833460">degradation</span> <span
  m="4833940">rate.</span></p><p><span m="4834910">And</span> <span
  m="4835140">the</span> <span m="4835210">variance</span> <span
  m="4835660">over</span> <span m="4835800">the</span> <span
  m="4835900">mean</span> <span m="4836210">here--</span> <span m="4837150">does
  anybody have a</span> <span m="4837260">guess of</span> <span
  m="4837360">where that goes?</span> <span m="4843540">In</span> <span
  m="4843600">this</span> <span m="4843740">case it</span> <span
  m="4843960">actually</span> <span m="4844210">goes</span> <span
  m="4844400">to</span> <span m="4844510">0.</span> <span m="4847950">And</span>
  <span m="4848100">this</span> <span m="4848250">is</span> <span
  m="4848360">an</span> <span m="4848440">interesting</span> <span
  m="4849200">situation,</span> <span m="4849720">because</span> <span
  m="4852080">really,</span> <span m="4852500">in</span> <span
  m="4852610">the</span> <span m="4852700">limit</span> <span
  m="4853110">where</span> <span m="4853230">there's</span> <span
  m="4853440">no</span> <span m="4853720">degradation,</span> <span
  m="4854735">and</span> <span m="4855050">it's</span> <span
  m="4855220">all</span> <span m="4855430">at</span> <span
  m="4855520">the</span> <span m="4855610">production</span> <span
  m="4855960">side,</span> <span m="4856210">what it's</span> <span
  m="4856330">saying</span> <span m="4856620">is</span> <span
  m="4856710">that</span> <span m="4856860">you</span> <span
  m="4856960">produce,</span> <span m="4857310">you</span> <span
  m="4857440">produce,</span> <span m="4857820">you</span> <span
  m="4857960">produce,</span> <span m="4858720">until</span> <span
  m="4858950">you</span> <span m="4859050">get</span> <span
  m="4859230">to</span> <span m="4859310">this</span> <span
  m="4859550">number,</span> <span m="4860080">which might be</span> <span
  m="4860430">100,</span> <span m="4861320">and</span> <span
  m="4861430">then</span> <span m="4861560">you</span> <span
  m="4861660">simply</span> <span m="4861970">stop</span> <span
  m="4862350">doing</span> <span m="4862560">anything.</span> <span
  m="4863260">You're</span> <span m="4863380">not</span> <span
  m="4863550">degrading,</span> <span m="4864050">you're</span> <span
  m="4864100">not</span> <span m="4864290">producing.</span> <span
  m="4865820">In</span> <span m="4865950">that</span> <span
  m="4866070">case</span> <span m="4866690">all</span> <span
  m="4866980">the</span> <span m="4867050">cells</span> <span
  m="4867500">will</span> <span m="4867630">have</span> <span
  m="4867770">exactly</span> <span m="4868180">100,</span> <span
  m="4869420">maybe,</span> <span m="4869560">mRNA.</span></p><p><span
  m="4873380">And</span> <span m="4873530">what</span> <span
  m="4873730">the</span> <span m="4874180">Fokker-Planck</span> <span
  m="4875310">kind</span> <span m="4875440">of</span> <span
  m="4875520">formalism</span> <span m="4876420">tells</span> <span
  m="4876760">you</span> <span m="4876890">is</span> <span
  m="4877000">that</span> <span m="4877610">just</span> <span
  m="4877900">because</span> <span m="4878250">production</span> <span
  m="4878650">and</span> <span m="4878740">degradation</span> <span
  m="4879420">rates</span> <span m="4879730">are</span> <span
  m="4879870">equal,</span> <span m="4880710">f</span> <span
  m="4881130">minus</span> <span m="4881410">g</span> <span
  m="4881530">is</span> <span m="4881610">equal</span> <span
  m="4881770">to</span> <span m="4881810">0,</span> <span
  m="4882570">doesn't</span> <span m="4883190">mean</span> <span
  m="4883690">that--</span> <span m="4884470">that</span> <span
  m="4884620">tells</span> <span m="4884800">you that</span> <span
  m="4884860">that's</span> <span m="4885220">the</span> <span
  m="4885420">equilibrium,</span> <span m="4885820">but</span> <span
  m="4885910">it</span> <span m="4885960">doesn't</span> <span
  m="4886190">tell</span> <span m="4886320">you</span> <span
  m="4886540">how</span> <span m="4886650">much</span> <span
  m="4886800">spread</span> <span m="4887160">there's</span> <span
  m="4887320">going</span> <span m="4887420">to</span> <span
  m="4887460">be</span> <span m="4887580">around the</span> <span
  m="4887840">equilibrium.</span> <span m="4888940">If</span> <span
  m="4889270">f</span> <span m="4889480">and</span> <span m="4889590">g</span>
  <span m="4889760">are</span> <span m="4889860">each</span> <span
  m="4890090">larger,</span> <span m="4890860">that</span> <span
  m="4891020">leads</span> <span m="4891170">to</span> <span
  m="4891260">a</span> <span m="4891310">larger</span> <span
  m="4891650">spread</span> <span m="4891960">because</span> <span
  m="4892120">there's</span> <span m="4892260">more</span> <span
  m="4892470">randomness,</span> <span m="4893890">whereas</span> <span
  m="4894180">here,</span> <span m="4894540">f</span> <span
  m="4894700">and</span> <span m="4894820">g</span> <span m="4895020">are</span>
  <span m="4895140">both</span> <span m="4895500">essentially</span> <span
  m="4895860">0</span> <span m="4896220">at</span> <span m="4896270">that</span>
  <span m="4896430">point.</span> <span m="4897420">What</span> <span
  m="4897520">that</span> <span m="4897550">means</span> <span
  m="4897780">is</span> <span m="4897890">that</span> <span
  m="4898710">you</span> <span m="4898840">kind</span> <span
  m="4899010">of</span> <span m="4899070">just</span> <span
  m="4899260">pile</span> <span m="4899600">up</span> <span
  m="4899750">right</span> <span m="4900020">at</span> <span
  m="4900110">that</span> <span m="4900320">precise value.</span></p><p><span
  m="4905250">We are</span> <span m="4905500">out</span> <span
  m="4905620">of</span> <span m="4905700">time,</span> <span m="4906010">so I
  think</span> <span m="4906220">we should</span> <span m="4906390">quit.</span>
  <span m="4906680">But</span> <span m="4906820">I</span> <span
  m="4906970">am</span> <span m="4907120">available</span> <span
  m="4907430">for</span> <span m="4907500">the</span> <span
  m="4907540">next</span> <span m="4907740">half</span> <span
  m="4907960">hour</span> <span m="4908170">if anybody</span> <span
  m="4908460">has</span> <span m="4908760">any questions.</span> <span
  m="4909360">Thanks.</span></p>
uid: a84a49e74da72edc1088dcd34c1649d5
type: course
layout: video
---
