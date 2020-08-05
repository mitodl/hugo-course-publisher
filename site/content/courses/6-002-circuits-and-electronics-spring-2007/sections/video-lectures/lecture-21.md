---
about_this_resource_text: >-
  <p><strong>Topics covered:</strong> Op amps positive feedback</p>
  <p><strong>Instructor:</strong> Prof. Anant Agarwal</p>
embedded_media:
  - id: thumb_lec21.jpg
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-21/thumb_lec21.jpg
    title: thumb_lec21.jpg
    type: null
    uid: 80be7d1040c0338f70fec14dc350e1cb
  - id: Video-YouTube-Stream
    media_location: ke3SL_R92ys
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Video-YouTube-Stream
    type: Video
    uid: 39ac7a0f0cb461907e0472119818f2d8
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/ke3SL_R92ys/default.jpg'
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: ca8e37c2145a50ad2c11b7ffee907530
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id341597464'
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Video-iTunes U-MP4
    type: Video
    uid: cc66b57744d9ec695a53c4caef02c1de
  - id: Video-InternetArchive-MP4
    media_location: >-
      http://www.archive.org/download/MIT6.002S07/ocw-6.002-lec-mit-10250-25nov2003-220k.mp4
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Video-Internet Archive-MP4
    type: Video
    uid: 887012b117070197a1128f6f4ee05bde
  - id: Thumbnail-OCW-JPG
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Thumbnail-OCW-JPG
    type: Thumbnail
    uid: 882f9cf081c3eab2dcb76662eb18b894
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: ke3SL_R92ys
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 06348964694b448ee30f99b8383216d1
  - id: ke3SL_R92ys.srt
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-21/ke3SL_R92ys.srt
    title: 3play caption file
    type: null
    uid: ea43329c575ea1d794281e57fed54fcc
  - id: ke3SL_R92ys.pdf
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-21/ke3SL_R92ys.pdf
    title: 3play pdf file
    type: null
    uid: 611cea8b3c59b5f5eba5be0bd8ddb0ef
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8063536d49d8037ca62b332afa6d31f3
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 786a3d1334f20386c4379b2e866b3691
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ab101dec15919af946e465e90e8f74d4
inline_embed_id: '61106520lecture21:opampspositivefeedback76960058'
order_index: 381
parent_uid: 9b4a2ba7a556b2348b0c3f1bdd4fa8ab
related_resources_text: >-
  <p>Lecture Notes (<a target="_blank" title="Open in a new window."
  href="./resolveuid/27776d035c056201a47d86d6d44f361a">PDF</a>)<br />
  Demonstration: Schmitt trigger (<a target="_blank" title="Open in a new
  window." href="./resolveuid/ec4b5e1821ffc200c6dbfdb1a040393b">PDF</a>)<br />
  Demonstration: Relaxation oscillator (<a target="_blank" title="Open in a new
  window." href="./resolveuid/734efd5f91004b3eef9f15517a79f3b7">PDF</a>)</p>
short_url: lecture-21
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-002-circuits-and-electronics-spring-2007/video-lectures/lecture-21
title: 'Lecture 21: Op Amps Positive Feedback'
transcript: >-
  <p><span m='0'>All right. Good morning,</span> <span m='1000'>all.</span>
  </p><p><span m='9000'>You have two handouts, lecture notes and an article
  on</span> <span m='14000'>mixed signal chips. A mixed signal stands for</span>
  <span m='19000'>circuits that have both analog and digital components to
  them.</span> </p><p><span m='27000'>The reason I am giving you the handout is
  that Lab 4 and also</span> <span m='31000'>your last homework involve
  designing and building a mixed</span> <span m='36000'>signal circuit. It's a
  real fun exercise.</span> </p><p><span m='39000'>And I just wanted to tell you
  that from past experience people</span> <span m='44000'>who have taken 6.002
  often view the last lab as the single most</span> <span m='49000'>fun thing
  they did in all of</span> <span m='52000'>So, as you go into Lab 4, you should
  be telling yourself</span> <span m='56000'>I should be having fun, I should be
  having,</span> <span m='59000'>I should be having fun. You have to positively
  psych</span> <span m='65000'>yourself. Otherwise, it's going to go by.</span>
  </p><p><span m='68000'>And then you're going to say boy, that was fun,</span>
  <span m='72000'>I wish I had savored the moment as I was doing it.</span>
  </p><p><span m='76000'>All right. Let's see.</span> </p><p><span
  m='78000'>What do we do today? Today's lecture is actually</span> <span
  m='81000'>going to be a fair amount of fun.</span> </p><p><span m='84000'>We
  are going to blast through a bunch of fun things.</span> </p><p><span
  m='90000'>And some things that you will be quite unprepared for.</span>
  </p><p><span m='94000'>Until now, in the last two lectures with op amps we
  talked</span> <span m='98000'>about negative feedback. That is applying some
  portion</span> <span m='102000'>of the output voltage to the negative input so
  that I could</span> <span m='107000'>control this high strung device, my op
  amp.</span> </p><p><span m='110000'>Today, what we are going to do is try to
  get a handle on what</span> <span m='115000'>happens if we use positive
  feedback.</span> </p><p><span m='119000'>It's the usual curious child. You
  tell them to do this,</span> <span m='123000'>and of course they're going to
  try to do this as well.</span> </p><p><span m='126000'>And we are going to try
  to do that and see what happens and</span> <span m='131000'>look to see if we
  can build some useful circuits.</span> </p><p><span m='134000'>Today --</span>
  <span m='148000'>As motivation, let me do a quick review of a</span> <span
  m='151000'>circuit that should now become affixed in your brains in a</span>
  <span m='157000'>standard pattern. This is a circuit that gives</span> <span
  m='161000'>you negative feedback.</span> </p><p><span m='176000'>R1 and
  R2.</span> </p><p><span m='183000'>And I apply a vIN. By now you should be
  able to</span> <span m='187000'>look at this pattern. And this is your
  inverting</span> <span m='191000'>amplifier pattern. So, you should be able to
  write</span> <span m='195000'>down by inspection this is simply vIN or the
  minus vIN</span> <span m='200000'>times R2 divided by R1. This is an amplifier
  whose gain</span> <span m='205000'>is controlled by the ratio of R2 and
  R1.</span> </p><p><span m='210000'>This is a negative feedback circuit because
  it is always fun</span> <span m='214000'>to do the intuition thing and say
  that look,</span> <span m='217000'>if this voltage tends to go more positive
  than I care then</span> <span m='221000'>this negative input goes more
  positive than I care.</span> </p><p><span m='224000'>If that goes more
  positive then the negative input v minus</span> <span m='228000'>becomes more
  positive in the plus input which yanks the</span> <span m='232000'>output
  down. So, there is a nice</span> <span m='234000'>counteracting force that
  keeps the output stable.</span> </p><p><span m='239000'>Let's look at this
  circuit. Being curious engineers,</span> <span m='243000'>let's look at the
  opposite here where I give myself some</span> <span m='248000'>positive
  feedback in this op amp.</span> </p><p><span m='264000'>And it is going to be
  interesting to analyze this</span> <span m='267000'>because what we find out
  on the face of it is not quite actually</span> <span m='272000'>how it
  behaves. We are going to spend most of</span> <span m='275000'>the lecture
  today on understanding the dynamics of</span> <span m='278000'>circuits that
  look like this and to see if we can build some fun</span> <span m='282000'>and
  interesting circuits and systems based on this kind of</span> <span
  m='286000'>positive feedback. It is positive feedback because</span> <span
  m='289000'>I am feeding back a portion of the output to the positive</span>
  <span m='292000'>input. And you should be able to stare</span> <span
  m='295000'>at this and already begin to intuit what should happen to</span>
  <span m='298000'>this. Let's think about it.</span> </p><p><span
  m='301000'>This is zero. Remember, with positive</span> <span
  m='303000'>feedback, the famous v plus is equal to v minus method
  doesn't</span> <span m='308000'>apply anymore. Let's apply very simple</span>
  <span m='310000'>analyses. If this is zero,</span> <span m='312000'>let's say
  for example that this output tends to go a little bit</span> <span
  m='316000'>more positive. This output,</span> <span m='318000'>due to some
  noise or perturbation,</span> <span m='320000'>tends to go up a little bit. If
  that goes up a little bit</span> <span m='324000'>then because of feedback
  this node tends to go up a little</span> <span m='328000'>bit. If this node
  tends to go up a</span> <span m='331000'>little bit this exacerbates the
  positive input here and this one</span> <span m='335000'>goes cachunk, whacks
  into the positive rail.</span> </p><p><span m='338000'>Let's take the other
  point of view and look at it intuitively.</span> </p><p><span m='342000'>What
  if this one tries to droop a little bit?</span> </p><p><span m='344000'>If it
  droops a little bit then the input at the plus terminal</span> <span
  m='348000'>droops a little bit. If that tends to go down a</span> <span
  m='351000'>little bit, that makes the output droop further and it goes</span>
  <span m='355000'>and hits into the negative rail. I can see that this
  circuit</span> <span m='359000'>wants to hammer into the positive rail or
  hammer into the</span> <span m='362000'>negative rail because of the positive
  feedback.</span> </p><p><span m='365000'>It is like if you give incredibly
  positive feedback all</span> <span m='368000'>the time, and by positive
  feedback I mean feedback</span> <span m='371000'>encouraging the child to do
  whatever the child is doing.</span> </p><p><span m='374000'>It could be if he
  does bad stuff you give a lot of positive</span> <span m='377000'>feedback or
  good stuff you give a lot of positive feedback then</span> <span
  m='381000'>you are guaranteed to have a very good child or a very bad</span>
  <span m='384000'>child. You are not going to have</span> <span
  m='386000'>anybody in the middle. Same way here.</span> </p><p><span
  m='389000'>By giving positive feedback you're going to drive this into</span>
  <span m='393000'>the positive rail or drive this into the negative
  rail.</span> </p><p><span m='397000'>Now, I am going to analyze this in two
  steps.</span> </p><p><span m='400000'>First I am going to analyze this using a
  method you've seen</span> <span m='404000'>before which is replace the op amp
  with its equivalent circuit</span> <span m='409000'>and analyze it statically.
  And by analyzing it statically</span> <span m='412000'>we are going to show
  that the simple static analysis will</span> <span m='416000'>yield the
  following expression. I put this in quotes,</span> <span m='421000'>well, for
  a reason you will see shortly.</span> </p><p><span m='424000'>When I apply a
  plain and simple static analysis here is what I</span> <span m='429000'>find.
  Let's go ahead with the</span> <span m='431000'>analysis and see what is
  basically different about these</span> <span m='435000'>two. And, first of
  all,</span> <span m='437000'>I will confirm for you that our naive analysis we
  have seen so</span> <span m='442000'>far will give rise to that
  expression.</span> </p><p><span m='445000'>So, let's go ahead and analyze that
  circuit.</span> </p><p><span m='450000'>And to analyze that circuit what I
  will do is replace the op</span> <span m='458000'>amp with its equivalent
  circuit. If you remember the op amp is</span> <span m='466000'>characterized
  by the following circuit, A times v+ minus v-,</span> <span m='474000'>vOUT.
  This is the equivalent circuit</span> <span m='479000'>of my op amp. And let
  me just impose that</span> <span m='484000'>external circuit on this op amp. I
  have grounded my v- terminal.</span> </p><p><span m='491000'>My v+ terminal
  goes through a resistor and a supply,</span> <span m='496000'>the v into
  ground, it's the resistance R1.</span> </p><p><span m='500000'>This terminal
  goes to the output through a resistor R2.</span> </p><p><span m='505000'>So,
  this is the equivalent circuit.</span> </p><p><span m='510000'>And I can apply
  the same good-old techniques I have</span> <span m='515000'>learned about all
  through this course to this circuit and see</span> <span m='522000'>what vOUT
  looks like. Very simply,</span> <span m='525000'>vOUT is this expression here
  A times v+ minus v-.</span> </p><p><span m='531000'>And because of my ground
  connection v- is zero.</span> </p><p><span m='536000'>Then let me go ahead and
  replace v+ with the voltage that</span> <span m='542000'>relates vOUT and vIN.
  What is v+?</span> </p><p><span m='547000'>v+ is simply the current through
  this part of the</span> <span m='552000'>circuit, the current flowing here
  times the resistance R1.</span> </p><p><span m='558000'>That gives me the drop
  across R1.</span> </p><p><span m='562000'>And to that I add vIN and that will
  give me V+.</span> </p><p><span m='568000'>And then of course I multiply this
  by the gain here.</span> </p><p><span m='572000'>So, let me write down that
  expression.</span> </p><p><span m='575000'>The current through this is simply
  vOUT minus vIN.</span> </p><p><span m='580000'>That is the voltage drop
  between these two points.</span> </p><p><span m='584000'>I divide that by the
  resistance R1 plus R2.</span> </p><p><span m='588000'>That gives me the
  current flowing through here.</span> </p><p><span m='592000'>That times R1 is
  the drop across resistor R1.</span> </p><p><span m='595000'>And to that I add
  vIN and that gives me the voltage v+.</span> </p><p><span m='602000'>So, this
  is v+. That is simply vIN plus the</span> <span m='607000'>drop across the
  resistance R1. Let me shuffle things around</span> <span m='614000'>and put
  all the vOUT terms on this side here.</span> </p><p><span m='620000'>I get a
  1+ for that vOUT and let me move AR1 divided by R1</span> <span
  m='628000'>plus R2 to the left-hand side. And I pick up a minus sign.</span>
  </p><p><span m='636000'>So, I get AR1 divide by R1 plus R2.</span>
  </p><p><span m='640000'>I pick up that. And on the left-hand sign I end</span>
  <span m='646000'>up with vIN, and my vIN here is a function of the vIN that
  I</span> <span m='653000'>have here. I have an A multiplying both</span> <span
  m='657000'>the vINs. And then I get a one for this</span> <span m='663000'>vIN
  here and there is a minus sign, so I get a minus R1</span> <span
  m='668000'>divided by R1+R2. That is the expression that I</span> <span
  m='673000'>have. Let me go ahead and simplify</span> <span m='677000'>that a
  little further and move this whole thing down here.</span> </p><p><span
  m='683000'>That gives me my expression as a function of vIN.</span>
  </p><p><span m='690000'>What I will do is, let me continue here.</span>
  </p><p><span m='693000'>vOUT=vIN A(1-R1/(R1+R2)). By the way, you may
  be</span> <span m='697000'>wondering why I am going through so laboriously
  what is seemingly</span> <span m='702000'>a very simple exercise. The reason I
  want to do is it I</span> <span m='706000'>want to very carefully show you
  that the result produced by this</span> <span m='712000'>exercise is exactly
  that. No magic here.</span> </p><p><span m='715000'>No cheating. We are going
  to get exactly</span> <span m='718000'>that. And then stare at it and
  say</span> <span m='722000'>huh, how did that happen? And then we are going to
  try to</span> <span m='727000'>figure out how it actually behaves following
  that.</span> </p><p><span m='731000'>I divide this by 1-AR1/(R1+R2). And by
  now you should be</span> <span m='736000'>familiar with the technique of
  ignoring small numbers when I</span> <span m='742000'>have a big number next
  to it. So, AR1/(R1+R2) can be very</span> <span m='747000'>much larger than
  one because A is very large.</span> </p><p><span m='752000'>So, I can ignore
  my one there. And then what I am going to do</span> <span m='757000'>is
  multiply the numerator and denominator by R1+R2.</span> </p><p><span
  m='762000'>Oh, this A and this A is going to cancel out.</span> </p><p><span
  m='766000'>This A and this A will then cancel out.</span> </p><p><span
  m='770000'>And then I multiply the numerator and denominator by</span> <span
  m='774000'>R1+R2, so this R1+R2 vanishes. I get R1+R2 here.</span>
  </p><p><span m='779000'>R1+R2 minus R1 is simply R2. And then down here I get
  a R1</span> <span m='786000'>and then I have a minus sign out there.</span>
  </p><p><span m='791000'>Notice that vOUT we have found to be equal to vIN R2
  divided by</span> <span m='798000'>R1. That is not wrong.</span> </p><p><span
  m='801000'>That is correct. Technically that is correct.</span> </p><p><span
  m='808000'>But you will see in a few seconds that in practice that</span>
  <span m='812000'>that's rarely what you are going to see happen.</span>
  </p><p><span m='815000'>And we will try to understand why that is so.</span>
  </p><p><span m='818000'>What we have done so far, if you stare at these
  two</span> <span m='822000'>panels here, first of all, we know that the
  inverting</span> <span m='826000'>amplifier has the expression for vOUT up
  there.</span> </p><p><span m='830000'>And through this laborious exercise we
  have also shown that</span> <span m='834000'>even with positive feedback, if I
  take a static view of the</span> <span m='839000'>circuit -- If I take a
  snapshot of the</span> <span m='843000'>circuit and simply analyze it as a
  static circuit,</span> <span m='846000'>I get the same expression vOUT. But
  what we are going to do is</span> <span m='851000'>when I explain to you that
  look, a small perturbation in vOUT is</span> <span m='856000'>going to drive
  the op amp to the positive and negative rail,</span> <span m='860000'>that is
  where the insight begins to show.</span> </p><p><span m='863000'>That if
  everything were magical and I could somehow exactly keep</span> <span
  m='868000'>things just so that will be true.</span> </p><p><span m='872000'>I
  will be able to build that positive feedback circuit where</span> <span
  m='875000'>the output is equal to R2/R1 vIN.</span> </p><p><span
  m='878000'>But remember even the slightly amount of perturbation is
  going</span> <span m='882000'>to send the op amp scurrying off to the positive
  rail or the</span> <span m='886000'>negative rail. How do we analyze
  that?</span> </p><p><span m='888000'>How do we analyze the behavior of a
  circuit that based on a</span> <span m='892000'>small perturbation begins to
  move one place or another?</span> </p><p><span m='896000'>We want to analyze
  the dynamics of the op amp.</span> </p><p><span m='900000'>And to analyze the
  dynamics what I need to do is give you a</span> <span m='904000'>slightly more
  detailed view of the operational amplifier.</span> </p><p><span m='908000'>If
  the operational amplifier is not moving instantaneously</span> <span
  m='912000'>between the plus and minus rail, I need to give you a more</span>
  <span m='916000'>detailed model that encapsulates the behavior of the op
  amp.</span> </p><p><span m='921000'>And so let me do that. If you want to
  study the</span> <span m='924000'>dynamics of an op amp -- By dynamics I mean
  how an op</span> <span m='930000'>amp moves as I perturb the input or the
  output and so on.</span> </p><p><span m='938000'>To capture the dynamics of
  the op amp we build a slightly more</span> <span m='946000'>involved circuit,
  so v+ and v-.</span> </p><p><span m='966000'>This is what we've seen before,
  two terminals and dependent</span> <span m='970000'>source that amplifies the
  difference input here by a large</span> <span m='974000'>amount. Instead what
  we are going to do</span> <span m='977000'>here is something slightly
  different and interpose the</span> <span m='981000'>following circuit in the
  middle here.</span> </p><p><span m='984000'>This is a model of the dynamics of
  an op amp.</span> </p><p><span m='989000'>We are going to impose a small RC
  circuit in here.</span> </p><p><span m='993000'>This is R. This is C.</span>
  </p><p><span m='995000'>And I am going to call the voltage across the
  capacitor v*.</span> </p><p><span m='1000000'>Notice what I have done is
  rather than say this is Av+</span> <span m='1005000'>minus v- I am breaking it
  apart in two dependent sources,</span> <span m='1010000'>the first dependent
  source, which is simply v+ minus v-,</span> <span m='1015000'>and there is a
  RC time constant surrounding it and then here I</span> <span
  m='1021000'>simply add on my gain Av*. Notice that if it turned out</span>
  <span m='1027000'>that the resistance here, for example,</span> <span
  m='1029000'>was zero then v+ minus v- would appear across v* and this
  would</span> <span m='1034000'>be A(v+ - v-), what you have seen
  before.</span> </p><p><span m='1036000'>It is always good to take a look at
  circuits and look at</span> <span m='1040000'>what happens when some component
  goes to an extreme value.</span> </p><p><span m='1044000'>This would give you
  your basic op amp circuit.</span> </p><p><span m='1049000'>What I would like
  to do next is analyze the following circuit to</span> <span
  m='1053000'>understand how positive and negative feedback work
  together.</span> </p><p><span m='1058000'>And by understanding that then be
  able to explain how a</span> <span m='1062000'>positive feedback circuit works
  or a negative feedback circuit</span> <span m='1067000'>works. Here is what I
  will do.</span> </p><p><span m='1069000'>This part simply corresponds to my
  positive feedback circuit,</span> <span m='1074000'>R2, R1. So, that is my
  positive</span> <span m='1076000'>feedback circuit. And I will do the same
  thing on</span> <span m='1080000'>this side.</span> </p><p><span
  m='1089000'>All I am doing is applying both a positive feedback through
  R2</span> <span m='1092000'>and R1 and negative feedback through R4 and R3
  and</span> <span m='1095000'>representing the dynamics of the op amp and then
  standing back</span> <span m='1099000'>and ee, all right, let's see what
  happens to you.</span> </p><p><span m='1102000'>So, I am sticking positive
  feedback, negative feedback,</span> <span m='1105000'>the dynamics of the op
  amp here and let's see what happens.</span> </p><p><span m='1110000'>What I
  would like to do is impose this circuit on top of</span> <span
  m='1118000'>this op amp model. To save myself some effort,</span> <span
  m='1126000'>let me just go ahead and modify this circuit directly.</span>
  </p><p><span m='1134000'>I get an R2 here, an R1 here, and then up here
  I</span> <span m='1142000'>get an R4, R3 here. The math is going to be just
  a</span> <span m='1149000'>little bit grubby but the result is actually pretty
  spectacular.</span> </p><p><span m='1154000'>So, all I have done is replace
  the op amp with its internal</span> <span m='1158000'>circuit out here. And
  now we are going to take a</span> <span m='1161000'>look at what happens to op
  amp dynamics when there is a small</span> <span m='1166000'>perturbation.
  Let's develop an equation of</span> <span m='1169000'>this circuit containing
  a capacitor using techniques that</span> <span m='1173000'>we already know.
  Just to give you some insight</span> <span m='1178000'>into what you're going
  to see, notice that if I make a small</span> <span m='1182000'>perturbation in
  the voltage across the capacitor,</span> <span m='1186000'>let's say I make a
  small perturbation to the capacitor</span> <span m='1190000'>voltage let's say
  by applying some initial condition kind of</span> <span m='1195000'>thing onto
  the capacitor. Then let's say that the output</span> <span m='1199000'>changes
  to some value K. So, the change on the capacitor</span> <span m='1203000'>must
  have been K divided by A. And what you are going to see</span> <span
  m='1207000'>is what happens to the op amp when the initial condition on</span>
  <span m='1211000'>the capacitor is such that this output gets perturbed to
  the</span> <span m='1214000'>value K. Let's write an equation for</span> <span
  m='1216000'>this little circuit and see what happens.</span> </p><p><span
  m='1219000'>Recall our goal was to understand what happens when I</span> <span
  m='1222000'>perturbed the output a little bit.</span> </p><p><span
  m='1224000'>Here I perturbed the output such that its value goes to K.</span>
  </p><p><span m='1229000'>And I can perturb the output by changing what happens
  at the</span> <span m='1233000'>capacitor. Let me write the equation
  for</span> <span m='1236000'>this circuit now and then to understand what
  happens to this</span> <span m='1241000'>capacitor circuit if I let go after
  giving it a small</span> <span m='1245000'>perturbation. What I am going to do
  is let me</span> <span m='1248000'>start by writing the good old equation for
  this little circuit</span> <span m='1253000'>here. And that equation is simply
  the</span> <span m='1256000'>voltage here v+ minus v- equals the voltage
  across the RC.</span> </p><p><span m='1262000'>So, v+ minus v- will be equal
  to the voltage drop across the</span> <span m='1268000'>resistor plus that
  across the capacitor.</span> </p><p><span m='1273000'>The voltage across the
  capacitor is v*.</span> </p><p><span m='1277000'>The voltage across the
  resistor is the current through the</span> <span m='1284000'>capacitor C
  dv*/dt times R. So, v* plus RC dv/dt is equal</span> <span m='1291000'>to v+
  minus v-. RC dv*/dt plus v* is v+ minus</span> <span m='1297000'>v-. You have
  done this millions of</span> <span m='1300000'>times before, but yet
  again.</span> </p><p><span m='1303000'>This voltage here is equal to the drop
  across these two,</span> <span m='1309000'>and the drop across these two is
  v*, the drop across C,</span> <span m='1314000'>plus the current through the
  capacitor C dv/dt times the</span> <span m='1320000'>resistance R. Or you can
  apply the node</span> <span m='1325000'>method as well and get the same
  expression.</span> </p><p><span m='1330000'>Now, we also know here that vO
  divided by A is v*.</span> </p><p><span m='1336000'>I can go ahead and replace
  this guy here, v* by vO divided by A.</span> </p><p><span m='1344000'>RC/A
  dvO/dt. Recall, I want the dynamics of</span> <span m='1349000'>vO so let me
  just get an expression in vO.</span> </p><p><span m='1355000'>So, I get vO
  divided by A plus v+ minus v- equals.</span> </p><p><span m='1363000'>Now, I
  want an expression in vO, an equation in vO,</span> <span m='1371000'>so I
  need to express v+ and v- in terms of vO.</span> </p><p><span m='1380000'>What
  are these expressions? The expression for v- is vO and</span> <span
  m='1389000'>this voltage divider, so it's vOR3/(R3+R4).</span> </p><p><span
  m='1396000'>And just for simplicity, let me call this some constant</span>
  <span m='1405000'>gamma minus. This is some fraction</span> <span
  m='1410000'>R3/(R3+R4). And let me call that fraction</span> <span
  m='1417000'>gamma minus. Similarly, v+ is vO R1/(R1+R2).</span> </p><p><span
  m='1422000'>And let me call that gamma plus.</span> </p><p><span
  m='1425000'>All I am doing is replacing v+ and v- in terms of vO.</span>
  </p><p><span m='1431000'>So, effectively, what I have here is v+ is
  some</span> <span m='1437000'>fraction of vO. That's the best intuitive
  way</span> <span m='1443000'>of thinking about it, some fraction of vO.</span>
  </p><p><span m='1449000'>And v- is some fraction of vO as well.</span>
  </p><p><span m='1454000'>And I just stick these. I now have an expression in
  vO.</span> </p><p><span m='1461000'>Don't get psyched by gamma plus and gamma
  minus.</span> </p><p><span m='1469000'>Simply read this as if it is an F1 and
  F2 if you would like.</span> </p><p><span m='1474000'>So, vO times some
  fraction minus vO times some other</span> <span m='1479000'>fraction. I am
  feeding back some fraction</span> <span m='1482000'>of the output to the
  positive and to the negative terminals.</span> </p><p><span m='1488000'>Then,
  just moving things around a little bit,</span> <span m='1492000'>dividing
  throughout by A divided by RC.</span> </p><p><span m='1495000'>So, I divided
  by A divided by RC.</span> </p><p><span m='1500000'>Plus vO divided by RC. And
  what I am going to do here</span> <span m='1508000'>in a second, vO gamma plus
  minus gamma minus.</span> </p><p><span m='1515000'>And I have multiplied by A
  divided by RC throughout.</span> </p><p><span m='1524000'>Finally, collecting
  all the vO terms I get vO times one divided</span> <span m='1534000'>by RC
  plus A divided by RC. I got a plus sign here so I</span> <span
  m='1542000'>will just reverse these two guys in there, gamma minus
  minus</span> <span m='1547000'>gamma plus equals zero. All I have done here is
  simply</span> <span m='1551000'>grunged through some math to express this
  equation in terms</span> <span m='1556000'>of vO. And just to make it
  even</span> <span m='1559000'>simpler, I will just replace this thing by one
  divided by T,</span> <span m='1564000'>much as we did for first order
  equations.</span> </p><p><span m='1569000'>What I end up with is
  dvO/dt+vO/T=0.</span> </p><p><span m='1589000'>Despite all the grubbiness, I
  end up with something that is</span> <span m='1593000'>very, very familiar to
  all of us.</span> </p><p><span m='1596000'>I went through a bunch of gyrations
  to substitute for v+,</span> <span m='1601000'>v- and v*, but at the end of
  the day I got the simple</span> <span m='1605000'>expression which was
  dvO/dt+vO/T=0.</span> </p><p><span m='1608000'>Where capital T is the time
  constant of the circuit,</span> <span m='1612000'>and the time constant of the
  circuit relates to the</span> <span m='1617000'>expression in there
  1/RC+A/RC(gamma minus - gamma</span> <span m='1621000'>plus). The gamma minus
  and gamma plus</span> <span m='1625000'>are the respective portions of the
  output fed back to the</span> <span m='1629000'>negative input and the
  positive input.</span> </p><p><span m='1632000'>Now, as we all know, based on
  very simple intuition</span> <span m='1635000'>that we can completely predict
  the behavior of a first order of</span> <span m='1640000'>an RC circuit once
  we know what the initial condition of the</span> <span m='1644000'>capacitor
  is and once you know the time constant.</span> </p><p><span m='1648000'>That's
  it. We know, we are masters at the</span> <span m='1652000'>fact that the
  capacitor is going to behave like this.</span> </p><p><span m='1656000'>It is
  going to be exponential. And I do know that the time</span> <span
  m='1660000'>constant capital T. What's here?</span> </p><p><span
  m='1662000'>It is simply the initial condition.</span> </p><p><span
  m='1665000'>There is no drive input. I am not driving this with any</span>
  <span m='1669000'>input here. There is no input drive</span> <span
  m='1672000'>anywhere here. This is simply the natural</span> <span
  m='1675000'>dynamics of the system. And, recall,</span> <span m='1678000'>I
  start off with bumping the capacitor voltage such that the</span> <span
  m='1683000'>output starts off being K. That is it.</span> </p><p><span
  m='1686000'>You should be able to write down this expression and the</span>
  <span m='1690000'>form of the response simply based on this.</span>
  </p><p><span m='1694000'>So, this is what I bumped up the output to be by
  perturbing</span> <span m='1698000'>the capacitor voltage. My output response
  based on</span> <span m='1702000'>this equation is going to look like
  that.</span> </p><p><span m='1705000'>Let's try to understand what that
  means.</span> </p><p><span m='1710000'>It is actually quite a lot of
  fun.</span> </p><p><span m='1712000'>How do we plot that response? You all
  learned that the way to</span> <span m='1717000'>plot the response is plot the
  initial value,</span> <span m='1720000'>plot the final value, and go
  cachoock,</span> <span m='1723000'>right? It's pretty simple.</span>
  </p><p><span m='1725000'>I am going to start at K. I know that.</span>
  </p><p><span m='1728000'>I am going to start at K and I am going to go and
  find out what</span> <span m='1733000'>the steady state value is. Here is
  where the interesting</span> <span m='1737000'>stuff comes in. The final value
  on the</span> <span m='1741000'>capacitor depends a lot on whether T is
  positive or</span> <span m='1746000'>negative. In my RC circuits that I
  looked</span> <span m='1749000'>at what was T? In the very simple RC
  circuit</span> <span m='1753000'>we looked at what was capital T? What was the
  time constant?</span> </p><p><span m='1758000'>RC. This was RC.</span>
  </p><p><span m='1759000'>This was a positive quantity. When capital T is
  positive my</span> <span m='1764000'>output is going to look like this.</span>
  </p><p><span m='1767000'>When T is positive. And T is positive when
  this</span> <span m='1773000'>expression is positive. And if A is so large
  that I can</span> <span m='1779000'>ignore the 1/RC term, if A is very,</span>
  <span m='1783000'>very large and I can ignore the left-hand term here then T
  is</span> <span m='1790000'>positive when gamma minus is greater than gamma
  plus.</span> </p><p><span m='1797000'>So, when gamma minus is greater than
  gamma plus,</span> <span m='1800000'>I have a stable circuit, this is the
  good-old stuff we</span> <span m='1804000'>have seen before. Now things begin
  to make sense.</span> </p><p><span m='1808000'>Intuitively, what am I saying
  here?</span> </p><p><span m='1811000'>All the gammas and other pieces of
  crapola aside,</span> <span m='1815000'>what am I really saying here in
  English?</span> </p><p><span m='1818000'>What I am saying here is that if the
  portion of the output fed</span> <span m='1822000'>to the negative input is
  greater than that fed to the positive</span> <span m='1827000'>input then I
  have net negative feedback.</span> </p><p><span m='1832000'>I have net
  negative feedback. I am feeding the output back to</span> <span
  m='1836000'>both the positive and negative inputs.</span> </p><p><span
  m='1839000'>And if my negative input has a stronger effect then I am
  going</span> <span m='1844000'>to see the op amp output decay down to a value
  that I expect</span> <span m='1849000'>which is going to be zero. Notice that
  since I am not</span> <span m='1854000'>applying any input here, I expect the
  stable point for</span> <span m='1858000'>this to be output going to zero. I
  don't have any input there.</span> </p><p><span m='1863000'>Let's take a look
  at another situation.</span> </p><p><span m='1866000'>What happens when the
  opposite is true?</span> </p><p><span m='1868000'>What happens when gamma
  minus is less than gamma plus?</span> </p><p><span m='1872000'>When I feedback
  more, what happens when I do this,</span> <span m='1875000'>when gamma plus is
  greater than gamma minus?</span> </p><p><span m='1878000'>The opposite is
  true. This means that I am feeding</span> <span m='1881000'>back more to the
  positive input. A bigger proportion goes to the</span> <span
  m='1885000'>positive than the negative. What happens then?</span> </p><p><span
  m='1890000'>Then what happens is capital T becomes negative.</span>
  </p><p><span m='1894000'>We cannot see this happening on the RC circuit
  because capital T</span> <span m='1899000'>is equal to RC, but here we have a
  more</span> <span m='1902000'>complicated circuit and capital T can go
  negative.</span> </p><p><span m='1907000'>If capital T goes negative then this
  whole thing in the exponent</span> <span m='1912000'>there goes positive. If
  that goes positive what</span> <span m='1916000'>should the output look like?
  It should take off into</span> <span m='1922000'>never-never land. There we
  go.</span> </p><p><span m='1925000'>I start off at zero and a make a small
  perturbation,</span> <span m='1931000'>and the output should go as t divided
  by capital T.</span> </p><p><span m='1937000'>The dynamics of this it goes
  berserk, so it is net positive</span> <span m='1943000'>feedback. This is
  called a stable</span> <span m='1947000'>situation. This is unstable.</span>
  </p><p><span m='1951000'>What happens when capital T goes to infinity?</span>
  </p><p><span m='1956000'>When capital T goes to infinity, spend five
  seconds</span> <span m='1961000'>thinking about what it means
  physically.</span> </p><p><span m='1965000'>What does it mean for the time
  constant of an RC circuit to go</span> <span m='1971000'>to infinity? That
  means that your R and C</span> <span m='1976000'>are very, very, very
  large.</span> </p><p><span m='1980000'>That means that circuit is going to be
  very,</span> <span m='1983000'>very sluggish. Think elephant.</span>
  </p><p><span m='1985000'>A big time constant. I want to move a leg.</span>
  </p><p><span m='1988000'>It takes a while to do that. Think big.</span>
  </p><p><span m='1991000'>Big time constant. So, everything is going to</span>
  <span m='1995000'>happen really slowly. It's like moving in molasses.</span>
  </p><p><span m='1998000'>Big time constant. Everything is going to
  happen</span> <span m='2002000'>really, really slowly. If gamma minus is
  greater than</span> <span m='2006000'>gamma plus with a huge time constant it
  is going to look</span> <span m='2010000'>like this. And the output is going
  to look</span> <span m='2015000'>like this. I make T even larger.</span>
  </p><p><span m='2018000'>All right. It is going to like this.</span>
  </p><p><span m='2027000'>I make these so large that T tends to zero,</span>
  <span m='2031000'>T tends to infinity in which case I get this
  situation.</span> </p><p><span m='2037000'>The output goes dah. OK?</span>
  </p><p><span m='2040000'>Very slow. Very lethargic.</span> </p><p><span
  m='2042000'>Big time constant. T tends to infinity.</span> </p><p><span
  m='2046000'>And so if this is stable, this is unstable,</span> <span
  m='2050000'>this is called corresponding neutral.</span> </p><p><span
  m='2053000'>And there is a mechanical analog to all of this.</span>
  </p><p><span m='2058000'>You can show that this situation is akin to let's say
  I</span> <span m='2063000'>had a physical well of the sort and I had a ball in
  there.</span> </p><p><span m='2070000'>I let the ball go. Then the ball will
  come down</span> <span m='2073000'>here and settle down in a stable
  state.</span> </p><p><span m='2076000'>Any small perturbation of the ball will
  get it to come down</span> <span m='2080000'>and settle down here. The
  unstable situation is this</span> <span m='2084000'>situation where I have a
  ball sitting up here where any small</span> <span m='2089000'>perturbation
  will get it to zip down to a positive rail or to a</span> <span
  m='2094000'>negative rail. So, this is an unstable</span> <span
  m='2097000'>equilibrium situation. And exactly the reason we got</span> <span
  m='2102000'>this analysis in the static situation is that this can</span>
  <span m='2106000'>happen. If I do this circuit here and</span> <span
  m='2108000'>don't perturb it then I could get the output sitting at
  zero,</span> <span m='2113000'>but the slightest perturbation, boom, it is
  going to fall down</span> <span m='2117000'>or go up. What about the
  neutral</span> <span m='2120000'>equilibrium state? That can be modeled like
  a</span> <span m='2123000'>table top and the ball is here. It doesn't matter
  where you go.</span> </p><p><span m='2127000'>There you are. How many people
  saw the</span> <span m='2132000'>Buckaroo Bonzi thing? Possibly well before
  your time.</span> </p><p><span m='2137000'>OK. I have this table here.</span>
  </p><p><span m='2139000'>No matter what I do to it, it just goes and settles
  down</span> <span m='2145000'>where it is, and that is neutral
  equilibrium.</span> </p><p><span m='2149000'>But what this gives you is a fun
  view of the dynamics of the</span> <span m='2155000'>operational amplifier as
  I make small perturbations to it.</span> </p><p><span m='2162000'>And the even
  more interesting thing here is you have the tools</span> <span
  m='2166000'>based on your first order RC analysis to analyze the
  dynamics</span> <span m='2171000'>of a simple op amp circuit. OK, so much for
  theory.</span> </p><p><span m='2175000'>Now let's get to some action
  here.</span> </p><p><span m='2178000'>All right. Fine.</span> </p><p><span
  m='2179000'>That is really pretty, good and so on,</span> <span
  m='2182000'>but what can you do for me? What good does this property do</span>
  <span m='2186000'>for me? What can I build?</span> </p><p><span
  m='2190000'>What we will do is look at the op amp circuit and focus on
  the</span> <span m='2194000'>situation where I have net positive
  feedback.</span> </p><p><span m='2197000'>In particular just look at this
  circuit with R1 and R2 and send</span> <span m='2202000'>both to infinity. So,
  I have no negative feedback</span> <span m='2206000'>and I ground this
  terminal here and take a look at what happens</span> <span m='2210000'>to a
  circuit with positive feedback and see if I can build</span> <span
  m='2215000'>some interesting circuits. What you are going to do is</span>
  <span m='2221000'>build on a circuit called the basic comparator.</span>
  </p><p><span m='2226000'>What is that? If I have an op amp that looks</span>
  <span m='2231000'>like this, and remember a VS rail and minus VS supply
  there,</span> <span m='2238000'>this is v+, this is v-, I can build a very
  basic</span> <span m='2243000'>comparator by doing the following.</span>
  </p><p><span m='2249000'>All the circuits I am going to show you are going to
  build on</span> <span m='2254000'>this basic little circuit. What I am going
  to do is</span> <span m='2259000'>consider applying an input to the v-
  terminal,</span> <span m='2263000'>applying some sort of an input and taking a
  look at how the</span> <span m='2268000'>output behaves. So, I apply some
  input vIN.</span> </p><p><span m='2272000'>And if I just do that, if this is
  v+ minus v- here</span> <span m='2277000'>then I am going to get something
  that goes like this.</span> </p><p><span m='2283000'>That is when this is
  positive here then this guy is going to</span> <span m='2289000'>go to the VS
  rail and this guy is going to go to the minus VS</span> <span
  m='2296000'>rail. In terms of the,</span> <span m='2299000'>if I plot the same
  thing, in terms of vIN,</span> <span m='2304000'>and this is vOUT, if I plot
  the thing in terms of</span> <span m='2309000'>vIN then notice that as vIN
  increases this guy should go to</span> <span m='2316000'>a negative rail. So,
  in terms of vIN it looks</span> <span m='2322000'>like this. What this says is
  that as the</span> <span m='2325000'>input becomes more and more positive
  applied to v- then the</span> <span m='2330000'>output goes to minus VS, and
  if the input becomes more</span> <span m='2335000'>and more negative then the
  output goes to VS.</span> </p><p><span m='2340000'>This is what is called a
  very basic comparator circuit.</span> </p><p><span m='2345000'>It compares the
  two inputs and goes up if the input is in one</span> <span
  m='2350000'>direction and goes to the other rail if the input is in the</span>
  <span m='2356000'>opposite direction. So supposing I feed this- I can</span>
  <span m='2361000'>plot this is a function of time. Let's say I plot
  vIN.</span> </p><p><span m='2366000'>Let's say I feed some vIN here. Let me
  just call this.</span> </p><p><span m='2372000'>I feed some vIN to this
  circuit here, then what do you expect</span> <span m='2377000'>the output to
  look like, the output wave form?</span> </p><p><span m='2381000'>For all
  positive vINs the output is negative.</span> </p><p><span m='2385000'>So, my
  output vO is going to be negative as long as vIN is</span> <span
  m='2390000'>positive. And when vIN becomes negative</span> <span
  m='2394000'>this one shoots up and behaves like this.</span> </p><p><span
  m='2399000'>This is minus VS. That is plus VS.</span> </p><p><span
  m='2402000'>This is my input vIN. Then this guy is going to be my</span> <span
  m='2407000'>output. As vIN is positive output slams</span> <span
  m='2411000'>to the negative rail. When vIN becomes negative the</span> <span
  m='2415000'>output slams to the positive rail.</span> </p><p><span
  m='2419000'>So, that is quite nice. And so such a circuit is pretty</span>
  <span m='2424000'>useful to me. Let's say, for example,</span> <span
  m='2428000'>I want to build a little digital circuit that is fed ones</span>
  <span m='2432000'>and zeros. I can use a comparator to turn</span> <span
  m='2434000'>my vIN voltage into a sequence of ones and zeros.</span>
  </p><p><span m='2437000'>When vIN is positive I produce a zero and when vIN is
  negative</span> <span m='2441000'>I produce a one. I can get this one,</span>
  <span m='2444000'>zero, one, zero sequence coming out corresponding to the
  values</span> <span m='2448000'>of vIN being greater or less than zero.</span>
  </p><p><span m='2450000'>Now, one problem with something like this is that
  this circuit</span> <span m='2454000'>can be quite messy in the following
  situation.</span> </p><p><span m='2459000'>Suppose I superimpose a small
  amount of noise in vIN.</span> </p><p><span m='2464000'>In particular, let's
  say that I have some</span> <span m='2468000'>amount of noise on vIN. I get a
  bunch of noise sitting</span> <span m='2473000'>around here. What happens is
  that at this</span> <span m='2477000'>point where the value goes negative, I
  do bump up.</span> </p><p><span m='2482000'>But when for a second I have my
  input going above zero again --</span> <span m='2490000'>-- this output comes
  down again and out here it goes up again.</span> </p><p><span m='2494000'>I
  get this nasty behavior at the point where the input is</span> <span
  m='2499000'>around zero. When the input is around zero,</span> <span
  m='2502000'>the input is meandering around zero because of noise,</span> <span
  m='2506000'>I get a huge amount of up and down glitches on the output.</span>
  </p><p><span m='2511000'>That's not very nice. And we will do a little
  circuit</span> <span m='2515000'>that attempts to fix that little
  problem.</span> </p><p><span m='2520000'>What we are going to do is use
  positive feedback.</span> </p><p><span m='2524000'>And I am going to build you
  a circuit that shows that we can</span> <span m='2531000'>eliminate this for
  small noise on the input.</span> </p><p><span m='2535000'>So, let's build the
  following circuit.</span> </p><p><span m='2539000'>So I still feed vi to the
  negative input,</span> <span m='2543000'>but this time around I give it some
  positive feedback.</span> </p><p><span m='2550000'>So, I give it some positive
  feedback.</span> </p><p><span m='2553000'>And what I am going to do is
  feedback a portion of vO to the</span> <span m='2558000'>positive input. This
  is positive feedback.</span> </p><p><span m='2562000'>And, in particular,
  let's assume that VS equals 12</span> <span m='2567000'>volts. And to the
  negative one I</span> <span m='2570000'>connect -VS. This guy is going to go
  between</span> <span m='2574000'>12 and -12. And correspondingly
  because</span> <span m='2577000'>these two are equal this one is going to go
  between 6 and -6.</span> </p><p><span m='2585000'>This is going to be a 12 or
  -12.</span> </p><p><span m='2588000'>Remember, the top rail and the bottom
  rail.</span> </p><p><span m='2592000'>And this one is going to be a +6 or
  -6.</span> </p><p><span m='2596000'>And let's understand how this circuit
  works when I apply an</span> <span m='2601000'>input vIN. Let's start by
  saying that</span> <span m='2605000'>assume my input is zero for a
  moment.</span> </p><p><span m='2610000'>And let's say my output starts off
  being 12 volts.</span> </p><p><span m='2615000'>The output is 12 volts then
  the input here is going to be 6</span> <span m='2620000'>volts. In this case
  v+ is going to be</span> <span m='2624000'>6 volts. The output is 12,</span>
  <span m='2627000'>v+ is going to be 6 volts. And my circuit is sitting
  out</span> <span m='2632000'>there doing nothing. Now, this started off
  being</span> <span m='2637000'>zero. Let's say vIN increases.</span>
  </p><p><span m='2642000'>As vIN begins to increase what happens?</span>
  </p><p><span m='2645000'>Well, nothing until vIN reaches 6 volts.</span>
  </p><p><span m='2648000'>Since this is 6, vIN has to go up to 6 volts,</span>
  <span m='2651000'>has to equal this voltage before I can flip the
  circuit.</span> </p><p><span m='2656000'>What happens when vIN is greater than
  6 volts,</span> <span m='2659000'>if vIN goes above 6 then I have more voltage
  on a negative</span> <span m='2664000'>terminal than the positive so the op
  amp flips its state.</span> </p><p><span m='2670000'>And vO gets to -12 volts.
  When vi goes above 6,</span> <span m='2676000'>vO gets to 12 volts. And what
  does v+ go to?</span> </p><p><span m='2682000'>In this state v+ goes to half
  of -12 which is -6 volts.</span> </p><p><span m='2690000'>Now, this guy is
  sitting at -6 and this guy is sitting at -12.</span> </p><p><span
  m='2700000'>If this one keeps rising nothing happens,</span> <span
  m='2703000'>so output can stay at -12. So I am pretty safe.</span>
  </p><p><span m='2707000'>Then let's say v begins to come down.</span>
  </p><p><span m='2710000'>As v begins to come down, does anything happen when
  v</span> <span m='2715000'>gets to 6 again? If v is equal to 6 what</span>
  <span m='2719000'>happens? Nothing because this is at -6</span> <span
  m='2722000'>now. So, there is still a huge net</span> <span
  m='2725000'>negative voltage here from v+ to v-.</span> </p><p><span
  m='2730000'>And so therefore I sit at -12. Oh, well, I keep coming down</span>
  <span m='2736000'>until I reach -6. When I reach -6 here these two</span>
  <span m='2742000'>become equal. And what happens when this</span> <span
  m='2746000'>becomes less than -6? v- becomes less than -6.</span> </p><p><span
  m='2751000'>If this one goes below this voltage, this is -6 and this is</span>
  <span m='2758000'>-7. There is a net positive voltage</span> <span
  m='2762000'>between v+ and v-, so this output swings to the</span> <span
  m='2766000'>positive rail like so. We will spend a lot more time</span> <span
  m='2770000'>on this in the next few minutes to really hammer the point
  home.</span> </p><p><span m='2775000'>What is interesting about this is that
  even though the moment</span> <span m='2779000'>vi became more than 6, I swung
  to the positive rail,</span> <span m='2784000'>and then I had to go all the
  way back down to -6 before I</span> <span m='2788000'>could change state. I
  had to go way down before it</span> <span m='2794000'>could flip again. How
  can we make use of that?</span> </p><p><span m='2799000'>Well, let me draw you
  a little vi versus vO diagram and then</span> <span m='2806000'>talk about how
  that can be useful to us.</span> </p><p><span m='2810000'>This is vi, this is
  vO, this is zero.</span> </p><p><span m='2815000'>Let's say this is 12, -12,
  -6, +6.</span> </p><p><span m='2820000'>Let's plot that on the screen and see
  what it looks like.</span> </p><p><span m='2824000'>As I told you, the output
  was at 12 volts to</span> <span m='2828000'>begin with and my input was at
  zero.</span> </p><p><span m='2831000'>So, my input kept increasing. When the
  input hit +6 what</span> <span m='2835000'>happened to my output? My output
  swung down to -12.</span> </p><p><span m='2840000'>As the input kept
  increasing nothing happened.</span> </p><p><span m='2843000'>This was step
  one, this was step two,</span> <span m='2846000'>step three. My input kept
  increasing and</span> <span m='2851000'>output stayed at -12 volts. Then what
  I said was well,</span> <span m='2856000'>let's bring the input down. So, my
  input began to go down,</span> <span m='2861000'>step four, became more and
  more negative.</span> </p><p><span m='2864000'>Nothing happened until I
  reached -6.</span> </p><p><span m='2867000'>When I reached -6 I swung
  positive, step five.</span> </p><p><span m='2871000'>Again, one, two, three,
  four,</span> <span m='2874000'>five. I am going up here.</span> </p><p><span
  m='2876000'>It came up here. And nothing happens until I</span> <span
  m='2881000'>reach -6, but at -6 boom, I switch to the positive rail.</span>
  </p><p><span m='2886000'>And as I get more and more negative I stay
  there.</span> </p><p><span m='2890000'>Then again, as I start increasing
  again,</span> <span m='2893000'>nothing happens until I reach +6.</span>
  </p><p><span m='2896000'>Think of that as your seventh step.</span>
  </p><p><span m='2899000'>What is spectacular about this is that I seem to have
  a circuit</span> <span m='2904000'>that now has some knowledge of where it
  came.</span> </p><p><span m='2910000'>If it is coming from here it switches at
  +6,</span> <span m='2913000'>but if it is coming from here it switches at
  -6.</span> </p><p><span m='2917000'>So, there seems to be sort of a lag in the
  behavior of the</span> <span m='2922000'>circuit or some memory property in
  the circuit.</span> </p><p><span m='2926000'>This kind of behavior is called
  hysteresis.</span> </p><p><span m='2930000'>The word comes from magnetic
  circuits where,</span> <span m='2934000'>or rather elements that you're trying
  to magnetize.</span> </p><p><span m='2940000'>Where if you take a magnet and
  move it over a piece of metal it</span> <span m='2944000'>may leave some
  residual magnetism in it.</span> </p><p><span m='2947000'>And, in the same
  way, that is called hysteresis.</span> </p><p><span m='2951000'>Same way here.
  As the voltage increases it</span> <span m='2954000'>seems to leave some
  residual in the circuit so that it effects</span> <span m='2959000'>when it
  shifts. The good news with this is that</span> <span m='2962000'>now, if I
  take the same kind of noisy wave form that I had</span> <span
  m='2967000'>before and do this -- If this is vi then what is</span> <span
  m='2972000'>going to happen is for vO I am going to be negative at this</span>
  <span m='2978000'>point. Nothing happens here because I</span> <span
  m='2982000'>have to get to -6 or +6 before something happens.</span>
  </p><p><span m='2987000'>Out here I get to -6 and I switch state and go up to
  +12.</span> </p><p><span m='2992000'>And then this one comes up above -6 very
  slightly out</span> <span m='2998000'>there. Nothing happens because
  the</span> <span m='3001000'>next change will happen only when the input goes
  to +6.</span> </p><p><span m='3005000'>So, if eventually the input gets to +6
  and then I am going</span> <span m='3009000'>to change state again. It is
  actually a really cool</span> <span m='3013000'>property and something that is
  completely non-obvious.</span> </p><p><span m='3017000'>In the last 30 seconds
  let me show you a quick demo.</span> </p><p><span m='3020000'>And, based on
  this property of hysteresis, I have actually</span> <span m='3024000'>built a
  little circuit. Let me do that first.</span> </p><p><span m='3029000'>Notice
  here that I am showing you the input on the X axis vi</span> <span
  m='3034000'>and vO on the Y axis. Notice how the output switches</span> <span
  m='3038000'>at +6 volts and switches at a -6 volts to +12 or -12.</span>
  </p><p><span m='3043000'>That's the hysteresis property. And we can actually
  use this</span> <span m='3048000'>property to build a clock circuit, which is
  on page 9,</span> <span m='3053000'>build an oscillator that sits there and
  oscillates by itself.</span> </p><p><span m='3060000'>And you will see details
  of that in recitation tomorrow.</span> </p>
uid: 786a3d1334f20386c4379b2e866b3691
type: course
layout: video
---
