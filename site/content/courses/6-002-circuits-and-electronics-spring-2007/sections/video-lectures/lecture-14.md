---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> State and memory</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec14.jpg
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-14/thumb_lec14.jpg
    title: thumb_lec14.jpg
    type: null
    uid: c0cdcddd5a9b71a1237d9521ecdc722d
  - id: Video-YouTube-Stream
    media_location: bX8i2yECWaU
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Video-YouTube-Stream
    type: Video
    uid: c105380da2df24bdbf2dc54c40fab994
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/bX8i2yECWaU/default.jpg'
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8e4afa5761a05044bf86c66723913a11
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Video-iTunes U-MP4
    type: Video
    uid: 0b0a49cb54f5f56d578288e61d28e01a
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-23oct2003-220k.mp4
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Video-Internet Archive-MP4
    type: Video
    uid: 559b5b434f4f86f73147b8a83542b305
  - id: Thumbnail-OCW-JPG
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 7898d95a3c1fdc0754053c143304ea82
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: bX8i2yECWaU
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c2868ffcc2c6171df1f10444dbeace49
  - id: bX8i2yECWaU.srt
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-14/bX8i2yECWaU.srt
    title: 3play caption file
    type: null
    uid: 90bbe469cfce32eac8140e2067b85fb3
  - id: bX8i2yECWaU.pdf
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-14/bX8i2yECWaU.pdf
    title: 3play pdf file
    type: null
    uid: ee61c25a3d1e86cd3d52ba3ee5d85570
  - id: Caption-3Play YouTube id-SRT
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 3ada303ebbddd74c7a5a9c765a1ea3ba
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: eb939a9610c4b0543638b7043b2786aa
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9206461f29fbf33c69d972a563ffe921
inline_embed_id: '96360917lecture14:stateandmemory18748791'
order_index: 285
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/b703ee58f9dd8239b823eb6a4d20de0e">PDF</a>)<br />
  Demonstration: Digital memory (<a target="_blank" title="Open in a new
  window." href="./resolveuid/7c00813621ae18f7dd2e074be068ea72">PDF</a>)</p>
short_url: lecture-14
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-14
title: 'Lecture 14: State and Memory'
transcript: >-
  <p><span m='5000'>I will be replacing Professor Agarwal today because he
  is</span> <span m='11000'>away. I am one of the recitation</span> <span
  m='14000'>instructors for those of you who have not seen me.</span>
  </p><p><span m='20000'>We will talk today about a neat application of RC
  networks and</span> <span m='27000'>expand those to application in MOS memory
  systems.</span> </p><p><span m='34000'>To connect with everything, we will get
  back to the basic</span> <span m='41000'>circuit that we have been discussing
  so far.</span> </p><p><span m='47000'>And you recall the circuit that we have
  been studying,</span> <span m='54000'>the canonical RC with an input voltage
  function of t.</span> </p><p><span m='62000'>And we had specified that we
  solved this problem for the case</span> <span m='70000'>of a step input or a
  condition in which a t=0.</span> </p><p><span m='76000'>At t greater or equal
  to zero vI is equal to some capital VI</span> <span m='84000'>value that for
  now on is constant.</span> </p><p><span m='90000'>And the other condition that
  we discussed was the value of the</span> <span m='97000'>voltage on the
  capacitor that would exist at time t=0.</span> </p><p><span m='104000'>Let's
  call that vc(0). And in general there is some</span> <span m='110000'>finite
  value here. It can be zero or it can be</span> <span m='116000'>different from
  zero. Given that, we learned how to</span> <span m='123000'>write down
  directly, without messing around with</span> <span m='130000'>differential
  equations, the answer for the voltage on</span> <span m='136000'>the capacitor
  vc(t), let me define also my vc right</span> <span m='143000'>here, is equal
  to VI, the final value,</span> <span m='148000'>plus vc(0), the initial value
  on the capacitor,</span> <span m='154000'>minus the final value,
  e^-t/RC.</span> </p><p><span m='160000'>This is our standard equation to which
  we plug in,</span> <span m='165000'>and it's either a rising exponential if VI
  is larger than</span> <span m='171000'>VC or a decaying exponential if VI is a
  smaller value than VC.</span> </p><p><span m='177000'>This should all be
  familiar. And, again, as pointed out in</span> <span m='184000'>the notes, the
  reading for today is 10.3 and for the new material</span> <span m='191000'>you
  should look at Chapter 11 where we discuss memory.</span> </p><p><span
  m='198000'>This is where we stood as of last time.</span> </p><p><span
  m='202000'>Now, I would like to discuss a little bit more about the</span>
  <span m='209000'>storage of charge in capacitors. And how we can take
  advantage</span> <span m='217000'>of that for storing logic state. One of the
  things that I am</span> <span m='225000'>sure you must be aware of is that one
  of the perhaps most</span> <span m='232000'>massively produced chips is
  actually the so-called DRAM</span> <span m='239000'>which you find in every PC
  and every computer that exists</span> <span m='246000'>anywhere. This DRAM is
  dynamic random</span> <span m='252000'>access memory in which we can store a
  state and come back and</span> <span m='259000'>look at it at any time later,
  provided we don't power off our</span> <span m='266000'>machine. The logic
  state in the basic</span> <span m='270000'>memory elements, of which instead
  there are</span> <span m='275000'>close to 1 giga elements per chip, are
  stored on capacitors.</span> </p><p><span m='284000'>And so we will play a
  little bit with that concept today.</span> </p><p><span m='288000'>And,
  although we're not going to discuss the specific example</span> <span
  m='292000'>of the DRAM, the basic elements of the DRAM you will see</span>
  <span m='296000'>actually in a demo shortly. So that's the general
  response</span> <span m='304000'>of this network that I have here to an input
  VI that happens at</span> <span m='314000'>t=0. Now, the one thing that
  you</span> <span m='319000'>recognize immediately is that it really doesn't
  matter what the</span> <span m='330000'>value of VI was for t less than
  zero.</span> </p><p><span m='338000'>What really counts is the value of VI at
  t=0.</span> </p><p><span m='343000'>And that's the value that we're interested
  in.</span> </p><p><span m='348000'>Now, there is an implicit statement in
  that.</span> </p><p><span m='353000'>And that statement is that somehow that
  network appears</span> <span m='360000'>like this at t=0. So, there has to be
  some switch</span> <span m='367000'>there, and you will see that, that
  basically starts my</span> <span m='374000'>condition to that at t=0. And so
  the history of VI really</span> <span m='381000'>doesn't matter. The response
  following that</span> <span m='387000'>equation that we have there will depend
  on the initial value</span> <span m='395000'>which is vc(0) here. Now that is
  the voltage on the</span> <span m='402000'>capacitor at that time. And then
  assuming that VI is a</span> <span m='408000'>value that is larger than vc(0)
  will have a rising exponential</span> <span m='415000'>that will come to this
  value. And this is the time constant</span> <span m='424000'>RC and this is
  time. So, the capacitor starts with</span> <span m='432000'>some voltage here
  and goes to a new voltage that is imposed by</span> <span m='443000'>the input
  for time greater than zero.</span> </p><p><span m='450000'>We can define at
  any one time, say this time,</span> <span m='456000'>this time, this time,
  this time the state of the</span> <span m='463000'>capacitor. The
  state.</span> </p><p><span m='466000'>What is the state of the
  capacitor?</span> </p><p><span m='471000'>The state is the summary of all
  inputs that are relevant to</span> <span m='480000'>predicting the future. If
  I know the state of the</span> <span m='487000'>capacitor this time, I can
  predict what it is going</span> <span m='491000'>to go given a response VI
  here in the future.</span> </p><p><span m='495000'>So, predicts the future.
  Now, what is the state variable</span> <span m='500000'>on the capacitor? What
  is actually stored on the</span> <span m='505000'>capacitor? You can
  say,</span> <span m='508000'>well, what is stored is voltage.</span>
  </p><p><span m='510000'>The real physical quantity that is stored is the
  charge q which</span> <span m='516000'>is for linear capacitors related to the
  voltage,</span> <span m='520000'>let me actually write it correctly, vc like
  this.</span> </p><p><span m='524000'>So, the real state variable is
  this.</span> </p><p><span m='537000'>But for a linear capacitor, since there
  is one-to-one</span> <span m='545000'>relationship between the two, v is also
  a state variable.</span> </p><p><span m='553000'>OK, so let's then go back to
  our original circuit.</span> </p><p><span m='561000'>What we have is --</span>
  <span m='577000'>-- vc(t), so that's the future value of the voltage on
  the</span> <span m='585000'>capacitor, is a function of vc(0), the initial
  value and the</span> <span m='593000'>variable input now in the future
  time.</span> </p><p><span m='600000'>And for the case of vI(t) being constant
  VI for t greater or</span> <span m='608000'>equal than zero we have the
  equation that we just described.</span> </p><p><span m='616000'>Nothing
  new.</span> </p><p><span m='630000'>All the past inputs to the capacitor for
  time t less or</span> <span m='636000'>equal to zero is summarized in this
  value.</span> </p><p><span m='641000'>And vi being constant the future is
  predicted from that.</span> </p><p><span m='647000'>So, that's the concept of
  the state.</span> </p><p><span m='651000'>There is an initial state on the
  capacitor.</span> </p><p><span m='658000'>And then there is a final state that
  will be reached when</span> <span m='664000'>equilibrium actually is
  achieved.</span> </p><p><span m='667000'>There is a fair amount of discussion
  in the text,</span> <span m='673000'>and we don't go in great detail here, but
  it is both convenient</span> <span m='680000'>for analysis and also it's
  interesting in many cases to</span> <span m='686000'>look at the response of a
  linear network for two different</span> <span m='692000'>conditions. So, we're
  interested in two</span> <span m='700000'>cases. One is the so-called zero
  state</span> <span m='709000'>response. Now, what is the zero state</span>
  <span m='716000'>response? It's the response to a</span> <span
  m='723000'>condition in which we impose an input and impose also the</span>
  <span m='733000'>condition that the initial value, initial state of the</span>
  <span m='742000'>capacitor is zero. So then we ask how does it</span> <span
  m='749000'>respond to vi(t)? So, starting with a capacitor</span> <span
  m='756000'>at zero state what is the response?</span> </p><p><span
  m='760000'>It allows us to decouple the initial conditions from the</span>
  <span m='766000'>response to the input. Now, you will see that this is</span>
  <span m='771000'>actually very useful. The second condition to which</span>
  <span m='776000'>we're also very interested is the so-called zero input</span>
  <span m='781000'>response. What is that?</span> </p><p><span m='787000'>That
  is vi(t)=0. Now, it's the condition under</span> <span m='798000'>which there
  is no input. vi(t)=0.</span> </p><p><span m='806000'>The question here is how
  does it relax?</span> </p><p><span m='818000'>We're starting with an initial
  state.</span> </p><p><span m='822000'>So, how this state relaxes out in the
  circuit.</span> </p><p><span m='828000'>Now, the zero state response, this one
  here is Z so called SR</span> <span m='837000'>for our case, which I will
  write like this,</span> <span m='842000'>vC, ZSR is simply a rising
  exponential.</span> </p><p><span m='849000'>We start from zero and we go to
  VI.</span> </p><p><span m='856000'>So, it's VI-VI e^-t/RC. So, that's the
  ZSR.</span> </p><p><span m='864000'>The ZIR, the zero input response is like
  this.</span> </p><p><span m='875000'>It's the decay of the initial voltage on
  the capacitor to zero</span> <span m='882000'>or to equilibrium. Starting from
  vC(0) we're</span> <span m='888000'>decaying like this. Now, do you see
  something</span> <span m='893000'>that's rather obvious from what's on the
  board in terms of</span> <span m='900000'>ZIR and ZSR and the final complete
  answer which is there?</span> </p><p><span m='918000'>They are specific cases,
  but how do they relate to the</span> <span m='921000'>full answer? It's the
  sum.</span> </p><p><span m='923000'>It's the superposition of the two.</span>
  </p><p><span m='926000'>What basically we see here -- And that's actually a
  general</span> <span m='933000'>statement, is that vC = vC,ZSR +
  vC,ZIR.</span> </p><p><span m='939000'>Now, you may say this is trivial
  because we started from</span> <span m='948000'>that, ended back in that from
  some very simple observations.</span> </p><p><span m='959000'>However, we are
  not always solving networks for responses</span> <span m='964000'>that are
  steps. The input voltage may be a</span> <span m='968000'>ramp. We did that in
  recitation.</span> </p><p><span m='971000'>Or, it could be an impulse. Or, it
  can be a more</span> <span m='976000'>complicated function. Having this
  observation in</span> <span m='981000'>place actually allows us to solve the
  problem rather neatly.</span> </p><p><span m='988000'>If I have time at the
  end, I might come back to this.</span> </p><p><span m='993000'>So, this is the
  same equation as I started with,</span> <span m='997000'>arrived at from a
  principle of superposition of two different</span> <span
  m='1003000'>solutions. One application of state which</span> <span
  m='1007000'>can be, since we have energy storage element here,</span> <span
  m='1012000'>the capacitor, which can be stored on the</span> <span
  m='1016000'>capacitor is in memory. And you may ask,</span> <span
  m='1021000'>so why do we need a memory node to perform logic?</span>
  </p><p><span m='1025000'>Well, there are cases in which a result depends on
  previous</span> <span m='1031000'>results. So, a computation proceeds
  in</span> <span m='1034000'>time. In order to do that,</span> <span
  m='1036000'>we need to store intermediate results and proceed forward.</span>
  </p><p><span m='1041000'>One good example is if you're doing a continuous
  summation,</span> <span m='1047000'>say, on your calculator, you keep putting
  things in the</span> <span m='1052000'>memory. The M+ button,</span> <span
  m='1055000'>right? And you keep adding a series of</span> <span
  m='1058000'>numbers. Every time we store the sum of</span> <span
  m='1061000'>the previous operation we add another number and so on.</span>
  </p><p><span m='1066000'>Clearly we need some way of storing state.</span>
  </p><p><span m='1069000'>For a complete computing system, we need
  combinational</span> <span m='1073000'>logic and we need memory. In fact,
  these are the two</span> <span m='1078000'>basic elements that are essential
  for any kind of</span> <span m='1082000'>computing system. We need to
  remember</span> <span m='1087000'>intermediate results. We need to remember
  transient</span> <span m='1092000'>inputs. And that's the role that all</span>
  <span m='1096000'>these enormous amount of memory that comes to play in
  computers</span> <span m='1103000'>is doing. The basic memory abstraction
  is</span> <span m='1107000'>as follows.</span> </p><p><span
  m='1121000'>Imagine a block which needs to be populated by transistor,</span>
  <span m='1127000'>resistor, capacitor, whatever elements.</span> </p><p><span
  m='1132000'>And it has a control input, which we will call the store.</span>
  </p><p><span m='1140000'>It has a state input that we will call dIN and has an
  output</span> <span m='1148000'>dOUT. When we're telling this</span> <span
  m='1152000'>element, OK, now it's time to store, it looks at the input
  dIN</span> <span m='1160000'>and stores it for, in principle,</span> <span
  m='1165000'>an infinite amount of time. If we were to make a drawing of</span>
  <span m='1174000'>this, of what this looks like, let's suppose,</span> <span
  m='1180000'>let me do all this in one axis. So, time moves this way.</span>
  </p><p><span m='1187000'>Let's suppose that we have an input dIN that looks
  like this,</span> <span m='1196000'>and the store command comes in the form of
  a logic.</span> </p><p><span m='1204000'>Let's actually suggest here this is
  logic one,</span> <span m='1208000'>this is logic zero. And, although this is
  not</span> <span m='1213000'>absolutely necessary, let's also define that
  the</span> <span m='1217000'>store command comes in the form of a logic one at
  this store</span> <span m='1223000'>input. Store, let's say,</span> <span
  m='1226000'>looks like this.</span> </p><p><span m='1234000'>What does the
  output look like then in this particular case?</span> </p><p><span
  m='1241000'>Assuming that the output was dOUT, the stored element was</span>
  <span m='1249000'>zero prior to the store, then the output would look
  like</span> <span m='1256000'>this. This is dOUT.</span> </p><p><span
  m='1260000'>As you can see, it would remember the one that</span> <span
  m='1264000'>it saw at this point. In fact, it would do that</span> <span
  m='1269000'>irrespective of what was stored in this memory cell.</span>
  </p><p><span m='1275000'>For example, suppose it was storing one and</span>
  <span m='1279000'>the output didn't change, it's still one.</span>
  </p><p><span m='1283000'>If it was storing a zero, it would flip to a
  one.</span> </p><p><span m='1290000'>If we had another store, let's say
  here,</span> <span m='1294000'>then what happens? Then it would go back down
  to</span> <span m='1300000'>zero because now we sampled an input that is zero
  and we</span> <span m='1307000'>flipped the state. That's what a memory
  --</span> <span m='1321000'>-- element or cell would do for us.</span>
  </p><p><span m='1324000'>It would remember the output state.</span>
  </p><p><span m='1328000'>And, not only that, but in principle it should
  be</span> <span m='1333000'>undisturbable. In other words,</span> <span
  m='1337000'>I may do something to this dOUT but it should not flip the</span>
  <span m='1343000'>state. And that comes about quite a</span> <span
  m='1347000'>bit. Because in actual integrated</span> <span m='1351000'>circuit
  memory there is lots and lots and lots of nearest</span> <span
  m='1355000'>neighbors to this cell which, when they're flipped,</span> <span
  m='1359000'>have a cross-coupling to the cell.</span> </p><p><span
  m='1362000'>The cell must be designed robust enough that it doesn't</span>
  <span m='1366000'>flip, that no coupling actually occurs.</span> </p><p><span
  m='1369000'>All right. Now we're going to try to apply</span> <span
  m='1373000'>what we've learned so far to invent a basic memory element.</span>
  </p><p><span m='1379000'>And, believe it or not, this is the key to the
  DRAM.</span> </p><p><span m='1394000'>Let's implement this in a
  circuit.</span> </p><p><span m='1404000'>Suppose I have a switch here like
  this.</span> </p><p><span m='1414000'>And I will put a capacitor. I take my
  dOUT here.</span> </p><p><span m='1422000'>This is dIN. And the switch is
  operated by a</span> <span m='1430000'>command here that we will call
  store.</span> </p><p><span m='1436000'>When store is one it goes up. When
  store is zero it is down</span> <span m='1446000'>here. That's capacitor
  C.</span> </p><p><span m='1450000'>This is the storage node.</span>
  </p><p><span m='1464000'>What are we actually storing in this case?</span>
  </p><p><span m='1467000'>Let's suppose that this voltage here is 5
  volts.</span> </p><p><span m='1471000'>I flip the switch up to one and I flip
  it back down to zero.</span> </p><p><span m='1477000'>What's the voltage in
  this capacitor here?</span> </p><p><span m='1481000'>5 volts. Now the
  capacitor is at 5</span> <span m='1484000'>volts, I put dIN to ground, flip
  the switch back up and</span> <span m='1490000'>then back down to its known
  storing condition.</span> </p><p><span m='1495000'>What's the voltage in the
  capacitor?</span> </p><p><span m='1500000'>It's zero, exactly. So, it does
  store the value of</span> <span m='1504000'>the voltage that it saw, five or
  zero,</span> <span m='1508000'>high and low. It stores it because it
  stores</span> <span m='1512000'>charge. That's actually the physical</span>
  <span m='1515000'>quantity that's stored. It's manifested as a voltage,</span>
  <span m='1520000'>which we see. All right.</span> </p><p><span
  m='1522000'>Now, is this, oh, before I move from here.</span> </p><p><span
  m='1528000'>What is the basic cell in a DRAM, one that you go out and</span>
  <span m='1533000'>buy by the billions of cells? It's actually this.</span>
  </p><p><span m='1537000'>The only difference is that this switch here is
  replaced</span> <span m='1543000'>with a MOSFET.</span> </p><p><span
  m='1550000'>And that's all it is. So, a MOSFET plays the role of</span> <span
  m='1554000'>the switch. When the gate is high this is a</span> <span
  m='1557000'>resistor and connects the input to the capacitor.</span>
  </p><p><span m='1562000'>And when the gate voltage is below the threshold
  voltage this</span> <span m='1567000'>is an open, as we've seen, and it
  isolates the transistor</span> <span m='1572000'>from the output. So, that's
  the basic memory</span> <span m='1576000'>element.</span> </p><p><span
  m='1588000'>And, as I said, it's the key to a DRAM.</span> </p><p><span
  m='1593000'>OK. Now let's consider a little bit</span> <span m='1597000'>the
  conditions of operation of this thing.</span> </p><p><span m='1602000'>Let me
  draw the circuit in two conditions.</span> </p><p><span m='1607000'>One in
  which it is storing, one in which it is sampling and</span> <span
  m='1615000'>one in which it is storing. Not to redraw this thing.</span>
  </p><p><span m='1624000'>Assuming that I have a MOSFET there, I would have the
  on</span> <span m='1634000'>resistance in place here when store=1.</span>
  </p><p><span m='1640000'>Now, in principle, the output is connected to
  --</span> <span m='1656000'>-- some load resistance. We'll talk a little bit
  more</span> <span m='1660000'>about this load resistance in a minute.</span>
  </p><p><span m='1664000'>This is the situation when we are at store=1
  situation.</span> </p><p><span m='1669000'>For example, let's suppose that dIN
  is 5</span> <span m='1673000'>volts. Now, what is the situation for</span>
  <span m='1676000'>store=0? It's very simple.</span> </p><p><span
  m='1680000'>We have the capacitor C and dOUT and here we have a</span> <span
  m='1692000'>resistance. The switch is open.</span> </p><p><span
  m='1700000'>This is store=0 condition. What we have in this case is we</span>
  <span m='1711000'>have a problem similar to what I was discussing
  earlier.</span> </p><p><span m='1717000'>It is a ZIR, if you like,</span>
  <span m='1719000'>situation. And this you can think of as a</span> <span
  m='1724000'>ZSR if we're starting with zero charge on the capacitor,</span>
  <span m='1730000'>but I'm interested in this part.</span> </p><p><span
  m='1733000'>In this case, I am starting with a vC(0)=5</span> <span
  m='1737000'>volts. And I'm asking myself how long</span> <span
  m='1742000'>will this cell hold the value? And, in fact,</span> <span
  m='1746000'>that is actually what happens in a dynamic RAM.</span>
  </p><p><span m='1750000'>The value on the capacitor is not stored
  forever.</span> </p><p><span m='1755000'>In fact, that's why we call it
  dynamic because we have to come</span> <span m='1760000'>back and restore it
  every once in a while.</span> </p><p><span m='1764000'>For how long are we
  going to store the charge?</span> </p><p><span m='1770000'>What's the response
  of vc for t greater than zero after the</span> <span m='1777000'>switch
  flicked? It's very simple.</span> </p><p><span m='1781000'>It's vc is equal to
  5 volts e to the minus t over RC,</span> <span m='1788000'>right? That's the
  response.</span> </p><p><span m='1792000'>We have a decay. And applying to the
  things we</span> <span m='1798000'>know. We start from 5 volts,</span> <span
  m='1802000'>let's say here, I have a decay going down</span> <span
  m='1807000'>towards zero, at some point we are going to</span> <span
  m='1812000'>cross the threshold for high. The only period in which I
  have</span> <span m='1819000'>a valid output, if the capacitor was storing
  a</span> <span m='1824000'>one, is this period here. This is the only period
  in</span> <span m='1832000'>which I have valid stored one because, once I go
  beyond</span> <span m='1839000'>capital T here, I have crossed the legal
  limit,</span> <span m='1846000'>threshold for discriminating a high
  output.</span> </p><p><span m='1851000'>And from then on the output is no
  longer valid.</span> </p><p><span m='1859000'>So, this memory is good provided
  time is less than</span> <span m='1865000'>capital T. It's not a case in which
  the</span> <span m='1870000'>capacitor can hold charge forever.</span>
  </p><p><span m='1874000'>In fact, we can calculate, that is we can solve for T
  in</span> <span m='1881000'>this particular case. It's in your notes.</span>
  </p><p><span m='1888000'>Nothing really profound. T is equal to minus RC log
  VOH</span> <span m='1897000'>over 5 volts. So, this is basically what
  the</span> <span m='1905000'>response is going to be. Now, there is an
  implicit</span> <span m='1913000'>assumption here, which is that the store
  pulse</span> <span m='1921000'>width is much, much larger than RON C.</span>
  </p><p><span m='1930000'>In other words, when we want to store a one</span>
  <span m='1933000'>here starting from zero, we better charge it all the
  way</span> <span m='1936000'>up to 5 volts in the time that our switch is
  connected here.</span> </p><p><span m='1941000'>And what is the relevant time
  constant?</span> </p><p><span m='1943000'>It's going to be the RON C. In fact,
  it's actually the RON</span> <span m='1947000'>parallel RL with C. But
  typically RON is much,</span> <span m='1953000'>much less than RL so we don't
  have to worry about that.</span> </p><p><span m='1959000'>Dominant time
  constant is RON C.</span> </p><p><span m='1962000'>So, provided these things
  are happening, we have a memory.</span> </p><p><span m='1969000'>Now, we can
  try to improve things a little bit.</span> </p><p><span m='1975000'>We see
  here that we will have a decay to an invalid state in</span> <span
  m='1981000'>time T. How can we improve things?</span> </p><p><span
  m='1987000'>One way to improve things are the buffer.</span> </p><p><span
  m='1992000'>Here is our memory element again.</span> </p><p><span
  m='1996000'>Here is the capacitor. This is the storing node.</span>
  </p><p><span m='2002000'>Now I am going to put the buffering effect.</span>
  </p><p><span m='2009000'>I am going to put two buffers here.</span>
  </p><p><span m='2013000'>Two invertors, I should say,</span> <span
  m='2016000'>because if I am storing a one here I want to be able to see
  a</span> <span m='2023000'>one here as well. And, in this case,</span> <span
  m='2028000'>what I am looking at is the RIN of the buffer.</span> </p><p><span
  m='2033000'>And, in principle, I have out here the RL.</span> </p><p><span
  m='2040000'>Now, this is better because if RIN is much larger than RL
  then</span> <span m='2055000'>the time T, in this case, is much larger than
  the case</span> <span m='2068000'>without buffer. So, we buffer the effect of
  VL.</span> </p><p><span m='2076000'>This could be one of these neat circuits
  we saw in recitation</span> <span m='2082000'>like a source faller, for
  example,</span> <span m='2085000'>or it can be just an inverter in which case
  you just see the</span> <span m='2091000'>input of a transistor. So, now this
  condition can be</span> <span m='2097000'>satisfied. Let me give you some
  cases</span> <span m='2103000'>which are some numbers that are typical for a
  dynamic RAM.</span> </p><p><span m='2111000'>Typical times we're talking about
  is RIN on order of 1</span> <span m='2120000'>gigaohm and storage node
  capacitor on order of 1</span> <span m='2127000'>femtofarad to one picofarad.
  Now, if you can do the math in</span> <span m='2136000'>your head, which is
  just multiplication,</span> <span m='2141000'>you will see that the time
  constant, the RC is between 1</span> <span m='2147000'>millisecond to 1
  microsecond. And for DRAMs,</span> <span m='2152000'>actually, we try to be in
  the order of milliseconds.</span> </p><p><span m='2160000'>These are the times
  we're talking about.</span> </p><p><span m='2163000'>If I have this kind of
  circuit, somehow there has got to be</span> <span m='2167000'>additional
  circuitry that comes back, samples the voltage here</span> <span
  m='2172000'>and restores it. And that is actually what is</span> <span
  m='2176000'>happening in a DRAM. And my laptop is working there</span> <span
  m='2180000'>and its DRAM keeps getting refreshed every,</span> <span
  m='2183000'>say, millisecond or whatever the condition is.</span> </p><p><span
  m='2188000'>But, in our case, we are going to do a slightly</span> <span
  m='2192000'>different case in which we will create a static memory.</span>
  </p><p><span m='2198000'>Let's actually look at, first of all,</span> <span
  m='2202000'>the case of the discharge. Pay attention to,</span> <span
  m='2207000'>let me actually break the loop here.</span> </p><p><span
  m='2210000'>This is my capacitor. This is a resistor that is in</span> <span
  m='2216000'>series with a capacitor like you see here.</span> </p><p><span
  m='2222000'>Actually, I am going to keep that resistor in series with
  the</span> <span m='2227000'>capacitor, even in this case, because I have it
  for my second</span> <span m='2233000'>part of my example. I charge the
  capacitor to 5</span> <span m='2238000'>volts. And you can see here
  this</span> <span m='2241000'>lights up, I hope everybody can see it,
  proportional to the</span> <span m='2246000'>voltage that I have here. From
  here on it's all logic</span> <span m='2252000'>levels. So, the intensity of
  light here</span> <span m='2255000'>will always be the same. It's either lit
  or it's not</span> <span m='2259000'>lit. Right now I am charging the</span>
  <span m='2262000'>capacitor. In fact, let's see.</span> </p><p><span
  m='2264000'>Maybe I can discharge the capacitor first.</span> </p><p><span
  m='2278000'>Here the capacitor is discharged.</span> </p><p><span
  m='2280000'>As you can see, the input is zero,</span> <span m='2283000'>the
  output is a one, and then the output of this</span> <span m='2288000'>inverter
  here is a one. I have two inverters in series.</span> </p><p><span
  m='2293000'>And I am going to charge the capacitor.</span> </p><p><span
  m='2296000'>I charged it to 5 volts and this lit up, this is off of</span>
  <span m='2301000'>course, that's an inverter, this is a valid zero,</span>
  <span m='2306000'>produce a valid one. And now I am going to take the</span>
  <span m='2310000'>input out. As you can see it's stored.</span> </p><p><span
  m='2315000'>In fact, we have to wait for a very long time.</span> </p><p><span
  m='2318000'>We don't have enough time to wait for this to discharge,</span>
  <span m='2322000'>so instead what I am going to do now is I am going to add
  also</span> <span m='2327000'>the resistor. Now I am going to flip the</span>
  <span m='2330000'>resistor in parallel with the capacitor to imitate
  what</span> <span m='2334000'>happens when we have an input resistance.</span>
  </p><p><span m='2339000'>You saw that there was a discharge of the
  capacitor.</span> </p><p><span m='2344000'>This input level went down. Voltage
  here flipped over to a</span> <span m='2350000'>one. Let me do it again now
  with a</span> <span m='2354000'>resistor in place. Storing charge on
  the</span> <span m='2358000'>capacitor. That's the store command.</span>
  </p><p><span m='2362000'>Now, don't store. I have less,</span> <span
  m='2365000'>about a second. The element here is 20,000</span> <span
  m='2370000'>microfarads and 100 ohms which gives me a time constant of
  two</span> <span m='2376000'>seconds. Assuming a VOC of the order of,</span>
  <span m='2380000'>let's say, I don't know what it is for this case,</span>
  <span m='2385000'>2.5, the log would be about 0.5, so it cuts basically
  the</span> <span m='2391000'>time to about one. So, it lasts about one
  second,</span> <span m='2396000'>if my math is all correct. It's actually a
  little longer</span> <span m='2403000'>than a second, excuse me, but the point
  is</span> <span m='2408000'>that the charge is gone. Now, notice,</span> <span
  m='2413000'>however, that there is something I can do here,</span> <span
  m='2419000'>which is that suppose I take the switch or a switch and
  bring</span> <span m='2427000'>it back and provide a path from the output to
  the input here.</span> </p><p><span m='2436000'>And this switch is open when
  this is closed and closed when</span> <span m='2441000'>this is open. So, this
  basically is the</span> <span m='2445000'>compliment of store. What I am doing
  now is I put a</span> <span m='2450000'>charge here, it produces a valid one
  at this point,</span> <span m='2455000'>and then I am feeding this valid one
  back to the input.</span> </p><p><span m='2462000'>As you can see, this will
  now allow me,</span> <span m='2466000'>even though I have a high resistance,
  to store the value</span> <span m='2472000'>for a long time. In this
  case,</span> <span m='2475000'>what I am going to do is I am going to connect
  the output,</span> <span m='2481000'>as you can see here. And I have my
  resistor in.</span> </p><p><span m='2486000'>And I am storing zero here,
  storing 5 volts.</span> </p><p><span m='2492000'>Now I am going to flip the
  switch.</span> </p><p><span m='2496000'>Basically, I mean the don't store,
  don't look case.</span> </p><p><span m='2503000'>You notice this dims a little
  bit.</span> </p><p><span m='2508000'>Sorry. No, I want the resistor in.</span>
  </p><p><span m='2531000'>There. Yes.</span> </p><p><span m='2532000'>OK, so
  the output remain value. This dimmed a little bit but</span> <span
  m='2538000'>the output has remained OK. All right.</span> </p><p><span
  m='2542000'>So, we've provided a feedback. Now we've created a static</span>
  <span m='2549000'>memory. This will hold charge for as</span> <span
  m='2553000'>long as the circuit is powered up.</span> </p><p><span
  m='2557000'>Now, there is still one little problem that I have with
  this</span> <span m='2563000'>kind of configuration. And that is if I disturb
  this</span> <span m='2569000'>output the charge may, the state may
  change.</span> </p><p><span m='2573000'>So, for example, let's say that I have
  --</span> <span m='2579000'>I disturbed it by coming close to it, so let's
  charge it again.</span> </p><p><span m='2594000'>OK. I flipped the
  switch.</span> </p><p><span m='2595000'>I flipped the state from the
  output.</span> </p><p><span m='2598000'>That is an invalid condition. I
  shouldn't be able to do that.</span> </p><p><span m='2603000'>How do I avoid
  that? How can I avoid this problem</span> <span m='2606000'>that you just
  saw?</span> </p><p><span m='2614000'>Well, I need yet another buffer.</span>
  </p><p><span m='2616000'>The answer is in your notes. If I don't take the
  output here</span> <span m='2622000'>but rather take the output here, or if I
  don't want an inverted</span> <span m='2628000'>output, if I don't want an
  inverted output,</span> <span m='2632000'>I could put yet another element
  there.</span> </p><p><span m='2635000'>Then the situation would be
  fine.</span> </p><p><span m='2640000'>In this case, let me do it again.</span>
  </p><p><span m='2643000'>Charge.</span> </p><p><span m='2657000'>Why isn't
  this lit?</span> </p><p><span m='2664000'>A bad one?</span> </p><p><span
  m='2675000'>Now, of course we disturbed the input.</span> </p><p><span
  m='2678000'>Now, of course I can do anything I want here.</span> </p><p><span
  m='2682000'>Nothing happens, but you may say this is a</span> <span
  m='2686000'>trivial case because this is already zero.</span> </p><p><span
  m='2690000'>So, I am going to change the state.</span> </p><p><span
  m='2693000'>Here's is the changed state. See.</span> </p><p><span
  m='2696000'>I can show this. Nothing happens up there.</span> </p><p><span
  m='2701000'>So, this is an interesting situation in which I am</span> <span
  m='2705000'>buffering the output so that the output does not feed back to
  the</span> <span m='2710000'>input. And, by and large,</span> <span
  m='2712000'>in designing circuits this is something that we do.</span>
  </p><p><span m='2717000'>Now, in the remaining three minutes there is an
  example that</span> <span m='2722000'>we have. Can we put the laptop
  here?</span> </p><p><span m='2738000'>OK, so here is an example of how memory
  can be put together</span> <span m='2743000'>now to create something a little
  bit more complicated.</span> </p><p><span m='2748000'>And you can see the
  memory cells that we were discussing</span> <span m='2753000'>here. There's
  four of them,</span> <span m='2756000'>so this is a four bit memory. There is
  a decoder at the</span> <span m='2762000'>beginning here which decodes the
  address of each cell,</span> <span m='2768000'>so the input here will tell me
  which cell I need to address.</span> </p><p><span m='2774000'>Let's look at
  the truth table. This is the truth table for the</span> <span
  m='2780000'>decoder. As you can see,</span> <span m='2782000'>depending on the
  address that I have here, this is zero,</span> <span m='2788000'>one, two and
  three in a binary system, only A,</span> <span m='2793000'>B, C or D is up, is
  high.</span> </p><p><span m='2797000'>Which means that this end operation here
  only allows the</span> <span m='2802000'>input that is presented to all of the
  cells,</span> <span m='2806000'>what is going through the AND gate here to
  appear at the</span> <span m='2811000'>output. If, for example,</span> <span
  m='2813000'>we have a one, zero, the only end input that</span> <span
  m='2817000'>is going to be high is going to be this one.</span> </p><p><span
  m='2823000'>And that means the only cell that will look at the input
  when</span> <span m='2828000'>the store comes up is going to be this one
  here.</span> </p><p><span m='2832000'>At that point it will store whatever is
  on the input cell</span> <span m='2838000'>because that's an AND operation.
  That is a simple example of a</span> <span m='2843000'>memory. And following
  that simple</span> <span m='2866000'>arrangement you can build incredibly
  large memory systems.</span> </p><p><span m='2916000'>So, that's all I had for
  today. And I will see you on Tuesday.</span> </p>
uid: eb939a9610c4b0543638b7043b2786aa
type: courses
layout: video
---
