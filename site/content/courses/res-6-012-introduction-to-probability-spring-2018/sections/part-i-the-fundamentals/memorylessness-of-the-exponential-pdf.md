---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 3kxnPEDecIA
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    title: Video-YouTube-Stream
    type: Video
    uid: a6f11df0c3616a006f4293e82dc2ee2e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/3kxnPEDecIA/default.jpg'
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0ccb3f3851d74f5e146f2d6221d9901f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 3kxnPEDecIA
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 147876a7544fc98e5465aee718b0441f
  - id: 3kxnPEDecIA.srt
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/memorylessness-of-the-exponential-pdf/3kxnPEDecIA.srt
    title: 3play caption file
    type: null
    uid: dad05d77f9ee77ed544f55a56916dce6
  - id: 3kxnPEDecIA.pdf
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/memorylessness-of-the-exponential-pdf/3kxnPEDecIA.pdf
    title: 3play pdf file
    type: null
    uid: e08817c93811dd15a9d3115915465f17
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 07940e700b0e037dc3228699d291016f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b6d52934daa31bf1a093830100d8f50f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L09-04_300k.mp4
    parent_uid: a1c92a90ba9a6f23ee75cda735bfd656
    title: Video-Internet Archive-MP4
    type: Video
    uid: 58cc4dce2e7bae8bc67f8739cc2a3dd3
