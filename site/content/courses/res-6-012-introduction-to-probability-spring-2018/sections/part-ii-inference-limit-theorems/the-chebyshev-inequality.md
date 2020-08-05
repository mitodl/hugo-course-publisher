---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: d5pnfFvggYk
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    title: Video-YouTube-Stream
    type: Video
    uid: 2a9ec2919d45284422af1502995dbe8f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/d5pnfFvggYk/default.jpg'
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 259342326e431c53a3411f75aa5a851f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: d5pnfFvggYk
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e7734c667741e3b86917076557613ff9
  - id: d5pnfFvggYk.srt
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-chebyshev-inequality/d5pnfFvggYk.srt
    title: 3play caption file
    type: null
    uid: 1d8a462247e9f3599b599f897b68930b
  - id: d5pnfFvggYk.pdf
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-chebyshev-inequality/d5pnfFvggYk.pdf
    title: 3play pdf file
    type: null
    uid: ceb3687cf7ffaf9b2ecc9ae4674f0631
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8a81a710df9f1b4b062290a9f6b60341
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: eaab8ae2349dcc53ab5fa461fcefd550
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L18-03_300k.mp4
    parent_uid: 1263f73a3f6c032f6950eb0ae5275f73
    title: Video-Internet Archive-MP4
    type: Video
    uid: af7398b164a8f1b1dd4deaa1c87bb720
