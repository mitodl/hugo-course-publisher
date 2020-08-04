---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Bj3sA7vGpYo
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    title: Video-YouTube-Stream
    type: Video
    uid: c61296f8807b34e45314dad92a2804d1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Bj3sA7vGpYo/default.jpg'
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ceebd1c13a480dd6d144e378009a8d48
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Bj3sA7vGpYo
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: cbccf5eeaa2997ce8b92651208cdc979
  - id: Bj3sA7vGpYo.srt
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/illustration-of-the-clt/Bj3sA7vGpYo.srt
    title: 3play caption file
    type: null
    uid: 1c98b6680071fb91fa39de72f51af891
  - id: Bj3sA7vGpYo.pdf
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/illustration-of-the-clt/Bj3sA7vGpYo.pdf
    title: 3play pdf file
    type: null
    uid: 21432e3c52944433a161519814706ab4
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 04817f4d65b2dc9046b0be129fea7ad5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fe1ca41521a74250580fcfe087943864
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L19-04_300k.mp4
    parent_uid: 9e9de27fe1eac368ad0b32fea28357cf
    title: Video-Internet Archive-MP4
    type: Video
    uid: b0a42596473fe3372c4b05c886b66504
inline_embed_id: 89413361illustrationoftheclt87126448
order_index: 1786
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: illustration-of-the-clt
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/illustration-of-the-clt
title: Illustration of the CLT
transcript: >-
  <p><span m='770'>Let us now look at some numerical examples to get a</span>
  <span m='3550'>feel for how the central limit theorem works in
  practice.</span> </p><p><span m='8690'>Let us look at a discrete random
  variable that has a</span> <span m='11470'>uniform distribution in the range
  here from 1 to 8.</span> </p><p><span m='16550'>If we add two independent
  random variables, drawn from</span> <span m='20360'>this PMF, we obtain a
  random variable whose PMF is the</span> <span m='24450'>convolution of this
  PMF with itself.</span> </p><p><span m='27460'>We can even carry out this
  calculation by hand, and we</span> <span m='30380'>get a triangular
  PMF.</span> </p><p><span m='32350'>So this is what we get for the case where n
  is equal to 2.</span> </p><p><span m='36620'>Now we can keep doing
  this.</span> </p><p><span m='38290'>If we add four of these discrete uniforms,
  of course</span> <span m='42650'>assumed independent, then we obtain a PMF
  that starts to</span> <span m='46680'>have a shape close to that of a normal
  shape.</span> </p><p><span m='51490'>And if you take as many as 32 of them,
  then the PMF of the</span> <span m='57160'>sum of 32 discrete uniforms is
  almost identical to the shape</span> <span m='64000'>that you would get if you
  were to draw a normal PDF.</span> </p><p><span m='69410'>So with n as small as
  32, we have essentially converged.</span> </p><p><span m='76270'>In fact, this
  convergence is so good that in practice,</span> <span m='79530'>quite often
  people use this idea to generate random</span> <span m='83630'>samples of a
  normal random variable.</span> </p><p><span m='85870'>What do you do?</span>
  </p><p><span m='87300'>You draw 32 random samples from a discrete</span> <span
  m='90370'>uniform, add them up.</span> </p><p><span m='93170'>And what you get
  is a sample of essentially a</span> <span m='96670'>normal random
  variable.</span> </p><p><span m='98979'>Now in this example, things worked out
  well for us because</span> <span m='102229'>the distribution that we started
  from was nicely</span> <span m='105789'>symmetric and didn't have any strange
  features.</span> </p><p><span m='109440'>Things are not always so
  favorable.</span> </p><p><span m='113450'>Let us consider starting from a
  truncated geometric.</span> </p><p><span m='117970'>If we add eight random
  variables that are independent</span> <span m='122910'>and drawn from this
  distribution, what we obtain</span> <span m='126070'>is a PMF of this form,
  which does not really look like a</span> <span m='130900'>normal shape.</span>
  </p><p><span m='132660'>The reason is that there's a pronounced
  asymmetry.</span> </p><p><span m='136070'>So let us add more and more
  independent X's.</span> </p><p><span m='139920'>If we add 16 of them, we start
  to get something that's a</span> <span m='144350'>little closer to
  normal.</span> </p><p><span m='145640'>But the asymmetry is still
  visible.</span> </p><p><span m='148180'>And if we add 32 of them, we can still
  see some asymmetry.</span> </p><p><span m='153660'>Namely, this tail here does
  not look exactly like this</span> <span m='157360'>tail out there.</span>
  </p><p><span m='159720'>So in this instance, it's really the asymmetry of
  the</span> <span m='163110'>original distribution that makes it</span> <span
  m='165500'>difficult to converge.</span> </p><p><span m='167110'>And it will
  take larger values of n before we can get a very</span> <span
  m='171250'>accurate approximation.</span> </p><p></p>
uid: 9e9de27fe1eac368ad0b32fea28357cf
type: course
layout: video
---
