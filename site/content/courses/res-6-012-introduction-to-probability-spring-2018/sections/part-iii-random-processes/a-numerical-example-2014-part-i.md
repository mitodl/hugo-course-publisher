---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: l6YYHaV1aGc
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    title: Video-YouTube-Stream
    type: Video
    uid: c8d17defb55be48d23db20d7a21a4f1c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/l6YYHaV1aGc/default.jpg'
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: df32b0701a6cfc5e4cac277eb022490e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: l6YYHaV1aGc
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 843f2ea02c2eb77c45083fd3a3df6362
  - id: l6YYHaV1aGc.srt
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-numerical-example-2014-part-i/l6YYHaV1aGc.srt
    title: 3play caption file
    type: null
    uid: 24298b27c5c15ebfd936636814b770e4
  - id: l6YYHaV1aGc.pdf
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-numerical-example-2014-part-i/l6YYHaV1aGc.pdf
    title: 3play pdf file
    type: null
    uid: dd7e83e4fc853e4d5f93d1a9d578621b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d017be51f48efc9283628f9bee2a7f05
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 01e2233b57f29ef9b14a79b06cdce0e1
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L24-06_300k.mp4
    parent_uid: 87364d02192b2acfe1a8631dc158abae
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3354d0a4945cbe3037a0c85fc40aeb8d
inline_embed_id: 95378975anumericalexampleparti88492709
order_index: 2240
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: a-numerical-example-2014-part-i
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-numerical-example-2014-part-i
title: A Numerical Example — Part I
transcript: >-
  <p><span m='3190'>Let us now illustrate, with an example, the calculations of
  n</span> <span m='7180'>step transition probabilities that we have just
  discussed.</span> </p><p><span m='11870'>In this example, we are given a two
  state Markov chain,</span> <span m='18670'>and as part of the input, the one
  step transition</span> <span m='22510'>probabilities between these two
  states.</span> </p><p><span m='25900'>So, given that you are in state
  one,</span> <span m='29070'>the probability that you will next go to state two
  is 0.5,</span> <span m='33990'>and the probability that you will stay in state
  one is 0.5.</span> </p><p><span m='38610'>And, given that you are in state
  two,</span> <span m='41780'>the probability that you will next go to state one
  is 0.2,</span> <span m='45770'>and the probability that you will stay in state
  two is 0.8.</span> </p><p><span m='50220'>Now, suppose that you start in state
  one,</span> <span m='54480'>and you would like to calculate the probability of
  being</span> <span m='57240'>in state one after n transitions, or after n
  steps.</span> </p><p><span m='62900'>With our notation here, this is r11 of
  n.</span> </p><p><span m='71200'>That probability can happen in two
  ways.</span> </p><p><span m='75130'>After n minus 1 steps, you end up in state
  one,</span> <span m='84360'>and then for the last transition,</span> <span
  m='86150'>you stay in state one, or after the first n minus 1
  transition,</span> <span m='95770'>you end up in state two, and then</span>
  <span m='102270'>you transition back to state one.</span> </p><p><span
  m='106229'>Assuming that you start again in state one,</span> <span
  m='110500'>and you would like to calculate the probability that you end
  up</span> <span m='113320'>in state two after n steps, you could apply the
  same logic,</span> <span m='119009'>but these are probabilities.</span>
  </p><p><span m='123110'>And given that you started in state one, after n
  steps,</span> <span m='128030'>you will either be in state one or in state
  two.</span> </p><p><span m='132030'>So r12 of n is simply 1 minus r11 of
  n.</span> </p><p><span m='140340'>And this system of two recursions</span>
  <span m='141970'>is enough to propagate r11 of n and r12 of n</span> <span
  m='150120'>as a function of n.</span> </p><p><span m='153770'>Let us do it and
  fill the blanks here.</span> </p><p><span m='159360'>As indicated before, the
  case for n</span> <span m='162160'>equals 0 or n equals 1 are simple and do
  not</span> <span m='166550'>require the use of the recursions here.</span>
  </p><p><span m='171370'>So for example, for n equals 0, r11 of 0 will simply
  be 1,</span> <span m='177380'>and so as a result, r12 of 0 will be 0.</span>
  </p><p><span m='181610'>And again, r22 of 0 will be 1, and as a result, r21 of
  0</span> <span m='187680'>will be 0.</span> </p><p><span m='188900'>For n
  equals 1, these are the simple one step transition</span> <span
  m='193850'>probabilities.</span> </p><p><span m='195310'>So you have 0.5 here,
  and 0.5 here,</span> <span m='200450'>and r21 here are 0.2 and 0.8.</span>
  </p><p><span m='209680'>The next cases for n equals 2 become more
  interesting.</span> </p><p><span m='214829'>So, to reach n equals 2, r11 of 2,
  two options again.</span> </p><p><span m='222411'>You can go this way with a
  probability 0.5,</span> <span m='226360'>or you can go from that to here with
  a probability 0.2.</span> </p><p><span m='234190'>So here, we obtain total
  probability of 0.25, here,</span> <span m='239290'>a probability of 0.10, and
  when you sum these two</span> <span m='244660'>probabilities, you obtain 0.35,
  which is r11 of 2.</span> </p><p><span m='252910'>As a result, you get 0.65
  for r12 of 2.</span> </p><p><span m='260690'>Then you can follow the same
  process for n equals 3,</span> <span m='264110'>n equals 4, et cetera, et
  cetera.</span> </p><p><span m='266790'>I will not do it here, but this
  would</span> <span m='268910'>be an interesting exercise for you</span> <span
  m='270680'>to do the next several steps, perhaps</span> <span
  m='273700'>within an Excel spreadsheet.</span> </p><p><span m='277230'>But
  suppose that I tell you the number for n equals 100</span> <span
  m='282200'>and I tell you that the number that you obtain here</span> <span
  m='285659'>is about 2/7.</span> </p><p><span m='291230'>So as a result, the
  numbers that you are going to have here</span> <span m='294790'>is about
  5/7.</span> </p><p><span m='299590'>Let us then apply this simple recursion in
  order</span> <span m='303580'>to find the values here for n equals 101.</span>
  </p><p><span m='309934'>r11 of 101 will be 2/7 times 0.5 plus 5/7 times
  0.2.</span> </p><p><span m='330360'>Will be 1/7 for the first one plus 1/7 for
  the second one,</span> <span m='342030'>and so we obtain again 2/7.</span>
  </p><p><span m='349680'>And if you do the same calculation,</span> <span
  m='351860'>you will end up with 5/7 here.</span> </p><p><span m='356100'>This
  is an interesting fact.</span> </p><p><span m='357610'>When the system starts
  in state one,</span> <span m='359850'>the probability that I find myself in
  state one</span> <span m='362120'>after a long period of time seems</span>
  <span m='364360'>to converge to a constant value, in that case,</span> <span
  m='368130'>to the constant value of 2/7.</span> </p><p><span m='373700'>Assume
  now that you want to do the same calculation for r21</span> <span
  m='378330'>and r22.</span> </p><p><span m='380410'>In other words, you start
  in state two</span> <span m='384410'>and you are interested in knowing</span>
  <span m='386820'>the evolution of these r21 of n and r22 of n</span> <span
  m='391480'>as a function of n.</span> </p><p><span m='395210'>Again, I will
  let you do it, but I can tell you</span> <span m='399350'>that these
  probabilities will also</span> <span m='402030'>seem to converge to a
  constant, and in fact,</span> <span m='404550'>will converge to something that
  is exactly the same, 2/7</span> <span m='409680'>here and 5/7 here.</span>
  </p><p><span m='416730'>This is a second interesting fact.</span> </p><p><span
  m='419870'>Irrespective of where we started, either from state one</span>
  <span m='423580'>or from state two, the probability of being in a state</span>
  <span m='427630'>one after a long period of time seems</span> <span
  m='430480'>to converge to the same constant, 2/7.</span> </p><p><span
  m='437260'>So in some sense, for that particular example,</span> <span
  m='440800'>the importance of the initial state</span> <span
  m='443080'>vanishes as time goes by and does not</span> <span
  m='445910'>influence long term probabilities</span> <span m='447780'>of being
  in any of the two states.</span> </p><p><span m='450880'>Note that this is not
  true at the beginning starting</span> <span m='454159'>at state two.</span>
  </p><p><span m='456330'>The picture, after a few transitions,</span> <span
  m='459060'>will look different than if you had started from state one.</span>
  </p><p><span m='463600'>So the initial state does tell you something at the
  beginning,</span> <span m='467930'>but this vanishes as time goes by.</span>
  </p><p><span m='470909'>We describe these convergence properties</span> <span
  m='474040'>by saying that the Markov chain eventually</span> <span
  m='476900'>enters a steady state.</span> </p><p><span m='479940'>What does
  this really mean?</span> </p><p><span m='482840'>Does it mean that the state
  of the Markov</span> <span m='484940'>chain itself becomes steady and
  eventually stops</span> <span m='488660'>at a given place?</span> </p><p><span
  m='490120'>No.</span> </p><p><span m='490620'>The state of the system will
  keep jumping forever.</span> </p><p><span m='496430'>What becomes steady are
  the probabilities that describe Xn.</span> </p><p><span m='502720'>After the
  Markov chain enters steady state, then,</span> <span m='506920'>at any time,
  if you take a photo of the system and ask,</span> <span m='511560'>what is the
  probability that the chain will be in state one</span> <span m='514460'>on
  that picture, it will be 2/7.</span> </p><p><span m='519750'>By the way, the
  steady state of being in state two</span> <span m='525410'>is greater than the
  steady state of being in state one.</span> </p><p><span m='529430'>Does it
  make sense?</span> </p><p><span m='531920'>Yes.</span> </p><p><span
  m='532750'>State two is a little bit more sticky than state one</span> <span
  m='537720'>in the following sense.</span> </p><p><span m='540260'>When you get
  to state two, the probability</span> <span m='543630'>that you remain in state
  two, which is 0.8,</span> <span m='547190'>is greater than the corresponding
  probability</span> <span m='550000'>for state one, which is 0.5.</span>
  </p><p><span m='553870'>So to conclude, this Markov chain</span> <span
  m='556680'>has exhibited some nice long term properties.</span> </p><p><span
  m='561330'>Is this always the case for any Markov chains?</span> </p><p><span
  m='564640'>Let us see.</span> </p>
uid: 87364d02192b2acfe1a8631dc158abae
type: course
layout: video
---
