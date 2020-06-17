---
about_this_resource_text: >-
  <p><strong>Description</strong>: In this lecture, Prof. Winston discusses
  modern breakthroughs in neural net research.</p>
  <p><strong>Instructor</strong>: Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: VrMHA3yX_QI
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: Video-YouTube-Stream
    type: Video
    uid: 5eb1a9e513adc9f07623b8733fb97ee3
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/VrMHA3yX_QI/default.jpg'
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: dde433f0f1e8e75f13822675ce861545
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: VrMHA3yX_QI
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9db6549504bbcdd1f87417b368ea1d38
  - id: VrMHA3yX_QI.srt
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-12b-deep-neural-nets/VrMHA3yX_QI.srt
    title: 3play caption file
    type: null
    uid: 6606d548ed1fd623cb0b0dc2b9853889
  - id: VrMHA3yX_QI.pdf
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-12b-deep-neural-nets/VrMHA3yX_QI.pdf
    title: 3play pdf file
    type: null
    uid: 2adffca2acd3c22da036a81e893b029a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 917b1d47f040ba54b06d50a0501aa587
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1557a5492d1fa5893aedf983a2a31a61
  - id: Video-InternetArchive-MP4
    media_location: 'http://archive.org/download/MIT6.034F10/MIT6_034F10_lec12B_300k.mp4'
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: Video-Internet Archive-MP4
    type: Video
    uid: fcbc2b8c7eedd29418530a4430f32e85
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id765641080'
    parent_uid: a0bfc251500691dcea20b3e78fedecd8
    title: Video-iTunes U-MP4
    type: Video
    uid: b7f9ff0015d27319dff1906a40350b6e
