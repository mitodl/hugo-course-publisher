---
title: 'Lecture 15: Learning: Near Misses, Felicity Conditions'
uid: 69c3f174890ae9d040802ca9e013df19
parent_uid: 28d36d6426366698bf1ded18c6190be7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-15-learning-near-misses-felicity-conditions
short_url: lecture-15-learning-near-misses-felicity-conditions
inline_embed_id: '79422715lecture15:learning:nearmisses,felicityconditions63835591'
about_this_resource_text: >-
  <p><strong>Description:</strong> To determine whether three blocks form an
  arch, we use a model which evolves through examples and near misses; this is
  an example of one-shot learning. We also discuss other aspects of how students
  learn, and how to package your ideas better.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
related_resources_text: ''
transcript: >-
  <p><span m='10870'>PROFESSOR PATRICK WINSTON: You know, some</span> <span
  m='13000'>of you who for instance--</span> <span m='15406'>I don't know,
  Sonya, Krishna, Shoshana--</span> <span m='22240'>some of you I can count on
  being here every time.</span> </p><p><span m='24390'>Some of you show up once
  in a while.</span> </p><p><span m='25710'>The ones of you who show up once in
  a while happen to be</span> <span m='27650'>very lucky if you picked today,
  because what we're</span> <span m='29320'>going to do today is I'm going to
  tell you stuff that might</span> <span m='32350'>make a big difference in your
  whole life.</span> </p><p><span m='34850'>Because I'm going to tell you how
  you can</span> <span m='35870'>make yourself smarter.</span> </p><p><span
  m='37810'>No kidding.</span> </p><p><span m='38610'>And I'm also going to tell
  you how you can package your ideas</span> <span m='41730'>so you'll be the one
  that's picked instead</span> <span m='43610'>of some other slug.</span>
  </p><p><span m='45660'>So that's what we're going to do today.</span>
  </p><p><span m='48240'>It's the most important lecture of the semester.</span>
  </p><p><span m='52450'>The sleep lecture is only the second most
  important.</span> </p><p><span m='54850'>This is the most important.</span>
  </p><p><span m='57300'>Now the vehicle that's going to get us there is
  a</span> <span m='59740'>discussion about how it's possible to learn in a
  way</span> <span m='64170'>that is a little reminiscent of what we</span>
  <span m='66110'>talked about last time.</span> </p><p><span m='67540'>Because
  last time we learned something very definite from a</span> <span
  m='70120'>small number of examples.</span> </p><p><span m='71289'>This takes
  it one step further and shows how it's possible to</span> <span
  m='75220'>learn in a human-like way from a single example in one shot.</span>
  </p><p><span m='80830'>So it's extremely different, very different from
  everything</span> <span m='84880'>you've seen before.</span> </p><p><span
  m='86270'>Everything that involves learning from thousands of</span> <span
  m='92050'>trials and gazillions of examples and only learning a</span> <span
  m='97340'>little tiny bit, if anything, from each of them.</span> </p><p><span
  m='99300'>This is going to learn something</span> <span m='100550'>definite
  from every example.</span> </p><p><span m='106400'>So here's the classroom
  example.</span> </p><p><span m='109400'>What's this?</span> </p><p><span
  m='110080'>It's an arch.</span> </p><p><span m='111090'>I know the architects
  are complaining that it's not an</span> <span m='114330'>arch in architecture
  land.</span> </p><p><span m='117150'>It's a post and lintel
  construction.</span> </p><p><span m='119340'>But for us today it's going to be
  an arch.</span> </p><p><span m='121780'>Now if you were from Mars and didn't
  know what an arch was,</span> <span m='124700'>I might present this to you and
  you'd get a general idea</span> <span m='127610'>of some things that might be
  factors, but you'd have no</span> <span m='130020'>idea what's really
  important.</span> </p><p><span m='132230'>So then I would say, that's not an
  arch.</span> </p><p><span m='135040'>And you would learn something very
  definite from that.</span> </p><p><span m='137900'>And then I would shove
  these together and put this back on,</span> <span m='140470'>and I would say,
  that's not an arch either.</span> </p><p><span m='142690'>And you'd learn
  something very definite from that.</span> </p><p><span m='145470'>And then I
  could paint the top one blue, and you'd learn</span> <span
  m='148530'>something very different from that.</span> </p><p><span
  m='149920'>And how can that happen is the question?</span> </p><p><span
  m='153050'>How can that happen in detail, and what might it mean for</span>
  <span m='158130'>human learning and how you can make yourself smarter?</span>
  </p><p><span m='160780'>And that's where we're going to go.</span>
  </p><p><span m='162350'>All right?</span> </p><p><span m='163020'>So how can
  we make a program that's a smart as a martian</span> <span m='166620'>about
  learning things like that?</span> </p><p><span m='169610'>Well, if you were
  writing that program, surely the first</span> <span m='172020'>thing you would
  do is you'd try to get off the picture as</span> <span m='175710'>quickly as
  possible and into symbol land where things are</span> <span m='179870'>clearer
  about what the important parts are.</span> </p><p><span m='183430'>So you'd be
  presented with an initial example that might</span> <span m='188120'>look like
  this.</span> </p><p><span m='194630'>We'll call that an example.</span>
  </p><p><span m='199750'>And it's more than just an example.</span>
  </p><p><span m='201079'>It's the initial model.</span> </p><p><span
  m='207829'>That's the starting point.</span> </p><p><span m='209900'>And now
  we're going to couple that with something that's not</span> <span
  m='212470'>actually an arch but looks a whole lot like one, at least</span>
  <span m='218710'>on the descriptive level to which we're about to go.</span>
  </p><p><span m='221530'>So here's something that's not an arch, but its
  description</span> <span m='227590'>doesn't differ from that of an arch very
  much.</span> </p><p><span m='230430'>In fact, if we were to draw this out in a
  kind of network,</span> <span m='234262'>we would have a description that
  looks like this, and</span> <span m='237780'>these relations would be support
  relations.</span> </p><p><span m='243280'>And this would be drawn out like
  so.</span> </p><p><span m='247640'>And the only difference would be--</span>
  <span m='250640'>the only difference would be that those support
  relations</span> <span m='252950'>that we had in the initial model--</span>
  <span m='257570'>the example--</span> <span m='259060'>have disappeared down
  out here in this configuration.</span> </p><p><span m='265100'>But since it's
  not very different from the model,</span> <span m='266790'>we're going to call
  this a near miss.</span> </p><p><span m='276630'>And now, you see, we've
  abstracted away from all the</span> <span m='279670'>details that don't matter
  to us.</span> </p><p><span m='281800'>Last time we talked about a good
  representation having</span> <span m='284000'>certain qualities--</span> <span
  m='284970'>qualities like making the right things explicit.</span>
  </p><p><span m='287050'>Well, this makes the structure explicit, and it
  suppresses</span> <span m='290300'>information about blemishes on the
  surface.</span> </p><p><span m='293159'>We don't care much about how tall the
  objects are.</span> </p><p><span m='296540'>We don't think it matters what
  they're made of.</span> </p><p><span m='300180'>So this is a representation
  that satisfies the first of</span> <span m='303050'>the criteria from last
  time.</span> </p><p><span m='304210'>It makes the right things
  explicit.</span> </p><p><span m='307830'>And by making the right things
  explicit, it's exposing some</span> <span m='310990'>constraint here with
  respect to what it</span> <span m='312440'>takes to be an arch.</span>
  </p><p><span m='313370'>And we see that if those support relations are
  missing,</span> <span m='316460'>it's not an arch.</span> </p><p><span
  m='318410'>So we ought to be able to learn something from that.</span>
  </p><p><span m='323870'>What we're going to do is we're going to put these
  two</span> <span m='325170'>things together.</span> </p><p><span
  m='327170'>We're going to describe the difference between the two.</span>
  </p><p><span m='329880'>And we're going to reach the conclusion that since
  there's</span> <span m='331510'>only one difference--</span> <span
  m='333040'>one kind of difference with two manifestations to</span> <span
  m='336250'>disappearing support relations, we're going to</span> <span
  m='338860'>conclude that those support relations are important.</span>
  </p><p><span m='344940'>And we're going to turn them red</span> <span
  m='348830'>because they're so important.</span> </p><p><span m='351140'>And
  we're going to change the name from "support" to "must</span> <span
  m='354640'>support."</span> <span m='360130'>So this is our new model.</span>
  </p><p><span m='362250'>This is an evolving model that now is decorated
  with</span> <span m='365380'>information about what's important.</span>
  </p><p><span m='367590'>So if you're going to match something against this
  model,</span> <span m='370570'>it must be the case that those support
  relations are there.</span> </p><p><span m='372700'>If it's not there-- if
  they're not there, it's not an arch.</span> </p><p><span m='375960'>All
  right?</span> </p><p><span m='377750'>So we've learned something
  definite</span> <span m='379830'>from a single example.</span> </p><p><span
  m='381070'>This is not 10,000 trials.</span> </p><p><span m='383330'>This is a
  teacher presenting something to the student and</span> <span m='386490'>the
  student learning something immediately in one step about</span> <span
  m='390040'>what's important in an arch.</span> </p><p><span m='393740'>So
  let's do it again.</span> </p><p><span m='394550'>That was so much fun.</span>
  </p><p><span m='396580'>Let's do this one.</span> </p><p><span m='400930'>Same
  as before except that now when we describe this thing,</span> <span
  m='405970'>there are some additional relations--</span> <span m='408880'>these
  relations, and those are touch relations.</span> </p><p><span m='414860'>So
  now when we compare that--</span> <span m='417310'>is that an arch?</span>
  </p><p><span m='418340'>No.</span> </p><p><span m='419360'>It's a near
  miss.</span> </p><p><span m='425720'>When we compare that near miss with our
  evolving model, we</span> <span m='429370'>see immediately that once again
  there's exactly one</span> <span m='432210'>difference, two</span> <span
  m='433580'>manifestations, the touch relations.</span> </p><p><span
  m='436190'>So we can immediately conclude that these touch relations
  are</span> <span m='439650'>interfering with our belief that this could be an
  arch.</span> </p><p><span m='443490'>So what do we do with that?</span>
  </p><p><span m='445330'>We put those together again and we build</span> <span
  m='448210'>ourselves a new model.</span> </p><p><span m='450680'>It's much
  like the old model.</span> </p><p><span m='453730'>It still has the
  imperatives up here.</span> </p><p><span m='456920'>We have to have the
  support relations.</span> </p><p><span m='459159'>But now down here-- and we
  draw not signs through there--</span> <span m='462740'>these are must not
  touch relations.</span> </p><p><span m='469500'>So now you can't match against
  that model if those two side</span> <span m='472300'>supports are touching
  each other.</span> </p><p><span m='475360'>So in just two steps, we've learned
  two important things</span> <span m='477630'>about what has to be in place in
  order for this thing to be</span> <span m='480780'>construed to be an
  arch.</span> </p><p><span m='481720'>So our martian is making great
  progress.</span> </p><p><span m='484160'>But our martian isn't through,
  because there's some more</span> <span m='485860'>things we might want it to
  know about</span> <span m='488210'>the nature of arches.</span> </p><p><span
  m='490170'>For example, we might present it with this one.</span> </p><p><span
  m='496510'>Well, that looks just like our initial example.</span> </p><p><span
  m='499830'>It's an example just like our initial example.</span> </p><p><span
  m='504720'>But this time the top has been painted red.</span> </p><p><span
  m='509360'>And I'm still saying that that's an arch.</span> </p><p><span
  m='512380'>So once again, there's only one difference and that</span> <span
  m='515490'>difference is that in the description of this object, we</span>
  <span m='522570'>have the additional information that the color of</span>
  <span m='527330'>the top is red.</span> </p><p><span m='530480'>And we've been
  carrying along without saying so, that the</span> <span m='533000'>color of
  the top in the evolving model is white.</span> </p><p><span m='540920'>So now
  we know that the top doesn't have to be white.</span> </p><p><span
  m='543900'>It can be either red or white.</span> </p><p><span m='546920'>So
  we'll put those two together and</span> <span m='549480'>we'll get a new
  model.</span> </p><p><span m='551600'>And that new model this time once
  again</span> <span m='554440'>will have three parts.</span> </p><p><span
  m='556600'>It will have the relations, an imperative form that we've</span>
  <span m='560380'>been carrying along now, the must support and the must
  not</span> <span m='563760'>touch, but now we're going to turn that color
  relation</span> <span m='567220'>itself into an imperative.</span>
  </p><p><span m='569520'>And we're going to say that the top has to be</span>
  <span m='571280'>either red or white.</span> </p><p><span m='580290'>So now,
  once again, in one step we've learned something</span> <span
  m='582330'>definite about archness.</span> </p><p><span m='584540'>Two more
  steps.</span> </p><p><span m='586300'>Suppose now we present it with this
  example.</span> </p><p><span m='594400'>It's an example.</span> </p><p><span
  m='599670'>And this time there's going to be a little paint</span> <span
  m='602030'>added here as well.</span> </p><p><span m='604020'>This time we're
  going to have the top painted blue like so.</span> </p><p><span m='609790'>So
  the description will be like so.</span> </p><p><span m='622540'>And now we
  have to somehow put that together with our</span> <span m='624520'>evolving
  model to make a new model.</span> </p><p><span m='626620'>And there's some
  choices here.</span> </p><p><span m='628080'>And our choice depends somewhat
  on the nature of the</span> <span m='630640'>world that we're working
  in.</span> </p><p><span m='633000'>So suppose we're working in flag
  world.</span> </p><p><span m='635990'>There are only three colors--</span>
  <span m='637080'>red, white, and blue.</span> </p><p><span m='639410'>Now
  we've seen them all.</span> </p><p><span m='641590'>If we've seen them all,
  then what we're going to do is</span> <span m='644700'>we're going to say that
  the evolving model now is adjusted</span> <span m='648220'>yet again like
  so.</span> </p><p><span m='653250'>Oh-- but those are imperatives
  still.</span> </p><p><span m='654690'>Let me carry that along.</span>
  </p><p><span m='661230'>At this time, this guy--</span> <span m='663110'>the
  color relation--</span> <span m='665790'>goes out here to anything at
  all.</span> </p><p><span m='669960'>So we could have just not drawn it at all,
  but then we</span> <span m='672660'>would have lost track of the fact that
  we've actually</span> <span m='674510'>learned that anything can be
  there.</span> </p><p><span m='676260'>So we're going to retain the relation
  but have it point to</span> <span m='678290'>the "anything goes"
  marker.</span> </p><p><span m='681620'>Well, we're making great progress and I
  said there's</span> <span m='683170'>just one more thing to go.</span>
  </p><p><span m='685480'>So let me compress that into this area here.</span>
  </p><p><span m='689640'>What I'm going to add this time is I'm going to say
  that</span> <span m='694400'>the example is like everything you've seen before
  except that</span> <span m='706320'>the top is now one of those kinds of
  child's bricks.</span> </p><p><span m='712510'>So you have a choice actually
  about whether this</span> <span m='715280'>is an arch or not.</span>
  </p><p><span m='716840'>But if I say, yeah, it's still an arch, then we'd add
  a</span> <span m='720710'>little something to its description.</span>
  </p><p><span m='722130'>So this description would look like this.</span>
  </p><p><span m='725080'>Same things that we've seen before in terms of
  support,</span> <span m='728260'>but now we'd have a relation that says
  that</span> <span m='729950'>this top is a wedge.</span> </p><p><span
  m='737260'>And over here--</span> <span m='738460'>something we've been
  carrying along but not writing down--</span> <span m='741220'>this top is a
  block.</span> </p><p><span m='743640'>A brick, I guess in the language of the
  day.</span> </p><p><span m='748600'>So if we say that it can be either a wedge
  or a brick on</span> <span m='751800'>top, what do we do with that?</span>
  </p><p><span m='754390'>Once again, it depends on the nature of
  representation, but</span> <span m='757430'>if we say that we have a
  representation, that has a</span> <span m='759980'>hierarchy of parts.</span>
  </p><p><span m='762000'>So bricks and wedges are both children's blocks
  and</span> <span m='765500'>children's box or toys.</span> </p><p><span
  m='767760'>Then we can think of drawing in a little bit of that</span> <span
  m='769830'>hierarchy right here and saying well, let's see.</span>
  </p><p><span m='775090'>Immediately above that we've got the brick or
  wedge.</span> </p><p><span m='786000'>And a little bit above that we've got
  block.</span> </p><p><span m='790600'>And a little bit above that we've got
  toy.</span> </p><p><span m='794190'>And a little bit above that we eventually
  get to</span> <span m='795980'>any physical object.</span> </p><p><span
  m='798060'>So what does it do in response to that kind of situation?</span>
  </p><p><span m='804480'>You have the choice.</span> </p><p><span
  m='805440'>But what the program I'm speaking of actually did was</span> <span
  m='808830'>to make a conservative generalization up here just to</span> <span
  m='811750'>say that it's one of those guys.</span> </p><p><span m='816140'>So
  once again it's learned something definite.</span> </p><p><span m='818280'>Let
  me see.</span> </p><p><span m='818680'>Let me count the steps.</span>
  </p><p><span m='820590'>One, two, three, four, five.</span> </p><p><span
  m='830950'>And I just learned four things.</span> </p><p><span m='833780'>So
  the generalization of a color, it took two steps to</span> <span
  m='836290'>get all the way up to "don't care."</span> <span m='839300'>So note
  how it contrasts with anything you've seen in a</span> <span m='842460'>neural
  net.</span> </p><p><span m='844840'>Or anything you will see downstream in
  some of the</span> <span m='846990'>other learning techniques that we'll be
  talking about that</span> <span m='849280'>involve using thousands of samples
  to learn what it is--</span> <span m='853000'>to learn whatever it is that is
  intended to be learned.</span> </p><p><span m='859030'>Let me show you another
  example of how these</span> <span m='861890'>heuristics can be put to
  work.</span> </p><p><span m='877280'>So there are two sets of drawings.</span>
  </p><p><span m='880510'>We have the upper set and the lower set.</span>
  </p><p><span m='883110'>And your task, you smart humans working in vast</span>
  <span m='886360'>parallelism, your task is to give me a description of
  the</span> <span m='890100'>top trains that distinguishes and separates them
  from the</span> <span m='893740'>trains on the bottom.</span> </p><p><span
  m='909540'>You got it?</span> </p><p><span m='914740'>Nobody's got it?</span>
  </p><p><span m='916690'>Well, let me try one on you.</span> </p><p><span
  m='918920'>The top trains all have a short car with a closed top.</span>
  </p><p><span m='925010'>So how is it possible that a computer could
  have</span> <span m='927235'>figured that out?</span> </p><p><span
  m='929450'>It turns out that it figured it out with much the same</span> <span
  m='931380'>apparatus that I've shown you here in connection with the</span>
  <span m='933220'>arches, just deployed in a somewhat different manner.</span>
  </p><p><span m='937640'>In this particular case, the examples are presented
  one at</span> <span m='940680'>a time by a teacher who's eager for</span>
  <span m='943750'>the student to learn.</span> </p><p><span m='945610'>In this
  case, the examples are presented all at once and the</span> <span
  m='949950'>machine is expected to figure out a description that</span> <span
  m='952720'>separates the two groups.</span> </p><p><span m='955820'>And here's
  how it works.</span> </p><p><span m='961950'>What you do is you start with one
  of them.</span> </p><p><span m='976210'>But you have a lot of them.</span>
  </p><p><span m='977570'>You have some examples--</span> <span m='978530'>we'll
  call the examples on top the "plus examples" and the</span> <span
  m='981700'>examples on the bottom the "negative examples." So the</span> <span
  m='988500'>first thing that you do is you pick one of the positive</span>
  <span m='991020'>examples to work with.</span> </p><p><span m='993810'>Anybody
  got any good guesses about what we're</span> <span m='995790'>going to call
  that?</span> </p><p><span m='997640'>Yeah, you do.</span> </p><p><span
  m='998480'>We're going to call that the seed.</span> </p><p><span
  m='1002310'>It's just highly reminiscent of what we did last time when</span>
  <span m='1005770'>we were doing [? phonology ?]</span> <span m='1006790'>but
  now at a much different level.</span> </p><p><span m='1008785'>We're going to
  pick one of those guys to be the seed, and</span> <span m='1011350'>then we're
  going to take these heuristics and we're going to</span> <span
  m='1015000'>search for one that loosens this description so that it</span>
  <span m='1018690'>covers more of the positives.</span> </p><p><span
  m='1020510'>You see, if you have a seed that is exactly a description</span>
  <span m='1023390'>of a particular thing and you insist that everything be
  just</span> <span m='1027010'>like that, then nothing will match except
  itself.</span> </p><p><span m='1030750'>But you can use these heuristics to
  expand the</span> <span m='1034098'>coverage of the description, to loosen it
  so that it covers</span> <span m='1037800'>more of the positives.</span>
  </p><p><span m='1039540'>So in your first step you might cover, for example,
  that</span> <span m='1044700'>group of objects.</span> </p><p><span
  m='1046810'>Too bad for your side, you've also in that particular case</span>
  <span m='1050860'>included a negative example in your description, but
  perhaps</span> <span m='1054600'>in this next step beyond that you'll get to
  the point where</span> <span m='1058070'>you've eliminated all of those
  negative examples and zeroed</span> <span m='1062020'>in on all the positive
  examples.</span> </p><p><span m='1066160'>So how might a program be
  constructed that would do that</span> <span m='1069810'>sort of thing?</span>
  </p><p><span m='1070500'>Well, think about the choices.</span> </p><p><span
  m='1072140'>The first choice that you have it is to pick a positive</span>
  <span m='1077920'>example to be the seed.</span> </p><p><span m='1083650'>And
  once you've picked a particular example to be the</span> <span
  m='1085880'>seed, then you can apply heuristics, all of them that</span> <span
  m='1089350'>you have, to make a new description that may cover the</span>
  <span m='1092820'>data better.</span> </p><p><span m='1093530'>It may have
  more of the positives and fewer of the</span> <span m='1095350'>negatives than
  in your previous step.</span> </p><p><span m='1099150'>But this, if you have a
  lot of heuristics, and these are a</span> <span m='1103880'>lot of heuristics
  because there's a lot of description</span> <span m='1105850'>in that set of
  trains, there are lots of possible things</span> <span m='1109250'>that you
  could do with those heuristics because you could</span> <span
  m='1111100'>apply them anywhere.</span> </p><p><span m='1112820'>So this tree
  is extremely large.</span> </p><p><span m='1119870'>So what do you do to keep
  it under control?</span> </p><p><span m='1123080'>Well, now you have answers
  to questions like that by</span> <span m='1126240'>knee-jerk, right?</span>
  </p><p><span m='1127480'>The branching factor is too big.</span> </p><p><span
  m='1129680'>You want to keep a few solutions going.</span> </p><p><span
  m='1132810'>You have some way of measuring how well you're doing so you</span>
  <span m='1135700'>can use a beam search.</span> </p><p><span m='1139130'>This
  piece here was originally worked out by a friend of</span> <span
  m='1142880'>mine, now, alas, deceased, [? Rashad ?]</span> <span
  m='1144930'>[? Malkowski ?]</span> <span m='1145610'>when he was at the
  University of Illinois.</span> </p><p><span m='1147000'>And of course, he
  wasn't interested in toy trains, he</span> <span m='1149355'>was just
  interested in soybean diseases.</span> </p><p><span m='1152150'>And so this
  exact program was used to build descriptions of</span> <span
  m='1156080'>soybean diseases.</span> </p><p><span m='1156960'>It turned out to
  be better than the</span> <span m='1158170'>plant pathology books.</span>
  </p><p><span m='1163920'>We now have two ways of deploying the same
  heuristics.</span> </p><p><span m='1167200'>But my vocabulary is in need of
  enrichment, because I'm</span> <span m='1173210'>talking about "those"
  heuristics.</span> </p><p><span m='1175880'>And one of the nice things that [?
  Malkowski ?]</span> <span m='1178010'>did for me a long time ago is give each
  of them a name.</span> </p><p><span m='1181490'>So here are the names that
  were developed by</span> <span m='1185160'>[? Malkowski. ?]</span> <span
  m='1186510'>What's happening here?</span> </p><p><span m='1187240'>You're
  going from an original model to an understanding--</span> <span
  m='1192430'>some things are essential.</span> </p><p><span m='1194550'>So he
  called this the "require link" heuristic.</span> </p><p><span m='1203590'>And
  here in the next step, we're forbidding some things</span> <span
  m='1206860'>from being there.</span> </p><p><span m='1208290'>So [? Malkowski
  ?]</span> <span m='1209070'>called that heuristic the "forbid link"
  heuristic.</span> </p><p><span m='1217310'>And in the next step, we're saying
  it can be</span> <span m='1219080'>either red or white.</span> </p><p><span
  m='1220500'>So we have a set of colors and we're extending it.</span>
  </p><p><span m='1229400'>And over here in this heuristic, going from red
  or</span> <span m='1233010'>white to anything goes, that's essentially
  forgetting about</span> <span m='1237090'>color altogether, so we're going to
  call that "drop link"</span> <span m='1242250'>even though for reasons of
  keeping track, we don't</span> <span m='1245680'>actually get rid of
  it.</span> </p><p><span m='1246420'>We just have it pointing to the "anything"
  marker.</span> </p><p><span m='1250210'>And finally, in this last step, what
  we're doing with</span> <span m='1254950'>this tree of categories is we're
  climbing up it one step.</span> </p><p><span m='1260090'>So he called that the
  "climb tree" heuristic.</span> </p><p><span m='1265070'>So now we have a
  vocabulary of things we can do in the</span> <span m='1267670'>learning
  process, and having that vocabulary gives us power</span> <span
  m='1271950'>over it, right?</span> </p><p><span m='1272470'>Because those are
  names.</span> </p><p><span m='1274130'>We can now say, well, what you need
  here is</span> <span m='1275686'>the "drop link" heuristic.</span>
  </p><p><span m='1277360'>And what you need over there is the "extend set"
  heuristic.</span> </p><p><span m='1282910'>So now I want to back up yet
  another time and</span> <span m='1285860'>say, well, let's see.</span>
  </p><p><span m='1288850'>When we were working with that phonology stuff, all I
  did was</span> <span m='1290870'>generalize.</span> </p><p><span
  m='1291350'>Are we just generalizing here?</span> </p><p><span
  m='1294090'>No.</span> </p><p><span m='1295560'>We're both generalizing and
  specializing.</span> </p><p><span m='1298780'>So when I say that the links
  over here that are developed</span> <span m='1303520'>in our first step are
  essential, this is a</span> <span m='1308050'>specialization step.</span>
  </p><p><span m='1314760'>And when I say they can't be--</span> <span
  m='1317560'>they cannot be touch relations, that's a</span> <span
  m='1319880'>specialization step.</span> </p><p><span m='1324880'>Because we're
  able to match fewer and fewer things when we</span> <span m='1328480'>say you
  can't have touch relations.</span> </p><p><span m='1331090'>But over here,
  when I go here and say, well, it doesn't have</span> <span m='1333940'>to be
  white.</span> </p><p><span m='1334640'>It can also be red.</span> </p><p><span
  m='1337220'>That's a generalization.</span> </p><p><span m='1341280'>Now we
  can match more things.</span> </p><p><span m='1343970'>And when I drop the
  link altogether, that's a</span> <span m='1347210'>generalization.</span>
  </p><p><span m='1351170'>And when I climb the tree, that's a
  generalization.</span> </p><p><span m='1360150'>And that's why when I do this
  notional picture of what</span> <span m='1364770'>happens when [? Malkowski
  ?]</span> <span m='1366030'>program does a tree search to find a solution to
  the train</span> <span m='1368380'>problem, they're both specialization steps
  which</span> <span m='1371680'>draw in the number of things that can be
  matched, and</span> <span m='1373740'>generalization steps that make it
  broader.</span> </p><p><span m='1378180'>So, let's see.</span> </p><p><span
  m='1380670'>We've also got the notion of near miss.</span> </p><p><span
  m='1385530'>And we've got the notion of example--</span> <span
  m='1387220'>some of these things are examples,</span> <span m='1388450'>some
  are near misses.</span> </p><p><span m='1389890'>We've got generalization
  specialization.</span> </p><p><span m='1393090'>Does one go with one or the
  other, or are they all mixed</span> <span m='1397290'>up in their relationship
  to each other?</span> </p><p><span m='1399330'>Can you generalize and
  specialize with near misses?</span> </p><p><span m='1402490'>What do you
  think?</span> </p><p><span m='1404310'>You think--</span> <span
  m='1405570'>you don't think so, [INAUDIBLE]?</span> </p><p><span
  m='1407146'>What do you think?</span> </p><p><span m='1408132'>STUDENT:
  [INAUDIBLE]</span> <span m='1409611'>specialization.</span> </p><p><span
  m='1410104'>PROFESSOR PATRICK WINSTON: [INAUDIBLE] lead to</span> <span
  m='1411090'>specialization.</span> </p><p><span m='1412569'>Let's see if
  that's right.</span> </p><p><span m='1415050'>So we've got specialization
  here, and that's a near miss.</span> </p><p><span m='1419380'>We've got
  specialization here, and that's a near miss.</span> </p><p><span
  m='1424050'>We've got generalization here, and that's an example.</span>
  </p><p><span m='1429430'>And we've got generalization here, and that's an
  example.</span> </p><p><span m='1433540'>And we've got generalization here,
  and that's an example.</span> </p><p><span m='1436550'>So [INAUDIBLE] has got
  that one nailed.</span> </p><p><span m='1439000'>The examples always
  generalize, and the near</span> <span m='1441650'>misses always
  specialize.</span> </p><p><span m='1442910'>So we've got apparatuses in place
  that allow us to both</span> <span m='1445580'>expand what we could match and
  shrink what we could match.</span> </p><p><span m='1450910'>So what has this
  got to do anything?</span> </p><p><span m='1452380'>Well, which one of these
  methods is better, by the way?</span> </p><p><span m='1456260'>This
  one--</span> <span m='1457920'>this one requires a teacher to organize
  everything up.</span> </p><p><span m='1460780'>This one can handle it in batch
  mode.</span> </p><p><span m='1466320'>This one is the sort of thing you would
  need to do with a</span> <span m='1469600'>human because we don't have much
  memory.</span> </p><p><span m='1471900'>That one is the sort of thing that a
  computer's good at</span> <span m='1473970'>because it has lots of
  memory.</span> </p><p><span m='1475790'>So which one's better?</span>
  </p><p><span m='1478690'>Well, it depends on what you're trying to do.</span>
  </p><p><span m='1481010'>If you're trying to build a machine that analyzes
  the</span> <span m='1484425'>stock market, you might want to go that
  way.</span> </p><p><span m='1486610'>Or soybean diseases, or any one of a
  variety</span> <span m='1490540'>of practical problems.</span> </p><p><span
  m='1491290'>If you're trying to model people, then maybe this is a</span>
  <span m='1494440'>way that deserves additional merit.</span> </p><p><span
  m='1497690'>How do you get all that sorted out?</span> </p><p><span
  m='1499450'>Well, one way to get it all sorted out is to talk in terms</span>
  <span m='1503840'>of what are sometimes called "felicity conditions." So
  when</span> <span m='1512875'>I talk about felicity conditions, I'm talking
  about</span> <span m='1514570'>a teacher and a student and covenants
  that</span> <span m='1516980'>hold between them.</span> </p><p><span
  m='1518710'>So here's the teacher.</span> </p><p><span m='1526100'>That's
  me.</span> </p><p><span m='1529090'>And here's the student.</span>
  </p><p><span m='1533980'>That's you.</span> </p><p><span m='1537270'>And the
  objective of interaction is to transform an</span> <span m='1544200'>initial
  state of knowledge into a new state of knowledge</span> <span m='1557560'>so
  that the student is smarter and able to make use of that</span> <span
  m='1564465'>new knowledge to do things that couldn't be done before</span>
  <span m='1571565'>by the student.</span> </p><p><span m='1573950'>So the
  student over here has a learner.</span> </p><p><span m='1582150'>And he has
  something that uses what is learned.</span> </p><p><span m='1589310'>And the
  teacher over here has a style.</span> </p><p><span m='1594890'>So if any
  learning is to take place, one side has to know</span> <span
  m='1599720'>something about the other side.</span> </p><p><span
  m='1602230'>For example, it's helpful if the teacher understands the</span>
  <span m='1612440'>initial state of the student.</span> </p><p><span
  m='1615200'>And here's one way of thinking about that.</span> </p><p><span
  m='1636830'>You can think of what you know as forming a kind of
  network.</span> </p><p><span m='1640350'>So initially, you don't know
  anything.</span> </p><p><span m='1643750'>But as you learn, you start</span>
  <span m='1646780'>developing quanta of knowledge.</span> </p><p><span
  m='1657620'>And these quanta of knowledge are all linked together by</span>
  <span m='1660360'>prerequisite relationships that might indicate how
  you</span> <span m='1664410'>get from one quantum to another.</span>
  </p><p><span m='1667130'>So maybe you have generalization links, maybe</span>
  <span m='1669200'>you have specialization links, maybe you have
  combination</span> <span m='1671560'>links, but you can think of what you know
  as forming this</span> <span m='1674420'>kind of network.</span> </p><p><span
  m='1676590'>Now your state of knowledge at any particular time can then</span>
  <span m='1679640'>be viewed as a kind of wavefront in that space.</span>
  </p><p><span m='1684700'>So if I, the teacher, know where your wavefront is,
  can I</span> <span m='1688020'>do a better job of teaching you stuff?</span>
  </p><p><span m='1690990'>Sure, for this reason.</span> </p><p><span
  m='1693510'>Suppose you make a mistake, m1, that depends on q1.</span>
  </p><p><span m='1700130'>Way, way behind your wavefront.</span> </p><p><span
  m='1702600'>What do I do if I know that you made a</span> <span
  m='1704230'>mistake of that kind?</span> </p><p><span m='1706935'>Oh, I just
  say, oh, you forgot you need a semicolon after</span> <span m='1710620'>that
  kind of statement.</span> </p><p><span m='1712450'>I just remind you of
  something that you certainly know, you</span> <span m='1714710'>just
  overlooked.</span> </p><p><span m='1716560'>Right?</span> </p><p><span
  m='1717720'>On the other hand, suppose you make a mistake that depends
  on</span> <span m='1722030'>a piece of knowledge way out here.</span>
  </p><p><span m='1724620'>That kind of mistake, m2.</span> </p><p><span
  m='1726590'>What do I say to you then?</span> </p><p><span m='1730075'>What do
  you think, Patrick?</span> </p><p><span m='1732480'>What do you think I would
  say if you made</span> <span m='1733245'>that kind of mistake?</span>
  </p><p><span m='1735021'>STUDENT: [INAUDIBLE].</span> </p><p><span
  m='1736969'>PROFESSOR PATRICK WINSTON: No.</span> </p><p><span
  m='1737943'>That's not what I would say [INAUDIBLE].</span> </p><p><span
  m='1742813'>STUDENT: You'd tell us that we don't know that yet.</span>
  </p><p><span m='1745248'>PROFESSOR PATRICK WINSTON: I would say something like
  that.</span> </p><p><span m='1747196'>What [INAUDIBLE] suggested I would
  say.</span> </p><p><span m='1750140'>Oh, don't worry about that.</span>
  </p><p><span m='1752470'>We'll get to it.</span> </p><p><span
  m='1753420'>We're not ready for it yet.</span> </p><p><span m='1755770'>So in
  this case, I remind somebody of something they</span> <span
  m='1759030'>already know.</span> </p><p><span m='1760360'>In this case, I tell
  them they'll learn about it later.</span> </p><p><span m='1763370'>So what do
  I do with mistake number three?</span> </p><p><span m='1767550'>That's the
  learning moment.</span> </p><p><span m='1769710'>That's where I can push the
  wavefront out.</span> </p><p><span m='1771960'>Because everything's in place
  to learn the</span> <span m='1773550'>stuff at the next radius.</span>
  </p><p><span m='1776770'>So if I know that the student has made a mistake on
  that</span> <span m='1778770'>wavefront, that's when I say, this is the
  teaching moment.</span> </p><p><span m='1781490'>This is when I explain
  something.</span> </p><p><span m='1783500'>So that's why it's important for
  the teacher to have a good</span> <span m='1788290'>model of where the student
  is in the</span> <span m='1792860'>initial state of knowledge.</span>
  </p><p><span m='1796910'>Next thing that's important for the teacher to know
  is the</span> <span m='1800970'>way that the student learns.</span>
  </p><p><span m='1803220'>Because if the student is a computer, they can handle
  the</span> <span m='1805290'>stuff in batch.</span> </p><p><span
  m='1806030'>That's one thing.</span> </p><p><span m='1807280'>If the student
  is a third grader who has a limited</span> <span m='1810810'>capacity to store
  stuff, then that makes a difference in how</span> <span m='1814880'>you teach
  it.</span> </p><p><span m='1815370'>You might teach it that way to the third
  grader, and that</span> <span m='1819260'>way, buried underneath this board,
  to a computer.</span> </p><p><span m='1823080'>So you need to understand the
  way that the learner--</span> <span m='1825810'>the computational capacity of
  the learner.</span> </p><p><span m='1830130'>And there's also a need to
  understand the computational</span> <span m='1832610'>capacity of the user box
  down there, because sometimes you</span> <span m='1838160'>can be taught stuff
  that you can't actually use.</span> </p><p><span m='1842120'>So by now, most
  of you have attempted to read that</span> <span m='1844550'>sentence up there,
  right?</span> </p><p><span m='1846920'>And it seems screwy, right?</span>
  </p><p><span m='1849690'>It seems unintelligible, perhaps?</span> </p><p><span
  m='1852970'>It's a garden path sentence.</span> </p><p><span m='1854350'>It
  makes perfectly good English, but the way you</span> <span
  m='1857750'>generally read it, it doesn't, because you have a limited</span>
  <span m='1860300'>buffer in your language processor.</span> </p><p><span
  m='1864580'>What does this mean?</span> </p><p><span m='1866000'>You're
  expecting this to be "to." Question.</span> </p><p><span m='1870130'>But it's
  actually a command.</span> </p><p><span m='1871680'>Here's the deal.</span>
  </p><p><span m='1872820'>Somebody's got to give the students their
  grades.</span> </p><p><span m='1875560'>Well, we can have their parents do
  it.</span> </p><p><span m='1878700'>Have the grades given to their students
  by</span> <span m='1881650'>their parents, then.</span> </p><p><span
  m='1883340'>So it's a command.</span> </p><p><span m='1884180'>And you garden
  path on it, because you have limited</span> <span m='1885970'>buffer space in
  your language processor.</span> </p><p><span m='1888230'>So with parentheses
  you can understand it.</span> </p><p><span m='1891310'>You can learn about
  it.</span> </p><p><span m='1892520'>You can see that it's good English, but
  you can't</span> <span m='1894150'>generally process that kind of sentence
  without going back</span> <span m='1898100'>and starting over.</span>
  </p><p><span m='1900450'>And what about going the other way?</span>
  </p><p><span m='1902140'>Are there covenants that we have to have here that
  involve</span> <span m='1905670'>the student understanding some things about
  the teacher?</span> </p><p><span m='1908900'>Well, first thing there is is
  trust.</span> </p><p><span m='1912210'>The student has to presume that the
  teacher is teaching</span> <span m='1914690'>the student correct
  information,</span> <span m='1917420'>not lying to student.</span>
  </p><p><span m='1920460'>Ratified that you're all here because presumably you
  all</span> <span m='1922700'>think that I'm not trying to screw you by telling
  you stuff</span> <span m='1925700'>that's a lie.</span> </p><p><span
  m='1927540'>There's also this sort of thing down here.</span> </p><p><span
  m='1930990'>Understanding of the teacher's style.</span> </p><p><span
  m='1933440'>So you might say, well, professor x, all he does is</span> <span
  m='1935590'>read slides to us in class, so why go?</span> </p><p><span
  m='1938230'>You wouldn't be entirely misadvised.</span> </p><p><span
  m='1939760'>That's an understanding of one kind of style.</span> </p><p><span
  m='1942530'>Or you can say, well, old Winston, he tries to tell us</span>
  <span m='1944620'>something definite and convey a family of powerful ideas
  in</span> <span m='1949040'>every class.</span> </p><p><span m='1949830'>So
  maybe it's worth dragging yourself out of bed at 10</span> <span
  m='1951590'>o'clock in the morning.</span> </p><p><span m='1952850'>Those are
  style issues, and those are things that the</span> <span m='1955850'>student
  uses to determine how to match the student's style</span> <span
  m='1959500'>against that of the instructor.</span> </p><p><span m='1963370'>So
  that helps us to interpret or think about differences in</span> <span
  m='1968330'>style so that we can appreciate whether we ought to</span> <span
  m='1971010'>be learning that way, where that way is the way that's</span>
  <span m='1976800'>underneath down here, the way you would teach a
  computer,</span> <span m='1979520'>the way [? Malkowski ?]</span> <span
  m='1980970'>taught a computer about soybean diseases.</span> </p><p><span
  m='1983600'>We can do it that way, or we can do it this way with a</span>
  <span m='1988090'>teacher who deliberately organizes and shapes the</span>
  <span m='1990570'>learning sequence for the benefit of a student who has
  a</span> <span m='1994150'>limited processing capability.</span> </p><p><span
  m='1998260'>Now you're humans, right?</span> </p><p><span m='1999680'>So think
  about what the machine has to do here.</span> </p><p><span m='2002910'>The
  machine--</span> <span m='2003570'>in order to learn anything definite in each
  of those</span> <span m='2006380'>steps, the machine has to build a
  description.</span> </p><p><span m='2009490'>So it has to describe the
  examples to itself.</span> </p><p><span m='2012410'>That's unquestioned,
  right?</span> </p><p><span m='2013450'>Because what it's doing is looking at
  the differences.</span> </p><p><span m='2016460'>So it can't look at the
  differences unless it's got</span> <span m='2018420'>descriptions of
  things.</span> </p><p><span m='2022480'>So if you're like the machine, then
  you can't learn anything</span> <span m='2026630'>unless you build
  descriptions.</span> </p><p><span m='2029200'>Unless you talk to
  yourself.</span> </p><p><span m='2033140'>And if you talk to yourself, you're
  building the kind of</span> <span m='2036030'>descriptions that make it
  possible for</span> <span m='2038340'>you to do the learning.</span>
  </p><p><span m='2040850'>And you say to me, I'm an MIT student.</span>
  </p><p><span m='2044220'>I want to see the numbers.</span> </p><p><span
  m='2046640'>So let me show you the numbers.</span> </p><p><span
  m='2048040'>And when I'm going to show numbers--</span> <span m='2050290'>the
  numbers that I'm going to show you show you the virtues</span> <span
  m='2052400'>of talking to yourself.</span> </p><p><span m='2055600'>So here's
  the experiment.</span> </p><p><span m='2058190'>The experiment was done by a
  friend of mine, Michelene Chi.</span> </p><p><span m='2061750'>Always seems to
  go by the name Mickey Chi.</span> </p><p><span m='2078130'>There he is.</span>
  </p><p><span m='2079460'>So here's the deal.</span> </p><p><span
  m='2080340'>The students that she worked with were expected to learn</span>
  <span m='2084580'>about elementary physics.</span> </p><p><span
  m='2085989'>801 type stuff.</span> </p><p><span m='2088060'>And she took eight
  subjects, and she had them--</span> <span m='2092719'>she took them through a
  bunch of examples and then she gave</span> <span m='2094820'>them an
  examination.</span> </p><p><span m='2097220'>So eight subjects, and so they
  divide into two groups.</span> </p><p><span m='2101400'>The bottom half and
  the top half.</span> </p><p><span m='2103890'>The ones who did better than
  average and the ones who did</span> <span m='2106750'>worse than
  average.</span> </p><p><span m='2109320'>So then you can say, well, OK, what
  did that mean?</span> </p><p><span m='2112740'>You can say, how much did they
  talk to themselves?</span> </p><p><span m='2114940'>Well, that was measured by
  having them talk out loud as</span> <span m='2117680'>they solved the problems
  on an examination.</span> </p><p><span m='2120800'>So we could ask how much
  self explanation was done by the</span> <span m='2125440'>smart ones versus
  the less smart ones?</span> </p><p><span m='2128470'>And here are the
  results.</span> </p><p><span m='2130830'>The worst ones-- the worst four said
  about 10 things to</span> <span m='2134620'>themselves.</span> </p><p><span
  m='2136390'>The best four said about 35 things to themselves.</span>
  </p><p><span m='2142530'>That's a pretty dramatic difference.</span>
  </p><p><span m='2144470'>Here's the data in a more straightforward
  form.</span> </p><p><span m='2148290'>This, by the way, points out that the
  smart ones scored</span> <span m='2150840'>twice as high as the less smart
  ones.</span> </p><p><span m='2154870'>And when we look at the number of
  explanations they gave</span> <span m='2156870'>themselves in two categories,
  smart ones said three times as</span> <span m='2161760'>much stuff to
  themselves as the less smart ones.</span> </p><p><span m='2164460'>So, as you
  can see, the explanations break down into</span> <span m='2167760'>two
  groups.</span> </p><p><span m='2169170'>Some have to do with monitoring and
  not with</span> <span m='2173770'>physics at all.</span> </p><p><span
  m='2174760'>They're things like, oh hell, I'm stuck.</span> </p><p><span
  m='2178010'>Or, I don't know what to do.</span> </p><p><span m='2182250'>And
  the others have to do with physics.</span> </p><p><span m='2184490'>Things
  like, well, maybe I should draw a force diagram.</span> </p><p><span
  m='2187550'>Or let me write down f equals ma, or something like that,
  as</span> <span m='2192340'>physics knowledge.</span> </p><p><span
  m='2194200'>I think it's interesting that this average score is</span> <span
  m='2197975'>different by a factor of two, and the average talking to</span>
  <span m='2201080'>oneself differed by a factor of three.</span> </p><p><span
  m='2204580'>Now this isn't quite there, because what's not clear is if</span>
  <span m='2209280'>you encourage somebody to talk to themself, and they talk
  to</span> <span m='2211900'>themselves more than they would have ordinarily,
  does</span> <span m='2214570'>that make them score better?</span> </p><p><span
  m='2215770'>All we know is that the ones who talk to themselves more do</span>
  <span m='2218280'>score better.</span> </p><p><span m='2219890'>But
  anecdotally, talking to some veterans of 6.034,</span> <span
  m='2224510'>they've started talking to themselves more when they</span> <span
  m='2226240'>solve problems, and they think that it makes them smarter.</span>
  </p><p><span m='2231830'>Now I would caution you not to do this too much in
  public.</span> </p><p><span m='2236490'>Because people can get the wrong idea
  if you talk to</span> <span m='2238590'>yourself too much.</span> </p><p><span
  m='2239430'>But it does seem--</span> <span m='2242350'>it does, in fact, seem
  to help.</span> </p><p><span m='2249270'>Now what I did last time is I told
  you how</span> <span m='2252260'>to be a good scientist.</span> </p><p><span
  m='2253750'>What I'm telling you now is how to make yourself smarter.</span>
  </p><p><span m='2255890'>And I want to conclude this hour by telling you about
  how</span> <span m='2258160'>you can package your ideas so that they have
  greater impact.</span> </p><p><span m='2262670'>So I guess I could have said,
  how to make yourself more</span> <span m='2265720'>famous, but I've limited
  myself to saying how to</span> <span m='2269430'>package your ideas
  better.</span> </p><p><span m='2270570'>And the reason you want to package
  your ideas better is</span> <span m='2273010'>because if you package your
  ideas better than the next</span> <span m='2275260'>slug, then you're going to
  get the faculty position and</span> <span m='2277630'>they're not.</span>
  </p><p><span m='2279130'>If you say to me, I'm going to be an</span> <span
  m='2280050'>entrepreneur, same thing.</span> </p><p><span m='2282310'>You're
  going to get the venture capitalist money and</span> <span m='2283950'>the
  next slug won't if you package your ideas better.</span> </p><p><span
  m='2287580'>So this little piece of work on the arch business got a</span>
  <span m='2290920'>whole lot more famous than I ever expected.</span>
  </p><p><span m='2293600'>I did it when I was young and stupid, and didn't have
  any</span> <span m='2296310'>idea what qualities might emerge from a piece of
  work</span> <span m='2299400'>that would make it well known.</span>
  </p><p><span m='2301240'>I only figured it out much later.</span> </p><p><span
  m='2303160'>But in retrospect, it has five qualities that you can think</span>
  <span m='2309310'>about when you're deciding whether your packaging of
  your</span> <span m='2311950'>idea is in a form that will lead to that idea
  becoming</span> <span m='2317240'>well known.</span> </p><p><span
  m='2319490'>And since there are five of them, it's convenient to put</span>
  <span m='2323340'>them all on the points of a star like so.</span>
  </p><p><span m='2331520'>So quality number one.</span> </p><p><span
  m='2335790'>I've made these all into s-words just to make them</span> <span
  m='2337870'>easier to remember.</span> </p><p><span m='2339720'>Quality number
  one is that there's some kind of symbol</span> <span m='2343390'>associated
  with a work.</span> </p><p><span m='2345270'>Some kind of visual handle that
  people will use to</span> <span m='2349560'>remember your idea.</span>
  </p><p><span m='2351760'>So what's the visual symbol here?</span> </p><p><span
  m='2354890'>Well, that's astonishingly easy to figure out, right?</span>
  </p><p><span m='2357200'>That's the arch.</span> </p><p><span m='2359140'>For
  years without my intending it, this</span> <span m='2361110'>was called arch
  learning.</span> </p><p><span m='2364670'>So you need a symbol.</span>
  </p><p><span m='2366840'>Then you also need a slogan.</span> </p><p><span
  m='2375940'>That's a kind of verbal handle.</span> </p><p><span m='2377820'>It
  doesn't explain the idea, but it's enough of a handle</span> <span
  m='2381180'>to, as Minsky would say, put you back in the mental state</span>
  <span m='2385280'>you were in when you understood the idea in the</span> <span
  m='2386920'>first place.</span> </p><p><span m='2388540'>So what is the slogan
  for this work?</span> </p><p><span m='2391430'>Anybody have any ideas?</span>
  </p><p><span m='2393760'>Pretty obvious.</span> </p><p><span
  m='2396745'>What's essential to this process working?</span> </p><p><span
  m='2399727'>The ability to present an example is very similar</span> <span
  m='2402212'>[INAUDIBLE], that constitutes a model but</span> <span
  m='2405616'>isn't one of those.</span> </p><p><span m='2406820'>STUDENT:
  [INAUDIBLE].</span> </p><p><span m='2407310'>PROFESSOR PATRICK WINSTON: So
  it's a near miss.</span> </p><p><span m='2417620'>The next thing you need if
  your work is going to become</span> <span m='2419700'>well known is a
  surprise.</span> </p><p><span m='2429550'>What's the surprise with this
  stuff?</span> </p><p><span m='2432180'>Well, the surprise--</span> <span
  m='2433050'>everything that had been done in artificial intelligence</span>
  <span m='2435310'>having to do with learning before this time was</span> <span
  m='2437800'>precursors to neural nets.</span> </p><p><span
  m='2440120'>Thousands of examples to learn anything.</span> </p><p><span
  m='2442490'>So the big surprise was that it was possible for a machine</span>
  <span m='2446410'>to learn something definite from each of the
  examples.</span> </p><p><span m='2449950'>So that now goes by the name of one
  shot learning.</span> </p><p><span m='2453810'>That was the surprise, that a
  computer could learn something</span> <span m='2455890'>definite from a single
  example.</span> </p><p><span m='2459680'>So let's see.</span> </p><p><span
  m='2460120'>We've almost completed our star.</span> </p><p><span
  m='2463630'>But there are more points on it.</span> </p><p><span
  m='2465120'>So this point is the salient.</span> </p><p><span
  m='2470530'>What's a salient--</span> <span m='2472680'>what's a salient
  idea?</span> </p><p><span m='2476400'>Jose, do you know what a salient idea
  is?</span> </p><p><span m='2480912'>He's too shy to tell me.</span>
  </p><p><span m='2484800'>What's a salient idea?</span> </p><p><span
  m='2487716'>Ah, who said important?</span> </p><p><span m='2490065'>Wrong
  answer, but very good.</span> </p><p><span m='2491550'>You're not shy.</span>
  </p><p><span m='2494025'>So what does it really mean?</span> </p><p><span
  m='2495510'>Yes.</span> </p><p><span m='2496500'>STUDENT: Relative to what
  somebody's</span> <span m='2497490'>already thinking about?</span>
  </p><p><span m='2499470'>PROFESSOR PATRICK WINSTON: Relative to what
  somebody's</span> <span m='2500955'>thinking about.</span> </p><p><span
  m='2501450'>Not quite.</span> </p><p><span m='2508380'>If you have a--</span>
  <span m='2510360'>if you're an expert in--</span> <span
  m='2513825'>yes?</span> </p><p><span m='2514815'>STUDENT: [INAUDIBLE].</span>
  </p><p><span m='2516300'>PROFESSOR PATRICK WINSTON: Really close.</span>
  </p><p><span m='2516795'>We're getting closer.</span> </p><p><span
  m='2520260'>[INAUDIBLE].</span> </p><p><span m='2521250'>Yes?</span>
  </p><p><span m='2521745'>STUDENT: Maybe an idea that wasn't obviously
  apparent, but</span> <span m='2524467'>becomes apparent gradually as somebody
  starts to understand?</span> </p><p><span m='2528740'>PROFESSOR PATRICK
  WINSTON: We're zeroing-- we're circling</span> <span m='2529660'>the wagons
  here and zeroing in on it.</span> </p><p><span m='2532040'>Yes?</span>
  </p><p><span m='2532978'>STUDENT: If I'm preempting what you're about to say,
  it</span> <span m='2535730'>has sort of a doorway of how you can understand
  the idea.</span> </p><p><span m='2539455'>PROFESSOR PATRICK WINSTON: It's
  what?</span> </p><p><span m='2539954'>Sorry.</span> </p><p><span
  m='2540453'>STUDENT: It's sort of like a doorway of how you</span> <span
  m='2542948'>can grasp the idea.</span> </p><p><span m='2546940'>PROFESSOR
  PATRICK WINSTON: That's sort if it, too, but if</span> <span m='2549250'>you
  study military history, what's the salient on a fort?</span> </p><p><span
  m='2556020'>Well, this is a good word to have in your vocabulary</span> <span
  m='2558090'>because it sort of means all of those things, but what it</span>
  <span m='2561850'>really means is something that sticks out.</span>
  </p><p><span m='2564850'>So on a fort, if this were a fort, these would all
  be</span> <span m='2568660'>salients because they stick out.</span>
  </p><p><span m='2571380'>So the salient idea is usually important</span> <span
  m='2574020'>because it sticks out.</span> </p><p><span m='2575870'>But it's
  not-- the meaning is not "important," the meaning</span> <span m='2577780'>is
  "stick out."</span> <span m='2579300'>So a piece of work becomes more famous
  if it has</span> <span m='2582180'>something that sticks out.</span>
  </p><p><span m='2584130'>It's interesting.</span> </p><p><span
  m='2584930'>There are theses that have been written at MIT that have</span>
  <span m='2586840'>too many good ideas.</span> </p><p><span m='2590190'>And how
  can have too many good ideas?</span> </p><p><span m='2592160'>Well, you can
  have too many good ideas if no one idea</span> <span m='2595170'>rises above
  and becomes the idea that people think about</span> <span m='2598120'>when
  they think about you.</span> </p><p><span m='2600310'>We have people on the
  faculty who would have been more</span> <span m='2602130'>famous if their
  theses had fewer ideas.</span> </p><p><span m='2604280'>It's amazing.</span>
  </p><p><span m='2606530'>So this piece of work did have a salient.</span>
  </p><p><span m='2609670'>And the salient idea was that you could get one
  shot</span> <span m='2613390'>learning via the use of near misses.</span>
  </p><p><span m='2618920'>That was the salient idea.</span> </p><p><span
  m='2621290'>The fifth thing, ah.</span> </p><p><span m='2624660'>Talk more
  about this in my "How to</span> <span m='2627600'>Speak" lecture in
  January.</span> </p><p><span m='2628960'>The fifth thing I like people to try
  to incorporate into</span> <span m='2631950'>their presentations is a
  story.</span> </p><p><span m='2637000'>Because we humans somehow love
  stories.</span> </p><p><span m='2640290'>We love people to tell us
  stories.</span> </p><p><span m='2641610'>We love things to be packaged in
  stories.</span> </p><p><span m='2643260'>And believe me, I think all of
  education is essentially about</span> <span m='2646920'>storytelling and story
  understanding.</span> </p><p><span m='2649850'>So if you want your idea to be
  sold to the venture</span> <span m='2652480'>capitalist, if you want to get
  the faculty job, if you want</span> <span m='2656850'>to get your book sold to
  a publisher, if you want to sell</span> <span m='2659940'>something to a
  customer, ask yourself if your presentation</span> <span m='2663720'>has these
  qualities in it.</span> </p><p><span m='2665300'>And if it has all of those
  things, it's a lot more likely</span> <span m='2668230'>to be effective than
  it doesn't.</span> </p><p><span m='2670120'>And you'll end up being
  famous.</span> </p><p><span m='2671550'>Now you say to me, well, being
  famous-- that sounds like the</span> <span m='2675030'>Sloan School type of
  concept.</span> </p><p><span m='2678020'>Isn't it immoral to want to be
  famous?</span> </p><p><span m='2682570'>Maybe that's a decision you can
  make.</span> </p><p><span m='2685270'>But whenever I think about the question,
  I somehow think of</span> <span m='2690880'>the idea that your ideas are like
  your children.</span> </p><p><span m='2692730'>You want to be sure that they
  have the best life possible.</span> </p><p><span m='2696050'>So if they're not
  packaged well, they won't.</span> </p><p><span m='2699390'>I'm also reminded
  of an evening I spent at a soiree</span> <span m='2706670'>with Julia
  Child.</span> </p><p><span m='2710400'>Julia, and there's me.</span>
  </p><p><span m='2714600'>And I have no idea how come I got to sit</span> <span
  m='2716770'>next to Julia Child.</span> </p><p><span m='2717700'>I think they
  thought I was one of the rich Winstons.</span> </p><p><span m='2720600'>The
  Winston flowers, or the Harry Winston diamonds or</span> <span
  m='2723250'>something like that.</span> </p><p><span m='2723960'>There I was,
  sitting next to Julia Child.</span> </p><p><span m='2726700'>And the
  interesting thing--</span> <span m='2727940'>by the way, did you notice I'm
  now telling a story?</span> </p><p><span m='2731379'>The interesting thing
  about this experience was that there</span> <span m='2736120'>was a constant
  flow of people--</span> <span m='2742760'>happened to be all women--</span>
  <span m='2744410'>people going past Ms. Child saying how wonderful she
  was</span> <span m='2749430'>to have made such an enormous change in their
  life.</span> </p><p><span m='2752840'>Must have been 10 of them.</span>
  </p><p><span m='2753340'>It was amazing.</span> </p><p><span m='2754190'>Just
  steady flow.</span> </p><p><span m='2756250'>So eventually I leaned over to
  her and I said, Ms. Child, is</span> <span m='2760730'>it fun to be
  famous?</span> </p><p><span m='2763130'>And she thought about it a second and
  said,</span> <span m='2765930'>you get used to it.</span> </p><p><span
  m='2768360'>And that had a profound effect on me, because you always
  say,</span> <span m='2771380'>well, what's the opposite like?</span>
  </p><p><span m='2773810'>Is it fun to be ignored?</span> </p><p><span
  m='2775330'>And the answer is, no, it's not much fun to be ignored.</span>
  </p><p><span m='2780950'>So yeah, it's something you can get used to, but you
  can</span> <span m='2783990'>never get used to having your stuff ignored,
  especially if</span> <span m='2787180'>it's good stuff.</span> </p><p><span
  m='2788610'>So that's why I commend to you this business</span> <span
  m='2790270'>about packaging ideas.</span> </p><p><span m='2792160'>And now you
  see that 6034 is not just about AI.</span> </p><p><span m='2794770'>It's about
  how to do good science.</span> </p><p><span m='2796140'>It's how to make
  yourself smarter, and how to make</span> <span m='2798220'>yourself more
  famous.</span> </p><p></p>
embedded_media:
  - uid: c9e654112a5bd7176287ca9d3e5fa001
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: sh3EPjhhd40
  - uid: 42a3161731a122625ad12b2eb4e28b07
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-15-learning-near-misses/id765641080?i=194475714
  - uid: 0425a59d88370302dd747a80d3430fa3
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec15_300k.mp4'
  - uid: 50049c0c4cdba8e3d859953e1ed7f909
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/sh3EPjhhd40/default.jpg'
  - uid: 23d8d03b42392c8568e91ec37fe67732
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: sh3EPjhhd40
  - uid: 3fb8ea259bb40ddec0d07a31bd423cd6
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: sh3EPjhhd40.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-15-learning-near-misses-felicity-conditions/sh3EPjhhd40.srt
  - uid: 804e853adcbd0bcf387d32c69a7a5be7
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: sh3EPjhhd40.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-15-learning-near-misses-felicity-conditions/sh3EPjhhd40.pdf
  - uid: 72973152766cdf5a0d76f6843bc787e8
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 8979304842acc6775110ad18e734f374
    parent_uid: 69c3f174890ae9d040802ca9e013df19
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
