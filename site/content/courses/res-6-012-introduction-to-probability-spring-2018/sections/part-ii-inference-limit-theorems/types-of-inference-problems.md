---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: v5fOm80VAnc
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    title: Video-YouTube-Stream
    type: Video
    uid: 1ffbfdc9ad903ed67ae45500fcf9d980
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/v5fOm80VAnc/default.jpg'
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c52f74a6e4480d392e7d00f3a3d50e89
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: v5fOm80VAnc
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1808a4348a4d5f555d94bda85c04280c
  - id: v5fOm80VAnc.srt
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/types-of-inference-problems/v5fOm80VAnc.srt
    title: 3play caption file
    type: null
    uid: 15d7871b7e3489e1785bd5fb47c97c55
  - id: v5fOm80VAnc.pdf
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/types-of-inference-problems/v5fOm80VAnc.pdf
    title: 3play pdf file
    type: null
    uid: ab5c40f4eec34f17bae9ce74dfe170fb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: cc7974308d6793b058c6d99afcdead80
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0684292fa138a0444cb54a7e9d4c04e8
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L14-03_300k.mp4
    parent_uid: 97ccf903a4f10ea9c40f0923f11c7a0f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7264ef5cd61abf134868ed0edb3d23b3
inline_embed_id: 39536351typesofinferenceproblems1491046
order_index: 1354
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: types-of-inference-problems
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/types-of-inference-problems
title: Types of Inference Problems
transcript: >-
  <p><span m='690'>Before we dive into the heart of the subject,</span> <span
  m='3360'>I want to make a few comments on the different problem</span> <span
  m='6170'>types that show up in the field of inference.</span> </p><p><span
  m='9750'>You can think of a general distinction</span> <span m='11940'>between
  model building versus making inferences</span> <span m='15390'>about
  unobserved variables.</span> </p><p><span m='18140'>We said a little earlier
  that one</span> <span m='20560'>of the main uses of the field of
  inference</span> <span m='23070'>is to construct models of certain
  situations.</span> </p><p><span m='26820'>But in many cases, we already have a
  model.</span> </p><p><span m='30370'>On the other hand, there may be variables
  that are unknown,</span> <span m='35150'>that are unobserved-- variables that
  are part of the model,</span> <span m='38550'>but whose values are not
  known.</span> </p><p><span m='40700'>In such cases, we still want to
  use</span> <span m='43070'>data to make some predictions or decisions</span>
  <span m='46890'>about those unobserved variables.</span> </p><p><span
  m='49310'>So model building might or might not be part of the problem</span>
  <span m='54200'>that we're dealing with.</span> </p><p><span m='56010'>To
  illustrate the difference between these two versions</span> <span m='59830'>of
  the problem, let us think of a concrete setting.</span> </p><p><span
  m='63690'>You have a transmitter who is sending a signal.</span> </p><p><span
  m='67060'>Call it S. And that signal goes through some medium.</span>
  </p><p><span m='72180'>It could be just the atmosphere.</span> </p><p><span
  m='75000'>And what that medium does is that it attenuates</span> <span
  m='78460'>the signal by a certain factor, a.</span> </p><p><span m='81340'>And
  then as the signal travels, it also gets hit by some noise,</span> <span
  m='87240'>call it W, and what the receiver sees is an observation,</span>
  <span m='92670'>X. So the situation is described by this simple equation
  here.</span> </p><p><span m='100780'>This situation often brings up the
  following inference</span> <span m='105120'>problem.</span> </p><p><span
  m='106710'>We want to find out what the medium is.</span> </p><p><span
  m='110720'>How do we do this?</span> </p><p><span m='112560'>We send a pilot
  signal, S, that is</span> <span m='116190'>a signal that we know what it
  is.</span> </p><p><span m='118759'>We observe X, and then using this
  equation,</span> <span m='124220'>and, knowing that W is random noise
  coming</span> <span m='127050'>from some distribution, we try to make</span>
  <span m='129509'>an inference about the variable a.</span> </p><p><span
  m='132860'>So this is an instance of model building.</span> </p><p><span
  m='136260'>We're trying to make a model of the medium that's involved.</span>
  </p><p><span m='140010'>But we can also think of a different problem.</span>
  </p><p><span m='143370'>Suppose that we know what the medium is.</span>
  </p><p><span m='146270'>Perhaps we already went through this particular phase
  here.</span> </p><p><span m='150320'>But we're sitting at the receiver,</span>
  <span m='153220'>and we do not know what has been sent.</span> </p><p><span
  m='156079'>And we want to find out what S is.</span> </p><p><span
  m='159230'>So we are looking again at this equation.</span> </p><p><span
  m='161700'>This time we know a, and we're trying</span> <span m='163840'>to
  make inferences about S.</span> </p><p><span m='167220'>You notice that these
  two versions of the problem</span> <span m='170140'>are essentially of the
  same mathematical structure.</span> </p><p><span m='174390'>We have a linear
  equation.</span> </p><p><span m='176840'>In one case, we know S. We want to
  find out a.</span> </p><p><span m='180930'>In the other case, we know
  a.</span> </p><p><span m='183070'>We want to find out what S is.</span>
  </p><p><span m='185980'>So even though the interpretation</span> <span
  m='188030'>of these two problems [is] quite different,</span> <span
  m='191510'>the mathematical structure is exactly the same.</span> </p><p><span
  m='194560'>This is fortunate.</span> </p><p><span m='195690'>It means that one
  and the same methodology</span> <span m='198820'>would be applicable to both
  types of problems.</span> </p><p><span m='203780'>There is another distinction
  between problem types</span> <span m='206730'>which turns out to be a little
  more substantial.</span> </p><p><span m='210100'>There are problems that we
  call hypothesis testing problems.</span> </p><p><span m='213829'>In those
  problems the unknown takes one out</span> <span m='216460'>of a few possible
  values.</span> </p><p><span m='218710'>That is, we may have a few different
  alternative</span> <span m='222040'>models of the world.</span> </p><p><span
  m='223190'>And we're trying to figure out which one of those models</span>
  <span m='226120'>is the correct one.</span> </p><p><span m='227550'>We're
  going to decide in favor of one of the candidate models,</span> <span
  m='231620'>and what we want to achieve is that we</span> <span m='234329'>make
  a correct decision.</span> </p><p><span m='235900'>Or if not, we want to have
  a small probability</span> <span m='239170'>of making an incorrect
  decision.</span> </p><p><span m='242000'>An example of this kind is the radar
  detection problem</span> <span m='245450'>that we had discussed in the very
  beginning of this course,</span> <span m='249170'>in which we were getting a
  signal.</span> </p><p><span m='251620'>We were getting a radar reading.</span>
  </p><p><span m='254200'>And the question was to make an inference</span> <span
  m='256880'>whether the radar is seeing an airplane</span> <span m='259470'>or
  whether an airplane is not present.</span> </p><p><span m='262830'>So in
  hypothesis testing problems,</span> <span m='265070'>we're essentially making
  a choice</span> <span m='267600'>out of a small number of discrete possible
  choices.</span> </p><p><span m='271480'>Instead, in estimation problems, the
  unknown quantities</span> <span m='275740'>are more of a numerical
  type.</span> </p><p><span m='278480'>They could even take continuous
  values.</span> </p><p><span m='281390'>And what we want to do is to come
  up</span> <span m='284000'>with an estimate of an unknown quantity that</span>
  <span m='287400'>is close to the true but unknown value of the quantity</span>
  <span m='292510'>that we're trying to estimate.</span> </p><p><span
  m='294540'>So here, our performance objective</span> <span m='296870'>is in
  terms of some kind of distance function.</span> </p><p><span m='300200'>We
  want to be close to the truth.</span> </p><p><span m='302710'>And typically,
  we have a continuum of possible choices</span> <span m='306310'>that is, our
  estimates can be general real numbers.</span> </p><p><span
  m='311210'>Generally speaking, these two types of problems, hypothesis</span>
  <span m='314080'>testing and estimation, have some significant
  differences</span> <span m='318270'>in the way that they are treated,</span>
  <span m='320360'>as we will be seeing next.</span> </p><p></p>
uid: 97ccf903a4f10ea9c40f0923f11c7a0f
type: course
layout: video
---
