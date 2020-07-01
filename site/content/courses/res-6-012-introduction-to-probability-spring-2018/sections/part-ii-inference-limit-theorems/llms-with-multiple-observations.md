---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: ipSdsosGJBs
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    title: Video-YouTube-Stream
    type: Video
    uid: 0615729c842e3dfd8277666070f61120
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ipSdsosGJBs/default.jpg'
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: eb54b61276a09096c868ea8cb13f5a32
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ipSdsosGJBs
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 41fe901f31b470b7f062b68bc452fe22
  - id: ipSdsosGJBs.srt
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-with-multiple-observations/ipSdsosGJBs.srt
    title: 3play caption file
    type: null
    uid: 776db03f395ea2ecc625592b62fa3f57
  - id: ipSdsosGJBs.pdf
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-with-multiple-observations/ipSdsosGJBs.pdf
    title: 3play pdf file
    type: null
    uid: d93cd92fb72fd0d877bc1715719a9ed3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0c94bce1707074d5e55129ab12a8d77e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c7af51d1612a7c70243b4bf062370c0d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-07_300k.mp4
    parent_uid: 5c84a09e25cd00a10cc24ac51411e9df
    title: Video-Internet Archive-MP4
    type: Video
    uid: f5ae92326e77f8b8d2449cc8645a72ec
