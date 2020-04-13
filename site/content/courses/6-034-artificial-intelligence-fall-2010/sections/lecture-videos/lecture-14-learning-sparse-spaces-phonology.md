---
title: 'Lecture 14: Learning: Sparse Spaces, Phonology'
uid: 69953385d63e7bd83eaa1c2e0f07f2bf
parent_uid: 28d36d6426366698bf1ded18c6190be7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-14-learning-sparse-spaces-phonology
short_url: lecture-14-learning-sparse-spaces-phonology
inline_embed_id: '14491588lecture14:learning:sparsespaces,phonology35752921'
about_this_resource_text: >-
  <p><strong>Description:</strong> Why do &quot;cats&quot; and &quot;dogs&quot;
  end with different plural sounds, and how do we learn this? We can represent
  this problem in terms of distinctive features, and then generalize. We end
  this lecture with a brief discussion of how to approach AI problems.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
related_resources_text: ''
transcript: >-
  <p><span m='10560'>PATRICK WINSTON: So today we're gonna talk about a
  few</span> <span m='15220'>miracles of learning in the context of the theme
  that</span> <span m='19980'>we're developing here in the class.</span>
  </p><p><span m='24990'>We started off with a discussion</span> <span
  m='31900'>of some basic methods.</span> </p><p><span m='33260'>We talked about
  nearest neighbors.</span> </p><p><span m='35610'>And we talked about
  identification trees.</span> </p><p><span m='39250'>And those are kind of
  basic things that have been around</span> <span m='41560'>for a long
  time.</span> </p><p><span m='42740'>Still useful.</span> </p><p><span
  m='43690'>Still the right things to do when you're faced with a</span> <span
  m='46250'>learning problem and you're not sure what method to try.</span>
  </p><p><span m='50840'>Then we went on to talk about some naive biological
  mimicry.</span> </p><p><span m='55870'>We talked about neural nets.</span>
  </p><p><span m='60700'>And we talked about genetic algorithms.</span>
  </p><p><span m='65650'>And you look at those things and you think and reflect
  back</span> <span m='68270'>on what we talked about.</span> </p><p><span
  m='69440'>And you have to say to yourself, are</span> <span m='72010'>these
  nugatory ideas?</span> </p><p><span m='74039'>Perhaps pistareens?</span>
  </p><p><span m='75760'>Or are they supererogatory ideas that deserve to
  be</span> <span m='79300'>center stage?</span> </p><p><span m='84570'>Does
  anybody know what those words mean?</span> </p><p><span m='87770'>A
  pistareen?</span> </p><p><span m='88780'>Well, a pistareen is a Spanish
  coin.</span> </p><p><span m='92000'>It was so small.</span> </p><p><span
  m='92900'>It was of little worth.</span> </p><p><span m='95130'>These ideas
  like neural nets, genetic algorithms, I classify</span> <span m='103460'>them
  as pistareens because getting them to do something</span> <span m='107820'>is
  rather like getting a dog to walk on its hind legs.</span> </p><p><span
  m='111610'>You can make it happen, but they never do it very well.</span>
  </p><p><span m='114700'>And you have to think it took a lot of trickery and
  training</span> <span m='117000'>to make it happen.</span> </p><p><span
  m='120795'>So not too personally high on those ideas.</span> </p><p><span
  m='128150'>But we teach them to you anyway because, of course, we</span> <span
  m='130620'>only editorialize part of time and part of time we like to</span>
  <span m='134250'>cover what's in the field.</span> </p><p><span
  m='137310'>Today we're starting a couple of discussions of mechanisms</span>
  <span m='142460'>or ideas or things to know about</span> <span m='146940'>that
  are quite different.</span> </p><p><span m='147690'>Because now we're going to
  focus on the problem rather</span> <span m='149690'>than on the
  mechanism.</span> </p><p><span m='151930'>And then a later on we're going to
  talk about deep</span> <span m='154120'>theory, FIOS, for its own sake.</span>
  </p><p><span m='157005'>But this week I want to talk about</span> <span
  m='158560'>mechanisms that were devised.</span> </p><p><span m='162090'>I want
  to talk about research that was done.</span> </p><p><span m='165760'>Let me
  not say mechanisms.</span> </p><p><span m='167020'>Let me say research that
  was done to attempt an account of</span> <span m='173530'>some of the things
  that we humans do well.</span> </p><p><span m='176040'>Sometimes without even
  knowing that we do it.</span> </p><p><span m='180460'>Now Krishna here tells
  me his first language was Telugu.</span> </p><p><span
  m='185750'>Telugu.</span> </p><p><span m='186790'>I once had another student
  whose first</span> <span m='188270'>language was Telugu.</span> </p><p><span
  m='190160'>I said to him, that must be one of those</span> <span
  m='192100'>obscure Indian languages.</span> </p><p><span m='194480'>And he
  said, yes.</span> </p><p><span m='195470'>It's spoken by 56 million
  people.</span> </p><p><span m='198570'>French is spoken by 52.</span>
  </p><p><span m='199756'>[LAUGHTER]</span> <span m='202202'>PATRICK WINSTON:
  He's going to be our experimental subject.</span> </p><p><span
  m='204650'>Krishna, if I pluralize words-- you know what it means</span> <span
  m='208040'>to pluralize a word.</span> </p><p><span m='210120'>So if I say for
  example, horse, then if I ask you for</span> <span m='215595'>the plural
  you'll say horses.</span> </p><p><span m='218220'>So if I say dog, what's the
  plural?</span> </p><p><span m='222500'>STUDENT: Then dogs.</span> </p><p><span
  m='224380'>Or in my language?</span> </p><p><span m='225222'>PATRICK WINSTON:
  No, no, no.</span> </p><p><span m='225730'>In English.</span> </p><p><span
  m='226680'>STUDENT: Oh, dogs.</span> </p><p><span m='227680'>PATRICK WINSTON:
  Well, what about cat?</span> </p><p><span m='228977'>STUDENT: Cats.</span>
  </p><p><span m='229771'>PATRICK WINSTON: And he got it right.</span>
  </p><p><span m='230950'>Isn't that a miracle?</span> </p><p><span
  m='232250'>When did you start speaking English?</span> </p><p><span
  m='234570'>STUDENT: Second grade.</span> </p><p><span m='235560'>PATRICK
  WINSTON: Second grade.</span> </p><p><span m='236190'>But he still got it
  right.</span> </p><p><span m='237600'>But he never learned that he's actually
  pluralizing those</span> <span m='240740'>words differently.</span>
  </p><p><span m='242790'>But he is.</span> </p><p><span m='245320'>So when you
  pluralize dog, what's the</span> <span m='248090'>sound that comes
  after?</span> </p><p><span m='250600'>It's a z sound.</span> </p><p><span
  m='251770'>Zzzzzz.</span> </p><p><span m='252870'>Dogzzz.</span> </p><p><span
  m='254710'>If you stick your fingers up here you can probably feel</span>
  <span m='256902'>your vocal cords vibrating.</span> </p><p><span m='258428'>If
  you stick a piece of paper in front of your mouth you'll</span> <span
  m='261040'>see it vibrate.</span> </p><p><span m='263000'>But when you say
  cats, the pluralizing sound</span> <span m='266260'>is sss, like that.</span>
  </p><p><span m='268710'>No vocalizing.</span> </p><p><span m='269920'>No
  vibration of the vocal cords.</span> </p><p><span m='272113'>And old Krishna
  here learned that rule, as did all of you</span> <span m='275510'>other
  non-native speakers of English, effortlessly and</span> <span
  m='278330'>without noticing it.</span> </p><p><span m='279190'>You learned
  it.</span> </p><p><span m='280335'>Buy you always get it right.</span>
  </p><p><span m='281650'>How can that possibly be?</span> </p><p><span
  m='284170'>Well, be the end of hour you'll know how that might be.</span>
  </p><p><span m='287250'>And you'll experience a case study in how questions of
  that</span> <span m='294060'>sort can be approached with a sort of</span>
  <span m='295909'>engineering point of view.</span> </p><p><span m='297159'>You
  can say, what if God were an engineer?</span> </p><p><span m='299680'>Or
  alternatively, what if I were God and I am an engineer?</span> </p><p><span
  m='304730'>Think about how it might happen that way.</span> </p><p><span
  m='307810'>So we want to understand how it might be that the machine</span>
  <span m='313150'>could learn rules like that.</span> </p><p><span
  m='314700'>Phonological rules.</span> </p><p><span m='315690'>Not just that
  one, but all the phonological rules you'd</span> <span m='319200'>acquire in a
  course on phonology.</span> </p><p><span m='321540'>That part of speaking that
  deals with those syllabic and</span> <span m='327990'>sub-syllabic
  sounds.</span> </p><p><span m='330740'>The phones of the language.</span>
  </p><p><span m='332970'>So when Yip and Sussman undertook to solve this</span>
  <span m='337890'>engineering problem, both being dedicated engineers,
  the</span> <span m='341950'>first thing they did was learn the science.</span>
  </p><p><span m='344560'>So they went to sit at the foot of Morris Halle,
  who</span> <span m='347840'>would develop-- was largely responsible for
  the</span> <span m='351510'>development theories of</span> <span
  m='353280'>so-called distinctive features.</span> </p><p><span m='354940'>And
  here's how all that works.</span> </p><p><span m='357200'>You start off with a
  person who wants to say something.</span> </p><p><span m='363900'>And out that
  person's mouth comes some sort of acoustic</span> <span m='369650'>pressure
  wave.</span> </p><p><span m='371670'>And if I say, hello, George.</span>
  </p><p><span m='374780'>And you say hello, George.</span> </p><p><span
  m='376560'>Everybody will understand that we said the same thing.</span>
  </p><p><span m='379120'>But that acoustic waveform won't look anything
  alike.</span> </p><p><span m='381540'>It'll be very different for all of
  us.</span> </p><p><span m='384790'>So it's a miracle that words can be
  understood.</span> </p><p><span m='389310'>In any case, it goes into an
  ear.</span> </p><p><span m='392240'>And it's processed.</span> </p><p><span
  m='394240'>And out comes a sequence of distinctive feature.</span>
  </p><p><span m='411440'>Vectors.</span> </p><p><span m='418120'>A distinctive
  feature is a binary variable like is the</span> <span m='424170'>phone voices
  or not.</span> </p><p><span m='425880'>That is to say, are your vocal cords
  vibrating</span> <span m='427830'>when you say it?</span> </p><p><span
  m='428840'>If so, then that's plus voiced.</span> </p><p><span m='431970'>If
  not, it's minus voiced.</span> </p><p><span m='434360'>So according to the
  original distinctive feature theory and</span> <span m='439440'>consistent
  with most of the theories that have been</span> <span m='442650'>derived since
  the original one, there are on the order of</span> <span m='445740'>14 of
  these distinctive features that determine which</span> <span m='449300'>phone
  you're saying.</span> </p><p><span m='452090'>So if you say ah, that's one
  combination of</span> <span m='455260'>these binary features.</span>
  </p><p><span m='456715'>If you say tuh, that's another combination of</span>
  <span m='460659'>these binary features.</span> </p><p><span m='462659'>14 of
  them.</span> </p><p><span m='465040'>So how many sounds does that mean, in
  principle, there</span> <span m='468909'>could be in a language?</span>
  </p><p><span m='470770'>SEBASTIAN: 2 to the 14th.</span> </p><p><span
  m='472165'>PATRICK WINSTON: And what's 2 the 14th, Sebastian?</span>
  </p><p><span m='478300'>Well, it ought to be about 16,000, don't you
  think?</span> </p><p><span m='481920'>2 to the 10th is 1,000.</span>
  </p><p><span m='483350'>2 the fourth is 16.</span> </p><p><span m='485310'>So
  there are about 16,000 possible combination.</span> </p><p><span
  m='489480'>But no language on Earth has more than 100 phones.</span>
  </p><p><span m='494100'>That's strange, isn't it?</span> </p><p><span
  m='494910'>Because some of those choices are probably excluded on</span> <span
  m='498670'>physical ground.</span> </p><p><span m='499390'>But most of them
  are not.</span> </p><p><span m='500730'>So we could have a lot more phones in
  our language than we</span> <span m='503870'>actually do.</span> </p><p><span
  m='504780'>English is about 40.</span> </p><p><span m='507630'>So the sequence
  of distinctive features could be viewed as</span> <span m='512070'>then
  producing meaning after, perhaps, a long series of</span> <span
  m='521090'>operations.</span> </p><p><span m='522620'>But in the end, those
  operations feedback in here</span> <span m='526730'>because many of the
  distinctive features are</span> <span m='528560'>actually hallucinated.</span>
  </p><p><span m='530560'>We think we heard them, but they're not there.</span>
  </p><p><span m='532320'>Or they're not even in the acoustic waveform.</span>
  </p><p><span m='535480'>They're there for the convenience of the
  phonologist</span> <span m='537345'>who make rules out of them.</span>
  </p><p><span m='541210'>It's remarkable how much of this feedback there is,
  and</span> <span m='550670'>even injection from other modalities.</span>
  </p><p><span m='554570'>Many of you may have heard about the McGurk
  Effect.</span> </p><p><span m='557730'>Here's who the McGurk Effect
  works.</span> </p><p><span m='560310'>Look at me while I say ga, ga, ga, ga,
  ga, ga.</span> </p><p><span m='565270'>OK.</span> </p><p><span m='565580'>I
  said, g-a.</span> </p><p><span m='567120'>Now how about ba, ba, ba, ba.</span>
  </p><p><span m='570050'>OK.</span> </p><p><span m='570460'>I said ba like a
  sheep.</span> </p><p><span m='575130'>But if I take the sound I make when I
  say ba and play it</span> <span m='580730'>while you're taking video of me
  saying ga, what do you</span> <span m='584730'>think you hear?</span>
  </p><p><span m='586840'>You don't hear ba.</span> </p><p><span m='588000'>Some
  people report that they hear a d-a sound like da.</span> </p><p><span
  m='593030'>When I look at it, I can't make any sense out of it.</span>
  </p><p><span m='596200'>It looks like there's a disconnection between
  the</span> <span m='598270'>speech and the video.</span> </p><p><span
  m='601470'>But it does not sound like ba.</span> </p><p><span m='603916'>But
  if I shut my eyes and say ba, ba, it's absolutely clear</span> <span
  m='607740'>that it's b-a.</span> </p><p><span m='610350'>So what you see has a
  large influence on what you hear.</span> </p><p><span m='617280'>It's also
  interesting--</span> <span m='618600'>although a side issue-- it's also
  interesting to note that</span> <span m='620690'>it's very difficult
  pronounced things correctly if you don't</span> <span m='623350'>see the
  speaker.</span> </p><p><span m='625230'>So many people wonder when they learn
  foreign languages</span> <span m='627360'>why they can't speak like a
  native.</span> </p><p><span m='629600'>And the answer is, they're not watching
  the</span> <span m='631020'>mouth of the speaker.</span> </p><p><span
  m='633160'>I was talking to a German friend once and said, you</span> <span
  m='635665'>know, I just can't say the damned umlaut right.</span> </p><p><span
  m='639796'>And he said, oh, the trouble with you Americans is you</span> <span
  m='642470'>don't realize that American cows say moo but</span> <span
  m='647080'>German cows say muu.</span> </p><p><span
  m='648530'>[LAUGHTER]</span> <span m='648910'>PATRICK WINSTON: And, of course,
  I got instantly</span> <span m='651130'>because I could see that the umlaut
  sounds are produced</span> <span m='653410'>with protruding lips, which we
  don't have any sounds an</span> <span m='657290'>English that require
  that.</span> </p><p><span m='659766'>Ah, but back to what we know from the
  phonologists about</span> <span m='663180'>all this stuff.</span> </p><p><span
  m='664450'>If you talk to Morris Halle, he will tell</span> <span
  m='666740'>you that over here--</span> <span m='669490'>I like to think of it
  as a marionette.</span> </p><p><span m='672100'>There are five pieces of meat
  down here.</span> </p><p><span m='681270'>And the combination of distinctive
  features that</span> <span m='683330'>you're trying to utter are like the
  control of a</span> <span m='687250'>marionette on those five pieces of
  meat.</span> </p><p><span m='689320'>So if you want to say an a sound, the
  marionette control</span> <span m='692020'>goes into a position that produces
  that combination.</span> </p><p><span m='696310'>So let's see.</span>
  </p><p><span m='696970'>What does that distinctive feature sequence look like
  for</span> <span m='701110'>typical word?</span> </p><p><span m='701920'>Well,
  here's a word.</span> </p><p><span m='704020'>A-e-p-l.</span> </p><p><span
  m='708250'>Apples.</span> </p><p><span m='710340'>And we can talk about what
  distinctive features are</span> <span m='716580'>arrayed in that particular
  combination of phones.</span> </p><p><span m='721380'>So one of the features
  that they like to</span> <span m='723040'>talk about is syllabic.</span>
  </p><p><span m='725580'>Syllabic.</span> </p><p><span m='729950'>That roughly
  means, can that sound form the sort of core of</span> <span m='733240'>a
  syllable?</span> </p><p><span m='734710'>And the answer is a can, buy these
  can't.</span> </p><p><span m='738930'>So it's plus, minus, minus,
  minus.</span> </p><p><span m='742060'>Down here a little ways you'll run into
  the voiced feature.</span> </p><p><span m='749040'>And for the voiced feature,
  well, we can do</span> <span m='750735'>the experiment ourselves.</span>
  </p><p><span m='752160'>Ahh.</span> </p><p><span m='753500'>Sounds like it's
  voices to me.</span> </p><p><span m='755540'>Pa.</span> </p><p><span
  m='756340'>No.</span> </p><p><span m='756790'>That's not voiced.</span>
  </p><p><span m='757970'>Oo.</span> </p><p><span m='758390'>Yep.</span>
  </p><p><span m='759080'>Zzz.</span> </p><p><span m='760540'>We already said
  that was voiced.</span> </p><p><span m='763180'>So that's the combination you
  see when you utter apples for</span> <span m='766940'>the voiced
  feature.</span> </p><p><span m='768670'>Then another one is the continuent
  one.</span> </p><p><span m='774190'>That roughly says is your vocal apparatus
  open?</span> </p><p><span m='777290'>Is there no obstruction?</span>
  </p><p><span m='780370'>And so ahh plus pa is constricted.</span> </p><p><span
  m='784750'>Oo, open.</span> </p><p><span m='786100'>Zzz, open.</span>
  </p><p><span m='787960'>So that one happens to run right along with voiced
  in</span> <span m='789960'>that particular word.</span> </p><p><span
  m='792040'>Oh, and there are 14 altogether.</span> </p><p><span m='793640'>But
  let me just write down one more.</span> </p><p><span m='796510'>The strident
  one.</span> </p><p><span m='801980'>That says, do you use your tongue to form
  a</span> <span m='805000'>little jet of air?</span> </p><p><span m='806800'>So
  you don't on aa, pa, oo.</span> </p><p><span m='810735'>Buy you do on
  z.</span> </p><p><span m='813220'>So that gets a plus.</span> </p><p><span
  m='815600'>So that's a glimpse through a soda straw of what it would</span>
  <span m='819530'>like to represent the word apples as a set of
  distinctive</span> <span m='823980'>features all arranged in a
  sequence.</span> </p><p><span m='826350'>So it's a matrix of features.</span>
  </p><p><span m='829760'>Going down in the columns we have our distinctive
  features.</span> </p><p><span m='832750'>And going across we have time.</span>
  </p><p><span m='836250'>So as the first thing Sussman and Yip did in their
  effort to</span> <span m='841230'>understand how phonological rules could be
  learned is to</span> <span m='844610'>design a machine that would interpret
  words and sounds and</span> <span m='851880'>things that you see so as to
  produce the</span> <span m='856260'>sounds of the language.</span>
  </p><p><span m='858470'>So they imagined the following kind of machine.</span>
  </p><p><span m='861820'>The machine has some kind of mystery apparatus over
  here</span> <span m='867320'>that looks out into the world and sees what's
  there.</span> </p><p><span m='871290'>So I'm looking out in the world and I
  see two apples.</span> </p><p><span m='874570'>So what this machine might do
  then is, at some point, decide</span> <span m='879090'>that there are two
  apples out there.</span> </p><p><span m='881490'>Then, thinking in terms of
  these guys as computer</span> <span m='884340'>engineers, they think in terms
  of a set of registers that</span> <span m='890460'>hold values for concepts
  like noun and verb and plural.</span> </p><p><span m='902500'>And we've not
  done anything with the machine yet.</span> </p><p><span m='905130'>We've
  provided no input.</span> </p><p><span m='907520'>So those registers are all
  empty.</span> </p><p><span m='912260'>Then, up in here, we have a set of
  words.</span> </p><p><span m='920763'>And they're all kinds of words.</span>
  </p><p><span m='923470'>Apple is one of them.</span> </p><p><span
  m='929290'>And those words up there know about how the concept is</span> <span
  m='934540'>rendered as a sequence of a phones, that is to say a</span> <span
  m='937990'>sequence of distinct features.</span> </p><p><span m='941430'>Then,
  over here, most importantly, they have a set</span> <span m='946450'>of
  constraints.</span> </p><p><span m='955660'>So we'll talk about a particular
  constrain, the</span> <span m='958050'>plural constraint.</span> </p><p><span
  m='961690'>Plural constraint number one.</span> </p><p><span m='965380'>And
  it's going to reach around and connect itself to some</span> <span
  m='968040'>other parts of the machine.</span> </p><p><span m='970570'>Finally,
  there's a buffer of phones to be uttered.</span> </p><p><span m='977470'>And
  they're going to flow out this way to the speaker's</span> <span
  m='980650'>mouth and get translated into a acoustic wave form.</span>
  </p><p><span m='986770'>So those are the elements of the machine.</span>
  </p><p><span m='989680'>Now how are the elements connected together?</span>
  </p><p><span m='994380'>Well, the words are connected, of course, into the
  buffer</span> <span m='1007460'>that is used to generate the sound over</span>
  <span m='1011550'>here on the far left.</span> </p><p><span m='1014360'>The
  plural register is connected to what</span> <span m='1018150'>you see in the
  world.</span> </p><p><span m='1020080'>What you see in the world is connected
  not only to plural</span> <span m='1022580'>register, but to all of the
  objects in the word</span> <span m='1028530'>repertoire.</span> </p><p><span
  m='1032530'>This plural constraint here deserves extra attention</span> <span
  m='1035950'>because it's going to be desirous of actuating itself</span> <span
  m='1041868'>in the event but the thing observed in</span> <span
  m='1043839'>the world is plural.</span> </p><p><span m='1045630'>There are
  lots of them.</span> </p><p><span m='1048520'>So it's going to be connected
  then to the plural port.</span> </p><p><span m='1055430'>There's going to be a
  z sound port down here connecting to</span> <span m='1060050'>that file
  element in the buffer.</span> </p><p><span m='1066710'>And finally, over here
  is going to be a plussed voiced</span> <span m='1073430'>port, which is going
  to be connected to the second</span> <span m='1078370'>phoneme in the
  sequence.</span> </p><p><span m='1081270'>That's how the machine is going to
  be arranged.</span> </p><p><span m='1084130'>An of course, this is just one of
  many constraints.</span> </p><p><span m='1087630'>But it's a constraint that
  has a very peculiar property.</span> </p><p><span m='1092410'>Information can
  flow through it in multiple ways.</span> </p><p><span m='1096410'>So we think
  of most programs as having an</span> <span m='1098430'>input and an
  output.</span> </p><p><span m='1101430'>But I try to be careful to draw
  circles</span> <span m='1104630'>here instead of arrows.</span> </p><p><span
  m='1105560'>Because these are ports and information can flow in any</span>
  <span m='1109170'>direction along them.</span> </p><p><span m='1110890'>What I
  want to do now is to show you how this machine</span> <span m='1113240'>would
  react if I suddenly present it with a pair of</span> <span m='1117540'>apples
  like so.</span> </p><p><span m='1120570'>So the assumption is that the vision
  apparatus comes in and</span> <span m='1124740'>produces the notion, the
  concept, of two apples.</span> </p><p><span m='1131140'>So once that has
  happened--</span> <span m='1134690'>that's operation number one--</span> <span
  m='1139370'>then information flows from that meaning register up here</span>
  <span m='1144850'>to the apple word.</span> </p><p><span m='1146810'>So that's
  part of stage number two.</span> </p><p><span m='1151700'>Another part of
  stage number two is information flows along</span> <span m='1154240'>this wire
  and marks that as plus plural.</span> </p><p><span m='1161200'>So operation
  number one is the activity of the vision system.</span> </p><p><span
  m='1165290'>Activity number two is the flow of information from that</span>
  <span m='1168770'>vision system into the word lexicon and</span> <span
  m='1173010'>into this plural register.</span> </p><p><span m='1177690'>So far
  so good.</span> </p><p><span m='1178900'>Here's activity number three.</span>
  </p><p><span m='1182560'>This word is also connected to the registers.</span>
  </p><p><span m='1189850'>And information flows along those wires so as to
  indicate</span> <span m='1193900'>that it's a noun but not a verb.</span>
  </p><p><span m='1196860'>That's part of part number three.</span> </p><p><span
  m='1200640'>At the same time, part number three, information flows down</span>
  <span m='1205050'>this wire and writes a-p-l into those are</span> <span
  m='1211000'>elements of the buffer.</span> </p><p><span m='1215940'>Now this
  constraint up here, this box, says, well, I can</span> <span m='1220490'>now
  see some stuff in that buffer that</span> <span m='1222480'>wasn't there
  before.</span> </p><p><span m='1224430'>So it says, do I see enough stuff on
  my ports to get</span> <span m='1228410'>excited about expressing values on
  other ports?</span> </p><p><span m='1233300'>Well, let's see.</span>
  </p><p><span m='1233730'>What has it got?</span> </p><p><span m='1234780'>It's
  got the elements in this buffer.</span> </p><p><span m='1238890'>Also up here
  in step three flow the plural thing.</span> </p><p><span m='1242270'>So it
  know that the word is plural.</span> </p><p><span m='1244400'>So it says, is
  this voiced?</span> </p><p><span m='1248330'>P is pa.</span> </p><p><span
  m='1250130'>That's not voiced.</span> </p><p><span m='1251920'>Is this a z
  sound.</span> </p><p><span m='1253180'>No, that's not as z sound.</span>
  </p><p><span m='1255410'>So it sees what it likes on only one of its three
  ports.</span> </p><p><span m='1259930'>So it says, I'm not going to do
  anything.</span> </p><p><span m='1261750'>I'm [INAUDIBLE].</span> </p><p><span
  m='1263500'>I'm not in this particular combat.</span> </p><p><span
  m='1267370'>So far so good.</span> </p><p><span m='1268440'>What happens
  next?</span> </p><p><span m='1270460'>What happens next is that some time
  passes.</span> </p><p><span m='1275100'>And the elements of the buffer flow to
  the left toward the</span> <span m='1278780'>speaker's mouth.</span>
  </p><p><span m='1280820'>So we get an a, p, l.</span> </p><p><span
  m='1284720'>Same as we had before, but shifted over.</span> </p><p><span
  m='1287700'>Now what happens?</span> </p><p><span m='1291110'>Now what happens
  is that the l is now in</span> <span m='1295870'>the penultimate
  position.</span> </p><p><span m='1297680'>So information flows up here.</span>
  </p><p><span m='1300100'>Item number four-- oh, I guess that's item number
  five.</span> </p><p><span m='1303860'>Item number four is the leftward flow of
  the word.</span> </p><p><span m='1308290'>So in phase number five, the p is
  witnessed by this</span> <span m='1311360'>constraint.</span> </p><p><span
  m='1312990'>p is--</span> <span m='1314210'>sorry, l is witnessed by this
  constraint.</span> </p><p><span m='1315990'>We moved it over one.</span>
  </p><p><span m='1317950'>L is lll.</span> </p><p><span m='1318850'>L is
  voiced.</span> </p><p><span m='1320570'>So we have some flow up here like
  that.</span> </p><p><span m='1323940'>That's number five.</span> </p><p><span
  m='1326470'>Now we have voiced and we have plural.</span> </p><p><span
  m='1330640'>And we have nothing here.</span> </p><p><span m='1332940'>So
  there's a great desire of this buffer to have something</span> <span
  m='1336340'>written into it.</span> </p><p><span m='1337500'>So now there's a
  flow down in there, of z,</span> <span m='1341370'>as item number six.</span>
  </p><p><span m='1343170'>So that's how the machine would work in expressing
  the</span> <span m='1346730'>idea that there are apples in the field of
  view.</span> </p><p><span m='1355196'>Mmm.</span> </p><p><span
  m='1356610'>Real apples.</span> </p><p><span m='1357720'>Not plastic
  imitations.</span> </p><p><span m='1362870'>So that's how the machine
  works.</span> </p><p><span m='1366140'>But all those connections are
  reversible.</span> </p><p><span m='1371100'>So if I hear apples then I get the
  machine running backwards</span> <span m='1376545'>and my visual apparatus can
  imagine that there</span> <span m='1380025'>are apples out there.</span>
  </p><p><span m='1381692'>That's how it works.</span> </p><p><span
  m='1384030'>That's just by way of background the machine that</span> <span
  m='1387090'>they could see it for using the phonological rules once</span>
  <span m='1390490'>they're learned.</span> </p><p><span m='1391880'>All the
  phonological rules are expressed in these</span> <span
  m='1395400'>constraints.</span> </p><p><span m='1397710'>But since these
  constraints are such that information can</span> <span m='1400270'>flow in any
  direction, they deserve to be called</span> <span
  m='1402990'>propagators.</span> </p><p><span m='1410290'>And in the good old
  days when everyone took 6.001, they</span> <span m='1413760'>learned about
  propagators as a kind of architecture for</span> <span m='1417370'>building
  complex systems.</span> </p><p><span m='1420380'>But in any event, there's the
  Sussman-Yip machine.</span> </p><p><span m='1423060'>And now comes the big
  question.</span> </p><p><span m='1424600'>How do you learn rule rules like
  that?</span> </p><p><span m='1429010'>Well, what we need is we need some
  positive examples and</span> <span m='1432120'>some negative examples.</span>
  </p><p><span m='1436910'>And for the simple classroom example I've chosen the
  same</span> <span m='1440210'>challenge that I presented to Krishna.</span>
  </p><p><span m='1443780'>We're gonna have cats and dogs.</span> </p><p><span
  m='1446730'>So we're gonna look at the distinctive features that are</span>
  <span m='1450340'>associated with those words.</span> </p><p><span
  m='1455220'>Syllabic.</span> </p><p><span m='1457020'>Voiced.</span>
  </p><p><span m='1460050'>Continuent.</span> </p><p><span m='1465510'>And
  strident.</span> </p><p><span m='1470740'>Just four of the 14 features that
  are associated with each</span> <span m='1474130'>of the sounds on those
  words.</span> </p><p><span m='1475940'>Could you close the laptop,
  please?</span> </p><p><span m='1480680'>Just for the distinctive features that
  are arrayed in</span> <span m='1487375'>those words by way of
  illustration.</span> </p><p><span m='1491160'>So here we have k-a-t-z.</span>
  </p><p><span m='1496450'>Phonetically spelled.</span> </p><p><span
  m='1504050'>And if we work that out, let's see.</span> </p><p><span
  m='1506810'>What is syllabic?</span> </p><p><span m='1508460'>That's
  not.</span> </p><p><span m='1508900'>That is.</span> </p><p><span
  m='1509450'>That is.</span> </p><p><span m='1511060'>That's not.</span>
  </p><p><span m='1514090'>Voiced?</span> </p><p><span m='1514610'>Ka.</span>
  </p><p><span m='1515170'>Nope.</span> </p><p><span m='1516204'>Ah.</span>
  </p><p><span m='1516648'>Yep.</span> </p><p><span m='1517980'>T. Nope.</span>
  </p><p><span m='1519570'>Z. Yes.</span> </p><p><span m='1521540'>That can't be
  right.</span> </p><p><span m='1522660'>Cats.</span> </p><p><span m='1525070'>I
  misspelled it.</span> </p><p><span m='1526610'>Because cats.</span>
  </p><p><span m='1527225'>Sss.</span> </p><p><span m='1528310'>His a hissing
  sound but there's no voicing.</span> </p><p><span m='1531590'>So that's not as
  z sound.</span> </p><p><span m='1532910'>That's an s sound.</span>
  </p><p><span m='1535780'>So that's not plus voiced.</span> </p><p><span
  m='1536960'>It's minused voiced.</span> </p><p><span
  m='1538860'>Continuent.</span> </p><p><span m='1540980'>Let's see.</span>
  </p><p><span m='1541670'>Is my mouth open when I say k?</span> </p><p><span
  m='1543180'>No.</span> </p><p><span m='1544120'>Ah?</span> </p><p><span
  m='1544420'>Yes.</span> </p><p><span m='1545790'>T?</span> </p><p><span
  m='1546280'>No.</span> </p><p><span m='1547660'>S?</span> </p><p><span
  m='1548110'>Yes.</span> </p><p><span m='1549860'>And strident.</span>
  </p><p><span m='1550870'>Minus, minus, minus, plus.</span> </p><p><span
  m='1553120'>It's only with the s sound that I have that kind of jet</span>
  <span m='1556650'>forming with my tongue.</span> </p><p><span m='1559270'>Now
  we can look at dogs.</span> </p><p><span m='1571950'>And now we have the z
  sound as the pluralization.</span> </p><p><span m='1576450'>We know that
  because when we say it, dogzz.</span> </p><p><span m='1578230'>Yep.</span>
  </p><p><span m='1578700'>There it comes out as a--</span> <span
  m='1580450'>we're only gonna look at the last two columns because</span> <span
  m='1583770'>they're the only ones that are going to matter to us.</span>
  </p><p><span m='1585640'>So that's plus.</span> </p><p><span m='1587960'>And
  that's minus.</span> </p><p><span m='1590906'>Gu, gu, gu, gu.</span>
  </p><p><span m='1596330'>That's plussed.</span> </p><p><span m='1597240'>And
  that's plussed.</span> </p><p><span m='1598220'>They're both voiced.</span>
  </p><p><span m='1599230'>Is that right?</span> </p><p><span
  m='1599730'>Dogu?</span> </p><p><span m='1601800'>Gu.</span> </p><p><span
  m='1602700'>Gu.</span> </p><p><span m='1603170'>Is g sound voiced?</span>
  </p><p><span m='1611430'>Yeah, I didn't think so.</span> </p><p><span
  m='1613156'>G sound is voiced?</span> </p><p><span m='1623420'>Look--
  oh.</span> </p><p><span m='1624223'>Oh, it is voiced buy it's not a
  continuent.</span> </p><p><span m='1628072'>Just like that.</span>
  </p><p><span m='1630400'>Yeah.</span> </p><p><span m='1631270'>Cat, dogu
  zz.</span> </p><p><span m='1632280'>Yeah.</span> </p><p><span m='1632645'>It
  is voiced.</span> </p><p><span m='1633760'>And it has to be for my example to
  work out.</span> </p><p><span m='1636276'>And that's minus, minus, minus,
  plus.</span> </p><p><span m='1640390'>So what we're interested in is, how come
  one word gets an</span> <span m='1642870'>s sound and how come the other words
  gets a z sound?</span> </p><p><span m='1648080'>Well, it's a pretty sparse
  space out there.</span> </p><p><span m='1651290'>We've already decided that
  there are 14,000 possible</span> <span m='1654670'>phonemes and there are only
  40 in the language.</span> </p><p><span m='1657640'>So that's one thing we can
  consider.</span> </p><p><span m='1660310'>The other thing that we can think is
  that, well, maybe</span> <span m='1664800'>this is a logical problem.</span>
  </p><p><span m='1666100'>Like the kind of problem you'd face if you</span>
  <span m='1667556'>were designing a computer.</span> </p><p><span
  m='1669470'>And so Sussman and Yip got stuck for three months</span> <span
  m='1671870'>thinking about the problem that way.</span> </p><p><span
  m='1674250'>Couldn't make any progress whatsoever.</span> </p><p><span
  m='1676050'>And that happens a lot when you're doing a search.</span>
  </p><p><span m='1678920'>You think you've got a way of approaching it.</span>
  </p><p><span m='1681940'>Try to make it work.</span> </p><p><span
  m='1683210'>You stay up all night.</span> </p><p><span m='1685300'>Stay up all
  night again.</span> </p><p><span m='1686550'>Still can't make it work.</span>
  </p><p><span m='1688310'>Eventually, you abandon ship and try something
  else.</span> </p><p><span m='1691222'>So then they began to say, well, let's
  see.</span> </p><p><span m='1694820'>All we care about is the stuff before the
  two ending sounds.</span> </p><p><span m='1698880'>We care about that part of
  the matrix.</span> </p><p><span m='1702580'>And we care about that part of the
  matrix.</span> </p><p><span m='1705250'>And we can ask, in what ways are those
  things different?</span> </p><p><span m='1709730'>And they're different all
  over the place.</span> </p><p><span m='1711150'>That's why they're different
  words.</span> </p><p><span m='1713090'>We can ask the question a little bit
  differently.</span> </p><p><span m='1714730'>And we can say, what can we not
  care about?</span> </p><p><span m='1718380'>And still retain enough of an
  understanding of how the words</span> <span m='1721860'>are different so as to
  put the proper plural ending on them.</span> </p><p><span m='1726990'>And they
  worried about that for a long time.</span> </p><p><span m='1729075'>Couldn't
  find a solution.</span> </p><p><span m='1730250'>The search space was too
  big.</span> </p><p><span m='1732840'>And then they said, maybe what we ought
  to do is we ought to</span> <span m='1737160'>think about generalizing this
  guy here so that we</span> <span m='1740550'>don't care about it.</span>
  </p><p><span m='1743640'>So now we don't care about that guy.</span>
  </p><p><span m='1746080'>And then he went down through here saying, well,
  let's see</span> <span m='1749220'>when we have to stop generalizing.</span>
  </p><p><span m='1751740'>Because we've screwed everything up and we can
  no</span> <span m='1755790'>longer keep the z sound words separated</span>
  <span m='1759200'>from the s sound words.</span> </p><p><span m='1762470'>So
  that eventually distilled itself down to</span> <span m='1764240'>the
  following algorithm.</span> </p><p><span m='1769710'>First thing they did was
  to collect positive</span> <span m='1777010'>and negative examples.</span>
  </p><p><span m='1783760'>And there's a positive example and a negative
  example.</span> </p><p><span m='1786870'>That's not enough to do it
  right.</span> </p><p><span m='1788250'>But that's enough to illustrate the
  idea.</span> </p><p><span m='1791960'>So the next thing they did was something
  that's extremely</span> <span m='1795060'>common in learning anything.</span>
  </p><p><span m='1797930'>And that is to pick a positive example to start
  from.</span> </p><p><span m='1801950'>It's actually not a bad idea in learning
  anything to start</span> <span m='1805900'>with a positive example.</span>
  </p><p><span m='1808650'>So they picked a positive example and they</span>
  <span m='1810480'>called that a seed.</span> </p><p><span m='1820990'>So in
  our particular case, cats is going to be our seed.</span> </p><p><span
  m='1826070'>And the question we're going to ask is, what are the words</span>
  <span m='1829700'>that get pluralized like cat?</span> </p><p><span
  m='1834530'>So we've got a positive and negative example.</span> </p><p><span
  m='1837350'>We've picked a seed.</span> </p><p><span m='1838890'>And now, the
  next step is to generalize.</span> </p><p><span m='1847370'>And what I mean by
  generalize is you pick some places in the</span> <span m='1850360'>phoneme
  matrix that you just don't care about.</span> </p><p><span m='1854160'>So you
  may pick a positive example.</span> </p><p><span m='1856710'>And you don't
  care about it.</span> </p><p><span m='1858100'>So you change it to an asterisk
  or, as demonstrated</span> <span m='1861960'>in the program I'm about show
  you, a ball.</span> </p><p><span m='1864600'>Or you pick one that's negative
  and you</span> <span m='1868820'>turn it to a ball.</span> </p><p><span
  m='1870240'>Bo.</span> </p><p><span m='1871630'>So cats, this seed, becomes a
  pattern.</span> </p><p><span m='1875210'>And in order to pluralize the word
  this way, you have to</span> <span m='1878470'>match all the stuff in
  here.</span> </p><p><span m='1880100'>But now what we're going to do is we're
  going to gradually</span> <span m='1882390'>turn some of those elements into
  don't care symbols until</span> <span m='1888860'>we get to a point where
  we've not cared about so much stuff</span> <span m='1892910'>that we think
  that we pluralize that one</span> <span m='1894470'>with an s sound
  too.</span> </p><p><span m='1897200'>So we keep generalizing until we cover,
  that is to say we</span> <span m='1906100'>admit or match, a negative
  example.</span> </p><p><span m='1910561'>So that's how it works.</span>
  </p><p><span m='1913070'>So we generalize like crazy.</span> </p><p><span
  m='1914980'>And as soon as we cover a negative example, we quit.</span>
  </p><p><span m='1921910'>Otherwise, we just go back up here and generalize
  some more.</span> </p><p><span m='1928410'>And now we've got to pick a search
  technique to decide</span> <span m='1932670'>which of these guys to actually
  generalize when.</span> </p><p><span m='1938130'>We could pick one at
  random.</span> </p><p><span m='1940940'>And they tried that.</span>
  </p><p><span m='1941870'>It didn't work.</span> </p><p><span m='1943641'>So
  what they decided is that the thing that influences the</span> <span
  m='1946440'>pluralization most is the adjacent phoneme.</span> </p><p><span
  m='1949740'>And if that isn't the thing that solves the problem, it'll</span>
  <span m='1952240'>be the one next to that.</span> </p><p><span m='1953760'>So
  in other words, the closer you are, the more likely you</span> <span
  m='1955837'>are to determine the outcome.</span> </p><p><span m='1957800'>So
  these guys over here are least likely to matter.</span> </p><p><span
  m='1961770'>And those are the ones that are generalized first.</span>
  </p><p><span m='1966390'>So if we do that, what happens?</span> </p><p><span
  m='1970390'>Looks like we're going to come in here and see that there's
  a</span> <span m='1973050'>big difference between the non-voiced t and the
  voiced g.</span> </p><p><span m='1978025'>But that's only a guess because I've
  only shown you a</span> <span m='1980130'>fraction of the 14 distinctive
  features that are involved.</span> </p><p><span m='1984900'>So I suppose you
  like to see a demonstration.</span> </p><p><span m='1987952'>Yeah.</span>
  </p><p><span m='2005180'>So there's our 14 features.</span> </p><p><span
  m='2007590'>And that's our seed there, sitting prominently in the</span> <span
  m='2011350'>display with pluses and minuses indicating the values</span> <span
  m='2015260'>of the distinctive features for all three</span> <span
  m='2016860'>of the phones involved.</span> </p><p><span m='2018460'>That funny
  left bracket isn't a mistake.</span> </p><p><span m='2020120'>That's just one
  convention for rendering the ah sound in cat.</span> </p><p><span
  m='2030510'>So it's pretty hard to tell from just that matrix what's</span>
  <span m='2033190'>going to be the determining feature that separates
  the</span> <span m='2037400'>positive examples from the negative
  examples.</span> </p><p><span m='2039630'>You notice that there are actually
  two</span> <span m='2041460'>examples down here.</span> </p><p><span
  m='2042250'>There's cat and duck.</span> </p><p><span m='2044460'>Is ducks got
  an s sound?</span> </p><p><span m='2046510'>Ducks?</span> </p><p><span
  m='2046930'>Yep.</span> </p><p><span m='2048650'>So dogs and ducks.</span>
  </p><p><span m='2051420'>They both get pluralized with an s sound.</span>
  </p><p><span m='2054400'>And then we have beach doesn't.</span> </p><p><span
  m='2055449'>That's beaches.</span> </p><p><span m='2057840'>Dog.</span>
  </p><p><span m='2058489'>We know that's a z.</span> </p><p><span
  m='2060389'>Gun.</span> </p><p><span m='2061040'>Gunz.</span> </p><p><span
  m='2062310'>So that's not in the group.</span> </p><p><span m='2065070'>So we
  can run this experiment.</span> </p><p><span m='2066900'>Now here we
  go.</span> </p><p><span m='2067699'>We're generalizing like crazy.</span>
  </p><p><span m='2069130'>Generalizing, generalizing, generalizing</span> <span
  m='2070690'>from left to right.</span> </p><p><span m='2073150'>So nothing in
  the first two columns matters.</span> </p><p><span m='2075810'>Now we get to
  the t.</span> </p><p><span m='2078489'>Wow.</span> </p><p><span
  m='2079440'>There it is.</span> </p><p><span m='2080540'>So it looks like you
  pluralize with a s sound.</span> </p><p><span m='2083489'>The sss.</span>
  </p><p><span m='2085780'>If, and only if, you're not voiced and you're not
  strident</span> <span m='2091830'>in the second to the last--</span> <span
  m='2094940'>in the last phone of the word that</span> <span m='2096330'>you're
  trying to pluralize.</span> </p><p><span m='2099400'>So that's one
  phonological rule that</span> <span m='2100950'>the system has learned.</span>
  </p><p><span m='2101910'>And guess what?</span> </p><p><span m='2102330'>It's
  the same rule that's found in</span> <span m='2103520'>phonological
  textbooks.</span> </p><p><span m='2105636'>So now we can try another
  experiment.</span> </p><p><span m='2113290'>So this time we're trying to deal
  with dog and gun.</span> </p><p><span m='2116312'>And our negatives are what
  was previously positive plus</span> <span m='2119630'>beach, which is still in
  there as a negative example.</span> </p><p><span m='2123016'>So let's see how
  that one works.</span> </p><p><span m='2132050'>Nothing matters except for the
  last column, the last phone.</span> </p><p><span m='2136500'>And now we find
  out that if the last sound is voiced, then</span> <span m='2141390'>the
  pluralization gets the z sound, a voiced determinator.</span> </p><p><span
  m='2146550'>And finally, just to deal with beaches.</span> </p><p><span
  m='2149500'>That's beach in it's funny phonetic spelling.</span> </p><p><span
  m='2164410'>So now, if the final sound in the word is strident, if its</span>
  <span m='2170650'>got this jetty sound--</span> <span
  m='2172430'>beach.</span> </p><p><span m='2173640'>Beach.</span> </p><p><span
  m='2175530'>Then it gets the ea sound.</span> </p><p><span m='2178840'>So
  let's go back to experiment number one.</span> </p><p><span
  m='2181570'>Because I want to point out one small thing about the way</span>
  <span m='2184620'>this works.</span> </p><p><span m='2186180'>You'll notice
  that it talks about coverage and excluded</span> <span m='2188190'>down here
  in the lower left-hand corner.</span> </p><p><span m='2190670'>Excluded, well,
  there are three negative examples, so</span> <span m='2193180'>they better all
  be excluded.</span> </p><p><span m='2194630'>You don't want to cover any of
  the negatives.</span> </p><p><span m='2196940'>But it says coverage, two and
  two.</span> </p><p><span m='2199220'>That's because it actually is
  doing--</span> <span m='2202120'>and now we have the vocabulary to say it
  quickly--</span> <span m='2204530'>it's doing a beam search through this
  space.</span> </p><p><span m='2207340'>So it's not just doing a depth first
  search.</span> </p><p><span m='2208870'>It's doing a beam search so as to
  reduce the possibility of</span> <span m='2212840'>overlooking a
  solution.</span> </p><p><span m='2214700'>So it says, oh, the coverage.</span>
  </p><p><span m='2216980'>Both of the beam search elements cover both of
  the</span> <span m='2221950'>positive examples.</span> </p><p><span
  m='2222950'>And they, in fact, have</span> <span m='2224080'>converged to the
  same solution.</span> </p><p><span m='2226850'>So that's how the Sussman and
  Yip thing worked.</span> </p><p><span m='2230920'>And then the next question
  to ask is, of</span> <span m='2232470'>course, why did it work?</span>
  </p><p><span m='2236136'>And so the answer, as articulated</span> <span
  m='2240610'>by Sussman and Yip--</span> <span m='2243270'>or rather more by
  Sussman.</span> </p><p><span m='2244816'>Or rather more by Yip and a little
  bit less by Sussman.</span> </p><p><span m='2248290'>Yip thinks that it worked
  because it's a sparse space.</span> </p><p><span m='2251840'>And when you have
  a high dimensional sparse space, it's</span> <span m='2255110'>easy to put a
  hyperplane into the space to separate one set</span> <span m='2259660'>of
  examples for another set of examples.</span> </p><p><span m='2262100'>So let's
  consider the following situation.</span> </p><p><span m='2271390'>Suppose we
  have a one-dimensional situation.</span> </p><p><span m='2277670'>And we have
  two white examples and we</span> <span m='2282320'>have two purple
  examples.</span> </p><p><span m='2285670'>Well, too bad for us you can't
  separate them.</span> </p><p><span m='2289700'>Now suppose that this is
  actually the projection of a</span> <span m='2293150'>two-dimensional space
  that looks like this.</span> </p><p><span m='2297280'>Here are the white
  examples down here.</span> </p><p><span m='2300280'>And here are the purple
  examples up here.</span> </p><p><span m='2304910'>Now it's easy to see that
  you can separate them with just a</span> <span m='2307390'>line that goes
  across like that.</span> </p><p><span m='2309810'>Now let's take this one more
  step and suppose that this is</span> <span m='2314420'>actually a projection
  of a three-dimensional space.</span> </p><p><span m='2317326'>It looks like
  this.</span> </p><p><span m='2321610'>This will be dimension one.</span>
  </p><p><span m='2323240'>This'll be two going back there.</span> </p><p><span
  m='2326630'>And this will be three up here.</span> </p><p><span
  m='2329900'>And suppose that the positive examples are right</span> <span
  m='2333560'>here on this line.</span> </p><p><span m='2341120'>Let's say this
  is-- well, we're gonna draw a little old</span> <span m='2343980'>cube like
  so.</span> </p><p><span m='2345960'>Those are purple examples that are up
  there.</span> </p><p><span m='2350420'>How many ways are there of partitioning
  the space along</span> <span m='2353150'>those axes?</span> </p><p><span
  m='2353830'>Well, now they're not even just two.</span> </p><p><span
  m='2356510'>They're three.</span> </p><p><span m='2357940'>So one way to
  separate the purple from the white is to</span> <span m='2363620'>draw a
  hyperplane-- or in this case it's a three dimension,</span> <span
  m='2368290'>so a plane--</span> <span m='2369190'>through here on the number
  three axis.</span> </p><p><span m='2373160'>You could also put a plane in on
  that axis.</span> </p><p><span m='2376010'>Or you could do both.</span>
  </p><p><span m='2378100'>So in one case your dividing line would be--</span>
  <span m='2383458'>let's see.</span> </p><p><span m='2384210'>On the first axis
  that would be 1/2.</span> </p><p><span m='2387240'>And then the don't
  care.</span> </p><p><span m='2389220'>Don't care.</span> </p><p><span
  m='2390670'>Another solution that would be don't care.</span> </p><p><span
  m='2393580'>And then we divide on the number 2 axis with a plane at</span>
  <span m='2397830'>1/2 and don't care.</span> </p><p><span m='2400430'>Or we
  could do it with 1/2, 1/2, and don't care.</span> </p><p><span m='2407405'>So
  the higher the dimension of the space, the easier it is</span> <span
  m='2410990'>sometimes to put in a plane that separates the data.</span>
  </p><p><span m='2413750'>That's why Sussman and Yip think that we use so
  little of</span> <span m='2417210'>possible phoneme space.</span> </p><p><span
  m='2418510'>Because it makes the thing learnable.</span> </p><p><span
  m='2420910'>That's one possibility.</span> </p><p><span m='2423920'>So one
  explanation for sparse space is learnability.</span> </p><p><span
  m='2430090'>There's another interesting possibility, and that is that</span>
  <span m='2433790'>if you have a sparse space, high dimensional space with
  14</span> <span m='2437500'>dimensions, and if the 40 points of your language
  are</span> <span m='2442850'>spread evenly throughout that space--</span>
  <span m='2446260'>now let me say it the other way.</span> </p><p><span
  m='2447490'>If they are placed at random in that space, then according</span>
  <span m='2451050'>to the central limit theorem, then they'll be about
  equally</span> <span m='2453190'>distant from each other.</span> </p><p><span
  m='2455320'>So it ensures that the phonemes are easily separated</span> <span
  m='2459050'>when you speak.</span> </p><p><span m='2461870'>But if you go to
  ask a linguist if that's true, they</span> <span m='2466480'>don't
  know.</span> </p><p><span m='2467220'>Because they're not looking at it from
  a</span> <span m='2468240'>computational point of view.</span> </p><p><span
  m='2469865'>Well, we can look at it from a computational point of view.</span>
  </p><p><span m='2472840'>So I did that.</span> </p><p><span m='2474860'>After
  Sussman and Yip published their paper.</span> </p><p><span m='2476940'>And
  here's the result.</span> </p><p><span m='2481330'>This is a diagram that
  shows all of the phonemes that are</span> <span m='2486690'>separated by
  exactly one distinctive feature.</span> </p><p><span m='2490170'>So if you
  look over in this corner here, you'll see that</span> <span m='2492505'>the
  constants-- w and x--</span> <span m='2494640'>are separated by exactly one
  distinctive feature.</span> </p><p><span m='2498520'>So they're not exactly
  distant from each other in the space.</span> </p><p><span m='2503110'>On the
  other hand, they are pretty easy to separate</span> <span m='2505020'>relative
  to the vowels.</span> </p><p><span m='2506960'>Which are here in this part of
  the diagram.</span> </p><p><span m='2509650'>Which are all tangled up and the
  vowels are all close to</span> <span m='2512230'>each other.</span>
  </p><p><span m='2512670'>So guess what?</span> </p><p><span m='2514380'>Vowels
  are much harder to separate than constants.</span> </p><p><span
  m='2517450'>Not surprisingly, because there are many pairs of them</span>
  <span m='2520710'>that are different.</span> </p><p><span m='2521650'>And only
  one distinctive feature.</span> </p><p><span m='2524914'>All right.</span>
  </p><p><span m='2525580'>So now you back up and you say, well, gosh.</span>
  </p><p><span m='2527380'>That's all been sort of interesting.</span>
  </p><p><span m='2528590'>But what does it teach us about how to</span> <span
  m='2531180'>do science and stuff?</span> </p><p><span m='2533062'>And what it
  teaches us is--</span> <span m='2534990'>this is an example.</span>
  </p><p><span m='2537320'>Ow.</span> </p><p><span m='2544360'>This is an
  example which we can use to illuminate some of</span> <span
  m='2547850'>thoughts of David Marr, who I spoke of in a previous</span> <span
  m='2550030'>lecture, connection with vision.</span> </p><p><span
  m='2552882'>But here's Marr's catechism.</span> </p><p><span m='2556560'>I
  can't spell very well so I won't try to respell it.</span> </p><p><span
  m='2558930'>But this is Marr's catechism.</span> </p><p><span m='2561260'>So
  what Marr said is, when you're dealing with an AI</span> <span
  m='2563910'>problem, first thing to do is to specify the problem.</span>
  </p><p><span m='2568425'>Gee, that sounds awfully normal.</span> </p><p><span
  m='2571380'>The next thing is to devise a representation</span> <span
  m='2577410'>suited to the problem.</span> </p><p><span m='2582660'>The third
  thing to do, vocabulary varies, but it's</span> <span m='2586130'>something
  like determine an approach.</span> </p><p><span m='2591660'>Sometimes thought
  of as a method.</span> </p><p><span m='2597080'>And then four, pick a
  mechanism</span> <span m='2608048'>or devise an algorithm.</span> </p><p><span
  m='2616210'>And, finally, five, experiment.</span> </p><p><span
  m='2625840'>And of course, it never goes linearly like that.</span>
  </p><p><span m='2628930'>You start with the problem and then you go through a
  lot of</span> <span m='2631900'>loops up here.</span> </p><p><span
  m='2632570'>Sometimes even changing the problem.</span> </p><p><span
  m='2636740'>But that's just the scientific method, right?</span> </p><p><span
  m='2638320'>You start with the problem and you end up with the</span> <span
  m='2639950'>experiment.</span> </p><p><span m='2641250'>But that's not what
  people in AI, over the bulk of its</span> <span m='2645820'>existence, have
  tended to do.</span> </p><p><span m='2649050'>What they tended to do is to
  fall in love with particular</span> <span m='2653300'>mechanisms.</span>
  </p><p><span m='2655170'>And then they attempt to apply those</span> <span
  m='2656470'>mechanisms to every problem.</span> </p><p><span m='2658690'>So
  you might say, well, gee, neural nets are so cool.</span> </p><p><span
  m='2661680'>I think all of human intelligence can be explained</span> <span
  m='2664545'>with a suitable neural net.</span> </p><p><span m='2667170'>That's
  not the right way to do it.</span> </p><p><span m='2668645'>Because that's
  mechanism envy.</span> </p><p><span m='2670130'>You fall in love with
  mechanism.</span> </p><p><span m='2671275'>You try to apply it where it isn't
  the right thing.</span> </p><p><span m='2674760'>This is example starting with
  the problem and bringing to</span> <span m='2678350'>the problem the right
  representations, gosh,</span> <span m='2680880'>distinctive features.</span>
  </p><p><span m='2682840'>Once we've got the right representation, then
  the</span> <span m='2685630'>constraints emerge, which enable us to devise
  an</span> <span m='2688520'>approach, write an algorithm, and do an
  experiment.</span> </p><p><span m='2691100'>As they did.</span> </p><p><span
  m='2692830'>So this Sussman-Yip thing is an example of doing AI stuff</span>
  <span m='2698560'>in a way that's congruent with the Marr's catechism.</span>
  </p><p><span m='2702700'>Which I highly recommend.</span> </p><p><span
  m='2704650'>They could have come in here and said, well, we're devotees</span>
  <span m='2708040'>of the idea of neural nets.</span> </p><p><span
  m='2710980'>Let's see if we can make a machine that will properly</span> <span
  m='2714480'>pluralize words using a neural net.</span> </p><p><span
  m='2717650'>That's a loser.</span> </p><p><span m='2719370'>Because it doesn't
  match the problem to the mechanism.</span> </p><p><span m='2722140'>It tries
  to force fit the mechanism into some</span> <span m='2725450'>Procrustean bed
  where it doesn't</span> <span m='2728840'>actually work very well.</span>
  </p><p><span m='2731820'>So what this leaves open, of course, is the question
  of,</span> <span m='2734350'>well, what is a good representation?</span>
  </p><p><span m='2739140'>And here's the other half Marr's catechism.</span>
  </p><p><span m='2741910'>Characteristic number one is that it makes the</span>
  <span m='2745300'>right things explicit.</span> </p><p><span m='2749540'>So in
  this particular case, it makes</span> <span m='2751280'>distinctive features
  explicit.</span> </p><p><span m='2754750'>Another thing that Marr was noted
  for was stereo vision.</span> </p><p><span m='2759340'>So in that particular
  world, discontinuities in the image,</span> <span m='2765830'>when you go
  across an edge with the things</span> <span m='2767420'>that were made
  explicit.</span> </p><p><span m='2770160'>Once you've got to a representation
  that makes the</span> <span m='2772020'>right things explicit, you can say,
  does it also expose</span> <span m='2775850'>constraint?</span> </p><p><span
  m='2785730'>And if you have a representation that exposes</span> <span
  m='2787320'>constraint, then you're off and running.</span> </p><p><span
  m='2788450'>Because it's constraint that you need in order to do the</span>
  <span m='2790690'>processing that leads to a solution.</span> </p><p><span
  m='2795050'>So don't have the right representation.</span> </p><p><span
  m='2796055'>If it doesn't expose constraints, you're not going</span> <span
  m='2798080'>to be able to make a very good model out of it.</span>
  </p><p><span m='2800930'>And finally, there's a kind of localness
  criteria.</span> </p><p><span m='2809730'>If you have a representation in
  which you can see the right</span> <span m='2812990'>answer by looking at
  descriptions through soda</span> <span m='2815780'>straw, that's probably a
  better representation than one</span> <span m='2817800'>that's all spread
  out.</span> </p><p><span m='2819700'>It's true with programs, right?</span>
  </p><p><span m='2821185'>If you can see how they work by looking through a
  soda</span> <span m='2823360'>straw, you're in much better situation to
  understand</span> <span m='2826450'>something if you have to look here and
  there and on the next</span> <span m='2828770'>page and in the next
  file.</span> </p><p><span m='2831560'>So all this is basically common
  sense.</span> </p><p><span m='2835510'>But this is kind of common sense that
  makes you smarter</span> <span m='2838560'>as an engineer and
  scientist.</span> </p><p><span m='2840200'>Especially as a scientist because
  if you go into a</span> <span m='2843080'>problem with mechanism envy, you're
  apt to study mechanisms</span> <span m='2847850'>in a naive way and never
  reach a solution that will be</span> <span m='2852280'>satisfactory.</span>
  </p><p></p>
embedded_media:
  - uid: ea9d16335d713181cc347f9708794ac9
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: L73hY1pBcQI
  - uid: 3d95eb9116e2d85f94da0bc7a0aca502
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-14-learning-sparse/id765641080?i=194475710
  - uid: 73e6e355540060c77320b465df9a3d30
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec14_300k.mp4'
  - uid: 1f7b2d46f0326e6df085e14b1a85153e
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/L73hY1pBcQI/default.jpg'
  - uid: 16774257ef667ad3e225df1a5604572c
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: L73hY1pBcQI
  - uid: ef358cecc8a805c9ec99c12987c3eafe
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: L73hY1pBcQI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-14-learning-sparse-spaces-phonology/L73hY1pBcQI.srt
  - uid: 59c59428343bd3b85959070528384fcd
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: L73hY1pBcQI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-14-learning-sparse-spaces-phonology/L73hY1pBcQI.pdf
  - uid: 68a9dae1320d177d234fb5ea2e87e67d
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: f8549ea909b3d51065ceadd226ae9eef
    parent_uid: 69953385d63e7bd83eaa1c2e0f07f2bf
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
