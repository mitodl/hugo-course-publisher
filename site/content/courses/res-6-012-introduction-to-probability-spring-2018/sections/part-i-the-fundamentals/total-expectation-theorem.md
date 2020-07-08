---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: GnEyIawrWBg
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    title: Video-YouTube-Stream
    type: Video
    uid: 1a5e8fb497be3c30111cb5fa62cbaa28
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/GnEyIawrWBg/default.jpg'
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: f13bbe5dc9cc30f9287d7cdbc5b0043b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: GnEyIawrWBg
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1ee59d1aabe4eb437242a0beaa57b87a
  - id: GnEyIawrWBg.srt
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-expectation-theorem/GnEyIawrWBg.srt
    title: 3play caption file
    type: null
    uid: 34ac8bbd0d3d4299e83c363b9322bed3
  - id: GnEyIawrWBg.pdf
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-expectation-theorem/GnEyIawrWBg.pdf
    title: 3play pdf file
    type: null
    uid: db6c596edbb7c0412e5b1aa9461ac127
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9a15d0f56fe3cb42c1ae77cecd248984
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8148a3c4a5a29f63ebc0c73b876e0ae3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L06-05_300k.mp4
    parent_uid: b4c52bf97a50bfc1f82773027bd5b28a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 70543f1fac412339a302c16b42390895
