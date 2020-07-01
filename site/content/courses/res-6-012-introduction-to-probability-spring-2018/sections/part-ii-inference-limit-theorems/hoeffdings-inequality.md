---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: MWcO8ZTOQQQ
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    title: Video-YouTube-Stream
    type: Video
    uid: 125041f8fa1b4da5d6a3c8b9640ea624
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MWcO8ZTOQQQ/default.jpg'
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4d5dba5861145b3e6f3167fde7e46dee
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: MWcO8ZTOQQQ
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c39c37ab62d612003e5fdd7593ca4551
  - id: MWcO8ZTOQQQ.srt
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/hoeffdings-inequality/MWcO8ZTOQQQ.srt
    title: 3play caption file
    type: null
    uid: 1f6ee0b814517abe5873239cc78e92e9
  - id: MWcO8ZTOQQQ.pdf
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/hoeffdings-inequality/MWcO8ZTOQQQ.pdf
    title: 3play pdf file
    type: null
    uid: 299e02bc1e488ad7a5bbc0092285d2c1
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 84f2aea81f5cdb428ad4eb5ced36d4b2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d0629b019ecdcd8bc9bd622335beb89e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S18-03_300k.mp4
    parent_uid: 19b16f2bf841311e89ba8d6844c62b1c
    title: Video-Internet Archive-MP4
    type: Video
    uid: b97a850106eab234039333fae6c14d8d
