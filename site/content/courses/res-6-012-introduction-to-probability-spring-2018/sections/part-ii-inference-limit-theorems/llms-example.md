---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: KPF8owESMdo
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    title: Video-YouTube-Stream
    type: Video
    uid: eeb0c11c741e1ce1d7fba31e1acc4c2b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/KPF8owESMdo/default.jpg'
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 096ba70028cb655defb35272610a1f05
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: KPF8owESMdo
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 472604ac69ea811dadad1e4af124a41f
  - id: KPF8owESMdo.srt
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-example/KPF8owESMdo.srt
    title: 3play caption file
    type: null
    uid: cc773cfb00407eb6ab12360d2921cac2
  - id: KPF8owESMdo.pdf
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-example/KPF8owESMdo.pdf
    title: 3play pdf file
    type: null
    uid: 71c379aeb8216933cdebde24d4513228
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 296920d97df4181170a777373f16e7ed
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: aa0c4963b5f895fee81eabfd1741371b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-05_300k.mp4
    parent_uid: d92b9e27e11f33b73f75e9e20a8f1ff3
    title: Video-Internet Archive-MP4
    type: Video
    uid: bdeda4d89b5b6e03245102d4bc19e7b2
inline_embed_id: 37425981llmsexample62667675
order_index: 1606
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: llms-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-example
title: LLMS Example
transcript: >-
  <p><span m="1270">Let us now illustrate the linear least mean squares
  estimation</span> <span m="5080">methodology in the context of an
  example.</span></p><p><span m="7730">And we're going to revisit our familiar
  example</span> <span m="11230">that we considered earlier in the context of
  general least</span> <span m="15780">mean squares
  estimation.</span></p><p><span m="17790">Let us remind ourselves what
  were</span> <span m="19740">the assumptions behind this
  example.</span></p><p><span m="22540">There is an unknown random
  variable</span> <span m="24360">that we wish to estimate, and that random
  variable happens</span> <span m="28790">to be uniform on the range from 4 to
  10.</span></p><p><span m="34610">What we get to observe is a random variable
  X,</span> <span m="39220">which is equal to Theta plus or minus
  something.</span></p><p><span m="43110">So X is Theta plus a noise
  term.</span></p><p><span m="47230">And that noise term can be anything</span>
  <span m="51370">in the range from minus 1 to plus 1.</span></p><p><span
  m="57800">Furthermore, the distribution of U</span> <span m="60540">is this
  particular uniform no matter</span> <span m="62750">what theta is, so Theta
  and U are independent.</span></p><p><span m="74760">These modeling assumptions
  correspond to this picture.</span></p><p><span m="78090">This is the range of
  X and Theta.</span></p><p><span m="80440">And the joint distribution of X and
  Theta</span> <span m="82850">happens to be a uniform distribution</span> <span
  m="85789">on this particular shape.</span></p><p><span m="88930">However,
  we're not really going to use this picture other than</span> <span
  m="92280">for illustration purposes.</span></p><p><span m="94320">You could
  take just this as the formulation of the problem</span> <span m="98039">that
  we're interested in.</span></p><p><span m="100470">So now, to develop the form
  of the optimal linear estimator,</span> <span m="105789">all we need to do is
  to determine</span> <span m="107750">the various constants that show
  up.</span></p><p><span m="110789">So let's start with
  expectations.</span></p><p><span m="113550">Theta is uniform from 4 to
  10.</span></p><p><span m="116960">Therefore, the expected value is the
  midpoint,</span> <span m="119440">which is equal to 7.</span></p><p><span
  m="121710">U has a symmetric distribution around 0,</span> <span m="125980">so
  its expected value is going to be equal to 0.</span></p><p><span m="129720">X
  is the sum of Theta and U. Therefore,</span> <span m="133270">its expected
  value is the sum of these two expected values</span> <span m="136550">and is
  equal to 7.</span></p><p><span m="139800">Let us now look at
  variances.</span></p><p><span m="142600">The variance of a uniform is equal to
  the square</span> <span m="148110">of the length of the interval on which the
  uniform is</span> <span m="151930">distributed-- in this case, it's 6
  squared-- divided always</span> <span m="157180">by a coefficient of
  12.</span></p><p><span m="159270">6 squared is 36, so we obtain
  three.</span></p><p><span m="164600">The variance of U is determined by a
  similar formula,</span> <span m="169210">except that now we have an interval
  of length 2,</span> <span m="172180">so we obtain 2 squared over
  12.</span></p><p><span m="176560">And this is 1/3.</span></p><p><span
  m="180750">Now let us look at the variance of X.</span></p><p><span
  m="184300">Since X is the sum of Theta and U, and since the two of them</span>
  <span m="188510">are independent, the variance of X</span> <span m="191130">is
  going to be the sum of these two variances, which</span> <span m="195420">is
  10 over 3.</span></p><p><span m="201220">Now let us try to calculate the
  covariance term.</span></p><p><span m="208890">The covariance of Theta with X
  is this expression,</span> <span m="216560">because X is Theta plus U. And
  then,</span> <span m="220480">using linearity properties of
  covariances,</span> <span m="224210">this is the covariance of Theta with
  itself,</span> <span m="228400">plus the covariance of Theta with U.
  Now,</span> <span m="234120">Theta and U are independent, so this covariance
  is equal to 0.</span></p><p><span m="239280">The covariance of Theta with
  itself</span> <span m="241320">is just the same as the variance,</span> <span
  m="243440">so here we obtain an answer of 3.</span></p><p><span m="249030">And
  so now we have all the pieces of information</span> <span m="252140">that we
  need, and we can proceed and write down</span> <span m="255770">the form of
  the linear estimator.</span></p><p><span m="258589">The expected value of
  Theta is 7.</span></p><p><span m="263080">Then, the covariance of Theta with
  X</span> <span m="266540">is 3, divided by the variance, which is 10 over
  3.</span></p><p><span m="272310">So this ratio becomes
  9/10.</span></p><p><span m="277780">And then X minus the expected value of X
  gives us this term.</span></p><p><span m="284440">So this is the form of the
  optimal linear estimator,</span> <span m="288760">and if you wish to plot it,
  it is a curve of this kind.</span></p><p><span m="294110">It is actually
  interesting to contrast this solution</span> <span m="298450">to the shape of
  the optimal estimator, the least mean</span> <span m="302710">squares
  estimator, or the conditional expectation</span> <span m="305530">estimator,
  which we had found earlier,</span> <span m="308265">and which corresponds to
  this particular blue curve.</span></p><p><span m="312960">So in some sense,
  the linear estimator</span> <span m="315910">is a pretty good approximation of
  the optimal non-linear one.</span></p><p><span m="321830">It does the best job
  that it can do,</span> <span m="324240">subject to the constraint that it has
  to be a linear function.</span></p><p><span m="330200">Notice also that this
  coefficient here is, of course,</span> <span
  m="333300">positive.</span></p><p><span m="334290">This reflects the fact that
  the two random variables,</span> <span m="338220">X and Theta, are positively
  correlated.</span></p><p><span m="341780">This should be clear from this
  diagram.</span></p><p><span m="343800">When X increases, Theta tends to also
  increase, and vice versa.</span></p><p><span m="348200">It's also reflected in
  the fact that the covariance</span> <span m="351430">is a positive
  number.</span></p><p><span m="354600">On the other hand, because this
  coefficient</span> <span m="356740">is 9/10 and not equal to 1, this red
  line</span> <span m="361410">is somewhat slanted in comparison</span> <span
  m="363880">with the orientation of the diagram that we
  have.</span></p><p><span m="372060">The calculations that we went
  through</span> <span m="374320">in this particular example are pretty
  generic.</span></p><p><span m="378710">This is what you need to do in
  general.</span></p><p><span m="381620">You just look at the random variables
  involved,</span> <span m="384100">you calculate their means, you calculate
  their variances.</span></p><p><span m="387840">Then you may have to do some
  extra work</span> <span m="390420">to calculate the covariance of
  interest.</span></p><p><span m="393800">And once you're done, you plug in the
  numerical values</span> <span m="396500">that you have found, and you
  obtain</span> <span m="399040">the form of the linear
  estimator.</span></p><p>&nbsp;</p>
uid: d92b9e27e11f33b73f75e9e20a8f1ff3
type: course
layout: video
---
