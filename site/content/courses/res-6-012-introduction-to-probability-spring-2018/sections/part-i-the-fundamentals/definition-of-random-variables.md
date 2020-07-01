---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: vfqPpai_9jI
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    title: Video-YouTube-Stream
    type: Video
    uid: 9bc07bc8064349b07503cd1c99bcbb56
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/vfqPpai_9jI/default.jpg'
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c39252e09b6fafea058a4ece8efbfb73
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: vfqPpai_9jI
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 55d96151376c2b74efd8e6d511240b61
  - id: vfqPpai_9jI.srt
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/definition-of-random-variables/vfqPpai_9jI.srt
    title: 3play caption file
    type: null
    uid: dea0d800969af8a215fa57d5e092f683
  - id: vfqPpai_9jI.pdf
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/definition-of-random-variables/vfqPpai_9jI.pdf
    title: 3play pdf file
    type: null
    uid: 425678ae7e678053afa36002971e51bd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 80ddc6f45d7f3f582f92a829e0ff93ab
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 688ab671167318d6226a256bd98da550
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-02_300k.mp4
    parent_uid: e103df2d79382a5ac0762924fb427cfe
    title: Video-Internet Archive-MP4
    type: Video
    uid: 542859315b8e078034da6ff6a58d1554
inline_embed_id: 61598790definitionofrandomvariables21621131
order_index: 474
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: definition-of-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/definition-of-random-variables
title: Definition of Random Variables
transcript: >-
  <p><span m="700">We will now define the notion of a random
  variable.</span></p><p><span m="4110">Very loosely speaking, a random variable
  is a numerical</span> <span m="6970">quantity that takes random
  values.</span></p><p><span m="10180">But what does this
  mean?</span></p><p><span m="11410">We want to be a little more precise and I'm
  going to</span> <span m="14260">introduce the idea through an
  example.</span></p><p><span m="17140">Suppose that our sample space is a set
  of students labeled</span> <span m="22160">according to their
  names.</span></p><p><span m="23780">Or for simplicity, let's just label them
  as a, b, c, and d.</span></p><p><span m="33920">Our probabilistic experiment
  is to pick a student at random</span> <span m="37200">according to some
  probability law and then record their</span> <span m="41690">weight in
  kilograms.</span></p><p><span m="47700">So for example, suppose that the
  outcome of the experiment</span> <span m="51520">was this particular student,
  and the weight of</span> <span m="54600">that student is
  62.</span></p><p><span m="57430">Or it could be that the outcome of the
  experiment is</span> <span m="60370">this particular student, and that
  particular student has a</span> <span m="63980">weight of 75
  kilograms.</span></p><p><span m="67900">The weight of a particular student is
  a number, little w.</span></p><p><span m="71930">But let us think of the
  abstract concept of weight,</span> <span m="75280">something that we will
  denote by capital W. Weight is an</span> <span m="81170">object whose value is
  determined once you tell me</span> <span m="84700">the outcome of the
  experiment, once you tell me which student</span> <span m="88300">was
  picked.</span></p><p><span m="89370">In this sense, weight is really a
  function of the</span> <span m="93080">outcome of the
  experiment.</span></p><p><span m="94960">So think of weight as an abstract box
  that takes as</span> <span m="100440">input a student and produces a number,
  little w, which is the</span> <span m="111130">weight of that particular
  student.</span></p><p><span m="114650">Or more concretely, think of weight
  with a capital W as a</span> <span m="119220">procedure that takes a student,
  puts him or her on a</span> <span m="122820">scale, and reports the
  result.</span></p><p><span m="124840">In this sense, weight is an object of
  the same kind as the</span> <span m="128620">square root function that's
  sitting inside your computer.</span></p><p><span m="133740">The square root
  function is a function.</span></p><p><span m="136450">It's a subroutine,
  perhaps it is a piece of code, that takes</span> <span m="140660">as input a
  number, let's say the number 9, and produces</span> <span m="145460">another
  number.</span></p><p><span m="146750">In this case, it would be the number 3,
  which is the</span> <span m="150110">square root of 9.</span></p><p><span
  m="154300">Notice here the distinction that we will keep emphasizing</span>
  <span m="157660">over and over.</span></p><p><span m="159050">Square root of 9
  is a number.</span></p><p><span m="161190">It is the number
  3.</span></p><p><span m="163120">The box square root is a
  function.</span></p><p><span m="169320">Now, let us go back to our
  probabilistic experiment.</span></p><p><span m="172810">Note that a
  probabilistic experiment such as the one in</span> <span m="175470">our
  example can have several associated random variables.</span></p><p><span
  m="179720">For example, we could have another random variable</span> <span
  m="183290">denoted by capital H, which is the height of a student</span> <span
  m="188470">recorded in meters.</span></p><p><span m="193350">So if the outcome
  of the experiment, for example, was</span> <span m="197030">student a, then
  this random variable would take a value</span> <span m="201750">which is the
  height of that student, let's say it was 1.7.</span></p><p><span m="206690">Or
  if the outcome of the experiment was student c, then</span> <span
  m="210010">we would record the height of that student.</span></p><p><span
  m="212520">And let's say it turns out to be 1.8.</span></p><p><span
  m="215920">Once again, height with a capital H is an abstract</span> <span
  m="219540">object, a function whose value is determined once you tell
  me</span> <span m="224610">the outcome of the experiment.</span></p><p><span
  m="227840">Now, given some random variables, we can create new</span> <span
  m="231660">random variables as functions of the</span> <span
  m="234840">original random variables.</span></p><p><span m="236730">For
  example, consider the quantity defined as weight</span> <span
  m="242170">divided by height squared.</span></p><p><span m="245010">This
  quantity is the so-called body mass index, and it is</span> <span
  m="248930">also a function on the sample space.</span></p><p><span
  m="252860">Why is it a function on the sample space?</span></p><p><span
  m="255630">Well, because once an outcome of the experiment is</span> <span
  m="259540">determined, suppose that the outcome of the experiment was</span>
  <span m="262580">the blue student, then these two numbers, 62 and 1.7,
  are</span> <span m="266830">also determined.</span></p><p><span m="268180">And
  using those numbers, we can carry out this calculation</span> <span
  m="272650">and find the body mass index of that particular student,</span>
  <span m="276940">which in this case would be 21.5.</span></p><p><span
  m="280510">Or if it happened that this student was selected, then the</span>
  <span m="284960">body mass index would turn out to be some other
  number.</span></p><p><span m="288980">In this case, it would be
  23.</span></p><p><span m="291650">So again, we see that the body mass index
  can be viewed as an</span> <span m="295650">abstract concept defined by this
  formula.</span></p><p><span m="298820">But once an outcome is determined, then
  the body mass</span> <span m="302510">index is also
  determined.</span></p><p><span m="304330">And so the body mass index is really
  a function of which</span> <span m="308090">particular outcome was
  selected.</span></p><p><span m="312620">Let us now abstract from the previous
  discussion.</span></p><p><span m="316280">We have seen that random variables
  are abstract objects</span> <span m="321930">that associate a specific value,
  a particular number, to</span> <span m="326330">any particular outcome of a
  probabilistic experiment.</span></p><p><span m="330700">So in that sense,
  random variables are functions from</span> <span m="333760">the sample space
  to the real numbers.</span></p><p><span m="336690">They are numerical
  functions, but as numerical functions</span> <span m="339970">they can either
  take discrete values, for example the</span> <span m="342760">integers, or
  they can take continuous values, let's say</span> <span m="346200">on the real
  line.</span></p><p><span m="348260">For example, if your random variable is
  the number of</span> <span m="352200">heads in 10 consecutive coin tosses,
  this is a discrete</span> <span m="356250">random variable that takes values
  in the</span> <span m="358630">set from 0 to 10.</span></p><p><span
  m="361220">If your random variable is a measurement of the time at</span>
  <span m="365770">which something happened, and if your timer has
  infinite</span> <span m="370900">accuracy, then the timer reports a real
  number and we</span> <span m="375090">would have a continuous random
  variable.</span></p><p><span m="378710">In this lecture sequence and in the
  next few ones, we will</span> <span m="383830">concentrate on discrete random
  variables because they are</span> <span m="386730">easier to
  handle.</span></p><p><span m="388120">And then later on, we will move to a
  discussion of</span> <span m="390550">continuous random
  variables.</span></p><p><span m="393060">Throughout, we want to keep noting
  this very important</span> <span m="398230">distinction that I already brought
  in the discussion for</span> <span m="402390">a particular example, but it
  needs to be emphasized and</span> <span
  m="406260">re-emphasized.</span></p><p><span m="407750">That we make a
  distinction between random variables,</span> <span m="410540">which are
  abstract objects.</span></p><p><span m="412030">They are functions on the
  sample space and they are</span> <span m="414560">denoted by uppercase
  letters.</span></p><p><span m="417270">In contrast, we will use lower case
  letters to indicate</span> <span m="421340">numerical values of the random
  variables.</span></p><p><span m="425000">So little x is always a real number,
  as opposed to the</span> <span m="429290">random variable, which is a
  function.</span></p><p><span m="433720">One point that we made earlier is that
  for the same</span> <span m="436670">probabilistic experiment we can have
  several random</span> <span m="439490">variables associated with that
  experiment.</span></p><p><span m="442400">And we can also combine random
  variables to</span> <span m="445080">form new random
  variables.</span></p><p><span m="447470">In general, a function of random
  variables has numerical</span> <span m="452810">values that are determined by
  the numerical values of the</span> <span m="457060">original random
  variables.</span></p><p><span m="458870">And so, ultimately, they are
  determined by the outcome of</span> <span m="462070">the
  experiment.</span></p><p><span m="463140">So a function of random variables
  has a numerical</span> <span m="465780">value which is completely determined
  by the outcome of</span> <span m="468409">the experiment.</span></p><p><span
  m="469159">And so a function of random variables is</span> <span
  m="472080">also a random variable.</span></p><p><span m="474440">As an
  example, we could think of two random variables, X and</span> <span
  m="478980">Y, associated with the same probabilistic
  experiment.</span></p><p><span m="482700">And then define a random variable,
  let's say X plus Y.</span></p><p><span m="487060">What does that
  mean?</span></p><p><span m="488230">X plus Y is a random variable that takes
  the value little x</span> <span m="497770">plus little y when the random
  variable capital X takes the</span> <span m="505560">value little x and
  capital Y takes the value little y.</span></p><p><span m="516820">So X and Y
  are random variables.</span></p><p><span m="519400">X plus Y is another random
  variable.</span></p><p><span m="522140">X and Y will take numerical values
  once the outcome of the</span> <span m="525540">experiment has been
  obtained.</span></p><p><span m="527510">And if the numerical values that they
  take are little x</span> <span m="530740">and little y, then the random
  variable X plus Y will take</span> <span m="535160">the numerical value little
  x plus little y.</span></p><p><span m="540040">So we can now move on and start
  doing some interesting</span> <span m="543700">things about random
  variables.</span></p><p><span m="545820">Characterize them, describe them,
  give some examples, and</span> <span m="549130">introduce some new concepts
  associated with them.</span></p><p>&nbsp;</p>
uid: e103df2d79382a5ac0762924fb427cfe
type: courses
layout: video
---
