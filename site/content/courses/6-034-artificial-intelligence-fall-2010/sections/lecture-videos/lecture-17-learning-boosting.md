---
about_this_resource_text: >-
  <p><strong>Description:</strong> Can multiple weak classifiers be used to make
  a strong one?  We examine the boosting algorithm, which adjusts the weight of
  each classifier, and work through the math. We end with how boosting doesn't
  seem to overfit, and mention some applications.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: UHBmv7qCey4
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: Video-YouTube-Stream
    type: Video
    uid: 15870b7326e3a530f26468b1bb394804
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-17-learning-boosting/id765641080?i=194475733
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: Video-iTunes U-MP4
    type: Video
    uid: 6b39b66731fd3958cdb9c06682f595eb
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec17_300k.mp4'
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 820990c03bf5a3a337e48128f86383dc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/UHBmv7qCey4/default.jpg'
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: db311e4f32ad2224617bac71edf745c5
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: UHBmv7qCey4
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 1bc4f46141d41d9824bf7b1e95a17930
  - id: UHBmv7qCey4.srt
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-17-learning-boosting/UHBmv7qCey4.srt
    title: 3play caption file
    type: null
    uid: 646a32f6bbee5d6cfad65ca981e8c953
  - id: UHBmv7qCey4.pdf
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-17-learning-boosting/UHBmv7qCey4.pdf
    title: 3play pdf file
    type: null
    uid: 253a7f25bca8bb092ad09ccee848a0a3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4760bdd1e54fb3eca8b9f4782af43078
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: bb982745cd8302ecb5ba7a0ee144c56f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9229bb43c4e55aa7bdcb4d1ce86fb85c
inline_embed_id: '96566775lecture17:learning:boosting53288034'
order_index: 189
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: >-
  <p>Specifically developed for this lecture are the <a
  href="./resolveuid/6f12118abb4d06b7fe816142e59dc883" target="_blank">boosting
  notes (PDF)</a>, which are also listed among the readings for this course.</p>