inline_embed_id: 16032825thechebyshevinequality6651052
order_index: 1678
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-chebyshev-inequality
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-chebyshev-inequality
title: The Chebyshev Inequality
transcript: >-
  <p><span m='390'>Mathematically speaking, the Chebyshev inequality is just
  a</span> <span m='3510'>simple application of the Markov inequality.</span>
  </p><p><span m='6230'>However, it contains a somewhat different
  message.</span> </p><p><span m='9820'>Consider a random variable that has
  a</span> <span m='11650'>certain mean and variance.</span> </p><p><span
  m='13180'>What the Chebyshev inequality says is that if the variance</span>
  <span m='16720'>is small, then the random variable is unlikely to fall</span>
  <span m='21000'>too far off from the mean.</span> </p><p><span m='23790'>If
  the variance is small, we have little randomness.</span> </p><p><span
  m='27680'>And so X cannot be too far from the mean.</span> </p><p><span
  m='31510'>In more precise terms, we have the following inequality.</span>
  </p><p><span m='35080'>The probability that the distance from the mean
  is</span> <span m='37640'>larger than or equal to a certain number is, at
  most,</span> <span m='42440'>the variance divided by the square of that
  number.</span> </p><p><span m='46040'>So if the variance is small, the
  probability of falling far</span> <span m='50250'>from the mean is also going
  to be small.</span> </p><p><span m='53730'>And if the number c is large, so
  that we're talking about a</span> <span m='57290'>large distance from the
  mean, then the probability of this</span> <span m='61150'>event happening
  falls off at a rate at</span> <span m='64900'>least 1 over c squared.</span>
  </p><p><span m='68940'>By the way, I should add here that c is assumed to be
  a</span> <span m='73050'>positive number.</span> </p><p><span m='74730'>If c
  was negative, then the probability that we're looking</span> <span
  m='78070'>at would be equal to 1 anyway.</span> </p><p><span m='80840'>And
  there isn't any point in trying obtain a bound for it.</span> </p><p><span
  m='84490'>To prove the Chebyshev inequality, we will apply the</span> <span
  m='87440'>Markov equality as follows.</span> </p><p><span m='90310'>The
  probability of interest is the same as the probability</span> <span
  m='99190'>that the square of this quantity is larger than or</span> <span
  m='106250'>equal to the square of c.</span> </p><p><span m='109430'>But now,
  here we have a non-negative random variable.</span> </p><p><span
  m='113259'>And we can apply the Markov inequality with X replaced by</span>
  <span m='117310'>this random variable and with a replaced by c squared.</span>
  </p><p><span m='121700'>So this gives us the expected value of the random
  variable</span> <span m='125550'>of interest divided by c squared.</span>
  </p><p><span m='130919'>But we recognize that the</span> <span
  m='132980'>numerator is just the variance.</span> </p><p><span m='136280'>And
  this is the Chebyshev inequality that we claimed.</span> </p><p><span
  m='142200'>As an application of the Chebyshev inequality, let us</span> <span
  m='145640'>look at the probability of this event that the distance</span>
  <span m='148810'>from the mean is at least k standard deviations, where
  k</span> <span m='154410'>is some positive number.</span> </p><p><span
  m='157710'>Using the Chebyshev inequality with c replaced by k times</span>
  <span m='161820'>sigma, we obtain sigma squared over c squared, which in
  our</span> <span m='167000'>case is k squared times sigma squared,</span>
  <span m='170530'>which is 1 over k squared.</span> </p><p><span m='173760'>So
  what this is saying is that if you take, for example, k</span> <span
  m='177720'>equal to 3, the probability that you fall three standard</span>
  <span m='182400'>deviations away from the mean or more, that probability
  is</span> <span m='187090'>going to be less than or equal to 1 over 9.</span>
  </p><p><span m='190590'>And this is true no matter what kind of</span> <span
  m='192920'>distribution you have.</span> </p><p><span m='195400'>Let us now
  revisit our earlier example, where X is an</span> <span m='199010'>exponential
  random variable.</span> </p><p><span m='200860'>And we're interested in the
  probability that the random</span> <span m='203320'>variable takes a value
  larger than or equal to a.</span> </p><p><span m='206400'>The Markov
  inequality gave us a bound of 1 over a.</span> </p><p><span m='212100'>And as
  we recall, the exact answer to this probability was</span> <span m='218700'>e
  to the minus a.</span> </p><p><span m='220780'>Let us see what we can get
  using the Chebyshev</span> <span m='223340'>inequality.</span> </p><p><span
  m='224440'>Now, our random variable has a mean of 1.</span> </p><p><span
  m='230660'>Let us assume that a is bigger than 1, so that we're</span> <span
  m='235860'>considering an event that we fall far away from the mean by</span>
  <span m='241460'>a distance of at least a minus 1.</span> </p><p><span
  m='245030'>That is we write the probability that X is larger</span> <span
  m='248700'>than or equal to a as the probability that the distance</span>
  <span m='252690'>of X from the mean is larger than or equal to a minus
  1.</span> </p><p><span m='258750'>And now, this event is smaller than the
  event that the</span> <span m='266350'>absolute value of X minus 1 is larger
  than a minus 1.</span> </p><p><span m='273450'>This is because if this event
  is true, then that event will</span> <span m='278530'>also be true.</span>
  </p><p><span m='279950'>And now, we can apply the Chebyshev inequality.</span>
  </p><p><span m='282200'>Here we have the distance of X from the mean.</span>
  </p><p><span m='285680'>So the Chebyshev inequality applied to the random
  variable</span> <span m='290100'>X will have up here the variance of X,</span>
  <span m='293690'>which is equal to 1.</span> </p><p><span m='295040'>And in
  the denominator, we will have a minus 1 squared.</span> </p><p><span
  m='303060'>Notice that if a is a large number, this quantity here</span> <span
  m='308030'>behaves like 1 over a squared, which falls off much faster</span>
  <span m='314060'>than 1 over a.</span> </p><p><span m='315660'>So at least for
  large a's, the Chebyshev bound is going to</span> <span m='320080'>give us a
  smaller bound and, therefore, more informative</span> <span m='326630'>than
  what we obtained from the Markov inequality.</span> </p><p><span m='330630'>In
  most cases, the Chebyshev inequality is, indeed,</span> <span
  m='334100'>stronger and more informative than the Markov inequality.</span>
  </p><p><span m='338770'>And one of the reasons is that it exploits more
  information</span> <span m='343280'>about the distribution of the random
  variable X. That is it</span> <span m='346720'>uses knowledge, not just about
  the mean</span> <span m='349159'>of the random variable.</span> </p><p><span
  m='350490'>But it also uses some information about the variance</span> <span
  m='354450'>of the random variable.</span> </p><p></p>
uid: 1263f73a3f6c032f6950eb0ae5275f73
type: course
layout: video
---
