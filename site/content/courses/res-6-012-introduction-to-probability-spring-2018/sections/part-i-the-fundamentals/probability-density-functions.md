---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8QFpZ3FndBc
    parent_uid: af352ce7e7a0a726feae43753135c96a
    title: Video-YouTube-Stream
    type: Video
    uid: 48a95f164eb6635f0639e8e91796f279
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8QFpZ3FndBc/default.jpg'
    parent_uid: af352ce7e7a0a726feae43753135c96a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 19eefb3532750314215e2d8f75e23632
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8QFpZ3FndBc
    parent_uid: af352ce7e7a0a726feae43753135c96a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: baddd4aaf2edaf5e730138e52d71d99d
  - id: 8QFpZ3FndBc.srt
    parent_uid: af352ce7e7a0a726feae43753135c96a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-density-functions/8QFpZ3FndBc.srt
    title: 3play caption file
    type: null
    uid: 14088efdf30a8c7759f4bf6c83539c07
  - id: 8QFpZ3FndBc.pdf
    parent_uid: af352ce7e7a0a726feae43753135c96a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-density-functions/8QFpZ3FndBc.pdf
    title: 3play pdf file
    type: null
    uid: 9b9ac54e21e7618e5d447a62dad536d0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: af352ce7e7a0a726feae43753135c96a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c38e35d8566e838b61e7978c361eaad4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: af352ce7e7a0a726feae43753135c96a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 560e870f5a88730229178575d8cba421
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L08-02_300k.mp4
    parent_uid: af352ce7e7a0a726feae43753135c96a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8f91d5a6370c9eedc63b23d5c095dbf2
