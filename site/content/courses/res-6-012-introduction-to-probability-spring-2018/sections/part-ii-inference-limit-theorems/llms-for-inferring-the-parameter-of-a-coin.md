---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 4CkWjk40TBY
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    title: Video-YouTube-Stream
    type: Video
    uid: 8057b05e045a34898583d252e4b50af1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/4CkWjk40TBY/default.jpg'
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b647ce3080b54b9de00fd6e35b0e551a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 4CkWjk40TBY
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2aa748487a2d015a1285ad59f1758ad6
  - id: 4CkWjk40TBY.srt
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-for-inferring-the-parameter-of-a-coin/4CkWjk40TBY.srt
    title: 3play caption file
    type: null
    uid: c5a003f19e9804065f236ca96031ea39
  - id: 4CkWjk40TBY.pdf
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-for-inferring-the-parameter-of-a-coin/4CkWjk40TBY.pdf
    title: 3play pdf file
    type: null
    uid: 3fd1524a36886732fc1d42324e573dc4
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c78b0f6e979f21e39b5169d1cc7f1b06
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8c90824fe6e8af656dfdced952577b9c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-06_300k.mp4
    parent_uid: 6994e497cd0277b6c2c20387256eab01
    title: Video-Internet Archive-MP4
    type: Video
    uid: bb97f46caf7ba6f5298d58a3b272b78b
