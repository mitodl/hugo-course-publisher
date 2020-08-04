---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers algorithms for
  depth-first and breadth-first search, followed by several refinements: keeping
  track of nodes already considered, hill climbing, and beam search.  We end
  with a brief discussion of commonsense vs. reflective knowledge.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: j1H3jAAGlEA
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: Video-YouTube-Stream
    type: Video
    uid: 81025918f66ff293658d5b311a28d158
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-4-search-depth-first/id765641080?i=194469718
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: Video-iTunes U-MP4
    type: Video
    uid: 43a13c90572e1878fa88259ccb17a6fa
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec04_300k.mp4'
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5cf883ece870ccdf67d3bc22e6c471cc
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/j1H3jAAGlEA/default.jpg'
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 043ab7716ddc4af30a9956eaaf50b7d8
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: j1H3jAAGlEA
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ae5629c1d77ec5cbd7b4a4096517e1e0
  - id: j1H3jAAGlEA.srt
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-4-search-depth-first-hill-climbing-beam/j1H3jAAGlEA.srt
    title: 3play caption file
    type: null
    uid: 34c04a263c3cda6e8225995c23e50bae
  - id: j1H3jAAGlEA.pdf
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-4-search-depth-first-hill-climbing-beam/j1H3jAAGlEA.pdf
    title: 3play pdf file
    type: null
    uid: 7d217346c7e53dd7a4888198e74899b3
  - id: Caption-3Play YouTube id-SRT
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 40af64277e345c349e35cc48d60f6313
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: dc703721c6e2ddf8ecf3384b2ca0f006
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: b427a3aba06f247588f8507d083f92c6
inline_embed_id: '23164533lecture4:search:depth-first,hillclimbing,beam8177409'
order_index: 49
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: "<p><a href=\"./resolveuid/a6fb3e82ce4c5f1c99b858b3950d498d\" target=\"_blank\">6.01SC Introduction to EECS I</a> includes two sessions on search:</p>\r\n<ul>\r\n    <li><a href=\"./resolveuid/497582d868ca82e77ef76b997e187b13\" target=\"_blank\">Search Algorithms</a></li>\r\n    <li><a href=\"./resolveuid/da41172cd83b25719eaecaa5c1bcde32\" target=\"_blank\">Optimizing a Search</a></li>\r\n</ul>"
short_url: lecture-4-search-depth-first-hill-climbing-beam
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-4-search-depth-first-hill-climbing-beam
title: 'Lecture 4: Search: Depth-First, Hill Climbing, Beam'
transcript: >-
  <p><span m='9234'>PATRICK WINSTON: Today we're going to be</span> <span
  m='10220'>talking about Search.</span> </p><p><span m='11030'>I know you're
  going to turn blue with yet</span> <span m='13220'>another lecture on
  Search.</span> </p><p><span m='15350'>Those of you who are taking computer
  science subjects,</span> <span m='18270'>you've probably seen in 601.</span>
  </p><p><span m='20360'>You'll see it again as theory course.</span>
  </p><p><span m='22270'>But we're going to do it for a little different
  purpose.</span> </p><p><span m='25570'>I want you to develop some intuition
  about various kinds</span> <span m='29480'>of Search work.</span> </p><p><span
  m='31080'>And I want to talk a little bit about Search as a model of</span>
  <span m='35800'>what goes on in our heads.</span> </p><p><span m='38080'>And
  toward the end, if there's time, I'd like to do a</span> <span
  m='40630'>demonstration for you of something never before</span> <span
  m='43660'>demonstrated to a 603.4 class, because it was only completed</span>
  <span m='49960'>last spring.</span> </p><p><span m='51600'>And some finishing
  touches were added by me this morning.</span> </p><p><span m='56470'>Always
  dangerous, but we'll see what happens.</span> </p><p><span m='61430'>There's
  Cambridge.</span> </p><p><span m='63870'>You all recognize it, of
  course.</span> </p><p><span m='68230'>You might want to get from some starting
  position s to</span> <span m='71550'>some goal position g.</span> </p><p><span
  m='74280'>So, you'll hire a cab and hope for the best.</span> </p><p><span
  m='78490'>So, here's what might happen, not too hot.</span> </p><p><span
  m='91430'>Let's move the starting position over here.</span> </p><p><span
  m='101250'>I've had cab drivers like this New York.</span> </p><p><span
  m='107039'>But it's not a very good path.</span> </p><p><span m='108460'>It's
  the path of a thief.</span> </p><p><span m='110400'>Let's change the way that
  the search is done to that of a</span> <span m='114930'>beginner, an honest
  beginner.</span> </p><p><span m='121690'>Not too bad.</span> </p><p><span
  m='124100'>Now, let's have a look at how the Search would happen if the</span>
  <span m='129360'>cab driver was a Ph.D. in physics</span> <span
  m='133440'>after his third post-doc.</span> </p><p><span m='145800'>These are
  not actually traverse.</span> </p><p><span m='146750'>These are just things
  that the driver is thinking about, and</span> <span m='151050'>that is the
  very best of all possible paths.</span> </p><p><span m='154840'>So, the thief
  does a horrible job.</span> </p><p><span m='156480'>The beginner does a pretty
  good job, but</span> <span m='158110'>not an optimal job.</span> </p><p><span
  m='159960'>This is the optimal job as produced by the Ph.D. in</span> <span
  m='164790'>physics after his third post-doc.</span> </p><p><span
  m='168910'>So, would you like to understand how those all work?</span>
  </p><p><span m='171230'>The answer, of course, is yes.</span> </p><p><span
  m='176660'>I'm going to talk to you about procedures that are different</span>
  <span m='181070'>from the way that you just solved this problem.</span>
  </p><p><span m='185260'>I imagine that if I said to you, please find a path
  for s</span> <span m='188420'>to g, you would, within a few seconds,
  find</span> <span m='192020'>a pretty good path--</span> <span m='193070'>not
  the optimal one, but a pretty good one--</span> <span m='195710'>using your
  eyes.</span> </p><p><span m='198050'>And we're not going to tell you about how
  that works,</span> <span m='199940'>because we don't know how that
  works.</span> </p><p><span m='202540'>But we do know that problem solving with
  the eyes is an</span> <span m='207030'>important part of our total
  intelligence.</span> </p><p><span m='209260'>And we'll never have a complete
  theory of human</span> <span m='211260'>intelligence until we can understand
  the contributions</span> <span m='214640'>of the human visual system to
  solving everyday problems like</span> <span m='218990'>finding a pretty good
  path in that map.</span> </p><p><span m='223470'>But, alas, we can't talk
  about that, because we don't know</span> <span m='225870'>how to do it.</span>
  </p><p><span m='227100'>We're working on it.</span> </p><p><span
  m='228820'>But we don't know how to do it.</span> </p><p><span m='231450'>So,
  I'm not going to use Cambridge in my illustrations.</span> </p><p><span
  m='233880'>There's too much there to work through in an hour.</span>
  </p><p><span m='236860'>So, we're going to use this map over here which has
  been</span> <span m='239620'>designed to illustrate a few important
  points.</span> </p><p><span m='242850'>You, too, can find a path through that
  graph pretty</span> <span m='246520'>easily with your eyes.</span>
  </p><p><span m='248570'>Our programs don't have eyes, and they don't have
  visually</span> <span m='251320'>grounded algorithms, so they're going to have
  to do</span> <span m='253280'>something else.</span> </p><p><span
  m='254720'>And the very first kind of search we want to talk about</span>
  <span m='257180'>is called the British Museum approach.</span> </p><p><span
  m='259980'>This is a slur against at least the British Museum, if</span> <span
  m='263100'>not the entire nation, because the way you do a British</span>
  <span m='266400'>Museum search is you find every possible path.</span>
  </p><p><span m='270230'>So, it'll be helpful to have a diagram of all possible
  paths</span> <span m='273310'>on the board.</span> </p><p><span
  m='274409'>We're going to start with a British Museum search.</span>
  </p><p><span m='281930'>From the starting position, it's clear, you can go
  from my</span> <span m='285130'>s to either a or b.</span> </p><p><span
  m='292400'>And already there's an important quiz point.</span> </p><p><span
  m='294600'>Whenever we have these kinds of problems on a quiz, we ask</span>
  <span m='298260'>you to develop the tree associated with a search in</span>
  <span m='302720'>lexical order.</span> </p><p><span m='304470'>So, the nodes
  there under s are listed alphabetically,</span> <span m='311600'>just to have
  an orderly way of doing it.</span> </p><p><span m='314710'>So, from a we can
  go either b or d.</span> </p><p><span m='322020'>And another convention of the
  subject, another thing you</span> <span m='324940'>have to keep in mind in
  quizzes, is it we don't have</span> <span m='327530'>these searches bite their
  own tail.</span> </p><p><span m='330180'>So, I could have said that if I'm at
  a, I can</span> <span m='333400'>also go back to s.</span> </p><p><span
  m='335570'>But no path is ever allowed them to bite itself, to go</span> <span
  m='340730'>around and enter and get back to a place that's</span> <span
  m='345190'>already on the path.</span> </p><p><span m='347580'>Now if I go on
  to b first, that means that from b I can</span> <span m='352750'>go to either
  a or c.</span> </p><p><span m='355600'>This is getting fat pretty fast.</span>
  </p><p><span m='357020'>But let's see, s, a, b.</span> </p><p><span
  m='359570'>The only place I can go is c and then to e.</span> </p><p><span
  m='363930'>s, a, d, without biting my own tail and going back to a, the</span>
  <span m='367360'>only place I can go is g.</span> </p><p><span m='370290'>s b,
  a, I can only go to d and then to g.</span> </p><p><span m='376820'>And
  finally, s, b, c, I can only go to e.</span> </p><p><span m='381040'>So, that
  is a complete set of paths as produced by any</span> <span m='386190'>program
  that you will feel you'd like to write that finds</span> <span m='391720'>all
  possible paths.</span> </p><p><span m='393470'>I haven't been very precise
  about how to do that, because</span> <span m='396780'>you don't have to
  be.</span> </p><p><span m='398350'>You can't save much work by being clever,
  because you have</span> <span m='400780'>to find everything.</span>
  </p><p><span m='403570'>So, that's the British Museum expansion of the
  tree.</span> </p><p><span m='417230'>So, what have I done?</span> </p><p><span
  m='418409'>I've been playing around with a map.</span> </p><p><span
  m='419820'>I showed you an example of a map.</span> </p><p><span
  m='421550'>And pretty soon you're going to think that</span> <span
  m='425310'>Search is about maps.</span> </p><p><span m='428616'>So, before
  going even another tiny step, I want to emphasize</span> <span m='434820'>that
  Search is not equal to maps.</span> </p><p><span m='438030'>Search is about
  choice.</span> </p><p><span m='439600'>And I happen to illustrate these
  searches with maps,</span> <span m='442690'>because they are particularly
  cogent.</span> </p><p><span m='445390'>But Search is not about maps.</span>
  </p><p><span m='446790'>It's about the choices you make when you're trying
  to</span> <span m='448800'>make decisions.</span> </p><p><span
  m='450800'>These things I'm going to be talking to you about today are</span>
  <span m='454470'>choices you make when you explore the map.</span>
  </p><p><span m='457172'>You can make other kinds of choices when you're
  exploring</span> <span m='459630'>other kinds of things.</span> </p><p><span
  m='460630'>And, in fact, at the end, if there's time, I'll show you</span>
  <span m='464500'>how you do searches when you're solving problems in a</span>
  <span m='467130'>humanities class.</span> </p><p><span m='471000'>That's the
  British Museum algorithm.</span> </p><p><span m='472409'>Search is not about
  maps.</span> </p><p><span m='473950'>Our first gold star idea, Search is about
  choice.</span> </p><p><span m='478240'>But for our illustration, Search is
  about maps.</span> </p><p><span m='480660'>So, the first kind of Search we
  want to talk about that's</span> <span m='483530'>real is Depth-first
  Search.</span> </p><p><span m='490412'>And the idea of Depth-first Search is
  that you barrel</span> <span m='495500'>ahead in a single-minded way.</span>
  </p><p><span m='500160'>So, from s, your choices are a or b.</span>
  </p><p><span m='507832'>And you always go down the left branch by
  convention.</span> </p><p><span m='511730'>So, from s, we go to a.</span>
  </p><p><span m='515350'>From a we have two choices.</span> </p><p><span
  m='516919'>We can go to either b or d following our lexical</span> <span
  m='526990'>convention.</span> </p><p><span m='529630'>After that, we can go to
  c.</span> </p><p><span m='532660'>And after that we can go to e.</span>
  </p><p><span m='534660'>And too bad for us, we're stuck.</span> </p><p><span
  m='538871'>What are we going to do.</span> </p><p><span m='540520'>We've got
  into a dead end, all is lost.</span> </p><p><span m='544790'>But of course,
  all isn't lost.</span> </p><p><span m='546640'>Because we have the choice of
  backing up to the place where</span> <span m='551180'>we last made a decision
  and choosing another branch.</span> </p><p><span m='556280'>So, that process
  is called variously back-up or</span> <span m='560350'>backtracking.</span>
  </p><p><span m='563330'>At this point, we would say, ah, dead end.</span>
  </p><p><span m='566670'>The first place we find when we back up the tree where
  we</span> <span m='570110'>made a choice is when we chose b instead of
  d.</span> </p><p><span m='574070'>So, we go back up there and take the other
  route.</span> </p><p><span m='579060'>s, a, d now goes to g.</span>
  </p><p><span m='582730'>And we're done.</span> </p><p><span m='585220'>We're
  going to make up a little table here of things</span> <span m='587220'>that we
  can embellish our basic searches with.</span> </p><p><span m='590880'>And one
  of the things we can embellish our basic searches</span> <span m='593420'>with
  is this backtracking idea.</span> </p><p><span m='601700'>Now, backtrack is
  not relevant to the British Museum</span> <span m='604410'>algorithm, because
  you've got to find everything.</span> </p><p><span m='607120'>You can't quit
  when you've found one path.</span> </p><p><span m='610000'>But you'd always
  want to use backtracking with Depth-first</span> <span m='612940'>Search,
  because you may plunge on down and miss the path that</span> <span
  m='616140'>gets to the goal.</span> </p><p><span m='618050'>Now, you might ask
  me, is backtracking, therefore,</span> <span m='622480'>always part of
  Depth-first Search?</span> </p><p><span m='625330'>And you can read textbooks
  that do it either way.</span> </p><p><span m='628350'>Count on it.</span>
  </p><p><span m='629190'>If we give you a Search problem on a quiz, we'll
  tell</span> <span m='632500'>you whether or not your Search is supposed to
  use</span> <span m='634400'>backtracking.</span> </p><p><span m='634990'>We
  consider it to be an optional thing.</span> </p><p><span m='638200'>You'd be
  pretty stupid not to use this optional thing when</span> <span
  m='640320'>you're doing Depth-first Search.</span> </p><p><span m='641925'>But
  we'll separate these ideas out and call</span> <span m='644800'>it an optional
  add-on.</span> </p><p><span m='647300'>so, that's Depth-first Search, very
  simple.</span> </p><p><span m='651600'>Now, the natural companion to
  Depth-first Search will be</span> <span m='655670'>Breadth-first Search,
  Breadth-first.</span> </p><p><span m='667640'>And the way it works is you
  build up this tree level by</span> <span m='671620'>level, and at some point,
  when you scan across a level,</span> <span m='676160'>you'll find that you've
  completed a path</span> <span m='677790'>that goes to the goal.</span>
  </p><p><span m='680100'>So, level by level, s can go to either a or b.</span>
  </p><p><span m='687310'>a can go either to b or d.</span> </p><p><span
  m='690670'>And b can go to either a or c.</span> </p><p><span m='694620'>So,
  you see what we're doing.</span> </p><p><span m='695480'>We're going level by
  level.</span> </p><p><span m='698030'>And we haven't hit a level with a goal
  in it yet, so</span> <span m='700360'>we've got to keep going.</span>
  </p><p><span m='702510'>Note that we're building up quite a bit of stuff
  here,</span> <span m='704800'>quite a lot of growth in the size of the path
  set that</span> <span m='709360'>we're keeping in mind.</span> </p><p><span
  m='711540'>At the next level, we have b going to c, d going to g, a</span>
  <span m='716850'>going to d, and c going to e.</span> </p><p><span
  m='721030'>And now, when we scan across, we do hit g.</span> </p><p><span
  m='725460'>So, we found a path with Breadth-first Search, just as</span> <span
  m='728530'>we found a path with Depth-first Search.</span> </p><p><span
  m='732650'>Now, you might say, well, why didn't you just quit</span> <span
  m='734360'>when you hit g?</span> </p><p><span m='735420'>Implementation
  detail.</span> </p><p><span m='738340'>We'll talk about a sample
  implementation.</span> </p><p><span m='740830'>You can write it in any way you
  want.</span> </p><p><span m='742990'>But now that we know what these searches
  are, let's</span> <span m='746080'>speed things up a little bit here and do a
  couple searches</span> <span m='751560'>that now have names.</span>
  </p><p><span m='754530'>The first type will be Depth-first, boom.</span>
  </p><p><span m='758590'>That's the one that produces the thief path.</span>
  </p><p><span m='763870'>And then we can also do a Breadth-first Search, which
  we</span> <span m='766070'>haven't tried yet.</span> </p><p><span
  m='767310'>What do you suppose is going to happen?</span> </p><p><span
  m='769350'>Is it going to be fast, slow, produce a good path,</span> <span
  m='773030'>produce a bad path?</span> </p><p><span m='773840'>I don't know,
  let's try it.</span> </p><p><span m='776095'>I had to speed it up, you see,
  because it's doing an awful</span> <span m='778410'>lot of Search.</span>
  </p><p><span m='779670'>It's generating an awful lot of paths.</span>
  </p><p><span m='788420'>Finally, you got a path.</span> </p><p><span
  m='790280'>Is it the best path?</span> </p><p><span m='791030'>I don't think
  so.</span> </p><p><span m='791680'>But we're not going to talk about optimal
  paths today.</span> </p><p><span m='793700'>We're just going to talk about
  pretty good</span> <span m='795730'>paths, heuristic paths.</span>
  </p><p><span m='798330'>Let's move the starting position here in the
  middle.</span> </p><p><span m='801545'>Do you think Breadth-first Search is
  going to be stupid?</span> </p><p><span m='805050'>I think it's going to be
  pretty stupid.</span> </p><p><span m='806310'>Let's see what happens.</span>
  </p><p><span m='808730'>This Search is a lot to the left, which you would
  never do</span> <span m='810840'>with you eye.</span> </p><p><span
  m='811795'>Let me slow that down just to demonstrate it.</span> </p><p><span
  m='815050'>It finds a shorter path, because it's right there in</span> <span
  m='817190'>the middle.</span> </p><p><span m='818470'>But it spends a lot of
  its time looking off to the left.</span> </p><p><span m='821810'>It's pretty
  stupid.</span> </p><p><span m='824740'>But that's how it works.</span>
  </p><p><span m='826810'>So, now that we've got two examples of searches on
  the</span> <span m='829760'>table, I'd like to just write a little flow chart
  for how</span> <span m='832460'>the search might work.</span> </p><p><span
  m='834800'>Because if I do that, then it'll be easier for us to see</span>
  <span m='838710'>what kind of small differences there are between the</span>
  <span m='840600'>implementations of these various searches.</span>
  </p><p><span m='844550'>So, what we're going to do is we're going to develop
  a</span> <span m='847500'>waiting list, a queue, a line, whatever you'd</span>
  <span m='851020'>like to call it.</span> </p><p><span m='851180'>Let's call if
  a queue.</span> </p><p><span m='852380'>We're going to develop a queue of
  paths that are under</span> <span m='854590'>consideration.</span>
  </p><p><span m='856960'>So, the first step in our algorithm will be to</span>
  <span m='860120'>initialize our queue.</span> </p><p><span m='869410'>And I
  think what I'll do is I'll simulate Depth-first</span> <span m='873550'>Search
  on this problem up there on the</span> <span m='877780'>left using this
  algorithm.</span> </p><p><span m='880500'>I need to have some way of
  representing my paths.</span> </p><p><span m='883890'>And what I want to do is
  I'm going to betray my heritage as</span> <span m='886960'>a list programmer,
  because I'm just going to put these up as</span> <span m='889720'>if there
  were lisp s-expressions.</span> </p><p><span m='892320'>To begin with, I just
  have one path.</span> </p><p><span m='895140'>And it has only one node in it,
  s.</span> </p><p><span m='898710'>That's the whole path.</span> </p><p><span
  m='901400'>The next thing I do after I initialize the queue is I</span> <span
  m='906890'>extend first path on the queue.</span> </p><p><span m='924750'>OK,
  when I extend s, I get two paths.</span> </p><p><span m='930300'>I get s goes
  to a, and I get s goes to b.</span> </p><p><span m='938670'>I take the first
  one off the front of the queue.</span> </p><p><span m='941460'>And I put back
  the two that are produced by</span> <span m='944320'>extending that
  path.</span> </p><p><span m='947070'>Now, after I've extended the first path
  on the queue, I</span> <span m='950130'>have to but those extended paths on to
  the queue.</span> </p><p><span m='956820'>In here there's an explicit step
  where I've checked to see</span> <span m='959200'>if that first path is a
  winner.</span> </p><p><span m='961620'>If it's not, I extend it.</span>
  </p><p><span m='963710'>And I have to put those paths onto the queue.</span>
  </p><p><span m='967950'>So, I'll say that what I do is I end queue.</span>
  </p><p><span m='978390'>Now, I've done one step.</span> </p><p><span
  m='979950'>And let's let me do another step.</span> </p><p><span
  m='981160'>I'm going to take this first path off.</span> </p><p><span
  m='984190'>I'm going to extend that path.</span> </p><p><span m='987580'>And
  where do I put these new paths on the queue if I'm</span> <span
  m='990760'>doing Depth-first Search?</span> </p><p><span m='994320'>Well, I
  want to work with the path that I've just generated.</span> </p><p><span
  m='998390'>I'm taking this plunge down deep into the search tree.</span>
  </p><p><span m='1003800'>So, since I want to keep going down into the stuff
  that I</span> <span m='1007290'>just generated, where then do I want to put
  these two paths?</span> </p><p><span m='1011440'>At the end of the
  queue?</span> </p><p><span m='1012360'>I don't think so, because it'll be a
  long</span> <span m='1014430'>time getting there.</span> </p><p><span
  m='1015370'>I want to put them on the front of the queue.</span> </p><p><span
  m='1020920'>For Depth-first Search, I want to put them on the</span> <span
  m='1032858'>front of the queue.</span> </p><p><span m='1035220'>And that's why
  s, a, b goes here, and s, a, d, and then</span> <span m='1044510'>that's s,
  b.</span> </p><p><span m='1049770'>So, s, b is still there.</span>
  </p><p><span m='1051100'>That's still a valid possibility.</span> </p><p><span
  m='1053550'>But now I've stuck two paths in front of it, both of the</span>
  <span m='1055830'>ones I generated by taking a path off the front of
  the</span> <span m='1059060'>queue, discovering that it doesn't go to the
  goal,</span> <span m='1062310'>extending it and putting those back on the
  queue.</span> </p><p><span m='1066130'>I might as well complete this
  illustration here.</span> </p><p><span m='1069210'>While I'm at it, I take the
  s, a, b off, s, a, b, and I can</span> <span m='1077070'>go only there to
  c.</span> </p><p><span m='1079840'>But, of course, I keep s, a, d and s, b on
  the queue.</span> </p><p><span m='1089170'>Now, I take the front off the queue
  again, and I get s, a,</span> <span m='1092860'>b, c, e, and not to forget s,
  a, d and s, b.</span> </p><p><span m='1103330'>I take the first one off the
  queue.</span> </p><p><span m='1105340'>It doesn't go to the goal.</span>
  </p><p><span m='1107900'>I try to extend it, but there's nothing there.</span>
  </p><p><span m='1110000'>I've reached a dead end.</span> </p><p><span
  m='1112080'>So, in this operation, all I'm doing is taking the front
  one</span> <span m='1114670'>off the queue and shortening the queue.</span>
  </p><p><span m='1122030'>We're almost home.</span> </p><p><span m='1123860'>I
  take s, a,d off of queue.</span> </p><p><span m='1125870'>And I get s, a, d,
  c.</span> </p><p><span m='1130160'>And, of course, I still have s, b.</span>
  </p><p><span m='1134300'>Now, the next time I visit the situation, buried in
  that</span> <span m='1140650'>first step, I discover a path that actually does
  get to</span> <span m='1144150'>goal, and I'm done.</span> </p><p><span
  m='1146920'>So, each time around I visualize the queue.</span> </p><p><span
  m='1150810'>I check to see if I'm done.</span> </p><p><span m='1152320'>If
  not, I take the extensions and put them</span> <span m='1155840'>somewhere on
  the queue.</span> </p><p><span m='1157606'>And then I go back in.</span>
  </p><p><span m='1165000'>And then here there's a varied test which checks to
  see if</span> <span m='1169900'>we're done.</span> </p><p><span
  m='1172280'>That's how the Depth-first Search algorithm works.</span>
  </p><p><span m='1176650'>And now, would we have to start all over again if we
  did</span> <span m='1179070'>Breadth-first Search?</span> </p><p><span
  m='1181780'>Nope.</span> </p><p><span m='1182310'>Same algorithm.</span>
  </p><p><span m='1184220'>All the code we've got needs one line</span> <span
  m='1186110'>replaced, one line changed.</span> </p><p><span m='1189060'>What
  do I have to do different in order to get a</span> <span
  m='1191080'>Breadth-first Search out of this instead of</span> <span
  m='1192800'>a Depth-first Search?</span> </p><p><span
  m='1194580'>Tanya?</span> </p><p><span m='1195440'>TANYA: Change [INAUDIBLE]
  on the queue.</span> </p><p><span m='1196930'>PATRICK WINSTON: And where do I
  put it on the queue?</span> </p><p><span m='1197940'>She says to change
  it.</span> </p><p><span m='1198840'>TANYA: On the back?</span> </p><p><span
  m='1199720'>PATRICK WINSTON: Put it on the back.</span> </p><p><span
  m='1202030'>So, with Breadth-first Search all I have to do</span> <span
  m='1214810'>is put on the back.</span> </p><p><span m='1221290'>Now, if we
  were content with a inefficient search, and didn't</span> <span
  m='1228990'>care much about how good our path was, we'd be done.</span>
  </p><p><span m='1231350'>And we could go home.</span> </p><p><span
  m='1233330'>But we are a little concerned about the</span> <span
  m='1235690'>efficiency of our search.</span> </p><p><span m='1237740'>And we
  would like a pretty good path.</span> </p><p><span m='1239820'>So, we're going
  to have to stick around</span> <span m='1241630'>for a little while.</span>
  </p><p><span m='1245290'>Now, you may have noticed, up there in that the
  development</span> <span m='1249770'>of the Breadth-first Search, that the
  algorithm is</span> <span m='1257180'>incredibly stupid.</span> </p><p><span
  m='1261300'>Why is the algorithm incredibly stupid?</span> </p><p><span
  m='1266000'>Ty, what do you think?</span> </p><p><span m='1267200'>TY: It
  can't tell whether it's getting closer or further away</span> <span
  m='1269189'>from the goal.</span> </p><p><span m='1269540'>PATRICK WINSTON: It
  certainly can't tell whether it's</span> <span m='1271090'>getting closer or
  further away from the goal.</span> </p><p><span m='1273330'>And we're going to
  deal with that in a minute.</span> </p><p><span m='1276090'>But it's even
  stupider than that.</span> </p><p><span m='1280880'>Why is it stupid?</span>
  </p><p><span m='1281540'>What's your name?</span> </p><p><span
  m='1282474'>DYLAN: Dylan.</span> </p><p><span m='1284342'>It [? hits ?] the
  same nodes twice.</span> </p><p><span m='1286677'>PATRICK WINSTON: Dylan said
  it's extending paths that go</span> <span m='1290340'>to the same node more
  than once.</span> </p><p><span m='1293660'>Let's see what Dylan's talking
  about.</span> </p><p><span m='1299410'>Down here, it extends a.</span>
  </p><p><span m='1302522'>But it's already extended a up there.</span>
  </p><p><span m='1306810'>Down here, it extends a path that goes to b.</span>
  </p><p><span m='1311440'>And it's already extended a path that goes to
  d.</span> </p><p><span m='1314900'>Over here, it could extend a path that went
  through c, but</span> <span m='1322170'>it's already got a path that goes
  through c.</span> </p><p><span m='1325800'>So, all of these paths are
  duplicated.</span> </p><p><span m='1329450'>And we're still going through
  them.</span> </p><p><span m='1332040'>That's incredibly stupid.</span>
  </p><p><span m='1335450'>What we're going to do is we're going to amend
  our</span> <span m='1337460'>algorithm just a little bit.</span> </p><p><span
  m='1343940'>And we're not going to extend the first path on the queue</span>
  <span m='1351210'>unless final node never before extended.</span> </p><p><span
  m='1376550'>What we're going to do is we're going to look to see if</span>
  <span m='1378380'>there-- we've got this path.</span> </p><p><span
  m='1379780'>And we're going to extend it.</span> </p><p><span m='1380930'>And
  it's got a final note.</span> </p><p><span m='1382190'>If we've ever extended
  a path that goes to that final node,</span> <span m='1385700'>and it was a
  final node on that path, then we're not</span> <span m='1387580'>going to do
  it again.</span> </p><p><span m='1389630'>We got to keep a list of places that
  have already been</span> <span m='1396520'>the last piece of a path that was
  extended.</span> </p><p><span m='1399506'>Everybody got that?</span>
  </p><p><span m='1400830'>It's a little awkward to say it, because it's the
  last node</span> <span m='1404130'>we care about.</span> </p><p><span
  m='1404870'>If a path terminates in a node, and if some other path</span>
  <span m='1410640'>previously terminated in that node and got extended--</span>
  <span m='1413480'>we're not going to do it again.</span> </p><p><span
  m='1414570'>Because it's a waste of time.</span> </p><p><span m='1419690'>Now,
  let's see if this actually helps.</span> </p><p><span m='1431470'>Now, use the
  extended list.</span> </p><p><span m='1433200'>Let's see, well, gee, we got
  that place</span> <span m='1440305'>in the center there.</span> </p><p><span
  m='1441050'>Let's just repeat the previous search.</span> </p><p><span
  m='1455200'>Wow, it's taking a long time.</span> </p><p><span m='1457200'>But
  notice it put 103 paths back on the queue.</span> </p><p><span
  m='1462610'>Now, let's add a filter and try again.</span> </p><p><span
  m='1479540'>A lot less.</span> </p><p><span m='1481640'>So, let's speed this
  up, and we'll start way over here.</span> </p><p><span m='1486950'>You
  remember how tedious that search was.</span> </p><p><span m='1489390'>And now
  we'll repeat it with this list, boom, there it is.</span> </p><p><span
  m='1495240'>That's all because we didn't do that silly thing of going</span>
  <span m='1498050'>back through the final node that's</span> <span
  m='1501610'>already been gone through.</span> </p><p><span m='1504170'>So, you
  would never not want to do this.</span> </p><p><span m='1507380'>We better
  list this as another option.</span> </p><p><span m='1519846'>It doesn't help
  with a British Museum algorithm, because</span> <span m='1522420'>nothing
  helps with the British Museum algorithm.</span> </p><p><span m='1524670'>Does
  it help with Depth-first?</span> </p><p><span m='1525950'>Yes.</span>
  </p><p><span m='1526800'>Does it help with Breadth-first?</span> </p><p><span
  m='1528350'>Yes.</span> </p><p><span m='1529680'>Do we do backtracking with
  Breadth-first?</span> </p><p><span m='1532000'>No, because backtracking can't
  do us any good.</span> </p><p><span m='1538870'>OK, we're almost, except that
  search that's starting in the</span> <span m='1543990'>middle is still pretty
  stupid.</span> </p><p><span m='1546090'>Both the Breadth-first version and the
  Depth-first version</span> <span m='1552200'>are going off to the left.</span>
  </p><p><span m='1553940'>And we would never do that with our eyes in any
  case.</span> </p><p><span m='1558320'>The next thing we want to do is we want
  to have ourselves a</span> <span m='1561720'>slightly more informed search by
  taking into consideration</span> <span m='1567020'>whether we seem to be
  getting anywhere.</span> </p><p><span m='1573490'>So, in general, it's a good
  thing to get closer to where</span> <span m='1577550'>we want to go.</span>
  </p><p><span m='1579890'>In general, if we've got a choice of going to a
  node</span> <span m='1584200'>that's close to the goal or a node that's not so
  close to</span> <span m='1587210'>the goal, we'll always want to go to the one
  that's</span> <span m='1588830'>close to the goal.</span> </p><p><span
  m='1591010'>And as soon as we add that to what we're doing, we have</span>
  <span m='1595610'>another kind of Search, which goes by the</span> <span
  m='1607290'>name of Hill Climbing.</span> </p><p><span m='1616900'>And it's
  just like Depth-first Search, except instead of</span> <span m='1619830'>using
  lexical order to break ties, we're going to break</span> <span
  m='1623540'>ties according to which node is closer to the goal.</span>
  </p><p><span m='1629720'>I went to some trouble to talk to you about</span>
  <span m='1631260'>this enqueued list.</span> </p><p><span m='1632680'>And
  having gone to that trouble, I'm now</span> <span m='1634020'>going to ignore
  it.</span> </p><p><span m='1635860'>Not because it isn't a good idea, but
  because trying to</span> <span m='1638260'>keep track of everything in the
  example is</span> <span m='1640490'>confusing the example.</span> </p><p><span
  m='1641310'>It won't work out right in the small example and all that.</span>
  </p><p><span m='1644350'>Put the queueing thing aside, queued list aside, and
  think</span> <span m='1648270'>instead just about the value of going in the
  direction</span> <span m='1653120'>that's getting us closer to the
  goal.</span> </p><p><span m='1656820'>In Hill Climbing Search, just like a
  Depth-first Search, we</span> <span m='1660520'>have a and b.</span>
  </p><p><span m='1662790'>And we're still going to list them lexically on
  underneath</span> <span m='1665800'>the parent node.</span> </p><p><span
  m='1667636'>But now which one is so closer to the goal?</span> </p><p><span
  m='1673630'>Now, this time b is closer to the goal than a.</span> </p><p><span
  m='1676620'>So, instead of following the Depth-first course, which</span>
  <span m='1679340'>would take us down through a, we're going to go to the
  one</span> <span m='1682030'>that's closest which goes through b.</span>
  </p><p><span m='1684890'>And b can either go to a or c.</span> </p><p><span
  m='1694670'>b is six units away from the goal. a is about seven plus,</span>
  <span m='1699040'>not drawn exactly to scale.</span> </p><p><span
  m='1700620'>Use the numbers not your eyes.</span> </p><p><span m='1705420'>Now
  where are we?</span> </p><p><span m='1706740'>It's symmetric, so a and c are
  both equally</span> <span m='1708990'>far from the goal.</span> </p><p><span
  m='1710920'>Now we're going to use the lexical order</span> <span
  m='1712220'>to break the tie.</span> </p><p><span m='1714160'>Now from s, b,
  a, we'll go to d.</span> </p><p><span m='1721510'>And now, which is closest to
  the goal?</span> </p><p><span m='1724190'>That's the only choice we
  have.</span> </p><p><span m='1725340'>So, now we have no choice but to go down
  to the goal.</span> </p><p><span m='1729050'>That's the Hill Climbing way of
  doing the search.</span> </p><p><span m='1733250'>And notice that this time
  there's no backtracking.</span> </p><p><span m='1737740'>It's not the optimal
  path.</span> </p><p><span m='1739270'>It's not the best path.</span>
  </p><p><span m='1739940'>But at least there's no backtracking.</span>
  </p><p><span m='1742010'>That's not always true.</span> </p><p><span
  m='1742830'>That's just an artifact of this particular example.</span>
  </p><p><span m='1747180'>Do you think Hill Climbing would produce a faster
  search?</span> </p><p><span m='1750910'>I think so.</span> </p><p><span
  m='1753030'>Let's see what happens when we add these</span> <span
  m='1755040'>things at one at a time.</span> </p><p><span m='1757570'>First,
  let's turn off our extended list.</span> </p><p><span m='1765610'>We turned
  off our extended list.</span> </p><p><span m='1767010'>And we're going to do
  Depth-first again just for the</span> <span m='1769980'>sake of
  comparison.</span> </p><p><span m='1773040'>It produces a very roundabout path
  with 48 enqueueings.</span> </p><p><span m='1778460'>Now, let's switch over to
  Hill Climbing.</span> </p><p><span m='1781230'>And what do think?</span>
  </p><p><span m='1781780'>Do you think it will produce a straighter path,
  fewer</span> <span m='1784630'>enqueueings?</span> </p><p><span
  m='1786720'>Boom.</span> </p><p><span m='1789930'>You wouldn't not want to do
  that, would you?</span> </p><p><span m='1792180'>If you've got some kind of
  heuristic that tells you that</span> <span m='1795450'>you're getting close to
  the goal, you should use it.</span> </p><p><span m='1798360'>Now, it's easy to
  modify my example over there so that</span> <span m='1803330'>getting close to
  the goal gets you trapped in a</span> <span m='1805550'>blind alley on
  e.</span> </p><p><span m='1806690'>That's easy to do.</span> </p><p><span
  m='1808730'>But that's just an artifact of the example.</span> </p><p><span
  m='1810280'>In general, you want to go along a path that gets you</span> <span
  m='1813130'>closer to the goal.</span> </p><p><span m='1815060'>So, that's
  23.</span> </p><p><span m='1816040'>I don't know, let's see if using the
  extended list filter</span> <span m='1818400'>does any good.</span>
  </p><p><span m='1821870'>Yeah, still 23.</span> </p><p><span m='1823360'>So,
  in that particular case the extension list didn't</span> <span
  m='1830670'>actually do us any good, because we're driving so</span> <span
  m='1833190'>directly toward the goal.</span> </p><p><span m='1836960'>OK,
  that's that.</span> </p><p><span m='1838740'>Now, let's see, is there any
  analog to--</span> <span m='1842410'>well, we might say that this is yet
  another way of</span> <span m='1847580'>distinguishing the searches.</span>
  </p><p><span m='1849750'>And that is, is it an informed search?</span>
  </p><p><span m='1860620'>Is it making use of any kind of heuristic
  information?</span> </p><p><span m='1863540'>Certainly, a British Museum is
  not, Depth is</span> <span m='1865640'>not, Breadth is not.</span>
  </p><p><span m='1867530'>And now let's consider what we got for Hill
  Climbing.</span> </p><p><span m='1869980'>Do we want to use
  backtracking?</span> </p><p><span m='1871240'>Sure.</span> </p><p><span
  m='1872410'>Do we want to use an enqueued list?</span> </p><p><span
  m='1874010'>Sure.</span> </p><p><span m='1875650'>And it is informed, because
  it's taking advantage of this</span> <span m='1878210'>extra
  information.</span> </p><p><span m='1878800'>It may not be in your
  problem.</span> </p><p><span m='1880500'>It's not often the case you've got
  this information in a map.</span> </p><p><span m='1884570'>Your problem may
  not have any heuristic measurement of</span> <span m='1888040'>distance to the
  goal.</span> </p><p><span m='1889325'>In which case, you can't do it.</span>
  </p><p><span m='1891090'>But if you've got it, you should use it.</span>
  </p><p><span m='1893980'>Oh, yeah, there's one more.</span> </p><p><span
  m='1895550'>And I've already given it away by having it on my chart.</span>
  </p><p><span m='1900020'>It's called Beam Search.</span> </p><p><span
  m='1901110'>And just as Hill Climbing is an analog of Depth-first</span> <span
  m='1906210'>Search, Beam Search is a complement or addition of an</span> <span
  m='1911770'>informing heuristic to Breadth-first Search.</span> </p><p><span
  m='1915140'>What you do is you start off just like</span> <span
  m='1916880'>Breadth-first Search.</span> </p><p><span m='1921190'>But you say
  I'm going to limit the number of paths I'm going</span> <span m='1925230'>to
  consider at any level to some small, fixed number,</span> <span
  m='1929550'>like, in this case, how about two.</span> </p><p><span
  m='1932530'>So, I'm going to say that I have a Beam of</span> <span
  m='1935970'>two for my Beam Search.</span> </p><p><span m='1945530'>Otherwise,
  I proceed just like Breadth-first</span> <span m='1949080'>Search, b, d, a,
  g.</span> </p><p><span m='1956230'>And now I've got that stupid thing where
  I'm duplicating my</span> <span m='1958880'>nodes, because I'm forgetting
  about the enqueued list.</span> </p><p><span m='1962110'>But to illustrate
  Beam Search, what about I'm going to do now</span> <span m='1964760'>is I'm
  going to take all these paths I've got at the second</span> <span
  m='1967080'>level, and I'm only going to keep the best two.</span>
  </p><p><span m='1969190'>That's my beam width.</span> </p><p><span
  m='1971130'>And the best two are the two that get closest to the goal.</span>
  </p><p><span m='1974220'>So, those four, b, c, a, and d, which two get</span>
  <span m='1978430'>closest to the goal?</span> </p><p><span m='1979945'>Now, b
  and d.</span> </p><p><span m='1982160'>These guys are trimmed off.</span>
  </p><p><span m='1985530'>I'm only keeping two at every level.</span>
  </p><p><span m='1988030'>Now, going down from b and d, I have, at the
  next</span> <span m='1991690'>level, c and g.</span> </p><p><span
  m='1994250'>And now I've found the goal.</span> </p><p><span m='1995860'>So,
  I'm done.</span> </p><p><span m='1997790'>We could do that here, too.</span>
  </p><p><span m='2002750'>We could choose a Beam Search, not bad.</span>
  </p><p><span m='2012350'>Let's see, let's try this thing from the
  middle.</span> </p><p><span m='2014940'>Let's slow my speed down a little
  bit.</span> </p><p><span m='2017530'>Now, are we going to see anything going
  off to the left</span> <span m='2019853'>like we did with ordinary
  Breadth-first Search?</span> </p><p><span m='2024950'>No, because it's
  smart.</span> </p><p><span m='2027640'>It doesn't say, I want to go to a place
  that's further away</span> <span m='2029780'>from my goal.</span> </p><p><span
  m='2033870'>Now, let's see, maybe we can go back to our algorithm now</span>
  <span m='2037940'>and talk about that enqueueing mechanism and</span> <span
  m='2047620'>talk about Hill Climbing.</span> </p><p><span m='2057170'>Can I
  use the same basic search mechanism, just change</span> <span m='2061060'>that
  one line again?</span> </p><p><span m='2062199'>Yes.</span> </p><p><span
  m='2063570'>How do I add new paths to the queue this time?</span> </p><p><span
  m='2067199'>Well, it's very much like Hill Climbing, right?</span>
  </p><p><span m='2069210'>I want to add them to the front but</span> <span
  m='2071880'>with one little flourish.</span> </p><p><span m='2072960'>What's
  the flourish?</span> </p><p><span m='2074210'>[? Krishna, ?] what do you
  think?</span> </p><p><span m='2076460'>Remember, I want to use my heuristic
  information.</span> </p><p><span m='2079500'>So, I not only add them to the
  front, but amongst the ones</span> <span m='2081900'>I'm adding to the front,
  what do I do?</span> </p><p><span m='2083705'>AUDIENCE:Check the
  distance?</span> </p><p><span m='2084980'>PATRICK WINSTON: Check the
  distance.</span> </p><p><span m='2085850'>And how do you arrange them?</span>
  </p><p><span m='2087120'>AUDIENCE:[? You ?]</span> <span m='2087958'>[? keep
  the ?] minimum [? first. ?]</span> <span m='2089219'>PATRICK WINSTON: Yeah,
  you can put the minimum</span> <span m='2091570'>first if you like.</span>
  </p><p><span m='2092290'>But let's sort them.</span> </p><p><span
  m='2093739'>We'll sort them, that will keep everything straight.</span>
  </p><p><span m='2096520'>So Hill Climbing is front-sorted.</span> </p><p><span
  m='2113370'>And, finally, how about Beam?</span> </p><p><span m='2114580'>What
  do we do with Beam Search to add them to the queue?</span> </p><p><span
  m='2117860'>Well, it doesn't matter where we add them, because all
  we're</span> <span m='2121175'>going to do is we're going to keep the w
  best.</span> </p><p><span m='2125840'>So, with Beam, we'll just abbreviate
  that by</span> <span m='2130270'>saying keep w best.</span> </p><p><span
  m='2141330'>Now, you have some of the basic</span> <span m='2143870'>searches
  in you're toolkit.</span> </p><p><span m='2146450'>There's one more that's
  sometimes talked about.</span> </p><p><span m='2148800'>We've got Depth,
  Breadth, Best, and Beam, one more is</span> <span m='2153710'>Best, Best-first
  Search.</span> </p><p><span m='2157720'>It's a variant where you say, I've got
  this tree.</span> </p><p><span m='2164250'>It's got a bunch of paths that
  terminate in leaves.</span> </p><p><span m='2168270'>Let me just always work
  on the leaf node that's</span> <span m='2170510'>closest to the goal.</span>
  </p><p><span m='2172790'>It can skip around a little bit from one place to
  another.</span> </p><p><span m='2175510'>Because as it pursues one path, it
  may not do very well</span> <span m='2178490'>in some other path quite
  distant.</span> </p><p><span m='2180350'>And the tree will become the best
  one.</span> </p><p><span m='2184710'>We've actually seen an instance of that
  in then</span> <span m='2188930'>integration program.</span> </p><p><span
  m='2190690'>It's capable of skipping all over the place, because it's</span>
  <span m='2192840'>always taking the easiest problem in the search tree,
  in</span> <span m='2197950'>the and/or tree, working on that.</span>
  </p><p><span m='2199940'>That's Best-first Search.</span> </p><p><span
  m='2203300'>You can do these sorts of things in</span> <span
  m='2204340'>continuous spaces, too.</span> </p><p><span m='2206780'>And you've
  done the mathematics of</span> <span m='2207830'>that in 1802 or
  something.</span> </p><p><span m='2212580'>But in continuous spaces, the Hill
  Climbing sometimes leads</span> <span m='2216190'>to problems or doesn't do
  very well.</span> </p><p><span m='2219470'>What kind of a problem can you
  encounter in a continuous</span> <span m='2224140'>space with Hill
  Climbing?</span> </p><p><span m='2228210'>Well, how would you do Hill Climbing
  in</span> <span m='2231726'>a continuous space?</span> </p><p><span
  m='2232840'>Let's say we're in the mountains, and a big</span> <span
  m='2236550'>fog has come up.</span> </p><p><span m='2238500'>We're trying to
  get to the top of the hill before</span> <span m='2240470'>we freeze to
  death.</span> </p><p><span m='2242720'>And we take a few steps north, a few
  steps east, west, and</span> <span m='2248006'>south using our compass.</span>
  </p><p><span m='2250380'>And we check to see which direction seems to be
  doing</span> <span m='2253510'>the best job of getting us moving
  upward.</span> </p><p><span m='2257220'>And that's our Hill Climbing approach,
  right?</span> </p><p><span m='2259140'>We have explored four directions we can
  go and pick</span> <span m='2263700'>the best one.</span> </p><p><span
  m='2265180'>And from there, we pick four, try all those, pick the best</span>
  <span m='2267940'>one, and away we go.</span> </p><p><span m='2268800'>We've
  got ourselves a Hill Climbing algorithm.</span> </p><p><span
  m='2271180'>What's wrong with it?</span> </p><p><span m='2273210'>Or what can
  be wrong with it?</span> </p><p><span m='2274710'>Sometimes it works just
  fine.</span> </p><p><span m='2276840'>Yes.</span> </p><p><span
  m='2277330'>SPEAKER 1: You might get stuck in a local maximum.</span>
  </p><p><span m='2279605'>PATRICK WINSTON: We might get stuck in a local
  maximum.</span> </p><p><span m='2282320'>So, problem letter a is that if this
  is your space, it may</span> <span m='2290590'>look like that.</span>
  </p><p><span m='2291450'>And you may get stuck on a local maximum.</span>
  </p><p><span m='2296640'>Is there any other kind of problem that can come
  up?</span> </p><p><span m='2306215'>Well, it all depends on what the space is
  like.</span> </p><p><span m='2308820'>Here's a problem where the space has
  local maxima.</span> </p><p><span m='2313230'>Now, a lot of people have been
  killed on Mt.</span> </p><p><span m='2315010'>Washington when the fog comes
  up.</span> </p><p><span m='2318000'>And they do freeze to death, why?</span>
  </p><p><span m='2323270'>The reason they freeze to death is the Hill
  Climbing</span> <span m='2327440'>fails them, and they can't get to the
  top</span> <span m='2329080'>to the ranger station.</span> </p><p><span
  m='2330960'>And the reason is that there are large lawns on the</span> <span
  m='2333660'>shoulders of Mt.</span> </p><p><span
  m='2334230'>Washington.</span> </p><p><span m='2334580'>It's quite
  flat.</span> </p><p><span m='2337140'>So, it's the telephone pole
  problem.</span> </p><p><span m='2342090'>That space looks like this.</span>
  </p><p><span m='2346120'>Well, this isn't what Mt.</span> </p><p><span
  m='2347040'>Washington looks like.</span> </p><p><span m='2347910'>But it's
  the telephone pole problem.</span> </p><p><span m='2350620'>So, when you're
  wandering around here, the idea of</span> <span m='2354370'>trying a few
  directions and picking the one that's best</span> <span m='2357720'>doesn't
  help any, because it's flat.</span> </p><p><span m='2360210'>That can be a
  problem with Hill Climbing.</span> </p><p><span m='2363090'>Now, there's one
  more problem with Hill Climbing that most</span> <span m='2366160'>people
  don't know about.</span> </p><p><span m='2369000'>But it works like
  this.</span> </p><p><span m='2374600'>This is a particularly acute problem
  in</span> <span m='2376210'>high dimensional spaces.</span> </p><p><span
  m='2377280'>I'll illustrate it here just in two.</span> </p><p><span
  m='2379110'>And I'm going to switch from a regular kind of view to a</span>
  <span m='2384370'>contour map.</span> </p><p><span m='2386570'>So, my contour
  map is going to betray the presence of a sharp</span> <span m='2394950'>bridge
  along the 45 degree line.</span> </p><p><span m='2404050'>Now you see how you
  can get in trouble there.</span> </p><p><span m='2407500'>You get in trouble,
  because if you take a step in each</span> <span m='2410280'>direction, every
  direction takes you downhill.</span> </p><p><span m='2413350'>And you think
  you're at the top.</span> </p><p><span m='2415610'>So, suppose you're right
  here and you go north.</span> </p><p><span m='2419826'>That takes you down
  over a contour line.</span> </p><p><span m='2424180'>If you go south, that
  also takes you down</span> <span m='2427550'>over contour lines.</span>
  </p><p><span m='2429000'>Likewise, going west and east all appear to be taking
  you</span> <span m='2433870'>down, whereas, in fact, you're climbing a
  ridge.</span> </p><p><span m='2438015'>And that contour line is the highest
  that I've shown.</span> </p><p><span m='2442270'>So, sometimes you can get
  fooled--</span> <span m='2443900'>not stuck, but fooled-- into thinking you're
  at the top</span> <span m='2446000'>when you're actually not.</span>
  </p><p><span m='2449830'>Now, this is a model something.</span> </p><p><span
  m='2454410'>This subject is about modeling intelligence.</span> </p><p><span
  m='2458130'>And this is a kind of algorithm you frequently need</span> <span
  m='2461680'>in order to build an intelligent system.</span> </p><p><span
  m='2464580'>But do we have any kind of Search happening in our heads?</span>
  </p><p><span m='2471650'>If we're going to model what goes on inside our
  heads, do</span> <span m='2473820'>we have to model any kind of searching in
  order to do the</span> <span m='2479850'>kinds of things that we humans
  do?</span> </p><p><span m='2484010'>I suppose so.</span> </p><p><span
  m='2484720'>Anytime we make a plan, we're actually evaluating a bunch
  of</span> <span m='2488250'>choices and seeing how they work.</span>
  </p><p><span m='2491340'>Let me see if I can illustrate it another way.</span>
  </p><p><span m='2497120'>This is a system that I showed you a little bit of
  last time.</span> </p><p><span m='2502260'>And, shoot, I might as well review
  one or two things here.</span> </p><p><span m='2511970'>I showed you a Macbeth
  story.</span> </p><p><span m='2513640'>This is the story I showed you.</span>
  </p><p><span m='2516220'>And if you had this in a humanities class, the
  simplest</span> <span m='2519500'>questions that might be asked is why did
  Macduff kill</span> <span m='2524620'>Macbeth down there at the bottom?</span>
  </p><p><span m='2528240'>Did I demonstrate the answering of questions
  last</span> <span m='2530960'>time, or just the development of the
  graph?</span> </p><p><span m='2533340'>I can't remember.</span> </p><p><span
  m='2534000'>But we'll do it again, anyway.</span> </p><p><span
  m='2536210'>This is somewhat stylized English.</span> </p><p><span
  m='2539895'>Just so you'll know, it doesn't have</span> <span m='2542570'>to
  be stylized English.</span> </p><p><span m='2543660'>This is English that's
  made available to the Genesis</span> <span m='2547330'>system by way of
  something called Story Workbench.</span> </p><p><span m='2551950'>There's no
  free lunch.</span> </p><p><span m='2552800'>Either you can use your human
  resources to rewrite the plot</span> <span m='2555740'>in third grade
  English.</span> </p><p><span m='2557540'>Or you can use your human resources
  to take a more</span> <span m='2559940'>natural, adult-type version of the
  story and decorate it with</span> <span m='2563240'>annotations that make it
  possible to absorb it.</span> </p><p><span m='2566510'>Just this summer, in a
  miracle of summer [? Europe, ?]</span> <span m='2569970'>[? Brit ?]</span>
  <span m='2570313'>[? van ?]</span> <span m='2570656'>[? Zijp-- ?]</span> <span
  m='2571280'>one of you--</span> <span m='2572790'>connected these two systems
  together.</span> </p><p><span m='2574630'>So, we can now work with stories
  that are expressed in</span> <span m='2577030'>pretty natural English.</span>
  </p><p><span m='2579140'>Everything in our system is expressed in
  English,</span> <span m='2582890'>including common sense knowledge--</span>
  <span m='2584230'>like if somebody kills you, you're dead--</span> <span
  m='2586810'>but more importantly, for today's illustration, that</span> <span
  m='2590880'>reflective level knowledge, that knowledge about what</span> <span
  m='2594920'>revenge is.</span> </p><p><span m='2597180'>Here you are.</span>
  </p><p><span m='2597790'>You're in the humanities class, and someone
  says,</span> <span m='2600280'>what's really going on in the story?</span>
  </p><p><span m='2601800'>Not the details of who kills whom, but is</span>
  <span m='2604420'>there a Pyrrhic victory?</span> </p><p><span
  m='2606560'>Does somebody have a success?</span> </p><p><span m='2608140'>Is
  there an act of revenge?</span> </p><p><span m='2610120'>These are all kinds
  of things you might be asked about in</span> <span m='2613380'>some kind of
  humanities class.</span> </p><p><span m='2620470'>So, let me fire up the
  genesis system.</span> </p><p><span m='2632150'>Pray for internet
  connectivity.</span> </p><p><span m='2638730'>Launch the system on a read of
  that Macbeth story that I</span> <span m='2642850'>showed you just a moment
  ago.</span> </p><p><span m='2645110'>At the moment, it's absorbing information
  about background</span> <span m='2648220'>knowledge, and about reflective
  level knowledge,</span> <span m='2649960'>and all that sort of thing.</span>
  </p><p><span m='2655780'>It's building itself this thing we call</span> <span
  m='2658010'>an elaboration graph.</span> </p><p><span m='2660100'>It's not
  quite there yet.</span> </p><p><span m='2661320'>It's still reading background
  knowledge.</span> </p><p><span m='2670750'>Now it's reading Macbeth.</span>
  </p><p><span m='2672140'>It's building it's elaboration graph, the same thing
  you saw</span> <span m='2676100'>last time, except not quite.</span>
  </p><p><span m='2679060'>Do you see that stuff down at the bottom?</span>
  </p><p><span m='2681570'>Those are higher level concepts that it's managed
  to</span> <span m='2684500'>find in the Macbeth story.</span> </p><p><span
  m='2686930'>So, its found a revenge.</span> </p><p><span m='2691010'>How did
  it do that?</span> </p><p><span m='2693510'>It searched.</span> </p><p><span
  m='2695560'>It had a description of what a revenge is, and it looked to</span>
  <span m='2698810'>see if that pattern was exhibited in</span> <span
  m='2701270'>the elaboration graph.</span> </p><p><span m='2703420'>So, in a
  combination of things that were said explicitly and</span> <span
  m='2705940'>things that were produced by knee-jerk if/then rules, the</span>
  <span m='2708650'>elaboration graph was sufficiently instantiated that</span>
  <span m='2711280'>the revenge pattern could be found.</span> </p><p><span
  m='2715580'>That's interesting, Pyrrhic victory is a little harder.</span>
  </p><p><span m='2719030'>You'd probably get an a if you said, oh, there's a
  Pyrrhic</span> <span m='2721070'>victory in here.</span> </p><p><span
  m='2724220'>There it is.</span> </p><p><span m='2726320'>So, I'll blow that up
  a little bit so you can</span> <span m='2727750'>see what that is.</span>
  </p><p><span m='2729870'>You know what a Pyrrhic victory is.</span>
  </p><p><span m='2732220'>It's a situation where everything seems to be
  going</span> <span m='2736190'>good at first, and then not so hot.</span>
  </p><p><span m='2741910'>So, Macbeth wants to be King down here.</span>
  </p><p><span m='2746580'>And eventually that leads to becoming King.</span>
  </p><p><span m='2748975'>But too bad for Macbeth, because eventually he
  gets</span> <span m='2751610'>killed in consequence.</span> </p><p><span
  m='2752540'>So, it's a Pyrrhic victory.</span> </p><p><span m='2754650'>All
  that produced by Search programs who are looking</span> <span
  m='2756580'>through this graph.</span> </p><p><span m='2758670'>Now once
  you've got the capability of doing that, of</span> <span m='2761030'>course,
  then you can find all sorts of things.</span> </p><p><span m='2764470'>And you
  can report them in English.</span> </p><p><span m='2765820'>But, more
  interestingly, you can answer questions.</span> </p><p><span m='2769510'>Why
  did Macbeth--</span> <span m='2772060'>it cares not a hoot about
  capitalization.</span> </p><p><span m='2779920'>ARTIFICIAL INTELLIGENCE: On a
  common sense level, it looks</span> <span m='2782160'>like Dr. Jekyll thinks
  Macduff killed Macbeth because Macbeth</span> <span m='2784690'>angered
  Macduff on a reflective level.</span> </p><p><span m='2786520'>It looks like
  Dr. Jekyll thinks Macduff killed Macbeth</span> <span m='2789200'>as part of
  acts of mistake, Pyrrhic victory, and revenge.</span> </p><p><span
  m='2792720'>PATRICK WINSTON: Pretty corny speech output.</span> </p><p><span
  m='2795410'>But you see the point.</span> </p><p><span m='2796620'>How did it
  get the stuff on the common sense level?</span> </p><p><span m='2800726'>The
  same way all those programs that build goal trees</span> <span
  m='2803420'>report, answers the questions.</span> </p><p><span
  m='2806600'>It's just looking locally around in the connections in</span>
  <span m='2808687'>the goal tree.</span> </p><p><span m='2810410'>How did it
  get the stuff on the reflective level?</span> </p><p><span m='2812880'>By
  reporting on the searches that produced information--</span> <span
  m='2819240'>it does that by looking for higher level thoughts about</span>
  <span m='2823670'>its own thoughts and reporting in which of those higher
  level</span> <span m='2827540'>thoughts the incident we asked about actually
  occurs.</span> </p><p><span m='2832995'>So, let's see, just for fun, we might
  be interested in why</span> <span m='2837020'>Macbeth murdered Duncan.</span>
  </p><p><span m='2840660'>Wouldn't this be handy if you hadn't actually read
  the play,</span> <span m='2842600'>and here it is, you've got to write that
  paper?</span> </p><p><span m='2845276'>ARTIFICIAL INTELLIGENCE: On a common
  sense</span> <span m='2846400'>level, it looks like--</span> <span
  m='2847790'>PATRICK WINSTON: I'll pull the plug on that, because that's</span>
  <span m='2849150'>just annoying.</span> </p><p><span m='2852768'>Yeah, pretty
  good, Macbeth wants to be King, and Duncan</span> <span m='2856340'>is the
  King.</span> </p><p><span m='2857620'>Let's see, why did Macbeth become
  King?</span> </p><p><span m='2871820'>Oh, it won't answer the question</span>
  <span m='2873450'>unless I spell it right.</span> </p><p><span m='2881670'>I
  wouldn't be able to show that to you until last spring.</span> </p><p><span
  m='2883990'>In fact, I wouldn't have been able to show you this today</span>
  <span m='2887480'>until last week with a tweak this morning.</span>
  </p><p><span m='2890760'>Because we've just now connected the language
  output</span> <span m='2895090'>to, of course, [? Cass's ?]</span> <span
  m='2897910'>parser system, which is running in reverse, in order</span> <span
  m='2899910'>to generate that English.</span> </p><p><span m='2901040'>So,
  that's something that has never before been seen by any</span> <span
  m='2903660'>eyes but me.</span> </p><p><span m='2905830'>So, that will
  conclude what we have to do today.</span> </p><p></p>
uid: dc703721c6e2ddf8ecf3384b2ca0f006
type: course
layout: video
---
