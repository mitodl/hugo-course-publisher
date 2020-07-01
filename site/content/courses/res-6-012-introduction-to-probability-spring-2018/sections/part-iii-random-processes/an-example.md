---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: MvGuBQZZuLM
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    title: Video-YouTube-Stream
    type: Video
    uid: 37c46d217615f0c4fb3b01a83aeac156
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MvGuBQZZuLM/default.jpg'
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: d7f9e5c0b6f54c894e2b5c1838cf93f4
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: MvGuBQZZuLM
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 23a0e2e84a8a68d3b58a5a8cf6bfc13c
  - id: MvGuBQZZuLM.srt
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/an-example/MvGuBQZZuLM.srt
    title: 3play caption file
    type: null
    uid: f4e258d0a0da3f959f3785a4cabe67a1
  - id: MvGuBQZZuLM.pdf
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/an-example/MvGuBQZZuLM.pdf
    title: 3play pdf file
    type: null
    uid: 8d15ee752050de0caa9faf9ab78d8521
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: e37924a6184f14f59a28804e90c75a03
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bc7959b46ecf8c8fb1c669f23d01b31a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L22-10_300k.mp4
    parent_uid: 5c4001591adb2384f1183f0a0992a9aa
    title: Video-Internet Archive-MP4
    type: Video
    uid: 46eabaf2cbca1ddff7f707b7c107114f
