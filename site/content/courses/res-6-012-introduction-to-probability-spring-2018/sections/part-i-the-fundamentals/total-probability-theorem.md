---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 8odFouBR2wE
    parent_uid: 73cd7c240fa6c79630825d108401743b
    title: Video-YouTube-Stream
    type: Video
    uid: 486b8df6ae0046ccc1e5f47cf8491856
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8odFouBR2wE/default.jpg'
    parent_uid: 73cd7c240fa6c79630825d108401743b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8e3439d99439d15be7e306cd4c99e599
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 8odFouBR2wE
    parent_uid: 73cd7c240fa6c79630825d108401743b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 3c2cd1e2522cc85a3b36b90dc1c7e68b
  - id: 8odFouBR2wE.srt
    parent_uid: 73cd7c240fa6c79630825d108401743b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-probability-theorem/8odFouBR2wE.srt
    title: 3play caption file
    type: null
    uid: e038a686ea9c2ff37b0770176fe4946a
  - id: 8odFouBR2wE.pdf
    parent_uid: 73cd7c240fa6c79630825d108401743b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-probability-theorem/8odFouBR2wE.pdf
    title: 3play pdf file
    type: null
    uid: 5720821f7d3941124cc071b3ca47cb9b
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 73cd7c240fa6c79630825d108401743b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 81bc81dbc4169336fba4d2599a5fb672
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 73cd7c240fa6c79630825d108401743b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9697653eeced2ef63bcf5946c23c794b
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L02-07_300k.mp4
    parent_uid: 73cd7c240fa6c79630825d108401743b
    title: Video-Internet Archive-MP4
    type: Video
    uid: cb382b5b0fe384fa30a3583c6efd57cb
