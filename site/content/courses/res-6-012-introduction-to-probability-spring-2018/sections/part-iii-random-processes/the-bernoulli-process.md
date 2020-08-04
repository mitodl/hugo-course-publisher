---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: lmHjUxi2EH4
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    title: Video-YouTube-Stream
    type: Video
    uid: 7d32bdd89ef5376cde4714fc7213eeee
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/lmHjUxi2EH4/default.jpg'
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d00a6c816a5024f0ed6b0288d36eca76
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: lmHjUxi2EH4
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 201c6d1b25161bc5b5f58504482c5484
  - id: lmHjUxi2EH4.srt
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-bernoulli-process/lmHjUxi2EH4.srt
    title: 3play caption file
    type: null
    uid: 97dfe9ac0f9b7f10c23c28f399210d24
  - id: lmHjUxi2EH4.pdf
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-bernoulli-process/lmHjUxi2EH4.pdf
    title: 3play pdf file
    type: null
    uid: 2474fb6fe88b00facbc0873e1c1536d6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 089025d98b42e955ed19fe990c40ad26
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 25ac930f5bb1bc302834164d51a849a0
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L21-02_300k.mp4
    parent_uid: 994861c0bb7c8ec26b50c228bd8a6c09
    title: Video-Internet Archive-MP4
    type: Video
    uid: 19b163dc88f06e470896fe4e83524c49
inline_embed_id: 36665702thebernoulliprocess75633967
order_index: 1934
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-bernoulli-process
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-bernoulli-process
title: The Bernoulli Process
transcript: >-
  <p><span m='820'>We now start our discussion of stochastic processes</span>
  <span m='4030'>by starting with the simplest stochastic process there
  is.</span> </p><p><span m='7580'>This is the so-called Bernoulli
  process,</span> <span m='10160'>which is nothing but a sequence of independent
  Bernoulli</span> <span m='14020'>trials.</span> </p><p><span m='15310'>We let
  Xi stand for the random variable that</span> <span m='19570'>describes the
  result in the i trial.</span> </p><p><span m='22700'>The assumptions that we
  make are that at each trial</span> <span m='26460'>there is a certain
  probability, p, that the trial results in 1.</span> </p><p><span m='31360'>And
  in that case, we usually say that there</span> <span m='33840'>is a success at
  the ith trial.</span> </p><p><span m='36090'>And the remaining probability, 1
  minus p,</span> <span m='38310'>is assigned to the possibility that the random
  variable Xi</span> <span m='42070'>takes a value of 0, in which case</span>
  <span m='44310'>sometimes we say that there was a failure.</span> </p><p><span
  m='46950'>Now, to keep things nontrivial, we</span> <span m='49330'>will
  always assume that p is a number strictly between 0</span> <span m='53390'>and
  1, because otherwise, in the extreme cases of p equal to 0</span> <span
  m='57620'>or p equal to 1, there isn't really any randomness.</span>
  </p><p><span m='62700'>This process is something that we have already
  seen.</span> </p><p><span m='65930'>We have worked plenty of examples
  involving</span> <span m='69130'>repeated Bernoulli trials or repeated coin
  flips.</span> </p><p><span m='73210'>We have solved several problems, we have
  seen several formulas.</span> </p><p><span m='77730'>Here we will recapitulate
  some of them.</span> </p><p><span m='81030'>But we will also start looking at
  the process</span> <span m='83700'>from a new point of view.</span>
  </p><p><span m='86910'>Before continuing, let me emphasize the assumptions
  that</span> <span m='90680'>come into the Bernoulli process.</span>
  </p><p><span m='92950'>One key assumption is that we have independence.</span>
  </p><p><span m='96810'>The different trials are independent.</span>
  </p><p><span m='100920'>The second assumption that we make</span> <span
  m='103150'>is that the model is time homogeneous.</span> </p><p><span
  m='106420'>What I mean by this is that this probability</span> <span
  m='109009'>p of success at a given trial is the same for all trials.</span>
  </p><p><span m='114170'>It does not depend on i.</span> </p><p><span
  m='117229'>So this process is as simple as a stochastic process could
  be.</span> </p><p><span m='121920'>But nevertheless, it can be used as a
  model</span> <span m='125360'>in various situations.</span> </p><p><span
  m='127080'>Sometimes it's clear that we're dealing with a Bernoulli</span>
  <span m='129460'>process, but sometimes it also shows up in unexpected
  ways.</span> </p><p><span m='133160'>In any case, the first simple example
  could be the following.</span> </p><p><span m='136400'>Every week you play the
  lottery, and either you win</span> <span m='139920'>or you do not to
  win.</span> </p><p><span m='141250'>And assuming that it is the same kind of
  lottery</span> <span m='143920'>that you play each week, the constant p</span>
  <span m='147040'>would be the same, the probability of success.</span>
  </p><p><span m='150100'>And assuming a lottery that is not rigged in any
  way,</span> <span m='153690'>whether you win on one week, should</span> <span
  m='155730'>be independent from what happens in other weeks.</span>
  </p><p><span m='159570'>Quite often, the Bernoulli process</span> <span
  m='161350'>is used as a model of arrivals, in which case,</span> <span
  m='165720'>instead of saying probability of success,</span> <span
  m='167740'>we would say probably of an arrival.</span> </p><p><span
  m='170280'>The idea is that time is slotted,</span> <span m='173170'>let's
  say, in seconds, for example.</span> </p><p><span m='175970'>And each second
  you're sitting at the entrance of a bank</span> <span m='179420'>and you make
  a note whether somebody</span> <span m='182430'>came into the bank, in which
  case</span> <span m='184620'>we have an arrival or success, or whether no one
  came</span> <span m='188420'>during that time interval.</span> </p><p><span
  m='191760'>If one here believes that different slots,</span> <span
  m='195560'>different seconds, are independent of each other,</span> <span
  m='198320'>then you do have a Bernoulli process.</span> </p><p><span
  m='201140'>It might not be an exactly accurate model,</span> <span
  m='203890'>but it is a good first approximation</span> <span m='205780'>to
  start working with a model of this situation.</span> </p><p><span
  m='209260'>Similarly, if you have a server, a computer, that</span> <span
  m='212540'>takes jobs to process and jobs are coming randomly,</span> <span
  m='216579'>you divide time into slots, and during each slot</span> <span
  m='218940'>a job might arrive or might not arrive.</span> </p><p><span
  m='222090'>And as a first approach to a model of this kind,</span> <span
  m='225480'>you might as well employ the Bernoulli process.</span> </p><p><span
  m='229950'>A final note, why is this process called the Bernoulli</span> <span
  m='233100'>process?</span> </p><p><span m='234380'>Well, the name comes from a
  famous family</span> <span m='238340'>of Swiss mathematicians, the Bernoulli
  family.</span> </p><p><span m='241310'>And one of them, Jacob
  Bernoulli,</span> <span m='244420'>did many contributions to many branches of
  mathematics.</span> </p><p><span m='247260'>But an important one was in the
  field</span> <span m='249180'>of probability, where he actually</span> <span
  m='251190'>derived quite deep results on a sequence of what we now</span>
  <span m='257920'>call Bernoulli trials.</span> </p>
uid: 994861c0bb7c8ec26b50c228bd8a6c09
type: course
layout: video
---
