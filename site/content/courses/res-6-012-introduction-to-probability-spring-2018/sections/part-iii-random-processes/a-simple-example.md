---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: LJuVb-sxzoo
    parent_uid: 7a8b890735e429239e80eb0092d67308
    title: Video-YouTube-Stream
    type: Video
    uid: eddf0d8a10893d43a1fc26a14995604f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/LJuVb-sxzoo/default.jpg'
    parent_uid: 7a8b890735e429239e80eb0092d67308
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: dbd2cd5293d4c972bbe87d1c40ca6fbb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: LJuVb-sxzoo
    parent_uid: 7a8b890735e429239e80eb0092d67308
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2e5dc780afb42b48af80c1eda562aae9
  - id: LJuVb-sxzoo.srt
    parent_uid: 7a8b890735e429239e80eb0092d67308
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-simple-example/LJuVb-sxzoo.srt
    title: 3play caption file
    type: null
    uid: 5424b74d86f96da84fc8af7c2537b391
  - id: LJuVb-sxzoo.pdf
    parent_uid: 7a8b890735e429239e80eb0092d67308
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-simple-example/LJuVb-sxzoo.pdf
    title: 3play pdf file
    type: null
    uid: 59756168e3edee41c2603b7eba4dcf3b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 7a8b890735e429239e80eb0092d67308
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: cb547956ab1ee1c414a810d60f2f1632
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 7a8b890735e429239e80eb0092d67308
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 41637e3789f89fa4635a5cfb966c95ed
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L22-06_300k.mp4
    parent_uid: 7a8b890735e429239e80eb0092d67308
    title: Video-Internet Archive-MP4
    type: Video
    uid: ae8a070d3bd6c553c21a8ba8666b8f06
inline_embed_id: 15481560asimpleexample84489240
order_index: 2060
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: a-simple-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/a-simple-example
title: A Simple Example
transcript: >-
  <p><span m="600">We will now go through a very simple example, in which
  we</span> <span m="3900">just get to use the formulas that we have
  available.</span></p><p><span m="7830">The Poisson process is a pretty good
  model of email arrivals</span> <span m="12210">at least during a limited part
  of the day.</span></p><p><span m="15670">For example, during daytime,
  emails</span> <span m="18100">may be arriving as a Poisson crosses with a
  certain rate.</span></p><p><span m="21620">But then during night time, they
  may</span> <span m="23530">be arriving as a Poisson process with a different
  rate.</span></p><p><span m="27520">Nevertheless, the assumption that we will
  make</span> <span m="29910">is that, at least for this problem,</span> <span
  m="33190">that emails arrive as a Poisson process</span> <span m="35530">with
  a fixed rate of five messages per hour.</span></p><p><span m="39610">What is
  the mean and the variance</span> <span m="41530">of the number of emails
  received during a day?</span></p><p><span m="44790">Well, we have formulas for
  the mean and the variance.</span></p><p><span m="47800">And in this problem,
  we have a lambda equal to 5,</span> <span m="51370">and tau consists of 24
  hours.</span></p><p><span m="54950">So the answer is 5 times
  24.</span></p><p><span m="58220">And this answer applies to both of the mean
  and the variance,</span> <span m="61370">because for the Poisson random
  variable, these are the same.</span></p><p><span m="66170">What is the
  probability that we get</span> <span m="67630">one new message in the next
  hour?</span></p><p><span m="70980">This has to do with the PMF of the number
  of arrivals</span> <span m="75320">during the next hour, and that PMF</span>
  <span m="77690">is given by the Poisson probabilities.</span></p><p><span
  m="80620">We're asking for the probability of one new message,</span> <span
  m="83300">so that k is equal to 1, in the next hour,</span> <span m="86650">so
  that tau is equal to 1.</span></p><p><span m="88840">So we're looking for this
  expression here.</span></p><p><span m="91550">And using also that lambda is
  equal to 5,</span> <span m="95330">we enter those numbers into this
  formula.</span></p><p><span m="97860">And what we obtained is 5 times e to the
  minus 5.</span></p><p><span m="103190">Finally, what is the probability that
  during each</span> <span m="107009">of the next three hours, you'll obtain two
  messages.</span></p><p><span m="114259">So this is an event which is
  actually</span> <span m="116570">the intersection of three events,</span>
  <span m="118970">the event of two messages in this hour,</span> <span
  m="122220">two messages in this hour, and two messages in that
  hour.</span></p><p><span m="126600">For the Poisson process, we have assumed
  that different time</span> <span m="129820">intervals are independent of each
  other.</span></p><p><span m="132670">So what we need to do is to
  multiply</span> <span m="135580">the probability of two messages in this
  hour</span> <span m="138100">with the probability of two messages in that
  hour,</span> <span m="140260">and the probability of two messages in that
  power.</span></p><p><span m="143500">On the other hand, for each one of the
  hours,</span> <span m="146570">the probability's going to be the same,</span>
  <span m="148700">so it's enough to take the probability of two messages</span>
  <span m="152040">during this hour, which is in our notation this
  quantity,</span> <span m="158910">and multiply it with itself three
  times,</span> <span m="161220">so we get the third power of
  this.</span></p><p><span m="165210">Now this expression is equal to the
  following.</span></p><p><span m="169570">Lambda times tau is
  5.</span></p><p><span m="173300">k is equal to 2, so we get 5
  squared.</span></p><p><span m="177350">Then we have an e to the minus 5
  term.</span></p><p><span m="180140">And k is equal to 2, so we're dividing by
  2.</span></p><p><span m="183580">And we take the third power of
  this.</span></p>
uid: 7a8b890735e429239e80eb0092d67308
type: courses
layout: video
---
