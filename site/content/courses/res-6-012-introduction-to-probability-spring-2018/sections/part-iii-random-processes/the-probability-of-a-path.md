---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8QyQSZQ4uKQ
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    title: Video-YouTube-Stream
    type: Video
    uid: 7d3ec3c5a256789f09f2302e892d2015
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8QyQSZQ4uKQ/default.jpg'
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c9213086233909f12126367b4f50c098
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8QyQSZQ4uKQ
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 5f27426fcc283edeffbb4d800172e3ee
  - id: 8QyQSZQ4uKQ.srt
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-probability-of-a-path/8QyQSZQ4uKQ.srt
    title: 3play caption file
    type: null
    uid: 1759d85a5fd3d8a2800b5ce3edb9adc7
  - id: 8QyQSZQ4uKQ.pdf
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-probability-of-a-path/8QyQSZQ4uKQ.pdf
    title: 3play pdf file
    type: null
    uid: 04e37a68fac35a6bfe07603cbce8070a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 1a71e14400d0bdece269bee312bdb551
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 44d399aad424c8b0f28e86b89091693d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L25-04_300k.mp4
    parent_uid: 2006d6b8420ff3e47c4c42fadb63792a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 89df770dea382021a5cf3d4ab4e5f032
inline_embed_id: 13279069theprobabilityofapath68436134
order_index: 2375
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-probability-of-a-path
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-probability-of-a-path
title: The Probability of a Path
transcript: >-
  <p><span m="1030">Markov processes can be very general.</span></p><p><span
  m="3580">They can run in continuous or discrete time,</span> <span
  m="6330">can have a discrete or a continuous state space.</span></p><p><span
  m="10250">In this class, we'll restrict ourselves</span> <span m="12340">to
  discrete time discrete state Markov chains.</span></p><p><span m="15670">These
  are the simplest cases and are</span> <span m="17480">the best to build our
  intuition.</span></p><p><span m="19380">So the state space is discrete, here,
  finite with m states,</span> <span m="26360">and time is
  discrete.</span></p><p><span m="29160">That is, at any discrete point in
  time,</span> <span m="31890">the process is in one of these m states</span>
  <span m="34280">and let's say here, at any given time s.</span></p><p><span
  m="39770">And again, time is discrete, so think</span> <span m="42520">about
  the following process.</span></p><p><span m="44680">You have someone hitting a
  drum, indicating</span> <span m="48660">that a transition
  occurs.</span></p><p><span m="50730">And what it means is that the chain that
  was here</span> <span m="53510">will then jump.</span></p><p><span
  m="55380">Let's say to another state j at the next time.</span></p><p><span
  m="60220">So when the Markov chain jumps it can jump on itself</span> <span
  m="65190">or jump to another state like here or here.</span></p><p><span
  m="71780">And then at time s plus 1 someone hit the drum</span> <span
  m="75660">and you jump again, and so on and so forth.</span></p><p><span
  m="79170">You can think of a very active frog jumping from lilies</span> <span
  m="82620">to lilies on the pond and following a regular
  drumbeat.</span></p><p><span m="89450">So what is left to define are the
  various probabilities</span> <span m="92570">of transitions, such as the
  transition from i to j,</span> <span m="96300">and the notation we're going to
  use</span> <span m="99039">is pij, which by definition is that transition
  probability</span> <span m="103890">here.</span></p><p><span m="110509">So
  given that you are in state i at time s, what</span> <span m="114940">is the
  probability that you end up in state j at time s plus 1.</span></p><p><span
  m="119060">Notice that these transition priorities here, pij,</span> <span
  m="123120">are not function of s.</span></p><p><span m="124880">So
  irrespective of what the time s that we're talking about,</span> <span
  m="129280">these transitions priorities are the same.</span></p><p><span
  m="131770">So this is what we mean by a time-homogeneous Markov
  chain.</span></p><p><span m="136710">In other words, these are valid for s
  equal 0, 1, 2,</span> <span m="143490">and so on and so
  forth.</span></p><p><span m="145630">So the defining feature of a Markov
  chain</span> <span m="148415">is the Markov property.</span></p><p><span
  m="150730">And the Markov property essentially</span> <span m="152200">says
  that the past is not really important in order</span> <span m="155990">to
  predict the future, as long as you know where you are now.</span></p><p><span
  m="159590">Another way of saying it is that if you</span> <span
  m="162540">look at the probability of going next in state j</span> <span
  m="167329">given that you are now in state i</span> <span m="171360">and that
  I give you, in addition,</span> <span m="174130">the entire
  trajectories.</span></p><p><span m="175480">So I tell you that it was in i0 at
  that time, and so on and so</span> <span m="180340">forth, all the way up to
  time s minus 1,</span> <span m="184460">where it was in is minus
  1.</span></p><p><span m="186850">So it gives you the entire trajectory</span>
  <span m="189605">of the chain up to s, and now I'm asking you,</span> <span
  m="192940">what is the probability that you're going to go to s plus
  1?</span></p><p><span m="196170">The Markov property here simply says that
  that probability here</span> <span m="201079">is again,
  pij.</span></p><p><span m="204260">So in other words, all this
  information</span> <span m="205990">here is of no use to compute this
  probability.</span></p><p><span m="210460">Now, note that these transition
  probabilities are really</span> <span m="213610">probabilities, in the
  following sense.</span></p><p><span m="215240">Right?</span></p><p><span
  m="215740">So you are in i and then at the next time step,</span> <span
  m="220270">you will definitely jump with probability 1.</span></p><p><span
  m="222560">And where you're going to jump will depend,</span> <span
  m="224570">but the summation of all possibilities</span> <span m="227829">have
  to sum up to 1.</span></p><p><span m="229950">So from j equals 1 to n has to
  be 1.</span></p><p><span m="234520">So now that we have introduced the main
  ingredients,</span> <span m="237740">usually we are very interested in knowing
  what a Markov</span> <span m="241140">chain is going to do in the long
  run.</span></p><p><span m="243440">We are interested in finding the
  probability</span> <span m="245390">that the chain is in a state j after n
  transitions, given</span> <span m="249680">that it is now in state
  i.</span></p><p><span m="251690">Now because of the time-homogeneous,</span>
  <span m="253830">this is the same thing as that.</span></p><p><span
  m="255200">In other words, the current time could be in any time s,</span>
  <span m="258490">we just have to add s here.</span></p><p><span m="260480">And
  again, that is nothing else than this property.</span></p><p><span
  m="264490">So we are interested in calculating rij of n for any
  n.</span></p><p><span m="270544">For n equals 1, this is nothing else than rij
  of 1</span> <span m="275560">is the same as this transition
  probabilities</span> <span m="278800">that we have defined.</span></p><p><span
  m="280280">But for n greater than or equals to 2, what we are seeing</span>
  <span m="283490">is the introduction of a key recursion
  here.</span></p><p><span m="286520">And this is how you would be able to
  calculate</span> <span m="289380">these probabilities.</span></p><p><span
  m="290980">Now, how did we come up with this recursion?</span></p><p><span
  m="293805">Well, it's based on a classical divide and conquer</span> <span
  m="296860">and essentially, the use of the total property
  theorem.</span></p><p><span m="300210">Essentially, you have the time step
  here.</span></p><p><span m="302720">This is the current time
  s.</span></p><p><span m="304544">You are interested in what's going</span>
  <span m="305960">to happen at n plus s and n steps later.</span></p><p><span
  m="309350">Here you are in state i.</span></p><p><span m="311354">You are
  interested in knowing what</span> <span m="312770">is the probability of being
  in state j at that time.</span></p><p><span m="315650">And what you simply do
  is you look at the step n</span> <span m="318970">plus s minus 1, just before
  the last one.</span></p><p><span m="321840">And then you say, well, let me do
  a divide and conquer.</span></p><p><span m="324960">This is k here, and I'm
  going to look</span> <span m="327450">at evaluating that
  probability.</span></p><p><span m="330360">And then once I have that, I will
  simply</span> <span m="332860">multiply it by this transition
  here.</span></p><p><span m="335290">And what happened is that this here</span>
  <span m="337610">is nothing else than this calculation that we have
  here.</span></p><p><span m="340730">And that's the same
  thing.</span></p><p><span m="342310">And here, this is the probability</span>
  <span m="344850">of one step transition.</span></p><p><span m="348450">And, of
  course, we have conditioned on the fact</span> <span m="351090">that we would
  be in a state k here,</span> <span m="352670">but k could be any of these
  states, right?</span></p><p><span m="355620">And they are m of them, and this
  is</span> <span m="357960">why we saw from k equals 1 to m.</span></p><p><span
  m="361560">So essentially this is how this key recursion has</span> <span
  m="364610">been put together, and we have used,</span> <span m="366440">of
  course, the Markov property in order to do that.</span></p><p><span
  m="369790">Let's do now a little bit of warm up in terms of calculation</span>
  <span m="372650">and apply these concepts.</span></p>
uid: 2006d6b8420ff3e47c4c42fadb63792a
type: course
layout: video
---
