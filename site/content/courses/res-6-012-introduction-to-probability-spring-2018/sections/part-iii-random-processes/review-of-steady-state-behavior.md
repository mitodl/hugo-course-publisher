---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: rRwWYRh8Ypg
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    title: Video-YouTube-Stream
    type: Video
    uid: 594a865800e0c2ee0ba4f5ff0a2c4b39
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/rRwWYRh8Ypg/default.jpg'
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2990fa16aa06f3f5fdc6ac94b8d36799
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: rRwWYRh8Ypg
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6915bbd5eee2a2901f448cabdb3fdd00
  - id: rRwWYRh8Ypg.srt
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/review-of-steady-state-behavior/rRwWYRh8Ypg.srt
    title: 3play caption file
    type: null
    uid: feafccdbec53c4c4eff4c1c3d4668bca
  - id: rRwWYRh8Ypg.pdf
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/review-of-steady-state-behavior/rRwWYRh8Ypg.pdf
    title: 3play pdf file
    type: null
    uid: 8024711ffd7aae5a355430827840e3b3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a4c2116aaf7b391f6f9ea7102691694b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9a541b93400c8e2b3f344c321bed78cc
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-03_300k.mp4
    parent_uid: 2b77b45d20c856667a7cd691639d20e1
    title: Video-Internet Archive-MP4
    type: Video
    uid: 9fcf37b2f766167abed02cff03f90f43
