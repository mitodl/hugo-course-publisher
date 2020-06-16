---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> MOSFET amplifier large signal analysis
  (cont.)</p>  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec09b.jpg
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-2/thumb_lec09b.jpg
    title: thumb_lec09b.jpg
    type: null
    uid: f5362b63da591cf1b87097f6106ef7c4
  - id: Video-YouTube-Stream
    media_location: jURSAKBlIZA
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Video-YouTube-Stream
    type: Video
    uid: 1d8a50644fe030daf70aafa9b9436e4e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/jURSAKBlIZA/default.jpg'
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 894a3f2a4c37a31cf01540c7213a7140
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Video-iTunes U-MP4
    type: Video
    uid: 9ab9f381a7e9b67fded78af3629e35ad
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-07oct2003-220k.mp4
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Video-Internet Archive-MP4
    type: Video
    uid: 11c234aada1820682c8f188451493803
  - id: Thumbnail-OCW-JPG
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: d5ae7237c524d507e78bf383561ac8d7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: jURSAKBlIZA
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 52320578f2f3ccf146a7958d78d91a80
  - id: jURSAKBlIZA.srt
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-2/jURSAKBlIZA.srt
    title: 3play caption file
    type: null
    uid: f1febb969239393b4b87d38b3188f0a0
  - id: jURSAKBlIZA.pdf
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-2/jURSAKBlIZA.pdf
    title: 3play pdf file
    type: null
    uid: 85621a938b41beb0feba40552bd5d49a
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2c9da89529d3167c162a5d4d1fba22de
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 985cfc58bf6a539b06c25e935cfdfcc1
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 86c99b939bda93d1bdff27002f057322
inline_embed_id: '47010650lecture9:mosfetamplifierlargesignalanalysis(part2)15388319'
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/5d9288b54aceb1737d8f831d3c66739b">PDF</a>)<br />
  Demonstration: MOSFET inverting amplifier transfer characteristic, large
  signal (<a target="_blank" title="Open in a new window."
  href="./resolveuid/c2180a1c18e05b10f08d40b994d676fa">PDF</a>)</p>
