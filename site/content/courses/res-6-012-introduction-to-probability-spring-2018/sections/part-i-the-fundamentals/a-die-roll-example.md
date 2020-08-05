---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: YenDB3yOfDc
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    title: Video-YouTube-Stream
    type: Video
    uid: e0a69c6e875d18379ff497b3d9fadbe3
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/YenDB3yOfDc/default.jpg'
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bfec0f8f358611a73c1bc23e060c44c6
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: YenDB3yOfDc
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d6bec9f10f9bf3c4c46d177d4dada792
  - id: YenDB3yOfDc.srt
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-die-roll-example/YenDB3yOfDc.srt
    title: 3play caption file
    type: null
    uid: e5063dd5a39bae2d729610407c18bf5b
  - id: YenDB3yOfDc.pdf
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-die-roll-example/YenDB3yOfDc.pdf
    title: 3play pdf file
    type: null
    uid: 735dd8ef6cb0eeb3e84d750f9df3d3d3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b01528021edb122c489f58082932d3ed
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d981f30cc7827014b1f31e614ef6a5a8
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L02-03_300k.mp4
    parent_uid: 847c1d70d7d27088f1ec3618f70fa520
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6d9d72f9bfe42d11d8f8a7a27a4e51b4
inline_embed_id: 81573691adierollexample61131124
order_index: 240
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: a-die-roll-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-die-roll-example
title: A Die Roll Example
transcript: >-
  <p><span m="2910">This is a simple example where we want to just apply
  the</span> <span m="6670">formula for conditional probabilities</span> <span
  m="8630">and see what we get.</span></p><p><span m="10610">The example
  involves a four-sided die, if you can</span> <span m="15140">imagine such an
  object, which we roll twice, and we record</span> <span m="19300">the first
  roll, and the second roll.</span></p><p><span m="21830">So there are 16
  possible outcomes.</span></p><p><span m="24660">We assume to keep things
  simple, that each one of those</span> <span m="28350">16 possible outcomes,
  each one of them has the same</span> <span m="32820">probability, so each
  outcome has the probability 1/16.</span></p><p><span m="39820">Let us consider
  now a particular event B on which</span> <span m="43250">we're going to
  condition.</span></p><p><span m="44460">This is the event under which the
  smaller of the two die</span> <span m="49286">rolls is equal to 2, which means
  that one of the dice</span> <span m="53990">must have resulted in two, and the
  other die has resulted in</span> <span m="57970">something which is 2 or
  larger.</span></p><p><span m="61220">So this can happen in multiple
  ways.</span></p><p><span m="63800">And here are the different ways that it can
  happen.</span></p><p><span m="67130">So at 2, 2, or 2, 3, or 2, 4; then a 3, 2
  and a 4, 2.</span></p><p><span m="74100">All of these are outcomes in which
  one of the dice has a</span> <span m="78080">value equal to 2, and the other
  die</span> <span m="80200">is at least as large.</span></p><p><span
  m="82880">So we condition on this event.</span></p><p><span m="85560">This
  results in a conditional model where each one of those</span> <span
  m="89520">five outcomes are equally likely since they used to be</span> <span
  m="93820">equally likely in the original model.</span></p><p><span
  m="96759">Now let's look at this quantity.</span></p><p><span m="98539">The
  maximum of the two die rolls--</span> <span m="101340">that is, the largest of
  the results.</span></p><p><span m="103960">And let us try to calculate the
  following quantity--</span> <span m="107710">the conditional probability that
  the maximum is equal to 1</span> <span m="112240">given that the minimum is
  equal to 2.</span></p><p><span m="115420">So this is the conditional
  probability of</span> <span m="117820">this particular
  outcome.</span></p><p><span m="120050">Well, this particular outcome cannot
  happen.</span></p><p><span m="122480">If I tell you that the smaller number is
  2, then the larger</span> <span m="126450">number cannot be equal to 1, so
  this outcome is impossible,</span> <span m="130669">and therefore this
  conditional probability is equal to 0.</span></p><p><span m="134870">Let's do
  something a little more interesting.</span></p><p><span m="137550">Let us now
  look at the conditional probability that</span> <span m="140910">the maximum
  is equal to 3 given the information that</span> <span m="146690">event B has
  occurred.</span></p><p><span m="149190">It's best to draw a picture and see
  what that event</span> <span m="152210">corresponds to.</span></p><p><span
  m="153990">M is equal to 3--</span> <span m="155829">the maximum is equal to
  3--</span> <span m="158110">if one of the dice resulted in a 3, and the other
  die</span> <span m="164500">resulted in something that's 3 or
  less.</span></p><p><span m="168190">So this event here corresponds to the
  blue</span> <span m="173770">region in this diagram.</span></p><p><span
  m="176630">Now let us try to calculate the conditional probability by</span>
  <span m="180610">just following the definition.</span></p><p><span
  m="183110">The conditional probability of one event given another is
  the</span> <span m="187910">probability that both of them--</span> <span
  m="190860">both of the two events--</span> <span m="192900">occur, divided by
  the probability of the</span> <span m="198810">conditioning
  event.</span></p><p><span m="200690">That is, out of the total probability in
  the</span> <span m="203880">conditioning event, we ask, what fraction of
  that</span> <span m="207000">probability is assigned to outcomes in which the
  event of</span> <span m="211060">interest is also
  happening?</span></p><p><span m="213730">So what is this
  event?</span></p><p><span m="216200">The maximum is equal to 3, which is the
  blue event.</span></p><p><span m="220100">And simultaneously, the red event is
  happening.</span></p><p><span m="224500">These two events intersect only in
  two places.</span></p><p><span m="228840">This is the intersection of the two
  events.</span></p><p><span m="232020">And the probability of that intersection
  is 2 out of 16,</span> <span m="238480">since there's 16 outcomes and that
  event happens only with</span> <span m="242720">two particular
  outcomes.</span></p><p><span m="244910">So this gives us 2/16 in the
  numerator.</span></p><p><span m="249360">How about the
  denominator?</span></p><p><span m="251210">Event B consists of a total of five
  possible outcomes.</span></p><p><span m="254990">Each one has probability
  1/16, so this is 5/16, so the final</span> <span m="260360">answer is
  2/5.</span></p><p><span m="263860">We could have gotten that same answer in a
  simple and perhaps</span> <span m="268470">more intuitive
  way.</span></p><p><span m="269870">In the original model, all outcomes were
  equally likely.</span></p><p><span m="273409">Therefore, in the conditional
  model, the five outcomes that</span> <span m="277470">belong to B should also
  be equally likely.</span></p><p><span m="281470">Out of those five, there's
  two of them that make the event of</span> <span m="285980">interest to
  occur.</span></p><p><span m="288190">So given that we live in B, there's two
  ways out of five</span> <span m="292500">that the event of interest will
  materialize.</span></p><p><span m="294940">So the event of interest has</span>
  <span m="297159">conditional probability [equal to]</span> <span
  m="299230">2/5.</span></p><p>&nbsp;</p>
uid: 847c1d70d7d27088f1ec3618f70fa520
type: course
layout: video
---
