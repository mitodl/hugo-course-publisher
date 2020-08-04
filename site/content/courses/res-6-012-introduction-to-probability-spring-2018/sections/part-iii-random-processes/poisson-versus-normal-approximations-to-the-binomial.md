---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: t_EcSVTWmwk
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    title: Video-YouTube-Stream
    type: Video
    uid: e2ecfbe49acb983136411089f846792d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/t_EcSVTWmwk/default.jpg'
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 439b0679b85a6f4d04951af2e0f9d188
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: t_EcSVTWmwk
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1b8caef380c47270224677b113f8c930
  - id: t_EcSVTWmwk.srt
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/poisson-versus-normal-approximations-to-the-binomial/t_EcSVTWmwk.srt
    title: 3play caption file
    type: null
    uid: bdc65568f407d17c58a1648896b20946
  - id: t_EcSVTWmwk.pdf
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/poisson-versus-normal-approximations-to-the-binomial/t_EcSVTWmwk.pdf
    title: 3play pdf file
    type: null
    uid: bbb21e2dbf4e791209bdf1b9d0e85c6a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f9c8a411ce00df39cb14fb615435623d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e53bf510c01f7d1e0ae1e1c2f12d3f2a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S23-01_300k.mp4
    parent_uid: de1573d6f63203b6b6cc3eaa656df554
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1ce6d8d0d7ca2ba478c48a57b5b16fc8
inline_embed_id: 29048691poissonversusnormalapproximationstothebinomial91762884
order_index: 2186
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: poisson-versus-normal-approximations-to-the-binomial
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/poisson-versus-normal-approximations-to-the-binomial
title: Poisson Versus Normal Approximations to the Binomial
transcript: >-
  <p><span m='520'>We have seen that under some conditions,</span> <span
  m='2960'>the binomial PMF is well approximated by a Poisson PMF.</span>
  </p><p><span m='8270'>But we have also seen the central limit theorem</span>
  <span m='10890'>that tells us that the binomial PMF can be approximated</span>
  <span m='15240'>using a normal random variable.</span> </p><p><span
  m='18120'>Can we reconcile these two facts?</span> </p><p><span
  m='20990'>Let's look into the situation in some more detail.</span>
  </p><p><span m='24110'>Consider a Poisson process that has rate equal to
  1.</span> </p><p><span m='28950'>And consider that Poisson process</span>
  <span m='31020'>running over the unit time interval.</span> </p><p><span
  m='34280'>We take the unit interval, and we split it</span> <span
  m='37340'>into many small sub-intervals, where</span> <span m='40720'>each
  sub-interval has a length of 1/n.</span> </p><p><span m='46120'>And let Xi be
  the number of arrivals that we get during</span> <span m='50320'>the i'th
  interval.</span> </p><p><span m='52600'>Xi is a Poisson random
  variable.</span> </p><p><span m='56170'>And the mean of that random
  variable,</span> <span m='59010'>or the parameter of that random
  variable,</span> <span m='61110'>is just the duration of the time interval,
  since the rate is 1.</span> </p><p><span m='65209'>So it's a Poisson random
  variable, with parameter 1/n.</span> </p><p><span m='69850'>Now, let us look
  at the total number of arrivals.</span> </p><p><span m='72980'>The total
  number of arrivals is the sum of how many arrivals</span> <span m='77350'>we
  had during each one of these intervals.</span> </p><p><span m='81130'>And we
  know the distribution of S. S</span> <span m='84070'>is a Poisson random
  variable, with parameter equal to 1.</span> </p><p><span m='90430'>Now, here
  what we have is a sum of random variables</span> <span m='95000'>that are
  independent and identically distributed.</span> </p><p><span m='99390'>They
  are identically distributed,</span> <span m='101080'>because all of these
  intervals have the same length.</span> </p><p><span m='103800'>And they're
  independent, because in the Poisson process,</span> <span m='106750'>what
  happens in different intervals are</span> <span m='109250'>independent
  events.</span> </p><p><span m='112320'>So we are in a situation where
  we</span> <span m='115080'>could apply the central limit theorem.</span>
  </p><p><span m='117590'>We have a sum of many independent,</span> <span
  m='120520'>identically distributed random variables.</span> </p><p><span
  m='122980'>And by letting n go to infinity, the central limit theorem</span>
  <span m='126850'>appears to tell us that S is going to be normal.</span>
  </p><p><span m='133800'>Now, how can we reconcile these two facts?</span>
  </p><p><span m='137440'>We know that the Poisson distribution is not the
  same</span> <span m='140930'>as a normal distribution.</span> </p><p><span
  m='143960'>What is the catch?</span> </p><p><span m='145565'>Well, the catch
  is the following--</span> <span m='149760'>the central limit theorem applies
  to a situation where we</span> <span m='153640'>fix a certain probability
  distribution,</span> <span m='157010'>the distribution of the Xi's.</span>
  </p><p><span m='159530'>And it tells us that as we add more and more of these
  Xi's,</span> <span m='164270'>asymptotically, we obtain a distribution
  that's</span> <span m='167480'>well approximated by a normal.</span>
  </p><p><span m='170630'>On the other hand, what we have here is actually
  different.</span> </p><p><span m='176030'>The Xi's do not have a fixed
  distribution.</span> </p><p><span m='179660'>But rather, the distribution of
  Xi depends on n.</span> </p><p><span m='188840'>That is, if we change n so
  that we're</span> <span m='193030'>adding more random variables, we're</span>
  <span m='195500'>adding more random variables that are now</span> <span
  m='197490'>coming from a different distribution.</span> </p><p><span
  m='200200'>And this is not a situation to which the central limit</span> <span
  m='203260'>theorem applies.</span> </p><p><span m='204880'>And therefore, this
  conclusion here is not justified.</span> </p><p><span m='208980'>And so
  there's no contradiction between the two</span> <span m='212040'>types of
  approximations.</span> </p><p><span m='214790'>To summarize, the situation is
  as follows.</span> </p><p><span m='217460'>Consider a binomial random variable
  with some parameters</span> <span m='220500'>n and p.</span> </p><p><span
  m='221800'>Now, let p be fixed.</span> </p><p><span m='224200'>And let n go to
  infinity.</span> </p><p><span m='226410'>In that case, the binomial random
  variable</span> <span m='229030'>can be thought of as the sum of n Bernoulli
  random variables.</span> </p><p><span m='234740'>And those Bernoulli random
  variables</span> <span m='237050'>have a parameter p, which is fixed.</span>
  </p><p><span m='241160'>So we're dealing with the sum of iid random
  variables</span> <span m='244750'>from a fixed distribution.</span>
  </p><p><span m='246050'>And this is the situation where the central
  limit</span> <span m='248320'>theorem applies.</span> </p><p><span
  m='249610'>And we have a normal approximation.</span> </p><p><span
  m='252120'>On the other hand, if we take the product</span> <span m='258750'>n
  times p, which is the expected value of this binomial,</span> <span
  m='262250'>to stay constant, but we let n go</span> <span m='265540'>to
  infinity and at the same time let p go to 0, then</span> <span m='269990'>in
  this regime, in the limit, this random variable</span> <span m='273330'>will
  be well approximated by a Poisson random variable.</span> </p><p><span
  m='277370'>So we have two different approximations.</span> </p><p><span
  m='280130'>Both of them are valid, but they're</span> <span m='282430'>valid
  in different regimes.</span> </p><p><span m='285674'>Now, although they're
  different, there's</span> <span m='287340'>actually an interesting case in
  which the two will not really</span> <span m='292770'>differ.</span>
  </p><p><span m='293640'>And this is the following.</span> </p><p><span
  m='295400'>Consider a Poisson random variable with parameter n.</span>
  </p><p><span m='299090'>And we're interested in the limit as n goes to
  infinity.</span> </p><p><span m='303550'>We can think of this random
  variable</span> <span m='305380'>as the number of arrivals during an
  interval</span> <span m='308000'>of length n in a Poisson process with arrival
  rate equal to 1.</span> </p><p><span m='313670'>Now, let's take this interval
  and split it</span> <span m='317540'>into n intervals, each of which has a
  length of 1.</span> </p><p><span m='323600'>And let us call Xi the number of
  arrivals in the i'th interval.</span> </p><p><span m='328470'>Our Poisson
  random variable is going to be, of course,</span> <span m='331920'>equal to
  the sum of the number of arrivals</span> <span m='335040'>during each one of
  the intervals.</span> </p><p><span m='337900'>Each one of these random
  variables</span> <span m='340430'>is Poisson with parameter equal to 1.</span>
  </p><p><span m='345310'>And these random variables are actually iid.</span>
  </p><p><span m='350420'>Now, what's happening in this case</span> <span
  m='352730'>is that even when we increase n, because we're</span> <span
  m='356250'>using constant length intervals, the distribution of the
  Xi's</span> <span m='360130'>doesn't change.</span> </p><p><span m='361400'>So
  this is a situation in which we're</span> <span m='364470'>going to get
  approximately a normal random variable as n</span> <span m='369590'>goes to
  infinity.</span> </p><p><span m='372650'>So what we see is that a Poisson
  random variable, but</span> <span m='376520'>with a very large parameter,
  starts</span> <span m='379010'>to approach the normal distribution.</span>
  </p><p><span m='382180'>And this in particular will tell us</span> <span
  m='384010'>that these two approximations that we have, in some regime,</span>
  <span m='387630'>they would start to agree.</span> </p><p><span
  m='390810'>Now, all of this discussion here has been asymptotic.</span>
  </p><p><span m='393770'>We talk about p going to 0 or n going to
  infinity.</span> </p><p><span m='397940'>But in any real situation, you will
  be given actual numbers.</span> </p><p><span m='401920'>And you cannot really
  tell, is this number close to 0,</span> <span m='404909'>or is it not?</span>
  </p><p><span m='406900'>Here, we need some rules of thumb or maybe some
  experience.</span> </p><p><span m='412380'>Let's look at some examples.</span>
  </p><p><span m='415300'>In this case, n times p is equal to 1.</span>
  </p><p><span m='420510'>So the number of arrivals or the values</span> <span
  m='423200'>of the binomial random variable will take values 0, 1, 2,</span>
  <span m='427380'>3, but with high probability, not a lot more than
  that.</span> </p><p><span m='432860'>So the binomial random variable is
  really</span> <span m='435930'>a discrete random variable.</span> </p><p><span
  m='437630'>There's no way to approximate it with a normal.</span> </p><p><span
  m='439940'>On the other hand, p is very small.</span> </p><p><span
  m='442770'>So a Poisson approximation would be</span> <span m='445630'>very
  reasonable in this situation.</span> </p><p><span m='449300'>On the other
  hand, if p is equal to 1/3, then</span> <span m='453510'>definitely 1/3 is not
  a small number.</span> </p><p><span m='456690'>A Poisson approximation would
  not apply.</span> </p><p><span m='458920'>But n is pretty big.</span>
  </p><p><span m='460770'>So that a normal approximation would be
  appropriate.</span> </p><p><span m='465880'>And finally, in this case, we
  would obtain a Poisson</span> <span m='471610'>approximation with parameter
  100, because n times p is 100.</span> </p><p><span m='478159'>But a Poisson
  random variable with parameter 100</span> <span m='481810'>is also well
  approximated by a normal.</span> </p><p><span m='484570'>Or to think about it
  differently,</span> <span m='487190'>we start with a Bernoulli distribution
  that's</span> <span m='490130'>very skewed, [the] probability of success is
  just 100.</span> </p><p><span m='497190'>And this makes it difficult for the
  central limit theorem</span> <span m='500720'>to apply when you start with a
  very asymmetric distribution.</span> </p><p><span m='504320'>On the other
  hand, because we're adding so many of them,</span> <span m='508840'>the
  central limit theorem actually does take hold.</span> </p><p><span
  m='512049'>And so this is an example where both approximations</span> <span
  m='516299'>will be valid.</span> </p><p><span m='518490'>So finally, to
  conclude, we have two different approximations.</span> </p><p><span
  m='524460'>They're valid in different regimes.</span> </p><p><span
  m='526960'>And in practice, you need to do some thinking</span> <span
  m='529660'>before deciding to choose one versus the other
  approximation.</span> </p><p></p>
uid: de1573d6f63203b6b6cc3eaa656df554
type: course
layout: video
---
