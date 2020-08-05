---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Small signal circuits</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec11.jpg
    parent_uid: 06a5b568ebe572789bc12135907e523d
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-11/thumb_lec11.jpg
    title: thumb_lec11.jpg
    type: null
    uid: 69f0d0755f149ef90540cae28313fa00
  - id: Video-YouTube-Stream
    media_location: R4KxlqsuZ0A
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Video-YouTube-Stream
    type: Video
    uid: 110fe60c71d222d02cae5e58f3f7eba0
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/R4KxlqsuZ0A/default.jpg'
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4a0bdbf05a36aeccc7cc2cf1aa54e7e6
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Video-iTunes U-MP4
    type: Video
    uid: d8c19bbe6f8f25ec9d09c772ddd9b7ca
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-14oct2003-220k.mp4
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1b157344be0db45f92c644dec40b44bc
  - id: Thumbnail-OCW-JPG
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 284c630b81f1f57cfc7dda0d7ffdf416
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: R4KxlqsuZ0A
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e3ce7e692dbbc69c49aea977f4f681e8
  - id: R4KxlqsuZ0A.srt
    parent_uid: 06a5b568ebe572789bc12135907e523d
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-11/R4KxlqsuZ0A.srt
    title: 3play caption file
    type: null
    uid: 1e79b280d726dd79d6aceb92a53a5357
  - id: R4KxlqsuZ0A.pdf
    parent_uid: 06a5b568ebe572789bc12135907e523d
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-11/R4KxlqsuZ0A.pdf
    title: 3play pdf file
    type: null
    uid: 0c685c55c65225543fe56ee2b831975e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 64c8d24b016e7ef9639025c148c1e119
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 06a5b568ebe572789bc12135907e523d
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 88079a8ee2d5116254c897006b321f1d
inline_embed_id: '570156lecture11:smallsignalcircuits43797457'
order_index: 249
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/223a71c6e0b77090a6bdfd3b28aa1d5f">PDF</a>)<br />
  Demonstration: IDS vs. VDS load line (<a target="_blank" title="Open in a new
  window." href="./resolveuid/04c5b9d07519db0f7d6a145175be86e2">PDF</a>)</p>
short_url: lecture-11
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-11
title: 'Lecture 11: Small Signal Circuits'
transcript: >-
  <p><span m='7000'>We have put some of the quiz stats here.</span> </p><p><span
  m='10000'>The mean was about 75%. And I must tell you that that</span> <span
  m='15000'>is very impressive. I guess MIT undergrads never</span> <span
  m='19000'>cease to amaze me. And this was not an easy quiz.</span>
  </p><p><span m='24000'>This was a relatively hard quiz.</span> </p><p><span
  m='28000'>And that average implies that you guys did well on a</span> <span
  m='34000'>relatively hard quiz. Good.</span> </p><p><span m='38000'>Let's get
  back to our final lecture on amplifiers and small</span> <span
  m='45000'>signal circuits. And as always let me start with</span> <span
  m='51000'>a review. Very quickly --</span> <span m='62000'>-- we came up with
  a notation to represent small signals.</span> </p><p><span m='69000'>And our
  notation looked like this.</span> </p><p><span m='73000'>Our total variable
  was small and capital, and this was a DC</span> <span m='80000'>bias and this
  was a small signal.</span> </p><p><span m='92000'>This is also called the
  operating point.</span> </p><p><span m='96000'>And the small signal is also
  called the incremental signal.</span> </p><p><span m='102000'>In general, if
  you have some function, some variable of</span> <span m='107000'>interest in
  the circuit, say a total variable V out,</span> <span m='113000'>let's say it
  relates to some input variable as F of VI.</span> </p><p><span m='120000'>So
  mathematically we can find out V out by simply finding the</span> <span
  m='128000'>slope of this function at the operating point and then</span> <span
  m='135000'>multiplying it by the incremental change in the input.</span>
  </p><p><span m='143000'>Gold standard math. So we do the slope of this</span>
  <span m='149000'>function and evaluate it at the operating point.</span>
  </p><p><span m='157000'>So this would give us the slope of the
  function.</span> </p><p><span m='160000'>And multiply that by small VI, which
  is incremental change.</span> </p><p><span m='164000'>This is standard math.
  What this will tell you is</span> <span m='168000'>given a small change in VI
  this function gives you,</span> <span m='172000'>this expression gives you the
  small change in V out.</span> </p><p><span m='177000'>And in lecture we have
  pretty much used this method so far,</span> <span m='185000'>used the math to
  get to where we wanted it to be.</span> </p><p><span m='192000'>And then the
  way we provided biasing and so on was for our</span> <span
  m='200000'>amplifier in particular we had a bias voltage,</span> <span
  m='206000'>some small signal value, VS.</span> </p><p><span m='212000'>And
  this was output which was also given to be some output</span> <span
  m='216000'>operating point plus a small change, which was a change in</span>
  <span m='221000'>the output voltage. So what we have done here is</span> <span
  m='225000'>mathematically computed small V out.</span> </p><p><span
  m='228000'>And what I am showing you here is to get the same effect in
  a</span> <span m='233000'>circuit is you build your circuit and replace what
  used to</span> <span m='238000'>be a total variable with a DC bias plus a
  small change.</span> </p><p><span m='244000'>And then you will get your output
  here.</span> </p><p><span m='248000'>And this output will relate to this input
  using this</span> <span m='253000'>expression.</span> </p><p><span
  m='262000'>So this is more review. To continue on with the math</span> <span
  m='274000'>review, for our amplifier VO was given to be VS-K/2(vI-VT)^2
  RL.</span> </p><p><span m='285000'>So this was the output versus input
  relationship for the</span> <span m='294000'>amplifier. And mathematically I
  could get</span> <span m='300000'>the small change in the output VO by simply
  differentiating</span> <span m='306000'>this function with respect to VI,
  evaluating that function,</span> <span m='312000'>at capital VI and
  multiplying by the small change in the</span> <span m='318000'>input. And the
  resulting expression</span> <span m='322000'>that we got for small VO
  --</span> <span m='332000'>-- was simply minus K, this was our DC
  value,</span> <span m='337000'>and RL times small VI. So we derived all of
  this the</span> <span m='344000'>last time. So nothing new so far.</span>
  </p><p><span m='348000'>So my small signal output was some function given
  by</span> <span m='355000'>K(VI-VT)RL times small vi. And notice that this is
  how VI</span> <span m='363000'>relates to VO. And this is a constant
  with</span> <span m='367000'>respect to VI. V capital I is a DC bias,</span>
  <span m='371000'>so this is a constant. So therefore this is the linear</span>
  <span m='377000'>relationship that we had set out to get.</span> </p><p><span
  m='381000'>This term here, for reasons we will see today,</span> <span
  m='385000'>this term here K(VI-VT) is called gm.</span> </p><p><span
  m='391000'>Transconductance. We will look at it in more</span> <span
  m='394000'>detail a little later.</span> </p><p><span m='404000'>Even more
  review.</span> </p><p><span m='416000'>So I can draw the transfer function and
  plot VO versus VI.</span> </p><p><span m='422000'>Another way to graphically
  view what is going on is by plotting</span> <span m='427000'>the load line
  curve for this circuit, so this is VI.</span> </p><p><span m='432000'>And I
  said we draw that by first plotting the --</span> <span m='446000'>These were
  our MOSFET curves. And we know that at some point</span> <span m='450000'>the
  MOSFET gets into saturation, so this curve was iDS=K/2 VO^2.</span>
  </p><p><span m='457000'>And to the right side of the curve the MOSFET is
  in</span> <span m='461000'>saturation. And we said we will adhere to</span>
  <span m='465000'>the saturation discipline and operate in this regime.</span>
  </p><p><span m='470000'>When the MOSFET gets into this region it is in its
  triode</span> <span m='476000'>region. And then we could draw the load</span>
  <span m='481000'>line here. The load line codified the</span> <span
  m='485000'>following relationship, iDS=VS/RL-VO/RL.</span> </p><p><span
  m='490000'>This was a load line. So I have superimposed a load</span> <span
  m='496000'>line on the device characteristics,</span> <span m='500000'>and I
  am going to show you a little demonstration based on</span> <span
  m='507000'>that at this point. So these curves were drawn for</span> <span
  m='513000'>increasing values of VI. And if I choose some operating</span>
  <span m='518000'>point here then this point would correspond to some
  bias,</span> <span m='523000'>this bias point would correspond to some input
  voltage</span> <span m='528000'>VI, a corresponding output bias VO and a
  corresponding current</span> <span m='533000'>iDS. So iDS capitals,</span>
  <span m='535000'>VO capitals, VI capitals represent the</span> <span
  m='538000'>operating point values for our little circuit.</span> </p><p><span
  m='544000'>So far there is nothing new. One thing we stopped the last</span>
  <span m='551000'>time by pointing out that the gain of our amplifier,</span>
  <span m='558000'>this is the gain, -K(VI-VT)RL.</span> </p><p><span
  m='562000'>That is the gain A of the amplifier.</span> </p><p><span
  m='568000'>That gain related to VI. A gain was proportional to</span> <span
  m='573000'>VI-VT. So therefore if I increased VI,</span> <span m='577000'>I
  would get more gain. So the question is how do we</span> <span
  m='582000'>choose a bias point? And in our particular example,</span> <span
  m='587000'>let's say we are free to play around with VI.</span> </p><p><span
  m='592000'>So we play around with VI and I can choose various bias
  points.</span> </p><p><span m='600000'>So where do you set the bias
  point?</span> </p><p><span m='602000'>What are the various characteristics of
  the circuit</span> <span m='607000'>that relate to my bias point? Well,
  first,</span> <span m='610000'>of course, is gain. The gain depends on how
  I</span> <span m='614000'>choose VI. I will show you that in a</span> <span
  m='617000'>moment. The second important thing,</span> <span m='620000'>in
  other words, if I choose a bias point that</span> <span m='624000'>is a small
  VI then my gain is going to be smaller.</span> </p><p><span m='630000'>If I
  choose a bias point that's at a much higher value of VI,</span> <span
  m='635000'>I get a bigger gain. The second important</span> <span
  m='638000'>consideration is operating range.</span> </p><p><span
  m='648000'>Notice that if I choose a bias point here then as the input</span>
  <span m='657000'>changes -- Notice VI in this graph goes up</span> <span
  m='661000'>or down, and I would be traversing and following</span> <span
  m='665000'>different lines here in my MOSFET characteristic.</span>
  </p><p><span m='669000'>And as VI increases the operating point would come
  up</span> <span m='674000'>here and so on. So if about this operating</span>
  <span m='677000'>point I varied my input voltage VI then, so let's say about
  this</span> <span m='683000'>operating point, if my input VI,</span> <span
  m='685000'>my small signal VI varied about a small range then</span> <span
  m='690000'>correspondingly the output value would vary about this part of
  my</span> <span m='695000'>load line. So notice now that the</span> <span
  m='699000'>operating range, how far can VI vary before the</span> <span
  m='703000'>MOSFET goes out of its saturation discipline?</span> </p><p><span
  m='707000'>Well, on the low side my VI can come down to here.</span>
  </p><p><span m='712000'>And we looked at the operating ranges for an
  amplifier.</span> </p><p><span m='716000'>And I can come all the way down to
  VT.</span> </p><p><span m='721000'>At that point the output will come
  here.</span> </p><p><span m='723000'>Similarly at the high end VI could get up
  to a high value.</span> </p><p><span m='727000'>And we computed that value in
  the last lecture.</span> </p><p><span m='730000'>And the corresponding value
  of the input would be here.</span> </p><p><span m='734000'>So in some sense I
  can traverse all the way from here to here</span> <span m='738000'>and have
  the MOSFET remain in saturation.</span> </p><p><span m='740000'>Remember we
  are not talking about linearity right now,</span> <span m='744000'>just about
  the valid operating range based on my definition</span> <span m='748000'>which
  is that the MOSFET should stay in saturation.</span> </p><p><span
  m='753000'>So if I chose my operating point here then I get this range</span>
  <span m='757000'>here. And, on the other hand,</span> <span m='759000'>if I
  chose my operating point to be here, for negative</span> <span
  m='764000'>excursions of the input signal I have a very small amount
  before</span> <span m='769000'>I hit cutoff. So if I chose my operating</span>
  <span m='772000'>point here then for negative traversals of VI about
  the</span> <span m='776000'>operating point I very quickly hit cutoff.</span>
  </p><p><span m='781000'>So if I want symmetric swings then this is the best
  that I can</span> <span m='785000'>do in terms of the valid input operating
  range if I want</span> <span m='789000'>symmetric swings given that this is my
  bias point.</span> </p><p><span m='792000'>On the other hand, if I chose my
  bias point</span> <span m='795000'>somewhere here, or very carefully chose my
  bias</span> <span m='799000'>point then my input can vary on a much wider
  region and still</span> <span m='803000'>get symmetric swings. And so
  therefore the choice of</span> <span m='807000'>bias point also influences the
  maximum swing range of my input</span> <span m='811000'>signal. I shouldn't
  call this operating</span> <span m='816000'>range. I should call it input
  swing</span> <span m='820000'>range. We defined the valid input</span> <span
  m='823000'>operating range as the range for which the amplifier
  satisfied</span> <span m='830000'>the saturation discipline. So the two key
  issues,</span> <span m='835000'>gain and the input swing. Let me show you a
  quick demo</span> <span m='842000'>and try to point out on a graph some of the
  characteristics that</span> <span m='849000'>relate to the matter we have been
  talking about so far.</span> </p><p><span m='855000'>So what I show here are
  these curves for the MOSFET.</span> </p><p><span m='861000'>This is VO and
  this iDS. This is the zero point.</span> </p><p><span m='866000'>Ignore this
  line down here. This line up here corresponds</span> <span m='873000'>to the
  output voltage VO. What I am going to do now is,</span> <span
  m='877000'>through some careful circuit hacking, I'm going to show show</span>
  <span m='881000'>you a load line and show you the bias point, and show you how
  the</span> <span m='886000'>bias point can be moved up and down by changing
  the input</span> <span m='890000'>voltage which changes the corresponding
  output voltage.</span> </p><p><span m='900000'>It is hardly visible out
  there.</span> </p><p><span m='908000'>Is it there? OK.</span> </p><p><span
  m='909000'>It is not really clear, but notice that as I increase</span> <span
  m='913000'>my input, I am increasing my input.</span> </p><p><span
  m='916000'>My output keeps coming down. And I hope your eyesight is</span>
  <span m='920000'>better than mine because I don't see a dot up there.</span>
  </p><p><span m='924000'>I am amazed. This is the first time this has</span>
  <span m='927000'>happened to me. That's OK.</span> </p><p><span m='930000'>All
  right. As you can see,</span> <span m='933000'>as I change the input value the
  output operating point changes,</span> <span m='938000'>and the dot out there
  traverses, articulates a load</span> <span m='943000'>line. I guess I have to
  believe that</span> <span m='946000'>there is a dot out there. Next what I
  will do is show you</span> <span m='951000'>some more fun stuff. What I will
  do is instead of</span> <span m='955000'>having just a dot by having a DC
  voltage, let me apply an input</span> <span m='960000'>sinusoid. So if I apply
  an input sinusoid</span> <span m='965000'>at some bias then I should see an
  articulation of the</span> <span m='969000'>corresponding region of the load
  line corresponding to the input.</span> </p><p><span m='974000'>So, as you can
  see here, now the bottom line,</span> <span m='978000'>here is my input and
  this is my output.</span> </p><p><span m='981000'>And notice that this the
  region of the load line articulated</span> <span m='986000'>when the input is
  of this magnitude.</span> </p><p><span m='990000'>Now let's have some fun. As
  I increase my input,</span> <span m='993000'>you can see that a larger portion
  of the load line is</span> <span m='997000'>articulated, right? There you
  go.</span> </p><p><span m='999000'>And as I decrease my input a smaller region
  of the load line</span> <span m='1003000'>is articulated. Let's leave it here
  for a</span> <span m='1006000'>moment. And what I will do next,</span> <span
  m='1009000'>this is the region here that we are looking at,</span> <span
  m='1012000'>let me increase the bias. If I increase the bias,</span> <span
  m='1015000'>if I increase VI, what do you think should happen</span> <span
  m='1019000'>to this line here? Well, if I increase the bias,</span> <span
  m='1024000'>the line should go up, right?</span> </p><p><span
  m='1026000'>Because remember the dot? The dot is in the middle of</span> <span
  m='1029000'>this thing here. If I increase the bias this</span> <span
  m='1032000'>should move up here. So that line moves up.</span> </p><p><span
  m='1035000'>Do you expect anything else to happen to that line?</span>
  </p><p><span m='1039000'>Pardon? It increases,</span> <span
  m='1040000'>exactly. If I increase the bias point to</span> <span
  m='1043000'>here then this must also increase because my gain has</span> <span
  m='1046000'>increased. Let me do that.</span> </p><p><span m='1050000'>So let
  me increase the input bias.</span> </p><p><span m='1052000'>Indeed notice that
  the region of the load line articulated is</span> <span m='1058000'>larger
  now. Let me decrease the bias.</span> </p><p><span m='1061000'>And notice that
  because the gain is smaller the little</span> <span m='1066000'>segment shown
  is also smaller. I have shown you two things so</span> <span m='1071000'>far.
  One is that I as I increase my</span> <span m='1074000'>bias the line indeed
  rises up corresponding to a higher value</span> <span m='1080000'>for the
  input operating point. And the second is that I get a</span> <span
  m='1086000'>larger swing in the output as I increase the bias.</span>
  </p><p><span m='1091000'>Just to show that for those like me who were
  visually</span> <span m='1096000'>challenged in terms of viewing that little
  dot up there,</span> <span m='1101000'>let me get some audio so you can
  actually hear the sinusoidal</span> <span m='1106000'>tone. It is a big
  annoying.</span> </p><p><span m='1115000'>As I reduce the bias the gain is
  decreased.</span> </p><p><span m='1119000'>As I increase the bias you can see
  that the gain is increased</span> <span m='1125000'>and the tone is louder.
  Let's have some more fun and</span> <span m='1130000'>let's play some music
  now. And what I am going to show you</span> <span m='1136000'>with the music
  -- The reason I play the music is</span> <span m='1141000'>not just for fun.
  Well, it's 85% fun and 15%</span> <span m='1145000'>learning. Can we turn it
  on for a second?</span> </p><p><span m='1148000'>What I would like to do is,
  as we play the music,</span> <span m='1152000'>the reason I am playing the
  music for that 15% is so you can</span> <span m='1157000'>listen to
  distortion. I want you to listen to the</span> <span m='1161000'>distortion.
  That is when the articulation</span> <span m='1164000'>is here you are not
  going to get much distortion.</span> </p><p><span m='1170000'>But as I get
  into cutoff you should be getting a bunch of</span> <span
  m='1174000'>distortion. Similarly, as you get into the</span> <span
  m='1177000'>triode region you should also be getting distortion because
  the</span> <span m='1182000'>amplification from being somewhat nonlinear here
  becomes</span> <span m='1187000'>highly nonlinear at those two points.</span>
  </p><p><span m='1190000'>So let's just play the signal. So volume
  increases,</span> <span m='1194000'>or rather the amplitude increases by
  increasing the</span> <span m='1198000'>bias. Now you should hear the
  volume</span> <span m='1202000'>go down and distortion.</span> </p><p><span
  m='1215000'>So notice now that the bias point is way down here.</span>
  </p><p><span m='1217000'>So the gain is very low, and plus there is a
  distortion</span> <span m='1220000'>because of cutoff. Now what I will do is
  blast it</span> <span m='1223000'>up here, and you will see that the volume
  has gone up but then</span> <span m='1226000'>you see distortion again. Let's
  see if you can stand the</span> <span m='1229000'>volume here.</span>
  </p><p><span m='1254000'>Even the CD doesn't like that.</span> </p><p><span
  m='1262000'>Notice that as I went up here the volume kept increasing</span>
  <span m='1265000'>because the gain kept increasing, but as I got into</span>
  <span m='1269000'>the triode region I began to lose my gain because,</span>
  <span m='1272000'>remember, the amplifier doesn't have gain in the triode
  region,</span> <span m='1277000'>MOSFET in its triode region, and we also get
  a bunch of</span> <span m='1281000'>distortion out there. Finally, it turns
  out that as</span> <span m='1284000'>people are building amplifiers --</span>
  <span m='1288000'>I think this was in the mid to late `50s and `60s and so
  on.</span> </p><p><span m='1293000'>They said man, electrical engineers are
  not</span> <span m='1298000'>going to get their thing right. So they invented
  a new kind of</span> <span m='1304000'>music which was much more tolerant to
  distortion.</span> </p><p><span m='1308000'>And I will play that music for
  you.</span> </p><p><span m='1312000'>It is called hard rock. I challenge you
  to tell me it</span> <span m='1317000'>is distorting.</span> </p><p><span
  m='1340000'>Sounds good to me.</span> </p><p><span m='1350000'>OK. All
  right.</span> </p><p><span m='1351000'>That'll do it. Thank you.</span>
  </p><p><span m='1354000'>I hope there are no hard rock musicians in here who
  will come</span> <span m='1360000'>and beat me up after lecture or
  something.</span> </p><p><span m='1365000'>All right. Believe it or not most
  of that</span> <span m='1369000'>was review. There is nothing new today</span>
  <span m='1373000'>besides some fun and games and so on.</span> </p><p><span
  m='1379000'>I will give you a breather for five seconds before jumping
  into</span> <span m='1383000'>something even more fun.</span> </p><p><span
  m='1407000'>I want you to look at the middle board here.</span> </p><p><span
  m='1410000'>And, as I told you in the beginning of 6.002,</span> <span
  m='1413000'>engineering is about building useful systems.</span> </p><p><span
  m='1416000'>Engineering is not about showing off at math or saying</span>
  <span m='1420000'>man, I am really cool in math and stuff.</span> </p><p><span
  m='1423000'>Engineering is about building useful systems,</span> <span
  m='1426000'>and you want to find the simplest, easiest,</span> <span
  m='1429000'>cheapest way to get there. Unlike deep areas of math and</span>
  <span m='1433000'>theory and so on, the beauty is in the</span> <span
  m='1435000'>simplicity. So the aesthetics are in how</span> <span
  m='1439000'>simply can we make things and still get to where we want to</span>
  <span m='1442000'>be? All through the course what you</span> <span
  m='1444000'>will be seeing happening again and again and again is when</span>
  <span m='1448000'>things begin to get too grovelly in terms of math,</span>
  <span m='1451000'>we will step back and say oops, we are engineers,</span>
  <span m='1454000'>remember? Let's find a much simpler way</span> <span
  m='1456000'>to do it and use intuition. So time and time and time</span> <span
  m='1459000'>again, I am going to take you on a simpler path where you
  can</span> <span m='1463000'>solve things by inspection by pure
  intuition.</span> </p><p><span m='1465000'>Most circuit designers do that. So
  take a look at this.</span> </p><p><span m='1470000'>I don't like this nasty
  differentiation here.</span> </p><p><span m='1473000'>That's getting into late
  high school calculus and so on.</span> </p><p><span m='1477000'>Let's avoid
  the math and let's see if you find some way of</span> <span m='1482000'>doing
  it that is even much more simpler.</span> </p><p><span m='1485000'>And that is
  what I will do next and show you what is called the</span> <span
  m='1490000'>small signal circuit view. A purely circuit way of</span> <span
  m='1494000'>developing the small signal model.</span> </p><p><span
  m='1498000'>So let me just start by drawing the large signal equivalent</span>
  <span m='1502000'>circuit for you. I will draw it here for reasons</span>
  <span m='1506000'>that will be obvious at the end of the class.</span>
  </p><p><span m='1545000'>All right. This is the large signal</span> <span
  m='1548000'>equivalent circuit model for our MOSFET amplifier.</span>
  </p><p><span m='1554000'>VS and here is my current source.</span> </p><p><span
  m='1559000'>iDS relates to the square of VI minus VT.</span> </p><p><span
  m='1562000'>So stare at that for a second. And that is a nonlinear</span>
  <span m='1566000'>circuit. iDS relates to the square of VI</span> <span
  m='1570000'>minus VT. Let me start by making the</span> <span
  m='1573000'>following claim. Let me shoot from the hip here</span> <span
  m='1577000'>and make the following grand claim, and then I will show
  you</span> <span m='1582000'>how I can prove that claim. The grand claim I am
  about to</span> <span m='1586000'>make says the following. A bunch of little
  devices here.</span> </p><p><span m='1592000'>It is a nonlinear circuit. Just
  suppose for a moment we do</span> <span m='1597000'>a Gedanken experiment.
  Suppose I replace each of my</span> <span m='1601000'>circuit elements here
  with its linearized element equivalent.</span> </p><p><span m='1606000'>In
  other words, here is a VS source,</span> <span m='1609000'>here is a dependent
  current source, let me replace them with</span> <span m='1614000'>their linear
  equivalent circuit models.</span> </p><p><span m='1619000'>In other words,
  with their corresponding small</span> <span m='1622000'>signal element models.
  And I will show you what those</span> <span m='1625000'>are in a second. The
  resistor has a</span> <span m='1628000'>corresponding small signal
  element.</span> </p><p><span m='1630000'>The dependent current source has a
  corresponding small signal</span> <span m='1635000'>behavioral element model.
  And what I am going to do is</span> <span m='1638000'>keep the same circuit
  connections and simply pull out</span> <span m='1642000'>the large signal
  model for the element and replace it with a</span> <span m='1646000'>small
  signal element model. And by the nature of the small</span> <span
  m='1651000'>signal model they are all going to be linear.</span> </p><p><span
  m='1654000'>So what I am going to be left with is a linear circuit with</span>
  <span m='1657000'>simple linear circuit elements in there.</span> </p><p><span
  m='1659000'>And then once I have a linear circuit, I should be able to</span>
  <span m='1662000'>analyze that linear circuit using methods 1,</span> <span
  m='1665000'>2 and 3, superposition, Thevenin, node method and so</span> <span
  m='1668000'>on. And certainly the intuitive</span> <span m='1670000'>methods
  like superposition and Thevenin, which make life a lot</span> <span
  m='1673000'>easier for me with linear models, and thereby get the</span> <span
  m='1676000'>function that I am looking for very quickly.</span> </p><p><span
  m='1680000'>Again, my claim is that I can replace each of these large</span>
  <span m='1684000'>signal models by just small signal equivalents and then
  just</span> <span m='1689000'>analyze the resultant circuit. And I claim that
  I should be</span> <span m='1694000'>able to get the same answer. That's a
  claim.</span> </p><p><span m='1698000'>All right? So what I will do is give
  you</span> <span m='1701000'>an informal proof for why I can do that.</span>
  </p><p><span m='1704000'>And I also ask you to refer to Section 8.2.1 of the
  course</span> <span m='1709000'>notes to go through the foundations of the
  small circuit</span> <span m='1713000'>model in more detail. The intuition is
  that,</span> <span m='1719000'>remember KVL and KCL? I can write down KVL and
  KCL</span> <span m='1723000'>for every loop in that circuit and every node in
  that circuit.</span> </p><p><span m='1729000'>If I do KVL and KCL, I will end
  up with something</span> <span m='1733000'>like this. For the input loop I get
  VI</span> <span m='1737000'>something or the other applying KVL.</span>
  </p><p><span m='1740000'>For the output loop I get V out something or the
  other.</span> </p><p><span m='1747000'>And then applying KCL I get some other
  equation in iDS.</span> </p><p><span m='1751000'>So here are my KVL and KCL
  equations for that circuit.</span> </p><p><span m='1756000'>Now, KVL and KCL
  are simply a different representation of the</span> <span m='1762000'>circuit
  because within those KVL and KCL is encoded the topology</span> <span
  m='1767000'>of the circuit. Remember each KVL equation</span> <span
  m='1772000'>represents a loop and each KCL equation represents how
  nodes</span> <span m='1776000'>are connected together. So KVL and KCL
  equations encode</span> <span m='1781000'>within them the topology of my
  circuit.</span> </p><p><span m='1784000'>What I do next is, say, I replace
  each of these</span> <span m='1787000'>with the bias plus the small signal, so
  I get the bias plus</span> <span m='1792000'>the small signal and keep the
  equations the same.</span> </p><p><span m='1810000'>All I have done in my big
  set of KVL, KCL equations,</span> <span m='1814000'>I have simply replaced the
  total variable with the large</span> <span m='1818000'>signal variable and the
  small signal quantity.</span> </p><p><span m='1821000'>Then comes a key trick.
  The key trick is that because</span> <span m='1826000'>the bias point
  variables, they are a valid solution to</span> <span m='1830000'>the circuit.
  The circuit is in this</span> <span m='1833000'>quiescent state, and those are
  valid solutions</span> <span m='1836000'>to circuit. So therefore I can cancel
  them</span> <span m='1839000'>out. So the VI, the large signal</span> <span
  m='1842000'>values can be cancelled out leaving just small signal</span> <span
  m='1845000'>variables in there. So from the KVL,</span> <span m='1848000'>KCL
  equations I can cancel out the large signal values,</span> <span
  m='1852000'>the DC bias points because they satisfy the KVL and KCL</span>
  <span m='1856000'>themselves. In other words,</span> <span m='1859000'>I could
  have written VI plus V out and so on.</span> </p><p><span m='1862000'>Since
  they are satisfied I just strike out the large signal</span> <span
  m='1867000'>variable from both sides of each of these equations,</span> <span
  m='1871000'>so what is left is the same KVL, KCL equations but with</span>
  <span m='1876000'>small variables in place of the big variables.</span>
  </p><p><span m='1880000'>What that should tell you, this informal proof should
  tell</span> <span m='1884000'>you is that the small signal variables should
  then satisfy</span> <span m='1889000'>the same form of the KVL, KCL equations
  that the total</span> <span m='1894000'>variables satisfy. And because the
  KVL,</span> <span m='1898000'>KCL equations are a reflection of the topology
  of the circuit,</span> <span m='1903000'>what that says is that the small
  signal variables must also</span> <span m='1908000'>satisfy KVL and KCL. And
  since these arrive from the</span> <span m='1912000'>small signal elements
  that says that I can replace the big</span> <span m='1916000'>elements with
  the small elements and KVL and KCL will hold for</span> <span m='1921000'>the
  resulting circuit. This is a very quick breeze</span> <span
  m='1926000'>through, an informal proof to show that I can replace the
  big</span> <span m='1931000'>elements with the corresponding little element
  models and then</span> <span m='1937000'>simply apply linear techniques. Refer
  to Section 8.2.1 for more</span> <span m='1942000'>foundations and more
  discussion about the foundations for why we</span> <span m='1948000'>can do
  this. That brings up the small signal</span> <span m='1954000'>circuit method.
  The circuit method for small</span> <span m='1960000'>signal analysis has
  three steps. The first step is find</span> <span m='1967000'>operating point
  by using LS. First you analyze your large</span> <span m='1975000'>signal
  circuit and find the operating point.</span> </p><p><span m='1982000'>You have
  to do this, because remember,</span> <span m='1986000'>the small signal models
  depend on the operating point values.</span> </p><p><span m='1994000'>Remember
  the gain of our amplifier depended on the bias</span> <span m='2001000'>point.
  Second step is develop small</span> <span m='2005000'>signal models of
  elements. Second step is take each of the</span> <span m='2014000'>elements in
  your circuit and find their equivalent small</span> <span m='2021000'>circuit
  model for each of the elements.</span> </p><p><span m='2026000'>Third step is
  replace original elements with their small signal</span> <span
  m='2035000'>model elements. Third step is simply take the</span> <span
  m='2041000'>large elements and replace them with their small signal</span>
  <span m='2048000'>equivalent models. Then analyze resulting circuit,</span>
  <span m='2054000'>and that circuit will be a linear circuit.</span>
  </p><p><span m='2059000'>So let's do an example. I will just use the
  amplifier</span> <span m='2066000'>as an example of this method. And convince
  you that you are</span> <span m='2074000'>going to get the same expression at
  the end, but just so,</span> <span m='2080000'>so simply without even the
  smallest amount of grubby math.</span> </p><p><span m='2086000'>Three steps.
  The first step is to find the</span> <span m='2091000'>operating point using
  the large signal model.</span> </p><p><span m='2096000'>And let me just do
  that here. I get my V out =</span> <span m='2101000'>VS-K/2(VI-VT)^2 RL. Let
  me just write down that out</span> <span m='2107000'>here. Don't worry about
  copying that</span> <span m='2109000'>down. It is on the last page of
  your</span> <span m='2112000'>notes. The first step of the method</span> <span
  m='2115000'>simply applies the large signal model and finds out the
  behavior</span> <span m='2119000'>of that circuit to find out what the bias
  point values are.</span> </p><p><span m='2124000'>The second step is to
  develop the small signal model of my</span> <span m='2128000'>elements. How do
  I go about developing</span> <span m='2133000'>the small signal models of
  elements?</span> </p><p><span m='2136000'>Let's start with the MOSFET. The
  large signal model for the</span> <span m='2142000'>MOSFET looks like
  this.</span> </p><p><span m='2153000'>Here is my Vgs. This is my gate.</span>
  </p><p><span m='2156000'>This is my drain. This is my source.</span>
  </p><p><span m='2160000'>And I know my iDS to be K/2(Vgs-VT)^2.</span>
  </p><p><span m='2163000'>So this is the large signal model for the
  MOSFET,</span> <span m='2167000'>again in saturation. I am talking about all
  of these</span> <span m='2172000'>models are under the saturation
  discipline.</span> </p><p><span m='2175000'>So Vgs relates to iDS in the
  following way for the MOSFET.</span> </p><p><span m='2180000'>That is iDS, is
  K/2 and that is my square</span> <span m='2184000'>law relationship. So what
  is a corresponding</span> <span m='2188000'>small signal model? I go ahead and
  start with this.</span> </p><p><span m='2194000'>The corresponding small
  signal model simply says that iDS</span> <span m='2200000'>relates to Vgs in
  the following way.</span> </p><p><span m='2203000'>All I have to do is find a
  small signal equivalent where I</span> <span m='2209000'>need to find out,
  given a small change in the</span> <span m='2214000'>input Vgs, what is the
  small change in the iDS?</span> </p><p><span m='2220000'>So I can apply my
  standard trick to a much simpler</span> <span m='2224000'>expression here,
  which is iDS simply,</span> <span m='2228000'>I differentiate this function
  with respect to Vgs.</span> </p><p><span m='2239000'>So I don't completely
  eliminate the math here,</span> <span m='2244000'>but it is a much simpler
  problem here.</span> </p><p><span m='2248000'>At Vgs equals the bias point
  times small vgs.</span> </p><p><span m='2254000'>I can find the small change
  in iDS corresponding to a small</span> <span m='2261000'>change in the input
  using this expression.</span> </p><p><span m='2267000'>That gives me iDS as
  simply K(Vgs-VT) vgs.</span> </p><p><span m='2272000'>I call this gm, and I
  will tell you why in a</span> <span m='2278000'>second. So what does this
  expression</span> <span m='2282000'>say? This expression says that if I</span>
  <span m='2285000'>have a small change in Vgs then this will be my small change
  in</span> <span m='2290000'>iDS. Notice that the resulting small</span> <span
  m='2292000'>signal model is also a dependent current source.</span>
  </p><p><span m='2296000'>It is a voltage controlled dependent current
  source.</span> </p><p><span m='2300000'>So the output is the current, and it
  is a dependent current</span> <span m='2305000'>source and it depends on the
  input voltage.</span> </p><p><span m='2310000'>The good news is that notice
  that this one,</span> <span m='2313000'>this expression here gm is a constant
  related to the bias</span> <span m='2319000'>point values. Therefore, notice
  that the</span> <span m='2322000'>small signal model for the MOSFET in
  saturation,</span> <span m='2327000'>not surprisingly, is a linear voltage
  controlled</span> <span m='2331000'>current source according to the following
  expression.</span> </p><p><span m='2336000'>So iDS=gm Vgs. Gm is a
  representation for</span> <span m='2341000'>K(Vgs-VT) and is called a
  transconductance.</span> </p><p><span m='2345000'>It is called a
  transconductance because it, in some sense,</span> <span m='2350000'>deflects
  the conductance properties of this based on the</span> <span
  m='2355000'>input. So it is a transconductance.</span> </p><p><span
  m='2359000'>So this value is called Vgs. Therefore, I can build the</span>
  <span m='2364000'>small signal model as follows. Vgs is a voltage
  controlled</span> <span m='2372000'>current source and iDS is simply gm
  Vgs.</span> </p><p><span m='2378000'>So this is my gate, drain, source.</span>
  </p><p><span m='2395000'>So that is the small signal model for my
  MOSFET.</span> </p><p><span m='2399000'>As a next step what are the other
  elements in my circuit?</span> </p><p><span m='2405000'>Let's see. I have a
  voltage source and I</span> <span m='2408000'>have a resistor, so let me find
  out the</span> <span m='2412000'>corresponding small signal model for a DC
  supply VS.</span> </p><p><span m='2417000'>This is Page 7. I will do it
  mathematically for</span> <span m='2421000'>you, but often times it is always
  good to do a sanity check</span> <span m='2427000'>using intuition. Let me ask
  you,</span> <span m='2431000'>the large signal for a DC supply looks like
  this.</span> </p><p><span m='2444000'>The element law for a voltage source is
  VS equals some capital</span> <span m='2449000'>VS. It is a constant
  voltage.</span> </p><p><span m='2452000'>So what do you expect to be the small
  signal model for a voltage</span> <span m='2458000'>source? In other
  words,</span> <span m='2461000'>for a small change, suppose I have a small
  change</span> <span m='2465000'>in the current, by how much should the
  output</span> <span m='2469000'>VS change? It shouldn't change.</span>
  </p><p><span m='2472000'>It is a voltage source. So what does intuition tell
  you</span> <span m='2476000'>is a small signal model for the voltage
  source?</span> </p><p><span m='2480000'>A short. So the key here is that
  a</span> <span m='2483000'>voltage source behaves like a short circuit for
  small</span> <span m='2488000'>perturbations. In other words,</span> <span
  m='2492000'>if I change the current flowing through it by a small
  amount</span> <span m='2498000'>somehow, the output is still going to held at
  VS.</span> </p><p><span m='2502000'>In other words, small signals are simply
  going</span> <span m='2507000'>to scoot through this voltage source without
  having any impact</span> <span m='2512000'>whatsoever on the voltage. Or
  mathematically I could also</span> <span m='2518000'>do small vs is del by del
  IS of VS evaluated at IS equals some</span> <span m='2524000'>capital IS times
  small IS. And therefore VS equals zero.</span> </p><p><span m='2530000'>What
  that means is that the small signal model for my</span> <span
  m='2535000'>voltage source is simply a short circuit.</span> </p><p><span
  m='2546000'>So in a small circuit voltage sources appear like a short</span>
  <span m='2551000'>circuit. Finally, I have a resistor,</span> <span
  m='2557000'>my resistor R. Let me find out its</span> <span
  m='2562000'>corresponding small signal model.</span> </p><p><span
  m='2567000'>The large signal model looks like this R, VR,</span> <span
  m='2574000'>IR. And I know that VR is simply</span> <span m='2578000'>RIR. And
  to find the small signal</span> <span m='2584000'>equivalent I do del of IRR
  divided by del IR for IR</span> <span m='2589000'>calculated at some constant
  value times small IR.</span> </p><p><span m='2594000'>What I am looking to do
  is to find out what is the change in</span> <span m='2601000'>the voltage
  across R for a small perturbation in the current?</span> </p><p><span
  m='2609000'>Again, let me exhort you to rely on intuition to at least</span>
  <span m='2613000'>sanity check your answers. So what do you think this</span>
  <span m='2616000'>should look like? It's a resistor and I have a</span> <span
  m='2619000'>small change in the current, by what do you expect the</span>
  <span m='2623000'>voltage to change? Think about,</span> <span m='2625000'>for
  the next five seconds, what the small signal model for</span> <span
  m='2629000'>this should look like and then I will go ahead and write down
  the</span> <span m='2634000'>answer.</span> </p><p><span m='2646000'>So
  differentiating I simply get RIR.</span> </p><p><span m='2649000'>In other
  words, for a resistor the small signal</span> <span m='2655000'>model is the
  resistor itself.</span> </p><p><span m='2669000'>So what I have done so far,
  let me just take you through</span> <span m='2673000'>where we are right now,
  give you the big picture there.</span> </p><p><span m='2677000'>I began by
  suggesting that looking to find an even simpler</span> <span m='2681000'>way
  to do small signal analysis. I gave you an informal proof to</span> <span
  m='2686000'>show that if I had small signal element models for all of
  my</span> <span m='2690000'>elements, I could simply replace them in the
  circuit and then do</span> <span m='2695000'>a corresponding linear circuit
  analysis phase to get the result</span> <span m='2699000'>I am looking for.
  There are three steps to the</span> <span m='2704000'>method. As a first step
  we began by</span> <span m='2706000'>finding small signal models for each of
  our elements.</span> </p><p><span m='2710000'>For the nonlinear MOSFET the
  small signal model was a linear</span> <span m='2714000'>dependent current
  source. For a voltage source the</span> <span m='2718000'>corresponding small
  signal model was a short circuit.</span> </p><p><span m='2721000'>Again, that
  makes sense intuitively if I change the</span> <span m='2725000'>current
  through a voltage source by a small amount.</span> </p><p><span m='2730000'>By
  how much does the voltage change?</span> </p><p><span m='2732000'>It is a
  voltage source, silly.</span> </p><p><span m='2734000'>The voltage doesn't
  change. So the small signal V,</span> <span m='2738000'>the small change in
  the voltage is zero, and that is the same</span> <span m='2743000'>thing as a
  short circuit. For a resistor by how much does</span> <span m='2747000'>the
  voltage change if I change the current by a small amount?</span> </p><p><span
  m='2751000'>Well, it will change by R times the current change,</span> <span
  m='2755000'>and that is the property of a resistor, R.</span> </p><p><span
  m='2760000'>As a final step what I would like to do, on Page 8,</span> <span
  m='2764000'>I'd like to very quickly draw for you the small signal
  circuit</span> <span m='2770000'>and then analyze it. This is the large
  signal</span> <span m='2774000'>circuit. That is a large signal
  circuit.</span> </p><p><span m='2778000'>And let me draw the small signal
  circuit.</span> </p><p><span m='2782000'>And the method says simply pluck out,
  gouge out each of</span> <span m='2787000'>these elements. And simply replace
  each of</span> <span m='2792000'>these nasty nonlinear elements with the
  corresponding small</span> <span m='2797000'>signal linear equivalents. So
  let's do that.</span> </p><p><span m='2801000'>Remember, for the input you
  replace input with its small</span> <span m='2807000'>signal voltage because I
  am telling you that it's sourcing a</span> <span m='2812000'>small change in
  VI. So that is VI.</span> </p><p><span m='2815000'>And then I replace a short
  for VS.</span> </p><p><span m='2820000'>I replace an R for RL because it is an
  RL itself for the small</span> <span m='2830000'>signal model. And then for
  the dependent</span> <span m='2837000'>source, we discovered that the
  dependent source was a linear</span> <span m='2847000'>dependent source given
  where ids=gmvi.</span> </p><p><span m='2855000'>Remember, this was my small
  VO. Here you go.</span> </p><p><span m='2858000'>I have a small signal circuit
  here where I have simply created</span> <span m='2863000'>that by replacing
  each of the big elements by little</span> <span m='2868000'>rinky-dink
  elements. Now these are all linear</span> <span m='2871000'>elements so I can
  do a really simple linear analysis.</span> </p><p><span m='2876000'>What
  method shall we use? Well, this is so simple.</span> </p><p><span
  m='2881000'>I will just go ahead and use the node method.</span> </p><p><span
  m='2886000'>So applying the node method at the node with voltage VO,</span>
  <span m='2891000'>what I will do is the current going up, VO divided by
  RL</span> <span m='2897000'>equals the current going down iDS.</span>
  </p><p><span m='2900000'>And so the current going up is VO divided by RL and
  the current</span> <span m='2907000'>going down is -- Oops, I should have done
  this.</span> </p><p><span m='2913000'>The total current going out is zero, so
  the sum of these two is</span> <span m='2921000'>zero. That is my good old
  node method</span> <span m='2925000'>here. And I know that iDS is
  simply</span> <span m='2929000'>gmvi equals zero. So right there I have
  the</span> <span m='2934000'>relationship between VO and VI. So VO is simply
  minus gmviRL.</span> </p><p><span m='2943000'>And remember gm was simply K VI
  minus VT.</span> </p><p><span m='2957000'>We are done, OK?</span> </p><p><span
  m='2958000'>What have we here? I created a linear circuit</span> <span
  m='2961000'>which simply comprised small signal models for each of my
  big</span> <span m='2965000'>elements. And then I simply did a</span> <span
  m='2968000'>straightforward linear analysis using any one of the linear</span>
  <span m='2972000'>techniques I knew about. This is simple enough so I</span>
  <span m='2976000'>apply the node method. And I've got the equation at</span>
  <span m='2980000'>this node, simplified it and I directly got the
  answer.</span> </p><p><span m='2984000'>In one or two steps I directly gave
  you the output as a</span> <span m='2988000'>function of the input. It can't
  get any simpler.</span> </p><p><span m='2992000'>Thank you.</span> </p>
uid: 06a5b568ebe572789bc12135907e523d
type: course
layout: video
---
