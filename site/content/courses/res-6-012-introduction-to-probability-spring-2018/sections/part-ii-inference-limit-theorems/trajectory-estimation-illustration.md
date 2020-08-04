---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: wTKRruMNOHw
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    title: Video-YouTube-Stream
    type: Video
    uid: a9057dbdef06e4c8d827e7a742607d1e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/wTKRruMNOHw/default.jpg'
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b10606c46455461ffe5ecaca9c5a8fa7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: wTKRruMNOHw
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6801c2c81550377c8edd43674e01032f
  - id: wTKRruMNOHw.srt
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/trajectory-estimation-illustration/wTKRruMNOHw.srt
    title: 3play caption file
    type: null
    uid: 9edfb9e8eb02d9ebed3ed1f189a4f6e3
  - id: wTKRruMNOHw.pdf
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/trajectory-estimation-illustration/wTKRruMNOHw.pdf
    title: 3play pdf file
    type: null
    uid: 7658d6877a020e2a88bb331d4793714e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a87670eb3e66c9df637611086cd02bc6
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 16a920f0a7dc66c91598ac26d39982af
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-08_300k.mp4
    parent_uid: 1a5b6484d7355052ee87edff14cd3a84
    title: Video-Internet Archive-MP4
    type: Video
    uid: b1c0feeac57386cdbb16f39d21786071
