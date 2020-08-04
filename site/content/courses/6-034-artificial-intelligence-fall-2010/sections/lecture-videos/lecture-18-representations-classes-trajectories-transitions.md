---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, we consider the nature of
  human intelligence, including our ability to tell and understand stories. We
  discuss the most useful elements of our inner language: classification,
  transitions, trajectories, and story sequences.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: bQI0OmJPby4
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: Video-YouTube-Stream
    type: Video
    uid: e9372081b2075db3b18f804ca2b170a3
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-18-representations/id765641080?i=194475736
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: Video-iTunes U-MP4
    type: Video
    uid: 31cf98a64714630ef73b9e6bcb830638
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec18_300k.mp4'
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5002062aa42546a8e086b272e217fee0
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/bQI0OmJPby4/default.jpg'
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3b8b4fa2176dd7ded93a2ef84a19b91e
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: bQI0OmJPby4
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 2bb1a423789dc74fda379e2b0d571d47
  - id: bQI0OmJPby4.srt
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-18-representations-classes-trajectories-transitions/bQI0OmJPby4.srt
    title: 3play caption file
    type: null
    uid: 7d8bed3cfbc063c058e4d5a9c32ad585
  - id: bQI0OmJPby4.pdf
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-18-representations-classes-trajectories-transitions/bQI0OmJPby4.pdf
    title: 3play pdf file
    type: null
    uid: 0c98542b841b2aa8678b10de0db7487c
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bcc842a667de769a4cc32f5080e2e6ce
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 6ec4e8a98402433915c74fc0cf8da9f3
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: ad4d5a6167fa86ddf03abacbd1e6b576
inline_embed_id: '24717168lecture18:representations:classes,trajectories,transitions45627411'
order_index: 199
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-18-representations-classes-trajectories-transitions
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-18-representations-classes-trajectories-transitions
title: 'Lecture 18: Representations: Classes, Trajectories, Transitions'
transcript: >-
  <p><span m='15220'>PATRICK WINSTON: We might wonder a little bit about
  the</span> <span m='19340'>nature of human intelligence, and we might reflect
  a little</span> <span m='24540'>bit on the kind of intelligence we've
  been</span> <span m='26230'>talking about in the past few weeks.</span>
  </p><p><span m='28310'>It's been an intelligence of sorts.</span> </p><p><span
  m='31160'>Those programs, support vector machines, boosting, they can</span>
  <span m='33980'>do really smart things.</span> </p><p><span m='36030'>But the
  peculiar thing about systems that use those methods</span> <span m='38710'>is
  that those systems don't have any idea about what</span> <span
  m='43770'>they're doing.</span> </p><p><span m='45260'>They don't know
  anything.</span> </p><p><span m='47380'>So they don't give us very much of an
  insight into the</span> <span m='49810'>nature of human intelligence.</span>
  </p><p><span m='52720'>And, after all, I'd like to have a model of
  human</span> <span m='54500'>intelligence because, let's face it, we're the
  smartest</span> <span m='58000'>things around.</span> </p><p><span
  m='59830'>So there are lots of ways to approach that question.</span>
  </p><p><span m='62760'>And we'll approach that question first from a</span>
  <span m='68090'>evolutionary point of view.</span> </p><p><span m='70560'>Some
  scientists believe, me for instance, that we have a</span> <span
  m='76990'>family tree that looks about like this.</span> </p><p><span
  m='90110'>Too small to see much of that, but the main point is that we</span>
  <span m='93970'>haven't been around very long.</span> </p><p><span
  m='96360'>We humans have been around maybe 200,000 years, and the</span> <span
  m='100470'>dinosaurs died out 60 million years ago.</span> </p><p><span
  m='104030'>So in the blink of an eye, we seem to have, more or less,</span>
  <span m='107890'>taken over.</span> </p><p><span m='110500'>When you look at
  that family tree on a scale where you can</span> <span m='114590'>see it, one
  of the characteristics is increasing</span> <span m='117960'>brain
  size.</span> </p><p><span m='122380'>There we are on the left, chimpanzee on
  the right.</span> </p><p><span m='126980'>Clearly, mostly mouth, not to much
  brain in there.</span> </p><p><span m='131300'>That one down below is a
  reconstruction of one of those</span> <span m='135040'>pithecus type bipedal
  apes from about 4 million</span> <span m='140380'>years ago or so.</span>
  </p><p><span m='142680'>So we became bipedal a long time before we</span>
  <span m='145770'>had much of a brain.</span> </p><p><span m='147810'>So you
  might think, well, maybe brain size has a lot to</span> <span m='150980'>do
  with it, and I suppose it does.</span> </p><p><span m='154079'>So we can plot
  brain volume of our ancestors versus time.</span> </p><p><span m='160700'>So
  the picture I just showed you was from about 3 million</span> <span
  m='162950'>years ago, I guess.</span> </p><p><span m='165740'>And then on the
  upper right hand corner, oh, that's not</span> <span m='168530'>just us,
  that's also the Neanderthals.</span> </p><p><span m='171500'>Their brains
  might have been slightly bigger than ours.</span> </p><p><span m='174750'>So
  it isn't just brain size.</span> </p><p><span m='178020'>Here's what that guy
  looks like.</span> </p><p><span m='180660'>That's a Neanderthal, of course, on
  the left.</span> </p><p><span m='184930'>And that's one of us on the
  right.</span> </p><p><span m='186680'>Some conspicuous differences, big heads,
  the rib cage is</span> <span m='192630'>kind of conical in shape, a large
  pelvis.</span> </p><p><span m='197130'>People like to make a lot of
  speculations about how they</span> <span m='199670'>must have moved
  around.</span> </p><p><span m='202031'>But one thing is plain, they didn't
  amount to much.</span> </p><p><span m='206062'>They could make stone tools,
  but those stone tools didn't</span> <span m='209300'>change much over tens of
  thousands of years.</span> </p><p><span m='213170'>And that was pretty much
  the story with us too, until</span> <span m='216240'>something happened,
  probably in southern Africa, probably</span> <span m='220400'>in a group of
  individuals, maybe less than 1,000.</span> </p><p><span m='225500'>And what's
  the evidence for that?</span> </p><p><span m='226520'>The evidence for that is
  mostly--</span> <span m='228840'>comes from DNA studies with a lot of
  probabilistic</span> <span m='234420'>assumptions, and Monte Carlo
  simulations, but it seems</span> <span m='237850'>among the competing
  hypothesis for how we came to populate</span> <span m='240640'>the world, it
  seems that there was a group of us, homo</span> <span m='243290'>sapiens, in
  Southern Africa that got something that nobody</span> <span m='246820'>else
  had and the highest probability scenario is that</span> <span m='251920'>we
  quickly took over.</span> </p><p><span m='254870'>That population of homo
  sapiens dominated the rest,</span> <span m='258560'>went out of Africa, and
  within the blink of an eye did that</span> <span m='261970'>sort of
  stuff.</span> </p><p><span m='265300'>What's that sort of stuff?</span>
  </p><p><span m='268330'>Those two paintings are from Lascaux about</span>
  <span m='271120'>25,000 years ago.</span> </p><p><span
  m='275190'>Paleoanthropologists, like Tattersall, take that as plain</span>
  <span m='277870'>evidence that there was symbolic thought on the people</span>
  <span m='280190'>who were around at that time, us homo sapiens.</span>
  </p><p><span m='283710'>The head is a carving of a mastodon tusk of a
  woman</span> <span m='289120'>25,000 years ago.</span> </p><p><span
  m='291110'>Also, plainly symbolic, people are making a lot of jewelry</span>
  <span m='296750'>and doing self adornment.</span> </p><p><span m='297860'>The
  Neanderthals never seemed to do that.</span> </p><p><span m='300130'>That
  jewelry making seems to have gone back to Southern</span> <span
  m='303180'>Africa, maybe 70,000 years ago.</span> </p><p><span
  m='306410'>People were puncturing seashells and using them as</span> <span
  m='309060'>necklaces, apparently.</span> </p><p><span m='311990'>So something
  happened, and the paleoanthropologists, who</span> <span m='315350'>write
  fascinating stuff, don't quite know how to talk about</span> <span
  m='318110'>it other than to say it looks like we</span> <span
  m='319360'>became somehow symbolic.</span> </p><p><span m='321820'>And somehow
  that has something to do with language.</span> </p><p><span m='325780'>So if
  you talk to Noam Chomsky he will say--</span> <span m='330280'>let me get this
  precise, this is near his</span> <span m='332020'>quotation as I can
  get.</span> </p><p><span m='334450'>He thinks it was the ability to take two
  concepts and put</span> <span m='337920'>them together to form a third concept
  without disturbing the</span> <span m='341400'>original concepts and without
  limit, and each</span> <span m='344850'>part of that's important.</span>
  </p><p><span m='347030'>The without limit part is what separates us from
  species that</span> <span m='350100'>might be able to do that a little bit,
  but we can do it</span> <span m='353659'>without any apparent limit.</span>
  </p><p><span m='357210'>So that's a linguist speaking.</span> </p><p><span
  m='358760'>He talks a lot about the merge operation, and</span> <span
  m='360910'>combinators and language--</span> <span m='363080'>using terms
  foreign to us.</span> </p><p><span m='364680'>Better not use the term
  "combinator," it's kind of a</span> <span m='366550'>computer science
  term.</span> </p><p><span m='368810'>But whatever it is, it seemed to happen
  about that time.</span> </p><p><span m='373210'>It didn't happen slowly and
  proportion to brain size, it</span> <span m='376980'>seemed to happen all of a
  sudden in consequence of a</span> <span m='380460'>brain that had grown big
  enough to be an enablement but</span> <span m='384520'>the capability was not
  what pulled</span> <span m='387480'>evolution in that direction.</span>
  </p><p><span m='389710'>So, I believe, that whatever that was, that
  capability,</span> <span m='395000'>enabled humans, us humans, to tell and
  understand stories,</span> <span m='401540'>and that's what separates us from
  the other primates.</span> </p><p><span m='405150'>That ability to--</span>
  <span m='406300'>The symbolic ability, whatever it is, enabled
  storytelling</span> <span m='411280'>and understanding.</span> </p><p><span
  m='412070'>And that's what all education is about and that's why our</span>
  <span m='414770'>species is special.</span> </p><p><span m='416880'>So what
  we're going to talk about today is something you</span> <span m='421830'>might
  think of as an instantiation of that</span> <span m='423720'>hypothesis, one
  way of thinking about it.</span> </p><p><span m='426740'>And it's a way of
  thinking about what the linguists would</span> <span m='428920'>call the inner
  language.</span> </p><p><span m='431090'>It's not the language with which we
  communicate, it's the</span> <span m='434240'>language with which we think,
  which is closely related to</span> <span m='438660'>the language with which we
  communicate, but may not be</span> <span m='441840'>quite the same
  thing.</span> </p><p><span m='444090'>So many of you are bilingual.</span>
  </p><p><span m='446900'>Chris is bilingual.</span> </p><p><span
  m='448200'>Chris, have you ever had the experience of remembering that</span>
  <span m='450640'>someone said something to you, but not remembering
  what</span> <span m='453860'>language they used?</span> </p><p><span
  m='456658'>STUDENT: [INAUDIBLE].</span> </p><p><span m='462450'>PATRICK
  WINSTON: How about [? you, Sian, ?] have you had</span> <span m='463250'>that
  experience?</span> </p><p><span m='464677'>STUDENT: [INAUDIBLE].</span>
  </p><p><span m='465870'>PATRICK WINSTON: What?</span> </p><p><span
  m='466420'>STUDENT: I always [INAUDIBLE].</span> </p><p><span
  m='470121'>PATRICK WINSTON: [INAUDIBLE] experience of having--</span> <span
  m='472490'>David, have you ever had that experience of remembering some</span>
  <span m='475010'>conversation but not remembering the language in</span> <span
  m='477140'>which it was cast?</span> </p><p><span m='478659'>STUDENT: Well,
  you remember something you usually don't</span> <span m='480046'>know which
  language it was in anyway.</span> </p><p><span m='481894'>PATRICK WINSTON: You
  usually don't remember.</span> </p><p><span m='483880'>That's a common
  view.</span> </p><p><span m='485480'>You remember something was said, that
  there was a</span> <span m='487110'>conversation that had some content, but if
  it's with a</span> <span m='491640'>speaker of your own language and your
  embedded in another</span> <span m='494250'>place, you often don't remember
  what language the</span> <span m='498340'>conversation was in.</span>
  </p><p><span m='500110'>Is that right, [? Wana, ?] you remember things like
  that?</span> </p><p><span m='502500'>Not sure?</span> </p><p><span
  m='503912'>STUDENT: People who [INAUDIBLE] speak in a certain</span> <span
  m='505941'>language, so--</span> <span m='507520'>PATRICK WINSTON: Sometimes
  you don't have that confusion, she</span> <span m='509060'>says, because you
  always speak to particular people in a</span> <span m='512400'>particular
  language.</span> </p><p><span m='513330'>But many people report that they have
  that experience of</span> <span m='516169'>not remembering which language
  something was said in.</span> </p><p><span m='520289'>Well, OK, so what are we
  going to do?</span> </p><p><span m='522590'>We need an inner language, and
  maybe we can start just by</span> <span m='525610'>saying, let's have
  something that looks sort</span> <span m='528690'>of familiar to us.</span>
  </p><p><span m='529980'>We have an object and it's supported by some
  other</span> <span m='535290'>objects, so those are support relations.</span>
  </p><p><span m='542680'>That's one example of what we might call a semantic
  net.</span> </p><p><span m='545850'>It's a network that's got nodes and links,
  it's got--</span> <span m='550940'>it has some meaning.</span> </p><p><span
  m='552640'>That's where the word "semantic" comes from.</span> </p><p><span
  m='554790'>Well, we might have another example that looks like this.</span>
  </p><p><span m='558760'>There's Macbeth, there's Duncan, and Macbeth
  murders</span> <span m='570640'>Duncan, then we also know, somehow, there's a
  kill</span> <span m='579870'>involved as a consequence, and then
  ultimately,</span> <span m='583720'>Duncan has a property.</span> </p><p><span
  m='593500'>And that property is the property of being dead.</span>
  </p><p><span m='598460'>So there's another semantic net recording something
  that</span> <span m='601530'>happens in Shakespeare's Macbeth plot.</span>
  </p><p><span m='606030'>Now, we can decorate that a little bit.</span>
  </p><p><span m='607880'>So as to get a couple of other concepts in
  play.</span> </p><p><span m='611200'>First of all, the thing we've got already
  is we've got</span> <span m='614090'>combinators.</span> </p><p><span
  m='622520'>Then combinators.</span> </p><p><span m='626570'>Well, a fancy name
  for those links that connect the nodes.</span> </p><p><span m='630590'>Another
  thing we've got is an opportunity for connecting the</span> <span
  m='634410'>links themselves.</span> </p><p><span m='636370'>So the murder sort
  of implies the kill, and the kill leads</span> <span m='641920'>us to conclude
  that the victim is dead.</span> </p><p><span m='645170'>So that is treating
  the links themselves as objects that can</span> <span m='650720'>be the
  subject or object of other links.</span> </p><p><span m='654240'>So we call
  that process "reification."</span> <span m='664630'>Now, in artificial
  intelligence, semantic nets</span> <span m='668100'>we're all over the early
  work, but if you have a big network</span> <span m='671460'>that covers the
  wall you need some way of putting a</span> <span m='674780'>spotlight on some
  pieces of it.</span> </p><p><span m='677810'>So Marvin Minsky put a lot of
  technical content into that</span> <span m='682580'>idea and created the
  notion of--</span> <span m='686830'>a notion that deserves another color
  here--</span> <span m='690210'>he suggested that we need a localization
  process, so we</span> <span m='693850'>have frames, so-called frames or
  templates.</span> </p><p><span m='698110'>And a frame for this murder action
  might be that there's a</span> <span m='701340'>murder frame that has an agent
  and has a victim, and the</span> <span m='711450'>agent is Macbeth, and the
  victim is Duncan.</span> </p><p><span m='722950'>So that's a way of putting a
  localization layer on top of</span> <span m='733780'>what we've got so
  far.</span> </p><p><span m='736230'>Later on, I'll add sequence to that
  list.</span> </p><p><span m='738900'>So this is where it rested for a long
  time, and in some</span> <span m='741820'>sense, still rests there because as
  soon as you've got</span> <span m='745300'>combinators, you've got
  something</span> <span m='747110'>that's pretty much universal.</span>
  </p><p><span m='750690'>You can do anything with it.</span> </p><p><span
  m='753690'>The trouble is it's sort of down at the bit level.</span>
  </p><p><span m='757060'>It's like assembly code.</span> </p><p><span
  m='759390'>It doesn't have, as a concept, enough organization to help</span>
  <span m='764230'>you go to the next level of achievement.</span> </p><p><span
  m='768360'>There's also a little problem here that deserves also, some</span>
  <span m='773760'>mention, and that is that we have, over this whole
  thing,</span> <span m='780770'>the problem of parasitic semantics.</span>
  </p><p><span m='785910'>Parasitic semantics.</span> </p><p><span m='795318'>A
  kind of ugliness that surrounds this whole concept</span> <span
  m='798320'>because when we look at a diagram like that, and we say,</span>
  <span m='801360'>oh, Macbeth murdered Duncan, that means</span> <span
  m='803260'>Duncan's the victim.</span> </p><p><span m='804880'>We know there
  must have been a motive, maybe Macbeth wanted</span> <span m='807720'>to be
  king.</span> </p><p><span m='808190'>Well, we know all that stuff, and there's
  a tendency to</span> <span m='811810'>project that knowing into the
  machine.</span> </p><p><span m='815530'>If you're going to play with your
  telephone, please leave.</span> </p><p><span m='821670'>So if we project
  meaning into that that's our understanding</span> <span m='831870'>that's not
  the machine's understanding.</span> </p><p><span m='833750'>So much of the
  meaning can be said to be parasitic.</span> </p><p><span m='838700'>We're the
  parasite, and we're projecting</span> <span m='840740'>the into that
  thing.</span> </p><p><span m='842325'>Putting that diagram into some machine
  form doesn't mean the</span> <span m='845110'>machine knows anything.</span>
  </p><p><span m='847710'>It might be able to conclude some things, but
  it's</span> <span m='850140'>understanding is not grounded in any kind of
  contact with</span> <span m='853300'>the physical world.</span> </p><p><span
  m='854880'>So we have to worry a lot about that and where</span> <span
  m='858310'>philosophers would stop there and go off and write a few</span>
  <span m='860460'>books on the subject.</span> </p><p><span m='862340'>But
  we're not philosophers so we're going to just mention</span> <span
  m='864470'>the problem and go barreling ahead.</span> </p><p><span
  m='867700'>So we need to use this notion of semantic net, and we have</span>
  <span m='871220'>to ask ourselves some questions about what elements</span>
  <span m='873200'>of the inner language are most useful and yet it might
  be</span> <span m='875660'>very complicated, but here's usefulness number
  one.</span> </p><p><span m='879960'>The notion of classification.</span>
  </p><p><span m='883330'>So we know about stuff, and we know about,</span>
  <span m='886660'>for example, pianos.</span> </p><p><span m='892620'>And we
  know about tools.</span> </p><p><span m='897160'>And we know about
  maps.</span> </p><p><span m='902300'>But we know about those things on
  different levels.</span> </p><p><span m='906010'>So say I'm thinking about a
  tool, do you have a very good</span> <span m='911120'>image of what I'm
  talking about?</span> </p><p><span m='912960'>The answer has to be no because
  the notion of a tool</span> <span m='915690'>is very vague, so it's hard to
  form a picture of</span> <span m='918960'>what that's all about.</span>
  </p><p><span m='921360'>On the other hand, if I said I'm thinking about a
  mac.</span> </p><p><span m='924720'>Well, this is interesting because there's
  lexical</span> <span m='926990'>ambiguity there.</span> </p><p><span
  m='927670'>You don't know if I'm talking about the Apple type Mac or</span>
  <span m='931970'>the apple type Mac, or should I say the</span> <span
  m='935400'>fruit or the computer?</span> </p><p><span m='938800'>So there's
  lexical ambiguity there at two levels or more.</span> </p><p><span
  m='943660'>But let's fill this in a little bit.</span> </p><p><span
  m='947260'>If I know I'm talking about a piano, you can form a picture</span>
  <span m='949010'>of that so that seems to be on a more detailed level
  where</span> <span m='951100'>you can do hallucination.</span> </p><p><span
  m='952750'>At a higher level you have just a musical instrument.</span>
  </p><p><span m='958730'>And I can give you a tool to think about by writing
  hammer.</span> </p><p><span m='966260'>And if I'm going to have a mac,
  it's</span> <span m='968060'>going to be an apple.</span> </p><p><span
  m='970890'>And in this case, I want you to think about a fruit.</span>
  </p><p><span m='975480'>And down here, I can be more specific about</span>
  <span m='977650'>these things too.</span> </p><p><span m='979850'>I can add a
  slight refinement of detail and say, I'm</span> <span m='984330'>thinking
  about one of these.</span> </p><p><span m='985723'>Do you know what this
  is?</span> </p><p><span m='988014'>STUDENT: [INAUDIBLE].</span> </p><p><span
  m='989490'>PATRICK WINSTON: No, it's not a mere hammer, it's a</span> <span
  m='992070'>ball-peen hammer.</span> </p><p><span m='994590'>In some circles,
  it's called a ladies hammer.</span> </p><p><span m='996290'>I don't know
  why.</span> </p><p><span m='998600'>But it's--</span> <span m='1000050'>What's
  it for?</span> </p><p><span m='1002580'>Most people buy it mostly because
  it's</span> <span m='1004420'>small and light weight.</span> </p><p><span
  m='1006060'>But, in fact, it's for metal working.</span> </p><p><span
  m='1008570'>It's for taking a piece of sheet metal and pounding it</span>
  <span m='1010810'>out into an ashtray or something</span> <span m='1012630'>or
  for seating rivets.</span> </p><p><span m='1013870'>It's a metal worker's
  hammer.</span> </p><p><span m='1016530'>So you might not have known about that
  before but now, at</span> <span m='1018450'>least, you have a word to hang
  that knowledge on.</span> </p><p><span m='1020300'>It's a ball peen
  hammer.</span> </p><p><span m='1026010'>So we have various levels here, going
  from very specific</span> <span m='1030059'>to very general.</span>
  </p><p><span m='1031800'>And we can even go to a level of specificity for
  pianos by</span> <span m='1035520'>saying we've got a Bosendorfer.</span>
  </p><p><span m='1043430'>Why is a Bosendorfer special?</span> </p><p><span
  m='1047950'>I mean, is it like a Baldwin?</span> </p><p><span
  m='1051240'>Something's [INAUDIBLE], Yoka--</span> <span m='1057150'>Lots of
  piano types, what's special?</span> </p><p><span m='1058710'>You see, you
  don't know because unless you play the</span> <span m='1062110'>piano, and
  probably unless you're a serious piano player</span> <span m='1065290'>you
  don't know that a Bosendorfer--</span> <span m='1067082'>Ariel, you
  know.</span> </p><p><span m='1068658'>STUDENT: I think its supposed to have an
  extra octave at the</span> <span m='1071950'>bottom, black keys.</span>
  </p><p><span m='1072610'>Pretty cool.</span> </p><p><span m='1073600'>PATRICK
  WINSTON: It's got some extra keys at the bottom.</span> </p><p><span
  m='1076580'>And most people don't know that unless they're serious</span>
  <span m='1078240'>about the piano.</span> </p><p><span m='1079350'>Some
  professional piano players, when they're</span> <span m='1081160'>confronted
  with a Bosendorfer have to have someone cover</span> <span m='1084110'>those
  keys because it screws up their peripheral vision,</span> <span
  m='1087790'>and hit the wrong key.</span> </p><p><span m='1089420'>Because
  they're not used to having those</span> <span m='1090410'>extra keys at the
  bottom.</span> </p><p><span m='1092780'>So that's a little detail but the
  Bosendorfer.</span> </p><p><span m='1095365'>So you can make a kind of graph,
  and you can say, let's</span> <span m='1099470'>go from low, very general, to
  a basic level,</span> <span m='1111140'>to a specific level.</span>
  </p><p><span m='1116170'>So it is the case in human knowledge that that graph
  has</span> <span m='1121550'>a tendency to look sort of like this.</span>
  </p><p><span m='1129030'>So here's tool, here's hammer, here's ball
  peen.</span> </p><p><span m='1133650'>So that level, where you have a big
  jump, that's the general</span> <span m='1137540'>to basic level of
  transition.</span> </p><p><span m='1141580'>So that basic level is probably
  there because that's</span> <span m='1144070'>the level on which we hang a
  huge amount of our knowledge.</span> </p><p><span m='1148090'>We know a lot
  about pianos, and it all seems to be hanging</span> <span m='1152200'>on that
  word piano, which gives us</span> <span m='1154070'>power with the
  concept.</span> </p><p><span m='1156980'>So that's example number one of an
  element</span> <span m='1160680'>of our inner language.</span> </p><p><span
  m='1161600'>The ability to assemble things into hierarchies like that,</span>
  <span m='1165860'>and hang knowledge about those objects on the elements
  in</span> <span m='1170740'>that hierarchy.</span> </p><p><span
  m='1175220'>Well, given that you have elements in the hierarchy, how</span>
  <span m='1177790'>do you talk about them?</span> </p><p><span
  m='1178650'>Well, I like to consider the possibility, just for the sake</span>
  <span m='1181740'>of illustration, that you're thinking about a car
  crashing</span> <span m='1184750'>into a wall.</span> </p><p><span
  m='1186750'>So you've got things to think about like the speed of the</span>
  <span m='1190220'>car, the distance to the wall, and the condition of the
  car.</span> </p><p><span m='1208790'>And you've got the period before the
  crash, during the</span> <span m='1212110'>crash, and after the crash.</span>
  </p><p><span m='1214650'>So you might want to think about how to talk about
  those</span> <span m='1218390'>objects in those three time periods.</span>
  </p><p><span m='1223790'>So we can do that with a vocabulary of change and we
  do</span> <span m='1230410'>that because we believe that most of human
  thinking is</span> <span m='1234400'>thinking about change causing
  change.</span> </p><p><span m='1237360'>And that flies in the face of what we
  learned as engineers.</span> </p><p><span m='1241070'>Because in engineering,
  we learn about state, and once</span> <span m='1244995'>you know the state of
  the system, you know everything</span> <span m='1247900'>you need to know in
  order to predict the future.</span> </p><p><span m='1250020'>The trouble is,
  in our heads, thinking about everything</span> <span m='1253640'>there is in
  the world, including the current phase of</span> <span m='1256007'>the moon,
  is too much stuff.</span> </p><p><span m='1258530'>So mostly, our thinking, we
  think, is hinging on the idea</span> <span m='1263950'>that change leads to
  change.</span> </p><p><span m='1266530'>So that's why we have a vocabulary of
  change.</span> </p><p><span m='1269620'>So in the period before the crash, the
  speed of the car is</span> <span m='1274460'>not changing.</span> </p><p><span
  m='1275090'>There's a little notation for not change, no delta.</span>
  </p><p><span m='1278600'>The distance to the wall, that's decreasing.</span>
  </p><p><span m='1282790'>The condition of the car, that's not changing.</span>
  </p><p><span m='1287370'>Then, the car hits the wall.</span> </p><p><span
  m='1290210'>So the speed of the car disappears, the distance to</span> <span
  m='1293810'>the wall disappears, and the condition of the car will</span>
  <span m='1297950'>change dramatically.</span> </p><p><span
  m='1300010'>Finally, after the crash is over, the speed of the car</span>
  <span m='1304110'>does not appear.</span> </p><p><span m='1305740'>The
  distance to the wall does not change, and the condition</span> <span
  m='1310520'>of the car also does not change.</span> </p><p><span
  m='1313550'>So that's hinting at a vocabulary of change, and its</span> <span
  m='1317020'>use, which will be the second element in our development of</span>
  <span m='1320470'>a vocabulary of ways in which we might have constructed
  are</span> <span m='1324950'>inner language.</span> </p><p><span
  m='1326700'>So this a particular idea, that's classification.</span>
  </p><p><span m='1330800'>This is transition, and a system that purports
  to</span> <span m='1337930'>understand stories with a heavy emphasis on this
  notion</span> <span m='1340850'>of transition and we believe, that is to say,
  I think, that</span> <span m='1345450'>that vocabulary has to have decrease,
  increase, change,</span> <span m='1351880'>appear, and disappear.</span>
  </p><p><span m='1355000'>So there are 10 things you can have in such
  diagrams.</span> </p><p><span m='1359910'>I've done five.</span> </p><p><span
  m='1361070'>That's because, for each of those, there's a not</span> <span
  m='1367110'>variation on that.</span> </p><p><span m='1370070'>So with a
  vocabulary of 10 things can go a long way</span> <span m='1372270'>toward
  helping to describe things that are in process of</span> <span
  m='1375250'>change and making transition.</span> </p><p><span m='1376980'>And
  we have a lot of those words in our vocabulary.</span> </p><p><span
  m='1379200'>We use those words a lot in our vocabulary.</span> </p><p><span
  m='1380680'>They seem heavily connected with vision.</span> </p><p><span
  m='1383380'>Our friend appeared.</span> </p><p><span m='1385700'>The cat
  disappeared.</span> </p><p><span m='1387580'>The speed increased.</span>
  </p><p><span m='1389910'>So this is a description of a crash.</span>
  </p><p><span m='1396090'>In terms of those kinds of elements, now, I say to
  you,</span> <span m='1400430'>how does a camera work?</span> </p><p><span
  m='1403410'>Well, I could say the camera works because a photon crashes</span>
  <span m='1411160'>into a photo receptor.</span> </p><p><span m='1414700'>So
  when I say a photon crashes into a photo receptors, why am</span> <span
  m='1417450'>I saying that, and how does it help?</span> </p><p><span
  m='1420230'>I'm saying that and it helps because it's the same pattern</span>
  <span m='1422890'>of change you already know about when you talk about
  a</span> <span m='1426390'>car crashing into a wall.</span> </p><p><span
  m='1428560'>How does that work?</span> </p><p><span m='1430180'>The speed of
  the photon, the distance of the photon to the</span> <span
  m='1443790'>receptor, and the condition of the receptor.</span> </p><p><span
  m='1453680'>So analogies like that are very much of the core of what</span>
  <span m='1456720'>we think about all the time.</span> </p><p><span
  m='1458700'>Really then, there is representation number two.</span>
  </p><p><span m='1463630'>Number one is class, number two is transition, and
  now,</span> <span m='1467040'>you're ready for number three, which is
  trajectory.</span> </p><p><span m='1473600'>Linguists, who study sentences,
  often talk in terms</span> <span m='1477960'>of fundamental patterns that
  seemed to be in a lot of what</span> <span m='1481430'>we say, and a lot of
  what we say is about objects moving</span> <span m='1485670'>along
  trajectories.</span> </p><p><span m='1489520'>So we can talk about a
  trajectory frame.</span> </p><p><span m='1500680'>And a trajectory frame will
  have elements like this.</span> </p><p><span m='1502650'>It has an object
  moving on a trajectory that ends up at a</span> <span
  m='1505750'>destination.</span> </p><p><span m='1511000'>You might start out
  at a source.</span> </p><p><span m='1516450'>It's probably been arranged by
  some kind of agent, and the</span> <span m='1521970'>agent may assist himself
  making the motion happen with</span> <span m='1526840'>some kind of
  instrument.</span> </p><p><span m='1533700'>There might be somebody helping
  out</span> <span m='1535300'>over here, a co-agent.</span> </p><p><span
  m='1541490'>Well, what else can we have?</span> </p><p><span m='1542620'>A
  beneficiary, someone is helped out by the action.</span> </p><p><span
  m='1555570'>Sometimes, the motion is arranged by a conveyance.</span>
  </p><p><span m='1565450'>So these are a lot of slots, finite slots, and
  descriptions</span> <span m='1572180'>of actions, many of which involve motion
  on a</span> <span m='1574460'>trajectory.</span> </p><p><span m='1576300'>We
  have a tendency in language to decorate these things in</span> <span
  m='1579650'>one way or another, depending on the language.</span> </p><p><span
  m='1582540'>And so in many languages, the decoration is by way of</span> <span
  m='1584690'>position in the sentence.</span> </p><p><span m='1586350'>In
  English, it's often by way of a preposition.</span> </p><p><span
  m='1589400'>It's used to help zero in on a particular role of an object</span>
  <span m='1599430'>in the trajectory scenario.</span> </p><p><span
  m='1602550'>So if I say, I baked a cake with a friend, there's a with</span>
  <span m='1609110'>preposition.</span> </p><p><span m='1611040'>If I baked a
  cake for a friend, the friend is the</span> <span
  m='1614750'>beneficiary.</span> </p><p><span m='1616160'>If I baked a cake
  with an oven, that's an instrument.</span> </p><p><span m='1621390'>The object
  may be moving to a destination from a source, and</span> <span m='1628480'>if
  I'm going to New York by train, I put a</span> <span m='1631460'>by on top of
  that.</span> </p><p><span m='1634080'>If the agent isn't in subject position,
  I would say</span> <span m='1636290'>something like, oh, I see all the
  work</span> <span m='1638700'>was done by a student.</span> </p><p><span
  m='1641520'>So those prepositions have a tendency to help us zoom in on</span>
  <span m='1643950'>the actual role of particular objects in this whole
  package,</span> <span m='1647130'>the whole frame.</span> </p><p><span
  m='1649630'>So this is number three.</span> </p><p><span m='1654320'>There's a
  variation on this in which there's no actual</span> <span
  m='1656490'>trajectory in which case we'll just call that a role frame.</span>
  </p><p><span m='1659930'>Because if there's no trajectory, we can still
  have</span> <span m='1661780'>things such as an instrument, a co-agent, and a
  beneficiary.</span> </p><p><span m='1667450'>So now, we've got three
  representations.</span> </p><p><span m='1670120'>You might say, well, what
  good are they?</span> </p><p><span m='1671410'>And you can determine what good
  they are these days</span> <span m='1673680'>because it's easier to go over
  established corpuses, and say,</span> <span m='1677460'>what fraction of
  those, of the sentences, in such a corpus</span> <span m='1681700'>involve
  classification or a transition or a trajectory.</span> </p><p><span
  m='1687660'>The most well known of these is the so-called Wall Street</span>
  <span m='1690170'>Journal Corpus.</span> </p><p><span m='1690810'>It has
  50,000 sentences in it, drawn from some period of</span> <span
  m='1694790'>time, all the syntactical language types work with that</span>
  <span m='1702700'>corpus a great deal.</span> </p><p><span m='1704530'>And we
  worked with it a little bit too, to see what fraction</span> <span
  m='1706570'>of the sentences or what the density of trajectories and</span>
  <span m='1711210'>transitions are in those sentences.</span> </p><p><span
  m='1714170'>So I have to say that a little more carefully, because the</span>
  <span m='1718010'>finding is that in 100 sentences you'll find about 25</span>
  <span m='1728730'>transitions or trajectories.</span> </p><p><span
  m='1732120'>So they're very densely represented.</span> </p><p><span
  m='1734590'>They're often very abstract.</span> </p><p><span
  m='1736270'>Prices rose, the economy went to someplace, but there are</span>
  <span m='1745470'>still words that denote transition or trajectory.</span>
  </p><p><span m='1750660'>Of course, once you have all this stuff, that you
  have then</span> <span m='1754800'>have a desire to put it together.</span>
  </p><p><span m='1757110'>So the next thing we need to talk about is story
  sequences.</span> </p><p><span m='1762810'>So a story sequence can be a single
  sentence, and I want to</span> <span m='1767200'>illustrate that with one of
  my favorites.</span> </p><p><span m='1775050'>Here's the sentences.</span>
  </p><p><span m='1788220'>I think I've chosen a gender neutral name so as not
  getting</span> <span m='1790915'>in any trouble.</span> </p><p><span
  m='1792270'>So Pat, but I don't call myself Pat because I decided</span> <span
  m='1796600'>when I was 18 years old that pat is a unit</span> <span
  m='1798570'>of measure for butter.</span> </p><p><span m='1800470'>In any
  case, with Pat comforted, Mary, do you have</span> <span m='1802550'>an image
  of what happened?</span> </p><p><span m='1806100'>Probably not a very firm
  image.</span> </p><p><span m='1808940'>You know that Pat did something, but
  you don't know</span> <span m='1813520'>exactly what.</span> </p><p><span
  m='1815790'>Nevertheless, when Pat comforted Chris, you can</span> <span
  m='1819150'>construct something that looks like a role frame.</span>
  </p><p><span m='1826000'>Because the role frame for that would have an agent,
  and</span> <span m='1832930'>that would be Pat.</span> </p><p><span
  m='1835840'>There's an action.</span> </p><p><span m='1839740'>We're going to
  put a question mark in there because we don't</span> <span m='1841760'>have a
  very firm image of what the action is.</span> </p><p><span m='1844760'>Then
  again, we're building a wall frame, like so.</span> </p><p><span
  m='1851190'>The object is Chris.</span> </p><p><span m='1856230'>Oh, you know
  that is the object.</span> </p><p><span m='1868160'>Is there anything else we
  can say?</span> </p><p><span m='1869710'>Oh, yes, we can probably say
  something more.</span> </p><p><span m='1872820'>Something else comes to mind
  when you see</span> <span m='1875630'>Pat comforted Chris.</span> </p><p><span
  m='1877910'>There's a sort of result, and the result is</span> <span
  m='1883120'>a transition frame.</span> </p><p><span m='1888515'>And the
  transition frame involves an object, which is</span> <span m='1896370'>Chris,
  and Chris has a mood, which presumably, is improved.</span> </p><p><span
  m='1910570'>It goes up.</span> </p><p><span m='1913460'>Did you have
  something, Elliott?</span> </p><p><span m='1914855'>STUDENT: Could you, I
  guess, analogize the Pat comforted</span> <span m='1918320'>Chris to something
  like Pat gave comfort to Chris as Chris</span> <span m='1924260'>is the
  destination?</span> </p><p><span m='1926240'>And couldn't this be
  [INAUDIBLE]?</span> </p><p><span m='1928715'>PATRICK WINSTON: Elliott is
  wandering into a very</span> <span m='1931550'>interesting area having to do
  with, couldn't you think about</span> <span m='1934250'>this in another way
  and think of it as something moving</span> <span m='1937860'>along a
  trajectory.</span> </p><p><span m='1939230'>Comfort is moving, if not from
  Pat, at least to Chris.</span> </p><p><span m='1944600'>And that's a very
  important kind of observation because</span> <span m='1946610'>what it would
  suggest is there can be a utility in thinking</span> <span m='1950220'>of
  things in multiple ways, multiple representations.</span> </p><p><span
  m='1953300'>Marvin Minsky has a wonderful aphoristic phrase, which is,</span>
  <span m='1957040'>if you can only think about something in one way, you
  have</span> <span m='1960700'>no recourse when you get stuck.</span>
  </p><p><span m='1963160'>So multiple representations mean you have multiple
  ways of</span> <span m='1966630'>gathering regularity from the world, and
  collecting it and</span> <span m='1970340'>therefore that'll make you
  smarter.</span> </p><p><span m='1972250'>So yes, you could do that, and that
  would be a compliment to</span> <span m='1976080'>what I'm doing now.</span>
  </p><p><span m='1978020'>Let me continue what I'm doing now.</span>
  </p><p><span m='1979490'>So what have I done?</span> </p><p><span
  m='1981780'>I've got a role frame and a tradition frame, and the</span> <span
  m='1985720'>transition frame is the target of the result</span> <span
  m='1989550'>slot in the role frame.</span> </p><p><span m='1995110'>Now, we
  can modify this a little bit.</span> </p><p><span m='2000440'>And maybe want
  to say, instead of comforted, terrorized.</span> </p><p><span m='2010840'>And
  how would that change things?</span> </p><p><span m='2013490'>We don't know
  exactly what Pat did so the</span> <span m='2017490'>action remains
  unknown.</span> </p><p><span m='2020180'>The agent and the object are the
  same.</span> </p><p><span m='2022670'>But the result here is presumably
  that</span> <span m='2025010'>the mood went down.</span> </p><p><span
  m='2029590'>With just what we've got so far, we can answer a lot of</span>
  <span m='2031550'>questions, by the way.</span> </p><p><span m='2032460'>Once
  we've got the sentence understood in these terms, we</span> <span
  m='2035010'>can say who did the thing?</span> </p><p><span m='2037210'>What's
  this all about?</span> </p><p><span m='2038030'>And the answer is Pat.</span>
  </p><p><span m='2039490'>What did Pat do?</span> </p><p><span
  m='2040330'>Comfort, terrorized.</span> </p><p><span m='2042130'>Who do they
  do it too?</span> </p><p><span m='2043910'>Who was the object?</span>
  </p><p><span m='2045310'>It's Chris.</span> </p><p><span m='2046780'>What was
  the result?</span> </p><p><span m='2048350'>Chris felt better.</span>
  </p><p><span m='2049949'>Chris felt worse.</span> </p><p><span m='2052260'>So
  these representations already give us a question and</span> <span
  m='2054639'>answering capability that makes for an understanding of</span>
  <span m='2062219'>the sentence.</span> </p><p><span m='2064760'>But still, we
  haven't been very specific, so our next</span> <span m='2066920'>step takes
  this same sentence in a more specific direction.</span> </p><p><span
  m='2071310'>So here's a way that goes.</span> </p><p><span m='2075300'>Kissed
  Chris.</span> </p><p><span m='2080469'>Now, you begin to get a sense of what's
  going on, you form a</span> <span m='2084530'>mental image, so you could have
  a hallucination.</span> </p><p><span m='2093920'>And that hallucinations will
  also be a kind of frame, but,</span> <span m='2097870'>in this case, it'll be
  a trajectory frame.</span> </p><p><span m='2105570'>And the object would be, I
  don't know, Pat's lips.</span> </p><p><span m='2116230'>And the destination
  will be Chris' lips.</span> </p><p><span m='2126670'>I don't know, is that
  right?</span> </p><p><span m='2129490'>It depends.</span> </p><p><span
  m='2130400'>It depends.</span> </p><p><span m='2131350'>Have you all formed a
  picture of what's going on here?</span> </p><p><span m='2134800'>So it will be
  different depending on whether Chris is</span> <span m='2140080'>Pat's
  girlfriend or if Chris is Pat's daughter or if Chris</span> <span
  m='2147970'>is a frog and Pat is a prince -ess, I guess, the way the</span>
  <span m='2153830'>story usually goes.</span> </p><p><span m='2158080'>So
  somehow we have, in our heads, all kinds of libraries</span> <span
  m='2161080'>that help us to form mental pictures of things when we see</span>
  <span m='2163490'>things like kissed.</span> </p><p><span m='2166470'>So one
  final one just to show the variety.</span> </p><p><span m='2170870'>We could
  say that Pat stabbed Chris.</span> </p><p><span m='2180670'>What
  changes?</span> </p><p><span m='2183410'>Let's see, in the case of kissed, the
  mood is going up.</span> </p><p><span m='2188550'>In the case of stabbed, the
  mood is going down.</span> </p><p><span m='2191760'>You can also probably say
  that the health is going down.</span> </p><p><span m='2196710'>And the
  destination is Chris' body.</span> </p><p><span m='2201310'>And the object
  that's moving is Pat's knife.</span> </p><p><span m='2207660'>We get the same
  pattern with both of those sentences.</span> </p><p><span m='2211460'>So both
  of them involve a sequence that starts off with</span> <span m='2215060'>the
  action, moves to a transition and a trajectory</span> <span m='2218080'>and
  those are all arranged in a line.</span> </p><p><span m='2220140'>And that
  line is something that gives us a lot of power</span> <span m='2226790'>over
  the situation relative to a semantic net.</span> </p><p><span m='2230460'>So
  I'm going to decorate that one more time, and say that</span> <span
  m='2234360'>another element we get out of our</span> <span
  m='2236580'>internal language is sequence.</span> </p><p><span m='2239160'>An
  element we need in order to have anything that looks like</span> <span
  m='2244110'>an account of an inner language is sequence.</span> </p><p><span
  m='2247510'>Because if you think about things being arrayed in a vast</span>
  <span m='2250370'>spreading network, it's hard to deal with them.</span>
  </p><p><span m='2252520'>But if you thing about things being arrayed along a
  line, in</span> <span m='2256320'>a sequence of actions or events, like so,
  then that</span> <span m='2262490'>imposes enough constraint to get a handle
  on</span> <span m='2265530'>what's going on.</span> </p><p><span
  m='2267330'>So what we're going to call this is the representation,</span>
  <span m='2272050'>and I guess I'm up to one, two, three, four.</span>
  </p><p><span m='2276100'>This is a representation of story sequence.</span>
  </p><p><span m='2286660'>so even though that's a kind of micro-story, it's
  still an</span> <span m='2289420'>example of a story sequence because we get
  the power out</span> <span m='2293510'>of it by arranging everything in a
  line.</span> </p><p><span m='2297406'>You have a sense, I think, especially if
  you play a</span> <span m='2300400'>musical instrument, on how dependent we
  are on sequence.</span> </p><p><span m='2304160'>So if you play a musical
  instrument, you probably know</span> <span m='2306580'>how difficult it is to
  start replaying a piece of music</span> <span m='2311270'>from the middle of a
  measure.</span> </p><p><span m='2313380'>You have to go back to at least the
  beginning of the</span> <span m='2315440'>measure, and probably to the
  beginning of the phrase, if</span> <span m='2317545'>not the beginning of the
  piece.</span> </p><p><span m='2319330'>So our memory seems to be, at least in
  music, very rooted in</span> <span m='2323880'>the idea of sequences.</span>
  </p><p><span m='2326250'>And that's often true of storytelling too.</span>
  </p><p><span m='2328475'>We have to go back to the beginning of at least a
  scene,</span> <span m='2332100'>because somehow these things are arranged in
  sequences that</span> <span m='2336260'>form, somehow, usefulness out of their
  sequentialness.</span> </p><p><span m='2343070'>So there's one more thing we
  can talk about and that is the</span> <span m='2345280'>idea of not just the
  idea of how these sequences are</span> <span m='2351920'>constructed and what
  they're constructed out of, but we can</span> <span m='2354840'>also talk a
  little bit in terms of libraries of stories.</span> </p><p><span
  m='2367640'>And when we talk about libraries of stories, we can</span> <span
  m='2369840'>think about kind of the sort of standard stories that we</span>
  <span m='2373350'>have and how they're arranged, and how we can know a
  lot</span> <span m='2376290'>about something by what it's super class
  is.</span> </p><p><span m='2379840'>So it's a variation on the theme of
  learning stuff from</span> <span m='2383770'>the super classes.</span>
  </p><p><span m='2385520'>So here's an event frame.</span> </p><p><span
  m='2390780'>And then, in addition to event frames,</span> <span
  m='2394990'>there's disaster frames.</span> </p><p><span m='2399700'>And then
  there are party frames.</span> </p><p><span m='2404320'>And parties and
  disasters are both events.</span> </p><p><span m='2411010'>And when we talk
  about disasters, we know, in turn,</span> <span m='2413520'>they break up in a
  variety of things.</span> </p><p><span m='2415630'>We have earthquake
  disasters, and maybe we have hurricanes.</span> </p><p><span m='2427890'>And
  in the party world we have, I don't know, birthday</span> <span
  m='2430440'>parties, and we have weddings.</span> </p><p><span m='2441310'>And
  each of these types of frames invites us to fill in</span> <span
  m='2444920'>particular slots.</span> </p><p><span m='2446050'>So if we're
  reading a newspaper story about a</span> <span m='2447910'>wedding, we know
  that we're going to be learning the same</span> <span m='2451730'>sorts of
  things we will learn about any party except there</span> <span m='2454870'>is
  the additional information that we expect that says</span> <span
  m='2458790'>something about the bride and the groom.</span> </p><p><span
  m='2470220'>If we have a raw event and we don't know anything more
  about</span> <span m='2473150'>it than that, there's a time and place.</span>
  </p><p><span m='2480480'>If it's a disaster frame, it gets a grizzly over
  here, but</span> <span m='2483800'>if there's a disaster frame, we might have
  the fatalities,</span> <span m='2491080'>and how much it cost.</span>
  </p><p><span m='2494800'>If it's an earthquake frame, we need to know the
  magnitude</span> <span m='2500800'>of the quake, and the name of the
  fault.</span> </p><p><span m='2506540'>If it's a hurricane, we have the
  category and the name.</span> </p><p><span m='2516140'>So each of these things
  up there can be viewed, not just</span> <span m='2521040'>an example of
  something, but as a new frame all by itself.</span> </p><p><span
  m='2525690'>As we mature, we have these first four things as building</span>
  <span m='2530500'>blocks, and then, we educate ourselves, and we get
  all</span> <span m='2534470'>those kinds of frames that help us to</span>
  <span m='2536370'>understand the world.</span> </p><p><span m='2539290'>But
  how to fill those in from a newspaper story can be</span> <span
  m='2544150'>sometimes, quite a challenge.</span> </p><p><span
  m='2545780'>Actually the worst thing to understand is children's</span> <span
  m='2549910'>stories because, and this was determined experimentally
  when</span> <span m='2556820'>people tried to understand children's stories,
  because it</span> <span m='2559350'>turns out that children's stories are not
  simpler than</span> <span m='2565450'>the stories we write for adults.</span>
  </p><p><span m='2566540'>In many cases, they're harder.</span> </p><p><span
  m='2570550'>If you read about Shakespearean plots, it's all</span> <span
  m='2572350'>about intrigue, murder, jealousy, greed, but when</span> <span
  m='2576360'>you're trying to write a children's story it can be</span> <span
  m='2578540'>about anything.</span> </p><p><span m='2581300'>And worse yet, the
  children's story often raises problems</span> <span m='2588200'>that you don't
  see in newspaper stories.</span> </p><p><span m='2589830'>Let me illustrate
  that for you.</span> </p><p><span m='2599310'>You want to read that
  story?</span> </p><p><span m='2605080'>You have no trouble figuring it out, of
  course, but think</span> <span m='2607670'>about a poor machine.</span>
  </p><p><span m='2610090'>It's struggling to understand anything.</span>
  </p><p><span m='2612570'>What's going to be the problem?</span> </p><p><span
  m='2616010'>It's going to have trouble figuring out those pronoun</span> <span
  m='2617700'>antecedents.</span> </p><p><span m='2619480'>Look at them.</span>
  </p><p><span m='2619990'>They're complicated.</span> </p><p><span
  m='2623620'>[MUSIC PLAYING]</span> <span m='2625750'>PATRICK WINSTON: Shut
  [INAUDIBLE].</span> </p><p><span m='2631755'>Oh, that's the way.</span>
  </p><p><span m='2636960'>[INAUDIBLE].</span> </p><p><span m='2640640'>Here are
  the pronouns.</span> </p><p><span m='2643000'>One of them wanted to buy a
  kite.</span> </p><p><span m='2645940'>He has one, he said.</span> </p><p><span
  m='2647240'>He will make you take it back.</span> </p><p><span m='2650230'>So
  that's pretty hard.</span> </p><p><span m='2651030'>Actually, the principal
  here that I'm driving at is, when</span> <span m='2654790'>you have a new
  story or any story, if you have an old</span> <span m='2657750'>story but you
  want to read it-- when you want to</span> <span m='2659080'>understand it
  quickly, the instantiation of it quickly,</span> <span m='2663350'>you need to
  be sure that, if you're the storyteller, you</span> <span m='2666980'>don't
  add to the burden of the understanding any syntactic</span> <span
  m='2669650'>difficulty.</span> </p><p><span m='2670840'>So that's an example
  of telling a story with</span> <span m='2672790'>additional syntactic
  difficulty.</span> </p><p><span m='2675470'>No newspaper journalist would ever
  write</span> <span m='2679360'>the story like that.</span> </p><p><span
  m='2681000'>Here's how they would write it.</span> </p><p><span
  m='2687760'>They would even give you a clue that there's certain</span> <span
  m='2690130'>information you're never going to get, like</span> <span
  m='2692720'>who told the story.</span> </p><p><span m='2694600'>It's that
  reliable sources business.</span> </p><p><span m='2698070'>So this brings us
  to the final bit that I want to deal with</span> <span m='2702550'>today, and
  what I'm going to do is, if you came into this</span> <span m='2705150'>class
  today as a 97 pound writing weakling, you're about</span> <span m='2709660'>to
  emerge as a 250 pound mountain of a writer.</span> </p><p><span
  m='2714730'>Because I want to tell you a few tricks that will make you</span>
  <span m='2716630'>usually better as a writer, especially if</span> <span
  m='2720540'>you're Russian or German.</span> </p><p><span m='2725200'>And
  here's how it works.</span> </p><p><span m='2727120'>Rule one.</span>
  </p><p><span m='2744920'>Because they place additional syntactic burden on
  the</span> <span m='2747640'>understanding of the story by the reader.</span>
  </p><p><span m='2750520'>So if you're telling somebody about some difficult
  new</span> <span m='2753450'>technical idea, the last thing you want them to
  do is to</span> <span m='2756740'>burden their syntactic processor with
  figuring out</span> <span m='2758990'>pronoun antecedents.</span> </p><p><span
  m='2761040'>So don't use pronouns in you're writing, technical</span> <span
  m='2763240'>writing, at least, will be much clearer.</span> </p><p><span
  m='2765800'>By the way, why does this especially apply to Germans</span> <span
  m='2768490'>and Russians?</span> </p><p><span m='2770230'>Is it
  because--</span> <span m='2771980'>is this an ethnic origin slur or is this
  a</span> <span m='2774900'>fact about their language?</span> </p><p><span
  m='2776310'>It's a fact about their language.</span> </p><p><span
  m='2777370'>Where is the fact?</span> </p><p><span m='2780380'>Why can they
  get away with pronoun usages that we cannot</span> <span m='2783570'>get away
  with in English?</span> </p><p><span m='2785910'>Yes, Andrew?</span>
  </p><p><span m='2786470'>STUDENT: Gender and also--</span> <span
  m='2789802'>PATRICK WINSTON: Gender, because if you have all of</span> <span
  m='2795240'>your nouns decorated with gender, that reduces by three,</span>
  <span m='2802530'>the potential for ambiguity in the pronoun
  antecedent.</span> </p><p><span m='2805960'>So you'll frequently find that
  German and Russian writers</span> <span m='2808540'>will have pronouns all
  over the place that are perfectly</span> <span m='2810970'>clear to them
  because of gender.</span> </p><p><span m='2812930'>They are interpretable by
  English speakers when</span> <span m='2815170'>translated because we don't
  have the gender to</span> <span m='2816890'>help us zero in.</span>
  </p><p><span m='2819720'>So these things all have to do with minimizing
  extra,</span> <span m='2823890'>superfluous, gratuitous, unnecessary</span>
  <span m='2826170'>burden on the reader.</span> </p><p><span m='2827330'>Number
  two is don't use former or latter.</span> </p><p><span m='2836950'>You see
  those words used frequently in technical</span> <span m='2839660'>writing, and
  guess what?</span> </p><p><span m='2841310'>No human being ever encounters
  those words without having to</span> <span m='2844400'>stop and go back to
  figure out what they refer to it.</span> </p><p><span m='2848370'>So that's
  another example of not placing any unnecessary</span> <span
  m='2850970'>syntactic burden on the reader.</span> </p><p><span
  m='2853370'>And finally, don't call a shovel a spade.</span> </p><p><span
  m='2865000'>There's a habit, probably instilled by well-meaning but</span>
  <span m='2867680'>misadvised high school teachers, that you shouldn't</span>
  <span m='2869500'>repeat words, and so people go to great lengths to use
  some</span> <span m='2873530'>different word.</span> </p><p><span
  m='2874830'>The problem is that the reader doesn't know if the shift in</span>
  <span m='2877640'>the word is deliberate and attached to some subtle</span>
  <span m='2881640'>meaning shift, or if it's just adhering to some high
  school</span> <span m='2885320'>teacher's admonition against using the same
  word again.</span> </p><p><span m='2888720'>So you don't want to say, oh, the
  right way to dig this</span> <span m='2892540'>particular hole is with a spade
  and then switch to a</span> <span m='2895230'>shovel because the reader can't
  tell if it's deliberate,</span> <span m='2898350'>accidental, or a consequence
  of just the desire not to use</span> <span m='2901840'>the same word.</span>
  </p><p><span m='2903450'>So this is how you, with some very simple
  mechanisms</span> <span m='2908510'>grounded in AI, you can actually make
  yourself into a</span> <span m='2910660'>better writer by avoiding those kinds
  of things that put</span> <span m='2913280'>an unnecessary syntactic burden on
  the people who are</span> <span m='2915700'>reading your stuff.</span>
  </p><p></p>
uid: 6ec4e8a98402433915c74fc0cf8da9f3
type: course
layout: video
---
