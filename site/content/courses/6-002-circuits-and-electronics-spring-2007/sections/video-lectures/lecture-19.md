---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> The operational amplifier abstraction</p>
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec19.jpg
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-19/thumb_lec19.jpg
    title: thumb_lec19.jpg
    type: null
    uid: 2bb5bdf65f02cfa342b904a415d43b7a
  - id: Video-YouTube-Stream
    media_location: V0z_f7qxLcY
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Video-YouTube-Stream
    type: Video
    uid: 31702de643d1d51267197ac6d127719e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/V0z_f7qxLcY/default.jpg'
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 09f2a001b2a13a9b1732278c49efa3a8
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Video-iTunes U-MP4
    type: Video
    uid: 30d043bc30fe4f11328d4835ded2e96a
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-18nov2003-220k.mp4
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Video-Internet Archive-MP4
    type: Video
    uid: a15750d92a1124fbe4dcf791547e8f2a
  - id: Thumbnail-OCW-JPG
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: ee430cf21056854f3372e2d53997e574
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: V0z_f7qxLcY
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 088bdcd2ae1e47583a42af6b52138ff3
  - id: V0z_f7qxLcY.srt
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-19/V0z_f7qxLcY.srt
    title: 3play caption file
    type: null
    uid: 1d25d907dd9942853e9c7caa4f21067c
  - id: V0z_f7qxLcY.pdf
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-19/V0z_f7qxLcY.pdf
    title: 3play pdf file
    type: null
    uid: d6b68edd2625696897005ba6717bb7e9
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: a7e608333123bfadb489fff9a5f2d857
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 4aa4220dc30f836dd6848ba21f591686
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 59f21145cb1e8b517b3d5c552384ed5f
inline_embed_id: '24124917lecture19:theoperationalamplifierabstraction69326228'
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/8dcd447b7211b053e4dac01d80555d89">PDF</a>)<br />
  Demonstration: Op-amp demo (<a target="_blank" title="Open in a new window."
  href="./resolveuid/17adde8cc675b348d6d2a6036e812159">PDF</a>)</p>
