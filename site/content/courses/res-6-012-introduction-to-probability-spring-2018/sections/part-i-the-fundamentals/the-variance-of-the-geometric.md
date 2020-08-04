---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: sSWHT2kbkvc
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    title: Video-YouTube-Stream
    type: Video
    uid: ace7d129db835e388861ad31ab68de15
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/sSWHT2kbkvc/default.jpg'
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: f4173a1dc81d7e37fba62e172aa41242
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: sSWHT2kbkvc
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a69e01e09b5ac980e9108791dac27e14
  - id: sSWHT2kbkvc.srt
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-variance-of-the-geometric/sSWHT2kbkvc.srt
    title: 3play caption file
    type: null
    uid: da72ce9cbd3ecaa9784c04c49c70ba13
  - id: sSWHT2kbkvc.pdf
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-variance-of-the-geometric/sSWHT2kbkvc.pdf
    title: 3play pdf file
    type: null
    uid: d16c42e9bcb304163858979697a37183
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 58d2e430c3674832685b368ce428e5ce
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f6333c3f5b4b030111b2c9fba932c1a4
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S07-02_300k.mp4
    parent_uid: bd0c73e2b29898ec3772a4a24a5b972c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 45b72de61240bb22ab364962fb900a86
inline_embed_id: 75431649thevarianceofthegeometric64133513
order_index: 726
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-variance-of-the-geometric
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-variance-of-the-geometric
title: The Variance of the Geometric
transcript: >-
  <p><span m="700">In this segment, we will derive the formula for the</span>
  <span m="3320">variance of the geometric PMF.</span></p><p><span m="6470">The
  argument will be very much similar to the argument that</span> <span
  m="9470">we used to drive the expected value of the geometric
  PMF.</span></p><p><span m="13110">And it relies on the memorylessness
  properties of</span> <span m="15970">geometric random
  variables.</span></p><p><span m="18040">So let X be a geometric random
  variable with</span> <span m="20460">some parameter p.</span></p><p><span
  m="21990">The way to think about X is like the number of coin flips</span>
  <span m="26410">that it takes until we obtain heads for the first time,</span>
  <span m="29850">where p is the probability of heads at each
  toss.</span></p><p><span m="33360">Recall now the memorylessness
  property.</span></p><p><span m="36340">If I tell you that X is bigger than
  1--</span> <span m="38930">which means that the first trial was a
  failure---</span> <span m="42540">we obtained tails.</span></p><p><span
  m="44100">Given that event, the remaining number of tosses has</span> <span
  m="48640">the same geometric PMF as if we were just</span> <span
  m="52050">starting at this time.</span></p><p><span m="53740">So it has the
  same geometric PMF as the unconditional PMF</span> <span m="57570">of X. And
  this is the property that we exploited in order to</span> <span m="61380">find
  the expected value of X.</span></p><p><span m="64370">Now let us take this
  observation and add one to the</span> <span m="68480">random variables
  involved and turn this statement to the</span> <span m="72190">following
  version.</span></p><p><span m="74060">The conditional PMF of X--</span> <span
  m="76730">which is this random variable plus 1--</span> <span m="80030">is the
  same as the unconditional PMF of this</span> <span m="83670">random variable
  plus 1.</span></p><p><span m="85630">So it's the same statement as before
  except that we added 1.</span></p><p><span m="90260">One consequence of the
  memorylessness that we have</span> <span m="93360">already seen and exploited
  is that the expected value of X</span> <span m="97410">in the conditional
  universe where the first coin flip was</span> <span m="100560">wasted is equal
  to 1--</span> <span m="103560">that's the wasted coin flip--</span> <span
  m="105759">plus how long you expect to have to flip the coin until</span>
  <span m="109550">you obtain heads for the first time, starting</span> <span
  m="112600">from the second flip.</span></p><p><span m="114950">Since the
  conditional distribution of X in this</span> <span m="119009">universe is the
  same as the unconditional distribution of</span> <span m="122980">this random
  variable, it means that the corresponding</span> <span m="126140">expected
  value in this universe is going to be equal</span> <span m="130360">to the
  expected value of this random variable, which is 1</span> <span
  m="132890">plus the expected value of X. And by exactly the same</span> <span
  m="137430">argument, the random variable X squared has the same</span> <span
  m="143400">distribution in the conditional universe as the</span> <span
  m="148800">random variable X plus 1 squared in the</span> <span
  m="153400">unconditional universe.</span></p><p><span m="156970">So since X in
  the conditional universe has the same</span> <span m="160079">distribution as
  X plus 1, it means that X squared in the</span> <span m="163390">conditional
  universe has the same distribution as X plus 1</span> <span m="166920">squared
  in the unconditional universe.</span></p><p><span m="170510">So now let us
  take those facts and use a divide and conquer</span> <span m="174530">method
  to calculate the expected value of X squared.</span></p><p><span m="179690">We
  will use exactly the same method that we used in order</span> <span
  m="184120">to calculate the expected value.</span></p><p><span m="186430">We
  separate into two scenarios.</span></p><p><span m="188880">In one scenario, X
  is equal to 1.</span></p><p><span m="191850">And then we have the expected
  value of X squared given that</span> <span m="195730">X is equal to
  1.</span></p><p><span m="198220">And then we have another scenario--</span>
  <span m="201060">the scenario that X is bigger than 1.</span></p><p><span
  m="203900">And then we have the expected value of X squared given that</span>
  <span m="208340">X is bigger than 1.</span></p><p><span m="210579">So this is
  just the total expectation theorem.</span></p><p><span m="214060">Now let us
  calculate terms.</span></p><p><span m="215790">The probability that the first
  toss results in success, that</span> <span m="219230">X is equal to 1-- this
  is p.</span></p><p><span m="222040">And if X is equal to 1, then the value of
  X squared is also</span> <span m="226680">equal to 1.</span></p><p><span
  m="228230">And then there is probability 1 minus p that the first trial</span>
  <span m="232930">was not a success.</span></p><p><span m="234070">So we get to
  continue.</span></p><p><span m="236329">We have this conditional expectation
  here.</span></p><p><span m="238700">But it is equal to this
  unconditional</span> <span m="240780">expectation up there.</span></p><p><span
  m="242650">And now let us expand the terms in this quadratic and</span> <span
  m="247740">write this as expected value of X squared plus twice the</span>
  <span m="253070">expected value of X plus 1.</span></p><p><span m="258459">Now
  we know what this expected value here is.</span></p><p><span m="262089">The
  expected value of a geometric is just 1/p.</span></p><p><span m="266910">And
  what we're left with is an equation that involves a</span> <span
  m="271870">single unknown.</span></p><p><span m="273260">Namely, this quantity
  is the unknown.</span></p><p><span m="276150">And we can solve this linear
  equation for this unknown.</span></p><p><span m="279390">We carry out some
  algebra, which is not so</span> <span m="282500">interesting by
  itself.</span></p><p><span m="284360">And after we carry out the algebra, what
  we obtain is</span> <span m="289500">that the expected value of X squared is
  equal to 2 over p</span> <span m="295040">squared minus 1 over
  p.</span></p><p><span m="299020">And then we use the formula that the variance
  of a random</span> <span m="304190">variable is equal to the expected value of
  the square</span> <span m="309160">of that random variable minus the square
  of</span> <span m="313570">the expected value.</span></p><p><span
  m="316120">We already know what that expected value is.</span></p><p><span
  m="319050">We found the expected value of the square.</span></p><p><span
  m="321730">And putting all that together, we obtain a final
  answer.</span></p><p><span m="325440">And this is the expression for the
  variance of a geometric</span> <span m="328960">random
  variable.</span></p><p><span m="331100">It goes without saying that for this
  calculation to make</span> <span m="334090">sense, we need to assume that the
  parameter that we're</span> <span m="337530">dealing with is
  positive.</span></p><p>&nbsp;</p>
uid: bd0c73e2b29898ec3772a4a24a5b972c
type: course
layout: video
---
