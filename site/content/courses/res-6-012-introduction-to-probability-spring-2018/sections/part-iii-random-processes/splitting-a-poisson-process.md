---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: eV0kTm1h7mQ
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    title: Video-YouTube-Stream
    type: Video
    uid: 25cc9eb5d87313e470902356a4331af8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/eV0kTm1h7mQ/default.jpg'
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3a344fcca80b9baeedee800cd8fedfda
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: eV0kTm1h7mQ
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ea179ade5a2ea279d3bcce5cf614f2c6
  - id: eV0kTm1h7mQ.srt
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/splitting-a-poisson-process/eV0kTm1h7mQ.srt
    title: 3play caption file
    type: null
    uid: 47eea79d72d11226190a9476d0249bd2
  - id: eV0kTm1h7mQ.pdf
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/splitting-a-poisson-process/eV0kTm1h7mQ.pdf
    title: 3play pdf file
    type: null
    uid: 68643c8936af8935a066d7e22c819b1a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 1db89cc8868d0c82b98ca43e546fd9da
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5b7237252c0f12317473ec9b477ec2e5
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L23-06_300k.mp4
    parent_uid: 84a84972fa1a7f877891d1d1cf90eabe
    title: Video-Internet Archive-MP4
    type: Video
    uid: a924fbd47a6c43d5b921259ebb8783f0
