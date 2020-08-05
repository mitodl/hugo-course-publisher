---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: vjYanZ1nsZg
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    title: Video-YouTube-Stream
    type: Video
    uid: d126bfc6365b2b0933ba9049984ebc5f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/vjYanZ1nsZg/default.jpg'
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 891eb5c07e910a36cbd99a39901be80f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: vjYanZ1nsZg
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ad296598b24ab9d8c0e47967bb11a4c7
  - id: vjYanZ1nsZg.srt
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-markov-inequality/vjYanZ1nsZg.srt
    title: 3play caption file
    type: null
    uid: bccdeb0dac5eefb587219d7124795b7c
  - id: vjYanZ1nsZg.pdf
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-markov-inequality/vjYanZ1nsZg.pdf
    title: 3play pdf file
    type: null
    uid: 691b6fad3e830568ff6dfa09767f104f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 15e65acf0e6fbe5d7e41c6c937fb4f7a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 72bcc6a111ab3eb63c92617d05a01de0
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L18-02_300k.mp4
    parent_uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
    title: Video-Internet Archive-MP4
    type: Video
    uid: 83005fbce779e13844c60d4376921eee
inline_embed_id: 2781154themarkovinequality78962971
order_index: 1669
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-markov-inequality
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-markov-inequality
title: The Markov Inequality
transcript: >-
  <p><span m='950'>In this segment, we derive and discuss the Markov
  inequality,</span> <span m='4460'>a rather simple but quite useful and
  powerful fact about</span> <span m='9030'>probability distributions.</span>
  </p><p><span m='11660'>The basic idea behind the Markov inequality as well
  as</span> <span m='14760'>many other inequalities and bounds in probability
  theory</span> <span m='18410'>is the following.</span> </p><p><span
  m='20140'>We may be interested in saying something about the</span> <span
  m='23050'>probability of an extreme event.</span> </p><p><span m='25270'>By
  extreme event, we mean that some random variable takes a</span> <span
  m='28280'>very large value.</span> </p><p><span m='29960'>If we can calculate
  that probability exactly, then, of</span> <span m='33360'>course, everything
  is fine.</span> </p><p><span m='35020'>But suppose that we only have a little
  bit of information</span> <span m='38600'>about the probability distribution
  at hand.</span> </p><p><span m='41350'>For example, suppose that we only know
  the expected value</span> <span m='44250'>associated with that
  distribution.</span> </p><p><span m='46060'>Can we say something?</span>
  </p><p><span m='47810'>Well, here's a statement, which is quite
  intuitive.</span> </p><p><span m='51040'>If you have a non-negative random
  variable, and I tell</span> <span m='53790'>you that the average or the
  expected value is rather</span> <span m='56920'>small, then there should be
  only a very small probability</span> <span m='61580'>that the random variable
  takes a very large value.</span> </p><p><span m='65030'>This is an intuitively
  plausible statement, and the</span> <span m='68039'>Markov inequality makes
  that statement precise.</span> </p><p><span m='70950'>Here is what it
  says.</span> </p><p><span m='72550'>If we have a random variable that's
  non-negative and you</span> <span m='75160'>take any positive number, the
  probability that the random</span> <span m='78820'>variable exceeds that
  particular number is bounded</span> <span m='82850'>by this ratio.</span>
  </p><p><span m='85289'>If the expected value of X is very small, then
  the</span> <span m='88940'>probability of exceeding that value of a will also
  be small.</span> </p><p><span m='94070'>Furthermore, if a is very large, the
  probability of</span> <span m='97610'>exceeding that very large value drops
  down because this</span> <span m='101660'>ratio becomes smaller.</span>
  </p><p><span m='104560'>So that's what the Markov inequality says.</span>
  </p><p><span m='107039'>Let us now proceed with a derivation.</span>
  </p><p><span m='109430'>Let's start with the formula for the expected value of
  X,</span> <span m='113259'>and just to keep the argument concrete, let us
  assume that</span> <span m='116870'>the random variable is continuous so that
  the</span> <span m='119479'>expected value is given by an integral.</span>
  </p><p><span m='122310'>The argument would be exactly the same as in the
  discrete</span> <span m='124890'>case, but in the discrete case, we would be
  using a sum.</span> </p><p><span m='128570'>Now since the random variable is
  non-negative, this integral</span> <span m='132070'>only ranges from 0 to
  infinity.</span> </p><p><span m='136110'>Now, we're interested, however, in
  values of X larger</span> <span m='139750'>than or equal to a, and that tempts
  us to consider just the</span> <span m='144840'>integral from a to infinity of
  the same quantity.</span> </p><p><span m='149800'>How do these two quantities
  compare to each other?</span> </p><p><span m='155590'>Since we're integrating
  a non-negative quantity, if</span> <span m='159010'>we're integrating over a
  smaller range, the resulting</span> <span m='162840'>integral will be less
  than or equal to this integral here,</span> <span m='168579'>so we get an
  inequality that goes in this direction.</span> </p><p><span m='173680'>Now let
  us look at this integral here.</span> </p><p><span m='176500'>Over the range
  of integration that we're considering, X is</span> <span m='180860'>at least
  as large as a.</span> </p><p><span m='183200'>Therefore, the quantity that
  we're integrating from a to</span> <span m='187740'>infinity is at least as
  large as a times the density of X.</span> </p><p><span m='196420'>And now we
  can take this a, which is a constant, pull it</span> <span m='200170'>outside
  the integral.</span> </p><p><span m='202360'>And what we're left with is the
  integral of the density</span> <span m='205170'>from a to infinity, which is
  nothing but the probability</span> <span m='209040'>that the random variable
  takes a value larger</span> <span m='212140'>than or equal to a.</span>
  </p><p><span m='213510'>And now if you compare the two sides of this
  inequality,</span> <span m='217560'>that's exactly what the Markov inequality
  is telling us.</span> </p><p><span m='224010'>Now it is instructive to go
  through a second derivation of</span> <span m='227740'>the Markov
  inequality.</span> </p><p><span m='229290'>This derivation is essentially the
  same conceptually as the</span> <span m='233180'>one that we just went through
  except that it is more</span> <span m='236320'>abstract and does not require
  us to write down any explicit</span> <span m='240390'>sums or
  integrals.</span> </p><p><span m='242480'>Here's how it goes.</span>
  </p><p><span m='244070'>Let us define a new random variable Y, which is equal
  to</span> <span m='248200'>0 if the random variable X happens to be less than
  a and</span> <span m='253350'>it is equal to a if X happens to be
  larger</span> <span m='257970'>than or equal to a.</span> </p><p><span
  m='259709'>How is Y related to X?</span> </p><p><span m='262870'>If X takes a
  value less than a, it will still be a</span> <span m='266420'>non-negative
  value, so X is going to be at least as large</span> <span m='269920'>as the
  value of 0.</span> </p><p><span m='271360'>that Y takes.</span> </p><p><span
  m='273250'>If X is larger than or equal to a, Y will be a, so X will</span>
  <span m='278050'>again be at least as large.</span> </p><p><span m='280440'>So
  no matter what, we have the inequality that Y is always</span> <span
  m='287190'>less than or equal to X. And since this is always the case,</span>
  <span m='292960'>this means that the expected value of Y will be less
  than</span> <span m='296950'>or equal to the expected value of X.</span>
  </p><p><span m='300550'>But now what is the expected value of Y?</span>
  </p><p><span m='302920'>Since Y is either 0 or a, the expected value is equal
  to a</span> <span m='308570'>times the probability of that event, which is a
  times the</span> <span m='314050'>probability that X is larger than or equal
  to a.</span> </p><p><span m='319580'>And by comparing the two sides of this
  inequality, what we</span> <span m='323850'>have is exactly the Markov
  inequality.</span> </p><p><span m='327530'>Let us now go through some simple
  examples.</span> </p><p><span m='330170'>Suppose that X is exponentially
  distributed with</span> <span m='332659'>parameter or equal to 1 so that the
  expected value of X</span> <span m='336590'>is also going to be equal to 1,
  and in that case, we obtain</span> <span m='340870'>a bound of 1 over
  a.</span> </p><p><span m='343510'>To put this result in perspective, note that
  we're</span> <span m='347210'>trying to bound a probability.</span>
  </p><p><span m='349570'>We know that the probability lies between 0 and
  1.</span> </p><p><span m='353040'>There's a true value for this probability,
  and in this</span> <span m='356409'>particular example because we have an
  exponential</span> <span m='358909'>distribution, this probability is equal to
  e to the minus a.</span> </p><p><span m='364690'>The Markov inequality gives
  us a bound.</span> </p><p><span m='367370'>In this instance, the bound takes
  the form of 1 over a,</span> <span m='371480'>and the inequality tells us that
  the true value is</span> <span m='374270'>somewhere to the left of
  here.</span> </p><p><span m='377110'>A bound will be considered good or strong
  or useful if</span> <span m='381450'>that bound turns out to be quite close to
  the correct</span> <span m='384590'>value so that it also serves as a fairly
  accurate estimate.</span> </p><p><span m='388810'>Unfortunately, in this
  example, this is not the case</span> <span m='391560'>because the true value
  falls off exponentially with a,</span> <span m='395000'>whereas the bound that
  we obtained falls off at a much</span> <span m='397940'>slower rate of 1 over
  a.</span> </p><p><span m='400550'>For this reason, one would like to have even
  better</span> <span m='403690'>bounds than the Markov inequality, and this is
  one</span> <span m='406470'>motivation for the Chebyshev inequality that we
  will be</span> <span m='409350'>considering next.</span> </p><p><span
  m='410870'>But before we move there, let us consider one more example.</span>
  </p><p><span m='415230'>Suppose that X is a uniform random variable on
  the</span> <span m='419220'>interval from minus 4 to 4, and we're interested
  in saying</span> <span m='425960'>something about the probability that X is
  larger</span> <span m='430270'>than or equal to 3.</span> </p><p><span
  m='432350'>So we're interested in this event here.</span> </p><p><span
  m='435960'>So the value of the density, because we have a range of</span>
  <span m='440015'>length 8, the value of the density is 1/8.</span>
  </p><p><span m='443470'>So we know that this probability has a true
  value</span> <span m='447750'>of 1 over 8, which we can indicate on a diagram
  here.</span> </p><p><span m='455350'>Probabilities are between 0 and 1.</span>
  </p><p><span m='457540'>We have a true value of 1 over 8.</span> </p><p><span
  m='460890'>Lets us see what the Markov inequality is</span> <span
  m='463010'>going to give us.</span> </p><p><span m='464900'>There's one
  difficulty that X is not a non-negative random</span> <span
  m='468650'>variable, so we cannot apply the Markov</span> <span
  m='471300'>inequality right away.</span> </p><p><span m='473680'>However, the
  event that X is larger than or equal to 3 is</span> <span m='479050'>smaller
  than the event that the absolute value of X is</span> <span m='483920'>larger
  than or equal to 3.</span> </p><p><span m='486690'>That is, we take this blue
  event and we also add this</span> <span m='492460'>green event, and we say
  that the probability of the blue</span> <span m='497340'>event is less than or
  equal to the probability of the blue</span> <span m='501370'>together with the
  green event, which is the event that the</span> <span m='504970'>absolute
  value of X is larger than or equal to 3.</span> </p><p><span m='508190'>So now
  we have a random variable, which is</span> <span m='510430'>non-negative, and
  we can apply the Markov inequality and</span> <span m='513919'>write that this
  is less than or equal to the expected value</span> <span m='516890'>of the
  absolute value of X divided by 3.</span> </p><p><span m='520980'>What is this
  expectation of the absolute value of X?</span> </p><p><span m='524153'>X is
  uniform on this range.</span> </p><p><span m='527160'>The absolute value of X
  will be taking values only</span> <span m='530590'>between 0 and 4.</span>
  </p><p><span m='532550'>And because the original distribution was uniform,
  the</span> <span m='535360'>absolute value of X will also be uniform on
  the</span> <span m='539050'>range from 0 to 4.</span> </p><p><span
  m='540820'>And for this reason, the expected value is going to be</span> <span
  m='543510'>equal to 2, and we get a bound of 2/3.</span> </p><p><span
  m='548290'>This is a pretty bad bound.</span> </p><p><span m='550810'>It is
  true, of course, but it is quite far</span> <span m='554030'>from the true
  answer.</span> </p><p><span m='555910'>Could we improve this bound?</span>
  </p><p><span m='558230'>In this particular example, we can.</span>
  </p><p><span m='560920'>Because of symmetry, we know that the probability of
  being</span> <span m='564720'>larger than or equal to 3 is equal to the
  probability of</span> <span m='569150'>being less than or equal to minus
  3.</span> </p><p><span m='572200'>Or the probability of this event, which is
  the blue and</span> <span m='575840'>the green, is twice the probability
  of</span> <span m='579100'>just the blue event.</span> </p><p><span
  m='581030'>Or to put it differently, this probably here is equal to 1/2</span>
  <span m='586710'>of the probability that the absolute value of x is
  larger</span> <span m='590870'>than or equal to 3, and therefore, by using the
  same</span> <span m='594780'>bound as here, we will obtain and answer of
  1/3.</span> </p><p><span m='600090'>So by being a little more clever and
  exploiting the</span> <span m='603440'>symmetry of this distribution around 0,
  we get a somewhat</span> <span m='607660'>better bound of 1/3, which is,
  again, a true bound.</span> </p><p><span m='612660'>It is more informative
  than the original bound, but still</span> <span m='616260'>it is quite far
  away from the true answer.</span> </p><p></p>
uid: 0aeb46e8c45fdd44334ea3b0c1900c9e
type: course
layout: video
---
