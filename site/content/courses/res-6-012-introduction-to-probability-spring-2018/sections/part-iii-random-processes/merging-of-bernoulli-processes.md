---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: AyCLokHV774
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    title: Video-YouTube-Stream
    type: Video
    uid: 696d7b16b9822adbb0f6c1dc214dc1b6
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/AyCLokHV774/default.jpg'
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9dab4e972ace843c94fc22e660577375
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: AyCLokHV774
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7e8b5b62989fd8e50a0ec706e1df9160
  - id: AyCLokHV774.srt
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/merging-of-bernoulli-processes/AyCLokHV774.srt
    title: 3play caption file
    type: null
    uid: 1973726d85daf87e6d79e0373f44f6ea
  - id: AyCLokHV774.pdf
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/merging-of-bernoulli-processes/AyCLokHV774.pdf
    title: 3play pdf file
    type: null
    uid: 826bb8d6b864dd0b6af80b52827ddfa1
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a706a55138bbf43ba0ba981912685db2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ae51b2422a48644e82f7e664cdc1de30
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L21-08_300k.mp4
    parent_uid: 58f8db400deb0f8ac2fab55721df4975
    title: Video-Internet Archive-MP4
    type: Video
    uid: 74b436e01e531dd88f99476a7270cd14
inline_embed_id: 47261683mergingofbernoulliprocesses95635719
order_index: 1988
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: merging-of-bernoulli-processes
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/merging-of-bernoulli-processes
title: Merging of Bernoulli Processes
transcript: >-
  <p><span m='500'>We often think of a Bernoulli process</span> <span
  m='2370'>as a stream of arriving traffic.</span> </p><p><span m='4700'>What
  happens if we merge two streams?</span> </p><p><span m='7410'>For example,
  consider a server that receives traffic</span> <span m='11300'>from two
  independent sources.</span> </p><p><span m='14760'>How do we describe the
  total traffic</span> <span m='17270'>that arrives to this server?</span>
  </p><p><span m='19380'>Here's a precise model.</span> </p><p><span
  m='21420'>We have two streams that correspond</span> <span m='25420'>to
  Bernoulli processes with some parameters each, p and q,</span> <span
  m='29880'>respectively.</span> </p><p><span m='31060'>And each one of these
  processes receives arrivals</span> <span m='34440'>at certain times that we
  indicate by crosses;</span> <span m='38140'>and similarly, for the second
  process.</span> </p><p><span m='46780'>We assume that these two processes are
  independent.</span> </p><p><span m='50330'>And what we mean by this is that
  any collection</span> <span m='53150'>of random variables associated with the
  first process</span> <span m='56010'>will be independent from any collection
  of random variables</span> <span m='59370'>associated with the second
  process.</span> </p><p><span m='62350'>We now merge the two processes as
  follows.</span> </p><p><span m='65870'>Whenever there's an arrival in any of
  the original processes,</span> <span m='71260'>we record an arrival in the
  merged process,</span> <span m='75260'>as in this picture.</span> </p><p><span
  m='78390'>Notice that we do not to make a distinction between those
  slots</span> <span m='82150'>at which there was an arrival in only</span>
  <span m='84380'>one of the original [processes] versus those slots</span>
  <span m='87690'>in which there was an arrival in both of the original
  processes.</span> </p><p><span m='91900'>In both cases, we just say that
  there</span> <span m='94000'>was an arrival in the merged process,</span>
  <span m='96560'>and so collisions-- arrivals in both</span> <span m='99410'>of
  the original processes-- are counted</span> <span m='101780'>as only one
  arrival in the merged process.</span> </p><p><span m='106500'>Now, what can we
  say about the merged process?</span> </p><p><span m='109380'>We will argue
  that it is a Bernoulli</span> <span m='111670'>process with a certain
  parameter that we will compute.</span> </p><p><span m='115690'>To check the
  Bernoulli property for the merged process,</span> <span m='118460'>the first
  thing we need to ensure</span> <span m='120680'>is the independence
  assumption, independence across slots.</span> </p><p><span m='125100'>Let us
  look at two typical slots.</span> </p><p><span m='128300'>And to do this, it
  helps to define some notation</span> <span m='131860'>that Xt and Yt be the
  original processes,</span> <span m='136050'>and let Zt be the merged
  process.</span> </p><p><span m='139480'>The random variable Zt is determined
  in some way</span> <span m='144890'>by the random variables Xt and Yt.</span>
  </p><p><span m='147450'>If I tell you there was an arrival in the first</span>
  <span m='150610'>and to the second process, you can</span> <span
  m='152370'>tell whether there was an arrival in the merged process.</span>
  </p><p><span m='156230'>And similarly, the random variable Zt plus 1</span>
  <span m='159360'>is determined in some way from Xt plus 1 and Yt plus
  1.</span> </p><p><span m='167400'>What this is saying is that whether
  we</span> <span m='170290'>have an arrival at this slot is determined</span>
  <span m='173850'>by what happens in these two slots.</span> </p><p><span
  m='176600'>And whether we have an arrival in this slot</span> <span
  m='178930'>is determined by whatever happens in these two slots.</span>
  </p><p><span m='183310'>Now, we have assumed that the two processes are
  independent.</span> </p><p><span m='187320'>So these two random variables
  are</span> <span m='189040'>independent from those two random
  variables.</span> </p><p><span m='192130'>And furthermore, across time, this
  random variable</span> <span m='195200'>will be independent from that random
  variable.</span> </p><p><span m='197270'>And this random variable will be
  independent</span> <span m='199280'>from that random variable.</span>
  </p><p><span m='201060'>So these four random variables are independent of each
  other.</span> </p><p><span m='207450'>Because of this, we have Zt, a
  function</span> <span m='211750'>of two random variables that are independent
  from the two</span> <span m='215810'>random variables that determine Zt plus
  1.</span> </p><p><span m='222220'>And for this reason, Zt and Zt plus 1 will
  be independent.</span> </p><p><span m='227940'>This proves a pairwise
  independence property</span> <span m='230950'>for the merged process, but we
  can extend this argument</span> <span m='234010'>to argue that the collection
  of random variables, Z1 up to Zt,</span> <span m='239660'>is a collection of
  independent random variables.</span> </p><p><span m='243630'>So we have the
  independence property.</span> </p><p><span m='246030'>Now, let us calculate
  the probability of an arrival</span> <span m='250110'>during a typical
  slot.</span> </p><p><span m='253340'>During a typical time slot, there</span>
  <span m='256120'>are four possibilities for what may occur.</span>
  </p><p><span m='259970'>And these possibilities have to do with</span> <span
  m='262820'>whether in the X process, we have an arrival</span> <span
  m='266440'>or not; and in the Y process, whether we have an arrival</span>
  <span m='269680'>or not.</span> </p><p><span m='272250'>The probability that
  we have an arrival in both processes,</span> <span m='275280'>because of
  independence, is the product of the probability</span> <span m='278070'>that
  we have an arrival in the first process</span> <span m='280740'>with the
  probability that we have</span> <span m='282280'>an arrival in the second
  process.</span> </p><p><span m='284780'>Similarly, there's a probability
  p</span> <span m='287310'>of an arrival in the first process</span> <span
  m='288830'>and no arrival in the second.</span> </p><p><span
  m='291290'>There's a probability 1 minus p of no arrival</span> <span
  m='293875'>in the first process and [a probability q of]</span> <span
  m='295750'>an arrival in the second process.</span> </p><p><span
  m='298010'>And finally, there is probability 1 minus p times 1</span> <span
  m='301200'>minus q of no arrival in either of the two processes.</span>
  </p><p><span m='307830'>The probability that we have an arrival in the merged
  process</span> <span m='312110'>is the probability of this green event.</span>
  </p><p><span m='317070'>These are the cases in which an arrival gets</span>
  <span m='320230'>recorded in the merged process.</span> </p><p><span
  m='322960'>So the probability of an arrival in the merged process</span> <span
  m='325840'>is the sum of those three probabilities.</span> </p><p><span
  m='328040'>Or another way to calculate it is 1 minus this probability</span>
  <span m='332770'>here; namely, 1 minus 1 minus p times 1 minus q.</span>
  </p><p><span m='337990'>And after you expand this product</span> <span
  m='340190'>and do some cancellations, you end up</span> <span m='342790'>with
  this expression, which is the probability of an arrival</span> <span
  m='346500'>during a slot in the merged process.</span> </p><p><span
  m='349920'>Of course, this probability is constant across time.</span>
  </p><p><span m='353350'>And this, together with the independence
  property,</span> <span m='356280'>establishes that the merged process is
  actually</span> <span m='359159'>a Bernoulli process.</span> </p><p><span
  m='361440'>Now, let us end by answering one more question.</span> </p><p><span
  m='365200'>If I tell you that at a certain time slot,</span> <span
  m='368260'>there was at least one arrival in the two processes, which</span>
  <span m='372260'>means that there was an arrival in the merged process,</span>
  <span m='375900'>what is the probability that there</span> <span
  m='377680'>was an arrival in the first process?</span> </p><p><span
  m='382130'>Now, the event that there was an arrival in the first
  process</span> <span m='385610'>is this event here.</span> </p><p><span
  m='387700'>So we're trying to calculate the conditional probability</span>
  <span m='390560'>of the blue event given that the green event has
  occurred.</span> </p><p><span m='395040'>We use the definition of conditional
  probabilities.</span> </p><p><span m='398130'>A conditional probability is
  equal to the probability</span> <span m='401750'>that both events happen,
  which in this case</span> <span m='405320'>is the intersection of the blue and
  the green event,</span> <span m='408240'>which coincides with the blue
  event.</span> </p><p><span m='410260'>And the probability of the blue
  event</span> <span m='412159'>is the sum of these two numbers, is equal to
  p.</span> </p><p><span m='415350'>And then we divide by the probability of the
  conditioning</span> <span m='418420'>event, this is the probability of an
  arrival.</span> </p><p><span m='421630'>But this is what we have just
  calculated,</span> <span m='424610'>which is p plus q minus p times q.</span>
  </p><p></p>
uid: 58f8db400deb0f8ac2fab55721df4975
type: courses
layout: video
---
