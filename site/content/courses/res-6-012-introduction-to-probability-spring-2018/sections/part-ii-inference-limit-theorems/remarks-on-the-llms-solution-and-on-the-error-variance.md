---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: yqdcK6-9kv8
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    title: Video-YouTube-Stream
    type: Video
    uid: 7286738b2afd7b3ba26d4a62fc078d54
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/yqdcK6-9kv8/default.jpg'
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 446f0d12eca08aa1a06293cee001d3ba
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: yqdcK6-9kv8
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6871778884ee3440b9675bd3407de136
  - id: yqdcK6-9kv8.srt
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/remarks-on-the-llms-solution-and-on-the-error-variance/yqdcK6-9kv8.srt
    title: 3play caption file
    type: null
    uid: 523d4d85b9ca3df66e10d3597964b396
  - id: yqdcK6-9kv8.pdf
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/remarks-on-the-llms-solution-and-on-the-error-variance/yqdcK6-9kv8.pdf
    title: 3play pdf file
    type: null
    uid: a301867ae9bb0000910668a3ceb44fda
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 89403922deeedbbde3792177e578233d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fcff899940467ecff6dbf06e771cfa71
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-04_300k.mp4
    parent_uid: b4f9390b47de37cbfe23d3983359e2cc
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3847bc18625b5ba2ce7f08b0879024cb
inline_embed_id: 76901658remarksonthellmssolutionandontheerrorvariance34625215
order_index: 1597
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: remarks-on-the-llms-solution-and-on-the-error-variance
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/remarks-on-the-llms-solution-and-on-the-error-variance
title: Remarks on the LLMS Solution and on the Error Variance
transcript: >-
  <p><span m="550">Now that we have found the solution</span> <span m="2580">to
  the linear least mean squares estimation problem,</span> <span m="5960">it is
  time to offer a few comments,</span> <span m="8380">make some observations,
  and provide some insights.</span></p><p><span m="12570">A first important
  observation is the following.</span></p><p><span m="16370">In order to
  implement this estimator,</span> <span m="19920">you do not really need to
  know everything</span> <span m="22290">about the distribution of X and
  Theta.</span></p><p><span m="25470">The only thing that you need to
  know</span> <span m="27590">is the mean of the two random variables that are
  involved,</span> <span m="31940">the variance of X, and the covariance of
  Theta with X.</span></p><p><span m="36610">So it's only a few pieces of
  information that we need,</span> <span m="40590">and that means that we do not
  need</span> <span m="42940">to be so careful about modeling in a particular
  problem,</span> <span m="47120">as long as we know what the means,
  variances,</span> <span m="49970">and covariances are.</span></p><p><span
  m="51730">This is a very desirable property,</span> <span m="54190">because it
  tells us that this could be simpler</span> <span m="57760">to implement in the
  real world.</span></p><p><span m="61360">Now let us start looking at the form
  of the solution,</span> <span m="64610">and let's try to give some
  interpretation.</span></p><p><span m="67980">Suppose that the correlation
  coefficient is positive.</span></p><p><span m="73690">Then what does this
  estimator do?</span></p><p><span m="76580">It starts with a baseline
  estimate,</span> <span m="79110">which is the expected value of
  Theta.</span></p><p><span m="82220">And then provides us with a correction
  term</span> <span m="86000">that's based on the data.</span></p><p><span
  m="88420">In particular, if it happens that we</span> <span m="91440">see an
  observation that's larger than expected, in that case,</span> <span
  m="98950">our estimate is going to be above the expected</span> <span
  m="104030">value of Theta.</span></p><p><span m="106270">So we started with
  our baseline estimate,</span> <span m="108590">but if we get a big
  observation, then our estimate</span> <span m="113250">will also be
  large.</span></p><p><span m="114950">And conversely, if X happened to be on
  the lower side,</span> <span m="118810">below the expected value, then our
  estimate</span> <span m="121770">would also be below the expected value of
  Theta.</span></p><p><span m="125380">Of course, there's an analogous
  story.</span></p><p><span m="127310">If rho was negative, then a same
  argument</span> <span m="130720">would apply, except that it would</span>
  <span m="132340">work in the opposite direction.</span></p><p><span
  m="134530">When rho is negative, if we see a large X,</span> <span
  m="138570">then we will come up with a low estimate for
  Theta.</span></p><p><span m="143890">Let us look at another special case
  now.</span></p><p><span m="146550">Suppose that the rho is equal to 0,</span>
  <span m="148680">X and Theta are uncorrelated.</span></p><p><span
  m="151050">Then this last term here disappears, and in this case,</span> <span
  m="155650">our estimate is going to be just the expected value of
  Theta.</span></p><p><span m="160610">In other words, our estimate
  doesn't</span> <span m="162900">make any use of the data.</span></p><p><span
  m="165530">Essentially what's happening is that a linear estimator</span>
  <span m="169610">exploits the correlation between the two random
  variables</span> <span m="173730">to come up with an
  estimate.</span></p><p><span m="175440">But if the two random variables are
  uncorrelated,</span> <span m="178242">then [there is] nothing that it
  can</span> <span m="179700">do, and it does not give us anything
  useful.</span></p><p><span m="183490">It just reports back the expected value
  of Theta.</span></p><p><span m="188650">Let us now look at the mean square
  error that's</span> <span m="192420">obtained when we implement this linear
  estimator.</span></p><p><span m="197710">Let us write down what this
  expression is.</span></p><p><span m="200890">And to keep things simple, let
  us</span> <span m="203590">assume that we have 0 means and 0
  variances.</span></p><p><span m="208900">So just for the purposes of this
  derivation and to simplify</span> <span m="213660">the algebra, we will work
  with the 0 mean case.</span></p><p><span m="220440">So in this case, what we
  have-- let</span> <span m="223520">me first write Theta, and then put here the
  estimator.</span></p><p><span m="228320">The estimator is rho times sigma
  Theta, sigma X times X.</span></p><p><span m="237150">Basically, I took this
  formula, but I</span> <span m="239410">put 0s for the expected
  values.</span></p><p><span m="242770">Now let us expand this
  quadratic.</span></p><p><span m="245880">We obtain the expected value of Theta
  squared.</span></p><p><span m="251550">That's the variance of Theta, since we
  assume 0 means.</span></p><p><span m="255040">And the variance is the square
  of the standard deviation.</span></p><p><span m="258709">Then we have a cross
  term.</span></p><p><span m="260470">Is going to be twice the
  expectation</span> <span m="264620">of the product of Theta with
  this.</span></p><p><span m="267940">Now we can take out this constant
  outside</span> <span m="271970">of the expectation, so it's 2 rho sigma</span>
  <span m="274620">Theta, sigma X. And then we are going</span> <span
  m="279080">to have the expected value of Theta times X.</span></p><p><span
  m="282680">Because we assume 0 means, the expected value of Theta times
  X</span> <span m="287080">is the covariance of Theta and X.</span></p><p><span
  m="290510">And the covariance is rho sigma Theta, sigma X.</span></p><p><span
  m="296280">And finally, we have a last term, which is rho squared,</span>
  <span m="301190">sigma Theta squared, divided by sigma X squared</span> <span
  m="307740">times X squared.</span></p><p><span m="310300">We have an expected
  value, so that's</span> <span m="312220">the expected value of X squared,
  which is just the variance of X</span> <span m="317690">or sigma X
  squared.</span></p><p><span m="319910">OK, this looks like a big mess, but in
  fact, we</span> <span m="322820">get nice cancellations.</span></p><p><span
  m="324690">This term cancels with that term.</span></p><p><span
  m="327270">This term cancels with that term.</span></p><p><span m="329840">We
  notice that we have sigma Theta squared</span> <span m="333610">in each one of
  those terms, so we can factor them out.</span></p><p><span m="338030">And then
  here we have minus 2 rho squared plus rho squared.</span></p><p><span
  m="343640">When we subtract those two terms we're</span> <span m="345500">left
  just with a minus rho squared term.</span></p><p><span m="348630">So after you
  do that algebra carefully,</span> <span m="350830">you find that the answer
  takes a very simple form.</span></p><p><span m="354510">It's 1 minus rho
  squared times the variance of Theta.</span></p><p><span m="357930">I should
  add here that this formula remains valid,</span> <span m="361580">even without
  the assumption that X and Theta have 0 means.</span></p><p><span
  m="366640">What's the interpretation of this?</span></p><p><span
  m="368850">The variance of Theta describes the initial uncertainty</span>
  <span m="372680">we have about Theta.</span></p><p><span m="374570">But after
  we carry out the estimation,</span> <span m="377470">the uncertainty gets
  reduced, and it</span> <span m="380470">gets reduced by a certain
  factor.</span></p><p><span m="383790">What is this factor?</span></p><p><span
  m="385370">If rho is equal to 0, than this coefficient is 1</span> <span
  m="389670">and we do not have any variance reduction.</span></p><p><span
  m="392430">After all, when rho is equal to 0,</span> <span m="394760">this
  estimator is not very useful.</span></p><p><span m="397090">It doesn't help us
  estimate Theta better.</span></p><p><span m="401180">So the expected value of
  the squared error</span> <span m="404350">is the same as the variance of
  Theta.</span></p><p><span m="408270">On the other hand, when rho is
  large,</span> <span m="411960">then this term here becomes small,</span> <span
  m="416180">and this means that the mean squared error is
  small.</span></p><p><span m="420250">In fact, there is an extreme case that's
  interesting, namely</span> <span m="424460">if rho is equal to 1 in absolute
  value.</span></p><p><span m="429470">So if the random variables are perfectly
  correlated,</span> <span m="432790">then this term here becomes 0, and the
  mean</span> <span m="437230">squared estimation error is 0.</span></p><p><span
  m="439930">Which essentially means that our estimate</span> <span
  m="444020">is going to be equal to the unknown value.</span></p><p><span
  m="448250">So the special case of a unit correlation, in absolute
  value,</span> <span m="453620">corresponds to a case where we can perfectly
  estimate Theta,</span> <span m="458510">using a linear
  estimator.</span></p><p><span m="461430">So to summarize, the correlation
  coefficient</span> <span m="464050">plays a crucial role in linear least
  squares estimation.</span></p><p><span m="468260">It determines the form of
  the estimator,</span> <span m="471610">and also, it determines how much the
  uncertainty in Theta</span> <span m="477310">will be reduced through the
  process of estimation.</span></p>
uid: b4f9390b47de37cbfe23d3983359e2cc
type: courses
layout: video
---
