---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: sG3_Bveu_cA
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    title: Video-YouTube-Stream
    type: Video
    uid: 215e37325ea8f3e82b347bf7e9eec567
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/sG3_Bveu_cA/default.jpg'
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b21252aa9c4d339125172dae0b138d82
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: sG3_Bveu_cA
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3dd52c5415909fa01384e8cb58b7abbf
  - id: sG3_Bveu_cA.srt
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/random-incidence-in-the-poisson-process/sG3_Bveu_cA.srt
    title: 3play caption file
    type: null
    uid: 4e92e7b03d018e6f9ac40dd43a04ed49
  - id: sG3_Bveu_cA.pdf
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/random-incidence-in-the-poisson-process/sG3_Bveu_cA.pdf
    title: 3play pdf file
    type: null
    uid: 332143a27afa79791971c948f82b032a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4a54366870799811bb494b09abe3d395
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ffe36d2259286d6342343f30cc47d350
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L23-07_300k.mp4
    parent_uid: 87972054905b75532c5dfa54c6aa2e79
    title: Video-Internet Archive-MP4
    type: Video
    uid: 35a22052c3a5c500130aab767d2b707e
inline_embed_id: 93751991randomincidenceinthepoissonprocess73654571
order_index: 2159
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: random-incidence-in-the-poisson-process
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/random-incidence-in-the-poisson-process
title: Random Incidence in the Poisson Process
transcript: >-
  <p><span m='1030'>In this segment, we discuss the so-called "random
  incidence"</span> <span m='4660'>paradox for the Poisson process.</span>
  </p><p><span m='7220'>It's a paradox because it involves</span> <span
  m='9170'>a somewhat counterintuitive phenomenon.</span> </p><p><span
  m='12200'>However, we will understand exactly what's going on,</span> <span
  m='15430'>and in the end, it will cease to be a paradox</span> <span
  m='18450'>and we will have an intuitive understanding</span> <span
  m='20700'>of what exactly is happening.</span> </p><p><span m='22650'>So
  consider a Poisson process that has been running forever,</span> <span
  m='26250'>or think of it as a Poisson process that</span> <span
  m='28500'>started a very long time back in the past.</span> </p><p><span
  m='33100'>To make things concrete, suppose that the arrival rate</span> <span
  m='37110'>is 4 arrivals per hour so that the expected interarrival time</span>
  <span m='42900'>is one fourth, in hours, or that would</span> <span
  m='47690'>be the same as 15 minutes.</span> </p><p><span m='51960'>For
  example, suppose that the bus company in your town</span> <span
  m='56690'>claims that buses arrive to your stop</span> <span
  m='60690'>according to a Poisson process with this particular rate.</span>
  </p><p><span m='65200'>But you don't really believe that your bus company
  is</span> <span m='69050'>telling the truth and you decide to
  investigate.</span> </p><p><span m='72789'>So what you do is the
  following.</span> </p><p><span m='75130'>You show up at some time at your bus
  stop</span> <span m='79130'>and wait until the next arrival comes</span> <span
  m='84370'>and also ask someone who lives near the bus</span> <span
  m='87630'>stop, what time was the last arrival?</span> </p><p><span
  m='90770'>And they tell you the last arrival</span> <span m='92690'>happened
  at that time instant.</span> </p><p><span m='95350'>And you measure this
  amount of time,</span> <span m='97960'>which is the interarrival time, record
  what it is,</span> <span m='103120'>repeat this experiment on many days, and
  calculate an average.</span> </p><p><span m='109340'>What you're likely to see
  turns out</span> <span m='111880'>to be something around 30 minutes.</span>
  </p><p><span m='116320'>At this point, you could go to the bus company</span>
  <span m='119350'>and challenge them.</span> </p><p><span m='121160'>You claim
  an arrival rate of 4 arrivals per hour, which</span> <span m='125100'>would
  translate into interarrivals of 15 minutes,</span> <span m='128310'>but every
  day I go and check the interarrival time</span> <span m='132070'>and I find
  that they are close to 30 minutes.</span> </p><p><span m='135800'>What's the
  explanation?</span> </p><p><span m='137030'>What's going on?</span>
  </p><p><span m='138210'>Is it that the belief or the claim of the bus
  company</span> <span m='141820'>is incorrect, or is there something more
  complicated?</span> </p><p><span m='146190'>So let us try to understand
  what's</span> <span m='147910'>going on by being very precise and
  careful.</span> </p><p><span m='153000'>You show up at the bus station at some
  time--</span> <span m='157360'>let's call that time t star.</span>
  </p><p><span m='161530'>You ask someone who has been at the station,</span>
  <span m='165110'>when was the last arrival time, and they tell you,</span>
  <span m='168750'>and it is some number U. You wait until the next bus,</span>
  <span m='173860'>and the next bus arrives at some future time capital</span>
  <span m='177950'>V. You are interested in the interarrival time</span> <span
  m='182730'>that you're observing, which is the difference</span> <span
  m='184910'>between these two random variables V minus U.</span> </p><p><span
  m='189290'>Now this difference-- let us split it into two pieces.</span>
  </p><p><span m='192890'>There's one piece from t star until V,</span> <span
  m='196336'>which is V minus t star.</span> </p><p><span m='200270'>And there's
  another piece, which is the first interval,</span> <span m='203610'>and this
  is t star minus U. Now t star, the time at which you</span> <span
  m='211930'>arrive, is just a constant.</span> </p><p><span m='214690'>Suppose
  that you arrive at the bus station at exactly 12 noon.</span> </p><p><span
  m='218600'>There's nothing random about it.</span> </p><p><span
  m='220430'>However, V and U are random variables.</span> </p><p><span
  m='223620'>What kind of random variable is this?</span> </p><p><span
  m='226460'>You show up at 12 noon and you wait until the first arrival.</span>
  </p><p><span m='232290'>Because a Poisson process starts fresh at any given
  time--</span> <span m='236920'>so after 12 noon it starts fresh-- this</span>
  <span m='239680'>is the time until the first arrival in a Poisson
  process</span> <span m='242940'>with rate lambda, so this is a random
  variable</span> <span m='246150'>which is exponential with parameter
  lambda.</span> </p><p><span m='250750'>Now let us understand what this random
  variable is.</span> </p><p><span m='256930'>One way of thinking about it is to
  think</span> <span m='259899'>of the Poisson process running backwards in
  time,</span> <span m='263720'>so you live time backwards.</span> </p><p><span
  m='265420'>You show up at 12 noon, and then time runs backwards,</span> <span
  m='269910'>and you wait until you see the first arrival coming</span> <span
  m='274600'>in this backwards universe.</span> </p><p><span m='278650'>So we're
  dealing here with the time</span> <span m='281250'>until an arrival in a
  Poisson process</span> <span m='284240'>that runs backwards in time.</span>
  </p><p><span m='286840'>What kind of process is a backwards Poisson
  process?</span> </p><p><span m='292960'>If you take a Poisson process in
  reverse time,</span> <span m='296260'>the independence assumption is not
  affected.</span> </p><p><span m='299590'>Disjoint time intervals are
  independent.</span> </p><p><span m='302380'>Even if you reverse time,
  disjoints time intervals</span> <span m='305080'>still remain
  independent.</span> </p><p><span m='307320'>Any given time interval of small
  length delta</span> <span m='311130'>will have certain probabilities of an
  arrival</span> <span m='315070'>or of two arrivals, and these will be the
  same</span> <span m='318280'>whether time goes forward or time goes
  backward.</span> </p><p><span m='322120'>So the conclusion from this
  discussion</span> <span m='324400'>is that the backwards running Poisson
  process</span> <span m='326940'>is also a Poisson process, and so this
  time</span> <span m='331020'>until the first arrival in the backwards
  process</span> <span m='334500'>is just like the time until the first arrival
  in a Poisson</span> <span m='338030'>process.</span> </p><p><span
  m='338830'>So this also is an exponential random variable</span> <span
  m='342870'>with parameter lambda.</span> </p><p><span m='346510'>Even more
  than that, these two random variables</span> <span m='351050'>are independent
  of each other.</span> </p><p><span m='353200'>Why are they independent?</span>
  </p><p><span m='355180'>The length of this time interval has</span> <span
  m='358220'>to do with the history of the Poisson process</span> <span
  m='360830'>after time t star.</span> </p><p><span m='362990'>The length of
  this time interval has</span> <span m='364790'>to do with the history of the
  Poisson process</span> <span m='367200'>before time t star, but in the Poisson
  process because</span> <span m='370810'>of the independence property, the past
  and the future</span> <span m='374800'>are independent, and therefore, this
  random variable</span> <span m='377640'>is independent from that random
  variable.</span> </p><p><span m='381580'>In any case, the expected value of
  the interarrival interval</span> <span m='387120'>that you see, the expected
  value of this random variable,</span> <span m='390300'>is going to be the
  expected value of one exponential, which</span> <span m='394510'>is 1 over
  lambda, plus the expected</span> <span m='397240'>value of another
  exponential, which is 1 over lambda,</span> <span m='400630'>and we get a
  result of 2 over lambda.</span> </p><p><span m='406220'>And that's why when
  you actually carried out the experiment,</span> <span m='410630'>you saw
  interarrival intervals that</span> <span m='413850'>had a length of 30 minutes
  as opposed to the 15 minutes</span> <span m='418390'>that you were expecting
  in the first place.</span> </p><p><span m='421890'>Now how can this be?</span>
  </p><p><span m='424420'>Since the interarrival times in a Poisson
  process</span> <span m='428280'>have expected value 1 over lambda,</span>
  <span m='431410'>how can it be that the expected length</span> <span
  m='434160'>of the interarrival times that you see</span> <span m='436730'>have
  an expected value of 2 over lambda?</span> </p><p><span m='440560'>Well, the
  resolution of this paradox has to do [with]</span> <span m='443360'>what
  exactly we mean when we use the words an interarrival time.</span>
  </p><p><span m='449840'>There's one interpretation which is the first
  interarrival time,</span> <span m='454520'>the second one, the hundredth
  interarrival time--</span> <span m='458060'>each one of these actually has an
  expected</span> <span m='461280'>value of 1 over lambda.</span> </p><p><span
  m='465100'>But this is a different kind of interarrival time.</span>
  </p><p><span m='467980'>It's not the first or the second or</span> <span
  m='470720'>some specific k-th interarrival time.</span> </p><p><span
  m='474190'>It's the interarrival time that you selected to watch.</span>
  </p><p><span m='480570'>When you show up at a certain time, like 12
  noon,</span> <span m='484780'>you're more likely to fall inside a large
  interarrival</span> <span m='489310'>interval rather than a smaller
  interarrival interval.</span> </p><p><span m='493740'>So just the fact that
  you're showing up</span> <span m='496420'>at a certain time that's
  uncoordinated</span> <span m='498640'>with the rest of the process
  makes</span> <span m='500630'>you more likely to be biased towards
  longer</span> <span m='504500'>rather than shorter intervals.</span>
  </p><p><span m='506740'>And this bias is what causes this factor of 2.</span>
  </p><p><span m='514030'>So it's an issue really about how you sample</span>
  <span m='517308'>or how you choose the interarrival time</span> <span
  m='520250'>that you're going to watch, and this particular sampling</span>
  <span m='523419'>method has a bias towards longer intervals.</span>
  </p><p><span m='526990'>As we will see, this is not something</span> <span
  m='529420'>that's specific to the Poisson process.</span> </p><p><span
  m='532330'>In general, in many occasions there</span> <span m='534500'>are
  different ways of sampling which give you</span> <span m='537760'>different
  answers, and we will go through a number of examples</span> <span
  m='541520'>that will give you some intuition about the source</span> <span
  m='544280'>of the discrepancy between these two answers.</span> </p><p></p>
uid: 87972054905b75532c5dfa54c6aa2e79
type: courses
layout: video
---