inline_embed_id: 65526244totalexpectationtheorem75365558
order_index: 609
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: total-expectation-theorem
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-expectation-theorem
title: Total Expectation Theorem
transcript: >-
  <p><span m="290">An important reason why conditional probabilities are</span>
  <span m="3030">very useful is that they allow us to divide and
  conquer.</span></p><p><span m="6540">They allow us to split complicated
  probability modes</span> <span m="9550">into simpler submodels that we can
  then</span> <span m="12370">analyze one at a time.</span></p><p><span
  m="14410">Let me remind you of the Total Probability Theorem that has</span>
  <span m="18200">his particular flavor.</span></p><p><span m="20690">We divide
  our sample space into three disjoint events--</span> <span m="25060">A1, A2,
  and A3.</span></p><p><span m="27020">And these events form a partition of the
  sample space,</span> <span m="29830">that is, they exhaust all
  possibilities.</span></p><p><span m="32299">They correspond to three
  alternative scenarios, one of</span> <span m="34960">which is going to
  occur.</span></p><p><span m="36550">And then we may be interested in a certain
  event B. That</span> <span m="39610">event B may occur under either
  scenario.</span></p><p><span m="43180">And the Total Probability Theorem tells
  us that we can</span> <span m="46060">calculate the probability of event B by
  considering the</span> <span m="49760">probability that it occurs under any
  given scenario and</span> <span m="54700">weigh those probabilities according
  to the probabilities</span> <span m="58080">of the different
  scenarios.</span></p><p><span m="60950">Now, let us bring random variables
  into the picture.</span></p><p><span m="64129">Let us fix a particular
  value--</span> <span m="66750">little x--</span> <span m="68360">and let the
  event B be the event that the random variable</span> <span m="74110">takes on
  this particular value.</span></p><p><span m="77880">Let us now translate the
  Total Probability</span> <span m="80490">Theorem to this
  situation.</span></p><p><span m="83100">First, the picture will look slightly
  different.</span></p><p><span m="86650">Our event B has been replaced by the
  particular event that</span> <span m="89560">we're now
  considering.</span></p><p><span m="92229">Now, what is this
  probability?</span></p><p><span m="95210">The probability that event B occurs,
  having fixed the</span> <span m="99229">particular choice of little x, is the
  value of PMF at that</span> <span m="103770">particular x.</span></p><p><span
  m="105670">How about this probability here?</span></p><p><span m="108100">This
  is the probability that the random variable, capital</span> <span
  m="111220">X, takes on the value little x--</span> <span m="113870">that's
  what a PMF is--</span> <span m="116100">but in the conditional
  universe.</span></p><p><span m="118090">So we're dealing with a conditional
  PMF.</span></p><p><span m="120980">And so on with the other
  terms.</span></p><p><span m="123700">So this equation here is just the usual
  Total Probability</span> <span m="128389">Theorem but translated into PMF
  notation.</span></p><p><span m="133600">Now this version of the Total
  Probability Theorem, of</span> <span m="137220">course, is true for all values
  of little x.</span></p><p><span m="143520">This means that we can now multiply
  both sides of this</span> <span m="147450">equation by x and them sum over
  all</span> <span m="155530">possibles choices of x.</span></p><p><span
  m="159200">We recognize that here we have the expected value of the</span>
  <span m="162680">random variable X.</span></p><p><span m="164770">Now, we do
  the same thing to the right hand side.</span></p><p><span m="168620">We
  multiply by x.</span></p><p><span m="170610">And then we sum over all possible
  values of x.</span></p><p><span m="176820">This is going to be the first
  term.</span></p><p><span m="178950">And then we will have similar
  terms.</span></p><p><span m="182020">Now, what do we have
  here?</span></p><p><span m="183600">This expression is just the conditional
  expectation of the</span> <span m="188500">random variable X under the
  scenario that</span> <span m="192330">event A1 has
  occurred.</span></p><p><span m="194820">So what we have established is this
  particular formula, which</span> <span m="200920">is called the Total
  Expectation Theorem.</span></p><p><span m="204230">It tells us that the
  expected value of a random variable can</span> <span m="208190">be calculated
  by considering different scenarios.</span></p><p><span m="211810">Finding the
  expected value under each of the possible</span> <span m="215130">scenarios
  and weigh them.</span></p><p><span m="217660">Weigh the scenarios according to
  their respective</span> <span m="220400">probabilities.</span></p><p><span
  m="221610">The picture is like this.</span></p><p><span m="223350">Under each
  scenario, the random variable X has a</span> <span m="226200">certain
  conditional expectation.</span></p><p><span m="228640">We take all these into
  account.</span></p><p><span m="230880">We weigh them according to their
  corresponding</span> <span m="233329">probabilities.</span></p><p><span
  m="234300">And we add them up to find the expected value of
  X.</span></p><p><span m="238290">So we can divide and
  conquer.</span></p><p><span m="240750">We can replace a possibly complicated
  calculation of an</span> <span m="244950">expected value by hopefully simpler
  calculations under</span> <span m="249720">each one of possible
  scenarios.</span></p><p><span m="252670">Let me illustrate the idea by a
  simple example.</span></p><p><span m="258810">Let us consider this PMF, and
  let us try to calculate the</span> <span m="262170">expected value of the
  associated random variable.</span></p><p><span m="265320">One way to divide
  and conquer is to define an event, A1,</span> <span m="270950">which is that
  our random variable takes values in this</span> <span m="273850">set, and
  another event, A2, which is that the random</span> <span m="277900">variable
  takes values in that set.</span></p><p><span m="281070">Let us now apply the
  Total Expectations Theorem.</span></p><p><span m="283540">Let us calculate all
  the terms that are required.</span></p><p><span m="286330">First, we find the
  probabilities of</span> <span m="288070">the different
  scenarios.</span></p><p><span m="289550">The probability of event A1 is 1/9
  plus 1/9 plus</span> <span m="293600">1/9 which is 1/3.</span></p><p><span
  m="295950">And the probability of event A2 is 2/9 plus 2/9 plus 2/9</span>
  <span m="302450">which adds up to 2/3.</span></p><p><span m="305580">How about
  conditional expectations?</span></p><p><span m="309320">In a universe where
  event A1 one has occurred, only these</span> <span m="313090">three values are
  possible.</span></p><p><span m="314760">They had equal probabilities, so in
  the conditional model,</span> <span m="319030">they will also have equal
  probabilities.</span></p><p><span m="320910">So we will have a uniform
  distribution over</span> <span m="323170">the set {0, 1,
  2}.</span></p><p><span m="325320">By symmetry, the expected value is
  going</span> <span m="327660">to be in the middle.</span></p><p><span
  m="329110">So this expected value is equal to 1.</span></p><p><span
  m="331880">And by a similar argument, the expected value of X under the</span>
  <span m="336030">second scenario is going to be the midpoint of this
  range,</span> <span m="340090">which is equal to 7.</span></p><p><span
  m="341940">And now we can apply the Total Probability Theorem and write</span>
  <span m="347440">that the expected value of X is equal to the probability
  of</span> <span m="351620">the first scenario times the expected value under
  the first</span> <span m="355520">scenario plus the probability of the second
  scenario times</span> <span m="360440">the expected value under the second
  scenario.</span></p><p><span m="365040">In this case, by breaking down the
  problem in these two</span> <span m="368050">subcases, the calculations that
  were required were</span> <span m="371560">somewhat simpler than if you were
  to proceed directly.</span></p><p><span m="376420">Of course, this is a rather
  simple example.</span></p><p><span m="378990">But as we go on with this
  course, we will apply the</span> <span m="382330">Total Probability Theorem in
  much more interesting and</span> <span m="385440">complicated
  situations.</span></p><p>&nbsp;</p>
uid: b4c52bf97a50bfc1f82773027bd5b28a
type: courses
layout: video
---