inline_embed_id: 98696877memorylessnessoftheexponentialpdf15148762
order_index: 852
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: memorylessness-of-the-exponential-pdf
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/memorylessness-of-the-exponential-pdf
title: Memorylessness of the Exponential PDF
transcript: >-
  <p><span m='1150'>We now revisit the exponential random variable that
  we</span> <span m='4450'>introduced earlier and develop some intuition about
  what it</span> <span m='8060'>represents.</span> </p><p><span m='9200'>We do
  this by establishing a memorylessness property,</span> <span m='13440'>similar
  to the one that we established earlier in the</span> <span m='16110'>discrete
  case for the geometric PMF.</span> </p><p><span m='19190'>Suppose that it is
  known that light bulbs have a lifetime</span> <span m='22210'>until they burn
  out, which is an</span> <span m='23820'>exponential random variable.</span>
  </p><p><span m='25750'>You go to a store, and you are given two choices, to
  buy a</span> <span m='29710'>new light bulb, or to buy a used light bulb that
  has been</span> <span m='34010'>working for some time and has not yet burned
  out.</span> </p><p><span m='38200'>Which one should you take?</span>
  </p><p><span m='40920'>We want to approach this question
  mathematically.</span> </p><p><span m='43610'>So let us denote by capital T
  the lifetime of the bulb.</span> </p><p><span m='48500'>So time starts at time
  0, and then at some random time that</span> <span m='54205'>we denote by
  capital T, the light bulb will burn out.</span> </p><p><span m='57990'>And we
  assume that this random variable is exponential with</span> <span
  m='60980'>some given parameter lambda.</span> </p><p><span m='63310'>In one of
  our earlier calculations, we have shown</span> <span m='65860'>that the
  probability that capital T is larger than some</span> <span m='69360'>value
  little x falls exponentially</span> <span m='72789'>with that value x.</span>
  </p><p><span m='74990'>We are now told that a certain light bulb has already
  been</span> <span m='80039'>operating for t time units without failing.</span>
  </p><p><span m='87050'>So we know that the value of the random variable
  capital T</span> <span m='90860'>is larger than little t.</span> </p><p><span
  m='94770'>We are interested in how much longer the light bulb will be</span>
  <span m='98720'>operating, and so we look at capital X, which is the</span>
  <span m='104509'>remaining lifetime from the current time until the
  light</span> <span m='109210'>bulb burns out.</span> </p><p><span
  m='110820'>So capital X is this particular random variable</span> <span
  m='115560'>here, and it is equal to capital T minus little t.</span>
  </p><p><span m='121860'>Let us now calculate the probability that the
  light</span> <span m='125650'>bulb lasts for another little x time
  units.</span> </p><p><span m='131760'>That is, that this random variable,
  capital X, is at</span> <span m='135880'>least as large as some little
  x.</span> </p><p><span m='140030'>That is, that the light bulb remains
  alive</span> <span m='143490'>until time t plus x.</span> </p><p><span
  m='149630'>We use the definition of conditional probabilities to</span> <span
  m='152990'>write this expression as the probability that capital X is</span>
  <span m='158700'>bigger than little x.</span> </p><p><span m='160540'>On the
  other hand, capital X is T minus t, so we</span> <span m='163810'>write it
  this way--</span> <span m='164860'>T minus t is bigger than little x, and also
  that T is</span> <span m='170130'>bigger than little t, divided by the
  probability of the</span> <span m='174829'>conditioning event.</span>
  </p><p><span m='181590'>Just write this event in a cleaner form, capital T
  being</span> <span m='186420'>larger than little t plus x and being larger
  than little</span> <span m='193190'>t, again divided by the probability of
  the</span> <span m='196560'>conditioning event.</span> </p><p><span
  m='200310'>And now notice that capital T will be greater than little t</span>
  <span m='206510'>and also greater than little t plus x, that is, capital T
  is</span> <span m='212660'>larger than this number and this number, if and
  only if it</span> <span m='216810'>is larger than this second number
  here.</span> </p><p><span m='221600'>So in other words, the intersection of
  these two</span> <span m='224090'>events is just this event here, that capital
  T is larger</span> <span m='228470'>than little t plus x.</span> </p><p><span
  m='243250'>Now, we can use the formula for the probability that</span> <span
  m='248840'>capital T is larger than something.</span> </p><p><span
  m='251460'>We apply this formula, except that instead of little x, we</span>
  <span m='254810'>have t plus x.</span> </p><p><span m='256730'>And so here we
  have e to the minus lambda t plus x divided</span> <span m='263950'>by the
  probability that capital T is bigger than t.</span> </p><p><span m='267720'>So
  we use this formula, but with little t in the place of</span> <span
  m='271430'>little x, and we obtain e to the minus lambda t.</span>
  </p><p><span m='275490'>We have a cancellation, and we're left with e to the
  minus</span> <span m='279335'>lambda x, which is a final answer in this
  calculation.</span> </p><p><span m='285060'>What do we observe here?</span>
  </p><p><span m='287220'>The probability that the used light bulb will live
  for</span> <span m='291800'>another x time units is exactly the same as
  the</span> <span m='298200'>corresponding probability that the new light bulb
  will be</span> <span m='302290'>alive for another x time units.</span>
  </p><p><span m='307130'>So new and used light bulbs are described by the
  same</span> <span m='310890'>probabilities, and they're
  probabilistically</span> <span m='314460'>identical, the same.</span>
  </p><p><span m='317100'>Differently said, the used light bulb does not
  remember,</span> <span m='321510'>and it is not affected by how long it has
  been running.</span> </p><p><span m='326070'>And this is the memorylessness
  property of</span> <span m='329200'>exponential random variables.</span>
  </p><p><span m='334230'>Let us now build some additional insights on</span>
  <span m='336730'>exponential random variables.</span> </p><p><span
  m='338950'>We have a formula for the density, the PDF.</span> </p><p><span
  m='342550'>And from this, we can calculate the probability that</span> <span
  m='346430'>T lies in a small interval.</span> </p><p><span m='350600'>For
  example, for a small delta, this probability here</span> <span m='355170'>is
  going to be approximately equal to the density of T</span> <span
  m='359900'>evaluated at 0 times delta, which is lambda times e to the</span>
  <span m='369130'>0, which is 1, times delta.</span> </p><p><span
  m='373490'>What if we are told that the light bulb has been alive for</span>
  <span m='377610'>t time units?</span> </p><p><span m='380720'>What is the
  probability that it burns out during the next</span> <span m='385370'>delta
  times units?</span> </p><p><span m='388320'>Since a used but still alive light
  bulb is</span> <span m='392420'>probabilistically identical to a new one, this
  conditional</span> <span m='396280'>probability is the same as this
  probability here that a</span> <span m='406580'>new light bulb burns out in
  the next delta times units.</span> </p><p><span m='410750'>And so this is also
  approximately</span> <span m='413900'>equal to lambda delta.</span>
  </p><p><span m='417300'>So we see that independently of how long a light bulb
  has</span> <span m='420780'>been alive, during the next delta time units it
  will have</span> <span m='425610'>a lambda delta probability of
  failing.</span> </p><p><span m='428806'>One way of thinking about this
  situation is that the time</span> <span m='432220'>interval is split into
  little intervals of length delta.</span> </p><p><span m='442470'>And as long
  as the light bulb is alive, if it is alive at</span> <span m='446790'>this
  point, it will have probability lambda delta of</span> <span
  m='450920'>burning out during the next interval of length delta.</span>
  </p><p><span m='455500'>This is like flipping a coin.</span> </p><p><span
  m='457450'>Once every delta time steps, there is a probability lambda</span>
  <span m='461820'>delta that there is a success in that coin flip, where</span>
  <span m='466260'>success corresponds to having the light bulb actually
  burn</span> <span m='469470'>down, and the exponential random variable
  corresponds to</span> <span m='473200'>the total time elapsed until the first
  success.</span> </p><p><span m='476470'>In this sense, the exponential random
  variable is a close</span> <span m='480340'>analog of the geometric random
  variable, which was the time</span> <span m='483880'>until the first success
  in a discrete time setting.</span> </p><p><span m='488990'>This analogy turns
  out to be the foundation behind the</span> <span m='492040'>Poisson process
  that we will be studying</span> <span m='495150'>later in this course.</span>
  </p><p></p>
uid: a1c92a90ba9a6f23ee75cda735bfd656
type: course
layout: video
---
