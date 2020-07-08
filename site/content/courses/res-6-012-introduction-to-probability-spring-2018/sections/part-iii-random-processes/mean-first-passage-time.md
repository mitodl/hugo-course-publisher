---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: BW_EHmZf2pM
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    title: Video-YouTube-Stream
    type: Video
    uid: fdd44676e80b4b7a87e7436060be53cb
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/BW_EHmZf2pM/default.jpg'
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 53cde20b5a3c665ee9574da66d9755a9
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: BW_EHmZf2pM
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f52c765e586334ef5aa64235b6ef2790
  - id: BW_EHmZf2pM.srt
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/mean-first-passage-time/BW_EHmZf2pM.srt
    title: 3play caption file
    type: null
    uid: ef41c40d7011efd3817b58f4caf548e9
  - id: BW_EHmZf2pM.pdf
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/mean-first-passage-time/BW_EHmZf2pM.pdf
    title: 3play pdf file
    type: null
    uid: 7d3a2b3f1750bdad59825f0bddf93968
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: af7ed707c90613a10c06f1523342a777
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5488da299b306a61e50086fb34467815
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-08_300k.mp4
    parent_uid: 5d0a5f8633defba6ec4c99d01913811d
    title: Video-Internet Archive-MP4
    type: Video
    uid: a05292ca1af3f4ecdd88d714974881c2
