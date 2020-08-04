---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Inside the digital gate</p>
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec05.jpg
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-5/thumb_lec05.jpg
    title: thumb_lec05.jpg
    type: null
    uid: ac0919d3742da5f07cc73d372fc9942e
  - id: Video-YouTube-Stream
    media_location: v6vqWasIHaw
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Video-YouTube-Stream
    type: Video
    uid: 97ccc9417e14baf54b4e49fb2d8edfdb
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/v6vqWasIHaw/default.jpg'
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a6fdc7e91640e06b265cb253aad9c96d
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Video-iTunes U-MP4
    type: Video
    uid: cd2cf6257f869dc56a83dfb05d4619c8
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/mit-6.002-lec5-18sep2003-220k.mp4
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Video-Internet Archive-MP4
    type: Video
    uid: ebd1cdd9cc585a1fb087c1b586a8ae01
  - id: Thumbnail-OCW-JPG
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: ccd24324999b04f897f847d5176da7cf
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: v6vqWasIHaw
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c8d52bcfc02547ef1c5936b50e846702
  - id: v6vqWasIHaw.srt
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-5/v6vqWasIHaw.srt
    title: 3play caption file
    type: null
    uid: e46c76532425df1b9f6dac17198434d6
  - id: v6vqWasIHaw.pdf
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-5/v6vqWasIHaw.pdf
    title: 3play pdf file
    type: null
    uid: 725c8b44fefc368c1ccd67991150d2f1
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b1f80cbcc0fc51cc7d0e320c0a59e37a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 4f0054f5076b953db7fe572d6d701a2a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d530de3d986ce9c375b38072e7ed2bb4
inline_embed_id: '5873116lecture5:insidethedigitalgate36190070'
order_index: 165
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/d0413280d1bd2a7f5b7ba1d5a87e9984">PDF</a>)<br />
  Demonstration: S/SR/SCS models (<a target="_blank" title="Open in a new
  window." href="./resolveuid/b268acba2f5c12be344b2c565f45faab">PDF</a>)<br />
  Demonstration: MOS inverter (<a target="_blank" title="Open in a new window."
  href="./resolveuid/872936cb0b263ea66a77b6d5cd44d7e5">PDF</a>)</p>
short_url: lecture-5
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-5
title: 'Lecture 5: Inside the Digital Gate'
transcript: >-
  <p><span m='25000'>All right. Good morning.</span> </p><p><span
  m='30000'>Let's get started. So the last lecture we showed</span> <span
  m='35000'>you how to go digital. The fact that going digital had</span> <span
  m='40000'>some key benefits for us. And what we'll do today is go</span> <span
  m='46000'>inside the digital gate.</span> </p><p><span m='66000'>Let's do a
  quick review. We began life by observing</span> <span m='71000'>nature. We
  said those Maxwell's</span> <span m='74000'>equations are tough. Let's
  simplify our lives by</span> <span m='79000'>discretizing or lumping matter.
  So we got the lumped circuit</span> <span m='85000'>abstraction. Then we had
  this noise problem</span> <span m='90000'>here. In order to be able to
  handle</span> <span m='95000'>that let's do some more discretization,</span>
  <span m='99000'>some more lumping. So we said let's discretize</span> <span
  m='103000'>values and deal with two levels, a high and a low.</span>
  </p><p><span m='109000'>That's where the binary voltage levels come up,</span>
  <span m='113000'>a high level and a low level. And then we said that in</span>
  <span m='119000'>discretizing it we have to make some assumptions.</span>
  </p><p><span m='123000'>We have to impose some constraints on
  ourselves.</span> </p><p><span m='126000'>Just as with the lumped matter
  discipline, we imposed a couple</span> <span m='130000'>of constraints in
  going from the continuous matter world to a</span> <span m='134000'>lumped
  matter world. Similarly, we have to impose</span> <span m='138000'>some
  discipline on ourselves, some constraints on ourselves</span> <span
  m='142000'>in going from the continuous value regime to the digital</span>
  <span m='146000'>value regime. And that discipline is called</span> <span
  m='149000'>the static discipline.</span> </p><p><span m='158000'>And what the
  static discipline says is that if you have senders</span> <span m='164000'>and
  receivers in a digital system then they all need to</span> <span
  m='170000'>adhere to some standard. If I was a sender I had to</span> <span
  m='175000'>adhere to some tough output standards.</span> </p><p><span
  m='180000'>I had to be sure to shift values that exceeded some high</span>
  <span m='185000'>voltage threshold. And if I was sending a low</span> <span
  m='190000'>value I had to make sure my values were lower than some</span>
  <span m='196000'>output low voltage threshold. Similarly, if I was the</span>
  <span m='202000'>receiver then I had to guarantee to recognize as a one
  all</span> <span m='208000'>voltages that where above some input high voltage
  threshold.</span> </p><p><span m='216000'>And similarly I had to guarantee to
  recognize as a zero</span> <span m='220000'>voltages that were below some
  input low voltage threshold.</span> </p><p><span m='226000'>So provided
  senders and receivers in a system adhere to</span> <span m='231000'>these
  voltage levels, to this discipline then they</span> <span m='235000'>would all
  very comfortably work correctly in a digital system.</span> </p><p><span
  m='242000'>Then we also said that once you deal with such values,</span> <span
  m='246000'>one you deal with digital values we can now postulate a</span>
  <span m='250000'>bunch of digital elements that process these values in a
  manner</span> <span m='255000'>very reminiscent of our analog circuits where
  we get analog</span> <span m='260000'>signals. And you've already learned
  how</span> <span m='263000'>to process analog signals. You've learned about
  resistor</span> <span m='267000'>dividers and so on and so forth. You feed in
  an analog signal</span> <span m='273000'>and you get an output analog signal
  as well.</span> </p><p><span m='277000'>Now, here the resistor in the analog
  domain,</span> <span m='281000'>elements like resistors and voltage sources
  were the symbols</span> <span m='286000'>that you dealt with. Here, in the
  digital domain,</span> <span m='291000'>the primitive elements that we will be
  using are called gates.</span> </p><p><span m='298000'>As one example, this is
  called the NAND gate.</span> </p><p><span m='302000'>So we looked at the AND
  gate in the previous lecture.</span> </p><p><span m='308000'>This is an
  example of another gate called the NAND gate.</span> </p><p><span
  m='313000'>The NAND gate has the following truth table.</span> </p><p><span
  m='318000'>Our two inputs A and B and this output C.</span> </p><p><span
  m='322000'>And the NAND gate works as follows.</span> </p><p><span
  m='326000'>The output -- In English I can describe its</span> <span
  m='331000'>properties as the output is a high at all times when at
  least</span> <span m='337000'>one of these inputs is a low value.</span>
  </p><p><span m='340000'>So it's high whenever at least one input is a
  low.</span> </p><p><span m='345000'>So it's high here. It's high here.</span>
  </p><p><span m='348000'>Oops, it's high here, high here.</span> </p><p><span
  m='351000'>And when, oops. And when both inputs are a high</span> <span
  m='355000'>the output is a low. This is a NAND gate.</span> </p><p><span
  m='360000'>Notice that these are exactly complimentary to the AND gate.</span>
  </p><p><span m='365000'>The AND gate outputs were 0-0-0-1.</span> </p><p><span
  m='368000'>And the AND gate symbol looked like this.</span> </p><p><span
  m='371000'>In general, notice that this little bubble here,</span> <span
  m='375000'>it's called a bubble. That bubble implies a negation,</span> <span
  m='380000'>an inversion. So we take the AND gate,</span> <span
  m='383000'>invert the output and negate the output and you get the NAND</span>
  <span m='388000'>gate. So these elements are</span> <span
  m='392000'>combinational gates. And in combinational gates they</span> <span
  m='397000'>adhere to two properties. One is that they must satisfy</span>
  <span m='402000'>the static discipline.</span> </p><p><span m='410000'>All the
  systems, all the elements in our</span> <span m='412000'>repertoire in the
  digital domain need to satisfy the static</span> <span m='416000'>discipline.
  And the properties of a</span> <span m='418000'>combinational gate are that
  its outputs are a function of inputs</span> <span m='423000'>alone.</span>
  </p><p><span m='433000'>In other words, it doesn't store any state or</span>
  <span m='436000'>doesn't store any history inside it.</span> </p><p><span
  m='438000'>You can figure out its output just by looking at the inputs
  at</span> <span m='443000'>that instant. Think of it as a completely</span>
  <span m='446000'>transparent entity where its output reflects some function
  of</span> <span m='450000'>the inputs at every instant of time.</span>
  </p><p><span m='464000'>So I'll show you an example of a digital
  circuit.</span> </p><p><span m='473000'>So much as I could interconnect
  resistors and voltage sources</span> <span m='476000'>and current sources to
  build analog circuits,</span> <span m='478000'>I can now build digital
  circuits using primitive</span> <span m='481000'>elements such as these. So,
  for example,</span> <span m='484000'>I could build a simple circuit that
  looked like this,</span> <span m='491000'>two inputs A and B here, I get an
  output.</span> </p><p><span m='496000'>And I feed that to another NAND gate
  with another input C.</span> </p><p><span m='503000'>This device is called an
  inverter.</span> </p><p><span m='508000'>The inverter simply flips the sense
  of the input.</span> </p><p><span m='511000'>So if C is a 1 the output is a 0,
  if C is a 0 the output</span> <span m='516000'>becomes a 1. It's an
  inverter.</span> </p><p><span m='518000'>It simply inverts its input. Yet
  another primitive device.</span> </p><p><span m='522000'>And this is my output
  D. So there are three gates in</span> <span m='526000'>this design. And I can
  quickly write down</span> <span m='530000'>what the output looks like using
  some very simple Boolean algebra</span> <span m='535000'>or dealing with
  Boolean values here.</span> </p><p><span m='539000'>So for AND gate the output
  is A and B.</span> </p><p><span m='543000'>Remember dot is a short form for
  and.</span> </p><p><span m='547000'>But there's a negation, inversion, so
  represent</span> <span m='552000'>inversions with a bar. So my output is A dot
  B bar.</span> </p><p><span m='557000'>There is a C here. So this is my output
  C bar.</span> </p><p><span m='562000'>And this is a NAND gate. So it takes one
  input A dot B.</span> </p><p><span m='570000'>It takes the second input C bar
  and ANDs those and inverts them.</span> </p><p><span m='576000'>So that's the
  output. So there are three gates in</span> <span m='580000'>this example. So
  you can think of building</span> <span m='584000'>very complicated circuits
  containing large numbers of</span> <span m='589000'>gates. In fact, the
  microprocessors</span> <span m='593000'>that you use in your laptop contain a
  large number of gates.</span> </p><p><span m='600000'>Can someone guess how
  many gates are in the Pentium IV,</span> <span m='608000'>roughly?
  Approximate,</span> <span m='611000'>how many? How many gates in a Pentium
  IV?</span> </p><p><span m='617000'>40 million. 100 million.</span>
  </p><p><span m='621000'>In the Pentium IV you have on the order of 20 million
  gates.</span> </p><p><span m='632000'>20 million gates in the Pentium
  IV.</span> </p><p><span m='635000'>And life begins in 002. Here you learn
  about onsies and</span> <span m='641000'>twosies, and in the real world you
  will be dealing with tens of</span> <span m='647000'>millions of gates. But
  this is for the Pentium IV.</span> </p><p><span m='652000'>My research group
  at Laboratory for Computer Science built a</span> <span m='658000'>chip called
  the Raw chip. And this chip has 3 million</span> <span m='664000'>gates. And
  so there are several</span> <span m='667000'>undergraduate students involved
  in this project in their third</span> <span m='672000'>year, and they're
  beginning to deal with millions of gates.</span> </p><p><span m='677000'>So
  the key thing to remember is that 002 provides the</span> <span
  m='682000'>foundations where you make the switch from the analog signal
  to</span> <span m='687000'>the digital signal or from continuous matter to
  lumped</span> <span m='692000'>matter. And learn about the foundations</span>
  <span m='696000'>of these primitive elements. And by the end of this
  course</span> <span m='700000'>you will begin dealing with small
  systems,</span> <span m='703000'>analog systems that contain on the order of
  10 to 20 primitive</span> <span m='708000'>elements. You will also begin
  dealing</span> <span m='711000'>with small digital systems that contain tens
  of gates.</span> </p><p><span m='715000'>In your final project you will build
  a mixed signal circuit</span> <span m='719000'>involving an audio playback
  system.</span> </p><p><span m='723000'>You will have digital data stored in a
  memory chip and you</span> <span m='726000'>will build a circuit to extract
  that data, filter it and then</span> <span m='730000'>convert it to the analog
  domain and then play it on a set of</span> <span m='734000'>speakers. And that
  has on the order of</span> <span m='737000'>about 50 to 100 primitive
  elements.</span> </p><p><span m='739000'>So by the end of 002 you will have
  learned to deal with</span> <span m='743000'>hundreds of elements. And then
  you will take other</span> <span m='746000'>courses like 004 and so on where
  you will then make the leap to</span> <span m='750000'>learn further
  abstractions that will take you from subsystems to</span> <span
  m='754000'>systems with millions of gates. So the key is to manage the</span>
  <span m='759000'>complexity of dealing with millions of gates it's all
  about</span> <span m='763000'>abstractions. You have to build
  abstractions</span> <span m='767000'>and double abstractions so you can deal
  with complexity.</span> </p><p><span m='770000'>So the rest of EECS will take
  you from three gates to 20</span> <span m='774000'>million gates and software
  systems that operate on 20</span> <span m='778000'>million gates or whatever.
  So there is still a ways to go.</span> </p><p><span m='783000'>Lorenzo, our
  friend has gone to bring a demonstration that we</span> <span
  m='789000'>forgot to bring today. That will show you that little</span> <span
  m='794000'>digital circuit in a mock up form.</span> </p><p><span
  m='797000'>So what's today's lecture about?</span> </p><p><span
  m='800000'>Today's lecture is going to be about what's inside a gate?</span>
  </p><p><span m='815000'>How to build a gate. Once you build a gate you
  can</span> <span m='818000'>then put millions of them into computer systems or
  analog</span> <span m='822000'>systems or other sorts of systems.</span>
  </p><p><span m='824000'>And what we'll do here is understand what's inside
  this</span> <span m='828000'>abstraction. This is an abstract element</span>
  <span m='831000'>that looks like a little circle and a line with some
  stuff</span> <span m='835000'>inside it, with some properties. But someone's
  got to build</span> <span m='839000'>that. It doesn't come from nature.</span>
  </p><p><span m='842000'>You don't go and harvest gates from trees, you got to
  go build</span> <span m='846000'>that, and someone has got to do that.</span>
  </p><p><span m='848000'>So what to learn here is how do we go about building a
  gate?</span> </p><p><span m='852000'>And here you will see practically how do
  you deal with</span> <span m='855000'>voltage thresholds that satisfy a given
  static discipline?</span> </p><p><span m='858000'>So before I jump into
  building a gate, let me try to build up</span> <span m='862000'>some
  intuition. As is my usual practice,</span> <span m='864000'>I'd love to get
  you to build some intuition as to how to</span> <span m='868000'>build a gate.
  And then we'll go through the</span> <span m='873000'>mechanics of doing it.
  So to build intuition,</span> <span m='878000'>let me show you an analogous
  situation in fluids.</span> </p><p><span m='884000'>So let's say I have a
  cauldron of water.</span> </p><p><span m='888000'>This is like a power supply.
  And I need to feed this fluid</span> <span m='895000'>down at some output
  source. And what I do in the middle is</span> <span m='903000'>put in a couple
  of taps, faucets, all right?</span> </p><p><span m='909000'>And so what do
  these guys do? Under what condition do you</span> <span m='916000'>have fluid
  flow out of the tube at the other end?</span> </p><p><span m='923000'>You will
  have fluid flow if -- So let me call this A and B.</span> </p><p><span
  m='935000'>If A is on and B is on then C has water.</span> </p><p><span
  m='945000'>Otherwise, if both A and B are not on then C has no water.</span>
  </p><p><span m='962000'>So this is already beginning to sound like a AND
  gate,</span> <span m='966000'>correct, where you get water only if A and B are
  both turned</span> <span m='971000'>on. So we're going to use this</span>
  <span m='974000'>insight, a stream of some flow and I put things to obstruct
  the</span> <span m='979000'>flow. And when both the obstructions</span> <span
  m='982000'>are lifted I get the output. I want to use that intuition to</span>
  <span m='987000'>build an AND gate. Similarly, I could build a</span> <span
  m='993000'>system that allows me to build the following structure --</span>
  <span m='1018000'>So in this scenario let me call this --</span> <span
  m='1027000'>-- the signal of A and B here. And in this situation under</span>
  <span m='1031000'>what conditions, provided the power supply has</span> <span
  m='1034000'>water, under what conditions do I get water out?</span>
  </p><p><span m='1037000'>In this situation, it is I get water if A or B
  are</span> <span m='1041000'>turned on. So I don't need to turn both A</span>
  <span m='1044000'>and B on. If either one of them is on,</span> <span
  m='1046000'>I'm going to get fluid flow here.</span> </p><p><span
  m='1050000'>So this will help us build the inside to build the OR gate.</span>
  </p><p><span m='1056000'>So that's an analogy involving items we see in
  everyday life.</span> </p><p><span m='1063000'>Let me now move into the
  electrical domain.</span> </p><p><span m='1068000'>In the electrical domain my
  analogy would be something like</span> <span m='1075000'>this. Let's say I
  have a power supply</span> <span m='1079000'>and I have two switches A and B.
  And I build a little circuit</span> <span m='1086000'>that connects this
  voltage source across the bulb using a</span> <span m='1090000'>couple of
  switches. In this case,</span> <span m='1093000'>the bulb is on if both
  switches A and B are on.</span> </p><p><span m='1097000'>My bulb turns on. If
  I switch either one of them</span> <span m='1100000'>off my bulb turns off. So
  notice that I can begin</span> <span m='1104000'>implementing things like this
  if I had this element.</span> </p><p><span m='1110000'>I had sources already.
  I know how to deal with bulbs.</span> </p><p><span m='1113000'>I model them as
  resistors. So I need to do something about</span> <span m='1118000'>this new
  element called a "switch".</span> </p><p><span m='1120000'>So let me build an
  abstract device.</span> </p><p><span m='1123000'>I'll tell you how to do that
  in real life in a second.</span> </p><p><span m='1127000'>So if I had the
  switch I could build things like this.</span> </p><p><span m='1131000'>I could
  put switches in series in a circuit and get myself</span> <span
  m='1135000'>something that looks like a AND function.</span> </p><p><span
  m='1140000'>So let me go ahead and build an equivalent circuit for a
  switch.</span> </p><p><span m='1147000'>So the switch has a couple of
  terminals here and I have a</span> <span m='1153000'>control. Switches have a
  control and</span> <span m='1157000'>they have a pair of terminals. And the
  equivalent circuit for</span> <span m='1164000'>this looks like this. This is
  for my switch.</span> </p><p><span m='1170000'>So when control is a 0. Then my
  switch is open to give</span> <span m='1177000'>me an open circuit in the
  circuit that I've shown you</span> <span m='1184000'>here. And, by the same
  token,</span> <span m='1188000'>if my control is a 1 then --</span> <span
  m='1203000'>-- I have a connection between in and out.</span> </p><p><span
  m='1206000'>And this is a short circuit. So, in other words,</span> <span
  m='1209000'>if my switch has 0 at its control, I'll talk about how to</span>
  <span m='1213000'>get that, I have an open circuit, and if it's a 1 then
  I</span> <span m='1217000'>have a short circuit. This is a switch going on
  and</span> <span m='1221000'>off. Now, in traditional switches</span> <span
  m='1223000'>mechanical pressure is my control signal.</span> </p><p><span
  m='1226000'>If I apply mechanical pressure my switch could turn on.</span>
  </p><p><span m='1232000'>And if I take away the mechanical pressure then I
  could</span> <span m='1236000'>get an off situation. So let's for now imagine
  that</span> <span m='1241000'>we have a switch. I still haven't told you how
  I</span> <span m='1245000'>am going to get a switch in real life.</span>
  </p><p><span m='1248000'>Let's imagine you have a switch.</span> </p><p><span
  m='1251000'>It's a three terminal device. There's a control thingamajig</span>
  <span m='1257000'>coming in. Input and an output.</span> </p><p><span
  m='1262000'>So let's build the following little circuit containing a</span>
  <span m='1270000'>switch. So what I'm going to do,</span> <span m='1275000'>I
  will take a resistance RL and plug it in here.</span> </p><p><span
  m='1290000'>And connect my power supply like so.</span> </p><p><span
  m='1293000'>So the little circuit that I build has a resistor.</span>
  </p><p><span m='1297000'>And I connect the switch in this pattern and I get a
  VS.</span> </p><p><span m='1302000'>Lorenzo, you can set that up there if
  you'd like.</span> </p><p><span m='1307000'>No problem. So I get a VS
  here.</span> </p><p><span m='1309000'>Now, a couple of lectures ago I told you
  that 6.002,</span> <span m='1314000'>and for that matter, 004 and many of our
  other</span> <span m='1318000'>courses deal with combinations of
  elements.</span> </p><p><span m='1324000'>And we often deal with the same
  kinds of combinations again and</span> <span m='1328000'>again and again. We
  see the same sorts of</span> <span m='1331000'>patterns happening, and we need
  to begin to learn</span> <span m='1334000'>to identify these patterns. This is
  an incredibly common</span> <span m='1338000'>pattern. You'll see this pattern
  more</span> <span m='1341000'>times in 6.002 than any other pattern, I promise
  you.</span> </p><p><span m='1344000'>A power supply connected to a resistor
  and connected to a</span> <span m='1348000'>couple of terminals of some
  interesting device.</span> </p><p><span m='1353000'>I promise there will be at
  least one such pattern on the</span> <span m='1356000'>quiz, for example.
  These patterns are incredibly</span> <span m='1359000'>common. So let's take a
  look at the</span> <span m='1361000'>interesting properties of this
  pattern.</span> </p><p><span m='1363000'>Since this pattern occurs so
  commonly, I am going to create a</span> <span m='1367000'>short form. I have
  already created a short</span> <span m='1370000'>form which is this ground
  node here.</span> </p><p><span m='1372000'>By putting ground 0 all I'm really
  saying is that there is a</span> <span m='1376000'>wire connecting these two
  and that's my ground.</span> </p><p><span m='1380000'>So I already have a
  short form here.</span> </p><p><span m='1382000'>My second short form is when
  I connect a power supply to a</span> <span m='1386000'>node. Then what I'm
  going to do is</span> <span m='1389000'>come up with yet another short form
  that looks like this,</span> <span m='1393000'>an up arrow with the voltage
  written there.</span> </p><p><span m='1396000'>This symbol simply says that
  this node is connected to a</span> <span m='1400000'>power supply with
  voltage, or a voltage source voltage VS.</span> </p><p><span m='1404000'>So I
  just have come up with a slightly simpler representation</span> <span
  m='1409000'>for the little pattern that I have.</span> </p><p><span
  m='1413000'>Now let's take a look at the properties of this little</span>
  <span m='1417000'>system. Let's first look at what</span> <span
  m='1420000'>happens when C is 0. When C is 0,</span> <span m='1422000'>let me
  draw the equivalent circuit for this using the open</span> <span
  m='1427000'>circuit out there.</span> </p><p><span m='1440000'>That's what I
  get, OK?</span> </p><p><span m='1442000'>So when C is 0, if VS is a high
  voltage,</span> <span m='1446000'>let's say 5 volts, what do you expect at
  the</span> <span m='1451000'>output if C is a 0? This voltage VS appears at
  V</span> <span m='1456000'>out because this is an open circuit here.</span>
  </p><p><span m='1461000'>Remember, RL and this little device form a voltage
  divider.</span> </p><p><span m='1469000'>But since it's an open circuit its
  resistance is infinity.</span> </p><p><span m='1474000'>And so therefore in
  this resistor divider all the voltage</span> <span m='1480000'>falls across
  this open circuit. So, in this case,</span> <span m='1484000'>v out is a 1 or
  a high voltage. But let's take a look at what</span> <span m='1490000'>happens
  when C is a 1. In this situation,</span> <span m='1494000'>I have my RL,
  that's what I have.</span> </p><p><span m='1499000'>It's a short circuit at
  the switch and C is a 1.</span> </p><p><span m='1503000'>So what's the voltage
  v out in this case?</span> </p><p><span m='1507000'>Not surprisingly, since
  I've shorted this node to</span> <span m='1512000'>ground the voltage at this
  point is 0.</span> </p><p><span m='1516000'>So if I have low voltage that's
  corresponding to logical 0s that</span> <span m='1523000'>corresponds to a 0.
  So I can build a simple truth</span> <span m='1529000'>table for C and use
  logical symbols here.</span> </p><p><span m='1534000'>So when C is a 0 I get a
  high at the output and when C is 1 I</span> <span m='1542000'>get a low at the
  output. Have you seen a device that</span> <span m='1549000'>behaves like this
  so far? That's a little inverter.</span> </p><p><span m='1555000'>That's the
  exact behavior of an inverter.</span> </p><p><span m='1562000'>So this thing
  I've written here is a truth table for an</span> <span m='1566000'>inverter.
  So notice with just a simple</span> <span m='1569000'>little switch and a
  resistor, I have managed to build an</span> <span m='1573000'>inverter. Before
  I go on,</span> <span m='1575000'>I guess we have some things to show
  you.</span> </p><p><span m='1578000'>And let me pause for a couple of seconds
  and do that.</span> </p><p><span m='1583000'>First of all, what I want to show
  you is the</span> <span m='1586000'>following idea. So as I was preparing for
  this</span> <span m='1590000'>lecture last night I said, now here I am telling
  the 6.002</span> <span m='1594000'>gang that you need to learn about analog
  circuits and</span> <span m='1598000'>resistors and all of that stuff, and you
  also need to learn</span> <span m='1601000'>about digital systems and all of
  that stuff.</span> </p><p><span m='1604000'>And I said, because these two are
  very commonplace and often</span> <span m='1608000'>times they occur together.
  So I said well,</span> <span m='1611000'>if I really believe in my own BS then
  there should be</span> <span m='1614000'>something around me where I can find
  both of them</span> <span m='1617000'>instantaneously. So I said let me do
  the</span> <span m='1621000'>following experiment. Let me close my eyes and
  reach</span> <span m='1625000'>out and see what I touch. So I closed my
  eyes,</span> <span m='1629000'>reached out, and guess what?</span>
  </p><p><span m='1631000'>I touched the lonely mouse. The mouse.</span>
  </p><p><span m='1634000'>So I said let me see what is in side the
  mouse.</span> </p><p><span m='1637000'>And if I believe in my BS we should
  find analog,</span> <span m='1641000'>little components and digital components
  in there,</span> <span m='1645000'>right? So let's see what is inside
  the</span> <span m='1648000'>mouse. All right.</span> </p><p><span
  m='1651000'>There we go. Don't try this at home,</span> <span m='1654000'>as
  with many other things we do in lecture.</span> </p><p><span m='1672000'>Come
  on. Show me what I want to see.</span> </p><p><span m='1676000'>OK, here we
  go. Not bad.</span> </p><p><span m='1680000'>Let me show you what we have here
  in this poor shattered</span> <span m='1686000'>mouse. That's my
  finger,</span> <span m='1689000'>silly. You should recognize this</span> <span
  m='1692000'>little resistor here. That thing with the little</span> <span
  m='1698000'>bands, oh, here we go. We'll use this.</span> </p><p><span
  m='1702000'>That's a resistor. And you'll see capacitors in</span> <span
  m='1707000'>about four weeks. That's a capacitor.</span> </p><p><span
  m='1712000'>And there is a digital IC here. That's a digital IC.</span>
  </p><p><span m='1716000'>That contains a bunch of gates inside it.</span>
  </p><p><span m='1719000'>So this mouse has not made a liar out of me.</span>
  </p><p><span m='1722000'>So what I just showed you was a little device that we
  use in</span> <span m='1727000'>everyday life that has both analog components
  and digital</span> <span m='1731000'>components. A large number of devices
  that</span> <span m='1735000'>we use in daily life are this way.</span>
  </p><p><span m='1737000'>You can do the same thing to your laptop.</span>
  </p><p><span m='1742000'>You could go try it out. And you will find a bunch
  of</span> <span m='1746000'>analog components and a bunch of digital
  components.</span> </p><p><span m='1750000'>And you really, really need to
  understand the</span> <span m='1753000'>whole caboodle here. Let me show you a
  fun little</span> <span m='1757000'>demo involving gates. Now, I want you to
  be very</span> <span m='1761000'>careful here. Lots of caveats here.</span>
  </p><p><span m='1763000'>If your grandmother asks you how big is a gate don't
  say this</span> <span m='1768000'>big. This is how big gates used to</span>
  <span m='1772000'>be, I would say, when they were first invented.</span>
  </p><p><span m='1775000'>When they built gates out of discrete vacuum tubes
  and so on,</span> <span m='1780000'>this is how big a gate used to be.</span>
  </p><p><span m='1783000'>This is roughly that big. Today in a chip,</span>
  <span m='1786000'>in a small VLSI, very large scaled integrated</span> <span
  m='1789000'>circuit in a chip, which is about 1 cm on the</span> <span
  m='1793000'>side, how many gates do you think I can fit in a thumbnail</span>
  <span m='1797000'>sized chip? Any guesses?</span> </p><p><span
  m='1801000'>With today's technology, how many gates can I fit on a</span>
  <span m='1805000'>chip? It has to be more than a</span> <span
  m='1807000'>million because I just told you that Pentium IV was 20
  million</span> <span m='1813000'>and that was a year ago. How many?</span>
  </p><p><span m='1815000'>40 million is a good guess. So on the order of 40 to
  80</span> <span m='1820000'>million gates in a 1 square centimeter.</span>
  </p><p><span m='1823000'>Intel just announced that they will be shipping a
  chip</span> <span m='1828000'>containing 1 billion switches. Remember, this
  whole thing is a</span> <span m='1834000'>gate, right? Inverter, a resistor
  and a</span> <span m='1836000'>switch. This thing is a switch.</span>
  </p><p><span m='1839000'>So Intel is going to be shipping something containing
  a</span> <span m='1843000'>billion of those little elements.</span>
  </p><p><span m='1845000'>Just keep those large numbers in mind.</span>
  </p><p><span m='1848000'>So here is a little circuit that I showed you
  here,</span> <span m='1851000'>A, B, the NAND gate, the NAND gate at the
  output and</span> <span m='1855000'>the inverter. So this output A is going to
  be</span> <span m='1858000'>1 whenever either A or B is off. So the output is
  a 1 in this</span> <span m='1864000'>case when both A and B are off. I turn A
  to 1,</span> <span m='1867000'>output is still a 1. So the moment I turn both
  of</span> <span m='1871000'>these inputs into a 1, these are 1s,</span> <span
  m='1873000'>the output goes to 0. That's behavior for NAND gate.</span>
  </p><p><span m='1877000'>If I switch any one of the inputs to a 0 the output
  should</span> <span m='1881000'>go to a 1. Similarly, for the inverter</span>
  <span m='1884000'>here, when the input is a 0 the output is a 1.</span>
  </p><p><span m='1889000'>And when I switch it so should the output.</span>
  </p><p><span m='1892000'>Now imagine a circuit, a little chip
  containing</span> <span m='1895000'>billions of these devices. And just
  imagine all of these</span> <span m='1899000'>1s and 0s flying around. So one
  simple switch in the</span> <span m='1903000'>input, like a click of a
  keystroke could actually cause a</span> <span m='1907000'>billion signals in
  your circuit to be flipping around.</span> </p><p><span m='1911000'>And that
  causes some fun stuff to happen, which we will learn</span> <span
  m='1916000'>about a few months from now. But for now that's a quick
  show</span> <span m='1920000'>of a little circuit that looks like that.</span>
  </p><p><span m='1925000'>Let me go back to talking about building other types
  of gates.</span> </p><p><span m='1942000'>So that was an inverter. So now you
  know.</span> </p><p><span m='1945000'>You're almost halfway to being able to
  build a Pentium IV.</span> </p><p><span m='1950000'>You've come all the way
  from nature to gates.</span> </p><p><span m='1955000'>And Pentium IV contains
  20 million of them so you now know</span> <span m='1959000'>how gates are
  built. So that's an inverter.</span> </p><p><span m='1962000'>Let's look at
  how we can build other forms of gates.</span> </p><p><span m='1965000'>To
  build another gate let me do this.</span> </p><p><span m='1979000'>How about
  this pattern? If I build a pattern like this</span> <span m='1984000'>with A
  and B coming in here and I put two switches with their</span> <span
  m='1991000'>inputs in and out, so two switches in series.</span> </p><p><span
  m='1996000'>Let's write down the truth table for what this looks like.</span>
  </p><p><span m='2002000'>Let's see. When A and B are both 0,</span> <span
  m='2006000'>what should the output be? These are both off so the</span> <span
  m='2011000'>output is directly VS which is a high.</span> </p><p><span
  m='2014000'>When either of these switches is off 0-1 or 1-0.</span>
  </p><p><span m='2018000'>If either switch is off then this node is cut off
  from</span> <span m='2022000'>ground. There is no current flowing</span> <span
  m='2024000'>here. So this entire voltage drops</span> <span m='2027000'>across
  this infinite resistance here, and so I get 1s at the</span> <span
  m='2031000'>output as well. If both switches are on what</span> <span
  m='2035000'>happens? If both A and B are on then I</span> <span
  m='2037000'>get a short circuit to ground and my output is a 0.</span>
  </p><p><span m='2043000'>So can someone tell me what gate this is?</span>
  </p><p><span m='2046000'>Awesome. We just build a NAND gate.</span>
  </p><p><span m='2049000'>This is unbelievable. Five lectures and you've</span>
  <span m='2052000'>already come all the way from nature to the primitive
  building</span> <span m='2058000'>blocks of microprocessors. It's pretty
  amazing.</span> </p><p><span m='2061000'>So what about this one here?</span>
  </p><p><span m='2074000'>What's this? I haven't told you this before</span>
  <span m='2078000'>but if an AND gate becomes a NAND gate, this is kind of an
  OR</span> <span m='2085000'>arrangement, what should an OR become?</span>
  </p><p><span m='2089000'>NOR. It's all completely logical.</span> </p><p><span
  m='2093000'>So you can go home and practice a truth table for this.</span>
  </p><p><span m='2100000'>A, B and C. I'll just fill in one of the</span> <span
  m='2103000'>rows. So in this particular</span> <span m='2105000'>situation, if
  both A and B are 0, if A is 0 and B is 0,</span> <span m='2109000'>both the
  switches are off, so it's as if this little</span> <span m='2113000'>sucker
  here is cut off from ground and VS falls across from</span> <span
  m='2117000'>C to ground here and the output is a 1, so on and so forth.</span>
  </p><p><span m='2122000'>So I can build other interesting forms of
  gates.</span> </p><p><span m='2125000'>So let's say I build something that
  looks like this.</span> </p><p><span m='2141000'>I build something like
  this.</span> </p><p><span m='2148000'>You can write the truth table for this
  or you can look at this</span> <span m='2153000'>and write down the function
  that this one supports.</span> </p><p><span m='2157000'>Notice that this
  output here is going to be a high only when</span> <span m='2162000'>both of
  these are not connected to ground.</span> </p><p><span m='2167000'>And if you
  stare at it some more the function this one</span> <span m='2171000'>presents,
  this is my AND function.</span> </p><p><span m='2174000'>Suppose this one
  didn't exist, that would be my AND function.</span> </p><p><span
  m='2179000'>But because this one exists that's in an OR configuration</span>
  <span m='2184000'>and so I get a C. And so because of that I get</span> <span
  m='2188000'>something that looks like this. So this is my A dot B,</span>
  <span m='2193000'>this is my plus because of a parallel here,</span> <span
  m='2196000'>and ultimately this caused an inversion in this gate.</span>
  </p><p><span m='2200000'>So the primitive pattern has a generic inversion
  built into the</span> <span m='2205000'>output. That is why they commonly
  end</span> <span m='2207000'>up building NAND gates and NOR gates and so on as
  the simplest</span> <span m='2212000'>gates. We don't build AND gates and
  OR</span> <span m='2214000'>gates. How can I convert this one to</span> <span
  m='2217000'>an AND gate? Anybody?</span> </p><p><span m='2220000'>Put an
  inverter on the output. So what I can do is take this</span> <span
  m='2224000'>little sucker here, put an inverter here and I get</span> <span
  m='2227000'>an AND gate. So the real primitives in</span> <span
  m='2230000'>circuits tend to be NANDs and NORs.</span> </p><p><span
  m='2238000'>OK. So the real practical among you</span> <span
  m='2241000'>should be saying at this point all right, all right,</span> <span
  m='2245000'>I buy this, if there existed a switch.</span> </p><p><span
  m='2248000'>I know exactly how to go from nature to building Pentium
  IVs</span> <span m='2254000'>if there exists a switch. So that the obvious
  next step</span> <span m='2259000'>for me is to show you a switch, a physical
  switch device.</span> </p><p><span m='2263000'>And to introduce a switch
  device, let me show you a three</span> <span m='2267000'>terminal element.
  Remember, the switch has three</span> <span m='2271000'>terminals, an input,
  output and something called the</span> <span m='2275000'>control, C. So I'm
  going to introduce a new</span> <span m='2278000'>primitive element called
  "The MOSFET Device".</span> </p><p><span m='2283000'>MOSFET stands for
  metal-oxide semiconductor field-effect</span> <span m='2288000'>transistor.
  This is shortened to FET or</span> <span m='2292000'>transistor. Now I'm going
  to show you that</span> <span m='2296000'>this works like a switch. And before
  I do that,</span> <span m='2301000'>in fact, let me do that first. Then I'll
  show you something</span> <span m='2307000'>else. So this device has
  the</span> <span m='2310000'>following symbol. It has a terminal called
  a</span> <span m='2315000'>gate, the drain and the source. Gate, drain and
  source.</span> </p><p><span m='2321000'>Three terminals. This is the primitive
  element</span> <span m='2326000'>that forms virtually every electronic
  component built</span> <span m='2332000'>today. This is the foundation of
  the</span> <span m='2336000'>universe. So this little MOSFET device,</span>
  <span m='2340000'>we can look at how it behaves. I'll show you this thing on
  the</span> <span m='2346000'>screen in a second, but this guy behaves very
  much</span> <span m='2351000'>like this device I was postulating
  earlier.</span> </p><p><span m='2356000'>Let's take a look at this device on
  the scope.</span> </p><p><span m='2360000'>To do so let me label some voltages
  and currents.</span> </p><p><span m='2365000'>So let me label this voltage as
  vDS.</span> </p><p><span m='2370000'>Let me label this voltage as vGS between
  the gate and the</span> <span m='2374000'>source. And let me label the
  current</span> <span m='2378000'>coming into this node iG. In this
  device,</span> <span m='2381000'>the physical device that I'm going to show
  you,</span> <span m='2385000'>the current going into the gate is always
  0.</span> </p><p><span m='2389000'>So iG is always going to be 0 for
  6.002.</span> </p><p><span m='2392000'>In real life there is some leakage and
  so on.</span> </p><p><span m='2398000'>But in 6.002 for now we deal with a
  very simple abstract</span> <span m='2402000'>model, iG is 0. And let me label
  the current</span> <span m='2406000'>here as iDS. To be correct with
  the</span> <span m='2409000'>nomenclation, the current into node D
  should</span> <span m='2413000'>be labeled iD, but because iG is 0 iD
  flows</span> <span m='2416000'>out through the source as well, so I would
  simply call it iDS</span> <span m='2421000'>just so that I can show that vDS
  and iDS are the two voltages and</span> <span m='2427000'>currents that I am
  going to deal with.</span> </p><p><span m='2432000'>So that's my little device
  here.</span> </p><p><span m='2434000'>And notice that the source terminal is
  common.</span> </p><p><span m='2438000'>I use the source both for the control
  GS and I use the source</span> <span m='2442000'>for the drain as well. So you
  can view this as input,</span> <span m='2447000'>view this as out, and you can
  view this,</span> <span m='2450000'>if you like, as the control
  abstractly.</span> </p><p><span m='2453000'>So let me show you a plot of how
  this behaves.</span> </p><p><span m='2458000'>To understand how it behaves, I
  can draw an equivalent</span> <span m='2463000'>circuit for it. So in this
  particular</span> <span m='2466000'>situation, if its behavior is
  characterized by the voltage</span> <span m='2472000'>applied to vGS. Much
  like the control on the</span> <span m='2476000'>switch, vGS is my control. So
  if vGS is 0,</span> <span m='2480000'>oh, I'm sorry. If vGS is greater than or
  equal</span> <span m='2484000'>to some threshold voltage VT -- So vGS, the
  voltage applied</span> <span m='2491000'>here is greater than some voltage,
  VT, a threshold</span> <span m='2494000'>voltage, or the pressure of the
  switch is greater than some</span> <span m='2499000'>threshold pressure then
  this guy behaves like a short circuit.</span> </p><p><span m='2504000'>This is
  iDS, this is my drain and this is my</span> <span m='2507000'>source. So if
  the voltage applied</span> <span m='2510000'>between the gate and the source
  is higher than some threshold</span> <span m='2514000'>then this behaves like
  a short circuit.</span> </p><p><span m='2519000'>Similarly, if the voltage vGS
  is less than some threshold VT</span> <span m='2524000'>then in that situation
  --</span> <span m='2533000'>-- I get an open circuit. And when I have an open
  circuit</span> <span m='2537000'>between D and S then the current iDS is going
  to be 0.</span> </p><p><span m='2541000'>So this is the idealized model. And
  this idealized model is</span> <span m='2546000'>called "the switch model of
  the MOSFET".</span> </p><p><span m='2550000'>The switch model or the S model
  of the MOSFET.</span> </p><p><span m='2554000'>Well, if you want to see the
  internals of the MOSFET,</span> <span m='2559000'>I won't cover that in
  lecture or recitation.</span> </p><p><span m='2563000'>You can look at the
  section, I believe Section 6.7 of the</span> <span m='2569000'>course notes.
  That has the internal structure</span> <span m='2573000'>of the MOSFET and how
  you physically construct such a</span> <span m='2579000'>device. So what I can
  do here is step</span> <span m='2582000'>back and stare at the device for a
  second or two.</span> </p><p><span m='2586000'>And what it says is that if I
  apply a lot of pressure,</span> <span m='2589000'>if vGS is greater than a
  threshold VT then I get a short</span> <span m='2593000'>circuit here just
  like my switch.</span> </p><p><span m='2595000'>When in doubt think faucet. If
  you put pressure on the</span> <span m='2598000'>faucet, think of this as
  closing, and when I open it,</span> <span m='2601000'>when vGS goes less than
  VD, less than a threshold,</span> <span m='2605000'>I take off the pressure
  and then it becomes an open circuit.</span> </p><p><span m='2610000'>So I can
  plot the following.</span> </p><p><span m='2619000'>Much like I plotted the iV
  characteristics of two terminal</span> <span m='2623000'>elements, I can plot
  the iV characteristics of this three</span> <span m='2627000'>terminal element
  in the following way.</span> </p><p><span m='2630000'>I can focus on two
  terminals and look at vDS and iDS for that</span> <span m='2635000'>terminal
  pair and draw the curves for how it will behave as</span> <span m='2640000'>I
  change vGS that I applied. So what I'm going to show you</span> <span
  m='2645000'>is that if vGS is less than a threshold then this behaves
  like</span> <span m='2650000'>a open circuit. So no matter what the
  voltage</span> <span m='2653000'>is the current is 0. Similarly, if vGS
  greater than</span> <span m='2657000'>equal to some threshold voltage then I
  get the behavior iV curve</span> <span m='2663000'>of a short circuit where
  the current can be anything and</span> <span m='2667000'>controlled by
  external forces like in any short circuit.</span> </p><p><span m='2673000'>So
  let me show you on the screen.</span> </p><p><span m='2675000'>Lorenzo has
  kindly put the graph up already.</span> </p><p><span m='2678000'>So I'm
  showing the iV curve of a switch.</span> </p><p><span m='2681000'>Notice that
  when vGS is greater than VT, greater than a</span> <span m='2685000'>threshold
  I get the vertical line corresponding to a short</span> <span
  m='2690000'>circuit. Is it this one?</span> </p><p><span m='2692000'>This one.
  There we go.</span> </p><p><span m='2693000'>So what I'm going to do here is
  I'm going to reduce vGS to below</span> <span m='2698000'>VT. What should you
  see happening?</span> </p><p><span m='2702000'>The curve, from being a short
  circuit, should hammer down to</span> <span m='2705000'>becoming an open
  circuit. That's the curve for an open</span> <span m='2709000'>circuit as I
  drew out there for you.</span> </p><p><span m='2711000'>VGS pressure ain't
  enough. Lots of pressure,</span> <span m='2714000'>boom, it's a short circuit.
  I really like to think of this</span> <span m='2718000'>pressure analogy if I
  get confused whenever I look at a</span> <span m='2722000'>MOS transistor and
  I need to look at vGS and so on I always</span> <span m='2726000'>think vGS is
  greater than VT. Lots of pressure on the switch</span> <span m='2730000'>it
  turns on. Just remember that,</span> <span m='2732000'>and then you won't
  forget this vGS thing here.</span> </p><p><span m='2735000'>So that's the
  behavior of a switch.</span> </p><p><span m='2737000'>And so viola, there's
  our switch.</span> </p><p><span m='2745000'>So I've given you a three terminal
  element that is a</span> <span m='2748000'>switch that is controlled like a
  mechanical switch.</span> </p><p><span m='2751000'>So I can build a, if I
  replace --</span> <span m='2762000'>This was my switch earlier. And what I can
  do is replace</span> <span m='2767000'>this with my MOSFET and that's what I
  get.</span> </p><p><span m='2771000'>And I won't bother showing you this is
  your inverter.</span> </p><p><span m='2776000'>All of that has replaced the
  abstract switch with a physical</span> <span m='2782000'>switch which behaves
  as shown in the graph up there.</span> </p><p><span m='2788000'>And so I apply
  an input here and I take the output here.</span> </p><p><span m='2795000'>So
  as 6.002 you could look at this and say ah-ha,</span> <span m='2802000'>that
  is an inverter. When you go to 004 what you</span> <span m='2808000'>will do
  is build this triangle and a circle around it and you</span> <span
  m='2817000'>will ignore what's inside and just look at that.</span>
  </p><p><span m='2825000'>So in 002 we showed you that the internals look like
  a</span> <span m='2828000'>pattern with a MOSFET and a resistor, but it's
  really the</span> <span m='2832000'>abstract inverter looking in from the
  outside.</span> </p><p><span m='2836000'>I'm just going to close the loop
  inside the digital gate,</span> <span m='2840000'>and this was inside your
  little inverter with a resistor and a</span> <span m='2844000'>switch. Let me
  continue with this for a</span> <span m='2847000'>little longer here --</span>
  <span m='2861000'>-- and do something that we like to do a lot,</span> <span
  m='2865000'>which is plot what are called input / output curves.</span>
  </p><p><span m='2870000'>So let's say the voltage applied here is v in and
  let's</span> <span m='2876000'>call this v out. For fun let's plot a v
  in</span> <span m='2880000'>versus v out for this inverter. So when input is a
  0,</span> <span m='2887000'>let's say VT is 1 volt for the inverter.</span>
  </p><p><span m='2891000'>The threshold voltage is 1 volt.</span> </p><p><span
  m='2894000'>The threshold pressure is 1 volt.</span> </p><p><span
  m='2898000'>So when input is a 0, and let's say VS is 5 volts.</span>
  </p><p><span m='2903000'>So when the input is a 0, this guy is turned
  off.</span> </p><p><span m='2910000'>So what's the output? What's the output
  voltage?</span> </p><p><span m='2914000'>If this is turned off, what's the
  output voltage?</span> </p><p><span m='2918000'>It's the supply. The supply
  directly shows up</span> <span m='2922000'>here. And so as long as the input
  is</span> <span m='2925000'>0 the output is at 5 volts. And this is true until
  the</span> <span m='2929000'>input reaches 1 volt. As long as the input is
  less</span> <span m='2934000'>than 1 volt my output stays high.</span>
  </p><p><span m='2938000'>And then when my input exceeds or hits 1 volt then at
  that</span> <span m='2943000'>point the switch turns on and the MOSFET turns
  on and shorts</span> <span m='2949000'>the output to ground in which case
  boom, this is what I get.</span> </p><p><span m='2955000'>And then, no matter
  how much I increase the input,</span> <span m='2959000'>my switch stays on and
  the output follows a zero volts at</span> <span m='2965000'>the output. So
  this is my v in versus v out</span> <span m='2969000'>curve for the inverter.
  One of the interesting things</span> <span m='2976000'>that we do a lot is see
  whether this satisfies some voltage</span> <span m='2982000'>threshold. So
  let's say I have a VOL of</span> <span m='2986000'>0.5 volts, VOH of 4.5, VIL
  of 0.9 and VIH of 4.1</span> <span m='2991000'>volts. So VOL says in its low
  value is</span> <span m='2995000'>the output less than 0.5? Yup, output less
  than 0.5.</span> </p><p><span m='3001000'>In its high is it more than
  4.5?</span> </p><p><span m='3003000'>Yup, it's more than 4.5. Does it
  recognize all values</span> <span m='3008000'>below VIL as a low input?
  Yup.</span> </p><p><span m='3010000'>So anything below 0.9 or 1 for that
  matter is viewed as a low.</span> </p><p><span m='3015000'>That's good. So
  these pass.</span> </p><p><span m='3018000'>And high, anything above 4.1, is
  that treated as a high?</span> </p><p><span m='3022000'>Yes. So anything above
  4.1 is</span> <span m='3025000'>treated as a high and the output goes
  low.</span> </p><p><span m='3030000'>So therefore this inverter that I've
  designed for you here</span> <span m='3034000'>satisfies the static discipline
  and this inverter can be used in</span> <span m='3039000'>circuits or other
  devices that conform to this value here.</span> </p><p><span m='3044000'>In
  your recitation, you will look at a slightly</span> <span m='3048000'>more
  detailed model of the switch where the switch behaves</span> <span
  m='3053000'>like a resistor.</span> </p>
uid: 4f0054f5076b953db7fe572d6d701a2a
type: course
layout: video
---
