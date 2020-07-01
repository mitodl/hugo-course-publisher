---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: KdAsNQVdaNk
    parent_uid: d73ba013cc5d737da529c440044851c5
    title: Video-YouTube-Stream
    type: Video
    uid: 6b3e25a639be24410699e4c1cbedc7e2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/KdAsNQVdaNk/default.jpg'
    parent_uid: d73ba013cc5d737da529c440044851c5
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 9d1661604efe2487044bdbd36be17ab7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: KdAsNQVdaNk
    parent_uid: d73ba013cc5d737da529c440044851c5
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: edf87c7432f5d7d901ac12bf861e6bdd
  - id: KdAsNQVdaNk.srt
    parent_uid: d73ba013cc5d737da529c440044851c5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/birth-death-processes-2014-part-ii/KdAsNQVdaNk.srt
    title: 3play caption file
    type: null
    uid: 5b713540f4ab7082a7ee2058abb303df
  - id: KdAsNQVdaNk.pdf
    parent_uid: d73ba013cc5d737da529c440044851c5
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/birth-death-processes-2014-part-ii/KdAsNQVdaNk.pdf
    title: 3play pdf file
    type: null
    uid: bc8180df6dc3e17be097ede069e20032
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d73ba013cc5d737da529c440044851c5
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bb3bbdfff3b74e6409d635c2cc03dae4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d73ba013cc5d737da529c440044851c5
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 58d37e7caf04c903866ecc9c90920316
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L25-11_300k.mp4
    parent_uid: d73ba013cc5d737da529c440044851c5
    title: Video-Internet Archive-MP4
    type: Video
    uid: 62273f51321fd2d9302c0488eb4c0ea5
