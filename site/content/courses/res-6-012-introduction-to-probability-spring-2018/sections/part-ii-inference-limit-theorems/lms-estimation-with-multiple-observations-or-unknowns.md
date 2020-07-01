---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: jzhFxJflHXQ
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    title: Video-YouTube-Stream
    type: Video
    uid: c43d09f973f6a648346a954301167970
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/jzhFxJflHXQ/default.jpg'
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 494f03cb690ac76c6fb01f38d8028d90
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: jzhFxJflHXQ
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2be0ae1ebf133b90424efb2d37b83045
  - id: jzhFxJflHXQ.srt
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-with-multiple-observations-or-unknowns/jzhFxJflHXQ.srt
    title: 3play caption file
    type: null
    uid: b0515000c7342c247134e73af9b1fddd
  - id: jzhFxJflHXQ.pdf
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-with-multiple-observations-or-unknowns/jzhFxJflHXQ.pdf
    title: 3play pdf file
    type: null
    uid: 95e81a95b7a40b8db25ecb08ba1545fa
  - id: Caption-3Play YouTube id-SRT
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: f86e3d2020cbc9358c99459eba93a139
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: c41a800fbb0a3f705a2f2d0c11fa553d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L16-07_300k.mp4
    parent_uid: abe9ec232e75cf5af1fb3a94a5058b3e
    title: Video-Internet Archive-MP4
    type: Video
    uid: f8064c531cc3aa6335cbc77423ad8ca3
