---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: h8DKVKfWU_Q
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    title: Video-YouTube-Stream
    type: Video
    uid: 3dcf474d408b1fe9f6d5fd74c52f54e0
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/h8DKVKfWU_Q/default.jpg'
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0dbb53b907a96e9e64af09f44682b3e4
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: h8DKVKfWU_Q
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b74648f9fd6340530bea0d9f869925d7
  - id: h8DKVKfWU_Q.srt
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/from-the-joint-to-the-marginal/h8DKVKfWU_Q.srt
    title: 3play caption file
    type: null
    uid: 1bd82e8ab31e299f9daa62293a708799
  - id: h8DKVKfWU_Q.pdf
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/from-the-joint-to-the-marginal/h8DKVKfWU_Q.pdf
    title: 3play pdf file
    type: null
    uid: b65c2eceda1f15e9c3781bd2dec4dec0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: dc2329e8252319dfadf146f455f49c7d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 342c7e78c3d854ecc404252d4bb7603c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-08_300k.mp4
    parent_uid: d5803cb91876b1ece46f8bdf933bfb0b
    title: Video-Internet Archive-MP4
    type: Video
    uid: c7ef85020c9a4242e375b4c09e9b8b3f
inline_embed_id: 98202962fromthejointtothemarginal53805143
order_index: 888
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: from-the-joint-to-the-marginal
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/from-the-joint-to-the-marginal
title: From The Joint to the Marginal
transcript: >-
  <p><span m='2880'>In the discrete case, we saw that we could recover the
  PMF</span> <span m='7590'>of X and the PMF of Y from the joint PMF.</span>
  </p><p><span m='12370'>Indeed, the joint PMF is supposed to contain a
  complete</span> <span m='15580'>probabilistic description of the two random
  variables.</span> </p><p><span m='18740'>It is their probability law, and any
  quantity of interest</span> <span m='22070'>can be computed if we know the
  joint.</span> </p><p><span m='25280'>Things are similar in the continuous
  setting.</span> </p><p><span m='28120'>You can easily guess the formula
  through</span> <span m='30730'>the standard recipe.</span> </p><p><span
  m='32900'>Replace sums by integrals, and replace PMFs by PDFs.</span>
  </p><p><span m='41550'>But a proof of this formula is actually
  instructive.</span> </p><p><span m='46230'>So let us start by first finding
  the CDF of X.</span> </p><p><span m='51550'>The CDF of X is, by definition,
  the probability</span> <span m='55640'>that the random variable X takes a
  value less than or</span> <span m='59470'>equal to a certain number little
  x.</span> </p><p><span m='63120'>And this is the probability of a particular
  set that we can</span> <span m='67540'>visualize on the two dimensional
  plane.</span> </p><p><span m='70450'>If here is the value of little x, then
  we're talking about</span> <span m='75510'>the set of all pairs x, y, for
  which the x component is less</span> <span m='82020'>than or equal to a
  certain number.</span> </p><p><span m='84530'>So we need to integrate over
  this two-dimensional set the</span> <span m='89220'>joint density.</span>
  </p><p><span m='91700'>So it will be a double integral of the joint
  density</span> <span m='97640'>over this particular two-dimensional
  set.</span> </p><p><span m='100940'>Now, since we've used the symbol x here to
  mean</span> <span m='103509'>something specific, let us use different symbols
  for the</span> <span m='106700'>dummy variables that we will use in the
  integration.</span> </p><p><span m='111280'>And we need to integrate with
  respect to the two variables,</span> <span m='115180'>let's say with respect
  to t and with respect to s.</span> </p><p><span m='119380'>The variable t can
  be anything.</span> </p><p><span m='123320'>So it ranges from minus infinity
  to infinity.</span> </p><p><span m='127190'>But the variable s, the first
  argument, ranges from minus</span> <span m='131720'>infinity up to this point,
  which is x.</span> </p><p><span m='137680'>Think of this double integral as an
  integral with respect to</span> <span m='142530'>the variable s of this
  complicated function inside</span> <span m='147380'>the brackets.</span>
  </p><p><span m='148900'>Now, to find the density of X, all we need to do is
  to</span> <span m='155130'>differentiate the CDF of X. And when we have an
  integral</span> <span m='165450'>of this kind and we differentiate with
  respect to</span> <span m='168220'>the upper limit of the integration, what we
  are left</span> <span m='171560'>with is the integrand.</span> </p><p><span
  m='174630'>That is this expression here.</span> </p><p><span m='179020'>It is
  an integral with respect to the second variable.</span> </p><p><span
  m='184550'>And it's an integral over the entire space, from minus</span> <span
  m='187910'>infinity to plus infinity.</span> </p><p><span m='192330'>Here is
  an example.</span> </p><p><span m='194360'>The simplest kind of a joint PDF is
  a PDF of that is</span> <span m='198060'>constant on a certain set, S, and is
  0 outside that set.</span> </p><p><span m='206670'>So the overall probability,
  one unit of probability, is</span> <span m='210020'>spread uniformly over that
  set.</span> </p><p><span m='213010'>Because the total volume under the joint
  PDF must be equal to</span> <span m='216680'>1, the height of the PDF must be
  equal to 1 over the area.</span> </p><p><span m='223790'>To calculate the
  probability of a certain set A, we want to</span> <span m='230690'>ask how
  much volume is sitting on top of that set.</span> </p><p><span m='235700'>And
  because in this case, the PDF is constant, we need to</span> <span
  m='240310'>take the height of the PDF times the relevant area.</span>
  </p><p><span m='244060'>What is the relevant area?</span> </p><p><span
  m='245760'>Well, actually, the PDF is 0 outside the set S. So the</span> <span
  m='250570'>relevant area is only this part here, which is the</span> <span
  m='254510'>intersection of the two sets, S and A.</span> </p><p><span
  m='259050'>So the total volume sitting on top of this little set is</span>
  <span m='264810'>going to be the base, the area of the base, which is the
  area</span> <span m='269860'>of A intersection S times the height of
  the</span> <span m='275159'>PDF at those places.</span> </p><p><span
  m='278170'>Now, the height of the PDF is 1 over the area of S. So this</span>
  <span m='284020'>is the formula for calculating the probability of a
  certain</span> <span m='289510'>set, A.</span> </p><p><span m='297590'>Let's
  now look at a specific example.</span> </p><p><span m='300530'>Suppose that we
  have a uniform PDF over this particular set,</span> <span m='306050'>S. This
  set has an area that is equal to 4.</span> </p><p><span m='311500'>It consists
  of four units rectangles arranged next to</span> <span m='315500'>each
  other.</span> </p><p><span m='316470'>So the height of the joint PDF in this
  example</span> <span m='320490'>is going to be 1/4.</span> </p><p><span
  m='324700'>It is one 1/4 on that set, but of course, it's going to be 0</span>
  <span m='328790'>outside that set.</span> </p><p><span m='330910'>We can now
  find the marginal PDF at some particular x.</span> </p><p><span m='336460'>So
  we can fix a particular value of x,</span> <span m='339490'>let's say this
  one.</span> </p><p><span m='341060'>To find the value of the marginal PDF, we
  need to</span> <span m='344070'>integrate over y along that particular
  line.</span> </p><p><span m='349550'>And the integral is going to have a
  contribution only on</span> <span m='353380'>that segment.</span> </p><p><span
  m='354900'>On that segment, the value of the joint PDF is 1/4.</span>
  </p><p><span m='359320'>And we're integrating over an interval that</span>
  <span m='362600'>has a length of one.</span> </p><p><span m='364650'>So the
  integral is going to be equal to 1/4.</span> </p><p><span m='368230'>But if x
  is somewhere around here, as we integrate over</span> <span m='372760'>that
  line, we integrate the value of 1/4, the value of the</span> <span
  m='377640'>PDF, over an interval that has a length equal to 3.</span>
  </p><p><span m='383190'>And so the result turns out to be 3/4.</span>
  </p><p><span m='387780'>There's a similar calculation for the marginal PDF of
  y.</span> </p><p><span m='392220'>For any particular value of little y, to
  find the marginal</span> <span m='398010'>PDF, we integrate along this line
  the joint PDF.</span> </p><p><span m='404460'>The joint PDF is 0 out
  here.</span> </p><p><span m='407659'>It's nonzero only on that
  interval.</span> </p><p><span m='412030'>And on that interval, it has a value
  of 1/4.</span> </p><p><span m='415690'>And the interval has a length of 1, so
  the integral is going</span> <span m='419909'>to end up equal to 1/4.</span>
  </p><p><span m='422190'>But if we were to take a line somewhere here, we
  integrate</span> <span m='426250'>the value of 1/4 over an interval of length
  2.</span> </p><p><span m='430460'>And so the result would be 1/2.</span>
  </p><p><span m='433060'>So we have recovered from the joint PDF the marginal
  PDF of</span> <span m='438880'>X and also the marginal PDF of Y.</span>
  </p><p></p>
uid: d5803cb91876b1ece46f8bdf933bfb0b
type: course
layout: video
---
