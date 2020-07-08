---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2_KBeHiUDiY
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    title: Video-YouTube-Stream
    type: Video
    uid: 819afd33bcbc7a4cf634d65569b7d49f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2_KBeHiUDiY/default.jpg'
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 17b7266a1b150b67251b60120a0e6994
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 2_KBeHiUDiY
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 93a51a242ef77d54eda16f56b9afae10
  - id: 2_KBeHiUDiY.srt
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pmfs-expectations-given-an-event/2_KBeHiUDiY.srt
    title: 3play caption file
    type: null
    uid: 6ec001bb9ed5409162246ae556d64de7
  - id: 2_KBeHiUDiY.pdf
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pmfs-expectations-given-an-event/2_KBeHiUDiY.pdf
    title: 3play pdf file
    type: null
    uid: 3c85de6df0c70a4da5e7ca9b62853778
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c1ebf00ca530e325739cdfbd35235c75
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 974b16ee334eb60f2a4389c0823cb898
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L06-04_300k.mp4
    parent_uid: 5b77e7b6eb582f104942600ded5cc156
    title: Video-Internet Archive-MP4
    type: Video
    uid: 9e0984eae077e3b4d8ff762011834e8e
inline_embed_id: 13072157conditionapmfsexpectationsgivenanevent21244879
order_index: 600
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: conditional-pmfs-expectations-given-an-event
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-pmfs-expectations-given-an-event
title: Conditional PMFs & Expectations Given an Event
transcript: >-
  <p><span m="280">We now move to a new topic--</span> <span
  m="1990">conditioning.</span></p><p><span m="3500">Every probabilistic concept
  or probabilistic fact has a</span> <span m="7610">conditional
  counterpart.</span></p><p><span m="10080">As we have seen before, we can start
  with a probabilistic</span> <span m="12960">model and some initial
  probabilities.</span></p><p><span m="15380">But then if we are told that the
  certain event has</span> <span m="18170">occurred, we can revise our model and
  consider conditional</span> <span m="21620">probabilities that take into
  account the available</span> <span m="24560">information.</span></p><p><span
  m="26310">But as a consequence, the probabilities associated with</span> <span
  m="29430">any given random variable will also have to be
  revised.</span></p><p><span m="33530">So a PMF will have to be changed to a
  conditional PMF.</span></p><p><span m="37930">Let us see what is
  involved.</span></p><p><span m="40050">Consider a random variable X with some
  given PMF, whose</span> <span m="45450">values, of course, sum to 1, as must
  be true</span> <span m="48420">for any valid PMF.</span></p><p><span
  m="50330">We are then told that a certain</span> <span m="52650">event, A, has
  occurred.</span></p><p><span m="55450">In that case, the event that X is equal
  to--</span> <span m="59130">little x--</span> <span m="60880">will now have a
  conditional probability of this form.</span></p><p><span m="67380">We will use
  this notation here to denote the conditional</span> <span
  m="72700">probability that the random variable takes the</span> <span
  m="74920">value little x.</span></p><p><span m="77560">Notice that the
  subscripts are used to indicate what we're</span> <span m="82710">talking
  about.</span></p><p><span m="83880">In this case, we are talking about the
  random variable X in</span> <span m="87900">a model where event A is known to
  have occurred.</span></p><p><span m="92420">Of course, for this conditional
  probability to be</span> <span m="94860">well defined, we will have to assume
  that the probability of</span> <span m="99950">A is
  positive.</span></p><p><span m="105390">This conditional PMF is like an
  ordinary PMF, except that</span> <span m="110190">it applies to a new or
  revised conditional model.</span></p><p><span m="114880">As such, its entries
  must also sum to 1.</span></p><p><span m="120200">Now the random variable X
  has a certain mean, expected</span> <span m="124630">value, which is defined
  the usual way.</span></p><p><span m="128180">In the conditional model, the
  random variable X will also</span> <span m="131930">have a
  mean.</span></p><p><span m="133220">It is called the conditional mean or the
  conditional</span> <span m="137340">expectation.</span></p><p><span
  m="138700">And it is defined the same way as in the original case,</span>
  <span m="142980">except that now the calculation involves the</span> <span
  m="146079">conditional probabilities, or the conditional
  PMF.</span></p><p><span m="150770">Finally, as we discussed some time ago, a
  conditional</span> <span m="154860">probability model is just another
  probability model,</span> <span m="159300">except that it applies to a new
  situation.</span></p><p><span m="161860">So any fact about probability
  models--</span> <span m="164250">any theorem that we derive--</span> <span
  m="166470">must remain true in the conditional model as
  well.</span></p><p><span m="170060">As an example, the expected value rule
  will have to remain</span> <span m="174380">true in the conditional model,
  except that, of course, in the</span> <span m="178530">conditional model, we
  will have to use the conditional</span> <span m="181450">probabilities instead
  of the original probabilities.</span></p><p><span m="185380">So to summarize,
  conditional models and conditional PMFs</span> <span m="189860">are just like
  ordinary models and ordinary PMFs, except that</span> <span
  m="194910">probabilities are replaced throughout by conditional</span> <span
  m="198610">probabilities.</span></p><p><span m="201410">Let us now look at an
  example.</span></p><p><span m="204930">Consider a random variable, which in
  this case, is</span> <span m="207630">uniform, takes values from 1 up to
  4.</span></p><p><span m="210510">So each one of the possible values has</span>
  <span m="213070">probability 1 over 4.</span></p><p><span m="215930">For this
  random variable, we can calculate the expected</span> <span m="218700">value,
  which by symmetry is going to be the midpoint.</span></p><p><span
  m="222100">So it is equal to 2 and 1/2.</span></p><p><span m="225690">We can
  also calculate the variance.</span></p><p><span m="228380">And here we can
  apply the formula that we</span> <span m="230870">have derived
  earlier--</span> <span m="232350">1/2 times b minus a times b minus a plus
  2.</span></p><p><span m="238940">And in this case, it's 1 over 12 times b
  minus a is 4 minus</span> <span m="245150">1, which is 3.</span></p><p><span
  m="246980">And the next term is 5.</span></p><p><span m="249750">And after we
  simplify, this is 5 over 4.</span></p><p><span m="255970">Suppose that now
  somebody tells us that event A has</span> <span m="260110">occurred, where
  event A is that the random variable X</span> <span m="264270">takes values in
  the range 2, 3, 4.</span></p><p><span m="269610">What happens
  now?</span></p><p><span m="270730">What is the conditional
  PMF?</span></p><p><span m="272930">In the conditional model, we are told that
  the value of 1</span> <span m="275960">did not occur, so this probability is
  going to be 0.</span></p><p><span m="280940">The other three values are still
  possible.</span></p><p><span m="283450">What are their conditional
  probabilities?</span></p><p><span m="285740">Well, these three values had
  equal probabilities in the</span> <span m="288490">original model, so they
  should have equal probabilities in</span> <span m="292810">the conditional
  model as well.</span></p><p><span m="295970">And in order for probabilities to
  sum to 1, of course, these</span> <span m="299150">probabilities will have to
  be 1/3.</span></p><p><span m="301780">So this is the conditional PMF of our
  random variable, given</span> <span m="305710">this new or additional
  information about the outcome.</span></p><p><span m="311660">The expected
  value of the random variable X in the</span> <span m="315440">conditional
  universe--</span> <span m="316750">that is, the conditional
  expectation--</span> <span m="319110">is just the ordinary expectation but
  applied to the</span> <span m="322590">conditional model.</span></p><p><span
  m="323970">In this conditional model, by symmetry, the expected value</span>
  <span m="327800">will have to be 3, the midpoint of the
  distribution.</span></p><p><span m="332170">And we can also calculate the
  conditional variance.</span></p><p><span m="337130">This is a notation that we
  have not yet defined, but at</span> <span m="340190">this point, it should be
  self-explanatory.</span></p><p><span m="342840">It is just the variance of X
  but calculated in the</span> <span m="346970">conditional model using
  conditional probabilities.</span></p><p><span m="350770">We can calculate this
  variance using once more the formula</span> <span m="354140">for the variance
  of a uniform distribution, but we can also</span> <span m="357790">do it
  directly.</span></p><p><span m="361040">So the variance is the expected value
  of the squared</span> <span m="366420">distance from the
  mean.</span></p><p><span m="369290">So with probability 1/3, our random
  variable will take a</span> <span m="374100">value of 4, which is one unit
  apart from the mean, or more</span> <span m="380800">explicitly, we have this
  term.</span></p><p><span m="383220">With probability 1/3, our random
  variable</span> <span m="385830">takes a value of 3.</span></p><p><span
  m="388850">And with probability 1/3, our random variable takes the</span>
  <span m="393170">value of 2.</span></p><p><span m="397590">This term is
  0.</span></p><p><span m="399570">This is 1 times 1/3.</span></p><p><span
  m="401380">From here we get another 1 times 1/3.</span></p><p><span
  m="404960">So adding up, we obtain that the variance is
  2/3.</span></p><p><span m="410900">Notice that the variance in the conditional
  model is</span> <span m="413880">smaller than the variance that we had in the
  original model.</span></p><p><span m="416890">And this makes
  sense.</span></p><p><span m="418770">In the conditional model, there is less
  uncertainty than</span> <span m="421670">there used to be in the original
  model.</span></p><p><span m="424340">And this translates into a reduction in
  the variance.</span></p><p><span m="428710">To conclude, there is nothing
  really different when we deal</span> <span m="433750">with conditional PMFs,
  conditional expectations, and</span> <span m="436740">conditional
  variances.</span></p><p><span m="438050">They are just like the ordinary PMFs,
  expectations,</span> <span m="441770">and variances, except that we have to
  use the conditional</span> <span m="445650">probabilities throughout instead
  of the original</span> <span m="448500">probabilities.</span></p><p>&nbsp;</p>
uid: 5b77e7b6eb582f104942600ded5cc156
type: courses
layout: video
---
