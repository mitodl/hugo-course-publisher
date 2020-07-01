---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: uQTFiXQR4PQ
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    title: Video-YouTube-Stream
    type: Video
    uid: f5d0f1e71267398efba795dbbf165c58
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/uQTFiXQR4PQ/default.jpg'
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 68c4c3c59c4049a91b6115aba8a68510
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: uQTFiXQR4PQ
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6c3bc8ce236a20b16a881aa8e97b2ca7
  - id: uQTFiXQR4PQ.srt
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/polling/uQTFiXQR4PQ.srt
    title: 3play caption file
    type: null
    uid: 5c34ee8c355a4b367740cc76d4e96a15
  - id: uQTFiXQR4PQ.pdf
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/polling/uQTFiXQR4PQ.pdf
    title: 3play pdf file
    type: null
    uid: 84e77c5afecb7887de7c547b3d7c6fc7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c04b08e22e91d0b57760a6a8d27de419
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 08453e108b1fe8a085976c4b5e728661
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L18-05_300k.mp4
    parent_uid: 006eecb3db122ef9e4f498209ce394c3
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0c43439d94a837716ea91b67cd546d49
inline_embed_id: 18930992polling20344910
order_index: 1714
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: polling
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/polling
title: Polling
transcript: >-
  <p><span m='920'>We will now consider a very practical application of
  the</span> <span m='4240'>weak law of large numbers, and the
  calculations</span> <span m='7060'>associated with it.</span> </p><p><span
  m='8670'>The application has to do with polling.</span> </p><p><span
  m='10970'>There's a certain referendum that's going to take place.</span>
  </p><p><span m='14200'>We're close enough to the day of the referendum so
  that</span> <span m='16940'>voters have made up their minds, and there is a
  fraction</span> <span m='20270'>p of the population that represents the voters
  that are</span> <span m='24300'>going to vote yes.</span> </p><p><span
  m='25780'>But the referendum has not yet taken place, and you want to</span>
  <span m='28920'>find out, to predict or estimate what p actually is.</span>
  </p><p><span m='34990'>What you do is that you go ahead, and you select
  at</span> <span m='39280'>random a number of people out of the
  population.</span> </p><p><span m='42750'>And for each person, you record
  their answer, whether</span> <span m='46690'>they intend to vote yes, or
  whether they</span> <span m='49810'>intend to vote no.</span> </p><p><span
  m='52120'>When we say that the people are randomly selected, what we</span>
  <span m='55630'>mean is that we choose them uniformly from the
  population.</span> </p><p><span m='60890'>And since there's a fraction p that
  will vote yes, this means</span> <span m='65110'>that this random variable
  will be 1 with probability p, and</span> <span m='69210'>therefore, the
  expected value of Xi is equal to p.</span> </p><p><span m='74860'>In addition,
  we assume that we select those people</span> <span
  m='78680'>independently.</span> </p><p><span m='81810'>Now note that if we
  select people independently, there's</span> <span m='85789'>always a chance
  that the first person polled will be the same</span> <span m='90289'>as the
  second person polled, something that we do not</span> <span m='93530'>really
  want to happen.</span> </p><p><span m='95140'>However, if we assume that the
  population is very large, or</span> <span m='99729'>even idealize the
  situation by assuming that the population</span> <span m='103360'>is infinite,
  then this is never going to happen, and</span> <span m='106360'>this will not
  be a concern.</span> </p><p><span m='109620'>So how do we proceed?</span>
  </p><p><span m='111820'>We look at the results that we got from the</span>
  <span m='114350'>people that we polled.</span> </p><p><span m='115720'>We
  count how many said yes, divide by n, and this gives us</span> <span
  m='120420'>the fraction of yeses in the sample that we have obtained.</span>
  </p><p><span m='124310'>And this is a pretty reasonable estimate for
  the</span> <span m='128380'>unknown fraction p, the fraction of yeses in
  the</span> <span m='131920'>overall population.</span> </p><p><span
  m='134770'>Now perhaps your boss has asked you to find out the</span> <span
  m='138260'>exact value of p.</span> </p><p><span m='140120'>What should your
  response be?</span> </p><p><span m='142310'>Well, there is no way to calculate
  p exactly on the</span> <span m='147490'>basis of a finite and random
  poll.</span> </p><p><span m='151170'>Therefore, there is going to be some
  error in our</span> <span m='155090'>estimation of p.</span> </p><p><span
  m='157320'>Then, perhaps your boss comes back and says, OK, then try to</span>
  <span m='162030'>give me an estimate of p which is very accurate.</span>
  </p><p><span m='165970'>I would like you to come up with an estimate which
  is</span> <span m='169030'>correct within one percentage point.</span>
  </p><p><span m='172250'>Can you do this for me?</span> </p><p><span
  m='174710'>Your answer might be, OK, let me try polling 10,000 people,</span>
  <span m='180370'>and see if I can guarantee for you such a small error.</span>
  </p><p><span m='185080'>But after you think about the situation a little more,
  you</span> <span m='188050'>realize that there is no way of guaranteeing such
  a small</span> <span m='192350'>error with certainty.</span> </p><p><span
  m='193820'>What if your unlucky, and the people that you poll happen to</span>
  <span m='197329'>be not representative of the true population?</span>
  </p><p><span m='200870'>So you come back to your boss and you say, I
  cannot</span> <span m='204070'>guarantee with certainty that the error is
  going to be</span> <span m='207460'>small, but perhaps I can guarantee for you
  that the</span> <span m='211460'>error that I get is small with high
  probability.</span> </p><p><span m='216420'>Or alternatively, I'm going to
  guarantee for you that the</span> <span m='220610'>probability that we get an
  error that's bigger than that</span> <span m='223890'>is very small.</span>
  </p><p><span m='226070'>So how small is it going to be?</span> </p><p><span
  m='228750'>Let's try to derive a bound on this probability of an error</span>
  <span m='233000'>larger than one percentage point.</span> </p><p><span
  m='235560'>Using the calculations that we carried out when we derived</span>
  <span m='239250'>the weak law of large numbers, we know that this
  probability</span> <span m='243450'>of a large error is bounded above by this
  quantity.</span> </p><p><span m='248200'>What is this quantity?</span>
  </p><p><span m='250040'>Sigma squared is the variance of the random variable
  that</span> <span m='254650'>we're sampling.</span> </p><p><span
  m='255580'>And since this is Bernoulli, this variance is p times 1</span>
  <span m='259450'>minus p, and then we divide by n, which in our case is 10
  to</span> <span m='265090'>the fourth times epsilon squared.</span>
  </p><p><span m='267960'>Epsilon is 10 to the minus 2, so here we have
  10</span> <span m='271340'>to the minus 4.</span> </p><p><span m='273570'>OK,
  but now, what is this quantity?</span> </p><p><span m='275620'>This quantity
  depends on p, and we do not know what p is.</span> </p><p><span
  m='280620'>However, if you take this expression, and plot it as a</span> <span
  m='284420'>function of p, what you obtain is a plot of this type.</span>
  </p><p><span m='291580'>And the maximum happens when p is equal to 1/2, in
  which case</span> <span m='297030'>we get a value of 1/4.</span> </p><p><span
  m='299970'>That is, the variance of the Bernoulli is, at most, 1/4.</span>
  </p><p><span m='304060'>And therefore, we obtain this bound here where
  the</span> <span m='307970'>denominator terms have disappeared because
  they're</span> <span m='310710'>equal to 1.</span> </p><p><span m='312250'>So
  you tell your boss, if I sample 10,000 people, then the</span> <span
  m='316710'>probability of an error more than the one percentage point</span>
  <span m='320590'>is going to be less than 25%.</span> </p><p><span
  m='323860'>At which point, your boss might reply and say, well, a</span> <span
  m='328600'>probability of a large error of 25% is too big.</span> </p><p><span
  m='332659'>This is unacceptable.</span> </p><p><span m='334580'>I would like
  you to have a probability of error that's</span> <span m='338850'>less than
  5%.</span> </p><p><span m='343170'>So suppose now that we want to change this,
  and make it only</span> <span m='348260'>a 5% error--</span> <span
  m='350700'>5% or less.</span> </p><p><span m='352909'>How are you going to
  proceed?</span> </p><p><span m='355240'>Well, you have this quantity here,
  this upper bound, which</span> <span m='358870'>we know to be less than or
  equal to 1/4 divided by n</span> <span m='365720'>times epsilon squared, which
  is, in our case, 10</span> <span m='368960'>to the minus 4.</span>
  </p><p><span m='370850'>We would like this quantity to be less than or equal
  to 5%,</span> <span m='377020'>which is 5/10 to the second power.</span>
  </p><p><span m='381420'>And after you solve this inequality, you find that
  this</span> <span m='385380'>is equivalent to taking n larger than or
  equal</span> <span m='390180'>to 10 to the sixth.</span> </p><p><span
  m='392790'>And then the five together with that four gives us a</span> <span
  m='396010'>denominator of 20.</span> </p><p><span m='398960'>And this number
  is equal to 50,000.</span> </p><p><span m='403860'>So at this point, you can
  go back to your boss and tell</span> <span m='407560'>them that one way of
  guaranteeing that the</span> <span m='411200'>probability of a large error is
  less than or equal to 5% is</span> <span m='415909'>to take n equal to
  50,000.</span> </p><p><span m='418850'>So 50,000 will suffice to achieve the
  desired specs.</span> </p><p><span m='425260'>Notice that the desired specs
  have two parameters.</span> </p><p><span m='428880'>One is the accuracy that
  you want, and the other is the</span> <span m='434140'>confidence with which
  the accuracy</span> <span m='437870'>is going to be achieved.</span>
  </p><p><span m='441040'>Now 50,000 is a pretty large number.</span>
  </p><p><span m='444420'>If you notice the results of polls, the way that they
  are</span> <span m='447890'>presented in newspapers, they usually tell you
  that there's</span> <span m='451690'>an accuracy of plus or minus three
  percentage points, not</span> <span m='456570'>one percentage point.</span>
  </p><p><span m='458380'>That helps things a little.</span> </p><p><span
  m='461250'>It means that you can do with a somewhat</span> <span
  m='463670'>smaller sample size.</span> </p><p><span m='466060'>And then,
  there's another effect.</span> </p><p><span m='468440'>Our calculation here
  was based on this inequality, which is</span> <span m='472790'>the Chebyshev
  inequality.</span> </p><p><span m='474390'>But the Chebyshev inequality is not
  that accurate.</span> </p><p><span m='478650'>It turns out that if we use more
  accurate estimates of</span> <span m='483120'>this probability, we will find
  that actually much smaller</span> <span m='487620'>values of n will be enough
  for our purposes.</span> </p><p></p>
uid: 006eecb3db122ef9e4f498209ce394c3
type: courses
layout: video
---
