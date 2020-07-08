---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Amplifiers - small signal model</p> 
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec10.jpg
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-10/thumb_lec10.jpg
    title: thumb_lec10.jpg
    type: null
    uid: 7875ce8ac8201ab197e64e716265b77e
  - id: Video-YouTube-Stream
    media_location: 9RqFFlZgf60
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Video-YouTube-Stream
    type: Video
    uid: 8561971fc97b4e8a98a5dc2c1631d613
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/9RqFFlZgf60/default.jpg'
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 693902e51dedb300ba1f92fbb93d3fe8
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Video-iTunes U-MP4
    type: Video
    uid: e0f48a6003780a73b7d75a6af3cadfc4
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-09oct2003-220k.mp4
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Video-Internet Archive-MP4
    type: Video
    uid: b7cb59939e6d5c68495bbfe62a8a00d5
  - id: Thumbnail-OCW-JPG
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 58f8df04ea2321acef15b187386bc0a5
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 9RqFFlZgf60
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 78fab3c90907bc422f094cb2aad0c846
  - id: 9RqFFlZgf60.srt
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-10/9RqFFlZgf60.srt
    title: 3play caption file
    type: null
    uid: 3641f8b6f60cf71210d1eca81adea528
  - id: 9RqFFlZgf60.pdf
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-10/9RqFFlZgf60.pdf
    title: 3play pdf file
    type: null
    uid: 9c81ffbe8075ee01caf4709269fe5f3a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 39b9832cf2a941869ffc66c85b2a0774
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3cd676bf13e83155e604a18997f6c102
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f5d125e93b1dbb264107fe282760d8fb
inline_embed_id: '89950601lecture10:amplifiers-smallsignalmodel34563373'
order_index: 237
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/3fd86dd2d2f64b08e2484dbb73a68b7b">PDF</a>)<br />
  Demonstration: MOSFET inverting amplifier-small signal (<a target="_blank"
  title="Open in a new window."
  href="./resolveuid/3869d6abe7f912065ec6b99767bfb9ee">PDF</a>)<br />
  Demonstration: IDS vs. VDS load line (<a target="_blank" title="Open in a new
  window." href="./resolveuid/04c5b9d07519db0f7d6a145175be86e2">PDF</a>)</p>
short_url: lecture-10
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-10
title: 'Lecture 10: Amplifiers - Small Signal Model'
transcript: >-
  <p><span m='0'>Good morning, all.</span> </p><p><span m='2000'>Good morning. I
  hope you guys did not spend</span> <span m='8000'>all of last night
  celebrating the Red Sox victory, And today we will take the next</span> <span
  m='14000'>but there is one more tonight. OK.</span> </p><p><span
  m='19000'>Let's see. I trust the quiz went OK.</span> </p><p><span
  m='24000'>What I will do today is take off from where we left off on</span>
  <span m='32000'>Tuesday. And continue our discussion of</span> <span
  m='38000'>the large signal and small signal analysis of our</span> <span
  m='44000'>amplifier. Today the focus will be on</span> <span m='49000'>"Small
  Signal Analysis".</span> </p><p><span m='62000'>So let me start by reviewing
  some of the material.</span> </p><p><span m='69000'>And, as you know, our
  MOSFET amplifier looks like</span> <span m='76000'>this.</span> </p><p><span
  m='90000'>One of the things you will notice in circuits,</span> <span
  m='93000'>as I have been mentioning all along in this course,</span> <span
  m='97000'>is that certain kinds of patterns keep repeating time and</span>
  <span m='102000'>time again. And this is one such pattern.</span> </p><p><span
  m='105000'>A three terminal device like the MOSFET with an input and
  the</span> <span m='110000'>drain to source port connected to RL and VS in
  series in the</span> <span m='115000'>following manner, this is a very common
  pattern.</span> </p><p><span m='120000'>There are several other common
  patterns.</span> </p><p><span m='122000'>The voltage divider is a common
  pattern.</span> </p><p><span m='125000'>We keep running into that again and
  again and again.</span> </p><p><span m='128000'>The Thevenin form, a voltage
  source in series with</span> <span m='132000'>the resistor is another very
  common form.</span> </p><p><span m='134000'>The Norton equivalent form, which
  is a current source in</span> <span m='138000'>parallel with a resistor is
  also very common.</span> </p><p><span m='141000'>And it behooves all of us to
  be very familiar with the analyses</span> <span m='145000'>of these things.
  Voltage dividers in particular</span> <span m='150000'>are just so common that
  you need to be able to look at it and</span> <span m='154000'>boom, be able to
  write down the expression for voltage dividers.</span> </p><p><span
  m='158000'>I would also encourage you to go and look at current
  dividers.</span> </p><p><span m='162000'>When you have two resistors in
  parallel and you have some</span> <span m='166000'>current flowing into the
  resistors to find out the</span> <span m='169000'>current in one branch versus
  the other very quickly.</span> </p><p><span m='173000'>The expression is very
  analogous to the voltage divider</span> <span m='177000'>expression. And some
  of these very common</span> <span m='181000'>patterns are highlighted in the
  summary pages in the course</span> <span m='186000'>notes, so it is good to
  keep track of those and be extremely</span> <span m='191000'>familiar with
  those patterns to the point where if you see it</span> <span m='196000'>you
  should be able to jump up and shout out the answer just by</span> <span
  m='201000'>looking at it without having to do any math.</span> </p><p><span
  m='204000'>So here was an amplifier. And then we noticed that when</span>
  <span m='209000'>the MOSFET was in saturation it behaved like a current
  source.</span> </p><p><span m='213000'>And this circuit would give us
  amplification while the MOSFET</span> <span m='217000'>was in saturation. So
  we agreed to adhere to the</span> <span m='220000'>saturation discipline which
  simply said that I was going to</span> <span m='223000'>use my circuit in a
  way that the MOSFET would always remain in</span> <span m='227000'>saturation
  in building things like amplifiers and so on.</span> </p><p><span
  m='230000'>And by doing that throughout the analysis I could make the</span>
  <span m='234000'>assumption that the MOSFET was in saturation.</span>
  </p><p><span m='237000'>I didn't have to go through -- Analysis became
  easier.</span> </p><p><span m='241000'>I didn't have to figure out now, what
  region is the MOSFET</span> <span m='245000'>in? Well, because of my
  discipline</span> <span m='247000'>it is always going to be in
  saturation.</span> </p><p><span m='250000'>But in turn what we had to do was
  conduct a large signal</span> <span m='253000'>analysis.</span> </p><p><span
  m='262000'>Again, in follow on courses you will be given circuits like</span>
  <span m='265000'>this. In fact, this very circuit with</span> <span
  m='268000'>a very high likelihood. And you will be looking at more</span>
  <span m='271000'>complicated models of the MOSFET.</span> </p><p><span
  m='273000'>Or you will be given the MOSFET like this and,</span> <span
  m='276000'>let's say in that course the designers do not adhere to the</span>
  <span m='280000'>saturation discipline, in which case you have to first</span>
  <span m='283000'>figure out is my MOSFET in its triode region or in the</span>
  <span m='286000'>saturation region? And depending on the region it</span>
  <span m='289000'>is in you have to apply different equations.</span>
  </p><p><span m='292000'>So it is one step more complicated than in 002.</span>
  </p><p><span m='297000'>In 002 we simplified our lives by following a
  discipline.</span> </p><p><span m='300000'>And let me tell you that following
  a discipline is quite</span> <span m='304000'>OK. When it simplifies our
  lives</span> <span m='306000'>and we can do good things with it, it is quite
  OK to do that.</span> </p><p><span m='310000'>We are not wimps or anything
  like that.</span> </p><p><span m='312000'>It is quite OK to have a discipline
  and agree that we are</span> <span m='316000'>going to play in this region of
  the playground and build</span> <span m='319000'>circuits in that manner. By
  doing so,</span> <span m='322000'>we could assume the MOSFET was in saturation
  all the time.</span> </p><p><span m='325000'>And analysis simply used a
  current source model.</span> </p><p><span m='330000'>By the same token, what
  becomes important is to</span> <span m='333000'>figure out what are the
  boundaries of valid operation of</span> <span m='338000'>the MOSFET in
  saturation? To do that we conducted a large</span> <span m='343000'>signal
  analysis. And it had two components to</span> <span m='346000'>it. One of
  course was to figure out</span> <span m='349000'>the output versus input
  response.</span> </p><p><span m='352000'>And what this usually does is that it
  does a nonlinear</span> <span m='356000'>analysis of this circuit. If it is a
  linear circuit it is</span> <span m='362000'>a linear analysis. And figures
  out what the values</span> <span m='365000'>of the various voltages and
  currents are in the circuit as a</span> <span m='369000'>function of the
  applied inputs and chosen parameters.</span> </p><p><span m='372000'>And the
  second step we said was to figure out valid operating</span> <span
  m='376000'>ranges --</span> <span m='387000'>-- for input and corresponding
  ranges for the other dependent</span> <span m='393000'>parameters such as VO.
  You could also find out the</span> <span m='398000'>corresponding operating
  range for the current IDS and so on.</span> </p><p><span m='404000'>So by
  doing this you could first analyze the circuit,</span> <span m='409000'>find
  out the "bias" parameters, find out the values of VI and</span> <span
  m='415000'>VO and so on. And then you could say all</span> <span
  m='420000'>right, provided, as long as VI stays within</span> <span
  m='424000'>these bounds my assumption that this is in saturation will
  hold</span> <span m='430000'>and everything will be fine. The reading for this
  is Chapter</span> <span m='438000'>step and revisit small signal
  analysis.</span> </p><p><span m='442000'>In the demo that I showed you at the
  end of last lecture,</span> <span m='447000'>I showed you an input triangular
  wave.</span> </p><p><span m='452000'>And the input triangular wave gave rise
  to an output.</span> </p><p><span m='456000'>And we noticed that we did have
  amplification,</span> <span m='459000'>I had a small input and a much bigger
  output.</span> </p><p><span m='463000'>I did have amplification when the
  MOSFET was in saturation but</span> <span m='467000'>it was highly nonlinear.
  The input was a triangular wave</span> <span m='472000'>and the output was
  some funny, it kind of looked like a</span> <span m='476000'>sinusoid whose
  extremities had been whacked down and kind of</span> <span
  m='481000'>flattened. And its upward going peak had</span> <span
  m='485000'>been shrunk. So it was a kind of weird</span> <span
  m='488000'>nonlinear behavior. I will show that to you again</span> <span
  m='492000'>later on. And so it amplified but it was</span> <span
  m='495000'>nonlinear. And remember our goal of two</span> <span
  m='498000'>weeks ago? We set out to build a linear</span> <span
  m='501000'>amplifier. So today we will walk down that</span> <span
  m='505000'>path and talk about building a linear amplifier.</span>
  </p><p><span m='510000'>So to very quickly revisit the input versus
  output</span> <span m='515000'>characteristic, VI versus VO,</span> <span
  m='519000'>this is VT and this is VS, this is what things looked</span> <span
  m='525000'>like. Also to quickly review the</span> <span m='529000'>valid
  ranges, until some point here the</span> <span m='533000'>amplifier was in
  saturation, the MOSFET was in saturation</span> <span m='540000'>and somewhere
  here I had VO being equal to VI minus a</span> <span m='546000'>threshold
  drop. At that point the MOSFET went</span> <span m='552000'>into its triode
  region and I no longer was following the</span> <span m='558000'>saturation
  discipline. So therefore this is my valid</span> <span m='563000'>region of
  operation. We also know that the output</span> <span m='568000'>was given by
  VS minus K (VI-VT) all squared RL over 2.</span> </p><p><span m='575000'>Again
  assuming the MOSFET is in saturation.</span> </p><p><span m='578000'>It is
  very important to keep stating this because this is</span> <span
  m='583000'>true only when the MOSFET is in saturation, when I am
  following</span> <span m='589000'>the discipline. Notice that this is a
  nonlinear</span> <span m='593000'>relationship. So VO depends on some
  funny</span> <span m='596000'>square law dependence on VI. The key here is how
  do we go</span> <span m='602000'>about building our amplifier? Take a look at
  this point here.</span> </p><p><span m='608000'>At this point here let's say I
  have a VI input.</span> </p><p><span m='613000'>Corresponding output is VO.
  Focus is this point.</span> </p><p><span m='617000'>And left to itself this
  was a nonlinear curve.</span> </p><p><span m='622000'>Remember the trick that
  we used in our nonlinear Expo Dweeb</span> <span m='628000'>example? We used
  the Zen Method.</span> </p><p><span m='631000'>Remember the Zen Method? We
  said look,</span> <span m='634000'>this is nonlinear, but if you can focus
  your mind</span> <span m='638000'>on this little piece of the curve here this
  looks more or</span> <span m='642000'>less linear. If I look at a small
  itty-bitty</span> <span m='646000'>portion of the curve and I do the Zen
  thing,</span> <span m='649000'>and kind of zoom in on here. This looked more
  or less</span> <span m='653000'>linear. This means that if I could work</span>
  <span m='656000'>with very small signals and apply the signal in a way that
  I</span> <span m='661000'>also had a DC offset of some sort.</span>
  </p><p><span m='665000'>Then I would be in a region of the curve, I would
  be</span> <span m='668000'>delineating a small region of the curve which would
  be more or</span> <span m='672000'>less linear. This was a small signal
  trick.</span> </p><p><span m='675000'>And what we will do here is simply
  revisit the small signal</span> <span m='679000'>model. Most of what I am
  going to do</span> <span m='681000'>from here on will be more or less a repeat
  of what you saw</span> <span m='685000'>for the light emitting expo
  dweeb.</span> </p><p><span m='689000'>Just that here I have a three terminal
  device,</span> <span m='692000'>with a little bit more complication.</span>
  </p><p><span m='695000'>The equation is different. I don't have to resort to
  a</span> <span m='700000'>Taylor series expansion. I will just do a
  complete</span> <span m='704000'>expansion of this expression and develop the
  small signal values</span> <span m='710000'>for you. Recall the small signal
  model.</span> </p><p><span m='713000'>It had the following steps. The first
  step will operate at</span> <span m='721000'>some bias point, VI, VO, and of
  course some</span> <span m='728000'>corresponding point IDS. This is Page
  3.</span> </p><p><span m='734000'>And then superimpose a small signal VI on
  top of the big fat</span> <span m='744000'>bias. Remember the "boost"?</span>
  </p><p><span m='750000'>So VI is the boost. Boom.</span> </p><p><span
  m='752000'>And above VI, I have small signal VI that I</span> <span
  m='758000'>apply. And our claim is that response</span> <span m='762000'>of
  the amplifier to VI is approximately linear.</span> </p><p><span
  m='784000'>The key trick with this is that for my small signal model
  here,</span> <span m='789000'>this is Page 3 here, and Page 2.</span>
  </p><p><span m='792000'>The key trick here is that with the small signal
  model,</span> <span m='796000'>I operate my amplifier at some operating
  point,</span> <span m='800000'>VO, VI. I superimpose a small signal VI</span>
  <span m='804000'>on top of small VI on top of big VI.</span> </p><p><span
  m='807000'>And then I claim that the response to VI is approximately</span>
  <span m='812000'>linear. And let me just embellish that</span> <span
  m='816000'>curve a little bit more.</span> </p><p><span m='823000'>Notice that
  in this situation this was my VI,</span> <span m='826000'>which is my bias
  voltage, this is VO, which is the output</span> <span m='831000'>bias, and of
  course not shown on this graph is the output</span> <span m='836000'>operating
  current which is IDS. One nice way of thinking about</span> <span
  m='843000'>this is to redraw this and think that your coordinate axes
  have</span> <span m='850000'>kind of shifted in the following manner.</span>
  </p><p><span m='854000'>This is VI. This is also on your Page 3.</span>
  </p><p><span m='858000'>This is VT. Remember this was the operating</span>
  <span m='863000'>point, VO and VI. And notice that we were</span> <span
  m='867000'>operating in this small regime of our transfer curve here.</span>
  </p><p><span m='875000'>And in effect what we are saying is that I am going
  to</span> <span m='879000'>apply small variations about VI and call those
  variations delta</span> <span m='885000'>VI or small VI. And the resulting
  variations</span> <span m='889000'>are going to look like delta VO. Also
  referred to as small V,</span> <span m='895000'>small O. So I will have small
  variations</span> <span m='898000'>here. And they give rise to</span> <span
  m='901000'>corresponding small variations there.</span> </p><p><span
  m='904000'>One way to view this is as if we are working with a new</span>
  <span m='909000'>coordinate system. Another way to view this is</span> <span
  m='912000'>that so the capital VI and capital VO correspond to my VI</span>
  <span m='917000'>and VO as the total voltages in my circuit, but at this
  bias</span> <span m='922000'>point I can think of another coordinate system
  here with</span> <span m='926000'>small VI and VO out there. And for small
  changes to VI,</span> <span m='932000'>I can figure out the corresponding
  small changes to</span> <span m='937000'>VO. Just that all the analysis
  I</span> <span m='940000'>perform here is going to be linear.</span>
  </p><p><span m='943000'>And I will prove it to you in a couple of different
  ways in the</span> <span m='948000'>next few seconds. When I am doing small
  signal</span> <span m='953000'>analysis I am operating here in this regime at
  some bias point.</span> </p><p><span m='960000'>You have also seen this
  before. How do I get a bias?</span> </p><p><span m='965000'>This is my
  amplifier RL and VS. This is Page 4.</span> </p><p><span m='970000'>VO. The
  way I get a bias is I apply</span> <span m='974000'>some DC voltage VI and
  superimpose on top of that my</span> <span m='980000'>small signal small VI.
  This is my DC bias that has</span> <span m='985000'>boosted up the signal to
  an interesting value.</span> </p><p><span m='992000'>And because of that what
  I can get is by varying VI as a small</span> <span m='997000'>signal with a
  very small amplitude, I am going to get a</span> <span m='1002000'>linear
  response here. And I can draw that for you as</span> <span
  m='1007000'>well.</span> </p><p><span m='1014000'>This is my bias point here.
  And if I vary my signal like so</span> <span m='1020000'>then my output should
  look like this.</span> </p><p><span m='1025000'>This is point VI, this is
  point VO,</span> <span m='1029000'>and this is my small signal VI and this is
  my small signal VO</span> <span m='1037000'>and this is capital VO. So this
  small thing here is VI.</span> </p><p><span m='1043000'>I would like to show
  you a little demo.</span> </p><p><span m='1050000'>I will start with the same
  demo I showed you the last time.</span> </p><p><span m='1054000'>I showed you
  the amplifier. In the demo I am going to apply</span> <span m='1059000'>a
  triangular wave. And initially I start with a</span> <span m='1062000'>large
  signal. And you will see that the</span> <span m='1065000'>output looks really
  corny, is going to look something like</span> <span m='1070000'>this. That's
  large signal response.</span> </p><p><span m='1072000'>And then I will begin
  playing with the input making it</span> <span m='1077000'>smaller, and you can
  see how it looks yourselves.</span> </p><p><span m='1082000'>There you go. So
  this is where I stopped the</span> <span m='1086000'>last time. The last
  lecture I applied this</span> <span m='1090000'>input, time is going to the
  right, and the purple curve in</span> <span m='1096000'>the background is the
  output. It looks much more like a</span> <span m='1102000'>sinusoid with some
  flattening of its tips.</span> </p><p><span m='1106000'>Nothing like an
  interesting triangular wave.</span> </p><p><span m='1112000'>What I will do
  next is that let me make sure I have enough of a</span> <span
  m='1117000'>boost here, enough of a DC voltage so that I am operating</span>
  <span m='1121000'>at some point here. I believe I already have that.</span>
  </p><p><span m='1125000'>Notice that I can shift up the triangular wave
  input,</span> <span m='1129000'>or I can shift it down. So let me bias it
  here.</span> </p><p><span m='1133000'>I have chosen a VI that's about, I
  forget how many volts</span> <span m='1137000'>per division it is, but I have
  chosen some VI here.</span> </p><p><span m='1143000'>And I biased it such that
  this is the input.</span> </p><p><span m='1146000'>You get a nonlinear
  response. It is amplified.</span> </p><p><span m='1149000'>It is much bigger.
  What I will do next is make VI</span> <span m='1152000'>that I apply smaller
  and smaller.</span> </p><p><span m='1154000'>I have already done the
  boosting.</span> </p><p><span m='1157000'>Boom, that's a boost. So I have
  boosted up your VI</span> <span m='1160000'>already. Next is I am going to
  shrink</span> <span m='1163000'>it, and hopefully you will see that if all
  that I am saying is</span> <span m='1167000'>truthful here you will see a
  triangular response.</span> </p><p><span m='1172000'>Let's go try it out.
  Watch the yellow.</span> </p><p><span m='1175000'>I am going to shrink the
  yellow and make it smaller and smaller.</span> </p><p><span m='1182000'>There
  you go. It is great when nature works</span> <span m='1187000'>like you expect
  it to. I have never seen a triangular</span> <span m='1192000'>wave looks so
  pretty in my life. It is awesome.</span> </p><p><span m='1197000'>Look at
  this. Here is a tiny triangular wave.</span> </p><p><span m='1203000'>And the
  output is also a triangular wave but it is much</span> <span m='1208000'>more
  linear. Yes.</span> </p><p><span m='1210000'>Question? What's that?</span>
  </p><p><span m='1212000'>The question is that the output here is only as big
  as the input</span> <span m='1218000'>used to be before. That's a good
  question.</span> </p><p><span m='1222000'>What I have done here is I am
  showing you a laboratory</span> <span m='1227000'>experiment. And let's assume
  that this</span> <span m='1231000'>input is the input I am getting from some
  sensor in the field.</span> </p><p><span m='1235000'>Assume that this is my
  input, not what I had before.</span> </p><p><span m='1238000'>Assume that this
  is my input to begin with and this is the</span> <span m='1241000'>amplified
  output. What I can also do is I can</span> <span m='1244000'>also change the
  bias. And we will see this at the end</span> <span m='1247000'>of the lecture,
  in the last ten minutes of</span> <span m='1249000'>lecture. How do you select
  a bias point?</span> </p><p><span m='1251000'>By changing your bias point you
  can change the properties of an</span> <span m='1255000'>amplifier to give you
  a preview of upcoming attractions.</span> </p><p><span m='1260000'>Let me ask
  you, what do you think should happen</span> <span m='1262000'>if I change the
  bias point? I have not shown you the math</span> <span m='1266000'>yet, so
  intuitively what do you think should happen?</span> </p><p><span
  m='1269000'>If I increase the bias what do you think is going to
  happen?</span> </p><p><span m='1273000'>Yes. Good insight.</span> </p><p><span
  m='1274000'>Higher bias will be more amplification.</span> </p><p><span
  m='1277000'>Let's see if our friend is correct.</span> </p><p><span
  m='1293000'>Let me set a higher bias.</span> </p><p><span m='1304000'>Not
  necessarily, I guess.</span> </p><p><span m='1305000'>You're actually right,
  by the way.</span> </p><p><span m='1307000'>I am playing a trick on everybody
  here.</span> </p><p><span m='1322000'>As I change my input bias. Notice that
  under certain</span> <span m='1325000'>conditions my output becomes smaller
  and gets more distorted.</span> </p><p><span m='1330000'>Under other
  conditions what is going to happen to my output is</span> <span
  m='1334000'>that it is becoming smaller and is going to get distorted
  again.</span> </p><p><span m='1339000'>So there are a bunch of funny effects
  happening that reflect</span> <span m='1343000'>on the bias point, but for an
  appropriate choice</span> <span m='1346000'>of bias point as I increase the
  bias the amplification should</span> <span m='1351000'>increase. And I will
  show you that in a</span> <span m='1354000'>few minutes. But it is a
  complicated</span> <span m='1356000'>relationship. Yes.</span> </p><p><span
  m='1364000'>This is finally getting fun. Here is the question.</span>
  </p><p><span m='1367000'>Professor Agarwal, we love your song and
  dance,</span> <span m='1370000'>but if you really want to get a high signal at
  the output and</span> <span m='1373000'>you want to amplify your big input
  signal how do you do it?</span> </p><p><span m='1378000'>So the question is
  let's say I have an input that is this big</span> <span m='1382000'>here, if
  it is this big, I have shown you how I can get</span> <span m='1386000'>things
  that are this big, but what if my input was this</span> <span m='1391000'>big?
  How do I get an output that is</span> <span m='1393000'>this big? Well, I will
  use one of those</span> <span m='1396000'>learned by questioning methods and
  have you tell me the answer.</span> </p><p><span m='1401000'>Someone tell me
  the answer. How do I do that?</span> </p><p><span m='1404000'>Yes. Use another
  amplifier.</span> </p><p><span m='1408000'>So the answer is I will use one
  amplifier to go from here to</span> <span m='1414000'>here. And the suggestion
  is use</span> <span m='1417000'>another amplifier to go from here to
  here.</span> </p><p><span m='1421000'>And, in fact, I believe that you may
  have a</span> <span m='1425000'>problem in your problem set where you will do
  that.</span> </p><p><span m='1430000'>And so you have only yourselves to
  blame.</span> </p><p><span m='1434000'>So how do you make this work? What you
  have to do is this VI</span> <span m='1441000'>has to be much smaller than the
  bias point VI on this one.</span> </p><p><span m='1445000'>I have to build a
  different amplifier, choose a different</span> <span m='1449000'>set of
  parameters such that VI prime, which is the VI for this</span> <span
  m='1454000'>guy, is much less than V capital I prime for this guy.</span>
  </p><p><span m='1458000'>It's a design question. You need to design it in a
  way</span> <span m='1462000'>that the signals of interest need to be much
  smaller than the</span> <span m='1466000'>bias voltage of this amplifier. So
  you may have to use much</span> <span m='1472000'>higher supply voltages. My
  amplifier,</span> <span m='1474000'>I believe, has a 4 volt supply or 5 volt
  supply.</span> </p><p><span m='1478000'>You might have to use an amplifier
  with a much bigger</span> <span m='1482000'>supply, different values of RL and
  so on.</span> </p><p><span m='1485000'>And I know that the course notes also
  have some exercises</span> <span m='1489000'>and problem sets that discuss
  that in more detail.</span> </p><p><span m='1493000'>Yes. This is even more
  fun.</span> </p><p><span m='1495000'>The question is, good question.</span>
  </p><p><span m='1499000'>The question is why do you need this guy here?</span>
  </p><p><span m='1503000'>Just use this guy, right?</span> </p><p><span
  m='1505000'>Why do you need this guy? Big guys rule,</span> <span
  m='1509000'>right? Who needs the little guys?</span> </p><p><span
  m='1513000'>Well, let me use the Socratic method again.</span> </p><p><span
  m='1517000'>Why don't you give me the answer?</span> </p><p><span
  m='1520000'>You guys are smart. Why do you need little guys?</span>
  </p><p><span m='1525000'>Why do you need the small guy here?</span>
  </p><p><span m='1530000'>Anybody with the answer? Yeah.</span> </p><p><span
  m='1534000'>The big guy may not be as sensitive.</span> </p><p><span
  m='1539000'>I like that. You know what?</span> </p><p><span m='1543000'>He is
  almost correct. I will show you why in a</span> <span m='1550000'>second.
  Anything else?</span> </p><p><span m='1554000'>Any other reason? Yes.</span>
  </p><p><span m='1568000'>Bingo. That is another good answer.</span>
  </p><p><span m='1570000'>So let me address both the answers.</span>
  </p><p><span m='1573000'>The answer given was that look, this amplifier is
  amplifying</span> <span m='1578000'>the signal by a certain amount, by a
  factor of 7.</span> </p><p><span m='1582000'>And I have designed this such
  that this amplifies a signal by</span> <span m='1587000'>a factor of maybe 10.
  So in all I am getting an</span> <span m='1591000'>amplification of 70. This
  would be a great design</span> <span m='1594000'>question for lab next year. I
  give you a bunch of</span> <span m='1597000'>components and ask you to design
  an amplifier given the</span> <span m='1600000'>constraints with the highest
  amount of amplification.</span> </p><p><span m='1603000'>It turns out that
  when you design your amplifier,</span> <span m='1606000'>in order to meet the
  saturation discipline and so on,</span> <span m='1610000'>you have to choose
  values of RL and VS and stuff like that and</span> <span m='1613000'>be within
  power constraints so the amplifier doesn't blow up</span> <span
  m='1617000'>and stuff. And by the end of it all you</span> <span
  m='1620000'>are going to get a measly 7X gain out of it.</span> </p><p><span
  m='1622000'>The same way here, to be able to deal with a very</span> <span
  m='1625000'>small signal here and get some amplification,</span> <span
  m='1628000'>another set of values and you get 10X.</span> </p><p><span
  m='1630000'>So they multiply. It is much harder to build one</span> <span
  m='1632000'>amplifier with a much larger gain.</span> </p><p><span
  m='1634000'>You know what? I just realized that we will be</span> <span
  m='1637000'>looking at this in the last five or seven minutes of
  lecture.</span> </p><p><span m='1640000'>I am going to show you what the
  amplification depends upon.</span> </p><p><span m='1643000'>It depends upon K.
  It depends upon RL.</span> </p><p><span m='1645000'>It depends upon VI. Now
  the question is I have had</span> <span m='1650000'>all this time to think
  about how to stitch in sensitive into</span> <span m='1653000'>this, and I
  believe I can. It turns out that when you have</span> <span m='1657000'>large
  voltages and so on and you have practical devices,</span> <span m='1661000'>it
  turns out that the more current you pump through devices</span> <span
  m='1665000'>they tend to produce noise of various kinds.</span> </p><p><span
  m='1668000'>So very powerful amplifiers are not very good at dealing
  with</span> <span m='1672000'>really tiny signals because they have some
  inherent noise</span> <span m='1675000'>capabilities. And so I guess that
  is</span> <span m='1678000'>sensitive. It is sensitive to noise.</span>
  </p><p><span m='1683000'>Another question? Yes.</span> </p><p><span
  m='1702000'>Ask me the question again. I didn't follow.</span> </p><p><span
  m='1715000'>Let me just explain it. It turns out that I will not be</span>
  <span m='1718000'>able to pass this through the big amplifier to begin
  with</span> <span m='1721000'>because it is just going to give me a gain of
  just a factor of 7.</span> </p><p><span m='1725000'>However, if I have a
  signal that is this big to begin with</span> <span m='1729000'>then I may just
  need this amplifier.</span> </p><p><span m='1731000'>I don't need the smaller
  guy. If my signal was this big to</span> <span m='1734000'>begin with, if I
  had a strong sensor that produced a strong</span> <span m='1738000'>signal to
  begin with, yeah, I can deal with just a</span> <span m='1741000'>single
  stage. I don't need to two stages.</span> </p><p><span m='1744000'>It is all a
  matter of design. And it is actually a fun design</span> <span
  m='1749000'>exercise. Given a budget,</span> <span m='1750000'>dollars, right?
  You go to your supply room and</span> <span m='1753000'>look at the parts that
  you have and you go to build what you</span> <span m='1758000'>have to build
  with the parts that you have.</span> </p><p><span m='1760000'>And so sometimes
  you need to build two amplifiers to get the</span> <span m='1765000'>gain or
  build a signal amplifier.</span> </p><p><span m='1767000'>It's all a design
  thing. All right.</span> </p><p><span m='1770000'>Moving on to Page 7. That
  brings us to the small</span> <span m='1774000'>signal model.</span>
  </p><p><span m='1791000'>Page 5. What I showed you up on the</span> <span
  m='1798000'>little demo was that provided the signal input in this
  example</span> <span m='1805000'>VI was much smaller than capital VI out there
  as I shrank my</span> <span m='1811000'>input, I was able to get a more or
  less linear response at the</span> <span m='1817000'>output. And so to repeat
  my notation at</span> <span m='1821000'>the input, the total input is a sum of
  the operating point input</span> <span m='1828000'>plus a small signal input.
  This is called the total</span> <span m='1835000'>variable. This is called the
  DC bias.</span> </p><p><span m='1841000'>It is also called the operating point
  voltage.</span> </p><p><span m='1847000'>And this is called my small signal
  input.</span> </p><p><span m='1853000'>It is also variously called incremental
  input.</span> </p><p><span m='1862000'>This is more a mathematical term
  relating to incremental</span> <span m='1866000'>analysis or perturbation
  analysis.</span> </p><p><span m='1869000'>So VI, call it small signal, call it
  small perturbation,</span> <span m='1874000'>call it increment, whatever you
  want.</span> </p><p><span m='1877000'>Similarly, at the output I have my total
  variable at the output</span> <span m='1883000'>a sum of the output operating
  voltage and the small signal</span> <span m='1888000'>voltage. I do not like
  using Os in</span> <span m='1892000'>symbols because big O and small O is
  simply a function of how</span> <span m='1899000'>big you write them. It is
  not super clear.</span> </p><p><span m='1903000'>And in terms of a graph, let
  me plot the input and</span> <span m='1908000'>output for you. Let's say this
  is the total</span> <span m='1913000'>input and that is the total
  output.</span> </p><p><span m='1917000'>I may have some bias VI. And
  corresponding to that I may</span> <span m='1923000'>have some bias VO. Hold
  that thought for a second</span> <span m='1927000'>while I give you a preview
  of something that we will be</span> <span m='1932000'>covering in about three
  or four weeks.</span> </p><p><span m='1935000'>Notice that as I couple
  amplifiers together,</span> <span m='1939000'>the output operating point
  voltage of this amplifier in</span> <span m='1943000'>this connection becomes
  the input operating point voltage of</span> <span m='1948000'>this amplifier,
  right?</span> </p><p><span m='1952000'>So when they connect this output to
  this input,</span> <span m='1954000'>the output operating point voltage
  becomes coupled to the</span> <span m='1958000'>input here so it becomes the
  input operating point voltage</span> <span m='1962000'>here. Now I have a
  nightmare on my</span> <span m='1964000'>hands. As I adjust the bias of
  this</span> <span m='1966000'>guy, the bias of this guy changes, too.</span>
  </p><p><span m='1968000'>The two are dependent. It is a pain in the
  neck.</span> </p><p><span m='1971000'>And we being engineers find ways to
  simplify our lives.</span> </p><p><span m='1975000'>And you will learn another
  trick in about three or four</span> <span m='1978000'>weeks. And that trick
  will let you</span> <span m='1982000'>decouple these two stages in a way that
  you can design this</span> <span m='1987000'>stage in isolation, go have a cup
  of coffee and</span> <span m='1991000'>then come back to this stage and design
  this stage in isolation.</span> </p><p><span m='1996000'>For those of you who
  want to run ahead and think about how to</span> <span m='2002000'>do it, think
  about it. What trick can you use to get</span> <span m='2006000'>them in
  isolation? Moving on.</span> </p><p><span m='2010000'>What I would like to do
  next is address this from a mathematical</span> <span m='2015000'>point of
  view. And much as I did for the light</span> <span m='2019000'>emitting expo
  dweeb analyze this mathematically and show you that</span> <span
  m='2024000'>if VI is much smaller than capital VI, I indeed get a</span> <span
  m='2028000'>linear response. This time around I won't use</span> <span
  m='2032000'>Taylor series because it turns out that this expression can
  be</span> <span m='2037000'>expanded fully. So you don't have to buy
  into</span> <span m='2042000'>Taylor series and so on. I am going to list
  everything</span> <span m='2047000'>down for you. We know, to begin
  with,</span> <span m='2051000'>that VO for the amplifier is VS-RLK/2
  (VI-VT)^2.</span> </p><p><span m='2055000'>What I am going to do for this,
  much as I did for the LED,</span> <span m='2060000'>what I'm going to do is
  derive for you the output as a function</span> <span m='2066000'>of the input
  when the input VI is very small.</span> </p><p><span m='2072000'>In other
  words, when I substitute for VI,</span> <span m='2076000'>V capital I squared
  plus small VI.</span> </p><p><span m='2079000'>Much as I did for the expo
  dweeb, I want to substitute for</span> <span m='2086000'>VI a big DC VI. So VI
  is much smaller than VI.</span> </p><p><span m='2090000'>And show you for
  yourselves that the output response,</span> <span m='2096000'>V small O is
  going to be linearly connected to VI.</span> </p><p><span m='2103000'>Notice
  that, let me write another equation</span> <span m='2106000'>here. This is a
  total variable.</span> </p><p><span m='2109000'>This simply says that if the
  input is VI then the output is</span> <span m='2114000'>going to be VO, which
  means that the operating</span> <span m='2118000'>point input voltage should
  satisfy this equation,</span> <span m='2122000'>correct? In other
  words,</span> <span m='2124000'>the operating point output voltage V capital O
  should equal</span> <span m='2130000'>VS-RLK/2 (VI-VT)^2. This is at VI equals
  capital</span> <span m='2135000'>VI. This is very simple but may</span> <span
  m='2138000'>seem confusing. All this is saying is that</span> <span
  m='2142000'>look, this equation gives me the relationship between VI and
  VO.</span> </p><p><span m='2149000'>Therefore, if I apply capital VI as the
  input,</span> <span m='2153000'>I'm given that my corresponding output is
  capital VO,</span> <span m='2158000'>so they must satisfy this equation,
  right?</span> </p><p><span m='2164000'>Those are bias point values and that
  must satisfy this equation.</span> </p><p><span m='2170000'>Simple. I know
  that.</span> </p><p><span m='2172000'>So hold that thought. Stash it away in
  the back of</span> <span m='2178000'>your minds. Now let me go through a
  bunch</span> <span m='2182000'>of grubby math and substitute for VI in this
  expression here.</span> </p><p><span m='2190000'>Let me go ahead and do that.
  VS-RLK/2((VI+vi)-VT)^2.</span> </p><p><span m='2195000'>When I do something
  that is other than math I will wake you</span> <span m='2201000'>up. I will
  just keep doing a bunch</span> <span m='2205000'>of steps that are pure math.
  No cheating.</span> </p><p><span m='2209000'>No nothing. Watch my
  fingers.</span> </p><p><span m='2212000'>When I do anything that is not
  obvious math I will wake you up.</span> </p><p><span m='2220000'>Next I am
  going to simply move VT over and rewrite this as</span> <span
  m='2226000'>follows, RLK/2((VI-VT)+vi)^2. Again, I haven't done
  anything</span> <span m='2233000'>interesting so far. I have just substituted
  this.</span> </p><p><span m='2238000'>I am just juggling things around just to
  pass away some</span> <span m='2245000'>time, I guess. All right.</span>
  </p><p><span m='2249000'>Next what I am going to do is simply expand this out
  and write</span> <span m='2262000'>it this way RLK/2, expand that out and
  treat this</span> <span m='2272000'>as one unit VS - RLK/2((VI-VT)^2+</span>
  <span m='2279000'>2(VI-VT)vi+vi^2). Nothing fancy here.</span> </p><p><span
  m='2286000'>This is like the honest board. Nothing fancy here.</span>
  </p><p><span m='2291000'>Standard stuff. Only math.</span> </p><p><span
  m='2294000'>I will move to this blackboard here where I do some fun EE</span>
  <span m='2300000'>stuff. Yes.</span> </p><p><span m='2308000'>Good. At least
  one person isn't</span> <span m='2312000'>asleep here. Thank you.</span>
  </p><p><span m='2314000'>So just math here. Nothing fancy.</span> </p><p><span
  m='2318000'>Plain old simple math. I have not done any trickery.</span>
  </p><p><span m='2322000'>I still have all my ten fingers.</span> </p><p><span
  m='2325000'>Now what I am going to do, now watch me.</span> </p><p><span
  m='2329000'>I am not using Taylor series here because this expression</span>
  <span m='2335000'>lends itself to this analysis. Notice VI squared
  here.</span> </p><p><span m='2340000'>I made the assumption that VI is much
  smaller than capital VI,</span> <span m='2346000'>so what I can do is assuming
  that VT is small enough that VI</span> <span m='2351000'>minus VT is still a
  big number compared to small VI,</span> <span m='2355000'>what I can do is
  ignore this in comparison to the capital VI</span> <span m='2360000'>terms. So
  I have a capital VI term</span> <span m='2363000'>here. I am going to ignore
  VI</span> <span m='2366000'>squared. So, for example,</span> <span
  m='2369000'>if capital VI was 5 volts and small VI was 100 millivolts
  0.1,</span> <span m='2375000'>so 0.1 squared is 0.01. So it is comparing 0.01
  to 5.</span> </p><p><span m='2380000'>So I am off by a factor of 500. So now
  watch me.</span> </p><p><span m='2384000'>Now I begin playing some fun and
  games here.</span> </p><p><span m='2388000'>I eliminate this, and because I
  eliminate that it</span> <span m='2392000'>now becomes approximately equal.
  What I do in addition is let me</span> <span m='2402000'>write down the
  output. The total variable is the sum</span> <span m='2410000'>of the DC bias
  and some variation of the output.</span> </p><p><span m='2418000'>And let me
  simply expand that term and write it down again.</span> </p><p><span
  m='2427000'>VS-RLK/2(VI-VT)^2-RLK/2. I get a two here.</span> </p><p><span
  m='2434000'>And I get VI-VT. I won't forget the VI this</span> <span
  m='2438000'>time. Again, from here to there</span> <span m='2441000'>nothing
  fancy. This is the one step where I</span> <span m='2445000'>have used a
  trick. I have said small VI is much</span> <span m='2449000'>smaller than
  capital VI, and so I have simply expanded</span> <span m='2454000'>this out
  and written it here. So do you see the obvious next</span> <span
  m='2459000'>trick here? From star look at this guy.</span> </p><p><span
  m='2475000'>I can cancel this out from star because I know that at the</span>
  <span m='2480000'>operating point these two expressions are equal,</span>
  <span m='2485000'>and so therefore I can cancel out the operating point
  voltage</span> <span m='2491000'>and this. What I am left with is small
  VO</span> <span m='2498000'>is simply minus RLK(VI-VT) times vi.</span>
  </p><p><span m='2505000'>Only one place where I did something funny.</span>
  </p><p><span m='2512000'>Other than that it is purely math.</span>
  </p><p><span m='2520000'>So this is what I get. Notice that this whole thing
  is</span> <span m='2525000'>a constant, minus RLK(VI-VT). This whole thing is
  a constant.</span> </p><p><span m='2531000'>And so VO is equal to some
  constant times VI.</span> </p><p><span m='2535000'>Let me just define some
  terms for you that you will use again</span> <span m='2541000'>and again. For
  reasons that will be</span> <span m='2545000'>obvious next lecture, I am going
  to call this term</span> <span m='2550000'>here GM.</span> </p><p><span
  m='2557000'>I am going to call this term a constant, K(VI - VT).</span>
  </p><p><span m='2562000'>It is a constant for a given bias point
  voltage.</span> </p><p><span m='2567000'>So I am going to call that GM. And
  then I am going to call</span> <span m='2573000'>this whole thing A. And of
  course this is VI.</span> </p><p><span m='2578000'>There you go. I have my
  linear amplifier.</span> </p><p><span m='2583000'>A is the gain times small
  VI. And the gain has these terms in</span> <span m='2589000'>it. I just call
  this GM.</span> </p><p><span m='2592000'>You will see why later. But notice
  that the gain</span> <span m='2597000'>relates to RL. The size of the load
  resistor</span> <span m='2601000'>RL, how big it is, 1K, 10K, whatever.</span>
  </p><p><span m='2605000'>K, this is a MOSFET parameter, and VI minus
  VT.</span> </p><p><span m='2611000'>That is a constant for a given bias point
  voltage and small VI.</span> </p><p><span m='2616000'>So VO equals small
  VI.</span> </p><p><span m='2627000'>I won't give you a graphical
  interpretation,</span> <span m='2630000'>but I encourage you to go and look at
  Figure 8.9 in the course</span> <span m='2635000'>notes. And it gives you a
  graphical</span> <span m='2637000'>interpretation of that expression.</span>
  </p><p><span m='2641000'>Move to Page 7. Another way of looking at
  this,</span> <span m='2646000'>another way of mathematically analyzing
  it,</span> <span m='2650000'>here I went through a full blown expansion and
  pretty much</span> <span m='2657000'>deriving the small signal
  response.</span> </p><p><span m='2660000'>What I can also do is take a
  shortcut here.</span> </p><p><span m='2665000'>So let me just give you the
  shortcut.</span> </p><p><span m='2669000'>You might find this handy.
  VO=VS-KRL/2(VI-VT)^2.</span> </p><p><span m='2676000'>And my shortcut is as
  follows. My small signal response is</span> <span m='2681000'>simply this
  relationship. I find the slope at the point</span> <span m='2686000'>capital
  VI and multiply by the increment.</span> </p><p><span m='2690000'>Slope times
  the increment gives me the incremental change in VO</span> <span
  m='2696000'>as follows. d/dI (VS-KRL/2(VI-VT)^2)</span> <span
  m='2701000'>evaluated at vI=VI times vi. This is math again.</span>
  </p><p><span m='2707000'>I want to find out the change in VO for a small
  change in VI,</span> <span m='2714000'>and I do that by taking the first
  derivative of this with</span> <span m='2721000'>respect to VI substituting V
  capital I and multiplying by the</span> <span m='2729000'>small change delta
  VI or small VI.</span> </p><p><span m='2735000'>So this is simply the slope of
  the VO versus VI curve at VI.</span> </p><p><span m='2741000'>And so therefore
  taking the derivative here of this.</span> </p><p><span m='2747000'>This is a
  constant so it vanishes.</span> </p><p><span m='2751000'>But twice 2 to cancel
  out, so I get KRL(VI-VT) times small</span> <span m='2757000'>vi evaluated at
  capital VI. So I get twice KRL,</span> <span m='2766000'>VI evaluated at
  capital VI, so it is VI minus VT times</span> <span m='2778000'>small VI. Same
  thing.</span> </p><p><span m='2783000'>Oh, and I have a minus sign
  here.</span> </p><p><span m='2792000'>I get the same expression that I derived
  for you up there,</span> <span m='2797000'>and this is just taking the slope
  and going with it.</span> </p><p><span m='2802000'>And this, as I mentioned
  before, this is A.</span> </p><p><span m='2806000'>The last few minutes let me
  kind of pull everything together</span> <span m='2812000'>and also hit upon
  something that many of your questions are</span> <span m='2817000'>touched
  upon. And that all relates to how to</span> <span m='2822000'>choose the bias
  point. So here I have taken an</span> <span m='2827000'>analysis approach.
  When teaching we often teach</span> <span m='2831000'>you are given something,
  you analyze it,</span> <span m='2835000'>but as you begin to master it you can
  begin to design things</span> <span m='2840000'>where you can ask a lot of
  questions and so on.</span> </p><p><span m='2845000'>And here what we have is
  an analysis given a value of RLK,</span> <span m='2850000'>VI and so on. How
  to choose the bias point</span> <span m='2854000'>becomes more of a design
  issue. If you are designing an</span> <span m='2858000'>amplifier, you asked
  me the question, how do I choose two</span> <span m='2862000'>small amplifiers
  versus one big amplifier, that sort of stuff?</span> </p><p><span
  m='2866000'>It boils down to how do you choose the bias point?</span>
  </p><p><span m='2870000'>How do you choose VI? How do you choose RL and so
  on?</span> </p><p><span m='2874000'>What I would like to do is touch upon some
  of these things.</span> </p><p><span m='2879000'>First of all, gain or the
  amplification.</span> </p><p><span m='2882000'>One of the most important
  design perimeters for an</span> <span m='2886000'>amplifier is what is the
  gain? Let's say you get a job at</span> <span m='2891000'>Maxim Integrated
  Technologies, and they say we would like you</span> <span m='2896000'>to build
  a linear power amplifier for cell phones.</span> </p><p><span m='2900000'>You
  can say I know how to do that.</span> </p><p><span m='2903000'>And then they
  say the next stage needs a 100 millivolt</span> <span m='2908000'>input. While
  this thing coming from</span> <span m='2912000'>the antenna is only a few tens
  or a few hundreds of a</span> <span m='2916000'>microvolt. So you sit down and
  say oh,</span> <span m='2919000'>my gosh, I need an amplification of so
  much,</span> <span m='2923000'>and you go design an amplifier. So gain tends
  to be a key</span> <span m='2928000'>parameter. And notice that gain is</span>
  <span m='2931000'>proportional to RL. It relates to VI minus VT,</span> <span
  m='2935000'>so proportional to VI. It is also related to RL.</span>
  </p><p><span m='2940000'>The second point is the gain point determines where I
  bias</span> <span m='2947000'>something. If I choose my bias too high I</span>
  <span m='2952000'>get distortion, or if I choose my bias too low</span> <span
  m='2957000'>I get distortion.</span> </p><p><span m='2967000'>So depending on
  how I choose my bias point, as a signal goes up</span> <span m='2970000'>it
  may begin clipping or begin distorting.</span> </p><p><span m='2973000'>And I
  will show you a demo the next time on that particular</span> <span
  m='2978000'>example. So bias point will determine</span> <span m='2981000'>how
  big of a signal you can send without getting too much</span> <span
  m='2987000'>distortion. And the other thing is that,</span> <span
  m='2990000'>relates to how big of an input, what is a valid input
  range?</span> </p><p><span m='2996000'>So let's say you have a signal. And you
  want that signal to</span> <span m='3002000'>have both positive and negative
  excursions of the same value.</span> </p><p><span m='3008000'>Then, depending
  on where you choose a bias point,</span> <span m='3012000'>your input range
  may become smaller or larger.</span> </p><p><span m='3016000'>And we will go
  through these in the context of and amplifier and</span> <span
  m='3022000'>look at some design issues in the next lecture.</span> </p>
uid: 3cd676bf13e83155e604a18997f6c102
type: courses
layout: video
---
