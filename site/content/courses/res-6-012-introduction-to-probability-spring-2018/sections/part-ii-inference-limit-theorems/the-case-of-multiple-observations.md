---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: FT0ptFu6dVA
    parent_uid: 2d1052097ac349511459acc191b61fcb
    title: Video-YouTube-Stream
    type: Video
    uid: 3b3aaee471fa568f27323f084ab0dcc1
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/FT0ptFu6dVA/default.jpg'
    parent_uid: 2d1052097ac349511459acc191b61fcb
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1034f01d90df17cd9fb3a5624851bd67
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: FT0ptFu6dVA
    parent_uid: 2d1052097ac349511459acc191b61fcb
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 986453ebe36fe21f5aa4720b5a2d6b0f
  - id: FT0ptFu6dVA.srt
    parent_uid: 2d1052097ac349511459acc191b61fcb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-case-of-multiple-observations/FT0ptFu6dVA.srt
    title: 3play caption file
    type: null
    uid: 82d1f325330a89ac4f7c23101b927b94
  - id: FT0ptFu6dVA.pdf
    parent_uid: 2d1052097ac349511459acc191b61fcb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-case-of-multiple-observations/FT0ptFu6dVA.pdf
    title: 3play pdf file
    type: null
    uid: a893cd5f885e496782733bddaf2af750
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2d1052097ac349511459acc191b61fcb
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5a74b7fa02426bf24259243c6db3bc9e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2d1052097ac349511459acc191b61fcb
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b7826749c4e93ecb447f491b8304d48c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L15-04_300k.mp4
    parent_uid: 2d1052097ac349511459acc191b61fcb
    title: Video-Internet Archive-MP4
    type: Video
    uid: 10ed99cc7152415875f903db541f1dbd
