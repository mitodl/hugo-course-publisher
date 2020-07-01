---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: yDkm9AYaczk
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    title: Video-YouTube-Stream
    type: Video
    uid: 2cfc06a0b93c042367cb36fda00e90d1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/yDkm9AYaczk/default.jpg'
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 14fd2e1aec6a519bc56aac078448a721
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: yDkm9AYaczk
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 18f1966617b8d9313a59291db29b7fcd
  - id: yDkm9AYaczk.srt
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-law-of-iterated-expectations/yDkm9AYaczk.srt
    title: 3play caption file
    type: null
    uid: d1a3f12a4f178c8fcd4ac52ad69a4b44
  - id: yDkm9AYaczk.pdf
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-law-of-iterated-expectations/yDkm9AYaczk.pdf
    title: 3play pdf file
    type: null
    uid: 6b18e9d74402990b7325830190435b9e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0a26e06c86433e4d119f9dc19425580d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 68142d776fc9f6df937da2e1f32e7f06
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L13-03_300k.mp4
    parent_uid: fbbe7e2594e92598c4cd00447ec5db82
    title: Video-Internet Archive-MP4
    type: Video
    uid: 616d8b954402fc49db51bfcf562cbdf4
inline_embed_id: 51076576thelawofiteratedexpectations85864507
order_index: 1230
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-law-of-iterated-expectations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-law-of-iterated-expectations
title: The Law of Iterated Expectations
transcript: >-
  <p><span m='460'>We have previously defined the abstract conditional</span>
  <span m='3920'>expectation of one random variable given</span> <span
  m='6820'>another random variable.</span> </p><p><span m='8430'>And we
  discussed that it is, by itself, a random variable.</span> </p><p><span
  m='12300'>In particular, it has an expectation, or</span> <span
  m='14880'>mean, of its own.</span> </p><p><span m='16690'>What is this
  mean?</span> </p><p><span m='18560'>This is what we want to find out.</span>
  </p><p><span m='20920'>Let us recall our development.</span> </p><p><span
  m='24440'>We look at the conditional expectation of a random</span> <span
  m='26970'>variable given a specific numerical value of another</span> <span
  m='29910'>random variable.</span> </p><p><span m='30870'>This is a number that
  depends on little y.</span> </p><p><span m='33560'>And this can be used to
  define a function little g.</span> </p><p><span m='37430'>The function little
  g for any particular little y tells us</span> <span m='40610'>the numerical
  value of the conditional expectation.</span> </p><p><span m='43710'>Since
  little g is a well defined function, we can also</span> <span m='47690'>now
  define this particular function, which is now a</span> <span
  m='51230'>function of a random variable.</span> </p><p><span m='53900'>It's a
  well defined object.</span> </p><p><span m='55170'>It's a random
  variable.</span> </p><p><span m='56570'>And then we introduced this abstract
  notation.</span> </p><p><span m='60030'>We defined this object to be exactly
  this</span> <span m='65140'>particular random variable.</span> </p><p><span
  m='67750'>So now we want to calculate the expected value of this</span> <span
  m='70920'>object, which is written this way.</span> </p><p><span m='74440'>Now
  this notation, here, may look quite formidable, but</span> <span
  m='78670'>let's see what is happening.</span> </p><p><span m='80110'>Inside
  here, we have a random variable.</span> </p><p><span m='83750'>And we take the
  expected value of that random variable.</span> </p><p><span m='87240'>Or, more
  crisply, think of that as the expected value of</span> <span m='91510'>g of
  capital Y, where g of capital Y is defined through</span> <span
  m='97130'>these correspondences here.</span> </p><p><span m='99509'>How do we
  calculate the expected value of a function</span> <span m='102039'>of a random
  variable?</span> </p><p><span m='103560'>Here we use the Expected Value
  Rule.</span> </p><p><span m='106340'>Assuming that Y is a discrete random
  variable, the Expected</span> <span m='109950'>Value Rule takes this
  form.</span> </p><p><span m='119690'>And the next step is to substitute the
  particular form</span> <span m='124590'>for g of Y that we have.</span>
  </p><p><span m='127060'>g of Y was defined in this manner.</span> </p><p><span
  m='129919'>So we're dealing with the sum over all little y's of the</span>
  <span m='135570'>expected value of X, given that Y takes the value
  little</span> <span m='139930'>y, weighted by the PMF of little y.</span>
  </p><p><span m='146460'>Now if we look at this expression, then it
  should</span> <span m='149800'>look familiar.</span> </p><p><span
  m='151730'>It is the expression that appears in the Total</span> <span
  m='154480'>Expectation Theorem.</span> </p><p><span m='156380'>We take the
  conditional expectation under different</span> <span m='159090'>scenarios and
  weigh those conditional expectations</span> <span m='162300'>according to the
  probabilities of those scenarios.</span> </p><p><span m='165130'>And this just
  gives us the overall expectation of the</span> <span m='170000'>random
  variable X.</span> </p><p><span m='172460'>So this step, here, was carried out
  using the Total</span> <span m='177150'>Expectation Theorem.</span>
  </p><p><span m='184130'>So we have proved this important fact, that the</span>
  <span m='188720'>expectation of a conditional expectation is the same as
  the</span> <span m='192510'>unconditional expectation.</span> </p><p><span
  m='194440'>This important fact is called the Law of Iterated</span> <span
  m='197610'>Expectations.</span> </p><p><span m='198950'>The proof was carried
  out assuming that Y is discrete.</span> </p><p><span m='203030'>So we use this
  particular version involving a PMF, but</span> <span m='206820'>the proof is
  exactly the same for the continuous case.</span> </p><p><span m='209320'>You
  would be using an integral and the PDF, instead the PMF.</span> </p><p><span
  m='213930'>As the proof indicates, the Law of Iterated Expectations</span>
  <span m='218250'>is nothing but an abstract version of the Total</span> <span
  m='222470'>Expectation Theorem.</span> </p><p><span m='223940'>It is really
  the Total Expectation Theorem written in</span> <span m='227380'>more abstract
  notation.</span> </p><p><span m='229410'>But this turns out to be powerful and
  also we avoid</span> <span m='233100'>having to deal separately with discrete
  or</span> <span m='235680'>continuous random variables.</span> </p><p></p>
uid: fbbe7e2594e92598c4cd00447ec5db82
type: courses
layout: video
---