inline_embed_id: 68094303birthdeathprocessespartii87887582
order_index: 2438
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: birth-death-processes-2014-part-ii
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/birth-death-processes-2014-part-ii
title: Birth-Death Processes — Part II
transcript: >-
  <p><span m="990">So we have just seen that a clever trick based</span> <span
  m="4270">on the frequency interpretation of the transitions</span> <span
  m="6890">between successive states, like here,</span> <span m="10350">allows
  us to write a simple set of equations which</span> <span m="13530">can be
  solved recursively, given here, giving pi i plus 1</span> <span m="19800">as a
  function of pi of i.</span></p><p><span m="22330">More specifically, we have
  pi i plus 1</span> <span m="25720">equals pi of i times p of
  i.</span></p><p><span m="30570">Divide by q of i plus 1.</span></p><p><span
  m="33330">And this is true for i equal 0 up to m.</span></p><p><span
  m="38040">And to start the recursion, we need to find pi of
  0.</span></p><p><span m="42620">And this can be done using this normalization
  condition-- which</span> <span m="49170">leads to pi of 0 times 1 plus p0 over
  q1 plus et cetera</span> <span m="60110">equals 1.</span></p><p><span
  m="62650">Let's illustrate the details of this procedure</span> <span
  m="64970">on a special case.</span></p><p><span m="66710">Let's assume that
  all the p's are the same</span> <span m="69750">and all the q's are the
  same.</span></p><p><span m="72450">So this is a special case in which we are
  interested.</span></p><p><span m="76390">So at each point in time, if we are
  somewhere in the middle,</span> <span m="81030">you have probability p of
  moving up,</span> <span m="84110">and probability q of moving
  down.</span></p><p><span m="87770">Define rho to be the ratio of p over
  q.</span></p><p><span m="92500">Rho can be interpreted as the frequency of
  going up</span> <span m="95930">versus the frequency of going
  down.</span></p><p><span m="98420">If it's a service system, you can think of
  it</span> <span m="101190">as a measure of how loaded the system
  is.</span></p><p><span m="104470">If p equals q, that means that if you are at
  this state--</span> <span m="108340">you are equally likely to move left or
  right.</span></p><p><span m="112500">So the chain does not have a
  tendency</span> <span m="114720">to move in that direction or in that
  direction.</span></p><p><span m="119070">If rho is bigger than 1, so that p is
  bigger than q,</span> <span m="124880">it means that whenever we are at some
  state in the middle,</span> <span m="128430">we are more likely to move right,
  as opposed</span> <span m="132050">to moving left.</span></p><p><span
  m="134800">Which means that the chain has a tendency</span> <span
  m="137230">to move in that direction.</span></p><p><span m="139440">And if you
  think of this as a number of customers in queue,</span> <span m="143240">it
  means your system has the tendency to become loaded</span> <span
  m="146450">and to build up a queue.</span></p><p><span m="148160">So rho being
  bigger than 1 corresponds</span> <span m="151480">to a heavy load, where
  queues build up.</span></p><p><span m="154390">Rho less than one corresponds
  to the system</span> <span m="157079">where queues have the tendency to drain
  down.</span></p><p><span m="159370">The system is going to move in that
  direction.</span></p><p><span m="162690">Now let us write down these
  equations</span> <span m="166210">for that special case.</span></p><p><span
  m="168350">We end up with that, which is pi i times rho,</span> <span
  m="172090">by definition of rho.</span></p><p><span m="174100">Once you look
  at this equation, you realize that pi of 1</span> <span m="178760">is pi of 0
  times rho.</span></p><p><span m="181860">And pi of 2 is pi of 1 times rho
  equals</span> <span m="187280">pi of 0 times rho square.</span></p><p><span
  m="190740">And so on and so forth.</span></p><p><span m="192810">And you find
  that you can express pi of i</span> <span m="196200">as pi of 0 times rho at
  the power</span> <span m="198750">i for any possible i between 0 and
  m.</span></p><p><span m="204600">And now if we use the normalization
  condition,</span> <span m="211780">we get that pi of 0 times 1 plus rho plus
  rho</span> <span m="216370">squared plus rho at the power m is equal to
  1.</span></p><p><span m="224050">Let's now complete the calculations</span>
  <span m="225970">for two special cases.</span></p><p><span m="227920">If rho
  is equal to 1, that means p equals q.</span></p><p><span m="231610">Then pi i
  equals pi of 0 for all i.</span></p><p><span m="236860">It means that all the
  steady state probabilities are equal.</span></p><p><span m="240500">This
  special case is called a symmetric random walk.</span></p><p><span
  m="244690">So you start at the state at a point in time.</span></p><p><span
  m="247640">Either you stay in place, or you have an equal probability</span>
  <span m="251260">of going left or right.</span></p><p><span m="254220">There
  is no bias in either direction.</span></p><p><span m="256589">You might think
  that in such a process,</span> <span m="258510">you will tend to get stuck
  either</span> <span m="260428">near one end or the other
  end.</span></p><p><span m="263390">It turns out that no, in the long
  run,</span> <span m="265740">the symmetric random walk is equally
  likely</span> <span m="268250">to be at any of those
  states.</span></p><p><span m="270660">And for the special case-- this equation
  here-- is simply</span> <span m="274659">that pi of 0 times 1 plus m equals
  one.</span></p><p><span m="280159">That means that pi of 0 equals 1 over 1
  plus m.</span></p><p><span m="287520">Which is consistent with the fact</span>
  <span m="289350">that all steady-state probabilities are the
  same.</span></p><p><span m="291440">They are all equally
  likely.</span></p><p><span m="292890">They are end states.</span></p><p><span
  m="294370">And so each one of them, pi i is pi of 0, which is 1 over 1</span>
  <span m="299850">plus m.</span></p><p><span m="300690">The Markov chain is
  equally likely</span> <span m="302840">to be in any of these m plus 1 states
  in the long run.</span></p><p><span m="307590">Suppose now instead of p equals
  q, that m is very, very large,</span> <span m="312630">a very large
  number.</span></p><p><span m="313970">Let's take m going to
  infinity.</span></p><p><span m="316410">And suppose that the system is on the
  stable side.</span></p><p><span m="320050">That means that p is less than
  q,</span> <span m="323320">which means that there's a tendency for
  customers</span> <span m="325960">to be served faster than they
  arrive.</span></p><p><span m="328280">In other words, the chain is drifting
  toward that direction.</span></p><p><span m="333840">So that means that rho is
  less than 1</span> <span m="338010">and what it means is that this infinite
  series, when</span> <span m="341560">m goes to infinity, is the geometric
  series.</span></p><p><span m="345200">And this series is going to be 1 over 1
  minus rho.</span></p><p><span m="349760">That is, this infinite series is 1
  over 1 minus rho.</span></p><p><span m="357980">And since pi of 0 is 1 over
  this infinite series,</span> <span m="362110">we end up having pi 0 equals 1
  minus rho.</span></p><p><span m="366800">And since we have pi of i equals pi 0
  times rho at the power i,</span> <span m="373940">we end up having that pi of
  i equals pi of 0, which</span> <span m="379225">is 1 minus rho times rho at
  the power i,</span> <span m="387662">for i equal-- this pi i can be
  seen</span> <span m="391470">as coming from the probability
  distribution.</span></p><p><span m="394080">They tell us that if we observe
  that chain at time-- let's</span> <span m="397640">say one billion-- and ask--
  where</span> <span m="400710">is the state of the Markov
  chain?</span></p><p><span m="403580">The answer will be the chain is in state
  zero, that</span> <span m="407490">is, the system is empty with a probability
  1 minus rho,</span> <span m="411659">or there is one customer in the
  system.</span></p><p><span m="414040">And that happens with probability 1
  minus rho times</span> <span m="417240">rho.</span></p><p><span m="418640">And
  so on.</span></p><p><span m="420420">So the distribution can be drawn like
  that.</span></p><p><span m="424330">You have here i corresponding to a state
  and if you put pi of i</span> <span m="431012">here, 0 here, then 1, 2, 3--
  then pi of 0 is 1 minus rho</span> <span m="439240">here.</span></p><p><span
  m="443090">pi of 1 will be rho times 1 minus rho and pi of 2</span> <span
  m="449590">and so forth.</span></p><p><span m="453550">So if you look at this
  distribution here,</span> <span m="455500">it's pretty much a geometric
  distribution,</span> <span m="457530">except that it has shifted so that it
  starts at 0 instead</span> <span m="461640">of starting at
  1.</span></p><p><span m="463180">So it's a shifted
  geometric.</span></p><p><span m="468830">This model is the first and simplest
  model</span> <span m="471320">that one encounters when studying queuing
  theory.</span></p><p><span m="474960">So a final note-- the PMF that we</span>
  <span m="477740">have here has an expected value.</span></p><p><span
  m="480750">And the expectation is given here-- e of x of m</span> <span
  m="486090">is-- let me rewrite it here-- it's rho over 1 minus
  rho.</span></p><p><span m="492950">And this formula-- which is interesting to
  anyone</span> <span m="496540">who tries to analyze a system of this
  kind--</span> <span m="498820">tells you the following-- that as long as rho
  is less than 1,</span> <span m="505160">then the expected number of customers
  in the system</span> <span m="508340">is finite.</span></p><p><span
  m="509890">But if rho, this little rho, becomes very close to 1,</span> <span
  m="514169">then you're going to have 1 over something that</span> <span
  m="516760">is very close to 0.</span></p><p><span m="518400">And that number
  will be very, very big.</span></p><p><span m="521299">So when rho becomes very
  close to 1,</span> <span m="524460">that means the load factor is something
  like-- let's say</span> <span m="527850">0.99-- you expect to have a very
  large number of customers</span> <span m="532100">in the system at any given
  time.</span></p><p>&nbsp;</p>
uid: d73ba013cc5d737da529c440044851c5
type: courses
layout: video
---
