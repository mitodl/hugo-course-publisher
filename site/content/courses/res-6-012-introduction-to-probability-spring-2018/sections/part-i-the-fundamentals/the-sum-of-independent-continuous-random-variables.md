---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: d2M4LNSeIn4
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    title: Video-YouTube-Stream
    type: Video
    uid: fb0b1b6134b210e83e212fdfb91e0172
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L12-03_300k.mp4
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    title: Video-Internet Archive-MP4
    type: Video
    uid: 36d309d01185db044b48027be64de38a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/d2M4LNSeIn4/default.jpg'
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 531931d35301f42d6460dbb2f5533810
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: d2M4LNSeIn4
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 61e72a5f6dd99a5e59568e07f7dd30ca
  - id: d2M4LNSeIn4.srt
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-sum-of-independent-continuous-random-variables/d2M4LNSeIn4.srt
    title: 3play caption file
    type: null
    uid: 23c4504946124bb6468a51991ce13b7c
  - id: d2M4LNSeIn4.pdf
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-sum-of-independent-continuous-random-variables/d2M4LNSeIn4.pdf
    title: 3play pdf file
    type: null
    uid: 1cc39dda2895a7379b234094bd7e68d0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a15ae74c82dc577407f42ae2058f9b80
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 95ae217f5c8ce577c8559e1a9df23d82
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: be37749f9719492fecc949b5a710ff9d
inline_embed_id: 3529792thesumofindependentcontinuousrandomvariables71021075
order_index: 1113
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-sum-of-independent-continuous-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-sum-of-independent-continuous-random-variables
title: The Sum of Independent Continuous Random Variables
transcript: >-
  <p><span m='1040'>We now develop a methodology for finding the PDF of the
  sum</span> <span m='5610'>of two independent random variables, when these
  random</span> <span m='8760'>variables are continuous with known PDFs.</span>
  </p><p><span m='11710'>So in that case, Z will also be continuous and</span>
  <span m='14780'>so will have a PDF.</span> </p><p><span m='16530'>The
  development is quite analogous to the one for the</span> <span
  m='19430'>discrete case.</span> </p><p><span m='20340'>And in the discrete
  case, we obtained</span> <span m='22100'>this convolution formula.</span>
  </p><p><span m='24090'>This convolution formula corresponds to a
  summation</span> <span m='27980'>over all ways that a certain sum can be
  realized.</span> </p><p><span m='33050'>In this picture, these are all the
  ways that the sum of 3 can</span> <span m='36520'>be realized.</span>
  </p><p><span m='37930'>In the continuous case, the different ways that
  the</span> <span m='40400'>constant sum can be realized corresponds to a
  line.</span> </p><p><span m='44340'>So this is a line in which X plus Y is
  equal to a constant.</span> </p><p><span m='50370'>And we need to somehow add
  over all the possible ways</span> <span m='54890'>that the sum can be
  obtained, add over all the</span> <span m='58330'>points on this line.</span>
  </p><p><span m='59850'>Now, when we're summing over all the points of the line
  we</span> <span m='63970'>really need to employ an integral.</span>
  </p><p><span m='66480'>And this leads to the following</span> <span
  m='68220'>guess for the formula.</span> </p><p><span m='70050'>Instead of
  having a summation, we will have an integral.</span> </p><p><span
  m='73840'>And the integral is over all the X, Y pairs whose sum is a</span>
  <span m='81120'>constant number, little z.</span> </p><p><span m='83510'>So we
  have here the family recipe--</span> <span m='85860'>that sums are replaced by
  integrals and PMFs are</span> <span m='90235'>replaced by PDFs.</span>
  </p><p><span m='91870'>So this formula is entirely plausible.</span>
  </p><p><span m='95030'>And it is called the</span> <span m='96250'>continuous
  convolution formula.</span> </p><p><span m='99140'>What we want to do next is
  to actually justify this formula</span> <span m='102750'>more
  rigorously.</span> </p><p><span m='104770'>We will use the following
  trick.</span> </p><p><span m='106890'>We will first condition on the random
  variable X, taking on a</span> <span m='112310'>specific value.</span>
  </p><p><span m='113850'>If we do this conditioning, then the random variable
  Z</span> <span m='118080'>becomes little x plus Y. And to make the argument
  more</span> <span m='126110'>transparent, we're going to look first at the
  special case</span> <span m='130070'>where little x is let's say, the number
  3.</span> </p><p><span m='134120'>In which case our random variable Z
  is</span> <span m='137400'>equal to Y plus 3.</span> </p><p><span
  m='140300'>Let us now calculate the conditional PDF of Z in a</span> <span
  m='144990'>universe in which we are told that the random variable X</span>
  <span m='150020'>takes on the value of 3.</span> </p><p><span m='153300'>Now,
  given that X takes on the value of 3, the random</span> <span
  m='157440'>variable Z is the same as the random variable Y plus 3.</span>
  </p><p><span m='170200'>And now we have the conditional PDF of y plus 3</span>
  <span m='173270'>given X.</span> </p><p><span m='174360'>However, we have
  assumed that X and Y are independent.</span> </p><p><span m='178120'>So the
  conditional PDF is going to be the same as the</span> <span
  m='182180'>unconditional PDF of Y plus 3.</span> </p><p><span m='189210'>And
  we obtain this expression.</span> </p><p><span m='191720'>Now, what is
  this?</span> </p><p><span m='194030'>We know the PDF of Y. But now we want the
  PDF of Y plus 3,</span> <span m='199410'>which is a simple version of a linear
  function of a single</span> <span m='203550'>random variable Y. For a linear
  function of this form,</span> <span m='208940'>we have already derived a
  formula.</span> </p><p><span m='212070'>In the notation we have used in the
  past, if we have a</span> <span m='215530'>random variable X, and we add the
  constant to it, the PDF of</span> <span m='222610'>the new random variable is
  the PDF of X but shifted by an</span> <span m='228240'>amount equal to b to
  the right.</span> </p><p><span m='231230'>And that's what the shifting
  corresponds to mathematically.</span> </p><p><span m='235370'>Now, let's us
  apply this formula to the case</span> <span m='237930'>that we have
  here.</span> </p><p><span m='239400'>We need to keep track of the different
  symbols.</span> </p><p><span m='242440'>So capital Y corresponds to X, b
  corresponds to 3, little x</span> <span m='247700'>corresponds to Z. And by
  using these correspondences, what we</span> <span m='251780'>obtain is f sub Y
  of this argument, which is Z in our</span> <span m='258329'>case minus b,
  which is 3 in our case.</span> </p><p><span m='264100'>And this is the final
  form for the conditional density of Z</span> <span m='267990'>given that X
  takes a specific value.</span> </p><p><span m='270530'>It's nothing more than
  the density of Y, but shifted by 3</span> <span m='275140'>units to the
  right.</span> </p><p><span m='278100'>Let us now generalize this.</span>
  </p><p><span m='279840'>Instead of using X equal to 3, let us use a general
  number.</span> </p><p><span m='284830'>And this gives us the more general
  formula, that the</span> <span m='288390'>conditional PDF of Z given that X
  takes on a specific</span> <span m='293090'>value is equal to--</span> <span
  m='295460'>just use little x here instead of 3.</span> </p><p><span
  m='298600'>It takes this form.</span> </p><p><span m='304340'>So we do have
  now in our hands a formula for the conditional</span> <span m='307510'>density
  of Z given X.</span> </p><p><span m='309850'>Since we have the conditional,
  and we also know the PDF of X,</span> <span m='315040'>we can use the
  multiplication rule to find the joint PDF of</span> <span m='320520'>X and Z.
  By the multiplication rule, it is the marginal PDF</span> <span m='328710'>of
  X times the conditional PDF of Z given X, which in our</span> <span
  m='334130'>case takes this particular form.</span> </p><p><span m='339320'>And
  now that we have the joint PDF in our hands, we can use</span> <span
  m='343830'>another familiar formula that takes us from the</span> <span
  m='346420'>joint to the marginal.</span> </p><p><span m='348060'>It would take
  the joint PDF and integrate with respect to</span> <span m='352010'>one
  argument, we obtain the marginal PDF of the other</span> <span
  m='356690'>random variable.</span> </p><p><span m='359370'>Using this specific
  form that we have for the joint PDF in</span> <span m='363860'>this formula,
  we have finally obtained this expression.</span> </p><p><span m='368320'>This
  is the integral of the joint PDF of X with Z</span> <span
  m='373120'>integrated over all xs.</span> </p><p><span m='375370'>And this
  proves this convolution formula.</span> </p><p><span m='378910'>In terms of
  the mechanics of carrying out the calculation</span> <span m='383350'>of the
  convolution, the mechanics are exactly the same</span> <span m='386500'>as in
  the discrete case.</span> </p><p><span m='388180'>If you want to solve a
  problem graphically, what you will do</span> <span m='391090'>is to take the
  PDF of Y, flip it horizontally, and then</span> <span m='396300'>shift it by
  an amount of little z, cross multiply</span> <span m='401070'>terms, and
  integrate them out.</span> </p><p></p>
uid: 95ae217f5c8ce577c8559e1a9df23d82
type: courses
layout: video
---
