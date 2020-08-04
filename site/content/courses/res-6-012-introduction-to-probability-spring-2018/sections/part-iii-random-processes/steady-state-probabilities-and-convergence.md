---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 99yuPxvdfP8
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    title: Video-YouTube-Stream
    type: Video
    uid: 5dbe14ccd807f708f342eb7456b12b30
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/99yuPxvdfP8/default.jpg'
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d4a150dcece00771fdbc9d1f8b7617aa
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 99yuPxvdfP8
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 87d275af77f84e0df07258f0973768bc
  - id: 99yuPxvdfP8.srt
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/steady-state-probabilities-and-convergence/99yuPxvdfP8.srt
    title: 3play caption file
    type: null
    uid: 10276b05d0385e8c3d22a604667756ae
  - id: 99yuPxvdfP8.pdf
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/steady-state-probabilities-and-convergence/99yuPxvdfP8.pdf
    title: 3play pdf file
    type: null
    uid: 7667dfe58992f99cc54163b9027b730e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 901cdd23f8c5f0775e56d94950fdf128
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 70b74c2ee047eb638637f777c41e5214
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L25-07_300k.mp4
    parent_uid: 2edf269db49b1aa2de1a1de94608721d
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7e9c51691645dc01cec6e0508ae8e858
inline_embed_id: 34899144steadystateprobabilitiesandconvergence81730061
order_index: 2402
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: steady-state-probabilities-and-convergence
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/steady-state-probabilities-and-convergence
title: Steady-State Probabilities and Convergence
transcript: >-
  <p><span m="1100">So now we can come to the central topic</span> <span
  m="2820">of our lecture, which describes the conditions under which</span>
  <span m="6200">a Markov chain reaches steady state.</span></p><p><span
  m="9030">The question that we are asking, and which</span> <span m="11230">we
  motivated in the previous lecture</span> <span m="12960">by looking at an
  example with a simple, two-state Markov chain</span> <span m="16350">is the
  following-- we are asking whether the probability</span> <span m="19930">of
  being in state j at time n, given that you started at time</span> <span
  m="23880">0 in state i, converges to some constant, pi of
  j.</span></p><p><span m="28610">In fact, that question consists of two
  parts.</span></p><p><span m="32119">Do we have convergence?</span></p><p><span
  m="34170">And is it independent of i?</span></p><p><span m="38570">We have
  seen an example where it is not always the case.</span></p><p><span
  m="41730">For example, in this Markov chain,</span> <span m="44690">you have
  two recurrent classes.</span></p><p><span m="47210">This is one current class
  here.</span></p><p><span m="49160">And then there's a second recurrent class
  here.</span></p><p><span m="52380">And we know that if we are
  interested</span> <span m="54760">in the long-time probability of being in
  that state, assuming</span> <span m="58380">that you started in one of these
  states here,</span> <span m="60920">the probability will be 0 to be
  here.</span></p><p><span m="62920">But if you started in one of these two
  states,</span> <span m="65379">the probability would be
  positive.</span></p><p><span m="67100">So clearly here, the initial
  conditions</span> <span m="69800">will matter whenever you have two or more
  recurrent classes.</span></p><p><span m="74039">So what would happen if you
  have only one recurrent class?</span></p><p><span m="77110">So let's remove
  this one and consider this situation here,</span> <span m="80960">where you
  have only one recurrent class.</span></p><p><span m="83826">In that case, what
  we have seen--</span> <span m="85200">this is still not
  sufficient.</span></p><p><span m="87039">Indeed, if you look at this recurrent
  class</span> <span m="90080">and you are interested in 9 and assume</span>
  <span m="91980">that you started at 9, then at time 1,</span> <span
  m="94620">you will be either here or here.</span></p><p><span m="96990">And at
  time 2, you will be back at 9 for sure.</span></p><p><span m="100180">And in
  general, for time n even, the probability will be one,</span> <span
  m="104420">and for time n odd, it will be zero.</span></p><p><span
  m="107930">So that specific n-step transition probability</span> <span
  m="111280">in that situation here will never converge.</span></p><p><span
  m="114770">It will keep oscillating between 0 and 1.</span></p><p><span
  m="118180">So the issue here is that we had a periodic recurrent class,</span>
  <span m="123100">and the period in that case was 2.</span></p><p><span
  m="125910">So let us consider now the final case where</span> <span
  m="128440">you have only one recurrent class.</span></p><p><span
  m="131790">And that recurrent class is not periodic.</span></p><p><span
  m="137120">And how do we realize that this is not periodic
  here?</span></p><p><span m="139700">Well, we have a self transition
  here.</span></p><p><span m="142430">So now that we have one recurrent
  class,</span> <span m="144150">and this recurrent class is aperiodic, the
  question is--</span> <span m="147770">do you have this kind of convergence
  here?</span></p><p><span m="149820">And it turns out-- and this is the big
  theory of Markov chains</span> <span m="153200">under the name of the
  steady-state convergence</span> <span m="155310">theorem-- that indeed,
  yes.</span></p><p><span m="157320">The rij's do converge to a steady-state
  limit, which</span> <span m="161250">we call a steady-state probability
  as</span> <span m="164130">long as these two conditions are
  satisfied.</span></p><p><span m="167440">So in summary, not only these two
  conditions</span> <span m="170000">are necessary, like we had seen with our
  counter example,</span> <span m="174060">but they are
  sufficient.</span></p><p><span m="176050">We're not going to prove this
  theorem here.</span></p><p><span m="178260">It's a little bit
  complicated.</span></p><p><span m="179810">But what is the intuitive idea
  behind this theorem?</span></p><p><span m="183940">Well, let us think
  intuitively as</span> <span m="185800">to why the initial state does not
  matter,</span> <span m="188520">when the chain has a single recurrent</span>
  <span m="190900">class and no periodic states.</span></p><p><span
  m="193460">The technique is pretty classical.</span></p><p><span
  m="195520">The idea is the following-- think</span> <span m="197560">about two
  independent copies of that Markov chain,</span> <span m="200820">starting at
  two different initial conditions.</span></p><p><span m="203910">So for
  example, think about a red copy.</span></p><p><span m="206590">And the red
  copy would initially start at state 2.</span></p><p><span m="210730">And then
  at each unit of time will jump to the next state,</span> <span
  m="214537">according to the transition probabilities of this Markov</span>
  <span m="216870">chain.</span></p><p><span m="217530">So for example, so this
  is at time 0, which was here.</span></p><p><span m="220210">Time 1 might come
  here.</span></p><p><span m="223079">Time 2, 3, 4, 5 and so
  forth.</span></p><p><span m="233000">So this is one copy of the Markov
  chain.</span></p><p><span m="235220">So think about another copy, the blue
  copy.</span></p><p><span m="237910">And assume that the blue copy started here
  at time 0.</span></p><p><span m="242090">And again, independently of the
  other,</span> <span m="243980">but during the same unit of time,</span> <span
  m="246010">it will jump from state to state according</span> <span
  m="248600">to the transition probabilities again.</span></p><p><span
  m="250350">So think that maybe this one will go here.</span></p><p><span
  m="253300">Then will go here.</span></p><p><span m="255040">Times 2, 3 will be
  here, 4 here, maybe 5 here.</span></p><p><span m="262660">And so
  forth.</span></p><p><span m="264670">Now look at these two independent
  copies.</span></p><p><span m="267530">There will be a time and in that case,
  for our little example</span> <span m="270580">here, is the time 4, where for
  the first time</span> <span m="273450">they collide, in the sense that
  they</span> <span m="275780">jump to the same state at the same
  time.</span></p><p><span m="278490">So at time 4, both of them are
  here.</span></p><p><span m="282220">Now, think a little bit about the future
  evolution</span> <span m="285409">of these two independent copies, given that
  they are in state 4</span> <span m="289659">now.</span></p><p><span
  m="290300">And here we are using the Markov property</span> <span
  m="292640">to say that the future evolution of the blue copy</span> <span
  m="295970">is independent of the previous path.</span></p><p><span
  m="298310">Given that you are in state 4, the fact that you started in
  1</span> <span m="301640">does not matter for the future evolution of that
  blue copy.</span></p><p><span m="305150">And for the red copy, given that you
  are in 4,</span> <span m="308450">the fact that you started in 2 does
  not</span> <span m="310890">matter to characterize the future
  evolutions</span> <span m="313230">of that red copy.</span></p><p><span
  m="315780">So in some sense, probabilistically speaking,</span> <span
  m="319390">these two copies cannot be distinguished for their future</span>
  <span m="323370">evolutions, given that they both are at state
  4.</span></p><p><span m="326190">So this means that the initial conditions for
  these two</span> <span m="329680">copies, given that these two copies met at a
  given state,</span> <span m="334090">at a given time-- probabilistically
  speaking,</span> <span m="336680">nothing can differentiate them in the future
  because</span> <span m="339780">of the Markov property.</span></p><p><span
  m="341350">That's essentially the high-level idea of this
  proof.</span></p><p><span m="344920">Now, the key thing here
  mathematically</span> <span m="347610">is to prove that whenever you have a
  Markov chain that</span> <span m="352280">has a single recurrent class and
  this single recurrent class is</span> <span m="356909">not periodic, and you
  start from any initial conditions,</span> <span m="361040">the two copies will
  eventually meet in a given</span> <span m="363690">state at a given time with
  probability 1.</span></p><p><span m="367580">OK.</span></p><p><span
  m="368080">So now let's assume that the theorem holds.</span></p><p><span
  m="370530">That means that yes, indeed, we have</span> <span m="372480">proved
  the existence of these steady-state probabilities.</span></p><p><span
  m="376390">The question is now how to calculate them.</span></p><p><span
  m="380840">Well, the way to do it is to start from our key recursion</span>
  <span m="385100">that we had for the m-state transition
  probabilities.</span></p><p><span m="389190">So where we assume here that we
  have m</span> <span m="392000">states, and we are going to take the
  limits</span> <span m="397210">on both sides of this
  equality.</span></p><p><span m="400030">So when n goes to infinity, we know
  that rij of n</span> <span m="403060">will go to pi of j.</span></p><p><span
  m="405110">And here, when n goes to infinity,</span> <span m="407400">in some
  sense n minus 1 also goes to infinity.</span></p><p><span m="411140">And so
  rik of n minus 1 should go to pi of k.</span></p><p><span m="415960">And so we
  are using that property.</span></p><p><span m="418330">And again, we take the
  limit as n goes to infinity.</span></p><p><span m="422740">And we say that rij
  of n converges to here.</span></p><p><span m="428210">Now, the limit on this
  side-- you</span> <span m="429720">have a limit of a finite
  sum.</span></p><p><span m="431310">You can exchange the summation and the
  limit.</span></p><p><span m="434630">And so you take the limit
  inside.</span></p><p><span m="436970">The limit of rik of n minus 1, when n
  goes to infinity,</span> <span m="442110">goes to pi of k.</span></p><p><span
  m="444120">And then you have the resulting term.</span></p><p><span
  m="446170">And so from that, taking the limit</span> <span m="448410">again as
  n goes to infinity on both sides,</span> <span m="452010">you end up with this
  equation here for j.</span></p><p><span m="455000">Now, you can do that for
  any of the j of your Markov chain.</span></p><p><span m="461850">So you have m
  states, so you end up having m equations.</span></p><p><span m="467150">And
  you have m unknowns, the m pi j's.</span></p><p><span m="473850">So this is a
  system of m equations with m unknowns.</span></p><p><span
  m="477580">Unfortunately, this system is singular</span> <span m="480240">and
  it has multiple solutions.</span></p><p><span m="482010">And one way to see
  that is the solution pi j</span> <span m="486430">equals 0 for all j is a
  valid solution to the system.</span></p><p><span m="491190">Zero equals
  zero.</span></p><p><span m="492590">So clearly this is not very
  informative.</span></p><p><span m="495600">So maybe we need one more
  condition</span> <span m="497380">to get a uniquely solvable system of linear
  equations.</span></p><p><span m="501320">It turns out that the system of
  equations</span> <span m="503090">has a unique solution if you impose an
  additional condition,</span> <span m="506820">which is pretty natural, which
  means that the pi</span> <span m="509690">j's are actually
  probabilities.</span></p><p><span m="512880">They should all sum to
  1.</span></p><p><span m="515260">In other words, in the future, if you</span>
  <span m="516909">ask yourself what is the probability of being in state</span>
  <span m="519159">j, and you get pi of j, the summation</span> <span
  m="521980">of all of the possible states have to be 1.</span></p><p><span
  m="524400">If you consider that additional equation, plus that system</span>
  <span m="528340">here, so if you consider this extended system,</span> <span
  m="532660">then you can show that this has a unique
  solution.</span></p><p><span m="537820">And this unique solution cannot be
  this one.</span></p><p><span m="540950">And so in conclusion, we can
  find</span> <span m="543160">the steady-state probabilities of the Markov
  chain</span> <span m="545730">by just solving these linear equations,
  which</span> <span m="548660">should be numerically a straightforward
  procedure.</span></p>
uid: 2edf269db49b1aa2de1a1de94608721d
type: course
layout: video
---
