---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: xi_iT9Rh434
    parent_uid: 06f44b977f737c40b521e0d11f330353
    title: Video-YouTube-Stream
    type: Video
    uid: ffdc1ae9b7b1502b7e842852069273ee
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/xi_iT9Rh434/default.jpg'
    parent_uid: 06f44b977f737c40b521e0d11f330353
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9cbc58474e33bdb1f3f69bc46191db5e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: xi_iT9Rh434
    parent_uid: 06f44b977f737c40b521e0d11f330353
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3f852de3f1a76d7557dfa7ceab7263ab
  - id: xi_iT9Rh434.srt
    parent_uid: 06f44b977f737c40b521e0d11f330353
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-fresh-start-property/xi_iT9Rh434.srt
    title: 3play caption file
    type: null
    uid: 29fb1e36b1a1714fde56d8818d959c0f
  - id: xi_iT9Rh434.pdf
    parent_uid: 06f44b977f737c40b521e0d11f330353
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-fresh-start-property/xi_iT9Rh434.pdf
    title: 3play pdf file
    type: null
    uid: 5d6ba7d61c7b74f19d2bd41451d215c7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 06f44b977f737c40b521e0d11f330353
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2383a8b4069315d80205883265a1eeab
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 06f44b977f737c40b521e0d11f330353
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fbbed5326376f439106ae69c0d434f10
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L21-05_300k.mp4
    parent_uid: 06f44b977f737c40b521e0d11f330353
    title: Video-Internet Archive-MP4
    type: Video
    uid: abf19f533451cf0e48acf285157fdce0
