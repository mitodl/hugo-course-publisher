---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> MOSFET amplifier large signal
  analysis</p>  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec09a.jpg
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-1/thumb_lec09a.jpg
    title: thumb_lec09a.jpg
    type: null
    uid: 25d6be83df992879fe4024a745a9bb6f
  - id: Video-YouTube-Stream
    media_location: Nijya-QJ45Y
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Video-YouTube-Stream
    type: Video
    uid: b757f51b20e0cc82ba5326d3e5e1742f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Nijya-QJ45Y/default.jpg'
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: adb6ebc82816fc039972bc55c8458bac
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Video-iTunes U-MP4
    type: Video
    uid: 5a20c2357aac31dc24f5fb290103e7e8
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/mit-6.002-lec9-02oct2003-220k.mp4
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Video-Internet Archive-MP4
    type: Video
    uid: 0724c8fc43b03eada26d3dffabe1e97c
  - id: Thumbnail-OCW-JPG
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 0240c5031452d176a65de55522428818
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Nijya-QJ45Y
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1220a59ded4884b4a096d346b27b3147
  - id: Nijya-QJ45Y.srt
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-1/Nijya-QJ45Y.srt
    title: 3play caption file
    type: null
    uid: f6ecce6cb38ecf94130f5570c2a02634
  - id: Nijya-QJ45Y.pdf
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-1/Nijya-QJ45Y.pdf
    title: 3play pdf file
    type: null
    uid: 8d6365ab435a2441f6a391631102c376
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 42c8ed6512bd0d6a849d1d1caabb0ac4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6b64779b5126fd1f7536e398e31f8bba
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 3ca8a9c02345c9c42be3e9ef589fb903
inline_embed_id: '24678015lecture9:mosfetamplifierlargesignalanalysis(part1)58220150'
order_index: 213
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/5d9288b54aceb1737d8f831d3c66739b">PDF</a>)<br />
  Demonstration: S/SR/SCS models (<a target="_blank" title="Open in a new
  window." href="./resolveuid/b268acba2f5c12be344b2c565f45faab">PDF</a>)</p>
short_url: lecture-9-part-1
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-1
title: 'Lecture 9: Mosfet Amplifier Large Signal Analysis (part 1)'
transcript: >-
  <p><span m='11000'>All right. Let's get started.</span> </p><p><span
  m='14000'>I guess this watch is a couple minutes fast.</span> </p><p><span
  m='20000'>First a quick announcement. In case you have forgotten,</span> <span
  m='27000'>your lab notebooks are due tomorrow with the post-lab</span> <span
  m='34000'>exercises for the first lab. OK, so I am going to continue</span>
  <span m='41000'>with amplifiers today. And to just give you a sense of</span>
  <span m='45000'>where we headed, we have this five lecture</span> <span
  m='49000'>sequence covering different aspects of amplifiers with</span> <span
  m='53000'>dependent sources and showed how we could build an amplifier
  with</span> <span m='59000'>it on Tuesday. Today I am going to show you
  a</span> <span m='64000'>real device that implements a dependent
  source.</span> </p><p><span m='68000'>And then next Tuesday we will talk about
  analysis of an</span> <span m='74000'>amplifier. Wednesday is our quiz.</span>
  </p><p><span m='77000'>Thursday and the Tuesday after that we then talk about
  small</span> <span m='83000'>signal analysis and small signal use of the
  amplifier.</span> </p><p><span m='90000'>Today we will talk about the MOSFET
  amplifier.</span> </p><p><span m='106000'>So let's start with a quick
  review.</span> </p><p><span m='109000'>And in the last lecture, I showed you
  that I could build</span> <span m='114000'>a amplifier using a dependent
  source.</span> </p><p><span m='125000'>And a dependent source worked as
  follows.</span> </p><p><span m='129000'>Let's say I had a circuit and I
  connected a dependent source</span> <span m='136000'>into the circuit. Let's
  say in this example I</span> <span m='141000'>have a current source. So this
  is some circuit.</span> </p><p><span m='148000'>And the current i is a
  function of some parameter in the</span> <span m='153000'>circuit. That's why
  this is a dependent</span> <span m='156000'>source. This is a dependent
  current</span> <span m='160000'>source. So it could be that I have some</span>
  <span m='163000'>element inside. And I measure,</span> <span m='166000'>I
  sample the voltage across the element or between any two</span> <span
  m='171000'>points in the circuit. And, in this little example</span> <span
  m='176000'>here, this current could be dependent on that voltage.</span>
  </p><p><span m='183000'>So notice that although I showed you the two terminals
  of</span> <span m='187000'>the dependent source that carried a current,</span>
  <span m='190000'>there is another implicit port, another implicit
  terminal</span> <span m='195000'>there. And that terminal there is</span>
  <span m='197000'>called the "control port" of the dependent source at which
  I</span> <span m='202000'>apply a voltage or current that will control the
  value of the</span> <span m='206000'>current source. As a quick aside.</span>
  </p><p><span m='218000'>There is a small glitch with the tools in your tool
  chest.</span> </p><p><span m='222000'>We talked about the superposition
  technique where</span> <span m='226000'>you were taught to turn on one source
  at a time,</span> <span m='230000'>for a linear circuit one source at a time,
  and then sum up the</span> <span m='236000'>responses to all the sources
  acting one at a time.</span> </p><p><span m='241000'>Well, what do you do
  about dependent sources?</span> </p><p><span m='244000'>A dependent source is
  a source. And we have to modify the</span> <span m='249000'>superposition
  statement just a little bit.</span> </p><p><span m='252000'>And for details
  you can look at Section 3.5.1 of your course</span> <span m='257000'>notes on
  the details and some examples on how to do this.</span> </p><p><span
  m='261000'>So the approach is very simple, actually.</span> </p><p><span
  m='264000'>The approach is, for the purpose of</span> <span
  m='267000'>superposition, to not treat your dependent</span> <span
  m='270000'>source as sources that you turn on and turn off.</span>
  </p><p><span m='276000'>So what you do is when you do superposition with
  dependent</span> <span m='279000'>sources simply leave all your dependent
  sources in the</span> <span m='283000'>circuit. Just leave them in there
  and</span> <span m='286000'>turn on and off only your independent
  sources.</span> </p><p><span m='289000'>So look at the response of the circuit
  by turning on your</span> <span m='292000'>independent sources one at a time
  and summing up the</span> <span m='296000'>responses. And your dependent
  sources stay</span> <span m='300000'>within the circuit and simply analyze
  them as you do anything</span> <span m='305000'>else. So essentially what it
  says is</span> <span m='307000'>that just be a little cautious when you have
  dependent sources,</span> <span m='312000'>but the basic method applies almost
  without any change.</span> </p><p><span m='316000'>The readings for today's
  lecture are Section 7.3 to 7.6.</span> </p><p><span m='327000'>So since we are
  going to build up on the dependent source</span> <span m='332000'>amplifier,
  let me start with a quick review of that amplifier.</span> </p><p><span
  m='339000'>We built our amplifier as follows.</span> </p><p><span
  m='354000'>We connected our dependent source in the following manner.</span>
  </p><p><span m='358000'>And the current through the dependent source in the
  example</span> <span m='362000'>we took was related to an input voltage
  vI.</span> </p><p><span m='372000'>So some voltage vI. And so these two were
  the</span> <span m='376000'>control port of the dependent source and a vI was
  applied</span> <span m='381000'>there. And I showed you a simple</span> <span
  m='384000'>amplifier built with a dependent source that behaved in this</span>
  <span m='390000'>manner. And again I will keep reminding</span> <span
  m='394000'>you, just remember that the dependent source is actually</span>
  <span m='398000'>this box here, the control port and the output</span> <span
  m='401000'>port. And commonly we don't</span> <span m='403000'>explicitly show
  the control port for those dependent sources for</span> <span m='408000'>which
  the control port does not have any other affect on the</span> <span
  m='412000'>circuit, like it doesn't draw any current or things like
  that.</span> </p><p><span m='418000'>So in this particular example we said
  that this behaved in the</span> <span m='424000'>following manner for vI
  greater than or equal to 1 volt and iD</span> <span m='431000'>was zero
  otherwise.</span> </p><p><span m='439000'>So we can analyze the circuit to
  figure out what vO is going</span> <span m='446000'>to look like. And a simple
  application of KVL</span> <span m='451000'>at this loop here, again, you
  know,</span> <span m='453000'>when I say this loop here, I am pointing at
  something</span> <span m='457000'>here. That is the VS source that is</span>
  <span m='460000'>implicitly across these two nodes.</span> </p><p><span
  m='462000'>Again, this is a shorthand notation where this little up</span>
  <span m='466000'>arrow here implies that I have a voltage source connected
  between</span> <span m='471000'>these two terminals here. And so there is a
  loop here</span> <span m='475000'>that involves VS. So Vo is simply VS minus
  the</span> <span m='480000'>drop across this resistor. So it's VS minus the
  drop</span> <span m='485000'>across this resistor gives me vO.</span>
  </p><p><span m='488000'>And the drop across the resistor is simply iD
  RL.</span> </p><p><span m='493000'>iD is the current here and that's the drop
  across the</span> <span m='497000'>resistor. And I could get the
  explicit</span> <span m='501000'>relationship of vO versus vI by substituting
  for iD as vI minus</span> <span m='507000'>one all squared. So vO relates to
  vI in the</span> <span m='512000'>following manner. Nothing new so far.</span>
  </p><p><span m='515000'>I have pretty much reviewed what we did the last
  time.</span> </p><p><span m='521000'>Here is where we take our next step
  forward with some new</span> <span m='526000'>material. Up to now I have
  talked as a</span> <span m='530000'>theoretician would where I said just
  imagine that you had</span> <span m='535000'>spherical cow or something like
  that.</span> </p><p><span m='540000'>Here I just asked you to imagine this
  ideal dependent</span> <span m='543000'>source, control port and an output
  port, and it behaved in</span> <span m='547000'>this manner. So as a next step
  what I would</span> <span m='550000'>like to do is show you a practical
  dependent source which</span> <span m='554000'>turns out to be a little bit
  more complicated than this</span> <span m='557000'>idealized dependent source
  that I showed you in many dimensions.</span> </p><p><span m='562000'>Real life
  tends to impose a bunch of practical constraints</span> <span m='565000'>on
  you, and we will look at those in a second.</span> </p><p><span m='570000'>If
  I could find a dependent source that looked like this --</span> <span
  m='592000'>We had a control port A prime and output port B prime.</span>
  </p><p><span m='600000'>And I looked at some examples where the current
  through the</span> <span m='605000'>dependent current source was some function
  of the input</span> <span m='610000'>voltage. This is a "voltage
  controlled</span> <span m='613000'>current source". What I am going to do is
  talk</span> <span m='617000'>about a device that can give me this behavior or
  some close</span> <span m='622000'>approximation to it. It turns out that
  under certain</span> <span m='627000'>conditions the MOSFET that you have
  already looked at behaves</span> <span m='632000'>in this manner. The MOSFET
  that you've seen</span> <span m='638000'>sort of behaves like this. And let me
  show you under what</span> <span m='644000'>conditions the MOSFET behaves in
  that manner.</span> </p><p><span m='649000'>Let me create some room for
  myself.</span> </p><p><span m='652000'>Notice that I need a control port,
  needed an output port.</span> </p><p><span m='660000'>And I am going to view
  my MOSFET in a slightly different</span> <span m='664000'>manner than you have
  seen before.</span> </p><p><span m='667000'>I draw these two terminals
  here.</span> </p><p><span m='669000'>And this was a three terminal
  MOSFET.</span> </p><p><span m='672000'>This was my drain, my gate and my
  source terminal.</span> </p><p><span m='676000'>It was a three terminal
  device, but what I do is I view the</span> <span m='681000'>MOSFET slightly
  differently. I will just use this terminal</span> <span m='685000'>to be
  common across both the gate and the drain.</span> </p><p><span m='691000'>And
  so this voltage here is vGS.</span> </p><p><span m='694000'>I am just using
  the source port, the source terminal along</span> <span m='699000'>with the
  gate as a terminal pair.</span> </p><p><span m='702000'>I am using the same
  source along with the drain as another</span> <span m='708000'>terminal pair.
  So I have a vDS out there and I</span> <span m='712000'>have some current iDS
  that flows out here.</span> </p><p><span m='718000'>Notice that when I view
  the MOSFET in this manner I have</span> <span m='723000'>accomplished my first
  step, which is I seem to have a box</span> <span m='729000'>which has a port
  here and a port here.</span> </p><p><span m='733000'>And I also explained to
  you that a MOSFET behaves in a</span> <span m='738000'>particular manner. For
  one, the output port</span> <span m='742000'>behaved as an open circuit under
  certain conditions when --</span> <span m='750000'>This was vGS, G, drain and
  source.</span> </p><p><span m='753000'>When vGS was less than a threshold
  voltage VT this MOSFET</span> <span m='759000'>had an equivalent circuit that
  looked like this.</span> </p><p><span m='764000'>So when vGS was less than
  some threshold voltage VT then there</span> <span m='770000'>was an open
  circuit between the drain and the source.</span> </p><p><span m='776000'>And
  you saw this before. So far nothing new here.</span> </p><p><span
  m='782000'>However, when vGS is greater than or equal to VT --</span> <span
  m='795000'>vGS was greater than VT. The MOSFET behavior we looked</span> <span
  m='799000'>at earlier showed that this behaved either like a short</span>
  <span m='803000'>circuit in the simplest form or in a slightly more detailed
  form</span> <span m='809000'>it behaved like a resistor. We call that the SR
  model of</span> <span m='814000'>the MOSFET. So when vGS was greater than
  VT</span> <span m='817000'>we said that a simple way to approximate MOSFET
  behavior was</span> <span m='822000'>to view this as a resistor connected
  between the drain and</span> <span m='826000'>the source. That was our SR
  model use of</span> <span m='829000'>the MOSFET. It turns out that we kind
  of</span> <span m='832000'>lied. We were sort of looking at the</span> <span
  m='835000'>MOSFET in a really funny way. And I shone the light on the</span>
  <span m='840000'>MOSFET in a really, really clever way.</span> </p><p><span
  m='843000'>Well, I shouldn't say clever. A really, really tricky way.</span>
  </p><p><span m='846000'>And tricked you into believing that it was just a
  resistor.</span> </p><p><span m='850000'>And we constrained how you use the
  MOSFET.</span> </p><p><span m='853000'>So that behavior was indeed a resistive
  behavior.</span> </p><p><span m='856000'>But it turns out that in real life
  the behavior of the MOSFET</span> <span m='860000'>between the drain and the
  source terminals is much more</span> <span m='863000'>complicated than the
  limited form in which you saw it.</span> </p><p><span m='866000'>So today what
  I am going to do is take the wraps off the</span> <span m='870000'>complete
  MOSFET and show you its full behavior in all its gory</span> <span
  m='874000'>glory. And I will spend a bit of time</span> <span m='878000'>on
  that to clearly emphasize under what conditions the MOSFET</span> <span
  m='884000'>behaves like a resistor, as you saw when you did digital</span>
  <span m='889000'>circuits, or behaves differently in other domains of
  use.</span> </p><p><span m='894000'>Let me pause for a second and leave this
  space blank here.</span> </p><p><span m='900000'>And let's do some
  investigations.</span> </p><p><span m='909000'>Let me leave this here. I won't
  draw in anything yet.</span> </p><p><span m='913000'>You will figure out what
  it looks like yourselves under</span> <span m='917000'>certain conditions.
  What I will do next is apply</span> <span m='921000'>some voltages on a MOSFET
  and observe the current versus vDS</span> <span m='925000'>behavior and plot
  that on a scope and take a look at it.</span> </p><p><span m='931000'>What I
  am going to do --</span> <span m='940000'>-- is figure out what iDS looks like
  for --</span> <span m='951000'>Remember iG into the gate for 6.002 is always
  going to be</span> <span m='957000'>zero. In much more detailed
  analyses</span> <span m='960000'>of the MOSFET, in future courses you may
  see</span> <span m='962000'>slightly more complex behavior. But as far as we
  are concerned</span> <span m='967000'>it is an open circuit looking into the
  gate.</span> </p><p><span m='969000'>So I am going to apply a vGS across the
  MOSFET,</span> <span m='973000'>apply a vDS across the MOSFET and plot iDS
  versus vDS.</span> </p><p><span m='976000'>First let me show you what you
  already know.</span> </p><p><span m='979000'>What you already know --</span>
  <span m='990000'>This is vDS. I will just keep doing as much</span> <span
  m='993000'>as I can of what you already know.</span> </p><p><span
  m='996000'>And then when I do some new stuff I will tell you</span> <span
  m='1000000'>explicitly. You've seen this before.</span> </p><p><span
  m='1003000'>The MOSFET behaves like an open circuit when vGS less than
  VT.</span> </p><p><span m='1009000'>That is when vG is less than a threshold
  voltage VT,</span> <span m='1013000'>I have zero current flowing through the
  MOSFET.</span> </p><p><span m='1019000'>And when vGS was greater than VT then
  the S model of the</span> <span m='1023000'>MOSFET the switch model simply
  said that look,</span> <span m='1027000'>we can model the D2S as a short
  circuit.</span> </p><p><span m='1030000'>You saw this in your labs and you saw
  that it was a very,</span> <span m='1034000'>very small resistance between the
  drain and the source and it</span> <span m='1039000'>kind of looked like a
  short circuit.</span> </p><p><span m='1042000'>But then we said well, that's
  not quite it.</span> </p><p><span m='1045000'>There is some resistance. And so
  we said a slightly more</span> <span m='1052000'>accurate model would have
  this line droop a little bit to imply</span> <span m='1058000'>that there was
  some resistance R_on between the drain and the</span> <span
  m='1064000'>source, so vDS iDS. So this was when vGS less than</span> <span
  m='1069000'>VT and vGS greater than or equal to VT.</span> </p><p><span
  m='1072000'>I have some resistance. And that showed me a straight</span> <span
  m='1078000'>line kind of like behavior. And I showed you that behavior.</span>
  </p><p><span m='1085000'>So far absolutely nothing new. Now what I have
  plotted there</span> <span m='1093000'>for you is that behavior. Up here
  notice that this is the</span> <span m='1099000'>vDS axis, this is the iDS
  axis. I am plotting iDS versus vDS.</span> </p><p><span m='1107000'>And when
  vGS -- The gate voltage is more than a</span> <span m='1112000'>threshold,
  notice that I see what looks like something more</span> <span m='1116000'>or
  less like a straight line. And this is a straight line</span> <span
  m='1120000'>with some slope, more or less a straight line</span> <span
  m='1123000'>implying resistive behavior. And we also had some fun and</span>
  <span m='1127000'>games here. We said hey,</span> <span m='1129000'>what if I
  turn vGS off? Boom.</span> </p><p><span m='1131000'>That would be my iDS of
  zero implying that the MOSFET behaved</span> <span m='1135000'>like an open
  circuit between the drain and the source.</span> </p><p><span m='1141000'>I
  applied a positive vGS more than VT and it began to look</span> <span
  m='1145000'>like a resistor. Open circuit,</span> <span m='1148000'>resistor,
  open circuit, resistor, OK?</span> </p><p><span m='1150000'>Up until now
  nothing new. So you shouldn't have learned</span> <span m='1155000'>anything
  at all that is new until now in today's lecture.</span> </p><p><span
  m='1159000'>Now watch. What I am going to do is,</span> <span m='1162000'>as I
  said, I kind of lied all this time and I just showed you</span> <span
  m='1167000'>this behavior. And what I have been doing all</span> <span
  m='1172000'>along is very carefully using a very small value of vDS.</span>
  </p><p><span m='1176000'>Notice it's a small values of vDS.</span>
  </p><p><span m='1179000'>I haven't told you what it looks like as vDS
  increases.</span> </p><p><span m='1183000'>Well, let's go try it out. We have
  a scope here.</span> </p><p><span m='1186000'>We have the MOSFET here. Now, I
  am not sure what is</span> <span m='1190000'>going to happen now. You may see
  smoke or have an</span> <span m='1194000'>explosion, who knows what? But look
  up there for a second.</span> </p><p><span m='1200000'>I am just going to
  increase vDS and you can figure out what</span> <span m='1208000'>happens for
  yourselves. I increase vDS.</span> </p><p><span m='1214000'>Whoa, what a liar.
  Agarwal is a liar.</span> </p><p><span m='1220000'>I have been kind of
  tricking you.</span> </p><p><span m='1225000'>I have been putting -- Covering
  up all this part here</span> <span m='1233000'>and showing you just this
  region of the curve for small values of</span> <span m='1239000'>vDS. But as I
  increase vDS this is</span> <span m='1243000'>nothing that looks even close to
  that of resistive behavior.</span> </p><p><span m='1249000'>So what's
  happening here? What's happening is that as I</span> <span
  m='1254000'>increase my vDS the iDS curve tails off and saturates at
  some</span> <span m='1261000'>value of current. Notice it saturates at
  some</span> <span m='1266000'>value of current. And so I am going to look
  at</span> <span m='1270000'>this region of behavior. Notice that what we have
  looked</span> <span m='1275000'>at so far was the behavior for small
  vDS.</span> </p><p><span m='1279000'>It kind of looks resistive. But when I
  pump up the vDS,</span> <span m='1284000'>really whack this node really hard
  with a much larger vDS the</span> <span m='1289000'>guy says, oh, I give
  up.</span> </p><p><span m='1293000'>And the current saturates out and flattens
  out and holds the</span> <span m='1298000'>value steady at some value. So
  what's that behavior look</span> <span m='1303000'>like? What is my horizontal
  line</span> <span m='1306000'>above the X axis in terms of V I
  elements?</span> </p><p><span m='1309000'>What is that behavior like? Current
  source,</span> <span m='1313000'>exactly. So this is current source
  like</span> <span m='1317000'>behavior. And so let me start by drawing</span>
  <span m='1322000'>you a little model and explaining it in more detail.</span>
  </p><p><span m='1328000'>What happens is that under certain conditions,</span>
  <span m='1334000'>and the conditions are the following, when vDS,</span> <span
  m='1339000'>that is my drain to source voltage is greater than or equal</span>
  <span m='1346000'>to vGS minus VT. When my drain voltage goes</span> <span
  m='1352000'>above vGS minus VT, so if vGS is 3 volts and if VT</span> <span
  m='1356000'>is 1 volt, then if vDS goes above 2 volts,</span> <span
  m='1359000'>if I am hammering the drain of the MOSFET with a higher
  voltage</span> <span m='1365000'>then this guy says I give up, can't show you
  nice restive</span> <span m='1370000'>behavior, and the current saturates out
  and it doesn't</span> <span m='1374000'>allow you draw any more current than a
  maximum value.</span> </p><p><span m='1380000'>And that's the current source
  behavior.</span> </p><p><span m='1382000'>This one behaves like a current
  source.</span> </p><p><span m='1384000'>And the current iDS is given by the
  following expression.</span> </p><p><span m='1403000'>The current is given by
  iDS is equal to a constant K divide by</span> <span m='1409000'>two times
  (vGS-VT) all squared. Kind of reminiscent of the</span> <span
  m='1415000'>carefully chosen dependent source example,</span> <span
  m='1418000'>just that this one here is VT. This model, which applies
  when</span> <span m='1424000'>vGS is greater than VT, the MOSFET has to be on
  and the</span> <span m='1428000'>drain to source voltage in the MOSFET must be
  larger than some</span> <span m='1434000'>value, and that value is vGS minus
  VT then this guy begins to</span> <span m='1439000'>behave like a current
  source. This model of the MOSFET is</span> <span m='1446000'>called the
  "switch current source model".</span> </p><p><span m='1457000'>So in the
  region of the MOSFET characteristics where vGS is</span> <span
  m='1461000'>greater than VT and the drain to source voltage is larger
  than</span> <span m='1465000'>vGS minus VT, the MOSFET behaved like a</span>
  <span m='1467000'>current source between its drain and source
  terminals.</span> </p><p><span m='1472000'>And in that part we model the
  MOSFET as a current source.</span> </p><p><span m='1475000'>And so not
  surprisingly that part of the model is called the</span> <span m='1480000'>SCS
  model in contrast with the SR model where we had a</span> <span
  m='1483000'>resistor. Again, remember,</span> <span m='1485000'>this is not
  meant to be conflicting.</span> </p><p><span m='1488000'>It is not like gee,
  how can the MOSFET look like a</span> <span m='1491000'>resistor, and then
  suddenly what happens it becomes a current</span> <span m='1495000'>source.
  Well, the two regions are</span> <span m='1498000'>different. It is not that
  it is behaving</span> <span m='1503000'>as a current source for the same
  parameters, no.</span> </p><p><span m='1508000'>When vDS is less than this
  right-hand side it does behave</span> <span m='1514000'>resistive. The SR
  model applies.</span> </p><p><span m='1518000'>But increase vDS beyond a
  point, the current saturates and</span> <span m='1524000'>the SCS applies like
  so. So let's draw.</span> </p><p><span m='1530000'>The SCS behavior can be
  drawn here vDS and iDS.</span> </p><p><span m='1536000'>As I mentioned to you,
  for small values of vDS,</span> <span m='1543000'>let's say I pick some value
  of vGS, let's say vGS3,</span> <span m='1550000'>some value vGS, it is going
  to look like a</span> <span m='1556000'>resistor until vDS becomes equal to
  vGS3 minus VT.</span> </p><p><span m='1565000'>And after that it saturates out
  and begins to look like a</span> <span m='1572000'>current source. And this
  point is where vDS</span> <span m='1577000'>becomes equal to vGS minus VT. And
  this way is when this equal</span> <span m='1585000'>sign becomes a greater
  than sign, vDS becomes larger then I</span> <span m='1592000'>move into this
  part of the curve.</span> </p><p><span m='1598000'>Similarly, for various
  other values of vGS it will look like</span> <span m='1604000'>this --</span>
  <span m='1612000'>-- and so on. And it behaved like an open</span> <span
  m='1614000'>circuit as before when vGS less than VT.</span> </p><p><span
  m='1617000'>When vGS less than VT it is still behaving like an open</span>
  <span m='1621000'>circuit. And so as I increase my vGS,</span> <span
  m='1625000'>provided I keep my vDS greater than vGS minus VT,</span> <span
  m='1630000'>I get current source like behavior.</span> </p><p><span
  m='1633000'>And notice that this is increasing vGS.</span> </p><p><span
  m='1637000'>I have purposely drawn these curves at greater distances
  from</span> <span m='1642000'>each other to imply that it is a nonlinear
  relationship in that</span> <span m='1648000'>if I increase vGS by some
  amount, the increase in vDS is</span> <span m='1653000'>related to the square
  of vGS. It is vGS minus VT all squared.</span> </p><p><span m='1661000'>So I
  get a family of curves of that look like this.</span> </p><p><span
  m='1666000'>And this is in the region of operation where vDS equals vGS</span>
  <span m='1672000'>minus VT. And this applies in this regime</span> <span
  m='1676000'>where vDS less than vGS minus VT.</span> </p><p><span
  m='1681000'>This region of operation is called, as you might expect,</span>
  <span m='1686000'>the "saturation region".</span> </p><p><span m='1694000'>We
  say the MOSFET has been hammered, the MOSFET has been</span> <span
  m='1699000'>walloped, the MOSFET is in saturation.</span> </p><p><span
  m='1703000'>So the MOSFET is in saturation. This region,</span> <span
  m='1707000'>corresponding to this, is called the triode region.</span>
  </p><p><span m='1717000'>This is really very simple. All we are doing is
  saying that</span> <span m='1720000'>when vDS is increased beyond a certain
  limit,</span> <span m='1723000'>given my vGS minus VT, the MOSFET begins to
  behave</span> <span m='1727000'>like a current source. It cannot draw any
  more</span> <span m='1730000'>current. It limits the current to a</span> <span
  m='1732000'>given value like a current source.</span> </p><p><span
  m='1734000'>But on the left-hand side of this it behaves in a resistive</span>
  <span m='1738000'>manner. So what I would like to do is</span> <span
  m='1741000'>--</span> <span m='1748000'>What I will do is, we've plotted for
  you,</span> <span m='1751000'>for the MOSFET, all its characteristics in
  its</span> <span m='1754000'>full glory for a whole bunch of values of vGS and
  a whole bunch</span> <span m='1760000'>of values of vDS. And let me stare at
  those</span> <span m='1763000'>curves with you for a few seconds and walk you
  through</span> <span m='1767000'>them. So what do I have here?</span>
  </p><p><span m='1771000'>One of these curves corresponds to a given value of
  vGS.</span> </p><p><span m='1775000'>This may be vGS equals 2 volts. This is
  vDS,</span> <span m='1779000'>the drain to source voltage, and this is the
  current.</span> </p><p><span m='1783000'>So focus on this curve for now. In
  the beginning I hid the</span> <span m='1788000'>right-hand side behavior from
  you and showed you just the</span> <span m='1793000'>resistive behavior out
  here. When I increase vDS to be much</span> <span m='1798000'>larger the curve
  saturated and I got the saturation region</span> <span m='1802000'>operation
  of the MOSFET. And notice as I increase my</span> <span m='1808000'>value of
  vGS the saturation current also increases according</span> <span
  m='1813000'>to a square law behavior. So these are the entire curves</span>
  <span m='1819000'>of the MOSFET. Finally the truth comes out.</span>
  </p><p><span m='1822000'>And notice that when vDS is less than vGS minus
  VT,</span> <span m='1827000'>I have more or less resistive behavior.</span>
  </p><p><span m='1832000'>But when vDS is greater than vGS minus VT I get
  current</span> <span m='1838000'>source like behavior. So one question you may
  ask is</span> <span m='1843000'>when do I use one model or the other?</span>
  </p><p><span m='1847000'>When do I use the SR model and when do I use the SCS
  model?</span> </p><p><span m='1854000'>If you want to do a real detailed
  analysis then you can</span> <span m='1860000'>use the SR model when vDS is
  less than vGS minus VT.</span> </p><p><span m='1867000'>And you would use this
  model when vDS is greater than or</span> <span m='1872000'>equal to vGS minus
  VT. That is simple enough.</span> </p><p><span m='1876000'>In 6.002, to
  eliminate confusion we constrain how we</span> <span m='1881000'>look at
  things a little bit more stringently.</span> </p><p><span m='1886000'>And what
  we do is that for our entire digital analysis,</span> <span m='1891000'>for
  the entire digital world we focus on the SR model.</span> </p><p><span
  m='1898000'>And I will tell you why in a second.</span> </p><p><span
  m='1901000'>So for all digital circuits, invertors, look at power of</span>
  <span m='1906000'>invertors, look at delay, a bunch of other things,</span>
  <span m='1910000'>we will be using the SR model in 6.002.</span> </p><p><span
  m='1914000'>And I will tell you why in a second.</span> </p><p><span
  m='1917000'>And for analog -- That is for amplifier designs</span> <span
  m='1922000'>and situations like that, we will be operating the MOSFET</span>
  <span m='1926000'>in a saturation region. And I will talk about that in
  a</span> <span m='1930000'>second. What I am saying here is that</span> <span
  m='1933000'>in 6.002, when we do analog designs, we are going to</span> <span
  m='1937000'>discipline ourselves to using the MOSFET only in this
  region.</span> </p><p><span m='1941000'>We are going to constrain ourselves to
  play in only this</span> <span m='1946000'>region of the playground where vDS
  is quite large.</span> </p><p><span m='1951000'>Why? Because I am asking you
  to.</span> </p><p><span m='1953000'>I am saying let's play in that part of the
  playground and keep</span> <span m='1957000'>your vDS high. And so the MOSFET
  is going to</span> <span m='1960000'>be operating somewhere in here. So we can
  apply just the SCS</span> <span m='1965000'>model, just the current source
  behavior in that region.</span> </p><p><span m='1969000'>There is another
  important reason, which I will get to in a</span> <span m='1973000'>second.
  And for digital designs we will</span> <span m='1976000'>simply use the SR
  model. And it turns out that this is</span> <span m='1981000'>realistic
  because in the digital designs that you have you seen</span> <span
  m='1986000'>and will be seeing in this course, the pull down MOSFET is</span>
  <span m='1990000'>on, or when these pull down MOSFETs are on,</span> <span
  m='1993000'>the output voltage is pulled down close to ground.</span>
  </p><p><span m='1997000'>So vDS is very, very small.</span> </p><p><span
  m='1999000'>So it does make sense that this model apply.</span> </p><p><span
  m='2002000'>And when we talk about amplifiers, I am asking you to</span> <span
  m='2007000'>follow this discipline. I will tell you why in a</span> <span
  m='2011000'>second. I am saying analog designs</span> <span m='2013000'>follow
  this discipline that I call the saturation discipline.</span> </p><p><span
  m='2017000'>It says simply operate the MOSFET operating in saturation</span>
  <span m='2021000'>as a current source. We will look at an amplifier in</span>
  <span m='2024000'>a second, and I will tell you why.</span> </p><p><span
  m='2034000'>Now let's do a MOSFET amplifier.</span> </p><p><span
  m='2041000'>Remember my amplifier had an input port and an output port.</span>
  </p><p><span m='2046000'>And in general in our use we are going to have a
  common</span> <span m='2052000'>ground. And we have a VS and a ground</span>
  <span m='2055000'>here as well. That is the power port of the</span> <span
  m='2059000'>amplifier. The input port and the output</span> <span
  m='2063000'>port.</span> </p><p><span m='2070000'>And let me redraw the
  circuit putting a MOSFET in place of the</span> <span m='2079000'>current
  source, RL, VS, vO, drain,</span> <span m='2084000'>gate, source, vI.</span>
  </p><p><span m='2087000'>So my input is vI. Again, the MOSFET output is
  vO.</span> </p><p><span m='2094000'>And I have a resistor RL. Hey, we've seen
  that before.</span> </p><p><span m='2102000'>It turns out this is not
  surprising.</span> </p><p><span m='2105000'>You've seen this before. This was
  our primitive inverter</span> <span m='2109000'>circuit. So what's different
  here?</span> </p><p><span m='2112000'>We showed you the circuit as an
  inverter.</span> </p><p><span m='2115000'>What's different here is that when
  we look at MOSFET behavior</span> <span m='2120000'>as a current source, this
  behaves like an amplifier.</span> </p><p><span m='2124000'>In other words,
  when vDS is greater than some</span> <span m='2128000'>value then this behaves
  like a current source.</span> </p><p><span m='2133000'>When vDS is small, in
  other words,</span> <span m='2135000'>in the digital design when vDS was small
  here,</span> <span m='2138000'>because when the MOSFET was on it pulled the
  voltage down to</span> <span m='2143000'>ground, we could view this behavior
  as a resistor.</span> </p><p><span m='2146000'>And exactly the same thing, it
  is an amplifier.</span> </p><p><span m='2150000'>And with digital designs, I
  was driving it with 5 volts</span> <span m='2154000'>and 0 volts and that was
  it, rail to rail.</span> </p><p><span m='2158000'>As an amplifier, what I am
  doing now is looking</span> <span m='2161000'>at a small region of its
  behavior when vDS is greater</span> <span m='2165000'>than vGS minus VT. What
  I am saying is that for</span> <span m='2168000'>amplification let's follow
  the saturation discipline.</span> </p><p><span m='2172000'>And the reason is
  that when this behaves like a current</span> <span m='2176000'>source, what I
  have shown you is that if this behaves like a</span> <span m='2180000'>current
  source I have shown you that this expression up here</span> <span
  m='2185000'>gives you amplification. In last lecture we plotted a</span> <span
  m='2190000'>bunch of values for vO versus vI, and we saw that we were</span>
  <span m='2194000'>getting amplification. For a small change in vI,</span>
  <span m='2197000'>I was getting a larger change in vO, and that was when I
  had</span> <span m='2201000'>the equation for a current source in
  there.</span> </p><p><span m='2204000'>And so we know for a fact that if I can
  operate this as a</span> <span m='2209000'>current source, with a reasonable
  choice of</span> <span m='2212000'>values here, I am going to be able to get
  amplification.</span> </p><p><span m='2216000'>What I haven't told you is if
  this is operated in the linear</span> <span m='2220000'>region, in fact, you
  do not get amplification.</span> </p><p><span m='2225000'>I won't cover that,
  but you can check that out in</span> <span m='2229000'>your course notes as a
  discussion or you can try it out</span> <span m='2233000'>for yourself.
  Replace this with the SR model</span> <span m='2237000'>for small vDS and you
  can show yourselves that you don't get</span> <span m='2242000'>any
  amplification. In order to get the</span> <span m='2245000'>amplification we
  are telling ourselves let's focus on this</span> <span m='2250000'>part of the
  playground where vDS is greater than or equal to vGS</span> <span
  m='2256000'>minus VT. And for vGS greater than or</span> <span
  m='2260000'>equal to VT. So when vGS is greater than VT</span> <span
  m='2264000'>the MOSFET is on. Further, when vDS is large,</span> <span
  m='2268000'>larger than vGS minus VT this behaves like a current
  source.</span> </p><p><span m='2273000'>So we have now created a small
  playground for ourselves where</span> <span m='2278000'>we can build lots of
  fun little amplifiers and other circuits.</span> </p><p><span m='2285000'>And
  provided our circuits follow the saturation discipline</span> <span
  m='2289000'>where for the MOSFET or MOSFETs in the circuit these
  expressions</span> <span m='2293000'>are true then the MOSFETs are going to be
  in saturation,</span> <span m='2297000'>the current source model applies, and
  I will be indeed</span> <span m='2301000'>getting saturation. In future
  courses you may</span> <span m='2305000'>actually see the MOSFET used in other
  regimes of operation for a</span> <span m='2309000'>variety of reasons. But in
  6.002 when we talk about</span> <span m='2314000'>amplifiers and so on we will
  be adopting the saturation</span> <span m='2318000'>discipline. And your
  homework problems and</span> <span m='2321000'>so on will state that. Assume
  that the MOSFETs are in</span> <span m='2325000'>saturation. What that means
  is that you can</span> <span m='2328000'>begin to model them as a current
  source and simply analyze their</span> <span m='2332000'>behavior accordingly.
  One minor nit.</span> </p><p><span m='2335000'>Note that vDS for the MOSFET is
  the same as vO.</span> </p><p><span m='2340000'>And vGS for the MOSFET is the
  same as vI.</span> </p><p><span m='2344000'>So if you see me jumping back and
  forth using vOs and vIs or</span> <span m='2350000'>vDSs and vGSs they are the
  same thing in this circuit.</span> </p><p><span m='2355000'>If you are dealing
  with circuits with many MOSFETs then</span> <span m='2361000'>you will have
  vDS1s and vGS1s and so on and so forth.</span> </p><p><span m='2368000'>But
  for this simple circuit, vO and vDS are the same,</span> <span m='2374000'>vI
  and vGS are the same. So we could go ahead and</span> <span
  m='2381000'>analyze that circuit. What I do to analyze the</span> <span
  m='2387000'>circuit, I am telling you this. I am telling you that the</span>
  <span m='2394000'>MOSFET is behaving in saturation.</span> </p><p><span
  m='2400000'>I am telling you this. We have disciplined ourselves</span> <span
  m='2403000'>to say that in that circuit the MOSFET is in saturation.</span>
  </p><p><span m='2407000'>As soon as we tell you that we can then go ahead and
  analyze</span> <span m='2411000'>that circuit. And to analyze that
  circuit</span> <span m='2413000'>what you will do is simply replace the MOSFET
  with its</span> <span m='2417000'>equivalent model, and that looks like
  this.</span> </p><p><span m='2420000'>Since you have been told that it is in
  saturation,</span> <span m='2423000'>we can replace the MOSFET with its
  current source model.</span> </p><p><span m='2436000'>And the current iDS for
  the MOSFET is given by K/2(vI-VT)^2.</span> </p><p><span m='2445000'>And it is
  always good to write the constraints under which you</span> <span
  m='2454000'>are implicitly working close by. So the constraints are
  one,</span> <span m='2462000'>vGS is greater than or equal to VT, vDS is
  greater than or equal</span> <span m='2469000'>to vGS minus VT. These
  constraints immediately</span> <span m='2474000'>follow from a statement of
  the type we are operating under the</span> <span m='2480000'>saturation
  discipline or the MOSFET is in saturation.</span> </p><p><span m='2486000'>Let
  me just mark this equation as A, and we will refer to it</span> <span
  m='2492000'>again.</span> </p><p><span m='2505000'>So with this new little
  circuit with the MOSFET working as a</span> <span m='2509000'>current source,
  let's go ahead and analyze our</span> <span m='2513000'>amplifier. Notice that
  to analyze the</span> <span m='2516000'>circuit I have a current source. It's
  a dependent current source</span> <span m='2521000'>where the current depends
  on the square of the input.</span> </p><p><span m='2527000'>So I want to go
  and analyze it. This is a nonlinear circuit.</span> </p><p><span
  m='2532000'>So I can apply any one of the methods that we talked about</span>
  <span m='2537000'>last week for nonlinear circuits.</span> </p><p><span
  m='2540000'>To analyze it I will go ahead and use the analytical
  method.</span> </p><p><span m='2546000'>And my goal will be to obtain vO
  versus vI.</span> </p><p><span m='2551000'>Again, remember where are we
  here?</span> </p><p><span m='2553000'>The MOSFET circuit operating in
  saturation so I can replace this</span> <span m='2557000'>with a current
  source. It is nonlinear.</span> </p><p><span m='2560000'>And so I can apply
  one of the two methods, the analytical</span> <span m='2564000'>method or the
  graphical method. Let's do both and start with</span> <span m='2569000'>the
  analytical method. The analytical method simply</span> <span m='2572000'>says
  go forth, apply the node method and</span> <span m='2575000'>solve. Simple
  stuff.</span> </p><p><span m='2576000'>Let's go ahead and do that. Node
  method.</span> </p><p><span m='2580000'>I have a single node here that is of
  interest.</span> </p><p><span m='2584000'>I know the voltage vI at this
  node.</span> </p><p><span m='2587000'>I know the voltage VS at this
  node.</span> </p><p><span m='2589000'>So the only unknown is here at
  vO.</span> </p><p><span m='2592000'>So I will go ahead and do that. Let me go
  ahead and equate the</span> <span m='2597000'>currents into the node to be
  zero.</span> </p><p><span m='2599000'>So the currents out of the node here are
  iDS.</span> </p><p><span m='2603000'>And that was equal the current into that
  same node.</span> </p><p><span m='2607000'>So iDS must equal VS minus vO
  divided by RL.</span> </p><p><span m='2612000'>iDS=VS-vO/RL. For later
  reference,</span> <span m='2619000'>let me call that B. Simplifying,</span>
  <span m='2626000'>what I can do is, we know that iDS is given by</span> <span
  m='2635000'>K/2(vI-VT)^2. So I replace iDS with this</span> <span
  m='2643000'>expression and I multiply that by RL.</span> </p><p><span
  m='2648000'>So I get K/2(vI-VT)RL. So iDS gets multiplied by RL</span> <span
  m='2655000'>and I get vO on this side and VS remains out here.</span>
  </p><p><span m='2662000'>All I have done is multiplied both sides by
  RL.</span> </p><p><span m='2670000'>So it is RL iDS, taken RL iDS to this
  side,</span> <span m='2673000'>that is here, I get the minus sign,</span>
  <span m='2677000'>and VS stays here, vO comes here.</span> </p><p><span
  m='2680000'>So that is my final expression. Remember this is true under</span>
  <span m='2685000'>certain conditions. I will keep hammering that home</span>
  <span m='2690000'>because some of the most common errors made by people is
  in</span> <span m='2695000'>forgetting the constraints under which this was
  obtained.</span> </p><p><span m='2702000'>And the constraint under which this
  was obtained is the</span> <span m='2708000'>saturation discipline. And that
  was true when vGS for</span> <span m='2714000'>a MOSFET was greater than or
  equal to VT and vDS for a MOSFET</span> <span m='2721000'>was greater than or
  equal to vGS minus VT.</span> </p><p><span m='2726000'>I also know that for
  vGS less than VT, vO=VS.</span> </p><p><span m='2733000'>So when vGS is less
  than VT then this one turns off.</span> </p><p><span m='2738000'>That's why it
  is the SCS model, switch current source model.</span> </p><p><span
  m='2744000'>When vGS is less than zero it turns off and VS directly</span>
  <span m='2750000'>appears at vO. I would like to stare at this</span> <span
  m='2754000'>constraint with you for a second, vDS greater than or</span> <span
  m='2760000'>equal to vGS minus VT here. And vDS is simply vO.</span>
  </p><p><span m='2768000'>I want to rewrite this constraint in terms of
  iDS.</span> </p><p><span m='2777000'>It will come in handy. So iDS is
  K/2(vI-VT)^2.</span> </p><p><span m='2786000'>This is vI-VT. So vI-VT is
  simply square root</span> <span m='2794000'>of 2iDS/K. In other words,</span>
  <span m='2799000'>I can write iDS less than or equal to K/2vO^2.</span>
  </p><p><span m='2805000'>So this constraint expressed in terms of iDS is
  simply iDS less</span> <span m='2813000'>than or equal to K/2vO^2.</span>
  </p><p><span m='2825000'>So all I've done here is analyzed this nonlinear
  circuit.</span> </p><p><span m='2830000'>I can also analyze it using the
  graphical method.</span> </p><p><span m='2835000'>And in order to do that, for
  my nonlinear circuit,</span> <span m='2840000'>in order to do that, all I have
  to do is plot.</span> </p><p><span m='2844000'>Let's have iDS here and vDS
  here.</span> </p><p><span m='2849000'>And as we did with a nonlinear expo
  dweeb, what I do is I plot</span> <span m='2856000'>the device characteristics
  iDS versus vDS.</span> </p><p><span m='2861000'>The device characteristics
  under saturation look like this,</span> <span m='2868000'>so vGS increasing.
  iDS versus vDS has a bunch of</span> <span m='2873000'>curves that look like
  current sources of increasing values.</span> </p><p><span m='2882000'>That
  simply reflects equation A.</span> </p><p><span m='2886000'>And then I
  superimpose on top of that the expression that</span> <span m='2895000'>comes
  up due to equation B which is iDS equals,</span> <span m='2902000'>let me
  write that down here, iDS equals VS/RL - vO/RL.</span> </p><p><span
  m='2912000'>That's B. And let me plot that.</span> </p><p><span
  m='2915000'>That is a straight line relationship between iDS and vO.</span>
  </p><p><span m='2923000'>And so when vO is zero iDS is VS/RL.</span>
  </p><p><span m='2927000'>And when iDS is zero vO equals VS.</span>
  </p><p><span m='2932000'>Remember, vO and vDS are the same.</span>
  </p><p><span m='2936000'>So this is what I get. This is the straight
  line</span> <span m='2943000'>corresponding to equation B here.</span>
  </p><p><span m='2953000'>And, as before, we just find the point where</span>
  <span m='2957000'>the two intersect. Let's say I am given some value</span>
  <span m='2961000'>of vGS. And let's say I am given some</span> <span
  m='2965000'>known value of vDS. So for that I can go ahead and</span> <span
  m='2969000'>find out the corresponding value of iDS from this graph.</span>
  </p><p><span m='2976000'>Just as I told you when we did the expo dweeb
  stuff,</span> <span m='2980000'>this line here is called a load line.</span>
  </p><p><span m='2983000'>You will be seeing that again and again and again
  where we</span> <span m='2987000'>have the equation corresponding to the one
  shown here,</span> <span m='2992000'>the equation written for the output loop
  superimposed on the</span> <span m='2997000'>device characteristics. That's
  called a load line.</span> </p><p><span m='3002000'>So I can get this point
  corresponding to the operating</span> <span m='3006000'>point of the MOSFET
  for this iDS, vDS and vGS by using the</span> <span m='3011000'>graphical
  method. In the next lecture we are</span> <span m='3014000'>going to look at,
  given a device of this sort,</span> <span m='3018000'>how do we figure out the
  boundaries of valid operation so</span> <span m='3023000'>that the MOSFET
  stays in saturation?</span> </p>
uid: 6b64779b5126fd1f7536e398e31f8bba
type: course
layout: video
---
