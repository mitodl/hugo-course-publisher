---
title: 'Lecture 3: Reasoning: Goal Trees and Rule-Based Expert Systems'
uid: b3069ee1368e4581c1c932e57363d93e
parent_uid: 28d36d6426366698bf1ded18c6190be7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-3-reasoning-goal-trees-and-rule-based-expert-systems
short_url: lecture-3-reasoning-goal-trees-and-rule-based-expert-systems
inline_embed_id: '5490029lecture3:reasoning:goaltreesandrule-basedexpertsystems36135040'
about_this_resource_text: >-
  <p><strong>Description:</strong> We consider a block-stacking program, which
  can answer questions about its own behavior, and then identify an animal given
  a list of its characteristics.  Finally, we discuss how to extract knowledge
  from an expert, using the example of bagging groceries.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
related_resources_text: >-
  <p>Duarte, José Pinto. &quot;<a
  href="http://dspace.mit.edu/handle/1721.1/8189" target="_blank">Customizing
  Mass Housing: A Discursive Grammar for Siza's Malagueira Houses</a>.&quot; PhD
  thesis, MIT, 2001.</p>
transcript: >-
  <p><span m='9330'>PROFESSOR PATRICK WINSTON: Ladies and gentlemen, the</span>
  <span m='10970'>engineers drinking song.</span> </p><p><span m='13670'>Back in
  the day, I've drunk quite a lot to that song.</span> </p><p><span
  m='16309'>And as drinking songs go, it's not bad.</span> </p><p><span
  m='20420'>I caution you, however, before playing this song in the</span> <span
  m='24260'>presence of small children, audition it first.</span> </p><p><span
  m='28240'>Some of the verses are sufficiently gross as to make</span> <span
  m='32460'>a sailor go beyond blushing.</span> </p><p><span m='37130'>It's an
  interesting song because there are an infinite</span> <span m='39380'>number
  of verses.</span> </p><p><span m='41580'>Here's the mathematical proof.</span>
  </p><p><span m='43840'>Suppose there were a finite number of verses.</span>
  </p><p><span m='46920'>Then there would be a last verse.</span> </p><p><span
  m='49080'>And if there were a last verse, then some drunk alumni</span> <span
  m='52540'>would compose a new one.</span> </p><p><span m='54570'>Therefore,
  there is no last verse, the size is not finite,</span> <span m='58400'>and
  there are an infinite number of verses.</span> </p><p><span m='62430'>I play
  it for you today because I'm an engineer.</span> </p><p><span m='65610'>I like
  to build stuff.</span> </p><p><span m='67336'>I build stuff out of
  wood.</span> </p><p><span m='69010'>I build stuff out of metal.</span>
  </p><p><span m='70810'>I build stuff out of rocks.</span> </p><p><span
  m='72830'>And I especially like to write programs.</span> </p><p><span
  m='76470'>I don't know, sometimes people come to me and say, I'm</span> <span
  m='80180'>majoring in computer science, but I don't</span> <span
  m='81960'>like to write programs.</span> </p><p><span m='83030'>I've always
  been mystified by that.</span> </p><p><span m='86470'>I mean, if you want to
  show how tough you are, you can go</span> <span m='89900'>bungee jumping or
  drive a nail through your hand or something</span> <span m='92430'>like that
  instead.</span> </p><p><span m='95850'>But I've written quite a few programs
  for demonstrating</span> <span m='98750'>stuff in this subject.</span>
  </p><p><span m='102650'>They're all written in Java, principally because I
  can</span> <span m='106520'>therefore make them available to you and to the
  rest of the</span> <span m='108660'>world by way of Web Start.</span>
  </p><p><span m='110785'>A few weeks ago, I was mucking around with the system
  and</span> <span m='115050'>broke the version on the server, and within 15
  minutes,</span> <span m='117490'>I got an email from somebody in the depths of
  Anatolia</span> <span m='121490'>complaining about it and asking me to bring
  it back up.</span> </p><p><span m='127500'>This particular program is
  patterned</span> <span m='129699'>after an early AI classic.</span>
  </p><p><span m='134830'>And it was the business end of a program written by
  Terry</span> <span m='139130'>Winograd, who became, and is, a professor of
  computer</span> <span m='144290'>science at Stanford University--</span> <span
  m='147220'>which is on the west coast for those of you--</span> <span
  m='151990'>on the strength of his work on the natural language front
  end</span> <span m='155510'>of this program.</span> </p><p><span
  m='157100'>But the natural language part is not what makes it of</span> <span
  m='160260'>interest for us today.</span> </p><p><span m='164079'>It's more the
  other kinds of stuff.</span> </p><p><span m='168440'>Let's pile these things
  up.</span> </p><p><span m='171550'>Now, I'm going to ask to do something,
  maybe put</span> <span m='175320'>B2 on top of B7.</span> </p><p><span
  m='187140'>Not bad.</span> </p><p><span m='187840'>How about B6 on B3?</span>
  </p><p><span m='198500'>This program's kind of clever.</span> </p><p><span
  m='205140'>Let me do one more.</span> </p><p><span m='206579'>Let's put B7 on
  B2.</span> </p><p><span m='219250'>OK, now let's see.</span> </p><p><span
  m='220510'>Maybe B5 on B2?</span> </p><p><span m='226170'>B4 on B3 first,
  maybe?</span> </p><p><span m='232820'>Oh, I must have clicked the wrong
  button.</span> </p><p><span m='235885'>Oh, there it goes.</span> </p><p><span
  m='236675'>OK.</span> </p><p><span m='238780'>Let's put B4 on B1.</span>
  </p><p><span m='242716'>Agh, my mouse keeps getting out of control.</span>
  </p><p><span m='255660'>Now, let's put B1 on B2.</span> </p><p><span
  m='257519'>This is an example I'm actually going to</span> <span
  m='258779'>work out on the board.</span> </p><p><span m='263646'>Oh, I
  see.</span> </p><p><span m='265740'>My touch pad accidentally got
  activated.</span> </p><p><span m='267750'>B1 on B2.</span> </p><p><span
  m='284550'>Now, let's ask a question.</span> </p><p><span
  m='298075'>OK.</span> </p><p><span m='299560'>Well.</span> </p><p><span
  m='300190'>SPEAKER 2: [SINGING]</span> <span m='301636'>PROFESSOR PATRICK
  WINSTON: Stop.</span> </p><p><span m='303564'>SPEAKER 3: [LAUGHTER]</span>
  <span m='307420'>PROFESSOR PATRICK WINSTON: Had enough of that.</span>
  </p><p><span m='311760'>Let's see.</span> </p><p><span m='312550'>Why did you
  put--</span> <span m='315460'>why did you want to get rid of B4?</span>
  </p><p><span m='322720'>OK, one--</span> <span m='324660'>SPEAKER 2:
  [SINGING]</span> <span m='328540'>PROFESSOR PATRICK WINSTON: Maybe they think,
  that's what</span> <span m='334010'>happens when you use software you write
  yourself.</span> </p><p><span m='342010'>Why did you want to clear the top of
  B2?</span> </p><p><span m='351662'>Did I do that?</span> </p><p><span
  m='355050'>Why did you clear the top of B1?</span> </p><p><span
  m='361050'>OK.</span> </p><p><span m='361520'>SPEAKER 2: [SINGING]</span>
  <span m='363400'>SPEAKER 3: [LAUGHTER]</span> <span m='366700'>PROFESSOR
  PATRICK WINSTON: Oh, it's haunting me.</span> </p><p><span
  m='368460'>Yeah.</span> </p><p><span m='369290'>So the drinking song is easily
  offended, I guess.</span> </p><p><span m='389160'>But I won't develop that
  scenario again.</span> </p><p><span m='391310'>What I want to show you is that
  this program looks like</span> <span m='395260'>it's kind of smart, and it
  somehow can answer questions</span> <span m='399430'>about its own
  behavior.</span> </p><p><span m='400230'>Have you ever written a program
  that's answered</span> <span m='401800'>questions about its own
  behavior?</span> </p><p><span m='404020'>Probably not.</span> </p><p><span
  m='404620'>Would you like to learn how to do that?</span> </p><p><span
  m='406322'>OK.</span> </p><p><span m='407680'>So by the end of the hour,
  you'll be able to write this</span> <span m='409470'>program and many more
  like it that know how to answer</span> <span m='413400'>questions about their
  own behavior.</span> </p><p><span m='415040'>There have been tens of thousands
  of such programs</span> <span m='417020'>written, but only by people who know
  the stuff I'm going</span> <span m='420175'>to tell you about right now,
  OK?</span> </p><p><span m='423080'>So what I want to do is I want to start by
  taking this</span> <span m='425240'>program apart on the board and talking to
  you about the</span> <span m='428500'>modules, the subroutines that it
  contains.</span> </p><p><span m='432670'>So here it is.</span> </p><p><span
  m='437440'>The first thing we need to think about,</span> <span
  m='440280'>here are some blocks.</span> </p><p><span m='443600'>What has to
  happen if I'm going to put the bottom block</span> <span m='447500'>on the
  larger block?</span> </p><p><span m='449570'>Well, first of all, I have to
  find space for it.</span> </p><p><span m='452680'>Then I have to grasp the
  lower block.</span> </p><p><span m='455340'>And I have to move it and I have
  to ungrasp it.</span> </p><p><span m='458380'>So those are four things I need
  to do in order to achieve</span> <span m='462620'>what I want to do.</span>
  </p><p><span m='464140'>So therefore, I know that the put-on method has four
  pieces.</span> </p><p><span m='472450'>It has to find space on the target
  block.</span> </p><p><span m='477480'>It has to grasp the block that it's been
  commanded to move.</span> </p><p><span m='485500'>Then it has to move, and
  then it has to ungrasp.</span> </p><p><span m='495720'>But taking hints from
  some of the questions that it did</span> <span m='498680'>answer before I got
  haunted by the music, taking our cue from</span> <span m='503350'>that, we
  know that in order to grasp something, in this</span> <span
  m='506850'>particular world, you can't have anything on top of it.</span>
  </p><p><span m='510150'>So grasp, therefore, may call clear top in order to
  get</span> <span m='516929'>stuff off from the target object.</span>
  </p><p><span m='521710'>And that may happen in an iterative loop because
  there</span> <span m='525020'>may be several things on top.</span>
  </p><p><span m='527450'>And how do you get rid of stuff?</span> </p><p><span
  m='529120'>Well, by calling get rid of.</span> </p><p><span m='534810'>And
  that may go around a loop several times.</span> </p><p><span m='537660'>And
  then, the way you get rid of stuff is by calling put-on.</span> </p><p><span
  m='544210'>So that gives us recursion, and it's from the recursion</span>
  <span m='546780'>that we get a lot of the apparent complexity of the</span>
  <span m='549110'>program's behavior when it solves a problem.</span>
  </p><p><span m='553920'>Now, in order to find space, you also have to</span>
  <span m='556830'>call get rid of.</span> </p><p><span m='559070'>So that's
  where I meant to put this other iterative</span> <span m='560820'>loop, not
  down here.</span> </p><p><span m='562270'>Cleat top has got the iterative loop
  inside of it.</span> </p><p><span m='565400'>So that's the structure of the
  program.</span> </p><p><span m='566930'>It's extremely simple.</span>
  </p><p><span m='569610'>And you might say to me, well, how can you get
  such</span> <span m='571810'>apparently complex-looking behavior out of</span>
  <span m='574140'>such a simple program?</span> </p><p><span m='575065'>A
  legitimate question.</span> </p><p><span m='576665'>But before we tackle that
  one head on, I'd like to do a</span> <span m='581090'>simulation of this
  program with a very</span> <span m='582870'>simple blocks problem.</span>
  </p><p><span m='588790'>And it's the one I almost showed you, but</span> <span
  m='591380'>it goes like this.</span> </p><p><span m='593180'>Here's B1.</span>
  </p><p><span m='594786'>We'll call this BX because I forgot its name.</span>
  </p><p><span m='598920'>Here's BY.</span> </p><p><span m='601250'>And here's
  B2.</span> </p><p><span m='603380'>And the task is to put B1 on B2.</span>
  </p><p><span m='612080'>And according to our system diagram, that results in
  four</span> <span m='617090'>calls to subroutines.</span> </p><p><span
  m='619410'>We have to find space.</span> </p><p><span m='625750'>We have to
  grasp B1.</span> </p><p><span m='634270'>We have to move, and then we
  ungrasp.</span> </p><p><span m='644120'>Now, the way we grasp something is the
  first thing</span> <span m='646260'>we have to do is clear off its top.</span>
  </p><p><span m='663250'>So grasp calls clear top.</span> </p><p><span
  m='668760'>And clear top in turn calls get rid of.</span> </p><p><span
  m='678080'>And let me see.</span> </p><p><span m='678620'>Let me keep track of
  these.</span> </p><p><span m='679650'>This is clearing the top of B1, and this
  is</span> <span m='683630'>getting rid of BX.</span> </p><p><span
  m='686230'>And the way we get rid of BX is by putting BX on the table.</span>
  </p><p><span m='698710'>And then that in turn causes calls to another find
  space,</span> <span m='704800'>another grasp, another move, and another
  ungrasp.</span> </p><p><span m='708314'>So that's a little trace of the
  program as it works on</span> <span m='711410'>this simple problem.</span>
  </p><p><span m='713960'>So how does it go about answering the questions that
  I</span> <span m='716440'>demonstrated to you a moment ago?</span>
  </p><p><span m='719660'>Let's do that by using this trace.</span> </p><p><span
  m='723340'>So how, for example, does it answer the question, why did</span>
  <span m='729810'>you get rid of BX?</span> </p><p><span
  m='737980'>[INAUDIBLE], what do you think?</span> </p><p><span m='739520'>How
  can it answer that question?</span> </p><p><span m='741343'>SPEAKER 4:
  [INAUDIBLE]</span> <span m='746280'>PROFESSOR PATRICK WINSTON: So it goes up
  one level and</span> <span m='749480'>reports what it sees.</span>
  </p><p><span m='751590'>So it says, and said in the demonstration, I got rid
  of BX</span> <span m='756800'>because I was trying to clear the top of
  B1.</span> </p><p><span m='760660'>So if I were to say why did you clear the
  top of B1, it</span> <span m='764325'>would say because I was trying to grasp
  it.</span> </p><p><span m='767015'>If I were to say, why did you grasp B1, it
  would say because</span> <span m='769840'>I was putting B1 on B2.</span>
  </p><p><span m='771990'>If I say, why did you put B1 on B2, it would
  say,</span> <span m='776120'>slavishly, because you told me to.</span>
  </p><p><span m='779910'>OK, so that's how it deals with why questions.</span>
  </p><p><span m='783770'>How about how questions?</span> </p><p><span
  m='789410'>Timothy, what do you think about that one?</span> </p><p><span
  m='791680'>How would it go about answering a question about how</span> <span
  m='793400'>you did something?</span> </p><p><span m='797210'>Do you have a
  thought?</span> </p><p><span m='798400'>TIMOTHY: Um, yeah, it would think
  about what I was trying</span> <span m='801428'>to accomplish.</span>
  </p><p><span m='801750'>PROFESSOR PATRICK WINSTON: Yeah, but</span> <span
  m='801820'>how would it do that?</span> </p><p><span m='802710'>How would the
  program do that?</span> </p><p><span m='804550'>We know that answering a why
  question makes</span> <span m='806150'>it go up one level.</span> </p><p><span
  m='808710'>How does it answer a how question?</span> </p><p><span
  m='810660'>Sebastian?</span> </p><p><span m='811800'>SEBASTIAN: It goes down
  one level.</span> </p><p><span m='812560'>PROFESSOR PATRICK WINSTON: You go
  down one level.</span> </p><p><span m='814420'>So you start off all the way up
  here with a put-on.</span> </p><p><span m='820210'>You will say, oh, well I
  did these four things.</span> </p><p><span m='822360'>You say, why did you
  grasp B1?</span> </p><p><span m='823890'>It will say because I was trying to
  clear its top.</span> </p><p><span m='826170'>Why did you clear its
  top?</span> </p><p><span m='826960'>Because I was trying to get rid of
  it.</span> </p><p><span m='828930'>Why were you trying to get rid of
  it?</span> </p><p><span m='830080'>Because I was trying to put it on the
  table.</span> </p><p><span m='832890'>So that's how it answers how questions,
  by going down in</span> <span m='836570'>this tree and this trace of the
  program of action so as to</span> <span m='842280'>see how things are put
  together.</span> </p><p><span m='845100'>What are these things that are being
  put together?</span> </p><p><span m='847940'>What's the word I've been
  avoiding so as to bring this</span> <span m='850460'>to a crescendo?</span>
  </p><p><span m='853360'>What are these objectives, these things it wants to
  do?</span> </p><p><span m='857310'>They're goals.</span> </p><p><span
  m='859530'>So this thing is leaving a trace, which is a goal tree.</span>
  </p><p><span m='865780'>Does that sound familiar?</span> </p><p><span
  m='869260'>Three days ago, we talked about goal trees in connection</span>
  <span m='871400'>with integration.</span> </p><p><span m='873820'>So this
  thing is building a goal tree, also known as an</span> <span m='876440'>and-or
  tree.</span> </p><p><span m='878320'>So this must be an and tree.</span>
  </p><p><span m='880940'>And if this is an and tree, are there any and
  nodes?</span> </p><p><span m='884300'>Sure, there's one right there.</span>
  </p><p><span m='888860'>So do you think then that you can answer questions
  about</span> <span m='893030'>your own behavior as long as you build an and-or
  tree?</span> </p><p><span m='896740'>Sure.</span> </p><p><span m='898232'>Does
  this mean that the integration program could</span> <span m='900880'>answer
  questions about its own behavior?</span> </p><p><span m='904110'>Sure.</span>
  </p><p><span m='905990'>Because they both build goal trees, and wherever you
  got a</span> <span m='908140'>goal tree, you can answer certain kinds of
  questions</span> <span m='910270'>about your own behavior.</span> </p><p><span
  m='915290'>So let me see if in fact it really does build itself a</span> <span
  m='922910'>goal tree as it solves problems.</span> </p><p><span m='925660'>So
  this time, we'll put B6 on B3 this time.</span> </p><p><span m='935400'>But
  watch it develop its goal tree.</span> </p><p><span m='942490'>So in contrast
  to the simple example I was working on the</span> <span m='944950'>board, this
  gets to be a pretty complicated goal tree.</span> </p><p><span m='949726'>But
  I could still answers questions about behavior.</span> </p><p><span
  m='952550'>For example, I could say, why did you put B6 on B3?</span>
  </p><p><span m='962440'>Because you told me to.</span> </p><p><span
  m='964790'>All right, so the complexity of the behavior is largely a</span>
  <span m='968090'>consequence not of the complexity of the program in</span>
  <span m='970780'>this particular case, but the building of this giant
  goal</span> <span m='973230'>tree as a consequence of the complexity of the
  problem.</span> </p><p><span m='977880'>This brings us to one of our previous
  matters--</span> <span m='980400'>early on to one of the gold star ideas of
  today.</span> </p><p><span m='984130'>And this gold star idea goes back to a
  lecture given in the</span> <span m='989080'>late '60s by Herb Simon, who was
  the first Nobel Laureate</span> <span m='992470'>in the pseudo Nobel Prize for
  economics.</span> </p><p><span m='996030'>Is that right, Bob?</span>
  </p><p><span m='996690'>Was he the first?</span> </p><p><span m='997390'>All
  right, he was the first winner of the Nobel Prize,</span> <span
  m='999810'>pseudo Nobel Prize in economics.</span> </p><p><span
  m='1002800'>And in this lecture, which was titled "The Sciences of the</span>
  <span m='1005170'>Artificial," he said imagine that you're looking on a
  beach</span> <span m='1010500'>at the path of a ant.</span> </p><p><span
  m='1013705'>And he said, well, you know, the path of the ant looks</span>
  <span m='1016580'>extremely complicated.</span> </p><p><span m='1018070'>And
  you're tempted to think the ant is some kind of genius</span> <span
  m='1022640'>or monster brain ant.</span> </p><p><span m='1025670'>But in fact,
  when you take a closer look, what you discover</span> <span m='1030780'>is
  that there are a bunch of pebbles on the beach, and all</span> <span
  m='1034490'>the ant is doing is avoiding those pebbles on his way home.</span>
  </p><p><span m='1039608'>So the complexity of the behavior, said Simon, is
  a</span> <span m='1043450'>consequence of the complexity of the environment,
  not the</span> <span m='1045900'>complexity of the program.</span>
  </p><p><span m='1047900'>So that's the metaphoric Simon's ant.</span>
  </p><p><span m='1050620'>And what it says is that the complexity of the
  behavior is</span> <span m='1059910'>the max of the complexity of the program
  and the complexity</span> <span m='1070270'>of the environment.</span>
  </p><p><span m='1078720'>So that's something we'll see many times during the
  rest of</span> <span m='1081960'>the semester.</span> </p><p><span
  m='1082830'>Complex behavior, simple program.</span> </p><p><span
  m='1085000'>You think it's going to be complicated.</span> </p><p><span
  m='1086105'>It turns out to be simple because the problem has the</span> <span
  m='1089130'>complexity, not the program.</span> </p><p><span m='1094350'>So
  that brings us to check box three in today's talk, and</span> <span
  m='1097350'>there's a little bit of a scene here because now I want</span>
  <span m='1099520'>to stop talking about goal-centered programming and</span>
  <span m='1104140'>start talking about rule-based expert systems.</span>
  </p><p><span m='1108840'>The rule-based expert systems were developed in a
  burst of</span> <span m='1115190'>enthusiasm about the prospects for
  commercial applications of</span> <span m='1118870'>artificial intelligence in
  the mid-1980s.</span> </p><p><span m='1125530'>At that time, it was supposed
  lengthy articles are written,</span> <span m='1130010'>but you could account
  for useful aspects of human</span> <span m='1132620'>intelligence by writing
  all the knowledge in the form of</span> <span m='1135980'>simple rules.</span>
  </p><p><span m='1137870'>So if this is true, then that's true.</span>
  </p><p><span m='1142700'>If you want to achieve this, then do that.</span>
  </p><p><span m='1147070'>But all the knowledge had to be encapsulated in the
  form of</span> <span m='1149690'>simple rules.</span> </p><p><span
  m='1152440'>So what might you want to do with this?</span> </p><p><span
  m='1153780'>All sorts of things.</span> </p><p><span m='1155110'>Thousands of
  these systems were written,</span> <span m='1156510'>as I indicated
  before.</span> </p><p><span m='1158760'>But here's an example.</span>
  </p><p><span m='1159890'>I'm going to work out an example having to do
  with</span> <span m='1161790'>identification.</span> </p><p><span
  m='1163870'>And this example is patterned off of a classic program,</span>
  <span m='1168980'>strangely also written at Stanford, called MYCIN.</span>
  </p><p><span m='1171885'>It was developed to diagnose bacterial</span> <span
  m='1174210'>infections in the blood.</span> </p><p><span m='1176470'>So you
  come in.</span> </p><p><span m='1177140'>You got some horrible disease, and
  the doctor gets curious</span> <span m='1180800'>about what antibiotic would
  be perfect for your disease.</span> </p><p><span m='1183880'>He starts asking
  a lot of questions.</span> </p><p><span m='1189380'>So I'm not going to deal
  with that because that world has</span> <span m='1194710'>all kinds of
  unpronounceable terms like bacterioides and</span> <span m='1199250'>anaerobic
  and stuff like that.</span> </p><p><span m='1201310'>So it's completely
  analogous to talk about identifying</span> <span m='1204770'>animals in a
  little zoo, sort of a small town type of zoo.</span> </p><p><span
  m='1212210'>So I'm going to suggest that we write down on a piece of</span>
  <span m='1215320'>paper all the things we can observe about an animal,
  and</span> <span m='1218710'>then we'll try to figure out what the animal
  is.</span> </p><p><span m='1223210'>So I don't know, what can we start
  with?</span> </p><p><span m='1226610'>Has hair.</span> </p><p><span
  m='1234440'>Then there are some characteristics of the</span> <span
  m='1237660'>following form.</span> </p><p><span m='1239080'>Has claws.</span>
  </p><p><span m='1245590'>Sharp teeth.</span> </p><p><span m='1253580'>And
  forward-pointing eyes.</span> </p><p><span m='1264390'>And these are all
  characteristics of carnivores.</span> </p><p><span m='1268120'>We happen to
  have forward-pointing eyes too, but</span> <span m='1270190'>that's more
  because we used to swing around the trees a lot,</span> <span m='1272560'>and
  we needed the stereo vision.</span> </p><p><span m='1274420'>And we don't have
  the claws and the sharp teeth</span> <span m='1276530'>that go with it.</span>
  </p><p><span m='1278400'>But anyhow, those are typically characteristics
  of</span> <span m='1281030'>carnivores, as is eating meat.</span> </p><p><span
  m='1288250'>And this particular little animal we're looking at has</span>
  <span m='1291090'>also got spots, and it's very fast.</span> </p><p><span
  m='1299770'>What is it?</span> </p><p><span m='1302550'>Well, everybody says
  it's a cheetah.</span> </p><p><span m='1304480'>Let's see how our program
  would figure that out.</span> </p><p><span m='1306970'>Well, program might
  say, let's see if it has hair, then rule</span> <span m='1313210'>one says
  that that means it must be a mammal.</span> </p><p><span m='1323690'>We can
  imagine another rule that says if you have sharp</span> <span
  m='1327450'>claws, sharp teeth, and forward-pointing eyes, then</span> <span
  m='1332410'>you're a carnivore.</span> </p><p><span m='1334750'>And I'm using
  sort of hardware notation here.</span> </p><p><span m='1337670'>That's an and
  gate, right?</span> </p><p><span m='1339940'>So that means we have to have all
  of these characteristics</span> <span m='1343040'>before we will conclude that
  the animal is a carnivore.</span> </p><p><span m='1352490'>Now, this animal
  has been also observed to eat meat.</span> </p><p><span m='1356870'>So that
  means we've got extra evidence that the animal is</span> <span
  m='1360750'>carnivorous.</span> </p><p><span m='1362700'>And now, because the
  animal is a mammal and a carnivore and</span> <span m='1372020'>has spots, and
  it's very fast, then the animal is a cheetah.</span> </p><p><span
  m='1385116'>And I hope all of our African students agree that</span> <span
  m='1387850'>it must be a cheetah.</span> </p><p><span m='1389000'>It's a small
  zoo--</span> <span m='1389980'>I mean, a big zoo.</span> </p><p><span
  m='1391420'>Who knows what it is?</span> </p><p><span m='1391830'>It's
  probably got some unpronouncable name--</span> <span m='1393700'>there's
  possibilities.</span> </p><p><span m='1394990'>But for our small zoo, that
  will do.</span> </p><p><span m='1397010'>So we have group now written down in
  the form</span> <span m='1400260'>of these and gates.</span> </p><p><span
  m='1402270'>Several rules, R1, R2-- and there needs to</span> <span
  m='1407030'>be an and gate here--</span> <span m='1409040'>that's R3 and an
  R4.</span> </p><p><span m='1416950'>All of which indicate that this animal is
  a cheetah.</span> </p><p><span m='1420500'>So we built ourself a little
  rule-based expert system that</span> <span m='1423155'>can recognize exactly
  one animal, but you could imagine</span> <span m='1425400'>filling out this
  system with other rules so that you could</span> <span m='1428540'>recognize
  giraffes and penguins and all the other</span> <span m='1430750'>sorts of
  things you find in a small zoo.</span> </p><p><span m='1435890'>So when you
  have a system like this that works as I've</span> <span m='1437920'>indicated,
  then what we're going to call that, we're</span> <span m='1441236'>going to
  give that a special name, and we're going to call</span> <span
  m='1444660'>that a forward-chaining rule-based--</span> <span
  m='1456560'>because it uses rules--</span> <span m='1466050'>expert
  system.</span> </p><p><span m='1474320'>And we're going to put expert in
  parentheses because when</span> <span m='1478050'>these things were developed,
  for marketing reasons, they</span> <span m='1481280'>called them expert
  systems instead of novice systems.</span> </p><p><span m='1485470'>But are
  they really experts in a human sense?</span> </p><p><span m='1487490'>Not
  really, because they have these knee-jerk rules.</span> </p><p><span
  m='1491880'>They're not equipped with anything you might want to</span> <span
  m='1493500'>call common sense.</span> </p><p><span m='1495800'>They don't have
  an ability to deal with previous cases, like</span> <span m='1499700'>we do
  when we go to medical school.</span> </p><p><span m='1501940'>So they really
  ought to be called rule-based novice</span> <span m='1504170'>systems because
  they reason like novices on</span> <span m='1506120'>the basis of
  rules.</span> </p><p><span m='1508170'>But the tradition is to call
  them</span> <span m='1509585'>rule-based expert systems.</span> </p><p><span
  m='1511590'>And this one works forward from the facts we give it to</span>
  <span m='1518310'>the conclusion off on the right.</span> </p><p><span
  m='1520260'>That's why it's a forward-chaining system.</span> </p><p><span
  m='1526850'>Can this system answer questions</span> <span m='1528420'>about
  its own behavior?</span> </p><p><span m='1534715'>[INAUDIBLE], what do you
  think?</span> </p><p><span m='1536160'>SPEAKER 5: [INAUDIBLE].</span>
  </p><p><span m='1536900'>PROFESSOR PATRICK WINSTON: Why?</span> </p><p><span
  m='1538010'>SPEAKER 5: [INAUDIBLE].</span> </p><p><span m='1540986'>PROFESSOR
  PATRICK WINSTON: Because it</span> <span m='1541730'>looks like a goal
  tree.</span> </p><p><span m='1543466'>Right.</span> </p><p><span
  m='1544960'>This is, in fact, building a goal tree because each of</span>
  <span m='1548130'>these rules that require several things to be true is</span>
  <span m='1555000'>creating an and node.</span> </p><p><span m='1556920'>And
  each of these situations here where you have multiple</span> <span
  m='1560180'>reasons for believing that the thing is a carnivore, that's</span>
  <span m='1562190'>creating an or node.</span> </p><p><span m='1563960'>And we
  already know that you can answer questions about</span> <span m='1565820'>your
  own behavior if you leave behind a trace of a goal tree.</span> </p><p><span
  m='1570440'>So look at this.</span> </p><p><span m='1571620'>If I say to it,
  why were you interested in</span> <span m='1580260'>the animal's claws?</span>
  </p><p><span m='1581520'>Because I was trying to see if it was a
  carnivore.</span> </p><p><span m='1585020'>How did you know that the animal is
  a mammal?</span> </p><p><span m='1588710'>Because it has hair.</span>
  </p><p><span m='1591190'>Why did you think it was a cheetah?</span>
  </p><p><span m='1593450'>Because it's a mammal, a carnivore, has</span> <span
  m='1596190'>spots, and very fast.</span> </p><p><span m='1598010'>So by
  working forward and backward in this goal tree,</span> <span m='1601570'>this
  too can answer questions about its own behavior.</span> </p><p><span
  m='1604990'>So now you know how, going forward, you can write</span> <span
  m='1607020'>programs that answer questions about their behavior.</span>
  </p><p><span m='1610900'>Either you write the subroutines so that each
  one</span> <span m='1612950'>is wrapped around a goal, so you've got
  goal-centered</span> <span m='1615710'>programming, or you build a so-called
  expert system using</span> <span m='1619420'>rules, in which case it's easy to
  make it leave behind a</span> <span m='1623010'>trace of a goal tree, which
  makes it possible to answer</span> <span m='1626180'>questions about its own
  behavior, just as this</span> <span m='1628670'>[INAUDIBLE]</span> <span
  m='1629170'>program did.</span> </p><p><span m='1632290'>But now, a little
  more vocabulary.</span> </p><p><span m='1636330'>I'm going to save time by
  erasing all of these things</span> <span m='1640260'>that I previously drew by
  way of connections.</span> </p><p><span m='1645818'>And I'm going to approach
  this zoo in a little different way.</span> </p><p><span m='1653610'>I'm going
  to not ask any questions about the animal.</span> </p><p><span
  m='1659360'>Instead, I'm going to say, mommy, is this thing I'm</span> <span
  m='1663510'>looking at a cheetah?</span> </p><p><span m='1666220'>And how
  would mommy go about figuring it out.</span> </p><p><span m='1670640'>In her
  head, she would say, well, I don't know.</span> </p><p><span m='1674330'>If
  it's going to be a cheetah, then it must be the case that</span> <span
  m='1678425'>it's a carnivore, and it must be the case that it has
  spots.</span> </p><p><span m='1685010'>And it must be the case that it's very
  fast.</span> </p><p><span m='1689350'>So so far, what we've established is
  that if it's</span> <span m='1692210'>going to be a cheetah, it has to have
  the four</span> <span m='1694940'>characteristics that mommy finds
  behind</span> <span m='1697880'>this rule are four.</span> </p><p><span
  m='1700440'>So instead of working forward from facts, what I'm going to</span>
  <span m='1704710'>do is work backward from a hypothesis.</span> </p><p><span
  m='1711460'>So here the hypothesis is this thing is a cheetah.</span>
  </p><p><span m='1715720'>How do I go about showing whether that's true or
  not?</span> </p><p><span m='1720110'>Well, I haven't done anything so far
  because all I know is a</span> <span m='1724250'>cheetah if all these things
  are true, but are they true?</span> </p><p><span m='1726740'>Well, to find out
  if it's a mammal, I can use rule one.</span> </p><p><span m='1731160'>And if I
  know or can determine that the animal has hair, then</span> <span
  m='1735270'>that part of it is taken care of.</span> </p><p><span
  m='1737790'>And I can similarly work my way back through carnivore.</span>
  </p><p><span m='1741990'>I say, well, it's a carnivore if it has claws, sharp
  teeth,</span> <span m='1746870'>and forward-pointing eyes.</span> </p><p><span
  m='1749680'>And then as much as the animal in question</span> <span
  m='1751860'>does, then I'm through.</span> </p><p><span m='1753720'>I know
  it's a carnivore.</span> </p><p><span m='1754555'>I don't have to go through
  and show that it's a carnivore</span> <span m='1756980'>another way.</span>
  </p><p><span m='1758230'>So I never actually ask questions about</span> <span
  m='1760400'>whether it eats meat.</span> </p><p><span m='1763600'>Finally, the
  final two conditions are met by just an</span> <span m='1767720'>inspection of
  the animal.</span> </p><p><span m='1770020'>That's to say, it's in the
  database.</span> </p><p><span m='1771300'>I don't have to use any rules to
  determine that the animal</span> <span m='1774400'>has spots and is very
  fast.</span> </p><p><span m='1777290'>So now, I've got everything in place to
  say that it's a</span> <span m='1779610'>cheetah, because it's a carnivore,
  because it has</span> <span m='1782490'>claws, sharp teeth, and
  forward-pointing eyes, and all</span> <span m='1785330'>the rest of this stuff
  is similarly determined by going</span> <span m='1787980'>backwards, backwards
  from the hypothesis toward the facts,</span> <span m='1794170'>instead of from
  the facts forward to the conclusions.</span> </p><p><span m='1797730'>So
  building a system that works like that, I have a</span> <span
  m='1809180'>backward-chaining rule-based expert system.</span> </p><p><span
  m='1815980'>But there's a very important characteristic of this system</span>
  <span m='1819040'>in both backward and forward mode, and that is that
  this</span> <span m='1822620'>thing is a deduction system.</span> </p><p><span
  m='1829090'>That's because it's working with facts</span> <span m='1831760'>to
  produce new facts.</span> </p><p><span m='1833750'>When you have a deduction
  system, you can never take</span> <span m='1835730'>anything away.</span>
  </p><p><span m='1837920'>But these rule-based systems are also used in another
  mode,</span> <span m='1840790'>where it's possible to take something
  away.</span> </p><p><span m='1842530'>See, in fact world, in deduction world,
  you're</span> <span m='1845110'>talking about proving things.</span>
  </p><p><span m='1846920'>And once you prove something is true, it can't be
  false.</span> </p><p><span m='1851320'>If it is, you've got a contradiction in
  your system.</span> </p><p><span m='1854100'>But if you think of this as a
  programming language, if you</span> <span m='1856340'>think of using rules as
  a programming language, then you</span> <span m='1859510'>can think of
  arranging it so these rules add or subtract</span> <span m='1864770'>from the
  database.</span> </p><p><span m='1866380'>Let me show you an example of a
  couple of systems.</span> </p><p><span m='1871500'>First of all, since I've
  talked about the MYCIN system,</span> <span m='1875650'>let me show you an
  example of a MYCIN dialogue.</span> </p><p><span m='1901910'>That's a MYCIN
  dialogue.</span> </p><p><span m='1903750'>And you can see the appearance of
  words you have to go to</span> <span m='1907320'>medical school to
  learn.</span> </p><p><span m='1911000'>And here's a typical MYCIN rule, just
  like the rules for</span> <span m='1913830'>doing zoo analysis, only a more
  complicated domain.</span> </p><p><span m='1918252'>But here's another example
  of a system that was written, not</span> <span m='1921130'>in the '80s, but
  just a couple of years ago by a student in</span> <span m='1924300'>the
  architecture department, Ph.D. thesis.</span> </p><p><span m='1929340'>He was
  interested in the architecture of a Portuguese</span> <span
  m='1933150'>architect named Siza.</span> </p><p><span m='1935250'>And Siza's
  done a lot of mass housing stuff.</span> </p><p><span m='1938180'>And Siza has
  the idea that you ought to be able to design</span> <span m='1940570'>your own
  house.</span> </p><p><span m='1942500'>And so Jose Duarte, a Portuguese
  student, a Ph.D.</span> </p><p><span m='1947240'>student in architecture,
  wrote a rule-based system that was</span> <span m='1951260'>capable of
  designing Siza-like houses in response to the</span> <span
  m='1955950'>requirements and recommendations and desires of</span> <span
  m='1959080'>the people who are going to occupy the houses.</span> </p><p><span
  m='1962740'>So the most compelling part of this thing, of this
  exercise,</span> <span m='1966150'>was that Duarte took some of the designs of
  the program,</span> <span m='1971780'>mixed them up with some of the designs
  of Siza, and put them</span> <span m='1975330'>in front of Siza, and said,
  which ones did you do?</span> </p><p><span m='1978840'>And Siza couldn't
  tell.</span> </p><p><span m='1981550'>So somehow, the rule-based system that
  was built using</span> <span m='1984600'>this kind of technology was
  sufficient to confuse even the</span> <span m='1988530'>expert that they were
  patterned after.</span> </p><p><span m='1993040'>But this program is a little
  complicated.</span> </p><p><span m='1994555'>It, too, has its own specialized
  lingo.</span> </p><p><span m='1997710'>So I'm not going to talk about it in
  detail, but rather talk</span> <span m='2001460'>instead about an analogous
  problem.</span> </p><p><span m='2004320'>And that is a problem that everyone
  has faced at one</span> <span m='2007910'>point or another, and that is the
  problem of putting</span> <span m='2011210'>groceries in a bag at a grocery
  store.</span> </p><p><span m='2014952'>It's the same thing, right?</span>
  </p><p><span m='2017110'>Instead of putting rooms in a house, you're
  putting</span> <span m='2019770'>groceries in a bag.</span> </p><p><span
  m='2021660'>And there must be some rules about how to do that.</span>
  </p><p><span m='2026640'>In fact, maybe some of you have been professional
  grocery</span> <span m='2029910'>store baggers?</span> </p><p><span
  m='2032420'>[INAUDIBLE] a grocery store professional bagger.</span>
  </p><p><span m='2034870'>You're a--</span> <span m='2037760'>which one?</span>
  </p><p><span m='2038480'>LISA: [INAUDIBLE]</span> <span m='2040850'>PROFESSOR
  PATRICK WINSTON: Yeah, what is your name?</span> </p><p><span
  m='2041475'>LISA: Lisa.</span> </p><p><span m='2041770'>PROFESSOR PATRICK
  WINSTON: Lisa.</span> </p><p><span m='2043120'>OK, well we got two
  professional</span> <span m='2045640'>grocery store baggers.</span>
  </p><p><span m='2047730'>And I'm going to be now simulating a highly
  paid</span> <span m='2050429'>knowledge engineer desirous of building a
  program that knows</span> <span m='2053800'>how to bag groceries.</span>
  </p><p><span m='2056300'>So I'm going to visit your site, Market Basket, and
  I'm</span> <span m='2062300'>going to ask Lisa, now fearful of losing her job,
  if she</span> <span m='2066889'>would tell me about how she bags
  groceries.</span> </p><p><span m='2070250'>So could you suggest a rule?</span>
  </p><p><span m='2072780'>LISA: Sure.</span> </p><p><span m='2074226'>Large
  items in the bottom.</span> </p><p><span m='2076154'>PROFESSOR PATRICK
  WINSTON: Large items in the bottom.</span> </p><p><span m='2077600'>You see,
  that's why I'm a highly paid knowledge</span> <span m='2079350'>engineer,
  because I translate what she said</span> <span m='2083090'>into an if-then
  rule.</span> </p><p><span m='2084090'>So if large, then bottom.</span>
  </p><p><span m='2086300'>So now I--</span> <span m='2087370'>SPEAKER 3:
  [LAUGHTER]</span> <span m='2089030'>PROFESSOR PATRICK WINSTON: So how about
  you, [INAUDIBLE]?</span> </p><p><span m='2090020'>Have you got a
  suggestion?</span> </p><p><span m='2093870'>About how to bag groceries?</span>
  </p><p><span m='2096355'>SPEAKER 6: The small things on top.</span>
  </p><p><span m='2099840'>PROFESSOR PATRICK WINSTON: If small, then on
  top.</span> </p><p><span m='2102180'>Lisa, have you got anything else you
  could tell me?</span> </p><p><span m='2104690'>LISA: Don't put too many heavy
  things in the same bag.</span> </p><p><span m='2107070'>PROFESSOR PATRICK
  WINSTON: Don't put too many heavy</span> <span m='2108500'>things in the same
  bag.</span> </p><p><span m='2109750'>So if heavy greater than three, then new
  bag, or</span> <span m='2114330'>something like that.</span> </p><p><span
  m='2116560'>Is that all we're going to be able to-- does anybody else</span>
  <span m='2117615'>want to volunteer?</span> </p><p><span
  m='2118430'>[INAUDIBLE], have you bagged groceries in Turkey?</span>
  </p><p><span m='2120677'>LISA: So they don't have grocery</span> <span
  m='2122665'>baggers, so we have to--</span> <span m='2126144'>PROFESSOR
  PATRICK WINSTON: So everybody's a professional</span> <span m='2127635'>bagger
  in Turkey.</span> </p><p><span m='2128640'>Yeah.</span> </p><p><span
  m='2128915'>It's outsourced to the customers.</span> </p><p><span
  m='2132324'>SPEAKER 7: So no squishies on the bottom.</span> </p><p><span
  m='2134694'>So if you have--</span> <span m='2135642'>PROFESSOR PATRICK
  WINSTON: No squishies on the bottom.</span> </p><p><span m='2136590'>SPEAKER
  7: If you have tomatoes--</span> <span m='2137064'>PROFESSOR PATRICK WINSTON:
  That's good.</span> </p><p><span m='2138050'>Tomatoes.</span> </p><p><span
  m='2138400'>SPEAKER 7: You don't want them to get squished.</span>
  </p><p><span m='2140260'>PROFESSOR PATRICK WINSTON: Now, there's a very
  different</span> <span m='2140880'>thing about squishies and tomatoes because
  tomato is</span> <span m='2144070'>specific, and squishy isn't.</span>
  </p><p><span m='2146395'>Now, one tendency of MIT students, of course, is
  that</span> <span m='2149090'>we all tend to generalize.</span> </p><p><span
  m='2152270'>I once knew a professor in the Sloan School</span> <span
  m='2154190'>who seemed real smart.</span> </p><p><span
  m='2156270'>And--</span> <span m='2157240'>SPEAKER 3: [LAUGHTER]</span> <span
  m='2160150'>PROFESSOR PATRICK WINSTON: Then I</span> <span m='2160410'>figured
  out what he did.</span> </p><p><span m='2162270'>If I were to say, I'm
  thinking about a red apple.</span> </p><p><span m='2166250'>They'd sit back
  and say, oh, I see you're contemplating</span> <span m='2170720'>colored fruit
  today.</span> </p><p><span m='2172330'>They're just taking it up one level of
  abstraction.</span> </p><p><span m='2176740'>Not a genius.</span> </p><p><span
  m='2177530'>He also was able to talk for an hour after he drew a</span> <span
  m='2180320'>triangle on the board.</span> </p><p><span m='2181460'>Amazing
  people.</span> </p><p><span m='2182520'>Anyhow, where were we?</span>
  </p><p><span m='2184160'>Oh, yes, bagging groceries.</span> </p><p><span
  m='2187690'>So we're making some progress, but not as</span> <span
  m='2191690'>much as I would like.</span> </p><p><span m='2192950'>And so in
  order to really make progress on tasks like this,</span> <span m='2197800'>you
  have to exercise--</span> <span m='2198790'>you know about some principles of
  knowledge engineering.</span> </p><p><span m='2203040'>So principle number
  one, which I've listed over here as part</span> <span m='2208310'>of a gold
  star idea, is deal with specific cases.</span> </p><p><span m='2212950'>So
  while you're at the site, if all you do is talk to the</span> <span
  m='2215870'>experts like Lisa and [INAUDIBLE], all you're going</span> <span
  m='2219210'>to get is vague generalities because they won't think of</span>
  <span m='2221490'>everything.</span> </p><p><span m='2223260'>So what you do
  is you say, well, let me</span> <span m='2225620'>watch you on the
  line.</span> </p><p><span m='2227870'>And then you'll see that they have to
  have some way of</span> <span m='2229810'>dealing with the milk.</span>
  </p><p><span m='2232540'>And then you'll see that they have to have some way
  of</span> <span m='2234220'>dealing with the potato chips.</span> </p><p><span
  m='2235600'>Nobody mentioned potato chips, except insofar as they might</span>
  <span m='2239150'>be squishy.</span> </p><p><span m='2242650'>We don't have a
  definition for squishy.</span> </p><p><span m='2244520'>Nobody talked about
  the macaroni.</span> </p><p><span m='2247840'>And no one talked about the
  motor oil.</span> </p><p><span m='2249790'>This is a convenience store.</span>
  </p><p><span m='2252050'>I don't want that in the same bag with the
  meat.</span> </p><p><span m='2255240'>And then no one talked about canned
  stuff.</span> </p><p><span m='2257890'>Here's a can of olives.</span>
  </p><p><span m='2260450'>So by looking at specific cases, you elicit from
  people</span> <span m='2265930'>knowledge they otherwise would not have
  thought to give you.</span> </p><p><span m='2271210'>That's knowledge
  engineering rule number one.</span> </p><p><span m='2275450'>And within a very
  few minutes, you'll have all three</span> <span m='2277310'>knowledge
  engineering rules and be prepared to be a highly</span> <span m='2279480'>paid
  knowledge engineer.</span> </p><p><span m='2283190'>Heuristic, let's call
  these heuristics.</span> </p><p><span m='2285350'>Heuristic number one,
  specific cases.</span> </p><p><span m='2287120'>Heuristic number two is ask
  questions about things that</span> <span m='2291100'>appear to be the same,
  but are actually handled differently.</span> </p><p><span m='2295070'>So
  there's some Birds Eye frozen peas, and here--</span> <span m='2300888'>ugh,
  some fresh cut sweet peas.</span> </p><p><span m='2307160'>And to me, the
  person who's never touched a grocery bag in</span> <span m='2311540'>my life--
  maybe I'm from Mars--</span> <span m='2313900'>I can't tell the
  difference.</span> </p><p><span m='2314990'>They're both peas.</span>
  </p><p><span m='2316910'>But I observe that the experts are handling these
  objects</span> <span m='2320980'>differently.</span> </p><p><span
  m='2322650'>So I say, why did you handle those peas differently from</span>
  <span m='2325940'>those peas, and what do they say?</span> </p><p><span
  m='2328250'>One's canned, and one's frozen.</span> </p><p><span m='2331410'>So
  what happens?</span> </p><p><span m='2333150'>Bingo, I've got some new words
  in my vocabulary.</span> </p><p><span m='2337280'>And those new vocabulary
  words are going to give me power</span> <span m='2339660'>over the domain
  because I can now use</span> <span m='2341570'>those words in my rules.</span>
  </p><p><span m='2343380'>And I can write rules like if frozen, then put them
  all</span> <span m='2347540'>together in a little plastic bag.</span>
  </p><p><span m='2349910'>Actually, that's too complicated, but that's
  what</span> <span m='2351660'>we end up doing, right?</span> </p><p><span
  m='2353000'>Why do we put them all together in a</span> <span
  m='2354720'>little plastic bag?</span> </p><p><span m='2356141'>SPEAKER 8:
  [INAUDIBLE]</span> <span m='2358105'>PROFESSOR PATRICK WINSTON: What's
  that?</span> </p><p><span m='2359087'>SPEAKER 8: [INAUDIBLE]</span> <span
  m='2360070'>PROFESSOR PATRICK WINSTON: Well, there are two</span> <span
  m='2360690'>explanations.</span> </p><p><span m='2364390'>There's the MIT
  explanation.</span> </p><p><span m='2366750'>We know that temperature flow is
  equal to the fourth power</span> <span m='2371120'>of the temperature
  difference and the surface area and all</span> <span m='2373400'>that kind of
  stuff.</span> </p><p><span m='2374130'>We want to get them all together in a
  ball, sphere.</span> </p><p><span m='2379500'>The normal explanation is that
  they're going to melt anyway,</span> <span m='2381660'>so they might as well
  not get everything else wet.</span> </p><p><span m='2383808'>All right.</span>
  </p><p><span m='2384784'>SPEAKER 3: [LAUGHTER]</span> <span
  m='2390640'>PROFESSOR PATRICK WINSTON: So that's heuristic number two.</span>
  </p><p><span m='2392760'>And actually, there's heuristic number three, that
  I</span> <span m='2396140'>just want to relate to you for the first time
  because I have</span> <span m='2399860'>been dealing with it a lot over this
  past summer.</span> </p><p><span m='2401770'>Heuristic number three is you
  build a system, and you see</span> <span m='2404160'>when it cracks.</span>
  </p><p><span m='2405820'>And when it cracks is when you don't have one of the
  rules</span> <span m='2407770'>you need in order to execute--</span> <span
  m='2411130'>in order to get the program to execute as</span> <span
  m='2413180'>you want it to execute.</span> </p><p><span m='2414890'>So if I
  were to write a grocery store bagging program</span> <span m='2417730'>and
  have it bag some groceries, again, eventually</span> <span m='2420290'>it
  would either make a mistake or come to a grinding halt,</span> <span
  m='2422680'>and bingo, I know that there's a missing rule.</span> </p><p><span
  m='2428150'>Isn't that what happens when you do a problem set, and you</span>
  <span m='2432090'>hit an impasse?</span> </p><p><span m='2434360'>You're
  performing an experiment on yourself, and</span> <span m='2436920'>you're
  discovering that you don't have the whole program.</span> </p><p><span
  m='2440560'>In fact, I've listed this as a gold star idea having to do</span>
  <span m='2445140'>with engineering yourself because all of these things</span>
  <span m='2447460'>that you can do for knowledge engineering are things you
  can</span> <span m='2450400'>do when you learn a new subject yourself.</span>
  </p><p><span m='2452170'>Because essentially, you're making yourself into an
  expert</span> <span m='2454730'>system when you're learning circuit theory
  or</span> <span m='2456940'>electromagnetism or something of that sort.</span>
  </p><p><span m='2460230'>You're saying to yourself, well, let's look at
  some</span> <span m='2462420'>specific cases.</span> </p><p><span
  m='2464310'>Well, what are the vocabulary items here that tell me why</span>
  <span m='2466870'>this problem is different from that problem?</span>
  </p><p><span m='2468450'>Oh, this is a cylinder instead of a sphere.</span>
  </p><p><span m='2471380'>Or you're working with a problem set, and you
  discover</span> <span m='2473200'>you can't work with the problem, and you
  need to get</span> <span m='2476000'>another chunk of knowledge that makes it
  possible</span> <span m='2477860'>for you to do it.</span> </p><p><span
  m='2479600'>So this sort of thing, which you think of primarily as a</span>
  <span m='2483260'>mechanism, heuristics for doing knowledge
  engineering,</span> <span m='2486400'>are also mechanisms for making yourself
  smarter.</span> </p><p><span m='2496910'>So that concludes what I want to talk
  with you about today.</span> </p><p><span m='2500990'>But the bottom line is,
  that if you build a rule-based</span> <span m='2503320'>expert system, it can
  answer questions</span> <span m='2504880'>about its own behavior.</span>
  </p><p><span m='2506540'>If you build a program that's centered on goals, it
  can</span> <span m='2509850'>answer questions about its own behavior.</span>
  </p><p><span m='2511815'>If you build an integration program, it can
  answer</span> <span m='2514190'>questions about its own behavior.</span>
  </p><p><span m='2516120'>And if you want to build one of these systems, and
  you need</span> <span m='2517950'>to extract knowledge from an expert, you
  need to approach</span> <span m='2520760'>it with these kinds of heuristics
  because the expert</span> <span m='2523610'>won't think what to tell you
  unless you elicit that</span> <span m='2526320'>information by specific cases,
  by asking questions about</span> <span m='2529680'>differences, and by
  ultimately doing some experiments to see</span> <span m='2532760'>where your
  program is correct.</span> </p><p><span m='2534850'>So that really concludes
  what I had to say, except I want to</span> <span m='2539960'>ask the question,
  is this all we need to know about human</span> <span
  m='2545080'>intelligence?</span> </p><p><span m='2546010'>Can these things
  be--</span> <span m='2547260'>are these things really smart?</span>
  </p><p><span m='2550500'>And the traditional answer is no, they're not really
  smart</span> <span m='2554890'>because their intelligence is this sort of thin
  veneer.</span> </p><p><span m='2559610'>And when you try to get underneath it,
  as written,</span> <span m='2564090'>they tend to crack.</span> </p><p><span
  m='2566160'>For example, we talk about a rule, we could talk about a</span>
  <span m='2570030'>rule that knows that you should put the potato chips
  on</span> <span m='2573290'>the top of the bag.</span> </p><p><span
  m='2577080'>But a program that knows that would have no idea why you</span>
  <span m='2580375'>would want to put the potato chips on top of the bag.</span>
  </p><p><span m='2583660'>They wouldn't know that if you put them on the bottom
  of the</span> <span m='2585610'>bag, they'll get crushed.</span> </p><p><span
  m='2589870'>And it wouldn't know that if they get crushed, the customer</span>
  <span m='2593310'>will get angry, because people don't like to eat
  crushed</span> <span m='2597630'>potato chips.</span> </p><p><span
  m='2599340'>So that's what I mean when I say the knowledge of these</span>
  <span m='2601280'>things tends to be a veneer.</span> </p><p><span
  m='2603790'>So the MYCIN program, during debugging, once prescribed a</span>
  <span m='2608000'>barrel of penicillin to be administered to a patient
  for</span> <span m='2611595'>its disease.</span> </p><p><span m='2614340'>They
  don't know, they don't have any common sense.</span> </p><p><span
  m='2618510'>So the question then becomes, well, I don't know.</span>
  </p><p><span m='2623620'>Does rule-based--</span> <span m='2625460'>do rules
  have anything to do with common sense?</span> </p><p><span m='2630550'>And I'm
  becoming a little bit agnostic on that subject.</span> </p><p><span
  m='2637840'>Because there are certain indications, there are certain</span>
  <span m='2640440'>situations, in which rules could be said to play a
  role</span> <span m='2646600'>in our ordinary understanding of things.</span>
  </p><p><span m='2651250'>Would you like to see a demonstration?</span>
  </p><p><span m='2653560'>What I'm going to show you, when the clip speaks
  up--</span> <span m='2657060'>well, before I make any promises, let me see if
  I'm</span> <span m='2661640'>actually connected to the web.</span>
  </p><p><span m='2674260'>MIT, good.</span> </p><p><span
  m='2676770'>MIT.</span> </p><p><span m='2678820'>Guest.</span> </p><p><span
  m='2679700'>Yeah, that's me.</span> </p><p><span m='2693820'>Sounds
  good.</span> </p><p><span m='2723930'>OK, I just tested the system, and I've
  seen it is actually</span> <span m='2726650'>connected to the web.</span>
  </p><p><span m='2728330'>And I'm going to adjust some systems options
  here.</span> </p><p><span m='2732230'>I'll get rid of the text box.</span>
  </p><p><span m='2735120'>And we'll get rid of those changes scale a little
  bit.</span> </p><p><span m='2738160'>What I'm going to do is I'm going to read
  a little</span> <span m='2740780'>synopsis of the Macbeth plot.</span>
  </p><p><span m='2744050'>You're MIT students.</span> </p><p><span
  m='2745190'>I'm sure you're all classically educated and very</span> <span
  m='2746920'>familiar with Shakespearean plots.</span> </p><p><span
  m='2749830'>So I'm going to read one.</span> </p><p><span m='2752980'>I'm
  going to read a version of a Macbeth plot.</span> </p><p><span m='2756330'>And
  it's going to go along like this.</span> </p><p><span m='2759260'>It's
  basically reading a rule base so far.</span> </p><p><span m='2763040'>And
  pretty soon, it's going to get beyond the rule base and</span> <span
  m='2767910'>start reading the Macbeth story.</span> </p><p><span
  m='2772320'>And there it is.</span> </p><p><span m='2773740'>It's read the
  Macbeth story.</span> </p><p><span m='2774720'>Let me show you what the
  Macbeth story looks like as</span> <span m='2776860'>it's actually retained by
  the system.</span> </p><p><span m='2778660'>That's it.</span> </p><p><span
  m='2779320'>Read that.</span> </p><p><span m='2785480'>OK, you ran out of time
  because the</span> <span m='2787310'>machine's already finished.</span>
  </p><p><span m='2788490'>It takes about five seconds to read this
  story.</span> </p><p><span m='2790830'>Now, as you look at this little
  synopsis of Macbeth,</span> <span m='2792920'>there are a couple things to
  note.</span> </p><p><span m='2795510'>For one thing, it says that Duncan is
  murdered.</span> </p><p><span m='2799090'>Duncan, I hope this doesn't bother
  you.</span> </p><p><span m='2802650'>Duncan is murdered by Macbeth.</span>
  </p><p><span m='2804530'>But at no time does it say that Duncan is
  dead.</span> </p><p><span m='2808205'>But you know Duncan's dead because he
  was murdered.</span> </p><p><span m='2810800'>If murdered, then dead.</span>
  </p><p><span m='2813168'>SPEAKER 3: [LAUGHTER].</span> </p><p><span
  m='2815000'>PROFESSOR PATRICK WINSTON: So if you look a little further</span>
  <span m='2816640'>down, what you see is that Macduff kills Macbeth.</span>
  </p><p><span m='2821890'>Fourth line up from the bottom.</span> </p><p><span
  m='2824260'>Why did Macduff kill Macbeth?</span> </p><p><span
  m='2828410'>Doesn't say why in this story, but you have no trouble</span>
  <span m='2831630'>figuring out that it's because he got angry.</span>
  </p><p><span m='2836950'>And when you get angry, you don't necessarily
  kill</span> <span m='2839970'>somebody, but it's possible.</span> </p><p><span
  m='2841300'>SPEAKER 3: [LAUGHTER].</span> </p><p><span m='2844190'>PROFESSOR
  PATRICK WINSTON: So now that you see what's in the</span> <span
  m='2845240'>story, let me take you back to this display.</span> </p><p><span
  m='2848550'>It's what we call an elaboration graph.</span> </p><p><span
  m='2851210'>And when I blow it up, you can see that there's some
  familiar</span> <span m='2853360'>looking things in there.</span> </p><p><span
  m='2855340'>For example, up here in the left-hand corner, Macbeth</span> <span
  m='2858630'>murders Duncan, right over there.</span> </p><p><span
  m='2861700'>And over here, Macduff kills Macbeth.</span> </p><p><span
  m='2865510'>And if you look at what is a consequence of that, it looks</span>
  <span m='2870710'>like there must be a rule that says if you murder
  somebody,</span> <span m='2873010'>you harm them.</span> </p><p><span
  m='2874670'>And if you murder somebody, then they're dead.</span> </p><p><span
  m='2878540'>And one reason why you might kill somebody is because they</span>
  <span m='2881270'>angered you.</span> </p><p><span m='2882500'>And if you go
  the other way, one consequence of killing</span> <span m='2885880'>somebody is
  that you harm them, and that they die too.</span> </p><p><span m='2890160'>And
  if you harm somebody, they get angry, and their state</span> <span
  m='2893120'>goes negative.</span> </p><p><span m='2899050'>So that suggests
  that there are some things that we have</span> <span m='2902550'>on our hands
  that are very compiled and very, strangely</span> <span m='2906145'>enough,
  very rule-like in their character.</span> </p><p><span m='2910970'>Now, to
  close, I'm just going to read Hamlet.</span> </p><p><span m='2915730'>The
  Hamlet demonstration is much like the Macbeth one.</span> </p><p><span
  m='2918900'>In fact, Hamlet and Macbeth are very alike in their plot.</span>
  </p><p><span m='2922270'>But there's one thing that's well-illustrated by
  our</span> <span m='2924530'>particular capturing of Hamlet here.</span>
  </p><p><span m='2927940'>And that is that you'll note that the ratio of gray
  stuff</span> <span m='2930910'>to white stuff is considerable.</span>
  </p><p><span m='2934060'>The gray stuff is stuff that has been deduced by
  rules.</span> </p><p><span m='2939810'>And the reason there's so much gray
  stuff in this Hamlet</span> <span m='2942140'>story is because everybody's
  related to everybody else.</span> </p><p><span m='2945380'>So when you kill
  anybody, you irritate everybody else.</span> </p><p><span m='2952690'>So look
  at that.</span> </p><p><span m='2953750'>A few white things, those are the
  things that are explicit</span> <span m='2956310'>in the story, and lots of
  gray stuff.</span> </p><p><span m='2958630'>So what this is suggesting is that
  when we tell a story,</span> <span m='2962270'>it's mostly a matter of
  controlled hallucination.</span> </p><p><span m='2965440'>I know what rules
  are in your head, so I could take</span> <span m='2968560'>advantage of that
  in telling the story and not have to tell</span> <span m='2971030'>you
  anything I'm sure you're going to know.</span> </p><p><span m='2973490'>And so
  that's why, we've discovered, that storytelling</span> <span m='2976640'>is
  largely a matter of just controlling how you're going</span> <span
  m='2979500'>along, a kind of controlled hallucination.</span> </p><p></p>
embedded_media:
  - uid: 1ccbb3211fc1aefa82ac09e9d8eb356a
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: leXa7EKUPFk
  - uid: fdaab4dbf05aa825ef2b28dfb29ed96b
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-3-reasoning-goal-trees/id765641080?i=194469712
  - uid: ad589032f2bb9c377c73c9f4ffb48abe
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec03_300k.mp4'
  - uid: 4818aed8f70aeb4f365eee4d59adfb7b
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/leXa7EKUPFk/default.jpg'
  - uid: 3737facc11d35556279770ab2cffc1f5
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: leXa7EKUPFk
  - uid: 777eb095f6d7d5df98eed4c4d4af2026
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: leXa7EKUPFk.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-3-reasoning-goal-trees-and-rule-based-expert-systems/leXa7EKUPFk.srt
  - uid: 16742d841abfdbf4820703f21767f5ea
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: leXa7EKUPFk.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-3-reasoning-goal-trees-and-rule-based-expert-systems/leXa7EKUPFk.pdf
  - uid: b8379daa0ecd52bdaf0edcd47f96ef7e
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: e18cc7a5c341c8af2ee2d5b0682280b1
    parent_uid: b3069ee1368e4581c1c932e57363d93e
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
