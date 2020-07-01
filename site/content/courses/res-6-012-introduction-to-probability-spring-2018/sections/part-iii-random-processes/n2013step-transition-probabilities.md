---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: UwwqPwp16_0
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    title: Video-YouTube-Stream
    type: Video
    uid: a8f0261fbf159d55ddb987c573222b42
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/UwwqPwp16_0/default.jpg'
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5860dc8b5b174170625db18bd82410c2
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: UwwqPwp16_0
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 70c80a4e38d60d12a66a53e5b978d40b
  - id: UwwqPwp16_0.srt
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/n2013step-transition-probabilities/UwwqPwp16_0.srt
    title: 3play caption file
    type: null
    uid: 7d77a9d2ed04ed308f76f6480be1543c
  - id: UwwqPwp16_0.pdf
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/n2013step-transition-probabilities/UwwqPwp16_0.pdf
    title: 3play pdf file
    type: null
    uid: e4499e1a5ed346ec4b13e86435414800
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 438e4ce1c8fdd9d2860ea4e5921ebfce
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: e1cc9da4025c9a63dc22a71a5f074c1c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L24-05_300k.mp4
    parent_uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
    title: Video-Internet Archive-MP4
    type: Video
    uid: 44b601649e98603135bfa39f208b18ae
inline_embed_id: 47093840nsteptransitionprobabilities73514249
order_index: 2231
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: n2013step-transition-probabilities
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/n2013step-transition-probabilities
title: N–Step Transition Probabilities
transcript: >-
  <p><span m='990'>So now that we have defined what a Markov chain is,</span>
  <span m='5010'>what can we do with it?</span> </p><p><span m='7100'>Well, we
  usually build models in order</span> <span m='10770'>to predict some
  phenomenon of interest.</span> </p><p><span m='13650'>In the case of a Markov
  chain, there is randomness.</span> </p><p><span m='17540'>And so it is natural
  to think about making</span> <span m='20470'>probabilistic predictions.</span>
  </p><p><span m='23880'>For example, going back again to our checkout counter
  example,</span> <span m='28560'>you have arrived at 6:45 PM.</span>
  </p><p><span m='32280'>There are two customers in a queue.</span> </p><p><span
  m='35310'>And you want to predict the number of customers</span> <span
  m='38020'>in the queue at 7:00 PM.</span> </p><p><span m='40510'>Assuming time
  steps are in seconds,</span> <span m='43230'>that corresponds to 900 times
  steps later.</span> </p><p><span m='47030'>There is no way to know exactly
  where the system will be.</span> </p><p><span m='50190'>But you may be able to
  give probabilistic prediction.</span> </p><p><span m='53270'>That is, to give
  the probability for the system</span> <span m='56020'>to be in a given state
  900 time steps later.</span> </p><p><span m='60860'>Our main purpose will be
  to calculate such probabilities.</span> </p><p><span m='65280'>And notation
  will be useful here.</span> </p><p><span m='67710'>Suppose that the Markov
  chain of interest</span> <span m='69830'>starts in a given state, i, and that
  it runs for n transitions.</span> </p><p><span m='75710'>Let us introduce the
  notation rijn to represent the n step</span> <span m='82440'>transition
  probability of ending in state j.</span> </p><p><span m='86230'>This is the
  initial state, i.</span> </p><p><span m='88600'>And this is the definition,
  rij of n.</span> </p><p><span m='91940'>First note that these are
  probabilities.</span> </p><p><span m='95530'>Given that you started in i,
  after n steps,</span> <span m='99590'>you will end up in some state with
  probability 1.</span> </p><p><span m='102640'>So the summation of all rij of n
  for all possible states j,</span> <span m='114140'>will be 1.</span>
  </p><p><span m='116259'>And this is true for all i, all initial state,</span>
  <span m='121710'>and for any time step n.</span> </p><p><span m='125940'>Also,
  because we have a time invariant Markov chain,</span> <span m='130820'>rijn is
  also given by this formula</span> <span m='134540'>here for any possible value
  of s.</span> </p><p><span m='140380'>Going from here to here, plus s, plus
  s.</span> </p><p><span m='146390'>In other words, if currently you are in
  state i at time steps s,</span> <span m='153860'>and you're interested in
  knowing what</span> <span m='155829'>is the probability of being in state j at
  time n plus s,</span> <span m='160570'>which mean n steps later, you will
  still</span> <span m='163510'>have the same expression-- rijn.</span>
  </p><p><span m='168350'>So how to calculate rijn.</span> </p><p><span
  m='172110'>For some particular n, this is easy.</span> </p><p><span
  m='175590'>For example, for rij of zero, that</span> <span m='180640'>means
  that there are no transition,</span> <span m='183580'>it will be either 1 if i
  equal j, and zero otherwise.</span> </p><p><span m='197740'>In one step, in
  other words, when n equals 1, rij of 1</span> <span m='204090'>will be the
  probability transition</span> <span m='207820'>given by the Markov
  chain.</span> </p><p><span m='209490'>And that is true for all i and all
  j.</span> </p><p><span m='213770'>Now let us calculate rijn for n greater than
  or equal to 2.</span> </p><p><span m='221110'>We are going to apply the total
  probably theorem, and break up</span> <span m='225730'>the calculation of that
  quantity by considering</span> <span m='228680'>the different ways that the
  event of interest can happen.</span> </p><p><span m='233360'>Again, the event
  of interest is to go from i, state i,</span> <span m='239870'>to state j in n
  times steps.</span> </p><p><span m='243580'>There are many ways for that event
  to happen.</span> </p><p><span m='246930'>Let's group these many different
  ways, as follows.</span> </p><p><span m='251030'>Let us consider the first n
  minus 1 steps.</span> </p><p><span m='256290'>And group together all possible
  ways</span> <span m='259160'>of going from i to a state k, a given state
  k,</span> <span m='263960'>in n minus 1 steps.</span> </p><p><span
  m='265990'>And this wiggle path here represent all possible ways</span> <span
  m='269560'>of doing that.</span> </p><p><span m='272230'>Using the definition
  above, that probability</span> <span m='276780'>of going from i to k in n
  minus 1 steps</span> <span m='280260'>will be rik of n minus 1.</span>
  </p><p><span m='287370'>Now assuming that you ended up in state k in n</span>
  <span m='291750'>minus 1 transitions, the probability</span> <span
  m='294909'>that you end up in state j in the next transition</span> <span
  m='300900'>is simply the one-step transition probability, pkj.</span>
  </p><p><span m='312550'>So altogether, the probability of going from
  state</span> <span m='316280'>i to state j in n steps, and in being in state
  k</span> <span m='324380'>after n minus 1 steps is simply rik n minus 1 times
  pkj.</span> </p><p><span m='337360'>Note that state k can be any of the finite
  number</span> <span m='342659'>of possible states of our system.</span>
  </p><p><span m='345050'>In summary, all such paths can be</span> <span
  m='348980'>represented by the following diagram.</span> </p><p><span
  m='351940'>So again, from time zero, you are in state i.</span> </p><p><span
  m='358250'>And you want to be at time n in state j.</span> </p><p><span
  m='362160'>And you break down all the possible ways</span> <span m='365310'>by
  first looking at what would happen after step n minus 1.</span> </p><p><span
  m='369800'>You can be in state 1, state k, all the way to state m.</span>
  </p><p><span m='374840'>We have calculated these expression here.</span>
  </p><p><span m='380769'>This is what we have done here.</span> </p><p><span
  m='384760'>This is for state 1 and state m.</span> </p><p><span m='392680'>So
  the overall probability of reaching node j</span> <span m='395850'>is obtained
  by an application of the total probability theorem.</span> </p><p><span
  m='400620'>It gives the following formula.</span> </p><p><span m='404380'>So
  this is corresponding to the total probability theorem.</span> </p><p><span
  m='409320'>Here, this is the calculation that we have done here.</span>
  </p><p><span m='414030'>And we sum over all possibilities for k.</span>
  </p><p><span m='418680'>Where did we use the Markov property in this
  calculation?</span> </p><p><span m='423160'>Well, the key step here was when
  we</span> <span m='426530'>said that this probability here was pkj.</span>
  </p><p><span m='431180'>Going back to the calculation that we had here,</span>
  <span m='434740'>this was in fact the probability of being in state j at times
  n,</span> <span m='443850'>given you started in state i, and you were in state
  n minus 1</span> <span m='454570'>in k.</span> </p><p><span m='456760'>And
  that probability being equals to the probability of xn</span> <span
  m='462060'>equals j given the last time.</span> </p><p><span m='468620'>That
  is due to Markov.</span> </p><p><span m='474260'>And this is pkj.</span>
  </p><p><span m='480180'>This is a recursion in the following sense.</span>
  </p><p><span m='484190'>Assume that you have calculated rik n minus 1</span>
  <span m='489020'>for all possible values of i, and all possible value of
  k.</span> </p><p><span m='494340'>And you have stored all these values, m
  square of them.</span> </p><p><span m='499910'>For any pair, ij, you can now
  calculate rijn</span> <span m='506350'>using that formula.</span> </p><p><span
  m='508510'>And you can do it in, essentially m multiplication,</span> <span
  m='512830'>and m minus 1 additions.</span> </p><p><span m='515610'>That is, in
  a number of steps or number of elementary steps</span> <span
  m='520070'>proportional to m.</span> </p><p><span m='522270'>You do this for
  all m square pair of ij at the time step n.</span> </p><p><span m='527660'>And
  then you repeat for n plus 1, et cetera.</span> </p><p><span m='531010'>So
  this is the essence of the recursion.</span> </p><p><span m='534940'>Here is a
  variation that is another recursion</span> <span m='538930'>for computing rij
  of n.</span> </p><p><span m='542180'>You start at i.</span> </p><p><span
  m='544220'>And suppose that in the one time step,</span> <span m='547020'>you
  find yourself in state k.</span> </p><p><span m='549860'>The probability here
  is the one-step transition, pik.</span> </p><p><span m='556760'>And then,
  given that you are in state k, what</span> <span m='560956'>is the probability
  that you will end up</span> <span m='562580'>in state j in n minus 1
  step?</span> </p><p><span m='565510'>Will be, again, looking at this
  formula</span> <span m='568070'>that we had here, rkj of n minus 1.</span>
  </p><p><span m='574750'>Again, you have to consider all possible values for k
  here.</span> </p><p><span m='580530'>And the application of the total
  probability theorem</span> <span m='584580'>gives the following alternative
  recursion.</span> </p><p><span m='588180'>rij of n, is the sum for all k
  equals 1 to m</span> <span m='598510'>of pik times rkj of n minus 1.</span>
  </p><p><span m='610980'>These two recursions-- this one and this one-- are
  different.</span> </p><p><span m='616580'>They are both valid, and could be
  useful,</span> <span m='620760'>depending on the specific questions</span>
  <span m='622900'>you may want to answer.</span> </p><p><span
  m='624670'>Finally note, that if the initial state is itself random,</span>
  <span m='630330'>that is given by a random distribution-- this</span> <span
  m='634730'>is the initial distribution on the state,</span> <span
  m='642060'>than the state probability distribution after n steps</span> <span
  m='645960'>will be given by this formula.</span> </p><p><span m='647570'>This
  is the state after n step.</span> </p><p><span m='651150'>It's simply
  that.</span> </p><p><span m='651970'>And this is, yet again, an
  application</span> <span m='654900'>of the total probability theorem.</span>
  </p><p></p>
uid: 9cfa9a9faa1dbbb0f19ed7d32fd8f243
type: courses
layout: video
---
