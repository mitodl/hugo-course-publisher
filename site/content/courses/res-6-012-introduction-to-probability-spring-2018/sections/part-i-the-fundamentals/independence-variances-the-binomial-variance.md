---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: YQ26hzI4OJk
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    title: Video-YouTube-Stream
    type: Video
    uid: 99fc779a312e0ca1f29446b27f948b67
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/YQ26hzI4OJk/default.jpg'
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 85325d30b9f8421af360eff2c247089b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: YQ26hzI4OJk
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d288ab949a7f6b06fae40a66b7cd1ca1
  - id: YQ26hzI4OJk.srt
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independence-variances-the-binomial-variance/YQ26hzI4OJk.srt
    title: 3play caption file
    type: null
    uid: e4b6e809186d3124a416afba6a13b101
  - id: YQ26hzI4OJk.pdf
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independence-variances-the-binomial-variance/YQ26hzI4OJk.pdf
    title: 3play pdf file
    type: null
    uid: e74ec9809f406d2d27d1a80115b4a7af
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 094cf502b2e6146e61b006d8e7e37128
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1b9d126426ec7fcaa7ba3d11e426cf77
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L07-07_300k.mp4
    parent_uid: 7583bc046f96a5b9f75c8f9516e8a0bb
    title: Video-Internet Archive-MP4
    type: Video
    uid: f5dacb64eb9243771239989a2a9bb961
