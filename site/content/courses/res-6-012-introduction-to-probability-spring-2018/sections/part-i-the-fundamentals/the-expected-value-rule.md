---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: gB5TCCfF6e4
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    title: Video-YouTube-Stream
    type: Video
    uid: bd7b1ef24c8d4b0c7ce746986c4b0831
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/gB5TCCfF6e4/default.jpg'
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 85163616431e3c8132c28eef05aee89d
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: gB5TCCfF6e4
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8b1747df583cd2fbde1d0be50e6cec76
  - id: gB5TCCfF6e4.srt
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-expected-value-rule/gB5TCCfF6e4.srt
    title: 3play caption file
    type: null
    uid: 31234379788e9c4dc03d71aaad23c46f
  - id: gB5TCCfF6e4.pdf
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-expected-value-rule/gB5TCCfF6e4.pdf
    title: 3play pdf file
    type: null
    uid: b801f977d5bf2fd3bb7c161043cfe4dd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 71e03d1cf949a9189879f4890f3f3f5b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a8bdfe2572d6f774b27e72c5c0fcb843
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-10_300k.mp4
    parent_uid: e658bf70eb70fcb817d59cd879820b82
    title: Video-Internet Archive-MP4
    type: Video
    uid: ce5f92298b948c6ed50fb57d649c82cb
