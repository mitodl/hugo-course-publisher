---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8yaRt24qA1M
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    title: Video-YouTube-Stream
    type: Video
    uid: cf3bdfdd98e581e5978f6115f7519871
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8yaRt24qA1M/default.jpg'
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 69c22b8a801a34c6f280463244f31768
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8yaRt24qA1M
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 22e33b653f9ede6473cb1f5e82c21b7d
  - id: 8yaRt24qA1M.srt
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-beta-formula/8yaRt24qA1M.srt
    title: 3play caption file
    type: null
    uid: 18305e0808428ed81f41687ec89fdf20
  - id: 8yaRt24qA1M.pdf
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-beta-formula/8yaRt24qA1M.pdf
    title: 3play pdf file
    type: null
    uid: 727c236b85ce6511fc86859a225b357e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: acaef8c92a823874601be0bc86bd54e1
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b98c462febc04fad1b8250c84bf38f47
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S14-01_300k.mp4
    parent_uid: 6ae68fff51ee30a30c5c75e035597819
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3c61ee902d9741c5a205a82c24b53bdd
inline_embed_id: 97724703thebetaformula68608812
order_index: 1426
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-beta-formula
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-beta-formula
title: The Beta Formula
transcript: >-
  <p><span m='930'>In the context of the problem of estimating</span> <span
  m='3580'>the unknown bias of a coin, we encountered this distribution,</span>
  <span m='9000'>which is known as a Beta distribution.</span> </p><p><span
  m='12500'>It's a probability density for a random variable, Theta,</span>
  <span m='16750'>that takes values in the interval from 0 to 1.</span>
  </p><p><span m='21650'>So this formula is valid for thetas in this
  range.</span> </p><p><span m='24950'>And k here is a non-negative
  integer.</span> </p><p><span m='31980'>Now, this coefficient here,
  d(n,k),</span> <span m='35605'>is a normalizing constant, which is needed so
  that this is</span> <span m='39740'>a legitimate PDF, that it integrates to
  1.</span> </p><p><span m='43560'>And so in particular, d needs to be</span>
  <span m='47060'>equal to the integral of what we have in the numerator.</span>
  </p><p><span m='50440'>This is the choice that makes this whole expression
  integrate</span> <span m='53540'>to 1.</span> </p><p><span m='54550'>And this
  integral is calculated and can</span> <span m='57790'>be found to be equal to
  this particular expression.</span> </p><p><span m='62110'>How do we derive
  this expression?</span> </p><p><span m='65349'>One way is to carry out a long
  exercise in calculus.</span> </p><p><span m='69210'>We have this integral
  here.</span> </p><p><span m='70830'>You might either expand it and then
  integrate and collect</span> <span m='74500'>terms, or you could try to
  demonstrate this equality</span> <span m='78800'>by applying integration by
  parts.</span> </p><p><span m='82310'>But this is complicated.</span>
  </p><p><span m='83940'>Is there some simple way of arguing and deriving</span>
  <span m='87020'>this expression?</span> </p><p><span m='88200'>We will see
  that there is a very simple probabilistic argument</span> <span m='91370'>for
  deriving this equality.</span> </p><p><span m='93670'>What we will actually
  derive is this same equality,</span> <span m='96680'>but in slightly different
  notation.</span> </p><p><span m='99190'>Instead of k, we will use
  alpha.</span> </p><p><span m='101330'>Instead of n minus k, we will use
  beta.</span> </p><p><span m='105200'>So here we have alpha factorial times
  beta factorial.</span> </p><p><span m='109070'>In the denominator, we have the
  sum</span> <span m='111130'>of these two coefficients plus 1,</span> <span
  m='114360'>so this corresponds to alpha plus beta plus 1 factorial.</span>
  </p><p><span m='119240'>This is what we want to demonstrate.</span>
  </p><p><span m='122030'>What we will do will be to consider the following
  setting.</span> </p><p><span m='128350'>We start with alpha plus beta plus
  1,</span> <span m='131900'>that many independent random variables that</span>
  <span m='135150'>are uniform on the unit interval,</span> <span m='137940'>and
  we will consider the following event</span> <span m='141490'>and its
  probability.</span> </p><p><span m='143510'>This is the probability that these
  random variables</span> <span m='146630'>happen to be ordered in some
  particular order.</span> </p><p><span m='152680'>Let us call this event A, so
  this is the probability of A.</span> </p><p><span m='158750'>Now, this
  probability is not hard to calculate.</span> </p><p><span m='161410'>We have
  alpha plus beta plus 1 random variables-- independent,</span> <span
  m='165900'>identically distributed.</span> </p><p><span m='167620'>By
  symmetry, any particular way of ordering</span> <span m='171250'>these random
  variables is equally likely.</span> </p><p><span m='174590'>How many ways are
  there to order alpha plus beta</span> <span m='178030'>plus 1 random
  variables?</span> </p><p><span m='180390'>It's the factorial of the number of
  items</span> <span m='183440'>that we're trying to order.</span> </p><p><span
  m='185090'>We're talking about the probability</span> <span m='186570'>of a
  particular permutation, so this probability</span> <span m='189860'>is equal
  to 1 over the number of permutations</span> <span m='195190'>of alpha plus
  beta plus 1 objects.</span> </p><p><span m='200320'>So this is one expression
  for the probability of this event</span> <span m='203280'>A.</span>
  </p><p><span m='204280'>Now, we're going to calculate this probability</span>
  <span m='207850'>in a different way.</span> </p><p><span m='209670'>What we
  will do is we're going to apply the total probability</span> <span
  m='214829'>theorem.</span> </p><p><span m='216010'>We're going to condition on
  Z. We're</span> <span m='219250'>going to calculate the conditional
  probability of A</span> <span m='223770'>given that Z takes a specific
  value,</span> <span m='228020'>and then weigh those probabilities
  according</span> <span m='232570'>to the probability density of the random
  variable Z.</span> </p><p><span m='239380'>So this is just the total
  probability theorem</span> <span m='242300'>applied to this particular
  context.</span> </p><p><span m='245300'>And now to make progress, what we will
  need to do</span> <span m='249150'>is to find this conditional
  probability.</span> </p><p><span m='256040'>We fix a constant little theta,
  and we want the probability</span> <span m='262810'>that this event
  happens.</span> </p><p><span m='265540'>What is this event?</span>
  </p><p><span m='272390'>It is the event that all of the X's fall inside this
  interval,</span> <span m='282620'>all the Y's fall inside this
  interval,</span> <span m='286770'>and furthermore, the X's are sorted and the
  Y's are sorted.</span> </p><p><span m='292650'>So let us write this
  out.</span> </p><p><span m='295020'>It's the probability that all of the X's
  happen</span> <span m='301180'>to be less than theta, all the Y's</span> <span
  m='306990'>happen to be bigger than theta, and also, not just that,</span>
  <span m='314880'>but the X's are sorted, and furthermore, the Y's</span> <span
  m='325610'>are sorted as well.</span> </p><p><span m='334790'>Clearly, if I
  give you the value of theta</span> <span m='337700'>so that Z is equal to
  theta, for this event to happen,</span> <span m='341870'>we must have all
  these events here happen as well.</span> </p><p><span m='346370'>So now, let
  us try to calculate the probability of this event.</span> </p><p><span
  m='351180'>We're going to use the multiplication rule.</span> </p><p><span
  m='353090'>First, take the probability of this event</span> <span
  m='355890'>and then the conditional probability of that event.</span>
  </p><p><span m='361460'>The X's and the Y's are independent,</span> <span
  m='364150'>so we can take the probability of this event and then
  multiply</span> <span m='368215'>with the probability of this event involving
  the Y's.</span> </p><p><span m='371480'>How about the probability of this
  event,</span> <span m='373440'>that all of the X's are less than theta?</span>
  </p><p><span m='376025'>Since the X's are independent, this</span> <span
  m='378990'>is going to be equal to the probability</span> <span
  m='381400'>that X1 is less than theta.</span> </p><p><span m='384870'>What is
  this probability?</span> </p><p><span m='386440'>Since X1 is uniform on the
  unit interval and this is theta,</span> <span m='390040'>the probability of
  falling in this interval</span> <span m='392040'>is equal to theta.</span>
  </p><p><span m='394430'>Times the probability that X2 is less than
  theta.</span> </p><p><span m='399070'>This probability is, again, theta and so
  on.</span> </p><p><span m='402670'>We have alpha many terms of that
  kind,</span> <span m='407310'>so this probability that all of these random
  variables</span> <span m='410510'>are less theta is equal to theta to the
  power of alpha.</span> </p><p><span m='415100'>Similarly, about the
  Y's.</span> </p><p><span m='417380'>For any particular Y, the
  probability</span> <span m='420300'>that it falls in this interval is</span>
  <span m='422970'>equal to the length of this interval, which</span> <span
  m='425540'>is 1 minus theta.</span> </p><p><span m='428220'>This is the
  probability for each one of the Y's.</span> </p><p><span m='431830'>There's
  beta many Y's.</span> </p><p><span m='435750'>The Y's are independent.</span>
  </p><p><span m='437370'>So the probability that all of them fall in this
  interval</span> <span m='440080'>is going to be this number to the power of
  beta.</span> </p><p><span m='448620'>So suppose that I told you that all the
  X's are</span> <span m='452690'>less than theta, and then I ask you,</span>
  <span m='457330'>given this information, what is the probability</span> <span
  m='461650'>that the X's that you got are arranged</span> <span m='465060'>in
  this particular order?</span> </p><p><span m='471280'>Now, because of the
  complete symmetry of the problem,</span> <span m='475630'>even if I told you
  that all the X's fall inside this interval,</span> <span m='479965'>any order
  of the X's is equally likely.</span> </p><p><span m='484690'>So the
  probability of this particular order</span> <span m='487860'>is going to be 1
  over the number of possible orderings.</span> </p><p><span m='492880'>How many
  ways are there that alpha items can be ordered?</span> </p><p><span
  m='497140'>There are alpha factorial possible orderings,</span> <span
  m='501240'>so the probability that I obtain one particular ordering</span>
  <span m='505410'>is 1 over alpha factorial.</span> </p><p><span m='509010'>And
  similarly, if I tell you that the Y's all</span> <span m='511850'>fell in this
  interval by symmetry,</span> <span m='514570'>the probability of a particular
  order</span> <span m='516620'>is going to be 1 over the [number of
  possible]</span> <span m='520830'>orders, which is beta factorial.</span>
  </p><p><span m='526240'>All right.</span> </p><p><span m='526930'>So we have
  this conditional probability,</span> <span m='529990'>and now we can go back
  to this formula and substitute,</span> <span m='534830'>and what we obtain is
  the integral of this expression,</span> <span m='540290'>theta to the alpha, 1
  minus theta [to the] beta, 1</span> <span m='545660'>over alpha factorial
  times 1 over beta factorial.</span> </p><p><span m='551840'>Then we have the
  density of Z, but since Z is uniform,</span> <span m='555520'>the density is
  equal to 1.</span> </p><p><span m='558010'>And then we have a factor of d
  theta.</span> </p><p><span m='561720'>So what have we achieved?</span>
  </p><p><span m='563730'>We calculated the probability of the event A</span>
  <span m='566855'>in two different ways, and we got two seemingly
  different</span> <span m='571520'>answers.</span> </p><p><span m='572490'>But
  these two answers have to agree.</span> </p><p><span m='575420'>Therefore,
  this expression is equal to that expression.</span> </p><p><span
  m='579450'>And now if you take this factor, 1 over alpha factorial times
  1</span> <span m='583930'>over beta factorial, and send it to the other
  side</span> <span m='587170'>of the equation, what we obtain is exactly the
  formula</span> <span m='590920'>that we wished to derive.</span> </p><p><span
  m='593420'>This example is an instance of the following.</span> </p><p><span
  m='596530'>There are certain formulas in mathematics</span> <span
  m='598840'>that are somewhat complicated to derive,</span> <span
  m='601870'>and their derivations using, for example,</span> <span
  m='604270'>calculus are quite unintuitive.</span> </p><p><span m='606570'>But
  once you interpret the various terms that</span> <span m='610090'>appear in
  such a relation in a probabilistic way,</span> <span m='614280'>you can
  sometimes find very easy derivations and explanations</span> <span
  m='619660'>why such a formula has to be true.</span> </p><p></p>
uid: 6ae68fff51ee30a30c5c75e035597819
type: courses
layout: video
---
