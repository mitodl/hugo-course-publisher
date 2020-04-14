---
title: Bindings
uid: 4798c8d1b216faca9232e4f0127f18bd
parent_uid: fc24c5ab1844baa962f3e8993e4c4905
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-1-video-solutions/bindings
short_url: bindings
inline_embed_id: 38798459bindings60217707
about_this_resource_text: >-
  <p><strong>Description:</strong> This in-class question explains variable
  bindings and the order of operations in python.</p>
  <p><strong>Instructor:</strong> Dr. Ana Bell</p>
related_resources_text: ''
transcript: >-
  <p><span m="790">The</span> <span m="880">following</span> <span
  m="1300">content</span> <span m="1870">is</span> <span
  m="1990">provided</span> <span m="2440">under</span> <span m="2710">a</span>
  <span m="2770">Creative</span> <span m="3190">Commons</span> <span
  m="3580">license.</span> <span m="4730">Your</span> <span
  m="4870">support</span> <span m="5380">will</span> <span m="5530">help</span>
  <span m="5770">MIT</span> <span m="6220">OpenCourseWare</span> <span
  m="7030">continue</span> <span m="7540">to</span> <span m="7630">offer</span>
  <span m="8050">high</span> <span m="8290">quality</span> <span
  m="8770">educational</span> <span m="9400">resources</span> <span
  m="10030">for</span> <span m="10210">free.</span> <span m="11390">To</span>
  <span m="11410">make</span> <span m="11620">a</span> <span
  m="11650">donation</span> <span m="12370">or</span> <span
  m="12610">view</span> <span m="13060">additional</span> <span
  m="13480">materials</span> <span m="13990">from</span> <span
  m="14200">hundreds</span> <span m="14590">of</span> <span m="14710">MIT</span>
  <span m="15130">courses,</span> <span m="16219">visit</span> <span
  m="16450">MIT OpenCourseWare at ocw.mit.edu.</span></p><p><span
  m="24220">PROFESSOR:</span> <span m="24310">So</span> <span
  m="24400">for</span> <span m="24520">this</span> <span m="24760">last</span>
  <span m="26020">class</span> <span m="26320">exercise</span> <span
  m="27940">we</span> <span m="28090">have</span> <span m="29020">this</span>
  <span m="29200">following</span> <span m="29620">code.</span> <span
  m="30920">So</span> <span m="30970">we</span> <span m="31060">have</span>
  <span m="31730">46</span> <span m="32420">for USA</span> <span
  m="32759">gold,</span> <span m="33650">27</span> <span m="34300">for</span>
  <span m="34480">UK</span> <span m="34780">gold,</span> <span
  m="35750">1</span> <span m="36010">for</span> <span m="36160">Romanian</span>
  <span m="36580">gold.</span> <span m="38140">We</span> <span
  m="38320">make</span> <span m="38590">this</span> <span
  m="39490">variable,</span> <span m="40000">here,</span> <span
  m="40570">Total</span> <span m="40900">Gold,</span> <span m="41830">to</span>
  <span m="41950">be</span> <span m="42100">the</span> <span
  m="42190">sum</span> <span m="42430">of</span> <span m="42520">those</span>
  <span m="42820">three</span> <span m="43620">which</span> <span m="43990">I
  believe is</span> <span m="44200">74.</span> <span m="46060">Then</span> <span
  m="46200">we're</span> <span m="46300">going</span> <span m="46420">to</span>
  <span m="46480">print</span> <span m="46810">total</span> <span
  m="47080">gold.</span> <span m="48240">OK?</span> <span m="49480">Then</span>
  <span m="49630">we're</span> <span m="49690">going</span> <span
  m="49810">to</span> <span m="49870">increase</span> <span m="50260">the</span>
  <span m="50350">value</span> <span m="50650">for</span> <span
  m="50860">Romanian</span> <span m="51100">gold</span> <span
  m="51340">and</span> <span m="51430">we're</span> <span m="51490">going</span>
  <span m="51610">to</span> <span m="51670">print</span> <span
  m="51880">it</span> <span m="52000">again.</span> <span m="53200">So</span>
  <span m="53350">as</span> <span m="53530">always,</span> <span
  m="53980">you</span> <span m="54070">can</span> <span m="54220">just</span>
  <span m="54400">copy</span> <span m="54850">this,</span> <span
  m="56260">pop</span> <span m="56530">it</span> <span m="56620">into</span>
  <span m="56860">Python,</span> <span m="58330">and</span> <span
  m="58480">run</span> <span m="58690">it</span> <span m="58810">to</span> <span
  m="58930">test</span> <span m="59200">yourself,</span> <span
  m="60340">but</span> <span m="60570">you</span> <span m="60820">should</span>
  <span m="60940">do</span> <span m="61090">it</span> <span
  m="61720">just</span> <span m="62080">in</span> <span m="62170">your</span>
  <span m="62260">mind</span> <span m="62470">first.</span></p><p><span
  m="63650">So</span> <span m="63670">notice</span> <span m="63880">it</span>
  <span m="64000">print</span> <span m="64209">74</span> <span
  m="64720">in</span> <span m="64810">74,</span> <span m="66310">and</span>
  <span m="66430">that's</span> <span m="66670">because</span> <span
  m="67150">we</span> <span m="67300">never</span> <span m="67600">told</span>
  <span m="67930">the</span> <span m="68020">program</span> <span
  m="68470">to</span> <span m="69310">calculate</span> <span
  m="70360">the</span> <span m="70480">new</span> <span m="70660">total.</span>
  <span m="72400">So</span> <span m="72520">we</span> <span
  m="72640">only</span> <span m="72820">calculated</span> <span
  m="73330">the</span> <span m="73420">total,</span> <span m="73920">way</span>
  <span m="74080">up</span> <span m="74230">here</span> <span
  m="75472">on</span> <span m="75886">line</span> <span m="76300">5.</span>
  <span m="78020">If</span> <span m="78070">we</span> <span
  m="78220">calculated</span> <span m="78790">the</span> <span
  m="78910">total</span> <span m="79210">again</span> <span
  m="79510">down</span> <span m="79750">here,</span> <span m="82790">then</span>
  <span m="82870">it</span> <span m="82930">would</span> <span
  m="83020">be</span> <span m="83110">74.75</span> <span m="86360">So</span>
  <span m="87260">let's</span> <span m="87410">look</span> <span
  m="87560">at</span> <span m="87620">the</span> <span m="87740">answers,</span>
  <span m="88340">hopefully</span> <span m="90140">you</span> <span
  m="90200">guys</span> <span m="90440">got</span> <span m="90680">that.</span>
  <span m="91340">Perfect,</span> <span m="92420">majority</span> <span
  m="93170">are</span> <span m="93500">good</span> <span m="93650">to</span>
  <span m="93770">go.</span> <span m="94200">If</span> <span
  m="94250">you</span> <span m="94310">didn't</span> <span m="94520">get</span>
  <span m="94700">that</span> <span m="95340">please</span> <span
  m="95540">try</span> <span m="95690">to</span> <span m="95780">review</span>
  <span m="96140">it,</span> <span m="97340">review</span> <span
  m="97630">why</span> <span m="97740">it</span> <span m="97820">didn't</span>
  <span m="97970">work.</span></p>
embedded_media:
  - uid: 78b5332c4c86f6dbe89d7c306edbb086
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: EFCdr_43qmU
  - uid: 66c625b1e4661c25107586484d5be49c
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: EFCdr_43qmU.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-1-video-solutions/bindings/EFCdr_43qmU.srt
  - uid: 81bd275feb131d9db3db395bb2798aa4
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: EFCdr_43qmU.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/in-class-questions-and-video-solutions/lecture-1-video-solutions/bindings/EFCdr_43qmU.pdf
  - uid: 95e9fc7e4c14ce40bfb03bfe165b824a
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 88ffb0f41632de2b9539747ad016983e
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 526b96a8fe8de1b9cee25235c56e9a02
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: EFCdr_43qmU
  - uid: 887056b0a39109644d665854a6ec8303
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/EFCdr_43qmU/default.jpg'
  - uid: 4e76e75eb96c834f359596b396de9f6f
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1192805159'
  - uid: ed1c9ca113ee6e6a98bf6db3abab7fde
    parent_uid: 4798c8d1b216faca9232e4f0127f18bd
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.0001F16/MIT6_0001F16_Lecture_01_exercise_03_300k.mp4
type: courses
layout: video
---