inline_embed_id: 40292363trajectoryestimationillustration69755077
order_index: 1498
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: trajectory-estimation-illustration
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/trajectory-estimation-illustration
title: Trajectory Estimation Illustration
transcript: >-
  <p><span m='806'>Let us now come back to the trajectory estimation
  problem</span> <span m='4200'>that we introduced earlier.</span> </p><p><span
  m='6250'>We have an object that moves vertically.</span> </p><p><span
  m='9630'>At any given time t, the height at which the object is found</span>
  <span m='14720'>is equal to this expression.</span> </p><p><span m='17350'>It
  corresponds to the following-- the object starts</span> <span m='19950'>at
  time 0, at some initial height Theta0,</span> <span m='22940'>it has an
  initial velocity of Theta1,</span> <span m='25570'>but also has a certain
  acceleration.</span> </p><p><span m='27980'>And if Theta2 is negative, this
  will</span> <span m='29890'>be a downwards acceleration, which</span> <span
  m='31750'>means that the object eventually will turn and start going
  down.</span> </p><p><span m='36360'>So this is a typical trajectory of such an
  object, where</span> <span m='39850'>here we're plotting the height as a
  function of time.</span> </p><p><span m='44010'>However, the Thetas are
  unknown and they</span> <span m='47810'>are random-- we do not know what they
  are.</span> </p><p><span m='51120'>So this blue curve is just a
  simulation</span> <span m='53745'>where we drew values for those random
  variables at random.</span> </p><p><span m='57910'>But if we were to simulate
  again,</span> <span m='59640'>we might obtain a somewhat different blue
  curve,</span> <span m='62380'>because the values of the Thetas might have been
  different.</span> </p><p><span m='66250'>We do not observe the true trajectory
  directly.</span> </p><p><span m='69830'>What we do observe is certain data
  points.</span> </p><p><span m='73610'>What are they?</span> </p><p><span
  m='74820'>At certain times ti we make a measurement</span> <span m='79000'>of
  the height of the object, except that this measurement</span> <span
  m='83030'>is corrupted by some additive noise.</span> </p><p><span
  m='86120'>This is the model that we introduced earlier.</span> </p><p><span
  m='88440'>And our assumptions were that all of the random variables</span>
  <span m='91340'>involved-- the Thetas and the W's were normal with 0
  mean</span> <span m='96020'>and were also independent.</span> </p><p><span
  m='98539'>In that case, we saw that maximizing the posterior</span> <span
  m='103390'>distribution of the Thetas after taking logarithms</span> <span
  m='109000'>amounted to minimizing this quadratic function</span> <span
  m='112690'>of the thetas.</span> </p><p><span m='114039'>So once we have some
  data available in our hands,</span> <span m='117370'>we look at this
  expression as a function of the thetas</span> <span m='120500'>and find the
  thetas that are as as good as possible</span> <span m='124270'>in terms of
  this criterion.</span> </p><p><span m='126180'>And this is the MAP methodology
  for this particular example.</span> </p><p><span m='130360'>Now, for the
  purposes of this illustration,</span> <span m='132490'>actually, we will
  change our assumptions a little bit.</span> </p><p><span m='136430'>They will
  be as follows.</span> </p><p><span m='137850'>Regarding the acceleration, we
  will take it to be a constant.</span> </p><p><span m='142300'>The acceleration
  term often has to do</span> <span m='144240'>with gravitational effects which
  are known,</span> <span m='146650'>so we will treat Theta2 as a
  constant.</span> </p><p><span m='148860'>And that means that there's no
  point</span> <span m='150770'>in having a prior distribution for
  Theta2.</span> </p><p><span m='154060'>So this term here, which
  originated</span> <span m='156860'>from the prior distribution of Theta2 is
  going to disappear.</span> </p><p><span m='161570'>We will take the variances
  of these basic random variables</span> <span m='165760'>to be the same.</span>
  </p><p><span m='167310'>And because of this, these constants</span> <span
  m='169490'>here will all be the same.</span> </p><p><span
  m='172030'>Therefore, we can take them outside of this expression,</span>
  <span m='175560'>and outside the minimization they will not matter.</span>
  </p><p><span m='178670'>So we can remove them from the picture.</span>
  </p><p><span m='182220'>The factor of 1/2 can also be removed
  similarly.</span> </p><p><span m='185330'>It does not affect the
  minimization.</span> </p><p><span m='188510'>Finally, just in order to get a
  nicer illustration,</span> <span m='192700'>instead of taking 0 means, we're
  assuming</span> <span m='195920'>that the initial position has a mean of
  200.</span> </p><p><span m='199620'>So we're starting somewhere around
  here.</span> </p><p><span m='202560'>And furthermore, the initial velocity has
  a mean of 50.</span> </p><p><span m='206230'>So we expect the object to start
  moving upwards.</span> </p><p><span m='209920'>How does this change the
  formulation?</span> </p><p><span m='212650'>Well, remember, that this term and
  this term</span> <span m='215880'>originated from the priors for Theta0 and
  Theta1.</span> </p><p><span m='221480'>If we now change the means, the priors
  will change.</span> </p><p><span m='226380'>And what happens, if you recall
  the formula for the normal PDF</span> <span m='230600'>and how the mean
  enters, after you take logarithms,</span> <span m='234300'>you see that
  instead of having here theta0,</span> <span m='237010'>you should have theta0
  minus the mean of theta0 squared.</span> </p><p><span m='242980'>And this
  leads us to the following formulation.</span> </p><p><span m='246640'>So this
  is the formulation that we will consider.</span> </p><p><span m='250630'>We
  obtain these data points, and for these particular data</span> <span
  m='254030'>points and for known times at which the measurements were</span>
  <span m='257680'>taken, we put these numbers into this minimization,
  carried</span> <span m='262260'>it out numerically, and this is what we
  got.</span> </p><p><span m='266450'>We got estimates for the different
  parameters.</span> </p><p><span m='269680'>And using this estimates, we can
  use this expression</span> <span m='273640'>to construct an estimated
  trajectory.</span> </p><p><span m='276240'>And the estimated trajectory is
  given by the red curve.</span> </p><p><span m='279870'>It seems to be doing
  somewhat of a reasonable job,</span> <span m='283500'>but not quite.</span>
  </p><p><span m='284720'>The distance between these two curves is quite
  substantial.</span> </p><p><span m='289120'>How could we do a little
  better?</span> </p><p><span m='290970'>Why is it that we're not doing very
  well?</span> </p><p><span m='294659'>Let's think intuitively.</span>
  </p><p><span m='297210'>One of the parameters we wish to estimate is
  Theta1.</span> </p><p><span m='301200'>And Theta1 is a velocity.</span>
  </p><p><span m='303280'>Now, all of our measurements are concentrated</span>
  <span m='305590'>at pretty much the same time.</span> </p><p><span
  m='307830'>But if you measure an object only at a certain time,</span> <span
  m='311430'>it is very difficult to estimate its velocity.</span> </p><p><span
  m='314490'>A much better idea would be to try</span> <span m='316820'>to
  measure the position of the object at different times</span> <span
  m='319900'>and use that information to estimate velocity.</span> </p><p><span
  m='323700'>So let us instead of taking all the measurements</span> <span
  m='327300'>around the initial time, have five measurements</span> <span
  m='331490'>in the beginning and five measurements towards the end.</span>
  </p><p><span m='334980'>The total number of measurements in this
  example</span> <span m='337380'>is the same as in the previous example.</span>
  </p><p><span m='340280'>And once more, we generate a simulated
  trajectory</span> <span m='344780'>according to the probability
  distributions</span> <span m='347010'>that we are assuming.</span>
  </p><p><span m='348409'>Then we generate data according to this model</span>
  <span m='351270'>and we wish to estimate this trajectory.</span> </p><p><span
  m='354909'>We take the data, plug them into this minimization,</span> <span
  m='358380'>carry it out numerically, and this is what we obtain.</span>
  </p><p><span m='362390'>So we see that here we are doing a lot better.</span>
  </p><p><span m='366160'>The estimated trajectory is quite</span> <span
  m='368510'>close to the unknown blue trajectory,</span> <span m='372230'>even
  though the data seems to be scattered quite a bit.</span> </p><p><span
  m='377910'>This is a very nice property.</span> </p><p><span m='379440'>But is
  it just an accident of this numerical experiment?</span> </p><p><span
  m='383290'>Or, also, to put it differently, once you</span> <span
  m='386730'>get your estimated trajectory, yes, it</span> <span m='389510'>is
  true that it is close to the blue trajectory,</span> <span m='392380'>but you
  do not necessarily know that fact.</span> </p><p><span m='395980'>It is one
  thing to have an estimate that</span> <span m='398190'>is close to the true
  value, and it's a different thing</span> <span m='403310'>to have an estimate
  that you know</span> <span m='405450'>that it is close to the true
  value.</span> </p><p><span m='408380'>So how could we get some guarantees
  that, indeed, this</span> <span m='412170'>is the case, that we have good
  estimates?</span> </p><p><span m='416520'>Here's how it goes.</span>
  </p><p><span m='419070'>As we discussed before, the posterior
  distribution</span> <span m='422420'>of the Thetas given the data is
  normal.</span> </p><p><span m='426670'>And for similar reasons, the posterior
  distribution</span> <span m='430940'>of this quantity, which is the true
  position,</span> <span m='434400'>it's what we denoted by X of t, the
  posterior distribution of X</span> <span m='438650'>of t is also
  normal.</span> </p><p><span m='441890'>And in fact, what we obtain from this
  diagram is at any given</span> <span m='447040'>point it's the maximum of
  posteriority probability</span> <span m='450430'>estimate of the position X of
  t at that time.</span> </p><p><span m='455530'>However, besides just this
  point estimate,</span> <span m='459270'>we have additional information.</span>
  </p><p><span m='464940'>We know that the posterior distribution of X of
  t</span> <span m='467950'>is normal.</span> </p><p><span m='468810'>And so,
  for example, at this time,</span> <span m='471110'>this is the peak of the
  posterior.</span> </p><p><span m='474900'>This is the maximum a posteriori
  probability estimate.</span> </p><p><span m='478430'>By we are also able to
  calculate the variance of this posterior</span> <span
  m='484720'>distribution.</span> </p><p><span m='486180'>This is a calculation
  that's a bit complicated</span> <span m='488650'>for the multivariate case,
  for the case where</span> <span m='491370'>you have multiple unknown
  parameters.</span> </p><p><span m='493390'>We will not get into it.</span>
  </p><p><span m='495300'>But we did see earlier an example</span> <span
  m='497580'>where we had a single unknown parameter,</span> <span
  m='499950'>and in which we were able to calculate</span> <span m='502360'>the
  variance of the posterior distribution.</span> </p><p><span m='504620'>So the
  idea is somewhat similar.</span> </p><p><span m='507220'>So not only we have
  an estimate for the position</span> <span m='510900'>of the object at this
  particular time,</span> <span m='513409'>but we also have a probability
  distribution</span> <span m='516230'>for what the true position might
  be.</span> </p><p><span m='519980'>And once we have such a posterior
  probability</span> <span m='523240'>distribution, we can find an interval with
  the property</span> <span m='528340'>that 95% of the probability is inside
  that interval.</span> </p><p><span m='535020'>In other words, we construct an
  interval with the property</span> <span m='538860'>that the probability that X
  of t belongs to the interval.</span> </p><p><span m='546790'>(Now, we're
  talking about posterior probabilities.</span> </p><p><span m='549440'>So it is
  a posterior probability, given the data.)</span> <span m='555660'>This
  probability is, let's say, 0.95.</span> </p><p><span m='560670'>Such an
  interval gives useful information besides a point</span> <span
  m='563970'>estimate, it also gives us a range of possible values.</span>
  </p><p><span m='568470'>And outside this range, it is quite unlikely</span>
  <span m='571760'>to have the true trajectory be out there.</span> </p><p><span
  m='574770'>So here we're showing some confidence intervals that</span> <span
  m='578800'>apply to different times, and they're pretty narrow,</span> <span
  m='582830'>they're pretty small.</span> </p><p><span m='584260'>And they
  indicate, they give us confidence</span> <span m='588370'>that we have pretty
  accurate estimates</span> <span m='591230'>of the true trajectory.</span>
  </p><p><span m='593940'>This kind of confidence intervals</span> <span
  m='595760'>that we have discussed in the context of this examples</span> <span
  m='599060'>are called Bayesian confidence intervals.</span> </p><p><span
  m='603580'>And they're very useful when you report your results,</span> <span
  m='606540'>to not just give point estimates,</span> <span m='608560'>but to
  also provide confidence intervals.</span> </p><p><span m='613540'>Coming back
  to the bigger picture, what</span> <span m='616150'>happened in this
  particular example</span> <span m='618490'>is quite indicative of many real
  world applications.</span> </p><p><span m='622100'>One starts with a linear
  model, in which</span> <span m='624870'>we have a linear relation between the
  variables that</span> <span m='629590'>are unknown and the
  observations,</span> <span m='632180'>but where also the observations are
  corrupted by noise.</span> </p><p><span m='635180'>One makes certain normality
  and independence assumptions.</span> </p><p><span m='638495'>And as long as
  the modeling has been done carefully</span> <span m='641500'>and the
  assumptions are justified, then</span> <span m='644050'>by carrying out this
  procedure, one usually</span> <span m='647560'>obtains estimates that are very
  helpful and very informative.</span> </p><p></p>
uid: 1a5b6484d7355052ee87edff14cd3a84
type: course
layout: video
---
