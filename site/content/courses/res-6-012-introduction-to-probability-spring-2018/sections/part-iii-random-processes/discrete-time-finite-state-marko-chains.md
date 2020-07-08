---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: hsQnmrHbbms
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    title: Video-YouTube-Stream
    type: Video
    uid: ea82d2cb7f22a985906b26d0dc0d2003
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/hsQnmrHbbms/default.jpg'
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: f2982d9c4e841321e82c78e22ef353bb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: hsQnmrHbbms
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9f7a31c33476f77eb36dae2c9bb68f8f
  - id: hsQnmrHbbms.srt
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/discrete-time-finite-state-marko-chains/hsQnmrHbbms.srt
    title: 3play caption file
    type: null
    uid: 0e5293a9189a0d9b49b25c0c9347e6d5
  - id: hsQnmrHbbms.pdf
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/discrete-time-finite-state-marko-chains/hsQnmrHbbms.pdf
    title: 3play pdf file
    type: null
    uid: f02929e77a4e43c43c97fcd78d114674
  - id: Caption-3Play YouTube id-SRT
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e425c6ab391142189c9f73425fcbf412
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5826412d51d8c7ac4cc2c4f825acaf4e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L24-04_300k.mp4
    parent_uid: da44d4be0aa2a5c6f975436e67fd05f0
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2a95e2a61a85eaaa377540237d48912d
inline_embed_id: 83041573discretetimefinitestatemarkochains91580135
order_index: 2447
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: discrete-time-finite-state-marko-chains
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/discrete-time-finite-state-marko-chains
title: Discrete-Time Finite-State Markov Chains
transcript: >-
  <p><span m="820">Let us now abstract from our previous example</span> <span
  m="3330">and provide a general definition of what a discrete time,</span>
  <span m="6630">finite state Markov chain is.</span></p><p><span
  m="9480">First, central in the description of a Markov process</span> <span
  m="13230">is the concept of a state, which describes the current
  situation</span> <span m="17020">of a system we are interested
  in.</span></p><p><span m="20640">For example, in the case of the checkout
  counter example,</span> <span m="24280">the number of customers in the
  queue</span> <span m="26580">provided the right level of information</span>
  <span m="28970">needed to define a useful state.</span></p><p><span
  m="33260">Time is assumed to be discrete, that is,</span> <span
  m="37070">divided in discrete time steps.</span></p><p><span m="40390">The
  system starts at time 0 in an initial state,</span> <span m="46340">and at
  each successive time step,</span> <span m="48650">the system goes from its
  current state</span> <span m="50640">to a next one chosen with some
  randomness.</span></p><p><span m="53510">As a result, after n such
  transitions,</span> <span m="57740">the state of the system will be
  random,</span> <span m="60590">and so we can think of it as a random
  variable.</span></p><p><span m="64260">Let Xn be this random
  variable.</span></p><p><span m="67210">That is, Xn represents the state in
  which the system is</span> <span m="71485">after n transitions from an initial
  state in which it</span> <span m="74539">started to
  operate.</span></p><p><span m="77210">As a shortcut, we may often say that
  Xn</span> <span m="82120">is the state of the system at time
  n.</span></p><p><span m="85620">We suppose that there is a finite
  number</span> <span m="88500">of possible states for the system to be
  in.</span></p><p><span m="92200">Here, we have drawn a portion of a finite
  state space</span> <span m="96610">with m possible states labeled 1 to m,
  using i</span> <span m="102910">and j as generic labels.</span></p><p><span
  m="107670">Of course, we could think of systems with an infinite number</span>
  <span m="110210">of states, either discrete or continuous,</span> <span
  m="112690">but this is a bit more complicated,</span> <span m="114759">and so
  in this course, we restrict ourselves</span> <span m="117150">to a finite
  state space.</span></p><p><span m="119360">Note that the initial state could
  itself</span> <span m="126210">be fixed or chosen randomly.</span></p><p><span
  m="130228">Assume now that the system started in state
  three.</span></p><p><span m="135580">What will happen next?</span></p><p><span
  m="137360">The system will evolve according to one</span> <span m="140090">of
  the possible transitions out of state three,</span> <span m="143500">for
  example, one of these arcs.</span></p><p><span m="147230">Note here that we
  don't have an arc from three to four.</span></p><p><span m="151950">As a
  convention, we only include arcs</span> <span m="154920">for transitions that
  can happen.</span></p><p><span m="158380">Remember the checkout counter
  example.</span></p><p><span m="161530">Because of our assumptions that no more
  than one</span> <span m="163900">person can join the queue at any time,</span>
  <span m="166350">we didn't have arcs of the type going</span> <span
  m="168230">from one to three or from two to ten.</span></p><p><span
  m="175260">Also, because of the customers being served one at a time,</span>
  <span m="178500">departures were limited to one person at a time,</span> <span
  m="181430">and so no arcs of the type going from two</span> <span
  m="184170">to zero or from nine to two.</span></p><p><span m="188352">So the
  next transition out of three</span> <span m="191790">can be thought of a
  random jump where, from state three,</span> <span m="196090">the system will
  jump to either state one, state two, state j,</span> <span m="203180">or jump
  unto itself.</span></p><p><span m="206530">These will be the only
  possibilities.</span></p><p><span m="209950">We want to describe the
  statistics of these jumps,</span> <span m="212710">and we will use conditional
  probabilities.</span></p><p><span m="215560">Given that at time zero, the
  system</span> <span m="217220">is in state three, what is the
  probability</span> <span m="219190">that it will be in state j
  next?</span></p><p><span m="222480">These will be called transition
  probabilities.</span></p><p><span m="226400">For example, the probability of
  going from three to one</span> <span m="230620">will be
  p31.</span></p><p><span m="233340">Here, p32, here, p33, and here,
  p3j.</span></p><p><span m="246770">Note that these are the only
  possibilities.</span></p><p><span m="248930">As a result, you have p31 plus
  p32 plus p33 plus p3j</span> <span m="266310">will be 1.</span></p><p><span
  m="270340">Assume that the system continued to evolve,</span> <span
  m="272780">and after various different steps, come back</span> <span
  m="278850">in three at time n.</span></p><p><span m="284990">Again, what will
  happen next?</span></p><p><span m="287750">Well, this property here says that
  the probability</span> <span m="290720">of going from state three to one is
  again p31,</span> <span m="297190">the same as before.</span></p><p><span
  m="299200">In other words, here, we will say</span> <span m="304650">that the
  chain is time homogeneous.</span></p><p><span m="312090">That is, these
  transition probabilities</span> <span m="315660">will be the same irrespective
  of the time.</span></p><p><span m="318490">So this is true for all
  n.</span></p><p><span m="322380">And the summation that we have written
  here</span> <span m="324260">for the special case is of course
  general.</span></p><p><span m="327370">What we have is that the probability of
  i to j,</span> <span m="333920">If you sum all of these probabilities</span>
  <span m="336510">for all possible j's, you will have one.</span></p><p><span
  m="343690">Now, in order for this probabilistic specification</span> <span
  m="346950">to make sense and be coherent, we</span> <span m="349920">need to
  make a big assumption about the evolution</span> <span m="352159">of the state
  of the system.</span></p><p><span m="354040">This assumption, the so-called
  Markov property,</span> <span m="356700">given in words here and in
  mathematical statement here,</span> <span m="363950">is in fact, the defining
  nature of what a Markov process is.</span></p><p><span m="368730">In words,
  what it says is that every time the system</span> <span m="372940">finds
  itself in state three, the transition probability</span> <span m="376980">of
  going to state one will always</span> <span m="380660">be p31, no matter how
  the system evolved</span> <span m="384350">in the past up to being in state
  three.</span></p><p><span m="387380">In other words, no matter what path the
  system</span> <span m="389980">has followed up to the current state,</span>
  <span m="392040">the next state transition probability</span> <span
  m="394110">will be the same, independent of that past.</span></p><p><span
  m="397290">Mathematically, conditionally on knowing your current state,</span>
  <span m="403830">having more information about the past state</span> <span
  m="407740">variables does not change the transition probability</span> <span
  m="411000">to your next state.</span></p><p><span m="412500">In other words,
  the probability distribution of the next state,</span> <span m="416580">X n+1,
  depends on the past only through the value</span> <span m="420460">of the
  present state, Xn.</span></p><p><span m="422670">So you can see that as the
  definition of the transition</span> <span m="426530">probability and that
  property, that equality</span> <span m="429860">from here to here, being the
  Markov property.</span></p><p><span m="433550">For this property to hold in
  any modeling application,</span> <span m="437040">you need to choose your
  state carefully.</span></p><p><span m="439380">You want to ensure that the
  information contained</span> <span m="441430">in the description of your state
  captures</span> <span m="443470">all the relevant information to make
  predictions</span> <span m="446110">about the future
  evolution.</span></p><p><span m="448070">Now, given a system, how to properly
  define</span> <span m="451240">the state variables which will allow</span>
  <span m="453070">us to model its evolution as a Markov process</span> <span
  m="456210">is somewhat of an art, and there are</span> <span m="458770">no
  cookbook recipes to do it.</span></p><p><span m="461490">However, with a
  little bit of experience and practice,</span> <span m="465710">one quickly
  gets the required intuition to do this properly.</span></p><p><span
  m="470250">You will be able to do so in that class.</span></p>
uid: da44d4be0aa2a5c6f975436e67fd05f0
type: courses
layout: video
---
