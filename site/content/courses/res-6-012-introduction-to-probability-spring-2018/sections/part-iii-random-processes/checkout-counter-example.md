---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: VCyJGp6Enxg
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    title: Video-YouTube-Stream
    type: Video
    uid: fdf115a021f60370c8249038159e6c14
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/VCyJGp6Enxg/default.jpg'
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: cc1f6c4d7071dca60871c16269c1a57a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: VCyJGp6Enxg
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7937e5c6936b83266cd62c686b8638c4
  - id: VCyJGp6Enxg.srt
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/checkout-counter-example/VCyJGp6Enxg.srt
    title: 3play caption file
    type: null
    uid: 5c34e23d1ae501fa1cbef4f3715456da
  - id: VCyJGp6Enxg.pdf
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/checkout-counter-example/VCyJGp6Enxg.pdf
    title: 3play pdf file
    type: null
    uid: 8aa6b8c7b54e1f15a7ecf77235c3132a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9b3b557c90e4dfe91e5afc5b90f1a849
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: fcc1e71f51a0ae978eabd929e1443b25
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L24-03_300k.mp4
    parent_uid: 6d92716339ff35aa26e8d9060ef78838
    title: Video-Internet Archive-MP4
    type: Video
    uid: 391da2af1db94c33033ccb42fb813584
