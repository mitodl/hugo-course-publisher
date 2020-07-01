---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: _HL7qwWvON4
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    title: Video-YouTube-Stream
    type: Video
    uid: 80ebb940c92def3e42b6f76bba91eb02
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/_HL7qwWvON4/default.jpg'
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 91e5fe15bce15c71406dc0f6e673a048
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: _HL7qwWvON4
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: fcf25e7a34670c6c731014b11725fc2e
  - id: HL7qwWvON4.srt
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-formulation/HL7qwWvON4.srt
    title: 3play caption file
    type: null
    uid: bacf0dfdc1d9bcef8ae06f47dfda5250
  - id: HL7qwWvON4.pdf
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-formulation/HL7qwWvON4.pdf
    title: 3play pdf file
    type: null
    uid: 55e1f98550110cea4b1980ec9df6224d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 90035e39328bda76960f2c9a1693e84a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: af3f19aa94c50c920b26267a186962a3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L17-02_300k.mp4
    parent_uid: 084dbac5a1546fdfb32fe2621a4cac81
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7ae0eded6473fc66eaf54f2a5598802c
inline_embed_id: 81654973llmsformulation55889755
order_index: 1588
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: llms-formulation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/llms-formulation
title: LLMS Formulation
transcript: >-
  <p><span m='1510'>Let us now introduce the linear least mean squares
  formulation.</span> </p><p><span m='6070'>The setting is the usual one--
  we</span> <span m='7960'>have an unknown random variable and another random
  variable,</span> <span m='11250'>which is our observation.</span> </p><p><span
  m='12830'>We're given enough information so that we can, for example,</span>
  <span m='16320'>calculate the joint distribution of these two random
  variables.</span> </p><p><span m='21060'>What we would like to do in the least
  squares</span> <span m='23530'>methodology is to come up with an estimator,
  such</span> <span m='27460'>that the mean squared error of this
  estimator</span> <span m='30210'>is as small as possible.</span> </p><p><span
  m='31890'>And we have seen the general solution to this problem.</span>
  </p><p><span m='34960'>If we consider arbitrary estimators,</span> <span
  m='38010'>it turns out that the best possible estimator,</span> <span
  m='40510'>the best possible function g, is this particular function</span>
  <span m='43815'>of the observations.</span> </p><p><span m='45110'>Our
  estimator is a conditional expectation of Theta, given X.</span> </p><p><span
  m='50390'>Now, let us look at an example that we considered earlier.</span>
  </p><p><span m='54200'>Suppose that X and Theta have a joint PDF, which</span>
  <span m='57770'>is uniform over this particular region.</span> </p><p><span
  m='61110'>We did consider this example and we</span> <span m='63440'>found
  that the optimal estimator was</span> <span m='66960'>a function that had this
  particular shape.</span> </p><p><span m='70300'>So this blue curve here
  corresponds</span> <span m='73580'>to the function, which is the conditional
  expectation</span> <span m='76510'>of Theta, given the value of the
  observation</span> <span m='80980'>that we have obtained.</span> </p><p><span
  m='83690'>We notice that this function is nonlinear,</span> <span
  m='86990'>but it is only mildly nonlinear.</span> </p><p><span m='89990'>The
  fact that it is nonlinear is a little bit of a nuisance.</span> </p><p><span
  m='94030'>It makes it somewhat of a complicated function.</span> </p><p><span
  m='98320'>Wouldn't it be nicer if our estimator had turned out</span> <span
  m='101660'>to be a linear function of the data, such as this one?</span>
  </p><p><span m='105590'>It would have been nicer, but, unfortunately,</span>
  <span m='108479'>that's not the case.</span> </p><p><span m='110200'>By what
  if we impose it as a constraint,</span> <span m='113900'>that we will only
  look at estimators</span> <span m='116530'>that are linear functions of the
  data.</span> </p><p><span m='119670'>What does that mean?</span> </p><p><span
  m='120680'>Mathematically speaking, it means</span> <span m='123280'>that we
  will only consider estimators</span> <span m='126150'>that depend linearly on
  the data X.</span> </p><p><span m='131009'>Now, a and b here are some
  parameters</span> <span m='134400'>that are for us to choose.</span>
  </p><p><span m='136430'>If I choose a and b differently, I'm</span> <span
  m='138760'>going to get a different red curve here.</span> </p><p><span
  m='142360'>Which one is the best red curve?</span> </p><p><span
  m='144900'>Well, we need a criterion.</span> </p><p><span m='146055'>But let
  us stick to our mean squared error criterion.</span> </p><p><span
  m='151770'>And in that case, we're led to the following formulation.</span>
  </p><p><span m='156590'>We want to find choices for a and b.</span>
  </p><p><span m='160370'>That is, we want to choose a particular red
  line,</span> <span m='164700'>so that the resulting estimation error, the
  resulting</span> <span m='169870'>mean squared estimation error, is as small
  as possible.</span> </p><p><span m='173890'>So what we have here is a random
  variable.</span> </p><p><span m='176420'>Here is the value that's going to
  be</span> <span m='178260'>given to us by our estimator.</span> </p><p><span
  m='180490'>And we look at the associated error,</span> <span m='183060'>square
  it, and take the expectation.</span> </p><p><span m='186260'>So this is the
  linear least mean squares formulation.</span> </p><p><span m='190030'>We're
  looking for an estimator, which</span> <span m='191980'>is a linear function
  of the data.</span> </p><p><span m='194120'>And we want to choose the best
  possible linear function.</span> </p><p><span m='199010'>How does it compare
  to the earlier problem</span> <span m='201630'>of picking the best
  estimator?</span> </p><p><span m='203870'>Here we were considering an
  arbitrary function g</span> <span m='208040'>and we were trying to find the
  best possible function</span> <span m='211620'>of the data, which would be our
  estimator.</span> </p><p><span m='214650'>So this was really an
  optimization</span> <span m='217060'>over all possible functions.</span>
  </p><p><span m='219490'>Here we only have an optimization with respect</span>
  <span m='222960'>to two numbers.</span> </p><p><span m='224370'>So at least
  mathematically, this should be a simpler problem.</span> </p><p><span
  m='228079'>And we will see that it has a simple solution.</span> </p><p><span
  m='231610'>Before going on to the solution, however,</span> <span
  m='234300'>let me make one comment that in some cases,</span> <span
  m='237520'>the linear least squares estimation</span> <span m='239290'>problem
  is relatively easy to solve.</span> </p><p><span m='242850'>And these are the
  cases where the conditional expectation</span> <span m='247450'>turns out to
  be linear in the data.</span> </p><p><span m='251020'>This is the best
  possible estimator.</span> </p><p><span m='253460'>If it happens to be linear,
  it's at least</span> <span m='256660'>as good as any other linear
  estimator,</span> <span m='260029'>so it's also going to be the optimal linear
  estimator.</span> </p><p><span m='265750'>That is, if the optimal solution
  turns out</span> <span m='268350'>to be already linear, by imposing the extra
  constraint</span> <span m='272040'>of sticking to linear estimators is
  not</span> <span m='274970'>going to make any difference.</span> </p><p><span
  m='277870'>But for the general case, in general,</span> <span m='280360'>this
  is not going to be the case.</span> </p><p><span m='282340'>The conditional
  expectation may well</span> <span m='284890'>turn out to be a nonlinear
  function of the data,</span> <span m='287820'>as in this example.</span>
  </p><p><span m='289390'>And in those cases, the linear least mean squares
  estimator</span> <span m='293960'>is going to turn out to be different.</span>
  </p><p></p>
uid: 084dbac5a1546fdfb32fe2621a4cac81
type: courses
layout: video
---
