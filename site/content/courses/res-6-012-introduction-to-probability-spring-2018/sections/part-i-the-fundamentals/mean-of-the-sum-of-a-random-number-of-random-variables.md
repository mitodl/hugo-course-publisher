---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: xdewLsXI_UQ
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    title: Video-YouTube-Stream
    type: Video
    uid: 59a9ae3eb833982130ce0916ad31e213
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xdewLsXI_UQ/default.jpg'
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 75e486c70bc00e49041534d49c859e14
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: xdewLsXI_UQ
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6fae531cfb4b48e2c811c59d3178bf67
  - id: xdewLsXI_UQ.srt
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mean-of-the-sum-of-a-random-number-of-random-variables/xdewLsXI_UQ.srt
    title: 3play caption file
    type: null
    uid: 2b73dc1c2f7fb625489ea9e0730c9fd4
  - id: xdewLsXI_UQ.pdf
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mean-of-the-sum-of-a-random-number-of-random-variables/xdewLsXI_UQ.pdf
    title: 3play pdf file
    type: null
    uid: f6c5bcd5ba1acfec63a3ebf252dc1280
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ae579774b61899c687585f8b652de82e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: be430163888acc14d5a4aa8020a26f6c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L13-10_300k.mp4
    parent_uid: 08240581399d8c6f350b4c58af9d82a7
    title: Video-Internet Archive-MP4
    type: Video
    uid: 39c910ba0aace5d8e9664825198e616d
