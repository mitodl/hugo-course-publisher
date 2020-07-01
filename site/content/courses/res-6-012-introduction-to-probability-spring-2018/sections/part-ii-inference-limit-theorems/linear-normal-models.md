---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: qinepPxDUcY
    parent_uid: 8e7e230bd21e25af74cb235609877272
    title: Video-YouTube-Stream
    type: Video
    uid: c0ecd6c59870df051db4e464937fa5a9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/qinepPxDUcY/default.jpg'
    parent_uid: 8e7e230bd21e25af74cb235609877272
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 636e57d9000e1a03de4ab4275463bd63
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: qinepPxDUcY
    parent_uid: 8e7e230bd21e25af74cb235609877272
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2774f63c69e0739469fb1cacb8bce5a9
  - id: qinepPxDUcY.srt
    parent_uid: 8e7e230bd21e25af74cb235609877272
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/linear-normal-models/qinepPxDUcY.srt
    title: 3play caption file
    type: null
    uid: 66fc94d5d3dcb51a954d0f2ad526ef55
  - id: qinepPxDUcY.pdf
    parent_uid: 8e7e230bd21e25af74cb235609877272
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/linear-normal-models/qinepPxDUcY.pdf
    title: 3play pdf file
    type: null
    uid: 80df3331f530281e9907840dcc468d44
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8e7e230bd21e25af74cb235609877272
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e4d6611cc7a7fc195d3d7552fd4a3bbc
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8e7e230bd21e25af74cb235609877272
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f28ca59b7afc5b2dca14d38224caeabd
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-07_300k.mp4
    parent_uid: 8e7e230bd21e25af74cb235609877272
    title: Video-Internet Archive-MP4
    type: Video
    uid: 59cf91689210447e3430a8319398b784
