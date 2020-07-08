---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: iUF135CGTeI
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    title: Video-YouTube-Stream
    type: Video
    uid: 22f40776917607778ca644bfb4513abc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/iUF135CGTeI/default.jpg'
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b8d05891b4bf9cfddab2a03309dc9e65
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: iUF135CGTeI
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ccd55ac3fb6ee0199aa19e0105ec69aa
  - id: iUF135CGTeI.srt
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/expected-time-to-absorption/iUF135CGTeI.srt
    title: 3play caption file
    type: null
    uid: c4e50a14dfc632086652fd760ef50883
  - id: iUF135CGTeI.pdf
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/expected-time-to-absorption/iUF135CGTeI.pdf
    title: 3play pdf file
    type: null
    uid: b9fed31329f211726c31a6f9453e3903
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 43baa369d106c803a878eef19c59e0ce
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 3a9123d31d4563e3abe087c96525fc5a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-07_300k.mp4
    parent_uid: 2cab7ce504b05abb83e54bd773e84341
    title: Video-Internet Archive-MP4
    type: Video
    uid: a034f6c898178ab8e57a43e60a74c642
inline_embed_id: 99741417expectedtimetoabsorption95826979
order_index: 2321
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: expected-time-to-absorption
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/expected-time-to-absorption
title: Expected Time to Absorption
transcript: >-
  <p><span m='1300'>In this video, let us look at a second quantity of
  interest</span> <span m='4640'>that has to do with absorbing states.</span>
  </p><p><span m='7210'>Now that we know how to calculate</span> <span
  m='8910'>the probability of getting to a given absorbing state,</span> <span
  m='12140'>we would like to know how long it would take to get to it.</span>
  </p><p><span m='15110'>Let us first deal with that question</span> <span
  m='17120'>when we have only one absorbing state.</span> </p><p><span
  m='19950'>Let us consider the following Markov chain, which</span> <span
  m='22900'>is a little simpler than the one that we</span> <span m='24870'>had
  in the previous video.</span> </p><p><span m='27370'>We have transient
  states.</span> </p><p><span m='28740'>One, two, and three are transient
  states.</span> </p><p><span m='31850'>And we have one recurrent state,
  four.</span> </p><p><span m='34780'>And that recurrent state four is an
  absorbing state,</span> <span m='37930'>because once you get to it you stay
  there forever.</span> </p><p><span m='42630'>So in this simple example, the
  absorption probability to four</span> <span m='47720'>is trivially one.</span>
  </p><p><span m='49420'>No matter where you start, with probability one</span>
  <span m='52170'>you're guaranteed that eventually you will reach four.</span>
  </p><p><span m='56460'>But the question of interest is to know</span> <span
  m='58990'>how long would it take to get to four.</span> </p><p><span
  m='61590'>In other words, how many transitions</span> <span m='63710'>would
  you have to do until you reach four?</span> </p><p><span m='66460'>Of course
  we don't know.</span> </p><p><span m='68200'>It is a random variable.</span>
  </p><p><span m='70250'>In fact, it's more than one random variable.</span>
  </p><p><span m='72900'>It would depend probably on where you started.</span>
  </p><p><span m='76320'>Starting from two, one, or three, or four,</span> <span
  m='80410'>would lead to different random variables.</span> </p><p><span
  m='83020'>We are going to be interested in looking</span> <span m='85270'>at
  their expectation, or the expected value</span> <span m='88330'>of these
  random variables.</span> </p><p><span m='89970'>More precisely, let us define
  exactly what we want to do,</span> <span m='95050'>which is to find the
  expected number of transitions--</span> <span m='97990'>that we're going to
  call him Mu of i--</span> <span m='100210'>until reaching four, which is our
  absorbing state,</span> <span m='103450'>given that the initial state is i,
  one of these four states.</span> </p><p><span m='108170'>First as a warm up,
  let's do some quick calculation.</span> </p><p><span m='112970'>If you didn't
  have this part here, and instead</span> <span m='116509'>we were looking just
  at this portion here.</span> </p><p><span m='121140'>Make this one disappear
  like this,</span> <span m='123750'>and replace it by a loop of probability
  0.8.</span> </p><p><span m='127960'>So now if you start from state two, with
  probability 0.2</span> <span m='133170'>you will go to four, or with
  probability 0.8</span> <span m='136820'>you will remain in two.</span>
  </p><p><span m='138880'>And now you ask yourself, what is the number</span>
  <span m='141940'>of trials you have to do until you reach four?</span>
  </p><p><span m='146540'>Well we know what it is.</span> </p><p><span
  m='148400'>This is a geometric random variable</span> <span m='150780'>with
  the probability of success, which</span> <span m='152400'>is a success being
  going to four, of 0.2.</span> </p><p><span m='156430'>So the expected number
  of trials, starting from two,</span> <span m='161050'>that you will have to go
  through until you reach four,</span> <span m='164040'>will be 1 over this
  probability.</span> </p><p><span m='166790'>So 1/0.2, which is 5.</span>
  </p><p><span m='175090'>Now that we have done this quick calculation,</span>
  <span m='177770'>it should be clear that if we go back to the previous
  Markov</span> <span m='181090'>chain that we had here, the expected time, Mu
  2,</span> <span m='185070'>would probably be bigger than 5.</span>
  </p><p><span m='188050'>Since from two, not only you have the
  probability</span> <span m='190380'>of going to four, but you might
  have</span> <span m='192070'>some chance of traveling there.</span>
  </p><p><span m='194800'>So probably the number of times until you reach
  four</span> <span m='197890'>would be bigger than 5.</span> </p><p><span
  m='199840'>Let's see.</span> </p><p><span m='201530'>Well, first of all, if
  you start at four, the expected</span> <span m='204912'>number of transitions
  until reaching four</span> <span m='206620'>would obviously be zero.</span>
  </p><p><span m='208140'>So here, for i equals 4, you indeed get zero.</span>
  </p><p><span m='212070'>What about for the others?</span> </p><p><span
  m='213510'>Well again, this is what we would like to calculate.</span>
  </p><p><span m='216650'>How are we going to do that?</span> </p><p><span
  m='218270'>Well, the argument is going to be</span> <span m='220040'>of the
  same nature as the one that we used before.</span> </p><p><span m='223880'>We
  are going to think in terms of tree,</span> <span m='226160'>and consider
  possible options starting from a given state.</span> </p><p><span
  m='229980'>So let's do this calculation from two.</span> </p><p><span
  m='233160'>So you are in two, and we're going to build that tree here.</span>
  </p><p><span m='237150'>So you are in state two.</span> </p><p><span
  m='238920'>What could happen next?</span> </p><p><span m='240990'>Well, you
  can either transition to four</span> <span m='244580'>with the probability
  0.2.</span> </p><p><span m='248390'>Or with probability 0.8, you end up in
  one.</span> </p><p><span m='253510'>And you have done one transition
  here.</span> </p><p><span m='255770'>So plus one transition.</span>
  </p><p><span m='257140'>So you are interested in calculating Mu 2.</span>
  </p><p><span m='260120'>After one transition you either end up in four, in
  that case</span> <span m='263750'>you stop, you're done.</span> </p><p><span
  m='265712'>In other words the resulting value</span> <span m='268090'>here
  would be Mu 4, which we know is 0.</span> </p><p><span m='274040'>Or you are
  in one.</span> </p><p><span m='275330'>And now, given that you are in
  one,</span> <span m='277409'>you want to find the expected number of
  transitions</span> <span m='281030'>until reaching four, which is exactly
  defined here.</span> </p><p><span m='284909'>So here what you have is Mu
  1.</span> </p><p><span m='287570'>And now you can use the total expectation
  theorem</span> <span m='291000'>to put all of these things together.</span>
  </p><p><span m='294270'>What it means is that Mu 2 will be 1,</span> <span
  m='297700'>and you have one transition.</span> </p><p><span m='300360'>And
  then after you do that transition with probability</span> <span
  m='303540'>0.2, you know that you're going to be in four.</span> </p><p><span
  m='307070'>And the expected value then will be</span> <span m='311470'>Mu 4
  plus 0.8, which is the probability that</span> <span m='316440'>end up in
  state one.</span> </p><p><span m='318470'>And conditional on that, the
  remaining expected iterations</span> <span m='322990'>until reaching four will
  be Mu 1.</span> </p><p><span m='325610'>Now this one is of course 0, so what
  you end up with</span> <span m='328330'>is 1 plus 0.8 Mu 1.</span>
  </p><p><span m='333340'>So you get a relation between Mu 2 and Mu 1.</span>
  </p><p><span m='339700'>Now you can do the same thing if you start from
  one</span> <span m='342800'>or start from three.</span> </p><p><span
  m='344260'>So let's do it again from one.</span> </p><p><span m='346880'>So
  you're interested in one.</span> </p><p><span m='349100'>After one transition,
  so plus one, what happened?</span> </p><p><span m='352740'>Well, with the
  probability 0.6, you end up in two.</span> </p><p><span m='359680'>And with
  the probability 0.4, you end up in three.</span> </p><p><span m='365260'>And
  from three, if you start in state three,</span> <span m='369610'>after one
  transition what happened?</span> </p><p><span m='372890'>Well, with the
  probability 0.5 you would end up in state one.</span> </p><p><span
  m='379620'>And then the expected number of transitions from state one</span>
  <span m='383210'>until reaching four will be Mu 1.</span> </p><p><span
  m='386540'>Or with probability 0.5, you end up in two.</span> </p><p><span
  m='393110'>So again here, if you look at these three here,</span> <span
  m='397030'>this is a system of three equations,</span> <span m='399030'>three
  linear equations with three unknowns.</span> </p><p><span m='402190'>It has a
  unique solution.</span> </p><p><span m='404170'>I will let you do the
  calculation,</span> <span m='405690'>let me give you the result.</span>
  </p><p><span m='408080'>What you obtain is Mu 1 will be 110/8.</span>
  </p><p><span m='415177'>And the reason I'm writing it this way</span> <span
  m='416760'>is so that we can compare them.</span> </p><p><span m='418620'>Mu 2
  will be 96/8, which is 12.</span> </p><p><span m='425030'>And Mu 3 is
  111/8.</span> </p><p><span m='430990'>So here again, a quick sanity
  check,</span> <span m='434500'>the number that we get here, 12, is indeed
  bigger than the five</span> <span m='438670'>that we have obtained when we
  restricted ourselves</span> <span m='440810'>to this set.</span> </p><p><span
  m='442240'>So we do have Mu 2 greater than 5.</span> </p><p><span
  m='446540'>Now as the relative value between Mu 1, Mu 2, and Mu 3,</span>
  <span m='451530'>it sort of makes sense.</span> </p><p><span m='453630'>Mu 2,
  the state two, is the one closest to four,</span> <span m='457430'>it is the
  one actually linked to four.</span> </p><p><span m='459540'>So in some sense,
  the expected number</span> <span m='461460'>of transitions to reach four will
  always</span> <span m='464090'>be the smallest one, because starting from the
  other states,</span> <span m='466909'>you will have to go to two before going
  to four.</span> </p><p><span m='471310'>And in general, if you have a general
  Markov chain</span> <span m='475630'>with transient states and one absorbing
  state,</span> <span m='479270'>and you're asking yourself, what is the
  expected time</span> <span m='482630'>to absorption to that unique absorbing
  state,</span> <span m='485750'>it will be the unique solution from the system
  of equations</span> <span m='489310'>given here.</span> </p><p><span
  m='491570'>Where the pij are the transition probabilities of your
  Markov</span> <span m='496230'>chain.</span> </p><p><span m='497530'>Now we
  have seen how to solve this problem when</span> <span m='500320'>we have one
  unique absorbing state.</span> </p><p><span m='504020'>What happens if you
  have more than one absorbing state?</span> </p><p><span m='507370'>Like for
  example, in this case.</span> </p><p><span m='510680'>Well, first of all, a
  quick note.</span> </p><p><span m='512940'>You realize here that you have one,
  two, and three, three</span> <span m='517140'>transition states.</span>
  </p><p><span m='518490'>And indeed here, you have four as an absorbing
  state,</span> <span m='521469'>it's a recurrent state, and once you get to
  it</span> <span m='523740'>you stay there forever.</span> </p><p><span
  m='525700'>And five is also a recurrent state, and once you get to five</span>
  <span m='529500'>you stay there forever.</span> </p><p><span m='532100'>So
  four and five are both absorbing states.</span> </p><p><span m='535710'>And in
  a previous video, we had seen</span> <span m='538010'>how to calculate the
  probability of ending up in four,</span> <span m='541420'>as opposed to ending
  up in five.</span> </p><p><span m='543520'>What we know is that the
  probability of ending up</span> <span m='546060'>in four plus the probability
  of ending up in five will be 1.</span> </p><p><span m='548880'>But since the
  probability of ending up in four is not 1,</span> <span m='552940'>trying to
  find the expected number of steps</span> <span m='556050'>until you reach four
  specifically</span> <span m='559410'>does not make much sense.</span>
  </p><p><span m='561330'>That expectation of that random variable is a random
  variable,</span> <span m='564290'>but that expectation will be
  infinity.</span> </p><p><span m='566160'>Why?</span> </p><p><span
  m='567130'>Because there is a positive probability</span> <span
  m='569590'>that you will end up in five.</span> </p><p><span m='570980'>And if
  you end up in five, once you get there,</span> <span m='573930'>the number of
  steps to go to four will be infinity.</span> </p><p><span m='577560'>So it
  makes more sense to think about what</span> <span m='580520'>is the expected
  time to any absorbing state.</span> </p><p><span m='583830'>So to either four
  or five.</span> </p><p><span m='586205'>Now If you're interested in that
  quantity,</span> <span m='589280'>one trick in order to solve that problem
  using the technique</span> <span m='592730'>that we have seen so far, is to
  combine four and five into one</span> <span m='597920'>mega state, call it
  whatever, six.</span> </p><p><span m='602780'>Right?</span> </p><p><span
  m='603280'>And six is a combination of four and five.</span> </p><p><span
  m='605530'>It's a big absorbing state.</span> </p><p><span m='608320'>And once
  you're in six, you stay in six.</span> </p><p><span m='612710'>And now you
  just have to define exactly what</span> <span m='615240'>is the probability of
  transition from one, two,</span> <span m='617970'>and three, to that mega
  state.</span> </p><p><span m='620450'>Well here from two, you had, originally,
  two arcs.</span> </p><p><span m='624160'>You're going to combine these two
  into one arc,</span> <span m='627610'>and you're going to sum these
  probabilities.</span> </p><p><span m='629530'>So you had 0.3 and 0.2.</span>
  </p><p><span m='632130'>You put in here 0.5.</span> </p><p><span
  m='636130'>And on this arc you had only one arc, so you maintain that
  arc.</span> </p><p><span m='641470'>And you have that probability that you
  had,</span> <span m='645390'>which I believe was 0.2.</span> </p><p><span
  m='649930'>Now you go back, if you look at the situation now,</span> <span
  m='652710'>it's very close to the one that we have here.</span> </p><p><span
  m='655940'>All right?</span> </p><p><span m='656500'>See this four that you
  have here is the six.</span> </p><p><span m='659400'>Now of course, you have
  another arc here like that,</span> <span m='661604'>but that's fine.</span>
  </p><p><span m='662270'>You can stay add the arc here and put it as
  0.2.</span> </p><p><span m='667070'>And then you reduce this one to 0.3</span>
  <span m='669720'>to make it square with here.</span> </p><p><span
  m='671270'>But the idea on how to solve that is identical to this one.</span>
  </p><p><span m='674610'>You would have to change a little bit of this,</span>
  <span m='676570'>but this is the same technique.</span> </p><p><span
  m='678800'>So in the end, we have seen a technique</span> <span m='682420'>to
  find the expected time to absorptions whenever</span> <span m='685320'>you
  have absorbing states in a given Markov chain.</span> </p><p></p>
uid: 2cab7ce504b05abb83e54bd773e84341
type: courses
layout: video
---
