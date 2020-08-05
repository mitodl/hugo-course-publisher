---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: LVfIS8pBI6Y
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    title: Video-YouTube-Stream
    type: Video
    uid: 93a7e0e2e13baaa154a5299e28489b68
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/LVfIS8pBI6Y/default.jpg'
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3308f3746b2dfd5d62563d6d7222832f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: LVfIS8pBI6Y
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8eb046d9d5d7f3c0f02f385b798b4f96
  - id: LVfIS8pBI6Y.srt
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/stick-breaking-revisited/LVfIS8pBI6Y.srt
    title: 3play caption file
    type: null
    uid: a3e54f9f0b8e9ea226a828dfafc652b5
  - id: LVfIS8pBI6Y.pdf
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/stick-breaking-revisited/LVfIS8pBI6Y.pdf
    title: 3play pdf file
    type: null
    uid: 48a768c89b4fe8b45dd5c15ff2921caa
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 37f5f5686c75a1dbe8ea0f862c26af94
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 30b048cab3c01635d73d3e283c94c201
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L13-04_300k.mp4
    parent_uid: 1367479e9a324f942f348b9a5f2f09e9
    title: Video-Internet Archive-MP4
    type: Video
    uid: fb62ed72b5b0138d2d81d43ef19663ca
inline_embed_id: 58510388stickbreakingrevisited99152608
order_index: 1239
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: stick-breaking-revisited
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/stick-breaking-revisited
title: Stick-Breaking Revisited
transcript: >-
  <p><span m='330'>Here is a simple application of the law of iterated</span>
  <span m='3510'>expectations.</span> </p><p><span m='4780'>We revisit the
  stick-breaking example, which we have seen</span> <span m='8150'>sometime in
  the past.</span> </p><p><span m='10190'>So in this example, we start with a
  stick that has a</span> <span m='12700'>certain length and which we break at a
  point that's chosen</span> <span m='16340'>uniformly at random throughout the
  length of the stick.</span> </p><p><span m='20980'>And we call the point at
  which we cut the stick capital Y.</span> </p><p><span m='25880'>So the random
  variable Y has a uniform distribution on the</span> <span m='29090'>interval
  from 0 to l, and is described by</span> <span m='32320'>this particular
  PDF.</span> </p><p><span m='34210'>Then we take the piece of the stick that's
  left and we break</span> <span m='38090'>it at a point that's chosen uniformly
  over the length of</span> <span m='42390'>the stick that's left.</span>
  </p><p><span m='43910'>So the stick that was left has a length Y, and the
  place at</span> <span m='49670'>which we cut it, X, is chosen uniformly over
  that interval.</span> </p><p><span m='54420'>So in particular, X-- or rather
  the conditional</span> <span m='57390'>distribution of X given Y--</span>
  <span m='59880'>is uniform on that interval.</span> </p><p><span m='63150'>So
  in this example, what is the expected value of X if I</span> <span
  m='66740'>tell you the value of Y?</span> </p><p><span m='68210'>Well, given
  the value of Y, the random variable X is</span> <span m='71590'>uniform on
  that range.</span> </p><p><span m='72930'>So the expected value is going to be
  at the midpoint that is</span> <span m='76370'>equal to y over 2.</span>
  </p><p><span m='79400'>This is an equality between numbers.</span>
  </p><p><span m='82080'>For any particular number, little y,</span> <span
  m='84480'>we have this equality.</span> </p><p><span m='86680'>Now let us
  convert this concrete equality between</span> <span m='91700'>numbers to a
  more abstract equality</span> <span m='94600'>between random variables.</span>
  </p><p><span m='96840'>This object is a random variable that takes this
  value</span> <span m='100910'>whenever capital Y is little y.</span>
  </p><p><span m='103410'>So this is an object that takes the value little y
  over</span> <span m='107580'>2 whenever the random variable capital Y
  happens</span> <span m='111509'>to be little y.</span> </p><p><span
  m='113200'>But that's the same as the random variable</span> <span
  m='115690'>capital Y over 2.</span> </p><p><span m='117780'>This is a random
  variable that takes this value whenever</span> <span m='122790'>capital Y
  happens to be the same as little y.</span> </p><p><span m='127400'>So the
  conditional expectation--</span> <span m='129478'>the abstract conditional
  expectation is a random</span> <span m='131890'>variable because its value is
  determined by the random</span> <span m='135710'>variable capital Y, and it is
  this particular function of</span> <span m='139960'>the random variable
  capital Y.</span> </p><p><span m='142470'>And now we can proceed and calculate
  the expected value</span> <span m='145820'>of X using the law of iterated
  expectations.</span> </p><p><span m='150150'>The law of iterated expectations
  takes this form.</span> </p><p><span m='155060'>We have already calculated
  what this random variable is.</span> </p><p><span m='159350'>It is the random
  variable that's equal to Y over 2.</span> </p><p><span m='165400'>So this is
  the same as 1/2 the expected value of Y. And since</span> <span m='171120'>Y
  is uniform in the range from 0 to l, the expected value of</span> <span
  m='175460'>Y is equal to l over 2, which gives us an</span> <span
  m='180880'>answer of l over 4.</span> </p><p><span m='183900'>This is the same
  as the answer that we got in the past where</span> <span m='187160'>we
  actually found it using the total expectation theorem.</span> </p><p><span
  m='191900'>The calculations were exactly the same as what went on here</span>
  <span m='196450'>except that here we carry out the calculation in a
  more</span> <span m='199880'>abstract form.</span> </p><p><span m='201310'>And
  what is important to appreciate from this example</span> <span m='205120'>is
  the distinction between these two lines.</span> </p><p><span m='209470'>This
  is an equality between numbers, which is true for any</span> <span
  m='213970'>specific little y.</span> </p><p><span m='216140'>Whereas this is
  an equality between random variables.</span> </p><p><span m='220910'>This
  quantity is random and this quantity is also random,</span> <span
  m='224650'>meaning that their values are not known until the experiment</span>
  <span m='227730'>is carried out and the specific value of</span> <span
  m='229980'>capital Y is realized.</span> </p><p></p>
uid: 1367479e9a324f942f348b9a5f2f09e9
type: course
layout: video
---
