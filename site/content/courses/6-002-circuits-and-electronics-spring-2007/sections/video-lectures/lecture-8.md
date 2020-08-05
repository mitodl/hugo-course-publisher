---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Dependent sources and amplifiers</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec08.jpg
    parent_uid: eaf60af4064b5d6c465d22833456c412
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-8/thumb_lec08.jpg
    title: thumb_lec08.jpg
    type: null
    uid: 030d2f502f9560388323e9884e072c88
  - id: Video-YouTube-Stream
    media_location: bEJ0-8pANA4
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Video-YouTube-Stream
    type: Video
    uid: 8b033d7eca505b9d0877142b492e26f9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/bEJ0-8pANA4/default.jpg'
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6ef74a65a047b8d274fe8a21563354bd
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Video-iTunes U-MP4
    type: Video
    uid: 1f5a455889c76d21cd7d9b1940b5142b
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/mit-6.002-lec8-30sep2003-220k.mp4
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Video-Internet Archive-MP4
    type: Video
    uid: d7ce82ddaa27b690ced11dc151884e28
  - id: Thumbnail-OCW-JPG
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: dc06917307e5c3fecf597897e7086a4e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: bEJ0-8pANA4
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 469efcab2598059c9d0449fb35acde92
  - id: bEJ0-8pANA4.srt
    parent_uid: eaf60af4064b5d6c465d22833456c412
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-8/bEJ0-8pANA4.srt
    title: 3play caption file
    type: null
    uid: be07df1e50bfa8c8faa0566651f51df7
  - id: bEJ0-8pANA4.pdf
    parent_uid: eaf60af4064b5d6c465d22833456c412
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-8/bEJ0-8pANA4.pdf
    title: 3play pdf file
    type: null
    uid: b5a0a33274a7363b0d232c313010f60d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8bfd1172c66199e02c325644a8d891ef
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: eaf60af4064b5d6c465d22833456c412
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 75ec7283c6f69654d24b5f903429c8d3
inline_embed_id: '36735412lecture8:dependentsourcesandamplifiers33264142'
order_index: 201
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a title="Open in a new window." target="_blank"
  href="./resolveuid/05fef0ad87134781c8f285e47973023b">PDF</a>)<br />
  Demonstration: S/SR/SCS models (<a title="Open in a new window."
  target="_blank"
  href="./resolveuid/b268acba2f5c12be344b2c565f45faab">PDF</a>)</p>
