---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: mxpC3MEiATQ
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    title: Video-YouTube-Stream
    type: Video
    uid: b2367729aed90341afa94e88119b49ae
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/mxpC3MEiATQ/default.jpg'
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2cbbb0bc46486b5221202a6a837ff111
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: mxpC3MEiATQ
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4054270a7a7a5423ac58fecbc3a632d8
  - id: mxpC3MEiATQ.srt
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/polling-revisited/mxpC3MEiATQ.srt
    title: 3play caption file
    type: null
    uid: edf44416efe8f5ede014cfc37885536a
  - id: mxpC3MEiATQ.pdf
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/polling-revisited/mxpC3MEiATQ.pdf
    title: 3play pdf file
    type: null
    uid: 60ebd8877ddd6c1ce710283beacd8fcb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e0cbdad25a9ea71b7115a405d317767f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c4fb7245c8745d5ab73f8823b8409dc2
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L19-07_300k.mp4
    parent_uid: 8046e5486b39a300c2e4c360d1993a83
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2c47b0d14ddf1e26d4cf80004239215d
inline_embed_id: 29132517pollingrevisited26502158
order_index: 1813
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: polling-revisited
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/polling-revisited
title: Polling Revisited
transcript: >-
  <p><span m='2050'>We now revisit the polling problem that we</span> <span
  m='4500'>have started earlier.</span> </p><p><span m='6390'>When we first
  looked at that problem, we used the Chebyshev</span> <span m='9210'>inequality
  to obtain certain bounds and numerical results.</span> </p><p><span
  m='13820'>What we want to do now is instead to use a central limit</span>
  <span m='18000'>theorem-type approximation, which we hope that it will
  be</span> <span m='22110'>more accurate and more informative.</span>
  </p><p><span m='24920'>Let us remind ourselves of the setting.</span>
  </p><p><span m='27350'>We want to estimate a certain number, p, which is
  the</span> <span m='30940'>fraction of the population that will vote yes in
  a</span> <span m='33510'>certain referendum.</span> </p><p><span m='34960'>And
  we estimate p by picking a sample out of the population.</span> </p><p><span
  m='39010'>We pick n people.</span> </p><p><span m='40650'>We pick them
  randomly, uniformly over the population</span> <span m='44360'>and
  independently.</span> </p><p><span m='46090'>For each one of the people in the
  sample, we ask them if</span> <span m='49360'>they will vote to yes or no, and
  then we record their</span> <span m='52520'>answers in Bernoulli random
  variables, Xi.</span> </p><p><span m='56360'>So by the assumptions that we
  have made, these Xi's are</span> <span m='59590'>independent Bernoulli random
  variables, and their mean is</span> <span m='63950'>equal to p.</span>
  </p><p><span m='66580'>We count how many X's were equal to 1.</span>
  </p><p><span m='69760'>That's the number of yeses.</span> </p><p><span
  m='71000'>We divide by n, and that gives us the fraction in the</span> <span
  m='73700'>population that have responded yes.</span> </p><p><span
  m='76070'>This is the sample mean of the X's.</span> </p><p><span
  m='78610'>And we use this sample mean to estimate the</span> <span
  m='81210'>unknown fraction p.</span> </p><p><span m='84200'>We would like the
  error in our estimation to be small, that</span> <span m='88960'>is the
  difference between the sample mean and the true value</span> <span m='91990'>p
  to be small, less, let's say, than</span> <span m='95280'>one percentage
  point.</span> </p><p><span m='97030'>Now there's no way of guaranteeing that
  this spec</span> <span m='100300'>will be met with certainty, unless we sample
  almost</span> <span m='104070'>everyone in the population.</span> </p><p><span
  m='105780'>But what we can do instead is to ask that these</span> <span
  m='109740'>specifications are violated with only a small probability.</span>
  </p><p><span m='114520'>So we look at the probability that our estimation
  error is</span> <span m='118150'>larger than what we want.</span> </p><p><span
  m='121290'>This is the case that we do not meet the specs, and we</span> <span
  m='124310'>would like this probability to be small.</span> </p><p><span
  m='127410'>One possible question is what the value of n should be in</span>
  <span m='131880'>order to meet the specs.</span> </p><p><span m='133590'>But
  in order to do any calculations, we first need a</span> <span m='136310'>way
  of approximating this probability.</span> </p><p><span m='139520'>We will do
  that using the central limit theorem.</span> </p><p><span m='142700'>The
  central limit theorem involves this standardized</span> <span
  m='146070'>version of the random variable Sn, where Sn stands for the</span>
  <span m='150730'>sum of the X's.</span> </p><p><span m='153390'>We know that
  this random variable is</span> <span m='155090'>approximately normal.</span>
  </p><p><span m='156620'>And what we want to do now is to take this event and
  rewrite</span> <span m='161050'>it in an equivalent way but which involves
  this random</span> <span m='164490'>variable Zn.</span> </p><p><span
  m='166900'>Let us start.</span> </p><p><span m='168030'>First, we note that
  here we a mu and a sigma, so we should</span> <span m='172590'>know what these
  are.</span> </p><p><span m='174280'>For a Bernoulli random variable, the mean
  is what we</span> <span m='178480'>already wrote down, and sigma is the square
  root of p</span> <span m='183340'>times 1 minus p.</span> </p><p><span
  m='187850'>Now let's look at this event.</span> </p><p><span m='189930'>Mn is
  the same as Sn/n, by definition.</span> </p><p><span m='197050'>And we can
  write p in this form, minus n times</span> <span m='202980'>p divided by
  n.</span> </p><p><span m='206790'>And we want this quantity to be
  larger</span> <span m='210220'>than or equal to 0.01.</span> </p><p><span
  m='213150'>So this event here is identical to</span> <span m='215550'>that
  event up there.</span> </p><p><span m='217490'>This starts to look like this
  expression.</span> </p><p><span m='220940'>p is the same as Mu.</span>
  </p><p><span m='222900'>But there is a little bit of a difference in</span>
  <span m='225340'>the denominator terms.</span> </p><p><span m='227190'>So
  let's see what we can do.</span> </p><p><span m='229820'>Let's take this same
  event but multiply both sides of the</span> <span m='237860'>inequality by a
  square root of n.</span> </p><p><span m='240380'>This causes this denominator
  term to become just square</span> <span m='244490'>root of n, and we get a
  square root of n term in the</span> <span m='249470'>numerator on the other
  side.</span> </p><p><span m='252260'>This is an equivalent description of the
  event.</span> </p><p><span m='255030'>Now we can multiply both sides of this
  inequality by sigma--</span> <span m='260720'>actually the denominators on
  both sides by sigma--</span> <span m='265580'>and we obtain this equivalent
  representation.</span> </p><p><span m='268930'>But now we notice that here we
  do have the random variable Zn</span> <span m='276110'>that we wanted.</span>
  </p><p><span m='277860'>And so we managed to express this event in terms of
  the</span> <span m='282050'>random variable Zn.</span> </p><p><span
  m='284000'>In particular what we have is that this probability is the</span>
  <span m='287960'>same as the probability that the absolute value of Zn
  is</span> <span m='293380'>larger than or equal to 0.01 square root of</span>
  <span m='298030'>n divided by sigma.</span> </p><p><span m='302140'>Then we
  can use the central limit theorem approximation to</span> <span
  m='306080'>approximate this probability by the corresponding</span> <span
  m='309360'>probability where we now use a standard normal random</span> <span
  m='313630'>variable instead of the Zn random variable.</span> </p><p><span
  m='320100'>So here, Z stands for a standard normal random</span> <span
  m='323860'>variable with mean 0 and variance equal to 1.</span> </p><p><span
  m='328780'>Let us now continue on a new slide so that we have some</span>
  <span m='331720'>working space.</span> </p><p><span m='333010'>And here is the
  result that we have derived so far.</span> </p><p><span m='337520'>If somebody
  gives us the value of n, we would like to be able</span> <span m='340630'>to
  calculate this probability using this approximation.</span> </p><p><span
  m='344100'>However, there's a slight difficulty because sigma is a</span>
  <span m='349040'>function that depends on p, and it is not known.</span>
  </p><p><span m='355210'>However, as we discussed when we first started the
  polling</span> <span m='358670'>problem, we do know that sigma is always
  less</span> <span m='362460'>than or equal to 1/2.</span> </p><p><span
  m='364520'>And this suggests that we could use here the worst-case</span>
  <span m='369340'>value of the standard deviation, replace sigma by</span>
  <span m='373000'>1/2 and instead look at this probability here.</span>
  </p><p><span m='377290'>How are these two probabilities related?</span>
  </p><p><span m='379990'>Which direction does the inequality go?</span>
  </p><p><span m='382800'>A sketch will be useful here.</span> </p><p><span
  m='385500'>Z is a standard normal, and it's centered at 0.</span> </p><p><span
  m='393200'>Somewhere here, we have a value of 0.02 square root n.</span>
  </p><p><span m='399650'>And somewhere further out, we have the value of 0.01
  square</span> <span m='405210'>root n divided by sigma.</span> </p><p><span
  m='409040'>Why are these two values ordered this way?</span> </p><p><span
  m='411860'>Since sigma is less than 1/2, 1 over sigma is bigger than 2.</span>
  </p><p><span m='418450'>So this expression here is bigger than</span> <span
  m='421170'>this expression there.</span> </p><p><span m='424180'>Since the
  inequality goes this way, now we can compare these</span> <span m='429250'>two
  events.</span> </p><p><span m='432230'>This event, that Z is larger in
  absolute value than this</span> <span m='436570'>number, is the probability of
  this tail of the distribution.</span> </p><p><span m='442170'>And we will have
  a similar probability from the other end</span> <span m='446540'>of the tail
  of the distribution.</span> </p><p><span m='449280'>Here we're talking about
  the probability of being larger</span> <span m='451880'>than or equal to this
  number, which would correspond only to</span> <span m='456159'>this part of
  the tail and, similarly, a small part of the</span> <span m='459830'>tail from
  the other side.</span> </p><p><span m='462200'>The blue event is smaller than
  the red event.</span> </p><p><span m='465590'>This is the probability of the
  blue event, so it's going to</span> <span m='469159'>be no larger than the
  probability of the red event.</span> </p><p><span m='474970'>Now if somebody
  gives us a value of n, we should be able</span> <span m='478690'>to calculate
  this probability.</span> </p><p><span m='480780'>How do we calculate
  it?</span> </p><p><span m='483740'>The probability that the absolute value is
  above a</span> <span m='487480'>certain number is equal to the probability of
  this tail plus</span> <span m='493600'>the probability of that tail.</span>
  </p><p><span m='495570'>But because of the symmetry of the normal
  distribution, this</span> <span m='498960'>is twice the probability of each
  one of the tails.</span> </p><p><span m='504450'>What is the probability of
  this tail?</span> </p><p><span m='506390'>It's 1 minus the probability of
  whatever is below that.</span> </p><p><span m='510740'>So it's 1 minus.</span>
  </p><p><span m='512669'>And the probability of being below that, this is
  the</span> <span m='516270'>standard normal CDF evaluated at 0.02 square root
  n.</span> </p><p><span m='524850'>So we do have now an expression for the
  desired</span> <span m='528870'>probability, or at least a bound for it, which
  is</span> <span m='532890'>expressed in terms of the standard normal
  CDF.</span> </p><p><span m='537640'>If somebody gives you a value of n, you
  can plug in here.</span> </p><p><span m='541970'>If n is 10,000, then square
  root of n is 100.</span> </p><p><span m='546410'>And this number becomes equal
  to 2.</span> </p><p><span m='550640'>And so in this case, what we obtain is
  that the probability</span> <span m='554730'>of interest is less than or equal
  to 2 times 1</span> <span m='559680'>minus Phi of 2.</span> </p><p><span
  m='563230'>Now we invoke the standard normal table.</span> </p><p><span
  m='567960'>From the normal table, we obtain that this quantity is</span> <span
  m='572730'>equal to twice 1 minus 0.9772, which evaluates to 0.046.</span>
  </p><p><span m='585060'>So if we use 10,000 people in our sample, then we will
  get</span> <span m='593300'>an accuracy of one percentage point with very
  high</span> <span m='597280'>probability.</span> </p><p><span m='598460'>The
  probability that we do not meet the specification so that</span> <span
  m='602620'>the accuracy that we get is worse than one percentage</span> <span
  m='605620'>point, that probability is quite small.</span> </p><p><span
  m='608660'>It's 0.046.</span> </p><p><span m='612450'>That is 4 and something
  percent.</span> </p><p><span m='618080'>This is pretty good.</span>
  </p><p><span m='619880'>And suppose that your boss now tells you, I only want
  the</span> <span m='625070'>probability of not meeting the specs to be
  5%.</span> </p><p><span m='630610'>You look at this result, and you say, with
  10,000, I</span> <span m='634670'>achieved a probability of a large
  error</span> <span m='638810'>that's less than 5%.</span> </p><p><span
  m='642210'>This means that I probably have some leeway and that I</span> <span
  m='645990'>can reduce the size of my sample.</span> </p><p><span
  m='649820'>What could the size of the sample be and</span> <span
  m='652690'>still meet those specs?</span> </p><p><span m='656060'>What we're
  trying to do here is that we have this</span> <span m='659630'>approximation
  for the probability of interest, and</span> <span m='664880'>we want to set
  this probability</span> <span m='667500'>to a value of 0.05.</span>
  </p><p><span m='675250'>Then we want to ask, what is the value of n that
  will</span> <span m='678860'>result in this particular probability of</span>
  <span m='682900'>not meeting the specs?</span> </p><p><span m='686060'>Now we
  can do the algebra.</span> </p><p><span m='688090'>And we find that this
  corresponds to requiring that</span> <span m='693080'>phi of 0.02 square root
  n to be equal to 0.975.</span> </p><p><span m='702320'>What's the
  interpretation of this?</span> </p><p><span m='705380'>We want to choose n so
  that the probability of the two</span> <span m='709500'>tails is 5%.</span>
  </p><p><span m='713780'>This means that we want this probability here to be 2
  and</span> <span m='718620'>1/2 percent.</span> </p><p><span m='720510'>This
  means that the probability of whatever is to</span> <span m='723240'>the left
  of this number should be 0.975, including the tail.</span> </p><p><span
  m='733550'>This means, again, that we have to look at the standard</span>
  <span m='738540'>normal table and ask, what's the value for which the CDF
  is</span> <span m='745150'>equal to 0.975?</span> </p><p><span m='748190'>So
  we look around, and we find 0.975 to be here, and it</span> <span
  m='754230'>corresponds to 1.96.</span> </p><p><span m='758130'>This tells us
  that 0.02 square root n</span> <span m='762750'>should be equal to
  1.96.</span> </p><p><span m='768840'>Then we solve for n, and we find that the
  value of n is</span> <span m='774240'>9,604, which is indeed some reduction
  from the 10,000 that</span> <span m='781110'>we had originally.</span>
  </p><p><span m='784450'>How does this relate to the real world?</span>
  </p><p><span m='788020'>When you read newspapers about polls, you will never
  see</span> <span m='792330'>sample sizes that are about 10,000.</span>
  </p><p><span m='796100'>You will usually see sample sizes of the order of
  1,000,</span> <span m='800290'>sometimes even smaller.</span> </p><p><span
  m='802530'>How can they do that?</span> </p><p><span m='804400'>Well, they can
  do that because the specs that they impose are</span> <span m='808100'>not as
  tight as the specs that we have here.</span> </p><p><span m='811140'>Usually,
  they tell you that the results are accurate</span> <span m='815100'>within
  three percentage points, let's say, instead of</span> <span m='818850'>one
  percentage point.</span> </p><p><span m='820600'>And by moving from 0.01 to
  0.03, and if you repeat those</span> <span m='826420'>calculations, you will
  find that the sample size of about</span> <span m='830090'>1,000 will actually
  do.</span> </p><p></p>
uid: 8046e5486b39a300c2e4c360d1993a83
type: courses
layout: video
---
