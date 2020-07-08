---
about_this_resource_text: >-
  <p><strong>Description:</strong> We consider how object recognition has
  evolved over the past 30 years. In alignment theory, 2-D projections are used
  to determine whether an additional picture is of the same object. To recognize
  faces, we use intermediate-sized features and correlation.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: gvmfbePC2pc
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: Video-YouTube-Stream
    type: Video
    uid: 9e4c763e341c9a78e0a84c19c49ffc51
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-9-constraints-visual/id765641080?i=194470782
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: Video-iTunes U-MP4
    type: Video
    uid: 6f7a7530e7d4cef2c3a215e6d97ea765
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec09_300k.mp4'
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: Video-Internet Archive-MP4
    type: Video
    uid: 98e27c6319c8164f2bde7fea374436c8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/gvmfbePC2pc/default.jpg'
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5eee422fe8fff03b4aebf09e0bfe7c30
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: gvmfbePC2pc
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2b9711ec532a441d5189e7e2263c6863
  - id: gvmfbePC2pc.srt
    parent_uid: c87beea243de1ebf431cab907dd23f52
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-9-constraints-visual-object-recognition/gvmfbePC2pc.srt
    title: 3play caption file
    type: null
    uid: c41bf052dd9936f6c699a83a1bbd7f16
  - id: gvmfbePC2pc.pdf
    parent_uid: c87beea243de1ebf431cab907dd23f52
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-9-constraints-visual-object-recognition/gvmfbePC2pc.pdf
    title: 3play pdf file
    type: null
    uid: aae7af9c88e603a8baf1bde5e240c7f7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2e9c69912d91f92a3014f2ae0bcc8463
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c87beea243de1ebf431cab907dd23f52
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0fc04ce38d3a30712931299e7c216cc9
inline_embed_id: '70642278lecture9:constraints:visualobjectrecognition75030584'
order_index: 99
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: >-
  <p>Prof. Winston wrote about <a
  href="https://alum.mit.edu/slice/rumpelstiltskin-principle"
  target="_blank">the Rumpelstiltskin principle</a>, which was briefly mentioned
  in this lecture, in the <em>Slice of MIT</em> blog.</p>
