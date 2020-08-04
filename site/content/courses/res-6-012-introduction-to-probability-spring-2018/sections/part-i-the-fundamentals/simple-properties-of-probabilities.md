---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: WTyLg_I1oFY
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    title: Video-YouTube-Stream
    type: Video
    uid: bf9bbabb50e778c8597700ce5b12c619
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/WTyLg_I1oFY/default.jpg'
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1b418b79d6731686876afbbe1ed34f3b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: WTyLg_I1oFY
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b5cfc1d441d05ebfb86158f49e2cb29a
  - id: WTyLg_I1oFY.srt
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/simple-properties-of-probabilities/WTyLg_I1oFY.srt
    title: 3play caption file
    type: null
    uid: 6d5c8b22c65c8d865037da04b889b0da
  - id: WTyLg_I1oFY.pdf
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/simple-properties-of-probabilities/WTyLg_I1oFY.pdf
    title: 3play pdf file
    type: null
    uid: dfcf950e851650eac943774b24fa7a57
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: fae4891f339e1dc57bd732fd6afc721f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 48703947ead0c7659a6f3166173f2f84
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L01-05_300k.mp4
    parent_uid: 2f4a390f83726d51bac08079f1618ffb
    title: Video-Internet Archive-MP4
    type: Video
    uid: 97e95a607733c5b9bf7a2c4d8dd06e42
