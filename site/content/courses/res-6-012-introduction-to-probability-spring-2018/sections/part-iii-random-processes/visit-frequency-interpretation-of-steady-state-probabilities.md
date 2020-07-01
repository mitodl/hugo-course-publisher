---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: c-BLp-585aU
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    title: Video-YouTube-Stream
    type: Video
    uid: 7a7aa658f739da900e414355ffb7af97
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/c-BLp-585aU/default.jpg'
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5c90a1257c5a1303ded22bd23e823de0
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: c-BLp-585aU
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1fae7494792b04f6dedef1ff7cc27bb8
  - id: c-BLp-585aU.srt
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/visit-frequency-interpretation-of-steady-state-probabilities/c-BLp-585aU.srt
    title: 3play caption file
    type: null
    uid: 3f4bb8e563310109c91681b1c83974b8
  - id: c-BLp-585aU.pdf
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/visit-frequency-interpretation-of-steady-state-probabilities/c-BLp-585aU.pdf
    title: 3play pdf file
    type: null
    uid: eb08b6a17a8ae66ed12658d1cd8a263b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9a6eef3d432289aa931a809742683a0a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 99ebd8e06700bd41df19eceae489d7ca
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L25-09_300k.mp4
    parent_uid: e0ffcf2cfe4f27eb69f87cded62d51e4
    title: Video-Internet Archive-MP4
    type: Video
    uid: 70366520abbe868f70829d04a91aedb4
