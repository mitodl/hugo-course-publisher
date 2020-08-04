---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: mUxg3j_h5GM
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    title: Video-YouTube-Stream
    type: Video
    uid: 2e3ca417095e7720a770f6d24ab2c759
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/mUxg3j_h5GM/default.jpg'
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: cba3a0ea2f207b8820f20b479792111e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: mUxg3j_h5GM
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 905a2348b36301bf67d411b8c3b2bccb
  - id: mUxg3j_h5GM.srt
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/countable-additivity/mUxg3j_h5GM.srt
    title: 3play caption file
    type: null
    uid: c797df96ee2388cee0cc1b1bb9199314
  - id: mUxg3j_h5GM.pdf
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/countable-additivity/mUxg3j_h5GM.pdf
    title: 3play pdf file
    type: null
    uid: 1edd5d52d7d1906bc011c526c61bd3ab
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 1a14c741a0f82d2959667d073c1b417d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ec301eef47b49aedf6e685e0bae82112
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L01-09_300k.mp4
    parent_uid: 34e5984bb1182e37e7b9c137804249d5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 02bd2c2151f6dee2dd65ec63232d1f9b
inline_embed_id: 74395156countableadditivity34463782
order_index: 105
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: countable-additivity
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/countable-additivity
title: Countable Additivity
transcript: >-
  <p><span m="680">We have seen so far an example of a probability law on
  a</span> <span m="3920">discrete and finite sample space as well as an
  example</span> <span m="7590">with an infinite and continuous sample
  space.</span></p><p><span m="10550">Let us now look at an example involving a
  discrete but</span> <span m="14830">infinite sample space.</span></p><p><span
  m="17350">We carry out an experiment whose outcome is an arbitrary</span>
  <span m="20810">positive integer.</span></p><p><span m="22890">As an example
  of such an experiment, suppose that we</span> <span m="25300">keep tossing a
  coin and the outcome is the number of</span> <span m="28610">tosses until we
  observe heads for the first time.</span></p><p><span m="32850">The first heads
  might appear in the first toss or the</span> <span m="36140">second or the
  third, and so on.</span></p><p><span m="39150">So in this example, any
  positive integer is possible.</span></p><p><span m="42890">And so our sample
  space is infinite.</span></p><p><span m="46320">Let us not specify a
  probability law.</span></p><p><span m="49480">A probability law should
  determine the probability of</span> <span m="52730">every event, of every
  subset of the sample space.</span></p><p><span m="56950">That is, the
  probability of every</span> <span m="59080">set of positive
  integers.</span></p><p><span m="61970">But instead I will just tell you the
  probability of events</span> <span m="66140">that contain a single
  element.</span></p><p><span m="68860">I'm going to tell you that there is
  probability 1 over 2</span> <span m="73050">to the n that the outcome is equal
  to n.</span></p><p><span m="78010">Is this good enough?</span></p><p><span
  m="79860">Is this information enough to determine the probability of</span>
  <span m="83800">any subset?</span></p><p><span m="86420">Before we look into
  that question, let us first do a</span> <span m="88950">quick sanity check to
  see whether these numbers that we</span> <span m="92425">are given look like
  legitimate probabilities.</span></p><p><span m="95420">Do they add to
  1?</span></p><p><span m="97410">Let's do a quick check.</span></p><p><span
  m="99410">So the sum over all the possible values of n of the</span> <span
  m="105840">probabilities that we're given, which is an infinite</span> <span
  m="109610">sum starting from 1, all the way up to infinity, of 1 over</span>
  <span m="115520">2 to the n, is equal to the following.</span></p><p><span
  m="118700">First we take out a factor of 1/2 from all of these terms,</span>
  <span m="124250">which reduces the exponent from n to n minus
  1.</span></p><p><span m="128080">This is the same as running the sum from n
  equals 0 to</span> <span m="133700">infinity of 1/2 and to the
  n.</span></p><p><span m="139310">And now we have a usual infinite geometric
  series and</span> <span m="144980">we have a formula for
  this.</span></p><p><span m="147730">The geometric series has a value of 1 over
  1 minus the</span> <span m="153320">number whose power we're taking, which is
  1/2.</span></p><p><span m="159280">And after we do the arithmetic, this turns
  out to</span> <span m="162520">be equal to 1.</span></p><p><span m="164240">So
  indeed, it appears that we have the basic elements of</span> <span
  m="170860">what it would take to have a legitimate probability
  law.</span></p><p><span m="174360">But now let us look into how we might
  calculate the</span> <span m="177870">probability of some general
  event.</span></p><p><span m="180510">For example, the probability that the
  outcome is even.</span></p><p><span m="185370">We proceed as
  follows.</span></p><p><span m="188300">The probability that the outcome is
  even, this is the</span> <span m="191200">probability of an infinite set that
  consists of</span> <span m="195840">all the even integers.</span></p><p><span
  m="202280">We can write this set as the union of lots of little sets</span>
  <span m="209760">that contain a single element each.</span></p><p><span
  m="213090">So it's the set containing the number 2, the set containing</span>
  <span m="216530">the number 4, the set containing the</span> <span
  m="218750">number 6, and so on.</span></p><p><span m="224010">At this point we
  notice that we're talking about the</span> <span m="227170">probability of a
  union of sets and these sets are disjoint</span> <span m="231430">because they
  contain different elements.</span></p><p><span m="234760">So we can use an
  additivity property and say that this is</span> <span m="240900">the
  probability of obtaining a 2, plus the probability of</span> <span
  m="245280">obtaining a 4, plus the probability of</span> <span
  m="248190">obtaining a 6 and so on.</span></p><p><span m="252390">If you're
  curious about doing this calculation and actually</span> <span
  m="255570">obtaining a numerical answer, you would proceed as
  follows.</span></p><p><span m="259339">You notice that this is 1 over 2 to the
  second power plus 1</span> <span m="266030">over 2 to the fourth power plus 1
  over 2 to the sixth</span> <span m="271370">power and so
  on.</span></p><p><span m="274170">Now you factor out a factor of 1/4 and what
  you're left is 1</span> <span m="283260">plus 1 over 2 to the second power,
  which is 1/4, plus 1</span> <span m="288400">over 2 to the fourth power, which
  is the same as 1/4 to</span> <span m="296000">the second power and so
  on.</span></p><p><span m="299760">And now we have 1/4 times the infinite sum
  of a geometric</span> <span m="305440">series, which gives us 1 over 1 minus
  1/4.</span></p><p><span m="312620">And after you do the algebra you obtain a
  numerical answer,</span> <span m="316240">which is equal to
  1/3.</span></p><p><span m="320260">But leaving the details of the calculation
  aside, the more</span> <span m="323550">important question I want to address
  is the following.</span></p><p><span m="326810">Is this calculation
  correct?</span></p><p><span m="329430">We seem to have used an
  additivity</span> <span m="332370">property at this point.</span></p><p><span
  m="337720">But the additivity properties that we have in our hands at</span>
  <span m="341500">this point only talk about disjoint unions of finitely</span>
  <span m="346800">many subsets.</span></p><p><span m="348290">Our initial axiom
  talked about a disjoint union of two</span> <span m="351460">subsets and then
  later on we established a similar property</span> <span m="354990">for a
  disjoint union of finitely many subsets.</span></p><p><span m="358820">But
  here we're talking about the union of</span> <span m="362620">infinitely many
  subsets.</span></p><p><span m="365770">So this step here is not really allowed
  by what we have</span> <span m="371940">in our hands.</span></p><p><span
  m="373140">On the other hand, we would like our theory to allow this</span>
  <span m="376500">kind of calculation.</span></p><p><span m="378540">The way
  out of this dilemma is to introduce an additional</span> <span
  m="383070">axiom that will indeed allow this kind of
  calculation.</span></p><p><span m="389660">The axiom that we introduce is the
  following.</span></p><p><span m="392836">If we have an infinite sequence of
  disjoint events,</span> <span m="399700">as for example in this
  picture.</span></p><p><span m="402430">We have our sample
  space.</span></p><p><span m="404560">We have a first event,
  A1.</span></p><p><span m="406909">We have a second event,
  A2.</span></p><p><span m="409440">The third event, A3.</span></p><p><span
  m="411690">And so we keep continuing and we have an infinite sequence</span>
  <span m="415730">of such events.</span></p><p><span m="417400">Then the
  probability of the union of these events, of</span> <span m="422770">these
  infinitely many events, is the sum of their individual</span> <span
  m="427600">probabilities.</span></p><p><span m="429390">The key word here is
  the word sequence.</span></p><p><span m="435630">Namely, these events, these
  sets that we're dealing with,</span> <span m="440430">can be arranged so that
  we can talk about the first event,</span> <span m="445120">A1, the second
  event, A2, the third one, A3, and so on.</span></p><p><span m="451490">To
  appreciate the issue that arises here and to see why the</span> <span
  m="455510">word sequence is so important, let us consider the following</span>
  <span m="461360">calculation.</span></p><p><span m="463110">Our sample space
  is the unit square.</span></p><p><span m="468750">And we consider a model
  where the probability of a set is</span> <span m="472290">its area, as in the
  examples that we considered earlier.</span></p><p><span m="477030">Let us now
  look at the probability of the overall</span> <span m="480550">sample
  space.</span></p><p><span m="482180">Our sample space is the unit square and
  the unit square can</span> <span m="487890">be thought of as the union of
  various sets that consist of</span> <span m="493870">single
  points.</span></p><p><span m="495330">So it's the union of subsets with one
  element each.</span></p><p><span m="502780">And it's a union taken over all
  the</span> <span m="505100">points in the unit square.</span></p><p><span
  m="508770">Then we think about additivity.</span></p><p><span m="511590">We
  observe that these subsets are disjoint.</span></p><p><span m="515490">If
  we're considering different points, then we get disjoint</span> <span
  m="519080">single element sets.</span></p><p><span m="520890">And then an
  additivity property would tells us that</span> <span m="524190">the
  probability of these union is the sum of the</span> <span
  m="527450">probabilities of the different single element
  subsets.</span></p><p><span m="533750">Now, as we discussed before, single
  element subsets have 0</span> <span m="537910">probability.</span></p><p><span
  m="538770">So we have a sum of lots of 0s and the sum of 0s should be</span>
  <span m="544320">equal to 0.</span></p><p><span m="546310">On the other hand,
  by the probability axioms, the</span> <span m="549310">probability of the
  entire sample space</span> <span m="551860">should be equal to
  1.</span></p><p><span m="553750">And so we have established that 1 is equal to
  0.</span></p><p><span m="558140">This looks like a paradox.</span></p><p><span
  m="560120">Is it?</span></p><p><span m="561840">The catch is that there is
  nothing in the axioms we have</span> <span m="566110">introduced so far or the
  properties we have established</span> <span m="569770">that would justify this
  step.</span></p><p><span m="572600">So this step here is
  questionable.</span></p><p><span m="576940">You might argue that the unit
  square is the union of</span> <span m="580440">disjoint single element sets,
  which is the case that we have</span> <span m="585490">in additivity
  axioms.</span></p><p><span m="587340">But the additivity axiom only applies
  when we have a</span> <span m="590950">sequence of events.</span></p><p><span
  m="593770">And this is not what we have here.</span></p><p><span
  m="596580">This is not a union of a sequence of</span> <span m="599470">single
  element sets.</span></p><p><span m="601090">In fact, there is no way that the
  elements of the unit</span> <span m="604160">square can be arranged in a
  sequence.</span></p><p><span m="606930">The unit square is said to be an
  uncountable set.</span></p><p><span m="613440">This is a deep and fundamental
  mathematical fact.</span></p><p><span m="616950">What it essentially says is
  that there are two kinds of</span> <span m="619980">infinite
  sets.</span></p><p><span m="621510">Discrete ones or in formal terminology
  countable.</span></p><p><span m="626450">These are sets whose elements can be
  arranged in a sequence,</span> <span m="629980">like the
  integers.</span></p><p><span m="631680">And also uncountable sets, such as the
  unit square or the</span> <span m="636910">real line, whose elements cannot
  be</span> <span m="640030">arranged in a sequence.</span></p><p><span
  m="642140">If you're curious, you can find the proof of this</span> <span
  m="645680">important fact in the supplementary materials that</span> <span
  m="648400">we are providing.</span></p><p><span m="651020">After all these
  discussion, you may now have legitimate</span> <span m="653680">suspicions
  about the models we have been looking at.</span></p><p><span m="657340">Is
  area a legitimate probability law?</span></p><p><span m="660860">Does it even
  satisfy countable additivity?</span></p><p><span m="665600">This question
  takes us into deep waters and has to do with</span> <span m="669000">a deep
  subfield of mathematics called Measure Theory.</span></p><p><span
  m="672250">Fortunately, it turns out that all is well.</span></p><p><span
  m="675970">Area is a legitimate probability law.</span></p><p><span
  m="679030">It does indeed satisfy the countable additivity axiom as</span>
  <span m="683600">long as we only deal with nice subsets of the unit
  square.</span></p><p><span m="689270">Fortunately, the subsets that arise in
  whatever we do in</span> <span m="692640">this course will be
  &quot;nice&quot;.</span></p><p><span m="695220">Subsets that are not nice are
  quite pathological and we will</span> <span m="699890">not encounter
  them.</span></p><p><span m="702260">At this stage we are not in a position to
  say anything more</span> <span m="707170">that would be meaningful about these
  issues because they're</span> <span m="710200">quite complicated and
  mathematically deep.</span></p><p><span m="713230">We can only say that there
  are some serious mathematical</span> <span
  m="717550">subtleties.</span></p><p><span m="718660">But fortunately, they can
  all be overcome</span> <span m="721620">in a rigorous
  manner.</span></p><p><span m="723190">And for the rest of this class, you can
  just forget</span> <span m="726190">about these subtle
  issues.</span></p><p>&nbsp;</p>
uid: 34e5984bb1182e37e7b9c137804249d5
type: course
layout: video
---
