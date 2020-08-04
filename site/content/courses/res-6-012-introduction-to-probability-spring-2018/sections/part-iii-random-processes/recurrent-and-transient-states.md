---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: wSQaYn2h-e8
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    title: Video-YouTube-Stream
    type: Video
    uid: 7fb9ce31c0e0ebec7a76e50672622bbd
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/wSQaYn2h-e8/default.jpg'
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b2e0e00ee65724e7c164a8d01b1f3739
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: wSQaYn2h-e8
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: f6028979d94e9406c1f9a84571d6de67
  - id: wSQaYn2h-e8.srt
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/recurrent-and-transient-states/wSQaYn2h-e8.srt
    title: 3play caption file
    type: null
    uid: 37ec409c3364fe07df5d2c17d56d121f
  - id: wSQaYn2h-e8.pdf
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/recurrent-and-transient-states/wSQaYn2h-e8.pdf
    title: 3play pdf file
    type: null
    uid: 00f12e78786a8a8d3e0b89e99ccf8380
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 248a0609947880b98d171bdf1209610f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5b1494f76795781c44babf61a7ce4de2
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L24-08_300k.mp4
    parent_uid: 5f9bd9d000d22ebe15a601a364459cfc
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6e61a0f77efeccd34a4a610e353b51df
inline_embed_id: 98467269recurrentandtransientstates68309621
order_index: 2249
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: recurrent-and-transient-states
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/recurrent-and-transient-states
title: Recurrent and Transient States
transcript: >-
  <p><span m='500'>In the last example of the previous clip,</span> <span
  m='3590'>we have observed that the initial state of where</span> <span
  m='6240'>the Markov chain starts can matter, and that in some cases,</span>
  <span m='10740'>the influence of the initial state</span> <span
  m='12660'>never vanishes in the long run.</span> </p><p><span m='15030'>So
  when we wanted to calculate the probability of ending up</span> <span
  m='18560'>in state one, knowing that you started in state one,</span> <span
  m='24200'>give you that probability, and if you started in state three,</span>
  <span m='29430'>you had another long term probability.</span> </p><p><span
  m='33510'>And in case you were started in state two,</span> <span
  m='37940'>then you were equally likely to end up being in state one</span>
  <span m='43260'>or in state three.</span> </p><p><span m='45930'>We have said
  that this was due to the fact</span> <span m='48660'>that some states are not
  accessible</span> <span m='51020'>from some other states.</span> </p><p><span
  m='54070'>Our goal here is to make such a statement more</span> <span
  m='57500'>precise and formal.</span> </p><p><span m='61200'>In order to do so,
  we will classify the states of a Markov</span> <span m='64819'>chain in a
  transition diagram into two types, recurrent</span> <span m='70030'>and
  transient.</span> </p><p><span m='71700'>A state is said to be recurrent if
  starting</span> <span m='75380'>from that state, no matter where you
  go,</span> <span m='78740'>there is always a path to come back.</span>
  </p><p><span m='82530'>A state is said to be transient if it is not
  recurrent.</span> </p><p><span m='88050'>It means that starting from that
  state,</span> <span m='91210'>there is at least one place where you can
  go,</span> <span m='94600'>and then there will be no paths back to it.</span>
  </p><p><span m='98660'>For example, starting from state eight, no matter where
  you go,</span> <span m='105200'>there is always a path back to eight.</span>
  </p><p><span m='111170'>So eight will be said to be a recurrent state.</span>
  </p><p><span m='115300'>For the same reason, seven will also</span> <span
  m='118370'>be a recurrent state, as well as six.</span> </p><p><span
  m='123030'>Now, what about five?</span> </p><p><span m='125890'>From five, the
  only state where you can go to</span> <span m='128788'>is five itself, so five
  is also a recurrent state.</span> </p><p><span m='136800'>Let us look now at a
  state like state four.</span> </p><p><span m='141480'>From four, there is the
  possibility</span> <span m='145320'>of a path going through two, then
  one,</span> <span m='150720'>and then going to five, from which</span> <span
  m='154360'>there is no path back to four.</span> </p><p><span m='158870'>So
  four cannot be a recurrent state.</span> </p><p><span m='162670'>It is then
  called a transient state.</span> </p><p><span m='166350'>For the same reason,
  starting from three,</span> <span m='169820'>there is the possibility that
  after doing many transitions</span> <span m='176620'>around here, eventually,
  you will end up being in either two</span> <span m='182120'>and then go to
  six, or you will eventually be in one</span> <span m='188460'>and then go to
  five.</span> </p><p><span m='190870'>And from five or from six, there will be
  no path back to three,</span> <span m='198090'>so three is also a transient
  state.</span> </p><p><span m='201450'>And it is clear that for the same
  reason,</span> <span m='204840'>one will be a transient state, and two will
  also</span> <span m='209750'>be a transient state.</span> </p><p><span
  m='212550'>Now, if a state is transient, like three, four, one, or two,</span>
  <span m='219740'>it means that it will be visited only a finite number of
  times.</span> </p><p><span m='225600'>And in the long run, the
  probability</span> <span m='227860'>of being in a transient state will
  converge to zero.</span> </p><p><span m='231990'>The recurrent states of a
  Markov chain</span> <span m='234660'>can be grouped in different
  classes.</span> </p><p><span m='237620'>Here, in this example, we have two
  such classes.</span> </p><p><span m='241400'>Here, this is one class, and here
  you have another class.</span> </p><p><span m='254080'>What is so special
  about these classes?</span> </p><p><span m='256970'>Well, within one class,
  for example, in this class,</span> <span m='261800'>all recurrent states have
  a way to communicate</span> <span m='265790'>between each other, but there is
  no communication</span> <span m='270290'>between recurrent states of different
  classes.</span> </p><p><span m='274262'>From that recurrent state here,
  you</span> <span m='278080'>have no communication with that recurrent state
  here.</span> </p><p><span m='283000'>No communication in the sense that
  there</span> <span m='284920'>is no path joining that state to that
  state</span> <span m='290110'>or that state to that state.</span> </p><p><span
  m='294300'>The existence of more than one class of recurrent states,</span>
  <span m='298650'>like in this example, in a Markov chain,</span> <span
  m='301330'>will be the telling sign that initial states</span> <span
  m='305540'>will matter in that chain.</span> </p><p><span m='308230'>It's
  pretty clear here that if your Markov chain starts</span> <span m='312970'>in
  state five, you will never end up in state six, seven,</span> <span
  m='318290'>or eight, and if you start in one of the states</span> <span
  m='321870'>six, seven, eight, you will never end up in state five.</span>
  </p><p><span m='326410'>So depending on where you started,</span> <span
  m='330270'>the long range probability of being eventually in state six</span>
  <span m='334159'>will not be the same.</span> </p>
uid: 5f9bd9d000d22ebe15a601a364459cfc
type: course
layout: video
---
