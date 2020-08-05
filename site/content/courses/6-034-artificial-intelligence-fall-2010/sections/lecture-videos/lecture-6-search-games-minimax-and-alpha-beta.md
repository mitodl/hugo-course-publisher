---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, we consider strategies for
  adversarial games such as chess.  We discuss the minimax algorithm, and how
  alpha-beta pruning improves its efficiency.  We then examine progressive
  deepening, which ensures that some answer is always available.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: STjW3eH0Cik
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: Video-YouTube-Stream
    type: Video
    uid: 19ab6daf8bf1f721fd20cf75f0c8fd1c
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-6-search-games-minimax/id765641080?i=194470736
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: Video-iTunes U-MP4
    type: Video
    uid: 09a9056d518aeb55c7a781f2e33a1bbc
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec06_300k.mp4'
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: Video-Internet Archive-MP4
    type: Video
    uid: 080c4bde3fe8f40c75c74f5ddda8274d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/STjW3eH0Cik/default.jpg'
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 96e438643c3938134bfe4bcf6c9a25bf
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: STjW3eH0Cik
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7022f77ab408d9390ff026fe695991c8
  - id: STjW3eH0Cik.srt
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-6-search-games-minimax-and-alpha-beta/STjW3eH0Cik.srt
    title: 3play caption file
    type: null
    uid: e255e1afb44f6e1c623b0cdcdf07271a
  - id: STjW3eH0Cik.pdf
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-6-search-games-minimax-and-alpha-beta/STjW3eH0Cik.pdf
    title: 3play pdf file
    type: null
    uid: 7524b662aa86938e45c10c74d3a1ad41
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 42a3c195e0c4f7c0605eeda444c8c6b5
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b280315e784ecd65c07fac3940bddbbf
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: d96788957dd02eaffd2c65ff363e428c
inline_embed_id: '20006790lecture6:search:games,minimax,andalpha-beta8288158'
order_index: 69
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-6-search-games-minimax-and-alpha-beta
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-6-search-games-minimax-and-alpha-beta
title: 'Lecture 6: Search: Games, Minimax, and Alpha-Beta'
transcript: >-
  <p><span m='8928'>SPEAKER 1: It was about 1963 when a noted philosopher
  here</span> <span m='12580'>at MIT, named Hubert Dreyfus--</span> <span
  m='20642'>Hubert Dreyfus wrote a paper in about 1963 in which he had</span>
  <span m='30330'>a heading titled, "Computers Can't Play Chess." Of
  course,</span> <span m='37610'>he was subsequently invited over to the
  artificial</span> <span m='40110'>intelligence laboratory to play the</span>
  <span m='41670'>Greenblatt chess machine.</span> </p><p><span m='43420'>And,
  of course, he lost.</span> </p><p><span m='46650'>Whereupon Seymour Pavitt
  wrote a rebuttal to Dreyfus' famous</span> <span m='52200'>paper, which had a
  subject heading, "Dreyfus Can't Play</span> <span m='56240'>Chess
  Either."</span> <span m='59840'>But in a strange sense, Dreyfus might have
  been right</span> <span m='62390'>and would have been right if he were to have
  said computers</span> <span m='67000'>can't play chess the way humans play
  chess yet.</span> </p><p><span m='71690'>In any case, around about 1968 a
  chess master named David</span> <span m='76630'>Levy bet noted founder of
  artificial intelligence John</span> <span m='83000'>McCarthy that no computer
  would beat the world champion</span> <span m='85440'>within 10 years.</span>
  </p><p><span m='87730'>And five years later, McCarthy gave up, because it
  had</span> <span m='91740'>already become clear that no computer would win in
  a way</span> <span m='96509'>that McCarthy wanted it to win, that is to say by
  playing</span> <span m='99590'>chess the way humans play chess.</span>
  </p><p><span m='102960'>But then 20 years after that in 1997, Deep Blue beat
  the</span> <span m='108160'>world champion, and chess suddenly became
  uninteresting.</span> </p><p><span m='114910'>But we're going to talk about
  games today, because there are</span> <span m='118690'>elements of game-play
  that do model some of the things that</span> <span m='121720'>go on in our
  head.</span> </p><p><span m='123750'>And if they don't model things that go on
  in our head, they</span> <span m='126050'>do model some kind of
  intelligence.</span> </p><p><span m='128610'>And if we're to have a general
  understanding of what</span> <span m='130490'>intelligence is all about, we
  have to understand that kind</span> <span m='133690'>of intelligence,
  too.</span> </p><p><span m='136000'>So, we'll start out by talking about
  various ways that we</span> <span m='138790'>might design a computer program
  to</span> <span m='140329'>play a game like chess.</span> </p><p><span
  m='142360'>And we'll conclude by talking a little bit about what Deep</span>
  <span m='146930'>Blue adds to the mix other than tremendous speed.</span>
  </p><p><span m='152460'>So, that's our agenda.</span> </p><p><span
  m='154300'>By the end of the hour, you'll understand and be able to</span>
  <span m='157320'>write your own Deep Blue if you feel like it.</span>
  </p><p><span m='160290'>First, we want to talk about how it might be possible
  for a</span> <span m='164270'>computer to play chess.</span> </p><p><span
  m='165590'>Let's talk about several approaches</span> <span m='168250'>that
  might be possible.</span> </p><p><span m='170220'>Approach number one is that
  the machine might make a</span> <span m='173860'>description of the board the
  same way a human would; talk</span> <span m='176980'>about pawn structure,
  King safety, whether it's a good</span> <span m='180000'>time to castle, that
  sort of thing.</span> </p><p><span m='181960'>So, it would be analysis and
  perhaps some strategy mixed up</span> <span m='192130'>with some
  tactics.</span> </p><p><span m='195870'>And all that would get mixed up and,
  finally, result in</span> <span m='200190'>some kind of move.</span>
  </p><p><span m='202710'>If this is the game board, the next thing to do would
  be</span> <span m='207450'>determined by some process like that.</span>
  </p><p><span m='209400'>And the trouble is no one knows how to do it.</span>
  </p><p><span m='213730'>And so in that sense, Dreyfus is right.</span>
  </p><p><span m='215180'>None the game playing programs today incorporate any
  of that</span> <span m='218829'>kind of stuff.</span> </p><p><span
  m='221350'>And since nobody knows how to do that, we</span> <span
  m='223600'>can't talk about it.</span> </p><p><span m='224420'>So we can talk
  about other ways, though,</span> <span m='225610'>that we might try.</span>
  </p><p><span m='226829'>For example, we can have if-then rules.</span>
  </p><p><span m='235820'>How would that work?</span> </p><p><span
  m='236740'>That would work this way.</span> </p><p><span m='237840'>You look
  at the board, represented by this node here,</span> <span m='241770'>and you
  say, well, if it's possible to move the Queen</span> <span m='249970'>pawn
  forward by one, then do that.</span> </p><p><span m='253390'>So, it doesn't do
  any of evaluation of the board.</span> </p><p><span m='256010'>It doesn't try
  anything.</span> </p><p><span m='259290'>It just says let me look at the board
  and select a move on</span> <span m='262360'>that basis.</span> </p><p><span
  m='264170'>So, that would be a way of approaching a game</span> <span
  m='268130'>situation like this.</span> </p><p><span m='270760'>Here's the
  situation.</span> </p><p><span m='272430'>Here are the possible moves.</span>
  </p><p><span m='274060'>And one is selected on the basis of an</span> <span
  m='276130'>if-then rule like so.</span> </p><p><span m='280180'>And nobody can
  make a very strong chess player</span> <span m='282195'>that works like
  that.</span> </p><p><span m='283350'>Curiously enough, someone has made a
  pretty good checkers</span> <span m='286100'>playing program that works like
  that.</span> </p><p><span m='289326'>It checks to see what moves are available
  on the board,</span> <span m='293110'>ranks them, and picks the highest one
  available.</span> </p><p><span m='297290'>But, in general, that's not a very
  good approach.</span> </p><p><span m='298920'>It's not very powerful.</span>
  </p><p><span m='299860'>You couldn't make it--</span> <span m='301670'>well,
  when I say, couldn't, it means I can't think of any way</span> <span
  m='303900'>that you could make a strong chess playing</span> <span
  m='305530'>program that way.</span> </p><p><span m='309260'>So, the third way
  to do this is to look ahead and evaluate.</span> </p><p><span m='324090'>What
  that means is you look ahead like so.</span> </p><p><span m='326410'>You see
  all the possible consequences of moves, and you</span> <span m='329790'>say,
  which of these board situations is best for me?</span> </p><p><span
  m='333740'>So, that would be an approach that comes in here like so and</span>
  <span m='337210'>says, which one of those three situations is best?</span>
  </p><p><span m='341780'>And to do that, we have to have some way of
  evaluating</span> <span m='345990'>the situation deciding which of those is
  best.</span> </p><p><span m='350770'>Now, I want to do a little, brief aside,
  because I want to</span> <span m='353710'>talk about the mechanisms that are
  popularly used to do that</span> <span m='356670'>kind of evaluation.</span>
  </p><p><span m='359420'>In the end, there are lots of features of the
  chessboard.</span> </p><p><span m='362560'>Let's call them f1, f2, and so
  on.</span> </p><p><span m='368830'>And we might form some function of those
  features.</span> </p><p><span m='372380'>And that, overall, is called the
  static value.</span> </p><p><span m='376190'>So, it's static because you're
  not exploring any consequences</span> <span m='379400'>of what might
  happen.</span> </p><p><span m='380250'>You're just looking at the board as it
  is, checking the</span> <span m='382525'>King's safety, checking the pawn
  structure.</span> </p><p><span m='385080'>Each of those produces a number fed
  into this function,</span> <span m='388440'>out comes a value.</span>
  </p><p><span m='390380'>And that is a value of the board seen from your</span>
  <span m='393960'>perspective.</span> </p><p><span m='396159'>Now, normally,
  this function, g, is reduced to a linear</span> <span
  m='402370'>polynomial.</span> </p><p><span m='403990'>So, in the end, the most
  popular kind of way of forming</span> <span m='407330'>a static value is to
  take f1, multiply it times some</span> <span m='412120'>constant, c1, add c2,
  multiply it times f2.</span> </p><p><span m='422560'>And that is a linear
  scoring polynomial.</span> </p><p><span m='438880'>So, we could use that
  function to produce numbers from each</span> <span m='441610'>of these things
  and then pick the highest number.</span> </p><p><span m='444150'>And that
  would be a way of playing the game.</span> </p><p><span m='446640'>Actually, a
  scoring polynomial is a little bit</span> <span m='449220'>more than we
  need.</span> </p><p><span m='449940'>Because all we really need is a method
  that looks at those</span> <span m='453909'>three boards and says, I like this
  one best.</span> </p><p><span m='456990'>It doesn't have to rank them.</span>
  </p><p><span m='458490'>It doesn't have to give them numbers.</span>
  </p><p><span m='460340'>All it has to do is say which one it likes
  best.</span> </p><p><span m='463500'>So, one way of doing that is to use a
  linear scoring</span> <span m='465690'>polynomial.</span> </p><p><span
  m='466240'>But it's not the only way of doing that.</span> </p><p><span
  m='469940'>So, that's number two and number three.</span> </p><p><span
  m='473980'>But now what else might we do?</span> </p><p><span m='478409'>Well,
  if we reflect back on some of the searches we talked</span> <span
  m='481210'>about, what's the base case against which everything else</span>
  <span m='484320'>is compared much the way of doing search that doesn't</span>
  <span m='487800'>require any intelligence, just brute force?</span>
  </p><p><span m='490910'>We could use the British Museum algorithm and
  simply</span> <span m='493630'>evaluate the entire tree of possibilities; I
  move, you</span> <span m='497770'>move, I move, you move, all the way down
  to--</span> <span m='503370'>what?--</span> <span m='505726'>maybe 100, 50
  moves.</span> </p><p><span m='508800'>You do 50 things.</span> </p><p><span
  m='509770'>I do 50 things.</span> </p><p><span m='511750'>So, before we can
  decide if that's a good idea or not, we</span> <span m='515500'>probably ought
  to develop some vocabulary.</span> </p><p><span m='530160'>So, consider this
  tree of moves.</span> </p><p><span m='538000'>There will be some number of
  choices</span> <span m='542530'>considered at each level.</span> </p><p><span
  m='544285'>And there will be some number of levels.</span> </p><p><span
  m='547250'>So, the standard language for this as we call this the</span> <span
  m='549910'>branching factor.</span> </p><p><span m='558880'>And in this
  particular case, b is equal to 3.</span> </p><p><span m='563340'>This is the
  depth of the tree.</span> </p><p><span m='570250'>And, in this case, d is
  two.</span> </p><p><span m='574280'>So, now that produces a certain number of
  terminal or</span> <span m='577750'>leaf nodes.</span> </p><p><span
  m='584060'>How many of those are there?</span> </p><p><span m='589020'>Well,
  that's pretty simple computation.</span> </p><p><span m='590170'>It's just b
  to the d.</span> </p><p><span m='591840'>Right, Christopher, b to the
  d?</span> </p><p><span m='595330'>So, if you have b to the d at this level,
  you have one.</span> </p><p><span m='601660'>b to the d at this level, you
  have b.</span> </p><p><span m='604670'>b to the d at this level, you have [? d
  ?] squared.</span> </p><p><span m='609020'>So, b to the d, in this particular
  case, is 9.</span> </p><p><span m='617090'>So, now we can use this vocabulary
  that we've</span> <span m='619310'>developed to talk about whether it's
  reasonable to</span> <span m='621770'>just do the British Museum algorithm, be
  done with it,</span> <span m='624990'>forget about chess, and go home.</span>
  </p><p><span m='628500'>Well, let's see.</span> </p><p><span m='632450'>It's
  pretty deep down there.</span> </p><p><span m='635050'>If we think about
  chess, and we think about a standard game</span> <span m='639290'>which each
  person does 50 things, that</span> <span m='641970'>gives a d about
  100.</span> </p><p><span m='645080'>And if you think about the branching
  factor in chess,</span> <span m='647490'>it's generally presumed to be,
  depending on the stage of the</span> <span m='650430'>game and so on and so
  forth, it varies, but it might</span> <span m='652870'>average around 14 or
  15.</span> </p><p><span m='655940'>If it were just 10, that would be 10 to the
  100th.</span> </p><p><span m='659620'>But it's a little more than that,
  because the branching</span> <span m='661310'>factor is more than 10.</span>
  </p><p><span m='663930'>So, in the end, it looks like, according to Claude
  Shannon,</span> <span m='669300'>there are about 10 to the 120th leaf nodes
  down there.</span> </p><p><span m='676160'>And if you're going to go to a
  British Museum treatment of</span> <span m='678930'>this tree, you'd have to
  do 10 to the 120th static</span> <span m='681990'>evaluations down there at
  the bottom if you're going to see</span> <span m='688310'>which one of the
  moves is best at the top.</span> </p><p><span m='692080'>Is that a reasonable
  number?</span> </p><p><span m='693850'>It didn't used to seem
  practicable.</span> </p><p><span m='698622'>It used to seem impossible.</span>
  </p><p><span m='701460'>But now we've got cloud computing and
  everything.</span> </p><p><span m='703400'>And maybe we could actually do
  that, right?</span> </p><p><span m='708180'>What do you think, Vanessa, can
  you do that, get enough</span> <span m='711440'>computers going in the
  cloud?</span> </p><p><span m='714940'>No?</span> </p><p><span
  m='715385'>You're not sure?</span> </p><p><span m='717150'>Should we work it
  out?</span> </p><p><span m='719350'>Let's work it out.</span> </p><p><span
  m='720520'>I'll need some help, especially from any of you who</span> <span
  m='724170'>are studying cosmology.</span> </p><p><span m='727700'>So, we'll
  start with how many atoms are</span> <span m='729470'>there in the
  universe?</span> </p><p><span m='733580'>Volunteers?</span> </p><p><span
  m='734890'>10 to the--</span> <span m='735790'>SPEAKER 2: 10 to the
  38th?</span> </p><p><span m='736792'>SPEAKER 1: No, no, 10 to the 38th has
  been offered.</span> </p><p><span m='739300'>That's why it's way too
  low.</span> </p><p><span m='742376'>The last time I looked, it was about 10 to
  the 80th atoms in</span> <span m='745760'>the universe.</span> </p><p><span
  m='753940'>The next thing I'd like to know is how many seconds are</span>
  <span m='755900'>there in a year?</span> </p><p><span m='757232'>It's a good
  number have memorized.</span> </p><p><span m='761200'>That number is
  approximately pi times 10 to the seventh.</span> </p><p><span m='773350'>So,
  how many nanoseconds in a second?</span> </p><p><span m='776190'>That gives us
  10 to the ninth.</span> </p><p><span m='783410'>At last, how many years are
  there in the</span> <span m='786670'>history of the universe?</span>
  </p><p><span m='790040'>SPEAKER 3: [INAUDIBLE].</span> </p><p><span
  m='792480'>14.7 billion.</span> </p><p><span m='795790'>SPEAKER 1: She offers
  something on the order of 10</span> <span m='798150'>billion, maybe 14
  billion.</span> </p><p><span m='801960'>But we'll say 10 billion to make our
  calculation simple.</span> </p><p><span m='806130'>That's 10 to the 10th
  years.</span> </p><p><span m='811630'>If we will add that up, 80, 90, plus 16,
  that's 10 to the</span> <span m='818300'>106th nanoseconds in the history of
  the universe.</span> </p><p><span m='830540'>Multiply it times the number of
  atoms in the universe.</span> </p><p><span m='832580'>So, if all of the atoms
  in the universe were doing static</span> <span m='836900'>evaluations at
  nanosecond speeds since the beginning of</span> <span m='840740'>the Big Bang,
  we'd still be 14 orders of magnitudes short.</span> </p><p><span
  m='846640'>So, it'd be a pretty good cloud.</span> </p><p><span m='848120'>It
  would have to harness together lots of universes.</span> </p><p><span
  m='855080'>So, the British Museum algorithm is</span> <span m='856660'>not
  going to work.</span> </p><p><span m='875650'>No good.</span> </p><p><span
  m='877700'>So, what we're going to have to do is we're going to have</span>
  <span m='879460'>to put some things together and hope for the best.</span>
  </p><p><span m='883090'>So, the fifth way is the way we're actually going to
  do it.</span> </p><p><span m='886680'>And what we're going to do is we're
  going to look ahead, not</span> <span m='893580'>just one level, but as far as
  possible.</span> </p><p><span m='907120'>We consider, not only the situation
  that we've developed</span> <span m='911460'>here, but we'll try to push that
  out as far as we can and</span> <span m='915390'>look at these static values
  of the leaf nodes down here and</span> <span m='921430'>somehow use that as a
  way of playing the game.</span> </p><p><span m='924970'>So, that is number
  five.</span> </p><p><span m='927885'>And number four is going all the way down
  there.</span> </p><p><span m='930830'>And this, in the end, is all that we can
  do.</span> </p><p><span m='934850'>This idea is multiply invented most notably
  by Claude Shannon</span> <span m='945240'>and also by Alan Turing, who, I
  found out from a friend of</span> <span m='951150'>mine, spent a lot a lunch
  time conversations talking with</span> <span m='956460'>each other about how a
  computer might play chess</span> <span m='961130'>against the future when
  there would be computers.</span> </p><p><span m='964850'>So, Donald, Mickey
  and Alan Turing also invented this over</span> <span m='968300'>lunch while
  they were taking some time off from cracking</span> <span m='972010'>the
  German codes.</span> </p><p><span m='974730'>Well, what is the method?</span>
  </p><p><span m='977710'>I want to illustrate the method with the
  simplest</span> <span m='980290'>possible tree.</span> </p><p><span
  m='981700'>So, we're going to have a branching factor of 2 not 14.</span>
  </p><p><span m='984600'>And we're going to have a depth of 2 not
  something</span> <span m='987920'>highly serious.</span> </p><p><span
  m='992170'>Here's the game tree.</span> </p><p><span m='994360'>And there are
  going to be some numbers</span> <span m='995510'>down here at the
  bottom.</span> </p><p><span m='999430'>And these are going to be the value of
  the board from the</span> <span m='1002390'>perspective of the player at the
  top.</span> </p><p><span m='1006060'>Let us say that the player at the top
  would like to drive</span> <span m='1008210'>the play as much as possible
  toward the big numbers.</span> </p><p><span m='1012330'>So, we're going to
  call that player the maximizing player.</span> </p><p><span m='1018440'>He
  would like to get over here to the 8, because that's the</span> <span
  m='1021270'>biggest number.</span> </p><p><span m='1022940'>There's another
  player, his opponent, which we'll call the</span> <span m='1024740'>minimizing
  player.</span> </p><p><span m='1026440'>And he's hoping that the play will go
  down to the board</span> <span m='1030108'>situation that's as small as
  possible.</span> </p><p><span m='1031950'>Because his view is the opposite of
  the maximizing</span> <span m='1034930'>player, hence the name minimax.</span>
  </p><p><span m='1039040'>But how does it work?</span> </p><p><span
  m='1040770'>Do you see which way the play is going to go?</span> </p><p><span
  m='1044520'>How do you decide which way the play is going to go?</span>
  </p><p><span m='1047990'>Well, it's not obvious at a glance.</span>
  </p><p><span m='1050650'>Do you see which way it's going to go?</span>
  </p><p><span m='1053230'>It's not obvious to the glance.</span> </p><p><span
  m='1054980'>But if we do more than a glance, if we look at the</span> <span
  m='1059160'>situation from the perspective of the minimizing player
  here</span> <span m='1062150'>at the middle level, it's pretty clear that if
  the</span> <span m='1064360'>minimizing player finds himself in that
  situation,</span> <span m='1068570'>he's going to choose to go that
  way.</span> </p><p><span m='1071480'>And so the value of this situation, from
  the</span> <span m='1076830'>perspective of the minimizing player, is
  2.</span> </p><p><span m='1080652'>He'd never go over there to the 7.</span>
  </p><p><span m='1083480'>Similarly, if the minimizing player is over here with
  a</span> <span m='1087200'>choice between going toward a 1 or toward an 8,
  he'll</span> <span m='1089700'>obviously go toward a 1.</span> </p><p><span
  m='1091900'>And so the value of that board situation, from the</span> <span
  m='1096850'>perspective of the minimizing player, is 1.</span> </p><p><span
  m='1100340'>Now, we've taken the scores down here at the bottom of the</span>
  <span m='1102550'>tree, and we back them up one level.</span> </p><p><span
  m='1105710'>And you see how we can just keep doing this?</span> </p><p><span
  m='1108840'>Now the maximizing player can see that if he goes to the</span>
  <span m='1112160'>left, he gets a score of 2.</span> </p><p><span
  m='1114605'>If he goes to the right, he only gets a score of 1.</span>
  </p><p><span m='1117360'>So, he's going to go to the left.</span> </p><p><span
  m='1119800'>So, overall, then, the maximizing player is going to</span> <span
  m='1122980'>have a 2 as the perceived value of that situation there</span>
  <span m='1128790'>at the top.</span> </p><p><span m='1130740'>That's the
  minimax algorithm.</span> </p><p><span m='1131790'>It's very simple.</span>
  </p><p><span m='1133390'>You go down to the bottom of the tree, you compute
  static</span> <span m='1136250'>values, you back them up level by level, and
  then you decide</span> <span m='1140570'>where to go.</span> </p><p><span
  m='1141585'>And in this particular situation, the maximizer goes</span> <span
  m='1145390'>to the left.</span> </p><p><span m='1145890'>And the minimizer
  goes to the left, too, so the play ends up</span> <span m='1148770'>here, far
  short of the 8 that the maximizer wanted and less</span> <span
  m='1153680'>than the 1 that the minimizer wanted.</span> </p><p><span
  m='1155460'>But this is an adversarial game.</span> </p><p><span
  m='1157100'>You're competing with each other.</span> </p><p><span
  m='1158230'>So, you don't expect to get what you want, right?</span>
  </p><p><span m='1163930'>So, maybe we ought to see if we can make that
  work.</span> </p><p><span m='1173320'>There's a game tree.</span> </p><p><span
  m='1174100'>Do you see how it goes?</span> </p><p><span m='1178630'>Let's see
  if the system can figure it out.</span> </p><p><span m='1182730'>There it
  goes, crawling its way through the tree.</span> </p><p><span m='1186350'>This
  is a branching factor of 2, just like our sample, but</span> <span
  m='1189310'>now four levels.</span> </p><p><span m='1191540'>You can see that
  it's got quite a lot of work to do.</span> </p><p><span m='1193700'>That's 2
  to the fourth, one, two, three, four, 2 to the</span> <span
  m='1201175'>fourth, 16 static evaluations to do.</span> </p><p><span
  m='1206790'>So, it found the answer.</span> </p><p><span m='1207850'>But it's
  a lot of work.</span> </p><p><span m='1209120'>We could get a new tree and
  restart it, maybe speed it up.</span> </p><p><span m='1217960'>There is goes
  down that way, get a new tree.</span> </p><p><span m='1222310'>Those are just
  random numbers.</span> </p><p><span m='1223270'>So, each time it's going to
  find a different path through</span> <span m='1225360'>the tree according to
  the numbers that it's generated.</span> </p><p><span m='1230330'>Now, 16 isn't
  bad.</span> </p><p><span m='1232070'>But if you get down there around 10
  levels deep and your</span> <span m='1234620'>branching factor is 14, well, we
  know those numbers get</span> <span m='1236850'>pretty awful pretty bad,
  because the number of static</span> <span m='1239290'>evaluations to do down
  there at the bottom</span> <span m='1241105'>goes as b to the d.</span>
  </p><p><span m='1243830'>It's exponential.</span> </p><p><span m='1247260'>And
  time has shown, if you get down about seven or eight</span> <span
  m='1250350'>levels, you're a jerk.</span> </p><p><span m='1251845'>And if you
  get down about 15 or 16 levels, you beat the</span> <span m='1254450'>world
  champion.</span> </p><p><span m='1255900'>So, you'd like to get as far down in
  the tree as possible.</span> </p><p><span m='1258630'>Because when you get as
  far down into the tree as</span> <span m='1262480'>possible, what happens is
  as these that these crude</span> <span m='1264510'>measures of bored quality
  begin to clarify.</span> </p><p><span m='1269720'>And, in fact, when you get
  far enough, the only thing that</span> <span m='1271910'>really counts is
  piece count, one of those features.</span> </p><p><span m='1275890'>If you get
  far enough, piece count and a few other things</span> <span m='1278750'>will
  give you a pretty good idea of what to do if you get</span> <span
  m='1281150'>far enough.</span> </p><p><span m='1283990'>But getting far enough
  can be a problem.</span> </p><p><span m='1285510'>So, we want to do everything
  we can to</span> <span m='1287400'>get as far as possible.</span> </p><p><span
  m='1288935'>We want to pull out every trick we can find to get as</span> <span
  m='1291970'>far as possible.</span> </p><p><span m='1293500'>Now, you remember
  when we talked about branching down,</span> <span m='1298450'>we knew that
  there were some things that we could do that</span> <span m='1299955'>would
  cut off whole portions of the search tree.</span> </p><p><span m='1303330'>So,
  what we'd like to do is find something analogous to</span> <span
  m='1305380'>this world of games, so we cut off whole portions of this</span>
  <span m='1308270'>search tree, so we don't have to look at</span> <span
  m='1309880'>those static values.</span> </p><p><span m='1312180'>What I want
  to do is I want to come back and redo this thing.</span> </p><p><span
  m='1315330'>But this time, I'm going to compute the static</span> <span
  m='1316780'>values one at a time.</span> </p><p><span m='1319030'>I've got the
  same structure in the tree.</span> </p><p><span m='1323190'>And just as
  before, I'm going to assume that the top player</span> <span m='1326110'>wants
  to go toward the maximum values, and the next player</span> <span
  m='1328490'>wants to go toward the minimum values.</span> </p><p><span
  m='1330380'>But none of the static values have been computed yet.</span>
  </p><p><span m='1333950'>So, I better start computing them.</span>
  </p><p><span m='1336770'>That's the first one I find, 2.</span> </p><p><span
  m='1339226'>Now, as soon as I see that 2, as soon as the minimizer sees</span>
  <span m='1341840'>that 2, the minimizer knows that the value of this
  node</span> <span m='1345580'>can't be any greater than 2.</span> </p><p><span
  m='1347390'>Because he'll always choose to go down this way if this</span>
  <span m='1350020'>branch produces a bigger number.</span> </p><p><span
  m='1352390'>So, we can say that the minimizer is assured already</span> <span
  m='1355910'>that the score there will be equal to or less than 2.</span>
  </p><p><span m='1360580'>Now, we go over and compute the next number.</span>
  </p><p><span m='1363580'>There's a 7.</span> </p><p><span m='1364980'>Now, I
  know this is exactly equal to 2, because he'll</span> <span m='1366850'>never
  go down toward a 7.</span> </p><p><span m='1369570'>As soon as the minimizer
  says equal to 2, the maximizer</span> <span m='1372420'>says, OK, I can do
  equal to or greater than 2.</span> </p><p><span m='1380560'>One, minimizer
  says equal to or less than 1.</span> </p><p><span m='1386010'>Now what?</span>
  </p><p><span m='1388142'>Did you prepare those 2 numbers?</span> </p><p><span
  m='1392275'>The maximizer knows that if he goes down here, he can't do</span>
  <span m='1396360'>better than 1.</span> </p><p><span m='1397990'>He already
  knows if he goes over here, he an get a 2.</span> </p><p><span
  m='1403510'>It's as if this branch doesn't even exist.</span> </p><p><span
  m='1407850'>Because the maximizer would never choose to go down there.</span>
  </p><p><span m='1411840'>So, you have to see that.</span> </p><p><span
  m='1413160'>This is the important essence of the notion the alpha-beta</span>
  <span m='1418330'>algorithm, which is a layering on top of minimax that
  cuts</span> <span m='1421630'>off large sections of the search tree.</span>
  </p><p><span m='1424870'>So, one more time.</span> </p><p><span
  m='1427420'>We've developed a situation so we know that the maximizer</span>
  <span m='1429620'>gets a 2 going down to the left, and he sees that if
  he</span> <span m='1434720'>goes down to the right, he can't do better than
  1.</span> </p><p><span m='1438000'>So, he says to himself, it's as if that
  branch doesn't</span> <span m='1441420'>exist and the overall score is
  2.</span> </p><p><span m='1445230'>And it doesn't matter what that static
  value is.</span> </p><p><span m='1448980'>It can be 8, as it was, it can be
  plus 1,000.</span> </p><p><span m='1453350'>It doesn't matter.</span>
  </p><p><span m='1454015'>It can be minus 1,000.</span> </p><p><span
  m='1456040'>Or it could be plus infinity or minus infinity.</span>
  </p><p><span m='1459420'>It doesn't matter, because the maximizer will
  always</span> <span m='1463620'>go the other way.</span> </p><p><span
  m='1466470'>So, that's the alpha-beta algorithm.</span> </p><p><span
  m='1469270'>Can you guess why it's called the alpha-beta algorithm?</span>
  </p><p><span m='1472300'>Well, because in the algorithm there are two
  parameters,</span> <span m='1474210'>alpha and beta.</span> </p><p><span
  m='1477080'>So, it's important to understand that alpha-beta is</span> <span
  m='1478750'>not an alternative to minimax.</span> </p><p><span
  m='1481810'>It's minimax with a flourish.</span> </p><p><span m='1484230'>It's
  something layered on top like we layered things on top</span> <span
  m='1487610'>of branch and bound to make it more efficient.</span> </p><p><span
  m='1489605'>We layer stuff on top of minimax to</span> <span m='1492290'>make
  it more efficient.</span> </p><p><span m='1495300'>As you say to me, well,
  that's a pretty easy example.</span> </p><p><span m='1497250'>And it
  is.</span> </p><p><span m='1497700'>So, let's try a little bit more complex
  one.</span> </p><p><span m='1507330'>This is just to see if I can do it
  without screwing up.</span> </p><p><span m='1512220'>The reason I do one
  that's complex is not just to show</span> <span m='1515320'>how tough I am in
  front of a large audience.</span> </p><p><span m='1517640'>But, rather,
  there's certain points of interest that only</span> <span m='1520450'>occur in
  a tree of depth four or greater.</span> </p><p><span m='1524030'>That's the
  reason for this example.</span> </p><p><span m='1526010'>But work with me and
  let's see if we can work</span> <span m='1528120'>our way through it.</span>
  </p><p><span m='1529670'>What I'm going to do is I'll circle the numbers that
  we</span> <span m='1534810'>actually have to compute.</span> </p><p><span
  m='1536790'>So, we actually have to compute 8.</span> </p><p><span
  m='1539480'>As soon as we do that, the minimizer knows that that node</span>
  <span m='1542430'>is going to have a score of equal to or less than 8</span>
  <span m='1544450'>without looking at anything else.</span> </p><p><span
  m='1546960'>Then, he looks at 7.</span> </p><p><span m='1550020'>So, that's
  equal to 7.</span> </p><p><span m='1551516'>Because the minimizer will clearly
  go to the right.</span> </p><p><span m='1554910'>As soon as that is
  determined, then the maximizer knows that</span> <span m='1557330'>the score
  here is equal to or greater than 8.</span> </p><p><span m='1560580'>Now, we
  evaluate the 3.</span> </p><p><span m='1563680'>The minimizer knows equal to
  or less than 3.</span> </p><p><span m='1566418'>SPEAKER 4: [INAUDIBLE].</span>
  </p><p><span m='1569286'>SPEAKER 1: Oh, sorry, the minimizer at 7,
  yeah.</span> </p><p><span m='1574920'>OK, now what happens?</span>
  </p><p><span m='1577930'>Well, let's see, the maximizer gets a 7 going that
  way.</span> </p><p><span m='1580240'>He can't do better than 3 going that way,
  so we got</span> <span m='1582180'>another one of these cut off
  situations.</span> </p><p><span m='1584980'>It's as if this branch doesn't
  even exist.</span> </p><p><span m='1588820'>So, this static evaluation need
  not be made.</span> </p><p><span m='1592860'>And now we know that that's not
  merely equal to or greater</span> <span m='1595670'>than 7, but exactly equal
  to 7.</span> </p><p><span m='1597850'>And we can push that number back
  up.</span> </p><p><span m='1600530'>That becomes equal to or less than
  7.</span> </p><p><span m='1603900'>OK, are you with me so far?</span>
  </p><p><span m='1606360'>Let's get over to the other side of the tree</span>
  <span m='1607620'>as quickly as possible.</span> </p><p><span m='1609300'>So,
  there's a 9, equal to or less than 9, 8 equal to 8,</span> <span
  m='1615410'>push the 8 up equal or greater than 8.</span> </p><p><span
  m='1623360'>The minimizer can go down this way and get a 7.</span>
  </p><p><span m='1626740'>He'll certainly never go that way where the</span>
  <span m='1629020'>maximizer can get an 8.</span> </p><p><span m='1631780'>Once
  again, we've got a cut off.</span> </p><p><span m='1633706'>And if this branch
  didn't exist, then that means that</span> <span m='1637900'>these static
  evaluations don't have to be made.</span> </p><p><span m='1641020'>And this
  value is now exactly 7.</span> </p><p><span m='1645150'>But there's one more
  thing to note here.</span> </p><p><span m='1647340'>And that is that not only
  do we not have to make these</span> <span m='1649510'>static evaluations down
  here, but we don't even have to</span> <span m='1652830'>generate these
  moves.</span> </p><p><span m='1655040'>So, we save two ways, both on static
  evaluation and on move</span> <span m='1658210'>generation.</span>
  </p><p><span m='1660390'>This is a real winner, this alpha-beta thing, because
  it</span> <span m='1662770'>saves as enormous amount of computation.</span>
  </p><p><span m='1667130'>Well, we're on the way now.</span> </p><p><span
  m='1667930'>The maximizer up here is guaranteed equal to or</span> <span
  m='1670470'>greater than 7.</span> </p><p><span m='1671220'>Has anyone found
  the winning media move yet?</span> </p><p><span m='1673990'>Is it to the
  left?</span> </p><p><span m='1676050'>I know that we better keep going,
  because we want to</span> <span m='1679240'>trust any oracles.</span>
  </p><p><span m='1684150'>So, let's see.</span> </p><p><span
  m='1685090'>There's a 1.</span> </p><p><span m='1685780'>We've calculated
  that.</span> </p><p><span m='1686700'>The minimizer can be guaranteed equal to
  or less</span> <span m='1688950'>than 1 at that particular point.</span>
  </p><p><span m='1695130'>Think about that for a while.</span> </p><p><span
  m='1697040'>At the top, the maximizer knows he can go</span> <span
  m='1699470'>left and get a 7.</span> </p><p><span m='1703161'>the minimizer,
  if the play ever gets here, can ensure</span> <span m='1708610'>that he's
  going to drive the situation to a board</span> <span m='1710860'>number that's
  1.</span> </p><p><span m='1713240'>So, the question is will the maximizer
  ever</span> <span m='1715150'>permit that to happen?</span> </p><p><span
  m='1717080'>And the answer is surely not.</span> </p><p><span m='1719920'>So,
  over here in the development of this side of</span> <span m='1722090'>the
  tree, we're always comparing numbers at adjacent</span> <span
  m='1724870'>levels in the tree.</span> </p><p><span m='1726530'>But here's a
  situation where we're comparing numbers that</span> <span m='1728780'>are
  separated from each other in the tree.</span> </p><p><span m='1731210'>And we
  still concluded that no further examination of this</span> <span
  m='1734430'>node makes any sense at all.</span> </p><p><span m='1736870'>This
  is called deep cut off.</span> </p><p><span m='1745590'>And that means that
  this whole branch here might as well not</span> <span m='1748810'>exist, and
  we won't have to compute that static value.</span> </p><p><span
  m='1754150'>All right?</span> </p><p><span m='1755530'>So, it looks--</span>
  <span m='1757950'>you have this stare of disbelief, which</span> <span
  m='1760250'>is perfectly normal.</span> </p><p><span m='1761660'>I have to
  reconvince myself every time that</span> <span m='1763510'>this actually
  works.</span> </p><p><span m='1764915'>But when you think your way through it,
  it is clear that</span> <span m='1768170'>these computations that I've x-ed
  out</span> <span m='1770660'>don't have to be made.</span> </p><p><span
  m='1772120'>So, let's carry on and see if we can complete this equal to</span>
  <span m='1774510'>or less than 8, equal to 8, equal to 8--</span> <span
  m='1779670'>because the other branch doesn't even exist--</span> <span
  m='1782360'>equal to or less than 8.</span> </p><p><span m='1786760'>And we
  compare these two numbers, do we keep going?</span> </p><p><span
  m='1790700'>Yes, we keep going.</span> </p><p><span m='1792020'>Because maybe
  the maximizer can go to the right and</span> <span m='1794010'>actually get to
  that 8.</span> </p><p><span m='1796870'>So, we have to go over here and keep
  working away.</span> </p><p><span m='1799990'>There's a nine, equal to or less
  than 9,</span> <span m='1802600'>another 9 equal to 9.</span> </p><p><span
  m='1804790'>Push that number up equal to or greater than 9.</span>
  </p><p><span m='1811360'>The minimizer gets an 8 going this way.</span>
  </p><p><span m='1814322'>The maximizer is insured of getting a 9 going that
  way.</span> </p><p><span m='1816840'>So, once again, we've got a cut off
  situation.</span> </p><p><span m='1818860'>It's as if this doesn't
  exist.</span> </p><p><span m='1821392'>Those static evaluations are not
  made.</span> </p><p><span m='1824540'>This move generation is not made and
  computation is saved.</span> </p><p><span m='1832010'>So, let's see if we can
  do better on this very example</span> <span m='1836200'>using this alpha-beta
  idea.</span> </p><p><span m='1838342'>I'll slow it down a little bit and
  change the search type to</span> <span m='1842150'>minimax with
  alpha-beta.</span> </p><p><span m='1845110'>We see two numbers on each of
  those nodes now, guess what</span> <span m='1847540'>they're called.</span>
  </p><p><span m='1848220'>We already know.</span> </p><p><span
  m='1849070'>They're alpha and beta.</span> </p><p><span m='1850430'>So, what's
  going to happen is the algorithm proceeds through</span> <span
  m='1853270'>trees that those numbers are going to shrink wrap</span> <span
  m='1855710'>themselves around the situation.</span> </p><p><span
  m='1858210'>So, we'll start that up.</span> </p><p><span m='1864770'>Two
  static evaluations were not made.</span> </p><p><span m='1868030'>Let's try a
  new tree.</span> </p><p><span m='1874240'>Two different ones were not
  made.</span> </p><p><span m='1876496'>A new tree, still again, two different
  ones not made.</span> </p><p><span m='1885300'>Let's see what happens when we
  use the classroom example, the</span> <span m='1889180'>one I did up
  there.</span> </p><p><span m='1889960'>Let's make sure that I didn't screw it
  up.</span> </p><p><span m='1892900'>I'll slow that down to 1.</span>
  </p><p><span m='1905150'>2, same answer.</span> </p><p><span m='1908280'>So,
  you probably didn't realize it at the start.</span> </p><p><span
  m='1910380'>Who could?</span> </p><p><span m='1911530'>In fact, the play goes
  down that way, over this way, down</span> <span m='1916040'>that way, and
  ultimately to the 8, which is not the</span> <span m='1919710'>biggest
  number.</span> </p><p><span m='1920390'>And it's not the smallest
  number.</span> </p><p><span m='1921460'>It's the compromised number that's
  arrived at virtue of</span> <span m='1923866'>the fact that this is an
  adversarial situation.</span> </p><p><span m='1927980'>So, you say to me, how
  much energy, how much work do you</span> <span m='1932120'>actually saved by
  doing this?</span> </p><p><span m='1934820'>Well, it is the case that in the
  optimal situation, if</span> <span m='1954440'>everything is ordered right, if
  God has come down and</span> <span m='1957615'>arranged your tree in just the
  right way, then the</span> <span m='1961110'>approximate amount of work you
  need to do, the approximate</span> <span m='1964980'>number of static
  evaluations performed, is approximately</span> <span m='1968340'>equal to 2
  times b to the d over 2.</span> </p><p><span m='1974610'>We don't care about
  this 2.</span> </p><p><span m='1975870'>We care a whole lot about that
  2.</span> </p><p><span m='1979220'>That's the amount of work that's
  done.</span> </p><p><span m='1981760'>It's b to the d over 2, instead of b to
  d.</span> </p><p><span m='1986050'>What's that mean?</span> </p><p><span
  m='1987000'>Suppose that without this idea, I can</span> <span m='1989500'>go
  down seven levels.</span> </p><p><span m='1992080'>How far can I go down with
  this idea?</span> </p><p><span m='1995280'>14 levels.</span> </p><p><span
  m='1997940'>So, it's the difference between a</span> <span m='1998910'>jerk
  and a world champion.</span> </p><p><span m='2001340'>So, that, however, is
  only in the optimal case when God has</span> <span m='2004880'>arranged things
  just right.</span> </p><p><span m='2006710'>But in practical situations,
  practical game situations, it</span> <span m='2009750'>appears to be the case,
  experimentally, that the</span> <span m='2012560'>actual number is close to
  this approximation for optimal</span> <span m='2016170'>arrangements.</span>
  </p><p><span m='2017760'>So, you'd never not want to use alpha-beta.</span>
  </p><p><span m='2020462'>It saves an amazing amount of time.</span>
  </p><p><span m='2023870'>You could look at it another way.</span> </p><p><span
  m='2026700'>Suppose you go down the same number of levels, how much</span>
  <span m='2030990'>less work do you have to do?</span> </p><p><span
  m='2035070'>Well, quite a bit.</span> </p><p><span m='2035760'>The square root
  [INAUDIBLE], right?</span> </p><p><span m='2039050'>That's another way of
  looking at how it works.</span> </p><p><span m='2042720'>So, we could go home
  at this point except for one problem,</span> <span m='2046710'>and that is
  that we pretended that the branching factor is</span> <span m='2051469'>always
  the same.</span> </p><p><span m='2053560'>But, in fact, the branching factor
  will vary with the game</span> <span m='2057909'>state and will vary with the
  game.</span> </p><p><span m='2061510'>So, you can calculate how much computing
  you can do in two</span> <span m='2063989'>minutes, or however much time you
  have for an average move.</span> </p><p><span m='2067223'>And then you could
  say, how deep can I go?</span> </p><p><span m='2070520'>And you won't know for
  sure, because it</span> <span m='2072760'>depends on the game.</span>
  </p><p><span m='2075210'>So, in the earlier days of game-playing programs,
  the</span> <span m='2079320'>game-playing program left a lot of computation on
  the</span> <span m='2081750'>table, because it would make a decision in three
  seconds.</span> </p><p><span m='2085670'>And it might have made a much
  different move if it used all</span> <span m='2089170'>the competition it had
  available.</span> </p><p><span m='2091520'>Alternatively, it might be grinding
  away, and after two</span> <span m='2094969'>minutes was consumed.</span>
  </p><p><span m='2096880'>It had no move and just did something random.</span>
  </p><p><span m='2102920'>That's not very good.</span> </p><p><span
  m='2105020'>But that's what the early game-playing program's did,</span> <span
  m='2106850'>because no one knew how deep they could go.</span> </p><p><span
  m='2111980'>So, let's have a look at the situation here and say, well,</span>
  <span m='2116910'>here's a game tree.</span> </p><p><span m='2118670'>It's a
  binary game tree.</span> </p><p><span m='2120290'>That's level 0.</span>
  </p><p><span m='2122120'>That's level 1.</span> </p><p><span m='2123890'>This
  is level d minus 1.</span> </p><p><span m='2126600'>And this is level
  d.</span> </p><p><span m='2128610'>So, down here you have a situation</span>
  <span m='2132050'>that looks like this.</span> </p><p><span m='2133380'>And I
  left all the game tree out in between .</span> </p><p><span m='2137050'>So,
  how many leaf nodes are there down here?</span> </p><p><span m='2140940'>b to
  the d, right?</span> </p><p><span m='2142110'>Oh, I'm going to forget about
  alpha alpha-beta for a moment.</span> </p><p><span m='2145280'>As we did when
  we looked at some of those optimal</span> <span m='2147760'>searches, we're
  going to add these things one at a time.</span> </p><p><span m='2150540'>So,
  forget about alpha-beta, assume we're just doing</span> <span
  m='2152550'>straight minimax.</span> </p><p><span m='2154290'>In that case, we
  would have to calculate all the static</span> <span m='2156970'>values down
  here at the bottom.</span> </p><p><span m='2158610'>And there are b to d of
  those.</span> </p><p><span m='2163160'>How many are there at this next level
  up?</span> </p><p><span m='2166760'>Well, that must be b to the d minus
  1.</span> </p><p><span m='2171720'>How many fewer nodes are there at the
  second to the last, the</span> <span m='2174650'>penultimate level, relative
  to the final level?</span> </p><p><span m='2179390'>Well, 1 over b,
  right?</span> </p><p><span m='2183010'>So, if I'm concerned about not getting
  all the way through</span> <span m='2186750'>these calculations at the d
  level, I can give myself an</span> <span m='2191070'>insurance policy by
  calculating out what the</span> <span m='2194320'>answer would be if I only
  went down to the d minus 1th level.</span> </p><p><span m='2200590'>Do you get
  that insurance policy?</span> </p><p><span m='2203540'>Let's say the branching
  factor is 10, how much does that</span> <span m='2206510'>insurance policy
  cost me?</span> </p><p><span m='2208920'>10% of my competition.</span>
  </p><p><span m='2211160'>Because I can do this calculation and have a move
  in</span> <span m='2213690'>hand here at level d minus 1 for only 1/10 of the
  amount of</span> <span m='2219580'>the computation that's required to figure
  out what I</span> <span m='2221730'>would do if I go all the way down to the
  base level.</span> </p><p><span m='2226000'>OK, is that clear?</span>
  </p><p><span m='2228460'>So this idea is extremely important in its general
  form.</span> </p><p><span m='2233160'>But we haven't quite got there yet,
  because what if the</span> <span m='2236600'>branching factor turns out to be
  really big and we can't get</span> <span m='2239070'>through this level
  either?</span> </p><p><span m='2242130'>What should we do to make sure that
  we</span> <span m='2243860'>still have a good move?</span> </p><p><span
  m='2246215'>SPEAKER 5: [INAUDIBLE].</span> </p><p><span m='2247610'>SPEAKER 1:
  Right, we can do it at the b minus 2 level.</span> </p><p><span
  m='2252850'>So, that would be up here.</span> </p><p><span m='2257120'>And at
  that level, the amount of computation would be b to</span> <span
  m='2260806'>the d minus 2.</span> </p><p><span m='2264800'>So, now we've added
  10% plus 10% of that.</span> </p><p><span m='2271240'>And our knee jerk is
  begin to form, right?</span> </p><p><span m='2276270'>What are we going to do
  in the end to make sure that no</span> <span m='2278180'>matter what we've got
  a move?</span> </p><p><span m='2280458'>CHRISTOPHER: Start from the very
  first--</span> <span m='2282095'>SPEAKER 1: Correct, what's that,
  Christopher?</span> </p><p><span m='2283280'>CHRISTOPHER: Start from the very
  first level?</span> </p><p><span m='2284250'>SPEAKER 1: Start from the very
  first level and give our self</span> <span m='2286515'>an insurance policy for
  every level we try to calculate.</span> </p><p><span m='2291330'>But that
  might be real costly.</span> </p><p><span m='2293780'>So, we better figure out
  if this is going to be too big of</span> <span m='2295910'>an expense to
  bear.</span> </p><p><span m='2298220'>So, let's see, if we do what Christopher
  suggests, then the</span> <span m='2302330'>amount of computation we need in
  our insurance policy is</span> <span m='2305860'>going to be equal 1--</span>
  <span m='2308460'>we're going to do it up here at this level, 2, even
  though</span> <span m='2310900'>we don't need it, just to make everything work
  out easy.</span> </p><p><span m='2313560'>1 plus b, that's getting or
  insurance policy down here at</span> <span m='2317720'>this first
  level.</span> </p><p><span m='2319600'>And we're going to add b squared all
  the way down to b</span> <span m='2324460'>to d minus 1.</span> </p><p><span
  m='2326820'>That's how much we're going to spend getting an insurance</span>
  <span m='2329280'>policy at every level.</span> </p><p><span m='2334020'>I
  wished that some of that high school algebra, right?</span> </p><p><span
  m='2338390'>Let's just do it for fun.</span> </p><p><span m='2341812'>Oh,
  unfortunate choice of variable names.</span> </p><p><span m='2344660'>bs is
  equal to--</span> <span m='2348225'>oh, we're going to multiply all those by
  b.</span> </p><p><span m='2357530'>Now, we'll subtract the first one from the
  second one, which</span> <span m='2369520'>tells us that the amount of
  calculation needed for our</span> <span m='2373330'>insurance policy is equal
  to b to the d minus 1</span> <span m='2379720'>over b minus 1.</span>
  </p><p><span m='2386450'>Is that a big number?</span> </p><p><span
  m='2389580'>We could do a little algebra on that and say that b to the</span>
  <span m='2393562'>d is a huge number.</span> </p><p><span m='2394430'>So, that
  minus one doesn't count.</span> </p><p><span m='2397240'>And B is probably 10
  to 15.</span> </p><p><span m='2399620'>So, b minus 1 is, essentially, equal to
  b.</span> </p><p><span m='2403830'>So, that's approximately equal b to the d
  minus 1.</span> </p><p><span m='2411150'>So, with an approximation factored
  in, the amount of</span> <span m='2415340'>computation needed to do insurance
  policies at every</span> <span m='2417140'>level is not much different from
  the amount of computation</span> <span m='2419870'>needed to get an insurance
  policy at just one level, the</span> <span m='2422770'>penultimate one.</span>
  </p><p><span m='2424910'>So, this idea is called progressive deepening.</span>
  </p><p><span m='2440610'>And now we can visit our gold star idea list and see
  how</span> <span m='2443610'>these things match up with that.</span>
  </p><p><span m='2446170'>First of all, the dead horse principle comes to the
  fore</span> <span m='2450050'>when we talk about alpha-beta.</span>
  </p><p><span m='2451530'>Because we know with alpha-beta that we can get
  rid</span> <span m='2453570'>of a whole lot of the tree and not do static
  evaluation, not</span> <span m='2456705'>even do move generation.</span>
  </p><p><span m='2459000'>That's the dead horse we don't want to beat.</span>
  </p><p><span m='2461120'>There's no point in doing that calculation, because
  it can't</span> <span m='2463530'>figure into the answer.</span> </p><p><span
  m='2466250'>The development of the progressive deepening idea, I</span> <span
  m='2472830'>like to think of in terms of the martial arts principle,</span>
  <span m='2474860'>we're using the enemy's characteristics against them.</span>
  </p><p><span m='2477600'>Because of this exponential blow-up, we have exactly
  the</span> <span m='2480690'>right characteristics to have a move available at
  every</span> <span m='2483610'>level as an insurance policy against not
  getting through to</span> <span m='2486260'>the next level.</span>
  </p><p><span m='2488360'>And, finally, this whole idea of progressive
  deepening can</span> <span m='2491910'>be viewed as a prime example of what we
  like to call</span> <span m='2494440'>anytime algorithms that always have an
  answer ready to go as</span> <span m='2497670'>soon as an answer is
  demanded.</span> </p><p><span m='2499690'>So, as soon as that clock runs out
  at two minutes, some</span> <span m='2503400'>answer is available.</span>
  </p><p><span m='2504250'>It'll be the best one that the system can compute in
  the time</span> <span m='2507460'>available given the characteristics of the
  game</span> <span m='2509480'>tree as it's developed so far.</span>
  </p><p><span m='2511930'>So, there are other kinds of anytime
  algorithms.</span> </p><p><span m='2513780'>This is an example of one.</span>
  </p><p><span m='2516500'>That's how all game playing programs work, minimax,
  plus</span> <span m='2521500'>alpha-beta, plus progressive deepening.</span>
  </p><p><span m='2524290'>Christopher, is alpha-beta a alternative to
  minimax?</span> </p><p><span m='2528670'>CHRISTOPHER: No.</span> </p><p><span
  m='2529450'>SPEAKER 1: No, it's not.</span> </p><p><span m='2531072'>It's
  something you layer on top of minimax.</span> </p><p><span m='2533100'>Does
  alpha-beta give you a different answer from minimax?</span> </p><p><span
  m='2538655'>CHRISTOPHER: No.</span> </p><p><span m='2540920'>No, it
  doesn't.</span> </p><p><span m='2541600'>SPEAKER 1: Let's see everybody shake
  their head</span> <span m='2543105'>one way or the other.</span> </p><p><span
  m='2544590'>It does not give you an answer different from minimax.</span>
  </p><p><span m='2546960'>That's right.</span> </p><p><span m='2547770'>It
  gives you exactly the same answer,</span> <span m='2549430'>not a different
  answer.</span> </p><p><span m='2550660'>It's a speed-up.</span> </p><p><span
  m='2552800'>It's not an approximation.</span> </p><p><span m='2554570'>It's a
  speed-up.</span> </p><p><span m='2555140'>It cuts off lots of the tree.</span>
  </p><p><span m='2556835'>It's a dead horse principle at work.</span>
  </p><p><span m='2559260'>You got a question, Christopher?</span> </p><p><span
  m='2560618'>CHRISTOPHER: Yeah, since all of the lines progressively</span>
  <span m='2565558'>[INAUDIBLE], is it possible to keep a temporary value if
  the</span> <span m='2570498'>value [INAUDIBLE] each node of the tree and then
  [INAUDIBLE]?</span> </p><p><span m='2574944'>SPEAKER 1: Oh, excellent
  suggestion.</span> </p><p><span m='2576920'>In fact, Christopher has
  just--</span> <span m='2578930'>I think, if I can jump ahead a couple
  steps--</span> <span m='2581510'>Christopher has reinvented a very important
  idea.</span> </p><p><span m='2592250'>Progressive deepening not only ensures
  you have an answer at</span> <span m='2594295'>any time, it actually improves
  the performance of alpha-beta</span> <span m='2598080'>when you layer
  alpha-beta on top of it.</span> </p><p><span m='2601090'>Because these values
  that are calculated at intermediate</span> <span m='2605050'>parts of the tree
  are used to reorder the nodes under the</span> <span m='2608890'>tree so as to
  give you maximum alpha-beta cut-off.</span> </p><p><span m='2613190'>I think
  that's what you said, Christopher.</span> </p><p><span m='2614650'>But if it
  isn't, we'll talk about your idea after class.</span> </p><p><span
  m='2619380'>So, this is what every game playing program does.</span>
  </p><p><span m='2622170'>How is Deep Blue different?</span> </p><p><span
  m='2624510'>Not much.</span> </p><p><span m='2631830'>So, Deep Blue, as of
  1997, did about 200 million static</span> <span m='2637000'>evaluations per
  second.</span> </p><p><span m='2639042'>And it went down, using
  alpha-beta,</span> <span m='2643530'>about 14, 15, 16 levels.</span>
  </p><p><span m='2648100'>So, Deep Blue was minimax, plus alpha-beta,
  plus</span> <span m='2661800'>progressive deepening, plus a whole lot of
  parallel</span> <span m='2667480'>computing, plus an opening book, plus
  special purpose</span> <span m='2682080'>stuff for the end game, plus--</span>
  <span m='2687800'>perhaps the most important thing--</span> <span
  m='2704210'>uneven tree development.</span> </p><p><span m='2706150'>So far,
  we've pretended that the tree always goes up in an</span> <span
  m='2708880'>even way to a fixed level.</span> </p><p><span m='2710610'>But
  there's no particular reason why that has to be so.</span> </p><p><span
  m='2716190'>Some situation down at the bottom of the tree may be</span> <span
  m='2719870'>particularly dynamic.</span> </p><p><span m='2721920'>In the very
  next move, you might be able to capture the</span> <span
  m='2723720'>opponent's Queen.</span> </p><p><span m='2725780'>So, in
  circumstances like that, you want to blow out a</span> <span
  m='2727750'>little extra search.</span> </p><p><span m='2729600'>So,
  eventually, you get to the idea that there's no</span> <span
  m='2731280'>particular reason to have the search go</span> <span
  m='2733810'>down to a fixed level.</span> </p><p><span m='2735880'>But,
  instead, you can develop the tree in a way that gives</span> <span
  m='2738920'>you the most confidence that your</span> <span
  m='2740800'>backed-up numbers are correct.</span> </p><p><span
  m='2743330'>That's the most important of these extra flourishes added</span>
  <span m='2746670'>by Deep Blue when it beat Kasparov in 1997.</span>
  </p><p><span m='2751370'>And now we can come back and say, well, you</span>
  <span m='2753890'>understand Deep Blue.</span> </p><p><span m='2754710'>But is
  this a model of anything that goes</span> <span m='2756430'>on in our own
  heads?</span> </p><p><span m='2758950'>Is this a model of any kind of human
  intelligence?</span> </p><p><span m='2762010'>Or is it a different kind of
  intelligence?</span> </p><p><span m='2765210'>And the answer is mixed,
  right?</span> </p><p><span m='2766460'>Because we are often in situations
  where we are</span> <span m='2769950'>playing a game.</span> </p><p><span
  m='2771720'>We're competing with another manufacturer.</span> </p><p><span
  m='2773470'>We have to think what the other manufacturer will do in</span>
  <span m='2776300'>response to what we do down several levels.</span>
  </p><p><span m='2781500'>On the other hand, is going down 14 levels what
  human</span> <span m='2786230'>chess players do when they win the world
  championship?</span> </p><p><span m='2789705'>It doesn't seem, even to them,
  like that's even a remote</span> <span m='2793620'>possibility.</span>
  </p><p><span m='2795570'>They have to do something different, because they
  don't</span> <span m='2797740'>have that kind of computational
  horsepower.</span> </p><p><span m='2801180'>This is doing computation in the
  same way that a bulldozer</span> <span m='2805350'>processes gravel.</span>
  </p><p><span m='2807600'>It's substituting raw power for
  sophistication.</span> </p><p><span m='2811650'>So, when a human chess master
  plays the game, they have a</span> <span m='2814790'>great deal of chess
  knowledge in their head and they</span> <span m='2816640'>recognize
  patterns.</span> </p><p><span m='2818730'>There are famous experiments, by the
  way, that demonstrate</span> <span m='2820910'>this in the following
  way.</span> </p><p><span m='2823730'>Show a chessboard to a chess master and
  ask them to</span> <span m='2828250'>memorize it.</span> </p><p><span
  m='2830130'>They're very good at that, as long as it's a legitimate</span>
  <span m='2832950'>chessboard.</span> </p><p><span m='2834180'>If the pieces
  are placed randomly, they're no</span> <span m='2836510'>good at it at
  all.</span> </p><p><span m='2838380'>So, it's very clear that they've
  developed a repertoire</span> <span m='2841502'>of chess knowledge that makes
  it possible for them to</span> <span m='2844550'>recognize situations and play
  the game much more like number</span> <span m='2848150'>1 up there.</span>
  </p><p><span m='2849940'>So, Deep Blue is manifesting some kind of
  intelligence.</span> </p><p><span m='2853150'>But it's not our
  intelligence.</span> </p><p><span m='2854360'>It's bulldozer
  intelligence.</span> </p><p><span m='2856800'>So, it's important to understand
  that kind of</span> <span m='2858330'>intelligence, too.</span> </p><p><span
  m='2860020'>But it's not necessarily the same kind of intelligence that</span>
  <span m='2862290'>we have in our own head.</span> </p><p><span m='2866160'>So,
  that concludes what we're going to do today.</span> </p><p><span
  m='2867570'>And, as you know, on Wednesday we have a celebration of</span>
  <span m='2869790'>learning, which is familiar to you if you take a
  309.1.</span> </p><p><span m='2876940'>And, therefore, I will see you on
  Wednesday,</span> <span m='2880440'>all of you, I imagine.</span> </p><p></p>
uid: b280315e784ecd65c07fac3940bddbbf
type: course
layout: video
---
