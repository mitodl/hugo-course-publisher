---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: MPRKc4UPoJk
    parent_uid: efbff85df56391b7be2c39e44adee68d
    title: Video-YouTube-Stream
    type: Video
    uid: 54edbbdedc80b3abb60a66557a597170
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/MPRKc4UPoJk/default.jpg'
    parent_uid: efbff85df56391b7be2c39e44adee68d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 04f0345d53342d5c1c9e8d8d921ff875
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: MPRKc4UPoJk
    parent_uid: efbff85df56391b7be2c39e44adee68d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 91b3f73f8e9b43052af0bb4c14e65f1f
  - id: MPRKc4UPoJk.srt
    parent_uid: efbff85df56391b7be2c39e44adee68d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-probabilities/MPRKc4UPoJk.srt
    title: 3play caption file
    type: null
    uid: c5b058611443eb92d99ba7e927127906
  - id: MPRKc4UPoJk.pdf
    parent_uid: efbff85df56391b7be2c39e44adee68d
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-probabilities/MPRKc4UPoJk.pdf
    title: 3play pdf file
    type: null
    uid: 0c1ffb4da9a5e04b0277fab2032f8c2d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: efbff85df56391b7be2c39e44adee68d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7010779a545ecad3a02127f67a7aa60b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: efbff85df56391b7be2c39e44adee68d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 53cdbf16e8375fc8dca633a08632e24e
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L02-02_300k.mp4
    parent_uid: efbff85df56391b7be2c39e44adee68d
    title: Video-Internet Archive-MP4
    type: Video
    uid: b567cc3aeb6ce3c477fd4518d6c2e52d
