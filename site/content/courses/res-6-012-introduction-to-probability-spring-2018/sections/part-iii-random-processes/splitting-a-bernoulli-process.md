---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ozbtgvLKAqE
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    title: Video-YouTube-Stream
    type: Video
    uid: ed6a0a6871053227f12797734cbcc539
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ozbtgvLKAqE/default.jpg'
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c550b2c1ee28af26eb77d1400d9c217c
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ozbtgvLKAqE
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 94cde050fb5b3df2b8a146986463d4a1
  - id: ozbtgvLKAqE.srt
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/splitting-a-bernoulli-process/ozbtgvLKAqE.srt
    title: 3play caption file
    type: null
    uid: cb0f65b505866645f4791b30d5c6f88e
  - id: ozbtgvLKAqE.pdf
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/splitting-a-bernoulli-process/ozbtgvLKAqE.pdf
    title: 3play pdf file
    type: null
    uid: 4d37c0b0653665beb69c70c48fcae47e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 39326dfb5e0d1ea4c742c0fdf50bb8e0
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: cfea644aba785cf76573a2f56017e807
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L21-09_300k.mp4
    parent_uid: 473ab0b622334f7abe49d96afd811d9a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 49218b7e4cb2ac4644de6121110d919e
inline_embed_id: 59171083splittingabernoulliprocess52262765
order_index: 1997
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: splitting-a-bernoulli-process
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/splitting-a-bernoulli-process
title: Splitting a Bernoulli Process
transcript: >-
  <p><span m='890'>We will now consider an operation</span> <span m='2890'>that
  is, in some sense, the opposite of merging.</span> </p><p><span m='6380'>We
  have a node, and traffic arrives to that node.</span> </p><p><span
  m='10960'>And each time that we have an arrival, we flip a coin.</span>
  </p><p><span m='14820'>And with probability q, we send that arrival</span>
  <span m='18000'>to one particular stream.</span> </p><p><span m='20410'>And
  with probability 1 minus q, we</span> <span m='22830'>send the arrival to
  another stream.</span> </p><p><span m='25380'>So we get two streams that are
  formed</span> <span m='27660'>by taking the original stream and splitting
  it</span> <span m='30970'>into two pieces.</span> </p><p><span m='32750'>And
  as an example, these might be</span> <span m='35290'>arrivals at a department
  store.</span> </p><p><span m='38040'>And one stream corresponds to the
  people</span> <span m='40950'>who go to the clothes section of the department
  store,</span> <span m='44220'>whereas the other stream corresponds to the
  people that</span> <span m='46680'>go to all of the other sections of the
  store.</span> </p><p><span m='50840'>So let us now make our model a little
  more precise.</span> </p><p><span m='55030'>We have a Bernoulli process,
  which</span> <span m='56950'>is independent across time.</span> </p><p><span
  m='59390'>We also use an independent coin flip</span> <span m='63590'>to deal
  with each one of the arrivals.</span> </p><p><span m='66540'>But we will also
  make one additional assumption, namely</span> <span m='70135'>that the
  Bernoulli process is also</span> <span m='72789'>independent from the process
  of coin flips.</span> </p><p><span m='77320'>With this assumption in place,
  let us now</span> <span m='79720'>continue, and let us draw a picture.</span>
  </p><p><span m='82880'>We have a Bernoulli process with parameter p,</span>
  <span m='85850'>and arrivals get recorded at certain times.</span>
  </p><p><span m='90360'>Each time that there is an arrival, we will flip a
  coin.</span> </p><p><span m='94450'>And with probability q, the arrival</span>
  <span m='96810'>will be sent to that stream.</span> </p><p><span
  m='99009'>With probability 1 minus q, the arrival</span> <span m='101610'>will
  be sent to the other stream.</span> </p><p><span m='103700'>So one possible
  outcome of the experiment</span> <span m='107110'>might be this one, where
  these two arrivals were</span> <span m='111140'>sent to this stream and these
  two arrivals were</span> <span m='115530'>sent to the top stream.</span>
  </p><p><span m='117450'>And we have these probabilities q and 1 minus q</span>
  <span m='121910'>of sending the arrivals to one or the other stream.</span>
  </p><p><span m='126310'>What kind of process is this one?</span> </p><p><span
  m='131070'>We argue it is a Bernoulli process.</span> </p><p><span
  m='133900'>First, we need to check independence.</span> </p><p><span
  m='136710'>Here, the argument is more or less the same as in the case</span>
  <span m='140700'>when we studied the merging of processes.</span> </p><p><span
  m='143590'>For example, if we look at two different slots and we ask,</span>
  <span m='149250'>how is the event at that slot and at that slot
  determined?</span> </p><p><span m='153880'>Well, what happens in this slot is
  determined</span> <span m='157160'>by whether we had an arrival here</span>
  <span m='160120'>and what happened to the outcome of the coin flip at that
  time.</span> </p><p><span m='164760'>What happens in this slot is
  determined</span> <span m='167030'>by whether we had an arrival here</span>
  <span m='169550'>and what happened to the coin flip at that time.</span>
  </p><p><span m='173480'>Now, the coin flips are independent</span> <span
  m='175540'>from the original Bernoulli process.</span> </p><p><span
  m='178640'>And for either the coin flips or the Bernoulli process,</span>
  <span m='181940'>we have independence across time.</span> </p><p><span
  m='183800'>So all of the four random variables involved here</span> <span
  m='187380'>that determine what happens in these two slots</span> <span
  m='189630'>are independent of each other.</span> </p><p><span m='192170'>So
  what happens in this slot is a function</span> <span m='194560'>of two random
  variables here, which</span> <span m='196950'>are independent from the two
  random variables that</span> <span m='199650'>determined what happens in that
  slot.</span> </p><p><span m='201930'>So what happens in these two slots are
  independent events.</span> </p><p><span m='206070'>And this argument goes
  through more generally</span> <span m='208990'>when we consider multiple
  distinct slots.</span> </p><p><span m='212290'>So this is the argument for the
  independence</span> <span m='215470'>of the different slots in this particular
  process.</span> </p><p><span m='219740'>And then during each slot, what
  happens</span> <span m='222500'>is that we will have an arrival if and
  only</span> <span m='225140'>if this process records an arrival, which
  happens</span> <span m='228680'>with probability p, and the corresponding
  coin</span> <span m='232490'>flip happens to send the arrival in this
  direction, which</span> <span m='237300'>happens with probability q.</span>
  </p><p><span m='239170'>And so the conclusion is that this process</span>
  <span m='241300'>is a Bernoulli process with parameter p times q.</span>
  </p><p><span m='244310'>By a similar argument, the other process that we
  obtain</span> <span m='249600'>will also be Bernoulli but with probability p
  times 1 minus q.</span> </p><p><span m='255250'>And a final question-- are
  these two processes</span> <span m='259040'>that we get after the splitting
  independent of each other?</span> </p><p><span m='263530'>This is a question
  that we can answer</span> <span m='265600'>by reasoning intuitively.</span>
  </p><p><span m='268110'>If I tell you that there was an arrival in this
  slot,</span> <span m='272920'>what can you infer from this?</span>
  </p><p><span m='275780'>Well, it tells me that there was an arrival</span>
  <span m='278700'>in the original stream, which was sent here.</span>
  </p><p><span m='282290'>But since it was sent in this direction,</span> <span
  m='284600'>it means that it was not sent in the other direction.</span>
  </p><p><span m='287730'>And so we do not have an arrival in this slot.</span>
  </p><p><span m='291960'>Knowing that we have an arrival here</span> <span
  m='294060'>means that we do not have an arrival there.</span> </p><p><span
  m='296720'>So information about one of the streams</span> <span
  m='299500'>gives us information about what happened in the other
  stream.</span> </p><p><span m='303280'>And therefore, we do not have
  independence.</span> </p><p><span m='308600'>So this is what happens when we
  split two Bernoulli processes.</span> </p><p><span m='311890'>And earlier we
  saw what happens when</span> <span m='314010'>we merge two independent
  Bernoulli processes.</span> </p><p><span m='317090'>These two operations of
  merging and splitting</span> <span m='319480'>are quite common in constructing
  more complex models</span> <span m='323690'>using Bernoulli processes as the
  elements of those models.</span> </p><p><span m='329020'>They are often useful
  models either in transportation</span> <span m='332350'>systems, where you
  have streams of traffic</span> <span m='334800'>that merge or split, also in
  models of computer networks</span> <span m='339690'>or any other kind of
  queueing system.</span> </p><p><span m='342510'>And these same operations of
  merging and splitting</span> <span m='345310'>will also show up when we study
  the continuous time</span> <span m='348740'>analog of the Bernoulli process,
  namely the Poisson process.</span> </p><p></p>
uid: 473ab0b622334f7abe49d96afd811d9a
type: courses
layout: video
---