inline_embed_id: 45830411reviewofsteadystatebehavior71241233
order_index: 2285
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: review-of-steady-state-behavior
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/review-of-steady-state-behavior
title: Review of Steady-State Behavior
transcript: >-
  <p><span m='880'>So let us first review the steady state</span> <span
  m='3330'>behavior of Markov chains.</span> </p><p><span m='5670'>Consider
  again the following example.</span> </p><p><span m='7940'>This chain has some
  recurrent states, some transient states,</span> <span m='11430'>and a single
  recurrent class.</span> </p><p><span m='13660'>So for example, state 9 is
  recurrent.</span> </p><p><span m='18640'>State 3 is recurrent.</span>
  </p><p><span m='20090'>State 5 is recurrent.</span> </p><p><span m='21990'>And
  why are they recurrent?</span> </p><p><span m='23390'>Because whenever you are
  in 9, no matter where you go,</span> <span m='27780'>there's always a way to
  come back.</span> </p><p><span m='30460'>You can go to 3 and come back, go 5
  and come back.</span> </p><p><span m='35620'>And actually, this is a recurrent
  class.</span> </p><p><span m='41220'>And this is a recurrent class, because
  all</span> <span m='44030'>these recurrent states communicate between each
  other.</span> </p><p><span m='47670'>What about the other states-- well they
  are not recurrent.</span> </p><p><span m='50160'>So for example, state 1-- and
  once you are here,</span> <span m='53660'>there is a possibility that you go
  there,</span> <span m='55600'>and you will never come back.</span>
  </p><p><span m='56810'>So it can not be recurrent.</span> </p><p><span
  m='57934'>So it's transient.</span> </p><p><span m='59360'>What about
  4?</span> </p><p><span m='60000'>4 also has the possibility at one point to go
  there.</span> </p><p><span m='63050'>And then from there, it will never come
  back.</span> </p><p><span m='65060'>So 4 is also transient.</span>
  </p><p><span m='67160'>As for 2, no matter where it goes, well,</span> <span
  m='70310'>it's going to reach or touch a transient state.</span> </p><p><span
  m='73030'>So by definition, it will be also transient.</span> </p><p><span
  m='74960'>So they have three transient states</span> <span m='77320'>and three
  recurrent states.</span> </p><p><span m='79680'>Also, this recurrent class is
  not periodic.</span> </p><p><span m='83610'>So it's aperiodic.</span>
  </p><p><span m='86780'>And why is it not periodic?</span> </p><p><span
  m='89480'>Well, here, there is a simple way to tell.</span> </p><p><span
  m='92940'>We have the existence of a self-transition probability.</span>
  </p><p><span m='96610'>And that's enough to show that this recurrent class is
  not</span> <span m='100490'>periodic.</span> </p><p><span m='101810'>So this
  is one of the nicest possible Markov</span> <span m='104690'>chains in the
  sense that they have the following property--</span> <span m='109900'>the
  probability that you find yourself</span> <span m='111700'>at some particular
  state j.</span> </p><p><span m='115050'>At time n, when n is very large,
  it</span> <span m='117580'>converges to a steady-state value</span> <span
  m='119310'>that we denote by pi of j.</span> </p><p><span m='123510'>There are
  two aspects to this property.</span> </p><p><span m='126410'>First, the limit
  exists, so the probability of state j</span> <span m='130320'>does not
  fluctuate.</span> </p><p><span m='131830'>It settles to something in the long
  run.</span> </p><p><span m='135380'>And furthermore, that probability</span>
  <span m='137110'>is not affected by i.</span> </p><p><span m='141170'>Now, if
  we don't know where the chain started, and we</span> <span m='144500'>want to
  know the unconditional probability of being in state j</span> <span
  m='148010'>in the long run, when n is large,</span> <span m='155120'>then
  either we are given an initial distribution</span> <span m='158180'>over the
  states, or we can choose</span> <span m='161310'>any initial
  distribution.</span> </p><p><span m='162610'>For example, we can assume that
  all initial states are equally</span> <span m='165430'>likely-- or any other
  type of distributions.</span> </p><p><span m='169650'>And then you can
  condition over all the initial states,</span> <span m='172660'>use the total
  probability theorem,</span> <span m='174590'>and you're going to get the same
  answer, pi of j, in the limit.</span> </p><p><span m='177970'>Let's see how to
  do that.</span> </p><p><span m='179870'>So this is the summation of all
  i.</span> </p><p><span m='182892'>So you condition on that state i.</span>
  </p><p><span m='185890'>So it's Rij of n times the initial probability</span>
  <span m='191340'>distribution of your choosing.</span> </p><p><span
  m='195040'>So this is the total probability theorem.</span> </p><p><span
  m='197079'>Now, in the limits, when n goes to infinity,</span> <span
  m='200360'>this goes to pi of j, independent of i.</span> </p><p><span
  m='205050'>So you can take this expression, the limit,</span> <span
  m='207290'>and take it out of the summation.</span> </p><p><span
  m='210030'>And then you have the summation of-- probability of x0</span> <span
  m='213730'>equals 1.</span> </p><p><span m='215470'>These are probabilities,
  so they sum to 1.</span> </p><p><span m='221470'>So in the end, you have that
  converges to pi of j.</span> </p><p><span m='227850'>So the conditional
  probability, given the initial state,</span> <span m='233460'>is in the limit,
  the same as the unconditional probability</span> <span m='238000'>when n is
  large.</span> </p><p><span m='239820'>And in that sense, it tells us that x of
  n and x of 0</span> <span m='246030'>are approximately independent.</span>
  </p><p><span m='248570'>They become independent in the limit as n goes to
  infinity.</span> </p><p><span m='253180'>So if the Markov chain has run for a
  long time,</span> <span m='256620'>and you are asked the question, "Where is
  the chain now,"</span> <span m='260610'>then your answer should be, I don't
  know.</span> </p><p><span m='263060'>It's random.</span> </p><p><span
  m='264090'>But it's going to be in a particular j</span> <span m='267670'>with
  that particular probability, pi of j.</span> </p><p><span m='271590'>So in
  that sense, the steady-state probabilities</span> <span m='273700'>are
  valuable information.</span> </p><p><span m='276420'>So how do we compute
  them?</span> </p><p><span m='278730'>Well, for transient states, like these,
  they are 0.</span> </p><p><span m='283290'>So pi of 1 is 0.</span>
  </p><p><span m='285520'>Pi of 2 is 0.</span> </p><p><span m='287320'>And pi of
  4 is 0.</span> </p><p><span m='290820'>And why is that?</span> </p><p><span
  m='292050'>Well, if your initial state were one of the states here,</span>
  <span m='295850'>the probability of being in here is 0, no matter what.</span>
  </p><p><span m='299159'>But even if you started here initially,</span> <span
  m='301750'>in one of these states, you might, for a while,</span> <span
  m='304180'>fluctuate and turn around like that.</span> </p><p><span
  m='306960'>But eventually, after a finite amount of time,</span> <span
  m='310000'>you will go to that class and never come back to 1.</span>
  </p><p><span m='314170'>So in the long run, the probability</span> <span
  m='316020'>of finding yourself in state 1 will be 0.</span> </p><p><span
  m='320110'>And this is the same for 2 and 4.</span> </p><p><span
  m='323100'>Now, how do we calculate these?</span> </p><p><span
  m='326050'>Well, for these states in the recurrent class,</span> <span
  m='329400'>we compute them by solving a linear system of equations,</span>
  <span m='333210'>which are called the balance equation-- these--</span> <span
  m='336990'>together with an extra condition.</span> </p><p><span
  m='339450'>The normalization equation here has</span> <span m='342700'>to be
  satisfied, because these are probabilities,</span> <span m='345560'>and they
  have to sum up to 1.</span> </p><p><span m='348420'>And we have seen that the
  system of m plus 1 equation</span> <span m='352800'>provides a unique solution
  to this kind of system</span> <span m='356120'>for the recurrent class.</span>
  </p><p><span m='357510'>So you would apply that to that recurrent
  class.</span> </p><p><span m='360330'>And in that example, you have three
  states,</span> <span m='363520'>so you would choose m equals 3 for that
  example.</span> </p><p><span m='367440'>And you would solve the system to get
  the pi j.</span> </p><p><span m='370930'>Now, what if we had multiple
  recurrent classes?</span> </p><p><span m='375720'>Consider this chain.</span>
  </p><p><span m='377520'>It is an expanded version of the previous one</span>
  <span m='380200'>with additional states.</span> </p><p><span m='381910'>Some
  of these are recurrent, and one is transient.</span> </p><p><span
  m='385550'>But now we have two recurrent classes.</span> </p><p><span
  m='389640'>And that was our 1 class, so class 1.</span> </p><p><span
  m='394650'>And now we have a second recurrent class, class 2.</span>
  </p><p><span m='402180'>So what happens in the long run, when</span> <span
  m='404370'>you have situations like that?</span> </p><p><span m='406320'>Well,
  in the long run, if you start from here,</span> <span m='410030'>you're going
  stay here.</span> </p><p><span m='412780'>And in some sense, the study of that
  recurrent class</span> <span m='415620'>is the same as the study of that
  recurrent class.</span> </p><p><span m='418150'>And in order to find the
  steady-state probabilities</span> <span m='420950'>of these states, assuming
  that you started in one of these,</span> <span m='424360'>will be exactly the
  same as before.</span> </p><p><span m='426380'>So you will use the same
  system, with m equals 3 here.</span> </p><p><span m='433030'>Now, if you had
  started here instead,</span> <span m='435670'>again, this is a recurrent
  class,</span> <span m='437830'>and you have m equals 2 states here.</span>
  </p><p><span m='440670'>And in order to find what is the steady-state
  probabilities</span> <span m='443690'>of these two states, you could use the
  same kind of result</span> <span m='447960'>here, but you apply it with m
  equals 2 in isolation.</span> </p><p><span m='452130'>So you just concentrate
  on that.</span> </p><p><span m='455090'>If, on the other hand, your Markov
  chain started from here,</span> <span m='458560'>for example, for that
  specific example,</span> <span m='460880'>you're guaranteed that the next
  transition you'll end up here.</span> </p><p><span m='463630'>And then you can
  do the same thing as before.</span> </p><p><span m='466040'>We still know that
  the steady-state probability of 8</span> <span m='469850'>will be 0 and 0 and
  0 and 0.</span> </p><p><span m='472650'>Now, what would happen if you started
  from here,</span> <span m='475750'>from one of these states?</span>
  </p><p><span m='477590'>Well again, for a while, you might</span> <span
  m='480280'>travel throughout this system here.</span> </p><p><span
  m='482570'>But eventually, you're going to move away from that.</span>
  </p><p><span m='485230'>And you will either go through a transition
  going</span> <span m='488100'>into that recurrent class via this
  transition</span> <span m='492180'>or via this transition.</span> </p><p><span
  m='493460'>And once you're in there, essentially, the chain</span> <span
  m='496910'>will remain there.</span> </p><p><span m='498260'>And so you do the
  same calculation as before.</span> </p><p><span m='500580'>And if, on the
  other hand, you transition away from that class</span> <span m='504850'>and
  arrived in this recurrent class,</span> <span m='508270'>then you would apply
  the result that you had here.</span> </p><p><span m='511800'>So in some sense,
  conditional on the fact that you left</span> <span m='516740'>the states and
  you arrived there--</span> <span m='518480'>in that conditional world, you can
  isolate yourself and really</span> <span m='522179'>solve the problem for that
  class-- and the same</span> <span m='524840'>from that class.</span>
  </p><p><span m='526190'>Now, of course, this raises the question, if I start
  from here,</span> <span m='530580'>how do I know whether I'm going to get here
  or here?</span> </p><p><span m='535390'>Well, we don't know.</span>
  </p><p><span m='537090'>It's random.</span> </p><p><span m='538430'>So we will
  be interested in calculating the probabilities</span> <span m='541160'>that
  eventually you end up here versus here.</span> </p><p><span m='545840'>And
  this is something that we are</span> <span m='547380'>going to do towards the
  end of today's lecture.</span> </p><p></p>
uid: 2b77b45d20c856667a7cd691639d20e1
type: course
layout: video
---