short_url: lecture-9-constraints-visual-object-recognition
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-9-constraints-visual-object-recognition
title: 'Lecture 9: Constraints: Visual Object Recognition'
transcript: >-
  <p><span m="9215">PATRICK WINSTON: You know, it's unfortunate that
  politics</span> <span m="11320">has become so serious.</span></p><p><span
  m="14730">Back when you were little it was a lot more fun.</span></p><p><span
  m="17360">You could make fun of politicians.</span></p><p><span
  m="20740">Here's a politician some of you may recognize.</span></p><p><span
  m="27480">But it's convenient to be able to vary what this particular</span>
  <span m="31970">politician looks like.</span></p><p><span m="34210">For
  example, we can go from a cookie baker to radical.</span></p><p><span
  m="41274">[LAUGHTER]</span> <span m="43960">PATRICK WINSTON: We can go from
  superwoman to bimbo.</span></p><p><span m="51544">[LAUGHTER]</span> <span
  m="54030">PATRICK WINSTON: Socialite--</span> <span m="55920">I put socialite
  into this.</span></p><p><span m="59710">There she is.</span></p><p><span
  m="62340">Or we can move the slider over the other way to bag
  lady.</span></p><p><span m="68430">Alert, asleep, sad,
  happy.</span></p><p><span m="74550">How does that work?</span></p><p><span
  m="78830">I don't know.</span></p><p><span m="79340">But I bet by the end of
  this hour you'll</span> <span m="80950">know how that
  works.</span></p><p><span m="82360">And not only that, you'll understand
  something about</span> <span m="85690">what it takes to recognize
  faces.</span></p><p><span m="89940">It turns out to some theories of face
  recognition are based</span> <span m="94380">on the same principles that this
  program is based on.</span></p><p><span m="101791">But you can kind of guess
  what's happening here.</span></p><p><span m="105030">There are many stored
  images and when I move those sliders</span> <span m="109500">it's
  interpolating amongst them.</span></p><p><span m="112590">So that's how that
  works.</span></p><p><span m="116270">But the main subject of today is this
  matter</span> <span m="120500">of recognizing objects.</span></p><p><span
  m="122390">Faces could be the objects, but they don't have to
  be.</span></p><p><span m="124620">This could be an object that you might want
  to recognize.</span></p><p><span m="128430">And I want to talk to you a little
  bit about the history</span> <span m="131580">of this problem and where it
  stands today.</span></p><p><span m="133930">It's still not
  solved.</span></p><p><span m="135900">But it's an interesting exercise to see
  how the</span> <span m="138760">attempts at solution have evolved
  slowly</span> <span m="142360">over the past 30 years.</span></p><p><span
  m="143940">So slowly, in fact, that I think if someone told me how</span>
  <span m="148160">long it would take to get to where we are 30 years ago
  I</span> <span m="151380">think I would have hung myself.</span></p><p><span
  m="153579">But things do move slowly.</span></p><p><span m="156440">And it's
  important to see how slowly they move.</span></p><p><span m="158500">Because
  they will continue to move slowly in the future.</span></p><p><span
  m="162170">And you have to understand that that's the way things</span> <span
  m="163920">work sometimes.</span></p><p><span m="165990">So to start this all
  off, we have to go back to the ideas</span> <span m="169590">of the legendary
  David Marr, who dropped dead from leukemia</span> <span m="173060">in about
  1980.</span></p><p><span m="176250">I say, the gospel according to Marr,
  because he was such a</span> <span m="180700">powerful and central figure that
  almost anything he said</span> <span m="183960">was believed by a large
  collection of devotees.</span></p><p><span m="189800">But Marr articulated a
  set of ideas about how computer</span> <span m="195240">vision would work that
  started off by suggesting that with</span> <span m="199810">the input from the
  camera, you look for edges.</span></p><p><span m="206340">And you find edge
  fragments.</span></p><p><span m="207700">And normally they wouldn't be even as
  well-drawn as I've</span> <span m="215720">done them now.</span></p><p><span
  m="217990">Or as badly drawn as I've done them now.</span></p><p><span
  m="220410">But the first step, then, in visual recognition would be to</span>
  <span m="223460">form this edge-based description of what's out</span> <span
  m="226329">there in the world.</span></p><p><span m="227720">And Marr called
  that the primal sketch.</span></p><p><span m="237620">And from the primal
  sketch, the next step was to decorate</span> <span m="240960">the primal
  sketch with some vectors, some surface normals,</span> <span
  m="246600">showing where the faces on the object were
  oriented.</span></p><p><span m="252440">He called that the two and a half D
  sketch.</span></p><p><span m="261360">Now why is it two and a half
  D?</span></p><p><span m="262620">Well, it's sort of 2D in the sense that it's
  still</span> <span m="266360">camera-centric in its way of presenting
  information.</span></p><p><span m="271070">But at same time, it attempts to
  say something about the</span> <span m="273360">three-dimensional arrangement
  of the faces.</span></p><p><span m="277110">So the speculation was that you
  couldn't get to where you</span> <span m="279610">wanted to go in one
  step.</span></p><p><span m="281330">So you needed several steps to get from
  the image to</span> <span m="283970">something you could
  recognize.</span></p><p><span m="285990">And the third step was to convert the
  two and a half D</span> <span m="290100">sketch into generalized
  cylinders.</span></p><p><span m="303100">And the idea is
  this.</span></p><p><span m="303960">If you have a regular cylinder, you can
  think of it</span> <span m="308140">as a circular area moving along an axis
  like so.</span></p><p><span m="313650">So that's the description of a
  cylinder.</span></p><p><span m="316570">A circular area moving along an
  axis.</span></p><p><span m="318990">You can get a different kind of cylinder
  if you go along</span> <span m="323010">the same axis but you allow the size
  of the circle to</span> <span m="326320">change as you go.</span></p><p><span
  m="327820">So for example, if you were to describe a wine
  bottle.</span></p><p><span m="335550">It would be a function of distance along
  the axis that</span> <span m="337590">would shrink the circle appropriately to
  match the</span> <span m="342580">dimensions of a wine
  bottle.</span></p><p><span m="345520">A fine burgundy, I
  perceive.</span></p><p><span m="346780">In any case, this one once converted
  into a generalized</span> <span m="350920">cylinder, when matched against a
  library of such</span> <span m="354260">descriptions, results in
  recognition.</span></p><p><span m="364290">Great theory, based on the idea
  that you start off by</span> <span m="367190">looking at edges and you end up,
  in several steps of</span> <span m="371330">transformation, producing
  something that you could look</span> <span m="374470">up in a library of
  descriptions.</span></p><p><span m="377350">Great idea.</span></p><p><span
  m="380100">Trouble is, no one could make it work.</span></p><p><span
  m="386950">It was too hard to do this.</span></p><p><span m="388976">It was
  too hard to do that.</span></p><p><span m="391250">And the generalized
  cylinders produced, if</span> <span m="392980">any, were too
  coarse.</span></p><p><span m="395980">You couldn't tell the difference between
  a Ford and</span> <span m="397520">a Chevrolet or between a Volkswagen and a
  Cadillac.</span></p><p><span m="400520">Because they were just too
  coarse.</span></p><p><span m="403010">So although it was a great idea based on
  the idea that</span> <span m="405655">you have to do recognition in several
  transformations of</span> <span m="409580">representational apparatus, it just
  didn't work.</span></p><p><span m="415430">So much later, maybe 15 years later
  or so, we get to the</span> <span m="420880">next part of our
  story.</span></p><p><span m="422610">Which is the alignment theories, most
  notably the one</span> <span m="427590">produced by Shimon Ullman, one of
  Marr's students.</span></p><p><span m="432580">So the alignment theory of
  recognition is based on a very</span> <span m="436810">strange and exotic
  idea.</span></p><p><span m="439250">It doesn't seem strange and exotic to
  mechanical engineers</span> <span m="442930">for a while, because they're used
  to mechanical drawings.</span></p><p><span m="445470">But here's the strange
  and miraculous idea.</span></p><p><span m="448620">Imagine this
  object.</span></p><p><span m="450110">You take three pictures of
  it.</span></p><p><span m="453540">You can reconstruct any view of that
  object.</span></p><p><span m="458390">Now, I have to be a little bit careful
  about how I say that.</span></p><p><span m="461860">First of all, some of the
  vertexes are not visible in</span> <span m="466960">the views that you
  have.</span></p><p><span m="468490">So, of course, you can't do anything with
  those.</span></p><p><span m="470880">So let's say that we have a transparent
  object where you</span> <span m="473600">can see all the
  vertexes.</span></p><p><span m="475570">If you have three pictures of that,
  you can reconstruct any</span> <span m="479840">view of that
  object.</span></p><p><span m="481990">Now I have to be a little careful about
  how I say that,</span> <span m="484090">because it's not
  true.</span></p><p><span m="486430">What's true is, you can produce any view
  of that in</span> <span m="489730">orthographic projection.</span></p><p><span
  m="491620">So if you're close enough to the object that you get</span> <span
  m="493670">perspective, it doesn't work.</span></p><p><span m="495010">But for
  the most part, you can neglect perspective after you</span> <span
  m="498420">get about two and a half times as far away as</span> <span
  m="500860">the object is big.</span></p><p><span m="502420">And you can
  presume that you've got orthographic</span> <span
  m="504830">projection.</span></p><p><span m="507560">So that's a strange and
  exotic idea.</span></p><p><span m="509500">But how can you make a
  recognition</span> <span m="511080">theory out of that?</span></p><p><span
  m="512150">So let me show you.</span></p><p><span m="513740">Well, here's one
  drawing of the object, I need two more.</span></p><p><span m="519230">Let's
  see.</span></p><p><span m="520020">Let's have this one.</span></p><p><span
  m="528440">And maybe one that's tilted up a little bit.</span></p><p><span
  m="538140">It's important that these pictures not be just rotations</span>
  <span m="545360">on one axis.</span></p><p><span m="546030">Because they
  wouldn't form what you might think of as a</span> <span m="547860">kind of
  basis set.</span></p><p><span m="549870">So there are three
  pictures.</span></p><p><span m="550850">We'll call them a, b, and
  c.</span></p><p><span m="555830">And then we want a fourth
  picture.</span></p><p><span m="558860">Which will look like
  this.</span></p><p><span m="561172">It doesn't have to be too
  precise.</span></p><p><span m="564570">And we'll call that the
  unknown.</span></p><p><span m="566890">And what we really want to know is if
  the unknown is the</span> <span m="573220">same object that these three
  pictures were made from.</span></p><p><span m="581170">So let me begin with an
  assertion.</span></p><p><span m="584230">I'll need four colors of chalk to
  make this assertion.</span></p><p><span m="587570">What I want to do is I want
  to pick a particular place on the</span> <span m="591310">object, like this
  one.</span></p><p><span m="595770">And maybe the same place on this object
  over here.</span></p><p><span m="598220">Those are corresponding places,
  right?</span></p><p><span m="600790">So I can now write an equation that the
  x-coordinate of that</span> <span m="605480">unknown object is equal to, oh, I
  don't know, alpha x sub</span> <span m="612690">a plus beta x sub b plus gamma
  x sub c plus</span> <span m="624620">some constant, tau.</span></p><p><span
  m="627460">Well, of course, that's obviously true.</span></p><p><span
  m="629010">Because I'm letting you take those alpha, beta, gamma, and</span>
  <span m="632330">tau and make them anything you want.</span></p><p><span
  m="636680">So although that's conspicuously obviously true,</span> <span
  m="639870">it's not interesting.</span></p><p><span m="641630">So let me take
  another point.</span></p><p><span m="645410">And of course, I can write the
  same equation down for this</span> <span m="648680">purple
  point.</span></p><p><span m="661800">And now that I'm on a roll and having a
  great deal of fun</span> <span m="665190">with this, I can take this
  point</span> <span m="672760">and make a blue equation.</span></p><p><span
  m="686110">And you know I'm destined to do it, so I've</span> <span
  m="689840">got one more color.</span></p><p><span m="691050">I might as well
  use it.</span></p><p><span m="692872">Let's just make sure I get something
  that works here.</span></p><p><span m="696350">That's this one, that's this
  one.</span></p><p><span m="698810">I hope I've got these correspondences
  right.</span></p><p><span m="702180">STUDENT: [INAUDIBLE].</span></p><p><span
  m="702700">PATRICK WINSTON: Have I got one off?</span></p><p><span
  m="704030">STUDENT: [INAUDIBLE].</span></p><p><span m="705190">PATRICK
  WINSTON: Which color?</span></p><p><span m="705865">STUDENT:
  Blue.</span></p><p><span m="706210">[INAUDIBLE].</span></p><p><span
  m="707570">PATRICK WINSTON: OK.</span></p><p><span m="707930">So this one goes
  with this one, goes with this one.</span></p><p><span m="711500">Is that one
  wrong?</span></p><p><span m="712200">STUDENTS: Yeah.</span></p><p><span
  m="714920">PATRICK WINSTON: Oh, oh, oh.</span></p><p><span m="716100">Of
  course this one, excuse me, goes down here.</span></p><p><span
  m="720442">Right?</span></p><p><span m="722380">And then this one is off as
  well.</span></p><p><span m="725520">I wouldn't get a very good recognition
  scheme if I can't</span> <span m="727870">get those correspondences
  right.</span></p><p><span m="730630">Which is one of the lessons of
  today.</span></p><p><span m="736108">OK.</span></p><p><span m="736550">Now
  I've got them right.</span></p><p><span m="737820">And now that equation is
  correct.</span></p><p><span m="739700">I think I've got this one right
  already.</span></p><p><span m="742970">So now I can just write that
  down.</span></p><p><span m="744730">I'm on a roll, I'm just copying
  this.</span></p><p><span m="757870">So those are a bunch of
  equations.</span></p><p><span m="761460">And now the astonishing part is that
  I can choose alpha,</span> <span m="769530">beta, gamma, and tau to be all the
  same.</span></p><p><span m="779710">That is, there's one set of alpha, beta,
  gamma, and tau</span> <span m="783200">that works for everything, for all four
  points.</span></p><p><span m="787220">So you look at that
  puzzled.</span></p><p><span m="789330">And that's OK to be
  puzzled.</span></p><p><span m="790450">Because I certainly haven't proved
  it.</span></p><p><span m="791890">I'm asserting it.</span></p><p><span
  m="794430">But right away, there's something interesting about</span> <span
  m="795890">this and that is that the relationship between the</span> <span
  m="798330">points on the unknown object and the points in this stored</span>
  <span m="802020">library of images are related linearly.</span></p><p><span
  m="808700">That's true because it's orthographic
  projection.</span></p><p><span m="811570">Linearly related.</span></p><p><span
  m="812880">So I can generate the points in some fourth object from the</span>
  <span m="818610">points in three sample objects with linear
  operations.</span></p><p><span m="823740">Christopher?</span></p><p><span
  m="823990">STUDENT: Is that the x-coordinate of--</span> <span
  m="826950">PATRICK WINSTON: It's the x-coordinate.</span></p><p><span
  m="830840">Christopher asked about the x-coordinates.</span></p><p><span
  m="832380">Each of these x-coordinates are meant to be color
  coded.</span></p><p><span m="835850">It gets a little complicated with
  notation and stuff.</span></p><p><span m="840130">So that's the reason I'm
  color coding the coordinates.</span></p><p><span m="843720">So the orange x
  sub u is the x-coordinate of that</span> <span m="849710">particular
  point.</span></p><p><span m="850570">STUDENT: In 3D space?</span></p><p><span
  m="852390">PATRICK WINSTON: No.</span></p><p><span m="853610">Not in 3D
  space.</span></p><p><span m="854480">In the image.</span></p><p><span
  m="855536">STUDENT: So it's a 2D projection of it?</span></p><p><span
  m="857720">PATRICK WINSTON: It's a 2D projection of it, an</span> <span
  m="859750">orthographic projection.</span></p><p><span
  m="860600">OK?</span></p><p><span m="861450">So we're looking at
  drawings.</span></p><p><span m="864010">And those coordinates over there are
  the two-dimensional</span> <span m="866500">coordinates in the
  drawing.</span></p><p><span m="869470">Just as if it were on your
  retina.</span></p><p><span m="872615">STUDENT: [INAUDIBLE]</span> <span
  m="874555">vertexes on the 3D projection or can curved surfaces
  also?</span></p><p><span m="879410">PATRICK WINSTON: So he asked about curved
  surfaces.</span></p><p><span m="881470">And the answer is that you have to
  find corresponding</span> <span m="883810">points on the
  object.</span></p><p><span m="885610">So if you have a totally curved surface
  and you can't</span> <span m="890070">identify any corresponding points, you
  lose.</span></p><p><span m="892940">But if you consider our faces, there are
  some obvious points,</span> <span m="896230">even though our face are not by
  any means</span> <span m="898700">flat like these objects.</span></p><p><span
  m="900970">We have the tip of our nose and the center of our</span> <span
  m="903260">eyeballs and so on.</span></p><p><span m="906290">So if that's
  true, what does that mean about recovering</span> <span m="911250">alpha,
  beta, gamma, and tau?</span></p><p><span m="915390">Can we find
  them?</span></p><p><span m="918590">[INAUDIBLE], what do you
  think?</span></p><p><span m="919890">How do we go about finding
  them?</span></p><p><span m="921300">You're nodding your head in the right
  direction.</span></p><p><span m="922920">[LAUGHTER]</span> <span
  m="923880">STUDENT: It's four equations and--</span> <span m="926280">PATRICK
  WINSTON: Splendid.</span></p><p><span m="926550">It's four equations and four
  unknowns.</span></p><p><span m="928712">Four linear equations and four
  unknowns.</span></p><p><span m="930400">So obviously, you can solve for alpha,
  beta, gamma, and</span> <span m="933560">tau if you know that these equations
  are correct.</span></p><p><span m="937960">So how does that help us with
  recognition?</span></p><p><span m="941390">It helps us with recognition
  because we can take another</span> <span m="944000">point, let me say this
  square point here and this</span> <span m="951820">corresponding square point
  here and this corresponding</span> <span m="958410">square point here, and
  what can we do with those three</span> <span m="960750">points
  now?</span></p><p><span m="962460">We've got alpha, beta, gamma, and tau, so
  we can predict</span> <span m="965610">where it's going to be in the fourth
  image.</span></p><p><span m="969060">So we can predict that that square point
  is going to be</span> <span m="975310">right there.</span></p><p><span
  m="977060">And if it isn't, we're highly suspicious about whether this</span>
  <span m="981030">object is the kind of object we think it
  is.</span></p><p><span m="985230">So you look at me in
  disbelief.</span></p><p><span m="986480">You'd like me to demonstrate this, I
  imagine.</span></p><p><span m="989036">STUDENT: Yeah.</span></p><p><span
  m="989472">PATRICK WINSTON: OK.</span></p><p><span m="991220">Let me see if I
  can demonstrate this.</span></p><p><span m="1011480">So I'm going to do this
  in a slightly simplified version.</span></p><p><span m="1017110">I'm only
  going to allow rotation around</span> <span m="1021320">the vertical
  axis.</span></p><p><span m="1023270">And just so you know I'm not cheating,
  there's a little</span> <span m="1025680">slider here that rotates that third
  object.</span></p><p><span m="1029358">Let's see, why are there just two
  known</span> <span m="1032770">objects and one unknown?</span></p><p><span
  m="1033940">Well that's because I've restricted the motion to</span> <span
  m="1036740">rotation around the vertical axis and some
  translation.</span></p><p><span m="1040848">So now that I've spun that around
  a little bit, let me</span> <span m="1044630">pick some corresponding
  points.</span></p><p><span m="1047300">Oops.</span></p><p><span
  m="1048508">What's happened?</span></p><p><span
  m="1061240">Wow.</span></p><p><span m="1061520">Let me run that by
  again.</span></p><p><span m="1084430">OK.</span></p><p><span m="1084780">So
  there's one point I've selected</span> <span m="1087060">from the model
  objects.</span></p><p><span m="1088970">The corresponding point over here on
  the</span> <span m="1090830">unknown is right there.</span></p><p><span
  m="1092400">I'm going to be a little off.</span></p><p><span m="1093350">But
  that's OK.</span></p><p><span m="1095120">So let me just pick that one and
  then that</span> <span m="1098480">corresponds to this one.</span></p><p><span
  m="1100650">Krishna, would you like to specify a point so people know</span>
  <span m="1103870">I'm not cheating.</span></p><p><span m="1105680">Pick a
  point.</span></p><p><span m="1107900">Pick a point,
  Krishna.</span></p><p><span m="1109050">STUDENT: Oh, the
  right?</span></p><p><span m="1110874">PATRICK WINSTON: The
  right?</span></p><p><span m="1112020">STUDENT: Yeah.</span></p><p><span
  m="1112700">PATRICK WINSTON: This one?</span></p><p><span m="1113190">STUDENT:
  Yep.</span></p><p><span m="1115046">PATRICK WINSTON: Oops.</span></p><p><span
  m="1115510">OK, let's pick it out on the model first.</span></p><p><span
  m="1117310">Now pick it over here.</span></p><p><span
  m="1120175">Boom.</span></p><p><span m="1120670">So all the points are where
  they're supposed to be.</span></p><p><span m="1123290">Isn't that
  cool?</span></p><p><span m="1125690">Well, let's suppose that the unknown is
  something else.</span></p><p><span m="1130540">This is a carefully selected
  object.</span></p><p><span m="1132710">Because the points are all the correct
  positions vertically,</span> <span m="1137320">but they're not necessarily the
  correct positions in the</span> <span m="1139300">other two
  dimensions.</span></p><p><span m="1140950">So let me pick this point, and this
  point, and this point,</span> <span m="1148830">and this
  point.</span></p><p><span m="1151160">And Krishna had me pick this
  point.</span></p><p><span m="1154630">So let me pick this
  point.</span></p><p><span m="1157220">So if it thinks that the unknown is one
  of these</span> <span m="1161530">obelisk objects, then we would expect to see
  all of the</span> <span m="1165420">corresponding points correctly
  identified.</span></p><p><span m="1168280">But boom.</span></p><p><span
  m="1169780">All the points are off.</span></p><p><span m="1174850">So it seems
  to work in this particular example.</span></p><p><span m="1177360">I find the
  alpha and beta using two images.</span></p><p><span m="1183640">And I predict
  the locations of the other points.</span></p><p><span m="1187010">And I
  determine whether those positions are correct.</span></p><p><span
  m="1189630">And if they are correct, then I have a pretty good idea
  that</span> <span m="1191780">I have in fact identified the object on the
  right as either</span> <span m="1194840">an obelisk or an organ, depending on
  which of the</span> <span m="1199540">model choices and the unknown choices
  I've selected.</span></p><p><span m="1205420">So the only thing I have left to
  do is to demonstrate that</span> <span m="1209550">what I said about this is
  true.</span></p><p><span m="1212160">So I'm going to actually demonstrate that
  what I said</span> <span m="1214880">about this is true using the
  configuration in this</span> <span
  m="1218710">demonstration.</span></p><p><span m="1219640">Because it's much
  too hard for me to remember matrix</span> <span m="1223120">transformations
  for generalized rotation in three</span> <span
  m="1225930">dimensions.</span></p><p><span m="1227600">So here's how it's
  going to work.</span></p><p><span m="1233410">The z-axis is going up that
  way.</span></p><p><span m="1237140">Or, it's going to be pointing toward
  you.</span></p><p><span m="1241640">And what I'm going to do is I'm going
  to</span> <span m="1243760">rotate around this axis.</span></p><p><span
  m="1246820">And what I want to do is I want to find out how the</span> <span
  m="1249750">x-coordinate in the image of the points move</span> <span
  m="1252670">as I do that rotation.</span></p><p><span m="1256350">So here's
  the x-axis.</span></p><p><span m="1260300">This is the coordinate that you can
  see.</span></p><p><span m="1263180">Here is the y-axis.</span></p><p><span
  m="1265520">That's in depth, so you can't tell how far away it
  is.</span></p><p><span m="1270750">And the z-axis--</span> <span
  m="1272180">x, y, z-axis must be pointing out that way toward
  you.</span></p><p><span m="1277060">So now I'm going to consider just a single
  point on the</span> <span m="1281660">object and see what happens to
  it.</span></p><p><span m="1284310">So I'm going to say to myself, let's put
  the object in some</span> <span m="1291640">kind of standard
  position.</span></p><p><span m="1292650">I don't care what it
  is.</span></p><p><span m="1294300">It can be just random, just spin it
  around.</span></p><p><span m="1296450">Some position, we'll call that the
  standard position, S. And</span> <span m="1302810">that means that the
  x-coordinate of the standard</span> <span m="1306770">position is x sub
  s.</span></p><p><span m="1309890">And the y-coordinate of the standard
  position is y sub s.</span></p><p><span m="1317520">And now I'm going to
  rotate the object three times.</span></p><p><span m="1321930">Once to form the
  a picture, once to form the b picture,</span> <span m="1325280">and once to
  form the c picture.</span></p><p><span m="1327110">And you can make those
  choices.</span></p><p><span m="1329960">Those can be anything,
  right?</span></p><p><span m="1332330">So let's say that the a picture is out
  here.</span></p><p><span m="1338540">So that's the a
  picture.</span></p><p><span m="1342190">The B picture is out
  here.</span></p><p><span m="1345040">And the unknown is up that
  way.</span></p><p><span m="1352000">And so what I want to know depends on
  these vectors.</span></p><p><span m="1357540">We'll call that theta sub a, and
  this is theta sub b.</span></p><p><span m="1365230">And this one is theta sub
  u.</span></p><p><span m="1370430">So I would like to know how x sub a depends
  on x</span> <span m="1381950">sub s and y sub s.</span></p><p><span
  m="1385490">And I can never remember how to do that, because I can</span>
  <span m="1388490">never remember the transformation</span> <span
  m="1389810">equations for rotation.</span></p><p><span m="1391480">So I have
  to figure it out every time.</span></p><p><span m="1394880">And this is no
  exception.</span></p><p><span m="1396090">So what I'm going to say is that
  this vector that goes out</span> <span m="1398870">to S consists of two
  pieces.</span></p><p><span m="1401900">There's the x part and the y
  part.</span></p><p><span m="1405570">And I know that I can rotate this vector
  by alpha sub a by</span> <span m="1410390">rotating this vector and rotating
  that vector and</span> <span m="1413130">adding up the
  results.</span></p><p><span m="1415370">So if I rotate this vector by alpha
  sub a, then the</span> <span m="1419930">contribution of that to the
  x-coordinate of a is going to</span> <span m="1426200">be given by the cosine
  of theta sub a</span> <span m="1432790">multiplied by x sub
  s.</span></p><p><span m="1436530">So you can just exaggerate that motion, say,
  well if I</span> <span m="1439360">pitch it up that way then the projection
  down on the x-axis</span> <span m="1443220">is going to be this length of the
  vector times the</span> <span m="1446520">cosine of the
  angle.</span></p><p><span m="1450410">Now there's also going to be a
  dependence on y sub s.</span></p><p><span m="1455930">Let's figure out what
  that's going to be.</span></p><p><span m="1457820">I've got this vector
  here.</span></p><p><span m="1459065">And I'm going to rotate it by theta sub a
  as well.</span></p><p><span m="1462220">If I rotate that by theta sub a and
  see what the projection</span> <span m="1465250">is on the x-axis, that's
  going to be given by</span> <span m="1468020">the sine of the
  angle.</span></p><p><span m="1470570">But it's going the wrong way, so I have
  to subtract it off.</span></p><p><span m="1474080">So that's how I don't have
  to remember what the signs are on</span> <span m="1476825">these
  equations.</span></p><p><span m="1484520">Well, that was
  good.</span></p><p><span m="1485450">And now that I'm off and running I
  can</span> <span m="1487940">do what I did before.</span></p><p><span
  m="1488710">It makes it easy to give the lecture.</span></p><p><span
  m="1490280">Because this is going to be x sub b is equal to x sub s</span>
  <span m="1494120">times the cosine of theta sub b minus y sub s times
  the</span> <span m="1500690">cosine of theta--</span> <span m="1503240">oh,
  you're letting me make mistakes.</span></p><p><span
  m="1505690">Shame.</span></p><p><span m="1509740">I can generally tell by all
  the troubled looks.</span></p><p><span m="1512050">But there should be some
  shouting as well.</span></p><p><span m="1514280">That's the sine and that's
  the sine.</span></p><p><span m="1518150">And one more time.</span></p><p><span
  m="1519780">x sub u is equal to x sub s times the cosine of theta sub</span>
  <span m="1526890">u minus y sub s times the sine of theta sub
  u.</span></p><p><span m="1533830">And I forgot the b up
  there.</span></p><p><span m="1536670">So there are some
  equations.</span></p><p><span m="1537880">And we don't know what we're
  doing.</span></p><p><span m="1539710">We're just going to stare at them awhile
  and see if they</span> <span m="1541610">sing us a song.</span></p><p><span
  m="1545200">So let's see if they sing us a song.</span></p><p><span
  m="1548480">What about x sub a and x sub b?</span></p><p><span
  m="1554350">These are things that we see in the image.</span></p><p><span
  m="1557160">These are things that we can measure.</span></p><p><span
  m="1570850">What about all those cosines and sines of theta</span> <span
  m="1574100">a's and theta b's.</span></p><p><span m="1576000">Well, we have no
  idea what they are.</span></p><p><span m="1578010">But one thing is
  clear.</span></p><p><span m="1580420">They're true for all of the points on
  the object.</span></p><p><span m="1585260">Because when we rotate the object
  around by angle theta,</span> <span m="1588740">we're rotating all of the
  points through</span> <span m="1591510">the same angle,
  right?</span></p><p><span m="1593790">So with respect to any</span> <span
  m="1595250">particular view of the object--</span> <span m="1598790">here we
  are in the standard position.</span></p><p><span m="1601810">Here we are in
  position a.</span></p><p><span m="1604590">The vectors to all of the points on
  the object are</span> <span m="1606830">rotated by the same angle when we go
  from the standard</span> <span m="1610510">position to the a
  position.</span></p><p><span m="1613240">So that means that for all of the
  images in this particular</span> <span m="1622100">rendering, with a
  particular rotation by theta a, theta b,</span> <span m="1626940">and theta u,
  those are constants.</span></p><p><span m="1635820">Now remember this is for a
  particular theta a, a</span> <span m="1638125">particular theta be, and a
  particular theta u.</span></p><p><span m="1641140">As long as we're talking
  about all of the points for each of</span> <span m="1643850">those rotations,
  those angles and cosines are going to be</span> <span m="1648920">the same for
  all possible points on the object.</span></p><p><span
  m="1657780">OK.</span></p><p><span m="1658110">So now we go back to our high
  school algebra experts and we</span> <span m="1661790">say, look at these
  first two equations, We've got two</span> <span m="1669880">equations and what
  we can now construe to be two unknowns.</span></p><p><span m="1675540">What
  are the unknowns that are left?</span></p><p><span m="1677210">We can measure
  a and b.</span></p><p><span m="1678990">Whatever the cosines are, they're
  the</span> <span m="1680700">same for all the pictures.</span></p><p><span
  m="1682660">So if we treat those as constants, then we can solve</span> <span
  m="1685580">for x sub s and y sub s.</span></p><p><span
  m="1688770">Right?</span></p><p><span m="1690490">We can solve for x sub s and
  y sub s in terms of x sub a and</span> <span m="1694860">x sub b and a whole
  bunch of constants.</span></p><p><span m="1700190">But, I don't know, a whole
  bunch of constants, let's see.</span></p><p><span m="1707220">We can gather up
  all of those cosines and ratios of sines</span> <span m="1710640">and cosines
  and all that stuff and put them all together.</span></p><p><span
  m="1714350">Because they're all constants.</span></p><p><span m="1716130">And
  then we can do this.</span></p><p><span m="1718320">We can say x sub u is
  equal to--</span> <span m="1728060">well, it's going to depend on x sub a and
  x sub b.</span></p><p><span m="1734010">And by the time we wash or manipulate
  or screw around</span> <span m="1738030">with all those cosines, we can say
  that the multiplier for x</span> <span m="1743220">sub a is some constant
  alpha and the multiplier for x sub b</span> <span m="1747670">is some constant
  beta.</span></p><p><span m="1749910">So that's not a slight of
  hand.</span></p><p><span m="1751500">That's just linear</span> <span
  m="1752710">manipulation of those equations.</span></p><p><span
  m="1755300">And that's what we wanted to show, that for orthographic</span>
  <span m="1757940">projection, which this is-- there is no perspective</span>
  <span m="1761130">involved here, we're just taking the projection along</span>
  <span m="1763530">the x-axis--</span> <span m="1766480">we can demonstrate for
  this simplified situation that that</span> <span m="1770060">equation must
  hold.</span></p><p><span m="1773880">Now I want to give you a few
  puzzles.</span></p><p><span m="1775310">Because this stuff is so
  simple.</span></p><p><span m="1776730">Suppose I allow translation as well as
  rotation.</span></p><p><span m="1781020">What's going to
  happen?</span></p><p><span m="1782696">STUDENT: You just get the
  tau.</span></p><p><span m="1784094">Basically, you get a
  constant.</span></p><p><span m="1784560">PATRICK WINSTON: Yeah, you add a
  constant, tau.</span></p><p><span m="1786180">But what do we need to do in
  order to solve it?</span></p><p><span m="1787760">STUDENT: Subtract them
  [INAUDIBLE].</span></p><p><span m="1789221">You subtract two equations and
  then [INAUDIBLE].</span></p><p><span m="1792630">PATRICK WINSTON: Let's see,
  now we've got</span> <span m="1794950">three unknowns,
  right?</span></p><p><span m="1796206">I don't know tau.</span></p><p><span
  m="1796985">I don't know x sub s.</span></p><p><span m="1798216">And I don't
  know y sub s.</span></p><p><span m="1800910">So I need another
  equation.</span></p><p><span m="1802650">Where do I get the other
  equation.</span></p><p><span m="1804534">STUDENT:
  [INAUDIBLE].</span></p><p><span m="1805430">PATRICK WINSTON: From another
  picture.</span></p><p><span m="1809910">That's why up there I needed four
  points.</span></p><p><span m="1814150">That covers a situation where I've got
  three degrees of</span> <span m="1817690">rotation and
  translation.</span></p><p><span m="1820080">Here I got by with just two
  pictures in this illustration.</span></p><p><span m="1825360">That one
  involved a tau translational element, so I</span> <span m="1827840">needed
  three pictures.</span></p><p><span m="1828720">And this one's got full
  rotation, so I needed four.</span></p><p><span m="1832700">So great idea,
  works fine.</span></p><p><span m="1840226">The trouble is it doesn't work so
  fine on natural objects.</span></p><p><span m="1845410">It works fine on
  things that are manufactured because they</span> <span m="1848630">all have
  identical dimensions.</span></p><p><span m="1851250">So if I made a million of
  these in a factory, I'd have</span> <span m="1855420">no trouble recognizing
  them.</span></p><p><span m="1856950">Because all I'd have to do is take three
  pictures, record</span> <span m="1862090">the coordinates of some of the
  points, and I'd be done.</span></p><p><span m="1864840">The trouble is the
  natural world isn't like this.</span></p><p><span m="1870410">And you aren't
  like this either.</span></p><p><span m="1876100">I don't know, if I'm trying
  to recognize faces, it's not that</span> <span m="1881020">easy to do all
  this.</span></p><p><span m="1883700">First of all, it's a little difficult to
  find the exact</span> <span m="1887380">point, the exactly corresponding
  points.</span></p><p><span m="1890390">I made a mistake in doing it
  myself.</span></p><p><span m="1892950">And if the computer made a mistake it
  would certainly</span> <span m="1895230">make an error.</span></p><p><span
  m="1896060">Because it would be using non-corresponding points to</span> <span
  m="1899440">make the prediction.</span></p><p><span m="1900120">So it would be
  way off.</span></p><p><span m="1902656">But this is still in the tradition of
  working from</span> <span m="1907070">local features in the objects toward
  recognition.</span></p><p><span m="1911950">So having looked at that theory,
  we also find it a</span> <span m="1918790">little wanting.</span></p><p><span
  m="1919350">It works great it some circumstances, doesn't seem to</span> <span
  m="1922280">solve the whole recognition problem.</span></p><p><span
  m="1927190">Years pass.</span></p><p><span m="1929590">Shimon Ullman comes up
  with another theory that's not so</span> <span m="1933600">much based on edge
  fragments or the location of particular</span> <span m="1940310">features but
  rather on correlation.</span></p><p><span m="1947570">Taking a picture of,
  say, Krishna's face, taking a</span> <span m="1952930">picture of the whole
  class, and then using that as a kind</span> <span m="1957120">of correlation
  mask, running it all over the picture of the</span> <span m="1960680">class,
  seeing where it maximizes out.</span></p><p><span m="1963050">Now that's
  vague.</span></p><p><span m="1963600">I'll explain when I'm talking about
  [INAUDIBLE]</span> <span m="1965480">correlation in a
  minute.</span></p><p><span m="1967610">But it's basically saying, if I have a
  picture of Krishna,</span> <span m="1973400">where do I find
  him?</span></p><p><span m="1974390">I'll find him in one
  place.</span></p><p><span m="1975902">But you know what?</span></p><p><span
  m="1977750">Krishna doesn't look like anybody else.</span></p><p><span
  m="1980410">So I might not find any other faces.</span></p><p><span
  m="1982810">And if my objective is to find all the faces, then maybe
  that</span> <span m="1986840">idea won't work either.</span></p><p><span
  m="1989150">Or, to take another example, here's a dollar
  bill.</span></p><p><span m="1993590">We haven't had raises in quite well, so
  this is my last one.</span></p><p><span m="1998130">It's got a picture of
  George Washington on it.</span></p><p><span m="2000950">And I can look all
  over the class.</span></p><p><span m="2002740">And if I use this is as a face
  detector, I'd be sorely</span> <span
  m="2006630">disappointed.</span></p><p><span m="2007100">Because I wouldn't
  find any faces.</span></p><p><span m="2009430">Because thank God, nobody looks
  exactly like George</span> <span m="2012350">Washington.</span></p><p><span
  m="2012890">So the correlation wouldn't work very well.</span></p><p><span
  m="2016700">So that idea's a loser.</span></p><p><span m="2021580">But wait a
  minute.</span></p><p><span m="2022290">I don't have to look for the whole
  face.</span></p><p><span m="2025250">I could just look for
  eyes.</span></p><p><span m="2030790">And then I could look for noses and maybe
  mouths.</span></p><p><span m="2033770">And maybe I could have a library of 10
  different eyes</span> <span m="2037080">and 10 different noses and 10
  different mouths.</span></p><p><span m="2041280">Would that idea
  work?</span></p><p><span m="2046100">Probably not so well.</span></p><p><span
  m="2047440">The trouble with that one is, I'd find</span> <span
  m="2049420">eyeballs in every doorknob.</span></p><p><span m="2051676">There's
  just not enough stuff there to give me a reliable</span> <span
  m="2057960">correlation.</span></p><p><span m="2060920">So let's make this a
  little more concrete by</span> <span m="2063989">drawing some
  pictures.</span></p><p><span m="2069770">Halloween is
  approaching.</span></p><p><span m="2072880">So here's a
  face.</span></p><p><span m="2082387">All right?</span></p><p><span
  m="2084375">Here's another face.</span></p><p><span m="2095840">So those might
  be faces in my pre-recorded library of</span> <span m="2099160">pumpkin
  faces.</span></p><p><span m="2101410">Now along comes this
  face.</span></p><p><span m="2113690">What's going to
  happen?</span></p><p><span m="2116270">Well, I don't know.</span></p><p><span
  m="2118490">Let's draw yet another face.</span></p><p><span m="2132020">I
  don't know, that could be a pretty weird</span> <span m="2133440">pumpkin
  face, I suppose.</span></p><p><span m="2134460">But I mean it to be something
  that doesn't look very much</span> <span m="2137000">like a
  face.</span></p><p><span m="2139460">So if I'm doing a complete correlation
  with either of</span> <span m="2144380">these faces in my library, neither one
  will match this</span> <span m="2147280">one very well.</span></p><p><span
  m="2151150">If I'm looking for fine features like eyes, then I've</span> <span
  m="2155800">got these eyes everywhere.</span></p><p><span m="2161300">So it
  doesn't help very much.</span></p><p><span m="2164190">So you can see where
  I'm going.</span></p><p><span m="2165380">And you can reinvent Ullman's great
  idea.</span></p><p><span m="2170030">What is it?</span></p><p><span
  m="2171960">We don't look for big features, like whole
  faces.</span></p><p><span m="2175200">We don't look for small features,</span>
  <span m="2176970">like individual eyes.</span></p><p><span m="2178846">We look
  for intermediate features, like two eyes and a</span> <span m="2182180">nose,
  or a mouth and a nose.</span></p><p><span m="2185040">So when we do that, then
  we can say, now, here are two</span> <span m="2194310">eyes and a
  nose.</span></p><p><span m="2197120">Well, that's found in this
  one.</span></p><p><span m="2202370">And what about the combination of that
  nose and that mouth?</span></p><p><span m="2208460">Oh, that's over
  here.</span></p><p><span m="2211051">But neither of those features can be
  found</span> <span m="2213030">in the fourth image.</span></p><p><span
  m="2216800">So that's the Goldilocks principle.</span></p><p><span
  m="2219410">When you're doing this sort of thing, you want things that</span>
  <span m="2220945">are not too small and not too big.</span></p><p><span
  m="2223500">I've got the Rumpelstiltskin principle up</span> <span
  m="2227740">there, too, by the way.</span></p><p><span m="2228970">Because I
  meant to mention that Marr was a genius at</span> <span m="2232020">naming
  things.</span></p><p><span m="2233830">And even though many of his theories
  have faded, he's</span> <span m="2238650">still known for these names like
  primal sketch and two and</span> <span m="2241520">a half D sketch because he
  was such an artist</span> <span m="2243030">at naming the
  concepts.</span></p><p><span m="2244610">He even got credit for a lot of stuff
  that he didn't do.</span></p><p><span m="2247900">Not because he was
  deliberately trying to get it</span> <span m="2253440">inappropriately, but
  just because he was so good at</span> <span m="2255240">naming
  stuff.</span></p><p><span m="2256490">So we had the Rumpelstiltskin principle
  back then.</span></p><p><span m="2258450">And now we have the Goldilocks
  principle.</span></p><p><span m="2260050">Not too big, not too
  small.</span></p><p><span m="2263535">But that leaves us with the final
  question, which is, so</span> <span m="2268150">if what we want to do is look
  for intermediate-size</span> <span m="2271230">features, how do we actually
  find them in a sea</span> <span m="2274410">of faces out
  there?</span></p><p><span m="2275770">See, I might have a library, I might
  take 10 of you and</span> <span m="2278400">record your
  eyes.</span></p><p><span m="2281050">Take another ten, record your
  mouths.</span></p><p><span m="2283530">And they may be put together in a
  unique way for each of</span> <span m="2286400">you out
  there.</span></p><p><span m="2286870">But it's likely that I'll fin Lana's
  eyes</span> <span m="2290390">somewhere else in a crowd.</span></p><p><span
  m="2292430">And Nicola's mouth somewhere else in a crowd.</span></p><p><span
  m="2296850">So how do we in fact go about finding them?</span></p><p><span
  m="2301330">And I mentioned the term correlation a</span> <span
  m="2303080">couple of times now.</span></p><p><span m="2304720">Let me make
  that concrete.</span></p><p><span m="2311270">So let's consider a
  one-dimensional face that</span> <span m="2318790">looks like
  this.</span></p><p><span m="2327950">Which is a signal.</span></p><p><span
  m="2330810">And I'm going to consider a one-dimensional
  image.</span></p><p><span m="2336160">And in that one-dimensional image I've
  got a</span> <span m="2344390">facsimile of the face.</span></p><p><span
  m="2346670">And the question is, what kind of algorithm could I use to</span>
  <span m="2348850">determine the offset in the image where the face
  occurs?</span></p><p><span m="2354030">So you can see that one possibility is
  you just do an</span> <span m="2357320">integral of the signal in the face and
  the signal out here</span> <span m="2365270">over the extent of the face and
  see how it multiplies out.</span></p><p><span m="2369610">Or, to make it less
  lawyerly and more MITish, let's say</span> <span m="2374920">that what we're
  going to do is we're going to maximize over</span> <span m="2381310">some
  parameter x the integral over x of some face, which is</span> <span
  m="2392190">a function of x and the image g, which is a function of x</span>
  <span m="2404220">minus that offset.</span></p><p><span m="2407830">So when
  the offset, t, is equal to this offset, then</span> <span m="2414200">we're
  essentially multiplying the thing by itself and</span> <span
  m="2417350">integrating over the extent of the face.</span></p><p><span
  m="2419890">And that gives you a very big number if they're lined up
  and</span> <span m="2424610">a very small number if they're
  not.</span></p><p><span m="2427420">And it's even true if we add a whole lot
  of</span> <span m="2432370">noise to the images.</span></p><p><span
  m="2437130">But these are images.</span></p><p><span m="2438660">They're not
  one dimensional.</span></p><p><span m="2439595">But that's
  OK.</span></p><p><span m="2441210">It's easy enough to make a modification
  here.</span></p><p><span m="2444215">We're going to maximize over
  translation</span> <span m="2446980">parameters x and y.</span></p><p><span
  m="2449140">And these are no longer functions of just x, they're</span> <span
  m="2451970">also functions of y.</span></p><p><span m="2456900">Like
  so.</span></p><p><span m="2459750">So that's basically how it
  works.</span></p><p><span m="2461380">We won't go into details about
  normalization and all that</span> <span m="2463690">sort of thing because
  that's the stuff of which other</span> <span m="2466480">courses remain the
  custodians.</span></p><p><span m="2471340">So would you like to see a
  demonstration?</span></p><p><span m="2473412">OK.</span></p><p><span
  m="2496410">All right.</span></p><p><span m="2497220">So without realizing it,
  Nicola and Erica have loaned</span> <span m="2502000">us their
  pictures.</span></p><p><span m="2504080">And they are embedded in that big
  field of noise.</span></p><p><span m="2509490">And it's pretty easy to pick
  out Erica and Nicola, right?</span></p><p><span m="2512170">Because we are
  actually pretty good at picking faces out of</span> <span m="2517120">these
  images.</span></p><p><span m="2518740">So let's add some
  noise.</span></p><p><span m="2525640">It's a little harder
  now.</span></p><p><span m="2528160">What I'm going to is I'm going to run this
  correlation</span> <span m="2530100">program over this whole image using
  Nicola's face as a mask</span> <span m="2538000">and seeing where the
  correlation peaks up, in spite</span> <span m="2540670">of all the noise
  that's in there.</span></p><p><span m="2548290">Boom, there he
  is.</span></p><p><span m="2552780">I don't know, maybe we can find Erica
  too.</span></p><p><span m="2557370">I forgot where she was.</span></p><p><span
  m="2560110">I can't find her.</span></p><p><span m="2564740">There she
  is.</span></p><p><span m="2567670">Unfortunately the parameters aren't very
  good here.</span></p><p><span m="2570490">Do you see that?</span></p><p><span
  m="2572890">Let me get another version of this.</span></p><p><span
  m="2575550">I'll just do some real-time programming.</span></p><p><span
  m="2588780">I've been trying to reset the parameters so that the images</span>
  <span m="2593210">in the demonstration comes out clearly up
  there.</span></p><p><span m="2597070">Let's see if this works a little
  better.</span></p><p><span m="2599680">OK, so let's add some
  noise.</span></p><p><span m="2603860">And let's find Erica.</span></p><p><span
  m="2608750">There she is.</span></p><p><span m="2612340">There are some other
  things that look a</span> <span m="2613290">little bit like
  Erica.</span></p><p><span m="2614550">But nothing looks quite exactly like
  Erica.</span></p><p><span m="2619450">So let's try Nicola's
  eyes.</span></p><p><span m="2626090">So they stand out pretty clearly against
  the</span> <span m="2628070">background.</span></p><p><span m="2629630">Let's
  see if we can find Erica's eyes.</span></p><p><span m="2634580">So they stand
  out pretty clearly against the</span> <span
  m="2636150">background.</span></p><p><span m="2636440">Notice that it also
  gets Nicola's eyes.</span></p><p><span m="2639300">So two eyes is an
  intermediate-size constraint.</span></p><p><span m="2644840">It's loose enough
  that it will match more than one person.</span></p><p><span m="2648780">But
  it's not so loose that it's as bad as</span> <span m="2652130">looking for one
  eye.</span></p><p><span m="2655050">See, they're all over the
  place.</span></p><p><span m="2657490">So two eyes and a nose, a mouth and a
  nose, that would</span> <span m="2661640">be even better as an intermediate
  feature.</span></p><p><span m="2663870">But it doesn't matter what the best
  ones are, because you can</span> <span m="2665875">work that out
  experimentally.</span></p><p><span m="2668620">So that's how correlation
  works.</span></p><p><span m="2670660">And it's just amazing how much noise you
  can add and it'll</span> <span m="2674690">still pick out the right
  stuff.</span></p><p><span m="2679160">There's Nicola.</span></p><p><span
  m="2679780">Boom.</span></p><p><span m="2681080">Very
  clear.</span></p><p><span m="2683290">Want to add some more
  noise?</span></p><p><span m="2686790">I don't know, I can see it, but that's
  because I'm a</span> <span m="2689640">pretty good correlator,
  too.</span></p><p><span m="2695300">Boom.</span></p><p><span m="2696500">I
  don't know, let's add some more noise.</span></p><p><span m="2704420">It's
  just hard to get rid of it.</span></p><p><span m="2706480">It's just amazing
  how well it picks it out.</span></p><p><span m="2709650">That's
  good.</span></p><p><span m="2710400">That's cool.</span></p><p><span
  m="2712640">Now, but the reason that this is 30 years and we're still</span>
  <span m="2716690">not done is there are still some
  questions.</span></p><p><span m="2719340">This is recognizing stuff straight
  on.</span></p><p><span m="2722730">How is it I can recognize you in the hall
  from the side?</span></p><p><span m="2725260">Nobody knows.</span></p><p><span
  m="2727600">One possibility is that you have an ability to make those</span>
  <span m="2731830">transformations.</span></p><p><span m="2732630">If so, then
  that alignment theory has a role to play.</span></p><p><span
  m="2737410">Another theory is that, well, after I've seen you once I
  can</span> <span m="2741360">watch you turn your head and keep recording what
  you look</span> <span m="2744680">like at all possible
  angles.</span></p><p><span m="2747220">That would work.</span></p><p><span
  m="2748480">The trouble is, is there enough stuff in there?</span></p><p><span
  m="2752150">Maybe.</span></p><p><span m="2752650">We don't
  know.</span></p><p><span m="2755770">Now what would it take to break this
  mechanism?</span></p><p><span m="2759040">Well, I don't
  know.</span></p><p><span m="2759910">Let's just see if we can break the
  mechanism.</span></p><p><span m="2768600">Let's see if you can recognize some
  well-known faces.</span></p><p><span m="2775820">Who's
  that?</span></p><p><span m="2776400">Quick.</span></p><p><span
  m="2777430">STUDENT: Obama.</span></p><p><span m="2778540">PATRICK WINSTON:
  Oh, that's too easy.</span></p><p><span m="2781290">We'll see if we can make
  some harder ones.</span></p><p><span m="2785930">Yeah, that's
  Obama.</span></p><p><span m="2786955">Who's this?</span></p><p><span
  m="2788280">STUDENT: Bush.</span></p><p><span m="2789600">PATRICK WINSTON: Oh
  boy.</span></p><p><span m="2789940">You're really good at
  this.</span></p><p><span m="2791440">That's Bush.</span></p><p><span
  m="2792200">How about this guy?</span></p><p><span m="2792960">STUDENT:
  Kerry.</span></p><p><span m="2798680">PATRICK WINSTON: OK.</span></p><p><span
  m="2799000">Now I've got it.</span></p><p><span m="2799780">Some people are
  starting to turn their heads.</span></p><p><span m="2801220">And that's not
  fair.</span></p><p><span m="2802722">[LAUGHTER]</span> <span
  m="2804200">PATRICK WINSTON: That's not fair.</span></p><p><span
  m="2806030">Because you see what's happened is that if this kind</span> <span
  m="2809070">of pumpkin in theory is correct, then when you turn</span> <span
  m="2812500">the face upside down you lose the correlation of those</span>
  <span m="2816020">features that have vertical components.</span></p><p><span
  m="2818740">So if you have two eyes and a nose, they won't match two</span>
  <span m="2821570">eyes and a nose when they're turned upside
  down.</span></p><p><span m="2824890">Well, let's see.</span></p><p><span
  m="2825590">We'll try some more.</span></p><p><span m="2828470">Who's
  that?</span></p><p><span m="2830514">STUDENT: Gorbachev.</span></p><p><span
  m="2831370">PATRICK WINSTON: Gorbachev.</span></p><p><span m="2831800">Who
  said that?</span></p><p><span m="2833120">Leonid, where are
  you?</span></p><p><span m="2834575">This is Gorbachev,
  right?</span></p><p><span m="2835430">You can recognize him because of the
  little birthmark on the</span> <span m="2838340">top of his
  head.</span></p><p><span m="2840150">One more.</span></p><p><span
  m="2841105">Who's--</span> <span m="2842275">oh, that's
  easy.</span></p><p><span m="2843140">Who is it?</span></p><p><span
  m="2846050">That's Clinton.</span></p><p><span m="2848050">How about this
  one?</span></p><p><span m="2854520">Do you see how insulting it is to be at
  MIT?</span></p><p><span m="2859000">That's me.</span></p><p><span
  m="2860076">[LAUGHTER]</span> <span m="2863480">PATRICK WINSTON: And you
  didn't even know.</span></p><p><span m="2866720">Oh, god.</span></p><p><span
  m="2872770">So this might be evidence for the correlation
  theory.</span></p><p><span m="2877700">But of course, turning the face upside
  down would make it</span> <span m="2881280">very difficult to do alignment,
  too.</span></p><p><span m="2882860">So it would break out alignment theory, as
  well.</span></p><p><span m="2886060">Let me get that after class, Was there a
  mistake, or?</span></p><p><span m="2889045">STUDENT: No,
  no.</span></p><p><span m="2889500">I was just curious [INAUDIBLE] stretching
  would break the</span> <span m="2893430">correlation.</span></p><p><span
  m="2894140">PATRICK WINSTON: If what would break the
  structure?</span></p><p><span m="2895461">What?</span></p><p><span
  m="2896383">Stretching?</span></p><p><span m="2896844">STUDENT:
  [INAUDIBLE].</span></p><p><span m="2900120">PATRICK WINSTON: Elliot asked if
  stretching would break the</span> <span
  m="2901800">correlation.</span></p><p><span m="2902970">And the answer is, I
  think, stretching in the vertical</span> <span m="2910800">dimension is worse
  than stretching in</span> <span m="2913290">the horizontal
  dimension.</span></p><p><span m="2914790">Because you get a certain amount of
  stretching in the</span> <span m="2916455">horizontal dimension when you just
  turn your head.</span></p><p><span m="2918700">By the way, since our faces are
  basically mounted on a</span> <span m="2921450">cylinder, this kind of
  transformation</span> <span m="2925550">might actually
  work.</span></p><p><span m="2926890">That's a sidebar to the answer to your
  question, Elliot.</span></p><p><span m="2931140">But now you say, well, OK, so
  this is not completely solved.</span></p><p><span m="2933730">You can work
  this out.</span></p><p><span m="2935980">But if you really want to work
  something out, let me tell you</span> <span m="2939430">what the current
  questions are in computer vision.</span></p><p><span m="2943570">People have
  worked for an awful long time on this</span> <span m="2945090">recognition
  stuff and, to my mind, have neglected the more</span> <span
  m="2956010">serious questions.</span></p><p><span m="2958900">It's more
  serious questions are, how do you visually</span> <span m="2961030">determine
  what's happening?</span></p><p><span m="2964150">If you could write a program
  that would reliably determine</span> <span m="2968280">when these verbs are
  happening in your field of view, I will</span> <span m="2971520">sign your
  Ph.D. thesis tomorrow.</span></p><p><span m="2972970">There are 48 of them
  there.</span></p><p><span m="2975680">And that is today's
  challenge.</span></p><p><span m="2977610">But since we're short on time, I
  want to skip over that and</span> <span m="2980630">perform an experiment on
  you.</span></p><p><span m="2982800">I want you to tell me what I'm
  doing.</span></p><p><span m="2984892">STUDENT: [INAUDIBLE].</span></p><p><span
  m="2986600">PATRICK WINSTON: So the best single-word answer
  is?</span></p><p><span m="2989960">[INAUDIBLE]?</span></p><p><span
  m="2991090">STUDENT: Drinking.</span></p><p><span m="2991490">PATRICK WINSTON:
  OK, this is not a trick question.</span></p><p><span m="2994020">OK, the best
  single-word answer.</span></p><p><span m="2996500">Christopher, what do you
  think?</span></p><p><span m="2997778">STUDENT: Toasting.</span></p><p><span
  m="2999272">PATRICK WINSTON: Christopher.</span></p><p><span m="3000770">Well,
  you.</span></p><p><span m="3002942">You.</span></p><p><span
  m="3004874">STUDENT: Toasting.</span></p><p><span m="3006330">PATRICK WINSTON:
  What?</span></p><p><span m="3007910">Toasting.</span></p><p><span
  m="3009298">OK.</span></p><p><span m="3009782">Not a trick
  question.</span></p><p><span m="3012690">What's happening
  here?</span></p><p><span m="3018066">Best single-word
  answer?</span></p><p><span m="3020878">STUDENT: Drinking.</span></p><p><span
  m="3021786">PATRICK WINSTON: Is drinking.</span></p><p><span m="3024060">Which
  pair look more alike?</span></p><p><span m="3025846">[LAUGHTER]</span> <span
  m="3032170">PATRICK WINSTON: So that cat is drinking and nobody has any</span>
  <span m="3034210">trouble recognizing that.</span></p><p><span m="3035500">And
  I believe it's because you're telling a story.</span></p><p><span
  m="3043280">So our power of storytelling even reaches down into our</span>
  <span m="3046260">visual apparatus.</span></p><p><span m="3047620">So the
  story here is that some animal has evidently had an</span> <span
  m="3052720">urge to find something to drink and water is passing</span> <span
  m="3056860">through that animal's mouth.</span></p><p><span m="3057920">That's
  the drinking story.</span></p><p><span m="3059720">So even though they look
  enormously different visually,</span> <span m="3062520">the stuff at the
  bottom of our vision system provides enough</span> <span m="3065360">evidence
  for our story apparatus so that we can give</span> <span m="3068910">the left
  one and the right one different labels and recognize</span> <span
  m="3072300">the cat is drinking.</span></p><p><span m="3076410">And that's the
  end of the story.</span></p><p>&nbsp;</p>
uid: c87beea243de1ebf431cab907dd23f52
type: courses
layout: video
---
