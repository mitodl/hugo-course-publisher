---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 7_livg-uaVs
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    title: Video-YouTube-Stream
    type: Video
    uid: 9524418d4909b0f66f97d7f1a52efb2c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/7_livg-uaVs/default.jpg'
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 339b4df816aca0727c2fad21bb7b9571
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 7_livg-uaVs
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4f9f69a3b394e4e27c203f1520306263
  - id: 7_livg-uaVs.srt
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-variance-of-the-bernoulli-the-uniform/7_livg-uaVs.srt
    title: 3play caption file
    type: null
    uid: 8fd79825dc379f9781b254ff7065a168
  - id: 7_livg-uaVs.pdf
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-variance-of-the-bernoulli-the-uniform/7_livg-uaVs.pdf
    title: 3play pdf file
    type: null
    uid: ce8e8531515b52ed29bf1fe23c07597c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2ab48fdc6dd86ab2c25a263a41491d8d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 384f3f41069b3784c9937782b8c9764a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L06-03_300k.mp4
    parent_uid: 161d0b86bd261a988a6e8f5d20e55340
    title: Video-Internet Archive-MP4
    type: Video
    uid: d9add387a8d054de1397e9d77ca26a22
inline_embed_id: 75853227thevarianceofthebernoullitheuniform12379784
order_index: 591
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-variance-of-the-bernoulli-the-uniform
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-variance-of-the-bernoulli-the-uniform
title: The Variance of the Bernoulli & the Uniform
transcript: >-
  <p><span m="2250">In this segment, we will go through the calculation of
  the</span> <span m="5040">variances of some familiar random variables,
  starting</span> <span m="8900">with the simplest one that we know, which is
  the Bernoulli</span> <span m="12170">random variable.</span></p><p><span
  m="13480">So let X take values 0 or 1, and it takes a value of 1 with</span>
  <span m="18990">probability p.</span></p><p><span m="20500">We have already
  calculated the expected value of X, and we</span> <span m="24950">know that it
  is equal to p.</span></p><p><span m="27150">Let us now compute its
  variance.</span></p><p><span m="29930">One way of proceeding is to use the
  definition and then</span> <span m="34040">the expected value
  rule.</span></p><p><span m="36460">So if we now apply the expected value rule,
  we need</span> <span m="39600">the summation over all possible values of X.
  There</span> <span m="42570">are two values--</span> <span m="43600">x equal
  to 1 or x equal to 0.</span></p><p><span m="46730">The contribution when X is
  equal to 1 is 1 minus the</span> <span m="51400">expected value, which is p
  squared.</span></p><p><span m="55010">And the value of 1 is taken with
  probability p.</span></p><p><span m="58610">There is another contribution to
  this sum when little x is</span> <span m="62430">equal to
  0.</span></p><p><span m="63890">And that contribution is going to be 0 minus
  p, all of this</span> <span m="68390">squared, times the probability of 0,
  which is 1 minus p.</span></p><p><span m="75789">And now we carry out some
  algebra.</span></p><p><span m="79020">We expand the square here, 1 minus 2p
  plus p squared.</span></p><p><span m="84100">And after we multiply with this
  factor of p, we obtain p</span> <span m="89170">minus 2p squared plus p to the
  third power.</span></p><p><span m="96220">And then from here we have a factor
  of p squared times 1, p</span> <span m="101500">squared times minus
  p.</span></p><p><span m="104710">That gives us a minus p
  cubed.</span></p><p><span m="108310">Then we notice that this term cancels out
  with that term.</span></p><p><span m="113350">p squared minus 2p squared
  leaves us</span> <span m="119860">with p minus p squared.</span></p><p><span
  m="125330">And we factor this as p times 1 minus p.</span></p><p><span
  m="131760">An alternative calculation uses the formula that we</span> <span
  m="136120">provided a little earlier.</span></p><p><span m="139810">Let's see
  how this will go.</span></p><p><span m="143190">We have the following
  observation.</span></p><p><span m="145220">The random variable X squared and
  the random variable X--</span> <span m="150210">they are one and the
  same.</span></p><p><span m="152380">When X is 0, X squared is also
  0.</span></p><p><span m="155120">When X is 1, X squared is also
  1.</span></p><p><span m="157430">So as random variables, these two random
  variables are equal</span> <span m="162530">in the case where X is a
  Bernoulli.</span></p><p><span m="165430">So what we have here is just the
  expected value of X minus</span> <span m="172790">the expected value of X
  squared, to the second power.</span></p><p><span m="178720">And this is p
  minus p squared, which is the same answer as we</span> <span m="184230">got
  before--</span> <span m="185070">p times 1 minus p.</span></p><p><span
  m="187030">And we see that the calculations and the algebra</span> <span
  m="189420">involved using this formula were a little simpler than</span> <span
  m="192620">they were before.</span></p><p><span m="195110">Now the form of the
  variance of the Bernoulli random</span> <span m="198940">variable has an
  interesting dependence on p.</span></p><p><span m="204120">It's instructive to
  plot it as a function of p.</span></p><p><span m="209395">So this is a plot of
  the variance of the Bernoulli as a</span> <span m="212810">function of p, as p
  ranges between 0 and 1.</span></p><p><span m="217380">p times 1 minus p is a
  parabola.</span></p><p><span m="221450">And it's a parabola that is 0 when p
  is either 0 or 1.</span></p><p><span m="228590">And it has this particular
  shape, and the peak of this</span> <span m="232460">parabola occurs when p is
  equal to 1/2, in which case</span> <span m="238300">the variance is
  1/4.</span></p><p><span m="241770">In some sense, the variance is a measure of
  the amount of</span> <span m="245030">uncertainty in a random variable, a
  measure of the</span> <span m="248590">amount of
  randomness.</span></p><p><span m="250260">A coin is most random if it is fair,
  that is, when</span> <span m="255060">p is equal to 1/2.</span></p><p><span
  m="257060">And in this case, the variance confirms this
  intuition.</span></p><p><span m="261570">The variance of a coin flip is
  biggest if that coin is fair.</span></p><p><span m="269460">On the other hand,
  in the extreme cases</span> <span m="271630">where p equals 0--</span> <span
  m="272880">so the coin always results in tails, or if p equals to 1 so</span>
  <span m="278440">that the coin always results in heads-- in those cases,
  we</span> <span m="281180">do not have any randomness.</span></p><p><span
  m="282920">And the variance,</span> <span m="283750">correspondingly, is equal
  to 0.</span></p><p><span m="288300">Let us now calculate the variance of
  a</span> <span m="290270">uniform random variable.</span></p><p><span
  m="292440">Let us start with a simple case where the range of the</span> <span
  m="295159">uniform random variable starts at 0 and extends up to some
  n.</span></p><p><span m="299370">So there is a total of n plus 1 possible
  values, each one of</span> <span m="303300">them having the same
  probability--</span> <span m="304960">1 over n plus 1.</span></p><p><span
  m="306930">We calculate the variance using the alternative
  formula.</span></p><p><span m="316060">And let us start with the first
  term.</span></p><p><span m="319230">What is it?</span></p><p><span
  m="320700">We use the expected value rule, and we argue that with</span> <span
  m="326010">probability 1 over n plus 1, the random variable X squared</span>
  <span m="331070">takes the value 0 squared, with the same probability,</span>
  <span m="335460">takes the value 1 squared.</span></p><p><span m="337350">With
  the same probability, it takes the value 2 squared, and</span> <span
  m="341370">so on, all of the way up to n squared.</span></p><p><span
  m="346500">And then there's the next term.</span></p><p><span m="348860">The
  expected value of the uniform is the midpoint of the</span> <span
  m="352360">distribution by symmetry.</span></p><p><span m="354040">So it's n
  over 2, and we take the square of that.</span></p><p><span m="360820">Now to
  make progress here, we need to evaluate this sum.</span></p><p><span
  m="366000">Fortunately, this has been done by others.</span></p><p><span
  m="370580">And it turns out to be equal to 1 over 6 n, n plus 1</span> <span
  m="377630">times 2n plus 1.</span></p><p><span m="380970">This formula can be
  proved by induction, but we will just</span> <span m="384610">take it for
  granted.</span></p><p><span m="386470">Using this formula, and after a little
  bit of simple algebra</span> <span m="391740">and after we simplify, we obtain
  a final answer, which</span> <span m="395659">is of the form 1 over 12 n times
  n plus 2.</span></p><p><span m="402240">How about the variance of a more
  general</span> <span m="404680">uniform random variable?</span></p><p><span
  m="406580">So suppose we have a uniform random variable whose range is</span>
  <span m="409620">from a to b.</span></p><p><span m="411690">How is this PMF
  related to the one that we already studied?</span></p><p><span
  m="416610">First, let us assume that n is chosen so that it is</span> <span
  m="421410">equal to b minus a.</span></p><p><span m="423800">So in that case,
  the difference between the last</span> <span m="426320">and the first value of
  the random variable is the same as</span> <span m="430240">the difference
  between the last and the first possible</span> <span m="433060">value in this
  PMF.</span></p><p><span m="434830">So both PMFs have the same number of
  terms.</span></p><p><span m="438320">They have exactly the same
  shape.</span></p><p><span m="441110">The only difference is that the second
  PMF is shifted away</span> <span m="444730">from 0, and it starts at a instead
  of starting at 0.</span></p><p><span m="449640">Now what does shifting a PMF
  correspond to?</span></p><p><span m="454220">It essentially amounts to taking
  a random variable--</span> <span m="457780">let's say, with this PMF--</span>
  <span m="459400">and adding a constant to that random
  variable.</span></p><p><span m="462860">So if the original random variable
  takes the value of 0,</span> <span m="466070">the new random variable takes
  the value of a.</span></p><p><span m="469090">If the original takes the value
  of 1, this new random</span> <span m="471890">variable takes the value of a
  plus 1, and so on.</span></p><p><span m="476780">So this shifted PMF is the
  PMF associated to a random</span> <span m="482650">variable equal to the
  original random</span> <span m="485010">variable plus a
  constant.</span></p><p><span m="487010">But we know that adding a constant
  does</span> <span m="489230">not change the variance.</span></p><p><span
  m="490910">Therefore, the variance of this PMF is going to be the</span> <span
  m="494160">same as the variance of the original PMF, as long as we</span>
  <span m="498380">make the correspondence that n is equal to b minus
  a.</span></p><p><span m="502320">So doing this substitution in the formula
  that we derived</span> <span m="506050">earlier, we obtain 1 over 12 b minus a
  times b</span> <span m="514900">minus a plus 2.</span></p><p>&nbsp;</p>
uid: 161d0b86bd261a988a6e8f5d20e55340
type: courses
layout: video
---
