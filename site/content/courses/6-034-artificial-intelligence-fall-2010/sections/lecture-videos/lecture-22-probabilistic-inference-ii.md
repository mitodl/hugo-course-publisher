---
about_this_resource_text: >-
  <p><strong>Description:</strong> We begin with a review of inference nets,
  then discuss how to use experimental data to develop a model, which can be
  used to perform simulations. If we have two competing models, we can use
  Bayes' rule to determine which is more likely to be accurate.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: EC6bf8JCpDQ
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: Video-YouTube-Stream
    type: Video
    uid: 819cfb3719701b4a7cf3ea4072e17dd6
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-22-probabilistic-inference/id765641080?i=194480724
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: Video-iTunes U-MP4
    type: Video
    uid: 8cff65f79b82813c7a69fbd9bfdb1729
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec22_300k.mp4'
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: Video-Internet Archive-MP4
    type: Video
    uid: 064d93cc196714ec3cedddba225cf75c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/EC6bf8JCpDQ/default.jpg'
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 268705b176e8a92efd3959b5ebe52b29
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: EC6bf8JCpDQ
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 18ba4173d9564dd391ec9e347fa4ab06
  - id: EC6bf8JCpDQ.srt
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-22-probabilistic-inference-ii/EC6bf8JCpDQ.srt
    title: 3play caption file
    type: null
    uid: 0b25c3f4bbf49c5e02a437209c51d93a
  - id: EC6bf8JCpDQ.pdf
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-22-probabilistic-inference-ii/EC6bf8JCpDQ.pdf
    title: 3play pdf file
    type: null
    uid: 07185cb70f029720049b46505a90f396
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 01b41550361145984b2b747f1236819e
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 307ce222e2cf5554fd41c4ff21964cea
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 52a1d198d93cac8d041c73c3e1aee64d
inline_embed_id: '56460713lecture22:probabilisticinferenceii83241882'
order_index: 229
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: >-
  <p>Specifically developed for this lecture are the <a
  href="./resolveuid/3e6200ca84af05d95712045abedce9e9"
  target="_blank">probabilistic inference notes (PDF)</a>, which are also listed
  among the readings for this course.</p>
