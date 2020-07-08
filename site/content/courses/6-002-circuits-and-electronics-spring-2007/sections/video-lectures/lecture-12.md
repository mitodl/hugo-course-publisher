---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Capacitors and first-order systems</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec12.jpg
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-12/thumb_lec12.jpg
    title: thumb_lec12.jpg
    type: null
    uid: 7ffdca1bab49e1a3836d84ef061984fc
  - id: Video-YouTube-Stream
    media_location: COdQmA9g9S8
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Video-YouTube-Stream
    type: Video
    uid: 1a102e208d904477012d08ccd798d6a2
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/COdQmA9g9S8/default.jpg'
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1098351bf2704077c2682d88ee62d0c1
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Video-iTunes U-MP4
    type: Video
    uid: aaac905c0490b0d972f23db648a91264
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-16oct2003-220k.mp4
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Video-Internet Archive-MP4
    type: Video
    uid: f64e38203a655d135a2fac9be5c30773
  - id: Thumbnail-OCW-JPG
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: a96ecf694c2f123a97b7acf88cd218f7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: COdQmA9g9S8
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c04886e9cddf39f665cf8ed5e686d729
  - id: COdQmA9g9S8.srt
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-12/COdQmA9g9S8.srt
    title: 3play caption file
    type: null
    uid: e0ebeea0e2c1f1a63aba554be31acb47
  - id: COdQmA9g9S8.pdf
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-12/COdQmA9g9S8.pdf
    title: 3play pdf file
    type: null
    uid: de8dfbe54c912edf373b016434558d04
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7e416ba662bec21c3e1e848178044c8c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 735531e0e501fe40dfa3c3a46473c715
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 89b2d8dd1e54df812a5d8f769c3c9baf
inline_embed_id: '11232168lecture12:capacitorsandfirst-ordersystems66930944'
order_index: 261
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/84f4b553fc6a1ddd7007465041c4e213">PDF</a>)<br />
  Demonstration: Gate delay (<a target="_blank" title="Open in a new window."
  href="./resolveuid/ea27f12a0b4fbeb27b179af572b97daa">PDF</a>) <br />
  Demonstration: RC response (<a target="_blank" title="Open in a new window."
  href="./resolveuid/c73df9e08d970dd50f5d2d273067ec0c">PDF</a>)<br />
  Demonstration: Lead Inductance (<a target="_blank" title="Open in a new
  window." href="./resolveuid/23134a1c58bccb5612cc493f1c708e65">PDF</a>)</p>
short_url: lecture-12
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-12
title: 'Lecture 12: Capacitors and First-Order Systems'
transcript: >-
  <p><span m='0'>Good morning. Today we move in the direction</span> <span
  m='5000'>that takes a big turn from the direction we have been going in</span>
  <span m='12000'>so far. All the devices we have had up</span> <span
  m='16000'>until now, resistors and voltage sources, and even your
  digital</span> <span m='24000'>devices like the AND gate or the inverter and
  so on had a very</span> <span m='31000'>specific property. We didn't dwell on
  that</span> <span m='36000'>property, but that property was that these were
  not what are</span> <span m='41000'>called memory devices. In other
  words,</span> <span m='43000'>the outputs at any given time are a function of
  the inputs</span> <span m='48000'>alone. In other words,</span> <span
  m='49000'>if you took your inverter or your NAND gate for that matter</span>
  <span m='54000'>and you build a circuit comprising 50 NAND gates</span> <span
  m='57000'>connected in structures that we have talked about,</span> <span
  m='61000'>you apply an input and boom you get an output.</span> </p><p><span
  m='66000'>And your output is a function of the inputs alone,</span> <span
  m='69000'>right? The same thing with your</span> <span m='71000'>resistors and
  voltage sources. At any given point in time your</span> <span m='76000'>output
  VO of T was some function of the input VI of T.</span> </p><p><span
  m='80000'>What we are going to do today is discuss a new element which</span>
  <span m='84000'>will introduce a whole new class of fun stuff for all of us
  to</span> <span m='89000'>deal with. And that is called storage.</span>
  </p><p><span m='93000'>In other words, the output of a circuit is now</span>
  <span m='96000'>going to depend not just on the inputs but it is going to
  depend</span> <span m='101000'>on the background or it is going to depend on
  where the circuit</span> <span m='106000'>has been in the past. So past is
  going to matter.</span> </p><p><span m='109000'>It is a very fundamental
  difference.</span> </p><p><span m='112000'>And what I would like to do is
  start by giving you folks a</span> <span m='117000'>little bit of a surprise.
  I am going to do a little demo</span> <span m='122000'>taking two of your
  inverter circuits.</span> </p><p><span m='138000'>I am going to start by
  taking a couple of inverters.</span> </p><p><span m='143000'>Remember, I am
  using this structure here as an inverter.</span> </p><p><span m='150000'>And I
  am going to couple this to another inverter and take an</span> <span
  m='157000'>output C, some VS, some load resistance RL,</span> <span
  m='163000'>my B terminal and my A terminal.</span> </p><p><span m='167000'>So
  I'm going to apply some input between ground and my A</span> <span
  m='174000'>terminal. And for fun I want to apply a</span> <span
  m='179000'>square wave at the input. A square wave between zero and</span>
  <span m='186000'>5 volts. And this is how my time goes.</span> </p><p><span
  m='189000'>Let's assume that VS is 5 volts.</span> </p><p><span m='191000'>So
  what I am going to do is plot for you the behavior of</span> <span
  m='195000'>this inverter. I am going to plot for you A,</span> <span
  m='199000'>which would look like this. I am going to plot for you B,</span>
  <span m='203000'>which would be the inverted wave form.</span> </p><p><span
  m='206000'>And then plot C, which would be a wave form that</span> <span
  m='210000'>looks like this again. Let me do a plot here.</span> </p><p><span
  m='216000'>So this is A.</span> </p><p><span m='226000'>-- and so on. Time
  goes this way.</span> </p><p><span m='229000'>And let's say this is between
  zero and 5 volts.</span> </p><p><span m='233000'>And B should be an inverted
  wave form that should look like</span> <span m='238000'>this.</span>
  </p><p><span m='251000'>If all that we believe of the world so far is true
  then this</span> <span m='255000'>is how things should behave, so C should
  look like this.</span> </p><p><span m='270000'>This is what the world should
  look like and if everything that</span> <span m='273000'>you learned about is
  true and correct and all of the good</span> <span m='276000'>stuff. Let me
  show you a little demo</span> <span m='278000'>and see if I can try to pull
  the rug out from under all that you</span> <span m='281000'>have learned so
  far and show you some surprising stuff.</span> </p><p><span m='291000'>Here
  are the three wave forms that I showed you up here.</span> </p><p><span
  m='298000'>This is my A. This is my A wave form.</span> </p><p><span
  m='302000'>This is the B wave form. Notice that B,</span> <span m='305000'>as
  you expect, is an inverted form of A.</span> </p><p><span m='309000'>And this
  is C. We all expect this,</span> <span m='312000'>correct? But what I am going
  to do is</span> <span m='315000'>let me expand the time scale on this so that
  I can look at these</span> <span m='321000'>transitions a little bit more
  carefully.</span> </p><p><span m='325000'>I am just going to expand the time
  scale.</span> </p><p><span m='330000'>There you go. All I have done is
  expanded the</span> <span m='333000'>time scale and spread that out a little
  bit.</span> </p><p><span m='337000'>And what you see there is quite different
  from what you expect.</span> </p><p><span m='342000'>A is a square wave as
  expected, but B is stunningly different.</span> </p><p><span m='348000'>It is
  a zero as expected because this is a one.</span> </p><p><span m='351000'>But
  here I get some really strange behavior,</span> <span m='355000'>behavior that
  is like nothing on earth.</span> </p><p><span m='360000'>Like nothing you have
  seen before.</span> </p><p><span m='362000'>And then, of course, it becomes a
  one eventually,</span> <span m='365000'>but there's some really, really shady
  stuff going on</span> <span m='369000'>here. And so far you are not
  prepared</span> <span m='371000'>to deal with this. We have not given you
  the</span> <span m='374000'>facility to deal with his issue. What is the
  problem with this?</span> </p><p><span m='378000'>We could say who cares? What
  is the problem with this?</span> </p><p><span m='382000'>Let's look at the
  result. I am looking at this,</span> <span m='385000'>I am focusing on this
  piece here.</span> </p><p><span m='389000'>And notice that instead of being a
  sharp rise it looks like</span> <span m='394000'>this. It is going up a little
  bit</span> <span m='396000'>more slowly. What kind of problem would
  that</span> <span m='400000'>create? The problem that it creates is</span>
  <span m='404000'>the following. Let me play around with this</span> <span
  m='407000'>graph a little bit more. What I am going to do is just</span> <span
  m='412000'>take this output here, the C output and line it up</span> <span
  m='416000'>against the A output. And so I am going to line up</span> <span
  m='422000'>the C wave form on top of the A wave form.</span> </p><p><span
  m='425000'>So you can see for yourself if something really,</span> <span
  m='429000'>really strange and nasty is happening, I am just going to</span>
  <span m='433000'>move up the C wave form and line it up.</span> </p><p><span
  m='442000'>What is happening out there? If you look carefully,</span> <span
  m='448000'>what you observe is that the C wave form transitions just
  ever</span> <span m='453000'>so slightly later than the A wave form.</span>
  </p><p><span m='457000'>Look here. And I claim that it is because</span> <span
  m='461000'>of this. Because of this,</span> <span m='463000'>the C wave form
  falls just a little bit later,</span> <span m='467000'>and that little thing
  we see out there is a delay.</span> </p><p><span m='472000'>So nothing you
  have learned so far prepares you for this.</span> </p><p><span
  m='479000'>Suddenly, instead of the output exactly following the input,</span>
  <span m='483000'>my output is following the input but a little bit
  later.</span> </p><p><span m='487000'>And it is this fact of life that things
  happen a little bit</span> <span m='492000'>later, is really the reason why
  each of you and all of us needs</span> <span m='497000'>to buy new computers
  every couple of years.</span> </p><p><span m='500000'>This simple basic fact.
  If this fact of life didn't</span> <span m='504000'>exist, you would buy one
  computer and be done with it for</span> <span m='508000'>life. Intel would
  make gobs of money</span> <span m='511000'>one year, and so would Dell and
  Gateway and so on,</span> <span m='515000'>and then no more. That's it.</span>
  </p><p><span m='516000'>This is it. But because of this a little</span> <span
  m='519000'>itty-bitty difference here the entire semiconductor
  technology</span> <span m='523000'>is charging along trying to do something
  about that.</span> </p><p><span m='526000'>You buy newer and newer computers
  each year.</span> </p><p><span m='529000'>It turns out this little itty-bitty
  thing here,</span> <span m='532000'>that is called the delay, the inverter
  delay.</span> </p><p><span m='534000'>And it happens because of a specific
  element that has been</span> <span m='538000'>introduced here that we have not
  shown you so far.</span> </p><p><span m='543000'>And a large part of the
  semiconductor industry and</span> <span m='546000'>follow-on courses and
  design and so on focuses on how could I</span> <span m='551000'>make my delay
  smaller, how can I get to be faster and</span> <span m='555000'>faster and
  faster? This relates to how fast we can</span> <span m='558000'>clock your
  Pentium IV. Remember it came all the way to</span> <span m='562000'>1.3
  gigahertz? What's the fasted Pentium money</span> <span m='566000'>can buy
  today? What is the fastest P4?</span> </p><p><span m='570000'>Oh, 3.2 have
  come out? I don't know.</span> </p><p><span m='572000'>Ken claims 3.2. But,
  yeah, there you go,</span> <span m='575000'>3.2 gigahertz. It all has to do
  with this</span> <span m='578000'>little itty-bitty thing. You saw it for the
  first time</span> <span m='582000'>here. When some of you become CTOs
  at</span> <span m='585000'>Intel and so on, just remember that it all
  began</span> <span m='589000'>on October 16th with this little rinky-dink
  thing here.</span> </p><p><span m='593000'>What you are going to learn now is
  some really cool stuff that</span> <span m='598000'>has huge implications for
  life. So why does that happen?</span> </p><p><span m='604000'>Why did this
  transition happen just a little bit later?</span> </p><p><span m='609000'>The
  reason is that remember when this wave form reaches VT,</span> <span
  m='615000'>the threshold voltage of this MOSFET, this guy is going to</span>
  <span m='621000'>switch, right? So because of the slower rise</span> <span
  m='625000'>of the voltage, the VT is going to be reached a</span> <span
  m='630000'>small amount of time later. So I am going to hit VT</span> <span
  m='635000'>slightly later. And because of that this guy is</span> <span
  m='639000'>going to transition just a bit later because this
  intermediate</span> <span m='643000'>wave form B is slower. It hits VT just a
  little bit</span> <span m='647000'>later than if it would have made an
  instantaneous transition.</span> </p><p><span m='651000'>And therefore my
  output falls just a little bit later and this</span> <span m='656000'>gives
  rise to my delay in the inverter.</span> </p><p><span m='660000'>We can call
  that d if you would like, some delay.</span> </p><p><span m='666000'>In your
  course notes, this material is covered in</span> <span m='673000'>Chapters 9
  and 10. That was to kind of motivate</span> <span m='680000'>why we are going
  to be doing all that you we will be doing.</span> </p><p><span
  m='690000'>Don't anybody come within a foot of this even by mistake.</span>
  </p><p><span m='695000'>I mean it. It is pretty deadly stuff.</span>
  </p><p><span m='699000'>Today we will talk about the capacitor.</span>
  </p><p><span m='703000'>And in the next couple of lectures I am going to tie
  it</span> <span m='709000'>all together and show you how this relates to
  that.</span> </p><p><span m='715000'>I will show you exactly how the delay
  happens.</span> </p><p><span m='721000'>You can compute it based on some
  simple principles that you</span> <span m='724000'>will learn about in the
  next couple of lectures.</span> </p><p><span m='727000'>What I am going to do
  is first of all show you,</span> <span m='731000'>I claim that that delay
  happens because of the presence of a</span> <span m='734000'>capacitor
  somewhere in there. What I will do now is take you</span> <span
  m='738000'>into a closer look, take a closer look at the</span> <span
  m='741000'>MOSFET and show you were the capacitor is.</span> </p><p><span
  m='744000'>This is the MOSFET that you have seen so far,</span> <span
  m='747000'>drain, gate and source. This is called an n-channel</span> <span
  m='754000'>MOSFET. And what I am going to do is</span> <span
  m='759000'>dissect this and show you what is actually happening,</span> <span
  m='767000'>what this looks like on silicon.</span> </p><p><span m='771000'>So
  here is my slab of silicon. It is very thin.</span> </p><p><span
  m='780000'>And let's say this is, I won't go into details here.</span>
  </p><p><span m='783000'>You will learn a lot more about this in future device
  classes</span> <span m='788000'>like 301 and so on, but suffice it to say I
  will</span> <span m='792000'>just introduce it here to give you a sense of
  where the</span> <span m='796000'>capacitor is. This is p-type silicon.</span>
  </p><p><span m='799000'>And the way you build a MOSFET is you create a couple
  of tubs</span> <span m='804000'>in which you dope to be n-type. The basic
  silicon is dope</span> <span m='808000'>p-type. And this guy here is
  n-type.</span> </p><p><span m='813000'>And what you do is a thin oxide layer
  is placed on top of that</span> <span m='819000'>and then on top of that a
  thin metal layer.</span> </p><p><span m='824000'>This is a metal layer. This
  is a thin piece of oxide,</span> <span m='830000'>silicon dioxide. And this is
  my P substrate.</span> </p><p><span m='836000'>Now this is a little metal
  layer that is really a wire on</span> <span m='840000'>top of the silicone.
  This metal layer could be some</span> <span m='843000'>sort of a wire that
  meanders around on the surface of</span> <span m='847000'>silicone. And this
  is a wire that</span> <span m='850000'>connects to the gate. This is the gate
  of my MOSFET.</span> </p><p><span m='853000'>And this guy here is the drain.
  And this guy here is the</span> <span m='857000'>source. And this is my
  gate.</span> </p><p><span m='859000'>So there is a little piece of metal
  here.</span> </p><p><span m='862000'>This is this piece of metal here.</span>
  </p><p><span m='865000'>And there is a piece of oxide and then my silicone
  substrate.</span> </p><p><span m='871000'>Notice that this is my oxide. When I
  apply a positive voltage</span> <span m='877000'>to the gate here with respect
  to the substrate,</span> <span m='881000'>what happens is that I draw up
  negative charges.</span> </p><p><span m='886000'>I draw up electrons here into
  this channel region and I have</span> <span m='892000'>corresponding plus type
  out here so that I get a view here that</span> <span m='898000'>looks like a
  couple of plates. And I end up with an oxide in</span> <span m='905000'>the
  middle. There is no connection.</span> </p><p><span m='908000'>Two plates
  separated by a small distance with plus q and minus q</span> <span
  m='914000'>on the plates. And, because of that,</span> <span m='917000'>what
  ends up happening here is that this piece behaves like a</span> <span
  m='922000'>capacitor. So a capacitor has two plates</span> <span
  m='926000'>with a thin insulating material in the middle with some</span>
  <span m='930000'>permittivity epsilon. And so I get a little piece of</span>
  <span m='935000'>a capacitor here. That is the capacitor that is</span> <span
  m='938000'>forming. I did not set out to build that</span> <span
  m='940000'>capacitor, but there is a capacitor nonetheless.</span>
  </p><p><span m='943000'>So when I apply a positive voltage at the gate,</span>
  <span m='946000'>negative electrons are pulled up here which forms a
  channel,</span> <span m='949000'>and then a current can then flow.</span>
  </p><p><span m='951000'>And that is how the MOSFET turns on.</span>
  </p><p><span m='953000'>So n-type electrons back to n-type, and I get electron
  flow</span> <span m='957000'>here and that gives me my channel.</span>
  </p><p><span m='960000'>This is just kind of devices in four minutes or
  less.</span> </p><p><span m='964000'>You will do an entire course on this, if
  you like,</span> <span m='968000'>if you take 301. What we do is to be able
  to</span> <span m='971000'>capture the behavior that we just saw, the funny
  delayed</span> <span m='975000'>behavior, we have to augment our model.</span>
  </p><p><span m='978000'>We have to introduce a new element.</span>
  </p><p><span m='981000'>So what we do is here is a MOSFET, gate,</span> <span
  m='984000'>drain and source. And notice here we model this</span> <span
  m='988000'>by putting a little capacitor, CGS between our gate and the</span>
  <span m='993000'>source. So this becomes a simple model</span> <span
  m='997000'>for our MOSFET device which is the good old gate drain
  source</span> <span m='1003000'>device from the past with a little capacitor
  CGS having some</span> <span m='1008000'>value for CGS in maybe ten to the
  minus 14 or thereabouts</span> <span m='1013000'>farads. So that is a little
  capacitor</span> <span m='1016000'>that has come about in this device that we
  fabricated here.</span> </p><p><span m='1023000'>It is that capacitor that is
  at between node B and ground</span> <span m='1027000'>because it is between
  the gate and the source of the second</span> <span m='1032000'>inverter. And
  it is that capacitor that</span> <span m='1035000'>is playing the games that
  we saw out there.</span> </p><p><span m='1047000'>So let's look at some of the
  behavior of an ideal linear</span> <span m='1051000'>capacitor. A
  capacitor,</span> <span m='1054000'>as I said, has a couple of plates.</span>
  </p><p><span m='1058000'>There are a couple of plates. Between the plates is
  some</span> <span m='1064000'>dieletric, permittivity epsilon. Let's say the
  area of the</span> <span m='1071000'>plates is A, and let's say the plates are
  separated by a</span> <span m='1077000'>distance D. I get some charge
  here,</span> <span m='1082000'>let's say q. So q and minus q on the</span>
  <span m='1086000'>capacitor. And the capacitance C is given</span> <span
  m='1090000'>by epsilon A divided by D. Epsilon, as I said,</span> <span
  m='1095000'>is the productivity of the dielectric.</span> </p><p><span
  m='1099000'>So if it is free space then it would be epsilon zero which
  is</span> <span m='1105000'>the permittivity of free space. That is the
  capacitance in</span> <span m='1112000'>farads. And the symbol looks like
  this.</span> </p><p><span m='1115000'>Capacitor C. Voltage v.</span>
  </p><p><span m='1118000'>Current i. So this, much like the</span> <span
  m='1120000'>resistor, voltage source and so on, this now becomes a
  primitive</span> <span m='1126000'>element in your tool chest of elements like
  the voltage source</span> <span m='1132000'>and so onn. Capacitance with the
  voltage v</span> <span m='1136000'>across it and a current i. And I have
  assigned the</span> <span m='1141000'>associated variables here according to
  the associated</span> <span m='1145000'>variable discipline. A question to ask
  ourselves is</span> <span m='1148000'>remember we said we are all now in a
  playground from all of</span> <span m='1153000'>nature, in this playground
  where the lumped matter discipline</span> <span m='1157000'>holds? And also
  remember that we said</span> <span m='1160000'>that for the lumped matter
  discipline to hold we have to</span> <span m='1163000'>make a couple of
  assumptions. One of those assumptions was</span> <span m='1169000'>that dq/dt,
  for all their elements should be zero for all</span> <span m='1173000'>time.
  So right now what about the</span> <span m='1176000'>capacitor? It has got
  some charge q.</span> </p><p><span m='1179000'>So charge must have built up
  somehow.</span> </p><p><span m='1182000'>Does that mean that I lied all along,
  that we are no longer in</span> <span m='1187000'>this playground, that we
  have been ejected from</span> <span m='1191000'>the playground because of the
  capacitor, or are we still in</span> <span m='1196000'>the circuits playground
  in which the lumped matter discipline</span> <span m='1201000'>holds and all
  good things happen and so on?</span> </p><p><span m='1206000'>It seems like a
  contradiction, doesn't it?</span> </p><p><span m='1209000'>I took you from
  Maxwell's playgrounds to the EECS</span> <span m='1212000'>playground where I
  said the lumped matter discipline holds.</span> </p><p><span m='1217000'>And
  one of the foundations of the LMD was that dq/dt should be</span> <span
  m='1221000'>zero for all time inside the elements that we are going to</span>
  <span m='1226000'>deal with. And right now boom,</span> <span m='1228000'>it's
  not four weeks into the course and Agarwal introduces an</span> <span
  m='1232000'>element and it has q in it. It turns out that the capacitor</span>
  <span m='1238000'>also adheres to the lumped matter discipline.</span>
  </p><p><span m='1241000'>Remember the discipline says that dq/dt is zero for
  all time</span> <span m='1245000'>within elements. So I am going to be
  clever.</span> </p><p><span m='1248000'>What I am going to do is I want to
  choose element boundaries in</span> <span m='1252000'>a very cleaver way.
  Notice that if I have q here on</span> <span m='1255000'>this plate then I get
  minus q on the other plate.</span> </p><p><span m='1260000'>So if I take the
  whole element, the element as a whole,</span> <span m='1264000'>if I am
  careful in terms of how I package my boundaries,</span> <span m='1269000'>if I
  put both my plates inside my element boundary then I still</span> <span
  m='1274000'>do get the net charge being zero.</span> </p><p><span
  m='1277000'>So dq/dt is indeed zero for all time provided I make sure
  that</span> <span m='1282000'>my element has both the plates. Therefore, if
  you come across</span> <span m='1287000'>somebody else that gives you an
  element that says I have an</span> <span m='1292000'>idea. Let's create a new
  branch of</span> <span m='1296000'>electrical engineering in which we model
  the capacitor not as</span> <span m='1300000'>one element for two plates, but
  let's build a capacitor by</span> <span m='1304000'>combining two new
  elements, two garbage elements called G1</span> <span m='1308000'>and G2. G1
  is like the top plate.</span> </p><p><span m='1311000'>G2 is the bottom plate.
  I put them together and I get a</span> <span m='1315000'>capacitor. But notice
  if I just pick one</span> <span m='1318000'>plate then the element G1 will not
  adhere to the LMD.</span> </p><p><span m='1323000'>It adheres to the LMD
  because I choose my element boundaries in</span> <span m='1328000'>a way that
  both plates come within it.</span> </p><p><span m='1331000'>So it is very
  fundamental and key.</span> </p><p><span m='1334000'>And you can read a lot
  more about it in the course notes.</span> </p><p><span m='1338000'>I purposely
  dwelt on that simple point because I think it</span> <span m='1343000'>is
  foundational and important. And you really need to</span> <span
  m='1349000'>understand that the capacitor does satisfy LMD.</span>
  </p><p><span m='1353000'>We are still in the good old playground.</span>
  </p><p><span m='1357000'>A few simple facts here. These are in the
  notes.</span> </p><p><span m='1361000'>And you have also seen this before, I
  am sure.</span> </p><p><span m='1365000'>I can relate the charge to the
  capacitance and the voltage as q</span> <span m='1371000'>is equal to Cv. And
  q is in coulombs,</span> <span m='1375000'>this is in farads and this is in
  volts.</span> </p><p><span m='1380000'>So there is some charge q stored on the
  capacitor and it</span> <span m='1386000'>is in coulombs and q is equal to
  Cv.</span> </p><p><span m='1390000'>So I can differentiate this with respect
  to time to get the</span> <span m='1397000'>current, and that becomes
  i=dq/dt.</span> </p><p><span m='1401000'>So the current at any given time is
  dq/dt.</span> </p><p><span m='1408000'>And so I substitute for q in terms of
  Cv here.</span> </p><p><span m='1412000'>That is what I get. So the current
  i=d(Cv)/dt.</span> </p><p><span m='1416000'>A 6.002 assumption, capacitance in
  general can be</span> <span m='1421000'>time-varying. I can get
  time-varying</span> <span m='1424000'>capacitors. In fact, there are some
  sensors</span> <span m='1428000'>which are capacitive. And, as I talk,</span>
  <span m='1431000'>my sound waves can change the pressure on the top plate of
  the</span> <span m='1437000'>capacitor. And move the top plate of the</span>
  <span m='1442000'>capacitor, thereby changing the capacitance by moving the
  plate.</span> </p><p><span m='1448000'>Remember d here, as the plate moves
  closer I get</span> <span m='1453000'>a higher capacitance. So we won't be
  dealing,</span> <span m='1457000'>unless explicitly said so, with time-varying
  capacitances.</span> </p><p><span m='1463000'>So what we can do is 6.002
  allows us to write Cdv/dt.</span> </p><p><span m='1469000'>So my current
  source capacitor is Cdv/dt.</span> </p><p><span m='1473000'>I can also write
  down the energy, capacitors store energy.</span> </p><p><span
  m='1479000'>E=1/2Cv^2. I am sure you have seen all</span> <span
  m='1482000'>this before in physics and so on.</span> </p><p><span
  m='1486000'>That is the amount of energy stored in the capacitor if it
  is</span> <span m='1492000'>holding a charge q. Let me do a little</span>
  <span m='1496000'>demonstration for you. They don't make glasses like</span>
  <span m='1502000'>they used to. Our friend Lorenzo has charged</span> <span
  m='1507000'>up this capacitor. It is a huge capacitor.</span> </p><p><span
  m='1511000'>It is a 250 volt capacitor so it is nasty.</span> </p><p><span
  m='1515000'>He has charged it up and has kept it there.</span> </p><p><span
  m='1519000'>And to show you that it does contain stored charges it has</span>
  <span m='1525000'>been sitting there holding charge.</span> </p><p><span
  m='1530000'>Maybe the first row should go backwards, just step back for
  a</span> <span m='1536000'>second. I think you guys would be safe</span> <span
  m='1540000'>but I just don't want to take any chances.</span> </p><p><span
  m='1544000'>This is holding a bunch of charge.</span> </p><p><span
  m='1548000'>It is kind of sitting there. If I short the terminals it</span>
  <span m='1554000'>should try to say oh, I've got a path,</span> <span
  m='1558000'>let me get my charge out. All right.</span> </p><p><span
  m='1562000'>Let's do it. This is always a scary moment</span> <span
  m='1565000'>for me. And I say a little prayer</span> <span m='1568000'>before
  I do this.</span> </p><p></p><p><span m='1579000'>Good? OK. Gee, you guys
  would love to see me getting fried,</span> <span m='1581000'>huh? All
  right.</span> </p><p><span m='1582000'>Let's see.</span> </p><p><span
  m='1605000'>So it did contain charge.</span> </p><p><span m='1620000'>So there
  is a reason why Lorenzo puts one hand inside his</span> <span
  m='1624000'>pocket when he shorts it, because there is a natural</span> <span
  m='1628000'>tendency to hold the wire with both hands, and la,</span> <span
  m='1632000'>la, la, la, la and put it across the capacitor.</span>
  </p><p><span m='1636000'>By doing this you are guaranteed that you will just
  be</span> <span m='1641000'>touching it with one hand. Hopefully you folks
  will</span> <span m='1645000'>remember for life that a capacitor can sit
  around and</span> <span m='1649000'>hold its charge for a while. All
  right.</span> </p><p><span m='1653000'>That is enough of fun and games.</span>
  </p><p><span m='1655000'>Let's get on with our business of building
  circuits.</span> </p><p><span m='1659000'>What I am going to do is, as I
  promised you,</span> <span m='1661000'>I am going to close the loop on that
  example by halfway through</span> <span m='1666000'>the next lecture. I'm
  going take you on a bit of</span> <span m='1669000'>a journey involving
  capacitors and resistors and involving some</span> <span m='1673000'>analysis,
  and then we will close it all up for you at about the</span> <span
  m='1677000'>middle of next lecture. What I would like to do next is</span>
  <span m='1682000'>here is a new element. And let's do some fun stuff</span>
  <span m='1686000'>with elements. Well, you know about voltage</span> <span
  m='1690000'>sources, you know about resistors, let's put them</span> <span
  m='1694000'>together and see how they behave.</span> </p><p><span
  m='1697000'>Let's have a capacitor here, C, vc(t) and some current i.</span>
  </p><p><span m='1701000'>What I am going to do, in general, whenever I
  have</span> <span m='1705000'>something new or something strange, let's say
  like a</span> <span m='1710000'>capacitor or some other device. It is
  interesting to model the</span> <span m='1716000'>rest of the circuit behind
  it if it contains only resistors and</span> <span m='1721000'>voltages and
  linear elements as a Thevenin equivalent.</span> </p><p><span m='1726000'>So
  let me do that. This is R and this is vi.</span> </p><p><span m='1730000'>This
  stuff in the back is my standard pattern,</span> <span m='1734000'>voltage
  source in series with a resistor, and I connect that</span> <span
  m='1739000'>across my capacitor. But remember,</span> <span
  m='1743000'>although you saw those funny wave forms and so on,</span> <span
  m='1747000'>the capacitor is a linear device.</span> </p><p><span
  m='1750000'>Because you can see from here that the current relates to</span>
  <span m='1755000'>dv/dt. That is a linear operation.</span> </p><p><span
  m='1758000'>You don't see V squareds and Vis and things like that in</span>
  <span m='1763000'>there. It's is a linear device.</span> </p><p><span
  m='1765000'>Let's go back to our trusty old method, the node method.</span>
  </p><p><span m='1772000'>If you just blindly apply the node method and simply
  grunge</span> <span m='1776000'>through a bunch of math, you should be able to
  get to</span> <span m='1780000'>the answer, that is for some voltage v or some
  form of</span> <span m='1784000'>voltage vi, I should be able to figure out
  what vc looks like.</span> </p><p><span m='1789000'>So let's do that. This is
  the node that is of</span> <span m='1792000'>interest here with the unknown
  node voltage vc.</span> </p><p><span m='1796000'>So let me apply the node
  method.</span> </p><p><span m='1798000'>(vc-vi)/R is the current going this
  way.</span> </p><p><span m='1803000'>That plus the current through the
  capacitor should equal zero.</span> </p><p><span m='1809000'>And what is the
  current through the capacitor?</span> </p><p><span m='1814000'>The node method
  tells me that, get the current in terms of the</span> <span
  m='1820000'>element values. We know that the current is</span> <span
  m='1825000'>given by CdvC/dt.=O. Just shuffling things around a</span> <span
  m='1831000'>little bit, I can write RC dvc/dt+vc=vi.</span> </p><p><span
  m='1835000'>We are writing the node equation and then getting the</span> <span
  m='1841000'>equation that characterizes this little circuit.</span>
  </p><p><span m='1847000'>Notice here that this has units of volts.</span>
  </p><p><span m='1851000'>And since I have time here, this also must have units
  of</span> <span m='1858000'>time.</span> </p><p><span m='1866000'>Let's go
  about solving this little circuit and understanding</span> <span
  m='1872000'>how it behaves. The specific example that we</span> <span
  m='1876000'>will look at looks like this. Let's say the capacitor
  voltage</span> <span m='1882000'>at time T=0 is V0. This is given.</span>
  </p><p><span m='1885000'>So at time T=0, I am telling you that the</span>
  <span m='1890000'>capacitor contains a charge. And because of that there is
  a</span> <span m='1896000'>voltage V0 across it. That capacitor had a voltage
  of</span> <span m='1900000'>250 volts across it and most of the devices we
  deal with in</span> <span m='1905000'>laptops and so on today, like the
  Pentium IV,</span> <span m='1908000'>voltages are on the order of 1.5 volts,
  very small voltages.</span> </p><p><span m='1913000'>So that is the value in
  the capacitor, the voltage.</span> </p><p><span m='1917000'>That is called a
  state. This is called the state,</span> <span m='1922000'>capacitor state. It
  is the state of the</span> <span m='1925000'>capacitor. And I also give you
  that</span> <span m='1928000'>vi(t)=VI. So my voltage is VI.</span>
  </p><p><span m='1930000'>And somehow, I am not telling you how,</span> <span
  m='1934000'>but some how it arranged to have the capacitor voltage be
  V0</span> <span m='1939000'>at time T=0. Now I want to look to the</span>
  <span m='1942000'>solution to this for t greater than or equal to zero.</span>
  </p><p><span m='1948000'>And in that time my voltage vi is at some capital
  VI,</span> <span m='1955000'>some DC voltage VI. So I am going to solve
  the</span> <span m='1961000'>differential equation RC dvc/dt+vc=vi given these
  two</span> <span m='1968000'>values. Input is DC voltage VI and VC0</span>
  <span m='1973000'>is V0, the initial charge in the capacitor.</span>
  </p><p><span m='1980000'>So from now until almost to the end of the
  lecture,</span> <span m='1983000'>it is just going to be math by solving this
  very simple first</span> <span m='1988000'>order differential equation. And
  the key here will be that</span> <span m='1992000'>throughout 6.002 we will be
  following one method to solve</span> <span m='1996000'>these. There are many
  methods to</span> <span m='1999000'>solving differential equations, and we
  will follow one method.</span> </p><p><span m='2003000'>That method is called
  the method of homogenous and</span> <span m='2007000'>particular solutions. In
  1802, I believe,</span> <span m='2011000'>you would have learned maybe this,
  and certainly other</span> <span m='2016000'>methods. You can use any method
  to solve</span> <span m='2020000'>it. We will just stick to one</span> <span
  m='2023000'>method. And this is also used in the</span> <span
  m='2026000'>course notes. In this method what we do is</span> <span
  m='2030000'>take the solution VC by finding two other components.</span>
  </p><p><span m='2035000'>One is called the homogenous solution.</span>
  </p><p><span m='2040000'>And summing that up with the particular
  solution.</span> </p><p><span m='2043000'>And that is the total solution. So
  total solution is the sum of</span> <span m='2048000'>the homogenous and the
  particular solutions.</span> </p><p><span m='2051000'>And the method has three
  steps. As I said before,</span> <span m='2055000'>we will be using this method
  again and again with every</span> <span m='2059000'>differential equation that
  we encounter in this course.</span> </p><p><span m='2063000'>And you won't
  encounter a while lot.</span> </p><p><span m='2066000'>The first step we find
  the particular solution.</span> </p><p><span m='2071000'>The second step, find
  the homogenous solution.</span> </p><p><span m='2079000'>The total solution is
  the sum of the two.</span> </p><p><span m='2087000'>And then find ---</span>
  <span m='2096000'>There will be some unknown constants depending on the</span>
  <span m='2098000'>equation that you have. And in the end we simply find</span>
  <span m='2102000'>the unknown constants by applying the initial
  conditions</span> <span m='2106000'>that we have. Boom, boom, boom.</span>
  </p><p><span m='2109000'>Particular. Homogenous.</span> </p><p><span
  m='2110000'>Find constants. Three things.</span> </p><p><span m='2113000'>So
  let's go about solving this equation and apply those three</span> <span
  m='2117000'>conditions. Again, remember,</span> <span m='2119000'>what I am
  doing now for the next 10 minutes or 15 minutes is</span> <span
  m='2124000'>using math that you know about to simply solve this first
  order</span> <span m='2129000'>of differential equations. There is nothing
  really new</span> <span m='2135000'>that I am going to talk about here.</span>
  </p><p><span m='2139000'>One is to find the particular solution vCP,</span>
  <span m='2143000'>which will then be added into the vCH to get me the
  solution.</span> </p><p><span m='2149000'>So the way you find the vCP is you
  find any solution that</span> <span m='2154000'>satisfies this equation. This
  is the equation.</span> </p><p><span m='2160000'>You find any solution that
  satisfies it.</span> </p><p><span m='2163000'>And find the simplest possible
  solution that money can buy.</span> </p><p><span m='2167000'>Find it. That's
  the particular solution.</span> </p><p><span m='2170000'>Any solution is fine.
  In this case,</span> <span m='2173000'>a really simple one would be vCP equals
  VI.</span> </p><p><span m='2176000'>Let's see if a constant works. One thing
  you will realize in</span> <span m='2181000'>differential equations is that
  they are actually much simpler</span> <span m='2185000'>than they seem. And
  the reason is that almost</span> <span m='2190000'>every time you have to
  assume you know the answer,</span> <span m='2193000'>and then you are checking
  to see what you assumed was</span> <span m='2197000'>correct. Assume the
  answer is this like</span> <span m='2200000'>you are really smart, and then
  check it out and say</span> <span m='2204000'>oh, yeah, that must have been
  the answer.</span> </p><p><span m='2206000'>So here we assume that I think VI
  is going to work so let's try</span> <span m='2211000'>it out. Substituting in
  here.</span> </p><p><span m='2213000'>RC dvc/dt is 0. vi is a constant.</span>
  </p><p><span m='2215000'>So I get vi equals vi, so therefore this is a</span>
  <span m='2219000'>particular solution. Done.</span> </p><p><span m='2222000'>I
  substitute vi here. So dvi/dt=0.</span> </p><p><span m='2225000'>This vanishes
  and vi=VI. Bingo.</span> </p><p><span m='2228000'>Therefore, VI is a solution
  to this equation.</span> </p><p><span m='2232000'>So I am done with my
  vCP.</span> </p><p><span m='2242000'>And in general what you have to do is use
  trial and error.</span> </p><p><span m='2243000'>By trial and error try out a
  bunch of solutions until you get</span> <span m='2244000'>lucky. In general,
  again, in all of 6.002 for many of the excitations a simple constant</span>
  <span m='2245000'>usually suffices. Our second step is to find the</span>
  <span m='2246000'>homogenous solution. And we can also do that very</span>
  <span m='2247000'>quickly. And to do that we have to find a general solution
  to the homogenous equation.</span> </p><p><span m='2249000'>The homogenous
  equation is the same differential equation but</span> <span m='2272000'>with
  the drive set to zero.</span> </p><p><span m='2291000'>We want to follow a set
  pattern to solve the differential</span> <span m='2295000'>equations here, and
  the set pattern is find</span> <span m='2299000'>vCP, vCH, find constants. And
  to find vCH we are also</span> <span m='2303000'>going to follow a set pattern
  to find the homogenous solution.</span> </p><p><span m='2309000'>So we set the
  drive to zero, so vi is set to be zero.</span> </p><p><span m='2314000'>And I
  need to find a general solution to this.</span> </p><p><span m='2318000'>As I
  promised earlier, diff equations are really,</span> <span m='2323000'>really
  simple because the way we are going to solve them is we</span> <span
  m='2329000'>are going to assume we know the answer and then go check
  it.</span> </p><p><span m='2335000'>So let's try Ae^st. Let's try and see if
  this can</span> <span m='2340000'>solve this particular equation for some
  values of A and S.</span> </p><p><span m='2345000'>I am telling you that the
  solution is going to be of this</span> <span m='2350000'>form. Assume
  it.</span> </p><p><span m='2352000'>And then simply go ahead and find me A and
  S,</span> <span m='2356000'>and do that by substituting it back into the
  equation and find</span> <span m='2361000'>out the corresponding As and Ss. So
  let's go ahead and do that.</span> </p><p><span m='2367000'>I get RC. I
  substitute this back up so I</span> <span m='2376000'>get dAe^(st)/dt+Ae^st=0.
  And let me plug that in and see</span> <span m='2390000'>what comes. I get
  RCAse^st+Ae^st=0.</span> </p><p><span m='2400000'>I want to discard the
  trivial solution of A being 0.</span> </p><p><span m='2405000'>That is a
  trivial solution so I will discard that.</span> </p><p><span m='2411000'>And
  what I will do is cancel out the As from here,</span> <span
  m='2416000'>assuming A is not zero, and cancel e^st here.</span> </p><p><span
  m='2421000'>And what is left is RCs+1=0. What this is saying is that if</span>
  <span m='2428000'>I can find an S such that this is true then Aest is a
  general</span> <span m='2434000'>solution to my homogenous equation.</span>
  </p><p><span m='2440000'>This is easy enough. And so S=-1/RC.</span>
  </p><p><span m='2444000'>If I choose my S to be -1/RC then the simple math
  that I have</span> <span m='2451000'>gone through shows me that this must be
  the solution to the</span> <span m='2457000'>homogenous equation. Or in other
  words</span> <span m='2462000'>vCH=Ae^(-t/RC). All this is saying is
  that</span> <span m='2467000'>Ae^(-t/RC) is a solution to my homogenous
  equation.</span> </p><p><span m='2472000'>A is an unknown constant. A is some
  constant.</span> </p><p><span m='2476000'>I don't know what that is yet.
  Notice RC has popped up again.</span> </p><p><span m='2481000'>And the cool
  thing about RC is that, this is time,</span> <span m='2486000'>this also has
  units of time. We commonly represent RC as</span> <span m='2493000'>some time
  constant tau, as units of time.</span> </p><p><span m='2498000'>Associated
  with that circuit is the time constant tau,</span> <span m='2505000'>which is
  simply RC. I commonly write this as</span> <span
  m='2510000'>Ae^(-t/tau).</span> </p><p><span m='2522000'>I am very the end
  here. I have the particular solution</span> <span m='2528000'>here. I have got
  the homogenous</span> <span m='2531000'>solution there. I need to tell you
  about</span> <span m='2536000'>something else. The way I found the
  homogenous</span> <span m='2541000'>solution was in four steps. I assumed a
  solution of the</span> <span m='2547000'>form Ae^st. I created this equation
  here in</span> <span m='2552000'>S. This is called the</span> <span
  m='2554000'>characteristic equation for that circuit.</span> </p><p><span
  m='2558000'>We will see this time and time again for RC and other forms
  of</span> <span m='2564000'>circuits. Assume a solution of this form.</span>
  </p><p><span m='2567000'>Construct the characteristic equation.</span>
  </p><p><span m='2571000'>Find the roots of the characteristic equation.</span>
  </p><p><span m='2575000'>In this case it is an equation in S.</span>
  </p><p><span m='2580000'>So this is the root. And then form the
  solution</span> <span m='2585000'>based on that root. Four steps.</span>
  </p><p><span m='2588000'>Ae^st, characteristic equation, root and then write
  down the</span> <span m='2595000'>general homogenous solution. Four steps
  there.</span> </p><p><span m='2601000'>And finally I want to write down the
  total solution.</span> </p><p><span m='2608000'>And the total solution is
  simply vCP+vCH.</span> </p><p><span m='2613000'>And vCP was VI and vCH was
  Ae^(-t/tau).</span> </p><p><span m='2618000'>tau was simply RC. That is my
  solution.</span> </p><p><span m='2623000'>Now, remember the last step. The
  last step was form the</span> <span m='2630000'>total solution and find out
  the remaining constants.</span> </p><p><span m='2639000'>Find out the
  remaining constants by using my initial</span> <span m='2645000'>conditions.
  At t=0, I know that vC=V0.</span> </p><p><span m='2650000'>I know that. And so
  therefore I can</span> <span m='2655000'>substitute t=0 to find the
  constant.</span> </p><p><span m='2660000'>So I know that VO=VI+A. t=0, this
  thing becomes 1,</span> <span m='2666000'>and so I get this equation from
  which I get A=V0-Vi.</span> </p><p><span m='2675000'>In other words, my
  solution vC is simply</span> <span m='2678000'>VI+(VO-VI) e^(-t/tau). So the
  last 15 minutes have</span> <span m='2683000'>just been math. No electrical
  engineering here,</span> <span m='2687000'>but electrical engineering stopped
  at the point where you</span> <span m='2693000'>wrote this differential
  equation down, went through a bunch of</span> <span m='2698000'>math and came
  up with a solution.</span> </p><p><span m='2703000'>Purely mathematically. So
  here I simply used math to</span> <span m='2707000'>get you the solution. And,
  as I have been promising</span> <span m='2711000'>you throughout this course,
  in the next lecture I will give</span> <span m='2716000'>you an intuitive EE
  method of doing it.</span> </p><p><span m='2719000'>Real electrical engineers,
  real EECS folks don't do it</span> <span m='2723000'>this way. Real EECS folks
  do it</span> <span m='2726000'>intuitively. And I will show you how to
  do</span> <span m='2730000'>it in four easy seconds in the next
  lecture.</span> </p><p><span m='2735000'>But you need to understand the
  foundations of how this comes</span> <span m='2741000'>about, and so this is
  the answer.</span> </p><p><span m='2744000'>You can also get the current iC is
  simply Cdvc/dt.</span> </p><p><span m='2749000'>I won't do that for you, but
  you can simply</span> <span m='2753000'>differentiate it and get the
  current.</span> </p><p><span m='2757000'>So I can plot for you vC, time t,
  vC.</span> </p><p><span m='2762000'>The intuitive way of looking at this is I
  have VI which is the</span> <span m='2768000'>final value of the voltage. When
  t is infinity this part</span> <span m='2775000'>goes to zero so the vC is
  simply VI.</span> </p><p><span m='2779000'>And then there is a component V0-VI
  which decays according to</span> <span m='2786000'>this starting out at an
  initial value of V0.</span> </p><p><span m='2792000'>Notice when t is zero vC
  is V0, you can see that in the</span> <span m='2798000'>equation, and so it
  starts out at V0 and ends up at VI.</span> </p><p><span m='2805000'>I start
  here, I end up here.</span> </p><p><span m='2809000'>And this portion V0-VI
  decays out over time like this.</span> </p><p><span m='2815000'>And this decay
  is governed by the RC time constant or tau.</span> </p><p><span m='2824000'>I
  am going to show you very quickly a couple of examples of</span> <span
  m='2830000'>wave forms, one that goes like this and one that looks like</span>
  <span m='2837000'>this. This is when I start with some</span> <span
  m='2841000'>value V0 and I don't apply any input, it should decay down
  to</span> <span m='2848000'>zero, t, t, vC, vC.</span> </p><p><span
  m='2852000'>If I apply zero for VI then this should simply decay down
  to</span> <span m='2857000'>nothing over time. And if I apply some VI
  but</span> <span m='2861000'>there is no state in the capacitor then that
  same</span> <span m='2865000'>equation is going to look like this.</span>
  </p><p><span m='2868000'>You can go and confirm for yourselves that when I
  apply</span> <span m='2873000'>some input but the capacitor has zero state, I
  start at zero,</span> <span m='2878000'>I finish up at VI and my wave form
  looks like this.</span> </p><p><span m='2884000'>There you go. That's the
  first one.</span> </p><p><span m='2887000'>The second one where I have 5 volts
  on the capacitor and no</span> <span m='2893000'>input. Assume that at time
  equals zero</span> <span m='2896000'>I take away an input, short the input
  voltage to</span> <span m='2901000'>ground for example, apply zero
  volts.</span> </p><p><span m='2905000'>You will see the decay from 5 volts to
  0 volts.</span> </p><p><span m='2911000'>And in the first case I start with
  zero volts in my capacitor,</span> <span m='2917000'>I apply input of 5 volts,
  and notice that at t=0 the</span> <span m='2922000'>capacitor rises up to that
  level.</span> </p><p><span m='2925000'>So notice that these circuits with
  capacitor and resistors are</span> <span m='2931000'>typified by wave forms
  that are exponential rises and</span> <span m='2936000'>exponential decays. We
  will see more of that next</span> <span m='2941000'>time.</span> </p>
uid: 735531e0e501fe40dfa3c3a46473c715
type: courses
layout: video
---
