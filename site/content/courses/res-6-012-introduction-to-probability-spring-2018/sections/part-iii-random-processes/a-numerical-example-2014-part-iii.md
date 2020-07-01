---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: XsowwurOvH0
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    title: Video-YouTube-Stream
    type: Video
    uid: 522178c14cd64a19c1e09ac013273a7c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/XsowwurOvH0/default.jpg'
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 374ba30fa8189ab86f3a6f2f03b25a96
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: XsowwurOvH0
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 81c69a99b6e83cd711d5d8465373a01e
  - id: XsowwurOvH0.srt
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-numerical-example-2014-part-iii/XsowwurOvH0.srt
    title: 3play caption file
    type: null
    uid: c2ddcffd5ad26fe1f55564a78950df78
  - id: XsowwurOvH0.pdf
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-numerical-example-2014-part-iii/XsowwurOvH0.pdf
    title: 3play pdf file
    type: null
    uid: 7ca92d419dce87461c4a068c0153f9eb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a5c3c981e5d4780f2e64bde9841fd366
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b1c9e3589bedd9b5c7f1f6b05c5ecd3c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-04_300k.mp4
    parent_uid: d1e57ef98eca7d92d40a44ccd754d8fb
    title: Video-Internet Archive-MP4
    type: Video
    uid: 221f107aae72ceaffbb4542ed17801e3
