---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Superposition, Thévenin and Norton</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec03.jpg
    parent_uid: 5bf128fefa595ece98790a6a90657417
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-3/thumb_lec03.jpg
    title: thumb_lec03.jpg
    type: null
    uid: af45cd2026595e5c4d49fba3df1a568e
  - id: Video-YouTube-Stream
    media_location: RsJ1eg7XNVs
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Video-YouTube-Stream
    type: Video
    uid: 351b5011317e096c121358313c5d86ac
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/RsJ1eg7XNVs/default.jpg'
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: debd06893c89c7a9bf78bb9020290088
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Video-iTunes U-MP4
    type: Video
    uid: 72b37756bd600c14999cfd8fb73ec7cc
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/mit-6.002-lec3-11sep2003-220k.mp4
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Video-Internet Archive-MP4
    type: Video
    uid: a8fd61c0c08efa848dc3f863861e3e38
  - id: Thumbnail-OCW-JPG
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 90e1cc0d85065452921457aeedcc08c8
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: RsJ1eg7XNVs
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2a60f9c03570b10315152535646208f7
  - id: RsJ1eg7XNVs.srt
    parent_uid: 5bf128fefa595ece98790a6a90657417
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-3/RsJ1eg7XNVs.srt
    title: 3play caption file
    type: null
    uid: 8e89d814a5fccbb1e34e3923d67f8942
  - id: RsJ1eg7XNVs.pdf
    parent_uid: 5bf128fefa595ece98790a6a90657417
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-3/RsJ1eg7XNVs.pdf
    title: 3play pdf file
    type: null
    uid: c558f62c35d4e1e22fb4579fb45ea663
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 459c735e129b49de3588883ed8a45c5d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5bf128fefa595ece98790a6a90657417
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b80c84645b34ca6b7534a351455d62ce
inline_embed_id: '20970360lecture3:superposition,théveninandnorton28830798'
order_index: 141
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/5ec9a8524891d6940e4572e1c97b0cf1">PDF</a>)<br />
  Demonstration: Salt water (<a target="_blank" title="Open in a new window."
  href="./resolveuid/a32a4d801b8fbe15490079f4f7fd498c">PDF</a>)</p>
