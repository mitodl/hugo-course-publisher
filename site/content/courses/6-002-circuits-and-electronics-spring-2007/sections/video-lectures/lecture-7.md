---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Incremental analysis</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec07.jpg
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-7/thumb_lec07.jpg
    title: thumb_lec07.jpg
    type: null
    uid: ec0e6bb55e59dd029b7adf7a4abcf750
  - id: Video-YouTube-Stream
    media_location: JqvKtMNz3RQ
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Video-YouTube-Stream
    type: Video
    uid: 11ac14285af217aa0c61ea670f315ba0
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/JqvKtMNz3RQ/default.jpg'
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6076c8a805d166d6a7b5623fe9165376
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Video-iTunes U-MP4
    type: Video
    uid: 8ee47f0e8c5b4e46b82a423d37b759b3
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/mit-6.002-lec7-25sep2003-220k.mp4
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Video-Internet Archive-MP4
    type: Video
    uid: 769a7d1e35c33cd5b4d2d027d5a87985
  - id: Thumbnail-OCW-JPG
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 211ae0bbbb50b0da91d8deef058d1809
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: JqvKtMNz3RQ
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 271645a4fa86da211d82afcb335ba740
  - id: JqvKtMNz3RQ.srt
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-7/JqvKtMNz3RQ.srt
    title: 3play caption file
    type: null
    uid: 84c2d31d5ecf3cd336577271720591d1
  - id: JqvKtMNz3RQ.pdf
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-7/JqvKtMNz3RQ.pdf
    title: 3play pdf file
    type: null
    uid: ecb2cd8c1ded230e02409c0ee23126f9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2ed1d7e9b2ce44d55a014e6afad28b77
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2e4700443c2efe725ef91d2c94128ac6
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 330136e756f55ae4a5f8403bff48a155
inline_embed_id: '62480281lecture7:incrementalanalysis2481484'
order_index: 189
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a title="Open in a new window." target="_blank"
  href="./resolveuid/8419449b545945d3988437d9bef23612">PDF</a>)<br />
  Demonstration: Nonlinear device (<a title="Open in a new window."
  target="_blank"
  href="./resolveuid/488cdee0ff361c8227e2483e9b45b80d">PDF</a>)</p>
