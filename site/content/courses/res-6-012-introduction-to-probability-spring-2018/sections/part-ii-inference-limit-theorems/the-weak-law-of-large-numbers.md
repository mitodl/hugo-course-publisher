---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Yh5bR7X3ch8
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    title: Video-YouTube-Stream
    type: Video
    uid: 7c14cb7ea91bc058e8761ee9290f93cf
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Yh5bR7X3ch8/default.jpg'
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1f5e1a06b02c7bb9fa09d14ac2d73177
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Yh5bR7X3ch8
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ba2588378324dbba7594eba12328e3a1
  - id: Yh5bR7X3ch8.srt
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-weak-law-of-large-numbers/Yh5bR7X3ch8.srt
    title: 3play caption file
    type: null
    uid: 4c75c9601c7915bc85d93a274f7ea57c
  - id: Yh5bR7X3ch8.pdf
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-weak-law-of-large-numbers/Yh5bR7X3ch8.pdf
    title: 3play pdf file
    type: null
    uid: dacac7324216098216ff309ec2de3914
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8d9440939f3ab058bfe142acbf203e28
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 582f435e2a18b3a542b935b87985d6be
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L18-04_300k.mp4
    parent_uid: 0c99bea8c55420a40b4f63565ee0f078
    title: Video-Internet Archive-MP4
    type: Video
    uid: 4f8826a436cd9ce3e6b0c7fc18adccee
