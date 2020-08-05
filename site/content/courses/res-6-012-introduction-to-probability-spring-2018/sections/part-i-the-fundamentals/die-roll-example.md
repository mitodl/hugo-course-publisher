---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: KrjZyCRi29o
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    title: Video-YouTube-Stream
    type: Video
    uid: b36f42fa87083ce5d6316a9e32588b6b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/KrjZyCRi29o/default.jpg'
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9e2aacd8c0230531b3368d97c266787a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: KrjZyCRi29o
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c1d9db1e01d25ceca9910649006a0dc4
  - id: KrjZyCRi29o.srt
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/die-roll-example/KrjZyCRi29o.srt
    title: 3play caption file
    type: null
    uid: a394787d544ef49773fdc0165ae91170
  - id: KrjZyCRi29o.pdf
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/die-roll-example/KrjZyCRi29o.pdf
    title: 3play pdf file
    type: null
    uid: 3d25c4abb84f04d47196e7ebbc3943ca
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9fe1cbb76b181ad9ce0aacfd47398e65
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: edf0ac2bcb0ed5cc701e4d3feccfd9a9
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-03_300k.mp4
    parent_uid: 01e063be5caf2e876d7844cfeea3fa66
    title: Video-Internet Archive-MP4
    type: Video
    uid: 365cc213f84478a8520e76746de1eb53
inline_embed_id: 32091357dierollexample44859127
order_index: 402
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: die-roll-example
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/die-roll-example
title: Die Roll Example
transcript: >-
  <p><span m="2120">We will now use counting to solve a simple</span> <span
  m="4630">probabilistic problem.</span></p><p><span m="6510">We have in our
  hands an ordinary six-sided die which</span> <span m="10280">we are going to
  roll six times.</span></p><p><span m="12570">So this is our probabilistic
  experiment.</span></p><p><span m="15700">And we're interested in the
  probability of a certain</span> <span m="17950">event, the event that the six
  rolls result</span> <span m="21810">in different numbers.</span></p><p><span
  m="24250">So let us give a name to that event and call it event A. So</span>
  <span m="28390">we wish to calculate the probability of this
  event.</span></p><p><span m="33440">But before we can even get started
  answering this</span> <span m="36600">question, we need a probabilistic
  model.</span></p><p><span m="38920">We need to make some assumptions, and
  the</span> <span m="41500">assumption that we're going to make is that all
  outcomes of</span> <span m="45200">this experiment are equally
  likely.</span></p><p><span m="48130">This is going to place us within a
  discrete uniform</span> <span m="51750">probabilistic model so that we can
  calculate</span> <span m="54310">probabilities by counting.</span></p><p><span
  m="55830">In particular, as we discussed earlier in this lecture, the</span>
  <span m="59950">probability of an event A is going to be the number of</span>
  <span m="64530">elements of the set A, the number of outcomes that make</span>
  <span m="69520">event A occur, divided by the total number of possible</span>
  <span m="75930">outcomes, which is the number of elements</span> <span
  m="79150">in our sample space.</span></p><p><span m="84700">So let us start
  with the denominator, and let us look</span> <span m="88150">at the typical
  outcomes of this experiment.</span></p><p><span m="91080">A typical outcome is
  something like this sequence,</span> <span m="103080">2, 3, 4, 3, 6,
  2.</span></p><p><span m="109130">That's one possible
  outcome.</span></p><p><span m="111460">How many outcomes of this kind are
  there?</span></p><p><span m="114539">Well, we have 6 choices for the result of
  the first roll,</span> <span m="117860">6 choices for the result of the second
  roll, and so on.</span></p><p><span m="121070">And since we have a total of 6
  rolls, this means that there</span> <span m="125100">is a total of 6 to the
  6th power possible outcomes,</span> <span m="130500">according to the Counting
  Principle.</span></p><p><span m="134010">And by the way, since we have so many
  possible outcomes and</span> <span m="138579">we assume that they are equally
  likely, the</span> <span m="140890">probability of each one of them would be
  1</span> <span m="144400">over 6 to the 6th.</span></p><p><span
  m="147090">Incidentally, that's the same number, the same answer, you</span>
  <span m="151340">would get if you were to assume, instead of assuming</span>
  <span m="155079">directly that all outcomes are equally likely, to just
  assume</span> <span m="158310">that the different rolls are rolls of a fair
  six-sided die,</span> <span m="164380">so the probability of getting a 2 is
  1/6, and also that the</span> <span m="169480">different rolls are independent
  of each other.</span></p><p><span m="173170">So in that case, the probability,
  let's say, of</span> <span m="175730">this particular sequence would be the
  probability of</span> <span m="178050">obtaining a 2, which is 1/6, times the
  probability that we</span> <span m="181630">get a 3 at the next roll, which is
  1/6, times 1/6 times</span> <span m="185840">1/6 and so on, and we get the
  same answer, 1 over 6 to 6th.</span></p><p><span m="190080">So we see that
  this assumption of all outcomes being equally</span> <span m="194070">likely
  has an alternative interpretation in terms of</span> <span m="197310">having a
  fair die which is rolled independently 6 times.</span></p><p><span
  m="202380">Now, let us look at the event of interest, A. What is a</span>
  <span m="207470">typical element of A?</span></p><p><span m="212450">A typical
  element of A is a sequence of 6 rolls in which</span> <span m="220010">no
  number gets repeated.</span></p><p><span m="222640">So, for example, it could
  be a sequence of results of this</span> <span m="227880">kind, where each
  number appears just once.</span></p><p><span m="231130">So all the numbers
  appear exactly once in this sequence.</span></p><p><span m="234770">So what we
  need here is basically to have a</span> <span m="238450">permutation of the
  numbers 1 up to 6.</span></p><p><span m="242680">So these 6 numbers have to
  appear in an arbitrary order.</span></p><p><span m="246160">In how many ways
  can we order 6 elements?</span></p><p><span m="250040">This is the number of
  permutations of a set of 6</span> <span m="253050">elements and, as we
  discussed earlier, this</span> <span m="255460">is equal to 6
  factorial.</span></p><p><span m="257310">So we have now counted the number of
  outcomes that make</span> <span m="260940">event A happen, which is 6
  factorial.</span></p><p><span m="263990">And by calculating this ratio, we
  have obtained the</span> <span m="267830">probability of the desired
  event.</span></p><p><span m="271820">You can now pause and try to solve a
  problem</span> <span m="275065">of a similar kind.</span></p><p>&nbsp;</p>
uid: 01e063be5caf2e876d7844cfeea3fa66
type: course
layout: video
---