short_url: lecture-22-probabilistic-inference-ii
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-22-probabilistic-inference-ii
title: 'Lecture 22: Probabilistic Inference II'
transcript: >-
  <p><span m='9890'>PROFESSOR PATRICK WINSTON: I was in Washington for most
  of</span> <span m='11320'>the week prospecting for gold.</span> </p><p><span
  m='15050'>Another byproduct of that was that I forgot to arrange a</span>
  <span m='19820'>substitute Bob Berwick for the Thursday recitations.</span>
  </p><p><span m='25330'>I shall probably go to hell for this.</span>
  </p><p><span m='28070'>In any event, we have many explanations,</span> <span
  m='31830'>none of them good.</span> </p><p><span m='34670'>But today we'll try
  to get back on track and you'll learn</span> <span m='38680'>something
  fun.</span> </p><p><span m='40800'>In particular you will learn how a graduate
  student of mine</span> <span m='48060'>Mark [? Phillipson ?], together with a
  summer UROP</span> <span m='51940'>student, Brett van Zuiden, one of
  you--</span> <span m='58710'>managed to pull off a tour de force and recognize
  in these</span> <span m='62390'>two descriptions the pattern that we humans
  commonly call</span> <span m='66610'>"revenge." It was discovered.</span>
  </p><p><span m='69860'>The system didn't have a name for it, of course.</span>
  </p><p><span m='73090'>It just knew that there was a pattern there and sat
  waiting</span> <span m='76160'>for us to give a name to it.</span>
  </p><p><span m='77340'>That's where we're going to end up.</span> </p><p><span
  m='80635'>But it'll be a bit of a journey before we get there,</span> <span
  m='82840'>because we've got to go through all that</span> <span
  m='84039'>stuff on the outline.</span> </p><p><span m='86250'>And in
  particular, we want to start off by a</span> <span m='89740'>little tiny bit
  of review.</span> </p><p><span m='90910'>Because some of the stuff we did last
  time</span> <span m='93310'>went by pretty fast.</span> </p><p><span
  m='96440'>In particular, you may remember they had this</span> <span
  m='99630'>wonderful joint probability table, which tells us all we</span>
  <span m='102220'>want to know, all we want to know.</span> </p><p><span
  m='105229'>We can decide what the probability of the police</span> <span
  m='108950'>being called is given the this and the that, and all that</span>
  <span m='112520'>sort of stuff, by clicking the appropriate boxes.</span>
  </p><p><span m='116080'>The trouble is, gee, there are only three variables
  there.</span> </p><p><span m='120920'>And when there are lots of variables it
  gets pretty hard</span> <span m='123560'>to make up those numbers or to even
  collect them.</span> </p><p><span m='127010'>So we're driven to an
  alternative.</span> </p><p><span m='128550'>And we got to that alternative
  just at the end of</span> <span m='131890'>the show a week ago.</span>
  </p><p><span m='135210'>And we got to the point where we were defining
  these</span> <span m='141750'>inference nets, sometimes called "Bayes nets."
  And the</span> <span m='145370'>one we worked with looked like this.</span>
  </p><p><span m='149579'>There's a burglar, a raccoon, the possibility of a
  dog</span> <span m='153060'>barking, the police being called, and a trash can
  being</span> <span m='156500'>overturned.</span> </p><p><span m='158720'>So
  more variables than that.</span> </p><p><span m='160620'>That only has
  three.</span> </p><p><span m='161579'>This has got five.</span> </p><p><span
  m='164420'>But we're able to do some magic with this because we, as</span>
  <span m='167590'>humans, when we define--</span> <span m='168960'>when we draw
  this graph we're making an assertion about how</span> <span m='172130'>things
  depend or don't depend on one another.</span> </p><p><span m='175740'>In
  particular, there's something to break down and</span> <span
  m='180410'>memorize to the point where it rolls off your tongue.</span>
  </p><p><span m='183240'>And that is that any variable on this graph is said by
  me to</span> <span m='188240'>be independent of any other</span> <span
  m='190310'>non-descendant given its parents.</span> </p><p><span
  m='194500'>Independent of any</span> <span m='195770'>non-descendant given its
  parents.</span> </p><p><span m='199690'>So that means that the probability of
  the dog</span> <span m='201930'>barking, given its parents, doesn't depend on
  T, the trash</span> <span m='207340'>can being overturned.</span> </p><p><span
  m='208930'>Because the intuition is all of the causality is flowing</span>
  <span m='212900'>through the parents and can't get to this variable D
  without</span> <span m='218800'>going through the parents.</span> </p><p><span
  m='221440'>So that is [? inserted ?]</span> <span m='222680'>property of the
  nets that we draw.</span> </p><p><span m='224290'>And we tend to draw them in
  a way that reflects causality.</span> </p><p><span m='226960'>So it tends to
  make sense.</span> </p><p><span m='229000'>So somehow this thing is going to
  be--</span> <span m='236329'>we're going to use this thing instead of that
  thing.</span> </p><p><span m='239710'>But wait.</span> </p><p><span
  m='240880'>We may need that thing in order to do all the</span> <span
  m='242920'>computations we want to perform.</span> </p><p><span m='245530'>So
  we need to be able to show that we can get to that thing</span> <span
  m='249930'>by doing calculations on this thing.</span> </p><p><span
  m='255160'>So what to do?</span> </p><p><span m='258300'>Well, we're going to
  use the chain rule.</span> </p><p><span m='260100'>And remember that the chain
  rule came to us by way of the</span> <span m='263450'>basic Axioms of
  Probability plus the definition plus a</span> <span m='268250'>little colored
  chalk.</span> </p><p><span m='270580'>So we got to the point last time where
  we</span> <span m='273570'>sort of believed this.</span> </p><p><span
  m='274750'>It's a really magical thing.</span> </p><p><span m='275920'>It says
  that the probability of all this stuff happening</span> <span
  m='278670'>together is given as the product of a bunch of</span> <span
  m='282170'>conditional probabilities.</span> </p><p><span m='284470'>And the
  conditional probabilities in this product</span> <span m='287380'>are arranged
  such that this first guy depends</span> <span m='289430'>on everybody
  else.</span> </p><p><span m='291500'>The second guy doesn't depend on the
  first guy but depends</span> <span m='294050'>on everything else.</span>
  </p><p><span m='295690'>So that list of dependencies gets smaller and smaller
  as</span> <span m='298850'>you go down here until it depends only one
  thing.</span> </p><p><span m='301380'>There's no conditional at all.</span>
  </p><p><span m='305050'>So that's going to come to our rescue because it
  enables us</span> <span m='308780'>to go from calculations in here to that
  whole table.</span> </p><p><span m='314210'>But first I have to show you a
  little bit more slowly how</span> <span m='317740'>that comes to be.</span>
  </p><p><span m='319720'>One thing I'm going to do before I think about</span>
  <span m='321800'>probability is I'm going to make a linear list of all</span>
  <span m='325650'>these variables.</span> </p><p><span m='327330'>And the way
  I'm going to make it is I'm going to chew away</span> <span m='329290'>at
  those variables from the bottom.</span> </p><p><span m='332030'>I've taken
  advantage of a very important</span> <span m='333810'>property of these
  nets.</span> </p><p><span m='336630'>And that is there no loops.</span>
  </p><p><span m='339490'>You can follow the arrows in any way so as</span>
  <span m='343090'>you get back to yourself.</span> </p><p><span m='345470'>So
  there's always going to be a bottom.</span> </p><p><span m='348200'>So what
  I'm going to do is I'm going to say, well, there are</span> <span
  m='350300'>two bottoms here, there's C and T. So I have a choice.</span>
  </p><p><span m='353409'>I'm going to choose C. So I'm going to take that off
  and</span> <span m='362330'>pretend it's not there anymore.</span>
  </p><p><span m='365570'>Then I'm going to take this guy.</span> </p><p><span
  m='366980'>That's now a bottom because there's nothing below it.</span>
  </p><p><span m='369430'>I've already taken C out.</span> </p><p><span
  m='371430'>So we'll take that out next.</span> </p><p><span m='374590'>And now
  I've got this guy, this guy, and this guy.</span> </p><p><span m='378440'>This
  guy no longer has anything below it.</span> </p><p><span m='381170'>So I can
  list it next.</span> </p><p><span m='383430'>Now over here I've got raccoon
  and trashcan.</span> </p><p><span m='386590'>But trashcan is at the
  bottom.</span> </p><p><span m='390450'>So I've got to take it next because I'm
  working</span> <span m='394040'>from the bottom up.</span> </p><p><span
  m='396011'>I want to ensure that there are no descendants before me</span>
  <span m='400760'>in this list.</span> </p><p><span m='402940'>So finally I get
  to raccoon.</span> </p><p><span m='405780'>So the way I constructed this list
  like so ensures that this</span> <span m='411930'>list arranges the elements
  so that for any particular</span> <span m='415020'>element, none of its
  descendants</span> <span m='417210'>appear to its left.</span> </p><p><span
  m='421300'>And now that's the magical order for which I want to use</span>
  <span m='424260'>the chain rule.</span> </p><p><span m='426030'>So now I can
  write--</span> <span m='427960'>I can pick C to be my variable n.</span>
  </p><p><span m='431260'>And I can say that the chain rule says that the
  joint</span> <span m='433530'>probability of all these variables P of
  C,</span> <span m='437410'>D, B, T, and R--</span> <span m='442140'>the
  probability of any particular combination of</span> <span m='444360'>those
  things is equal to the probability of C given</span> <span
  m='448140'>everybody else.</span> </p><p><span m='453659'>Next in line is D
  given everybody else.</span> </p><p><span m='462470'>Next in line is
  T--</span> <span m='465400'>next in line is B given everybody else.</span>
  </p><p><span m='477380'>And next in line is T given everybody else.</span>
  </p><p><span m='483270'>And finally, just R. So this combination of things has
  a</span> <span m='490840'>probability that is given by this chain rule
  expression.</span> </p><p><span m='495960'>Ah.</span> </p><p><span
  m='497010'>But first of all, none of those expressions condition</span> <span
  m='499500'>any of the variables on anything other than</span> <span
  m='501740'>non-descendants, all right?</span> </p><p><span m='505970'>That's
  just because of the way I've arranged the variables.</span> </p><p><span
  m='508650'>And I can always do that because are no loops.</span> </p><p><span
  m='510950'>I can always chew away at the bottom.</span> </p><p><span
  m='513169'>That ensures that whenever I write a variable, it's going</span>
  <span m='515140'>to be conditioned on stuff other than its descendants.</span>
  </p><p><span m='519440'>So all of these variables in any of these
  conditional</span> <span m='523190'>probabilities are non-descendants.</span>
  </p><p><span m='526700'>Oh wait.</span> </p><p><span m='528740'>When I drew
  this diagram, I asserted that no variable</span> <span m='534510'>depends on
  any non-descendant given its parents.</span> </p><p><span m='538680'>So if I
  know the parents of a variable I know that the</span> <span
  m='542950'>variable is independent of all other non-descendants.</span>
  </p><p><span m='545895'>All right?</span> </p><p><span m='547320'>Now I can
  start scratching stuff out.</span> </p><p><span m='550590'>Well, let's
  see.</span> </p><p><span m='551690'>I know that C, from my diagram, has only
  one parent,</span> <span m='556120'>D. So given its parent, it's independent
  of all other</span> <span m='561080'>non-descendants.</span> </p><p><span
  m='562730'>So I can scratch them out.</span> </p><p><span m='567370'>D he has
  two parents, B and R. But given that, I can scratch</span> <span
  m='573470'>out any other non-descendant.</span> </p><p><span m='577190'>B is
  conditional on T and R. Ah, but B has no parent.</span> </p><p><span
  m='581460'>So it actually is independent of those two guys.</span>
  </p><p><span m='585120'>The trashcan, yeah, that's dependent on R. And R
  over</span> <span m='588330'>here, the final thing in the chain, that's just
  a</span> <span m='590640'>probability.</span> </p><p><span m='593160'>So now I
  have a way of calculating any entry in that</span> <span m='596390'>table
  because any entry in that table is going to be some</span> <span
  m='598960'>combination of values for all those variables.</span> </p><p><span
  m='602880'>Voila.</span> </p><p><span m='604440'>So anything I can do with a
  table, I can do in principle</span> <span m='608320'>with this little
  network.</span> </p><p><span m='610580'>OK?</span> </p><p><span m='611920'>But
  now the question is, I've got some probabilities I'm</span> <span
  m='615480'>going to have to figure out here.</span> </p><p><span m='617100'>So
  let me draw a slightly different version of it.</span> </p><p><span
  m='626010'>So up here we've got the a priori probability of B. Well,</span>
  <span m='632030'>that's just probability of B. Down here with the dog,
  I've</span> <span m='646680'>got a bigger table because I've got probabilities
  that</span> <span m='650350'>depend on the values of its parents.</span>
  </p><p><span m='652950'>The probability of dog barking depends on the
  condition of</span> <span m='657620'>the parents, nothing else.</span>
  </p><p><span m='660560'>So let's see.</span> </p><p><span m='661070'>I've got
  to have a column for B. I've got to have a column</span> <span m='663920'>for
  the burglar and the raccoon.</span> </p><p><span m='668660'>And there are a
  bunch of possibilities for those guys.</span> </p><p><span m='671940'>But once
  I get those then I'll be able to calculate the</span> <span
  m='674050'>probability of the dog barking.</span> </p><p><span m='678640'>So
  there are two of these variables.</span> </p><p><span m='679910'>So there are
  four combinations.</span> </p><p><span m='682310'>There's T T. There's T R, R
  T, and--</span> <span m='690390'>whoa, what am I doing?</span> </p><p><span
  m='692134'>Wake up!</span> </p><p><span m='694050'>T false.</span>
  </p><p><span m='696720'>False true.</span> </p><p><span m='697930'>And false
  false.</span> </p><p><span m='699890'>So what I really want to do is I want to
  calculate all of</span> <span m='702060'>these probabilities that give the
  probability of the dog</span> <span m='705070'>condition of the burglar and
  the raccoon.</span> </p><p><span m='709210'>Similarly, I want to calculate the
  probability of B happening</span> <span m='713070'>doesn't depend on anything
  else.</span> </p><p><span m='716200'>So I don't know what to do.</span>
  </p><p><span m='718590'>Well, what I'm going to actually do is I'm going to
  do</span> <span m='720660'>the same thing I had to do up there.</span>
  </p><p><span m='723410'>I'm going to keep track of--</span> <span
  m='726630'>I'm going to try a bunch of--</span> <span m='727640'>I'm going to
  get myself together a bunch of data.</span> </p><p><span m='729560'>Maybe I do
  a bunch of experiments.</span> </p><p><span m='730910'>Maybe somebody hands it
  to me.</span> </p><p><span m='732730'>But I'm going to use that data to
  construct a bunch of</span> <span m='736030'>tallies which are going to end up
  giving me the probabilities</span> <span m='739990'>for all of those
  things.</span> </p><p><span m='742150'>So I don't know, let's see.</span>
  </p><p><span m='743160'>How should we start?</span> </p><p><span
  m='745440'>Step one, find colored chalk.</span> </p><p><span m='747290'>Step
  two, I'm going to extend these tables a little bit so I</span> <span
  m='750870'>can keep track of the tallies.</span> </p><p><span m='758840'>So
  this is going to be all the ones that end up in a</span> <span
  m='761580'>particular row.</span> </p><p><span m='762980'>And these are going
  to be the ones for which dog is true.</span> </p><p><span
  m='770930'>Similarly, I'm going to extend this guy up here in order to</span>
  <span m='773960'>keep track of some tallies.</span> </p><p><span
  m='776020'>This is going to be the ones for which B is true.</span>
  </p><p><span m='782990'>And this one will be all.</span> </p><p><span
  m='786780'>So that's my set up.</span> </p><p><span m='788680'>And now suppose
  that my first experiment comes roaring in.</span> </p><p><span m='792490'>And
  it's all T's.</span> </p><p><span m='795060'>So I have T T T. That's my first
  experimental result, my</span> <span m='801720'>first data item.</span>
  </p><p><span m='804170'>So let's see.</span> </p><p><span m='807480'>The
  arrangement here is burglar, raccoon, dog.</span> </p><p><span m='811010'>So
  burglar as a true.</span> </p><p><span m='815040'>And there's one tally count
  in there.</span> </p><p><span m='818510'>Likewise, the T T, that's the burglar
  and the raccoon, that</span> <span m='822280'>brings me down to this first
  row.</span> </p><p><span m='825190'>So that gives me one tally in there and
  dog is true so that</span> <span m='829200'>gives me a tick mark in that
  one.</span> </p><p><span m='832475'>All right?</span> </p><p><span
  m='833190'>Are you with me so far?</span> </p><p><span m='834240'>And now
  let's suppose that the next thing</span> <span m='835850'>happens be all
  false.</span> </p><p><span m='841940'>Well, burglar is false.</span>
  </p><p><span m='844020'>But there is one experiment.</span> </p><p><span
  m='848590'>Everybody's false.</span> </p><p><span m='849980'>So we come down
  here to false false.</span> </p><p><span m='853500'>And that's the row we're
  going to work on.</span> </p><p><span m='854810'>We get a tally in
  there.</span> </p><p><span m='856650'>Do we put one in here?</span>
  </p><p><span m='859150'>No, because that's false.</span> </p><p><span
  m='861860'>Dog is false.</span> </p><p><span m='862785'>That's what our data
  element says.</span> </p><p><span m='865650'>So that's cool.</span>
  </p><p><span m='866640'>Maybe one more.</span> </p><p><span m='868050'>Let's
  suppose we have T T F. Well in that case, we have a</span> <span
  m='877210'>tick mark here and a tick mark here because the burglar</span>
  <span m='882020'>element is true.</span> </p><p><span m='884360'>Then we have
  T T. That brings us to the first row again.</span> </p><p><span m='888040'>So
  we get a tick mark there.</span> </p><p><span m='890180'>But dog as false, so
  no tick mark there.</span> </p><p><span m='893500'>That's how it works.</span>
  </p><p><span m='895170'>I suppose you'd like to see a demonstration,
  right?</span> </p><p><span m='898550'>Always like to see a
  demonstration.</span> </p><p><span m='901030'>So here's what it actually looks
  like.</span> </p><p><span m='905680'>So on the left you see the network as
  we've constructed</span> <span m='910060'>it, with a bunch probabilities
  there.</span> </p><p><span m='912420'>And what I'm going to do now is I'm
  going to start</span> <span m='913850'>simulating away so as to accumulate
  tick marks, tally</span> <span m='917850'>marks, and see what kinds of
  probabilities that they</span> <span m='920160'>indicate for the table.</span>
  </p><p><span m='921920'>I happen to be using a process for which the model on
  the</span> <span m='925610'>left is a correct reflection.</span> </p><p><span
  m='929070'>So there's one simulation.</span> </p><p><span m='931540'>So the
  dog barking--</span> <span m='933460'>let's see, the burglar is false.</span>
  </p><p><span m='934800'>The raccoon is true.</span> </p><p><span m='936600'>I
  get one tick mark.</span> </p><p><span m='937710'>So the probability there is
  one.</span> </p><p><span m='940130'>Of course, I'm not going to just go with
  one.</span> </p><p><span m='943300'>I want to put a whole bunch of stuff in
  there.</span> </p><p><span m='944840'>So I'll just run a bunch more
  simulations.</span> </p><p><span m='950820'>No [? dice. ?]</span> <span
  m='951270'>I don't even have an entry at all yet for T F here.</span>
  </p><p><span m='954746'>That's because I haven't run enough data.</span>
  </p><p><span m='957210'>So let me clear it instead of doing it one at a
  time.</span> </p><p><span m='960280'>Let me run 100 simulations.</span>
  </p><p><span m='962280'>See, it's still not too good.</span> </p><p><span
  m='963450'>Because it says this T T probability true.</span> </p><p><span
  m='967500'>This just because I'm feeding it data, right?</span> </p><p><span
  m='969910'>And I'm keeping track of what the data elements tell me</span>
  <span m='972730'>about how frequently a</span> <span m='975470'>particular
  combination appears.</span> </p><p><span m='977180'>Yes, [INAUDIBLE]</span>
  <span m='977680'>STUDENT: So when you're doing one simulation, is that</span>
  <span m='980668'>[INAUDIBLE] variables?</span> </p><p><span
  m='982162'>PROFESSOR PATRICK WINSTON: When I'm doing one simulation,</span>
  <span m='983832'>I'm just keeping track of that combination in</span> <span
  m='986930'>each of these tables.</span> </p><p><span m='988800'>Because it's
  going to tell me something about the</span> <span m='990630'>probabilities
  that I want reflected in those tables.</span> </p><p><span m='993730'>So it's
  pretty easy to see when I go up here to burglar.</span> </p><p><span
  m='997090'>If I have a lot of data elements, they're all going to</span> <span
  m='998920'>tell me something about the burglar as well</span> <span
  m='1000730'>as the other variables.</span> </p><p><span m='1002280'>So if I
  just look at that burglar thing, the fraction of</span> <span m='1004910'>time
  that it turns out true over all the data elements is</span> <span
  m='1007850'>going to be its probability.</span> </p><p><span m='1010150'>So
  now when I go down to the joint tables, I can still get</span> <span
  m='1013610'>these probability numbers.</span> </p><p><span m='1014630'>But now
  they're conditioned on reticular</span> <span m='1016400'>condition of its
  parents.</span> </p><p><span m='1019010'>So that's how I get these
  probabilities.</span> </p><p><span m='1021430'>So I didn't do too well here
  because that T T combination</span> <span m='1024700'>gave me an excessively
  high probability.</span> </p><p><span m='1026579'>So maybe 100 simulations
  isn't enough.</span> </p><p><span m='1030130'>Let's run 10,000.</span>
  </p><p><span m='1035339'>So with that much data running through, the
  probabilities I</span> <span m='1038560'>get-- let's see, I've got 893 here,
  instead of 0.9, 807</span> <span m='1042310'>instead of 0.8, 607 instead of
  0.6.</span> </p><p><span m='1045880'>And that one's dead-on at 0.01.</span>
  </p><p><span m='1048500'>So if I run enough of these simulations, I get a
  pretty</span> <span m='1050570'>good idea what the probabilities ought to
  be</span> <span m='1053220'>given that I've got a correct model.</span>
  </p><p><span m='1057030'>OK, so that takes care of that one.</span>
  </p><p><span m='1058860'>And of course, I didn't draw the other things in
  here.</span> </p><p><span m='1060880'>But by extension, you can see how those
  would work.</span> </p><p><span m='1064800'>Oh.</span> </p><p><span
  m='1066180'>But you know what?</span> </p><p><span m='1066810'>I think I will
  put a little probability of</span> <span m='1068895'>raccoon table in
  here.</span> </p><p><span m='1072550'>Because the next thing I want to do is I
  want to</span> <span m='1075390'>go the other way.</span> </p><p><span
  m='1076470'>This is recoding tallies from some process so I</span> <span
  m='1079365'>can develop a model.</span> </p><p><span m='1080730'>But once I've
  got these probabilities, of course, then</span> <span m='1083670'>I can start
  to simulate what the model would do.</span> </p><p><span m='1087780'>All
  right?</span> </p><p><span m='1088610'>How would I do that?</span>
  </p><p><span m='1090690'>Well, do I want to use the same table?</span>
  </p><p><span m='1096220'>I think just to keep things sanitary, what I'll do is
  I'll</span> <span m='1099050'>go over here and do it again.</span>
  </p><p><span m='1101340'>Here's B. It's got a probability of B. Here's
  R.</span> </p><p><span m='1107260'>Here's a table probability of R. That comes
  down into a</span> <span m='1113300'>joint table for dog.</span> </p><p><span
  m='1116070'>And it's got four elements.</span> </p><p><span
  m='1124090'>Depending on the burglar condition and the raccoon</span> <span
  m='1126940'>condition, we get a probability of dog.</span> </p><p><span
  m='1131270'>And now, imagine these have all been filled in.</span>
  </p><p><span m='1133990'>So what do I want to do if I want to simulate this
  system</span> <span m='1137290'>generating some combination of values for all
  the variables?</span> </p><p><span m='1142130'>Well, I do the opposite of what
  I did when I was working</span> <span m='1145870'>around with this chain rule
  showing that I could go from</span> <span m='1149070'>the table to those
  probabilities.</span> </p><p><span m='1151480'>Now I've got the
  probabilities.</span> </p><p><span m='1152660'>I'm going to go the other
  direction.</span> </p><p><span m='1154450'>Instead of chewing away from the
  bottom, I'm going to chew</span> <span m='1157100'>away from the top.</span>
  </p><p><span m='1158660'>Because when I go into the top and chew way,
  everything I</span> <span m='1161740'>need to know to do a coin flip is
  there.</span> </p><p><span m='1164560'>So in particular, when I go up in here,
  I've got the</span> <span m='1168970'>probability of burglar now.</span>
  </p><p><span m='1171350'>So I'm going to use that probability to flip a
  coin.</span> </p><p><span m='1176250'>Say it produces a T. So that takes care
  of this guy.</span> </p><p><span m='1180950'>And I can now scratch it off
  since it's no longer in</span> <span m='1183730'>consideration.</span>
  </p><p><span m='1184390'>It's no longer a top variable.</span> </p><p><span
  m='1186940'>So now I go over into raccoon and I do the same thing.</span>
  </p><p><span m='1189330'>I take this probability.</span> </p><p><span
  m='1191190'>I do a flip.</span> </p><p><span m='1193310'>And say it produces
  an F. Whatever its probability is, I</span> <span m='1199130'>flip a biased
  coin and that's what I happen to get.</span> </p><p><span m='1202350'>But now,
  having dealt with these two guys, that uncovers</span> <span m='1206340'>this
  dog thing.</span> </p><p><span m='1208230'>And I've got enough information,
  because I've done</span> <span m='1210330'>everything above, to make the
  calculation for whether to dog</span> <span m='1213286'>is going to be barking
  or not.</span> </p><p><span m='1215510'>But wait.</span> </p><p><span
  m='1216520'>I have to know that I've got a T and a T and a T and an F
  and</span> <span m='1222530'>an F and a T and an F and an F. Because I have to
  select</span> <span m='1227060'>the right row.</span> </p><p><span
  m='1228820'>So I know that B is T. And I know that R is F. So that</span>
  <span m='1234610'>takes me into the table into the second row.</span>
  </p><p><span m='1239570'>So now I get this probability.</span> </p><p><span
  m='1242360'>I flip that coin and I get some result, say, T. Voila.</span>
  </p><p><span m='1249850'>I can do that with the other two variables.</span>
  </p><p><span m='1251810'>And I've got myself an experimental trial that
  is</span> <span m='1255390'>produced in accordance with the</span> <span
  m='1256620'>probabilities of the table.</span> </p><p><span
  m='1259219'>OK?</span> </p><p><span m='1263390'>Of course--</span> <span
  m='1268356'>yeah, in fact, how did I get those numbers?</span> </p><p><span
  m='1273730'>Actually what I did is I used the model on the left to</span>
  <span m='1276990'>generate the samples that were used to compute the</span>
  <span m='1279330'>probabilities on the right.</span> </p><p><span
  m='1282240'>So you've seen that a demonstration of this already.</span>
  </p><p><span m='1287910'>Now of course--</span> <span m='1291330'>I don't
  know, all of this sort of depends on having</span> <span
  m='1296400'>everything right.</span> </p><p><span m='1298030'>I've written a
  thing to write it one more time.</span> </p><p><span m='1302130'>Burglar,
  raccoon, dog, call the police, trashcan.</span> </p><p><span m='1311580'>But
  somebody else may say, oh, you've got it all wrong.</span> </p><p><span
  m='1314440'>This is what it really looks like.</span> </p><p><span
  m='1318560'>The dog doesn't care about the raccoon at all.</span> </p><p><span
  m='1321780'>So that's a correct model.</span> </p><p><span m='1324130'>Now
  when I do a simulation, I could fill in the tables in</span> <span
  m='1326380'>either model, right?</span> </p><p><span m='1327810'>I'm sure
  you'd like to see a demonstration.</span> </p><p><span m='1330800'>So let me
  show you a demonstration of that.</span> </p><p><span m='1341470'>So there are
  the two tables.</span> </p><p><span m='1343040'>And I can run 10,000
  simulations</span> <span m='1345060'>on those guys, too.</span> </p><p><span
  m='1348530'>Now, look.</span> </p><p><span m='1349270'>The guy on the left is
  a pretty good reflection of the</span> <span m='1351150'>probabilities in a
  model I used to produce the data.</span> </p><p><span m='1357630'>But the guy
  on the right doesn't know any better. it</span> <span m='1359253'>just fills
  in its own tables, too.</span> </p><p><span m='1362960'>So what to do?</span>
  </p><p><span m='1365950'>I say this one's the right model.</span> </p><p><span
  m='1368060'>And you say that one's the right model.</span> </p><p><span
  m='1370370'>Who's right?</span> </p><p><span m='1372090'>Maybe we'll never
  know.</span> </p><p><span m='1374120'>And the guy on the left will get rich in
  the stock market</span> <span m='1377830'>and the guy on the right will go
  broke.</span> </p><p><span m='1380630'>I would be nice if we could
  actually</span> <span m='1381370'>figure out who's right.</span> </p><p><span
  m='1384520'>So would you to see how to figure out who's right?</span>
  </p><p><span m='1387466'>Yeah, so would I. What we're going to do is we're
  going to</span> <span m='1389220'>look at naive Bayesian inference.</span>
  </p><p><span m='1391490'>And that's our next chore.</span> </p><p><span
  m='1393660'>So here's how it works.</span> </p><p><span m='1396740'>We know,
  from the definition of conditional probability, we</span> <span
  m='1400800'>know that the probability of A given B is equal to the</span>
  <span m='1405530'>probability of A and B divided by the</span> <span
  m='1409660'>probability of B, right?</span> </p><p><span m='1413520'>Equal to
  by definition.</span> </p><p><span m='1416400'>So that means that the
  probability of A given B times</span> <span m='1423540'>the probability of
  B--</span> <span m='1425240'>I'm just multiplying it out--</span> <span
  m='1426680'>it equal to that joint probability.</span> </p><p><span
  m='1432690'>Oh, but by symmetry, there's no harm in saying I can turn</span>
  <span m='1437715'>that around and say that the probability of B given A
  times</span> <span m='1442450'>the probability of B is also equal to that
  joint</span> <span m='1447000'>probability, right?</span> </p><p><span
  m='1448690'>I've just expanded it a different and symmetric way.</span>
  </p><p><span m='1452750'>If I've got to write a, b on B, b, a on A. Thank
  you.</span> </p><p><span m='1458630'>Who was complaining?</span> </p><p><span
  m='1459590'>Good work.</span> </p><p><span m='1464200'>That would have been a
  major-league disaster.</span> </p><p><span m='1467800'>But now, having written
  that, I can forget about the middle.</span> </p><p><span m='1470910'>Because
  all I'm really interested in is how I've</span> <span m='1472730'>turned the
  probabilities around in that conditional.</span> </p><p><span m='1477070'>Why
  would I care about doing that?</span> </p><p><span m='1478570'>By the way,
  we're now talking about the work of</span> <span m='1481760'>the Reverend
  Bayes.</span> </p><p><span m='1487060'>Because we can rewrite this yet again
  as the probability</span> <span m='1490420'>of A given B is equal to the
  probability of B given A times</span> <span m='1500160'>the probability of A
  divided by the probability of B.</span> </p><p><span m='1506420'>That's just
  elementary algebra.</span> </p><p><span m='1509790'>But now I'm going to do
  something magical.</span> </p><p><span m='1513460'>I'm going to say I've got a
  classification problem.</span> </p><p><span m='1518670'>I want to know which
  disease you have.</span> </p><p><span m='1522120'>That's a classification
  problem.</span> </p><p><span m='1523660'>Maybe you've got the swine
  flu.</span> </p><p><span m='1526120'>Maybe you've got indigestion.</span>
  </p><p><span m='1529790'>Who knows.</span> </p><p><span m='1530740'>But I get
  all these symptoms.</span> </p><p><span m='1533470'>I get all these pieces of
  evidence.</span> </p><p><span m='1535950'>You've got a fever.</span>
  </p><p><span m='1537450'>You're throwing--</span> <span m='1538140'>oh, well,
  let's not go into too much detail, there.</span> </p><p><span m='1540470'>But
  what I'm going to do is I'm going to say, well, let's</span> <span
  m='1542060'>suppose that A is equal to a class that I'm interested in,</span>
  <span m='1548490'>the disease you've got.</span> </p><p><span m='1550050'>And
  B is equal to the evidence,</span> <span m='1556510'>the symptoms I
  observe.</span> </p><p><span m='1560540'>Voila.</span> </p><p><span
  m='1562240'>I may have a pretty hard time figuring out what the</span> <span
  m='1564150'>probability of the class is given the evidence.</span>
  </p><p><span m='1567260'>But figuring out the probability of the
  evidence</span> <span m='1568920'>given the class might not be so hard.</span>
  </p><p><span m='1571420'>Let me get another board in play and show you what I
  mean.</span> </p><p><span m='1580128'>By plugging class and evidence into
  Bayes' rule, what I get</span> <span m='1584820'>is the probability of some
  class given the evidence is</span> <span m='1591540'>equal to the probability
  of the evidence given the class</span> <span m='1597710'>times the probability
  of the class divided by the</span> <span m='1602060'>probability of the
  evidence.</span> </p><p><span m='1606280'>Now you've got to let that sing to
  you a little bit.</span> </p><p><span m='1609230'>Suppose I've got several
  classes that I'm trying to</span> <span m='1611590'>decide between.</span>
  </p><p><span m='1614270'>I'm trying to select the best out of that batch of
  classes.</span> </p><p><span m='1618500'>Well, I've got the evidence.</span>
  </p><p><span m='1619800'>And if I know the probability of the evidence given
  each of</span> <span m='1622140'>those classes, and if I know, a priori, the
  initial</span> <span m='1626130'>probability the class, then I'm done.</span>
  </p><p><span m='1629950'>Because I've got the two elements in the
  numerator.</span> </p><p><span m='1632910'>Why am I done?</span> </p><p><span
  m='1634590'>Because the denominator is the same for all the classes.</span>
  </p><p><span m='1638630'>It's just the probability of the evidence.</span>
  </p><p><span m='1641490'>And then I could just sum everything up.</span>
  </p><p><span m='1642870'>I know it adds to 1 anyway.</span> </p><p><span
  m='1645440'>So that's cool.</span> </p><p><span m='1647440'>But sometimes
  there's evidence--</span> <span m='1651240'>actually there's more than one
  piece of evidence.</span> </p><p><span m='1653980'>Let's say that there's some
  class.</span> </p><p><span m='1655660'>some i, and we're trying to figure out
  if that's the</span> <span m='1658330'>correct class.</span> </p><p><span
  m='1659720'>So we've got c sub i there and c sub i there.</span> </p><p><span
  m='1663000'>And suppose that that evidence is actually a bunch of
  pieces</span> <span m='1666420'>of evidence.</span> </p><p><span
  m='1667780'>So it could be e sub 1, e sub n, oops,</span> <span
  m='1676580'>premature right bracket.</span> </p><p><span m='1678880'>All that
  evidence, given the class i times the probability</span> <span m='1683430'>of
  the class i over some denominator that we don't care</span> <span
  m='1687820'>about because it's going to be the same for everybody.</span>
  </p><p><span m='1691700'>So we'll just write that as d.</span> </p><p><span
  m='1695110'>Now what if these pieces of evidence are all independent</span>
  <span m='1699160'>given the class?</span> </p><p><span m='1702720'>So if you
  have the swine flu, the probability you have a</span> <span m='1705590'>fever
  is independent of the probability you're going to</span> <span
  m='1708117'>throw up, say.</span> </p><p><span m='1711610'>Then can we write
  this another way?</span> </p><p><span m='1714280'>An easier way?</span>
  </p><p><span m='1715150'>Sure.</span> </p><p><span m='1716580'>Because when
  things are independent, the joint</span> <span m='1719180'>probability is
  equal to the product of the individual</span> <span
  m='1724330'>probabilities.</span> </p><p><span m='1725190'>So that is to
  say--</span> <span m='1726910'>it's easier to see it if you write it down than
  if</span> <span m='1728670'>you just say it--</span> <span m='1729700'>this
  probability here from these two elements here is</span> <span
  m='1734200'>equal to the probability of e sub 1 conditioned on c sub i</span>
  <span m='1739280'>times the probability of e sub 2 conditioned on c sub i,
  all</span> <span m='1744970'>the way down to the probability of e sub n</span>
  <span m='1748080'>conditioned on c sub i divided by some denominator we
  don't</span> <span m='1754800'>care about.</span> </p><p><span
  m='1756480'>See, what I'm going to try to do is I'm going to go through</span>
  <span m='1758860'>this for all the ci and see which one's the biggest.</span>
  </p><p><span m='1762240'>STUDENT: That's the [INAUDIBLE] ci, right?</span>
  </p><p><span m='1766390'>PROFESSOR PATRICK WINSTON: This is the probability
  of--</span> <span m='1769070'>STUDENT: [INAUDIBLE]</span> <span
  m='1771470'>right-hand side [INAUDIBLE].</span> </p><p><span
  m='1773870'>PROFESSOR PATRICK WINSTON: Right here?</span> </p><p><span
  m='1775990'>Oh yes, you're quite right.</span> </p><p><span m='1778820'>Oh
  yeah, thanks.</span> </p><p><span m='1785270'>I can't write and think at the
  same time.</span> </p><p><span m='1786775'>Thanks.</span> </p><p><span
  m='1789410'>OK.</span> </p><p><span m='1789770'>So I've just figure out which
  one of these is the biggest.</span> </p><p><span m='1791700'>And I've
  identified the class.</span> </p><p><span m='1794150'>Now you say to me, well,
  I would like to see an example.</span> </p><p><span m='1797490'>So--</span>
  <span m='1799870'>I don't know, does anyone have any spare change?</span>
  </p><p><span m='1804660'>A nickel, a quarter.</span> </p><p><span
  m='1807300'>This is not because of infinitesimally low raises</span> <span
  m='1811190'>here at MIT.</span> </p><p><span m='1811960'>I just need it for a
  demonstration.</span> </p><p><span m='1815180'>I need two coins.</span>
  </p><p><span m='1817180'>Don't forget to get these back, I tend to be--</span>
  <span m='1819140'>Now suppose these two coins are not exactly the same.</span>
  </p><p><span m='1823280'>One of these points is a legitimate,
  highly-prized</span> <span m='1828200'>American quarter.</span> </p><p><span
  m='1830160'>The other one is a fake.</span> </p><p><span m='1832100'>And with
  this one, the probability of heads, let us</span> <span m='1833960'>say, is
  0.8 instead of 0.5.</span> </p><p><span m='1839050'>So I mix these all
  up.</span> </p><p><span m='1841710'>And I pick one.</span> </p><p><span
  m='1843960'>And I start flipping it.</span> </p><p><span m='1846520'>And I get
  a head.</span> </p><p><span m='1849540'>Then I flip it again.</span>
  </p><p><span m='1852390'>And I get a tail.</span> </p><p><span
  m='1855040'>Which coin did I pick?</span> </p><p><span m='1858750'>Well, we're
  going to use this stuff to figure it out.</span> </p><p><span
  m='1862480'>Here's what happens.</span> </p><p><span m='1876940'>Before I
  forget.</span> </p><p><span m='1878500'>Thank you very much.</span>
  </p><p><span m='1880440'>So what we've done is we've selected these</span>
  <span m='1882430'>things from my hands.</span> </p><p><span m='1883810'>And I
  can't draw hands.</span> </p><p><span m='1884390'>So I'll draw a little cup
  here.</span> </p><p><span m='1887210'>And there are two coins in here.</span>
  </p><p><span m='1888700'>And we're going to pick one.</span> </p><p><span
  m='1889610'>And one has a probability of heads equal to 0.8.</span>
  </p><p><span m='1895690'>And this one has a probability of a head of
  0.5.</span> </p><p><span m='1903480'>So here's the draw.</span> </p><p><span
  m='1905900'>I pick one.</span> </p><p><span m='1907060'>Each has a probability
  of 0.5.</span> </p><p><span m='1912260'>This one is the one with the 0.8 as
  the</span> <span m='1916020'>probability of head.</span> </p><p><span
  m='1917300'>And this one is the one with the</span> <span
  m='1918500'>probability of 0.5 as a head.</span> </p><p><span
  m='1923270'>OK?</span> </p><p><span m='1925570'>So now suppose the first flips
  as it was is T. Well, that's a</span> <span m='1932910'>piece of
  evidence.</span> </p><p><span m='1934382'>That's here.</span> </p><p><span
  m='1935310'>Probably of evidence given the class.</span> </p><p><span
  m='1938230'>Well in the case of having drawn this biased coin, the</span>
  <span m='1942240'>probability of coming up with a tail-- ah, let's say a
  head,</span> <span m='1949740'>just to make my numbers a little easier.</span>
  </p><p><span m='1950890'>Probability of coming out there with a head is equal
  0.8</span> <span m='1958010'>given that it's up here in this choice.</span>
  </p><p><span m='1960810'>The probability given that you have a fair coin is
  0.5.</span> </p><p><span m='1969260'>So now if we take the next coin and take
  it to be a tail</span> <span m='1979230'>then the probability of this guy
  given</span> <span m='1982990'>that evidence is 0.2.</span> </p><p><span
  m='1986610'>And the probability of this guy given that evidence-- it's</span>
  <span m='1988900'>a fair coin, so it doesn't care.</span> </p><p><span
  m='1991050'>It's still 0.5.</span> </p><p><span m='1994250'>So now what's the
  probability of this</span> <span m='1996100'>class given this evidence?</span>
  </p><p><span m='1999710'>It's the product 0.5 times 0.8 times 0.2.</span>
  </p><p><span m='2005804'>And what's the probability of this guy?</span>
  </p><p><span m='2008590'>It's 05 times 0.5 times 0.5, divided by a denominator
  which</span> <span m='2014800'>is the same in both cases.</span> </p><p><span
  m='2017520'>So let's forget about this early 0.5 here.</span> </p><p><span
  m='2020230'>Because it's the same in both cases.</span> </p><p><span
  m='2028300'>And we just multiply those numbers together.</span> </p><p><span
  m='2030660'>That gives us 0.8 times 0.2.</span> </p><p><span
  m='2032940'>What's that?</span> </p><p><span m='2033440'>0.16?</span>
  </p><p><span m='2037030'>And this guy, 0.5 times 0.5, that's 0.25.</span>
  </p><p><span m='2041010'>So it looks an awful lot like-- with this
  combination--</span> <span m='2044610'>that I've picked the coin that's
  fair.</span> </p><p><span m='2048050'>One more flip?</span> </p><p><span
  m='2050260'>So let's flip it again, and suppose we</span> <span
  m='2051870'>come up with a head.</span> </p><p><span m='2053498'>So that puts
  a 0.8 in here.</span> </p><p><span m='2056520'>And 0.5 in here.</span>
  </p><p><span m='2059170'>When you multiply those out that's 0.125.</span>
  </p><p><span m='2069590'>And this is 0.128.</span> </p><p><span m='2074980'>So
  it's about equal.</span> </p><p><span m='2077830'>So you see how that
  works?</span> </p><p><span m='2080333'>All right.</span> </p><p><span
  m='2081630'>So we're using the coin flips as evidence to figure out</span>
  <span m='2084560'>which class is involved.</span> </p><p><span m='2087239'>OK
  so I don't know, you'd probably like to see a</span> <span
  m='2089840'>demonstration of this, too, right?</span> </p><p><span
  m='2091370'>You say to me, gosh, just two kinds of coins.</span> </p><p><span
  m='2096270'>That's not very interesting.</span> </p><p><span m='2097970'>Let's
  try five kinds of coins.</span> </p><p><span m='2103660'>So what I want to
  show you is how the probabilities for all</span> <span m='2108650'>these
  coins-- there are five of them, color-coded--</span> <span m='2111130'>how the
  probabilities vary with a series of flips.</span> </p><p><span
  m='2115700'>Let's suppose I've got a head--</span> <span m='2118010'>the grey
  line, by the way, is the fraction of heads--</span> <span m='2122080'>so
  that's going to be one.</span> </p><p><span m='2122820'>Because I'm just doing
  heads.</span> </p><p><span m='2124500'>You see that black line rising?</span>
  </p><p><span m='2127830'>Should look like a rocket.</span> </p><p><span
  m='2129250'>That's the probability that the--</span> <span m='2132500'>that's
  the coin which only shows heads, the probability</span> <span m='2135060'>of
  head is 1.</span> </p><p><span m='2138760'>And I'm flipping a whole bunch of
  heads here.</span> </p><p><span m='2142370'>Isn't that cool?</span>
  </p><p><span m='2143980'>Now what happens if I suddenly put in a tail?</span>
  </p><p><span m='2146920'>By the way, you'll no doubt, here one the extreme
  left--</span> <span m='2150280'>the initial probability of the P=0 coin was
  0.1.</span> </p><p><span m='2157300'>As soon as I flipped a head that went to
  0.</span> </p><p><span m='2159950'>And it will never get off 0, right?</span>
  </p><p><span m='2162930'>That makes sense.</span> </p><p><span
  m='2163450'>Because if the probability that you'll get a head is 1</span>
  <span m='2165570'>you should never see a tail.</span> </p><p><span
  m='2166760'>If you ever do, that isn't your coin.</span> </p><p><span
  m='2169030'>What happens now if I interrupt a series of heads</span> <span
  m='2173260'>and produce a tail?</span> </p><p><span m='2174957'>STUDENT:
  [INAUDIBLE].</span> </p><p><span m='2176418'>PROFESSOR PATRICK WINSTON: What's
  that?</span> </p><p><span m='2177392'>STUDENT: [INAUDIBLE].</span>
  </p><p><span m='2178860'>PROFESSOR PATRICK WINSTON: The black one will go to
  0.</span> </p><p><span m='2180240'>What else happens?</span> </p><p><span
  m='2181655'>By the way, the blue one is the one with the highest</span> <span
  m='2184470'>probability of being a head.</span> </p><p><span
  m='2187400'>[INAUDIBLE]</span> <span m='2188670'>Boom!</span> </p><p><span
  m='2189850'>That blue one shot up.</span> </p><p><span m='2191720'>Not going
  up slowly.</span> </p><p><span m='2192910'>It shot up.</span> </p><p><span
  m='2195320'>Because now the preponderance of evidence with all those</span>
  <span m='2197640'>heads is that I've flipped the coin with a bias of
  0.75</span> <span m='2203130'>towards heads.</span> </p><p><span
  m='2204820'>So let's clear this.</span> </p><p><span m='2206540'>Pick any
  probability you want.</span> </p><p><span m='2207680'>0.25, 0.5, and so
  on.</span> </p><p><span m='2210160'>I don't know, let's pick 0.25 since we've
  been</span> <span m='2212260'>at the upper end.</span> </p><p><span
  m='2218100'>So orange is 0.25.</span> </p><p><span m='2219650'>And sure
  enough, the probability that I've selected</span> <span m='2222200'>the 0.5
  coin is going up and up and up and up after the</span> <span
  m='2226900'>original irregularity.</span> </p><p><span m='2228540'>The Law of
  Large Numbers is setting in.</span> </p><p><span m='2230610'>And a probability
  that I've got that 0.25 coin in play is</span> <span m='2234030'>pretty close
  to 1.</span> </p><p><span m='2236660'>All right.</span> </p><p><span
  m='2236910'>So that's cool.</span> </p><p><span m='2239360'>Now you say to me,
  that's awfully nice but stop.</span> </p><p><span m='2243590'>Awfully nice,
  but not very real-world-ish.</span> </p><p><span m='2250280'>So let me give
  you another problem.</span> </p><p><span m='2253520'>It's well-known that you
  are, with high probability, of the</span> <span m='2258930'>same political
  persuasion as your parents.</span> </p><p><span m='2262660'>So if I wanted to
  figure out which party a parent belongs</span> <span m='2266620'>to, I could
  look at the party that their</span> <span m='2270140'>children belong to,
  right?</span> </p><p><span m='2273490'>So it's just like flipping
  coins.</span> </p><p><span m='2277090'>The particular coin I have
  chosen</span> <span m='2279770'>corresponds to the parent.</span> </p><p><span
  m='2281680'>Individual flips correspond to the political party that the</span>
  <span m='2285620'>child belongs to.</span> </p><p><span m='2287070'>So let's
  get up a little bit--</span> <span m='2288200'>by the way, I wrote all this
  stuff over the weekend.</span> </p><p><span m='2289890'>So who knows if any of
  it will work.</span> </p><p><span m='2291610'>But let's see.</span>
  </p><p><span m='2293430'>A parent party classifier.</span> </p><p><span
  m='2296040'>There it is, Democrats and Republicans.</span> </p><p><span
  m='2298530'>And now the prior for being a Republican given here is 0.5.</span>
  </p><p><span m='2304920'>But I don't know, this is a little bit Democratic
  state.</span> </p><p><span m='2307300'>So let's adjust that down a little
  bit.</span> </p><p><span m='2311780'>Somewhere in there might be about right
  But let's just,</span> <span m='2313640'>for the sake of a classroom
  illustration, go down here.</span> </p><p><span m='2317370'>So now the meter
  is showing the prior probability because</span> <span m='2319650'>that's the
  only thing in the formula so far.</span> </p><p><span m='2321510'>I've got no
  evidence.</span> </p><p><span m='2323340'>So now let's suppose that child
  number one is a</span> <span m='2325610'>Republican.</span> </p><p><span
  m='2328380'>Back to neutral.</span> </p><p><span m='2330850'>So I've got a low
  probability that the parent--</span> <span m='2333910'>a priori probability
  that the parent is a Republican and a</span> <span m='2339810'>child who's a
  Republican.</span> </p><p><span m='2341870'>I notice that 0.2 and 0.8, the
  conditional is 0.8.</span> </p><p><span m='2345670'>And the prior is
  0.2.</span> </p><p><span m='2346620'>That's why it comes out to balance each
  other, right?</span> </p><p><span m='2349690'>So now if we get another
  Republican in</span> <span m='2351230'>there it goes way up.</span>
  </p><p><span m='2354080'>If I have a Democratic child it goes back
  down.</span> </p><p><span m='2356860'>If I have an equal balance between
  children then it goes</span> <span m='2359180'>way back down because of that
  prior probability being low.</span> </p><p><span m='2362320'>So if I make that
  high, even though the children are</span> <span m='2367280'>balanced, I'm
  still going to have a high probability of</span> <span m='2369865'>being a
  Republican.</span> </p><p><span m='2372250'>Now let's see.</span> </p><p><span
  m='2373140'>If I take that slider there, the conditional probability,</span>
  <span m='2376180'>and drive it to the left here-- let me make that</span>
  <span m='2379800'>equally in.</span> </p><p><span m='2382180'>And let's make
  that one thing.</span> </p><p><span m='2384760'>I don't know.</span>
  </p><p><span m='2385620'>What am I doing now?</span> </p><p><span
  m='2387766'>If I make the probability less than 0.5, what's that mean?</span>
  </p><p><span m='2392460'>That means you're sore at your parents and you want
  to belong</span> <span m='2394510'>to a different party.</span> </p><p><span
  m='2397720'>All right, so now, what's next?</span> </p><p><span m='2402200'>Oh
  gosh.</span> </p><p><span m='2404650'>What's next?</span> </p><p><span
  m='2409620'>This is what's next.</span> </p><p><span m='2415720'>What's next
  to somewhere?</span> </p><p><span m='2418220'>Yeah, this is what's
  next.</span> </p><p><span m='2420440'>This here.</span> </p><p><span
  m='2421210'>We've got two models.</span> </p><p><span m='2424400'>Remember
  when I said we wanted to decide between them?</span> </p><p><span
  m='2428070'>Can we use that Bayesian hack to do that, too?</span> </p><p><span
  m='2430930'>Sure.</span> </p><p><span m='2431580'>Because we've got these two
  models.</span> </p><p><span m='2434790'>We've got the probabilities in
  them.</span> </p><p><span m='2437770'>So now I can take my data and calculate
  the probability of a</span> <span m='2442490'>left model given the data and
  the probability of the right</span> <span m='2445620'>model given the data,
  multiply that times their a priori</span> <span m='2448780'>probabilities,
  which I'll assume are equal.</span> </p><p><span m='2451860'>Then I can do a
  model selection deal much in</span> <span m='2454710'>defiance to what I was
  hinting at before.</span> </p><p><span m='2457250'>so let's try that.</span>
  </p><p><span m='2463330'>Whoa.</span> </p><p><span m='2465720'>There are my
  two models.</span> </p><p><span m='2468915'>Yes, there they are.</span>
  </p><p><span m='2470460'>We've already trained them up.</span> </p><p><span
  m='2471850'>And they've got their probabilities.</span> </p><p><span
  m='2473990'>Now what we're going to do is we're going to use the</span> <span
  m='2475630'>original model to simulate the data.</span> </p><p><span
  m='2478950'>So what we're going to do is we're going to simulate draws,</span>
  <span m='2481350'>simulate events, similarly combinations of all
  variables</span> <span m='2485770'>using a model that looks like the one on
  the left, that is</span> <span m='2490626'>the one on the left except for the
  slight differences in</span> <span m='2492530'>probabilities, OK?</span>
  </p><p><span m='2494320'>Then we're going to do this Bayesian thing and see
  where</span> <span m='2496570'>the meter goes.</span> </p><p><span
  m='2497880'>So we'll run one data point.</span> </p><p><span m='2500020'>Oops,
  went the wrong way.</span> </p><p><span m='2501960'>Makes me nervous.</span>
  </p><p><span m='2502960'>I just finished this at 9:15.</span> </p><p><span
  m='2504750'>Maybe there's a bug.</span> </p><p><span m='2506610'>Oops, two
  data points, swings to the left.</span> </p><p><span m='2509720'>Three data
  points, back to the right.</span> </p><p><span m='2511140'>Of course that's
  not much data.</span> </p><p><span m='2514070'>So let's put some more data
  in.</span> </p><p><span m='2516685'>Yeah.</span> </p><p><span
  m='2517130'>Boom, there it goes.</span> </p><p><span m='2518730'>Let's try
  that again.</span> </p><p><span m='2519480'>That was cool.</span> </p><p><span
  m='2521060'>So let's run 1,000 simulations and one data point.</span>
  </p><p><span m='2527050'>It bobbles around a little bit and goes</span> <span
  m='2528780'>flat over to the left.</span> </p><p><span m='2529640'>Because
  that is the model that reflects the one that the data</span> <span
  m='2532630'>is generated from.</span> </p><p><span m='2535480'>So now we got
  Bayesian classification, except now the</span> <span
  m='2539150'>classification has gone one step more and it becomes</span> <span
  m='2541790'>structure discovery.</span> </p><p><span m='2543440'>We've got two
  choices of structure.</span> </p><p><span m='2545700'>And we can use this
  Bayesian thing to decide which of the</span> <span m='2548660'>two structures
  is best.</span> </p><p><span m='2551060'>Isn't that cool?</span> </p><p><span
  m='2552150'>Well, it's only cool if you could do what?</span> </p><p><span
  m='2558950'>So if you had two choices--</span> <span m='2562710'>you can
  select between them and pick the best one--</span> <span m='2566210'>but there
  are--</span> <span m='2567490'>gosh, for this number of variables, there are a
  whole</span> <span m='2571120'>lot of different networks that satisfy the no
  looping</span> <span m='2575540'>criteria and don't have very many
  parents.</span> </p><p><span m='2580952'>There's an awful lot of them.</span>
  </p><p><span m='2582770'>In fact, if you strict this network to two parents
  there</span> <span m='2585450'>are probably thousands and thousands of
  possible</span> <span m='2588260'>structures.</span> </p><p><span
  m='2589590'>So do I try them all?</span> </p><p><span m='2593390'>Probably
  not.</span> </p><p><span m='2594340'>It's too much work when you get 30
  variables or</span> <span m='2596370'>something like that.</span> </p><p><span
  m='2599320'>So what do you do?</span> </p><p><span m='2600450'>We know what to
  do, right?</span> </p><p><span m='2601740'>We're almost veterans a
  6034.</span> </p><p><span m='2603390'>We have to search!</span> </p><p><span
  m='2605750'>So what we do is we take the loser and we modified it.</span>
  </p><p><span m='2610270'>And then we modify it again.</span> </p><p><span
  m='2611320'>And we keep modifying it until we drop dead or we get</span> <span
  m='2618120'>something that we're happy with.</span> </p><p><span
  m='2620450'>So let's see what happens if we change this problem a</span> <span
  m='2623480'>little bit and do structure discover.</span> </p><p><span
  m='2625030'>We're starting out with nothing linked.</span> </p><p><span
  m='2627740'>And we're going to just start running this guy.</span>
  </p><p><span m='2630380'>So what's going to happen is that the</span> <span
  m='2631600'>good guy will prevail.</span> </p><p><span m='2633690'>And the bad
  guy will be a copy of the good guy</span> <span m='2635990'>perturbed in some
  way.</span> </p><p><span m='2637150'>So it's a random search.</span>
  </p><p><span m='2640280'>You'll notice that score--</span> <span
  m='2641380'>it's too small for you to read.</span> </p><p><span
  m='2643170'>All these things are too small to read.</span> </p><p><span
  m='2644460'>Let me make it a little bigger.</span> </p><p><span
  m='2648230'>Too small to read, but that number on the right there is</span>
  <span m='2651130'>not the product of the probabilities, actually.</span>
  </p><p><span m='2654240'>It's the sum of the logarithms of the
  probabilities.</span> </p><p><span m='2659850'>They go together, right?</span>
  </p><p><span m='2661780'>And the reason you use this instead of the
  probabilities</span> <span m='2663440'>is because these numbers get so small
  that was a 32-bit</span> <span m='2667590'>machine, you eventually
  lose.</span> </p><p><span m='2669740'>So use the log of the probabilities
  rather than the</span> <span m='2674730'>product of the probabilities.</span>
  </p><p><span m='2675630'>You use the sum of the logs instead of the product of
  the</span> <span m='2677660'>probabilities.</span> </p><p><span
  m='2679840'>And eventually, you hope that this thing converges on the</span>
  <span m='2683210'>correct interpretation.</span> </p><p><span m='2684760'>But
  you know what?</span> </p><p><span m='2685470'>This thing is so flat as a
  space and so a large and so</span> <span m='2690900'>telephone pole-like that
  it's full of local maxima.</span> </p><p><span m='2696490'>So what this
  program is doing is every once in awhile--</span> <span m='2700670'>I think
  with probability 1 and 10; I forgot what</span> <span m='2702880'>parameters I
  used--</span> <span m='2703883'>every once in awhile, it'll do a total radical
  rearrangement</span> <span m='2708410'>of the structures.</span> </p><p><span
  m='2709150'>In other words, it's a random restart.</span> </p><p><span
  m='2711830'>It keeps track of the best guy so far.</span> </p><p><span
  m='2713820'>And every once in awhile it does a totally random restart</span>
  <span m='2716370'>in its effort to search the space.</span> </p><p><span
  m='2718870'>So that's how you go from probabilistic inference to</span> <span
  m='2723130'>structure discovery.</span> </p><p><span m='2725300'>Now when is
  this stuff actually useful?</span> </p><p><span m='2729560'>Well, I hinted at
  a medical diagnosis, right?</span> </p><p><span m='2732600'>That's a situation
  where you've got some symptoms.</span> </p><p><span m='2734890'>And you want
  to know what the disease is.</span> </p><p><span m='2738160'>So as soon as you
  use the keyword "diagnosis," you've</span> <span m='2742470'>got a problem for
  which this stuff is a candidate.</span> </p><p><span m='2745840'>So what other
  kinds of diagnosis problems are there?</span> </p><p><span m='2748640'>Well,
  you might be lying to me.</span> </p><p><span m='2751360'>So I can put a lie
  detector on you.</span> </p><p><span m='2753350'>And each of those variables
  that are measured by the lie</span> <span m='2755980'>detector are an
  independent indication whether you're</span> <span m='2758370'>telling the
  truth or not.</span> </p><p><span m='2759910'>So it's this kind of Bayesian
  discovery thing.</span> </p><p><span m='2764300'>Naive Bayesian
  Classification.</span> </p><p><span m='2767410'>What other kinds of problems
  speak to</span> <span m='2769972'>the issue of diagnosis?</span> </p><p><span
  m='2771130'>Well, we like to know how well you know the material!</span>
  </p><p><span m='2774410'>So we can use quizzes as pieces of evidence.</span>
  </p><p><span m='2779110'>Thank god we don't use exactly a naive Bayesian
  classifier,</span> <span m='2781590'>because then we wouldn't be able to do
  that combination.</span> </p><p><span m='2784600'>We have to use a slightly
  more complex--</span> <span m='2787020'>what you can think of as a slightly
  more complex Bayesian</span> <span m='2790280'>net to do that particular kind
  of diagnosis.</span> </p><p><span m='2793430'>You might have a spacecraft or
  an airplane or other piece of</span> <span m='2796950'>equipment with all
  sorts of symptoms.</span> </p><p><span m='2798950'>You're trying to figure out
  what to do next,</span> <span m='2800530'>what the cause is.</span>
  </p><p><span m='2802100'>So using the evidence to go backward to the
  cause.</span> </p><p><span m='2806210'>So maybe you've got some program that
  doesn't work.</span> </p><p><span m='2809470'>Happens to me a lot.</span>
  </p><p><span m='2811390'>So I use the evidence from the symptoms of the
  misbehavior to</span> <span m='2814580'>figure out what the most probable
  cause is.</span> </p><p><span m='2818480'>But now to conclude the day-- last
  time there weren't any</span> <span m='2823020'>powerful ideas.</span>
  </p><p><span m='2823890'>But if you take the combination of the last</span>
  <span m='2828090'>lecture and this lecture to be a candidate for gold
  star</span> <span m='2834170'>ideas, these are the ones I'd like to leave you
  with.</span> </p><p><span m='2837740'>We got here is--</span> <span
  m='2839750'>this Bayesian stuff, all these probabilistic calculations
  are</span> <span m='2842420'>the right thing to do.</span> </p><p><span
  m='2843965'>They're the right way to work when you don't know anything,</span>
  <span m='2850270'>which would make it sound like you're not very
  useful,</span> <span m='2852600'>because you think you always-- well, in fact,
  there are a lot</span> <span m='2854890'>of situations where you either can't
  know everything, don't</span> <span m='2858020'>have time to know everything,
  or don't want to take the</span> <span m='2860420'>effort to know
  everything.</span> </p><p><span m='2862630'>So in medical diagnosis all you've
  got is the symptoms.</span> </p><p><span m='2867190'>You can't go in there and
  figure out in a more precise</span> <span m='2869730'>way exactly what's
  wrong.</span> </p><p><span m='2870750'>So you use the symptoms to determine
  what the cause is.</span> </p><p><span m='2873730'>And then all those other
  kinds of cases that I mentioned.</span> </p><p><span m='2876850'>But now, what
  other kinds of structure discovery are there?</span> </p><p><span
  m='2880520'>Well, the kind of structure discovery that I hinted at in</span>
  <span m='2882760'>the beginning will be the subject that we'll begin
  with</span> <span m='2885550'>during our next and sadly final conversation
  here in</span> <span m='2890330'>[? 10250 ?]</span> <span m='2891700'>on
  Wednesday.</span> </p><p><span m='2893320'>It will feature not only a
  discussion of how this stuff</span> <span m='2896210'>can be used to discover
  patterns and stories, but</span> <span m='2899890'>we'll also talk about
  what's on the final, what kind of</span> <span m='2904590'>thing you could do
  next, that sort of thing to finish off</span> <span m='2908870'>the
  subject.</span> </p><p><span m='2909420'>And that's the end of the story for
  today.</span> </p><p></p>
uid: 307ce222e2cf5554fd41c4ff21964cea
type: course
layout: video
---
