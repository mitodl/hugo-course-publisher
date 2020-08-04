---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: D_EGYzqmapc
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    title: Video-YouTube-Stream
    type: Video
    uid: c97d79740ff62b325cf279f2e3c8d393
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/D_EGYzqmapc/default.jpg'
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b31f7032045e087979cccaac57ac5bdc
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: D_EGYzqmapc
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: b5c76ae72ddf2bf0a30aba9ff25a9f31
  - id: D_EGYzqmapc.srt
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/definition-of-the-poisson-process/D_EGYzqmapc.srt
    title: 3play caption file
    type: null
    uid: f706e882be06b5a37f19da17a12108bd
  - id: D_EGYzqmapc.pdf
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/definition-of-the-poisson-process/D_EGYzqmapc.pdf
    title: 3play pdf file
    type: null
    uid: 0de13560daee0c9c3685bbe685f82694
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0ec149c36b8d33266111df5294965027
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 487dee7844daaa6e199404497f0d3e51
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L22-02_300k.mp4
    parent_uid: 683712b3ae91628f5abcd4925f1e5733
    title: Video-Internet Archive-MP4
    type: Video
    uid: 303f49bb61b4eea1aec1c7ddb68ec005
inline_embed_id: 3035188definitionofthepoissonprocess34919742
order_index: 2024
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: definition-of-the-poisson-process
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/definition-of-the-poisson-process
title: Definition of the Poisson Process
transcript: >-
  <p><span m='1020'>We now set out to study the Poisson process, which</span>
  <span m='3820'>is a continuous time version of the Bernoulli process.</span>
  </p><p><span m='7195'>In the Bernoulli process, time is divided into
  slots.</span> </p><p><span m='10230'>And during each one of the slots,</span>
  <span m='11730'>we may either have an arrival or no arrival.</span>
  </p><p><span m='15610'>In the Poisson process, time is continuous.</span>
  </p><p><span m='19030'>And we may get arrivals at any time.</span>
  </p><p><span m='21950'>We want to define the Poisson process</span> <span
  m='23790'>by introducing some assumptions that in some ways parallel</span>
  <span m='26980'>the assumptions that we made for the Bernoulli process.</span>
  </p><p><span m='29320'>What where those assumptions?</span> </p><p><span
  m='31180'>The first one we made was the assumption of independence--</span>
  <span m='34280'>namely that what happens in different slots</span> <span
  m='37310'>are independent.</span> </p><p><span m='39890'>Similarly, for the
  Poisson process,</span> <span m='41890'>we will make the following
  independence assumption.</span> </p><p><span m='44880'>If we consider two
  intervals, two time intervals that</span> <span m='48825'>are disjoint, and
  look at the random variable that</span> <span m='51790'>stands for the number
  of arrivals</span> <span m='53260'>during this interval and that
  interval,</span> <span m='55410'>we will assume that these two random
  variables</span> <span m='57590'>are independent.</span> </p><p><span
  m='59010'>But even more than that, if we take</span> <span m='61520'>any
  collection of disjoint time intervals,</span> <span m='65030'>and we look at
  the associated random variables,</span> <span m='67955'>the associated numbers
  of arrivals,</span> <span m='70440'>that collection will also consist</span>
  <span m='72600'>of independent random variables.</span> </p><p><span
  m='75270'>The second assumption for the Bernoulli processes</span> <span
  m='77350'>was one of time homogeneity, namely at each slot,</span> <span
  m='80860'>we had the same probability of an arrival.</span> </p><p><span
  m='84050'>We want to make a similar assumption for the Poisson</span> <span
  m='86440'>process, and it's going to be the following.</span> </p><p><span
  m='89240'>The probability that we have k arrivals</span> <span
  m='92000'>during an interval of a certain duration tau</span> <span
  m='95930'>is going to be the same no matter where</span> <span m='98420'>that
  interval sits.</span> </p><p><span m='100130'>So if this is an interval that
  has a certain duration,</span> <span m='103350'>and this is an interval that
  has the same duration,</span> <span m='106960'>the probability of three
  arrivals in this interval</span> <span m='110020'>is going to be the same as
  the probability of three</span> <span m='112539'>arrivals in that
  interval.</span> </p><p><span m='114759'>And therefore, since this probability
  does not</span> <span m='117200'>depend on where the interval sits,</span>
  <span m='119380'>that probability will be fully defined</span> <span
  m='122090'>by the number of arrivals that we're interested in</span> <span
  m='124510'>and the length of the interval as</span> <span m='127420'>opposed
  to the location of the interval.</span> </p><p><span m='129650'>So we will be
  using this notation here</span> <span m='132520'>to indicate this
  probability.</span> </p><p><span m='135240'>In this notation, we think of tau
  as a constant.</span> </p><p><span m='140710'>And then, P of k corresponds to
  probabilities.</span> </p><p><span m='145640'>In particular, if you add over
  all k's</span> <span m='149530'>the various probabilities, what you should
  get</span> <span m='152630'>would be a value of 1, because this</span> <span
  m='155800'>exhausts all the possibilities.</span> </p><p><span m='157500'>And
  k here ranges from 0 to infinity,</span> <span m='160500'>because we allow an
  arbitrarily large number of arrivals</span> <span m='164829'>during a given
  time interval.</span> </p><p><span m='167370'>Now, with this assumption in
  place,</span> <span m='169190'>it would still be possible to have</span> <span
  m='171110'>arrivals that happen simultaneously,</span> <span
  m='173310'>multiple arrivals at the same time point.</span> </p><p><span
  m='177620'>In order to avoid this situation,</span> <span m='179550'>we
  introduce one more assumption which is the following.</span> </p><p><span
  m='184990'>It talks about the number of arrivals</span> <span
  m='188590'>during a time interval that has a small length delta.</span>
  </p><p><span m='193950'>During a small time interval, there</span> <span
  m='197440'>is negligible probability of having more than one arrival.</span>
  </p><p><span m='201170'>We will either have one or zero arrivals.</span>
  </p><p><span m='205680'>And the probability of one arrival</span> <span
  m='208210'>is a certain number, lambda times delta.</span> </p><p><span
  m='211790'>It's proportional to delta.</span> </p><p><span m='213540'>So if
  the interval becomes smaller and smaller,</span> <span m='216690'>that
  probability also goes to 0.</span> </p><p><span m='219250'>But it goes to 0 at
  a rate proportional to delta.</span> </p><p><span m='223400'>So you can think
  of lambda as probability per unit time.</span> </p><p><span m='228980'>These
  are the units of lambda.</span> </p><p><span m='231730'>Now here, I'm writing
  an approximate equality.</span> </p><p><span m='235680'>What does that
  mean?</span> </p><p><span m='236810'>It means that these are not exact
  expressions.</span> </p><p><span m='239720'>But they are exact within a second
  order term.</span> </p><p><span m='244620'>And a second order term is a
  term</span> <span m='246550'>that's negligible compared to the first order
  term</span> <span m='249980'>when delta is small.</span> </p><p><span
  m='251860'>More precisely, mathematically, what we mean</span> <span
  m='254470'>is that a second order term compared to a first order term</span>
  <span m='259890'>goes to 0 as delta goes to 0.</span> </p><p><span
  m='266140'>Finally, let me reiterate that lambda</span> <span
  m='269150'>should be interpreted as an arrival rate.</span> </p><p><span
  m='272590'>It is a probability per unit time.</span> </p><p><span
  m='275960'>The bigger lambda is, the bigger the probability</span> <span
  m='279815'>is that we get an arrival during a small time interval.</span>
  </p><p><span m='283520'>If we double lambda, then we double the
  probability</span> <span m='286560'>that we have an arrival during a small
  time interval.</span> </p><p><span m='290090'>And so we expect to have about
  twice as many arrivals, hence</span> <span m='295040'>the interpretation as an
  arrival rate.</span> </p><p><span m='297550'>We will see shortly that this is
  also justified</span> <span m='300880'>because lambda shows up in expressions
  for the expected</span> <span m='304030'>number of arrivals during a time
  interval.</span> </p>
uid: 683712b3ae91628f5abcd4925f1e5733
type: course
layout: video
---
