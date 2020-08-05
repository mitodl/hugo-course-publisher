---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: AH5jnR3RxJU
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    title: Video-YouTube-Stream
    type: Video
    uid: 209454c3b4d183e8a436a3042f1d3be6
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/AH5jnR3RxJU/default.jpg'
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: aae9feda54fc92510ae2541144afd077
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: AH5jnR3RxJU
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4d70c63784b269966e00f1133d46100d
  - id: AH5jnR3RxJU.srt
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability-of-the-sum-of-two-random-variables/AH5jnR3RxJU.srt
    title: 3play caption file
    type: null
    uid: 54051305e44f01bc1c7621f97382ae97
  - id: AH5jnR3RxJU.pdf
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability-of-the-sum-of-two-random-variables/AH5jnR3RxJU.pdf
    title: 3play pdf file
    type: null
    uid: c8a8b5c725392343a92e40314bec1c9a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 01b45d6596a6f2139ce60b445239d84c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d70ad6b81de1faf2083447439f4e39d4
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S18-01_300k.mp4
    parent_uid: 9a72e9d23dce0006a51527742f2ade7d
    title: Video-Internet Archive-MP4
    type: Video
    uid: f4ae7efb303ef5f3842c3c17ceede222
inline_embed_id: 90188361convergenceinprobabilityofthesumoftworandomvariables42305045
order_index: 1732
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: convergence-in-probability-of-the-sum-of-two-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/convergence-in-probability-of-the-sum-of-two-random-variables
title: Convergence in Probability of the Sum of Two Random Variables
transcript: >-
  <p><span m='1170'>This is a rather theoretical exercise that has two
  purposes.</span> </p><p><span m='5680'>One is to verify that the notion of
  convergence in probability</span> <span m='9970'>is quite natural and that it
  has properties</span> <span m='12730'>similar to the notion of convergence of
  sequences.</span> </p><p><span m='15880'>And the second purpose is to get a
  little bit of practice</span> <span m='18860'>with the formal definition of
  convergence in probability.</span> </p><p><span m='22390'>So what is the
  statement saying?</span> </p><p><span m='25150'>It says that if we have a
  sequence of random variables</span> <span m='29840'>that converges to a
  certain number, a,</span> <span m='32540'>and this basically means that when n
  is large,</span> <span m='36730'>the distribution is highly concentrated
  around a.</span> </p><p><span m='40450'>And if we have another sequence of
  random variables</span> <span m='42712'>that converges to a certain
  number,</span> <span m='44170'>b, which means that the probability
  distribution of Yn</span> <span m='48460'>is heavily concentrated around
  b.</span> </p><p><span m='52390'>In that case, then the probability
  distribution</span> <span m='55510'>of the sum of the two random
  variables</span> <span m='58370'>is heavily concentrated in the vicinity of a
  plus b.</span> </p><p><span m='62880'>So what are we saying?</span>
  </p><p><span m='64290'>If Xn is very close to a with high probability</span>
  <span m='67810'>and Yn is very close to b with high probability,</span> <span
  m='71370'>then the sum will also be close to a plus b</span> <span
  m='75140'>with high probability.</span> </p><p><span m='76860'>This is the
  intuitive content of the statement.</span> </p><p><span m='80070'>Now we want
  to establish this formally.</span> </p><p><span m='83510'>Before establishing
  this statement,</span> <span m='85860'>however, it will be a good
  practice</span> <span m='88340'>to verify a property of this type</span> <span
  m='91100'>for the ordinary convergence of sequences of numbers, not</span>
  <span m='95700'>random variables.</span> </p><p><span m='97210'>So let us do
  that.</span> </p><p><span m='99060'>What we want to show is that if a sequence
  of numbers, an,</span> <span m='106350'>converges to some number a, and
  another sequence converges</span> <span m='109990'>to some number b, we want
  to show that</span> <span m='113300'>in that case, an plus bn converges to the
  sum of a plus</span> <span m='118490'>b, and we want to do this
  formally.</span> </p><p><span m='124620'>So let us start with the definition
  of convergence.</span> </p><p><span m='128960'>What does it mean that an
  converges to a?</span> </p><p><span m='133440'>It means that if I fix some
  positive epsilon,</span> <span m='144590'>then there exists some number or
  some time</span> <span m='156329'>such that if we consider some n bigger than
  n0,</span> <span m='165670'>then an is close to a in the sense</span> <span
  m='171850'>that this difference is less than epsilon.</span> </p><p><span
  m='176070'>Now this is true for any positive epsilon,</span> <span
  m='179800'>so if instead of epsilon, I take epsilon over 2,</span> <span
  m='183550'>this would also be true.</span> </p><p><span m='187940'>Eventually,
  after some time, we will have the property</span> <span m='193090'>that an
  minus a is less than epsilon over 2.</span> </p><p><span m='198150'>Similarly,
  if bn converges to b, then</span> <span m='204460'>we will have the property
  that there exists some time-- let's</span> <span m='214630'>call it n0 prime--
  such that if n is bigger</span> <span m='222570'>than that particular time,
  then bn minus b is going</span> <span m='229980'>to be less than epsilon over
  2.</span> </p><p><span m='234579'>So after time n0 and after time n0
  prime,</span> <span m='239090'>these two inequalities will be true.</span>
  </p><p><span m='242790'>So if we wait long enough so that both of these
  inequalities</span> <span m='246710'>are true, that is, if n is bigger</span>
  <span m='251790'>than the maximum of n0 and n0 prime,</span> <span
  m='259339'>then we will have the following.</span> </p><p><span m='263320'>We
  will have that an plus bn minus a minus b</span> <span m='272170'>which, by an
  elementary inequality,</span> <span m='274870'>is less than or equal to an
  minus a plus bn minus b.</span> </p><p><span m='282750'>Where is this
  inequality coming from?</span> </p><p><span m='285420'>This is a general
  inequality about absolute values.</span> </p><p><span m='288190'>If I give you
  two numbers, the absolute value of x plus y</span> <span m='292630'>is always
  less than or equal to the sum of the absolute values.</span> </p><p><span
  m='297560'>So we're using this inequality where</span> <span m='299710'>x is
  an minus a and y is bn minus b.</span> </p><p><span m='304680'>So we have this
  inequality, but when time is big enough,</span> <span m='309520'>an minus a is
  less than epsilon over 2.</span> </p><p><span m='313520'>bn minus b is also
  less than epsilon over 2.</span> </p><p><span m='319420'>And putting
  everything together, this is epsilon.</span> </p><p><span m='322850'>So what
  have we shown?</span> </p><p><span m='324680'>That if an converges to a and bn
  converges</span> <span m='328160'>to b, so that all these relations
  hold,</span> <span m='331500'>then if time n is large enough, then</span>
  <span m='336460'>the difference between this number and that number</span>
  <span m='340820'>is going to be less than epsilon.</span> </p><p><span
  m='344830'>And this is true for every positive epsilon,</span> <span
  m='348460'>but that's just the definition of convergence</span> <span
  m='351560'>of this quantity to that quantity.</span> </p><p><span
  m='354550'>And this is the proof of this elementary relation</span> <span
  m='358010'>about convergence of numbers.</span> </p><p><span m='363190'>Now
  let us turn to convergence of random variables.</span> </p><p><span
  m='368210'>We fix some epsilon that's positive.</span> </p><p><span
  m='374320'>In order to show convergence in probability,</span> <span
  m='377410'>we want to look at this difference</span> <span m='387270'>and look
  at the probability that this difference is</span> <span m='391090'>bigger than
  epsilon in magnitude.</span> </p><p><span m='393680'>And we want to show that
  this quantity converges to 0.</span> </p><p><span m='402350'>If it does, then
  we will have established</span> <span m='405470'>convergence in probability
  because that's just</span> <span m='408030'>the definition.</span>
  </p><p><span m='410770'>Now, this is the event that the sum of the random
  variables</span> <span m='413640'>is close to a plus b, and we want</span>
  <span m='416460'>to use the fact that xn is close to a and yn is close to
  b.</span> </p><p><span m='422860'>So this is the event that-- let's write
  it</span> <span m='427320'>in a somewhat different way-- is the probability of
  the event</span> <span m='431990'>that xn minus a plus yn minus b is</span>
  <span m='440460'>bigger than epsilon in magnitude.</span> </p><p><span
  m='444220'>Now, for a sum of two numbers to be bigger</span> <span
  m='448950'>than epsilon in magnitude, it has</span> <span m='451570'>to be the
  case that either one of them</span> <span m='457409'>is larger than epsilon
  over 2 or the other number</span> <span m='464430'>is bigger in magnitude than
  epsilon over 2.</span> </p><p><span m='468840'>So if this event happens, this
  event must also happen.</span> </p><p><span m='474670'>This means that this
  event is a subset of this event.</span> </p><p><span m='479720'>This is a
  smaller one.</span> </p><p><span m='480980'>If this happens, then this one
  happens.</span> </p><p><span m='483450'>So since it's a smaller event,
  it</span> <span m='485630'>means that its probability is less than</span>
  <span m='488470'>or equal to the probability of that event.</span>
  </p><p><span m='492560'>Now we use the union bound.</span> </p><p><span
  m='494740'>The probability that something happens</span> <span m='496860'>or
  something else is happening is less than</span> <span m='500180'>or equal to
  the sum of their probabilities.</span> </p><p><span m='515169'>And now, since
  Xn converges to a in probability,</span> <span m='521110'>then by definition,
  we know that this quantity converges to 0</span> <span m='527560'>as n goes to
  infinity.</span> </p><p><span m='531900'>Similarly, since Yn converges to b in
  probability,</span> <span m='538640'>this quantity converges to 0 as n goes to
  infinity.</span> </p><p><span m='544910'>This is a sequence of numbers that
  converges to 0.</span> </p><p><span m='547900'>This is another sequence of
  numbers that converges to 0.</span> </p><p><span m='552470'>Therefore, the sum
  of these two sequences also converges to 0.</span> </p><p><span m='558880'>In
  essence, here we're applying what we established earlier</span> <span
  m='562290'>about convergence of numbers.</span> </p><p><span m='564260'>If a
  sequence converges to 0 and another sequence converges</span> <span
  m='566830'>to 0, then the sum of these sequences</span> <span m='569780'>also
  converges to 0 as n goes to infinity.</span> </p><p><span m='574890'>But this
  is exactly what we need to show in order</span> <span m='578440'>to establish
  convergence in probability of Xn plus Yn.</span> </p><p><span m='583030'>We
  have shown that if I fix any epsilon, positive,</span> <span m='587890'>no
  matter how small, the probability</span> <span m='590920'>that I am more than
  epsilon away,</span> <span m='594860'>the probability that Xn plus Yn is more
  than epsilon away</span> <span m='599080'>from the supposed target or the
  limit,</span> <span m='603240'>this probability must go to 0.</span>
  </p><p><span m='606210'>And that's exactly what we established here,</span>
  <span m='609060'>and this completes the derivation.</span> </p><p></p>
uid: 9a72e9d23dce0006a51527742f2ade7d
type: course
layout: video
---
