---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8llkkbCPHb4
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    title: Video-YouTube-Stream
    type: Video
    uid: 12b65c7db100904c59722ae3c27f0862
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8llkkbCPHb4/default.jpg'
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9ee3ed28bcbea0b37fcc196fdb8b4c16
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8llkkbCPHb4
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ab0c69bae936a2c92d118ca71984d866
  - id: 8llkkbCPHb4.srt
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/binomial-probabilities/8llkkbCPHb4.srt
    title: 3play caption file
    type: null
    uid: 3701bf3914b052baf219a133d5b42c39
  - id: 8llkkbCPHb4.pdf
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/binomial-probabilities/8llkkbCPHb4.pdf
    title: 3play pdf file
    type: null
    uid: fac61fef796d76aee1c99bd5622001e8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f53bd8fb951959dca9d97d4975fbf308
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e35d2ef8781f367064053632296f5b64
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-05_300k.mp4
    parent_uid: 5e80ae3b12c956aaa4d3bbf144fa9113
    title: Video-Internet Archive-MP4
    type: Video
    uid: aa6239d7c4d8c7ea8028e146d19c87e1
inline_embed_id: 13124813binomialprobabilities9036997
order_index: 420
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: binomial-probabilities
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/binomial-probabilities
title: Binomial Probabilities
transcript: >-
  <p><span m="0">The coefficients n-choose-k that we calculated in the</span>
  <span m="4320">previous segment are known as the binomial
  coefficients.</span></p><p><span m="8220">They are intimately related to
  certain probabilities</span> <span m="11060">associated with coin tossing
  models, the so-called binomial</span> <span
  m="15590">probabilities.</span></p><p><span m="16930">This is going to be our
  subject.</span></p><p><span m="19670">We consider a coin which we toss n times
  in a row,</span> <span m="25540">independently.</span></p><p><span
  m="28190">For each one of the tosses of this coin, we assume that</span> <span
  m="31840">there is a certain probability, p, that the</span> <span
  m="34360">result is heads, which of course, implies that the</span> <span
  m="38290">probability of obtaining tails in any particular toss is</span>
  <span m="42340">going to be 1 minus p.</span></p><p><span m="45180">The
  question we want to address is the following.</span></p><p><span m="49740">We
  want to calculate the probability that in those n</span> <span
  m="53400">independent coin tosses, we're going to</span> <span
  m="56010">observe exactly k heads.</span></p><p><span m="62060">Let us start
  working our way towards the solution to this</span> <span m="65980">problem by
  looking first at a simple setting</span> <span m="70600">and then move
  on.</span></p><p><span m="73300">So let us answer this simple
  question.</span></p><p><span m="76600">What is the probability that we
  observe</span> <span m="79530">this particular sequence?</span></p><p><span
  m="81940">Of course here we take n equal to six, and we wish to</span> <span
  m="86780">calculate this probability.</span></p><p><span m="89020">Now,
  because we have assumed that the coin tosses are</span> <span
  m="92200">independent, we can multiply probabilities.</span></p><p><span
  m="95250">So the probability of this sequence is equal to the</span> <span
  m="98000">probability that the first toss is heads times the</span> <span
  m="102690">probability that the second toss is tails, which is 1</span> <span
  m="105850">minus p, times the probability that the third toss is tails,</span>
  <span m="109860">which is 1 minus p, times the probability of heads,
  times</span> <span m="113460">the probability of heads, times the</span> <span
  m="114820">probability of heads.</span></p><p><span m="116289">And by
  collecting terms, this is p to the 4th times 1 minus</span> <span m="121290">p
  to the second power.</span></p><p><span m="125880">More generally, if I give
  you a particular sequence of heads</span> <span m="131840">and tails, as in
  this example, and I ask you, what is the</span> <span m="135910">probability
  that this particular sequence is</span> <span m="138710">observed, then by
  generalizing from this answer or from the</span> <span m="145160">derivation
  of this answer, you see that you're going to get p</span> <span m="151170">to
  the power number of heads.</span></p><p><span m="156120">And the reason is
  that each time that there's a head</span> <span m="159940">showing up in this
  sequence, there's a corresponding factor</span> <span m="163220">of p in this
  numerical answer.</span></p><p><span m="166570">And then there are factors
  associated with tails.</span></p><p><span m="170450">Each tail contributes a
  factor of 1 minus p.</span></p><p><span m="174050">And so we're going to have
  here 1 minus p to a power</span> <span m="177980">equal to the number of
  tails.</span></p><p><span m="184050">Now, if I ask you about the probability
  of a particular</span> <span m="188270">sequence and that particular sequence
  has happened to have</span> <span m="191720">exactly k heads, what is the
  probability of that sequence?</span></p><p><span m="195400">Well, we already
  calculated what it is.</span></p><p><span m="198340">It is the previous
  answer, except we use the symbol k</span> <span m="202920">instead of just
  writing out explicitly &quot;number of heads.&quot;</span> <span
  m="207560">And the number of tails is the number of tosses minus how</span>
  <span m="211960">many tosses resulted in heads.</span></p><p><span
  m="216400">Now, we're ready to consider the actual problem that we</span>
  <span m="220810">want to solve, which is calculate the</span> <span
  m="223100">probability of k heads.</span></p><p><span m="226010">The event of
  obtaining k heads can happen in</span> <span m="230270">many different
  ways.</span></p><p><span m="232490">Any particular k-head sequence makes that
  event to occur.</span></p><p><span m="238280">Any particular k-head sequence
  has a probability equal to</span> <span m="244590">this
  expression.</span></p><p><span m="246840">The overall probability of k heads
  is going to be the</span> <span m="251170">probability of any particular
  k-head sequence, times the</span> <span m="258230">number of k-head sequences
  that we have.</span></p><p><span m="267490">Now, the reason why we can carry
  out this argument is the</span> <span m="271800">fact that any k-head sequence
  has the same probability.</span></p><p><span m="276090">Otherwise, we wouldn't
  be able to write down an answer which</span> <span m="279520">is just the
  product of two terms.</span></p><p><span m="281980">But because every k-head
  sequence has the same</span> <span m="284600">probability, to find the overall
  probability, we take</span> <span m="287860">the probability of each one of
  them and multiply it with the</span> <span m="292050">number of how many of
  these we have.</span></p><p><span m="295360">So to make further progress, now
  we need to calculate the</span> <span m="300110">number of possible k-head
  sequences.</span></p><p><span m="303550">How many are
  there?</span></p><p><span m="305920">Well, specifying a k-head sequence
  is</span> <span m="309340">the same as the following.</span></p><p><span
  m="311160">You think of having n time slots.</span></p><p><span
  m="314580">These time slots corresponds to the different</span> <span
  m="317590">tosses of your coin.</span></p><p><span m="320240">And to specify a
  k-head sequence, you need to tell me</span> <span m="324410">which ones of
  these slots happen to contain a head.</span></p><p><span m="331610">You need
  to tell me k of those slots.</span></p><p><span m="335420">So in other words,
  what you're doing is you're specifying a</span> <span m="340800">subset of the
  set of these n slots, a</span> <span m="345460">subset that has k
  elements.</span></p><p><span m="348290">You need to choose k of the slots out
  of the n and tell me</span> <span m="353070">that those k slots have
  heads.</span></p><p><span m="355630">That's the way of specifying a particular
  k-head sequence.</span></p><p><span m="359560">So what's the number of k-head
  sequences?</span></p><p><span m="362630">Well, it's the same as the number of
  ways that you can</span> <span m="365760">choose k slots out of the n slots,
  which is our binomial</span> <span m="371110">coefficient,
  n-choose-k.</span></p><p><span m="374410">Therefore, the answer to our problem
  is this expression</span> <span m="378420">here, times n-choose-k, which is
  shown up here.</span></p><p><span m="385590">At this point, we can pause and
  consider a simple question</span> <span m="390080">to check your understanding
  of the binomial probabilities.</span></p><p>&nbsp;</p>
uid: 5e80ae3b12c956aaa4d3bbf144fa9113
type: courses
layout: video
---