inline_embed_id: 75624349anexample11407019
order_index: 2096
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: an-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/an-example
title: An Example
transcript: >-
  <p><span m='650'>In this segment, we go through an example</span> <span
  m='3320'>to get some practice with Poisson process calculations.</span>
  </p><p><span m='6690'>The example is as follows.</span> </p><p><span
  m='8420'>You go fishing and fish are caught according</span> <span
  m='11610'>to a Poisson process with an arrival rate-- that</span> <span
  m='15020'>is the rate at which fish are caught-- of 0.6 fish per hour.</span>
  </p><p><span m='20970'>You will fish for two hours no matter what.</span>
  </p><p><span m='24530'>And if during those two hours you</span> <span
  m='26140'>have caught at least one fish, then you stop.</span> </p><p><span
  m='28940'>As in this scenario, in which you have caught three fish</span>
  <span m='32280'>during the first two hours, and then you stop.</span>
  </p><p><span m='35380'>Otherwise, you will continue until you catch one
  fish.</span> </p><p><span m='40640'>And at that time, you will stop.</span>
  </p><p><span m='44280'>We will answer a few questions and we will write
  down</span> <span m='47580'>the answers to these questions in terms of the
  notation</span> <span m='51100'>that we have introduced.</span> </p><p><span
  m='52850'>And here, for reference, we have all of the formulas</span> <span
  m='55580'>that we have developed so far.</span> </p><p><span m='58570'>The
  first question is, what is the probability</span> <span m='61240'>that you get
  to fish for more than two hours?</span> </p><p><span m='64269'>Well, you get
  to fish for more than two hours if and only</span> <span m='67710'>if you
  didn't catch any fish during the first two hours.</span> </p><p><span
  m='72490'>So this is the probability of catching</span> <span m='75289'>zero
  fish in the first two hours.</span> </p><p><span m='79039'>And we can use this
  formula.</span> </p><p><span m='80740'>Substitute k equal to 0, tau equal to
  2,</span> <span m='84690'>lambda equal to 0.6.</span> </p><p><span
  m='87210'>Plug in the numbers and obtain a numerical answer.</span>
  </p><p><span m='90150'>We will not bother [with] the numerical answers,</span>
  <span m='92229'>we will just be writing down the expressions that</span> <span
  m='95320'>give us the answers.</span> </p><p><span m='97860'>Now, in this
  question we could have a different approach.</span> </p><p><span
  m='103470'>You will fish for more than two hours</span> <span m='106020'>if
  and only if there are no arrivals during the first two</span> <span
  m='109350'>hours, which means that the first arrival</span> <span
  m='112190'>in the Poisson process of fishing happens after time 2.</span>
  </p><p><span m='117229'>So we're talking about the event that the first
  arrival, T1,</span> <span m='122080'>is bigger than 2.</span> </p><p><span
  m='124440'>And we're looking into the probability</span> <span m='126320'>of
  this event, which is the integral of the density</span> <span m='132170'>of
  the first arrival time.</span> </p><p><span m='135040'>And the integral is
  taken over the range</span> <span m='137740'>of values of interest-- larger
  than 2.</span> </p><p><span m='140030'>That is, from 2 to infinity.</span>
  </p><p><span m='143329'>We know that this density is exponential,</span> <span
  m='145900'>so we can write down this integral and evaluate it.</span>
  </p><p><span m='149840'>So notice the difference between these two
  approaches.</span> </p><p><span m='153090'>Here we think in terms of the
  random variables that</span> <span m='156490'>correspond to the number of
  arrivals</span> <span m='159360'>during a certain time interval.</span>
  </p><p><span m='161670'>Here we're reasoning in terms of inter-arrival
  times.</span> </p><p><span m='165560'>And more generally, for Poisson process
  problems,</span> <span m='168700'>an event of interest sometimes can</span>
  <span m='170760'>be expressed in terms of number of arrivals.</span>
  </p><p><span m='174720'>Or sometimes it can be expressed in terms</span> <span
  m='177710'>of arrival and inter-arrival times.</span> </p><p><span
  m='180590'>Or sometimes both approaches are possible.</span> </p><p><span
  m='183520'>But usually one of the two approaches</span> <span m='185850'>will
  be simpler than the other.</span> </p><p><span m='187380'>For example, here we
  already have a formula,</span> <span m='190130'>whereas here we would need to
  evaluate an integral.</span> </p><p><span m='193520'>Here is now our next
  question, which is a little bit more</span> <span
  m='196890'>complicated.</span> </p><p><span m='198570'>What is the probability
  that you get</span> <span m='200079'>to fish for more than two hours, and also
  you</span> <span m='204270'>get to fish for less than five hours?</span>
  </p><p><span m='209329'>This is the scenario, again, that you</span> <span
  m='212360'>fish for more than two hours, which means that no fish were</span>
  <span m='215460'>caught during the first two hours.</span> </p><p><span
  m='217500'>And then you continue fishing.</span> </p><p><span m='219470'>And
  by time 5 you have already caught your fish</span> <span m='224310'>and you
  have left.</span> </p><p><span m='226180'>Now, it is convenient of thinking
  about the Poisson</span> <span m='229440'>process as follows.</span>
  </p><p><span m='231460'>Think about the Poisson process of catching
  fish</span> <span m='234130'>at the rate of 0.6 per hour as going on
  forever.</span> </p><p><span m='237950'>So there's a fisherman who fishes
  forever,</span> <span m='242490'>except that this fisherman at either this
  time,</span> <span m='247020'>under this scenario, or at that time, under this
  scenario,</span> <span m='251490'>raises a flag and says, OK, this is</span>
  <span m='254520'>the time I should be stopping.</span> </p><p><span
  m='257600'>So even though the fisherman will stop fishing at this time,</span>
  <span m='261600'>we can imagine the Poisson process keeps going on.</span>
  </p><p><span m='267860'>With this way of thinking, the fact</span> <span
  m='270490'>that you stopped fishing before time 5 is the event</span> <span
  m='275460'>and that the number of fish caught,</span> <span m='278570'>or the
  number of Poisson arrivals during the interval</span> <span m='282100'>from 2
  to 5 is at least equal to 1, larger than or equal to 1.</span> </p><p><span
  m='288560'>So the event of interest consists of the intersection</span> <span
  m='291310'>of two events, zero fish caught during the first two hours--</span>
  <span m='296440'>which has this probability-- and at least one</span> <span
  m='302880'>arrival in the Poisson process between times 2 and 5--</span> <span
  m='307020'>this is a time interval of length 3.</span> </p><p><span
  m='310870'>And having at least one arrival is</span> <span m='313280'>1 minus
  the probability of 0 arrivals</span> <span m='317450'>in a time interval of
  length 3.</span> </p><p><span m='320720'>Notice that I'm multiplying those two
  probabilities here.</span> </p><p><span m='324450'>Why am I doing this?</span>
  </p><p><span m='326340'>In a Poisson process, whatever happens</span> <span
  m='328740'>in disjoint time intervals are independent events.</span>
  </p><p><span m='333230'>So an event having to do with this interval--</span>
  <span m='336010'>the event that no fish were caught--</span> <span
  m='338290'>and the event that has to do with this interval-- at least</span>
  <span m='341200'>one fish caught, at least one arrival during this time</span>
  <span m='344540'>interval-- these two events are independent.</span>
  </p><p><span m='347020'>And this is why we can multiply their
  probabilities.</span> </p><p><span m='351040'>Now, let us think of the
  alternative approach,</span> <span m='353370'>a different way of describing
  this event using</span> <span m='356360'>arrival and inter-arrival
  times.</span> </p><p><span m='358760'>What is this event?</span> </p><p><span
  m='359710'>This is the event that no arrival happened</span> <span
  m='362140'>until this time, but an arrival happened before time 5.</span>
  </p><p><span m='366920'>So this is the event that the first arrival</span>
  <span m='371580'>happens after time 2, but before time 5.</span> </p><p><span
  m='377020'>And we're looking at the probability</span> <span m='378810'>of
  this event, which we can find by integrating</span> <span m='382440'>the PDF
  of the first arrival time from 2 until 5.</span> </p><p><span m='389910'>The
  next question is, what is the probability</span> <span m='392040'>that we
  catch at least two fish?</span> </p><p><span m='394425'>Under this scenario,
  we catch one fish and we stop.</span> </p><p><span m='398770'>Therefore, this
  scenario must have materialized.</span> </p><p><span m='403490'>The event of
  catching at least two fish</span> <span m='406430'>is the scenario that from
  time from 0 until 2,</span> <span m='411170'>we caught at least two
  fish.</span> </p><p><span m='414170'>So we're talking about the
  probability</span> <span m='416020'>of catching at least two fish,
  which</span> <span m='419090'>is the probability of catching k fish during a
  time</span> <span m='424540'>interval of length 2, where k can be anything
  from 2</span> <span m='431441'>to infinity.</span> </p><p><span m='435030'>So
  this is the probability that the number</span> <span m='437100'>of fish caught
  during these two time units</span> <span m='440800'>is at least equal to
  2.</span> </p><p><span m='442830'>And an alternative way of writing this
  expression</span> <span m='445900'>so that we do not have to evaluate an
  infinite sum,</span> <span m='448690'>it is 1 minus the probability of
  catching 0 fish,</span> <span m='453060'>and minus the probability of catching
  1 fish.</span> </p><p><span m='459060'>If we were to write this in terms of
  arrival</span> <span m='461790'>and inter-arrival times, we will catch at
  least two fish</span> <span m='467150'>if and only if by the time we stop--
  which will be time 2--</span> <span m='472480'>we've had 2 arrivals, which
  means that the second arrival</span> <span m='476760'>time happened before
  time 2.</span> </p><p><span m='479990'>So we're looking into the
  probability</span> <span m='482870'>that the second arrival time happened
  before time 2, which</span> <span m='488010'>is the integral from 0 to 2 of
  the density</span> <span m='491660'>of the second arrival time.</span>
  </p><p><span m='495130'>We have a formula for this density</span> <span
  m='497890'>given by the Erlang PDF.</span> </p><p><span m='500510'>So we could
  take this expression, plug it in here,</span> <span m='504090'>evaluate the
  integral, and obtain the same answer</span> <span m='507720'>as we would have
  obtained here.</span> </p><p><span m='509700'>Clearly, in this case as well,
  this first approach</span> <span m='512750'>would be a simpler one because
  these probabilities are already</span> <span m='516100'>available to
  us.</span> </p><p><span m='519280'>The next question is the following.</span>
  </p><p><span m='521010'>Suppose that you already fished for three
  hours.</span> </p><p><span m='524080'>This is something that can only
  happen</span> <span m='526620'>under the second scenario.</span> </p><p><span
  m='529150'>So no fish have being caught until time 2.</span> </p><p><span
  m='531860'>You continue.</span> </p><p><span m='532650'>No fish were caught
  until time 3.</span> </p><p><span m='535380'>And given that this event has
  occurred,</span> <span m='538460'>what is the expected value of the future
  fishing time?</span> </p><p><span m='543070'>The expected value until a fish
  gets caught for the first time?</span> </p><p><span m='548710'>Well, the
  Poisson process starts fresh at time 3,</span> <span m='553670'>no matter what
  happened in the past,</span> <span m='556090'>no matter what information we're
  given in the past.</span> </p><p><span m='558660'>Now you're sitting at time 3
  and looking into the future.</span> </p><p><span m='561870'>You have a fresh
  starting Poisson process,</span> <span m='565520'>as if this was the initial
  time.</span> </p><p><span m='568730'>Starting from this time, the time until
  the first arrival</span> <span m='572870'>is going to have an exponential
  distribution with parameter</span> <span m='576550'>lambda, and the expected
  value of this distribution</span> <span m='579770'>is equal to 1 over
  lambda.</span> </p><p><span m='584270'>Finally, let's look at a different type
  of question.</span> </p><p><span m='587780'>What is the expected value of the
  total time</span> <span m='591010'>that you get to fish?</span> </p><p><span
  m='593510'>Let us introduce here some notation.</span> </p><p><span
  m='596470'>Let us call the total fishing time capital F.</span> </p><p><span
  m='601070'>And the total fishing time consists of two pieces.</span>
  </p><p><span m='604900'>There's a time until time 2 that you</span> <span
  m='609500'>will be fishing no matter what.</span> </p><p><span m='613300'>And
  then there's going to be the remaining fishing</span> <span m='616660'>time
  after time 2.</span> </p><p><span m='622210'>So now let's look at the
  expectation</span> <span m='624880'>of the remaining fishing time after time
  2.</span> </p><p><span m='627870'>Here there are two scenarios.</span>
  </p><p><span m='629480'>In the first scenario, you stop.</span> </p><p><span
  m='631880'>In the second scenario, you continue.</span> </p><p><span
  m='634440'>And we will take into account these two scenarios</span> <span
  m='636830'>by using the total expectation theorem.</span> </p><p><span
  m='640780'>The first scenario happens with some probability.</span>
  </p><p><span m='645600'>This is the probability that you stop fishing at time
  2.</span> </p><p><span m='649580'>And in that case, your remaining fishing
  time</span> <span m='653620'>is going to be equal to 0 because you do
  not</span> <span m='656980'>continue under that scenario.</span> </p><p><span
  m='659510'>But there's the other scenario that you</span> <span m='661710'>get
  to fish for more than 2 time units.</span> </p><p><span m='666870'>And then we
  multiply this term with</span> <span m='670840'>the conditional expectation of
  the remaining fishing time,</span> <span m='674670'>given that you got to fish
  for more than 2 times units.</span> </p><p><span m='681540'>So what is this
  term?</span> </p><p><span m='682620'>The probability that you get to fish for
  more than 2 time</span> <span m='685510'>units, this is the probability that
  no fish</span> <span m='688610'>were caught during the first time
  units.</span> </p><p><span m='691630'>This is the probability of the second
  scenario.</span> </p><p><span m='694700'>And then we have this conditional
  expectation.</span> </p><p><span m='698660'>Given that you didn't catch
  anything</span> <span m='702100'>and, therefore, you will be continuing
  fishing,</span> <span m='705750'>what is the expected amount of time-- F minus
  2--</span> <span m='711090'>that you will be fishing?</span> </p><p><span
  m='713520'>Now the Poisson process starts fresh at time 2.</span> </p><p><span
  m='716890'>So looking into the future, we're</span> <span m='718700'>faced
  with a Poisson process and we're</span> <span m='720650'>asking for the
  expected time until the first arrival.</span> </p><p><span m='724550'>And this
  time has an expected value equal to 1 over lambda.</span> </p><p><span
  m='731510'>Our last question is of a similar type.</span> </p><p><span
  m='734710'>What is the expected number of fish you're going to catch?</span>
  </p><p><span m='738650'>Once more, we will break this into two pieces.</span>
  </p><p><span m='743260'>Number of fish caught during the first two
  hours,</span> <span m='746510'>and number of fish caught during the remaining
  hours.</span> </p><p><span m='751780'>During the first two hours, the expected
  number</span> <span m='755480'>of fish that you catch is given by this
  formula.</span> </p><p><span m='759650'>It is equal to lambda tau-- and in our
  case lambda is 0.6</span> <span m='766650'>and tau is equal to 2-- plus the
  expected number of fish</span> <span m='772870'>that are caught
  afterwards.</span> </p><p><span m='776150'>What is this expected value?</span>
  </p><p><span m='778060'>Again, we think in terms of the total expectation
  theorem.</span> </p><p><span m='781520'>There's one scenario that has a
  certain probability,</span> <span m='785000'>and under that scenario you do
  not catch any fish.</span> </p><p><span m='788390'>So that doesn't give us any
  contribution.</span> </p><p><span m='791070'>Then there is this scenario, the
  second one,</span> <span m='793840'>that has this probability of
  occurring.</span> </p><p><span m='797220'>The probability of catching no fish
  here,</span> <span m='799470'>so that the second scenario materializes.</span>
  </p><p><span m='802280'>And if that second scenario materializes,</span> <span
  m='804720'>how many fish are you going to catch after time 2?</span>
  </p><p><span m='808480'>It's going to be one fish with certainty.</span>
  </p><p><span m='813820'>And this is the final answer to this question.</span>
  </p><p><span m='816780'>Notice that in answering both of these
  questions</span> <span m='820110'>we used the divide and conquer strategy
  twice.</span> </p><p><span m='824440'>We first divided the time horizon into
  two pieces</span> <span m='828830'>and dealt separately with each one of the
  pieces.</span> </p><p><span m='832850'>And then in order to deal with this
  second piece--</span> <span m='836660'>the time after time 2-- we used
  divide</span> <span m='840740'>and conquer into the two different
  scenarios</span> <span m='843820'>and using the total expectation
  theorem.</span> </p>
uid: 5c4001591adb2384f1183f0a0992a9aa
type: courses
layout: video
---
