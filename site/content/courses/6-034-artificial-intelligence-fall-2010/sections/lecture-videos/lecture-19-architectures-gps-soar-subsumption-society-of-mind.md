---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, we consider cognitive
  architectures, including General Problem Solver, SOAR, Emotion Machine,
  Subsumption, and Genesis. Each is based on a different hypothesis about human
  intelligence, such as the importance of language and stories.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-19-architectures-gps/id765641080?i=194476710
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: Video-iTunes U-MP4
    type: Video
    uid: e548fc7ff913cf79886cf2f8dbc46022
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec19_300k.mp4'
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: Video-Internet Archive-MP4
    type: Video
    uid: 3ddb21a1977c451749c6aa8fc1b2e4ae
  - id: Video-YouTube-Stream
    media_location: PimSbFGrwXM
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: Video-YouTube-Stream
    type: Video
    uid: 65a9a896feb518e6172ea36c2957b814
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/PimSbFGrwXM/default.jpg'
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 4e664b91c7059ed6f1d640b9034aa6ba
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: PimSbFGrwXM
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 8eab4e5acedc85c795197b94be19a817
  - id: PimSbFGrwXM.srt
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-19-architectures-gps-soar-subsumption-society-of-mind/PimSbFGrwXM.srt
    title: 3play caption file
    type: null
    uid: ca3a0f82978c9b7fc2cfee093e3a1c6e
  - id: PimSbFGrwXM.pdf
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-19-architectures-gps-soar-subsumption-society-of-mind/PimSbFGrwXM.pdf
    title: 3play pdf file
    type: null
    uid: ad66d2f09b3bc313458cf50d41459314
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7dbfa003e247cf5ae47c7e6f0a4fe6f4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b6fd0a8958f812849f1f41378e62fd9c
inline_embed_id: '16211933lecture19:architectures:gps,soar,subsumption,societyofmind40306700'
order_index: 209
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-19-architectures-gps-soar-subsumption-society-of-mind
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-19-architectures-gps-soar-subsumption-society-of-mind
title: 'Lecture 19: Architectures: GPS, SOAR, Subsumption, Society of Mind'
transcript: >-
  <p><span m='9660'>PROFESSOR: [INAUDIBLE].</span> </p><p><span m='12360'>"Thus
  Spake Zarathustra" was made famous</span> <span m='15310'>and popular by
  2001.</span> </p><p><span m='18300'>And that is music played at this magic
  moment when some</span> <span m='21840'>primate suddenly gets an idea,</span>
  <span m='24220'>presumably one of our ancestors.</span> </p><p><span
  m='28780'>So how do we explain all that?</span> </p><p><span m='32210'>We've
  got all of the ingredients on the table.</span> </p><p><span m='34850'>And
  today I want to talk about various ways of putting those</span> <span
  m='37380'>ingredients together.</span> </p><p><span m='39200'>So we talked
  about representations, we've talked</span> <span m='41540'>about methods, and
  today we're going to talk about</span> <span m='43860'>architectures.</span>
  </p><p><span m='45340'>And by the end of the class you'll know how to put one
  of</span> <span m='50410'>those things together.</span> </p><p><span
  m='51270'>Actually, no one knows how to put one of</span> <span
  m='53100'>those things together.</span> </p><p><span m='53900'>But what you
  will know is about some alternatives for</span> <span m='56750'>putting those
  things together so as to make something that</span> <span m='61992'>is
  arguably intelligent in the same way we are.</span> </p><p><span m='68920'>So
  that is our agenda for today.</span> </p><p><span m='74240'>We'll also talk a
  little bit more about stories.</span> </p><p><span m='78475'>I think it was in
  2007 when the Estonians moved a war</span> <span m='86270'>memorial from the
  center of Tallinn off to</span> <span m='88990'>a Russian war cemetery.</span>
  </p><p><span m='93150'>Prior to that time the Estonians had been building
  up</span> <span m='95690'>their national computer networks because they
  thought</span> <span m='97870'>that computation was the wave of the future--
  networks and</span> <span m='100346'>all of that.</span> </p><p><span
  m='101870'>Shortly after the movement of that war memorial, someone</span>
  <span m='105920'>brought the Estonian national network down--</span> <span
  m='109604'>a cyber attack.</span> </p><p><span m='111700'>It was widely
  believed to be the Russians.</span> </p><p><span m='115930'>There's a large
  Russian ethnic population in</span> <span m='118330'>Estonia to start
  with.</span> </p><p><span m='119539'>And the movement of that war
  memorial</span> <span m='122080'>irritated the Russians.</span> </p><p><span
  m='123730'>And so everybody everybody thinks that they did it.</span>
  </p><p><span m='126960'>But you know what?</span> </p><p><span m='127910'>No
  computer can understand the story I just told.</span> </p><p><span
  m='132110'>They can revel through all of the worldwide web finding</span>
  <span m='135610'>information that's relevant to that, but no computer
  can</span> <span m='138829'>understand the story I just told, except
  one.</span> </p><p><span m='141710'>You'll see a demonstration of that later
  on today.</span> </p><p><span m='145300'>So by the way, if you're interested
  in understanding</span> <span m='148620'>the nature of intelligence, this is,
  of course, the most</span> <span m='151480'>important lecture of the
  semester.</span> </p><p><span m='155020'>And I should tell you a little bit
  about what we're going to</span> <span m='157530'>do on Wednesday.</span>
  </p><p><span m='158390'>Because for some reason the day before Thanksgiving
  tends</span> <span m='163470'>to be a lecture that's lightly populated,</span>
  <span m='166510'>except in this class.</span> </p><p><span m='167980'>Because
  I'm going to talk about the artificial</span> <span m='171820'>intelligence
  business and what can be learned from it about</span> <span m='174340'>how to
  avoid going broke when you start your company.</span> </p><p><span
  m='177579'>So for many of you that will be the most important lecture</span>
  <span m='182760'>of the semester.</span> </p><p><span m='185680'>It all
  started back in the dawn age of artificial</span> <span
  m='188070'>intelligence.</span> </p><p><span m='189810'>And really, it all
  started at Carnegie Mellon, sad to say.</span> </p><p><span m='194020'>Because
  the people at Carnegie Mellon, notably Newell and</span> <span
  m='196950'>Simon, were the first to think about sort of a general</span> <span
  m='200790'>purpose way of putting things together so as to build a</span>
  <span m='205970'>structure or architecture in which particular
  intelligent</span> <span m='209530'>systems could be built.</span>
  </p><p><span m='213400'>So their idea was called the general problem
  solver.</span> </p><p><span m='225210'>A long name for a simple idea.</span>
  </p><p><span m='229630'>And the simple idea is that you start your life out in
  a</span> <span m='232890'>current state, call it C. And you want to get</span>
  <span m='237640'>to some goal state.</span> </p><p><span m='239710'>Call it S.
  And a way you do that is you measure somehow</span> <span m='243940'>the
  symbolic difference between where you are and</span> <span m='246810'>where
  you want to be.</span> </p><p><span m='248610'>So that's the
  difference.</span> </p><p><span m='250085'>We'll call that difference D. And
  when you observe that</span> <span m='254370'>difference that's enough, they
  say, in this general approach</span> <span m='259200'>to problem
  solving.</span> </p><p><span m='260339'>For you to select some operation that
  will move you</span> <span m='263970'>from your current state to some new
  state, an</span> <span m='266880'>intermediate state.</span> </p><p><span
  m='267880'>Call it I. So I, or that operator, O, is determined by</span> <span
  m='275500'>the difference, D.</span> </p><p><span m='277659'>And then, of
  course, the next thing to do is to measure the</span> <span
  m='280520'>difference between that intermediate state and the</span> <span
  m='283350'>state you want to be in, and choose some operator that's</span>
  <span m='287300'>relevant to reducing that state.</span> </p><p><span
  m='289440'>So we'll call that D2, and we'll call this O2.</span> </p><p><span
  m='293490'>And D2 is what leads you to 02, and so it goes.</span> </p><p><span
  m='298950'>So that's the idea.</span> </p><p><span m='300550'>And that's often
  called means-ends analysis.</span> </p><p><span m='303470'>Why?</span>
  </p><p><span m='303620'>Because the end that you want to achieve is being in
  that</span> <span m='307620'>final state, S. And the means is that operator,
  O. So you</span> <span m='313430'>have some notion of where you want to be and
  the difference</span> <span m='315450'>of where you are and where you want to
  be.</span> </p><p><span m='317060'>And you pick an operator so as to reduce
  that difference.</span> </p><p><span m='320570'>So this is all very
  abstract.</span> </p><p><span m='322700'>Let's exercise it in solving a
  problem that you will all be</span> <span m='327020'>faced with here in a day
  or two.</span> </p><p><span m='328930'>That is, for many of you--</span> <span
  m='330910'>most Of you, I hope-- the problem of going home.</span>
  </p><p><span m='334210'>So here you are.</span> </p><p><span m='336050'>You're
  at MIT.</span> </p><p><span m='338450'>And where you want to be is over here,
  at home.</span> </p><p><span m='344860'>So you measure the difference between
  MIT and home.</span> </p><p><span m='349180'>And for many of you it's further
  than you can go by car</span> <span m='351990'>and not so far that you can't
  go at all.</span> </p><p><span m='354070'>So what you do is, you say, well,
  the right operator is</span> <span m='357180'>taking an airplane.</span>
  </p><p><span m='359620'>So there is the operator, take an airplane.</span>
  </p><p><span m='369090'>And this is the difference, D. And the difference, D,
  being</span> <span m='373600'>sufficiently large, you take the plane.</span>
  </p><p><span m='377630'>Trouble is, if you happen to be sitting here in</span>
  <span m='380260'>[? 10-250 ?]</span> <span m='381420'>there's no way you can
  take an airplane, because they don't</span> <span m='383490'>fit in
  here.</span> </p><p><span m='385460'>So you've got another problem, and that
  is</span> <span m='387040'>to get to the airplane.</span> </p><p><span
  m='389330'>So the distance between here and Logan is such that the</span>
  <span m='392560'>right way to do that is to take the MBTA.</span> </p><p><span
  m='400980'>And that's determined because you're working on this</span> <span
  m='403310'>difference reduction right here, the difference from</span> <span
  m='405840'>being at MIT and being at the airport.</span> </p><p><span
  m='408070'>So that difference dictates that you take the MBTA.</span>
  </p><p><span m='410610'>So you see, you're re-cursing.</span> </p><p><span
  m='413909'>But you know there are no MBTA cars in here either.</span>
  </p><p><span m='416860'>So there's still a difference like so.</span>
  </p><p><span m='420210'>And that difference dictates that you walk.</span>
  </p><p><span m='425310'>So you've got D1, D2, and D3.</span> </p><p><span
  m='430670'>And by the time you've excised the operators relevant to</span>
  <span m='434140'>those three differences, you're at Logan.</span> </p><p><span
  m='436690'>Then you take the airplane, you get over to your hometown,</span>
  <span m='439705'>and your faced with the smaller difference of getting</span>
  <span m='442960'>from that airport to where you actually want to go.</span>
  </p><p><span m='445660'>So that's the general problem- solver idea.</span>
  </p><p><span m='449150'>It was such an exciting idea at the time.</span>
  </p><p><span m='454440'>It was such an exciting idea at the time because
  people</span> <span m='456850'>would say to themselves, ah!</span>
  </p><p><span m='459380'>This is a general purpose problem solver, so we can
  set</span> <span m='462570'>it onto the problem of making itself
  smarter.</span> </p><p><span m='466740'>And so there was a kind of imagined
  chain reaction that</span> <span m='469460'>would take place.</span>
  </p><p><span m='471080'>And the developers of this architecture warned the
  public</span> <span m='475659'>that within 10 years-- that is to say, by about
  1970--</span> <span m='479190'>computers would be generally as smart as
  people.</span> </p><p><span m='483760'>And a lot of people made fun of them
  for that prediction.</span> </p><p><span m='485870'>But it was actually
  scientists attempting to be responsible.</span> </p><p><span
  m='489300'>Because they thought something, a quite serious</span> <span
  m='492750'>dislocation was coming along, and that people should know</span>
  <span m='495220'>that it was coming.</span> </p><p><span m='496400'>And so
  they felt it was their responsibility in that age of</span> <span
  m='499030'>scientific responsibility to warn the public.</span> </p><p><span
  m='502810'>It didn't turn out that way, because the problem of</span> <span
  m='508770'>collecting the differences and finding the operators, that's</span>
  <span m='512049'>outside the scope of the architecture.</span> </p><p><span
  m='514340'>So this is the problem that has to be solved by a human</span>
  <span m='518500'>before this architecture can be used.</span> </p><p><span
  m='520570'>You have to have identified the differences that you might</span>
  <span m='524370'>encounter and the operators that you might use, and
  build</span> <span m='531490'>this table which relates the two
  together.</span> </p><p><span m='534740'>So maybe that one, that one, some
  off-diagonal</span> <span m='537150'>elements, and so on.</span> </p><p><span
  m='538490'>But building that table turned out to be a hard job.</span>
  </p><p><span m='542600'>So not surprisingly, the idea evolved.</span>
  </p><p><span m='545210'>And eventually the folks at Carnegie who developed
  the</span> <span m='548940'>general problem solver--</span> <span
  m='550790'>most notably Newell and his students--</span> <span
  m='554170'>developed a newer, fresher, more elaborate architecture</span>
  <span m='557800'>called SOAR.</span> </p><p><span m='563610'>And here's how
  SOAR works.</span> </p><p><span m='564760'>First of all, what does SOAR
  mean?</span> </p><p><span m='571860'>It doesn't mean anything.</span>
  </p><p><span m='573090'>It used to mean State Operator And Result.</span>
  </p><p><span m='589660'>But for some reason the proponents of the SOAR</span>
  <span m='592360'>architecture decided they don't like that acronym, and</span>
  <span m='595450'>have asserted that SOAR is merely a label that
  shouldn't</span> <span m='599540'>be thought of as an acronym.</span>
  </p><p><span m='602010'>In any event, SOAR consists of various parts.</span>
  </p><p><span m='605940'>It has a long-term memory.</span> </p><p><span
  m='610750'>It has a short-term memory.</span> </p><p><span m='616050'>And it
  has connections to the outside world, maybe a vision</span> <span
  m='621030'>system and an action system.</span> </p><p><span m='624950'>But
  most of the activity of the SOAR problem-solving</span> <span
  m='629380'>architecture takes place in a short-term memory.</span>
  </p><p><span m='633750'>So you can view the contents of the long-term memory
  as</span> <span m='636300'>shuttling in and out of short-term memory.</span>
  </p><p><span m='638000'>So you can see right away that this mechanism,
  this</span> <span m='640950'>architecture, is heavily influenced by
  certain</span> <span m='645800'>cognitive psychology experiments having to do
  with</span> <span m='649060'>how much you can hold in your short-term
  memory--</span> <span m='651400'>nonsense syllables and all that sort of thing
  that was</span> <span m='653530'>popular back in those days.</span>
  </p><p><span m='656570'>So this was an architecture devised primarily
  by</span> <span m='659530'>psychologists.</span> </p><p><span m='660380'>And
  it had amongst its features a short-term memory</span> <span m='664170'>and a
  long-term memory.</span> </p><p><span m='668330'>So that's part 1 of this
  architecture.</span> </p><p><span m='670580'>So what's in the long-term
  memory?</span> </p><p><span m='672770'>Well, assertions and rules, AKA
  productions.</span> </p><p><span m='690830'>A production being the Carnegie
  vernacular for rule.</span> </p><p><span m='695390'>It's just the rule-based
  stuff like you saw on almost the</span> <span m='698060'>first day of
  class.</span> </p><p><span m='699930'>So the whole thing is a gigantic
  rule-based system</span> <span m='703650'>with assertions and rules the
  shuttle back and forth from</span> <span m='708230'>long-term memory into
  short-term memory where</span> <span m='710160'>processing takes place.</span>
  </p><p><span m='712740'>The third thing that comes to mind when you think of
  SOAR</span> <span m='715350'>architecture is they had an elaborate preference
  system.</span> </p><p><span m='724530'>You recall that when we talked about
  rule-based systems</span> <span m='726610'>there's always a question of what
  do you do when more than</span> <span m='728560'>one rule would work?</span>
  </p><p><span m='730300'>You have to have some way of breaking those
  ties.</span> </p><p><span m='733300'>The SOAR architecture has an
  elaborate</span> <span m='735430'>subsystem for doing that.</span>
  </p><p><span m='738770'>But I said that these are the first three things you
  think,</span> <span m='740580'>and maybe that's not right.</span> </p><p><span
  m='741760'>Because the next thing you think about is perhaps a</span> <span
  m='745050'>better thing to identify with the SOAR architecture.</span>
  </p><p><span m='749890'>And that's the idea of problem spaces.</span>
  </p><p><span m='758620'>And that's the idea that if you're going to solve
  a</span> <span m='760160'>problem you have to develop a space and do a search
  through</span> <span m='764220'>that space.</span> </p><p><span
  m='765760'>Just like we did when we talked about how we can get</span> <span
  m='768280'>from here to home.</span> </p><p><span m='770580'>There's a space
  of places, that's our problem space.</span> </p><p><span m='774310'>We can do
  a search through that space to find a way to</span> <span m='776430'>get from
  one place to another.</span> </p><p><span m='778400'>That's the sort of thing
  that SOAR is focused on.</span> </p><p><span m='783540'>Finally, the fifth
  element that you tend to think about</span> <span m='787520'>when you think
  about SOAR is the idea of universal</span> <span m='791150'>subgoaling.</span>
  </p><p><span m='801440'>And that's the idea that whenever you can't think
  of</span> <span m='803540'>want to do next, that becomes your next problem
  that</span> <span m='807420'>deserves it's own problem space and its own set
  of</span> <span m='810590'>differences and operators, and rules and
  assertions.</span> </p><p><span m='815210'>So you start off on a high level,
  then you have to solve</span> <span m='817970'>problems at a lower level, just
  like you did up there</span> <span m='820560'>with a general problem
  solver.</span> </p><p><span m='823430'>So if you have these two architectures
  you can begin to</span> <span m='826090'>say, well, what are they centered
  on?</span> </p><p><span m='829280'>And this architecture, this general problem
  solver, is</span> <span m='833860'>centered on the idea that everything
  is</span> <span m='835970'>about problem solving.</span> </p><p><span
  m='840150'>Because the problem solving hypothesis--</span> <span m='849630'>no
  one gave it that name.</span> </p><p><span m='851020'>But that's what it
  was.</span> </p><p><span m='852680'>And this architecture did get its
  name.</span> </p><p><span m='854770'>And it was said always, by Newell, to be
  based on what he</span> <span m='860860'>called the symbol system
  hypothesis.</span> </p><p><span m='873660'>The hypothesis that what we are as
  humans is symbol</span> <span m='876760'>manipulators.</span> </p><p><span
  m='878100'>And we can uncover how that all works by giving people</span> <span
  m='883980'>crypto-arithmetic problems and having them talk out loud, by</span>
  <span m='887960'>thinking about what happens when you try to remember</span>
  <span m='889850'>nonsense syllables, by all that sort of stuff that was
  en</span> <span m='893280'>vogue in terms of psychology experiments in the day
  when</span> <span m='897120'>this architecture was first articulated.</span>
  </p><p><span m='900110'>But when you look at architectures you can sort
  of</span> <span m='901700'>see where they come from and what their antecedents
  are.</span> </p><p><span m='905472'>It has a short-term memory and a long-term
  memory, because</span> <span m='912290'>Newell and his associates were
  cognitive scientists.</span> </p><p><span m='915730'>It has assertions and
  rules and preferences, because</span> <span m='921140'>Newell and his
  associates were also AI people.</span> </p><p><span m='925170'>And it has
  problem spaces and universal subgoaling because</span> <span m='929950'>those
  are ideas that had been work out in a more primitive</span> <span
  m='932520'>form already in the general problem-solver architecture.</span>
  </p><p><span m='937370'>So that's a glimpse of what SOAR looked like</span>
  <span m='939740'>in its early days.</span> </p><p><span m='940750'>It's been
  very highly developed by a</span> <span m='942350'>lot of smart people.</span>
  </p><p><span m='944280'>So although it's symbol centered, they've attached
  to</span> <span m='947420'>it things having to do with emotion and perception,
  but</span> <span m='950710'>generally with the view that the first thing to do
  when</span> <span m='953290'>faced with this perception is to get it out of
  there and get</span> <span m='957020'>it into a symbolic form.</span>
  </p><p><span m='958830'>That's sort of the bias that the architecture comes
  with.</span> </p><p><span m='965180'>So those are two architectures that are
  heavily biased toward</span> <span m='969770'>thinking that the important part
  of what we</span> <span m='971570'>do is problem solving.</span> </p><p><span
  m='974600'>But the most important, perhaps--</span> <span m='977020'>at least
  from an MIT perspective--</span> <span m='978820'>of these problem-solving
  oriented ways of thinking</span> <span m='981770'>about the world, is Marvin
  Minsky's architecture, which</span> <span m='986150'>he articulates in his
  book "The Emotion Machine."</span> <span m='996860'>And Marvin is not just
  concerned with problem</span> <span m='999820'>solving, but also with how
  problem solving</span> <span m='1002080'>might come in layers.</span>
  </p><p><span m='1003620'>So let me show you an example of the sort of problem
  what</span> <span m='1006960'>motivates some of Marvin's thinking.</span>
  </p><p><span m='1016770'>So you can read that, it's a short little
  vignette.</span> </p><p><span m='1034387'>You have no trouble understanding
  it, right?</span> </p><p><span m='1037708'>No.</span> </p><p><span
  m='1039098'>It's not difficult for us humans.</span> </p><p><span
  m='1040960'>Awfully tough for a computer.</span> </p><p><span m='1042950'>In
  part, because the thinking you need, your ability to</span> <span
  m='1047760'>understand that story, requires you to think on many</span> <span
  m='1051210'>levels at the same time.</span> </p><p><span m='1054110'>First of
  all, there's a sort of, at the</span> <span m='1057030'>bottom, instinctive
  reaction.</span> </p><p><span m='1066950'>You see where there's instinctive
  reaction?</span> </p><p><span m='1068650'>That's the part where she hears a
  sound</span> <span m='1073000'>and terns her head.</span> </p><p><span
  m='1073850'>That's instinct, right?</span> </p><p><span m='1074400'>That's
  practically built in.</span> </p><p><span m='1077190'>But then what she sees
  is a car.</span> </p><p><span m='1079030'>So that's something that we don't
  have wired in.</span> </p><p><span m='1082310'>It would be unlikely that we've
  evolved in the last 100</span> <span m='1085700'>years to have an instinctive
  appreciation of cars</span> <span m='1088500'>barrelling down the road.</span>
  </p><p><span m='1089980'>So the next level in Marvin's</span> <span
  m='1091120'>architecture is learned reaction.</span> </p><p><span
  m='1102000'>So that's the part about thinking about the car.</span>
  </p><p><span m='1105530'>Now spread throughout there-- well, let's see where
  is a</span> <span m='1108320'>particularly good example.</span> </p><p><span
  m='1111640'>She decides to sprint across the road.</span> </p><p><span
  m='1114750'>So that's where she's solving a problem.</span> </p><p><span
  m='1117380'>So that's the deliberative thinking level.</span> </p><p><span
  m='1127770'>It doesn't stop there, because later on she reflects on her</span>
  <span m='1135630'>impulsive decision.</span> </p><p><span m='1137670'>So she
  thinks not only about stuff that's happening out</span> <span
  m='1139950'>there in the world, but she also thinks about stuff that's</span>
  <span m='1143020'>going on in here.</span> </p><p><span m='1144970'>So that's
  a level which we can call reflective thinking.</span> </p><p><span
  m='1156340'>Well, you know, it doesn't stop there, because she also</span>
  <span m='1160630'>considers, in another part of the story, something
  about</span> <span m='1164690'>being uneasy about arriving late.</span>
  </p><p><span m='1167690'>So she's not only just thinking about events that
  are</span> <span m='1169790'>going on in her mind right now, but events that
  are going</span> <span m='1172890'>on right now relative to plans she's
  made.</span> </p><p><span m='1176610'>Some Marvin calls that the
  self-reflecting layer.</span> </p><p><span m='1188820'>But that isn't the
  whole thing either, because toward the end</span> <span m='1192280'>of the
  story she starts to worry about what her friends</span> <span
  m='1194560'>would think of her.</span> </p><p><span m='1195970'>So there's a
  kind of reflective thinking in a more</span> <span m='1198580'>social
  context.</span> </p><p><span m='1200410'>So he calls that self-conscious
  thinking.</span> </p><p><span m='1211280'>So as the Carnegie folks think, the
  SOAR architecture</span> <span m='1215270'>focuses mostly on problem solving,
  Minsky's "Emotion</span> <span m='1219830'>Machine" book considers not just
  thinking, but thinking on</span> <span m='1225980'>many layers.</span>
  </p><p><span m='1228700'>And the blocker to doing any of that can be said to
  be the</span> <span m='1234740'>development of common sense, which computers,
  alas, have</span> <span m='1238700'>never had much of.</span> </p><p><span
  m='1240430'>So this could be said to be based on the common sense</span> <span
  m='1247170'>hypothesis.</span> </p><p><span m='1253180'>And the common sense
  hypothesis holds that in order</span> <span m='1255530'>to do all of that
  stuff, you have to have</span> <span m='1257590'>common sense like
  people.</span> </p><p><span m='1259650'>And if you have to have common sense
  like people, you have to</span> <span m='1261420'>think about how much of that
  is there and how</span> <span m='1264700'>can we go get it?</span>
  </p><p><span m='1266460'>And so this spawned a lot of activity in the media
  lab</span> <span m='1273390'>amongst people influenced by Marvin, having to do
  with</span> <span m='1275680'>gathering common sense.</span> </p><p><span
  m='1277340'>The open mind project, the work of Henry Lieberman and</span>
  <span m='1280420'>others, having to do with the gathering of common sense
  from</span> <span m='1284260'>the world wide web as a way of populating
  systems that would</span> <span m='1289330'>lay the foundation for doing this
  kind of layered thinking.</span> </p><p><span m='1296130'>So that is a brief
  survey of some mechanisms, some older</span> <span m='1303290'>than others,
  but all but GPS--</span> <span m='1307210'>GPS too.</span> </p><p><span
  m='1308070'>Let's face it, it's hard to think of solving any problem</span>
  <span m='1310630'>without means-ends analysis being involved.</span>
  </p><p><span m='1312020'>So GPS isn't wrong, it's just not the only tool you
  need to</span> <span m='1317380'>think about what to do.</span> </p><p><span
  m='1319430'>So these are early, and late, and still-current.</span>
  </p><p><span m='1323950'>But it's not the only thing there is, because there
  have</span> <span m='1327260'>been reactions against this problem-solving way
  of</span> <span m='1329850'>thinking about the development of
  intelligence.</span> </p><p><span m='1332740'>And the most prominent of those
  counter currents, of</span> <span m='1336120'>those alternative ideas, belongs
  to Rod Brooks and his</span> <span m='1339900'>subsumption
  architecture.</span> </p><p><span m='1342130'>So along about the
  early--</span> <span m='1344950'>along about the years surrounding 1990,
  Brooks</span> <span m='1350100'>became upset--</span> <span
  m='1353750'>subsumption--</span> <span m='1359190'>because robots couldn't do
  much.</span> </p><p><span m='1361610'>They would turn them on at night, and
  then the next</span> <span m='1363980'>morning they'd come in the laboratory
  and they would have</span> <span m='1365750'>moved 25 feet, nicely avoiding a
  table perhaps.</span> </p><p><span m='1371820'>Not doing very much and taking
  a long time to do it.</span> </p><p><span m='1375500'>So he had decided that
  it's because people were thinking</span> <span m='1378070'>in the wrong
  way.</span> </p><p><span m='1380590'>In those days people thought that the way
  you build a robot</span> <span m='1384770'>is you build a vision system, and
  then you build a reasoning</span> <span m='1387970'>system, and then you build
  an action system.</span> </p><p><span m='1391340'>And it can do almost
  nothing, but it does something.</span> </p><p><span m='1395830'>So you improve
  the vision system, and improve the</span> <span m='1398980'>reasoning system,
  and improve the actual system.</span> </p><p><span m='1402530'>And now you've
  broken it, because all the stuff you used</span> <span m='1405090'>to be able
  to do doesn't work anymore.</span> </p><p><span m='1409000'>So what's the
  alternative?</span> </p><p><span m='1410490'>Well, the alternative, as
  articulated by Brooks, is to</span> <span m='1413320'>turn this idea on its
  side.</span> </p><p><span m='1415900'>So instead of having an encapsulated
  vision system, an</span> <span m='1420570'>encapsulated reasoning system, and
  an encapsulated action</span> <span m='1422960'>system, what you have is
  layers that are focused not on</span> <span m='1427390'>the sensing and the
  reasoning and the action, but layers</span> <span m='1430820'>that are
  specialized to dealing with the world.</span> </p><p><span m='1435260'>So in
  Brook's way of thinking about things, at the lowest</span> <span
  m='1439000'>level you might have a system that's capable of--</span> <span
  m='1441880'>well, before we get to that, avoiding objects.</span> </p><p><span
  m='1446580'>And maybe the next level up is the wandering layer.</span>
  </p><p><span m='1451460'>And maybe the next level up after that is
  explore.</span> </p><p><span m='1457990'>And maybe the next level up after
  that is seek.</span> </p><p><span m='1464060'>Now in the old days when people
  took 6001 I had no</span> <span m='1466550'>trouble getting an answer the
  question, what does this</span> <span m='1469930'>remind you of in
  6001?</span> </p><p><span m='1472940'>It doesn't remind you of anything in
  6001 since you</span> <span m='1474530'>haven't taken it.</span> </p><p><span
  m='1475740'>But it viewed, as a generalization of a</span> <span
  m='1478780'>programming idea, what is the programming idea?</span>
  </p><p><span m='1482620'>There are only a few powerful ideas in program, and
  this is</span> <span m='1485740'>a generalization of one of them.</span>
  </p><p><span m='1488180'>What is it?</span> </p><p><span m='1489070'>Do you
  have a name?</span> </p><p><span m='1490400'>Yes, Andrew?</span> </p><p><span
  m='1491412'>STUDENT: Layers of abstraction?</span> </p><p><span
  m='1492620'>PROFESSOR: Layers of abstraction,</span> <span m='1494210'>and
  abstraction barriers.</span> </p><p><span m='1496760'>That nails it pretty
  well.</span> </p><p><span m='1498500'>Because each of these guys can have its
  own vision, action,</span> <span m='1503690'>and reasoning system.</span>
  </p><p><span m='1509980'>And if you think of these as abstraction boundaries,
  then</span> <span m='1512870'>when you got this thing working you don't screw
  with</span> <span m='1515035'>it anymore.</span> </p><p><span m='1516460'>You
  build this layer on top.</span> </p><p><span m='1518020'>And it may reach down
  in here from time to time, but it</span> <span m='1520240'>doesn't
  fundamentally change it.</span> </p><p><span m='1522990'>Brooks was inspired
  in part by the way our brains are</span> <span m='1525790'>constructed.</span>
  </p><p><span m='1526980'>All that old stuff that we share with pigs is down
  in</span> <span m='1529340'>there deep, and we put the neocortex over
  it.</span> </p><p><span m='1532090'>So it looks layered in a way that would
  make</span> <span m='1534660'>[? Gerry Sussman ?] proud.</span> </p><p><span
  m='1536960'>So this then is the way that Brooks looks at the world, and</span>
  <span m='1542610'>it's characterized by a few features just like SOAR
  is.</span> </p><p><span m='1547310'>One of those features is no
  representation.</span> </p><p><span m='1558740'>So this is a detail that's
  probably right at the level</span> <span m='1563920'>that Brooks was
  operating, and very questionable when you get</span> <span m='1567620'>above
  the level that Brooks was operating.</span> </p><p><span m='1570310'>But
  before I go on, let me say what the hypothesis is.</span> </p><p><span
  m='1575810'>The hypothesis is the creature hypothesis.</span> </p><p><span
  m='1585550'>It's the hypothesis that once you can get a machine to act</span>
  <span m='1590320'>as smart as an insect, then the rest will be easy.</span>
  </p><p><span m='1595960'>Well, how do you get a creature to</span> <span
  m='1596930'>be smart as an insect?</span> </p><p><span m='1598200'>Maybe you
  don't need representation.</span> </p><p><span m='1599760'>We focused on
  representation in this course, so you can see</span> <span m='1602330'>there's
  a little stress---</span> <span m='1610680'>Next thing is, what do you do if
  you don't have a</span> <span m='1612210'>representation?</span> </p><p><span
  m='1614490'>Let's see.</span> </p><p><span m='1615110'>Your representation
  makes a model possible.</span> </p><p><span m='1617430'>Models make it
  possible to predict, to understand, to</span> <span m='1622250'>explain, and
  to control.</span> </p><p><span m='1623780'>So if you don't have one what can
  you possibly do?</span> </p><p><span m='1626630'>Brooks' answer is, you use
  the world instead of a model.</span> </p><p><span m='1641500'>So everything
  you do is reactive.</span> </p><p><span m='1643790'>You don't have anything in
  your head that is</span> <span m='1645210'>a map of this room.</span>
  </p><p><span m='1647990'>But maybe I don't need one because I can get around
  that</span> <span m='1650930'>table by constantly observing it.</span>
  </p><p><span m='1653720'>And we don't have to fill up the memory with
  that</span> <span m='1655200'>information, I can just react to it.</span>
  </p><p><span m='1660560'>So no representation, use the world instead of a
  model, and</span> <span m='1666010'>the mechanisms in their purest form are
  just</span> <span m='1670630'>finite-state machines.</span> </p><p><span
  m='1679350'>So with that, Brooks was able to do things that people were</span>
  <span m='1682940'>never able to do before.</span> </p><p><span m='1686350'>And
  what's the modern [? instantiation ?]</span> <span m='1688330'>of this
  architecture?</span> </p><p><span m='1690390'>Now, according to Brooks, in use
  in 5 million homes in the</span> <span m='1694010'>United States?</span>
  </p><p><span m='1698009'>STUDENT: The Roomba?</span> </p><p><span
  m='1698950'>PROFESSOR: It's the Roomba The Roomba robot is, by Brooks'</span>
  <span m='1703900'>account, approximately the thirteenth</span> <span
  m='1705850'>business plan of iRobot.</span> </p><p><span m='1707960'>And it's
  the one that made it big, because the Rumba vacuum</span> <span
  m='1712740'>cleaner has been very successful.</span> </p><p><span
  m='1715610'>Would you like to see a movie of its processor?</span>
  </p><p><span m='1720960'>So this is a film made some time ago that shows, in
  some</span> <span m='1725520'>sense, the summa of that architecture.</span>
  </p><p><span m='1729370'>What I want you to imagine very briefly is a robot
  that</span> <span m='1733300'>wanders around in the halls and rooms of the
  old</span> <span m='1737600'>[? Tech Square ?]</span> <span
  m='1738290'>clinking the Coke cans.</span> </p><p><span m='1741440'>Okay, you
  all got an image of that in your mind?</span> </p><p><span m='1744920'>Because
  I want you to compare the image you now have of that</span> <span
  m='1747260'>robot that's wandering around collecting the Coke can, with</span>
  <span m='1750550'>the actual movie.</span> </p><p><span m='1761693'>[VIDEO
  PLAYBACK]</span> <span m='1762180'>-Herbert, the soda-can collecting mobile
  robot.</span> </p><p><span m='1765520'>He was built at the MIT AI lab in
  1989.</span> </p><p><span m='1769360'>Work was done by John Cannell under the
  supervision of</span> <span m='1772606'>Rodney Brooks.</span> </p><p><span
  m='1774820'>Herbert is a robot controlled by subsumption architecture.</span>
  </p><p><span m='1778800'>This is a collection of small behaviors that
  influence the</span> <span m='1783700'>overall activities of the robot.</span>
  </p><p><span m='1785920'>There are no centralized controllers</span> <span
  m='1788310'>and no world model.</span> </p><p><span m='1791380'>-Herbert
  navigates by using a number of infrared proximity</span> <span
  m='1795890'>censors around its body and basically</span> <span
  m='1798610'>following walls and corridors.</span> </p><p><span m='1801350'>It
  can also look for the can through a laser light striper.</span> </p><p><span
  m='1804710'>Right now it's come out of the door of an office, followed</span>
  <span m='1807370'>along the wall, and then its laser light striper has seen
  a</span> <span m='1812350'>can on top of the desk in front of it.</span>
  </p><p><span m='1815400'>When this happens the robots and deploys its
  arm.</span> </p><p><span m='1820060'>You can see the arm going out now.</span>
  </p><p><span m='1824180'>-The arm has a number of censors itself.</span>
  </p><p><span m='1826470'>There are fingertip censors, a break beam in the
  jaws, and</span> <span m='1830130'>two infrared proximity sensors on the front
  of the hand.</span> </p><p><span m='1834340'>-It grabs cans in a stereotype
  fashion.</span> </p><p><span m='1836960'>First, it lowers down to find a
  surface somewhere, then it</span> <span m='1840720'>bounces along the surface
  until it</span> <span m='1842630'>sees the can in front.</span> </p><p><span
  m='1844630'>It uses the hand-based IRs to re-center the arm by rotating</span>
  <span m='1848495'>the robot's body until the can comes between the jaws of
  the</span> <span m='1852380'>gripper, at which point the break-beam senses the
  can.</span> </p><p><span m='1857960'>-After acquiring the can, Herbert will
  have tucked the</span> <span m='1860050'>arm back into its normal traveling
  configuration and</span> <span m='1863371'>attempt to go home.</span>
  </p><p><span m='1873740'>-Since it has no central [? arm presentation, ?]
  it</span> <span m='1875560'>doesn't have any map of where it came from.</span>
  </p><p><span m='1877400'>Instead, it has an algorithm which uses a magnetic
  compass</span> <span m='1881550'>to determine every time it comes through a
  door, will it</span> <span m='1885000'>be able to find the door?</span>
  </p><p><span m='1886290'>It basically has a policy of always going north every
  time</span> <span m='1889770'>it exits the door.</span> </p><p><span
  m='1893220'>-So now the can is being tucked away.</span> </p><p><span
  m='1896280'>As the robot turns you'll see a red stripe from the laser</span>
  <span m='1899040'>range finder.</span> </p><p><span m='1906240'>And now it's
  using the [INAUDIBLE]</span> <span m='1907410'>IR to navigate back, find the
  door, and go through the door</span> <span m='1911530'>with its prize.</span>
  </p><p><span m='1927616'>[END VIDEO PLAYBACK]</span> <span
  m='1928120'>PROFESSOR: And there, if you were paying attention, you saw</span>
  <span m='1929700'>a little glimpse of John Cannell who was the student
  to</span> <span m='1932840'>develop that system.</span> </p><p><span
  m='1933700'>So that was a tour de force.</span> </p><p><span m='1936950'>That
  was a magic moment.</span> </p><p><span m='1938070'>That was when you open the
  champagne.</span> </p><p><span m='1939970'>It's not what you expected, of
  course, because when I say</span> <span m='1942430'>imagine a robot wandering
  around in [? Tech Square ?]</span> <span m='1945280'>picking up Coke cans,
  that leaves open a huge envelope of</span> <span m='1948160'>possible
  hallucinations.</span> </p><p><span m='1950120'>And usually or hallucinations
  about these things are--</span> <span m='1953930'>we imagine things to be more
  fluid, more natural, and more</span> <span m='1958590'>impressive than they
  actually are.</span> </p><p><span m='1959780'>But that was impressive, because
  no robot came close to</span> <span m='1963680'>doing anything like that
  before.</span> </p><p><span m='1969030'>More to be said about that during
  the</span> <span m='1970740'>business lecture on Wednesday.</span>
  </p><p><span m='1976000'>So that's the subsumption architecture.</span>
  </p><p><span m='1978810'>By the way, maybe at this point we can say
  something</span> <span m='1986230'>about how the other architectures relate to
  what</span> <span m='1990020'>Minsky was talking about.</span> </p><p><span
  m='1992460'>What's this deliberative thinking layer correspond to?</span>
  </p><p><span m='1998270'>That's what SOAR is about, and maybe GPS.</span>
  </p><p><span m='2007020'>So what's subsumption about?</span> </p><p><span
  m='2010200'>It's about stuff down here.</span> </p><p><span m='2018400'>It's
  about instinctive reaction and learned reaction.</span> </p><p><span
  m='2035290'>But shoot, what about Minsky's other layers?</span> </p><p><span
  m='2039120'>If we're going to be building systems that are as smart as</span>
  <span m='2042180'>those things then we have to worry a little bit about
  that</span> <span m='2044390'>sort of thing too.</span> </p><p><span
  m='2045710'>So that brings us to the genesis architecture.</span> </p><p><span
  m='2049080'>And now let me give you the standard caution that should</span>
  <span m='2052679'>be early in the presentation of any academic.</span>
  </p><p><span m='2055500'>I will sometimes say "I," and what I mean is "we."
  And</span> <span m='2059940'>sometimes I'll say "we," and what I mean is
  "they." This</span> <span m='2063540'>was a system that was developed mostly
  by students</span> <span m='2067739'>of mine who persuaded me, after a great
  deal of time,</span> <span m='2071280'>that they were thinking the right kinds
  of thoughts.</span> </p><p><span m='2074420'>But here's how the genesis
  architecture works.</span> </p><p><span m='2078469'>As no surprise, given
  recent discussions, it's all centered</span> <span m='2083940'>on
  language.</span> </p><p><span m='2090429'>And the language part of the genesis
  system has two roles,</span> <span m='2094880'>one of which is to guide, and
  marshal, and interact with the</span> <span m='2099910'>perceptual
  systems.</span> </p><p><span m='2107230'>And the other is to enable the
  description of events.</span> </p><p><span m='2136980'>That's how it
  works.</span> </p><p><span m='2137610'>So is perception important?</span>
  </p><p><span m='2141372'>I don't know.</span> </p><p><span m='2143290'>I might
  ask you a question like, is there anybody sitting</span> <span m='2147130'>in
  the front row wearing blue jeans?</span> </p><p><span m='2150440'>And it's
  hard for you to resist, under those</span> <span m='2152410'>circumstances,
  your eyes from going over there and answering</span> <span m='2155370'>the
  question.</span> </p><p><span m='2156350'>Your eyes answer the
  question.</span> </p><p><span m='2158180'>No symbol processing system is
  involved, except in so far as</span> <span m='2162780'>my language system has
  communicated with their</span> <span m='2165600'>language system, which drives
  your motor system and your</span> <span m='2168540'>vision system to go over
  there and answer the</span> <span m='2170690'>question for you.</span>
  </p><p><span m='2173490'>But it's not just the real stuff that the language
  system</span> <span m='2176980'>directs your attention to.</span> </p><p><span
  m='2178040'>It's also the imagined stuff.</span> </p><p><span m='2180970'>It's
  been a long semester.</span> </p><p><span m='2182160'>Have I told you the
  story about my table saw?</span> </p><p><span m='2185010'>Probably not.</span>
  </p><p><span m='2185580'>Here's the deal.</span> </p><p><span m='2186120'>I
  bought a table saw.</span> </p><p><span m='2187630'>It's a wonderful table
  saw.</span> </p><p><span m='2189560'>I was installing it with a friend of
  mine</span> <span m='2190940'>who's a cabinet maker.</span> </p><p><span
  m='2193190'>He said, never wear gloves when you operate the saw.</span>
  </p><p><span m='2197910'>"Why?" I said.</span> </p><p><span m='2199950'>Before
  he could answer the question I figured it out.</span> </p><p><span
  m='2201900'>Can you figure out why you never wear gloves when you</span> <span
  m='2203540'>operate a table saw?</span> </p><p><span m='2205450'>You know what
  a table saw is, right?</span> </p><p><span m='2206930'>It's a table with a
  spinning blade in the middle.</span> </p><p><span m='2208650'>And you use it
  to cut wood.</span> </p><p><span m='2211640'>Why should you never wear
  gloves?</span> </p><p><span m='2215095'>Yes?</span> </p><p><span
  m='2215582'>STUDENT: Well--</span> <span m='2216560'>STUDENT: --Well, you know
  the answer.</span> </p><p><span m='2217770'>Ha, that's not fair.</span>
  </p><p><span m='2219170'>That's old Brett up there.</span> </p><p><span
  m='2220230'>He's heard the story too many times.</span> </p><p><span
  m='2223180'>Yes, Andrew, you got it.</span> </p><p><span m='2225042'>STUDENT:
  I've been told the answer before.</span> </p><p><span m='2226810'>PROFESSOR:
  You've been told the answer.</span> </p><p><span m='2227960'>How about
  somebody who hasn't been told the answer.</span> </p><p><span
  m='2229740'>Yes?</span> </p><p><span m='2230130'>STUDENT: Because the gloves
  might get caught.</span> </p><p><span m='2231920'>PROFESSOR: Because the glove
  might get caught and pull your</span> <span m='2234410'>hand into the
  blade.</span> </p><p><span m='2235670'>And then what happens?</span>
  </p><p><span m='2239140'>It's horrible.</span> </p><p><span m='2239740'>You're
  hand gets mangled and your fingers get cut off, and</span> <span
  m='2243360'>this happens a lot to professionals.</span> </p><p><span
  m='2246300'>It won't actually happen with that table saw that I bought,</span>
  <span m='2248790'>because its play detects flesh and stops the blade,
  which</span> <span m='2253130'>then leads to stopping the blade and having the
  blade</span> <span m='2255250'>retreat into the table in about two
  microseconds--</span> <span m='2258140'>two milliseconds.</span> </p><p><span
  m='2259590'>So, in general though, it's a bad idea, and you always have</span>
  <span m='2262460'>to suppose that the mechanism isn't working anyway in
  order</span> <span m='2266490'>to use good safety practice.</span>
  </p><p><span m='2268320'>But here's an example of something that nobody
  ever</span> <span m='2270170'>told you that he was able to figure out, by
  imagining what</span> <span m='2273560'>would happen and reading the answers
  off of the scene that</span> <span m='2276815'>he imagined.</span>
  </p><p><span m='2278420'>So nobody ever says many of the things that we know,
  but</span> <span m='2282260'>we know them anyway.</span> </p><p><span
  m='2283000'>Here's another example.</span> </p><p><span m='2284330'>Imagine
  running down the street with a</span> <span m='2285650'>full bucket of
  water.</span> </p><p><span m='2286550'>What happens?</span> </p><p><span
  m='2289190'>The water splashes out and gets your leg wet, right?</span>
  </p><p><span m='2292110'>You won't find that in Open Minds database.</span>
  </p><p><span m='2294500'>Nobody ever said that over the web.</span>
  </p><p><span m='2296630'>It's not written down anywhere.</span> </p><p><span
  m='2297620'>But you know it.</span> </p><p><span m='2299040'>Because you, we
  human beings have the capacity to imagine</span> <span m='2302710'>perceptual
  things and read the answers to questions off of</span> <span m='2307090'>our
  imaginations with that perceptual apparatus.</span> </p><p><span
  m='2310940'>So that's a very important connection down there.</span>
  </p><p><span m='2315020'>And then if you've got the ability to describe
  events,</span> <span m='2318150'>then you've got the ability to tell and
  understand stories.</span> </p><p><span m='2325180'>And if you can do that,
  then you can start to get a handle</span> <span m='2328030'>on culture, both
  macro and micro.</span> </p><p><span m='2338790'>And by macro culture I mean
  the country you grew up in,</span> <span m='2344500'>the religion you grew up
  with.</span> </p><p><span m='2346320'>And by micro I mean your family and
  personal</span> <span m='2349290'>experience, and all shades in
  between.</span> </p><p><span m='2354570'>So I don't know, what inspires me and
  my associates to think</span> <span m='2358520'>in these terms?</span>
  </p><p><span m='2359250'>We talked about a little bit of it last time when I
  talked</span> <span m='2361800'>about evolution and the apparent flowering of
  our</span> <span m='2367060'>species about 50,000 years ago, at</span> <span
  m='2370140'>which time we got something.</span> </p><p><span m='2372300'>And I
  believe that what we got--</span> <span m='2374940'>and this is the
  characterization of this</span> <span m='2377260'>particular
  hypothesis--</span> <span m='2380540'>what we got is the ability to tell
  stories</span> <span m='2385130'>and understand them.</span> </p><p><span
  m='2386980'>So if we want to label this representation, it's the label</span>
  <span m='2392540'>strong story hypothesis.</span> </p><p><span m='2402200'>So
  what's the weak story hypothesis?</span> </p><p><span m='2403530'>The weak
  story hypothesis is, this is important.</span> </p><p><span m='2406540'>The
  strong story hypothesis is, this is all there is.</span> </p><p><span
  m='2411260'>But is there any other evidence of this is really,</span> <span
  m='2414190'>really, really important?</span> </p><p><span m='2415670'>So I've
  queried Krishna here before the class starts, and</span> <span m='2420520'>he
  tells me I haven't told you about the following</span> <span
  m='2423560'>experiment.</span> </p><p><span m='2424850'>This, in my way of
  thinking, is the most important series</span> <span m='2428300'>of experiments
  ever done in cognitive psychology,</span> <span m='2432720'>developmental
  psychology, actually.</span> </p><p><span m='2435550'>So here's how we get
  started.</span> </p><p><span m='2443380'>There's a rectangular room, if you're
  a person.</span> </p><p><span m='2448070'>If you're a rat, it's a rectangular
  box.</span> </p><p><span m='2451490'>All the walls are painted white.</span>
  </p><p><span m='2453720'>Are you with me so far?</span> </p><p><span
  m='2455610'>So now, in each corner there's a basket, or cloth, or</span> <span
  m='2462360'>something in which or under which you can put some food.</span>
  </p><p><span m='2470320'>Now, you put the food there while the rat watches
  you.</span> </p><p><span m='2478550'>And then you give the rat a little spin
  to disorient it.</span> </p><p><span m='2486540'>All right?</span>
  </p><p><span m='2488790'>So then, the rest stops and goes for the food.</span>
  </p><p><span m='2494130'>And you can keep track of where the rat goes.</span>
  </p><p><span m='2497440'>And the rat goes with approximate equal
  probability</span> <span m='2501070'>predominantly to those two
  corners.</span> </p><p><span m='2504760'>So I'd have bet you didn't know
  that</span> <span m='2506096'>rats were that smart.</span> </p><p><span
  m='2508040'>So they understand the rectangular nature of the room</span> <span
  m='2511070'>and they don't go to the diagonal corners where the</span> <span
  m='2512880'>food cannot be.</span> </p><p><span m='2515090'>So are these
  genius rats?</span> </p><p><span m='2518390'>Or maybe we're just rats with big
  brains.</span> </p><p><span m='2520050'>Because we do the same thing.</span>
  </p><p><span m='2522550'>So if you repeat this experiment and replace the
  rat</span> <span m='2528220'>with a small child, and then you put a toy in
  there instead</span> <span m='2534470'>of food, and the rat--</span> <span
  m='2537520'>not the rat.</span> </p><p><span m='2538550'>The child is usually
  held in a parent's arms, usually the</span> <span m='2544600'>child's
  mother--</span> <span m='2546780'>usually because they think that if they
  participate in</span> <span m='2548840'>these experiments up there at Harvard
  their kid will get</span> <span m='2551320'>into Harvard some day.</span>
  </p><p><span m='2554290'>So the kid goes to a diagonal corner just like a
  rat.</span> </p><p><span m='2559860'>And then the next thing you do is, you
  try an adult, maybe an</span> <span m='2566790'>MIT student.</span>
  </p><p><span m='2568890'>That way you can use food again.</span> </p><p><span
  m='2575650'>And you get the same result.</span> </p><p><span m='2578330'>Who
  could be surprised?</span> </p><p><span m='2580680'>So rats, children, and
  human adults, pretty much all the</span> <span m='2584570'>same with respect
  to this experiment, until you paint</span> <span m='2591450'>one wall
  blue.</span> </p><p><span m='2593440'>Rats are not colorblind, in case you're
  wondering.</span> </p><p><span m='2596370'>Then what happens?</span>
  </p><p><span m='2599130'>Well, if you pay one wall blue the rat still goes
  with equal</span> <span m='2605930'>probability to the two diagonal
  corners.</span> </p><p><span m='2609560'>If you paint one wall blue, the child
  still goes to the</span> <span m='2613370'>two diagonal corners with
  approximate equal probability.</span> </p><p><span m='2617230'>It's only us
  genius human adults who go</span> <span m='2622940'>only to that
  corner.</span> </p><p><span m='2626870'>So this invites a couple of
  questions.</span> </p><p><span m='2631690'>One of which is, when does a child
  become an adult?</span> </p><p><span m='2637510'>Any ideas?</span>
  </p><p><span m='2640990'>[INAUDIBLE], what do you think?</span> </p><p><span
  m='2644185'>STUDENT: [INAUDIBLE].</span> </p><p><span m='2646610'>PROFESSOR:
  You can pick a number greater than 1</span> <span m='2648630'>and less than
  10.</span> </p><p><span m='2654620'>[INAUDIBLE], what do you think?</span>
  </p><p><span m='2656024'>STUDENT: Five?</span> </p><p><span
  m='2656860'>PROFESSOR: It's a pretty good guess.</span> </p><p><span
  m='2659550'>Do you have siblings at that age?</span> </p><p><span
  m='2661920'>It's a surprise but, why is it five?</span> </p><p><span
  m='2663980'>Is it because--</span> <span m='2665480'>what does it relate
  to?</span> </p><p><span m='2666910'>Is there any correlate to the onset of
  that ability?</span> </p><p><span m='2670450'>You might try everything, as
  [INAUDIBLE] does, because</span> <span m='2672450'>she's extremely
  careful.</span> </p><p><span m='2675250'>So she's tried gender, she's tried
  the onset of language,</span> <span m='2680340'>the appreciation of music,
  handedness, and there's only</span> <span m='2684430'>one thing that
  matters.</span> </p><p><span m='2686530'>And that is that the child becomes
  adult at that time</span> <span m='2691640'>when they start to use the word
  left and right when they</span> <span m='2694440'>describe the world.</span>
  </p><p><span m='2697450'>Now I said that very carefully because they
  understand left</span> <span m='2699700'>and right at an earlier age, but they
  only have started to</span> <span m='2703050'>use the words left and right
  when they describe the world</span> <span m='2705530'>at the time that they
  begin to break this symmetry and go to</span> <span m='2710900'>the correct
  corner.</span> </p><p><span m='2713560'>Now for the next element of this I
  need something to read.</span> </p><p><span m='2716140'>Has anyone got a
  textbook handy?</span> </p><p><span m='2722720'>Ah, "China, an Illustrated
  History."</span> <span m='2727680'>Now I need a volunteer.</span> </p><p><span
  m='2730875'>OK.</span> </p><p><span m='2731320'>Andrew, you want to do
  this?</span> </p><p><span m='2732440'>So here's what you're going to
  do.</span> </p><p><span m='2737080'>You can stay there.</span> </p><p><span
  m='2738270'>But you need to stand up.</span> </p><p><span m='2740520'>So what
  I'm going to do is, I'm going to read you a</span> <span m='2742750'>passage
  from this book.</span> </p><p><span m='2744310'>And I want you to say it back
  to me at the</span> <span m='2745710'>same time I read it.</span> </p><p><span
  m='2747260'>It's as if you're doing simultaneous translation,</span> <span
  m='2751610'>except it's English to English.</span> </p><p><span
  m='2756970'>This things got words I can't pronounce.</span> </p><p><span
  m='2759160'>OK, are you ready to go?</span> </p><p><span m='2761080'>All
  right.</span> </p><p><span m='2762220'>"When overwhelmed by the magnitude of
  the problems he</span> <span m='2765330'>tackled, he began to suspect that
  others were plotting</span> <span m='2768730'>against him or secretly
  ridiculing him."</span> <span m='2774600'>Thank you very much.</span>
  </p><p><span m='2775420'>That's great.</span> </p><p><span m='2776560'>So you
  see, he could do it.</span> </p><p><span m='2777880'>Some people can't do
  it.</span> </p><p><span m='2778880'>At least it take a little practice.</span>
  </p><p><span m='2781360'>But he did it.</span> </p><p><span m='2782780'>And
  guess what I've done to him?</span> </p><p><span m='2785080'>I've reduced his
  intelligence to that of a rat.</span> </p><p><span m='2789080'>Because if you
  do this experiment with an adult human</span> <span m='2796930'>who's doing
  this simultaneous English to English</span> <span m='2798850'>translation,
  they go with equal</span> <span m='2800940'>probability to the two
  corners.</span> </p><p><span m='2803910'>So what's happened?</span>
  </p><p><span m='2805210'>What's happened is you've jambed</span> <span
  m='2807720'>their language processor.</span> </p><p><span m='2810930'>And when
  their language processor is jambed they can't</span> <span m='2814070'>put the
  blue wall together with the rectangular shape.</span> </p><p><span
  m='2817970'>So it seems to be that language is the mediator of</span> <span
  m='2820290'>exactly the combinators you need in order to build</span> <span
  m='2822520'>descriptions.</span> </p><p><span m='2824250'>Because they can't
  even put those things together when</span> <span m='2826870'>their language
  processor is jambed by the simultaneous</span> <span m='2829870'>translation
  phenomenon.</span> </p><p><span m='2833670'>So that brings us to the two gold
  star ideas of the day.</span> </p><p><span m='2837310'>One is, if you want to
  make yourself smarter you want to</span> <span m='2849730'>do those
  things--</span> <span m='2850690'>look, listen, draw, and talk.</span>
  </p><p><span m='2852760'>Because those are the particular mechanisms
  that</span> <span m='2856100'>surround this area down here, which is the
  center of what we</span> <span m='2860440'>do-- which is the center of our
  thinking.</span> </p><p><span m='2863120'>So why do you take notes in
  class?</span> </p><p><span m='2865140'>Now because you'll ever look at them
  before, but because it</span> <span m='2867350'>forces the engagement of your
  linguistic--</span> <span m='2871980'>of your linguistic, your motor,</span>
  <span m='2873390'>and your visual apparatus.</span> </p><p><span
  m='2874820'>And that makes you smarter, because it's</span> <span
  m='2876520'>exercising that stuff.</span> </p><p><span m='2879520'>The second
  thing you can say, in conclusion, especially from</span> <span
  m='2882560'>this experiment, is beware of fast talkers.</span> </p><p><span
  m='2896820'>Why do you want to be aware of fast talkers.</span> </p><p><span
  m='2899260'>It's not because they will talk you into anything.</span>
  </p><p><span m='2902430'>It's because that when they talk fast they're jambing
  your</span> <span m='2904940'>language processor and you can't thing.</span>
  </p><p><span m='2908000'>That's why you want to be aware of fast
  talkers.</span> </p><p><span m='2912600'>Because if they jamb your language
  processor you won't</span> <span m='2914850'>thinking and you'll buy that car,
  or you'll buy that drink,</span> <span m='2918200'>or you'll do any manner of
  things that people who want</span> <span m='2920925'>you to do those things
  have learned to do by talking to</span> <span m='2925272'>jamb your
  processor.</span> </p><p><span m='2927960'>So that completes what we're going
  to do today.</span> </p><p><span m='2929620'>And I'll give you a demonstration
  of some of this</span> <span m='2931290'>stuff on another occasion.</span>
  </p><p></p>
uid: 6c476e3bab60a3ad89c0cde49a2cbdbe
type: courses
layout: video
---
