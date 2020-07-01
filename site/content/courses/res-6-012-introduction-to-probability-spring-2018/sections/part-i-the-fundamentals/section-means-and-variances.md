---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: BjjkSM1Dasg
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    title: Video-YouTube-Stream
    type: Video
    uid: ca02d813a1ff955d074bedea70717bdc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/BjjkSM1Dasg/default.jpg'
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 354e6d44d61db5770c8a1cfb36d7ac9d
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: BjjkSM1Dasg
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 90f1c6edfec3c7dcd7afd8c687732d76
  - id: BjjkSM1Dasg.srt
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/section-means-and-variances/BjjkSM1Dasg.srt
    title: 3play caption file
    type: null
    uid: fcbe44ba00315464f462fa21dc7f1353
  - id: BjjkSM1Dasg.pdf
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/section-means-and-variances/BjjkSM1Dasg.pdf
    title: 3play pdf file
    type: null
    uid: 1014552b6e4a44add0da59814400d753
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 862bc7ca21cdec246d23bf98794c5f9b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 917a70b9661976d3857bf9bfc26256b7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L13-09_300k.mp4
    parent_uid: 295d05f1294127ff4e0730f883bebc7d
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2cfbece683b5d1a8f6212220561c0e24
inline_embed_id: 20333435sectionmeansandvariances39155502
order_index: 1284
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: section-means-and-variances
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/section-means-and-variances
title: Section Means and Variances
transcript: >-
  <p><span m='990'>We will now go through another example to consolidate
  our</span> <span m='4200'>intuition about the content of the law of
  iterated</span> <span m='7580'>expectations and the law of the total
  variance.</span> </p><p><span m='10710'>The example is as follows.</span>
  </p><p><span m='12760'>We have a class, and that class consists of 30
  students</span> <span m='16250'>in total who are divided into
  sections--</span> <span m='19650'>the first and the second section.</span>
  </p><p><span m='22490'>Let xi be the score of students i, let's say the</span>
  <span m='26150'>final grade in the class.</span> </p><p><span m='28550'>We
  consider the following probabilistic experiment.</span> </p><p><span
  m='31900'>We pick a student at random, uniformly, so that each</span> <span
  m='35090'>student is equally likely to be picked.</span> </p><p><span
  m='37620'>And we define two random variables--</span> <span m='39720'>X is a
  numerical random variable that gives us the</span> <span m='43210'>score of
  the selected student.</span> </p><p><span m='45180'>So if student i is
  selected, the value of the random</span> <span m='48890'>variable capital X is
  xi.</span> </p><p><span m='52460'>And capital Y is defined as the random
  variable, which is</span> <span m='57350'>the section of the selected student,
  so that y takes</span> <span m='60350'>values 1 or 2.</span> </p><p><span
  m='63610'>We're given some information.</span> </p><p><span m='65120'>For the
  first section, the average of the</span> <span m='67310'>student scores is
  90.</span> </p><p><span m='69270'>For the second section, the average of
  the</span> <span m='71150'>student scores is 60.</span> </p><p><span
  m='74000'>Given that information, what is the expected value of the</span>
  <span m='78980'>student score?</span> </p><p><span m='81520'>Well, each
  student is equally likely to be picked, so has</span> <span
  m='85520'>probability 1 over 30 to be picked.</span> </p><p><span
  m='88450'>And this multiplies the score of the student, so this is the</span>
  <span m='93630'>expected value of the random variable of interest.</span>
  </p><p><span m='97560'>What is this number?</span> </p><p><span
  m='98860'>Well, we need to calculate the sum of the xi's.</span> </p><p><span
  m='101910'>The sum of the first 10 xi's is equal to 90 times 10, and</span>
  <span m='108600'>the sum of the xi's in the other section is</span> <span
  m='111690'>equal to 60 times 20.</span> </p><p><span m='116590'>And we carry
  out the calculation, and we find that</span> <span m='118910'>the answer is
  70.</span> </p><p><span m='121050'>Now let us look at conditional
  expectations.</span> </p><p><span m='125700'>If Y is equal to 1, this means
  that a student from section</span> <span m='128840'>one was picked.</span>
  </p><p><span m='130460'>And within that section, each student is equally
  likely to</span> <span m='134920'>be picked, so the outcome of this random
  variable is</span> <span m='138200'>equally likely to be any one of these
  xi's.</span> </p><p><span m='140850'>Each xi gets picked with probability of 1
  over 10.</span> </p><p><span m='144170'>And so, the expected value of this
  random variable is 90.</span> </p><p><span m='148950'>Similarly for the second
  section, the expected value of</span> <span m='152990'>the score of a randomly
  selected student, given that</span> <span m='155750'>the student belongs in
  that section, is equal to 60.</span> </p><p><span m='161810'>With this
  information available, now we can describe</span> <span m='165200'>the
  abstract conditional expectation,</span> <span m='167690'>which is a random
  variable.</span> </p><p><span m='169340'>This random variable takes the value
  of 90 if a student from</span> <span m='174410'>the first section was picked,
  and the value of 60 if a</span> <span m='177920'>student from the second
  section was picked.</span> </p><p><span m='180350'>What is the probability of
  this event that the student</span> <span m='183360'>from the first section was
  picked?</span> </p><p><span m='185310'>Given that the first section has 10 out
  of a total of 30</span> <span m='189710'>students, this probability is 1/3,
  and therefore, this</span> <span m='193840'>probability is 2/3.</span>
  </p><p><span m='196210'>Now that we have the distribution of this
  random</span> <span m='198610'>variable, we can calculate the expected value
  of this random</span> <span m='202230'>variable, which is 1/3 times 90 plus
  2/3 times 60.</span> </p><p><span m='211460'>And this number evaluates to 70,
  which of course, it's no</span> <span m='216800'>coincidence, it's the same as
  the average</span> <span m='219710'>over the entire class.</span> </p><p><span
  m='221320'>By the law of iterated expectations, we know that</span> <span
  m='223980'>this quantity should be the same as this quantity.</span>
  </p><p><span m='227490'>So the law of iterated expectations allows us
  to</span> <span m='230550'>calculate the overall average in the entire class
  by taking</span> <span m='236515'>the section averages, and weigh them
  according to the</span> <span m='241840'>sizes of the different
  sections.</span> </p><p><span m='244790'>It's a divide and conquer method, and
  it is similar to</span> <span m='247950'>what we have been doing when we use
  the total expectation</span> <span m='251470'>theorem to divide and
  conquer.</span> </p><p><span m='254210'>We continue with our example, and here
  is a summary of what</span> <span m='257570'>we found so far.</span>
  </p><p><span m='258850'>The conditional expectation is a random variable that
  takes</span> <span m='261649'>these two values with certain
  probabilities.</span> </p><p><span m='264630'>And the mean of this random
  variable is equal to 70.</span> </p><p><span m='268790'>Let us now calculate
  the variance</span> <span m='270890'>of this random variable.</span>
  </p><p><span m='272740'>This random variable, with probability 1/3, takes a
  value</span> <span m='277430'>90, which is this much away from the mean of
  this random</span> <span m='283210'>variable, which we square.</span>
  </p><p><span m='285610'>And with probability 2/3, it takes a value of 60,
  which is</span> <span m='291050'>this much away from the mean of the random
  variable.</span> </p><p><span m='294460'>We square this, as well.</span>
  </p><p><span m='296440'>And when we carry out the calculation, we find that
  this</span> <span m='299330'>number is equal to 200.</span> </p><p><span
  m='302580'>Let us now continue.</span> </p><p><span m='303850'>And suppose
  that somebody gave us this piece of information.</span> </p><p><span
  m='309630'>For the first section, this is the deviation of the i-th</span>
  <span m='313440'>student from the mean of that section.</span> </p><p><span
  m='316800'>So this is the sum of the squares of the deviations and</span>
  <span m='320380'>then we average over all the students.</span> </p><p><span
  m='323930'>We will use this data to calculate certain quantities--</span>
  <span m='328460'>for example, the variance of the scores</span> <span
  m='331080'>in the first section.</span> </p><p><span m='333040'>Now in the
  first section, with probability 1/10, we pick the</span> <span m='337409'>ith
  student that has this score.</span> </p><p><span m='339720'>And this is the
  deviation of that student from the mean of</span> <span m='343790'>that
  section.</span> </p><p><span m='345220'>So this is the same as the mean
  squared deviation from</span> <span m='352000'>the mean of the section.</span>
  </p><p><span m='355090'>And this is exactly the variance within that
  section.</span> </p><p><span m='359930'>It is the variance of the random
  variable, which is the</span> <span m='362600'>score of a random student,
  given that we are selecting a</span> <span m='367630'>student from the first
  section.</span> </p><p><span m='369970'>For the second section, the story
  similar.</span> </p><p><span m='372050'>We're given this information, and this
  tells us the variance</span> <span m='376000'>of the student scores within the
  second section.</span> </p><p><span m='380040'>So now we can describe the
  abstract conditional variance.</span> </p><p><span m='384490'>It is a random
  variable that takes this value with</span> <span m='388840'>probability equal
  to the probability of selecting</span> <span m='392500'>someone from this
  section, which is 1/3.</span> </p><p><span m='395790'>Or it takes a value of
  20, which is the variance in the</span> <span m='400860'>second
  section.</span> </p><p><span m='402360'>And the second section is selected
  with probability 2/3.</span> </p><p><span m='406940'>With this information at
  hand, now we can calculate the</span> <span m='409680'>expected value of this
  random variable, which is 1/3 times</span> <span m='413900'>10 plus 2/3 times
  20, which is 50/3.</span> </p><p><span m='423920'>At this point, we have the
  two quantities that are necessary</span> <span m='428600'>to apply the law of
  total variance.</span> </p><p><span m='431570'>According to the law of total
  variance, the variance of the</span> <span m='434750'>student scores
  throughout the entire class is equal to this</span> <span m='439690'>number,
  which is 50/3, plus this number, which is 200.</span> </p><p><span
  m='448550'>And this is the overall variance.</span> </p><p><span
  m='452290'>Now let us interpret the law of total</span> <span
  m='454350'>variance in this context.</span> </p><p><span m='456880'>The
  interpretation is as follows.</span> </p><p><span m='459290'>The variance of
  the student scores in the entire class</span> <span m='463159'>consists of two
  pieces.</span> </p><p><span m='466900'>The first piece looks at the variance
  inside each section,</span> <span m='473400'>which is 10 or 20, depending on
  which section</span> <span m='476180'>we're looking at.</span> </p><p><span
  m='477190'>And we take the average over the different sections.</span>
  </p><p><span m='480800'>So we look at the variability of the scores within a
  typical</span> <span m='485490'>section, and then we average over all the
  sections.</span> </p><p><span m='490030'>The other term looks at the means in
  the different</span> <span m='495190'>sections, and figures out how different
  are these means.</span> </p><p><span m='500880'>How much do they vary from the
  overall class average?</span> </p><p><span m='506280'>It measures the
  variability between different sections.</span> </p><p><span m='510310'>So the
  overall randomness in the test scores can be broken</span> <span
  m='514570'>down into two pieces of randomness.</span> </p><p><span
  m='518150'>One source of randomness is that the different sections</span>
  <span m='521630'>have different means.</span> </p><p><span m='523690'>The
  other source of randomness is that inside each section,</span> <span
  m='527680'>the students are different from the</span> <span m='529960'>means
  of their section.</span> </p><p><span m='532060'>And these two pieces of
  randomness together add up to</span> <span m='535490'>the total randomness of
  the student scores as measured by</span> <span m='539460'>the variance of the
  entire class.</span> </p><p></p>
uid: 295d05f1294127ff4e0730f883bebc7d
type: courses
layout: video
---