short_url: lecture-9-part-2
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-9-part-2
title: 'Lecture 9: Mosfet Amplifier Large Signal Analysis (part 2)'
transcript: >-
  <p><span m='0'>Good morning, all.</span> </p><p><span m='1000'>Let's get
  going. So I guess you had your quiz</span> <span m='6000'>review yesterday. I
  hope you guys didn't beat up</span> <span m='11000'>on (name of TA) and who
  else was it?</span> </p><p><span m='15000'>(Name of TA) too much. As you
  know,</span> <span m='19000'>the quiz is tomorrow. And unfortunately MIT
  couldn't</span> <span m='24000'>give us one big room so we are broken up into
  three rooms.</span> </p><p><span m='32000'>And you will go to your room based
  on the first letter of</span> <span m='38000'>your last name. OK, so today we
  shall cover a</span> <span m='44000'>topic called "Large Signal
  Analysis".</span> </p><p><span m='59000'>So in the last couple lectures we
  looked at one dependent</span> <span m='64000'>sources abstractly, and then we
  looked at an</span> <span m='68000'>amplifier built using a practical
  dependent source</span> <span m='72000'>called the MOSFET. Now, the MOSFET had
  to be</span> <span m='76000'>operated in a given region of its operation in
  order to behave</span> <span m='82000'>like a current source. And while it
  behaved like a</span> <span m='87000'>current source you would get
  amplification or a FET</span> <span m='91000'>amplifier. So that was in the
  past two</span> <span m='96000'>lectures. What you are going to do
  today</span> <span m='99000'>is called large signal analysis, and this is a
  loaded term.</span> </p><p><span m='103000'>So large signal analysis means
  something very specific in our</span> <span m='108000'>business, and I will
  describe to what that is.</span> </p><p><span m='112000'>This analysis
  involves looking at a circuit containing,</span> <span m='116000'>for example,
  a MOSFET and figuring out how</span> <span m='119000'>to get that device to
  operate in a way that the MOSFET was always</span> <span m='124000'>in
  saturation. So you had to figure out,</span> <span m='128000'>based on
  parameters that you could control,</span> <span m='132000'>how to establish
  those parameters so that the circuit</span> <span m='136000'>operated in a way
  that the MOSFET was always in saturation.</span> </p><p><span m='140000'>So
  large signal analysis involves that.</span> </p><p><span m='143000'>And
  although the examples we use, use the MOSFET,</span> <span m='147000'>the same
  kind of analysis can apply to any other device.</span> </p><p><span
  m='153000'>Remember, your MOSFET is a primitive element that we use as</span>
  <span m='157000'>an example in this course. There are other primitive</span>
  <span m='160000'>elements that you can use. The course notes,</span> <span
  m='163000'>for example, discusses a couple other</span> <span
  m='166000'>devices. One is the "bipolar junction</span> <span
  m='169000'>transistor", the BJT, and works through a complete</span> <span
  m='172000'>example from start to finish involving a circuit containing
  a</span> <span m='176000'>bipolar junction transistor. And you can do a large
  signal</span> <span m='182000'>analysis of that device as well. It turns out
  that you need to</span> <span m='186000'>operate that device in an interesting
  region of its</span> <span m='189000'>operating space, and so you can conduct
  a large</span> <span m='192000'>signal analysis of a circuit containing that
  device and</span> <span m='196000'>figure out how best to operate that
  circuit.</span> </p><p><span m='199000'>So that is large signal analysis, and
  we will do an</span> <span m='202000'>example and explain how this is done
  using an example today.</span> </p><p><span m='208000'>So to quickly review
  where we have been so far,</span> <span m='214000'>we looked at this little
  structure here,</span> <span m='220000'>our MOSFET amplifier.</span>
  </p><p><span m='231000'>Notice that when I write a voltage at a node,</span>
  <span m='233000'>that's a short form for saying I am looking at the
  voltage</span> <span m='237000'>between the ground node and the node at which
  the voltage is</span> <span m='240000'>written down. So VO here and VI applied
  here.</span> </p><p><span m='244000'>This is a very, very common circuit that
  we</span> <span m='247000'>use. To emphasize one more point,</span> <span
  m='250000'>in general, in the kind of circuits we look at both in this</span>
  <span m='254000'>course and in real life, there are a few patterns that</span>
  <span m='259000'>we use very commonly that keep repeating all the time.</span>
  </p><p><span m='263000'>Very often you don't have to look at every
  possible</span> <span m='267000'>permutation and combination of how things
  could be connected.</span> </p><p><span m='273000'>This sort of connecting
  thing is very, very,</span> <span m='276000'>very common. And you will see a
  lot of this</span> <span m='280000'>pattern. And we do the equivalent</span>
  <span m='283000'>circuit for this. In the equivalent circuit we</span> <span
  m='287000'>replace the MOSFET with a dependent source provided this</span>
  <span m='291000'>operated in the saturation region.</span> </p><p><span
  m='294000'>So I will just say while operating under saturation the</span>
  <span m='299000'>equivalent circuit would look like this, VO,</span> <span
  m='303000'>VI.</span> </p><p><span m='312000'>And IDS for the dependent source
  was given by K/2</span> <span m='322000'>(VI-VT)^2. So this was an
  amplifier.</span> </p><p><span m='327000'>Here was the equivalent circuit
  while this device was in</span> <span m='332000'>saturation. And to operate in
  saturation,</span> <span m='336000'>I said that certain properties need to be
  true for the MOSFET.</span> </p><p><span m='341000'>And there are two
  properties that need to be true for this to</span> <span m='347000'>be
  operating in saturation. One is that its gate to source</span> <span
  m='352000'>voltage needs to be greater than VT, so VGS for the MOSFET
  should</span> <span m='357000'>be greater than VT. And the second one was that
  the</span> <span m='362000'>output voltage needed to be greater than the input
  voltage</span> <span m='367000'>minus one threshold drop. And this was the
  same as VDS</span> <span m='372000'>for the MOSFET, this was the same as VGS
  for</span> <span m='376000'>the MOSFET. So what are we really saying</span>
  <span m='380000'>here? What we are saying is that</span> <span
  m='382000'>look, we built this circuit using a MOSFET,</span> <span
  m='386000'>and it is up to us as engineers to choose its operating
  points</span> <span m='392000'>in a way that these two properties hold.</span>
  </p><p><span m='397000'>For example, to make the first condition</span> <span
  m='401000'>true, I can discipline myself to operate such that VI is
  always</span> <span m='407000'>greater than VT. Similarly, I can choose
  VS,</span> <span m='412000'>RL and VI in a way that this condition is
  true,</span> <span m='417000'>which says that the drain to source voltage
  across my MOSFET</span> <span m='423000'>drain and source should be greater
  than VI minus VT.</span> </p><p><span m='430000'>As an example, if VI was 2
  volts and VT was,</span> <span m='435000'>say, 1 volt, then what I am saying
  is that</span> <span m='441000'>VO should be greater than or equal to 2 minus
  1 or 1 volt.</span> </p><p><span m='450000'>So I need to keep this high, 2, 3,
  4, 5, whatever,</span> <span m='455000'>a high voltage so that this guy stays
  in saturation.</span> </p><p><span m='460000'>The relevant readings for the
  material that we are going to</span> <span m='466000'>cover in the course
  notes are in 7.5.1 and 7.6.</span> </p><p><span m='477000'>So that is pretty
  much a review of where we were.</span> </p><p><span m='480000'>We said we
  could build an amplifier.</span> </p><p><span m='483000'>Its equivalent
  circuit was shown on the right.</span> </p><p><span m='486000'>And, provided
  that, I discipline myself to operate</span> <span m='490000'>in the saturation
  region or to have the MOSFET operating in the</span> <span
  m='495000'>saturation region, then this would work like an</span> <span
  m='498000'>amplifier and all would be good with the world.</span> </p><p><span
  m='502000'>So today --</span> <span m='510000'>-- we look at large signal
  analysis of a circuit.</span> </p><p><span m='513000'>And an example would be
  this circuit up here containing a</span> <span m='517000'>MOSFET. And, again,
  as I mentioned</span> <span m='519000'>earlier, a large signal analysis is a
  loaded term in 6.002,</span> <span m='523000'>or for that matter in circuits.
  And large signal analysis</span> <span m='527000'>involves two steps.</span>
  </p><p><span m='535000'>The first step involves writing down the transfer
  function of</span> <span m='540000'>your little circuit. In our case,</span>
  <span m='542000'>VO is the output, VI is the input,</span> <span m='545000'>so
  involves writing down VO versus VI.</span> </p><p><span m='548000'>Simply
  write down the transfer function.</span> </p><p><span m='551000'>In other
  words, the relationship between the</span> <span m='554000'>output and the
  input for that circuit.</span> </p><p><span m='557000'>And, in our case,
  again, we've disciplined</span> <span m='560000'>ourselves to adhere to the
  "saturation discipline".</span> </p><p><span m='564000'>And the second part of
  large signal analysis is to find out</span> <span m='569000'>the valid input
  operating range.</span> </p><p><span m='578000'>Find out for the given circuit
  parameters, let's say I apply a</span> <span m='582000'>VS and I use some
  value of RL and I use a given MOSFET,</span> <span m='586000'>which has a
  given value of VT. The question then is that what</span> <span m='591000'>is a
  valid set of input voltages that would operate the circuit</span> <span
  m='596000'>in a way that I would be in saturation.</span> </p><p><span
  m='600000'>And so find out the valid input range, and this would give me
  a</span> <span m='606000'>corresponding output range --</span> <span
  m='616000'>-- for saturation operation of the MOSFET.</span> </p><p><span
  m='619000'>That is what we will dwell on in the lecture today.</span>
  </p><p><span m='630000'>So what we are saying here is that if I am careful
  with how I</span> <span m='634000'>apply VI for a given value of RL and VS and
  for a given choice of</span> <span m='639000'>my MOS transistor then I can
  stay within saturation provided</span> <span m='644000'>I select my input
  voltages carefully.</span> </p><p><span m='646000'>And the analysis that we
  will go through today will figure out</span> <span m='651000'>what that range
  of input voltages is.</span> </p><p><span m='654000'>And, again, I will use
  this as a motivating example,</span> <span m='658000'>the MOSFET amplifier.
  But in general large signal</span> <span m='662000'>analysis would apply to
  any other circuit as well.</span> </p><p><span m='666000'>For example, in
  recitation you may learn</span> <span m='668000'>about other circuits
  containing a MOSFET.</span> </p><p><span m='671000'>And you can do a large
  signal analysis of other circuits</span> <span m='674000'>containing a MOSFET
  or you might learn about some other devices</span> <span m='679000'>like the
  bipolar junction transistor, and you could do the</span> <span m='682000'>same
  kind of analysis for that device.</span> </p><p><span m='685000'>So remember
  that the MOSFET amplifier here is an example.</span> </p><p><span m='690000'>I
  will be using that as a driving example to explain large</span> <span
  m='694000'>signal analysis. So the first step,</span> <span m='696000'>as I
  mentioned earlier, is to get the VO versus VI.</span> </p><p><span
  m='699000'>And in general for some circuit that you build the output
  will</span> <span m='704000'>not even be a voltage. There are certain
  circuits</span> <span m='707000'>where the output might be some kind of a
  current.</span> </p><p><span m='711000'>Let's say I am building some kind of a
  circuit where I would</span> <span m='715000'>like the output current or the
  current through some edge of the</span> <span m='719000'>circuit to depend on
  some input. In that case the transfer</span> <span m='724000'>function would
  be the output current versus VI.</span> </p><p><span m='728000'>And if I had
  an input current here it would be output current</span> <span
  m='733000'>versus input current, you know, whatever the given</span> <span
  m='736000'>problem tells you. So this is under the saturation</span> <span
  m='740000'>discipline. And I will not rederive this</span> <span
  m='743000'>for you. You can apply a good old</span> <span m='746000'>technique
  like the analytical method.</span> </p><p><span m='750000'>Or you can use the
  graphical method to get the appropriate</span> <span m='754000'>answer here. I
  wanted to point out in a</span> <span m='757000'>quick aside that why do we
  care about graphical analysis?</span> </p><p><span m='761000'>Once you have
  the analytical method, why do you care about</span> <span m='765000'>the
  graphical method? And a student asked me a</span> <span m='768000'>question
  after lecture last Thursday, and it occurred to me</span> <span
  m='772000'>that it's not obvious why you need the graphical method.</span>
  </p><p><span m='778000'>So it turns out that often times you do not have
  an</span> <span m='781000'>equation describing the device. So let's
  say,</span> <span m='785000'>for example, I am a manufacturer.</span>
  </p><p><span m='787000'>Let's say I am AMD. As AMD I sit down and my</span>
  <span m='790000'>semiconductor division builds a MOSFET.</span> </p><p><span
  m='793000'>And when you build a MOSFET your experiments and your</span> <span
  m='797000'>fabrication division often times doesn't give you an
  equation</span> <span m='802000'>with the MOSFET. They build something and
  then</span> <span m='805000'>you look at it and you experiment with it.</span>
  </p><p><span m='810000'>You apply various input voltages and you
  measure</span> <span m='813000'>currents and output voltages and so on.</span>
  </p><p><span m='815000'>And so what you end up getting is a graph that
  describes the</span> <span m='819000'>behavior of the MOSFET. And you have
  seen this in your</span> <span m='823000'>lab as well, your 2N7000 or was it
  2000?</span> </p><p><span m='827000'>the MOSFET you use in the lab also gives
  you a data sheet.</span> </p><p><span m='831000'>And in that data sheet you
  see a bunch of curves.</span> </p><p><span m='834000'>So very often devices
  come with data sheets.</span> </p><p><span m='839000'>And when you have a data
  sheet but no equation then you can</span> <span m='843000'>apply the graphical
  method and solve your circuits.</span> </p><p><span m='846000'>In this
  example, assuming I can apply the</span> <span m='849000'>analytical method,
  here was the expression that I</span> <span m='853000'>had derived for you in
  the last lecture.</span> </p><p><span m='864000'>So VO was related to VI using
  the square law relationship.</span> </p><p><span m='870000'>And we can plot
  and do other fun stuff with this equation.</span> </p><p><span m='878000'>So
  here is the input voltage VI.</span> </p><p><span m='882000'>That is my VT. So
  notice that VO is VS.</span> </p><p><span m='887000'>This is true when VI
  greater than or equal to VT and VO</span> <span m='895000'>greater than or
  equal to VI minus VT.</span> </p><p><span m='902000'>So these are the
  constraints of the saturation discipline.</span> </p><p><span m='907000'>And
  in our particular situation when VI was less than VT output</span> <span
  m='913000'>would simply be VS. If VI is less than VT the</span> <span
  m='917000'>MOSFET would turn off, switch off, and I would have no</span> <span
  m='923000'>current flowing through RL, and VS would appear at the</span> <span
  m='928000'>output. So until VT,</span> <span m='931000'>I have VS, and then
  following that I get the square law</span> <span m='936000'>behavior
  articulated by this equation.</span> </p><p><span m='939000'>And this was
  simply VS-K/2 (VI-VT)(RL^2).</span> </p><p><span m='957000'>So that's the
  first part. You have seen this before.</span> </p><p><span m='963000'>The
  transfer function shows that I have a square law</span> <span
  m='969000'>dependence between VI and VO. So now I can embark on the</span>
  <span m='976000'>second step of my large signal analysis, and my goal is to
  find</span> <span m='984000'>the valid input operating range. So what does
  that mean?</span> </p><p><span m='992000'>What I am looking to do here is, for
  this little circuit,</span> <span m='998000'>is drain, source, gate, VI,
  VO,</span> <span m='1002000'>RL and VS. What I am looking to do is that</span>
  <span m='1006000'>given the value of the supply VS, RL and a MOSFET,</span>
  <span m='1012000'>in our case given a MOSFET implies that it is a given
  value</span> <span m='1018000'>of K and a given value of VT for that
  MOSFET.</span> </p><p><span m='1025000'>So what I am going to do is find out,
  let's assume VI is my</span> <span m='1029000'>free variable here. So my goal
  will be to find out</span> <span m='1033000'>the range of VI for which this
  device stays in saturation.</span> </p><p><span m='1038000'>And I will use a
  couple of methods to do that,</span> <span m='1041000'>and I will use both a
  combination of a graphical</span> <span m='1045000'>method to give you
  intuition and then apply analytical analysis</span> <span m='1050000'>to get
  down to specific answers. So let's start with the</span> <span
  m='1056000'>intuitive part. So here is VI,</span> <span m='1059000'>VO. I will
  use the transfer curve</span> <span m='1063000'>VO versus VI to help build
  intuition here.</span> </p><p><span m='1079000'>So that is what it looks like.
  So the first step,</span> <span m='1083000'>looking at this graph, we know
  that this point here,</span> <span m='1087000'>that VI needs to be greater
  than VT to satisfy the first</span> <span m='1092000'>equation. Let me just
  write down both</span> <span m='1096000'>equations here. So VI greater than or
  equal to</span> <span m='1100000'>VT is one of them, and VO is greater than VI
  minus</span> <span m='1104000'>VT is a second equation. And just remember that
  this is</span> <span m='1111000'>the same as VDS and this is the same as
  VGS.</span> </p><p><span m='1116000'>So VI must be greater than VT for the
  MOSFET to turn on.</span> </p><p><span m='1122000'>And so therefore the valid
  operating range starts at this</span> <span m='1128000'>point and is somewhere
  up here. So the first part is pretty</span> <span m='1135000'>easy. Somewhere
  here --</span> <span m='1139000'>Somewhere at that point, my output voltage
  VO.</span> </p><p><span m='1142000'>I'm not quite sure what that point
  is.</span> </p><p><span m='1145000'>My output voltage VO, as this keeps
  falling down,</span> <span m='1149000'>my output voltage VO goes lower than
  one threshold below VI.</span> </p><p><span m='1154000'>And at that point it
  goes into its triode region,</span> <span m='1158000'>and I need to find out
  what that point is.</span> </p><p><span m='1161000'>So somewhere here I go
  into my triode region and begin to show</span> <span m='1166000'>a different
  behavior than the amplifying square law</span> <span m='1170000'>relationship
  there and go into my triode behavior.</span> </p><p><span m='1176000'>So I
  need to find out what this point is.</span> </p><p><span m='1179000'>Once I
  find out what that point is then this will be my valid</span> <span
  m='1185000'>operating range. So let's figure out what that</span> <span
  m='1189000'>point is. At that point the following is</span> <span
  m='1193000'>true. Certainly VI is greater than</span> <span m='1196000'>VT.
  And at that point the output</span> <span m='1199000'>goes below one
  threshold, the input minus one threshold.</span> </p><p><span m='1206000'>So
  at this point the following is true, VO is equal to VI minus</span> <span
  m='1213000'>VT. At that point the output</span> <span m='1217000'>voltage is
  equal to the input minus VT.</span> </p><p><span m='1221000'>And if the output
  goes lower then it will violate this</span> <span m='1228000'>equation here.
  It is no longer greater than</span> <span m='1233000'>that number. So how do
  we find out what this</span> <span m='1238000'>point is? The principle
  intuition.</span> </p><p><span m='1241000'>Let's draw some lines here. Let's
  assume that VI and VT use</span> <span m='1247000'>the same scale, say,
  volts.</span> </p><p><span m='1249000'>So if I draw a straight line at 45
  degrees then that is a curve</span> <span m='1256000'>representing VI equals
  VO. We all know that.</span> </p><p><span m='1261000'>No big shakes. So the
  line at 45 degrees here</span> <span m='1266000'>is the line at which VI equal
  VO.</span> </p><p><span m='1270000'>And if I take that line now, the VI equals
  VO line,</span> <span m='1275000'>and I begin translating it to the
  right.</span> </p><p><span m='1280000'>So let's take a line here. Let's take a
  line there.</span> </p><p><span m='1285000'>That line will be simply equal to
  VO equals VI minus VT.</span> </p><p><span m='1293000'>I have translated that
  to the right.</span> </p><p><span m='1296000'>And so this line is simply VO
  equals VI minus VT.</span> </p><p><span m='1300000'>So this line is a locus of
  points at which VO is equal to</span> <span m='1306000'>this value. This minus
  VT shows up as a</span> <span m='1309000'>translation to the right. So I take
  my VO equals VI line,</span> <span m='1314000'>translate that to the right and
  it becomes VO equals VI minus</span> <span m='1320000'>VT. Elementary geometry
  101 or</span> <span m='1325000'>whatever. So what do we have here?</span>
  </p><p><span m='1330000'>Above this we have the condition VO greater than
  or</span> <span m='1337000'>equal to VI minus VT, and below that we have VO
  less</span> <span m='1344000'>than VI minus VT. If we look at this graph
  here,</span> <span m='1351000'>this is the valid input operating range.</span>
  </p><p><span m='1355000'>Starting at this point greater than VT, and at this
  point my</span> <span m='1361000'>output equals VO equals VI minus VT.</span>
  </p><p><span m='1365000'>This must be the valid operating range for the
  input</span> <span m='1371000'>here to here. And correspondingly the
  outputs</span> <span m='1376000'>are from here to this point to here like
  so.</span> </p><p><span m='1382000'>So this is my valid input operating range
  and this is my</span> <span m='1386000'>valid output operating range or the
  corresponding valid output</span> <span m='1391000'>operating range. So what
  does this say?</span> </p><p><span m='1394000'>What this is saying is that if
  I, as the designer of the</span> <span m='1399000'>circuit, am disciplined
  enough to apply inputs that are in this</span> <span m='1404000'>range, VT to
  some value here, graphically shown here.</span> </p><p><span m='1410000'>Then
  my MOSFET will remain in saturation.</span> </p><p><span m='1414000'>And
  correspondingly my outputs will go between VS and some</span> <span
  m='1420000'>value here. So hopefully that gives you</span> <span
  m='1425000'>some of the intuition behind how we get it.</span> </p><p><span
  m='1429000'>And let's continue. Let me label this point X.</span> </p><p><span
  m='1444000'>So continuing with two to get the valid operating range.</span>
  </p><p><span m='1449000'>I have shown you intuitively where that point
  is,</span> <span m='1454000'>but what I will do next is actually compute that
  for you.</span> </p><p><span m='1460000'>It is a pretty simple
  computation.</span> </p><p><span m='1464000'>Note that point X is the
  intersection of two curves VO</span> <span m='1469000'>equals VI minus VT. And
  the second curve is VO</span> <span m='1476000'>equals VS minus K divide by 2,
  VI minus V2 all squared RL.</span> </p><p><span m='1484000'>So the point X iss
  at the intersection of these curves,</span> <span m='1492000'>and I can very
  easily get that as follows.</span> </p><p><span m='1499000'>What I will do is
  I will simply substitute for VI minus VT from</span> <span m='1506000'>this
  equation here and then solve for it,</span> <span m='1510000'>so I get VO
  equals VS minus K divide by 2 VO squared RL.</span> </p><p><span
  m='1517000'>And so this gives me a quadratic in VO.</span> </p><p><span
  m='1521000'>And I can solve for it pretty easily.</span> </p><p><span
  m='1525000'>And I get for a quadratic AX squared plus BX plus C equals
  0.</span> </p><p><span m='1534000'>The solution is given by VO is minus B
  plus/minus square root</span> <span m='1538000'>of B squared minus 4AC divided
  by 2A.</span> </p><p><span m='1541000'>And so I am just going to get those
  numbers here.</span> </p><p><span m='1545000'>So the coefficient of VO, that
  is B, is minus 1.</span> </p><p><span m='1549000'>Take the positive root
  because we are up in the positive</span> <span m='1553000'>voltages here. And
  square root of B squared,</span> <span m='1557000'>that is 1, minus 4AC. So I
  get a plus 4 times K</span> <span m='1566000'>divide by 2 RL. And 2A is simply
  2 times K</span> <span m='1577000'>divided by 2 times RL. So that is what I
  get.</span> </p><p><span m='1590000'>That gives me VO. So it tells me that
  VO,</span> <span m='1595000'>at the point where the output just equals one
  threshold drop</span> <span m='1602000'>below VI is given by the other circuit
  perimeter such as VS,</span> <span m='1610000'>RL and so on. Oh, I am missing
  a VS here.</span> </p><p><span m='1615000'>I just forgot the VS up here. That
  is my VO.</span> </p><p><span m='1622000'>So what is VI equal to? Remember
  that at this point VO</span> <span m='1632000'>equals VI minus VT, so VI is
  simply VT plus --</span> <span m='1660000'>I have not taught you anything
  earth shattering here.</span> </p><p><span m='1663000'>I have just done some
  grubby math here to solve these two</span> <span m='1667000'>equations. So
  this is a straight line at</span> <span m='1669000'>45 degrees from VT and
  this is the transfer function.</span> </p><p><span m='1673000'>And I need to
  find the intersection.</span> </p><p><span m='1675000'>And the intersection is
  given by this point.</span> </p><p><span m='1684000'>So that point, VI being
  VT plus something,</span> <span m='1690000'>is simply the second dot on the X
  axis.</span> </p><p><span m='1695000'>So therefore I am pretty much
  done.</span> </p><p><span m='1700000'>My valid input range for VI goes from
  VT.</span> </p><p><span m='1708000'>So it starts at VT. That is where the
  transistor</span> <span m='1712000'>just turns on. And then goes all the way
  to</span> <span m='1716000'>this point, VT plus minus 1 plus square root of 1
  plus 2 K RL VS</span> <span m='1723000'>K RL. So this is my valid
  operating</span> <span m='1726000'>range. And again remember I won't</span>
  <span m='1729000'>dwell on this equation because, in some sense,</span> <span
  m='1734000'>you will get a different set of limits for other devices,</span>
  <span m='1739000'>for other circuits containing a MOSFET.</span> </p><p><span
  m='1745000'>Or, for that matter, for other outputs that one may</span> <span
  m='1748000'>be focusing on. So what is more important here</span> <span
  m='1751000'>is not so much the results that you see but the process that
  I</span> <span m='1756000'>have gone through. So what is more important
  here</span> <span m='1759000'>is how did I get here? And the way I got here
  was</span> <span m='1762000'>looked at the graph and said look, the MOSFET is
  in</span> <span m='1766000'>saturation in that regime. And I am finding the
  bounding</span> <span m='1771000'>points of the regime of saturation
  operation.</span> </p><p><span m='1775000'>So now, as an engineer, I can say
  that hey,</span> <span m='1779000'>look, if you build a MOSFET circuit like
  so,</span> <span m='1783000'>with a given value of RL, a given MOSFET and a
  given VS,</span> <span m='1788000'>then if you limit yourself you are
  operating with input</span> <span m='1792000'>voltages in this range thou
  shalt be happy.</span> </p><p><span m='1796000'>If you go beyond that range
  then you will be violating the</span> <span m='1801000'>saturation discipline.
  So the corresponding output</span> <span m='1807000'>range --</span> <span
  m='1818000'>I can write the corresponding output range,</span> <span
  m='1822000'>and that goes from VS, when the input is at VT the</span> <span
  m='1828000'>output is at VS and goes from VS down to the input minus
  VT.</span> </p><p><span m='1836000'>Which is simply minus 1 plus --</span>
  <span m='1851000'>Let me go back and quickly show you a little MOSFET
  circuit,</span> <span m='1855000'>amplified circuit so you can stare at a real
  transfer curve</span> <span m='1858000'>yourselves. And indeed convince
  yourselves</span> <span m='1863000'>that roughly at the point where
  proportionately shown in the</span> <span m='1870000'>curve up there the
  MOSFET indeed goes into its triode region and</span> <span m='1877000'>begins
  heading out of its saturation region.</span> </p><p><span m='1882000'>Notice
  that here that is the same curve, the transfer</span> <span
  m='1887000'>function. And the amplified output is at</span> <span
  m='1892000'>VS until input reaches a threshold voltage VT.</span> </p><p><span
  m='1896000'>And once input goes beyond VT the output begins to drop</span>
  <span m='1901000'>precipitously. And at some point here this</span> <span
  m='1905000'>begins to go into its triode region.</span> </p><p><span
  m='1909000'>And what I am going to do is simply increase the input</span>
  <span m='1913000'>voltage VI, and you will see that the output them begins
  to</span> <span m='1919000'>go into its triode region. It keeps
  dropping.</span> </p><p><span m='1925000'>And, as you can see, the output
  begins to go into a</span> <span m='1930000'>space where the gain is no longer
  more than 1.</span> </p><p><span m='1936000'>And this is a triode region of
  MOSFET operation.</span> </p><p><span m='1941000'>So the MOSFET is in
  saturation, things are going great.</span> </p><p><span m='1949000'>As I
  increase my VI notice at some point I begin to go out of</span> <span
  m='1955000'>my saturation region of the MOSFET.</span> </p><p><span
  m='1958000'>And somewhere here I go from the saturation region and</span>
  <span m='1963000'>transition into the triode region.</span> </p><p><span
  m='1967000'>And this value shown here gives you the corresponding input</span>
  <span m='1972000'>voltage and the output voltage. Other practical devices
  like</span> <span m='1979000'>bipolar junction transistors or MOSFETs and
  other circuits and</span> <span m='1983000'>so on can be subjected to a
  similar analysis.</span> </p><p><span m='1986000'>And you can find out the
  valid operating regions for that</span> <span m='1990000'>device as well, or
  for that circuit.</span> </p><p><span m='1993000'>So as a next step what I
  would like to do --</span> <span m='2002000'>Out here I began by looking at
  the transfer function,</span> <span m='2005000'>the VO versus VI curve, and
  used that to drive the</span> <span m='2009000'>intuition behind how we
  calculated the bounding regions.</span> </p><p><span m='2014000'>You can do
  the same kind of analysis intuitively looking at</span> <span m='2018000'>yet
  another curve, another set of graphs that you</span> <span m='2022000'>are
  familiar with, and that is a load line</span> <span
  m='2025000'>characteristic. And it is interesting to get</span> <span
  m='2028000'>two interpretations. And you can use whichever one</span> <span
  m='2032000'>you feel comfortable with. So I will do two alternatively</span>
  <span m='2037000'>and show you another set of curves that you can use to
  get</span> <span m='2041000'>that.</span> </p><p><span m='2050000'>Here I am
  going to plot IDS versus VDS, which is the same as</span> <span
  m='2056000'>VO. This was the load line graph</span> <span m='2059000'>that we
  had seen earlier. And, just for our reference,</span> <span
  m='2065000'>remember that VI must be greater than VT for saturation</span>
  <span m='2071000'>operation. Similarly VO should be greater</span> <span
  m='2075000'>than or equal to VI minus VT for saturation operation.</span>
  </p><p><span m='2080000'>Those are my limits. The way we got the load
  line</span> <span m='2085000'>graph was we superimposed the load line equation
  over the</span> <span m='2090000'>device characteristics. And so let me plot
  the device</span> <span m='2095000'>characteristics in the saturation
  region.</span> </p><p><span m='2100000'>Remember that this constraint could be
  related to the current</span> <span m='2106000'>as I derived for you in the
  last lecture as follows.</span> </p><p><span m='2112000'>IDS being less than
  or equal to K divided by 2 VO squared.</span> </p><p><span m='2118000'>So in
  terms of my IDS versus VDS relation,</span> <span m='2122000'>this lateral
  constraint is equivalent to IDS being less</span> <span m='2128000'>than K by
  2 VO squared. So this is that equation.</span> </p><p><span m='2135000'>So
  this line is IDS equals K by 2 VO squared.</span> </p><p><span m='2140000'>And
  in this region I have the valid operating region where IDS</span> <span
  m='2148000'>is less than that quality. So here are all my other curves</span>
  <span m='2156000'>for various values VGS. So here are my devices
  curves,</span> <span m='2162000'>IDS versus VDS. Remember that these curves
  come</span> <span m='2166000'>down like this, for the MOSFET,</span> <span
  m='2168000'>right? Just that we focus on the</span> <span
  m='2171000'>right-hand side because that is where the MOSFET is in</span>
  <span m='2176000'>saturation. And on this side the MOSFET is</span> <span
  m='2179000'>in its triode region, and we discipline ourselves not</span> <span
  m='2183000'>to operate the MOSFET such that it is in its triode region.</span>
  </p><p><span m='2190000'>So those were the device characteristics.</span>
  </p><p><span m='2194000'>And then I could plot my load line equation.</span>
  </p><p><span m='2199000'>My load line equation, if you recall,</span> <span
  m='2202000'>was IDS = VS/RL - VO/RL. This was simply obtained by</span> <span
  m='2208000'>writing KVL at the loop containing the output node and</span>
  <span m='2214000'>the supply VS. Notice there that VO is equal</span> <span
  m='2218000'>to VS minus IDS times RL. And that is simply by dividing</span>
  <span m='2226000'>by RL on both sides and moving IDS to the left-hand side we
  get</span> <span m='2232000'>this equation. And this equation gives rise
  to</span> <span m='2236000'>a curve that looks like this. And what is this
  point here?</span> </p><p><span m='2242000'>This point is where VO is 0. So
  when VO is 0 my IDS is</span> <span m='2247000'>simply VS divided by RL. And
  this point is obtained when</span> <span m='2254000'>IDS is 0. And under those
  conditions VS</span> <span m='2259000'>and VO are equal so this is VS. This is
  my saturation region</span> <span m='2265000'>and this is the triode region.
  This was another interesting</span> <span m='2272000'>graph. We often times
  fondly call it</span> <span m='2276000'>the load line graph. So here is a load
  line</span> <span m='2281000'>superimposed on the MOSFET device IDS versus VDS
  curves for</span> <span m='2286000'>a variety of values of VGS. So by looking
  at this curve,</span> <span m='2290000'>we can also intuitively determine the
  valid operating</span> <span m='2294000'>range. So what are the two
  points</span> <span m='2297000'>here? I will let you stare at it for</span>
  <span m='2300000'>a couple of seconds yourselves to figure out what two
  points</span> <span m='2304000'>here bound the valid operating range of the
  MOSFET,</span> <span m='2308000'>the valid operating range of the
  circuit.</span> </p><p><span m='2313000'>I will start. One is this
  point,</span> <span m='2316000'>because at this point the output is VS and VGS
  has just</span> <span m='2323000'>begun to equal VT. So think about where the
  second</span> <span m='2329000'>point is for valid operation. It is here,
  and,</span> <span m='2335000'>somewhere along that load line. Remember the
  load line is a</span> <span m='2342000'>constraint that must be met by the
  output VO.</span> </p><p><span m='2346000'>It is the constraint imposed by KVL
  on the output.</span> </p><p><span m='2351000'>So the output is constrained to
  operate in this regime for</span> <span m='2357000'>various values of VGS. So
  as the output keeps going</span> <span m='2362000'>from here all the way here,
  at some point I exit my</span> <span m='2367000'>saturation region. And that
  other point is given</span> <span m='2372000'>by this one. So notice that this
  is the</span> <span m='2376000'>curve that bounds. On the left-hand side of
  this</span> <span m='2380000'>the MOSFET is no longer in saturation.</span>
  </p><p><span m='2383000'>It is on the right-hand side, and so therefore this
  is the</span> <span m='2389000'>valid operating region.</span> </p><p><span
  m='2400000'>Here to here. This is good.</span> </p><p><span m='2404000'>This
  is VS. That is good to know.</span> </p><p><span m='2409000'>And for this
  point I know that VI, which is VGS,</span> <span m='2417000'>equals VT. I know
  VO is equal to VS.</span> </p><p><span m='2423000'>And IDS, at this point, is
  0.</span> </p><p><span m='2430000'>So VO and IDS being VS and 0
  correspondingly are the output</span> <span m='2437000'>operating perimeters
  when VI equals VD.</span> </p><p><span m='2442000'>So that is one point. And
  let's find out what this</span> <span m='2448000'>point is. At that point I
  get my output</span> <span m='2453000'>just entering the range of the MOSFET
  triode region operation.</span> </p><p><span m='2463000'>Notice that this
  point is the intersection of two curves,</span> <span m='2469000'>this line
  and this curve. So this curve here is given by</span> <span m='2475000'>IDS
  equals K divided by 2 VO squared.</span> </p><p><span m='2479000'>And this is
  my load line equation.</span> </p><p><span m='2483000'>So that is VS divided
  by RL minus VO divided by RL.</span> </p><p><span m='2490000'>That's it. So I
  won't go ahead and solve</span> <span m='2492000'>that for you. You can go and
  check it out and</span> <span m='2495000'>convince yourselves that if you
  solve these two equations and</span> <span m='2499000'>find out the VO for
  this, it should be the same VO that</span> <span m='2503000'>you obtained
  using the other graph.</span> </p><p><span m='2517000'>What I have done here,
  obtaining the valid regions of</span> <span m='2521000'>operation is no
  different from what I did here.</span> </p><p><span m='2524000'>The two are
  alternative approaches to getting to the</span> <span m='2528000'>same place.
  Just that over the years what I</span> <span m='2531000'>have discovered is
  that there are one class of people that are</span> <span m='2536000'>output
  transfer function people, this graph, and another set of</span> <span
  m='2541000'>people that are load line people that like to think that
  way.</span> </p><p><span m='2547000'>I have always been a transfer function
  person myself,</span> <span m='2551000'>but some of you may be load line
  people and so you can use</span> <span m='2555000'>that to drive your
  intuition. It is pretty amazing.</span> </p><p><span m='2559000'>As we get
  into this business and keep going down the path,</span> <span m='2563000'>it
  is amazing how some people really kind of get the load line</span> <span
  m='2568000'>thing and others feel much more comfortable with the
  transfer</span> <span m='2573000'>function. So pick whatever you want.</span>
  </p><p><span m='2575000'>So what we have so far is we have conducted a large
  signal</span> <span m='2580000'>analysis of a MOSFET amplifier. It is an
  analysis of a circuit,</span> <span m='2586000'>and we found two things. One
  is the transfer function</span> <span m='2589000'>under saturation operation,
  and we found the valid input</span> <span m='2593000'>operating ranges and the
  corresponding valid output</span> <span m='2597000'>operating ranges for the
  circuit.</span> </p><p><span m='2599000'>In the last five or six minutes let
  me talk about a couple of</span> <span m='2603000'>other issues. And the first
  issue is what we</span> <span m='2606000'>have done so far is intuitively and
  mathematically shown you</span> <span m='2611000'>what the valid regions are.
  Now you are thinking that's</span> <span m='2616000'>fine, but how do I get
  there? This region is good,</span> <span m='2621000'>VT through that other
  point, that's good,</span> <span m='2624000'>but how do I get there? How do I
  make my amplifier</span> <span m='2629000'>operate in that region? The answer
  is pretty simple,</span> <span m='2634000'>and let me drive the intuition
  again using a graph.</span> </p><p><span m='2653000'>So this is a graph. And I
  showed you that --</span> <span m='2662000'>That was my valid region here.
  Take a 45 degree line,</span> <span m='2665000'>find out where it intersects
  the transfer function,</span> <span m='2668000'>then this is the valid region
  here, VT through that</span> <span m='2672000'>coordinating function that we
  developed out there.</span> </p><p><span m='2676000'>If I have an input that
  looks like so, some input whose</span> <span m='2685000'>gyrations fall within
  this range, will constantly keep the</span> <span m='2694000'>MOSFET in
  saturation. And the corresponding output</span> <span m='2701000'>will look
  like this. If my input is in this range,</span> <span m='2706000'>my output
  will be within this range.</span> </p><p><span m='2709000'>And how do I get my
  input to be here?</span> </p><p><span m='2712000'>Let's say I have a sinusoid
  that is 1 volt peak to peak or</span> <span m='2717000'>whatever. How do I get
  my sinusoid up</span> <span m='2721000'>there? Well, you have learned
  the</span> <span m='2724000'>trick on how to boost things. Remember
  boost?</span> </p><p><span m='2728000'>All you have to do is boost up your
  signal by some value</span> <span m='2733000'>capital VI. And the way you do
  that is as</span> <span m='2739000'>follows. VS, RL, VO.</span> </p><p><span
  m='2742000'>What you do is you apply a DC offset to your input.</span>
  </p><p><span m='2749000'>You take your sinusoid and boost it up so that all
  the</span> <span m='2756000'>gyrations of the input are in the valid
  range.</span> </p><p><span m='2764000'>This is my input, some VA.</span>
  </p><p><span m='2766000'>Then I apply some DC offset capital VI given by this
  value</span> <span m='2773000'>here. And boost up the interesting</span> <span
  m='2776000'>input? My interesting input is the VA.</span> </p><p><span
  m='2780000'>And I boost it up by capital VI so that this guy is always
  in</span> <span m='2787000'>saturation. I would like to show you a</span>
  <span m='2792000'>little demo now. I am going to show you an input</span>
  <span m='2796000'>that is a triangular wave. And what we will do is
  I'll</span> <span m='2800000'>play with a wide variety of offset
  voltages.</span> </p><p><span m='2804000'>This guy is a triangular wave. And
  what I am going to do is</span> <span m='2809000'>apply a triangular wave and
  we'll look at the output and</span> <span m='2814000'>convince ourselves that
  I get amplification when VI is big</span> <span m='2819000'>enough that the
  input goes into a valid operating range.</span> </p><p><span m='2825000'>And
  we will look at a variety of ranges here.</span> </p><p><span m='2829000'>You
  can put it a little larger.</span> </p><p><span m='2843000'>OK. So the
  triangular wave is my</span> <span m='2848000'>input. And this is my
  output.</span> </p><p><span m='2851000'>This looks nothing like a triangular
  wave.</span> </p><p><span m='2854000'>And the reason is that I do not have the
  right offset.</span> </p><p><span m='2858000'>So what I will do is gradually
  increase the offset on the</span> <span m='2862000'>MOSFET. So at this point
  the offset is</span> <span m='2865000'>very low, a very small near zero
  offset.</span> </p><p><span m='2867000'>And so therefore my output is a
  disaster.</span> </p><p><span m='2870000'>My MOSFET is not in saturation all
  the time.</span> </p><p><span m='2873000'>So what I will do here is apply some
  sort of offset.</span> </p><p><span m='2877000'>Is this the one? We want to
  switch.</span> </p><p><span m='2881000'>This is the input. You can see I am
  applying an</span> <span m='2886000'>offset by bumping and boosting up the
  input.</span> </p><p><span m='2900000'>I don't have clipping happening at both
  ends,</span> <span m='2903000'>but I get something. And I get
  amplification.</span> </p><p><span m='2906000'>Now let me apply way too much
  of an offset.</span> </p><p><span m='2910000'>With this offset I am kind of
  operating here.</span> </p><p><span m='2913000'>What I will do now is apply an
  even higher offset so that this</span> <span m='2917000'>triangular wave
  begins to move here.</span> </p><p><span m='2920000'>If I apply a very high
  offset what I am doing is overdriving</span> <span m='2924000'>the amplifier,
  boosting it so high that the</span> <span m='2927000'>MOSFET is going to go
  into its triode region and you are going</span> <span m='2931000'>to see that
  I won't have any gain.</span> </p><p><span m='2934000'>My output is going to
  shrink noticeably if I overdrive the</span> <span m='2938000'>input. You will
  notice the input going</span> <span m='2943000'>higher and higher. Pull the
  trigger point down.</span> </p><p><span m='2949000'>There you go. Notice that
  as I boost up my</span> <span m='2953000'>input even higher notice that the
  output is a really small</span> <span m='2960000'>image of what the right
  input should be.</span> </p><p><span m='2966000'>The right answer here, of
  course, is that I apply some</span> <span m='2970000'>right amount of offset
  to boost up the input into the right</span> <span m='2974000'>regime so that
  the output is seen to be some amplified</span> <span m='2978000'>version of
  this input. So I showed you three things.</span> </p><p><span m='2982000'>One
  is very little offset. That was like so,</span> <span m='2986000'>as the thing
  comes down. A very high offset,</span> <span m='2989000'>it gets killed again.
  And the right amount of offset.</span> </p><p><span m='2993000'>But notice
  that we still have a problem, even with the right</span> <span
  m='2998000'>offset. The output is not linearly</span> <span
  m='3002000'>related to the input. It is nonlinear.</span> </p><p><span
  m='3004000'>And the answer to get a linear response is good old small</span>
  <span m='3009000'>signal stuff. And we will be looking at the</span> <span
  m='3012000'>small signal part in the next lecture.</span> <span m='7000000'>So
  your 2N7000,</span> </p>
uid: 985cfc58bf6a539b06c25e935cfdfcc1
type: courses
layout: video
---
