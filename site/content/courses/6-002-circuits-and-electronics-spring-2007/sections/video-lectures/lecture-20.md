---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Operational amplifier circuits</p>
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec20.jpg
    parent_uid: 406b85888e78496373031ef92300ad37
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-20/thumb_lec20.jpg
    title: thumb_lec20.jpg
    type: null
    uid: 121d0addad69dde4ad71cd0d93b063d8
  - id: Video-YouTube-Stream
    media_location: 2SwT6JnfCq8
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Video-YouTube-Stream
    type: Video
    uid: 049e57d5a21b96a514c27bb02e8e649a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/2SwT6JnfCq8/default.jpg'
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6a94ad585cb2c5ce6fa77918b6d6cba2
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Video-iTunes U-MP4
    type: Video
    uid: d6749d00d1e27a52e5be613445cbdf95
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-20nov2003-220k.mp4
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3af3ed15dab4938882cbd0363f44846b
  - id: Thumbnail-OCW-JPG
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 432ee468b9462ec2b3d613473e7dca9e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 2SwT6JnfCq8
    parent_uid: 406b85888e78496373031ef92300ad37
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 49e2dff85198783d0b1b38396eb117b5
  - id: 2SwT6JnfCq8.srt
    parent_uid: 406b85888e78496373031ef92300ad37
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-20/2SwT6JnfCq8.srt
    title: 3play caption file
    type: null
    uid: 0992c2ca872ce5210c454e4649d618cf
  - id: 2SwT6JnfCq8.pdf
    parent_uid: 406b85888e78496373031ef92300ad37
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-20/2SwT6JnfCq8.pdf
    title: 3play pdf file
    type: null
    uid: 65d1a318e9a97ce5e0d016d2b48a7efd
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 0b5812d758f4bff53b1ada9fabd76989
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 406b85888e78496373031ef92300ad37
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bcc06b7dfa9927194cb364c8d115b3f9
inline_embed_id: '886747lecture20:operationalamplifiercircuits61221120'
order_index: 369
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/e7d4a7f9d1caee6423433e898bd940cc">PDF</a>)<br />
  Demonstration: Integrator and differentiator op-amp (<a target="_blank"
  title="Open in a new window."
  href="./resolveuid/11771c2adc52f05d65c3fc27fdacdc58">PDF</a>)<br />
  Demonstration: Integrator and differentiator RC network (<a target="_blank"
  title="Open in a new window."
  href="./resolveuid/d31f7bc824ceb3d0678e833101250e4d">PDF</a>)</p>
