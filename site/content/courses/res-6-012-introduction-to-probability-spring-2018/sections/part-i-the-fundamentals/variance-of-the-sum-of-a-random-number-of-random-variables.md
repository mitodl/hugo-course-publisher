---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: SgM16HNeC3o
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    title: Video-YouTube-Stream
    type: Video
    uid: 631de044a0625be23d929d55ded4a440
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/SgM16HNeC3o/default.jpg'
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6165e5c4a3b887b70a48a918013b8762
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: SgM16HNeC3o
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4629ba0d0eb44d7b372cc3a7bd5ffa33
  - id: SgM16HNeC3o.srt
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/variance-of-the-sum-of-a-random-number-of-random-variables/SgM16HNeC3o.srt
    title: 3play caption file
    type: null
    uid: 240eca08c224e964972cb137ef98d277
  - id: SgM16HNeC3o.pdf
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/variance-of-the-sum-of-a-random-number-of-random-variables/SgM16HNeC3o.pdf
    title: 3play pdf file
    type: null
    uid: a03239f00d4683ad34f955c5feda871f
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bca20413cb505c5ab9d68e0340927f18
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 09a05f77c6e8e3f27fa587c094144f38
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L13-11_300k.mp4
    parent_uid: d68b7d1ac9549bddd358bcc09c8946ad
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5d07532618ce86517605e81503250d71
inline_embed_id: 82754477varianceofthesumofarandomnumberofrandomvariables48150469
order_index: 1302
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: variance-of-the-sum-of-a-random-number-of-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/variance-of-the-sum-of-a-random-number-of-random-variables
title: Variance of the Sum of a Random Number of Random Variables
transcript: >-
  <p><span m='1120'>We now continue the study of the sum of a random number
  of</span> <span m='5080'>independent random variables.</span> </p><p><span
  m='7310'>We already figured out what is the expected value of this</span>
  <span m='10640'>sum, and we found a fairly simple answer.</span> </p><p><span
  m='13820'>When it comes to the variance, however, it's pretty hard to</span>
  <span m='17480'>guess what the answer will be, and it turns out that
  the</span> <span m='20570'>answer is not as simple.</span> </p><p><span
  m='22700'>So this is what we will try to calculate now.</span> </p><p><span
  m='25830'>The way to proceed will be to use the law of total variance,</span>
  <span m='30560'>which effectively breaks down the problem by conditioning
  on</span> <span m='34350'>the value of the random variable capital</span>
  <span m='36510'>N. So let us start.</span> </p><p><span m='40520'>We have
  already figured out that if I tell you the value</span> <span m='44540'>of
  capital N, then the expected value of the random</span> <span
  m='48210'>variable Y is just this number, capital N, the number</span> <span
  m='51550'>of stores you are visiting, times how much you are</span> <span
  m='54430'>spending in each one of the stores.</span> </p><p><span
  m='58110'>Using this information, we can now calculate this term, the</span>
  <span m='62280'>variance of the conditional expectation.</span> </p><p><span
  m='65680'>What is it?</span> </p><p><span m='67130'>It's the variance of
  capital N times the expected value of X.</span> </p><p><span m='73045'>Now,
  the expected value of X is a constant, and when we</span> <span
  m='76720'>multiply a random variable with a constant, what that</span> <span
  m='79700'>does to the variance is it multiplies the variance with</span> <span
  m='84200'>the square of that constant.</span> </p><p><span m='90640'>And this
  gives us this term in the law of total variance.</span> </p><p><span
  m='94789'>Let us now work towards the second term.</span> </p><p><span
  m='99820'>If I tell you the number of stores, then the random</span> <span
  m='103680'>variable Y is just a sum of a given</span> <span m='108000'>number
  of random variables.</span> </p><p><span m='110950'>And as we discussed
  before, the conditioning that we have</span> <span m='115720'>here may be
  eliminated because these random variables are now</span> <span
  m='122170'>independent of this random variable, capital N. Their</span> <span
  m='125690'>distribution does not change based on this information, and</span>
  <span m='130440'>so we obtain the unconditional variance.</span> </p><p><span
  m='133870'>Now, the unconditional variance of a sum of n random</span> <span
  m='137340'>variables is just n times the variance of each one of them,</span>
  <span m='142570'>which we denote with this notation.</span> </p><p><span
  m='146500'>Now, let us take this equality, which is an equality</span> <span
  m='149040'>between numbers, and it's true for any particular choice of</span>
  <span m='153110'>little n, and turn it into an equality</span> <span
  m='155750'>between random variables.</span> </p><p><span m='158240'>This is
  the random variable that takes this specific value</span> <span
  m='162050'>when capital N is equal to little n.</span> </p><p><span
  m='164850'>So this is a random variable that takes this specific value</span>
  <span m='168500'>when capital N is equal to little n, but this is also
  the</span> <span m='172829'>same as this random variable, n times the variance
  of X,</span> <span m='177400'>because this random variable takes this
  particular</span> <span m='180430'>numerical value when capital N is equal to
  little n.</span> </p><p><span m='184860'>Now that we have an expression for
  the conditional variance</span> <span m='188680'>as a random variable, we can
  take the next step and</span> <span m='192210'>calculate the expected value of
  the conditional variance.</span> </p><p><span m='196640'>The expected value of
  the conditional variance is simply</span> <span m='202720'>the expected value
  of this expression that we</span> <span m='205160'>calculated up here.</span>
  </p><p><span m='210340'>And now the variance of X is a constant and can be
  pulled</span> <span m='214280'>outside the expectation, which leaves us
  with</span> <span m='217850'>this expression here.</span> </p><p><span
  m='223610'>Now that we have calculated both terms that go into the</span>
  <span m='227770'>law of total variance, we can add these two terms.</span>
  </p><p><span m='231829'>We have one contribution from here, this is this term,
  and</span> <span m='237050'>another contribution from here, which is this
  term.</span> </p><p><span m='241410'>What this expression tells us is that the
  variance of the</span> <span m='245250'>total amount that you spend, which is
  a certain measure of</span> <span m='248595'>the amount of randomness in how
  much you are spending</span> <span m='251090'>overall, this amount of
  randomness</span> <span m='253990'>is due to two causes.</span> </p><p><span
  m='256130'>One cause is the randomness that there is in how much</span> <span
  m='260690'>money you spend in any given store, and that's captured by</span>
  <span m='264850'>the variance of X. It's the variance of the
  distribution</span> <span m='269330'>of the amount of money that you spend in
  a typical store.</span> </p><p><span m='272880'>But there is another source of
  randomness, and that source of</span> <span m='276030'>randomness comes from
  the fact that the number of stores</span> <span m='279020'>itself is random,
  and this gives us this contribution to</span> <span m='283710'>the variance of
  Y.</span> </p><p><span m='285450'>By taking into account these two sources of
  randomness, we</span> <span m='289890'>can figure out the overall variance of
  the random</span> <span m='292750'>variable Y. As you can see, this is a
  formula that would</span> <span m='297120'>be hard to guess by just reasoning
  intuitively.</span> </p><p><span m='301880'>And so it's a demonstration of the
  power of the law of the</span> <span m='306190'>total variance.</span>
  </p><p></p>
uid: d68b7d1ac9549bddd358bcc09c8946ad
type: course
layout: video
---
