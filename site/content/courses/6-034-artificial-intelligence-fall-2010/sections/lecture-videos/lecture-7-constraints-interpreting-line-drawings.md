---
about_this_resource_text: >-
  <p><strong>Description:</strong> How can we recognize the number of objects in
  a line drawing?  We consider how Guzman, Huffman, and Waltz approached this
  problem.  We then solve an example using a method based on constraint
  propagation, with a limited set of junction and line labels.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: l-tzjenXrvI
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: Video-YouTube-Stream
    type: Video
    uid: 4cd9a9c1c5324186544e82fb74e0ee2a
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-7-constraints-interpreting/id765641080?i=194470739
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: Video-iTunes U-MP4
    type: Video
    uid: fc1397f3f7e11abadafa63dddd7a235f
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec07_300k.mp4'
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: Video-Internet Archive-MP4
    type: Video
    uid: 48f929442870a952a38a35087aeffd69
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/l-tzjenXrvI/default.jpg'
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 81d98f041959b26b0de5651cc1441f1f
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: l-tzjenXrvI
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 781f70835b89eef5ae41b396cd0128d0
  - id: l-tzjenXrvI.srt
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-7-constraints-interpreting-line-drawings/l-tzjenXrvI.srt
    title: 3play caption file
    type: null
    uid: 6427260b5a0fd526add2d0cb22f8f9df
  - id: l-tzjenXrvI.pdf
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-7-constraints-interpreting-line-drawings/l-tzjenXrvI.pdf
    title: 3play pdf file
    type: null
    uid: 489a6a3a25a6c4341a11fc91929e83fe
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 7cd15cdc918821bb9c58b940b0ff7614
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 610d4a009bca99ce1e2875664719d4a3
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 54d93cb4740061df31d4ebc6ea5af55f
inline_embed_id: '69130231lecture7:constraints:interpretinglinedrawings1061405'
order_index: 79
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-7-constraints-interpreting-line-drawings
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-7-constraints-interpreting-line-drawings
title: 'Lecture 7: Constraints: Interpreting Line Drawings'
transcript: >-
  <p><span m='10110'>PATRICK WINSTON: Many of you, maybe most of you, will
  never</span> <span m='12660'>have to work another search problem by hand in
  your</span> <span m='14850'>natural life.</span> </p><p><span m='17510'>Others
  will want to take another run</span> <span m='19870'>at it on the
  final.</span> </p><p><span m='22100'>I've been much criticized for this way of
  doing</span> <span m='25030'>grading in the class.</span> </p><p><span
  m='26000'>But the way I look at it is that the relationship between</span>
  <span m='31490'>students and instructors ought to be less adversarial than
  it</span> <span m='34330'>used to be in the good old days when I was a
  student.</span> </p><p><span m='39910'>I especially remember an examination we
  took--</span> <span m='44100'>all of us took-- on Rayleigh scattering.</span>
  </p><p><span m='46450'>That was 803, I think.</span> </p><p><span
  m='48670'>And back in the old days, we had to take four physics</span> <span
  m='51720'>courses, not just two.</span> </p><p><span m='53640'>And we had to
  take four math courses, not just two.</span> </p><p><span m='57100'>Back in
  the days when--</span> <span m='59830'>well, I was going to say men were
  men.</span> </p><p><span m='61450'>But most of us were men in those
  days.</span> </p><p><span m='63130'>I think we only had 20 women in our
  class.</span> </p><p><span m='66110'>Anyway, we had a quiz on Rayleigh
  scattering.</span> </p><p><span m='69950'>And I thought, well, this is pretty
  hard.</span> </p><p><span m='71910'>And then I got my quiz back.</span>
  </p><p><span m='76789'>26.</span> </p><p><span m='79370'>I thought, well, I've
  been found out.</span> </p><p><span m='82730'>I'm going to flunk out.</span>
  </p><p><span m='85030'>My father will make me go to law school.</span>
  </p><p><span m='88350'>I'll never attract anyone to marry.</span> </p><p><span
  m='91810'>Horrible things will happen.</span> </p><p><span m='94479'>Then the
  instructor announced the class average was 18.</span> </p><p><span m='96884'>I
  was two standard deviations above that.</span> </p><p><span m='101960'>They
  gave us the same exam two weeks later,</span> <span m='104420'>and accounts
  vary.</span> </p><p><span m='106030'>Some people say that the class average
  went down.</span> </p><p><span m='109340'>Anyway, today we're going to study
  some stuff.</span> </p><p><span m='114759'>We're going to study some stuff
  that will make it</span> <span m='116780'>possible for you to understand how
  you can do that</span> <span m='120230'>computation in just a couple of
  seconds, even with the</span> <span m='122990'>delays introduced by the
  redrawing.</span> </p><p><span m='126610'>Now this particular program--</span>
  <span m='129660'>I'm not real sure and I don't have a proof, but I think
  it</span> <span m='131970'>will take more than the lifetime of the universe
  to</span> <span m='135530'>find a legitimate coloring of the continental
  United States.</span> </p><p><span m='139910'>But by the end of the next
  class, you'll see how to do</span> <span m='141860'>that lickety-split in just
  couple of seconds, even with</span> <span m='144820'>the re-display
  delays.</span> </p><p><span m='151750'>Now we could, of course, do this in two
  ways.</span> </p><p><span m='156590'>One way is I could start off by saying,
  let C be a</span> <span m='159950'>constraint satisfaction problem and
  just</span> <span m='162490'>give you the result.</span> </p><p><span
  m='165170'>And anybody can do that.</span> </p><p><span m='166950'>That's
  great.</span> </p><p><span m='168406'>And you needed to learn some stuff that
  way.</span> </p><p><span m='173030'>But there are some things that you needed
  to learn, I think,</span> <span m='175740'>a different way.</span>
  </p><p><span m='176630'>And that different way involves my telling you
  the</span> <span m='179100'>story of how it all came to be.</span>
  </p><p><span m='181750'>This is a new field, pretty much, and therefore I
  know</span> <span m='186440'>most of the people in it.</span> </p><p><span
  m='187730'>And I know all of the people who did the work that I'm</span> <span
  m='189730'>going to tell you about today.</span> </p><p><span m='190720'>I'm
  going to tell you a little bit about the struggle for</span> <span
  m='193220'>coming up with the ideas that led to one of the most</span> <span
  m='203160'>powerful methods you'll learn about in the subject.</span>
  </p><p><span m='206130'>It all has to do, originally, with an attempt to make
  a</span> <span m='209670'>computer capable of seeing.</span> </p><p><span
  m='211832'>And everybody said to themselves, well, let's start</span> <span
  m='213890'>with seeing simple things, like children's blocks.</span>
  </p><p><span m='217280'>And so Adolfo Guzman, a graduate student of
  Marvin</span> <span m='220040'>Minsky's, was charged with the summer project,
  which led to</span> <span m='223480'>his Ph.D. thesis, of writing a program
  that could look at a</span> <span m='227590'>line drawing and determine how
  many objects</span> <span m='230440'>are in the line drawing.</span>
  </p><p><span m='232730'>So for example, there behind my outline is a line
  drawing.</span> </p><p><span m='240870'>And you believe instantly that there
  are two objects there,</span> <span m='246400'>even though in some deep sense,
  it's ambiguous.</span> </p><p><span m='248690'>There are all sorts of ways
  that you could, through</span> <span m='252540'>trickery, arrange something
  with even seven objects that</span> <span m='256579'>look that way.</span>
  </p><p><span m='257709'>But most people would say there are two
  objects.</span> </p><p><span m='261269'>So Guzman set about the problem of
  figuring</span> <span m='263350'>out how to do that.</span> </p><p><span
  m='264650'>And then his work was followed by Dave Huffman.</span> </p><p><span
  m='266860'>And his work was followed up by Dave Waltz.</span> </p><p><span
  m='269440'>And his work was followed up by Jane [? Froyter ?], who's</span>
  <span m='271850'>not listed there quite yet.</span> </p><p><span
  m='273880'>And I want to tell you a little bit of story how that</span> <span
  m='275580'>all happened.</span> </p><p><span m='277510'>So Guzman took a lot
  of pictures.</span> </p><p><span m='280440'>He went to Boston Baby, the
  precursor to Toys R Us,</span> <span m='284870'>purchased a large block set on
  a government contract, and</span> <span m='291990'>went about the business of
  taking a lot of pictures of</span> <span m='294640'>them so he'd get a feel
  for the domain.</span> </p><p><span m='297390'>And eventually he decided that
  he could build a program that</span> <span m='300370'>could determine that
  there are two objects here by using the</span> <span m='303910'>lines as a
  quanta of evidence about which faces belong</span> <span m='310800'>together
  in an object.</span> </p><p><span m='313090'>So he said, after studying these
  for a long time, that</span> <span m='316870'>these drawings tend to have a
  lot of arrow-type junctions</span> <span m='320060'>and a lot of fork-type
  junctions.</span> </p><p><span m='322460'>And when you see an arrow, it's a
  little bit of evidence</span> <span m='324980'>that the objects on either side
  of the shaft are the</span> <span m='327490'>same-- the face on either side of
  the shaft belong to the</span> <span m='330010'>same object.</span>
  </p><p><span m='331880'>And over here, the fork-type junction suggests
  that</span> <span m='337590'>pairwise, three pairs of faces seem to</span>
  <span m='340590'>belong to the same object.</span> </p><p><span m='342909'>So
  with that idea, he could come back to a drawing like</span> <span
  m='346659'>this and start decorating it with these so-called links,</span>
  <span m='349570'>these quanta of evidence that faces</span> <span
  m='353090'>belong to the same object.</span> </p><p><span m='360408'>And if
  I've done it right, you get something</span> <span m='362200'>that looks like
  so.</span> </p><p><span m='364230'>It's a little hard to see what's going
  on</span> <span m='366650'>on the drawing itself.</span> </p><p><span
  m='367920'>So let me number these.</span> </p><p><span m='386550'>Now I have
  an easier-to-deal-with picture.</span> </p><p><span m='389180'>There are two
  links between 1 and 2 and 1 and 3.</span> </p><p><span m='395080'>One link
  between 2 and 3.</span> </p><p><span m='397890'>One between 2 and 4.</span>
  </p><p><span m='399820'>Two here.</span> </p><p><span m='401470'>Two
  here.</span> </p><p><span m='403120'>And one each from all of these.</span>
  </p><p><span m='406700'>So Guzman produces this evidence for how the
  problem</span> <span m='409760'>ought to be solved and then he begins to think
  about various</span> <span m='412960'>ways of using the evidence.</span>
  </p><p><span m='415050'>So he could, and did, decide that one link is enough
  to</span> <span m='421830'>presume that the faces belong to the same
  object.</span> </p><p><span m='424720'>And you can see that that's a little
  bit too liberal.</span> </p><p><span m='427730'>Because that says that the
  whole</span> <span m='428840'>thing is just one object.</span> </p><p><span
  m='431710'>So Guzman rejected the one-link theory and went to</span> <span
  m='437695'>the two-link theory.</span> </p><p><span m='442330'>And the
  two-link theory says, oh, well, let's see.</span> </p><p><span m='447110'>If
  we insist that two links should be there before we are</span> <span
  m='450390'>willing to decide that it's the same object, then these</span>
  <span m='455909'>three faces are pulled together into one object.</span>
  </p><p><span m='459090'>These three are pulled together into one
  object.</span> </p><p><span m='461790'>But alas, 7 doesn't share two links
  with anything, so it's</span> <span m='464409'>left dangling out there.</span>
  </p><p><span m='466830'>So plainly, the two-link theory is too
  conservative.</span> </p><p><span m='470990'>So that as you would soon
  discover in any [INAUDIBLE]</span> <span m='474110'>project, would lead you to
  a third theory, which is two</span> <span m='477030'>lengths repeated.</span>
  </p><p><span m='481960'>So now that we've formed these super regions, we can
  come</span> <span m='487430'>back and say we'll merge super regions if they're
  connected</span> <span m='491270'>together by two or more links.</span>
  </p><p><span m='494130'>So nothing new happens up here.</span> </p><p><span
  m='496240'>But this super region is joined at 7</span> <span m='499440'>by two
  or more links.</span> </p><p><span m='501440'>So it pulls everything together
  like so.</span> </p><p><span m='505270'>So that worked fine.</span>
  </p><p><span m='506480'>Well, it didn't work fine.</span> </p><p><span
  m='507480'>There were lots of examples of situations</span> <span
  m='509620'>where it didn't work--</span> <span m='512850'>in situations that
  were considered nonsensical by us</span> <span m='516230'>humans because it
  seemed silly, the kind of conclusions</span> <span m='521620'>that it
  reached.</span> </p><p><span m='524770'>So when Guzman presented this work in
  his Ph.D. thesis</span> <span m='528870'>defense, it's said--</span> <span
  m='532830'>and who knows if it's true-- but it's said that Marvin</span> <span
  m='534770'>Minsky thought it was great work and we</span> <span
  m='536630'>should make him a professor.</span> </p><p><span m='539250'>It
  happens that Dave Huffman was also on the committee and</span> <span
  m='543070'>said that it was ad hoc and the thesis should be rejected.</span>
  </p><p><span m='547440'>So we had two polar opposites of impressions
  there.</span> </p><p><span m='550580'>Dave Huffman, by the way--</span> <span
  m='551920'>you've heard that name before, I imagine.</span> </p><p><span
  m='555160'>It's the guy who invented Huffman coating as a term</span> <span
  m='558830'>paper in a information theory course taught by Bob Fano.</span>
  </p><p><span m='562720'>He got an A, they say.</span> </p><p><span
  m='566720'>So Huffman didn't like it.</span> </p><p><span m='567840'>He
  thought it was a little bit too ad hoc.</span> </p><p><span m='569860'>It was
  too heuristic.</span> </p><p><span m='571430'>It didn't take advantage of
  anything we</span> <span m='573365'>might know about physics.</span>
  </p><p><span m='575120'>And so people began to say, well, why does it
  work?</span> </p><p><span m='577500'>And when does it not work?</span>
  </p><p><span m='579570'>And that's just about the best question you can answer
  in a</span> <span m='582130'>situation like this.</span> </p><p><span
  m='583832'>And by playing with some more of Guzman's pictures and</span> <span
  m='588300'>reflecting on them, it turned out that it worked because the</span>
  <span m='590870'>world is full of three-face junctions.</span> </p><p><span
  m='598350'>Or let me say three-face vertexes because they're out</span> <span
  m='601180'>there in the world.</span> </p><p><span m='602940'>We'll reserve
  the word junction for something else.</span> </p><p><span m='606950'>And
  three-face vertexes generally project into either</span> <span m='612540'>an
  arrow or a fork.</span> </p><p><span m='616430'>So Guzman's whole program
  worked on the weak backward</span> <span m='621410'>conclusion that if you see
  one of those, it probably came</span> <span m='624700'>from one of
  these.</span> </p><p><span m='625890'>So this is in the drawing.</span>
  </p><p><span m='627320'>That's in the world.</span> </p><p><span m='629160'>So
  by a process that's neither deduction or induction, but</span> <span
  m='632130'>rather abduction, you see one of those guys.</span> </p><p><span
  m='635410'>And you say, well, they often come from three-face vertexes</span>
  <span m='638840'>in the world, so if you see one, it probably came from
  a</span> <span m='641610'>three-face vertex in the world.</span> </p><p><span
  m='642670'>That's abduction.</span> </p><p><span m='645520'>So once Huffman
  saw all that, being a mathematician, he</span> <span m='651670'>began to think
  about how one might develop a different and</span> <span m='655135'>better
  theory.</span> </p><p><span m='656430'>But we have to recognize that all this
  work started off with</span> <span m='662510'>the efforts of Guzman, who was
  an experimentalist.</span> </p><p><span m='673610'>And Huffman was a
  mathematician.</span> </p><p><span m='680460'>So naturally, they approached
  the problem differently.</span> </p><p><span m='685520'>So Huffman says, I'm
  not going to concern myself too much</span> <span m='689140'>with the actual
  problem that Guzman was trying to solve.</span> </p><p><span
  m='692600'>Rather, I'm going to work in a very simple world, which I
  can</span> <span m='695750'>deal with mathematically.</span> </p><p><span
  m='698390'>So he decided that he was going to work in a world which</span>
  <span m='701560'>had several characteristics.</span> </p><p><span
  m='704490'>Characteristic number one was that the world would be</span> <span
  m='707760'>presented in general position.</span> </p><p><span m='718969'>That
  is to say, no screw cases.</span> </p><p><span m='722190'>So if you see a
  cube, it's going to look like this.</span> </p><p><span m='729660'>And it's
  not going to look like this.</span> </p><p><span m='734540'>So that's
  out.</span> </p><p><span m='735970'>And this is in.</span> </p><p><span
  m='737360'>And the idea here is that that's not general position,</span> <span
  m='739550'>because if you perturb your point of view a little bit,</span>
  <span m='741930'>you'll change those T junctions</span> <span m='743340'>into
  forks and arrows.</span> </p><p><span m='745810'>So we know it had to deal
  with those kinds of</span> <span m='747430'>weird kinds of cases.</span>
  </p><p><span m='751210'>So that's presumption number one.</span> </p><p><span
  m='754820'>Presumption number two is that we're going to be dealing
  with</span> <span m='758760'>a world that's trihedral.</span> </p><p><span
  m='765650'>That means all vertexes out there are going to be formed</span>
  <span m='769080'>from three planes.</span> </p><p><span m='772770'>So you're
  going to have the intersection of three planes.</span> </p><p><span
  m='775720'>So how many kinds of junctions can you see if the world is</span>
  <span m='778840'>composed that way is the question that Huffman sent</span>
  <span m='784040'>himself upon.</span> </p><p><span m='786225'>The next
  assumption was that there are going to be four</span> <span m='790990'>kinds
  of lines.</span> </p><p><span m='791840'>See, Guzman only recognized two kinds
  of lines-- lines</span> <span m='794820'>that have a length and lines that
  don't have a link.</span> </p><p><span m='797350'>And they don't have very
  much to do with the physical world.</span> </p><p><span m='800160'>So Huffman
  says, I want to get the constraint out of the</span> <span m='802060'>physical
  world.</span> </p><p><span m='803610'>So I'm going to deal with four kinds of
  lines--</span> <span m='806590'>concave, convex, and boundary.</span>
  </p><p><span m='822820'>So each of those kinds of lines is going to</span>
  <span m='826030'>have its own notation.</span> </p><p><span m='827240'>We'll
  call the convex lines plus, the concave lines minus,</span> <span
  m='832080'>and a boundary lines are going to get an arrow on them,</span>
  <span m='834600'>depending on which side of the object--</span> <span
  m='840330'>which side you would see the object if you walk along the</span>
  <span m='842510'>direction of this little arrow.</span> </p><p><span
  m='845364'>STUDENT: Question.</span> </p><p><span m='851220'>Which is concave
  and which is convex?</span> </p><p><span m='852684'>You said something and you
  wrote the opposite.</span> </p><p><span m='854636'>PATRICK WINSTON: Yeah,
  sorry.</span> </p><p><span m='855612'>Thank you.</span> </p><p><span
  m='858060'>So concave, convex, and boundary.</span> </p><p><span
  m='859480'>Thank you.</span> </p><p><span m='860270'>So this down here, that's
  a concave line.</span> </p><p><span m='863345'>And that would get a minus
  label.</span> </p><p><span m='866550'>Oh, I don't know.</span> </p><p><span
  m='868190'>These lines you're seeing here, if there were stuff</span> <span
  m='871290'>behind them instead of me, then all those</span> <span
  m='873440'>would be convex lines.</span> </p><p><span m='876960'>Many times
  you see a boundary line.</span> </p><p><span m='878220'>For example, now you
  don't see both sides of that line down</span> <span m='881720'>here at the
  bottom.</span> </p><p><span m='882370'>So that's a boundary line.</span>
  </p><p><span m='883750'>And the arrow would point in that direction, so as to
  keep</span> <span m='886250'>the stuff of the object on the right as you walk
  along a kind</span> <span m='889330'>of mathematical convention.</span>
  </p><p><span m='892160'>So three kinds of lines, four kinds of labels.</span>
  </p><p><span m='894710'>And there's some things left out.</span> </p><p><span
  m='896620'>That's because Huffman wanted to keep his problem simple,</span>
  <span m='899860'>something he could manage by hand.</span> </p><p><span
  m='901690'>What's left out?</span> </p><p><span m='902780'>Cracks are left
  out.</span> </p><p><span m='904060'>Shadows are left out.</span> </p><p><span
  m='907160'>There's a presumption that there's nothing of interest</span> <span
  m='910750'>here with respect to that.</span> </p><p><span m='914940'>So let's
  have a little vocabulary before I go on.</span> </p><p><span m='920260'>And
  I'll try to stick to it.</span> </p><p><span m='921560'>But there's the stuff
  out there, and that consists of</span> <span m='924100'>vertexes and
  edges.</span> </p><p><span m='932570'>And over here, on the blackboard, we'll
  have</span> <span m='935700'>junctions and lines.</span> </p><p><span
  m='942950'>And I'll try to stick to that vocabulary.</span> </p><p><span
  m='944490'>All right?</span> </p><p><span m='944870'>Yes, Christopher?</span>
  </p><p><span m='945660'>STUDENT: Didn't you say there were four types of
  lines?</span> </p><p><span m='947590'>PATRICK WINSTON: Yeah, there are four
  kinds of--</span> <span m='949630'>the question is, didn't I say there
  were</span> <span m='950940'>four kinds of lines?</span> </p><p><span
  m='951840'>There are three kinds of lines, but since we can label</span> <span
  m='953860'>a boundary line in either direction,</span> <span m='955100'>we
  have four labels.</span> </p><p><span m='955980'>OK?</span> </p><p><span
  m='958010'>It depends on which side of the object the stuff is on.</span>
  </p><p><span m='961210'>And that will be clear, I think, as</span> <span
  m='962765'>soon as I do an example.</span> </p><p><span m='965670'>So one,
  two, three assumptions.</span> </p><p><span m='968650'>A little bit of
  vocabulary.</span> </p><p><span m='971170'>So we have the possibility of
  making a complete catalog.</span> </p><p><span m='976280'>This is so
  simple.</span> </p><p><span m='977220'>We have the possibility of making a
  complete catalog of</span> <span m='980200'>all the ways that lines can come
  together to form a</span> <span m='982510'>junction with respect to these four
  labels.</span> </p><p><span m='986576'>Now at first you might say, oh my god,
  that will take a</span> <span m='991730'>couple of years.</span> </p><p><span
  m='994230'>But maybe it won't take a couple of years.</span> </p><p><span
  m='996380'>And in the end, to perhaps your surprise, you discover</span> <span
  m='1003320'>that there are only 18 ways to arrange the labels around a</span>
  <span m='1007660'>junction in this world.</span> </p><p><span
  m='1009760'>Everything else is excluded.</span> </p><p><span m='1012220'>If
  you have something that's not in the set we're going to</span> <span
  m='1014040'>produce now, it can't be built with trihedral vertexes.</span>
  </p><p><span m='1021600'>So I've listed up there six L's, five forks, four
  T's, and</span> <span m='1030400'>three arrows.</span> </p><p><span
  m='1032650'>Let's see if I can figure out why there are those 18 and</span>
  <span m='1036319'>nothing else.</span> </p><p><span m='1039910'>Well, if we
  have three vertexes coming together, that</span> <span m='1045300'>means there
  are eight octants, right?</span> </p><p><span m='1048010'>And the stuff of the
  object may fill 1, 2, 3, 4, 5, 6, 7</span> <span m='1052840'>or all eight
  octants.</span> </p><p><span m='1055030'>Now of course, if you fill all
  eight</span> <span m='1056450'>octants, there's no junction.</span>
  </p><p><span m='1057330'>So we don't consider that case.</span> </p><p><span
  m='1060250'>If we don't fill any the octants, there's no junction.</span>
  </p><p><span m='1063080'>There's no vertex.</span> </p><p><span m='1063890'>So
  we don't consider that case.</span> </p><p><span m='1066540'>But if just one
  of the eight octants is filled with stuff,</span> <span m='1071080'>then we
  can look at it from any of the</span> <span m='1073130'>seven remaining
  octants.</span> </p><p><span m='1075760'>So right now, you're looking at it
  from one of the seven</span> <span m='1079360'>remaining octants.</span>
  </p><p><span m='1080880'>And if I'm not mistaken, you're going to see a</span>
  <span m='1082750'>fork-style junction there, right?</span> </p><p><span
  m='1085800'>And you're going to see a fork-style junction in which</span>
  <span m='1087600'>all of the edges are convex.</span> </p><p><span
  m='1094350'>An unfortunate selection of names, because the linguists</span>
  <span m='1096850'>tell me that we index all of our words</span> <span
  m='1098600'>by the first forename.</span> </p><p><span m='1099500'>And those
  have the same first forename, so</span> <span m='1101210'>they're easily
  confused.</span> </p><p><span m='1103840'>So here's a fork-style
  junction.</span> </p><p><span m='1105830'>And we know that one way that's
  legitimate for the</span> <span m='1109160'>lines to come in is with four
  pluses.</span> </p><p><span m='1113050'>Now that's not the only way you can
  see that.</span> </p><p><span m='1115120'>And here's another way.</span>
  </p><p><span m='1117170'>There's an L-style junction, right?</span>
  </p><p><span m='1119200'>And both of those are boundary lines.</span>
  </p><p><span m='1121650'>And we want to draw the boundary line indicators
  on</span> <span m='1125810'>there so that if we walk along the arrows, the
  stuff of the</span> <span m='1129550'>object would be on the right.</span>
  </p><p><span m='1132180'>So I suppose, to make it easier to me do my drawing,
  I</span> <span m='1134730'>should look at it this way.</span> </p><p><span
  m='1136520'>And then I would say, well, that has to be a legitimate</span>
  <span m='1140650'>way of labeling a junction.</span> </p><p><span
  m='1143350'>Are there any more?</span> </p><p><span m='1145160'>Well, there's
  seven altogether, but many of them</span> <span m='1148230'>are the
  same.</span> </p><p><span m='1149760'>There is one more that's a little
  different, though.</span> </p><p><span m='1152010'>I can hold this guy up like
  so.</span> </p><p><span m='1154470'>And if I'm holding at the right angle for
  you, you see</span> <span m='1157070'>an arrow-style junction, right?</span>
  </p><p><span m='1159020'>Two boundaries, and the barb is convex.</span>
  </p><p><span m='1164430'>So in this particular case, I've got that.</span>
  </p><p><span m='1167143'>I've got that.</span> </p><p><span m='1168365'>And
  I've got a plus there.</span> </p><p><span m='1171840'>And that's there happen
  to be for the one octant filled with</span> <span m='1174350'>stuff
  case.</span> </p><p><span m='1176100'>I happen to be able to reverse this,
  though.</span> </p><p><span m='1177890'>And here's the seven octants filled
  case.</span> </p><p><span m='1181200'>So that tells us that it's possible to
  have a vertex out</span> <span m='1184940'>there in a space that when reduced
  to a junction on the</span> <span m='1188340'>board deserves three minus
  labels, because all of these</span> <span m='1191760'>that you're seeing now
  are concave.</span> </p><p><span m='1194680'>So another fork-style junction
  looks like so.</span> </p><p><span m='1200920'>And since there's only one
  octant to look at from, that</span> <span m='1206210'>completes our analysis
  of the seven octants filled case.</span> </p><p><span m='1211280'>Now we have
  a couple of other possibilities here.</span> </p><p><span m='1214360'>We might
  have five octants filled with stuff.</span> </p><p><span m='1222770'>So that
  means there are three octants that we can look from.</span> </p><p><span
  m='1227420'>So let's suppose that these little chalk</span> <span
  m='1229030'>pieces are little people.</span> </p><p><span m='1232860'>And
  they're looking at this junction down there, where</span> <span
  m='1238580'>this white object is fused with the table.</span> </p><p><span
  m='1241930'>I'm fusing it with the table because I want to consider it</span>
  <span m='1243760'>to be one object.</span> </p><p><span m='1245100'>We can
  view it from the three objects indicated by those</span> <span
  m='1247280'>three little chalk pieces.</span> </p><p><span m='1249190'>And ask
  ourselves, well, in the event that we look at it</span> <span m='1252580'>from
  those three places, what do we see?</span> </p><p><span m='1255110'>And if we
  look at it from the perspective of the piece of</span> <span
  m='1259000'>purple chalk--</span> <span m='1259780'>I'll have to walk around
  and be sure--</span> <span m='1261610'>looks like an arrow junction with
  two</span> <span m='1263960'>concaves and a convex.</span> </p><p><span
  m='1269020'>Did I get that right?</span> </p><p><span m='1272460'>So I'm
  looking at it from this perspective.</span> </p><p><span m='1274080'>It's an
  arrow.</span> </p><p><span m='1275210'>This is convex and these two are
  concave because I fused</span> <span m='1278460'>the paper box with the
  table.</span> </p><p><span m='1282350'>Looking at it from the perspective of
  this blue guy--</span> <span m='1284840'>let me rotate it so you can have a
  better understanding of</span> <span m='1287580'>the blue guy--</span> <span
  m='1288610'>it looks like a concave line and a boundary.</span> </p><p><span
  m='1292250'>So it's an L. And this one is a boundary.</span> </p><p><span
  m='1296750'>And that's concave.</span> </p><p><span m='1298400'>And by a kind
  of symmetry, we're also going to get that</span> <span m='1301710'>one from
  the other side, the third of the three octants.</span> </p><p><span
  m='1306250'>Well, we're off and running.</span> </p><p><span m='1307300'>But
  we still have an awful lot to go.</span> </p><p><span m='1310660'>And we could
  manage to deal with it by thinking about this</span> <span m='1316760'>object
  once again.</span> </p><p><span m='1319640'>But instead of this situation out
  here, to turn it around</span> <span m='1326290'>and look at this
  vertex.</span> </p><p><span m='1329310'>Think about the junctions that it can
  produce.</span> </p><p><span m='1331580'>I think I'll do that for you.</span>
  </p><p><span m='1332860'>Because you really have to play with this and move
  it</span> <span m='1334610'>around a little bit to see how things are going to
  look.</span> </p><p><span m='1339000'>So let me think about how that's going
  to work out.</span> </p><p><span m='1343480'>I know that one of the
  possibilities is going</span> <span m='1347150'>to look like so.</span>
  </p><p><span m='1349480'>I might as well not hide that from you.</span>
  </p><p><span m='1351830'>It's going to be what happens when there's a little
  man</span> <span m='1354080'>looking up at the junction.</span> </p><p><span
  m='1356770'>And this one's going to be minus.</span> </p><p><span
  m='1359720'>And now we've got two more that are just like that.</span>
  </p><p><span m='1363954'>Look like so.</span> </p><p><span m='1370980'>And you
  say, oops.</span> </p><p><span m='1381820'>You say, aren't those just a
  rotational</span> <span m='1384230'>variance of each other?</span>
  </p><p><span m='1385780'>And the answer is sure.</span> </p><p><span
  m='1387530'>I write them all down, because if you get a fork-style</span>
  <span m='1391280'>junction in space, there are three different ways it
  could</span> <span m='1393870'>be labeled.</span> </p><p><span
  m='1394300'>Depending on which of the lines you put</span> <span
  m='1398640'>the minus label on.</span> </p><p><span m='1405680'>So that takes
  care of that.</span> </p><p><span m='1406920'>And then there's one more of
  these fork-style junctions.</span> </p><p><span m='1410310'>And that's plus,
  plus, minus that derives from this case.</span> </p><p><span m='1416200'>And
  there appear to be three more of</span> <span m='1419150'>these L-style
  junctions.</span> </p><p><span m='1421120'>And they look like, let's see,
  plus, then plus.</span> </p><p><span m='1430280'>I'm having to think this
  through as I go.</span> </p><p><span m='1433860'>And then--</span> <span
  m='1437910'>and that's it.</span> </p><p><span m='1440490'>Well, what about
  the T's?</span> </p><p><span m='1441980'>Well, in this world, the only way you
  can get a T is if some</span> <span m='1445420'>object is obscuring another
  object.</span> </p><p><span m='1447605'>And if an object is obscuring a line,
  it can</span> <span m='1450050'>be any line at all.</span> </p><p><span
  m='1452130'>So that's why the four remaining ones are easy beyond</span> <span
  m='1455980'>description to label.</span> </p><p><span m='1459470'>And of
  course, the cross pieces of the T are all</span> <span m='1462820'>boundary
  lines, with the obscuring object on the right.</span> </p><p><span
  m='1469720'>Now let's see.</span> </p><p><span m='1470520'>We've taken care
  now of the one, three, five, and seven</span> <span m='1477110'>octants filled
  cases.</span> </p><p><span m='1478480'>What about two, four, and six?</span>
  </p><p><span m='1482060'>Well, it turns out you can have vertexes that are
  made</span> <span m='1486480'>that way too.</span> </p><p><span
  m='1487930'>But they will have more than three faces.</span> </p><p><span
  m='1490180'>They'll have six faces.</span> </p><p><span m='1491730'>They'll be
  like what happens when an object comes together</span> <span m='1497255'>at a
  point, like so.</span> </p><p><span m='1501308'>Like that.</span> </p><p><span
  m='1502760'>You can play with it a little bit and see that if you have</span>
  <span m='1504500'>two, four, or six objects filled with stuff, there
  are</span> <span m='1507090'>more than three faces.</span> </p><p><span
  m='1508010'>So we're going to ignore those.</span> </p><p><span m='1509690'>So
  our constraint is going to be a little more severe than</span> <span
  m='1516040'>would be suggested by the terminology Huffman uses.</span>
  </p><p><span m='1518640'>They're going to be trihedral all right, but they're
  also</span> <span m='1520850'>going to be three faces.</span> </p><p><span
  m='1525620'>So we went to a lot of work there.</span> </p><p><span
  m='1526830'>But what have we discovered?</span> </p><p><span m='1527670'>We've
  discovered that in this world, this is a complete,</span> <span
  m='1531120'>100% percent, nothing excluded, nothing else can be</span> <span
  m='1533970'>there, catalog of all possible ways the junctions can have</span>
  <span m='1538680'>line labels arranged around them.</span> </p><p><span
  m='1541770'>There's nothing else in this world.</span> </p><p><span
  m='1544010'>So that's a very powerful constraint.</span> </p><p><span
  m='1546970'>So now let's see what we can do with it.</span> </p><p><span
  m='1553770'>This example is usually more fun when the Red Sox are doing</span>
  <span m='1556340'>better, but they're not.</span> </p><p><span m='1558340'>Yet
  we'll use it any way.</span> </p><p><span m='1559870'>We're going to start
  with an object that</span> <span m='1561870'>looks like home plate.</span>
  </p><p><span m='1570990'>And I'll ask you the question.</span> </p><p><span
  m='1572900'>Can you build one of those?</span> </p><p><span m='1576210'>I
  don't know.</span> </p><p><span m='1577940'>Let's give it a shot.</span>
  </p><p><span m='1580640'>We're going to assume that this object is
  hanging,</span> <span m='1582790'>floating in space.</span> </p><p><span
  m='1584250'>So therefore, all of these lines around the boundary are</span>
  <span m='1588130'>boundary lines, like so.</span> </p><p><span m='1591490'>Now
  that gets us off to a good-- it's just hanging in</span> <span
  m='1594140'>space, Christopher, all right?</span> </p><p><span m='1595040'>You
  look confused.</span> </p><p><span m='1595570'>It's just hanging in space so
  that all the lines around the</span> <span m='1598230'>edges are places where
  you see only one side has stuff on it.</span> </p><p><span m='1605770'>So that
  enables us to just quickly run around the</span> <span m='1609650'>periphery
  and put arrow labels on all those outside lines.</span> </p><p><span
  m='1614210'>Now we have a lot of arrow-style</span> <span
  m='1615690'>junctions on the boundary.</span> </p><p><span m='1617020'>That's
  commonly the case.</span> </p><p><span m='1619340'>So we can run over to our
  catalog of all possible</span> <span m='1622900'>labels, and we see that if we
  have an arrow with boundaries</span> <span m='1627410'>on its barbs, there's
  only one of those.</span> </p><p><span m='1630490'>So I know instantly that
  there must be a plus on the shaft.</span> </p><p><span m='1634790'>So we can
  come back here and take all these arrows here.</span> </p><p><span
  m='1638070'>And label them with plus lines on their shafts.</span>
  </p><p><span m='1642310'>Now a line can't change its nature along its
  length.</span> </p><p><span m='1645810'>So if it's a plus line on one end,
  it's going to be a plus</span> <span m='1648390'>line on the other end.</span>
  </p><p><span m='1649705'>All right?</span> </p><p><span m='1652970'>So what
  else can we do?</span> </p><p><span m='1654220'>Here deep inside is a
  fork-style junction.</span> </p><p><span m='1657840'>It's got convex markers
  on both of those two lines.</span> </p><p><span m='1663840'>So we go over to
  our catalog and say, what can we say about</span> <span m='1667130'>it, given
  that there are pluses on two of its lines?</span> </p><p><span
  m='1670660'>Whoop, that means that the third one has to</span> <span
  m='1672230'>be a plus as well.</span> </p><p><span m='1677820'>And now we're
  done.</span> </p><p><span m='1678390'>We've labeled everything.</span>
  </p><p><span m='1679370'>Except--</span> <span m='1680830'>look at
  this.</span> </p><p><span m='1682540'>What about that guy?</span> </p><p><span
  m='1685930'>There's an L-style junction with pluses on</span> <span
  m='1688140'>both of its two lines.</span> </p><p><span m='1690240'>Is there
  one of those in my catalog?</span> </p><p><span m='1693020'>No.</span>
  </p><p><span m='1694280'>Therefore, I haven't passed a necessary condition
  for</span> <span m='1698180'>constructability in the world that I've
  made.</span> </p><p><span m='1701020'>You can't make it.</span> </p><p><span
  m='1702080'>You can't construct it.</span> </p><p><span m='1705950'>So
  Huffman's ideas give us a way of testing something to</span> <span
  m='1710470'>see if it's not possible for it to be in this world.</span>
  </p><p><span m='1721360'>If it passes the test, does that mean it's
  possible?</span> </p><p><span m='1725200'>No.</span> </p><p><span
  m='1725740'>It's a necessary but not sufficient condition.</span> </p><p><span
  m='1728740'>On this one--</span> <span m='1731730'>blue-collar
  occupation--</span> <span m='1733580'>on this one, maybe it will help if
  we</span> <span m='1735910'>put in another line.</span> </p><p><span
  m='1738060'>For example, we could put a line like so.</span> </p><p><span
  m='1741100'>You feel better about it now?</span> </p><p><span m='1743760'>I
  don't know.</span> </p><p><span m='1744530'>Let's see.</span> </p><p><span
  m='1746290'>This has to be a plus for the same argument we used on</span>
  <span m='1749390'>several other arrows before.</span> </p><p><span
  m='1751200'>That gives us an arrow-style junction here with a plus on</span>
  <span m='1755120'>everything.</span> </p><p><span m='1757140'>Is there such a
  junction label?</span> </p><p><span m='1760298'>No.</span> </p><p><span
  m='1761510'>We lose.</span> </p><p><span m='1762445'>It doesn't help.</span>
  </p><p><span m='1763670'>You think you can make it, but you can't.</span>
  </p><p><span m='1767632'>STUDENT: You could actually construct it as</span>
  <span m='1769272'>a 3-D object, though.</span> </p><p><span
  m='1774260'>PATRICK WINSTON: He thinks you can</span> <span
  m='1774900'>construct it as a 3-D object.</span> </p><p><span m='1777570'>Let
  me show you the next example, Christopher.</span> </p><p><span
  m='1780790'>Consider this example.</span> </p><p><span m='1792956'>Can you
  make that?</span> </p><p><span m='1796570'>Your intuition is yes.</span>
  </p><p><span m='1798300'>So let's label it.</span> </p><p><span
  m='1811126'>Oh, I've already lost.</span> </p><p><span m='1816500'>We just
  boost that up a little bit to make the</span> <span m='1818890'>situation more
  clear.</span> </p><p><span m='1825780'>So already, I've got myself in a
  situation where I can't</span> <span m='1828670'>label that.</span>
  </p><p><span m='1831230'>But you feel like you can make it.</span>
  </p><p><span m='1833090'>So what's wrong?</span> </p><p><span
  m='1836290'>What's wrong is--</span> <span m='1837560'>what, Elliott?</span>
  </p><p><span m='1838220'>STUDENT: You have an obscured--</span> <span
  m='1839350'>or, we're presuming that we have an obscured [INAUDIBLE]</span>
  <span m='1844126'>alley from the upper-left corner to the [INAUDIBLE].</span>
  </p><p><span m='1851400'>PATRICK WINSTON: Putting a little interpretation on
  what</span> <span m='1853490'>Elliott has said.</span> </p><p><span
  m='1855660'>If you look at this situation back here, you get a</span> <span
  m='1859410'>four-faced junction there.</span> </p><p><span m='1862600'>So you
  can make it.</span> </p><p><span m='1863700'>But not with three faces.</span>
  </p><p><span m='1866000'>So some of these look like you could make it.</span>
  </p><p><span m='1870030'>But they can't be labeled because you need more
  than</span> <span m='1872900'>four faces at a junction.</span> </p><p><span
  m='1876300'>And we can carry that idea back here.</span> </p><p><span
  m='1878650'>You can make this OK.</span> </p><p><span m='1879780'>But this
  junction, you've got two in the back and two here.</span> </p><p><span
  m='1882810'>So it has four faces.</span> </p><p><span m='1884970'>Same
  idea.</span> </p><p><span m='1887720'>So that's Guzman's contribution.</span>
  </p><p><span m='1897970'>That's Huffman's contribution.</span> </p><p><span
  m='1900080'>Huffman was a mathematician.</span> </p><p><span m='1901900'>But
  we wanted to build robots back in those days.</span> </p><p><span
  m='1903900'>And neither one of these guys solved the problem of dealing</span>
  <span m='1906790'>with natural objects with shadows, with cracks, with</span>
  <span m='1911530'>more than trihedral vertexes in space, and</span> <span
  m='1915710'>what to do about that?</span> </p><p><span m='1917585'>Well, that
  was a problem that another graduate student,</span> <span m='1922110'>David
  Waltz, set about to solve.</span> </p><p><span m='1926820'>So Waltz decided
  that he would not be content unless he added</span> <span m='1935310'>cracks,
  shadows, non-trihedral vertexes.</span> </p><p><span m='1949123'>Uh--</span>
  <span m='1950560'>yeah, non-trihedral vertexes.</span> </p><p><span
  m='1958330'>And light.</span> </p><p><span m='1962210'>These considerations
  led Waltz to go from</span> <span m='1968630'>four labels to 50-plus.</span>
  </p><p><span m='1973450'>Because he had to pack a lot of information into each
  of</span> <span m='1975810'>the labels he put on a line.</span> </p><p><span
  m='1977760'>What kind of light was on the right?</span> </p><p><span
  m='1979110'>What kind of light was on the left?</span> </p><p><span
  m='1980310'>Maybe it's a crack.</span> </p><p><span m='1981140'>Maybe it's a
  crack that--</span> <span m='1982630'>all sorts of considerations.</span>
  </p><p><span m='1985850'>Here we had 18 ways that lines can come</span> <span
  m='1988360'>together around junctions.</span> </p><p><span m='1992060'>That
  went to thousands of junctions in Waltz's world.</span> </p><p><span
  m='1998130'>So here's Guzman.</span> </p><p><span m='2002630'>He writes a
  program that sort of works.</span> </p><p><span m='2007500'>Down below, we
  have Huffman.</span> </p><p><span m='2021990'>Huffman, who has a theory but
  solves the wrong problem.</span> </p><p><span m='2028090'>So here comes Waltz,
  and he's trying to solve the right</span> <span m='2030500'>problem with a
  satisfying theory that has a</span> <span m='2035810'>generalizable
  principle.</span> </p><p><span m='2037720'>So when we get all through this,
  we'll talk about</span> <span m='2040710'>criteria for success.</span>
  </p><p><span m='2041960'>And we'll conclude that to have a really
  successful</span> <span m='2044060'>thing, you need a problem, to start
  with.</span> </p><p><span m='2047670'>You need a method that works.</span>
  </p><p><span m='2048790'>And you have to show that it works</span> <span
  m='2049850'>because of some principal.</span> </p><p><span m='2052040'>So
  Guzman had the problem and something that worked.</span> </p><p><span
  m='2057040'>Huffman had a method which worked on the wrong problem.</span>
  </p><p><span m='2060219'>And it's left to Waltz to bring it all
  together.</span> </p><p><span m='2062790'>So Waltz does all this work.</span>
  </p><p><span m='2064770'>And now he has, instead at 18 labels, he has
  thousands.</span> </p><p><span m='2068530'>Instead of four-line labels, he has
  more than 50.</span> </p><p><span m='2072469'>So naturally, it becomes
  difficult to</span> <span m='2074280'>work these by hand.</span> </p><p><span
  m='2076659'>We were able to work those Huffman examples by hand.</span>
  </p><p><span m='2082639'>We started with labeling everything on the boundary
  and</span> <span m='2085018'>worked our way in.</span> </p><p><span
  m='2085580'>There's no particular method there.</span> </p><p><span
  m='2086960'>It was just easy to work out the puzzle.</span> </p><p><span
  m='2090650'>But poor Waltz, he didn't have that luxury.</span> </p><p><span
  m='2095500'>So he might have, in a typical scene, he might have tens or</span>
  <span m='2098910'>even hundreds of junctions to label and no easy way
  of</span> <span m='2104130'>dealing with it.</span> </p><p><span
  m='2104930'>So naturally writes himself a depth-first search program.</span>
  </p><p><span m='2111060'>So here is vertex, or rather junction number
  1.</span> </p><p><span m='2119420'>There are many choices for which label can
  be used on it.</span> </p><p><span m='2125080'>And for each of those choices,
  whatever he's decided junction</span> <span m='2129070'>number 2 is has its
  own suite of possibilities.</span> </p><p><span m='2134090'>And so it becomes
  a simple depth-first</span> <span m='2135670'>search problem, right?</span>
  </p><p><span m='2139040'>So in actuality, as soon as Waltz--</span> <span
  m='2142580'>he was my office mate at the time.</span> </p><p><span
  m='2143940'>I can tell you this for a fact.</span> </p><p><span m='2145960'>As
  soon as he wrote this program, he kept looking over</span> <span
  m='2148080'>at the computer--</span> <span m='2148900'>they were big in those
  days.</span> </p><p><span m='2150290'>They all had lights.</span> </p><p><span
  m='2151540'>So you looked over at the computer to see if the lights</span>
  <span m='2153270'>were still blinking.</span> </p><p><span m='2154860'>Because
  he'd start this depth-first search program up</span> <span m='2158290'>and
  nothing would happen.</span> </p><p><span m='2160080'>He thought the computer
  had crashed.</span> </p><p><span m='2162820'>Nothing happened.</span>
  </p><p><span m='2164520'>Why did nothing happen?</span> </p><p><span
  m='2167550'>Because the search base is exponential and much too big</span>
  <span m='2171350'>for an ordinary computer, or maybe</span> <span
  m='2173570'>even an ordinary universe.</span> </p><p><span m='2175970'>So
  Waltz has to do something else.</span> </p><p><span m='2180490'>He has to come
  up with a new method for using all these</span> <span m='2184130'>labels that
  he's--</span> <span m='2187080'>after about a year and a half's worth of hard
  work,</span> <span m='2189410'>with lots of paper on his desk in little
  blocks.</span> </p><p><span m='2191990'>After year and a half of hard work
  getting all these</span> <span m='2195230'>junction labels figured out, he
  then has to come up with a</span> <span m='2197560'>method for figuring out
  how to use them.</span> </p><p><span m='2200850'>And so we don't know whether
  to think his biggest</span> <span m='2203210'>contribution was that label set
  or his method.</span> </p><p><span m='2206390'>And probably both deserve about
  equal billing.</span> </p><p><span m='2210328'>Oh, I don't know how to explain
  what Waltz did.</span> </p><p><span m='2214710'>Well, one way is to do an
  example.</span> </p><p><span m='2217470'>And I think I will hazard an
  example.</span> </p><p><span m='2231560'>Let's see.</span> </p><p><span
  m='2232000'>Let me find some space.</span> </p><p><span m='2233165'>I think
  I'm reduced to going over here.</span> </p><p><span m='2235000'>But that will
  be convenient, since the</span> <span m='2236835'>line labels are here.</span>
  </p><p><span m='2244380'>Here's my example.</span> </p><p><span
  m='2256372'>And you say, how can I give you just part of a picture?</span>
  </p><p><span m='2259650'>Well, you can assume I'm looking at</span> <span
  m='2262140'>this through a window.</span> </p><p><span m='2263690'>So the edge
  of the window form boundary lines, and they exert</span> <span m='2266290'>no
  constraint whatsoever on what's behind them.</span> </p><p><span
  m='2269350'>So this is a legitimate drawing to</span> <span m='2270760'>have
  to think about.</span> </p><p><span m='2273470'>By the way, is this
  ambiguous?</span> </p><p><span m='2274950'>Or do you get a firm sense that
  there's a unique</span> <span m='2277630'>interpretation of all those
  lines?</span> </p><p><span m='2280650'>I think there's a unique
  interpretation</span> <span m='2282760'>of all those lines.</span>
  </p><p><span m='2284640'>What I'm going to do is I'm actually going to solve
  this</span> <span m='2287130'>problem using Huffman's labels but Waltz's
  method.</span> </p><p><span m='2291510'>Because I can't simulate on the
  blackboard something with</span> <span m='2294900'>50 line types and thousands
  of line junctions.</span> </p><p><span m='2297650'>So I'm going to use
  Huffman's set to</span> <span m='2300950'>demonstrate Waltz's
  algorithm.</span> </p><p><span m='2303390'>So Waltz's algorithm involves
  starting out by plopping on</span> <span m='2312040'>some junction all of the
  possible labels that the</span> <span m='2319080'>answer has to be drawn
  from.</span> </p><p><span m='2321120'>So let me number these in the order that
  we're going to</span> <span m='2323670'>visit them.</span> </p><p><span
  m='2325876'>Like so.</span> </p><p><span m='2327070'>And so far, I've just put
  down the three fork options that</span> <span m='2333080'>are resident on that
  first junction.</span> </p><p><span m='2337010'>And I have to take note of
  exactly what they do with the</span> <span m='2340650'>lines that come out of
  the junction.</span> </p><p><span m='2343660'>So let's see.</span>
  </p><p><span m='2344160'>I'll just copy them down.</span> </p><p><span
  m='2345920'>One possibility is this one.</span> </p><p><span
  m='2348760'>Another possibility is this one.</span> </p><p><span
  m='2351350'>And another possibility is plus, plus, minus.</span> </p><p><span
  m='2357590'>Oops, I've got plus, plus.</span> </p><p><span m='2358840'>No,
  that's right.</span> </p><p><span m='2360020'>So that right so far?</span>
  </p><p><span m='2361410'>All I've done is copy the junction</span> <span
  m='2363840'>labelings from my library.</span> </p><p><span m='2367045'>And at
  this point, Waltz's algorithm says there's nothing</span> <span
  m='2371760'>else to do but go on to junction number two.</span> </p><p><span
  m='2374810'>And unfortunately, sadly, there are lots of labelings</span> <span
  m='2380630'>that have to be considered on junction number 2.</span>
  </p><p><span m='2383260'>Six of them.</span> </p><p><span m='2386170'>1, 2, 3,
  4, 5, 6.</span> </p><p><span m='2389960'>So one of them looks like
  that.</span> </p><p><span m='2392090'>Another one looks like that.</span>
  </p><p><span m='2394250'>One of them is plus here, arrow in.</span>
  </p><p><span m='2399840'>Another one is plus here, arrow out.</span>
  </p><p><span m='2406890'>Another one is minus here, arrow down.</span>
  </p><p><span m='2414130'>And minus here, arrow up.</span> </p><p><span
  m='2416020'>I think I've copied those all right.</span> </p><p><span
  m='2419615'>But now, having copied those down, Waltz's algorithm looks</span>
  <span m='2423950'>around at the neighboring junctions and says, are any
  of</span> <span m='2427760'>the things that I just placed on junction two
  disallowed by</span> <span m='2432130'>what I've already placed on a
  neighboring junction?</span> </p><p><span m='2436250'>So it looks over here in
  step number two.</span> </p><p><span m='2442100'>And it sees that these three
  arrows require the line that</span> <span m='2449050'>joins junctions 1 and 2
  to be either minus or plus.</span> </p><p><span m='2457480'>So of the six
  possibilities, I can only keep the ones that</span> <span m='2461690'>are
  likewise content to put a plus on that line</span> <span m='2464730'>that
  joins the two.</span> </p><p><span m='2467160'>So that means that the
  influence flowing from</span> <span m='2472760'>junction 1 eliminates that
  one, eliminates that one,</span> <span m='2479870'>eliminates that one, and
  eliminates that one.</span> </p><p><span m='2483590'>So half of them are
  gone.</span> </p><p><span m='2486670'>All the ones that try to put a boundary
  line on that line</span> <span m='2491540'>between 1 and 2 are
  disallowed.</span> </p><p><span m='2494335'>All right?</span> </p><p><span
  m='2496740'>Now likewise, we could say, well, of the remaining ones,</span>
  <span m='2499730'>do they restrict what I can do at junction 1?</span>
  </p><p><span m='2503550'>So let's see.</span> </p><p><span m='2504050'>Here's
  a minus.</span> </p><p><span m='2505520'>And here's a plus.</span>
  </p><p><span m='2506680'>So all these possibilities over here are still
  alive.</span> </p><p><span m='2514300'>So now, continuing on, we have to see
  what we can do at</span> <span m='2518690'>junction 3.</span> </p><p><span
  m='2520550'>These are arrow labels again.</span> </p><p><span m='2523360'>So
  we have to copy exactly the same labels</span> <span m='2526030'>set as we had
  before.</span> </p><p><span m='2533980'>And now we look down at junction 2 and
  say, well, what</span> <span m='2538810'>does that tell me about the three
  that I've just placed?</span> </p><p><span m='2542920'>If we look up from
  junction 2 to see what kind of</span> <span m='2546820'>constraints it puts on
  here, we have this one alive and</span> <span m='2551000'>this one
  alive.</span> </p><p><span m='2551710'>I guess we've eliminated four of the
  six.</span> </p><p><span m='2554040'>So we have these two alive.</span>
  </p><p><span m='2556010'>And they both but boundary lines--</span> <span
  m='2558990'>I think I must have had this boundary line wrong, right?</span>
  </p><p><span m='2561920'>No, that's right.</span> </p><p><span m='2565510'>Oh
  yes, I see.</span> </p><p><span m='2569370'>Plus.</span> </p><p><span
  m='2571130'>This one goes--</span> <span m='2572920'>hang on a second.</span>
  </p><p><span m='2574655'>You let me do something wrong.</span> </p><p><span
  m='2578840'>So plus is out.</span> </p><p><span m='2582396'>And that must be
  one that goes--</span> <span m='2583770'>this minus goes up.</span>
  </p><p><span m='2586360'>Oh, yes.</span> </p><p><span m='2588040'>I'm too
  hasty and uncertain about what I was doing.</span> </p><p><span m='2591980'>So
  let's see.</span> </p><p><span m='2593570'>This guy has a boundary going
  down.</span> </p><p><span m='2595660'>And this guy has a boundary going
  up.</span> </p><p><span m='2598140'>All of the others have been
  eliminated.</span> </p><p><span m='2600390'>So that means that something that
  tries to put a concave</span> <span m='2602780'>line there is gone.</span>
  </p><p><span m='2604580'>And something that tries to put a plus line there is
  gone.</span> </p><p><span m='2608340'>So the influence flowing up in this
  direction in the third</span> <span m='2612490'>step eliminates that guy and
  eliminates that guy, leaving</span> <span m='2616300'>only this guy.</span>
  </p><p><span m='2619460'>But now, the thing I was worried about is you have
  to</span> <span m='2621200'>also at this point go down to 2 and see if there's
  any</span> <span m='2624810'>further constraint on what can survive down
  there, based on</span> <span m='2630030'>what has happened over here at
  junction 3.</span> </p><p><span m='2633440'>Now let's see.</span> </p><p><span
  m='2635170'>This one goes up, which is compatible with a survivor.</span>
  </p><p><span m='2638190'>But this one goes down, which is not</span> <span
  m='2639860'>compatible with a survivor.</span> </p><p><span m='2642020'>So
  when I bring this down in step three, this guy is</span> <span
  m='2645930'>eliminated.</span> </p><p><span m='2647470'>So now I'm down to
  just one interpretation for what can be</span> <span m='2652590'>going on at
  vertex number 2.</span> </p><p><span m='2655140'>And one interpretation for
  vertex number 3.</span> </p><p><span m='2660290'>Now let's see.</span>
  </p><p><span m='2661190'>This can propagate.</span> </p><p><span
  m='2662360'>So now that I've made a change on vertex number 2, I have
  to</span> <span m='2665840'>also see if that causes a change at vertex number
  1.</span> </p><p><span m='2670640'>So it's propagating through.</span>
  </p><p><span m='2672540'>And now I can see that the only possibility here is
  a</span> <span m='2676030'>minus, the label that's coming down from our
  survivor.</span> </p><p><span m='2679730'>So that eliminates these two.</span>
  </p><p><span m='2682730'>Whew!</span> </p><p><span m='2683620'>It's hard to do
  this by hand, but I've got three of the four</span> <span m='2686560'>things
  labeled.</span> </p><p><span m='2688530'>And even with just three of the four
  labeled, I'm down to</span> <span m='2691940'>a single interpretation for all
  of the junctions and the</span> <span m='2694870'>lines between them.</span>
  </p><p><span m='2697120'>So there's one left.</span> </p><p><span
  m='2701250'>We have to deal with that fork vertex.</span> </p><p><span
  m='2703080'>We better deal with it, because for all we know, this</span> <span
  m='2705240'>is not a legal drawing in this world.</span> </p><p><span
  m='2709140'>We have five fork vertexes to place.</span> </p><p><span
  m='2715180'>But you know what?</span> </p><p><span m='2716370'>I don't have to
  draw much here, because I know this is</span> <span m='2718860'>forced to be a
  plus now.</span> </p><p><span m='2720640'>And this is forced to be a plus
  now.</span> </p><p><span m='2722840'>And there's only one fork vertex with
  any</span> <span m='2724730'>pluses on it at all.</span> </p><p><span
  m='2726940'>So now I can come through and say, well, the only possible</span>
  <span m='2729800'>survivor is this one.</span> </p><p><span m='2732580'>These
  are gone.</span> </p><p><span m='2734440'>And now I have an
  interpretation</span> <span m='2736540'>for all of the junctions.</span>
  </p><p><span m='2739850'>And I see that the winners are this one.</span>
  </p><p><span m='2742830'>And this one.</span> </p><p><span m='2745310'>And
  this one.</span> </p><p><span m='2747900'>And this one.</span> </p><p><span
  m='2750240'>So I've got a unique interpretation.</span> </p><p><span
  m='2752120'>This line is convex.</span> </p><p><span m='2754260'>This one is
  concave.</span> </p><p><span m='2755620'>This is a boundary.</span>
  </p><p><span m='2756830'>That's a boundary.</span> </p><p><span
  m='2757560'>And this line is convex, and that's convex.</span> </p><p><span
  m='2762770'>Now that's a lot of work.</span> </p><p><span m='2764655'>So I
  better check and make sure I got it right.</span> </p><p><span
  m='2767020'>You'd like to see this demonstrated to make sure I</span> <span
  m='2768840'>haven't made a mistake.</span> </p><p><span m='2769840'>I'm sure
  of that.</span> </p><p><span m='2775440'>Let's see.</span> </p><p><span
  m='2778545'>That it?</span> </p><p><span m='2784380'>So each of the places
  where a line is obscured has four</span> <span m='2788940'>possibilities,
  labeled E. The arrow junctions are labeled A.</span> </p><p><span
  m='2792190'>The forks-- there are five of them-- at the fork junction
  5.</span> </p><p><span m='2795710'>So let's just step through here and see
  what happens.</span> </p><p><span m='2799890'>Boom.</span> </p><p><span
  m='2800340'>I've got it.</span> </p><p><span m='2802320'>I did do it
  right.</span> </p><p><span m='2809080'>So let's try some more.</span>
  </p><p><span m='2814010'>What do you think will happen with this one?</span>
  </p><p><span m='2815820'>Unique solution?</span> </p><p><span m='2823000'>It
  stopped.</span> </p><p><span m='2824746'>Bug in my program?</span>
  </p><p><span m='2827390'>Unthinkable.</span> </p><p><span m='2829500'>What's
  happened?</span> </p><p><span m='2831280'>It is genuinely ambiguous.</span>
  </p><p><span m='2834220'>It can be something hanging down from the
  ceiling.</span> </p><p><span m='2837790'>Or it could be something that we can
  think of as a step</span> <span m='2842920'>going up from left to
  right.</span> </p><p><span m='2846170'>Let's look at something more
  complicated.</span> </p><p><span m='2853910'>You think it'll work?</span>
  </p><p><span m='2856490'>Not enough constraint for us to figure that one
  out.</span> </p><p><span m='2858960'>It's equally ambiguous, but a little bit
  larger example.</span> </p><p><span m='2863530'>What about this one?</span>
  </p><p><span m='2868250'>Yeah, but the stuff is creeping up from the
  lower</span> <span m='2870130'>left up to the upper right.</span> </p><p><span
  m='2873710'>Yeah, bingo.</span> </p><p><span m='2874500'>It worked.</span>
  </p><p><span m='2875210'>It's unambiguous.</span> </p><p><span
  m='2876800'>It's variation on the same theme we had before.</span>
  </p><p><span m='2879410'>But let me, just for fun, take these two lines
  out.</span> </p><p><span m='2885260'>What do you think will happen now?</span>
  </p><p><span m='2889190'>Seems to be doing just fine until it hits the
  upper</span> <span m='2893810'>right-hand corner and discovers</span> <span
  m='2895560'>it can't label stuff.</span> </p><p><span m='2897240'>So it
  propagates back down.</span> </p><p><span m='2899530'>And what looked OK in
  the lower left is</span> <span m='2902200'>no good after all.</span>
  </p><p><span m='2903190'>So these results are kind of consistent with what we
  humans</span> <span m='2908510'>do when we look at these kinds of
  things.</span> </p><p><span m='2910510'>So it's very likely that we, in our
  heads, do have some</span> <span m='2914120'>constraint propagation
  apparatus</span> <span m='2915740'>that we use in vision.</span> </p><p><span
  m='2917590'>But putting that aside, we can think about other kinds of</span>
  <span m='2920200'>intelligence different from human, that might use
  this</span> <span m='2922940'>kind of mechanism to solve problems that involve
  a lot of</span> <span m='2926070'>constraint in finding a solution.</span>
  </p><p><span m='2928480'>So here, we saw the constraint propagation activity
  at work</span> <span m='2932780'>on line drawing analysis.</span> </p><p><span
  m='2934380'>But next time, what we're going do is we're going to see</span>
  <span m='2935780'>at work in map coloring.</span> </p><p><span m='2936910'>And
  who cares about map coloring?</span> </p><p><span m='2938970'>People who do
  scheduling, because that turns out to be</span> <span m='2941100'>the same
  problem.</span> </p><p></p>
uid: 610d4a009bca99ce1e2875664719d4a3
type: course
layout: video
---