inline_embed_id: 70780424hoeffdingsinequality12351849
order_index: 1750
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: hoeffdings-inequality
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/hoeffdings-inequality
title: Hoeffding's Inequality
transcript: >-
  <p><span m='600'>In this segment we look into the probability</span> <span
  m='3060'>that the sum of n independent identically</span> <span
  m='5570'>distributed random variables takes</span> <span m='7760'>an
  abnormally large value.</span> </p><p><span m='10790'>We will get an upper
  bound on this quantity, which</span> <span m='14460'>is known as Hoeffding's
  inequality.</span> </p><p><span m='16800'>This is an upper bound that applies
  to a special case,</span> <span m='19800'>although the method actually
  generalizes.</span> </p><p><span m='23040'>Here is the special case that we
  will consider.</span> </p><p><span m='25800'>The random variables, the Xi's,
  are</span> <span m='28900'>equally likely to take the values minus 1 and
  plus</span> <span m='33030'>1, with equal probability.</span> </p><p><span
  m='37420'>And we're interested in the random variable,</span> <span
  m='40140'>which is the sum of the X's.</span> </p><p><span m='46300'>What do
  we know about this random variable?</span> </p><p><span m='49180'>Well, the
  expected value of each one of the Xi's is equal to 0,</span> <span
  m='54000'>because the distribution is symmetric.</span> </p><p><span
  m='56410'>And also, the distance of Xi from the mean</span> <span
  m='60340'>has always magnitude 1.</span> </p><p><span m='62410'>And for this
  reason, the variance</span> <span m='64379'>of the Xi's is equal to 1.</span>
  </p><p><span m='68130'>For this reason, the random variable Y has a mean of
  0</span> <span m='74180'>and a variance equal to n.</span> </p><p><span
  m='81050'>Now, what do we know about the random variable Y?</span>
  </p><p><span m='84630'>By the central limit theorem, Y has an approximately
  normal</span> <span m='90350'>distribution.</span> </p><p><span m='92370'>The
  distribution is centered at 0.</span> </p><p><span m='95990'>And also, the
  random variable Y over square root of n,</span> <span m='102670'>this is a
  standardized random variable.</span> </p><p><span m='105700'>So it's
  approximately normal.</span> </p><p><span m='107520'>And so the probability
  that this number is larger than or equal</span> <span m='110910'>to some a is
  approximately 1 minus the cumulative</span> <span m='117840'>of the standard
  normal.</span> </p><p><span m='120350'>So Phi here stands for the standard
  normal CDF.</span> </p><p><span m='130400'>What does this tell us?</span>
  </p><p><span m='132310'>It tells us that if we take somewhere here,</span>
  <span m='135130'>the number square root of n times a, then this
  probability</span> <span m='142860'>down here in the tail is approximately
  constant,</span> <span m='146940'>no mater what n is.</span> </p><p><span
  m='149250'>And this in particular tells us that values</span> <span
  m='152260'>of the order of square root n are fairly likely to occur.</span>
  </p><p><span m='158940'>However, what we're interested in here is not</span>
  <span m='162190'>being larger than square root n times a.</span> </p><p><span
  m='164680'>We're interested in being larger than n times a.</span>
  </p><p><span m='168040'>So we're talking about what happens further
  down</span> <span m='172970'>in the tail of the distribution.</span>
  </p><p><span m='175450'>So if we take here n times a, we're</span> <span
  m='178710'>looking at this probability down here.</span> </p><p><span
  m='181530'>And we want to ask, how small is that probability?</span>
  </p><p><span m='186210'>Well, we have Chebyshev's inequality.</span>
  </p><p><span m='188430'>And Chebyshev's inequality tells us</span> <span
  m='190775'>that the probability of Y being larger than a certain number</span>
  <span m='194950'>is less than or equal to the variance of Y divided</span>
  <span m='199850'>by the square of that number.</span> </p><p><span
  m='204510'>And in this case, since the variance is n.</span> </p><p><span
  m='207100'>This is 1 over n a squared.</span> </p><p><span m='210470'>So
  Chebyshev's inequality tells us</span> <span m='212210'>that this probability
  goes to 0, and it</span> <span m='215460'>goes to 0 at least as fast as 1/n
  goes to 0.</span> </p><p><span m='220829'>However, it turns out that this is
  extremely conservative.</span> </p><p><span m='224640'>Hoeffding's inequality,
  which we're going to establish,</span> <span m='227930'>tells us something
  much stronger.</span> </p><p><span m='230350'>It tells us that this tail
  probability down here</span> <span m='234230'>falls exponentially with
  n.</span> </p><p><span m='239110'>So this is what we want to show.</span>
  </p><p><span m='241440'>And let us get started to see how the derivation
  goes.</span> </p><p><span m='247130'>The derivation relies on a beautiful
  trick.</span> </p><p><span m='250900'>Instead of looking at this event
  here,</span> <span m='253900'>we're going to look at the following equivalent
  event.</span> </p><p><span m='260399'>Let us fix some number s.</span>
  </p><p><span m='265390'>We're going to leave the choice of s free for
  now.</span> </p><p><span m='270520'>It is only that we're going to
  assume</span> <span m='273130'>that s is a positive number.</span>
  </p><p><span m='278680'>And throughout, we're also assuming</span> <span
  m='280850'>that a is also a positive number.</span> </p><p><span
  m='286070'>Now, we look at this quantity, and the event</span> <span
  m='289300'>that this quantity is larger than or equal</span> <span
  m='292240'>to e to the sn times a.</span> </p><p><span m='297920'>Now, this
  sum is larger than or equal to na if and only</span> <span m='302460'>if this
  quantity is larger than or equal to e to the sna.</span> </p><p><span
  m='307216'>This is because a and s are both positive.</span> </p><p><span
  m='310520'>So the direction of the inequalities</span> <span m='312510'>does
  not get reversed, and also because</span> <span m='314840'>the exponential
  function is monotonic.</span> </p><p><span m='318360'>So this event is the
  same as that event.</span> </p><p><span m='323000'>So we will try to say
  something about the probability</span> <span m='326050'>of this event.</span>
  </p><p><span m='327660'>How are we going to do it?</span> </p><p><span
  m='329680'>We will use the Markov inequality,</span> <span m='331880'>where Z
  is the random variable that appears here.</span> </p><p><span m='337740'>So by
  Markov's inequality, this probability</span> <span m='341450'>is less than or
  equal to the expected value</span> <span m='345150'>of the random variable
  that we are</span> <span m='346930'>dealing with divided by this value.</span>
  </p><p><span m='362190'>Now, the exponential of a sum, we</span> <span
  m='365660'>can factor it as a product of exponentials.</span> </p><p><span
  m='380950'>And then we use the assumption that the X's are independent.</span>
  </p><p><span m='386220'>Since the X's are independent, e to the sX1</span>
  <span m='388870'>is independent from e to the sX2 and so on.</span>
  </p><p><span m='392510'>And so we have the expected value</span> <span
  m='394409'>of a product of independent random variables.</span> </p><p><span
  m='397950'>And so this is equal to the product of the expectations.</span>
  </p><p><span m='402670'>So we're going to multiply the expected value of
  e</span> <span m='406909'>to the sX1 with the expected value of e to the
  sX2</span> <span m='412230'>and so on.</span> </p><p><span m='412890'>But
  because all the Xi's are identically distributed,</span> <span m='416710'>the
  terms we get are all the same.</span> </p><p><span m='419440'>So we get this
  term to the nth power divided, again,</span> <span m='424880'>by e to the
  sna.</span> </p><p><span m='429320'>Or we can write this in more suggestive
  form, as follows.</span> </p><p><span m='434270'>It's the expected value of e
  to the sX1 divided by e</span> <span m='441720'>to the sa, all of that to the
  nth power.</span> </p><p><span m='446750'>So think of that as being some
  number rho to the nth power.</span> </p><p><span m='454330'>When is this bound
  going to be interesting?</span> </p><p><span m='457580'>It's going to be
  interesting if rho is less than 1,</span> <span m='461930'>because in that
  case, this bound falls exponentially with n.</span> </p><p><span
  m='467450'>And so this probability in particular</span> <span m='469470'>will
  fall exponentially with n.</span> </p><p><span m='475050'>The key here is that
  we have freedom to choose s.</span> </p><p><span m='478560'>For any value of
  s, we obtain an upper bound.</span> </p><p><span m='482940'>We're going to
  choose s so that we get the most informative</span> <span m='487390'>or a most
  powerful upper bound.</span> </p><p><span m='490860'>So let us continue to see
  what we can do.</span> </p><p><span m='494690'>First, let us write down what
  this expected value is.</span> </p><p><span m='499600'>Since X1 takes values
  minus 1 or plus 1 with equal probability,</span> <span m='507110'>this
  expectation is the following.</span> </p><p><span m='509380'>With probability
  1/2, X1 takes the value of 1.</span> </p><p><span m='514130'>And so this
  random variable is e to the s.</span> </p><p><span m='517250'>And with
  probability 1/2, it takes the value</span> <span m='519440'>minus one, in
  which case this random variable is</span> <span m='523159'>e to the minus
  s.</span> </p><p><span m='525070'>So this is the expectation in the
  numerator.</span> </p><p><span m='527650'>And we write again the term in the
  denominator.</span> </p><p><span m='532400'>And we have all this to the power
  n.</span> </p><p><span m='536870'>If we can choose s so that this quantity is
  less than 1,</span> <span m='540820'>we will have achieved our
  objective.</span> </p><p><span m='545450'>Can we do that?</span> </p><p><span
  m='547730'>Let's see.</span> </p><p><span m='548700'>Let's look at the
  numerator as a function of s.</span> </p><p><span m='554720'>When s is equal
  to 0, we have 1 plus 1 divided by 1/2.</span> </p><p><span m='558680'>That
  gives us 1.</span> </p><p><span m='561570'>And then as s moves away from 0,
  this function</span> <span m='565640'>will have this kind of shape.</span>
  </p><p><span m='568520'>And it is symmetric around 0, because we have an
  s</span> <span m='572873'>and a minus s here.</span> </p><p><span
  m='577110'>In particular, the derivative of this function is 0 at 0.</span>
  </p><p><span m='582260'>Let's look at the denominator term.</span>
  </p><p><span m='584990'>The denominator term is an exponential.</span>
  </p><p><span m='589490'>a is a positive number, so it's an exponential</span>
  <span m='592850'>that has a shape of this kind.</span> </p><p><span
  m='598930'>The important thing to notice is that this exponential</span> <span
  m='601740'>has a positive derivative at 0.</span> </p><p><span m='606060'>What
  does that tell us?</span> </p><p><span m='607200'>That at least in the
  vicinity of 0, this term, the denominator,</span> <span m='614100'>is going to
  be larger than the numerator term.</span> </p><p><span m='617490'>And that
  implies that in the vicinity of 0,</span> <span m='621260'>this fraction is
  going to be less than 1.</span> </p><p><span m='625350'>And we will have
  achieved our goal</span> <span m='627890'>of an exponentially decaying
  bound.</span> </p><p><span m='632890'>So the conclusion is that for small
  s,</span> <span m='641090'>we have that rho is less than 1.</span>
  </p><p><span m='645100'>Now, we would like to get an explicit value for
  rho.</span> </p><p><span m='649190'>And we will do that by fixing a specific
  value for s.</span> </p><p><span m='653300'>It turns out that if we set s to
  be equal to a, then the bound</span> <span m='659970'>that we get is going to
  be that this probability here</span> <span m='665710'>is less than or equal to
  e to the minus na squared over 2.</span> </p><p><span m='676130'>And this is
  the Hoeffding bound.</span> </p><p><span m='682130'>At this point, you may
  just pause.</span> </p><p><span m='686190'>Or if you're curious, you can
  continue with this video</span> <span m='690490'>to see the algebraic
  manipulations involved</span> <span m='693800'>in order to show that this
  expression is less than</span> <span m='696560'>or equal to that
  expression.</span> </p><p><span m='699210'>But before going there, I would
  like to make a general comment.</span> </p><p><span m='703770'>Even if the X's
  had a different distribution but with 0 mean,</span> <span m='709770'>the
  derivation up to this point would go through,</span> <span m='713640'>here you
  would have a somewhat different expression</span> <span m='716660'>for the
  expected value of e to the sX1.</span> </p><p><span m='720590'>However, it
  turns out that the expression that you get here</span> <span m='724380'>will
  always have this property that it has a 0 derivative.</span> </p><p><span
  m='729740'>This is a consequence of the assumption</span> <span
  m='731840'>that we assumed zero mean.</span> </p><p><span m='734480'>And
  because of that, we will still</span> <span m='736520'>have a picture of this
  kind.</span> </p><p><span m='738380'>And so this fraction will always be less
  than 1</span> <span m='742210'>when we choose s to be suitably small.</span>
  </p><p><span m='745810'>And so this is going to give us a result for
  more</span> <span m='749210'>general distributions.</span> </p><p><span
  m='750770'>And that more general results is known as the Chernoff
  bound.</span> </p><p><span m='757520'>However, we will not develop in this
  video</span> <span m='760290'>the Chernoff bound in its greater
  generality.</span> </p><p><span m='763850'>We will just stay with Hoeffding's
  inequality</span> <span m='766190'>that gives us the basic idea.</span>
  </p><p><span m='768590'>And what we will do next will be to derive this
  inequality.</span> </p><p><span m='774630'>So I'm carrying over what we
  figured out</span> <span m='777870'>in the previous slide-- and this is the
  quantity here</span> <span m='782150'>that we wish to bound.</span>
  </p><p><span m='786210'>We will look at the numerator term.</span>
  </p><p><span m='788570'>And we're going to use a Taylor series</span> <span
  m='791620'>for the exponential function.</span> </p><p><span
  m='795020'>Remember, the Taylor series for the exponential function</span>
  <span m='797440'>takes this form.</span> </p><p><span m='798800'>And using
  that, we have 1/2 e to be s plus e to the minus</span> <span m='804960'>s is
  equal to the following.</span> </p><p><span m='808840'>We first write the
  Taylor series for e to the s.</span> </p><p><span m='811870'>I'm just copying
  from here.</span> </p><p><span m='813620'>It's 1 plus s plus s squared
  over</span> <span m='817020'>2 factorial plus s cubed over 3 factorial.</span>
  </p><p><span m='823170'>And we continue similarly.</span> </p><p><span
  m='825730'>And then for the term e to the minus</span> <span m='828845'>s, we
  have a similar expansion, except that we put a minus s</span> <span
  m='833840'>in the place of s.</span> </p><p><span m='835510'>Now, minus s
  squared is the same as s squared, with a plus sign.</span> </p><p><span
  m='841310'>But for s cubed, when we have minus s,</span> <span m='844320'>this
  becomes minus s cube and so on.</span> </p><p><span m='848050'>And so we see
  that in this expansion here,</span> <span m='851460'>we will alternate between
  positive and negative signs.</span> </p><p><span m='855710'>This means that
  all of the odd power terms</span> <span m='859280'>will cancel each
  other.</span> </p><p><span m='861630'>But the even power terms will
  survive.</span> </p><p><span m='865460'>So what we obtain is the sum of all of
  those terms.</span> </p><p><span m='875990'>But we only have the even power
  terms.</span> </p><p><span m='879210'>So we have powers of the form 2i.</span>
  </p><p><span m='883100'>These are the even integers.</span> </p><p><span
  m='886270'>And in the denominators, we will always</span> <span
  m='889030'>have the factorial of whatever exponent we have at the top.</span>
  </p><p><span m='899100'>Now, let us get a bound on this term in the
  denominator.</span> </p><p><span m='905270'>2i factorial is 1 times 2 times 3,
  all the way up to i.</span> </p><p><span m='913490'>And then we continue-- i
  plus 1, i plus 2, all the way up to 2i.</span> </p><p><span m='922810'>And
  what we have is, first, i factorial.</span> </p><p><span m='929120'>But then
  each one of these terms is larger than or equal to 2.</span> </p><p><span
  m='934120'>And we have i such terms.</span> </p><p><span m='937100'>And this
  gives us this inequality.</span> </p><p><span m='939760'>So we're going to use
  the substitution here.</span> </p><p><span m='942170'>Because this term is in
  the denominator,</span> <span m='944630'>the direction of the inequality is
  going to be reversed.</span> </p><p><span m='948590'>And we obtain
  this.</span> </p><p><span m='965380'>Now, we can rewrite this by taking this
  term 2 to the i</span> <span m='969520'>and combining it with the other term
  in the numerator.</span> </p><p><span m='978190'>And what we have is s squared
  divided by 2--</span> <span m='982710'>all of that to the i'th power.</span>
  </p><p><span m='994810'>Now, does this expression look familiar?</span>
  </p><p><span m='998070'>It is of exactly the same form as this
  expansion.</span> </p><p><span m='1001870'>But instead of s, we now have s
  squared over 2.</span> </p><p><span m='1005990'>Therefore, this is equal to e
  to the s squared over 2.</span> </p><p><span m='1014230'>So we managed to
  bound this term.</span> </p><p><span m='1018840'>Using now this bound, we go
  back to this inequality.</span> </p><p><span m='1024319'>And we have that this
  is less than or equal to--</span> <span m='1029890'>in the numerator, we have
  e to the s squared over 2.</span> </p><p><span m='1037060'>In the denominator,
  we have e to the sa,</span> <span m='1041252'>and all that is raised to the
  n'th power.</span> </p><p><span m='1046118'>Or another way to write this is,
  e</span> <span m='1049880'>to the s squared over 2 minus sa,</span> <span
  m='1058940'>and all that to the n'th power.</span> </p><p><span
  m='1062850'>And now, if I choose s equal to a, what I obtain here</span> <span
  m='1073460'>is going to be e to the a over 2 minus a squared.</span>
  </p><p><span m='1078110'>That leaves me with e to the minus a squared over
  2.</span> </p><p><span m='1082620'>And then I take this factor of n as
  well.</span> </p><p><span m='1085590'>And the final conclusion is that this
  quantity</span> <span m='1089810'>becomes equal to this term.</span>
  </p><p><span m='1094220'>And so we have completed the derivation</span> <span
  m='1096900'>that this expression is less than or equal to this quantity</span>
  <span m='1101500'>when we choose s equal to a.</span> </p><p><span
  m='1103770'>And this is Hoeffding's inequality.</span> </p><p></p>
uid: 19b16f2bf841311e89ba8d6844c62b1c
type: courses
layout: video
---
