---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 1R4IzkWSNgI
    parent_uid: da89b30a944e3802356318ee69ff6966
    title: Video-YouTube-Stream
    type: Video
    uid: e03b1488ab135379d0f140e98fb98da4
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/1R4IzkWSNgI/default.jpg'
    parent_uid: da89b30a944e3802356318ee69ff6966
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 55ac90d6f7747601168315e438440131
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 1R4IzkWSNgI
    parent_uid: da89b30a944e3802356318ee69ff6966
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7467cebb69b0d329c195acd410cb43a5
  - id: 1R4IzkWSNgI.srt
    parent_uid: da89b30a944e3802356318ee69ff6966
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-of-one-random-variable-based-on-another/1R4IzkWSNgI.srt
    title: 3play caption file
    type: null
    uid: 22e2e5e0ba17b4b4f3deba5b440e8343
  - id: 1R4IzkWSNgI.pdf
    parent_uid: da89b30a944e3802356318ee69ff6966
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-of-one-random-variable-based-on-another/1R4IzkWSNgI.pdf
    title: 3play pdf file
    type: null
    uid: 9d787fe1d1e8feac0cfe1e7a6c4181de
  - id: Caption-3Play YouTube id-SRT
    parent_uid: da89b30a944e3802356318ee69ff6966
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 07032b738acfa2aeb9a2b2e5771cc870
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: da89b30a944e3802356318ee69ff6966
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7e245451b58387c38119b3c15efa232a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-03_300k.mp4
    parent_uid: da89b30a944e3802356318ee69ff6966
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8d58471664af0c9f3d46f91dd20f8d20
inline_embed_id: 29685251lmsestimationofonerandomvariablebasedonanother4970343
order_index: 1525
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: lms-estimation-of-one-random-variable-based-on-another
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-of-one-random-variable-based-on-another
title: LMS Estimation of One Random Variable Based on Another
transcript: >-
  <p><span m='840'>After our warm-up, we can now come to the real
  problem.</span> </p><p><span m='5070'>We have, again, a random variable
  Theta</span> <span m='7320'>with a known prior distribution.</span>
  </p><p><span m='9620'>And we're interested in a point estimate.</span>
  </p><p><span m='12280'>What will be different this time,</span> <span
  m='13700'>however, is that we now have an observation.</span> </p><p><span
  m='16820'>And we also have a model of that observation</span> <span
  m='20290'>as a conditional distribution given</span> <span m='22120'>the value
  of the true parameter.</span> </p><p><span m='24220'>We observe a value of
  that random variable.</span> </p><p><span m='27885'>That value is little
  x.</span> </p><p><span m='29410'>And on the basis of that value, we</span>
  <span m='31650'>would like to now come up with a point</span> <span
  m='33910'>estimate of the unknown random variable Theta.</span> </p><p><span
  m='38140'>How do we proceed?</span> </p><p><span m='39380'>We can, of course,
  use the Bayes rule.</span> </p><p><span m='41640'>And the Bayes rule is going
  to give us</span> <span m='44510'>a distribution for the unknown random
  variable given</span> <span m='49250'>the observation that we have
  obtained.</span> </p><p><span m='52440'>And that distribution could be
  discrete or continuous.</span> </p><p><span m='55850'>Let me just plot
  something as if it's continuous.</span> </p><p><span m='61010'>And now that we
  have the posterior distribution</span> <span m='63150'>of Theta, we would like
  to come up with a point estimate.</span> </p><p><span m='66610'>How do we do
  it?</span> </p><p><span m='68160'>Remember our earlier conclusion.</span>
  </p><p><span m='71039'>If we do not have any observations,</span> <span
  m='73320'>if we live in a universe where we have a distribution of
  Theta</span> <span m='76190'>and we want a point estimate, the optimal,</span>
  <span m='78730'>the one that minimizes the mean squared error,</span> <span
  m='81840'>is the expected value of our random variable.</span> </p><p><span
  m='84860'>But now we live in a different universe,</span> <span m='86960'>in a
  universe where we have a conditional distribution</span> <span m='89695'>of
  Theta.</span> </p><p><span m='91539'>We want to minimize the conditional mean
  squared error,</span> <span m='97220'>because this is the mean squared error
  that</span> <span m='99450'>applies to this conditional universe in which we
  have</span> <span m='102850'>obtained a particular observation.</span>
  </p><p><span m='105690'>What is going to be the result of this
  minimization?</span> </p><p><span m='109570'>Well, this is a problem that's
  identical to the problem</span> <span m='112610'>of minimizing this quantity,
  except that now this problem is</span> <span m='116430'>posed in a conditional
  universe.</span> </p><p><span m='118840'>So we just follow the same
  steps.</span> </p><p><span m='120690'>And obtain the same solution, the
  solution</span> <span m='123220'>is going to be the expected value</span>
  <span m='125030'>of the unknown random variable, except that now we</span>
  <span m='127770'>live in a conditional universe.</span> </p><p><span
  m='129419'>And therefore, we should take the relevant expected value</span>
  <span m='133210'>which is the conditional expectation given</span> <span
  m='135890'>the information that we have available in our hands.</span>
  </p><p><span m='140980'>So to summarize, what we obtain is that the optimal
  estimate</span> <span m='146690'>is the conditional expectation.</span>
  </p><p><span m='149600'>And this is a relation between numbers.</span>
  </p><p><span m='152620'>But if we want to think about it more abstractly, we
  have</span> <span m='155950'>designed an estimator which is based on a random
  variable,</span> <span m='160470'>capital X, and calculate the expected
  value</span> <span m='164310'>of our random variable that we're trying to
  estimate,</span> <span m='167980'>namely Theta, on the basis of X.</span>
  </p><p><span m='172910'>Let us now continue with some observations.</span>
  </p><p><span m='176560'>Remember that the expected value of Theta</span> <span
  m='178960'>minimizes this quantity.</span> </p><p><span m='181430'>And we can
  write this more explicitly</span> <span m='183910'>in terms of the following
  inequality--</span> <span m='186900'>that if we use the expected value as an
  estimate,</span> <span m='192000'>the resulting mean squared error is less
  than</span> <span m='195420'>or equal to the mean squared error</span> <span
  m='198980'>that we would have obtained if we</span> <span m='201820'>had used
  any other estimate, c.</span> </p><p><span m='205220'>So this is a relation
  that's true for all c.</span> </p><p><span m='210430'>Now, let us take this
  inequality and translate it</span> <span m='214170'>into our more interesting
  context where</span> <span m='216600'>we have an observation available.</span>
  </p><p><span m='219870'>Once more, the conditional expectation</span> <span
  m='222660'>minimizes the mean squared error.</span> </p><p><span
  m='224829'>Let us write out explicitly what this</span> <span m='227570'>means
  in a form analogous to what we wrote down earlier.</span> </p><p><span
  m='231829'>What it means is that the expected value</span> <span m='234880'>of
  Theta minus the estimate, namely</span> <span m='240580'>the conditional
  expectation, squared.</span> </p><p><span m='246336'>In this conditional
  universe in which we live,</span> <span m='250610'>this is less than or equal
  to the mean squared error</span> <span m='257450'>that we would have obtained
  if we had used any other estimate</span> <span m='269130'>in the place of the
  conditional expectation.</span> </p><p><span m='271980'>So for any value g of
  x that we might have used,</span> <span m='276760'>the error would have been
  at least as large.</span> </p><p><span m='280260'>Why am I using this notation
  g here?</span> </p><p><span m='283230'>Let us go back to the bigger
  picture.</span> </p><p><span m='285850'>What we have is that we are obtaining
  a numerical value x.</span> </p><p><span m='291250'>We do some processing to
  it which</span> <span m='294020'>corresponds to some function g.</span>
  </p><p><span m='297120'>And we come up with an estimate which</span> <span
  m='301400'>is a function of the little x that we have observed.</span>
  </p><p><span m='306550'>So no matter what estimate we use,</span> <span
  m='309740'>the mean squared error is going to be at least as large</span>
  <span m='312540'>as the mean squared error that we obtain</span> <span
  m='314450'>if we use the conditional expectation.</span> </p><p><span
  m='317840'>Now, let us take this inequality here and write it</span> <span
  m='321770'>in a more abstract form.</span> </p><p><span m='324290'>Suppose
  that we have settled on some particular estimator</span> <span m='328370'>and
  we want to compare this estimator with the expected</span> <span
  m='331940'>value estimator.</span> </p><p><span m='334040'>Then we're going to
  get the following inequality.</span> </p><p><span m='340110'>If we use the
  conditional expectation</span> <span m='344580'>as an estimator in a
  conditional universe</span> <span m='349390'>where we know the value of the
  random variable X,</span> <span m='352750'>the corresponding mean squared
  error</span> <span m='354740'>is going to be less than or equal to the mean
  squared error</span> <span m='359710'>obtained by the alternative estimator
  g.</span> </p><p><span m='366630'>What does this inequality say?</span>
  </p><p><span m='368690'>This inequality is simply an abstract version</span>
  <span m='372040'>of the previous inequality.</span> </p><p><span
  m='373890'>The previous inequality is true for all little x.</span>
  </p><p><span m='380520'>Here we have an inequality between random
  variables.</span> </p><p><span m='383720'>This random variable here is a
  random variable</span> <span m='388160'>that takes this specific numerical
  value, whenever</span> <span m='392500'>capital X takes the value little
  x.</span> </p><p><span m='395305'>When X takes the value little x,
  we're</span> <span m='397780'>conditioning on this event.</span> </p><p><span
  m='399250'>And when X is equal to little x, this quantity</span> <span
  m='404370'>takes on this particular numerical value.</span> </p><p><span
  m='407440'>And similarly, on the other side,</span> <span m='410060'>this is a
  random variable that takes</span> <span m='412810'>this particular numerical
  value whenever</span> <span m='415159'>capital X is equal to little x.</span>
  </p><p><span m='418680'>Now that we have an inequality between random
  variables,</span> <span m='421860'>actually between conditional
  expectations,</span> <span m='425510'>we can take expectations of both
  sides.</span> </p><p><span m='428770'>And we use the law of iterated
  expectations.</span> </p><p><span m='431160'>The expectation of a conditional
  expectation</span> <span m='434000'>is an unconditional expectation.</span>
  </p><p><span m='438680'>So we obtain this as the expected</span> <span
  m='445090'>value of this quantity.</span> </p><p><span m='447950'>And it's
  less than or equal to the expected value</span> <span m='452130'>of this
  quantity using, again, the law</span> <span m='454120'>of iterated
  expectations.</span> </p><p><span m='456659'>We obtain this relation
  here.</span> </p><p><span m='463980'>And what this inequality is saying</span>
  <span m='466970'>is that the overall mean squared error,</span> <span
  m='470310'>if we use the conditional expectation, now</span> <span
  m='473800'>as an estimator, is less than or equal to the mean squared
  error</span> <span m='479540'>that we would obtain if we had used any other
  estimator.</span> </p><p><span m='486900'>So this inequality refers to the
  following picture.</span> </p><p><span m='491150'>We obtain an observation
  which is a random variable.</span> </p><p><span m='495000'>We process that
  random variable to come up</span> <span m='498050'>with an estimator which is
  a function of the random variable</span> <span m='503890'>that we observe and
  so is itself a random variable.</span> </p><p><span m='508350'>So when we use
  this random variable to estimate Theta,</span> <span m='511570'>we obtain a
  certain mean squared error.</span> </p><p><span m='513799'>This is going to be
  at least as large as the mean squared error</span> <span m='517230'>that we
  obtain if we use the conditional expectation</span> <span m='522179'>as our
  estimator.</span> </p><p><span m='524049'>So to summarize, the conditional
  expectation</span> <span m='528650'>of Theta, viewed as a random
  variable,</span> <span m='532190'>as an estimator, what we call the LMS
  estimator of Theta,</span> <span m='537690'>has the property that it
  minimizes</span> <span m='539850'>the mean squared error over all possible
  alternative</span> <span m='544830'>estimators.</span> </p><p><span
  m='546350'>So if you want to design this box using some other function</span>
  <span m='551420'>g, you're going to obtain a mean squared error that's</span>
  <span m='555000'>going to be no better than what you obtain if you were</span>
  <span m='558580'>to use the conditional expectation.</span> </p><p></p>
uid: da89b30a944e3802356318ee69ff6966
type: course
layout: video
---
