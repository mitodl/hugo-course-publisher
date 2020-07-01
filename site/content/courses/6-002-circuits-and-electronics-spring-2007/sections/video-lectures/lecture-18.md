---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Filters</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec18.jpg
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-18/thumb_lec18.jpg
    title: thumb_lec18.jpg
    type: null
    uid: 9372a4b041b5314546e9a357e84614ba
  - id: Video-YouTube-Stream
    media_location: WT-qzgaKeGI
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Video-YouTube-Stream
    type: Video
    uid: 3f8834c827d86bcfd5bd53b3e0036ea8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/WT-qzgaKeGI/default.jpg'
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 34980da635bbbdf3a5063cab81673b81
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Video-iTunes U-MP4
    type: Video
    uid: b2a2bf7c4ae7d12a9a0bf41093762003
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-13nov2003-220k.mp4
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Video-Internet Archive-MP4
    type: Video
    uid: f8d83cabcc9f47888f3fcb1cba0de225
  - id: Thumbnail-OCW-JPG
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 46be690a50360337f37193426d3bb677
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: WT-qzgaKeGI
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7a561a0015974b5433c9d8cdd4e5765a
  - id: WT-qzgaKeGI.srt
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-18/WT-qzgaKeGI.srt
    title: 3play caption file
    type: null
    uid: bf513499ae27bda0c2eee1f9c12a465e
  - id: WT-qzgaKeGI.pdf
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-18/WT-qzgaKeGI.pdf
    title: 3play pdf file
    type: null
    uid: 553999402ad00dc024799e71046f6d04
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: feed8a723b2d90aa21efab3acf4a363c
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f8126ee6c9efcf9a67643e808defdbba
inline_embed_id: '8032241lecture18:filters43943611'
order_index: 345
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/d4e136975654a01f7fc2c9b49196d376">PDF</a>)<br />
  Demonstration: Displays the transfer function of an RLC bandpass (<a
  target="_blank" title="Open in a new window."
  href="./resolveuid/1e0f2c883870fc08a78ecfee1c5ef673">PDF</a>)<br />
  Demonstration: Parallel LC radio (<a
  href="./resolveuid/f2d71e7c6e5b3bb640a6d9086b5ff94f">PDF</a>)</p>
