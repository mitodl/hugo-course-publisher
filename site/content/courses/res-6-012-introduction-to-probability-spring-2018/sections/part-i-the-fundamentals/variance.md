---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ZWo1XgAQE5k
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    title: Video-YouTube-Stream
    type: Video
    uid: 0e4834032325aa59f6a2611fd0b6223e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ZWo1XgAQE5k/default.jpg'
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 76c76559577ea687bcff1402ec82b48a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ZWo1XgAQE5k
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6aaf2cee4263f4b5beaaa1f692c5bf48
  - id: ZWo1XgAQE5k.srt
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/variance/ZWo1XgAQE5k.srt
    title: 3play caption file
    type: null
    uid: cd3ade2d311e287f397cf11f7a7ceffc
  - id: ZWo1XgAQE5k.pdf
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/variance/ZWo1XgAQE5k.pdf
    title: 3play pdf file
    type: null
    uid: 80b3dc8a556e7c2c26002caf65452dce
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d67366fdb92289144be7650f09044d7a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7b33895c8956128c3a3cd14f77793b66
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L06-02_300k.mp4
    parent_uid: 56d6f83b7eccd2749fbed9adb229678f
    title: Video-Internet Archive-MP4
    type: Video
    uid: a7f3ccd79818c44f596f33ee731f25e6
