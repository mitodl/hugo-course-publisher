---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: UbQcqFH33G0
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    title: Video-YouTube-Stream
    type: Video
    uid: 66b040524ef2f62983bc4d1acd481952
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/UbQcqFH33G0/default.jpg'
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3da0b9f4a17f2a56d8b77aa487bc8100
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: UbQcqFH33G0
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 194e6d615cd100b23747f67dfd2ff577
  - id: UbQcqFH33G0.srt
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independence-of-a-collection-of-events/UbQcqFH33G0.srt
    title: 3play caption file
    type: null
    uid: b4d9977ef20bb6c36037c52027ed456b
  - id: UbQcqFH33G0.pdf
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independence-of-a-collection-of-events/UbQcqFH33G0.pdf
    title: 3play pdf file
    type: null
    uid: 0efce5573e22478ef2bde873d509d4ac
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 78b1b6c037c81533471a2a9cb3b1f15b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 853d808a4dc0e3f4dd6172e10ec76d90
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L03-07_300k.mp4
    parent_uid: 61d67caa3321dd7a0910516fe51e22d5
    title: Video-Internet Archive-MP4
    type: Video
    uid: a16b8d7541dd3caf7896ffa9b1bfc00a
inline_embed_id: 94934012independenceofacollectionofevents15825172
order_index: 348
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: independence-of-a-collection-of-events
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/independence-of-a-collection-of-events
title: Independence of a Collection of Events
transcript: >-
  <p><span m="950">Suppose I have a fair coin which I toss multiple
  times.</span></p><p><span m="5080">I want to model a situation where the
  results of previous</span> <span m="8690">flips do not affect my beliefs about
  the likelihood of heads</span> <span m="13320">in the next
  flip.</span></p><p><span m="15540">And I would like to describe this situation
  by saying that</span> <span m="19280">the coin tosses are
  independent.</span></p><p><span m="22700">You may say, we already defined the
  notion of</span> <span m="25480">independent events.</span></p><p><span
  m="27060">Doesn't this notion apply?</span></p><p><span m="29210">Well not
  quite.</span></p><p><span m="30980">We defined independence of two
  events.</span></p><p><span m="33660">But here, we want to talk about
  independence of a</span> <span m="36590">collection of
  events.</span></p><p><span m="38330">For example, we would like to say that
  the events, heads in</span> <span m="41930">the first toss, heads in the
  second toss, heads in the</span> <span m="45220">third toss, and so on, are
  all independent.</span></p><p><span m="49720">What is the right
  definition?</span></p><p><span m="52130">Let us start with
  intuition.</span></p><p><span m="54970">We will say that a family of events
  are independent if</span> <span m="60260">knowledge about some of the events
  doesn't change my</span> <span m="65160">beliefs, my probability model, for
  the remaining events.</span></p><p><span m="70580">For example, if I want to
  say that events A1, A2 and so on</span> <span m="78770">are independent, I
  would like relations such as the</span> <span m="85330">following to be
  true.</span></p><p><span m="89250">The probability that event A3 happened and
  A4 does not</span> <span m="96930">happen remains the same even if I condition
  on some</span> <span m="102800">information about some other
  events.</span></p><p><span m="106220">Let's say if I tell you that A1 happens
  or that both A2</span> <span m="114020">happened and A5 did not
  happen.</span></p><p><span m="118880">The important thing to notice here is
  that the indices</span> <span m="123000">involved in the event of interest are
  distinct from the</span> <span m="127370">indices associated with the events
  on which I'm given some</span> <span
  m="130889">information.</span></p><p><span m="132040">I'm given some
  information about the events A1, A2, and</span> <span m="135410">A5, what
  happened to them.</span></p><p><span m="138020">And this information does not
  affect my beliefs about</span> <span m="142130">something that has to do with
  events A3 and A4.</span></p><p><span m="148590">I would like all relations of
  this kind to be true.</span></p><p><span m="155920">This could be one possible
  definition, just saying that</span> <span m="159650">the family of events are
  independent if and only if any</span> <span m="163820">relation of this type
  is true.</span></p><p><span m="166820">But such a definition would not be
  aesthetically pleasing.</span></p><p><span m="170079">Instead, we introduce
  the following definition, which</span> <span m="173810">mimics or parallels
  our earlier definition of</span> <span m="177340">independence of two
  events.</span></p><p><span m="179320">We will say that a collection of events
  are independent if</span> <span m="183330">you can calculate probabilities of
  intersections</span> <span m="187280">of these events by multiplying
  individual probabilities.</span></p><p><span m="193660">And this should be
  possible for all choices of indices</span> <span m="197820">involved and for
  any number or events involved.</span></p><p><span m="203870">Let us translate
  this into something concrete.</span></p><p><span m="206920">Consider the case
  of three events, A1, A2, and A3.</span></p><p><span m="212610">Our definition
  requires that we can calculate the</span> <span m="218180">probability of the
  intersection of two events by</span> <span m="221690">multiplying individual
  probabilities.</span></p><p><span m="225770">And we would like all of these
  three relations to be true,</span> <span m="229320">because this property
  should be true for any</span> <span m="232900">choice of the
  indices.</span></p><p><span m="235970">What do we have
  here?</span></p><p><span m="237860">This relation tells us that A1 and A2 are
  independent.</span></p><p><span m="242740">This relation tells us that A1 and
  A3 are independent.</span></p><p><span m="246440">This relation tells us that
  A2 and A3 are independent.</span></p><p><span m="250780">We call this
  situation pairwise independence.</span></p><p><span m="256110">But the
  definition requires something more.</span></p><p><span m="258589">It requires
  that the probability of three-way</span> <span m="261420">intersections can
  also be calculated the same way by</span> <span m="265890">multiplying
  individual probabilities.</span></p><p><span m="269040">And this additional
  condition does make a difference, as</span> <span m="273590">we're going to
  see in a later example.</span></p><p><span m="277470">Is this the right
  definition?</span></p><p><span m="281210">Yes.</span></p><p><span
  m="282210">One can prove formally that if the conditions in this</span> <span
  m="286170">definition are satisfied, then any formula of</span> <span
  m="291370">this kind is true.</span></p><p><span m="293700">In particular, we
  also have</span> <span m="295670">relations such as the
  following.</span></p><p><span m="298230">The probability of event A3 is the
  same as the probability of</span> <span m="305010">event A3, given that A1 and
  A2 occurred.</span></p><p><span m="311180">Or the probability of A3, given
  that A1</span> <span m="316270">occurred but A2 didn't.</span></p><p><span
  m="319530">Or we can continue this similarly, the probability of</span> <span
  m="323500">A3 given that A1 did not occur, and A2</span> <span
  m="327790">occurred, and so on.</span></p><p><span m="329790">So any kind of
  information that I might give you about</span> <span m="332930">events A1 and
  A2--</span> <span m="334530">which one of them occurred and which one
  didn't--</span> <span m="337390">is not going to affect my beliefs about the
  event A3.</span></p><p><span m="342090">The conditional probabilities are
  going to be the same as</span> <span m="344600">the unconditional
  probabilities.</span></p><p><span m="347850">I told you that this definition
  implies that all</span> <span m="350940">relations of this kind [are]</span>
  <span m="352500">true.</span></p><p><span m="353200">This can be
  proved.</span></p><p><span m="354550">The proof is a bit
  tedious.</span></p><p><span m="356970">And we will not go through
  it.</span></p><p>&nbsp;</p>
uid: 61d67caa3321dd7a0910516fe51e22d5
type: course
layout: video
---