short_url: lecture-18
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-18
title: 'Lecture 18: Filters'
transcript: >-
  <p><span m='9000'>All right. Let's get moving.</span> </p><p><span
  m='11000'>Good morning.</span> </p><p><span m='17000'>Today, if everything
  works out, we have some fun for you guys.</span> </p><p><span m='24000'>I hope
  it works out. We'll see.</span> </p><p><span m='28000'>What I am going to do
  today is a very major application of the</span> <span m='34000'>frequency
  response and the frequency domain analysis of</span> <span m='39000'>circuits.
  And this application area is</span> <span m='42000'>called filters. The area
  of filters often times</span> <span m='47000'>demands a full course or a
  couple of full courses all by</span> <span m='52000'>itself. And filters are
  incredibly</span> <span m='56000'>useful. They're used in virtually
  every</span> <span m='60000'>electronic device in some form or another.</span>
  </p><p><span m='63000'>They're used in radio tuners. We will show you a demo
  of that</span> <span m='68000'>today. They're also used in your cell</span>
  <span m='71000'>phones. Every single cell phone has a</span> <span
  m='74000'>set of filters. So, for example,</span> <span m='76000'>how do you
  pick a conversation? You pick a conversation by</span> <span m='80000'>picking
  a certain frequency and grabbing data from there.</span> </p><p><span
  m='85000'>They are also in wide area network wireless transmitters.</span>
  </p><p><span m='91000'>Do we have an access point here?</span> </p><p><span
  m='93000'>I don't see one, but you've seen wireless access</span> <span
  m='97000'>points. Again, there they have filters</span> <span m='101000'>in
  them. So, virtually every single</span> <span m='104000'>electronic device
  contains a filter at some point or another.</span> </p><p><span m='109000'>And
  so, today we will look at this major, major application of</span> <span
  m='114000'>frequency domain analysis. Before we get into that,</span> <span
  m='121000'>I'd like to do a bit of review. The readings for today</span> <span
  m='129000'>correspond to Chapter 14.4.2, 14.5 and 15.2 in the course</span>
  <span m='138000'>notes. All right.</span> </p><p><span m='141000'>Let's start
  with the review. We looked at this circuit last</span> <span m='150000'>Friday
  --</span> <span m='161000'>-- where I said that for our analysis, we are going
  to focus</span> <span m='166000'>on this small, small region of the
  playground.</span> </p><p><span m='169000'>And what's special about this
  region of our playground is that</span> <span m='175000'>I am going to focus
  on sinusoidal inputs.</span> </p><p><span m='179000'>And, second, I am going
  to focus on the</span> <span m='181000'>steady state response. How does the
  response look like</span> <span m='185000'>if I wait a long, long time?</span>
  </p><p><span m='187000'>And then we said that the full blown time domain
  analysis was</span> <span m='192000'>hard. This was, remember,</span> <span
  m='193000'>the agonizing approach? And then I taught you the</span> <span
  m='197000'>impedance approach in the last lecture, which was blindingly</span>
  <span m='201000'>simple. And, in that impedance</span> <span
  m='203000'>approach, what we said we would do is --</span> <span m='208000'>I
  will apply the approach right now and in seconds derive the</span> <span
  m='212000'>result for you. But the basic idea was we said</span> <span
  m='215000'>what we are going to do is assume that we are going to</span> <span
  m='219000'>apply inputs of the form Vi e to the j omega t.</span> </p><p><span
  m='222000'>Wherever you see a capital and a small, there is an implicate
  e</span> <span m='227000'>to the j omega t next to it. I'm not showing you
  that.</span> </p><p><span m='231000'>And what I showed last time, and the
  class before that was</span> <span m='235000'>once you find out the amplitude
  --</span> <span m='239000'>Once you find out the multiplier that multiplies e
  to</span> <span m='242000'>the j omega t, it's a complex number,</span> <span
  m='245000'>you have all the information you need.</span> </p><p><span
  m='248000'>And once you have this, you can find out the time</span> <span
  m='251000'>domain response by simply taking the modulus of that,</span> <span
  m='255000'>or the amplitude and the phase of that to get the angle.</span>
  </p><p><span m='259000'>And that gives you the time domain response.</span>
  </p><p><span m='262000'>So, our focus has been on these quantities.</span>
  </p><p><span m='267000'>The impedance method says what I am going to do is
  replace each</span> <span m='271000'>of these by impedances. And then the
  corresponding</span> <span m='274000'>impedance model looks like this.</span>
  </p><p><span m='282000'>Instead of R, I replace that with ZR.</span>
  </p><p><span m='285000'>And instead of the capacitor, I am going to replace
  that with</span> <span m='291000'>ZC. And this is my Vc.</span> </p><p><span
  m='293000'>ZR is simply R and ZC was going to be one divided by sC where
  s</span> <span m='299000'>was simply a shorthand notation for j omega.</span>
  </p><p><span m='304000'>Based on this, once I converted all my</span> <span
  m='307000'>elements into impedances, I can go ahead and apply all</span> <span
  m='312000'>the good-old linear analysis techniques.</span> </p><p><span
  m='316000'>I will discuss a bunch of them today.</span> </p><p><span
  m='320000'>As an example, I could analyze this using my</span> <span
  m='324000'>simple voltage divider relationship.</span> </p><p><span
  m='328000'>Vc is simply ZC divided by ZC plus ZR times Vi.</span> </p><p><span
  m='334000'>And that, in turn, is, well, let's say I divide</span> <span
  m='340000'>this by Vi so I can get the response relation,</span> <span
  m='347000'>is ZC divided by ZC plus ZR. And ZC I know to be one by j</span>
  <span m='355000'>omega C, plus R. And multiplying throughout by j</span> <span
  m='361000'>omega C, I get one divided by one plus j omega CR.</span>
  </p><p><span m='370000'>It's incredibly simple. This is simply called
  the</span> <span m='374000'>frequency response. And it's a transfer
  function</span> <span m='379000'>representing the relationship between the
  output complex</span> <span m='384000'>amplitude with the input. We can also
  plot this.</span> </p><p><span m='390000'>Notice that in our entire analysis
  we have not only</span> <span m='393000'>assumed sinusoidal input, but we're
  also saying that let</span> <span m='397000'>us look at this only in the
  steady state.</span> </p><p><span m='400000'>So, we will wait for time to be
  really, really large,</span> <span m='404000'>and then look at the response.
  And so, therefore,</span> <span m='408000'>we will plot the response not as a
  function of time,</span> <span m='412000'>but rather we are going to plot the
  response as a function of</span> <span m='416000'>omega. What we are going to
  say is I</span> <span m='419000'>am going to input a sinusoid and my output is
  going to be some</span> <span m='423000'>other sinusoid. And since I'm waiting
  for a</span> <span m='426000'>long time to look at the output, time doesn't
  make sense</span> <span m='429000'>anymore. Rather, my free variable is</span>
  <span m='431000'>going to be my frequency, so I am going to change the</span>
  <span m='434000'>frequency of the input that I apply.</span> </p><p><span
  m='437000'>And so, I am going to plot this as a function of omega.</span>
  </p><p><span m='440000'>This represents a completely complimentary view of
  circuits,</span> <span m='444000'>the time domain view and then there is a
  frequency domain</span> <span m='447000'>view. The frequency domain view
  says</span> <span m='451000'>how did this circuit behave as I apply sinusoids
  of differing</span> <span m='457000'>frequencies? I can plot that relationship
  in</span> <span m='462000'>a graph like this, and this relationship is
  simply</span> <span m='467000'>given by a parameter edge the transfer
  function,</span> <span m='471000'>it's a function of omega. And I can also
  plot the</span> <span m='476000'>absolute value of that. And let's take a look
  at what</span> <span m='482000'>it looks like. So, I can look at
  functions</span> <span m='485000'>like this and very quickly plot the
  response.</span> </p><p><span m='488000'>I am going to do a whole bunch of
  plots just by staring at</span> <span m='493000'>circuits and staring at
  expressions like this.</span> </p><p><span m='497000'>And you will see a
  number of them today.</span> </p><p><span m='500000'>First of all, the way you
  plot these is look</span> <span m='503000'>for the values where omega is very
  small and when omega is</span> <span m='507000'>very large. When omega is
  very,</span> <span m='511000'>very small this term goes away. And so, for very
  small values</span> <span m='516000'>of omega the output is simply one.</span>
  </p><p><span m='519000'>Vc by Vi is simply one. This part goes away.</span>
  </p><p><span m='522000'>What happens when omega is very, very large?</span>
  </p><p><span m='526000'>When omega is really large, this part
  dominates,</span> <span m='530000'>is much greater than one. If I ignore one
  in relation to</span> <span m='534000'>this guy and take the absolute value of
  that then I simply get</span> <span m='539000'>one divided by omega CR when
  omega is very large.</span> </p><p><span m='545000'>So, when omega is very
  large, I get a decay of the form one</span> <span m='550000'>over omega CR. I
  know the value for small</span> <span m='554000'>omega, and it looks like this
  for very large omega.</span> </p><p><span m='558000'>And, if you plot it out,
  this is how it's going to look</span> <span m='563000'>like. Let's stare at
  this form for a</span> <span m='567000'>little while longer. And let's plot
  some properties</span> <span m='572000'>off it. First of all,</span> <span
  m='574000'>you notice something else. When omega CR equals one then,</span>
  <span m='580000'>in other words, when omega equals one by RC,</span> <span
  m='584000'>notice that the output is given by one plus j.</span> </p><p><span
  m='589000'>And the absolute value of that is simply one divided the
  square</span> <span m='595000'>root of two. So, in other words,</span> <span
  m='598000'>when omega is one by RC -- When omega is one by CR then</span>
  <span m='604000'>the output is one by square root two times its value when
  omega</span> <span m='610000'>is very, very small. So, that is one little
  piece of</span> <span m='614000'>information. If you look at the form
  of</span> <span m='618000'>this, I would like you to stare at it for a few
  minutes and try</span> <span m='623000'>to understand what this
  represents.</span> </p><p><span m='628000'>This says that for very low
  frequencies the response is</span> <span m='632000'>virtually the same as the
  input in amplitude.</span> </p><p><span m='636000'>In other words, if I apply
  some very low</span> <span m='639000'>frequency sinusoid of some amplitude
  then the output</span> <span m='644000'>amplitude is going to be same as that
  amplitude.</span> </p><p><span m='648000'>And that's a one. Now, it also says
  when I apply</span> <span m='652000'>a very high frequency, at very high
  frequencies it</span> <span m='656000'>decays. So, this graph which says I
  am</span> <span m='661000'>going to pass low frequencies without any
  attenuation,</span> <span m='666000'>without hammering it, but I am going to
  clobber high</span> <span m='672000'>frequencies and give you a very low
  amplitude signal at the</span> <span m='678000'>output but pass through,
  almost without attenuation,</span> <span m='684000'>the input at low
  frequencies. And so this is an example of</span> <span m='690000'>what is
  called a low pass filter or LPF.</span> </p><p><span m='696000'>What this is
  saying is that this little circuit here acts</span> <span m='701000'>like a
  low pass filter. It's a low pass filter because</span> <span m='707000'>it
  passes low frequencies without attenuation but kills</span> <span
  m='712000'>high frequencies. If I take some music,</span> <span m='716000'>and
  you will do experiments with this in lab.</span> </p><p><span m='722000'>When
  is lab three? People are doing lab three</span> <span m='724000'>right now,
  right? Lab three is going on right now</span> <span m='727000'>and early next
  week as well. And, in lab three,</span> <span m='730000'>you will play with
  looking at the response to music of</span> <span m='733000'>different types of
  filters. If apply some music here,</span> <span m='737000'>you will see that
  the output will pass low frequencies but</span> <span m='740000'>really
  attenuate high frequencies.</span> </p><p><span m='742000'>You will hear a lot
  of the low sounding base and so on but</span> <span m='746000'>attenuate a lot
  of the high frequencies.</span> </p><p><span m='750000'>All right. The other
  thing that I</span> <span m='753000'>encourage you to do is Websim has built
  in pages for a large</span> <span m='758000'>number of such circuits. You can
  go in there and play</span> <span m='763000'>with the values of RC, or L for
  that matter,</span> <span m='768000'>for a variety of circuits. And, if you
  click on frequency</span> <span m='773000'>response, you actually get both the
  amplitude response and the</span> <span m='779000'>phase as well. You can play
  with various</span> <span m='784000'>values of RLC and see how the frequency
  response looks like</span> <span m='789000'>for each of the circuits. As a
  next step,</span> <span m='792000'>what I would like to do is just give you a
  sense of how</span> <span m='797000'>impedances combine. This won't be very
  surprising</span> <span m='801000'>given that they behave just like resistors,
  but it's good to go</span> <span m='807000'>through it nonetheless. Suppose,
  just to build some</span> <span m='812000'>insight, suppose I had two
  resistors in series.</span> </p><p><span m='817000'>All right. R1 and
  R2.</span> </p><p><span m='819000'>And this was my A and B terminals
  respectively.</span> </p><p><span m='824000'>And let's say the complex
  amplitude of the voltage was Vab</span> <span m='830000'>across this. Then I
  could relate,</span> <span m='833000'>let's say Iab was the current, I can
  relate these resistances.</span> </p><p><span m='841000'>Or, I could relate
  Vab and Iab as follows.</span> </p><p><span m='845000'>Simply Vab divided by
  Iab equals R1 plus R2.</span> </p><p><span m='850000'>I know that. And the
  same thing applies to R</span> <span m='855000'>viewed as an impedance. It's
  still impedance R,</span> <span m='860000'>and so this one still goes ahead
  and applies.</span> </p><p><span m='867000'>The second thing I can try is the
  circuit of this form.</span> </p><p><span m='874000'>A, B, and I have an R1
  and an L in this case.</span> </p><p><span m='880000'>And what I can do is, in
  the impedance model,</span> <span m='886000'>I can view this as an impedance
  of value j omega L.</span> </p><p><span m='893000'>And I can also combine them
  to get the impedance between A and</span> <span m='902000'>B. Much as I got a
  resistance</span> <span m='906000'>between A and B, I can get an impedance
  between</span> <span m='911000'>A and B as Vab divided by Iab. And that will
  be given by ZR1</span> <span m='918000'>plus ZL, and that is simply R1 plus j
  omega L.</span> </p><p><span m='923000'>Similarly, I can do an even more
  complicated circuit.</span> </p><p><span m='930000'>So, resistance. And here I
  have a capacitor in</span> <span m='936000'>series with the resistance, and
  then I apply inductor to</span> <span m='943000'>it. This is A, B,</span>
  <span m='946000'>Iab and plus, minus Vab.</span> </p><p><span m='949000'>And
  let me call this R1 and let me call this R2 and this is C</span> <span
  m='957000'>and L. I can go about combining these</span> <span m='962000'>in
  much the same manner that I combine my resistances in the</span> <span
  m='968000'>series parallel simplifications. I can define an impedance
  Zab</span> <span m='973000'>between the A and B terminals as ZR1 plus Z of
  this combination,</span> <span m='979000'>impedance of this combination, which
  is simply impedance of C</span> <span m='985000'>and that of R2 in parallel
  with each other.</span> </p><p><span m='990000'>I get Zc in parallel with ZR2.
  Notice that this notation</span> <span m='994000'>simply says that look at the
  impedance of the capacitor in</span> <span m='998000'>parallel with a
  resistor. And then, finally,</span> <span m='1001000'>I add to that the series
  impedance of the inductor ZL.</span> </p><p><span m='1005000'>Exactly as you
  would have done for resistances,</span> <span m='1009000'>if all of these
  resistances you would have said R of this piece</span> <span m='1013000'>plus
  the R of the parallel combination plus the R of</span> <span
  m='1017000'>whatever was here. This time around we have</span> <span
  m='1023000'>impedances. And replacing this with the</span> <span
  m='1028000'>values, this is R1. I know for ZL it's j omega L.</span> <span
  m='1030000'>If I can arrange to have the</span> </p><p><span m='1035000'>And
  so, for ZL, parallel ZR2 it is given by</span> <span m='1041000'>ZCZR2 divided
  by ZC plus ZR2, which is simply R1 here and j</span> <span m='1049000'>omega
  L. And let me just substitute the</span> <span m='1055000'>values here. I know
  that ZR2 is simply R2,</span> <span m='1060000'>ZC is one by j omega C, and
  then one by j omega C plus</span> <span m='1066000'>R2. And I can go ahead and
  simplify</span> <span m='1070000'>that further and get my impedance
  Zab.</span> </p><p><span m='1074000'>Notice how simple analysis has
  become.</span> </p><p><span m='1080000'>Using this technique, using the
  impedance method</span> <span m='1083000'>we've managed to convert our
  analysis from solving</span> <span m='1087000'>differential equations to going
  back to algebra.</span> </p><p><span m='1091000'>A large part of what we do in
  circuits is see how we can get</span> <span m='1095000'>back to really simple
  algebra and try to be clever about how</span> <span m='1100000'>we do things.
  So, this is as far as analysis</span> <span m='1103000'>is concerned. In the
  next five minutes,</span> <span m='1106000'>I want to give you some insight
  into how you can build different</span> <span m='1111000'>kinds of
  impedances.</span> </p><p><span m='1123000'>And I won't go into too much
  detail but give some insight</span> <span m='1126000'>into how you can get a
  sense for the kind of filters you want to</span> <span m='1130000'>design. Or,
  at the very least,</span> <span m='1132000'>given a filter, how can you very
  quickly get</span> <span m='1135000'>some insight into what kind of filter it
  is,</span> <span m='1138000'>how it performs, what its frequency response
  is</span> <span m='1141000'>and so on. And, this time around,</span> <span
  m='1145000'>this piece of intuition will be in honor of Umans.</span>
  </p><p><span m='1149000'>And back to our Bend it Like Beckham series,</span>
  <span m='1154000'>I call this "Unleash it like Umans".</span> </p><p><span
  m='1157000'>What experts in the field do is they don't go about sitting</span>
  <span m='1163000'>around writing differential equations, but rather use a
  lot</span> <span m='1168000'>of insight into how to solve these things.</span>
  </p><p><span m='1174000'>And so in honor of Umans, I will label this unleash
  it</span> <span m='1179000'>like Umans. Let's get some insight into how</span>
  <span m='1183000'>the response of various elements look like.</span>
  </p><p><span m='1187000'>Let's take, for example, I have some impedance
  Z.</span> </p><p><span m='1191000'>Let's say this could be a resistor, it
  could be an</span> <span m='1196000'>inductor or it could be a
  capacitor.</span> </p><p><span m='1201000'>Let's take a look at what the
  frequency response of just these</span> <span m='1205000'>elements look like.
  In other words,</span> <span m='1207000'>what are the frequency dependents of
  Z itself?</span> </p><p><span m='1210000'>Let me just plot the impedance of
  each of these elements as a</span> <span m='1214000'>function of frequency.
  Let me just take the absolute</span> <span m='1217000'>value of their
  impedance. Notice that it's a complex</span> <span m='1221000'>number. For the
  inductor it's j omega</span> <span m='1223000'>L. And let me take the
  absolute</span> <span m='1225000'>value omega L in that case and plot it for
  you.</span> </p><p><span m='1230000'>And use that to develop some
  insight.</span> </p><p><span m='1233000'>Let's do a simple case first. If Z is
  a resistance of value R</span> <span m='1238000'>then no matter what the
  frequency my value is going to</span> <span m='1243000'>be R. If I have an
  inductor of value</span> <span m='1246000'>L then the impedance is going to
  look like j omega L,</span> <span m='1251000'>and so I am going to omega L for
  that.</span> </p><p><span m='1255000'>And the dependence of that simply says
  that for low omega</span> <span m='1260000'>the impedance is very small. For
  omega zero the impedance is</span> <span m='1266000'>zero and it increases
  linearly with omega.</span> </p><p><span m='1269000'>So, it's omega L for the
  inductor.</span> </p><p><span m='1272000'>Impedance increases linerally as I
  increase the frequency.</span> </p><p><span m='1276000'>What about for the
  capacitor? For the capacitor,</span> <span m='1280000'>the impedance is one
  divided by j omega C.</span> </p><p><span m='1283000'>And so, therefore, I get
  the dependence being</span> <span m='1287000'>related to omega C. Which says
  that for very high</span> <span m='1293000'>frequencies impedance is very low,
  but for very low</span> <span m='1298000'>frequencies the impedance is very
  high and I get a behavior</span> <span m='1305000'>pattern that looks
  something like this.</span> </p><p><span m='1309000'>It goes as one by omega
  C. As omega is very large,</span> <span m='1314000'>my impedance is very
  small. If omega is very small,</span> <span m='1320000'>my impedance goes
  towards that of an open circuit.</span> </p><p><span m='1323000'>This is not
  surprising. You've known this before,</span> <span m='1326000'>right? That a
  capacitor behaves like</span> <span m='1329000'>an open circuit for DC. An
  inductor behaves like a</span> <span m='1332000'>short circuit for DC. Notice
  that zero frequency here</span> <span m='1335000'>corresponds to DC. The
  capacitor looks like an</span> <span m='1338000'>open circuit for DC, very
  high impedance.</span> </p><p><span m='1341000'>The inductor looks like a
  short circuit for DC,</span> <span m='1344000'>very low impedance. And the
  opposite is true at</span> <span m='1347000'>very high frequencies. While R is
  a constant</span> <span m='1351000'>throughout. Let's use this to build
  some</span> <span m='1354000'>insight into how our circuits might look.</span>
  </p><p><span m='1357000'>Let me do this example.</span> </p><p><span
  m='1365000'>Let's say I have a Vi and I measure the response across the</span>
  <span m='1371000'>resistor.</span> </p><p><span m='1380000'>So, I measure Vr
  divided by Vi and take the absolute value and</span> <span m='1385000'>take a
  look at how it's going to look like.</span> </p><p><span m='1388000'>I want
  you to stare at this for me and help me with what the</span> <span
  m='1393000'>response is going to look like. Let's take incredibly high</span>
  <span m='1398000'>frequencies. At very high frequencies,</span> <span
  m='1401000'>this has a very high frequency, what do the capacitor look
  like</span> <span m='1406000'>to very high frequencies? Is it an open or is it
  a short?</span> </p><p><span m='1412000'>A short circuit. At very high
  frequencies the</span> <span m='1415000'>capacitor looks like a short
  circuit.</span> </p><p><span m='1418000'>Then Vi simply appears across the
  resistor,</span> <span m='1421000'>which means that at very high frequencies
  the output is very</span> <span m='1425000'>close to the input. At very low
  frequencies what</span> <span m='1429000'>happens? At very low frequencies
  the</span> <span m='1431000'>capacitor looks like an open circuit.</span>
  </p><p><span m='1434000'>If this looks like an open circuit then very little
  voltage</span> <span m='1438000'>will drop across this resistor here because
  most of it is going</span> <span m='1443000'>to drop across the capacitor.
  What is going to happen is,</span> <span m='1449000'>for very low values, I am
  going to be looking at</span> <span m='1453000'>something out here. And,
  because of that,</span> <span m='1457000'>my response looks like this. And
  this is of a different form</span> <span m='1463000'>than the one you saw
  earlier. In this case,</span> <span m='1467000'>I pass high frequencies but
  attenuate low frequencies.</span> </p><p><span m='1472000'>Not surprisingly,
  this is called a high pass</span> <span m='1476000'>filter.</span>
  </p><p><span m='1484000'>You need to begin to be able to think about
  capacitors and</span> <span m='1487000'>inductors in terms of their high and
  low frequency properties.</span> </p><p><span m='1491000'>And, if you develop
  that intuition, once you develop the</span> <span m='1495000'>intuition about
  capacitors and inductors and their frequency</span> <span
  m='1499000'>relationship, that will be a big step forward</span> <span
  m='1501000'>in 002. If you get that insight,</span> <span m='1504000'>you will
  go a long way in terms of knowing how to tackle</span> <span
  m='1507000'>problems and being able to quickly sketch responses.</span>
  </p><p><span m='1510000'>Yes.</span> </p><p><span m='1522000'>In the case of,
  if we get something like j</span> <span m='1525000'>omega L, what you can do
  is take the limit as omega goes to zero.</span> </p><p><span m='1530000'>If it
  is omega L then notice that it is going to start</span> <span
  m='1533000'>linear. And, on the other hand,</span> <span m='1536000'>if when
  you get very high frequencies, for example,</span> <span m='1539000'>if you
  get one by something omega C then this is a</span> <span
  m='1543000'>hyperbolic relationship, so it is going to go ahead</span> <span
  m='1547000'>looking like this. So, you can take a look at a</span> <span
  m='1550000'>lot of these functions at their very low values and see how
  they</span> <span m='1555000'>look like at that point. All right.</span>
  </p><p><span m='1559000'>The next one I would like to draw for you is
  something that</span> <span m='1562000'>looks like this.</span> </p><p><span
  m='1568000'>Let's say, for example, I have an inductor L and a</span> <span
  m='1572000'>resistor R and I want to see what that looks like.</span>
  </p><p><span m='1576000'>In this particular example, I have H, take the
  absolute</span> <span m='1580000'>value. So, what is this going to look</span>
  <span m='1583000'>like? I am going to look at the value</span> <span
  m='1587000'>across the resistor here. Here what I am going to find is</span>
  <span m='1592000'>that at very low frequencies this guy is a short
  circuit.</span> </p><p><span m='1596000'>Since this guy is a short circuit,
  all the voltage drops</span> <span m='1600000'>across the resistor so it's
  going to look like this.</span> </p><p><span m='1604000'>And, at very high
  frequencies, what I am going to find is that</span> <span m='1609000'>the
  inductor is going to appear like an open circuit.</span> </p><p><span
  m='1612000'>And so, therefore, all the voltage is going to</span> <span
  m='1616000'>pretty much drop across the inductor.</span> </p><p><span
  m='1620000'>It will be R divided by something plus omega L.</span>
  </p><p><span m='1623000'>So, at high frequencies this guy is going to taper
  off to</span> <span m='1628000'>zero and is going to look like this.</span>
  </p><p><span m='1631000'>And this is back to my low pass filter.</span>
  </p><p><span m='1634000'>Just to go back to a question asked earlier,</span>
  <span m='1637000'>how do you know what this looks like?</span> </p><p><span
  m='1640000'>I can very quickly write down the expression for H of j
  omega.</span> </p><p><span m='1645000'>This is simply going to be R divided by
  R plus if this is VR.</span> </p><p><span m='1652000'>VR is simply R divided
  by one by j omega C.</span> </p><p><span m='1656000'>I multiply it out by j
  omega C in the numerator and the</span> <span m='1661000'>denominator. I'm
  going to find j omega C</span> <span m='1665000'>here and I am going to get
  one by j omega C here.</span> </p><p><span m='1669000'>And what is going to
  happen with something like this is that</span> <span m='1675000'>as omega
  becomes very small then I am going to ignore this.</span> </p><p><span
  m='1682000'>When omega becomes very small, I can ignore this with
  respect</span> <span m='1687000'>to one, and I get R j omega C. Given that, is
  what I've drawn</span> <span m='1692000'>here correct or wrong? This goes away
  with respect to</span> <span m='1696000'>one. I am left with R j omega
  C,</span> <span m='1699000'>right? For very low frequencies.</span>
  </p><p><span m='1701000'>Given what I have drawn here, is that correct or is
  that</span> <span m='1706000'>wrong? Well, it's hard to say.</span>
  </p><p><span m='1710000'>For very, very low frequencies it starts out being
  linear</span> <span m='1716000'>because it's an omega relationship,</span>
  <span m='1720000'>and then it goes up like this and then goes out
  there.</span> </p><p><span m='1727000'>Let me go onto another example. Let me
  do another example here</span> <span m='1734000'>which is something like -- I
  need to make sure I don't</span> <span m='1741000'>make a mistake here. If I
  get R j omega C by R j</span> <span m='1745000'>omega C, you know what, this
  ends up being a first</span> <span m='1749000'>order system, and so is going
  to look like</span> <span m='1752000'>this. I blew it there.</span>
  </p><p><span m='1754000'>Back to this system here. If I have an L and an R and
  I</span> <span m='1759000'>look at this equation to look at what happens
  across L,</span> <span m='1763000'>you can plot that again. And for very low
  frequencies it</span> <span m='1769000'>is going to be zero amplitude here and
  for very high</span> <span m='1774000'>frequencies this is going to be an open
  circuit,</span> <span m='1778000'>and so the response is going to look
  something like this.</span> </p><p><span m='1783000'>That's going to end up
  being your high pass filter.</span> </p><p><span m='1788000'>As another
  example, I would like to do a series RLC</span> <span m='1793000'>circuit
  --</span> <span m='1810000'>-- and try to get you some sense of what that
  output looks</span> <span m='1814000'>like. Let's use our intuition and</span>
  <span m='1817000'>first write down what this looks like and then go and do
  some</span> <span m='1822000'>math and see if the math corresponds to what
  our</span> <span m='1826000'>intuition tells us. I want to plot Vr with
  respect</span> <span m='1831000'>to Vi. I want to plot it there.</span>
  </p><p><span m='1834000'>For something like this, what happens at very
  low</span> <span m='1838000'>frequencies? We are just looking to get</span>
  <span m='1841000'>very, very crudely what this graph is going to look
  like.</span> </p><p><span m='1846000'>Very, very crudely what this graph is
  going to look like.</span> </p><p><span m='1851000'>Given that I am taking the
  voltage across VR,</span> <span m='1855000'>what happens at very low
  frequencies?</span> </p><p><span m='1860000'>At incredibly low frequencies,
  the inductor looks like a short</span> <span m='1865000'>circuit, but the
  capacitor looks like open circuit.</span> </p><p><span m='1869000'>An open
  circuit in series with a short circuit that ends up</span> <span
  m='1874000'>looking like an open circuit. And so, therefore,</span> <span
  m='1878000'>all my voltage falls across VR. Now, what happens at very
  high</span> <span m='1883000'>frequencies? At very high frequencies the</span>
  <span m='1886000'>capacitor looks like a short. But the inductor looks like
  an</span> <span m='1892000'>open circuit now for very high frequencies,
  correct?</span> </p><p><span m='1896000'>Just remember, capacitor is short for
  high</span> <span m='1899000'>frequencies inductor open for high
  frequencies.</span> </p><p><span m='1902000'>So, this ends up having a very
  high impedance.</span> </p><p><span m='1906000'>At very high frequencies this
  guy has a very high impedance.</span> </p><p><span m='1910000'>And, because of
  that, for a high value of frequency,</span> <span m='1914000'>I end up going
  in that manner. This behavior has the effect of</span> <span m='1919000'>the
  capacitor here. And for very high frequencies I</span> <span m='1924000'>get
  the effect of the inductor. And so this means that I have</span> <span
  m='1930000'>very low values for low frequencies, very low values for</span>
  <span m='1934000'>high frequencies. And, as the frequency</span> <span
  m='1938000'>increases, I do something like this.</span> </p><p><span
  m='1941000'>I keep building up, then the inductor begins to</span> <span
  m='1945000'>play a role, and then I taper off again.</span> </p><p><span
  m='1950000'>This kind of a filter where I kill low and high frequencies</span>
  <span m='1956000'>and pass intermediate frequencies is called a band</span>
  <span m='1962000'>pass filter, BPF. This means that it passes</span> <span
  m='1966000'>frequencies in some band. Let's get some more insight on</span>
  <span m='1973000'>this by writing down the equations.</span> </p><p><span
  m='1977000'>So, Vr divided by Vi is simply R.</span> </p><p><span
  m='1982000'>Using the impedance relation it is R divided by j omega L
  plus</span> <span m='1990000'>one divided by j omega C plus R. I am going to
  use this equation</span> <span m='1998000'>later, so let me stash it away on
  my stack and put a little</span> <span m='2006000'>notation there. I am going
  to multiply</span> <span m='2011000'>throughout by j omega C. And what I end
  up getting is j</span> <span m='2018000'>omega RC divided by one plus R j
  omega RC, and then here,</span> <span m='2024000'>I get j times j is minus
  one, so I get minus omega squared.</span> </p><p><span m='2031000'>Let me
  rewrite it this way. I get minus omega squared.</span> </p><p><span
  m='2039000'>So, j j is minus one, omega times omega is omega</span> <span
  m='2044000'>squared, and then I get an LC. That's what I end up
  getting.</span> </p><p><span m='2050000'>And if I take the absolute value
  here, I end up getting,</span> <span m='2056000'>back to your complex algebra,
  the square root of this real</span> <span m='2063000'>value squared plus
  imaginary value squared.</span> </p><p><span m='2069000'>So, one minus omega
  squared LC plus omega RC squared.</span> </p><p><span m='2074000'>This is
  from, you can look it up in your</span> <span m='2078000'>complex algebra
  appendix in the course notes.</span> </p><p><span m='2082000'>It's simply
  omega RC here, then square of the real value</span> <span m='2087000'>plus the
  square of the imaginary value, and take the square root</span> <span
  m='2094000'>of that. By staring at this,</span> <span m='2096000'>you can
  notice that you realize a really important property.</span> </p><p><span
  m='2104000'>When omega equals LC. I'm sorry.</span> </p><p><span
  m='2108000'>When omega equals one divided by LC, what happens?</span>
  </p><p><span m='2114000'>Sorry, square root of LC. When omega is one divided
  by</span> <span m='2121000'>square root of LC then omega squared times LC
  becomes one.</span> </p><p><span m='2130000'>When this is true then this
  becomes one, and one and one</span> <span m='2134000'>cancel out. And, not
  only that,</span> <span m='2137000'>when these cancel out, these two cancel
  out at that</span> <span m='2141000'>point, so I end up getting a one, which
  means that when omega</span> <span m='2147000'>equals omega nought equals one
  by square root of LC and I end</span> <span m='2152000'>up getting a value
  that is one. It's pretty amazing.</span> </p><p><span m='2158000'>Which means
  that if I drive this at omega nought,</span> <span m='2161000'>if my sinusoid
  has a frequency omega nought where omega nought</span> <span m='2166000'>is
  one by square root of LC, if I'm sitting here and this is</span> <span
  m='2171000'>a black box on the right-hand side, and I drive this at a</span>
  <span m='2176000'>frequency omega nought equals one divided by square root
  of</span> <span m='2180000'>LC, what does this entire circuit look like to
  me?</span> </p><p><span m='2184000'>I'm sitting there, the black box
  here.</span> </p><p><span m='2189000'>I'm driving it at omega nought equals
  one by square root of LC</span> <span m='2193000'>at that frequency. What does
  that circuit look</span> </p><p><span m='2196000'>like? Yes. It looks like a
  resistor. It's pretty amazing.</span> </p><p><span m='2200000'>It means that
  even though I have an L and a C here,</span> <span m='2203000'>if I happen to
  drive this at omega nought then the circuit</span> <span m='2207000'>looks
  purely resistive and it seems to give me the same input</span> <span
  m='2211000'>appearing at the output. In other words,</span> <span
  m='2214000'>the effect of these two cancels out.</span> </p><p><span
  m='2218000'>And that aspect is called driving the circuit at its</span> <span
  m='2222000'>resonance point. Resonance is when you're</span> <span
  m='2225000'>driving the circuit at omega nought equals one by a square</span>
  <span m='2230000'>root of LC.</span> </p><p><span m='2241000'>I will very
  quickly sketch for you a couple of other ways of</span> <span
  m='2247000'>looking at circuits. Supposing I looked at this</span> <span
  m='2252000'>value here, Vlc, I looked at the value across</span> <span
  m='2257000'>the inductor and the capacitor, what will the frequency</span>
  <span m='2263000'>response look like? I am looking at the voltage</span> <span
  m='2268000'>across the inductor and the capacitor in series.</span>
  </p><p><span m='2273000'>Let's see. Let's go back to our usual</span> <span
  m='2277000'>mantra. Think about Steve Umans when</span> <span m='2281000'>you
  do this. What would he do?</span> </p><p><span m='2283000'>He would say ah-ha,
  at very low frequencies the</span> <span m='2287000'>capacitor is going to
  look like an open circuit.</span> </p><p><span m='2290000'>In my voltage
  divider, I am measuring the voltage</span> <span m='2294000'>across an open
  circuit, so the entire Vi must drop</span> <span m='2298000'>across the
  inductor and capacitor.</span> </p><p><span m='2300000'>Similarly, at very
  high frequencies the inductor looks</span> <span m='2305000'>like an open
  circuit now, so it looks like this.</span> </p><p><span m='2310000'>At very
  high frequencies inductor is an open circuit.</span> </p><p><span
  m='2315000'>And, again, I'm looking at the voltage divider across the
  near</span> <span m='2322000'>infinite resistance, impedance, so I get a
  high</span> <span m='2327000'>value here as well. Well, in the middle the
  value</span> <span m='2332000'>dips and I get something like this.</span>
  </p><p><span m='2336000'>So, this thing is called a band stop filter.</span>
  </p><p><span m='2342000'>Here I can nail any specific frequency, as long as
  the</span> <span m='2347000'>frequency falls in roughly that regime.</span>
  </p><p><span m='2352000'>Yet another example.</span> </p><p><span
  m='2360000'>The reason I'm working on so many examples is that to</span> <span
  m='2363000'>experts, a large part of what they do is look at a circuit
  and</span> <span m='2367000'>boom, give a rough form of how it looks
  like.</span> </p><p><span m='2370000'>That can get you half the way there in
  most of what you're</span> <span m='2373000'>going to do. How did this look
  like?</span> </p><p><span m='2377000'>If I take the voltage Vo versus Vi,
  let's take a look.</span> </p><p><span m='2383000'>At very low frequencies,
  the inductor looks like a short</span> <span m='2389000'>circuit, correct? I
  am talking the voltage across</span> <span m='2394000'>a short circuit, so it
  looks like this.</span> </p><p><span m='2400000'>At very high frequencies, I
  am taking a voltage across a</span> <span m='2404000'>parallel combination,
  but the capacitor is now a</span> <span m='2409000'>short circuit. So, that
  looks like a</span> <span m='2412000'>capacitor. This looks like an inductor
  out</span> <span m='2416000'>here and this is a capacitor holding sway
  here.</span> </p><p><span m='2420000'>And so, somewhere in the middle it goes
  up and comes down like</span> <span m='2425000'>that. So, it's a band pass
  filter.</span> </p><p><span m='2430000'>What is amazing is that you can take
  fairly complicated</span> <span m='2433000'>circuits, and just by doing a
  quick analysis of what happens</span> <span m='2436000'>at very low
  frequencies, what happens at very high</span> <span m='2439000'>frequencies,
  you can roughly sketch the response.</span> </p><p><span m='2442000'>And then
  what you should do, in addition to that,</span> <span m='2445000'>is if it's a
  second order circuit, just assume that it's</span> <span m='2448000'>going to
  do something interesting at its resonance</span> <span m='2451000'>frequency,
  at omega nought equals one by square root of LC.</span> </p><p><span
  m='2454000'>Something interesting is going to happen.</span> </p><p><span
  m='2457000'>Check it out. And for circuits that are first</span> <span
  m='2461000'>order, RC or RL, the important number is the</span> <span
  m='2465000'>time constant RC. Usually, when you're driving it</span> <span
  m='2469000'>at one by RC, omega equals one by RC then</span> <span
  m='2472000'>what happens is that you often times end up getting a value</span>
  <span m='2477000'>that is one by square root two times the input value in
  the</span> <span m='2482000'>circuits we looked at here. Next, what I am going
  to do is</span> <span m='2486000'>talk about a major, major application of
  filters.</span> </p><p><span m='2492000'>And that is an AM receiver. Let me do
  Radios 101 for 30</span> <span m='2501000'>seconds. These guys have an
  antenna.</span> </p><p><span m='2508000'>You take a ground here. You pick up a
  signal at your</span> <span m='2517000'>antenna. There is an implied ground
  as</span> <span m='2522000'>well. And what you do,</span> <span m='2523000'>as
  a first step, is you begin processing the</span> <span m='2527000'>signal now.
  What we place right there is a</span> <span m='2530000'>little filter that
  looks like this.</span> </p><p><span m='2532000'>It is a inductor and a
  capacitor in parallel.</span> </p><p><span m='2536000'>And this capacitor is
  really your tuner that you can tune to</span> <span m='2540000'>radio
  frequencies. And then what you have here is</span> <span m='2544000'>a bunch
  of other processing and end up with your speaker.</span> </p><p><span
  m='2550000'>And the processing that happens here is you have a
  demodulator,</span> <span m='2556000'>you have an amplifier and a bunch of
  other things that let's</span> <span m='2562000'>not worry about them for now.
  What we do here is the antenna</span> <span m='2568000'>picks up a signal. So,
  in some sense,</span> <span m='2571000'>this part of the circuit here is your
  source.</span> </p><p><span m='2576000'>I could replace it with its Thevenin
  equivalent as follows.</span> </p><p><span m='2589000'>So, the front end of
  your radio looks like a Vi,</span> <span m='2593000'>R, L and a C. Where have
  you seen this</span> <span m='2597000'>before? Right there.</span>
  </p><p><span m='2599000'>That's the front end of radios. Let me tell you why I
  need a</span> <span m='2606000'>band pass filter in a radio out here.</span>
  </p><p><span m='2611000'>The way life works is as follows.</span> </p><p><span
  m='2615000'>I have my frequency. Let me do this not in radians</span> <span
  m='2621000'>but in kilohertz for now, and let me plot your radio</span> <span
  m='2628000'>signal strength. In the Boston area,</span> <span m='2632000'>the
  signals go between 540 kilohertz and they go all the</span> <span
  m='2639000'>way to 1600 kilohertz. In some areas we have begun to</span> <span
  m='2646000'>use the 1700 extra band as well for some new stations.</span>
  </p><p><span m='2650000'>This is the frequency range of interest.</span>
  </p><p><span m='2653000'>If you look at your radio tuner, you will see
  540</span> <span m='2657000'>kilohertz all the way up to 1600 and you can tune
  your AM radio.</span> </p><p><span m='2662000'>The way it works is that each
  station is given 10 kilohertz of</span> <span m='2667000'>spectrum here. And
  so, this is at 1000</span> <span m='2671000'>kilohertz, 1010 kilohertz and so
  on.</span> </p><p><span m='2676000'>And each station transmits its signal in
  plus or minus 5</span> <span m='2683000'>kilohertz around that point. And this
  station transmits it</span> <span m='2690000'>here and this station transmits
  it here and so on.</span> </p><p><span m='2697000'>This is 1030. This guy is
  WBZ News Radio</span> <span m='2702000'>1030, for those of you who listen to
  it.</span> </p><p><span m='2706000'>What happens is that at 10 kilohertz, each
  station gets 10</span> <span m='2712000'>kilohertz, and so WBZ transmits in
  the 10 kilohertz around 1030.</span> </p><p><span m='2718000'>Notice that each
  of these signals transmitted by radio</span> <span m='2723000'>stations happen
  within small bands.</span> </p><p><span m='2728000'>Now, you will learn a lot
  more about modulation and how do you</span> <span m='2731000'>get a signal to
  go in a small band and all that stuff.</span> </p><p><span m='2734000'>You
  will learn about that in</span> <span m='2736000'>For now, don't worry about
  how I did all of this.</span> </p><p><span m='2739000'>How do you listen to
  that station?</span> </p><p><span m='2741000'>The way you listen to that
  station is you put a low pass</span> <span m='2744000'>filter here. You put a
  low pass filter that</span> <span m='2747000'>does the following. Let's say I
  want to hear WBZ</span> <span m='2756000'>If I pass this entire signal through
  that filter.</span> </p><p><span m='2760000'>And if I arrange to have the
  omega nought of my filter at</span> <span m='2767000'>omega nought at 1030
  then this is the response of my filter.</span> </p><p><span m='2771000'>And I
  am going to pick out this guy and cut out everything else.</span> </p><p><span
  m='2777000'>I am just going to get this.</span> </p><p><span m='2800000'>Let's
  listen to the station for some time.</span> </p><p><span m='2872000'>So, you
  can see I can tune to the station WBUL.</span> </p>
uid: b73cf7ac8b4dd35b59f24e1f4a3c2edd
type: courses
layout: video
---
