---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: zW1_iugJvF0
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    title: Video-YouTube-Stream
    type: Video
    uid: 8da587cccf83b5163abdccad50cf372c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/zW1_iugJvF0/default.jpg'
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9bcd6c28add240f4b46ee22a4848f2a4
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: zW1_iugJvF0
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8100ddf02cfcf0d6726cde2600671e63
  - id: zW1_iugJvF0.srt
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-mass-functions/zW1_iugJvF0.srt
    title: 3play caption file
    type: null
    uid: 5627cb12434283c4d035b08764b31319
  - id: zW1_iugJvF0.pdf
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-mass-functions/zW1_iugJvF0.pdf
    title: 3play pdf file
    type: null
    uid: b46a71f939d5f361f624c59338966b27
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bda2ddc56abc2894216b573f1d6ae7bb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 73157d44cb194d0a394a8add2c3dece7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-03_300k.mp4
    parent_uid: 6cae5cad6959722f390440c111f0a62c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7473c1d6a3c1e969bcd6578a65a558f5
inline_embed_id: 16132858probabilitymassfunctions38608483
order_index: 483
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: probability-mass-functions
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-mass-functions
title: Probability Mass Functions
transcript: >-
  <p><span m="1420">A random variable can take different numerical values</span>
  <span m="4390">depending on the outcome of the experiment.</span></p><p><span
  m="6890">Some outcomes are more likely than others, and similarly</span> <span
  m="9800">some of the possible numerical values of a random variable</span>
  <span m="13130">will be more likely than others.</span></p><p><span
  m="15480">We restrict ourselves to discrete random variables, and</span> <span
  m="18500">we will describe these relative likelihoods in terms</span> <span
  m="22060">of the so-called probability mass function, or PMF for</span> <span
  m="26080">short, which gives the probability of the different</span> <span
  m="29440">possible numerical values.</span></p><p><span m="31530">The PMF is
  also sometimes called the probability law or</span> <span m="35480">the
  probability distribution of a discrete random variable.</span></p><p><span
  m="39590">Let me illustrate the idea in terms of a simple
  example.</span></p><p><span m="43090">We have a probabilistic experiment
  with</span> <span m="45160">four possible outcomes.</span></p><p><span
  m="47380">We also have a probability law on the sample
  space.</span></p><p><span m="52600">And to keep things simple, we assume that
  all four outcomes</span> <span m="57170">in our sample space are equally
  likely.</span></p><p><span m="60610">We then introduce a random variable that
  associates a</span> <span m="63450">number with each possible outcome
  as</span> <span m="65800">shown in this diagram.</span></p><p><span
  m="67630">The random variable, X, can take one of</span> <span m="72310">three
  possible values--</span> <span m="74030">namely 3, 4, or 5.</span></p><p><span
  m="76510">Let us focus on one of those numbers--</span> <span m="79810">let's
  say the number 5.</span></p><p><span m="82610">So let us focus on x being
  equal to 5.</span></p><p><span m="88100">We can think of the event that X is
  equal to 5.</span></p><p><span m="94990">Which event is
  this?</span></p><p><span m="96890">This is the event that the outcome of the
  experiment led</span> <span m="100090">to the random variable taking a value
  of 5.</span></p><p><span m="104310">So it is this particular event which
  consists of two</span> <span m="107470">elements, namely a and
  b.</span></p><p><span m="110729">More formally, the event that we're talking
  about is the set</span> <span m="115580">of all outcomes for which the value,
  the numerical value of</span> <span m="121790">our random variable, which is a
  function of the outcome,</span> <span m="125200">that numerical value happens
  to be equal to 5.</span></p><p><span m="128770">And in this example it is a
  set</span> <span m="131880">consisting of two elements.</span></p><p><span
  m="133410">It's a subset of the sample space.</span></p><p><span m="135460">So
  it is an event.</span></p><p><span m="137750">And it has a
  probability.</span></p><p><span m="139700">And that probability we will
  be</span> <span m="141510">denoting with this notation.</span></p><p><span
  m="145500">And in our case this probability is equal to
  1/2.</span></p><p><span m="150160">Because we have two outcomes, each one has
  probability 1/4.</span></p><p><span m="154310">The probability of this event
  is equal to 1/2.</span></p><p><span m="158890">More generally, we will be
  using this notation to denote</span> <span m="165290">the probability of the
  event that the random variable, X ,</span> <span m="170730">takes on a
  particular value, x.</span></p><p><span m="173900">This is just a piece of
  notation, not a new concept.</span></p><p><span m="177130">We're dealing with
  a probability, and we indicate</span> <span m="179740">it using this
  particular notation.</span></p><p><span m="184350">More formally, the
  probability that we're dealing with is the</span> <span
  m="188550">probability, the total probability, of all outcomes</span> <span
  m="192950">for which the numerical value of our random variable is this</span>
  <span m="197360">particular number, x.</span></p><p><span m="200320">A few
  things to notice.</span></p><p><span m="201960">We use a subscript, X, to
  indicate which random variable</span> <span m="208780">we're talking
  about.</span></p><p><span m="210230">This will be useful if we have
  several</span> <span m="212510">random variables involved.</span></p><p><span
  m="214300">For example, if we have another random variable on the</span> <span
  m="217060">same sample space, Y, then it would have its own probability</span>
  <span m="222890">mass function which would be denoted with this
  particular</span> <span m="228079">notation here.</span></p><p><span
  m="232160">The argument of the PMF, which is x, ranges over the
  possible</span> <span m="239470">values of the random variable, X. So in this
  sense, here</span> <span m="244750">we're really dealing with a
  function.</span></p><p><span m="248020">A function that we could denote just
  by p with a</span> <span m="252200">subscript x.</span></p><p><span
  m="253310">This is a function as opposed to the specific</span> <span
  m="256170">values of this function.</span></p><p><span m="257839">And we can
  produce plots of this function.</span></p><p><span m="261350">In this
  particular example that we're dealing with, the</span> <span
  m="265050">interesting values of x are 3, 4, and 5.</span></p><p><span
  m="269890">And the associated probabilities are the value of</span> <span
  m="273640">5 is obtained with probability 1/2, the value of 4--</span> <span
  m="279790">this is the event that the outcome is c, which has</span> <span
  m="285930">probability 1/4.</span></p><p><span m="288070">And the value of 3
  is also obtained with probability 1/4</span> <span m="292960">because the
  value of 3 is obtained when the outcome is</span> <span m="296420">d, and that
  outcome has probability 1/4.</span></p><p><span m="299740">So the probability
  mass function is a function of an</span> <span m="303390">argument
  x.</span></p><p><span m="305480">And for any x, it specifies the probability
  that the</span> <span m="308920">random variable takes on this particular
  value.</span></p><p><span m="312930">A few more things to
  notice.</span></p><p><span m="315710">The probability mass function is always
  non-negative, since</span> <span m="319150">we're talking about probabilities
  and</span> <span m="320750">probabilities are always
  non-negative.</span></p><p><span m="323930">In addition, since the total
  probability of all outcomes is</span> <span m="328350">equal to 1, the
  probabilities of the different possible</span> <span m="332590">values of the
  random variable should also add to 1.</span></p><p><span m="337330">So when
  you add over all possible values of x, the sum</span> <span m="342040">of the
  associated probabilities</span> <span m="343790">should be equal to
  1.</span></p><p><span m="345740">In terms of our picture, the event that x is
  equal to 3,</span> <span m="352690">which is this subset of the sample space,
  the event that x</span> <span m="357200">is equal to 4, which is this subset
  of the sample space,</span> <span m="363520">and the event that x is equal to
  5, which is this subset of</span> <span m="366990">the sample
  space.</span></p><p><span m="368470">These three events--</span> <span
  m="369840">the red, green, and blue--</span> <span m="372080">they are
  disjoint, and together they cover the entire</span> <span m="374940">sample
  space.</span></p><p><span m="375820">So their probabilities should add to
  1.</span></p><p><span m="378940">And the probabilities of these events are the
  probabilities</span> <span m="381360">of the different values of the random
  variable, X. So the</span> <span m="385860">probabilities of these different
  values</span> <span m="387790">should also add to 1.</span></p><p><span
  m="391650">Let us now go through a simple example to illustrate the</span>
  <span m="394950">general method for calculating the PMF of a</span> <span
  m="397950">discrete random variable.</span></p><p><span m="399890">We will
  revisit our familiar example involving two rolls of</span> <span
  m="403090">the tetrahedral die.</span></p><p><span m="404690">And let X be the
  result of the first roll, Y be the result of</span> <span m="409000">the
  second roll.</span></p><p><span m="410159">And notice that we're using
  uppercase letters.</span></p><p><span m="413430">And this is because X and Y
  are random variables.</span></p><p><span m="418180">In order to do any
  probability calculations, we also need the</span> <span m="421160">probability
  law.</span></p><p><span m="422170">So to keep things simple, let us assume
  that every possible</span> <span m="425150">outcome, there's 16 of them, has
  the same probability which</span> <span m="428440">is therefore 1 over 16 for
  each one of the outcomes.</span></p><p><span m="432420">We will concentrate on
  a particular random variable</span> <span m="435770">defined to be the sum of
  the random variables, X and Y. So</span> <span m="440540">if X and Y both
  happen to be 1, then Z will take</span> <span m="444240">the value of
  2.</span></p><p><span m="445850">If X is 2 and Y is 1 our random variable will
  take the</span> <span m="449850">value of 3.</span></p><p><span m="450940">And
  similarly if we have this outcome, in those outcomes</span> <span
  m="455290">here, the random variable takes the value of 4.</span></p><p><span
  m="458540">And we can continue this way by marking, for each</span> <span
  m="463560">particular outcome, the corresponding value of the</span> <span
  m="467040">random variable of interest.</span></p><p><span m="472030">What we
  want to do now is to calculate the PMF of this</span> <span m="476280">random
  variable.</span></p><p><span m="477110">What does it mean to calculate the
  PMF?</span></p><p><span m="479690">We need to find this value for all choices
  of z, that is for</span> <span m="487600">all possible values in the range of
  our random variable.</span></p><p><span m="491530">The way we're going to do
  it is to consider each possible</span> <span m="495120">value of z, one at a
  time, and for any particular value find</span> <span m="499830">out what are
  the outcomes--</span> <span m="501810">the elements of the sample
  space--</span> <span m="504110">for which our random variable takes on the
  specific value,</span> <span m="508220">and add the probabilities of those
  outcomes.</span></p><p><span m="511240">So to illustrate this process, let us
  calculate the value of</span> <span m="515820">the PMF for z equal to
  2.</span></p><p><span m="519630">This is by definition the probability that
  our random</span> <span m="522900">variable takes the value of
  2.</span></p><p><span m="525950">And this is an event that can only happen
  here.</span></p><p><span m="529640">It corresponds to only one element of the
  sample space,</span> <span m="532690">which has probability 1 over
  16.</span></p><p><span m="537970">We can continue the same way for other
  values of z.</span></p><p><span m="542390">So for example, the value of PMF at
  z equal to 3, this is</span> <span m="547930">the probability that our random
  variable takes the</span> <span m="550640">value of 3.</span></p><p><span
  m="552150">This is an event that can happen in two ways--</span> <span
  m="555300">it corresponds to two outcomes--</span> <span m="557810">and so it
  has probability 2 over 16.</span></p><p><span m="562540">Continuing similarly,
  the probability that our random</span> <span m="566100">variable takes the
  value of 4 is equal to 3 over 16.</span></p><p><span m="573650">And we can
  continue this way and calculate the remaining</span> <span m="577250">entries
  of our PMF.</span></p><p><span m="579080">After you are done, you end up with
  a table--</span> <span m="582330">or rather a graph--</span> <span
  m="584850">a plot that has this form.</span></p><p><span m="587050">And these
  are the values of the different probabilities</span> <span m="590590">that we
  have computed.</span></p><p><span m="594630">And you can continue with the
  other values.</span></p><p><span m="597260">It's a reasonable guess that this
  was going to be 4 over</span> <span m="600030">16, this is going to be 3 over
  16, 2 over 16, and 1 over 16.</span></p><p><span m="607490">So we have
  completely determined the PMF of our</span> <span m="610640">random
  variable.</span></p><p><span m="611640">We have given the form of the
  answers.</span></p><p><span m="614950">And it's always convenient to also
  provide a plot with the</span> <span m="618790">answers that we
  have.</span></p><p>&nbsp;</p>
uid: 6cae5cad6959722f390440c111f0a62c
type: courses
layout: video
---