inline_embed_id: 60888684conditionalprobabilities6862469
order_index: 231
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: conditional-probabilities
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/conditional-probabilities
title: Conditional Probabilities
transcript: >-
  <p><span m="2330">Conditional probabilities are probabilities associated
  with</span> <span m="6150">a revised model that takes into account some
  additional</span> <span m="9860">information about the outcome of a
  probabilistic experiment.</span></p><p><span m="13850">The question is how to
  carry out this</span> <span m="16730">revision of our
  model.</span></p><p><span m="18930">We will give a mathematical definition of
  conditional</span> <span m="21390">probabilities, but first let us motivate
  this definition by</span> <span m="25730">examining a simple concrete
  example.</span></p><p><span m="29480">Consider a probability model with 12
  equally likely</span> <span m="33660">possible outcomes, and so each one of
  them has probability</span> <span m="38180">equal to 1/12.</span></p><p><span
  m="41900">We will focus on two particular events, event A and</span> <span
  m="45940">B, two subsets of the sample space.</span></p><p><span
  m="48750">Event A has five elements, so its probability is 5/12, and</span>
  <span m="54800">event B has six elements, so it has probability
  6/12.</span></p><p><span m="61190">Suppose now that someone tells you that
  event B has occurred,</span> <span m="64800">but tells you nothing more about
  the outcome.</span></p><p><span m="67980">How should the model
  change?</span></p><p><span m="70770">First, those outcomes that are outside
  event B</span> <span m="76450">are no longer possible.</span></p><p><span
  m="79390">So we can either eliminate them, as was done in this</span> <span
  m="83190">picture, or we might keep them in the picture but assign them</span>
  <span m="88220">0 probability, so that they cannot occur.</span></p><p><span
  m="93130">How about the outcomes inside the event B?</span></p><p><span
  m="96570">So we're told that one of these has occurred.</span></p><p><span
  m="101460">Now these 6 outcomes inside the event B were equally</span> <span
  m="105979">likely in the original model, and there is no reason to</span>
  <span m="110280">change their relative probabilities.</span></p><p><span
  m="112500">So they should remain equally likely in revised model as</span>
  <span m="116479">well, so each one of them should have now probability</span>
  <span m="120530">1/6 since there's 6 of them.</span></p><p><span
  m="123710">And this is our revised model, the</span> <span
  m="125680">conditional probability law.</span></p><p><span m="127760">0
  probability to outcomes outside B, and probability 1/6</span> <span
  m="132740">to each one of the outcomes that is inside the event
  B.</span></p><p><span m="138120">Let us write now this down
  mathematically.</span></p><p><span m="141790">We will use this notation to
  describe the conditional</span> <span m="146710">probability of an event A
  given that some other event B</span> <span m="152280">is known to have
  occurred.</span></p><p><span m="154500">We read this expression as probability
  of A given B. So</span> <span m="160540">what are these conditional
  probabilities in our example?</span></p><p><span m="164760">So in the new
  model, where these outcomes are equally</span> <span m="168829">likely, we
  know that event A can occur in</span> <span m="172610">two different
  ways.</span></p><p><span m="174240">Each one of them has probability
  1/6.</span></p><p><span m="176829">So the probability of event A is 2/6
  which</span> <span m="182320">is the same as 1/3.</span></p><p><span
  m="186060">How about event B. Well, B consists of 6 possible</span> <span
  m="191350">outcomes each with probability 1/6.</span></p><p><span
  m="193850">So event B in this revised model should have probability</span>
  <span m="198670">equal to 1.</span></p><p><span m="200030">Of course, this is
  just saying the obvious.</span></p><p><span m="202770">Given that we already
  know that B has occurred, the</span> <span m="206150">probability that B
  occurs in this new model</span> <span m="209310">should be equal to
  1.</span></p><p><span m="211920">How about now, if the sample space does not
  consist of</span> <span m="215010">equally likely outcomes, but instead we're
  given the</span> <span m="218340">probabilities of different pieces of the
  sample space, as</span> <span m="222120">in this example.</span></p><p><span
  m="224210">Notice here that the probabilities are consistent</span> <span
  m="227800">with what was used in the original example.</span></p><p><span
  m="231350">So this part of A that lies outside B has probability</span> <span
  m="235329">3/12, but in this case I'm not telling you how that</span> <span
  m="240190">probability is made up.</span></p><p><span m="241780">I'm not
  telling you that it consists of 3</span> <span m="243780">equally likely
  outcomes.</span></p><p><span m="244990">So all I'm telling you is that the
  collective probability in</span> <span m="247390">this region is
  3/12.</span></p><p><span m="250070">The total probability of A is, again, 5/12
  as before.</span></p><p><span m="254820">The total probability of B is 2 plus
  4 equals</span> <span m="257930">6/12, exactly as before.</span></p><p><span
  m="261940">So it's a sort of similar situation as before.</span></p><p><span
  m="265440">How should we revise our probabilities and create--</span> <span
  m="271160">construct--</span> <span m="272040">conditional probabilities once
  we are told</span> <span m="275800">that event B has
  occurred?</span></p><p><span m="279430">First, this relation should remain
  true.</span></p><p><span m="284430">Once we are told that B has occurred, then
  B is certain to</span> <span m="289780">occur, so it should have
  conditional</span> <span m="291340">probability equal to 1.</span></p><p><span
  m="293280">How about the conditional probability of A given that B</span>
  <span m="296600">has occurred?</span></p><p><span m="297760">Well, we can
  reason as follows.</span></p><p><span m="300140">In the original model, and if
  we just look inside event B,</span> <span m="306320">those outcomes that make
  event A happen had a collective</span> <span m="312050">probability which was
  1/3 of the total probability assigned</span> <span m="317340">to B. So out of
  the overall probability assigned to B, 1/3</span> <span m="322230">of that
  probability corresponds to outcomes in</span> <span m="325210">which event A
  is happening.</span></p><p><span m="327840">So therefore, if I tell you that B
  has occurred, I should</span> <span m="333010">assign probability equal to 1/3
  that event A is</span> <span m="337710">also going to
  happen.</span></p><p><span m="339159">So that, given that B happened, the
  conditional</span> <span m="341750">probability of A given B should be equal
  to 1/3.</span></p><p><span m="346440">By now, we should be satisfied that this
  approach is a</span> <span m="349290">reasonable way of constructing
  conditional probabilities.</span></p><p><span m="352210">But now let us
  translate our reasoning into a formula.</span></p><p><span m="360920">So we
  wish to come up with a formula that gives us the</span> <span
  m="365450">conditional probability of an event given another
  event.</span></p><p><span m="369890">The particular formula that captures our
  way of thinking,</span> <span m="374630">as motivated before, is the
  following.</span></p><p><span m="379540">Out of the total probability assigned
  to B--</span> <span m="382700">which is this--</span> <span m="385290">we ask
  the question, which fraction of that probability</span> <span m="392230">is
  assigned to outcomes under which event A also happens?</span></p><p><span
  m="400650">So we are living inside event B, but within that event, we</span>
  <span m="406890">look at those outcomes for which event A also
  happens.</span></p><p><span m="411290">So this is the intersection of A and B.
  And we ask, out of</span> <span m="415430">the total probability of B, what
  fraction of that</span> <span m="418040">probability is allocated to that
  intersection of A with B?</span></p><p><span m="423460">So this formula, this
  definition, captures our</span> <span m="426690">intuition of what we did
  before to construct</span> <span m="431370">conditional probabilities in our
  particular example.</span></p><p><span m="434530">Let us check that the
  definition indeed does what</span> <span m="437510">it's supposed to
  do.</span></p><p><span m="439310">In this example, the probability of
  the</span> <span m="441520">intersection was 2/12 and the total probability of
  B was</span> <span m="447750">6/12, which gives us 1/3, which is the answer
  that we</span> <span m="453010">had gotten intuitively a little
  earlier.</span></p><p><span m="458170">At this point, let me also make a
  comment that this</span> <span m="462430">definition of conditional
  probabilities makes sense only</span> <span m="467730">if we do not attempt to
  divide by zero.</span></p><p><span m="471230">That this, only if the event B
  on which we're conditioning,</span> <span m="475280">has positive
  probability.</span></p><p><span m="477900">If B, if an event B has 0
  probability, then conditional</span> <span m="483470">probabilities given B
  will be left undefined.</span></p><p><span m="488350">And one final
  comment.</span></p><p><span m="491440">This is a
  definition.</span></p><p><span m="494880">It's not a
  theorem.</span></p><p><span m="498310">What does that mean?</span></p><p><span
  m="499690">It means that there is no question whether this equality</span>
  <span m="503770">is correct or not.</span></p><p><span m="505600">It's just a
  definition.</span></p><p><span m="507520">There's no issue of
  correctness.</span></p><p><span m="511010">The earlier argument that we gave
  was just a motivation of</span> <span m="516909">the
  definition.</span></p><p><span m="518110">We tried to figure out what the
  definition should be if we</span> <span m="522610">want to have a certain
  intuitive and meaningful</span> <span m="526160">interpretation of the
  conditional probabilities.</span></p><p><span m="532600">Let us now continue
  with a simple example.</span></p><p>&nbsp;</p>
uid: efbff85df56391b7be2c39e44adee68d
type: courses
layout: video
---
