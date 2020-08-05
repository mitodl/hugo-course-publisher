---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: tzW5jlfEvwU
    parent_uid: 430abd5461bd417157f033ce03f30651
    title: Video-YouTube-Stream
    type: Video
    uid: 2650e942b741944255ea4f3033882977
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/tzW5jlfEvwU/default.jpg'
    parent_uid: 430abd5461bd417157f033ce03f30651
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 73e078deb1ad3c16ed6b743257294d03
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: tzW5jlfEvwU
    parent_uid: 430abd5461bd417157f033ce03f30651
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 35993d1e637f74a08e1e1fc241446ea3
  - id: tzW5jlfEvwU.srt
    parent_uid: 430abd5461bd417157f033ce03f30651
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-poisson-pmf-for-the-number-of-arrivals/tzW5jlfEvwU.srt
    title: 3play caption file
    type: null
    uid: ef950eafd87ba43050e5fcd52e9ef0bb
  - id: tzW5jlfEvwU.pdf
    parent_uid: 430abd5461bd417157f033ce03f30651
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-poisson-pmf-for-the-number-of-arrivals/tzW5jlfEvwU.pdf
    title: 3play pdf file
    type: null
    uid: dea03330399ea04a2b6ae39c6b539bc9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 430abd5461bd417157f033ce03f30651
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d08ce059115ed903e54fc12a288148f2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 430abd5461bd417157f033ce03f30651
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 754f9ec04fa496e0756db5166b8d15d6
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L22-04_300k.mp4
    parent_uid: 430abd5461bd417157f033ce03f30651
    title: Video-Internet Archive-MP4
    type: Video
    uid: cd4fa9416537902e31182fa9662cfe95
