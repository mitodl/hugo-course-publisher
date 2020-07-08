---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: UDkq_cLVSmc
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    title: Video-YouTube-Stream
    type: Video
    uid: f1a7b78da66edd5f827ae623534b5b6e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/UDkq_cLVSmc/default.jpg'
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 008c5d181ebf3e64d5f19befa5528bc4
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: UDkq_cLVSmc
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7194da80f8997c6433c4bef45da7be31
  - id: UDkq_cLVSmc.srt
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/reliability/UDkq_cLVSmc.srt
    title: 3play caption file
    type: null
    uid: 49e87e0961803b0976563e7ddbda4a96
  - id: UDkq_cLVSmc.pdf
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/reliability/UDkq_cLVSmc.pdf
    title: 3play pdf file
    type: null
    uid: 308e3300148553b8fe4b082d805dc90f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f5e29e398c759ec82f63b62666ef75ce
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ca1fe3caffc76516f030c75db47f9cba
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L03-09_300k.mp4
    parent_uid: 948ac640270af76bf3553cc0f47b7203
    title: Video-Internet Archive-MP4
    type: Video
    uid: 07d342d96abb594f113d097bb2a9a3ae
inline_embed_id: 41206533reliability54268235
order_index: 366
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: reliability
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/reliability
title: Reliability
transcript: >-
  <p><span m="1440">Independence is a very useful property.</span></p><p><span
  m="4170">Whenever it is true, we can break up complicated</span> <span
  m="7080">situations into simpler ones.</span></p><p><span m="9260">In
  particular, we can do separate calculations for each</span> <span
  m="12960">piece of a given model and then combine the
  results.</span></p><p><span m="17230">We're going to look at an application of
  this idea into</span> <span m="19860">the analysis of reliability of a system
  that consists of</span> <span m="24010">independent units.</span></p><p><span
  m="25960">So we have a system that consists of a number, let's</span> <span
  m="29620">say, n, of units.</span></p><p><span m="31430">And each one of the
  units can be &quot;up&quot; or &quot;down&quot;.</span></p><p><span
  m="34650">And it's going to be &quot;up&quot; with a certain probability
  pi.</span></p><p><span m="38290">Furthermore, we will assume that unit
  failures are</span> <span m="41920">independent.</span></p><p><span
  m="43240">Intuitively, what we mean is that failure of some of the</span>
  <span m="46540">units does not the affect the probability that some of
  the</span> <span m="50000">other units will fail.</span></p><p><span
  m="51900">If we want to be more formal, we might proceed as
  follows.</span></p><p><span m="55860">We could define an event Ui to be the
  event that</span> <span m="61080">the ith unit is
  &quot;up&quot;.</span></p><p><span m="67170">And then make the assumption that
  the events U1, U2, and so</span> <span m="73690">on up to Un, if we have n
  units, are independent.</span></p><p><span m="84450">Alternatively, we could
  define events Fi, where event Fi is</span> <span m="91940">the event that the
  ith unit is down, or that it has failed.</span></p><p><span m="102270">And we
  could assume that the events Fi are independent, but</span> <span
  m="109080">we do not really need a separate assumption.</span></p><p><span
  m="111430">As a consequence of the assumption that the Ui's are</span> <span
  m="114200">independent, one can argue that the Fi's are also</span> <span
  m="119520">independent.</span></p><p><span m="121240">How do we know that this
  is the case?</span></p><p><span m="124520">If we were dealing with just two
  units, then this is a fact</span> <span m="131280">that we have already proved
  a little earlier.</span></p><p><span m="134250">We did prove that if two
  events are independent, then</span> <span m="137690">their complements are
  also independent.</span></p><p><span m="141150">Now that we're dealing with
  multiple events here, a</span> <span m="144310">general number n, how do we
  argue?</span></p><p><span m="147640">One approach would be to be formal and
  start from the</span> <span m="152150">definition of independence of the U
  events.</span></p><p><span m="156560">And that definition gives us a number of
  formulas.</span></p><p><span m="159210">Then manipulate those formulas to
  prove the conditions that</span> <span m="163750">are required in order to
  check that the events Fi are</span> <span
  m="167140">independent.</span></p><p><span m="168420">This is certainly
  possible, although it is a bit tedious.</span></p><p><span m="172230">However,
  the approach we will be taking in situations like</span> <span m="175440">this
  one is that we will use the intuitive understanding</span> <span
  m="179950">that we have of what independence means.</span></p><p><span
  m="182890">So independence in this context means that whether</span> <span
  m="185580">some units are &quot;up&quot; or down, does not change the</span>
  <span m="189760">probabilities that some of the other units</span> <span
  m="192420">will be &quot;up&quot; or down.</span></p><p><span m="194700">And
  by taking that interpretation, independence</span> <span m="197800">of the
  events that units are &quot;up&quot; is essentially the same</span> <span
  m="201160">as independence of the units [having]</span> <span
  m="205380">failed.</span></p><p><span m="207350">So we take this implication
  for granted and now we move to</span> <span m="211620">do some calculations
  for specific systems.</span></p><p><span m="215290">Consider a particular
  system that consists of three</span> <span
  m="218770">components.</span></p><p><span m="219950">And we will say that the
  system is &quot;up&quot;, if there</span> <span m="222770">exists a path from
  the left to the right that consists of</span> <span m="226050">units that are
  &quot;up&quot;.</span></p><p><span m="227460">So in this case, for the system
  to be &quot;up&quot;, we need all</span> <span m="230740">three components to
  be &quot;up&quot; and we proceed as follows.</span></p><p><span m="235870">The
  probability that the system is &quot;up&quot;--</span> <span m="240350">this
  is the event that the first unit is &quot;up&quot;, and the</span> <span
  m="245730">second unit is &quot;up&quot;, and the third unit is
  &quot;up&quot;.</span></p><p><span m="250200">And now we use independence to
  argue that this is equal to</span> <span m="254990">the probability that the
  first unit is &quot;up&quot; times the</span> <span m="258180">probability
  that the second unit is &quot;up&quot; times the</span> <span
  m="260820">probability that the third unit is
  &quot;up&quot;.</span></p><p><span m="263460">And in the notation that we have
  introduced this is just</span> <span m="266450">p1 times p2 times
  p3.</span></p><p><span m="271010">Now, let us consider a different
  system.</span></p><p><span m="274710">In this system, we will say that the
  system is &quot;up&quot;,</span> <span m="277870">again, if there exists a
  path from the left to the right</span> <span m="282010">that consists of units
  that are &quot;up&quot;.</span></p><p><span m="284610">In this particular case
  the system will be &quot;up&quot;, as long</span> <span m="288230">as at least
  one of those three components are &quot;up&quot;.</span></p><p><span
  m="292940">We would like again to calculate the probability that</span> <span
  m="296070">the system is &quot;up&quot;.</span></p><p><span m="303170">And the
  system will be &quot;up&quot;, as long as either unit 1 is</span> <span
  m="308270">&quot;up&quot;, or unit 2 is &quot;up&quot;, or unit 3 is
  &quot;up&quot;.</span></p><p><span m="315660">How do we continue from
  here?</span></p><p><span m="318410">We cannot use independence readily,
  because independence</span> <span m="321900">refers to probabilities of
  intersections of events,</span> <span m="324630">whereas here we have a
  union.</span></p><p><span m="326990">How do we turn a union into an
  intersection?</span></p><p><span m="330410">This is what De Morgan's Laws
  allow us to do, and involves</span> <span m="336040">taking
  complements.</span></p><p><span m="337690">Instead of using formally De
  Morgan's Laws, let's just</span> <span m="341000">argue
  directly.</span></p><p><span m="342490">Let us look at this
  event.</span></p><p><span m="345090">That unit 1 fails, and unit 2 fails, and
  unit 3 fails.</span></p><p><span m="350370">What is the relation between this
  event and the event that</span> <span m="353710">we have
  here.</span></p><p><span m="355140">They're complements.</span></p><p><span
  m="356800">Why is that?</span></p><p><span m="358830">Either all units fail,
  which is this event, or there exists</span> <span m="364080">at least one
  unit, which is &quot;up&quot;.</span></p><p><span m="367310">So since this
  event is the complement of that event, this</span> <span m="370860">means that
  their probabilities must add to 1, and therefore</span> <span m="374740">we
  have this relation.</span></p><p><span m="377590">And now we're in better
  shape, because we can use the</span> <span m="380820">independence of the
  events F to write this as 1 minus the</span> <span m="386910">product of the
  probabilities that each one</span> <span m="390190">of the units
  fails.</span></p><p><span m="393190">And with the notation that we have
  introduced using the</span> <span m="397280">pi's, this is as
  follows.</span></p><p><span m="400530">The probability that unit 1 fails is 1
  minus the</span> <span m="404200">probability that it is
  &quot;up&quot;.</span></p><p><span m="406630">Similarly, for the second unit,
  1 minus the probability</span> <span m="410159">that it is
  &quot;up&quot;.</span></p><p><span m="411270">And the same for the third
  unit.</span></p><p><span m="415770">So we have derived a formula that tells us
  the reliability,</span> <span m="420670">the probability that a system of this
  kind is &quot;up&quot; in terms</span> <span m="424660">of the probabilities
  of its individual components.</span></p><p><span m="430490">You will have an
  opportunity to deal with more examples of</span> <span m="433450">this kind, a
  little more complicated, in the problem</span> <span m="437290">that
  follows.</span></p><p><span m="438660">And even more complicated, in one of
  the problem-solving</span> <span m="442220">videos that we will have available
  for you.</span></p><p>&nbsp;</p>
uid: 948ac640270af76bf3553cc0f47b7203
type: courses
layout: video
---