inline_embed_id: 79289496splittingapoissonprocess26025141
order_index: 2150
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: splitting-a-poisson-process
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/splitting-a-poisson-process
title: Splitting a Poisson Process
transcript: >-
  <p><span m='610'>In this segment, we discuss splitting a Poisson
  process</span> <span m='3790'>into two different streams.</span> </p><p><span
  m='5920'>So we have a Poisson process with some arrival rate lambda,</span>
  <span m='9230'>and whenever there is an arrival,</span> <span m='11560'>we
  decide to send it either to one or another stream.</span> </p><p><span
  m='17660'>And for example, this arrival might be sent to that stream,</span>
  <span m='21030'>this arrival might be sent to this stream,</span> <span
  m='23030'>this arrival might be sent to this stream,</span> <span
  m='25230'>that arrival might be sent to that stream.</span> </p><p><span
  m='27910'>How do we decide where to send these arrivals?</span> </p><p><span
  m='30780'>We make those decisions using independent coin</span> <span
  m='34200'>flips with a coin that has a certain fixed bias equal to q.</span>
  </p><p><span m='38850'>So when this arrival comes, there's</span> <span
  m='40880'>probability q that it will be sent that direction</span> <span
  m='44390'>or probability 1 minus q that it will</span> <span m='47480'>be sent
  in the other direction.</span> </p><p><span m='49330'>All of these coin flips
  are independent,</span> <span m='52210'>so the decision on where to send the
  second arrival</span> <span m='56970'>is going to be independent from the
  decision of where</span> <span m='59600'>to send the first arrival.</span>
  </p><p><span m='61580'>And furthermore, we make one more assumption</span>
  <span m='63590'>that these coin flips are independent from everything</span>
  <span m='66580'>else.</span> </p><p><span m='67080'>They're independent from
  the time history</span> <span m='69750'>of the original Poisson
  process.</span> </p><p><span m='72400'>For example, the coin flip that decides
  the destination</span> <span m='75890'>of this first arrival can not
  depend</span> <span m='79870'>on how long it took for this arrival to
  occur.</span> </p><p><span m='85180'>We will argue now that this stream is a
  Poisson process</span> <span m='89170'>and by symmetry, therefore, this
  stream</span> <span m='91680'>is also a Poisson process.</span> </p><p><span
  m='93759'>We need to verify two assumptions.</span> </p><p><span m='97000'>One
  has to do with independence.</span> </p><p><span m='99850'>The argument here
  is entirely analogous to arguments</span> <span m='102539'>that we have
  already carried out in the past,</span> <span m='105690'>namely disjoint time
  intervals in the original process</span> <span m='109650'>are
  independent.</span> </p><p><span m='111200'>Coin flips that happened during
  those disjoint time intervals</span> <span m='114330'>are also independent of
  each other,</span> <span m='116479'>and for this reason, whatever happens
  during disjoint time</span> <span m='119490'>intervals in that stream will
  also be independent.</span> </p><p><span m='124780'>The other property that we
  need to verify</span> <span m='126860'>has to do with probabilities of small
  intervals.</span> </p><p><span m='130840'>If we take a little interval here of
  length delta,</span> <span m='136010'>what is going to happen during that
  interval?</span> </p><p><span m='138600'>Well, we look at what happens during
  the corresponding</span> <span m='141250'>interval in the original
  stream.</span> </p><p><span m='144120'>In the original stream, the
  probability</span> <span m='146360'>of having two or more arrivals-- this
  probability is order</span> <span m='151900'>of delta squared, so there's no
  way</span> <span m='154840'>of having two or more arrivals during that little
  interval,</span> <span m='158267'>or to be more precise, the
  probability</span> <span m='159850'>of two or more arrivals here is going to
  be negligible,</span> <span m='163950'>order of delta squared.</span>
  </p><p><span m='166340'>What is the probability of having one arrival</span>
  <span m='168700'>during that little interval?</span> </p><p><span
  m='170829'>We will have one arrival here if we've</span> <span m='174180'>had
  one arrival in this time interval, which</span> <span m='179410'>happens with
  probability lambda times delta,</span> <span m='186200'>and also the coin flip
  sent the arrival</span> <span m='190000'>in this direction, which is
  something</span> <span m='192120'>that happens with probability q, and the
  remaining probability</span> <span m='196860'>is assigned to the event of
  having</span> <span m='199730'>zero arrivals during that interval.</span>
  </p><p><span m='202430'>So the probability of two or more arrivals is
  negligible,</span> <span m='205780'>and the probability of one arrival</span>
  <span m='207470'>is proportional to delta.</span> </p><p><span m='209420'>And
  that's what we need in order to have a Poisson process.</span> </p><p><span
  m='212760'>The factor of proportionality that multiplies delta</span> <span
  m='215510'>is equal to lambda times q.</span> </p><p><span
  m='217850'>Therefore, this is a Poisson process with parameter,</span> <span
  m='221100'>or arrival rate, equal to lambda times q.</span> </p><p><span
  m='224310'>And by a similar argument, this process here</span> <span
  m='227060'>is going to be a Poisson process with parameter</span> <span
  m='229590'>equal to lambda times 1 minus q.</span> </p><p><span m='233610'>So
  by splitting a Poisson process using independent coin</span> <span
  m='237300'>flips, we obtain two different Poisson streams.</span> </p><p><span
  m='240880'>Are these Poisson streams independent?</span> </p><p><span
  m='243610'>For the case of the Bernoulli process,</span> <span m='245440'>we
  had seen that the resulting streams were not independent.</span> </p><p><span
  m='249620'>The reason for the Bernoulli process</span> <span m='251360'>was
  that if I tell you that at a certain slot</span> <span m='254770'>we had an
  arrival in this stream,</span> <span m='257490'>that would tell you that in
  the corresponding time</span> <span m='260050'>slot of the other process you
  could not have an arrival</span> <span m='264150'>and that was a source of
  dependence.</span> </p><p><span m='266730'>It turns out that for the Poisson
  process,</span> <span m='269050'>because it runs in continuous time,</span>
  <span m='271400'>telling you that we had an arrival at this particular
  time</span> <span m='274560'>instant does not give you any substantial or
  any</span> <span m='279090'>nontrivial information about the other
  process,</span> <span m='282960'>and the two processes remain
  independent.</span> </p><p><span m='286159'>This result is surprising in some
  ways, but it is true.</span> </p><p><span m='291550'>A mathematical derivation
  proceeds</span> <span m='293710'>along a line that's a little different from
  the intuitive</span> <span m='297240'>argument that I just outlined.</span>
  </p><p><span m='300910'>And we will not go through that derivation,</span>
  <span m='303450'>but it's a useful fact to know.</span> </p>
uid: 84a84972fa1a7f877891d1d1cf90eabe
type: course
layout: video
---
