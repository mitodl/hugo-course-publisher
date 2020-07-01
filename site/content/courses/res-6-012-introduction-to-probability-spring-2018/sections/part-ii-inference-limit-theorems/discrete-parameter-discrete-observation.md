---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: aYg2je06Cpg
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    title: Video-YouTube-Stream
    type: Video
    uid: 235f07e101b898308ab3984785103250
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/aYg2je06Cpg/default.jpg'
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9794939d14cd4e866587b5b303297924
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: aYg2je06Cpg
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a101c4420d65d63116ca38e308047f9a
  - id: aYg2je06Cpg.srt
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/discrete-parameter-discrete-observation/aYg2je06Cpg.srt
    title: 3play caption file
    type: null
    uid: fb87f8141419fe0a7b56900ff265e21a
  - id: aYg2je06Cpg.pdf
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/discrete-parameter-discrete-observation/aYg2je06Cpg.pdf
    title: 3play pdf file
    type: null
    uid: 185bf86645b0148c53a7f3ce596839ab
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ba16a19b9fb86f169225dcd3235dfbe5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e6982e3af88e3d93d4ed0a5401919793
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-05_300k.mp4
    parent_uid: bb490dfa1a07088e4dc611891b812b10
    title: Video-Internet Archive-MP4
    type: Video
    uid: d8be04500fffaa82d0aa21c43280ce25
