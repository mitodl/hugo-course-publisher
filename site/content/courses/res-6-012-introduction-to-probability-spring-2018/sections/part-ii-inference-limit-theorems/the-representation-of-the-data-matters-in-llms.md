---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: f_BHF-OYwr4
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    title: Video-YouTube-Stream
    type: Video
    uid: 89795473e99ec6e07cf91f86922563bd
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/f_BHF-OYwr4/default.jpg'
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: caf35819246237dd1a90dd919880bf88
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: f_BHF-OYwr4
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8bfd1cce86c9d0e185a07ec7eef92dbd
  - id: f_BHF-OYwr4.srt
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-representation-of-the-data-matters-in-llms/f_BHF-OYwr4.srt
    title: 3play caption file
    type: null
    uid: 4c933716457b659c85a9519dcb372605
  - id: f_BHF-OYwr4.pdf
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-representation-of-the-data-matters-in-llms/f_BHF-OYwr4.pdf
    title: 3play pdf file
    type: null
    uid: 7c542ae88500dd1178c4e4b7ab5ef66b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5c57d4c2149e56534e83b4a9bda076ee
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c822f954531e275478013033eed4f0a0
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-09_300k.mp4
    parent_uid: 032eba356f880b8ca7679b2bc485ae4a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 11fa43fdfd6cd81359a2178e0ca76e7e
