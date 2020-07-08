---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: fZ0bbrbNq58
    parent_uid: 1385acb9192549d2776ba697c59dc022
    title: Video-YouTube-Stream
    type: Video
    uid: 8d1a2fb3f91ef2e2b43d3a2c9daeeffd
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/fZ0bbrbNq58/default.jpg'
    parent_uid: 1385acb9192549d2776ba697c59dc022
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0afe46878a4303e1ec08c9f86eb99b3a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: fZ0bbrbNq58
    parent_uid: 1385acb9192549d2776ba697c59dc022
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4ee6d57372b74dc37e87170997d50ff4
  - id: fZ0bbrbNq58.srt
    parent_uid: 1385acb9192549d2776ba697c59dc022
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-poisson-approximation-to-the-binomial/fZ0bbrbNq58.srt
    title: 3play caption file
    type: null
    uid: b03df22be702861d99b2ad97576341ba
  - id: fZ0bbrbNq58.pdf
    parent_uid: 1385acb9192549d2776ba697c59dc022
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-poisson-approximation-to-the-binomial/fZ0bbrbNq58.pdf
    title: 3play pdf file
    type: null
    uid: f1f3d8c7a20d92343d9bd510c2f0a878
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1385acb9192549d2776ba697c59dc022
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9f7a1999560c0636e804fa7eb95ad576
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1385acb9192549d2776ba697c59dc022
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4acfe7d699985d0a0372f36af9050681
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L21-10_300k.mp4
    parent_uid: 1385acb9192549d2776ba697c59dc022
    title: Video-Internet Archive-MP4
    type: Video
    uid: 688a1ca76d9d6c1d462397f57f69f931
