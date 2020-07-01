---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: _hDfZF64wic
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    title: Video-YouTube-Stream
    type: Video
    uid: 65fa77d11a50d217c77556cce9422943
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/_hDfZF64wic/default.jpg'
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6045de373c3e28b837f6fb1b3b5ae1a5
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: _hDfZF64wic
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ec04ec32682acd9194ff7ccd49778788
  - id: hDfZF64wic.srt
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/summary/hDfZF64wic.srt
    title: 3play caption file
    type: null
    uid: c886df620b70f5d0de8de8f5c3666a38
  - id: hDfZF64wic.pdf
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/summary/hDfZF64wic.pdf
    title: 3play pdf file
    type: null
    uid: 41af517bb2ab00115b0bb8fcc1a78073
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: fbcf1becf9ff0a57dd780d5ceafa387c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b29be8474f48e86090c8c610228c7d64
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-10_300k.mp4
    parent_uid: 9bbd464de376277d543f9d60a5f78268
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3675b5e0eb641dcc532d87d174ff41d4
inline_embed_id: 34530560summary63400642
order_index: 1417
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: summary
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/summary
title: Summary
transcript: >-
  <p><span m='1260'>In this lecture sequence, we introduced</span> <span
  m='3390'>quite a few new concepts and went</span> <span m='5700'>through a
  fair number of examples.</span> </p><p><span m='8090'>So for this reason, it
  is useful now</span> <span m='9930'>to just take stock and summarize the key
  ideas and concepts.</span> </p><p><span m='14860'>The starting point in a
  Bayesian inference problem</span> <span m='17650'>is the following.</span>
  </p><p><span m='18580'>There's an unknown parameter, Theta,</span> <span
  m='20510'>and we're given a prior distribution</span> <span m='23050'>for that
  parameter.</span> </p><p><span m='24510'>We're also given a model for the
  observations, X,</span> <span m='28690'>in terms of a distribution that
  depends</span> <span m='31240'>on the unknown parameter, Theta.</span>
  </p><p><span m='34140'>The inference problem is as follows.</span>
  </p><p><span m='36610'>We will be given the value of the random variable
  X.</span> </p><p><span m='40590'>And then we want to find the posterior
  distribution</span> <span m='43690'>of Theta, that is, given this particular
  value of X, what</span> <span m='48060'>is the conditional distribution of
  Theta?</span> </p><p><span m='50420'>In the case where Theta is
  discrete,</span> <span m='52210'>this will be in terms of a PMF.</span>
  </p><p><span m='54060'>If Theta is continuous, this would be a PDF.</span>
  </p><p><span m='57630'>We find the posterior distribution</span> <span
  m='59550'>by using an appropriate version of the Bayes rule.</span>
  </p><p><span m='62760'>And here we have four different combinations or four
  choices,</span> <span m='68010'>depending on which variables are discrete or
  continuous.</span> </p><p><span m='73460'>This is a complete solution to the
  Bayesian inference</span> <span m='75780'>problem-- a posterior
  distribution.</span> </p><p><span m='78610'>But if we want to come up with a
  single guess of what Theta is,</span> <span m='84640'>then we use a so-called
  estimator.</span> </p><p><span m='87860'>What an estimator does is that it
  calculates a certain value</span> <span m='91289'>as a function of the
  observed data.</span> </p><p><span m='93830'>So g describes the way that the
  data are processed.</span> </p><p><span m='97380'>Because X is random, the
  estimator</span> <span m='100110'>itself will be a random variable.</span>
  </p><p><span m='102710'>But once we obtain a specific value of our random
  variable</span> <span m='106979'>and we apply this particular
  estimator,</span> <span m='109860'>then we get the realized value of the
  estimator.</span> </p><p><span m='113490'>So we apply g now to the lowercase
  x,</span> <span m='116740'>and this gives us an estimate, which is actually a
  number.</span> </p><p><span m='120940'>We have seen two particular ways of
  constructing</span> <span m='124200'>estimates or estimators.</span>
  </p><p><span m='126210'>One of them is the maximum a posteriori probability
  rule</span> <span m='131038'>in which we choose an estimate that maximizes the
  posterior</span> <span m='137210'>distribution.</span> </p><p><span
  m='138520'>So in the case where Theta is discrete,</span> <span
  m='140590'>this finds the value of theta, which</span> <span m='143500'>is the
  most likely one given our observation.</span> </p><p><span m='147280'>And
  similarly, in the continuous case,</span> <span m='149560'>it finds a value of
  theta at which</span> <span m='152360'>the conditional PDF of Theta would be
  largest.</span> </p><p><span m='156460'>Another estimator is the one that
  we</span> <span m='160000'>call the LMS or least mean squares estimator,
  which</span> <span m='163140'>calculates the conditional expectation</span>
  <span m='165390'>of the unknown parameter, given the observations</span> <span
  m='167880'>that we have obtained.</span> </p><p><span m='170160'>Finally, we
  may be interested in evaluating</span> <span m='173150'>the performance of a
  given estimator.</span> </p><p><span m='176110'>For hypotheses-testing
  problems we're</span> <span m='178260'>interested in the probability of
  error.</span> </p><p><span m='180910'>And we have the conditional probability
  of error.</span> </p><p><span m='183820'>Given the data that I have just
  observed</span> <span m='186730'>and given that I'm using a specific
  estimator,</span> <span m='189420'>what is the probability that I make a
  mistake?</span> </p><p><span m='192560'>And then there's the overall
  evaluation of the estimator--</span> <span m='196800'>how well does it do on
  the average</span> <span m='199720'>before I know what X is going to
  be?</span> </p><p><span m='203710'>And this is just the probability that
  I</span> <span m='206200'>will be making an incorrect decision.</span>
  </p><p><span m='209250'>For estimation problems, on the other hand,</span>
  <span m='211250'>we're interested in the distance between our estimates</span>
  <span m='214800'>from the true value of Theta.</span> </p><p><span
  m='216829'>And this leads us to the following conditional mean</span> <span
  m='220780'>squared error, given that we have already</span> <span
  m='224270'>obtained an observation.</span> </p><p><span m='225740'>And we come
  up with an estimator.</span> </p><p><span m='228400'>In particular, the value
  of the estimator at this time</span> <span m='230890'>would be completely
  determined by the data that we obtained.</span> </p><p><span m='234230'>But
  Theta, the unknown parameter remains random.</span> </p><p><span
  m='237460'>And there's going to be a certain squared error.</span>
  </p><p><span m='240790'>We find the conditional expectation</span> <span
  m='243270'>of this squared error in this particular situation, where</span>
  <span m='247130'>we have obtained a specific value of the random
  variable,</span> <span m='249910'>capital X. On the other hand, if
  we're</span> <span m='252930'>looking at the estimator more generally,</span>
  <span m='255390'>how well it does on the average, then</span> <span
  m='257990'>we look at the unconditional mean squared error,</span> <span
  m='261640'>and this gives us an overall performance evaluation.</span>
  </p><p><span m='265540'>How do we calculate these performance measures?</span>
  </p><p><span m='269020'>Here, we live in a conditional universe.</span>
  </p><p><span m='271670'>And in a Bayesian estimation problem at some
  point</span> <span m='275570'>we do calculate the posterior distribution of
  Theta,</span> <span m='279050'>given the measurements.</span> </p><p><span
  m='280480'>So these calculations involved here</span> <span m='285020'>consist
  of just an integration or summation</span> <span m='289490'>using the
  conditional distribution.</span> </p><p><span m='292050'>For example, here we
  would integrate this quantity</span> <span m='295270'>using the conditional
  density of Theta,</span> <span m='297920'>given the particular value that we
  have obtained.</span> </p><p><span m='301250'>If we want to now calculate the
  unconditional performance,</span> <span m='306000'>then we would have to use
  the total probability</span> <span m='309860'>or expectation theorem.</span>
  </p><p><span m='316210'>And in that case, we can average over all the possible
  values</span> <span m='321880'>of X to find the overall error.</span>
  </p><p><span m='325410'>So all of the calculations involve tools and
  equations</span> <span m='329560'>that we have seen and that we have used in
  the past,</span> <span m='332790'>so it is just a matter of connecting those
  tools</span> <span m='336400'>with the specific new concepts that we have
  introduced here.</span> </p>
uid: 9bbd464de376277d543f9d60a5f78268
type: courses
layout: video
---
