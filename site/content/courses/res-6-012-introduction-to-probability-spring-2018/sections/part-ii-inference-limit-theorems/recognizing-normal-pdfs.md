---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: RgGFvOpcQXY
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    title: Video-YouTube-Stream
    type: Video
    uid: d49542bce146ba6224f5a5a7de8c6fd9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/RgGFvOpcQXY/default.jpg'
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ca7a6280e076a853fde2bee831626ce7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: RgGFvOpcQXY
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7f78f79c8f1498eb0b4ccfd3c921cd4c
  - id: RgGFvOpcQXY.srt
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/recognizing-normal-pdfs/RgGFvOpcQXY.srt
    title: 3play caption file
    type: null
    uid: 12f30564b8a76b2291aa6baa7d60760e
  - id: RgGFvOpcQXY.pdf
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/recognizing-normal-pdfs/RgGFvOpcQXY.pdf
    title: 3play pdf file
    type: null
    uid: f1e23128d39e5c818558afc529c0616e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: cf9a33f6e2863582bce662071936e3eb
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b207993176ec4b209762ed87de5a8971
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-02_300k.mp4
    parent_uid: 7b0a15836dacbf3fd311a95bb2c3abc6
    title: Video-Internet Archive-MP4
    type: Video
    uid: 4aaaac2ba8dd592bc0d52c348b06e131
