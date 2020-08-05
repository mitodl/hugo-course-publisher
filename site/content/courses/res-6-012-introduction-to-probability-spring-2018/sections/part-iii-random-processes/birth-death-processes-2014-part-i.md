---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: XKYpKYspe1w
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    title: Video-YouTube-Stream
    type: Video
    uid: 0f351c8c27064e1771fa473d802c154d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/XKYpKYspe1w/default.jpg'
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2fe1f7e93ba07269de9083fba764f1b6
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: XKYpKYspe1w
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 30817b8b8456c85b56ad6496e71ba675
  - id: XKYpKYspe1w.srt
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/birth-death-processes-2014-part-i/XKYpKYspe1w.srt
    title: 3play caption file
    type: null
    uid: 5a7b5f04943486761f45994a5d5fde7c
  - id: XKYpKYspe1w.pdf
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/birth-death-processes-2014-part-i/XKYpKYspe1w.pdf
    title: 3play pdf file
    type: null
    uid: 9772be7269f0b4e26ba2d71dede0a97b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 798fe4322f7f55d40b1d1b87e44180b5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b089c8c1ac229d1b40dd55270182dc6c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L25-10_300k.mp4
    parent_uid: f6f20cbe427bd5f0316c5fb91d56867e
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2b5e389dc7160a8cb5ef1cd251460415
inline_embed_id: 73210328birthdeathprocessesparti56489620
order_index: 2429
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: birth-death-processes-2014-part-i
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/birth-death-processes-2014-part-i
title: Birth-Death Processes — Part I
transcript: >-
  <p><span m="1800">We are going to spend the rest of this lecture</span> <span
  m="3800">by looking into an interesting subclass of Markov chains</span> <span
  m="7220">for which steady-state convergence exists--</span> <span
  m="10190">the class of birth and death processes.</span></p><p><span
  m="13250">So what is a birth and death process?</span></p><p><span
  m="16440">It's a Markov chain whose diagram</span> <span m="18300">looks like
  this-- the states of the Markov chain</span> <span m="21080">start from zero
  and go to some finite integer number m.</span></p><p><span m="25860">And if
  you are at a typical state in the middle, say i.</span></p><p><span
  m="31370">Then next you will either go to the right--</span> <span
  m="34470">or up by one unit-- or you will go to the left--</span> <span
  m="39740">or down by one unit-- or you will stay where you
  are.</span></p><p><span m="47590">And this will happen with the following
  transition</span> <span m="50450">probabilities-- here p i-- i function of the
  state--</span> <span m="55580">here q i.</span></p><p><span m="58030">And this
  one the remaining 1 minus p i minus q i.</span></p><p><span m="64060">So it's
  like keeping track of some animal population.</span></p><p><span
  m="67350">Animals get born.</span></p><p><span m="68470">They
  die.</span></p><p><span m="69760">The assumption here is that at any point in
  time,</span> <span m="72410">either one animal gets born, or one dies, or
  nothing happens.</span></p><p><span m="77380">There are no multiple deaths, no
  births</span> <span m="80020">happening at the same time.</span></p><p><span
  m="81670">There are many practical applications</span> <span m="83500">where
  this structure provides a basic first-level model.</span></p><p><span
  m="87840">An example of a chain of this kind of</span> <span m="90200">was the
  supermarket counter example</span> <span m="92650">that we discussed before,
  where the states represented</span> <span m="95620">the number of customers in
  a queue.</span></p><p><span m="97630">A customer arrives and the queue
  increases by one.</span></p><p><span m="100759">A customer leaves and the
  queue decreases by one.</span></p><p><span m="104780">Or nothing happens and
  the queue stays as it is.</span></p><p><span m="108810">Now, in this
  supermarket example, the p's and the q's</span> <span m="113180">were all
  taken to be the same across the states.</span></p><p><span m="116140">But we
  can generalize.</span></p><p><span m="117890">For example, the departure rate,
  q,</span> <span m="121500">could be different from state to
  state.</span></p><p><span m="123590">For example, with lots of customers in
  the queue,</span> <span m="126750">perhaps the clerk will work
  faster.</span></p><p><span m="129810">Such a chain can also be used to model
  the spread of disease</span> <span m="133530">in a
  population.</span></p><p><span m="134730">For example, the states could
  represent the number of people</span> <span m="137960">in a given population
  that have the flu.</span></p><p><span m="140200">One more person gets the
  flu.</span></p><p><span m="141730">The count goes up.</span></p><p><span
  m="144670">One more person gets healed.</span></p><p><span m="146590">The
  count goes down.</span></p><p><span m="148510">These probabilities, in such an
  epidemic model,</span> <span m="151750">will certainly depend on the current
  state.</span></p><p><span m="154210">If lots of people already have the
  flu,</span> <span m="157640">the probability that another person catches
  it</span> <span m="159630">would be pretty high.</span></p><p><span
  m="161650">But if no one has the flu, then the probability</span> <span
  m="164590">that one gets a transition-- where someone catches the flu--</span>
  <span m="167910">would be pretty small.</span></p><p><span m="169550">The rate
  at which new people get the disease definitely</span> <span m="172360">depends
  on how many people already have it.</span></p><p><span m="174980">And that
  motivates cases where those p's, here,</span> <span m="179170">depend on the
  state of the chain.</span></p><p><span m="181830">There are lots of other
  applications</span> <span m="183600">for which these special Markov chains are
  useful.</span></p><p><span m="187490">So how do we study
  them?</span></p><p><span m="190310">Such a chain consists of a single
  aperiodic recurrent</span> <span m="194230">class, and so has a well-defined
  steady-state behavior.</span></p><p><span m="198480">To calculate the
  steady-state probability</span> <span m="200600">pi of i of a state i, you can
  write the system</span> <span m="204490">of m linear equations in the
  pi's</span> <span m="206680">that we had discussed before.</span></p><p><span
  m="209340">But this may be cumbersome, and in fact, more work than one</span>
  <span m="213250">actually needs to do.</span></p><p><span m="215110">There is
  a very clever shortcut that</span> <span m="217350">applies to birth and death
  processes.</span></p><p><span m="219770">And it's based on the frequency
  interpretation</span> <span m="222240">that we discussed in a recent
  clip.</span></p><p><span m="224400">To see this, let's draw a line
  somewhere</span> <span m="227020">in the middle of this chain, and
  focus</span> <span m="230340">on the transitions between this left part and
  this right part.</span></p><p><span m="239480">Assume that the line cuts
  through the middle</span> <span m="241980">of two adjacent states, i and i
  plus one, like here.</span></p><p><span m="246190">And so you zoom here and
  this is the picture</span> <span m="248700">of what you have
  here.</span></p><p><span m="250210">So what is the chain going to
  do?</span></p><p><span m="253790">Let's say it starts on the
  left.</span></p><p><span m="256519">It's going to move
  around.</span></p><p><span m="259750">And at some point, it makes a transition
  to the other side,</span> <span m="264150">going here.</span></p><p><span
  m="265350">And that is a transition from i to i plus 1.</span></p><p><span
  m="269730">And now, once it's on the right side,</span> <span m="271720">it's
  going to move around as well.</span></p><p><span m="273830">And then at one
  point, it will come back to that part again.</span></p><p><span m="277159">And
  this is a transition from i plus one to i,</span> <span m="280880">and so on
  and so forth.</span></p><p><span m="284159">Now, there is a certain balance
  that must be obeyed here.</span></p><p><span m="287570">The number of upward
  transitions through this line cannot be</span> <span m="292409">very different
  from the number of downward transitions from</span> <span m="295340">this
  line.</span></p><p><span m="297200">Because if we cross this way, then</span>
  <span m="300490">in order to cross again this way,</span> <span m="303180">you
  will have first to cross down the other way.</span></p><p><span m="307320">You
  can not go up 100 times here, in that direction,</span> <span m="314300">and
  go down here 50 times.</span></p><p><span m="320080">If you have gone up 100
  times, it</span> <span m="322570">means that you have gone down 99, 100 or
  101, but nothing</span> <span m="328260">different from
  that.</span></p><p><span m="329850">So the long-term frequency with which
  transitions of these kind</span> <span m="333680">occur has to be the same as
  the long-term frequency</span> <span m="337110">that transitions of that kind
  occur.</span></p><p><span m="339200">Or, in this diagram, the frequency of
  that kind</span> <span m="342820">has to be the same as the frequency of that
  kind.</span></p><p><span m="347010">So what are these
  frequencies?</span></p><p><span m="349490">We discussed that
  before.</span></p><p><span m="351320">The fraction of times at which
  transitions of this kind</span> <span m="355600">are observed is the fraction
  of time</span> <span m="358210">that we happen to be at that state, which is
  pi of i.</span></p><p><span m="364460">And out of the times that we are in
  that state, the fraction</span> <span m="368360">of time that transitions of
  that time happen is p of i.</span></p><p><span m="374040">So the overall
  frequency will be pi i times p of i.</span></p><p><span m="380420">And with
  the same argument, this is the frequency</span> <span m="383570">with which
  transitions of that kind</span> <span m="385290">are observed-- pi i plus 1
  times q i plus 1.</span></p><p><span m="394130">Since these two frequencies
  are the same,</span> <span m="397600">we get an equation that relates pi of i
  to pi of i plus 1,</span> <span m="404020">like this.</span></p><p><span
  m="408210">So this is the frequency that we observed here,</span> <span
  m="411159">of this transition.</span></p><p><span m="414010">And these are the
  frequencies of these transitions.</span></p><p><span m="418340">And they have
  to be equal.</span></p><p><span m="420680">This has a nice form, because it
  gives us a recursion.</span></p><p><span m="424270">If we knew pi i, we can
  calculate pi i plus 1 as such.</span></p><p><span m="444930">So it's a system
  of equations that's</span> <span m="447220">easier to solve than the original
  system</span> <span m="449250">of linear equations which we presented
  before</span> <span m="451310">for a general Markov chain.</span></p><p><span
  m="453140">But how do we get started?</span></p><p><span m="455380">If we knew
  pi of 0, then we could use it to find pi of 1.</span></p><p><span
  m="462870">Then from pi of 1, you can get pi of 2, pi of 3,
  etc.</span></p><p><span m="472630">But we don't know pi of
  0.</span></p><p><span m="475590">It's one more unknown.</span></p><p><span
  m="477620">It's an unknown and we need to actually use</span> <span
  m="479710">the extra normalization conditions</span> <span m="482410">that the
  sum of all the pi j, has to be equal to 1.</span></p><p><span m="489100">After
  we use that normalization condition,</span> <span m="491550">then we can find
  all of the pi by first solving for pi of 0.</span></p><p><span
  m="495791">How?</span></p><p><span m="498940">This can be returned pi 0 plus
  pi 1,</span> <span m="501860">which is pi 0 times p0 over q1 plus pi of 2,
  which</span> <span m="508670">is pi of 1 times p1 over q2, pi of 0 times p0
  times</span> <span m="516200">p1 over q1 times q2, which is pi 2, plus et
  cetera equals 1.</span></p><p><span m="527030">This equation allows us to find
  pi of 0.</span></p><p><span m="529890">And then we use this recursion to find
  pi of 1, pi of 2,</span> <span m="534140">pi 3, et cetera.</span></p>
uid: f6f20cbe427bd5f0316c5fb91d56867e
type: course
layout: video
---
