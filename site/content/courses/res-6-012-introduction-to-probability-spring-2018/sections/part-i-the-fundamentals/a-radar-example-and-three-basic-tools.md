---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: uL31gpFdarc
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    title: Video-YouTube-Stream
    type: Video
    uid: 819c401bc9dcefec2bc42285a5b3e6df
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/uL31gpFdarc/default.jpg'
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 51f195d8f4f890add14ccede09163f85
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: uL31gpFdarc
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2d768127275cc77488977bfad84f309c
  - id: uL31gpFdarc.srt
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-radar-example-and-three-basic-tools/uL31gpFdarc.srt
    title: 3play caption file
    type: null
    uid: 570eaf83634c835965103f4efe2ea75a
  - id: uL31gpFdarc.pdf
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-radar-example-and-three-basic-tools/uL31gpFdarc.pdf
    title: 3play pdf file
    type: null
    uid: f04f18986f6a9b5edacfc8058cce3897
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 48ae9b189429fb4aea94563e13d3afe7
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bcd80fddfeaa364eb07b8f705219783d
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L02-05_300k.mp4
    parent_uid: 2ce0e5230d0610f55e1111db13422739
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5482469ab6b5717beca711d3fae19c46
inline_embed_id: 67529594aradarexampleandthreebasictools80728186
order_index: 258
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: a-radar-example-and-three-basic-tools
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/a-radar-example-and-three-basic-tools
title: A Radar Example and Three Basic Tools
transcript: >-
  <p><span m="980">Let us now examine what conditional</span> <span
  m="3320">probabilities are good for.</span></p><p><span m="5780">We have
  already discussed that they are used to revise a</span> <span m="8910">model
  when we get new information, but there is</span> <span m="13210">another way
  in which they arise.</span></p><p><span m="15570">We can use conditional
  probabilities to build a</span> <span m="18480">multi-stage model of a
  probabilistic experiment.</span></p><p><span m="22160">We will illustrate this
  through an example involving</span> <span m="26030">the detection of an object
  up in the sky by a radar.</span></p><p><span m="31480">We will keep our
  example very simple.</span></p><p><span m="34030">On the other hand, it turns
  out to have all the basic</span> <span m="37910">elements of a real-world
  model.</span></p><p><span m="41370">So, we are looking up in the sky, and
  either there's an</span> <span m="46260">airplane flying up there or
  not.</span></p><p><span m="49420">Let us call Event A the event that an
  airplane is indeed</span> <span m="55020">flying up there, and we have two
  possibilities.</span></p><p><span m="58460">Either Event A occurs, or the
  complement of A occurs, in</span> <span m="62980">which case nothing is flying
  up there.</span></p><p><span m="69220">At this point, we can also assign some
  probabilities to</span> <span m="73010">these two
  possibilities.</span></p><p><span m="74930">Let us say that through prior
  experience, perhaps, or some</span> <span m="78490">other knowledge, we know
  that the probability that something</span> <span m="81840">is indeed flying up
  there is 5% and with probability 95%</span> <span m="86830">nothing is
  flying.</span></p><p><span m="88360">Now, we also have a radar that looks up
  there, and there are</span> <span m="91890">two things that can
  happen.</span></p><p><span m="93200">Either something registers on the
  radar</span> <span m="95340">screen or nothing registers.</span></p><p><span
  m="98590">Of course, if it's a good radar, probably Event B will</span> <span
  m="101970">tend to go together with Event A. But it's also possible
  that</span> <span m="105440">the radar will make some
  mistakes.</span></p><p><span m="108930">And so we have various
  possibilities.</span></p><p><span m="112000">If there's a plane up there, it's
  possible that the radar</span> <span m="117180">will detect it, in which case
  Event B will also happen.</span></p><p><span m="121350">But it's also
  conceivable that the radar will not detect it,</span> <span m="125110">in
  which case we have a so-called miss.</span></p><p><span m="129240">And so a
  plane is flying up there, but the radar missed</span> <span m="132555">it, did
  not detect it.</span></p><p><span m="135080">Another possibility is that
  nothing is flying up there,</span> <span m="139000">but the radar does detect
  something, and this is a</span> <span m="143090">situation that's called a
  false alarm.</span></p><p><span m="150470">Finally, there's the possibility
  that nothing is</span> <span m="152770">flying up there, and the radar did not
  see anything either.</span></p><p><span m="159210">Now, let us focus on this
  particular situation.</span></p><p><span m="163760">Suppose that Event A has
  occurred.</span></p><p><span m="167950">So we are living inside this
  particular universe.</span></p><p><span m="171550">In this universe, there are
  two possibilities, and we can</span> <span m="174829">assign probabilities to
  these two possibilities.</span></p><p><span m="178360">So let's say that if
  something is flying up there, our radar</span> <span m="181920">will find it
  with probability 99%, but will also miss it</span> <span m="185930">with
  probability 1%.</span></p><p><span m="188220">What's the meaning of this
  number, 99%?</span></p><p><span m="192700">Well, this is a probability that
  applies to a situation</span> <span m="197450">where an airplane is up
  there.</span></p><p><span m="200870">So it is really a conditional
  probability.</span></p><p><span m="203950">It's the conditional probability
  that we will</span> <span m="206010">detect something, the radar will detect
  the plane, given</span> <span m="209970">that the plane is already flying up
  there.</span></p><p><span m="213060">And similarly, this 1% can be thought of
  as the conditional</span> <span m="216560">probability that the complement of
  B occurs, so the</span> <span m="220930">radar doesn't see anything, given
  that there is a plane up</span> <span m="226060">in the
  sky.</span></p><p><span m="229740">We can assign similar probabilities</span>
  <span m="234310">under the other scenario.</span></p><p><span m="235910">If
  there is no plane, there is a probability that there will</span> <span
  m="240670">be a false alarm, and there is a probability that the radar</span>
  <span m="244050">will not see anything.</span></p><p><span m="246030">Those
  four numbers here are, in essence, the</span> <span m="249600">specs of our
  radar.</span></p><p><span m="251830">They describe how the radar behaves in a
  world in which an</span> <span m="256720">airplane has been placed in the sky,
  and some other</span> <span m="259760">numbers that describe how the radar
  behaves in a world where</span> <span m="264860">nothing is flying up in the
  sky.</span></p><p><span m="269200">So we have described various probabilistic
  properties of</span> <span m="272620">our model, but is it a complete
  model?</span></p><p><span m="275460">Can we calculate anything that we might
  wish to calculate?</span></p><p><span m="280980">Let us look at this
  question.</span></p><p><span m="282450">Can we calculate the probability
  that</span> <span m="285320">both A and B occur?</span></p><p><span
  m="288020">It's this particular scenario here.</span></p><p><span
  m="290790">How can we calculate it?</span></p><p><span m="292810">Well, let us
  remember the definition of conditional</span> <span
  m="295200">probabilities.</span></p><p><span m="296090">The conditional
  probability of an event given another event</span> <span m="299370">is the
  probability of their intersection divided by the</span> <span
  m="302340">probability of the conditioning event.</span></p><p><span
  m="305860">But this doesn't quite help us because if we try to
  calculate</span> <span m="312480">the numerator, we do not have the value of
  the probability</span> <span m="316180">of A given B. We have the value of the
  probability of B</span> <span m="319610">given A. What can we
  do?</span></p><p><span m="322540">Well, we notice that we can use this
  definition of</span> <span m="325980">conditional probabilities, but use it in
  the reverse</span> <span m="329360">direction, interchanging the roles of A
  and B. If we</span> <span m="333720">interchange the roles of A and B, our
  definition leads to the</span> <span m="337290">following
  expression.</span></p><p><span m="338880">The conditional probability of B
  given A is the probability</span> <span m="342710">that both events occur
  divided by the probability, again, of</span> <span m="347300">the conditioning
  event.</span></p><p><span m="350330">Therefore, the probability that A and B
  occur is equal to</span> <span m="356070">the probability that A occurs times
  the conditional</span> <span m="360880">probability that B occurs given that A
  occurred.</span></p><p><span m="366240">And in our example, this is 0.05 times
  the conditional</span> <span m="372290">probability that B occurs, which is
  0.99.</span></p><p><span m="379000">So we can calculate the probability of
  this particular</span> <span m="383400">event by multiplying probabilities and
  conditional</span> <span m="388930">probabilities along the path in this tree
  diagram that</span> <span m="393000">leads us here.</span></p><p><span
  m="394640">And we can do the same for any other leaf in this
  diagram.</span></p><p><span m="399510">So for example, the probability that
  this happens</span> <span m="402560">is going to be the probability of this
  event times the</span> <span m="406040">conditional probability of B
  complement given that A</span> <span m="410190">complement has
  occurred.</span></p><p><span m="414020">How about a different
  question?</span></p><p><span m="416480">What is the probability, the total
  probability, that the</span> <span m="420570">radar sees
  something?</span></p><p><span m="423450">Let us try to identify this
  event.</span></p><p><span m="427060">The radar can see something under two
  scenarios.</span></p><p><span m="431050">There's the scenario where there is a
  plane up in the sky</span> <span m="435070">and the radar sees
  it.</span></p><p><span m="438080">And there's another scenario where nothing
  is up in the</span> <span m="441600">sky, but the radar thinks that it sees
  something.</span></p><p><span m="445930">So these two possibilities together
  make up the event B.</span></p><p><span m="451170">And so to calculate the
  probability of B, we need to</span> <span m="454990">add the probabilities of
  these two events.</span></p><p><span m="458130">For the first event, we
  already calculated it.</span></p><p><span m="462000">It's 0.05 times
  0.90.</span></p><p><span m="468350">For the second possibility, we need to do
  a similar</span> <span m="471780">calculation.</span></p><p><span
  m="472480">The probability that this occurs is equal to 0.95 times</span>
  <span m="478820">the conditional probability of B occurring under the
  scenario</span> <span m="485900">where A complement has occurred, and this is
  0.1.</span></p><p><span m="494680">If we add those two numbers together, the
  answer turns out</span> <span m="499220">to be 0.1445.</span></p><p><span
  m="506850">Finally, a last question, which is perhaps the most</span> <span
  m="509840">interesting one.</span></p><p><span m="511950">Suppose that the
  radar registered something.</span></p><p><span m="515320">What is the
  probability that there is an</span> <span m="518150">airplane out
  there?</span></p><p><span m="523429">How do we do this
  calculation?</span></p><p><span m="525460">Well, we can start from the
  definition of the conditional</span> <span m="529040">probability of A given
  B, and note that we already have in</span> <span m="534860">our hands both the
  numerator and the denominator.</span></p><p><span m="538880">So the numerator
  is this number, 0.05 times 0.99, and</span> <span m="548780">the denominator
  is 0.1445, and we can use our calculators to</span> <span m="555920">see that
  the answer is approximately 0.34.</span></p><p><span m="561800">So there is a
  34% probability that an airplane is there</span> <span m="567650">given that
  the radar has seen or thinks</span> <span m="573330">that it sees
  something.</span></p><p><span m="576530">So the numerical value of this answer
  is somewhat interesting</span> <span m="582220">because it's pretty
  small.</span></p><p><span m="584100">Even though we have a very good radar
  that tells us the</span> <span m="588100">right thing 99% of the time under
  one scenario and 90%</span> <span m="594320">under the other
  scenario.</span></p><p><span m="596630">Despite that, given that the radar has
  seen something, this</span> <span m="601370">is not really convincing or
  compelling evidence that there</span> <span m="607000">is an airplane up
  there.</span></p><p><span m="608890">The probability that there's an airplane
  up there is only</span> <span m="612600">34% in a situation where the radar
  thinks</span> <span m="616590">that it has seen something.</span></p><p><span
  m="620830">So in the next few segments, we are going to revisit these</span>
  <span m="626310">three calculations and see how they can
  generalize.</span></p><p><span m="631601">In fact, a large part of what is to
  happen in the remainder</span> <span m="637640">of this class will be
  elaboration</span> <span m="640430">on these three ideas.</span></p><p><span
  m="642770">They are three types of calculations that will show up</span> <span
  m="646960">over and over, of course, in more complicated forms, but</span>
  <span m="651460">the basic ideas are essentially captured in this</span> <span
  m="654970">simple example.</span></p><p>&nbsp;</p>
uid: 2ce0e5230d0610f55e1111db13422739
type: courses
layout: video
---
