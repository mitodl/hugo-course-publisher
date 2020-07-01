---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers a symbolic integration
  program from the early days of AI.  We use safe and heuristic transformations
  to simplify the problem, and then consider broader questions of how much
  knowledge is involved, and how the knowledge is represented.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: PNKj529yY5c
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: Video-YouTube-Stream
    type: Video
    uid: 94b94fce2ff86ebcc95db0e7128c4b76
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-2-reasoning-goal-trees/id765641080?i=194468719
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: Video-iTunes U-MP4
    type: Video
    uid: 19184b4bba668082c5e938d9b8227b37
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec02_300k.mp4'
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 56120b6d4e5de6f63204932f46412172
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/PNKj529yY5c/default.jpg'
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 7cf789133029dd6f8a8f4019a1dc3eb7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: PNKj529yY5c
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 9973a5b1e02f9171feab678396aa65fc
  - id: PNKj529yY5c.srt
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-2-reasoning-goal-trees-and-problem-solving/PNKj529yY5c.srt
    title: 3play caption file
    type: null
    uid: cf2e02da5fce8f940ab0b9095e57419a
  - id: PNKj529yY5c.pdf
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-2-reasoning-goal-trees-and-problem-solving/PNKj529yY5c.pdf
    title: 3play pdf file
    type: null
    uid: e298b3cf027b7cc4d6edd4030171d7e5
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 2eff1108b6bc4b078186dd594cca353a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 29f6f34ca41676d9835e4aca5039592f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4e4f649932ec8d13d45fa69d48d60ab3
inline_embed_id: '85559786lecture2:reasoning:goaltreesandproblemsolving67250771'
order_index: 29
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: >-
  <p>Slagle, James. &quot;<a target="_blank"
  href="http://dx.doi.org/10.1145/321186.321193">A Heuristic Program that Solves
  Symbolic Integration Problems in Freshman Calculus</a>.&quot; <em>Journal of
  the ACM</em> 10 (1963): 507-520.</p>
