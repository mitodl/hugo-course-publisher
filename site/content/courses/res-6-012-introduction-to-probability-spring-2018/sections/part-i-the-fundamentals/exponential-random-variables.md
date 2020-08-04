---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: FOFtMqCxZt0
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    title: Video-YouTube-Stream
    type: Video
    uid: 0898e700ea12666147e8366d47183988
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/FOFtMqCxZt0/default.jpg'
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7883db7c06ead9a5c754fce5812d8b3c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: FOFtMqCxZt0
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 458f1e778c8b085a1ca353bd376bed3f
  - id: FOFtMqCxZt0.srt
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/exponential-random-variables/FOFtMqCxZt0.srt
    title: 3play caption file
    type: null
    uid: 6222c57b71a5250c535c54c01ad846da
  - id: FOFtMqCxZt0.pdf
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/exponential-random-variables/FOFtMqCxZt0.pdf
    title: 3play pdf file
    type: null
    uid: dd4654b62e1f4b1b33978d71f8f9dfbb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c04774d5204a140fb1fee641238a9c25
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e0afbc4cc20e586762abcf396631e77f
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L08-06_300k.mp4
    parent_uid: 9322165a4eeea95a22312cb19262ad88
    title: Video-Internet Archive-MP4
    type: Video
    uid: 06a347b81f97ff6300f4afb29f1c541d