short_url: lecture-19
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-19
title: 'Lecture 19: The Operational Amplifier Abstraction'
transcript: >-
  <p><span m='4000'>All right. Good morning all.</span> </p><p><span
  m='8000'>Today we embark on another new chapter in what we do.</span>
  </p><p><span m='17000'>And the topic is going to be --</span> <span
  m='41000'>We will talk about this thing called an Operational
  Amplifier.</span> </p><p><span m='46000'>Before I get into the lecture, I want
  to point out a couple of</span> <span m='51000'>things. One is that you are
  going to</span> <span m='54000'>hear about two big words in today's
  lecture.</span> </p><p><span m='59000'>Two big and incredibly important
  words.</span> </p><p><span m='62000'>And I want to mention those words to you
  right now so that</span> <span m='68000'>when I come to them in lecture you
  can say OK,</span> <span m='72000'>I better pay really close attention, these
  are important</span> <span m='77000'>words. All right.</span> </p><p><span
  m='79000'>One of them is abstraction. The second one is feedback.</span>
  </p><p><span m='84000'>Two incredibly important concepts.</span> </p><p><span
  m='89000'>Abstraction, you have been seeing a couple</span> <span
  m='92000'>times during this course, once in the beginning where we</span>
  <span m='96000'>abstracted out Maxwell's equations by focusing on a</span>
  <span m='99000'>smaller playground and simply using KVL, KCL in place of
  those</span> <span m='104000'>equations. A big abstraction.</span>
  </p><p><span m='106000'>It turns out that almost all of EECS is based upon
  abstractions</span> <span m='111000'>at various levels. In the first
  lecture,</span> <span m='113000'>I also showed you the layer upon layer of
  abstraction that</span> <span m='118000'>we built to be able to build
  interesting systems.</span> </p><p><span m='123000'>The second big thing is
  feedback.</span> </p><p><span m='126000'>And I am going to relate this to
  anti-lock breaks in cars.</span> </p><p><span m='131000'>And so, you can wait
  and see how we do that.</span> </p><p><span m='136000'>It's an incredibly
  important concept.</span> </p><p><span m='139000'>Before we dive into the
  amplifier abstraction,</span> <span m='144000'>let me first talk about
  something that you know.</span> </p><p><span m='150000'>Start with something
  that you know and then lead up into the</span> <span m='154000'>operational
  amplifier and its circuits.</span> </p><p><span m='157000'>You know about the
  MOSFET amplifier.</span> </p><p><span m='166000'>The MOSFET amplifier that you
  know about looked like this.</span> </p><p><span m='174000'>It was based on a
  MOSFET.</span> </p><p><span m='183000'>There was a VS supply. There was a vI
  input,</span> <span m='189000'>a vO output and, as I said, a VS supply.</span>
  </p><p><span m='194000'>So, this was a MOSFET circuit that you've seen
  before.</span> </p><p><span m='202000'>One way of viewing this is that this
  circuit has three major</span> <span m='210000'>ports. This here is the input
  port</span> <span m='215000'>with voltage vI. This here, between the
  drain</span> <span m='218000'>terminal and the ground, is the output
  port.</span> </p><p><span m='222000'>I take the output between the drain
  terminal and ground.</span> </p><p><span m='227000'>And, finally, we have a
  third port,</span> <span m='230000'>which is this one. It is called the power
  port.</span> </p><p><span m='233000'>I apply VS between this terminal here and
  the ground</span> <span m='238000'>terminal. And that gives us the
  power</span> <span m='242000'>port. This device here was a three</span> <span
  m='244000'>port device. Input port or control port,</span> <span
  m='248000'>output port and a power port. And so we looked at the
  circuit</span> <span m='252000'>and did a whole bunch of analyses of
  it.</span> </p><p><span m='256000'>Then what I can do at this point, now that
  you've seen</span> <span m='260000'>this, it's often times interesting to
  think about</span> <span m='264000'>abstracting this out into some kind of a
  building block.</span> </p><p><span m='270000'>Much like in software, you
  write a procedure and you</span> <span m='273000'>abstract out the internal
  details of the procedure in the</span> <span m='277000'>procedure declaration
  and in the call that you make.</span> </p><p><span m='281000'>In the same way,
  we can take this little device</span> <span m='284000'>here and abstract that
  out into the following abstraction.</span> </p><p><span m='294000'>We could
  abstract that out as a device that looks like this.</span> </p><p><span
  m='306000'>I have my input port, I have my output port and I</span> <span
  m='312000'>have my power port. So, I can apply VS here.</span> </p><p><span
  m='318000'>Notice that I've taken these six terminals here,</span> <span
  m='325000'>one, two, three, four, five and six,</span> <span m='330000'>and
  put a box around it. And just exposed the terminals</span> <span m='337000'>to
  you. And I need to tell you a little</span> <span m='339000'>bit more about
  the internal properties, but suffice it to</span> <span m='343000'>say that
  you can begin working with this little block.</span> </p><p><span
  m='346000'>An even simpler version of this for many applications might
  just</span> <span m='351000'>look like this, vI and vO where there is a</span>
  <span m='353000'>ground that is shared among them that is implicit in
  this</span> <span m='357000'>picture. And vI and vO can simply be the</span>
  <span m='361000'>node voltages at these nodes. This is a progressively
  more</span> <span m='365000'>abstract representation of this amplifier.</span>
  </p><p><span m='368000'>What we can do is, provided we know,</span> <span
  m='371000'>we can abstract out the relevant properties of this</span> <span
  m='374000'>block and expose them outside. And the relevant properties</span>
  <span m='379000'>might well be that, let's say here the properties</span>
  <span m='382000'>may be that I in is always zero. I can also express to you
  the</span> <span m='387000'>gain of this amplifier. I may also be able to tell
  you</span> <span m='393000'>the Thevenin equivalent for the output.</span>
  </p><p><span m='397000'>There are some properties that I can give you that
  will let you</span> <span m='404000'>use this building block
  abstractly.</span> </p><p><span m='408000'>Today, what we will do is introduce
  a powerful abstraction</span> <span m='415000'>of a type of amplifier. This is
  called the operational</span> <span m='421000'>amplifier or "op amp" for
  short. What I am going to do is give</span> <span m='429000'>you a slightly
  more involved building block than the one I</span> <span m='435000'>have shown
  you there. But suffice it to say that the</span> <span m='441000'>idea is
  going to be the same. This building block looks like</span> <span
  m='448000'>this. This building block has an</span> <span m='451000'>input
  port. This building block also has a</span> <span m='457000'>port in which to
  connect power or the power port.</span> </p><p><span m='463000'>And the way I
  am going to connect power,</span> <span m='467000'>I am going to connect a
  plus VS supply here.</span> </p><p><span m='472000'>That is going to be my
  ground node.</span> </p><p><span m='476000'>And I am going to connect a minus
  VS supply to this node</span> <span m='483000'>here. So, these voltages are
  both VS.</span> </p><p><span m='488000'>I want to apply a plus VS here and a
  negative VS out here.</span> </p><p><span m='494000'>And I am going to take
  the output between the ground node</span> <span m='501000'>and the output node
  of the operational amplifier and call</span> <span m='507000'>that a vO. This
  is the output port.</span> </p><p><span m='512000'>So, input port and output
  port and a power port.</span> </p><p><span m='515000'>Think of this as a
  pattern where I have an input port</span> <span m='519000'>across which I
  connect the input.</span> </p><p><span m='522000'>I have a power port across
  which I connect a plus VS,</span> <span m='526000'>minus VS supply, and then I
  take the output</span> <span m='529000'>terminal and take a ground terminal,
  which is defined by</span> <span m='534000'>external components of my
  circuitry, and use this as my</span> <span m='538000'>reference node. Remember
  ground is just a</span> <span m='542000'>reference node. I am going to use
  this as a</span> <span m='546000'>reference node. These two are equal
  in</span> <span m='549000'>magnitude. And take this as my output.</span>
  </p><p><span m='551000'>And when I do something like this, I can build an
  even</span> <span m='556000'>simpler, so this is an abstract differential
  input amplifier.</span> </p><p><span m='560000'>In other words, this amplifier
  is going to</span> <span m='563000'>amplify whatever I apply at the
  input.</span> </p><p><span m='566000'>A slightly more abstract representation
  of this looks</span> <span m='570000'>like this. vOUT and plus/minus
  vIN.</span> </p><p><span m='574000'>This is a slightly more abstract
  representation where,</span> <span m='578000'>remember, we are going to draw
  this again and again,</span> <span m='582000'>maybe at least 38 or 39 times in
  this course.</span> </p><p><span m='586000'>And, remember, each time you draw
  it,</span> <span m='589000'>remember that there is an implicit power
  port,</span> <span m='592000'>a plus/minus supply that is connected which we
  don't show.</span> </p><p><span m='598000'>And I remember when I first learned
  about it a long time ago</span> <span m='602000'>there was a confusion in me
  initially.</span> </p><p><span m='605000'>How does this work? Where is the
  power coming from?</span> </p><p><span m='608000'>Just remember that power
  comes from a plus/minus supply,</span> <span m='613000'>and we just don't show
  that in this abstraction.</span> </p><p><span m='616000'>Now, the details, a
  lot of details are in Chapter</span> <span m='620000'>16 of your course notes.
  That's the reading for that.</span> </p><p><span m='624000'>The other thing is
  that there are some other key properties of</span> <span m='628000'>this
  amplifier. And let me discuss those very</span> <span m='635000'>quickly.
  First of all,</span> <span m='637000'>I can draw a circuit model for the
  amplifier.</span> </p><p><span m='644000'>Make some room for myself here. And
  this is a circuit model for</span> <span m='652000'>what we call the ideal
  operational amplifier.</span> </p><p><span m='660000'>And the circuit model is
  going to look like this.</span> </p><p><span m='663000'>This is an abstract
  device. And, in terms of analyzing how</span> <span m='668000'>this behaves in
  a circuit, I am going to show you this</span> <span m='672000'>abstract
  circuit that looks as follows.</span> </p><p><span m='675000'>Some input v is
  applied at these two terminals here.</span> </p><p><span m='679000'>And this
  terminal is called my v plus terminal and this is</span> <span
  m='683000'>called my v minus terminal, so this corresponds to these</span>
  <span m='687000'>two terminals. I am telling you that the</span> <span
  m='692000'>current going in is going to be zero, so i plus is going to
  be</span> <span m='696000'>zero and i minus is going to be zero.</span>
  </p><p><span m='699000'>i plus is the current in here and i minus is the
  current into</span> <span m='704000'>the v minus terminal, and both these
  currents are</span> <span m='708000'>going to be zero in this device
  here.</span> </p><p><span m='711000'>The output is going to look like
  this.</span> </p><p><span m='714000'>Let me just call it vOUT to be consistent
  with this here.</span> </p><p><span m='720000'>And taken with ground as my
  reference.</span> </p><p><span m='723000'>The output is simply Av. In other
  words,</span> <span m='727000'>what I am doing is I am going to model this as
  a device that</span> <span m='732000'>has a dependent source at its
  output.</span> </p><p><span m='736000'>And the dependent source here is a
  voltage controlled voltage</span> <span m='742000'>source. It is a dependent
  source,</span> <span m='745000'>it is a voltage controlled voltage source such
  that the</span> <span m='750000'>output voltage is A times the voltage v
  across its input.</span> </p><p><span m='757000'>This is actually very simple.
  Think of these three terminals</span> <span m='762000'>I have shown you here.
  I applied input across these.</span> </p><p><span m='766000'>And the output is
  going to be A times whatever I applied.</span> </p><p><span m='771000'>And A
  is going to tend towards infinity.</span> </p><p><span m='774000'>A is going
  to be huge. And specific values for A might</span> <span m='779000'>be a
  hundred thousand or a million or things of that sort.</span> </p><p><span
  m='785000'>Huge A in this abstract amplifier.</span> </p><p><span
  m='789000'>In addition to that, the other properties are that</span> <span
  m='795000'>it is going to have infinite input resistance.</span> </p><p><span
  m='801000'>That means looking in this looks like an open circuit.</span>
  </p><p><span m='810000'>The fact that this is open here implies the infinite
  input</span> <span m='815000'>resistance across this port. What about the
  output here?</span> </p><p><span m='820000'>Remember, this is a voltage
  source.</span> </p><p><span m='824000'>And we have a zero output resistance,
  which means that no</span> <span m='829000'>matter how the load affects this,
  as I apply a load this is</span> <span m='835000'>going to behave like an
  ideal voltage source and keep holding</span> <span m='841000'>the voltage
  constant based on whatever the function I</span> <span m='846000'>establish
  here. And A is virtually infinite.</span> </p><p><span m='850000'>Let me pause
  there for a few seconds and just dwell on this</span> <span m='854000'>so you
  just understand what the basic device is.</span> </p><p><span
  m='857000'>Following this basic definition, I am just going to</span> <span
  m='860000'>build a whole bunch of fun little circuits.</span> </p><p><span
  m='863000'>The analysis will be pretty straightforward,</span> <span
  m='866000'>but this is a big conceptual leap here where there is some</span>
  <span m='870000'>circuitry inside. Containing resistors,</span> <span
  m='873000'>MOSFETs, a whole bunch of stuff in there.</span> </p><p><span
  m='876000'>I am not telling you what is inside it.</span> </p><p><span
  m='879000'>Much like I could build an abstract amplifier,</span> <span
  m='882000'>I could put an abstract box around the amplifier you saw</span>
  <span m='886000'>earlier, I want to put a box around some circuitry.</span>
  </p><p><span m='890000'>I am not telling you what the circuitry is.</span>
  </p><p><span m='893000'>And, if you are curious, you should look at page 581
  of</span> <span m='897000'>your course notes. There is an example
  solved.</span> </p><p><span m='902000'>The example is for a differential
  amplifier.</span> </p><p><span m='907000'>This is the small signal analysis
  chapter.</span> </p><p><span m='911000'>That differential amplifier that's
  solved in that example is</span> <span m='917000'>usually the first stage in
  an operational amplifier circuit.</span> </p><p><span m='923000'>That
  differential amplifier is the first stage at the input.</span> </p><p><span
  m='930000'>And that differential amplifier, as the name implies,</span> <span
  m='934000'>amplifies not a single voltage but amplifies a differential</span>
  <span m='939000'>voltage. Note that this guy amplifies</span> <span
  m='942000'>the voltage difference between these two terminals.</span>
  </p><p><span m='946000'>That's v here. And v is simply the same as v</span>
  <span m='950000'>plus minus v minus. It's the node voltage here</span> <span
  m='954000'>minus the node voltage here. That is what's amplified.</span>
  </p><p><span m='960000'>It amplifies a difference. Therefore, it is called
  a</span> <span m='963000'>difference amplifier or a differential
  amplifier.</span> </p><p><span m='966000'>And so that input stage is what is
  inside the op amp.</span> </p><p><span m='970000'>It's got a bunch of other
  circuitry like level shifters</span> <span m='973000'>and so on. And at the
  output it has got a</span> <span m='976000'>buffer. At at the output it
  has</span> <span m='978000'>something that is reminiscent of the source
  follower circuit that</span> <span m='983000'>you learned about in
  recitations, solved an example</span> <span m='986000'>in the course notes and
  in your homework as well.</span> </p><p><span m='991000'>And you solved a
  variant of the source follower on your quiz as</span> <span m='995000'>well in
  problem two. So, a circuit that looks like</span> <span m='998000'>that
  appears at the output. Remember, for the source</span> <span
  m='1002000'>follower, the resistance looking in from the output was
  very,</span> <span m='1006000'>very small. You have seen some of the</span>
  <span m='1009000'>pieces that go inside the amplifier, but we will deal
  with</span> <span m='1013000'>this as a building block and simply represent it
  using this</span> <span m='1017000'>abstract little circuit. To dwell on this
  a little</span> <span m='1022000'>longer, this little device here is the
  workhorse of the analog</span> <span m='1026000'>industry. Much like your
  primitive gate</span> <span m='1030000'>abstraction, your inverter and NAND
  gate and so on,</span> <span m='1034000'>much as your primitive inverter or
  NAND gate was from the</span> <span m='1038000'>foundations of the digital
  industry.</span> </p><p><span m='1041000'>Remember we learned how to build
  this little abstract</span> <span m='1045000'>device called a NAND gate or an
  inverter?</span> </p><p><span m='1050000'>We noticed that those form the
  foundations of very complicated</span> <span m='1054000'>microprocessors.
  Those were the building blocks</span> <span m='1058000'>of the digital
  industry. In the same way,</span> <span m='1061000'>this little beast here is
  the building block of the analog</span> <span m='1065000'>industry. Just to
  give you an analogy</span> <span m='1067000'>from software, think of this
  abstract little</span> <span m='1071000'>device as a library routine from a
  library of functions when you</span> <span m='1075000'>program in C++ or
  whatever. Can someone give me an example</span> <span m='1081000'>of an
  incredibly popular routine that we use all the time that</span> <span
  m='1086000'>may be called the workhorse of the software industry?</span>
  </p><p><span m='1091000'>Pardon? An abstraction,</span> <span m='1093000'>an
  abstract procedure. One example might be something</span> <span
  m='1097000'>like a printf. Printf is an abstract name for</span> <span
  m='1101000'>a procedure that goes and does something for you.</span>
  </p><p><span m='1105000'>It is amazing how we take the lowly printf for
  granted.</span> </p><p><span m='1111000'>I stick my printf into my program, it
  includes the</span> <span m='1114000'>standard IO library and it goes and
  prints a value.</span> </p><p><span m='1117000'>You won't believe how
  complicated the printf is.</span> </p><p><span m='1120000'>As you go into
  learning more advanced software subjects,</span> <span
  m='1123000'>implementing the printf is a nightmare.</span> </p><p><span
  m='1126000'>It is horrendously complicated. Just imagine.</span> </p><p><span
  m='1128000'>You give it a string and it has to go and print that on
  your</span> <span m='1132000'>terminal or on your Windows system or
  whatever.</span> </p><p><span m='1135000'>Think of the complicated steps it
  has to go through.</span> </p><p><span m='1140000'>But, as far as you're
  concerned, it's simple.</span> </p><p><span m='1142000'>Just print out
  something and you're done.</span> </p><p><span m='1145000'>The same way. Think
  of this as the printf of</span> <span m='1148000'>the analog business. It is
  really simple,</span> <span m='1150000'>and the analysis is going to be
  incredibly simple,</span> <span m='1153000'>it will be mind-bogglingly simple,
  but inside it,</span> <span m='1157000'>heavens forbid if you look inside
  it.</span> </p><p><span m='1159000'>Tell you what, go into to S-T-D-I-O dot in
  one</span> <span m='1162000'>of the library routines and just pore through
  printf.</span> </p><p><span m='1165000'>The world's worst horrendous macros
  are in there.</span> </p><p><span m='1170000'>I mean it is just nasty. The
  same way inside the op amp,</span> <span m='1173000'>it is nasty. You don't
  want to go there.</span> </p><p><span m='1175000'>Much like in your C
  programming in your classes,</span> <span m='1178000'>you were able to use
  printf without fully knowing how it was</span> <span m='1182000'>implemented.
  Probably some MIT god or some</span> <span m='1185000'>key graduate
  implemented it, but once it was implemented you</span> <span m='1188000'>just
  used it based on simple abstract rules as to how it</span> <span
  m='1192000'>behaved. You didn't have to know what</span> <span m='1194000'>was
  inside it to use it. The same way with the</span> <span
  m='1197000'>operational amplifier. So, just think of printf when</span> <span
  m='1202000'>you see this and just imagine how simple it is going to be
  to</span> <span m='1206000'>use it. You may think that I spend way</span>
  <span m='1209000'>too much time, ten minutes dwelling on this</span> <span
  m='1212000'>abstract concept, but I like to dwell on things</span> <span
  m='1215000'>that I think are incredibly important.</span> </p><p><span
  m='1218000'>The concept of abstraction is very important.</span> </p><p><span
  m='1221000'>And it's not just in software. The concept of abstraction</span>
  <span m='1225000'>pervades all of EECS. And if I were to give you a</span>
  <span m='1230000'>project to say go and ask every professor what is the one
  word</span> <span m='1234000'>that you think best describes all of
  EECS?</span> </p><p><span m='1238000'>Just pick one word. Go ask every single
  professor</span> <span m='1241000'>you know. What is a single word?</span>
  </p><p><span m='1244000'>If you were to characterize all of EECS with just one
  word,</span> <span m='1248000'>what might that word be? In my mind, it is the
  A word,</span> <span m='1252000'>abstraction. It is all over.</span>
  </p><p><span m='1254000'>If you do a grep on all the words used by all
  your</span> <span m='1258000'>professors in your four years here, I promise
  you the first</span> <span m='1263000'>one will be know. And the second one
  will be</span> <span m='1268000'>abstraction. Check it out.</span>
  </p><p><span m='1270000'>See if what I am saying is true or not.</span>
  </p><p><span m='1273000'>It is all over the place. In 6.001, how many times do
  you</span> <span m='1277000'>think the word abstraction was used in
  6.001?</span> </p><p><span m='1281000'>It's all over the map. It's the A word
  all over.</span> </p><p><span m='1285000'>Imagine your shock when you see it
  being used in 002 because the</span> <span m='1290000'>same concept applies.
  We build more complicated</span> <span m='1295000'>systems by abstracting out
  the details of lesser objects,</span> <span m='1300000'>and then using those
  to build the more complicated systems.</span> </p><p><span
  m='1305000'>Abstraction is a very powerful mechanism of dealing with</span>
  <span m='1310000'>complexity. Next step is how do I go about</span> <span
  m='1314000'>using the op amp? Let me show you how it looks on</span> <span
  m='1318000'>a scope. What I am going to do is apply</span> <span
  m='1323000'>input to the op amp, I am going to look at the</span> <span
  m='1329000'>output, place the resistor RL to ground and look at the
  output.</span> </p><p><span m='1337000'>And here I am going to apply a plus VS
  and out here a minus VS.</span> </p><p><span m='1345000'>Again, remember that
  a plus VS simply looks like this and a</span> <span m='1352000'>minus VS
  simply looks like this. It's just an inverted VS</span> <span
  m='1360000'>applied here so I get a minus VS at this input.</span>
  </p><p><span m='1365000'>First of all, what I would like to do is as I</span>
  <span m='1370000'>change vIN, I am going to plot for you how vOUT
  looks.</span> </p><p><span m='1377000'>vIN and this is vO. I am going to plot
  vIN in terms</span> <span m='1383000'>of microvolts and vO in volts. vIN is
  going to have a very</span> <span m='1388000'>very small, the scale is going
  to be in microvolts because</span> <span m='1394000'>remember the gain of this
  is huge.</span> </p><p><span m='1397000'>It's on the order of ten to the
  sixth.</span> </p><p><span m='1401000'>It's huge. Small changes in vIN are
  going</span> <span m='1405000'>to cause massive changes in vO. I have a very
  fine scale on the</span> <span m='1412000'>X axis. What is going to happen if
  I</span> <span m='1416000'>somehow magically make vIN exactly zero?</span>
  </p><p><span m='1419000'>If I short these two terminals, if this was a
  completely ideal</span> <span m='1425000'>op amp, which it never is, if it's a
  completely ideal op</span> <span m='1430000'>amp, then my output should be
  zero.</span> </p><p><span m='1433000'>As I increase my vIN the output should
  be A times vIN.</span> </p><p><span m='1440000'>For some small value of vIN,
  small v, let's say one</span> <span m='1443000'>microvolt, the output should
  be one volt.</span> </p><p><span m='1446000'>A is a constant so this would
  look like a straight line.</span> </p><p><span m='1450000'>And let's say my
  supply voltages are 12 volts minus 12</span> <span m='1454000'>volts, if this
  were an ideal amplifier and I didn't have to</span> <span m='1459000'>worry
  about the supply, this would just go on extending</span> <span
  m='1463000'>forever. But I have a plus 12 volt</span> <span m='1465000'>supply
  and a minus 12 volt supply.</span> </p><p><span m='1467000'>My output cannot
  go past those limits.</span> </p><p><span m='1472000'>And so, therefore, my
  output kind of flattens out</span> <span m='1475000'>at these two points. And
  it is called hitting the</span> <span m='1479000'>rails. Output goes up and
  you hear a</span> <span m='1482000'>thunk sound and you hit the rails.</span>
  </p><p><span m='1485000'>When you play with op amps in your next lab,</span>
  <span m='1489000'>if you listen really, really carefully you may hear</span>
  <span m='1493000'>it. So, this saturates out.</span> </p><p><span
  m='1495000'>Not surprisingly, this region where the output</span> <span
  m='1499000'>saturates at the supply is called the saturation region.</span>
  </p><p><span m='1505000'>Remember, don't confuse it with-- It's not the same
  as your</span> <span m='1509000'>saturation in the MOSFET. It is a totally
  different</span> <span m='1513000'>thing. It is just happenstance that
  we</span> <span m='1516000'>call this saturation. And if you would like to
  think</span> <span m='1520000'>about it, you can think of it as the thunk
  region.</span> </p><p><span m='1524000'>That's probably more appropriate to
  distinguish it</span> <span m='1527000'>from the saturation region in the
  MOSFET.</span> </p><p><span m='1532000'>And, not surprisingly, this one is
  called the active</span> <span m='1536000'>region. And it is in this region
  that</span> <span m='1539000'>we use the op amp. Here it has hit the rails
  and</span> <span m='1543000'>is kind of dangling out there. It's not much use
  to us.</span> </p><p><span m='1548000'>It's in this active region that we use
  it because this is where</span> <span m='1553000'>the gain is seen. Now, it
  turns out that this is</span> <span m='1558000'>a very high gain device. It is
  very skittish.</span> </p><p><span m='1561000'>This gain is kind of a really
  funny thing.</span> </p><p><span m='1565000'>It's dependent on a bunch of
  factors.</span> </p><p><span m='1568000'>This could be temperature
  dependent.</span> </p><p><span m='1570000'>This gain here and this curve is
  just completely skittish.</span> </p><p><span m='1575000'>It could depend on
  temperature. It could depend on time of day.</span> </p><p><span
  m='1580000'>It could depend on what medication this amplifier is on.</span>
  </p><p><span m='1584000'>It could depend on its mood swings.</span>
  </p><p><span m='1587000'>Who knows what? This is kind of unstable.</span>
  </p><p><span m='1592000'>And A in particular is highly unstable.</span>
  </p><p><span m='1594000'>It is going to be big, that's for sure,</span> <span
  m='1596000'>but it could be ten to the six, on a rainy day it might be
  two</span> <span m='1600000'>times ten to the six. If it feeling sleepy it may
  be</span> <span m='1603000'>point five times ten to the sixth.</span>
  </p><p><span m='1606000'>It is big but I cannot rely on it.</span>
  </p><p><span m='1608000'>Let me show you an example. I want to show you this
  curve</span> <span m='1611000'>for this MOSFET, apply an input and plotting
  the</span> <span m='1614000'>output. What I will do is take a look</span>
  <span m='1616000'>at this curve. Then what I am going to do is</span> <span
  m='1620000'>use a heat gun to heat the op amp and you are going to see</span>
  <span m='1624000'>this vary all over the map. If you still remember
  last</span> <span m='1627000'>week, some of you may remember that from some
  place in a</span> <span m='1631000'>similar situation where the gm for the
  MOSFETs you were given</span> <span m='1635000'>was also dependent on
  temperature and stuff like that.</span> </p><p><span m='1638000'>It is a very
  common occurrence. And that is certainly the case</span> <span m='1642000'>for
  the MOSFET.</span> </p><p><span m='1651000'>Let's apply input. Let's do
  this.</span> </p><p><span m='1654000'>This is vIN versus vOUT for the
  amplifier.</span> </p><p><span m='1658000'>Notice that this is plus 12 volts,
  this is minus 12 volts.</span> </p><p><span m='1664000'>It is about two volts
  per division.</span> </p><p><span m='1667000'>This axis here is in microvolts,
  I believe.</span> </p><p><span m='1672000'>For a very small change, for a few
  tens of microvolts,</span> <span m='1677000'>I have an incredibly high gain.
  Notice that this has an</span> <span m='1683000'>incredibly high gain here.
  The gain is the slope of this</span> <span m='1687000'>line, almost a vertical
  line. What I am going to do next,</span> <span m='1691000'>is to have some
  fun, is I am going to heat the op</span> <span m='1694000'>amp. To show you
  that A is kind of</span> <span m='1696000'>really skittish and also the fact
  that it doesn't quite hit</span> <span m='1700000'>zero, it does all kinds of
  weird things, I am going to heat the</span> <span m='1704000'>op amp. And then
  let's take a look at</span> <span m='1707000'>how that curve
  fluctuates.</span> </p><p><span m='1740000'>What you saw there was that the op
  amp began to behave really</span> <span m='1744000'>weirdly as I heated it.
  Instead of doing this it</span> <span m='1747000'>sometimes did this really
  weirdly, like getting an offset</span> <span m='1751000'>from the center and
  so on. And it does a bunch of other</span> <span m='1755000'>weird things, but
  we won't go into those</span> <span m='1758000'>details. It's not relevant for
  this</span> <span m='1761000'>course. But the point is that the gain</span>
  <span m='1763000'>and the offset at the input are dependent on
  temperature.</span> </p><p><span m='1769000'>And we look for ways to make it
  less dependent on temperature.</span> </p><p><span m='1773000'>As the next
  step, what I would like to do is</span> <span m='1777000'>build a circuit.
  This is model equivalent of</span> <span m='1780000'>your Hello World program.
  We are going to use the printf</span> <span m='1784000'>and build a small
  program on the printf.</span> </p><p><span m='1787000'>You don't have to worry
  about how printf is implemented,</span> <span m='1791000'>just that we can
  build very highly interesting circuits with</span> <span m='1796000'>this
  horrendously complicated function based on a simple</span> <span
  m='1800000'>abstraction of the device. The circuit that we will build</span>
  <span m='1808000'>is called a noninverting amplifier.</span> </p><p><span
  m='1820000'>From now on, I am not going to show you the</span> <span
  m='1822000'>plus/minus VS. I am not going to show the</span> <span
  m='1825000'>power port, but it is in there. It's hidden under the</span> <span
  m='1828000'>abstraction layer. This is my op amp.</span> </p><p><span
  m='1831000'>And I am going to build the following circuit.</span> </p><p><span
  m='1835000'>This is my v plus and this is my v minus.</span> </p><p><span
  m='1838000'>What I am going to do is for the v plus I shall apply a
  vIN.</span> </p><p><span m='1843000'>Let me talk a little bit about ground as
  well.</span> </p><p><span m='1847000'>Ground is commonly taken as the point at
  which I connect my VS</span> <span m='1852000'>and minus VS supply. It is kind
  of at the midpoint.</span> </p><p><span m='1858000'>And if VS and minus VS are
  very carefully tuned then the output</span> <span m='1863000'>is also going to
  be at that same ground reference when the input</span> <span m='1868000'>is
  zero. So, the ground is defined as</span> <span m='1871000'>the point at which
  I connect my plus/minus VS supplies.</span> </p><p><span m='1876000'>I apply
  my vIN out here. Then what I am going to do,</span> <span m='1880000'>here is
  my output vO. I am going to have a resistive</span> <span m='1884000'>divider
  to ground here and label these R1 and R2.</span> </p><p><span m='1890000'>And
  what I am going to do here is feed this back to the input,</span> <span
  m='1896000'>to the v minus input. I am going to sample the</span> <span
  m='1900000'>voltage here and feed that into here.</span> </p><p><span
  m='1904000'>So, this is my abstract model and this is my Hello World</span>
  <span m='1909000'>program. What we are going to do is</span> <span
  m='1913000'>simply analyze how this little program behaves.</span>
  </p><p><span m='1919000'>So, my equivalent circuit model.</span> </p><p><span
  m='1920000'>The way to analyze these is after one or two of these</span> <span
  m='1923000'>examples, you will be able to directly analyze this just by</span>
  <span m='1927000'>looking at it, by inspection.</span> </p><p><span
  m='1929000'>But, much as we did for the other pieces,</span> <span
  m='1931000'>let me grunge through drawing the equivalent circuit and</span>
  <span m='1934000'>grinding through the analysis, and then show you the
  much</span> <span m='1938000'>simpler way of doing it. And even here,</span>
  <span m='1940000'>even with this grinding analysis, it is going to be</span>
  <span m='1943000'>pretty simple in any case. So, I will replace the op
  amp</span> <span m='1946000'>with its equivalent circuit model.</span>
  </p><p><span m='1950000'>Its equivalent circuit was v plus, v minus.</span>
  </p><p><span m='1964000'>So, that was the equivalent circuit model of the
  operational</span> <span m='1969000'>amplifier, just this piece. I draw that
  for you.</span> </p><p><span m='1973000'>Then what I am going to do is I
  connect my v in here.</span> </p><p><span m='1979000'>And, remember, I have an
  R1,</span> <span m='1982000'>R2 resistive divider here. And this one gets
  connected to</span> <span m='1989000'>this terminal there. I also know that i
  plus is</span> <span m='1994000'>zero. I also know that i minus is</span>
  <span m='1998000'>zero. All I've done is simply</span> <span
  m='2002000'>replaced the amplifier with its equivalent circuit.</span>
  </p><p><span m='2010000'>Let's go ahead and analyze that circuit now.</span>
  </p><p><span m='2014000'>Let's go ahead and analyze that circuit.</span>
  </p><p><span m='2018000'>And it's going to be pretty simple, actually.</span>
  </p><p><span m='2022000'>What I am going to show you is the hard way of doing
  it.</span> </p><p><span m='2028000'>I will show you a much easier way, but the
  hard way itself is</span> <span m='2034000'>pathetically easy. What I want to
  do is find vO in</span> <span m='2039000'>terms of vIN. And there will be a
  bunch of</span> <span m='2044000'>other factors thrown in, including things
  like R1 and</span> <span m='2048000'>R2, A and stuff like that. Let's go and
  analyze it.</span> </p><p><span m='2052000'>vO, let's look at that circuit. By
  the way, let me take 30</span> <span m='2056000'>seconds and make a little
  speech at this point.</span> </p><p><span m='2060000'>When you see circuits
  like this, and I saw this happen in</span> <span m='2064000'>quiz two as well,
  for some reason,</span> <span m='2067000'>when you see a new kind of circuit,
  don't completely go</span> <span m='2071000'>berserk or freeze or whatever.
  There is just no reason to.</span> </p><p><span m='2076000'>You know the node
  method. The node method is the</span> <span m='2079000'>workhorse of our
  business. When in doubt apply the node</span> <span m='2083000'>method. It
  will simply work.</span> </p><p><span m='2085000'>Don't freeze. Don't think
  oh,</span> <span m='2087000'>man, I need to apply a pattern that I know
  already.</span> </p><p><span m='2090000'>I must have seen this
  somewhere.</span> </p><p><span m='2092000'>When in doubt boom, apply the node
  method.</span> </p><p><span m='2096000'>This circuit here, all I have here is
  one unknown</span> <span m='2100000'>node voltage. I know the voltage of v
  plus,</span> <span m='2103000'>I need to compute the voltage vO.</span>
  </p><p><span m='2106000'>There are two unknowns, vO is an unknown and
  the</span> <span m='2110000'>voltage here at v minus is another
  unknown.</span> </p><p><span m='2114000'>This is a very simple circuit
  involving a dependent voltage</span> <span m='2118000'>controlled voltage
  source, and you need to find out vO and</span> <span m='2123000'>v minus using
  the node method. Just apply it.</span> </p><p><span m='2127000'>It's simple.
  Don't freeze.</span> </p><p><span m='2131000'>Just look at it and say I can do
  it and apply the node method.</span> </p><p><span m='2136000'>It will simply
  work. So, let's do that.</span> </p><p><span m='2140000'>What I can do here is
  vO is A times v plus minus v minus.</span> </p><p><span m='2145000'>This is
  actually really simple. And then, if I take v plus</span> <span
  m='2150000'>here, I know v plus is simply vIN so I will just make that</span>
  <span m='2155000'>substitution right away. So, v plus is simply vIN.</span>
  </p><p><span m='2161000'>What is v minus? v minus here is vO --</span> <span
  m='2185000'>What is v plus? I'm sorry, v minus.</span> </p><p><span
  m='2187000'>v minus is simply the voltage that is between R1 and R2.</span>
  </p><p><span m='2193000'>Notice that no current flows in to the v minus
  node.</span> </p><p><span m='2197000'>There is no current flowing in. Voltage
  at v minus is simply</span> <span m='2202000'>the voltage given by the
  resistive divider,</span> <span m='2206000'>which is vO times R2 divided by R1
  plus R2.</span> </p><p><span m='2210000'>Stare at that for another
  second.</span> </p><p><span m='2212000'>The voltage at this node here is
  simply given by the resistive</span> <span m='2218000'>divider. Because no
  current is flowing</span> <span m='2222000'>in this direction. And no current
  flows in because</span> <span m='2226000'>I am telling you there is no current
  there based on my</span> <span m='2230000'>abstraction. I am telling you i
  minus is</span> <span m='2234000'>zero. That voltage is simply the</span>
  <span m='2236000'>voltage at this resistive divider.</span> </p><p><span
  m='2239000'>And so I can simplify it further and write this as vO.</span>
  </p><p><span m='2243000'>So I get, there is a one here. And I move this thing
  over to</span> <span m='2248000'>this side so I get one plus A times R2
  divided by R1 plus R2.</span> </p><p><span m='2255000'>And that is equal to
  AvIN. And simplifying it some more,</span> <span m='2262000'>I get vO is AvIN
  divided by one plus AR2 divided by R1 plus R2.</span> </p><p><span
  m='2271000'>Notice how simple this is, and this is the hard method.</span>
  </p><p><span m='2280000'>All I have done is analyze the circuit using the
  basic circuit</span> <span m='2285000'>analysis principle that you learned the
  first week of the</span> <span m='2289000'>course, and I have the output for
  you.</span> </p><p><span m='2292000'>I just noted very carefully what the
  relationships were</span> <span m='2297000'>between the various elements in
  the abstraction.</span> </p><p><span m='2300000'>Notice here that I am told
  that A is extremely large.</span> </p><p><span m='2305000'>A is on the order
  of ten to the six and so on.</span> </p><p><span m='2310000'>And suppose it is
  the case that, let me write that down</span> <span m='2316000'>again. vO is
  AvIN, one plus AR2,</span> <span m='2320000'>R2. Suppose R1 and R2 are more
  or</span> <span m='2324000'>less comparable and A is ten to the six, it's a
  huge number,</span> <span m='2332000'>so this whole number is much, much
  greater than one.</span> </p><p><span m='2340000'>If it is much huger than
  one, what I can do is I can then</span> <span m='2346000'>write this as
  follows. I can say that this is more or</span> <span m='2353000'>less equal to
  AvIN divided by AR2 divided by R1 plus R2.</span> </p><p><span m='2360000'>I
  am ignoring the one here. As soon as I do that,</span> <span
  m='2366000'>notice I can cancel out A and I get vO to be approximately
  equal</span> <span m='2374000'>to vIN times R1 plus R2 divided by R2.</span>
  </p><p><span m='2380000'>Notice now that when the gain is very large the
  output is a</span> <span m='2385000'>function of the input multiplied by some
  number.</span> </p><p><span m='2389000'>The beauty of this thing here is that
  when A is very large,</span> <span m='2394000'>or this expression is very
  large, A cancels out and there</span> <span m='2399000'>is no A in this
  relationship. This means that even though the</span> <span m='2406000'>basic
  amplifier was very skittish, the output here</span> <span m='2411000'>relates
  to the input based on components that I have control</span> <span
  m='2416000'>over. These are soldiers in my army.</span> </p><p><span
  m='2420000'>I control them. So, to give you a sense of some</span> <span
  m='2425000'>numbers here, suppose A was ten to the six.</span> </p><p><span
  m='2429000'>And I choose R1 to be 9R. And R to be some R.</span> </p><p><span
  m='2435000'>Then vO is ten to the sixth vIN divided by one plus ten to
  the</span> <span m='2444000'>six R divided by 9R plus R. So, that is ten to
  the six vIN</span> <span m='2452000'>divided by one plus ten to the six
  divided by ten.</span> </p><p><span m='2461000'>All right. If I ignore the one
  here,</span> <span m='2465000'>the ten to the six and ten to the six cancel
  out,</span> <span m='2471000'>this ends up giving me 10vIN. So, I get a really
  nice</span> <span m='2477000'>amplifier whose output is simply ten times the
  input and</span> <span m='2483000'>determined solely by some resistor
  values.</span> </p><p><span m='2490000'>Let me show you another quick demo
  this time and show you the</span> <span m='2494000'>amplifier again, but with
  resistors connected</span> <span m='2497000'>like that. And then I show you
  that I want</span> <span m='2501000'>to heat the amplifier to the wazoo, the
  op amp to the wazoo,</span> <span m='2505000'>but vO is going to be absolutely
  rock solid.</span> </p><p><span m='2508000'>Let's try that out.</span>
  </p><p><span m='2520000'>This time around, this is the transfer
  function,</span> <span m='2523000'>the vO versus vIN. And notice that this
  time</span> <span m='2527000'>around I have similar scales on the X and Y
  axes,</span> <span m='2531000'>and this has a slope of 10. This is the point
  where the</span> <span m='2535000'>amplifier saturates at plus 12 volts, and
  this is minus 12</span> <span m='2540000'>volts, and this point here is a
  zero.</span> </p><p><span m='2543000'>So, this is vIN, vOUT, plus 12,</span>
  <span m='2545000'>minus 12 and this slope is 10. What I am going to do now
  is</span> <span m='2551000'>heat the op amp to the wazoo and this ain't going
  to change</span> <span m='2556000'>because it's my external resistors that
  control it</span> <span m='2560000'>independent of the value of A, provided A
  continues to be very</span> <span m='2565000'>large. I am just articulating
  the</span> <span m='2567000'>vOUT, vIN curve. And let me start heating the
  op</span> <span m='2571000'>amp.</span> </p><p><span m='2581000'>Notice that
  it's pretty stable. It doesn't change because it is</span> <span
  m='2586000'>independent of the amplifier values.</span> </p><p><span
  m='2589000'>What I have done now is by connecting these resistors in</span>
  <span m='2594000'>this way, I have a nice amplifier with a gain of ten.</span>
  </p><p><span m='2598000'>The question you may ask yourselves is why?</span>
  </p><p><span m='2602000'>There is this little sucker in there that wants to
  shoot things</span> <span m='2607000'>up by ten to the sixth. Wants to knock
  things off the</span> <span m='2612000'>one rail or the negative rail. Why is
  it that it's behaving</span> <span m='2616000'>like a docile lamb here and
  giving us a nice little factor</span> <span m='2619000'>of ten gain no matter
  what I do to it?</span> </p><p><span m='2621000'>Why is it doing that? What is
  the intuition behind</span> <span m='2624000'>it? I will draw something on
  the</span> <span m='2626000'>board, but for the next ten seconds I want you
  think about</span> <span m='2630000'>it. See if you can come up with</span>
  <span m='2631000'>some insight as to why is it doing that.</span> </p><p><span
  m='2634000'>Why is it exactly ten? Why isn't the ten to the sixth</span> <span
  m='2637000'>kind of killing me somehow? Why am I getting exactly ten no</span>
  <span m='2641000'>matter what happens? See if you can come up with</span>
  <span m='2644000'>some intuition and then I will show you how it works.</span>
  </p><p><span m='2647000'>I will redraw the circuit in the meantime.</span>
  </p><p><span m='2668000'>Let me see if I can give you some intuition.</span>
  </p><p><span m='2670000'>This is my circuit, and let's say this is R
  and</span> <span m='2674000'>this is R. As an example,</span> <span
  m='2676000'>let's assume that the input is 5 volts, vIN is 5 volts.</span>
  </p><p><span m='2682000'>If R and R are equal, what should the output
  be?</span> </p><p><span m='2686000'>It's R and R, so it's R1 plus R2 divided
  by</span> <span m='2690000'>R2, right? It's 2R divided by R,</span> <span
  m='2693000'>so it has a gain of two. My amplifier has a gain of two</span>
  <span m='2699000'>because R1 plus R2 divided by R2, which is my gain,</span>
  <span m='2703000'>is R plus R divided by R equals two.</span> </p><p><span
  m='2709000'>So, this will be 10 volts. If that is 10 volts this is</span>
  <span m='2713000'>going to be 5 volts, correct?</span> </p><p><span
  m='2716000'>This R and R, voltage divider,</span> <span m='2718000'>this is
  five, so I get 5 volts here.</span> </p><p><span m='2722000'>This is v plus.
  This is v minus.</span> </p><p><span m='2724000'>I get R and R, 5 volts
  here,</span> <span m='2727000'>that's how the circuit looks. Now let's
  understand what is</span> <span m='2732000'>going on. And listen very
  carefully.</span> </p><p><span m='2734000'>This is going to be a key insight
  that I hope you will</span> <span m='2737000'>carry with you for the rest of
  your lives.</span> </p><p><span m='2740000'>This is really, really key.</span>
  </p><p><span m='2741000'>What you are going to see is, I think, the third big
  ah-ha</span> <span m='2745000'>moment in 6.002. Like small signal
  analysis,</span> <span m='2747000'>like the frequency domain stuff we saw, I
  think this is the</span> <span m='2751000'>third big one in the next 30 or 40
  seconds, things that are</span> <span m='2754000'>completely either not
  necessarily intuitive but are</span> <span m='2757000'>just spectacular in
  terms of what they can do for you.</span> </p><p><span m='2762000'>Let's see.
  Let's suppose that because I am</span> <span m='2764000'>heating it, let's
  suppose that A suddenly tends to increase.</span> </p><p><span m='2768000'>It
  wants to increase because I have heated it.</span> </p><p><span m='2771000'>A
  is saying I want to get out this mold here and starts to</span> <span
  m='2775000'>break through its shackles here. Let's say, as a Gedanken</span>
  <span m='2779000'>experiment, that it tries to shoot up this to 12
  volts.</span> </p><p><span m='2782000'>It tries to push it up higher. This is
  just a Gedanken</span> <span m='2786000'>experiment. The up arrow says that
  the</span> <span m='2790000'>increase in A is trying to push up vO
  momentarily.</span> </p><p><span m='2794000'>Let's see what happens. It is
  trying to push up vO</span> <span m='2798000'>momentarily, so let's say this
  goes to 12 hypothetically.</span> </p><p><span m='2803000'>If that goes to 12,
  what should this volt node go</span> <span m='2807000'>to? Six,
  exactly.</span> </p><p><span m='2809000'>This goes to 6 volts. If that goes to
  six,</span> <span m='2812000'>what does v minus go to? 6 volts again.</span>
  </p><p><span m='2816000'>So, v minus goes to 6 volts. Now at the input I have
  5 volts</span> <span m='2822000'>at v plus and 6 volts at v minus, so where
  should the</span> <span m='2826000'>output go? The output should go
  down</span> <span m='2829000'>because the voltage of the negative terminal is
  higher.</span> </p><p><span m='2833000'>And so the output is A times v plus
  minus v minus.</span> </p><p><span m='2837000'>And because this has gone down,
  this has gone up here it is</span> <span m='2842000'>going to try to pull the
  output down.</span> </p><p><span m='2845000'>That is going to pull the output
  down let's say to 9 volts</span> <span m='2849000'>or something. Cachunk,
  there is a big battle</span> <span m='2854000'>going on here. A has gone
  up,</span> <span m='2855000'>it has boosted it up to 12, but the moment that
  goes to 12,</span> <span m='2859000'>this goes to 6, this goes to 6,</span>
  <span m='2861000'>and the op amp output has to go down to 9 volts now because
  this</span> <span m='2865000'>input is higher here. If this goes to 9,</span>
  <span m='2868000'>this goes to 4.5. If that goes to 4.5,</span> <span
  m='2871000'>this goes to 4.5. What happens now?</span> </p><p><span
  m='2873000'>If this goes to 4.5, what happens?</span> </p><p><span
  m='2875000'>It wants to go back up. Can't it make up its mind?</span>
  </p><p><span m='2880000'>This guy wants to go back up now because v plus is
  higher</span> <span m='2884000'>than v minus. What am I seeing here?</span>
  </p><p><span m='2887000'>This whole circuit here behaves like my little
  son,</span> <span m='2891000'>my 9-year-old. If say do this,</span> <span
  m='2894000'>he wants to do the exact opposite.</span> </p><p><span
  m='2897000'>So, there is a trick in how you make them do things for
  you.</span> </p><p><span m='2901000'>Look at this. Because of this arrangement
  of</span> <span m='2905000'>the circuit when A tries to push the output
  up,</span> <span m='2909000'>the rest of the circuit tries to pull it back
  down to where it</span> <span m='2914000'>used to be. If the circuit tries not
  to</span> <span m='2919000'>follow the true path, the rest of the circuit
  tries</span> <span m='2923000'>to whack it into shape so it follows a true
  path.</span> </p><p><span m='2928000'>And what's happening is because, in this
  arrangement,</span> <span m='2932000'>I have fed back a portion of the output
  to the negative</span> <span m='2937000'>input. I have fed back some of
  the</span> <span m='2941000'>output to the negative input. And by providing
  this feedback</span> <span m='2946000'>of a portion of the output to the
  negative input,</span> <span m='2949000'>I have arranged it in a way that I
  have something called</span> <span m='2954000'>negative feedback. What
  negative feedback does is</span> <span m='2958000'>that if this wanted to go
  wild and crazy, the circuit provides</span> <span m='2963000'>it with some
  negative feedback like you just saw.</span> </p><p><span m='2967000'>Feedback,
  a big word. If you take a poll of all the</span> <span m='2972000'>EECS
  faculty, I suspect that feedback would</span> <span m='2975000'>rank at least
  as the ninth or tenth most important word in the</span> <span
  m='2979000'>EECS. If abstract is number one,</span> <span m='2981000'>I think
  this would rank like a nine or a ten or something.</span> </p><p><span
  m='2986000'>So, that's the reason why it worked.</span> </p><p><span
  m='2988000'>In the last couple of minutes, let me give you some
  insight,</span> <span m='2993000'>based on something that you know, on how
  feedback works.</span> </p><p><span m='2997000'>This is a road here. Let's
  look at anti lock breaks.</span> </p><p><span m='3002000'>This is my tire. And
  let's say I have a set of</span> <span m='3005000'>disk brakes here. As the
  car is moving forward,</span> <span m='3009000'>if I apply the brakes the tire
  stops rolling,</span> <span m='3013000'>but if I apply the breaks too hard it
  can lock up the tire and</span> <span m='3018000'>the whole car can skid. The
  way anti lock breaks work</span> <span m='3022000'>is as follows. There is a
  controller that sits</span> <span m='3026000'>here. And there is a little
  person</span> <span m='3030000'>looking at the wheel and seeing is it
  turning.</span> </p><p><span m='3034000'>So, this is a feedback. And it is
  saying is it turning?</span> </p><p><span m='3039000'>Yes. Or, is it not
  turning?</span> </p><p><span m='3042000'>No. All this person watching
  the</span> <span m='3045000'>tire is doing is saying is it turning or is it
  not turning.</span> </p><p><span m='3050000'>That is it. That is a negative
  feedback.</span> </p><p><span m='3054000'>And so, if it is no and if it is
  yes.</span> </p><p><span m='3059000'>If it is yes then what this does is it
  applies the brakes</span> <span m='3063000'>even more strongly. It is turning
  so I can apply</span> <span m='3066000'>more brakes. But if it says
  oops,</span> <span m='3068000'>it stopped turning, what it does is it
  simply</span> <span m='3071000'>releases, the controller releases the
  brakes.</span> </p><p><span m='3075000'>And when the controller releases the
  brakes this one</span> <span m='3078000'>tends to loosen up a little bit and
  the tire starts turning</span> <span m='3083000'>again. So, this way you are
  constantly</span> <span m='3085000'>keeping the tire in its region of critical
  friction so that it</span> <span m='3090000'>is constantly moving. And static
  friction applies to</span> <span m='3094000'>how hard you can brake and it
  doesn't start skidding.</span> </p><p><span m='3097000'>In fact, if you take
  your car out, and I don't say you do</span> <span m='3101000'>this. Let's say
  go onto the Charles</span> <span m='3102000'>River in the dead of winter and
  you drive on the lake and you</span> <span m='3106000'>slam your anti lock
  brakes on, on an icy patch,</span> <span m='3109000'>you will notice that
  there is a constant sound that looks like</span> <span m='3112000'>something
  is vibrating in there. That is exactly what is</span> <span
  m='3115000'>happening. Oops, the tire is locked.</span> </p><p><span
  m='3117000'>Release the brakes. The wheel is turning.</span> </p><p><span
  m='3121000'>Jam the brakes on. That is exactly what is</span> <span
  m='3123000'>happening. The same way as out there,</span> <span m='3125000'>you
  notice that oops, the output is going up,</span> <span m='3128000'>pull it
  down, oops, it's going down,</span> <span m='3130000'>pull it up. So, there is
  constant negative</span> <span m='3132000'>feedback that is keeping the output
  stable.</span> </p><p><span m='3135000'>A very important concept. And I will
  ask your recitation</span> <span m='3138000'>instructors to cover the very
  simple method that is on page 9.</span> </p>
uid: 4aa4220dc30f836dd6848ba21f591686
type: courses
layout: video
---
