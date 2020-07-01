---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 85le_VkEK5A
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    title: Video-YouTube-Stream
    type: Video
    uid: 6f528a730ea3466df856943aee7f9713
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/85le_VkEK5A/default.jpg'
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2c8ef661a4a36d3cff9ca1292961c110
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 85le_VkEK5A
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4ca8ca0f8c9755d426b79be3536b1ee2
  - id: 85le_VkEK5A.srt
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/design-of-a-phone-system/85le_VkEK5A.srt
    title: 3play caption file
    type: null
    uid: c4bd2db6902f743ad6df363f120d1583
  - id: 85le_VkEK5A.pdf
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/design-of-a-phone-system/85le_VkEK5A.pdf
    title: 3play pdf file
    type: null
    uid: bfd8283cc03fa07b6bedc8893922c342
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6185bc8ebeee770d924de7341216064e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d91fbf03c858b030175b60f9a5da80a2
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-05_300k.mp4
    parent_uid: 8e6bf2a14463d596239cc6ead054c781
    title: Video-Internet Archive-MP4
    type: Video
    uid: eae2dce49393dfca13733f5942a26a18
inline_embed_id: 49932698designofaphonesystem83296974
order_index: 2303
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: design-of-a-phone-system
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/design-of-a-phone-system
title: Design of a Phone System
transcript: >-
  <p><span m='690'>In this video, we will consider a classical
  application</span> <span m='3820'>of Markov chains, which has to do with the
  design of a phone</span> <span m='7250'>system.</span> </p><p><span
  m='8020'>This is a classical problem, which was posed, analyzed,</span> <span
  m='11620'>and solved by a Danish engineer by the name of Erlang.</span>
  </p><p><span m='17620'>It was more than 100 years ago when phones just</span>
  <span m='21040'>started to exist, but the technique</span> <span
  m='23150'>remains relevant today to design systems of a similar nature.</span>
  </p><p><span m='27780'>As for Erlang, he was trying to figure out</span> <span
  m='30440'>how to design the capacity of a phone system.</span> </p><p><span
  m='33800'>That is, how many lines should we</span> <span m='35920'>set up for
  a group of people, say, in a village,</span> <span m='39230'>to be able to
  communicate to the outside world?</span> </p><p><span m='43000'>So here is a
  cartoon of the problem, where</span> <span m='46210'>these are the phone
  lines, and we</span> <span m='49070'>need to decide how many of these lines to
  set up, let's say,</span> <span m='52250'>B. How to do that?</span>
  </p><p><span m='54890'>Well, we don't want B to be too large, much more than
  needed,</span> <span m='58890'>because too many lines would be
  expensive.</span> </p><p><span m='62780'>On the other hand, we want to have
  enough lines</span> <span m='65640'>so that if a reasonable number of people
  place phone</span> <span m='68840'>calls during the same period, they</span>
  <span m='71030'>will be able to talk and not get busy signals.</span>
  </p><p><span m='74190'>So if B is 10 and 15 people want to talk at the same
  time,</span> <span m='78750'>then 5 would get a busy signal, and that's</span>
  <span m='82020'>probably not what you want as an acceptable level of
  service.</span> </p><p><span m='86590'>So we would like B to be just large
  enough so that there</span> <span m='90930'>is a high probability that no one
  is</span> <span m='93500'>going to get a busy signal.</span> </p><p><span
  m='96910'>So how do we go about modeling a situation like this?</span>
  </p><p><span m='100700'>Well, we need two pieces of information,</span> <span
  m='104200'>one describing how phone calls get</span> <span
  m='106830'>initiated, and once a phone call gets started, how long does
  it</span> <span m='111729'>take until it ends?</span> </p><p><span
  m='114700'>We're going to make some very simple but somewhat plausible</span>
  <span m='118170'>assumptions.</span> </p><p><span m='119700'>We will assume
  that phone calls originate as a Poisson process.</span> </p><p><span
  m='124630'>We will assume that out of that population,</span> <span
  m='127190'>there is no coordination.</span> </p><p><span m='128824'>At
  completely random times, people pick up their phone</span> <span
  m='132270'>independent of each other's.</span> </p><p><span m='134200'>Also,
  there is nothing special about the various times,</span> <span m='137390'>and
  different times are independent.</span> </p><p><span m='139900'>So a Poisson
  model is a reasonable way</span> <span m='142230'>of modeling a situation
  under these assumptions.</span> </p><p><span m='145480'>We also assume that
  the rate lambda</span> <span m='148140'>is known or has been estimated.</span>
  </p><p><span m='150800'>Now, it might be the case that during the
  night,</span> <span m='153079'>the rate would be different than during the
  day.</span> </p><p><span m='155540'>In that case, you would design the
  system</span> <span m='157520'>to meet the largest rate of the two.</span>
  </p><p><span m='160730'>For the phone calls themselves, we</span> <span
  m='162660'>are going to assume that the duration of a phone call</span> <span
  m='165460'>is a random variable that has an exponential distribution</span>
  <span m='169460'>with a certain parameter mu.</span> </p><p><span
  m='171950'>So 1/mu is the mean duration of a phone call.</span> </p><p><span
  m='176540'>Duration of phone calls are independent between each other.</span>
  </p><p><span m='180150'>So here, again, we assume that the parameter mu</span>
  <span m='182860'>has been estimated.</span> </p><p><span m='183880'>For
  example, the mean duration 1/mu could be 3 minutes.</span> </p><p><span
  m='188990'>Now, is the exponential assumption a good assumption?</span>
  </p><p><span m='193000'>So here is the PDF of an exponential random
  variable</span> <span m='196730'>with parameter 1 over three.</span>
  </p><p><span m='199030'>That means that the mean duration is about three
  minutes</span> <span m='202250'>here.</span> </p><p><span m='203210'>So if you
  look at this PDF, it means</span> <span m='205160'>that most phone calls will
  be kind of short.</span> </p><p><span m='209260'>There is going to be a
  fraction of phone calls</span> <span m='212620'>that are going to be larger,
  and then</span> <span m='215120'>a very small fraction of phone calls</span>
  <span m='217829'>that are going to be even larger.</span> </p><p><span
  m='220460'>So it sounds reasonable.</span> </p><p><span m='222510'>However,
  it's not exactly realistic in some situations.</span> </p><p><span
  m='226930'>Typically, phone calls that last a very short time are not</span>
  <span m='231590'>that common as opposed to what an exponential
  distribution</span> <span m='234425'>would indicate here.</span> </p><p><span
  m='238240'>So some other distribution might be better, like this one,</span>
  <span m='241740'>for example, here, where during a very small period of
  time</span> <span m='247190'>the wait corresponding to this very short period
  of time</span> <span m='250660'>are kind of small as well.</span> </p><p><span
  m='253020'>There are many distributions of this type.</span> </p><p><span
  m='254830'>I've just provided here one simple example.</span> </p><p><span
  m='258790'>This one is the Erlang of parameter 2 and 2/3.</span> </p><p><span
  m='263560'>What it means is that it is the sum of two</span> <span
  m='267200'>independent exponential random variables,</span> <span
  m='269930'>and each one of them of parameter 2/3.</span> </p><p><span
  m='272880'>So the mean duration associated with this distribution</span> <span
  m='275630'>is also 3 minutes.</span> </p><p><span m='277130'>So this might fit
  better some practical situation.</span> </p><p><span m='280600'>But here we
  will keep the simple assumption associated</span> <span m='284210'>with an
  exponential distribution.</span> </p><p><span m='287080'>All right.</span>
  </p><p><span m='287580'>So let's try now to come up with the models</span>
  <span m='289825'>that we can decide how many lines, B, do we want to set
  up.</span> </p><p><span m='294670'>The Poisson process run in continuous
  time.</span> </p><p><span m='297600'>And call durations being exponential
  random variables</span> <span m='300270'>are also continuous random
  variables.</span> </p><p><span m='302700'>So it seems that we are in a
  continuous time universe.</span> </p><p><span m='306250'>Here is a cartoon of
  the evolution of the system.</span> </p><p><span m='311360'>So here I have in
  blue when phone calls get initiated.</span> </p><p><span m='316380'>So this is
  called 1, a second one, a third, a fourth,</span> <span m='320650'>and a fifth
  one.</span> </p><p><span m='322230'>And also, I have represented here the
  duration of the call.</span> </p><p><span m='325530'>So call 1 lasted that
  long, call 2 lasted long</span> <span m='330140'>until here, 3 up to here, 4
  here, et cetera.</span> </p><p><span m='335690'>So when you look at this kind
  of system in that way,</span> <span m='338510'>and you run through time in a
  continuous manner,</span> <span m='341409'>and here you have 0 line
  busy.</span> </p><p><span m='344145'>You have 1 line used, 0, 1, then 2
  becomes busy,</span> <span m='349250'>3, 2, 1, and 0, and so on and so
  forth.</span> </p><p><span m='353640'>Also note that if I look at that system
  at any time t,</span> <span m='358220'>because of our assumptions of a Poisson
  process</span> <span m='361540'>and an exponential duration for phone
  calls,</span> <span m='364780'>and a memoryless property associated</span>
  <span m='367390'>with these processes, it means that the past really</span>
  <span m='371330'>has no information about the future.</span> </p><p><span
  m='373280'>And so, in some sense, the Markov property is valid.</span>
  </p><p><span m='377150'>So it looks like a continuous time Markov</span> <span
  m='379920'>process would be needed here.</span> </p><p><span m='382210'>And
  this is indeed an option, but we have not</span> <span m='385180'>studied
  those in this class.</span> </p><p><span m='386950'>So we will discretize time
  instead</span> <span m='389290'>and work with a Markov chain.</span>
  </p><p><span m='392480'>We are discretizing time in the familiar way, the way
  we did it</span> <span m='396470'>when we studied the Poisson process.</span>
  </p><p><span m='399050'>We are going to take the time axis</span> <span
  m='401450'>and split it into little discrete time</span> <span
  m='404700'>slots, each of duration delta.</span> </p><p><span m='408450'>And
  delta is supposed to be a very, very small number.</span> </p><p><span
  m='413770'>So now under this discretization,</span> <span m='417000'>by the
  definition of the Poisson process</span> <span m='419790'>the probability that
  we'll see 1 arrival during any time</span> <span m='423410'>slots of duration
  delta will be lambda times delta.</span> </p><p><span m='431200'>Also, if at
  any time, like here we have 1 simple call active,</span> <span m='437420'>the
  probability that this call will end during any future time</span> <span
  m='441130'>slot of duration delta is mu delta, like here.</span> </p><p><span
  m='448930'>Indeed, as we have seen in Unit 9,</span> <span m='451860'>an
  exponential random variable can</span> <span m='454050'>be thought of as
  representing the time</span> <span m='456890'>until the first arrival of a
  Poisson process with rate mu.</span> </p><p><span m='462280'>What if you have
  i busy calls at the same time?</span> </p><p><span m='466810'>Then the
  probability of having 1 call ending</span> <span m='468980'>in a time slot of
  duration delta will be i mu delta.</span> </p><p><span m='474200'>Like, for
  example here, this one could correspond to something</span> <span
  m='478330'>as 2 mu delta.</span> </p><p><span m='480840'>Indeed, each of the
  Poisson processes associated</span> <span m='484230'>with these calls with
  rate mu can</span> <span m='486730'>be combined into a merged Poisson process
  of rate i times</span> <span m='491020'>mu.</span> </p><p><span m='491810'>And
  a call completion will correspond to the time</span> <span m='494580'>until
  the first arrival of this merged Poisson process.</span> </p><p><span
  m='498230'>For example, if I go back here in my situation here at time
  t,</span> <span m='503140'>there were still 3 phone calls active.</span>
  </p><p><span m='505840'>And I represent here the call number 2, call number
  3,</span> <span m='508840'>and call number 4 and their remaining
  duration.</span> </p><p><span m='512789'>And if you look at these and you
  combine these 3</span> <span m='516960'>associated Poisson processes into
  1,</span> <span m='519710'>you get a merged Poisson process.</span>
  </p><p><span m='522070'>And if you look now at the time arrival of the first
  event,</span> <span m='525970'>which would correspond to here, it</span> <span
  m='528530'>would be an exponential random variable.</span> </p><p><span
  m='530630'>The duration here would correspond</span> <span m='532320'>to an
  exponential random variable of parameter 3 mu.</span> </p><p><span
  m='535920'>So in that case, if you go back to that representation here,</span>
  <span m='539010'>the probability of a departure would</span> <span
  m='540510'>be 3 times mu times delta.</span> </p><p><span
  m='543731'>OK?</span> </p><p><span m='544230'>So let us continue with our
  discrete time</span> <span m='546750'>approximation of our system.</span>
  </p><p><span m='548760'>Again, we have the village, and the lines, the
  B</span> <span m='551360'>that we would like to decide.</span> </p><p><span
  m='552810'>We have discretized the time steps.</span> </p><p><span
  m='556020'>We have made some approximation.</span> </p><p><span m='558200'>And
  we know that during any of these time slots here,</span> <span m='561480'>the
  probability that you would get a new call</span> <span m='563490'>is about
  lambda times delta.</span> </p><p><span m='565600'>Lambda is the rate of the
  Poisson process.</span> </p><p><span m='568840'>And given that you have i
  calls, the probability</span> <span m='573020'>that one of these calls ends
  will be i times mu times delta.</span> </p><p><span m='577990'>OK.</span>
  </p><p><span m='578490'>If we want to propose a Markov chain model for this
  system,</span> <span m='582420'>we need to specify the states and the
  transition</span> <span m='585140'>probabilities.</span> </p><p><span
  m='586730'>What are the states of the system?</span> </p><p><span
  m='588250'>If you look at the system at any particular time,</span> <span
  m='591040'>the minimum relevant information to collect</span> <span
  m='593140'>would be the number of busy lines,</span> <span
  m='595490'>something like these 2 lines are busy, or all of them are
  busy,</span> <span m='600540'>or none of them are used.</span> </p><p><span
  m='603090'>Now, because of our assumptions, again, about the Poisson</span>
  <span m='606590'>process arrivals and exponential duration</span> <span
  m='609040'>of calls and their memoryless property,</span> <span
  m='612200'>that information is enough to fully describe</span> <span
  m='614950'>the state of our system in such a way</span> <span m='617130'>that
  we get a Markov chain.</span> </p><p><span m='619450'>So the states are
  numbers from 0 to B. 0 corresponds</span> <span m='626290'>to a state in which
  all the phone lines are free.</span> </p><p><span m='629350'>No one is
  talking.</span> </p><p><span m='631280'>B corresponds to a case where all the
  phone lines are busy.</span> </p><p><span m='634930'>And then you've got
  states in between.</span> </p><p><span m='637660'>Now, let us look at the
  transition probabilities.</span> </p><p><span m='640850'>Suppose that right
  now, you are in that state.</span> </p><p><span m='644800'>What can happen
  next?</span> </p><p><span m='646530'>Well, a new phone call gets placed, in
  which case</span> <span m='649740'>the state moves up by 1.</span>
  </p><p><span m='652300'>Or an existing call terminates, in which case</span>
  <span m='655340'>the state goes down by 1.</span> </p><p><span m='658190'>Or
  none of the two happens, in which case</span> <span m='660930'>the state stays
  the same.</span> </p><p><span m='663090'>Well, it is also possible that a
  phone call gets terminated,</span> <span m='666990'>and a new phone call gets
  placed in the same time period.</span> </p><p><span m='670510'>But when the
  duration of the time slots</span> <span m='672430'>are very, very small, the
  delta here,</span> <span m='675240'>this event is going to have a negligible
  probability,</span> <span m='679180'>order of delta squared.</span>
  </p><p><span m='681800'>So we ignore it, as we ignore the fact</span> <span
  m='686500'>that more than one new call can happen,</span> <span m='689160'>or
  more than one call can be terminated during a given slot.</span> </p><p><span
  m='693710'>So what is the probability of an upward transition?</span>
  </p><p><span m='697470'>That's the probability that the Poisson process has an
  arrival</span> <span m='700610'>during the slots of duration delta.</span>
  </p><p><span m='702900'>And as we have seen, this is lambda times
  delta.</span> </p><p><span m='706850'>So each one of these upward
  transitions</span> <span m='709860'>has the same probability of lambda times
  delta.</span> </p><p><span m='716180'>How about phone call
  terminations?</span> </p><p><span m='718520'>If we have i phone calls that are
  currently active,</span> <span m='722000'>the probability that one of them
  terminates becomes i mu delta.</span> </p><p><span m='727480'>So here it would
  be mu delta, and here B mu delta.</span> </p><p><span m='733140'>Now, let us
  analyze this chain.</span> </p><p><span m='735390'>It has the birth and death
  form that we</span> <span m='737630'>discussed in the previous lecture.</span>
  </p><p><span m='739710'>So instead of writing down the balance equation</span>
  <span m='742560'>in a general form, we think in terms</span> <span
  m='744850'>of frequency of transitions across some particular cut</span> <span
  m='747980'>in this diagram, so for example here.</span> </p><p><span
  m='753320'>The frequency with which transition of this kind</span> <span
  m='756970'>happen or are observed has to be the same</span> <span
  m='760190'>as the frequency of transition of this kind.</span> </p><p><span
  m='763740'>The frequency of transition of this type</span> <span
  m='766290'>will be, if you look at pi i here and pi of i minus 1 here,</span>
  <span m='772060'>this transition here will happen with pi i times i mu
  delta.</span> </p><p><span m='781910'>And the transition of this type
  here</span> <span m='786510'>will be pi i minus 1 times lambda times
  delta.</span> </p><p><span m='793620'>And the frequency of these
  transitions</span> <span m='796230'>have to be the same as the frequency of
  these transitions,</span> <span m='799400'>so we have that equals that.</span>
  </p><p><span m='801520'>And then we can cancel the delta in both,</span> <span
  m='805770'>and we are left with this equation here.</span> </p><p><span
  m='811980'>So this equation expresses pi of i in terms of pi of i minus
  1.</span> </p><p><span m='818340'>So if we knew pi of 0, then we can calculate
  pi of 1,</span> <span m='823900'>and then in turn calculate pi of 2, and so on
  and so forth.</span> </p><p><span m='828960'>And the general formula that
  comes out of this,</span> <span m='831330'>after some algebra, is given by
  this expression,</span> <span m='835020'>which involves pi of 0.</span>
  </p><p><span m='840260'>Now, what is pi 0?</span> </p><p><span
  m='841860'>Well, we can find it by using the normalization equation,</span>
  <span m='846715'>the summation of pi i equals 1.</span> </p><p><span
  m='850620'>You use this normalization, replace each pi</span> <span
  m='853680'>i by their quantities as a function of pi 0,</span> <span
  m='857790'>and then we obtain this equation for pi 0.</span> </p><p><span
  m='863000'>So here, again, we use that normalization.</span> </p><p><span
  m='865450'>We replaced pi i by their value.</span> </p><p><span m='868090'>We
  sum to 1, and we obtain pi of 0.</span> </p><p><span m='871610'>And then in
  turn, from this pi of 0,</span> <span m='874070'>you can replace the pi of 0
  in pi of i,</span> <span m='877430'>and you obtain a pi of i as a function of
  B, lambda, and mu.</span> </p><p><span m='885230'>So if we know B and lambda
  and mu,</span> <span m='889180'>we can set up this Markov chain, and we can
  calculate pi 0,</span> <span m='894660'>and then pi of i for all i's.</span>
  </p><p><span m='898410'>We can then answer a question like this.</span>
  </p><p><span m='900775'>After the chain has run for a long time,</span> <span
  m='904120'>how likely is it that at any given random time,</span> <span
  m='907380'>you will find the system with i busy lines?</span> </p><p><span
  m='910740'>Well, it will be pi of i.</span> </p><p><span m='913950'>And also,
  we can interpret the steady-state probabilities</span> <span m='917010'>as
  frequencies.</span> </p><p><span m='918360'>So once I found pi of i, it also
  tells me</span> <span m='921520'>what fraction of the time I will have i busy
  lines.</span> </p><p><span m='925770'>And you can answer that question for
  every possible i.</span> </p><p><span m='929710'>Now, we were initially
  interested in the probability</span> <span m='932770'>that the entire system
  is busy at any point in time,</span> <span m='936160'>in other words, in that
  state here.</span> </p><p><span m='939350'>So if a new phone call gets
  placed,</span> <span m='942160'>it is going to find the system in a random
  state.</span> </p><p><span m='945390'>That random state is described in
  steady-state</span> <span m='947830'>by the probability pi's.</span>
  </p><p><span m='950270'>And the probability that the entire system is
  busy</span> <span m='954020'>is going to be given by pi of B, and this is the
  probability</span> <span m='959270'>that we would like to be small in a
  well-engineered system.</span> </p><p><span m='963740'>So again, given lambda,
  mu, the design question</span> <span m='968900'>is to find B so that this
  probability is small.</span> </p><p><span m='974040'>Could we figure out a
  good value for B by doing</span> <span m='977190'>a back-of-the-envelope
  calculation?</span> </p><p><span m='979760'>Well, let's suppose that lambda is
  30 calls per minute.</span> </p><p><span m='987630'>And let's assume that mu
  is 1/3 so</span> <span m='991180'>that the mean duration is 3 minutes.</span>
  </p><p><span m='994350'>So on average, a call lasts for 3 minutes,</span>
  <span m='998870'>and you get 30 calls on average per minute.</span>
  </p><p><span m='1002440'>Then how many calls would be active on the
  average?</span> </p><p><span m='1005390'>If a call lasted exactly 1 minute,
  then at any time</span> <span m='1008590'>you would have 30 calls being
  active.</span> </p><p><span m='1011500'>Now, a call lasts, on the average, for
  3 minutes.</span> </p><p><span m='1014270'>So by thinking in terms of
  averages,</span> <span m='1016562'>you would expect that, at any time,</span>
  <span m='1018020'>there would be about 90 calls that are active, 3 times
  30.</span> </p><p><span m='1025490'>And if 90 calls are active on the
  average,</span> <span m='1028180'>you could say, OK, I'm going to set up my B
  to be 90.</span> </p><p><span m='1034720'>But that's not very good, because if
  the average number</span> <span m='1037420'>of phone calls that want to happen
  is, on the average, 90,</span> <span m='1041480'>sometimes you are going to
  have 85,</span> <span m='1043740'>and sometimes you'll get 95.</span>
  </p><p><span m='1046319'>And to be sure that the phone calls will go
  through,</span> <span m='1048830'>you probably want to choose your B</span>
  <span m='1050630'>to be a number a little larger than 90.</span> </p><p><span
  m='1054100'>How much larger than 90?</span> </p><p><span m='1056030'>Well,
  this is a question that you can answer numerically.</span> </p><p><span
  m='1060820'>By looking at these formulas, if you</span> <span
  m='1063550'>decide that your acceptable level of service, pi of B,</span>
  <span m='1068210'>has to be less than 1%, then you will</span> <span
  m='1072190'>find that the B that you need to design is to be at least
  106.</span> </p><p><span m='1078820'>So you actually need some margin to
  protect against a situation</span> <span m='1082720'>if suddenly, by chance,
  more people</span> <span m='1084990'>want to talk than on an average
  day.</span> </p><p><span m='1086910'>And if you want to have a good
  guarantee</span> <span m='1088950'>that an incoming person will have a very
  small probability</span> <span m='1091830'>of finding a busy system, here
  1%,</span> <span m='1094690'>then you will need about 106 phone lines.</span>
  </p><p><span m='1098840'>So that's the calculation and the argument</span>
  <span m='1100950'>that Erlang went through a long time ago.</span>
  </p><p><span m='1103730'>It's actually interesting that Erlang did this
  calculation</span> <span m='1106600'>before Markov chains were
  invented.</span> </p><p></p>
uid: 8e6bf2a14463d596239cc6ead054c781
type: courses
layout: video
---
