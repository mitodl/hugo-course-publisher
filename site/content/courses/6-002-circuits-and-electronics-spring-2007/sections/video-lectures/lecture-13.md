---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Digital circuit speed</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec13.jpg
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-13/thumb_lec13.jpg
    title: thumb_lec13.jpg
    type: null
    uid: 21bcc2bfe3920c9877f6310c2b92511b
  - id: Video-YouTube-Stream
    media_location: TXJIhDHtHSI
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Video-YouTube-Stream
    type: Video
    uid: f7d76bb8d02f878946f31010aad3ff92
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/TXJIhDHtHSI/default.jpg'
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c00bb71740c8c7eee5db9630b90d6c94
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Video-iTunes U-MP4
    type: Video
    uid: 257defd7e2103fdb333ef93ac1810dd4
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-21oct2003-220k.mp4
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Video-Internet Archive-MP4
    type: Video
    uid: 820e0bf52e72d088251338c0b71e0781
  - id: Thumbnail-OCW-JPG
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 9fde46a3b71af655882d47099bef22f9
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: TXJIhDHtHSI
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 665ea027e7341c01a4b508ed5c39b5b6
  - id: TXJIhDHtHSI.srt
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-13/TXJIhDHtHSI.srt
    title: 3play caption file
    type: null
    uid: 68eee711d6c6d6192773360adb8aa62c
  - id: TXJIhDHtHSI.pdf
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-13/TXJIhDHtHSI.pdf
    title: 3play pdf file
    type: null
    uid: 436f601051b15e6a2eff7b7d2774631e
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7dffff9e3e9177b0a13e1000148f74a0
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 4376aaa924335be8eb070468c5a3bf68
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ee6ff1f33746a884d303ed42223ed855
inline_embed_id: '30955810lecture13:digitalcircuitspeed77922670'
order_index: 273
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/93f7f25de3c5baf4c514b8add531fa3f">PDF</a>)<br />
  Demonstration: Gate delay (<a target="_blank" title="Open in a new window."
  href="./resolveuid/ea27f12a0b4fbeb27b179af572b97daa">PDF</a>)<br />
  Demonstration: Crosstalk (<a target="_blank" title="Open in a new window."
  href="./resolveuid/20f7378078ab6e3fe00ea748ab213e3e">PDF</a>)</p>
