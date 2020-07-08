---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: tpaE_C8rqf8
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    title: Video-YouTube-Stream
    type: Video
    uid: 99a696ab091f801501be2ca90abae9c1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/tpaE_C8rqf8/default.jpg'
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bc3c51dbe410f0de9047a2a7af58190f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: tpaE_C8rqf8
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a86d8fda1c6bb8b27861394659bc662a
  - id: tpaE_C8rqf8.srt
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/example-continued-lms-performance-evaluation/tpaE_C8rqf8.srt
    title: 3play caption file
    type: null
    uid: 49df5fe33450f3079ba9716282402221
  - id: tpaE_C8rqf8.pdf
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/example-continued-lms-performance-evaluation/tpaE_C8rqf8.pdf
    title: 3play pdf file
    type: null
    uid: 8f7d1bb06e9a91a741bb6b1003813660
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 54f9d6e2013d4f8c7f9a19ceb0f7bfc4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9ad7805d7400a1ece85dbab6fb17ab7d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-06_300k.mp4
    parent_uid: d4b176f1141e525ef2b95024306d18ec
    title: Video-Internet Archive-MP4
    type: Video
    uid: d789d35aa226b964a6d9c06096ce8a8f
inline_embed_id: 77096589examplecontinuedlmsperformanceevaluation60303606
order_index: 1552
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: example-continued-lms-performance-evaluation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/example-continued-lms-performance-evaluation
title: 'Example Continued: LMS Performance Evaluation'
transcript: >-
  <p><span m='1910'>We now continue with our example and turn</span> <span
  m='4430'>to the performance evaluation question.</span> </p><p><span
  m='7270'>As you recall, we have a Theta that</span> <span m='9320'>has a
  certain prior distribution.</span> </p><p><span m='11590'>We're given a model
  for the observations.</span> </p><p><span m='14420'>We came up with the joint
  distribution for X and Theta,</span> <span m='18140'>which was uniform on this
  particular shape,</span> <span m='21260'>and we found that the least mean
  squares</span> <span m='23710'>estimator, namely the conditional
  expectation</span> <span m='26100'>of Theta given any particular value of
  X,</span> <span m='29020'>is given by this particular piecewise linear
  function.</span> </p><p><span m='33360'>Now, let us look at the performance of
  this estimator.</span> </p><p><span m='36780'>We judge the performance given
  any particular value of X</span> <span m='40970'>by looking at the
  corresponding mean squared error, which</span> <span m='45300'>is the square
  of the distance between the unknown parameter</span> <span m='50850'>and the
  estimate with which we came up.</span> </p><p><span m='54070'>And as we have
  discussed, this is the same</span> <span m='56640'>as the variance of Theta
  but in the conditional universe</span> <span m='59860'>where X has been
  observed.</span> </p><p><span m='62123'>It's the variance of the conditional
  distribution</span> <span m='64164'>of Theta.</span> </p><p><span m='65820'>As
  we have discussed, if I tell you</span> <span m='68180'>that X takes on this
  particular value,</span> <span m='71789'>Theta is uniform on this
  interval.</span> </p><p><span m='75590'>Therefore, the conditional variance of
  Theta</span> <span m='78510'>is the variance of a uniform on an
  interval</span> <span m='82020'>of this particular length.</span> </p><p><span
  m='83990'>Now, we know that the variance of a uniform</span> <span
  m='87789'>on an interval from a to b is equal to b minus a squared</span>
  <span m='96150'>divided by 12.</span> </p><p><span m='98330'>In this
  particular instance, the interval has length 2.</span> </p><p><span
  m='102030'>Therefore, we have 2 squared divided by 12.</span> </p><p><span
  m='105479'>So the variance is equal to 1/3.</span> </p><p><span
  m='110190'>This is what we get when the picture is of this type.</span>
  </p><p><span m='113490'>On the other hand, if X falls in this range,
  then</span> <span m='117750'>this interval on which Theta is now constrained
  to live,</span> <span m='123350'>has a smaller length and we're going</span>
  <span m='125040'>to get a different variance.</span> </p><p><span
  m='127220'>So in order to keep track, let us come up with a plot.</span>
  </p><p><span m='131400'>When X is between 5 and 9, Theta has a conditional
  distribution</span> <span m='136440'>which is uniform on an interval of length
  2</span> <span m='139140'>and a variance of 1/3.</span> </p><p><span
  m='141460'>And therefore, the variance is constant, takes this value.</span>
  </p><p><span m='147480'>In the extreme case, when X is equal to 3,</span>
  <span m='151600'>then this interval has 0 length.</span> </p><p><span
  m='154250'>In fact, we have perfect certainty</span> <span m='156410'>about
  the value of Theta.</span> </p><p><span m='157900'>If X is equal to 3, then we
  know that Theta is equal to 4.</span> </p><p><span m='161740'>There's no
  uncertainty.</span> </p><p><span m='163000'>There's zero variance.</span>
  </p><p><span m='165510'>What happens in between?</span> </p><p><span
  m='167190'>As we increase x moving away from 3,</span> <span m='172030'>the
  length of this interval increases linearly with x.</span> </p><p><span
  m='176500'>And this means that the variance increases quadratically</span>
  <span m='180050'>with x, so we have a quadratic that starts at 0</span> <span
  m='184050'>and rises to this value.</span> </p><p><span m='186160'>And by a
  symmetric argument, on the other side,</span> <span m='189310'>we also get
  function, which is 0 at 11,</span> <span m='193580'>and which rises
  quadratically as x gets reduced from 11 to 9.</span> </p><p><span
  m='199570'>So this is a complete plot of the conditional variance</span> <span
  m='202770'>of Theta as a function of the particular observation</span> <span
  m='206565'>that we have obtained.</span> </p><p><span m='209079'>We notice
  that some x's are more favorable than others.</span> </p><p><span
  m='213160'>An observation equal to 3 is extremely favorable</span> <span
  m='216280'>because it tells us unambiguously</span> <span m='218070'>the value
  of Theta.</span> </p><p><span m='219420'>But other choices of x, other
  possible observations,</span> <span m='223760'>will lead to more uncertainty
  in Theta,</span> <span m='226190'>and this is reflected in this
  diagram.</span> </p><p><span m='229970'>In case we are now interested in the
  overall mean squared error,</span> <span m='236360'>then we have to calculate
  the average</span> <span m='240490'>of this conditional variance where the
  average is taken over</span> <span m='246470'>all values of X. This is going
  to be</span> <span m='250630'>an integral of the conditional variance of Theta
  integrated</span> <span m='259910'>over all possibilities for x.</span>
  </p><p><span m='262590'>But, of course, each possibility of x</span> <span
  m='265410'>has to be weighted according to the corresponding
  probability,</span> <span m='271160'>or in this case, probability density
  function of X.</span> </p><p><span m='275970'>What is the PDF of X?</span>
  </p><p><span m='278760'>It is not a given to us, but it is</span> <span
  m='280900'>something that can be easily determined</span> <span
  m='283510'>from what we have already done.</span> </p><p><span m='285860'>We
  know the joint distribution of Theta and X,</span> <span m='289409'>and
  whenever we know the joint we can also find the marginal.</span> </p><p><span
  m='293830'>So once we find the marginal PDF of X,</span> <span m='297090'>then
  we can plug it in, multiply by this function</span> <span m='300640'>that we
  have already obtained, carry out the integration,</span> <span m='304350'>and
  we will end up with a numerical value.</span> </p><p><span m='307550'>Since it
  is an average of what we have here,</span> <span m='310530'>it's going to end
  up being some number between 0 and 1/3.</span> </p><p><span m='315250'>It's
  the average of these values, and closer to 1/3</span> <span m='318950'>rather
  than 0.</span> </p><p><span m='321600'>And this would complete the way that a
  performance</span> <span m='324930'>of a particular estimator gets
  evaluated.</span> </p><p></p>
uid: d4b176f1141e525ef2b95024306d18ec
type: courses
layout: video
---
