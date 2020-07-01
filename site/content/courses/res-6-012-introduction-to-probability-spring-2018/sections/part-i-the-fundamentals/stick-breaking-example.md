---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: aXFbBcabaQA
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    title: Video-YouTube-Stream
    type: Video
    uid: 55a5af164451a2baf27135334025f363
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/aXFbBcabaQA/default.jpg'
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5fe0d1e54e24ed7c299cd45542470b21
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: aXFbBcabaQA
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c7968357794c261b0621e82996459308
  - id: aXFbBcabaQA.srt
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/stick-breaking-example/aXFbBcabaQA.srt
    title: 3play caption file
    type: null
    uid: 1b4cf56cc109207b2a88cd7fdf92af39
  - id: aXFbBcabaQA.pdf
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/stick-breaking-example/aXFbBcabaQA.pdf
    title: 3play pdf file
    type: null
    uid: b1872805a61a3bdcf619b2898217d5f8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 81420445a0a7b5a75cdbdd81913e7397
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b2ae09638f12771ce2679cfab5470636
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-06_300k.mp4
    parent_uid: c139b83a3c1fde74f0bcb7dc10306164
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5bc44be56714c9327ff2e6c9bdb111a9
inline_embed_id: 13158252stickbreakingexample21061765
order_index: 960
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: stick-breaking-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/stick-breaking-example
title: Stick-Breaking Example
transcript: >-
  <p><span m='1100'>We will now go through an example that brings
  together</span> <span m='3960'>all of the concepts that we have
  introduced.</span> </p><p><span m='7300'>We have a stick of length l.</span>
  </p><p><span m='13100'>And we break that stick at some random location,
  which</span> <span m='17910'>corresponds to a random variable, X.</span>
  </p><p><span m='21860'>And we assume that this random variable is uniform over
  the</span> <span m='27060'>length of the stick.</span> </p><p><span
  m='28790'>So its PDF has this particular shape.</span> </p><p><span
  m='31350'>And for the PDF to integrate to 1, the height of this PDF</span>
  <span m='34770'>must be equal to 1 over l.</span> </p><p><span m='37660'>Then
  we take the piece of the stick that we are left with,</span> <span
  m='41660'>which has length X, and we break it at a random location,</span>
  <span m='46380'>which we call Y. And we assume that this location Y is</span>
  <span m='51050'>uniformly distributed over the length of the stick that
  we</span> <span m='54830'>were left with.</span> </p><p><span m='56540'>What
  does this assumption mean?</span> </p><p><span m='58500'>It means that if the
  first break was at some particular</span> <span m='62350'>value, x, then the
  random variable Y has a conditional</span> <span m='68370'>distribution, which
  is uniform over the interval from 0 to x.</span> </p><p><span m='74350'>So the
  conditional PDF is uniform.</span> </p><p><span m='76490'>A conditional PDF,
  like any other PDF, must</span> <span m='79350'>integrate to 1.</span>
  </p><p><span m='80560'>So the height of this conditional PDF is</span> <span
  m='83430'>equal to 1 over x.</span> </p><p><span m='85930'>Are X and Y
  independent?</span> </p><p><span m='88020'>No.</span> </p><p><span
  m='88920'>One way to see it is that if you change little x, the</span> <span
  m='92780'>conditional PDF of Y would have been something different.</span>
  </p><p><span m='97110'>Whereas if we have independence, all the</span> <span
  m='99690'>conditional PDFs have to be the same when you change the</span>
  <span m='103860'>value of little x.</span> </p><p><span m='105720'>Another way
  to see it is that if I tell you that x is 0.5,</span> <span m='111810'>this
  gives you lots of information about Y. It tells</span> <span m='115310'>you
  that Y has to be less than or equal to 0.5.</span> </p><p><span m='119570'>So
  the value of the random variable X gives you plenty of</span> <span
  m='122540'>information about the other random variable.</span> </p><p><span
  m='125050'>And so we do not have independence.</span> </p><p><span
  m='127950'>Notice that in this example, instead of starting with a</span>
  <span m='130199'>full description of the random variables in terms of a
  joint</span> <span m='133300'>PDF, we use a marginal PDF and then a
  conditional PDF to</span> <span m='138430'>construct our model.</span>
  </p><p><span m='140420'>Of course, with these two pieces of information, we
  can</span> <span m='143390'>reconstruct the joint PDF using the multiplication
  rule.</span> </p><p><span m='148500'>The marginal is 1 over l.</span>
  </p><p><span m='150400'>The conditional is 1 over x.</span> </p><p><span
  m='152220'>So the joint is equal to 1 over lx.</span> </p><p><span
  m='157350'>But for which values of x and y is this the correct</span> <span
  m='160620'>expression?</span> </p><p><span m='161860'>It is correct only for
  those values that are possible.</span> </p><p><span m='165640'>So 0 has to be
  less than y, less than x, less than l.</span> </p><p><span m='174920'>This is
  the range of values that are possible in this</span> <span
  m='178079'>particular experiment.</span> </p><p><span m='179680'>And we can
  visualize those values.</span> </p><p><span m='181670'>They are those that
  correspond to this shaded triangle here.</span> </p><p><span m='185540'>x and
  y are less than or equal to l.</span> </p><p><span m='188610'>And y has to be
  less than or equal to x.</span> </p><p><span m='193050'>If you try to
  visualize the joint PDF, notice that since</span> <span m='197760'>it only
  depends on x not on y, if you fix a value of x and</span> <span m='202310'>you
  look at the slice of the joint PDF, the value of the</span> <span
  m='206600'>joint PDF is going to be a constant on that slice.</span>
  </p><p><span m='210550'>On this slice, it's going to be another constant,
  actually</span> <span m='213280'>a bigger one.</span> </p><p><span
  m='214270'>On that slice, an even bigger constant.</span> </p><p><span
  m='216870'>And actually, this constant is bigger and bigger and goes to</span>
  <span m='221030'>infinity as we approach 0.</span> </p><p><span m='224980'>Of
  course, the fact that the slice is constant is just a</span> <span
  m='229640'>reflection of the fact that the conditional PDF is</span> <span
  m='234320'>constant over the range of values that the random</span> <span
  m='237550'>variable can take.</span> </p><p><span m='239115'>Let us now
  continue with some calculations.</span> </p><p><span m='243360'>Let us find
  the marginal PDF of Y. How do we do it?</span> </p><p><span m='248120'>Since
  we have in our hands the joint PDF, we can find the</span> <span
  m='252310'>marginal by integrating the joint.</span> </p><p><span
  m='259610'>And in our case, the joint is equal to 1 over lx.</span>
  </p><p><span m='265280'>And we integrate over all x's.</span> </p><p><span
  m='268350'>Now, what is the range of the integration?</span> </p><p><span
  m='271110'>If we fix a certain value of y, the joint PDF is actually 0</span>
  <span m='277970'>in this region and in that region.</span> </p><p><span
  m='280290'>So we should only integrate over x's that correspond to</span>
  <span m='284700'>this interval.</span> </p><p><span m='286240'>What is that
  interval?</span> </p><p><span m='288330'>It's the interval that ends at
  l.</span> </p><p><span m='291430'>And because this is a line of slope 1, this
  value</span> <span m='296570'>here is also y.</span> </p><p><span
  m='298280'>So we integrate over an interval where x</span> <span
  m='301240'>ranges from y to l.</span> </p><p><span m='304010'>In fact, this is
  just the range of x's that are possible</span> <span m='308350'>for a given
  value of y.</span> </p><p><span m='310340'>x must always be larger than or
  equal to y.</span> </p><p><span m='314400'>Now, the integral of 1 over x is a
  logarithm.</span> </p><p><span m='318290'>And using this fact, we can evaluate
  this integral.</span> </p><p><span m='321260'>And it's 1 over l times the
  logarithm of l over y.</span> </p><p><span m='328870'>For what y's is this a
  correct expression?</span> </p><p><span m='333170'>Well, it makes sense only
  for those y's that are possible in</span> <span m='336970'>this
  experiment.</span> </p><p><span m='339650'>And that's the range from 0 to
  l.</span> </p><p><span m='344564'>When y is equal to l, we have the logarithm
  of 1, which is</span> <span m='348180'>equal to 0.</span> </p><p><span
  m='349120'>So the value of the PDF is 0 here.</span> </p><p><span
  m='351870'>As y decreases, this ratio</span> <span m='355480'>increases and
  goes to infinity.</span> </p><p><span m='358370'>So the log of that also blows
  up to infinity.</span> </p><p><span m='361830'>And we get a shape of this
  form, where the function that</span> <span m='366100'>we're dealing with goes
  to infinity as we approach 0.</span> </p><p><span m='370270'>Is this a problem
  having a PDF that blows up to infinity?</span> </p><p><span m='374530'>Not
  really.</span> </p><p><span m='375460'>As long as the area under this PDF is
  equal to 1, it's still</span> <span m='380480'>a legitimate PDF.</span>
  </p><p><span m='382280'>And blowing up to infinity is not an issue.</span>
  </p><p><span m='386670'>Let us now calculate the expected value of Y. One
  way</span> <span m='390530'>of doing this is by using the definition of the
  expectation.</span> </p><p><span m='394780'>It's the integral of y times the
  density of y, which is 1</span> <span m='399570'>over l times the log of l
  over y.</span> </p><p><span m='405750'>And the range of integration has to be
  those values for</span> <span m='409320'>which we have a non-zero
  density.</span> </p><p><span m='411740'>So we integrate from 0 to l, which are
  the possible values</span> <span m='415170'>of the random variable Y. This is
  an integral</span> <span m='418320'>that's pretty messy.</span> </p><p><span
  m='420330'>One can actually integrate it using integration by parts.</span>
  </p><p><span m='424050'>But the calculation is a bit tedious.</span>
  </p><p><span m='426300'>So let us look for an alternative</span> <span
  m='428490'>and more clever approach.</span> </p><p><span m='430100'>The idea
  is to divide and conquer.</span> </p><p><span m='433720'>We're going to use
  the total expectation theorem, where</span> <span m='436900'>we're going to
  condition on X. The total expectation theorem</span> <span m='441810'>tells us
  that the expected value of Y is the integral</span> <span m='446510'>over all
  possible values of the random variable X, which</span> <span m='450250'>is
  from 0 to l.</span> </p><p><span m='453220'>The density of X, which is 1 over
  l, times the conditional</span> <span m='461350'>expectation of Y given that X
  is equal to some little x.</span> </p><p><span m='467190'>And we integrate
  over all x's.</span> </p><p><span m='470940'>Why is this simpler?</span>
  </p><p><span m='472480'>When we condition on X taking a specific value, Y has
  a</span> <span m='477230'>uniform distribution between 0 and x.</span>
  </p><p><span m='480620'>And therefore, this conditional expectation is
  the</span> <span m='483430'>expectation of a uniform, which is 1/2 the</span>
  <span m='487130'>range of that uniform.</span> </p><p><span m='489010'>So we
  obtain the integral from 0 to l.</span> </p><p><span m='492240'>1 over l times
  x over 2, dx.</span> </p><p><span m='499910'>And finally, that's an integral
  that we</span> <span m='502760'>can evaluate easily.</span> </p><p><span
  m='504310'>Or we can think even in a simpler way.</span> </p><p><span
  m='508700'>This expression here is the density of x.</span> </p><p><span
  m='515780'>This is x itself.</span> </p><p><span m='517520'>So the integral of
  this times x gives us the expected value</span> <span m='521820'>of X. And
  there's only a factor of 1/2</span> <span m='524860'>that's left out
  there.</span> </p><p><span m='526160'>So we obtain 1/2 the expected value of
  X. But now, X itself</span> <span m='532920'>is uniform on an interval that
  has length l.</span> </p><p><span m='537020'>And therefore, the expected value
  of x is l over 2.</span> </p><p><span m='541030'>And so we get the final
  answer, which is 1/2 times l</span> <span m='545890'>over 2, which is l over
  four.</span> </p><p><span m='550280'>This answer makes intuitive sense.</span>
  </p><p><span m='552630'>If we break a stick once, the expected value or what
  we're</span> <span m='557040'>left with is half of what we started
  with.</span> </p><p><span m='561160'>But if we break it once more, then we
  expect it on the</span> <span m='565330'>average to be cut by a factor again
  of 1/2.</span> </p><p><span m='569750'>And so we expect to be left with a
  stick that has length</span> <span m='573300'>1/4 of what we started
  with.</span> </p><p><span m='579580'>So this example is a particularly nice
  one, because</span> <span m='583280'>we used all of the concepts that we have
  introduced--</span> <span m='586740'>marginal PDFs, joint PDFs, conditional
  PDFs, and the</span> <span m='590510'>relations between them, as well as
  expectations,</span> <span m='594780'>calculations of expectations, and
  conditional expectations,</span> <span m='598720'>as well as the total
  probability theorem.</span> </p><p></p>
uid: c139b83a3c1fde74f0bcb7dc10306164
type: courses
layout: video
---
