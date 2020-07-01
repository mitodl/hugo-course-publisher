---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Sinusoidal steady state</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec16.jpg
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-16/thumb_lec16.jpg
    title: thumb_lec16.jpg
    type: null
    uid: e0e20721b66134a7c167e7fca86e5a4c
  - id: Video-YouTube-Stream
    media_location: 3GdMaDzIUeQ
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Video-YouTube-Stream
    type: Video
    uid: 35f499f48e031f6cda3171705f98731a
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/3GdMaDzIUeQ/default.jpg'
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 344e2c7be4bd3e97e91ee748352b2d01
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Video-iTunes U-MP4
    type: Video
    uid: 9a6178bb99d4a8d115ff8270e524fa01
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-04nov2003-220k.mp4
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Video-Internet Archive-MP4
    type: Video
    uid: 6968ce7271ed369e534a2eebb9af3fe0
  - id: Thumbnail-OCW-JPG
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: abee662749f7866aafb2e40d5d7d4aa1
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 3GdMaDzIUeQ
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: daaa2c497c8b940b0c7f7924c67eb4e4
  - id: 3GdMaDzIUeQ.srt
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-16/3GdMaDzIUeQ.srt
    title: 3play caption file
    type: null
    uid: b6fc55b693a478b4694862f2e61f6a78
  - id: 3GdMaDzIUeQ.pdf
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-16/3GdMaDzIUeQ.pdf
    title: 3play pdf file
    type: null
    uid: 8fe5cd1153e4c0df17034b7e1d9a12e7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8bf454676ab91c11ba85dbdcf14ac326
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d2c6727517401c7ee31dd7e6be5a1185
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 8a5ffef1c1bac7230908dbe1b2efae89
inline_embed_id: '1681703lecture16:sinusoidalsteadystate79463203'
order_index: 321
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/fed27650027942843313fd984a133e64">PDF</a>)<br />
  Demonstration: First order sinusoidal steady state (<a target="_blank"
  title="Open in a new window."
  href="./resolveuid/a90fd417e34cc937fdfbe711413de192">PDF</a>)<br />
  Demonstration: Displays the transfer function of RC lowpass and highpass (<a
  target="_blank" title="Open in a new window."
  href="./resolveuid/b6bc10372b60f151e845da69f106cb3d">PDF</a>)</p>
