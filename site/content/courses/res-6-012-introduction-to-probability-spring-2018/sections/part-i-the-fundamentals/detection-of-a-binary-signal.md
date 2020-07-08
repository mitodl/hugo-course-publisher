---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 27d9Gew3llM
    parent_uid: 13af1afc342b90eac50c687b6be96687
    title: Video-YouTube-Stream
    type: Video
    uid: 43b80436de330ee32374982edafca19d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/27d9Gew3llM/default.jpg'
    parent_uid: 13af1afc342b90eac50c687b6be96687
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: feda6a05ba1bdbef6865a607bbf2d893
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 27d9Gew3llM
    parent_uid: 13af1afc342b90eac50c687b6be96687
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 903c2693d6e28b6e84ccce691b205d87
  - id: 27d9Gew3llM.srt
    parent_uid: 13af1afc342b90eac50c687b6be96687
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/detection-of-a-binary-signal/27d9Gew3llM.srt
    title: 3play caption file
    type: null
    uid: 0e91d2bd59b21c70cce0796ceeab9f22
  - id: 27d9Gew3llM.pdf
    parent_uid: 13af1afc342b90eac50c687b6be96687
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/detection-of-a-binary-signal/27d9Gew3llM.pdf
    title: 3play pdf file
    type: null
    uid: 29db6395b747f350550d760ee6c7f537
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 13af1afc342b90eac50c687b6be96687
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5e030a4a175445dbbe8ec62b6de155a9
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 13af1afc342b90eac50c687b6be96687
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1f3dbb852dc896c97d41386bfb8b67e3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L10-10_300k.mp4
    parent_uid: 13af1afc342b90eac50c687b6be96687
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8eeb18488108b1b3c021e938dc040cd7
inline_embed_id: 46066402detectionofabinarysignal611068
order_index: 996
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: detection-of-a-binary-signal
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/detection-of-a-binary-signal
title: Detection of a Binary Signal
transcript: >-
  <p><span m='3280'>We will now use the Bayes rule in an important
  application</span> <span m='7790'>that involves a discrete unknown random
  variable and a</span> <span m='10650'>continuous measurement.</span>
  </p><p><span m='12410'>Our discrete unknown random variable will be one
  that</span> <span m='16260'>takes the values plus or minus 1 with equal
  probability.</span> </p><p><span m='23900'>And the measurement will be another
  random variable, Y,</span> <span m='30230'>which is equal to the discrete
  random variable, but corrupted</span> <span m='35670'>by additive noise that
  we denote by W. So what we get to</span> <span m='40780'>observe is the sum of
  K and W.</span> </p><p><span m='45320'>This is a common situation in digital
  communications.</span> </p><p><span m='47990'>We're trying to send one bit of
  information whether K is</span> <span m='51490'>plus 1 or minus 1, but the
  observation that we're making</span> <span m='56050'>is corrupted by a
  communication channel, by some</span> <span m='59620'>noise that is present in
  the channel, and on the basis of</span> <span m='63500'>the value of Y that we
  will observe, we will try to guess</span> <span m='66810'>what was
  sent.</span> </p><p><span m='69080'>The assumption that we will make about the
  noise is that</span> <span m='71600'>it is a standard normal random
  variable.</span> </p><p><span m='75800'>So suppose that we observed a specific
  value for the random</span> <span m='79870'>variable Y. We want to make a
  guess about the random</span> <span m='83840'>variable capital K. Of course,
  there's no way to guess with</span> <span m='87360'>complete certainty.</span>
  </p><p><span m='88289'>The only thing that we can say is to determine how
  likely it</span> <span m='93000'>is that a 1 was sent as opposed to how likely
  it is</span> <span m='96500'>that a minus 1 was sent.</span> </p><p><span
  m='98780'>How do we approach such a problem?</span> </p><p><span
  m='100960'>Well, we use the version of the Bayes rule that we have</span>
  <span m='103550'>already developed, which is this formula that gives us
  the</span> <span m='106880'>conditional probabilities that we want.</span>
  </p><p><span m='109300'>And in particular, here, we're asking a question about
  the</span> <span m='112530'>conditional probability that K takes the value of
  1 given</span> <span m='118789'>that a value of y has been observed.</span>
  </p><p><span m='123070'>This is what we want to calculate.</span> </p><p><span
  m='125520'>So let us look at the various terms involved here and see</span>
  <span m='128889'>what each term is.</span> </p><p><span m='131700'>First, we
  need the prior probability</span> <span m='133590'>of K. This is
  simple.</span> </p><p><span m='135420'>The prior probabilities are 1/2 for k
  equal to minus 1 or</span> <span m='141520'>plus 1, because we said that the
  two possibilities are</span> <span m='144460'>equally likely.</span>
  </p><p><span m='145980'>Then we need the conditional density of Y given K. So
  what</span> <span m='150880'>does this assumption mean?</span> </p><p><span
  m='153440'>It means that Y is a standard normal random variable to</span>
  <span m='157770'>which we add the value of K. So if K is equal to 1,
  we're</span> <span m='163820'>taking a standard normal, and we add a value of
  plus 1.</span> </p><p><span m='169020'>So Y, given that K is equal to plus 1,
  is going to be a</span> <span m='175200'>standard normal plus 1.</span>
  </p><p><span m='177420'>What does that do?</span> </p><p><span m='178900'>If
  we take a standard normal and add a constant to it, that</span> <span
  m='181560'>changes the mean and makes the mean equal to 1, and does not</span>
  <span m='186660'>change the variance.</span> </p><p><span m='188980'>On the
  other hand, if K happens to be equal to minus</span> <span m='192510'>1, then
  the observation that we see is going to be a</span> <span m='197570'>standard
  normal plus a value of minus 1, and that changes</span> <span m='202060'>the
  mean to become minus 1, but with a variance of 1.</span> </p><p><span
  m='206640'>So if we are to plot the density of Y, that density, of</span>
  <span m='213690'>course, will depend on what the value of K was.</span>
  </p><p><span m='218350'>And if K is equal to 1, then we will obtain a normal
  that</span> <span m='224870'>has a mean of 1, so it's centered here.</span>
  </p><p><span m='229120'>But if K is equal to minus 1, then our observation
  will be a</span> <span m='236490'>normal with unit variance, but centered at
  minus 1.</span> </p><p><span m='246120'>So if we are to write this in terms of
  symbols, the</span> <span m='251060'>distribution of Y is normal with variance
  equal to 1.</span> </p><p><span m='256950'>So the PDF is given by this form, e
  to the minus 1/2 y</span> <span m='266530'>minus the mean of Y. But given the
  value of K, the mean of Y</span> <span m='271390'>is equal to k, plus or minus
  1, depending on what k is.</span> </p><p><span m='278409'>So this is the PDF
  of a normal with unit variance and mean</span> <span m='284130'>equal to
  k.</span> </p><p><span m='285800'>And it corresponds, when you set k equal to
  1, it</span> <span m='289340'>corresponds to this graph.</span> </p><p><span
  m='290990'>When you set K equal to minus 1, it</span> <span
  m='293340'>corresponds to that graph.</span> </p><p><span m='296940'>Let us
  continue with the next term in this expression.</span> </p><p><span
  m='300590'>We need the term in the denominator, which is obtained</span> <span
  m='304400'>by taking a sum over the different choices of k.</span>
  </p><p><span m='308280'>There are 2 choices, and each choice has a</span>
  <span m='310930'>probability of 1/2.</span> </p><p><span m='313090'>From the
  first choice, we have 1/2 times the density of Y</span> <span m='316430'>when
  k is equal to minus 1.</span> </p><p><span m='324450'>And when k is equal to
  minus 1, we obtain this expression.</span> </p><p><span m='330350'>And we have
  another term that corresponds to the case where</span> <span m='334000'>k is
  equal to plus one, in which case we have this</span> <span
  m='341120'>expression here.</span> </p><p><span m='344190'>Once more, this
  expression here corresponds to this</span> <span m='348159'>normal with a mean
  of minus 1.</span> </p><p><span m='350640'>This expression here corresponds to
  a normal with a</span> <span m='353640'>mean of plus 1, which is this graph
  here.</span> </p><p><span m='356830'>So at this point, we have in our hands
  expressions for</span> <span m='359830'>everything that is involved here, and
  we can just apply</span> <span m='363750'>the formula and carry out a fair
  amount of algebra.</span> </p><p><span m='370270'>There are some very nice
  simplifications that happen</span> <span m='373470'>along the way, and we end
  up with an answer that has the</span> <span m='377590'>following form.</span>
  </p><p><span m='378990'>It's 1 divided by 1 plus e to the minus 2 y.</span>
  </p><p><span m='388320'>And this gives us the probability that a 1 was
  sent.</span> </p><p><span m='392040'>Let us try to make sense of this
  expression.</span> </p><p><span m='395490'>Let's see what it looks like by
  plotting it as</span> <span m='398860'>a function of y.</span> </p><p><span
  m='403040'>So what we're plotting here is this expression.</span> </p><p><span
  m='407370'>OK, if y is very large, as y goes to plus infinity, this</span>
  <span m='412730'>term disappears, and we obtain a 1.</span> </p><p><span
  m='419080'>If, on the other hand, y is very, very negative--</span> <span
  m='422280'>so y goes to minus infinity--</span> <span m='424890'>here we get
  to e to the infinity, which is a very</span> <span m='428410'>large
  number.</span> </p><p><span m='429620'>So this ratio is going to converge to
  0.</span> </p><p><span m='433990'>So we have a graph that starts at 0.</span>
  </p><p><span m='438680'>It actually rises monotonically, and in the</span>
  <span m='442440'>limit, converges to 1.</span> </p><p><span m='445560'>If y is
  equal to 0, then this term is 1,</span> <span m='450460'>and we obtain a
  1/2.</span> </p><p><span m='454930'>Let us interpret this plot.</span>
  </p><p><span m='457730'>If y is very large, it is much more likely that y is
  coming</span> <span m='464860'>out of this distribution so that K is equal to
  1.</span> </p><p><span m='470170'>So the probability that K is equal to 1, if
  we obtain this</span> <span m='473530'>observation, is almost 1.</span>
  </p><p><span m='475940'>We have almost certainty.</span> </p><p><span
  m='477800'>If, on the other hand, y is very, very negative, then it</span>
  <span m='481040'>is much more likely that what we're seeing is coming
  from</span> <span m='484390'>this distribution so that K is equal to minus
  1.</span> </p><p><span m='488480'>And in that case, the probability that K was
  1 is</span> <span m='492370'>going to be approximately 0.</span> </p><p><span
  m='494370'>Finally, if y is 0, then we're just in the middle of the two</span>
  <span m='499790'>possibilities, and by symmetry, either choice of K</span>
  <span m='503670'>is equally likely.</span> </p><p><span m='505400'>Therefore,
  the posterior probability that K is equal to</span> <span m='508920'>1, given
  that Y was equal to 0--</span> <span m='512880'>that probability is
  1/2.</span> </p><p><span m='514820'>When Y is equal to 0, it's equally likely
  that either</span> <span m='518650'>signal was sent.</span> </p><p><span
  m='521750'>This example is a prototype of the kind of calculations that</span>
  <span m='525590'>are done in the analysis of communication systems.</span>
  </p><p><span m='528940'>This is the simplest model of communication of a
  single bit</span> <span m='532570'>in the presence of additive noise, but of
  course, there</span> <span m='536230'>can also be more complicated models in
  which we have more</span> <span m='539510'>complicated signals that are sent,
  and more complicated</span> <span m='542750'>models of the noise.</span>
  </p><p><span m='544300'>But the general principles of the analysis are</span>
  <span m='547260'>always of this kind.</span> </p><p><span m='548700'>We're
  using the Bayes rule, and we need to write down the</span> <span
  m='551710'>different terms that are involved.</span> </p><p></p>
uid: 13af1afc342b90eac50c687b6be96687
type: courses
layout: video
---
