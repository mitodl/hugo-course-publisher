---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Kycmb2IwV-Y
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    title: Video-YouTube-Stream
    type: Video
    uid: e15f0e9dfca2c6c9649767a78513fd16
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Kycmb2IwV-Y/default.jpg'
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8e05bac2b7e403b39ce39a05be7c0c12
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Kycmb2IwV-Y
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 617218c7203976d8e0b10b2c4fd92de9
  - id: Kycmb2IwV-Y.srt
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-hat-problem/Kycmb2IwV-Y.srt
    title: 3play caption file
    type: null
    uid: 2976330ecf8f9d39679786a4242170c1
  - id: Kycmb2IwV-Y.pdf
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-hat-problem/Kycmb2IwV-Y.pdf
    title: 3play pdf file
    type: null
    uid: e54b7f60b0e1935660d61dc4f270032a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a953d5087305fc3cc645ce666cd455be
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fd5230fe000a86dee3ffc9f2c0468dd7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L07-08_300k.mp4
    parent_uid: d9ed8ca5415f215ef91ddf549edf0052
    title: Video-Internet Archive-MP4
    type: Video
    uid: a489f1f9dd055cd6ceb6bb08a73f7318
inline_embed_id: 63636474thehatproblem81976506
order_index: 708
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-hat-problem
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-hat-problem
title: The Hat Problem
transcript: >-
  <p><span m="550">We will now study a problem which is quite difficult
  to</span> <span m="4200">approach in a direct brute force manner but
  becomes</span> <span m="8800">tractable once we break it down into simpler
  pieces using</span> <span m="14520">several of the tricks that we have learned
  so far.</span></p><p><span m="17410">And this problem will also be a good
  opportunity for</span> <span m="21030">reviewing some of the tricks and
  techniques</span> <span m="23840">that we have developed.</span></p><p><span
  m="25690">The problem is the following.</span></p><p><span m="27420">There are
  n people.</span></p><p><span m="28790">And let's say for the purpose of
  illustration that we have 3</span> <span m="33280">people, persons 1, 2, and
  3.</span></p><p><span m="40790">And each person has a hat.</span></p><p><span
  m="43280">They throw their hats inside a box.</span></p><p><span m="46780">And
  then each person picks a hat at random out of that box.</span></p><p><span
  m="51770">So here are the three parts.</span></p><p><span m="60610">And one
  possible outcome of this experiment is that person</span> <span m="64849">1
  ends up with hat number 2, person 2 ends up with hat</span> <span
  m="69020">number 1, person 3 ends up with hat number 3.</span></p><p><span
  m="74120">We could indicate the hats that each person got by noting</span>
  <span m="79090">here the numbers associated with each</span> <span
  m="81940">person, the hat numbers.</span></p><p><span m="84760">And notice
  that this sequence of numbers, which is a</span> <span m="89470">description
  of the outcome of the experiment, is just a</span> <span m="92570">permutation
  of the numbers 1, 2, 3 of the hats.</span></p><p><span m="96660">So we permute
  the hat numbers so that we can place them next</span> <span m="101020">to the
  person that got each one of the hats.</span></p><p><span m="104640">In
  particular, we have n factorial possible outcomes.</span></p><p><span
  m="109020">This is the number of possible permutations.</span></p><p><span
  m="112710">What does it mean to pick hats at random?</span></p><p><span
  m="116340">One interpretation is that every</span> <span
  m="118680">permutation is equally likely.</span></p><p><span m="121370">And
  since we have n factorial permutations, each permutation</span> <span
  m="125660">would have a probability of 1 over n factorial.</span></p><p><span
  m="130169">But there's another way of describing our model, which is</span>
  <span m="135440">the following.</span></p><p><span m="137620">Person 1 gets a
  hat at random out of the three available.</span></p><p><span m="142650">Then
  person 2 gets a hat at random out of</span> <span m="146420">the remaining
  hats.</span></p><p><span m="148750">Then person 3 gets the remaining
  hat.</span></p><p><span m="151860">Each time that there is a choice, each one
  of the</span> <span m="154600">available hats is equally likely to be
  picked</span> <span m="157600">as any other hat.</span></p><p><span
  m="159700">Let us calculate the probability, let's say, that</span> <span
  m="162310">this particular permutation gets materialized.</span></p><p><span
  m="165710">The probability that person 1 gets hat number 2 is
  1/3.</span></p><p><span m="172350">Then we're left with two
  hats.</span></p><p><span m="177350">Person 2 has 2 hats to choose
  from.</span></p><p><span m="179730">The probability that it picks this
  particular hat</span> <span m="182680">is going to be 1/2.</span></p><p><span
  m="185440">And finally, person 3 has only 1 hat available, so it will
  be</span> <span m="190330">picked with probability 1.</span></p><p><span
  m="192500">So the probability of this particular permutation is one</span>
  <span m="196243">over 3 factorial.</span></p><p><span m="198880">But you can
  repeat this argument and consider any</span> <span m="201900">other
  permutation, and you will always be getting the</span> <span m="204960">same
  answer.</span></p><p><span m="206260">Any particular permutation has the same
  probability, one over</span> <span m="209346">3 factorial.</span></p><p><span
  m="211790">The same argument goes through for the case of general n, n</span>
  <span m="215570">people and n hats.</span></p><p><span m="217430">And we will
  find that any permutation will have the same</span> <span
  m="220740">probability, 1/n factorial.</span></p><p><span
  m="223990">Therefore, the process of picking one hat at a time is</span> <span
  m="228350">probabilistically identical to a model in which we simply</span>
  <span m="232660">state that all permutations are equally
  likely.</span></p><p><span m="238040">Now that we have described our model and
  our process and the</span> <span m="242370">associated probabilities, let us
  consider the question we</span> <span m="245940">want to
  answer.</span></p><p><span m="247680">Let X be the number of people who get
  their own hat back.</span></p><p><span m="253590">For example, for the outcome
  that we have drawn here, the</span> <span m="258380">only person who gets
  their own hat back is person 3.</span></p><p><span m="262110">And so in this
  case X happens to take the value of 1.</span></p><p><span m="266720">What we
  want to do is to calculate the expected value</span> <span m="269950">of the
  random variable X. The problem is difficult because</span> <span m="275370">if
  you try to calculate the PMF of the random variable X</span> <span
  m="281040">and then use the definition of the expectation to calculate</span>
  <span m="285520">this sum, you will run into big
  difficulties.</span></p><p><span m="291260">Calculating this quantity, the PMF
  of X, is difficult.</span></p><p><span m="296100">And it is difficult because
  there is no simple expression</span> <span m="300300">that describes
  it.</span></p><p><span m="302230">So we need to do something more intelligent,
  find some</span> <span m="305460">other way of approaching the
  problem.</span></p><p><span m="308180">The trick that we will use is to employ
  indicator variables.</span></p><p><span m="313480">Let Xi be equal to one 1 if
  person i selects their own hat</span> <span m="318590">and 0
  otherwise.</span></p><p><span m="320680">So then, each one of the Xi's is 1
  whenever a person has</span> <span m="325610">selected their own
  hat.</span></p><p><span m="327320">And by adding all the 1's that we may get,
  we obtain the</span> <span m="332659">total number of people who have selected
  their own hats.</span></p><p><span m="337580">This makes things easier,
  because now to calculate the</span> <span m="340390">expected value of X it's
  sufficient to calculate the</span> <span m="343820">expected value of each one
  of those terms and add the</span> <span m="347440">expected values, which
  we're allowed to</span> <span m="350450">do because of
  linearity.</span></p><p><span m="353260">So let's look at the typical term
  here.</span></p><p><span m="357370">What is the expected value of
  Xi?</span></p><p><span m="360410">If you consider the first description or our
  model, all</span> <span m="364000">permutations are equally likely, this
  description is</span> <span m="367300">symmetric with respect to all of the
  persons.</span></p><p><span m="370410">So the expected value of Xi should be
  the same as the</span> <span m="374160">expected value of
  X1.</span></p><p><span m="378910">Now, to calculate the expected value of X1,
  we will consider</span> <span m="384300">the sequential description of the
  process in which 1 is the</span> <span m="387740">first person to pick a
  hat.</span></p><p><span m="390780">Now, since X1 is a Bernoulli random
  variable that takes</span> <span m="394190">values 0 or 1, the expected value
  of X1 is just the</span> <span m="398490">probability that X1 is equal to
  1.</span></p><p><span m="402680">And if person 1 is the first one to choose a
  hat, that</span> <span m="406130">person has probability 1/n of obtaining the
  correct hat.</span></p><p><span m="413540">So each one of these random
  variables has an expected</span> <span m="416560">value of
  1/n.</span></p><p><span m="421050">The expected value of X by linearity is
  going to be the</span> <span m="425400">sum of the expected
  values.</span></p><p><span m="431660">There is n of them.</span></p><p><span
  m="434950">Each expected value is 1/n.</span></p><p><span m="440160">And so
  the final answer is 1.</span></p><p><span m="444000">This is the expected
  value of the random variable X.</span></p><p><span m="452060">Let us now move
  and try to calculate a more difficult</span> <span m="456140">quantity,
  namely, the variance of X. How shall we proceed?</span></p><p><span
  m="464060">Things would be easiest if the random variables Xi were</span>
  <span m="470300">independent.</span></p><p><span m="471370">Because in that
  case, the variance of X would be the sum</span> <span m="475630">of the
  variances of the Xi's.</span></p><p><span m="478450">But are the Xi's
  independent?</span></p><p><span m="481960">Let us consider a special
  case.</span></p><p><span m="484220">Suppose that we only have two persons and
  that I tell you</span> <span m="489300">that the first person got their own
  hat back.</span></p><p><span m="493660">In that case, the second person must
  have also gotten</span> <span m="497980">their own hat
  back.</span></p><p><span m="500580">If, on the other hand, person 1 did not to
  get their own hat</span> <span m="503840">back, then person 2 will not get
  their own hat back either.</span></p><p><span m="510160">Because in this
  scenario, person 1 gets hat 2, and that</span> <span m="513808">means that
  person 2 gets hat 1.</span></p><p><span m="516370">So we see that knowing the
  value of the random variable</span> <span m="519419">X1 tells us a lot about
  the value of the</span> <span m="523240">random variable
  X2.</span></p><p><span m="525030">And that means that the random
  variables</span> <span m="526650">X1 and X2 are dependent.</span></p><p><span
  m="529740">More generally, if I were to tell you that the first n</span> <span
  m="533140">minus 1 people got their own hats back, then the last</span> <span
  m="538680">remaining person will have his or her own hat</span> <span
  m="542860">available to be picked.</span></p><p><span m="544140">That's going
  to be the only available hat.</span></p><p><span m="546770">And then person n
  we also get their hat back.</span></p><p><span m="550020">So we see that the
  information about some of the Xi's gives</span> <span m="553730">us
  information about the remaining Xn.</span></p><p><span m="558180">And again,
  this means that the random</span> <span m="559920">variables are
  dependent.</span></p><p><span m="563140">Since we do not have independence, we
  cannot find</span> <span m="565870">the variance by just adding the variances
  of the different</span> <span m="568760">random variables.</span></p><p><span
  m="570120">But we need to do a lot more work in that
  direction.</span></p><p><span m="575700">In general, whenever we need to
  calculate variances, it is</span> <span m="579130">usually simpler to carry
  out the calculation using this</span> <span m="583220">alternative form for
  the variance.</span></p><p><span m="586710">So let us start towards a
  calculation of the expected</span> <span m="591440">value of X
  squared.</span></p><p><span m="594720">Now the random variable X squared, by
  simple algebra, is</span> <span m="599990">this expression times
  itself.</span></p><p><span m="602390">And by expanding the product we get
  all</span> <span m="605380">sorts of cross terms.</span></p><p><span
  m="607550">Some of these cross terms will be of the type X1 times Xi or</span>
  <span m="611900">X2 times X2.</span></p><p><span m="614050">These will be
  terms of this form, and there is n of them.</span></p><p><span m="619300">And
  then we get cross terms, such as X1 times X2, X1 times</span> <span
  m="623770">X3, X2 times X1, and so on.</span></p><p><span m="627670">How many
  terms do we have here?</span></p><p><span m="630880">Well, if we have n terms
  multiplying n other terms we</span> <span m="634100">have a total of n squared
  terms.</span></p><p><span m="637330">n are already here, so the remaining
  terms, which are the</span> <span m="641450">cross terms, will be n squared
  minus n.</span></p><p><span m="646050">Or, in a simpler form, it's n times n
  minus 1.</span></p><p><span m="653370">So now how are we going to calculate
  the expected value</span> <span m="657280">of X squared?</span></p><p><span
  m="658490">Well, we will use linearity of expectations.</span></p><p><span
  m="661310">So we need to calculate the expected value of Xi squared,</span>
  <span m="664890">and we also need to calculate the expected value of Xi
  Xj</span> <span m="669080">when i is different from j.</span></p><p><span
  m="672846">Let us start with Xi squared.</span></p><p><span m="677800">First,
  if we use the symmetric description of our model, all</span> <span
  m="682600">permutations are equally likely, then all persons play</span> <span
  m="686920">the same role.</span></p><p><span m="687440">There's symmetry in
  the problem.</span></p><p><span m="689130">So Xi squared has the same
  distribution as X1 squared.</span></p><p><span m="698270">Then, X1 is a 0-1
  random variable, a</span> <span m="702340">Bernoulli random
  variable.</span></p><p><span m="703980">So X1 squared will always take the
  same numerical value as</span> <span m="708310">the random variable
  X1.</span></p><p><span m="712400">This is a very special case which happens
  only because a</span> <span m="716300">random variable takes values in {0,
  1}.</span></p><p><span m="719140">And 0 squared is the same as
  0.</span></p><p><span m="721550">1 squared is the same as
  1.</span></p><p><span m="724575">This expected value is something that we have
  already</span> <span m="727660">calculated, and it is 1/n.</span></p><p><span
  m="733410">Let us now move to the calculation of the expectation</span> <span
  m="736270">of a typical term inside the sum.</span></p><p><span m="740060">So
  let i be different than j, and look at the</span> <span m="742320">expected
  value of Xi Xj.</span></p><p><span m="745280">Once more, because of the
  symmetry of the probabilistic</span> <span m="748550">model, it doesn't matter
  which i and j we are considering.</span></p><p><span m="753160">So we might as
  well consider the product of X1 with X2.</span></p><p><span m="760770">Now, X1
  and X2 take values 0 and 1.</span></p><p><span m="764760">And the product of
  the two also takes values 0 and 1.</span></p><p><span m="768620">So this is a
  Bernoulli random variable, and so the</span> <span m="771440">expectation of
  that random variable is just the</span> <span m="774340">probability that this
  random variable is equal to 1.</span></p><p><span m="781060">But for the
  product to be equal to 1, the only way that</span> <span m="785040">this can
  happen is if both of these random variables happen</span> <span m="789940">to
  be equal to 1.</span></p><p><span m="794890">Let us now turn to the
  sequential</span> <span m="798430">description of the
  model.</span></p><p><span m="800370">The probability that the first person
  gets their own hat back</span> <span m="804350">and the second person gets
  their own hat back is the</span> <span m="807400">probability that the first
  one gets their own hat back, and</span> <span m="812270">then multiplied by
  the conditional probability that</span> <span m="816020">the second person
  gets their own hat back, given that the</span> <span m="820380">first person
  got their own hat back.</span></p><p><span m="823540">What are these
  probabilities?</span></p><p><span m="824650">The probability that a person
  gets their</span> <span m="826150">own hat back is 1/n.</span></p><p><span
  m="830720">Given that person 1 got their own hat back, person 2 is</span>
  <span m="835010">faced with a situation where there are n</span> <span
  m="837450">minus 1 available hats.</span></p><p><span m="839800">And one of
  those is that person's hat.</span></p><p><span m="842540">So the probability
  that person 2 will also pick his or her</span> <span m="847400">own hat is 1
  over n minus 1.</span></p><p><span m="854920">Now we are in a position to
  calculate the expected value</span> <span m="859610">of X
  squared.</span></p><p><span m="863360">The expected value of X squared
  consists of the sum of</span> <span m="871180">n expected values, each one of
  which is equal to 1/n plus so</span> <span m="882110">many expected values,
  because we have so many terms, each</span> <span m="888400">one of which, by
  this calculation, is 1/n times 1</span> <span m="894490">over n minus
  1.</span></p><p><span m="897970">And we see that we get cancellations
  here.</span></p><p><span m="900780">And we obtain 1 plus 1, which is equal to
  2.</span></p><p><span m="909450">On the other hand we have this term that we
  need to subtract.</span></p><p><span m="913840">We found previously that the
  expected value of</span> <span m="916370">X is equal to 1.</span></p><p><span
  m="917860">So we need to subtract 1.</span></p><p><span m="919950">And the
  final answer to our problem is that the variance</span> <span m="923800">of X
  is also equal to 1.</span></p><p><span m="932200">So what we saw in this
  problem is that we can deal with quite</span> <span m="936780">complicated
  models, but by breaking them down into more</span> <span m="941810">manageable
  pieces, first break down the random variable X as</span> <span m="947600">a
  sum of different random variables, then taking the</span> <span
  m="951270">square of this and break it down into a number of</span> <span
  m="954680">different terms, and then by considering one term at a</span> <span
  m="958170">time, we can often end up with the solutions or the answers</span>
  <span m="964550">to problems that would have been</span> <span
  m="966110">otherwise quite difficult.</span></p><p>&nbsp;</p>
uid: d9ed8ca5415f215ef91ddf549edf0052
type: course
layout: video
---
