---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 3vMZtGUdTVw
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    title: Video-YouTube-Stream
    type: Video
    uid: 5f21a88a17edd59bed6260a27aa2815c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/3vMZtGUdTVw/default.jpg'
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3bea23ff43d85ee9244627852128457b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 3vMZtGUdTVw
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9fa15bdb0ace54642467513d0d7fd475
  - id: 3vMZtGUdTVw.srt
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/poisson-arrivals-during-an-exponential-interval/3vMZtGUdTVw.srt
    title: 3play caption file
    type: null
    uid: a882a5609e1574a35c2f36d100bab4eb
  - id: 3vMZtGUdTVw.pdf
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/poisson-arrivals-during-an-exponential-interval/3vMZtGUdTVw.pdf
    title: 3play pdf file
    type: null
    uid: 8701cff8b5ca00c9b6218ec5b13b8bd4
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 77ce46104c01d528a6ff84c282cf7dc1
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c54374ba9695d59e889e3538cffa9e7a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S23-02_300k.mp4
    parent_uid: 0ee0afc0169d032d1b36bbc8a9a48208
    title: Video-Internet Archive-MP4
    type: Video
    uid: ba4be0c5d32bc2bf4a2139c1cbadb105
inline_embed_id: 53812083poissonarrivalsduringanexponentialinterval69793922
order_index: 2195
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: poisson-arrivals-during-an-exponential-interval
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/poisson-arrivals-during-an-exponential-interval
title: Poisson Arrivals During an Exponential Interval
transcript: >-
  <p><span m='1860'>In this video, we're going to establish</span> <span
  m='3680'>a nice property of the Poisson process.</span> </p><p><span
  m='6400'>Here is our setting.</span> </p><p><span m='7860'>We have a Poisson
  process with arrival rate, lambda,</span> <span m='12920'>and so arrivals keep
  coming.</span> </p><p><span m='15360'>And we watch this process until a
  certain random time, T.</span> </p><p><span m='21530'>So T is this time
  here.</span> </p><p><span m='24770'>Now, T is an exponential random variable
  with some parameter,</span> <span m='29190'>and T is independent from the
  Poisson arrival process.</span> </p><p><span m='32800'>What we're interested
  in is the number</span> <span m='35350'>of arrivals that happened during this
  time.</span> </p><p><span m='39240'>How can we answer this question?</span>
  </p><p><span m='41270'>There are two ways.</span> </p><p><span m='42250'>One
  is using mathematical manipulations.</span> </p><p><span m='44810'>The other
  is using intuition.</span> </p><p><span m='47190'>Let's see what it would take
  if we wanted</span> <span m='49750'>to solve the problem using
  formulas.</span> </p><p><span m='52760'>So let's call N-T, with capital T, the
  number of arrivals</span> <span m='59770'>until time T in our Poisson
  process.</span> </p><p><span m='62800'>And we wish to find the distribution of
  N-T. So we</span> <span m='66490'>want to calculate, for example, the
  probability</span> <span m='68690'>that N-T is equal to a specific number,
  k.</span> </p><p><span m='74110'>Now, we do not know very much about this
  random variable,</span> <span m='78330'>but we do know the probability of the
  random variable, N-T,</span> <span m='84170'>If we have a deterministic
  time.</span> </p><p><span m='87130'>So perhaps we can condition by
  fixing</span> <span m='90490'>the value of the random variable, capital T--
  that</span> <span m='94450'>is, to condition on that random variable,</span>
  <span m='97350'>taking on a specific value.</span> </p><p><span
  m='101530'>What happens in this case?</span> </p><p><span m='103220'>Well, if
  I tell you that capital T is equal to little t,</span> <span m='106520'>this
  probability is going to be the same as the probability</span> <span
  m='110729'>that N with little t is equal to k, where N with little t</span>
  <span m='117570'>is the number of arrivals until time, little t.</span>
  </p><p><span m='121040'>But the number of arrivals, until a certain
  time,</span> <span m='123770'>is a Poisson random variable.</span>
  </p><p><span m='125730'>So we do know what this probability is.</span>
  </p><p><span m='129949'>It is lambda to the k, e to the [minus] lambda
  t,</span> <span m='133470'>divided by k factorial.</span> </p><p><span
  m='137180'>Now, if we have this conditional probability, how can</span> <span
  m='139670'>we get the unconditional probability?</span> </p><p><span
  m='143150'>This is done by using the total probability theorem.</span>
  </p><p><span m='146540'>We consider all possible values of little t,
  which</span> <span m='150260'>are all the numbers from 0 to infinity.</span>
  </p><p><span m='153440'>We weigh each possible value of little t</span> <span
  m='158070'>according to the corresponding PDF of the random variable,
  T.</span> </p><p><span m='163130'>And we have this equality.</span>
  </p><p><span m='166900'>We know what this term is.</span> </p><p><span
  m='168640'>It is this expression.</span> </p><p><span m='173130'>And the
  density of capital T, since it</span> <span m='176320'>is an exponential
  variable, the density takes this form.</span> </p><p><span m='181260'>And so,
  in order to find the distribution</span> <span m='183550'>of the random
  variable, N capital T,</span> <span m='185640'>all that we need to do is to
  calculate this integral.</span> </p><p><span m='189230'>But this is a rather
  messy integral.</span> </p><p><span m='192090'>So let us try to see if we can
  find</span> <span m='194410'>a shortcut to this problem.</span> </p><p><span
  m='199590'>So here is what we have.</span> </p><p><span m='202570'>We have a
  Poisson process.</span> </p><p><span m='206960'>Let's call it the first
  Poisson process,</span> <span m='209770'>that has a certain rate,
  lambda.</span> </p><p><span m='212470'>And this Poisson process has arrivals
  at various times.</span> </p><p><span m='220310'>And then we have a random
  variable, capital T,</span> <span m='225340'>which is exponential.</span>
  </p><p><span m='227860'>How should we think about an exponential random
  variable?</span> </p><p><span m='232460'>We can think of an exponential random
  variable</span> <span m='234970'>as being the first arrival in some Poisson
  process.</span> </p><p><span m='239560'>So let us put down a second Poisson
  process with rate mu.</span> </p><p><span m='244120'>Since we have assumed
  that capital T is</span> <span m='246480'>independent from the red Poisson
  process,</span> <span m='249530'>we can just assume that this blue
  Poisson</span> <span m='251920'>process is independent from the first.</span>
  </p><p><span m='257649'>Now, let us merge the two processes.</span>
  </p><p><span m='263020'>And we're going to form a merged process that</span>
  <span m='267070'>records an arrival at those times at which either</span>
  <span m='271660'>of the two processes have an arrival.</span> </p><p><span
  m='277500'>This is the time of interest.</span> </p><p><span m='281950'>And
  the random variable that we're interested in</span> <span m='284320'>is the
  number of red arrivals until that time.</span> </p><p><span m='287430'>That
  random variable we call N capital T. The discussion</span> <span
  m='293010'>will be a little simpler if we define another random
  variable,</span> <span m='296800'>K, which is N capital T plus 1.</span>
  </p><p><span m='302500'>So K is the number of arrivals in the merged
  process</span> <span m='307360'>until this time.</span> </p><p><span
  m='308760'>That is, we take those arrivals of the red process,</span> <span
  m='311320'>and we also include that arrival here.</span> </p><p><span
  m='314660'>So if the number of arrivals that we got here</span> <span
  m='318240'>was N capital T, here we have arrivals 1, 2, and so on.</span>
  </p><p><span m='326290'>And this is arrival number K. So K is a random
  variable,</span> <span m='330930'>and we want to find what it is.</span>
  </p><p><span m='333260'>So what are we asking?</span> </p><p><span
  m='336230'>What is K?</span> </p><p><span m='339000'>K is the number of
  arrivals in the merged process</span> <span m='353580'>until you get an
  arrival in the merged process which</span> <span m='358320'>is coming from the
  blue process.</span> </p><p><span m='373870'>And now, here is how we can think
  of this situation.</span> </p><p><span m='378460'>Think of each arrival in the
  merged process as a trial.</span> </p><p><span m='395860'>Each one of these
  arrivals is coming</span> <span m='398130'>either from the red process or from
  the blue process.</span> </p><p><span m='401950'>Let us call it a success if
  it comes from the blue process.</span> </p><p><span m='418190'>So in that
  case, K is the number of trials</span> <span m='428000'>until we have a
  success.</span> </p><p><span m='434220'>K is the number of arrivals in the
  merged process</span> <span m='437930'>until we have a successful
  arrival,</span> <span m='439910'>meaning one that came out of the blue
  process.</span> </p><p><span m='444290'>So what do we know about those
  trials?</span> </p><p><span m='447070'>What are their statistical
  properties?</span> </p><p><span m='450270'>First, what is the probability of
  success?</span> </p><p><span m='457580'>The probability of success is the
  probability</span> <span m='460050'>that when you get an arrival in the merged
  process,</span> <span m='463060'>it is coming from the blue process.</span>
  </p><p><span m='469580'>And as we have seen, given an arrival in the merged
  process,</span> <span m='474460'>there is probability that it's coming</span>
  <span m='476450'>from this particular process that's</span> <span
  m='478150'>proportional to the arrival rate of that particular process.</span>
  </p><p><span m='482050'>And it is equal, as we have discussed</span> <span
  m='485420'>before, it is equal to this.</span> </p><p><span m='489560'>In
  addition, we have discussed that when</span> <span m='491890'>you look at the
  merged process, and you</span> <span m='493720'>ask, what was the origin of
  that arrival,</span> <span m='496390'>and you ask, what was the origin of that
  arrival,</span> <span m='499540'>the answers to these two questions</span>
  <span m='501750'>are independent of each other.</span> </p><p><span
  m='504360'>In other words, the origin of this arrival</span> <span
  m='506470'>is statistically independent from the origin</span> <span
  m='509060'>of that arrival.</span> </p><p><span m='510710'>So this means that
  these trials are independent.</span> </p><p><span m='519760'>So what we're
  looking at is a random variable,</span> <span m='524560'>which is the number
  of trials until the first success,</span> <span m='528330'>in a sequence of
  independent trials,</span> <span m='531070'>where each trial has a success
  probability</span> <span m='534090'>equal to that value.</span> </p><p><span
  m='535800'>And we know what that distribution is.</span> </p><p><span
  m='539065'>It is a geometric with this particular parameter.</span>
  </p><p><span m='544000'>This gives us the probability distribution</span>
  <span m='545900'>of the random variable, K, and once you have the PMF of
  K,</span> <span m='549970'>you just shift it by 1 to the left in order</span>
  <span m='553890'>to get the probability distribution, the PMF,</span> <span
  m='556380'>of the random variable, N capital T.</span> </p><p><span
  m='559960'>And so this is the answer to this problem.</span> </p><p><span
  m='562770'>The number of arrivals during an exponentially distributed
  time</span> <span m='568520'>interval [has] a geometric distribution</span>
  <span m='572030'>that's shifted by 1 to the left.</span> </p><p></p>
uid: 0ee0afc0169d032d1b36bbc8a9a48208
type: courses
layout: video
---