inline_embed_id: 33151200checkoutcounterexample50576
order_index: 2222
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: checkout-counter-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/checkout-counter-example
title: Checkout Counter Example
transcript: >-
  <p><span m='860'>So let us start with our example.</span> </p><p><span
  m='3000'>Suppose that you go to a supermarket,</span> <span m='4890'>and start
  observing customers arriving</span> <span m='7160'>and leaving from a given
  checkout counter.</span> </p><p><span m='9990'>Assume that there are two
  customers</span> <span m='11570'>in the queue when you arrive.</span>
  </p><p><span m='14120'>For simplicity, assume also the customers come one at a
  time,</span> <span m='17930'>that there is a single queue, and that the
  customer in front</span> <span m='21350'>of the queue is the one getting
  served by the clerk.</span> </p><p><span m='24400'>So what events of interest
  could happen then?</span> </p><p><span m='26940'>A new customer could join the
  queue, which is an arrival.</span> </p><p><span m='33420'>Or the customer
  currently being served</span> <span m='35520'>is done, and leaves--
  departure.</span> </p><p><span m='39270'>Or both events could happen.</span>
  </p><p><span m='41540'>Now for making our model more precise,</span> <span
  m='44140'>we need to specify the processes of the customer arrivals</span>
  <span m='47440'>and departures.</span> </p><p><span m='48710'>And for that,
  let's use some simple discrete time</span> <span m='51690'>stochastic
  processes, which we have introduced before.</span> </p><p><span m='55610'>So
  as usual, we first divide time into discrete time steps,</span> <span
  m='59900'>say in seconds.</span> </p><p><span m='62150'>Here n equals 0 would
  correspond to the time when you arrived.</span> </p><p><span m='67840'>For
  arrivals, let's assume that customers arrive according</span> <span
  m='70720'>to a Bernoulli process with parameter p.</span> </p><p><span
  m='75039'>And at that time, steps here, there</span> <span m='77470'>is an
  arrival, perhaps this customer here.</span> </p><p><span m='81812'>At 6, there
  is another customer.</span> </p><p><span m='84800'>So during each time
  interval, independently</span> <span m='87170'>of what happened in the past,
  with probability p</span> <span m='89470'>a new customer arrives.</span>
  </p><p><span m='90530'>And with probability 1 minus p, no one comes.</span>
  </p><p><span m='93640'>It may be useful to think about the following
  imaginary</span> <span m='96050'>experiment.</span> </p><p><span
  m='97539'>Imagine that during each time interval,</span> <span
  m='100170'>nature independently flips a biased coin, which</span> <span
  m='103390'>has a probability p of resulting in Heads, and 1 minus p</span>
  <span m='106205'>in Tails.</span> </p><p><span m='107500'>And whenever Heads
  is the result,</span> <span m='109890'>then a new customer joins the
  queue.</span> </p><p><span m='112289'>So in our example here, here you obtain
  Tails, Heads, Tails,</span> <span m='117920'>Tails, Tails, Heads, Tails, et
  cetera.</span> </p><p><span m='122160'>From the lecture on Bernoulli
  process,</span> <span m='124320'>remember that this implies that the time
  duration-- that</span> <span m='127400'>means the number of time steps between
  two</span> <span m='129320'>consecutive arrivals-- follows a geometric random
  variable</span> <span m='132860'>with parameter p.</span> </p><p><span
  m='134520'>So here in our example, that time duration of 4</span> <span
  m='139600'>is the result of a geometric random variable with parameter</span>
  <span m='146320'>p.</span> </p><p><span m='147390'>So again, once in the
  queue, customers wait their turn</span> <span m='150390'>until they start
  being served by the clerk.</span> </p><p><span m='153260'>And typically, when
  a customer starts to check out,</span> <span m='156420'>the number of times
  steps it takes</span> <span m='158430'>to go through the entire process will
  depend on many factors,</span> <span m='161920'>such as the total number of
  items selected,</span> <span m='165450'>the speed or the mood of the clerk,
  and so on, so forth.</span> </p><p><span m='168920'>We will model this
  variation by assuming</span> <span m='171800'>that the service duration of any
  customer</span> <span m='174210'>is the outcome of a random variable.</span>
  </p><p><span m='177170'>In particular, we will assume that the number</span>
  <span m='179760'>of time steps it takes for any customer to check out</span>
  <span m='182660'>is a geometric random variable with a constant parameter
  q.</span> </p><p><span m='186730'>That is, the same q for each
  customer.</span> </p><p><span m='189990'>So you might have a departure
  here.</span> </p><p><span m='193840'>That's correspond to that customer
  here.</span> </p><p><span m='197070'>And another departure at time step 6
  correspond</span> <span m='201530'>to that customer.</span> </p><p><span
  m='203770'>It may be useful, again, to think</span> <span m='205370'>about
  another imaginary experiment</span> <span m='207650'>to represent this service
  duration.</span> </p><p><span m='210970'>Imagine the following.</span>
  </p><p><span m='212760'>At the time a customer in the queue</span> <span
  m='214490'>becomes the one to be served, that customer</span> <span
  m='217840'>starts flipping a biased coin, which</span> <span m='220630'>has a
  probability q of resulting in Heads.</span> </p><p><span m='223970'>And it
  does so independently during each successive time</span> <span
  m='227660'>steps, until Heads appear for the first time, which</span> <span
  m='232470'>then indicates that the checkout service is done,</span> <span
  m='235370'>and that the customer can leave.</span> </p><p><span m='237100'>So
  here in our example, you arrive at that time here.</span> </p><p><span
  m='241730'>And this customer was being served.</span> </p><p><span
  m='245760'>And during that time step, the customer</span> <span
  m='248660'>flips a coin resulting in Tails, Tails, Tails, Heads.</span>
  </p><p><span m='254930'>That customer now leaves.</span> </p><p><span
  m='258160'>The next customer start being served.</span> </p><p><span
  m='261660'>At that time, flips a coin-- Tails,</span> <span m='265310'>Heads--
  then that customer leaves again.</span> </p><p><span m='269620'>Finally, we
  will also assume that the processes modeling</span> <span m='273900'>these
  arrivals and departures are independent of each other.</span> </p><p><span
  m='279100'>Now let us go back to our made up experiment,</span> <span
  m='282640'>and assume that you have arrived at 6:45 PM.</span> </p><p><span
  m='291420'>Consider the following question.</span> </p><p><span
  m='294409'>What is the probability that you observe a customer leaving</span>
  <span m='298230'>the checkout counter during the first time step?</span>
  </p><p><span m='302320'>In our example, since there were at least one
  customer</span> <span m='305990'>in the queue, that probability is then simply
  q.</span> </p><p><span m='311530'>However, if that queue had been empty when
  you arrive,</span> <span m='315540'>then that probability would have been
  0.</span> </p><p><span m='318500'>Another question, would the queue be empty
  at 6:50 PM?</span> </p><p><span m='323430'>That means 5 minutes later.</span>
  </p><p><span m='326010'>Well, it's hard to tell.</span> </p><p><span
  m='327700'>If the initial length of the queue</span> <span m='330610'>had been
  huge when you arrive at 6:45 PM,</span> <span m='334560'>then the probability
  that it will be empty 5 minutes later</span> <span m='337960'>would be very
  small, much smaller</span> <span m='341250'>than the probability in that case,
  with two customers</span> <span m='345360'>initially, or in that case with an
  initial empty queue.</span> </p><p><span m='351710'>From these questions and
  answers,</span> <span m='353280'>it looks like knowing the number of
  customers</span> <span m='355790'>in the queue at any point in time</span>
  <span m='358050'>not only provides a good description of the system</span>
  <span m='360210'>at that time, but it does seem to capture</span> <span
  m='363280'>the critical information we need in order to answer
  questions</span> <span m='366460'>about the future evolution of the
  system.</span> </p><p><span m='370290'>So let us define the state of our
  system</span> <span m='374080'>as the number of customers in the queue at each
  time step n,</span> <span m='379910'>and see what we can do.</span>
  </p><p><span m='382270'>So here, in our example, initially we had 2
  customers.</span> </p><p><span m='388420'>Then, time step 1, still 2
  customers.</span> </p><p><span m='395018'>Time step 2, we have 1
  arrival.</span> </p><p><span m='399330'>So we have 3 customers.</span>
  </p><p><span m='402090'>Time step 3 still 3.</span> </p><p><span m='406230'>4,
  3 minus 1.</span> </p><p><span m='409860'>We have a departure, equals
  2.</span> </p><p><span m='413540'>So 5 will still be 2.</span> </p><p><span
  m='418374'>Time step 6, we have an arrival and a departure.</span>
  </p><p><span m='425740'>So we have 2.</span> </p><p><span m='426800'>And so on
  and so forth.</span> </p><p><span m='430050'>Assume now that there is limited
  space in the supermarket,</span> <span m='434110'>and that no more than 10
  customers can be in the queue</span> <span m='437270'>at any point in
  time.</span> </p><p><span m='439790'>We can then give a graphical
  representation</span> <span m='442670'>of all possible states for our system,
  as follows.</span> </p><p><span m='447490'>A system can be 11 different
  states,</span> <span m='450450'>from an empty queue with no customer,</span>
  <span m='453560'>to a system at full capacity with 10 customers.</span>
  </p><p><span m='457250'>Let us now describe some possible transitions</span>
  <span m='459780'>between these states, from one step to the next.</span>
  </p><p><span m='465220'>Suppose first that the system is in state 2,</span>
  <span m='469100'>and that one new customer arrives and no one leaves.</span>
  </p><p><span m='475760'>So you will transition from 2 to 3.</span>
  </p><p><span m='478880'>And this is what happened in this example, from time
  step 1</span> <span m='483930'>to time step 2.</span> </p><p><span
  m='486490'>Suppose now that you are in state 3,</span> <span m='489930'>and
  that a customer leaves, and no one arrives.</span> </p><p><span
  m='492870'>Then you will transition to state 2,</span> <span m='497600'>like
  what happened between time step 3 and 4.</span> </p><p><span m='503700'>What
  else?</span> </p><p><span m='504780'>Well, you could also be in a given state
  at one time step,</span> <span m='508710'>and stay in this same state at the
  next step.</span> </p><p><span m='512710'>How?</span> </p><p><span
  m='513400'>It can happen in two ways.</span> </p><p><span m='515294'>If there
  are no arrivals and no departure in the next step,</span> <span m='518630'>and
  that was what happened between time step 4 to 5</span> <span m='523000'>here,
  4 to 5.</span> </p><p><span m='525640'>Or there is 1 arrival and 1
  departure,</span> <span m='527810'>like what happened between time step 5 and
  6.</span> </p><p><span m='531780'>A graphical representation of all possible
  one-step</span> <span m='534820'>transitions can be done with the help of
  arcs, such as here.</span> </p><p><span m='539810'>In order to complete our
  model, we</span> <span m='541390'>need to indicate the probabilities
  associated</span> <span m='544100'>with these transitions.</span> </p><p><span
  m='545920'>So again, assume that you're currently in state 2,</span> <span
  m='549510'>with 2 customers in the queue.</span> </p><p><span m='551150'>The
  probability of next going to state 3</span> <span m='554120'>here, with 1 more
  customer in the queue</span> <span m='557750'>is simply a probability of
  having</span> <span m='559560'>1 arrival and no departures.</span>
  </p><p><span m='564590'>On the other hand, the probability</span> <span
  m='566310'>of being here, and going in transition next here,</span> <span
  m='571640'>correspond to 1 departure and no arrival.</span> </p><p><span
  m='578160'>Finally, the system can stay in state 2,</span> <span
  m='581170'>like that, when there is 1 arrival and 1 departure,</span> <span
  m='587350'>or no arrivals and no departures.</span> </p><p><span
  m='593580'>These transition probabilities would be similar</span> <span
  m='596260'>if the current state were 1, 3, 9.</span> </p><p><span
  m='602030'>For the two extreme states, the transition probabilities</span>
  <span m='604550'>are a bit different.</span> </p><p><span m='606470'>If you
  are in state 0, the queue is empty,</span> <span m='610560'>and you can go to
  state 1 with 1 additional customer,</span> <span m='615280'>with a probability
  p.</span> </p><p><span m='617940'>Or there is no new customer coming,</span>
  <span m='620210'>and you stay in state 0.</span> </p><p><span m='623980'>And
  if the queue is at maximum capacity,</span> <span m='627480'>either you stay
  at maximum capacity</span> <span m='631880'>if there is no service, or you go
  down to 9 customers</span> <span m='636620'>in a queue if you have a
  departure.</span> </p><p><span m='642090'>So one important fact.</span>
  </p><p><span m='643880'>When you are in a given state, for example state
  2,</span> <span m='648090'>and you look at all possible transitions, could go
  to 3,</span> <span m='652950'>could go to 1, could remain in 2.</span>
  </p><p><span m='655780'>If you sum all the probabilities,</span> <span
  m='659510'>p times 1 minus q plus q times 1 minus p</span> <span
  m='666390'>plus this total probability here, pq plus 1 minus p times</span>
  <span m='671200'>1 minus q, you will get a total probability of 1.</span>
  </p><p><span m='677230'>Similarly, if you look at this probability
  here,</span> <span m='682490'>they sum to 1.</span> </p><p><span
  m='684460'>And these probabilities sum to 1.</span> </p><p><span
  m='688840'>It's simply says that from one time step to the next,</span> <span
  m='694880'>if you consider all possible transition probabilities,</span> <span
  m='698930'>they all have to sum to 1.</span> </p><p><span m='701390'>So in
  conclusion, this so-called transition probability graph,</span> <span
  m='714710'>which is this representation here,</span> <span m='718260'>provides
  a complete representation</span> <span m='720910'>of a discrete time finite
  state Markov</span> <span m='724230'>chain model of our simple supermarket
  checkout counter</span> <span m='728030'>example.</span> </p>
uid: 6d92716339ff35aa26e8d9060ef78838
type: course
layout: video
---
