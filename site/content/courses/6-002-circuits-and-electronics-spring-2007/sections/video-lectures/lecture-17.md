---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> The impedance model</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec17.jpg
    parent_uid: 1f5322b816e498b4c64e420083745801
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-17/thumb_lec17.jpg
    title: thumb_lec17.jpg
    type: null
    uid: bca670fb8baad65c3e349728b715ae28
  - id: Video-YouTube-Stream
    media_location: Km9YIdkc2Oo
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Video-YouTube-Stream
    type: Video
    uid: eeeedaf26d9231cd4e1c198dfe5d1dc5
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Km9YIdkc2Oo/default.jpg'
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 377c501124c43e74dca0e3fb9f3b8233
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Video-iTunes U-MP4
    type: Video
    uid: d3a7457888cfe22d55422b35339e29c6
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-06nov2003-220k.mp4
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1e3ebbe2cacfa3aabe5c2e11f55f11c8
  - id: Thumbnail-OCW-JPG
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 5dce80b53a35eeab9931b249b8b4e35b
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Km9YIdkc2Oo
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e77472593f78afb1774afbd1a534c504
  - id: Km9YIdkc2Oo.srt
    parent_uid: 1f5322b816e498b4c64e420083745801
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-17/Km9YIdkc2Oo.srt
    title: 3play caption file
    type: null
    uid: ae36c1ef70504797c1aba7c2c1437b91
  - id: Km9YIdkc2Oo.pdf
    parent_uid: 1f5322b816e498b4c64e420083745801
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-17/Km9YIdkc2Oo.pdf
    title: 3play pdf file
    type: null
    uid: 254c07711d0d0afbe138b49944c36adb
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: fd77c4fb30006197621f4a6c9c2a4f9f
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1f5322b816e498b4c64e420083745801
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4d51ee0a57d09fafa53049f43d39b48f
inline_embed_id: '38829465lecture17:theimpedancemodel60386686'
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/66adf4d4611a57b949efa1b00a842a46">PDF</a>)<br />
  Demonstrations: Displays the transfer function of RC lowpass and highpass (<a
  target="_blank" title="Open in a new window."
  href="./resolveuid/b6bc10372b60f151e845da69f106cb3d">PDF</a>)<br />
  Demonstrations: Displays the transfer function of an RLC bandpass (<a
  target="_blank" title="Open in a new window."
  href="./resolveuid/1e0f2c883870fc08a78ecfee1c5ef673">PDF</a>)</p>