short_url: lecture-13
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-13
title: 'Lecture 13: Digital Circuit Speed'
transcript: >-
  <p><span m='6000'>OK. Good morning.</span> </p><p><span m='17000'>In the last
  lecture I did a little demonstration for you</span> <span m='23000'>where I
  showed you a pair of inverters.</span> </p><p><span m='29000'>And showed you
  that the output of the first inverter looked</span> <span m='34000'>weird,
  certainly not like anything we have seen thus far.</span> </p><p><span
  m='40000'>It looked like a slow rising transition like this.</span>
  </p><p><span m='45000'>And using that motivation we have begun our study of
  RC</span> <span m='50000'>circuits. And in particular for today the</span>
  <span m='54000'>lecture is titled "Digital Circuit Speed".</span> </p><p><span
  m='60000'>We are going to look at the fundamentals of digital circuit</span>
  <span m='64000'>speed. And it all boils down to an RC</span> <span
  m='67000'>delay. By the end of the lecture,</span> <span m='70000'>I am going
  to show you two numbers that you can look at a</span> <span m='75000'>circuit
  and obtain by observation, multiply them out</span> <span m='79000'>and you
  will get a good idea of the speed at which a circuit</span> <span
  m='84000'>will run. It is pretty amazing.</span> </p><p><span m='86000'>So as
  a quick review -- The relevant section for this</span> <span m='93000'>is
  Chapter 10.4. As a review,</span> <span m='97000'>we said to understand things
  like this we need to develop the</span> <span m='104000'>foundations for RC
  circuits. And the example I covered was</span> <span m='112000'>that of a very
  simple circuit that looked like this --</span> <span m='120000'>An RC circuit
  of this form. And I also showed you that for</span> <span m='129000'>an input
  of the form, input that steps from zero to</span> <span m='136000'>VI at time
  T equal to zero. And assuming that the capacitor</span> <span m='146000'>state
  at time T equals zero was zero.</span> </p><p><span m='153000'>What this means
  is that the capacitor starts from rest,</span> <span m='158000'>so at time
  T=0, oops, this is VI,</span> <span m='161000'>I'm sorry. So we assume that
  the capacitor</span> <span m='165000'>starts from rest. At time T=0 I apply a
  VI step,</span> <span m='170000'>capital VI. And then I want to look at
  how</span> <span m='174000'>the voltage across the capacitor behaves.</span>
  </p><p><span m='180000'>And we did a bunch of analysis. And at the end of the
  day,</span> <span m='185000'>in the final demo in the lecture last time I
  showed you</span> <span m='189000'>that the capacitor would behave like
  this.</span> </p><p><span m='193000'>It would start off at, oops.</span>
  </p><p><span m='195000'>I am sorry. This should be,</span> <span
  m='198000'>let's assume that started off at VO.</span> </p><p><span
  m='201000'>We get a different equation for zero.</span> </p><p><span
  m='204000'>So let's say the capacitor started off at VO,</span> <span
  m='208000'>in which case VC at time T=0 is VO as expected.</span> </p><p><span
  m='214000'>And we showed that the output would look something like
  this.</span> </p><p><span m='223000'>After a long period of time this would
  come up to VI and</span> <span m='232000'>this rise had a time constant of
  tau=RC.</span> </p><p><span m='240000'>So we wrote the equation for this
  waveform.</span> </p><p><span m='243000'>And this is the case when VI is
  greater than VO.</span> </p><p><span m='247000'>I would like you to stare at
  the circuit and this result here</span> <span m='252000'>to get more intuition
  on what is going on.</span> </p><p><span m='256000'>At time T=0, VC starts off
  at VO as expected</span> <span m='260000'>because I am telling you that is the
  case, that is initial</span> <span m='264000'>condition. It starts off at
  VO.</span> </p><p><span m='267000'>Then this one steps to VI. There is no
  infinite transition</span> <span m='273000'>anywhere here, and so the
  capacitor holds its</span> <span m='276000'>voltage at VO, at time T=0.</span>
  </p><p><span m='278000'>And then the VI here, which is greater than VO,</span>
  <span m='281000'>begins to charge the capacitor up, charge it through
  this</span> <span m='285000'>resistor. And so therefore the capacitor</span>
  <span m='288000'>charges up. After a long period of time,</span> <span
  m='291000'>from the basic foundations of capacitors, we know that the</span>
  <span m='295000'>capacitor appears like a long-term open circuit to DC.</span>
  </p><p><span m='300000'>This is a DC voltage VI. So it appears like an
  open</span> <span m='303000'>circuit. So after a long period of time</span>
  <span m='306000'>VI appears at the end. And from here to here I have an</span>
  <span m='310000'>exponential rise that is typified by an equation of
  the</span> <span m='314000'>form -t/RC. This kind of waveform rising</span>
  <span m='317000'>from a smaller value to a higher value is typified by
  this</span> <span m='321000'>expression. We saw the expression when we</span>
  <span m='324000'>developed the equations last time.</span> </p><p><span
  m='328000'>On the other hand, if the input was such that VI</span> <span
  m='332000'>was smaller than VO, so let's say VI was smaller</span> <span
  m='337000'>than VO then what will happen is that the capacitor voltage
  would</span> <span m='343000'>start off at VO, because I am telling you
  that</span> <span m='348000'>is the initial condition, and would then decay in
  this</span> <span m='353000'>manner to the final value of VI which is the
  input.</span> </p><p><span m='360000'>Instead of going up this way it decays
  down to the final value</span> <span m='365000'>applied to the circuit. Again,
  the time constant is RC.</span> </p><p><span m='371000'>But this is typified
  by a form, this is exponential rise and</span> <span m='377000'>this guy
  e^-t/RC is an exponential decay.</span> </p><p><span m='380000'>The key thing
  to remember is that when you have RC circuits</span> <span m='386000'>of this
  form, the waveforms that you get are</span> <span m='390000'>either each of
  the e^-t/RC or 1-e^-t/RC.</span> </p><p><span m='396000'>So you can now begin
  to see how waveforms such as that come</span> <span m='401000'>about. We will
  do an example and sit</span> <span m='404000'>down and compute the inverter
  delay.</span> </p><p><span m='407000'>And notice that this waveform here is
  very typical or</span> <span m='411000'>corresponds to this waveform that we
  see here.</span> </p><p><span m='415000'>Here I am starting at VO. And
  assuming this axis starts</span> <span m='422000'>off at zero, this one starts
  very close to zero and then</span> <span m='429000'>rises up to some final
  value. So far I have reviewed some</span> <span m='436000'>material for you
  that I covered the last time.</span> </p><p><span m='442000'>As a second step,
  I would like to give you a much</span> <span m='448000'>more intuitive
  approach -- -- that doesn't involve solving</span> <span m='455000'>any
  differential equations. And the reason I do this is</span> <span
  m='459000'>that most experienced circuit designers do not sit down and</span>
  <span m='463000'>write differential equations each time they see an RC</span>
  <span m='467000'>circuit. When you are starting out and</span> <span
  m='470000'>you see an RC circuit, you say node method and you</span> <span
  m='473000'>write the differential equation, but experienced people don't
  do</span> <span m='478000'>that. They look at it and they can</span> <span
  m='481000'>sketch the waveform out by inspection.</span> </p><p><span
  m='483000'>And I will show you how to do that.</span> </p><p><span
  m='485000'>It is indeed incredibly simple once I give you some
  intuition.</span> </p><p><span m='489000'>Throughout the rest of this course,
  I will be showing you</span> <span m='492000'>many such examples where
  initially I develop the</span> <span m='495000'>foundations of stuff and then
  show you an intuitive approach</span> <span m='498000'>that very quickly lets
  you either get the final answer or</span> <span m='502000'>at least sanity
  check the answer that you have gotten.</span> </p><p><span m='505000'>And this
  is how experienced circuit designers deal with</span> <span m='508000'>stuff.
  How many people here have seen</span> <span m='512000'>this movie Bend it Like
  Beckham? So you know this Beckham</span> <span m='515000'>character doesn't
  think about how he is going to curve the</span> <span m='519000'>ball. He just
  does it and it happens.</span> </p><p><span m='522000'>He doesn't sit down
  writing differential equations to find</span> <span m='525000'>out the
  projectile trajectory and all of that stuff.</span> </p><p><span
  m='529000'>You just kind of do it. These series of intuitions I am</span>
  <span m='533000'>going to give you is going to be in line with the Bend it
  Like</span> <span m='537000'>Beckham kind of intuition. And this one in
  particular I</span> <span m='542000'>would like to do in honor of one of your
  recitation instructions</span> <span m='548000'>Professor David Perreault. And
  so this piece of intuition</span> <span m='554000'>is going to be termed
  "Practice it Like Perreault".</span> </p><p><span m='559000'>Watch what I do
  with the other names.</span> </p><p><span m='562000'>Professor David Perreault
  is really a world expert in</span> <span m='568000'>designing really
  incredible power supplies for very,</span> <span m='573000'>very small chips
  and so on. He doesn't start writing</span> <span m='579000'>differential
  equations to do this stuff.</span> </p><p><span m='583000'>He looks at it and
  sketches it out.</span> </p><p><span m='587000'>Let me show you how he would
  do this.</span> </p><p><span m='591000'>Suppose I have my circuit like before,
  VI, R and C,</span> <span m='597000'>and I am telling you that
  VC(0)=VO.</span> </p><p><span m='602000'>And my input VI is a step that looks
  like this.</span> </p><p><span m='609000'>VI is a step. How would Professor
  Perreault</span> <span m='616000'>do this? Let's do it completely by</span>
  <span m='622000'>intuition. No math here.</span> </p><p><span m='626000'>All
  right. We know that I have told you</span> <span m='631000'>that this guy
  starts off at VO. I am telling you that.</span> </p><p><span m='635000'>You
  know it is going to start at VO.</span> </p><p><span m='638000'>And there is
  no impulse or huge infinite transition,</span> <span m='642000'>and so the
  capacitor starts off at VO.</span> </p><p><span m='646000'>We also know from
  basic capacitor properties that after</span> <span m='650000'>a long period of
  time, in the steady state,</span> <span m='654000'>this is but a DC voltage.
  If you apply a DC and here is</span> <span m='658000'>my capacitor. After a
  long period of time</span> <span m='662000'>this guy is going to look like an
  open circuit.</span> </p><p><span m='665000'>It is going to charge up to some
  value and then is going to</span> <span m='668000'>look like an open circuit.
  Because if it didn't,</span> <span m='671000'>you would keep charging it and
  its voltage would keep</span> <span m='674000'>increasing. That doesn't
  happen,</span> <span m='676000'>it looks like an open circuit. So it looks
  like an open</span> <span m='679000'>circuit in the long run. The voltage
  across it must be</span> <span m='683000'>capital VI. If I don't have current
  flowing</span> <span m='685000'>in the circuit then the only way that can
  happen is --</span> <span m='690000'>This open circuit. Capital VI appears
  across the</span> <span m='694000'>capacitor. Well, after a long period
  of</span> <span m='697000'>time I know that the output must look like
  this.</span> </p><p><span m='701000'>In this case, I have assumed VI is
  greater</span> <span m='705000'>than VO. So you have two points of your</span>
  <span m='708000'>curve, VO and VI after a long period of time.</span>
  </p><p><span m='712000'>And, as I told you earlier, with capacitors you get
  two</span> <span m='717000'>kinds of curves. Two things.</span> </p><p><span
  m='721000'>What you do is go zoop. There you go.</span> </p><p><span
  m='724000'>You're done. And this has an exponential</span> <span
  m='728000'>rise. This is with the form</span> <span m='731000'>1-e^-t/RC. So
  we can write an equation for</span> <span m='735000'>that as follows. VC we
  know has something to do</span> <span m='740000'>with minus t/RC. This is of
  that form,</span> <span m='743000'>so there has to be that term in there
  somewhere.</span> </p><p><span m='750000'>And I start off with VO. At time T=0
  this is one and</span> <span m='754000'>this is one, so this term becomes a
  zero.</span> </p><p><span m='758000'>At time T=0 that becomes a zero so I get
  VO here.</span> </p><p><span m='762000'>I am going to make sure this stuff
  stays zero at time T=0,</span> <span m='768000'>so I start off with VO. Now,
  as time wears on what</span> <span m='772000'>happens here? This voltage
  here,</span> <span m='775000'>VI-VO, if you look at this difference.</span>
  </p><p><span m='780000'>That is exponentially decaying over time.</span>
  </p><p><span m='784000'>And so therefore all I have to do here is write
  VI-VO.</span> </p><p><span m='789000'>There is the answer. I know the form of
  the curve.</span> </p><p><span m='794000'>I am just fitting an expression that
  meets this form.</span> </p><p><span m='799000'>This starts off at VO. When
  time T=0 this second</span> <span m='804000'>expression is zero and so it is
  VO.</span> </p><p><span m='809000'>And this difference here decays down to
  zero.</span> </p><p><span m='812000'>And this difference here, VI-VO is
  multiplied by this</span> <span m='817000'>term here and that is what I
  get.</span> </p><p><span m='820000'>And you can confirm this. At time T=0 this
  is zero.</span> </p><p><span m='825000'>At time T infinity this goes to zero,
  this goes to zero leaving</span> <span m='830000'>a one, and VO and minus VO
  cancel and I get a VI.</span> </p><p><span m='836000'>Virtually any such
  simple voltage source,</span> <span m='839000'>current source, resistor,
  capacitor,</span> <span m='842000'>circuit for most inputs like steps and so
  on can be analyzed</span> <span m='847000'>in this manner. Initial
  value,</span> <span m='850000'>final value, it's simple.</span> </p><p><span
  m='852000'>And just to show you that this is simple, I am going to
  label</span> <span m='857000'>this expression this way. It is of the form
  1-e^-t/RC.</span> </p><p><span m='861000'>Just remember that. Now, by the same
  token,</span> <span m='865000'>what if VI had been smaller than VO?</span>
  </p><p><span m='870000'>Then that is simple, too.</span> </p><p><span
  m='872000'>I would have had my VI being here.</span> </p><p><span
  m='875000'>VI would have been here. And that is of the form.</span>
  </p><p><span m='880000'>In this particular situation, here is my VI,</span>
  <span m='884000'>my starting value and I do this.</span> </p><p><span
  m='887000'>And just to label that, let me label that this way.</span>
  </p><p><span m='891000'>I just told you that for RC circuits you go this way
  or you</span> <span m='897000'>go this way. So it is down here.</span>
  </p><p><span m='902000'>I get some kind of an exponential decay.</span>
  </p><p><span m='906000'>And, like before, think of this one.</span>
  </p><p><span m='910000'>This one has VI as a base value here.</span>
  </p><p><span m='914000'>And the difference between the two is VO minus
  VI.</span> </p><p><span m='920000'>And that difference decays. So I have a VI
  out here,</span> <span m='925000'>and this difference decays so I get VO-VI
  and that decays in</span> <span m='932000'>this form. So I get an exponential
  decay</span> <span m='937000'>of this difference here. Just stare at it for a
  while</span> <span m='941000'>longer. You should be able to just go</span>
  <span m='944000'>and knock it off like this, just like Professor
  Perreault</span> <span m='949000'>would. No differential equations.</span>
  </p><p><span m='951000'>Just write it down by looking at the curve.</span>
  </p><p><span m='955000'>Let's keep these two in mind, OK, these forms?</span>
  </p><p><span m='960000'>One is the 1-e^-t/RC form and the e^-t/RC.</span>
  </p><p><span m='965000'>Both have a time constant RC. Let me just make this a
  dashed</span> <span m='972000'>line just to be on the safe side here.</span>
  </p><p><span m='990000'>That is our first piece of intuition.</span>
  </p><p><span m='992000'>And, as I pointed out before, in problems you face in
  life or</span> <span m='997000'>in ones that we give you, feel free to use the
  intuitive</span> <span m='1002000'>method. Or what you can do is apply
  the</span> <span m='1005000'>mathematical method and then check your answer by
  using your</span> <span m='1009000'>intuition. What I would like to do next
  is</span> <span m='1012000'>apply what you have learned so far to figure out
  what we set</span> <span m='1017000'>out to figure out, which is the delay of
  my</span> <span m='1021000'>inverter. I had promised you that by the</span>
  <span m='1025000'>end of this lecture I was going to close the loop on that
  little</span> <span m='1029000'>demo. I was going to close the loop</span>
  <span m='1032000'>for you on this little circuit that we had looked at,</span>
  <span m='1035000'>one inverter driving another inverter.</span> </p><p><span
  m='1038000'>This was A, this was inverter X, and this was my node B.</span>
  </p><p><span m='1042000'>The green curve you see out there, the middle one has
  a</span> <span m='1046000'>transition shown up there. And what I am going to
  do next</span> <span m='1051000'>is use the results we have gotten so far to
  compute a</span> <span m='1055000'>number. We are going to compute a
  delay</span> <span m='1059000'>number both for a rising transition.</span>
  </p><p><span m='1062000'>We will call that delay DR for rising
  transition.</span> </p><p><span m='1066000'>And we will compute a delay for
  the falling transition DF.</span> </p><p><span m='1071000'>Remember, that this
  is the input that falls down sharply.</span> </p><p><span m='1075000'>The
  intermediate node B rises much more slowly.</span> </p><p><span
  m='1081000'>And because this rises much more slowly this guy here falls</span>
  <span m='1085000'>a little after this transition here, and so there is a
  delay.</span> </p><p><span m='1090000'>And I am going to apply what we have
  learned so far and do an</span> <span m='1094000'>example for you and figure
  out what that delay is.</span> </p><p><span m='1098000'>This is an absolute
  foundational calculation done in</span> <span m='1102000'>building digital
  circuits all the time.</span> </p><p><span m='1106000'>It is remarkable that
  something so simple is used in designing</span> <span m='1109000'>even the
  most complex of circuits to obtain very quick</span> <span m='1113000'>ideas
  of what my delay will look like when I have some subcircuit</span> <span
  m='1117000'>driving some other piece of subcircuit.</span> </p><p><span
  m='1119000'>Let me just draw a few equivalent circuits for you.</span>
  </p><p><span m='1122000'>The internal circuit looks like this.</span>
  </p><p><span m='1131000'>This is my inverter X, A, my node B.</span>
  </p><p><span m='1137000'>And notice that I have this capacitor CGS.</span>
  </p><p><span m='1145000'>Since I am interested in this node, let me show you
  that,</span> <span m='1149000'>this capacitor explicitly, it is because of
  this capacitor</span> <span m='1153000'>here that arises because of this
  MOSFET here between the gate and</span> <span m='1158000'>the source. And that
  capacitor gives rise</span> <span m='1162000'>to this RC thing that we are
  seeing.</span> </p><p><span m='1164000'>This is RL, this is RL, VS, VS.</span>
  </p><p><span m='1168000'>And let's say, just as up there,</span> <span
  m='1172000'>at time T=0 I get a transition like so, a falling
  transition</span> <span m='1180000'>from say 5 volts to 0 volts at the node
  A.</span> </p><p><span m='1186000'>This is VA here. That is shown up
  there.</span> </p><p><span m='1191000'>And VB --</span> <span m='1203000'>We
  had expected that VB would look like this.</span> </p><p><span m='1207000'>We
  expected VB to be instantaneous and looking like</span> <span
  m='1212000'>that, but instead because of the capacitor VB looks like
  this.</span> </p><p><span m='1218000'>And remember, again, this is of the
  form</span> <span m='1222000'>1-e^-t/RC. And we will write down the</span>
  <span m='1225000'>answers by inspection. From this let me draw the</span>
  <span m='1231000'>connection to circuit delay by showing you another little
  graph</span> <span m='1239000'>here t, VB, zero. And what I am going to
  show</span> <span m='1244000'>you, this is 5 volts. And so the output goes
  like</span> <span m='1250000'>this from close to zero to 5 volts.</span>
  </p><p><span m='1254000'>It is close to zero. Because, at least with
  the</span> <span m='1259000'>inverters we have been seeing in lab and so
  on,</span> <span m='1263000'>the RON for the inverter is very, very small
  compared RL.</span> </p><p><span m='1266000'>So it is virtually zero down
  here.</span> </p><p><span m='1269000'>And so what is the delay? I mentioned
  there are two</span> <span m='1272000'>delays of interest. One is the rising
  delay.</span> </p><p><span m='1275000'>That is the logical value at the end,
  if I wait a long enough</span> <span m='1279000'>period of time, is a logical
  one.</span> </p><p><span m='1283000'>Delay is simply defined as starting from
  here how long does</span> <span m='1288000'>this output take to get to a valid
  one?</span> </p><p><span m='1292000'>At what voltage here can I say that this
  transition corresponds</span> <span m='1298000'>to a logical one? At what
  voltage here can I say</span> <span m='1302000'>that that represents a valid
  one?</span> </p><p><span m='1305000'>Any ideas? Yes.</span> </p><p><span
  m='1307000'>It depends on the discipline, bingo.</span> </p><p><span
  m='1310000'>So it depends on the discipline.</span> </p><p><span
  m='1313000'>Now let's get more specific. Since it depends on the</span> <span
  m='1320000'>discipline, at what value based on something in the
  discipline</span> <span m='1326000'>can I say this thing is a logical
  one?</span> </p><p><span m='1330000'>This is an output remember. VOH,
  bingo.</span> </p><p><span m='1335000'>There is some VOH somewhere. And it
  takes some amount of</span> <span m='1340000'>time to get to a valid logical
  one output, ergo there is your</span> <span m='1347000'>delay. This is
  tR.</span> </p><p><span m='1349000'>And I call this the rising delay of the
  inverter X.</span> </p><p><span m='1356000'>It is interesting that the rising
  delay of inverter X,</span> <span m='1360000'>based on our model, depends on
  the parameters of</span> <span m='1365000'>this inverter and the parameters of
  whatever it is driving.</span> </p><p><span m='1370000'>So remember that the
  delay is not necessarily just the</span> <span m='1375000'>property of the
  inverter itself, but it depends on the context.</span> </p><p><span
  m='1382000'>If I stick my inverter before another inverter like this,</span>
  <span m='1385000'>it is the capacitance on that inverter by our model that
  tells</span> <span m='1389000'>me what the delay is going to look like, of
  course in addition</span> <span m='1393000'>to RL. And we will do the math in
  a</span> <span m='1395000'>few seconds. By the same token,</span> <span
  m='1397000'>if I had this wire connecting not to one inverter but going
  to</span> <span m='1401000'>ten other inverters, I expect to have a
  capacitance</span> <span m='1404000'>equal to ten times CGS. And so therefore
  this thing</span> <span m='1407000'>should rise even more slowly,
  correct?</span> </p><p><span m='1411000'>The more capacitance on here the
  slower it rises up.</span> </p><p><span m='1415000'>Simple. If I put more and
  more load on</span> <span m='1417000'>this line by putting more and more
  MOSFETs on that line,</span> <span m='1422000'>more and more inverters this
  will rise slower.</span> </p><p><span m='1425000'>In our example I just have
  one, so let's go ahead and compute</span> <span m='1430000'>the delay. This is
  called the rising delay</span> <span m='1433000'>of X. That says that for this
  node</span> <span m='1436000'>here to go from its output value to a valid
  one,</span> <span m='1439000'>which is VOH how long does it take?</span>
  </p><p><span m='1444000'>Notice that if this capacitor was zero then you would
  have</span> <span m='1449000'>seen an instantaneous transition.</span>
  </p><p><span m='1451000'>If you have an instantaneous transition then notice
  that the</span> <span m='1457000'>rising delay was zero. That was the model we
  had</span> <span m='1461000'>looked at up until learning about
  capacitors.</span> </p><p><span m='1465000'>So let's go ahead and compute the
  number.</span> </p><p><span m='1470000'>I can draw an equivalent circuit for
  computing a rising</span> <span m='1474000'>delay. The equivalent circuit for
  the</span> <span m='1477000'>rising delay looks like the following.</span>
  </p><p><span m='1480000'>The VS voltage source, with a resistor RL and
  a</span> <span m='1484000'>capacitor CGS, because when I turn this guy</span>
  <span m='1488000'>off, this guy has gone off, and so as far as the rise
  time</span> <span m='1493000'>of this node is concerned I can look at this
  circuit,</span> <span m='1497000'>ground through CGS through RL through VS
  back to ground.</span> </p><p><span m='1504000'>And just for simplicity, let
  me draw this in a form that</span> <span m='1507000'>we understand.</span>
  </p><p><span m='1513000'>CGS. Let me use this as my ground</span> <span
  m='1516000'>node. And this is the voltage VB.</span> </p><p><span
  m='1520000'>And this is RL. And V is simply VS once that</span> <span
  m='1525000'>transition happens. My other equations here,</span> <span
  m='1531000'>VI=VS. And what is VB(0)?</span> </p><p><span m='1533000'>VB(0) is
  at what value does this node start out?</span> </p><p><span m='1538000'>Notice
  that for simplicity here if this RON is much,</span> <span m='1544000'>much
  smaller than RL, then this node would be very</span> <span m='1549000'>close
  to ground. So I will just go ahead and say</span> <span m='1554000'>that VB at
  T=0 is approximately zero.</span> </p><p><span m='1559000'>And then what I
  want to find out is what does the value look</span> <span m='1564000'>like for
  time starting from zero and then going forward?</span> </p><p><span
  m='1569000'>Well, we have become experts at this now.</span> </p><p><span
  m='1578000'>Let's do the intuition here. Start off with zero.</span>
  </p><p><span m='1581000'>That's good. Because my initial value is</span> <span
  m='1584000'>zero, I start off here. What is the final value?</span>
  </p><p><span m='1589000'>After a long time, since this is a DC voltage,</span>
  <span m='1594000'>what would be the value at VB after a long time?</span>
  </p><p><span m='1600000'>Pardon? VS.</span> </p><p><span m='1602000'>If I wait
  long enough then it is going to be at VS.</span> </p><p><span m='1608000'>This
  is greater than the initial value,</span> <span m='1613000'>so we're done.
  That is my 1-e^-t/RC form.</span> </p><p><span m='1620000'>It took me three
  seconds there. It's pretty cool.</span> </p><p><span m='1625000'>We could add
  the expression for this.</span> </p><p><span m='1630000'>And the expression
  was I take my starting value,</span> <span m='1636000'>which is zero, and I
  add to that this</span> <span m='1640000'>difference VS and I multiply that by
  this form.</span> </p><p><span m='1646000'>There we go. And remember I get
  this from</span> <span m='1651000'>that rising form up here. V0=0, this is
  zero,</span> <span m='1655000'>so it is simply VI times that, and
  VI=VS.</span> </p><p><span m='1659000'>I really would like you to get this
  intuition.</span> </p><p><span m='1663000'>If I had two choices, one is that
  you understand the</span> <span m='1668000'>intuition and are able to sketch
  that versus in your sleep be</span> <span m='1674000'>able to solve the
  differential equation and get to the answer.</span> </p><p><span m='1681000'>I
  would much rather you get the intuition, if it is one or the</span> <span
  m='1687000'>other. It is very simple.</span> </p><p><span m='1690000'>Start
  off at zero, I go chuck, and boom,</span> <span m='1694000'>I get to VS and
  this is my 1-e^-t/RC form.</span> </p><p><span m='1698000'>I need to compute
  tR. And tR is the time that this</span> <span m='1703000'>takes to get to
  VOH.</span> </p><p><span m='1716000'>For what value of time, for what T, does
  VB reach VOH?</span> </p><p><span m='1733000'>I want to find tR. What's
  tR?</span> </p><p><span m='1741000'>From that equation, that simply tells me
  the</span> <span m='1745000'>trajectory of VB as a function of time.</span>
  </p><p><span m='1750000'>And so I need to find out what is T for which VB is
  VOH?</span> </p><p><span m='1756000'>I write VOH=VS (1-e^-t/RC). So after a
  rise time my output</span> <span m='1762000'>is going to be VOH. And so let me
  go ahead and find</span> <span m='1768000'>tR. Let's see.</span> </p><p><span
  m='1771000'>I bring this to this left-hand side and divide VOH by VS,</span>
  <span m='1777000'>and then I move things around and what I end up getting
  is</span> <span m='1783000'>-tR/RC and on the other side I get
  ln(1-VOH/VS).</span> </p><p><span m='1789000'>Divide VOH by VS, that is
  this,</span> <span m='1792000'>move this to the other side, and move e^-t/RC
  to this side.</span> </p><p><span m='1800000'>And take logarithms on both
  sides.</span> </p><p><span m='1805000'>This is what I get. tR is therefore
  -RLCGS</span> <span m='1811000'>ln(1-VOH/VS). That is my rise time.</span>
  </p><p><span m='1816000'>You can just do this by inspection.</span>
  </p><p><span m='1821000'>It is just so awfully simple. Just to give to some
  intuition</span> <span m='1830000'>with numbers and so on. Let's say that
  RL=1K,</span> <span m='1838000'>VS=5 volts, VOH=4 volts, CGS=0.1 pF.</span>
  </p><p><span m='1841000'>This happens so often that we often time call it
  "puff".</span> </p><p><span m='1847000'>0.1 puff. It is pF, it's called
  puff.</span> </p><p><span m='1851000'>If it is nF, I don't know why they
  didn't</span> <span m='1855000'>call it "nuff". They just call it
  nanofarads.</span> </p><p><span m='1861000'>TR for these numbers gets to be
  one times ten to the three times</span> <span m='1868000'>point one times ten
  to the minus twelve for pico-farads</span> <span m='1874000'>ln(1-4/5). And if
  you do the math you get</span> <span m='1879000'>this down to 0.16
  nanoseconds. This means that if I had an</span> <span m='1886000'>inverter
  like that droving another inverter then my output</span> <span
  m='1893000'>transition would be delayed by 0.16 nanoseconds.</span>
  </p><p><span m='1900000'>Trust me, when Intel builds microprocessors or when
  Broadcom</span> <span m='1905000'>builds its cable modem chips, they have to
  do this one way or</span> <span m='1910000'>the other using a computer tool or
  by hand for virtually every</span> <span m='1916000'>little subcircuit in
  their chip. That is how you get the delays</span> <span m='1923000'>or some
  approximation thereof. What I want you also to do is,</span> <span
  m='1929000'>for no particular reason, I will just compute for you the</span>
  <span m='1935000'>following quantity RLCGS. The time constant of that</span>
  <span m='1940000'>circuit for no reason at all. I am just going to compute
  it</span> <span m='1946000'>and stick it here. And RLCGS 1 K times 1 pF
  is</span> <span m='1951000'>simply 0.1 nanoseconds. I am just writing it
  and</span> <span m='1957000'>sticking it there for no particular
  reason.</span> </p><p><span m='1962000'>The next step let's do the falling
  delay,</span> <span m='1966000'>DF. That is the rising delay.</span>
  </p><p><span m='1969000'>And, although I didn't show this to you in the
  demo,</span> <span m='1974000'>there is a corresponding delay of the fall
  time.</span> </p><p><span m='1981000'>It doesn't fall instantly, but rather it
  falls rather</span> <span m='1985000'>slowly. Let's draw the equivalent</span>
  <span m='1988000'>circuit for when the node X falls.</span> </p><p><span
  m='1991000'>Notice that in my inverters here, this node starts off
  being</span> <span m='1996000'>at VS. This is high.</span> </p><p><span
  m='1997000'>And this is going to fall because when I turn this</span> <span
  m='2001000'>transistor on it is going to pull this node to ground or it</span>
  <span m='2006000'>is going to fall down. And what is the equivalent</span>
  <span m='2012000'>circuit? The equivalent circuit is that</span> <span
  m='2015000'>ground through capacitor to this node.</span> </p><p><span
  m='2018000'>At this node I have RON connecting to ground and I have</span>
  <span m='2022000'>RL connecting to ground through VS.</span> </p><p><span
  m='2025000'>Let me draw that little circuit for you.</span> </p><p><span
  m='2028000'>Remember life begins and ends on storage elements,</span> <span
  m='2032000'>so I will draw them first. My storage element CGS.</span>
  </p><p><span m='2036000'>That is VB. And, as I said,</span> <span
  m='2041000'>this is node X, it goes from RON to ground,</span> <span
  m='2047000'>and it also goes through RL through VS to ground.</span>
  </p><p><span m='2055000'>And in this particular situation VB of zero for
  the</span> <span m='2063000'>following delay, VB starts off at VS so VB
  of</span> <span m='2069000'>zero is VS. And the final output I am not</span>
  <span m='2075000'>sure yet. What is the final value of the</span> <span
  m='2079000'>voltage at this node? I don't know that yet.</span> </p><p><span
  m='2084000'>I need to compute that. So what I will do is whenever</span> <span
  m='2089000'>you see something like this, a capacitor connecting to</span>
  <span m='2094000'>linear stuff, or a nonlinear element</span> <span
  m='2098000'>connecting to linear stuff. For no apparent reason you</span>
  <span m='2103000'>should at least think about what?</span> </p><p><span
  m='2105000'>Think Thevenin, exactly.</span> </p><p><span m='2107000'>And then
  see if you can use the Thevenin method to simplify your</span> <span
  m='2111000'>life. Capacitor, a bunch of stuff</span> <span m='2113000'>here, I
  need to find out the initial value.</span> </p><p><span m='2116000'>Oh, I know
  that. That is VS.</span> </p><p><span m='2118000'>Done. I need to find the
  final value</span> <span m='2120000'>using my intuitive method. For the final
  value,</span> <span m='2123000'>I could do it just by looking at this, but I
  wanted to throw</span> <span m='2127000'>in Thevenin. Hey, let me try to the
  Thevenin</span> <span m='2132000'>equivalent and see if that makes my life any
  easier.</span> </p><p><span m='2137000'>VTH. The Thevenin method says
  that</span> <span m='2140000'>you can replace this circuit here with a
  Thevenin equivalent</span> <span m='2145000'>of the sort for the purpose of
  determining what happens at this</span> <span m='2150000'>node given that that
  is linear.</span> </p><p><span m='2162000'>So I need to find out that for the
  purpose of determining what</span> <span m='2168000'>happens at the node X. I
  have to replace this with its</span> <span m='2174000'>Thevenin equivalent.
  And I now need to find out RTH</span> <span m='2179000'>and VTH. So I get RTH
  by looking in</span> <span m='2183000'>here, shorting this guy and looking at
  the resistance.</span> </p><p><span m='2190000'>So I look in like this, then I
  short this guy here and</span> <span m='2193000'>I get RL in parallel with RON
  because this one shorts to</span> <span m='2197000'>ground. So RTH is simply
  RL in parallel</span> <span m='2200000'>with RON. This is a convenient
  notation</span> <span m='2203000'>for RL being in parallel with RON.</span>
  </p><p><span m='2205000'>And you all know the value of that.</span>
  </p><p><span m='2208000'>It is another one of our very simple patterns like
  voltage</span> <span m='2212000'>divider and so on. Resistances in parallel
  can be</span> <span m='2215000'>computed as RL RON divided by RL plus
  RON.</span> </p><p><span m='2220000'>What is VTH? VTH is the open circuit
  voltage</span> <span m='2225000'>here. If I take out this capacitor,</span>
  <span m='2230000'>I want to find out what the voltage here is.</span>
  </p><p><span m='2235000'>Ah-ha, voltage divider. VS, the voltage divider
  here,</span> <span m='2242000'>RL and RON. I could write this down as
  VS</span> <span m='2248000'>times RON/(RL+RON). Remember you will see again
  and</span> <span m='2254000'>again and again and again in 6.002 or any circuit
  stuff that</span> <span m='2257000'>you do, you will see them all over
  Thevenin.</span> </p><p><span m='2260000'>Voltage dividers, current
  dividers,</span> <span m='2262000'>resistances in series, resistances in
  parallel,</span> <span m='2265000'>RC thing-a-ma-jigs like this. So if you
  just remember those</span> <span m='2269000'>10 to 15 intuitive patterns then
  you are pretty much set for</span> <span m='2273000'>life. It just comes on
  again and</span> <span m='2275000'>again and again. Parallel resistors.</span>
  </p><p><span m='2277000'>Voltage dividers. You should be able to write</span>
  <span m='2283000'>down a voltage divider in your sleep.</span> </p><p><span
  m='2287000'>So this is what I have. Let me now write down</span> <span
  m='2292000'>intuitively what I expect the node X to do just by
  inspection.</span> </p><p><span m='2299000'>Let's see. What is the initial
  value of</span> <span m='2304000'>the voltage across the capacitor, intuitive
  method?</span> </p><p><span m='2311000'>This is how Professor Perreault would
  do it, remember?</span> </p><p><span m='2314000'>He would start off by saying
  ah-ha, initial value is VS</span> <span m='2318000'>because I am told it is
  VS. I start off with VS.</span> </p><p><span m='2322000'>And so I start off
  here. What is the value after a long,</span> <span m='2326000'>long time based
  on this circuit here?</span> </p><p><span m='2328000'>V Thevenin. After a long
  time this is a DC</span> <span m='2331000'>voltage because that is a DC
  voltage.</span> </p><p><span m='2334000'>The capacitor looks like an open
  circuit after a long time.</span> </p><p><span m='2340000'>And VTH appears
  there so it is simply V Thevenin.</span> </p><p><span m='2351000'>And then
  when you see those two, boy, I love doing this,</span> <span m='2355000'>you
  go like this. That is the coolest part.</span> </p><p><span m='2358000'>And
  then I am done. It is so simple.</span> </p><p><span m='2361000'>Three seconds
  or less, I am able to tell you what the</span> <span m='2365000'>delay of an
  inverter is purely by intuition,</span> <span m='2368000'>completely
  intuitively. I mean I haven't done any</span> <span m='2373000'>solving. It is
  just by observation.</span> </p><p><span m='2376000'>Took this circuit, made
  my life easy,</span> <span m='2379000'>Thevenin, looked at RTH, VTH and then
  sketched it by</span> <span m='2384000'>inspection. Again, if you find that
  things</span> <span m='2387000'>are really, really, really simple don't
  be</span> <span m='2391000'>surprised. Once you get some conceptual</span>
  <span m='2394000'>understanding things are indeed very simple.</span>
  </p><p><span m='2400000'>You can eliminate a lot of math just by staring at
  things</span> <span m='2405000'>attempting to build up the intuition.</span>
  </p><p><span m='2408000'>As a next step what I can do is write down the
  expression for</span> <span m='2414000'>VB. And I write down the
  expression</span> <span m='2417000'>from a falling transition. How do I do
  it?</span> </p><p><span m='2421000'>What was it? What is the method?</span>
  </p><p><span m='2423000'>I take the lowest value of interest here.</span>
  </p><p><span m='2427000'>That is VTH. And then I add to that this</span> <span
  m='2432000'>difference decaying exponentially.</span> </p><p><span
  m='2435000'>And that difference is simply VS-VTH.</span> </p><p><span
  m='2439000'>And that decays exponentially. This form is the e^-t/RC
  form.</span> </p><p><span m='2445000'>And, boom, I am done. Many of you are
  wondering,</span> <span m='2449000'>Professor Agarwal, if life was so
  simple,</span> <span m='2453000'>why on earth did you have us mess around with
  those</span> <span m='2458000'>differential equations to get here?</span>
  </p><p><span m='2463000'>You show us differential equations and then you don't
  use</span> <span m='2466000'>them anymore. Well, that is a good
  question.</span> </p><p><span m='2469000'>The answer to that is that you need
  to understand the</span> <span m='2472000'>foundations. Once you understand
  the</span> <span m='2474000'>foundations you can find simplifying techniques
  to get to</span> <span m='2478000'>where you need to be, but you need to
  understand the</span> <span m='2481000'>foundations. You need to at least see
  why</span> <span m='2484000'>things are the way they are at least once.</span>
  </p><p><span m='2488000'>Understand the foundations and then find intuitive
  ways of</span> <span m='2494000'>getting your answers. So now my falling delay
  here</span> <span m='2499000'>is, I start off with VOS and I need to get all
  the way down to</span> <span m='2505000'>what value to compute. At some point
  here,</span> <span m='2510000'>this is a valid one, at some point VB becomes
  a</span> <span m='2515000'>valid zero for the output. And that is when I stop
  my tF</span> <span m='2522000'>block. What is the value here for this</span>
  <span m='2526000'>to be a valid zero? Don't all yell at once.</span>
  </p><p><span m='2531000'>VOL. I simply had to figure out what</span> <span
  m='2536000'>is the value of time, this is Page 7,</span> <span m='2540000'>for
  which this expression decays down to VOL.</span> </p><p><span m='2547000'>So
  it is VTH+(VS-VTH) e^-tF/RC. Then I simplify this.</span> </p><p><span
  m='2558000'>How do I do that? VOL-VTH.</span> </p><p><span m='2564000'>Then I
  divide that by VS-VTH. So VOL-VTH.</span> </p><p><span m='2573000'>Divide that
  by VS-VTH. Take logarithms on both sides</span> <span m='2585000'>and then
  multiply by RC. So I get tF is -RC log of that.</span> </p><p><span
  m='2594000'>This is R Thevenin and this is CGS.</span> </p><p><span
  m='2600000'>How did I get this? VOL-VTH divided by VS-VTH.</span> </p><p><span
  m='2610000'>Take logs on both sides. And then multiply throughout by</span>
  <span m='2617000'>-1/-RC and I get my tF. Done.</span> </p><p><span
  m='2621000'>Let's do it for the same set numbers, just that we add an
  RON</span> <span m='2630000'>of 10 ohms. I will do this for RON of 10</span>
  <span m='2635000'>ohms and compute the value for you.</span> </p><p><span
  m='2642000'>tF=-RTH. RTH is RON parallel RL.</span> </p><p><span
  m='2646000'>This is 10 ohms. That is 1K.</span> </p><p><span m='2651000'>So 10
  ohms in parallel with 1K is approximately 10 ohms.</span> </p><p><span
  m='2660000'>So let me just use approximately 10 ohms.</span> </p><p><span
  m='2666000'>1 pF, that is RC times ln of VOL.</span> </p><p><span
  m='2673000'>Oh, I need to give you a VOL. Let's say my discipline has
  VOL</span> <span m='2679000'>being 1 volt. And so therefore I end up</span>
  <span m='2683000'>getting a VOL-VTH divided by VS-VTH.</span> </p><p><span
  m='2687000'>Since RON is much, much, much smaller than RL,</span> <span
  m='2691000'>since RON is 10 ohms and this is 1K, most of VS will drop</span>
  <span m='2697000'>across RL. This is a hundred times</span> <span
  m='2702000'>smaller. Compared to VOL,</span> <span m='2705000'>which is 1
  volt, VTH is very,</span> <span m='2707000'>very small. VTH will be on the
  order of</span> <span m='2712000'>0.05, and so therefore I simply write down
  VOL here and say VTH</span> <span m='2718000'>is approximately zero, and I get
  VS-VTH.</span> </p><p><span m='2722000'>This is approximately 5. So let me
  just say this is</span> <span m='2728000'>approximately. And if you do it you
  will get</span> <span m='2734000'>1.6 pico-seconds. Again, just for
  fun,</span> <span m='2738000'>let me write the corresponding RC time constant
  for the</span> <span m='2745000'>circuit, which is RTHCGS. So RTH is
  approximately 10 ohms</span> <span m='2752000'>and CGS is 1 pF, so this is 1
  picosecond.</span> </p><p><span m='2764000'>Now you will understand why I have
  been writing this time</span> <span m='2768000'>constant down. It turns out
  that the time</span> <span m='2770000'>constant is a very, very important
  number.</span> </p><p><span m='2773000'>So you see an RC circuit, and you
  compute its time</span> <span m='2777000'>constant for an RLC connection like
  this, it is the series</span> <span m='2781000'>resistance times the
  capacitor. The time constant is a very</span> <span m='2785000'>important
  number. And usually the circuit delays</span> <span m='2789000'>are in the
  neighborhood of the time constant value.</span> </p><p><span m='2794000'>In
  this case this is 1 pS. That is 1.6 pS.</span> </p><p><span m='2797000'>And in
  this case we had 0.1 nS and 0.16 nS.</span> </p><p><span m='2800000'>So the
  time constant itself is a good indicator of what your</span> <span
  m='2804000'>delays are going to be like. If you have no time,</span> <span
  m='2808000'>you are sloshing your cereal down in the morning and you
  need</span> <span m='2813000'>to know how long the delay of the inverter very
  quickly,</span> <span m='2817000'>you have three seconds. Just do the RC and
  that is a</span> <span m='2822000'>good first approximation. What I would like
  to do next in</span> <span m='2826000'>the last three or four minutes is set
  up a little demo for you</span> <span m='2831000'>for your recitation, and
  then your recitation will</span> <span m='2835000'>cover it.</span>
  </p><p><span m='2843000'>This is a true story. This really,</span> <span
  m='2846000'>really happened. In this West Coast school,</span> <span
  m='2849000'>which shall remain nameless, they had a chip,</span> <span
  m='2853000'>they built a chip. And the chip had a bunch of</span> <span
  m='2857000'>pins, as you might imagine. And the pin,</span> <span
  m='2860000'>as you have a trace on a board, a wire on a board there are</span>
  <span m='2864000'>some capacitance attached to wires, between the wire
  and</span> <span m='2867000'>ground. And that is a capacitor.</span>
  </p><p><span m='2869000'>And they just called it a load capacitance.</span>
  </p><p><span m='2872000'>It could have been 0.1 pF or 0.01 pF or something
  like that.</span> </p><p><span m='2876000'>What they found when they built
  this chip --</span> <span m='2880000'>What they found was that the voltage
  here they expected to</span> <span m='2883000'>look like this, this computer
  science</span> <span m='2886000'>abstraction and so on, zero to one
  transition,</span> <span m='2889000'>boom, it should look like this. But for
  the reasons we saw</span> <span m='2893000'>today the observed transition was
  much slower and looked like</span> <span m='2897000'>this. So the students
  said ah-ha,</span> <span m='2900000'>let's speed up this chip. We can speed up
  the chip by</span> <span m='2903000'>looking at the RL and RON of my driving
  inverters.</span> </p><p><span m='2907000'>And if I make RL small -- Notice if
  I make RL small my</span> <span m='2912000'>delay is small. If I make RON
  small my falling</span> <span m='2916000'>delay is small. So let's make really
  small RLs</span> <span m='2919000'>and RONs and let's all have fun.
  Unfortunately,</span> <span m='2923000'>what they observed was that by making
  RL and RON both small,</span> <span m='2928000'>the RC time constant small
  they expected to see a much sharper</span> <span m='2933000'>rise time. And
  this was the original.</span> </p><p><span m='2936000'>But what really
  happened was -- They expected this to get</span> <span m='2941000'>faster and
  kind of look like this, but what happened was</span> <span
  m='2945000'>disaster struck. What they observed was</span> <span
  m='2948000'>something like that. This is a real-life story.</span>
  </p><p><span m='2951000'>And so instead of getting something like this they
  go</span> <span m='2955000'>something like this. And why is that a
  problem?</span> </p><p><span m='2958000'>That is a problem because notice when
  I expect to be at a</span> <span m='2962000'>zero, I got some spikes that went
  higher than VIL into the</span> <span m='2966000'>forbidden region and did bad
  things to me.</span> </p><p><span m='2970000'>So let me show you a little demo
  and show you that that's</span> <span m='2973000'>exactly how the circuit is
  behaving.</span> </p><p><span m='2983000'>Notice that this is what I expect
  but this is what I see.</span> </p><p><span m='2988000'>Look at the purple
  curve here. Notice these spikes that are</span> <span m='2994000'>showing up
  there. This is true.</span> </p><p><span m='2997000'>They saw it happen. And
  why is this happening?</span> </p><p><span m='3001000'>It turns out that what
  was happening was that the two pins</span> <span m='3006000'>were next to each
  other. And I will show you a little</span> <span m='3010000'>demonstration
  here. Let's see if you can figure out</span> <span m='3013000'>why this was
  happening. Think of these as two pins and</span> <span m='3017000'>the pins
  are close together. I am just modeling the two pins</span> <span
  m='3022000'>with a role of wire. And what I am going to do is --</span> <span
  m='3033000'>I am going to separate the wires and keep them far apart.</span>
  </p><p><span m='3036000'>It is like keeping my pins far apart.</span>
  </p><p><span m='3039000'>Hey, guess what happened? Those nasty spikes went
  away.</span> </p><p><span m='3042000'>But then I cannot keep my pins 1 meter
  apart on a chip.</span> </p><p><span m='3046000'>Your laptops are going to
  look 20 yards long.</span> </p><p><span m='3048000'>You want the pins to be
  very close to each other so that you</span> <span m='3052000'>can have many
  pins on chips and therefore have very small</span> <span m='3056000'>systems.
  But then look,</span> <span m='3057000'>I get the spikes. Any idea why that is
  happening?</span> </p><p><span m='3062000'>Why is that when the pins are close
  together I get those</span> <span m='3066000'>spikes? Any ideas?</span>
  </p><p><span m='3068000'>Somewhat? We just learned about</span> <span
  m='3070000'>capacitors, so this must have to do with capacitors.</span>
  </p><p><span m='3074000'>There is this parasitic capacitor between the
  pins,</span> <span m='3078000'>exactly. Here is what is happening.</span>
  </p><p><span m='3080000'>Here is what I expect. I expect a nice square wave
  at</span> <span m='3085000'>the output. But instead I have a pin next</span>
  <span m='3088000'>to me. And I have a faster wave form</span> <span
  m='3091000'>driving it. And so therefore there is a</span> <span
  m='3093000'>parasitic capacitor here. And because of that I get</span> <span
  m='3096000'>something called "crosstalk". And the model for crosstalk
  is</span> <span m='3100000'>some resultant resistance with the parasitic
  capacitor and I</span> <span m='3103000'>get those spikes. And the 6.002
  experts saw the</span> <span m='3105000'>solution. They said how do we fix
  this</span> <span m='3108000'>problem? 6.002 experts said the way we</span>
  <span m='3110000'>fix this problem if it is slow it may be better.</span>
  </p><p><span m='3112000'>Instead of having sharp transitions let me drive it
  with</span> <span m='3116000'>slower transitions. Let's switch to the demo
  again.</span> </p><p><span m='3120000'>You will see this in recitation, but I
  will show you</span> <span m='3123000'>the demo very quickly. I have a sharp
  transition of</span> <span m='3126000'>the input, which is that yellow thing
  out there.</span> </p><p><span m='3128000'>I am going to make the transition
  slower.</span> </p><p><span m='3131000'>Switch to a triangular wave. And you
  will notice the spikes</span> <span m='3134000'>go away. Oh, no.</span>
  </p><p><span m='3135000'>That is the wrong one. The other one.</span>
  </p><p><span m='3138000'>There you go. The moment I switch to a slower</span>
  <span m='3140000'>transition boom, the spikes go away.</span> </p><p><span
  m='3142000'>You want to switch back to square?</span> </p><p><span
  m='3144000'>There you go. The 6.002 experts saw the</span> <span
  m='3147000'>solution. Slower transitions.</span> </p><p><span m='3150000'>And
  you will do this example in detail in Section tomorrow.</span> </p><p><span
  m='3153000'>Thank you.</span> </p>
uid: 4376aaa924335be8eb070468c5a3bf68
type: course
layout: video
---
