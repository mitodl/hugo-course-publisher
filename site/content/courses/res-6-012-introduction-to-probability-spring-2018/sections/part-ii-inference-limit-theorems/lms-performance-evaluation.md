---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: CdrVM6MGnGo
    parent_uid: 289459a13021382b104f0b1aab39ccda
    title: Video-YouTube-Stream
    type: Video
    uid: 4477f63d309ee02d337a5ad3ddf6aca5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/CdrVM6MGnGo/default.jpg'
    parent_uid: 289459a13021382b104f0b1aab39ccda
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c560a33d5f156ca6b521ef0ba313e804
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: CdrVM6MGnGo
    parent_uid: 289459a13021382b104f0b1aab39ccda
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8b2b89146be60ba190799156378666e2
  - id: CdrVM6MGnGo.srt
    parent_uid: 289459a13021382b104f0b1aab39ccda
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-performance-evaluation/CdrVM6MGnGo.srt
    title: 3play caption file
    type: null
    uid: eb562548f6c7c7500cf3853bc8943e49
  - id: CdrVM6MGnGo.pdf
    parent_uid: 289459a13021382b104f0b1aab39ccda
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-performance-evaluation/CdrVM6MGnGo.pdf
    title: 3play pdf file
    type: null
    uid: b79f2ad6aae5eb823a4fea0777fa4f1e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 289459a13021382b104f0b1aab39ccda
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 58f0a4de295289b7d8ef0b5a9cf87024
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 289459a13021382b104f0b1aab39ccda
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 14d84df2e83940a06a9472c1a3c93281
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-04_300k.mp4
    parent_uid: 289459a13021382b104f0b1aab39ccda
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7075b25bd7ccb8b2b35820edfba84499
inline_embed_id: 46813773lmsperformanceevaluation97112674
order_index: 1534
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: lms-performance-evaluation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-performance-evaluation
title: LMS Performance Evaluation
transcript: >-
  <p><span m='1180'>Least mean squares estimation is remarkable</span> <span
  m='4050'>because it has such a simple answer.</span> </p><p><span m='6820'>The
  way to come up with estimates,</span> <span m='9100'>if what you care about is
  to keep the mean squared</span> <span m='12070'>error small, the way to come
  up with estimates</span> <span m='14630'>is to just report the conditional
  expectation, which</span> <span m='18120'>is going to be a number, once you
  have obtained</span> <span m='20440'>some values of the data.</span>
  </p><p><span m='22060'>Or more abstractly, you can think of it</span> <span
  m='24080'>as a random variable, if you do not know ahead of time</span> <span
  m='27240'>what data you're going to obtain.</span> </p><p><span
  m='29510'>Because this estimator is so important,</span> <span m='31820'>it is
  worth writing down what the performance</span> <span m='35480'>of that
  estimator is.</span> </p><p><span m='37810'>So suppose that you have
  obtained</span> <span m='39620'>a particular measurement, a particular
  value</span> <span m='42350'>of the observation, then the resulting mean
  squared</span> <span m='45520'>error within that conditional universe</span>
  <span m='48100'>where you have already obtained that value,</span> <span
  m='51000'>is just this quantity.</span> </p><p><span m='52690'>It's the mean
  square of the error between the variable</span> <span m='57350'>that you're
  trying to estimate and your estimate.</span> </p><p><span m='60160'>And
  everything gets computed within</span> <span m='62170'>this conditional
  universe.</span> </p><p><span m='63950'>Now this is a very familiar quantity,
  however.</span> </p><p><span m='67010'>It's the expected value of a random
  variable difference</span> <span m='71039'>from its mean, squared.</span>
  </p><p><span m='73070'>This is just the variance, except that</span> <span
  m='75240'>because all quantities are calculated</span> <span m='77155'>in a
  conditional universe, this is the conditional variance.</span> </p><p><span
  m='81850'>So the conditional variance is the optimal mean squared
  error,</span> <span m='86140'>the mean squared error that you obtain</span>
  <span m='87960'>when you use this particular estimate.</span> </p><p><span
  m='90620'>And it's the value that you would report to your boss</span> <span
  m='93759'>if you were asked how good is the estimate that you're</span> <span
  m='97270'>giving me.</span> </p><p><span m='98870'>But suppose that you have
  not yet obtained a measurement,</span> <span m='103140'>but you're going to
  your boss and you're</span> <span m='105320'>proposing this particular
  estimator as your design.</span> </p><p><span m='110180'>What are you going to
  report to your boss</span> <span m='112500'>as the performance of your
  design?</span> </p><p><span m='115180'>Since you have not yet obtained the
  value of X,</span> <span m='119030'>X is a random variable, you do not</span>
  <span m='122030'>know what the value of this conditional expectation</span>
  <span m='124320'>is going to be.</span> </p><p><span m='125090'>It's a random
  variable.</span> </p><p><span m='126630'>But no matter what it is, this
  is</span> <span m='128759'>going to be the error that you're going to be
  obtaining.</span> </p><p><span m='132380'>And this is the overall value of the
  mean squared error.</span> </p><p><span m='136110'>So this is the quantity
  that you would</span> <span m='137800'>report to your boss as your overall
  mean squared</span> <span m='141350'>error, the value that you report before
  obtaining</span> <span m='145180'>any specific measurement.</span>
  </p><p><span m='147480'>Now, what is this quantity?</span> </p><p><span
  m='149030'>This quantity is just the average of this quantity</span> <span
  m='154020'>up here, averaged over all the possible values of X.</span>
  </p><p><span m='160310'>And in our more abstract notation,</span> <span
  m='163329'>it is just the expectation of the conditional variance.</span>
  </p><p><span m='167600'>The conditional variance, the abstract conditional
  variance,</span> <span m='170730'>is a random variable that takes this value
  whenever</span> <span m='173829'>capital X happens to be equal to little
  x.</span> </p><p><span m='177400'>And when we average it over all possible
  values of X,</span> <span m='181550'>we just have the expectation of this
  random variable.</span> </p><p><span m='187110'>Let me continue now with a few
  more comments</span> <span m='189710'>on LMS estimation.</span> </p><p><span
  m='191860'>First, something that should be pretty clear at this point</span>
  <span m='194800'>is that LMS estimation is only relevant to estimation</span>
  <span m='198010'>problems.</span> </p><p><span m='199030'>This is because in
  hypothesis testing problems</span> <span m='201470'>we typically care about
  the probability of error,</span> <span m='204690'>not the mean squared
  error.</span> </p><p><span m='208380'>A second important comment is that in
  some cases</span> <span m='212890'>the LMS estimates and the MAP estimates
  turn out</span> <span m='217380'>to be the same.</span> </p><p><span
  m='218960'>When is that the case?</span> </p><p><span m='220430'>If the
  posterior distribution of Theta</span> <span m='223210'>happens to have a
  single peak, and it is also</span> <span m='228160'>symmetric around a certain
  point,</span> <span m='231660'>so that the peak also occurs at that particular
  point,</span> <span m='235720'>then clearly the peak occurs here.</span>
  </p><p><span m='238780'>But the conditional expectation is also that same
  point,</span> <span m='242050'>because it is the center of symmetry.</span>
  </p><p><span m='244560'>So in those cases, the two types of estimates, or
  estimators,</span> <span m='249400'>coincide.</span> </p><p><span
  m='250960'>When does this happen?</span> </p><p><span m='252380'>This happens
  in one particular important special case.</span> </p><p><span m='257640'>We
  have seen that in linear-normal models</span> <span m='260870'>the posterior
  distribution is normal.</span> </p><p><span m='263600'>And so this is one case
  where the MAP estimate and the LMS</span> <span m='267880'>estimate are going
  to coincide.</span> </p><p></p>
uid: 289459a13021382b104f0b1aab39ccda
type: courses
layout: video
---