inline_embed_id: 45634318therepresentationofthedatamattersinllms43884266
order_index: 1651
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-representation-of-the-data-matters-in-llms
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-representation-of-the-data-matters-in-llms
title: The Representation of the Data Matters in LLMS
transcript: >-
  <p><span m='1020'>In this final segment, we want to discuss an interesting
  point</span> <span m='4900'>about linear estimators.</span> </p><p><span
  m='7830'>Here's what the issue is.</span> </p><p><span m='10000'>You obtain an
  observation, X, on the basis</span> <span m='12740'>of which you want to
  estimate Theta.</span> </p><p><span m='15210'>But perhaps you measure X on a
  different scale,</span> <span m='19190'>let's say on a cubic scale, so that
  what you record actually</span> <span m='23410'>is X cubed.</span>
  </p><p><span m='25160'>So you're faced with two possible estimation
  problems.</span> </p><p><span m='28440'>One estimation problem is to use X to
  estimate Theta.</span> </p><p><span m='32200'>Another estimation problem is to
  use X cubed to estimate Theta.</span> </p><p><span m='36900'>Does it make a
  difference?</span> </p><p><span m='38990'>Let's consider the case of least
  mean squares estimation,</span> <span m='42890'>without any linearity
  constraint.</span> </p><p><span m='45550'>If you use X to estimate Theta, your
  estimator</span> <span m='48530'>is going to be this conditional
  expectation.</span> </p><p><span m='51160'>If you use X cubed to estimate
  Theta,</span> <span m='53580'>your estimator will be this conditional
  expectation.</span> </p><p><span m='56900'>Are they different?</span>
  </p><p><span m='58670'>Well, X and X cubed carry the same information about
  Theta.</span> </p><p><span m='65510'>In particular, the posterior distribution
  of Theta given X</span> <span m='70320'>is going to be the same as the
  posterior distribution of Theta</span> <span m='74200'>given X cubed.</span>
  </p><p><span m='76090'>You will be getting the same information,</span> <span
  m='78470'>the same knowledge about X.</span> </p><p><span m='80700'>And in
  particular, if you calculate</span> <span m='82480'>conditional expectations,
  these will also be the same.</span> </p><p><span m='86970'>What about the
  linear case?</span> </p><p><span m='89260'>If we restrict to linear
  estimators,</span> <span m='92320'>then on the basis of X, you would</span>
  <span m='95220'>form a linear estimation of this kind.</span> </p><p><span
  m='98110'>But if your observation is in the form of X cubed,</span> <span
  m='102350'>then a linear estimator would form</span> <span m='105050'>a linear
  function of X cubed.</span> </p><p><span m='107680'>So this would be a
  different kind of estimator.</span> </p><p><span m='111060'>We have seen a
  formula on how to obtain the best</span> <span m='114110'>estimator, the best
  choices of a and b</span> <span m='117030'>for estimators of this kind.</span>
  </p><p><span m='119229'>We can use that same formula to obtain</span> <span
  m='121800'>the best estimator of that kind.</span> </p><p><span
  m='124210'>It's going to be, of course, a different estimator.</span>
  </p><p><span m='127100'>Here, we're optimizing within a different
  class.</span> </p><p><span m='130949'>Which one of the two is better?</span>
  </p><p><span m='133630'>Well, this depends on what you know</span> <span
  m='135210'>about the particular problem at hand.</span> </p><p><span
  m='138760'>If you have some reason to believe,</span> <span m='141850'>or if
  you know that Theta and X are roughly related</span> <span m='146810'>by some
  kind of cubic relation, then perhaps estimators</span> <span m='151110'>in
  this class are going to perform better than estimators</span> <span
  m='154690'>in that class.</span> </p><p><span m='157040'>Let me also point out
  a related issue that would come here.</span> </p><p><span m='160620'>To find
  the right choice of a, you</span> <span m='163650'>need to know the covariance
  between X and Theta.</span> </p><p><span m='167400'>That's why the formula
  tells us about</span> <span m='169380'>the optimal linear estimator.</span>
  </p><p><span m='171740'>Here you would you need to know the covariance between
  Theta</span> <span m='178070'>and X cubed.</span> </p><p><span m='181140'>In
  addition, the formula requires the variance of X.</span> </p><p><span
  m='184640'>But here, instead of X, we're using X cubed.</span> </p><p><span
  m='187720'>So in this case, we would need the variance of X cubed.</span>
  </p><p><span m='192300'>Now, this could be more challenging.</span>
  </p><p><span m='194360'>In general, the higher the powers that you
  have,</span> <span m='197710'>the more difficult these quantities</span> <span
  m='199880'>are to calculate or to know what they are.</span> </p><p><span
  m='203430'>But leaving that issue aside, what we have here</span> <span
  m='207430'>is two alternative choices for the structure of the
  estimator</span> <span m='212180'>that we're using.</span> </p><p><span
  m='215770'>Now, we can push this story further.</span> </p><p><span
  m='219380'>Instead of considering just estimators of this kind,</span> <span
  m='222910'>we might consider as well estimators of this kind.</span>
  </p><p><span m='228380'>Is this a linear estimator?</span> </p><p><span
  m='231280'>We still call it a linear estimator,</span> <span
  m='233610'>because it is linear in the coefficients</span> <span
  m='236680'>that we have to choose on how to optimize.</span> </p><p><span
  m='239900'>That's the more important part.</span> </p><p><span m='241440'>It's
  the linearity in these coefficients that's important,</span> <span
  m='244430'>rather than the linearity in the X's.</span> </p><p><span
  m='247460'>So as a function of X, this is non-linear.</span> </p><p><span
  m='251050'>On the other hand, we can think of this X as one
  observation,</span> <span m='254950'>X squared as another observation,</span>
  <span m='257269'>X cubed as a third observation, and what we've got
  here</span> <span m='261579'>is a linear function of three different
  observations.</span> </p><p><span m='266210'>So we can still pose a least
  squares problem in which we</span> <span m='270650'>try to find the best
  choices for the coefficients a1, a2,</span> <span m='274680'>and a3, as well
  as the coefficient b,</span> <span m='277370'>find those choices that they're
  going</span> <span m='279200'>to give us the smallest possible mean squared
  error.</span> </p><p><span m='282960'>So we can optimize within this
  class.</span> </p><p><span m='286050'>Within this class of estimators, we
  certainly</span> <span m='288450'>have more flexibility.</span> </p><p><span
  m='290590'>This is a more general class of estimators</span> <span
  m='292630'>than either of this one or that one.</span> </p><p><span
  m='295480'>So within this class, we should be able to do even better.</span>
  </p><p><span m='299720'>On the other hand, we would have to pay a price</span>
  <span m='301980'>that this is a more complex structure.</span> </p><p><span
  m='304730'>It would be more difficult to find the optimal coefficients.</span>
  </p><p><span m='308420'>And also, we're going to need higher order
  moments</span> <span m='312380'>or expectations related to the X's and the
  Thetas.</span> </p><p><span m='317010'>Finally, there's nothing special in us
  using powers of X</span> <span m='321500'>and using a polynomial.</span>
  </p><p><span m='323410'>We could also look at estimators that</span> <span
  m='325610'>have some other type of structure.</span> </p><p><span
  m='327800'>For example, we might want to mix</span> <span m='329730'>an
  exponential function in X and a logarithmic function of X,</span> <span
  m='333780'>look at estimators of this form, and try to choose the best
  one.</span> </p><p><span m='338560'>Find the best choice of the
  coefficients.</span> </p><p><span m='341520'>Again, this is something that is
  possible.</span> </p><p><span m='345620'>And again, it's going to boil
  down</span> <span m='347810'>to solving a system of linear equations in the
  coefficients.</span> </p><p><span m='352250'>On the other hand, we need to
  know various expectations</span> <span m='355490'>about X that might be
  difficult to obtain.</span> </p><p><span m='359540'>How do we choose which
  structure to use</span> <span m='362330'>should it be this one, this one, this
  one, or that one?</span> </p><p><span m='366300'>There's a trade-off, that
  more complicated structures</span> <span m='369260'>introduce more complexity
  and make</span> <span m='371230'>the problem more difficult.</span>
  </p><p><span m='373290'>But there's also another issue.</span> </p><p><span
  m='374990'>It has to do with what do we know</span> <span m='377050'>about the
  particular problem at hand.</span> </p><p><span m='379960'>If we know or have
  reason to believe that third order</span> <span m='383290'>polynomials are
  going to give us excellent estimates of theta,</span> <span m='387180'>then we
  may want to work within this class.</span> </p><p><span m='391450'>In any
  case, the moral of this story</span> <span m='393990'>is that if we are to use
  the linear estimation methodology,</span> <span m='398600'>we do have some
  choices.</span> </p><p><span m='400860'>Linear in what?</span> </p><p><span
  m='403790'>And different choices will give us different performance.</span>
  </p><p><span m='407590'>But this now gets somewhat away from the
  subject</span> <span m='411710'>of a mathematical methodology, and it gets
  closer to the art</span> <span m='416520'>that you need to exercise in any
  particular problem domain.</span> </p><p></p>
uid: 032eba356f880b8ca7679b2bc485ae4a
type: courses
layout: video
---