short_url: lecture-2-reasoning-goal-trees-and-problem-solving
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-2-reasoning-goal-trees-and-problem-solving
title: 'Lecture 2: Reasoning: Goal Trees and Problem Solving'
transcript: >-
  <p><span m='8119'>What we're going to talk about today, is goals.</span>
  </p><p><span m='11389'>So just by way of a little warm up exercise, I'd like
  you to look at that integration problem</span> <span m='17550'>over there. The
  one that's disappeared.</span> </p><p><span m='40750'>So the question is, can
  you do it in your head? Probably not. The question is, if a</span> <span
  m='47840'>program can do that, is a program, in any sense of the word,
  intelligent? That's a background</span> <span m='55260'>task I'd like you to
  work on as I talk today.</span> </p><p><span m='58880'>So today we're going to
  be modeling a little bit of human</span> <span m='61000'>problem solving, the
  kind that</span> <span m='62720'>is required when you do symbolic integration.
  Now, you all learned how to do that. You may</span> <span m='67100'>not be
  able to do that particular problem anymore, but you all learned how to
  integrate</span> <span m='70579'>in high school 1801, or something like that.
  The question is, how did you do it, and is</span> <span m='76950'>the problem
  solving technique that we are trying to model by building a program
  that</span> <span m='82539'>does symbolic integration, is that a common kind
  of description of what people do when</span> <span m='89610'>they solve
  problems.</span> </p><p><span m='91110'>So the answer to the question is, yes.
  The kind of problem solving you'll see</span> <span m='94150'>today is like
  generating tests, which you saw last time. It's a very common kind of</span>
  <span m='99280'>problem solving that we all engage in, that we all engage in
  without thinking about it,</span> <span m='104799'>and without having a name
  for it.</span> </p><p><span m='106650'>But once we get a name for it, we'll
  get power over it. And then we'll be able to deploy</span> <span
  m='111470'>it, and it will become a skill. We'll not just witness it, we'll
  not just understand</span> <span m='115658'>it, we'll use it instinctively, as
  a skill.</span> </p><p><span m='120950'>So there you are, you've got that
  problem, there's your problem, and what do you do to</span> <span
  m='124650'>solve it? I don't know, look it up in a table? You'll never find it
  in a table because of</span> <span m='132060'>that minus sign and that 5. So
  you're going to have to do something better than that.</span> </p><p><span
  m='141670'>So what you're going to do, is what you always do when you see a
  problem like that. You try</span> <span m='146640'>to apply a transform, and
  make it into a different problem that's easier to solve. And
  eventually,</span> <span m='151090'>what you hope is that you'll simplify it
  sufficiently, that the pieces that you've simplified to</span> <span
  m='158040'>will be found in some small table of integrals. So how long is this
  table? It's not the case</span> <span m='164450'>that we're going to look at a
  table with 388 elements, because this is not a big table</span> <span
  m='168690'>of integrals. This is what a freshman might have in a freshman's
  head, after taking a</span> <span m='172860'>course in integral
  calculus.</span> </p><p><span m='175739'>One of the interesting questions is,
  how many elements have to be in that table to get an</span> <span m='180400'>A
  in the course? We're interested in how much knowledge is involved, that's one
  of the elements</span> <span m='185180'>of catechism that I've listed over
  there, that will be part of the gold star ideas suite</span> <span
  m='189980'>of the day.</span> </p><p><span m='192400'>So we'd like to take
  that problem, and find a way to make it into another problem that's</span>
  <span m='199769'>more likely, or closer to being found in the table. So what
  we're going to do is very simple,</span> <span m='205800'>graphically. We're
  going to take the problem we're given, and convert it into another
  problem</span> <span m='211720'>that's simpler. And we're going to give that
  process and name, and we're going to call</span> <span m='215579'>it problem
  reduction.</span> </p><p><span m='226900'>And so, in the world of integral
  calculus, there are all sorts of simple methods, simple</span> <span
  m='234269'>transformations, we can try that will take a hard problem and make
  it into an easier</span> <span m='240010'>problem. And some of these
  transformations are extremely simple and always safe. Some</span> <span
  m='247659'>of them are just, well let's try it and see what happens. But some
  of them are safe, and</span> <span m='252629'>I'd like to make a short list of
  safe transformations right now.</span> </p><p><span m='258879'>Now I'm going
  to be going into some detail. And that detail will be grungy. And the
  question</span> <span m='265490'>is, why do I do it? And it's educational
  philosophy, is why I do it. So here's the educational</span> <span
  m='270159'>philosophy. At one level, you want to have a skill. But if you're
  going to have a skill,</span> <span m='278110'>you have to understand it. So
  if you're going to have a skill you have to understand it</span> <span
  m='287629'>one level down. If you're going to understand it, you have to have
  witnessed it on a level</span> <span m='294330'>lower than that.</span>
  </p><p><span m='296389'>So I'm not just going to talk about the idea of
  problem reduction, because if I were just</span> <span m='300569'>going to do
  that, then we could all go home now. So I'm going to show you a
  particular</span> <span m='305969'>example of it, so you understand it better,
  and I'm going to show you the detail at an</span> <span m='310919'>even lower
  level than that. So you will witness the stuff that makes it possible, to
  understand</span> <span m='315199'>the stuff that makes it possible, to build
  a skill. So that's why I'm going through the</span> <span m='319419'>grungy
  detail.</span> </p><p><span m='321539'>So I don't know, let's see. Maybe we
  can get some hints from that example, but I wonder</span> <span m='327349'>if
  somebody could volunteer a simple transformation that always is a good thing
  to do. Yes, Sebastian.</span> </p><p><span m='334569'>AUDIENCE: Take the
  constants out.</span> </p><p><span m='335729'>SPEAKER 1: Take the constants
  out. So we'll make that number two. And we'll say that the</span> <span
  m='341819'>integral c f of x dx is equal to c times the integral f of x dx.
  Other suggestions? Yes.</span> </p><p><span m='353680'>AUDIENCE: Trig
  substitution.</span> </p><p><span m='356449'>SPEAKER 1: Trig substitution. Now
  this is-- no, that's for day two. We don't do trig substitution</span> <span
  m='363569'>here under stuff that's safe, always works, never any doubt, there
  are simpler things.</span> </p><p><span m='370229'>These are the safe
  transformations. What you're giving me is a heuristic transformation.
  Often</span> <span m='377319'>is helpful, doesn't necessarily always work.
  We're going to divide our transformations</span> <span m='382779'>into those
  two categories. So I need another safe one.</span> </p><p><span
  m='386729'>AUDIENCE: [INAUDIBLE]</span> <span m='389830'>SPEAKER 1: The
  architects are sitting over there. Divided not only by nationality, but</span>
  <span m='397740'>by course. What?</span> </p><p><span m='400020'>AUDIENCE: The
  sum of integrals is the integral of the sum.</span> </p><p><span
  m='403280'>SPEAKER 1: The sum of integrals is the integral of the sum. Now
  what's missing? What's number</span> <span m='425360'>one? You're probably
  thinking it's already there, because you've given me the transformation</span>
  <span m='431229'>that involves a constant. And you can think of minus 1 as a
  constant.</span> </p><p><span m='436159'>But whether you use a separate
  transformation or not, of course depends on how you represent</span> <span
  m='440270'>the knowledge. And all of this knowledge, all of this whole thing,
  was written in an</span> <span m='445889'>early form of Lisp. As a
  consequence, the way in which minus was represented is different</span> <span
  m='452749'>from the way minus 1 is represented. So we need one more
  transformation. Or rather, Jim</span> <span m='458069'>Slagle needed one more
  transformation, when he wrote his famous transformation program.</span>
  </p><p><span m='462469'>And that was that if you have the integral of minus f
  of x, that's equal to, minus the</span> <span m='473599'>integral of f of
  x.</span> </p><p><span m='476989'>So that almost completes our safe
  transformation set. There's one more that I'm going to supply</span> <span
  m='481099'>you, because I don't think you'd guess it. Why should you? It's
  number four. There are</span> <span m='485800'>more than this, this is a
  sample. And these are the ones we're going to need in order</span> <span
  m='491489'>to solve that problem, by way of illustration.</span> </p><p><span
  m='494989'>So the fourth one is that, if you have the integral of p of x, over
  q of x, then you</span> <span m='504439'>divide. If you can reach way back
  into high school and figure out how to divide polynomials.</span> </p><p><span
  m='511159'>But if the degree of the numerator is greater than the degree of
  the denominator, then it's</span> <span m='517179'>a knee-jerk always win, you
  must do it, divide it out.</span> </p><p><span m='522120'>So this, then, forms
  the core of an integration program, that will integrate almost nothing.</span>
  </p><p><span m='530259'>But actually, almost nothing is integrable anyway, so
  it's a good head start. So let's</span> <span m='536490'>see how we would put
  this into some kind of procedure. Some kind of framework for deploying</span>
  <span m='545620'>the knowledge that we're beginning to develop.</span>
  </p><p><span m='552600'>What we're going to do is, apply all safe transforms.
  That's our first step. Then we're</span> <span m='572920'>going to look in the
  table, and then we're going to do a test to see if we're done. And</span>
  <span m='592440'>if we are, we report success. But, we're not likely to get
  done with just that stuff.</span> </p><p><span m='602410'>But you know what,
  there was one transformation up here, which breaks my little diagram.
  Which</span> <span m='610000'>one is it? It's the third one, right? Because
  this picture does not reflect what happens</span> <span m='619709'>when you
  apply number three. Because it breaks the problem up, not into just one
  problem,</span> <span m='624680'>but into a whole bunch. So we have to extend
  our graphical device for talking about this</span> <span m='633240'>by a
  little bit, and show what is called an "and node".</span> </p><p><span
  m='647220'>So we've got a program core, we've got a table of integrals, we've
  got a few transformations,</span> <span m='655230'>we've got an architecture,
  a way of putting that stuff together. And now we can try it</span> <span
  m='659810'>out on our sample problem. So let's have a go at that.</span>
  </p><p><span m='666370'>Let's see, this one immediately transforms into 5x to
  the fourth over 1 minus x squared</span> <span m='680149'>to the 5/2 dx. And
  that in turn, immediately transforms into the integral of x to the
  fourth</span> <span m='688649'>over 1 minus x squared to the 5/2, dx.</span>
  </p><p><span m='696620'>This program, by the way, is a dawn-age program. This
  was written by a nearly blind, and subsequently</span> <span
  m='702699'>completely blind, graduate student by the name of James Slagle in
  1960, a long time</span> <span m='708319'>ago. The reason I gave it to you
  today is because, that by describing it, I am giving</span> <span
  m='714509'>you a one-lecture course in artificial intelligence. He anticipated
  so much of the subsequent 20</span> <span m='721079'>years, that talking about
  his program, which is possible in one day, is a miniature introduction</span>
  <span m='728689'>to the whole field.</span> </p><p><span m='730389'>So Slagle,
  as he was doing this on an antique computer, almost no memory, almost no
  speed,</span> <span m='737899'>only slightly faster than mice running around
  on a treadmill. He was able to write a program</span> <span m='745019'>that
  did extremely well when benchmarked against freshmen. And the way you
  benchmark against</span> <span m='751769'>freshman, of course, is you give it
  an examination, drawn from the previous MIT finals for four</span> <span
  m='759249'>or five years, the hardest problems. And this was the hardest
  problem that it solved.</span> </p><p><span m='766100'>So at this point, with
  what we've got so far, we would be stuck. We have no transformation</span>
  <span m='771769'>that can take us further, so we need something else. And what
  we need by way of something</span> <span m='779540'>else, is some
  transformations that we will describe as-- perhaps we'll call them,
  heuristic</span> <span m='788939'>transformations. A funny word, meaning a
  method that often works isn't guaranteed to work.</span> </p><p><span
  m='800279'>It's not an algorithm in the usual sense that we talk about
  algorithms. But rather, it's</span> <span m='807540'>an attempt.</span>
  </p><p><span m='809430'>So these things I'm going to talk about now, are
  sometimes useful, not always useful. Sometimes</span> <span m='815519'>take
  you into a blind alley, don' always work. But you can't get an A in calculus
  without</span> <span m='822209'>knowing some of them. So you said, some kind
  of trig substitution. So here is some kind</span> <span m='829379'>of trig
  substitution. We'll call this heuristic transformation A.</span> </p><p><span
  m='836329'>You have a function sine x, cosine x, tangent of x, cotangent of x,
  secant of x, and cosecant</span> <span m='850790'>of x. And we all know from
  high school trigonometry, that we can rewrite that as a function of</span>
  <span m='860899'>sine x, and cosine x. Or we can rewrite that as a function of
  tangent of x, and cosecant</span> <span m='876990'>of x. Or we can rewrite
  that as function of cotangent of x, and the secant of x. So that's</span>
  <span m='891550'>a transmission from trigonometric form, into another
  trigonometric form. It's not always</span> <span m='897089'>a good idea,
  sometimes it helps.</span> </p><p><span m='902990'>Well that's just part one
  of our suite of heuristic transformations. Stop. There are</span> <span
  m='925370'>others that we need to have in our repertoire, in order to solve
  the problem. One of them</span> <span m='932459'>is a family of
  transformations, which I'll show you only one. It goes like this, if
  you</span> <span m='938629'>have the integral of a function, of the tangent of
  x, then you can rewrite that as the integral</span> <span m='953899'>of a
  function of y over 1 plus y squared dy. So that's a transformation from a
  trigonometric</span> <span m='965850'>form into a polynomial form. So it gets
  rid of all that trigonometric garbage we don't</span> <span m='971360'>want to
  deal with. And there's a whole family of things like that, just as there's a
  family</span> <span m='977319'>of transformations like so, but this is enough
  to give you flavor.</span> </p><p><span m='982699'>Now there's a C that we
  need as well. And that's going to be your proper knee-jerk reaction</span>
  <span m='990949'>when you see something of the form 1 minus x squared. What do
  you do when you see that?</span> </p><p><span m='999640'>AUDIENCE:
  [INAUDIBLE]</span> <span m='1000660'>What's that Rhana?</span> </p><p><span
  m='1001940'>Rhana: 1 + 6  * 1 - 6</span> <span m='1004380'>Well wait a second.
  We could do that. But there's another thing we can do.</span> </p><p><span
  m='1009180'>Christian, have you got something you can suggest? Where's our
  Hungarian? Our Turk,</span> <span m='1017260'>our young Turk. Yeah, what do
  you think?</span> </p><p><span m='1022460'>AUDIENCE: I actually don't
  remember. I mean, I think it might have been 10.</span> </p><p><span
  m='1027060'>SPEAKER 1: Well, let's see. Cosine squared plus sine squared
  equals 1. So, what's that</span> <span m='1031859'>suggest to you? So it
  suggests that we make a transformation that involves x equals sine</span>
  <span m='1042060'>y. So [? Silla ?] doesn't actually have to remember that
  anymore because going forward,</span> <span m='1047648'>she will never have to
  integrate anything personally in her life, she can just simulate</span> <span
  m='1051640'>the program.</span> </p><p><span m='1069010'>So these go from
  polynomial form, back into trigonometric form. So you have three of
  these</span> <span m='1073760'>heuristic transformations. We've got four safe
  transformations. Let's see if we can</span> <span m='1079289'>make any
  progress on our integration problem.</span> </p><p><span m='1091160'>OK so
  keeping track of what we've been using, this is safe transformation number
  one, this</span> <span m='1099610'>is safe transformation number two. What do
  we do next? We decided there were no more</span> <span m='1104890'>safe
  transformations that apply. But now we can look at our heuristic
  transformations</span> <span m='1111190'>and behold, we see what?</span>
  </p><p><span m='1115150'>AUDIENCE: C</span> <span m='1115820'>SPEAKER 1:
  What?</span> </p><p><span m='1116920'>AUDIENCE: Applying transformation
  C.</span> </p><p><span m='1118470'>SPEAKER 1: Transformation C suggests that
  we do x equals the sine y.</span> </p><p><span m='1130710'>And now we get the
  integral of sine to the</span> <span m='1137490'>fourth y over cosine to the
  fourth y dy, right. All good, I see some confused, worried, concerned</span>
  <span m='1151380'>looks. Maybe I've made a mistake, perhaps I should use
  notes. Well no, wait a minute.</span> </p><p><span m='1159320'>For those of
  you who have a concerned look, remember that if x equals a sine y, then
  dx</span> <span m='1166429'>is equal to cosine y dy. That's why it's cosine to
  the fourth not cosine to the fifth, as</span> <span m='1173940'>you were
  perhaps thinking it might be.</span> </p><p><span m='1178580'>So now we've
  made some progress. We look at this, we say, are there any safe
  transformations</span> <span m='1185880'>that apply? And the answer is, no.
  Now we look for a heuristic transformation that might</span> <span
  m='1192450'>apply, and I say, what do you see? Which one? What's that?</span>
  </p><p><span m='1198029'>AUDIENCE: [INAUDIBLE].</span> </p><p><span
  m='1205880'>SPEAKER 1: She said something unintelligible, but what she
  probably said is, that this looks</span> <span m='1209750'>like a pattern that
  might match with the heuristic transformation A, right? Because we have
  a</span> <span m='1217029'>function in which the variable is buried,
  universally in sines, or cosines, or tangents,</span> <span m='1222320'>or
  cotangents, or secants, or cosecants. And we know we can rewrite that in one
  of three</span> <span m='1227649'>ways. It's already written as a function of
  sine and cosine. But we can also rewrite that</span> <span m='1235549'>in
  terms of tangent and cosecant. Or cotangent and secant.</span> </p><p><span
  m='1241809'>So when we do that, we can go this way, and we can get the
  integral of 1 over the cotangent</span> <span m='1250370'>of x dx. That's g3
  up there. Or we can do it down this path, and get the integral of</span> <span
  m='1263120'>tangent of x dx. And of course, those are both to the
  fourth.</span> </p><p><span m='1271200'>But know what, I've broken my little
  graphical diagram again. Where did it go, it's disappeared.</span>
  </p><p><span m='1283140'>There it is. How have I broken it? Because with
  transformation A, I've introduced a possibility</span> <span m='1295110'>that
  a particular problem can be transformed into more than one kind of problem,
  any of</span> <span m='1299220'>which will be the solution to my
  problem.</span> </p><p><span m='1303470'>So far I've got an and node, but now
  I've got to introduce an or node. Because now we</span> <span m='1320740'>have
  an example of something that can be solved one of two different ways, and we
  don't care</span> <span m='1324210'>which one it is. Now you'll notice that
  there's already some confusion here, because how can</span> <span
  m='1330399'>you tell the difference between an and node and an or node. So the
  universal convention</span> <span m='1333970'>is, you draw an arc over the and
  nodes. And that makes it look like an A, so it's easy</span> <span
  m='1340190'>to remember. So those are and nodes.</span> </p><p><span
  m='1342850'>And now, we have the method of problem reduction, and this is
  sometimes called a problem reduction</span> <span m='1350200'>tree. Sometimes
  it's called an and/or tree, and sometimes it's called a goal tree,
  because</span> <span m='1365750'>this tree of problems is a tree that shows
  how our goals are related to one another.</span> </p><p><span m='1373100'>So
  these are items for your vocabulary that are all synonymous. Problem reduction
  tree,</span> <span m='1377809'>and/or tree, goal tree, all the same thing. Now
  you have a name for it, you've got some</span> <span m='1382200'>power over
  it. So when we get a situation like this, unlike the previous
  situation,</span> <span m='1391279'>which we suggested might come up in
  transformation A. Let's see, we've got one, two, C, and this</span> <span
  m='1411880'>one is A, it's an or node. Which one of these problems do we work
  on?</span> </p><p><span m='1420010'>Well Slegle, who considered himself to be
  modeling a freshman, modeling the intelligence</span> <span m='1425360'>of a
  freshman, modeling something that, after all, you have to be pretty smart to
  do, right.</span> </p><p><span m='1432200'>Most people don't know how to do
  integration. Everybody at MIT knows how to do integration.</span> </p><p><span
  m='1437460'>You would think that somebody, therefore, that knows how to do
  integration is pretty</span> <span m='1440100'>smart. What would a smart
  person do, when faced with this choice?</span> </p><p><span m='1443980'>Well,
  a smart person would say, which of these two problems is easier? So how do you
  think</span> <span m='1452669'>you might determine which of two, or many
  algebraic expressions is the easiest to integrate?</span> </p><p><span
  m='1461800'>What's your name?</span> </p><p><span m='1462960'>AUDIENCE: Andrew
  Carrol.</span> </p><p><span m='1464120'>SPEAKER 1: Andrew, what do you
  think?</span> </p><p><span m='1466500'>AUDIENCE: Based on whichever one feels
  more familiar.</span> </p><p><span m='1468039'>SPEAKER 1: Feels.</span>
  </p><p><span m='1470010'>AUDIENCE: Yes.</span> </p><p><span
  m='1471809'>SPEAKER 1: Feels.</span> </p><p><span m='1472340'>AUDIENCE: You
  asked, how would I decide.</span> </p><p><span m='1472570'>SPEAKER 1: Yeah,
  how would you decide? How would you feel it?</span> </p><p><span
  m='1474760'>AUDIENCE: I would feel that the tangent is more familiar.</span>
  </p><p><span m='1477990'>SPEAKER 1: Which one?</span> </p><p><span
  m='1479679'>AUDIENCE: I feel that the tangent [INAUDIBLE].</span> </p><p><span
  m='1482850'>SPEAKER 1: Yeah, but I wonder how we could make it a little bit
  more precise, this idea</span> <span m='1484409'>of simplicity. The young Turk
  has a suggestion. What?</span> </p><p><span m='1492349'>AUDIENCE: I had a
  suggestion until you said this idea of simplicity. So then I realized</span>
  <span m='1497969'>that what I was about to suggest wasn't going to clarify
  simplicity, but I was going to</span> <span m='1502909'>say, whichever one
  we've had more encounters with, or more experience with.</span> </p><p><span
  m='1509289'>SPEAKER 1: Yeah, if there was something here with a hyperbolic
  tangent, you might say,</span> <span m='1512419'>well, stay away from that. [?
  Yinid ?]?</span> </p><p><span m='1515950'>AUDIENCE: To which one of those the
  easier transformation is applied on the next step.</span> </p><p><span
  m='1521399'>SPEAKER 1: Like, somebody do a little look ahead, and see which
  kind of thing would be</span> <span m='1524820'>next to you? I don't know,
  maybe. Oh, we've got lots of people, all at the same time.</span> </p><p><span
  m='1529640'>I don't know all your names yet. Shoot. Erica, I know you.</span>
  </p><p><span m='1533200'>AUDIENCE: What's look it up in the table and see
  [INAUDIBLE].</span> </p><p><span m='1535840'>SPEAKER 1: Oh, you could look it
  up in the table and see if something is in it, you could</span> <span
  m='1540300'>do that. But this is tangent to the fourth, so that's not in the
  table. Ariel?</span> </p><p><span m='1546840'>AUDIENCE: I choose the one
  without the reciprocal.</span> </p><p><span m='1549620'>SPEAKER 1: Why?</span>
  </p><p><span m='1550800'>AUDIENCE: It is because when people see one it's
  like, oh man, it jut not going to work.</span> </p><p><span
  m='1557740'>SPEAKER 1: Yeah, we're on the right track. Claire?</span>
  </p><p><span m='1560120'>AUDIENCE: On an extremely simple level, I choose
  whichever one has the least symbols</span> <span m='1563480'>in it.</span>
  </p><p><span m='1564680'>SPEAKER 1: The fewest symbols in it. Now we're really
  getting somewhere, because you can</span> <span m='1567060'>measure that,
  right, there's a little program Why Brett, there you are.</span> </p><p><span
  m='1572640'>AUDIENCE: I would say, every [INAUDIBLE] expression can be written
  as, having a number of functions,</span> <span m='1579800'>we could say all
  these functions, multiplied together, divided, and you can just choose</span>
  <span m='1583500'>with the least amount of [? iterations ?].</span>
  </p><p><span m='1586980'>SPEAKER 1: Well I heard it, perhaps others didn't but
  what Brett said, is he suggested</span> <span m='1591769'>that we should
  measure depth of functional composition. So the number of symbols may</span>
  <span m='1598040'>not matter, because if you have x plus x plus x plus x, out
  to a hundred, that would not</span> <span m='1602779'>be hard to integrate.
  But if you've got something that is really deeply nested under a lot of</span>
  <span m='1609620'>functional compositions, that could be a problem. And that's
  in fact, what Slegle decided to</span> <span m='1614860'>use, after trying
  several alternatives.</span> </p><p><span m='1620440'>So if we measure the
  depth of the functional composition, this is the winner, and we put</span>
  <span m='1626370'>the other one on the shelf, at least for the moment. And now
  we have tangent to the fourth</span> <span m='1631399'>x dx. Do I need the
  safe transformation supply? No. Which of the-- you know something has</span>
  <span m='1638809'>to apply, otherwise it wouldn't be up here as an example. So
  what of the heuristic transformation</span> <span m='1644440'>supply?
  Elliott.</span> </p><p><span m='1645289'>AUDIENCE: [INAUDIBLE]</span> <span
  m='1646460'>SPEAKER 1: Yeah, B bravo. Military background or something like
  that. Maybe</span> <span m='1650240'>he flies airplanes. OK so B says, it is
  in fact a function of the tangent. And when we</span> <span m='1658169'>do
  that, we've got to make a substitution, that y is equal to the tangent. So
  that means</span> <span m='1663529'>that this becomes the integral of y to the
  fourth over 1 plus y squared. And that's by</span> <span
  m='1675799'>transformation B, and the transformation is y equals tangent of x.
  The tangent-- I guess</span> <span m='1688059'>I've lost track of the fact
  that I've already transformed a y, but relabeling doesn't matter.</span>
  </p><p><span m='1697450'>All right so that's progress, maybe. But don't see
  this in any of the heuristic transformations,</span> <span m='1705769'>what do
  I do now? I didn't have to look in the heuristic transformations, because
  one</span> <span m='1710340'>of the safe transformations applies. Because this
  thing is a rational function and the</span> <span m='1719370'>degree of the
  numerator is greater that the degree of the denominator, so I have to
  divide.</span> </p><p><span m='1724120'>And when I divide, and that by the way
  is number four, I get what? Is anybody good high</span> <span
  m='1732240'>school algebra that can help me out with that?</span> </p><p><span
  m='1733960'>AUDIENCE: Y squared minus 2 plus negative 2 over 1 plus y
  squared</span> <span m='1739740'>SPEAKER 1: Exactly, y squared minus 1 plus 1
  over 1 plus y squared, I think. Now what?</span> </p><p><span m='1755679'>Now
  we're really getting close to getting through this, because that is a sum. And
  by</span> <span m='1771009'>virtue of the fact that it's a sum, that divides
  into three pieces, and the top piece is the</span> <span m='1778070'>integral
  of y squared, the middle piece is the integral of minus 1, and the bottom
  piece</span> <span m='1784399'>is the integral of 1 over 1 plus y squared dy
  in all cases.</span> </p><p><span m='1791929'>Gosh, if I look this up, I've
  found it. That's up there, that's letter B. So I'm done with</span> <span
  m='1806929'>that. This one I can transform again, by virtue of 1, and now I
  get the integral dy. That's</span> <span m='1816409'>in there, that's B as
  well. As this one, I don't know. But I'd better keep track of what</span>
  <span m='1824750'>I'm doing here. This is in the and node, so I've got to do
  all of those. I can't give</span> <span m='1827669'>up on that last thing. And
  that and transformation is transformation number 3. So this is in</span> <span
  m='1838139'>the table, this is in the table, we still have this to do, but
  that's C, heuristic transformation</span> <span m='1846710'>C. We have 1, plus
  y squared, then with the transformation C, with y-- this is y squared--</span>
  <span m='1858659'>y equals tangent of z And then we get to the integral of dz
  and that's in the table and,</span> <span m='1869149'>we're done.</span>
  </p><p><span m='1870889'>So now we've solved the problem. It's the hardest
  problem that appeared in that half</span> <span m='1876120'>decade on MIT 18
  01 finals. This is exactly the problem that was given, except that it</span>
  <span m='1884009'>started here. I put the other two pieces on just to
  illustrate a couple of the transformations.</span> </p><p><span
  m='1890080'>But that's a problem that it solved.</span> </p><p><span
  m='1895480'>And now that we've seen an example, we can finish up what we
  talked about a little bit</span> <span m='1902320'>ago, having to do with the
  architecture of this thing. So far, all we've done is talk</span> <span
  m='1911779'>about the safe transformations, but now we know that if we're not
  done, we need to find</span> <span m='1918040'>a problem to work on</span>
  <span m='1926860'>using that depth of functional composition business. And
  then after that we apply heuristic</span> <span
  m='1937159'>transformation.</span> </p><p><span m='1948820'>And the way Slagle
  designed his program is,</span> <span m='1951540'>he found just one problem to
  work on, did one transformation,</span> <span m='1954610'>then went back
  around the loop. Because these heuristic transformations are a little
  harder</span> <span m='1958600'>to apply than the safe ones. So I'll given you
  an accurate portrayal of what this program</span> <span m='1964679'>did,
  except for one thing. Which I would like, now, to go back and patch up. And
  that thing</span> <span m='1971169'>is over here. What to do with something
  like this. Well we got to that in a board that's</span> <span
  m='1989009'>disappeared, but when we tried to deal with this, we had to find a
  heuristic transformation.</span> </p><p><span m='1995350'>And when we decided
  to work on this, it must have been the case that this was the simplest</span>
  <span m='2000289'>problem at a leaf node that has not yet been solved.</span>
  </p><p><span m='2004370'>So what's the functional composition depth of this?
  It's 3. Back over here, we have something</span> <span m='2012559'>that has a
  depth of functional composition of 2. So when the program actually ran
  on</span> <span m='2017649'>this particular problem, it stopped a few inches
  short of the finish line, And went</span> <span m='2024029'>back and screwed
  around with that other problem for a little bit, before it gave up and
  came</span> <span m='2028720'>back here.</span> </p><p><span m='2030919'>So
  it's always looking across the whole tree, the leaves of the tree. Whenever it
  has to</span> <span m='2035669'>find a place to work on with the heuristic
  transformation, it happened to look at all</span> <span m='2039970'>the leaves
  of the tree that had not yet been dealt with, tried to find the easiest
  one,</span> <span m='2044159'>and that could involve a lot of backing up and
  starting over on a branch of the tree</span> <span m='2048550'>that it had
  previously ignored. A small detail, not a particularly important one.</span>
  </p><p><span m='2054710'>Now where are we. We've got that guy there. We've got
  our complete architecture. We've</span> <span m='2075620'>got our solved
  problem. And now we can start reflecting on what we've done. We can
  say,</span> <span m='2084300'>for example, how good an integration program is
  this? And the answer is, it was pretty</span> <span m='2089900'>good. This
  machine that Slagle was using was a machine that was over in building 26.
  And</span> <span m='2097970'>we were so proud of it, that it was behind glass,
  and you could go there and watch the</span> <span m='2101900'>tape spin, it
  was really a delight. 32k of memory, that's 32k of memory. It's amazing</span>
  <span m='2110610'>that he was able to do anything with a machine of that
  size.</span> </p><p><span m='2117440'>Let's see, let's get us a clean one.
  Can't do board geometry and talk at the same</span> <span m='2129740'>time. We
  can now ask some questions about how well the program performed. It was
  given</span> <span m='2140220'>56 of the hardest problems, and it got 54
  right. What happened when it didn't get the</span> <span m='2149000'>other
  two? Well, you might be right if you said, oh it probably ran out of memory,
  since</span> <span m='2155310'>it had 32k. But in fact, it just was lacking 2
  transformations that were needed, in order</span> <span m='2161280'>to solve
  the whole entire set of final quiz problems. So when a program fails,
  that's</span> <span m='2169930'>often the most interesting question you can
  ask. This is an exception. This failed for</span> <span
  m='2175270'>uninteresting reasons on 2 of the 56 problems that it was given
  to.</span> </p><p><span m='2180670'>And now the next question you can say is,
  what is the depth of the tree in the maximal</span> <span m='2190750'>case?
  And the answer is, it's that case we just worked out. And since I've once
  again</span> <span m='2196370'>lost the whole tree, I'll tell you that it's
  depth was 7 when you take off that minus 5.</span> </p><p><span m='2202880'>So
  in the worst case, this thing had to get down seven levels.</span>
  </p><p><span m='2211090'>That's the worst case, a more interesting question is
  what was the average depth? And</span> <span m='2220380'>that was
  approximately 3. And now we're beginning to say something, not only about
  Slagle's</span> <span m='2229900'>model of how a freshman works, but we're
  beginning to say something about the nature of the domain.</span> </p><p><span
  m='2236450'>In the domain of calculus problems, integrals expressions that are
  given to freshman, in</span> <span m='2241980'>that domain, the average depth
  of problem reduction needed to solve the problem was</span> <span
  m='2249670'>3. So that's not very complicated. If it were 10, you would say,
  wow, how can anybody ever</span> <span m='2255270'>do those problems? If it
  were 5, you'd say, well only people destined to be math professors</span>
  <span m='2262260'>are going to get anything right. If it's 3, us ordinary
  mortals can do a pretty good job.</span> </p><p><span m='2268590'>Another
  question of even greater interest is, how many branches were unused?
  Here's</span> <span m='2286040'>a branch that turned out to be unused, it
  didn't pursue that. And so you might say,</span> <span m='2290910'>well maybe
  there are a lot of unused branches. Maybe you have to be pretty smart about
  your</span> <span m='2297850'>method for determining what problem to work on,
  because otherwise you'll go down a lot</span> <span m='2301160'>of rat
  holes.</span> </p><p><span m='2303580'>And guess what, here's another
  statement about the domain. In the domain of problems that</span> <span
  m='2310250'>freshmen could work on a final, the number of unused branches is
  about 1. So that means</span> <span m='2318060'>this tree keeps itself
  together, and doesn't run down to a very large, bushy, useless tree.</span>
  </p><p><span m='2325690'>So this means that the depth of functional
  composition, which Brett suggested as a technique</span> <span m='2332320'>for
  recognizing the right problem work on, was a choice that didn't actually
  matter.</span> </p><p><span m='2339750'>Because the tree doesn't grow deep, it
  doesn't go broad. It doesn't matter what you use to</span> <span
  m='2345710'>decide what to work on, because in the worst case, you'll just
  generate a couple of extra,</span> <span m='2350110'>useless nodes. But they
  very quickly run to find a dead end, so you don't have to do anything</span>
  <span m='2354150'>more with them.</span> </p><p><span m='2359020'>So now the
  next thing we need to do is back even further away from this program, and
  ask</span> <span m='2364280'>ourselves some questions about the nature of what
  we've been doing. And that brings</span> <span m='2369370'>me to the things
  I've got on that upper right-hand board. One of those things as a
  catechism</span> <span m='2374170'>having to do with knowledge.</span>
  </p><p><span m='2377020'>And what we've done informally as we went through
  this program was, we've asked questions</span> <span m='2381050'>such as, what
  kind of knowledge is involved in doing this? Well knowledge about
  transformation.</span> </p><p><span m='2388530'>Knowledge about how goal trees
  work and when we're done with a problem. Knowledge about</span> <span
  m='2394770'>what things don't need to be transformed, because you can look
  them up in a table. That's</span> <span m='2399520'>the kind of knowledge that
  is involved in doing 18 01. And if you do 18 0 circuit theory,</span> <span
  m='2405890'>6 0 circuit theory or 6 0 Maxwell's equations, this is the same
  thing.</span> </p><p><span m='2411020'>You have to ask questions of this
  sort,</span> <span m='2414030'>about the nature of the knowledge involved, and
  question number one is always, what kind</span> <span m='2417430'>of knowledge
  is involved? Is it Kirchhoff's laws, Maxwell's equations, what is it?</span>
  </p><p><span m='2423440'>The next question is, how is the knowledge
  represented? And our answers here are, well</span> <span m='2427440'>all this
  stuff, ultimately was represented in list best expressions. Some of the</span>
  <span m='2432700'>knowledge was recorded in a table [? of best ?] expressions
  to show what transformations</span> <span m='2437040'>there are. There was a
  similar table of integrals. Knowledge about goal trees was embedded in</span>
  <span m='2443930'>the procedure, so it was procedurally represented. And so
  for each of the categories of knowledge,</span> <span m='2449970'>there's a
  way it gets represented. How is it used? Straightforward,
  transformations</span> <span m='2456550'>are used to make the problem simpler.
  The table is used to trim off and to serve as</span> <span m='2462390'>the
  bottom of the tree. Those are the ways in which the knowledge is used.</span>
  </p><p><span m='2466530'>And then there's the question of course of, how much
  knowledge is required. Something</span> <span m='2473440'>that's useful to
  know if it's late at night, you have 2 finals the next day, and you're</span>
  <span m='2479180'>not sure which course you should study. So how much
  knowledge might you suppose was actually</span> <span m='2484640'>in this
  program? I've shown you a glimpse of the kind of knowledge that's involved
  in</span> <span m='2489960'>the program. I've answered a little bit of
  question 5, what exactly. But how much knowledge</span> <span m='2494710'>was
  involved. You might be surprised by the answer.</span> </p><p><span
  m='2496910'>First of all, the table of integrals. I've listed only 3 things
  there. There are lots</span> <span m='2504540'>of other things you can think
  of, like integral of e to the x is e to the x. But in the end,</span> <span
  m='2510770'>what Slagle found is, a table only 26 elements was enough to solve
  all of these problems.</span> </p><p><span m='2518310'>How about the
  transformations here, the safe ones, about 12. How about the heuristic
  ones,</span> <span m='2531320'>about 12. So just a few bits and pieces of
  knowledge, here and there, are sufficient</span> <span m='2537490'>to do
  everything you need to do, in order to do the integration problems on a
  calculus</span> <span m='2542370'>final. That was a surprise.</span>
  </p><p><span m='2545520'>Another surprise of a similar kind, also about
  knowledge, is that the relationship between</span> <span m='2551140'>the
  method to be used, and the characteristics of the problem, was almost a
  diagonal table.</span> </p><p><span m='2560400'>That means that you could, in
  this domain, make the right transformation almost all the</span> <span
  m='2566850'>time if you're a little bit smart, and never back up. That was an
  observation made by Joel</span> <span m='2572300'>Moses, who became
  subsequently our provost here at MIT for a while. And he wrote a
  program</span> <span m='2578210'>that could solve anything. It would beat the
  most dedicated mathematicians at integration.</span> </p><p><span
  m='2585760'>And its descendents are in MATLAB today.</span> </p><p><span
  m='2588610'>But this is how it all works. And now you can write one of these
  things yourself. Partly</span> <span m='2592570'>because you now have this
  catechism. This is the kind of stuff you should ask any time</span> <span
  m='2598300'>you're dealing with a new domain. It will make you smarter. And
  this is of course, meta</span> <span m='2604320'>knowledge, this is knowledge
  about knowledge. So this tired aphorism isn't quite what we</span> <span
  m='2610970'>are going to complete ourselves with. We're going to say that
  knowledge about knowledge</span> <span m='2623810'>is where the real power
  is.</span> </p><p><span m='2625850'>Now there's one final thing that this
  program does for us. It tells us something about our</span> <span
  m='2632790'>appreciation of what it means to be intelligent. You know that in
  the beginning of this hour,</span> <span m='2638280'>I asked you to think
  about whether a program that could do symbolic integration would be,</span>
  <span m='2644260'>in any way, or should be considered to any degree,
  intelligent. And I'm imagining that</span> <span m='2652480'>even in these
  days of MATLAB, and whatnot, many of you said well, yes, I learned how</span>
  <span m='2657820'>to do that at MIT, or late in high school, so it must be
  smart.</span> </p><p><span m='2663190'>But now that we've completed this
  discussion, I also expect that your feeling of intelligence</span> <span
  m='2669410'>in this program is somewhat diminished. Because what happens is
  that, when we understand how</span> <span m='2674740'>something works, it's
  intelligence seems to vanish. You've seen this in your friends,</span> <span
  m='2679890'>right? They solve some problem, they seem super smart. Then they
  tell you how they did</span> <span m='2686740'>it, and they don't seem so
  smart anymore.</span> </p><p><span m='2690830'>So let's conclude our
  discussion today was a little story. A long time ago I was talking</span>
  <span m='2699860'>with a student who said, computers cannot be intelligent.
  And I said, OK, maybe you're</span> <span m='2708030'>right, but let me show
  you this program. So I showed him the integration program, working</span>
  <span m='2712100'>on problems like this. And after I showed him a couple of
  those examples, he says, well,</span> <span m='2718580'>all right, I guess
  maybe they can be intelligent. I'm learning how to do that, and it's
  not</span> <span m='2723460'>always easy. Then I made a fatal mistake. I said
  let me show you how it works, and we</span> <span m='2730830'>spent an hour
  going through it like this. And at the end of that time, he turned to</span>
  <span m='2735280'>me and said, I take it back, it's not intelligent after all.
  It does integration the same way</span> <span m='2742050'>I do.</span> </p>
uid: 29f6f34ca41676d9835e4aca5039592f
type: courses
layout: video
---