inline_embed_id: 32037605meanfirstpassagetime23536385
order_index: 2330
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: mean-first-passage-time
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/mean-first-passage-time
title: Mean First Passage Time
transcript: >-
  <p><span m='1680'>In this video, we continue our exploration</span> <span
  m='4660'>of quantities of interest associated</span> <span m='6650'>with the
  short-term behavior of Markov chain.</span> </p><p><span m='9740'>This time,
  we suppose that we have a Markov chain composed</span> <span m='13060'>of a
  single recurrent class, such as this one.</span> </p><p><span m='16700'>Here,
  we have our recurrent class.</span> </p><p><span m='18160'>And these are
  transient states.</span> </p><p><span m='22830'>We also assume that we're
  interested</span> <span m='24770'>in a specific recurrent state-- let's say
  9.</span> </p><p><span m='27820'>So this is my state s.</span> </p><p><span
  m='31170'>And we will assume that the Markov chain starts</span> <span
  m='33620'>from a given initial state, state i,</span> <span m='36120'>and
  assume that i is 1.</span> </p><p><span m='40470'>Now the question we ask is,
  given that you started in 1,</span> <span m='45280'>how long is it going to
  take to reach 9 for the first time?</span> </p><p><span m='50070'>We know this
  is a recurrent class,</span> <span m='51840'>so we know that the Markov chain
  eventually</span> <span m='53950'>will come to that class and circulate
  here.</span> </p><p><span m='57610'>So you know that the Markov chain will get
  to that state 9.</span> </p><p><span m='60950'>You are interested in knowing
  when</span> <span m='62880'>it does so for the first time.</span> </p><p><span
  m='64819'>Of course, we don't know for sure.</span> </p><p><span
  m='66740'>This is random.</span> </p><p><span m='67810'>It is a random
  variable.</span> </p><p><span m='69420'>And let's try to calculate the
  expected value</span> <span m='72640'>of this random variable.</span>
  </p><p><span m='74220'>More precisely, this is what we would like to
  do.</span> </p><p><span m='77230'>We would like to find the mean first passage
  time from i</span> <span m='81090'>to s, from any starting state i.</span>
  </p><p><span m='84080'>Here, we're going to illustrate that with 1.</span>
  </p><p><span m='87440'>And mathematically, this is what we have here.</span>
  </p><p><span m='90030'>So here again, what you have is that the Markov
  chain</span> <span m='93440'>started in state i, at time 0.</span>
  </p><p><span m='96890'>And now you are looking at this set here.</span>
  </p><p><span m='99950'>And the set records all the time n such</span> <span
  m='103620'>that your Markov chain, Xn, is in the state s of interest.</span>
  </p><p><span m='108570'>So out of this set, you're looking at the minimum,
  n,</span> <span m='112630'>that verifies that.</span> </p><p><span
  m='114030'>So this is going to be a random variable.</span> </p><p><span
  m='116520'>And you take the expected value of that.</span> </p><p><span
  m='119100'>And this is what we call the mean first passage time from i</span>
  <span m='122920'>to s.</span> </p><p><span m='124230'>Again, this is the
  expected number of steps</span> <span m='127040'>in order to get from i to s
  for the first time.</span> </p><p><span m='131200'>So how do we go about
  calculating such a quantity?</span> </p><p><span m='135830'>Well, let us think
  a little bit.</span> </p><p><span m='138590'>We are looking at the event that
  you</span> <span m='140700'>will visit 9 from 1 for the first time.</span>
  </p><p><span m='145200'>What happened after visiting 9 is</span> <span
  m='147930'>of no relevance in our calculation.</span> </p><p><span
  m='150420'>In other words, our calculation will never involve this arc</span>
  <span m='154510'>and will not involve this arc either.</span> </p><p><span
  m='157200'>Because in order for the Markov chain</span> <span m='159079'>to
  traverse this arc or this one,</span> <span m='162680'>it would have to visit
  9 first.</span> </p><p><span m='165980'>So what it means is that we can forget
  about this arc,</span> <span m='169740'>and we can forget about this arc-- in
  a sense,</span> <span m='172860'>that they don't matter in the
  calculation</span> <span m='174890'>of the mean first passage time to
  s.</span> </p><p><span m='177550'>Now, removing these arcs entirely</span>
  <span m='180230'>means that you would have to increase</span> <span
  m='182290'>the probability of that self transition from 0.2 to 1.</span>
  </p><p><span m='188050'>So what do you get?</span> </p><p><span
  m='189500'>Well, you get this following graph.</span> </p><p><span
  m='192660'>We have removed these arcs, and we</span> <span m='194980'>have
  increased the probability 0.2 here to 1.</span> </p><p><span m='198210'>And
  again, we have argued that calculating</span> <span m='201860'>the mean first
  passage time from i to s in this graph</span> <span m='206420'>is the same as
  doing the same thing for this graph.</span> </p><p><span m='210270'>But here,
  we have a very special structure.</span> </p><p><span m='214610'>We have only
  one recurrent state left, which is state 9.</span> </p><p><span m='219030'>And
  that state is an absorbing state.</span> </p><p><span m='221920'>All the other
  state-- this one was</span> <span m='223390'>transient, transient,
  transient.</span> </p><p><span m='224960'>This one becomes a transient
  state.</span> </p><p><span m='227280'>And this one is also a transient state
  in this new transition</span> <span m='230490'>probability diagram.</span>
  </p><p><span m='232150'>So we get a situation where we have one single
  absorbing</span> <span m='235630'>state, and we are interested in
  calculating</span> <span m='238750'>the probability starting from i to reach
  that absorbing state</span> <span m='243790'>and also the number of steps it
  takes</span> <span m='247140'>to do that, which is what we did in the previous
  video.</span> </p><p><span m='251140'>So let us repeat what we had seen
  before.</span> </p><p><span m='254030'>So this is going to be the unique
  solution to this system.</span> </p><p><span m='259010'>t of s equals 0, of
  course.</span> </p><p><span m='260820'>Since you start from s, you are in
  s.</span> </p><p><span m='262900'>And so the amount of time it takes to get to
  s is 0.</span> </p><p><span m='266180'>And otherwise, for all the other states
  that are not s,</span> <span m='269390'>this is the resulting system of
  equation that we have.</span> </p><p><span m='273100'>And the unique solution
  of this system</span> <span m='275190'>gives you the result of finding the
  expected amount of time</span> <span m='280080'>to go to the absorbing state
  s.</span> </p><p><span m='283100'>So using this simple trick, we've</span>
  <span m='285290'>been able to use the previous calculation</span> <span
  m='287960'>to calculate something else.</span> </p><p><span m='290610'>Let us
  consider a related question, which</span> <span m='293380'>we called the mean
  recurrence time of s.</span> </p><p><span m='297490'>Here, let's go back to
  the original graph.</span> </p><p><span m='300220'>And this is our state
  s.</span> </p><p><span m='302480'>And now the question is the
  following--</span> <span m='304440'>given that you are in s, what is the
  amount of time</span> <span m='308210'>it will take for the Markov
  chain</span> <span m='310540'>to return to s for the first time?</span>
  </p><p><span m='314080'>So for this question, the Markov chain is currently in
  9.</span> </p><p><span m='317740'>And you ask yourself, how long is it</span>
  <span m='320320'>going to take, once you leave 9, to return to 9?</span>
  </p><p><span m='325620'>Here again, we don't know for sure.</span>
  </p><p><span m='327730'>It's a random variable.</span> </p><p><span
  m='329000'>And we are interested in the expectation</span> <span m='331810'>of
  that random variable-- in other words,</span> <span m='333900'>in the expected
  number of steps it takes in order</span> <span m='337100'>to get back to 9
  once you are in 9.</span> </p><p><span m='339310'>And this is what we mean by
  the mean recurrence time of s.</span> </p><p><span m='343380'>And
  mathematically, this is what it is.</span> </p><p><span m='346780'>It is
  almost the same formula as the one that you had here,</span> <span
  m='350650'>except that here you have n greater than/equal</span> <span
  m='353750'>to 1 as opposed to n greater than/equal to 0.</span> </p><p><span
  m='356960'>It simply means that you're not interested in the first time</span>
  <span m='361130'>that you're in s, because you start from s.</span>
  </p><p><span m='363560'>So you want to have n greater than or equal to 1.
  n</span> <span m='366590'>equals 0 would not work. ts star would have been
  0.</span> </p><p><span m='370600'>So how would you solve that problem?</span>
  </p><p><span m='373540'>Well, here again, you use the same trick that we used
  before.</span> </p><p><span m='377750'>And think in terms of tree.</span>
  </p><p><span m='379990'>Let's look at the Markov chain in state 9.</span>
  </p><p><span m='383440'>What can happen next?</span> </p><p><span
  m='384940'>From 9, it can go to 3 or it can go to 5.</span> </p><p><span
  m='395860'>Or it can jump on itself.</span> </p><p><span m='399740'>So this is
  with a probability 0.2.</span> </p><p><span m='401710'>This is with a
  probability 0.2.</span> </p><p><span m='404130'>And this is with a probability
  of 0.6.</span> </p><p><span m='407820'>And now, after you make one
  transmission--</span> <span m='410640'>so let's-- you are in 3 now-- what is
  the time to get to 9?</span> </p><p><span m='416680'>Well, it's exactly t3--
  where the t</span> <span m='420600'>is, the solution here of that previous
  system.</span> </p><p><span m='424930'>What about from 5?</span> </p><p><span
  m='427170'>t5.</span> </p><p><span m='428890'>And what about from 9?</span>
  </p><p><span m='430560'>Well, t9.</span> </p><p><span m='431470'>And t9 was
  0.</span> </p><p><span m='434120'>So from that tree, what you have is</span>
  <span m='437310'>t9 star will be 0.2 times t3 plus 0.6 times t5 plus
  0.2</span> <span m='453330'>times t9 plus, of course, 1, because you</span>
  <span m='457420'>have done one transition.</span> </p><p><span
  m='459640'>Where, again, this value of t3, t5, and t9 are the ones</span>
  <span m='466380'>corresponding to this solution here.</span> </p><p><span
  m='469030'>So of course, t9 is 0.</span> </p><p><span m='472990'>So what we
  have shown here, that in general,</span> <span m='476040'>this is actually
  what you would have.</span> </p><p><span m='478380'>And this is exactly what
  we have written here.</span> </p><p><span m='480850'>ts star is 1 plus the
  summation of psj of t of j, where t of j</span> <span m='489100'>is the
  solution to this system.</span> </p><p><span m='491900'>So again, you started
  from 9.</span> </p><p><span m='494750'>You have to do a transition
  first.</span> </p><p><span m='497140'>You can do a transition unto
  yourself.</span> </p><p><span m='499640'>You can go to 3 or you can go to
  6.</span> </p><p><span m='503190'>After that transition, which stands for the
  number</span> <span m='505520'>1 here, what happens is you're trying</span>
  <span m='509180'>to find the solution to this system, which</span> <span
  m='511560'>is the mean first passage time, from the current state where</span>
  <span m='514419'>you are, to 9.</span> </p><p><span m='516990'>And then when
  you put these two things together,</span> <span m='519340'>you get the mean
  recurrence time of 9.</span> </p>
uid: 5d0a5f8633defba6ec4c99d01913811d
type: courses
layout: video
---
