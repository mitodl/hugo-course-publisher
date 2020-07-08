---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: XWKXOUvqC-U
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    title: Video-YouTube-Stream
    type: Video
    uid: c97d72465cfd736982a82df08f4f27d9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/XWKXOUvqC-U/default.jpg'
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 0934a38ba54b09393ea47b611a4a1e9b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: XWKXOUvqC-U
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: fa764d65200054dc8a2c89a13b4c380f
  - id: XWKXOUvqC-U.srt
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/merging-independent-poisson-processes/XWKXOUvqC-U.srt
    title: 3play caption file
    type: null
    uid: b2473375d7dd26fd81fded74fbdb502a
  - id: XWKXOUvqC-U.pdf
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/merging-independent-poisson-processes/XWKXOUvqC-U.pdf
    title: 3play pdf file
    type: null
    uid: e1c0af9e5df2f963e56f6fb1e1cf7c31
  - id: Caption-3Play YouTube id-SRT
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2f5c7fca5ddf114358fda9ee80b3ef7f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7db45cf37be66655096c976738d44966
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L23-03_300k.mp4
    parent_uid: dc2216e9619c2917df0f0f49630b46f5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 4932e6b167f2b9f2d159502407dc36fe
inline_embed_id: 58878108mergingindependentpoissonprocesses35346772
order_index: 2123
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: merging-independent-poisson-processes
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/merging-independent-poisson-processes
title: Merging Independent Poisson Processes
transcript: >-
  <p><span m='500'>We will now study what happens when</span> <span m='2380'>we
  merge independent Poisson processes.</span> </p><p><span m='5520'>The story as
  well as the final conclusion</span> <span m='7920'>is going to be similar to
  what happened for the case</span> <span m='10750'>where we merged independent
  Bernoulli processes.</span> </p><p><span m='13720'>In particular, we will see
  that the merged process will also</span> <span m='16880'>be Poisson.</span>
  </p><p><span m='19310'>What is the story?</span> </p><p><span
  m='21100'>Suppose that you have two light bulbs.</span> </p><p><span
  m='23690'>One of them is red and flashes at random times that</span> <span
  m='27830'>are described according to a Poisson process</span> <span
  m='30920'>with a certain rate, lambda1.</span> </p><p><span m='33260'>The
  other light bulb is green, flashes also as a Poisson</span> <span
  m='36960'>process with a certain rate.</span> </p><p><span
  m='39040'>Furthermore, we assume that the two light bulbs</span> <span
  m='41700'>are independent of each other.</span> </p><p><span m='44410'>If
  you're color blind so that the only thing that you see</span> <span
  m='47600'>is flashes but without being able to tell the color,</span> <span
  m='51540'>what kind of process are you going to see?</span> </p><p><span
  m='54740'>Well, you will see a Poisson process also,</span> <span
  m='58530'>and at this point, you can probably</span> <span m='60140'>guess
  what the arrival rate is going</span> <span m='62410'>to be for this Poisson
  process.</span> </p><p><span m='64239'>It should be the sum of these two
  arrival</span> <span m='67790'>rates of the processes that you started
  with.</span> </p><p><span m='70950'>So this will be our final
  conclusion,</span> <span m='73120'>but we want to verify that this is
  indeed</span> <span m='76880'>the correct conclusion.</span> </p><p><span
  m='78789'>So let us look at the situation in some more detail.</span>
  </p><p><span m='82000'>We have the two processes, two arrival processes-- the
  red one</span> <span m='86130'>and the green one-- and the merged
  process</span> <span m='89200'>is formed by recording an arrival at any time
  where</span> <span m='95080'>either of the two processes that you</span> <span
  m='96970'>started with records an arrival.</span> </p><p><span m='100990'>Let
  us now look at the time interval</span> <span m='105530'>and think about the
  number of arrivals in the merged process</span> <span m='109180'>during this
  time interval.</span> </p><p><span m='111220'>What is that the number?</span>
  </p><p><span m='112850'>That number is equal to the number of arrivals</span>
  <span m='116870'>that you have in the first process plus</span> <span
  m='122060'>the number of arrivals that you have in the second process.</span>
  </p><p><span m='128590'>Let's call those numbers N1 and N2 so that what we
  have here</span> <span m='133260'>is N1 plus N2.</span> </p><p><span
  m='135960'>Now, N1 is a Poisson random variable</span> <span
  m='138880'>because this is a Poisson process.</span> </p><p><span
  m='140930'>Similarly, N2 is a Poisson random variable.</span> </p><p><span
  m='143380'>We assume that these two processes are independent.</span>
  </p><p><span m='146270'>Therefore, N1 plus N2 is the sum of independent
  Poisson</span> <span m='149800'>random variables, and therefore, N1 plus
  N2</span> <span m='153010'>is also a Poisson random variable.</span>
  </p><p><span m='156190'>This is reassuring.</span> </p><p><span
  m='157380'>It's a good piece of evidence that the blue process</span> <span
  m='159960'>is a Poisson process, but this is not enough.</span> </p><p><span
  m='163400'>To argue that it is a Poisson process,</span> <span m='165280'>we
  need to check the defining properties of a Poisson</span> <span
  m='168030'>process.</span> </p><p><span m='169220'>One defining property is
  the independence property.</span> </p><p><span m='172430'>If we take disjoint
  intervals, the number of arrivals</span> <span m='175950'>here is independent,
  or should be independent,</span> <span m='178810'>from the number of arrivals
  there.</span> </p><p><span m='181240'>The argument here is exactly the same as
  for the Bernoulli case,</span> <span m='184700'>so we will not go through it
  in any detail.</span> </p><p><span m='188970'>We just notice that whatever
  happens during that time</span> <span m='192980'>has to do with whatever
  happens during those times in the two</span> <span m='197270'>processes that
  we started with.</span> </p><p><span m='199260'>And similarly, what happens in
  these times</span> <span m='201900'>has to do with what happens in these two
  processes</span> <span m='204530'>during those times.</span> </p><p><span
  m='205930'>Because for each one of the two processes that we start
  with,</span> <span m='209890'>we have the Poisson assumption so that this
  interval</span> <span m='213560'>is independent from that interval in the
  sense</span> <span m='216480'>that arrivals here and arrivals there are
  independent.</span> </p><p><span m='219610'>So because of this, whatever
  happens during those</span> <span m='222880'>times has nothing to do with
  whatever</span> <span m='224790'>happens in those times, so number of
  arrivals</span> <span m='227340'>here is independent from the number of
  arrivals there.</span> </p><p><span m='231480'>The other property that we need
  to check</span> <span m='233340'>is that the probability of recording an
  arrival</span> <span m='236530'>during a small time interval of length
  delta,</span> <span m='239880'>that this probability has the right
  scaling</span> <span m='243800'>properties, that it is linear in delta,</span>
  <span m='247560'>in the length of this interval, and that the probability of
  two</span> <span m='250630'>or more arrivals here is negligible.</span>
  </p><p><span m='253700'>To see what happens during a typical interval in the
  merged</span> <span m='257370'>process, we need to consider what</span> <span
  m='260040'>is going to happen during that typical interval</span> <span
  m='263160'>in the other two processes and consider</span> <span m='266050'>all
  the possible combinations.</span> </p><p><span m='268520'>During a little
  interval, the red process</span> <span m='271370'>is going to have zero
  arrivals with this probability,</span> <span m='275530'>one arrival with this
  probability,</span> <span m='277380'>and two or more arrivals with this
  probability, which</span> <span m='280290'>is negligible.</span> </p><p><span
  m='281650'>Actually here, we're ignoring terms of order delta squared.</span>
  </p><p><span m='286159'>These are the correct expressions</span> <span
  m='287920'>if we only focus on terms that are either constants or
  linear</span> <span m='292180'>in delta.</span> </p><p><span m='293000'>We are
  ignoring terms that are of order delta</span> <span m='295290'>square or
  higher.</span> </p><p><span m='296900'>And similarly for the green
  process,</span> <span m='298760'>we have these probabilities for the number of
  arrivals</span> <span m='301510'>that may happen during a small
  interval.</span> </p><p><span m='304570'>For the merged process, we will have
  zero arrivals if and only</span> <span m='309750'>if we have zero arrivals in
  the red process</span> <span m='314180'>and zero arrivals in the green
  process.</span> </p><p><span m='316190'>The probability of these two events
  happening,</span> <span m='318570'>because we assume that the two processes
  that we started with</span> <span m='321760'>are independent, is going to be
  the product</span> <span m='324250'>of the probabilities of zero arrivals in
  one process times</span> <span m='329130'>zero arrivals in the other
  process.</span> </p><p><span m='333480'>We multiply those two terms, and if we
  throw away</span> <span m='337550'>the term delta squared, which is
  negligible,</span> <span m='340500'>we see that this event is going to happen
  with probability 1</span> <span m='344570'>minus lambda1 plus lambda2 times
  delta.</span> </p><p><span m='352630'>What's the probability that we get one
  arrival?</span> </p><p><span m='357180'>This is an event that can happen in
  two ways.</span> </p><p><span m='360310'>We could have one arrival in the red
  process</span> <span m='363910'>and zero arrivals in the green process,</span>
  <span m='367060'>and this combination happens with this probability.</span>
  </p><p><span m='371340'>Alternatively, we could have one arrival in the green
  process</span> <span m='376040'>and zero arrivals in the red process.</span>
  </p><p><span m='378573'>This is this event and it happens with this
  probability.</span> </p><p><span m='383000'>Having one arrival in the blue
  process</span> <span m='385600'>can happen either this way or that way,</span>
  <span m='388060'>so the probability of one arrival</span> <span
  m='389990'>will be the sum of these two probabilities.</span> </p><p><span
  m='392860'>And if we throw away terms that are</span> <span m='394800'>order
  of delta squared, what we're left with</span> <span m='398670'>is just lambda1
  plus lambda2 times delta.</span> </p><p><span m='410630'>Finally, there's the
  possibility that the blue process</span> <span m='414570'>is going to have two
  or more arrivals.</span> </p><p><span m='418820'>This happens if we have one
  red and one green arrival,</span> <span m='423720'>which happens with this
  probability,</span> <span m='426710'>or if anyone of the processes has two or
  more arrivals, which</span> <span m='432470'>would be terms here, here, and
  these would be the scenarios.</span> </p><p><span m='437170'>But we notice
  that each one of these scenarios</span> <span m='439470'>has probability
  that's order of delta squared.</span> </p><p><span m='442090'>This term also
  has probability of order delta squared,</span> <span m='446130'>so overall,
  the possibility that the blue process has</span> <span m='449870'>two or more
  arrivals-- this is something that has probability</span> <span
  m='453750'>that's of order delta squared.</span> </p><p><span m='457530'>So
  during a typical small interval,</span> <span m='461310'>there is probability
  proportional</span> <span m='464150'>to the length of the interval of having
  one arrival,</span> <span m='467250'>and lambda1 plus lambda2 is the factor of
  this proportionality,</span> <span m='471590'>and the remaining probability is
  assigned to the event</span> <span m='474855'>that there are zero
  arrivals.</span> </p><p><span m='476770'>There's essentially negligible
  probability</span> <span m='478810'>of having two or more arrivals, but
  this</span> <span m='481820'>together with the independence assumption</span>
  <span m='484070'>is exactly what comes in the definition of a Poisson
  process</span> <span m='488440'>with an arrival rate equal to this
  number.</span> </p><p><span m='492230'>And so we have established that the
  merged process</span> <span m='495080'>is a Poisson process whose rate
  is</span> <span m='497540'>the sum of the rates of the processes that we
  started from.</span> </p>
uid: dc2216e9619c2917df0f0f49630b46f5
type: courses
layout: video
---