short_url: lecture-7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-7
title: 'Lecture 7: Incremental Analysis'
transcript: >-
  <p><span m='0'>OK, good morning all. So before we begin,</span> <span
  m='6000'>I just thought I'd show you a little news item that I happened</span>
  <span m='6002'>So you recall when we did the</span> <span m='17000'>to read
  that was very relevant to what we covered recently in</span> <span
  m='32000'>digital section a few days ago last Thursday,</span> <span
  m='36000'>we talked about a switch. We talked about the MOSFET</span> <span
  m='40000'>switch, which when turned on and off, by input signals could
  help</span> <span m='46000'>build gates which would then be combined in tens
  of millions of</span> <span m='51000'>quantities and go into chips like the
  Pentium 4 and AMD</span> <span m='56000'>Athlon 64, and so on it so
  forth.</span> </p><p><span m='60000'>So I just saw this news item that I came
  across,</span> <span m='63000'>and this says they are rethinking the
  basic</span> <span m='67000'>construction of the products. It talks about
  the</span> <span m='71000'>semiconductor manufacturers like AMD, Intel, and
  others that</span> <span m='76000'>build digital chips. They are rethinking
  the basic</span> <span m='80000'>construction of the products down to the
  architecture of the</span> <span m='85000'>transistor. That's a MOS
  transistor,</span> <span m='88000'>and the on/off switch inside the
  chip.</span> </p><p><span m='93000'>OK, now this might imply that there is a
  single switch inside</span> <span m='97000'>the chip, but no, there's tens of
  millions of</span> <span m='100000'>transistors, or tens of millions of
  switches inside a chip.</span> </p><p><span m='104000'>And pretty much any
  advancement that can be made to the basic</span> <span m='108000'>transistor
  can have a 10 million to 20 million times effect</span> <span
  m='112000'>because there are that many of them on a single chip.</span>
  </p><p><span m='116000'>So I thought that was very appropriate.</span>
  </p><p><span m='118000'>OK. Let's dive into a quick review.</span>
  </p><p><span m='123000'>So this week, we had begun nonlinear</span> <span
  m='126000'>analysis, and I just thought I'd blast through a few
  animations</span> <span m='132000'>that I've created, trying to give you more
  insight</span> <span m='137000'>into the behavior of some of the things that
  we have done.</span> </p><p><span m='143000'>Now first of all, as I did the
  last time,</span> <span m='147000'>let me try to put it in perspective most of
  what you've</span> <span m='152000'>learned thus far, and what we will be
  learning</span> <span m='156000'>today. So the past week,</span> <span
  m='160000'>we have been focusing on nonlinear analysis.</span> </p><p><span
  m='163000'>And as I pointed out, here is how this fits into the</span> <span
  m='167000'>big picture. So, we had our 6.002 world,</span> <span m='170000'>at
  what we said is that we are engineers.</span> </p><p><span m='173000'>We are
  going to devise our own playground in which to play with</span> <span
  m='178000'>our own rules. And that's our playground.</span> </p><p><span
  m='181000'>That's what we're going to learn about in 002,</span> <span
  m='185000'>and for that matter, the rest of EECS at MIT.</span> </p><p><span
  m='188000'>It's all within this playground here.</span> </p><p><span
  m='191000'>And this is the playground with lumped circuit abstraction,</span>
  <span m='195000'>and good old KVL, KCl, node method,</span> <span
  m='198000'>your basic composition rules apply within this playground</span>
  <span m='202000'>that directly come from Maxwell's equations because
  you</span> <span m='206000'>have made the lumped matter discipline
  assumptions.</span> </p><p><span m='212000'>OK, so then we said a large part
  of the playground is</span> <span m='215000'>linear, and some other much more
  intuitive techniques apply</span> <span m='219000'>within the linear portion
  of that playground,</span> <span m='222000'>techniques like the
  superposition,</span> <span m='225000'>Thevenin and Norton. In most
  exercises,</span> <span m='227000'>and quizzes, and experiments,</span> <span
  m='229000'>and so on that you do in real life, you can pretty much
  apply</span> <span m='233000'>these simple techniques. Very rarely do you have
  to go</span> <span m='237000'>into the node method for circuits that are
  more</span> <span m='240000'>complicated than single source and a couple of
  elements.</span> </p><p><span m='246000'>And then, there's the nonlinear
  part.</span> </p><p><span m='248000'>Remember, the reason I showed this is
  that this is the same</span> <span m='252000'>playground. OK, linear and
  nonlinear are</span> <span m='254000'>part of the same playground. OK, even
  nonlinear elements are</span> <span m='258000'>lumped circuit elements, and
  they follow KVL,</span> <span m='261000'>KCl, the node equation, and so
  on.</span> </p><p><span m='264000'>And then, last week we spent some time
  talking about the</span> <span m='267000'>digital abstraction. So we focused
  on a smaller</span> <span m='272000'>region of the playground. And the
  assumptions we made in</span> <span m='276000'>there were even tighter. We
  said that it is part of the</span> <span m='281000'>playground we shall only
  deal with binary values.</span> </p><p><span m='285000'>We'll digitize or lump
  values into highs and lows,</span> <span m='289000'>and that's where our
  circuits are going to be.</span> </p><p><span m='292000'>And these circuits,
  when looked at as a whole,</span> <span m='296000'>were nonlinear. So, this is
  a simple NAND gate</span> <span m='300000'>circuit. And this is the
  input/output</span> <span m='304000'>characteristic. So, for example,</span>
  <span m='306000'>if I hold B at zero, and I apply a zero to one</span> <span
  m='310000'>transition at A, then this is the output that I</span> <span
  m='314000'>will see at C. So notice, this is decidedly</span> <span
  m='317000'>nonlinear. Then I said that,</span> <span m='320000'>look, suppose
  we had to fix the input values at a given set.</span> </p><p><span
  m='324000'>OK, so let's say, for example,</span> <span m='327000'>I fix A at
  one, and B at one.</span> </p><p><span m='331000'>OK, and then look at the
  circuit in this situation.</span> </p><p><span m='334000'>What do I find? What
  I find is that the entire</span> <span m='337000'>digital set of circuits that
  we were looking at move over into</span> <span m='342000'>the linear space for
  a given set of switch settings,</span> <span m='345000'>OK? So, when I set A 1
  and B 1,</span> <span m='347000'>A equal to one and B equal to one, my NAND
  gate becomes like</span> <span m='352000'>this. OK, it's a simple
  resistive</span> <span m='354000'>network with a voltage source, VS.</span>
  </p><p><span m='356000'>So, for a fixed set of inputs, for a given set of
  inputs,</span> <span m='360000'>if I don't change my inputs, then my circuit
  looks like a</span> <span m='364000'>linear circuit, and my good old linear
  analysis</span> <span m='368000'>techniques apply. So that was last
  week.</span> </p><p><span m='372000'>And this week, we are looking at the
  nonlinear</span> <span m='375000'>space. And we looked at a couple of</span>
  <span m='377000'>techniques in the nonlinear space, analytical techniques
  and</span> <span m='381000'>graphical techniques. And then, I showed you
  an</span> <span m='385000'>example. OK, I showed you an example</span> <span
  m='387000'>circuit that was something that I would like to build
  involving</span> <span m='391000'>the light emitting expo dweeb, my little
  garage door opener</span> <span m='395000'>thingamajig, and I wanted to
  transmit music over that light</span> <span m='399000'>beam. I also showed you
  that it was</span> <span m='403000'>highly distorted because it was in the
  nonlinear space.</span> </p><p><span m='407000'>So, today what I'm going to do
  is introduce a new part of the</span> <span m='412000'>playground. There's a
  new part of the</span> <span m='416000'>playground, and I'll show you a
  technique whereby by focusing on</span> <span m='421000'>this part of the
  playground and disciplining ourselves in the</span> <span m='426000'>kind of
  inputs we apply to circuits, I'm going to show you</span> <span
  m='431000'>that certain kinds of nonlinear circuits also move over,</span>
  <span m='435000'>when used in a particular way, also move into the
  linear</span> <span m='440000'>analysis domain. OK, so let me leave that
  for</span> <span m='443000'>now and go back into quickly reviewing the
  motivating example</span> <span m='448000'>of music that I had taken last
  time.</span> </p><p><span m='453000'>OK, so here was a little example.</span>
  </p><p><span m='457000'>So I have a music source, VI, and I apply that.</span>
  </p><p><span m='463000'>This device that I call the, lightheartedly,</span>
  <span m='468000'>the Light Emitting Expo Dweeb has a current,</span> <span
  m='474000'>VD, across it, or a voltage,</span> <span m='478000'>VD, across it,
  and a current ID through it.</span> </p><p><span m='485000'>And the light
  intensity, I said, was proportional to the</span> <span m='490000'>current.
  And because of that,</span> <span m='493000'>I was able to get the light to
  impinge on a receiving device,</span> <span m='499000'>which produced a
  current that was proportional to the</span> <span m='504000'>intensity of
  light falling on it.</span> </p><p><span m='508000'>And that signal would then
  be amplified somehow.</span> </p><p><span m='514000'>We haven't talked about
  all of this stuff yet.</span> </p><p><span m='517000'>This will happen next
  week. But let's say we somehow</span> <span m='522000'>amplify the signal and
  then played out through a set of</span> <span m='526000'>speakers. All right,
  so if I had some</span> <span m='529000'>sort of a music signal here, then I
  could then transmit the</span> <span m='534000'>music signal over to the side
  on top of this light beam.</span> </p><p><span m='540000'>But the problem, as
  I said the last time,</span> <span m='543000'>was that our device, the Light
  Emitting Expo Dweeb</span> <span m='548000'>had an exponential
  characteristic,</span> <span m='552000'>so that I had some trouble in getting
  undistorted music.</span> </p><p><span m='557000'>So, the characteristic of
  the VI characteristics of my device</span> <span m='563000'>looked like so.
  The ID versus VD curve looked</span> <span m='567000'>as follows. OK, it was
  decidedly nonlinear.</span> </p><p><span m='572000'>And because of that, I was
  getting a lot of</span> <span m='576000'>distortions in my signal, and I
  showed you a little trick</span> <span m='581000'>to plot, given an input
  waveform at a transfer function such as</span> <span m='587000'>here to plot
  the output function.</span> </p><p><span m='590000'>OK, let me show you
  another little animation that I have</span> <span m='595000'>created here for
  you that should give you even more intuition in</span> <span m='600000'>terms
  of how it happens. So, this is a characteristic I</span> <span
  m='606000'>showed you up here. It's on both sides,</span> <span m='608000'>but
  I guess it points to only one unless I shuttle back and</span> <span
  m='612000'>forth really fast. So on average,</span> <span m='615000'>I'll be
  in both places. But anyway, so here's my ID</span> <span m='618000'>versus VD
  characteristic. And as I said,</span> <span m='621000'>there's an exponential
  ID versus VD curve.</span> </p><p><span m='624000'>And I want to see what the
  output looks like,</span> <span m='627000'>for example, a sinusoidal
  input.</span> </p><p><span m='631000'>So I said, let's place the input along a
  little graph,</span> <span m='634000'>rotate it so, and take a
  sinusoid,</span> <span m='637000'>and apply a sinusoid to the input, VI, which
  would also</span> <span m='641000'>appear across the Light Emitting Expo
  Dweeb.</span> </p><p><span m='644000'>And then, what I wanted to see was how
  the output looked.</span> </p><p><span m='648000'>OK, so let me tell you that
  the output is going to look like</span> <span m='652000'>this. OK, the output
  is going to look</span> <span m='655000'>like so. And, a little artifice
  to</span> <span m='657000'>discover curves like this is to think about a point
  here</span> <span m='661000'>corresponding to the point on the transfer curve
  here,</span> <span m='665000'>because this is VD, looking at the Y
  intercept.</span> </p><p><span m='668000'>That's a value of ID, and that's a
  value of ID here.</span> </p><p><span m='674000'>And, time moves along here,
  and time moves along here.</span> </p><p><span m='677000'>So, I did this
  little animation.</span> </p><p><span m='680000'>You'd better be impressed. It
  took me six hours to do it.</span> </p><p><span m='684000'>So, here it goes.
  So, let's say I start by</span> <span m='687000'>focusing on this little point
  that corresponds to this point</span> <span m='691000'>on the transfer
  function, which then, in turn,</span> <span m='695000'>points to a time, zero,
  this point on my ID</span> <span m='698000'>curve. OK, I hope this
  works.</span> </p><p><span m='704000'>So, as my point moves down [LAUGHTER],
  this was fun to do,</span> <span m='716000'>I promise you. So notice that as
  this point</span> <span m='722000'>has the following excursion, this had the
  following</span> <span m='725000'>excursions here. OK, all right.</span>
  </p><p><span m='728000'>So let me pause that little animation there.</span>
  </p><p><span m='731000'>At the end of the lecture, I'll put that up again if
  you</span> <span m='735000'>like, and you all can come and play with
  it.</span> </p><p><span m='738000'>So, you can actually do this in
  PowerPoint.</span> </p><p><span m='741000'>It took me quite a bit of time to
  figure out how to do it,</span> <span m='746000'>though, but it's fun. OK, so
  let me show you a little</span> <span m='750000'>demo, and show you a
  sinusoid, and show you what the output</span> <span m='754000'>looks like if I
  apply a sinusoid for VI.</span> </p><p><span m='759000'>So, I'll show you ID
  as a function of VI when VI is a</span> <span m='763000'>sinusoid. There you
  go.</span> </p><p><span m='764000'>So, I applied my sinusoid VI, and this is
  the current that I</span> <span m='769000'>get. And notice, this is the</span>
  <span m='771000'>transfer function that I talked about, the ID versus VD curve
  of</span> <span m='776000'>my Light Emitting Expo Dweeb. And I get this highly
  nonlinear</span> <span m='785000'>transformation of the input as I get to the
  output.</span> </p><p><span m='795000'>OK, so that is a problem. And then, I
  also played some</span> <span m='805000'>music for you. Let's do that,</span>
  <span m='810000'>too. I played some music for you.</span> </p><p><span
  m='815000'>I applied the music as an input to the circuit,</span> <span
  m='819000'>and that's the output. OK, that's the output that I'm</span> <span
  m='824000'>observing at the amplifier. It's highly distorted.</span>
  </p><p><span m='829000'>OK, we can stop that. There you go.</span>
  </p><p><span m='832000'>OK, so that was my problem. OK, so we had
  covered,</span> <span m='836000'>we had gone this far last Tuesday.</span>
  </p><p><span m='841000'>I set the problem up for you, motivated what we had to
  do,</span> <span m='845000'>and showed you that I was able to transmit music
  over my garage</span> <span m='850000'>door opener, but I did not think I
  could listen to that music for</span> <span m='855000'>very long. So, I
  challenged all of us to</span> <span m='858000'>think about how a trick that I
  could use to be able to transmit</span> <span m='863000'>music and have a
  linear response.</span> </p><p><span m='865000'>So, did you people get time to
  think about it?</span> </p><p><span m='870000'>So how many people here think
  they know the answer?</span> </p><p><span m='874000'>It's OK, don't be modest.
  Go ahead.</span> </p><p><span m='878000'>Could you speak louder? Yeah, you
  find another</span> <span m='882000'>something, kind of element, that's got
  the opposite graph</span> <span m='887000'>so that when you add them
  together.</span> </p><p><span m='891000'>Oh, this guy wants to cheat.
  No.</span> </p><p><span m='894000'>He wants a new element. So, no, no new
  elements.</span> </p><p><span m='900000'>Pardon? Build an MP3 encoder.</span>
  </p><p><span m='902000'>Ah-ha, so that will happen much later.</span>
  </p><p><span m='905000'>Yes? Digitize the signal before you</span> <span
  m='908000'>send it to the LED? Digitize the signal before you</span> <span
  m='912000'>send it to the LED. But in some sense,</span> <span m='915000'>each
  of these solutions is a huge sledgehammer approach to</span> <span
  m='920000'>look at solving it. There's a much simpler</span> <span
  m='924000'>technique I can apply here. Yeah?</span> </p><p><span
  m='926000'>Add a voltage offset. Ah, ah-ha, that might work.</span>
  </p><p><span m='932000'>What else? So let's say,</span> <span
  m='934000'>here's my signal, right?</span> </p><p><span m='936000'>If I add a
  voltage offset, that will just bump the signal</span> <span m='941000'>up
  here. Then the curve is still</span> <span m='943000'>nonlinear. But you're
  getting there.</span> </p><p><span m='946000'>Well, I'll tell you what. Let's
  pause here.</span> </p><p><span m='950000'>Let me quit while I'm ahead. OK, so
  the answer here,</span> <span m='955000'>folks, is Zen. OK, what I want you to
  do is,</span> <span m='958000'>so, in Zen, what you have to do is you have to
  sit down in a</span> <span m='963000'>courtyard, and look at a rock, like a
  small rock on the</span> <span m='968000'>ground. And you got a focus on it
  till</span> <span m='972000'>the rest of Earth kind of vanishes.</span>
  </p><p><span m='975000'>Just focus on the rock. OK, now make like you're in
  a</span> <span m='978000'>courtyard, and you're looking at this little area
  here.</span> </p><p><span m='982000'>Just look at this. OK, and I'll give you
  ten</span> <span m='985000'>seconds. Sit down quietly,</span> <span
  m='986000'>and no sounds. Just stare at the spot here.</span> </p><p><span
  m='989000'>OK, make believe this is your little rock, and just stand</span>
  <span m='993000'>there and think about it. OK, I'll give you five
  seconds</span> <span m='998000'>to do that. Just stare at it.</span>
  </p><p><span m='1001000'>And very soon, the answer should pop into your</span>
  <span m='1005000'>heads. OK, what do you see?</span> </p><p><span
  m='1007000'>This guy, if I focus on this really small region of the</span>
  <span m='1012000'>graph, this small little piece looks more or less
  linear.</span> </p><p><span m='1017000'>OK, hmm, so that should give me some
  insight.</span> </p><p><span m='1022000'>This whole thing, the macrograph is
  nonlinear.</span> </p><p><span m='1025000'>But I focus on a little rinky dinky
  piece of that graph like</span> <span m='1029000'>so, that appears more or
  less linear.</span> </p><p><span m='1031000'>If it's small enough, that
  appears linear.</span> </p><p><span m='1034000'>So, I'm staring at this, and
  that appears linear.</span> </p><p><span m='1038000'>The question is, how do I
  exploit this little</span> <span m='1041000'>small, little, linear region to
  get a linear</span> <span m='1044000'>response from my device. OK, so here's
  the trick that</span> <span m='1047000'>I'm going to use. The little trick
  that I'm going</span> <span m='1051000'>to use is the following. Notice
  that,</span> <span m='1055000'>let me call this voltage at the center of this
  region capital</span> <span m='1062000'>VD. What I can do,</span> <span
  m='1063000'>if I take my input signal, and I just pointed out earlier,</span>
  <span m='1070000'>I bump it up. I boost it.</span> </p><p><span
  m='1072000'>OK, so I apply a DC offset to my input signal,</span> <span
  m='1077000'>like so. So I apply some input signal,</span> <span
  m='1082000'>VI, which is also equal to the VD if I look at a variable</span>
  <span m='1087000'>across the nonlinear element. If I apply a DC offset,</span>
  <span m='1092000'>VI, and I superimpose the music on top of that,</span> <span
  m='1096000'>let me call my music, just to distinguish between the</span> <span
  m='1100000'>two, capital VI, and the small vi.</span> </p><p><span
  m='1103000'>OK, that's my music. So here's my capital VD,</span> <span
  m='1107000'>my DC offset. And I want to superimpose my</span> <span
  m='1112000'>music on top of that. OK, so I've gotten halfway</span> <span
  m='1115000'>there. By superimposing my music here</span> <span
  m='1118000'>instead of having excursions out here, I now have excursions
  out</span> <span m='1123000'>here. OK, and so I'm using some</span> <span
  m='1126000'>portion of the graph here. But that's still way beyond the</span>
  <span m='1130000'>small little element there. So a second think that I do
  in</span> <span m='1135000'>addition to boosting up the signal is shrink
  it.</span> </p><p><span m='1140000'>Think of boost and shrink, BS.</span>
  </p><p><span m='1142000'>So what I want to do is boost up the signal using a
  DC offset,</span> <span m='1148000'>and shrink the sucker. OK, so I'm going to
  go with a</span> <span m='1153000'>small signal and bump it up. OK, so now
  what happens is that</span> <span m='1159000'>small signal in its excursions,
  only uses that little portion</span> <span m='1164000'>of the graph. OK,
  again, remember:</span> <span m='1167000'>bump and shrink, bump and
  shrink,</span> <span m='1170000'>two things, boost and shrink. So what do you
  think of that</span> <span m='1177000'>trick? So, by doing that,</span> <span
  m='1178000'>what happens is that signal that has excursions here will</span>
  <span m='1183000'>produce a corresponding response in this region,</span>
  <span m='1186000'>OK? And I argue that since this is</span> <span
  m='1189000'>more or less like a straight line, I invoke Zen here,</span> <span
  m='1193000'>and argue that this little signal now gets transformed,</span>
  <span m='1197000'>and I get a linear response. OK: boost and shrink.</span>
  </p><p><span m='1202000'>So in terms of my circuit, let me draw it out for
  you.</span> </p><p><span m='1206000'>My Light Emitting Expo Dweeb, and this
  whole signal was what</span> <span m='1212000'>I used to call V capital I, and
  that's made up of two</span> <span m='1216000'>components now, a bump
  offset,</span> <span m='1219000'>and a shrunk voltage VI. It shrunk, so
  therefore I've</span> <span m='1223000'>used the small v and small i, like,
  really,</span> <span m='1227000'>really small. In the same manner,</span>
  <span m='1231000'>I get a VD ID across the LED, and the corresponding
  values</span> <span m='1237000'>here will also have a DC offset and a small
  response.</span> </p><p><span m='1241000'>Let me call that ID plus I small
  d.</span> </p><p><span m='1244000'>I'll do all this mathematically in a second
  as well,</span> <span m='1249000'>but first let me do it completely
  intuitively so you</span> <span m='1254000'>get some insight into what's going
  on.</span> </p><p><span m='1257000'>And, VD is simply capital VD plus small
  vd.</span> </p><p><span m='1263000'>OK, and this is the same as VI, I, and
  VI.</span> </p><p><span m='1266000'>OK, so what have I done? I've done two
  things.</span> </p><p><span m='1269000'>I have said, as an engineer,</span>
  <span m='1271000'>OK, I care about getting music across my garage door
  opener.</span> </p><p><span m='1276000'>And I'll do what it takes to do
  that.</span> </p><p><span m='1279000'>OK, so as an engineer, I'll do two
  things.</span> </p><p><span m='1282000'>I'm going to bump my signal up and
  shrink it.</span> </p><p><span m='1285000'>And the bumping and shrinking, and
  I do it like this.</span> </p><p><span m='1289000'>I shrink my signal, the
  music signal here,</span> <span m='1293000'>and add a DC offset. OK, and I
  claim that the music</span> <span m='1298000'>I listened on the other side
  now, provided I have enough</span> <span m='1301000'>amplification there, is
  going to be undistorted.</span> </p><p><span m='1305000'>OK, so far I've
  showing this to you completely intuitively using</span> <span
  m='1309000'>little sketches, no math.</span> </p><p><span m='1310000'>I
  promise you, I'll give you a bunch of math</span> <span m='1313000'>in a few
  seconds, but just get the basic idea,</span> <span m='1316000'>and get the
  intuition behind it.</span> </p><p><span m='1320000'>So let's go back to our
  demo and take a look.</span> </p><p><span m='1324000'>So remember, BS, right,
  bump and shrink.</span> </p><p><span m='1328000'>So what I'm going to do is
  first of all,</span> <span m='1332000'>let me bump up the signal. So, what
  I'll do is I want to</span> <span m='1338000'>add an offset to my input, and
  let me bump it up.</span> </p><p><span m='1343000'>Let me shrink it first.
  It'll make the point a little</span> <span m='1348000'>clearer. So, the big
  input,</span> <span m='1352000'>green, is a big input. Let me shrink
  it.</span> </p><p><span m='1366000'>OK, so I've made my input small, and in
  the middle of that</span> <span m='1369000'>picture out there, you see the
  region of the</span> <span m='1372000'>transfer curve that's being
  articulated.</span> </p><p><span m='1374000'>OK, this region of the curve is
  being articulated by the small</span> <span m='1378000'>signal. It's a much
  smaller signal.</span> </p><p><span m='1380000'>And the output is still
  distorted because I have to do</span> <span m='1383000'>two things: bump and
  shrink. I've only shrunk.</span> </p><p><span m='1388000'>OK, let me bump it
  up now. What's the yellow curve?</span> </p><p><span m='1393000'>It's going to
  get linear. It's going to get proportional</span> <span m='1400000'>to the
  input. Then I'm bumping it up now.</span> </p><p><span m='1405000'>I can make
  it smaller, make it even smaller,</span> <span m='1410000'>there you go. Isn't
  that fantastic?</span> </p><p><span m='1414000'>So, I'm making nature do my
  bidding here,</span> <span m='1417000'>OK? So, this is one of those,</span>
  <span m='1420000'>when I learned electronics and so on many, many years
  ago,</span> <span m='1424000'>this was one of those really big ah-ha moments
  for me,</span> <span m='1428000'>saying, wow, that stuff is cool.</span>
  </p><p><span m='1431000'>It's something that I couldn't think about
  myself,</span> <span m='1435000'>and it's not obvious, and by being
  disciplined and</span> <span m='1439000'>creative in how I use circuits, I can
  do really,</span> <span m='1443000'>really cool things. OK, remember this as a
  big</span> <span m='1447000'>ah-ha moment for you. So, here's my little
  signal</span> <span m='1451000'>that I've shrunk and bumped up, and my output
  is a sinusoid,</span> <span m='1455000'>and not this funny, distorted
  waveform.</span> </p><p><span m='1458000'>And notice that this is the region
  of the curve that is</span> <span m='1462000'>being articulated. So, I can
  make the signal even</span> <span m='1466000'>smaller if I like. OK, and what
  I'd like to do</span> <span m='1469000'>next is play music for you, and if you
  don't believe your</span> <span m='1473000'>eyes, you can at least believe
  your ears.</span> </p><p><span m='1478000'>Let me go to the distorted signal
  again,</span> <span m='1483000'>switch to music, and raise it up.</span>
  </p><p><span m='1488000'>OK, now what we'll do is shrink the music signal and
  then bump</span> <span m='1496000'>it up. Can I turn the volume down a</span>
  <span m='1501000'>little bit? That's good.</span> </p><p><span m='1506000'>OK,
  so if I shrunk the volume a little bit, and let me bump it</span> <span
  m='1513000'>up, now. [MUSIC PLAYS] Just remember</span> <span m='1517000'>this
  as a big ah-ha moment. OK, the signal is really,</span> <span
  m='1523000'>really small. I like that.</span> </p><p><span m='1526000'>I like
  the enthusiasm. OK, so the signal's very small,</span> <span m='1533000'>and I
  get a more or less linear response.</span> </p><p><span m='1538000'>OK. All
  right, so that's intuition,</span> <span m='1542000'>and the approach that
  I've taken is called,</span> <span m='1546000'>it's variously called small
  signal analysis,</span> <span m='1550000'>incremental analysis, small signal
  method,</span> <span m='1554000'>small signal discipline, whatever you
  want.</span> </p><p><span m='1568000'>OK, this simply says that by boosting
  and shrinking my</span> <span m='1573000'>signal, I get a response that's more
  or less linear even when I</span> <span m='1580000'>have a nonlinear device.
  And this technique is called</span> <span m='1585000'>the small signal
  approach. So, just to focus on that a</span> <span m='1591000'>little bit
  longer, switch to page five of your</span> <span m='1596000'>notes and let me
  draw something out for you.</span> </p><p><span m='1607000'>OK, so what I have
  here, this is my offset VD,</span> <span m='1612000'>and from the VD offset I
  have my little signal V small d,</span> <span m='1619000'>and the total signal
  is called V capital D.</span> </p><p><span m='1626000'>Offset, small signal,
  and that's my total signal.</span> </p><p><span m='1630000'>OK, notice the
  offset is all capital.</span> </p><p><span m='1634000'>The total signal is
  small v capital D, and the music or the</span> <span m='1639000'>small signal
  is small v small d. Similarly, the output is going</span> <span m='1645000'>to
  look like this, and here I get an offset in the</span> <span
  m='1650000'>output ID. I get a corresponding signal,</span> <span
  m='1655000'>I small d, and I get a total signal, I capital D,</span> <span
  m='1660000'>OK? The cool thing to notice is</span> <span m='1663000'>that the
  signal here, the output signal here</span> <span m='1668000'>corresponding to
  the input signal, the music signal,</span> <span m='1674000'>VD, is small I
  small D, and that is more or less</span> <span m='1679000'>linear. OK, and I
  can even plot the</span> <span m='1682000'>signal like so. This is my
  input,</span> <span m='1690000'>v capital D. That's T.</span> </p><p><span
  m='1695000'>This is VD, V small d. That is my total input.</span> </p><p><span
  m='1706000'>And similarly, I have an output.</span> </p><p><span
  m='1716000'>And this is my output ID. And, that looks like this,</span> <span
  m='1724000'>I capital D, small i small d,</span> <span m='1729000'>total
  signal I capital D. OK, so that's the small signal</span> <span
  m='1738000'>method. So, let me summarize that for</span> <span
  m='1742000'>you.</span> </p><p><span m='1752000'>There are three steps to the
  method.</span> </p><p><span m='1756000'>So, first of all, operate at some DC
  offset.</span> </p><p><span m='1761000'>This is also called DC bias, and in
  that example it's VDID.</span> </p><p><span m='1767000'>OK, so I choose an
  operating point that bumps up the</span> <span m='1773000'>operation in some
  region of interest.</span> </p><p><span m='1779000'>The second step is to
  superimpose small signal on top</span> <span m='1785000'>of VD, capital V
  capital D, to superimpose a small signal,</span> <span m='1793000'>and the
  third step is observe the response --</span> <span m='1800000'>-- and the
  response, small i small d,</span> <span m='1806000'>that's the music part of
  the response, ID,</span> <span m='1814000'>is approximately linear. OK, three
  steps to the method</span> <span m='1823000'>here, and just remember this
  notation.</span> </p><p><span m='1832000'>And, my notation in the small signal
  model is as follows.</span> </p><p><span m='1839000'>My total signal ID is the
  sum of two signals,</span> <span m='1846000'>I capital D plus small i small
  d.</span> </p><p><span m='1850000'>This is called the total signal.</span>
  </p><p><span m='1854000'>That's called the DC offset. And this is the
  superimposed</span> <span m='1863000'>small signal. OK, total signal,</span>
  <span m='1867000'>DC offset, plus the small signal.</span> </p><p><span
  m='1872000'>And sometimes, especially when doing math,</span> <span
  m='1877000'>and so on, we may oftentimes represent ID as a delta,</span> <span
  m='1884000'>I capital D, OK, to show that ID is</span> <span
  m='1889000'>incremental change in the value of I capital D.</span>
  </p><p><span m='1897000'>And because of that, this method is also often</span>
  <span m='1901000'>called the incremental method, incremental analysis.</span>
  </p><p><span m='1906000'>OK, so far what I've done is given you some
  intuition.</span> </p><p><span m='1911000'>I've developed a small, simple
  method,</span> <span m='1915000'>given you some insight into why we use this
  method,</span> <span m='1919000'>and also shown you some demonstrations that
  show that</span> <span m='1925000'>when I bump and shrink, and observe the
  response,</span> <span m='1929000'>I do get a more or less linear
  response.</span> </p><p><span m='1935000'>So let me now do this mathematically
  and show you that</span> <span m='1941000'>mathematically, you can also derive
  your</span> <span m='1947000'>response to be a linear response.</span>
  </p><p><span m='1952000'>This is page seven. So, I know that ID is some</span>
  <span m='1958000'>function of the diode voltage. F was my nonlinear
  function.</span> </p><p><span m='1967000'>OK, so my function F was a nonlinear
  function.</span> </p><p><span m='1974000'>So therefore, ID was nonlinearly
  related to</span> <span m='1980000'>VD. So, let's do the math.</span>
  </p><p><span m='1983000'>So as a first step, what we did was replace VD by
  a</span> <span m='1987000'>DC offset, the small signal method, a DC
  offset,</span> <span m='1991000'>plus a small incremental change.</span>
  </p><p><span m='1993000'>OK, by doing the math, let me simply use the delta
  VD</span> <span m='1997000'>notation to show you that I'm dealing with small
  increments,</span> <span m='2001000'>and also because in the mathematics
  community,</span> <span m='2005000'>when you learn about some of these
  techniques,</span> <span m='2008000'>they will use the incremental change
  notation,</span> <span m='2012000'>which is the delta VD notation. In
  electrical engineering,</span> <span m='2018000'>we use a small v, small d
  notation.</span> </p><p><span m='2021000'>So, this is a large DC offset, and
  this is a small change</span> <span m='2026000'>about that offset. So, you
  folks have taken math</span> <span m='2030000'>courses before, and been
  looking at finding out</span> <span m='2034000'>the value of a function, which
  is a small change for an</span> <span m='2039000'>input value, which is a
  small change about a big input value</span> <span m='2044000'>or a big DC
  point is Taylor's expansion.</span> </p><p><span m='2049000'>OK, so let's use
  Taylor's series expansion,</span> <span m='2052000'>OK, and substitute VD plus
  delta VD into this,</span> <span m='2056000'>and see what ID looks like.
  Again, let me tell you where</span> <span m='2061000'>I'm going with this. ID
  equals F of VD.</span> </p><p><span m='2064000'>This is a nonlinear function,
  OK?</span> </p><p><span m='2068000'>I claim that by replacing VD, the input,
  with the DC offset</span> <span m='2073000'>plus a small value, the resulting
  response to the</span> <span m='2077000'>small value will be linear,
  OK?</span> </p><p><span m='2080000'>So what I'm going to do next is replace VD
  with this sum here,</span> <span m='2086000'>and then do the math, and show
  you that the response</span> <span m='2090000'>corresponding, or the change in
  ID</span> <span m='2093000'>corresponding to the change in VD is going to be
  linear.</span> </p><p><span m='2098000'>All right, so let's expand this
  function using Taylor's series</span> <span m='2104000'>near the DC offset
  point, capital V capital D.</span> </p><p><span m='2110000'>OK, so ID is
  simply, by Taylor's series,</span> <span m='2113000'>I want to find out a
  value of the function close to V capital</span> <span m='2119000'>D. OK, so I
  take the value of the</span> <span m='2121000'>function at that point, and
  then I add a few terms in</span> <span m='2126000'>my Taylor's series
  expansion. The first term is simply the</span> <span m='2134000'>good old
  Taylor's series stuff. OK, the first term is the first</span> <span
  m='2143000'>derivative of the function times the change.</span> </p><p><span
  m='2149000'>And then, the second one is second derivative.</span> </p><p><span
  m='2169000'>OK, and then I get higher order terms.</span> </p><p><span
  m='2171000'>So this is nothing new here. This is good old Taylor series</span>
  <span m='2176000'>expansion, and again, let me tell you where I'm</span> <span
  m='2179000'>going. I want to look at the response</span> <span m='2182000'>for
  an input that looks like this, and I want to show you at</span> <span
  m='2187000'>the end of the day that the response in ID,</span> <span
  m='2190000'>the effect on ID of using an input like this is as if that</span>
  <span m='2194000'>effect, the incremental change is linearly related to the
  small</span> <span m='2199000'>input, delta VD. So here's my Taylor's
  series</span> <span m='2204000'>expansion for delta V. Now remember,</span>
  <span m='2207000'>I told you that delta VD is much, much smaller than V</span>
  <span m='2212000'>capital D. OK, it's a very,</span> <span m='2214000'>very
  small quantity. But that quantity is really</span> <span m='2219000'>very
  small. Then what I'm going to get is</span> <span m='2223000'>that my output
  is, I can begin to ignore my second</span> <span m='2227000'>order terms. OK,
  delta VD is very,</span> <span m='2229000'>very, very small. Then, what I'm
  going to do is</span> <span m='2233000'>that ignore higher order terms. So
  I'll go and ignore higher</span> <span m='2238000'>order terms. They'll all go
  to zero.</span> </p><p><span m='2240000'>Remember, I can do this because by
  design I've chosen delta VD</span> <span m='2245000'>to be very, very, very
  small.</span> </p><p><span m='2249000'>OK, remember, we are engineers.</span>
  </p><p><span m='2252000'>I've chosen it in a way that this is very
  small.</span> </p><p><span m='2257000'>OK, so I'm telling you that's the case,
  and under those</span> <span m='2262000'>conditions, I can ignore second
  higher order terms,</span> <span m='2268000'>in which case I am left with this
  expression here.</span> </p><p><span m='2273000'>So let me rewrite this. Let
  me rewrite this down here.</span> </p><p><span m='2295000'>OK, I've just
  copied this turnout, I've ignored all these</span> <span m='2299000'>terms
  here, and so I have a more or less equal to sign that</span> <span
  m='2304000'>remains. So what I'm going to do is when</span> <span
  m='2307000'>I apply a small input of this form to a large DC offset,</span>
  <span m='2312000'>my output is also going to look like some output offset with
  a</span> <span m='2317000'>change in the output offset. And let me call the
  output</span> <span m='2323000'>offset I capital D, and some small change in
  the</span> <span m='2329000'>output delta ID. OK, we'll make sure we
  can</span> <span m='2334000'>convince ourselves that this is indeed the
  case.</span> </p><p><span m='2339000'>Notice that this guy here, F of capital
  V capital D is a</span> <span m='2345000'>constant. That's a constant with
  respect</span> <span m='2352000'>to the incremental change, delta VD.</span>
  </p><p><span m='2357000'>Similarly, this part here is a constant.</span>
  </p><p><span m='2363000'>Notice that this term here is the first derivative of
  the</span> <span m='2371000'>function evaluated at the DC bias point, capital
  V capital D.</span> </p><p><span m='2381000'>OK, so this term is also a
  constant with respect to delta</span> <span m='2385000'>VD. So notice,
  then,</span> <span m='2387000'>I have a constant term plus a constant term
  multiplying a</span> <span m='2392000'>small change, delta VD.</span>
  </p><p><span m='2394000'>So what I can do next is, in this case,</span> <span
  m='2397000'>given that I have a constant term on both sides,</span> <span
  m='2402000'>and on this side it's a time varying term,</span> <span
  m='2405000'>what I can do is equate the two constant terms.</span>
  </p><p><span m='2411000'>I can go ahead and equate these two terms.</span>
  </p><p><span m='2414000'>Remember, I have a constant plus a time varying
  term,</span> <span m='2418000'>OK, if I'm assuming here that delta VD, my
  little music signal</span> <span m='2422000'>is a time varying term. So, this
  constant will equal</span> <span m='2426000'>this, so ID must equal F of VD.
  And I know that's the case</span> <span m='2431000'>because the function
  evaluated at the DC offset gives me the DC</span> <span m='2436000'>current
  ID. And similarly,</span> <span m='2439000'>ID is equal to that component.
  Delta ID is equal to D,</span> <span m='2446000'>F of --</span> <span
  m='2460000'>OK, so my incremental change in the output is the first</span>
  <span m='2464000'>derivative multiplied by the small change in the
  current.</span> </p><p><span m='2469000'>OK, so I'm pretty much done. So,
  therefore,</span> <span m='2473000'>notice that delta ID is proportional to
  delta VD.</span> </p><p><span m='2477000'>OK, and that's what I had set out to
  show.</span> </p><p><span m='2481000'>Remember, I had set out to show that
  provided my input is a</span> <span m='2486000'>small excursion around a large
  DC offset,</span> <span m='2491000'>then my output could also be a large DC
  offset with a small</span> <span m='2495000'>excursion on top of it where the
  two excursions,</span> <span m='2499000'>the input excursion and the output
  excursion would be</span> <span m='2503000'>linearly related like so. OK, and
  the method is very</span> <span m='2508000'>simple. I simply expanded the
  function</span> <span m='2511000'>about that point, that DC point,</span>
  <span m='2513000'>neglected higher order terms, and notice that my
  incremental</span> <span m='2518000'>term was simply the derivative plus the
  incremental change,</span> <span m='2523000'>a derivative times the
  incremental change in the input.</span> </p><p><span m='2529000'>Move onto
  page nine, and I'd like to give you a</span> <span m='2532000'>quick graphical
  interpretation of this.</span> </p><p><span m='2536000'>So I gave an intuitive
  explanation earlier.</span> </p><p><span m='2539000'>This is a mathematical
  explanation that shows you that</span> <span m='2544000'>the input could be
  linearly related to the output,</span> <span m='2548000'>provided, the outputs
  would be linearly related to the input,</span> <span m='2553000'>provided the
  input has a DC offset, and small excursions</span> <span m='2558000'>about
  that DC offset. So, let me give you some</span> <span m='2563000'>intuition in
  what you've really done here, using a little graph</span> <span
  m='2570000'>here. So, I'm going to plot ID versus</span> <span m='2574000'>VD,
  and notice that I have some point here, V capital D,</span> <span
  m='2580000'>I capital D. That's my DC bias.</span> </p><p><span
  m='2583000'>So, I have some DC bias point here.</span> </p><p><span
  m='2588000'>OK, what is this? That is simply the slope of the</span> <span
  m='2594000'>curve at that point. OK, it's the slope of this</span> <span
  m='2600000'>curve evaluated at this point. So this guy here is simply
  the</span> <span m='2608000'>slope of this curve evaluated at ID VD.</span>
  </p><p><span m='2614000'>OK, now, what I care about is this point here,</span>
  <span m='2621000'>and this point here. So let's say that this is delta</span>
  <span m='2630000'>VD, all right, and that corresponds to this</span> <span
  m='2637000'>point here. So what I've done is taken the</span> <span
  m='2643000'>slope and multiplied that by delta VD.</span> </p><p><span
  m='2647000'>So I've taken the slope, and multiplied it by delta VD,</span>
  <span m='2652000'>OK, and that gives me this component here.</span>
  </p><p><span m='2657000'>OK, and so, this is the point that I'm going to
  get.</span> </p><p><span m='2662000'>So in other words, what I've done is
  approximated</span> <span m='2667000'>point A using the Taylor trick by the
  point B.</span> </p><p><span m='2674000'>OK, so this is a point, A, which is
  what I really want,</span> <span m='2678000'>and I've approximated that by
  taking the slope of the function</span> <span m='2684000'>at V capital D, and
  multiplying that by the</span> <span m='2688000'>change in the input to get
  the corresponding Y offset,</span> <span m='2693000'>and that's the point that
  I get.</span> </p><p><span m='2695000'>And notice that if I make this delta VD
  small enough,</span> <span m='2700000'>then the error between these two points
  becomes smaller and</span> <span m='2705000'>smaller. So back to our
  example,</span> <span m='2710000'>so ID was a e to the BVD. This was the
  relation for our</span> <span m='2716000'>Expo Dweeb, and let me just plug in
  the values.</span> </p><p><span m='2721000'>So, ID plus small id. Notice, I'm
  just shuttling back</span> <span m='2726000'>and forth between the notation
  delta VD, and small v small d.</span> </p><p><span m='2743000'>OK, and so that
  is given by a e to the BVD, oops,</span> <span m='2751000'>plus, I'm just
  writing that equation up there.</span> </p><p><span m='2759000'>Let me call
  this equation X. And so, I get the second term</span> <span m='2768000'>is the
  derivative, ab times e to the BVD times</span> <span m='2773000'>delta VD,
  small VD, and equating this term that the</span> <span m='2778000'>DC offset.
  Notice that this is the DC</span> <span m='2782000'>offset in the output, and
  the small signal,</span> <span m='2787000'>ID is, further notice that in this
  particular example,</span> <span m='2793000'>what's that? a e to the
  BVD.</span> </p><p><span m='2797000'>That's simply ID again. It just happens
  to be that way</span> <span m='2805000'>in this example. So, I get ID times
  BVD.</span> </p><p><span m='2810000'>So, for my input, small id, my
  incremental change</span> <span m='2816000'>in the output is some ID times B
  times VD.</span> </p><p><span m='2823000'>And notice that this is a
  constant.</span> </p><p><span m='2827000'>And because that is a constant, my
  small signal behavior ID is</span> <span m='2835000'>going to be linearly
  related to the signal, VD,</span> <span m='2840000'>the input signal VD. OK,
  in the last three minutes,</span> <span m='2847000'>I'd like to give you one
  additional insight.</span> </p><p><span m='2854000'>So what we've shown so far
  is if I have an offset and a small</span> <span m='2858000'>change above it,
  then my output ID will be</span> <span m='2862000'>linearly related to my
  input. Now let's stare at this thing</span> <span m='2867000'>again. Let me
  rewrite it.</span> </p><p><span m='2869000'>It's some constant IDB times
  VD.</span> </p><p><span m='2871000'>So, where have we seen such an expression
  before?</span> </p><p><span m='2875000'>OK, where ID was some constant times
  VD.</span> </p><p><span m='2880000'>OK, remember, I equals V divided by
  R:</span> <span m='2883000'>Ohm's law. What I want to show you now is</span>
  <span m='2886000'>how we constantly keep simplifying our lives.</span>
  </p><p><span m='2890000'>The moment we hit some complication and things get
  too</span> <span m='2895000'>painful to analyze, as engineers,</span> <span
  m='2898000'>we come up with some clever tricks to make an analysis and</span>
  <span m='2903000'>use of circuits simple again. And so, notice that this
  is</span> <span m='2912000'>similar to some, one by RD VD,</span> <span
  m='2917000'>where RD is simply one over IDB.</span> </p><p><span
  m='2923000'>I'm just defining this to be RD.</span> </p><p><span
  m='2928000'>And what that means is that I can take a nonlinear circuit</span>
  <span m='2939000'>that looks like this. OK, and what I can do is</span> <span
  m='2947000'>replace this by its incremental equivalent, and build what
  is</span> <span m='2953000'>called a small signal circuit. And I'll just
  introduce it</span> <span m='2958000'>here. And we will revisit the
  circuit</span> <span m='2962000'>in much more gory detail a couple of weeks
  from now.</span> </p><p><span m='2967000'>So, what I can do is build a small
  signal circuit where I</span> <span m='2972000'>have all the small signal
  variables, and replace a</span> <span m='2977000'>nonlinear device by a simple
  little resistor whose value is</span> <span m='2983000'>given by IDB. OK, so
  therefore,</span> <span m='2987000'>what I can do is take my nonlinear
  circuit,</span> <span m='2991000'>and for small, incremental changes,</span>
  <span m='2995000'>replace that circuit with this equivalent small signal
  circuit,</span> <span m='3001000'>and go back to doing simple stuff
  again.</span> </p><p><span m='3004000'>Thank you.</span> </p>
uid: 2e4700443c2efe725ef91d2c94128ac6
type: course
layout: video
---
