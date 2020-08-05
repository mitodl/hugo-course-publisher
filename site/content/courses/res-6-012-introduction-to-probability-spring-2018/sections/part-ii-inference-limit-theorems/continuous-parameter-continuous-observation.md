---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: CN_TJBPv2Qs
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    title: Video-YouTube-Stream
    type: Video
    uid: 652bac5f7d492ab04619f347dd710684
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/CN_TJBPv2Qs/default.jpg'
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: eb85ff83b3dc52a3d75647b52ac2ee2f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: CN_TJBPv2Qs
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6f8063a605e2f71a9437eb4f7f1878f5
  - id: CN_TJBPv2Qs.srt
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/continuous-parameter-continuous-observation/CN_TJBPv2Qs.srt
    title: 3play caption file
    type: null
    uid: bb12a0cb78fb24d6538d851358cc639a
  - id: CN_TJBPv2Qs.pdf
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/continuous-parameter-continuous-observation/CN_TJBPv2Qs.pdf
    title: 3play pdf file
    type: null
    uid: 3016455f2f2b2585c61e7c39e5346c56
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b937f1189ae4516b53568a8794e6b5bb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 221cbafbf64f2a7e80e15f24224f6f6b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-07_300k.mp4
    parent_uid: b1099478a1fc3ae58b487735b0204b87
    title: Video-Internet Archive-MP4
    type: Video
    uid: 47a1cd212d6075c0797a35802706b398
inline_embed_id: 24268447continuousparametercontinuousobservation11815341
order_index: 1390
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: continuous-parameter-continuous-observation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/continuous-parameter-continuous-observation
title: 'Continuous Parameter, Continuous Observation'
transcript: >-
  <p><span m='2550'>In the next variation we consider, all random
  variables</span> <span m='6070'>are continuous.</span> </p><p><span
  m='7920'>For this case, we do have a Bayes rule, once more.</span>
  </p><p><span m='11070'>And we have worked [out] quite a few examples.</span>
  </p><p><span m='13800'>So there's no point, again, in going</span> <span
  m='16120'>through a detailed example.</span> </p><p><span m='17400'>Let us
  just discuss some of the issues.</span> </p><p><span m='20890'>One question is
  when do these models arise?</span> </p><p><span m='24150'>One particular class
  of models that is very useful and very</span> <span m='27850'>commonly used
  are so-called linear normal models.</span> </p><p><span m='31980'>In these
  models, we, basically, combine</span> <span m='34305'>various random variables
  in a linear function.</span> </p><p><span m='37500'>And all the random
  variables of interest are now to be normal.</span> </p><p><span m='41220'>For
  instance, we might have a signal, a noisy signal,</span> <span m='45140'>call
  it Theta, which is now a continuous valued signal.</span> </p><p><span
  m='50930'>We receive that signal, but corrupted</span> <span m='53280'>by some
  noise, which is independent from what was sent.</span> </p><p><span
  m='56290'>And we wish to recover, on the basis of the observation X,</span>
  <span m='60110'>we wish to recover the value of Theta.</span> </p><p><span
  m='63180'>And then there are versions of this problem that</span> <span
  m='65580'>involve Theta vectors instead of single values.</span> </p><p><span
  m='69840'>So that Theta consists of multiple components,</span> <span
  m='73530'>and where we obtain many measurements X. We will,</span> <span
  m='77200'>actually, see in the next lecture sequence,</span> <span m='79750'>a
  quite detailed discussion of models of this type.</span> </p><p><span
  m='83990'>And this will be one of our main examples</span> <span
  m='87380'>within our study of inference.</span> </p><p><span m='90500'>There
  will be another example that we will see a few times,</span> <span
  m='94100'>and this involves estimating the parameter</span> <span m='96430'>of
  a uniform distribution.</span> </p><p><span m='98850'>So X is a random
  variable that's uniform over a certain range.</span> </p><p><span
  m='103120'>But the range itself is random and unknown.</span> </p><p><span
  m='107241'>And on the basis of observations X,</span> <span m='110080'>we
  would like to make an estimation of what</span> <span m='114840'>the true
  value of Theta is.</span> </p><p><span m='117670'>This is an example that you
  will see</span> <span m='119860'>in our collection of solved problems for this
  class.</span> </p><p><span m='123870'>So what are the questions in this
  setting,</span> <span m='125940'>we wish to come up with ways of estimating
  Theta,</span> <span m='130350'>we form an estimator, and the main
  candidates</span> <span m='133840'>for estimators at this points are, once
  more,</span> <span m='138440'>the maximum a posteriori probability
  estimator,</span> <span m='141760'>which looks at this conditional
  density</span> <span m='144770'>and picks a value of theta that makes this
  conditional density</span> <span m='148460'>as large as possible.</span>
  </p><p><span m='150200'>And then the alternative one is the least mean
  squares</span> <span m='153560'>estimator, which just computes the expected
  value</span> <span m='156430'>of Theta given X.</span> </p><p><span
  m='158840'>For any given estimator, we then want</span> <span m='161300'>to
  characterize its performance.</span> </p><p><span m='163840'>In this case, a
  natural notion of performance</span> <span m='166800'>is the distance between
  our estimate, or estimator,</span> <span m='170800'>from the true value of
  Theta.</span> </p><p><span m='172890'>And commonly we use the squared
  distance</span> <span m='176650'>and then take the average of that squared
  distance.</span> </p><p><span m='180700'>So in a conditional universe where we
  have already</span> <span m='183310'>observed some data, we might be
  interested</span> <span m='186330'>in this particular expectation,
  which</span> <span m='189110'>is the mean squared error of this particular
  estimator,</span> <span m='196090'>given that we obtain some particular
  data.</span> </p><p><span m='198970'>Or we can average over all possible data
  points</span> <span m='203220'>that we might obtain so that we look</span>
  <span m='206230'>at the unconditional mean squared error, which</span> <span
  m='210210'>is a measure of the overall performance of our estimator.</span>
  </p><p><span m='214620'>We will be talking about these criteria</span> <span
  m='217480'>and the mean squared error in a fair amount of detail</span> <span
  m='221430'>in a subsequent lecture sequence.</span> </p><p></p>
uid: b1099478a1fc3ae58b487735b0204b87
type: course
layout: video
---