inline_embed_id: 99619203simplepropertiesofprobabilities7943595
order_index: 69
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: simple-properties-of-probabilities
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/simple-properties-of-probabilities
title: Simple Properties of Probabilities
transcript: >-
  <p><span m="2550">The probability axioms are the basic rules</span> <span
  m="5000">of probability theory.</span></p><p><span m="6710">And they are
  surprisingly few.</span></p><p><span m="9230">But they imply many interesting
  properties that we</span> <span m="11590">will now explore.</span></p><p><span
  m="13080">First we will see that what you might think of as missing</span>
  <span m="16910">axioms are actually implied by the axioms already in
  place.</span></p><p><span m="21920">For example, we have an axiom that
  probabilities are</span> <span m="26850">non-negative.</span></p><p><span
  m="29130">We will show that probabilities are also less</span> <span
  m="34010">than or equal to 1.</span></p><p><span m="36600">We have another
  axiom that says that the probability of</span> <span m="40260">the entire
  sample space is 1.</span></p><p><span m="42840">We will show a counterpart
  that the probability of the</span> <span m="45740">empty set is equal to
  0.</span></p><p><span m="48540">This makes perfect sense.</span></p><p><span
  m="49920">The empty set has no elements, so it is
  impossible.</span></p><p><span m="53720">There is 0 probability that the
  outcome of the experiment</span> <span m="57720">would lie in the empty
  set.</span></p><p><span m="60790">We also have another intuitive
  property.</span></p><p><span m="63430">The probability that an event happens
  plus the probability</span> <span m="67460">that the vendor does not happen
  exhaust all</span> <span m="70550">possibilities.</span></p><p><span
  m="71720">And these two probabilities together should add to
  1.</span></p><p><span m="74630">For instance, if the probability of heads is
  0.6,</span> <span m="77920">then the probability of tails should be
  0.4.</span></p><p><span m="82430">Finally, we can generalize the additivity
  axiom, which was</span> <span m="86100">originally given for the case of two
  disjoint events to the</span> <span m="92320">case where we're dealing with
  the union of</span> <span m="95270">several disjoint
  events.</span></p><p><span m="98690">By disjoint here we mean that the
  intersection of any two of</span> <span m="103140">these events is the empty
  set.</span></p><p><span m="105840">We will prove this for the case of three
  events and then</span> <span m="108970">the argument generalizes for the case
  where we're taking</span> <span m="112310">the union of k disjoint events,
  where k</span> <span m="115490">is any finite number.</span></p><p><span
  m="117750">So the intuition of this result is the same as for the</span> <span
  m="120210">case of two events.</span></p><p><span m="121730">But we will
  derive it formally and we will also use it to</span> <span m="125480">come up
  with a way of calculating the probability of</span> <span m="128259">a finite
  set by simply adding the probabilities of its</span> <span
  m="132740">individual elements.</span></p><p><span m="134800">All of these
  statements that we just</span> <span m="138110">presented are
  intuitive.</span></p><p><span m="140650">And you do not to really need to
  be</span> <span m="142430">convinced about their validity.</span></p><p><span
  m="144760">Nevertheless, it is instructive to see how these</span> <span
  m="147940">statements follow from the axioms that</span> <span m="151260">we
  have put in place.</span></p><p><span m="155210">So we will now present the
  arguments based only on the</span> <span m="159550">three axioms that we have
  available.</span></p><p><span m="161690">And in order to be able to refer to
  these axioms, let us</span> <span m="165440">give them some names, call them
  axioms A, B, and C.</span></p><p><span m="171310">We start as
  follows.</span></p><p><span m="172930">Let us look at the sample space and a
  subset of that</span> <span m="177390">sample space.</span></p><p><span
  m="178640">Call it A. And consider the complement of that
  subset.</span></p><p><span m="183550">The complement is the set of all
  elements that do not</span> <span m="186810">belong to the set A. So a set
  together with its complement</span> <span m="192750">make up everything, which
  is the entire sample space.</span></p><p><span m="196960">On the other hand,
  if an element belongs to a set A, it</span> <span m="199680">does not belong
  to its complement.</span></p><p><span m="201740">So the intersection of a set
  with its complement</span> <span m="204290">is the empty
  set.</span></p><p><span m="207020">Now we argue as follows.</span></p><p><span
  m="211210">We have that the probability of the entire sample space is</span>
  <span m="215720">equal to 1.</span></p><p><span m="218510">This is true by our
  second axiom.</span></p><p><span m="222300">Now the sample space, as we just
  discussed, can be written</span> <span m="225640">as the union of an event and
  the complement of that event.</span></p><p><span m="230290">This is just a set
  theoretic relation.</span></p><p><span m="234610">And next since a set and its
  complement our disjoint, this</span> <span m="240950">means that we can apply
  the additivity axiom and write</span> <span m="245020">this probability as the
  sum of the probability of event A</span> <span m="249560">with the probability
  of the complement of A. This is one</span> <span m="254250">of the relations
  that we had claimed and which we have now</span> <span
  m="258190">established.</span></p><p><span m="259730">Based on this relation,
  we can also write that the</span> <span m="263310">probability of an event A
  is equal to 1 minus the</span> <span m="267610">probability of the complement
  of that event.</span></p><p><span m="271450">And because, by the
  non-negativity axiom this</span> <span m="275280">quantity here is
  non-negative, 1 minus something non-negative</span> <span m="279570">is less
  than or equal to 1.</span></p><p><span m="281980">We're using here the
  non-negativity axiom.</span></p><p><span m="284530">And we have established
  another property, namely that</span> <span m="287480">probabilities are always
  less than or equal to 1.</span></p><p><span m="293440">Finally, let us note
  that 1 is the probability, always, of a</span> <span m="304920">set plus the
  probability of a complement of that set.</span></p><p><span m="310680">And let
  us use this property for the case where the set of</span> <span
  m="313810">interest is the entire sample space.</span></p><p><span
  m="318020">Now, the probability of the entire sample space is itself</span>
  <span m="321780">equal to 1.</span></p><p><span m="324740">And what is the
  complement of the entire sample space?</span></p><p><span m="328560">The
  complement of the entire sample space consists of all</span> <span
  m="331510">elements that do not belong to the sample space.</span></p><p><span
  m="334050">But since the sample space is supposed to contain all</span> <span
  m="338290">possible elements, its complement is</span> <span m="341030">just
  the empty set.</span></p><p><span m="343420">And from this relation we get the
  implication that the</span> <span m="346130">probability of the empty set is
  equal to 0.</span></p><p><span m="350820">This establishes yet one more of the
  properties that we had</span> <span m="354380">just claimed a little
  earlier.</span></p><p><span m="360060">We finally come to the proof of the
  generalization of our</span> <span m="363390">additivity axiom from the case
  of two disjoint events to the</span> <span m="367110">case of three disjoint
  events.</span></p><p><span m="369540">So we have our sample
  space.</span></p><p><span m="372420">And within that sample space we have
  three</span> <span m="375650">events, three subsets.</span></p><p><span
  m="377910">And these subsets are disjoint in the sense that any two of</span>
  <span m="381170">those subsets have no elements in common.</span></p><p><span
  m="384920">And we're interested in the probability of the union of A,</span>
  <span m="389190">B, and C.</span></p><p><span m="390650">How do we make
  progress?</span></p><p><span m="392470">We have an additivity axiom in our
  hands, which applies to</span> <span m="395750">the case of the union of two
  disjoint sets.</span></p><p><span m="398909">Here we have three of
  them.</span></p><p><span m="400650">But we can do the following
  trick.</span></p><p><span m="402870">We can think of the union of A, B, and C
  as consisting of</span> <span m="406970">the union of this blue set with that
  green set.</span></p><p><span m="414950">Formally, what we're doing is that
  we're expressing the</span> <span m="418720">union of these three sets as
  follows.</span></p><p><span m="421790">We form one set by taking the union of
  A with B. And we have</span> <span m="427330">the other set C. And the overall
  union can be thought</span> <span m="431220">of as the union of these two
  sets.</span></p><p><span m="434080">Now since the three sets are disjoint,
  this implies that</span> <span m="437860">the blue set is disjoint from the
  green set and so we can</span> <span m="441830">use the additivity axiom here
  to write this probability as</span> <span m="445990">the probability of A
  union B plus the probability of C. And</span> <span m="453310">now we can use
  the additivity axiom once more since the sets</span> <span m="456570">A and B
  are disjoint to write the first term as probability</span> <span m="460659">of
  A plus probability of B. We carry over the last term and</span> <span
  m="465020">we have the relation that we wanted to prove.</span></p><p><span
  m="468200">This is the proof for the case of three events.</span></p><p><span
  m="470409">You should be able to follow this line of proof to write an</span>
  <span m="474060">argument for the case of four events and so
  on.</span></p><p><span m="476850">And you might want to continue by
  induction.</span></p><p><span m="479750">And eventually you should be able to
  prove that if the sets</span> <span m="484340">A1 up to Ak are disjoint then
  the probability of the union</span> <span m="496300">of those sets is going to
  be equal to the sum of their</span> <span m="505290">individual
  probabilities.</span></p><p><span m="508150">So this is the generalization to
  the case where we're</span> <span m="511180">dealing with the union of
  finitely many disjoint events.</span></p><p><span m="517570">A very useful
  application of this comes in the case where</span> <span m="523140">we want to
  calculate the probability of a finite set.</span></p><p><span m="528800">So
  here we have a sample space.</span></p><p><span m="532960">And within that
  sample space we have some particular</span> <span m="537910">elements S1, S2,
  up to Sk, k of them.</span></p><p><span m="542370">And these elements together
  form a finite set.</span></p><p><span m="547570">What can we say about the
  probability</span> <span m="549470">of this finite set?</span></p><p><span
  m="551850">The idea is to take this finite set that consists of k</span> <span
  m="557270">elements and think of it as the union of several little</span>
  <span m="562800">sets that contain one element each.</span></p><p><span
  m="567810">So set theoretically what we're doing is that we're</span> <span
  m="571010">taking this set with k elements and we write it as</span> <span
  m="574980">the union of a set that contains just S1, a set that</span> <span
  m="579210">contains just the second element S2, and so on, up to</span> <span
  m="583820">the k-th element.</span></p><p><span m="587710">We're assuming, of
  course, that these elements are all</span> <span m="590800">different from
  each other.</span></p><p><span m="593010">So in that case, these sets, these
  single element sets, are</span> <span m="596630">all
  disjoint.</span></p><p><span m="598010">So using the additivity property for a
  union of k</span> <span m="601990">disjoint sets, we can write this as the sum
  of the</span> <span m="607300">probabilities of the different single element
  sets.</span></p><p><span m="616770">At this point, it is usual to start
  abusing, or rather,</span> <span m="621180">simplifying notation a little
  bit.</span></p><p><span m="623570">Probabilities are assigned to
  sets.</span></p><p><span m="626020">So here we're talking about the
  probability of a set that</span> <span m="629080">contains a single
  element.</span></p><p><span m="630910">But intuitively, we can also talk as
  just the probability</span> <span m="634870">of that particular element and
  use this simpler notation.</span></p><p><span m="639880">So when using the
  simpler notation, we will be talking</span> <span m="643450">about the
  probabilities of individual elements.</span></p><p><span m="646930">Although
  in terms of formal mathematics, what we really</span> <span m="649960">mean is
  the probability of this event that's comprised</span> <span m="656490">only of
  a particular element S1 and so on.</span></p><p>&nbsp;</p>
uid: 2f4a390f83726d51bac08079f1618ffb
type: course
layout: video
---
