---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2f9EfEga4Oo
    parent_uid: df64784a6463177f3ce04937a3c7819b
    title: Video-YouTube-Stream
    type: Video
    uid: ea44d920d47cf183912878484007f8b7
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2f9EfEga4Oo/default.jpg'
    parent_uid: df64784a6463177f3ce04937a3c7819b
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 126689f29003b9bc9592d5d9f37662cb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 2f9EfEga4Oo
    parent_uid: df64784a6463177f3ce04937a3c7819b
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2ae8966d0f2236e0b73694d71372595e
  - id: 2f9EfEga4Oo.srt
    parent_uid: df64784a6463177f3ce04937a3c7819b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-coin-tossing-example-1/2f9EfEga4Oo.srt
    title: 3play caption file
    type: null
    uid: d6686a35c64ee6dd8c1076438ae577cf
  - id: 2f9EfEga4Oo.pdf
    parent_uid: df64784a6463177f3ce04937a3c7819b
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-coin-tossing-example-1/2f9EfEga4Oo.pdf
    title: 3play pdf file
    type: null
    uid: 89069ff05127b2af6503f161ae166ada
  - id: Caption-3Play YouTube id-SRT
    parent_uid: df64784a6463177f3ce04937a3c7819b
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 94802717e3158880680cc03d4dbc6dac
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: df64784a6463177f3ce04937a3c7819b
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 671cbab4aeea3d5dafef0043919146d7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-06_300k.mp4
    parent_uid: df64784a6463177f3ce04937a3c7819b
    title: Video-Internet Archive-MP4
    type: Video
    uid: a01c13d1afd4ae50b55ab925eb66dad0
