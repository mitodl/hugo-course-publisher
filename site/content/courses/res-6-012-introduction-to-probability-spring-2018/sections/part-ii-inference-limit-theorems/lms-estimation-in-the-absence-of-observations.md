---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: gH_OmTJ9vQs
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    title: Video-YouTube-Stream
    type: Video
    uid: 87a97396ddf0112cf23222a964ba6718
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/gH_OmTJ9vQs/default.jpg'
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1c6a5bb09429120082f7d728ba44ff01
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: gH_OmTJ9vQs
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4fb4bbc0b70836814ccdde7cdd4a7c7f
  - id: gH_OmTJ9vQs.srt
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-in-the-absence-of-observations/gH_OmTJ9vQs.srt
    title: 3play caption file
    type: null
    uid: dd25255bc43b6e56606ad61247271da4
  - id: gH_OmTJ9vQs.pdf
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-in-the-absence-of-observations/gH_OmTJ9vQs.pdf
    title: 3play pdf file
    type: null
    uid: e7107566c842d227317febc01742137a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: fdd4ccbdce6299eeab0da23f48d9e719
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1f03e599c321f9b34ef5659dbbf366f9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-02_300k.mp4
    parent_uid: 7b4eb81c456d700e40a8d187869b2b79
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7ba6b01be0d3faa7ebf96a1914bd3ce7
inline_embed_id: 40372573lmsestimationintheabsenceofobservations20040528
order_index: 1516
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: lms-estimation-in-the-absence-of-observations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-in-the-absence-of-observations
title: LMS Estimation in the Absence of Observations
transcript: >-
  <p><span m='500'>In this segment, we introduce the subject of least</span>
  <span m='2940'>mean squares estimation.</span> </p><p><span m='4690'>But as a
  warm-up, we will start with a very simple</span> <span m='7370'>special
  case.</span> </p><p><span m='8860'>Suppose that we have some random
  variable</span> <span m='11330'>that we wish to estimate and that we have the
  probability</span> <span m='14800'>distribution of this random variable-- a
  probability</span> <span m='17500'>mass function if it's discrete or a
  probability density</span> <span m='20440'>function if it's continuous.</span>
  </p><p><span m='22310'>As a concrete instance, suppose that our random
  variable</span> <span m='25060'>is uniformly distributed over a certain
  interval.</span> </p><p><span m='29050'>We would like to estimate this random
  variable.</span> </p><p><span m='32320'>We're interested in a point
  estimate.</span> </p><p><span m='34660'>However, we look at the very special
  case</span> <span m='37780'>where there are no observations available.</span>
  </p><p><span m='40450'>All that we have is this probability
  distribution.</span> </p><p><span m='43580'>How do we estimate this random
  variable?</span> </p><p><span m='46150'>Well, we can use the rules that we
  have already</span> <span m='48340'>developed, for example, the maximum</span>
  <span m='50530'>a posteriori probability rule, what would it do?</span>
  </p><p><span m='54079'>In this case, since there are no observations,</span>
  <span m='55995'>the posterior distribution of Theta is the same as the
  prior.</span> </p><p><span m='60530'>There are no observations that could
  change the prior.</span> </p><p><span m='63280'>So we need to find a point at
  which this distribution is</span> <span m='66540'>highest.</span> </p><p><span
  m='67710'>Well, because this distribution is flat,</span> <span m='70170'>the
  MAP rule does not give us a unique answer.</span> </p><p><span m='73920'>Any
  value of theta inside the interval from 4 to 10</span> <span m='78840'>would
  be an acceptable answer.</span> </p><p><span m='81880'>So any particular
  estimate in this interval would be fine.</span> </p><p><span m='89100'>So this
  rule is not particularly helpful.</span> </p><p><span m='91900'>How about a
  different estimator?</span> </p><p><span m='94450'>We have seen the
  conditional expectation estimator.</span> </p><p><span m='97180'>Once more, in
  our case, since we do not have any observations,</span> <span m='100840'>the
  conditional expectation is the same as the expectation.</span> </p><p><span
  m='103920'>And for this particular example, it</span> <span m='106000'>would
  give us the midpoint of the distribution, namely</span> <span m='108780'>an
  estimate equal to 7.</span> </p><p><span m='112270'>Now, this rule was
  inconclusive.</span> </p><p><span m='115750'>This rule gave us a
  number.</span> </p><p><span m='118000'>How can we choose and decide that one
  of these</span> <span m='122510'>is the right estimate?</span> </p><p><span
  m='124560'>We can do that if we introduce a specific performance
  criterion.</span> </p><p><span m='128650'>What is it that we wish from our
  estimators?</span> </p><p><span m='132100'>And the particular criterion, the
  one</span> <span m='134110'>that will we be focusing on, is the mean squared
  error.</span> </p><p><span m='138460'>If you come up with a certain
  estimate,</span> <span m='140840'>you look at how far is your estimate from
  the true value</span> <span m='144170'>that you're trying to estimate, take
  the square of that,</span> <span m='147040'>and average it.</span>
  </p><p><span m='148360'>And this leads us to a formulation</span> <span
  m='150850'>whereby we will try to find an estimate theta hat that</span> <span
  m='156010'>minimizes this mean squared error</span> <span m='158850'>over all
  possible estimates.</span> </p><p><span m='162230'>Let us now look at this
  formulation</span> <span m='164400'>and see how we can solve it.</span>
  </p><p><span m='167300'>This is a function of a single variable theta
  hat.</span> </p><p><span m='170650'>And we can try to minimize it using
  conventional methods.</span> </p><p><span m='174630'>To carry out this
  minimization, let</span> <span m='176820'>us first expand this expectation
  into a sum of terms.</span> </p><p><span m='181100'>We have the expected value
  of the square</span> <span m='183220'>of the random variable, then a cross
  term minus 2</span> <span m='186940'>the expected value of Theta times theta
  hat.</span> </p><p><span m='192360'>However, theta hat is a number that we're
  trying to choose.</span> </p><p><span m='196010'>It's not random.</span>
  </p><p><span m='197250'>Therefore, we can pull it outside the
  expectation.</span> </p><p><span m='200780'>And similarly, the last term, the
  expected value of theta hat</span> <span m='204079'>squared is just theta hat
  squared itself.</span> </p><p><span m='208970'>This is what we want to
  minimize.</span> </p><p><span m='210610'>How do we minimize it?</span>
  </p><p><span m='212280'>We take the derivative with respect to theta
  hat</span> <span m='216340'>and set it to 0.</span> </p><p><span
  m='218710'>And this gives us minus 2 the expected value of Theta</span> <span
  m='227480'>plus twice theta hat equal to 0.</span> </p><p><span m='232450'>And
  when we solve this, we find is</span> <span m='234770'>that theta hat, the
  optimal estimate</span> <span m='238180'>is equal to the expected value of
  Theta.</span> </p><p><span m='244040'>So this is the answer to our
  optimization problem.</span> </p><p><span m='248250'>The optimal estimate,
  according to the least squares criterion,</span> <span m='253460'>is the
  expected value of the random variable.</span> </p><p><span m='257709'>Now,
  it's interesting to derive this result, also,</span> <span m='260690'>in a
  second way.</span> </p><p><span m='262390'>Since it is a quite important and
  fundamental result,</span> <span m='265530'>let us see whether there is a
  different way of establishing</span> <span m='269465'>it that stays closer to
  the probabilistic world rather</span> <span m='273370'>than the calculus
  world.</span> </p><p><span m='275700'>So let us look at this criterion that we
  have here.</span> </p><p><span m='279050'>The expected value of the square of
  a random variable</span> <span m='283180'>is always equal to the variance of
  that random variable</span> <span m='292540'>plus the expected value of that
  random variable squared.</span> </p><p><span m='303480'>This is what we're
  trying to minimize.</span> </p><p><span m='306600'>Now, theta hat is a
  constant.</span> </p><p><span m='310190'>The variance of a random variable
  plus or minus</span> <span m='312960'>a constant is the same as the
  variance</span> <span m='317380'>of that random variable.</span> </p><p><span
  m='320020'>And there is nothing that we can do about this term.</span>
  </p><p><span m='323160'>So what we're trying to do is, essentially,</span>
  <span m='325680'>just try to minimize this term with respect to theta
  hat.</span> </p><p><span m='329900'>Now, here we have the square of
  something.</span> </p><p><span m='332980'>The way to minimize this is to try
  to make this quantity as</span> <span m='337810'>small as possible, make it 0
  if we can.</span> </p><p><span m='341490'>Well, we can make it 0 if we set
  theta hat equal to the expected</span> <span m='346430'>value of Theta.</span>
  </p><p><span m='348400'>So this term here is minimized.</span> </p><p><span
  m='354700'>When theta hat is equal to the expected value of Theta,</span>
  <span m='360150'>it is minimized because this is a choice that</span> <span
  m='363480'>will make this term equal to 0.</span> </p><p><span m='366620'>So
  this was a second derivation of why</span> <span m='369080'>this is the
  optimal estimate of Theta.</span> </p><p><span m='373440'>Once we adopt this
  particular estimate,</span> <span m='376670'>the mean squared error is going
  to be</span> <span m='379650'>equal to this, because this is our theta
  hat.</span> </p><p><span m='382680'>And, of course, we recognize that this is
  the variance.</span> </p><p><span m='385980'>So the variance of Theta is the
  least possible value</span> <span m='389790'>of the mean squared error that
  we</span> <span m='392120'>can obtain using any particular estimate.</span>
  </p><p><span m='395500'>And this is our final conclusion.</span> </p><p><span
  m='398250'>And in the next segment, we will exploit the conclusions</span>
  <span m='402230'>that we found here and apply them</span> <span m='404720'>to
  a more general situation.</span> </p><p></p>
uid: 7b4eb81c456d700e40a8d187869b2b79
type: courses
layout: video
---
