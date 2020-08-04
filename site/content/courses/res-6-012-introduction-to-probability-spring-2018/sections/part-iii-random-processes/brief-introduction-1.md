---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: N61FzRr2so0
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    title: Video-YouTube-Stream
    type: Video
    uid: 12731fce7e69328ccec12b15541ea117
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/N61FzRr2so0/default.jpg'
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a8eee2b24177bf17b23be4992b675ade
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: N61FzRr2so0
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 93e6fd2b334c39f623f0e34ddb93c2d3
  - id: N61FzRr2so0.srt
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/brief-introduction-1/N61FzRr2so0.srt
    title: 3play caption file
    type: null
    uid: f8886089c0b4b668fa7dbddab1240cde
  - id: N61FzRr2so0.pdf
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/brief-introduction-1/N61FzRr2so0.pdf
    title: 3play pdf file
    type: null
    uid: e9c53726b7f46f58d8ada3e9bf502bac
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6b7b0f29bf13311121269765ab686427
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e6247e32fec1ab7cd90cb34ce7bfddf9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L25-01_300k.mp4
    parent_uid: 477627fbed5d6817c71f13f6c141c07a
    title: Video-Internet Archive-MP4
    type: Video
    uid: bb09e0c149aca7e89b7549d5d3092241
inline_embed_id: 81848713briefintroduction68647794
order_index: 2348
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: brief-introduction-1
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/brief-introduction-1
title: Brief Introduction
transcript: >-
  <p><span m="101">All right.</span></p><p><span m="600">So let us revisit the
  example from last lecture.</span></p><p><span m="3550">So we have a Markov
  chain with two states, one and two,</span> <span m="6880">and this Markov
  chain has a single recurrent class.</span></p><p><span m="11502">All
  right.</span></p><p><span m="12950">And then also it's not periodic
  right,</span> <span m="15970">because we have self transition of this
  type.</span></p><p><span m="19060">So as a result, this is well defined and
  these steady state</span> <span m="23810">probabilities from 1 to m, in that
  case for us, m = 2, right?</span></p><p><span m="32208">So let us write the
  system and solve</span> <span m="34970">the system of linear equation for this
  example here.</span></p><p><span m="38940">So what we have is pi 1 equals pi 1
  times 0.5</span> <span m="41176">plus pi 2 times 0.2.</span></p><p><span
  m="51880">So that's the first equation that corresponds to j equals
  1.</span></p><p><span m="55500">Now, for j equals 2, pi 2 equals pi 1 times
  0.5</span> <span m="58024">plus pi 2 times 0.8.</span></p><p><span
  m="67410">So we have a system of two equations</span> <span m="69580">with two
  unknowns, pi 1 and pi 2.</span></p><p><span m="73390">Let us rewrite them, I
  pass this one on this side</span> <span m="78060">and this one on this
  side.</span></p><p><span m="79432">So we get pi 1 times 1 minus 0.5 minus
  0.5</span> <span m="81182">equals pi 2 times 0.2.</span></p><p><span
  m="90084">And this one pi 2 times 1 minus 0.8 is 0.2</span> <span
  m="91834">equals pi 1 times 0.5.</span></p><p><span m="101340">We realize that
  these two happen to be the same,</span> <span m="105700">so they are not
  enough to define a unique solution,</span> <span m="110350">so we have to add
  another equation,</span> <span m="112240">and we know that these are
  probabilities.</span></p><p><span m="114580">So pi 1 plus pi 2 has to be one,
  and so now we're</span> <span m="119100">going to keep one of these two, let's
  say this one,</span> <span m="121930">I'm going to write it
  here.</span></p><p><span m="123141">And we can rewrite it by saying that pi 1
  times 1/2</span> <span m="125266">equals pi 2 times 1/5.</span></p><p><span
  m="134730">So now, we're going to take that, replace</span> <span
  m="138770">pi 1 equals 2/5 of pi 2 is the result of that.</span></p><p><span
  m="146010">And we're going to use that pi 1 and replace it
  here.</span></p><p><span m="150690">So we end it by 2 times 2/5 plus 1 equals
  1,</span> <span m="158400">which means that from here, we get that pi 2 equals
  5 plus 2/7</span> <span m="166730">so 5/7, and then we use that and place it
  here</span> <span m="172540">and we end up having pi 1 equals 2/5 times 5/7
  equals 2/7,</span> <span m="180280">and we check 5 plus 2 equals 7, so</span>
  <span m="183510">these are real probabilities.</span></p><p><span
  m="185350">So the probabilitiy that you find yourself</span> <span
  m="187370">at state one at time 1 trillion would be approximately
  2/7.</span></p><p><span m="192627">The probability that you find
  yourself</span> <span m="194210">at state one at time 2 trillions is again
  approximately 2/7.</span></p><p><span m="199760">So essentially what we have
  here is the probability</span> <span m="202860">of being in that state one
  settles in a steady value.</span></p><p><span m="207370">That's what the
  steady state convergence means.</span></p><p><span m="210140">It's convergence
  of probabilities, not convergence</span> <span m="212960">of the process
  itself.</span></p><p><span m="214130">Again, the process will keep jumping
  back and forth,</span> <span m="217350">but the steady state probability will
  settle for a given value</span> <span m="220240">here in one, that will be
  2/7, and the steady state</span> <span m="224300">probability in being in two
  will settle to 5/7.</span></p><p><span m="229720">And finally in this example,
  and more</span> <span m="232355">generally when we have a single class and no
  periodicity,</span> <span m="235420">the initial state does not
  matter.</span></p>
uid: 477627fbed5d6817c71f13f6c141c07a
type: course
layout: video
---