inline_embed_id: 35026373totalprobabilitytheorem62617636
order_index: 276
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: total-probability-theorem
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/total-probability-theorem
title: Total Probability Theorem
transcript: >-
  <p><span m="1560">Let us now revisit the second calculation that we
  carried</span> <span m="4750">out in the context of our earlier
  example.</span></p><p><span m="8070">In that example, we calculated the total
  probability of an</span> <span m="11480">event that can occur under different
  scenarios.</span></p><p><span m="14700">And it involves the powerful idea of
  divide and conquer</span> <span m="18130">where we break up complex
  situations</span> <span m="21470">into simpler pieces.</span></p><p><span
  m="23490">Here is what is involved.</span></p><p><span m="24770">We have our
  sample space.</span></p><p><span m="26610">And our sample space is partitioned
  into a number of</span> <span m="30520">subsets or events.</span></p><p><span
  m="32770">In this picture we take that number to be 3, so we'll have</span>
  <span m="35880">it partitioned into three possible
  scenarios.</span></p><p><span m="38540">It is a partition which means that
  these events cover the</span> <span m="42890">entire sample, space and
  they're</span> <span m="44990">disjoint from each other.</span></p><p><span
  m="46730">For each one of the scenarios we're given their</span> <span
  m="49430">probabilities.</span></p><p><span m="51470">If you prefer, you can
  also draw this situation</span> <span m="54470">in terms of a
  tree.</span></p><p><span m="55690">There are three different scenarios that
  can happen.</span></p><p><span m="59240">We're interested in a particular
  event, B. That</span> <span m="62380">event B can happen in three different
  ways.</span></p><p><span m="64780">It can happen under scenario one, under
  scenario two, or</span> <span m="68800">under scenario
  three.</span></p><p><span m="70610">And this corresponds to these particular
  sub-events.</span></p><p><span m="76039">So for example, this is the
  event</span> <span m="77630">where scenario A1 happens.</span></p><p><span
  m="79860">And then event B happens as well.</span></p><p><span m="85080">In
  terms of a tree diagram, the</span> <span m="86990">picture becomes as
  follows.</span></p><p><span m="88690">If scenario A1 materializes, event B may
  occur or event B</span> <span m="93840">might not occur.</span></p><p><span
  m="96710">Finally, we are given conditional probabilities that</span> <span
  m="100120">event B will materialize under each one of the different</span>
  <span m="104780">possible scenarios.</span></p><p><span m="106450">Under those
  circumstances, can we calculate the probability</span> <span m="110300">of
  event B?</span></p><p><span m="112210">Of course we can.</span></p><p><span
  m="113479">And here's how we do it.</span></p><p><span m="115470">First we
  realize that event B consists of a number of</span> <span m="121060">disjoint
  pieces.</span></p><p><span m="122940">One piece is when event B occurs
  together with event A1.</span></p><p><span m="127560">Another piece is when
  event B occurs together with A2.</span></p><p><span m="131510">Another piece
  is when event B occurs together with A3.</span></p><p><span m="135912">These
  three sets are disjoint from each other, as we see in</span> <span
  m="140490">this picture.</span></p><p><span m="141530">And together they form
  the event B. Therefore, the</span> <span m="145010">probability of B is going
  to be, by the additivity axiom of</span> <span m="149700">probabilities, equal
  to the sum of the probabilities of</span> <span m="153579">these
  sub-events.</span></p><p><span m="156140">Furthermore, for each one of these
  sub-events we can use</span> <span m="160800">the multiplication rule and
  write their</span> <span m="163150">probabilities as
  follows.</span></p><p><span m="164690">The probability that B and A1 both
  occur is the probability</span> <span m="168410">that scenario one
  materializes times the conditional</span> <span m="172340">probability that B
  occurs given that A1 occurred.</span></p><p><span m="176400">And then we're
  going to have similar terms under the second</span> <span m="179660">scenario
  and a similar term under the third scenario.</span></p><p><span m="184390">So
  putting everything together, we have arrived at a</span> <span
  m="187830">formula of this form.</span></p><p><span m="189880">The total
  probability of event B is the sum of the</span> <span m="197220">probabilities
  of the different ways that B may occur, that</span> <span m="202079">is, B
  occurring under the different scenarios.</span></p><p><span m="205340">And
  those particular probabilities are the product</span> <span m="207990">of the
  probability of the scenario times the conditional</span> <span
  m="210630">probability of B given that scenario.</span></p><p><span
  m="213630">Now, note that the sum of the probabilities of the different</span>
  <span m="217680">scenarios is of course equal to 1.</span></p><p><span
  m="221200">And this is because the scenarios form a partition of</span> <span
  m="227590">our sample space.</span></p><p><span m="229400">So if we look at
  this formula here, we realize that it is a</span> <span m="235120">weighted
  average of the conditional probabilities of</span> <span m="242790">event B,
  weighted average of the conditional probabilities</span> <span
  m="249430">where these probabilities of the individual scenarios are</span>
  <span m="255560">the weights.</span></p><p><span m="259019">In words, the
  probability that an event occurs is a weighted</span> <span m="265090">average
  of the probability that it has under each</span> <span m="268990">possible
  scenario, where the weights are the probabilities</span> <span m="273300">of
  the different scenarios.</span></p><p><span m="276280">One final
  comment--</span> <span m="278180">our derivation was for the case of three
  events.</span></p><p><span m="280700">But you can certainly see that the same
  derivation would go</span> <span m="283580">through if we had any finite
  number of events.</span></p><p><span m="286760">But even more, if we had a
  partition of our sample space</span> <span m="292340">into an infinite
  sequence of events, the same derivation</span> <span m="296890">would still go
  through, except that in this place in the</span> <span m="301930">derivation,
  instead of using the ordinary additivity axiom</span> <span m="307580">we
  would have to use the countable additivity axiom.</span></p><p><span
  m="311270">But other than that, all the steps would be the
  same.</span></p><p><span m="314570">And we would end up with the same formula,
  except that now</span> <span m="317970">this would be an infinite sum over
  the</span> <span m="320890">infinite set of scenarios.</span></p><p>&nbsp;</p>
uid: 73cd7c240fa6c79630825d108401743b
type: courses
layout: video
---