inline_embed_id: 29011684discreteparameterdiscreteobservation53830758
order_index: 1372
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: discrete-parameter-discrete-observation
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/discrete-parameter-discrete-observation
title: 'Discrete Parameter, Discrete Observation'
transcript: >-
  <p><span m='580'>Let us now discuss in some more detail</span> <span
  m='2640'>what it takes to carry out Bayesian inference,</span> <span
  m='5900'>when both random variables are discrete.</span> </p><p><span
  m='8630'>The unknown parameter, Theta, is a random variable</span> <span
  m='12120'>that takes values in the discrete set.</span> </p><p><span
  m='14980'>And we can think of these values as alternative hypotheses.</span>
  </p><p><span m='19340'>In this case, we know how to do inference.</span>
  </p><p><span m='22400'>We have in our hands the Bayes rule</span> <span
  m='24760'>and we have seen plenty of examples.</span> </p><p><span
  m='27110'>So instead of going through one more example in detail,</span> <span
  m='30530'>let us assume that we have a model, that we have observed</span>
  <span m='34240'>the value of X, and that we have already determined</span>
  <span m='38470'>the conditional PMF of the random variable Theta.</span>
  </p><p><span m='42100'>As a concrete example, suppose that Theta</span> <span
  m='44860'>can take values 1, 2, or 3.</span> </p><p><span m='47460'>We have
  obtained our observation,</span> <span m='49310'>and the conditional PMF takes
  this form.</span> </p><p><span m='52890'>We could stop at this point or
  we</span> <span m='55280'>could continue by asking for a specific estimate of
  Theta--</span> <span m='60090'>our best guess as to what Theta is.</span>
  </p><p><span m='63550'>One way of coming up with an estimate</span> <span
  m='65440'>is to use the maximum a posteriori of probability</span> <span
  m='68750'>rule, which looks for that value of theta that</span> <span
  m='71560'>has the largest posterior, or conditional, probability.</span>
  </p><p><span m='75530'>In this example, it is this value,</span> <span
  m='77880'>so our estimate is going to be equal to 2.</span> </p><p><span
  m='81480'>An alternative way of coming up with an estimate</span> <span
  m='84890'>could be the LMS rule, which calculates</span> <span m='88340'>an
  estimate equal to the conditional expectation</span> <span m='91980'>of the
  unknown parameter, given the observation that we</span> <span m='95520'>have
  made.</span> </p><p><span m='96650'>This is just the mean of this conditional
  distribution.</span> </p><p><span m='99670'>In this example, it would fall
  somewhere around here,</span> <span m='103080'>and the numerical value, as you
  can check, is equal to 2.2.</span> </p><p><span m='108820'>Next, we may be
  interested in how good a certain estimate is.</span> </p><p><span
  m='115090'>And for the case where we interpret the values of Theta</span>
  <span m='118270'>as hypotheses, a relevant criterion</span> <span
  m='121510'>is the probability of error.</span> </p><p><span m='124080'>In this
  case, because we already have</span> <span m='126560'>some data available in
  our hands and we're</span> <span m='129610'>called to make an estimate, what
  we care about</span> <span m='132270'>is the conditional probability, given
  the information</span> <span m='135435'>that we have, that we're making an
  error.</span> </p><p><span m='138450'>Making an error means the
  following.</span> </p><p><span m='140950'>We have the observation, the value
  of the estimate</span> <span m='143410'>has been determined, it is now a
  number,</span> <span m='146270'>and that's why we write it with a lowercase
  theta hat.</span> </p><p><span m='150220'>But the parameter is still
  unknown.</span> </p><p><span m='154059'>We don't know what it is.</span>
  </p><p><span m='155100'>It is described by this distribution.</span>
  </p><p><span m='157022'>And there's a probability that it's</span> <span
  m='158480'>going to be different from our estimate.</span> </p><p><span
  m='161170'>What is this probability?</span> </p><p><span m='163340'>It depends
  on how we construct the estimates.</span> </p><p><span m='166220'>If in this
  example, we use the MAP rule</span> <span m='168540'>and we make an estimate
  of 2, there</span> <span m='172295'>is probability 0.6 that the true value of
  Theta</span> <span m='175340'>is also equal to 2, and we are fine.</span>
  </p><p><span m='179120'>But there's a remaining probability of 0.4</span>
  <span m='182830'>that the true value of Theta is different than our
  estimate.</span> </p><p><span m='186340'>So there's probability 0.4 of having
  made a mistake.</span> </p><p><span m='191010'>If, instead of an estimate
  equal to 2,</span> <span m='193010'>we had chosen an estimate equal to
  3,</span> <span m='196850'>then the true parameter would be equal to our
  estimate</span> <span m='201190'>with probability 0.3, but we would have made
  an error</span> <span m='205210'>with probability 0.7, which would</span>
  <span m='208310'>be a bigger probability of error.</span> </p><p><span
  m='211260'>More generally, the probability of error</span> <span m='213620'>of
  a particular estimate is the sum</span> <span m='215720'>of the probabilities
  of the other values of Theta.</span> </p><p><span m='219540'>And if we want to
  keep the probability of error small,</span> <span m='224180'>we want to keep
  the sum of the probabilities</span> <span m='227200'>of the other values
  small, which means</span> <span m='230230'>we want to pick an estimate for
  which its own probability is</span> <span m='234530'>large.</span>
  </p><p><span m='235550'>And so by that argument, we see that the way</span>
  <span m='239100'>to achieve the smallest possible probability of error</span>
  <span m='242540'>is to employ the MAP rule.</span> </p><p><span
  m='244540'>This is a very important property of the MAP rule.</span>
  </p><p><span m='249450'>Now, this is the conditional probability</span> <span
  m='251480'>of error, given that we already have data in our hands.</span>
  </p><p><span m='255650'>But more generally, we may want to compare estimators
  or talk</span> <span m='260890'>about their performance in terms of their
  overall probability</span> <span m='265250'>of error.</span> </p><p><span
  m='266320'>We're designing a decision-making system</span> <span
  m='269080'>that's going to process data and making decisions.</span>
  </p><p><span m='272430'>In order to say how good our system is,</span> <span
  m='275270'>we want to say that overall, whenever you use the system,</span>
  <span m='278909'>there's going to be some random parameter,</span> <span
  m='281790'>there's going to be some value of the estimate.</span> </p><p><span
  m='285090'>And we want to know what's the probability that these two
  will</span> <span m='289300'>be different.</span> </p><p><span m='291340'>We
  can calculate this overall probability of error</span> <span m='294750'>by
  using the total probability theorem.</span> </p><p><span m='298780'>And the
  conditional probabilities of error as</span> <span m='301900'>follows.</span>
  </p><p><span m='303010'>We condition on the value of X. For any possible value
  of X,</span> <span m='308380'>we have a conditional probability of
  error.</span> </p><p><span m='310710'>And then we take a weighted
  average</span> <span m='313220'>of these conditional probabilities of
  error.</span> </p><p><span m='316190'>There's also an alternative way of using
  the total probability</span> <span m='319650'>theorem, which would be to first
  condition on Theta</span> <span m='322470'>and calculate the conditional
  probability of error</span> <span m='326010'>for a given choice of this
  unknown parameter.</span> </p><p><span m='330160'>And both of these formulas
  can be used.</span> </p><p><span m='334000'>Which one of the two is more
  convenient</span> <span m='336650'>really depends on the specifics of the
  problem.</span> </p><p><span m='341640'>Finally, I would like to make an
  important observation.</span> </p><p><span m='345290'>We argued that for any
  particular choice</span> <span m='350260'>of an observation, the MAP rule
  achieves the smallest</span> <span m='355390'>possible probability of
  error.</span> </p><p><span m='358800'>So under the MAP rule, this term is as
  small</span> <span m='362920'>as possible for any given value of the random
  variable,</span> <span m='367270'>capital X.</span> </p><p><span
  m='370530'>Since each term of this sum is as small as possible</span> <span
  m='375290'>under the MAP rule, it means that the overall sum will also</span>
  <span m='379480'>be as small as possible.</span> </p><p><span m='381950'>And
  this means is that the overall probability of error</span> <span m='387750'>is
  also smallest under the MAP rule.</span> </p><p><span m='391110'>In this
  sense, the MAP rule is the optimum way</span> <span m='394730'>of coming up
  with estimates in the hypothesis-testing context,</span> <span
  m='400670'>where we want to minimize the probability of error.</span>
  </p><p></p>
uid: bb490dfa1a07088e4dc611891b812b10
type: courses
layout: video
---
