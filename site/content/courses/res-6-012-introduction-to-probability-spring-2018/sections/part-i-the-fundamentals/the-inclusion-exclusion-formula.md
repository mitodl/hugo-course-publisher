---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: WXIU2tK4qtc
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    title: Video-YouTube-Stream
    type: Video
    uid: 9fc35736c7d9325c8f13b1a8ce761cc0
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/WXIU2tK4qtc/default.jpg'
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9ca9c7a8b2b532846f07a71e1af574e7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: WXIU2tK4qtc
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 80d07a334b011c7a79ed441353c9b23e
  - id: WXIU2tK4qtc.srt
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-inclusion-exclusion-formula/WXIU2tK4qtc.srt
    title: 3play caption file
    type: null
    uid: 219610ef70a574b26e52906e3dc14ec4
  - id: WXIU2tK4qtc.pdf
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-inclusion-exclusion-formula/WXIU2tK4qtc.pdf
    title: 3play pdf file
    type: null
    uid: e48262ca1207f81c7839d2f12d6c75c8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 65f2f0576ea93a0e27e23cc4a194990f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8526eef76a05f3bf5bd7a88c85a76640
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_S07-01_300k.mp4
    parent_uid: 492a9048aaeaaf3a9945cbb31e685373
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1ef9deab04bc6be3ce5afc6fdd27c23a
inline_embed_id: 42523982theinclusionexclusionformula88478055
order_index: 717
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-inclusion-exclusion-formula
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-inclusion-exclusion-formula
title: The Inclusion-Exclusion Formula
transcript: >-
  <p><span m="790">In this segment, we develop the inclusion-exclusion</span>
  <span m="3450">formula, which is a beautiful generalization of a
  formula</span> <span m="7220">that we have seen before.</span></p><p><span
  m="9390">Let us look at this formula and remind</span> <span
  m="11500">ourselves what it says.</span></p><p><span m="13520">If we have two
  sets, A1 and A2, and we're interested in</span> <span m="19110">the
  probability of their union, how can we find it?</span></p><p><span
  m="22080">We take the probability of the first set, we add to it the</span>
  <span m="25960">probability of the second set, but then we realize that
  by</span> <span m="29810">doing so we have double counted</span> <span
  m="32710">this part of the diagram.</span></p><p><span m="34770">And so we
  need to correct for that and we need to subtract</span> <span m="38740">the
  probability of this intersection.</span></p><p><span m="41040">And that's how
  this formula comes about.</span></p><p><span m="43830">Can we generalize this
  thinking, let's say, to the</span> <span m="46350">case of three
  events?</span></p><p><span m="49240">Suppose that we have three events, A1,
  A2, and A3.</span></p><p><span m="61240">And we want to calculate the
  probability of their union.</span></p><p><span m="65470">We first start by
  adding the probabilities of</span> <span m="68920">the different
  sets.</span></p><p><span m="70660">But then we realize that, for example, this
  part of the</span> <span m="74260">diagram has been counted
  twice.</span></p><p><span m="77410">It shows up once inside the probability of
  A1 and once</span> <span m="81090">inside the probability of
  A2.</span></p><p><span m="84180">So, for this reason, we need to make a
  correction and we</span> <span m="87740">need to subtract the probability of
  this</span> <span m="89930">intersection.</span></p><p><span
  m="90670">Similarly, subtract the probability of that</span> <span
  m="92630">intersection and of this one.</span></p><p><span m="94940">So we
  subtract the probabilities of these</span> <span
  m="97630">intersections.</span></p><p><span m="98800">But, actually, the
  intersections are not just</span> <span m="101120">what I drew
  here.</span></p><p><span m="102340">The intersections also involve this
  part.</span></p><p><span m="105780">So now, let us just focus on this part of
  the diagram here.</span></p><p><span m="110940">A typical element that belongs
  to all three of the sets will</span> <span m="117570">show up once here, once
  here and once there.</span></p><p><span m="122520">But it will also show up in
  all of these intersections.</span></p><p><span m="127350">And so it shows up
  three times with a plus sign, three times</span> <span m="130610">with a minus
  sign, which means that these elements will not</span> <span m="133390">to be
  counted at all.</span></p><p><span m="134990">In order to count them, we need
  to add one more term</span> <span m="139280">which is the probability of the
  three way intersection.</span></p><p><span m="143640">So this is the formula
  for the probability of the union of</span> <span m="147760">three
  events.</span></p><p><span m="150550">It has a rationale similar to this
  formula, and you can</span> <span m="154329">convince yourself that it is a
  correct formula by just</span> <span m="157829">looking at the different
  pieces of this diagram and</span> <span m="160490">make sure that each one of
  them is accounted properly.</span></p><p><span m="164410">But instead of
  working in terms of such a picture, let</span> <span m="168055">us think about
  a more formal derivation.</span></p><p><span m="171050">And the formal
  derivation will use a beautiful trick.</span></p><p><span m="174550">Namely,
  indicator functions.</span></p><p><span m="178950">So here is the formula that
  we want to establish.</span></p><p><span m="182800">And let us remind
  ourselves what indicator functions are.</span></p><p><span m="188190">To any
  set or event, we can associate</span> <span m="191680">an indicator
  function.</span></p><p><span m="193640">Let's say that this is the set
  Ai.</span></p><p><span m="196440">We're going to associate an indicator
  function, call it</span> <span m="200900">Xi, which is equal to 1 when the
  outcome is inside this</span> <span m="205070">set, and it's going to be 0
  when the outcome is outside.</span></p><p><span m="209250">What is the
  indicator function of the complement?</span></p><p><span m="212829">The
  indicator function of the complement is 1 minus the</span> <span
  m="217190">indicator of the event.</span></p><p><span m="219600">Why is
  this?</span></p><p><span m="221300">If the outcome is in the complement, then
  Xi is equal</span> <span m="227180">to 0, and this expression is equal to
  1.</span></p><p><span m="230600">On the other hand, if the outcome is inside
  Ai, then the</span> <span m="235110">indicator function will be equal to 1 and
  this quantity</span> <span m="238610">is going to be equal to
  0.</span></p><p><span m="241520">If we have the intersection of two events, Ai
  and Aj, what is</span> <span m="247520">their indicator
  function?</span></p><p><span m="249360">It is Xi times Xj.</span></p><p><span
  m="252930">This expression is equal to 1, if and only if, Xi is equal
  to</span> <span m="257149">1 and Xj is equal to 1, which happens, if and only
  if, the</span> <span m="261890">outcome is inside Ai and also inside
  Aj.</span></p><p><span m="267000">Now, what about the indicator of the
  intersection of the</span> <span m="271710">complements?</span></p><p><span
  m="275409">Well, it's an intersection.</span></p><p><span m="276940">So the
  associated indicator function is going to be the</span> <span
  m="280150">product of the indicator function of the first set,</span> <span
  m="283640">which is 1 minus Xi times the indicator function of the</span>
  <span m="288560">second set, which is 1 minus Xj.</span></p><p><span
  m="292840">And finally, what is the indicator</span> <span m="295930">function
  of this event?</span></p><p><span m="300840">Here we remember De Morgan's
  Laws.</span></p><p><span m="304380">De Morgan's Laws tell us that the
  complement of this set--</span> <span m="309770">the complement of a
  union--</span> <span m="311470">is the intersection of the
  complements.</span></p><p><span m="313880">So this event here is the
  complement of that event.</span></p><p><span m="318140">And, therefore, the
  associated indicator function is going to</span> <span m="321850">be 1 minus
  this expression.</span></p><p><span m="331440">And if we were dealing with
  more than two sets--</span> <span m="335030">and here we had, for example,
  three way intersections--</span> <span m="338600">you would get the product of
  three terms.</span></p><p><span m="341430">And if we had a three way union, we
  would get a similar</span> <span m="344770">expression, except that here we
  would have, again, a</span> <span m="347460">product of three terms instead of
  two.</span></p><p><span m="351250">So now, let us put to use what we have done
  so far.</span></p><p><span m="357159">We are interested in the probability
  that the outcome</span> <span m="362030">falls in the union of three
  sets.</span></p><p><span m="366550">Now, an important fact to remember is that
  the</span> <span m="369760">probability of an event is the same as the
  expected value of</span> <span m="375300">the indicator of that
  event.</span></p><p><span m="382810">This is because the indicator is equal to
  1, if and only if,</span> <span m="388090">the outcome happens to be inside
  that set.</span></p><p><span m="392400">And so the contribution that we get to
  the expectation is 1</span> <span m="396820">times the probability that the
  indicator is 1, which is just</span> <span m="400810">this
  probability.</span></p><p><span m="403070">Now, the indicator of a three way
  union is going to be, by</span> <span m="411600">what we just discussed, 1
  minus a product of this kind,</span> <span m="416620">but now with three
  terms.</span></p><p><span m="425660">Let us now calculate this expectation by
  expanding the</span> <span m="430320">product involved.</span></p><p><span
  m="432020">We have this first term, then, when we multiply those three</span>
  <span m="436480">terms together, we're going to get a bunch of
  contributions.</span></p><p><span m="439960">One contribution with a minus
  sign is 1 times 1 times 1.</span></p><p><span m="445170">Another contribution
  would be minus minus--</span> <span m="447970">that's a plus--</span> <span
  m="448580">X1 times 1 times 1.</span></p><p><span m="452420">And similarly, we
  get a contribution of X2 and X3.</span></p><p><span m="457360">And then we
  have a contribution such as X1 times</span> <span m="461050">X2 times
  1.</span></p><p><span m="463310">And if you look at the minus signs--</span>
  <span m="465630">there are three minuses involved-- so, overall, it's</span>
  <span m="468250">going to be a minus.</span></p><p><span m="469750">Minus X1
  times X2.</span></p><p><span m="472510">And then there is going to be similar
  terms, such as</span> <span m="475350">X1 X3 and X2 X3.</span></p><p><span
  m="481010">And, finally, there's going to be a term X1</span> <span
  m="483680">times X2 times X3.</span></p><p><span m="486100">There's a total of
  four minus signs involved, so everything</span> <span m="489770">shows up in
  the end with a plus sign.</span></p><p><span m="497410">So the probability of
  this event is equal to the</span> <span m="500280">expectation of this random
  variable here.</span></p><p><span m="503530">We notice that the ones cancel
  out.</span></p><p><span m="506270">The expected value of X1 for an indicator
  variable is just</span> <span m="511310">the probability of that
  event.</span></p><p><span m="512799">And we get this term.</span></p><p><span
  m="513820">The expected value of X2 and X3 give us these
  terms.</span></p><p><span m="519120">The expected value of X1 times
  X2.</span></p><p><span m="522159">This is the indicator random variable of the
  intersection.</span></p><p><span m="526110">So the expected value of this term
  is just the probability</span> <span m="530380">of the intersection of A1 and
  A2.</span></p><p><span m="533740">And, similarly, these terms here give rise
  to those two</span> <span m="538800">terms here.</span></p><p><span
  m="540360">Finally, X1 times X2 times X3 is the indicator variable for</span>
  <span m="546610">the event A1 intersection A2 intersection
  A3.</span></p><p><span m="550290">Therefore, the expected value of this term,
  is equal to this</span> <span m="554220">probability.</span></p><p><span
  m="555600">And, therefore, we have established exactly the</span> <span
  m="559290">formula that we wanted to establish.</span></p><p><span
  m="562940">Now this derivation that we carried out here, there's</span> <span
  m="566310">nothing special about the case of three.</span></p><p><span
  m="569070">We could have the union of many more events, we would</span> <span
  m="572770">just have here the product of more terms, and we would need</span>
  <span m="576750">to carry out the multiplication and we would</span> <span
  m="580010">get cross terms of all types involving just one of the</span> <span
  m="585770">indicator variables, or products of two indicator</span> <span
  m="588400">variables, or products of three indicator</span> <span
  m="590680">variables, and so on.</span></p><p><span m="593020">And after you
  carry out this exercise and keep track of the</span> <span m="596790">various
  terms, you end up with this general version of what</span> <span m="601870">is
  called the inclusion-exclusion formula.</span></p><p><span m="604530">So the
  probability of a union is--</span> <span m="607390">there's the sum of the
  probabilities, but then you</span> <span m="610000">subtract all possible
  probabilities of two way</span> <span
  m="614600">intersections.</span></p><p><span m="616060">Then we add
  probabilities of three way intersections, then</span> <span m="620510">you
  subtract probabilities of four way intersections, and</span> <span
  m="623560">you keep going this way alternating sings until you</span> <span
  m="628330">get to the last term, which is the probability of the</span> <span
  m="632300">intersection of all the events involved.</span></p><p><span
  m="636570">And this exponent here of n minus 1 is the exponent that</span>
  <span m="639810">you need so that the last term has the correct
  sign.</span></p><p><span m="644370">So, for example, if n is equal to 3, the
  exponent would be 2,</span> <span m="650210">so this would be a plus sign,
  which is consistent with what</span> <span m="654130">we got
  here.</span></p><p><span m="656640">So this is a formula that is quite useful
  when you want to</span> <span m="660140">calculate probabilities of unions of
  events.</span></p><p><span m="663730">But also, this derivation using
  indicator functions, is</span> <span m="668640">quite
  beautiful.</span></p><p>&nbsp;</p>
uid: 492a9048aaeaaf3a9945cbb31e685373
type: course
layout: video
---
