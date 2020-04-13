---
title: 'Lecture 11: Learning: Identification Trees, Disorder'
uid: 342cedb5e418c11da216a12272faae2c
parent_uid: 28d36d6426366698bf1ded18c6190be7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-11-learning-identification-trees-disorder
short_url: lecture-11-learning-identification-trees-disorder
inline_embed_id: '77601421lecture11:learning:identificationtrees,disorder92265325'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, we build an identification
  tree based on yes/no tests.  We start by arranging the tree based on tests
  that result in homogeneous subsets. For larger datasets, this is generalized
  by measuring the disorder of subsets.</p> <p><strong>Instructor:</strong>
  Patrick H. Winston</p>
related_resources_text: ''
transcript: >-
  <p><span m='9310'>PATRICK WINSTON: Ladies and gentlemen, the Romanian</span>
  <span m='11300'>national anthem.</span> </p><p><span m='12960'>I did not ask
  you to stand, because I didn't play it as a</span> <span m='15930'>symbol of
  Romanian national identity.</span> </p><p><span m='18250'>But rather, to
  celebrate the end of the Cold War, which</span> <span m='21580'>occurred about
  the time that you were born.</span> </p><p><span m='24740'>Before that, no one
  came to MIT from Eastern Europe.</span> </p><p><span m='28980'>But since that
  time, we've been blessed by having in our</span> <span m='33070'>midst
  Lithuanians, Estonians, Poles, Czecs, Slovaks,</span> <span
  m='40850'>Bulgarians, Romanians, Slovenians, Serbs, and all</span> <span
  m='47400'>sorts of people from regions of the world</span> <span
  m='50510'>formally excluded to us.</span> </p><p><span m='53580'>Believe me,
  you are all welcome in our house.</span> </p><p><span m='57900'>Almost all,
  that is to say.</span> </p><p><span m='60110'>Because you may recall that
  Romania is the traditional</span> <span m='64530'>home of vampires.</span>
  </p><p><span m='67430'>And since the end of the Cold War, vampires have had
  new</span> <span m='70180'>vectors for emerging from their traditional places
  and</span> <span m='74360'>penetrating into the world at large.</span>
  </p><p><span m='76010'>You may have vampire in your suite, or on your
  floor.</span> </p><p><span m='82560'>And it's important to know how to
  recognize them, and take</span> <span m='86740'>the necessary
  precautions.</span> </p><p><span m='90420'>So if you have this concern, I
  would expect that the first</span> <span m='96860'>thing you would do would be
  to look at some data concerning</span> <span m='100009'>the characteristics of
  vampires.</span> </p><p><span m='115550'>So there's a little database of
  samples of individuals who</span> <span m='120460'>have been determined to be
  vampires and not vampires.</span> </p><p><span m='126560'>And our task
  today--</span> <span m='128020'>and what you'll understand how to do by the
  end of the hour--</span> <span m='130919'>is to use data like this to build a
  recognition mechanism</span> <span m='134640'>that would help you to identify
  whether someone is a</span> <span m='137740'>vampire or an ordinary
  person.</span> </p><p><span m='141000'>So this is a little different from the
  kind of problem we</span> <span m='144079'>worked with neural nets.</span>
  </p><p><span m='147360'>Right?</span> </p><p><span m='147700'>So what's the
  most conspicuous difference between this data</span> <span m='152579'>set and
  anything you could think to work on with nearest</span> <span
  m='158590'>neighbors, which we studied last time.</span> </p><p><span
  m='160079'>Katie, do you have any thoughts about why it would be</span> <span
  m='162772'>difficult to use nearest neighbors with data like this?</span>
  </p><p><span m='168260'>The question mark is there because this is MIT, and a
  lot</span> <span m='171690'>of people are completely nocturnal.</span>
  </p><p><span m='173170'>So you can't tell whether they cast a shadow or
  not.</span> </p><p><span m='177630'>We want to take that into account.</span>
  </p><p><span m='181220'>So what's different about this from the</span> <span
  m='184150'>electrical cover data set?</span> </p><p><span m='186851'>STUDENT:
  [INAUDIBLE]</span> <span m='192810'>PATRICK WINSTON: Could you use the nearest
  neighbor technique</span> <span m='194550'>to identify vampires with this
  data?</span> </p><p><span m='198180'>STUDENT: [INAUDIBLE]</span> <span
  m='205620'>PATRICK WINSTON: So obviously--</span> <span m='207120'>Yes,
  Lana?</span> </p><p><span m='209831'>STUDENT: [INAUDIBLE]</span> <span
  m='213807'>STUDENT: You cannot really quantify--</span> <span
  m='215800'>PATRICK WINSTON: Oh, that's the problem.</span> </p><p><span
  m='217110'>This is not numerical data.</span> </p><p><span m='218970'>This is
  symbolic.</span> </p><p><span m='221138'>So we're not saying that your ability
  to</span> <span m='224579'>cast a shadow is 0.7.</span> </p><p><span
  m='227320'>You either cast a shadow, down cast a</span> <span
  m='229970'>shadow, or we can't tell.</span> </p><p><span m='231200'>It's a
  symbolic result.</span> </p><p><span m='233770'>So problem number one we have
  to face with data of this kind</span> <span m='237810'>is that it's not
  numeric.</span> </p><p><span m='245480'>And there are other characteristics,
  as well.</span> </p><p><span m='247950'>For example, it's not clear that all
  of these</span> <span m='251180'>characteristics actually matter.</span>
  </p><p><span m='253820'>So some characteristics don't matter.</span>
  </p><p><span m='266460'>And a corollary to that is that some characteristics
  do</span> <span m='269990'>matter, but they only matter part of the
  time.</span> </p><p><span m='292240'>And finally, there's the matter of
  cost.</span> </p><p><span m='298880'>Some of these tests may be more expensive
  to</span> <span m='301400'>perform than others.</span> </p><p><span
  m='303350'>For example, if you wanted to determine whether someone</span>
  <span m='305740'>casts a shadow, you'd have to go to the trouble of
  getting</span> <span m='307930'>up during daylight.</span> </p><p><span
  m='309970'>That might be an expensive operation for you.</span> </p><p><span
  m='315100'>You'd have to go find some garlic and ask them to eat it.</span>
  </p><p><span m='317570'>That might be expensive.</span> </p><p><span
  m='319070'>So some of these tests might be expensive</span> <span
  m='321140'>relative to other tests.</span> </p><p><span m='323560'>But once
  you realize that we are talking in terms of tests,</span> <span m='328110'>and
  not a vector of real values, then</span> <span m='332530'>what you do is
  clear.</span> </p><p><span m='334920'>You build yourself a little tree of
  tests.</span> </p><p><span m='340680'>So who knows how this problem will turn
  out?</span> </p><p><span m='343810'>But you can imagine a situation where you
  have one</span> <span m='347210'>test up here which might have three
  outcomes.</span> </p><p><span m='352740'>And one but only one of those
  outcomes might require you to</span> <span m='357520'>perform another
  test.</span> </p><p><span m='361020'>And only when you've created the tree of
  tests that look</span> <span m='365940'>like this are you finished.</span>
  </p><p><span m='370540'>So given this set of tests and a set of samples, the
  question</span> <span m='375060'>becomes, how do you arrange the tests in a
  tree like that</span> <span m='378640'>so as to do the identification that you
  want to do?</span> </p><p><span m='382250'>So since we're talking about
  identification, it's not</span> <span m='385030'>surprising that this kind of
  tree is called an</span> <span m='388250'>identification tree.</span>
  </p><p><span m='401560'>And there's a tendency-- and I may slip into it
  myself-- to</span> <span m='404420'>call this a decision tree.</span>
  </p><p><span m='406210'>But a decision tree is a label for something
  else.</span> </p><p><span m='408970'>This is an identification tree.</span>
  </p><p><span m='411060'>And the task is to create a good one.</span>
  </p><p><span m='415170'>So what is a good one versus a not so good one?</span>
  </p><p><span m='419330'>What characteristic would you like for a decision
  tree--</span> <span m='425010'>for an identification trade to have, if you're
  going to call</span> <span m='428250'>it good identification tree?</span>
  </p><p><span m='432170'>What do you think, Krishna?</span> </p><p><span
  m='433265'>What would be a good characteristic?</span> </p><p><span
  m='435964'>STUDENT: Maybe the minimum number of levels?</span> </p><p><span
  m='438399'>PATRICK WINSTON: Yeah.</span> </p><p><span m='438886'>He said
  minimum number of levels.</span> </p><p><span m='442110'>What's another way
  you could say what a good one is?</span> </p><p><span m='446960'>Each test
  costs something, right?</span> </p><p><span m='448680'>So what's another way
  of thinking about what a good</span> <span m='452050'>tree would look
  like?</span> </p><p><span m='453864'>STUDENT: Minimum cost.</span>
  </p><p><span m='454820'>PATRICK WINSTON: The minimum cost.</span> </p><p><span
  m='456280'>And if they all have the same cost, then it's</span> <span
  m='459810'>the number of tests.</span> </p><p><span m='461770'>So overall,
  what you like is a small tree</span> <span m='465530'>rather than a big
  one.</span> </p><p><span m='467400'>So you might be able to take your sample
  data and divide it</span> <span m='469730'>up, so that at the bottom of the
  tree, at the leaves, all</span> <span m='473190'>of the sets that are produced
  by the tests are uniform,</span> <span m='477380'>homogeneous.</span>
  </p><p><span m='479070'>We'd like that tree to be the simplest possible tree
  you can</span> <span m='481905'>find, not some big complicated one that also
  divides up all</span> <span m='485460'>the data into uniform subsets.</span>
  </p><p><span m='488920'>By uniform subset--</span> <span m='490070'>at the
  bottom of the tree, you have all of the vampires</span> <span
  m='493100'>together, and all the non-vampires together.</span> </p><p><span
  m='496980'>So you'd like a small tree.</span> </p><p><span m='497840'>So why
  not just go all the way and do British Museum, and</span> <span
  m='503590'>calculate all possible trees?</span> </p><p><span m='505946'>Well,
  you can do that, but it's one of those NP problems.</span> </p><p><span
  m='508730'>And as you know, NP problems suck in general.</span> </p><p><span
  m='512620'>And so you don't want to do that.</span> </p><p><span
  m='513929'>You want to have some kind of heuristic mechanism for</span> <span
  m='517820'>building a small tree.</span> </p><p><span m='519640'>And we want a
  small tree because--</span> <span m='522590'>Why do we want a small
  tree?</span> </p><p><span m='523900'>Because of the cost.</span> </p><p><span
  m='525040'>but there's another, more important reason why we want a</span>
  <span m='526870'>small tree.</span> </p><p><span m='528025'>Let me give you a
  hint.</span> </p><p><span m='530250'>It's Occam's Razor.</span> </p><p><span
  m='532090'>The simplest explanation is often the best explanation.</span>
  </p><p><span m='537110'>So if you have a big, complicated explanation,</span>
  <span m='538650'>that's probably less good than a simple, small
  explanation.</span> </p><p><span m='546150'>Occam's Razor.</span> </p><p><span
  m='547400'>Spelled so many ways it doesn't matter how I spell it.</span>
  </p><p><span m='550290'>And that's good, because I can't spell.</span>
  </p><p><span m='555260'>So how are we going to go about finding the
  best</span> <span m='560040'>possible arrangement of those four tests</span>
  <span m='564180'>in a tree like that?</span> </p><p><span m='566470'>Well,
  step one will be to see what each test</span> <span m='569630'>does with the
  data.</span> </p><p><span m='570340'>And by the way, before I go a step
  further, you know and I</span> <span m='576070'>know that this is a sample
  data set that's very small,</span> <span m='580740'>suitable for classroom
  manipulation.</span> </p><p><span m='583090'>You'd never bet your life on a
  data set this small.</span> </p><p><span m='587090'>We use it only for
  classroom illustration.</span> </p><p><span m='589020'>But imagine that these
  rows are multiplied by 10.</span> </p><p><span m='591970'>So instead of eight
  samples, you've got 80.</span> </p><p><span m='595500'>Then you might begin to
  believe the</span> <span m='596670'>results that are produced.</span>
  </p><p><span m='598220'>So I'm just going to pretend that each one of
  those</span> <span m='600700'>represents 10 other samples that I</span> <span
  m='604330'>haven't bothered to show.</span> </p><p><span m='607530'>But we can
  work with this one in the classroom, because it's</span> <span
  m='610290'>pretty small.</span> </p><p><span m='610990'>And we can say, well,
  what does this shadow test do?</span> </p><p><span m='616034'>Well, the shadow
  test divides the sample population into</span> <span m='620310'>three
  groups.</span> </p><p><span m='621780'>There's the I Don't Know group of
  people who are nocturnal.</span> </p><p><span m='624790'>There are the people
  who do cast the</span> <span m='626110'>shadow, the Yes people.</span>
  </p><p><span m='628360'>And the people who do not cast a shadow, the No
  people.</span> </p><p><span m='632220'>So if I look at those rows up there and
  see which ones are</span> <span m='637430'>vampires, it looks to me that if
  there's no shadow cast--</span> <span m='644440'>there's only one that doesn't
  cast a shadow--</span> <span m='646140'>and that is a vampire.</span>
  </p><p><span m='651670'>So that's a plus over there.</span> </p><p><span
  m='653950'>Vampire.</span> </p><p><span m='656400'>Now, if we look at the ones
  who do cast a shadow, all</span> <span m='659680'>those are not
  vampires.</span> </p><p><span m='660715'>They're all OK.</span> </p><p><span
  m='665870'>And now there're 8.</span> </p><p><span m='667520'>Three are
  vampires.</span> </p><p><span m='669450'>So that means that two of these must
  be vampires.</span> </p><p><span m='673040'>And I've got three, four, five,
  six so far.</span> </p><p><span m='675420'>So there must be two left.</span>
  </p><p><span m='677340'>So that's the way the shadow test divides up the
  data.</span> </p><p><span m='680730'>Now let's do garlic.</span> </p><p><span
  m='685620'>Vampires traditionally don't eat garlic.</span> </p><p><span
  m='688040'>I don't know why.</span> </p><p><span m='691710'>So we look at the
  garlic test, and we see</span> <span m='693480'>that all of the Nos--</span>
  <span m='697010'>well, there're three Yeses, and they all</span> <span
  m='699880'>produce a No answer.</span> </p><p><span m='701920'>So if somebody
  eats garlic, they're not vampires.</span> </p><p><span m='706590'>That means
  the three vampires must be over here.</span> </p><p><span m='709650'>Then
  there are two left.</span> </p><p><span m='710580'>So that's what the garlic
  test does.</span> </p><p><span m='713040'>See what we're trying to do?</span>
  </p><p><span m='713960'>We're trying to look at all these tests to see which
  one</span> <span m='716530'>we like best on the basis of how it divides up the
  data.</span> </p><p><span m='721220'>So now we've got complexion.</span>
  </p><p><span m='733210'>And there are three choices for this.</span>
  </p><p><span m='735970'>You can have an average complexion.</span>
  </p><p><span m='737530'>But a lot of vampires, in my experience, are rather
  pale.</span> </p><p><span m='741490'>So pale is a possibility.</span>
  </p><p><span m='743650'>And then the other option is that just after
  gorging</span> <span m='746210'>themselves with blood, they tend to get
  a</span> <span m='747610'>little red in the face.</span> </p><p><span
  m='749300'>So we'll have a ruddy over here.</span> </p><p><span
  m='752640'>Once again, we have to go back to our data set to see how</span>
  <span m='755650'>this test divides things up.</span> </p><p><span
  m='757640'>So there are three ruddies, and one's a No, one's a No,</span>
  <span m='763980'>and one's a Yes.</span> </p><p><span m='764670'>So two Nos
  and a Yes.</span> </p><p><span m='769650'>Two Nos and a Yes.</span>
  </p><p><span m='772680'>Now we can try for pale complexion people.</span>
  </p><p><span m='775300'>There are only two of those.</span> </p><p><span
  m='777100'>A No and a No.</span> </p><p><span m='783310'>That must mean that
  there are two pluses over here, because</span> <span m='786310'>there are
  three vampires altogether.</span> </p><p><span m='788370'>Two, four, six,
  seven, eight, nine.</span> </p><p><span m='793681'>Eight, sorry.</span>
  </p><p><span m='794848'>Eight.</span> </p><p><span m='795724'>Only
  eight.</span> </p><p><span m='797480'>Just one more to go, and that's the
  accent.</span> </p><p><span m='802520'>Historically, vampires go to great
  length to protect their</span> <span m='807560'>accent and not betray their
  origins.</span> </p><p><span m='809600'>But nevertheless, we can expect that
  if</span> <span m='812900'>they've just arrived--</span> <span m='813850'>if
  they're just in from</span> <span m='815450'>Transylvania, part of
  Romania--</span> <span m='817470'>they may still have an accent.</span>
  </p><p><span m='818590'>So there's a normal, some still have a heavy accent,
  and</span> <span m='821950'>some persist in having odd accents.</span>
  </p><p><span m='829940'>So let's see.</span> </p><p><span
  m='831090'>Accent.</span> </p><p><span m='831660'>Four of them, right at the
  top, have no accent.</span> </p><p><span m='834630'>Two Nos and a Yes.</span>
  </p><p><span m='843050'>Heavy accent.</span> </p><p><span m='844930'>Three of
  those.</span> </p><p><span m='845910'>A Yes and two Nos.</span> </p><p><span
  m='853190'>That means we must have a plus here.</span> </p><p><span
  m='855710'>3, 6, plus and a minus.</span> </p><p><span m='860790'>So we can
  look at this data and say, well, what will be</span> <span m='864400'>the best
  test to use?</span> </p><p><span m='865610'>And the best test to use would
  surely be the one that</span> <span m='870860'>produces sets here, at the
  bottom of the branches, that</span> <span m='876710'>correspond to the
  outcomes of the test.</span> </p><p><span m='878950'>We're looking for a test
  that produces homogeneous groups.</span> </p><p><span m='884750'>So just for
  the sake of illustration, I'm going to</span> <span m='888120'>suppose that
  we're going to judge the quality of the test</span> <span m='891200'>by how
  many sample individuals it put into a homogeneous set.</span> </p><p><span
  m='896010'>So ideally, we'd like a test that will put all the vampires</span>
  <span m='900910'>in one group and all the ordinary people in another</span>
  <span m='903670'>group right off the bat.</span> </p><p><span m='905530'>But
  there are no such tests.</span> </p><p><span m='907260'>But we can add up the
  number of sample individuals who are</span> <span m='911400'>put in to at
  least homogeneous sets.</span> </p><p><span m='914460'>So when we do that,
  this guy has 3 in a</span> <span m='918140'>homogeneous set here.</span>
  </p><p><span m='919470'>A fourth.</span> </p><p><span m='920480'>But these are
  not a homogeneous set.</span> </p><p><span m='922770'>So the overall score for
  this guy will be 4.</span> </p><p><span m='928740'>This one, well, not quite
  as good.</span> </p><p><span m='931690'>It only puts 3 individuals in a
  homogeneous set.</span> </p><p><span m='938110'>This one here, 2 individuals
  into a homogeneous set.</span> </p><p><span m='942870'>Everybody else is all
  mixed up with some</span> <span m='945150'>other kind of person.</span>
  </p><p><span m='946950'>And over here, how many samples are in</span> <span
  m='949920'>a homogeneous set?</span> </p><p><span m='951670'>0.</span>
  </p><p><span m='955260'>So on the basis of this analysis, you would
  conclude</span> <span m='959370'>that the ordering of the test with respect to
  their quality</span> <span m='962470'>is left to right.</span> </p><p><span
  m='964250'>So the best test must be the shadow test.</span> </p><p><span
  m='967210'>So let's pick the shadow test first, see what</span> <span
  m='971840'>we can do with that.</span> </p><p><span m='973330'>If we pick the
  shadow test first, then we have this</span> <span
  m='976850'>arrangement.</span> </p><p><span m='980080'>We have question mark,
  and we have Yes, casts a shadow, and</span> <span m='985200'>No,
  doesn't.</span> </p><p><span m='986610'>We have 3 minuses here.</span>
  </p><p><span m='988800'>We have a plus here.</span> </p><p><span
  m='990290'>And unfortunately, over here, we have plus,</span> <span
  m='992890'>plus, minus, minus.</span> </p><p><span m='994060'>So we need
  another test to divide that group up.</span> </p><p><span
  m='997757'>Yes.</span> </p><p><span m='998731'>STUDENT: How did you get the 4
  on the shadow test again?</span> </p><p><span m='1001653'>Why was it 4?</span>
  </p><p><span m='1004100'>PATRICK WINSTON: Well, if I look at the</span> <span
  m='1004760'>data and I see who--</span> <span m='1008870'>the question is,
  what about that shadow test?</span> </p><p><span m='1011100'>If you look at
  the shadow test, and you say, well, there</span> <span m='1012990'>are 4
  question marks.</span> </p><p><span m='1015270'>And if we look and see what
  kind of people belong to those</span> <span m='1017210'>4 question marks,
  there are 2 vampires and 2 non-vampires.</span> </p><p><span
  m='1020990'>That's why it's 2 pluses and 2 minuses.</span> </p><p><span
  m='1022760'>STUDENT: No, I understand that.</span> </p><p><span
  m='1024148'>The question is, how did you get to the score of 4?</span>
  </p><p><span m='1027853'>PATRICK WINSTON: Oh, yeah.</span> </p><p><span
  m='1030450'>The question is how did I get this number 4?</span> </p><p><span
  m='1032780'>It has nothing to do this, because this is a mixed set.</span>
  </p><p><span m='1034829'>In fact, I've got three guys in a homogeneous set
  here, and</span> <span m='1037810'>one guy in a homogeneous set here, and
  I'm</span> <span m='1039240'>just adding them up.</span> </p><p><span
  m='1040398'>STUDENT: OK.</span> </p><p><span m='1041079'>PATRICK WINSTON: So
  very simple classroom illustration.</span> </p><p><span m='1043190'>Wouldn't
  work in practice.</span> </p><p><span m='1044790'>Yes.</span> </p><p><span
  m='1045098'>STUDENT: How do you adjust this for larger data sets</span> <span
  m='1047969'>where it's unlikely you're going to have any [INAUDIBLE]?</span>
  </p><p><span m='1050390'>PATRICK WINSTON: The question is, how do I adjust
  this for</span> <span m='1051770'>larger data sets?</span> </p><p><span
  m='1052580'>You're one step ahead.</span> </p><p><span m='1058540'>Trust me,
  I'll be doing large data sets in a moment.</span> </p><p><span m='1060540'>I
  just want to get the idea across.</span> </p><p><span m='1063550'>And I don't
  want there to be any thought that the method we</span> <span m='1066210'>use
  for larger data sets has got anything magic about it.</span> </p><p><span
  m='1070720'>OK, so we're off and running.</span> </p><p><span m='1072450'>And
  now we have to pick a test that will divide</span> <span m='1076710'>those
  four guys up.</span> </p><p><span m='1078590'>So we're going to have to work
  this a little harder, and</span> <span m='1082060'>repeat the analysis we did
  there.</span> </p><p><span m='1083610'>But at least it'll be simpler, because
  now we're only</span> <span m='1085350'>considering 4 samples, not 8.</span>
  </p><p><span m='1087220'>Just the 4 samples that we still have to divide up
  that</span> <span m='1089930'>have come down that left branch.</span>
  </p><p><span m='1092240'>So I have the shadow test.</span> </p><p><span
  m='1098190'>It has 3 outcomes.</span> </p><p><span m='1099580'>We have the
  garlic test.</span> </p><p><span m='1104000'>It has 2 outcomes.</span>
  </p><p><span m='1106080'>Yes and No.</span> </p><p><span m='1107560'>We have
  the complexion test.</span> </p><p><span m='1114290'>There's 3
  outcomes.</span> </p><p><span m='1117100'>Average, pale, and ruddy.</span>
  </p><p><span m='1120230'>And we have finally the accent test.</span>
  </p><p><span m='1124860'>And that comes out to be either normal, heavy, or
  odd.</span> </p><p><span m='1130610'>And now, it's a little awkward to figure
  out what the results</span> <span m='1133340'>are for this data set as
  shown.</span> </p><p><span m='1136500'>So let me just strike out.</span>
  </p><p><span m='1140910'>The ones that we're no longer concerned with, and
  limit our</span> <span m='1144000'>analysis to the samples for which the
  outcome of the</span> <span m='1147240'>shadow test is a question mark.</span>
  </p><p><span m='1148790'>This is exactly the four people we still need
  to</span> <span m='1150740'>separate, right?</span> </p><p><span
  m='1153240'>So switching colors, keeping the color the same.</span>
  </p><p><span m='1158170'>We actually don't want to do the shadow</span> <span
  m='1160460'>test anymore, right?</span> </p><p><span m='1161340'>Because we've
  already done that.</span> </p><p><span m='1162810'>There's no point in doing
  that again.</span> </p><p><span m='1164100'>We don't have to look at
  that.</span> </p><p><span m='1167170'>It's already done all the division of
  data that it can.</span> </p><p><span m='1170890'>So the garlic test.</span>
  </p><p><span m='1172260'>Well, let's see.</span> </p><p><span
  m='1173050'>Garlic.</span> </p><p><span m='1173920'>2 Yeses, 2 Nos.</span>
  </p><p><span m='1175480'>The Yeses produce Nos and the Nos produce
  Yeses.</span> </p><p><span m='1179040'>So if the person does eat garlic,
  they're OK.</span> </p><p><span m='1184210'>And if they don't eat garlic, bad
  news-- they're vampires.</span> </p><p><span m='1188686'>Well, that looks like
  a pretty good test.</span> </p><p><span m='1190320'>But just for the sake of
  working it all out, let's try</span> <span m='1192420'>the others.</span>
  </p><p><span m='1193820'>Complexion.</span> </p><p><span m='1196920'>2
  Ruddies, a Yes, and a No.</span> </p><p><span m='1205190'>1 pale, and that's a
  No.</span> </p><p><span m='1209540'>1 pale, and that's a No.</span>
  </p><p><span m='1212370'>And we must have 1 average, and sure enough, that's a
  Yes.</span> </p><p><span m='1217590'>Now we can do accent, the one on the far
  right, and look at</span> <span m='1219790'>how that measures up against the
  people who are still under</span> <span m='1223820'>consideration as
  samples.</span> </p><p><span m='1225860'>Accent.</span> </p><p><span
  m='1226550'>Let's see.</span> </p><p><span m='1226990'>2 Nones, a Yes and a
  No.</span> </p><p><span m='1233930'>No Heavies.</span> </p><p><span
  m='1234840'>2 Odds, a Yes and a No.</span> </p><p><span m='1239396'>All
  right.</span> </p><p><span m='1239850'>So now we can do the same thing we did
  before, and just</span> <span m='1242060'>say, for sake of classroom
  illustration, how many</span> <span m='1245400'>individuals are put into a
  homogeneous sets.</span> </p><p><span m='1248230'>And here we have 4.</span>
  </p><p><span m='1251120'>And here we have 2.</span> </p><p><span
  m='1254830'>And here we have 0.</span> </p><p><span m='1258420'>So plainly,
  the garlic test is the test of choice.</span> </p><p><span m='1262000'>So we
  go back over here, and we've completed the work that</span> <span
  m='1264810'>we needed to do.</span> </p><p><span m='1266860'>So that's the
  garlic test.</span> </p><p><span m='1269970'>And that produces 2
  pluses.</span> </p><p><span m='1273070'>Let's see.</span> </p><p><span
  m='1274630'>Eats garlic, Yes.</span> </p><p><span m='1276340'>Eats garlic,
  No.</span> </p><p><span m='1278480'>I guess the pluses go over here like
  so.</span> </p><p><span m='1282565'>And these are the two ordinary
  people.</span> </p><p><span m='1284860'>And we're done with our task.</span>
  </p><p><span m='1286710'>And now you can quickly run off and put this into
  your</span> <span m='1290080'>PDA, and forever be protected against the
  possibility that</span> <span m='1293360'>one of those vampires got out in the
  flood of people that</span> <span m='1296135'>came in from Eastern
  Europe.</span> </p><p><span m='1298380'>Except what do we do a large data
  set?</span> </p><p><span m='1302220'>Well, the trouble is, a large data
  set's</span> <span m='1304280'>not likely to produce--</span> <span
  m='1312130'>if you have a large data set, no test is likely to put</span>
  <span m='1315320'>together any homogeneous set right off.</span> </p><p><span
  m='1318310'>So you never get started.</span> </p><p><span
  m='1320300'>Everything would be 0.</span> </p><p><span m='1322210'>Every test
  would say, oh it doesn't put anybody into</span> <span m='1325110'>homogeneous
  sets.</span> </p><p><span m='1326280'>So you're screwed.</span> </p><p><span
  m='1330910'>You need some other, more sophisticated way of measuring</span>
  <span m='1336000'>how disordered this data is.</span> </p><p><span
  m='1337580'>Or how disordered these sets are that you find at the</span> <span
  m='1342040'>bottom of the tree branches.</span> </p><p><span
  m='1344740'>That's what you need.</span> </p><p><span m='1345500'>You need a
  way of measuring disorder of these sets that</span> <span m='1351130'>you find
  at the bottom of these branches, so you can</span> <span m='1354740'>find a
  kind of overall quality to the test based on your</span> <span
  m='1357750'>measurement of disorder.</span> </p><p><span m='1360250'>Now, the
  first heuristic of a good life is, when you have a</span> <span
  m='1364010'>problem to solve, ask somebody who knows the answer.</span>
  </p><p><span m='1367120'>It's the least amount of work.</span> </p><p><span
  m='1368180'>It's not even as hard going to Google.</span> </p><p><span
  m='1371060'>So who would you ask about ways of</span> <span
  m='1375010'>measuring disorder in sets?</span> </p><p><span m='1378260'>There
  are two possible answers.</span> </p><p><span m='1385050'>STUDENT: You could
  just do entropy.</span> </p><p><span m='1387060'>PATRICK WINSTON: What?</span>
  </p><p><span m='1387325'>STUDENT: Find the entropy of the set.</span>
  </p><p><span m='1389840'>PATRICK WINSTON: Who studies entropy?</span>
  </p><p><span m='1391345'>STUDENT: Probability.</span> </p><p><span
  m='1393350'>PATRICK WINSTON: What kind of classes?</span> </p><p><span
  m='1395402'>STUDENT: Physics.</span> </p><p><span m='1395898'>STUDENT:
  Thermodynamics.</span> </p><p><span m='1396890'>PATRICK WINSTON:
  Thermodynamics!</span> </p><p><span m='1398415'>The thermodynamicists are good
  at measuring disorder, because</span> <span m='1401125'>that's what
  thermodynamics is all about.</span> </p><p><span m='1402900'>Entropy
  increasing over time, and all that sort of stuff.</span> </p><p><span
  m='1405640'>There's another equally good answer.</span> </p><p><span
  m='1408834'>STUDENT: Statisticians?</span> </p><p><span m='1410720'>PATRICK
  WINSTON: Statisticians.</span> </p><p><span m='1413400'>Perhaps, but it's not
  the second best answer.</span> </p><p><span m='1417680'>It's actually not even
  the best answer.</span> </p><p><span m='1419190'>That's the best
  answer.</span> </p><p><span m='1419930'>What's your name?</span> </p><p><span
  m='1420643'>STUDENT: Leo.</span> </p><p><span m='1421510'>PATRICK WINSTON: Oh,
  yeah.</span> </p><p><span m='1425322'>[LAUGHTER]</span> <span
  m='1429150'>PATRICK WINSTON: Leonardo has got his finger on it.</span>
  </p><p><span m='1430870'>The information theorists are pretty good at
  measuring</span> <span m='1433420'>disorder, because that's what information
  is all about, too.</span> </p><p><span m='1437440'>So we might as well borrow
  a mechanism for measuring the</span> <span m='1440130'>disorder of a set from
  those information theory guys.</span> </p><p><span m='1443970'>So what we're
  going to do is exactly that.</span> </p><p><span m='1448610'>Let's put it over
  here, so we'll have it handy when we</span> <span m='1451760'>want to try to
  measure those things.</span> </p><p><span m='1456910'>The gospel according to
  information theorists is that</span> <span m='1461800'>the disorder, D, or
  some set is equal to-- now let's</span> <span m='1468910'>suppose that this is
  a set of binary values.</span> </p><p><span m='1472500'>So we have positives
  and then we have negatives.</span> </p><p><span m='1474720'>Pluses and
  minuses.</span> </p><p><span m='1476490'>But pluses, they don't go very well
  in an algebraic equation,</span> <span m='1479640'>because they might be
  confused with adding.</span> </p><p><span m='1481790'>So I'm going to say P
  and N. And then it'll be the total,</span> <span m='1485900'>which is P plus
  N. We only have two choices,</span> <span m='1488030'>positive and
  negative.</span> </p><p><span m='1490090'>So the disorder of set, according
  those guys, is equal</span> <span m='1493850'>to minus the number of positives
  over the total</span> <span m='1499400'>number, times the log to the base 2 of
  the positives over</span> <span m='1505440'>the total, minus the negatives
  over the total, times the log</span> <span m='1513260'>2 of the negatives over
  the total.</span> </p><p><span m='1516270'>Those negatives look a little
  worrisome, because you think,</span> <span m='1518780'>well, maybe this thing
  can go negative.</span> </p><p><span m='1520210'>But that's not going to be
  true, right?</span> </p><p><span m='1521390'>Because these ratios are all less
  than 1, and the logarithm</span> <span m='1526170'>of something that's less
  than 1 is negative.</span> </p><p><span m='1529830'>So we're OK.</span>
  </p><p><span m='1532770'>So that's a lovely way of measuring disorder.</span>
  </p><p><span m='1537040'>And then we ought to draw a graph of what</span>
  <span m='1539020'>that curve looks like.</span> </p><p><span m='1544370'>And
  what we're going to graph it against is the ratio of</span> <span
  m='1547720'>positives to the total number.</span> </p><p><span m='1552500'>So
  that's going to be an axis where we go from 0 to 1.</span> </p><p><span
  m='1561140'>So let's just find a couple of useful values.</span> </p><p><span
  m='1565750'>And by the way, it pays to pay attention to these curves,</span>
  <span m='1568920'>because if you pay attention to this stuff, you can
  work</span> <span m='1571890'>the quiz questions on this very rapidly.</span>
  </p><p><span m='1574980'>Otherwise, we see people getting out their
  calculators</span> <span m='1579460'>and quickly becoming both lost and
  screwed.</span> </p><p><span m='1584020'>OK so let's see.</span> </p><p><span
  m='1586160'>Let's suppose that the number of positives is equal to the</span>
  <span m='1589100'>number of negatives.</span> </p><p><span m='1589810'>So
  we've got a completely mixed-up set.</span> </p><p><span m='1592260'>It has no
  bias in either direction.</span> </p><p><span m='1594470'>So in that case, if
  P over T is equal to 1/2, then this is</span> <span m='1601310'>equal to minus
  1/2, times the logarithm of 1/2.</span> </p><p><span m='1611230'>And I guess,
  since they're both the same, we</span> <span m='1613360'>can multiply by
  two.</span> </p><p><span m='1615400'>And what's that value?</span>
  </p><p><span m='1620596'>[INAUDIBLE], what does that calculate out to?</span>
  </p><p><span m='1624768'>STUDENT: Minus [INAUDIBLE]</span> <span
  m='1626716'>PATRICK WINSTON: Minus [INAUDIBLE].</span> </p><p><span
  m='1629650'>Well, with a minus sign, you just turn the argument upside</span>
  <span m='1631790'>down, so it's log(2).</span> </p><p><span m='1632950'>So
  what's log(2)?</span> </p><p><span m='1634890'>Logarithm of base 2 of
  2?</span> </p><p><span m='1638920'>1!</span> </p><p><span m='1639870'>So this
  whole thing is--</span> <span m='1642720'>STUDENT: 1.</span> </p><p><span
  m='1643020'>PATRICK WINSTON: 1.</span> </p><p><span m='1644000'>So
  [INAUDIBLE], in her soft way, says, well, let's see.</span> </p><p><span
  m='1647650'>2 times 1/2.</span> </p><p><span m='1648800'>That cancels
  out.</span> </p><p><span m='1649710'>The minus, that flips the arguments so
  it's log to the</span> <span m='1652680'>base 2 of 2, and that's 1.</span>
  </p><p><span m='1655640'>So this whole thing, You work out the algebra,</span>
  <span m='1658785'>it gives you 1.</span> </p><p><span m='1660710'>So that's
  cool.</span> </p><p><span m='1663740'>So right here in the middle where
  they're equal, we get a</span> <span m='1667460'>value of 1.</span>
  </p><p><span m='1671800'>Next thing we need to do is let's calculate what
  happens</span> <span m='1674610'>if P over T is equal to 1.</span>
  </p><p><span m='1679610'>That is to say, everything is a positive.</span>
  </p><p><span m='1681450'>Any guesses?</span> </p><p><span m='1683100'>Maybe
  10, 20, minus 15?</span> </p><p><span m='1686410'>Let's work it out.</span>
  </p><p><span m='1688650'>So if P over T equal 1, that would be minus 1 times
  the log</span> <span m='1696946'>to the base 2 of 1.</span> </p><p><span
  m='1701120'>What's that?</span> </p><p><span m='1702642'>STUDENT:
  [INAUDIBLE]</span> <span m='1704040'>PATRICK WINSTON: A 0?</span> </p><p><span
  m='1705570'>Oh, yeah.</span> </p><p><span m='1705910'>Because 2 raise to the 0
  is one.</span> </p><p><span m='1710430'>So this part is 0.</span> </p><p><span
  m='1714310'>Now, what about this other part?</span> </p><p><span
  m='1718810'>If everything's a P, then nothing's an N.</span> </p><p><span
  m='1721190'>So we've got 0.</span> </p><p><span m='1722320'>And we can quit
  already.</span> </p><p><span m='1724820'>Well, not quite.</span> </p><p><span
  m='1725590'>We ought to work it out.</span> </p><p><span m='1726710'>Log 2 to
  the base 2 of 0.</span> </p><p><span m='1730290'>What's that?</span>
  </p><p><span m='1731344'>STUDENT: [INAUDIBLE]</span> <span m='1733320'>PATRICK
  WINSTON: Who?</span> </p><p><span m='1734710'>Minus infinity?</span>
  </p><p><span m='1736110'>Uh oh.</span> </p><p><span m='1737100'>0 times minus
  infinity is What I didn't get that when I was</span> <span m='1740140'>in high
  school.</span> </p><p><span m='1742470'>Finally, 1801 makes a
  difference.</span> </p><p><span m='1746550'>Finally.</span> </p><p><span
  m='1747390'>What's the answer.</span> </p><p><span m='1749630'>We're
  interested in the limit as N over T goes to 0, right?</span> </p><p><span
  m='1756280'>And when you have a deal like this, what do you do?</span>
  </p><p><span m='1760392'>You use that famous rule, that we all mispronounce
  when we</span> <span m='1765330'>see it written, right?</span> </p><p><span
  m='1767600'>We use the good old El Hospital's rule.</span> </p><p><span
  m='1771240'>OK, it's L'Hopital.</span> </p><p><span m='1773210'>L'Hopital's
  Rule.</span> </p><p><span m='1774610'>You have to differentiate the--</span>
  <span m='1776720'>I guess we differentiate this guy as a ratio or
  something,</span> <span m='1780880'>and see what happens when it goes to
  0.</span> </p><p><span m='1782610'>And what we get when we use L'Hopital's
  Rule is that, oh</span> <span m='1786130'>thank God, this is still
  zero.</span> </p><p><span m='1790100'>So now we know that we have a point up
  there and a point</span> <span m='1792980'>down there.</span> </p><p><span
  m='1795740'>So now we've got three points on the curve,</span> <span
  m='1797410'>and we can draw it.</span> </p><p><span m='1801310'>It goes like
  that.</span> </p><p><span m='1805140'>No, it doesn't go like that.</span>
  </p><p><span m='1806260'>It's obviously a Gaussian, right?</span> </p><p><span
  m='1808400'>Because everything in a nature is a Gaussian.</span> </p><p><span
  m='1810240'>Can you put that laptop away, please?</span> </p><p><span
  m='1811640'>Everything in nature is a Gaussian, so</span> <span m='1813260'>it
  looks like this.</span> </p><p><span m='1818158'>That right?</span>
  </p><p><span m='1821020'>No, actually, not everything in nature is a
  Gaussian.</span> </p><p><span m='1823840'>And in particular, this one isn't a
  Gaussian either.</span> </p><p><span m='1826880'>It looks more like one of
  those metal things they used</span> <span m='1830400'>to call quonset
  huts.</span> </p><p><span m='1832660'>That's what it looks like.</span>
  </p><p><span m='1834612'>Boom, like so.</span> </p><p><span m='1837100'>So
  that is the curve of interest.</span> </p><p><span m='1840270'>Now, did God
  say that using this way of measuring disorder</span> <span m='1843540'>was the
  best way?</span> </p><p><span m='1845950'>No, Got has not indicated any choice
  here.</span> </p><p><span m='1851930'>We use this because it's a convenient
  mechanism, it seems</span> <span m='1855570'>to make sense, but in contrast to
  the reason it's used</span> <span m='1858440'>information theory, it's not the
  result of some elegant</span> <span m='1861690'>mathematics.</span>
  </p><p><span m='1862270'>It's just a borrowing of something that seems to
  work</span> <span m='1864870'>pretty well.</span> </p><p><span m='1866870'>Any
  of those curves would work just about the same, because</span> <span
  m='1869560'>all we're doing with it is measuring how</span> <span
  m='1871240'>disordered a set is.</span> </p><p><span m='1873780'>So one thing
  to note here is that in this situation, where</span> <span m='1878950'>we're
  dealing with two choices--</span> <span m='1880350'>P and N, positives and
  negatives--</span> <span m='1883340'>we get a curve that maxes out at
  one.</span> </p><p><span m='1886450'>And notice that it kind of gets up there
  pretty fast.</span> </p><p><span m='1888830'>In fact, if you're down here at
  2/3, are you're up here,</span> <span m='1893890'>this is about 0.9.</span>
  </p><p><span m='1899090'>So it gives you a large number for quite a bit of
  that area</span> <span m='1903770'>in the middle.</span> </p><p><span
  m='1905940'>So that, unfortunately, still doesn't tell us everything we</span>
  <span m='1909210'>need to know.</span> </p><p><span m='1909550'>That tells us
  how to measure a disorder in one of these sets.</span> </p><p><span
  m='1913700'>But we want to know how to measure the quality of the</span> <span
  m='1915680'>test overall.</span> </p><p><span m='1917750'>So we need some
  mechanism that says, OK, given that this test</span> <span
  m='1920950'>produces three different sets, and we now have a measure of</span>
  <span m='1924370'>the disorder in each of these sets, how do we measure
  the</span> <span m='1928100'>overall quality of the test?</span> </p><p><span
  m='1931496'>Well, you could just add up the disorder.</span> </p><p><span
  m='1934360'>Let's write that down, because that sounds good.</span>
  </p><p><span m='1943960'>So you can say that the quality of a test is equal
  to</span> <span m='1953200'>some sum over the sets produced.</span>
  </p><p><span m='1961280'>And what we're going to do is we're going to add up
  the</span> <span m='1962640'>disorder of each of those sets.</span>
  </p><p><span m='1969380'>I'm almost home, except that this means we're going
  to give</span> <span m='1973220'>equal weight to a branch that has almost
  nothing down it--</span> <span m='1980210'>we're going to give the same weight
  to that as a branch</span> <span m='1983190'>that has almost everything going
  down it.</span> </p><p><span m='1985920'>So that doesn't seem that make
  sense.</span> </p><p><span m='1987150'>So one final flourish is we're going to
  weight this sum</span> <span m='1992050'>according to the fraction of the
  samples that end up down</span> <span m='1996360'>that branch.</span>
  </p><p><span m='1998200'>So it's, as usual, easier to write it down than to
  say it.</span> </p><p><span m='2001840'>So we're going to multiply that times
  the number of</span> <span m='2007370'>samples in the set, divided by the
  number of</span> <span m='2021530'>samples handled by test.</span>
  </p><p><span m='2034610'>So if half the samples go down a branch, and if that
  branch</span> <span m='2037570'>has a certain disorder, then we're going to
  multiply that</span> <span m='2041500'>disorder times 1/2.</span> </p><p><span
  m='2044090'>All right.</span> </p><p><span m='2044570'>So now let's see how it
  works with our sample problem.</span> </p><p><span m='2048610'>Well, here is
  our sample data.</span> </p><p><span m='2051139'>And we didn't need anything
  fancy for it.</span> </p><p><span m='2052780'>But let's pretend it was a large
  data set.</span> </p><p><span m='2056270'>Well, let's see.</span> </p><p><span
  m='2056790'>What would we do?</span> </p><p><span m='2057590'>Well, go down
  this way, there are 4</span> <span m='2063020'>samples down that
  direction.</span> </p><p><span m='2064639'>That's half of the total number of
  samples.</span> </p><p><span m='2066790'>So whatever we find down there, we're
  going</span> <span m='2068139'>to multiply by 1/2.</span> </p><p><span
  m='2069820'>This one we're going to multiply by 3/8.</span> </p><p><span
  m='2072150'>And this one we're going to multiply by 1/8.</span> </p><p><span
  m='2075889'>Now, what do we actually find at the bottom of these
  things?</span> </p><p><span m='2077969'>Well, here's a homogeneous set.</span>
  </p><p><span m='2080170'>Everything's the same.</span> </p><p><span
  m='2081770'>So we go to that curve and say, what is the disorder of a</span>
  <span m='2084560'>homogeneous set?</span> </p><p><span m='2085949'>It's
  zero.</span> </p><p><span m='2090380'>Let's see, they're all the same.</span>
  </p><p><span m='2092090'>I guess that means it's 0 over there.</span>
  </p><p><span m='2097640'>So the disorder of this set of three samples is
  zero.</span> </p><p><span m='2104470'>The disorder of this set of one sample,
  all</span> <span m='2107260'>the same, is zero.</span> </p><p><span
  m='2110110'>The disorder of this set-- well, let's see.</span> </p><p><span
  m='2113720'>Half of the samples there are plus, and half are minus, so</span>
  <span m='2116780'>we go over to our curve, and we say, what's the disorder
  of</span> <span m='2120830'>something with equal mixture of pluses and
  minuses?</span> </p><p><span m='2123640'>And that's one.</span> </p><p><span
  m='2125500'>So the disorder of this guy is one.</span> </p><p><span
  m='2128560'>So now we've got 1/2 times 1, and 3/8 times 0, 1/8 times 0.</span>
  </p><p><span m='2133590'>So the quality of this particular test, as
  determined</span> <span m='2138660'>by the disorder of the sets it produces,
  is 1/5.</span> </p><p><span m='2143770'>0.5.</span> </p><p><span
  m='2148420'>Let's do this one.</span> </p><p><span m='2150420'>So we have 3/8
  coming down this way, 5/8</span> <span m='2153910'>coming down this
  way.</span> </p><p><span m='2155270'>3/8 is multiplied by the disorder of
  a</span> <span m='2157610'>set of uniform things.</span> </p><p><span
  m='2158730'>That's disorder 0.</span> </p><p><span m='2161370'>So this guy
  over here, let's see.</span> </p><p><span m='2164540'>That's 2/5 and 3/5
  multiplied--</span> <span m='2169160'>You know, this is one of those deals
  where if you look at the</span> <span m='2171010'>curve, you're pretty close
  to the middle.</span> </p><p><span m='2174840'>And that curve goes all the way
  up to about 0.9 there.</span> </p><p><span m='2178470'>So you can kind of just
  look at this, and eyeball it, and</span> <span m='2180560'>say, well, whatever
  it is, the overall, this is going to be</span> <span m='2187010'>something
  multiplied times 5/8.</span> </p><p><span m='2189060'>Something like 0.9 times
  5/8.</span> </p><p><span m='2191680'>So let's just say, for the sake of
  discussion, that</span> <span m='2195440'>that's going to be about 0.6, which
  is within a hundredth, I</span> <span m='2199550'>think, of being
  right.</span> </p><p><span m='2201340'>Just kind of guessing.</span>
  </p><p><span m='2204220'>OK, well now we're on a roll.</span> </p><p><span
  m='2205440'>Here, we have 3/8 coming down this branch, 3/8 coming down</span>
  <span m='2209040'>this branch, 1/4 coming down this branch.</span>
  </p><p><span m='2212640'>This is 0.</span> </p><p><span m='2214510'>And this
  is one of those deals where these two are about 0.9.</span> </p><p><span
  m='2218910'>So it looks like it's going to be 3/8 plus 3/8 is 3/4.</span>
  </p><p><span m='2225680'>Times about 0.9.</span> </p><p><span m='2227640'>So
  that's going to turn out to be about 0.7.</span> </p><p><span m='2237710'>So
  one last go here.</span> </p><p><span m='2239230'>3/8, 3/8, and 1/4.</span>
  </p><p><span m='2244850'>Oh, that's interesting.</span> </p><p><span
  m='2246280'>Because these two are what we got</span> <span
  m='2249890'>contributed up to that 0.7.</span> </p><p><span m='2252490'>This
  one is 0.4 times--</span> <span m='2254390'>this is evenly divided, so that's
  going to</span> <span m='2257090'>have disorder of 1.</span> </p><p><span
  m='2260380'>So that's going to be 0.25 bigger than the</span> <span
  m='2263910'>number we got over here.</span> </p><p><span m='2265610'>So that's
  going to end up being about 0.95.</span> </p><p><span m='2271410'>So thanks
  god our answer is the same as we got with our</span> <span m='2273980'>simple
  classroom measurement of disorder.</span> </p><p><span m='2277130'>Except this
  is measuring how disordered stuff is, we want</span> <span m='2279800'>the
  small number, not the big number.</span> </p><p><span m='2282520'>So once
  again, based on this analysis, you'll be sure to</span> <span m='2286110'>pick
  the shadow cast, because 0.5 is less than 0.6, which is</span> <span
  m='2290730'>less than 0.7, which is less than 0.95.</span> </p><p><span
  m='2293640'>So that accent test is really horrible.</span> </p><p><span
  m='2296310'>Don't use it.</span> </p><p><span m='2298380'>Just because
  somebody has a heavy accent doesn't mean</span> <span m='2300160'>they're a
  vampire.</span> </p><p><span m='2301430'>In fact, most vampires have worked
  very hard on their</span> <span m='2304240'>accent, as I mentioned
  before.</span> </p><p><span m='2306450'>All right, so now we know that we're
  still going to pick the</span> <span m='2308470'>shadow test as our first
  go.</span> </p><p><span m='2312440'>So that's good.</span> </p><p><span
  m='2314040'>Now, let's see if we can repeat the exercise with our</span> <span
  m='2316460'>second selection, the one we have to have to pick those</span>
  <span m='2319290'>guys apart.</span> </p><p><span m='2320910'>And this is
  going to be easier, because there are</span> <span m='2322760'>fewer things to
  work with.</span> </p><p><span m='2324280'>Ooh, wow, look.</span> </p><p><span
  m='2325700'>That's 0.</span> </p><p><span m='2327930'>That's 0.</span>
  </p><p><span m='2329030'>That's 1/2.</span> </p><p><span m='2330530'>That's
  1/2.</span> </p><p><span m='2333000'>So the disorder of this guy is
  0.0.</span> </p><p><span m='2338030'>So this is 1/4, 1/4, 1/2, 0, 0.</span>
  </p><p><span m='2345630'>1/2 times 1.</span> </p><p><span m='2347140'>Ooh,
  that's 0.5.</span> </p><p><span m='2349590'>That was easy.</span> </p><p><span
  m='2350500'>How about this one?</span> </p><p><span m='2351740'>Oh, he says
  1.</span> </p><p><span m='2353300'>Let's see.</span> </p><p><span
  m='2353500'>That's 1.</span> </p><p><span m='2354210'>That's 1.</span>
  </p><p><span m='2355170'>That's 1/2.</span> </p><p><span m='2356130'>That's
  1/2.</span> </p><p><span m='2356890'>Yeah, it is one.</span> </p><p><span
  m='2360130'>So sure enough, the answer also comes out to be the same</span>
  <span m='2362480'>as before, when we did our just</span> <span
  m='2364450'>simple intuition exercise.</span> </p><p><span m='2367160'>So I
  don't know.</span> </p><p><span m='2368710'>Christopher, is this all about
  using information theory?</span> </p><p><span m='2373895'>STUDENT: No.</span>
  </p><p><span m='2374320'>PATRICK WINSTON: No, no, no.</span> </p><p><span
  m='2378230'>See, it's not about the math.</span> </p><p><span m='2380010'>It's
  about the intuition.</span> </p><p><span m='2381000'>And the intuition is that
  you want to build a tree that's as</span> <span m='2383630'>simple as
  possible.</span> </p><p><span m='2384750'>And you can build a tree that's as
  simple as possible</span> <span m='2387500'>if you look at the data, and say,
  well, which test does the</span> <span m='2390610'>best job of splitting
  things up?</span> </p><p><span m='2392640'>Which test does the best job of
  building subsets underneath</span> <span m='2396150'>it that are as
  homogeneous as possible?</span> </p><p><span m='2399310'>So all this
  information theory, all this entropy</span> <span m='2403330'>stuff, is just a
  convenient mechanism for doing something</span> <span m='2407290'>that is
  intuitionally sound.</span> </p><p><span m='2409440'>OK?</span> </p><p><span
  m='2410175'>It's not about information theory.</span> </p><p><span
  m='2411840'>It's about a sound intuition.</span> </p><p><span m='2415990'>Oh,
  by the way.</span> </p><p><span m='2416400'>Does this kind of stuff ever get
  used in practice?</span> </p><p><span m='2419440'>10s of thousands of
  times.</span> </p><p><span m='2421780'>This is a winning mechanism that's used
  over and over</span> <span m='2425400'>again, even when the data is
  numeric.</span> </p><p><span m='2430320'>How would it work if it's numeric
  data?</span> </p><p><span m='2432170'>Well, let's think about that for a
  little bit.</span> </p><p><span m='2441820'>So let's suppose that we have an
  opportunity.</span> </p><p><span m='2445620'>We're an EMT or something, we
  work in the infirmary.</span> </p><p><span m='2448430'>What do they call it
  these days?</span> </p><p><span m='2449360'>Something else.</span>
  </p><p><span m='2449940'>But anyhow, you work in that kind of area, and you
  have the</span> <span m='2452500'>opportunity to take people's
  temperature.</span> </p><p><span m='2455420'>And so over time, you've
  accumulated some data on the</span> <span m='2460230'>temperature of
  people.</span> </p><p><span m='2462320'>And maybe you've found that there's a
  vampire</span> <span m='2464020'>here at about 102.</span> </p><p><span
  m='2467140'>There's a normal person here, about 98.6.</span> </p><p><span
  m='2469980'>But then they're scattered around.</span> </p><p><span
  m='2474590'>Some people have fevers when they come in.</span> </p><p><span
  m='2476960'>So the question is, is there a way of using numerical
  data--</span> <span m='2479950'>things that you can put real numbers--</span>
  <span m='2482750'>is there a way of using that with this mechanism?</span>
  </p><p><span m='2485180'>And the answer is yes.</span> </p><p><span
  m='2486320'>You just say, is the temperature greater than or</span> <span
  m='2489180'>less than some threshold?</span> </p><p><span m='2490910'>And that
  gives you a test, a binary test, just like any of</span> <span
  m='2493620'>these other tests.</span> </p><p><span m='2496460'>[? Krishna?
  ?]</span> <span m='2497000'>Right?</span> </p><p><span m='2498930'>But where
  would I put the threshold?</span> </p><p><span m='2504660'>I suppose I could
  just put it at the average value.</span> </p><p><span m='2508480'>But that
  might not be the place that does the best job</span> <span m='2511100'>of
  splitting the samples into homogeneous groups.</span> </p><p><span
  m='2517400'>Christopher?</span> </p><p><span m='2517690'>STUDENT: So you run
  this numerical analysis on</span> <span m='2519788'>different places with
  different thresholds.</span> </p><p><span m='2521150'>PATRICK WINSTON: So you
  try different places, he says.</span> </p><p><span m='2524070'>And he's
  right.</span> </p><p><span m='2525340'>Because this is a computer, this is our
  slave.</span> </p><p><span m='2527980'>We don't care how much it works to
  figure</span> <span m='2529930'>out the right threshold.</span> </p><p><span
  m='2531660'>So what we do is we say, well, maybe the threshold's
  halfway</span> <span m='2535610'>between those two guys, or halfway between
  those two</span> <span m='2537835'>guys, or those two guys, or those two
  guys,</span> <span m='2539450'>or those two guys.</span> </p><p><span
  m='2540940'>So we can try one less threshold</span> <span m='2542540'>than we
  have samples.</span> </p><p><span m='2543600'>And we don't care if there are
  10,000 samples, because this</span> <span m='2545600'>is a computer, and we
  don't care if it works all night.</span> </p><p><span m='2548720'>So that's
  how you find the threshold for a numeric test.</span> </p><p><span
  m='2552750'>By the way, I assured you earlier on you would never use</span>
  <span m='2554520'>the same test twice.</span> </p><p><span m='2555360'>Is that
  true for this?</span> </p><p><span m='2558190'>Yes, you would still never use
  the same test twice.</span> </p><p><span m='2559910'>But what you might do is
  you might use a different</span> <span m='2561320'>threshold on the same
  measurement</span> <span m='2564860'>the next time around.</span> </p><p><span
  m='2566940'>So when you start having numerical data, you may find</span> <span
  m='2569480'>yourself using the same test with the same axis but with a</span>
  <span m='2577730'>different value.</span> </p><p><span m='2580000'>All
  right.</span> </p><p><span m='2580330'>So now that we have this, then we can
  go back and compare how</span> <span m='2585500'>this method would look when
  we put it up against the sort of</span> <span m='2590660'>stuff we were
  talking about last time, with</span> <span m='2595290'>the electrical
  covers.</span> </p><p><span m='2600980'>So with the electrical covers, we had
  a situation like this.</span> </p><p><span m='2605020'>I don't know.</span>
  </p><p><span m='2605470'>We had samples that were places like this, and we had
  a</span> <span m='2611290'>division of the space that look pretty much like
  that.</span> </p><p><span m='2617220'>Not quite exactly in the right spots,
  but pretty close.</span> </p><p><span m='2622000'>So these are the decision
  boundaries for the situation</span> <span m='2625660'>where we are using
  nearest neighbors to</span> <span m='2627540'>divide up the data.</span>
  </p><p><span m='2630608'>What would the decision boundaries look like if
  these</span> <span m='2633310'>were four different kinds of things, and we
  were using this</span> <span m='2637940'>kind of mechanism?</span>
  </p><p><span m='2641560'>And maybe there's a lot of samples all clustered
  around</span> <span m='2644640'>places like that.</span> </p><p><span
  m='2647170'>What would the decision boundaries look like?</span> </p><p><span
  m='2649280'>Would they be the same as this?</span> </p><p><span
  m='2651830'>god, I hope not.</span> </p><p><span m='2652470'>Why?</span>
  </p><p><span m='2654400'>Because what we're going to do is we're going to use
  a</span> <span m='2656700'>threshold on each axis.</span> </p><p><span
  m='2660320'>So therefore, the decision boundaries are going to be</span> <span
  m='2662990'>parallel to one axis or the other.</span> </p><p><span
  m='2666100'>So we might decide, for example--</span> <span m='2669460'>Oh,
  shoot.</span> </p><p><span m='2670220'>I think I'll draw it again, because
  it'll get confused if</span> <span m='2672480'>I draw it over the other
  one.</span> </p><p><span m='2674530'>So it looks like this.</span>
  </p><p><span m='2677720'>And that's how nearest neighbors does it.</span>
  </p><p><span m='2680270'>But a identification tree approach will pick a
  threshold</span> <span m='2684540'>along one axis or the other.</span>
  </p><p><span m='2685870'>Let's say it's this axis.</span> </p><p><span
  m='2688340'>It's only got one choice there.</span> </p><p><span m='2689580'>So
  it's going to put a line there.</span> </p><p><span m='2693370'>And now,
  what's the next thing it does?</span> </p><p><span m='2695820'>Well, it still
  has these two different kinds</span> <span m='2699370'>of things to
  separate.</span> </p><p><span m='2700250'>We're going to assume we've got
  four</span> <span m='2701300'>different kinds of things.</span> </p><p><span
  m='2703380'>So it's going to say, oh!</span> </p><p><span m='2706220'>I've
  Come down the negative side, so I need a threshold on</span> <span
  m='2712650'>the remaining data.</span> </p><p><span m='2714440'>And these are
  the only two things that are now remaining.</span> </p><p><span m='2717260'>So
  my only choice is to put a threshold in there.</span> </p><p><span
  m='2723030'>Now I guarantee this, absolutely guaranteed--</span> <span
  m='2726370'>on the quiz, somebody--</span> <span m='2728570'>presumably
  somebody who doesn't go to lectures--</span> <span m='2731090'>will draw that
  line all the way across.</span> </p><p><span m='2732890'>And that's
  desperately wrong.</span> </p><p><span m='2735730'>Because we've already
  divided this data set in half.</span> </p><p><span m='2739780'>Now the choice
  of what we do over here is governed only by</span> <span m='2743170'>the
  remaining samples that we see, these two.</span> </p><p><span m='2746270'>And
  so the threshold is going to go in there like that.</span> </p><p><span
  m='2752150'>So that's what happens when you go back.</span> </p><p><span
  m='2755050'>This is used 10s of thousands of times.</span> </p><p><span
  m='2759270'>Always used.</span> </p><p><span m='2760250'>What are the virtues
  of it?</span> </p><p><span m='2761460'>Number one, you don't use all the
  tests.</span> </p><p><span m='2765360'>You use only the test that seem to be
  doing some useful</span> <span m='2767630'>work for you.</span> </p><p><span
  m='2769250'>So that means that you do a better job, because your</span> <span
  m='2771750'>measurement technique is simpler.</span> </p><p><span
  m='2773580'>And it costs less, because you're not going to the</span> <span
  m='2777220'>expense of doing all of the testing.</span> </p><p><span
  m='2781140'>So it's a real winner.</span> </p><p><span m='2782910'>But you
  know what?</span> </p><p><span m='2784230'>Some classes of people--</span>
  <span m='2786200'>not scientists, but I mean people like doctors and
  stuff.</span> </p><p><span m='2790420'>They don't like to look at these
  tress.</span> </p><p><span m='2793750'>They're kind of rule-oriented.</span>
  </p><p><span m='2796170'>So they look a tree like this for determining what
  kind of</span> <span m='2800370'>thyroid disease you have, and it would have
  maybe 20 or so</span> <span m='2805420'>tests in it of various kinds of
  hormones, like thyroxine</span> <span m='2808670'>and this and that.</span>
  </p><p><span m='2810200'>And they say, ah, we can't deal with that.</span>
  </p><p><span m='2812560'>So we have to work with them.</span> </p><p><span
  m='2816400'>So what we do is we convert the tree into a set of rules.</span>
  </p><p><span m='2821230'>How do we convert the tree into a set of
  rules?</span> </p><p><span m='2829720'>Oops, wrong one.</span> </p><p><span
  m='2832560'>Go away, go away.</span> </p><p><span m='2836310'>Here's what I
  want.</span> </p><p><span m='2837030'>Yeah, good.</span> </p><p><span
  m='2838070'>How would we convert this tree into a set of rules?</span>
  </p><p><span m='2841480'>It's straightforward.</span> </p><p><span
  m='2842470'>[INAUDIBLE], what do we do?</span> </p><p><span
  m='2843680'>STUDENT: You'd basically just look down each branch--</span> <span
  m='2845390'>PATRICK WINSTON: You'd basically just go down each</span> <span
  m='2846730'>branch to a leaf.</span> </p><p><span m='2848510'>So you say, for
  example, here's one rule.</span> </p><p><span m='2851990'>If shadow equals
  question mark, and garlic equals oh,</span> <span
  m='2864970'>[INAUDIBLE]</span> <span m='2865770'>want to choose No.</span>
  </p><p><span m='2870012'>Doesn't eat garlic.</span> </p><p><span
  m='2871880'>No.</span> </p><p><span m='2872350'>I think I'll say Yes.</span>
  </p><p><span m='2874130'>Yes.</span> </p><p><span m='2874810'>That changes the
  answer.</span> </p><p><span m='2883740'>Then if it eats garlic, it's not a
  vampire, right?</span> </p><p><span m='2887430'>That's one of four possible
  rules, because there are four</span> <span m='2889700'>leaf nodes.</span>
  </p><p><span m='2892440'>Now, almost done.</span> </p><p><span m='2895900'>We
  are done, except for one thing.</span> </p><p><span m='2897170'>We can
  actually take these four rules, and start thinking</span> <span
  m='2900160'>about how to simplify them.</span> </p><p><span m='2901950'>You
  can ask questions like, if I have a rule that tests both</span> <span
  m='2906140'>the shadow and the garlic, do I actually need both of those</span>
  <span m='2910280'>antecedents?</span> </p><p><span m='2910550'>And the answer
  is, in many cases, no.</span> </p><p><span m='2912950'>And in particular, in
  this case, no.</span> </p><p><span m='2915890'>Because if we look at our data
  set, what we discover is that</span> <span m='2920700'>in the event that we're
  talking about a shadow</span> <span m='2925180'>question mark--</span> <span
  m='2926285'>oh, I guess I had a better choice the other way.</span>
  </p><p><span m='2929240'>Oh, no.</span> </p><p><span m='2929880'>If you look
  at the garlic, all the garlics--</span> <span m='2933200'>Yes, Yes, and
  Yes--</span> <span m='2935300'>it turns out that the answer is no, independent
  of what the</span> <span m='2937600'>shadow condition is.</span> </p><p><span
  m='2939630'>So we can look at the rules, and in some cases, we'll</span> <span
  m='2941680'>discover that our tree is a little bit more complicated</span>
  <span m='2944050'>than it needs to be.</span> </p><p><span m='2944730'>We can
  actually get rid of some of the clauses.</span> </p><p><span m='2946800'>So in
  the end, we can develop a very simple mechanism based</span> <span
  m='2950340'>on good old fashioned rule-based behavior, like you</span> <span
  m='2952760'>saw almost in the beginning of the subject,</span> <span
  m='2955820'>that does the job.</span> </p><p><span m='2956940'>And now,
  without any royalty, you're all free to put this in</span> <span
  m='2962710'>your PDA and use it to protect yourself in the days to com,</span>
  <span m='2965610'>especially since Halloween's just around the corner.</span>
  </p><p></p>
embedded_media:
  - uid: 11152049abfbec1b59d6a732c1efc74a
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: SXBG3RGr_Rc
  - uid: 0d1b9e771fa713e13b2bda58c7e7ee9a
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-11-learning-identification/id765641080?i=194473718
  - uid: 6e1979c4234dc28afa6cb6fd74b12b02
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec11_300k.mp4'
  - uid: c1405ef45f2a77f16785e9fb2f14347f
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/SXBG3RGr_Rc/default.jpg'
  - uid: c2dc7e1559c9c84fa0a6e677c61b0746
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: SXBG3RGr_Rc
  - uid: ba3b4271b517d602061b811571958ce6
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: SXBG3RGr_Rc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-11-learning-identification-trees-disorder/SXBG3RGr_Rc.srt
  - uid: 697c66832f92f9006c96ced159a46f8c
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: SXBG3RGr_Rc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-11-learning-identification-trees-disorder/SXBG3RGr_Rc.pdf
  - uid: 326dd7164ca23fe4f0ccf795fcc47569
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 5873c6ee42baaa221626623aa4d47e4d
    parent_uid: 342cedb5e418c11da216a12272faae2c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