inline_embed_id: 80281570linearnormalmodels9452004
order_index: 1489
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: linear-normal-models
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/linear-normal-models
title: Linear Normal Models
transcript: >-
  <p><span m='1480'>The trajectory estimation problem that we considered</span>
  <span m='4670'>gives you a first glimpse into a large field</span> <span
  m='8220'>that deals with linear normal models.</span> </p><p><span
  m='11380'>In this segment, I will just give you</span> <span m='13220'>a
  preview of what happens in that field,</span> <span m='16050'>although, we
  will not attempt to prove or justify anything.</span> </p><p><span
  m='20250'>What happens in this field is that we're</span> <span
  m='22630'>dealing with models where there are some underlying</span> <span
  m='25970'>independent normal random variables.</span> </p><p><span
  m='28510'>And then, the random variables of interest,</span> <span
  m='31110'>the unknown parameters and the observations,</span> <span
  m='33420'>can all be expressed as linear functions</span> <span m='35960'>of
  these independent normals.</span> </p><p><span m='38140'>Since linear
  functions of independent normals</span> <span m='40730'>are normal, in
  particular, this means</span> <span m='43320'>that the Theta j and the Xi are
  all normal random variables.</span> </p><p><span m='48620'>Carrying out
  inference within this class of models</span> <span m='52720'>goes under the
  name of linear regression.</span> </p><p><span m='59530'>One can proceed using
  pretty much the same steps</span> <span m='62440'>as we had in the trajectory
  estimation problem</span> <span m='65930'>and write down formulas for the
  posterior.</span> </p><p><span m='68700'>And it turns out that in every
  case,</span> <span m='71000'>the posterior of the parameter vector</span>
  <span m='74280'>takes a form which is the exponential of and the
  negative</span> <span m='79620'>of a quadratic function of the
  parameters.</span> </p><p><span m='82830'>And this means, in particular, that
  in order</span> <span m='85370'>to find the MAP estimate of the vector Theta,
  what</span> <span m='90470'>we need to do is to just minimize</span> <span
  m='92880'>this quadratic function with respect to theta.</span> </p><p><span
  m='95940'>And minimizing a quadratic function</span> <span m='98310'>is done
  by taking derivatives and setting them</span> <span m='100820'>to zero which
  leads us to a system of linear equations,</span> <span m='105800'>exactly as
  in the trajectory inference problem.</span> </p><p><span m='110000'>And this
  means that numerically it is very simple to come up</span> <span
  m='114037'>with a MAP estimate.</span> </p><p><span m='117479'>There's an
  interesting fact that comes out</span> <span m='120360'>of the algebra
  involved, namely, that the MAP</span> <span m='123660'>estimate of each one of
  the parameters</span> <span m='126290'>turns out to also be a linear function
  of the observations.</span> </p><p><span m='130590'>We saw this property in
  the estimators</span> <span m='132920'>that we derived for simpler cases in
  this lecture sequence.</span> </p><p><span m='137640'>It turns out that this
  property is still true.</span> </p><p><span m='141060'>And this is an
  appealing and desirable property</span> <span m='143710'>because it means that
  these estimators can be applied very</span> <span m='147750'>efficiently in
  practice without having</span> <span m='150210'>to do any complicated
  calculations.</span> </p><p><span m='153430'>Finally, there's a number of
  important facts, some of which</span> <span m='157700'>we have seen in our
  examples which</span> <span m='160180'>are true in very big generality.</span>
  </p><p><span m='165579'>One fact is that the maximum a posteriori probability
  estimate</span> <span m='170470'>of some parameter turns out to be</span>
  <span m='173000'>the same as the conditional expectation of that
  parameter.</span> </p><p><span m='178450'>Furthermore, if you look at this
  joint density of all</span> <span m='183875'>the Theta parameters and from it
  you</span> <span m='186750'>find the marginal density of the Theta
  parameters</span> <span m='190660'>always within this conditional
  universe.</span> </p><p><span m='193390'>It turns out that this marginal
  posterior PDF is itself normal.</span> </p><p><span m='201550'>Since it is
  normal, its mean-- which is this quantity--</span> <span m='206480'>is going
  to be equal to its peak.</span> </p><p><span m='209980'>And therefore, it is
  equal also to the MAP estimate that</span> <span m='215300'>would be derived
  from this marginal PDF.</span> </p><p><span m='219450'>So what do we have
  here?</span> </p><p><span m='221640'>There are two ways of coming up with MAP
  estimates.</span> </p><p><span m='224640'>One way is to find the peak of the
  joint PDF,</span> <span m='231079'>and then read out the different components
  of Theta.</span> </p><p><span m='235170'>Another way of coming up with MAP
  estimates</span> <span m='238030'>is to find for each parameter the marginal
  PDF</span> <span m='241940'>and look at the peak of this marginal PDF.</span>
  </p><p><span m='245050'>It turns out that for this model these two
  approaches</span> <span m='249360'>are going to give you the same
  answer.</span> </p><p><span m='251670'>Whether you work with the marginal or
  with the joint,</span> <span m='254850'>you get the same MAP estimates.</span>
  </p><p><span m='257160'>And this is a reassuring property to have.</span>
  </p><p><span m='260110'>Finally, as in the examples that we have worked in
  more detail,</span> <span m='264650'>it turns out that the mean squared error
  conditioned</span> <span m='268490'>on a particular observation is the same no
  matter</span> <span m='271530'>what the value of that observation was.</span>
  </p><p><span m='274780'>And furthermore, there are fairly simple and
  easily</span> <span m='278810'>computable formulas that one can apply in
  order</span> <span m='282940'>to find what this mean squared error is.</span>
  </p><p><span m='286740'>So to summarize, this class of models</span> <span
  m='291340'>that involve linear relations and normal random variables</span>
  <span m='296030'>have a rich set of important and elegant properties.</span>
  </p><p><span m='300850'>This is one of the reasons why these models are</span>
  <span m='303860'>used very much in practice.</span> </p><p><span
  m='306280'>And they're probably the most widely used class</span> <span
  m='309440'>of statistical models.</span> </p>
uid: 8e7e230bd21e25af74cb235609877272
type: courses
layout: video
---