short_url: lecture-17
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-17
title: 'Lecture 17: The Impedance Model'
transcript: >-
  <p><span m='10000'>Good morning.</span> <span m='19000'>All right. Today we
  are going to take a</span> <span m='22000'>fresh look at some of the stuff we
  covered in the last two</span> <span m='28000'>lectures. And the graph I want
  you to</span> <span m='32000'>keep in mind as we go through this lecture in
  terms of what to</span> <span m='37000'>expect. This was time.</span> <span
  m='38000'>And last Tuesday's lecture we covered some stuff.</span> <span
  m='42000'>I talked about a method for the sinusoidal response which was</span>
  <span m='47000'>agony, I warned you it will be agony, and then towards the
  end</span> <span m='52000'>I showed you another method that was quite a bit
  easier but still</span> <span m='57000'>pretty hard. And I promised you that
  today</span> <span m='62000'>there will be a new method which is going to be
  so easy ,</span> <span m='67000'>actually almost trite. Just imagine.</span>
  <span m='70000'>I am going to make a statement right now that I think you
  will</span> <span m='75000'>all find hard to believe. What I am going to say
  is just</span> <span m='80000'>imagine your RLC circuit, your resistor,</span>
  <span m='83000'>inductor and capacitor, a parallel form or series form.</span>
  <span m='89000'>Imagine that you could write down the characteristic
  equation</span> <span m='93000'>for that by observation in 30 seconds or
  less.</span> <span m='96000'>Just imagine that. By observation,</span> <span
  m='98000'>boom, write down the characteristic equation for</span> <span
  m='102000'>virtually any RLC circuit or RC circuit or whatever.</span> <span
  m='105000'>And we all know that once you have the characteristic
  equation</span> <span m='110000'>you could very easily go from there to the
  time domain</span> <span m='114000'>response intuitively or to the sinusoidal
  steady-state</span> <span m='117000'>response, too. So just keep that thought
  in</span> <span m='122000'>mind. Imagine 30 seconds.</span> <span
  m='124000'>And that is what you should expect in today's lecture.</span> <span
  m='129000'>Students often ask me, if this stuff is actually so</span> <span
  m='134000'>easy why do you take us through this tortuous path?</span> <span
  m='139000'>Are we just mean? Do we just want you show you</span> <span
  m='143000'>how hard things are and then show the easy way?</span> <span
  m='149000'>I have argued with myself every year as to whether to just
  go</span> <span m='153000'>ahead and give the easy path and that's it.</span>
  <span m='155000'>But I think the reason we cover the basic foundations is that
  it</span> <span m='160000'>gives you a level of insight that you would not
  have</span> <span m='163000'>otherwise gotten if I directly jumped into the
  easy method.</span> <span m='167000'>So you need to understand the foundations
  and you need to have</span> <span m='171000'>seen that at least once. And
  second, once you do</span> <span m='174000'>something the hard way, you
  appreciate all the more the</span> <span m='178000'>easy method. All
  right.</span> <span m='182000'>Today we cover what is called "The Impedance
  Model".</span> <span m='202000'>First let me do a review just because of the
  large amount of</span> <span m='205000'>content in the last two
  lectures.</span> <span m='207000'>I did them using view graphs. I usually
  don't like to do</span> <span m='212000'>that, but even then it was quite
  rushed.</span> <span m='216000'>So let me quickly summarize for you kind of
  the main points.</span> <span m='221000'>We have been looking at, on Tuesday,
  the sinusoidal --</span> <span m='242000'>--looking at the sinusoidal steady
  state response.</span> <span m='247000'>Also fondly denoted as SSS. And the
  readings for this were</span> <span m='253000'>Chapters 14.1 and 14.2. what we
  said was if you took</span> <span m='258000'>this example circuit and we fed
  as input cosine of omega t,</span> <span m='265000'>we have an R and a C, and
  let's say we cared about</span> <span m='270000'>the output response and we
  cared about the capacitor voltage.</span> <span m='278000'>What we talked
  about was focused on the sinusoidal</span> <span m='283000'>steady-state
  response. And what that meant was first</span> <span m='289000'>of all focus
  on steady-state. In other words,</span> <span m='295000'>just to capture the
  steady-state behavior when t</span> <span m='300000'>goes to infinity after a
  long period of time.</span> <span m='307000'>And for most of the circuits that
  we consider,</span> <span m='310000'>because of the R or presence of any
  resistance,</span> <span m='314000'>the homogenous response usually would die
  out because the</span> <span m='319000'>homogenous response is usually of the
  form minus t by tau.</span> <span m='323000'>And as t goes to infinity this
  term tends to go to zero.</span> <span m='329000'>We are just looking at the
  steady-state.</span> <span m='332000'>And therefore, because of the circuits
  we</span> <span m='336000'>looked at, we can ignore the homogenous
  response.</span> <span m='341000'>All we are left to do is to find the
  particular response to</span> <span m='346000'>sinusoids of this form. And
  second was focus on</span> <span m='350000'>sinusoids. We said the reason for
  this was</span> <span m='354000'>that, let's say we did not care
  particularly</span> <span m='360000'>What happened when I just turned on my
  amplifier.</span> <span m='363000'>I just turned on my amplifier, often times
  you see some</span> <span m='367000'>distorted sound coming out for a few
  seconds and then hear a much</span> <span m='371000'>clearer sound. And that
  initial part is due to</span> <span m='374000'>the transient response. And
  let's say we don't care</span> <span m='378000'>about that. We care about the
  steady state.</span> <span m='381000'>Second we focus on sinusoids because
  based on the Fourier</span> <span m='385000'>series experience that you had
  previously, we can represent</span> <span m='389000'>repeated signals as a sum
  of sines.</span> <span m='393000'>And therefore it is important to understand
  the behavior of</span> <span m='398000'>these circuits when the input is a
  sinusoid.</span> <span m='402000'>And what was important was this introduced a
  new way of looking</span> <span m='408000'>at circuits, and that was the
  frequency viewpoint.</span> <span m='412000'>When we looked at transient
  responses, we plotted response</span> <span m='418000'>as a function of time.
  And when we look at sinusoidal</span> <span m='422000'>steady-state, it
  becomes interesting to plot</span> <span m='425000'>the response as a function
  of the frequency,</span> <span m='427000'>a function of omega.</span> <span
  m='439000'>What I will do is draw a little chart for you to sort of</span>
  <span m='443000'>visualize the various processes we have been going
  through.</span> <span m='447000'>We can liken obtaining the sinusoidal
  steady-state response</span> <span m='452000'>to following these steps. Here
  is my input.</span> <span m='456000'>What I did as a first step was fed my
  input to a usual circuit</span> <span m='462000'>model. My elements were
  lumped</span> <span m='465000'>elements, built the circuit and wrote down the
  VI relationship</span> <span m='472000'>for the element. As a second step I
  set up the</span> <span m='476000'>differential equation.</span> <span
  m='485000'>This was the first of four steps, set up a differential</span>
  <span m='490000'>equation. And then the path that I took</span> <span
  m='494000'>first was fraught with real nightmarish trig.</span> <span
  m='506000'>By the end of the day it would still yield an answer.</span> <span
  m='510000'>It could be a nightmare. But I would get something</span> <span
  m='514000'>cosine omega t plus something, some phase.</span> <span
  m='517000'>I could grunge through the trig.</span> <span m='519000'>And I gave
  up halfway in class here, but you could grunge</span> <span m='524000'>through
  it if you would like. And you would get the answer to</span> <span
  m='529000'>be some sinusoid with some amplitude and some phase.</span> <span
  m='533000'>So Vi cosine omega t would produce the response that was</span>
  <span m='537000'>something cosine omega t plus some phase.</span> <span
  m='542000'>We said this was too painful so let's punt this.</span> <span
  m='546000'>Instead, what we said we would do is take a detour,</span> <span
  m='550000'>take an easier path. And the easier path looked like</span> <span
  m='555000'>this. I said let's sneak in --</span> <span m='568000'>-- Vie^(j
  omega t) drive. That is just imagine,</span> <span m='571000'>do the math as
  if you had fed in not a Vi cosine omega t but a</span> <span m='576000'>Vie^(j
  omega t). And from Euler's relation you</span> <span m='580000'>know that the
  real part is Vi cosine omega t.</span> <span m='583000'>So we said that I am
  going to sneak in this thing,</span> <span m='587000'>find the response and
  just take the real part of that because</span> <span m='592000'>the real part
  of the input gives me this.</span> <span m='595000'>So this is my "sneaky
  path". And what I did there,</span> <span m='600000'>as soon as we fed in the
  e^(j omega t), because of the</span> <span m='605000'>property of
  exponentials, the e^(j omega t) cancelled out</span> <span m='610000'>in my
  equation. And what was left was some</span> <span m='614000'>fairly simple
  complex algebra. And at the end of the day,</span> <span m='619000'>after I
  grunged through some fairly simple complex algebra,</span> <span m='624000'>I
  ended up with some response that looked like this.</span> <span
  m='630000'>Vpe^(j omega t). What I would find is that for</span> <span
  m='635000'>the input Vie^(j omega t), I would get a response Vpe^(j</span>
  <span m='642000'>omega t). And then what I said we would</span> <span
  m='647000'>do is take the real part. Why take the real part?</span> <span
  m='653000'>Because this is a fake, a sneaky input.</span> <span m='659000'>The
  input I really care about is the real part of the sneaky</span> <span
  m='663000'>input. So this is my sneaky output.</span> <span m='666000'>And
  what I care about is the real part of the sneaky output.</span> <span
  m='670000'>That is sort of the inverse superposition argument that I</span>
  <span m='674000'>made on Tuesday that if what I care about is the real part
  of</span> <span m='679000'>this input, then I just take the real part and get
  the output</span> <span m='683000'>that I care about. So I take the real
  part.</span> <span m='688000'>Notice that Vp here, in the examples we
  did,</span> <span m='693000'>we did an RC example. The Vp here was a
  complex</span> <span m='698000'>number. So I could represent that</span> <span
  m='702000'>complex number as, in many ways.</span> <span m='705000'>This is
  e^(j omega t). I could represent Vp in an</span> <span m='711000'>amplitude,
  as a phasor, actually polar coordinates.</span> <span m='717000'>I can say
  that the equivalent to Vpe to the j angle Vp.</span> <span m='725000'>Vp is a
  complex number. If you look at the complex</span> <span m='729000'>appendix in
  your course notes, I can represent a complex</span> <span m='734000'>number as
  an amplitude multiplied by e raised to j</span> <span m='739000'>times some
  phase. It's simple complex algebra.</span> <span m='743000'>And then what I
  could do here is take the real part of that.</span> <span m='750000'>And when
  I took the real part of that what came about was that</span> <span
  m='756000'>this was simply Vp. Notice that the angle Vp goes</span> <span
  m='762000'>in here so it becomes j times omega t plus angle Vp.</span> <span
  m='767000'>It is Vp amplitude times e raised to j omega t plus j angle</span>
  <span m='774000'>Vp. And the real part of that is</span> <span
  m='777000'>simply Vp cosine of that stuff. What I end up getting here
  is</span> <span m='785000'>Vp cosine omega t plus Vp. The cool thing to notice
  was</span> <span m='791000'>that once I found out this response here,</span>
  <span m='795000'>I could immediately write down the output based on Vp.</span>
  <span m='801000'>In other words, once I had Vp,</span> <span m='804000'>I
  could stop right there in my math.</span> <span m='810000'>I got Vp very
  quickly here. This step produced Vp very</span> <span m='814000'>quickly,
  after two algebraic steps.</span> <span m='817000'>And then from here I could
  directly write down the answer</span> <span m='822000'>as homogenous of Vp
  cosine omega t plus angle Vp.</span> <span m='826000'>Boom, right there. So
  this was a much shorter</span> <span m='830000'>path. And here I just
  described to</span> <span m='833000'>you how this yields an expression for Vp
  and angle Vp.</span> <span m='839000'>And for our example Vp was 1/(1+j omega
  RC).</span> <span m='843000'>And we often times write a shorthand notation
  1+sRC,</span> <span m='847000'>where S is simply j omega. We commonly jump
  back and forth</span> <span m='853000'>between the shorthand notation S and j
  omega.</span> <span m='857000'>S has some other fundamental, has another
  fundamental</span> <span m='862000'>significance you will learn about in
  future courses,</span> <span m='867000'>but for now S is simply a short form
  for j omega.</span> <span m='873000'>This was the path that we took. There is
  a hard path and an</span> <span m='877000'>easier path. Today I am going to
  claim that</span> <span m='881000'>even this was too hard. There is an even
  easier path.</span> <span m='885000'>And today what I am going to show you is
  that from here we</span> <span m='889000'>are going to take one step and get
  here.</span> <span m='892000'>I am going to show you today that we won't do
  this,</span> <span m='896000'>we won't do this, not this, not this,</span>
  <span m='899000'>none of this. One step and then we are going</span> <span
  m='905000'>to get the answer. So let's do that.</span> <span m='919000'>Before
  we jump into the impedance method and get into</span> <span m='922000'>doing
  that, I just would like to plot for you this function here</span> <span
  m='925000'>just so we can understand a little bit better exactly what</span>
  <span m='928000'>is going on. As I mentioned to you,</span> <span
  m='933000'>the output vO for our circuit there was simply Vp cosine of</span>
  <span m='942000'>omega T plus angle Vp. Oh, that's Vp so this one</span> <span
  m='949000'>should be Vi here. I am showing you Vp so there is</span> <span
  m='956000'>a Vi in there. Vp/Vi=1/(1+j omega RC).</span> <span m='962000'>This
  is a complex number, and it is simply a number that</span> <span
  m='968000'>when multiplied with Vi gives me the output.</span> <span
  m='973000'>This is also called a transfer function and represented as
  H(j</span> <span m='980000'>omega). This guy is a transfer</span> <span
  m='983000'>function, much like the gain of my amplifier.</span> <span
  m='990000'>Which when multiplied by the input to get me the output.</span>
  <span m='994000'>This guy is a complex multiplier which when multiplied</span>
  <span m='999000'>by Vi gives me Vp. And as such we call it a</span> <span
  m='1003000'>transfer function H(j omega). And we can plot this
  function.</span> <span m='1008000'>Notice that this a function of
  omega.</span> <span m='1012000'>Remember we are taking the frequency domain
  view,</span> <span m='1016000'>so where has time vanished? Remember that we
  are taking the</span> <span m='1022000'>steady state view. So we are saying in
  the steady</span> <span m='1025000'>state, if I wait long enough this is how
  my circuit is going</span> <span m='1029000'>to behave, this is how a circuit
  is going to behave.</span> <span m='1033000'>And the transient responses have
  died away and I have time</span> <span m='1037000'>in my output here so my
  output is a cosine.</span> <span m='1040000'>But that in itself is not very
  interesting.</span> <span m='1043000'>It is a cosine of some amplitude and has
  some phase.</span> <span m='1048000'>What we will plot is we are going to plot
  this property</span> <span m='1052000'>here, Vp as a function of the
  frequency.</span> <span m='1056000'>Vp is frequency dependent. As an
  example,</span> <span m='1059000'>I could plot the absolute value of Vp/Vi,
  the modulus of that</span> <span m='1065000'>versus omega. And notice that
  when omega is</span> <span m='1069000'>zero again intuitive ways of plotting
  this is to look at the</span> <span m='1074000'>value at zero and look at the
  value at large omega.</span> <span m='1080000'>For small omega, omega goes to
  zero this is one,</span> <span m='1084000'>so it starts off here. And when
  omega is very large</span> <span m='1089000'>then it is much bigger than one
  here, so this goes down.</span> <span m='1095000'>Far away this one looks like
  1/omega RC.</span> <span m='1098000'>And this function, assuming I have linear
  scales</span> <span m='1103000'>on my X and Y axes looks like this.</span>
  <span m='1108000'>We also commonly plot this using log-log scales.</span>
  <span m='1111000'>And when you do log-log scales you get a straight line
  here,</span> <span m='1116000'>and then you actually get a straight line of
  slope minus one</span> <span m='1121000'>because the log of this gives you a
  line with a constant</span> <span m='1125000'>slope, it's a slope of negative
  one so it becomes a straight</span> <span m='1130000'>line going down. The
  other interesting thing to</span> <span m='1134000'>realize is that this
  magnitude is simply one by one plus omega</span> <span m='1139000'>squared R
  squared C squared, the square root of this.</span> <span m='1145000'>That's
  the magnitude here. And notice when omega equals</span> <span
  m='1153000'>1/RC, this thing, the denominator becomes one by</span> <span
  m='1160000'>square root of 2. Somewhere here when omega</span> <span
  m='1167000'>equals 1/RC The output is one by square</span> <span
  m='1172000'>root 2 times the input. It's an interesting point.</span> <span
  m='1176000'>And this is called the "break frequency".</span> <span
  m='1179000'>You can view it as a frequency where I am getting this</span>
  <span m='1184000'>transition from one to a lower value, and it is where
  the</span> <span m='1189000'>output is one by square root two times the value
  of the input.</span> <span m='1194000'>Now you can think back on the demo we
  showed you earlier.</span> <span m='1200000'>And in the demo remember that as
  I increased the frequency of</span> <span m='1204000'>my input sinusoid my
  output kept becoming smaller and smaller and</span> <span m='1208000'>smaller.
  And you notice that you can see</span> <span m='1211000'>this dying out or
  decaying of the amplitude as I increase my</span> <span m='1215000'>omega. Let
  me go back.</span> <span m='1216000'>What you have done is that, we're going
  to apply a bunch of</span> <span m='1220000'>sinusoids to the same circuit and
  plot the frequency response,</span> <span m='1224000'>the ratio of the output
  versus input as a function of</span> <span m='1228000'>frequency. And kept
  applying a variety of</span> <span m='1232000'>frequencies. So you can listen
  to the</span> <span m='1235000'>frequencies as they go by, and we will plot
  the amplitude</span> <span m='1239000'>up on the screen for you. Just for fun
  we are going to</span> <span m='1243000'>play frequencies between, say, 10
  hertz and 20 kilohertz.</span> <span m='1248000'>It will be fun for you to
  figure out at what point you</span> <span m='1252000'>stop hearing the
  frequencies. We are going to play from 10</span> <span m='1257000'>hertz to 20
  kilohertz. And figure out where your ears</span> <span m='1261000'>cut out.
  That will tell you what the</span> <span m='1263000'>break frequency of your
  ear is.</span> <span m='1271000'>You can see the amplitude being
  articulated.</span> <span m='1276000'>The bottom figure is the phase. This is
  the frequency axis.</span> <span m='1283000'>This is the amplitude, log-log
  scales.</span> <span m='1320000'>I am not sure about you but I cannot hear
  anymore.</span> <span m='1324000'>If you bring your canine friends to class it
  is quite</span> <span m='1329000'>possible that they would go berserk
  somewhere here.</span> <span m='1334000'>As I promised you, when I plot this
  on a log-log</span> <span m='1338000'>scale I get a straight line here and a
  straight line out there as</span> <span m='1344000'>well and the bottom line
  gives you the phase.</span> <span m='1350000'>Now, what you can also do is you
  can also go to Websim.</span> <span m='1354000'>Websim is now linked on your
  course homepage.</span> <span m='1357000'>You can go to Websim and you can
  play with various L and C</span> <span m='1361000'>and R values. And if you
  plot frequency</span> <span m='1364000'>response, if you click on the
  frequency response button,</span> <span m='1368000'>boom, it will give you
  frequency responses for your</span> <span m='1372000'>circuit that look
  exactly like that.</span> <span m='1375000'>You can go and play around with
  that.</span> <span m='1378000'>Thank you. All right.</span> <span
  m='1381000'>As the next step I promised to show you an easier path.</span>
  <span m='1388000'>And let's build some insight.</span> <span m='1398000'>Is
  there a simpler way to get where we would like to get?</span> <span
  m='1403000'>In particular, is there a simpler way to get</span> <span
  m='1407000'>Vp? Let's focus on Vp.</span> <span m='1410000'>Why Vp? Because
  remember Vp was the</span> <span m='1413000'>complex amplitude of e to the j
  omega t.</span> <span m='1417000'>And once I know Vp then I know this
  expression here.</span> <span m='1423000'>Also notice that this here, the
  denominator is simply the</span> <span m='1429000'>characteristic equation
  for, I wonder how many of you</span> <span m='1435000'>noticed it, is simply
  the characteristic equation for the</span> <span m='1441000'>RC circuit. If I
  can write down Vp,</span> <span m='1445000'>I can write down the
  characteristic equation,</span> <span m='1448000'>it will be in the
  denominator. I can also write down the</span> <span m='1452000'>frequency
  response very easily by taking the magnitude and</span> <span
  m='1456000'>phase of Vp. So Vp has all the information</span> <span
  m='1458000'>humankind needs for those circuits.</span> <span m='1461000'>Is
  there a simpler way to get Vp?</span> <span m='1463000'>To bring some insight,
  let's go ahead and write down</span> <span m='1466000'>--</span> <span
  m='1473000'>Let's stare at this for a while longer and see if light bulbs
  go</span> <span m='1480000'>off in our minds. Of course, I could write
  this</span> <span m='1486000'>as Vi/(1+sRC). I just replaced the
  shorthand</span> <span m='1491000'>notation for a j omega. And I simply divide
  by SC</span> <span m='1497000'>throughout. So I get Vi times,</span> <span
  m='1502000'>I simply divide by SC throughout.</span> <span m='1507000'>Here is
  Vi. I have one by SC,</span> <span m='1511000'>one by SC plus R. Light bulbs
  beginning to go</span> <span m='1517000'>off?</span> <span m='1525000'>The
  form we have here is 1/SC, some function of my capacitance</span> <span
  m='1531000'>divided by something connected to my capacitance plus R.</span>
  <span m='1537000'>This is Vi multiplied by something connected to</span> <span
  m='1541000'>capacitance divided by something connected to capacitance plus
  R.</span> <span m='1548000'>And remember your circuit.</span> <span
  m='1560000'>What is that reminiscent of? What does that remind you of?</span>
  <span m='1564000'>Voltage divider? Hmm.</span> <span m='1566000'>There is some
  voltage divider thing going on here.</span> <span m='1571000'>I just cannot
  quite pin it. It is something about the</span> <span m='1575000'>capacitor,
  capacitor plus booster, some voltage divider</span> <span
  m='1580000'>thingamajig happening here. We will try to figure that out.</span>
  <span m='1585000'>What I will do is replace those terms with something called
  Zc.</span> <span m='1592000'>Zc plus Zr. If I can find out the Zr and
  Zc</span> <span m='1597000'>somehow, I can write down the Vp by inspection by
  the voltage</span> <span m='1604000'>divider action, by some generalization of
  the</span> <span m='1609000'>good old Ohm's law that I know about.</span>
  <span m='1613000'>Let's proceed further and see if we can make some kind of
  a</span> <span m='1620000'>connection between this and this.</span> <span
  m='1626000'>If I can make the connection then boom, I'm done.</span> <span
  m='1629000'>I will just use voltage dividers and I am home.</span> <span
  m='1646000'>OK, so let's play around and see.</span> <span m='1648000'>There
  is something in there. By now you should know that we</span> <span
  m='1651000'>are very close. There is something going on in</span> <span
  m='1654000'>there. I just need to get that spark.</span> <span m='1656000'>I
  just need to make that spark so I can bridge the gap between</span> <span
  m='1659000'>something that is really easy versus where I am.</span> <span
  m='1662000'>Let's take a look at the resistor.</span> <span m='1675000'>I have
  my resistor with the voltage vR across it and a</span> <span
  m='1680000'>current iR. Remember to get to any sort of</span> <span
  m='1685000'>steady state you are going to be dealing with the drives of
  the</span> <span m='1691000'>form vI e to the j omega t, exponential
  drives.</span> <span m='1695000'>And by taking the real part, I know I get the
  input,</span> <span m='1700000'>and the real part of the output gives me the
  actual output.</span> <span m='1706000'>Let's say my iR is simply Ire^st and
  my vR is Vre^st.</span> <span m='1713000'>The S is, again, a shorthand
  notation for j</span> <span m='1717000'>omega. If my current Ire^st of
  the</span> <span m='1720000'>exponential form shown there and here is Vr, I
  need to find out</span> <span m='1727000'>what relates Vr and Ir for the
  element relationship for the</span> <span m='1733000'>resistor to hold. In
  general, Ir and Vr are</span> <span m='1738000'>complex numbers. For the
  resistor,</span> <span m='1741000'>I know that Vr=RIr. And I substitute using
  my</span> <span m='1748000'>complex drives here. So it is
  Vre^st=RIre^st.</span> <span m='1755000'>I am just substituting for these
  drives,</span> <span m='1761000'>Ohm's law should apply, and I cancel off
  e^st.</span> <span m='1770000'>And so I get Vr=RIr. Interesting.</span> <span
  m='1773000'>For the resistor I find that, based on the fundamental</span>
  <span m='1779000'>principles of resistor action, the complex amplitude of
  the</span> <span m='1785000'>voltage simply relates to the complex amplitude
  of the input</span> <span m='1791000'>by the proportionality factor R. In
  other words,</span> <span m='1796000'>for the resistor -- Just as the time
  domain V and I</span> <span m='1802000'>were related by the proportionality
  constant R,</span> <span m='1806000'>the complex amplitudes Vr and Ir are also
  related in the same</span> <span m='1811000'>way. That's interesting.</span>
  <span m='1813000'>Now let's look at the capacitor.</span> <span
  m='1829000'>Some current ic flowing through it and a voltage vc.</span> <span
  m='1836000'>Let's say the current is Ice^st and the voltage is Vce^st.</span>
  <span m='1844000'>Let's plug these into the element law for the
  capacitor</span> <span m='1851000'>and see if we can find out a way of
  relating vc and ic.</span> <span m='1859000'>I know that ic is simply
  Cdvc/dt.</span> <span m='1865000'>So I replace this with
  Ice^st=Cd/dt(vce^st),</span> <span m='1878000'>which is simply
  Ice^st=CsVce^st.</span> <span m='1890000'>So I can cancel this out again.
  Interesting.</span> <span m='1894000'>Ic=CsVc. Very interesting.</span> <span
  m='1896000'>What is interesting here? Notice that in the time domain</span>
  <span m='1902000'>Ic=Cdvc/dt, the element law for the capacitor.</span> <span
  m='1906000'>So I said let's use exponential drives, Ice^st,</span> <span
  m='1911000'>Vce^st, that's an exponential drive, and try to find out
  what</span> <span m='1917000'>the relationship between the complex amplitudes
  are.</span> <span m='1924000'>I plug them and what do I find? I find that if
  my input is</span> <span m='1931000'>Vce^st, and Vc is the amplitude of the
  input,</span> <span m='1936000'>then the current is simply given by something
  multiplied</span> <span m='1943000'>Vc. It's very similar in form to</span>
  <span m='1947000'>what I saw here. The resistor,</span> <span
  m='1951000'>Vr=RIr. For the capacitor,</span> <span m='1954000'>Vc=Ic/sc. 1/sc
  kind of plays the role of</span> <span m='1959000'>R. In other words,</span>
  <span m='1961000'>the complex amplitudes around the capacitor are related by
  Vc</span> <span m='1968000'>equals some constant times Ic. Almost like a funny
  Ohm's law</span> <span m='1976000'>kind of relationship where Vc and IC are
  complex amplitudes.</span> <span m='1985000'>For the inductor it is the same
  way, iL, vL and L.</span> <span m='1993000'>Let's say iL=Ile^st and
  vL=Vle^st.</span> <span m='1998000'>Substitute the values for the inductor
  into its element</span> <span m='2007000'>relationship as well. I know that
  vL=LdiL/dt.</span> <span m='2014000'>Therefore, substituting the complex
  amplitudes is L.</span> <span m='2020000'>And diL/dt will simply be
  Ilse^st.</span> <span m='2024000'>So I cancel out the exponentials.</span>
  <span m='2028000'>The reason we're able to do all of this is simply the
  remarkable</span> <span m='2035000'>beauty of exponentials. Exponentials are
  absolutely</span> <span m='2041000'>stunningly beautiful. The reason is that
  when I</span> <span m='2045000'>differentiate them what I get back is the
  exponential times</span> <span m='2050000'>some constant, and the constant was
  in its</span> <span m='2054000'>numerator multiplying t. And that's the beauty
  of</span> <span m='2059000'>exponentials. If this was a sine then I
  would</span> <span m='2063000'>get cosine and a sine. With exponentials these
  cancel</span> <span m='2067000'>out and what I am left with is something that
  is LsIl.</span> <span m='2074000'>Again, for the inductor, the voltage across
  the inductor</span> <span m='2081000'>relates to some constant Ls here times
  Il.</span> <span m='2086000'>This is absolutely stunning and almost looks like
  a form of</span> <span m='2094000'>Ohm's law here. What I am going to do is
  let's</span> <span m='2100000'>give this the name Zr. Let's give this 1/sC the
  name</span> <span m='2107000'>Zc. And let's give this the name</span> <span
  m='2111000'>ZL. It kind of behaves like a</span> <span m='2115000'>resistor,
  so the resistor simply becomes Zr.</span> <span m='2120000'>And 1/sC behaved
  like a resistor so I called it Zc.</span> <span m='2126000'>And this is a ZL.
  These are called "impedances".</span> <span m='2142000'>In other words, for a
  capacitor,</span> <span m='2145000'>as far as complex inputs and outputs are
  concerned,</span> <span m='2152000'>if Vc and Ic is fed to it, the capacitor
  can be replaced</span> <span m='2159000'>by an impedance Zc where I can write
  the relationship between</span> <span m='2166000'>Vc and Ic as Vc=ZcIc. Where
  Zc is simply one by sc.</span> <span m='2173000'>Similarly, for an inductor
  --</span> <span m='2188000'>-- I can write its impedance ZL as sL and I get
  Vl=ZLIl.</span> <span m='2197000'>And finally for a resistor it is pretty
  simple.</span> <span m='2225000'>What I am saying is that if I am in the
  region of the</span> <span m='2228000'>playground, if I constrain myself in
  the region of the</span> <span m='2231000'>playground where my inputs are
  something Vi e to the j omega t</span> <span m='2236000'>or exponentials, in
  that little region of the</span> <span m='2238000'>playground now, I am
  focusing more and more on</span> <span m='2241000'>small parts of the
  playground so I am kind of boxed in right now.</span> <span m='2246000'>In
  that region of the playground this applies.</span> <span m='2250000'>In that
  region of the playground, I can replace</span> <span m='2254000'>resistors by
  impedances, capacitors with impedances of</span> <span m='2259000'>value 1/sC.
  And within that playground the</span> <span m='2262000'>beauty of analysis
  there is that in that region of the playground</span> <span m='2268000'>where
  the inputs are of the form Vie^st, it turns out that the</span> <span
  m='2274000'>element laws are simply generalizations of Ohm's law.</span> <span
  m='2280000'>That is absolutely stunning. It is one of the biggest</span> <span
  m='2283000'>hallelujah moments in learning circuits.</span> <span
  m='2286000'>This is really big. And I think this is almost as</span> <span
  m='2290000'>big as the realization that you can take a nonlinear
  circuit,</span> <span m='2294000'>operate it at a given operating point, and
  you can sit around</span> <span m='2299000'>doing Zen things, looking at small
  perturbations</span> <span m='2302000'>in there, those are going to be
  linearly related.</span> <span m='2306000'>This is one of the big hallelujah
  moments in 6.002.</span> <span m='2311000'>And this is of the same magnitude
  as the small signal</span> <span m='2314000'>response being linear. It is
  something that is</span> <span m='2317000'>completely non-intuitive. It is
  something that you just</span> <span m='2320000'>would not have known until
  you had seen it happen.</span> <span m='2323000'>The same way here. This is
  very important so I</span> <span m='2326000'>will repeat it again. I have
  boxed myself into this</span> <span m='2329000'>small region of the playground
  where all I care about are</span> <span m='2333000'>sinusoidal inputs and
  steady-state responses.</span> <span m='2337000'>So there I focus on complex
  inputs, Vi e to the j omega t.</span> <span m='2341000'>And I have just shown
  you that I can replace inductors,</span> <span m='2345000'>capacitors,
  resistors with their impedances.</span> <span m='2348000'>And the amplitudes
  of the corresponding signals around</span> <span m='2352000'>them are related
  by just a simple Ohm's law like</span> <span m='2355000'>relationship using
  impedances. I am sort of boxed into this</span> <span m='2359000'>playground,
  right? In my playground it is all</span> <span m='2362000'>about e to the ij
  omega t. e to the ij omega t is implicit</span> <span m='2367000'>everywhere.
  I just don't show it.</span> <span m='2370000'>If I want to talk to somebody
  else outside but within MIT in</span> <span m='2374000'>this small region,
  it's all e to the ij omega t in</span> <span m='2378000'>there. If I want to
  talk to somebody</span> <span m='2381000'>outside, get out of MIT, get out of
  this playground,</span> <span m='2385000'>what else do I have to do? I have to
  take the real part.</span> <span m='2389000'>Don't forget that. Remember
  that,</span> <span m='2391000'>take for example Vc here, so Vc is this,</span>
  <span m='2394000'>so implicit in all of this is that if I measure Vc at
  some</span> <span m='2398000'>place it is really going to be Vce to the j
  omega t.</span> <span m='2404000'>And if we the cosine, the real part,</span>
  <span m='2407000'>then I have to take a real part of this.</span> <span
  m='2410000'>And the real part of that would Vc cosine of omega t angle
  Vc.</span> <span m='2415000'>This piece here kind of goes unsaid.</span> <span
  m='2418000'>We will agree that we have to do it, but we just skip that</span>
  <span m='2423000'>step because it is obvious. We just deal with Vcs and
  Vls</span> <span m='2428000'>now. So a new notation certainly</span> <span
  m='2433000'>sneaked by you, and that notation looks like a</span> <span
  m='2438000'>big letter and a small letter. Remember you have seen vL,</span>
  <span m='2445000'>this is the total behavior, you have seen vl,</span> <span
  m='2450000'>that's a small signal behavior, and now you see this,</span> <span
  m='2456000'>Vl, capital V small l. And we also have DC,</span> <span
  m='2461000'>we have labeled operating point values as VL,</span> <span
  m='2465000'>capital V, capital L. We have one thing left so</span> <span
  m='2469000'>nobody go out there inventing something new because we
  would</span> <span m='2474000'>be in trouble. This is capital V,</span> <span
  m='2477000'>small l, and this is simply "complex amplitude" in the
  small</span> <span m='2482000'>boxed region of my playground where good things
  happen and</span> <span m='2487000'>exponentials fly. Whenever someone gives
  you a</span> <span m='2492000'>variable, capital V, small l, remember it's
  a</span> <span m='2495000'>complex amplitude, a complex number,</span> <span
  m='2498000'>and you know how to get to the time domain from there.</span>
  <span m='2502000'>You take that number, take the real part,</span> <span
  m='2505000'>multiple the number by e to the j omega t and take the real</span>
  <span m='2509000'>part, which is tantamount to magnitude cosine omega t
  plus</span> <span m='2513000'>angle of that number. Actually, you know
  what?</span> <span m='2517000'>Let's send this up.</span> <span
  m='2525000'>Back to an example.</span> <span m='2545000'>Oh, I'm sorry. I'm
  sorry.</span> <span m='2546000'>This is not good. This is my time domain
  circuit.</span> <span m='2550000'>Remember this was my time domain
  circuit.</span> <span m='2553000'>A vI input. A vC output.</span> <span
  m='2555000'>I wanted to analyze this. What I am telling you now is</span>
  <span m='2560000'>let's box ourselves in this impedance playground.</span>
  <span m='2564000'>And in the impedance playground the input becomes the
  complex</span> <span m='2569000'>amplitude of the input, my resistance gets
  replaced by</span> <span m='2574000'>a box Zr, my capacitor gets replaced by a
  box Zc.</span> <span m='2580000'>And the voltage I care about here is
  Vc.</span> <span m='2587000'>Zr = R and Zc=1/sC. Now, there we go.</span>
  <span m='2594000'>I can write down Vc using a voltage divider action as Vc
  is</span> <span m='2605000'>simply Zc/(Zc+Zr), done, times Vi of
  course.</span> <span m='2615000'>And that gives me 1/sC divided by 1/sC+R and
  multiplying</span> <span m='2622000'>throughout by sC I get 1/1+sCR where S is
  j omega.</span> <span m='2628000'>Just cannot get any simpler. How long did I
  take to do this?</span> <span m='2636000'>30 seconds. Where I spent a whole
  lecture</span> <span m='2641000'>on Tuesday grinding through first trig,
  giving up halfway</span> <span m='2647000'>and collapsing, and then showing
  you the sneaky</span> <span m='2651000'>path which was still pretty painful,
  but 30 seconds,</span> <span m='2656000'>boom. This stuff is
  spectacularly</span> <span m='2659000'>beautiful. The really cool thing here
  is</span> <span m='2663000'>that in this impedance domain for linear circuits
  all your</span> <span m='2668000'>good old tricks apply. Your Thevenin,</span>
  <span m='2673000'>your Norton, your superposition,</span> <span
  m='2675000'>name it and it applies for this linear circuit.</span> <span
  m='2678000'>If you close your eyes and make believe that Zr is like an R
  and</span> <span m='2683000'>simply apply all the techniques you have learned
  so far in this</span> <span m='2687000'>linear playground. Just a little hack
  at the end</span> <span m='2691000'>where this is the complex
  amplitude.</span> <span m='2693000'>And if you want to go to the time domain
  part then you do the</span> <span m='2698000'>usual thing. Modulus Vc cosine
  omega t plus</span> <span m='2702000'>angle Vc. Just remember that.</span>
  <span m='2704000'>That's the jump to get back to the time domain.</span> <span
  m='2708000'>Just to show you that this not just works for one little</span>
  <span m='2713000'>rinky-dink circuit here, let me take a more
  complicated</span> <span m='2717000'>circuit. If I believe in my own
  BS,</span> <span m='2720000'>I should be able to apply this theory to my
  series RLC,</span> <span m='2725000'>the big painful circuit that we did
  differential equations for</span> <span m='2730000'>about a week ago. Let's do
  it.</span> <span m='2739000'>I have an inductor, a capacitor and a
  resistor.</span> <span m='2744000'>What I am going to do is replace this with
  the impedance</span> <span m='2751000'>model. Input Vi.</span> <span
  m='2753000'>Let's say this was vI. Let's say I cared about vR.</span> <span
  m='2760000'>L, C and R. The impedance model would</span> <span
  m='2765000'>simply be Vi. What's the impedance of an</span> <span
  m='2771000'>inductor? SL.</span> <span m='2773000'>And for the capacitor it is
  1/sC.</span> <span m='2777000'>And for a resistor it is simply R.</span> <span
  m='2782000'>And just remember, if I can find out VR then for</span> <span
  m='2789000'>an input cosine of the form Vi cosine omega t the output
  will</span> <span m='2798000'>given by |Vr| cosine of omega t plus angle
  Vr.</span> <span m='2808000'>Just remember this last step. But Vr itself is
  trivially</span> <span m='2813000'>determined. It is the voltage
  divider</span> <span m='2817000'>action again times Vi. And the voltage
  divider action</span> <span m='2823000'>is in the denominator I sum these
  thingamajigs,</span> <span m='2829000'>so ZL+ZC+ZR, ZR in the
  numerator.</span> <span m='2833000'>And Zr is simply R. ZL is sL.</span> <span
  m='2837000'>Zc is 1/sC. And R is R.</span> <span m='2840000'>Vi. And I
  multiply through by,</span> <span m='2843000'>in this particular situation, by
  s/L.</span> <span m='2850000'>I want to get it into the same form as you've
  seen before.</span> <span m='2858000'>Multiply throughout, the numerator and
  denominator</span> <span m='2866000'>by s/L, what do I get? I get RS/L and out
  here I end</span> <span m='2873000'>up getting S squared plus 1/LC, and I get
  plus R/L S.</span> <span m='2883000'>I am done. Look at that.</span> <span
  m='2884000'>Well, a little more than 30 seconds.</span> <span
  m='2887000'>Maybe a minute. What is this?</span> <span m='2889000'>Where have
  you seen this before?</span> <span m='2891000'>The denominator of this
  expression here?</span> <span m='2894000'>Ah, characteristic equation for the
  RLC.</span> <span m='2897000'>Remember I promised you in the beginning that
  when we come to</span> <span m='2902000'>the end of the day using a simple
  one-minute expression I</span> <span m='2906000'>am going to write down the
  characteristic equation?</span> <span m='2912000'>Boom, here is what I get.
  Did somebody hear an echo in</span> <span m='2916000'>there? Notice that just
  by doing a</span> <span m='2919000'>simple voltage divider thingamajig, I got
  this</span> <span m='2923000'>expression. And now I can write down the</span>
  <span m='2926000'>frequency response by replacing s is equal to j
  omega.</span> <span m='2931000'>Even more beautiful and what is even more
  stunningly pretty here</span> <span m='2936000'>is that remember the intuitive
  method I taught you about?</span> <span m='2943000'>The characteristic
  equation gives you alpha,</span> <span m='2946000'>omega nought, omega d and
  Q.</span> <span m='2949000'>And based on those we can sketch even the time
  domain</span> <span m='2953000'>response. Guess what?</span> <span
  m='2955000'>RLC circuits are passÈ now. You can just write this thing</span>
  <span m='2960000'>down and you're done, 30 seconds or less.</span> <span
  m='2963000'>No DEs, no trig, no nothing.</span> <span m='2966000'>OK.</span>
  </p>
uid: 1f5322b816e498b4c64e420083745801
type: courses
layout: video
---