inline_embed_id: 51675623thefreshstartproperty62651975
order_index: 1961
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: the-fresh-start-property
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/the-fresh-start-property
title: The Fresh Start Property
transcript: >-
  <p><span m='499'>In this segment we develop some consequences</span> <span
  m='2930'>of the independence assumption that we</span> <span m='4890'>have
  made on the trials that constitute a Bernoulli process.</span> </p><p><span
  m='9140'>These properties will be pretty intuitive,</span> <span m='12440'>but
  they play an important role.</span> </p><p><span m='14260'>They're helpful in
  solving problems,</span> <span m='15960'>and they're also quite helpful in
  understanding</span> <span m='18990'>the continuous time version of the
  Bernoulli process, namely</span> <span m='22010'>the Poisson process that we
  will be studying later.</span> </p><p><span m='25640'>So here's the
  story.</span> </p><p><span m='27130'>We start with a Bernoulli
  processes</span> <span m='30010'>with some parameter p.</span> </p><p><span
  m='34210'>The process starts.</span> </p><p><span m='36250'>A friend of yours
  watches the processes,</span> <span m='39480'>and they observe the results of
  the different trials,</span> <span m='42830'>let's say for five time
  steps.</span> </p><p><span m='46000'>And at this time, right after time
  five,</span> <span m='50790'>they call you into the room, and you</span> <span
  m='54400'>start watching the rest of the process.</span> </p><p><span
  m='58680'>What will you see?</span> </p><p><span m='60980'>The first random
  variable that you will see</span> <span m='63340'>is the result of whatever
  happens in this time</span> <span m='66090'>slot, which is the sixth slot of
  the original process.</span> </p><p><span m='71420'>The second random variable
  that you will see</span> <span m='74030'>is the result of the seventh random
  variable</span> <span m='77590'>in the original process, and so on.</span>
  </p><p><span m='80570'>So the process that you get to see</span> <span
  m='83570'>is the process Yi, where i ranges</span> <span m='87660'>over the
  non-negative integers.</span> </p><p><span m='90580'>What properties does this
  process have?</span> </p><p><span m='94460'>Because of the assumption that the
  different trials are</span> <span m='97090'>independent, this means that the
  first five trials</span> <span m='100020'>are independent from the trials that
  happen after time five.</span> </p><p><span m='104130'>So one property is that
  the process</span> <span m='106890'>is Yi is independent of whatever
  happens</span> <span m='114550'>in the past, which is X1 up to X5.</span>
  </p><p><span m='121200'>Second, the random variable that you see, X6, X7, and
  so on,</span> <span m='126910'>are independent Bernoulli random variables with
  parameter p.</span> </p><p><span m='130699'>So the random variables Yi
  constitute also</span> <span m='134370'>a Bernoulli process with parameter
  p.</span> </p><p><span m='140110'>So the process that you get to see,</span>
  <span m='142310'>which is the sequence of trials after time five,</span> <span
  m='147490'>is identical, probabilistically, to a Bernoulli process</span>
  <span m='152560'>with parameter p like the process Xi.</span> </p><p><span
  m='154920'>So it's as if a Bernoulli process was just</span> <span
  m='157910'>starting fresh at this particular time.</span> </p><p><span
  m='160960'>And because of this, we say that the process</span> <span
  m='164530'>has a fresh-start property after a certain time.</span>
  </p><p><span m='169510'>In this example, we used 5 as the certain time,</span>
  <span m='172850'>but instead of 5, we could have any particular integer</span>
  <span m='176850'>little n, in which case our process Y1 starts</span> <span
  m='182230'>with Xn plus 1, continues with Xn plus 2 and so on.</span>
  </p><p><span m='189060'>And here, instead of X5, we would have written
  Xn.</span> </p><p><span m='193260'>So after a deterministic time n, what you
  see</span> <span m='198570'>is the same as if we had a Bernoulli process
  that</span> <span m='201980'>was starting fresh at this particular
  time,</span> <span m='204930'>and which is also independent from
  whatever</span> <span m='207180'>happened in the past.</span> </p><p><span
  m='209890'>Let us now complicate the story a little bit.</span> </p><p><span
  m='213010'>Suppose that your friend watches the Bernoulli process,</span>
  <span m='217220'>and they keep watching it until a success is</span> <span
  m='222450'>observed for the first time.</span> </p><p><span m='224940'>Right
  at that time, they call you into the room,</span> <span m='228220'>and you
  started watching the rest of the process.</span> </p><p><span m='232880'>This
  is the length of time that we</span> <span m='234460'>have called T1, the
  number of trials until the first success.</span> </p><p><span m='238350'>So
  what is it that you will be watching?</span> </p><p><span m='241060'>The first
  random variable that you will see</span> <span m='243200'>is what happens in
  slot T1 plus 1.</span> </p><p><span m='249010'>The second random variable that
  you will see</span> <span m='251160'>is what happened in slot T1 plus 2, and
  so on.</span> </p><p><span m='258350'>And this defines, again, a
  process,</span> <span m='261589'>the sequence of the Yi's This is what</span>
  <span m='264430'>you will see starting from this particular time.</span>
  </p><p><span m='268730'>What kind of process is it?</span> </p><p><span
  m='271810'>Well, these trials happened in the past.</span> </p><p><span
  m='274360'>We know what they were.</span> </p><p><span m='276370'>But no
  matter what they were, the future trials</span> <span m='279680'>will still be
  independent of the past,</span> <span m='283350'>and each one of the trials
  will have</span> <span m='285100'>probability p of being a success.</span>
  </p><p><span m='288340'>So the properties that we have, again,</span> <span
  m='290550'>is that the trials that you see are</span> <span
  m='293870'>independent of the past, which in this case</span> <span
  m='300830'>is everything from x1 up to time xT1.</span> </p><p><span
  m='305940'>And what you see is a Bernoulli process.</span> </p><p><span
  m='310200'>We describe the situation by saying</span> <span m='312460'>that
  the process starts fresh after time T1.</span> </p><p><span m='317390'>And by
  this, again, we mean that if you</span> <span m='320950'>start watching the
  process right after T1, what you will see</span> <span m='325960'>will be a
  Bernoulli process which</span> <span m='328470'>is independent from whatever
  happened in the past.</span> </p><p><span m='333540'>Having just argued that
  the process starts</span> <span m='335840'>fresh at the time T1 of the first
  success,</span> <span m='339940'>we can now ask why whether such a property is
  also true</span> <span m='343290'>more generally.</span> </p><p><span
  m='344690'>That is, if we start watching the process at some random
  time</span> <span m='349780'>n, will the process start fresh at that
  time?</span> </p><p><span m='355200'>Let us look at some additional
  examples.</span> </p><p><span m='358050'>Suppose that capital N is the time of
  the third success.</span> </p><p><span m='362080'>So your friend watches the
  Bernoulli process,</span> <span m='365670'>and each time, they say, did the
  third success occur?</span> </p><p><span m='370360'>Not yet.</span>
  </p><p><span m='371280'>Not yet.</span> </p><p><span m='372200'>Not
  yet.</span> </p><p><span m='373560'>Not yet.</span> </p><p><span
  m='374840'>Yes, the third success just occurred.</span> </p><p><span
  m='377530'>And at that time, they call you into the room</span> <span
  m='380350'>and you start to watching what happens from that time on.</span>
  </p><p><span m='384920'>What will you be seeing?</span> </p><p><span
  m='387060'>After that time, there will be independent Bernoulli trials</span>
  <span m='391860'>that take place.</span> </p><p><span m='393340'>And these
  refer to the future of the process, looking at [it]</span> <span
  m='397360'>from this particular point in time.</span> </p><p><span
  m='399990'>And the future is independent from whatever</span> <span
  m='402750'>happened in the past.</span> </p><p><span m='404170'>So what you
  actually see is, indeed, a fresh Bernoulli</span> <span m='408720'>process
  that starts here and which</span> <span m='411040'>is independent from the
  random variables that</span> <span m='413190'>occurred in the past.</span>
  </p><p><span m='415430'>Let us look at another example.</span> </p><p><span
  m='417810'>Let capital N be the first time that three successes in a
  row</span> <span m='422310'>have been recorded.</span> </p><p><span
  m='425290'>So your friend, again, watches the process.</span> </p><p><span
  m='427890'>And they ask each time, did we see three success in a row?</span>
  </p><p><span m='432420'>Not yet.</span> </p><p><span m='433660'>Not
  yet.</span> </p><p><span m='434710'>Not yet.</span> </p><p><span
  m='435780'>Not yet.</span> </p><p><span m='436910'>Not yet.</span>
  </p><p><span m='438470'>Yes.</span> </p><p><span m='439160'>I just saw three
  successes in a row.</span> </p><p><span m='442030'>And now your friend calls
  you in,</span> <span m='444740'>and you start watching the process</span>
  <span m='446810'>from this point in time.</span> </p><p><span m='448410'>By
  the same argument as before, whatever</span> <span m='450840'>happens in the
  future is going to be Bernoulli trials that</span> <span m='454020'>are
  independent from the past, so you will, again,</span> <span m='456990'>have a
  fresh-start property starting from this time.</span> </p><p><span
  m='461440'>So in both cases, formally, what we have</span> <span m='464820'>is
  that the process that you get to observe starting after time</span> <span
  m='469470'>capital N, after the time that you're called and asked</span> <span
  m='473620'>to start watching, what you will see</span> <span m='475830'>is
  going to be a sequence of independent Bernoulli trials,</span> <span
  m='479460'>that is, a Bernoulli process.</span> </p><p><span m='481490'>And
  this sequence of future trials</span> <span m='483420'>is independent from
  whatever happened</span> <span m='486110'>in the past of the process.</span>
  </p><p><span m='488470'>What both of these examples have in common</span>
  <span m='491800'>is that the random variable N, the time at which
  you're</span> <span m='495280'>called in, is causally determined</span> <span
  m='499270'>from the history of the process.</span> </p><p><span
  m='503360'>What does that mean?</span> </p><p><span m='505050'>It means that
  somebody is watching the process,</span> <span m='508430'>and at each point in
  time, based on what they have seen so far,</span> <span m='513240'>they decide
  whether to call you in or not.</span> </p><p><span m='518510'>What would be an
  example of a non-causal time N?</span> </p><p><span m='523250'>Here it
  is.</span> </p><p><span m='524370'>N could be the time just before the first
  occurrence of 1,</span> <span m='529090'>1, 1.</span> </p><p><span
  m='530120'>So in this example here, you would be called into the room</span>
  <span m='535100'>and start watching at this time.</span> </p><p><span
  m='539750'>So your friend somehow knows that a sequence of 1,1, 1</span> <span
  m='544750'>is going to occur and calls you just before it happens.</span>
  </p><p><span m='549750'>How could that be?</span> </p><p><span
  m='550960'>Well, imagine that the Bernoulli process actually</span> <span
  m='554470'>was run yesterday.</span> </p><p><span m='556410'>It was recorded
  in a movie.</span> </p><p><span m='558090'>Your friend has seen the movie, so
  knows</span> <span m='560404'>everything that's going to happen.</span>
  </p><p><span m='561820'>And so, when the movie is replayed today,</span> <span
  m='564670'>your friend can call you in at this time and tell you,</span> <span
  m='567570'>you know, something very interesting is about happen.</span>
  </p><p><span m='570540'>Come in and start watching.</span> </p><p><span
  m='573290'>Now, what will you be watching?</span> </p><p><span m='577170'>What
  you will watch will be 1, 1, 1, with certainty.</span> </p><p><span
  m='582740'>You're certain that the first three trials that you will see</span>
  <span m='586190'>will be 1's.</span> </p><p><span m='587580'>And, well, the
  subsequent one's will be random.</span> </p><p><span m='590830'>But since you
  know that the first three trials will be 1,</span> <span m='594690'>this means
  that statistically, they're</span> <span m='596880'>not described by the
  statistics of a Bernoulli process.</span> </p><p><span m='601510'>In a
  Bernoulli process, each trial</span> <span m='603910'>has a probability of
  being 1 and the probability of being 0.</span> </p><p><span m='608220'>But
  since, in your case, you're certain to watch</span> <span m='611360'>1's in
  the beginning, this means that the random variables</span> <span
  m='615120'>that you see do not conform to the description of a
  Bernoulli</span> <span m='619060'>process.</span> </p><p><span m='620290'>So
  this is an example in which N is not causally determined.</span> </p><p><span
  m='629940'>And in this example, you do not to get</span> <span m='632540'>to
  see a Bernoulli process.</span> </p><p><span m='634790'>We do not have the
  fresh-start property.</span> </p><p><span m='639220'>What happened here is
  more generally true.</span> </p><p><span m='642720'>We do have a fresh-start
  property, but not always.</span> </p><p><span m='646830'>We have it under the
  assumption that the time at which you're</span> <span m='650210'>asked to
  start watching is determined</span> <span m='653040'>from the past history of
  the process in some causal manner.</span> </p><p><span m='657500'>This is a
  general fact that can be established rigorously.</span> </p><p><span
  m='661160'>However we will not go through a formal mathematical
  derivation.</span> </p><p><span m='665450'>The formal argument for the most
  general case</span> <span m='669160'>involves somewhat tedious symbol
  manipulations</span> <span m='672610'>that do not provide any additional
  insight.</span> </p><p><span m='675860'>However, the intuition behind this
  result</span> <span m='678440'>should be fairly clear, and we will use it
  freely</span> <span m='682150'>whenever we need it.</span> </p><p></p>
uid: 06f44b977f737c40b521e0d11f330353
type: course
layout: video
---