inline_embed_id: 11982320thecaseofmultipleobservations13565427
order_index: 1462
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: the-case-of-multiple-observations
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/the-case-of-multiple-observations
title: The Case of Multiple Observations
transcript: >-
  <p><span m='700'>We are now ready to move on to a model which</span> <span
  m='3880'>is quite interesting and quite realistic.</span> </p><p><span
  m='7240'>This is a model in which we have an unknown parameter modeled</span>
  <span m='11900'>as a random variable that we try to estimate.</span>
  </p><p><span m='14970'>This is the random variable, Theta.</span> </p><p><span
  m='17080'>And we have multiple observations</span> <span m='18880'>of that
  random variable.</span> </p><p><span m='20540'>Each one of those observations
  is</span> <span m='22380'>equal to the unknown random variable,</span> <span
  m='24720'>plus some additive noise.</span> </p><p><span m='27490'>This is a
  model that appears quite often in practice.</span> </p><p><span m='30900'>It
  is often the case that we're trying</span> <span m='32509'>to estimate a
  certain quantity, but we can only</span> <span m='35730'>observe values of
  that quantity in the presence of noise.</span> </p><p><span m='39300'>And
  because of the noise, what we want to do</span> <span m='42130'>is to try to
  measure it to multiple times.</span> </p><p><span m='45280'>And so we have
  multiple such measurement equations.</span> </p><p><span m='48470'>And then we
  want to combine all of the observations together</span> <span m='52020'>to
  come up with a good estimate of that parameter.</span> </p><p><span
  m='56340'>The assumption that we will be making</span> <span m='58440'>are
  that Theta is a normal random variable.</span> </p><p><span m='61950'>It has a
  certain mean that we denote by x0.</span> </p><p><span m='65019'>The reason
  for this strange notation will be seen later.</span> </p><p><span
  m='68030'>And it also has a certain variance.</span> </p><p><span
  m='70800'>The noise terms are also normal random variables</span> <span
  m='74130'>with 0 mean and a certain variance.</span> </p><p><span
  m='77360'>And finally, we assume that these basic random variables</span>
  <span m='81300'>that define our model are all independent.</span> </p><p><span
  m='86240'>Based on these assumptions, now we would like to estimate
  Theta</span> <span m='89680'>on the basis of the X's.</span> </p><p><span
  m='92840'>And as usual, in the Bayesian setting,</span> <span m='96140'>what
  we want to do is to calculate the posterior</span> <span
  m='98759'>distribution of Theta, given the X's.</span> </p><p><span
  m='102360'>The Bayes rule has the usual form</span> <span m='105090'>for the
  case of continuous random variables.</span> </p><p><span m='107590'>The only
  remark that needs to be made is that in this case,</span> <span
  m='111740'>there are multiple X's, so X up here stands</span> <span
  m='115729'>for the vector of the observations</span> <span m='118265'>that we
  have obtained.</span> </p><p><span m='119920'>And similarly, little x will
  stand</span> <span m='122160'>for the vector of the values of these
  observations.</span> </p><p><span m='126260'>So we need now to start making
  some progress</span> <span m='129070'>towards calculating this term
  here.</span> </p><p><span m='131810'>What is the distribution of the vector of
  measurements</span> <span m='135080'>given theta.</span> </p><p><span
  m='136600'>Before we move to the vector case,</span> <span m='139030'>let us
  look at one of the measurements in isolation.</span> </p><p><span
  m='143570'>This is something that we have already seen.</span> </p><p><span
  m='146600'>If I tell you the value of the random variable,</span> <span
  m='150770'>Theta, which is what happens in this conditional universe</span>
  <span m='155210'>when you condition on the value of Theta,</span> <span
  m='158270'>then in that universe, the random variable, Xi,</span> <span
  m='162300'>is equal to the numerical value that you gave me</span> <span
  m='165610'>for Theta, plus Wi.</span> </p><p><span m='170329'>And because Wi
  is independent from the random variable Theta,</span> <span m='175360'>knowing
  the value of the random variable</span> <span m='177579'>Theta does not change
  the distribution of Wi.</span> </p><p><span m='180300'>It will still have this
  normal distribution.</span> </p><p><span m='182990'>So Xi is a normal of this
  kind plus a constant.</span> </p><p><span m='188580'>And so Xi is a normal
  random variable</span> <span m='192780'>with mean equal to the constant that
  we added,</span> <span m='196470'>and variance equal to the original
  variance</span> <span m='199020'>of the random variable, Wi.</span>
  </p><p><span m='201420'>And so we can now write down, the PDF, the conditional
  PDF,</span> <span m='205750'>of Xi.</span> </p><p><span m='207325'>There's
  going to be a normalizing constant.</span> </p><p><span m='210140'>And then
  the usual exponential term,</span> <span m='212700'>which is going to be xi
  minus the mean of the distribution,</span> <span m='219730'>which is
  theta.</span> </p><p><span m='222704'>And then we divide by the usual variance
  term.</span> </p><p><span m='228280'>Let us move next to this distribution
  here.</span> </p><p><span m='233730'>This is a shorthand notation for the
  joint PDF</span> <span m='238940'>of the random variables X1 up to Xn,</span>
  <span m='243480'>conditional on the random variable Theta.</span> </p><p><span
  m='247610'>So it's really a function of multiple variables.</span>
  </p><p><span m='254990'>And how do we proceed now?</span> </p><p><span
  m='257820'>Here is the crucial observation.</span> </p><p><span m='260899'>If
  I tell you the value of the random variable capital</span> <span
  m='266090'>Theta as before, then you argue as follows.</span> </p><p><span
  m='272400'>All of these random variables are independent.</span> </p><p><span
  m='275460'>So if I tell you the value of the random variable Theta,</span>
  <span m='279180'>this does not change the joint distribution of the
  Wi's.</span> </p><p><span m='283490'>The Wi's were independent when we
  started,</span> <span m='286680'>so they remain independent in the conditional
  universe.</span> </p><p><span m='298630'>And since the Wi's are
  independent</span> <span m='301110'>and Xi's are obtained from the Wi's by
  just adding a constant,</span> <span m='305560'>this means that the Xi's are
  also</span> <span m='309670'>independent in this conditional universe.</span>
  </p><p><span m='313420'>Once I tell you the value of Theta,</span> <span
  m='316080'>then because the noises are independent,</span> <span
  m='318490'>the observations are also independent.</span> </p><p><span
  m='321460'>But this means that the joint PDF factors as a product</span> <span
  m='327810'>of the individual marginal PDFs of the Xi's.</span> </p><p><span
  m='337900'>And these PDFs, we have already found.</span> </p><p><span
  m='341540'>So now, we can put everything together</span> <span m='344409'>to
  write down a formula for the posterior PDF</span> <span m='348560'>using the
  Bayes rule.</span> </p><p><span m='350400'>We have this denominator term,
  which I will write first,</span> <span m='357300'>and which term we do not
  need to evaluate.</span> </p><p><span m='360580'>Then we have the marginal PDF
  of Theta.</span> </p><p><span m='364320'>Now since Theta is normal with these
  parameters,</span> <span m='368440'>this is of the form e to the minus theta
  minus x0</span> <span m='376120'>squared over 2 sigma 0 squared.</span>
  </p><p><span m='381690'>And then we have this joint density of the X's
  conditioned</span> <span m='387500'>on Theta, which we have already found, it
  is this product here.</span> </p><p><span m='392840'>It's a product of n
  terms, one for each observation.</span> </p><p><span m='396710'>And each one
  of these terms is what we have found earlier,</span> <span m='400480'>so I'm
  just substituting this expression up here.</span> </p><p><span m='412060'>Now
  once we have obtained the observations, so the value</span> <span
  m='416390'>of the random variable capital X, that is, the value little
  x,</span> <span m='420130'>is fixed.</span> </p><p><span m='421710'>Once it is
  fixed, then the x's that appear here are constant.</span> </p><p><span
  m='427430'>So in particular, this term here is a constant.</span> </p><p><span
  m='431040'>We do not bother with it.</span> </p><p><span m='432840'>And what
  we have is a constant times an exponential in terms</span> <span
  m='439030'>that are quadratic in theta.</span> </p><p><span m='441720'>So we
  recognize this kind of expression.</span> </p><p><span m='445020'>It has to
  correspond to a normal distribution.</span> </p><p><span m='449410'>And this
  is the first conclusion of this exercise.</span> </p><p><span m='454120'>That
  is, the posterior PDF of the parameter, Theta,</span> <span m='458770'>given
  our observations, this posterior PDF is normal.</span> </p><p><span
  m='463560'>We have e to a quadratic function in theta.</span> </p><p><span
  m='467890'>And that quadratic function also involves</span> <span
  m='470080'>the specific values of the X's that we have obtained.</span>
  </p><p><span m='473659'>Let us copy what we have found and rearrange
  it.</span> </p><p><span m='477710'>Once more, we have a constant, then the
  exponential</span> <span m='482430'>of the negative of some quadratic function
  in theta.</span> </p><p><span m='486170'>And the specific quadratic
  function</span> <span m='487955'>that we calculated just before takes this
  particular form.</span> </p><p><span m='495370'>What is the mean of this
  normal distribution?</span> </p><p><span m='499250'>The mean is same as the
  peak.</span> </p><p><span m='503340'>And to find the peak, the location at
  which this PDF is</span> <span m='510180'>largest, what we do is we try to
  find</span> <span m='514940'>the place at which this quadratic function is
  smallest.</span> </p><p><span m='519190'>So what we do is to take the
  derivative with respect</span> <span m='522890'>to theta of this quadratic,
  and set it to 0.</span> </p><p><span m='530520'>This gives us a sum of
  terms.</span> </p><p><span m='534530'>The derivative of the typical
  term</span> <span m='539970'>is going to be theta minus xi, divided by sigma i
  squared.</span> </p><p><span m='554970'>And this expression must be equal to
  0</span> <span m='558340'>if theta is at the peak of the posterior
  distribution.</span> </p><p><span m='563440'>And so we now rearrange this
  equation.</span> </p><p><span m='566930'>We split and take first the term
  involving theta,</span> <span m='570700'>and gives us a contribution of this
  kind.</span> </p><p><span m='579190'>And we move the terms involving x's to
  the other side.</span> </p><p><span m='583160'>And this gives us this
  expression.</span> </p><p><span m='590830'>And finally, we take this sum
  here</span> <span m='592960'>and send it to the denominator of the other
  side.</span> </p><p><span m='596630'>And this gives us the final form of the
  solution:</span> <span m='600940'>the peak of the posterior distribution,
  which is also</span> <span m='605280'>the same as the conditional expectation
  of the posterior</span> <span m='608400'>distribution.</span> </p><p><span
  m='609240'>Whenever we have a normal distribution,</span> <span m='612670'>the
  expected value is the same as the place</span> <span m='615550'>where the
  distribution is largest.</span> </p><p><span m='621280'>Let us now conclude
  with a few comments and words about how</span> <span m='625000'>to interpret
  the result that we found.</span> </p><p><span m='628120'>First, let me
  emphasize that the same conclusions that we have</span> <span
  m='632210'>obtained for the case of a single observation</span> <span
  m='635680'>go through in this case as well.</span> </p><p><span m='640110'>The
  posterior distribution of the unknown parameter</span> <span m='643250'>is
  still a normal distribution.</span> </p><p><span m='647480'>Our state of
  knowledge about Theta</span> <span m='649860'>after we obtain the observations
  is</span> <span m='652000'>described by a normal distribution.</span>
  </p><p><span m='654450'>Because it is a normal distribution,</span> <span
  m='656190'>the location of its peak is the same as the expected value.</span>
  </p><p><span m='660690'>And for this reason, the conditional
  expectation</span> <span m='663070'>estimate and the maximum a posteriori
  probability</span> <span m='665640'>estimates coincide.</span> </p><p><span
  m='667490'>And finally, the form of the estimates that we get is</span> <span
  m='671760'>a linear function in the xi's.</span> </p><p><span m='676700'>And
  this linearity is a very convenient property to have,</span> <span
  m='680430'>because it allows further analysis</span> <span m='683180'>of these
  ways of obtaining estimates.</span> </p><p><span m='686630'>How do we
  interpret this formula?</span> </p><p><span m='690620'>What we have here is
  the following.</span> </p><p><span m='693530'>Each one of the xi's gets
  multiplied</span> <span m='695880'>by a certain coefficient, which is 1 over
  the variance.</span> </p><p><span m='699760'>And in the denominator, we have
  the sum</span> <span m='702750'>of all of those coefficients.</span>
  </p><p><span m='704870'>So what we really have here is a weighted average of
  the xi's.</span> </p><p><span m='710110'>Now keep in mind that those xi's are
  not</span> <span m='712720'>all of them of the same kind.</span> </p><p><span
  m='714520'>One term is x0, which is the prior mean,</span> <span
  m='718170'>whereas the remaining xi's are the values of the
  observations.</span> </p><p><span m='722470'>So there's something interesting
  happening here.</span> </p><p><span m='725080'>We combine the values of the
  observations</span> <span m='728350'>with the value of the prior mean.</span>
  </p><p><span m='730790'>And in some sense, the prior mean</span> <span
  m='732900'>is treated as just one more piece of information</span> <span
  m='737200'>available to us.</span> </p><p><span m='739010'>And it is treated
  in a sort of equal way</span> <span m='743100'>as the other
  observations.</span> </p><p><span m='746060'>The weight that we have in this
  weighted average</span> <span m='749980'>are that each xi gets divided by the
  corresponding variance.</span> </p><p><span m='756410'>Does this make
  sense?</span> </p><p><span m='758130'>Well, suppose that sigma i squared is
  large.</span> </p><p><span m='765290'>This means that the noise term Wi is
  very large.</span> </p><p><span m='769300'>So Xi is very noisy.</span>
  </p><p><span m='773190'>And so it's not a useful observation to have.</span>
  </p><p><span m='776940'>And in that case, it gets a small weight.</span>
  </p><p><span m='783320'>So the weights are determined by the variances</span>
  <span m='786510'>in a way that is quite sensible.</span> </p><p><span
  m='789480'>Those observations that will get the most weight</span> <span
  m='792350'>will be those observations for which the corresponding noise</span>
  <span m='795730'>variance is small.</span> </p><p><span m='798760'>So the
  solution to this estimation problem that we just</span> <span m='802280'>went
  through has many nice properties.</span> </p><p><span m='806350'>First, we
  stay within the world of normal random variables,</span> <span
  m='810960'>because even the posterior is normal.</span> </p><p><span
  m='813760'>We stay within the world of linear functions</span> <span
  m='816540'>of normal random variables, and the form</span> <span m='819590'>of
  the formula that we have, itself,</span> <span m='822670'>has an appealing
  intuitive content.</span> </p>
uid: 2d1052097ac349511459acc191b61fcb
type: courses
layout: video
---