inline_embed_id: 28917413thepoissonapproximationtothebinomial28761011
order_index: 2006
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-poisson-approximation-to-the-binomial
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-poisson-approximation-to-the-binomial
title: The Poisson Approximation to the Binomial
transcript: >-
  <p><span m='560'>We have seen that the binomial distribution plays</span>
  <span m='2950'>an important role in the study of the Bernoulli process.</span>
  </p><p><span m='6020'>And the reason is that the binomial distribution
  describes</span> <span m='10440'>the number of arrivals during a fixed number
  of slots.</span> </p><p><span m='16500'>We will now develop an
  approximation</span> <span m='18770'>to the binomial distribution that</span>
  <span m='20870'>applies to one particular regime,</span> <span m='23650'>and
  that regime is when we have a very large number of slots,</span> <span
  m='29250'>but we have a small probability of success in each slot.</span>
  </p><p><span m='33720'>And this is in a way so that the product of these two
  numbers,</span> <span m='38710'>which is the expected number of
  successes,</span> <span m='41700'>is a moderate number.</span> </p><p><span
  m='44500'>One example where such a situation might arise</span> <span
  m='47500'>is the following.</span> </p><p><span m='48400'>Suppose you're
  interested in earthquakes in your city,</span> <span m='51550'>and you divide
  time into slots of one hour.</span> </p><p><span m='55330'>During each hour,
  the probability</span> <span m='57700'>of having a noticeable earthquake in
  your city</span> <span m='60640'>would be a very small number.</span>
  </p><p><span m='62790'>On the other hand, if you're interested in a
  time</span> <span m='64900'>frame of five years, there's going</span> <span
  m='67430'>to be many hours during that time frame,</span> <span m='70470'>so
  that n would be quite large.</span> </p><p><span m='73260'>But the expected
  number of earthquakes</span> <span m='75680'>over a period of five years
  should be a moderate number.</span> </p><p><span m='80620'>And one can think
  of other situations</span> <span m='82660'>where this regime might
  arise.</span> </p><p><span m='85200'>The one particular situation that</span>
  <span m='86910'>will be very interesting for us is</span> <span
  m='89600'>going to be when we try to take a continuous time</span> <span
  m='93030'>approximation of the Bernoulli process</span> <span m='95310'>by
  dividing time into very small slots,</span> <span m='98479'>so that we have
  many slots, but a small probability of success</span> <span m='102500'>during
  each one of those slots.</span> </p><p><span m='104750'>So to start, let us
  look at the form of the binomial PMF.</span> </p><p><span m='108990'>And let
  us just try to develop an approximation to this PMF,</span> <span
  m='113320'>when we fix k to be particular constant number,</span> <span
  m='118729'>and then take the limit as n goes to infinity and p</span> <span
  m='126160'>goes to 0, but in a way that lambda remains constant.</span>
  </p><p><span m='131970'>And in particular, because of this relation</span>
  <span m='135320'>here, we will have p equal to lambda over n.</span>
  </p><p><span m='141490'>So let us take this expression and start rewriting
  it.</span> </p><p><span m='146870'>Let us look at the ratio of n factorial
  divided by this.</span> </p><p><span m='151260'>The denominator has the
  product of all numbers going up</span> <span m='154720'>to n minus k.</span>
  </p><p><span m='156420'>So by dividing by this number, what is left out of the
  n</span> <span m='161070'>factorial is only the terms that go up to n minus k
  plus 1.</span> </p><p><span m='173170'>Then we have, in the denominator, the
  factor</span> <span m='176140'>of k factorial.</span> </p><p><span
  m='178190'>Now p is equal to lambda over n, so this term becomes lambda</span>
  <span m='183740'>to the k divided by n to the k.</span> </p><p><span
  m='187480'>And similarly, for the last term,</span> <span m='189640'>we have 1
  minus lambda over n to the power n minus k.</span> </p><p><span m='199160'>Now
  let us rearrange terms.</span> </p><p><span m='202450'>Here, we have a product
  of k terms in the numerator.</span> </p><p><span m='206550'>Here, we have n
  multiplying itself k times.</span> </p><p><span m='209720'>So we can take a
  factor of n and place it</span> <span m='213130'>underneath each one of those
  terms</span> <span m='215300'>to obtain n over n times n minus 1 over n
  times--</span> <span m='222180'>we continue this way all the way to n minus k
  plus 1 divided</span> <span m='226680'>by n.</span> </p><p><span
  m='228280'>Take this term, k factorial, move it</span> <span
  m='230970'>underneath the lambda to the k term,</span> <span m='234900'>and
  then let us split this last term</span> <span m='237570'>into 2 pieces in this
  manner.</span> </p><p><span m='246010'>And now let us start taking limits as n
  goes to infinity.</span> </p><p><span m='255680'>The first term that we have
  here is equal to 1.</span> </p><p><span m='259610'>How about the second
  term?</span> </p><p><span m='261620'>n divided by n is equal to 1, 1 over n
  goes to 0,</span> <span m='265690'>so this term also converges to 1.</span>
  </p><p><span m='268940'>And by a similar argument, all of the terms in this
  product,</span> <span m='273159'>including this one, converge to 1.</span>
  </p><p><span m='276990'>The term lambda k over k factorial</span> <span
  m='279900'>remains exactly as is.</span> </p><p><span m='282530'>And now, let
  us look at this term.</span> </p><p><span m='285450'>This is probably
  familiar.</span> </p><p><span m='287770'>There is a basic fact which tells
  us</span> <span m='291150'>that if we take this expression and raise it</span>
  <span m='293570'>to the nth power, what we get is e to the minus</span> <span
  m='297500'>lambda in the limit as n goes to infinity.</span> </p><p><span
  m='301390'>So using this basic result, this term</span> <span
  m='303610'>becomes e to the minus lambda.</span> </p><p><span m='306010'>And
  finally, let's look at the last term.</span> </p><p><span m='309320'>Remember
  that k is fixed, is a constant.</span> </p><p><span m='314490'>1 minus lambda
  over n converges to 1,</span> <span m='318822'>and when we raise that number
  to the k-th power,</span> <span m='322570'>we still get a 1 in the
  limit.</span> </p><p><span m='327200'>So the only terms that are left are
  here,</span> <span m='331560'>and essentially, what we have just</span> <span
  m='333490'>established is that in the limit,</span> <span m='336330'>the
  probability of k arrivals in a Bernoulli process</span> <span m='342159'>or
  the binomial probability evaluated</span> <span m='344890'>at k, in the limit,
  as n goes to infinity and p goes to 0,</span> <span m='351000'>is given by
  this formula, here.</span> </p><p><span m='354850'>This is the formula for the
  Poisson PMF.</span> </p><p><span m='359340'>And so what we have established is
  that the binomial PMF</span> <span m='364400'>converges to a Poisson PMF when
  we</span> <span m='368280'>take the limit in this particular way.</span> </p>
uid: 1385acb9192549d2776ba697c59dc022
type: courses
layout: video
---