inline_embed_id: 70528838thepoissonpmfforthenumberofarrivals75555350
order_index: 2042
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-poisson-pmf-for-the-number-of-arrivals
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-poisson-pmf-for-the-number-of-arrivals
title: The Poisson PMF for the Number of Arrivals
transcript: >-
  <p><span m='610'>The definition of the Poisson process</span> <span
  m='2510'>gives us information about the probability</span> <span m='5270'>that
  we get k arrivals during an interval of length delta</span> <span
  m='9480'>when delta is a very small number.</span> </p><p><span m='12570'>How
  can we find the probability of k arrivals</span> <span m='15760'>during an
  interval of some general length tau,</span> <span m='18590'>where tau is no
  longer a small number?</span> </p><p><span m='21630'>In particular, we're
  interested in the random variable denoted</span> <span m='24700'>N sub tau,
  which stands for the number of arrivals</span> <span m='27350'>during an
  interval of length tau.</span> </p><p><span m='29660'>And we wish to find the
  PMF of this random variable,</span> <span m='32940'>the probability that N sub
  tau is equal to k,</span> <span m='36230'>and which is what we have been
  denoting</span> <span m='38190'>by this particular notation in the context of
  the Poisson</span> <span m='41250'>process.</span> </p><p><span m='43360'>Now
  if, instead of the Poisson model,</span> <span m='45910'>we had for the
  Bernoulli process model,</span> <span m='48250'>we would know the
  answer.</span> </p><p><span m='49830'>S, the number of successes, or number of
  arrivals in n slots,</span> <span m='54860'>has a PMF which is given by the
  binomial formula.</span> </p><p><span m='58780'>Can we somehow use what we
  know about the Bernoulli process</span> <span m='62900'>to find the answer for
  the Poisson process?</span> </p><p><span m='66150'>The answer is yes, and it
  involves a limiting argument</span> <span m='69430'>of the following
  kind.</span> </p><p><span m='71160'>We take the interval from 0 to t and
  divide it</span> <span m='74670'>into a very large number of intervals, so
  many of them,</span> <span m='79230'>where each one of the intervals has a
  length of delta,</span> <span m='82740'>where delta is a small number.</span>
  </p><p><span m='86180'>And to push the analogy with the Bernoulli
  process,</span> <span m='89560'>we will be calling those little intervals as
  slots.</span> </p><p><span m='95100'>Now during each slot, we may get zero
  arrivals, one arrival,</span> <span m='100960'>but there's also the
  possibility that there</span> <span m='103110'>may be two arrivals, or even
  more than two arrivals,</span> <span m='106979'>happening during one of the
  slots.</span> </p><p><span m='109400'>Because of this, the picture that we
  have here</span> <span m='112060'>is not quite the same as for the Bernoulli
  process</span> <span m='114850'>because in the Bernoulli process, each one of
  the slots</span> <span m='117360'>will get only 0 or 1.</span> </p><p><span
  m='120350'>So the source of the discrepancy between the two models</span>
  <span m='123840'>is that here, a slot may obtain two or more arrivals.</span>
  </p><p><span m='128220'>But how likely is this?</span> </p><p><span
  m='130250'>Let us look at the probability that some slot, that</span> <span
  m='134110'>is, any one of the slots, contains two or more arrivals.</span>
  </p><p><span m='139070'>That is, we're dealing with the union of the
  events</span> <span m='142770'>that slot i has two or more arrivals.</span>
  </p><p><span m='153540'>This event is the union of these events</span> <span
  m='156250'>and, therefore, the probability of this event is less than</span>
  <span m='159810'>or equal than the sum of the probabilities</span> <span
  m='164870'>of the constituents events.</span> </p><p><span m='167829'>This is
  an inequality that we have</span> <span m='170030'>seen at some point in the
  past.</span> </p><p><span m='171730'>And we're calling it to the union
  bound.</span> </p><p><span m='174872'>Now what is this summation?</span>
  </p><p><span m='177350'>i ranges over the different slots.</span> </p><p><span
  m='179800'>And we have tau over delta slots,</span> <span m='183100'>so
  there's so many terms that are being summed.</span> </p><p><span
  m='186260'>Now, during any particular slot, the probability</span> <span
  m='189100'>of two or more arrivals is of order delta squared, according</span>
  <span m='193520'>to the definition of the Poisson process.</span> </p><p><span
  m='195880'>And this quantity converges to 0 when</span> <span m='198800'>we
  let delta become smaller and smaller.</span> </p><p><span m='202240'>So this
  means that the discrepancy between the Poisson</span> <span m='206230'>and the
  Bernoulli model, which was due to the possibility</span> <span m='210030'>that
  we might get two or more arrivals during one</span> <span m='212910'>of those
  slots, this discrepancy is something</span> <span m='216120'>that happens with
  negligible probability.</span> </p><p><span m='220380'>In other words, the
  probability that we</span> <span m='223610'>get k arrivals in the Poisson
  model</span> <span m='233270'>is approximately the same as the
  probability</span> <span m='237540'>that k slots have an arrival.</span>
  </p><p><span m='248040'>Since we're neglecting the possibility</span> <span
  m='250820'>that some slot has two or more arrivals,</span> <span
  m='253860'>this means that the number of arrivals in the Poisson model</span>
  <span m='256959'>will be the same as the number of slots that get an
  arrival.</span> </p><p><span m='262330'>This approximate equality becomes more
  and more exact</span> <span m='267750'>as we let delta go to zero.</span>
  </p><p><span m='270930'>But now what is this quantity?</span> </p><p><span
  m='273510'>The probability that k slots have an arrival</span> <span
  m='277100'>is something that we can calculate</span> <span m='279140'>using
  the binomial probabilities.</span> </p><p><span m='281750'>Each one of the
  slots has a certain probability</span> <span m='286370'>of having an
  arrival.</span> </p><p><span m='288290'>And different slots are independent of
  each other</span> <span m='293030'>by the defining properties of the Poisson
  process.</span> </p><p><span m='296659'>Therefore, this approximation that we
  have developed</span> <span m='299700'>satisfies the properties of the
  Bernoulli process.</span> </p><p><span m='303360'>We have a certain
  probability that each slot gets an arrival.</span> </p><p><span m='306440'>And
  we have independence across slots.</span> </p><p><span m='309180'>This means
  that we can use now the PMF that's</span> <span m='311540'>associated with the
  Bernoulli model</span> <span m='314110'>to calculate this quantity and then
  take the limit,</span> <span m='318180'>as delta goes to 0, to obtain a
  formula for the PMF</span> <span m='324020'>for the Poisson process.</span>
  </p><p><span m='326800'>In more detail, what we have is the number</span>
  <span m='330800'>of arrivals, which is approximately</span> <span
  m='334040'>the same as the number of slots that have an arrival, obeys</span>
  <span m='337970'>a binomial distribution in the limit as delta</span> <span
  m='341430'>goes to 0-- a binomial distribution in which</span> <span
  m='344850'>the probability of arrival during each one of the slots</span>
  <span m='348210'>is approximately lambda delta and the number of slots</span>
  <span m='352900'>goes to infinity.</span> </p><p><span m='354480'>And this
  happens in a way so that the product of the two,</span> <span m='357705'>n
  times p, is equal to-- this term times</span> <span m='361660'>this term gives
  us a lambda times tau.</span> </p><p><span m='364770'>This term times this
  term gives us</span> <span m='367120'>something that's order of delta.</span>
  </p><p><span m='369250'>So it's negligible.</span> </p><p><span m='371130'>So
  we have this equality, and so this</span> <span m='374560'>is approximately
  lambda tau with the approximation</span> <span m='378210'>becoming more and
  more exact as we let delta go to zero.</span> </p><p><span m='383310'>So all
  we need to do is to take the formula for the Bernoulli</span> <span
  m='388130'>process.</span> </p><p><span m='389280'>Use these values of p and n
  and take the limit.</span> </p><p><span m='394510'>But this is a problem that
  we have already encountered</span> <span m='397659'>and have analyzed.</span>
  </p><p><span m='399230'>If we let n go to infinity, p goes to 0</span> <span
  m='401810'>so that their product stays constant,</span> <span m='404030'>we
  have shown that the binomial PMF converges</span> <span m='409040'>to the
  so-called Poisson PMF that takes this form.</span> </p><p><span
  m='412710'>Notice one small difference-- n times</span> <span m='414960'>p
  here is equal to lambda, whereas here, n times</span> <span m='418450'>p is
  equal to lambda t.</span> </p><p><span m='419780'>This means that we need to
  apply this formula,</span> <span m='422240'>but with lambda replaced by lambda
  t,</span> <span m='425210'>and this gives us the final answer.</span>
  </p><p><span m='428090'>This is the probability of k arrivals during a time
  interval</span> <span m='432320'>of lenght t in the Poisson process.</span>
  </p><p><span m='435060'>And this is a so-called Poisson PMF with parameter
  lambda tau.</span> </p><p><span m='442410'>To summarize, our strategy was to
  argue that the Poisson</span> <span m='447780'>process is increasingly
  accurately described</span> <span m='452870'>by a Bernoulli process if we
  discretize</span> <span m='455860'>time in a very fine discretization.</span>
  </p><p><span m='458740'>And the approximation becomes exact in the
  limit</span> <span m='461350'>when the discretization is very fine.</span>
  </p><p><span m='463840'>So we took the corresponding binomial formula</span>
  <span m='467040'>for the Bernoulli process and took the limit</span> <span
  m='469980'>to that's associated with the parameters</span> <span
  m='472290'>that we would obtain if we have a very fine discretization.</span>
  </p><p><span m='476580'>And this gave us the final formula.</span> </p><p></p>
uid: 430abd5461bd417157f033ce03f30651
type: course
layout: video
---