inline_embed_id: 43058920theweaklawoflargenumbers72505074
order_index: 1687
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-weak-law-of-large-numbers
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-weak-law-of-large-numbers
title: The Weak Law of Large Numbers
transcript: >-
  <p><span m='970'>In this segment, we derive and discuss the weak</span> <span
  m='3600'>law of large numbers.</span> </p><p><span m='4890'>It is a rather
  simple result, but plays a central role</span> <span m='7870'>within
  probability theory.</span> </p><p><span m='9680'>The setting is as
  follows.</span> </p><p><span m='11320'>We start with some probability
  distribution that has a</span> <span m='14130'>certain mean and variance,
  which we assume to be finite.</span> </p><p><span m='19070'>We then draw
  independent random variables out of this</span> <span m='23200'>distribution
  so that these Xi's are independent and</span> <span m='28110'>identically
  distributed, i.i.d.</span> </p><p><span m='30680'>for short.</span>
  </p><p><span m='32479'>What's going on here is that we're carrying out a
  long</span> <span m='35460'>experiment during which all of these random</span>
  <span m='38400'>variables are drawn.</span> </p><p><span m='40350'>Once we
  have drawn all of these random variables, we can</span> <span
  m='44380'>calculate the average of the values that have been</span> <span
  m='47480'>obtained, and this gives us the so-called sample mean.</span>
  </p><p><span m='52960'>Notice that the sample mean is a random variable
  because it</span> <span m='57120'>is a function of random variables.</span>
  </p><p><span m='59390'>It should be distinguished from the true mean, mu,
  which</span> <span m='63510'>is the expected value of the Xi's, which is a
  number.</span> </p><p><span m='68670'>It is not random.</span> </p><p><span
  m='70530'>And mu is some kind of average over all the possible outcomes</span>
  <span m='75950'>of the random variable Xi.</span> </p><p><span m='79220'>The
  sample mean is the simplest and most natural way</span> <span m='82670'>for
  trying to estimate the true mean, and the weak law of</span> <span
  m='85940'>large numbers will provide some support to this notion.</span>
  </p><p><span m='90260'>Let us now look at the properties of the sample
  mean.</span> </p><p><span m='93009'>Let us calculate its expectation.</span>
  </p><p><span m='95940'>By the way, this object here involves two different
  kinds</span> <span m='100650'>of averaging.</span> </p><p><span m='102110'>The
  sample mean averages over the values observed during one</span> <span
  m='108300'>long experiment, whereas the expectation averages over all</span>
  <span m='115500'>possible outcomes of this experiment.</span> </p><p><span
  m='118930'>The expectation is some kind of theoretical average because</span>
  <span m='122510'>we do not get to observe all the possible outcomes of
  this</span> <span m='126020'>experiment, but the sample mean is something that
  we</span> <span m='129320'>actually calculate on the basis of our
  observations.</span> </p><p><span m='133740'>In any case, the expected value
  of the sample mean, by</span> <span m='137440'>linearity, it is the expected
  value of the numerator divided</span> <span m='144780'>by the
  denominator.</span> </p><p><span m='147000'>Using linearity once more, the
  expected value of the sum is</span> <span m='150940'>the sum of the expected
  values, and since each one of</span> <span m='153650'>those expected values is
  equal to mu, we obtain n times mu</span> <span m='158150'>divided by n, which
  leaves us with mu.</span> </p><p><span m='162470'>So the theoretical average,
  the expected value of the</span> <span m='166270'>sample mean, is equal to the
  true mean.</span> </p><p><span m='169920'>Let us now calculate the variance of
  the sample mean.</span> </p><p><span m='174010'>The variance of a random
  variable divided by a number</span> <span m='179079'>is the variance of that
  random variable divided by the square</span> <span m='184950'>of that
  number.</span> </p><p><span m='191090'>Now, since the Xi's are independent,
  the variance is</span> <span m='194610'>the sum of the variances.</span>
  </p><p><span m='196970'>And therefore, we obtain n times the variance</span>
  <span m='199829'>of each one of them.</span> </p><p><span m='202480'>And after
  we simplify, this leaves us with sigma</span> <span m='206240'>squared over
  n.</span> </p><p><span m='209340'>We're now in a position to apply the
  Chebyshev</span> <span m='212210'>inequality.</span> </p><p><span
  m='213560'>The Chebyshev inequality tells us that the distance of a</span>
  <span m='218140'>random variable from its mean, being larger than a
  certain</span> <span m='221860'>number, has a probability that's bounded above
  by the</span> <span m='225990'>variance of the random variable of interest
  divided</span> <span m='231440'>by the square of the number that we have
  here.</span> </p><p><span m='234940'>We have already calculated the variance,
  and so this quantity</span> <span m='241040'>is sigma squared over n times
  epsilon squared.</span> </p><p><span m='246900'>And now, if we consider
  epsilon as a fixed number and</span> <span m='251310'>let n go to infinity,
  then what we obtain is a limiting</span> <span m='256850'>value of 0.</span>
  </p><p><span m='262360'>So the probability of falling far from the mean
  diminishes</span> <span m='266580'>to zero as we draw more and more
  samples.</span> </p><p><span m='270850'>That's exactly what the weak law of
  large numbers tells us.</span> </p><p><span m='274300'>If we fix any
  particular epsilon, which is a positive</span> <span m='278290'>constant, the
  probability that the sample mean falls away</span> <span m='282510'>from the
  true mean by more than epsilon, that probability</span> <span
  m='287170'>becomes smaller and smaller and converges to 0 as n goes</span>
  <span m='291530'>to infinity.</span> </p><p><span m='293460'>Let us now
  interpret the weak law of large numbers.</span> </p><p><span m='298220'>As I
  already hinted, we have to think in terms of one long</span> <span
  m='303570'>experiment, and during that experiment, we draw several</span>
  <span m='307850'>independent random variables drawn from the same</span> <span
  m='310840'>distribution.</span> </p><p><span m='311760'>One way of thinking
  about those random variables is that</span> <span m='315010'>each one of them
  is equal to the mean, the true mean, plus</span> <span m='319420'>some
  measurement noise, which is a term that has zero</span> <span
  m='323900'>expected value.</span> </p><p><span m='325310'>And all of these
  noises are independent.</span> </p><p><span m='328180'>So we have a collection
  of noisy measurements, and then</span> <span m='331330'>we take those
  measurements and form the average of them.</span> </p><p><span m='336210'>What
  the weak law of large numbers tells us is that the</span> <span
  m='339420'>sample mean is unlikely to be far off from the true mean.</span>
  </p><p><span m='345010'>And by far off, we mean at least epsilon distance
  away.</span> </p><p><span m='351350'>So the sample mean is, in some ways, a
  good way of estimating</span> <span m='356420'>the true mean.</span>
  </p><p><span m='357540'>If n is large enough, then we have high confidence
  that the</span> <span m='362570'>sample mean gives us a value that's close to
  the true mean.</span> </p><p><span m='367300'>As a special case let us
  consider a probabilistic model</span> <span m='370620'>in which we repeat
  independently many times the</span> <span m='373760'>same experiment.</span>
  </p><p><span m='375280'>There's a certain event A associated with that</span>
  <span m='377650'>experiment that has a certain probability, and each
  time</span> <span m='380950'>that we carry out the experiment, we use
  an</span> <span m='383910'>indicator variable to indicate whether the outcome
  was inside</span> <span m='389670'>the event or outside the event.</span>
  </p><p><span m='392300'>So Xi is 1 if A occurs, and it is 0 otherwise.</span>
  </p><p><span m='404790'>The expected value of the Xi's, the true mean in
  this</span> <span m='408430'>case, is equal to the number p.</span>
  </p><p><span m='413830'>In this particular example, the sample mean just
  counts</span> <span m='418610'>how many times the event A occurred out of the
  n</span> <span m='422340'>experiments that we carried out, so it's the
  frequency</span> <span m='425500'>with which the event A has occurred.</span>
  </p><p><span m='428620'>And we call it the empirical frequency of event A.
  What the</span> <span m='432860'>weak law of large numbers tells us is that
  the empirical</span> <span m='436670'>frequency will be close to the
  probability of that event.</span> </p><p><span m='442260'>In this sense, it
  reinforces or justifies the</span> <span m='446610'>interpretation of
  probabilities as frequencies.</span> </p><p></p>
uid: 0c99bea8c55420a40b4f63565ee0f078
type: courses
layout: video
---