short_url: lecture-8
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-8
title: 'Lecture 8: Dependent Sources and Amplifiers'
transcript: >-
  <p><span m='6000'>All right, good morning. So today, we are going to
  talk</span> <span m='13000'>about what is both a basic device in
  itself,</span> <span m='20000'>the amplifier, and it also serves as a
  real</span> <span m='26000'>key example of both nonlinear analysis and small
  signal</span> <span m='34000'>analysis. So, today, dependent sources</span>
  <span m='40000'>and amplifiers.</span> </p><p><span m='61000'>So, let me first
  spend a few seconds just pointing out to you</span> <span m='66000'>some of
  the key points from our previous lectures.</span> </p><p><span m='70000'>I
  also want to point out that each chapter in the course notes</span> <span
  m='75000'>has a summary at the end of it. And if you take a quick scan
  of</span> <span m='80000'>the summary at the end of each chapter, it
  highlights the major</span> <span m='86000'>takeaway points from each
  chapter.</span> </p><p><span m='90000'>It stresses what's important, and if
  you have to remember a</span> <span m='95000'>few things, what are those
  things to remember?</span> </p><p><span m='99000'>So, to quickly review, we
  talked about a few primitive</span> <span m='103000'>elements: resistors,
  voltage sources,</span> <span m='107000'>and so on. And by now, you should
  have the</span> <span m='110000'>facility to play around with these device
  elements.</span> </p><p><span m='115000'>And then we talked about the Node
  method, and this is kind of</span> <span m='120000'>the workhorse of 6.002.
  When in doubt,</span> <span m='125000'>use the Node method. OK, and this will
  work both for</span> <span m='130000'>linear circuits and nonlinear
  circuits.</span> </p><p><span m='133000'>OK, so if you see a problem, or if
  you see a situation in</span> <span m='139000'>real life that requires
  analysis, then as a first step,</span> <span m='144000'>you should try to
  think of whether you could apply some of</span> <span m='150000'>the key
  intuitive shortcut methods, superposition.</span> </p><p><span m='156000'>One
  of my favorites, the Thevenin method,</span> <span m='159000'>the Norton
  method, or the method that involves</span> <span m='162000'>composition, that
  is very quickly analyzing circuits that</span> <span m='167000'>have resistors
  in series and parallel.</span> </p><p><span m='170000'>OK, so if you can apply
  one of these quick, intuitive,</span> <span m='175000'>shortcut methods, go do
  so.</span> </p><p><span m='177000'>If you can't, then usually you can resort
  to</span> <span m='180000'>the Node method irrespective of whether the circuit
  is linear or</span> <span m='185000'>nonlinear. So the last week was focused
  on</span> <span m='190000'>the nonlinear method or nonlinear circuits,</span>
  <span m='193000'>and we spent the first lecture talking about a
  straightforward</span> <span m='198000'>application of the Node method, which
  gave us a bunch of</span> <span m='202000'>nonlinear equations that we had to
  solve.</span> </p><p><span m='205000'>In the last lecture, we talked about the
  small</span> <span m='209000'>signal trick. What we said is if you look
  at</span> <span m='213000'>the whole space of nonlinear circuits, then within
  that</span> <span m='217000'>space, if we focus on small variations, small
  perturbations</span> <span m='222000'>about an operating point, then even the
  behavior of</span> <span m='226000'>nonlinear circuits in that small regime
  would be linear.</span> </p><p><span m='231000'>So small signal method.</span>
  </p><p><span m='247000'>And as an example, I showed you how I could take
  a</span> <span m='251000'>highly nonlinear device like the garage door opener
  LED,</span> <span m='255000'>and using that, build a pretty nice
  transmitter</span> <span m='259000'>that would transmit music. And as long as
  we kept the</span> <span m='264000'>signal small, and operated the device in
  a</span> <span m='267000'>region where its transfer curve was relatively
  smooth,</span> <span m='272000'>and I biased, or set the operating
  point</span> <span m='275000'>appropriately, I would get a linear,</span>
  <span m='278000'>small signal response. OK.</span> </p><p><span m='282000'>So
  today, we're going to do a couple things.</span> </p><p><span m='288000'>We're
  going to look at dependent sources.</span> </p><p><span m='294000'>And the
  reading for this is section 2.6 of your course</span> <span m='302000'>notes.
  And, the dependent source will</span> <span m='307000'>be a new element in
  your tool chest.</span> </p><p><span m='311000'>We will also do amplifiers,
  and amplifiers are in section</span> <span m='317000'>7.1 and section 7.2 of
  your course notes.</span> </p><p><span m='321000'>So, before I begin with
  dependent sources,</span> <span m='326000'>I'm just a huge believer in
  motivating things with real</span> <span m='332000'>world examples. OK, so let
  me start by</span> <span m='336000'>motivating: why we need an
  amplifier?</span> </p><p><span m='339000'>Why do we need to do things like
  this?</span> </p><p><span m='342000'>Or why do we even bother? And, spend a
  few minutes really</span> <span m='347000'>getting you to appreciate that
  amplification is fundamental.</span> </p><p><span m='351000'>OK, it's as
  foundational to life as high fat potato chips</span> <span m='356000'>and
  stuff like that. So, let's do some basic</span> <span m='361000'>examples
  here. So first, let me talk about,</span> <span m='366000'>why do we need to
  amplify signals.</span> </p><p><span m='370000'>Why amplify? Why do we care
  about building</span> <span m='375000'>an amplifier? So, an amplifier,</span>
  <span m='379000'>think of a little box, and apply some sort of small</span>
  <span m='385000'>input. And I get a larger output.</span> </p><p><span
  m='391000'>In this example, this may be a voltage with a</span> <span
  m='395000'>swing of 10 mV, and in this case,</span> <span m='398000'>the
  output might be another voltage with a swing of,</span> <span m='402000'>say,
  100 mV. And commonly,</span> <span m='405000'>the amplifier, in addition to an
  input and an</span> <span m='409000'>output, input port and output port, may
  also contain the power</span> <span m='415000'>port, OK, so that I can apply a
  power supply to the amplifier</span> <span m='420000'>because commonly as an
  amplifier signal, I'm looking for a power</span> <span m='426000'>gain as
  well, an increase in the power</span> <span m='430000'>provided by the output.
  So, that's an abstract</span> <span m='436000'>definition of an amplifier, and
  let's take a look at an</span> <span m='442000'>example of why we may need
  this. So let's say I have a small,</span> <span m='448000'>useful signal, and
  let's say the signal has 1</span> <span m='453000'>mV peak to peak. And, I'm
  looking to transmit</span> <span m='458000'>the signal over a wire to some
  other point.</span> </p><p><span m='461000'>But let's say that in this
  environment, I get a bunch of</span> <span m='465000'>noise that is in a noisy
  environment.</span> </p><p><span m='468000'>And in this environment, let's
  assume that some noise</span> <span m='472000'>may get superimposed. And if I
  have a 1 mV signal,</span> <span m='476000'>and 10 mV of noise, then what I
  end up with at the</span> <span m='480000'>output is something that looks like
  this.</span> </p><p><span m='485000'>And it's really hard to distinguish my 1
  mV signal from</span> <span m='490000'>that large amount of noise. On the
  other hand,</span> <span m='494000'>if I do the following, if I took the
  signal and passed</span> <span m='499000'>the signal to an amplifier, and I
  amplified the signal to</span> <span m='505000'>be a much larger version of
  the same signal, let's say in this</span> <span m='511000'>particular
  situation 100 mV peak to peak signal.</span> </p><p><span m='517000'>OK, so I
  magnified the signal by a factor of 100.</span> </p><p><span m='521000'>OK,
  let's say it's a linear amplifier, I linearly amplified</span> <span
  m='526000'>signal to be 100 mV, then in that case,</span> <span m='529000'>if
  I had a noise on top of this, it's going to be less</span> <span
  m='534000'>discernible. The signal will look like this.</span> </p><p><span
  m='537000'>OK, my 10 mV noise would add on to it.</span> </p><p><span
  m='542000'>But, this is still pretty decent.</span> </p><p><span m='544000'>I
  can still recognize the input.</span> </p><p><span m='546000'>And so, this is
  one application of amplification.</span> </p><p><span m='550000'>If I need to
  send something from point A to point B as an</span> <span m='554000'>analog
  signal, then an amplified signal is</span> <span m='557000'>less prone to
  noise attacks than a small signal.</span> </p><p><span m='561000'>Not
  surprisingly, a large number of devices that</span> <span m='564000'>are used
  in everyday life have amplifiers built into them.</span> </p><p><span
  m='570000'>So, get a little cell phone, and virtually every single cell</span>
  <span m='573000'>phone contains an amplifier. By the way, this is an
  all</span> <span m='577000'>digital cell phone. It's a Kyocera,</span> <span
  m='579000'>I forget the number now. It's completely digital.</span>
  </p><p><span m='582000'>OK, although they say it's completely digital,</span>
  <span m='585000'>it turns out that a significant fraction of the circuitry
  is</span> <span m='589000'>analog, in particular, so digital is sort of
  a</span> <span m='592000'>marketing term to say that there's something special
  about</span> <span m='596000'>this. But remember,</span> <span
  m='597000'>there's a bunch of analog stuff.</span> </p><p><span m='601000'>So,
  here's my little antenna from the cell phone.</span> </p><p><span
  m='604000'>OK, and typically the first thing that happens to a signal</span>
  <span m='609000'>as it comes out of the antenna in your cell phone is,</span>
  <span m='613000'>look at cell phone circuits, or cell phone systems would
  be</span> <span m='618000'>something that looks like this, OK, this, and may
  have a label</span> <span m='623000'>LNA. If someone were to take a
  guess</span> <span m='626000'>at what LNA might stand for? What's that?</span>
  </p><p><span m='630000'>Linear amplifier. That's pretty good.</span>
  </p><p><span m='633000'>So that's LNA. Close enough.</span> </p><p><span
  m='636000'>A is correct. It's amplifier.</span> </p><p><span m='638000'>What
  does L and N stand for? Low noise.</span> </p><p><span m='641000'>OK, so this
  stands for low noise amplifier.</span> </p><p><span m='645000'>So, I get a
  really rinky dinky small signal here,</span> <span m='649000'>and then the low
  noise amplifier amplifies a signal.</span> </p><p><span m='653000'>And in real
  cell phones, and for that matter,</span> <span m='656000'>in your 802.11b, or
  802.11a, or 802.11g wireless</span> <span m='660000'>cards, same thing.
  Antenna, low noise amplifier,</span> <span m='664000'>and then you may have a
  bunch of processing.</span> </p><p><span m='670000'>And commonly, you have a
  bunch of analog</span> <span m='672000'>processing. And then, you convert
  the</span> <span m='675000'>analog to a digital signal. OK, I recall last week
  I asked</span> <span m='679000'>somebody in class here, how would we transmit
  the</span> <span m='683000'>signal from point A to point B without it being
  impacted way</span> <span m='687000'>too much by noise, and he said,</span>
  <span m='689000'>oh, go digital. Good point.</span> </p><p><span
  m='692000'>OK, so if I go digital, I can transfer the signal</span> <span
  m='696000'>without noise being a real factor.</span> </p><p><span
  m='699000'>But the analog to digital converters need the signal</span> <span
  m='702000'>strengths to be a given value before it can chop it up into</span>
  <span m='707000'>digital levels. OK, so an amplifier is very</span> <span
  m='710000'>fundamental. OK, and so in this case,</span> <span m='713000'>what
  may be a signal of a few tens of microvolts to be</span> <span
  m='717000'>amplified to some large enough value that it can be further</span>
  <span m='721000'>processed. So, that's application of</span> <span
  m='726000'>amplification in the analog domain.</span> </p><p><span
  m='728000'>Let me talk about amplification in the digital domain.</span>
  </p><p><span m='733000'>So, that's in the analog domain.</span> </p><p><span
  m='735000'>This amplification is in the domain that I have both analog</span>
  <span m='740000'>and digital. OK, and now let me talk about</span> <span
  m='743000'>amplification in the digital domain, OK?</span> </p><p><span
  m='746000'>I'm going to argue that amplification is absolutely</span> <span
  m='750000'>foundational to the digital domain.</span> </p><p><span
  m='755000'>OK, the digital abstraction would not occur if I did not</span>
  <span m='760000'>have basic amplification. OK, and the next minute and
  37</span> <span m='765000'>seconds I will prove that to you, OK?</span>
  </p><p><span m='769000'>So, let's do so. So, let's suppose I have a
  very</span> <span m='773000'>simple digital system, and the system simply
  contains</span> <span m='779000'>a pair of inverters. So, if I send a one
  here,</span> <span m='783000'>it's a zero here and a one here, which is a very
  simple,</span> <span m='787000'>trivial, digital system. And here's the
  input.</span> </p><p><span m='790000'>Here's the output. And we said that for
  digital</span> <span m='793000'>systems of this sort to work, they have to
  follow a static</span> <span m='797000'>discipline. OK, our signals and
  our</span> <span m='799000'>circuits must follow a discipline for them all to
  work</span> <span m='803000'>together. And, the discipline we</span> <span
  m='806000'>described comprised of signals adhering to certain voltage</span>
  <span m='811000'>thresholds so that all the components in the system
  could</span> <span m='816000'>agree on what comprised a zero, and what
  comprised a one,</span> <span m='821000'>OK? So the way we did that was
  we</span> <span m='823000'>said that you would have a threshold called
  VIH,</span> <span m='827000'>V input high, and another threshold called</span>
  <span m='831000'>VIL, V input low. OK, and we said that this</span> <span
  m='834000'>circuit must recognize signals that are higher than VIH,</span>
  <span m='839000'>3 V for example as a one, and simultaneously,</span> <span
  m='843000'>any signal that has a voltage level less than VIL,</span> <span
  m='847000'>say, two volts, should be recognized as a zero.</span> </p><p><span
  m='853000'>That was the input constraint. On the output,</span> <span
  m='856000'>it had a similar set of constraints, where we had</span> <span
  m='860000'>tougher constraints on devices, where we said that the
  output</span> <span m='866000'>had to satisfy a output low constraint, output
  high</span> <span m='870000'>constraint. What this said is that for
  this</span> <span m='874000'>circuit to be called a good digital circuit that
  satisfies</span> <span m='878000'>the static discipline, signals that were
  ones here</span> <span m='881000'>should be recognized as such. And if I am
  producing a one as</span> <span m='885000'>an output, then the signal level
  should be higher than VOH.</span> </p><p><span m='889000'>Similarly, if the
  signal's a zero, then it should be less</span> <span m='893000'>than VOL. So
  as an example,</span> <span m='894000'>this may be 2 V, this may be 3
  V,</span> <span m='897000'>and this may be 4 V, and this may be 1 V.</span>
  </p><p><span m='901000'>OK, so input, I should recognize 2 V and less</span>
  <span m='905000'>as a zero, but at the output I have to produce a very,</span>
  <span m='911000'>very low value, 1 V.</span> </p><p><span m='913000'>So, I
  have some noise margin. So as an example,</span> <span m='918000'>say if I
  made a plot of the input/output,</span> <span m='923000'>so I get my VIL here
  and VIH here.</span> </p><p><span m='926000'>This is time. This would comprise
  a valid</span> <span m='931000'>digital signal: zero, one, zero,</span> <span
  m='934000'>one, and so on. OK, now, I had a tougher set of</span> <span
  m='941000'>constraints at the output. I would have VOL,</span> <span
  m='945000'>VOH. So, at the output,</span> <span m='948000'>OK, I'm required to
  stretch the ones and zeros to be further</span> <span m='954000'>apart from
  each other so that I get noise margin,</span> <span m='959000'>and the
  corresponding signal for our little circuit there</span> <span
  m='965000'>would look like so. Right, if this is a valid</span> <span
  m='970000'>input, then this would be the corresponding,</span> <span
  m='973000'>valid output. OK, and need I say more?</span> </p><p><span
  m='975000'>OK, you can see that, intuitively,</span> <span m='978000'>look,
  there's amplification happening here,</span> <span m='980000'>and the reason
  is that VOL is chosen to be less than VIL,</span> <span m='984000'>and VOH is
  higher than VIH. So therefore,</span> <span m='987000'>the signal has to be
  stretched. The signal has to be amplified.</span> </p><p><span m='992000'>OK,
  and what's the minimum amplification needed for the</span> <span
  m='997000'>system to work? The minimum amplification is if</span> <span
  m='1001000'>I had a signal that looked like this.</span> </p><p><span
  m='1004000'>OK, that barely skimmed the VIL, VIH level.</span> </p><p><span
  m='1009000'>OK, so if signal were this high peak to peak,</span> <span
  m='1013000'>VIH minus VIL, and what's the absolute minimum</span> <span
  m='1017000'>signal at the output? It would look something like</span> <span
  m='1022000'>this. OK, barely skimming VOL and</span> <span m='1026000'>VOH,
  OK, so the corresponding output level would be VOH minus</span> <span
  m='1031000'>VOL. OK, so this is the absolute</span> <span m='1034000'>minimum
  amplification that my digital circuit has to provide.</span> </p><p><span
  m='1039000'>OK, and notice, VOH is larger than VIH.</span> </p><p><span
  m='1043000'>VOL is smaller than VIL. Therefore, this quantity needs</span>
  <span m='1047000'>to be greater than one. OK, so I've shown you both a</span>
  <span m='1054000'>simple, graphical, intuitive explanation,</span> <span
  m='1058000'>and this is a slightly more formal proof that even the</span>
  <span m='1065000'>digital circuit really requires to have amplification built
  into</span> <span m='1072000'>it, if it is to satisfy valid static
  disciplines.</span> </p><p><span m='1077000'>Yes? Yes.</span> </p><p><span
  m='1080000'>The question is, is that the same as gain?</span> </p><p><span
  m='1083000'>Good question. Yes, the term amplification has</span> <span
  m='1088000'>many, many variants. You could say gain.</span> </p><p><span
  m='1091000'>You could say amplification. You could say increase in</span>
  <span m='1096000'>signal strength, and so on and so forth.</span> </p><p><span
  m='1100000'>And in fact, when talking about low noise</span> <span
  m='1104000'>amplifiers, people sometimes talk about having the low
  noise,</span> <span m='1109000'>high gain amplifier at the input stage.</span>
  </p><p><span m='1115000'>OK, so let me pause there in terms of
  motivation.</span> </p><p><span m='1119000'>So, I believe I've motivated every
  which way:</span> <span m='1124000'>pure analog, analog/digital,</span> <span
  m='1127000'>and digital. OK, so I've covered every</span> <span
  m='1130000'>single base here. And so, we need amplification.</span>
  </p><p><span m='1135000'>OK, so let's look at how to build a
  fundamental,</span> <span m='1140000'>primitive device called the
  amplifier.</span> </p><p><span m='1144000'>Before we do that, however, let me
  take a quick</span> <span m='1148000'>detour. It will be convenient for
  me,</span> <span m='1153000'>as I show you how to build an amplifier, to
  introduce a new</span> <span m='1159000'>device, a new element, called the
  dependent source.</span> </p><p><span m='1164000'>OK, let me introduce a new
  device for your arsenal of</span> <span m='1170000'>devices, along with
  resistors, You learned about a MOSFET,</span> <span m='1178000'>a switch,
  voltage source, current source,</span> <span m='1185000'>and now a dependent
  source. So, a dependent source looks</span> <span m='1194000'>like this, OK,
  has an output port,</span> <span m='1199000'>and has a control port. So, a
  dependent source in its</span> <span m='1207000'>simplest form has two ports:
  an input port and an output</span> <span m='1212000'>port. Remember, a port is
  a</span> <span m='1214000'>convenient pairing of terminals, and I apply
  signals to such</span> <span m='1219000'>terminal pairs. But this is a
  abstract diagram</span> <span m='1223000'>for a dependent source, and to get a
  little bit more</span> <span m='1227000'>specific, let me show you an example
  of a dependent source.</span> </p><p><span m='1234000'>So, let's say, here's
  my input,</span> <span m='1236000'>and I label the terminal variables for the
  input.</span> </p><p><span m='1240000'>VC is the voltage applied to the input,
  and IC is the current</span> <span m='1245000'>into this terminal here. And,
  here is the symbol for the</span> <span m='1250000'>dependent source. Much
  like a current source or a</span> <span m='1254000'>voltage source has a
  circle around it, the corresponding</span> <span m='1259000'>symbol for a
  dependent source is like so.</span> </p><p><span m='1264000'>So this example,
  for instance,</span> <span m='1266000'>is a dependent, current source.</span>
  </p><p><span m='1269000'>I can apply the corresponding output
  variables,</span> <span m='1274000'>I0, OK, and I can say that the current, I,
  is some function.</span> </p><p><span m='1280000'>In this example, I've
  designed the example that</span> <span m='1284000'>the current through the
  current source, I, is some function of</span> <span m='1290000'>the input
  voltage or the control voltage, VC.</span> </p><p><span m='1296000'>OK, so
  notice that the current through a current source,</span> <span m='1300000'>the
  current through this current source,</span> <span m='1303000'>I, is some
  function of another variable.</span> </p><p><span m='1305000'>OK, in this
  example, it's the voltage across its</span> <span m='1309000'>control port.
  Not surprisingly,</span> <span m='1311000'>this device is called a voltage
  controlled current source --</span> <span m='1330000'>-- or a VCCS. So, in
  like manner I can also</span> <span m='1334000'>devise other forms of sources.
  You can think of this is a</span> <span m='1339000'>device where a voltage
  controls an output current.</span> </p><p><span m='1344000'>You can think of
  all other combinations,</span> <span m='1347000'>current controlling current,
  voltage controlling voltage,</span> <span m='1353000'>current controlling
  voltage, and so on.</span> </p><p><span m='1358000'>So, another example, I
  give you another dependent</span> <span m='1363000'>source, and in this
  situation, my output current is controlled</span> <span m='1370000'>by an
  input current, VC.</span> </p><p><span m='1372000'>IC rather. And I claim that
  I for this one</span> <span m='1377000'>is some function of a current,
  IC.</span> </p><p><span m='1382000'>OK, it's another dependent source where
  the output current</span> <span m='1386000'>for its output port is related to
  the current,</span> <span m='1389000'>IC. And, this is a current</span> <span
  m='1391000'>controlled current source. OK, it's a current controlled</span>
  <span m='1395000'>current source. And, if I had lots of time on</span> <span
  m='1398000'>my hands, and I was wanting to kill time, I'd sit around</span>
  <span m='1402000'>drawing for you, other types of dependent</span> <span
  m='1405000'>sources. I would draw for you a current</span> <span
  m='1408000'>controlled voltage sourced, and I could also draw for you a</span>
  <span m='1413000'>voltage controlled voltage source.</span> </p><p><span
  m='1417000'>OK, so that's an abstract diagram for such a source.</span>
  </p><p><span m='1422000'>And so, let's do a few examples involving elements
  like this.</span> </p><p><span m='1428000'>To begin, just so you can build up
  your intuition,</span> <span m='1433000'>let me start by doing a very simple
  circuit,</span> <span m='1437000'>involving an independent current
  source,</span> <span m='1441000'>OK, just so we can relate back to what we've
  been doing so far.</span> </p><p><span m='1449000'>So, let's say I have some
  resistor, and I have a standard</span> <span m='1454000'>current source with
  current I nought.</span> </p><p><span m='1457000'>This is an independent
  current source.</span> </p><p><span m='1460000'>Remember the circle? And, some
  resistor,</span> <span m='1464000'>R, and let's say I care about the voltage
  across the resistor.</span> </p><p><span m='1469000'>OK, so I have a current I
  nought flowing through it.</span> </p><p><span m='1475000'>So, I can very
  quickly write down VR as, simply,</span> <span m='1479000'>I0 R. OK, it's the
  drop across the</span> <span m='1483000'>resistor when a current I nought
  flows through it.</span> </p><p><span m='1488000'>OK, so this is what you've
  been used to doing.</span> </p><p><span m='1493000'>Correspondingly, I can do
  an example with a</span> <span m='1497000'>dependent current source. And, as
  an example,</span> <span m='1503000'>I'll use a voltage controlled current
  source.</span> </p><p><span m='1507000'>OK, a voltage controlled current
  source is a dependent</span> <span m='1513000'>current source whose output
  current depends on the voltage</span> <span m='1520000'>applied at the control
  port of the current source.</span> </p><p><span m='1525000'>So let me build a
  little circuit.</span> </p><p><span m='1530000'>OK, so here's my current. And
  let's say it's VC IC for</span> <span m='1534000'>the control port, and
  similarly,</span> <span m='1537000'>let's say my current I here is some
  function of the control</span> <span m='1541000'>port voltage. And let's
  say,</span> <span m='1544000'>to be specific, there is some K over VC,</span>
  <span m='1547000'>some function. OK, there are a variety of</span> <span
  m='1550000'>dependent sources that can be built, and here's a
  hypothetical</span> <span m='1555000'>device where the output current is
  mathematically related to the</span> <span m='1561000'>input in the following
  manner. So, let me build a circuit of</span> <span m='1567000'>the following
  form. So, let's add the resistor,</span> <span m='1571000'>R, and here's my
  circuit, OK?</span> </p><p><span m='1574000'>And, as before, let me look to
  figuring out</span> <span m='1578000'>what VR is. So, notice that I have
  to</span> <span m='1581000'>supply some voltage at the input so that the
  output can depend on</span> <span m='1587000'>the input because right now I
  don't know what the input here.</span> </p><p><span m='1594000'>So what I'll
  do is let me apply VR over here.</span> </p><p><span m='1598000'>OK, so let me
  make this connection.</span> </p><p><span m='1601000'>OK, let me make the
  connection from here to here.</span> </p><p><span m='1606000'>What I've done
  is I've applied VR at the control port of the</span> <span
  m='1612000'>dependent current source. OK, and I often draw a circuit</span>
  <span m='1618000'>like this. This looks pretty messy.</span> </p><p><span
  m='1623000'>I will often draw the circuit like so: R, VR.</span> </p><p><span
  m='1646000'>OK, short form circuit drawing would look like this.</span>
  </p><p><span m='1650000'>This is a complete drawing that I show you the
  explicit</span> <span m='1654000'>connections of the control port, but
  oftentimes,</span> <span m='1658000'>when the control port does not have any
  other impact in the</span> <span m='1663000'>circuit, you can eliminate, don't
  explicitly show the</span> <span m='1668000'>control port. Rather, you can
  simply show the</span> <span m='1671000'>dependence of the output current on
  whatever circuit variable you</span> <span m='1677000'>have in mind. So, you
  can draw the diamond</span> <span m='1680000'>like this, and see its current
  is some function of VR.</span> </p><p><span m='1684000'>VR in this is case is
  K divided by VR, OK?</span> </p><p><span m='1690000'>OK, so let's go ahead and
  analyze this little circuit</span> <span m='1694000'>here, and look at what
  this might give us.</span> </p><p><span m='1698000'>Our goal, as before, is to
  find out the value,</span> <span m='1701000'>VR. So, in this case,</span>
  <span m='1703000'>let's apply the Node method to this node, and sum the
  currents</span> <span m='1708000'>into that node to be zero. OK, so sum the
  currents going</span> <span m='1714000'>into that node to be zero. The current
  going down is</span> <span m='1719000'>simply VR divided by R. OK, and that is
  equal to the</span> <span m='1724000'>current that is going out of the
  node.</span> </p><p><span m='1727000'>And so that is equal to F of VR.</span>
  </p><p><span m='1730000'>And I know that F of VR is given by K divided by
  VR.</span> </p><p><span m='1734000'>OK, a simple application of the Node
  method.</span> </p><p><span m='1740000'>So then, I collect VR's on the left
  hand side,</span> <span m='1744000'>and I get VR squared is K times R, OK, and
  VR is simply the</span> <span m='1750000'>square root of KR. There you
  go:</span> <span m='1753000'>I'm done. OK, I've gone ahead an applied</span>
  <span m='1757000'>the Node method to this, and when have to figure out
  the</span> <span m='1762000'>current here, I simply reflect the fact
  that</span> <span m='1767000'>it depends on VR like so, and I just go ahead
  and solve</span> <span m='1772000'>the circuit. Remember, the workhorse of
  the</span> <span m='1777000'>circuit industry, the Node method,</span> <span
  m='1780000'>when in doubt, apply it.</span> </p><p><span m='1782000'>It simply
  works. And notice, this is a nonlinear</span> <span m='1786000'>circuit. OK,
  the dependence is</span> <span m='1788000'>nonlinear, and I get the response
  like so.</span> </p><p><span m='1793000'>So, to plug in some numbers,
  supposing K was 10 to the minus</span> <span m='1800000'>3 amperes per volt,
  and R was one kilo ohm,</span> <span m='1805000'>then I can plug the numbers
  in and the kilo here cancels with</span> <span m='1812000'>the 10 to the minus
  3, and I get VR equals 1 V.</span> </p><p><span m='1818000'>OK, this simply
  says, if I build a circuit like this,</span> <span m='1824000'>then this
  voltage here will be 1 V.</span> </p><p><span m='1830000'>So, again, as long
  as you remember that the dependent</span> <span m='1834000'>source is simply
  another little circuit element,</span> <span m='1838000'>OK, and you usually
  draw just the output port for dependent</span> <span m='1843000'>sources, and
  reflect the way that the control affects the</span> <span m='1848000'>current,
  that'll suffice, and you get,</span> <span m='1852000'>through the application
  of the Node method, the variable you're</span> <span m='1857000'>interested
  in. Let's do another example,</span> <span m='1862000'>OK, of another fun
  current source, a voltage controlled</span> <span m='1868000'>current source,
  and look at it this way.</span> </p><p><span m='1872000'>So, let's say I have
  a resistor, and I have a current</span> <span m='1877000'>source, a resistor,
  RL, and this goes to some,</span> <span m='1882000'>I apply a VS here.
  Remember this short form</span> <span m='1886000'>notation; that's simply
  applying a supply VS between that node</span> <span m='1893000'>and the
  ground. OK, and let us say the current</span> <span m='1899000'>IV through the
  device is some function of the current at its</span> <span m='1905000'>control
  port. OK, so I'm not going to show</span> <span m='1909000'>you that. But
  remember that the device</span> <span m='1913000'>already looks like this,
  that there is a control port</span> <span m='1918000'>here. I'm not showing
  that to you.</span> </p><p><span m='1922000'>And let us say that I apply some
  voltage,</span> <span m='1925000'>VI, to the input port. The reason we often
  don't show</span> <span m='1929000'>the input port is for many practical
  dependent sources,</span> <span m='1933000'>the input has no other effect on
  the circuit.</span> </p><p><span m='1937000'>So, for example, in this
  case,</span> <span m='1939000'>the input has infinite resistance looking
  in.</span> </p><p><span m='1942000'>So therefore, if I apply a VI here,</span>
  <span m='1945000'>it doesn't draw any current from VI.</span> </p><p><span
  m='1948000'>I simply apply the voltage, VI.</span> </p><p><span m='1952000'>It
  doesn't affect the circuit in any other way except in terms</span> <span
  m='1958000'>of how it controls the current ID.</span> </p><p><span
  m='1962000'>So let's say the current ID is some function of VI because
  VI</span> <span m='1969000'>is applied at the control port. OK, and as I
  pointed out</span> <span m='1975000'>before, I oftentimes, just for
  clarity,</span> <span m='1979000'>just to show this dependent source
  explicitly.</span> </p><p><span m='1986000'>OK, so let's work the example. So
  as I said,</span> <span m='1990000'>I'm going to choose ID to be F of VI, and
  let's pick some</span> <span m='1996000'>specific parameters here. Let's say
  it's K by two VI</span> <span m='2002000'>minus one, both squared. OK, and
  let's say this is true</span> <span m='2008000'>for VI less than equal to one
  volt.</span> </p><p><span m='2013000'>And let us also say that ID equals zero
  for VI less than one</span> <span m='2018000'>volt. OK, it's a dependent
  source,</span> <span m='2020000'>and it can have various forms of dependences
  on the input.</span> </p><p><span m='2025000'>And, I just picked an example of
  some hypothetical,</span> <span m='2029000'>or as yet, hypothetical dependent
  source,</span> <span m='2033000'>the current through which is related to the
  input using a</span> <span m='2038000'>square law relation, VI minus one all
  squared as</span> <span m='2042000'>long as VI is greater than one. And if VI
  is less than one,</span> <span m='2048000'>then the current is simply zero, it
  shuts off.</span> </p><p><span m='2051000'>So, I can go ahead and apply. So,
  let's say I want to find</span> <span m='2056000'>out V0 versus VI. So, I care
  about finding out</span> <span m='2059000'>V0. V0 is the voltage of this
  node</span> <span m='2062000'>with respect to ground. OK, so it's a slightly
  more</span> <span m='2066000'>complicated circuit than you saw up here, than
  you saw up there.</span> </p><p><span m='2072000'>So, let's go ahead and do
  this example.</span> </p><p><span m='2075000'>Start by applying the workhorse
  of the circuits business,</span> <span m='2079000'>the Node method, and let's
  start with doing this</span> <span m='2083000'>for VI. Let's first do it for
  VI</span> <span m='2086000'>greater than one, notice the behavior of this
  is</span> <span m='2090000'>different for different ranges of VI.</span>
  </p><p><span m='2093000'>So let's first do it for VI greater than or equal to
  one and</span> <span m='2098000'>apply the Node method. Node method says sum
  the</span> <span m='2102000'>currents going into this node; we know the
  voltage at this</span> <span m='2106000'>node. It's VI.</span> </p><p><span
  m='2107000'>We know the voltage at this node.</span> </p><p><span
  m='2109000'>It's VS. OK, the only unknown is V</span> <span
  m='2111000'>nought. And so, let's go ahead and</span> <span m='2114000'>write
  the node equations for that node.</span> </p><p><span m='2116000'>So, the
  current going up, let me simply equate the</span> <span m='2120000'>current
  going up to the current that has been supplied by this</span> <span
  m='2124000'>particular node here. And, that should equate that</span> <span
  m='2127000'>the two of them should sum to zero, the current going up
  plus</span> <span m='2131000'>the current going down should sum to
  zero.</span> </p><p><span m='2136000'>So, I get V0 minus VS divided by
  R.</span> </p><p><span m='2138000'>That's the current going up. Plus, the
  current going down</span> <span m='2143000'>must sum to zero, plus ID must sum
  to zero.</span> </p><p><span m='2146000'>And ID is going to be K divided by
  two VI minus one all squared.</span> </p><p><span m='2151000'>That must equal
  zero. Straightforward application of</span> <span m='2156000'>Node method,
  current going up plus the current going down at</span> <span m='2160000'>this
  node should equal zero because the total current</span> <span
  m='2165000'>leaving the node must be zero, OK?</span> </p><p><span
  m='2169000'>So I can go ahead and simplify this, multiply it throughout
  by,</span> <span m='2173000'>I call this RL here. So, multiply it throughout
  by</span> <span m='2177000'>RL, and move all of this to the other side, so I
  get VS divided</span> <span m='2182000'>by RL, multiply it throughout by
  RL.</span> </p><p><span m='2184000'>I get VS at this side. I take this term to
  the other</span> <span m='2188000'>side. This becomes a minus.</span>
  </p><p><span m='2191000'>RL multiplies here, so I get KRL.</span> </p><p><span
  m='2194000'>That's the expression I get. V nought is VS minus KRL</span> <span
  m='2199000'>divided by two times VI minus one all squared.</span> </p><p><span
  m='2203000'>Let me put a box around this because I will be referring to</span>
  <span m='2208000'>this more times in 6.002 for a variety of reasons than
  probably</span> <span m='2214000'>any other equation on Earth. OK, this is the
  first time you</span> <span m='2219000'>saw it. You saw it here.</span>
  </p><p><span m='2223000'>OK, mark it down. You'll smile every other
  time</span> <span m='2226000'>you look at it in quizzes, and you will find out
  why this</span> <span m='2230000'>comes up very often in 6.002. So, I'll just
  give you a few</span> <span m='2234000'>seconds to savor this big moment in
  your 6.002 life.</span> </p><p><span m='2238000'>All right, OK, so it's pretty
  simple actually.</span> </p><p><span m='2241000'>I mean, there's really not
  much.</span> </p><p><span m='2243000'>A lot of this stuff is just a plain old,
  simple application of</span> <span m='2248000'>the Node method, and things
  just fall out.</span> </p><p><span m='2251000'>It's just so simple. So, the V
  nought,</span> <span m='2255000'>I apply the Node method, I get V nought for
  this</span> <span m='2261000'>nonlinear circuit. I can also it for VI less
  than</span> <span m='2267000'>one. For VI less than one,</span> <span
  m='2269000'>when VI is less than one, what happens?</span> </p><p><span
  m='2274000'>ID is zero. OK, since ID is zero,</span> <span m='2278000'>think
  of this as an open circuit.</span> </p><p><span m='2281000'>OK, so there's no
  voltage drop across RL.</span> </p><p><span m='2286000'>And, this voltage V
  nought is equal to VS.</span> </p><p><span m='2293000'>So, I like to see
  things in pictures.</span> </p><p><span m='2295000'>I'm not an equations kind
  of person.</span> </p><p><span m='2298000'>I'm much more of a graphical
  person.</span> </p><p><span m='2301000'>So, let me draw a little graph to show
  how V nought,</span> <span m='2305000'>to see the form of V nought, and then
  let's study that</span> <span m='2309000'>little system a little bit more
  carefully.</span> </p><p><span m='2314000'>So, this is page seven, and we plot
  V nought versus VI</span> <span m='2319000'>for you. And let's take a look at
  how</span> <span m='2322000'>this really simple circuit looks.</span>
  </p><p><span m='2326000'>This has got nothing. It's got an RL resistor</span>
  <span m='2330000'>connected to a supply, and a dependent current
  source,</span> <span m='2335000'>and I apply some voltage VI at the
  input.</span> </p><p><span m='2341000'>It's a very, very simple
  circuit.</span> </p><p><span m='2344000'>So, let's see. So as long as VI is
  less than</span> <span m='2348000'>one, the output stays at VS. OK, that makes
  intuitive sense,</span> <span m='2354000'>right? As long as the current here
  is</span> <span m='2358000'>zero, this is like an open circuit here.</span>
  </p><p><span m='2361000'>If this is an open circuit, then effectively,</span>
  <span m='2366000'>V nought is simply the voltage VS.</span> </p><p><span
  m='2371000'>V nought simply appears here. If you want to grunge through</span>
  <span m='2375000'>KVL and KCL, go ahead. VS minus RL times the current</span>
  <span m='2379000'>is V nought, and the current is zero so it's,</span> <span
  m='2383000'>yes. So, this is simply VS.</span> </p><p><span m='2385000'>When
  VI goes above one volt, fun stuff begins to happen.</span> </p><p><span
  m='2390000'>OK, when V nought goes above one volt, then this equation</span>
  <span m='2394000'>applies because VI is greater than one.</span> </p><p><span
  m='2398000'>This equation applies. And, when VI is a one,</span> <span
  m='2402000'>one minus one is zero. This term cancels out,</span> <span
  m='2406000'>so this is VS. OK, phew!</span> </p><p><span m='2408000'>So, I
  start off here. As VI increases,</span> <span m='2412000'>what happens now? As
  VI increases,</span> <span m='2415000'>this term here becomes increasingly
  negative,</span> <span m='2419000'>OK, subtracting from VS. OK, so I get some
  behavior like</span> <span m='2423000'>this. V nought begins to drop.</span>
  </p><p><span m='2426000'>And it makes intuitive sense, right?</span>
  </p><p><span m='2431000'>As ID begins to increase, the voltage here will begin
  to</span> <span m='2435000'>drop because I'm drawing more and more current
  through RL.</span> </p><p><span m='2440000'>I'm dropping more and more across
  RL.</span> </p><p><span m='2443000'>So more and more drops across RL, so V
  nought begins to drop</span> <span m='2448000'>too. So, it looks something
  like</span> <span m='2451000'>this. I'll show you a little demo,</span> <span
  m='2453000'>but my claim is that you have just seen an amplifier.</span>
  </p><p><span m='2458000'>Whoa. You just saw an amplifier.</span> </p><p><span
  m='2463000'>So, I snuck an amplifier by you, OK?</span> </p><p><span
  m='2467000'>So, I just snuck an amplifier past you.</span> </p><p><span
  m='2471000'>I'll show you why in a second. So, let's take a look at
  this</span> <span m='2478000'>waveform here. Let's not worry about what</span>
  <span m='2483000'>happens way down here. We'll talk about that a little</span>
  <span m='2489000'>later. But, look at this curve here.</span> </p><p><span
  m='2496000'>I claim there is amplification in the following sense.</span>
  </p><p><span m='2504000'>Focus on some change in the input voltage,</span>
  <span m='2511000'>delta VI, OK, and for that change in input</span> <span
  m='2517000'>voltage, I get some change in the output voltage.</span>
  </p><p><span m='2526000'>OK, for some change in the input voltage,</span>
  <span m='2529000'>delta VI, I get some change in the output voltage.</span>
  </p><p><span m='2533000'>And guess what? In this, at least the way I</span>
  <span m='2537000'>have drawn it, delta V nought divided by delta</span> <span
  m='2541000'>VI, if I can find regions of the curve where this is greater
  than</span> <span m='2546000'>one, then I have amplification. OK, so what's
  that saying?</span> </p><p><span m='2552000'>What that's saying is that if I
  apply some voltage here,</span> <span m='2557000'>OK, and I change that
  voltage by a small amount from,</span> <span m='2562000'>let's say, 2 V to
  2.1. OK, I am going to find the</span> <span m='2566000'>output voltage. Let's
  say I go from 2 V to 2.1</span> <span m='2570000'>here. OK, abstractly out
  there,</span> <span m='2573000'>I might have an output that goes from three
  to,</span> <span m='2577000'>let's say, two V perhaps. OK, so for a 0.1 change
  here,</span> <span m='2583000'>I'm going to get a bigger drop here, so from 3
  V to 2 V,</span> <span m='2587000'>giving me an amplification in this little
  circuit.</span> </p><p><span m='2590000'>OK, so we'll see this again and
  again, and you'll really</span> <span m='2594000'>understand it. So, I have a
  small change in</span> <span m='2597000'>the input, and I have a corresponding
  larger change in</span> <span m='2601000'>the output. So, I've shown you
  an</span> <span m='2603000'>amplifier. I haven't shown you a linear</span>
  <span m='2606000'>amplifier. There's an extra charge for</span> <span
  m='2609000'>that. OK, that'll happen later.</span> </p><p><span
  m='2612000'>OK, all I've shown you so far is an amplifier,</span> <span
  m='2615000'>and this happens to be a crummy amplifier.</span> </p><p><span
  m='2617000'>It's a nonlinear amplifier because, notice,</span> <span
  m='2620000'>this is not linear. It's a nice little curve,</span> <span
  m='2623000'>and so it's not linear. But, I promised you an</span> <span
  m='2625000'>amplifier, and I'm cheap, and that's all you get for now.</span>
  </p><p><span m='2629000'>OK, we'll see linear stuff later, but for now,</span>
  <span m='2632000'>I have a little amplifier. So, let's do some real
  numbers,</span> <span m='2635000'>and plot some numbers down, and also look at
  a demo.</span> </p><p><span m='2640000'>So, let's do an example. Let's say VS
  is 10 V,</span> <span m='2644000'>that the K is two milliamps per V squared,
  and let's say RL is</span> <span m='2650000'>five kilo-ohms, OK?</span>
  </p><p><span m='2652000'>So, let me substitute these values into that
  equation,</span> <span m='2658000'>and I get V nought is, VS is ten.</span>
  </p><p><span m='2661000'>So, it's ten minus, KRL divided by two.</span>
  </p><p><span m='2665000'>So, K is two milliamps. Two milliamps times
  five</span> <span m='2671000'>kilo-ohms is ten divided by two gives me
  five,</span> <span m='2676000'>and VI minus one squared. That's what I
  have.</span> </p><p><span m='2680000'>I just plug in a bunch of numbers, and
  that's what I get.</span> </p><p><span m='2686000'>So, what I'll do is let me
  just do a little table for you,</span> <span m='2692000'>and plot using real
  numbers, simply plot those values for</span> <span m='2697000'>you.</span>
  </p>
uid: eaf60af4064b5d6c465d22833456c412
type: course
layout: video
---
