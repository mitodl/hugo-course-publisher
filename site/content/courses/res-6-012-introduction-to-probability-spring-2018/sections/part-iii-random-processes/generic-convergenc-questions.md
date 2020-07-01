---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: h2w1tTTltrU
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    title: Video-YouTube-Stream
    type: Video
    uid: 3032a5e50d1ba449d230d60761c20396
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/h2w1tTTltrU/default.jpg'
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: faf6a2ce25ca6082ab420ca8777c5d7a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: h2w1tTTltrU
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 981478b0467d754febbd2e49c9626d11
  - id: h2w1tTTltrU.srt
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/generic-convergenc-questions/h2w1tTTltrU.srt
    title: 3play caption file
    type: null
    uid: 9db3d5b806b908f9bcbdde71e7a8c865
  - id: h2w1tTTltrU.pdf
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/generic-convergenc-questions/h2w1tTTltrU.pdf
    title: 3play pdf file
    type: null
    uid: d6379f53d6a26a39503b820902a96333
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 05e694de146798e33267b29d3c3995d7
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d68bd38b876a38c63a374a6736681fb7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L24-07_300k.mp4
    parent_uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
    title: Video-Internet Archive-MP4
    type: Video
    uid: b8a6dcb5fdf5ca960b68651cf3eb7b9f
inline_embed_id: 77656754genericconvergencquestions82680190
order_index: 2258
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: generic-convergenc-questions
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/generic-convergenc-questions
title: Generic Convergence Questions
transcript: >-
  <p><span m="500">We have observed in the simple example from the previous
  clip</span> <span m="4570">that when the Markov chain initially starts in
  state one,</span> <span m="8900">the probability that it finds itself in state
  one</span> <span m="11970">after a long period of time converges to a constant
  value,</span> <span m="17050">in our case, 2/7.</span></p><p><span
  m="21300">In addition, if the Markov chain initially starts in state
  two,</span> <span m="25880">the probability that it finds itself in state
  one</span> <span m="28740">after a long period of time also converges</span>
  <span m="31760">to the same constant value, 2/7.</span></p><p><span
  m="37500">Are these two properties of long term convergence</span> <span
  m="41650">and of vanishing effect of the initial state</span> <span
  m="45140">over the long term convergence always true?</span></p><p><span
  m="50240">Mathematically, we are asking the question, is rij of n pi j</span>
  <span m="67530">when n goes to infinity?</span></p><p><span m="72150">The
  answer is that for nice Markov chains,</span> <span m="76450">this will be
  true, but this is not always true.</span></p><p><span m="82880">Consider the
  first question.</span></p><p><span m="85630">Does rij(n) always converge to
  something</span> <span m="89910">as n goes to infinity?</span></p><p><span
  m="92539">Look at the following simple Markov chain.</span></p><p><span
  m="96116">When in state two, you will never be in state two</span> <span
  m="102140">at the next transition.</span></p><p><span m="104740">You will end
  up next in either state one or state three.</span></p><p><span
  m="114140">However, no matter where you end up,</span> <span m="117870">you're
  sure that the next transition will bring you back</span> <span m="121810">to
  state two, either here or from here.</span></p><p><span m="126080">In other
  words, for n odd, r22 of n will always be 0,</span> <span m="134340">and for n
  even, r22 of n will always be 1.</span></p><p><span m="142079">And so r22 of n
  will never converge.</span></p><p><span m="146040">It will always alternate
  between 1 or 0.</span></p><p><span m="150350">Convergence has
  failed.</span></p><p><span m="152670">That chain has a periodic
  structure,</span> <span m="156240">and we will see in the next lecture</span>
  <span m="158390">that if periodicity is absent from a chain,</span> <span
  m="163070">then we don't have a problem with convergence.</span></p><p><span
  m="167570">Consider now the second question dealing with a vanishing</span>
  <span m="171240">importance of initial states when convergence
  occurs.</span></p><p><span m="176200">For this, consider the following Markov
  chain.</span></p><p><span m="184370">If you start in state one, there is no
  way you can escape.</span></p><p><span m="190320">You are certain to stay
  there forever.</span></p><p><span m="195430">So r11 of n will always be
  1.</span></p><p><span m="201750">On the other hand, if you start in state
  three,</span> <span m="206560">there is no way you will ever reach state
  one.</span></p><p><span m="210400">So r31 of n will be 0.</span></p><p><span
  m="217500">The initial state of where you started</span> <span m="220410">does
  matter in this example, and its influence never</span> <span
  m="225020">vanishes in the long run.</span></p><p><span m="226900">The second
  nice property has failed here.</span></p><p><span m="230610">And here, this
  has to do with the Markov structure</span> <span m="233860">where some states
  are not accessible from some other</span> <span m="237150">states, and we will
  address this in the final portion</span> <span m="240880">of this
  lecture.</span></p><p><span m="243410">Finally, let us calculate r21 of n for
  large n.</span></p><p><span m="250790">So you start in state two, and you ask
  yourself,</span> <span m="256329">what is the probability that I will end up
  in state one</span> <span m="261519">after n steps for n
  large?</span></p><p><span m="265950">Well, when you start in two, you may stay
  in two for a while</span> <span m="270810">by doing this kind of transition
  and this transition</span> <span m="273850">and this
  transition.</span></p><p><span m="275830">But eventually, with probability
  one, you will escape.</span></p><p><span m="281270">Either you will go to
  state one, or you</span> <span m="285200">will escape to state
  three.</span></p><p><span m="289810">And in that case, you will never go back
  to two.</span></p><p><span m="294632">If you are in one, you will never go
  back here to two,</span> <span m="298090">and from three, you will never go
  back to two.</span></p><p><span m="302150">Because of the symmetry between
  these probabilities</span> <span m="305440">here-- 0.3 on this side and 0.3 on
  this side--</span> <span m="312060">when you do escape state two, you</span>
  <span m="315160">are equally likely to escape toward one or toward
  three.</span></p><p><span m="321840">So what you have is that r21 of n will be
  1/2.</span></p><p>&nbsp;</p>
uid: b4fcf7c7e894c6c63e9d3d53f38ecb9f
type: courses
layout: video
---