inline_embed_id: 56796953independencevariancesthebinomialvariance27791326
order_index: 699
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: independence-variances-the-binomial-variance
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independence-variances-the-binomial-variance
title: 'Independence, Variances & the Binomial Variance'
transcript: >-
  <p><span m="610">Let us now revisit the variance and see what happens</span>
  <span m="3930">in the case of independence.</span></p><p><span
  m="6000">Variances have some general properties that we have</span> <span
  m="8640">already seen.</span></p><p><span m="11010">However, since we often
  add random variables, we would</span> <span m="14910">like to be able to say
  something about the variance</span> <span m="18020">of the sum of two random
  variables.</span></p><p><span m="20800">Unfortunately, the situation is not so
  simple, and in</span> <span m="24240">general, the variance of the sum is not
  the same as the sum</span> <span m="28150">of the
  variances.</span></p><p><span m="29670">We will see an example
  shortly.</span></p><p><span m="32150">On the other hand, when X and Y are
  independent, the</span> <span m="36430">variance of the sum is equal to the
  sum of the variances,</span> <span m="41610">and this is a very useful
  fact.</span></p><p><span m="44030">Let us go through the derivation of this
  property.</span></p><p><span m="47040">But to keep things simple, let us
  assume just for the sake of</span> <span m="52410">the derivation, that the
  two random variables have 0 mean.</span></p><p><span m="62650">So in that
  case, the variance over the sum is just the</span> <span m="68700">expected
  value of the square of the sum.</span></p><p><span m="77210">And we can expand
  the quadratic and write this as</span> <span m="81025">the expectation of X
  squared plus 2 X Y plus Y squared.</span></p><p><span m="89170">Then we use
  linearity of expectations to write this as</span> <span m="93160">the expected
  value of X squared plus twice the</span> <span m="98450">expected value of X
  times Y and then plus the expected</span> <span m="106910">value of Y
  squared.</span></p><p><span m="110570">Now, the first term is just the
  variance of X because we</span> <span m="115370">have assumed that we have 0
  mean.</span></p><p><span m="119680">The last term is similarly the variance of
  Y. How about the</span> <span m="126320">middle term?</span></p><p><span
  m="127870">Because of independence, the expected value of the product</span>
  <span m="132900">is the same as the product of the expected values, and
  the</span> <span m="138850">expected values are 0 in our
  case.</span></p><p><span m="141690">So this term, because of independence, is
  going to be</span> <span m="146720">equal to 0.</span></p><p><span
  m="148270">In particular, what we have is that the expected value of XY</span>
  <span m="153060">equals the expected value of X times the expected value of
  Y,</span> <span m="158750">equal to 0.</span></p><p><span m="161920">And so we
  have verified that indeed the variance of the sum</span> <span m="165180">is
  equal to the sum of the variances.</span></p><p><span m="167910">Let us now
  look at some examples.</span></p><p><span m="172560">Suppose that X is the
  same random variable as Y. Clearly,</span> <span m="176730">this is a case
  where independence fails to hold.</span></p><p><span m="179610">If I tell you
  the value of X, then you know the value of Y.</span></p><p><span m="183410">So
  in this case, the variance of the sum is the same as the</span> <span
  m="187400">variance of twice X. Since X is the same as Y, X plus Y is</span>
  <span m="192910">2 times X. And then using this property for the
  variance,</span> <span m="198760">what happens when we multiply by a
  constant?</span></p><p><span m="201500">This is going to be 4 times the
  variance of X.</span></p><p><span m="207110">In another example, suppose that
  X is the negative of Y.</span></p><p><span m="211230">In that case, X plus Y
  is identically equal to 0.</span></p><p><span m="215790">So we're dealing with
  a random variable that</span> <span m="218640">takes a constant
  value.</span></p><p><span m="220030">In particular, it is always equal to its
  mean, and so the</span> <span m="223510">difference from the mean is always
  equal to 0, and so the</span> <span m="226790">variance will also evaluate to
  0.</span></p><p><span m="230370">So we see that the variance of the sum can
  take quite</span> <span m="233720">different values depending on the sort of
  interrelation that</span> <span m="238410">we have between the two random
  variables.</span></p><p><span m="241450">So these two examples indicate that
  knowing the variance of</span> <span m="244740">each one of the random
  variables is not enough to say</span> <span m="248780">much about the variance
  of the sum.</span></p><p><span m="251440">The answer will generally depend on
  how the two random</span> <span m="254530">variables are related to each other
  and what kind of</span> <span m="257260">dependencies they
  have.</span></p><p><span m="259410">As a last example, suppose now that X and
  Y are independent.</span></p><p><span m="265260">X is independent from Y, and
  therefore X is also</span> <span m="269080">independent from minus
  3Y.</span></p><p><span m="272740">Therefore, this variance is equal to the sum
  of the</span> <span m="276620">variances of X and of minus
  3Y.</span></p><p><span m="284080">And using the facts that we already know,
  this is going to</span> <span m="288190">be equal to the variance of X plus 9
  times the variance of</span> <span m="295440">Y.</span></p><p><span
  m="299490">As an illustration of the usefulness of the property of</span>
  <span m="302970">the variance that we have just established, we will now
  use</span> <span m="306300">it to calculate the variance of a binomial random
  variable.</span></p><p><span m="310240">Remember that a binomial with
  parameters n and p corresponds</span> <span m="314330">to the number of
  successes in n independent trials.</span></p><p><span m="320400">We use
  indicator variables.</span></p><p><span m="322700">This is the same trick that
  we used to calculate the expected</span> <span m="325870">value of the
  binomial.</span></p><p><span m="327670">So the random variable X sub i is
  equal to 1 if the i-th</span> <span m="331795">trial is a success and is a 0
  otherwise.</span></p><p><span m="336070">And as we did before, we note that X,
  the total number of</span> <span m="342030">successes, is the sum of those
  indicator variables.</span></p><p><span m="345909">Each success makes one of
  those variables equal to 1, so</span> <span m="349930">by adding those
  indicator variables, we're just counting</span> <span m="353630">the number of
  successes.</span></p><p><span m="356120">The key point to note is that the
  assumption of independence</span> <span m="361100">that we're making is
  essentially the assumption</span> <span m="365400">that these random variables
  Xi are independent of each other.</span></p><p><span m="371670">So we're
  dealing with a situation where we have a sum</span> <span m="376130">of
  independent random variables, and according to</span> <span m="380790">what we
  have shown, the variance of X is going to be</span> <span m="385490">the sum
  of the variances of the Xi's.</span></p><p><span m="394620">Now, the Xi's all
  have the same distribution so all these</span> <span m="399500">variances will
  be the same.</span></p><p><span m="400950">It suffices to consider one of
  them.</span></p><p><span m="405520">Now, X1 is a Bernoulli random variable
  with parameter p.</span></p><p><span m="409409">We know what its variance
  is--</span> <span m="412210">it is p times 1 minus p.</span></p><p><span
  m="417580">And therefore, this is the formula for the variance of a</span>
  <span m="422890">binomial random variable.</span></p><p>&nbsp;</p>
uid: 7583bc046f96a5b9f75c8f9516e8a0bb
type: course
layout: video
---