short_url: lecture-17-learning-boosting
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-17-learning-boosting
title: 'Lecture 17: Learning: Boosting'
transcript: >-
  <p><span m='9640'>PATRICK WINSTON: We've now almost completed our
  journey.</span> </p><p><span m='11900'>This will be it for talking
  about</span> <span m='15650'>several kinds of learning--</span> <span
  m='17260'>the venerable kind, that's the nearest neighbors and</span> <span
  m='21920'>identification tree types of learning.</span> </p><p><span
  m='24310'>Still useful, still the right thing to do if there's no</span> <span
  m='26910'>reason not to do the simple thing.</span> </p><p><span
  m='30180'>Then we have the biologically-inspired</span> <span
  m='32330'>approaches.</span> </p><p><span m='33290'>Neural nets.</span>
  </p><p><span m='35110'>All kinds of problems with local maxima and
  overfitting</span> <span m='38500'>and oscillation, if you get the rate
  constant too big.</span> </p><p><span m='45600'>Genetic algorithms.</span>
  </p><p><span m='48870'>Like neural nets, both are very naive in their attempt
  to</span> <span m='53150'>mimic nature.</span> </p><p><span m='54800'>So maybe
  they work on a class of problems.</span> </p><p><span m='57250'>They surely do
  each have a class of problems for which</span> <span m='59470'>they're
  good.</span> </p><p><span m='59940'>But as a general purpose first resort, I
  don't recommend it.</span> </p><p><span m='65190'>But now the theorists have
  come out and done some things</span> <span m='67540'>are very
  remarkable.</span> </p><p><span m='69539'>And in the end, you have to say,
  wow, these are such</span> <span m='71830'>powerful ideas.</span> </p><p><span
  m='74490'>I wonder if nature has discovered them, too?</span> </p><p><span
  m='77780'>Is there good engineering in the brain,</span> <span m='80420'>based
  on good science?</span> </p><p><span m='82780'>Or given the nature of
  evolution, is it just random</span> <span m='84990'>junk that is the best ways
  for doing anything?</span> </p><p><span m='88800'>Who knows?</span>
  </p><p><span m='90180'>But today, we're going to talk about an idea that I'll
  bet is</span> <span m='92220'>in there somewhere, because it's easy to
  implement, and</span> <span m='96259'>it's extremely powerful in what it does,
  and it's the</span> <span m='101180'>essential item in anybody's repertoire of
  learning</span> <span m='104979'>mechanisms.</span> </p><p><span
  m='106860'>It's also a mechanism which, if you understand only by</span> <span
  m='111820'>formula, you will never be able to work the problems on</span>
  <span m='115789'>the quiz, that's for sure.</span> </p><p><span
  m='117759'>Because on the surface, it looks like it'd be very</span> <span
  m='120780'>complicated to simulate this approach.</span> </p><p><span
  m='123920'>But once you understand how it works and look at a little
  bit</span> <span m='126530'>of the math and let it sing songs to you, it turns
  out to</span> <span m='128919'>be extremely easy.</span> </p><p><span
  m='133270'>So it's about letting multiple methods work in your behalf.</span>
  </p><p><span m='138980'>So far, we've been talking about using just one method
  to</span> <span m='141490'>do something.</span> </p><p><span m='143100'>And
  what we're going to do now is we're looking to see if a</span> <span
  m='145780'>crowd can be smarter than the individuals in the crowd.</span>
  </p><p><span m='153370'>But before we get too far down that abstract path, let
  me</span> <span m='156430'>just say that the whole works has to do with
  classification,</span> <span m='160750'>and binary classification.</span>
  </p><p><span m='164110'>Am I holding a piece of chalk in my hand, or a hand
  grenade?</span> </p><p><span m='168500'>Is that a cup of coffee or tea?</span>
  </p><p><span m='170750'>Those are binary classification problems.</span>
  </p><p><span m='173740'>And so we're going to be talking today strictly
  about</span> <span m='175790'>binary classification.</span> </p><p><span
  m='177590'>We're not going to be talking about finding the right letter</span>
  <span m='179570'>in the alphabet that's written on the page.</span>
  </p><p><span m='182290'>That's a 26-way choice.</span> </p><p><span
  m='184450'>We're talking about binary choices.</span> </p><p><span
  m='187190'>So we assume that there's a set of classifiers</span> <span
  m='190610'>that we can draw on.</span> </p><p><span m='192280'>Here's
  one--</span> <span m='193090'>h.</span> </p><p><span m='194520'>And it
  produces either a minus 1 or a plus 1.</span> </p><p><span m='200050'>So
  that's how the classification is done.</span> </p><p><span m='202880'>If it's
  coffee, plus 1.</span> </p><p><span m='204340'>If it's tea, minus 1.</span>
  </p><p><span m='206340'>Is this chalk, plus one.</span> </p><p><span
  m='207650'>If it's a hand grenade, minus 1.</span> </p><p><span m='209400'>So
  that's how the classification works.</span> </p><p><span m='212710'>Now, too
  bad for us, normally the world doesn't give us very</span> <span
  m='216090'>good classifiers.</span> </p><p><span m='216980'>So if we look at
  the error rate of this classifier or any</span> <span m='222500'>other
  classifier, that error rate will range from 0 to 1 in</span> <span
  m='230180'>terms of the fraction of the cases got</span> <span
  m='234480'>wrong on a sample set.</span> </p><p><span m='238230'>So you'd like
  your error rate to be way down here.</span> </p><p><span m='242020'>You're
  dead if it's over there.</span> </p><p><span m='244250'>But what about in the
  middle?</span> </p><p><span m='245950'>What if it's, say, right there.</span>
  </p><p><span m='248420'>Just a little bit better than flipping a coin.</span>
  </p><p><span m='251690'>If it's just a little bit better than flipping a
  coin,</span> <span m='254800'>that's a weak classifier.</span> </p><p><span
  m='264660'>And the question is, can you make a classifier that's way</span>
  <span m='268560'>over here, like there, a strong classifier, by</span> <span
  m='279240'>combining several of these weak classifiers, and</span> <span
  m='283210'>letting them vote?</span> </p><p><span m='286090'>So how would you
  do that?</span> </p><p><span m='287340'>You might say, well, let us make a big
  classifier capital</span> <span m='291920'>H, that works on some sample x, and
  has its output produces</span> <span m='303190'>something that depends on the
  sum of the outputs of the</span> <span m='305920'>individual
  classifiers.</span> </p><p><span m='308180'>So we have H1 working on x.</span>
  </p><p><span m='313100'>We have H2 working on x.</span> </p><p><span
  m='318340'>And we have H3 also working on x.</span> </p><p><span
  m='321770'>Let's say three of them, just to start us off.</span> </p><p><span
  m='324710'>And now let's add those guys up, and take</span> <span
  m='328670'>the sign of the output.</span> </p><p><span m='336190'>So if two
  out of the three of those guys agree, then we'll</span> <span m='340690'>get
  an either plus 1 or minus 1.</span> </p><p><span m='343409'>If all three
  agree, we'll get plus 1 or minus 1.</span> </p><p><span m='346150'>Because
  we're just taking the sign.</span> </p><p><span m='348320'>We're just taking
  the sign of the sum of these guys.</span> </p><p><span m='352620'>So this
  means that one guy can be wrong, as long as the other</span> <span
  m='356230'>two guys are right.</span> </p><p><span m='358180'>But I think it's
  easier to see how this all works if you</span> <span m='361850'>think of some
  space of samples, you say, well, let's</span> <span m='367380'>let that area
  here be where H1 is wrong, and this area over</span> <span m='375330'>here is
  where H2 is wrong.</span> </p><p><span m='382360'>And then this area over here
  is where H3 is wrong.</span> </p><p><span m='390430'>So if the situation is
  like that, then this formula always</span> <span m='394710'>gives you the
  right answers on the samples.</span> </p><p><span m='398250'>I'm going to stop
  saying that right now, because I want to</span> <span m='400610'>be kind of a
  background thing on the samples set.</span> </p><p><span m='404370'>We're
  talking about wrapping this stuff</span> <span m='405900'>over the sample
  set.</span> </p><p><span m='407840'>Later on, we'll ask, OK, given that you
  trained this thing on</span> <span m='410170'>a sample set, how well does it
  do on some new examples?</span> </p><p><span m='412880'>Because we want to ask
  ourselves</span> <span m='414420'>about overfitting questions.</span>
  </p><p><span m='417150'>But for now, we just want to look and see if we
  believe</span> <span m='421760'>that this arrangement, where each of these H's
  is producing</span> <span m='426690'>plus 1 or minus 1, we're adding them up
  and taking the</span> <span m='429450'>sign, is that going to give us a better
  result than the tests</span> <span m='432960'>individually?</span>
  </p><p><span m='433540'>And if they look like this when draped over a sample
  set,</span> <span m='437620'>then it's clear that we're going to get the right
  answer</span> <span m='439330'>every time, because there's no area here where
  any two of</span> <span m='444540'>those tests are giving us the wrong
  answer.</span> </p><p><span m='447640'>So the two that are getting the right
  answer, in this</span> <span m='450740'>little circle here for H1, these other
  two are getting</span> <span m='453530'>the right answer.</span> </p><p><span
  m='454190'>So they'll outvote it, and you'll get the right answer</span> <span
  m='456420'>every time.</span> </p><p><span m='459030'>But it doesn't have to
  be that simple.</span> </p><p><span m='464240'>It could look like this.</span>
  </p><p><span m='470159'>There could be a situation where this</span> <span
  m='474090'>is H1, wrong answer.</span> </p><p><span m='477080'>This is H2,
  wrong answer.</span> </p><p><span m='479600'>And this is H3, wrong
  answer.</span> </p><p><span m='484140'>And now the situation gets a little bit
  more murky, because</span> <span m='488150'>we have to ask ourselves whether
  that area where three</span> <span m='495820'>out of the three get it wrong is
  sufficiently big so as to</span> <span m='504870'>be worse than 1 of the
  individual tests.</span> </p><p><span m='511490'>So if you look at that Venn
  diagram, and stare at it long</span> <span m='514169'>enough, and try some
  things, you can say, well, there is no</span> <span m='517260'>case where this
  will give a worse answer.</span> </p><p><span m='520530'>Or, you might end up
  with the conclusion that there are</span> <span m='524590'>cases where we can
  arrange those circles such that the</span> <span m='530080'>voting scheme will
  give an answer that's worst than an</span> <span m='532220'>individual test,
  but I'm not going to tell you the answer,</span> <span m='535260'>because I
  think we'll make that a quiz question.</span> </p><p><span m='538970'>Good
  idea?</span> </p><p><span m='539830'>OK.</span> </p><p><span m='540870'>So
  we'll make that a quiz question.</span> </p><p><span m='546700'>So that looks
  like a good idea.</span> </p><p><span m='548840'>And we can construct a little
  algorithm that will help us</span> <span m='555460'>pick the particular weak
  classifiers to plug in here.</span> </p><p><span m='557660'>We've got a whole
  bag of classifiers.</span> </p><p><span m='560160'>We've got H1, we've got H2,
  we've got H55.</span> </p><p><span m='562640'>We've got a lot of them we can
  choose from.</span> </p><p><span m='564880'>So what we're going to do is we're
  going to use the data,</span> <span m='572114'>undisturbed, to produce
  H1.</span> </p><p><span m='577280'>We're just going to try all the tests on
  the data and see</span> <span m='579330'>which one gives us the smallest error
  rate.</span> </p><p><span m='581190'>And that's the good guy, so we're going
  to use that.</span> </p><p><span m='584830'>Then we're going to use the data
  with an</span> <span m='591300'>exaggeration of H1 errors.</span> </p><p><span
  m='604560'>In other words--</span> <span m='605560'>this is a critical
  idea.</span> </p><p><span m='606910'>What we're going to do is we're going to
  run this</span> <span m='610060'>algorithm again, but instead of just looking
  at the number</span> <span m='614010'>of samples that are got wrong, what
  we're going to do is</span> <span m='621730'>we're going to look at a
  distorted set of samples,</span> <span m='625370'>where the ones we're not
  doing well on has exaggerated effect</span> <span m='629480'>on the
  result.</span> </p><p><span m='631510'>So we're going to weight them or
  multiply them, or do</span> <span m='635730'>something so that we're going to
  pay more attention to the</span> <span m='640410'>samples on which H1 produces
  an error, and that's going to</span> <span m='643810'>give us H2.</span>
  </p><p><span m='647300'>And then we're going to do it one more time, because
  we've</span> <span m='649830'>got three things to go with here in this
  particular little</span> <span m='653410'>exploratory scheme.</span>
  </p><p><span m='655100'>And this time, we're going to have an</span> <span
  m='655970'>exaggeration of those samples--</span> <span m='664390'>which
  samples are we going to exaggerate now?</span> </p><p><span m='672250'>We
  might as well look for the ones where H1 gives us a</span> <span
  m='674510'>different answer from H2, because we want to be on the</span> <span
  m='677260'>good guy's side.</span> </p><p><span m='679460'>So we can say we're
  going to exaggerate those samples four</span> <span m='685070'>which H1 gives
  us a different result from H2.</span> </p><p><span m='689120'>And that's going
  to give us H3.</span> </p><p><span m='694210'>All right.</span> </p><p><span
  m='695260'>So we can think of this whole works here as part one of a</span>
  <span m='700530'>multi-part idea.</span> </p><p><span m='708680'>So let's
  see.</span> </p><p><span m='709880'>I don't know, what might be step
  two?</span> </p><p><span m='711260'>Well, this is a good idea.</span>
  </p><p><span m='713420'>Then what we've got that we can easily derive from
  that is</span> <span m='718540'>a little tree looked like this.</span>
  </p><p><span m='719910'>And we can say that H of x depends on H1, H2, and
  H3.</span> </p><p><span m='729900'>But now, if that that's a good idea, and
  that gives a better</span> <span m='734490'>answer than any of the individual
  tests, maybe we can</span> <span m='738210'>make this idea a little bit
  recursive, and say, well,</span> <span m='741460'>maybe H1 is actually not an
  atomic test.</span> </p><p><span m='745550'>But maybe it's the vote of three
  other tests.</span> </p><p><span m='750010'>So you can make a tree
  structure</span> <span m='751740'>that looks like this.</span> </p><p><span
  m='753750'>So this is H11, H12, H13, and then 3 here.</span> </p><p><span
  m='760680'>And then this will be H31, H32, H33.</span> </p><p><span
  m='768860'>And so that's a sort of get out the vote idea.</span> </p><p><span
  m='777200'>We're trying to get a whole bunch of individual</span> <span
  m='780190'>tests into the act.</span> </p><p><span m='783550'>So I guess the
  reason this wasn't discovered until about</span> <span m='786920'>'10 years
  ago was because you've got to get so many of</span> <span m='789650'>these
  desks all lined up before the idea gets through</span> <span m='792520'>that
  long filter of ideas.</span> </p><p><span m='795620'>So that's the only idea
  number two of quite a few.</span> </p><p><span m='803350'>Well, next thing we
  might think is, well, we keep</span> <span m='805900'>talking about these
  classifiers.</span> </p><p><span m='807080'>What kind of classifiers are we
  talking about?</span> </p><p><span m='810500'>I've got--</span> <span
  m='811912'>oh, shoot, I've spent my last nickel.</span> </p><p><span
  m='813740'>I don't have a coin to flip.</span> </p><p><span m='815300'>But
  that's one classifier, right?</span> </p><p><span m='817810'>The trouble with
  that classifier is it's a weak</span> <span m='821620'>classifier, because it
  gives me a 50/50</span> <span m='823780'>chance of being right.</span>
  </p><p><span m='826230'>I guess there are conditions in which a coin
  flip</span> <span m='828460'>is better than a--</span> <span m='830380'>it is
  a weak classifier.</span> </p><p><span m='832900'>If the two outcomes are not
  equally probable, than a coin</span> <span m='835680'>flip is a perfectly good
  weak classifier.</span> </p><p><span m='838900'>But what we're going to do is
  we're going to think in terms</span> <span m='841400'>of a different set of
  classifiers.</span> </p><p><span m='845460'>And we're going to call them
  decision tree.</span> </p><p><span m='852240'>Now, you remember decision
  trees, right?</span> </p><p><span m='854520'>But we're not going to build
  decision trees.</span> </p><p><span m='856000'>We're going to use decision
  tree stumps.</span> </p><p><span m='863480'>So if we have a two-dimensional
  space that</span> <span m='868640'>looks like this, then a decision tree stump
  is a</span> <span m='874790'>single test.</span> </p><p><span m='876540'>It's
  not a complete tree that will divide up the samples</span> <span
  m='878750'>into homogeneous groups.</span> </p><p><span m='880340'>It's just
  what you can do with one test.</span> </p><p><span m='884330'>So each possible
  test is a classifier.</span> </p><p><span m='888530'>How many tests do we get
  out of that?</span> </p><p><span m='899280'>12, right?</span> </p><p><span
  m='900550'>Yeah.</span> </p><p><span m='901040'>It doesn't look like 12 to me,
  either.</span> </p><p><span m='902540'>But here's how you get to 12.</span>
  </p><p><span m='905300'>One decision tree test you can stick in there would be
  that</span> <span m='910460'>test right there.</span> </p><p><span
  m='911390'>And that would be a complete decision tree stump.</span>
  </p><p><span m='916040'>But, of course, you can also put in this one.</span>
  </p><p><span m='920315'>That would be another decision tree stump.</span>
  </p><p><span m='923580'>Now, for this one on the right, I could say,
  everything</span> <span m='926370'>on the right is a minus.</span>
  </p><p><span m='928730'>Or, I could say, everything on the right is a
  plus.</span> </p><p><span m='933520'>It would happen to be wrong, but it's a
  valid test with a</span> <span m='937420'>valid outcome.</span> </p><p><span
  m='939130'>So that's how we double the number of test that</span> <span
  m='941130'>we have lines for.</span> </p><p><span m='943090'>And you know
  what?</span> </p><p><span m='944050'>can even have a kind of test out here
  that says everything</span> <span m='947280'>is plus, or everything is
  wrong.</span> </p><p><span m='951190'>So for each dimension, the number of
  decision tree stumps</span> <span m='955070'>is the number of lines I can put
  in times 2.</span> </p><p><span m='959120'>And then I've got two dimensions
  here, that's how I</span> <span m='960570'>got to twelve.</span> </p><p><span
  m='962310'>So there are three lines.</span> </p><p><span m='964470'>I can have
  the pluses on either the left</span> <span m='966300'>or the right
  side.</span> </p><p><span m='967070'>So that's six.</span> </p><p><span
  m='968670'>And then I've got two dimensions, so</span> <span m='969830'>that
  gives me 12.</span> </p><p><span m='971750'>So that's the decision tree stump
  idea.</span> </p><p><span m='974050'>And here are the other decision tree
  boundaries,</span> <span m='979180'>obviously just like that.</span>
  </p><p><span m='983940'>So that's one way can generate a batch of tests to try
  out</span> <span m='990750'>with this idea of using a lot of tests to
  help</span> <span m='995530'>you get the job done.</span> </p><p><span
  m='996455'>STUDENT: Couldn't you also have a decision tree on the</span> <span
  m='998558'>right side?</span> </p><p><span m='1000370'>PATRICK WINSTON: The
  question is, can you also have a test</span> <span m='1004330'>on the right
  side?</span> </p><p><span m='1005420'>See, this is just a stand-in for saying,
  everything's plus</span> <span m='1008530'>or everything's minus.</span>
  </p><p><span m='1010260'>So it doesn't matter where you put the line.</span>
  </p><p><span m='1012530'>It can be on the right side, or the left side, or
  the</span> <span m='1014362'>bottom, or the top.</span> </p><p><span
  m='1015640'>Or you don't have to put the line anywhere.</span> </p><p><span
  m='1016940'>It's just an extra test, an additional to the ones you put</span>
  <span m='1020640'>between the samples.</span> </p><p><span m='1022810'>So this
  whole idea of boosting, the</span> <span m='1026260'>main idea of the
  day.</span> </p><p><span m='1027040'>Does it depend on using decision tree
  stumps?</span> </p><p><span m='1029980'>The answer is no.</span> </p><p><span
  m='1032490'>Do not be confused.</span> </p><p><span m='1034390'>You can use
  boosting with any kind of classifier.</span> </p><p><span m='1037800'>so why
  do I use decision tree stumps today?</span> </p><p><span m='1041030'>Because
  it makes my life easy.</span> </p><p><span m='1043660'>We can look at it, we
  can see what it's doing.</span> </p><p><span m='1046420'>But we could put
  bunch of neural nets in there.</span> </p><p><span m='1049790'>We could put a
  bunch of real decision trees in there.</span> </p><p><span m='1053060'>We
  could put a bunch of nearest</span> <span m='1055530'>neighbor things in
  there.</span> </p><p><span m='1056660'>The boosting idea doesn't care.</span>
  </p><p><span m='1059200'>I just used these decision tree stumps because I
  and</span> <span m='1061880'>everybody else use them for illustration.</span>
  </p><p><span m='1065856'>All right.</span> </p><p><span m='1068270'>We're
  making progress.</span> </p><p><span m='1070780'>Now, what's the error rate
  for any these tests</span> <span m='1074470'>and lines we drew?</span>
  </p><p><span m='1076240'>Well, I guess it'll be the error rate is equal to the
  sum</span> <span m='1085110'>of 1 over n--</span> <span m='1086770'>That's the
  total number of points,</span> <span m='1089072'>the number of
  samples--</span> <span m='1093810'>summed over the cases where we are
  wrong.</span> </p><p><span m='1102450'>So gee, we're going to work on
  combining some of these ideas.</span> </p><p><span m='1106770'>And we've got
  this notion of exaggeration.</span> </p><p><span m='1109690'>At some stage in
  what we're doing here, we're going to</span> <span m='1111980'>want to be able
  to exaggerate the effect of some errors</span> <span m='1114280'>relative to
  other errors.</span> </p><p><span m='1116870'>So one thing we can do is we can
  assume, or we can</span> <span m='1121700'>stipulate, or we can assert that
  each of these samples has</span> <span m='1126620'>a weight associated with
  it.</span> </p><p><span m='1127930'>That's W1, this is W2, and that's
  W3.</span> </p><p><span m='1133370'>And in the beginning, there's no reason to
  suppose that any</span> <span m='1136140'>one of these is more or less
  important</span> <span m='1137610'>than any of the other.</span> </p><p><span
  m='1139160'>So in the beginning, W sub i at time [? stub ?] one is</span>
  <span m='1145370'>equal to 1 over n.</span> </p><p><span m='1150160'>So the
  error is just adding up the number of samples that</span> <span
  m='1154170'>were got wrong.</span> </p><p><span m='1155730'>And that'll be the
  fraction of samples to that</span> <span m='1158205'>you didn't get
  right.</span> </p><p><span m='1159350'>And that will be the error rate.</span>
  </p><p><span m='1162010'>So what we want to do is we want to say, instead of
  using</span> <span m='1166270'>this as the error rate for all time, what we
  want to do is we</span> <span m='1170175'>want to move that over, and say that
  the error rate is</span> <span m='1174140'>equal to the sum over the things
  you got wrong in the</span> <span m='1179300'>current step, times the weights
  of those</span> <span m='1183010'>that were got wrong.</span> </p><p><span
  m='1184770'>So in step one, everything's got the same weight, it</span> <span
  m='1187140'>doesn't matter.</span> </p><p><span m='1188200'>But if we find a
  way to change their weights going</span> <span m='1190710'>downstream--</span>
  <span m='1192750'>so as to, for example, highly exaggerate that third
  sample,</span> <span m='1197750'>then W3 will go up relative to W1 and
  W2.</span> </p><p><span m='1203780'>The one thing we want to be sure of is
  there is no matter</span> <span m='1206250'>how we adjust the weights, that
  the sum of the weights</span> <span m='1211350'>over the whole space is equal
  to 1.</span> </p><p><span m='1217310'>So in other words, we want to choose the
  weights so that</span> <span m='1219170'>they emphasize some of the samples,
  but we also want to</span> <span m='1222130'>put a constraint on the weights
  such that all of them</span> <span m='1225510'>added together is summing to
  one.</span> </p><p><span m='1230200'>And we'll say that that enforces a
  distribution.</span> </p><p><span m='1235938'>A distribution is a set of
  weights that sum to one.</span> </p><p><span m='1241400'>Well, that's just a
  nice idea.</span> </p><p><span m='1245570'>So we're make a little
  progress.</span> </p><p><span m='1246780'>We've got this idea that we can add
  some plus/minus 1</span> <span m='1251750'>classifiers together, you get a
  better classifier.</span> </p><p><span m='1255130'>We got some idea about how
  to do that.</span> </p><p><span m='1258480'>It occurs to us that maybe we want
  to get a lot of</span> <span m='1260080'>classifiers into the act somehow or
  another.</span> </p><p><span m='1263500'>And maybe we want to think about
  using decision tree</span> <span m='1267000'>stumps so as to ground out
  thinking about all this stuff.</span> </p><p><span m='1271220'>So the next
  step is to say, well, how actually should we</span> <span m='1276830'>combine
  this stuff?</span> </p><p><span m='1279040'>And you will find, in the
  literature libraries, full of</span> <span m='1281800'>papers that do stuff
  like that.</span> </p><p><span m='1284550'>And that was state of the art for
  quite a few years.</span> </p><p><span m='1288090'>But then people began to
  say, well, maybe we can build up</span> <span m='1292390'>this classifier, H
  of x, in multiple steps and get a lot</span> <span m='1297350'>of classifiers
  into the act.</span> </p><p><span m='1300090'>So maybe we can say that the
  classifier is the sign of H--</span> <span m='1311786'>that's the one we
  picked first.</span> </p><p><span m='1314130'>That's the classifier we picked
  first.</span> </p><p><span m='1316990'>That's looking at samples.</span>
  </p><p><span m='1318490'>And then we've got H2.</span> </p><p><span
  m='1320790'>And then we've got H3.</span> </p><p><span m='1323090'>And then
  we've got how many other classifiers we might</span> <span m='1326220'>want,
  or how many classifiers we might need in order to</span> <span
  m='1331620'>correctly classify everything in our sample set.</span>
  </p><p><span m='1336800'>So people began to think about whether there might be
  an</span> <span m='1339760'>algorithm that would develop a classifier that
  way,</span> <span m='1342560'>one step at a time.</span> </p><p><span
  m='1346240'>That's why I put that step number in the exponent,</span> <span
  m='1349660'>because we're picking this one at first, then we're
  expanding</span> <span m='1353280'>it to have two, and then we're expanding it
  to have</span> <span m='1355010'>three, and so on.</span> </p><p><span
  m='1356620'>And each of those individual classifiers are separately</span>
  <span m='1358960'>looking at the sample.</span> </p><p><span m='1362530'>But
  of course, it would be natural to suppose that just</span> <span
  m='1366380'>adding things up wouldn't be enough.</span> </p><p><span
  m='1369150'>And it's not.</span> </p><p><span m='1370870'>So it isn't too hard
  to invent the next idea, which is to</span> <span m='1374690'>modify this
  thing just a little bit by doing what?</span> </p><p><span m='1380250'>It
  looks almost like a scoring polynomial, doesn't it?</span> </p><p><span
  m='1384420'>So what would we do to tart this up a little bit?</span>
  </p><p><span m='1388308'>STUDENT: [INAUDIBLE].</span> </p><p><span
  m='1391050'>PATRICK WINSTON: Come again?</span> </p><p><span m='1391955'>Do
  what?</span> </p><p><span m='1393380'>STUDENT: [INAUDIBLE].</span>
  </p><p><span m='1396230'>PATRICK WINSTON: Somewhere out there someone's
  murmuring.</span> </p><p><span m='1399360'>STUDENT: Add--</span> <span
  m='1399815'>PATRICK WINSTON: Add weights!</span> </p><p><span
  m='1401100'>STUDENT: --weights.</span> </p><p><span m='1401505'>Yeah.</span>
  </p><p><span m='1401910'>PATRICK WINSTON: Excellent.</span> </p><p><span
  m='1402185'>Good idea.</span> </p><p><span m='1404040'>So what we're going to
  do is we're going to have alphas</span> <span m='1408320'>associated with each
  of these classifiers, and we're going</span> <span m='1412105'>to determine if
  somebody can build that kind</span> <span m='1414240'>formula to do the
  job.</span> </p><p><span m='1418790'>So maybe I ought to modify this gold star
  idea before I</span> <span m='1421780'>get too far downstream.</span>
  </p><p><span m='1424250'>And we're not going to treat everybody in a crowd
  equally.</span> </p><p><span m='1432240'>We're going to wait some of the
  opinions more than others.</span> </p><p><span m='1435760'>And by the way,
  they're all going to make errors in</span> <span m='1437790'>different parts
  of the space.</span> </p><p><span m='1440910'>So maybe it's not the wisdom of
  even a weighted crowd, but</span> <span m='1445775'>a crowd of experts.</span>
  </p><p><span m='1452360'>Each of which is good at different parts of the
  space.</span> </p><p><span m='1456860'>So anyhow, we've got this formula, and
  there are a few</span> <span m='1459770'>things that one can say turn
  out.</span> </p><p><span m='1465780'>But first, let's write down the an
  algorithm for what this</span> <span m='1471530'>ought to look like.</span>
  </p><p><span m='1473140'>Before I run out of space, I think I'll exploit the
  right</span> <span m='1475810'>hand board here, and put the overall algorithm
  right here.</span> </p><p><span m='1481110'>So we're going to start out by
  letting of all the weights at</span> <span m='1487410'>time 1 be equal to 1
  over n.</span> </p><p><span m='1493570'>That's just saying that they're all
  equal in the</span> <span m='1496330'>beginning, and they're equal to 1 over
  n.</span> </p><p><span m='1499170'>And n is the number of samples.</span>
  </p><p><span m='1506090'>And then, when I've got that, I want to</span> <span
  m='1511130'>compute alpha, somehow.</span> </p><p><span m='1517510'>Let's
  see.</span> </p><p><span m='1518780'>No, I don't want to do that.</span>
  </p><p><span m='1520210'>I want to</span> <span m='1522810'>I want to pick a
  classifier the minimizes the error rate.</span> </p><p><span m='1537730'>And
  then m, i, zes, error at time t.</span> </p><p><span m='1543050'>And that's
  going to be at time t.</span> </p><p><span m='1545230'>And we're going to come
  back in here.</span> </p><p><span m='1546340'>That's why we put a step index
  in there.</span> </p><p><span m='1550160'>So once we've picked a classifier
  that produces an</span> <span m='1556790'>error rate, then we can use the
  error rate to</span> <span m='1559210'>determine the alpha.</span>
  </p><p><span m='1560350'>So I want the alpha over here.</span> </p><p><span
  m='1567910'>That'll be sort of a byproduct of picking that test.</span>
  </p><p><span m='1571900'>And with all that stuff in hand, maybe that will
  be</span> <span m='1574890'>enough to calculate Wt plus 1.</span> </p><p><span
  m='1588600'>So we're going to use that classifier that we just picked</span>
  <span m='1593162'>to get some revised weights, and then we're going to
  go</span> <span m='1596040'>around that loop until this classifier produces a
  perfect</span> <span m='1601870'>set of conclusions on all the sample
  data.</span> </p><p><span m='1606290'>So that's going to be our overall
  strategy.</span> </p><p><span m='1609560'>Maybe we've got, if we're going to
  number these things,</span> <span m='1611800'>that's the fourth big
  idea.</span> </p><p><span m='1614960'>And this arrangement here is the fifth
  big idea.</span> </p><p><span m='1619350'>Then we've got the sixth big
  idea.</span> </p><p><span m='1621390'>And the sixth big idea says this.</span>
  </p><p><span m='1626940'>Suppose that the weight on it ith sample at time t
  plus 1 is</span> <span m='1639340'>equal to the weight at time t on that same
  sample, divided</span> <span m='1648600'>by some normalizing factor, times e
  to the minus alpha at</span> <span m='1658150'>time t, times h at time t,
  times some function y which is</span> <span m='1672750'>a function of x, But
  not a function of time.</span> </p><p><span m='1678160'>Now you say, where did
  this come from?</span> </p><p><span m='1681280'>And the answer is, it did not
  spring from the heart of</span> <span m='1683670'>mathematician in the first
  10 minutes that he</span> <span m='1686190'>looked at this problem.</span>
  </p><p><span m='1687800'>In fact, when I asked [INAUDIBLE]</span> <span
  m='1689550'>how this worked, he said, well, he was thinking about</span> <span
  m='1693300'>this on the couch every Saturday for about a year, and</span>
  <span m='1695630'>his wife was getting pretty sore, but he finally found
  it</span> <span m='1698200'>and saved their marriage.</span> </p><p><span
  m='1700590'>So where does stuff like this come from?</span> </p><p><span
  m='1703950'>Really, it comes from knowing a lot of mathematics, and</span>
  <span m='1707080'>seeing a lot of situations, and knowing that
  something</span> <span m='1709280'>like this might be mathematically
  convenient.</span> </p><p><span m='1714570'>Something like this might be
  mathematically convenient.</span> </p><p><span m='1720080'>But we've got to
  back up a little and let it sing to us.</span> </p><p><span m='1722670'>What's
  y?</span> </p><p><span m='1724010'>We saw y last time.</span> </p><p><span
  m='1725100'>The support vector machines.</span> </p><p><span
  m='1726910'>That's just a function.</span> </p><p><span m='1727780'>That's
  plus 1 or minus 1, depending on whether the</span> <span m='1731270'>output
  ought to be plus 1 or minus 1.</span> </p><p><span m='1735310'>So if this guy
  is giving the correct answer, and the</span> <span m='1742200'>correct answer
  is plus, and then this guy will be plus 1</span> <span m='1746630'>too,
  because it always gives you the correct answer.</span> </p><p><span
  m='1750210'>So in that case, where this guy is giving the right</span> <span
  m='1752330'>answer, these will have the same sign, so that will be a</span>
  <span m='1755190'>plus 1 combination.</span> </p><p><span m='1756960'>On the
  other hand, if that guy's giving the wrong answer,</span> <span
  m='1759000'>you're going to get a minus 1 out of that combination.</span>
  </p><p><span m='1762450'>So it's true even if the right answer should be
  minus, right?</span> </p><p><span m='1765680'>So if the right answer should be
  minus, and this is plus,</span> <span m='1768320'>then this will be minus 1,
  and the whole combination well</span> <span m='1770820'>give you minus 1
  again.</span> </p><p><span m='1771945'>In other words, the y just flips the
  sign if you've got</span> <span m='1776360'>the wrong answer, no matter
  whether the wrong answer is</span> <span m='1779170'>plus 1 or minus 1.</span>
  </p><p><span m='1782330'>These alphas--</span> <span m='1783650'>shoot, those
  are the same alphas that are in this</span> <span m='1786420'>formula up here,
  somehow.</span> </p><p><span m='1789950'>And then that z, what's that
  for?</span> </p><p><span m='1792840'>Well, if you just look at the previous
  weights, and its</span> <span m='1795650'>exponential function to produce
  these W's for the next</span> <span m='1800900'>generation, that's not going
  to be a distribution, because</span> <span m='1804910'>they won't sum up to
  1.</span> </p><p><span m='1807620'>So what this thing here, this z is, that's
  a sort of</span> <span m='1811470'>normalizer.</span> </p><p><span
  m='1818750'>And that makes that whole combination of new</span> <span
  m='1821680'>weights add up to 1.</span> </p><p><span m='1823980'>So it's
  whatever you got by adding up all those guys, and</span> <span
  m='1831570'>then dividing by that number.</span> </p><p><span
  m='1834660'>Well, phew.</span> </p><p><span m='1843030'>I don't know.</span>
  </p><p><span m='1844350'>Now there's some it-turns-out-thats.</span>
  </p><p><span m='1850360'>We're going to imagine that somebody's done the same
  sort</span> <span m='1852230'>of thing we did to the support vector
  machines.</span> </p><p><span m='1854940'>We're going to find a way to
  minimize the error.</span> </p><p><span m='1857730'>And the error we're going
  to minimize is the error produced</span> <span m='1859540'>by that whole thing
  up there in 4.</span> </p><p><span m='1862420'>We're going to minimize the
  error of that entire</span> <span m='1865120'>expression as we go
  along.</span> </p><p><span m='1868930'>And what we discover when we do the
  appropriate</span> <span m='1871970'>differentiations and stuff--</span> <span
  m='1873775'>you know, that's what we do in calculus--</span> <span
  m='1875710'>what we discover is that you get minimum error for the</span>
  <span m='1884580'>whole thing if alpha is equal to 1 minus the error rate
  at</span> <span m='1905970'>time t, divided by the error rate at time
  t.</span> </p><p><span m='1911190'>Now let's take the logarithm of that,
  and</span> <span m='1913950'>multiply it by half.</span> </p><p><span
  m='1916220'>And that's what [INAUDIBLE]</span> <span m='1917140'>was
  struggling to find.</span> </p><p><span m='1919880'>But we haven't quite got
  it right.</span> </p><p><span m='1921350'>And so let me add this in separate
  chunks, so we don't</span> <span m='1923800'>get confused about this.</span>
  </p><p><span m='1925926'>It's a bound on that expression up there.</span>
  </p><p><span m='1932880'>It's a bound on the error rate produced by that
  expression.</span> </p><p><span m='1936510'>So interestingly enough, this
  means that the error rate can</span> <span m='1942540'>actually go up as you
  add terms to this formula.</span> </p><p><span m='1946000'>all you know is
  that the error rate is going to be bounded by</span> <span m='1948560'>an
  exponentially decaying function.</span> </p><p><span m='1952080'>So it's
  eventually guaranteed to converge on zero.</span> </p><p><span m='1956910'>So
  it's a minimal error bound.</span> </p><p><span m='1958260'>It turns out to be
  exponential.</span> </p><p><span m='1963120'>Well, there it is.</span>
  </p><p><span m='1965630'>We're done.</span> </p><p><span m='1966120'>Would you
  like to see a demonstration?</span> </p><p><span m='1968207'>Yeah, OK.</span>
  </p><p><span m='1969550'>Because you look at that, and you say, well, how
  could</span> <span m='1971260'>anything like that possibly work?</span>
  </p><p><span m='1973800'>And the answer is, surprisingly enough, here's</span>
  <span m='1977120'>what happens.</span> </p><p><span m='1979720'>There's a
  simple little example.</span> </p><p><span m='1982440'>So that's the first
  test chosen.</span> </p><p><span m='1985310'>the greens are pluses and the
  reds are minuses, so it's</span> <span m='1989470'>still got an error.</span>
  </p><p><span m='1991480'>Still got an error-- boom.</span> </p><p><span
  m='1992620'>There, in two steps.</span> </p><p><span m='1993830'>It now
  has--</span> <span m='1994600'>we can look in the upper right hand
  corner--</span> <span m='1996670'>we see its used three classifiers, and we
  see that</span> <span m='2000460'>one of those classifiers says that everybody
  belongs to a</span> <span m='2002900'>particular class, three different
  weights.</span> </p><p><span m='2007250'>And the error rate has converged to
  0.</span> </p><p><span m='2010540'>So let's look at a couple of other
  ones.</span> </p><p><span m='2012170'>Here is the one I use for debugging this
  thing.</span> </p><p><span m='2015060'>We'll let that run.</span> </p><p><span
  m='2016250'>See how fast it is?</span> </p><p><span m='2017690'>Boom.</span>
  </p><p><span m='2018710'>It converges to getting all the samples right very
  fast.</span> </p><p><span m='2022800'>Here's another one.</span> </p><p><span
  m='2024190'>This is one we gave on an exam a few years back.</span>
  </p><p><span m='2027350'>First test.</span> </p><p><span m='2028670'>Oh, I let
  it run, so it got everything</span> <span m='2030620'>instantaneously
  right.</span> </p><p><span m='2032380'>Let's take that through step at a
  time.</span> </p><p><span m='2033950'>There's the first one, second
  one.</span> </p><p><span m='2036940'>Still got a lot of errors.</span>
  </p><p><span m='2038800'>Ah, the error rate's dropping.</span> </p><p><span
  m='2041600'>And then flattened, flattened, and it goes to 0.</span>
  </p><p><span m='2046160'>Cool, don't you think?</span> </p><p><span
  m='2048000'>But you say to me, bah, who cares about that stuff?</span>
  </p><p><span m='2050010'>Let's try something more interesting.</span>
  </p><p><span m='2051540'>There's one.</span> </p><p><span m='2054190'>That was
  pretty fast, too.</span> </p><p><span m='2055500'>Well, there's not too many
  samples here.</span> </p><p><span m='2057090'>So we can try this.</span>
  </p><p><span m='2060030'>So there's an array of pluses and minuses.</span>
  </p><p><span m='2062230'>Boom.</span> </p><p><span m='2062940'>You can see how
  that error rate is bounded by an</span> <span m='2064920'>exponential?</span>
  </p><p><span m='2067920'>So in a bottom graph, you've got the number of
  classifiers</span> <span m='2072800'>involved, and that goes up to a total,
  eventually, of 10.</span> </p><p><span m='2076650'>You can see how positive or
  negative each of the</span> <span m='2081230'>classifiers that's added is by
  looking at</span> <span m='2083530'>this particular tab.</span> </p><p><span
  m='2085270'>And this just shows how they evolve over time.</span> </p><p><span
  m='2088045'>But the progress thing here is the most interesting.</span>
  </p><p><span m='2092239'>And now you say to me, well, how did the machine do
  that?</span> </p><p><span m='2097420'>And it's all right here.</span>
  </p><p><span m='2100330'>We use an alpha that looks like this.</span>
  </p><p><span m='2105400'>And that allows us to compute the new weights.</span>
  </p><p><span m='2108400'>It says we've got a preliminary calculation.</span>
  </p><p><span m='2110150'>We've got to find a z that does the
  normalization.</span> </p><p><span m='2113630'>And we sure better bring our
  calculator, because we've got,</span> <span m='2117640'>first of all, to
  calculate the error rate.</span> </p><p><span m='2119350'>Then we've got to
  take its logarithm, divide by 2, plug</span> <span m='2122365'>it into that
  formula, take the exponent, and that gives us</span> <span m='2127290'>the new
  weight.</span> </p><p><span m='2128210'>And that's how the program
  works.</span> </p><p><span m='2129460'>And if you try that, I guarantee
  you</span> <span m='2130880'>will flunk the exam.</span> </p><p><span
  m='2133130'>Now, I don't care about my computer.</span> </p><p><span
  m='2134940'>I really don't.</span> </p><p><span m='2135920'>It's a slave, and
  it can calculate these logarithm and</span> <span m='2139050'>exponentials
  till it turns blue, and I don't care.</span> </p><p><span m='2141840'>Because
  I've got four cores or something, and who cares.</span> </p><p><span
  m='2144740'>Might as well do this, than sit around</span> <span
  m='2146220'>just burning up heat.</span> </p><p><span m='2148391'>But you
  don't want to do that.</span> </p><p><span m='2149640'>So what you want to do
  is you want to know how to do this</span> <span m='2153010'>sort of thing more
  expeditiously.</span> </p><p><span m='2157240'>So we're going to have to let
  them the math sing to us a</span> <span m='2160720'>little bit, with a view
  towards finding better ways of</span> <span m='2165470'>doing this sort of
  thing.</span> </p><p><span m='2168290'>So let's do that.</span> </p><p><span
  m='2171700'>And we're going to run out of space here before long, so
  let</span> <span m='2174080'>me reclaim as much of this board as I can.</span>
  </p><p><span m='2178450'>So what I'm going to do is I'm going to say, well,
  now that</span> <span m='2180940'>we've got this formula for alpha that
  relates alpha t to</span> <span m='2185720'>the error, then I can plug that
  into this formula up</span> <span m='2191530'>here, number 6.</span>
  </p><p><span m='2192345'>And what I'll get is that the weight of t plus 1 is
  equal to</span> <span m='2200390'>the weight at t divided by that normalizing
  factor,</span> <span m='2206710'>multiplied times something that depends on
  whether it's</span> <span m='2213350'>categorized correctly or not.</span>
  </p><p><span m='2215600'>That's what that y's in their for, right?</span>
  </p><p><span m='2219660'>So we've got a logarithm here, and we got a sign
  flipper up</span> <span m='2225630'>there in terms of that H of x and y
  combination.</span> </p><p><span m='2230690'>So if the sign of that whole
  thing at minus alpha and that</span> <span m='2238220'>y H combination turns
  out to be negative, then we're going</span> <span m='2243900'>to have to flip
  the numerator and denominator here in this</span> <span m='2247740'>logarithm,
  right?</span> </p><p><span m='2249620'>And oh, by the way, since we've got a
  half out here,</span> <span m='2252250'>that turns out to be the square root
  of that term</span> <span m='2254170'>inside the logarithm.</span>
  </p><p><span m='2257190'>So when we carefully do that, what we discover is
  that it</span> <span m='2263290'>depends on whether it's the right thing or
  not.</span> </p><p><span m='2266430'>But what it turns out to be is something
  like a multiplier of</span> <span m='2270860'>the square root.</span>
  </p><p><span m='2273750'>Better be careful, here.</span> </p><p><span
  m='2275960'>The square root of what?</span> </p><p><span m='2279300'>STUDENT:
  [INAUDIBLE].</span> </p><p><span m='2282030'>PATRICK WINSTON: Well, let's
  see.</span> </p><p><span m='2282860'>But we have to be careful.</span>
  </p><p><span m='2284180'>So let's suppose that this is 4 things that we get
  correct.</span> </p><p><span m='2293740'>So if we get it correct, then we're
  going to get the same</span> <span m='2297910'>sign out of H of x and
  y.</span> </p><p><span m='2300200'>We've get a minus sign out there, so we're
  going to flip</span> <span m='2302350'>the numerator and denominator.</span>
  </p><p><span m='2305500'>So we're going to get the square root of e of t over
  1</span> <span m='2310460'>minus epsilon of t if that's correct.</span>
  </p><p><span m='2314110'>If it's wrong, it'll just be the flip of that.</span>
  </p><p><span m='2319350'>So it'll be the square root of 1 minus the error rate
  over</span> <span m='2324690'>the error rate.</span> </p><p><span
  m='2328570'>Everybody with me on that?</span> </p><p><span m='2329740'>I think
  that's right.</span> </p><p><span m='2331620'>If it's wrong, I'll have to hang
  myself and wear a paper</span> <span m='2335930'>bag over my head like I did
  last year.</span> </p><p><span m='2337760'>But let's see if we can make this
  go correctly this time.</span> </p><p><span m='2345730'>So now, we've got this
  guy here, we've got everything</span> <span m='2352430'>plugged in all right,
  and we know that now this z ought to</span> <span m='2358110'>be selected so
  that it's equal to the sum of this guy</span> <span m='2362630'>multiplied by
  these things as appropriate for whether it's</span> <span m='2365070'>correct
  or not.</span> </p><p><span m='2368220'>Because we want, in the end, for all
  of these w's</span> <span m='2371710'>to add up to 1.</span> </p><p><span
  m='2374320'>So let's see what they add up to without the z there.</span>
  </p><p><span m='2379830'>So what we know is that it must be the case that if
  we</span> <span m='2384840'>add over the correct ones, we get the square root
  of the</span> <span m='2393670'>error rate over 1 minus the rate of the Wt
  plus 1.</span> </p><p><span m='2404100'>Plus now we've got the sum of 1 minus
  the error rate over</span> <span m='2409520'>the error rate, times the sum of
  the Wi at time t for wrong.</span> </p><p><span m='2424340'>So that's what we
  get if we added all these</span> <span m='2427320'>up without the z.</span>
  </p><p><span m='2430420'>So since everything has to add up to 1, then z ought
  to be</span> <span m='2433400'>equal to this sum.</span> </p><p><span
  m='2443880'>That looks pretty horrible, until we realize that if we</span>
  <span m='2447960'>add these guys up over the weights that are wrong,
  that</span> <span m='2451930'>is the error rate.</span> </p><p><span
  m='2455880'>This is e.</span> </p><p><span m='2459850'>So therefore, z is
  equal the square root of the error rate</span> <span m='2468540'>times 1 minus
  the error rate.</span> </p><p><span m='2470710'>That's the contribution of
  this term.</span> </p><p><span m='2474040'>Now, let's see.</span> </p><p><span
  m='2475310'>What is the sum of the weights over the</span> <span
  m='2477700'>ones that are correct?</span> </p><p><span m='2480320'>Well, that
  must be 1 minus the error rate.</span> </p><p><span m='2485020'>Ah, so this
  thing gives you the same result as this one.</span> </p><p><span
  m='2490290'>So z is equal to 2 times that.</span> </p><p><span m='2494170'>And
  that's a good thing.</span> </p><p><span m='2498580'>Now we are getting
  somewhere.</span> </p><p><span m='2500540'>Because now, it becomes a little
  bit easier to write</span> <span m='2504380'>some things down.</span>
  </p><p><span m='2506490'>Well, we're way past this, so let's get rid of
  this.</span> </p><p><span m='2514090'>And now we can put some things
  together.</span> </p><p><span m='2517940'>Let me point out what I'm putting
  together.</span> </p><p><span m='2520910'>I've got an expression for z right
  here.</span> </p><p><span m='2526560'>And I've got an expression for the new
  w's here.</span> </p><p><span m='2531320'>So let's put those together and say
  that w of t plus 1 is</span> <span m='2539020'>equal to w of t.</span>
  </p><p><span m='2543150'>I guess we're going to divide that by 2.</span>
  </p><p><span m='2546090'>And then we've got this square root times that
  expression.</span> </p><p><span m='2553470'>So if we take that correct one,
  and divide by that one,</span> <span m='2560470'>then the [INAUDIBLE]</span>
  <span m='2564970'>cancel out, and I get 1 over 1 minus the error rate.</span>
  </p><p><span m='2573560'>That's it.</span> </p><p><span m='2573850'>That's
  correct.</span> </p><p><span m='2579880'>And if it's not correct, then it's Wt
  over 2--</span> <span m='2584620'>and working through the math--</span> <span
  m='2585670'>1 over epsilon, if wrong.</span> </p><p><span m='2591950'>Do we
  feel like we're making any progress?</span> </p><p><span
  m='2595130'>No.</span> </p><p><span m='2596030'>Because we haven't let it sing
  to us enough yet.</span> </p><p><span m='2599090'>So I want to draw your
  attention to what happens to</span> <span m='2605130'>amateur rock climbers
  when they're halfway</span> <span m='2608500'>up a difficult cliff.</span>
  </p><p><span m='2611360'>They're usually [INAUDIBLE], sometimes they're
  not.</span> </p><p><span m='2613570'>If they're not, they're scared to
  death.</span> </p><p><span m='2616800'>And every once in a while, as they're
  just about to fall,</span> <span m='2620850'>they find some little tiny hole
  to stick a fingernail in,</span> <span m='2624410'>and that keeps them from
  falling.</span> </p><p><span m='2626510'>That's called a thank-god
  hole.</span> </p><p><span m='2630440'>So what I'm about to introduce is the
  analog of those little</span> <span m='2633680'>places where you can stick
  your fingernail in.</span> </p><p><span m='2635530'>It's the thank-god hole
  for dealing</span> <span m='2637380'>with boosting problems.</span>
  </p><p><span m='2644680'>So what happens if I add all these [? Wi ?]</span>
  <span m='2647370'>up for the ones that the classifier where produces a</span>
  <span m='2652470'>correct answer on?</span> </p><p><span m='2656050'>Well,
  it'll be 1 over 2, and 1 over 1 minus epsilon, times</span> <span
  m='2662110'>the sum of the Wt for which the answer was correct.</span>
  </p><p><span m='2669490'>What's this sum?</span> </p><p><span
  m='2671781'>Oh!</span> </p><p><span m='2672450'>My goddess.</span>
  </p><p><span m='2674480'>1 minus epsilon.</span> </p><p><span m='2678920'>So
  what I've just discovered is that if I sum new w's over</span> <span
  m='2690920'>those samples for which I got a correct answer,</span> <span
  m='2693880'>it's equal to 1/2.</span> </p><p><span m='2696490'>And guess
  what?</span> </p><p><span m='2697130'>That means that if I sum them over
  wrong, it's equal to 1/2</span> <span m='2703240'>half as well.</span>
  </p><p><span m='2707710'>So that means that I take all of the weight for which
  I got</span> <span m='2711300'>the right answer with the previous test, and
  those ways</span> <span m='2718000'>will add up to something.</span>
  </p><p><span m='2719990'>And to get the weights for the next generation, all I
  have to</span> <span m='2722263'>do is scale them so that they equal
  half.</span> </p><p><span m='2724780'>This was not noticed by the people
  who</span> <span m='2726710'>developed this stuff.</span> </p><p><span
  m='2727000'>This was noticed by Luis Ortiz, who was a 6.034</span> <span
  m='2731210'>instructor a few years ago.</span> </p><p><span m='2734160'>The
  sum of those weights is going to be a scaled version</span> <span
  m='2738660'>of what they were before.</span> </p><p><span m='2741400'>So you
  take all the weights for which this new</span> <span
  m='2743340'>classifier--</span> <span m='2744590'>this one you selected to
  give you the minimum weight on the</span> <span m='2746890'>re-weighted
  stuff--</span> <span m='2748050'>you take the ones that it gives a correct
  answer for,</span> <span m='2750520'>and you take all of those weights, and
  you just scale</span> <span m='2752775'>them so they add up to 1/2.</span>
  </p><p><span m='2755770'>So do you have to compute any logarithms?</span>
  </p><p><span m='2758730'>No.</span> </p><p><span m='2759670'>Do you have to
  compute any exponentials?</span> </p><p><span m='2761320'>No.</span>
  </p><p><span m='2762230'>Do you have to calculate z?</span> </p><p><span
  m='2763790'>No.</span> </p><p><span m='2765170'>Do you have to calculate alpha
  to get the new weights?</span> </p><p><span m='2767120'>No.</span>
  </p><p><span m='2767755'>All you have to do is scale them.</span> </p><p><span
  m='2769690'>And that's a pretty good thank-god hole.</span> </p><p><span
  m='2772730'>So that's thank-god hole number one.</span> </p><p><span
  m='2781890'>Now, for thank-god hole number two, we need to go back and</span>
  <span m='2786340'>think about the fact that were going to give you problems
  in</span> <span m='2788720'>probability that involve decision tree
  stumps.</span> </p><p><span m='2792940'>And there are a lot of decision tree
  stumps that you</span> <span m='2795790'>might have to pick from.</span>
  </p><p><span m='2798050'>So we need a thank-god hole for deciding how</span>
  <span m='2799940'>to deal with that.</span> </p><p><span m='2802320'>Where can
  I find some room?</span> </p><p><span m='2803330'>How about right here.</span>
  </p><p><span m='2813870'>Suppose you've got a space that looks like
  this.</span> </p><p><span m='2822810'>I'm just makings this up at
  random.</span> </p><p><span m='2826020'>So how many--</span> <span
  m='2827020'>let's see.</span> </p><p><span m='2827180'>1, 2, 3, 4, 5, 6, 7, 8,
  9, 10, 11.</span> </p><p><span m='2831300'>How many tests do I have to
  consider in that dimension?</span> </p><p><span m='2837598'>11.</span>
  </p><p><span m='2839077'>It's 1 plus the number of samples.</span>
  </p><p><span m='2842060'>That would be horrible.</span> </p><p><span
  m='2846590'>I don't know.</span> </p><p><span m='2847080'>Do I have actually
  calculate this one?</span> </p><p><span m='2853040'>How could that possibly be
  better than that one?</span> </p><p><span m='2856430'>It's got one more thing
  wrong.</span> </p><p><span m='2859930'>So that one makes sense.</span>
  </p><p><span m='2865570'>The other one doesn't make sense.</span> </p><p><span
  m='2868940'>So in the end, no test that lies between two correctly</span>
  <span m='2875520'>classified samples will ever be any good.</span>
  </p><p><span m='2878530'>So that one's a good guy, and that one's a good
  guy.</span> </p><p><span m='2881830'>And this one's a bad guy.</span>
  </p><p><span m='2882870'>Bad guy, bad guy bad guy, bad guy.</span>
  </p><p><span m='2885600'>Bad guy, bad guy, bad buy.</span> </p><p><span
  m='2888910'>So the actual number of tests you've got is three.</span>
  </p><p><span m='2894410'>And likewise, in the other dimension--</span> <span
  m='2897770'>well, I haven't drawn it so well here, but would this test</span>
  <span m='2899960'>be a good one?</span> </p><p><span m='2900660'>No.</span>
  </p><p><span m='2901320'>That one?</span> </p><p><span m='2901690'>No.</span>
  </p><p><span m='2904760'>Actually, I'd better look over here on the right and
  see what</span> <span m='2906465'>I've got before I draw too many
  conclusions.</span> </p><p><span m='2908400'>Let's look over this, since I
  don't want to think too hard</span> <span m='2910870'>about what's going on in
  the other dimension.</span> </p><p><span m='2912980'>But the idea is that very
  few of those</span> <span m='2915270'>tests actually matter.</span>
  </p><p><span m='2918240'>Now, you say to me, there's one last thing.</span>
  </p><p><span m='2919770'>What about overfitting?</span> </p><p><span
  m='2921762'>Because all this does is drape a solution over the samples.</span>
  </p><p><span m='2925800'>And like support vector machines overfit, neural
  maps</span> <span m='2929110'>overfit, identification trees overfit.</span>
  </p><p><span m='2932580'>Guess what?</span> </p><p><span m='2933820'>This
  doesn't seem to overfit.</span> </p><p><span m='2936290'>That's an
  experimental result for which the</span> <span m='2939130'>literature is
  confused.</span> </p><p><span m='2941470'>It goes back to providing an
  explanation.</span> </p><p><span m='2943920'>So this stuff is tried on all
  sorts of problems, like</span> <span m='2946210'>handwriting recognition,
  understanding speech, all</span> <span m='2950100'>sorts of stuff uses
  boosting.</span> </p><p><span m='2952180'>And unlike other methods, for some
  reason as yet imperfectly</span> <span m='2956010'>understood, it doesn't seem
  to overfit.</span> </p><p><span m='2960260'>But in the end, they leave no
  stone unturned in 6.034.</span> </p><p><span m='2965550'>Every time we do
  this, we do some additional experiments.</span> </p><p><span m='2968670'>So
  here's a sample that I'll leave you with.</span> </p><p><span
  m='2972410'>Here's a situation in which we have a 10-dimensional space.</span>
  </p><p><span m='2976130'>We've made a fake distribution, and then we
  put</span> <span m='2978270'>in that boxed outlier.</span> </p><p><span
  m='2980270'>That was just put into the space at random, so it can be</span>
  <span m='2982630'>viewed as an error point.</span> </p><p><span m='2985230'>So
  now what we're going to do is we're going to see what</span> <span
  m='2987240'>happens when we run that guy.</span> </p><p><span m='2989560'>And
  sure enough, in 17 steps, it finds a solution.</span> </p><p><span
  m='2995140'>But maybe it's overfit that little guy who's an error.</span>
  </p><p><span m='2999620'>But one thing you can do is you can say, well, all
  of</span> <span m='3003000'>these classifiers are dividing this space up into
  chunks, and</span> <span m='3006890'>we can compute the size of the space
  occupied by any sample.</span> </p><p><span m='3011750'>So one thing we can
  do--</span> <span m='3013650'>alas, I'll have to get up a new
  demonstration.</span> </p><p><span m='3016370'>One thing we can do, now that
  this guy's over here, we can</span> <span m='3019750'>switch the volume tab
  and watch how the volume occupied</span> <span m='3023310'>by that error point
  evolves as we solve the problem.</span> </p><p><span m='3029640'>So look what
  happens.</span> </p><p><span m='3031820'>This is, of course, randomly
  generated.</span> </p><p><span m='3033380'>I'm counting on this
  working.</span> </p><p><span m='3035390'>Never failed before.</span>
  </p><p><span m='3039930'>So it originally starts out as occupying 26%</span>
  <span m='3044510'>of the total volume.</span> </p><p><span m='3047020'>It ends
  up occupying 1.4 times 10 to the</span> <span m='3052360'>minus 3rd% of the
  volume.</span> </p><p><span m='3055910'>So what tends to happen is that these
  decision tree</span> <span m='3060060'>stumps tend to wrap themselves so
  tightly around the error</span> <span m='3063190'>points, there's no room for
  overfitting, because nothing</span> <span m='3065350'>else will fit in that
  same volume.</span> </p><p><span m='3067550'>So that's why I think that this
  thing tends to produce</span> <span m='3070390'>solutions which don't
  overfit.</span> </p><p><span m='3072430'>So in conclusion, this is
  magic.</span> </p><p><span m='3074970'>You always want to use it.</span>
  </p><p><span m='3076010'>It'll work with any kind of [? speed ?] of</span>
  <span m='3077510'>classifiers you want.</span> </p><p><span m='3079090'>And
  you should understand it very thoroughly, because of</span> <span
  m='3081590'>anything is useful in the subject in dimension learning,</span>
  <span m='3085740'>this is it.</span> </p><p></p>
uid: bb982745cd8302ecb5ba7a0ee144c56f
type: courses
layout: video
---