inline_embed_id: 94374892variance31771699
order_index: 582
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: variance
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/variance
title: Variance
transcript: >-
  <p><span m="840">We have introduced the concept of expected value or
  mean,</span> <span m="4950">which tells us the average value of a random
  variable.</span></p><p><span m="8670">We will now introduce another quantity,
  the variance, which</span> <span m="13170">quantifies the spread of the</span>
  <span m="15700">distribution of a random variable.</span></p><p><span
  m="18530">So consider a random variable with a given PMF, for example</span>
  <span m="25100">like the PMF shown in this diagram.</span></p><p><span
  m="31930">And consider another random variable that happens to have</span>
  <span m="37310">the same mean, but it's distribution</span> <span m="40280">is
  more spread out.</span></p><p><span m="45100">So both random variables have
  the same mean, which we denote</span> <span m="49090">by mu, and which in this
  picture would be somewhere</span> <span m="53880">around
  here.</span></p><p><span m="58310">However, the second PMF, the blue PMF, has
  typical outcomes</span> <span m="63840">that tend to have a larger distance
  from the mean.</span></p><p><span m="68020">By distance from the mean what we
  mean is that if the result</span> <span m="73920">of the random variable, its
  numerical value, happens to</span> <span m="77289">be, let's say for example,
  this one, then this quantity</span> <span m="83230">here is X minus mu is the
  distance from the mean, how</span> <span m="87700">far away the outcome of the
  random variable happens to be</span> <span m="91440">from the mean of that
  random variable.</span></p><p><span m="94400">Of course, the distance from the
  mean is a random quantity.</span></p><p><span m="97820">It is a random
  variable.</span></p><p><span m="99520">Its value is determined once we know
  the outcome of the</span> <span m="103210">experiment and the value of the
  random variable.</span></p><p><span m="107140">What can we say about the
  distance from the mean.</span></p><p><span m="110640">Let us calculate its
  average or expected value.</span></p><p><span m="115390">The expected value of
  the distance from the mean, which</span> <span m="118840">is this quantity,
  using the linearity of expectations, is</span> <span m="123290">equal to the
  expected value of X minus the constant mu.</span></p><p><span m="128288">But
  the expected value is by definition equal to mu.</span></p><p><span
  m="132040">And so we obtain zero.</span></p><p><span m="135420">So we see that
  the average value of the distance from the</span> <span m="138090">mean is
  always zero.</span></p><p><span m="139890">And so it is
  uninformative.</span></p><p><span m="142240">What we really want is the
  average absolute value of the</span> <span m="146360">distance from the mean,
  or something with this flavor.</span></p><p><span m="150750">Mathematically,
  it turns out that the average of the</span> <span m="153700">squared distance
  from the mean is a better behaved</span> <span m="157690">mathematical
  object.</span></p><p><span m="159280">And this is the quantity that we will
  consider.</span></p><p><span m="162220">It has a name.</span></p><p><span
  m="163490">It is called the variance.</span></p><p><span m="165410">And it is
  defined as the expected value of the squared</span> <span m="170190">distance
  from the mean.</span></p><p><span m="173050">The first thing to note is that
  the variance is always</span> <span
  m="176350">non-negative.</span></p><p><span m="179990">This is because it is
  the expected value of non-negative</span> <span
  m="184400">quantities.</span></p><p><span m="186590">How exactly do we
  computer the variance?</span></p><p><span m="190040">The squared distance from
  the mean is really a function of</span> <span m="195440">the random variable
  X. So it is a function of the form g of</span> <span m="204010">X, where g is
  a particular function defined this way.</span></p><p><span m="217530">So we
  can use the expected value rule applied to this</span> <span
  m="222460">particular function g.</span></p><p><span m="224410">And we obtain
  the following.</span></p><p><span m="235310">So what we have to do is to go
  over all numerical values of</span> <span m="240790">the random variable X.
  For each one, calculate its</span> <span m="245310">squared distance from the
  mean and weigh that quantity</span> <span m="250630">according to the
  corresponding probability of that particular</span> <span m="255190">numerical
  value.</span></p><p><span m="259149">One final comment, the variance is a bit
  hard to</span> <span m="262860">interpret, because it is in the wrong
  units.</span></p><p><span m="265865">If capital X corresponds to meters, then
  the variance has</span> <span m="269790">units of meters
  squared.</span></p><p><span m="272590">A more intuitive quantity is the square
  root of the</span> <span m="276450">variance, which is called the standard
  deviation.</span></p><p><span m="279970">It has the same units as the random
  variable and captures</span> <span m="283280">the width of the
  distribution.</span></p><p><span m="287490">Let us now take a quick look at
  some of the properties of</span> <span m="290360">the
  variance.</span></p><p><span m="291380">We know that expectations have a
  linearity property.</span></p><p><span m="294710">Is this the case for the
  variance as well?</span></p><p><span m="297300">Not quite.</span></p><p><span
  m="298500">Instead we have this relation for the variance of a linear</span>
  <span m="301820">function of a random variable.</span></p><p><span
  m="303880">Let us see why it is true.</span></p><p><span m="306920">We use the
  shorthand notation mu for the expected value of</span> <span m="311590">X. We
  will proceed one step at a time and first consider what</span> <span
  m="315950">happens to the variance if we add the</span> <span
  m="318160">constant to a random variable.</span></p><p><span m="320470">So let
  Y be X plus some constant b.</span></p><p><span m="326040">And let us just
  define nu to be the expected value of Y,</span> <span m="331120">which, using
  linearity of expectations, is the expected</span> <span m="334450">value of X
  plus b.</span></p><p><span m="337470">Let us now calculate the
  variance.</span></p><p><span m="340030">By definition the variance of Y is the
  expected value of the</span> <span m="345890">distance squared of Y from its
  mean.</span></p><p><span m="353170">Now we substitute, because in this case Y
  is</span> <span m="358290">equal to X plus b.</span></p><p><span
  m="360700">Whereas the mean, nu, is mu plus b.</span></p><p><span
  m="370790">And now we notice that this b cancels with that
  b.</span></p><p><span m="376890">And we are left with the expected value of X
  minus mu</span> <span m="385080">squared, which is just the variance of X. So
  this proves</span> <span m="394190">this relation for the case where a is
  equal to 1.</span></p><p><span m="398020">The variance of X plus b is equal to
  the variance of X. So</span> <span m="403030">we see that when we add a
  constant to a random variable,</span> <span m="406960">the variance remains
  unchanged.</span></p><p><span m="409300">Intuitively, adding a constant just
  moves the entire PMF</span> <span m="413890">right or left by some amount, but
  without</span> <span m="416880">changing its shape.</span></p><p><span
  m="418750">And so the spread of this PMF remains unchanged.</span></p><p><span
  m="423370">Let us now see what happens if we multiply a random variable</span>
  <span m="427080">by a constant.</span></p><p><span m="428866">Let again nu be
  the expected value of Y. And so in this</span> <span m="434920">case by
  linearity this is equal to a times the expected</span> <span m="439000">value
  of X. So it is a times mu.</span></p><p><span m="442880">We calculate the
  variance once more using the definition and</span> <span
  m="449220">substituting in the place of Y what Y is in this case--</span>
  <span m="453490">it's aX--</span> <span m="454909">and subtracting the mean of
  Y, which is a mu, squared.</span></p><p><span m="460770">We take out a factor
  of a squared.</span></p><p><span m="467150">And then we use linearity of
  expectations to note that this</span> <span m="471909">is a squared times the
  expected value of X minus mu</span> <span m="475750">squared, which is a
  squared times the variance of X.</span></p><p><span m="484050">So this
  establishes this formula for the case where b</span> <span m="487680">equals
  zero.</span></p><p><span m="489260">Putting together these two facts, if we
  multiply a random</span> <span m="492900">variable by a, the variance gets
  multiplied by a squared.</span></p><p><span m="499080">And if we add a
  constant, the variance doesn't change.</span></p><p><span m="502510">And this
  establishes this particular fact.</span></p><p><span m="506720">As an example,
  the variance of, let's say, 3 minus 4X is</span> <span m="518159">going to be
  equal minus 4 squared times the variance of</span> <span m="525100">X, which
  is 16 times the variance of X.</span></p><p><span m="534230">Finally, let me
  mention an alternative way of computing</span> <span m="538100">variances,
  which is often a bit quicker.</span></p><p><span m="543260">We have this
  useful formula here.</span></p><p><span m="546020">We will see later a few
  examples of how it is used,</span> <span m="549770">but for now let me just
  show why it is true.</span></p><p><span m="555180">We have by definition that
  the variance of X is the expected</span> <span m="561800">value of X minus mu
  squared.</span></p><p><span m="567410">Now let us rewrite what is inside the
  expectation by just</span> <span m="572700">expanding this square, which is [X
  squared minus]</span> <span m="575495">2 mu X plus mu
  squared.</span></p><p><span m="580900">Using linearity of expectations, this
  is broken</span> <span m="584290">down into expected value of X squared minus
  the expected</span> <span m="592340">value of two times mu X. But mu is a
  constant.</span></p><p><span m="596000">So we can take it outside the expected
  value.</span></p><p><span m="598450">And we're left with 2mu expected
  value</span> <span m="601480">of X plus mu squared.</span></p><p><span
  m="609160">But remember that mu is just the same as the expected value</span>
  <span m="613970">of X. So what we have here is twice the expected value of
  X,</span> <span m="618480">squared, plus the expected value of X, squared, and
  that</span> <span m="622840">leaves us just minus the expected value of X,
  squared.</span></p><p><span m="635090">So we will now move in the next segment
  into a few</span> <span m="638280">examples of variance
  calculations.</span></p><p>&nbsp;</p>
uid: 56d6f83b7eccd2749fbed9adb229678f
type: courses
layout: video
---
