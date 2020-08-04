---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ugzs7dgQ-JE
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    title: Video-YouTube-Stream
    type: Video
    uid: 06cb5ccedc6b6ef68b6b6c3ba1f90eee
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ugzs7dgQ-JE/default.jpg'
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: f53dcb4820a3e5b376bc06297bd1e9f1
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ugzs7dgQ-JE
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 61079b8f53467672b02cf573cb739f4e
  - id: ugzs7dgQ-JE.srt
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-multiplication-rule/ugzs7dgQ-JE.srt
    title: 3play caption file
    type: null
    uid: cdc48d69cbe911210b80dc59333500b2
  - id: ugzs7dgQ-JE.pdf
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-multiplication-rule/ugzs7dgQ-JE.pdf
    title: 3play pdf file
    type: null
    uid: c22535b6cb3fad2f45dc1e4947ea2afc
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ef3f0430da5b2459afc1c3e87b6700b1
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 25b81b77cb285398ce7652d81345cd8b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L02-06_300k.mp4
    parent_uid: 1e223a365540ee0c4e87ffe5b9e89b67
    title: Video-Internet Archive-MP4
    type: Video
    uid: 21d6076e5cffc7bd4265d08869683760
inline_embed_id: 60402355themultiplicationrule7869877
order_index: 267
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-multiplication-rule
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-multiplication-rule
title: The Multiplication Rule
transcript: >-
  <p><span m="680">As promised, we will now start developing generalizations
  of</span> <span m="4310">the different calculations that we carried out in
  the</span> <span m="6840">context of the radar example.</span></p><p><span
  m="9000">The first kind of calculation that we carried out goes under</span>
  <span m="11920">the name of the multiplication rule.</span></p><p><span
  m="14380">And it goes as follows.</span></p><p><span m="16129">Our starting
  point is the definition of conditional</span> <span
  m="18650">probabilities.</span></p><p><span m="19950">The conditional
  probability of A given another event, B, is</span> <span m="23470">the
  probability that both events have occurred divided</span> <span m="26720">by
  the probability of the conditioning event.</span></p><p><span m="29590">We now
  take the denominator term and send it to the other</span> <span m="32940">side
  of this equality to obtain this relation, which we</span> <span m="36850">can
  interpret as follows.</span></p><p><span m="38650">The probability that two
  events occur is equal to the</span> <span m="42760">probability that a first
  event occurs, event B in this case,</span> <span m="47450">times the
  conditional probability that the second</span> <span m="49940">event, event A,
  occurs, given that event B has occurred.</span></p><p><span m="55360">Now, out
  of the two events, A and B, we're of course free to</span> <span
  m="59310">choose which one we call the first event and which one we</span>
  <span m="62320">call the second event.</span></p><p><span m="63810">So the
  probability of the two events happening is also equal</span> <span
  m="68100">to an expression of this form, the probability that A occurs</span>
  <span m="71840">times the conditional probability that B occurs,</span> <span
  m="74380">given that A has occurred.</span></p><p><span m="77600">We used this
  formula in the context of a tree diagram.</span></p><p><span m="81789">And we
  used it to calculate the probability of a leaf of</span> <span m="86000">this
  tree by multiplying the probability of taking this</span> <span
  m="90480">branch, the probability that A occurs, times the conditional</span>
  <span m="94820">probability of taking this branch, the probability that</span>
  <span m="98400">event B also occurs given that event A has
  occurred.</span></p><p><span m="104180">How do we generalize this
  calculation?</span></p><p><span m="106810">Consider a situation in which the
  experiment has an</span> <span m="109570">additional third stage that has to
  do with another event,</span> <span m="113680">C, that may or may not
  occur.</span></p><p><span m="117400">For example, if we have arrived here, A
  and B have</span> <span m="121020">both occurred.</span></p><p><span
  m="122110">And then C also occurs, then we reach this particular leaf</span>
  <span m="127080">of the tree.</span></p><p><span m="128199">Or there could be
  other scenarios.</span></p><p><span m="130220">For example, it could be the
  case that A did not occur.</span></p><p><span m="134910">Then event B
  occurred, and finally, event C did not</span> <span m="140510">occur, in which
  case we end up at this particular leaf.</span></p><p><span m="144880">What is
  the probability of this scenario happening?</span></p><p><span m="149370">Let
  us try to do a calculation similar to the one that we</span> <span
  m="152590">used for the case of two events.</span></p><p><span
  m="155990">However, we need to deal here with three events.</span></p><p><span
  m="160220">What should we do?</span></p><p><span m="162010">Well, we look at
  the intersection of these three</span> <span m="164400">events and think of it
  as the intersection of a composite</span> <span m="168890">event, A complement
  intersection B, then</span> <span m="173390">intersected with the event C
  complement.</span></p><p><span m="178230">Clearly, you can form the
  intersection of three events</span> <span m="181280">by first taking the
  intersection of two of them</span> <span m="184370">and then intersecting with
  a third.</span></p><p><span m="186900">After we group things this way, we're
  dealing with the</span> <span m="189420">probability of two events happening,
  this composite</span> <span m="193140">event and this ordinary
  event.</span></p><p><span m="195730">And the probability of two events
  happening is equal to</span> <span m="200230">the probability that the first
  event happens, and then the</span> <span m="207630">probability that the
  second event happens, given that the</span> <span m="212070">first one has
  happened.</span></p><p><span m="217750">Can we simplify this even
  further?</span></p><p><span m="220310">Yes.</span></p><p><span m="220900">The
  first term is the probability</span> <span m="222780">of two events
  happening.</span></p><p><span m="224400">So it can be simplified further as
  the probability</span> <span m="228130">that A complement occurs times the
  conditional probability</span> <span m="232740">that B occurs, given that A
  complement has occurred.</span></p><p><span m="237310">And then we carry over
  the last term</span> <span m="239810">exactly the way it
  is.</span></p><p><span m="246230">The conclusion is that we can calculate the
  probability of</span> <span m="249400">this leaf by multiplying the
  probability of the first</span> <span m="253190">branch times the conditional
  probability of the second</span> <span m="257649">branch, given that the first
  branch was taken, and then</span> <span m="264070">finally multiply with the
  probability of the third</span> <span m="268710">branch, which is the
  probability that C complement</span> <span m="271480">occurs, given that A
  complement and B</span> <span m="275110">have already
  occurred.</span></p><p><span m="278250">In other words, we can calculate the
  probability of a</span> <span m="281192">leaf by just multiplying the
  probabilities of the different</span> <span m="285800">branches involved and
  where we use conditional probabilities</span> <span m="289909">for the
  intermediate branches.</span></p><p><span m="291970">At this point, you can
  use your imagination to see that</span> <span m="295490">such a formula should
  also be valid for the case of more</span> <span m="298950">than three
  events.</span></p><p><span m="300610">The probability that a bunch of events
  all occur should be</span> <span m="304950">the probability of the first event
  times a number of</span> <span m="309180">factors, each corresponding to a
  branch in a</span> <span m="312390">tree of this kind.</span></p><p><span
  m="314500">In particular, the probability that events A1, A2, up to An</span>
  <span m="325220">all occur is going to be the probability that the
  first</span> <span m="330520">event occurs times a product of conditional
  probabilities</span> <span m="337880">that the i-th event occurs, given that
  all of the previous</span> <span m="343380">events have already
  occurred.</span></p><p><span m="350710">And we obtain a term of this kind for
  every event, Ai,</span> <span m="354980">after the first one, so this product
  ranges from 2 up to n.</span></p><p><span m="362860">And this is the most
  general version of the multiplication</span> <span m="365730">rule and allows
  you to calculate the probability of</span> <span m="368970">several events
  happening by multiplying probabilities and</span> <span m="373590">conditional
  probabilities.</span></p><p>&nbsp;</p>
uid: 1e223a365540ee0c4e87ffe5b9e89b67
type: course
layout: video
---