inline_embed_id: 94434887llmsforinferringtheparameterofacoin27357380
order_index: 1615
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: llms-for-inferring-the-parameter-of-a-coin
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-for-inferring-the-parameter-of-a-coin
title: LLMS for Inferring the Parameter of a Coin
transcript: >-
  <p><span m="820">Let's now go through another example,</span> <span
  m="3610">which will be a little more challenging.</span></p><p><span
  m="6770">We're going to revisit an old problem.</span></p><p><span m="9040">We
  have a coin that has an unknown bias, Theta.</span></p><p><span m="12535">And
  we have a prior distribution on this Theta.</span></p><p><span m="15700">We
  fix some positive integer, n, we flip a coin</span> <span m="18960">n times,
  that has this unknown bias.</span></p><p><span m="21750">And we record the
  number of heads.</span></p><p><span m="24180">On the basis of the number of
  heads that have been observed,</span> <span m="27090">we wish to estimate the
  bias, Theta, of the coin.</span></p><p><span m="31850">To make things more
  concrete, we're</span> <span m="33360">going to assume a prior distribution on
  Theta that</span> <span m="36080">is uniform on the unit
  interval.</span></p><p><span m="39120">Now, this is a problem we have
  considered before.</span></p><p><span m="42500">We have calculated the
  expected value of Theta given X.</span></p><p><span m="47800">And we did find
  that the expected value takes</span> <span m="51310">this particular
  form.</span></p><p><span m="52920">Now, notice that this is a linear function
  of X.</span></p><p><span m="56800">And if it turns out the least mean squares
  estimator</span> <span m="60180">is a linear function of X, then we're</span>
  <span m="63010">guaranteed, since this is the best,</span> <span
  m="65580">that this is also the best within the class</span> <span
  m="68020">of linear estimators.</span></p><p><span m="70620">So we immediately
  have the conclusion</span> <span m="73120">that the linear least mean
  squares</span> <span m="75220">estimator is this particular function of
  X.</span></p><p><span m="78900">So there's not much left to
  do.</span></p><p><span m="82350">On the other hand, just for practice,</span>
  <span m="84700">let us derive this answer directly from the formulas</span>
  <span m="89030">that we have for the linear least mean squares
  estimator,</span> <span m="92330">and see whether we're going to get the same
  answer.</span></p><p><span m="95910">So we want to use this
  formula.</span></p><p><span m="97930">And in order to apply this formula, all
  that we have to do</span> <span m="101259">is to calculate these expected
  values, this variance,</span> <span m="104979">and this
  covariance.</span></p><p><span m="107110">So now let's move on to this
  particular calculational</span> <span m="110539">exercise.</span></p><p><span
  m="113030">Let's start by writing down what we</span> <span m="115190">know
  about the random variables involved in this problem.</span></p><p><span
  m="118759">About Theta, we know that it is uniform.</span></p><p><span
  m="121180">And so it has a mean of 1/2 and a variance of
  1/12.</span></p><p><span m="126470">About X, what we know is the
  following.</span></p><p><span m="129460">If you fix the bias of the coin, then
  the number</span> <span m="133760">of heads you're going to obtain in n
  flips</span> <span m="136400">has a binomial distribution, with parameters n
  and Theta.</span></p><p><span m="140670">But of course, Theta itself is a
  random variable.</span></p><p><span m="143740">So for this reason, this is a
  conditional distribution.</span></p><p><span m="147220">But within the
  conditional universe,</span> <span m="149440">we know the mean and the
  variance of a binomial,</span> <span m="152460">and they are as
  follows.</span></p><p><span m="154079">The mean of a binomial is n times the
  bias of the coin.</span></p><p><span m="158000">But because we're talking
  about the conditional universe,</span> <span m="160910">this is a conditional
  expectation.</span></p><p><span m="162960">And it's a random variable, because
  it's</span> <span m="165010">affected by the value of the random variable
  Theta.</span></p><p><span m="168350">And similarly, for the variance,
  it's</span> <span m="170180">the usual formula for the variance of a
  binomial,</span> <span m="173880">except that now the bias itself is a random
  variable.</span></p><p><span m="178780">So now let's continue with the
  calculation of the quantities</span> <span m="182250">that we need for the
  formula for our estimator.</span></p><p><span m="186060">Let's start with the
  expected value of X.</span></p><p><span m="189120">Since we know the
  conditional expectation of X,</span> <span m="192050">we can use the law of
  iterated expectations.</span></p><p><span m="195460">The unconditional
  expectation is the expected value</span> <span m="199650">of the conditional
  expectation, which is n times Theta.</span></p><p><span m="205200">And since
  the mean of Theta is 1/2, we obtain n/2.</span></p><p><span m="212630">Let us
  now continue with the calculation of the variance.</span></p><p><span
  m="216250">There are different ways that we can calculate
  it.</span></p><p><span m="218720">One could be the law of total
  variance.</span></p><p><span m="221850">But we will take the alternative
  approach,</span> <span m="224620">which is to use the general formula for the
  variance,</span> <span m="228010">that the variance is equal to the
  expected</span> <span m="230140">value of the square of a random
  variable,</span> <span m="232740">minus the square of the expected
  value.</span></p><p><span m="237900">We know the expected value of
  X.</span></p><p><span m="239970">So all that's left is to calculate</span>
  <span m="241870">the expected value of X squared.</span></p><p><span
  m="244540">How are we going calculate it?</span></p><p><span m="247480">Well,
  we know the conditional distribution of X.</span></p><p><span m="251110">So it
  should be easy to calculate</span> <span m="253800">the conditional
  expectation of X squared</span> <span m="257820">in the conditional universe,
  and then</span> <span m="261190">use the law of iterated expectations</span>
  <span m="264120">to obtain the unconditional expectation.</span></p><p><span
  m="267460">So now, we need to calculate this conditional expectation</span>
  <span m="270740">here.</span></p><p><span m="272330">How do we do
  it?</span></p><p><span m="274230">The expected value of a square of a random
  variable</span> <span m="276780">is always equal to the variance of that
  random variable</span> <span m="280370">plus the square of the expected
  value.</span></p><p><span m="283800">We're going to use this property,</span>
  <span m="285530">but we're going to use it in the conditional
  universe.</span></p><p><span m="288340">So in the conditional universe,
  this</span> <span m="290580">is going to be equal to the variance,</span>
  <span m="292900">in the conditional universe, which is n times Theta times
  1</span> <span m="297670">minus Theta, plus the square of the expected value
  of X,</span> <span m="304020">but the expected value in the conditional
  universe, which</span> <span m="307300">is this quantity-- n times
  Theta.</span></p><p><span m="310050">So we obtain another term-- n squared,
  Theta squared.</span></p><p><span m="316210">So now we can go back to our
  previous calculation,</span> <span m="319330">and right here, the expected
  value</span> <span m="322430">of this expression, which is n times
  Theta.</span></p><p><span m="331210">And then we have some Theta squared
  terms.</span></p><p><span m="334930">One is n squared.</span></p><p><span
  m="336570">The other is a minus n.</span></p><p><span m="339159">So we obtain
  plus n squared minus n Theta squared.</span></p><p><span m="351380">The
  expected value of n times Theta</span> <span m="354409">is n times the
  expected value of Theta, which is 1/2.</span></p><p><span m="358700">So we
  obtain a factor of n/2.</span></p><p><span m="364460">But then we have this
  additional term here.</span></p><p><span m="368270">We need the expected value
  of Theta squared.</span></p><p><span m="371120">What is it?</span></p><p><span
  m="372180">Well, since we know the mean and the variance of Theta,</span>
  <span m="375760">we can calculate the expected value of Theta
  squared.</span></p><p><span m="378470">It is equal to the variance plus the
  square of the mean.</span></p><p><span m="386410">And this evaluates to
  1/3.</span></p><p><span m="390630">So from here, we're going to obtain</span>
  <span m="393880">plus n squared minus n divided by 3.</span></p><p><span
  m="401540">And you can rewrite this term in a different way</span> <span
  m="405450">by collecting first the n terms, n/2 minus n/3.</span></p><p><span
  m="412380">This gives us n/6.</span></p><p><span m="416510">And then there's
  the n squared term,</span> <span m="418540">which is n squared over
  3.</span></p><p><span m="423850">Now that we found the expected value of X
  squared,</span> <span m="426590">we can go back to this
  calculation.</span></p><p><span m="429260">We have n/6 plus n squared over
  3</span> <span m="437850">minus the square of the expected value of X,</span>
  <span m="440970">which is this expression here.</span></p><p><span
  m="442600">So we obtain minus n squared over 4.</span></p><p><span
  m="446480">1/3 minus 1/4-- that makes 1/12.</span></p><p><span m="451130">So
  we obtain n/6 plus n squared over 12.</span></p><p><span m="462170">Or another
  way of writing this is n times n plus 2 over 12.</span></p><p><span
  m="471880">And this completes the calculation</span> <span m="473840">of the
  variance of X.</span></p><p><span m="476470">The last quantity that's left for
  us to calculate</span> <span m="479290">is the covariance of Theta with
  X.</span></p><p><span m="483080">We're going to calculate it using the
  alternative formula</span> <span m="486640">for the covariance, which is the
  expectation of the product</span> <span m="491320">minus the product of the
  expectations.</span></p><p><span m="496960">We have the expectations, but we
  do not</span> <span m="499300">have the expectation of the
  product.</span></p><p><span m="501540">So we need to calculate
  it.</span></p><p><span m="503950">Once more, it's going to be the same
  trick.</span></p><p><span m="506160">We're going to condition on Theta,</span>
  <span m="508800">and then use the law of iterated
  expectations.</span></p><p><span m="513070">So the law of iterated
  expectations,</span> <span m="515350">when you condition on Theta, takes this
  form.</span></p><p><span m="518789">And to continue here, we need to
  find</span> <span m="521230">this conditional expectation in the
  inside.</span></p><p><span m="525220">This conditional expectation-- what is
  it?</span></p><p><span m="529030">If I give you Theta, then you know
  Theta.</span></p><p><span m="531630">It is becoming now a
  constant.</span></p><p><span m="533470">There's nothing random to it, so
  it</span> <span m="535410">can be pulled outside the
  expectation.</span></p><p><span m="538600">And we obtain Theta times the
  conditional expectation of X.</span></p><p><span m="543780">We know what the
  conditional expectation of X is.</span></p><p><span m="546740">It's n times
  Theta.</span></p><p><span m="548070">So from here, we obtain overall, a term n
  times Theta squared.</span></p><p><span m="553330">So now we can go back
  here.</span></p><p><span m="555940">We have the expected
  value.</span></p><p><span m="557780">And the term in the inside-- we just
  found it.</span></p><p><span m="560890">It's n times Theta
  squared.</span></p><p><span m="563390">And since the expected value of Theta
  squared</span> <span m="565750">is 1/3, from here, we obtain
  n/3.</span></p><p><span m="572670">And now we can go back, finally, to the
  calculation</span> <span m="576040">of the covariance.</span></p><p><span
  m="577330">It's going to be n/3, minus the expected value of Theta,</span>
  <span m="583160">which is 1/2, times the expected value of X, which is
  n/2.</span></p><p><span m="588350">So it's minus n over
  four.</span></p><p><span m="592310">And this evaluates to
  n/12.</span></p><p><span m="597880">So we have succeeded in calculating all
  the quantities</span> <span m="601240">that are needed in the formula for the
  linear least</span> <span m="604830">mean squares
  estimator.</span></p><p><span m="608710">We can now take those values that we
  have just found</span> <span m="612540">and substitute them into this
  formula.</span></p><p><span m="615620">And after a little bit of algebra and
  moving terms</span> <span m="618650">around, everything simplifies to this
  expression.</span></p><p><span m="622820">Just to verify that this makes
  sense,</span> <span m="625670">what is the coefficient next to
  X?</span></p><p><span m="628122">It's the covariance divided by the
  variance.</span></p><p><span m="630820">n/12 divided by this
  expression--</span> <span m="634320">this n cancels that n.</span></p><p><span
  m="636050">This 12 cancels that 12.</span></p><p><span m="637410">We're left
  with an n plus 2 in the denominator.</span></p><p><span m="640460">And indeed,
  the coefficient that multiplies X</span> <span m="643520">is the term n plus 2
  in the denominator.</span></p><p><span m="647960">And you can similarly verify
  that the constant term as well</span> <span m="651280">is the correct
  one.</span></p><p><span m="653870">So of course, this answer is what we had
  found in the past</span> <span m="658400">to be the optimal, the least mean
  squares</span> <span m="662160">estimator of X. As we discussed earlier, when
  this is linear</span> <span m="668310">in X, it has to be the same as the
  linear least mean squares</span> <span
  m="671970">estimator.</span></p><p><span m="673050">So this answer is not a
  surprise,</span> <span m="675530">but it was an interesting and perhaps
  useful</span> <span m="677930">exercise to go through the details of this
  calculation</span> <span m="681440">to see what it takes to figure out</span>
  <span m="684030">the different terms in this formula.</span></p><p>&nbsp;</p>
uid: 6994e497cd0277b6c2c20387256eab01
type: courses
layout: video
---
