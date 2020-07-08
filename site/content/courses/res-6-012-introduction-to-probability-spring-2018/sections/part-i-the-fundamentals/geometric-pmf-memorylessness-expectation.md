---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: MuqLI4otMIQ
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    title: Video-YouTube-Stream
    type: Video
    uid: 33ae1aebc3e1b38b17a9888f78d870f5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MuqLI4otMIQ/default.jpg'
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6b1a50d282be715474db9a16dd98cd0a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: MuqLI4otMIQ
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: aa4d8039973d1ee6f958d5725e92a6bd
  - id: MuqLI4otMIQ.srt
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/geometric-pmf-memorylessness-expectation/MuqLI4otMIQ.srt
    title: 3play caption file
    type: null
    uid: 42d470e9836f5328a3437fa366648093
  - id: MuqLI4otMIQ.pdf
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/geometric-pmf-memorylessness-expectation/MuqLI4otMIQ.pdf
    title: 3play pdf file
    type: null
    uid: f8408ddae509310e0fb2d9fed8483e0e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bd4991ff33c4ee5a515401c08fd73d83
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c2f9c233090d00717ac53994f3d1ecf8
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L06-06_300k.mp4
    parent_uid: 3e0bb3c2fc67d54f2a7798f8241a5165
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6280b08d547e99c0750f0e2c3e0ac7ae
inline_embed_id: 43801886geometricpmfmemorylessnessexpectation78362828
order_index: 618
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: geometric-pmf-memorylessness-expectation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/geometric-pmf-memorylessness-expectation
title: Geometric PMF Memorylessness & Expectation
transcript: >-
  <p><span m="480">We will now work with a geometric random variable and</span>
  <span m="3600">put to use our understanding of conditional PMFs and</span>
  <span m="6830">conditional expectations.</span></p><p><span m="8850">Remember
  that a geometric random variable corresponds to</span> <span m="11810">the
  number of independent coin tosses until</span> <span m="14580">the first head
  occurs.</span></p><p><span m="16550">And here p is a parameter that describes
  the coin.</span></p><p><span m="20445">It is the probability of heads at each
  coin toss.</span></p><p><span m="24600">We have already seen the formula for
  the geometric PMF</span> <span m="28430">and the corresponding
  plot.</span></p><p><span m="30370">We will now add one very important property
  which is</span> <span m="34380">usually called
  Memorylessness.</span></p><p><span m="37140">Ultimately, this property has to
  do with the fact that</span> <span m="40080">independent coin tosses do not
  have any memory.</span></p><p><span m="43850">Past coin tosses do not affect
  future coin tosses.</span></p><p><span m="48490">So consider a coin-tossing
  experiment with independent</span> <span m="52290">tosses and let X be the
  number of tosses</span> <span m="57050">until the first
  heads.</span></p><p><span m="60140">And X is a geometric with parameter
  p.</span></p><p><span m="64209">Suppose that you show up a little after the
  experiment</span> <span m="68270">has started.</span></p><p><span
  m="70030">And you're told that there was so far just one coin
  toss.</span></p><p><span m="75000">And that this coin toss resulted in
  tails.</span></p><p><span m="78460">Now you have to take over and carry out
  the remaining tosses</span> <span m="83940">until heads are
  observed.</span></p><p><span m="86130">What should your model be about the
  future?</span></p><p><span m="89980">Well, you will be making independent coin
  tosses until</span> <span m="94440">the first heads.</span></p><p><span
  m="96400">So the number of such tosses will be a random variable,</span> <span
  m="101560">which is geometric with parameter p.</span></p><p><span
  m="105530">So this duration--</span> <span m="107180">as far as you are
  concerned--</span> <span m="109479">is geometric with parameter
  p.</span></p><p><span m="114430">Therefore, the number of remaining coin
  tosses starting</span> <span m="119610">from here--</span> <span
  m="120920">given that the first toss was tails--</span> <span m="124200">has
  the same geometric distribution as the original</span> <span m="127990">random
  variable X.</span></p><p><span m="130370">This is the Memorylessness
  property.</span></p><p><span m="133290">Now, since X is the total number of
  coin tosses and</span> <span m="138100">since your coin tosses were all of
  them except for the</span> <span m="142890">first one, the random variable
  that you are concerned</span> <span m="147190">with is X minus
  1.</span></p><p><span m="150430">And so the geometric distribution that you
  are</span> <span m="153030">seeing here is the conditional distribution of X
  minus 1</span> <span m="159180">given that the first toss resulted in tails,
  which is</span> <span m="163440">the same as the event that X is strictly
  larger than 1.</span></p><p><span m="169520">So the statement that we have
  been making is the following</span> <span m="173210">in more mathematical
  language--</span> <span m="175460">that conditioned on X being larger than 1,
  the random</span> <span m="180930">variable X minus 1, which is the remaining
  number of coin</span> <span m="184370">tosses, has a geometric distribution
  with parameter p.</span></p><p><span m="190100">Let us now give a more
  precise,</span> <span m="191830">mathematical argument.</span></p><p><span
  m="193150">But first, for a special case.</span></p><p><span m="195620">Let's
  us look at the conditional probabilities for</span> <span m="199210">the
  random variable X minus 1.</span></p><p><span m="202430">And calculate, for
  example, the conditional probability</span> <span m="205560">that X minus 1 is
  equal to 3, given that X is larger than 1.</span></p><p><span m="212610">Which
  is the same as saying that the first</span> <span m="214780">toss resulted in
  tails.</span></p><p><span m="219460">Now, the first toss resulted in
  tails.</span></p><p><span m="221770">This is the probability that you will
  need three more</span> <span m="225480">tosses until you observe
  heads.</span></p><p><span m="228970">Needing three more tosses until you
  observe heads is the</span> <span m="232410">event that you had tails in the
  second toss, tails in the</span> <span m="238079">third toss, and heads in the
  fourth toss.</span></p><p><span m="243660">And all that is conditioned on the
  first toss</span> <span m="247170">having resulted in
  tails.</span></p><p><span m="250750">However, the different coin tosses are
  independent.</span></p><p><span m="254900">So the conditional probabilities,
  given the event</span> <span m="258810">that the first toss was tails should
  be the same as the</span> <span m="262670">unconditional
  probabilities.</span></p><p><span m="265050">The first toss does not change
  our beliefs about the</span> <span m="268580">probabilities associated with
  the remaining tosses.</span></p><p><span m="274470">Now, this
  unconditional</span> <span m="276760">probability is easy to
  calculate.</span></p><p><span m="280190">It is 1 minus p squared--</span>
  <span m="283550">because we have two tails in a row--</span> <span
  m="285900">times p.</span></p><p><span m="288920">Now, we observe that this
  quantity here is the</span> <span m="293170">probability that a geometric
  random variable takes the</span> <span m="297670">value of
  three.</span></p><p><span m="300580">Here what have we
  calculated?</span></p><p><span m="303240">We have calculated the PMF of the
  random variable X minus 1</span> <span m="309340">in a conditional universe
  where X is larger than 1.</span></p><p><span m="314610">And we evaluated it
  for a value of 3.</span></p><p><span m="318510">The probability that our
  random variable X minus 1</span> <span m="321210">takes the value of
  3.</span></p><p><span m="323200">So what we have shown is that this
  conditional PMF is the</span> <span m="328410">same as the unconditional
  PMF.</span></p><p><span m="332900">Now, there is nothing special about the
  number 3.</span></p><p><span m="336110">You can generalize this argument and
  establish that</span> <span m="340600">the conditional probability of X minus
  1 given that X is</span> <span m="345900">strictly larger than one, for any
  particular k, is the same</span> <span m="351090">as the corresponding
  probability for the random</span> <span m="354300">variable X, which is given
  by the geometric PMF.</span></p><p><span m="361600">Finally, there is nothing
  special about the value of 1</span> <span m="367715">that we're using
  here.</span></p><p><span m="370980">In fact, we can generalize and argue as
  follows--</span> <span m="376500">suppose that I tell you that X is strictly
  larger than n.</span></p><p><span m="380410">That is, the first n tosses
  resulted in tails.</span></p><p><span m="384880">Once more, these past tosses
  were wasted but have no effect</span> <span m="389160">on the
  future.</span></p><p><span m="390200">So the conditional PMF of the remaining
  number of tosses</span> <span m="394909">should be, again, the
  same.</span></p><p><span m="398090">Therefore, the statement we're making is
  that this geometric</span> <span m="402200">PMF will also be the PMF of X
  minus n, given that X is</span> <span m="409330">strictly larger than n, and
  this will be true no matter</span> <span m="413659">what argument we plug-in
  into the PMF.</span></p><p><span m="418570">We will now exploit the
  Memorylessness property of the</span> <span m="421640">geometric PMF and use
  it together with the total</span> <span m="425490">expectation theorem to
  calculate the mean or</span> <span m="428690">expectation of the geometric
  PMF.</span></p><p><span m="431620">If we wanted to calculate the expected
  value of the</span> <span m="434050">geometric using the definition of the
  expectation, we would</span> <span m="437590">have to calculate this infinite
  sum here, which is</span> <span m="441280">quite difficult.</span></p><p><span
  m="443030">Instead, we're going to use a certain trick.</span></p><p><span
  m="446710">The trick is the following--</span> <span m="448420">to break down
  the expected value calculation into two</span> <span m="452120">different
  scenarios.</span></p><p><span m="453820">Under one scenario we obtain heads in
  the first toss.</span></p><p><span m="458210">And in that case the random
  variable X--</span> <span m="462430">the number of tosses until the first
  heads--</span> <span m="464460">is equal to 1.</span></p><p><span
  m="465730">And this scenario occurs with probability p.</span></p><p><span
  m="468480">And we have another scenario with probability 1 minus p</span>
  <span m="471470">where we obtain tails in the first toss.</span></p><p><span
  m="474580">And in that case, our random variable is</span> <span
  m="476830">strictly larger than 1.</span></p><p><span m="479400">Now, the
  expected value of X consists of two pieces.</span></p><p><span m="485340">We
  have a first toss no matter what.</span></p><p><span m="488930">And then we
  have the number of remaining tosses,</span> <span m="492990">which is X minus
  1.</span></p><p><span m="495060">So this is true by linearity of
  expectations.</span></p><p><span m="498640">Now, the expected value of X minus
  1 consists of two pieces</span> <span m="503480">using the total expectation
  theorem.</span></p><p><span m="505770">The probability of the first scenario
  times the expected</span> <span m="509300">value of X minus 1 given that X is
  equal to 1,</span> <span m="514450">plus 1 minus p--</span> <span
  m="516558">the probability of the second scenario--</span> <span
  m="518970">times the expected value of X minus 1 given that X</span> <span
  m="523549">is bigger than 1.</span></p><p><span m="527660">Now, this term here
  is 0.</span></p><p><span m="531200">Why?</span></p><p><span m="532000">If I
  tell you that X is equal to 1, then you're certain</span> <span
  m="535730">that's X minus 1 is equal to 0.</span></p><p><span m="538350">So
  this term gives a 0 contribution.</span></p><p><span m="541770">How about the
  next term?</span></p><p><span m="543760">We have a 1 minus p here times this
  expected value.</span></p><p><span m="548850">Now this random variable,
  conditioned on this event, has</span> <span m="555560">the same distribution
  as an ordinary, unconditioned</span> <span m="560890">geometric random
  variable.</span></p><p><span m="562890">So this expectation here must be the
  same as the expectation</span> <span m="567450">of an ordinary, unconditioned,
  geometric random variable.</span></p><p><span m="572050">And this gives us an
  equality.</span></p><p><span m="574730">Both sides involve the expected value
  of X. But we</span> <span m="578900">can solve this equation for the expected
  value.</span></p><p><span m="582780">And we obtain the end result that the
  expected</span> <span m="585610">value is 1 over p.</span></p><p><span
  m="589540">By the way, this answer makes intuitive sense.</span></p><p><span
  m="593550">If p is small, this means that the odds of</span> <span
  m="598030">seeing heads is small.</span></p><p><span m="600860">Then in that
  case, we need to wait longer and longer until</span> <span m="605040">we see
  heads for the first time.</span></p><p><span m="607720">Setting aside the
  specific form of the answer that we</span> <span m="610740">found, what we
  have just done actually illustrates that</span> <span m="615510">fairly
  difficult calculations can become very simple if one</span> <span
  m="619950">breaks down a model or a problem in a clever
  way.</span></p><p><span m="623740">This is going to be a recurring theme
  throughout</span> <span m="626450">this class.</span></p><p>&nbsp;</p>
uid: 3e0bb3c2fc67d54f2a7798f8241a5165
type: courses
layout: video
---