inline_embed_id: 29570748lmsestimationwithmultipleobservationsorunknowns40318631
order_index: 1561
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: lms-estimation-with-multiple-observations-or-unknowns
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/lms-estimation-with-multiple-observations-or-unknowns
title: LMS Estimation with Multiple Observations or Unknowns
transcript: >-
  <p><span m='1600'>Our discussion of least mean squares estimation</span> <span
  m='4220'>so far was based on the case where</span> <span m='6590'>we have a
  single unknown random variable</span> <span m='9400'>and a single
  observation.</span> </p><p><span m='11990'>And we're interested in a point
  estimate</span> <span m='14300'>of this single unknown random variable.</span>
  </p><p><span m='16720'>What happens if we have multiple observations or
  parameters?</span> </p><p><span m='20880'>For example, suppose that
  instead</span> <span m='22850'>of a single observation, we have a whole vector
  of observations.</span> </p><p><span m='27540'>And, of course, we assume that
  we</span> <span m='29220'>have a model for these observations.</span>
  </p><p><span m='32119'>Once we observe our data, a numerical value</span>
  <span m='35510'>for this vector, or what is the same numerical values</span>
  <span m='39300'>for each one of these observation random variables.</span>
  </p><p><span m='42930'>Then we're placed in the conditional universe
  where</span> <span m='46030'>these values have been observed.</span>
  </p><p><span m='48790'>Then, we notice that the arguments that we carried
  out</span> <span m='51780'>did not rely in any way on the fact</span> <span
  m='54660'>that X was one-dimensional.</span> </p><p><span m='56870'>Exactly
  the same argument goes through</span> <span m='58990'>for the
  multi-dimensional case, and simply, the answer</span> <span m='62970'>is
  again, that the optimal estimate, the one that</span> <span
  m='66060'>minimizes the mean squared error, is again,</span> <span
  m='69120'>the conditional expectation of the unknown random variable</span>
  <span m='72590'>given the values of the observations.</span> </p><p><span
  m='75810'>So this gives us a simple and much more general</span> <span
  m='79110'>solution that also applies to the case</span> <span m='82070'>of
  multiple observations.</span> </p><p><span m='84580'>Now, what if we have
  multiple parameters?</span> </p><p><span m='88780'>Once more, the argument is
  exactly the same,</span> <span m='92950'>and we obtain that the optimal
  estimate</span> <span m='95320'>of any particular parameter is going</span>
  <span m='97740'>to be the conditional expectation of that parameter</span>
  <span m='101070'>given the observations.</span> </p><p><span m='103060'>So if
  our parameter vector is something of this form,</span> <span
  m='110729'>consisting of several components,</span> <span m='113670'>then the
  LMS estimate of the jth component of our parameter</span> <span
  m='119700'>vector is going to be simply the conditional expectation</span>
  <span m='123950'>of this parameter given the data that we have
  obtained.</span> </p><p><span m='129850'>And this gives us the most general
  solution</span> <span m='133180'>to the program of least mean squares</span>
  <span m='135480'>estimation when we have multiple parameters</span> <span
  m='140370'>and multiple observations.</span> </p><p><span m='142950'>One very
  simple concept that applies to all possible cases.</span> </p><p><span
  m='150670'>Unfortunately, however, our worries are not over.</span>
  </p><p><span m='155680'>Even though LMS estimation has such a simple and
  such</span> <span m='159970'>a general solution, things are not always
  easy.</span> </p><p><span m='165360'>Let us see what's happening.</span>
  </p><p><span m='168180'>No matter what, we have to first find out</span> <span
  m='172590'>the posterior distribution of Theta</span> <span m='175680'>given
  the observations that we have obtained.</span> </p><p><span m='178480'>And
  this is done using the Bayes rule, which we have written</span> <span
  m='182150'>here, and this is how you evaluate</span> <span m='184530'>the
  denominator in Bayes' rule.</span> </p><p><span m='188380'>What are the
  difficulties that we may encounter?</span> </p><p><span m='191390'>One first
  difficulty is that in many applications,</span> <span m='195020'>we do not
  necessarily have a good model</span> <span m='198520'>or we're not very
  confident about our model</span> <span m='201950'>of the observations.</span>
  </p><p><span m='203890'>If X and Theta are multi-dimensional,</span> <span
  m='206710'>such a model might be difficult to construct.</span> </p><p><span
  m='211560'>Setting this issue aside, there's a further issue.</span>
  </p><p><span m='216594'>The conditional expectation of Theta</span> <span
  m='219640'>given X may be a complicated non-linear function</span> <span
  m='224160'>of the observations.</span> </p><p><span m='226300'>This means that
  it may be difficult to analyze,</span> <span m='229890'>but even more
  important, it may be</span> <span m='232720'>very difficult to calculate even
  after you</span> <span m='236140'>have obtained your data.</span> </p><p><span
  m='238140'>Let us understand why this might be the case.</span> </p><p><span
  m='241790'>Suppose that Theta is a multi-dimensional parameter.</span>
  </p><p><span m='246100'>Then in order to calculate the denominator that's
  involved</span> <span m='249680'>here in the Bayes rule, when you integrate
  with respect to theta</span> <span m='253780'>, you have to actually carry a
  multi-dimensional integral,</span> <span m='260279'>and this can be very
  challenging or sometimes,</span> <span m='264190'>practically
  impossible.</span> </p><p><span m='267110'>Even if you had this denominator
  term in your hands,</span> <span m='271040'>still, in order to calculate a
  conditional expectation,</span> <span m='276420'>you would have to calculate
  once more</span> <span m='281230'>an integral of theta j integrated</span>
  <span m='286430'>against the posterior distribution of the vector</span> <span
  m='289780'>theta.</span> </p><p><span m='292190'>But this integral should be
  once more, over all the parameters.</span> </p><p><span m='299040'>So it would
  be a multi-dimensional integral</span> <span m='302640'>in the general case,
  and that's one additional source</span> <span m='306090'>of difficulty.</span>
  </p><p><span m='307940'>And this is the reason why we will also</span> <span
  m='310570'>consider an alternative to least mean squares estimation,
  which</span> <span m='314490'>is much simpler computationally and much
  less</span> <span m='317890'>demanding in terms of the model that we</span>
  <span m='321100'>need to have in our hands.</span> </p>
uid: abe9ec232e75cf5af1fb3a94a5058b3e
type: courses
layout: video
---