inline_embed_id: '77511257lecture12b:deepneuralnets76443030'
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-12b-deep-neural-nets
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-12b-deep-neural-nets
title: 'Lecture 12B: Deep Neural Nets'
transcript: >-
  <p><span m="40">The</span> <span m="140">following</span> <span
  m="610">content</span> <span m="1100">is</span> <span m="1220">provided</span>
  <span m="1670">under</span> <span m="1910">a</span> <span
  m="1960">Creative</span> <span m="2410">Commons</span> <span
  m="2830">license.</span> <span m="3790">Your</span> <span
  m="3890">support</span> <span m="4410">will</span> <span m="4580">help</span>
  <span m="4800">MIT</span> <span m="5290">OpenCourseWare</span> <span
  m="6030">continue</span> <span m="6520">to</span> <span m="6680">offer</span>
  <span m="6980">high-quality</span> <span m="7690">educational</span> <span
  m="8360">resources</span> <span m="8930">for</span> <span
  m="9050">free.</span> <span m="10100">To</span> <span m="10140">make</span>
  <span m="10340">a</span> <span m="10380">donation</span> <span
  m="11090">or</span> <span m="11320">to</span> <span m="11440">view</span>
  <span m="11650">additional</span> <span m="12060">materials</span> <span
  m="12680">from</span> <span m="12860">hundreds</span> <span
  m="13190">of</span> <span m="13300">MIT</span> <span m="13660">courses,</span>
  <span m="14950">visit</span> <span m="15160">MIT</span> <span
  m="15680">OpenCourseWare</span> <span m="16590">at</span> <span
  m="16770">ocw.mit.edu.</span></p><p><span m="30885">[MUSIC
  PLAYING]</span></p><p>&nbsp;</p><p><span m="38340">PATRICK H. WINSTON:
  Well,</span> <span m="38650">what</span> <span m="38820">we're</span> <span
  m="38910">going</span> <span m="39080">to</span> <span m="39160">do</span>
  <span m="39260">today</span> <span m="40030">is</span> <span
  m="40220">climb</span> <span m="40500">a</span> <span m="40560">pretty</span>
  <span m="40850">big</span> <span m="41230">mountain</span> <span
  m="41730">because</span> <span m="42010">we're</span> <span
  m="42110">going</span> <span m="42270">to</span> <span m="42340">go</span>
  <span m="42680">from a</span> <span m="42840">neural  net</span> <span
  m="43305">with</span> <span m="43770">two</span> <span
  m="43920">parameters</span> <span m="45670">to</span> <span
  m="45790">discussing</span> <span m="46880">the</span> <span
  m="46960">kind</span> <span m="47250">of</span> <span m="47320">neural</span>
  <span m="47620">nets</span> <span m="47940">in</span> <span
  m="48050">which</span> <span m="49410">people</span> <span
  m="49700">end</span> <span m="49920">up</span> <span m="51400">dealing</span>
  <span m="51780">with</span> <span m="54110">60</span> <span
  m="54460">million</span> <span m="54820">parameters.</span> <span
  m="56590">So</span> <span m="56710">it's</span> <span m="56800">going</span>
  <span m="56920">to</span> <span m="56980">be</span> <span m="57040">a</span>
  <span m="57100">pretty</span> <span m="57380">big</span> <span
  m="57630">jump.</span></p><p><span m="59250">Along</span> <span
  m="59550">the</span> <span m="59620">way</span> <span m="59810">are</span>
  <span m="59870">a</span> <span m="59910">couple</span> <span
  m="60230">things</span> <span m="60550">I</span> <span m="60640">wanted</span>
  <span m="60820">to</span> <span m="61740">underscore</span> <span
  m="63000">from</span> <span m="63180">our</span> <span
  m="63300">previous</span> <span m="63720">discussion.</span> <span
  m="65750">Last</span> <span m="66100">time,</span> <span m="66350">I</span>
  <span m="66630">tried</span> <span m="66860">to</span> <span
  m="66990">develop</span> <span m="67540">some</span> <span
  m="67770">intuition</span> <span m="68340">for</span> <span
  m="68560">the</span> <span m="68630">kinds</span> <span m="68980">of</span>
  <span m="69060">formulas</span> <span m="69670">that</span> <span
  m="69830">you</span> <span m="70000">use</span> <span m="70950">to</span>
  <span m="71110">actually</span> <span m="71460">do</span> <span
  m="71600">the</span> <span m="72010">calculations</span> <span
  m="72710">in</span> <span m="72790">a</span> <span m="72840">small</span>
  <span m="73200">neural</span> <span m="73480">net</span> <span
  m="73800">about</span> <span m="74080">how</span> <span m="74230">the</span>
  <span m="74310">weights</span> <span m="74600">are</span> <span
  m="74640">going</span> <span m="74780">to</span> <span
  m="74860">change.</span> <span m="76160">And</span> <span m="76530">the</span>
  <span m="76610">main</span> <span m="76790">thing</span> <span
  m="77000">I</span> <span m="77070">tried</span> <span m="77290">to</span>
  <span m="77400">emphasize</span> <span m="78230">is</span> <span
  m="78590">that</span> <span m="79800">when</span> <span m="80000">you</span>
  <span m="80100">have</span> <span m="80350">a</span> <span
  m="80850">neural</span> <span m="81120">net</span> <span m="81340">like</span>
  <span m="81590">this</span> <span m="81790">one,</span> <span
  m="90420">everything</span> <span m="91310">is</span> <span
  m="92000">sort</span> <span m="92270">of</span> <span m="92350">divided</span>
  <span m="94300">in</span> <span m="94440">each</span> <span
  m="94650">column.</span></p><p><span m="96610">You</span> <span
  m="96640">can't</span> <span m="97580">have</span> <span m="98730">the</span>
  <span m="98830">performance</span> <span m="99410">based</span> <span
  m="99740">on</span> <span m="100690">this</span> <span
  m="100950">output</span> <span m="102360">affect</span> <span
  m="102760">some</span> <span m="103070">weight</span> <span
  m="103320">change</span> <span m="103710">back</span> <span
  m="104010">here</span> <span m="104940">without</span> <span
  m="105280">going</span> <span m="105560">through</span> <span
  m="105820">this</span> <span m="106870">finite</span> <span
  m="107280">number</span> <span m="107980">of</span> <span
  m="108790">output</span> <span m="109150">variables,</span> <span
  m="109760">the</span> <span m="109850">y1s.</span> <span m="111036">And</span>
  <span m="111500">by</span> <span m="111700">the</span> <span
  m="111780">way,</span> <span m="111900">there's</span> <span
  m="112050">no</span> <span m="112190">y2</span> <span m="112390">and</span>
  <span m="112670">y4--</span> <span m="114570">there's</span> <span
  m="114810">no</span> <span m="114930">y2</span> <span m="115490">and</span>
  <span m="115820">y3.</span> <span m="117310">Dealing</span> <span
  m="117610">with</span> <span m="117700">this</span> <span m="117910">is</span>
  <span m="118120">really</span> <span m="118430">a</span> <span
  m="118500">notational</span> <span m="119130">nightmare,</span> <span
  m="120510">and</span> <span m="121260">I</span> <span m="121360">spent</span>
  <span m="122910">a</span> <span m="123000">lot</span> <span
  m="123190">of</span> <span m="123260">time</span> <span
  m="123500">yesterday</span> <span m="123890">trying</span> <span
  m="124130">to</span> <span m="124680">clean</span> <span m="124920">it</span>
  <span m="125030">up</span> <span m="125170">a</span> <span
  m="125210">little</span> <span m="125420">bit.</span></p><p><span
  m="126430">But</span> <span m="126600">basically,</span> <span
  m="126950">what</span> <span m="127080">I'm</span> <span
  m="127190">trying</span> <span m="127390">to</span> <span
  m="127460">say</span> <span m="127690">has</span> <span
  m="127830">nothing</span> <span m="128080">to</span> <span
  m="128199">do</span> <span m="128400">with</span> <span m="128580">the</span>
  <span m="128699">notation</span> <span m="128959">I</span> <span
  m="129220">have</span> <span m="129460">used</span> <span
  m="130070">but</span> <span m="130240">rather</span> <span
  m="130500">with</span> <span m="130610">the</span> <span
  m="130669">fact</span> <span m="130949">that</span> <span
  m="131060">there's</span> <span m="131500">a</span> <span
  m="131610">limited</span> <span m="131930">number</span> <span
  m="132290">of</span> <span m="133050">ways</span> <span m="133320">in</span>
  <span m="133410">which</span> <span m="133640">that</span> <span
  m="134160">can</span> <span m="134300">influence</span> <span
  m="134780">this,</span> <span m="135330">even</span> <span
  m="135580">though</span> <span m="135710">the</span> <span
  m="135780">number</span> <span m="136000">of</span> <span
  m="136090">paths</span> <span m="136620">through</span> <span
  m="136770">this</span> <span m="136940">network</span> <span
  m="137290">can</span> <span m="137440">be</span> <span
  m="137750">growing</span> <span m="138060">exponential.</span> <span
  m="139930">So</span> <span m="140050">those</span> <span
  m="140290">equations</span> <span m="141330">underneath</span> <span
  m="142660">are</span> <span m="142840">equations</span> <span
  m="143320">that</span> <span m="143710">derive</span> <span
  m="144720">from</span> <span m="144880">trying</span> <span
  m="145100">to</span> <span m="145170">figure</span> <span
  m="145500">out</span> <span m="146420">how</span> <span m="146710">the</span>
  <span m="146860">output</span> <span m="148280">performance</span> <span
  m="149960">depends</span> <span m="150520">on</span> <span
  m="151420">some</span> <span m="151690">of</span> <span
  m="151760">these</span> <span m="151950">weights</span> <span
  m="152250">back</span> <span m="152530">here.</span></p><p><span
  m="153620">And</span> <span m="153760">what</span> <span
  m="153890">I've</span> <span m="154010">calculated</span> <span
  m="155330">is</span> <span m="155450">I've</span> <span
  m="155550">calculated</span> <span m="156180">the</span> <span
  m="156250">dependence</span> <span m="157810">of</span> <span
  m="157960">the</span> <span m="158040">performance</span> <span
  m="159610">on</span> <span m="159770">w1</span> <span m="161000">going</span>
  <span m="161340">that</span> <span m="161610">way,</span> <span
  m="162920">and</span> <span m="163340">I've</span> <span
  m="163430">also</span> <span m="163700">calculated</span> <span
  m="164260">the</span> <span m="164840">dependence</span> <span
  m="168295">of</span> <span m="168780">performance</span> <span
  m="169010">on</span> <span m="170330">w1</span> <span m="170680">going</span>
  <span m="170880">that</span> <span m="171100">way.</span> <span
  m="172420">So</span> <span m="172470">that's</span> <span
  m="172960">one</span> <span m="174260">of</span> <span m="174390">the</span>
  <span m="174450">equations</span> <span m="174900">I've</span> <span
  m="175030">got</span> <span m="175270">down</span> <span
  m="175500">there.</span> <span m="175910">And</span> <span
  m="176220">another</span> <span m="176630">one</span> <span
  m="176820">deals</span> <span m="177070">with</span> <span
  m="177210">w3,</span> <span m="178530">and</span> <span m="178680">it</span>
  <span m="178830">involves</span> <span m="179390">going</span> <span
  m="182490">both</span> <span m="182770">this</span> <span
  m="182980">way</span> <span m="185450">and</span> <span m="185630">this</span>
  <span m="185810">way.</span> <span m="187060">And</span> <span
  m="187200">all</span> <span m="187370">I've</span> <span
  m="187470">done</span> <span m="188040">in</span> <span m="188230">both</span>
  <span m="188470">cases,</span> <span m="189110">in</span> <span
  m="189250">all</span> <span m="189380">four</span> <span
  m="189620">cases,</span> <span m="190110">is</span> <span
  m="190290">just</span> <span m="190940">take</span> <span
  m="191140">the</span> <span m="191220">partial</span> <span
  m="191590">derivative</span> <span m="192040">of</span> <span
  m="192150">performance</span> <span m="193350">with</span> <span
  m="193610">respect</span> <span m="193820">to</span> <span
  m="193900">those</span> <span m="194120">weights</span> <span
  m="194810">and</span> <span m="194960">use</span> <span m="195130">the</span>
  <span m="195220">chain</span> <span m="195570">rule</span> <span
  m="195750">to</span> <span m="195880">expand</span> <span
  m="196270">it.</span></p><p><span m="197270">And</span> <span
  m="197390">when</span> <span m="197520">I</span> <span m="197580">do</span>
  <span m="197770">that,</span> <span m="203610">this</span> <span
  m="203830">is</span> <span m="203910">the</span> <span m="204000">stuff</span>
  <span m="204310">I</span> <span m="204410">get.</span> <span
  m="205780">And</span> <span m="205950">that's</span> <span
  m="206200">just</span> <span m="206510">a</span> <span m="206570">whole</span>
  <span m="206740">bunch</span> <span m="206940">of</span> <span
  m="207030">partial</span> <span m="207410">derivatives.</span> <span
  m="207940">But</span> <span m="208070">if</span> <span m="208160">you</span>
  <span m="208280">look</span> <span m="208510">at</span> <span
  m="208670">it</span> <span m="208960">and</span> <span m="209070">let
  it</span> <span m="209240">sing</span> <span m="209500">a</span> <span
  m="209550">little</span> <span m="209750">bit</span> <span m="209980">to
  you,</span> <span m="210510">what</span> <span m="210710">you</span> <span
  m="210800">see</span> <span m="210990">is</span> <span m="211150">that</span>
  <span m="211260">there's</span> <span m="211430">a</span> <span
  m="211480">lot</span> <span m="211700">of</span> <span
  m="211780">redundancy</span> <span m="212330">in</span> <span
  m="212420">the</span> <span m="212490">computation.</span> <span
  m="214270">So</span> <span m="214410">for</span> <span
  m="214570">example,</span> <span m="217620">this</span> <span
  m="217690">guy</span> <span m="217900">here,</span> <span m="218760">partial
  of</span> <span m="219220">performance</span> <span m="219490">with</span>
  <span m="219760">respect</span> <span m="219910">to</span> <span
  m="220320">w1,</span> <span m="221800">depends</span> <span
  m="222160">on</span> <span m="222310">both</span> <span
  m="222560">paths,</span> <span m="223020">of</span> <span
  m="223140">course.</span></p><p><span m="225350">But</span> <span
  m="225460">look</span> <span m="225600">at</span> <span m="225670">the</span>
  <span m="225730">first</span> <span m="226050">elements</span> <span
  m="226480">here,</span> <span m="227790">these</span> <span
  m="227960">guys</span> <span m="228200">right</span> <span
  m="228350">here.</span> <span m="231150">And</span> <span
  m="231290">look</span> <span m="231440">at</span> <span m="231550">the</span>
  <span m="231620">first</span> <span m="231930">elements</span> <span
  m="232710">in</span> <span m="232860">the</span> <span
  m="233360">expression</span> <span m="233850">for</span> <span
  m="234680">calculating</span> <span m="235080">the</span> <span
  m="235140">partial</span> <span m="235510">derivative of</span> <span
  m="235920">performance</span> <span m="236210">with</span> <span
  m="236260">respect</span> <span m="236530">to</span> <span
  m="236800">w3,</span> <span m="239360">these</span> <span
  m="239560">guys.</span> <span m="244700">They're</span> <span
  m="244820">the</span> <span m="244890">same.</span></p><p><span
  m="247920">And</span> <span m="248070">not</span> <span m="248210">only</span>
  <span m="248450">that,</span> <span m="248880">if</span> <span
  m="248990">you</span> <span m="249090">look</span> <span
  m="249280">inside</span> <span m="249910">these</span> <span
  m="250360">expressions</span> <span m="252310">and</span> <span
  m="252470">look</span> <span m="252640">at</span> <span m="252750">this</span>
  <span m="252910">particular</span> <span m="253330">piece</span> <span
  m="253630">here,</span> <span m="256399">you</span> <span
  m="256500">see</span> <span m="256760">that</span> <span
  m="257620">that</span> <span m="257959">is</span> <span m="258110">an</span>
  <span m="258190">expression</span> <span m="258700">that</span> <span
  m="258810">was</span> <span m="258990">needed</span> <span
  m="259709">in</span> <span m="259839">order</span> <span m="260050">to</span>
  <span m="260120">calculate</span> <span m="261589">one</span> <span
  m="261779">of</span> <span m="261890">the</span> <span
  m="262420">downstream</span> <span m="263510">weights,</span> <span
  m="263845">the</span> <span m="264180">changes in</span> <span
  m="264550">one</span> <span m="264710">of</span> <span m="264770">the</span>
  <span m="264840">downstream</span> <span m="265430">weights.</span> <span
  m="267370">But</span> <span m="267500">it</span> <span
  m="267600">happens</span> <span m="267930">to</span> <span
  m="267990">be</span> <span m="268110">the</span> <span m="268200">same</span>
  <span m="268470">thing</span> <span m="269070">as</span> <span
  m="269230">you</span> <span m="269300">see</span> <span m="269490">over</span>
  <span m="269680">here.</span> <span m="272780">And</span> <span
  m="272890">likewise,</span> <span m="273380">this</span> <span
  m="273560">piece</span> <span m="277220">is</span> <span m="277350">the</span>
  <span m="277420">same</span> <span m="277710">thing</span> <span
  m="280670">you</span> <span m="280760">see</span> <span m="280940">over</span>
  <span m="281090">here.</span></p><p><span m="284630">So</span> <span
  m="284720">each</span> <span m="284940">time</span> <span
  m="285200">you</span> <span m="285290">move</span> <span
  m="285950">further</span> <span m="286300">and</span> <span
  m="286430">further</span> <span m="286730">back</span> <span
  m="287180">from</span> <span m="287330">the</span> <span
  m="287480">outputs</span> <span m="288000">toward</span> <span
  m="288220">the</span> <span m="288320">inputs,</span> <span
  m="289290">you're</span> <span m="289480">reusing</span> <span
  m="290290">a</span> <span m="290390">lot</span> <span m="290560">of</span>
  <span m="290620">computation</span> <span m="291270">that</span> <span
  m="291380">you've</span> <span m="291520">already</span> <span
  m="291840">done.</span> <span m="294180">So</span> <span m="294340">I'm</span>
  <span m="294400">trying</span> <span m="294590">to</span> <span
  m="295020">find</span> <span m="295260">a</span> <span m="295300">way</span>
  <span m="295420">to</span> <span m="295500">sloganize</span> <span
  m="296290">this,</span> <span m="297250">and</span> <span
  m="297450">what</span> <span m="297710">I've</span> <span
  m="297840">come</span> <span m="298050">up</span> <span m="298220">with</span>
  <span m="298470">is</span> <span m="299630">what's</span> <span
  m="300030">done</span> <span m="300660">is</span> <span m="300940">done</span>
  <span m="301710">and</span> <span m="301910">cannot</span> <span
  m="302280">be--</span> <span m="302930">no,</span> <span m="303070">no.</span>
  <span m="303260">That's</span> <span m="303680">not</span> <span
  m="303890">quite</span> <span m="304110">right,</span> <span
  m="304290">is</span> <span m="304410">it?</span> <span m="305080">It's</span>
  <span m="306280">what's</span> <span m="306540">computed</span> <span
  m="307190">is</span> <span m="307380">computed</span> <span
  m="307675">and</span> <span m="307970">need</span> <span m="308260">not</span>
  <span m="308450">be</span> <span m="308610">recomputed.</span> <span
  m="310090">OK?</span> <span m="310930">So</span> <span
  m="311040">that's</span> <span m="311190">what's</span> <span
  m="311350">going</span> <span m="311540">on</span> <span
  m="311720">here.</span> <span m="312010">And</span> <span
  m="312110">that's</span> <span m="312180">why</span> <span
  m="312360">this</span> <span m="312520">is</span> <span m="312710">a</span>
  <span m="313940">calculation</span> <span m="315200">that's</span> <span
  m="316180">linear</span> <span m="316650">in</span> <span
  m="318850">the</span> <span m="318980">depths</span> <span
  m="319310">of</span> <span m="319410">the</span> <span
  m="319500">neural</span> <span m="319750">net,</span> <span
  m="320080">not</span> <span m="320410">exponential.</span></p><p><span
  m="322480">There's</span> <span m="322640">another</span> <span
  m="322880">thing</span> <span m="323080">I</span> <span
  m="323130">wanted</span> <span m="323360">to</span> <span
  m="323420">point</span> <span m="323740">out</span> <span m="323910">in</span>
  <span m="323980">connection</span> <span m="324450">with</span> <span
  m="325980">these</span> <span m="326220">neural</span> <span
  m="326440">nets.</span> <span m="328970">And</span> <span
  m="329130">that</span> <span m="329250">has</span> <span m="329420">to</span>
  <span m="329510">do</span> <span m="329680">with</span> <span
  m="329910">what</span> <span m="330090">happens</span> <span
  m="330400">when</span> <span m="330490">we</span> <span m="330590">look</span>
  <span m="330770">at</span> <span m="330840">a</span> <span
  m="330880">single</span> <span m="331600">neuron</span> <span
  m="333130">and</span> <span m="333300">note</span> <span
  m="333500">that</span> <span m="333600">what</span> <span
  m="333730">we've</span> <span m="333880">got</span> <span m="334870">is</span>
  <span m="334980">we've</span> <span m="335110">got</span> <span
  m="335270">a</span> <span m="335310">bunch</span> <span m="335600">of</span>
  <span m="335690">weights</span> <span m="336920">that</span> <span
  m="337080">you</span> <span m="337170">multiply</span> <span
  m="337640">times</span> <span m="337920">a</span> <span
  m="337980">bunch</span> <span m="338210">of</span> <span
  m="338310">inputs</span> <span m="338770">like</span> <span
  m="338960">so.</span> <span m="346960">And</span> <span m="347100">then</span>
  <span m="347230">those</span> <span m="347460">are</span> <span
  m="347540">all</span> <span m="347810">summed</span> <span
  m="348160">up</span> <span m="348730">in</span> <span m="348830">a</span>
  <span m="348890">summing</span> <span m="349260">box</span> <span
  m="351390">before</span> <span m="351740">they</span> <span
  m="351890">enter</span> <span m="352230">some</span> <span
  m="352450">kind</span> <span m="353890">of</span> <span
  m="354020">non-linearity,</span> <span m="356160">in</span> <span
  m="356290">our</span> <span m="356420">case</span> <span m="357920">a</span>
  <span m="357990">sigmoid</span> <span m="358440">function.</span></p><p><span
  m="360480">But</span> <span m="360620">if</span> <span m="360720">I</span>
  <span m="360860">ask</span> <span m="361170">you</span> <span
  m="362670">to</span> <span m="362800">write</span> <span
  m="362990">down</span> <span m="363230">the</span> <span
  m="363310">expression</span> <span m="364980">for</span> <span
  m="365140">the</span> <span m="365490">value</span> <span
  m="365890">we've</span> <span m="366050">got</span> <span
  m="366280">there,</span> <span m="366460">what</span> <span
  m="366610">is</span> <span m="366770">it?</span> <span m="367150">Well,</span>
  <span m="367400">it's</span> <span m="367550">just</span> <span
  m="368630">the</span> <span m="368730">sum</span> <span m="370400">of</span>
  <span m="370560">the</span> <span m="370640">w's</span> <span m="372270">times
  the</span> <span m="372620">x's.</span> <span m="376570">What's</span> <span
  m="376780">that?</span> <span m="380590">That's the</span> <span
  m="380830">dot</span> <span m="381030">product.</span> <span
  m="382890">Remember</span> <span m="383080">a</span> <span
  m="383130">few</span> <span m="383280">lectures</span> <span
  m="383700">ago</span> <span m="383930">I</span> <span m="384030">said</span>
  <span m="384310">that</span> <span m="384420">some</span> <span
  m="384600">of</span> <span m="384720">us</span> <span
  m="384930">believe</span> <span m="385360">that</span> <span
  m="385520">the</span> <span m="385600">dot</span> <span
  m="385830">product</span> <span m="386220">is</span> <span m="386360">a</span>
  <span m="386680">fundamental</span> <span m="387260">calculation</span> <span
  m="388510">that</span> <span m="388690">takes</span> <span
  m="388930">place</span> <span m="389200">in</span> <span m="389270">our</span>
  <span m="389370">heads?</span> <span m="390760">So</span> <span
  m="390810">this</span> <span m="390950">is</span> <span m="391010">why</span>
  <span m="391790">we</span> <span m="391890">think</span> <span
  m="392070">so.</span> <span m="393790">If</span> <span
  m="393970">neural</span> <span m="394190">nets</span> <span
  m="394430">are</span> <span m="394510">doing</span> <span
  m="394790">anything</span> <span m="395270">like</span> <span
  m="395580">this,</span> <span m="396880">then</span> <span
  m="397020">there's</span> <span m="397180">a</span> <span
  m="397230">dot</span> <span m="397510">product</span> <span
  m="397880">between</span> <span m="398180">some</span> <span
  m="398370">weights</span> <span m="399200">and</span> <span
  m="399370">some</span> <span m="399530">input</span> <span
  m="399830">values.</span></p><p><span m="401250">Now,</span> <span
  m="401970">it's</span> <span m="402160">a</span> <span m="402210">funny</span>
  <span m="402490">kind</span> <span m="402780">of</span> <span
  m="403230">dot</span> <span m="403500">product</span> <span
  m="403900">because</span> <span m="405650">in</span> <span
  m="405830">the</span> <span m="405870">models that</span> <span
  m="406260">we've</span> <span m="406460">been</span> <span
  m="406610">using,</span> <span m="407410">these</span> <span
  m="407600">input</span> <span m="407900">variables</span> <span
  m="408400">are</span> <span m="408680">all</span> <span m="408950">or</span>
  <span m="409010">none,</span> <span m="409270">or</span> <span
  m="409370">0</span> <span m="409660">or</span> <span m="409730">1.</span>
  <span m="410890">But</span> <span m="411000">that's</span> <span
  m="411200">OK.</span> <span m="412500">I</span> <span m="412630">have
  it</span> <span m="412760">on</span> <span m="412880">good</span> <span
  m="413070">authority</span> <span m="413860">that</span> <span
  m="414010">there</span> <span m="414110">are</span> <span
  m="414540">neurons</span> <span m="414940">in</span> <span
  m="415020">our</span> <span m="415150">head</span> <span m="416030">for</span>
  <span m="416170">which</span> <span m="416910">the</span> <span
  m="417410">values</span> <span m="417970">that</span> <span
  m="418090">are</span> <span m="418940">produced</span> <span
  m="419550">are</span> <span m="419660">not</span> <span
  m="419890">exactly</span> <span m="420340">all</span> <span
  m="420720">or</span> <span m="420900">none</span> <span m="421600">but</span>
  <span m="421720">rather</span> <span m="421910">have</span> <span
  m="422090">a</span> <span m="422140">kind</span> <span m="422350">of</span>
  <span m="422420">proportionality</span> <span m="423130">to</span> <span
  m="423310">them.</span> <span m="423950">So</span> <span m="424080">you</span>
  <span m="424140">get</span> <span m="424260">a</span> <span
  m="424320">real</span> <span m="424530">dot</span> <span
  m="424790">product</span> <span m="425090">type of</span> <span
  m="425390">operation</span> <span m="425860">out</span> <span
  m="425970">of</span> <span m="426030">that.</span></p><p><span
  m="427850">So</span> <span m="427980">that's</span> <span m="428150">by</span>
  <span m="428300">way</span> <span m="428470">of</span> <span
  m="428560">a</span> <span m="428610">couple</span> <span m="428890">of</span>
  <span m="428980">asides</span> <span m="429510">that</span> <span
  m="429890">I</span> <span m="430190">wanted</span> <span m="430450">to</span>
  <span m="430510">underscore</span> <span m="431010">before</span> <span
  m="431300">we</span> <span m="431400">get</span> <span m="432160">into</span>
  <span m="432450">the</span> <span m="433870">center</span> <span
  m="434460">of</span> <span m="434850">today's</span> <span
  m="435250">discussion,</span> <span m="436360">which</span> <span
  m="436570">will</span> <span m="436700">be</span> <span m="436910">to</span>
  <span m="437320">talk</span> <span m="437620">about</span> <span
  m="437900">the</span> <span m="438080">so-called</span> <span
  m="438540">deep</span> <span m="438730">nets.</span> <span
  m="440830">Now,</span> <span m="441120">let's</span> <span
  m="441320">see,</span> <span m="441600">what's</span> <span
  m="441820">a</span> <span m="441870">deep</span> <span m="442090">net</span>
  <span m="442290">do?</span> <span m="443890">Well,</span> <span
  m="446160">from</span> <span m="446330">last</span> <span
  m="446600">time,</span> <span m="448230">you</span> <span
  m="448350">know</span> <span m="448610">that</span> <span m="449030">a</span>
  <span m="449120">deep  net</span> <span m="449580">does</span> <span
  m="449820">that</span> <span m="450010">sort</span> <span m="450310">of</span>
  <span m="450420">thing,</span> <span m="452400">and</span> <span
  m="452560">it's</span> <span m="452670">interesting</span> <span
  m="453700">to</span> <span m="453840">look</span> <span m="454040">at</span>
  <span m="455110">some</span> <span m="455580">of</span> <span
  m="455640">the</span> <span m="455720">offerings</span> <span
  m="456210">here.</span></p><p><span m="456470">By</span> <span
  m="456520">the</span> <span m="456610">way,</span> <span m="456810">how</span>
  <span m="457190">good</span> <span m="457490">was</span> <span
  m="457740">this</span> <span m="458120">performance</span> <span
  m="458740">in</span> <span m="458890">2012?</span> <span
  m="460370">Well,</span> <span m="460560">it</span> <span
  m="460630">turned</span> <span m="460860">out</span> <span
  m="461070">that</span> <span m="461260">the</span> <span
  m="464222">fraction</span> <span m="464630">of</span> <span
  m="464690">the</span> <span m="464820">time</span> <span
  m="466050">that</span> <span m="466200">the</span> <span
  m="466290">system</span> <span m="467970">had</span> <span
  m="468180">the</span> <span m="468280">right</span> <span
  m="468500">answer</span> <span m="468880">in</span> <span
  m="468990">its</span> <span m="469160">top</span> <span m="469420">five</span>
  <span m="469710">choices</span> <span m="470140">was</span> <span
  m="470290">about</span> <span m="470700">15%.</span> <span
  m="472690">And</span> <span m="472870">the</span> <span
  m="473080">fraction</span> <span m="473440">of</span> <span
  m="473500">the</span> <span m="473600">time</span> <span m="473970">that
  it</span> <span m="474190">got</span> <span m="474560">exactly</span> <span
  m="475060">the</span> <span m="475170">right</span> <span
  m="475390">answer</span> <span m="475750">as</span> <span
  m="475900">its</span> <span m="476080">top</span> <span m="476350">pick</span>
  <span m="477070">was</span> <span m="477260">about</span> <span
  m="477550">37%--</span> <span m="478900">error,</span> <span
  m="479900">15%</span> <span m="480580">error</span> <span m="481480">if</span>
  <span m="481630">you</span> <span m="483020">count it</span> <span
  m="483300">as</span> <span m="483450">an</span> <span m="483550">error</span>
  <span m="483790">if</span> <span m="483930">it's--</span> <span
  m="485420">what am</span> <span m="485690">I</span> <span
  m="485740">saying?</span></p><p><span m="486960">You</span> <span
  m="487070">got</span> <span m="487240">it</span> <span m="487350">right</span>
  <span m="487650">if</span> <span m="487760">you</span> <span m="487850">got
  it</span> <span m="488020">in</span> <span m="488220">the</span> <span
  m="488300">top</span> <span m="488590">five.</span> <span m="489440">An</span>
  <span m="489590">error</span> <span m="489820">rate</span> <span
  m="490090">on</span> <span m="490250">that</span> <span
  m="490700">calculation,</span> <span m="491240">about</span> <span
  m="491420">15%.</span> <span m="492660">If</span> <span m="492810">you</span>
  <span m="492890">say</span> <span m="493080">you</span> <span
  m="493170">only</span> <span m="493320">get</span> <span m="493470">it</span>
  <span m="493560">right</span> <span m="494560">if</span> <span
  m="494710">it</span> <span m="494790">was</span> <span m="494890">your</span>
  <span m="495020">top</span> <span m="495310">choice,</span> <span
  m="495960">then</span> <span m="496110">the</span> <span
  m="496180">error</span> <span m="496340">rate</span> <span
  m="496530">was</span> <span m="496640">about</span> <span
  m="496860">37%.</span> <span m="498830">So</span> <span
  m="499070">pretty</span> <span m="499400">good,</span> <span
  m="500140">especially</span> <span m="500580">since</span> <span
  m="500830">some</span> <span m="501000">of</span> <span
  m="501080">these</span> <span m="501310">things</span> <span
  m="501530">are</span> <span m="501620">highly</span> <span
  m="501910">ambiguous</span> <span m="502500">even</span> <span
  m="502710">to</span> <span m="502800">us.</span></p><p><span
  m="504610">And</span> <span m="504720">what</span> <span
  m="504840">kind</span> <span m="504980">of</span> <span m="505040">a</span>
  <span m="505090">system</span> <span m="505450">did</span> <span
  m="505630">that?</span> <span m="506060">Well,</span> <span
  m="507966">it</span> <span m="508440">wasn't</span> <span
  m="509600">one</span> <span m="509840">that</span> <span
  m="509970">looked</span> <span m="510170">exactly</span> <span
  m="510610">like</span> <span m="510870">that,</span> <span
  m="511250">although</span> <span m="511580">that</span> <span
  m="511950">is</span> <span m="512159">the</span> <span
  m="512320">essence</span> <span m="512750">of</span> <span
  m="512900">it.</span> <span m="513820">The</span> <span
  m="514039">system</span> <span m="514360">actually</span> <span
  m="514720">looked</span> <span m="514929">like</span> <span
  m="515169">that.</span> <span m="516590">There's</span> <span
  m="516760">quite</span> <span m="516950">a</span> <span m="517000">lot</span>
  <span m="517179">of</span> <span m="517250">stuff</span> <span
  m="517590">in</span> <span m="517720">there.</span> <span
  m="518030">And</span> <span m="518130">what</span> <span m="518150">I'm</span>
  <span m="518250">going</span> <span m="518370">to</span> <span
  m="518450">talk</span> <span m="518700">about</span> <span
  m="518940">is</span> <span m="519070">not</span> <span
  m="519260">exactly</span> <span m="519870">this</span> <span
  m="520070">system,</span> <span m="520530">but</span> <span
  m="520650">I'm</span> <span m="520720">going</span> <span m="520840">to</span>
  <span m="520909">talk</span> <span m="521130">about</span> <span
  m="521419">the</span> <span m="521490">stuff</span> <span m="522390">of</span>
  <span m="522590">which</span> <span m="523320">such</span> <span
  m="523799">systems</span> <span m="524370">are</span> <span
  m="524530">made</span> <span m="525430">because</span> <span
  m="525730">there's</span> <span m="525910">nothing</span> <span
  m="526200">particularly</span> <span m="526880">special</span> <span
  m="527340">about</span> <span m="527650">this.</span> <span
  m="527920">It</span> <span m="528050">just</span> <span
  m="528270">happens</span> <span m="528630">to</span> <span
  m="528720">be</span> <span m="529010">a</span> <span
  m="529160">particular</span> <span m="530010">assembly</span> <span
  m="530990">of</span> <span m="531150">components</span> <span
  m="531740">that</span> <span m="531880">tend</span> <span m="532090">to</span>
  <span m="532170">reappear</span> <span m="533430">when</span> <span
  m="533620">anyone</span> <span m="534000">does</span> <span
  m="534240">this</span> <span m="534310">sort</span> <span m="534580">of</span>
  <span m="534670">neural</span> <span m="534890">net</span> <span
  m="535100">stuff.</span></p><p><span m="536910">So</span> <span
  m="537070">let</span> <span m="537180">me</span> <span
  m="537270">explain</span> <span m="537630">that</span> <span
  m="538120">this</span> <span m="538300">way.</span> <span
  m="539030">First</span> <span m="539230">thing</span> <span
  m="539680">I</span> <span m="539780">need</span> <span m="539920">to</span>
  <span m="540000">talk</span> <span m="540280">about</span> <span
  m="541160">is</span> <span m="541330">the</span> <span
  m="541400">concept</span> <span m="542030">of--</span> <span
  m="544530">well,</span> <span m="545110">I</span> <span
  m="545220">don't</span> <span m="545380">like</span> <span
  m="545600">the</span> <span m="545680">term.</span> <span
  m="546090">It's</span> <span m="546220">called</span> <span
  m="546430">convolution.</span> <span m="547780">I</span> <span
  m="547880">don't</span> <span m="548040">like</span> <span
  m="548210">the</span> <span m="548290">term</span> <span
  m="548540">because</span> <span m="549400">in</span> <span
  m="549755">the</span> <span m="550460">second-best</span> <span
  m="551020">course</span> <span m="551290">at the</span> <span
  m="551420">Institute,</span> <span m="551850">Signals</span> <span
  m="552260">and</span> <span m="552350">Systems,</span> <span
  m="553110">you</span> <span m="553210">learn</span> <span
  m="553350">about</span> <span m="553560">impulse</span> <span
  m="553980">responses</span> <span m="554590">and</span> <span
  m="554740">convolution</span> <span m="555020">integrals</span> <span
  m="555580">and</span> <span m="555680">stuff</span> <span
  m="555960">like</span> <span m="556150">that.</span> <span
  m="556810">And</span> <span m="557010">this</span> <span
  m="557830">hints</span> <span m="558240">at</span> <span
  m="558360">that,</span> <span m="558580">but</span> <span
  m="558680">it's</span> <span m="558800">not</span> <span m="558960">the</span>
  <span m="559040">same</span> <span m="559290">thing</span> <span
  m="559500">because</span> <span m="560095">there's</span> <span
  m="560450">no</span> <span m="560570">memory</span> <span
  m="561000">involved</span> <span m="562080">in</span> <span
  m="562390">what's</span> <span m="562570">going</span> <span
  m="562780">on</span> <span m="562930">as</span> <span m="563040">these</span>
  <span m="563190">signals</span> <span m="563570">are</span> <span
  m="563630">processed.</span> <span m="564560">But</span> <span
  m="564700">they</span> <span m="564770">call</span> <span m="564990">it</span>
  <span m="565070">convolutional</span> <span m="565750">neural</span> <span
  m="565970">nets</span> <span m="566210">anyway.</span></p><p><span
  m="567480">So</span> <span m="567630">here</span> <span m="567790">you</span>
  <span m="567940">are.</span> <span m="568140">You</span> <span
  m="568310">got</span> <span m="568590">some</span> <span
  m="568790">kind</span> <span m="569170">of</span> <span
  m="569350">image.</span> <span m="572290">And</span> <span
  m="572560">even</span> <span m="572790">with</span> <span
  m="572910">lots</span> <span m="573200">of</span> <span
  m="573880">computing</span> <span m="574320">power</span> <span
  m="576560">and</span> <span m="576780">GPUs</span> <span m="577410">and</span>
  <span m="577500">all</span> <span m="577620">that</span> <span
  m="577770">sort</span> <span m="577950">of</span> <span
  m="578020">stuff,</span> <span m="578400">we're</span> <span
  m="578500">not</span> <span m="578550">talking</span> <span
  m="578830">about</span> <span m="579520">images</span> <span
  m="579970">with</span> <span m="581416">4</span> <span
  m="581760">million</span> <span m="582060">pixels.</span> <span
  m="582630">We're</span> <span m="582690">talking</span> <span
  m="582910">about</span> <span m="583440">images</span> <span
  m="583840">that</span> <span m="583950">might</span> <span
  m="584180">be</span> <span m="584740">256</span> <span m="585500">on</span>
  <span m="585610">a</span> <span m="585670">side.</span> <span m="593440">As
  I</span> <span m="593690">say,</span> <span m="593790">we're</span> <span
  m="593880">not</span> <span m="594040">talking</span> <span
  m="594230">about</span> <span m="594590">images</span> <span
  m="594950">that</span> <span m="595060">are</span> <span
  m="595140">1,000</span> <span m="595610">by</span> <span
  m="595730">1,000</span> <span m="596290">or</span> <span
  m="596350">4,000</span> <span m="596920">by</span> <span
  m="597070">4,000</span> <span m="597385">or</span> <span
  m="597700">anything</span> <span m="597950">like</span> <span
  m="598100">that.</span> <span m="598250">They</span> <span
  m="598380">tend</span> <span m="598580">to</span> <span m="598640">be</span>
  <span m="599820">kind</span> <span m="600020">of</span> <span
  m="600430">compressed</span> <span m="600940">into</span> <span
  m="601420">a</span> <span m="601750">256-by-256</span> <span
  m="603250">image.</span></p><p><span m="604540">And</span> <span
  m="604660">now</span> <span m="604810">what</span> <span m="604960">we</span>
  <span m="605090">do</span> <span m="605360">is</span> <span
  m="605650">we</span> <span m="606360">run</span> <span m="606710">over</span>
  <span m="607010">this</span> <span m="609180">with</span> <span
  m="609400">a</span> <span m="609460">neuron</span> <span
  m="611230">that</span> <span m="611390">is</span> <span
  m="611530">looking</span> <span m="611870">only</span> <span
  m="612270">at</span> <span m="612440">a</span> <span
  m="612510">10-by-10</span> <span m="613300">square</span> <span
  m="615200">like</span> <span m="615410">so,</span> <span m="620700">and</span>
  <span m="621050">that</span> <span m="621200">produces</span> <span
  m="621600">an</span> <span m="621720">output.</span> <span
  m="622980">And</span> <span m="623590">next,</span> <span m="623920">we</span>
  <span m="624080">went</span> <span m="624270">over</span> <span
  m="624480">that</span> <span m="625440">again</span> <span
  m="626380">having</span> <span m="627090">shifted</span> <span
  m="627870">this</span> <span m="628380">neuron</span> <span
  m="628910">a</span> <span m="629010">little</span> <span m="629230">bit</span>
  <span m="629850">like</span> <span m="630070">so.</span> <span
  m="632270">And</span> <span m="632440">then</span> <span m="632680">the</span>
  <span m="632760">next</span> <span m="632980">thing</span> <span
  m="633130">we</span> <span m="633240">do</span> <span m="633420">is</span>
  <span m="633550">we</span> <span m="634290">shift</span> <span
  m="634640">it</span> <span m="634730">again,</span> <span m="636670">so</span>
  <span m="636870">we</span> <span m="636950">get</span> <span
  m="637100">that</span> <span m="637705">output</span> <span
  m="638030">right</span> <span m="638290">there.</span> <span
  m="639870">So</span> <span m="639980">each</span> <span m="640200">of</span>
  <span m="640290">those</span> <span m="642970">deployments</span> <span
  m="643950">of</span> <span m="644080">a</span> <span m="644130">neuron</span>
  <span m="644490">produces</span> <span m="644850">an</span> <span
  m="644970">output,</span> <span m="646190">and</span> <span
  m="646300">that</span> <span m="646470">output</span> <span
  m="646840">is</span> <span m="646930">associated</span> <span
  m="647610">with</span> <span m="647790">a</span> <span
  m="647840">particular</span> <span m="648450">place</span> <span
  m="648830">in</span> <span m="648910">the</span> <span
  m="649040">image.</span> <span m="650530">This</span> <span
  m="650650">is</span> <span m="650760">the</span> <span
  m="650830">process</span> <span m="651740">that</span> <span
  m="651890">is</span> <span m="652210">called</span> <span
  m="652740">convolution</span> <span m="658060">as</span> <span
  m="658200">a</span> <span m="658250">term</span> <span m="658480">of</span>
  <span m="658590">art.</span></p><p><span m="659570">Now,</span> <span
  m="660060">this</span> <span m="660330">guy,</span> <span m="662690">or</span>
  <span m="662870">this</span> <span m="663160">convolution</span> <span
  m="663640">operation,</span> <span m="664160">results</span> <span
  m="664510">in</span> <span m="664590">a</span> <span m="664900">bunch</span>
  <span m="665120">of</span> <span m="665190">points</span> <span
  m="665550">over</span> <span m="665740">here.</span> <span
  m="672384">And</span> <span m="672880">the</span> <span m="672980">next</span>
  <span m="673120">thing</span> <span m="673270">that</span> <span
  m="673380">we</span> <span m="673520">do</span> <span m="675960">with</span>
  <span m="676120">those</span> <span m="676350">points</span> <span
  m="676730">is</span> <span m="676920">we</span> <span m="677050">look</span>
  <span m="677260">in</span> <span m="677390">local</span> <span
  m="677690">neighborhoods</span> <span m="679210">and</span> <span
  m="679430">see</span> <span m="679620">what</span> <span m="679780">the</span>
  <span m="679860">maximum</span> <span m="680430">value</span> <span
  m="680920">is.</span> <span m="682340">And</span> <span m="682480">then</span>
  <span m="682590">we</span> <span m="682690">take</span> <span
  m="682950">that</span> <span m="683150">maximum</span> <span
  m="683660">value</span> <span m="684650">and</span> <span
  m="684900">construct</span> <span m="686150">yet</span> <span
  m="686340">another</span> <span m="686820">mapping</span> <span
  m="687280">of</span> <span m="687410">the</span> <span m="687560">image</span>
  <span m="688000">over</span> <span m="688230">here</span> <span
  m="688910">using</span> <span m="689180">that</span> <span
  m="689350">maximum</span> <span m="689810">value.</span></p><p><span
  m="691030">Then</span> <span m="691220">we</span> <span
  m="691320">slide</span> <span m="691780">that</span> <span
  m="692530">over</span> <span m="692860">like</span> <span
  m="693090">so,</span> <span m="694320">and</span> <span m="694450">we</span>
  <span m="694550">produce</span> <span m="694870">another</span> <span
  m="695130">value.</span> <span m="696470">And</span> <span
  m="698531">then</span> <span m="698930">we</span> <span
  m="699060">slide</span> <span m="699400">that</span> <span
  m="700040">over</span> <span m="700500">one</span> <span
  m="700690">more</span> <span m="700870">time</span> <span
  m="702180">with</span> <span m="702300">a</span> <span
  m="702330">different</span> <span m="702640">color,</span> <span
  m="704060">and</span> <span m="704170">now</span> <span
  m="704270">we've</span> <span m="704400">got</span> <span
  m="704720">yet</span> <span m="704985">another</span> <span
  m="705250">value.</span> <span m="706630">So</span> <span
  m="706780">this</span> <span m="706950">process</span> <span
  m="707440">is</span> <span m="707580">called</span> <span
  m="707840">pooling.</span> <span m="715020">And</span> <span
  m="715160">because</span> <span m="715460">we're</span> <span
  m="715560">taking</span> <span m="715950">the</span> <span
  m="716010">maximum,</span> <span m="716510">this</span> <span
  m="716680">particular</span> <span m="717120">kind</span> <span
  m="717430">of</span> <span m="717520">pooling</span> <span
  m="717800">is</span> <span m="717930">called</span> <span
  m="718140">max</span> <span m="718370">pooling.</span></p><p><span
  m="720960">So</span> <span m="721130">now</span> <span m="721390">let's</span>
  <span m="721560">see</span> <span m="721720">what's</span> <span
  m="722010">next.</span> <span m="723200">This</span> <span
  m="723490">is</span> <span m="723700">taking</span> <span m="724340">a</span>
  <span m="724460">particular</span> <span m="725010">neuron</span> <span
  m="725560">and</span> <span m="725720">running it</span> <span
  m="726030">across</span> <span m="726480">the</span> <span
  m="726590">image.</span> <span m="728870">We</span> <span
  m="728970">call</span> <span m="729140">that</span> <span m="729280">a</span>
  <span m="729310">kernel,</span> <span m="730540">again</span> <span
  m="731510">sucking</span> <span m="731970">some</span> <span
  m="732180">terminology</span> <span m="732830">out</span> <span
  m="732970">of</span> <span m="733070">Signals</span> <span
  m="733450">and</span> <span m="733550">Systems.</span> <span
  m="734590">But</span> <span m="734740">now</span> <span m="734890">what</span>
  <span m="735010">we're</span> <span m="735080">going</span> <span
  m="735210">to</span> <span m="735280">do</span> <span m="735410">is</span>
  <span m="735510">we're</span> <span m="735590">going</span> <span
  m="735720">to</span> <span m="736210">say</span> <span m="737010">we
  could</span> <span m="737160">use</span> <span m="737330">a</span> <span
  m="737370">whole</span> <span m="737490">bunch</span> <span
  m="737680">of</span> <span m="737760">kernels.</span> <span
  m="739140">So</span> <span m="739380">the</span> <span m="739550">thing</span>
  <span m="739760">that</span> <span m="739870">I</span> <span
  m="739980">produce</span> <span m="740440">with</span> <span
  m="740600">one</span> <span m="740820">kernel</span> <span
  m="741990">can</span> <span m="742140">now</span> <span m="742360">be</span>
  <span m="742600">repeated</span> <span m="744120">many</span> <span
  m="744390">times</span> <span m="745686">like</span> <span
  m="746120">so.</span> <span m="747430">In</span> <span m="747550">fact,</span>
  <span m="747880">a</span> <span m="747950">typical</span> <span
  m="748290">number</span> <span m="748620">is</span> <span
  m="748720">100</span> <span m="749110">times.</span></p><p><span
  m="750870">So</span> <span m="751050">now</span> <span m="751260">what</span>
  <span m="751400">we've</span> <span m="751510">got</span> <span
  m="751780">is</span> <span m="751890">we've</span> <span m="752010">got</span>
  <span m="752140">a</span> <span m="752200">256-by-256</span> <span
  m="753650">image.</span> <span m="754440">We've</span> <span
  m="754610">gone</span> <span m="754840">over it</span> <span
  m="755230">with</span> <span m="755400">a</span> <span
  m="755440">10-by-10</span> <span m="757150">kernel.</span> <span
  m="758240">We</span> <span m="758515">have</span> <span
  m="758790">taken</span> <span m="759140">the</span> <span
  m="759220">maximum</span> <span m="761170">values</span> <span
  m="761600">that</span> <span m="761760">are</span> <span m="762110">in</span>
  <span m="762300">the</span> <span m="762360">vicinity</span> <span
  m="762870">of</span> <span m="762980">each</span> <span
  m="763220">other,</span> <span m="763750">and</span> <span
  m="763890">then</span> <span m="764000">we</span> <span
  m="764130">repeated</span> <span m="764590">that</span> <span
  m="766150">100</span> <span m="766510">times.</span> <span
  m="768270">So</span> <span m="768530">now</span> <span m="768740">we</span>
  <span m="768840">can</span> <span m="768950">take</span> <span
  m="769230">that,</span> <span m="770770">and</span> <span m="770900">we</span>
  <span m="770990">can</span> <span m="771130">feed</span> <span
  m="771420">all</span> <span m="771620">those</span> <span
  m="771900">results</span> <span m="773320">into</span> <span
  m="773510">some</span> <span m="773720">kind</span> <span m="773980">of</span>
  <span m="774070">neural</span> <span m="774320">net.</span></p><p><span
  m="775540">And</span> <span m="775690">then</span> <span m="775810">we</span>
  <span m="775900">can,</span> <span m="776640">through</span> <span
  m="776990">perhaps</span> <span m="777410">a</span> <span
  m="777470">fully-connected</span> <span m="778260">job</span> <span
  m="779210">on</span> <span m="779350">the</span> <span m="779410">final</span>
  <span m="779760">layers</span> <span m="780120">of</span> <span
  m="780210">this,</span> <span m="781010">and</span> <span
  m="781170">then</span> <span m="781820">in</span> <span m="781960">the</span>
  <span m="782310">ultimate</span> <span m="782950">output</span> <span
  m="783880">we</span> <span m="784010">get</span> <span m="784190">some</span>
  <span m="784380">sort</span> <span m="784660">of</span> <span
  m="785140">indication</span> <span m="786850">of</span> <span
  m="786980">how</span> <span m="787280">likely</span> <span
  m="787680">it</span> <span m="787770">is</span> <span m="788810">that</span>
  <span m="789010">the</span> <span m="789080">thing</span> <span
  m="789320">that's</span> <span m="789510">being</span> <span
  m="789760">seen</span> <span m="790210">is,</span> <span
  m="790610">say,</span> <span m="791180">a</span> <span m="791300">mite.</span>
  <span m="795300">So</span> <span m="795500">that's</span> <span
  m="796950">roughly</span> <span m="798190">how</span> <span
  m="798390">these</span> <span m="798600">things</span> <span
  m="798830">work.</span></p><p><span m="800850">So</span> <span
  m="800920">what</span> <span m="801030">have</span> <span m="801070">we</span>
  <span m="801180">talked</span> <span m="801440">about</span> <span
  m="801680">so</span> <span m="801860">far?</span> <span
  m="802530">We've</span> <span m="802620">talked</span> <span
  m="802890">about</span> <span m="804190">pooling,</span> <span
  m="805570">and</span> <span m="805700">we've</span> <span
  m="805830">talked</span> <span m="806070">about</span> <span
  m="806290">convolution.</span> <span m="807780">And</span> <span
  m="808010">now</span> <span m="808260">we</span> <span m="808370">can</span>
  <span m="808480">talk</span> <span m="808680">about</span> <span
  m="809330">some</span> <span m="809550">of</span> <span m="809610">the</span>
  <span m="809670">good</span> <span m="809850">stuff.</span> <span
  m="811450">But</span> <span m="811600">before</span> <span m="811920">I</span>
  <span m="812210">get</span> <span m="812460">into</span> <span
  m="812540">that,</span> <span m="813020">this is</span> <span
  m="813320">what</span> <span m="813460">we</span> <span m="813550">can</span>
  <span m="813680">do</span> <span m="813780">now,</span> <span
  m="815175">and</span> <span m="815520">you</span> <span m="815680">can</span>
  <span m="815820">compare</span> <span m="816200">this</span> <span
  m="816410">with</span> <span m="816650">what</span> <span
  m="816810">was</span> <span m="816980">done</span> <span m="817170">in</span>
  <span m="817260">the</span> <span m="817360">old</span> <span
  m="817590">days.</span> <span m="822630">It</span> <span m="822900">was</span>
  <span m="823090">done</span> <span m="823260">in</span> <span
  m="823360">the</span> <span m="823460">old</span> <span m="823660">days</span>
  <span m="823970">before</span> <span m="824270">massive</span> <span
  m="824690">amounts</span> <span m="825040">of</span> <span
  m="825170">computing</span> <span m="826530">became</span> <span
  m="826850">available</span> <span m="828570">is</span> <span
  m="828900">a</span> <span m="829650">kind</span> <span m="829950">of</span>
  <span m="831410">neural</span> <span m="831690">net</span> <span
  m="835350">activity</span> <span m="836070">that's</span> <span
  m="836260">a</span> <span m="836310">little</span> <span
  m="836530">easier</span> <span m="836890">to</span> <span
  m="836980">see.</span></p><p><span m="838350">You</span> <span
  m="838490">might,</span> <span m="838780">in</span> <span
  m="838890">the</span> <span m="839010">old</span> <span
  m="839210">days,</span> <span m="839620">only</span> <span
  m="839870">have</span> <span m="841660">enough</span> <span
  m="841960">computing</span> <span m="842420">power</span> <span
  m="843090">to</span> <span m="843230">deal</span> <span m="843470">with</span>
  <span m="843640">a</span> <span m="843680">small</span> <span
  m="844080">grid</span> <span m="844880">of</span> <span
  m="845010">picture</span> <span m="845340">elements,</span> <span
  m="845740">or</span> <span m="845830">so-called</span> <span
  m="846280">pixels.</span> <span m="847480">And</span> <span
  m="847590">then</span> <span m="847770">each</span> <span m="848020">of</span>
  <span m="848150">these</span> <span m="848690">might</span> <span
  m="848930">be</span> <span m="849100">a</span> <span m="849160">value</span>
  <span m="850440">that</span> <span m="850580">is</span> <span
  m="850720">fed</span> <span m="851870">as</span> <span m="852030">an</span>
  <span m="852120">input</span> <span m="852890">into</span> <span
  m="853120">some</span> <span m="853320">kind</span> <span m="853520">of</span>
  <span m="853610">neuron.</span> <span m="855000">And</span> <span
  m="855070">so</span> <span m="855190">you</span> <span m="855310">might</span>
  <span m="855500">have</span> <span m="855680">a</span> <span
  m="855740">column</span> <span m="856220">of</span> <span
  m="856310">neurons</span> <span m="857810">that</span> <span
  m="858000">are</span> <span m="858350">looking</span> <span
  m="859110">at</span> <span m="859320">these</span> <span
  m="859510">pixels</span> <span m="862166">in</span> <span
  m="862590">your</span> <span m="862720">image.</span></p><p><span
  m="863860">And</span> <span m="864000">then</span> <span
  m="864120">there</span> <span m="864230">might</span> <span
  m="864460">be</span> <span m="864710">a</span> <span m="864810">small</span>
  <span m="865190">number</span> <span m="865510">of</span> <span
  m="865660">columns</span> <span m="866410">that</span> <span
  m="866550">follow</span> <span m="866880">from</span> <span
  m="867070">that.</span> <span m="867830">And</span> <span
  m="867880">finally,</span> <span m="868510">something</span> <span
  m="868890">that</span> <span m="869020">says</span> <span
  m="869960">this</span> <span m="870170">neuron</span> <span
  m="870780">is</span> <span m="870980">looking</span> <span
  m="871250">for</span> <span m="871400">things</span> <span
  m="872450">that</span> <span m="872860">are</span> <span m="873160">a</span>
  <span m="873250">number</span> <span m="873570">1,</span> <span
  m="874630">that</span> <span m="874790">is</span> <span m="874910">to</span>
  <span m="875010">say,</span> <span m="875820">something</span> <span
  m="876190">that</span> <span m="876310">looks</span> <span
  m="876540">like</span> <span m="878970">a</span> <span
  m="879080">number</span> <span m="879320">1</span> <span m="881710">in</span>
  <span m="881840">the</span> <span m="881950">image.</span> <span
  m="883330">So</span> <span m="883440">this</span> <span
  m="883600">stuff</span> <span m="883880">up</span> <span
  m="884050">here</span> <span m="885980">is</span> <span m="886170">what</span>
  <span m="886340">you</span> <span m="886430">can</span> <span
  m="886560">do</span> <span m="886700">when</span> <span m="886820">you</span>
  <span m="886880">have</span> <span m="887000">a</span> <span
  m="887060">massive</span> <span m="887470">amount</span> <span
  m="887780">of</span> <span m="887930">computation</span> <span
  m="888820">relative</span> <span m="889230">to</span> <span
  m="889290">the</span> <span m="889380">kind</span> <span m="889600">of</span>
  <span m="889690">thing</span> <span m="889880">you</span> <span
  m="889950">used</span> <span m="890130">to</span> <span m="890210">see</span>
  <span m="890380">in</span> <span m="890480">the</span> <span
  m="890580">old</span> <span m="890760">days.</span></p><p><span
  m="895400">So</span> <span m="896200">what's</span> <span
  m="896470">different?</span> <span m="898310">Well,</span> <span
  m="898510">what's</span> <span m="898700">different</span> <span
  m="898990">is</span> <span m="899090">instead</span> <span
  m="899380">of</span> <span m="899460">a</span> <span m="899520">few
  hundred</span> <span m="899730">parameters,</span> <span
  m="900440">we've</span> <span m="900600">got</span> <span m="901530">a</span>
  <span m="901630">lot</span> <span m="901830">more.</span> <span
  m="902730">Instead</span> <span m="903080">of</span> <span
  m="903200">10</span> <span m="903480">digits,</span> <span
  m="904490">we</span> <span m="904610">have</span> <span
  m="904750">1,000</span> <span m="905370">classes.</span> <span
  m="907000">Instead</span> <span m="907420">of</span> <span m="907740">a</span>
  <span m="907800">few  hundred</span> <span m="908040">samples,</span> <span
  m="909130">we</span> <span m="909300">have</span> <span
  m="909730">maybe</span> <span m="911690">1,000</span> <span
  m="912280">examples</span> <span m="912850">of</span> <span
  m="912950">each</span> <span m="913150">class.</span> <span
  m="913570">So</span> <span m="913670">that</span> <span
  m="913810">makes</span> <span m="914040">a</span> <span
  m="914100">million</span> <span m="914530">samples.</span> <span
  m="916270">And</span> <span m="916420">we</span> <span m="916520">got</span>
  <span m="916870">60</span> <span m="917210">million</span> <span
  m="917520">parameters</span> <span m="918050">to</span> <span
  m="918140">play</span> <span m="918400">with.</span></p><p><span
  m="920030">And</span> <span m="920200">the</span> <span
  m="920270">surprising</span> <span m="920850">thing</span> <span
  m="921050">is</span> <span m="922290">that</span> <span m="922420">the</span>
  <span m="922500">net</span> <span m="922690">result</span> <span
  m="923060">is</span> <span m="923170">we've</span> <span m="923340">got</span>
  <span m="923510">a</span> <span m="923850">function</span> <span
  m="924160">approximator</span> <span m="926430">that</span> <span
  m="926800">astonishes</span> <span m="927220">everybody.</span> <span
  m="928380">And</span> <span m="928530">no</span> <span m="928660">one</span>
  <span m="928830">quite</span> <span m="929100">knows</span> <span
  m="929340">why</span> <span m="929530">it</span> <span
  m="929650">works,</span> <span m="930070">except</span> <span
  m="930450">that</span> <span m="930580">when</span> <span
  m="930740">you</span> <span m="930840">throw</span> <span m="931330">an</span>
  <span m="931420">immense</span> <span m="931720">amount</span> <span
  m="931930">of</span> <span m="931990">computation</span> <span
  m="934230">into</span> <span m="934920">this</span> <span
  m="935200">kind</span> <span m="935510">of</span> <span
  m="936580">arrangement,</span> <span m="938130">it's</span> <span
  m="938350">possible</span> <span m="938760">to</span> <span
  m="938870">get</span> <span m="939640">a</span> <span
  m="939700">performance</span> <span m="941230">that</span> <span
  m="941560">no</span> <span m="941840">one</span> <span
  m="942100">expected</span> <span m="942640">would</span> <span
  m="942770">be</span> <span m="942900">possible.</span> <span
  m="945540">So</span> <span m="945640">that's</span> <span
  m="945820">sort</span> <span m="946190">of</span> <span m="946250">the</span>
  <span m="946330">bottom</span> <span m="946670">line.</span></p><p><span
  m="947170">But</span> <span m="947290">now</span> <span
  m="948680">there</span> <span m="948850">are</span> <span m="948880">a</span>
  <span m="948910">couple</span> <span m="949180">of</span> <span
  m="949520">ideas</span> <span m="950040">beyond</span> <span m="950480">that
  that</span> <span m="950870">I</span> <span m="950950">think</span> <span
  m="951240">are</span> <span m="951590">especially</span> <span
  m="952320">interesting,</span> <span m="953100">and</span> <span
  m="953480">I</span> <span m="953850">want</span> <span m="954030">to</span>
  <span m="954090">talk</span> <span m="954340">about</span> <span
  m="954610">those.</span> <span m="956030">First</span> <span
  m="956530">idea</span> <span m="956940">that's</span> <span
  m="957150">especially</span> <span m="957700">interesting</span> <span
  m="958690">is</span> <span m="958840">the</span> <span m="958960">idea</span>
  <span m="959300">of</span> <span m="959490">autocoding,</span> <span
  m="961360">and</span> <span m="961510">here's</span> <span
  m="961730">how</span> <span m="961870">the</span> <span m="962000">idea</span>
  <span m="962330">of</span> <span m="962430">autocoding</span> <span
  m="963130">works.</span> <span m="969470">I'm</span> <span
  m="969590">going</span> <span m="969720">to</span> <span m="969800">run</span>
  <span m="969970">out</span> <span m="970050">of</span> <span
  m="970120">board</span> <span m="970370">space,</span> <span
  m="970690">so</span> <span m="970790">I</span> <span m="970840">think</span>
  <span m="971030">I'll</span> <span m="971140">do</span> <span
  m="971270">it</span> <span m="971370">right</span> <span
  m="971570">here.</span></p><p><span m="974230">You</span> <span
  m="974370">have</span> <span m="975380">some</span> <span
  m="975600">input</span> <span m="975890">values.</span> <span
  m="984860">They</span> <span m="985000">go</span> <span m="985190">into</span>
  <span m="985500">a</span> <span m="985540">layer</span> <span
  m="985860">of</span> <span m="985940">neurons,</span> <span
  m="986930">the</span> <span m="987050">input</span> <span
  m="987360">layer.</span> <span m="989420">Then</span> <span
  m="989860">there</span> <span m="990080">is</span> <span m="990290">a</span>
  <span m="990510">so-called</span> <span m="991020">hidden</span> <span
  m="991320">layer</span> <span m="991660">that's</span> <span
  m="992440">much</span> <span m="992700">smaller.</span> <span
  m="996010">So</span> <span m="996200">maybe</span> <span m="997570">in</span>
  <span m="997760">the</span> <span m="997840">example, there</span> <span
  m="998280">will</span> <span m="998400">be</span> <span m="998530">10</span>
  <span m="998790">neurons</span> <span m="999210">here</span> <span
  m="999830">and</span> <span m="999940">just</span> <span m="1000130">a</span>
  <span m="1000180">couple</span> <span m="1000510">here.</span> <span
  m="1001810">And</span> <span m="1001970">then</span> <span
  m="1002120">these</span> <span m="1002410">expand</span> <span
  m="1003740">to</span> <span m="1003880">an</span> <span
  m="1003970">output</span> <span m="1004340">layer</span> <span
  m="1005560">like</span> <span m="1005740">so.</span></p><p><span
  m="1007750">Now</span> <span m="1007990">we</span> <span
  m="1008090">can</span> <span m="1008230">take</span> <span
  m="1008530">the</span> <span m="1008860">output</span> <span
  m="1009260">layer,</span> <span m="1009790">z1</span> <span
  m="1011210">through</span> <span m="1011450">zn,</span> <span
  m="1013180">and</span> <span m="1013360">compare</span> <span
  m="1013810">it</span> <span m="1015010">with</span> <span
  m="1016010">the</span> <span m="1016190">desired</span> <span
  m="1016670">values,</span> <span m="1017220">d1</span> <span
  m="1018106">through</span> <span m="1018550">dn.</span> <span
  m="1021920">You</span> <span m="1022020">following</span> <span
  m="1022340">me</span> <span m="1022460">so</span> <span
  m="1022640">far?</span> <span m="1023770">Now,</span> <span
  m="1023920">the</span> <span m="1024010">trick</span> <span
  m="1024329">is</span> <span m="1024619">to</span> <span
  m="1024720">say,</span> <span m="1025140">well,</span> <span
  m="1026579">what</span> <span m="1026650">are</span> <span
  m="1026760">the</span> <span m="1026869">desired</span> <span
  m="1027329">values?</span> <span m="1029020">Let's</span> <span
  m="1029300">let</span> <span m="1029470">the</span> <span
  m="1029550">desired</span> <span m="1030040">values</span> <span
  m="1032185">be</span> <span m="1032619">the</span> <span
  m="1032849">input</span> <span m="1033160">values.</span> <span m="1038210">So
  what</span> <span m="1038390">we're</span> <span m="1038470">going</span>
  <span m="1038630">to do  is we're going to</span> <span
  m="1038690">train</span> <span m="1038940">this</span> <span
  m="1039089">net</span> <span m="1039310">up</span> <span m="1040109">so
  that</span> <span m="1040310">the</span> <span m="1040440">output's</span>
  <span m="1040839">the</span> <span m="1040920">same</span> <span
  m="1041180">as</span> <span m="1041250">the</span> <span
  m="1041339">input.</span></p><p><span m="1043810">What's</span> <span
  m="1044020">the</span> <span m="1044079">good</span> <span
  m="1044230">of</span> <span m="1044300">that?</span> <span
  m="1044599">Well,</span> <span m="1044760">we're</span> <span
  m="1044859">going</span> <span m="1044980">to</span> <span
  m="1045050">force</span> <span m="1045390">it</span> <span
  m="1045470">down</span> <span m="1045750">through</span> <span
  m="1045940">this</span> <span m="1047030">[? neck-down ?]</span> <span
  m="1048260">piece</span> <span m="1048510">of</span> <span
  m="1048580">network.</span> <span m="1050270">So</span> <span
  m="1050580">if</span> <span m="1050760">this</span> <span
  m="1050980">network</span> <span m="1051390">is</span> <span
  m="1051530">going</span> <span m="1051810">to</span> <span
  m="1051920">succeed</span> <span m="1053640">in</span> <span
  m="1053780">taking</span> <span m="1054420">all</span> <span
  m="1054630">the</span> <span m="1054710">possibilities</span> <span
  m="1055470">here</span> <span m="1056310">and</span> <span
  m="1056520">cramming</span> <span m="1056990">them</span> <span
  m="1057160">into</span> <span m="1057420">this</span> <span
  m="1059000">smaller</span> <span m="1059630">inner</span> <span
  m="1059940">layer,</span> <span m="1060780">the</span> <span
  m="1060970">so-called</span> <span m="1061420">hidden</span> <span
  m="1061700">layer,</span> <span m="1062720">such</span> <span
  m="1063060">that</span> <span m="1063580">it</span> <span
  m="1063680">can</span> <span m="1063890">reproduce</span> <span
  m="1064650">the</span> <span m="1064780">input</span> <span m="1065080">[? at
  ?]</span> <span m="1065180">the</span> <span m="1065280">output,</span> <span
  m="1065900">it</span> <span m="1066060">must</span> <span
  m="1066370">be</span> <span m="1066500">doing</span> <span
  m="1066800">some</span> <span m="1067010">kind</span> <span
  m="1067270">of</span> <span m="1067360">generalization</span> <span
  m="1068300">of</span> <span m="1068470">the</span> <span
  m="1068540">kinds</span> <span m="1069000">of</span> <span
  m="1069140">things</span> <span m="1069530">it</span> <span
  m="1069670">sees</span> <span m="1070040">on</span> <span
  m="1070180">its</span> <span m="1070330">input.</span> <span
  m="1072560">And</span> <span m="1072590">that's</span> <span
  m="1072790">a</span> <span m="1072840">very</span> <span
  m="1073140">clever</span> <span m="1073590">idea,</span> <span
  m="1075060">and</span> <span m="1075380">it's</span> <span
  m="1075570">seen</span> <span m="1075830">in</span> <span
  m="1075940">various</span> <span m="1076350">forms</span> <span
  m="1076830">in</span> <span m="1077570">a</span> <span
  m="1077700">large</span> <span m="1078150">fraction</span> <span
  m="1079400">of</span> <span m="1079560">the</span> <span
  m="1079640">papers</span> <span m="1080100">that</span> <span
  m="1080200">appear</span> <span m="1081250">on deep</span> <span
  m="1081590">neural</span> <span m="1081840">nets.</span></p><p><span
  m="1083340">But</span> <span m="1083690">now</span> <span m="1083850">I</span>
  <span m="1083990">want</span> <span m="1084160">to</span> <span
  m="1084230">talk</span> <span m="1084460">about</span> <span
  m="1084710">an</span> <span m="1084810">example</span> <span
  m="1085390">so</span> <span m="1085570">I</span> <span m="1085620">can</span>
  <span m="1085800">show</span> <span m="1085990">you</span> <span
  m="1086070">a</span> <span m="1086100">demonstration.</span> <span
  m="1086800">OK?</span> <span m="1087860">So</span> <span m="1089050">we</span>
  <span m="1089160">don't</span> <span m="1089330">have</span> <span
  m="1089480">GPUs,</span> <span m="1090420">and</span> <span
  m="1090560">we</span> <span m="1090630">don't</span> <span
  m="1090790">have</span> <span m="1090920">three</span> <span
  m="1091140">days</span> <span m="1091410">to</span> <span
  m="1091510">do</span> <span m="1091690">this.</span> <span
  m="1092670">So</span> <span m="1092830">I'm</span> <span
  m="1092930">going</span> <span m="1093050">to</span> <span
  m="1093870">make</span> <span m="1094240">up</span> <span m="1094340">a</span>
  <span m="1094400">very</span> <span m="1094640">simple</span> <span
  m="1095050">example</span> <span m="1096690">that's</span> <span
  m="1097520">reminiscent</span> <span m="1098870">of</span> <span
  m="1099010">what</span> <span m="1099200">goes</span> <span
  m="1099420">on</span> <span m="1099610">here</span> <span
  m="1100090">but</span> <span m="1100620">involves</span> <span
  m="1101010">hardly</span> <span m="1101260">any</span> <span
  m="1101430">computation.</span></p><p><span m="1103100">What</span> <span
  m="1103240">I'm</span> <span m="1103350">going</span> <span
  m="1103590">to</span> <span m="1103690">imagine</span> <span
  m="1104120">is</span> <span m="1104250">we're</span> <span
  m="1104390">trying</span> <span m="1104680">to</span> <span
  m="1104760">recognize</span> <span m="1105340">animals</span> <span
  m="1108290">from</span> <span m="1110660">how</span> <span
  m="1110820">tall</span> <span m="1111110">they</span> <span
  m="1111260">are</span> <span m="1113200">from</span> <span
  m="1113680">the</span> <span m="1113780">shadows</span> <span
  m="1114040">that</span> <span m="1114300">they</span> <span
  m="1114420">cast.</span> <span m="1115920">So</span> <span
  m="1116180">we're</span> <span m="1116280">going</span> <span
  m="1116420">to</span> <span m="1116480">recognize</span> <span
  m="1116990">three</span> <span m="1117220">animals,</span> <span
  m="1119000">a</span> <span m="1119130">cheetah,</span> <span
  m="1123940">a</span> <span m="1124070">zebra,</span> <span
  m="1125990">and</span> <span m="1126430">a</span> <span
  m="1126740">giraffe,</span> <span m="1129400">and</span> <span
  m="1129540">they</span> <span m="1129860">will</span> <span
  m="1130110">each</span> <span m="1130270">cast</span> <span
  m="1130620">a</span> <span m="1130680">shadow</span> <span
  m="1131060">on</span> <span m="1131170">the</span> <span
  m="1131220">blackboard</span> <span m="1133820">like</span> <span
  m="1134080">me.</span> <span m="1135800">No</span> <span
  m="1135960">vampire</span> <span m="1136460">involved</span> <span
  m="1136840">here.</span> <span m="1137680">And</span> <span
  m="1137800">what</span> <span m="1137900">we're</span> <span
  m="1137960">going</span> <span m="1138080">to</span> <span
  m="1138160">do</span> <span m="1138320">is</span> <span
  m="1138410">we're</span> <span m="1138470">going</span> <span
  m="1138610">to</span> <span m="1138690">use</span> <span
  m="1139170">the</span> <span m="1139400">shadow</span> <span
  m="1140990">as</span> <span m="1141310">an</span> <span
  m="1141770">input</span> <span m="1142230">to</span> <span
  m="1142340">a</span> <span m="1142400">neural</span> <span
  m="1142630">net.</span> <span m="1143290">All</span> <span
  m="1143400">right?</span> <span m="1144250">So</span> <span
  m="1144410">let's</span> <span m="1144540">see</span> <span
  m="1144690">how</span> <span m="1144830">that</span> <span
  m="1144990">would</span> <span m="1145090">work.</span></p><p><span
  m="1159350">So</span> <span m="1159470">there</span> <span
  m="1159870">is</span> <span m="1162280">our</span> <span
  m="1162410">network.</span> <span m="1164180">And</span> <span
  m="1164350">if</span> <span m="1164450">I</span> <span m="1164530">just</span>
  <span m="1164750">clicked</span> <span m="1165070">into</span> <span
  m="1165300">one</span> <span m="1165460">of</span> <span
  m="1165540">these</span> <span m="1165730">test</span> <span
  m="1165980">samples,</span> <span m="1166480">that's</span> <span
  m="1166790">the</span> <span m="1168230">height</span> <span
  m="1168520">of</span> <span m="1168590">the</span> <span
  m="1168690">shadow</span> <span m="1169160">that</span> <span
  m="1169330">a</span> <span m="1169380">cheetah</span> <span
  m="1169730">casts</span> <span m="1170090">on</span> <span
  m="1170170">a</span> <span m="1170240">wall.</span> <span
  m="1172010">And</span> <span m="1172850">there</span> <span
  m="1173150">are</span> <span m="1173320">10</span> <span
  m="1173550">input</span> <span m="1173900">neurons</span> <span
  m="1174310">corresponding</span> <span m="1174900">to</span> <span
  m="1174970">each</span> <span m="1175210">level</span> <span
  m="1175530">of</span> <span m="1175620">the</span> <span
  m="1175700">shadow.</span> <span m="1177500">They're</span> <span
  m="1177770">rammed</span> <span m="1178060">through</span> <span
  m="1178610">three</span> <span m="1178990">inner</span> <span
  m="1179450">layer</span> <span m="1179910">neurons,</span> <span
  m="1181350">and</span> <span m="1181560">from</span> <span
  m="1181720">that</span> <span m="1181900">it</span> <span
  m="1182000">spreads</span> <span m="1182410">out</span> <span
  m="1182600">and</span> <span m="1182690">becomes</span> <span
  m="1183130">the</span> <span m="1183650">outer</span> <span
  m="1184480">layer</span> <span m="1184870">values.</span> <span
  m="1186640">And</span> <span m="1186740">we're</span> <span
  m="1186810">going</span> <span m="1186930">to</span> <span
  m="1186990">compare</span> <span m="1187320">those</span> <span
  m="1187530">outer</span> <span m="1187740">layer</span> <span
  m="1188000">values</span> <span m="1188500">to</span> <span
  m="1188640">the</span> <span m="1188770">desired</span> <span
  m="1189240">values,</span> <span m="1189570">but</span> <span
  m="1189710">the</span> <span m="1189780">desired</span> <span
  m="1190170">values</span> <span m="1190520">are</span> <span
  m="1190580">the</span> <span m="1190670">same</span> <span
  m="1190950">as</span> <span m="1191090">the</span> <span
  m="1191210">input</span> <span m="1191520">values.</span></p><p><span
  m="1192640">So</span> <span m="1192690">this</span> <span
  m="1192880">column</span> <span m="1193190">is</span> <span
  m="1193280">a</span> <span m="1193330">column of</span> <span
  m="1193750">input</span> <span m="1194060">values.</span> <span
  m="1194840">On</span> <span m="1195020">the</span> <span
  m="1195080">far</span> <span m="1195420">right,</span> <span
  m="1195720">we</span> <span m="1195820">have</span> <span
  m="1195920">our</span> <span m="1196030">column</span> <span
  m="1196550">of</span> <span m="1196830">desired</span> <span
  m="1197227">values.</span> <span m="1198420">And</span> <span
  m="1198690">we</span> <span m="1198800">haven't</span> <span
  m="1199030">trained</span> <span m="1199340">this</span> <span
  m="1199500">neural</span> <span m="1199700">net</span> <span
  m="1199920">yet.</span> <span m="1200650">All</span> <span
  m="1200970">we've</span> <span m="1201120">got</span> <span
  m="1201290">is</span> <span m="1201410">random</span> <span
  m="1201690">values</span> <span m="1202120">in</span> <span
  m="1202230">there.</span> <span m="1202900">So</span> <span
  m="1202980">if</span> <span m="1203040">we</span> <span m="1203140">run</span>
  <span m="1203320">the</span> <span m="1203380">test</span> <span
  m="1203660">samples</span> <span m="1204070">through,</span> <span
  m="1205680">we</span> <span m="1205790">get</span> <span
  m="1205970">that</span> <span m="1206870">and</span> <span
  m="1207100">that.</span> <span m="1208140">Yeah,</span> <span
  m="1208570">cheetahs</span> <span m="1208990">are</span> <span
  m="1209080">short,</span> <span m="1209700">zebras</span> <span
  m="1210130">are</span> <span m="1210260">medium</span> <span
  m="1210660">height,</span> <span m="1211400">and</span> <span
  m="1211530">giraffes</span> <span m="1211950">are</span> <span
  m="1212050">tall.</span> <span m="1213140">But</span> <span
  m="1213300">our</span> <span m="1213430">output</span> <span
  m="1214240">is</span> <span m="1214480">just</span> <span
  m="1216570">pretty</span> <span m="1216800">much</span> <span
  m="1217930">0.5</span> <span m="1218580">for</span> <span
  m="1218730">all</span> <span m="1218890">of</span> <span
  m="1218970">them,</span> <span m="1219630">for</span> <span
  m="1219760">all</span> <span m="1219890">of</span> <span
  m="1220000">those</span> <span m="1220200">shadow</span> <span
  m="1220540">heights,</span> <span m="1221050">all</span> <span
  m="1221150">right,</span> <span m="1221470">[? with ?]</span> <span
  m="1221580">no</span> <span m="1221700">training</span> <span
  m="1222080">so</span> <span m="1222230">far.</span></p><p><span
  m="1224110">So</span> <span m="1224280">let's</span> <span
  m="1224510">run</span> <span m="1224670">this</span> <span
  m="1224860">thing.</span> <span m="1225270">We're</span> <span
  m="1225430">just</span> <span m="1225630">using</span> <span
  m="1225890">simple</span> <span m="1226200">[? backdrop, ?]</span> <span
  m="1227105">just</span> <span m="1227500">like</span> <span
  m="1227710">on</span> <span m="1227810">our</span> <span
  m="1227900">world's</span> <span m="1228160">simplest</span> <span
  m="1228660">neural</span> <span m="1228930">net.</span> <span
  m="1230570">And</span> <span m="1230800">it's</span> <span
  m="1230980">interesting</span> <span m="1231380">to</span> <span
  m="1231470">see</span> <span m="1235790">what</span> <span
  m="1235960">happens.</span> <span m="1236700">You</span> <span
  m="1236790">see</span> <span m="1236950">all</span> <span
  m="1237060">those</span> <span m="1237240">values</span> <span
  m="1237700">changing?</span> <span m="1238310">Now,</span> <span
  m="1238670">I</span> <span m="1238770">need</span> <span m="1238920">to</span>
  <span m="1238980">mention</span> <span m="1239330">that</span> <span
  m="1240320">when</span> <span m="1240730">you</span> <span
  m="1240810">see</span> <span m="1241020">a</span> <span
  m="1241080">green</span> <span m="1241450">connection,</span> <span
  m="1242010">that</span> <span m="1242160">means</span> <span
  m="1242350">it's</span> <span m="1242500">a</span> <span
  m="1242560">positive</span> <span m="1243070">weight,</span> <span
  m="1244390">and</span> <span m="1244760">the</span> <span
  m="1245130">density</span> <span m="1245570">of</span> <span
  m="1245650">the</span> <span m="1245720">green</span> <span
  m="1246320">indicates</span> <span m="1247750">how</span> <span
  m="1248000">positive</span> <span m="1248510">it</span> <span
  m="1248610">is.</span> <span m="1249870">And</span> <span
  m="1250060">the</span> <span m="1250360">red</span> <span
  m="1250590">ones</span> <span m="1250890">are</span> <span
  m="1250970">negative</span> <span m="1251390">weights,</span> <span
  m="1251860">and</span> <span m="1252010">the</span> <span
  m="1252090">intensity</span> <span m="1252580">of</span> <span
  m="1252660">the</span> <span m="1252760">red</span> <span
  m="1252990">indicates</span> <span m="1253440">how</span> <span
  m="1253580">red</span> <span m="1253860">it</span> <span
  m="1253970">is.</span></p><p><span m="1255000">So</span> <span
  m="1255180">here</span> <span m="1255390">you</span> <span
  m="1255520">can</span> <span m="1255670">see</span> <span
  m="1255920">that</span> <span m="1256040">we</span> <span
  m="1256390">still</span> <span m="1256590">have</span> <span
  m="1257155">from</span> <span m="1257490">our</span> <span
  m="1257640">random</span> <span m="1257970">inputs</span> <span
  m="1259020">a</span> <span m="1259130">variety</span> <span
  m="1259630">of</span> <span m="1259770">red</span> <span
  m="1259970">and</span> <span m="1260110">green</span> <span
  m="1260340">values.</span> <span m="1260950">We</span> <span
  m="1261090">haven't</span> <span m="1261360">really</span> <span
  m="1261560">done</span> <span m="1261760">much</span> <span
  m="1261990">training,</span> <span m="1262680">so</span> <span
  m="1262840">everything</span> <span m="1263700">correctly</span> <span
  m="1264430">looks</span> <span m="1264600">pretty</span> <span
  m="1264810">much</span> <span m="1265040">random.</span> <span
  m="1266840">So</span> <span m="1266970">let's</span> <span
  m="1267230">run</span> <span m="1267410">this</span> <span
  m="1267600">thing.</span> <span m="1270160">And</span> <span
  m="1270420">after</span> <span m="1270760">only</span> <span
  m="1271030">1,000</span> <span m="1273140">iterations</span> <span
  m="1275310">going</span> <span m="1275630">through</span> <span
  m="1275860">these</span> <span m="1276740">examples</span> <span
  m="1277360">and</span> <span m="1277470">trying</span> <span
  m="1277650">to</span> <span m="1277710">make</span> <span
  m="1277900">the</span> <span m="1277990">output</span> <span
  m="1278350">the</span> <span m="1278420">same</span> <span m="1278660">as
  the</span> <span m="1278760">input,</span> <span m="1279410">we</span> <span
  m="1279640">reached</span> <span m="1279930">a</span> <span
  m="1279980">point</span> <span m="1280290">where</span> <span
  m="1280430">the</span> <span m="1280550">error</span> <span
  m="1280780">rate</span> <span m="1280990">has</span> <span
  m="1281190">dropped.</span> <span m="1282220">In</span> <span
  m="1282320">fact,</span> <span m="1282610">it's</span> <span
  m="1282710">dropped</span> <span m="1283010">so</span> <span
  m="1283150">much</span> <span m="1283420">it's</span> <span
  m="1283590">interesting</span> <span m="1284000">to</span> <span
  m="1284120">relook</span> <span m="1284980">at</span> <span
  m="1285140">the</span> <span m="1285210">test</span> <span
  m="1285520">cases.</span></p><p><span m="1286910">So</span> <span
  m="1286970">here's</span> <span m="1287180">a</span> <span
  m="1287240">test</span> <span m="1287580">case</span> <span
  m="1287840">where</span> <span m="1287930">we</span> <span
  m="1288040">have</span> <span m="1288190">a</span> <span
  m="1288240">cheetah.</span> <span m="1289150">And</span> <span
  m="1289300">now</span> <span m="1289460">the</span> <span
  m="1289600">output</span> <span m="1289940">value</span> <span
  m="1290360">is,</span> <span m="1290580">in</span> <span
  m="1290680">fact,</span> <span m="1290980">very</span> <span
  m="1291190">close</span> <span m="1291590">to</span> <span
  m="1291810">the</span> <span m="1292980">desired</span> <span
  m="1293420">value</span> <span m="1295690">in</span> <span
  m="1295820">all</span> <span m="1295910">the</span> <span
  m="1296040">output</span> <span m="1296290">neurons.</span> <span
  m="1297740">So</span> <span m="1297900">if</span> <span m="1297970">we</span>
  <span m="1298070">look</span> <span m="1298250">at</span> <span
  m="1298310">another</span> <span m="1298620">one,</span> <span
  m="1300230">once</span> <span m="1300420">again,</span> <span
  m="1300680">there's</span> <span m="1300820">a</span> <span
  m="1300870">correspondence</span> <span m="1301245">in</span> <span
  m="1301620">the</span> <span m="1301730">right</span> <span
  m="1301950">two</span> <span m="1302100">columns.</span> <span
  m="1303780">And</span> <span m="1303890">if</span> <span m="1303970">we</span>
  <span m="1304070">look</span> <span m="1304210">at</span> <span
  m="1304270">the</span> <span m="1304340">final</span> <span
  m="1304710">one,</span> <span m="1305720">yeah,</span> <span
  m="1305960">there's</span> <span m="1306150">a</span> <span
  m="1306200">correspondence</span> <span m="1306880">in</span> <span
  m="1306950">the</span> <span m="1307050">right</span> <span
  m="1307260">two</span> <span m="1307430">columns.</span></p><p><span
  m="1310980">Now,</span> <span m="1311080">you</span> <span
  m="1311110">back</span> <span m="1311330">up</span> <span
  m="1311480">from</span> <span m="1311650">this</span> <span
  m="1311860">and</span> <span m="1311970">say,</span> <span
  m="1312630">well,</span> <span m="1312930">what's</span> <span
  m="1313170">going</span> <span m="1313380">on</span> <span
  m="1313580">here?</span> <span m="1315570">It</span> <span
  m="1315610">turns</span> <span m="1315920">out</span> <span
  m="1316750">that</span> <span m="1316910">you're</span> <span
  m="1317040">not</span> <span m="1317260">training</span> <span
  m="1318430">this</span> <span m="1318670">thing</span> <span
  m="1320320">to</span> <span m="1320450">classify</span> <span
  m="1321050">animals.</span> <span m="1322490">You're</span> <span
  m="1322630">training</span> <span m="1323020">it</span> <span
  m="1323220">to</span> <span m="1323980">understand</span> <span
  m="1324570">the</span> <span m="1324650">nature</span> <span
  m="1325030">of</span> <span m="1325190">the</span> <span
  m="1325260">things</span> <span m="1325590">that</span> <span
  m="1325700">it</span> <span m="1325800">sees</span> <span
  m="1326110">in</span> <span m="1326200">the</span> <span
  m="1326280">environment</span> <span m="1328330">because</span> <span
  m="1328850">all</span> <span m="1329090">it</span> <span
  m="1329180">sees</span> <span m="1329570">is</span> <span
  m="1329710">the</span> <span m="1329800">height</span> <span
  m="1330010">of</span> <span m="1330090">a</span> <span
  m="1330140">shadow.</span> <span m="1330530">It doesn't</span> <span
  m="1330700">know</span> <span m="1330840">anything</span> <span
  m="1331130">about</span> <span m="1331330">the</span> <span
  m="1331400">classifications</span> <span m="1332230">you're</span> <span
  m="1332330">going</span> <span m="1332510">to</span> <span
  m="1332580">try</span> <span m="1332770">to</span> <span
  m="1332860">get</span> <span m="1333010">out</span> <span
  m="1333180">of</span> <span m="1333250">that.</span> <span
  m="1334610">All</span> <span m="1334820">it</span> <span m="1334910">sees
  is</span> <span m="1335340">that</span> <span m="1336240">there's</span> <span
  m="1336400">a</span> <span m="1336440">kind</span> <span m="1336640">of</span>
  <span m="1336710">consistency</span> <span m="1337470">in</span> <span
  m="1337590">the</span> <span m="1337650">kind</span> <span
  m="1337960">of</span> <span m="1338080">data</span> <span
  m="1338870">that</span> <span m="1339010">it</span> <span
  m="1339120">sees</span> <span m="1339460">on</span> <span
  m="1339800">the</span> <span m="1339880">input</span> <span
  m="1340220">values.</span> <span m="1341630">Right?</span></p><p><span
  m="1343170">Now,</span> <span m="1343280">you</span> <span
  m="1343390">might</span> <span m="1343600">say,</span> <span
  m="1343870">OK,</span> <span m="1344160">oh,</span> <span
  m="1344450">that's</span> <span m="1344590">cool,</span> <span
  m="1344860">because</span> <span m="1345190">what</span> <span
  m="1345370">must</span> <span m="1345610">be</span> <span
  m="1345730">happening</span> <span m="1346320">is</span> <span
  m="1346610">that</span> <span m="1346800">that</span> <span
  m="1347170">hidden</span> <span m="1347560">layer,</span> <span
  m="1348510">because</span> <span m="1348870">everything</span> <span
  m="1349220">is</span> <span m="1349360">forced</span> <span
  m="1349730">through</span> <span m="1349860">that</span> <span
  m="1350090">narrow</span> <span m="1350410">pipe,</span> <span
  m="1351410">must</span> <span m="1351750">be</span> <span
  m="1351860">doing</span> <span m="1352120">some</span> <span
  m="1352310">kind</span> <span m="1352490">of</span> <span
  m="1352560">generalization.</span> <span m="1355480">So</span> <span
  m="1355670">it</span> <span m="1355740">ought</span> <span
  m="1355840">to</span> <span m="1355910">be</span> <span m="1356010">the</span>
  <span m="1356090">case</span> <span m="1356420">that</span> <span
  m="1356530">if</span> <span m="1356650">we</span> <span
  m="1356740">click</span> <span m="1357020">on</span> <span
  m="1357160">each</span> <span m="1357320">of</span> <span
  m="1357390">those</span> <span m="1357570">neurons,</span> <span
  m="1357980">we</span> <span m="1358090">ought</span> <span
  m="1358200">to</span> <span m="1358290">see</span> <span m="1358430">it</span>
  <span m="1358570">specialize</span> <span m="1359350">to</span> <span
  m="1359470">a</span> <span m="1359520">particular</span> <span
  m="1360060">height,</span> <span m="1360820">because</span> <span
  m="1362320">that's</span> <span m="1362540">the</span> <span
  m="1362610">sort</span> <span m="1362790">of</span> <span
  m="1362860">stuff</span> <span m="1363110">that's</span> <span
  m="1363290">presented</span> <span m="1363810">on</span> <span
  m="1363930">the</span> <span m="1364040">input.</span></p><p><span
  m="1366290">Well,</span> <span m="1366490">let's</span> <span
  m="1366590">go</span> <span m="1366650">see</span> <span
  m="1368162">what,</span> <span m="1368610">in</span> <span
  m="1368710">fact,</span> <span m="1369010">is</span> <span
  m="1369170">the</span> <span m="1369250">maximum</span> <span
  m="1369870">stimulation</span> <span m="1371220">to</span> <span
  m="1371370">be</span> <span m="1371520">seen</span> <span
  m="1372980">on</span> <span m="1373140">the</span> <span
  m="1373210">neurons</span> <span m="1373770">in</span> <span
  m="1373910">that</span> <span m="1374080">hidden</span> <span
  m="1374330">layer.</span> <span m="1376540">So</span> <span
  m="1376980">when</span> <span m="1377120">I</span> <span
  m="1377190">click</span> <span m="1377480">on</span> <span
  m="1377640">these</span> <span m="1377850">guys,</span> <span
  m="1378710">what</span> <span m="1379140">we're</span> <span
  m="1379360">going</span> <span m="1379500">to</span> <span
  m="1379590">see</span> <span m="1379860">is</span> <span
  m="1380030">the</span> <span m="1380470">input</span> <span
  m="1380840">values</span> <span m="1382200">that</span> <span
  m="1382380">maximally</span> <span m="1382990">stimulate</span> <span
  m="1383600">that</span> <span m="1383800">neuron.</span> <span
  m="1385360">And</span> <span m="1385480">by</span> <span
  m="1385590">the</span> <span m="1385680">way,</span> <span
  m="1385820">I</span> <span m="1385890">have</span> <span m="1386000">no</span>
  <span m="1386240">idea</span> <span m="1386500">how</span> <span
  m="1386590">this</span> <span m="1386690">is</span> <span
  m="1386760">going</span> <span m="1386900">to</span> <span
  m="1386960">turn</span> <span m="1387200">out</span> <span
  m="1387360">because</span> <span m="1388330">the</span> <span
  m="1388800">initialization's</span> <span m="1389480">all</span> <span
  m="1389650">random.</span></p><p><span m="1391580">Well,</span> <span
  m="1391710">that's</span> <span m="1391920">good.</span> <span
  m="1392360">That</span> <span m="1392510">one</span> <span
  m="1392630">looks</span> <span m="1392810">like</span> <span
  m="1392970">it's</span> <span m="1393130">generalized</span> <span
  m="1393435">the</span> <span m="1393740">notion</span> <span
  m="1394120">of</span> <span m="1394580">short.</span> <span
  m="1396920">Ugh,</span> <span m="1399070">that</span> <span
  m="1399130">doesn't</span> <span m="1399370">look</span> <span
  m="1399570">like</span> <span m="1399790">medium.</span> <span
  m="1400690">And</span> <span m="1400840">in</span> <span
  m="1400920">fact,</span> <span m="1403570">the</span> <span
  m="1403670">maximum</span> <span m="1404090">stimulation</span> <span
  m="1404670">doesn't</span> <span m="1404930">involve</span> <span
  m="1405700">any</span> <span m="1406990">stimulation</span> <span
  m="1407650">from</span> <span m="1407780">that</span> <span
  m="1407890">lower</span> <span m="1408190">neuron.</span> <span
  m="1408570">Here,</span> <span m="1408840">look</span> <span
  m="1408970">at</span> <span m="1409060">this</span> <span
  m="1409240">one.</span> <span m="1411170">That</span> <span
  m="1411290">doesn't</span> <span m="1411530">look</span> <span
  m="1411670">like</span> <span m="1411870">tall.</span> <span
  m="1412640">So</span> <span m="1412790">we</span> <span m="1412870">got</span>
  <span m="1413060">one that</span> <span m="1413310">looks</span> <span
  m="1413490">like</span> <span m="1413850">short and</span> <span
  m="1414350">two that</span> <span m="1414910">just</span> <span
  m="1416535">look</span> <span m="1416800">completely</span> <span
  m="1417010">random.</span></p><p><span m="1420320">So</span> <span
  m="1420510">in</span> <span m="1420640">fact,</span> <span
  m="1421000">maybe</span> <span m="1421110">we</span> <span
  m="1421230">better</span> <span m="1421490">back</span> <span
  m="1421800">off</span> <span m="1422010">the</span> <span
  m="1422140">idea</span> <span m="1422510">that</span> <span
  m="1423240">what's</span> <span m="1423450">going</span> <span
  m="1423710">on</span> <span m="1423890">in</span> <span
  m="1423980">that</span> <span m="1424140">hidden</span> <span
  m="1424390">layer</span> <span m="1424730">is</span> <span
  m="1425490">generalization</span> <span m="1426460">and</span> <span
  m="1426690">say</span> <span m="1428550">that</span> <span
  m="1428720">what</span> <span m="1428850">is</span> <span
  m="1428970">going</span> <span m="1429240">on</span> <span
  m="1429380">in</span> <span m="1429460">there</span> <span
  m="1429620">is</span> <span m="1429780">maybe</span> <span
  m="1430100">the</span> <span m="1430300">encoding</span> <span
  m="1431660">of</span> <span m="1431810">a</span> <span
  m="1431860">generalization.</span> <span m="1433840">It</span> <span
  m="1433970">doesn't</span> <span m="1434240">look</span> <span
  m="1434410">like</span> <span m="1434620">an</span> <span
  m="1434940">encoding</span> <span m="1435410">we</span> <span
  m="1435520">can</span> <span m="1435680">see,</span> <span
  m="1436190">but</span> <span m="1438060">there</span> <span
  m="1438220">is</span> <span m="1438370">a</span> <span
  m="1438580">generalization</span> <span m="1439290">that's--</span> <span
  m="1440430">let</span> <span m="1440540">me</span> <span m="1440620">start
  that</span> <span m="1441060">over.</span></p><p><span m="1441820">We</span>
  <span m="1442070">don't</span> <span m="1442290">see</span> <span
  m="1442480">the</span> <span m="1442560">generalization</span> <span
  m="1445310">in</span> <span m="1445500">the</span> <span
  m="1446780">stimulating</span> <span m="1447310">values.</span> <span
  m="1448430">What</span> <span m="1448580">we</span> <span
  m="1448680">have</span> <span m="1448880">instead</span> <span
  m="1449220">is</span> <span m="1449380">we</span> <span
  m="1449500">have</span> <span m="1449670">some</span> <span
  m="1449830">kind</span> <span m="1450020">of</span> <span
  m="1450120">encoded</span> <span m="1450680">generalization.</span> <span
  m="1452610">And</span> <span m="1452750">because</span> <span
  m="1453070">we</span> <span m="1453210">got</span> <span
  m="1453390">this</span> <span m="1453530">stuff</span> <span
  m="1453790">encoded,</span> <span m="1454150">it's</span> <span
  m="1454290">what</span> <span m="1454420">makes</span> <span
  m="1454650">these</span> <span m="1454990">neural</span> <span
  m="1455240">nets</span> <span m="1455610">so</span> <span
  m="1455880">extraordinarily</span> <span m="1456570">difficult</span> <span
  m="1457010">to</span> <span m="1457070">understand.</span></p><p><span
  m="1457970">We</span> <span m="1458830">don't</span> <span
  m="1459020">understand</span> <span m="1459540">what</span> <span
  m="1459710">they're</span> <span m="1459800">doing.</span> <span
  m="1460610">We</span> <span m="1460660">don't</span> <span
  m="1460830">understand</span> <span m="1461330">why</span> <span
  m="1461540">they</span> <span m="1461670">can</span> <span
  m="1461820">recognize</span> <span m="1462340">a</span> <span
  m="1462390">cheetah.</span> <span m="1463050">We</span> <span
  m="1463240">don't</span> <span m="1463410">understand</span> <span
  m="1463890">why</span> <span m="1464270">it</span> <span
  m="1464440">can</span> <span m="1464580">recognize</span> <span
  m="1465030">a</span> <span m="1465090">school</span> <span
  m="1465400">bus</span> <span m="1465660">in</span> <span
  m="1465740">some</span> <span m="1465950">cases,</span> <span
  m="1466450">but</span> <span m="1466480">not</span> <span
  m="1466690">in</span> <span m="1466790">others,</span> <span
  m="1467070">because</span> <span m="1467330">we</span> <span
  m="1467440">don't</span> <span m="1467720">really</span> <span
  m="1468050">understand</span> <span m="1469780">what</span> <span
  m="1470150">these</span> <span m="1470480">neurons</span> <span
  m="1470920">are</span> <span m="1470990">responding</span> <span
  m="1471550">to.</span></p><p><span m="1472530">Well,</span> <span
  m="1472880">that's</span> <span m="1473100">not</span> <span
  m="1473290">quite</span> <span m="1473530">true.</span> <span
  m="1474110">There's</span> <span m="1474410">been</span> <span
  m="1474940">a</span> <span m="1475340">lot</span> <span m="1475550">of</span>
  <span m="1475630">work</span> <span m="1475860">recently</span> <span
  m="1476300">on</span> <span m="1476510">trying</span> <span
  m="1476860">to</span> <span m="1477220">sort</span> <span
  m="1477590">that</span> <span m="1477790">out,</span> <span
  m="1478100">but</span> <span m="1478200">it's</span> <span
  m="1478300">still</span> <span m="1478690">a</span> <span
  m="1478930">lot</span> <span m="1479400">of</span> <span
  m="1479740">mystery</span> <span m="1480170">in</span> <span
  m="1480270">this</span> <span m="1480440">world.</span> <span m="1481870">In
  any</span> <span m="1482020">event,</span> <span m="1482840">that's</span>
  <span m="1483050">the</span> <span m="1483180">autocoding</span> <span
  m="1483890">idea.</span> <span m="1484700">It</span> <span
  m="1484880">comes</span> <span m="1485120">in</span> <span
  m="1485220">various</span> <span m="1485600">guises.</span> <span
  m="1485980">Sometimes</span> <span m="1486380">people</span> <span
  m="1486590">talk</span> <span m="1486800">about</span> <span
  m="1487070">Boltzmann</span> <span m="1487520">machines</span> <span
  m="1487990">and</span> <span m="1488080">things</span> <span
  m="1488320">of</span> <span m="1488380">that</span> <span
  m="1488540">sort.</span> <span m="1488880">But</span> <span
  m="1488890">it's</span> <span m="1489000">basically</span> <span
  m="1489390">all</span> <span m="1489580">the</span> <span
  m="1489650">same</span> <span m="1489970">sort</span> <span
  m="1490210">of</span> <span m="1490300">idea.</span></p><p><span
  m="1491230">And</span> <span m="1491360">so  what</span> <span
  m="1491470">you</span> <span m="1491560">can</span> <span
  m="1491680">do</span> <span m="1491780">is</span> <span
  m="1491950">layer</span> <span m="1492260">by</span> <span
  m="1492450">layer.</span> <span m="1493300">Once</span> <span
  m="1493610">you've</span> <span m="1493720">trained</span> <span
  m="1494020">the</span> <span m="1494140">input</span> <span
  m="1494480">layer,</span> <span m="1495290">then</span> <span
  m="1495440">you</span> <span m="1495520">can</span> <span
  m="1495650">use</span> <span m="1495830">that</span> <span
  m="1496110">layer</span> <span m="1496380">to</span> <span
  m="1496480">train</span> <span m="1496730">the</span> <span
  m="1496800">next</span> <span m="1497070">layer,</span> <span
  m="1497810">and</span> <span m="1497920">then</span> <span
  m="1498040">that</span> <span m="1498220">can</span> <span
  m="1498330">train</span> <span m="1498560">the</span> <span
  m="1498630">next</span> <span m="1498860">layer</span> <span
  m="1499110">after</span> <span m="1499290">that.</span> <span
  m="1500110">And</span> <span m="1500270">it's</span> <span
  m="1500420">only</span> <span m="1500750">at</span> <span
  m="1500880">the</span> <span m="1500960">very,</span> <span
  m="1501455">very</span> <span m="1501950">end</span> <span
  m="1503180">that</span> <span m="1503590">you</span> <span
  m="1503700">say</span> <span m="1503920">to</span> <span
  m="1503980">yourself,</span> <span m="1504360">well,</span> <span
  m="1505050">now</span> <span m="1505290">I've</span> <span
  m="1505560">accumulated</span> <span m="1506020">a</span> <span
  m="1506050">lot</span> <span m="1506280">of</span> <span
  m="1506350">knowledge</span> <span m="1506720">about</span> <span
  m="1507020">the</span> <span m="1507140">environment</span> <span
  m="1507940">and</span> <span m="1508110">what</span> <span
  m="1508340">can</span> <span m="1508480">be</span> <span
  m="1508590">seen</span> <span m="1508890">in</span> <span
  m="1509010">the</span> <span m="1509120">environment.</span> <span
  m="1510220">Maybe</span> <span m="1510450">it's</span> <span
  m="1510550">time</span> <span m="1510750">to</span> <span
  m="1510820">get</span> <span m="1510960">around</span> <span
  m="1511230">to</span> <span m="1511300">using</span> <span
  m="1512781">some</span> <span m="1513160">samples</span> <span
  m="1513660">of</span> <span m="1513760">particular</span> <span
  m="1514270">classes</span> <span m="1514810">and</span> <span
  m="1515550">train on</span> <span m="1515920">classes.</span> <span
  m="1517770">So</span> <span m="1518280">that's</span> <span
  m="1518530">the</span> <span m="1518600">story</span> <span
  m="1519110">on</span> <span m="1519280">autocoding.</span></p><p><span
  m="1522780">Now,</span> <span m="1522920">the</span> <span
  m="1522990">next</span> <span m="1523200">thing</span> <span
  m="1523370">to</span> <span m="1523430">talk</span> <span
  m="1523650">about</span> <span m="1525600">is</span> <span
  m="1525750">that</span> <span m="1525910">final</span> <span
  m="1526260">layer.</span> <span m="1529660">So</span> <span
  m="1529950">let's</span> <span m="1530180">see</span> <span
  m="1530620">what</span> <span m="1530850">the</span> <span
  m="1530910">final</span> <span m="1531220">layer</span> <span
  m="1531480">might</span> <span m="1531720">look</span> <span
  m="1531930">like.</span> <span m="1535110">Let's</span> <span
  m="1535200">see,</span> <span m="1536340">it</span> <span
  m="1537310">might</span> <span m="1537640">look</span> <span
  m="1537890">like</span> <span m="1538650">this.</span> <span
  m="1539940">There's</span> <span m="1540140">a</span> <span m="1540200">[?
  summer. ?]</span> <span m="1542790">There's</span> <span m="1543000">a</span>
  <span m="1543050">minus</span> <span m="1543420">1</span> <span
  m="1543690">up</span> <span m="1543860">here.</span> <span
  m="1545033">No.</span> <span m="1545436">Let's</span> <span
  m="1545840">see,</span> <span m="1546070">there's</span> <span
  m="1546230">a</span> <span m="1546280">minus</span> <span m="1546630">1</span>
  <span m="1546830">up--</span> <span m="1547463">[INAUDIBLE].</span> <span
  m="1550710">There's</span> <span m="1550850">a</span> <span
  m="1550900">minus</span> <span m="1551240">1</span> <span
  m="1551440">up</span> <span m="1551610">there.</span> <span
  m="1553120">There's</span> <span m="1553280">a</span> <span
  m="1553320">multiplier</span> <span m="1553930">here.</span> <span
  m="1555420">And</span> <span m="1555530">there's</span> <span
  m="1555690">a</span> <span m="1555730">threshold</span> <span
  m="1556230">value</span> <span m="1556600">there.</span></p><p><span
  m="1558091">Now,</span> <span m="1558590">likewise,</span> <span
  m="1559130">there's</span> <span m="1559320">some</span> <span
  m="1559490">other</span> <span m="1559790">input</span> <span
  m="1560170">values</span> <span m="1560650">here.</span> <span
  m="1560950">Let</span> <span m="1561050">me</span> <span
  m="1561150">call</span> <span m="1561250">this</span> <span
  m="1561430">one</span> <span m="1561660">x,</span> <span m="1562660">and
  it</span> <span m="1563160">gets</span> <span m="1563410">multiplied</span>
  <span m="1564830">by</span> <span m="1564970">some</span> <span
  m="1565260">weight.</span> <span m="1567690">And then</span> <span
  m="1567810">that</span> <span m="1567970">goes</span> <span
  m="1568210">into</span> <span m="1568410">the</span> <span m="1568510">[?
  summer ?]</span> <span m="1568910">as</span> <span m="1569040">well.</span>
  <span m="1570500">And</span> <span m="1570650">that,</span> <span
  m="1570880">in</span> <span m="1571030">turn,</span> <span
  m="1571810">goes</span> <span m="1574140">into</span> <span
  m="1574430">a</span> <span m="1574470">sigmoid</span> <span
  m="1576130">that</span> <span m="1576280">looks</span> <span
  m="1576490">like</span> <span m="1576690">so.</span> <span
  m="1579540">And</span> <span m="1579580">finally,</span> <span
  m="1579920">you</span> <span m="1580030">get</span> <span
  m="1580410">an</span> <span m="1580540">output,</span> <span
  m="1582020">which</span> <span m="1582120">we'll</span> <span
  m="1582250">z.</span></p><p><span m="1585180">So</span> <span
  m="1585500">it's</span> <span m="1585610">clear</span> <span
  m="1586050">that</span> <span m="1586220">if</span> <span
  m="1586320">you</span> <span m="1586920">just</span> <span
  m="1587690">write</span> <span m="1587930">out</span> <span
  m="1588420">the</span> <span m="1588550">value</span> <span
  m="1588990">of</span> <span m="1589090">z</span> <span m="1589400">as</span>
  <span m="1589550">it</span> <span m="1589640">depends</span> <span
  m="1590040">on</span> <span m="1590250">those</span> <span
  m="1591350">inputs</span> <span m="1593350">using</span> <span
  m="1593760">the</span> <span m="1593840">formula</span> <span
  m="1594300">that</span> <span m="1594480">we</span> <span
  m="1596020">worked</span> <span m="1596280">with</span> <span
  m="1596930">last</span> <span m="1597210">time,</span> <span
  m="1598380">then</span> <span m="1598540">what</span> <span
  m="1598680">you</span> <span m="1598770">see</span> <span
  m="1599010">is</span> <span m="1599250">that</span> <span m="1599390">z</span>
  <span m="1601320">is</span> <span m="1601490">equal</span> <span
  m="1601800">to</span> <span m="1604840">1</span> <span m="1606313">over</span>
  <span m="1607786">1</span> <span m="1608280">plus</span> <span
  m="1609346">e</span> <span m="1610260">to</span> <span m="1610310">the</span>
  <span m="1610390">minus</span> <span m="1611970">w</span> <span
  m="1614530">times</span> <span m="1615190">x</span> <span
  m="1616770">minus</span> <span m="1617270">T--</span> <span m="1619290">plus
  T,</span> <span m="1619700">I</span> <span m="1619960">guess.</span> <span
  m="1621250">Right?</span> <span m="1624990">So</span> <span
  m="1625220">that's</span> <span m="1625450">a</span> <span
  m="1625510">sigmoid</span> <span m="1626020">function</span> <span
  m="1626550">that</span> <span m="1628190">depends</span> <span
  m="1628700">on</span> <span m="1630160">the</span> <span
  m="1630270">value</span> <span m="1630620">of</span> <span
  m="1630710">that</span> <span m="1630930">weight</span> <span
  m="1631390">and</span> <span m="1631560">on</span> <span
  m="1631680">the</span> <span m="1631760">value</span> <span
  m="1632090">of</span> <span m="1632150">that</span> <span
  m="1632310">threshold.</span></p><p><span m="1633970">So</span> <span
  m="1634130">let's</span> <span m="1634380">look</span> <span
  m="1634570">at</span> <span m="1634650">how</span> <span
  m="1637170">those</span> <span m="1637640">values</span> <span
  m="1638050">might</span> <span m="1638340">change</span> <span
  m="1638790">things.</span> <span m="1640510">So</span> <span
  m="1642170">here</span> <span m="1642350">we</span> <span
  m="1642490">have</span> <span m="1642740">an</span> <span
  m="1642840">ordinary</span> <span m="1643370">sigmoid.</span> <span
  m="1646550">And</span> <span m="1646680">what</span> <span
  m="1646820">happens</span> <span m="1647180">if</span> <span
  m="1647340">we</span> <span m="1647480">shift</span> <span
  m="1647840">it</span> <span m="1648140">with</span> <span m="1648520">a</span>
  <span m="1648600">threshold</span> <span m="1650040">value?</span> <span
  m="1651390">If</span> <span m="1651480">we</span> <span
  m="1651570">change</span> <span m="1651850">that</span> <span
  m="1652010">threshold</span> <span m="1652510">value,</span> <span
  m="1654520">then</span> <span m="1654870">it's</span> <span
  m="1655050">going</span> <span m="1655270">to</span> <span
  m="1655520">shift</span> <span m="1655890">the</span> <span
  m="1655980">place</span> <span m="1656390">where</span> <span
  m="1656580">that</span> <span m="1660560">sigmoid</span> <span
  m="1661170">comes</span> <span m="1661460">down.</span> <span
  m="1665600">So</span> <span m="1665790">a</span> <span
  m="1665840">change</span> <span m="1666220">in</span> <span
  m="1666350">T</span> <span m="1667040">could</span> <span
  m="1667230">cause</span> <span m="1667500">this</span> <span
  m="1667670">thing</span> <span m="1667860">to</span> <span
  m="1667970">shift</span> <span m="1668270">over</span> <span
  m="1668420">that</span> <span m="1668610">way.</span> <span
  m="1670770">And</span> <span m="1670810">if</span> <span m="1670930">we</span>
  <span m="1671010">change</span> <span m="1671340">the</span> <span
  m="1671400">value</span> <span m="1671800">of</span> <span
  m="1671900">w,</span> <span m="1672860">that</span> <span
  m="1673010">could</span> <span m="1673190">change</span> <span
  m="1673410">how</span> <span m="1673600">steep</span> <span
  m="1673990">this</span> <span m="1674090">guy</span> <span
  m="1674420">is.</span></p><p><span m="1678460">So</span> <span
  m="1679380">we</span> <span m="1679510">might</span> <span
  m="1679740">think</span> <span m="1680030">that</span> <span
  m="1680180">the</span> <span m="1680260">performance,</span> <span
  m="1681880">since</span> <span m="1682160">it</span> <span
  m="1682250">depends</span> <span m="1682700">on</span> <span
  m="1682850">w</span> <span m="1683260">and</span> <span m="1683450">T,</span>
  <span m="1685450">should</span> <span m="1685720">be</span> <span
  m="1685910">adjusted</span> <span m="1686660">in</span> <span
  m="1686840">such</span> <span m="1687130">a</span> <span
  m="1687180">way</span> <span m="1688820">as</span> <span m="1689080">to</span>
  <span m="1691480">make</span> <span m="1691690">the</span> <span
  m="1691750">classification</span> <span m="1692480">do</span> <span
  m="1692550">the</span> <span m="1692650">right</span> <span
  m="1692870">thing.</span> <span m="1694470">But</span> <span
  m="1694820">what's</span> <span m="1695300">the</span> <span
  m="1695410">right</span> <span m="1695650">thing?</span> <span
  m="1697020">Well,</span> <span m="1697360">that</span> <span
  m="1697500">depends</span> <span m="1697950">on</span> <span
  m="1698080">the</span> <span m="1698150">samples</span> <span
  m="1698620">that</span> <span m="1698770">we've</span> <span
  m="1698940">seen.</span> <span m="1704490">Suppose,</span> <span
  m="1705000">for</span> <span m="1705210">example,</span> <span
  m="1707230">that</span> <span m="1707320">this</span> <span
  m="1707520">is</span> <span m="1707640">our</span> <span
  m="1707760">sigmoid</span> <span m="1708250">function.</span> <span
  m="1711330">And</span> <span m="1711500">we</span> <span
  m="1711620">see</span> <span m="1711860">some</span> <span
  m="1712980">examples</span> <span m="1713760">of</span> <span
  m="1713910">a</span> <span m="1713980">class,</span> <span
  m="1716200">some</span> <span m="1716410">positive</span> <span
  m="1716850">examples</span> <span m="1717380">of</span> <span
  m="1717460">a</span> <span m="1717520">class,</span> <span
  m="1718620">that</span> <span m="1718800">have</span> <span
  m="1719020">values</span> <span m="1720620">that</span> <span
  m="1720780">lie</span> <span m="1721580">at</span> <span
  m="1722040">that</span> <span m="1722280">point</span> <span
  m="1723270">and</span> <span m="1723520">that</span> <span
  m="1723790">point</span> <span m="1724200">and</span> <span
  m="1724670">that</span> <span m="1725020">point.</span></p><p><span
  m="1726800">And</span> <span m="1726940">we</span> <span
  m="1727060">have</span> <span m="1727270">some</span> <span
  m="1730210">values</span> <span m="1730910">that</span> <span
  m="1731050">correspond</span> <span m="1731690">to</span> <span
  m="1733290">situations</span> <span m="1733980">where</span> <span
  m="1734180">the</span> <span m="1734740">class</span> <span
  m="1735120">is</span> <span m="1735260">not</span> <span
  m="1735550">one</span> <span m="1735700">of</span> <span
  m="1735780">the</span> <span m="1735850">things</span> <span
  m="1736250">that</span> <span m="1736370">are</span> <span
  m="1736450">associated</span> <span m="1737040">with</span> <span
  m="1737140">this</span> <span m="1737340">neuron.</span> <span
  m="1738580">And</span> <span m="1738700">in</span> <span
  m="1738770">that</span> <span m="1738960">case,</span> <span
  m="1740100">what</span> <span m="1740110">we</span> <span
  m="1740230">see</span> <span m="1740500">is</span> <span
  m="1741250">examples</span> <span m="1741800">that</span> <span
  m="1741930">are</span> <span m="1742020">over</span> <span
  m="1742260">in</span> <span m="1742350">this</span> <span
  m="1742550">vicinity</span> <span m="1743030">here.</span> <span
  m="1746370">So</span> <span m="1746560">the</span> <span
  m="1746640">probability</span> <span m="1747960">that</span> <span
  m="1748130">we</span> <span m="1748280">would</span> <span
  m="1748390">see</span> <span m="1748590">this</span> <span
  m="1748790">particular</span> <span m="1749370">guy</span> <span
  m="1750710">in</span> <span m="1750850">this</span> <span
  m="1751050">world</span> <span m="1751520">is</span> <span
  m="1751640">associated</span> <span m="1752410">with</span> <span
  m="1752600">the</span> <span m="1752990">value</span> <span
  m="1753420">on</span> <span m="1753510">the</span> <span
  m="1753580">sigmoid</span> <span m="1754050">curve.</span></p><p><span
  m="1755300">So</span> <span m="1755470">you</span> <span
  m="1755540">could</span> <span m="1755640">think</span> <span
  m="1755820">of</span> <span m="1755910">this</span> <span
  m="1756110">as</span> <span m="1756200">the</span> <span
  m="1756280">probability</span> <span m="1757420">of</span> <span
  m="1757600">that</span> <span m="1757850">positive</span> <span
  m="1758270">example,</span> <span m="1759100">and</span> <span
  m="1759220">this</span> <span m="1759380">is</span> <span
  m="1759450">the</span> <span m="1759530">probability</span> <span
  m="1760200">of</span> <span m="1760380">that</span> <span
  m="1760950">positive</span> <span m="1761300">example,</span> <span
  m="1761840">and</span> <span m="1761930">this</span> <span
  m="1762050">is</span> <span m="1762120">the</span> <span
  m="1762210">probability</span> <span m="1762750">of</span> <span
  m="1762850">that</span> <span m="1763080">positive</span> <span
  m="1763490">example.</span> <span m="1765020">What's</span> <span
  m="1765160">the</span> <span m="1765240">probability</span> <span
  m="1765810">of</span> <span m="1765930">this</span> <span
  m="1766160">negative</span> <span m="1766570">example?</span> <span
  m="1768020">Well,</span> <span m="1768290">it's</span> <span
  m="1768470">1</span> <span m="1768720">minus</span> <span
  m="1770390">the</span> <span m="1770470">value</span> <span
  m="1770880">on</span> <span m="1770970">that</span> <span
  m="1771130">curve.</span> <span m="1772480">And</span> <span
  m="1772640">this</span> <span m="1772780">one's</span> <span
  m="1773280">1</span> <span m="1773500">minus</span> <span
  m="1773820">the</span> <span m="1773890">value</span> <span
  m="1774400">on</span> <span m="1774590">that</span> <span
  m="1774690">curve.</span></p><p><span m="1776830">So</span> <span
  m="1777800">we</span> <span m="1777950">could</span> <span
  m="1778090">go</span> <span m="1778230">through</span> <span
  m="1778400">the</span> <span m="1778490">calculations.</span> <span
  m="1779510">And</span> <span m="1779680">what</span> <span
  m="1779800">we</span> <span m="1779900">would</span> <span
  m="1780030">determine</span> <span m="1780780">is</span> <span
  m="1781000">that</span> <span m="1782320">to</span> <span
  m="1782460">maximize</span> <span m="1783230">the</span> <span
  m="1783300">probability</span> <span m="1784020">of</span> <span
  m="1784190">seeing</span> <span m="1784620">this</span> <span
  m="1784870">data,</span> <span m="1785690">this</span> <span
  m="1785860">particular</span> <span m="1786360">stuff</span> <span
  m="1786790">in</span> <span m="1786890">a</span> <span m="1786950">set</span>
  <span m="1787200">of</span> <span m="1787310">experiments,</span> <span
  m="1788550">to</span> <span m="1788670">maximize</span> <span
  m="1789260">that</span> <span m="1789450">probability,</span> <span
  m="1790140">we</span> <span m="1790410">would</span> <span
  m="1790620">have</span> <span m="1790850">to</span> <span
  m="1790990">adjust</span> <span m="1791430">T</span> <span
  m="1792130">and</span> <span m="1792340">w</span> <span m="1793040">so</span>
  <span m="1793330">as</span> <span m="1793500">to</span> <span
  m="1793600">get</span> <span m="1793880">this</span> <span
  m="1794110">curve</span> <span m="1795450">doing</span> <span
  m="1795860">the</span> <span m="1796040">optimal</span> <span
  m="1796450">thing.</span> <span m="1797770">And</span> <span
  m="1797930">there's</span> <span m="1798090">nothing</span> <span
  m="1798360">mysterious</span> <span m="1798890">about</span> <span
  m="1799160">it.</span> <span m="1799690">It's</span> <span
  m="1799830">just</span> <span m="1800020">more</span> <span
  m="1800180">partial</span> <span m="1800570">derivatives</span> <span
  m="1801050">and</span> <span m="1801170">that</span> <span
  m="1801350">sort</span> <span m="1801570">of</span> <span
  m="1801650">thing.</span></p><p><span m="1803150">But</span> <span
  m="1803270">the</span> <span m="1803330">bottom</span> <span
  m="1803630">line</span> <span m="1803910">is</span> <span
  m="1804750">that</span> <span m="1805010">the</span> <span
  m="1805100">probability</span> <span m="1805830">of</span> <span
  m="1806020">seeing</span> <span m="1806370">this</span> <span
  m="1806600">data</span> <span m="1809720">is</span> <span
  m="1809870">dependent</span> <span m="1810470">on</span> <span
  m="1810620">the</span> <span m="1810710">shape</span> <span
  m="1811010">of</span> <span m="1811090">this</span> <span
  m="1811270">curve,</span> <span m="1812570">and the</span> <span
  m="1812790">shape</span> <span m="1813060">of</span> <span
  m="1813150">this</span> <span m="1813330">curve</span> <span
  m="1814260">is</span> <span m="1814420">dependent</span> <span
  m="1814890">on</span> <span m="1815070">those</span> <span
  m="1815280">parameters.</span> <span m="1816540">And</span> <span
  m="1816690">if</span> <span m="1816750">we</span> <span
  m="1816860">wanted</span> <span m="1817010">to</span> <span
  m="1817070">maximize</span> <span m="1817780">the</span> <span
  m="1817860">probability</span> <span m="1818550">that</span> <span
  m="1819080">we've</span> <span m="1819330">seen</span> <span
  m="1819760">this</span> <span m="1819960">data,</span> <span
  m="1821200">then</span> <span m="1821380">we</span> <span
  m="1821490">have</span> <span m="1821680">to</span> <span
  m="1821930">adjust</span> <span m="1822440">those</span> <span
  m="1822640">parameters</span> <span
  m="1823140">accordingly.</span></p><p><span m="1826160">Let's</span> <span
  m="1826290">have</span> <span m="1826400">a</span> <span
  m="1826430">look</span> <span m="1826630">at</span> <span m="1826700">a</span>
  <span m="1826740">demonstration.</span> <span m="1840040">OK.</span> <span
  m="1840270">So</span> <span m="1840480">there's</span> <span
  m="1840900">an</span> <span m="1841020">ordinary</span> <span
  m="1841420">sigmoid</span> <span m="1841950">curve.</span> <span
  m="1843730">Here</span> <span m="1843900">are</span> <span
  m="1843930">a</span> <span m="1843970">couple of</span> <span
  m="1844280">positive</span> <span m="1844740">examples.</span> <span
  m="1846850">Here's</span> <span m="1847050">a</span> <span
  m="1849160">negative</span> <span m="1849500">example.</span> <span
  m="1853500">Let's</span> <span m="1853680">put</span> <span
  m="1853820">in</span> <span m="1853980">some</span> <span
  m="1854150">more</span> <span m="1854320">positive</span> <span
  m="1854750">examples</span> <span m="1855260">over</span> <span
  m="1855460">here.</span> <span m="1858170">And</span> <span
  m="1858290">now</span> <span m="1858410">let's</span> <span
  m="1859740">run</span> <span m="1860880">the</span> <span
  m="1861010">good,</span> <span m="1861190">old</span> <span
  m="1863540">gradient</span> <span m="1863870">ascent</span> <span
  m="1864230">algorithm</span> <span m="1864670">on</span> <span
  m="1864820">that.</span> <span m="1866870">And</span> <span
  m="1866970">this</span> <span m="1867080">is</span> <span
  m="1867140">what</span> <span m="1867300">happens.</span> <span
  m="1868920">You've</span> <span m="1869100">seen</span> <span
  m="1869360">how</span> <span m="1869490">the</span> <span
  m="1869580">probability,</span> <span m="1870980">as</span> <span
  m="1871170">we</span> <span m="1871280">adjust</span> <span
  m="1871640">the</span> <span m="1871720">shape</span> <span
  m="1872010">of</span> <span m="1872080">the</span> <span
  m="1872140">curve,</span> <span m="1873240">the</span> <span
  m="1873350">probability</span> <span m="1873930">of</span> <span
  m="1874030">seeing</span> <span m="1874370">those</span> <span
  m="1874690">examples</span> <span m="1875650">of</span> <span
  m="1875810">the</span> <span m="1875890">class</span> <span
  m="1876610">goes</span> <span m="1876860">up,</span> <span
  m="1878060">and</span> <span m="1878170">the</span> <span
  m="1878230">probability</span> <span m="1878950">of</span> <span
  m="1879130">seeing</span> <span m="1879410">the</span> <span
  m="1879490">non-example</span> <span m="1880280">goes</span> <span
  m="1880560">down.</span></p><p><span m="1882950">So</span> <span
  m="1883110">what</span> <span m="1883230">if</span> <span
  m="1883350">we</span> <span m="1883450">put</span> <span
  m="1883640">some</span> <span m="1883780">more</span> <span
  m="1884440">examples</span> <span m="1885030">in?</span> <span
  m="1886110">If</span> <span m="1886230">we</span> <span m="1886320">put</span>
  <span m="1886510">a</span> <span m="1886570">negative</span> <span
  m="1886940">example</span> <span m="1887400">there,</span> <span
  m="1887640">not</span> <span m="1887840">much</span> <span
  m="1888050">is</span> <span m="1888130">going</span> <span
  m="1888270">to</span> <span m="1888330">happen.</span> <span
  m="1890030">What</span> <span m="1890150">would</span> <span
  m="1890250">happen</span> <span m="1890520">if</span> <span
  m="1890620">we</span> <span m="1890730">put</span> <span m="1890890">a</span>
  <span m="1890930">positive</span> <span m="1891390">example</span> <span
  m="1891860">right</span> <span m="1892070">there?</span> <span
  m="1894080">Then</span> <span m="1894190">we're</span> <span
  m="1894280">going</span> <span m="1894420">to</span> <span
  m="1894490">start</span> <span m="1894710">seeing</span> <span
  m="1894910">some</span> <span m="1895100">dramatic</span> <span
  m="1895590">shifts</span> <span m="1895970">in</span> <span
  m="1896070">the</span> <span m="1896190">shape</span> <span
  m="1896480">of</span> <span m="1896540">the</span> <span
  m="1896600">curve.</span> <span m="1908000">So</span> <span
  m="1908060">that's</span> <span m="1908240">probably</span> <span
  m="1908500">a</span> <span m="1908550">noise</span> <span
  m="1908960">point.</span> <span m="1910450">But</span> <span
  m="1910530">we</span> <span m="1910620">can</span> <span
  m="1910740">put</span> <span m="1910920">some</span> <span
  m="1911070">more</span> <span m="1911430">negative</span> <span
  m="1911790">examples</span> <span m="1912300">in</span> <span
  m="1912420">there</span> <span m="1914750">and</span> <span
  m="1914920">see</span> <span m="1915100">how</span> <span
  m="1915240">that</span> <span m="1915420">adjusts</span> <span
  m="1915510">the</span> <span m="1915810">curve.</span></p><p><span
  m="1919532">All right.</span> <span m="1920010">So</span> <span
  m="1920060">that's</span> <span m="1920250">what</span> <span
  m="1920350">we're</span> <span m="1920450">doing.</span> <span
  m="1920790">We're</span> <span m="1920960">viewing</span> <span
  m="1921360">this</span> <span m="1921640">output</span> <span
  m="1922060">value</span> <span m="1922680">as</span> <span
  m="1923040">something</span> <span m="1923430">that's</span> <span
  m="1923640">related</span> <span m="1924130">to</span> <span
  m="1924210">the</span> <span m="1924310">probability</span> <span
  m="1924940">of</span> <span m="1925040">seeing</span> <span
  m="1925350">a</span> <span m="1925430">class.</span> <span
  m="1927250">And</span> <span m="1927410">we're</span> <span
  m="1927510">adjusting</span> <span m="1927960">the</span> <span
  m="1928050">parameters</span> <span m="1928780">on</span> <span
  m="1928920">that</span> <span m="1929090">output</span> <span
  m="1929500">layer</span> <span m="1929900">so</span> <span
  m="1930140">as</span> <span m="1930280">to</span> <span
  m="1930370">maximize</span> <span m="1931070">the</span> <span
  m="1931140">probability</span> <span m="1931750">of</span> <span
  m="1931850">the</span> <span m="1931920">sample</span> <span
  m="1932380">data</span> <span m="1932620">that</span> <span
  m="1932780">we've</span> <span m="1932940">got</span> <span
  m="1933140">at</span> <span m="1933220">hand.</span> <span
  m="1934730">Right?</span></p><p><span m="1937930">Now,</span> <span
  m="1938070">there's</span> <span m="1938210">one</span> <span
  m="1938380">more</span> <span m="1938560">thing.</span> <span
  m="1940310">Because</span> <span m="1940560">see</span> <span
  m="1940700">what</span> <span m="1940820">we've</span> <span
  m="1940970">got</span> <span m="1941210">here</span> <span
  m="1941430">is</span> <span m="1941540">we've</span> <span
  m="1941670">got</span> <span m="1941870">the</span> <span
  m="1941950">basic</span> <span m="1942380">idea</span> <span
  m="1942730">of</span> <span m="1942830">back</span> <span
  m="1943140">propagation,</span> <span m="1944680">which</span> <span
  m="1944880">has</span> <span m="1945370">layers</span> <span
  m="1945950">and</span> <span m="1946080">layers</span> <span
  m="1947150">of</span> <span m="1947690">additional--</span> <span
  m="1950200">let</span> <span m="1950320">me</span> <span m="1950430">be</span>
  <span m="1950590">flattering</span> <span m="1951050">and</span> <span
  m="1951150">call</span> <span m="1951300">them</span> <span
  m="1951430">ideas</span> <span m="1952030">layered</span> <span
  m="1952280">on</span> <span m="1952440">top.</span> <span
  m="1953390">So</span> <span m="1954180">here's</span> <span
  m="1954360">the</span> <span m="1954430">next</span> <span
  m="1955120">idea</span> <span m="1955440">that's</span> <span
  m="1955640">layered</span> <span m="1955890">on</span> <span
  m="1956050">top.</span></p><p><span m="1958820">So</span> <span
  m="1961530">we've</span> <span m="1961690">got</span> <span
  m="1961840">an</span> <span m="1961910">output</span> <span
  m="1962260">value</span> <span m="1962640">here.</span> <span
  m="1965740">And</span> <span m="1965920">it's</span> <span
  m="1966040">a</span> <span m="1966090">function</span> <span
  m="1966580">after</span> <span m="1966910">all,</span> <span
  m="1967630">and</span> <span m="1968790">it's</span> <span
  m="1969260">got</span> <span m="1969430">a</span> <span
  m="1969470">value.</span> <span m="1970270">And</span> <span
  m="1971812">if</span> <span m="1972310">we</span> <span
  m="1972400">have</span> <span m="1972550">1,000</span> <span
  m="1973090">classes,</span> <span m="1973990">we're</span> <span
  m="1974120">going</span> <span m="1974240">to</span> <span
  m="1974300">have</span> <span m="1974390">1,000</span> <span
  m="1974920">output</span> <span m="1975270">neurons,</span> <span
  m="1976180">and</span> <span m="1976310">each</span> <span
  m="1976450">is</span> <span m="1976560">going</span> <span
  m="1976770">to</span> <span m="1976840">be</span> <span
  m="1976970">producing</span> <span m="1977460">some</span> <span
  m="1977690">kind</span> <span m="1977950">of</span> <span
  m="1978040">value.</span> <span m="1979020">And</span> <span
  m="1979040">we</span> <span m="1979120">can</span> <span
  m="1979250">think</span> <span m="1979460">of</span> <span
  m="1979530">that</span> <span m="1979710">value</span> <span
  m="1980160">as</span> <span m="1981790">a</span> <span
  m="1981900">probability.</span></p><p><span m="1985180">But</span> <span
  m="1985320">I</span> <span m="1985410">didn't</span> <span
  m="1985530">want</span> <span m="1985650">to</span> <span
  m="1985710">write</span> <span m="1985890">a</span> <span
  m="1985940">probability</span> <span m="1986260">yet.</span> <span
  m="1986580">I</span> <span m="1986750">just</span> <span
  m="1986950">want</span> <span m="1987070">to</span> <span
  m="1987140">say</span> <span m="1987390">that</span> <span
  m="1987560">what</span> <span m="1987680">we've</span> <span
  m="1987850">got</span> <span m="1988970">for</span> <span
  m="1989220">this</span> <span m="1989430">output</span> <span
  m="1989790">neuron</span> <span m="1990160">is</span> <span
  m="1990330">a</span> <span m="1990380">function</span> <span
  m="1991230">of</span> <span m="1991590">class</span> <span
  m="1992010">1.</span> <span m="1993210">And</span> <span
  m="1993320">then</span> <span m="1993450">there will</span> <span
  m="1993800">be</span> <span m="1993920">another</span> <span
  m="1994260">output</span> <span m="1994620">neuron,</span> <span
  m="1995060">which</span> <span m="1995140">is</span> <span
  m="1995210">a</span> <span m="1995260">function</span> <span
  m="1996350">of</span> <span m="1996500">class</span> <span
  m="1996900">2.</span> <span m="1998200">And</span> <span
  m="1998620">these</span> <span m="1999050">values</span> <span
  m="1999490">will</span> <span m="1999590">be</span> <span
  m="1999860">presumably</span> <span m="2000290">higher--</span> <span
  m="2001040">this</span> <span m="2001210">will</span> <span
  m="2001330">be</span> <span m="2001500">higher</span> <span
  m="2002090">if</span> <span m="2002270">we</span> <span
  m="2002390">are,</span> <span m="2002530">in</span> <span
  m="2002610">fact,</span> <span m="2002910">looking</span> <span
  m="2003170">at</span> <span m="2003290">class</span> <span
  m="2003650">1.</span> <span m="2004550">And</span> <span
  m="2004690">this</span> <span m="2004850">one</span> <span
  m="2005080">down</span> <span m="2005260">here</span> <span
  m="2005820">will</span> <span m="2005950">be,</span> <span
  m="2006070">in</span> <span m="2006200">fact,</span> <span
  m="2006520">higher</span> <span m="2007210">if</span> <span
  m="2007370">we're</span> <span m="2007460">looking</span> <span
  m="2007760">at</span> <span m="2007820">class</span> <span
  m="2008210">m.</span></p><p><span m="2011820">So what</span> <span
  m="2012110">we</span> <span m="2012150">would</span> <span
  m="2012290">like</span> <span m="2012450">to</span> <span
  m="2012530">do</span> <span m="2012700">is</span> <span
  m="2012830">we'd</span> <span m="2012950">like</span> <span
  m="2013140">to</span> <span m="2014210">not</span> <span
  m="2014580">just</span> <span m="2014800">pick</span> <span
  m="2015020">one</span> <span m="2015210">of</span> <span
  m="2015270">these</span> <span m="2016080">outputs</span> <span
  m="2016580">and</span> <span m="2016670">say,</span> <span
  m="2016920">well,</span> <span m="2017780">you've</span> <span
  m="2017950">got</span> <span m="2018100">the</span> <span
  m="2018170">highest</span> <span m="2018550">value,</span> <span
  m="2018910">so</span> <span m="2019100">you</span> <span
  m="2019290">win.</span> <span m="2020550">What</span> <span
  m="2020660">we</span> <span m="2020770">want</span> <span
  m="2020930">to</span> <span m="2020990">do</span> <span
  m="2021160">instead</span> <span m="2021460">is</span> <span
  m="2022430">we</span> <span m="2022570">want</span> <span
  m="2022710">to</span> <span m="2022770">associate</span> <span
  m="2023250">some</span> <span m="2023440">kind</span> <span
  m="2023640">of</span> <span m="2023740">probability</span> <span
  m="2025130">with</span> <span m="2025300">each</span> <span
  m="2025480">of</span> <span m="2025570">the</span> <span
  m="2025640">classes.</span> <span m="2027620">Because,</span> <span
  m="2027790">after</span> <span m="2028020">all,</span> <span
  m="2028100">we</span> <span m="2028190">want</span> <span
  m="2028310">to</span> <span m="2028370">do</span> <span
  m="2028480">things</span> <span m="2028740">like</span> <span
  m="2028900">find</span> <span m="2029170">the</span> <span
  m="2029950">most</span> <span m="2030220">probable</span> <span
  m="2030710">five.</span></p><p><span m="2032640">So</span> <span
  m="2032710">what</span> <span m="2032840">we</span> <span
  m="2032940">do</span> <span m="2033190">is</span> <span m="2033300">we</span>
  <span m="2033410">say,</span> <span m="2033630">all</span> <span
  m="2033750">right,</span> <span m="2034060">so</span> <span
  m="2034740">the</span> <span m="2034930">actual</span> <span
  m="2035390">probability</span> <span m="2037860">of</span> <span
  m="2038020">class</span> <span m="2038410">1</span> <span
  m="2039950">is</span> <span m="2040140">equal</span> <span
  m="2040460">to</span> <span m="2040590">the</span> <span
  m="2040730">output</span> <span m="2041150">of</span> <span
  m="2041290">that</span> <span m="2041420">sigmoid</span> <span
  m="2041920">function</span> <span m="2047560">divided</span> <span
  m="2047990">by</span> <span m="2048600">the</span> <span
  m="2048699">sum</span> <span m="2050150">over</span> <span
  m="2050280">all</span> <span m="2050900">functions.</span> <span
  m="2054909">So</span> <span m="2055090">that</span> <span
  m="2055260">takes</span> <span m="2055730">all</span> <span
  m="2055929">of</span> <span m="2056000">that</span> <span
  m="2056179">entire</span> <span m="2056570">output</span> <span
  m="2056900">vector</span> <span m="2057239">and</span> <span
  m="2057360">converts</span> <span m="2057699">each</span> <span
  m="2058010">output</span> <span m="2058370">value</span> <span
  m="2058730">into</span> <span m="2058870">a</span> <span
  m="2058900">probability.</span></p><p><span m="2060920">So</span> <span
  m="2061120">when</span> <span m="2061239">we</span> <span
  m="2061340">used</span> <span m="2061580">that</span> <span
  m="2063060">sigmoid</span> <span m="2063590">function,</span> <span
  m="2064710">we</span> <span m="2064889">did</span> <span m="2065060">it</span>
  <span m="2065139">with</span> <span m="2065270">the</span> <span
  m="2065300">view</span> <span m="2065500">toward</span> <span
  m="2065760">thinking</span> <span m="2066100">about</span> <span
  m="2066360">that</span> <span m="2066520">as</span> <span m="2066620">a</span>
  <span m="2066670">probability.</span> <span m="2066990">And</span> <span
  m="2067310">in</span> <span m="2067460">fact,</span> <span
  m="2067719">we</span> <span m="2067820">assumed</span> <span
  m="2068179">it</span> <span m="2068280">was</span> <span m="2068409">a</span>
  <span m="2068469">probability</span> <span m="2069820">when</span> <span
  m="2070000">we</span> <span m="2070880">made</span> <span
  m="2071130">this</span> <span m="2071280">argument.</span> <span
  m="2072429">But</span> <span m="2072600">in</span> <span
  m="2072690">the</span> <span m="2072790">end,</span> <span
  m="2074429">there's</span> <span m="2074830">an</span> <span
  m="2074889">output</span> <span m="2075170">for</span> <span
  m="2075280">each</span> <span m="2075510">of</span> <span
  m="2075600">those</span> <span m="2075790">classes.</span> <span
  m="2076280">And</span> <span m="2076400">so</span> <span
  m="2076560">what</span> <span m="2076699">we</span> <span
  m="2076800">get</span> <span m="2076989">is,</span> <span m="2077280">in the
  end,</span> <span m="2077719">not</span> <span m="2077940">exactly</span>
  <span m="2078389">a</span> <span m="2078449">probability</span> <span
  m="2079000">until</span> <span m="2079260">we</span> <span
  m="2079370">divide</span> <span m="2079760">by a</span> <span
  m="2079909">normalizing</span> <span m="2080580">factor.</span></p><p><span
  m="2083219">So</span> <span m="2086590">this,</span> <span
  m="2086770">by</span> <span m="2086880">the</span> <span
  m="2086969">way,</span> <span m="2087219">is</span> <span
  m="2087320">called--</span> <span m="2088210">not</span> <span
  m="2088560">on</span> <span m="2088659">my</span> <span
  m="2088790">list</span> <span m="2089050">of</span> <span
  m="2089110">things,</span> <span m="2089500">but</span> <span
  m="2089610">it</span> <span m="2089699">soon</span> <span
  m="2089929">will</span> <span m="2090110">be.</span> <span
  m="2094580">Since</span> <span m="2094790">we're</span> <span
  m="2094900">not</span> <span m="2095120">talking</span> <span
  m="2095429">about</span> <span m="2095670">taking</span> <span
  m="2095969">the</span> <span m="2096040">maximum</span> <span
  m="2099640">and</span> <span m="2099950">using</span> <span
  m="2100240">that</span> <span m="2100530">to</span> <span
  m="2100630">classify</span> <span m="2101180">the</span> <span
  m="2101270">picture,</span> <span m="2101700">what</span> <span
  m="2102030">we're</span> <span m="2102160">going</span> <span
  m="2102290">to</span> <span m="2102360">do</span> <span m="2102580">is</span>
  <span m="2103930">we're</span> <span m="2104050">going</span> <span
  m="2104180">to</span> <span m="2104260">use</span> <span
  m="2104510">what's</span> <span m="2104730">called</span> <span
  m="2104960">softmax.</span> <span m="2109140">So</span> <span
  m="2109300">we're</span> <span m="2109370">going</span> <span
  m="2109490">to</span> <span m="2109560">give</span> <span m="2110410">a</span>
  <span m="2110540">range</span> <span m="2110820">of</span> <span
  m="2110920">classifications,</span> <span m="2111730">and</span> <span
  m="2111840">we're</span> <span m="2111910">going</span> <span
  m="2112030">to</span> <span m="2112090">associate</span> <span
  m="2112620">a</span> <span m="2113110">probability</span> <span
  m="2113640">with</span> <span m="2113800">each.</span> <span
  m="2114680">And</span> <span m="2114820">that's</span> <span
  m="2115290">what</span> <span m="2115410">you</span> <span
  m="2115520">saw</span> <span m="2116580">in</span> <span m="2117070">all
  of</span> <span m="2117330">those</span> <span m="2117500">samples.</span>
  <span m="2118640">You</span> <span m="2118760">saw,</span> <span
  m="2118980">yes,</span> <span m="2119340">this</span> <span
  m="2119530">is</span> <span m="2119640">[? containership, ?]</span> <span
  m="2120360">but</span> <span m="2120450">maybe</span> <span
  m="2120660">it's</span> <span m="2120800">also</span> <span
  m="2121740">this,</span> <span m="2122340">that,</span> <span m="2122800">or
  a</span> <span m="2122980">third,</span> <span m="2123380">or</span> <span
  m="2123760">fourth,</span> <span m="2124070">and</span> <span
  m="2124110">fifth</span> <span m="2124340">thing.</span></p><p><span
  m="2126760">So</span> <span m="2126930">that</span> <span
  m="2127190">is</span> <span m="2129910">a</span> <span
  m="2130010">pretty</span> <span m="2130260">good</span> <span
  m="2130930">summary</span> <span m="2131350">of</span> <span
  m="2131470">the</span> <span m="2131540">kinds</span> <span
  m="2131960">of</span> <span m="2132050">things</span> <span
  m="2132440">that</span> <span m="2132570">are</span> <span
  m="2132640">involved.</span> <span m="2133090">But</span> <span
  m="2133220">now</span> <span m="2133760">we've</span> <span
  m="2133890">got</span> <span m="2134070">one</span> <span
  m="2134230">more</span> <span m="2134420">step,</span> <span
  m="2135490">because</span> <span m="2135690">what</span> <span
  m="2135810">we</span> <span m="2135900">can</span> <span m="2136040">do</span>
  <span m="2136130">now</span> <span m="2136890">is</span> <span
  m="2137010">we</span> <span m="2137110">can</span> <span
  m="2137290">take</span> <span m="2137510">this</span> <span
  m="2137710">output</span> <span m="2138090">layer</span> <span
  m="2138380">idea,</span> <span m="2139430">this</span> <span
  m="2139570">softmax</span> <span m="2140170">idea,</span> <span
  m="2141090">and</span> <span m="2141270">we</span> <span
  m="2141350">can</span> <span m="2141500">put</span> <span
  m="2141680">them</span> <span m="2141800">together</span> <span
  m="2142160">with</span> <span m="2142290">the</span> <span
  m="2142400">autocoding</span> <span m="2143030">idea.</span> <span
  m="2147770">So</span> <span m="2148000">we've</span> <span
  m="2148160">trained</span> <span m="2148470">just</span> <span
  m="2148650">a</span> <span m="2149220">layer</span> <span
  m="2149490">up.</span> <span m="2150820">And</span> <span
  m="2150980">now</span> <span m="2151100">we're</span> <span
  m="2151190">going</span> <span m="2151320">to</span> <span
  m="2151390">detach</span> <span m="2151960">it</span> <span
  m="2152050">from</span> <span m="2152240">the</span> <span
  m="2152360">output</span> <span m="2152780">layer</span> <span
  m="2153700">but</span> <span m="2153860">retain</span> <span
  m="2154290">those</span> <span m="2154520">weights</span> <span
  m="2155350">that</span> <span m="2155490">connect</span> <span
  m="2155800">the</span> <span m="2155900">input</span> <span
  m="2156340">to</span> <span m="2156460">the</span> <span
  m="2156540">hidden</span> <span m="2156800">layer.</span></p><p><span
  m="2158170">And</span> <span m="2158270">when</span> <span
  m="2158360">we</span> <span m="2158440">do</span> <span
  m="2158600">that,</span> <span m="2158990">what</span> <span
  m="2159380">we're</span> <span m="2159550">going</span> <span
  m="2159670">to</span> <span m="2159740">see</span> <span m="2160560">is</span>
  <span m="2160690">something</span> <span m="2161000">that</span> <span
  m="2161100">looks</span> <span m="2161190">like</span> <span
  m="2161420">this.</span> <span m="2163430">And</span> <span
  m="2163570">now</span> <span m="2163710">we've</span> <span
  m="2163870">got</span> <span m="2164040">a</span> <span
  m="2164090">trained</span> <span m="2164540">first</span> <span
  m="2164880">layer</span> <span m="2165410">but</span> <span
  m="2165560">an</span> <span m="2165720">untrained</span> <span
  m="2166290">output</span> <span m="2166670">layer.</span> <span
  m="2167850">We're</span> <span m="2167940">going</span> <span
  m="2168060">to</span> <span m="2168140">freeze</span> <span
  m="2168590">the</span> <span m="2168700">input</span> <span
  m="2169040">layer</span> <span m="2170280">and</span> <span
  m="2170430">train</span> <span m="2170710">the</span> <span
  m="2170810">output</span> <span m="2171180">layer</span> <span
  m="2171470">using</span> <span m="2173855">the</span> <span
  m="2174260">sigmoid</span> <span m="2174910">curve</span> <span
  m="2176590">and</span> <span m="2176700">see</span> <span
  m="2176830">what</span> <span m="2176950">happens</span> <span
  m="2177320">when</span> <span m="2177420">we do</span> <span
  m="2177520">that.</span></p><p><span m="2178140">Oh,</span> <span
  m="2178290">by</span> <span m="2178400">the</span> <span
  m="2178490">way,</span> <span m="2179120">let's</span> <span
  m="2179590">run</span> <span m="2179720">our</span> <span
  m="2179810">test</span> <span m="2180090">samples</span> <span
  m="2180480">through.</span> <span m="2182080">You</span> <span
  m="2182170">can</span> <span m="2182260">see</span> <span
  m="2182400">it's</span> <span m="2182540">not</span> <span
  m="2182710">doing</span> <span m="2182900">anything,</span> <span
  m="2183225">and</span> <span m="2183550">the</span> <span
  m="2183730">output</span> <span m="2184050">is</span> <span
  m="2184170">half</span> <span m="2184690">for</span> <span
  m="2184820">each</span> <span m="2184990">of</span> <span
  m="2185100">the</span> <span m="2185460">categories</span> <span
  m="2187180">even</span> <span m="2187420">though</span> <span
  m="2187530">we've</span> <span m="2187670">got</span> <span
  m="2187800">a</span> <span m="2188170">trained</span> <span
  m="2188520">middle</span> <span m="2188740">layer.</span> <span
  m="2189650">So</span> <span m="2189800">we</span> <span
  m="2189880">have</span> <span m="2190050">to</span> <span
  m="2190130">train</span> <span m="2190350">the</span> <span
  m="2190440">outer</span> <span m="2190680">layer.</span> <span
  m="2190890">Let's</span> <span m="2191000">see</span> <span
  m="2191150">how</span> <span m="2191360">long</span> <span
  m="2191550">it</span> <span m="2191610">takes.</span> <span
  m="2193030">Whoa,</span> <span m="2193270">that</span> <span
  m="2193370">was</span> <span m="2193500">pretty</span> <span
  m="2193690">fast.</span> <span m="2196880">Now</span> <span
  m="2196990">there's</span> <span m="2197170">an</span> <span
  m="2197510">extraordinarily</span> <span m="2198150">good</span> <span
  m="2198330">match</span> <span m="2198650">between</span> <span
  m="2198970">the</span> <span m="2199060">outputs</span> <span
  m="2200210">and</span> <span m="2200350">the</span> <span
  m="2200420">desired</span> <span m="2200790">outputs.</span> <span
  m="2201850">So</span> <span m="2202000">that's</span> <span
  m="2202180">the</span> <span m="2202230">combination</span> <span
  m="2202810">of</span> <span m="2202870">the</span> <span
  m="2202990">autocoding</span> <span m="2203600">idea</span> <span
  m="2204270">and</span> <span m="2204410">the</span> <span
  m="2204470">softmax</span> <span m="2205080">idea.</span></p><p><span
  m="2210150">[? There's ?]</span> <span m="2210330">just</span> <span
  m="2210470">one</span> <span m="2210660">more</span> <span
  m="2210860">idea</span> <span m="2213130">that's</span> <span
  m="2213340">worthy</span> <span m="2213630">of</span> <span
  m="2213690">mention,</span> <span m="2215540">and</span> <span
  m="2215700">that's</span> <span m="2215930">the</span> <span
  m="2216050">idea</span> <span m="2216480">of</span> <span
  m="2216700">dropout.</span> <span m="2220320">The</span> <span
  m="2220620">plague</span> <span m="2220910">of</span> <span
  m="2220990">any</span> <span m="2221170">neural</span> <span
  m="2221440">net</span> <span m="2221860">is</span> <span
  m="2222060">that</span> <span m="2222190">it</span> <span
  m="2222310">gets</span> <span m="2222550">stuck</span> <span
  m="2222880">in</span> <span m="2222980">some</span> <span
  m="2223160">kind</span> <span m="2223360">of</span> <span
  m="2223420">local</span> <span m="2223680">maximum.</span> <span
  m="2226040">So</span> <span m="2226190">it</span> <span m="2226350">was</span>
  <span m="2226520">discovered</span> <span m="2227650">that</span> <span
  m="2227840">these</span> <span m="2228070">things</span> <span
  m="2228390">train</span> <span m="2228740">better</span> <span
  m="2230130">if,</span> <span m="2230490">on</span> <span
  m="2230740">every</span> <span m="2231150">iteration,</span> <span
  m="2234460">you</span> <span m="2236500">flip</span> <span
  m="2236800">a</span> <span m="2236850">coin</span> <span
  m="2237670">for</span> <span m="2237880">each</span> <span
  m="2238140">neuron.</span></p><p><span m="2239620">And</span> <span
  m="2239780">if</span> <span m="2239880">the</span> <span
  m="2239960">coin</span> <span m="2240280">ends</span> <span
  m="2240550">up</span> <span m="2240730">tails,</span> <span
  m="2242170">you</span> <span m="2242260">assume</span> <span
  m="2242590">it's</span> <span m="2242740">just</span> <span
  m="2243030">died</span> <span m="2244500">and</span> <span
  m="2244650">has</span> <span m="2244820">no</span> <span
  m="2245000">influence</span> <span m="2245500">on</span> <span
  m="2245620">the</span> <span m="2245700">output.</span> <span
  m="2246920">It's</span> <span m="2247080">called</span> <span
  m="2247270">dropping</span> <span m="2247690">out</span> <span
  m="2247890">those</span> <span m="2248100">neurons.</span> <span
  m="2249930">And  in</span> <span m="2250040">our</span> <span
  m="2250260">next</span> <span m="2250570">iteration,</span> <span
  m="2251030">you</span> <span m="2251120">drop</span> <span
  m="2251390">out</span> <span m="2251510">a</span> <span
  m="2251560">different</span> <span m="2251900">set.</span> <span
  m="2253950">So</span> <span m="2254040">what</span> <span
  m="2254190">this</span> <span m="2254340">seems</span> <span
  m="2254630">to</span> <span m="2254770">do</span> <span m="2255080">is</span>
  <span m="2255290">it</span> <span m="2255380">seems</span> <span
  m="2255660">to</span> <span m="2256710">prevent</span> <span
  m="2257020">this</span> <span m="2257180">thing</span> <span
  m="2257360">from</span> <span m="2257560">going</span> <span
  m="2257860">into</span> <span m="2259870">a</span> <span
  m="2259960">frozen</span> <span m="2260400">local</span> <span
  m="2260670">maximum</span> <span m="2261130">state.</span> <span
  m="2264840">So</span> <span m="2265010">that's</span> <span
  m="2265230">deep</span> <span m="2265450">nets.</span> <span
  m="2266230">They</span> <span m="2266370">should</span> <span
  m="2266570">be</span> <span m="2266670">called,</span> <span
  m="2266950">by</span> <span m="2267040">the</span> <span
  m="2267140">way,</span> <span m="2267310">wide</span> <span
  m="2267700">nets</span> <span m="2269610">because</span> <span
  m="2269890">they</span> <span m="2270000">tend</span> <span
  m="2270210">to</span> <span m="2270270">be</span> <span
  m="2270460">enormously</span> <span m="2271090">wide</span> <span
  m="2271870">but</span> <span m="2272660">rarely</span> <span
  m="2273020">more</span> <span m="2273230">than</span> <span
  m="2276360">10</span> <span m="2276580">columns</span> <span
  m="2278260">deep.</span></p><p><span m="2281250">Now,</span> <span
  m="2281440">let's</span> <span m="2281600">see,</span> <span
  m="2282060">where</span> <span m="2282210">to</span> <span
  m="2282290">go</span> <span m="2282450">from</span> <span
  m="2282640">here?</span> <span m="2284050">Maybe</span> <span
  m="2284340">what</span> <span m="2284460">we</span> <span
  m="2284570">should</span> <span m="2284720">do</span> <span
  m="2284910">is</span> <span m="2285050">talk</span> <span
  m="2285300">about</span> <span m="2287030">the</span> <span
  m="2287230">awesome</span> <span m="2290210">curiosity</span> <span
  m="2290900">in</span> <span m="2291030">the</span> <span
  m="2291100">current</span> <span m="2291380">state</span> <span
  m="2291650">of</span> <span m="2291710">the</span> <span
  m="2291840">art.</span> <span m="2293820">And</span> <span
  m="2293950">that</span> <span m="2294150">is</span> <span
  m="2294450">that</span> <span m="2297370">all</span> <span
  m="2297610">of</span> <span m="2297690">[? this ?]</span> <span
  m="2297910">sophistication</span> <span m="2298590">with</span> <span
  m="2299430">output</span> <span m="2299840">layers</span> <span
  m="2300340">that</span> <span m="2300700">are</span> <span
  m="2300850">probabilities</span> <span m="2301750">and</span> <span
  m="2303230">training</span> <span m="2303730">using</span> <span
  m="2304280">autocoding</span> <span m="2305120">or</span> <span
  m="2305210">Boltzmann</span> <span m="2305510">machines,</span> <span
  m="2308580">it</span> <span m="2308700">doesn't</span> <span
  m="2308960">seem</span> <span m="2309170">to</span> <span
  m="2309260">help</span> <span m="2309510">much</span> <span
  m="2310240">relative</span> <span m="2310780">to</span> <span
  m="2310870">plain,</span> <span m="2311320">old</span> <span
  m="2312950">back</span> <span m="2313190">propagation.</span> <span
  m="2315640">So</span> <span m="2315840">back</span> <span
  m="2316090">propagation</span> <span m="2316820">with</span> <span
  m="2316970">a</span> <span m="2317030">convolutional</span> <span
  m="2317680">net</span> <span m="2318090">seems</span> <span
  m="2318530">to</span> <span m="2318620">do</span> <span
  m="2318860">just</span> <span m="2319070">about</span> <span
  m="2319280">as</span> <span m="2319400">good</span> <span
  m="2319580">as</span> <span m="2319700">anything.</span></p><p><span
  m="2321630">And</span> <span m="2322000">while</span> <span
  m="2322430">we're</span> <span m="2322540">on</span> <span
  m="2322620">the</span> <span m="2322700">subject</span> <span
  m="2323150">of</span> <span m="2324190">an</span> <span
  m="2324470">ordinary</span> <span m="2324960">deep</span> <span
  m="2325230">net,</span> <span m="2326530">I'd</span> <span
  m="2326630">like</span> <span m="2326790">to</span> <span
  m="2326880">examine</span> <span m="2328090">a</span> <span
  m="2328190">situation</span> <span m="2328810">here</span> <span
  m="2330070">where</span> <span m="2330240">we</span> <span
  m="2330400">have</span> <span m="2331190">a</span> <span
  m="2331310">deep</span> <span m="2331774">net--</span> <span
  m="2333630">well,</span> <span m="2335460">it's</span> <span
  m="2335590">a</span> <span m="2335630">classroom</span> <span
  m="2336220">deep</span> <span m="2336440">net.</span> <span
  m="2339175">And</span> <span m="2339650">we'll</span> <span
  m="2339750">will</span> <span m="2339860">put</span> <span
  m="2340040">five</span> <span m="2340380">layers</span> <span
  m="2340740">in</span> <span m="2340850">there,</span> <span
  m="2342670">and</span> <span m="2342870">its</span> <span
  m="2343010">job</span> <span m="2343370">is</span> <span
  m="2343480">still</span> <span m="2343990">to</span> <span
  m="2344100">do</span> <span m="2344210">the</span> <span
  m="2344290">same</span> <span m="2344600">thing.</span> <span
  m="2344930">It's</span> <span m="2345100">to</span> <span
  m="2345190">classify</span> <span m="2345910">an</span> <span
  m="2346110">animal</span> <span m="2346590">as</span> <span
  m="2346780">a</span> <span m="2346860">cheetah,</span> <span
  m="2347740">a</span> <span m="2347920">zebra,</span> <span
  m="2348440">or</span> <span m="2348620">a</span> <span
  m="2348670">giraffe</span> <span m="2349630">based</span> <span
  m="2349930">on</span> <span m="2350420">the</span> <span
  m="2350660">height</span> <span m="2350930">of</span> <span
  m="2350990">the</span> <span m="2351080">shadow</span> <span
  m="2351540">it</span> <span m="2351670">casts.</span> <span
  m="2353630">And</span> <span m="2353830">as</span> <span
  m="2354010">before,</span> <span m="2354870">if</span> <span
  m="2355060">it's</span> <span m="2355220">green,</span> <span
  m="2355580">that</span> <span m="2355720">means</span> <span
  m="2355980">positive.</span> <span m="2356610">If</span> <span
  m="2356780">it's</span> <span m="2356980">red,</span> <span
  m="2357270">that</span> <span m="2357450">means</span> <span
  m="2357710">negative.</span></p><p><span m="2359300">And</span> <span
  m="2359490">right</span> <span m="2359670">at</span> <span
  m="2359770">the</span> <span m="2359840">moment,</span> <span
  m="2360210">we</span> <span m="2360350">have</span> <span
  m="2360800">no</span> <span m="2361000">training.</span> <span
  m="2362660">So</span> <span m="2362740">if</span> <span m="2362820">we</span>
  <span m="2362930">run</span> <span m="2363110">our</span> <span
  m="2363210">test</span> <span m="2363490">samples</span> <span
  m="2363930">through,</span> <span m="2364420">the</span> <span
  m="2364550">output</span> <span m="2364860">is</span> <span
  m="2365010">always</span> <span m="2365410">a</span> <span
  m="2365480">1/2</span> <span m="2366540">no</span> <span
  m="2366650">matter</span> <span m="2366890">what</span> <span
  m="2367090">the</span> <span m="2367230">animal</span> <span
  m="2367600">is.</span> <span m="2369120">All</span> <span
  m="2369240">right?</span> <span m="2370520">So what</span> <span
  m="2370710">we're</span> <span m="2370790">going</span> <span
  m="2370910">to</span> <span m="2370970">do</span> <span m="2371100">is</span>
  <span m="2371200">just</span> <span m="2371350">going</span> <span
  m="2371470">to</span> <span m="2371530">use</span> <span
  m="2371660">ordinary</span> <span m="2372020">back</span> <span
  m="2372320">prop</span> <span m="2372620">on</span> <span
  m="2372770">this,</span> <span m="2374350">same</span> <span
  m="2374660">thing</span> <span m="2374920">as</span> <span
  m="2375110">in</span> <span m="2377610">that</span> <span
  m="2379420">sample</span> <span m="2379940">that's</span> <span
  m="2380120">underneath</span> <span m="2380510">the</span> <span
  m="2380580">blackboard.</span> <span m="2381970">Only</span> <span
  m="2382170">now</span> <span m="2382340">we've</span> <span
  m="2382480">got</span> <span m="2382640">a</span> <span m="2382680">lot</span>
  <span m="2382860">more</span> <span m="2383030">parameters.</span> <span
  m="2383890">We've</span> <span m="2384060">got</span> <span
  m="2385160">five</span> <span m="2385540">columns,</span> <span
  m="2386050">and</span> <span m="2386380">each</span> <span
  m="2386570">one</span> <span m="2386710">of</span> <span
  m="2386810">them</span> <span m="2386950">has</span> <span
  m="2387760">9</span> <span m="2388030">or</span> <span m="2388110">10</span>
  <span m="2388840">neurons</span> <span m="2389240">in</span> <span
  m="2389340">it.</span></p><p><span m="2390320">So</span> <span
  m="2390880">let's</span> <span m="2391190">let</span> <span
  m="2391410">this</span> <span m="2391620">one</span> <span
  m="2391830">run.</span> <span m="2396160">Now,</span> <span
  m="2396580">look</span> <span m="2396740">at</span> <span
  m="2396830">that</span> <span m="2396990">stuff</span> <span
  m="2397290">on</span> <span m="2397410">the</span> <span
  m="2397500">right.</span> <span m="2397740">It's</span> <span
  m="2397890">all</span> <span m="2398060">turned</span> <span
  m="2398360">red.</span> <span m="2399310">At</span> <span
  m="2399460">first</span> <span m="2399730">I</span> <span
  m="2399820">thought</span> <span m="2400050">this</span> <span
  m="2400220">was</span> <span m="2400390">a</span> <span m="2400450">bug</span>
  <span m="2400750">in</span> <span m="2400860">my</span> <span
  m="2400990">program.</span> <span m="2403270">But</span> <span
  m="2403740">that</span> <span m="2403920">makes</span> <span
  m="2404160">absolute</span> <span m="2404600">sense.</span> <span
  m="2404890">If</span> <span m="2404980">you</span> <span
  m="2405070">don't</span> <span m="2405300">know</span> <span
  m="2405550">what</span> <span m="2405730">the</span> <span
  m="2405820">actual</span> <span m="2406190">animal</span> <span
  m="2406460">is</span> <span m="2406540">going</span> <span
  m="2406700">to</span> <span m="2406780">be</span> <span m="2406990">and
  there</span> <span m="2407140">are</span> <span m="2407240">a</span> <span
  m="2407290">whole</span> <span m="2407430">bunch</span> <span
  m="2407630">of</span> <span m="2407710">possibilities,</span> <span
  m="2408680">you</span> <span m="2408790">better</span> <span
  m="2408980">just</span> <span m="2409170">say</span> <span
  m="2409340">no</span> <span m="2409540">for</span> <span
  m="2409710">everybody.</span> <span m="2410970">It's</span> <span
  m="2411150">like</span> <span m="2411330">when</span> <span
  m="2411450">a</span> <span m="2411510">biologist</span> <span
  m="2412090">says,</span> <span m="2412900">we</span> <span
  m="2413040">don't</span> <span m="2413250">know.</span> <span
  m="2413550">It's</span> <span m="2413750">the</span> <span
  m="2414200">most</span> <span m="2414460">probable</span> <span
  m="2414870">answer.</span></p><p><span m="2416380">Well,</span> <span
  m="2416700">but</span> <span m="2416820">eventually,</span> <span
  m="2417470">after</span> <span m="2417650">about</span> <span
  m="2417850">160,000</span> <span m="2418900">iterations,</span> <span
  m="2420410">it</span> <span m="2420560">seems</span> <span
  m="2420850">to</span> <span m="2420930">have</span> <span
  m="2421030">got</span> <span m="2421280">it.</span> <span
  m="2421400">Let's</span> <span m="2421580">run</span> <span
  m="2421710">the</span> <span m="2421780">test</span> <span
  m="2422040">samples</span> <span m="2422430">through.</span> <span
  m="2427044">Now</span> <span m="2427520">it's</span> <span
  m="2427750">doing</span> <span m="2427940">great.</span> <span
  m="2429310">Let's</span> <span m="2429510">do</span> <span
  m="2429650">it</span> <span m="2429730">again</span> <span
  m="2430070">just</span> <span m="2430240">to</span> <span
  m="2430330">see</span> <span m="2430510">if</span> <span
  m="2430620">this</span> <span m="2430820">is</span> <span m="2430890">a</span>
  <span m="2430940">fluke.</span> <span m="2437131">And</span> <span
  m="2437620">all red</span> <span m="2438080">on</span> <span
  m="2438150">the</span> <span m="2438210">right</span> <span
  m="2438400">side,</span> <span m="2450771">and</span> <span
  m="2451280">finally,</span> <span m="2452460">you</span> <span
  m="2452590">start</span> <span m="2452820">seeing</span> <span
  m="2453000">some</span> <span m="2453610">changes</span> <span
  m="2454040">go</span> <span m="2454610">in</span> <span m="2454950">the</span>
  <span m="2455110">final</span> <span m="2455550">layers</span> <span
  m="2455930">there.</span> <span m="2456930">And</span> <span
  m="2457300">if</span> <span m="2457400">you</span> <span
  m="2457490">look</span> <span m="2457640">at</span> <span
  m="2457710">the</span> <span m="2457820">error</span> <span
  m="2458080">rate</span> <span m="2458830">down</span> <span
  m="2459080">at</span> <span m="2459160">the</span> <span
  m="2459230">bottom,</span> <span m="2459600">you'll</span> <span
  m="2459700">see</span> <span m="2459880">that</span> <span
  m="2460010">it</span> <span m="2460385">kind</span> <span
  m="2460650">of</span> <span m="2460710">falls</span> <span
  m="2461030">off</span> <span m="2461200">a</span> <span
  m="2461250">cliff.</span> <span m="2462700">So</span> <span
  m="2462870">nothing</span> <span m="2463210">happens</span> <span
  m="2463580">for</span> <span m="2463710">a</span> <span
  m="2463790">real</span> <span m="2464020">long</span> <span
  m="2464290">time,</span> <span m="2464830">and then</span> <span
  m="2464950">it</span> <span m="2465120">falls</span> <span
  m="2465410">off</span> <span m="2465580">a</span> <span
  m="2465620">cliff.</span></p><p><span m="2469560">Now,</span> <span
  m="2469620">what</span> <span m="2469780">would</span> <span
  m="2469910">happen</span> <span m="2471420">if</span> <span
  m="2472370">this</span> <span m="2472840">neural</span> <span
  m="2473110">net</span> <span m="2473310">were</span> <span
  m="2473400">not</span> <span m="2473620">quite</span> <span
  m="2473880">so</span> <span m="2474070">wide?</span> <span
  m="2475860">Good</span> <span m="2475950">question.</span> <span
  m="2476760">But</span> <span m="2476910">before</span> <span
  m="2477150">we</span> <span m="2477230">get</span> <span m="2477380">to</span>
  <span m="2477440">that</span> <span m="2477630">question, what</span> <span
  m="2478120">I'm</span> <span m="2478220">going</span> <span
  m="2478340">to</span> <span m="2478400">do</span> <span m="2478510">is</span>
  <span m="2478630">I'm</span> <span m="2478740">going</span> <span
  m="2478870">to</span> <span m="2478940">do</span> <span m="2479790">a</span>
  <span m="2480100">funny</span> <span m="2480550">kind</span> <span
  m="2481120">of</span> <span m="2481320">variation</span> <span
  m="2481880">on</span> <span m="2481980">the</span> <span
  m="2482050">theme</span> <span m="2482330">of</span> <span
  m="2482450">dropout.</span> <span m="2483990">What</span> <span
  m="2484140">I'm</span> <span m="2484240">going</span> <span
  m="2484370">to</span> <span m="2484460">do</span> <span m="2484650">is</span>
  <span m="2484780">I'm</span> <span m="2484930">going</span> <span
  m="2485050">to</span> <span m="2485120">kill</span> <span
  m="2485380">off</span> <span m="2485580">one</span> <span
  m="2485810">neuron</span> <span m="2486230">in</span> <span
  m="2486340">each</span> <span m="2486530">column,</span> <span
  m="2488070">and</span> <span m="2488220">then</span> <span
  m="2488400">see</span> <span m="2489210">if</span> <span m="2489360">I</span>
  <span m="2489440">can</span> <span m="2489650">retrain</span> <span
  m="2490140">the</span> <span m="2490210">network</span> <span
  m="2490590">to</span> <span m="2490680">do</span> <span m="2490800">the</span>
  <span m="2490890">right</span> <span m="2491110">thing.</span></p><p><span
  m="2493750">So</span> <span m="2493900">I'm</span> <span
  m="2493960">going</span> <span m="2494080">to</span> <span
  m="2494140">reassign</span> <span m="2494660">those</span> <span
  m="2495120">to</span> <span m="2495250">some</span> <span
  m="2495460">other</span> <span m="2495920">purpose.</span> <span
  m="2497210">So</span> <span m="2497280">now</span> <span
  m="2497490">there's</span> <span m="2497690">one</span> <span
  m="2497940">fewer</span> <span m="2498250">neuron</span> <span
  m="2498910">in</span> <span m="2499040">the</span> <span
  m="2499120">network.</span> <span m="2500100">If</span> <span
  m="2500600">we</span> <span m="2500750">rerun</span> <span
  m="2501160">that,</span> <span m="2501480">we</span> <span
  m="2501610">see</span> <span m="2501810">that</span> <span
  m="2501950">it</span> <span m="2502270">trains</span> <span
  m="2502590">itself</span> <span m="2502940">up</span> <span
  m="2503150">very</span> <span m="2503450">fast.</span> <span
  m="2504640">So</span> <span m="2504810">we</span> <span
  m="2504900">seem</span> <span m="2505090">to</span> <span
  m="2505160">be</span> <span m="2505300">still</span> <span
  m="2505550">close</span> <span m="2505870">enough</span> <span
  m="2506080">to</span> <span m="2506180">a</span> <span
  m="2506230">solution</span> <span m="2506630">we</span> <span
  m="2506720">can</span> <span m="2506880">do</span> <span
  m="2507030">without</span> <span m="2510068">one</span> <span
  m="2510470">of</span> <span m="2510530">the</span> <span
  m="2510600">neurons</span> <span m="2510950">in</span> <span
  m="2511030">each</span> <span m="2511200">column.</span></p><p><span
  m="2512110">Let's</span> <span m="2512310">do</span> <span
  m="2512430">it</span> <span m="2512500">again.</span> <span
  m="2515570">Now</span> <span m="2515750">it</span> <span
  m="2515820">goes</span> <span m="2516050">up</span> <span m="2516190">a</span>
  <span m="2516220">little</span> <span m="2516370">bit,</span> <span
  m="2516590">but it</span> <span m="2516730">quickly</span> <span
  m="2517060">falls</span> <span m="2517370">down</span> <span
  m="2517620">to</span> <span m="2517700">a</span> <span
  m="2517760">solution.</span> <span m="2519530">Try</span> <span
  m="2519770">again.</span> <span m="2522060">Quickly</span> <span
  m="2522360">falls</span> <span m="2522660">down</span> <span
  m="2522890">to</span> <span m="2522970">a</span> <span
  m="2523030">solution.</span> <span m="2525620">Oh,</span> <span
  m="2525780">my</span> <span m="2525930">god,</span> <span
  m="2526140">how</span> <span m="2526250">much</span> <span
  m="2526410">of</span> <span m="2526470">this</span> <span
  m="2526650">am</span> <span m="2526740">I</span> <span
  m="2526800">going</span> <span m="2526980">to</span> <span
  m="2527080">do?</span> <span m="2528560">Each</span> <span
  m="2528790">time</span> <span m="2529040">I</span> <span
  m="2529120">knock</span> <span m="2529380">something</span> <span
  m="2529760">out</span> <span m="2530260">and</span> <span
  m="2530460">retrain,</span> <span m="2530970">it</span> <span
  m="2531520">finds</span> <span m="2531820">its</span> <span
  m="2531930">solution</span> <span m="2532310">very</span> <span
  m="2532510">fast.</span></p><p><span m="2550480">Whoa,</span> <span
  m="2551230">I</span> <span m="2551330">got</span> <span m="2551480">it
  all</span> <span m="2551540">the way</span> <span m="2551840">down</span>
  <span m="2552130">to</span> <span m="2552210">two</span> <span
  m="2552460">neurons</span> <span m="2552890">in</span> <span
  m="2552980">each</span> <span m="2553160">column,</span> <span
  m="2554170">and</span> <span m="2554330">it</span> <span
  m="2554390">still</span> <span m="2554700">has</span> <span
  m="2554900">a</span> <span m="2554980">solution.</span> <span
  m="2557290">It's</span> <span m="2557380">interesting,</span> <span
  m="2557780">don't</span> <span m="2557890">you</span> <span
  m="2557950">think?</span> <span m="2560440">But</span> <span
  m="2560570">let's</span> <span m="2560900">repeat</span> <span
  m="2561360">the</span> <span m="2561440">experiment,</span> <span
  m="2562670">but</span> <span m="2562700">this</span> <span
  m="2562860">time</span> <span m="2563050">we're</span> <span
  m="2563120">going</span> <span m="2563240">to</span> <span m="2563300">do
  it</span> <span m="2563470">a</span> <span m="2563710">little</span> <span
  m="2564020">differently.</span> <span m="2565181">We're</span> <span
  m="2565570">going to</span> <span m="2565750">take</span> <span
  m="2565990">our</span> <span m="2566110">five</span> <span
  m="2566440">layers,</span> <span m="2566715">and</span> <span
  m="2567570">before</span> <span m="2567850">we</span> <span
  m="2567960">do</span> <span m="2568180">any</span> <span
  m="2568380">training</span> <span m="2569500">I'm</span> <span
  m="2569610">going</span> <span m="2569740">to</span> <span
  m="2569820">knock</span> <span m="2570150">out</span> <span
  m="2573830">all</span> <span m="2574000">but</span> <span
  m="2574140">two</span> <span m="2574280">neurons</span> <span
  m="2574690">in</span> <span m="2574770">each</span> <span
  m="2574940">column.</span> <span m="2577390">Now,</span> <span
  m="2577440">I</span> <span m="2577550">know</span> <span
  m="2578250">that</span> <span m="2578360">with</span> <span
  m="2578430">two</span> <span m="2578730">neurons</span> <span
  m="2579030">in</span> <span m="2579130">each</span> <span
  m="2579290">column,</span> <span m="2579760">I've</span> <span
  m="2580150">got</span> <span m="2580600">a</span> <span
  m="2580690">solution.</span> <span m="2581520">I</span> <span
  m="2581650">just</span> <span m="2581840">showed</span> <span
  m="2582070">it.</span> <span m="2582370">I</span> <span
  m="2582480">just</span> <span m="2582650">showed</span> <span
  m="2582870">one.</span></p><p><span m="2583345">But</span> <span
  m="2583820">let's</span> <span m="2584110">run</span> <span
  m="2584570">it</span> <span m="2585400">this</span> <span
  m="2585630">way.</span> <span m="2599060">It</span> <span
  m="2599210">looks</span> <span m="2599470">like</span> <span
  m="2599940">increasingly</span> <span m="2600750">bad</span> <span
  m="2601070">news.</span> <span m="2603790">What's</span> <span
  m="2604030">happened</span> <span m="2604450">is</span> <span
  m="2604540">that</span> <span m="2604680">this</span> <span
  m="2604770">sucker's</span> <span m="2605270">got</span> <span
  m="2605440">itself</span> <span m="2605810">into</span> <span
  m="2605980">a</span> <span m="2606070">local</span> <span
  m="2606350">maximum.</span> <span m="2608440">So</span> <span
  m="2608520">now</span> <span m="2608670">you</span> <span
  m="2608820">can</span> <span m="2608950">see</span> <span
  m="2609190">why</span> <span m="2611230">there's</span> <span
  m="2611420">been</span> <span m="2611550">a</span> <span
  m="2611610">breakthrough</span> <span m="2612480">in</span> <span
  m="2612620">this</span> <span m="2612810">neural</span> <span
  m="2613360">net</span> <span m="2614160">learning</span> <span
  m="2614500">stuff.</span> <span m="2615600">And</span> <span
  m="2615630">it's</span> <span m="2615770">because</span> <span
  m="2616150">when</span> <span m="2616300">you</span> <span
  m="2616420">widen</span> <span m="2617990">the</span> <span
  m="2618100">net,</span> <span m="2619300">you</span> <span
  m="2619440">turn</span> <span m="2620540">local</span> <span
  m="2620860">maxima</span> <span m="2621470">into</span> <span
  m="2621670">saddle</span> <span m="2622050">points.</span> <span
  m="2623750">So</span> <span m="2623920">now</span> <span
  m="2624120">it's</span> <span m="2624250">got</span> <span
  m="2624410">a</span> <span m="2624460">way</span> <span m="2624660">of</span>
  <span m="2624790">crawling</span> <span m="2625190">its</span> <span
  m="2625350">way</span> <span m="2625560">through</span> <span
  m="2625790">this</span> <span m="2626780">vast</span> <span
  m="2627130">space</span> <span m="2628310">without</span> <span
  m="2628580">getting</span> <span m="2628790">stuck</span> <span
  m="2629090">on</span> <span m="2629170">a</span> <span
  m="2629220">local</span> <span m="2629500">maximum,</span> <span
  m="2630950">as</span> <span m="2631150">suggested</span> <span
  m="2631620">by</span> <span m="2631750">this.</span></p><p><span
  m="2633860">All</span> <span m="2633970">right.</span> <span
  m="2634150">So</span> <span m="2634250">those</span> <span
  m="2634480">are</span> <span m="2634550">some,</span> <span
  m="2634890">I</span> <span m="2635040">think,</span> <span
  m="2635280">interesting</span> <span m="2637580">things</span> <span
  m="2637880">to</span> <span m="2637960">look</span> <span
  m="2638180">at</span> <span m="2638900">by</span> <span m="2639070">way</span>
  <span m="2639270">of</span> <span m="2639650">these</span> <span
  m="2639850">demonstrations.</span> <span m="2641810">But</span> <span
  m="2641940">now</span> <span m="2642340">I'd</span> <span
  m="2642490">like</span> <span m="2642630">to</span> <span
  m="2642710">go</span> <span m="2642850">back</span> <span
  m="2643380">to</span> <span m="2643550">my</span> <span
  m="2643710">slide</span> <span m="2644130">set</span> <span
  m="2644510">and</span> <span m="2644670">show</span> <span
  m="2644820">you</span> <span m="2644940">some</span> <span
  m="2645220">examples</span> <span m="2645906">that</span> <span
  m="2646250">will</span> <span m="2646540">address</span> <span
  m="2646860">the</span> <span m="2646930">question</span> <span
  m="2647340">of</span> <span m="2647460">whether</span> <span
  m="2647680">these</span> <span m="2647940">things</span> <span
  m="2648210">are</span> <span m="2648310">seeing</span> <span
  m="2648850">like</span> <span m="2649100">we</span> <span
  m="2649270">see.</span> <span m="2660610">So</span> <span
  m="2660780">you</span> <span m="2660870">can</span> <span
  m="2661000">try</span> <span m="2661230">these</span> <span
  m="2661440">examples</span> <span m="2661950">online.</span> <span
  m="2662380">There</span> <span m="2662490">are</span> <span
  m="2662520">a</span> <span m="2662560">variety</span> <span
  m="2662990">of</span> <span m="2663440">websites</span> <span
  m="2664020">that</span> <span m="2664120">allow</span> <span
  m="2664370">you</span> <span m="2664510">to</span> <span
  m="2665150">put</span> <span m="2665270">in</span> <span
  m="2665390">your</span> <span m="2665550">own</span> <span
  m="2665770">picture.</span></p><p><span m="2667950">And</span> <span
  m="2669180">there's</span> <span m="2669350">a</span> <span
  m="2669610">cottage</span> <span m="2669980">industry</span> <span
  m="2670400">of</span> <span m="2670550">producing</span> <span
  m="2671670">papers</span> <span m="2672350">in</span> <span
  m="2672550">journals</span> <span m="2673510">that</span> <span
  m="2673730">fool</span> <span m="2674220">neural</span> <span
  m="2674500">nets.</span> <span m="2675840">So</span> <span
  m="2676040">in</span> <span m="2676110">this</span> <span
  m="2676290">case,</span> <span m="2677020">a</span> <span
  m="2677180">very</span> <span m="2677500">small</span> <span
  m="2677820">number</span> <span m="2678080">of</span> <span
  m="2678180">pixels</span> <span m="2678600">have</span> <span
  m="2678730">been</span> <span m="2678890">changed.</span> <span
  m="2679420">You</span> <span m="2679540">don't</span> <span
  m="2679780">see</span> <span m="2680000">the</span> <span
  m="2680090">difference,</span> <span m="2681380">but</span> <span
  m="2681500">it's</span> <span m="2681640">enough</span> <span
  m="2681910">to</span> <span m="2682806">take</span> <span
  m="2683150">this</span> <span m="2683410">particular</span> <span
  m="2683850">neural</span> <span m="2684090">net</span> <span
  m="2684290">from</span> <span m="2684430">a</span> <span
  m="2684480">high</span> <span m="2684710">confidence</span> <span
  m="2685100">that it's</span> <span m="2685490">looking</span> <span
  m="2685730">at</span> <span m="2685800">a</span> <span
  m="2685840">school</span> <span m="2686170">bus</span> <span
  m="2687850">to</span> <span m="2688150">thinking</span> <span
  m="2688580">that</span> <span m="2688700">it's</span> <span
  m="2689225">not</span> <span m="2689560">a</span> <span
  m="2689590">school</span> <span m="2689870">bus.</span> <span
  m="2692160">Those</span> <span m="2692380">are</span> <span
  m="2692460">some</span> <span m="2692620">things</span> <span m="2692850">that
  it</span> <span m="2692980">thinks</span> <span m="2693240">are a</span> <span
  m="2693360">school</span> <span m="2693630">bus.</span></p><p><span
  m="2696780">So</span> <span m="2696980">it</span> <span
  m="2697060">appears</span> <span m="2697440">to</span> <span
  m="2697520">be</span> <span m="2697640">the</span> <span
  m="2697730">case</span> <span m="2698190">that</span> <span
  m="2698330">what</span> <span m="2698490">is</span> <span
  m="2698680">triggering</span> <span m="2699350">this</span> <span
  m="2699650">school</span> <span m="2700040">bus</span> <span
  m="2700360">result</span> <span m="2701320">is</span> <span
  m="2701510">that</span> <span m="2701620">it's</span> <span
  m="2701750">seeing</span> <span m="2702070">enough</span> <span
  m="2702610">local</span> <span m="2703040">evidence</span> <span
  m="2703560">that</span> <span m="2703700">this</span> <span
  m="2703910">is</span> <span m="2704050">not</span> <span
  m="2704340">one</span> <span m="2704500">of</span> <span
  m="2704570">the</span> <span m="2704700">other</span> <span
  m="2704890">999</span> <span m="2706020">classes</span> <span
  m="2707610">and</span> <span m="2707990">enough</span> <span
  m="2708260">positive</span> <span m="2708750">evidence</span> <span
  m="2710080">from</span> <span m="2710665">these</span> <span
  m="2710920">local</span> <span m="2711300">looks</span> <span
  m="2711750">to</span> <span m="2711900">conclude</span> <span
  m="2712310">that</span> <span m="2712420">it's</span> <span
  m="2712560">a</span> <span m="2712630">school</span> <span
  m="2712890">bus.</span> <span m="2718020">So</span> <span
  m="2718210">do</span> <span m="2718300">you</span> <span
  m="2718380">see</span> <span m="2718560">any</span> <span
  m="2718740">of</span> <span m="2718800">those</span> <span
  m="2719020">things?</span> <span m="2720330">I</span> <span
  m="2720520">don't.</span> <span m="2724494">And</span> <span
  m="2724950">here</span> <span m="2725170">you</span> <span
  m="2725280">can</span> <span m="2725400">say,</span> <span
  m="2725690">OK,</span> <span m="2725860">well,</span> <span
  m="2726350">look</span> <span m="2726520">at</span> <span
  m="2726590">that</span> <span m="2726760">baseball</span> <span
  m="2727300">one.</span> <span m="2728290">Yeah,</span> <span
  m="2728500">that</span> <span m="2728720">looks</span> <span
  m="2728970">like</span> <span m="2729160">it's</span> <span
  m="2729300">got</span> <span m="2729480">a</span> <span
  m="2729520">little</span> <span m="2729760">bit</span> <span
  m="2729940">of</span> <span m="2730030">baseball</span> <span
  m="2731000">texture</span> <span m="2731500">in</span> <span
  m="2731590">it.</span> <span m="2732020">So</span> <span
  m="2732100">maybe</span> <span m="2732380">what</span> <span
  m="2732510">it's</span> <span m="2732670">doing</span> <span
  m="2732890">is</span> <span m="2733020">looking</span> <span
  m="2733300">at</span> <span m="2733390">texture.</span></p><p><span
  m="2739130">These</span> <span m="2739380">are</span> <span
  m="2739500">some</span> <span m="2740230">examples</span> <span
  m="2740850">from</span> <span m="2741890">a</span> <span
  m="2742010">recent</span> <span m="2742400">and</span> <span
  m="2742510">very</span> <span m="2742700">famous</span> <span
  m="2743380">paper</span> <span m="2743670">by</span> <span
  m="2743840">Google</span> <span m="2745810">using</span> <span
  m="2746090">essentially</span> <span m="2746570">the</span> <span
  m="2746650">same</span> <span m="2746940">ideas</span> <span
  m="2747380">to</span> <span m="2747490">put</span> <span
  m="2747690">captions</span> <span m="2748260">on</span> <span
  m="2749600">pictures.</span> <span m="2751290">So</span> <span
  m="2752110">this,</span> <span m="2752560">by</span> <span
  m="2752660">the</span> <span m="2752750">way,</span> <span
  m="2752900">is</span> <span m="2753020">what</span> <span
  m="2753170">has</span> <span m="2753270">stimulated</span> <span
  m="2753790">all</span> <span m="2753980">this</span> <span
  m="2754510">enormous</span> <span m="2755110">concern</span> <span
  m="2755510">about</span> <span m="2755720">artificial</span> <span
  m="2756190">intelligence.</span> <span m="2756660">Because</span> <span
  m="2756970">a</span> <span m="2757020">naive</span> <span
  m="2757470">viewer</span> <span m="2757790">looks</span> <span
  m="2758020">at</span> <span m="2758150">that</span> <span
  m="2758330">picture</span> <span m="2758610">and</span> <span
  m="2758700">says,</span> <span m="2758870">oh,</span> <span
  m="2758960">my</span> <span m="2759120">god,</span> <span
  m="2759380">this</span> <span m="2759540">thing</span> <span
  m="2759710">knows</span> <span m="2759920">what</span> <span
  m="2760040">it's</span> <span m="2760200">like</span> <span
  m="2760410">to</span> <span m="2760480">play,</span> <span
  m="2761730">or</span> <span m="2761900">be</span> <span
  m="2762080">young,</span> <span m="2763400">or</span> <span
  m="2763590">move,</span> <span m="2764690">or</span> <span
  m="2764850">what</span> <span m="2764990">a</span> <span
  m="2765020">Frisbee</span> <span m="2765500">is.</span> <span
  m="2766260">And</span> <span m="2766390">of</span> <span
  m="2766460">course,</span> <span m="2766710">it</span> <span
  m="2766790">knows</span> <span m="2767010">none</span> <span
  m="2767190">of</span> <span m="2767280">that.</span> <span
  m="2768070">It</span> <span m="2768190">just</span> <span
  m="2768390">knows</span> <span m="2768570">how</span> <span
  m="2768670">to</span> <span m="2768750">label</span> <span
  m="2769050">this</span> <span m="2769220">picture.</span></p><p><span
  m="2770950">And</span> <span m="2771310">to</span> <span
  m="2771440">the</span> <span m="2771780">credit</span> <span
  m="2772060">of</span> <span m="2772130">the</span> <span
  m="2772220">people</span> <span m="2772510">who</span> <span
  m="2772570">wrote</span> <span m="2772720">this</span> <span
  m="2772910">paper,</span> <span m="2774080">they</span> <span
  m="2774220">show</span> <span m="2774430">examples</span> <span
  m="2774960">that</span> <span m="2775060">don't</span> <span
  m="2775270">do</span> <span m="2775390">so</span> <span
  m="2775600">well.</span> <span m="2777540">So</span> <span
  m="2777730">yeah,</span> <span m="2777920">it's</span> <span
  m="2778040">a</span> <span m="2778090">cat,</span> <span
  m="2778510">but</span> <span m="2778610">it's</span> <span
  m="2778790">not</span> <span m="2778990">lying.</span> <span
  m="2781000">Oh,</span> <span m="2781150">it's</span> <span
  m="2781270">a</span> <span m="2781330">little</span> <span
  m="2781540">girl,</span> <span m="2781910">but</span> <span
  m="2781950">she's</span> <span m="2782110">not</span> <span
  m="2782320">blowing</span> <span m="2782700">bubbles.</span> <span
  m="2784620">What</span> <span m="2784730">about</span> <span
  m="2784930">this</span> <span m="2785100">one?</span></p><p><span
  m="2785884">[LAUGHTER]</span></p><p>&nbsp;</p><p><span m="2791820">So</span>
  <span m="2791900">we've</span> <span m="2792050">been</span> <span
  m="2792150">doing</span> <span m="2792400">our</span> <span
  m="2792540">own</span> <span m="2792890">work</span> <span
  m="2793180">in</span> <span m="2793260">my</span> <span
  m="2793390">laboratory</span> <span m="2794770">on</span> <span
  m="2794980">some</span> <span m="2795180">of</span> <span
  m="2795250">this.</span> <span m="2796390">And</span> <span
  m="2796680">the</span> <span m="2796750">way</span> <span
  m="2796900">the</span> <span m="2796980">following</span> <span
  m="2797440">set</span> <span m="2797670">of</span> <span
  m="2797790">pictures</span> <span m="2798130">was</span> <span
  m="2798330">produced</span> <span m="2798780">was</span> <span
  m="2798940">this.</span> <span m="2799900">You</span> <span
  m="2800230">take</span> <span m="2800490">an</span> <span
  m="2800580">image,</span> <span m="2801230">and</span> <span
  m="2801370">you</span> <span m="2801450">separate</span> <span
  m="2801850">it</span> <span m="2801910">into</span> <span m="2802060">a</span>
  <span m="2802130">bunch</span> <span m="2802390">of</span> <span
  m="2802470">slices,</span> <span m="2803600">each</span> <span
  m="2803810">representing</span> <span m="2804310">a</span> <span
  m="2804370">particular</span> <span m="2804890">frequency</span> <span
  m="2805390">band.</span> <span m="2806760">And</span> <span
  m="2806890">then</span> <span m="2807020">you</span> <span
  m="2807100">go</span> <span m="2807280">into</span> <span
  m="2807450">one</span> <span m="2807640">of</span> <span
  m="2807720">those</span> <span m="2808500">frequency</span> <span
  m="2808950">bands</span> <span m="2809300">and you</span> <span
  m="2809480">knock</span> <span m="2809780">out</span> <span
  m="2809960">a</span> <span m="2810020">rectangle</span> <span
  m="2810550">from</span> <span m="2810700">the</span> <span
  m="2810770">picture,</span> <span m="2811680">and</span> <span
  m="2811800">then</span> <span m="2811920">you</span> <span
  m="2812060">reassemble</span> <span m="2812790">the</span> <span
  m="2812880">thing.</span> <span m="2814730">And</span> <span
  m="2814870">if</span> <span m="2814930">you</span> <span
  m="2815020">hadn't</span> <span m="2815650">knocked</span> <span
  m="2815980">that</span> <span m="2816160">piece</span> <span
  m="2816450">out,</span> <span m="2816950">when</span> <span
  m="2817110">you</span> <span m="2817220">reassemble</span> <span
  m="2817780">it,</span> <span m="2817880">it</span> <span
  m="2818030">would</span> <span m="2818140">look</span> <span
  m="2818340">exactly</span> <span m="2818750">like</span> <span
  m="2818940">it</span> <span m="2819010">did</span> <span
  m="2819140">when</span> <span m="2819260">you</span> <span
  m="2819340">started.</span></p><p><span m="2820760">So</span> <span
  m="2820830">what</span> <span m="2820950">we're</span> <span
  m="2821060">doing</span> <span m="2821410">is</span> <span
  m="2821520">we</span> <span m="2821650">knock</span> <span
  m="2821960">out</span> <span m="2822160">as</span> <span
  m="2822280">much</span> <span m="2822500">as</span> <span
  m="2822630">we</span> <span m="2822760">can</span> <span
  m="2823370">and</span> <span m="2823540">still</span> <span
  m="2823860">retain</span> <span m="2824340">the</span> <span
  m="2824580">neural</span> <span m="2824880">net's</span> <span
  m="2825130">impression</span> <span m="2825850">that</span> <span
  m="2826000">it's</span> <span m="2826170">the</span> <span
  m="2826260">thing</span> <span m="2826540">that</span> <span
  m="2826650">it</span> <span m="2826740">started</span> <span
  m="2827050">out</span> <span m="2827240">thinking</span> <span
  m="2827530">it</span> <span m="2827650">was.</span> <span
  m="2828160">So</span> <span m="2828350">what</span> <span
  m="2828480">do</span> <span m="2828540">you</span> <span
  m="2828630">think</span> <span m="2828900">this</span> <span
  m="2829130">is?</span> <span m="2833640">It's</span> <span
  m="2833870">identified</span> <span m="2834480">by</span> <span
  m="2834600">a</span> <span m="2834640">neural</span> <span
  m="2834880">net</span> <span m="2835050">as</span> <span m="2835150">a</span>
  <span m="2835240">railroad</span> <span m="2835820">car</span> <span
  m="2837310">because</span> <span m="2837690">this</span> <span
  m="2837880">is</span> <span m="2838010">the</span> <span
  m="2838190">image</span> <span m="2838550">that</span> <span
  m="2838640">it</span> <span m="2838740">started</span> <span
  m="2839120">with.</span> <span m="2841690">How</span> <span
  m="2841780">about</span> <span m="2841970">this</span> <span
  m="2842150">one?</span> <span m="2842380">That's</span> <span
  m="2842590">easy,</span> <span m="2842880">right?</span> <span
  m="2843370">That's</span> <span m="2843570">a</span> <span
  m="2843640">guitar.</span> <span m="2845100">We</span> <span
  m="2845250">weren't</span> <span m="2845450">able</span> <span
  m="2845660">to</span> <span m="2845720">mutilate</span> <span
  m="2846220">that</span> <span m="2846400">one</span> <span
  m="2846510">very</span> <span m="2846570">much</span> <span
  m="2847310">and</span> <span m="2847490">still</span> <span
  m="2847730">retain</span> <span m="2848090">the</span> <span
  m="2848180">guitar-ness</span> <span m="2848920">of</span> <span
  m="2849010">it.</span></p><p><span m="2850830">How</span> <span
  m="2850950">about</span> <span m="2851080">this</span> <span
  m="2851240">one?</span></p><p><span m="2852320">AUDIENCE: A</span> <span
  m="2852750">lamp?</span></p><p><span m="2853610">PATRICK H. WINSTON:
  What's</span> <span m="2853780">that?</span></p><p><span m="2854193">AUDIENCE:
  Lamp.</span></p><p><span m="2855020">PATRICK H. WINSTON:
  What?</span></p><p><span m="2855250">AUDIENCE: Lamp.</span></p><p><span
  m="2856190">PATRICK H. WINSTON: A</span> <span m="2856300">lamp.</span> <span
  m="2857330">Any</span> <span m="2857520">other</span> <span
  m="2857690">ideas?</span></p><p><span m="2858552">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2858983">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2860280">PATRICK H. WINSTON: Ken,</span>
  <span m="2860530">what</span> <span m="2860640">do</span> <span
  m="2860710">you</span> <span m="2860780">think</span> <span
  m="2860990">it</span> <span m="2861070">is?</span></p><p><span
  m="2861445">AUDIENCE: A</span> <span m="2861820">toilet.</span></p><p><span
  m="2863440">PATRICK H. WINSTON: See,</span> <span m="2863750">he's</span>
  <span m="2863990">an</span> <span m="2864140">expert</span> <span
  m="2864530">on</span> <span m="2864630">this</span> <span
  m="2864710">subject.</span></p><p><span
  m="2865490">[LAUGHTER]</span></p><p><span m="2866880">It</span> <span
  m="2866940">was</span> <span m="2867040">identified</span> <span
  m="2867580">as</span> <span m="2867700">a</span> <span
  m="2867760">barbell.</span> <span m="2870480">What's</span> <span
  m="2870680">that?</span></p><p><span m="2871320">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2872206">PATRICK H. WINSTON: A</span> <span
  m="2872650">what?</span></p><p><span m="2873450">AUDIENCE:
  Cello.</span></p><p><span m="2874340">PATRICK H. WINSTON: Cello.</span> <span
  m="2875730">You</span> <span m="2875850">didn't</span> <span
  m="2876030">see</span> <span m="2876220">the</span> <span
  m="2877200">little</span> <span m="2877460">girl</span> <span
  m="2877800">or</span> <span m="2877900">the</span> <span
  m="2877990">instructor.</span> <span m="2879410">How</span> <span
  m="2879510">about</span> <span m="2879580">this</span> <span
  m="2879760">one?</span></p><p><span m="2880152">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2881330">PATRICK H. WINSTON:
  What?</span></p><p><span m="2881830">AUDIENCE: [INAUDIBLE].</span></p><p><span
  m="2882830">PATRICK H. WINSTON: No.</span></p><p><span m="2887205">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2888630">PATRICK H. WINSTON: It's</span>
  <span m="2888740">a</span> <span m="2888790">grasshopper.</span> <span
  m="2890680">What's</span> <span m="2890920">this?</span></p><p><span
  m="2891390">AUDIENCE: A wolf.</span></p><p><span m="2892330">PATRICK H.
  WINSTON: Wow,</span> <span m="2892630">you're</span> <span
  m="2892770">good.</span> <span m="2895870">It's</span> <span
  m="2896060">actually</span> <span m="2896400">not</span> <span
  m="2896700">a</span> <span m="2896870">two-headed</span> <span
  m="2897160">wolf.</span></p><p><span m="2897693">[LAUGHTER]</span></p><p><span
  m="2900000">It's</span> <span m="2900350">two</span> <span m="2900510">wolves
  that</span> <span m="2900930">are</span> <span m="2901040">close</span> <span
  m="2901330">together.</span></p><p><span m="2903438">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2905110">PATRICK H. WINSTON: That's</span>
  <span m="2905220">a</span> <span m="2905260">bird,</span> <span
  m="2905550">right?</span></p><p><span m="2906402">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2908650">PATRICK H. WINSTON: Good</span>
  <span m="2908820">for</span> <span m="2908940">you.</span> <span
  m="2909150">It's</span> <span m="2909290">a</span> <span
  m="2909340">rabbit.</span></p><p><span
  m="2909837">[LAUGHTER]</span></p><p><span m="2912322">How about
  that?</span></p><p><span m="2912819">[? AUDIENCE: Giraffe.
  ?]</span></p><p><span m="2916040">PATRICK H. WINSTON: Russian</span> <span
  m="2916380">wolfhound.</span></p><p><span m="2918795">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2927470">PATRICK H. WINSTON: If</span>
  <span m="2927580">you've</span> <span m="2927680">been</span> <span
  m="2927830">to</span> <span m="2927900">Venice,</span> <span
  m="2928290">you</span> <span m="2928380">recognize</span> <span
  m="2928880">this.</span></p><p><span m="2929314">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2931920">PATRICK H. WINSTON: So</span>
  <span m="2932800">bottom</span> <span m="2933080">line</span> <span
  m="2934230">is</span> <span m="2934370">that</span> <span
  m="2934510">these</span> <span m="2934730">things</span> <span
  m="2934970">are</span> <span m="2935180">an</span> <span
  m="2935290">engineering</span> <span m="2935960">marvel</span> <span
  m="2936630">and</span> <span m="2936780">do</span> <span
  m="2936930">great</span> <span m="2937230">things,</span> <span
  m="2937690">but</span> <span m="2937860">they</span> <span
  m="2938000">don't</span> <span m="2938280">see</span> <span
  m="2938550">like</span> <span m="2938770">we</span> <span
  m="2938940">see.</span></p>
uid: a0bfc251500691dcea20b3e78fedecd8
type: courses
layout: video
---