short_url: lecture-20
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-20
title: 'Lecture 20: Operational Amplifier Circuits'
transcript: >-
  <p><span m='17000'>All right. Good morning.</span> </p><p><span
  m='20000'>Let's get going. In today's lecture we continue</span> <span
  m='26000'>with the operational amplifier, "op amp" for short.</span>
  </p><p><span m='34000'>And what we are going to do is just build up a bunch of
  fun</span> <span m='40000'>building blocks using the op amp.</span>
  </p><p><span m='43000'>As a quick review --</span> <span m='57000'>To quickly
  review what we've seen about the op amp --</span> <span m='69000'>We
  represented the op amp as a device that looked like this</span> <span
  m='76000'>where the amplifier had an incredibly high gain.</span> </p><p><span
  m='83000'>So, if I had a small voltage difference here --</span> <span
  m='90000'>I call this v plus and this v minus with respect to ground.</span>
  </p><p><span m='94000'>And if I had a small voltage difference then this gain
  here</span> <span m='99000'>would multiply the difference by a large number
  and thereby</span> <span m='103000'>giving me an output that was on the order
  of a million times</span> <span m='108000'>greater than this difference. And
  because of that when I use</span> <span m='113000'>the op amp in a mode like
  this without any negative feedback</span> <span m='117000'>the output would
  usually crank up to the positive rail or the</span> <span m='122000'>negative
  rail. We also saw that it had</span> <span m='127000'>infinite input
  resistance so that the current flowing in here</span> <span m='134000'>or here
  was zero and also had zero output resistance.</span> </p><p><span
  m='140000'>This is my ideal op amp where irrespective of what load I</span>
  <span m='147000'>connect here the op amp would supply pretty much any
  current.</span> </p><p><span m='155000'>Now, in practical op amps that's not
  the case.</span> </p><p><span m='158000'>But suffice it to say that when used
  as an ideal op amp the</span> <span m='162000'>output impedance, the output
  resistance is going</span> <span m='166000'>to be zero. The op amp is a huge
  workhorse</span> <span m='169000'>of the analog industry. You will see based
  both on what</span> <span m='173000'>you've done on Tuesday and Wednesday but
  also today that</span> <span m='177000'>it's very, very simple to build
  circuits using the op amp.</span> </p><p><span m='183000'>When you use the
  amplifier, you don't have to worry about</span> <span m='187000'>things like
  nonlinear analysis. You don't have to worry about</span> <span m='191000'>am I
  really meeting the criteria for saturation limits and so on?</span>
  </p><p><span m='196000'>To some extent you have to think about that with the
  op</span> <span m='200000'>amp, too, because if the output hits the positive
  rail or</span> <span m='204000'>negative rail it isn't going to behave like
  you expect it to.</span> </p><p><span m='210000'>But fundamentally with this
  primitive model,</span> <span m='213000'>this idea model it becomes really
  simple to build circuits</span> <span m='217000'>with the op amp. Therefore it
  has become a key</span> <span m='221000'>building block for circuits. When
  circuit designers build</span> <span m='225000'>analog circuits very often
  their primitive building blocks are</span> <span m='230000'>really an
  amplifier of this sort, an op amp,</span> <span m='233000'>resistors,
  capacitors and some of our other primitive building</span> <span
  m='238000'>elements. If you look at the course notes</span> <span
  m='241000'>the readings are -- There are a bunch of examples</span> <span
  m='245000'>solved in Chapter 16. And you will see that using the</span> <span
  m='249000'>op amp it is indeed possible to build current sources that
  look</span> <span m='253000'>like more or less ideal current sources.</span>
  </p><p><span m='255000'>It is also possible to build voltage sources and so
  on.</span> </p><p><span m='258000'>It is an incredibly neat building block
  using which you</span> <span m='262000'>can do all kinds of cool stuff.</span>
  </p><p><span m='273000'>In this course you will see a whole bunch of example
  circuits</span> <span m='278000'>using the op amp. In today's lecture you will
  see</span> <span m='283000'>things like a subtractor. You will also see
  integrators</span> <span m='288000'>and a differentiator. And then in your
  lab,</span> <span m='293000'>lab four, you will build a really fun mixed
  signal circuit</span> <span m='298000'>involving both digital and analog
  components.</span> </p><p><span m='304000'>And you will build what is called a
  digital to an analog</span> <span m='309000'>converter using the op amp. And
  of course I can build all</span> <span m='314000'>our good-old amplifiers and
  circuits of that sort.</span> </p><p><span m='319000'>In a later lecture you
  will also see how we can build</span> <span m='324000'>filters using an op
  amp. This is going to be using the</span> <span m='330000'>knowledge you learn
  in terms of connecting resistors,</span> <span m='333000'>capacitors and
  inductors together and doing a frequency</span> <span m='337000'>domain
  analysis, well we can throw the op amp in</span> <span m='340000'>there and
  build filters, too.</span> </p><p><span m='342000'>This is just to give you a
  preview of upcoming attractions.</span> </p><p><span m='346000'>For today I am
  going to focus on these circuits.</span> </p><p><span m='350000'>I won't be
  covering any new theory or any new set of</span> <span m='353000'>foundations
  but pretty much take the simple properties that I</span> <span m='358000'>have
  explained to you about the op amp.</span> </p><p><span m='362000'>And using
  those simple properties very quickly build up</span> <span m='367000'>a bunch
  of circuits that you can use to analyze signals in a</span> <span
  m='373000'>variety of ways. Let's start with the following</span> <span
  m='377000'>circuit. With op amps I start with this</span> <span
  m='381000'>little guy. And what I am going to do is</span> <span
  m='385000'>use two voltage sources, v1, and this is a resistor,</span> <span
  m='390000'>not an inductor. And value R1,</span> <span m='394000'>value R2.
  So, I have a voltage connected</span> <span m='398000'>by a divider, voltage
  divider to the plus</span> <span m='402000'>input. And I am going to provide
  some</span> <span m='406000'>negative feedback in the following way.</span>
  </p><p><span m='410000'>This is going to be R2, the same as this one
  here,</span> <span m='416000'>a resistor R1. And then a voltage source
  v2</span> <span m='421000'>that I connect out here. So notice that- Oh,</span>
  <span m='425000'>and I take the output vOUT out here.</span> </p><p><span
  m='429000'>And that vOUT of course is with respect to ground,</span> <span
  m='433000'>and R2, v1 and v2 are also connected to ground.</span> </p><p><span
  m='438000'>What I am going to do is analyze the circuit it two</span> <span
  m='442000'>different ways, and as I analyze it describe</span> <span
  m='446000'>some other interesting properties to you.</span> </p><p><span
  m='452000'>In the last lecture the technique I used to analyze op</span> <span
  m='455000'>amps was one in which I replaced the op amp with its ideal
  model</span> <span m='459000'>involving a dependent source and so on with a
  large gain A and</span> <span m='463000'>showed that. I wrote the expression
  and then</span> <span m='466000'>I let A increase to infinity to the limits
  and got an expression</span> <span m='470000'>that was independent of A. And
  then in recitation</span> <span m='473000'>yesterday you would have covered
  another technique which makes it</span> <span m='477000'>much simpler to
  analyze op amps. Let me very quickly review that</span> <span
  m='484000'>method. We fondly call that technique,</span> <span
  m='487000'>there is no formal name for it, but we fondly call that v
  plus</span> <span m='493000'>more or less equal to v minus method.</span>
  </p><p><span m='497000'>This is also variously called the virtual ground
  method and so</span> <span m='503000'>on, but we shall call it the v plus more
  or less equal to v</span> <span m='509000'>minus method. The insight here is
  that</span> <span m='513000'>whenever I use the op amp in a way in which I am
  giving it</span> <span m='517000'>negative feedback, so I am feeding some
  portion of</span> <span m='521000'>the output to its negative input.</span>
  </p><p><span m='523000'>I am giving it negative feedback.</span> </p><p><span
  m='525000'>That's one property. Second property is that my</span> <span
  m='529000'>inputs, v1 and v2, and my resistance values are</span> <span
  m='532000'>chosen such that the output is not in saturation.</span>
  </p><p><span m='535000'>So, the op amp is not at the plus VS rail or minus VS
  rail.</span> </p><p><span m='541000'>Rather it's somewhere in the middle in
  its active region.</span> </p><p><span m='545000'>When that happens we claim
  that the v minus and v plus for the</span> <span m='550000'>op amp are more or
  less equal. And to give you some intuition</span> <span m='556000'>as to why
  that is so, let's say the output is 6 volts</span> <span m='560000'>and my
  supply is plus/minus 12. This is 6 volts and the</span> <span
  m='564000'>amplifier is a gain of a million, ten to the six.</span>
  </p><p><span m='570000'>To sustain 6 volts at the output all I need is
  a</span> <span m='573000'>difference of 6 microvolts here. Six divided by ten
  to the six</span> <span m='578000'>is the difference between v plus and v
  minus.</span> </p><p><span m='582000'>It's very, very, very small.</span>
  </p><p><span m='584000'>It's so small as to make v plus more or less equal to
  v minus.</span> </p><p><span m='589000'>All it takes is a very small
  differential voltage here to</span> <span m='594000'>give you 6 volts at the
  output. The key thing to observe is</span> <span m='599000'>under negative
  feedback, when the op amp is not in</span> <span m='603000'>saturation the
  property that v plus equals v minus holds.</span> </p><p><span m='607000'>And
  the way it works is that it's not that it's a magical</span> <span
  m='611000'>property. It is simply that when I apply</span> <span
  m='614000'>negative feedback the negative feedback is such that it will</span>
  <span m='618000'>force this v minus node here to be at more or less the
  same</span> <span m='623000'>voltage as v plus. Remember the when in
  doubt</span> <span m='626000'>simply go back and think about the anti lock
  brakes example we</span> <span m='630000'>did last time. For example if v plus
  increases</span> <span m='635000'>the output will increase and so will the
  voltage here and tend</span> <span m='639000'>to make these two equal. What we
  can do,</span> <span m='642000'>being rather tricky here, what we'll do is say
  look,</span> <span m='646000'>if we know for a fact that under negative
  feedback the op</span> <span m='650000'>amp is going to engineer these two
  node voltages to be more or</span> <span m='654000'>less equal then why don't
  I just use that fact to begin with and</span> <span m='658000'>analyze my
  circuit assuming that it's true.</span> </p><p><span m='663000'>This is just a
  bit of inverted logic here that says look,</span> <span m='666000'>the circuit
  is going to make that happen.</span> </p><p><span m='668000'>If the circuit is
  going to make that happen to analyze the</span> <span m='671000'>circuit in
  its steady state, why don't I just go ahead and</span> <span m='674000'>assume
  that to begin with? This again goes back to us</span> <span m='677000'>wanting
  to be engineers here and do whatever is simply and find</span> <span
  m='681000'>the simplest possible way of getting some place.</span>
  </p><p><span m='683000'>I want to use that method, the v plus equals v
  minus</span> <span m='686000'>method. Let me just first write down</span>
  <span m='690000'>some values that I know about. I know that v plus is simply
  a</span> <span m='696000'>voltage divider relation here. That's v1 times R2
  divided by</span> <span m='702000'>R1 plus R2. And by the v plus equals
  v</span> <span m='705000'>minus method I know that this is going to be equal
  to v minus.</span> </p><p><span m='711000'>And this is going to be true
  because I am giving you negative</span> <span m='717000'>feedback here. And we
  are going to engineer</span> <span m='722000'>the values of R1, R2, v1 and v2
  such that the op</span> <span m='726000'>amp is not in saturation. So, we know
  that.</span> </p><p><span m='729000'>The next thing that we know, let's say
  this is a current i.</span> </p><p><span m='734000'>This current i flows here.
  Know that there is no current</span> <span m='739000'>going in here. Op amp
  has an infinite input</span> <span m='743000'>resistance so there is nothing
  going in there.</span> </p><p><span m='746000'>There is no current going in
  there.</span> </p><p><span m='751000'>If there is no current going in here,
  what must happen to i?</span> </p><p><span m='755000'>Remember, from the
  foundations of the universe Maxwell's</span> <span m='759000'>equations and
  therefore KVL and KCL hold.</span> </p><p><span m='762000'>KVL and KCL simply
  come straight from nature.</span> </p><p><span m='765000'>You and I cannot
  mess with that.</span> </p><p><span m='767000'>Bad things happen to you if you
  do.</span> </p><p><span m='770000'>So, nature, Maxwell's equations,
  KVL,</span> <span m='772000'>KCL. It's simply nature.</span> </p><p><span
  m='774000'>So, KCL applies here. Current comes in here.</span> </p><p><span
  m='779000'>Nothing goes there. Don't argue.</span> </p><p><span m='781000'>The
  current has to go here, period.</span> </p><p><span m='784000'>No if, ands or
  buts. There is i coming in here,</span> <span m='788000'>nothing goes there,
  so that current must flow here.</span> </p><p><span m='792000'>It has no
  choice. It's from basic nature.</span> </p><p><span m='796000'>I can write
  down what my current i is going to look like.</span> </p><p><span
  m='801000'>What is i going to look like? Well, I know v2,</span> <span
  m='804000'>I know v minus. v minus is the same as v plus.</span> </p><p><span
  m='810000'>And v plus is the i expression given here.</span> </p><p><span
  m='813000'>So, I can write i as v2 minus v minus divided by R1.</span>
  </p><p><span m='818000'>Let me keep track of those two and then go ahead and
  compute</span> <span m='824000'>vOUT. So, my goal in life is compute</span>
  <span m='827000'>vOUT as a function of the two input voltages v1 and
  v2.</span> </p><p><span m='832000'>And just for kicks I have gone ahead and
  computed some of the</span> <span m='838000'>intermediate node voltages and
  currents.</span> </p><p><span m='843000'>How do I write vOUT? What is
  vOUT?</span> </p><p><span m='848000'>vOUT is simply v minus from KVL.</span>
  </p><p><span m='852000'>vOUT is simply v minus minus the drop across this
  resistor.</span> </p><p><span m='861000'>So, the drop across that resistor is
  simply iR2.</span> </p><p><span m='870000'>From good-old KVL from the first
  lecture,</span> <span m='873000'>a voltage minus the drop across the resistor
  is equal to vOUT.</span> </p><p><span m='877000'>Therefore it's simply v minus
  minus iR2.</span> </p><p><span m='880000'>One thing to be very cautious about,
  I will tell you right</span> <span m='885000'>now, is that the output here
  relates to the inversion of the</span> <span m='889000'>voltage across this
  resistor R2. Be very, very careful in that</span> <span m='894000'>if I have a
  voltage across this resistor here that impacts vOUT</span> <span
  m='899000'>with a minus sign attached to it.</span> </p><p><span
  m='903000'>Notice that iR2 is the voltage across R2 and vOUT relates to</span>
  <span m='908000'>the negative of that. Be very cautious.</span> </p><p><span
  m='912000'>That's one of the commonest silly mistakes I have seen</span> <span
  m='918000'>people make in solving problems like this.</span> </p><p><span
  m='922000'>Let's go ahead. I know v minus and I don't know</span> <span
  m='927000'>i. Let me substitute for i for</span> <span m='929000'>now, and
  that is v2 minus v minus divided by R1 times R2.</span> </p><p><span
  m='937000'>Let me go ahead and collect all the v minuses.</span> </p><p><span
  m='943000'>v minus, I get a one here, minus minus becomes a plus,</span> <span
  m='951000'>and so I get R2 divided by R1 out there.</span> </p><p><span
  m='956000'>And then I minus v2 R2 divided by R1.</span> </p><p><span
  m='963000'>That is vOUT. Now let me go ahead and</span> <span
  m='968000'>substitute for v minus. And that is simply v1 R2</span> <span
  m='975000'>divided by R1 plus R2. That is v minus.</span> </p><p><span
  m='980000'>And this character here is simplified to be R1,</span> <span
  m='987000'>R1 plus R2 minus v2 R2 divided by R1.</span> </p><p><span
  m='994000'>What do we get? I cancel these two suckers out</span> <span
  m='999000'>and what I end up with is v1 R2 divided by R1 minus v2 R2</span>
  <span m='1006000'>divided by R1, which is simply R2/R1(v1-v2).</span>
  </p><p><span m='1011000'>What is interesting here is that what I have ended
  up</span> <span m='1018000'>building is a very primitive subtractor.</span>
  </p><p><span m='1024000'>So, my output relates to v1 minus v2 multiplied by
  the</span> <span m='1028000'>constant factor given by R2 divided by R1.</span>
  </p><p><span m='1039000'>Again, as I pointed out to you at the beginning of
  this</span> <span m='1042000'>lecture, no knew foundations today, no new
  theories,</span> <span m='1045000'>no new disciplines, no new laws.</span>
  </p><p><span m='1046000'>We are just going to take what you have learned
  --</span> <span m='1050000'>Three simple things, infinite gain,</span> <span
  m='1052000'>infinite input resistance, zero output resistance,</span> <span
  m='1056000'>plus this new thing v plus equals v minus.</span> </p><p><span
  m='1059000'>And just being armed with those four principles we are just</span>
  <span m='1064000'>going to charge ahead and analyze a bunch of
  circuits.</span> </p><p><span m='1068000'>It is purely intellectual and pure
  applications today.</span> </p><p><span m='1072000'>This is one way of doing
  it. There is another way of solving</span> <span m='1076000'>it. We can solve
  the circuit.</span> </p><p><span m='1080000'>Remember, whenever you see a
  linear circuit and you see two</span> <span m='1084000'>sources or three
  sources, just think superposition,</span> <span m='1089000'>right? You see a
  linear circuit and</span> <span m='1092000'>two or three sources, think
  superposition.</span> </p><p><span m='1095000'>We should be able to apply
  superposition to this.</span> </p><p><span m='1099000'>The op amp is simply
  another building block.</span> </p><p><span m='1103000'>It's a linear circuit.
  So, let's see if we get the</span> <span m='1107000'>same answer. Let's try to
  solve the circuit</span> <span m='1113000'>using superposition and see if we
  get the same answer.</span> </p><p><span m='1118000'>To do superposition what
  I am going to do is build two</span> <span m='1123000'>subcircuits. One
  subcircuit in which v1 is</span> <span m='1128000'>zero, and that subcircuit
  looks like this.</span> </p><p><span m='1132000'>If I set v1 to be zero then I
  get R1 parallel R2 going to</span> <span m='1138000'>ground. So, if v1 is set
  to zero then</span> <span m='1143000'>R1 goes to ground. And I get R1 parallel
  R2 here.</span> </p><p><span m='1149000'>And of course I have v2 as
  before.</span> </p><p><span m='1153000'>And this was R1, this was R2,</span>
  <span m='1156000'>and let me call that vOUT1. Oh, I'm sorry.</span>
  </p><p><span m='1161000'>Let me call it vOUT2 corresponding to that
  component</span> <span m='1168000'>of the output that relates to v2 acting
  alone.</span> </p><p><span m='1175000'>Remember superposition? Build two
  subcircuits,</span> <span m='1178000'>one that depends on v2 and another one
  that depends on v1.</span> </p><p><span m='1183000'>Let's do the second one,
  too.</span> </p><p><span m='1186000'>Second one is v2 going to zero. Here is
  my little op amp.</span> </p><p><span m='1191000'>And what I will do is simply
  flip the op amp just to see if</span> <span m='1196000'>you can identify some
  interesting patterns.</span> </p><p><span m='1201000'>Just flip the op amp
  around. And this is v1 as before.</span> </p><p><span m='1207000'>And recall
  that v1 was going to the plus node through a resistor</span> <span
  m='1215000'>R1. And then I had a R2 to ground.</span> </p><p><span
  m='1219000'>And then let me short v2 to ground.</span> </p><p><span
  m='1223000'>And when I short v2 to ground what happens?</span> </p><p><span
  m='1230000'>When I short v2 to ground what happens is that the tail of
  R1</span> <span m='1235000'>here goes to ground. And so it is as if the
  output</span> <span m='1240000'>is connected to the node v minus through a
  resistor,</span> <span m='1244000'>so it as if the output v R2 is connected to
  the minus input</span> <span m='1250000'>through a resistor. We will draw it
  like this.</span> </p><p><span m='1254000'>And the minus input goes through a
  resistor R1,</span> <span m='1258000'>to ground. If you thought that
  patterns</span> <span m='1262000'>were important in the earlier part of the
  course doing voltage</span> <span m='1267000'>divider patterns and current
  divider patterns and amplifier</span> <span m='1271000'>pattern, the source
  follower pattern, op amps is all about</span> <span m='1274000'>patterns. You
  should remember two or</span> <span m='1277000'>three simple patterns and be
  able to write down the</span> <span m='1280000'>expression for those just by
  observation.</span> </p><p><span m='1283000'>So, this is one common pattern
  that you have seen before in the</span> <span m='1287000'>very first lecture.
  And I just wrote it down in</span> <span m='1292000'>that manner. Let me go
  ahead and solve this</span> <span m='1295000'>circuit. It turns out that this
  is also</span> <span m='1297000'>a pattern. I will analyze it today but
  in</span> <span m='1300000'>the future v2 going to this node through R1 and
  then R2 to the</span> <span m='1305000'>output. You have probably also
  seen</span> <span m='1307000'>this in your recitation. This one is called an
  inverting</span> <span m='1312000'>connection and this one here is called a
  non-inverting</span> <span m='1315000'>connection. Let's go ahead and do
  vOUT2.</span> </p><p><span m='1320000'>vOUT2 is simply given by, notice that
  since this is</span> <span m='1325000'>ground, no current flowing here, this
  voltage is zero.</span> </p><p><span m='1330000'>If this voltage is zero, this
  voltage is zero by the v</span> <span m='1335000'>plus equals v minus method.
  If this is zero,</span> <span m='1339000'>the current that goes through here
  is v2 divided by R1.</span> </p><p><span m='1345000'>And that same current
  must flow through the resistance R2 as</span> <span m='1351000'>well. If the
  current v2 divided by R1</span> <span m='1355000'>flows through this resistor,
  the drop across this resistor</span> <span m='1360000'>is simply given by, let
  me hide this for a second,</span> <span m='1364000'>is simply given by v2. So,
  v2 divided by R1 is the</span> <span m='1368000'>current here. This is
  zero.</span> </p><p><span m='1370000'>So, the drop across this resistor is v2
  R1 multiplied by</span> <span m='1374000'>R2. That's a drop across this</span>
  <span m='1377000'>resistor. This voltage is simply zero</span> <span
  m='1381000'>minus a drop across the resistor.</span> </p><p><span
  m='1383000'>So, it's zero minus the drop across the resistor and that</span>
  <span m='1388000'>gives me v2. Again, remember this minus sign</span> <span
  m='1391000'>comes in when I want to convert this to get the output
  voltage</span> <span m='1396000'>from that. This is a very common
  pattern.</span> </p><p><span m='1400000'>It's called an inverting connection
  where the output is</span> <span m='1404000'>some factor of the input voltage
  and the factor is given by R2</span> <span m='1409000'>divided by R1. Let's go
  ahead and analyze this</span> <span m='1415000'>guy now. What is vOUT1 equal
  to?</span> </p><p><span m='1419000'>I should have called this vOUT1 because it
  relates to v1.</span> </p><p><span m='1427000'>vOUT1. There is a v plus
  here.</span> </p><p><span m='1430000'>From our first lecture I know that vOUT1
  relates to v plus in</span> <span m='1438000'>the following way. I know that
  it is v plus times</span> <span m='1444000'>the sum of the resistances divided
  by R1.</span> </p><p><span m='1448000'>Based on the first lecture this is
  true.</span> </p><p><span m='1452000'>vOUT1 is simply an amplified version of
  v plus where the</span> <span m='1457000'>amplification factor is given by R1
  plus R2 divided by R1.</span> </p><p><span m='1463000'>And I know v plus is
  simply a voltage divider action here.</span> </p><p><span m='1470000'>And I
  can take a simple voltage divider action here because the</span> <span
  m='1475000'>current going in is zero. Looking in here this is as if</span>
  <span m='1480000'>it's an infinite resistance, so it is as if the
  element</span> <span m='1485000'>simply does not exist. The voltage here is
  simply v1</span> <span m='1490000'>divided by R1 plus R2 multiplied by R2, our
  voltage divider</span> <span m='1496000'>pattern. So, I get v1 times R2
  divided</span> <span m='1499000'>by R1 plus R2 times R1 plus R2 divided by
  R1.</span> </p><p><span m='1505000'>These two cancel out which gives me vOUT1
  is simply v1 R2</span> <span m='1514000'>divided by R1. To get vOUT I add up
  the two.</span> </p><p><span m='1521000'>vOUT is vOUT1 plus vOUT2, which is my
  goal.</span> </p><p><span m='1528000'>And that is simply v1 R2 by R1 minus v2
  R2 by R1.</span> </p><p><span m='1537000'>Thankfully what we have here is the
  same as here.</span> </p><p><span m='1540000'>Again, there is really nothing
  new that I am going to cover</span> <span m='1545000'>today. Simply
  apply,</span> <span m='1547000'>apply, apply, four simple principles.</span>
  </p><p><span m='1550000'>Here I have used superposition and I am showing you a
  circuit.</span> </p><p><span m='1555000'>So, it turns out with op amps you
  should really remember that</span> <span m='1560000'>pattern. You will see it
  again and again</span> <span m='1564000'>and again. And each time you see
  it,</span> <span m='1567000'>it will save you six minutes of having to solve
  the circuit</span> <span m='1571000'>without knowing the pattern. So, remember
  this pattern.</span> </p><p><span m='1576000'>You can pick up another three or
  four minutes by remembering</span> <span m='1580000'>this pattern here. This
  pattern is simply v2 R2</span> <span m='1584000'>divided by R1. Imprint those
  two patterns into</span> <span m='1588000'>your brains. OK, so those are a
  couple of</span> <span m='1592000'>simple circuits using the op amp.</span>
  </p><p><span m='1595000'>We built a subtractor. The next step,</span> <span
  m='1598000'>let's go ahead and try to build an integrator.</span> </p><p><span
  m='1602000'>Using this little building block we can go ahead and try to</span>
  <span m='1607000'>build a bunch of circuits. We can build filters,</span>
  <span m='1611000'>A to D converters and so on. Let's build an
  integrator.</span> </p><p><span m='1615000'>Abstractly I need to build this
  box.</span> </p><p><span m='1620000'>Which when fed a vI, I want that box to
  integrate</span> <span m='1624000'>and give me a vO which is vI integrated
  over time.</span> </p><p><span m='1628000'>That is what I want to build. How
  do I go about building it?</span> </p><p><span m='1633000'>What I would like
  to do next is give you some flavor for design.</span> </p><p><span
  m='1639000'>How do you go about designing things with an op amp?</span>
  </p><p><span m='1643000'>Knowing that you do not know the pattern for this
  yet,</span> <span m='1648000'>how do you go about designing things?</span>
  </p><p><span m='1653000'>Well, let's start with the following
  intuition.</span> </p><p><span m='1656000'>The intuition that I begin with is
  that if I have a current i,</span> <span m='1661000'>and remember that
  capacitors and inductors related to,</span> <span m='1666000'>you saw
  differentiation and integration happening when we</span> <span
  m='1671000'>dealt with capacitors and inductors.</span> </p><p><span
  m='1673000'>So, I think we have to invoke a capacitor here or an
  inductor.</span> </p><p><span m='1680000'>In this example I invoke a
  capacitor.</span> </p><p><span m='1684000'>Notice that if I stick a capacitor
  in here this current</span> <span m='1690000'>is i, capacitance C, then my
  voltage vO is given by</span> <span m='1696000'>what? Voltage is simply the
  integral</span> <span m='1700000'>of the current flowing through it or vice
  versa i is C dv/dt.</span> </p><p><span m='1708000'>If i is C dv/dt then v is
  simply one by C integral.</span> </p><p><span m='1716000'>If I can pass the
  current through a capacitor then the</span> <span m='1724000'>voltage across
  the capacitor must be a current.</span> </p><p><span m='1732000'>Notice then
  that vO is related to i dt.</span> </p><p><span m='1740000'>I have some
  multiplying constants and so on,</span> <span m='1742000'>but fundamentally
  what I have found is if I can stick a</span> <span m='1746000'>current through
  a capacitor then the voltage across the capacitor</span> <span
  m='1751000'>relates to the integral of the current.</span> </p><p><span
  m='1753000'>OK, that's interesting. So, I have an integral in</span> <span
  m='1757000'>there. But I have a current.</span> </p><p><span
  m='1758000'>Notice my goal was to integrate a voltage.</span> </p><p><span
  m='1761000'>What I figured out how to do was if I can turn that voltage</span>
  <span m='1765000'>into a current -- If I can turn that voltage into</span>
  <span m='1771000'>a proportional current and then pump that current through
  a</span> <span m='1778000'>capacitor I will get the integration that I
  want.</span> </p><p><span m='1784000'>How do I convert my vI to i? How do I do
  that?</span> </p><p><span m='1790000'>Well, let's take a stab at it. Here is
  my vI.</span> </p><p><span m='1795000'>Let's take the resistor R. And remember
  I need to stick</span> <span m='1802000'>the capacitor here. I have some
  current I here.</span> </p><p><span m='1806000'>I don't know what the current
  is yet.</span> </p><p><span m='1809000'>And I stick a voltage here. And what I
  am trying to do is</span> <span m='1813000'>trying to see if I stick a voltage
  and a resistance in</span> <span m='1818000'>series then there is some
  relationship between the current</span> <span m='1823000'>and this voltage.
  Recall that I am trying to make</span> <span m='1827000'>this current be
  directly proportional to the voltage vI.</span> </p><p><span m='1833000'>But
  it turns out that i here is not equal to vI divided by R.</span> </p><p><span
  m='1838000'>If i was vI divided by R somehow, I am done.</span> </p><p><span
  m='1842000'>If i was vI divided by R, by some magic,</span> <span
  m='1846000'>then I have converted my voltage to a current,</span> <span
  m='1850000'>I feed that current through my capacitor and vO is my
  integral</span> <span m='1856000'>that I am looking for. But unfortunately i
  is not</span> <span m='1861000'>equal to vI divided by R. You know
  that.</span> </p><p><span m='1864000'>i relates to vI minus the capacitor
  voltage divided by R.</span> </p><p><span m='1869000'>So, i is not simply vI
  divided by R for all time but i is</span> <span m='1874000'>really vI minus
  the capacitor voltage divided by R.</span> </p><p><span m='1879000'>And, in
  fact, when we did RC circuits you</span> <span m='1882000'>wrote this equation
  to represent the dynamics of the circuit,</span> <span m='1888000'>RC dvO by
  dt plus vO equals vI. We wrote down this circuit for</span> <span
  m='1894000'>a first order RC, wrote this equation for a first</span> <span
  m='1899000'>order RC circuit. Now, it does turn out,</span> <span
  m='1903000'>to wrap up on this wild goose chase that we went on,</span> <span
  m='1908000'>it does turn out that if this term here is much bigger than</span>
  <span m='1913000'>that term. If this term is much bigger</span> <span
  m='1917000'>than that term then I can ignore that term and write down RC
  dvO</span> <span m='1923000'>by dt more or less equal to vI. If that were
  true,</span> <span m='1930000'>this would be true, and then vO would be more
  or</span> <span m='1935000'>less equal to one by RC integral of vI dt.</span>
  </p><p><span m='1940000'>Again, if this were true. If this were true for all
  time</span> <span m='1947000'>then vO would be integral of vI dt.</span>
  </p><p><span m='1952000'>Again, remember this is all a wild goose
  chase.</span> </p><p><span m='1955000'>Just write down WGC there just so you
  don't get confused.</span> </p><p><span m='1959000'>I am on this wild goose
  hunt here trying to find a way to get</span> <span m='1963000'>a current from
  a voltage which I can then feed into a capacitor.</span> </p><p><span
  m='1968000'>This was one thing I knew, but this was not what I want.</span>
  </p><p><span m='1972000'>But it does turn out to be what I want when vO is
  very,</span> <span m='1976000'>very small. So, I see some glimmer of
  hope</span> <span m='1978000'>but not quite. It turns that in R and C,</span>
  <span m='1983000'>if I make R and C very, very big, if I have a huge
  time</span> <span m='1988000'>constant, with a huge time constant the voltage
  vO looks</span> <span m='1992000'>like an integral of vI, but only when I have
  a very</span> <span m='1997000'>huge time constant. So, I give up on that
  track.</span> </p><p><span m='2001000'>Instead I try something else.</span>
  </p><p><span m='2014000'>Another try. I would like you to notice if</span>
  <span m='2018000'>you take your op amp, here is your op amp,</span> <span
  m='2022000'>if you take this op amp and you stick the positive terminal
  to</span> <span m='2028000'>ground, under reasonable feedback, under
  reasonable</span> <span m='2033000'>negative feedback what do you notice about
  the current?</span> </p><p><span m='2040000'>If I had a current i flowing here
  what did you notice?</span> </p><p><span m='2044000'>Look at this picture. I
  had a current i flowing in</span> <span m='2049000'>here, v2 divided by R1.
  And because this resistance was</span> <span m='2054000'>infinite all the
  current went through the upper terminal.</span> </p><p><span m='2059000'>So,
  this is zero volts. And by the v plus equals v</span> <span m='2064000'>minus
  method this is also more or less equal to zero.</span> </p><p><span
  m='2070000'>And I have a current i flowing in here, nothing goes here,</span>
  <span m='2075000'>so then the i must flow up there.</span> </p><p><span
  m='2077000'>So, all I am doing here is causing a reflection of the</span>
  <span m='2082000'>current from this grounded node. My current is being
  reflected</span> <span m='2088000'>into, or deflected if you feel like it, the
  upper edge here</span> <span m='2093000'>after coming in through this
  edge.</span> </p><p><span m='2096000'>That is interesting. We are just one
  step away from</span> <span m='2100000'>the key insight.</span> </p><p><span
  m='2110000'>I have an i coming in here, an i going out there.</span>
  </p><p><span m='2114000'>Notice that, as I said before,</span> <span
  m='2116000'>this is zero volts. How do I get my voltage vI to</span> <span
  m='2121000'>look like a current, to become proportional to a</span> <span
  m='2125000'>current? It is simple now.</span> </p><p><span m='2127000'>All I
  do is put a voltage vI and put a resistor R out there.</span> </p><p><span
  m='2134000'>If I do that, and since this is zero,</span> <span m='2136000'>the
  current i is given by vI divided by R.</span> </p><p><span m='2139000'>I have
  gotten to where I want to be.</span> </p><p><span m='2142000'>So, by using an
  op amp and using the fact that the minus</span> <span m='2146000'>node here, v
  minus is at the same potential as v plus when</span> <span m='2151000'>there
  is negative feedback then I can stick a resistor here.</span> </p><p><span
  m='2155000'>And because this is zero the current here is simply vI</span>
  <span m='2159000'>divided by R. I have gotten to the first</span> <span
  m='2164000'>place. Now all I need to do is simply</span> <span
  m='2167000'>pump this current through a capacitor and I get the
  integral</span> <span m='2173000'>of the, the voltage becomes an integral of
  the current.</span> </p><p><span m='2178000'>That is easy. I stick my
  capacitor here and I</span> <span m='2182000'>get my answer out there as vO.
  Notice that when I do this,</span> <span m='2187000'>let's say this is
  plus/minus VC.</span> </p><p><span m='2192000'>This is zero. So, vO is minus
  VC.</span> </p><p><span m='2194000'>Again, I will keep emphasizing it maybe 17
  times throughout</span> <span m='2198000'>this course that if this is zero
  then the output here is related</span> <span m='2203000'>to the negative of
  this voltage, common, common,</span> <span m='2207000'>common mistake. I will
  be very upset after</span> <span m='2210000'>doing all this if I see this
  mistake happen in any of the</span> <span m='2214000'>future homeworks or
  finals or whatever.</span> </p><p><span m='2217000'>This should not happen.
  So, vO is a minus sign here VC.</span> </p><p><span m='2225000'>And I know
  that if I have a current i through a capacitor</span> <span m='2235000'>what
  is VC? If I have current i through a</span> <span m='2242000'>capacitor than
  this is simply t i dt.</span> </p><p><span m='2249000'>And i by design is --
  So, I have my integrator.</span> </p><p><span m='2256000'>It is a two-step
  process. I stuck a resistor here,</span> <span m='2260000'>so the current
  became equal to vI divided by R.</span> </p><p><span m='2264000'>Then I took
  that current and pumped it through a capacitor</span> <span
  m='2269000'>through this terminal here, and the voltage across the</span>
  <span m='2274000'>capacitor for a current i is given by this
  expression.</span> </p><p><span m='2280000'>This is Capacitors 101. OK
  Capacitors 101 says that the</span> <span m='2284000'>voltage across the
  capacitor is simply one by C integral i dt.</span> </p><p><span
  m='2289000'>Another way of looking at it is the voltage across the
  capacitor</span> <span m='2294000'>is C, I'm sorry, the current through a
  capacitor</span> <span m='2297000'>is C dv/dt. This is simply the
  integral</span> <span m='2300000'>form of that equation. And I am done with
  my</span> <span m='2304000'>integrator. So, this is another very common</span>
  <span m='2307000'>building block. Remember this.</span> </p><p><span
  m='2311000'>Most of the circuits we will be seeing with op amps simply</span>
  <span m='2316000'>involve something here and some there.</span> </p><p><span
  m='2319000'>And the output in this inverting connection is the</span> <span
  m='2323000'>output times, if it is a resistance it is</span> <span
  m='2327000'>simply R2 divided by R1, if it's a capacitor I get the</span>
  <span m='2331000'>integral form looking like this. Yes.</span> </p><p><span
  m='2341000'>Can someone tell me where the negative sign went?</span>
  </p><p><span m='2345000'>The blackboard ate it up. Good catch.</span>
  </p><p><span m='2367000'>After all that lecture about watching the negative
  sign.</span> </p><p><span m='2370000'>After this little bit of faux pas here,
  now I will be doubly</span> <span m='2374000'>mad if you guys make that
  mistake.</span> </p><p><span m='2376000'>All right. Now that we have built
  the</span> <span m='2378000'>integrator, I could give this out as a homework
  problem.</span> </p><p><span m='2382000'>And you should be able to design a
  differentiator based on</span> <span m='2385000'>what you've learned here. You
  now have the tools to go</span> <span m='2389000'>and do some design like
  this, but we don't have any more</span> <span m='2392000'>homeworks left so I
  guess I will go ahead and solve this for you</span> <span m='2396000'>right
  here and do the design for you.</span> </p><p><span m='2400000'>The building
  block that we need looks like this,</span> <span m='2406000'>d/dt here. Let me
  take a vI and stick a vI</span> <span m='2411000'>in there. That's what I want
  to build.</span> </p><p><span m='2416000'>And what I built here is that
  different integrator box.</span> </p><p><span m='2423000'>And what I would
  like to do now is build a differentiator box.</span> </p><p><span
  m='2433000'>How do I go about doing it? I will go really slow here so</span>
  <span m='2437000'>you will have some time to think about it for yourselves and
  see</span> <span m='2442000'>if you folks are crack op amp circuit designers
  already,</span> <span m='2446000'>if you have the right instincts here.</span>
  </p><p><span m='2449000'>Again, when you see differentiation
  integration</span> <span m='2453000'>think capacitors or inductors, it doesn't
  matter.</span> </p><p><span m='2457000'>In fact, as a homework exercise, you
  may want to go</span> <span m='2460000'>back and see how you can get a similar
  effect using inductors.</span> </p><p><span m='2467000'>Can you play with
  inductors and get a similar effect?</span> </p><p><span m='2471000'>So,
  inductors are devices that are a dual of the capacitor.</span> </p><p><span
  m='2475000'>Whatever we will do with capacitors, there must be a</span> <span
  m='2480000'>corresponding way with inductors.</span> </p><p><span
  m='2482000'>You can try it out in your spare time.</span> </p><p><span
  m='2485000'>Let's go back to this one here. I will stick with the
  capacitor</span> <span m='2493000'>way of looking at things. I need a
  differentiation now.</span> </p><p><span m='2500000'>Remember this. If I have
  a vI and I stick this</span> <span m='2505000'>across a capacitor, I have a
  current C and some</span> <span m='2511000'>voltage vc across the capacitor,
  what does i relate to?</span> </p><p><span m='2520000'>i is simply C dv/dt and
  vc in this case is simply C dvI/dt.</span> </p><p><span m='2529000'>If I can
  stick a voltage across a capacitor, if my input voltage</span> <span
  m='2538000'>is stuck across a capacitor then the resulting current relates
  to</span> <span m='2548000'>dvI/dt. Here we have the opposite</span> <span
  m='2553000'>problem. By doing this simple trick,</span> <span m='2556000'>I
  can obtain a current that has the right form.</span> </p><p><span
  m='2561000'>Now what I need to do is somehow convert that current</span> <span
  m='2566000'>into a voltage because the abstraction that I need is a</span>
  <span m='2571000'>voltage to voltage. The next step,</span> <span
  m='2574000'>what I need to do is somehow convert a current to a
  voltage.</span> </p><p><span m='2579000'>How do I go about doing that? Again,
  remember for the op amp,</span> <span m='2587000'>if I have a current i
  flowing here then by the reflection</span> <span m='2594000'>property i gets
  pushed up into this edge, provided that the</span> <span m='2602000'>whole
  circuit is working with descent negative feedback.</span> </p><p><span
  m='2610000'>Given this trick what I can do is say look, suppose I did
  this.</span> </p><p><span m='2615000'>Remember, my goal here is how do I
  convert a current to a</span> <span m='2620000'>voltage? I have a current i
  coming in</span> <span m='2623000'>here, and I can turn that into a voltage
  because I know the</span> <span m='2628000'>current must come out here, I know
  this current must come</span> <span m='2634000'>out there. All I have to do is
  stick a</span> <span m='2637000'>resistor in there. If I stick a resistor in
  there</span> <span m='2643000'>what is vO equal to? vO is simply iR,</span>
  <span m='2648000'>right? That's right.</span> </p><p><span m='2651000'>vO, I
  get i here, so i pumps through here.</span> </p><p><span m='2656000'>Remember,
  what comes in here must get reflected up because</span> <span m='2664000'>the
  current going in here is zero.</span> </p><p><span m='2670000'>All the i must
  come out here. So, that i must pump through</span> <span m='2675000'>this
  resistor. The drop across this resistor</span> <span m='2680000'>is iR. That's
  the voltage drop across</span> <span m='2683000'>that resistor. And since this
  at a virtual</span> <span m='2687000'>ground the output here is simply zero
  minus this drop which is</span> <span m='2693000'>minus iR. So, I have gotten
  to where I</span> <span m='2697000'>want to be. I have my current i
  being</span> <span m='2702000'>converted to a voltage. I have taken my
  current,</span> <span m='2706000'>and I have been able to convert that into a
  voltage by sticking</span> <span m='2711000'>a resistor in here. As a final
  step,</span> <span m='2714000'>I simply need to produce the current.</span>
  </p><p><span m='2718000'>And that is pretty easy to do. Abstractly what I need
  to do,</span> <span m='2723000'>again, this is design here so we will talk
  about abstract</span> <span m='2728000'>stuff. If I had a voltage vI,</span>
  <span m='2732000'>I need to produce a current which relates to C
  dvI/dt.</span> </p><p><span m='2739000'>And I know I can do that by simply
  doing this.</span> </p><p><span m='2744000'>By doing this I know my i is C
  dvI, correct?</span> </p><p><span m='2750000'>If I can get this effect, I put
  this in quotes because</span> <span m='2756000'>that's my pattern. I am
  looking for a pattern,</span> <span m='2763000'>where a voltage vI is directly
  applied across a capacitor.</span> </p><p><span m='2770000'>And when that
  happens the current relates to C dv/dt.</span> </p><p><span m='2777000'>Let's
  go back to our op amp pattern here,</span> <span m='2782000'>op amp circuit.
  So far I have achieved --</span> <span m='2789000'>I just repeated this out
  there. And so somehow I need to take</span> <span m='2793000'>this pattern
  here and learn from that pattern and apply the</span> <span
  m='2798000'>pattern here. So, what I can do is,</span> <span m='2800000'>this
  is a ground node, correct?</span> </p><p><span m='2803000'>Now, the poor
  little capacitor, what does it care,</span> <span m='2807000'>whether it's a
  ground node or a virtual ground node?</span> </p><p><span m='2811000'>As long
  as it's a zero volt node down here what does it</span> <span m='2815000'>care?
  What I am going to do is stick</span> <span m='2819000'>this point, not here
  but into a virtual ground node.</span> </p><p><span m='2824000'>I am going to
  grab that point, take it here and stick it here.</span> </p><p><span
  m='2830000'>The poor little capacitor doesn't know the difference.</span>
  </p><p><span m='2834000'>I have really suckered the little beast.</span>
  </p><p><span m='2838000'>This is vI. Remember this.</span> </p><p><span
  m='2840000'>My i through the capacitor is proportional to C dv/dt.</span>
  </p><p><span m='2845000'>Instead what I have done is taken this guy and stuck
  it here</span> <span m='2851000'>to get something like this. Just remember
  these four or</span> <span m='2856000'>five little tricks. And you apply them
  in op amp</span> <span m='2859000'>circuits again and again and again and
  again.</span> </p><p><span m='2862000'>So, this is vI, this is my virtual
  ground.</span> </p><p><span m='2865000'>As far as this poor little capacitor
  is concerned,</span> <span m='2868000'>it is chugging along merrily thinking
  that it is connected to</span> <span m='2872000'>ground. Little does it know
  it is only</span> <span m='2875000'>a virtual ground, all right?</span>
  </p><p><span m='2878000'>But the current i here is simply C dvI/dt.</span>
  </p><p><span m='2883000'>And that current, the C dvI/dt,</span> <span
  m='2888000'>that current flows through here and gives me vO as iR.</span>
  </p><p><span m='2895000'>So, vO is simply minus R. Let me substitute for i
  there,</span> <span m='2903000'>C dvI/dt. OK, so notice then that my vO</span>
  <span m='2909000'>is now proportional to dvI/dt. So, vO is some RC time
  constant</span> <span m='2917000'>times dvI/dt. Therefore, I have my</span>
  <span m='2921000'>differentiator circuit. Remember this as a closing</span>
  <span m='2925000'>thought. Remember this v plus more or</span> <span
  m='2929000'>less equal to v minus trick. And to the extent possible</span>
  <span m='2934000'>simply use that trick to analyze op amp circuits under
  feedback</span> <span m='2939000'>and not in saturation. Just remember these
  two.</span> </p><p><span m='2944000'>Very quickly for the demo, I have a
  square wave input here</span> <span m='2949000'>to the op amp, that's my vI to
  the integrator.</span> </p><p><span m='2952000'>And this is the output vO. The
  integral of a square wave</span> <span m='2956000'>is a triangular wave, as
  you can see.</span> </p><p><span m='2959000'>And we will do the same thing for
  a differentiator.</span> </p><p><span m='2962000'>And for the differentiator,
  I input the square wave to this</span> <span m='2967000'>differentiator
  circuit. And I get this,</span> <span m='2971000'>wherever there is a sharp
  rise, I get this huge negative spike</span> <span m='2975000'>and a positive
  spike because of the minus sign.</span> </p><p><span m='2979000'>So, this is
  the differentiator circuit.</span> </p><p><span m='2981000'>Then I feed this
  into the op amp.</span> </p><p><span m='2984000'>OK. Thank you.</span> </p>
uid: 406b85888e78496373031ef92300ad37
type: courses
layout: video
---