inline_embed_id: 15663895anumericalexamplepartiii23383094
order_index: 2294
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: a-numerical-example-2014-part-iii
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-numerical-example-2014-part-iii
title: A Numerical Example — Part III
transcript: >-
  <p><span m='1650'>As a warm-up, just to see how to use steady-state
  probabilities,</span> <span m='5370'>let us look at our familiar
  example.</span> </p><p><span m='7680'>This is a two-state Markov chain,</span>
  <span m='9830'>and we did write down the complete balance equations</span>
  <span m='13330'>for this chain, and found the steady-state
  probabilities</span> <span m='16059'>before.</span> </p><p><span
  m='17320'>Notice that we can find these by using the trick which</span> <span
  m='20160'>we introduced for birth and death processes.</span> </p><p><span
  m='23760'>You cut the chain along this line,</span> <span m='27190'>and argue
  that the frequency of transition of this type</span> <span m='31060'>has to be
  the same as the frequency of transition</span> <span m='33820'>of this
  type.</span> </p><p><span m='35030'>So if you have pi 1 here and pi 2
  here,</span> <span m='39340'>what it means is pi 1 times 0.5, which
  represent</span> <span m='45690'>the frequency of these kind of
  transitions,</span> <span m='48090'>has to be equal to pi 2 times 0.2,</span>
  <span m='52910'>which is this kind of transition, plus pi 1</span> <span
  m='57760'>plus pi 2, the normalization equation.</span> </p><p><span
  m='61940'>And by solving the system of equations,</span> <span m='63770'>you
  obtain the same thing as what we obtained before,</span> <span m='66190'>which
  is the steady-state probabilities of state 1</span> <span m='69940'>and of
  state 2.</span> </p><p><span m='72680'>Let us now try to calculate some
  related quantities.</span> </p><p><span m='76470'>Suppose that you start at
  state 1,</span> <span m='79230'>and you want to calculate this particular
  probability.</span> </p><p><span m='83039'>So you start at state 1, and you
  want</span> <span m='85610'>to know what is the probability that next time
  you</span> <span m='87770'>will be in state 1, and 100 times step later, you
  are still</span> <span m='91750'>in state 1.</span> </p><p><span
  m='93344'>Now, the conditional probabilities</span> <span m='94759'>of two
  things happening is the conditional probability</span> <span m='97470'>of the
  first one happening, x1 equals</span> <span m='99820'>1, given x0 equals 1,
  and given that the first one happens,</span> <span m='103820'>the probability
  that the second one happened-- x100 equals 1,</span> <span m='107990'>given x1
  equals 1, and x0 equals 1.</span> </p><p><span m='113440'>So what is
  this?</span> </p><p><span m='114520'>This first one is the transition
  probability from state 1</span> <span m='118090'>to state 1, p 1 1.</span>
  </p><p><span m='121270'>How about the second probability?</span> </p><p><span
  m='124350'>Because of the Markov property, that information is
  irrelevant,</span> <span m='129169'>and so that probability is r 1 1 in 99
  steps.</span> </p><p><span m='136340'>Now, 99 is possibly a big number,</span>
  <span m='139730'>and so we approximate this quantity,</span> <span
  m='142300'>and we are going to use the steady-state probability</span> <span
  m='144590'>of state 1 for doing that.</span> </p><p><span m='146310'>And that
  gives us an approximation, p 1 1,</span> <span m='150440'>times pi of 1,
  which, then, is 0.5 times 2 over 7.</span> </p><p><span m='158530'>Now, how
  about this expression?</span> </p><p><span m='160660'>Given that you start in
  state 1, what</span> <span m='163530'>is the probability that at time step
  100, you are in 1,</span> <span m='167850'>and time step 101 you are in
  2.</span> </p><p><span m='170960'>By doing the same technique gives</span>
  <span m='172570'>the conditional probability of the first thing
  happening,</span> <span m='177560'>and then, given that thing
  happening,</span> <span m='179450'>the probability that the second one
  happen.</span> </p><p><span m='183450'>x101 equals 2, given x100 equals 1, and
  x0 equals 1.</span> </p><p><span m='189360'>And again, here what we have is r
  1 1 of 100,</span> <span m='195260'>and times-- again, the Markov
  property</span> <span m='199120'>tells us that we can forget about this
  one--</span> <span m='201829'>and this is the probability transition from 1 to
  2, pi 1 2.</span> </p><p><span m='207070'>And again, here, if n equals 100 is
  large enough,</span> <span m='211010'>we can approximate that by pi 1 times p
  1 2.</span> </p><p><span m='218510'>And this, then, 2 over 7 times 0.5
  again.</span> </p><p><span m='224410'>Finally, let's calculate this third
  expression, where,</span> <span m='228150'>again, we start at state 1, and now
  we are asking,</span> <span m='231390'>what is probability that after time
  step 100, you are in 1,</span> <span m='236370'>and 100 steps later, you are
  again in 1?</span> </p><p><span m='240720'>We use the same trick as before,
  this probability</span> <span m='243230'>that the first thing happened, and
  given that,</span> <span m='249074'>the probability of the second one
  happened.</span> </p><p><span m='258880'>Again, this is r 1 1 of 100, and this
  one,</span> <span m='265170'>for the same reason as before, we can forget this
  term.</span> </p><p><span m='268970'>From 100 to 200, you have 100 time steps,
  r 1 1 of 100.</span> </p><p><span m='278304'>And 100 is big enough, so we're
  going</span> <span m='279845'>to approximate both by the same values,</span>
  <span m='283590'>and we get pi 1 square, which is 2 over 7 square.</span>
  </p><p><span m='291070'>Now, in this calculation, we assume that n equals
  99,</span> <span m='295690'>or n equals 100 were big enough-- big</span> <span
  m='299430'>enough so that the limit has taken effect.</span> </p><p><span
  m='302040'>But how do we know that our approximation is good?</span>
  </p><p><span m='304970'>In other words, is n equals 99 or 100 large
  enough?</span> </p><p><span m='317360'>Well, this has something to do with the
  mixing time</span> <span m='320000'>scale of our Markov chain, and by mixing
  time scale,</span> <span m='323320'>I mean, how long does it take for the
  initial states</span> <span m='327040'>to be forgotten?</span> </p><p><span
  m='328490'>So how can you see that here?</span> </p><p><span m='330539'>Well,
  you can first try a simulation.</span> </p><p><span m='336280'>So using any of
  your favorite software, simulate.</span> </p><p><span m='339900'>If you
  calculate, and you look at, as a function of n,</span> <span m='343800'>and
  you draw r 1 1 of n, at n equals 0, this is 1.</span> </p><p><span
  m='350980'>n equals 1, then you have 5, et cetera.</span> </p><p><span
  m='354316'>At 1, this is going to be p 1 1, and p 1 1 was 0.5,</span> <span
  m='359070'>so already it's here.</span> </p><p><span m='360920'>So initially
  it was here, here.</span> </p><p><span m='363660'>And 2 over 7, so this is
  0.5.</span> </p><p><span m='367620'>2 over 7 is here.</span> </p><p><span
  m='369650'>And what we know is that when n goes to infinity,</span> <span
  m='373140'>these things goes to 2 over 7.</span> </p><p><span m='376570'>And
  if you simulate, you will see that it goes very fast.</span> </p><p><span
  m='381870'>So with you, I'm just joining points,</span> <span m='385140'>and
  we will see that n equals 5 already.</span> </p><p><span m='389170'>You are
  very, very close to 2 over 7.</span> </p><p><span m='391670'>So you have
  really an exponential decrease here.</span> </p><p><span m='399130'>In fact,
  if you look at the simulation result,</span> <span m='401570'>and you look at
  n equals 5 already,</span> <span m='404170'>here you have two correct decimal
  already.</span> </p><p><span m='409690'>And for n equals 10, it's correct up
  to five decimals.</span> </p><p><span m='419590'>Or, if you do not want to
  have simulation, but simply</span> <span m='422840'>think in terms of order of
  magnitude-- so here</span> <span m='426504'>it would be another approach
  would</span> <span m='427920'>be order of magnitude type of argument--</span>
  <span m='433600'>and in order to do that, starting here,</span> <span
  m='436180'>on average, how many trials, or how many time steps</span> <span
  m='439490'>would it take in order for you to observe such a transition</span>
  <span m='443130'>here?</span> </p><p><span m='443690'>Well, you use the
  geometric, random variable,</span> <span m='446640'>and this is the amount of
  time, on average,</span> <span m='449620'>until you have success.</span>
  </p><p><span m='450850'>And it is 1 over the probability here,</span> <span
  m='453980'>so it takes an average two time steps to go from here to
  here.</span> </p><p><span m='459220'>And to go from here to here, it takes, on
  average,</span> <span m='462020'>1 over 0.2, which is about five time
  steps.</span> </p><p><span m='467000'>So as an order of magnitude,
  given</span> <span m='469150'>you started here in state 1, after, on
  average,</span> <span m='473750'>about 10 iterations, there will be some
  randomness.</span> </p><p><span m='477700'>There is a high likelihood, on
  average,</span> <span m='479350'>that you will go there and come here.</span>
  </p><p><span m='481290'>And then if you do n equals 100, which</span> <span
  m='484250'>is 10 times that, in terms of order of magnitude,</span> <span
  m='486730'>it looks like n is large enough.</span> </p><p><span m='488810'>So
  that would be a back to the envelope calculation.</span> </p><p><span
  m='492630'>Now, this kind of calculation is useful in general, not just</span>
  <span m='496060'>here.</span> </p><p><span m='496680'>So for example, let's do
  it again.</span> </p><p><span m='498830'>Assume that instead of 0.5 here, the
  probability that you had</span> <span m='503240'>was 0.999.</span>
  </p><p><span m='505450'>And maybe here, instead of 0.8, it was 0.998.</span>
  </p><p><span m='511460'>Now, in order to observe such a transition,</span>
  <span m='514400'>it will take, on average, since this number here</span> <span
  m='517760'>would become 0.001, it would take,</span> <span m='521140'>on
  average, about 1,000 time steps</span> <span m='524080'>in order to observe
  one such transition.</span> </p><p><span m='526720'>So if you look at time
  steps of that order,</span> <span m='530010'>it will not be enough if your
  chain were of this type.</span> </p><p><span m='533980'>After n equals 100,
  the likelihood</span> <span m='536840'>would be that you will still be
  here,</span> <span m='539160'>so the initial state, or the initial
  condition,</span> <span m='542180'>would matter still.</span> </p><p><span
  m='543820'>So you would take about 1,000 to get there,</span> <span
  m='545920'>and then here it would have 0.002.</span> </p><p><span
  m='549240'>That means that, on average, from here you</span> <span
  m='551920'>would take about 500 iterations before you observe</span> <span
  m='554510'>that for the first time, so the same order of magnitude.</span>
  </p><p><span m='557780'>So in order to get enough randomness here,</span>
  <span m='561560'>a good rule would be to multiply this 1,000 by 10.</span>
  </p><p><span m='564960'>So maybe with n equals 10,000, you</span> <span
  m='568420'>would feel confident enough, in that specific case,</span> <span
  m='572000'>in order to use this kind of approximation</span> <span
  m='574290'>that we have used here.</span> </p><p><span m='576240'>And finally,
  for those interested,</span> <span m='577930'>you can study that by
  theory.</span> </p><p><span m='580330'>And here there is an entire
  field</span> <span m='583660'>that try to study how fast a Markov chain
  converges</span> <span m='587220'>to steady state, and the so-called mixing
  time.</span> </p><p><span m='591220'>And it turns out that for these Markov
  chain,</span> <span m='594420'>you can say that the convergence, or the
  rate</span> <span m='597360'>of convergence, is of the order c</span> <span
  m='599770'>at the power n, where c is a number that is between 0 and 1.</span>
  </p><p><span m='605940'>And the closer c is to 1, the slower the convergence
  is.</span> </p><p><span m='610070'>And the closer c is to 0, the faster the
  convergence is.</span> </p><p><span m='615320'>And for example, here, for our
  initial case,</span> <span m='618920'>the c was 0.3, so that was the first
  case</span> <span m='622780'>for the second chain.</span> </p><p><span
  m='624490'>With these kind of probabilities, 0.99 and 0.998,</span> <span
  m='628980'>the c would be 0.997.</span> </p><p></p>
uid: d1e57ef98eca7d92d40a44ccd754d8fb
type: courses
layout: video
---
