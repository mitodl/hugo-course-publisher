---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers map coloring and related
  scheduling problems.  We develop pseudocode for the domain reduction algorithm
  and consider how much constraint propagation is most efficient, and whether to
  start with the most or least constrained variables.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: d1KyYyLmGpA
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: Video-YouTube-Stream
    type: Video
    uid: aa12abb5e2c8feb03dc4e42fbf5f1e78
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-8-constraints-search/id765641080?i=194470752
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: Video-iTunes U-MP4
    type: Video
    uid: 7ad9bdf3b7a74a70cc81f7fcda1898b4
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec08_300k.mp4'
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: Video-Internet Archive-MP4
    type: Video
    uid: 2a60201f4eaee49d452116ca6b748e5f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/d1KyYyLmGpA/default.jpg'
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 269adc5bf482292e9c941937e8dc760a
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: d1KyYyLmGpA
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 891c3d9e5d12816d252ddd55b26614af
  - id: d1KyYyLmGpA.srt
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-8-constraints-search-domain-reduction/d1KyYyLmGpA.srt
    title: 3play caption file
    type: null
    uid: 4fe8399a7158233716415a8f4656e51d
  - id: d1KyYyLmGpA.pdf
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-8-constraints-search-domain-reduction/d1KyYyLmGpA.pdf
    title: 3play pdf file
    type: null
    uid: 39bec82cbe401eac7711c7662b75eb20
  - id: Caption-3Play YouTube id-SRT
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: b0ac0bb9225b2cec19fb65206f2be384
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: ee1eaf7d3728b0c47e7f2c98261083f4
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7e1cbbe5359800da9cabd22540b4a8a6
inline_embed_id: '33593032lecture8:constraints:search,domainreduction85942943'
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-8-constraints-search-domain-reduction
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-8-constraints-search-domain-reduction
title: 'Lecture 8: Constraints: Search, Domain Reduction'
transcript: >-
  <p><span m='9400'>PROF.</span> </p><p><span m='9450'>PATRICK WINSTON: It's too
  bad, in a way, that we can't paint</span> <span m='11430'>everything black,
  because this map coloring problem sure</span> <span m='14260'>would be a lot
  easier.</span> </p><p><span m='17410'>So I don't know what we're going to do
  about that.</span> </p><p><span m='21930'>How long is this going to
  take?</span> </p><p><span m='23920'>Here's what we're going to do.</span>
  </p><p><span m='24740'>We're going to wait till either all the laptops
  are</span> <span m='26480'>closed, or this program terminates,</span> <span
  m='28910'>whichever comes first.</span> </p><p><span m='32520'>So how long is
  this going to take?</span> </p><p><span m='34690'>I actually don't
  know.</span> </p><p><span m='36590'>I think it'll take more than the life time
  of the universe,</span> <span m='38690'>but I'm not sure.</span> </p><p><span
  m='39700'>So let's take a look at a slightly easier</span> <span m='42730'>map
  coloring problem.</span> </p><p><span m='44560'>We'll stop this one and change
  the map to something I call</span> <span m='47290'>[? simplicia. ?]</span>
  <span m='49340'>There's 26 states, one for each letter in the alphabet.</span>
  </p><p><span m='53780'>And what we're going to do is we're going to do a
  depth</span> <span m='55930'>first search for a suitable coloring of this
  map.</span> </p><p><span m='61350'>We're going to go in order, A, B, C, D, E.
  And as I've</span> <span m='64340'>suggested here, at each level we're going
  to rotate the</span> <span m='68140'>color choices so we don't over use any
  one color.</span> </p><p><span m='71890'>So if we launch this particular
  search, this depth</span> <span m='74800'>first attempt to color this
  map.</span> </p><p><span m='77830'>There it goes.</span> </p><p><span
  m='78530'>And maybe we should wait until it terminates.</span> </p><p><span
  m='81420'>Or maybe we should just let it run and it'll terminate,</span> <span
  m='85200'>perhaps, sometime within the lecture.</span> </p><p><span
  m='87360'>Or maybe we should just let it run over the weekend.</span>
  </p><p><span m='90960'>Or how long do you think we would have to wait, if we
  want</span> <span m='93979'>to come back and watch it terminate?</span>
  </p><p><span m='97206'>At roughly 30 frames a second--</span> <span
  m='99250'>I'm calculating it all in my head, I don't want to bet my</span>
  <span m='101960'>life on it-- but I think about 5,000 years.</span>
  </p><p><span m='106530'>And if we want to use as many states as there are in
  the</span> <span m='110330'>United States, in this demonstration, you get up
  to</span> <span m='113990'>numbers like 10 to the 17th years--</span> <span
  m='118940'>17th, 18th, 16th, I'm not exactly sure.</span> </p><p><span
  m='121270'>I did a rough calculation.</span> </p><p><span m='123670'>And, of
  course, you could do some parallels into that, and</span> <span
  m='126100'>it's not as bad as chess, where you need all the atoms</span> <span
  m='128020'>in the universe and you still can't do it,</span> <span
  m='129358'>and things like that.</span> </p><p><span m='130570'>Acting as
  computers.</span> </p><p><span m='131510'>But still, it's pretty
  horrendous.</span> </p><p><span m='134420'>The problem is, well the problem is
  illustrated by this</span> <span m='140570'>diagram I put in back of
  me.</span> </p><p><span m='142810'>If you do a depth first search and you have
  a</span> <span m='147950'>problem like Texas.</span> </p><p><span
  m='151590'>Texas has always, always been a problem, ever since they</span>
  <span m='157940'>joined the Union.</span> </p><p><span m='159140'>I could pick
  on other states, too.</span> </p><p><span m='161329'>Kentucky, Tennessee, if
  you're from those states you</span> <span m='165310'>represent something even
  worse.</span> </p><p><span m='167630'>But Texas is down there.</span>
  </p><p><span m='168700'>And the trouble is, if you assign a color to
  Arizona,</span> <span m='173980'>Oklahoma, Arkansas, and Louisiana first, and
  then wait</span> <span m='178730'>around to Texas last, then you get yourself
  into a bind by</span> <span m='185560'>your fourth choice, that you don't
  discover until you're</span> <span m='188620'>48th choice.</span> </p><p><span
  m='190780'>So what happens then, is that you start developing this tree</span>
  <span m='193840'>like this, you get to those states surrounding Texas.</span>
  </p><p><span m='198710'>Texas is last state assigned a color and
  there's</span> <span m='201940'>nothing left for it.</span> </p><p><span
  m='203510'>And that problem was there on the fourth choice, and you</span>
  <span m='206316'>don't discover it until your 50th choice.</span> </p><p><span
  m='208700'>So you develop a horrendous, impossible, impossible search.</span>
  </p><p><span m='213040'>So you simply can't do it that way.</span>
  </p><p><span m='217070'>But now, not to worry.</span> </p><p><span
  m='220270'>I've come equipped with the idea of constraint</span> <span
  m='222400'>propagation.</span> </p><p><span m='224410'>So we could just take a
  country with four</span> <span m='226170'>states, like this.</span>
  </p><p><span m='227840'>Each can be labeled red, green, blue and
  yellow.</span> </p><p><span m='232180'>So just like in a case of line
  drawings, we'll pile up all</span> <span m='235079'>the possible things that
  the value can be-- red, green,</span> <span m='239270'>blue and yellow.</span>
  </p><p><span m='240740'>Red, green, blue and yellow.</span> </p><p><span
  m='243420'>Red, green, blue and yellow.</span> </p><p><span m='246460'>And we
  start up constraint propagation.</span> </p><p><span m='249330'>So we say for
  the upper left hand corner state, is there</span> <span m='253200'>any reason
  to believe that R is impossible?</span> </p><p><span m='256329'>Well we look
  at our neighbors and see what kind of</span> <span m='258190'>constraint flows
  in from them.</span> </p><p><span m='260329'>And sure, this guy could be
  green, and this</span> <span m='262070'>guy could be blue.</span> </p><p><span
  m='263320'>They don't have to be red, so there's nothing</span> <span
  m='267060'>that rules out red.</span> </p><p><span m='269770'>And there's
  nothing the rules out blue.</span> </p><p><span m='271310'>And there's nothing
  that rules out yellow.</span> </p><p><span m='274250'>And there's nothing that
  rules out green.</span> </p><p><span m='276430'>So constraint propagation just
  sits there with its finger up</span> <span m='280422'>its nose, doing
  nothing.</span> </p><p><span m='283380'>So it doesn't look like we can use
  either depth first search,</span> <span m='289630'>or constraint
  propagation.</span> </p><p><span m='292470'>So we could just give up and
  cry.</span> </p><p><span m='295659'>But maybe there's some other approach that
  will help.</span> </p><p><span m='299500'>So let me actually work the Texas
  problem.</span> </p><p><span m='302810'>So with apologies to Houston and
  Tyler,</span> <span m='308690'>here's a map of Texas.</span> </p><p><span
  m='315696'>There we are.</span> </p><p><span m='316595'>And here's, roughly
  speaking, Arizona</span> <span m='319660'>is over here somewhere.</span>
  </p><p><span m='321530'>And we've got Oklahoma in there.</span> </p><p><span
  m='323220'>And old Bill Clinton's state, Arkansas.</span> </p><p><span
  m='327440'>And then Louisiana sticks out there a little bit.</span>
  </p><p><span m='330420'>So there's our map of that</span> <span
  m='333700'>particular part of the country.</span> </p><p><span m='336170'>So
  we've got Arizona here, Oklahoma here, Arkansas here,</span> <span
  m='343310'>and Louisiana here, and Texas here.</span> </p><p><span
  m='347350'>And we have elected to assign colors to these states, in</span>
  <span m='352060'>that order.</span> </p><p><span m='352900'>So this is one,
  two, three, four.</span> </p><p><span m='359970'>And we're going to do
  that.</span> </p><p><span m='362530'>We're going to rotate our color choices,
  just so we</span> <span m='364720'>don't over use any one color.</span>
  </p><p><span m='368460'>But we're going to also have a look at Texas as we go
  around.</span> </p><p><span m='371620'>Because Texas is a state that borders
  on the States they</span> <span m='374930'>were choosing colors for.</span>
  </p><p><span m='378740'>So the only possible colors that Texas could be are
  red,</span> <span m='383050'>green, blue, and yellow.</span> </p><p><span
  m='388510'>So as we make our choices around here, we'll say that--</span>
  <span m='393510'>we don't have to adhere to any particular style-- we can
  say</span> <span m='396540'>that Arizona is going to get the colored red, R.
  That's</span> <span m='403800'>going to rule out R over here for Texas,
  because no adjacent</span> <span m='407240'>states can have the same
  color.</span> </p><p><span m='410750'>Then we go over to Oklahoma, and we're
  rotating our color</span> <span m='413020'>choices, so we'll say that can be
  green.</span> </p><p><span m='416670'>And that's fine, because it's consistent
  with the red here,</span> <span m='419610'>but it rules out the possibility
  that</span> <span m='421190'>Texas could be green.</span> </p><p><span
  m='423820'>And then we go over here to Arkansas, red, green, blue.</span>
  </p><p><span m='430170'>That's fine, that's consistent with the green on
  Oklahoma,</span> <span m='433460'>but if we look at its neighbors we know that
  Texas</span> <span m='436270'>is forever forbidden to be blue, now.</span>
  </p><p><span m='440580'>So now we go over to Louisiana, and remember,
  we're</span> <span m='443110'>rotating our color choices because we don't want
  to</span> <span m='445280'>overuse them.</span> </p><p><span m='447240'>So
  this means that the first choice we're going to make</span> <span
  m='449046'>here, for Louisiana, is yellow.</span> </p><p><span m='453400'>And
  that's fine because it's consistent with Arkansas, but</span> <span
  m='456380'>it's not so fine because it's now ruled out the last</span> <span
  m='460110'>possibility for Texas.</span> </p><p><span m='463220'>So even
  though Texas is going to be the 48th state that we</span> <span
  m='468040'>color, we're going to say, at this point, there's no</span> <span
  m='471770'>need in going on.</span> </p><p><span m='472830'>We'd better back
  up.</span> </p><p><span m='474680'>Because there's nothing left for Texas when
  we get around</span> <span m='476920'>to coloring it.</span> </p><p><span
  m='478530'>So that means that this yellow is ruled out here.</span>
  </p><p><span m='482990'>This yellow reappears.</span> </p><p><span
  m='485550'>We select the next color in my line for Louisiana, which</span>
  <span m='489740'>happens to be red.</span> </p><p><span m='491640'>And now
  that's consistent with this yellow that's</span> <span m='495310'>still left
  for Texas.</span> </p><p><span m='496800'>And it's also consistent with the
  blue</span> <span m='498260'>that's up here for Arkansas.</span> </p><p><span
  m='501270'>So that's cool.</span> </p><p><span m='502210'>I wonder if maybe we
  could make an algorithm out of that,</span> <span m='505580'>and solve
  problems like this.</span> </p><p><span m='506980'>Do you see, sort of, the
  intuition of what we're doing?</span> </p><p><span m='509860'>We're actually
  using the martial arts principle, again.</span> </p><p><span
  m='511970'>Because the whole problem is that local constraints,</span> <span
  m='515520'>undiscovered local constraints, are causing</span> <span
  m='517600'>downstream problems.</span> </p><p><span m='519720'>So we're going
  to use the enemy's powers against him,</span> <span m='522799'>and we're going
  to look at those local constraints as we</span> <span m='524750'>go and make
  sure they're not going downstream, not going to</span> <span m='527910'>get us
  later on.</span> </p><p><span m='529980'>So now I'm going to look like I'm
  getting a little formal,</span> <span m='535060'>but I'm just getting a little
  bit more formal.</span> </p><p><span m='536890'>Because I want to have some
  language that I can use to</span> <span m='542090'>describe what's going on,
  so that it's clear what the</span> <span m='544100'>choices are.</span>
  </p><p><span m='546180'>So to start off with, we're going to have to have
  some</span> <span m='548590'>vocabulary.</span> </p><p><span m='550310'>So
  let's start up our vocabulary here.</span> </p><p><span m='553670'>We're going
  to have a notion of a variable v. And that's</span> <span m='562000'>something
  that can have an assignment.</span> </p><p><span m='581850'>There's nothing
  complicated about that.</span> </p><p><span m='583290'>And a value.</span>
  </p><p><span m='588700'>A value x is something that can be in
  assignment.</span> </p><p><span m='597360'>It's a little bit circular, but
  we're all in computer</span> <span m='598880'>science so you know what I
  mean.</span> </p><p><span m='601300'>So the next thing is a little slightly
  less obvious, and</span> <span m='605770'>that's the notion of a domain,
  d.</span> </p><p><span m='611870'>And that's going to be a bag of
  values.</span> </p><p><span m='619190'>OK.</span> </p><p><span m='619520'>So
  one more thing.</span> </p><p><span m='621150'>A constraint.</span>
  </p><p><span m='627810'>That's a constraint c, is a limit on--</span> <span
  m='636080'>in our examples it's mostly going to be pairs of</span> <span
  m='638670'>variables, pairs of variable values.</span> </p><p><span
  m='640910'>But in general, it could be variable values.</span> </p><p><span
  m='651570'>So if we go back here to Texas we could say, OK, how does
  our</span> <span m='655040'>vocabulary drape itself over that
  configuration?</span> </p><p><span m='658190'>And the answer is, the states
  have the role of variables,</span> <span m='663420'>the colors have the role
  of values.</span> </p><p><span m='668670'>And the domains are the remaining
  color possibilities</span> <span m='671780'>that we can still use on a
  particular state.</span> </p><p><span m='674510'>And the constraint, in this
  case, is the simple map</span> <span m='676770'>coloring constraint that no
  states that share a boundary</span> <span m='680770'>can have the same
  color.</span> </p><p><span m='683100'>So states are variables, colors are
  values, domains are</span> <span m='686840'>bags of colors, and
  constraints--</span> <span m='689760'>there's only one--</span> <span
  m='691310'>adjacent states can't have the same color.</span> </p><p><span
  m='694330'>So that's how it fits with this vocabulary.</span> </p><p><span
  m='697440'>So now, what did I actually do here?</span> </p><p><span
  m='699800'>Well what I actually did here, I'm going to now formalize a</span>
  <span m='702950'>little by writing it down in pseudo code.</span> </p><p><span
  m='707500'>So here we are, we're going to have a look at what we did</span>
  <span m='711100'>here with our intuition, and we're going to</span> <span
  m='713630'>reduce it to a procedure.</span> </p><p><span m='715700'>And here's
  the procedure.</span> </p><p><span m='720720'>Remember, we're doing depth
  first search on this stuff.</span> </p><p><span m='722860'>I did a depth first
  search.</span> </p><p><span m='724650'>We're going to do a depth first search,
  and for each</span> <span m='730200'>depth first search assignment--</span>
  <span m='739190'>OK, so here I am, I'm labeling Arizona, and then
  Oklahoma,</span> <span m='743610'>and then Arkansas, and then
  Louisiana.</span> </p><p><span m='746250'>When I give each one of those a
  label, a color, I'm going to</span> <span m='750500'>do this procedure.</span>
  </p><p><span m='752210'>Every time I make one of those assignments.</span>
  </p><p><span m='753495'>The last one that caused trouble was</span> <span
  m='756640'>coloring Louisiana yellow.</span> </p><p><span m='758230'>Each time
  I put one of those colors down, each time I make</span> <span m='761520'>an
  assignment, I'm going to do this procedure.</span> </p><p><span m='763070'>So
  for each depth first search assignment, for each variable</span> <span
  m='776690'>v, considered.</span> </p><p><span m='783730'>Now you don't know
  what I mean by considered.</span> </p><p><span m='786390'>But when I put a
  label, when I put up a value, show something</span> <span m='792300'>as a
  color for Louisiana, I thought about Texas.</span> </p><p><span m='797340'>So
  I was considering the variable, Texas, when I made</span> <span m='800340'>the
  assignment for Louisiana.</span> </p><p><span m='802662'>Now I'm going to be a
  little bit vague about what I mean by</span> <span m='804890'>considered,
  right now.</span> </p><p><span m='805720'>Because there are lots of choices
  about how much stuff</span> <span m='807500'>you actually consider.</span>
  </p><p><span m='809240'>So let me just say consider, and then we'll open that
  up</span> <span m='811390'>and talk about the options in a moment, so for each
  variable</span> <span m='815930'>v considered for--</span> <span
  m='820560'>let's call that variable v sub i--</span> <span m='824040'>for each
  x sub i, for each value in the domain of that</span> <span
  m='833340'>variable, consider each of the things that still surviving.</span>
  </p><p><span m='838760'>For each of those, for each constraint c, that's
  between x</span> <span m='853530'>sub i, and some x sub j, where x sub j is an
  element of the</span> <span m='866390'>domain of j.</span> </p><p><span
  m='869050'>Now that sounds awfully fancy, but this just says, in the</span>
  <span m='872020'>case of Texas up there, whenever I consider one of the</span>
  <span m='875940'>values that's still remaining as a choice for Texas, I
  want</span> <span m='880170'>to consider all of the constraints between
  that</span> <span m='882700'>variable and the adjacent states.</span>
  </p><p><span m='887550'>And I want to be sure that anything I leave in the
  domain</span> <span m='892600'>is OK for some selection in the other states,
  some</span> <span m='896350'>remaining choices in the other states.</span>
  </p><p><span m='898960'>So that's why we're getting pretty nested here.</span>
  </p><p><span m='901090'>But we're doing depth first search.</span>
  </p><p><span m='904540'>We are considering the variables in a certain</span>
  <span m='907740'>collection of variables.</span> </p><p><span m='912660'>For
  each one of those where considering all the values</span> <span
  m='915160'>that still remain in the domains of those variables.</span>
  </p><p><span m='918350'>And then for each of those values, we're checking to
  see</span> <span m='920950'>if it satisfies this some constraint, satisfies
  the</span> <span m='924010'>constraint that are placed upon it.</span>
  </p><p><span m='927280'>So for each of these constraints if there does
  not</span> <span m='932580'>exist an x sub j, such that, the constraint
  between x sub i</span> <span m='940910'>and x sub j is satisfied, well if in
  that adjacent place</span> <span m='951090'>there's nothing that is consistent
  with a value, then</span> <span m='954770'>we've got to get rid of it.</span>
  </p><p><span m='957380'>If that's true.</span> </p><p><span m='958350'>If
  there does not exist some value in an adjacent variable</span> <span
  m='963810'>such that that constraint is satisfied, we're hosed.</span>
  </p><p><span m='966380'>We've got to get rid of that value.</span>
  </p><p><span m='968770'>So we're going to remove x sub i from d sub i.</span>
  </p><p><span m='982970'>OK.</span> </p><p><span m='983250'>Now, that's
  fine.</span> </p><p><span m='985070'>That's sort of what I did with
  Texas.</span> </p><p><span m='987730'>As soon as I plopped down a value for
  Louisiana I said,</span> <span m='991610'>well what are the possible values in
  Texas?</span> </p><p><span m='993770'>Red, green, blue and yellow.</span>
  </p><p><span m='995610'>Let's consider red.</span> </p><p><span
  m='997620'>Let's consider the constraints between Texas and</span> <span
  m='999480'>all adjacent states.</span> </p><p><span m='1001160'>One of those
  constraints says it can't be the</span> <span m='1002660'>same color as
  Arizona.</span> </p><p><span m='1004660'>The only color I've got available for
  Arizona, since</span> <span m='1006690'>I've already made the assignment is
  red.</span> </p><p><span m='1008870'>Red is not consistent with red, so I've
  got</span> <span m='1010580'>to get rid of it.</span> </p><p><span
  m='1013070'>So it looks complicated, but it's just intuition.</span>
  </p><p><span m='1017080'>So what do we do if we get to a situation
  where</span> <span m='1019780'>the domain is empty?</span> </p><p><span
  m='1021710'>That means whenever we get around to making assignment to</span>
  <span m='1023975'>it, there won't be anything left.</span> </p><p><span
  m='1026560'>So if that ever happens, if the domain ever becomes empty,</span>
  <span m='1041310'>then what do we do?</span> </p><p><span m='1042746'>We've
  got to back up.</span> </p><p><span m='1051010'>So the intuition is
  clear.</span> </p><p><span m='1052130'>This is the algorithm.</span>
  </p><p><span m='1053070'>The algorithm when you work through it, think
  about</span> <span m='1055960'>whether it makes sense and what not.</span>
  </p><p><span m='1057360'>How it fits with Texas.</span> </p><p><span
  m='1058370'>Yeah, it sure does.</span> </p><p><span m='1059190'>All we're
  doing is we're making these death first</span> <span
  m='1062160'>assignments.</span> </p><p><span m='1062710'>And in the
  neighborhood of those depth first assignments</span> <span m='1065290'>we're
  looking around to see if the values that are possible</span> <span
  m='1068980'>include something.</span> </p><p><span m='1069960'>And if they
  don't include anything, we know we made and</span> <span
  m='1073180'>irrevocable blunder, and we have to back up.</span> </p><p><span
  m='1077380'>So that's the essence of the idea.</span> </p><p><span
  m='1081050'>Now, how well does it work?</span> </p><p><span m='1084050'>Well a
  little bit depends on what we choose for considered.</span> </p><p><span
  m='1091570'>There are lots of choices for what we consider.</span>
  </p><p><span m='1096520'>So let me enumerate some of those choices and then
  we'll</span> <span m='1100360'>have a look and see what they do.</span>
  </p><p><span m='1115950'>Oh I guess one possibility is to consider
  nothing.</span> </p><p><span m='1130070'>Let's try it out.</span> </p><p><span
  m='1136920'>So our type of search is going to be no checks.</span>
  </p><p><span m='1140470'>What do you think is going to happen?</span>
  </p><p><span m='1144590'>We're not even checking the assignment.</span>
  </p><p><span m='1147910'>That's pretty fast.</span> </p><p><span
  m='1149380'>Unfortunately, since we haven't even check the most</span> <span
  m='1151560'>recent assignment, we get lots of places where there are</span>
  <span m='1154490'>states that are adjacent to each other that</span> <span
  m='1156490'>have the same color.</span> </p><p><span m='1158130'>That's no
  good.</span> </p><p><span m='1162940'>So another thing we can do is consider
  everything</span> <span m='1167440'>everything.</span> </p><p><span
  m='1176060'>That's no good, because that would say, as soon as we color</span>
  <span m='1178600'>our first state, we check to make sure that all 47
  other</span> <span m='1183020'>states can be colored.</span> </p><p><span
  m='1185270'>That seems like it over doing it a little bit.</span> </p><p><span
  m='1189090'>But in any case, at least we want to check the assignment.</span>
  </p><p><span m='1201200'>So if we go back here and check the assignment,
  let's</span> <span m='1205230'>see what happens.</span> </p><p><span
  m='1211995'>Type assignments, assignments only.</span> </p><p><span
  m='1214950'>Boom.</span> </p><p><span m='1215650'>Aw, gees, that's where I got
  in trouble before.</span> </p><p><span m='1218580'>This is the thing is going
  to run for 17 billion years at</span> <span m='1226140'>nanosecond or
  something like that.</span> </p><p><span m='1228330'>It's only a billion years
  if you run it at nanosecond</span> <span m='1230630'>speed, so I guess maybe
  you could do that.</span> </p><p><span m='1233760'>Have a fast
  computer.</span> </p><p><span m='1235110'>But this isn't going to work because
  of our unfortunate</span> <span m='1237360'>choice of Texas as the last state
  to be considered, and</span> <span m='1242950'>the unfortunate coloring of the
  four surrounding states</span> <span m='1245690'>right up front.</span>
  </p><p><span m='1247280'>And our unfortunate decision to rotate the color so
  as to</span> <span m='1250100'>avoid overdoing any one color.</span>
  </p><p><span m='1254310'>So this doesn't work.</span> </p><p><span
  m='1255200'>We know we went to the trouble of working out the business</span>
  <span m='1258760'>with Texas by hand, using the domain reduction
  algorithm.</span> </p><p><span m='1263950'>Better make a note that this is
  the</span> <span m='1265470'>domain reduction algorithm.</span> </p><p><span
  m='1276340'>And what we're going to do is we're going to check the</span>
  <span m='1278250'>neighbors of the assignments.</span> </p><p><span
  m='1281120'>Just like we did here.</span> </p><p><span m='1281970'>We checked
  Texas each time we made one of those four</span> <span m='1284360'>choices,
  because it's a neighbor of all of the choices</span> <span m='1288050'>of the
  states that we made.</span> </p><p><span m='1290490'>So one thing to do is to
  check neighbors.</span> </p><p><span m='1297900'>This is one, two, three, now
  let's see what happens.</span> </p><p><span m='1310250'>Check neighbors only,
  go.</span> </p><p><span m='1331450'>Shoot, I don't know.</span> </p><p><span
  m='1332390'>It's OK with Texas, right?</span> </p><p><span m='1335560'>Because
  it didn't color the states around Texas with all</span> <span m='1340522'>of
  the four color choices.</span> </p><p><span m='1342760'>But it's still getting
  into trouble in other places.</span> </p><p><span m='1348490'>Like the states
  like Missouri, Kentucky, Virginia, Tennessee,</span> <span m='1352930'>states
  with lots of boundaries.</span> </p><p><span m='1357670'>So I don't know
  whether this is going to--</span> <span m='1360080'>oh, there it finally
  worked.</span> </p><p><span m='1363350'>It went through a lot of effort,
  though.</span> </p><p><span m='1366010'>For the sake of comparison, we might
  make a note that it ran</span> <span m='1368540'>into 9,139 dead ends.</span>
  </p><p><span m='1381250'>But it did do some good.</span> </p><p><span
  m='1382720'>It didn't take a length of time longer than the remaining</span>
  <span m='1387200'>part of the universe.</span> </p><p><span m='1389620'>But if
  it's a good idea to check the neighbors, if we</span> <span m='1393140'>make a
  change to the neighbors, what might that</span> <span m='1396580'>suggests
  that we do in addition?</span> </p><p><span m='1400940'>Well it might suggest
  that if we make a change to a</span> <span m='1402680'>neighbor, that we check
  its neighbors, too, make sure</span> <span m='1406790'>they're all
  right.</span> </p><p><span m='1409040'>So another choice is to
  propagate.</span> </p><p><span m='1443460'>So propagate through variables with
  reduced domains.</span> </p><p><span m='1448370'>Let's see how that
  works.</span> </p><p><span m='1461510'>Wait a minute.</span> </p><p><span
  m='1464570'>I must have made a mistake.</span> </p><p><span m='1466210'>Let's
  try that again.</span> </p><p><span m='1468470'>Oh, maybe we better slow it
  down.</span> </p><p><span m='1475760'>All that grey stuff is showing the limit
  of the propagation.</span> </p><p><span m='1485270'>Man it's, let's see at
  four second of 40,</span> <span m='1489790'>that's about 10 seconds.</span>
  </p><p><span m='1495520'>Boom.</span> </p><p><span m='1497190'>Not bad.</span>
  </p><p><span m='1498340'>Zero dead ends.</span> </p><p><span m='1500130'>And
  it was a lot faster.</span> </p><p><span m='1501080'>I didn't happen to notice
  how many constraints were checked</span> <span m='1502854'>on that other
  thing, I think it was around 20,000 or so.</span> </p><p><span
  m='1506130'>This is a lot less.</span> </p><p><span m='1508700'>So this looks
  like a good idea.</span> </p><p><span m='1511320'>But why did I label it
  number five?</span> </p><p><span m='1514255'>Well because there's something
  between this and number three.</span> </p><p><span m='1517960'>So number four
  is, through v with d reduced to one value.</span> </p><p><span m='1536000'>So
  we're not going to propagate through all of the</span> <span
  m='1538730'>variables which have their domains shrunk a little bit.</span>
  </p><p><span m='1542750'>We're only going to propagate through those that have
  the</span> <span m='1544610'>greater shrinkage, all the way down to a single
  value.</span> </p><p><span m='1549520'>So let's see how that might
  work.</span> </p><p><span m='1562590'>Anybody want to place any bets on this
  one?</span> </p><p><span m='1565860'>Let's see.</span> </p><p><span
  m='1566280'>We checked 2,623 constraints last time.</span> </p><p><span
  m='1570490'>Let's see what happens this time.</span> </p><p><span
  m='1574580'>You can see that the extent of the gray is less, because
  it's</span> <span m='1577930'>not propagating so far.</span> </p><p><span
  m='1588630'>And as we breathily await the answer, I'd say we've found</span>
  <span m='1600690'>our winner.</span> </p><p><span m='1601505'>As this does a
  couple of dead ends, but the number of</span> <span m='1605000'>constraint
  checked is less than 1,000.</span> </p><p><span m='1609020'>So in general,
  with problems this, you have all of these</span> <span m='1611360'>choices for
  what you consider.</span> </p><p><span m='1613690'>You don't want to consider
  nothing, because then you're</span> <span m='1615320'>not honoring your
  constraints.</span> </p><p><span m='1617450'>You'll certainly want to consider
  the things you just</span> <span m='1619320'>made assignments for, because
  otherwise you'll construct a</span> <span m='1625670'>solution that violates a
  constraint.</span> </p><p><span m='1628910'>You don't want to do everything,
  because that's</span> <span m='1632190'>excessive work.</span> </p><p><span
  m='1634050'>And so checking the neighbors is a good idea, but it's</span>
  <span m='1640830'>always better in practice.</span> </p><p><span
  m='1643305'>In practice, inevitably it's the case that it's better to</span>
  <span m='1646160'>do some propagation through the</span> <span
  m='1647440'>things that you've changed.</span> </p><p><span m='1649000'>How
  much propagation?</span> </p><p><span m='1650520'>It doesn't seem to do much
  good to propagate through</span> <span m='1652540'>things are just
  changed.</span> </p><p><span m='1654070'>But it does seem to do some good to
  propagate through the</span> <span m='1656630'>things that have changed and
  been</span> <span m='1657730'>reduced to a single value.</span> </p><p><span
  m='1660590'>So as soon as you get a neighbor of some assignment</span> <span
  m='1663400'>you just made that has its domain reduced to a single</span> <span
  m='1666290'>value, then you check its neighbors, too.</span> </p><p><span
  m='1668730'>So you check the neighbors, of the neighbors, of the</span> <span
  m='1670410'>neighbors, of the neighbors, on and on and on, as long as</span>
  <span m='1674290'>you've found a domain being reduced.</span> </p><p><span
  m='1677950'>And not only being reduced, but reduced to a signal value.</span>
  </p><p><span m='1681180'>All right?</span> </p><p><span m='1681580'>So that's
  the demand reduction algorithm.</span> </p><p><span m='1683230'>And I
  guarantee you a problem like that.</span> </p><p><span m='1686860'>And I know
  you don't know how to work those problems yet,</span> <span
  m='1690300'>because this is a little bit abstract.</span> </p><p><span
  m='1692060'>And to work these problems in the exam setting you need to</span>
  <span m='1696340'>know a little bit about how to keep track of the
  variable</span> <span m='1699250'>values that remain in the domain, and</span>
  <span m='1701690'>that sort of thing.</span> </p><p><span m='1702310'>And
  you'll learn more about that in your recitations, and</span> <span
  m='1704810'>in this mega recitation, and in the tutorials.</span> </p><p><span
  m='1708780'>So we could go home except that there are few little</span> <span
  m='1711240'>flourishes to deal with here.</span> </p><p><span m='1713840'>And
  those flourishes, include some dirty,</span> <span m='1723210'>filthy little
  secrets.</span> </p><p><span m='1725520'>For example, I've chosen, as my
  classroom</span> <span m='1728830'>example, to pick on Texas.</span>
  </p><p><span m='1731390'>And arranged for this situation to</span> <span
  m='1733620'>be especially ugly.</span> </p><p><span m='1736130'>So I could
  arrange the states in a different way.</span> </p><p><span m='1741080'>We have
  highly constrained states, that have a lot of</span> <span
  m='1743420'>bordering states around them.</span> </p><p><span m='1746250'>And
  we have other states, like Maine, up there, that only</span> <span
  m='1751950'>borders on one other state.</span> </p><p><span m='1754660'>So I
  don't know.</span> </p><p><span m='1757550'>Will, what do you think?</span>
  </p><p><span m='1762980'>Should we arrange the states for our death first
  search in</span> <span m='1766840'>the order of least constrained to most
  constrained, or most</span> <span m='1770490'>constrained to least
  constrained?</span> </p><p><span m='1775690'>In other words, should we start
  with Missouri, or</span> <span m='1779080'>Tennessee, or Kentucky, or
  something like that?</span> </p><p><span m='1781730'>Or should we start with
  Maine?</span> </p><p><span m='1784254'>What do you think?</span> </p><p><span
  m='1786206'>You have a 50% chance of getting it right, just by</span> <span
  m='1789140'>[? looking ?] at points.</span> </p><p><span m='1791650'>WILL:
  Start with the most first.</span> </p><p><span m='1793950'>PROF.</span>
  </p><p><span m='1793978'>PATRICK WINSTON: He thinks we should start with the
  most</span> <span m='1794920'>constraint first.</span> </p><p><span
  m='1796600'>Do we have a volunteer who wants to suggest that we start</span>
  <span m='1799490'>with the least constraint first?</span> </p><p><span
  m='1802210'>That's the way I always work on stuff.</span> </p><p><span
  m='1805570'>I'm working on a book or something, I have 500 things</span> <span
  m='1809050'>to fix, I'll always choose to work on the easiest stuff</span>
  <span m='1811920'>first, so that I feel like I'm making the list a lot
  smaller.</span> </p><p><span m='1815980'>Leave the hardest things to
  last.</span> </p><p><span m='1818400'>But we don't have any volunteers who
  want to bet on</span> <span m='1821910'>that idea of least constraint
  first?</span> </p><p><span m='1825060'>OK.</span> </p><p><span
  m='1826700'>Jason wants to suggest that we should work on least</span> <span
  m='1829010'>constraint first.</span> </p><p><span m='1830050'>Well we have
  ground truth, because we</span> <span m='1831370'>can just try it out.</span>
  </p><p><span m='1837300'>I guess we'll stick with our shrinking to one</span>
  <span m='1839030'>value thing, here.</span> </p><p><span m='1841950'>But we
  will reorder things so that we have the least</span> <span
  m='1846880'>constrained first.</span> </p><p><span m='1851940'>So right away,
  we got a color for Maine.</span> </p><p><span m='1858160'>Maybe we ought to
  speed this up a little bit.</span> </p><p><span m='1864540'>Well, that's a
  good idea.</span> </p><p><span m='1866450'>Jason suggested this and we only
  1,732 constraints and we</span> <span m='1872020'>had 59 dead ends.</span>
  </p><p><span m='1873010'>So let's try the other way around, and we'll go back
  to</span> <span m='1878910'>four frames a second.</span> </p><p><span
  m='1892890'>So we're working, kind of from the middle of the country
  out,</span> <span m='1894940'>with this one.</span> </p><p><span
  m='1896330'>We're going to deal with Maine, I guess, last.</span> </p><p><span
  m='1903870'>Which is better.</span> </p><p><span m='1906520'>Too bad, I think
  it looks like this is better.</span> </p><p><span m='1909640'>In fact, let's
  not be so aggressive with the use of</span> <span m='1912840'>constraint
  propagation.</span> </p><p><span m='1913950'>Let's just check the assignments
  only.</span> </p><p><span m='1916710'>If we go back to an arrangement where we
  have</span> <span m='1919060'>least constrained first, and we'll crank up the
  speed.</span> </p><p><span m='1926140'>Well actually, we would have to crank
  it up pretty big,</span> <span m='1928190'>because the states like Missouri,
  Tennessee, Kentucky,</span> <span m='1932700'>they're going to be like
  Texas.</span> </p><p><span m='1936264'>And so were kind of back to the length
  of the universe</span> <span m='1938730'>type problem, here.</span>
  </p><p><span m='1939420'>With the least constraint first, and no use of</span>
  <span m='1942640'>constraints, other than to check the current
  assignment.</span> </p><p><span m='1948090'>So let's stop that, though, and
  check the most constrained</span> <span m='1952440'>first, assignments
  only.</span> </p><p><span m='1955790'>I don't know how long's this going to
  take.</span> </p><p><span m='1959880'>That's the dirty little secret.</span>
  </p><p><span m='1962150'>If we had arranged our states from most constrained
  to least</span> <span m='1966010'>constrained, ordinary depth first search
  with none of this</span> <span m='1968440'>stuff we talked about today would
  work just fine.</span> </p><p><span m='1971840'>All right.</span> </p><p><span
  m='1976700'>So it's a little bit like games.</span> </p><p><span
  m='1980460'>Do you use progressive deepening, or do</span> <span
  m='1982260'>you use alpha beta?</span> </p><p><span m='1983500'>And the answer
  is both.</span> </p><p><span m='1984885'>You use everything you've got to deal
  with the problems.</span> </p><p><span m='1989730'>And depending on the
  problem, one or another of the things</span> <span m='1994410'>you incorporate
  into your approach will work just great,</span> <span m='1997250'>if you're
  lucky.</span> </p><p><span m='2000040'>So now, I promise that this is useful
  not only for people who</span> <span m='2004035'>want to color maps.</span>
  </p><p><span m='2004755'>God, who wants to do that?</span> </p><p><span
  m='2005820'>We know it can be done with four colors.</span> </p><p><span
  m='2008000'>But it's also useful for doing all kinds of</span> <span
  m='2010870'>resource planning problems.</span> </p><p><span m='2013530'>So I
  want to show you a resource planning problem, and</span> <span m='2015900'>I
  want you think about-- while I'm doing it--</span> <span m='2017810'>think
  about whether it's actually analogous to the map</span> <span
  m='2019900'>coloring problem.</span> </p><p><span m='2020700'>All
  right?</span> </p><p><span m='2022280'>So here's the deal.</span> </p><p><span
  m='2023180'>You have just landed a summer job with the Jet</span> <span
  m='2026950'>Green, a new airline.</span> </p><p><span m='2030210'>And Jet
  Green is a low cost, no frills, hardly any</span> <span
  m='2038560'>maintenance type of airline.</span> </p><p><span m='2041460'>And
  they want to fly mostly between Boston and New York.</span> </p><p><span
  m='2045730'>Occasionally they want to fly to Los Angeles.</span> </p><p><span
  m='2048480'>And they're trying to get by with the</span> <span
  m='2049880'>smallest number of airplanes.</span> </p><p><span m='2051889'>So
  that's why we have a kind of resource allocation problem</span> <span
  m='2055351'>with Jet Green.</span> </p><p><span m='2057500'>So I'm going to
  write down what their</span> <span m='2059889'>schedule looks like.</span>
  </p><p><span m='2060350'>They have one flight, F1, that goes from
  Boston</span> <span m='2066590'>to JFK, like so.</span> </p><p><span
  m='2072429'>It's an early in the day flight.</span> </p><p><span
  m='2075739'>Then they want to have another one, F2, that</span> <span
  m='2079000'>flies from JFK to Boston.</span> </p><p><span m='2087389'>And then
  they want to have another flight a little later</span> <span m='2090489'>in
  the day that flies from Boston to JFK.</span> </p><p><span m='2097420'>And a
  little later than that, they want to have another</span> <span
  m='2099340'>flight that goes from JFK to Boston.</span> </p><p><span
  m='2104580'>They're going to start off mostly as a shuttle airline in</span>
  <span m='2107230'>the beginning.</span> </p><p><span m='2107670'>So that's F1,
  F2, F3, and F4.</span> </p><p><span m='2113430'>And they have a fifth flight,
  F5, that goes from Boston to</span> <span m='2118460'>Los Angeles, that takes
  a long time.</span> </p><p><span m='2121600'>So it looks like this on the
  schedule.</span> </p><p><span m='2124460'>Of course we have time going that
  way.</span> </p><p><span m='2126940'>So that's Boston to LAX.</span>
  </p><p><span m='2133836'>Now your job is to determine if they can fly this
  schedule</span> <span m='2139870'>with four aircraft?</span> </p><p><span
  m='2142610'>And naturally you don't want to over use any one aircraft,</span>
  <span m='2145065'>because you would like to have even wear on them.</span>
  </p><p><span m='2148080'>Right?</span> </p><p><span m='2148840'>So as you make
  your choices, you'll rotate the aircraft.</span> </p><p><span m='2153090'>So
  you'll assign to this one to A1, aircraft number one.</span> </p><p><span
  m='2158140'>This one will be A2.</span> </p><p><span m='2160160'>This one will
  be A3.</span> </p><p><span m='2162380'>And this one will be A4.</span>
  </p><p><span m='2165160'>And, oops, there's no aircraft left for the flight to
  Los</span> <span m='2169370'>Angeles, because you only have four.</span>
  </p><p><span m='2172240'>So, it's obvious, right?</span> </p><p><span
  m='2173410'>This is 100%, exactly, the map coloring problem, even down
  to</span> <span m='2178450'>the four choices.</span> </p><p><span
  m='2180380'>Because, you have the constraint, the no single</span> <span
  m='2184050'>physical aircraft can fly two flights at the same time.</span>
  </p><p><span m='2189300'>Just like no two adjacent states can</span> <span
  m='2190920'>be colored the same.</span> </p><p><span m='2192820'>So there's a
  no same time constraint, like so.</span> </p><p><span m='2205170'>So if you
  were assigning aircraft to these flights, you</span> <span m='2209620'>would
  get down to F4, the fourth flight, and you would</span> <span m='2213040'>say,
  well, let's see, this guy down here can be</span> <span m='2219310'>A1, A2,
  A3, or A4.</span> </p><p><span m='2220570'>But if I choose A4 for that fourth
  flight, then there</span> <span m='2223700'>would be nothing left in its
  domain.</span> </p><p><span m='2227540'>So you've thus set the problem up to
  be identical to the map</span> <span m='2234640'>coloring problem.</span>
  </p><p><span m='2235540'>And, of course, you can enrich it with other kinds
  of</span> <span m='2238100'>constraints.</span> </p><p><span m='2239370'>So,
  for example, you might have--</span> <span m='2241190'>this is a not same time
  constraint--</span> <span m='2251040'>and these, I mean, this is at
  JFK.</span> </p><p><span m='2256030'>And it flies out of JFK, so maybe you can
  use the same</span> <span m='2260590'>aircraft for those.</span> </p><p><span
  m='2261670'>But not if they're right up against each other, because</span>
  <span m='2263550'>you have a minimum ground time rule.</span> </p><p><span
  m='2266110'>So there's a minimum ground time constraint here.</span>
  </p><p><span m='2270650'>And there's a minimum ground time constraint
  here.</span> </p><p><span m='2275400'>There's a minimum ground time constraint
  here.</span> </p><p><span m='2282030'>And if these are at the same city, then
  you've got to allow</span> <span m='2285310'>enough time for them to fly
  between the two cities that</span> <span m='2287520'>are involved.</span>
  </p><p><span m='2288800'>So the constraints can get a little bit more
  complicated,</span> <span m='2290820'>but the idea is the same.</span>
  </p><p><span m='2293430'>So you say to me, I don't trust you, show me.</span>
  </p><p><span m='2296690'>OK.</span> </p><p><span m='2297660'>So let me show
  you.</span> </p><p><span m='2300620'>Oh, by the way, there's one more way to
  make this map</span> <span m='2302680'>coloring problem easier, right?</span>
  </p><p><span m='2307430'>Let's see.</span> </p><p><span m='2308330'>The
  arrangement is going to be alphabetical, the type is</span> <span
  m='2311770'>going to be assignments only, and we know that's a loser.</span>
  </p><p><span m='2317000'>But not if we use a whole lot of colors.</span>
  </p><p><span m='2322650'>So it's the use of four colors that got us into
  trouble.</span> </p><p><span m='2326520'>Now that's an aside, but it'll be
  coming back</span> <span m='2328540'>in a moment or two.</span> </p><p><span
  m='2329500'>Scheduling, here's that problem.</span> </p><p><span
  m='2332951'>Boom.</span> </p><p><span m='2335110'>You can almost see it
  working just like the</span> <span m='2336910'>map coloring thing.</span>
  </p><p><span m='2338612'>But that's maybe too easy.</span> </p><p><span
  m='2341940'>Let's do this one.</span> </p><p><span m='2346854'>See this is
  just like [? simplicia. ?]</span> <span m='2350020'>We've kind of got a goofy
  arrangement here that's</span> <span m='2353520'>guaranteed to lose at the
  bottom because of choices made</span> <span m='2356790'>at the top.</span>
  </p><p><span m='2358700'>But that's OK.</span> </p><p><span m='2359740'>We can
  that we can stop this, and we can change to check</span> <span
  m='2365370'>neighbors only.</span> </p><p><span m='2367440'>And boom, there it
  goes.</span> </p><p><span m='2371830'>Or alternatively, let me see if I can do
  it this way.</span> </p><p><span m='2374220'>Most constrained first, type will
  be assignments only.</span> </p><p><span m='2378738'>Boom.</span> </p><p><span
  m='2381210'>That worked fine, too.</span> </p><p><span m='2384790'>So you
  might choose to have a slightly harder</span> <span m='2387260'>problem, like
  this.</span> </p><p><span m='2390920'>And we can search away.</span>
  </p><p><span m='2398390'>Actually I don't know if this will complete or
  not.</span> </p><p><span m='2400420'>This is a randomly generated
  example.</span> </p><p><span m='2403970'>But you're going to lose your summer
  job if you can't figure</span> <span m='2407060'>out whether you can do this,
  or not.</span> </p><p><span m='2408960'>So what are you going to do?</span>
  </p><p><span m='2413175'>[? Elliott, ?] you got any thoughts about how
  you're</span> <span m='2415040'>going to save your job?</span> </p><p><span
  m='2418260'>So here's the question you've been asked.</span> </p><p><span
  m='2420850'>How many airplanes does Jet Green need?</span> </p><p><span
  m='2426380'>And you decide, well, four seemed to work before, so</span> <span
  m='2430015'>we'll try four here.</span> </p><p><span m='2432020'>You're not
  sure if it's going to terminate or not, I mean,</span> <span m='2434980'>in
  your lifetime, let alone in your summer job.</span> </p><p><span
  m='2442760'>[? Elliott, ?] let me give you a hint.</span> </p><p><span
  m='2444890'>Look at the outline.</span> </p><p><span m='2448110'>The outline
  up here, on the board, the last item.</span> </p><p><span m='2451643'>[?
  ELLIOTT: [INAUDIBLE] ?]</span> <span m='2452610'>PROF.</span> </p><p><span
  m='2452685'>PATRICK WINSTON: Yeah, what's that mean?</span> </p><p><span
  m='2457030'>What's the maximum number of airplanes we're going to need?</span>
  </p><p><span m='2460380'>Suppose we've got five flights, what's the
  maximum</span> <span m='2464990'>number of airplanes we would ever
  need?</span> </p><p><span m='2467040'>Five.</span> </p><p><span
  m='2468350'>What's the minimum number of airplanes we'll need?</span>
  </p><p><span m='2471020'>One.</span> </p><p><span m='2472750'>So let's try it
  with a small number of airplanes and a</span> <span m='2477510'>large number
  of airplanes.</span> </p><p><span m='2485430'>So that showed us very fast that
  we can't</span> <span m='2489190'>do it with one airplane.</span> </p><p><span
  m='2499210'>That showed us very fast we can do it with ten airplanes.</span>
  </p><p><span m='2503866'>SPEAKER 1: [INAUDIBLE]</span> <span
  m='2506794'>amount of overlappage from up [INAUDIBLE].</span> </p><p><span
  m='2511680'>PROF.</span> </p><p><span m='2511747'>PATRICK WINSTON:
  Volunteer?</span> </p><p><span m='2515110'>What are we going to do to find the
  actual number, as</span> <span m='2518140'>fast as possible.</span>
  </p><p><span m='2519080'>And at least give our boss a reasonable answer, even
  if not</span> <span m='2523110'>necessarily the exact number very fast?</span>
  </p><p><span m='2527960'>It's easy, right?</span> </p><p><span
  m='2528630'>We're going to start up here with one computer, and we're</span>
  <span m='2531840'>going to start down here with another computer,</span> <span
  m='2534850'>and see what happens.</span> </p><p><span m='2536930'>So let's see
  if we can do it with nine.</span> </p><p><span m='2544240'>Let's see if we can
  do it with eight.</span> </p><p><span m='2551110'>Let's see if we can do it
  with seven.</span> </p><p><span m='2554100'>These take almost zero time,
  right?</span> </p><p><span m='2555600'>Because they're under
  constraint.</span> </p><p><span m='2560720'>Wow, that's good, seven.</span>
  </p><p><span m='2562130'>Let's try six.</span> </p><p><span
  m='2563810'>Actually let's try two.</span> </p><p><span m='2568790'>It loses
  fast.</span> </p><p><span m='2570580'>Let's try three.</span> </p><p><span
  m='2581860'>I don't know.</span> </p><p><span m='2582120'>Maybe if you let it
  run one long enough three will work.</span> </p><p><span m='2585440'>I doubt
  it.</span> </p><p><span m='2587120'>While we're at it though, we might as well
  go back here and</span> <span m='2589110'>try it with six.</span> </p><p><span
  m='2589790'>Remember seven worked real fast.</span> </p><p><span
  m='2595000'>Gees, six, that was six, right?</span> </p><p><span
  m='2597510'>Yeah.</span> </p><p><span m='2597870'>So let's try it with
  five.</span> </p><p><span m='2602650'>OK.</span> </p><p><span m='2602950'>So
  it runs real fast with five.</span> </p><p><span m='2604730'>It terminates
  real quick with two, so we got</span> <span m='2607660'>three and four
  left.</span> </p><p><span m='2609710'>So we could tell our boss, a la any time
  algorithm, that</span> <span m='2613955'>you're not real sure, but you know
  it's going to be either</span> <span m='2615890'>three or four.</span>
  </p><p><span m='2617280'>And then, you got two computers.</span> </p><p><span
  m='2619270'>You can let both run and see if either one terminate.</span>
  </p><p><span m='2623120'>So you have three and four.</span> </p><p><span
  m='2624730'>My guess is that three will eventually give up.</span>
  </p><p><span m='2629140'>But of course, there's another little problem
  here.</span> </p><p><span m='2631040'>We haven't used the most constraint
  first.</span> </p><p><span m='2633700'>If we did that, we might be able to do
  it even faster.</span> </p><p><span m='2636520'>Actually, I don't think I can
  make that switch without</span> <span m='2639620'>getting another random
  assignment, but</span> <span m='2641810'>let's see what happens.</span>
  </p><p><span m='2644320'>Maybe so.</span> </p><p><span m='2645950'>SPEAKER 2:
  [INAUDIBLE]</span> <span m='2650180'>PROF.</span> </p><p><span
  m='2650266'>PATRICK WINSTON: Oh, I already had most constraint first?</span>
  </p><p><span m='2652000'>OK.</span> </p><p><span m='2653370'>So it didn't help
  to actually switch.</span> </p><p><span m='2655660'>And I think I've got a new
  schedule to work here.</span> </p><p><span m='2658750'>So that's the end of
  the story.</span> </p><p><span m='2661190'>You can do good resource allocation
  if you do several</span> <span m='2665250'>things are once.</span>
  </p><p><span m='2666510'>Number one, you always want to use most constraint
  first.</span> </p><p><span m='2669450'>Number two you want to propagate
  through domains</span> <span m='2671350'>produced to a single
  algorithm.</span> </p><p><span m='2673050'>And number three, if you really try
  to figure out what</span> <span m='2675380'>the minimum number of resources
  needed is, you do</span> <span m='2679086'>this under over business and you
  can quickly converge on a</span> <span m='2682380'>narrow range where the
  search is taking a long time, and be</span> <span m='2685550'>sure that it
  lies within that narrow range.</span> </p><p><span m='2689310'>Because when
  you over resource, it's fast to</span> <span m='2692330'>complete, and when
  you under resource,</span> <span m='2694670'>it's fast to terminate.</span>
  </p><p><span m='2697180'>So you can just squeeze it right down into</span>
  <span m='2699180'>a very small range.</span> </p><p><span m='2700600'>And that
  is the end of the story.</span> </p><p><span m='2702270'>Enjoy your holiday on
  Monday.</span> </p><p><span m='2703700'>We'll have two classes next week on
  Wednesday and Friday,</span> <span m='2708660'>as advertised.</span>
  </p><p></p>
uid: ee1eaf7d3728b0c47e7f2c98261083f4
type: courses
layout: video
---