inline_embed_id: 64335332acointossingexample47289220
order_index: 429
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: a-coin-tossing-example-1
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-coin-tossing-example-1
title: A Coin Tossing Example
transcript: >-
  <p><span m="360">Let us now put to use our understanding of the</span> <span
  m="3020">coin-tossing model and the associated binomial</span> <span
  m="6000">probabilities.</span></p><p><span m="7550">We will solve the
  following problem.</span></p><p><span m="10210">We have a coin, which is
  tossed 10 times.</span></p><p><span m="13910">And we're told that exactly
  three out of the 10 tosses</span> <span m="17710">resulted in
  heads.</span></p><p><span m="19800">Given this information, we would like to
  calculate the</span> <span m="22530">probability that the first two tosses
  were heads.</span></p><p><span m="27310">This is a question of calculating a
  conditional</span> <span m="29940">probability of one event given
  another.</span></p><p><span m="33670">The conditional probability of event A,
  namely that the first</span> <span m="37720">two tosses were heads, given that
  another event B has</span> <span m="41480">occurred, namely that we had
  exactly three heads</span> <span m="45250">out of the 10
  tosses.</span></p><p><span m="47600">However, before we can start working
  towards the solution</span> <span m="51560">to this problem, we need to
  specify a probability model</span> <span m="54990">that we will be working
  with.</span></p><p><span m="57080">We need to be explicit about our
  assumptions.</span></p><p><span m="60070">To this effect, let us introduce the
  following</span> <span m="63290">assumptions.</span></p><p><span m="64780">We
  will assume that the different coin tosses are</span> <span
  m="68140">independent.</span></p><p><span m="69390">In addition, we will
  assume that each coin toss has a</span> <span m="73270">fixed probability, p,
  the same for each toss, that the</span> <span m="78300">particular toss
  results in heads.</span></p><p><span m="81560">These are the exact same
  assumptions that we made</span> <span m="84090">earlier when we derived the
  binomial probabilities.</span></p><p><span m="87580">And in particular, we
  have the following formula that if we</span> <span m="91450">have n tosses,
  the probability that we obtain exactly k heads</span> <span m="95650">is given
  by this expression.</span></p><p><span m="97880">So now, we have a model in
  place and also the tools that</span> <span m="102550">we can use to analyze
  this particular model.</span></p><p><span m="106400">Let us start working
  towards a solution.</span></p><p><span m="108289">Actually, we will develop
  two different solutions and</span> <span m="111600">compare them at the
  end.</span></p><p><span m="114200">The first approach, which is the</span>
  <span m="116060">safest one, is the following.</span></p><p><span
  m="118710">Since we want to calculate a conditional probability, let</span>
  <span m="122125">us just start with the definition of conditional</span> <span
  m="125000">probabilities.</span></p><p><span m="126520">The conditional
  probability of an event given another event</span> <span m="130228">is the
  probability that both events happen, divided by the</span> <span
  m="133970">probability of the conditioning event.</span></p><p><span
  m="136540">Now, let us specialize to the particular example that we're</span>
  <span m="141070">trying to solve.</span></p><p><span m="143740">So in the
  numerator, we're talking about the probability</span> <span m="147110">that
  event A happens and event B happens.</span></p><p><span m="151329">What does
  that mean?</span></p><p><span m="153060">This means that event A
  happens--</span> <span m="155440">that is, the first two tosses resulted in
  heads, which I'm</span> <span m="159970">going to denote symbolically this
  way.</span></p><p><span m="163440">But in addition to that, event B
  happens.</span></p><p><span m="167610">And event B requires that there is a
  total of three</span> <span m="171260">heads, which means that we had one more
  head in</span> <span m="177720">the remaining tosses.</span></p><p><span
  m="179250">So we have one head in tosses 3 all the way to
  10.</span></p><p><span m="195810">As for the denominator, let's keep it the
  way it is for now.</span></p><p><span m="202410">So let's continue with the
  numerator.</span></p><p><span m="206270">We're talking about the probability
  of two events</span> <span m="209380">happening, that the first two tosses
  were heads and that in</span> <span m="213970">tosses 3 up to 10, we had
  exactly one head.</span></p><p><span m="218700">Here comes the independence
  assumption.</span></p><p><span m="222550">Because the different tosses are
  independent, whatever</span> <span m="225750">happens in the first two tosses
  is independent from</span> <span m="229650">whatever happened in tosses 3 up
  to 10.</span></p><p><span m="233480">So the probability of these two events
  happening is the</span> <span m="237270">product of their individual
  probabilities.</span></p><p><span m="240420">So we first have the probability
  that the first two</span> <span m="244880">tosses were heads, which is p
  squared.</span></p><p><span m="250170">And we need to multiply it with the
  probability that</span> <span m="253610">there was exactly one head in the
  tosses numbered</span> <span m="257230">from 3 up to 10.</span></p><p><span
  m="259019">These are eight tosses.</span></p><p><span m="261450">The
  probability of one head in eight tosses is given by the</span> <span
  m="265980">binomial formula, with k equal to 1 and n equal to
  8.</span></p><p><span m="271820">So this expression, this part, becomes 8
  choose 1, p to the</span> <span m="278190">first power times 1 minus p to the
  seventh power.</span></p><p><span m="284790">So this is the
  numerator.</span></p><p><span m="287560">The denominator is easier to
  find.</span></p><p><span m="291420">This is the probability that we had</span>
  <span m="293230">three heads in 10 tosses.</span></p><p><span m="295909">So we
  just use this formula.</span></p><p><span m="297690">The probability of three
  heads is given by: 10 tosses choose</span> <span m="304220">three, p to the
  third, times 1 minus p to the seventh power.</span></p><p><span m="313740">And
  here we notice that terms in the numerator and</span> <span
  m="316690">denominator cancel out, and we obtain 8 choose 1 divided by</span>
  <span m="323350">10 choose 3.</span></p><p><span m="325690">And to simplify
  things just a little more,</span> <span m="329480">what is 8 choose
  1?</span></p><p><span m="331090">This is the number of ways that we can choose
  one item</span> <span m="334150">out of eight items.</span></p><p><span
  m="336090">And this is just 8.</span></p><p><span m="342220">And let's leave
  the denominator the way it is.</span></p><p><span m="345930">So this is the
  answer to the question that we had.</span></p><p><span m="351150">And now let
  us work towards developing a second approach</span> <span m="355840">towards
  this particular answer.</span></p><p><span m="360710">In our second approach,
  we start first by looking at the</span> <span m="365790">sample space and
  understanding what</span> <span m="368750">conditioning is all
  about.</span></p><p><span m="372110">In our model, we have a sample
  space.</span></p><p><span m="376760">As usual we can denote it by
  omega.</span></p><p><span m="379660">And the sample space contains a bunch of
  possible outcomes.</span></p><p><span m="385380">A typical outcome is going to
  be a sequence of length 10.</span></p><p><span m="393090">It's a sequence of
  heads or tails.</span></p><p><span m="396409">And it's a sequence that has
  length 10.</span></p><p><span m="402680">We want to calculate conditional
  probabilities.</span></p><p><span m="405870">And this places us in a
  conditional universe.</span></p><p><span m="410290">We have the conditioning
  event B, which is some set.</span></p><p><span m="418280">And conditional
  probabilities are probabilities defined</span> <span m="422010">inside this
  set B and define the probabilities, the</span> <span m="425810">conditional
  probabilities of the different outcomes.</span></p><p><span m="429140">What
  are the elements of the set B?</span></p><p><span m="431460">A typical element
  of the set B is a sequence, which is, again</span> <span m="437140">of length
  10, but has exactly three heads.</span></p><p><span m="443630">So these are
  the three-head sequences.</span></p><p><span m="452580">Now, since we're
  conditioning on event B, we can just work</span> <span m="457750">with
  conditional probabilities.</span></p><p><span m="459790">So let us find the
  conditional probability law.</span></p><p><span m="464850">Recall that any
  three-head sequence has the same</span> <span m="470880">probability of
  occurring in the original unconditional</span> <span m="475520">probability
  model, namely as we discussed earlier, any</span> <span m="479870">particular
  three-head sequence has a probability equal to</span> <span m="484560">this
  expression.</span></p><p><span m="486530">So three-head sequences are all
  equally likely.</span></p><p><span m="489150">This means that the
  unconditional probabilities of</span> <span m="491740">all the elements of B
  are the same.</span></p><p><span m="494790">When we construct conditional
  probabilities given an event</span> <span m="498300">B, what happens is that
  the ratio or the relative</span> <span m="503510">proportions of the
  probabilities remain the same.</span></p><p><span m="508520">So conditional
  probabilities are proportional to</span> <span m="511640">unconditional
  probabilities.</span></p><p><span m="514070">These elements of B were equally
  likely in</span> <span m="516730">the original model.</span></p><p><span
  m="518159">Therefore, they remain equally likely in the conditional</span>
  <span m="521960">model as well.</span></p><p><span m="523870">What this means
  is that the conditional probability law on</span> <span m="528260">the set B
  is uniform.</span></p><p><span m="530910">Given that B occurred, all the
  possible outcomes now have the</span> <span m="535140">same
  probability.</span></p><p><span m="536910">Since we have a uniform probability
  law, this means</span> <span m="539310">that we can now answer
  probability</span> <span m="541560">questions by just
  counting.</span></p><p><span m="543940">We're interested in the probability of
  a certain</span> <span m="546850">event, A, given that B
  occurred.</span></p><p><span m="551640">Now, given that B occurred, this part
  of A cannot happen.</span></p><p><span m="555660">So we're interested in the
  probability of outcomes that</span> <span m="558900">belong in this shaded
  region, those outcomes that belong</span> <span m="563240">within the set B.
  To find the probability of this shaded</span> <span m="568830">region
  occurring, we just need to count how many outcomes</span> <span
  m="573080">belong to the shaded region and divide them by the number</span>
  <span m="577220">of outcomes that belong to the set B.</span></p><p><span
  m="581290">That is, we work inside this conditional
  universe.</span></p><p><span m="584880">All of the elements in this
  conditional universe are</span> <span m="587230">equally
  likely.</span></p><p><span m="588700">And therefore, we calculate
  probabilities by counting.</span></p><p><span m="591860">So the desired
  probability is going to be the number of</span> <span m="595410">elements in
  the shaded region, which is the intersection of A</span> <span m="600520">with
  B, divided by the number of elements that belong to the</span> <span
  m="608280">set B.</span></p><p><span m="613000">How many elements are there in
  the intersection of A and B?</span></p><p><span m="618270">These are the
  outcomes or sequences of length 10, in</span> <span m="622590">which the first
  two tosses were heads--</span> <span m="624980">no choice
  here.</span></p><p><span m="626940">And there is one more
  head.</span></p><p><span m="629630">That additional head can appear in one out
  of eight</span> <span m="633350">possible places.</span></p><p><span
  m="634830">So there's eight possible sequences that have the</span> <span
  m="638240">desired property.</span></p><p><span m="640710">How many elements
  are there in the set B?</span></p><p><span m="644010">How many three-head
  sequences are there?</span></p><p><span m="649270">Well, the number of
  three-head sequences is the same as the</span> <span m="654800">number of ways
  that we can choose three elements out of a</span> <span m="658920">set of
  cardinality 10.</span></p><p><span m="661450">And this is 10 choose 3, as we
  also discussed earlier.</span></p><p><span m="667580">So this is the same
  answer as we derived before with our</span> <span m="671750">first
  approach.</span></p><p><span m="673100">So both approaches, of course, give
  the same solution.</span></p><p><span m="677650">This second approach is a
  little easier, because we</span> <span m="681310">never had to involve any p's
  in our calculation.</span></p><p><span m="684730">We go to the answer
  directly.</span></p><p><span m="687210">The reason that this approach worked
  was that the</span> <span m="691110">conditional universe, the event B, had a
  uniform</span> <span m="695970">probability law on it.</span></p><p>&nbsp;</p>
uid: df64784a6463177f3ce04937a3c7819b
type: course
layout: video
---
