---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: jOC4ATKBWlI
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    title: Video-YouTube-Stream
    type: Video
    uid: 9356b3f08c95f517873df5983a486dfe
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/jOC4ATKBWlI/default.jpg'
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 24f5d0b1e1c5c1b36a9ec4d24165204e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: jOC4ATKBWlI
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 171880875579f8e75f1441b242cbf5f7
  - id: jOC4ATKBWlI.srt
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/binomial-random-variables/jOC4ATKBWlI.srt
    title: 3play caption file
    type: null
    uid: aa9b37d20706d47204dae1768e92e4a1
  - id: jOC4ATKBWlI.pdf
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/binomial-random-variables/jOC4ATKBWlI.pdf
    title: 3play pdf file
    type: null
    uid: 2d5f82d0563e2325bb9a857c3bdf81c6
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c51314c5519d20b20151817059a2b110
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 058e3f549f5b87305dfea66d413fe401
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L05-06_300k.mp4
    parent_uid: 92c51d4a56a2395944a137c853248ebb
    title: Video-Internet Archive-MP4
    type: Video
    uid: 257c025456def40cd57316c9cee8b2d4
inline_embed_id: 34183182binomialrandomvariables45089778
order_index: 510
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: binomial-random-variables
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/binomial-random-variables
title: Binomial Random Variables
transcript: >-
  <p><span m="820">The next random variable that we will discuss is the</span>
  <span m="3830">binomial random variable.</span></p><p><span m="5560">It is one
  that is already familiar</span> <span m="7570">to us in most
  respects.</span></p><p><span m="9380">It is associated with the experiment of
  taking a coin</span> <span m="13190">and tossing it n times
  independently.</span></p><p><span m="16510">And at each toss, there is a
  probability, p,</span> <span m="20100">of obtaining heads.</span></p><p><span
  m="21590">So the experiment is completely specified in terms</span> <span
  m="25120">of two parameters--</span> <span m="26270">n, the number of tosses,
  and p, the probability of heads at</span> <span m="30470">each one of the
  tosses.</span></p><p><span m="32549">We can represent this experiment by the
  usual</span> <span m="35830">sequential tree diagram.</span></p><p><span
  m="38020">And the leaves of the tree are the possible outcomes of the</span>
  <span m="41490">experiment.</span></p><p><span m="42440">So these are the
  elements of the sample space.</span></p><p><span m="44640">And a typical
  outcome is a particular sequence of heads</span> <span m="49585">and tails
  that has length n.</span></p><p><span m="52190">In this diagram here, we took
  n to be equal to 3.</span></p><p><span m="56890">We can now define a random
  variable associated with this</span> <span
  m="60120">experiment.</span></p><p><span m="60720">Our random variable that we
  denote by capital X is the</span> <span m="63660">number of heads that are
  observed.</span></p><p><span m="66370">So for example, if the outcome happens
  to be this one--</span> <span m="70950">tails, heads, heads-- we have 2 heads
  that are observed.</span></p><p><span m="75900">And the numerical value of our
  random variable is equal to 2.</span></p><p><span m="81200">In general, this
  random variable, a binomial random</span> <span m="84580">variable, can be
  used to model any kind of situation in which</span> <span m="89500">we have a
  fixed number of independent trials and</span> <span m="94200">identical
  trials, and each trial can result in success or</span> <span
  m="98160">failure, and we have a probability of success equal</span> <span
  m="102539">to some given number, p.</span></p><p><span m="104880">The number
  of successes obtained in these trials is,</span> <span m="108440">of course,
  random and it is modeled by a</span> <span m="111000">binomial random
  variable.</span></p><p><span m="113800">We can now proceed and calculate the
  PMF of this</span> <span m="117979">random variable.</span></p><p><span
  m="119220">Instead of calculating the whole PMF, let us look at just</span>
  <span m="123140">one typical entry of the PMF.</span></p><p><span
  m="126000">Let's look at this entry, which, by definition, is the</span> <span
  m="129259">probability that our random variable takes the value of
  2.</span></p><p><span m="134990">Now, the random variable taking the numerical
  value of</span> <span m="137840">2, this is an event that can happen in three
  possible ways</span> <span m="143030">that we can identify in the sample
  space.</span></p><p><span m="145840">We can have 2 heads followed by a
  tail.</span></p><p><span m="149150">We can have heads, tails,
  heads.</span></p><p><span m="152990">Or we can have tails, heads,
  heads.</span></p><p><span m="159460">The probability of this outcome is p
  times p</span> <span m="163150">times (1 minus p).</span></p><p><span
  m="164690">So it's p squared times (1 minus p).</span></p><p><span
  m="167230">And the other two outcomes also have the same</span> <span
  m="169660">probability, so the overall probability is 3 times
  this.</span></p><p><span m="174050">Which can also be written this way, 3 is
  the same as</span> <span m="179250">3-choose-2.</span></p><p><span
  m="180060">It's the number of ways that you can choose 2 heads, where</span>
  <span m="183050">they will be placed in a sequence of</span> <span
  m="184930">3 slots or 3 trials.</span></p><p><span m="189940">More generally,
  we have the familiar binomial formula.</span></p><p><span m="195660">So this
  is a formula that you have already seen.</span></p><p><span m="198530">It's
  the probability of obtaining k successes in a</span> <span m="202180">sequence
  of n independent trials.</span></p><p><span m="205180">The only thing that is
  new is that instead of using the</span> <span m="209160">traditional
  probability notation, now</span> <span m="212130">we're using PMF
  notation.</span></p><p><span m="215020">To get a feel for the binomial PMF,
  it's instructive to look</span> <span m="218750">at some
  plots.</span></p><p><span m="219890">So suppose that we toss the coin three
  times and that the</span> <span m="223670">coin tosses are fair, so that the
  probability of heads is</span> <span m="226510">equal to
  1/2.</span></p><p><span m="228180">Then we see that 1 head or 2 heads are
  equally likely, and</span> <span m="232930">they are more likely than the
  outcome of 0 or 3 heads.</span></p><p><span m="239100">Now, if we change the
  number of tosses and toss the coin 10</span> <span m="242860">times, then we
  see that the most likely result</span> <span m="247260">is to have 5
  heads.</span></p><p><span m="250050">And then as we move away from 5 in either
  direction, the</span> <span m="253660">probability of that particular
  result</span> <span m="255920">becomes smaller and smaller.</span></p><p><span
  m="258250">Now, if we toss the coin many times, let's say 100 times,</span>
  <span m="262840">the coin is still fair, then we see that the number of</span>
  <span m="268250">heads that we're going to get is most likely to be
  somewhere</span> <span m="272350">in this range between, let's say, 35 and
  65.</span></p><p><span m="276810">These are values of the random variable that
  have some</span> <span m="280750">noticeable or high
  probabilities.</span></p><p><span m="283820">But anything below 30 or anything
  about 70 is extremely</span> <span m="288710">unlikely to
  occur.</span></p><p><span m="291240">We can generate similar plots for unfair
  coins.</span></p><p><span m="295360">So suppose now that our coin is biased
  and the probability</span> <span m="298360">of heads is quite low, equal to
  0.2.</span></p><p><span m="301610">In that case, the most likely result is
  that we're going to</span> <span m="305680">see 0 heads.</span></p><p><span
  m="307640">And then, there's smaller and smaller probability of</span> <span
  m="310740">obtaining more heads.</span></p><p><span m="312440">On the other
  hand, if we toss the coin 10 times, we expect</span> <span m="316740">to see a
  few heads, not a very large number, but some number</span> <span m="321320">of
  heads between, let's say, 0 and 4.</span></p><p><span m="325210">Finally, if
  we toss the coin 100 times and we take the coin</span> <span m="330210">to be
  an extremely unfair one, what do we expect to see?</span></p><p><span
  m="335690">If we think of probabilities as frequencies, we expect to</span>
  <span m="339220">see heads roughly 10% of the time.</span></p><p><span
  m="343010">So, given that n is 100, we expect to see about 10
  heads.</span></p><p><span m="348190">But when we say about 10 heads, we do
  not</span> <span m="351460">mean exactly 10 heads.</span></p><p><span
  m="353659">About 10 heads, in this instance, as this plot tells</span> <span
  m="357480">us, is any number more or less in the range from 0 to
  20.</span></p><p><span m="362440">But anything above 20 is extremely
  unlikely.</span></p><p>&nbsp;</p>
uid: 92c51d4a56a2395944a137c853248ebb
type: courses
layout: video
---