inline_embed_id: 31230053llmswithmultipleobservations39193459
order_index: 1633
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: llms-with-multiple-observations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-with-multiple-observations
title: LLMS with Multiple Observations
transcript: >-
  <p><span m='1000'>We have presented the complete solution</span> <span
  m='3540'>to the liner least mean squares estimation problem, when</span> <span
  m='6920'>we want to estimate a certain unknown random variable</span> <span
  m='10430'>on the basis of a different random variable X</span> <span
  m='13720'>that we get to observe.</span> </p><p><span m='15550'>But what if we
  have multiple observations?</span> </p><p><span m='19720'>What would be the
  analogous formulation of the problem?</span> </p><p><span m='23510'>Here's the
  idea.</span> </p><p><span m='24950'>Once more, we restrict ourselves to
  estimators</span> <span m='28320'>that are linear functions of the data,
  linear functions</span> <span m='31970'>of the observations that we
  have.</span> </p><p><span m='34280'>And then we pose the problem of finding
  the best</span> <span m='37670'>choices of these coefficients a1 up to a n and
  b.</span> </p><p><span m='42570'>What does it mean to find the best
  choices?</span> </p><p><span m='45540'>It means that if we fix certain
  choices,</span> <span m='49010'>we obtain an estimator, we look at the
  difference</span> <span m='52170'>between the estimator and the
  quantity</span> <span m='54480'>we're trying to estimate, take the
  square,</span> <span m='56700'>and then take the expectation.</span>
  </p><p><span m='58880'>So once more, we're looking at the mean squared
  error</span> <span m='61910'>of our estimator and we try to make it as small
  as possible.</span> </p><p><span m='66970'>So this is a well-defined
  optimization problem.</span> </p><p><span m='70760'>We have a quantity, which
  is a function of certain parameters.</span> </p><p><span m='75830'>And we wish
  to find the choices for those parameters,</span> <span m='79050'>or those
  coefficients, that will make</span> <span m='81420'>this quantity as small as
  possible.</span> </p><p><span m='84930'>One first comment is similar to the
  case</span> <span m='87820'>where we had a single measurement [and]</span>
  <span m='90920'>is the following.</span> </p><p><span m='92280'>If it turns
  out that the conditional expectation</span> <span m='95560'>of Theta given all
  of the data that we</span> <span m='98590'>have is linear in X, if it is of
  this form, then what happens?</span> </p><p><span m='104440'>We know that this
  is the best possible estimator.</span> </p><p><span m='107990'>If it is also
  linear, then it is the best estimator</span> <span m='111720'>within the class
  of linear estimators as well</span> <span m='115470'>and, therefore, the
  linear least mean squares estimator</span> <span m='119100'>is the same as the
  general least mean squares estimator.</span> </p><p><span m='123800'>So if for
  some problems it turns out that this is linear,</span> <span m='128050'>then
  we automatically also have the optimal linear estimator.</span> </p><p><span
  m='133240'>And this is going to be the case, once more,</span> <span
  m='135520'>for certain normal problems with a linear structure of the
  type</span> <span m='140560'>that we have studied earlier.</span> </p><p><span
  m='145740'>Now, let us look into what it takes</span> <span m='148870'>to
  carry out this optimization.</span> </p><p><span m='152079'>If we had a single
  observation, then we</span> <span m='155100'>have seen a closed form formula,
  a fairly simple formula,</span> <span m='158710'>that tells us what the
  coefficients should be.</span> </p><p><span m='161650'>For the more general
  case, formulas</span> <span m='163920'>would not be as simple, but we
  can</span> <span m='167090'>make the following observations.</span>
  </p><p><span m='169700'>If you take this expression and expand it,</span>
  <span m='173510'>it's going to have a bunch of terms.</span> </p><p><span
  m='176250'>For example, it's going to have a term of the form a1
  squared</span> <span m='180650'>times the expected value of X1 squared.</span>
  </p><p><span m='184730'>It's going to have a term such as twice a1, a2
  times</span> <span m='191590'>the expected value of X1, X2.</span>
  </p><p><span m='196150'>And then there's going to be many more terms to some
  of them</span> <span m='200760'>will also involve products of Theta with
  this.</span> </p><p><span m='206920'>So we might see that we have a term of
  the form a1 expected</span> <span m='212829'>value of X1 Theta.</span>
  </p><p><span m='216290'>And then, there's going to be many, many more
  terms.</span> </p><p><span m='220010'>What's the important thing to
  notice?</span> </p><p><span m='222350'>That this expression as a function of
  the coefficient</span> <span m='226980'>involves terms either of this
  kind</span> <span m='229526'>or of this kind, or of that kind,</span> <span
  m='231570'>first-order or second-order terms.</span> </p><p><span
  m='235800'>To minimize this expression, we're</span> <span m='237430'>going to
  take the derivative of this and set it equal to 0.</span> </p><p><span
  m='242730'>When you take the derivative of a function that</span> <span
  m='246210'>involves only quadratic and linear terms,</span> <span
  m='249660'>you get something that's linear in the coefficients.</span>
  </p><p><span m='254410'>The conclusion out of all this discussion</span> <span
  m='256730'>is that when you actually go and carry out this minimization</span>
  <span m='261480'>by setting derivatives to zero, what you</span> <span
  m='263930'>will end up doing is solving a system of linear equations</span>
  <span m='269130'>in the coefficients that you're trying to determine.</span>
  </p><p><span m='272085'>And why is this interesting?</span> </p><p><span
  m='274310'>Well, it is because if you actually</span> <span m='276650'>want to
  carry out this minimization,</span> <span m='279010'>all you need to do is to
  solve a linear system, which is easily</span> <span m='283050'>done on a
  computer.</span> </p><p><span m='286370'>The next observation is that this
  expression only</span> <span m='291100'>involves expectations of various
  terms</span> <span m='295860'>that are second order in the random variables
  involved.</span> </p><p><span m='299750'>So it involves the expected value of
  X1 squared,</span> <span m='302950'>it involves this term, which has
  something</span> <span m='305050'>to do with the covariance of X1 and
  X2.</span> </p><p><span m='307960'>This term that has something to do with the
  covariance of X1</span> <span m='311280'>with Theta.</span> </p><p><span
  m='312910'>But these are the only terms out of the distribution of the
  X's</span> <span m='317480'>and of Theta that will matter.</span> </p><p><span
  m='320310'>So similar to the case where we had a single observation,</span>
  <span m='325420'>in order to solve this problem, we</span> <span m='327360'>do
  not need to know the complete distribution of the X's</span> <span
  m='331590'>and of Theta.</span> </p><p><span m='332705'>It is enough to know
  all of the means,</span> <span m='335570'>variances, and covariances of the
  random variables</span> <span m='339040'>that are involved.</span>
  </p><p><span m='340550'>And once more, this makes this approach</span> <span
  m='343390'>to estimation a practical one, because we do not</span> <span
  m='347060'>need to model in complete detail the distribution</span> <span
  m='350090'>of the different random variables.</span> </p><p><span
  m='353470'>Finally, if we do not have just one unknown random variable,</span>
  <span m='358130'>but we have multiple random variables that we</span> <span
  m='360570'>want to estimate, what should we do?</span> </p><p><span
  m='363740'>Well, this is pretty simple.</span> </p><p><span m='365800'>You
  just apply this estimation methodology</span> <span m='368250'>to each one of
  the unknown random variables separately.</span> </p><p><span m='373390'>To
  conclude, this linear estimation methodology</span> <span m='378720'>applies
  also to the case where you have multiple observations.</span> </p><p><span
  m='383900'>You need to solve a certain computational problem in order</span>
  <span m='387120'>to find the structure of the best linear estimator,</span>
  <span m='390390'>but it is not a very difficult computational problem,</span>
  <span m='393640'>because all that it involves is to minimize</span> <span
  m='396260'>a quadratic function of the coefficients</span> <span
  m='398780'>that you are trying to determine.</span> </p><p><span
  m='400720'>And this leads us to having to solve</span> <span m='403130'>a
  system of linear equations.</span> </p><p><span m='405230'>For all these
  reasons, linear estimation,</span> <span m='408420'>or estimation using linear
  estimators, is quite practical.</span> </p>
uid: 5c84a09e25cd00a10cc24ac51411e9df
type: courses
layout: video
---
