---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: wOmfOJyxZ6M
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    title: Video-YouTube-Stream
    type: Video
    uid: 6a71633abedcff13b45f4fc7d51b51a6
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/wOmfOJyxZ6M/default.jpg'
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 287d253f1b35447064c8d948ee1ea194
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: wOmfOJyxZ6M
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 45eac9613308e1b4599f94675f11db8e
  - id: wOmfOJyxZ6M.srt
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/means-variances/wOmfOJyxZ6M.srt
    title: 3play caption file
    type: null
    uid: 98d4193b1c296444524448fff06b0cbc
  - id: wOmfOJyxZ6M.pdf
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/means-variances/wOmfOJyxZ6M.pdf
    title: 3play pdf file
    type: null
    uid: 4495b46bee42401fe28f8d749a5b8979
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: cca08cfd445ee2085ae052345c549c93
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9b1668c763016bcc54fad1f0b84bce6e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L08-04_300k.mp4
    parent_uid: 1aca19b277846a073c61712f1d62c1ad
    title: Video-Internet Archive-MP4
    type: Video
    uid: 39a1f4be621c1a8917064470eb55e796
inline_embed_id: 76541533meansvariables41124339
order_index: 771
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: means-variances
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/means-variances
title: Means & Variances
transcript: >-
  <p><span m="1780">We now start with our agenda of developing continuous</span>
  <span m="5280">counterparts of everything we have done for</span> <span
  m="7970">discrete random variables.</span></p><p><span m="10160">Let us look
  at the concept of expectation.</span></p><p><span m="12710">In the discrete
  case, we have defined expectation as a</span> <span m="16030">weighted average
  of the values X of the random variable,</span> <span m="20400">weighted
  according to their corresponding probabilities.</span></p><p><span
  m="24540">In the continuous case, we define expectation in a</span> <span
  m="27450">similar way--</span> <span m="28890">as a weighted average over the
  possible values of X, weighted</span> <span m="33820">according to the
  corresponding value of the density.</span></p><p><span m="38020">Points where
  the density is higher--</span> <span m="40370">for example, here--</span>
  <span m="42430">will receive a higher weight in this
  calculation.</span></p><p><span m="46730">But of course, since we are
  averaging over a continuous</span> <span m="50620">set, the summation will
  have to be replaced by an integral.</span></p><p><span m="55770">This will be
  a recurrent theme in this unit.</span></p><p><span m="58190">Definitions or
  formulas for the continuous case look</span> <span m="61500">exactly like the
  discrete ones, except that PMFs are</span> <span m="65580">replaced by
  densities, as here.</span></p><p><span m="68730">The PMF is replaced by a
  density.</span></p><p><span m="71170">And summations are replaced by
  integrals.</span></p><p><span m="75600">The intuition is usually the same in
  both the discrete and</span> <span m="78380">the continuous
  case.</span></p><p><span m="79680">However, the intuition is usually much
  clearer, much</span> <span m="83030">easier to visualize in the discrete
  case.</span></p><p><span m="86330">So the best strategy is to make sure to
  understand fully</span> <span m="90180">the intuition for the discrete case
  and just rely on it.</span></p><p><span m="95140">At this point, let me add
  some fine print--</span> <span m="99350">a mathematical side
  point.</span></p><p><span m="101630">This integral or the expectation will not
  be always</span> <span m="105780">well defined.</span></p><p><span
  m="106600">For this integral to make sense, we will need to make</span> <span
  m="110350">the assumption that the integral of the absolute value</span> <span
  m="113620">of little x, weighted according to the density,</span> <span
  m="117140">gives us a finite result.</span></p><p><span m="119500">Unless we
  explicitly say something different, we will</span> <span m="122540">always
  assume that we're dealing with random variables</span> <span m="125220">that
  satisfy this condition.</span></p><p><span m="126730">And so the expectation
  is well defined mathematically.</span></p><p><span m="131130">Coming back to
  the big picture, regarding</span> <span m="133520">expectations, the intuition
  remains the same as in the</span> <span m="136600">discrete case-- that the
  expectation represents the</span> <span m="139620">average of the values we
  expect to see in a very large</span> <span m="143300">number of independent
  repetitions of the experiment.</span></p><p><span m="146770">In fact, there
  are also theorems to this effect, but</span> <span m="150030">these will have
  to wait until later in this class when we</span> <span m="153400">study limit
  theorems.</span></p><p><span m="155670">Another intuitive interpretation that
  is true</span> <span m="158200">for both the discrete and the continuous case
  is that the</span> <span m="161510">expectation corresponds to the center of
  gravity of the</span> <span m="165100">probability
  distribution.</span></p><p><span m="166829">So in this diagram, it might be
  somewhere around here.</span></p><p><span m="170450">And similarly, for the
  continuous diagram, the center</span> <span m="173130">of gravity might be
  somewhere around here.</span></p><p><span m="177680">And if it happens that
  the distribution, the PMF or the</span> <span m="181160">PDF, happens to be
  symmetric around a certain point, then</span> <span m="185580">that point will
  be equal to the expectation.</span></p><p><span m="188930">Expectations of
  continuous random variables have all the</span> <span m="192020">properties
  you might expect.</span></p><p><span m="194030">For example, non-negative
  random variables have</span> <span m="197640">non-negative
  expectations.</span></p><p><span m="199970">Random variables that lie inside
  an interval have</span> <span m="203600">average values or expectations that
  also lie</span> <span m="207030">inside the same interval.</span></p><p><span
  m="208920">The derivation is exactly the same as for the discrete
  case.</span></p><p><span m="213270">There is also an expected value
  rule.</span></p><p><span m="215329">In the discrete case, it took on this
  form.</span></p><p><span m="218620">In the continuous case, we obtain an
  analogous form in</span> <span m="222390">which the summation is replaced by
  [an] integral.</span></p><p><span m="225790">And instead of weighing according
  to the PMF, we now</span> <span m="229960">weigh according to the density
  function.</span></p><p><span m="233240">The derivation of the expected value
  rule for the continuous</span> <span m="236090">case is a little more
  complicated than the one that</span> <span m="239155">we gave for the discrete
  case.</span></p><p><span m="241230">But it's sufficient for us to know that it
  is true and that</span> <span m="246620">it has an intuitive meaning that runs
  along the same lines</span> <span m="250380">as the intuitive meaning that we
  had for the discrete case.</span></p><p><span m="254910">As an instance of how
  we might apply the expected value rule,</span> <span m="258930">if you wish to
  calculate the expected value of the square</span> <span m="262890">of a
  continuous random variable, you</span> <span m="265250">would proceed as
  follows.</span></p><p><span m="266820">You would integrate over the entire
  real line the value of</span> <span m="272330">the function, which is X
  squared in our case, weighted</span> <span m="277000">according to the
  density.</span></p><p><span m="281290">Finally, a most important property
  of</span> <span m="283190">expectations, is linearity.</span></p><p><span
  m="285870">Linearity is still true for continuous random</span> <span
  m="288540">variables as well.</span></p><p><span m="290100">And the way it is
  derived is exactly the same as in the</span> <span m="293200">discrete
  case.</span></p><p><span m="294470">Namely, we apply the expected value rule
  to this function of</span> <span m="298510">the random variable X and
  separate</span> <span m="301100">out the various terms.</span></p><p><span
  m="304650">The story regarding variances is exactly the same as in the</span>
  <span m="308200">discrete case.</span></p><p><span m="309630">We define
  variances using the same definition.</span></p><p><span m="313010">And of
  course, here, mu stands for the expected value of the</span> <span
  m="316210">random variable X.</span></p><p><span m="318570">To calculate the
  variance, we can use the expected value</span> <span m="322470">rule, which
  takes this form in the continuous case.</span></p><p><span m="325860">And we
  apply the expected value rule for the case where</span> <span m="329230">we're
  dealing with the expected value of this</span> <span m="331570">particular
  function, so that in this instance, the</span> <span m="334630">functions g of
  x is x minus mu squared.</span></p><p><span m="339240">So by applying the
  expected value rule, we obtain the</span> <span m="343409">integral from minus
  infinity to infinity, the functions g</span> <span m="347360">of x, weighted
  according to the density, and then we carry</span> <span m="354550">out the
  integration.</span></p><p><span m="357960">We also define the standard
  deviation--</span> <span m="360180">same way as in the discrete
  case.</span></p><p><span m="363480">We have a property about a variance of
  linear functions,</span> <span m="367360">of a random variable, namely, that
  if we add a constant to a</span> <span m="371600">random variable, this has no
  effect on the variance.</span></p><p><span m="374740">But if we multiply a
  random variable by a constant, the</span> <span m="377850">variance gets
  multiplied by the square of that constant.</span></p><p><span
  m="382110">Finally, when calculating the variance, it is often</span> <span
  m="385030">convenient to use this alternative formula in which</span> <span
  m="389810">the variance is calculated by finding the expected value of</span>
  <span m="394360">the square of the random variable and also using the</span>
  <span m="397740">expected value of the random variable, but squared and</span>
  <span m="400980">subtracted from the first term.</span></p><p><span
  m="404880">This relation and this relation are both derived</span> <span
  m="408650">exactly the same way as in the discrete case.</span></p><p><span
  m="411920">And there's no reason to repeat those
  derivations.</span></p><p>&nbsp;</p>
uid: 1aca19b277846a073c61712f1d62c1ad
type: courses
layout: video
---
