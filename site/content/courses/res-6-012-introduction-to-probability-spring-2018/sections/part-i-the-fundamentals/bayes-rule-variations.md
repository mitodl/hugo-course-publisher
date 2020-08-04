---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: WSrVCCBOeg4
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    title: Video-YouTube-Stream
    type: Video
    uid: 1f3c37b2fb953f94000c7b3c22e71b8d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/WSrVCCBOeg4/default.jpg'
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ebe38cfdd87311b44d55dc504a640a5e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: WSrVCCBOeg4
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ef6bce7611992bc6b9d96d3b3f8aee9a
  - id: WSrVCCBOeg4.srt
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/bayes-rule-variations/WSrVCCBOeg4.srt
    title: 3play caption file
    type: null
    uid: b332dc592c8484a36281138b8d369ae4
  - id: WSrVCCBOeg4.pdf
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/bayes-rule-variations/WSrVCCBOeg4.pdf
    title: 3play pdf file
    type: null
    uid: 5d4cd57271e95861521f9155a09644a4
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ddc7d7215690e671c9754b6158814932
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8380bb2561011f5b54cd98fdf71c0df5
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-08_300k.mp4
    parent_uid: b7647dbcb8585dbd2b51ae26f3934043
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0380651d14ccb110775c4a50605435a6
inline_embed_id: 21109163bayesrulevariations95986883
order_index: 978
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: bayes-rule-variations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/bayes-rule-variations
title: Bayes Rule Variations
transcript: >-
  <p><span m='380'>If you remember our discussion from a long time ago, we
  said</span> <span m='4070'>that much of this class consists of variations of
  a</span> <span m='6790'>few basic skills and ideas, one of which is the
  Bayes</span> <span m='10540'>rule, the foundation of inference.</span>
  </p><p><span m='13670'>So let's look here at the Bayes rule again and
  its</span> <span m='16580'>different incarnations.</span> </p><p><span
  m='18670'>In a discrete setting we have a random variable with a known</span>
  <span m='22530'>PMF but whose values are not observed.</span> </p><p><span
  m='26210'>Instead we observe the value of another random variable,</span>
  <span m='29450'>call it Y, which has some relation with X.</span> </p><p><span
  m='33040'>And we will use the value of Y to make some inferences about</span>
  <span m='36800'>X. The relation between the two random variables is</span>
  <span m='40570'>captured by specifying the conditional PMF of Y given
  any</span> <span m='45390'>value of X. Think of X as an unknown state of the
  world and</span> <span m='49690'>of Y as a noisy observation of X. The
  conditional PMF tells</span> <span m='54530'>us the distribution of Y under
  each possible</span> <span m='57840'>state of the world.</span> </p><p><span
  m='59970'>Once we observe the value of Y we obtain some information</span>
  <span m='63420'>about X. And we use this information to make inferences</span>
  <span m='66990'>about the likely values of X. Mathematically, instead
  of</span> <span m='71070'>relying on the prior for X, we form some revised
  beliefs.</span> </p><p><span m='76820'>That is, we form the conditional
  [PMF]</span> <span m='79280'>of X given the particular observation that we
  have seen.</span> </p><p><span m='84130'>All this becomes possible because of
  the Bayes rule.</span> </p><p><span m='87370'>We have seen the Bayes rule for
  events.</span> </p><p><span m='89400'>But it is easy to translate into PMF
  notation.</span> </p><p><span m='93090'>We take the multiplication
  rule.</span> </p><p><span m='95140'>And we use it twice in different orders to
  get two</span> <span m='98990'>different forms--</span> <span m='100610'>or
  two different expressions--</span> <span m='102090'>for the joint PMF.</span>
  </p><p><span m='104479'>We then take one of the terms involved here and send
  it to</span> <span m='108990'>the other side.</span> </p><p><span
  m='110710'>We obtain this expression, which is the Bayes rule.</span>
  </p><p><span m='114100'>What [do] we have here?</span> </p><p><span
  m='115560'>We want to calculate the conditional distribution of X</span> <span
  m='119630'>which we typically call the posterior.</span> </p><p><span
  m='127600'>And to do this we rely on the prior of X as well as on the</span>
  <span m='133860'>model that we have for the observations.</span> </p><p><span
  m='136740'>The denominator requires us to compute the marginal of Y.
  But</span> <span m='141660'>this is something that is easily done because we
  have</span> <span m='145350'>the joint available.</span> </p><p><span
  m='147250'>The numerator, this expression here, is just the joint PMF.</span>
  </p><p><span m='151190'>And using the joint PMF you can always find</span>
  <span m='154790'>the marginal PMF.</span> </p><p><span m='156770'>Essentially,
  we're using here the total probability theorem.</span> </p><p><span
  m='159910'>And we're using the pieces of information that were given to</span>
  <span m='163160'>us, the prior and the model of the observations.</span>
  </p><p><span m='167600'>When we're dealing with continuous random
  variables</span> <span m='170020'>the story is identical.</span> </p><p><span
  m='171690'>We still have two versions of the multiplication rule.</span>
  </p><p><span m='174880'>By sending one term--</span> <span m='176810'>this
  term--</span> <span m='177570'>to the other side of the equation we</span>
  <span m='180270'>get the Bayes rule.</span> </p><p><span m='182150'>And then
  we use the total probability theorem to</span> <span m='185070'>calculate the
  denominator term.</span> </p><p><span m='187600'>So as far as mathematics go,
  the story is pretty simple.</span> </p><p><span m='191860'>It is exactly the
  same in the discrete and</span> <span m='194500'>the continuous case.</span>
  </p><p><span m='195740'>This story will be our stepping stone for
  dealing</span> <span m='198440'>with more complex models and also when we go
  into more</span> <span m='202270'>detail on the subject of inference</span>
  <span m='204300'>later in this course.</span> </p><p></p>
uid: b7647dbcb8585dbd2b51ae26f3934043
type: course
layout: video
---