inline_embed_id: 28184344probabilitydensityfunctions70262648
order_index: 753
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: probability-density-functions
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-density-functions
title: Probability Density Functions
transcript: >-
  <p><span m='650'>In this segment, we introduce the concept of
  continuous</span> <span m='3990'>random variables and their characterization
  in terms of</span> <span m='7230'>probability density functions, or PDFs for
  short.</span> </p><p><span m='11100'>Let us first go back to discrete random
  variables.</span> </p><p><span m='13810'>A discrete random variable takes
  values</span> <span m='15800'>in a discrete set.</span> </p><p><span
  m='17130'>There is a total of one unit of probability assigned to the</span>
  <span m='20430'>possible values.</span> </p><p><span m='21780'>And the PMF
  tells us exactly how much of this probability</span> <span m='26080'>is
  assigned to each value.</span> </p><p><span m='28100'>So we can think of the
  bars in the PMF as point masses with</span> <span m='33590'>positive weight
  that sit on top of each</span> <span m='37000'>possible numerical
  value.</span> </p><p><span m='38870'>And we can calculate the probability that
  the random</span> <span m='41440'>variable falls inside an interval by adding
  all the</span> <span m='45720'>masses that sit on top of that interval.</span>
  </p><p><span m='49270'>So for example, if we're looking at the interval from
  a</span> <span m='52890'>to b, the probability of this interval is equal to
  the sum</span> <span m='57730'>of the probabilities of these three masses that
  fall inside</span> <span m='61530'>this interval.</span> </p><p><span
  m='62870'>On the other hand, a continuous random variable</span> <span
  m='65690'>will be taking values over a continuous range--</span> <span
  m='68860'>for example, the real line or an interval on the real line.</span>
  </p><p><span m='72800'>In this case, we still have one total unit of
  probability</span> <span m='78000'>mass that is assigned to the possible
  values of the random</span> <span m='81350'>variable, except that this unit of
  mass is spread all</span> <span m='85390'>over the real line.</span>
  </p><p><span m='86860'>But it is not spread in a uniform manner.</span>
  </p><p><span m='89990'>Some parts of the real line have more</span> <span
  m='92210'>mass per unit length.</span> </p><p><span m='93880'>Some have
  less.</span> </p><p><span m='95670'>How much mass exactly is sitting on top of
  each part of</span> <span m='99900'>the real line is described by the
  probability density</span> <span m='103090'>function, this function plotted
  here, which we denote</span> <span m='107380'>with this notation.</span>
  </p><p><span m='108840'>The letter f will always indicate that we are
  dealing</span> <span m='112090'>with a PDF.</span> </p><p><span m='113440'>And
  the subscript will indicate which random variable</span> <span
  m='117310'>we're talking about.</span> </p><p><span m='120190'>We use the
  probability density function to calculate the</span> <span
  m='123210'>probability that X lies in a certain interval--</span> <span
  m='127020'>let's say the interval from a to b.</span> </p><p><span
  m='130560'>And we calculate it by finding the area under the PDF that</span>
  <span m='136079'>sits on top of that interval.</span> </p><p><span
  m='139900'>So this area here, the shaded area, is the probability that</span>
  <span m='143300'>X stakes values in this interval.</span> </p><p><span
  m='146100'>Think of probability as snow fall.</span> </p><p><span
  m='148990'>There is one pound of snow that has fallen on</span> <span
  m='151770'>top of the real line.</span> </p><p><span m='154500'>The PDF tells
  us the height of the snow accumulated over a</span> <span
  m='159160'>particular point.</span> </p><p><span m='161329'>We then find the
  weight of the overall amount of snow sitting</span> <span m='167190'>on top of
  an interval by calculating the area under</span> <span m='171079'>this
  curve.</span> </p><p><span m='172400'>Of course, mathematically, area under
  the curve is just</span> <span m='176750'>an integral.</span> </p><p><span
  m='177720'>So the probability that X takes values in this interval</span>
  <span m='181320'>is the integral of the PDF over this particular
  interval.</span> </p><p><span m='187790'>What properties should the PDF
  have?</span> </p><p><span m='190320'>By analogy with the discrete case, a PDF
  must be</span> <span m='194780'>non-negative, because we do not want to get
  negative</span> <span m='198060'>probabilities.</span> </p><p><span
  m='200290'>In the discrete case, the sum of the PMF entries has to be</span>
  <span m='204870'>equal to 1.</span> </p><p><span m='206680'>In the continuous
  case, X is certain to lie in the interval</span> <span m='211240'>between
  minus infinity and plus infinity.</span> </p><p><span m='214200'>So letting a
  be minus infinity and b plus infinity, we should</span> <span m='219260'>get a
  probability of 1.</span> </p><p><span m='221680'>So the total area under the
  PDF, when we integrate over</span> <span m='226180'>the entire real line,
  should be equal to 1.</span> </p><p><span m='229780'>These two conditions are
  all that we need in order to have</span> <span m='235140'>a legitimate
  PDF.</span> </p><p><span m='238300'>We can now give a formal definition of
  what a</span> <span m='241280'>continuous random variable is.</span>
  </p><p><span m='243770'>A continuous random variable is a random variable
  whose</span> <span m='248270'>probabilities can be described by a PDF
  according to a</span> <span m='254380'>formula of this type.</span>
  </p><p><span m='257209'>An important point--</span> <span m='259899'>the fact
  that a random variable takes values on a</span> <span m='262550'>continuous
  set is not enough to make it what we call a</span> <span m='266980'>continuous
  random variable.</span> </p><p><span m='269180'>For a continuous random
  variable, we're</span> <span m='270910'>asking for a bit more--</span> <span
  m='272730'>that it can be described by a PDF, that a formula of this</span>
  <span m='276630'>type is valid.</span> </p><p><span m='280760'>Now, once we
  have the probabilities of intervals as</span> <span m='284240'>given by a PDF,
  we can use of additivity to calculate the</span> <span
  m='288380'>probabilities of more complicated sets.</span> </p><p><span
  m='291340'>For example, if you're interested in the probability</span> <span
  m='294520'>that X lies between 1 and 3 or that X lies between 4 and 5--</span>
  <span m='306050'>so this is the probability that X falls in a region
  that</span> <span m='311250'>consists of two disjoint intervals.</span>
  </p><p><span m='314940'>We find the probability of the union of these two
  intervals,</span> <span m='319790'>by additivity, by adding the probabilities
  of the two</span> <span m='324020'>intervals, since these intervals are
  disjoint.</span> </p><p><span m='329480'>And then we can use the PDF to
  calculate the probabilities of</span> <span m='335840'>each one of these
  intervals according to this formula.</span> </p><p><span m='342570'>At this
  point, you may be wondering what happened to the</span> <span
  m='345780'>sample space in all this discussion.</span> </p><p><span
  m='349120'>Well, there is still an underlying sample space</span> <span
  m='353070'>lurking in the background.</span> </p><p><span m='357800'>And
  different outcomes in the sample space result in</span> <span
  m='361860'>different numerical values for the</span> <span m='365670'>random
  variable of interest.</span> </p><p><span m='369790'>And when we talk about
  the probability that X takes</span> <span m='373650'>values between some
  numbers a and b, what we really mean is</span> <span m='378050'>the
  probability of those outcomes for which the</span> <span m='383780'>resulting
  value of X lies inside</span> <span m='387430'>this particular
  interval.</span> </p><p><span m='389800'>So that's what probability
  means.</span> </p><p><span m='391720'>On the other hand, once we have a PDF in
  our hands, we</span> <span m='395659'>can completely forget about the
  underlying sample space.</span> </p><p><span m='399290'>And we can carry out
  any calculations we may be</span> <span m='402890'>interested in by just
  working with the PDF.</span> </p><p><span m='406680'>So as we move on in this
  course, the sample space will</span> <span m='410600'>be moved
  offstage.</span> </p><p><span m='412400'>There will be less and less mention
  of it.</span> </p><p><span m='414470'>And we will be working just directly
  with PDFs or with</span> <span m='418159'>PMFs if we are dealing with discrete
  random variables.</span> </p><p><span m='423270'>Let us now build a little bit
  on our understanding of what</span> <span m='426470'>PDFs really are by
  looking at</span> <span m='428580'>probabilities of small intervals.</span>
  </p><p><span m='431110'>Let us look at an interval that starts at some a and
  goes</span> <span m='436660'>up to some number a plus delta.</span>
  </p><p><span m='440340'>So here, delta is a positive number.</span>
  </p><p><span m='443410'>But we're interested in the case where</span> <span
  m='445270'>delta is very small.</span> </p><p><span m='448150'>Let us look at
  the probability that X falls in this interval.</span> </p><p><span
  m='453750'>The probability that X lies inside this interval is the</span>
  <span m='460640'>area of this region.</span> </p><p><span m='465650'>On the
  other hand, as long as f does not change too much</span> <span m='470630'>over
  this little interval, which will be the case if we</span> <span
  m='473590'>have a continuous density f, then we can approximate the</span>
  <span m='479520'>area we have of this region by the area of a rectangle
  where</span> <span m='484670'>we keep the height constant.</span> </p><p><span
  m='488130'>The area of this rectangle is equal to the height, which is</span>
  <span m='494800'>the value of the PDF at the point a, times the base of
  the</span> <span m='501360'>rectangle, which is equal to delta.</span>
  </p><p><span m='504360'>So this gives us an interpretation of PDFs in</span>
  <span m='507560'>terms of probabilities of small intervals.</span>
  </p><p><span m='510940'>If we take this factor of delta and send it to the
  other</span> <span m='514370'>side in this approximate equality, we see that
  the</span> <span m='517960'>value of the PDF can be interpreted as probability
  per</span> <span m='523308'>unit length.</span> </p><p><span m='524760'>So
  PDFs are not probabilities.</span> </p><p><span m='527350'>They are
  densities.</span> </p><p><span m='528750'>Their units are probability per unit
  length.</span> </p><p><span m='532770'>Now, if the probability per unit length
  is finite and the</span> <span m='537710'>length delta is sent to 0, we will
  get 0 probability.</span> </p><p><span m='544410'>More formally, if we look at
  this integral and we let b to</span> <span m='549690'>be the same as a, then
  we obtain the probability that X</span> <span m='556200'>is equal to a.</span>
  </p><p><span m='559150'>And on that side, we get an integral</span> <span
  m='561620'>over a 0 length interval.</span> </p><p><span m='564176'>And that
  integral is going to be 0.</span> </p><p><span m='566800'>So we obtain that
  the probability that X takes a</span> <span m='570960'>value equal to a
  specific, particular point--</span> <span m='575900'>that probability is going
  to be equal to 0.</span> </p><p><span m='579220'>So for a continuous random
  variable, any particular point</span> <span m='582520'>has 0
  probability.</span> </p><p><span m='584710'>Yet somehow, collectively, the
  infinitely many points in an</span> <span m='590280'>interval together will
  have positive probablility.</span> </p><p><span m='595070'>Is this a
  puzzle?</span> </p><p><span m='596650'>Not really.</span> </p><p><span
  m='597260'>That's exactly what happens, also, with the</span> <span
  m='599890'>ordinary notion of length.</span> </p><p><span m='602050'>Single
  points have 0 length, yet by putting together lots</span> <span m='606590'>of
  points, we can create a set that has a positive length.</span> </p><p><span
  m='614030'>And a final consequence of the fact that individual points</span>
  <span m='617680'>have 0 length.</span> </p><p><span m='620650'>Using the
  additivity axiom, the probability that our</span> <span m='624380'>random
  variable takes values inside an interval is equal to</span> <span
  m='629680'>the probability that our random variable takes a value</span> <span
  m='633150'>of a plus the probability that our random variable takes a</span>
  <span m='637780'>value of b plus the probability that our random</span> <span
  m='642470'>variable is strictly between a and b.</span> </p><p><span
  m='647390'>According to our discussion, this term is equal to 0.</span>
  </p><p><span m='654030'>And this term is equal to 0.</span> </p><p><span
  m='656230'>And so we conclude that the probability of a closed</span> <span
  m='659070'>interval is the same as the</span> <span m='660650'>probability of
  an open interval.</span> </p><p><span m='663100'>When calculating
  probabilities, it does not</span> <span m='665340'>matter whether we include
  the endpoints or not.</span> </p><p></p>
uid: af352ce7e7a0a726feae43753135c96a
type: course
layout: video
---