inline_embed_id: 68821776recognizingnormalpdfs15611443
order_index: 1444
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: recognizing-normal-pdfs
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/recognizing-normal-pdfs
title: Recognizing Normal PDFs
transcript: >-
  <p><span m='760'>In this lecture sequence, we will do a lot</span> <span
  m='3020'>with normal random variables.</span> </p><p><span m='5130'>And for
  this reason, it is useful to start</span> <span m='7460'>with a simple
  observation that will allow us</span> <span m='10140'>later on to move much
  faster.</span> </p><p><span m='12890'>Recall that a normal random variable
  with a certain mean</span> <span m='16090'>and variance has a PDF of this
  particular form.</span> </p><p><span m='19160'>What if somebody gives you a
  PDF of this form</span> <span m='22040'>and asks you what it corresponds
  to?</span> </p><p><span m='24220'>You can answer that this is exactly</span>
  <span m='27180'>of this form provided that you make the identification that
  3</span> <span m='32110'>is equal to mu.</span> </p><p><span m='34140'>So this
  is a normal PDF with a mean equal to 3</span> <span m='39210'>and whose
  variance can also be found</span> <span m='41860'>by matching this constant
  that appears here with the number 8.</span> </p><p><span m='45820'>This
  constant here is in the denominator.</span> </p><p><span m='48470'>So we have
  a term 1/2 sigma squared.</span> </p><p><span m='51140'>This must be equal to
  8.</span> </p><p><span m='53110'>And from this, we can infer that the
  variance</span> <span m='56690'>of this random variable is equal to
  1/16.</span> </p><p><span m='60690'>And if you also want to find out the value
  of this constant c,</span> <span m='64220'>you check the formula for normal
  PDFs,</span> <span m='67160'>the constant c is 1 over the standard
  deviation,</span> <span m='71370'>which is 1/4 in our case.</span>
  </p><p><span m='73050'>The square root of this number times the square root of
  2 pi.</span> </p><p><span m='79600'>Now suppose that somebody gives you a PDF
  of this form.</span> </p><p><span m='83850'>It's a constant times a negative
  exponential</span> <span m='86140'>of a quadratic function in x.</span>
  </p><p><span m='88850'>We will argue that this PDF is also a normal
  PDF.</span> </p><p><span m='93430'>And identify the parameters of that
  normal.</span> </p><p><span m='96700'>First, let's start with a certain
  observation.</span> </p><p><span m='99200'>A PDF must integrate to 1 so it
  cannot blow up as x goes</span> <span m='104460'>to infinity, which means that
  this exponential needs to die</span> <span m='109500'>out as x goes to
  infinity.</span> </p><p><span m='112190'>And that will only happen if this
  coefficient alpha here</span> <span m='115630'>is positive.</span>
  </p><p><span m='116830'>So that we have e to the minus something positive and
  large</span> <span m='120300'>which is going to die out.</span> </p><p><span
  m='122180'>Therefore, we must have alpha being a positive constant.</span>
  </p><p><span m='127280'>And let us assume from now on that this is the
  case.</span> </p><p><span m='131190'>What we will do next is we will
  try</span> <span m='132870'>to write this PDF in this form.</span>
  </p><p><span m='136220'>And the trick that we're going to use is the
  following.</span> </p><p><span m='140310'>We will focus on the term in the
  exponent, which</span> <span m='146070'>we rewrite this way.</span>
  </p><p><span m='148180'>We take out a factor of alpha.</span> </p><p><span
  m='157500'>And then we will try to make this expression here</span> <span
  m='162470'>appear like a square of this kind, like a perfect square.</span>
  </p><p><span m='167340'>So what is involved is a certain method,</span> <span
  m='170480'>a certain trick called completing the square.</span> </p><p><span
  m='174250'>That is, we write this term here in the form x plus
  something</span> <span m='180110'>squared.</span> </p><p><span m='181430'>And
  then we may need some additional terms.</span> </p><p><span m='184310'>What
  should that something be?</span> </p><p><span m='186830'>We would like that
  something be such</span> <span m='188900'>that when we expand this
  quadratic,</span> <span m='191830'>we get this term and that term.</span>
  </p><p><span m='194420'>Well we get an x squared and then</span> <span
  m='196470'>there's going to be a cross term.</span> </p><p><span
  m='198370'>What do we need here so that the cross term is equal to
  this?</span> </p><p><span m='202410'>What we need is a term equal to beta over
  2 alpha.</span> </p><p><span m='209250'>Because in that case, the cross
  term</span> <span m='211970'>is going to be 2 times x times beta divided by 2
  alpha.</span> </p><p><span m='217700'>The 2 in the beginning and that 2 cancel
  out,</span> <span m='220930'>so we're left with x beta over alpha</span> <span
  m='223320'>which is exactly what we got here.</span> </p><p><span
  m='225600'>However, this quadratic is going to have an additional term</span>
  <span m='228480'>which is going to be the square of this, which is not
  present</span> <span m='231240'>here.</span> </p><p><span m='231880'>So to
  keep the two sides equal, we need to subtract that term.</span> </p><p><span
  m='240780'>And finally, we have the last term involving gamma.</span>
  </p><p><span m='247440'>Therefore, the PDF of X is of the form.</span>
  </p><p><span m='252780'>We have a certain constant from here.</span>
  </p><p><span m='256060'>Then, we have the negative exponential of this
  term,</span> <span m='262780'>e to the minus alpha x plus beta over 2 alpha
  squared.</span> </p><p><span m='271720'>And then there's the negative
  exponential</span> <span m='274150'>of the rest, which is going to be a term
  of the form</span> <span m='279700'>e to the minus alpha times beta squared
  over 4 alpha squared</span> <span m='289050'>plus gamma over alpha.</span>
  </p><p><span m='293510'>Now this term here does not involve any x's.</span>
  </p><p><span m='297540'>So it can be absorbed into the constant c.</span>
  </p><p><span m='301550'>The dependence on x is only through this term.</span>
  </p><p><span m='305420'>And now this term looks exactly like what we've got up
  here,</span> <span m='310430'>provided that you make the following
  identifications.</span> </p><p><span m='314030'>Mu has to be equal to what we
  have here,</span> <span m='316690'>but here there's a minus sign, here there's
  no minus sign.</span> </p><p><span m='319920'>And so mu is going to be the
  negative of what</span> <span m='322540'>we have up here.</span> </p><p><span
  m='324010'>It's minus beta over 2 alpha.</span> </p><p><span m='328420'>And as
  for sigma squared, we match</span> <span m='331370'>and say that 1/2 sigma
  squared must be equal to the constant</span> <span m='339080'>that we have up
  here, which is alpha.</span> </p><p><span m='341700'>And from this, we
  conclude that sigma squared is equal</span> <span m='347300'>to 1/2
  alpha.</span> </p><p><span m='351909'>So we have concluded that a PDF of this
  type</span> <span m='355340'>is indeed a normal PDF.</span> </p><p><span
  m='357890'>It has a mean equal to that value.</span> </p><p><span
  m='361090'>And a variance equal to that value.</span> </p><p><span
  m='363860'>Actually, to figure out what the mean of this PDF is,</span> <span
  m='367320'>we do not need to go through this whole exercise.</span>
  </p><p><span m='370650'>Once we're convinced that this is a normal PDF,</span>
  <span m='374440'>then we know that the mean is equal to the peak of the
  PDF.</span> </p><p><span m='379750'>To find the peak, we want to maximize this
  over all</span> <span m='383700'>x's, which is the same as minimizing this
  quadratic</span> <span m='387450'>function over all x's.</span> </p><p><span
  m='389680'>Where is this quadratic function minimized?</span> </p><p><span
  m='392610'>To find that place, we can look at the exponent,</span> <span
  m='395830'>take its derivative, and set it to 0.</span> </p><p><span
  m='399570'>So setting the derivative of the exponent to 0</span> <span
  m='402350'>gives us the equation 2 alpha x plus beta equal to 0.</span>
  </p><p><span m='408680'>And from this, we solve for x.</span> </p><p><span
  m='411870'>And we can tell that the peak of the distribution</span> <span
  m='416210'>is going to be when x takes this particular value.</span>
  </p><p><span m='420020'>This value must also be equal to the mean.</span>
  </p><p><span m='423240'>So this is a very useful fact to know.</span>
  </p><p><span m='426090'>And we will use it over and over.</span> </p><p><span
  m='428680'>Negative exponential of a quadratic function of x</span> <span
  m='431940'>is always a normal PDF.</span> </p>
uid: 7b0a15836dacbf3fd311a95bb2c3abc6
type: courses
layout: video
---
