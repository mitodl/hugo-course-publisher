---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: CipR1Jypkz0
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    title: Video-YouTube-Stream
    type: Video
    uid: 34ed5f475f5055013b5bf997aea9ca28
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/CipR1Jypkz0/default.jpg'
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ab1518681c604c7b2018307471e70690
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: CipR1Jypkz0
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e4c21e458f02e075651ee49bec0f2ef1
  - id: CipR1Jypkz0.srt
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-mean-squared-error/CipR1Jypkz0.srt
    title: 3play caption file
    type: null
    uid: 7ae75efd2f40dc0970c8c5780dcc274e
  - id: CipR1Jypkz0.pdf
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-mean-squared-error/CipR1Jypkz0.pdf
    title: 3play pdf file
    type: null
    uid: d800b7b51f6a0ca67772c24b6fda51e7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: abcd2e9852b5f8363e56ebf1c5adeb68
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 66da263f59f7aa1b47108a8008c78fc3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-05_300k.mp4
    parent_uid: 9ebccd9cb86d3295a079906b35db8c19
    title: Video-Internet Archive-MP4
    type: Video
    uid: d3d3682324029800c1e3dae57c71cbe0
inline_embed_id: 18355522themeansquarederror51939134
order_index: 1471
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-mean-squared-error
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-mean-squared-error
title: The Mean Squared Error
transcript: >-
  <p><span m='760'>We now continue our discussion of the model in which we
  obtain</span> <span m='5090'>several measurements of an unknown random
  variable Theta</span> <span m='9170'>in the presence of additive noise,</span>
  <span m='11450'>under the same assumptions as before.</span> </p><p><span
  m='13500'>Theta and Wi are all independent random variables.</span>
  </p><p><span m='17670'>And they're also normal.</span> </p><p><span
  m='19670'>We have seen that in this case, the posterior distribution</span>
  <span m='23320'>of Theta is a normal distribution,</span> <span m='26430'>and
  it takes this particular form.</span> </p><p><span m='29180'>We found the mean
  of the posterior distribution, which</span> <span m='32990'>is also the
  maximum posterior probability estimate.</span> </p><p><span m='36450'>And it
  is given by this expression.</span> </p><p><span m='39050'>Now that we have an
  estimate in our hands, we can ask,</span> <span m='42020'>how good is this
  estimate?</span> </p><p><span m='43860'>And for this, we need an appropriate
  performance</span> <span m='46270'>measure.</span> </p><p><span m='47060'>For
  estimation problems, a reasonable performance measure</span> <span
  m='50490'>is to look at the mean value of the squared error.</span>
  </p><p><span m='55960'>But given that we have already obtained
  observations,</span> <span m='59330'>what we're interested in is the
  conditional mean squared error.</span> </p><p><span m='63860'>This is the
  error that's remaining</span> <span m='66630'>after we have seen the
  observations.</span> </p><p><span m='70910'>Now, let us notice something
  here.</span> </p><p><span m='74620'>If I tell you the value of the
  observations,</span> <span m='77900'>then my estimator is completely
  determined.</span> </p><p><span m='82720'>The estimator is a random
  variable</span> <span m='84940'>that processes the data and comes up with an
  estimate.</span> </p><p><span m='88530'>So although it is a random
  variable,</span> <span m='90830'>once I tell you the value of the
  observations,</span> <span m='93990'>the value of this random variable</span>
  <span m='95660'>has been completely determined.</span> </p><p><span
  m='97590'>And so we can replace it with its actual numerical value,</span>
  <span m='102470'>which is theta hat.</span> </p><p><span m='103930'>And it is
  given by this expression.</span> </p><p><span m='107520'>Now remember also
  that theta hat, the estimate that we're</span> <span m='111190'>using, is the
  mean of the posterior distribution.</span> </p><p><span m='115479'>In this
  conditional universe where</span> <span m='117300'>we have conditioned on this
  information,</span> <span m='120000'>theta hat is the mean of this random
  variable.</span> </p><p><span m='122710'>So we're dealing with the square
  distance from the mean.</span> </p><p><span m='127030'>And then we take the
  expected value.</span> </p><p><span m='129100'>But that's nothing but the
  variance</span> <span m='131670'>of Theta in this conditional universe.</span>
  </p><p><span m='134920'>So what we're looking for is the variance of the
  posterior</span> <span m='139070'>distribution of Theta, given the
  observations</span> <span m='142000'>that we have obtained.</span>
  </p><p><span m='143820'>Can we eyeball the variance by just</span> <span
  m='146040'>looking at this formula for the posterior distribution?</span>
  </p><p><span m='150090'>More or less, we can.</span> </p><p><span
  m='151730'>Recall this earlier fact that if I give you</span> <span
  m='154380'>a density of this form, you recognize that it is normal.</span>
  </p><p><span m='157640'>And you also recognize that the variance</span> <span
  m='160390'>is determined by the coefficient that</span> <span m='162850'>comes
  next to a term of the form x squared.</span> </p><p><span m='166690'>Now, this
  is a PDF involving a variable x.</span> </p><p><span m='170329'>Here, we are
  talking about a PDF of Theta.</span> </p><p><span m='172920'>So what we're
  looking for is the constant</span> <span m='175070'>that sits next to the
  theta squared term.</span> </p><p><span m='178820'>There's going to be
  multiple theta squared terms.</span> </p><p><span m='181370'>So we need to
  collect all of them.</span> </p><p><span m='183650'>And so we find that the
  overall coefficient sitting next</span> <span m='187340'>to theta squared
  terms is as follows.</span> </p><p><span m='190430'>From this, we obtain a
  contribution</span> <span m='192790'>of 1 over 2 sigma 0 squared.</span>
  </p><p><span m='197800'>And similarly from here, we're going</span> <span
  m='199600'>to obtain a coefficient next to theta</span> <span
  m='201490'>squared of 1 over 2 sigma 1 squared.</span> </p><p><span
  m='203980'>We continue the same way.</span> </p><p><span m='206350'>And
  finally from the last term, we</span> <span m='209030'>obtain a contribution
  of this kind.</span> </p><p><span m='213070'>Now, we take this factor of 2,
  move it to the other side.</span> </p><p><span m='216210'>So we know what 2
  times alpha is.</span> </p><p><span m='219520'>And then we need to take the
  inverse of that,</span> <span m='221900'>so as to obtain 1 over 2
  alpha.</span> </p><p><span m='224680'>And what we obtain is that 1 over 2
  alpha, when</span> <span m='228190'>alpha is given by this expression,</span>
  <span m='230340'>is equal to this expression here.</span> </p><p><span
  m='233160'>And so we have found the conditional variance,</span> <span
  m='236870'>the variance of the posterior distribution of Theta given</span>
  <span m='239860'>the data that we have available in our hands.</span>
  </p><p><span m='242940'>Now, this is the mean squared error</span> <span
  m='245990'>given that you have seen some particular piece</span> <span
  m='248970'>of information.</span> </p><p><span m='250610'>What about the
  overall mean squared error?</span> </p><p><span m='253780'>This is the
  quantity that you care about</span> <span m='255830'>before you go and make
  the actual measurements.</span> </p><p><span m='259120'>This tells you how
  well you expect</span> <span m='261790'>to estimate your random variable
  Theta.</span> </p><p><span m='266000'>Well, we can use here the total
  expectation theorem,</span> <span m='270090'>and write the expected value as a
  weighted average</span> <span m='276140'>of the conditional expectations under
  different scenarios,</span> <span m='284710'>namely under different
  measurements of X,</span> <span m='289130'>and average those conditional
  expectations</span> <span m='291659'>over the possible values of X.</span>
  </p><p><span m='296650'>Now, this quantity here is actually a constant.</span>
  </p><p><span m='301140'>It is this constant here.</span> </p><p><span
  m='304330'>So we can pull it outside the expectation.</span> </p><p><span
  m='306650'>What we're left is the integral of a PDF</span> <span
  m='311120'>over all possible values, which has to be equal to 1.</span>
  </p><p><span m='316460'>So what we're left with is just the value</span> <span
  m='319210'>of this constant, which is this particular number.</span>
  </p><p><span m='322270'>And so we concluded that the overall unconditional
  mean</span> <span m='325440'>squared error is also the same.</span>
  </p><p><span m='327750'>This makes perfect intuitive sense.</span>
  </p><p><span m='330530'>Our mean squared error is going to take this value no
  matter</span> <span m='334180'>what I observe.</span> </p><p><span
  m='335409'>So on the average, it will also take that particular value.</span>
  </p><p><span m='340860'>Now, this expression that we have derived</span> <span
  m='343540'>is also quite intuitive in its content.</span> </p><p><span
  m='346800'>Let us try to understand some special cases.</span> </p><p><span
  m='350640'>Suppose that some of the variances of the noise terms</span> <span
  m='358270'>is very small.</span> </p><p><span m='362940'>If one term is small,
  this means that the corresponding term</span> <span m='367220'>here is going
  to be big.</span> </p><p><span m='369170'>So the sum of those terms is going
  to be big.</span> </p><p><span m='373170'>As long as one term is big, than the
  sum is also big.</span> </p><p><span m='376550'>And then 1 over that is going
  to be small.</span> </p><p><span m='379620'>So in that case, the mean squared
  error is small.</span> </p><p><span m='383640'>What this is saying is that if
  just one of the measurements</span> <span m='389050'>has low noise, then the
  uncertainty that</span> <span m='392500'>remains for my random variable that
  I'm trying to estimate,</span> <span m='396650'>that uncertainty will be
  small.</span> </p><p><span m='398370'>I'm going to have a small error.</span>
  </p><p><span m='400450'>On the other hand, if all of the noise variances are
  large,</span> <span m='408130'>then this means that all of these terms</span>
  <span m='411740'>here are going to be small.</span> </p><p><span
  m='413290'>I'm adding small terms.</span> </p><p><span m='415280'>1 over
  something small is something big.</span> </p><p><span m='418159'>And so the
  mean squared error is going to be large.</span> </p><p><span m='422860'>That
  is, if all my measurements are very noisy,</span> <span m='425810'>then I do
  not expect to estimate my random variable particularly</span> <span
  m='429440'>well.</span> </p><p><span m='432470'>Let us now look at one more
  special case.</span> </p><p><span m='435590'>Suppose that all of the
  variances</span> <span m='437610'>are the same, the noise variances as well
  as</span> <span m='440830'>the variance of the prior distribution.</span>
  </p><p><span m='443490'>In that case, this expression here is going to become
  1 over,</span> <span m='448650'>we have the sum of n plus 1 terms.</span>
  </p><p><span m='452030'>And each one of those terms is 1 over sigma squared,
  which</span> <span m='456340'>is the same as sigma squared over n plus
  1.</span> </p><p><span m='460960'>This expression makes quite a lot of
  sense.</span> </p><p><span m='464870'>It tells us that if we obtain more and
  more observations,</span> <span m='468110'>that is, as n increases, we improve
  our performance.</span> </p><p><span m='473280'>The variance of the posterior
  distribution,</span> <span m='475880'>or the mean squared error, goes down in
  this particular way.</span> </p><p><span m='482350'>Now, perhaps the most
  interesting aspect</span> <span m='485660'>of the facts that we have
  established</span> <span m='488190'>is this equation here that tells us</span>
  <span m='491190'>that not matter what this value of little x</span> <span
  m='494460'>is, the conditional variance, the variance of the posterior</span>
  <span m='499660'>distribution of Theta, is going to be the same.</span>
  </p><p><span m='503840'>In some sense, it tells us that no particular value of
  X</span> <span m='507990'>is more informative or more desirable than any other
  value.</span> </p><p><span m='513860'>In order to really appreciate what that
  statement is really</span> <span m='517049'>saying, it's better to look at a
  very concrete example.</span> </p><p><span m='520190'>So let us revisit the
  very first example</span> <span m='522929'>that we studied, in which case, we
  only have one observation</span> <span m='527950'>and where Theta and W are
  standard normal random</span> <span m='531380'>variables.</span> </p><p><span
  m='532590'>We did go through that example.</span> </p><p><span m='534350'>And
  we found that the estimator, the maximum posterior</span> <span
  m='538970'>probability estimator, was 1/2 of the observation.</span>
  </p><p><span m='544300'>And now we are in a position to also calculate</span>
  <span m='547400'>the conditional mean squared error given</span> <span
  m='550130'>any particular observation.</span> </p><p><span m='552260'>We apply
  this formula.</span> </p><p><span m='553950'>In fact, we are dealing with this
  special case</span> <span m='556620'>with sigma equal to 1.</span>
  </p><p><span m='559250'>So we use this expression here.</span> </p><p><span
  m='561890'>And we see that it is 1/2.</span> </p><p><span m='564640'>So we
  started with a prior variance</span> <span m='567240'>for Theta, which was
  1.</span> </p><p><span m='569730'>And after we obtained the
  observation,</span> <span m='572640'>our uncertainty gets reduced and the
  variance goes down to 1/2.</span> </p><p><span m='576950'>And this is true no
  matter what little x is.</span> </p><p><span m='580980'>Pictorially, here is
  what's happening.</span> </p><p><span m='585220'>We start with Theta being a
  standard normal.</span> </p><p><span m='589260'>So it has a distribution of
  this form, centered at 0.</span> </p><p><span m='593390'>This is a plot of the
  density of Theta, the prior density.</span> </p><p><span m='597770'>Suppose
  that we obtain a measurement.</span> </p><p><span m='600130'>And that
  measurement happens to be equal to 0.</span> </p><p><span m='605840'>If the
  measurement is equal to 0,</span> <span m='608220'>then our estimate will also
  be equal to 0.</span> </p><p><span m='612850'>The posterior distribution of
  theta</span> <span m='615690'>is going to be a normal distribution whose mean
  is</span> <span m='620320'>the estimate and whose variance is this quantity
  that we</span> <span m='626900'>have calculated, which is 1/2.</span>
  </p><p><span m='629080'>And therefore, it is narrower than the original
  PDF</span> <span m='634060'>that we started from.</span> </p><p><span
  m='635650'>So initially, we had a fair amount of uncertainty</span> <span
  m='638410'>about Theta.</span> </p><p><span m='639610'>After we obtained a
  measurement of 0,</span> <span m='642270'>this kind of reinforces our
  belief</span> <span m='644420'>that Theta is somewhere near 0.</span>
  </p><p><span m='647130'>And so we obtain a narrower distribution.</span>
  </p><p><span m='650200'>This is our updated belief about Theta.</span>
  </p><p><span m='653650'>But what if I happen to obtain a measurement
  that's</span> <span m='657100'>somewhere out here?</span> </p><p><span
  m='660000'>In this case, my estimate is going</span> <span m='663140'>to be
  1/2 of what I observed.</span> </p><p><span m='668052'>It's here.</span>
  </p><p><span m='669330'>And the posterior PDF of Theta is</span> <span
  m='672960'>going to be a normal PDF that's centered around this point</span>
  <span m='677310'>and has the same variance, 1/2.</span> </p><p><span
  m='685370'>So in some sense, this particular measurement</span> <span
  m='688500'>would be thought of as a quite abnormal one.</span> </p><p><span
  m='691830'>We're really surprised to obtain an observation which</span> <span
  m='695520'>is so far away from 0.</span> </p><p><span m='697760'>Because our
  prior distribution told us</span> <span m='699970'>that Theta is somewhere
  here.</span> </p><p><span m='702070'>So we have been surprised.</span>
  </p><p><span m='703970'>But after the surprise and after we form our estimate
  of Theta,</span> <span m='709450'>our state of knowledge about Theta</span>
  <span m='712260'>is that Theta is a random variable</span> <span
  m='714960'>and it has a distribution that's normal,</span> <span
  m='717730'>centered around this point, and whose width</span> <span
  m='721220'>is the same no matter what particular observation I happen</span>
  <span m='726720'>to get.</span> </p><p><span m='727660'>So even though this
  particular observation value is unusual,</span> <span m='732840'>after it is
  obtained, the remaining uncertainty</span> <span m='735990'>about Theta is the
  same as if we had obtained</span> <span m='740120'>any other particular value
  of X. So this</span> <span m='743570'>is a very remarkable property
  that's</span> <span m='745650'>special to this type of estimation problems
  involving</span> <span m='749190'>normal random variables and linear
  relations.</span> </p><p><span m='752340'>It has a very nice side
  effect.</span> </p><p><span m='754740'>It means that we can report, we
  can</span> <span m='757260'>say anything there is to be said about the
  performance</span> <span m='760780'>of this maximum a posteriori probability
  estimator.</span> </p><p><span m='764600'>By just giving a single number,
  we</span> <span m='767240'>can characterize performance only</span> <span
  m='769170'>in terms of this number, as opposed</span> <span m='771470'>to
  having to tell what this conditional mean squared</span> <span
  m='774980'>error is for the different values of X.</span> </p><p></p>
uid: 9ebccd9cb86d3295a079906b35db8c19
type: courses
layout: video
---