short_url: lecture-3
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-3
title: 'Lecture 3: Superposition, Thévenin and Norton'
transcript: >-
  <p><span m='0'>Let's get started.</span> </p><p><span m='11000'>Can you hear
  me back there? Loud and clear.</span> </p><p><span m='15000'>OK. Let's get
  started.</span> </p><p><span m='18000'>Before I begin, just a couple of
  announcements.</span> </p><p><span m='23000'>Brad Buren is one of our students
  here and he needs a</span> <span m='29000'>note-taker. It's a paid
  position.</span> </p><p><span m='34000'>So if you are interested you can stop
  by after class and see</span> <span m='41000'>him. He's sitting right here
  out</span> <span m='45000'>there, OK? Second, just a reminder that</span>
  <span m='49000'>6.002 does have prerequisites. And the prerequisites are
  8.02</span> <span m='56000'>and 18.03. So with that let me start off</span>
  <span m='61000'>with the usual. Do a quick review of what we've</span> <span
  m='66000'>done so far. So we started out life looking</span> <span
  m='70000'>at the laws of physics and Maxwell's equations and so on.</span>
  </p><p><span m='75000'>And those were way too hard so we said let's make life
  easy for</span> <span m='81000'>ourselves. So we chose to play in this</span>
  <span m='84000'>playground in which we said we shall adhere to the
  lumped</span> <span m='90000'>matter discipline. OK?</span> </p><p><span
  m='93000'>The LMD. So we are in that playground.</span> </p><p><span
  m='96000'>So this entire course, and for that matter large parts</span> <span
  m='100000'>of EECS are within that playground, within which the</span> <span
  m='105000'>lumped matter discipline applies.</span> </p><p><span m='107000'>So
  as soon as we jumped into the playground,</span> <span m='111000'>the LMD
  playground, we could take Maxwell's</span> <span m='114000'>equations and
  abstract them out into two very,</span> <span m='118000'>very simple rules.
  And the very simple rules were</span> <span m='122000'>KVL and KCL. KVL simply
  said that I can sum</span> <span m='128000'>the voltages in any loop in a
  circuit and the result then</span> <span m='133000'>would be zero. Similarly,
  I can sum the</span> <span m='137000'>currents that enter or exit any node and
  the sum will also be</span> <span m='143000'>zero. So what you can now do
  is,</span> <span m='146000'>if you feel like, you can go around and
  brag.</span> </p><p><span m='152000'>Oh, yeah, we use Maxwell's equations in
  everyday life and,</span> <span m='156000'>yeah, it's good stuff. And the key
  is that this is</span> <span m='160000'>really an encapsulation of Maxwell's
  equations within this</span> <span m='164000'>playground that we are in. So I
  talked about the first</span> <span m='168000'>method of circuit analysis in
  the last lecture.</span> </p><p><span m='172000'>And that method simply took
  the, wrote KVL for all the</span> <span m='176000'>loops, wrote KCL for all
  the nodes and wrote element vi</span> <span m='180000'>relationships. And
  together gave you a big</span> <span m='185000'>bunch of equations. And you
  sat down and grunged</span> <span m='190000'>through the equations and you
  solved for branch voltages and</span> <span m='197000'>currents. So we
  reviewed a second method</span> <span m='201000'>of circuit analysis. And I'll
  simply call it circuit</span> <span m='206000'>composition. The basic idea
  behind this</span> <span m='210000'>method was to learn some simple rules of
  how resistors add and</span> <span m='214000'>conductances add and so on and
  so forth and look at a circuit</span> <span m='218000'>and simplify the
  circuit by making series simplifications</span> <span m='222000'>when the
  resistors are in series and so on and so forth,</span> <span m='226000'>and
  compose it and play around with it till we end up with the</span> <span
  m='230000'>current, the voltages that we are looking for.</span> </p><p><span
  m='233000'>This is the intuitive method. And so a section in Chapter 2,</span>
  <span m='238000'>I believe, of the course notes discusses several examples
  using</span> <span m='244000'>this method and attempts to make a little bit
  formal the</span> <span m='249000'>intuitive approach that is applied in this
  method.</span> </p><p><span m='253000'>So we then looked at the node
  method.</span> </p><p><span m='257000'>And the node method was simply a
  particular way of applying KVL</span> <span m='262000'>and KCL. Node
  method,</span> <span m='264000'>remember? We took a ground node.</span>
  </p><p><span m='267000'>Then we labeled the nodes of the remaining voltages
  with</span> <span m='272000'>respect to that ground. Then we wrote KCL for
  each of</span> <span m='279000'>the nodes. And when we wrote KCL for
  each</span> <span m='283000'>of the nodes, remember, KVL was implicit
  in</span> <span m='288000'>this expression that we used for each of the
  currents that were</span> <span m='295000'>exiting each node. So if Ej was a
  node voltage,</span> <span m='301000'>then Ej minus Ei multiplied by the
  conductance Gi was the</span> <span m='307000'>current that was going through
  one of those,</span> <span m='312000'>I should call it Gij. This is a
  conductance that</span> <span m='317000'>connects nodes i and j. That gave us
  the KVL that fed</span> <span m='323000'>into the same system. So these are
  three methods.</span> </p><p><span m='330000'>The node method, by the way, is
  sort of the</span> <span m='333000'>workhorse of the 6.002 industry. And for
  that matter for all of</span> <span m='337000'>the circuits industry. When in
  doubt,</span> <span m='340000'>apply the mode method, you'll be OK.</span>
  </p><p><span m='342000'>That applies to linear circuits, nonlinear
  circuits,</span> <span m='346000'>what have you. What I'm going to do today
  is</span> <span m='349000'>go through two more methods. So notice that the
  first few</span> <span m='353000'>lectures of this course, the first three
  lectures simply</span> <span m='357000'>comprise transitioning you from the
  world of physics to the</span> <span m='361000'>world of EECS. And then two
  lectures on giving</span> <span m='366000'>you a bag of tricks. So we start
  you off with the</span> <span m='370000'>sort of tools, your mallets and
  chisels and so</span> <span m='374000'>on and so forth. And these five methods
  are your</span> <span m='377000'>tools. We'll look at two methods</span> <span
  m='380000'>today. One method is called the method</span> <span m='383000'>of
  superposition and the second method is called the Thevenin</span> <span
  m='388000'>method. And these methods apply only to</span> <span
  m='392000'>linear circuits. So we look at the subset of</span> <span
  m='396000'>circuits that are linear, and these two methods apply to</span>
  <span m='401000'>only those circuits. These are methods that combined</span>
  <span m='406000'>with intuition really enables you to solve very
  interesting</span> <span m='411000'>circuits very, very quickly.</span>
  </p><p><span m='414000'>So let me do an example using a usual node
  method.</span> </p><p><span m='420000'>And then jump into introducing the
  superposition methods and</span> <span m='425000'>Thevenin methods using that
  same example.</span> </p><p><span m='428000'>So let me draw you an example
  circuit here.</span> </p><p><span m='453000'>So, again, I'm using this
  example, I will use this example</span> <span m='457000'>to introduce the
  method of superposition and the Thevenin</span> <span m='461000'>method. So
  what I'm going to do is</span> <span m='463000'>start off the usual way and
  analyze the circuit using a</span> <span m='467000'>method that you know now,
  the node method.</span> </p><p><span m='470000'>And what I'll do is write down
  the node equations for this by</span> <span m='474000'>applying the node
  method. So if you recall the node</span> <span m='478000'>method. I choose a
  ground node.</span> </p><p><span m='481000'>I'm going to choose this node.
  It's got both the voltage</span> <span m='484000'>source connected to it, and
  it's also got many other</span> <span m='488000'>edges impinging on it. So I'm
  going to choose that as</span> <span m='491000'>my ground node and I'm going
  to label the other nodes with their</span> <span m='495000'>voltages. So this
  is an unknown.</span> </p><p><span m='497000'>I'll label it as e. I guess we
  just have one</span> <span m='499000'>unknown e. And I know the voltage of
  this</span> <span m='502000'>node, and that is simply V. Since it's V,</span>
  <span m='504000'>there's a voltage source between the ground node and
  that</span> <span m='508000'>node. So what I can do next is that I</span>
  <span m='512000'>can write down the node equation for this node and then go
  from</span> <span m='518000'>there. So let me go ahead and do that.</span>
  </p><p><span m='522000'>So let me sum up the currents going outside,</span>
  <span m='526000'>going outwards. So I have e minus v divide by</span> <span
  m='530000'>R1, I have e minus zero divide by R2, and I have minus i
  equals</span> <span m='536000'>zero. This is a node equation.</span>
  </p><p><span m='540000'>The first thing I want you to observe is that this
  equation is</span> <span m='546000'>linear in V and i. What I mean by linear
  is that</span> <span m='551000'>you don't see terms like Vi or V-squared and
  things like that.</span> </p><p><span m='557000'>It's some constant times V
  plus some constant times i equals</span> <span m='563000'>some other constant.
  So that's quite nice.</span> </p><p><span m='569000'>So I'm going to rearrange
  the terms in the following manner.</span> </p><p><span m='576000'>I'll move
  the known sources to the right-hand side and collect</span> <span
  m='583000'>the coefficients of e on this side, so I get one by R1 plus</span>
  <span m='590000'>one by R2 over here.</span> </p><p><span m='604000'>So stare
  at this for a moment and notice again here I have e,</span> <span
  m='608000'>my unknown node voltage, there is some constant</span> <span
  m='612000'>multiplier, and that equals some function of V summed up
  with</span> <span m='617000'>some function of i. And, again, notice that this
  is</span> <span m='621000'>a linear combination of V and i. No multiplication
  terms and so</span> <span m='626000'>on and so forth. This is a pretty
  standard form</span> <span m='632000'>in which we will represent equations
  quite often.</span> </p><p><span m='639000'>And just to label it, this is
  often labeled G as the</span> <span m='645000'>conductance matrix. Of course
  this is e,</span> <span m='650000'>our unknown node voltages, and this is a
  linear sum of</span> <span m='657000'>sources. So this is a very standard
  way</span> <span m='662000'>that we will represent equations.</span>
  </p><p><span m='664000'>We did that last week as well, or rather on Tuesday
  where I</span> <span m='668000'>took a conductance matrix, multiplied that by
  a column</span> <span m='671000'>vector of unknown node voltages and equated
  that to some linear</span> <span m='675000'>combination of my source
  voltages.</span> </p><p><span m='677000'>The reason the circuit is linear is
  that I have only</span> <span m='681000'>linear elements in the circuit. I
  don't have any nonlinear</span> <span m='685000'>elements. And because of that
  I can</span> <span m='687000'>rewrite this in the following manner.</span>
  </p><p><span m='691000'>I'm just going to express e as a function of V and i
  and bring</span> <span m='699000'>it over to this side. So it's some function
  of i.</span> </p><p><span m='706000'>So I get R1 R2 divide by R1 plus
  R2.</span> </p><p><span m='711000'>And I bring R1 R2 to this side. That's what
  I get.</span> </p><p><span m='720000'>So stare at this for a few seconds, very
  common form.</span> </p><p><span m='725000'>My unknown node voltage is equal
  to this stuff on the</span> <span m='731000'>right-hand side. The stuff on the
  right-hand</span> <span m='736000'>side has a term multiplying the source
  voltage V and some other</span> <span m='742000'>term multiplying the current
  I. And if I were to put this in</span> <span m='749000'>sort of symbol-like
  form my unknown node voltage is some</span> <span m='755000'>constant times V1
  plus some constant times,</span> <span m='760000'>is of the form constant
  times the source current,</span> <span m='765000'>constant times the source
  voltage and so on.</span> </p><p><span m='769000'>The units of As and Vs are
  different because in this case A</span> <span m='776000'>has no units because
  V is a voltage.</span> </p><p><span m='781000'>And so is e. In this case V has
  units of</span> <span m='783000'>resistance. So that V times i gives me
  a</span> <span m='786000'>voltage. So stare at this equation for a</span>
  <span m='789000'>few seconds and this should help us build up some insight
  that</span> <span m='794000'>will allow us to write down the answer almost by
  inspection.</span> </p><p><span m='798000'>I'm going to show you a method now,
  in a few minutes,</span> <span m='802000'>which will allow you to write down
  the answer e just by</span> <span m='807000'>starring at the circuit without
  having to go through node</span> <span m='811000'>equations and so on. The
  more and more methods I</span> <span m='816000'>teach you, the more you will
  be able to do a lot of this</span> <span m='820000'>completely by yourselves.
  In this particular example it's</span> <span m='824000'>a relatively simple
  circuit but these methods would be</span> <span m='828000'>particularly useful
  when you have more complicated</span> <span m='832000'>situations. But before
  I go on let me spend</span> <span m='835000'>a few minutes pontificating on
  linearity.</span> </p><p><span m='840000'>So that's a linear circuit. And this
  equation gives me the</span> <span m='846000'>unknown node voltage e as a
  linear sum of source voltages</span> <span m='853000'>and source currents.
  Linearity implies two</span> <span m='858000'>properties, the property of
  homogeneity and also gives vice</span> <span m='865000'>to the property of
  superposition.</span> </p><p><span m='870000'>Let's do homogeneity first. What
  this says is if I have a</span> <span m='881000'>circuit, some circuit and I
  feed it some sort of inputs,</span> <span m='892000'>A, then let's say my
  output is S.</span> </p><p><span m='900000'>If you're feeling hungry think of
  these as apples and the</span> <span m='904000'>circuit converts them into
  applesauce.</span> </p><p><span m='907000'>So what homogeneity says is that
  what I can do is if I take</span> <span m='912000'>each of my apples and
  instead of feeding it an entire apple what</span> <span m='917000'>if I give
  it three-quarters of an apple?</span> </p><p><span m='920000'>Say I multiple
  all my inputs by some constant alpha,</span> <span m='924000'>three-quarters.
  What that says is that at the</span> <span m='929000'>output instead of
  getting one full bottle of applesauce I'm</span> <span m='933000'>going to get
  three-quarters of a bottle of apple sauce.</span> </p><p><span m='936000'>So
  if I proportionately reduce all the inputs and if this is a</span> <span
  m='941000'>linear circuit then so shall my output be reduced in the
  same</span> <span m='945000'>proportion. So that's homogeneity.</span>
  </p><p><span m='947000'>Next, let's look at superposition.</span> </p><p><span
  m='959000'>The property of superposition says the following.</span>
  </p><p><span m='965000'>The same kind of circuit. If I feed it apples then I
  get</span> <span m='972000'>applesauce. I take the same circuit,</span> <span
  m='977000'>and this time around if I feed the circuit a different set
  of</span> <span m='985000'>inputs, say blueberries. And let's say my
  output,</span> <span m='992000'>oops, let me do it this way. So as my output I
  get blueberry</span> <span m='998000'>sauce, if such exists. So apples
  applesauce,</span> <span m='1002000'>blueberries give me blueberry
  sauce.</span> </p><p><span m='1006000'>Then what I'm going to get if I mix up
  the two,</span> <span m='1010000'>so let's say I take my circuit, the same
  circuit with a set of</span> <span m='1017000'>inputs and in this example one
  output.</span> </p><p><span m='1022000'>Let's say I mix up my inputs and some
  of my inputs in the</span> <span m='1026000'>following way, here I feed an A1
  plus B1 and</span> <span m='1030000'>here A2 plus B2 and so on then at the
  output I am going to get</span> <span m='1035000'>a mush of apple sauce and
  blueberry sauce.</span> </p><p><span m='1039000'>All this says is that if I
  apply just apples I get</span> <span m='1043000'>applesauce. If I apply just
  blueberries I</span> <span m='1047000'>get blueberry sauce. Then if I were to
  figure out</span> <span m='1052000'>how this blender would have worked had I
  fed in the</span> <span m='1055000'>combinations of apples and blueberries,
  then for the</span> <span m='1059000'>purposes of understanding that blender
  all I could have done</span> <span m='1063000'>was taken by two outputs and
  just mixed them up together</span> <span m='1067000'>myself and that's exactly
  what I'd get.</span> </p><p><span m='1070000'>So if I sum up the inputs my
  outputs would also be the sum of</span> <span m='1074000'>the outputs with the
  inputs applied by themselves.</span> </p><p><span m='1079000'>So let me take
  this here and munge around with hit for a few</span> <span m='1083000'>seconds
  and get something interesting out of it.</span> </p><p><span m='1087000'>So
  notice two inputs, two inputs, outputs.</span> </p><p><span m='1090000'>In
  your notes I've given you another template for the next</span> <span
  m='1094000'>set of scribbles I'm going to make here.</span> </p><p><span
  m='1097000'>So use the next set of templates on page three.</span>
  </p><p><span m='1101000'>What I'm going to do here is something very
  simple,</span> <span m='1105000'>set one output to zero and feed a voltage
  V1.</span> </p><p><span m='1110000'>So that's feed a voltage V1 and set the
  other output to zero.</span> </p><p><span m='1115000'>And let's say I get Y1
  as an output.</span> </p><p><span m='1118000'>And in this case I set the first
  voltage to zero and feed a</span> <span m='1124000'>different voltage V2 on
  the second input.</span> </p><p><span m='1128000'>And let's say my output is
  Y2. This is just a particular</span> <span m='1133000'>application of the
  superposition principle I just outlined.</span> </p><p><span m='1140000'>Apply
  V1 set one output to zero.</span> </p><p><span m='1143000'>Apply V2 set the
  original output to zero.</span> </p><p><span m='1149000'>Then what I'm going
  to find is that the answer will simply look</span> <span m='1157000'>like
  this, just replace for As and Bs what I just did and we</span> <span
  m='1164000'>get V1 and zero here and we get zero and V2 here.</span>
  </p><p><span m='1170000'>And as my output I'm going to get exactly the sum Y1
  plus Y2.</span> </p><p><span m='1180000'>This is simply a particular
  application of superposition</span> <span m='1183000'>where what I'm saying is
  the following.</span> </p><p><span m='1186000'>If you look at this circuit
  here effectively what have I</span> <span m='1190000'>done? Effectively what
  I've done is</span> <span m='1193000'>apply the voltage V1 on one input and a
  voltage V2 on the</span> <span m='1197000'>other input. V1 here.</span>
  </p><p><span m='1198000'>V2 here. And the output is Y1 plus Y2.</span>
  </p><p><span m='1202000'>What I'm saying is look backwards now.</span>
  </p><p><span m='1204000'>What I'm saying is that the whole components of the
  output</span> <span m='1209000'>Y1 plus Y2 could individually be derived in
  the following manner.</span> </p><p><span m='1213000'>I could get the
  component Y1 by simply applying one of the</span> <span m='1218000'>voltages
  and setting the other to zero.</span> </p><p><span m='1221000'>I can get the
  other component Y2 by setting yet another input</span> <span m='1225000'>to
  zero and applying the voltage V2 to get Y2.</span> </p><p><span
  m='1230000'>And sum then up and that's my answer.</span> </p><p><span
  m='1232000'>This will become a lot clearer with an example.</span>
  </p><p><span m='1236000'>Again, remember if I have a bunch of inputs applied
  to a</span> <span m='1240000'>circuit, V1, V2 and so on, and I get some output
  then what</span> <span m='1244000'>this is saying is that I can alternatively
  find out the</span> <span m='1248000'>answer by applying just one voltage,
  setting all the others</span> <span m='1253000'>to zero, measuring the output,
  apply a second voltage,</span> <span m='1257000'>set all inputs to zero,
  measure the output and sum of</span> <span m='1261000'>applesauce and
  blueberry sauce and there you get the answer.</span> </p><p><span
  m='1267000'>Let's do an example. And before we go into that I</span> <span
  m='1273000'>talked about setting voltage sources and current sources to</span>
  <span m='1280000'>zero. First of all,</span> <span m='1282000'>what does it
  mean to set a voltage source to zero?</span> </p><p><span m='1288000'>This is
  the same as this. Setting a voltage source to</span> <span m='1298000'>zero is
  simply replacing the voltage source with a short,</span> <span m='1309000'>and
  setting a current source to zero simply implies an open</span> <span
  m='1320000'>circuit. So when I say zero that source,</span> <span
  m='1325000'>if it's a voltage source short it, if it's a current source</span>
  <span m='1329000'>open it.</span> </p><p><span m='1336000'>I can take any two
  nodes in the world and measure the potential</span> <span
  m='1339000'>difference across them. So there may be some potential</span>
  <span m='1342000'>difference across these set by the circuit that I haven't
  shown</span> <span m='1346000'>you on this side. There might be some
  other</span> <span m='1349000'>circuit that is controlling the voltage of
  these two nodes.</span> </p><p><span m='1353000'>The same with the short.
  What's V going to be?</span> </p><p><span m='1358000'>But there is a V. It's
  zero.</span> </p><p><span m='1362000'>So that's method four, method of
  superposition.</span> </p><p><span m='1368000'>And this method says that the
  output of a circuit --</span> <span m='1383000'>Again, remember I'm focusing
  on linear circuits.</span> </p><p><span m='1386000'>Remember, I have this
  playground where LMD applies.</span> </p><p><span m='1390000'>And within that
  playground I'm playing in the south goal area.</span> </p><p><span
  m='1394000'>In the south goal area, in that subset of the</span> <span
  m='1397000'>playground circuits are linear. So in that part of the</span>
  <span m='1401000'>playground superposition applies because there circuits
  are</span> <span m='1405000'>linear. So the output of a circuit is</span>
  <span m='1412000'>determined by summing up the responses to each source
  acting</span> <span m='1422000'>alone.</span> </p><p><span m='1434000'>Now, in
  this statement here this source stands for</span> <span
  m='1438000'>independent source. I haven't talked about</span> <span
  m='1441000'>independent versus dependent sources.</span> </p><p><span
  m='1444000'>We'll talk about dependent sources a few weeks from today.</span>
  </p><p><span m='1448000'>And just so you don't get confused, for dependent
  sources</span> <span m='1452000'>you will be looking at Section 3.3.3 of your
  course notes to</span> <span m='1457000'>see how superposition works with
  dependent sources.</span> </p><p><span m='1461000'>But remember we haven't
  covered dependent sources yet.</span> </p><p><span m='1465000'>We will be
  covering them about two weeks from now.</span> </p><p><span m='1470000'>So
  let's go back to our example and apply the method of</span> <span
  m='1476000'>superposition to an example. So the method says sum up the</span>
  <span m='1483000'>outputs of each of the sub-circuits where I'm
  applying</span> <span m='1489000'>one source acting alone. So let me just do
  this here.</span> </p><p><span m='1495000'>Let me start with the circuit. And
  let me start with shutting</span> <span m='1503000'>I off. So I have voltage V
  --</span> <span m='1513000'>I have R2. And I'm shutting I off.</span>
  </p><p><span m='1516000'>So I have replaced this with an open circuit.</span>
  </p><p><span m='1521000'>So I is zero. Let me call the node voltage eV</span>
  <span m='1525000'>to reflect that component of the node voltage that arises
  due to</span> <span m='1532000'>V acting alone. And you should look at
  this</span> <span m='1537000'>pattern here and very quickly be able to write
  the answer for</span> <span m='1542000'>patterns like this voltage, the two
  resistors.</span> </p><p><span m='1546000'>That's called a resistive
  divider.</span> </p><p><span m='1549000'>It will appear again and again and
  again.</span> </p><p><span m='1552000'>And eV is simply V times R2 divided by
  R1 plus R2.</span> </p><p><span m='1556000'>That's still my ground node. So
  the voltage here is simply</span> <span m='1562000'>this voltage divided by
  the two resistors to give you the</span> <span m='1567000'>current multiplied
  by R2 to give you the voltage across this R.</span> </p><p><span
  m='1572000'>Remember this pattern. You apply voltage divider</span> <span
  m='1576000'>patterns probably more times than any other pattern that
  you</span> <span m='1581000'>might imagine. So that's with the V acting</span>
  <span m='1584000'>alone. Now, let me do I acting alone.</span> </p><p><span
  m='1587000'>So for I acting alone --</span> <span m='1603000'>And what I do
  this time around is replace this with a short,</span> <span
  m='1609000'>replace the voltage source to the short.</span> </p><p><span
  m='1613000'>And let me call this voltage eI for the component of the
  voltage</span> <span m='1620000'>due to the current I. And eI, in this
  case,</span> <span m='1624000'>is simply given by yet another pattern
  here,</span> <span m='1628000'>the current across a pair or resistors is
  simply the</span> <span m='1632000'>effective resistance multiplied by the
  current so it's i and the</span> <span m='1637000'>effective resistance is R1,
  R2 or R1 plus R2.</span> </p><p><span m='1641000'>That's eI. That's a
  component that node</span> <span m='1644000'>due to the current I. Now, so the
  method says that.</span> </p><p><span m='1651000'>Then take these components,
  sum them up and there you have</span> <span m='1658000'>the answer. So E is
  simply ev plus ei.</span> </p><p><span m='1664000'>The components of V and I
  acting alone,</span> <span m='1669000'>just simply V times R2 divided by R1
  plus R2 plus R1,</span> <span m='1676000'>R2. There we go.</span> </p><p><span
  m='1680000'>Fortunately, the fates have been kind to us</span> <span
  m='1682000'>and the answer is the same as the answer we obtained with
  the</span> <span m='1686000'>node method. No surprise here.</span>
  </p><p><span m='1688000'>So this is actually an incredibly simple
  method.</span> </p><p><span m='1691000'>So you can take a very complex
  circuit.</span> </p><p><span m='1694000'>What have you really done here? You
  can take a very complex</span> <span m='1698000'>circuit and you can solve a
  very complex circuit by breaking it</span> <span m='1702000'>down into many
  simple individual sub problems.</span> </p><p><span m='1705000'>You will do
  this in EECS time and time and time again.</span> </p><p><span
  m='1710000'>Whether it's in software systems or hardware systems or</span>
  <span m='1713000'>what have you, you're often times building</span> <span
  m='1715000'>complicated systems. Remember doom on this side?</span>
  </p><p><span m='1718000'>And the way and when you put these things
  together,</span> <span m='1721000'>let's say a large software system, is you
  don't write the</span> <span m='1724000'>whole piece of software starting main
  and grunge down.</span> </p><p><span m='1727000'>You build a lot of little
  components and tie the</span> <span m='1730000'>components together. In the
  same manner here you</span> <span m='1733000'>take a big circuit and you find
  its behavior for each source</span> <span m='1737000'>acting alone. Lots of
  little inky dinky</span> <span m='1740000'>simple little circuits. And you
  will see examples in</span> <span m='1744000'>your homework where you're given
  a big circuit or because it set</span> <span m='1749000'>all the Is to zero
  and the other Vs to zero the whole circuit</span> <span m='1754000'>almost
  vanishes and all that you're left with is a little</span> <span
  m='1758000'>resistor or two. So this is the very,</span> <span
  m='1761000'>very powerful method. I'd like to do a little</span> <span
  m='1764000'>demonstration for you. And what I'm going to show you</span> <span
  m='1768000'>is the demo is a vat of water. Actually, I'll tell you what
  it</span> <span m='1776000'>is in a second. But assume it is salt water
  for</span> <span m='1782000'>now. I'll apply two voltages.</span> </p><p><span
  m='1786000'>In this case I'm going to apply a sinusoid.</span> </p><p><span
  m='1792000'>That's not very good. A sinusoid and a triangular</span> <span
  m='1799000'>wave. And what I'm going to do is</span> <span m='1803000'>measure
  the response at this site.</span> </p><p><span m='1806000'>Now, this is a vat
  of salt water.</span> </p><p><span m='1808000'>And I'm going to tell you it
  behaves like a linear system.</span> </p><p><span m='1813000'>If you view each
  little particle, or each little</span> <span m='1817000'>cubic-centimeter or
  whatever of water, it'll behave like little</span> <span m='1822000'>resistor.
  So this vat of salt water</span> <span m='1825000'>behaves like big
  distributed resistor in the following</span> <span m='1830000'>manner.</span>
  </p><p><span m='1839000'>And so on. This of this big mesh of little</span>
  <span m='1841000'>resistors, but it's all resistors.</span> </p><p><span
  m='1844000'>It's a linear circuit. So I'm going to apply two</span> <span
  m='1847000'>voltages, a triangular and a sinusoid, and we're going to</span>
  <span m='1851000'>observe the output. And what do you expect to see</span>
  <span m='1854000'>there? You will see the superposition</span> <span
  m='1857000'>of the two, which is you'll see a sinusoid.</span> </p><p><span
  m='1861000'>And then you'll see the jagged triangular thing
  articulating</span> <span m='1867000'>the sinusoid pattern. What I'm going to
  do right now,</span> <span m='1873000'>don't put any water yet. This is the
  vat of nothing</span> <span m='1878000'>right now. It's all empty.</span>
  </p><p><span m='1881000'>Can we show the screen on this side?</span>
  </p><p><span m='1885000'>The oscilloscope screen?</span> </p><p><span
  m='1894000'>OK. Oh, there you go.</span> </p><p><span m='1895000'>So this is
  the screen of the oscilloscope now.</span> </p><p><span m='1898000'>Notice
  that I have a sinusoid and I have a triangular wave and</span> <span
  m='1903000'>the output is zero. And the reason is there is</span> <span
  m='1906000'>nothing in this vat. It's empty.</span> </p><p><span
  m='1909000'>So previously when I taught this course I would get</span> <span
  m='1913000'>saltwater and pour saltwater. Then we discovered a much</span>
  <span m='1917000'>better source of water that conducted electricity like
  one</span> <span m='1921000'>real mean fluid. Cambridge water.</span>
  </p><p><span m='1925000'>It just works very pleasantly. It just conducts
  electricity</span> <span m='1930000'>like nothing at all. And I've been
  thinking of using</span> <span m='1934000'>Charles River water next time and
  see what happens,</span> <span m='1938000'>although there we'd probably get
  some biological organisms</span> <span m='1943000'>doing strange things at
  you. But go ahead.</span> </p><p><span m='1946000'>Our friendly demonstration
  expert, Lorenzo,</span> <span m='1950000'>will pour some water into the
  vat.</span> </p><p><span m='1954000'>And you should begin seeing the output
  being a superposition of</span> <span m='1959000'>the two. So as he
  pours,</span> <span m='1962000'>there you go, do you see that?</span>
  </p><p><span m='1964000'>So you do see the sinusoidal articulation and the
  jagged wave</span> <span m='1970000'>form. And just to have some more
  fun,</span> <span m='1973000'>what I can do is increase one of the
  voltages.</span> </p><p><span m='1978000'>And you'll see --</span> <span
  m='1986000'>Now you know what would have happened if I had used Charles</span>
  <span m='1990000'>River water. So my output keeps increasing</span> <span
  m='1993000'>as I increase the corresponding wave form.</span> </p><p><span
  m='2004000'>I could do this, this is fun.</span> </p><p><span m='2006000'>So
  let me pause there and go onto the next topic.</span> </p><p><span
  m='2010000'>So that little demonstration showed you that even something</span>
  <span m='2014000'>as simple as this physical entity vat of water behaves
  like</span> <span m='2019000'>a linear system, and we can model that
  linear</span> <span m='2022000'>system as a set of resistors. Unbeknownst to
  you,</span> <span m='2026000'>right now, in the past ten seconds I introduced
  a new</span> <span m='2030000'>concept. It's called subliminal</span> <span
  m='2033000'>advertising. So one of the things we do in</span> <span
  m='2036000'>EE a lot is model real systems. So often times if I wanted
  to</span> <span m='2042000'>look at the behavior of salt, behavior of a vat of
  water,</span> <span m='2046000'>I can model it as a set of resistors for
  certain kinds of</span> <span m='2051000'>activities. Just hold that thought
  for some</span> <span m='2054000'>time later in your careers. All
  right.</span> </p><p><span m='2057000'>That's method four, the superposition
  method.</span> </p><p><span m='2061000'>Remember, it is methods like this that
  will make your life</span> <span m='2065000'>really, really, really
  easy.</span> </p><p><span m='2069000'>If you find that you are having to do a
  lot of grunging homework</span> <span m='2074000'>or something, just step back
  and think</span> <span m='2078000'>superposition, think Thevenin or
  think</span> <span m='2081000'>composition rule. There must be a simpler
  way</span> <span m='2085000'>usually. Let's do the next method.</span>
  </p><p><span m='2088000'>This is called the Thevenin method.</span>
  </p><p><span m='2091000'>To derive this method let me start by applying
  superposition</span> <span m='2097000'>to some circuit. So let's say I have
  some</span> <span m='2103000'>arbitrary network N. Assume it's a linear
  network</span> <span m='2109000'>and the network has a whole bunch of goodies
  in it.</span> </p><p><span m='2115000'>It has a bunch of resistors, it has a
  bunch of voltage</span> <span m='2122000'>sources, and it has a bunch of
  current sources.</span> </p><p><span m='2130000'>Many current sources. Many
  voltage sources.</span> </p><p><span m='2133000'>Many resistors. Some jumbled
  voltage sources,</span> <span m='2137000'>current sources and resistors. And I
  look at two nodes in this</span> <span m='2143000'>network. Here are two nodes
  in the</span> <span m='2146000'>network, two points in the network were
  elements connect.</span> </p><p><span m='2150000'>I'm looking at those two
  nodes and all I want to do is the</span> <span m='2156000'>following. I want
  to figure out if I take</span> <span m='2160000'>a rinky-dinky little current
  source and apply it there,</span> <span m='2165000'>all I want to figure out
  is what is V and what is I.</span> </p><p><span m='2170000'>There is this
  mongo box out here, a black box of resistors,</span> <span m='2175000'>voltage
  source and current sources, too many to count.</span> </p><p><span
  m='2180000'>I pick two nodes, apply a current source,</span> <span
  m='2184000'>and all I care about is what is the voltage that I will
  measure</span> <span m='2189000'>by applying it here. Notice the current here
  will be</span> <span m='2195000'>I because the current here is I. And I apply
  it here.</span> </p><p><span m='2200000'>I want to measure what the voltage
  is.</span> </p><p><span m='2203000'>Now, with the insight you've obtained from
  superposition,</span> <span m='2208000'>you should be able to jump up and
  state the form of the</span> <span m='2213000'>answer. So by superposition we
  know the</span> <span m='2217000'>following. We know that the effect of
  the</span> <span m='2221000'>circuit will be the same as the sum of components
  being added</span> <span m='2226000'>up. Sum of component,</span> <span
  m='2227000'>sum of component, a bunch of components added up.</span>
  </p><p><span m='2231000'>Each component will be the response of one source
  acting</span> <span m='2236000'>alone. So if I can figure out the</span> <span
  m='2238000'>effect of one source acting alone and put that down here,</span>
  <span m='2243000'>and do the same thing for all the sources, that's what I
  will</span> <span m='2248000'>get. So for the source Vm it's a</span> <span
  m='2252000'>linear circuit. So I know that my answer is</span> <span
  m='2255000'>going to be, in the final answer is going to be a Vm term
  and</span> <span m='2260000'>it's going to be multiplied by some alpha M
  term.</span> </p><p><span m='2264000'>I know that. It's a linear circuit so I
  know</span> <span m='2267000'>that the answer shall have a term Vm multiplied
  by some</span> <span m='2272000'>constant. Simple, I know that.</span>
  </p><p><span m='2274000'>Similarly, the same is true for, oh, this is the term
  Vm.</span> </p><p><span m='2280000'>And what I can do is I can measure just
  this effect by</span> <span m='2285000'>setting all the other sources to
  zero.</span> </p><p><span m='2289000'>So I can set all the other current
  sources to zero and all</span> <span m='2295000'>voltage sources, except for
  this one,</span> <span m='2299000'>and I can get that answer. So,
  similarly,</span> <span m='2303000'>for every voltage source I am going to get
  a term.</span> </p><p><span m='2310000'>So for every single voltage source,
  M1, M2,</span> <span m='2314000'>M3 and so on I'm going to get such a term and
  they're all</span> <span m='2319000'>going to sum up. Similarly, I'm going to
  get a</span> <span m='2324000'>term for In. And I know there will be an
  In</span> <span m='2328000'>term, and I know it's going to be some constant
  beta</span> <span m='2333000'>multiplying In. In this example of ours
  here,</span> <span m='2337000'>in this example, remember alpha was this
  and</span> <span m='2341000'>beta was this constant here. There's some
  constant beta,</span> <span m='2348000'>some constant alpha. And because I
  have a whole</span> <span m='2351000'>bunch of current sources there's going
  to be such a term for each</span> <span m='2356000'>one of them. And each one
  of these terms,</span> <span m='2359000'>Vm, In will be the voltage I would
  see here if I set all the</span> <span m='2364000'>other Vms to zero and I set
  all the other current sources,</span> <span m='2368000'>except for that one to
  zero. What am I missing?</span> </p><p><span m='2373000'>Is that it? The
  response here,</span> <span m='2376000'>V here. Am I missing anything
  here?</span> </p><p><span m='2379000'>Is that it? Now, don't all yell at
  once.</span> </p><p><span m='2383000'>What am I missing? Current source
  i,</span> <span m='2387000'>exactly. So if I have a current source i</span>
  <span m='2390000'>then there's an effect of this current as well.</span>
  </p><p><span m='2395000'>And so I write down i there, too.</span> </p><p><span
  m='2400000'>It's going to be some constant multiplying I.</span> </p><p><span
  m='2403000'>And that constant is going to look like a resistor,</span> <span
  m='2407000'>right, because this circuit contains current sources,</span> <span
  m='2411000'>voltage sources and resistors. If I've shorted all my
  voltage</span> <span m='2415000'>sources and opened all my current
  sources,</span> <span m='2419000'>what's left in here? Just a whole caboodle
  full of</span> <span m='2422000'>Rs. It's just going to look like</span> <span
  m='2425000'>some resistance R. And that's what I get here.</span> </p><p><span
  m='2430000'>So this is what V is going to look like and that's a form.</span>
  </p><p><span m='2435000'>So let's take a look at these components.</span>
  </p><p><span m='2445000'>Let's focus on the easy part first.</span>
  </p><p><span m='2447000'>What does this look like? This component looks like
  an I,</span> <span m='2451000'>it looks like a current and has some
  resistance.</span> </p><p><span m='2454000'>What is that resistance given
  by?</span> </p><p><span m='2457000'>Supposing I gave you this network and this
  currency source</span> <span m='2461000'>and I asked you tell me R. How would
  you measure R?</span> </p><p><span m='2465000'>What you would do is open all
  the current sources,</span> <span m='2469000'>short all the voltage sources,
  put a ohmmeter in there and</span> <span m='2474000'>measure the resistance R.
  That's R.</span> </p><p><span m='2477000'>OK, so we understand this term. What
  about this term here?</span> </p><p><span m='2481000'>Can someone tell me the
  units of this term here,</span> <span m='2485000'>this big thing here?
  Voltage.</span> </p><p><span m='2487000'>This is a voltage. This is a
  voltage.</span> </p><p><span m='2492000'>iR is a voltage. So this does behave
  like a</span> <span m='2497000'>voltage. And it behaves like some</span> <span
  m='2500000'>voltage V. So notice that as far as this</span> <span
  m='2505000'>current I is concerned the rest of the universe looks like
  a</span> <span m='2512000'>resistor and a voltage source behaving in some
  manner.</span> </p><p><span m='2520000'>And let me just call it Vth for now,
  and you'll know why in a</span> <span m='2524000'>second.</span> </p><p><span
  m='2541000'>The voltage has a form, some voltage plus Ri.</span> </p><p><span
  m='2546000'>So, in other words, as far as this I is concerned</span> <span
  m='2552000'>this whole network here N full of all the nice stuff is</span>
  <span m='2559000'>indistinguishable to this I here.</span> </p><p><span
  m='2563000'>So my I is sitting out there injecting a current into two</span>
  <span m='2570000'>nodes. If I am i, I'm looking at this,</span> <span
  m='2575000'>this network looks no different than a voltage source in
  series</span> <span m='2583000'>with the resistor R. Notice that the equation
  for</span> <span m='2591000'>this simple circuit is this, so I is given by V
  minus Vth</span> <span m='2598000'>divided by R. Just remember.</span>
  </p><p><span m='2610000'>It's a circuit. In other words,</span> <span
  m='2612000'>Agarwal sitting here cannot tell the difference if I'm</span>
  <span m='2617000'>measuring the voltage here between a circuit that
  looks</span> <span m='2622000'>like a Vth in series to the resistor or this
  huge mess of</span> <span m='2627000'>voltage sources and current sources and
  so on.</span> </p><p><span m='2631000'>Now, we will talk about Vth and
  R.</span> </p><p><span m='2634000'>R is called the resistance of the network
  as seen from the</span> <span m='2639000'>port with all the sources shut
  off.</span> </p><p><span m='2644000'>And similarly Vth, what is Vth?</span>
  </p><p><span m='2646000'>Vth is the open circuit voltage.</span> </p><p><span
  m='2649000'>In other words, if I apply the voltage here</span> <span
  m='2652000'>this is the response of all the current sources and all the</span>
  <span m='2657000'>voltage sources acting together. So it's as if I took this
  out</span> <span m='2663000'>and simply measured my V here as if I didn't
  exist,</span> <span m='2667000'>correct? Because this is the component</span>
  <span m='2671000'>of i. So if I opened i and measured</span> <span
  m='2675000'>V, I would get that big term on the left-hand side.</span>
  </p><p><span m='2680000'>That's my Vth. So that inspires the next</span> <span
  m='2683000'>method called the Thevenin method.</span> </p><p><span
  m='2698000'>In this method what I'm going to do is take some circuit,</span>
  <span m='2704000'>I'm on Page 9, with a mess of stuff.</span> </p><p><span
  m='2707000'>It's a big mess of stuff. And if I care to look at its</span>
  <span m='2713000'>impact on something else that I add from the outside then as
  far</span> <span m='2720000'>as the outside world is concerned this is</span>
  <span m='2725000'>indistinguishable from a circuit that looks like
  this.</span> </p><p><span m='2745000'>So what I can do is if I want to figure
  out what's happening</span> <span m='2749000'>here then, for the purpose of my
  analysis, this simple network</span> <span m='2754000'>here with R and Vth
  becomes a surrogate for this entire mess.</span> </p><p><span m='2759000'>So
  for the purpose of finding out the behavior at this point,</span> <span
  m='2763000'>I can take this huge mess and replace it with its Thevenin</span>
  <span m='2767000'>surrogate or Thevenin equivalent.</span> </p><p><span
  m='2770000'>This is called the Thevenin equivalent of this big network.</span>
  </p><p><span m='2774000'>Let me do an example that will make the method
  completely</span> <span m='2778000'>clear. Again, remember in EECS,</span>
  <span m='2781000'>most of our lives are about how can we make things so simple
  as</span> <span m='2785000'>being able to be analyzed by inspection?</span>
  </p><p><span m='2790000'>And so this is a method that takes you further down
  that</span> <span m='2796000'>path. So let me use the same circuit</span>
  <span m='2800000'>that I've been using before, my voltage V,</span> <span
  m='2805000'>R1, R2. This is an R.</span> </p><p><span m='2808000'>I'm 55
  minutes fast so we have another three or four minutes.</span> </p><p><span
  m='2815000'>So this is my circuit. And let's say all I care about</span> <span
  m='2821000'>is finding out i1. That's all I care about.</span> </p><p><span
  m='2825000'>And what I'm going to do is I'm going to box this up and see
  if</span> <span m='2830000'>I can replace that with its Thevenin
  equivalent.</span> </p><p><span m='2834000'>So I'm going to box that
  up.</span> </p><p><span m='2855000'>What I'm saying is that I'm going to box
  it up and replace</span> <span m='2859000'>it with this Thevenin
  equivalent.</span> </p><p><span m='2862000'>I don't know what Vth and R are at
  this point.</span> </p><p><span m='2865000'>I'm just calling it Rth for
  fun.</span> </p><p><span m='2868000'>I don't know what these two values are,
  but if I knew what</span> <span m='2872000'>these two values were I can
  determine I really trivially as</span> <span m='2877000'>follows. I can get i1
  as simply V minus</span> <span m='2880000'>Vth divided by R1 plus Rth. So if I
  knew Vth and Rth,</span> <span m='2886000'>I can write down i1 by inspection
  in that manner.</span> </p><p><span m='2891000'>So next, finally, how do I get
  Vth and Rth?</span> </p><p><span m='2896000'>You get Rth by looking at this
  network and shutting off all the</span> <span m='2902000'>voltage sources and
  measuring the resistance there.</span> </p><p><span m='2909000'>So I short my
  voltage source, that's R1.</span> </p><p><span m='2916000'>Oops, wrong way. I
  need to look this way.</span> </p><p><span m='2923000'>So looking this way,
  that's what I get.</span> </p><p><span m='2931000'>So what's Rth? Rth is
  simply R2.</span> </p><p><span m='2936000'>So I have opened my current
  source.</span> </p><p><span m='2945000'>Similarly, for Vth, remember all I
  want to do is</span> <span m='2949000'>look at the two nodes, step back, put a
  voltmeter</span> <span m='2953000'>there, measure the voltage, that's my open
  circuit voltage.</span> </p><p><span m='2958000'>So the way I do it is I take
  the circuit and simply measure</span> <span m='2964000'>the voltage there.
  That's R2.</span> </p><p><span m='2966000'>That's my current capital I. And I
  simply want to measure</span> <span m='2972000'>the open circuit voltage here,
  which is what?</span> </p><p><span m='2977000'>Just simply if I stand back and
  I kind of gingerly measure the</span> <span m='2984000'>voltage here without
  disturbing anything, I simply get IR2.</span> </p><p><span m='2990000'>So Vth
  is IR2 and Rth is R2 and here is the formula for the</span> <span
  m='2996000'>current in this branch when I apply a voltage source and a</span>
  <span m='3002000'>resistor R1 to this little circuit here.</span> </p><p><span
  m='3008000'>OK, let's pause and let me summarize this in about ten</span>
  <span m='3012000'>seconds. I had this circuit here.</span> </p><p><span
  m='3014000'>I wanted to find out i1. So what I said I'd do is take</span>
  <span m='3018000'>this complicated mess, well, it's not a complicated</span>
  <span m='3022000'>mess but assume it is, and replace with it a</span> <span
  m='3026000'>resistance Rth got by turning off all the sources.</span>
  </p><p><span m='3031000'>And the voltage in series, Vth, which I get simply
  by</span> <span m='3035000'>pulling this thing out, taking my input,</span>
  <span m='3038000'>this part out and simply measuring the open circuit</span>
  <span m='3042000'>voltage out there, Vth.</span> </p><p><span m='3043000'>And
  then I replaced the whole network with this new network</span> <span
  m='3048000'>that they call the Thevenin network, and voila,</span> <span
  m='3051000'>I get the answer in a second.</span> </p>
uid: 5bf128fefa595ece98790a6a90657417
type: courses
layout: video
---
