---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 00krscK7iBA
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    title: Video-YouTube-Stream
    type: Video
    uid: 1ab218ca6e065fef04e4915cf3aadab6
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/00krscK7iBA/default.jpg'
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 16a6fad4f8167eebdb1847d0b2426fd9
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 00krscK7iBA
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 5a28fb3f8003225ff952bb4e045d11a2
  - id: 00krscK7iBA.srt
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/maximum-likelihood-estimation-examples/00krscK7iBA.srt
    title: 3play caption file
    type: null
    uid: 38d786be3b61ef8c29736a79ca7d26ac
  - id: 00krscK7iBA.pdf
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/maximum-likelihood-estimation-examples/00krscK7iBA.pdf
    title: 3play pdf file
    type: null
    uid: d715a9e87c295b5672a536b28fa7e173
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4c5945bc70dc5faeeb71449bcd0d1acf
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 88839f87e24d8ba24025b50be66b8561
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L20-10_300k.mp4
    parent_uid: c485f02bf32f349e561c5e318b4be3f2
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0adfb390b45b766e115f678294e7107f
inline_embed_id: 8920400maximumlikelihoodestimationexamples94315140
order_index: 1903
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: maximum-likelihood-estimation-examples
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/maximum-likelihood-estimation-examples
title: Maximum Likelihood Estimation Examples
transcript: >-
  <p><span m='1550'>In this segment, we will go through two examples</span>
  <span m='4170'>of maximum likelihood estimation,</span> <span m='6760'>just in
  order to get a feel for the procedure involved</span> <span m='10240'>and the
  calculations that one has to go through.</span> </p><p><span m='13450'>Our
  first example will be very simple.</span> </p><p><span m='16129'>We have a
  binomial random variable</span> <span m='18320'>with parameters n and
  theta.</span> </p><p><span m='21270'>So think of having a coin that you flip n
  times,</span> <span m='25450'>and theta is the probability of heads</span>
  <span m='27750'>at each one of the tosses.</span> </p><p><span m='29680'>So we
  flip it n times and we observe</span> <span m='32090'>a certain numerical
  value, little k</span> <span m='35550'>for the random variable K. And on the
  basis</span> <span m='38350'>of that numerical value, we would like to
  estimate theta.</span> </p><p><span m='41810'>According to the maximum
  likelihood methodology,</span> <span m='44510'>the first step is to write down
  the likelihood function.</span> </p><p><span m='48250'>This is the probability
  of obtaining this particular piece</span> <span m='51510'>of data if the true
  parameter is theta.</span> </p><p><span m='55220'>Now, since K is a binomial
  random variable,</span> <span m='57980'>the probability of obtaining k heads
  in n tosses</span> <span m='61020'>is given by this expression here.</span>
  </p><p><span m='63830'>So what we need to do is to take the data that we have
  observed,</span> <span m='67900'>plug it in this formula, leave theta
  free--</span> <span m='71740'>we have here a function of theta--</span> <span
  m='74420'>and then maximize this function of theta over all theta.</span>
  </p><p><span m='78260'>Let us now do this calculation.</span> </p><p><span
  m='81020'>Actually, instead of maximizing this expression,</span> <span
  m='84220'>it's a little easier to maximize the logarithm</span> <span
  m='87340'>of this expression.</span> </p><p><span m='88960'>And the logarithm
  of this expression is as follows.</span> </p><p><span m='92150'>There's a
  first term, which is the logarithm of the n</span> <span m='95410'>choose k
  term.</span> </p><p><span m='96870'>Then, the logarithm of theta to the k is k
  times log theta.</span> </p><p><span m='102890'>And finally, the logarithm of
  the last term</span> <span m='105660'>is n minus k, log of 1 minus
  theta.</span> </p><p><span m='112130'>So we need to maximize this expression
  with respect</span> <span m='114550'>to theta.</span> </p><p><span
  m='115289'>In order to do that, we take the derivative with respect</span>
  <span m='118140'>to theta.</span> </p><p><span m='119530'>Here, there is no
  theta involved.</span> </p><p><span m='121130'>We get a contribution of
  0.</span> </p><p><span m='123210'>This term has a derivative of k divided by
  theta.</span> </p><p><span m='127390'>And this term here has a
  derivative,</span> <span m='129880'>which is n minus k times the
  derivative</span> <span m='134020'>of this logarithmic term, which is</span>
  <span m='136920'>1 over what is inside the logarithm.</span> </p><p><span
  m='139480'>But by the chain rule, because of this minus sign</span> <span
  m='142100'>here, we get also a minus sign, and we obtain this
  expression.</span> </p><p><span m='147900'>Now, at the maximum, the
  derivative</span> <span m='149790'>has to be equal to 0.</span> </p><p><span
  m='151920'>And this gives us now an equation for theta</span> <span
  m='154770'>that we can solve.</span> </p><p><span m='156270'>Let us take this
  term, move it to the right-hand side,</span> <span m='159630'>and then
  cross-multiply with the denominators</span> <span m='163270'>to obtain the
  relation that k minus k theta-- this</span> <span m='169560'>is obtained by
  multiplying this k with this one minus theta</span> <span m='172550'>factor--
  has to be equal to this term times theta, which</span> <span m='177920'>is n
  times theta minus k theta.</span> </p><p><span m='182160'>The k theta terms
  cancel, and we're</span> <span m='185370'>left with this expression, which
  tells us</span> <span m='188390'>that theta should be equal to k over
  n.</span> </p><p><span m='191680'>So this is the maximum likelihood
  estimate</span> <span m='193950'>for this particular problem, which</span>
  <span m='195450'>is a pretty reasonable answer.</span> </p><p><span
  m='197990'>If you would like to rephrase what we just</span> <span
  m='200380'>found in terms of estimators and random variables,</span> <span
  m='204040'>the maximum likelihood estimator is as follows.</span> </p><p><span
  m='208660'>We take the random variable that we observe, our
  observations,</span> <span m='212579'>and divide it by n.</span> </p><p><span
  m='214270'>And this is now a random variable,</span> <span m='216630'>which
  will be our estimator.</span> </p><p><span m='219720'>Now, notice that in this
  particular example,</span> <span m='222160'>the answer that we got is exactly
  the same as the answer</span> <span m='226090'>that we got in the context of
  Bayesian inference</span> <span m='229360'>when we were finding the maximum a
  posteriori probability</span> <span m='232950'>estimator, but for the special
  case</span> <span m='235810'>where the prior was a uniform
  distribution.</span> </p><p><span m='240160'>So if we assume that theta is
  actually a random variable</span> <span m='244400'>but has a uniform
  distribution, so that we have a flat prior,</span> <span m='248240'>and we
  carry out maximum a posteriori probability</span> <span
  m='251020'>estimation.</span> </p><p><span m='252080'>We do obtain exactly the
  same estimate.</span> </p><p><span m='254930'>And this is consistent with the
  comments</span> <span m='256740'>that we made earlier, that maximum likelihood
  estimation</span> <span m='259990'>can be interpreted also as MAP estimation
  with a flat prior.</span> </p><p><span m='265630'>Let us now move to our
  second example, which</span> <span m='267970'>will be a little more
  complicated.</span> </p><p><span m='270670'>Here, we have n random variables
  that are independent,</span> <span m='274830'>identically distributed.</span>
  </p><p><span m='276090'>They all have a normal distribution</span> <span
  m='278070'>with a certain mean and variance.</span> </p><p><span
  m='280540'>But both the mean and the variance are unknown,</span> <span
  m='283600'>and we want to estimate them on the basis</span> <span
  m='285560'>of these observations.</span> </p><p><span m='287570'>The first
  step is to write down the likelihood function.</span> </p><p><span
  m='291409'>That is the probability density function</span> <span
  m='293960'>for the vector of observations given some set of parameters.</span>
  </p><p><span m='299380'>Because of independence, the joint distribution</span>
  <span m='302650'>of the vector of X's that we have obtained is the
  product</span> <span m='308250'>of the PDFs of the individual X's, of the
  Xi's.</span> </p><p><span m='313510'>So the PDF of the typical Xi that has
  variance v and mean mu</span> <span m='321920'>is of this form.</span>
  </p><p><span m='323770'>So this is the likelihood function in this
  case.</span> </p><p><span m='327000'>This is the probability density of
  obtaining</span> <span m='329430'>a particular vector X of observations</span>
  <span m='332730'>when we have these particular parameters.</span> </p><p><span
  m='335909'>We would like to maximize this function.</span> </p><p><span
  m='340980'>As in our previous example, it is actually a little easier</span>
  <span m='344700'>to maximize the logarithm of this expression.</span>
  </p><p><span m='348900'>And this is the same as minimizing</span> <span
  m='350880'>the negative of the logarithm of this expression.</span>
  </p><p><span m='354480'>Now, when we take the logarithm of this
  expression,</span> <span m='357180'>we have a product.</span> </p><p><span
  m='358159'>So we're going to get a sum of logarithms.</span> </p><p><span
  m='361710'>And I leave it to you to verify that the negative logarithm</span>
  <span m='366350'>of this expression is of this form plus some other
  constant</span> <span m='371810'>that does not involve the parameters,</span>
  <span m='373930'>and which comes from this factor of 1 over square root
  2pi.</span> </p><p><span m='378120'>In particular, this term here
  appears</span> <span m='381820'>when we take the logarithm of this.</span>
  </p><p><span m='384220'>And this happens n times because we have a product of
  n terms.</span> </p><p><span m='388410'>And this term here appears when
  we</span> <span m='391070'>take the logarithm of this expression,</span> <span
  m='393640'>and after we put in the minus sign,</span> <span m='396550'>because
  we're actually considering</span> <span m='398080'>the negative of the
  logarithm.</span> </p><p><span m='400409'>Now, to carry out the minimization,
  what</span> <span m='403100'>we need to do is to take the derivative of this
  expression</span> <span m='406900'>with respect to mu, set it to zero,</span>
  <span m='409420'>and also take the derivative with respect to v</span> <span
  m='412270'>and set it to zero as well.</span> </p><p><span m='414320'>Solve
  those equations and find the optimal mu and v. So let's</span> <span
  m='420000'>start by optimizing with respect to mu.</span> </p><p><span
  m='422960'>So we're going to take the derivative of this expression</span>
  <span m='425720'>with respect to mu and set it to zero.</span> </p><p><span
  m='429160'>This term does not involve mu, so we only</span> <span
  m='431940'>need to take the derivative of this.</span> </p><p><span
  m='434690'>And the derivative of this is going</span> <span m='436640'>to be--
  there's a term 1 over v. And then</span> <span m='441470'>the derivative of a
  quadratic divided by 2</span> <span m='444180'>is just xi minus mu.</span>
  </p><p><span m='447930'>And we have one term for each possible i.</span>
  </p><p><span m='451960'>We get this equation.</span> </p><p><span
  m='454700'>Now we can cancel out v, and we're left with the equation</span>
  <span m='460909'>that the sum of the xi's is equal to the sum</span> <span
  m='465170'>of the mus, which is n times mu.</span> </p><p><span m='467920'>And
  now we can send n to the denominator</span> <span m='471260'>to obtain that
  the estimate of mu</span> <span m='475020'>is going to be the sum of the xi's
  divided by n.</span> </p><p><span m='479960'>So the maximum likelihood
  estimate of the mean</span> <span m='482670'>takes a very simple and very
  natural form.</span> </p><p><span m='485480'>It is just the sample
  mean.</span> </p><p><span m='488160'>Now, let us continue with the
  minimization with respect</span> <span m='491070'>to v. In order to carry out
  that minimization,</span> <span m='494670'>we need to take the derivative of
  this expression with respect</span> <span m='497680'>to v and set it to
  zero.</span> </p><p><span m='499900'>The derivative of the first term
  is</span> <span m='502110'>equal to n over 2 times 1 over v. And then from
  here,</span> <span m='508700'>when we take the derivative, we obtain</span>
  <span m='512915'>the sum of all these terms divided by 2v squared.</span>
  </p><p><span m='525180'>But actually, when we take the derivative of 1 over
  v,</span> <span m='527925'>the derivative is minus 1 over v squared.</span>
  </p><p><span m='531310'>And for this reason here, we will have a minus
  sign.</span> </p><p><span m='536330'>So this is the derivative with
  respect</span> <span m='538030'>to v. We set it equal to zero and carry out
  some algebra.</span> </p><p><span m='543260'>What is the algebra involved
  here?</span> </p><p><span m='545770'>We can delete this term, 2, that appears
  here and there.</span> </p><p><span m='551280'>This term v cancels out this
  exponent here.</span> </p><p><span m='556840'>Then we take this v, move it to
  the other side,</span> <span m='560700'>and then take this n and move it to
  this side,</span> <span m='564860'>underneath this term.</span> </p><p><span
  m='566630'>And finally, what we obtain after you carry out</span> <span
  m='569260'>this algebra is this expression, that the estimate</span> <span
  m='572690'>of the variance is some form of the sample variance</span> <span
  m='579150'>where we use the optimal value of mu.</span> </p><p><span
  m='583490'>And the optimal value of mu we have already found.</span>
  </p><p><span m='587500'>It's given by this expression here.</span>
  </p><p><span m='589990'>So we obtain a pretty natural estimate for the
  variance</span> <span m='593700'>as well by using this maximum likelihood
  methodology.</span> </p><p><span m='598340'>Now, these two examples were
  particularly nice</span> <span m='600880'>because the algebra was not too
  complicated.</span> </p><p><span m='604450'>And the answers turned out to be
  what</span> <span m='607160'>you might have guessed without using any fancy
  methods.</span> </p><p><span m='611410'>But in other problems, the
  calculations</span> <span m='613840'>may be more complicated and the answers
  may not be so obvious.</span> </p><p></p>
uid: c485f02bf32f349e561c5e318b4be3f2
type: course
layout: video
---
