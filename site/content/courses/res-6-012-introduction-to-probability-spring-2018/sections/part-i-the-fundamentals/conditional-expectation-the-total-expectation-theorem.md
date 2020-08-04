---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: vJAG4EzSQZA
    parent_uid: 84c3d8842f06242217278b44e1672699
    title: Video-YouTube-Stream
    type: Video
    uid: 2f1bc643b3d0ce7815c7fd2d5c8cdb22
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/vJAG4EzSQZA/default.jpg'
    parent_uid: 84c3d8842f06242217278b44e1672699
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0987f194afd045cb2c88aeb0c5326f94
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: vJAG4EzSQZA
    parent_uid: 84c3d8842f06242217278b44e1672699
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e1cc191500f2363ba38029a50734971e
  - id: vJAG4EzSQZA.srt
    parent_uid: 84c3d8842f06242217278b44e1672699
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-expectation-the-total-expectation-theorem/vJAG4EzSQZA.srt
    title: 3play caption file
    type: null
    uid: d227bdad28ab191ae69e4fa3ca20875f
  - id: vJAG4EzSQZA.pdf
    parent_uid: 84c3d8842f06242217278b44e1672699
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-expectation-the-total-expectation-theorem/vJAG4EzSQZA.pdf
    title: 3play pdf file
    type: null
    uid: e388ebb33145cb06b7dd5b5ffad98a38
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 84c3d8842f06242217278b44e1672699
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0ef846d22cadb4f8ba5fa3b872ad0964
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 84c3d8842f06242217278b44e1672699
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f991f2a8ee99474bded972ffb62ca28a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L07-03_300k.mp4
    parent_uid: 84c3d8842f06242217278b44e1672699
    title: Video-Internet Archive-MP4
    type: Video
    uid: 61a89e8f4091e1282619b1c613e2c50b
