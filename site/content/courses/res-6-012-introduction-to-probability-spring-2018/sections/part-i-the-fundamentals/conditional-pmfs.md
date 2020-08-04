---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: T_Q3M_HV94w
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    title: Video-YouTube-Stream
    type: Video
    uid: d65b2e015dd2fc6a67fb81e505512930
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/T_Q3M_HV94w/default.jpg'
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d3bba4fbbbc0409baa630cb1cc2f9abf
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: T_Q3M_HV94w
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4b002cf3556f53cad082c97ec7b9a632
  - id: T_Q3M_HV94w.srt
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pmfs/T_Q3M_HV94w.srt
    title: 3play caption file
    type: null
    uid: 2d4ae70ba3f198b4616920edbcea4ed3
  - id: T_Q3M_HV94w.pdf
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pmfs/T_Q3M_HV94w.pdf
    title: 3play pdf file
    type: null
    uid: c602b3326c65d8dec59155406ac1e6d2
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f558e3aec6f8b415138621fbc2f1eaa0
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1d334c4ecd7eaaf72b61686ffc5c23ab
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L07-02_300k.mp4
    parent_uid: 1f1d7ddc82f8522930c4778638fa5915
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5e9ca1949457282d642d80b8f84c78fe
inline_embed_id: 37148914conditionalpmfs79665406
order_index: 654
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: conditional-pmfs
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pmfs
title: Conditional PMFs
transcript: >-
  <p><span m="640">We have already introduced the concept of the conditional
  PMF</span> <span m="3900">of a random variable, X, given an event A. We will
  now</span> <span m="8720">consider the case where we condition on the value
  of</span> <span m="12150">another random variable Y. That is, we let A be the
  event</span> <span m="18690">that some other random variable, Y, takes on
  a</span> <span m="22500">specific value, little y.</span></p><p><span
  m="26310">In this case, we're talking about a conditional</span> <span
  m="28760">probability of the form shown here.</span></p><p><span m="33240">The
  conditional probability--</span> <span m="34420">that X takes on a specific
  value, given that the random</span> <span m="38110">variable Y takes on
  another specific value.</span></p><p><span m="42160">And we use this notation
  to indicate those conditional</span> <span
  m="46300">probabilities.</span></p><p><span m="48200">As usual, the subscripts
  indicate the situation that</span> <span m="52750">we're dealing
  with.</span></p><p><span m="54070">That is, we're dealing with the
  distribution of the random</span> <span m="56280">variable X and we're
  conditioning on values of the</span> <span m="59310">other random variable,
  Y.</span></p><p><span m="62260">Using the definition now of conditional
  probabilities this</span> <span m="65990">can be written as the probability
  that both events</span> <span m="70020">happen divided by the probability of
  the</span> <span m="75450">conditioning event.</span></p><p><span m="81840">We
  can turn this expression into PMF notation.</span></p><p><span m="85490">And
  this leads us to this definition</span> <span m="88330">of conditional
  PMFs.</span></p><p><span m="90390">The conditional PMF is defined to be the
  ratio</span> <span m="94289">of the joint PMF--</span> <span m="95900">this is
  the probability that we have here--</span> <span m="98440">by the
  corresponding marginal PMF.</span></p><p><span m="101330">And this is the
  probability that we have here.</span></p><p><span m="104200">Now, remember
  that conditional probabilities are only defined</span> <span m="107190">when
  the conditioning event has a positive probability,</span> <span
  m="111210">when this denominator is positive.</span></p><p><span
  m="113770">Similarly, the conditional PMF will only be defined for
  those</span> <span m="118200">little y that have positive probability of
  occurring.</span></p><p><span m="123990">Now, the conditional PMF is a
  function of two arguments,</span> <span m="128680">little x and little
  y.</span></p><p><span m="130570">But the best way of thinking about the
  conditional PMF is</span> <span m="134500">that we fix the value, little y,
  and then view this</span> <span m="141270">expression here as a function of
  x.</span></p><p><span m="145100">As a function of x, it gives us the
  probabilities of the</span> <span m="148390">different x's that may occur in
  the conditional universe.</span></p><p><span m="152690">And these
  probabilities must, of course, sum to 1.</span></p><p><span m="157480">Again,
  we're keeping y fixed.</span></p><p><span m="159579">We live in a conditional
  universe where y takes on a</span> <span m="162510">specific
  value.</span></p><p><span m="163870">And here we have the probabilities of the
  different</span> <span m="166110">x's in that universe.</span></p><p><span
  m="167840">And these sum to 1.</span></p><p><span m="172130">Note that if we
  change the value of little y, we will, of</span> <span m="176370">course, get
  a different conditional PMF for the random</span> <span m="179740">variable X.
  So what we're really dealing with in this</span> <span m="184090">instance is
  that we have a family of conditional PMFs,</span> <span m="188910">one
  conditional PMF for every possible value of little y.</span></p><p><span
  m="193500">And for every possible value of little y, we have a</span> <span
  m="196170">legitimate PMF who's values add to 1.</span></p><p><span
  m="200380">Let's look at an example.</span></p><p><span m="202320">Consider
  the joint PMF given in this table.</span></p><p><span m="205630">Let us
  condition on the event that Y is equal to 2, which</span> <span
  m="211690">corresponds to this row in the diagram.</span></p><p><span
  m="219520">We need to know the value of the marginal at this point, so</span>
  <span m="224829">we start by calculating the probability of Y at value
  2.</span></p><p><span m="230800">And this is found by adding the entries
  in</span> <span m="233560">this row of the table.</span></p><p><span
  m="235400">And we find that this is 5 over 20.</span></p><p><span
  m="238920">Then we can start calculating entries of</span> <span
  m="241700">the conditional PMF.</span></p><p><span m="243730">So for example,
  the probability that X takes on</span> <span m="249230">the value of 1 given
  that Y takes the value of 2, it is</span> <span m="254580">going to be this
  entry, which is 0, divided by 5/20, which</span> <span m="260320">gives us
  0.</span></p><p><span m="262360">We can find the next entry, the probability
  of X taking</span> <span m="267710">the value of 2, given that Y takes the
  value of 2 will be</span> <span m="273180">this entry, 1/20 divided by
  5/20.</span></p><p><span m="278400">So it's going to be
  1/5.</span></p><p><span m="282990">And we can continue with the other two
  entries.</span></p><p><span m="286180">And we can actually even plot the
  result once we're done.</span></p><p><span m="293490">And what we have is that
  at 1, we have a probability of 0.</span></p><p><span m="299560">At 2, we have
  a probability of 1/5.</span></p><p><span m="307588">At 3, we have a
  probability of 3/20 divided</span> <span m="313200">5/20, which is
  3/5.</span></p><p><span m="319070">And at 4, we have, again, a probability of
  1/5.</span></p><p><span m="326520">So what we have plotted here is the
  conditional PMF.</span></p><p><span m="331040">It's a PMF in the variable x,
  where x ranges over the</span> <span m="336060">possible values, but where we
  have fixed the value of y to</span> <span m="340710">be equal to
  2.</span></p><p><span m="343120">Now, we could have found this conditional PMF
  even faster</span> <span m="346560">without doing any divisions by following
  the intuitive</span> <span m="350600">argument that we have used
  before.</span></p><p><span m="353200">We live in this conditional
  universe.</span></p><p><span m="355740">We have conditioned on Y being equal
  to 2.</span></p><p><span m="359150">The conditional probabilities will have
  the same proportions</span> <span m="363740">as the original probabilities,
  except that they needed to be</span> <span m="366660">scaled so that they add
  to 1.</span></p><p><span m="369050">So they should be in the proportions of 0,
  1, 3, 1.</span></p><p><span m="373160">And for these to add to 1, we need to
  put everywhere a</span> <span m="377670">denominator of 5.</span></p><p><span
  m="379640">So the proportions are indeed 0, 1, 3, and 1.</span></p><p><span
  m="384470">Pictorially, the conditional PMF has the same form as the</span>
  <span m="390730">corresponding slice of the joint PMF, except, again,
  that</span> <span m="396640">the entries of that slice are renormalized so
  that the</span> <span m="400159">entries add to 1.</span></p><p><span
  m="402810">And finally, an observation--</span> <span m="405480">we can take
  the definition of the conditional PMF and turn</span> <span m="409280">it
  around by moving the denominator to the other side</span> <span m="413300">and
  obtain a formula, which is a version of the</span> <span
  m="417040">multiplication rule.</span></p><p><span m="419450">The probability
  that X takes a value little x and Y takes a</span> <span m="423850">value
  little y is the product or the probability that Y</span> <span
  m="427880">takes this particular value times the conditional</span> <span
  m="431080">probability that X takes on the particular value little x,</span>
  <span m="435420">given that Y takes on the particular value little
  y.</span></p><p><span m="439970">We also have a symmetrical relationship if we
  interchange</span> <span m="443960">the roles of X and Y. As we discussed
  earlier in this</span> <span m="449430">course, the multiplication rule can be
  used to specify</span> <span m="452520">probability models.</span></p><p><span
  m="454210">One way of modeling two random variables is by</span> <span
  m="456990">specifying the joint PMF.</span></p><p><span m="459580">But we now
  have an alternative, indirect, way</span> <span m="463060">using the
  multiplication rule.</span></p><p><span m="465260">We can first specify the
  distribution of Y and then</span> <span m="469580">specify the conditional PMF
  of X for any given</span> <span m="474200">value of little
  y.</span></p><p><span m="476510">And this completely determines the joint PMF,
  and so we have</span> <span m="480540">a full probability
  model.</span></p><p><span m="484560">We can also provide similar definitions
  of conditional</span> <span m="487540">PMFs for the case where we're dealing
  with more than two</span> <span m="490460">random
  variables.</span></p><p><span m="492120">In this case, notation is pretty
  self-explanatory.</span></p><p><span m="496080">By looking at this expression
  here, you can probably guess</span> <span m="501930">that this stands for the
  probability that random</span> <span m="506230">variable X takes on a specific
  value, conditional on the</span> <span m="511720">random variables Y and Z
  taking on some</span> <span m="516380">other specific
  values.</span></p><p><span m="518520">Using the definition of conditional
  probabilities,</span> <span m="521429">this is the probability that all events
  happen divided by</span> <span m="528270">the probability of the conditioning
  event, which, in</span> <span m="531810">our case, is the event that Y takes
  on a specific value and</span> <span m="536930">simultaneously, Z takes
  another specific value.</span></p><p><span m="541280">In PMF notation, this is
  the ratio of the joint PMF of the</span> <span m="547080">three random
  variables together, divided by the joint</span> <span m="552000">PMF of the
  two random variables Y and Z. As another</span> <span m="559670">example, we
  could have an expression like this, which,</span> <span m="564280">again,
  stands for the probability that these two</span> <span m="568370">random
  variables take on specific values, conditional</span> <span m="575120">on this
  random variable taking on another value.</span></p><p><span
  m="581530">Finally, we can have versions of the multiplication rule for</span>
  <span m="585020">the case where we're dealing with more</span> <span
  m="587460">than two random variables.</span></p><p><span m="589360">Recall the
  usual multiplication rule.</span></p><p><span m="591770">For three events
  happening simultaneously, let's apply</span> <span m="595580">this
  multiplication rule for the case where the event, A,</span> <span
  m="599430">stands for the event that the random variable X takes on a</span>
  <span m="604490">specific value.</span></p><p><span m="606050">Let B be the
  event that Y takes on a specific value, and</span> <span m="611160">C be the
  event that the random variable Z takes</span> <span m="615600">on a specific
  value.</span></p><p><span m="617470">Then we can take this relation, the
  multiplication</span> <span m="620720">rule, and translate it into PMF
  notation.</span></p><p><span m="623820">The probability that all three events
  happen is equal to the</span> <span m="627470">product of the probability that
  the first event happens.</span></p><p><span m="632690">Then we have the
  conditional probability that the second</span> <span m="636000">event happens
  given that the first happened, times the</span> <span m="639550">conditional
  probability that the third event happens--</span> <span m="643270">this one--
  given that the first</span> <span m="645210">two events have
  happened.</span></p><p>&nbsp;</p>
uid: 1f1d7ddc82f8522930c4778638fa5915
type: course
layout: video
---