inline_embed_id: 59745183meanofthesumofarandomnumberofrandomvariables68662973
order_index: 1293
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: mean-of-the-sum-of-a-random-number-of-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/mean-of-the-sum-of-a-random-number-of-random-variables
title: Mean of the Sum of a Random Number of Random Variables
transcript: >-
  <p><span m='810'>We now study a model that involves the sum of</span> <span
  m='4620'>independent random variables, but with a twist.</span> </p><p><span
  m='8140'>It's going to be the sum of a random number of independent</span>
  <span m='12300'>random variables, as opposed to a fixed number.</span>
  </p><p><span m='15470'>This is a model that shows up in a variety of
  applications,</span> <span m='19440'>but it will also help us fine tune our
  command of the law of</span> <span m='23580'>iterated expectations, and the
  law of total variance.</span> </p><p><span m='27280'>The story goes as
  follows--</span> <span m='28980'>you go shopping and you visit a number of
  stores, except</span> <span m='32420'>that the number of stores that you will
  visit, is itself a</span> <span m='35590'>random variable.</span> </p><p><span
  m='37330'>At each one of the stores, you spend a</span> <span
  m='39060'>certain amount of money.</span> </p><p><span m='40230'>We denote it
  by Xi.</span> </p><p><span m='42180'>And we make the assumption that the Xi's
  are drawn from a</span> <span m='45610'>certain distribution.</span>
  </p><p><span m='46650'>They're identically distributed.</span> </p><p><span
  m='48280'>And they're independent of each other.</span> </p><p><span
  m='51690'>We also make the assumption that the Xi's are independent</span>
  <span m='55110'>of capital N. This means that no matter how many stores
  you</span> <span m='59780'>visit, the Xi, the amount of money you spend in
  each one of</span> <span m='65960'>the stores that you visit, is a random
  variable that's drawn</span> <span m='69789'>from a common distribution, which
  does not change, no</span> <span m='72930'>matter what capital N is.</span>
  </p><p><span m='75960'>With these assumptions in place, let us now focus on
  the</span> <span m='80039'>total amount of money that you're spending.</span>
  </p><p><span m='84260'>This is the sum of random variables, but with the
  extra</span> <span m='87450'>twist that the index goes up to capital N, which
  is itself</span> <span m='93650'>a random variable.</span> </p><p><span
  m='96020'>How do we deal with this situation?</span> </p><p><span
  m='98310'>One approach that's always worth trying when faced with a</span>
  <span m='101670'>complicated problem is to try to condition on some</span>
  <span m='105000'>information that will make the problem easier.</span>
  </p><p><span m='107840'>In this case, we can condition on the value of capital
  N</span> <span m='111800'>taking a fixed specific value because in that case,
  we will</span> <span m='116650'>be dealing with the sum of a finite number of
  random</span> <span m='119630'>variables where that number is a fixed,
  specific number.</span> </p><p><span m='124350'>And this is a situation we
  have encountered before and</span> <span m='127100'>know how to deal with
  it.</span> </p><p><span m='129009'>So let us get started.</span> </p><p><span
  m='130720'>Let us calculate the expected value of Y, if we condition on</span>
  <span m='134330'>the number of stores.</span> </p><p><span m='135670'>Let's
  say, for example, someone tells us that we</span> <span m='137850'>visited
  five stores.</span> </p><p><span m='140000'>Then, the expected value of Y is
  going to be the expected</span> <span m='144260'>value of the sum of the
  amount of money you spent in each one</span> <span m='149490'>of those five
  stores.</span> </p><p><span m='151230'>In our instance, it's that random
  variable, capital N.</span> </p><p><span m='154890'>But since I told you that
  capital N takes a specific</span> <span m='158690'>numerical value, this means
  that this instance of capital</span> <span m='162930'>N, in the index of the
  summation, can be</span> <span m='167000'>replaced by little n.</span>
  </p><p><span m='169930'>If I tell you that capital N is equal to little n,
  then</span> <span m='174620'>this number here, capital N, becomes the same as
  little n.</span> </p><p><span m='179780'>Here we use now the assumption that
  capital N is independent</span> <span m='184350'>from the Xi's.</span>
  </p><p><span m='186010'>Here we have the sum of a fixed</span> <span
  m='187580'>number of random variables.</span> </p><p><span m='189190'>All of
  them are independent of capital N.</span> </p><p><span m='192080'>If I give
  you some information on capital N, this does not</span> <span
  m='195330'>change the distribution of the Xi's, so the conditioning
  does</span> <span m='199490'>not affect the answer.</span> </p><p><span
  m='201760'>The conditional expectation is going to be the same as the</span>
  <span m='205310'>unconditional expectation.</span> </p><p><span m='207980'>And
  now we have the expected value of a</span> <span m='209970'>sum of random
  variables.</span> </p><p><span m='211910'>Each one of them has a common
  expectation that's denoted</span> <span m='216160'>with this notation.</span>
  </p><p><span m='217740'>This is the common expected value of all the Xi's,
  and</span> <span m='221130'>we're adding n of them, so we obtain n times
  this</span> <span m='225280'>expectation.</span> </p><p><span m='228490'>Now
  let us apply the total expectation theorem.</span> </p><p><span m='232740'>We
  take the familiar form of the total expectation theorem,</span> <span
  m='236720'>and in here, ' we can plug in the expression that we have</span>
  <span m='241410'>just found, which is n times expected value of X. Now
  the</span> <span m='247960'>expected value of X is just a number.</span>
  </p><p><span m='250770'>And then we have this summation here, which we</span>
  <span m='253520'>recognize to be just the definition of the expected</span>
  <span m='256680'>value of N.</span> </p><p><span m='258800'>And so we come to
  the conclusion that the expected</span> <span m='262190'>amount of money that
  you will be spending is equal to the</span> <span m='265590'>following
  product--</span> <span m='267340'>the expected number of stores that you visit
  times the</span> <span m='270550'>expected amount of money that you will
  be</span> <span m='272790'>spending in each store.</span> </p><p><span
  m='274760'>This is a quite plausible answer.</span> </p><p><span m='277690'>It
  makes sense.</span> </p><p><span m='279440'>On the average, the amount of
  money you spend is equal to</span> <span m='282730'>the average number of
  stores times the average amount of</span> <span m='286010'>money in each
  store.</span> </p><p><span m='288190'>So it is intuitively what you might
  expect.</span> </p><p><span m='290930'>On the other hand, we know that
  reasoning "on the</span> <span m='293970'>average" does not always give us the
  right answers.</span> </p><p><span m='297360'>So it's important to corroborate
  this particular</span> <span m='300150'>formula by working out a mathematical
  derivation.</span> </p><p><span m='304110'>Now let us carry out a second
  mathematical derivation using</span> <span m='308100'>the law of iterated
  expectations.</span> </p><p><span m='311580'>To use the law of iterated
  expectations, we need to put</span> <span m='314690'>our hands on this random
  variable--</span> <span m='317040'>the abstract conditional
  expectation.</span> </p><p><span m='320470'>What is this object?</span>
  </p><p><span m='322260'>It's a random variable that takes this value
  whenever</span> <span m='325680'>capital N is equal to little n.</span>
  </p><p><span m='328300'>So it's an object that takes this value whenever
  capital N</span> <span m='332670'>is equal to little n.</span> </p><p><span
  m='334790'>But that object is the same as this random variable because</span>
  <span m='340409'>this is the random variable that takes the value here
  when</span> <span m='345530'>capital N is equal to little n.</span>
  </p><p><span m='348470'>Therefore, the abstract conditional expectation
  takes</span> <span m='352280'>this particular form here, which we can
  substitute inside</span> <span m='357900'>this expectation here.</span>
  </p><p><span m='361480'>And now notice that the expected value of X is
  a</span> <span m='365310'>constant, so it can be pulled outside this
  expectation.</span> </p><p><span m='368190'>And we're left with a product of
  the expected value of N</span> <span m='371710'>times the expected value of X.
  So this completes the</span> <span m='377160'>derivation of the expected value
  of the sum of a random</span> <span m='381980'>number of random
  variables.</span> </p><p></p>
uid: 08240581399d8c6f350b4c58af9d82a7
type: course
layout: video
---
