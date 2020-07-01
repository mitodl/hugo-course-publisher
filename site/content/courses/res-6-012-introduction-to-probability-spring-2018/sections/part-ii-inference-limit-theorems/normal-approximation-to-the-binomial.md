---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: fBfMIVXc_OM
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    title: Video-YouTube-Stream
    type: Video
    uid: 2c3ebf4039f1b6cd5441496971d20af5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/fBfMIVXc_OM/default.jpg'
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 002b35672f7ee4135c4a1857b5698cd7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: fBfMIVXc_OM
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 910f5ed86db00281a89e3f8adc2ef04d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L19-06_300k.mp4
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    title: Video-Internet Archive-MP4
    type: Video
    uid: c332eb8a4ce07337e8e18219f6b48925
  - id: fBfMIVXc_OM.srt
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/normal-approximation-to-the-binomial/fBfMIVXc_OM.srt
    title: 3play caption file
    type: null
    uid: d2a68678ff621848c202669612567af1
  - id: fBfMIVXc_OM.pdf
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/normal-approximation-to-the-binomial/fBfMIVXc_OM.pdf
    title: 3play pdf file
    type: null
    uid: 914923cbe832abd71eb8f8f590b5e027
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 9058448bd3c2d8f42a16cb17bc9b8b86
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a6e754e6610f7c8f1a85407d5c93b707
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0c3bcb639625cc37988cf3b3ebf0ca61
inline_embed_id: 8002069normalapproximationtothebinomial65654145
order_index: 1804
parent_uid: b8cdf274e2b0f82662e4cd137e85d308
related_resources_text: ''
short_url: normal-approximation-to-the-binomial
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-ii-inference-limit-theorems/normal-approximation-to-the-binomial
title: Normal Approximation to the Binomial
transcript: >-
  <p><span m="520">An important application of the central limit theorem
  is</span> <span m="3450">in the approximate calculation of the binomial
  probabilities.</span></p> <p><span m="7190">Here is what is
  involved.</span></p> <p><span m="9270">We start with random variables--</span>
  <span m="11060">Xi--</span> <span m="11840">that are independent.</span></p>
  <p><span m="13280">And they have the same distribution.</span></p> <p><span
  m="14800">They're all Bernoulli with parameter p.</span></p> <p><span
  m="17050">We add n of those random variables, and the resulting</span> <span
  m="20550">random variable, Sn, we know that it has a binomial PNF</span> <span
  m="24450">with parameters n and p.</span></p> <p><span m="26110">We also know
  its mean, and we do know its variance.</span></p> <p><span m="30010">What the
  central limit theorem tells us, in this case, since</span> <span
  m="33430">we're dealing with the sum of independent identically</span> <span
  m="35790">distributed random variables, is the following.</span></p> <p><span
  m="38640">If we take this random variable here that we have</span> <span
  m="41340">been denoting by Zn, which is a standardized version of Sn--</span>
  <span m="45610">we subtract the mean of Sn and divide by the standard</span>
  <span m="48550">deviation--</span> <span m="49630">this random variable has a
  CDF that approaches as n goes to</span> <span m="53710">infinity, the CDF of a
  standard normal.</span></p> <p><span m="57070">So let us use what we now know
  to calculate some</span> <span m="60500">probabilities.</span></p> <p><span
  m="61910">Let us fix some parameters.</span></p> <p><span m="63300">n is
  36.</span></p> <p><span m="64349">p is 0.5.</span></p> <p><span m="65620">And
  we wish to calculate the probability that Sn is less</span> <span
  m="68260">than or equal to 21.</span></p> <p><span m="70200">Now, in this
  case, we can calculate it exactly using the</span> <span m="73930">binomial
  formula.</span></p> <p><span m="75420">The probability of being less than or
  equal to 21 is the sum</span> <span m="78830">of the probabilities of all the
  numbers from 0 to 21.</span></p> <p><span m="82710">And this is the
  probability of obtaining a number k.</span></p> <p><span m="86670">And by
  calculating this expression, we obtain this</span> <span m="89950">number,
  which is the exact answer.</span></p> <p><span m="92880">Now, let us proceed
  using the central limit theorem.</span></p> <p><span m="95950">We are
  interested in this probability, but we will use</span> <span m="100039">the
  fact about the CDF of this related random variable.</span></p> <p><span
  m="103590">So the first step is to calculate n</span> <span m="105720">times
  p, which is 18.</span></p> <p><span m="107850">The second step is to calculate
  this denominator</span> <span m="110470">here, which in our case evaluates to
  3.</span></p> <p><span m="114600">Now, since we know something about the CDF
  of this random</span> <span m="118580">variable, what we need to do is to take
  this event and</span> <span m="122450">rewrite it in terms of this random
  variable.</span></p> <p><span m="125830">So we have the event of interest,
  which is that Sn is</span> <span m="131460">less than or equal to
  21.</span></p> <p><span m="134150">This is the same as the event that Sn minus
  18 is less than</span> <span m="137460">or equal to 21 minus 18.</span></p>
  <p><span m="139770">And it's the same as this event here, where we
  divide</span> <span m="142800">both sides by 3.</span></p> <p><span
  m="145829">Now, what we have here is the probability that this random</span>
  <span m="149520">variable Zn is less than or equal to 1.</span></p> <p><span
  m="153060">But now, Zn is approximately a standard normal, so we can
  use</span> <span m="157079">here the CDF of the standard normal
  distribution,</span> <span m="160920">which is Phi of 1.</span></p> <p><span
  m="162350">And at this point, we look at the tables for the normal</span>
  <span m="165550">distribution.</span></p> <p><span m="166590">We'll find this
  entry here.</span></p> <p><span m="168440">And this gives us an answer of
  0.8413.</span></p> <p><span m="174079">This is a pretty good approximation of
  the exact</span> <span m="176340">answer, which is 0.8785.</span></p> <p><span
  m="179340">But it is not a great approximation.</span></p> <p><span
  m="181460">It is off by about four percentage points.</span></p> <p><span
  m="184150">Can we do better than that?</span></p> <p><span m="187960">It turns
  out that we can get a better approximation.</span></p> <p><span m="191550">And
  let us see how this can be done.</span></p> <p><span m="194160">Recall that we
  approximated this probability using the</span> <span m="197320">central limit
  theorem and found this numerical value.</span></p> <p><span m="200380">But we
  make an observation that this probability is equal</span> <span m="203690">to
  this probability here.</span></p> <p><span m="205300">Why is that?</span></p>
  <p><span m="206450">Sn is an integer random variable.</span></p> <p><span
  m="208550">Therefore, if I tell you that it is strictly less than 22,</span>
  <span m="211790">I'm also telling you that it is 21 or less.</span></p>
  <p><span m="215640">Therefore, this event here is the same as that event
  here.</span></p> <p><span m="219960">And therefore, their probabilities are
  the same.</span></p> <p><span m="222480">So instead of using the central limit
  approximation to</span> <span m="226630">calculate this probability, let us
  follow the same</span> <span m="229630">procedure but try to calculate this
  probability here.</span></p> <p><span m="233160">And this probability here is
  equal to the</span> <span m="236820">probability that Sn minus--</span> <span
  m="240880">we subtract the mean, divide by the standard</span> <span
  m="243690">deviation of Sn--</span> <span m="245520">is strictly less than 22
  minus 18 divided by 3, which is the</span> <span m="251740">probability that
  the random variable that we denote by Zn,</span> <span m="256060">which is
  this expression here, is strictly less than 22</span> <span m="259630">minus
  18 over 3.</span></p> <p><span m="261120">And this is 1.33.</span></p>
  <p><span m="263910">Now, at this point, we pretend that Zn is a standard
  normal</span> <span m="267380">random variable--</span> <span m="268210">the
  probability that the standard normal is less than a</span> <span
  m="271510">certain number.</span></p> <p><span m="272760">This is the standard
  normal CDF evaluated at that number.</span></p> <p><span m="277800">And then
  we look up at the normal tables at 1.33 and we</span> <span m="283020">find
  this value of 0.9082.</span></p> <p><span m="289490">Now, we compare this
  value with the exact</span> <span m="292580">answer for this
  problem.</span></p> <p><span m="294720">And we see that we again missed
  it.</span></p> <p><span m="298159">Using this approximation to this quantity
  gave us an</span> <span m="302370">underestimate of this number.</span></p>
  <p><span m="304510">Now, we obtained an overestimate.</span></p> <p><span
  m="307430">The true value is somewhere in the middle.</span></p> <p><span
  m="310420">So this suggests that we may want to do something that</span> <span
  m="313250">combines these two alternative choices here.</span></p> <p><span
  m="317560">But before doing that, it's good to understand what</span> <span
  m="320750">exactly have we be doing all along.</span></p> <p><span
  m="324350">What we're doing is the following.</span></p> <p><span
  m="327000">We have the PMF of the binomial centered at 18, which</span> <span
  m="331370">is the mean.</span></p> <p><span m="332250">It's a discrete random
  variable.</span></p> <p><span m="334250">But when we use the central limit
  theorem, we pretend that</span> <span m="337530">the binomial is normal, but
  while we keep the same mean</span> <span m="343190">and variance.</span></p>
  <p><span m="346720">Now, when we calculate probabilities, if we want to</span>
  <span m="350130">find the discrete probability that Sn is less than or
  equal</span> <span m="354550">to 21, which is the sum of these probabilities,
  what we</span> <span m="359020">do is we look at the area under the
  normal</span> <span m="365380">PDF from 21 and below.</span></p> <p><span
  m="369610">In the alternative approach, when we use the central limit</span>
  <span m="374700">theorem to approximate the probability of this event,
  we</span> <span m="378180">go to 22, and we look at the event of falling below
  22.</span></p> <p><span m="384100">This means that we're looking at the area
  from 22 and lower.</span></p> <p><span m="390060">So in one approach, this
  particular region is not used</span> <span m="396650">in the
  calculation.</span></p> <p><span m="397690">That's what we did
  here.</span></p> <p><span m="399250">But in the second approach, it was used
  in the calculation.</span></p> <p><span m="402560">Should it be used or
  not?</span></p> <p><span m="405690">It makes more sense to use only part of
  this solid region</span> <span m="412180">and assign it to the calculation of
  the probability</span> <span m="415150">of being at 21 or less.</span></p>
  <p><span m="417470">Namely, we can take the mid point here, where the
  mid</span> <span m="421890">point is at 21.5, and calculate the area under
  the</span> <span m="427690">normal PDF only going up to 21.5.</span></p>
  <p><span m="433340">What this amounts to is looking at this particular</span>
  <span m="437170">event here.</span></p> <p><span m="438420">Now, this event
  is, of course, identical to this event that</span> <span m="441520">we have
  been considering, because again, Sn is a</span> <span m="445130">discrete
  random variable that takes integer values.</span></p> <p><span m="449470">But
  when we approximate it by a normal, it does make a</span> <span
  m="452510">difference whether we write the event</span> <span m="454530">this
  way or that way.</span></p> <p><span m="456840">So here, we're going to obtain
  the probability that the</span> <span m="460570">standardized version of Zn is
  less than.</span></p> <p><span m="463760">We follow the same calculation, but
  now we have</span> <span m="466180">21.5 minus 18 divided by 3.</span></p>
  <p><span m="472100">And this number here is 1.17.</span></p> <p><span
  m="476730">And using the central limit theorem calculation, this is</span>
  <span m="481550">the CDF of the standard normal evaluated at 1.17, which
  we</span> <span m="488960">can go and look up in the normal table to
  find</span> <span m="492090">the value of 0.8790.</span></p> <p><span
  m="496960">And now, we notice that this value is remarkably close to</span>
  <span m="501840">the true value.</span></p> <p><span m="503320">It is much
  better as an approximation that what we</span> <span m="506730">obtained using
  either this choice or that choice.</span></p> <p><span m="511980">And since
  this approximation is so good, we may consider</span> <span m="517270">even
  using it to approximate individual probabilities of</span> <span
  m="521370">the binomial PMF.</span></p> <p><span m="523350">Let's see what
  that takes.</span></p> <p><span m="526130">Let us try to approximate, as an
  example, the probability</span> <span m="529580">that Sn takes a value of
  exactly 19.</span></p> <p><span m="533680">So what we will do will be to write
  the event that Sn is</span> <span m="538610">equal to 19 as the event that Sn
  lies between 18.5 and 19.5.</span></p> <p><span m="548770">In terms of the
  picture that we were discussing before,</span> <span m="552010">what we are
  doing, essentially, is to take the</span> <span m="555290">area under the
  normal PDF that extends from 18.5 to 19.5 and</span> <span m="563560">declare
  that this area corresponds to the discrete</span> <span m="567640">event that
  our binomial random variable takes a value of 19.</span></p> <p><span
  m="572220">Similarly, if we wanted to calculate approximately the</span> <span
  m="575660">value of the probability that Sn takes a value of 21, we</span>
  <span m="580060">would consider the area under the normal PDF</span> <span
  m="583200">from 20.5 to 21.5.</span></p> <p><span m="586890">So let us now
  continue with this approach.</span></p> <p><span m="589630">We do the usual
  calculations, which is to express this event</span> <span m="594940">in terms
  of standardized values.</span></p> <p><span m="597420">That is, we subtract
  throughout the mean of Sn and</span> <span m="602080">divide by standard
  deviation.</span></p> <p><span m="604420">So what we obtain here is the
  standardized version of Sn.</span></p> <p><span m="608560">And that has to be,
  now, less than or equal to 19.5 minus 18</span> <span m="615340">divided by 3,
  which is the probability that our</span> <span m="619980">standardized random
  variable lies between 0.17 and 0.5.</span></p> <p><span m="630430">And now, if
  we pretend that Zn is a standard normal random</span> <span
  m="635230">variable, which is what the central limit theorem</span> <span
  m="638000">suggests, this is going to be equal to the probability that</span>
  <span m="642170">the standard normal is less than or equal to 0.5 minus
  the</span> <span m="648060">probability that it is less than 0.17.</span></p>
  <p><span m="653530">And if we look up those entries in the normal
  tables,</span> <span m="657750">what we find is an answer of 0.6915 minus this
  number,</span> <span m="665750">which evaluates to 0.124.</span></p> <p><span
  m="670090">And what is the exact answer if we were to use the binomial</span>
  <span m="674070">probability formulas?</span></p> <p><span m="675740">The
  exact answer is remarkably close to what we obtained in</span> <span
  m="680720">our approximation.</span></p> <p><span m="683070">This example
  illustrates a more general fact that this</span> <span m="686720">approach of
  calculating individual entries of the</span> <span m="690090">binomial PMF
  gives very accurate answers.</span></p> <p><span m="694130">And in fact, there
  are theorems, there are</span> <span m="696370">theoretical results to this
  effect, that tell us that this</span> <span m="700260">way of
  approximating--</span> <span m="702460">asymptotically, as n goes to infinity
  and</span> <span m="705590">in a certain regime--</span> <span m="707380">does
  give us very accurate approximations.</span></p> <p>&nbsp;</p>
uid: a6e754e6610f7c8f1a85407d5c93b707
type: courses
layout: video
---
