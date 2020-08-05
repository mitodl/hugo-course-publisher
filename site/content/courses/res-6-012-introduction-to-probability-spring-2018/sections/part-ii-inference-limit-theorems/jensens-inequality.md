---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: GDJFLfmyb20
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    title: Video-YouTube-Stream
    type: Video
    uid: b1e0d9fe1c3c9a0542533a8676d5472a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/GDJFLfmyb20/default.jpg'
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 40cd993a7d5e1d08e3c11d271e8bde65
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: GDJFLfmyb20
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7e37c62d53d12ba0148cfa821e378487
  - id: GDJFLfmyb20.srt
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/jensens-inequality/GDJFLfmyb20.srt
    title: 3play caption file
    type: null
    uid: ca9a9d581b539e2ba415d31b8d7b4758
  - id: GDJFLfmyb20.pdf
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/jensens-inequality/GDJFLfmyb20.pdf
    title: 3play pdf file
    type: null
    uid: b2f8d5b2c090f1c26d851247a47305be
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 586d419890bd259d1aab60981aea0d11
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 3463ef00fcb25f755e94020a1d505492
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S18-02_300k.mp4
    parent_uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 4b31bcb8dacb69919ca0d7987550b7f1
inline_embed_id: 24408862jensensinequality91267154
order_index: 1741
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: jensens-inequality
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/jensens-inequality
title: Jensen's Inequality
transcript: >-
  <p><span m='499'>Let X be a random variable, and let g be a function.</span>
  </p><p><span m='4490'>We know that if g is linear, then the expected
  value</span> <span m='8090'>of the function is the same as that linear
  function</span> <span m='12070'>of the expected value.</span> </p><p><span
  m='13970'>On the other hand, we know that when g is nonlinear,</span> <span
  m='17190'>in general, these two quantities will not be related.</span>
  </p><p><span m='20910'>But there is a special case in which</span> <span
  m='23340'>we can establish some relation between these two quantities</span>
  <span m='27730'>in the form of an inequality.</span> </p><p><span
  m='30020'>This is Jensen's inequality, which we're going to develop.</span>
  </p><p><span m='33440'>Jensen's inequality applies to the special case</span>
  <span m='36020'>where g is a convex function.</span> </p><p><span
  m='38800'>I'm going to define more precisely what it</span> <span
  m='41140'>means to be convex shortly.</span> </p><p><span m='43710'>But in
  terms of a picture, it's a function</span> <span m='46210'>that has a shape of
  this kind.</span> </p><p><span m='48570'>So it tends to curve upwards.</span>
  </p><p><span m='51770'>So let us look at a simple example.</span> </p><p><span
  m='54660'>Suppose that X is a random variable that</span> <span m='57660'>can
  take two values with equal probability.</span> </p><p><span m='63010'>So these
  two values have both probability 1/2.</span> </p><p><span m='68080'>And this
  is our function, g of x.</span> </p><p><span m='72050'>Since they take the two
  values with equal probability,</span> <span m='75090'>the expected value is
  going to be in the middle.</span> </p><p><span m='78190'>So this here is the
  expected value of X.</span> </p><p><span m='83260'>And in particular, this
  value here</span> <span m='85860'>is going to be g of the expected value of X.
  Now,</span> <span m='93320'>the random variable g of X will take this
  value</span> <span m='98070'>with probability 1/2, and it's going</span> <span
  m='100950'>to take that value with probability 1/2.</span> </p><p><span
  m='105930'>What is the average of g of X, the expected value of g of X?</span>
  </p><p><span m='110800'>It's going to be 1/2 of this value</span> <span
  m='113350'>plus 1/2 of this value, which you can find as follows.</span>
  </p><p><span m='117440'>If you draw a straight line, it's going to be this
  much.</span> </p><p><span m='121850'>So this quantity here is the expected
  value of g of X.</span> </p><p><span m='130320'>And we see that in this
  example, the expected value of g of X</span> <span m='134080'>is above the
  value of g evaluated</span> <span m='139100'>at the expected value of
  X.</span> </p><p><span m='141560'>So this is what Jensen's inequality
  says,</span> <span m='144560'>but for a more general distribution</span> <span
  m='146579'>for the random variable X. Let us now step back and define</span>
  <span m='153960'>more precisely what it means for a function to be
  convex.</span> </p><p><span m='164100'>The most general definition is the
  following.</span> </p><p><span m='167579'>If I take any two points, x and
  y,</span> <span m='172990'>and I take some number p between 0 and 1.</span>
  </p><p><span m='176200'>So in that case, the number px plus 1 minus py</span>
  <span m='183680'>is a weighted average of x and y--</span> <span m='187170'>so
  it's somewhere in the middle.</span> </p><p><span m='189660'>And if I look at
  the value of my function</span> <span m='193960'>at that particular point-- so
  this value here</span> <span m='198470'>corresponds to this-- this is
  less</span> <span m='202930'>than or equal to the weighted average of the
  values of g</span> <span m='208120'>of x and g of y.</span> </p><p><span
  m='210980'>So this is g of x.</span> </p><p><span m='212750'>This is g of
  y.</span> </p><p><span m='216190'>This value here is the weighted average of
  the two values.</span> </p><p><span m='224020'>So this quantity here is p
  times g of x, which is this value,</span> <span m='231780'>plus 1 minus p, g
  of y.</span> </p><p><span m='236840'>Convexity means that this value is below
  that value.</span> </p><p><span m='242670'>Or in other words, whenever I take
  two points on this curve</span> <span m='248050'>and join them by a segment,
  then the function</span> <span m='251760'>lies underneath that segment.</span>
  </p><p><span m='254450'>This is one possible definition.</span> </p><p><span
  m='257160'>Now, in terms of a picture, we see</span> <span m='259250'>that a
  convex function tends to curve upwards.</span> </p><p><span m='262540'>This
  means that the derivative or the slope of the function</span> <span
  m='266260'>keeps increasing.</span> </p><p><span m='268450'>An increasing
  slope means that the second derivative</span> <span m='272440'>of that
  function is non-negative.</span> </p><p><span m='275080'>And that could be an
  alternative definition of convexity.</span> </p><p><span m='279409'>It turns
  out that if you have a function that's</span> <span m='282330'>twice
  differentiable, these two definitions are equivalent.</span> </p><p><span
  m='287836'>On the other hand, the first definition</span> <span m='289460'>is
  a little more general, because it also</span> <span m='291270'>applies to
  functions that are not smooth.</span> </p><p><span m='293890'>So for example,
  the function absolute value of x</span> <span m='298860'>is a convex
  one.</span> </p><p><span m='300960'>But it's not differentiable at
  zero.</span> </p><p><span m='306440'>Finally, there's another way of defining
  convexity,</span> <span m='311010'>and it is the following property,</span>
  <span m='313630'>again for differentiable functions.</span> </p><p><span
  m='316170'>What it says is the following.</span> </p><p><span m='319010'>If I
  fix a certain point, c-- to use the same diagram</span> <span m='327910'>let's
  say that this is c-- this value here</span> <span m='332780'>is going to be g
  of c.</span> </p><p><span m='335630'>I look at the derivative of that function
  and take</span> <span m='340610'>this quantity, which is the derivative times
  how far I</span> <span m='345690'>am going.</span> </p><p><span
  m='346830'>This quantity here is a first-order Taylor series</span> <span
  m='350290'>approximation of my function.</span> </p><p><span m='352820'>So it
  corresponds to this black line.</span> </p><p><span m='356320'>What this
  condition says is that the function</span> <span m='360460'>lies on top of
  that tangent line to my function.</span> </p><p><span m='366596'>It is not too
  difficult to show that this condition,</span> <span m='371950'>non-negative
  second derivatives, implies this condition.</span> </p><p><span
  m='375370'>What you do is that you write down the second order Taylor</span>
  <span m='378820'>approximation of your function g.</span> </p><p><span
  m='382220'>And then because the second order term</span> <span m='384135'>is
  going to be non-negative because of that condition,</span> <span
  m='386880'>you're going to get an inequality in this form.</span> </p><p><span
  m='389770'>But in any case, this inequality is pretty intuitive.</span>
  </p><p><span m='392960'>And we could take this one just as our
  definition</span> <span m='396220'>of convexity-- that is, a function is
  convex</span> <span m='398700'>if it has the property that whenever I
  draw</span> <span m='401520'>a tangent to my curve, the function lies</span>
  <span m='404970'>on top of this linear function.</span> </p><p><span
  m='408740'>So now let's move back to probability.</span> </p><p><span
  m='413680'>Suppose that g is convex.</span> </p><p><span m='415750'>This is
  true for every x.</span> </p><p><span m='418190'>So in particular, if I have
  my random variable,</span> <span m='422820'>capital X, no matter what my
  random variable is,</span> <span m='428710'>we're going to get this kind of
  inequality, no matter what.</span> </p><p><span m='442750'>And here what I
  they left blank is c.</span> </p><p><span m='446280'>Now, c is a
  number.</span> </p><p><span m='448040'>This is true for any number.</span>
  </p><p><span m='450110'>So in particular, it's true if I use as my
  number</span> <span m='454020'>the expected value of X. So we have this
  inequality</span> <span m='466610'>that's true now in terms of random
  variables.</span> </p><p><span m='469460'>No matter what capital X happens to
  be, this will be valid.</span> </p><p><span m='474220'>And now let us take
  expectations of both sides.</span> </p><p><span m='478100'>What we obtain is
  that the expected value of g of X</span> <span m='482550'>is larger than--
  now, this is a number,</span> <span m='485300'>so the expected value of that
  number</span> <span m='487160'>is the number itself plus the expected value of
  this term.</span> </p><p><span m='495820'>This quantity is a number.</span>
  </p><p><span m='497790'>The expected value of X minus the expected value of
  X</span> <span m='502240'>is equal to 0.</span> </p><p><span m='505200'>And we
  have established this particular fact,</span> <span m='510450'>which is true
  for any convex function.</span> </p><p><span m='515280'>So this is Jensen's
  inequality.</span> </p><p><span m='518520'>Let's apply it to some
  examples.</span> </p><p><span m='521480'>Let's consider the function g,
  which</span> <span m='525890'>is the quadratic function.</span> </p><p><span
  m='528690'>Clearly, this is a convex function.</span> </p><p><span
  m='530860'>It has this kind of shape.</span> </p><p><span m='532700'>And the
  second derivative of this function is positive.</span> </p><p><span
  m='535810'>That's another way of verifying it.</span> </p><p><span
  m='538800'>Jensen's inequality is going to tell us</span> <span
  m='540980'>something about the expected value of X squared.</span>
  </p><p><span m='545620'>Now, for this expectation, we already</span> <span
  m='547770'>know that this is equal to the variance of X plus the square</span>
  <span m='552970'>of the expected value.</span> </p><p><span m='555310'>And
  since the variance is always non-negative,</span> <span m='558150'>we obtain
  this inequality.</span> </p><p><span m='563660'>This is consistent with
  Jensen's inequality.</span> </p><p><span m='566280'>Jensen's inequality tells
  us that E of g of X,</span> <span m='570720'>with g the quadratic function,
  is</span> <span m='573780'>larger than or equal to the square-- that</span>
  <span m='577270'>is, g of the expected value.</span> </p><p><span
  m='581270'>So for the case of the square function,</span> <span
  m='583480'>Jensen's inequality did not tell us anything</span> <span
  m='586440'>that we didn't know.</span> </p><p><span m='587800'>But it's nice
  to confirm that it is consistent.</span> </p><p><span m='591180'>But we could
  use Jensen's inequality</span> <span m='593620'>in another setting where the
  answer might not be as obvious.</span> </p><p><span m='597490'>For example,
  take the function X to the fourth.</span> </p><p><span m='600400'>This is also
  a convex function.</span> </p><p><span m='602680'>And Jensen's inequality is
  going to tell us</span> <span m='606070'>that the fourth power of the expected
  value is less than</span> <span m='612510'>or equal to the expected value of X
  to the fourth.</span> </p><p><span m='620390'>Another case of a convex
  function</span> <span m='623160'>is the negative logarithm.</span>
  </p><p><span m='630650'>Remember that the logarithmic function</span> <span
  m='633370'>has a shape of this kind, which curves the opposite way.</span>
  </p><p><span m='638040'>So it's called a concave function.</span> </p><p><span
  m='640300'>But if you take the negative of this function,</span> <span
  m='642910'>then you're going to get something that is convex.</span>
  </p><p><span m='647820'>So by applying Jensen's inequality</span> <span
  m='650010'>to this setting, what we obtain is</span> <span m='653400'>that g,
  which is minus log of the expected value of X,</span> <span m='662020'>is less
  than or equal to the expected value of minus log X.</span> </p><p><span
  m='672860'>And then we can remove the minus signs from both sides.</span>
  </p><p><span m='678230'>And that is going to reverse the inequality.</span>
  </p><p><span m='681370'>And we will obtain that the logarithm of the expected
  value</span> <span m='688120'>of X is larger than or equal to the expected
  value of log X.</span> </p><p><span m='698190'>So in this case for the
  logarithmic function,</span> <span m='701170'>the inequality goes in the
  opposite direction.</span> </p><p><span m='704840'>The reason is that the
  logarithmic function</span> <span m='707320'>is a concave function, not a
  convex one.</span> </p><p><span m='711800'>And by arguing similar to this
  example,</span> <span m='715560'>a concave function is the negative of a
  convex function.</span> </p><p><span m='719080'>And for concave functions,
  Jensen's inequality still</span> <span m='722200'>holds, but the inequality
  goes the opposite way.</span> </p><p><span m='726800'>Jensen's inequality
  turns out to be quite useful.</span> </p><p><span m='729650'>In many cases, we
  want to say something</span> <span m='732010'>about the expected value of g of
  X,</span> <span m='734180'>and Jensen's inequality allows us to do
  that.</span> </p><p></p>
uid: 703ccbc42ab1d7f1a4d2e80d4cfa3e1c
type: course
layout: video
---