inline_embed_id: 70537203conditionalexpectationthetotalexpectationtheorem72488261
order_index: 663
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: conditional-expectation-the-total-expectation-theorem
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-expectation-the-total-expectation-theorem
title: Conditional Expectation & the Total Expectation Theorem
transcript: >-
  <p><span m="1370">We will now talk about conditional expectations of</span>
  <span m="4250">one random variable given another.</span></p><p><span
  m="7280">As we will see, there will be nothing new here, except for</span>
  <span m="11240">older results but given in new notation.</span></p><p><span
  m="14560">Any PMF has an associated expectation.</span></p><p><span
  m="17840">And so conditional PMFs also have associated expectations,</span>
  <span m="23550">which we call conditional expectations.</span></p><p><span
  m="26420">We have already seen them for the case where we condition on</span>
  <span m="29630">an event, A.</span></p><p><span m="31400">The case where we
  condition on random variables</span> <span m="34850">is exactly the
  same.</span></p><p><span m="37440">We let the event, A, be the event that Y
  takes on a</span> <span m="42660">specific value.</span></p><p><span
  m="45970">And then we calculate the expectation using the relevant</span>
  <span m="50780">conditional probabilities, those that are given by the</span>
  <span m="53500">conditional PMF.</span></p><p><span m="55010">So the
  conditional expectation of X given that Y takes on a</span> <span
  m="59380">certain value is defined as the usual expectation, except</span>
  <span m="64920">that we use the conditional probabilities that apply
  given</span> <span m="68710">that Y takes on a specific value little
  y.</span></p><p><span m="74289">Recall now the expected value rule for
  ordinary</span> <span m="77460">expectations.</span></p><p><span m="79300">And
  also the Expected Value Rule for conditional</span> <span
  m="82480">expectations given an event, something that we</span> <span
  m="85310">have already seen.</span></p><p><span m="87630">Now, in PMF
  notation, the expected value rule takes a</span> <span m="92640">similar
  form.</span></p><p><span m="94550">The event, A is replaced by the specific
  event that Y</span> <span m="99259">takes on a specific
  value.</span></p><p><span m="101490">And in that case, the conditional PMF
  given the</span> <span m="104620">event A is just the conditional PMF given
  that</span> <span m="108310">random variable Y takes on a specific value,
  little y.</span></p><p><span m="114550">For the case where we condition on
  events, we also</span> <span m="118210">developed a version of the total
  probability theorem and</span> <span m="122000">the total expectation
  theorem.</span></p><p><span m="125910">We can do the same when we condition on
  random variables.</span></p><p><span m="129360">So suppose that the sample
  space has been partitioned</span> <span m="132650">into n, disjoint
  scenarios.</span></p><p><span m="135910">The total probability theorem tells
  us that the probability</span> <span m="139579">of the event that random
  variable X takes on a value</span> <span m="146190">little x, can be found by
  taking the probabilities of</span> <span m="150610">this event under each one
  of the possible scenarios.</span></p><p><span m="155079">And then weighing
  those probabilities according to the</span> <span m="158870">probabilities of
  the different scenarios.</span></p><p><span m="163390">Now, suppose that we
  are dealing with a random variable</span> <span m="167160">that takes values
  in a set consisting of n elements.</span></p><p><span m="177300">And let us
  consider scenarios Ai, the i-th scenario is the</span> <span m="183550">event
  that the random variable Y takes on the</span> <span m="186750">i-th possible
  value.</span></p><p><span m="190270">We can apply the total probability</span>
  <span m="192070">theorem to this situation.</span></p><p><span m="194550">We
  can find the probability that the random variable X</span> <span
  m="197590">takes on a certain value, little x, by considering the</span> <span
  m="201680">probability of this event happening under each possible</span>
  <span m="205320">scenario, where a scenario is that Y took on a
  specific</span> <span m="210640">value, and then weigh those probabilities
  according to the</span> <span m="215620">probabilities of the different
  scenarios.</span></p><p><span m="220280">The story with the total</span> <span
  m="221670">expectation theorem is similar.</span></p><p><span m="225190">We
  know that an expectation can be found by taking the</span> <span
  m="228579">conditional expectations under each one of the scenarios and</span>
  <span m="232630">weighing them according to the probabilities of</span> <span
  m="235520">the different scenarios.</span></p><p><span m="238280">Again, let
  the event that Y takes on a specific value be a</span> <span
  m="243650">different scenario.</span></p><p><span m="246490">And with this
  correspondence we obtain the following</span> <span m="250730">version of the
  total expectation theorem.</span></p><p><span m="254830">We have a sum of
  different terms.</span></p><p><span m="256940">And each term in the sum is the
  probability of a given</span> <span m="260660">scenario times the expected
  value of X under this</span> <span m="265200">particular
  scenario.</span></p><p><span m="268910">At this point, I have to add a comment
  of a more</span> <span m="271460">mathematical flavor.</span></p><p><span
  m="273270">We have been talking about a partition of the sample space</span>
  <span m="276650">into finitely many scenarios.</span></p><p><span
  m="281520">But if Y takes on values in a discrete but infinite set, for</span>
  <span m="286960">example, if Y can take on any integer value, the
  argument</span> <span m="292420">that we have given is not quite
  complete.</span></p><p><span m="295580">Fortunately, the total probability
  theorem and the</span> <span m="299820">total expectation theorem, they both
  remain true, even</span> <span m="305150">for the case where Y ranges over an
  infinite set as long</span> <span m="310710">as the random variable X has a
  well-defined expectation.</span></p><p><span m="316310">For the total
  probability theorem, the proof for the</span> <span m="319640">general case
  can be carried out without a lot of</span> <span m="323850">difficulty, just
  using the countable additivity axiom.</span></p><p><span m="328020">However,
  for the total expectation theorem, it takes</span> <span m="331590">some
  harder mathematical work.</span></p><p><span m="334470">And this is beyond our
  scope.</span></p><p><span m="336620">But we will just take this fact for
  granted, that the</span> <span m="339800">total expectation theorem carries
  over to the case where</span> <span m="343540">we're adding over an infinite
  sequence of possible values of</span> <span m="347680">Y.</span></p><p><span
  m="348870">In the rest of the course we will often use the total</span> <span
  m="351830">expectation theorem, including in cases where Y ranges over</span>
  <span m="356520">an infinite discrete set.</span></p><p><span m="358960">In
  fact, we will see that this theorem is an extremely useful</span> <span
  m="363110">tool that can be used to divide and</span> <span m="365670">conquer
  complicated models.</span></p><p>&nbsp;</p>
uid: 84c3d8842f06242217278b44e1672699
type: course
layout: video
---
