---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 363JQxFwLXg
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    title: Video-YouTube-Stream
    type: Video
    uid: 5b1cc92cab313d950c41a0c317125424
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/363JQxFwLXg/default.jpg'
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0f8874a29b0e9e7cca4d4ff387a333fe
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 363JQxFwLXg
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6cf6f20be6f42edd8cebb21e09ebe77f
  - id: 363JQxFwLXg.srt
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mixed-bayes-rule/363JQxFwLXg.srt
    title: 3play caption file
    type: null
    uid: 72b713d1579fd86141d76f3e8248d66c
  - id: 363JQxFwLXg.pdf
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mixed-bayes-rule/363JQxFwLXg.pdf
    title: 3play pdf file
    type: null
    uid: 2a7c66eec2e189f56e7cf702536d0ea7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b9a627e084d15d0633855738f99a8e0d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ce0d8a8b55471bbdd9092557725a680b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-09_300k.mp4
    parent_uid: 3d5897f7afd705e39725a1613e7c0943
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0bb9f134115bdabde96e4785e39283e8
inline_embed_id: 7729234mixedbayesrule47984021
order_index: 987
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: mixed-bayes-rule
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mixed-bayes-rule
title: Mixed Bayes Rule
transcript: >-
  <p><span m='1980'>We have seen two versions of the Bayes rule--</span> <span
  m='4540'>one involving two discrete random variables, and another</span> <span
  m='8250'>that involves two continuous random variables.</span> </p><p><span
  m='11660'>But there are many situations in real life when one has to</span>
  <span m='14700'>deal simultaneously with discrete and</span> <span
  m='17310'>continuous random variables.</span> </p><p><span m='19160'>For
  example, you may want to recover a discrete digital</span> <span
  m='23170'>signal that was sent to you, but the signal has been</span> <span
  m='26560'>corrupted by continuous noise so that your observation is a</span>
  <span m='30220'>continuous random variable.</span> </p><p><span m='32910'>So
  suppose that we have a discrete random variable K,</span> <span m='36800'>and
  another continuous random variable, Y. In order to get a</span> <span
  m='41320'>variant of the Bayes rule that applies to this situation, we</span>
  <span m='44730'>will proceed as in the more standard cases.</span>
  </p><p><span m='48460'>We will use the multiplication rule twice to get
  two</span> <span m='52460'>alternative expressions for the probability</span>
  <span m='54880'>of two events happening.</span> </p><p><span m='57120'>We will
  equate those expressions, and from these,</span> <span m='59740'>derive a
  version of the Bayes rule.</span> </p><p><span m='62570'>So we will look at
  the probability that the discrete</span> <span m='67250'>random variable takes
  on a certain numerical value, and,</span> <span m='72700'>simultaneously, the
  continuous random variable takes a value</span> <span m='77120'>inside a
  certain small interval.</span> </p><p><span m='80530'>So here, delta is a
  positive number, which we will take to</span> <span m='84450'>be very
  small.</span> </p><p><span m='85830'>And in fact, we will be interested in the
  limiting</span> <span m='88730'>case as delta goes to 0.</span> </p><p><span
  m='91020'>So now we use the multiplication rule.</span> </p><p><span
  m='93060'>The probability of two events is equal to the probability of</span>
  <span m='97380'>the first event times the conditional probability of
  the</span> <span m='103350'>second event given that the first event has
  occurred.</span> </p><p><span m='114300'>But we know that we can use the
  multiplication rule in any</span> <span m='118030'>order, so the probability
  of two events happening can also</span> <span m='121390'>be written as the
  probability that the second event occurs</span> <span m='129770'>times the
  conditional probability that the first</span> <span m='133400'>event occurs,
  given that the second event has occurred.</span> </p><p><span m='143460'>So
  these two expressions that we obtain from the</span> <span
  m='146100'>multiplication rule have to be equal.</span> </p><p><span
  m='148540'>Let us rewrite those expressions using PMF notation</span> <span
  m='152540'>and PDF notation.</span> </p><p><span m='154630'>What do we have
  here?</span> </p><p><span m='156300'>The probability that a discrete random
  variable takes</span> <span m='158690'>on a certain value--</span> <span
  m='160000'>that's just the PMF of this random variable evaluated at a</span>
  <span m='164910'>particular point.</span> </p><p><span m='166520'>And what do
  we have here?</span> </p><p><span m='167850'>The probability that the random
  variable, Y, a</span> <span m='170440'>continuous random variable, takes
  values inside an</span> <span m='174370'>interval is always equal to the PDF
  of that random</span> <span m='180260'>variable times the length of this
  interval.</span> </p><p><span m='184420'>And this is an approximate
  equality.</span> </p><p><span m='187420'>However, because here we're talking
  about the probability</span> <span m='190580'>of being in a small interval
  conditioned on a certain</span> <span m='193590'>event, we should be using a
  conditional PDF.</span> </p><p><span m='198870'>It's the conditional PDF
  conditioned on the random</span> <span m='201660'>variable, capital K, and
  conditioned on the specific</span> <span m='205360'>event that this discrete
  random variable takes on a</span> <span m='208990'>certain value, little
  k.</span> </p><p><span m='212920'>Let us do a similar notation change for the
  second</span> <span m='216860'>expression.</span> </p><p><span m='217930'>Here
  we have the probability--</span> <span m='219380'>the unconditional
  probability--</span> <span m='221210'>that Y takes a value inside a small
  interval, and when delta</span> <span m='225340'>is small, this is
  approximately equal to the PDF</span> <span m='228460'>of the random variable
  Y times the length of the interval.</span> </p><p><span m='232329'>And what do
  we have here?</span> </p><p><span m='233490'>The probability that a discrete
  random variable takes</span> <span m='236590'>on a certain value, that just
  corresponds to the PMF of that</span> <span m='242180'>the random
  variable.</span> </p><p><span m='244500'>However, we're talking about a
  conditional probability given</span> <span m='249840'>that a random variable Y
  takes a value that's approximately</span> <span m='254770'>equal to a certain
  little y.</span> </p><p><span m='258680'>So this is a notation that we have
  not used before, but its</span> <span m='262860'>meaning should be unambiguous
  at this point.</span> </p><p><span m='266130'>But just by arguing by analogy
  to what we have been doing all</span> <span m='269710'>along, it's a PMF of a
  discrete random variable.</span> </p><p><span m='275200'>But it is a
  conditional PMF.</span> </p><p><span m='277560'>It describes to us the
  probability distribution of</span> <span m='280500'>the discrete random
  variable K when the random variable Y,</span> <span m='285780'>which happens
  to be a continuous one, takes on a</span> <span m='288050'>specific
  value.</span> </p><p><span m='290550'>So we can cancel the deltas from both
  sides, and we have</span> <span m='295450'>that this expression is
  approximately equal to that</span> <span m='297950'>expression, and this
  approximate equality is more</span> <span m='300700'>and more exact as we send
  delta to 0.</span> </p><p><span m='304230'>But delta has already disappeared
  from here, so we</span> <span m='307600'>can set these two expressions equal
  to each other.</span> </p><p><span m='311250'>At this point, now, we can take
  this term and move it to</span> <span m='316280'>the other side of the
  equality so it will go to the</span> <span m='319220'>denominator.</span>
  </p><p><span m='320780'>And we obtain this version of the Bayes rule.</span>
  </p><p><span m='326010'>It gives us the conditional probability of a
  random</span> <span m='329540'>variable K given that a certain continuous
  random</span> <span m='333860'>variable Y has taken on a specific
  value.</span> </p><p><span m='337909'>So this version is useful if we have a
  continuous noisy</span> <span m='343659'>observation, Y, on the basis of which
  we're trying to say</span> <span m='348820'>something, to make inferences
  about the discrete random</span> <span m='352070'>variable K. And in order to
  apply the Bayes rule, we need</span> <span m='356370'>to know the
  unconditional distribution of the random</span> <span m='361370'>variable K,
  and we also need to have a model of the noisy</span> <span
  m='365770'>observation--</span> <span m='367610'>a model of that observation
  under each possible</span> <span m='370900'>conditional universe.</span>
  </p><p><span m='372570'>So for any possibility for the random variable K, we
  need to</span> <span m='376940'>know the distribution of the random variable
  Y.</span> </p><p><span m='381030'>Or, alternatively, we can take this term and
  send it to the</span> <span m='386150'>denominator of the other side, and we
  get a different version</span> <span m='389870'>of the Bayes rule.</span>
  </p><p><span m='391460'>This version of the Bayes rule applies if we're trying
  to</span> <span m='394210'>make an inference about a continuous random
  variable Y,</span> <span m='398500'>given that we know the value of a certain
  related</span> <span m='402140'>observation, K, of a random variable, capital
  K.</span> </p><p><span m='409510'>In both versions of the Bayes rule, there's
  also a</span> <span m='412300'>denominator term which needs to be
  evaluated.</span> </p><p><span m='416240'>This term gets evaluated similar to
  the cases that we</span> <span m='419280'>have considered earlier, and they
  are determined by using a</span> <span m='423210'>suitable version of the
  total probability theorem.</span> </p><p><span m='426800'>This is a version of
  the total probability theory that we</span> <span m='429440'>have already
  seen.</span> </p><p><span m='430970'>We have a conditional density of Y under
  different scenarios</span> <span m='435800'>for the random variable capital K,
  and we get the</span> <span m='438900'>density of Y by considering the
  conditional densities and</span> <span m='442770'>weighing them according to
  the probabilities of the different</span> <span m='446080'>discrete
  scenarios.</span> </p><p><span m='449340'>This version of the total
  probability theorem is</span> <span m='452920'>something that we have not
  proved so far, and we</span> <span m='457450'>have not seen it.</span>
  </p><p><span m='458990'>On the other hand, it's not hard to derive.</span>
  </p><p><span m='464920'>If we fix the value of k, this is a density, and
  therefore it</span> <span m='473110'>must integrate to 1.</span> </p><p><span
  m='475200'>So the integral of this ratio, with respect to y, has to be</span>
  <span m='479490'>equal to 1.</span> </p><p><span m='480850'>Now, there's no y
  in the denominator, so the integral</span> <span m='484990'>of the numerator
  divided by the denominator has to be</span> <span m='488370'>equal to 1, which
  means that the denominator must be equal</span> <span m='492580'>to the
  integral of the numerator when we integrate</span> <span m='496180'>overall
  y's, and this is just what this</span> <span m='499320'>expression is
  saying.</span> </p><p><span m='501500'>So what we will do next will be to
  consider one example for</span> <span m='506130'>each one of these two cases
  of the Bayes rule that we have</span> <span m='511030'>just derived.</span>
  </p><p></p>
uid: 3d5897f7afd705e39725a1613e7c0943
type: courses
layout: video
---