inline_embed_id: 95346927theexpectedvaluerule76830835
order_index: 546
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-expected-value-rule
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-expected-value-rule
title: The Expected Value Rule
transcript: >-
  <p><span m="820">In this segment, we discuss the expected value rule
  for</span> <span m="3680">calculating the expected value of a</span> <span
  m="5890">function of a random variable.</span></p><p><span m="8000">It
  corresponds to a nice formula that we will see</span> <span m="11180">shortly,
  but it also involves a much more general idea that</span> <span m="15220">we
  will encounter many times in this course, in somewhat</span> <span
  m="18970">different forms.</span></p><p><span m="20480">Here's what it is all
  about.</span></p><p><span m="22920">We start with a certain random variable
  that has a known PMF.</span></p><p><span m="27910">However, we're ultimately
  interested in another random</span> <span m="30720">variable Y, which is
  defined as a function of the original</span> <span m="34190">random
  variable.</span></p><p><span m="35460">We're interested in calculating the
  expected value</span> <span m="38130">of this new random variable, Y. How
  should we do it?</span></p><p><span m="42130">We will illustrate the ideas
  involved through a simple</span> <span m="45150">numerical
  example.</span></p><p><span m="46670">In this example, we have a random
  variable, X, that takes</span> <span m="49810">values 2, 3, 4, or 5, according
  to some given</span> <span m="52910">probabilities.</span></p><p><span
  m="54140">We are also given a function that maps</span> <span
  m="56570">x-values into y-values.</span></p><p><span m="59300">And this
  function, g, then defines a new random variable.</span></p><p><span
  m="64080">So if the outcome of the experiment leads to an X equal</span> <span
  m="67550">to 4, then the random variable, Y, will also take a</span> <span
  m="71200">value equal to 4.</span></p><p><span m="73130">How do we calculate
  the expected value of Y?</span></p><p><span m="76200">The only tool that we
  have available in our hands at this</span> <span m="78720">point is the
  definition of the expected value, which tells us</span> <span m="82310">that
  we should run a summation over the y-axis, consider</span> <span
  m="86620">different values of y one at the time.</span></p><p><span
  m="89520">And for each value for y, multiply that value by its</span> <span
  m="93640">corresponding probability.</span></p><p><span m="95430">So in this
  case, we start with Y equal to 3, which needs to</span> <span m="99640">be
  multiplied by the probability that</span> <span m="101870">Y is equal to
  3.</span></p><p><span m="103620">What is that probability?</span></p><p><span
  m="105150">Well, Y is equal to three, if and only if X is 2 or 3, which</span>
  <span m="109850">happens with probability, 0.1 plus 0.2.</span></p><p><span
  m="116430">Then we continue with the summation by considering the</span> <span
  m="119400">next value of little y.</span></p><p><span m="121790">The next
  possible value is 4.</span></p><p><span m="124280">And this gives us a
  contribution of 4, weighted by</span> <span m="128009">the probability of
  obtaining a 4.</span></p><p><span m="130490">The probability that Y is equal
  to 4 is the probability</span> <span m="133340">that X is either equal to 4 or
  to 5, which happens with</span> <span
  m="137579">probability.</span></p><p><span m="138340">0.3 plus
  0.4.</span></p><p><span m="140750">So this way, we obtain an arithmetic
  expression which we</span> <span m="144660">can evaluate.</span></p><p><span
  m="145890">And it's going to give us the expected value of Y. But</span> <span
  m="149480">here's an alternative way of calculating</span> <span
  m="151680">the expected value.</span></p><p><span m="153400">And this
  corresponds to the following type of thinking.</span></p><p><span
  m="158310">10% of the time, X is going to be equal to 2.</span></p><p><span
  m="162260">And when that happens, Y takes on a value of 3.</span></p><p><span
  m="166079">So this should give us a contribution to the average</span> <span
  m="169930">value of Y, which is 3 times 0.1.</span></p><p><span
  m="175430">Then, 20% of the time, X is 3 and Y is also 3.</span></p><p><span
  m="182590">So 20% of the time, we also get 3's in Y.</span></p><p><span
  m="189980">Then 30% of the time, X is 4, which results in a Y that's</span>
  <span m="195790">equal to 4.</span></p><p><span m="197280">So we obtain a 4
  30% of the time.</span></p><p><span m="201620">And finally, 40% of the time, X
  equals to [5], which results</span> <span m="206440">in a Y equal to
  4.</span></p><p><span m="210329">And we obtain this arithmetic
  expression.</span></p><p><span m="213710">Now you can compare the two
  arithmetic expressions, the</span> <span m="216600">red and the blue one, and
  you will notice that they're</span> <span m="219940">equal, except that the
  terms are arranged in a slightly</span> <span m="223470">different
  way.</span></p><p><span m="224880">Conceptually, however, there's a very big
  difference.</span></p><p><span m="228210">In the first summation, we run over
  the values of</span> <span m="230920">Y one at the time.</span></p><p><span
  m="233079">In the second summation, we run over the different values</span>
  <span m="236630">of X one at a time, and took into account their
  individual</span> <span m="241320">contributions.</span></p><p><span
  m="242990">This second way of calculating the expected value of Y is</span>
  <span m="247500">called the expected value rule.</span></p><p><span
  m="249710">And it corresponds to the following formula.</span></p><p><span
  m="253560">We carry out a summation over the x-axis.</span></p><p><span
  m="257390">For each x-value that we consider, we calculate what is</span>
  <span m="262330">the corresponding y-value, that's g of x, and also
  weigh</span> <span m="267830">this term according to the probability of</span>
  <span m="270620">this particular x.</span></p><p><span m="272510">So for
  instance, a typical term here would be when x is</span> <span m="277710">equal
  to 2, g of x would be equal to 3.</span></p><p><span m="282440">And the
  corresponding probability, that's the</span> <span m="284480">probability of a
  2, would be 0.1.</span></p><p><span m="289560">The advantage of using the
  expected value rule instead of</span> <span m="292790">the definition of the
  expectation is that the</span> <span m="295180">expected value rule only
  involves the PMF of the</span> <span m="298510">original random variable, so
  we do not need to do any</span> <span m="302540">additional work to find the
  PMF of</span> <span m="305295">the new random variable.</span></p><p><span
  m="308230">Now we argued in favor of the expected value rule by</span> <span
  m="313610">considering this numerical example, and by checking that</span>
  <span m="316450">it gives the right result.</span></p><p><span m="318730">But
  now let us verify.</span></p><p><span m="320520">Let us argue more generally
  that it's going to give us the</span> <span m="323760">right
  answer.</span></p><p><span m="325410">So what we're going to do is to take
  this summation and</span> <span m="330300">argue that it's equal to the
  expected value of Y, which is</span> <span m="334980">defined by that
  summation.</span></p><p><span m="337040">So let us start with
  this.</span></p><p><span m="338510">It's a sum over all
  x's.</span></p><p><span m="341790">Let us first fix a particular value of y,
  and add over all</span> <span m="348920">those x's that correspond to that
  particular y.</span></p><p><span m="352970">So we're fixing a particular
  y.</span></p><p><span m="356440">And so we're adding only over those x's that
  lead to that</span> <span m="362320">particular y.</span></p><p><span
  m="364170">And we carry out to the summation.</span></p><p><span m="369680">So
  this is the part of this sum associated with one</span> <span
  m="373500">particular choice of y.</span></p><p><span m="376620">And it's a
  sum, really, over this set of x's.</span></p><p><span m="380000">But in order
  to exhaust all x's, we need to consider all</span> <span m="384370">possible
  values of y.</span></p><p><span m="386930">And this gives rise to an outer
  summation over the</span> <span m="391690">different y's.</span></p><p><span
  m="393130">So for any fixed y, we add over the associated
  x's.</span></p><p><span m="397630">But we want to consider all the possible
  y's.</span></p><p><span m="403010">Now at this point, we make the following
  observation.</span></p><p><span m="410460">Here, we have a summation over
  y's.</span></p><p><span m="413460">And let's look at the inner
  summation.</span></p><p><span m="417710">The inner summation involves x's, all
  of which are</span> <span m="423520">associated with a specific value of
  y.</span></p><p><span m="427140">Having fixed y, all the terms inside this sum
  have the</span> <span m="433360">property that g of x is equal to
  y.</span></p><p><span m="436290">So g of x is equal to that particular
  y.</span></p><p><span m="440960">And we can make this substitution
  here.</span></p><p><span m="445710">Now when we look at this summation, we now
  realize that</span> <span m="448510">it's a summation over x's while y is
  being fixed.</span></p><p><span m="453470">And so we can take this term of y
  and pull</span> <span m="457690">it outside the summation.</span></p><p><span
  m="462620">What this leaves us with is a sum over all y's of y, and</span>
  <span m="470590">then a further sum over all x's that lead to that</span>
  <span m="474930">particular y, of the probabilities of those
  x's.</span></p><p><span m="484640">Now what can we say about this inner
  summation?</span></p><p><span m="489850">We have fixed a y.</span></p><p><span
  m="492960">For that particular y, we're adding the probabilities of</span>
  <span m="496050">all the x's that lead to that particular
  y.</span></p><p><span m="499910">Fixing y, consider all the x's that lead to
  it.</span></p><p><span m="503820">This is just the probability of that
  particular y.</span></p><p><span m="509740">But what we have now is just the
  definition of the expected</span> <span m="513549">value of Y. And this
  concludes the proof that this</span> <span m="518840">expression, as given by
  the expected value rule, gives us</span> <span m="522490">the same answer as
  the original definition of the</span> <span m="525530">expected value of
  Y.</span></p><p><span m="528110">Now before closing, a few
  observations.</span></p><p><span m="530860">The expected value rule is really
  simple to use.</span></p><p><span m="534350">For example, if you want to
  calculate the expected value</span> <span m="536890">of the square of a random
  variable, then you're dealing</span> <span m="540330">with a situation where
  the g function</span> <span m="543560">is the square
  function.</span></p><p><span m="547350">And so, the expected value of
  X-squared will be the sum over</span> <span m="551790">x's of x squared
  weighted according to the probability</span> <span m="556700">of a particular
  x.</span></p><p><span m="559260">And finally, one important word of caution,
  that in</span> <span m="562950">general, the expected value of the
  function--</span> <span m="566090">so for example, the expected value of
  X-squared.</span></p><p><span m="569750">In general, it's not going to be the
  same as taking the</span> <span m="575480">expected value of X and squaring
  it.</span></p><p><span m="580620">So this is a word [of] caution, that in
  general, you</span> <span m="583800">cannot interchange the order with which
  you apply a</span> <span m="586960">function, and then you calculate
  expectation.</span></p><p><span m="590820">There are exceptions, however, in
  which we happen to have</span> <span m="594060">equality
  here.</span></p><p><span m="595400">And this is going to be our next
  topic.</span></p><p>&nbsp;</p>
uid: e658bf70eb70fcb817d59cd879820b82
type: courses
layout: video
---