inline_embed_id: 39171528visitfrequencyinterpretationofsteadystateprobabilities83811059
order_index: 2420
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: visit-frequency-interpretation-of-steady-state-probabilities
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/visit-frequency-interpretation-of-steady-state-probabilities
title: Visit Frequency Interpretation of Steady-State Probabilities
transcript: >-
  <p><span m="1780">OK, so we have just seen that if we have a single
  recurrent</span> <span m="5600">class, which is not periodic, then the Markov
  chain reaches</span> <span m="8740">steady state, and the steady state
  probabilities satisfy</span> <span m="13560">the following system of
  equations.</span></p><p><span m="16730">These equations are essential in the
  study of Markov chains,</span> <span m="19760">and they have a
  name.</span></p><p><span m="21150">They are called the balance
  equations.</span></p><p><span m="23780">In fact, it's worth looking at
  them</span> <span m="26140">in a somewhat different way than how we introduced
  them so far.</span></p><p><span m="29990">Using a frequency
  interpretation.</span></p><p><span m="32475">Along the way, it will shed some
  light</span> <span m="34880">on the how or why they are called balance
  equations.</span></p><p><span m="39640">Intuitively, one can sometimes
  think</span> <span m="41660">of probabilities as
  frequencies.</span></p><p><span m="43700">For example, if we keep tossing a
  fair coin, which</span> <span m="46420">has a probability half of Heads, and
  then in the long run, half</span> <span m="49700">of the time we are going to
  see Heads.</span></p><p><span m="51960">So let us try an interpretation of
  this kind for pi</span> <span m="54900">of j, the steady state probability of
  state j.</span></p><p><span m="58940">Imagine the evolution of a Markov
  chain</span> <span m="61270">as a particle jumping from state to
  state.</span></p><p><span m="64440">And imagine an observer at a given
  state.</span></p><p><span m="67015">So imagine that you have an observer
  here,</span> <span m="70160">in a given state j.</span></p><p><span
  m="71039">And imagine that this observer will</span> <span m="73240">keep
  counting every time the particle visits the state j.</span></p><p><span
  m="77890">So you have this observer keeping</span> <span m="79840">track every
  time the particle is in state j and keep recording.</span></p><p><span
  m="83780">So, for example, one record at time two,</span> <span m="86050">and
  saw it at time four, eight, maybe n.</span></p><p><span m="91080">And you can
  look at the total number of time</span> <span m="94490">this observer saw the
  particle being in j,</span> <span m="97530">and you can define
  it.</span></p><p><span m="98789">Let's call it y of j of n.</span></p><p><span
  m="102700">So yj of n represents the total number of ones</span> <span
  m="107400">that you have up to time n.</span></p><p><span m="109690">So it's
  the total number, so we divide by n</span> <span m="112289">to have the
  frequency.</span></p><p><span m="113780">So here that would be the frequency
  of time</span> <span m="116940">this observer saw the particle in state j up
  to time n.</span></p><p><span m="122040">Well, when n is very, very large, so
  n large,</span> <span m="127150">that frequency approaches pi of
  j.</span></p><p><span m="132690">In fact, we can make it more rigorous</span>
  <span m="134820">by saying that that converges to pi of j</span> <span
  m="138800">when n goes to infinity in a rigorous fashion</span> <span
  m="141700">that we will not discuss here.</span></p><p><span m="144190">So we
  have now a frequency interpretation of pi of j.</span></p><p><span
  m="149210">Now, let us think about a frequency</span> <span
  m="152470">interpretation of transitions from 1 to j.</span></p><p><span
  m="156510">So again, you have a new observer,</span> <span m="159870">and this
  observer look at it here,</span> <span m="162200">and every time the particle
  pass here, he put a one.</span></p><p><span m="165720">So, for example, maybe
  one here and here.</span></p><p><span m="168810">So if you think about it,
  you're looking at from 1</span> <span m="173730">to j, and of n, that would be
  the total number of ones</span> <span m="177060">that you observe here up to
  time n.</span></p><p><span m="180340">And if you divide by 1, that's the
  frequency,</span> <span m="183630">and so what is this
  frequency?</span></p><p><span m="185750">Well, let's look at it this
  way.</span></p><p><span m="188360">So how often do we have such a
  transition?</span></p><p><span m="190890">Well, a fraction pi1 of the time,
  the particle</span> <span m="195020">is in state 1, and whenever at state
  1,</span> <span m="199050">there is going to be a probability p1j of going
  there.</span></p><p><span m="204140">There might be other ways to go, but
  out</span> <span m="207620">of all the time the particle is in state
  one,</span> <span m="210990">the frequency of time it will transition to j
  will be pi 1j.</span></p><p><span m="216750">So out of all possible
  transitions that can happen,</span> <span m="220600">the fraction of these
  transitions</span> <span m="222900">that will happen from 1 to j will be pi 1
  times p1j.</span></p><p><span m="232079">Again, this is when n is large, and
  this</span> <span m="234820">can be made more rigorous.</span></p><p><span
  m="238040">Now, what's the total frequency of transitions into state
  j?</span></p><p><span m="243400">So these are transitions
  leaving.</span></p><p><span m="249020">These are the transitions of interest
  here.</span></p><p><span m="252290">So think about a third observer looking
  here and recording</span> <span m="259750">every time the particle goes
  through here, here,</span> <span m="263270">here, or here.</span></p><p><span
  m="266610">So what is the frequency of transition here?</span></p><p><span
  m="269150">Well, it will be the sum of all the possible transitions</span>
  <span m="273630">that we have observed there.</span></p><p><span
  m="275170">And so this is going to be this and that corresponds to
  this.</span></p><p><span m="282880">Now, the last step of the argument</span>
  <span m="284980">is to see that the particle is in state j, if</span> <span
  m="290880">and only if the last transition was into state
  j.</span></p><p><span m="295680">And this explains that this part, which we
  have calculated</span> <span m="298940">here, will be the same as this one and
  that explain that.</span></p><p><span m="303980">So this equation expresses
  exactly the statement</span> <span m="307220">that we made.</span></p><p><span
  m="308030">That's useful intuition to have, and we</span> <span m="311100">are
  going to see an example later on how it gives us</span> <span
  m="315020">shortcuts into analyzing Markov chains.</span></p><p>&nbsp;</p>
uid: e0ffcf2cfe4f27eb69f87cded62d51e4
type: courses
layout: video
---