short_url: lecture-16
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-16
title: 'Lecture 16: Sinusoidal Steady State'
transcript: >-
  <p><span m='32000'>OK. Good morning.</span> </p><p><span m='33000'>Let's get
  going. As always, I will start with a</span> <span m='38000'>review. And today
  we embark on another</span> <span m='41000'>major milestone in our analysis of
  lumped circuits.</span> </p><p><span m='46000'>And it is called the
  "Sinusoidal Steady-state".</span> </p><p><span m='51000'>Again, I believe this
  will be the second and the last lecture</span> <span m='57000'>for which I
  will be using view graphs.</span> </p><p><span m='62000'>And the idea here is
  that, just like in the last lecture,</span> <span m='65000'>there is a bunch
  of mathematical grunge that needs</span> <span m='69000'>to be gone through.
  And I want to show you a</span> <span m='72000'>sequence in a little chart
  today that talks about the effort</span> <span m='76000'>level in doing some
  problems based on time domain</span> <span m='79000'>differential equations,
  as in the last lecture,</span> <span m='83000'>something slightly different
  today and something much better</span> <span m='87000'>on Thursday. And so, in
  some sense,</span> <span m='90000'>Thursday's lecture and today's lecture
  involve talking about</span> <span m='94000'>the foundations of the behavior
  of certain types of circuits.</span> </p><p><span m='98000'>And it is good for
  you to have this foundation as background,</span> <span m='103000'>but when
  you actually go to solve circuits you don't quite</span> <span m='107000'>use
  these methods. You use much easier techniques,</span> <span m='110000'>which I
  will talk about next Thursday.</span> </p><p><span m='113000'>Let's start with
  a quick review, and then we will go into</span> <span m='117000'>sinusoidal
  steady state. The last lecture we talked</span> <span m='122000'>about this
  circuit and we did the same two lectures ago on</span> <span
  m='127000'>Tuesday. We had one inverter driving</span> <span
  m='131000'>another inverter. And we said that the wire over</span> <span
  m='135000'>ground had some inductance. CGS is the capacitor of the</span>
  <span m='140000'>gate and R is the resistance at the drain of the first
  inverter.</span> </p><p><span m='146000'>And if you look at this circuit, that
  circuit formed an</span> <span m='151000'>RLC pattern. And what we did was we
  said</span> <span m='156000'>let's drive this with a one to zero transition at
  the input.</span> </p><p><span m='161000'>And the one to zero transition at
  the input would cause this</span> <span m='167000'>transistor to switch off,
  and this node would then go</span> <span m='172000'>from a very low value to a
  high value.</span> </p><p><span m='175000'>So it as if a 5 volt step was
  applied at this input.</span> </p><p><span m='181000'>We also saw that using
  time domain differential equations</span> <span m='185000'>that by applying a
  step input here the output looked like</span> <span m='189000'>this. The
  output would show some</span> <span m='191000'>oscillatory behavior when we
  have a capacitor and inductor.</span> </p><p><span m='196000'>I also gave you
  some insight as to why it oscillates like this.</span> </p><p><span
  m='200000'>And you also heard in recitation that the reason for</span> <span
  m='204000'>this oscillation was because of these two storage elements.</span>
  </p><p><span m='210000'>Each of these storage elements tries to hold onto its
  state</span> <span m='214000'>variable. For example,</span> <span
  m='215000'>the capacitor tries to maintain its voltage while the
  inductor</span> <span m='220000'>tries to maintain its current. And, much like
  a pendulum which</span> <span m='225000'>oscillates back and forth, it swaps
  potential energy</span> <span m='228000'>versus kinetic energy down here and
  swings back and forth.</span> </p><p><span m='234000'>In the same way, in an
  LC circuit like this,</span> <span m='237000'>energy swaps back and forth
  between a potential energy and a</span> <span m='241000'>kinetic energy
  equivalent, which swaps back and forth</span> <span m='245000'>between energy
  stored in the inductor and energy stored in</span> <span m='249000'>the
  capacitor and sloshes back and forth.</span> </p><p><span m='252000'>And
  because of this resistor the energy eventually dissipates</span> <span
  m='256000'>and you end up getting a final value which corresponds to the
  5</span> <span m='261000'>volts appearing here. And why is that?</span>
  </p><p><span m='264000'>That is because remember the capacitor is a long-term
  open</span> <span m='268000'>for DC. It is a DC voltage.</span> </p><p><span
  m='271000'>After a long time this capacitor looks like an open</span> <span
  m='275000'>circuit and the inductor looks like a complete short
  circuit,</span> <span m='279000'>an ideal inductor as a complete short circuit
  for DC.</span> </p><p><span m='283000'>And so therefore in the long-term it is
  as if this guy</span> <span m='288000'>is a short, this guy is an open, so 5
  volts simply appears here.</span> </p><p><span m='292000'>And this is the
  transient behavior.</span> </p><p><span m='295000'>Then we just switch the
  first transistor off.</span> </p><p><span m='300000'>In the last lecture, I
  left off with intuitive</span> <span m='303000'>analysis. Let me quickly cover
  that and</span> <span m='306000'>redo the intuitive analysis for you.</span>
  </p><p><span m='309000'>I left it the last time by having you think about
  whether</span> <span m='314000'>the transient response would begin by going
  down or begin by</span> <span m='319000'>going up. And I will cover that
  today.</span> </p><p><span m='322000'>This was the circuit that we
  analyzed.</span> </p><p><span m='325000'>A VI input with a step and an RLC out
  here.</span> </p><p><span m='330000'>And we were plotting the capacitor
  voltage.</span> </p><p><span m='332000'>And intuitively we can plot this in
  the following way.</span> </p><p><span m='336000'>I have also marked for you
  the section number in the course</span> <span m='340000'>notes which has a
  discussion of this intuitive analysis,</span> <span m='344000'>(Section 13.8).
  Let's do the easy stuff first.</span> </p><p><span m='347000'>Notice that the
  capacitor wants to hold its voltage.</span> </p><p><span m='350000'>And so
  given that we don't have any infinite impulse here,</span> <span m='354000'>I
  am going to start out with the capacitor voltage being</span> <span
  m='358000'>where it is. And the initial conditions are</span> <span
  m='362000'>given to you. You are given that the</span> <span
  m='364000'>capacitor voltage starts out being positive at v zero and
  the</span> <span m='368000'>current starts out being negative at time
  zero.</span> </p><p><span m='371000'>So I am telling you that there is a
  voltage v across the</span> <span m='375000'>capacitor at time t=0 and there
  is a current that is flowing.</span> </p><p><span m='379000'>Since i is
  negative there is a current initially that is</span> <span m='383000'>flowing
  in the opposite direction to this arrow here.</span> </p><p><span
  m='387000'>The i zero is negative. In light of that,</span> <span m='391000'>I
  can start plotting my curve here by intuition.</span> </p><p><span
  m='395000'>I start by saying at time t=0 I am told that the initial
  voltage</span> <span m='400000'>of the capacitor is at zero. This is about as
  simple as it</span> <span m='404000'>gets. Completely intuitive.</span>
  </p><p><span m='406000'>I also know that after a long time, can someone tell
  me after</span> <span m='411000'>a long time what the voltage will be at the
  end of the</span> <span m='415000'>capacitor? You should be able to get
  his</span> <span m='418000'>by observation? VI.</span> </p><p><span
  m='421000'>And why is it VI? It is vI because this is a DC</span> <span
  m='425000'>value VI. And after a long time this guy</span> <span
  m='428000'>behaves like an open circuit to DC.</span> </p><p><span
  m='431000'>This guy behaves like a short circuit to DC.</span> </p><p><span
  m='435000'>So since this is an open circuit, VI will appear here</span> <span
  m='440000'>after a long time. And so therefore,</span> <span m='443000'>after
  a long time, the capacitor voltage is going</span> <span m='447000'>to be at
  VI. And I just showed you that.</span> </p><p><span m='452000'>There you go.
  You already have the two</span> <span m='454000'>endpoints of your curve
  completely by observation,</span> <span m='458000'>intuition. No DEs, no
  nothing.</span> </p><p><span m='460000'>Just by staring at it and
  understanding the fundamentals</span> <span m='465000'>of how simple primitive
  circuit elements work.</span> </p><p><span m='468000'>Absolutely simple stuff.
  So you've nailed the two ends</span> <span m='472000'>now and you cannot go
  wrong with the stuff in the middle.</span> </p><p><span m='477000'>Let's see.
  As a next step what I do is I</span> <span m='481000'>need to understand what
  the dynamics of the circuit looks</span> <span m='485000'>like here. What I do
  is I develop the</span> <span m='488000'>characteristic equation. And
  initially you will write</span> <span m='492000'>the differential equation and
  then substitute e^st and get</span> <span m='496000'>this characteristic
  equation. But you could also remember it</span> <span m='500000'>as a pattern.
  For a series RLC circuit you</span> <span m='503000'>always get an equation of
  this form, always.</span> </p><p><span m='507000'>If this were R, L and
  C.</span> </p><p><span m='510000'>And whether you are looking at L up here or
  C up here,</span> <span m='513000'>as long as you're looking at the capacitor
  voltage,</span> <span m='517000'>the capacitor voltage is going to behave the
  same.</span> </p><p><span m='520000'>And for this circuit the characteristic
  equation remains</span> <span m='524000'>the same as well for a series
  RLC.</span> </p><p><span m='527000'>It is exactly this. And I write the
  standard</span> <span m='530000'>canonic form as s squared plus two alpha s +
  omega nought</span> <span m='534000'>squared. And omega nought is simply
  one</span> <span m='536000'>by square root of LC and alpha is simply R divided
  by L and I</span> <span m='541000'>have two in the denominator as well.</span>
  </p><p><span m='545000'>And then I get omega d which is my damped frequency
  given by</span> <span m='549000'>omega nought squared minus alpha
  squared.</span> </p><p><span m='552000'>And Q is simply called the quality
  factor.</span> </p><p><span m='554000'>And we will learn about Q in a lot more
  detail in about a</span> <span m='558000'>couple of lectures from today. That
  is given where omega</span> <span m='562000'>nought divided by two alpha.
  These parameters,</span> <span m='566000'>alpha, omega nought, Q and omega d
  pretty much</span> <span m='569000'>characterize everything else that I need
  to know about the</span> <span m='573000'>circuit. First of all,</span> <span
  m='576000'>omega d is the frequency of oscillation.</span> </p><p><span
  m='579000'>And so since omega d is a frequency of oscillation then I</span>
  <span m='583000'>know that the time period of oscillation is two pi by
  omega</span> <span m='588000'>d. Omega is in radians.</span> </p><p><span
  m='589000'>Notice that for typical values of circuits like this when R
  is</span> <span m='594000'>pretty small, alpha squared is going to be</span>
  <span m='598000'>very small. It's a common case for</span> <span
  m='601000'>underdamped circuit that omega d will more or less be equal
  to</span> <span m='607000'>omega nought. Commonly that is going to be</span>
  <span m='610000'>the case. This frequency is governed by</span> <span
  m='614000'>LC. And if R is large it is</span> <span m='616000'>governed by
  this omega d here. So I have the frequency of</span> <span
  m='621000'>oscillation. I also know that Q is related</span> <span
  m='624000'>to the frequency of oscillation divided by alpha.</span>
  </p><p><span m='630000'>It is a ratio of the frequency divided by how badly I
  am being</span> <span m='634000'>damped. So it is a fight between the</span>
  <span m='637000'>frequency of oscillation and now heavily I damp.</span>
  </p><p><span m='641000'>And the ratio of that is an indication of how many
  cycles I</span> <span m='645000'>ring. So Q tells me that the ringing</span>
  <span m='648000'>stops approximately after Q cycles.</span> </p><p><span
  m='650000'>These four values, omega d, Q, alpha and omega</span> <span
  m='654000'>nought are telling me more and more now.</span> </p><p><span
  m='657000'>So I have got these two factors.</span> </p><p><span m='661000'>So
  I know now, based on omega d and Q,</span> <span m='664000'>that it is going
  to look something like this.</span> </p><p><span m='668000'>Some ringing here
  and then I stop at this point.</span> </p><p><span m='672000'>The last thing
  that is left to do here for me for now is to</span> <span m='677000'>figure
  out whether I start out going down or I start out going</span> <span
  m='682000'>up. I start out going down or I</span> <span m='685000'>start out
  going up? I don't know that yet.</span> </p><p><span m='690000'>And I stopped
  at this point in the last lecture and let you</span> <span m='694000'>think
  about how you can stare at the circuit and intuitively</span> <span
  m='698000'>figure out whether this goes down or that goes up.</span>
  </p><p><span m='701000'>So here is the insight. Let's stare at this for
  a</span> <span m='704000'>minute purely through intuition. The capacitor has a
  voltage v</span> <span m='709000'>across it, right? And that is because I
  am</span> <span m='712000'>telling you that it has an initial voltage
  v.</span> </p><p><span m='715000'>Now, I want to find out at prime t equals
  zero plus,</span> <span m='718000'>in which direction does a capacitor voltage
  go?</span> </p><p><span m='723000'>Increase or decrease? What do I do?</span>
  </p><p><span m='725000'>Let me take a look at the inductor current.</span>
  </p><p><span m='728000'>I am told that the inductor current is negative which
  means</span> <span m='732000'>I am told that the inductor current is going in
  this</span> <span m='736000'>direction initially. The inductor current is
  pushing</span> <span m='739000'>in this direction. Now, remember,</span> <span
  m='741000'>just as the capacitor is one stubborn nut trying to hold its</span>
  <span m='746000'>voltage, the inductor is as stubborn.</span> </p><p><span
  m='748000'>It is trying to hold its current.</span> </p><p><span m='752000'>It
  is trying to maintain its current.</span> </p><p><span m='754000'>And its
  initial current i(0) is in this direction.</span> </p><p><span
  m='757000'>Capacitor has a voltage here, that is v(0),</span> <span
  m='760000'>and the inductor is yanking the current in that direction.</span>
  </p><p><span m='764000'>So what should happen to the capacitor voltage
  initially?</span> </p><p><span m='768000'>If I am at v(0) and someone is
  yanking current out,</span> <span m='771000'>at least initially in that
  direction, what should the</span> <span m='775000'>initial dynamics of the
  capacitor voltage look like?</span> </p><p><span m='780000'>Pardon? It should
  drop,</span> <span m='781000'>which means that if the initial current is being
  pulled in that</span> <span m='787000'>direction the capacitor voltage must
  droop to begin with.</span> </p><p><span m='792000'>Completely through
  intuition. No math here.</span> </p><p><span m='796000'>This means that i(0)
  is negative.</span> </p><p><span m='798000'>It is as if i(0) is being pulled
  out in this manner,</span> <span m='803000'>so the capacitor voltage must drop
  to begin life.</span> </p><p><span m='807000'>Therefore, the dynamics look
  somewhat like this.</span> </p><p><span m='813000'>Notice that this is very
  reminiscent of the ringing that</span> <span m='820000'>we saw at the gate
  node of the second inverter.</span> </p><p><span m='827000'>Let's stop here in
  terms of time domain analysis of RLC,</span> <span m='834000'>and today let's
  take another big step forward.</span> </p><p><span m='842000'>Today marks
  another transition in life here.</span> </p><p><span m='845000'>This is
  actually a huge transition so I want to just</span> <span m='849000'>pause and
  take like ten seconds of a breather just to clearly</span> <span
  m='854000'>demarcate the fact that we have a huge transition coming up.</span>
  </p><p><span m='859000'>The key to this transition is that I want to look at
  today the</span> <span m='864000'>steady-state response of networks to a
  sinusoidal drive.</span> </p><p><span m='870000'>We are going to do two things
  differently starting today on</span> <span m='873000'>this new journey of
  ours. In the past,</span> <span m='876000'>we looked at time domain behavior
  of circuits.</span> </p><p><span m='879000'>For RLC, for example, we looked at
  the transient</span> <span m='882000'>response. And what happened the instant
  I</span> <span m='884000'>turn something on? The transient response.</span>
  </p><p><span m='887000'>Today we are going to look at a steady-state
  response.</span> </p><p><span m='890000'>Steady-state response says that if I
  wait long enough,</span> <span m='894000'>for whatever the circuit wants to do
  in the beginning of life</span> <span m='898000'>to die out. If I wait long
  enough,</span> <span m='901000'>how is the circuit going to behave after a
  long time?</span> </p><p><span m='904000'>I will tell you why that is
  important in a second.</span> </p><p><span m='907000'>I look at the
  steady-state behavior.</span> </p><p><span m='909000'>Second, I am going to
  look today at sinusoidal drive.</span> </p><p><span m='913000'>Two things that
  are different from, say for example,</span> <span m='916000'>what I covered in
  the past ten minutes.</span> </p><p><span m='918000'>In the past ten minutes I
  covered two things which were</span> <span m='922000'>different. One is that I
  looked at the</span> <span m='924000'>transient response and then
  steady-state.</span> </p><p><span m='928000'>And remember for a DC input, for
  a DC voltage the</span> <span m='931000'>steady-state was a DC voltage across
  the capacitor,</span> <span m='934000'>correct? So the steady-state was
  pretty</span> <span m='937000'>boring, it was steady-state DC. But what we are
  going to do</span> <span m='941000'>today is instead of having DC inputs or
  step inputs which</span> <span m='945000'>settle to a DC value after some
  time, we are going to drive a</span> <span m='949000'>circuit through the
  sinusoidal input.</span> </p><p><span m='952000'>So you may ask me, Agarwal,
  are you nuts?</span> </p><p><span m='954000'>Why do you want to drive
  something with a sinusoidal</span> <span m='958000'>input? Why not just steps
  in DC and so</span> <span m='962000'>on? That was painful enough.</span>
  </p><p><span m='964000'>Why sinusoidal? Why not do triangular or why</span>
  <span m='968000'>not do some other exponentially decaying stuff or
  something</span> <span m='973000'>really cool like a whacko music
  signal?</span> </p><p><span m='976000'>What is special about sinusoidal
  stuff?</span> </p><p><span m='979000'>The key thing to realize is that, well,
  let me ask you a</span> <span m='983000'>question first. How many people here
  know about</span> <span m='987000'>Fourier series? Good.</span> </p><p><span
  m='990000'>It looks like some of you have taken the prerequisites.</span>
  </p><p><span m='994000'>Good. Need I say more as to why this</span> <span
  m='996000'>is important? Just that question should give</span> <span
  m='1000000'>you the answer, right?</span> </p><p><span m='1001000'>You've
  learned about Fourier series.</span> </p><p><span m='1004000'>And when you
  learned about Fourier series you were</span> <span m='1007000'>wondering why
  on earth are we learning about Fourier series?</span> </p><p><span
  m='1011000'>Who cares that you can represent the periodic signals</span> <span
  m='1015000'>as a summation of a series of sine waves?</span> </p><p><span
  m='1020000'>Why is that interesting? Why are you telling me that I</span>
  <span m='1023000'>can take a square wave and represent that as a summation
  of</span> <span m='1026000'>periodic square waves and represent that as a
  summation of</span> <span m='1030000'>sines? Who cares that I can take
  a</span> <span m='1032000'>sequence of pulses with a fixed period and
  represent that as a</span> <span m='1036000'>sum of sines? Who cares that I
  can take a</span> <span m='1039000'>triangular wave and represent that as a
  sum of sines?</span> </p><p><span m='1042000'>I am not sure what answer your
  math professors gave you when</span> <span m='1046000'>they taught you Fourier
  series. But in math they are purists.</span> </p><p><span m='1050000'>They
  don't care about applications.</span> </p><p><span m='1052000'>The answer
  could well have been because it is aesthetically</span> <span
  m='1056000'>pleasing. I mean isn't it cool that you</span> <span
  m='1058000'>can represent a sequence of pulses as a sum of sines?</span>
  </p><p><span m='1062000'>That is good enough for mathematicians.</span>
  </p><p><span m='1064000'>But I am an engineer. If it I cannot see how it
  helps</span> <span m='1067000'>humanity in the short-term then I probably
  don't care too much</span> <span m='1071000'>about it. Let me give you some
  practical</span> <span m='1073000'>significance of this. So it turns out
  that,</span> <span m='1076000'>since we know that we can represent periodic
  signals with</span> <span m='1079000'>sums of sines. What this means is that
  if I</span> <span m='1084000'>can figure out the behavior of networks to a
  sinusoidal input,</span> <span m='1090000'>if I can understand how to analyze
  a network for a</span> <span m='1094000'>sinusoidal input that means that if
  the circuit is linear I can</span> <span m='1100000'>then compute the response
  of the circuit to any periodic</span> <span m='1105000'>waveform. Here is the
  argument.</span> </p><p><span m='1109000'>I can represent any periodic
  waveform as a sum of sines.</span> </p><p><span m='1113000'>The Fourier
  series, remember?</span> </p><p><span m='1116000'>If I just figure out the
  response of my network for a</span> <span m='1120000'>sine wave, then if this
  is a linear network,</span> <span m='1124000'>I can compute the response to
  any sequence of scaled sum of</span> <span m='1129000'>sines. A some
  sine,</span> <span m='1130000'>B sine two, omega whatever, C sine something or
  the other.</span> </p><p><span m='1135000'>I can simply take the response of
  the one sine.</span> </p><p><span m='1141000'>And from there I can go ahead,
  and knowing the response of a</span> <span m='1145000'>sine wave I can compute
  the response to a sum of sines.</span> </p><p><span m='1149000'>That is pretty
  cool. Therefore, doing it for</span> <span m='1152000'>sinusoidal drives is
  really important.</span> </p><p><span m='1154000'>Why steady-state now?
  Hopefully, I have convinced you</span> <span m='1158000'>that looking at the
  response of circuits to sinusoidal drive is</span> <span m='1162000'>important
  and interesting because we can long ways from</span> <span m='1166000'>there.
  What about steady-state?</span> </p><p><span m='1170000'>Well, it turns out
  that, and I am going to show you,</span> <span m='1172000'>when you listen to
  music, you have an amplifier and</span> <span m='1175000'>listen to music,
  what you are observing by and</span> <span m='1178000'>large is the
  steady-state behavior of the amplifier.</span> </p><p><span m='1181000'>You
  are listening to something over many seconds or many hours.</span>
  </p><p><span m='1184000'>And the transients used for most of our common
  circuits,</span> <span m='1188000'>the transients die out pretty
  quickly.</span> </p><p><span m='1190000'>And so the transients are quite
  complicated and they die out</span> <span m='1193000'>quickly. We say we are
  engineers.</span> </p><p><span m='1195000'>Let's focus on what is practically
  important.</span> </p><p><span m='1199000'>And we focus on the steady-state
  behavior as a large</span> <span m='1202000'>part of our analysis and just
  completely ignore the transient</span> <span m='1205000'>response when we care
  about the response to sinusoidal input.</span> </p><p><span m='1209000'>The
  transient response will die away, and I will show that</span> <span
  m='1212000'>mathematically to you in a few seconds.</span> </p><p><span
  m='1215000'>And let's focus on the steady-state because that what I</span>
  <span m='1218000'>am going to hear most of the time.</span> </p><p><span
  m='1220000'>I am going to listen to an average over long periods of</span>
  <span m='1223000'>time. That's the motivation behind</span> <span
  m='1225000'>this. And let me put this in</span> <span m='1227000'>perspective
  for you. By now this should bring</span> <span m='1231000'>memories to your
  mind. This is the playground that we</span> <span m='1235000'>are in. This is
  the lumped circuit</span> <span m='1237000'>playground here. Remember we came
  from the</span> <span m='1240000'>playground of nature to the playground of
  EECS where we made</span> <span m='1244000'>the big leap from Maxwell's
  equations to lumped circuits,</span> <span m='1248000'>that's lumped circuit
  abstraction.</span> </p><p><span m='1250000'>And within there we spent a large
  part of the last couple of</span> <span m='1254000'>months doing linear
  circuits. We also analyzed nonlinear</span> <span m='1258000'>circuits.
  Remember the amplifier circuit</span> <span m='1262000'>of the MOSFET large
  signal analysis was nonlinear?</span> </p><p><span m='1265000'>Well, there is
  linear and nonlinear.</span> </p><p><span m='1267000'>Within linear we also
  showed that if you take a digital</span> <span m='1271000'>circuit, at least
  as we understood them,</span> <span m='1274000'>and draw the subcircuit for a
  given set of switch settings,</span> <span m='1278000'>if I set the switches
  in a given way what I was left with</span> <span m='1282000'>was another
  linear circuit for a given value of all the switch</span> <span
  m='1286000'>settings. My small signal analysis was</span> <span
  m='1289000'>also linear. If I focused on small signals I</span> <span
  m='1292000'>also had linear analysis. Today what we are going to do</span>
  <span m='1296000'>is this. We are going to articulate a</span> <span
  m='1298000'>different part of the playground.</span> </p><p><span
  m='1300000'>This was a big linear playground.</span> </p><p><span
  m='1302000'>We've done this. We've done this.</span> </p><p><span
  m='1304000'>We are going to explore this territory.</span> </p><p><span
  m='1307000'>This is that territory of the playground in which we have</span>
  <span m='1311000'>sinusoidal inputs to circuits. Furthermore,</span> <span
  m='1313000'>we are going to look at a subcircuit of that region which</span>
  <span m='1317000'>is steady-state. We will look at sinusoidal</span> <span
  m='1322000'>input and in the steady-state. So that is going to be our</span>
  <span m='1326000'>focus for the next two or three lectures just to give you
  a</span> <span m='1331000'>perspective of where we are. To motivate
  this,</span> <span m='1334000'>what I would like to do is consider your
  amplifier.</span> </p><p><span m='1338000'>This is our friend the amplifier
  circuit,</span> <span m='1342000'>this part here. And remember,</span> <span
  m='1344000'>even though this is an amplifier, I am using a MOSFET</span> <span
  m='1348000'>here. And a MOSFET,</span> <span m='1350000'>as you know, has this
  gate capacitance CGS.</span> </p><p><span m='1353000'>I am explicitly drawing
  it out for you here.</span> </p><p><span m='1356000'>And I am going to drive
  this with a bias voltage plus some</span> <span m='1360000'>small signal vI,
  the usual template for</span> <span m='1363000'>amplifiers. And there is some
  Thevenin</span> <span m='1365000'>resistance attached to that source.</span>
  </p><p><span m='1368000'>I am going to model my source as a bias
  voltage,</span> <span m='1371000'>a small signal plus some source
  resistance.</span> </p><p><span m='1374000'>And I want to apply a sine wave
  here and I am going to look at</span> <span m='1378000'>what this looks like.
  You may think,</span> <span m='1382000'>look, this is a linear
  amplifier.</span> </p><p><span m='1385000'>And so if I apply a sine wave here
  I should see some response</span> <span m='1390000'>here, and that should be
  the same amplitude if I feed the</span> <span m='1395000'>same amplitude here
  over any frequency.</span> </p><p><span m='1398000'>But let's see what
  happens. Keep a look at,</span> <span m='1402000'>switch over to that view
  graph while I show you a little</span> <span m='1407000'>demonstration here.
  What you see here are three</span> <span m='1412000'>sine waves, a yellow sine
  wave which is the input here,</span> <span m='1416000'>you see a green sine
  wave which is the input vC at the gate of</span> <span m='1421000'>the MOSFET,
  and then you see the blue which is the output here.</span> </p><p><span
  m='1427000'>For now simply focus on the yellow and the blue.</span>
  </p><p><span m='1431000'>The yellow is the input and the blue is the
  output.</span> </p><p><span m='1435000'>So I apply some input and I get an
  output that looks more or</span> <span m='1440000'>less some linear function
  of this input here.</span> </p><p><span m='1445000'>It is a small signal. What
  I am going to do is I am</span> <span m='1447000'>going to change the
  frequency of the input.</span> </p><p><span m='1450000'>Remember, I want to
  look at the response of the circuit to a</span> <span m='1453000'>sinusoid. I
  am feeding a sinusoid here.</span> </p><p><span m='1456000'>I look at the
  response. I am going to change the</span> <span m='1459000'>frequency. That is
  a big shift that we are</span> <span m='1461000'>making in that the curve that
  we drew in the last lecture had to</span> <span m='1465000'>do with varying
  time. Now I am going to focus on</span> <span m='1467000'>sinusoids and vary
  their frequency.</span> </p><p><span m='1471000'>I am going to change the
  frequency.</span> </p><p><span m='1473000'>Stare at the blue curve as I
  increase the frequency and just</span> <span m='1477000'>think of what you
  might expect. Based on the knowledge you have</span> <span m='1481000'>so far
  you would expect that look, as I change the frequency,</span> <span
  m='1486000'>the frequency should change but I should see the same
  amplitude.</span> </p><p><span m='1490000'>OK but take a look. Let me increase
  the frequency</span> <span m='1493000'>of the input. What do you see at the
  output?</span> </p><p><span m='1496000'>I am increasing the frequency.</span>
  </p><p><span m='1510000'>What do you see happening there?</span> </p><p><span
  m='1512000'>If you don't see anything changing there you will need to</span>
  <span m='1516000'>see an optometrist. What do we see here?</span> </p><p><span
  m='1519000'>As I changed the frequency, as I increased the frequency</span>
  <span m='1524000'>what happened to the blue? The blue kept decreasing
  in</span> <span m='1528000'>amplitude. And you are saying whoa,</span> <span
  m='1531000'>what is happening here? We don't have the tools to deal</span>
  <span m='1535000'>with this. I expected that when I changed</span> <span
  m='1538000'>my frequency, my frequency here should change</span> <span
  m='1541000'>of course, but why is the amplitude changing?</span> </p><p><span
  m='1544000'>What is happening here? That is weird.</span> </p><p><span
  m='1547000'>I noticed that this amplitude became smaller because the</span>
  <span m='1551000'>amplitude of the green became smaller.</span> </p><p><span
  m='1554000'>And remember the green was the voltage across the
  capacitor.</span> </p><p><span m='1558000'>So this is your RC. And here is my
  input.</span> </p><p><span m='1562000'>My input has the amplitude, which I am
  holding more or less</span> <span m='1567000'>constant. And notice that vC
  decreased in</span> <span m='1570000'>value as I increased my
  frequency.</span> </p><p><span m='1572000'>Just hold that thought. As I
  increased the frequency of</span> <span m='1576000'>my input the amplitude of
  the output kept diminishing.</span> </p><p><span m='1580000'>In other words,
  the gain of the system seemed</span> <span m='1584000'>to have decreased as I
  increased by frequency.</span> </p><p><span m='1587000'>And today we will look
  at why that is so and how we can</span> <span m='1591000'>analyze that. The
  other thing that is not so</span> <span m='1597000'>obvious here is there is a
  phase shift.</span> </p><p><span m='1602000'>What I am going to do is try to
  see if we can observe the phase</span> <span m='1610000'>shift here.</span>
  </p><p><span m='1622000'>Notice here. What we have been used to is</span>
  <span m='1625000'>for the amplifier we get a complete inversion at the</span>
  <span m='1629000'>output. Inversion means a phase</span> <span
  m='1631000'>difference of 180 degrees for a sine wave, right?</span>
  </p><p><span m='1635000'>This peak should have been here, but notice that
  there is a</span> <span m='1639000'>shifting of the peak. In other
  words,</span> <span m='1642000'>if the yellow was my input my output should
  have had its</span> <span m='1646000'>minimum when the input had its
  maximum.</span> </p><p><span m='1651000'>But notice there is a shifting of the
  signal such that the</span> <span m='1655000'>output is a maximum, not quite
  at the point where</span> <span m='1659000'>the input is a minimum but a
  little bit after that.</span> </p><p><span m='1663000'>Also weird. Not only
  has this little</span> <span m='1666000'>circuit here lost its gain somehow,
  but also it seems to</span> <span m='1671000'>have shifted the signal in
  phase.</span> </p><p><span m='1673000'>That is weird. And today we will look
  at why</span> <span m='1677000'>that is so and try to understand the frequency
  behavior of this</span> <span m='1682000'>little subcomponent here. Notice
  that vC is exactly 180</span> <span m='1689000'>out of phase with vO. So vO is
  faithfully an inverted</span> <span m='1695000'>amplified form of the input
  vC. However, vC itself should have</span> <span m='1703000'>been the same as
  vI but it looks quite different.</span> </p><p><span m='1710000'>So let's
  understand why that is so.</span> </p><p><span m='1712000'>The subcircuit to
  model is the subcircuit comprising the</span> <span m='1716000'>source,
  resistor and the capacitor.</span> </p><p><span m='1718000'>And I am just
  showing that to you here.</span> </p><p><span m='1721000'>I have a vI, a
  resistor and capacitor.</span> </p><p><span m='1724000'>And I am going to
  understand how this behaves.</span> </p><p><span m='1727000'>And it is a first
  order circuit, single capacitor.</span> </p><p><span m='1731000'>My input is a
  vI cosine of omega t.</span> </p><p><span m='1733000'>vI is a real number for
  t greater than zero.</span> </p><p><span m='1738000'>And I am telling you that
  the capacitor voltage starts out</span> <span m='1742000'>being zero. And my
  vI is a sinusoid.</span> </p><p><span m='1745000'>It's not a step this time.
  It's a sinusoid.</span> </p><p><span m='1748000'>So vI is a sinusoid and I
  want to find out what vC looks like.</span> </p><p><span m='1753000'>The
  behavior here tells me, I will give you the answer,</span> <span
  m='1757000'>that when I feed a sinusoidal input as the frequency</span> <span
  m='1761000'>increases, vC should be decreasing somehow and also be</span>
  <span m='1765000'>shifting in phase. Let's do the derivation for</span> <span
  m='1768000'>that and see what happens. To give you some insight as to</span>
  <span m='1774000'>how to go about analyzing this let me draw a little graph as
  to</span> <span m='1779000'>the effort level of doing this. To determine vC of
  t on the</span> <span m='1784000'>y-axis here is our effort. How hard do we
  have to work to</span> <span m='1788000'>solve this circuit for a sinusoidal
  input?</span> </p><p><span m='1792000'>And on this graph, down here is easy
  and up here</span> <span m='1796000'>is pure agony. Sheer agony up
  here.</span> </p><p><span m='1800000'>So it's the scale of effort level
  ranging from easy to</span> <span m='1803000'>complete agony. And this is the
  time axis.</span> </p><p><span m='1806000'>And the time axis starts out at 11
  o'clock, the early part of</span> <span m='1810000'>today's lecture, and ends
  at roughly 12,</span> <span m='1812000'>that is today's lecture and this is
  next lecture.</span> </p><p><span m='1816000'>What I am going to show you
  today is a method that uses a</span> <span m='1819000'>usual differential
  equation approach, and this is going to</span> <span m='1823000'>be pure
  agony. If you thought last Thursday</span> <span m='1826000'>was agony watch
  today. This is going to be sheer,</span> <span m='1830000'>sheer, sheer hell.
  So I am going to grunge through</span> <span m='1833000'>that, and I think I
  will sort of give up halfway because it's</span> <span m='1837000'>just too
  painful even for me here.</span> </p><p><span m='1839000'>Then what I am going
  to do is at the end of this lecture I am</span> <span m='1842000'>going to
  show you an approach that I give a cutesy name.</span> </p><p><span
  m='1845000'>I call it the "sneaky approach".</span> </p><p><span
  m='1847000'>We are going to sneak something in there it is going to be a
  lot</span> <span m='1851000'>easier. And then in the next lecture I</span>
  <span m='1853000'>am going to show you an even sneakier approach that is
  just</span> <span m='1857000'>going to be absolute bliss. So let's start
  here.</span> </p><p><span m='1861000'>Indulge me as I go through the agony
  part.</span> </p><p><span m='1864000'>I am going to blast through it because
  that is not of how we</span> <span m='1868000'>are going to do things, but you
  just need to know that</span> <span m='1872000'>that is agony. Let's do a
  usual differential</span> <span m='1875000'>equation approach. Steps one,
  two,</span> <span m='1877000'>three and four. Set up differential
  equation,</span> <span m='1880000'>find the particular solution, find the
  homogenous solution,</span> <span m='1884000'>add up the two and solve for the
  unknowns.</span> </p><p><span m='1887000'>It's a mantra. The four-step
  manta.</span> </p><p><span m='1891000'>Let's do it. Step one, write the
  DE.</span> </p><p><span m='1894000'>That's easy. We have done this before the
  RC</span> <span m='1897000'>circuit. It's RC dvc/dt+vc=vI.</span> </p><p><span
  m='1900000'>This is no different from what you got from what you got
  from</span> <span m='1905000'>your RC circuit with a step input, just that my
  input is VI</span> <span m='1909000'>cosine of omega t in this case. It is not
  just a DC voltage VI.</span> </p><p><span m='1915000'>Stare at that. Enjoy it
  while the going is</span> <span m='1918000'>easy. It's like traversing
  rapids,</span> <span m='1922000'>and before you come to a class five, you have
  calm and raging</span> <span m='1926000'>waters there, you kind of sit there
  saying</span> <span m='1929000'>oh, the scenery around here looks really good
  and so on.</span> </p><p><span m='1934000'>All you are doing is stalling
  before you have dive down to</span> <span m='1938000'>class five. We will get
  to class five</span> <span m='1941000'>rapids in a few seconds here, so just
  enjoy this.</span> </p><p><span m='1944000'>RC dvc/dt+vC=vI. You've seen this
  before.</span> </p><p><span m='1947000'>Nothing fancy. Good old stuff.</span>
  </p><p><span m='1951000'>VI cosine of omega t. You want to hold onto
  your</span> <span m='1954000'>seatbelts? OK.</span> </p><p><span
  m='1956000'>Let's find the particular solution to the cosine input.</span>
  </p><p><span m='1960000'>Let's use our standard method. What I will do is just
  so,</span> <span m='1964000'>there is going to be so much crapola up
  there,</span> <span m='1968000'>so that I draw your attention to vP, which is
  what we are</span> <span m='1973000'>trying to get, I am just going to put a
  box</span> <span m='1976000'>around vP in red. If you see like all sorts
  of</span> <span m='1981000'>garbage appear, just look for the red
  square.</span> </p><p><span m='1984000'>That is what we are trying to get
  at.</span> </p><p><span m='1986000'>That's the equation. Let's try.</span>
  </p><p><span m='1989000'>First try, A worked before. A constant value A
  worked</span> <span m='1992000'>before for DC inputs. Let's try that
  again.</span> </p><p><span m='1996000'>If it worked then it may work
  now.</span> </p><p><span m='1998000'>If I use A, a constant value, and I
  substitute it here,</span> <span m='2002000'>I get dA/dt goes to zero, vP is
  A, but on the right-hand</span> <span m='2006000'>side I have VI cosine omega
  t. So clearly A doesn't work.</span> </p><p><span m='2012000'>Sorry. I struck
  out.</span> </p><p><span m='2014000'>Well, cosine omega t here, let's try A
  cosine omega T as</span> <span m='2019000'>my particular solution. Things are
  getting a little</span> <span m='2023000'>harder now, a little more
  painful.</span> </p><p><span m='2026000'>So substitute A cosine omega t
  here.</span> </p><p><span m='2029000'>So I do get A cosine omega T for vP, but
  out here I get RCA</span> <span m='2035000'>sine omega t times omega times
  minus one.</span> </p><p><span m='2040000'>So I have a sine and a cosine, and
  I have a cosine on the</span> <span m='2045000'>right-hand side. Sorry, it
  doesn't work.</span> </p><p><span m='2049000'>Nope, doesn't work either. Well,
  let's try A cosine omega</span> <span m='2055000'>t plus phi. We are now
  embarking into the</span> <span m='2059000'>rapids here. You can begin feeling
  the</span> <span m='2062000'>pressure. Just to refresh your memories</span>
  <span m='2066000'>of sines and cosines. A is the amplitude of the</span> <span
  m='2072000'>cosine. Omega is the frequency.</span> </p><p><span
  m='2074000'>Phi is the phase. Remember the signal I showed</span> <span
  m='2078000'>you earlier? If something happens to the</span> <span
  m='2081000'>amplitude of the sine, something happens to the phase.</span>
  </p><p><span m='2085000'>A cosine omega t plus phi. Let me plug it in here and
  go</span> <span m='2090000'>by standard practice. Here is what I get.</span>
  </p><p><span m='2093000'>I plug in A cosine omega t to this equation,</span>
  <span m='2096000'>and this is what I get. I differentiate it.</span>
  </p><p><span m='2101000'>I get omega out minus sine, sine of negative d plus
  phi,</span> <span m='2105000'>A cosine omega t plus phi equals VI cosine omega
  t.</span> </p><p><span m='2109000'>That might work. Now we get into the class
  six</span> <span m='2112000'>part of the class five. All class fives have a
  little</span> <span m='2116000'>bit of class six rapids. Remember, the rapids
  go up on</span> <span m='2120000'>an exponential scale so it like
  earthquakes.</span> </p><p><span m='2123000'>What I do now is expand out sine
  omega t plus phi,</span> <span m='2127000'>blah, blah, blah, it goes on and
  on.</span> </p><p><span m='2131000'>I could go on and on, but this is even
  tiring me.</span> </p><p><span m='2135000'>This can be made to work, but I am
  not sure I want to put</span> <span m='2141000'>all of us through this trig
  nightmare here.</span> </p><p><span m='2145000'>If I am really, really nasty I
  could give this</span> <span m='2150000'>to you as a homework assignment or
  something,</span> <span m='2154000'>but I am not that nasty so you won't see
  that.</span> </p><p><span m='2160000'>But if I go down this path it will get
  me to the answer,</span> <span m='2163000'>but I would have to soon negotiate
  class six,</span> <span m='2166000'>class seven rapids to get to where I
  want.</span> </p><p><span m='2169000'>So let me punt on it, let me start from
  scratch.</span> </p><p><span m='2172000'>I am at step two, let me start from
  scratch.</span> </p><p><span m='2175000'>Instead what I would like to do is
  let's get sneaky here.</span> </p><p><span m='2178000'>Rather than negotiating
  the class five rapids,</span> <span m='2181000'>what we can say is ah-ha, we
  can take our canoes and jump</span> <span m='2185000'>onto shore and run down
  and then get back onto the river.</span> </p><p><span m='2190000'>Let's do
  that. That is called the sneaky</span> <span m='2192000'>approach. So that all
  our friends who are</span> <span m='2194000'>behind us think we are
  negotiating the rapids,</span> <span m='2197000'>but what we are going to do
  is get sneaky and take the shore</span> <span m='2201000'>path. Let's get
  sneaky,</span> <span m='2202000'>just walk down the shore and see what is
  there.</span> </p><p><span m='2205000'>I want to do something completely weird
  here.</span> </p><p><span m='2207000'>I want to look at solving this equation
  through the shore</span> <span m='2211000'>method. S stands for shore or S
  stands</span> <span m='2213000'>for sneaky, whatever you want. What I am going
  to do is rather</span> <span m='2217000'>than trying to solve for VI cosine
  omega t.</span> </p><p><span m='2221000'>I am going to say let's try a
  different input all together.</span> </p><p><span m='2224000'>And you will
  understand why in a second.</span> </p><p><span m='2226000'>It's like I am the
  captain of my canoe and I tell my</span> <span m='2229000'>teammates, hey,
  let's not negotiate the rapids,</span> <span m='2232000'>let's go and explore
  the shore. Maybe down the shore we can</span> <span m='2235000'>find a path
  that gets us across to the other side more easily.</span> </p><p><span
  m='2239000'>So here is me and my colleagues carrying our canoe and
  getting</span> <span m='2242000'>onto shore and taking a sneaky path.</span>
  </p><p><span m='2244000'>This is not what I set out to solve.</span>
  </p><p><span m='2246000'>I don't know where this will lead me.</span>
  </p><p><span m='2250000'>But let's see where the shore path leads us.</span>
  </p><p><span m='2253000'>I want to try solving this equation Vie^st.</span>
  </p><p><span m='2256000'>S stands for shore or sneaky or whatever you
  want.</span> </p><p><span m='2260000'>I don't know where I am going, but let's
  see where this leads</span> <span m='2265000'>us. Let's explore.</span>
  </p><p><span m='2266000'>Make believe you are Columbus or something.</span>
  </p><p><span m='2270000'>I don't know. Let's use the usual techniques</span>
  <span m='2273000'>and see how this works out. Let's try a particular</span>
  <span m='2277000'>solution, Vpe^st. My input is Vie^st.</span> </p><p><span
  m='2281000'>I am trying to solve the circuit for a different input.</span>
  </p><p><span m='2286000'>And let me try solution Vpe^st and see if that works
  out</span> <span m='2291000'>nicely. I substitute Vpe^st into my</span> <span
  m='2295000'>equation here, so RCVpe^st blah blah blah.</span> </p><p><span
  m='2298000'>What I get here is Vie^st, Vpe^st stays the same,</span> <span
  m='2303000'>but here vP comes out, s comes out and e^st stays the</span> <span
  m='2308000'>same. That is nice property of</span> <span
  m='2311000'>exponentials. This is what I get.</span> </p><p><span
  m='2314000'>A really cool property of exponentials is that when I</span> <span
  m='2317000'>differentiate it I get the exponential back.</span> </p><p><span
  m='2321000'>Unlike a cosine I got a sine, and for a sine I got a
  cosine.</span> </p><p><span m='2325000'>Exponentials are very plain and
  simple, are straightforward.</span> </p><p><span m='2329000'>What you see is
  what you get. You differentiate it.</span> </p><p><span m='2333000'>You get
  the same thing, you get scaling vP,</span> <span m='2336000'>S and so on, and
  some scaling here.</span> </p><p><span m='2340000'>You get S scaling here, but
  the basic form stays the</span> <span m='2345000'>same. This is quite
  nice.</span> </p><p><span m='2347000'>I have e^st in all three places, so I
  can cancel those</span> <span m='2352000'>out and I get this expression. And I
  get this.</span> </p><p><span m='2357000'>Wow. So if I go down the shore I
  get</span> <span m='2361000'>some place fast. I don't know where I am
  yet,</span> <span m='2365000'>but whatever I did, it was easy.</span>
  </p><p><span m='2370000'>I am just exploring this path, down the shore
  path.</span> </p><p><span m='2373000'>I am making progress. I don't know where
  I have</span> <span m='2376000'>gotten yet. We will see where we got to
  in</span> <span m='2379000'>a second, but I got some place quickly,
  fast.</span> </p><p><span m='2383000'>I was able to solve for this input
  Vie^st and get this</span> <span m='2387000'>solution very quickly. So what
  happened here?</span> </p><p><span m='2390000'>I assumed the solution of the
  form Vpe^st, substituted it</span> <span m='2394000'>back, and found that if
  vP were equal to Vi/(1+sRC) then Vpe^st</span> <span m='2398000'>is a
  solution. What I have done here is that</span> <span m='2403000'>Vi/(1+sRC) is
  a particular solution to this equation for</span> <span m='2409000'>the input
  Vie^st. I put a box around it because</span> <span m='2414000'>this is
  important. This was easy.</span> </p><p><span m='2417000'>We went down the
  shore, and said let's try this other</span> <span m='2422000'>input. We made
  rapid progress on shore</span> <span m='2426000'>and I got some place. I don't
  know where I am yet.</span> </p><p><span m='2431000'>I got this. Let me pause
  here and let me</span> <span m='2434000'>give you the final answer. I am going
  to show you over the</span> <span m='2437000'>next five minutes that this is
  our answer.</span> </p><p><span m='2440000'>You are staring at the answer
  already.</span> </p><p><span m='2442000'>I am a party, I have taken a shore
  path and</span> <span m='2445000'>we have gotten some place. We see the river
  there,</span> <span m='2448000'>so it turns out we are exactly where we want
  to be,</span> <span m='2451000'>just after the rapids. All I have to do now is
  get my</span> <span m='2454000'>colleagues into the river with myself in the
  canoe and we are</span> <span m='2458000'>done. You don't know that
  yet.</span> </p><p><span m='2461000'>My colleagues and I are sitting on the
  shore looking at the</span> <span m='2464000'>river. We've gotten some
  place.</span> </p><p><span m='2465000'>There are no rapids there. We have
  gotten some place.</span> </p><p><span m='2468000'>We don't quite know is this
  just after the rapids or not.</span> </p><p><span m='2471000'>We don't know
  yet, but I got there very quickly.</span> </p><p><span m='2474000'>And I will
  tell you right now, that is the place we wanted to</span> <span m='2477000'>go
  to. The next five view graphs I am</span> <span m='2479000'>going to blast
  through. There is going to be more pain</span> <span m='2481000'>and agony to
  show you why that is the case.</span> </p><p><span m='2484000'>It's me
  thinking I am Columbus and proving to my colleagues</span> <span
  m='2487000'>that this is where we want to be.</span> </p><p><span
  m='2490000'>And pulling out my sextant, and the compasses and so on</span>
  <span m='2493000'>that cartographers and people use to prove to my
  colleagues</span> <span m='2497000'>that this is where I want to be. This is
  the answer.</span> </p><p><span m='2501000'>The next five view graphs will be
  demonstrating that this is</span> <span m='2505000'>indeed the answer, or
  close enough to the answer</span> <span m='2508000'>that we will be satisfied.
  Isn't this spectacular?</span> </p><p><span m='2511000'>I am going to show you
  in about five minutes that this gives us</span> <span m='2516000'>all the
  information we need to know to compute the sinusoidal</span> <span
  m='2520000'>steady-state response to this differential equation.</span>
  </p><p><span m='2525000'>Let me write that down here just so you know.</span>
  </p><p><span m='2541000'>Just so you remember. I am going to put a marker
  on</span> <span m='2544000'>the shore that says this is where we are right
  now.</span> </p><p><span m='2548000'>Now let me prove to you. As I just
  said,</span> <span m='2551000'>vPS is Vi, it's this stuff here multiplied by
  e^st is the</span> <span m='2559000'>solution to Vie^st. This guy here is a
  solution for</span> <span m='2565000'>Vie^st and vP is simply the coefficient
  that multiplies</span> <span m='2572000'>e^st. Similarly, if I substitute
  S</span> <span m='2576000'>equals j omega. I told you five view graphs
  of</span> <span m='2582000'>more hell, but I am just going to prove to you
  that this is it.</span> </p><p><span m='2587000'>I am substituting S equals j
  omega.</span> </p><p><span m='2590000'>This is Columbus giving a big speech at
  the end convincing his</span> <span m='2595000'>colleagues that we are where
  we want to be.</span> </p><p><span m='2598000'>I substitute j omega for S and
  this is what I get.</span> </p><p><span m='2602000'>This is a solution for e
  to the st, and so this is a solution</span> <span m='2607000'>for e to the j
  omega t. And let me mark this for you as</span> <span m='2613000'>something to
  remember. Vi/(1+j omega RC).</span> </p><p><span m='2617000'>In terms of that,
  I am substituting j omega for</span> <span m='2623000'>S. And this is a
  complex number.</span> </p><p><span m='2626000'>It is a complex amplitude. It
  is a complex number because</span> <span m='2632000'>of j here, and it
  multiplies e to the j omega t.</span> </p><p><span m='2638000'>Just keep this
  in mind. So that was easy.</span> </p><p><span m='2643000'>The steps were
  easy. I am still proving to you that</span> <span m='2648000'>this is where we
  want to be. Now let me draw the connection</span> <span m='2653000'>back to
  vP. And the first fact was that</span> <span m='2657000'>finding the response
  to Vie^(j omega t) was easy.</span> </p><p><span m='2661000'>We know that.
  Second was the following</span> <span m='2665000'>observation that Vi cosine
  omega t is simply the real part of</span> <span m='2671000'>this number here.
  So Vi cosine omega t is simply</span> <span m='2677000'>the real part of
  Vie^(j omega t) from the Euler relation.</span> </p><p><span m='2682000'>So
  cosine omega t is simply the real part of this guy.</span> </p><p><span
  m='2688000'>Light bulbs beginning to go off?</span> </p><p><span
  m='2691000'>The first fast was that finding the response to Vie^(j omega
  t)</span> <span m='2698000'>was easy. And the response was this,</span> <span
  m='2702000'>right? Times e to the j omega t.</span> </p><p><span
  m='2705000'>That was easy. All right.</span> </p><p><span m='2707000'>And the
  second part is that the real part of this is Vi cosine</span> <span
  m='2712000'>omega t was our input. Draw the connection between two</span>
  <span m='2717000'>steps. Finding the response to Vie^(j</span> <span
  m='2721000'>omega t) was easy. The real part of that was the</span> <span
  m='2725000'>input we cared about. Are light bulbs going off?</span>
  </p><p><span m='2731000'>Let me draw you a little picture here to show you
  what is</span> <span m='2735000'>happening. Response to vI is vP.</span>
  </p><p><span m='2737000'>It's the particular response we are looking
  for.</span> </p><p><span m='2741000'>Remember the red square? But we threw in
  a sneaky input</span> <span m='2746000'>vIS and we formed the response vPS to
  that.</span> </p><p><span m='2749000'>This step was easy. This step was
  hard.</span> </p><p><span m='2752000'>vI to vP was hard, trig
  nightmare,</span> <span m='2755000'>remember? But vIS to vPS was easy.</span>
  </p><p><span m='2759000'>It was a simple Vpe^st thing. We also know that the
  real part</span> <span m='2765000'>of vIS is vI. The real part of this is
  simply</span> <span m='2770000'>vI. If you have a real circuit,</span> <span
  m='2774000'>if you have a real linear circuit, for a linear circuit,</span>
  <span m='2780000'>if the real part of this gives me vI then the real part of
  the</span> <span m='2787000'>solution should give me vP. So computing vPS was
  easy.</span> </p><p><span m='2793000'>If I take the real part of this, I take
  the corresponding</span> <span m='2797000'>real part of this. This is sort of
  an inverse</span> <span m='2800000'>superposition argument.
  Superposition,</span> <span m='2803000'>I said, take the response for A, take
  the response for B,</span> <span m='2807000'>add them up and you get the
  response for A plus B.</span> </p><p><span m='2811000'>Here what we are saying
  is that get the response to A plus B,</span> <span m='2815000'>or to A plus jB
  and the real part of the input will produce</span> <span m='2819000'>the
  response given by the real part of the output.</span> </p><p><span
  m='2824000'>So this is an inverse superposition argument.</span> </p><p><span
  m='2827000'>If it is a linear circuit, then if vI is the real part of</span>
  <span m='2830000'>this sneaky input then I find the response to the sneaky
  input</span> <span m='2835000'>and take its real part I should get vP.</span>
  </p><p><span m='2837000'>Here I am, Columbus, staring down at the entrance
  to</span> <span m='2841000'>this part of the river. I just proved to my
  colleagues</span> <span m='2844000'>that all we have to do is take the real
  part of what we have.</span> </p><p><span m='2850000'>We can just jump right
  back into the river and get back to</span> <span m='2854000'>vP. And what I am
  going to do next</span> <span m='2856000'>is just grind through the math and
  just show you that.</span> </p><p><span m='2860000'>I will just blast through
  it. It is not important,</span> <span m='2864000'>but you have it in your
  notes. I am telling you that vP is</span> <span m='2868000'>simply the real
  part of the sneaky output.</span> </p><p><span m='2871000'>And I take the real
  part of vP e to the j omega t.</span> </p><p><span m='2874000'>And I take the
  real part. And just a bunch of math here.</span> </p><p><span m='2880000'>I am
  just taking the real part and doing a bunch of complex</span> <span
  m='2884000'>math. Remember vP was given by this</span> <span
  m='2886000'>quantity here. And I take the real part and I</span> <span
  m='2889000'>end up with vP is simply this quantity multiplied by cosine</span>
  <span m='2893000'>omega t plus phi, where phi is given by is given</span>
  <span m='2896000'>by tan inverse of omega RC, and this is the
  coefficient</span> <span m='2900000'>multiplying the cosine. So by taking the
  sneaky path</span> <span m='2904000'>and then taking the real part of that
  output answer,</span> <span m='2907000'>I was able to very quickly get to
  where I wanted to be.</span> </p><p><span m='2913000'>So from here to here it
  is only math.</span> </p><p><span m='2915000'>Recall, that vP, the thing in
  the red was what</span> <span m='2918000'>we set out to find out, which was
  the particular</span> <span m='2921000'>response to VI cosine of omega
  t.</span> </p><p><span m='2923000'>And remember that two grunge is all of this
  stuff.</span> </p><p><span m='2926000'>I am going to blast through two or
  three more view graphs that</span> <span m='2930000'>just give you more
  insight and more math, nothing particular.</span> </p><p><span m='2934000'>And
  remember to solve the equation we have to find a</span> <span
  m='2937000'>homogenous solution, too.</span> </p><p><span m='2940000'>But
  recall that the homogenous solution for an RC circuit is of</span> <span
  m='2944000'>the form Ae^-t/RC. This means that as time becomes</span> <span
  m='2947000'>very large this part goes to zero.</span> </p><p><span
  m='2950000'>As time becomes large in the steady state,</span> <span
  m='2953000'>remember I care about the steady state?</span> </p><p><span
  m='2955000'>This goes to zero. I don't care about the</span> <span
  m='2958000'>homogenous solution. Isn't that fantastic?</span> </p><p><span
  m='2961000'>Most the circuits we will deal with, except for purely</span>
  <span m='2965000'>oscillatory ones, the homogenous part dies away.</span>
  </p><p><span m='2970000'>You have something like e to the -t whatever.</span>
  </p><p><span m='2973000'>It just dies away. It's gone.</span> </p><p><span
  m='2975000'>So the total solution has vH going away.</span> </p><p><span
  m='2978000'>And what I end up with is just vP.</span> </p><p><span
  m='2980000'>My total solution in the steady state is simply vP.</span>
  </p><p><span m='2984000'>And A is given by this that we just
  calculated.</span> </p><p><span m='2988000'>I just have a bunch more insight
  that I talk about that</span> <span m='2992000'>you can look through in your
  notes.</span> </p><p><span m='2995000'>And I just want to show you a very
  quick summary.</span> </p><p><span m='3000000'>In summary, what we have is we
  computed vP.</span> </p><p><span m='3004000'>It was a complex coefficient. And
  all these steps,</span> <span m='3008000'>2 grunge, 3 and 4 were a waste of
  time.</span> </p><p><span m='3012000'>And what I showed you was that for the
  input VI the coefficient</span> <span m='3018000'>vP was complex. And I can
  take the ratio and</span> <span m='3023000'>represent it in this manner as
  well.</span> </p><p><span m='3026000'>And from vP, I can then compute
  the</span> <span m='3029000'>multiplier for the cosine as follows.</span>
  </p><p><span m='3035000'>I divide by vP here. Remember the cosine was</span>
  <span m='3038000'>multiplied by, in the mathematical step that I</span> <span
  m='3041000'>did, VI divided one plus, this stuff here,</span> <span
  m='3044000'>so I could get the magnitude and phase of the transfer</span>
  <span m='3048000'>function of this circuit in the following manner.</span>
  </p><p><span m='3051000'>And to wrap up very quickly, I am going to cover this
  again</span> <span m='3055000'>the next time and show you a magnitude
  plot.</span> </p><p><span m='3060000'>Notice here that if I plot Vp/Vi.</span>
  </p><p><span m='3062000'>Remember this was Vp here. That's the answer.</span>
  </p><p><span m='3066000'>The magnitude looks like this. On a log scale Vp/Vi
  for small</span> <span m='3072000'>frequencies omega is at one, but as omega
  increases Vp/Vi</span> <span m='3077000'>keeps decreasing. That is the
  output.</span> </p><p><span m='3080000'>Remember Vp was the amplitude of the
  output?</span> </p><p><span m='3084000'>That keeps decreasing. And this is the
  reason why.</span> </p><p><span m='3090000'>As I increase the frequency, the
  amplitude of my output</span> <span m='3094000'>cosine kept decreasing. I
  could also plot the phase for</span> <span m='3099000'>you. And the
  phase,</span> <span m='3101000'>in the same manner as omega increased, my
  phase also kept</span> <span m='3106000'>shifting from zero initially to pi/2
  finally.</span> </p><p><span m='3110000'>Let me stop here and start with this
  the next time and revisit</span> <span m='3115000'>this. Unfortunately,</span>
  <span m='3117000'>I won't have time for the demo. I will show it to you
  next</span> <span m='3122000'>time.</span> </p>
uid: d2c6727517401c7ee31dd7e6be5a1185
type: courses
layout: video
---
