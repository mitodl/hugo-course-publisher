---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: _yJsO5955ZE
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    title: Video-YouTube-Stream
    type: Video
    uid: 39fe6e41462b8ee76a0539c2bc694bbc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/_yJsO5955ZE/default.jpg'
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7c2c90083c35756475c5de33c535900e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: _yJsO5955ZE
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6399955a205cab7b971d940f6c6dc7ed
  - id: yJsO5955ZE.srt
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/expectation/yJsO5955ZE.srt
    title: 3play caption file
    type: null
    uid: 322745b92519a09e950d35cf8fb10c10
  - id: yJsO5955ZE.pdf
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/expectation/yJsO5955ZE.pdf
    title: 3play pdf file
    type: null
    uid: 1c51dcaf9af8d21e35eb8c6507344801
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7fac7ad75f84acc2d897ce12fd880bc8
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 33c40e46a9d1338448339e5c3dcb641f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-08_300k.mp4
    parent_uid: 0ba2358c042feaf97a76a1e899f5e930
    title: Video-Internet Archive-MP4
    type: Video
    uid: d157360c3a714f166b7152081ebdf57f
inline_embed_id: 99614702expectation52617019
order_index: 528
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: expectation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/expectation
title: Expectation
transcript: >-
  <p><span m="440">Our discussion of random variable so far has involved</span>
  <span m="3540">nothing but standard probability
  calculations.</span></p><p><span m="6700">Other than using the PMF notation,
  we have</span> <span m="9780">done nothing new.</span></p><p><span
  m="11240">It is now time to introduce a truly new concept that plays a</span>
  <span m="14670">central role in probability theory.</span></p><p><span
  m="17250">This is the concept of the expected value or expectation</span>
  <span m="20750">or mean of a random variable.</span></p><p><span m="23220">It
  is a single number that provides some kind of summary</span> <span
  m="26930">of a random variable by telling us what</span> <span m="29590">it is
  on the average.</span></p><p><span m="31430">Let us motivate with an
  example.</span></p><p><span m="34000">You play a game of chance over and over,
  let</span> <span m="36820">us say 1,000 times.</span></p><p><span
  m="39120">Each time that you play, you win an amount of money, which</span>
  <span m="43910">is a random variable, and that random variable takes
  the</span> <span m="47350">value 1, with probability 2/10, the value of 2,
  with</span> <span m="50640">probability 5/10, the value of 4, with probability
  3/10.</span></p><p><span m="55140">You can plot the PMF of this random
  variable.</span></p><p><span m="58920">It takes values 1, 2, and
  4.</span></p><p><span m="63720">And the associated probabilities are</span>
  <span m="66810">2/10, 5/10, and 3/10.</span></p><p><span m="82330">How much do
  you expect to have at the end of the day?</span></p><p><span m="85860">Well,
  if you interpret probabilities as frequencies,</span> <span m="89170">in a
  thousand plays, you expect to have about 200 times</span> <span m="96820">this
  outcome to occur and this outcome about 500 times and</span> <span
  m="102650">this outcome about 300 times.</span></p><p><span m="106160">So your
  average gain is expected to be your total</span> <span m="112670">gain, which
  is 1, 200 times, plus 2, 500</span> <span m="119800">times, plus 4, 300
  times.</span></p><p><span m="125110">This is your total
  gain.</span></p><p><span m="126430">And to get to the average gain, you divide
  by 1,000.</span></p><p><span m="130720">And the expression that you get can
  also be written in a</span> <span m="134400">simpler form as 1 times 2/10 plus
  2 times 5/10</span> <span m="145480">plus 4 times 3/10.</span></p><p><span
  m="149880">So this is what you expect to get, on the average, if you</span>
  <span m="154010">keep playing that game.</span></p><p><span m="158470">What
  have we done?</span></p><p><span m="160170">We have calculated a certain
  quantity which is a sort of</span> <span m="164640">average of the random
  variable of interest.</span></p><p><span m="168690">And what we did in this
  summation here, we took each</span> <span m="173720">one of the possible
  values of the random variable.</span></p><p><span m="177320">Each possible
  value corresponds to</span> <span m="179470">one term in the
  summation.</span></p><p><span m="181610">And what we're adding is the
  numerical value of the random</span> <span m="185260">variable times the
  probability that this</span> <span m="188970">particular value is
  obtained.</span></p><p><span m="193060">So when x is equal to 1, we get 1 here
  and then the</span> <span m="198040">probability of 1.</span></p><p><span
  m="200140">When we add the term corresponding to x equals 2,</span> <span
  m="203890">we get little x equals to 2 and next to it the probability</span>
  <span m="208320">that x is equal to 2, and so on.</span></p><p><span
  m="212090">So this is what we call the expected value of the random</span>
  <span m="216010">variable x.</span></p><p><span m="218010">This is the formula
  that defines it, but it's also</span> <span m="220820">important to always
  keep in mind the interpretation of</span> <span m="224170">that
  formula.</span></p><p><span m="225250">The expected value of a random variable
  is to be interpreted</span> <span m="228880">as the average that you expect to
  see in a large number of</span> <span m="233980">independent repetitions of
  the experiment.</span></p><p><span m="238460">One small technical caveat, if
  we're dealing with a random</span> <span m="243100">variable that takes values
  in a discrete but infinite set,</span> <span m="247780">this sum here is going
  to be an infinite sum</span> <span m="251110">or an infinite
  series.</span></p><p><span m="252990">And there's always a question whether an
  infinite series has</span> <span m="256320">a well-defined limit or
  not.</span></p><p><span m="259380">In order for it to have a well-defined
  limit, we will be</span> <span m="264640">making the assumption that this
  infinite series is, as</span> <span m="270450">it's called, absolutely
  convergent, namely that if we</span> <span m="274480">replace the x's by their
  absolute values--</span> <span m="277159">so we're adding positive
  numbers,</span> <span m="280510">or nonnegative numbers--</span> <span
  m="282020">the sum of those numbers is going to be finite.</span></p><p><span
  m="285150">So this is a technical condition that we need in</span> <span
  m="288330">order to make sure that this expected value is a</span> <span
  m="292060">well-defined and finite quantity.</span></p><p><span m="297930">Let
  us now calculate the expected value of a very</span> <span m="300790">simple
  random variable, the Bernoulli random variable that</span> <span
  m="304160">takes the value 1 with probability p and the value 0</span> <span
  m="307770">with probability 1 minus p.</span></p><p><span m="310300">The
  expected value consists of two terms.</span></p><p><span m="315320">X can take
  the value 1.</span></p><p><span m="317180">This happens with probability
  p.</span></p><p><span m="319040">Or it can take the value of
  zero.</span></p><p><span m="321540">This happens with probability 1 minus
  p.</span></p><p><span m="324300">And therefore, the expected value is just
  equal to p.</span></p><p><span m="329450">As a special case, we may consider
  the situation where X</span> <span m="334409">is the indicator random variable
  of a certain event,</span> <span m="338630">A, so that X is equal to 1 if and
  only if event A occurs.</span></p><p><span m="347450">In this case, the
  probability that X equals to 1, which is</span> <span m="351530">our parameter
  p, is the same as the probability</span> <span m="354670">that event A
  occurs.</span></p><p><span m="356480">And we have this
  relation.</span></p><p><span m="360170">And so with this correspondence, we
  readily</span> <span m="362920">conclude that the expected value of an
  indicator random</span> <span m="366840">variable is equal to the probability
  of that event.</span></p><p><span m="372070">Let us move now to the
  calculation of the expected</span> <span m="375120">value of a uniform random
  variable.</span></p><p><span m="378720">Let us consider, to keep things
  simple, a random</span> <span m="381000">variable which is uniform on the set
  from 0 to n.</span></p><p><span m="386750">It's uniform, so the probability of
  the values that</span> <span m="390020">it can take are all equal to each
  other.</span></p><p><span m="393590">It can take one of n plus 1 possible
  values, and so the</span> <span m="397550">probability of each one of the
  values is 1 over n plus 1.</span></p><p><span m="401860">We want to calculate
  the expected value</span> <span m="403909">of this random
  variable.</span></p><p><span m="405330">How do we proceed?</span></p><p><span
  m="406870">We just recall the definition of the
  expectation.</span></p><p><span m="409730">It's a sum where we add over all of
  the possible values.</span></p><p><span m="414090">And for each one of the
  values, we multiply by its</span> <span m="417159">corresponding
  probability.</span></p><p><span m="424270">So we obtain a summation of this
  form.</span></p><p><span m="429970">We can factor out a factor of 1 over n
  plus 1, and we're</span> <span m="435370">left with 0 plus 1 plus all the way
  up to n.</span></p><p><span m="440930">And perhaps you remember the formula
  for us summing those</span> <span m="445840">numbers, and it is n times n plus
  1 over 2.</span></p><p><span m="454020">And after doing the cancellations, we
  obtain a</span> <span m="457590">final answer, which is n over
  2.</span></p><p><span m="461060">Incidentally, notice that n over 2 is just
  the midpoint of</span> <span m="466790">this picture that we have here in this
  diagram.</span></p><p><span m="470909">This is always the
  case.</span></p><p><span m="472850">Whenever we have a PMF which is symmetric
  around a certain</span> <span m="478030">point, then the expected value will
  be</span> <span m="480940">the center of symmetry.</span></p><p><span
  m="483060">More general, if you do not have symmetry, the expected</span>
  <span m="487060">value turns out to be the center of gravity of the
  PMF.</span></p><p><span m="491900">If you think of these bars as having
  weight, where the</span> <span m="495600">weight is proportional to their
  height, the center of</span> <span m="498770">gravity is the point at which
  you should put your finger if</span> <span m="502750">you want to balance that
  diagram so that it doesn't</span> <span m="505490">fall in one direction or
  the other.</span></p><p><span m="510060">And we now close this segment by
  providing one more</span> <span m="513289">interpretation of
  expectations.</span></p><p><span m="516039">Suppose that we have a class
  consisting of n students and</span> <span m="519130">that the ith student has
  a weight which</span> <span m="521740">is some number xi.</span></p><p><span
  m="524730">We have a probabilistic experiment where we pick one</span> <span
  m="527600">of the students at random, and each student is equally
  likely</span> <span m="531170">to be picked as any other
  student.</span></p><p><span m="533820">And we're interested in the random
  variable X, which is</span> <span m="536650">the weight of the student that
  was selected.</span></p><p><span m="539970">To keep things simple, we will
  assume that the</span> <span m="542300">xi's are all
  distinct.</span></p><p><span m="545690">And we first find the PMF of this
  random variable.</span></p><p><span m="551540">Any particular xi that this
  possible is associated to</span> <span m="556110">exactly one student, because
  we assumed that</span> <span m="558620">the xi's are
  distinct.</span></p><p><span m="560460">So this probability would be the
  probability or selecting</span> <span m="564140">the ith student, and that
  probability is 1 over n.</span></p><p><span m="569770">And now we can proceed
  and calculate the expected value</span> <span m="573230">of the random
  variable X. This random variable X takes</span> <span m="578470">values, and
  the values that it takes are the xi's.</span></p><p><span m="583340">A
  particular xi would be associated with a probability</span> <span m="588540">1
  over n, and we're adding over all the i's or over all</span> <span
  m="593840">of the students.</span></p><p><span m="595040">And so this is the
  expected value.</span></p><p><span m="598330">What we have here is just the
  average of the weights of the</span> <span m="603910">students in this
  class.</span></p><p><span m="606060">So the expected value in this particular
  experiment can be</span> <span m="610360">interpreted as the true average over
  the entire</span> <span m="614550">population of the
  students.</span></p><p><span m="617550">Of course, here we're talking about
  two</span> <span m="619400">different kinds of averages.</span></p><p><span
  m="621730">In some sense, we're thinking of expected values as the</span>
  <span m="625280">average in a large number of repetitions of
  experiments.</span></p><p><span m="628540">But here we have another
  interpretation as the average</span> <span m="632040">over a particular
  population.</span></p><p>&nbsp;</p>
uid: 0ba2358c042feaf97a76a1e899f5e930
type: course
layout: video
---
