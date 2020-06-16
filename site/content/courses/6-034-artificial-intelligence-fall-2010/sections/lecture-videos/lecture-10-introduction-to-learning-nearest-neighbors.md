---
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture begins with a high-level view of
  learning, then covers nearest neighbors using several graphical examples.  We
  then discuss how to learn motor skills such as bouncing a tennis ball, and
  consider the effects of sleep deprivation.</p> <p><strong>Instructor:</strong>
  Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 09mb78oiPkA
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: Video-YouTube-Stream
    type: Video
    uid: 8aaffda82e9c2d72155a3f0f226bc185
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-10-introduction-to/id765641080?i=194473719
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: Video-iTunes U-MP4
    type: Video
    uid: b43f7e42e989330cc11e6424cde393c9
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec10_300k.mp4'
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: Video-Internet Archive-MP4
    type: Video
    uid: 76d20a78d8be28170cfccc45946cd923
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/09mb78oiPkA/default.jpg'
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 626a9a867ddcf87068ae8c3247eb07bb
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 09mb78oiPkA
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ee5e710a866002ff66e3bfe98610abb7
  - id: 09mb78oiPkA.srt
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-10-introduction-to-learning-nearest-neighbors/09mb78oiPkA.srt
    title: 3play caption file
    type: null
    uid: d541d586220082ff5ba56851e123c600
  - id: 09mb78oiPkA.pdf
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-10-introduction-to-learning-nearest-neighbors/09mb78oiPkA.pdf
    title: 3play pdf file
    type: null
    uid: 2dc043b8db5e1b94973f099d9a1f1672
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 71abbf4928250eef79d258a67c7b5f60
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 5ecfa634ca4a6d6a6acb0be675223f88
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 148bf2cbebf71e030cbefe8274767a30
inline_embed_id: '99741113lecture10:introductiontolearning,nearestneighbors34547889'
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: ''
short_url: lecture-10-introduction-to-learning-nearest-neighbors
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-10-introduction-to-learning-nearest-neighbors
title: 'Lecture 10: Introduction to Learning, Nearest Neighbors'
transcript: >-
  <p><span m='9670'>PROF.</span> </p><p><span m='9717'>PATRICK WINSTON: Well
  that's the Kodo Drummers.</span> </p><p><span m='12460'>They're a group of
  about 30 or 40 Japanese people who live in</span> <span m='17290'>a village on
  some island off the coast of Japan, and</span> <span m='20880'>preserve
  traditional Japanese music.</span> </p><p><span m='24690'>It's an unusual semi
  communal group.</span> </p><p><span m='26830'>They generally run about 10
  kilometers before breakfast,</span> <span m='33500'>which is served at 5:00
  AM.</span> </p><p><span m='36730'>Strange group.</span> </p><p><span
  m='38730'>Wouldn't miss a concert for the world, although they,</span> <span
  m='41460'>alas, don't seem to be coming down to the</span> <span
  m='44130'>Boston area very soon.</span> </p><p><span m='46970'>If you go to a
  concert from the Kodo</span> <span m='49130'>Drummers--and you should--</span>
  <span m='51480'>and if you're no longer young, you'll want to bring
  earplugs.</span> </p><p><span m='55880'>Because, as we humans get older the
  dynamic range</span> <span m='63490'>control in our inner ear tends to be less
  effective.</span> </p><p><span m='67580'>So that's why a person of my age
  might find some piece of</span> <span m='72900'>music excruciatingly loud,
  whereas you'll</span> <span m='74960'>think it's just fine.</span>
  </p><p><span m='75990'>Because you have better automatic gain control.</span>
  </p><p><span m='78200'>Just like in any kind of communication device there's
  a</span> <span m='82470'>control on how intense the sound gets.</span>
  </p><p><span m='85611'>Ah, but I go off on a sidebar.</span> </p><p><span
  m='90090'>Many of you have looked at me in astonishment</span> <span
  m='94310'>as I drink my coffee.</span> </p><p><span m='97622'>And you have
  undoubtedly have been saying to yourself, you</span> <span m='99645'>know,
  Winston doesn't look like a professional athlete,</span> <span m='102960'>but
  he seemed to have no trouble drinking his coffee.</span> </p><p><span
  m='107979'>So today's material is going to be pretty easy.</span> </p><p><span
  m='111120'>So I want to give you the side problem of thinking about how</span>
  <span m='114080'>it's possible for somebody to do that.</span> </p><p><span
  m='118830'>How is it possible?</span> </p><p><span m='119509'>How would you
  make a computer program that could reach out</span> <span m='123140'>and drink
  a cup of coffee, if it wanted a cup of coffee?</span> </p><p><span
  m='127850'>So that's one puzzle I'd like you to work on.</span> </p><p><span
  m='129370'>There's another puzzle, too.</span> </p><p><span m='132030'>And
  that puzzle concerns diet drinks.</span> </p><p><span m='135660'>This is a
  so-called Diet Coke.</span> </p><p><span m='142900'>Yeah, it's ripe.</span>
  </p><p><span m='145920'>If you take a Diet Coke and ask yourself, what would a
  dog</span> <span m='153120'>think a Diet Coke is for?</span> </p><p><span
  m='156900'>That's another puzzle that you can work on while we go</span> <span
  m='160730'>through the material of the day.</span> </p><p><span m='162800'>So
  this is our first lecture on learning, and I want to</span> <span
  m='165150'>spend a minute or two in the beginning talking about the</span>
  <span m='167790'>lay of the land.</span> </p><p><span m='168990'>And then
  we'll race through some material on nearest</span> <span m='172190'>neighbor
  learning.</span> </p><p><span m='172910'>And then we'll finish up with the
  advertised</span> <span m='176850'>discussion of sleep.</span> </p><p><span
  m='179010'>Because I know many of you think that because your MIT</span> <span
  m='182820'>students you're pretty tough, and you don't need</span> <span
  m='184370'>to sleep and stuff.</span> </p><p><span m='185855'>And we need to
  address that question before it's too late</span> <span m='189950'>in the
  semester to get back on track.</span> </p><p><span m='193320'>All
  right.</span> </p><p><span m='193730'>So here's the story.</span> </p><p><span
  m='196720'>Now the way we're going to look at learning is</span> <span
  m='198500'>there are two kinds.</span> </p><p><span m='200790'>There's this
  kind, and there's that kind.</span> </p><p><span m='204780'>And we're going to
  talk a little bit about both kinds.</span> </p><p><span m='207640'>The kind of
  the right is learning based on observations</span> <span m='212340'>of
  regularity.</span> </p><p><span m='219750'>And computers are particularly good
  at this stuff.</span> </p><p><span m='224190'>And amongst the things that
  we'll talk about in connection</span> <span m='229320'>with regularity based
  learning are today's topic, which is</span> <span m='232130'>nearest
  neighbors.</span> </p><p><span m='239110'>Then a little bit downstream we'll
  talk about neural nets.</span> </p><p><span m='248250'>And then somewhere near
  the end of the segment, we'll talk</span> <span m='251340'>about
  boosting.</span> </p><p><span m='257690'>And these ideas come from all over
  the place.</span> </p><p><span m='260209'>In particular, the stuff we're
  talking about today, nearest</span> <span m='263590'>neighbors, is the stuff
  of which the field of pattern</span> <span m='267010'>recognition--</span>
  <span m='274900'>it's the stuff of which pattern recognition journals</span>
  <span m='277690'>are filled.</span> </p><p><span m='278909'>This stuff has
  been around a long time.</span> </p><p><span m='280450'>Does that mean it's
  not good?</span> </p><p><span m='283970'>I hope not, because that would mean
  that everything you</span> <span m='285850'>learned in 1801 is not good,
  because the same course was</span> <span m='290060'>taught 1910.</span>
  </p><p><span m='292980'>So it has been around a while, but it's extremely
  useful.</span> </p><p><span m='295950'>And it's the first thing to try when
  you have a learning</span> <span m='297980'>problem, because it's the simplest
  thing.</span> </p><p><span m='300570'>And you always want to try the simplest
  thing before you try</span> <span m='303200'>something more complex that you
  will be less likely to</span> <span m='307480'>understand.</span> </p><p><span
  m='309280'>So that's nearest neighbors and pattern recognitions.</span>
  </p><p><span m='311360'>And the custodians of knowledge about neural
  nets,</span> <span m='314060'>well this is sort of an attempt to mimic
  biology.</span> </p><p><span m='321930'>And I'll cast a lot of calumny on that
  when we get down there</span> <span m='324370'>to talk about it.</span>
  </p><p><span m='326000'>And finally, this is the gift of the
  theoreticians.</span> </p><p><span m='331610'>So we in AI have invented some
  stuff, we've borrowed some</span> <span m='335550'>stuff, we've stolen some
  stuff, we've championed some</span> <span m='338400'>stuff, and we've improved
  some stuff.</span> </p><p><span m='340520'>That's why our discussion of
  learning will reach around all</span> <span m='343210'>of these topics.</span>
  </p><p><span m='346030'>So that's regularity based learning.</span>
  </p><p><span m='347409'>And you can think of this as the branch</span> <span
  m='350100'>of bulldozer computing.</span> </p><p><span m='354200'>Because,
  when doing these kinds of things, a computer's</span> <span
  m='357750'>processing information like a bulldozer processes gravel.</span>
  </p><p><span m='361426'>Now that's not necessarily a good model for all the
  kinds</span> <span m='364530'>of learning that humans do.</span> </p><p><span
  m='366140'>And after all, learning is one of the things that we think</span>
  <span m='368810'>characterizes human intelligence.</span> </p><p><span
  m='371040'>So if we were to build models of it and understand that we</span>
  <span m='373310'>have to go down this other branch, too.</span> </p><p><span
  m='375800'>And down this other branch we find learning ideas that are</span>
  <span m='379530'>based on constraint.</span> </p><p><span m='385490'>And let's
  call this the</span> <span m='386540'>human-like side of the picture.</span>
  </p><p><span m='393270'>And we'll talk about ideas that enable, for
  example,</span> <span m='398310'>one-shot learning, where you learn something
  definite from</span> <span m='402230'>each experience.</span> </p><p><span
  m='404530'>And we'll talk about explanation based learning.</span>
  </p><p><span m='416870'>By the way, do you learn by self explanation?</span>
  </p><p><span m='424930'>I think so.</span> </p><p><span m='425430'>I had an
  advisee once, who got nothing but A's and F's.</span> </p><p><span
  m='429220'>And I said, what are the subjects that you get A's in?</span>
  </p><p><span m='432600'>And why don't you get A's in all of your
  subjects?</span> </p><p><span m='434420'>And he said, oh, I get A's in the
  subjects when I convince</span> <span m='437360'>myself the material is
  true.</span> </p><p><span m='439800'>So the learning was a byproduct of self
  explanation,</span> <span m='443060'>an important kind of learning.</span>
  </p><p><span m='445720'>But alas, that's downstream.</span> </p><p><span
  m='448860'>And what we're going to talk about today is this path</span> <span
  m='452630'>through the tree, nearest neighbor learning.</span> </p><p><span
  m='456650'>And here's how it works, in general.</span> </p><p><span
  m='462310'>Here's just a general picture of what we're talking about.</span>
  </p><p><span m='465430'>When you think of pattern recognition, or
  nearest</span> <span m='467130'>neighbor based learning, you've got some sort
  of</span> <span m='470870'>mechanism that generates a vector of
  features.</span> </p><p><span m='475940'>So we'll call this the feature
  detector.</span> </p><p><span m='482790'>And out comes a vector of
  values.</span> </p><p><span m='485652'>And that vector of values goes into
  a</span> <span m='489090'>comparator of some sort.</span> </p><p><span
  m='497070'>And that comparator compares the feature vector with</span> <span
  m='501240'>feature vectors coming from a library of possibilities.</span>
  </p><p><span m='506960'>And by finding the closest match the comparator</span>
  <span m='511440'>determines what some object is.</span> </p><p><span
  m='515460'>It does recognition.</span> </p><p><span m='522360'>So let me
  demonstrate that with these electrical covers.</span> </p><p><span
  m='527870'>Suppose they arrived on an assembly line and some robot</span>
  <span m='533580'>wants to sort them.</span> </p><p><span m='534820'>How would
  it go about doing that?</span> </p><p><span m='536830'>Well it could easily
  use the nearest</span> <span m='538080'>neighbor sorting mechanism.</span>
  </p><p><span m='540240'>So how would that work?</span> </p><p><span
  m='541440'>Well here's how if would work.</span> </p><p><span m='545350'>You
  would make some measurements.</span> </p><p><span m='547490'>And it we'll just
  make some measurements in two</span> <span m='550310'>dimensions.</span>
  </p><p><span m='551950'>And one of those measurements might be the total
  area,</span> <span m='557030'>including the area of the holes of</span> <span
  m='558780'>these electrical covers.</span> </p><p><span m='560440'>Just so you
  can follow what I'm doing without craning your</span> <span m='562430'>neck,
  let me see if I can find the electrical covers.</span> </p><p><span
  m='567102'>Yes, there they are.</span> </p><p><span m='569040'>So we've got
  one big blank one, and several others.</span> </p><p><span m='573080'>So we
  might also measure the hole area.</span> </p><p><span m='580190'>And this one
  here, this guy here, this big white one has</span> <span m='585320'>no hole
  area, and its got the maximum amount of total area.</span> </p><p><span
  m='588910'>So it will find itself at that point in</span> <span
  m='591410'>this space of features.</span> </p><p><span m='596590'>Then we've
  got the guy here, with room for</span> <span m='602710'>four sockets in
  it.</span> </p><p><span m='604330'>That's got the maximum amount of hole area,
  as well as the</span> <span m='606980'>maximum amount of area.</span>
  </p><p><span m='608360'>So it will be right straight up, maybe up here.</span>
  </p><p><span m='614180'>Then we have, in addition to those two, a blank cover,
  like</span> <span m='620230'>this, that's got about 1/2 the total area that
  any cover can</span> <span m='624670'>have, so we'll put it right here.</span>
  </p><p><span m='626710'>And finally, we've got one more of these guys.</span>
  </p><p><span m='631560'>Oh yes, this one.</span> </p><p><span m='632590'>1/2
  the hole area, and 1/2 the total area.</span> </p><p><span m='636580'>So I
  don't know, let's see.</span> </p><p><span m='637680'>Where will that
  go?</span> </p><p><span m='640370'>Maybe about right here.</span> </p><p><span
  m='644400'>So now our robot is looking on the assembly line and it sees</span>
  <span m='647330'>something coming along, and it measures the area.</span>
  </p><p><span m='649570'>And of course, there's noise.</span> </p><p><span
  m='651320'>There's manufacturing variability.</span> </p><p><span
  m='653840'>So it won't be precisely on top of anything.</span> </p><p><span
  m='655960'>But suppose it's right there.</span> </p><p><span m='659090'>Well
  it doesn't take any genius human, human or</span> <span m='661820'>computer,
  to figure out that this must be one of those guys</span> <span m='664360'>with
  maximum area and maximum hole area.</span> </p><p><span m='670430'>But now
  let's ask some other questions.</span> </p><p><span m='672880'>Where would
  [TAPPING ON CHALK BOARD], what</span> <span m='681595'>would that be?</span>
  </p><p><span m='683460'>Or what would this be?</span> </p><p><span
  m='684780'>[TAPPING ON CHALK BOARD], and so on.</span> </p><p><span
  m='688570'>Well we have to figure out what those newly viewed</span> <span
  m='694980'>objects are closest to in order to do an identification.</span>
  </p><p><span m='699162'>But that's easy.</span> </p><p><span m='700350'>We
  just calculate the distance to all of those standard,</span> <span
  m='706050'>platonic, ideal descriptions of things, and we find out</span>
  <span m='709980'>which is nearest.</span> </p><p><span m='711790'>But in
  general, it's a little easier to think about</span> <span m='715610'>producing
  some boundaries between these various idealize</span> <span m='721580'>places,
  so that we can just say, well which area</span> <span m='724530'>is the object
  in?</span> </p><p><span m='725540'>And then we'll know instantaneously to
  what</span> <span m='728900'>category it belongs.</span> </p><p><span
  m='731250'>So if we only had two, like the purple one and the yellow</span>
  <span m='735140'>one, it would be easy.</span> </p><p><span
  m='736880'>Because, we would just construct a line between the</span> <span
  m='741520'>two, with a line between the purple and yellow as a</span> <span
  m='747290'>perpendicular bisector.</span> </p><p><span m='749390'>And so
  drawing it out instead of talking about it, if there</span> <span
  m='752550'>were only two, that would be the boundary line.</span> </p><p><span
  m='755270'>Anything south of the dotted line would be purple, and</span> <span
  m='758270'>anything north would be yellow.</span> </p><p><span m='761180'>And
  now we can do this with all the points, right?</span> </p><p><span
  m='763570'>So we can figure out-- oh could you, Pierre, could you</span> <span
  m='766350'>just close the lap top please?</span> </p><p><span m='770800'>So if
  we want to do this with all these guys it would go</span> <span
  m='775620'>something like this--</span> <span m='777390'>I better get rid of
  these dotted x's before</span> <span m='779450'>they confuse me.</span>
  </p><p><span m='781600'>Let's see, if these were the only two points, then we
  would</span> <span m='784930'>want to construct a perpendicular bisector
  between</span> <span m='787460'>the line joining them.</span> </p><p><span
  m='789762'>And if these two were the only points, I would want to</span> <span
  m='793860'>construct this perpendicular bisector.</span> </p><p><span
  m='797060'>And if these two were the only points, I would want to</span> <span
  m='801520'>construct a perpendicular bisector.</span> </p><p><span
  m='804100'>And if these two points were the only ones involved I'd</span>
  <span m='807180'>want to construct--</span> <span m='807960'>oh, you see what
  I'm doing?</span> </p><p><span m='810480'>I'm constructing perpendicular
  bisectors, and those are</span> <span m='813410'>exactly the lines that I need
  in order to</span> <span m='818520'>divide up this space.</span> </p><p><span
  m='820530'>And it's going to divide up like this.</span> </p><p><span
  m='828240'>And I won't say we'll give you a problem like this on an</span>
  <span m='830230'>examination, but we have every year in the past ten.</span>
  </p><p><span m='834630'>To divide up a space and produce--</span> <span
  m='838310'>something we would like to give a name.</span> </p><p><span
  m='839730'>You know, Rumpelstiltskin effect, when you have a name</span> <span
  m='842010'>you get power over it.</span> </p><p><span m='843390'>So we're
  going to call these decision boundaries.</span> </p><p><span m='854160'>OK so
  those are the simple decision boundaries, produced</span> <span m='856760'>in
  a sample space, by a simple idea.</span> </p><p><span m='861050'>But there is
  a little bit more to say about this.</span> </p><p><span m='866030'>Because,
  I've talked about this as if we're trying to</span> <span m='869450'>identify
  something.</span> </p><p><span m='871510'>There's another way of thinking
  about it that's</span> <span m='874560'>extremely important.</span>
  </p><p><span m='876500'>And that is this.</span> </p><p><span
  m='878180'>Suppose I come in with a brand new cover, never before seen.</span>
  </p><p><span m='883340'>And I only measure, well let's say I only</span> <span
  m='892780'>measure the hole area.</span> </p><p><span m='894710'>And the hole
  area has that value.</span> </p><p><span m='901610'>What is the most likely
  total area?</span> </p><p><span m='908610'>Well I don't know.</span>
  </p><p><span m='910060'>But there's a kind of weak principle of, if something
  is</span> <span m='913290'>similar in some respects, it's likely to be</span>
  <span m='915250'>similar in other respects.</span> </p><p><span m='916175'>So
  I'm going to guess, if you hold a knife to my throat and</span> <span
  m='919100'>back me into a corner, that it's total area is going to be</span>
  <span m='922090'>something like that orange cover whole, total area.</span>
  </p><p><span m='927410'>So this is a contrived example, and I don't make
  too</span> <span m='929340'>much of it.</span> </p><p><span m='929800'>But I
  do want to make a lot of that first</span> <span m='932910'>principal, over
  there.</span> </p><p><span m='933630'>And that is the idea that, if something
  is similar in some</span> <span m='936200'>respects, it's likely to be similar
  in other respects.</span> </p><p><span m='939740'>Because that's what most of
  education is about.</span> </p><p><span m='945120'>Fairy tales, legal cases,
  medical</span> <span m='947990'>cases, business cases--</span> <span
  m='949760'>if you can see that there are similar in some respects to a</span>
  <span m='952170'>situation you've got now, then it's likely that they're
  going</span> <span m='955070'>to be similar in other respects, as well.</span>
  </p><p><span m='957860'>So when we're learning, we're not just learning to
  recognize</span> <span m='960115'>a category, we're learning because we're
  attempting to</span> <span m='962740'>apply some kind of precedent.</span>
  </p><p><span m='966390'>That's the story on that.</span> </p><p><span
  m='968996'>Well that's a simple idea but does it have any application?</span>
  </p><p><span m='971590'>The answer is sure.</span> </p><p><span
  m='973810'>Here's an example.</span> </p><p><span m='975470'>My second
  example, the example of cell identification.</span> </p><p><span
  m='978730'>Suppose you have some white blood cells,</span> <span
  m='980060'>what might you do?</span> </p><p><span m='983390'>You might measure
  the total area of the cell.</span> </p><p><span m='985960'>And not the hole
  area, but maybe the nucleus area.</span> </p><p><span m='993290'>And maybe you
  might measure four or five other things, and</span> <span m='996685'>put this
  thing in a high dimensional space.</span> </p><p><span m='998300'>You can
  still measure the nearness in a</span> <span m='1001860'>high dimensional
  space.</span> </p><p><span m='1002700'>So you can use the idea to do
  that.</span> </p><p><span m='1004020'>It works pretty well.</span>
  </p><p><span m='1005780'>A friend of mine once started a company based on this
  idea.</span> </p><p><span m='1008940'>He got wiped out, of course, but it
  wasn't his fault.</span> </p><p><span m='1011490'>What happened is that
  somebody invented a better stain and it</span> <span m='1014670'>became much
  easier to just do the</span> <span m='1016670'>recognition by brute
  force.</span> </p><p><span m='1020030'>So let's see, that's two
  examples.</span> </p><p><span m='1022840'>the introductory example of the
  holes of the electrical</span> <span m='1026770'>covers, and the example of
  cells.</span> </p><p><span m='1029810'>And what I want to do now is show you
  how the idea can</span> <span m='1034170'>reappear in disguised forms in areas
  where you might not</span> <span m='1037940'>expect to see it.</span>
  </p><p><span m='1040010'>So consider the following problem.</span>
  </p><p><span m='1042310'>You have a collection of articles from
  magazines.</span> </p><p><span m='1049070'>And you're interested in learning
  something about how</span> <span m='1054060'>to address a particular
  question.</span> </p><p><span m='1055920'>How do you go about finding the
  articles that are relevant</span> <span m='1058510'>to your question?</span>
  </p><p><span m='1060420'>So this is a puzzle that has been studied for decades
  by</span> <span m='1066170'>people interested in information retrieval.</span>
  </p><p><span m='1068900'>And here's the simple way to do it.</span>
  </p><p><span m='1073390'>I'm going to illustrate, once again, in just two
  dimensions.</span> </p><p><span m='1079010'>But it has to be applied in many,
  many dimensions.</span> </p><p><span m='1082840'>The idea is you count up the
  words in the articles in your</span> <span m='1087930'>library, and you
  compare the word counts to the word counts</span> <span m='1092370'>in your
  probing question.</span> </p><p><span m='1096500'>So you might be interested
  in 100 words.</span> </p><p><span m='1100480'>I'm only going to write two on
  the board for illustration.</span> </p><p><span m='1103990'>So we're going to
  think about articles from two magazines.</span> </p><p><span m='1109850'>Well
  first of all, what words are we going to use?</span> </p><p><span
  m='1111500'>One word is going to be hack, and that will include all</span>
  <span m='1118160'>derivatives of hack-- hacker, hacking, and so on.</span>
  </p><p><span m='1121550'>And the other word is going to be computer.</span>
  </p><p><span m='1129390'>And so it would not be surprising for you to see
  that</span> <span m='1133250'>articles from Wired Magazine might appear</span>
  <span m='1136480'>in places like this.</span> </p><p><span m='1138790'>They
  would involve lots of uses of the word computer, and</span> <span
  m='1142320'>lots of uses of the word hack.</span> </p><p><span m='1145670'>And
  now for the sake of illustration, the second</span> <span m='1148180'>magazine
  from which we are going to draw articles is Town</span> <span m='1151680'>and
  Country.</span> </p><p><span m='1153700'>It's a very tony magazine, and the
  people who read out Town</span> <span m='1157830'>and Country tend to be
  social parasites.</span> </p><p><span m='1161360'>And they still use the word
  hack.</span> </p><p><span m='1165930'>Because you can talk about hacking,
  there's some sort of</span> <span m='1168330'>specialize term of art in
  dealing with horses.</span> </p><p><span m='1172080'>So all the Town and
  Country articles would be likely to be</span> <span m='1177760'>down here
  somewhere.</span> </p><p><span m='1180980'>And maybe they would be one like
  that when they talk about</span> <span m='1186110'>hiring some computer expert
  to keep track of the results so</span> <span m='1188960'>the weekly hunt, or
  something.</span> </p><p><span m='1193940'>And now, in you come with your
  probe.</span> </p><p><span m='1196950'>And of course your probe question is
  going to be</span> <span m='1199430'>relatively small.</span> </p><p><span
  m='1201220'>It's not going to have a lot of words in it.</span> </p><p><span
  m='1203510'>So here's your here's your probe question.</span> </p><p><span
  m='1205640'>Here's your unknown.</span> </p><p><span m='1211670'>Which
  article's going to be closest?</span> </p><p><span m='1213840'>Which articles
  are going to be closest?</span> </p><p><span m='1216944'>Well, alas, all those
  Town and Country articles are closest.</span> </p><p><span m='1222580'>So you
  can't use the nearest neighbor idea, it would seem.</span> </p><p><span
  m='1227520'>Anybody got a suggestion for how we might</span> <span
  m='1229230'>get out of this dilemma?</span> </p><p><span m='1230570'>Yes,
  Christopher.</span> </p><p><span m='1231286'>CHRISTOPHER: If you're looking
  for word counts and you want</span> <span m='1235087'>to include some terms of
  computer, then wouldn't you</span> <span m='1238248'>want to use that as a
  threshold, rather than the</span> <span m='1240743'>nearest neighbor?</span>
  </p><p><span m='1241741'>PROF.</span> </p><p><span m='1241824'>PATRICK
  WINSTON: I don't know, it's a good idea.</span> </p><p><span m='1242740'>It
  might work, who knows.</span> </p><p><span m='1246492'>Doug?</span>
  </p><p><span m='1247486'>DOUG: Instead of using decision boundaries that
  are</span> <span m='1250965'>perpendicular bisectors, if you treated Wired and
  Town and</span> <span m='1255530'>Country as sort of this like,
  [INAUDIBLE]</span> <span m='1259434'>targets.</span> </p><p><span
  m='1260410'>And they would look like some [? great radial ?], here.</span>
  </p><p><span m='1263338'>I guess, some radius around curves.</span>
  </p><p><span m='1265290'>If it's within a certain radius then--</span> <span
  m='1271634'>PROF.</span> </p><p><span m='1271756'>PATRICK WINSTON: Yes?</span>
  </p><p><span m='1273098'>[? SPEAKER 1: Are we, ?] necessarily, have it done
  with</span> <span m='1274806'>some sort of a [? politidy distance ?]</span>
  <span m='1276026'>metric?</span> </p><p><span m='1276550'>PROF.</span>
  </p><p><span m='1276640'>PATRICK WINSTON: Oh, here we go.</span> </p><p><span
  m='1277650'>We're not going to use any [? politidy distance ?]</span> <span
  m='1279114'>metric.</span> </p><p><span m='1279602'>We're going to use some
  other metric.</span> </p><p><span m='1281066'>SPEAKER 1: Like alogrithmic, or
  whatnot?</span> </p><p><span m='1282042'>PROF.</span> </p><p><span
  m='1282164'>PATRICK WINSTON: Well, algorithmic,</span> <span m='1283018'>gees,
  I don't know.</span> </p><p><span m='1284482'>[LAUGHTER]</span> <span
  m='1286440'>PROF.</span> </p><p><span m='1286478'>PATRICK WINSTON: Let me give
  you a hint.</span> </p><p><span m='1289040'>Let me give you a hint.</span>
  </p><p><span m='1290880'>There are all those articles up there, out there, and
  out</span> <span m='1295720'>there, just for example.</span> </p><p><span
  m='1299045'>And here are the Town and Country articles.</span> </p><p><span
  m='1301060'>They're out there, and out there, for example.</span> </p><p><span
  m='1305210'>And now our unknown is out there.</span> </p><p><span
  m='1310050'>Anybody got an idea now?</span> </p><p><span m='1312020'>Hey
  Brett, what do you think?</span> </p><p><span m='1313110'>BRETT: So you sort
  of want the ratio.</span> </p><p><span m='1315870'>Or in this case, you can
  take the angle--</span> <span m='1318640'>PROF.</span> </p><p><span
  m='1318707'>PATRICK WINSTON: Let's be-- ah, there we go, we're getting</span>
  <span m='1320270'>a little more sophisticated.</span> </p><p><span
  m='1322060'>The angle between what?</span> </p><p><span m='1323320'>BRETT: The
  angle between the vectors.</span> </p><p><span m='1325260'>PROF.</span>
  </p><p><span m='1325381'>PATRICK WINSTON: The vectors.</span> </p><p><span
  m='1326715'>Good.</span> </p><p><span m='1328170'>So we're going to use a
  different metric.</span> </p><p><span m='1329140'>What we're going to do is,
  we're going to forget</span> <span m='1330485'>including a distance, and we're
  going to measure the</span> <span m='1332810'>angle between the
  vectors.</span> </p><p><span m='1335150'>So the angle between the vectors,
  well let's actually</span> <span m='1338460'>measure the cosine of the angle
  between the vectors.</span> </p><p><span m='1341960'>Let's see how we can
  calculate that.</span> </p><p><span m='1344180'>So we'll take the cosine of
  the angle between the vectors,</span> <span m='1347970'>we'll call it
  theta.</span> </p><p><span m='1349570'>That's going to be equal to the sum of
  the unknown values</span> <span m='1357960'>times the article values.</span>
  </p><p><span m='1362660'>Those are just the values in various
  dimensions.</span> </p><p><span m='1365290'>And then we'll divide that by the
  magnitude</span> <span m='1370660'>of the other vectors.</span> </p><p><span
  m='1371550'>So we'll divide by the magnitude of u, and we'll</span> <span
  m='1374430'>divide by the magnitude of the art vector to the article.</span>
  </p><p><span m='1380290'>So that's just the dot product right?</span>
  </p><p><span m='1383050'>That's a very fast computation.</span> </p><p><span
  m='1385860'>So with a very fast computation you can see if</span> <span
  m='1388075'>these things are going to be in the same direction.</span>
  </p><p><span m='1390250'>By the way, if this vector here is actually identical
  to</span> <span m='1395670'>one of those articles, what will the value
  be?</span> </p><p><span m='1398980'>Well then a cosine will be 0 and we'll get
  the maximum die</span> <span m='1402366'>of the cosine, which is 1.</span>
  </p><p><span m='1410690'>Yeah, that will do it.</span> </p><p><span
  m='1412540'>So if we use any of the articles to probe the article</span> <span
  m='1415900'>space, they'll find themselves, which is a good</span> <span
  m='1419230'>thing to have a mechanism do.</span> </p><p><span
  m='1423080'>OK.</span> </p><p><span m='1423560'>So that's just the dot product
  of those two vectors.</span> </p><p><span m='1426300'>And it works like a
  charm.</span> </p><p><span m='1429220'>It's not the most sophisticated way of
  doing</span> <span m='1430830'>these things.</span> </p><p><span
  m='1431620'>There are hairy ways.</span> </p><p><span m='1434150'>You can get
  a Ph.D. by doing this sort of stuff in some new</span> <span m='1436370'>and
  sophisticated way.</span> </p><p><span m='1437510'>But this is a simple
  way.</span> </p><p><span m='1439230'>It works pretty well.</span> </p><p><span
  m='1440830'>And you don't have to strain yourself, much,</span> <span
  m='1442080'>to implement it.</span> </p><p><span m='1443990'>So that's
  cool.</span> </p><p><span m='1444700'>That's an example where we have a
  very</span> <span m='1447220'>non-standard metric.</span> </p><p><span
  m='1451920'>Now let's see, what else can we do?</span> </p><p><span
  m='1454190'>How about a robotic arm control?</span> </p><p><span
  m='1457980'>Here we go.</span> </p><p><span m='1459430'>We're going to just
  have a simple arm.</span> </p><p><span m='1470950'>And what we want to do is,
  we want to get this arm to move</span> <span m='1476820'>that ball along some
  trajectory at a speed,</span> <span m='1483200'>velocity, and acceleration
  that we have determined.</span> </p><p><span m='1487040'>So we've got two
  problems here.</span> </p><p><span m='1489320'>Well let's see, we've got two
  problems because, first of</span> <span m='1492780'>all, we've got angles,
  theta 1 and theta 2.</span> </p><p><span m='1499374'>It's a 2 degree of 3 of
  arm, so there are only two angles.</span> </p><p><span m='1504470'>So the
  first problem we have is the kinematic problem of</span> <span
  m='1507220'>translating the (x,y)-cordinates of the ball,</span> <span
  m='1509590'>the desired ones, into the theta 1, theta 2 space.</span>
  </p><p><span m='1513660'>That's simple kinematic problem.</span> </p><p><span
  m='1515630'>No f equals ma there.</span> </p><p><span m='1516680'>It Doesn't
  involve forces, or time, or</span> <span m='1520110'>acceleration,
  anything.</span> </p><p><span m='1522240'>Pretty simple.</span> </p><p><span
  m='1524680'>But then we've got the problem of getting it to go along
  that</span> <span m='1531990'>trajectory with positions, speeds, and</span>
  <span m='1536690'>accelerations that we desire.</span> </p><p><span
  m='1540230'>And now you say to me, well I've got 801, I can do that.</span>
  </p><p><span m='1548710'>And that's true, you can.</span> </p><p><span
  m='1549920'>Because, it's Newtonian mechanics.</span> </p><p><span
  m='1552480'>All you have to do is solve the equations.</span> </p><p><span
  m='1563830'>There are the equations.</span> </p><p><span m='1566810'>Good
  luck.</span> </p><p><span m='1571550'>Why are they so complicated?</span>
  </p><p><span m='1572940'>Well because of the complicated geometry.</span>
  </p><p><span m='1575655'>You notice we've got some products of theta 1 and
  theta</span> <span m='1578850'>2 in there, somewhere, I think?</span>
  </p><p><span m='1580170'>You've got theta 2's.</span> </p><p><span
  m='1581210'>I see an acceleration squared.</span> </p><p><span m='1583570'>And
  yeah, there's a theta 1 dot times a theta 2 dot.</span> </p><p><span
  m='1587080'>A velocity times a velocity.</span> </p><p><span m='1589520'>Where
  the hell did that come from?</span> </p><p><span m='1590530'>I mean it's
  supposed to be f equals ma, right?</span> </p><p><span m='1592970'>Those are
  Coriolis forces, because of</span> <span m='1594600'>the complicated
  geometry.</span> </p><p><span m='1597690'>OK.</span> </p><p><span
  m='1597950'>So you hire Berthold Horn, or somebody, to work these</span> <span
  m='1600440'>equations out for you.</span> </p><p><span m='1601210'>And he
  comes up with something like this.</span> </p><p><span m='1602590'>And you try
  it out and it doesn't work.</span> </p><p><span m='1605090'>Why doesn't it
  work?</span> </p><p><span m='1606175'>It's Newtonian mechanics, I said.</span>
  </p><p><span m='1610430'>It doesn't work because we forgot to tell Berthold
  that</span> <span m='1614480'>there's friction in all the joints.</span>
  </p><p><span m='1616860'>And we forgot to tell him that they've worn a little
  bit</span> <span m='1618800'>since yesterday.</span> </p><p><span
  m='1620470'>And we forgot that the measurements we make on the</span> <span
  m='1622150'>lab table are not quite precise.</span> </p><p><span
  m='1624500'>So people try to do this.</span> </p><p><span m='1626580'>It just
  doesn't work.</span> </p><p><span m='1629360'>As soon as you get a ball of a
  different weight you have to</span> <span m='1631270'>start over.</span>
  </p><p><span m='1631820'>It's gross.</span> </p><p><span m='1634310'>So I
  don't know.</span> </p><p><span m='1635560'>I can do this sort of thing
  effortlessly, and I couldn't</span> <span m='1638990'>begin to solve those
  equations.</span> </p><p><span m='1641590'>So let's see.</span> </p><p><span
  m='1642410'>What we're going to do is we're going to forget about</span> <span
  m='1643940'>the problem for a minute.</span> </p><p><span m='1645310'>And
  we're going to talk about building</span> <span m='1647030'>ourselves a
  gigantic table.</span> </p><p><span m='1650180'>And here's what's going to be
  on the table.</span> </p><p><span m='1654320'>Theta 1, theta 2, theta 3, oops,
  there are only two.</span> </p><p><span m='1660610'>So that's theta 1 again,
  but it's the</span> <span m='1662960'>velocity, angular velocity.</span>
  </p><p><span m='1667260'>And then we have the accelerations.</span>
  </p><p><span m='1673430'>So we're going to have a big table of these
  things.</span> </p><p><span m='1676685'>And what we're going to do, is we're
  going to</span> <span m='1678780'>give this arm a childhood.</span>
  </p><p><span m='1682140'>And we're going to write down all the combinations we
  ever</span> <span m='1684270'>see, every 100 milliseconds, or
  something.</span> </p><p><span m='1687940'>And the arm is just going to wave
  around like a kid does in</span> <span m='1690947'>the cradle.</span>
  </p><p><span m='1693160'>And then, we're not quite done.</span> </p><p><span
  m='1696350'>Because there are two other things we're going to record.</span>
  </p><p><span m='1698660'>Can you guess what they are?</span> </p><p><span
  m='1701410'>There are going to be the torque on the first motor, and</span>
  <span m='1704317'>the torque on the second motor.</span> </p><p><span
  m='1709970'>And so now, we've got a whole bunch of those records.</span>
  </p><p><span m='1716280'>The question is, what do we got to do with it?</span>
  </p><p><span m='1720960'>Well here's what we're going to do it.</span>
  </p><p><span m='1723620'>We're going to divide this trajectory that we're
  hoping</span> <span m='1726200'>to achieve, up into little pieces.</span>
  </p><p><span m='1729370'>And there's a little piece.</span> </p><p><span
  m='1730580'>And in that little piece nothing is</span> <span m='1732860'>going
  to change much.</span> </p><p><span m='1734420'>There's going to be an</span>
  <span m='1734960'>acceleration, velocity, position.</span> </p><p><span
  m='1738770'>And so we can look those up in the table that</span> <span
  m='1742000'>we made in the childhood.</span> </p><p><span m='1743892'>And
  we'll look around and find the closest match, and this</span> <span
  m='1748360'>will be the set of values for the positions, velocities,
  and</span> <span m='1753960'>accelerations that are associated with
  that</span> <span m='1757230'>particular movement.</span> </p><p><span
  m='1758880'>And guess what we can do now?</span> </p><p><span m='1761200'>We
  can say, in the past, the torques associated with that</span> <span
  m='1764460'>particular little piece of movement lie right there.</span>
  </p><p><span m='1767650'>So we can just look it up.</span> </p><p><span
  m='1769950'>Now this method was thought up and rejected, because</span> <span
  m='1773690'>computers weren't powerful enough.</span> </p><p><span
  m='1775690'>And then, this is the age of recycling, right?</span> </p><p><span
  m='1778170'>So the idea got recycled when computers got strong enough.</span>
  </p><p><span m='1782625'>And it works pretty well, for things like
  this.</span> </p><p><span m='1786336'>But you might say to me, well can it do
  the stuff that we</span> <span m='1791040'>humans can do, like this?</span>
  </p><p><span m='1798540'>And the answer is, let's look.</span> </p><p><span
  m='1819070'>So this is a training phase, it's</span> <span m='1821820'>going
  through its childhood.</span> </p><p><span m='1842830'>You see what's
  happening is this.</span> </p><p><span m='1844940'>The initial table won't be
  very good.</span> </p><p><span m='1847200'>But that's OK.</span> </p><p><span
  m='1848330'>Because there are only a small number of things that it's</span>
  <span m='1850950'>important for you to be able to do.</span> </p><p><span
  m='1853600'>So when you try those things it's still</span> <span
  m='1855450'>writing into the table.</span> </p><p><span m='1857340'>So the
  next time you try that particular motion, it's going</span> <span
  m='1859660'>to be better at it, because its got better stuff to</span> <span
  m='1861800'>interpolate [? amongst ?]</span> <span m='1862810'>in that
  table.</span> </p><p><span m='1864300'>So that's why this thing is getting
  better and better as</span> <span m='1867290'>it goes on.</span> </p><p><span
  m='1883250'>That's as good as I was doing.</span> </p><p><span
  m='1898290'>Pretty good, don't you think?</span> </p><p><span
  m='1898830'>There's just one thing I want to show at the end of this</span>
  <span m='1900460'>clip just for fun.</span> </p><p><span m='1903820'>Maybe
  you've seen some old Zorro movies?</span> </p><p><span m='1912400'>So here's a
  little set up where this thing has learned</span> <span m='1914370'>to use a
  lash.</span> </p><p><span m='1916680'>So here's the lash, and there's a candle
  down there.</span> </p><p><span m='1920220'>So watch this.</span> </p><p><span
  m='1931325'>Pretty good, don't you think?</span> </p><p><span m='1933160'>So
  how fast does the learning take place?</span> </p><p><span m='1934840'>Let me
  go back to that other slides and show you.</span> </p><p><span m='1938820'>So
  here's some graphs to show you how fast goes, boom.</span> </p><p><span
  m='1944790'>That gives you the curves of how well the robot arm can go</span>
  <span m='1948620'>along a straight line, after no practice with just
  some</span> <span m='1951290'>stuff recorded in the memory.</span>
  </p><p><span m='1953200'>And then with a couple of practice runs do give
  it</span> <span m='1955270'>better values amongst which to interpolate.</span>
  </p><p><span m='1960120'>So I think that's pretty cool.</span> </p><p><span
  m='1962170'>So simple, but yet so effective.</span> </p><p><span
  m='1965630'>But you still might say, well, I don't know, it might be</span>
  <span m='1968720'>something that can be done in special cases.</span>
  </p><p><span m='1972280'>I wonder if old Winston uses something like that when
  he</span> <span m='1975230'>drinks his coffee?</span> </p><p><span
  m='1976470'>Well we' ought to do the numbers</span> <span m='1977610'>and see
  if it's possible.</span> </p><p><span m='1981050'>But I don't want to use
  coffee, it's</span> <span m='1982190'>the baseball season.</span> </p><p><span
  m='1983740'>We're approaching the World Series.</span> </p><p><span
  m='1986180'>We might as well talk about professional athletes.</span>
  </p><p><span m='1993640'>So let's suppose that this is a baseball
  pitcher.</span> </p><p><span m='1998320'>And I want to know how much memory
  I'll need to record a</span> <span m='2000620'>whole lot of pitches.</span>
  </p><p><span m='2002590'>Is there a good pitcher these days?</span>
  </p><p><span m='2004040'>The Red Socks suck so I don't do Red Socks.</span>
  </p><p><span m='2007710'>Clay Buchholz, I guess.</span> </p><p><span
  m='2010240'>I don't know, some pitcher.</span> </p><p><span m='2012560'>And
  what we're going to do, is we're going to say for each of</span> <span
  m='2016380'>these little segments were going to record</span> <span
  m='2019890'>100 bytes per joint.</span> </p><p><span m='2026990'>And we've got
  joints all over the place.</span> </p><p><span m='2029980'>I don't know how
  many are involved in doing a baseball</span> <span m='2032230'>pitch, but
  let's just say we have had 100 joints.</span> </p><p><span m='2038170'>And
  then we have to divide the pitch up</span> <span m='2041840'>into a bunch of
  segments.</span> </p><p><span m='2044800'>So let's just say for sake of
  argument that</span> <span m='2047470'>there are 100 segments.</span>
  </p><p><span m='2055219'>And how many pitches does a pitcher throw in a
  day?</span> </p><p><span m='2060560'>What?</span> </p><p><span
  m='2060879'>SPEAKER 2: In a day?</span> </p><p><span m='2061675'>PROF.</span>
  </p><p><span m='2061754'>PATRICK WINSTON: In a day, yeah.</span> </p><p><span
  m='2065010'>This, we all know, is about 100.</span> </p><p><span
  m='2068330'>Everybody knows that they take them out</span> <span
  m='2070610'>after about 100 pitches.</span> </p><p><span m='2077210'>So what I
  want to know is how much memory we need to record</span> <span m='2079330'>all
  the pitches a pitcher pitches in his career.</span> </p><p><span
  m='2082000'>So we still have to work on this little bit more.</span>
  </p><p><span m='2084060'>How many days a year does a pitcher pitch?</span>
  </p><p><span m='2087000'>Well, they've got winter ball, and that sort of
  thing, so</span> <span m='2090750'>let's just approximate it as 100.</span>
  </p><p><span m='2096938'>I don't know, some of these may be a little high,
  some of</span> <span m='2099070'>the others may be a low.</span> </p><p><span
  m='2100430'>And of course, the career--</span> <span m='2102650'>just to make
  things easy--</span> <span m='2104524'>is 100 years.</span> </p><p><span
  m='2107940'>So that's one, two, three, four, five, six.</span> </p><p><span
  m='2111000'>So we have 10 to the 12th bytes.</span> </p><p><span
  m='2115110'>Is that the hopelessly big to store in here?</span> </p><p><span
  m='2121184'>CHRISTOPHER: 10 to 100 [INAUDIBLE] or</span> <span
  m='2123080'>just 100 times throwing?</span> </p><p><span
  m='2125460'>PROF.</span> </p><p><span m='2125495'>PATRICK WINSTON: 100 pitches
  in a day--</span> <span m='2127470'>Christopher's asking some detail--</span>
  <span m='2128860'>and what we're gong to do is we're going to record</span>
  <span m='2130790'>everything there is to know about one pitch, and then</span>
  <span m='2133270'>we're going to see how many pitches, he</span> <span
  m='2134472'>pitches in his lifetime.</span> </p><p><span m='2135890'>And we're
  going to record all that.</span> </p><p><span m='2141516'>Trust me.</span>
  </p><p><span m='2142444'>Trust me.</span> </p><p><span m='2143805'>OK. so we
  want to know if this is actually a practical scale.</span> </p><p><span
  m='2147800'>And this, by the way, is cocktail conversation, who</span> <span
  m='2149640'>knows, right?</span> </p><p><span m='2150330'>But it's useful to
  work out these numbers, and know some</span> <span m='2153170'>of these
  numbers.</span> </p><p><span m='2154780'>So the question we have to ask is,
  how much</span> <span m='2159690'>computation is in there?</span> </p><p><span
  m='2162010'>And the first question relevant to that is, how many</span> <span
  m='2165240'>neurons do we have in our brain?</span> </p><p><span
  m='2169530'>Volunteer?</span> </p><p><span m='2170650'>Neuroscience?</span>
  </p><p><span m='2172740'>No one to volunteer?</span> </p><p><span
  m='2175580'>All right.</span> </p><p><span m='2175970'>Well this is a number
  you should know, because this is</span> <span m='2178690'>what you've got in
  there.</span> </p><p><span m='2181990'>There are 10 to the 10th neurons in the
  brain, of which</span> <span m='2189870'>10 to the 11th are in the cerebellum,
  alone.</span> </p><p><span m='2197950'>What the devil do I mean by
  that?</span> </p><p><span m='2199670'>I mean that your cerebellum is so full
  of neurons that it</span> <span m='2202390'>dwarfs the rest of the
  brain.</span> </p><p><span m='2204610'>So if you exclude the cerebellum,
  you've got about</span> <span m='2206440'>10 to 10th neurons.</span>
  </p><p><span m='2208380'>And there about 10 to the 11th neurons in</span>
  <span m='2210020'>the cerebellum, alone.</span> </p><p><span
  m='2210750'>What's the cerebellum for?</span> </p><p><span m='2213610'>Motor
  control.</span> </p><p><span m='2215210'>Interesting.</span> </p><p><span
  m='2217380'>So we're a little short.</span> </p><p><span m='2218690'>Oh, but
  we forget, that's just the number of neurons.</span> </p><p><span
  m='2221170'>We have to count up the number of synapses.</span> </p><p><span
  m='2224630'>Because conceivably, we might be able to adjust those</span> <span
  m='2227060'>synapses, right?</span> </p><p><span m='2228650'>So how many
  synapses does a neuron have?</span> </p><p><span m='2231670'>The answer is, it
  depends.</span> </p><p><span m='2234020'>But the ones in the
  cerebellum--</span> <span m='2238940'>I should be pointing back there, I
  guess--</span> <span m='2242990'>10 to the 5th.</span> </p><p><span
  m='2245550'>So if we add all that up we have 10 to the 16th.</span>
  </p><p><span m='2251970'>No problem.</span> </p><p><span m='2257150'>It's just
  that existence proves that you don't have to</span> <span m='2258950'>worry
  too much about having storage.</span> </p><p><span m='2260470'>So maybe our
  cerebellum functions, in some way, as a</span> <span m='2264100'>gigantic
  table.</span> </p><p><span m='2266150'>And that's maybe how we learn motor
  skills, by filling up</span> <span m='2269240'>that table as we run around
  emerging from the cradle,</span> <span m='2275700'>learning how to manipulate
  ourselves as we go on.</span> </p><p><span m='2280770'>So that's the story on
  arm control.</span> </p><p><span m='2285440'>Now all this is pretty
  straightforward, easy to</span> <span m='2291320'>understand.</span>
  </p><p><span m='2292430'>And of course, there are some problems.</span>
  </p><p><span m='2303370'>Problem number one, what if the space of</span> <span
  m='2314660'>samples looks like this?</span> </p><p><span m='2316586'>[TAPPING
  ON CHALK BOARD]</span> <span m='2322420'>What's going to happen in that
  case?</span> </p><p><span m='2325400'>Well what's going to happen in that case
  is that the--</span> <span m='2331800'>let's see, which values are going to be
  more important?</span> </p><p><span m='2336590'>The x values, right?</span>
  </p><p><span m='2339160'>The y values are spread out all over the
  place.</span> </p><p><span m='2342000'>So you'd like the spread of the data to
  sort of be the</span> <span m='2344470'>same in all the dimensions.</span>
  </p><p><span m='2346820'>So is there anything we can do to arrange</span>
  <span m='2348650'>for that to be true?</span> </p><p><span m='2350710'>Sure,
  we can just normalize the data.</span> </p><p><span m='2353820'>So we can
  borrow from our statistics course and say,</span> <span m='2357470'>well,
  let's see, we're interested in x.</span> </p><p><span m='2361040'>And we know
  that the variance of x is equal to 1 over n</span> <span m='2367250'>times the
  sum of the values, minus the mean value squared.</span> </p><p><span
  m='2375170'>That's a measure of how much the data spreads out.</span>
  </p><p><span m='2379090'>So now, instead of using x, we can use x prime, which
  is</span> <span m='2383990'>equal to x over sigma.</span> </p><p><span
  m='2391380'>What's the variance of that going to be?</span> </p><p><span
  m='2393120'>x over sigma sub x.</span> </p><p><span m='2398000'>Anybody see,
  instantaneously, what the variance of</span> <span m='2399820'>that's going
  be?</span> </p><p><span m='2400630'>Or do we have to work it out?</span>
  </p><p><span m='2402980'>It's going to be 1, Work out the algebra for
  me.</span> </p><p><span m='2406250'>It's obvious, it's simple.</span>
  </p><p><span m='2408470'>Just substitute x prime into this formula for
  variance, and</span> <span m='2417150'>do the algebraic high school
  manipulation.</span> </p><p><span m='2418545'>And you'll see that the variance
  turns out not to be</span> <span m='2420720'>of this new variable, this
  transformed variable you want.</span> </p><p><span m='2424750'>So that
  problem, the non uniformity problem, the spread</span> <span
  m='2430100'>problem, is easy to handle.</span> </p><p><span m='2448280'>What
  about that other problem?</span> </p><p><span m='2451260'>No cake without
  flour?</span> </p><p><span m='2453090'>What if it turns out that the
  data--</span> <span m='2456050'>you have two dimensions and the answer,
  actually, doesn't</span> <span m='2460470'>depend on y at all.</span>
  </p><p><span m='2464250'>What will happen?</span> </p><p><span
  m='2468500'>Then you're often going to get screwy results, because
  it'll</span> <span m='2471680'>be measuring a distance that is merely</span>
  <span m='2475450'>confusing the answer.</span> </p><p><span m='2480160'>So
  problem number two is the what matters problem.</span> </p><p><span
  m='2490722'>Write it down, what matters.</span> </p><p><span
  m='2497360'>Problem number three is, what if the answer doesn't depend</span>
  <span m='2501440'>on the data at all?</span> </p><p><span m='2502540'>Then
  you've got the trying to build a cake without flour.</span> </p><p><span
  m='2506360'>Once somebody asked me--</span> <span m='2509430'>a classmate of
  mine, who went on to become an important</span> <span m='2513030'>executive in
  an important credit card company-- asked me</span> <span m='2515210'>if we
  could use artificial intelligence to determine when</span> <span
  m='2518780'>somebody was going to go bankrupt?</span> </p><p><span
  m='2521280'>And the answer was, no.</span> </p><p><span m='2523220'>Because
  the data available was data that was independent of</span> <span
  m='2527930'>that question.</span> </p><p><span m='2528990'>So he was trying to
  make a cake without flour, and you</span> <span m='2531100'>can't do
  that.</span> </p><p><span m='2533210'>So that concludes what I want to
  say</span> <span m='2534300'>about nearest neighbors.</span> </p><p><span
  m='2535040'>No I want to talk a little bit about sleep.</span> </p><p><span
  m='2537750'>Over there on that left-side branch, now disappeared, we</span>
  <span m='2542010'>talked about the human side of learning.</span> </p><p><span
  m='2548070'>And I said something about one-shot, an</span> <span
  m='2551250'>escalation based learning.</span> </p><p><span m='2552390'>And
  what that means is, you don't learn</span> <span m='2555110'>without problem
  solving.</span> </p><p><span m='2557000'>And the question is, how is problem
  solving related to how</span> <span m='2559950'>much sleep you get?</span>
  </p><p><span m='2561910'>And to answer questions like that, of course, you
  want to</span> <span m='2564330'>go to the people who are the custodians of
  the kind of</span> <span m='2566420'>knowledge you are interested in.</span>
  </p><p><span m='2567870'>And so you would say, who are the custodians of
  knowledge</span> <span m='2569980'>about how much sleep you need?</span>
  </p><p><span m='2571690'>And what happens if you don't get it?</span>
  </p><p><span m='2573910'>And the answer is the United States Army.</span>
  </p><p><span m='2578020'>Because they're extremely interested in what
  happens</span> <span m='2580170'>when you cross 10 or 12 times zones, and have
  no sleep, and</span> <span m='2584516'>have to perform.</span> </p><p><span
  m='2586600'>So they're very interested in that question.</span> </p><p><span
  m='2588090'>And they got even more interested after the first</span> <span
  m='2589730'>Gulf War, which was the most studied war in</span> <span
  m='2592720'>history, up to that time.</span> </p><p><span m='2594890'>Because,
  there were after action reports they were full</span> <span m='2597750'>of
  examples like this.</span> </p><p><span m='2600490'>The US Forces, in a
  certain part of the battlefield, and</span> <span m='2606750'>drawn up for the
  night.</span> </p><p><span m='2607680'>And those are Bradley fighting
  vehicles, there, and back here</span> <span m='2611040'>Abrams tanks.</span>
  </p><p><span m='2613430'>And they're all just kind of settling down for</span>
  <span m='2614770'>good night's sleep.</span> </p><p><span m='2617760'>They've
  been up for about 36 hours straight, by the way.</span> </p><p><span
  m='2621110'>When, much to their amazement, across their field-of-view</span>
  <span m='2628940'>came a column of Iraqi vehicles.</span> </p><p><span
  m='2633720'>And both sides were enormously surprised.</span> </p><p><span
  m='2636240'>A firefight broke out.</span> </p><p><span m='2638830'>The lead
  vehicle, over here, on the Iraqi</span> <span m='2642600'>side caught on
  fire.</span> </p><p><span m='2644970'>So these guys, in the Bradley fighting
  vehicles, went around</span> <span m='2648110'>to investigate, whereupon,
  these guys started blasting</span> <span m='2652370'>away, in acts of
  fratricidal fire.</span> </p><p><span m='2657590'>And the interesting thing is
  that all these folks here</span> <span m='2663450'>swore in the after action
  reports that they were firing</span> <span m='2666160'>straight ahead.</span>
  </p><p><span m='2668430'>And what happened was their ability to put ordnance
  on</span> <span m='2671330'>target was not impaired at all.</span>
  </p><p><span m='2673205'>But their idea of where the target was, what the
  target</span> <span m='2676090'>was, whether it was a target, was all screwed
  up.</span> </p><p><span m='2680100'>So this led to a lot of experiments in
  which people</span> <span m='2683950'>were sleep deprived.</span> </p><p><span
  m='2684810'>And by the way, you think you're a tough</span> <span
  m='2686150'>MIT student, right?</span> </p><p><span m='2687020'>These are Army
  Rangers.</span> </p><p><span m='2688500'>It doesn't get any tougher than this,
  believe me.</span> </p><p><span m='2691850'>So here's one of the</span> <span
  m='2692780'>experiments that was performed.</span> </p><p><span m='2695290'>In
  those days they had what they called</span> <span m='2697740'>fire control
  teams.</span> </p><p><span m='2701110'>And their job is to take information
  from an observer,</span> <span m='2703820'>over here, about a target, over
  here.</span> </p><p><span m='2711530'>And tell the artillery, over here, where
  to fire.</span> </p><p><span m='2718880'>So they kept some of these folks
  up</span> <span m='2720170'>for 36 hours straight.</span> </p><p><span
  m='2722020'>And after 36 hours they all said, we're doing great.</span>
  </p><p><span m='2725780'>And at that time they were bringing fire down
  on</span> <span m='2728620'>hospitals, mosques, churches, schools, and
  themselves.</span> </p><p><span m='2735360'>Because, they couldn't do the
  calculations anymore, after 36</span> <span m='2739500'>hours without
  sleep.</span> </p><p><span m='2741310'>And now you say to me, well I'm a MIT
  student, I want to</span> <span m='2744430'>see the data.</span> </p><p><span
  m='2746070'>So let's have a look at the data.</span> </p><p><span
  m='2761790'>OK.</span> </p><p><span m='2762180'>So there it goes.</span>
  </p><p><span m='2763090'>That's what happens to you after 72 hours without
  sleep.</span> </p><p><span m='2771730'>These are simple things to do.</span>
  </p><p><span m='2775000'>Very simple calculations you have to do in your head,
  like</span> <span m='2777910'>adding numbers, spelling words, and things like
  that.</span> </p><p><span m='2781730'>So after 72 hours without sleep, your
  performance</span> <span m='2784400'>relative to what you were at the
  beginning is about 30%.</span> </p><p><span m='2790860'>So loss of sleep
  destroys ability.</span> </p><p><span m='2798030'>[BELL RINGING]</span> <span
  m='2808900'>Sleep loss accumulates.</span> </p><p><span m='2810390'>So you
  say, well I need eight hours of sleep--</span> <span m='2812830'>and what you
  need, by the way, varies--</span> <span m='2815145'>but I'm going to get by
  was seven hours of sleep.</span> </p><p><span m='2818220'>So after 20 days of
  one hour's worth of sleep deprivation,</span> <span m='2822830'>you're down
  about 25%.</span> </p><p><span m='2825740'>If you say, well I need eight hours
  of sleep, but I'm going</span> <span m='2829660'>to have to get by with just
  six, after 20 days of that,</span> <span m='2833470'>you're down to about 25%
  of your original capability.</span> </p><p><span m='2839450'>So you might say,
  well does caffeine help?</span> </p><p><span m='2841390'>Or naps, naps in this
  case.</span> </p><p><span m='2843950'>And the answer is, yes, a little
  bit.</span> </p><p><span m='2846300'>Some people argue that you get the more
  affect out of the</span> <span m='2849790'>sleep that you do get if you divide
  it into two.</span> </p><p><span m='2851620'>Winston Churchill always took a
  three</span> <span m='2853640'>hour nap in the afternoon.</span> </p><p><span
  m='2854580'>He said that way he got a day and a half's worth of work
  out</span> <span m='2857080'>of every day.</span> </p><p><span m='2859740'>He
  got the full amount of sleep.</span> </p><p><span m='2860930'>But he divided
  it into two pieces.</span> </p><p><span m='2862630'>Here's the caffeine
  one.</span> </p><p><span m='2864140'>So caffeine does help.</span>
  </p><p><span m='2868540'>And now you say, well, shoot, I think I'm going to
  take it</span> <span m='2872680'>kind of easy this semester.</span>
  </p><p><span m='2873710'>And I'll just work hard during the week before
  finals.</span> </p><p><span m='2877100'>Maybe I won't even bother sleeping for
  the 24 hours</span> <span m='2881550'>before the 6034 final.</span>
  </p><p><span m='2884754'>That's OK.</span> </p><p><span m='2885920'>Well let's
  see what will happen.</span> </p><p><span m='2890780'>So let's work the
  numbers.</span> </p><p><span m='2891930'>Here is 24 hours.</span> </p><p><span
  m='2894240'>And that's where your</span> <span m='2895260'>effectiveness is
  after 24 hours.</span> </p><p><span m='2898370'>Now let's go over to the same
  amount of effectiveness on the</span> <span m='2900710'>blood alcohol
  curve.</span> </p><p><span m='2902910'>And it's about the level at which
  you</span> <span m='2906290'>would be legally drunk.</span> </p><p><span
  m='2908880'>So I guess what we ought to do is to check everybody as
  they</span> <span m='2911370'>come in for the 6034 final, and arrest you if
  you've been</span> <span m='2915040'>24 hours without sleep.</span>
  </p><p><span m='2916970'>And not let you take any finals again, for a
  year.</span> </p><p><span m='2921850'>So if you do all that, you might as well
  get drunk.</span> </p><p><span m='2926710'>And now we have one thing left to
  do today.</span> </p><p><span m='2928400'>And that is address the original
  question of, why it</span> <span m='2930720'>is that the dogs and cats in the
  world think that the diet</span> <span m='2934520'>drink makes people
  fat?</span> </p><p><span m='2938400'>What's the answer?</span> </p><p><span
  m='2940600'>It's because only fat guys like me drink this crap.</span>
  </p><p><span m='2945160'>So since the dogs and cats don't have the ability to
  tell</span> <span m='2948580'>themselves stories, don't have that capacity to
  string</span> <span m='2952430'>together events into narratives, they don't
  have</span> <span m='2954870'>any way of saying, well this is a consequence of
  desiring</span> <span m='2959230'>not to be fat.</span> </p><p><span
  m='2960110'>Not a consequence of being fat.</span> </p><p><span
  m='2961870'>They don't have that story.</span> </p><p><span m='2963970'>And so
  what they're doing is something you have to be very</span> <span
  m='2965810'>careful about.</span> </p><p><span m='2966450'>And that thing you
  have to be very careful about is the</span> <span m='2968630'>confusion of
  correlation with cause.</span> </p><p><span m='2971930'>They see the
  correlation, but they don't understand the</span> <span m='2974040'>cause, so
  that's why they make a mistake.</span> </p><p></p>
uid: 5ecfa634ca4a6d6a6acb0be675223f88
type: courses
layout: video
---
