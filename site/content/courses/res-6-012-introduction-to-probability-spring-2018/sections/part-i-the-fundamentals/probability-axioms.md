---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: pA83XtLeVig
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    title: Video-YouTube-Stream
    type: Video
    uid: ac91bd3c5654eeae3cfbcfc8d97a3999
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/pA83XtLeVig/default.jpg'
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a2e12082e7d4e4e18bc625965bc303fa
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: pA83XtLeVig
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e5ecc83df631f626f6fc1f211a8c7dee
  - id: pA83XtLeVig.srt
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-axioms/pA83XtLeVig.srt
    title: 3play caption file
    type: null
    uid: ade6cce34ecea3cb3d8289e677691780
  - id: pA83XtLeVig.pdf
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-axioms/pA83XtLeVig.pdf
    title: 3play pdf file
    type: null
    uid: 4c159155e46460d0bd56f71225e52980
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 1d6c42cd9ae51b8ea3e15bc520aebdd5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4ea12474e6336866c712a0c755fba4f7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L01-04_300k.mp4
    parent_uid: 1ec0a6697dde13f2791db3910664a6fe
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5f48aad75f941f61f2b64b24f22d27a8
inline_embed_id: 49032921probabilityaxioms45452294
order_index: 60
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: probability-axioms
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/probability-axioms
title: Probability Axioms
transcript: >-
  <p><span m="1500">We have so far discussed the first step involved in
  the</span> <span m="4940">construction of a probabilistic
  model.</span></p><p><span m="7350">Namely, the construction of a sample space,
  which is a</span> <span m="10930">description of the possible outcomes of a
  probabilistic</span> <span m="13730">experiment.</span></p><p><span
  m="15100">We now come to the second and much more interesting
  part.</span></p><p><span m="19760">We need to specify which outcomes are more
  likely to</span> <span m="24210">occur and which ones are less likely to occur
  and so on.</span></p><p><span m="28540">And we will do that by assigning
  probabilities to the</span> <span m="33280">different
  outcomes.</span></p><p><span m="35220">However, as we try to do this
  assignment, we run into some</span> <span m="40550">kind of difficulty, which
  is the following.</span></p><p><span m="43340">Remember the previous
  experiment involving a</span> <span m="46310">continuous sample space, which
  was the unit square and in</span> <span m="50880">which we throw a dart at
  random and record the point</span> <span m="55280">that
  occurred.</span></p><p><span m="57160">In this experiment, what do you think
  is the probability</span> <span m="60760">of a particular
  point?</span></p><p><span m="62860">Let's say what is the probability that my
  dart hits</span> <span m="67540">exactly the center of this
  square.</span></p><p><span m="71890">Well, this probability would be
  essentially 0.</span></p><p><span m="74330">Hitting the center exactly with
  infinite</span> <span m="76990">precision should be 0.</span></p><p><span
  m="78870">And so it's natural that in such a continuous model any</span> <span
  m="82460">individual point should have a 0 probability.</span></p><p><span
  m="87020">For this reason instead of assigning probabilities to</span> <span
  m="91280">individual points, we will instead assign probabilities</span> <span
  m="96640">to whole sets, that is, to subsets of the sample
  space.</span></p><p><span m="102870">So here we have our sample space, which
  is some</span> <span m="109090">abstract set omega.</span></p><p><span
  m="113620">Here is a subset of the sample space.</span></p><p><span
  m="116570">Call it capital A. We're going to assign a probability to</span>
  <span m="121540">that subset A, which we're going to denote with this</span>
  <span m="125620">notation, which we read as the probability of set A.
  So</span> <span m="132380">probabilities will be assigned to
  subsets.</span></p><p><span m="135580">And these will not cause us
  difficulties in the continuous</span> <span m="138420">case because even
  though individual points would have 0</span> <span m="142280">probability, if
  you ask me what are the odds that my dart</span> <span m="146720">falls in the
  upper half, let's say, of this diagram, then</span> <span m="151760">that
  should be a reasonable positive number.</span></p><p><span m="154840">So even
  though individual outcomes may have 0</span> <span m="157220">probabilities,
  sets of outcomes in general would be</span> <span m="161110">expected to have
  positive probabilities.</span></p><p><span m="164230">So coming back, we're
  going to assign probabilities to the</span> <span m="168800">various subsets
  of the sample space.</span></p><p><span m="171810">And here comes a piece of
  terminology, that a subset of</span> <span m="175090">the sample space is
  called an event.</span></p><p><span m="177890">Why is it called an
  event?</span></p><p><span m="179880">Because once we carry out the experiment
  and we observe the</span> <span m="184110">outcome of the experiment, either
  this outcome is inside</span> <span m="188150">the set A and in that case we
  say that event A has occurred,</span> <span m="193820">or the outcome falls
  outside the set A in which case we say</span> <span m="198550">that event A
  did not occur.</span></p><p><span m="202640">Now we want to move on and
  describe certain rules.</span></p><p><span m="206630">The rules of the game in
  probabilistic models, which</span> <span m="209340">are basically the rules
  that these</span> <span m="211570">probabilities should
  satisfy.</span></p><p><span m="214030">They shouldn't be completely
  arbitrary.</span></p><p><span m="216510">First, by convention, probabilities
  are always given</span> <span m="222240">in the range between 0 and
  1.</span></p><p><span m="225270">Intuitively, 0 probability means that we
  believe that</span> <span m="228390">something practically cannot
  happen.</span></p><p><span m="231250">And probability of 1 means that we're
  practically certain</span> <span m="236680">that an event of interest is going
  to happen.</span></p><p><span m="240080">So we want to specify rules of these
  kind for probabilities.</span></p><p><span m="244410">These rules that any
  probabilistic model should</span> <span m="247240">satisfy are called the
  axioms of probability theory.</span></p><p><span m="251100">And our first
  axiom is a nonnegativity axiom.</span></p><p><span m="254560">Namely,
  probabilities will always be</span> <span m="256810">non-negative
  numbers.</span></p><p><span m="259130">It's a reasonable
  rule.</span></p><p><span m="260940">The second rule is that if the subset that
  we're looking at</span> <span m="266050">is actually not a subset but is the
  entire sample space</span> <span m="269760">omega, the probability of it
  should always be equal to 1.</span></p><p><span m="275810">What does that
  mean?</span></p><p><span m="277570">We know that the outcome is going to be an
  element of the</span> <span m="280850">sample space.</span></p><p><span
  m="281850">This is the definition of the sample space.</span></p><p><span
  m="284430">So we have absolute certainty that our outcome is going to</span>
  <span m="288000">be in omega.</span></p><p><span m="289490">Or in different
  language we have absolute certainty that</span> <span m="292659">event omega
  is going to occur.</span></p><p><span m="295630">And we capture this certainty
  by saying that the probability</span> <span m="299170">of event omega is equal
  to 1.</span></p><p><span m="302760">These two axioms are pretty simple and
  very intuitive.</span></p><p><span m="307030">The more interesting axiom is
  the next one that says</span> <span m="311150">something a little more
  complicated.</span></p><p><span m="313880">Before we discuss that particular
  axiom, a quick</span> <span m="318800">reminder about set theoretic
  notation.</span></p><p><span m="322770">If we have two sets, let's say a set
  A, and another set,</span> <span m="329250">another set B, we use this
  particular notation, which we</span> <span m="338260">read as &quot;A
  intersection B&quot; to refer to the collection of</span> <span
  m="344360">elements that belong to both A and B. So in this picture,
  the</span> <span m="349960">intersection of A and B is this shaded
  set.</span></p><p><span m="356390">We use this notation, which we read as
  &quot;A union B&quot;, to refer</span> <span m="363030">to the set of elements
  that belong to A</span> <span m="366960">or to B or to
  both.</span></p><p><span m="369840">So in terms of this picture, the union of
  the two sets</span> <span m="373990">would be this blue
  set.</span></p><p><span m="377250">After this reminder about set theoretic
  notation, now let us</span> <span m="380830">look at the form of the third
  axiom.</span></p><p><span m="383370">What does it say?</span></p><p><span
  m="384880">If we have two sets, two events, two subsets of the</span> <span
  m="388860">sample space, which are disjoint.</span></p><p><span m="393480">So
  here's our sample space.</span></p><p><span m="396460">And here are the two
  sets that are disjoint.</span></p><p><span m="403340">In mathematical terms,
  two sets being disjoint means that</span> <span m="407110">their intersection
  has no elements.</span></p><p><span m="410640">So their intersection is the
  empty set.</span></p><p><span m="413620">And we use this symbol here to denote
  the empty set.</span></p><p><span m="419159">So if the intersection of two
  sets is empty, then the</span> <span m="423030">probability that the outcome
  of the experiments falls in</span> <span m="427685">the union of A and B, that
  is, the probability that the</span> <span m="431740">outcome is here or there,
  is equal to the sum of the</span> <span m="437260">probabilities of these two
  sets.</span></p><p><span m="441700">This is called the additivity
  axiom.</span></p><p><span m="444070">So it says that we can add probabilities
  of different</span> <span m="449040">sets when those two sets are
  disjoint.</span></p><p><span m="452760">In some sense we can think of
  probability as being one pound</span> <span m="458260">of some substance which
  is spread over our sample space</span> <span m="463010">and the probability of
  A is how much of that substance is</span> <span m="466780">sitting on top of a
  set A. So what this axiom is saying is</span> <span m="471659">that the total
  amount of that substance sitting on top of A</span> <span m="476740">and B is
  how much is sitting on top of A plus how much is</span> <span
  m="481510">sitting on top of B. And that is the case whenever the sets</span>
  <span m="485590">A and B are disjoint from each other.</span></p><p><span
  m="490510">The additivity axiom needs to be refined a bit.</span></p><p><span
  m="493960">We will talk about that a little later.</span></p><p><span
  m="496656">Other than this refinement, these three axioms are the</span> <span
  m="500150">only requirements in order to have a</span> <span
  m="502490">legitimate probability model.</span></p><p><span m="505100">At this
  point you may ask, shouldn't there be more</span> <span
  m="507950">requirements?</span></p><p><span m="509270">Shouldn't we, for
  example, say that probabilities cannot be</span> <span m="512909">greater than
  1?</span></p><p><span m="514950">Yes and no.</span></p><p><span m="516760">We
  do not want probabilities to be larger than 1, but we do</span> <span
  m="520570">not need to say it.</span></p><p><span m="522320">As we will see in
  the next segment, such a requirement</span> <span m="525460">follows from what
  we have already said.</span></p><p><span m="528340">And the same is true for
  several other natural</span> <span m="531770">properties of
  probabilities.</span></p><p>&nbsp;</p>
uid: 1ec0a6697dde13f2791db3910664a6fe
type: courses
layout: video
---