inline_embed_id: 35255968exponentialrandomvariables23142284
order_index: 789
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: exponential-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/exponential-random-variables
title: Exponential Random Variables
transcript: >-
  <p><span m='260'>We now introduce a new of random variable, the</span> <span
  m='2730'>exponential random variable.</span> </p><p><span m='4520'>It has a
  probability density function that is determined by</span> <span m='7360'>a
  single parameter lambda, which is a positive number.</span> </p><p><span
  m='10740'>And the form of the PDF is as shown here.</span> </p><p><span
  m='14250'>Note that the PDF is equal to 0 when x is negative, which</span>
  <span m='18340'>means that negative values of X will not occur.</span>
  </p><p><span m='21510'>They have zero probability.</span> </p><p><span
  m='23240'>And so our random variable is a</span> <span m='25590'>non-negative
  random variable.</span> </p><p><span m='28360'>The shape of the PDF is as
  shown in this diagram.</span> </p><p><span m='31360'>It's 0 for negative
  values, and then for positive values,</span> <span m='34740'>it starts off, it
  starts off at a value equal to lambda.</span> </p><p><span m='39300'>This is
  because if you plug in x equal to 0 in this</span> <span m='42620'>expression,
  you get lambda times e to the 0, which leaves</span> <span m='47680'>you just
  with lambda.</span> </p><p><span m='49170'>So it starts off with lambda, and
  then it decays</span> <span m='52230'>at the rate of lambda.</span>
  </p><p><span m='54200'>Notice that when lambda is small, the initial value
  of</span> <span m='57760'>the PDF is small.</span> </p><p><span m='59360'>But
  then the decay rate is also small, so that the PDF</span> <span
  m='63140'>extends over a large range of x's.</span> </p><p><span m='66280'>On
  the other hand, when lambda is large, then the PDF starts</span> <span
  m='71190'>large, so there's a fair amount of probability in the</span> <span
  m='73940'>vicinity of 0.</span> </p><p><span m='75390'>But then it decays
  pretty fast, so there's much less</span> <span m='78789'>probability for
  larger values of x.</span> </p><p><span m='82560'>Another observation to make
  is that the shape of this</span> <span m='85300'>exponential PDF is quite
  similar to the shape of the</span> <span m='88770'>geometric PDF that we have
  seen before, the only</span> <span m='92550'>difference being that here we
  have a discrete distribution,</span> <span m='96280'>but here we have a
  continuous analog of that distribution.</span> </p><p><span m='102150'>Let's
  now carry out a calculation.</span> </p><p><span m='105229'>Let us fix some
  positive number a, and let us calculate</span> <span m='110050'>the
  probability that our random variable takes a value</span> <span
  m='113550'>larger than or equal to a.</span> </p><p><span m='116390'>So what
  we're trying to do is to calculate the probability</span> <span
  m='119720'>that the random variable falls inside this</span> <span
  m='122160'>interval from a to infinity.</span> </p><p><span
  m='124890'>Whenever we have a PDF, we can calculate the probability of</span>
  <span m='128630'>falling inside an interval by integrating over that
  interval</span> <span m='133660'>the value of the PDF.</span> </p><p><span
  m='137540'>Therefore, we have to calculate</span> <span m='139470'>this
  particular integral.</span> </p><p><span m='141790'>And at this point, we can
  recall a fact from calculus,</span> <span m='146140'>namely that the integral
  of the function e to the ax is 1</span> <span m='155860'>over a times e to the
  ax.</span> </p><p><span m='159030'>We can use this fact by making the
  correspondence between a</span> <span m='165070'>and minus lambda.</span>
  </p><p><span m='169210'>And using this correspondence, we can now continue
  the</span> <span m='172680'>calculation of our integral.</span> </p><p><span
  m='174640'>We have a factor of lambda.</span> </p><p><span m='176829'>And then
  a factor of 1 over a, where a</span> <span m='179850'>stands for minus
  lambda.</span> </p><p><span m='182840'>So we get the minus 1 over
  lambda.</span> </p><p><span m='186030'>And then the same exponential function,
  e to the</span> <span m='188840'>minus lambda x.</span> </p><p><span
  m='190830'>And because the range of integration is from a to</span> <span
  m='194070'>infinity, we need to evaluate the integral at a and infinity</span>
  <span m='199060'>and take the difference.</span> </p><p><span m='200930'>Now,
  this lambda cancels that lambda.</span> </p><p><span m='203000'>We're left
  with a minus sign.</span> </p><p><span m='205270'>And from the upper limit, we
  get e to the minus lambda</span> <span m='209710'>times infinity.</span>
  </p><p><span m='211790'>And then from the second term, we have a minus sign
  that</span> <span m='214780'>cancels with that minus sign and gives us a plus
  term, plus</span> <span m='218810'>e to the minus lambda a.</span>
  </p><p><span m='222360'>Now, e to the minus infinity is 0.</span> </p><p><span
  m='227680'>And so we're left just with the last term.</span> </p><p><span
  m='231160'>And the answer is e to the minus lambda a.</span> </p><p><span
  m='235370'>So this gives us the tail probability for an exponential</span>
  <span m='239480'>random variable.</span> </p><p><span m='242660'>It tells us
  that the probability of falling higher</span> <span m='245630'>than a certain
  number falls off exponentially with that</span> <span m='249120'>certain
  number.</span> </p><p><span m='251430'>An interesting additional
  observation--</span> <span m='253960'>if we let a equal to 0 in this
  calculation, we obtain the</span> <span m='260225'>integral of the PDF over
  the entire range of x's.</span> </p><p><span m='265050'>And in that case, this
  probability becomes e to the</span> <span m='267780'>minus lambda 0, which is
  equal to 1.</span> </p><p><span m='270570'>So we have indeed verified that the
  integral of this PDF</span> <span m='277380'>is equal to 1, as it should
  be.</span> </p><p><span m='283390'>Now, let's move to the calculation of the
  expected</span> <span m='286110'>value of this random variable.</span>
  </p><p><span m='288980'>We can use the definition.</span> </p><p><span
  m='291920'>Since the PDF is non-zero only for positive values of x, we</span>
  <span m='298340'>only need to integrate from 0 to infinity.</span>
  </p><p><span m='300860'>We integrate x times the PDF.</span> </p><p><span
  m='307420'>And this is an integral that you may have encountered at</span>
  <span m='310510'>some point before.</span> </p><p><span m='311860'>It is
  evaluated by using integration by parts.</span> </p><p><span m='315230'>And
  the final answer turns out to be 1 over lambda.</span> </p><p><span
  m='320570'>Regarding the calculation of the expected value of the</span> <span
  m='324600'>square of the random variable, we need to write down a</span> <span
  m='328520'>similar integral, except that now we</span> <span m='330710'>will
  have here x squared.</span> </p><p><span m='335590'>This is just another
  integration by parts, only a</span> <span m='339980'>little more
  tedious.</span> </p><p><span m='341670'>And the answer turns out to be 2 over
  lambda squared.</span> </p><p><span m='347670'>Finally, to calculate the
  variance, we use the handy</span> <span m='352600'>formula that we
  have.</span> </p><p><span m='362120'>And the expected value of X squared is
  this term.</span> </p><p><span m='365540'>The expected value of X is this
  term.</span> </p><p><span m='368060'>When we square it, it becomes similar to
  this term, but we</span> <span m='371520'>have here a 2.</span> </p><p><span
  m='372930'>There we have a 1.</span> </p><p><span m='374180'>And so we're left
  with just 1 over lambda squared.</span> </p><p><span m='379080'>And this is
  the variance of the</span> <span m='381020'>exponential random
  variable.</span> </p><p><span m='382970'>Notice that when lambda is small, the
  PDF, as we</span> <span m='388290'>discussed before, falls off very slowly,
  which means that</span> <span m='392330'>large x's are also quite
  possible.</span> </p><p><span m='395290'>And so the average of this random
  variable will be on the</span> <span m='399360'>higher side.</span>
  </p><p><span m='400990'>The PDF extends over a large range, and that
  translates</span> <span m='404350'>into having a large mean.</span>
  </p><p><span m='406440'>And because when that happens, the PDF actually
  spreads, the</span> <span m='410650'>variance also increases.</span>
  </p><p><span m='412710'>And this is reflected in this formula for the
  variance.</span> </p><p><span m='418170'>The exponential random variable is,
  in many ways,</span> <span m='421410'>similar to the geometric.</span>
  </p><p><span m='423200'>For example, the expression for the mean, which is 1
  over</span> <span m='426630'>lambda, can be contrasted with the expression for
  the mean of</span> <span m='431310'>the geometric, which is 1 over p.</span>
  </p><p><span m='438120'>And the relationship between these two distributions,
  the</span> <span m='441570'>discrete and the continuous analog, is a theme
  that we</span> <span m='444400'>will revisit several times.</span>
  </p><p><span m='446930'>At this point, let me just say that the exponential
  random</span> <span m='450520'>variable is used to model many important</span>
  <span m='454400'>and real world phenomena.</span> </p><p><span
  m='456490'>Generally, it models the time that we have to wait until</span>
  <span m='460050'>something happens.</span> </p><p><span m='461500'>In the
  discrete case, the geometric random variable</span> <span m='464220'>models
  the time until we see a success for the first time.</span> </p><p><span
  m='468150'>In the continuous case, an exponential can be used to</span> <span
  m='471850'>model the time until a customer arrives, the time</span> <span
  m='476140'>until a light bulb burns out, the time until a machine</span> <span
  m='480390'>breaks down, the time until you receive an email, or maybe</span>
  <span m='485300'>the time until a meteorite falls on your house.</span>
  </p><p></p>
uid: 9322165a4eeea95a22312cb19262ad88
type: course
layout: video
---
