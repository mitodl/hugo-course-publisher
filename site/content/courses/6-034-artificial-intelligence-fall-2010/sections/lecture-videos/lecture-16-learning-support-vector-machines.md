---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, we explore support vector
  machines in some mathematical detail. We use Lagrange multipliers to maximize
  the width of the street given certain constraints.  If needed, we transform
  vectors into another space, using a kernel function.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: _PwhiWxHK8o
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: Video-YouTube-Stream
    type: Video
    uid: 6229d01924755349dff3b150c31ff650
  - id: Video-iTunesU-MP4
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-16-learning-support/id765641080?i=194475726
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: Video-iTunes U-MP4
    type: Video
    uid: f637881e37326efc93ff1dc43d91f53b
  - id: Video-InternetArchive-MP4
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec16_300k.mp4'
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: Video-Internet Archive-MP4
    type: Video
    uid: 98b2c17a476197f1dc218443dc69c046
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/_PwhiWxHK8o/default.jpg'
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 6e84ea2871094b776d3f10be9a94dcbe
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: _PwhiWxHK8o
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 7f5f39543210a01f227721ff2cd93602
  - id: PwhiWxHK8o.srt
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-16-learning-support-vector-machines/PwhiWxHK8o.srt
    title: 3play caption file
    type: null
    uid: b4e475840d5a5b05cd76a7aac5cf0954
  - id: PwhiWxHK8o.pdf
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-16-learning-support-vector-machines/PwhiWxHK8o.pdf
    title: 3play pdf file
    type: null
    uid: 72f5baea84b5c219b932e04ccb377179
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d58aa28c9ab7766b1e411c7e5038dc56
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 601f8b80fe4cbfae451ce2106aec111f
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 4ffcd31db3bb5097882fcbeca438510c
inline_embed_id: '34186523lecture16:learning:supportvectormachines32875498'
order_index: 179
parent_uid: 28d36d6426366698bf1ded18c6190be7
related_resources_text: >-
  <p>Specifically developed for this lecture are the <a
  href="./resolveuid/c12a7a6a32ad7497b815b6b93b6d5c00" target="_blank">support
  vector machine slides (PDF)</a>, which are also listed among the readings for
  this course.</p>
short_url: lecture-16-learning-support-vector-machines
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-16-learning-support-vector-machines
title: 'Lecture 16: Learning: Support Vector Machines'
transcript: >-
  <p><span m='9234'>PATRICK WINSTON: So where are we?</span> </p><p><span
  m='10300'>We started off with simple methods for learning stuff.</span>
  </p><p><span m='14962'>Then, we talked a little about a purchase of learning
  that</span> <span m='20730'>we're vaguely inspired by.</span> </p><p><span
  m='24556'>The fact that our heads are stuffed with neurons, and that</span>
  <span m='27300'>we seemed to have evolved from primates.</span> </p><p><span
  m='31095'>Then, we talked about looking at the problem and address the</span>
  <span m='34940'>issue of [? phrenology ?]</span> <span m='36410'>and how it's
  possible to learn concepts.</span> </p><p><span m='40430'>But now, we're
  coming full circle back to the beginning</span> <span m='43700'>and thinking
  about how to divide up a space with</span> <span m='47990'>decision
  boundaries.</span> </p><p><span m='49930'>But whereas, you do it with a neural
  net or a nearest</span> <span m='54580'>neighbors or a ID tree.</span>
  </p><p><span m='56510'>Those are very simple ideas that work very
  often.</span> </p><p><span m='62115'>Today, we're going to talk about a very
  sophisticated</span> <span m='65895'>idea that still has a
  implementation.</span> </p><p><span m='69212'>So this needs to be in the tool
  bag of</span> <span m='73220'>every civilized person.</span> </p><p><span
  m='75506'>This is about support vector machines, an</span> <span
  m='78560'>idea that was developed.</span> </p><p><span m='80735'>Well, I want
  to talk to you today about how</span> <span m='82470'>ideas develop,
  actually.</span> </p><p><span m='84705'>Because you look at stuff like this in
  a book, and you think,</span> <span m='87150'>well, Vladimir Vapnik just
  figured this out one Saturday</span> <span m='92515'>afternoon when the
  weather was too bad to go outside.</span> </p><p><span m='95780'>That's not
  how it happens.</span> </p><p><span m='97185'>It happens very
  differently.</span> </p><p><span m='98580'>I want to talk to you a little
  about that.</span> </p><p><span m='101229'>The next thing about great things
  that were done by</span> <span m='106950'>people who are still alive is you
  can ask them</span> <span m='109060'>how they did it.</span> </p><p><span
  m='110210'>You can't do that with Fourier.</span> </p><p><span m='111810'>You
  can't say to Fourier, how did you do it?</span> </p><p><span m='114310'>Did
  you dream it up on a Saturday afternoon?</span> </p><p><span m='116946'>But
  can call Vapnik on the phone and ask him questions.</span> </p><p><span
  m='120220'>That's the stuff I'm going to talk about toward</span> <span
  m='122050'>the end of the hour.</span> </p><p><span m='124186'>Well, it's all
  about decision boundaries.</span> </p><p><span m='126045'>And now, we have
  several techniques that we can use to</span> <span m='131400'>draw some
  decision boundaries.</span> </p><p><span m='132620'>And here's the same
  problem.</span> </p><p><span m='134700'>And if we drew decision boundaries in
  here, we might</span> <span m='138329'>get something that would look like
  maybe this.</span> </p><p><span m='141826'>If we were doing a nearest neighbor
  approach, and if</span> <span m='145790'>we're doing ID trees, we'll just draw
  in a line like that.</span> </p><p><span m='151522'>And if we're doing neural
  nets, well, you can put in a</span> <span m='154945'>lot of straight lines
  wherever you like with a neural net,</span> <span m='157550'>depending on how
  it's trained up.</span> </p><p><span m='159110'>Or if you just simply go in
  there and design it, so you</span> <span m='162470'>could do that if you
  wanted.</span> </p><p><span m='165554'>And you would think that after people
  have been working on</span> <span m='168110'>this sort of stuff for 50 or 75
  years that there wouldn't</span> <span m='172500'>be any tricks in the bag
  left.</span> </p><p><span m='174535'>And that's when everybody got surprised,
  because around the</span> <span m='179340'>early '90s Vladimir Vapnik
  introduced the ideas I'm about</span> <span m='183880'>to talk to you
  about.</span> </p><p><span m='185916'>So what Vapnik says is something like
  this.</span> </p><p><span m='191215'>Here you have a space, and you have some
  negative examples,</span> <span m='197470'>and you have some positive
  examples.</span> </p><p><span m='200436'>How do you divide the positive
  examples from</span> <span m='202870'>the negative examples?</span>
  </p><p><span m='204220'>And what he says that we want to do is we want to draw
  a</span> <span m='207710'>straight line.</span> </p><p><span m='209140'>But
  which straight line is the question.</span> </p><p><span m='212062'>Well, we
  want to draw a straight line.</span> </p><p><span m='215140'>Well, would this
  be a good straight line?</span> </p><p><span m='218141'>One that went up like
  that?</span> </p><p><span m='220492'>Probably not so hot.</span> </p><p><span
  m='222660'>How about one that's just right here?</span> </p><p><span
  m='225622'>Well, that might separate them, but it seems awfully</span> <span
  m='229460'>close to the negative examples.</span> </p><p><span m='231765'>So
  maybe what we ought to do is we ought to draw our</span> <span
  m='235030'>straight line in here, sort of like this.</span> </p><p><span
  m='240458'>And that line is drawn with a view toward putting in the</span>
  <span m='247590'>widest street that separates the positive samples from
  the</span> <span m='253330'>negative samples.</span> </p><p><span
  m='254460'>That's why I call it the widest street approach.</span>
  </p><p><span m='257209'>So that makes way of putting in the decision
  boundary--</span> <span m='261535'>is to put in a straight line but in
  contrast with the way</span> <span m='265560'>ID tree puts in a straight
  line.</span> </p><p><span m='267440'>It tries to put the line in in such a way
  as the separation</span> <span m='272165'>between the positive and negative
  examples.</span> </p><p><span m='274680'>That street is as wide as
  possible.</span> </p><p><span m='277236'>All right.</span> </p><p><span
  m='277722'>So you might think to do that in the UROP project, and then,</span>
  <span m='281620'>let it go with that.</span> </p><p><span m='283205'>What's
  the big deal?</span> </p><p><span m='284730'>So what we've got to do is we've
  got to go through why</span> <span m='287340'>it's a big deal.</span>
  </p><p><span m='289176'>So first of all, we like to think about how you would
  make</span> <span m='295170'>a decision rule that would use that decision
  boundary.</span> </p><p><span m='299326'>So what I'm going to ask you to
  imagine is that we've got a</span> <span m='303650'>vector of any length that
  you like, constrained to be</span> <span m='309650'>perpendicular to the
  median, or if you like, perpendicular</span> <span m='313715'>to the
  gutters.</span> </p><p><span m='314630'>It's perpendicular to the median line
  of the street.</span> </p><p><span m='318280'>All right, it's drawn in such a
  way that that's true.</span> </p><p><span m='320540'>We don't know anything
  about it's length, yet.</span> </p><p><span m='323984'>Then, we also have some
  unknown, say, right here.</span> </p><p><span m='329920'>And we have a vector
  that points to it by excel.</span> </p><p><span m='335325'>So now, what we're
  really interested in is whether or</span> <span m='339310'>not that unknown is
  on the right side of the street or on</span> <span m='342920'>the left side of
  the street.</span> </p><p><span m='345062'>So what we'd what to do is want to
  project that vector,</span> <span m='347909'>u, down on to one that's
  perpendicular to the street.</span> </p><p><span m='351990'>Because then,
  we'll have the distance in this direction or</span> <span m='355205'>a number
  that's proportional to this in this direction.</span> </p><p><span
  m='358490'>And the further out we go, the closer we'll get to being on</span>
  <span m='362670'>the right side of the street, where the right side of
  the</span> <span m='365360'>street is not the correct side but actually the
  right side of</span> <span m='368065'>the street.</span> </p><p><span
  m='368985'>So what we can do is we can say, let's take w and dot it</span>
  <span m='374280'>with u and measure whether or not that number is equal to
  or</span> <span m='379930'>greater than some constant, c.</span> </p><p><span
  m='382646'>So remember that the dot product has taken the</span> <span
  m='385880'>projection onto w.</span> </p><p><span m='387896'>And the bigger
  that projection is, the further out along this</span> <span m='392150'>line
  the projection will lie.</span> </p><p><span m='394255'>And eventually it will
  be so big that the projection</span> <span m='397490'>crosses the median line
  of the street, and we'll say it must</span> <span m='400440'>be a positive
  sample.</span> </p><p><span m='405707'>Or we could say, without loss of
  generality that the dot</span> <span m='410880'>product plus some constant, b,
  is equal to or greater than 0.</span> </p><p><span m='416360'>If that's true,
  then it's a positive sample.</span> </p><p><span m='423050'>So that's our
  decision rule.</span> </p><p><span m='431522'>And this is the first in several
  elements that we're</span> <span m='437300'>going to have to line up to
  understand this idea called</span> <span m='440960'>support vector
  machines.</span> </p><p><span m='443340'>So that's the decision rule.</span>
  </p><p><span m='444730'>And the trouble is we don't know what constant to use,
  and</span> <span m='449460'>we don't know which w to use either.</span>
  </p><p><span m='452450'>We know that w has to be perpendicular to the
  median</span> <span m='455390'>line of the street.</span> </p><p><span
  m='457476'>But there's lot of w's that are perpendicular to the</span> <span
  m='459880'>median line of the street, because it</span> <span m='461070'>could
  be of any length.</span> </p><p><span m='462740'>So we don't have enough
  constraint here to fix a</span> <span m='465750'>particular b or a particular
  w.</span> </p><p><span m='469532'>Are you with me so far?</span> </p><p><span
  m='472395'>All right.</span> </p><p><span m='475176'>And this, by the way, we
  get just by saying that c</span> <span m='477990'>equals minus b.</span>
  </p><p><span m='482800'>What we're going to do next is we're going to lay on
  some</span> <span m='485790'>additional constraints whether you're toward
  putting enough</span> <span m='488960'>constraint on the situation that we can
  actually calculate</span> <span m='493330'>a b and a w.</span> </p><p><span
  m='496015'>So what we're going to say is this, that if we look at this</span>
  <span m='501290'>quantity that we're checking out to be greater than or
  less</span> <span m='504680'>than 0 to make our decision, then, what we're
  going to do</span> <span m='508040'>is we're going to say that if we take that
  vector w, and we</span> <span m='512510'>take the dot product of that with
  some x plus, some</span> <span m='517789'>positive sample, now.</span>
  </p><p><span m='518929'>This is not an unknown.</span> </p><p><span
  m='519760'>This is a positive sample.</span> </p><p><span m='522272'>If we
  take the dot product of those two vectors, and we had</span> <span
  m='526500'>b just like in our decision rule, we're going to want that</span>
  <span m='530050'>to be equal to or greater than 1.</span> </p><p><span
  m='534220'>So in other words, you can be an unknown anywhere in this</span>
  <span m='539080'>street and be just a little bit greater or just a
  little</span> <span m='542140'>bit less than 0.</span> </p><p><span
  m='543610'>But if you're a positive sample, we're going to insist</span> <span
  m='546120'>that this decision function gives the</span> <span m='548550'>value
  of one or greater.</span> </p><p><span m='551476'>Likewise, if w thought it
  was some negative sample is</span> <span m='561030'>provided to us, then we're
  going to say that has to be</span> <span m='564380'>equal to or less than
  minus 1.</span> </p><p><span m='568690'>All right.</span> </p><p><span
  m='569866'>So if you're a minus sample, like one of these two guys or</span>
  <span m='573790'>any minus sample that may lie down here, this function
  that</span> <span m='578330'>gives us the decision rule must return minus 1 or
  less.</span> </p><p><span m='582506'>So there's a separation of distance
  here.</span> </p><p><span m='585020'>Minus 1 to plus 1 for all of the
  samples.</span> </p><p><span m='590717'>So that's cool.</span> </p><p><span
  m='592842'>But we're not quite done, because carrying around two</span> <span
  m='598290'>equations like this, it's a pain.</span> </p><p><span m='601534'>So
  what we're going to do is we're going to introduce</span> <span
  m='604760'>another variable to make like a little easier.</span> </p><p><span
  m='611502'>Like many things that we do, and when we develop this kind</span>
  <span m='615210'>of stuff, introducing this variable is not something
  that</span> <span m='619120'>God says has to be done.</span> </p><p><span
  m='624380'>What is it?</span> </p><p><span m='625310'>We introduced this
  additional stuff to do what?</span> </p><p><span m='628930'>To make the
  mathematics more convenient, so mathematical</span> <span
  m='634140'>convenience.</span> </p><p><span m='635822'>So what we're going to
  do is we're going to introduce a</span> <span m='637730'>variable, y sub i,
  such that y sub i is equal to plus 1 for</span> <span m='653600'>plus samples
  and minus 1 for negative samples.</span> </p><p><span m='670460'>All
  right.</span> </p><p><span m='671685'>So for each sample, we're going to have
  a value for this</span> <span m='674190'>new quantity we've introduced,
  y.</span> </p><p><span m='676680'>And the value of y is going to be determined
  by whether it's</span> <span m='679910'>a positive sample or negative
  sample.</span> </p><p><span m='682370'>If it's a positive sample it's got to
  be plus 1 for this</span> <span m='686600'>situation up here, and it's going
  to be minus 1 for this</span> <span m='689280'>situation down here.</span>
  </p><p><span m='691235'>So what we're going to do with this first equation is
  we're</span> <span m='694480'>going to multiply it by y sub i, and that is now
  x of i,</span> <span m='701605'>plus b is equal to or greater than 1.</span>
  </p><p><span m='706430'>And then, you know what we're going to do?</span>
  </p><p><span m='707740'>We're going to multiply the left side of this equation
  by</span> <span m='713030'>y sub i, as well.</span> </p><p><span m='714770'>So
  the second equation becomes y sub i times x sub i plus b.</span> </p><p><span
  m='723172'>And now, what does that do over here?</span> </p><p><span
  m='725876'>We multiplied this guy times minus 1.</span> </p><p><span
  m='729480'>So it used to be the case that that was less than minus 1.</span>
  </p><p><span m='732750'>So if we multiply it by minus 1, then it has to be
  greater</span> <span m='734900'>than plus 1.</span> </p><p><span
  m='738990'>The two equations are the same, because that introduces</span>
  <span m='743220'>this little mathematical convenience.</span> </p><p><span
  m='746580'>So now, we can say that y sub i times x sub i plus b.</span>
  </p><p><span m='757986'>Well, what we're going to do--</span> <span
  m='761826'>Brett?</span> </p><p><span m='762675'>STUDENT: What happened to the
  w?</span> </p><p><span m='764255'>PATRICK WINSTON: Oh, did I leave out a
  w?</span> </p><p><span m='765450'>I'm sorry.</span> </p><p><span
  m='766050'>Thank you.</span> </p><p><span m='768612'>Yeah, I wouldn't have
  gotten very far with that.</span> </p><p><span m='771561'>So that's dot it
  with w, dot it with w.</span> </p><p><span m='774210'>Thank you, Brett.</span>
  </p><p><span m='775605'>Those are all vectors.</span> </p><p><span
  m='776710'>I'll pretty soon forget to put the little vector marks on</span>
  <span m='780010'>there, but you know what I mean.</span> </p><p><span
  m='781090'>So that's w plus b.</span> </p><p><span m='785256'>And now, let me
  bring that 1 over to the left side, and</span> <span m='789660'>that's equal
  to or greater than 0.</span> </p><p><span m='793535'>All right.</span>
  </p><p><span m='794730'>With Brett's correction, I think everything's
  OK.</span> </p><p><span m='797440'>But we're going to take one more step, and
  we're going to</span> <span m='801010'>say that y sub i times x sub i times w
  plus b minus 1.</span> </p><p><span m='813885'>It's always got to be equal to
  or greater than 0.</span> </p><p><span m='815760'>But what I'm going to say is
  if we're for</span> <span m='822492'>x sub i in a gutter.</span> </p><p><span
  m='829092'>So there's always going to be greater than 0, but we're</span>
  <span m='831140'>going to add the additional constraint that it's going
  to</span> <span m='833540'>be exactly 0 for all the samples that end up in
  the</span> <span m='838300'>gutters here of the street.</span> </p><p><span
  m='840190'>So the value of that expression is going to be</span> <span
  m='843010'>exactly 0 for that sample, 0 for this sample and this</span> <span
  m='848390'>sample, not 0 for that sample.</span> </p><p><span m='850460'>It's
  got to be greater than 1.</span> </p><p><span m='852180'>All right?</span>
  </p><p><span m='853846'>So that's step number two.</span> </p><p><span
  m='865319'>And this is step number one.</span> </p><p><span
  m='871454'>OK.</span> </p><p><span m='871950'>So now, we've just got some
  expressions to talk about,</span> <span m='874340'>some constraints.</span>
  </p><p><span m='876415'>Now, what are we trying to do here?</span>
  </p><p><span m='877870'>I forgot.</span> </p><p><span m='879922'>Oh, I
  remember now.</span> </p><p><span m='881320'>We're trying to figure out how to
  arrange for the line to be</span> <span m='885500'>such at the street
  separating the pluses from the minuses as</span> <span m='888790'>wide as
  possible.</span> </p><p><span m='891121'>So maybe we better figure out how we
  can express the</span> <span m='894300'>distance between the two
  gutters.</span> </p><p><span m='903645'>Let's just repeat our drawing.</span>
  </p><p><span m='906822'>We've got some minuses here, got pluses out here, and
  we've</span> <span m='912030'>got gutters that are going down here.</span>
  </p><p><span m='917021'>And now, we've got a vector here to a minus, and we've
  got</span> <span m='922290'>a vector here to a plus.</span> </p><p><span
  m='927091'>So we'll call that x plus and this x minus.</span> </p><p><span
  m='933950'>So what's the width of the street?</span> </p><p><span m='936730'>I
  don't know, yet.</span> </p><p><span m='937600'>But what we can do is we can
  take the difference of those</span> <span m='940360'>two vectors, and that
  will be a vector that</span> <span m='944120'>looks like this, right?</span>
  </p><p><span m='946346'>So that's x plus minus x minus.</span> </p><p><span
  m='952016'>So now, if I only had a unit normal that's normal to the</span>
  <span m='956280'>median line of the street, if it's a unit normal, then
  I</span> <span m='960320'>could just take the dot product or that unit
  normal</span> <span m='962120'>and this difference vector, and that would be
  the width of</span> <span m='963975'>the street, right?</span> </p><p><span
  m='965980'>So in other words, if I had a unit vector in that direction,</span>
  <span m='973090'>then I could just dot the two together, and that would
  be</span> <span m='975530'>the width of the street.</span> </p><p><span
  m='977896'>So let me write that down before I forget.</span> </p><p><span
  m='981550'>So the width is equal to x plus minus x minus.</span> </p><p><span
  m='991625'>OK.</span> </p><p><span m='994396'>That's the difference
  vector.</span> </p><p><span m='995580'>And now, I've got to multiple it by
  unit vector.</span> </p><p><span m='997510'>But wait a minute.</span>
  </p><p><span m='998180'>I said that that w is a normal, right?</span>
  </p><p><span m='1001590'>The w is a normal.</span> </p><p><span m='1004032'>So
  what I can do is I can multiply this times w, and</span> <span
  m='1010018'>then, we'll divide by the magnitude of w, and that will</span>
  <span m='1014156'>make it a unit vector.</span> </p><p><span m='1016591'>So
  that dot product, not a product, that dot product is,</span> <span
  m='1025650'>in fact, a scalar, and it's the width of the street.</span>
  </p><p><span m='1030329'>It doesn't do as much good, because it doesn't look
  like</span> <span m='1034730'>we get much out of it.</span> </p><p><span
  m='1037053'>Oh, but I don't know.</span> </p><p><span m='1038220'>Let's see,
  what can we get out of it?</span> </p><p><span m='1041371'>Oh gee, we've got
  this equation over here, this</span> <span m='1045954'>equation that
  constrains the samples</span> <span m='1048594'>that lie in the gutter.</span>
  </p><p><span m='1051310'>So if we have a positive sample, for example, then
  this</span> <span m='1055610'>is plus 1, and we have this equation.</span>
  </p><p><span m='1061150'>So it says that x plus times w is equal to, oh, 1
  minus b.</span> </p><p><span m='1078492'>See, I'm just taking this part here,
  this vector here, and</span> <span m='1082210'>I'm dotting it with x
  plus.</span> </p><p><span m='1084880'>So that's this piece right here.</span>
  </p><p><span m='1088650'>y is 1 for this kind of sample.</span> </p><p><span
  m='1091230'>So I'll just take the 1 and the b back over to the other</span>
  <span m='1093600'>side, and I've got 1 minus b.</span> </p><p><span
  m='1096212'>OK?</span> </p><p><span m='1098592'>Well, we can do the same trick
  with x minus.</span> </p><p><span m='1102241'>If we've got a negative
  sample,</span> <span m='1104806'>then y sub i is negative.</span> </p><p><span
  m='1108572'>That gives us our negative w times dot over x sub i.</span>
  </p><p><span m='1114296'>But now, we take this stuff back over to the right
  side,</span> <span m='1117190'>and we get 1 plus b.</span> </p><p><span
  m='1125252'>So that all licenses to rewrite this thing as 2 over</span> <span
  m='1130200'>the magnitude of w.</span> </p><p><span m='1132646'>How did I get
  there?</span> </p><p><span m='1134210'>Well, I decided I was going to enforce
  this constraint.</span> </p><p><span m='1139270'>I noted that the width of the
  street has got to be this</span> <span m='1143540'>difference vector times a
  unit vector.</span> </p><p><span m='1146105'>Then, I used the constraint to
  plug back some values here.</span> </p><p><span m='1149400'>And I discovered
  to my delight and amazement that the width</span> <span m='1152480'>of the
  street is 2 over the magnitude of w.</span> </p><p><span m='1158340'>Yes,
  Brett?</span> </p><p><span m='1160388'>STUDENT: So your first x plus is minus
  b, and x</span> <span m='1163881'>minus is 1 plus b.</span> </p><p><span
  m='1165378'>PATRICK WINSTON: Yeah.</span> </p><p><span m='1165877'>STUDENT: So
  you're subtracting it?</span> </p><p><span m='1166875'>PATRICK WINSTON: Let's
  see.</span> </p><p><span m='1167750'>If I've got a minus here, then that makes
  that minus, and</span> <span m='1171855'>then, the b is minus, and when I take
  the b over to the other</span> <span m='1173810'>side it becomes plus.</span>
  </p><p><span m='1175579'>STUDENT: Yeah, so if you subtract the left with
  the</span> <span m='1178573'>right [INAUDIBLE].</span> </p><p><span
  m='1181068'>PATRICK WINSTON: No.</span> </p><p><span m='1181670'>No,
  sorry.</span> </p><p><span m='1182320'>This expression here is 1 plus
  b.</span> </p><p><span m='1186981'>Trust me it works.</span> </p><p><span
  m='1188870'>I haven't got my legs all tangled up like last Friday,</span>
  <span m='1191370'>well, not yet, anyway.</span> </p><p><span m='1193786'>It's
  possible.</span> </p><p><span m='1195340'>There's going to be a lot of algebra
  here eventually.</span> </p><p><span m='1198958'>So this quantity here, this
  is miracle number three.</span> </p><p><span m='1204995'>This quantity here is
  the width of the street.</span> </p><p><span m='1209731'>And what we're trying
  to do is we're trying to</span> <span m='1213570'>maximize that, right?</span>
  </p><p><span m='1217158'>So we want to maximize 2 over the magnitude of w if
  we're to</span> <span m='1227170'>get the widest street under the constraints
  that we've</span> <span m='1229300'>decided that we're going to work
  with.</span> </p><p><span m='1232210'>All right.</span> </p><p><span
  m='1233050'>So that means that it's OK to maximize 1 over w, instead.</span>
  </p><p><span m='1246281'>We just drop the constant.</span> </p><p><span
  m='1248250'>And that means that it's OK to minimize the</span> <span
  m='1253550'>magnitude of w, right?</span> </p><p><span m='1259572'>And that
  means that it's OK to minimize 1/2 times the</span> <span
  m='1268710'>magnitude of w squared.</span> </p><p><span m='1272070'>Right,
  Brett?</span> </p><p><span m='1273675'>Why did I do that?</span> </p><p><span
  m='1276075'>Why did I multiply by 1/2 and square it?</span> </p><p><span
  m='1279010'>STUDENT: Because it's mathematically convenient.</span>
  </p><p><span m='1279970'>PATRICK WINSTON: It's mathematically
  convenient.</span> </p><p><span m='1280930'>Thank you.</span> </p><p><span
  m='1282850'>So this is point number three in the development.</span>
  </p><p><span m='1287840'>So where do we go?</span> </p><p><span m='1288950'>We
  decided that was going to be our decision rule.</span> </p><p><span
  m='1291170'>We're going to see which side of the line we're on.</span>
  </p><p><span m='1293530'>We decided to constrain the situation, so the value
  of the</span> <span m='1296420'>decision rule is plus 1 in the gutters for the
  positive</span> <span m='1300750'>samples and minus 1 in the gutters
  for</span> <span m='1302820'>the negative samples.</span> </p><p><span
  m='1304070'>And then, we discovered that maximizing the width of the</span>
  <span m='1307470'>street led us to an expression like that,</span> <span
  m='1311090'>which we wish to maximize.</span> </p><p><span m='1317425'>Should
  we take a break?</span> </p><p><span m='1318350'>Should we get coffee?</span>
  </p><p><span m='1319460'>Too bad, we can't do that in this kind of
  situation.</span> </p><p><span m='1322365'>But we would if we could.</span>
  </p><p><span m='1324400'>And I'm sure when Vapnik got to this point, he</span>
  <span m='1327090'>went out for coffee.</span> </p><p><span m='1329826'>So now,
  we back up, and we say, well, let's let these</span> <span
  m='1333820'>expressions start developing into a song.</span> </p><p><span
  m='1337252'>Not like that, that's vapid, speaking of Vapnik.</span>
  </p><p><span m='1349760'>What song is it going to sing?</span> </p><p><span
  m='1351970'>We've got an expression here that we'd like to find the</span>
  <span m='1355680'>minimum of, the extremum of.</span> </p><p><span
  m='1358236'>And we've got some constraints here that we</span> <span
  m='1361790'>would like to honor.</span> </p><p><span m='1364040'>What are we
  going to do?</span> </p><p><span m='1367600'>Let me put what we're going to do
  to you in</span> <span m='1369300'>the form of a puzzle.</span> </p><p><span
  m='1372385'>Is it got something to do with Legendre?</span> </p><p><span
  m='1378900'>Has it got something to do with Laplace?</span> </p><p><span
  m='1384270'>Or does it have something to do with Lagrange?</span> </p><p><span
  m='1387375'>She says Lagrange.</span> </p><p><span m='1389400'>Actually, all
  three were said to be on Fourier's Doctoral</span> <span m='1392850'>Defense
  Committee-- must have been quite an example.</span> </p><p><span
  m='1395590'>But we want to talk about Lagrange, because we've got a</span>
  <span m='1398960'>situation here.</span> </p><p><span m='1400605'>Is this
  1801?</span> </p><p><span m='1402060'>1802?</span> </p><p><span
  m='1402840'>1802.</span> </p><p><span m='1405000'>We learned in 1802 that if
  we going to find the extremum of</span> <span m='1408462'>a function with
  constraints, then we're going to have to</span> <span m='1413840'>use Lagrange
  multipliers.</span> </p><p><span m='1415922'>That would give us a new
  expression, which we can</span> <span m='1419820'>maximize or minimize without
  thinking about</span> <span m='1423350'>the constraints anymore.</span>
  </p><p><span m='1425090'>That's how Lagrange multipliers work.</span>
  </p><p><span m='1427755'>So this brings us to miracle number four,
  developmental</span> <span m='1432440'>piece number four.</span> </p><p><span
  m='1433770'>And it works like this.</span> </p><p><span m='1436420'>We're
  going to say that L--</span> <span m='1438210'>the thing we're going to try to
  maximize in order to</span> <span m='1440720'>maximize the width of the
  street--</span> <span m='1442660'>is equal to 1/2 times the magnitude of that
  vector, w,</span> <span m='1448235'>squared minus.</span> </p><p><span
  m='1452476'>And now, we've got to have a summation over all the</span> <span
  m='1456230'>constraints.</span> </p><p><span m='1458880'>And each or those
  constraints is going to have a multiplier,</span> <span m='1461460'>alpha sub
  i.</span> </p><p><span m='1463412'>And then, we write down the
  constraint.</span> </p><p><span m='1466106'>And when we write down a
  constraint,</span> <span m='1467575'>there it is up there.</span> </p><p><span
  m='1469100'>And I've got to be hyper careful here, because,</span> <span
  m='1471690'>otherwise, I'll get lost in the algebra.</span> </p><p><span
  m='1473830'>So the constraint is y sub i times vector, w, dotted with</span>
  <span m='1482520'>vector x sub i plus b, and now, I've got a closing</span>
  <span m='1489030'>parenthesis, a minus 1.</span> </p><p><span
  m='1492315'>That's the end of my constraint, like so.</span> </p><p><span
  m='1500330'>I sure hope I've got that right, because I'll be in deep</span>
  <span m='1503380'>trouble if that's wrong.</span> </p><p><span
  m='1504730'>Anybody see any bugs in that?</span> </p><p><span m='1505940'>That
  looks right. doesn't it?</span> </p><p><span m='1508250'>We've got the
  original thing we're trying to work with.</span> </p><p><span m='1510310'>Now,
  we've got Lagrange multipliers all multiplied.</span> </p><p><span
  m='1514425'>It's back to that constraint up there, where each</span> <span
  m='1516300'>constraint is constrained to be 0.</span> </p><p><span
  m='1520512'>Well, there's a little bit of mathematical slight of hand</span>
  <span m='1524770'>here, because in the end, the ones that are going to be
  0,</span> <span m='1527810'>the Lagrange multipliers here.</span> </p><p><span
  m='1531210'>The ones that are going to be non 0 are going to be the
  ones</span> <span m='1533795'>connected with vectors that lie in the
  gutter.</span> </p><p><span m='1536120'>The rest are going to be 0.</span>
  </p><p><span m='1539848'>But in any event, we can pretend that this is
  what</span> <span m='1543380'>we're doing.</span> </p><p><span m='1546550'>I
  don't care whether it's a maximum or minimum.</span> </p><p><span
  m='1548350'>I've lost track.</span> </p><p><span m='1549550'>But what we're
  going to do is we're going to try to find an</span> <span m='1551290'>extremum
  of that.</span> </p><p><span m='1552360'>So what do we do?</span> </p><p><span
  m='1553730'>What does 1801 teach us about?</span> </p><p><span
  m='1558330'>Finding the maximum--</span> <span m='1559465'>well, we've got to
  find the derivatives and set them to 0.</span> </p><p><span m='1564760'>And
  then, after we've done that, a little bit of that</span> <span
  m='1566500'>manipulation, we're going to see a wonderful</span> <span
  m='1568760'>song start to emerge.</span> </p><p><span m='1570850'>So let's see
  if we can do it.</span> </p><p><span m='1572890'>Let's take the partial of L,
  the Lagrangian, with respect</span> <span m='1577160'>to the vector, w.</span>
  </p><p><span m='1579190'>Oh my God, how do you differentiate with</span> <span
  m='1581430'>respect to a vector?</span> </p><p><span m='1585255'>It turns out
  that it has a form that looks exactly like</span> <span
  m='1588050'>differentiating with respect to a scalar.</span> </p><p><span
  m='1590450'>And the way you prove that to yourself is you just expand</span>
  <span m='1592580'>everything in terms of all of the vector's
  components.</span> </p><p><span m='1595530'>You differentiate those with
  respect to what you're</span> <span m='1597660'>differentiating with respect
  to, and everything</span> <span m='1600140'>turns out the same.</span>
  </p><p><span m='1602380'>So what you get when you differentiate this
  with</span> <span m='1604880'>respect to the vector, w, is 2 comes down, and
  we have just</span> <span m='1612280'>magnitude of w.</span> </p><p><span
  m='1613833'>Was it the magnitude of w?</span> </p><p><span m='1616090'>Yeah,
  like so.</span> </p><p><span m='1621629'>Was it the magnitude of w?</span>
  </p><p><span m='1622910'>Oh, it's not the magnitude of w.</span> </p><p><span
  m='1626510'>It's just w, like so, no magnitude involved.</span> </p><p><span
  m='1632396'>Then, we've got a w over here, so we've got to
  differentiate</span> <span m='1636480'>this part with respect to w, as
  well.</span> </p><p><span m='1638270'>But that part's a lot easier, because
  all we</span> <span m='1639690'>have there is a w.</span> </p><p><span
  m='1641310'>There's no magnitude.</span> </p><p><span m='1642350'>It's not
  raised to any power.</span> </p><p><span m='1644002'>So what's w multiplied
  by?</span> </p><p><span m='1646290'>Well, it's multiplied by x and y sub i and
  alpha sub i.</span> </p><p><span m='1651954'>All right.</span> </p><p><span
  m='1652610'>So that means that this expression, this derivative of</span>
  <span m='1656605'>the Lagrangian, with respect to w is going to be equal to
  w</span> <span m='1661660'>minus the sum of alpha sub i, y sub i, x sub i, and
  that's</span> <span m='1671820'>got to be set to 0.</span> </p><p><span
  m='1674240'>And that implies that w is equal to the sum of some alpha</span>
  <span m='1682250'>i, some scalars, times this minus 1 or plus 1
  variable</span> <span m='1686980'>times x sub i over i.</span> </p><p><span
  m='1691332'>And now, the math is beginning to sing.</span> </p><p><span
  m='1694430'>Because it tells us that the vector w is a linear sum of</span>
  <span m='1699490'>the samples, all the samples or some of the sample.</span>
  </p><p><span m='1704492'>It didn't have to be that way.</span> </p><p><span
  m='1707786'>It could have been raised to a power.</span> </p><p><span
  m='1709230'>It could have been a logarithm.</span> </p><p><span
  m='1711160'>All sorts of horrible things could have</span> <span
  m='1713010'>happened when we did this.</span> </p><p><span m='1714320'>But
  when we did this, we discovered that w is going to</span> <span m='1719210'>be
  equal to a linear some of these vectors here.</span> </p><p><span
  m='1724620'>Some of the vectors in the sample set, and I say some,</span>
  <span m='1729060'>because for some alpha will be 0.</span> </p><p><span
  m='1734265'>All right.</span> </p><p><span m='1735515'>So this is something
  that we want to take note of as</span> <span m='1741560'>something
  important.</span> </p><p><span m='1745402'>Now, of course, we've got to
  differentiate L with respect</span> <span m='1749760'>to anything else it
  might vary, so we've got to</span> <span m='1752900'>differentiate L with
  respect to b, as well.</span> </p><p><span m='1758436'>So what's that going to
  be equal to?</span> </p><p><span m='1761222'>Well, there's no b in here, so
  that makes no contribution.</span> </p><p><span m='1765705'>This part here
  doesn't have a b in it, so that makes no</span> <span
  m='1768750'>contribution.</span> </p><p><span m='1769335'>There's no b over
  here, so that makes no contribution.</span> </p><p><span m='1772270'>So we've
  got alpha i times y sub i times b.</span> </p><p><span m='1777210'>That has a
  contribution.</span> </p><p><span m='1779365'>So that's going to be the sum of
  alpha i times y sub i.</span> </p><p><span m='1786470'>And then, we're
  differentiating with respect</span> <span m='1788570'>to b, so that
  disappears.</span> </p><p><span m='1790635'>There's a minus sign here, and
  that's equal to 0, or that</span> <span m='1795440'>implies that the sum of
  the alpha i times y sub</span> <span m='1799490'>i is equal to 0.</span>
  </p><p><span m='1803012'>Hm, that looks like that might be helpful
  somewhere.</span> </p><p><span m='1810460'>And now, it's time for more
  coffee.</span> </p><p><span m='1812755'>By the way, these coffee periods take
  months.</span> </p><p><span m='1815520'>You stare at it.</span> </p><p><span
  m='1816905'>You work on something else.</span> </p><p><span m='1818980'>You've
  got to worry about your finals.</span> </p><p><span m='1822000'>And you think
  about it some more.</span> </p><p><span m='1824020'>And eventually, you come
  back from coffee</span> <span m='1825740'>and do the next thing.</span>
  </p><p><span m='1828930'>Oh, what is the next thing?</span> </p><p><span
  m='1831640'>Well, we've still got this expression that we're trying</span>
  <span m='1834180'>to find the minimum for.</span> </p><p><span m='1841020'>And
  you say to yourself, this is really a job for the</span> <span
  m='1843500'>numerical analysts.</span> </p><p><span m='1844480'>Those guys
  know about this sort of stuff.</span> </p><p><span m='1847205'>Because of that
  little power in there, that square.</span> </p><p><span m='1849620'>This is a
  so-called quadratic optimization problem.</span> </p><p><span m='1854772'>So
  at this point, you would be inclined to hand this problem</span> <span
  m='1857480'>over to a numerical analysts.</span> </p><p><span
  m='1859290'>They'll come back in a few weeks with an algorithm.</span>
  </p><p><span m='1861410'>You implement the algorithm.</span> </p><p><span
  m='1863100'>And maybe things work.</span> </p><p><span m='1864120'>Maybe they
  don't converge.</span> </p><p><span m='1864890'>But any case, you don't worry
  about it.</span> </p><p><span m='1868325'>But we're not going to do that,
  because we want to do a</span> <span m='1870360'>little bit more math, because
  we're interested</span> <span m='1872680'>in stuff like this.</span>
  </p><p><span m='1874890'>We're interested in the fact that the decision vector
  is a</span> <span m='1878770'>linear sum of the samples.</span> </p><p><span
  m='1881265'>So we're going to work a little harder on this stuff.</span>
  </p><p><span m='1884030'>And in particular, now that we've got an expression
  for w,</span> <span m='1887730'>this one right here, we're going to plug it
  back in</span> <span m='1891010'>there, and we're going to plug it back in
  here and see what</span> <span m='1894870'>happens to that thing we're trying
  to find</span> <span m='1897440'>the extremum of.</span> </p><p><span
  m='1906817'>Is everybody relaxed, taking deep breath?</span> </p><p><span
  m='1911220'>Actually, this is the easiest part.</span> </p><p><span
  m='1912530'>This is just doing a little bit of the algebra.</span>
  </p><p><span m='1915755'>So the think we're trying to maximize or</span> <span
  m='1918830'>minimize is equal to 1/2.</span> </p><p><span m='1923465'>And now,
  we've got to have this vector</span> <span m='1930570'>here in there
  twice.</span> </p><p><span m='1936781'>Right?</span> </p><p><span
  m='1937190'>Because we're multiplying the two together.</span> </p><p><span
  m='1941295'>So let's see.</span> </p><p><span m='1942970'>We've got from that
  expression up there, one of those w's</span> <span m='1946860'>will just be
  the sum of the alpha i times y sub i times</span> <span m='1953670'>the vector
  x sub i.</span> </p><p><span m='1956265'>And then, we've got the other one,
  too.</span> </p><p><span m='1958320'>So that's just going to be the sum of
  alpha.</span> </p><p><span m='1961620'>Now, I'm going to, actually,
  eventually, squish those two</span> <span m='1965280'>sums together into a
  double summation, so I have to keep</span> <span m='1968050'>the indexes
  straight.</span> </p><p><span m='1969990'>So I'm just going to write that as
  alpha sub j, y</span> <span m='1973786'>sub j, x sub j.</span> </p><p><span
  m='1977726'>So those are my two vectors and I'm going to take the dot</span>
  <span m='1979760'>product of those.</span> </p><p><span m='1980850'>That's the
  first piece, right?</span> </p><p><span m='1984310'>Boy, this is hard.</span>
  </p><p><span m='1987345'>So minus, and now, the next term looks like alpha i,
  y sub</span> <span m='1993760'>i, x sub i times w.</span> </p><p><span
  m='1997395'>So you've got a whole bunch of these.</span> </p><p><span
  m='1999640'>We've got a sum of alpha i times y sub i times x sub i,</span>
  <span m='2006996'>and then, that gets multiplied times w.</span> </p><p><span
  m='2010425'>So we'll put this like this, the sum of alpha j, y sub j, x</span>
  <span m='2019160'>sub j in there like that.</span> </p><p><span
  m='2021630'>And then, that's the dot product like that.</span> </p><p><span
  m='2024345'>That wasn't as bad as I thought.</span> </p><p><span
  m='2029731'>Now, I've got to deal with the next term, the alpha i times
  y</span> <span m='2034150'>sub i times b.</span> </p><p><span m='2038475'>So
  that's minus sub of alpha i times y sub i times b.</span> </p><p><span
  m='2047746'>And then, to finish it off, we have plus the sum of alpha
  sub</span> <span m='2053949'>i minus 1 up there, minus 1 in front of the
  summation, such</span> <span m='2058320'>as the sum of the alphas.</span>
  </p><p><span m='2060059'>Are you with me so far?</span> </p><p><span
  m='2061605'>Just a little algebra.</span> </p><p><span m='2064096'>It looks
  good.</span> </p><p><span m='2064860'>I think I haven't mucked it, yet.</span>
  </p><p><span m='2068838'>Let's see.</span> </p><p><span m='2070952'>alpha i
  times y sub i times b. b is a constant.</span> </p><p><span m='2074364'>So
  pull that out there, and then, I just got the sum of</span> <span
  m='2077409'>alpha sub i times y sub i.</span> </p><p><span m='2081078'>Oh,
  that's good.</span> </p><p><span m='2082250'>That's 0.</span> </p><p><span
  m='2088304'>Now, so for every one of these terms, we dot it with this</span>
  <span m='2091900'>whole expression.</span> </p><p><span m='2094966'>So that's
  just like taking this thing here and dotting</span> <span m='2100050'>those
  two things together, right?</span> </p><p><span m='2102145'>Oh, but that's
  just the same thing we've got here.</span> </p><p><span m='2107324'>So now,
  what we can do is we can say that we can rewrite</span> <span m='2111140'>this
  Lagrangian as--</span> <span m='2115560'>we've got that sum of alpha i.</span>
  </p><p><span m='2119566'>That's the positive element.</span> </p><p><span
  m='2122256'>And then, we've got one of these and half of these.</span>
  </p><p><span m='2125680'>So that's minus 1/2.</span> </p><p><span
  m='2128865'>And now, I'll just convert that whole works into a double</span>
  <span m='2130980'>sum over both i and j of alpha i times alpha j times y sub
  i</span> <span m='2143230'>times y sub j times x sub i dotted with x of
  j.</span> </p><p><span m='2152670'>We sure went through a lot of trouble to
  get there, but now,</span> <span m='2155560'>we've got it.</span> </p><p><span
  m='2156210'>And we know that what we're trying to do is we're trying</span>
  <span m='2159200'>to find a maximum of that expression.</span> </p><p><span
  m='2167212'>And that's the one we're going to had off to</span> <span
  m='2168910'>the numerical analysts.</span> </p><p><span m='2171010'>So if
  we're going to had this off to the numerical analysts</span> <span
  m='2173090'>anyway, why did I go to all this trouble?</span> </p><p><span
  m='2176136'>Good question.</span> </p><p><span m='2179200'>Do you have any
  idea why I went to all this trouble?</span> </p><p><span m='2182626'>Because I
  wanted to find out the dependence of this</span> <span
  m='2185440'>expression.</span> </p><p><span m='2186950'>Wanda is telling
  me.</span> </p><p><span m='2188120'>I'm translating as I go.</span>
  </p><p><span m='2189450'>She's telling me in Romanian.</span> </p><p><span
  m='2191555'>I want to find what this maximization depends on with</span> <span
  m='2195510'>respect these vectors, the x, the sample vectors.</span>
  </p><p><span m='2201160'>And what I've discovered is that the optimization
  depends</span> <span m='2206480'>only on the dot product of pairs of
  samples.</span> </p><p><span m='2213976'>And that's something we want to keep
  in mind.</span> </p><p><span m='2215300'>That's why I put it in royal
  purple.</span> </p><p><span m='2219350'>Now, up here, so let's see.</span>
  </p><p><span m='2222920'>What do we call that one up there?</span>
  </p><p><span m='2224210'>That's two.</span> </p><p><span m='2225715'>I guess,
  we'll call this piece here three.</span> </p><p><span m='2230505'>This piece
  here is four.</span> </p><p><span m='2232600'>And now, there's one more
  piece.</span> </p><p><span m='2235060'>Because I want to take that w, and not
  only stick it back</span> <span m='2240080'>into that Lagrangian, I want to
  stick it back into the</span> <span m='2242700'>decision rule.</span>
  </p><p><span m='2244446'>So now, my decision rule with this expression for w
  is going</span> <span m='2249030'>to be w plugged into that thing.</span>
  </p><p><span m='2251410'>So the decision rule is going to look like the sum of
  alpha</span> <span m='2257000'>i times y sub i times x sub i dotted with the
  unknown</span> <span m='2265960'>vector, like so.</span> </p><p><span
  m='2267840'>And we're going to, I guess, add b.</span> </p><p><span
  m='2271536'>And we're going to say, if that's greater than or equal</span>
  <span m='2273770'>to 0, then plus.</span> </p><p><span m='2280560'>So you see
  why the math is beginning to sing to us now.</span> </p><p><span
  m='2284750'>Because now, we discover that the decision rule, also,</span>
  <span m='2288840'>depends only on the dot product of those sample</span> <span
  m='2292700'>vectors and the unknown.</span> </p><p><span m='2295340'>So the
  total of dependence of all of the</span> <span m='2298640'>math on the dot
  products.</span> </p><p><span m='2301106'>All right.</span> </p><p><span
  m='2304034'>And now, I hear a whisper.</span> </p><p><span m='2307160'>Someone
  is saying, I don't believe that</span> <span m='2310410'>mathematicians can do
  it.</span> </p><p><span m='2311720'>I don't think those numerical analysts can
  find the</span> <span m='2313850'>optimization.</span> </p><p><span
  m='2317360'>I want to be sure of it.</span> </p><p><span m='2318925'>Give me
  ocular proof.</span> </p><p><span m='2320850'>So I'd like to run a
  demonstration of it.</span> </p><p><span m='2336596'>OK.</span> </p><p><span
  m='2337090'>There's our sample problem.</span> </p><p><span m='2338060'>The
  one I started the hour out with.</span> </p><p><span m='2339800'>Now, if the
  optimization algorithm doesn't get stuck in</span> <span m='2345430'>a local
  maximum or something, it should find a nice,</span> <span m='2347720'>straight
  line separating those two guys to finding the widest</span> <span
  m='2350900'>street between the minuses and the pluses.</span> </p><p><span
  m='2354445'>So in just a couple of steps, you can see down</span> <span
  m='2356880'>there in step 11.</span> </p><p><span m='2358150'>It's decided
  that it's done as much as it can on the</span> <span
  m='2360630'>optimization.</span> </p><p><span m='2362406'>And it's got three
  alphas.</span> </p><p><span m='2365480'>And you can see that the two negative
  samples both figure</span> <span m='2370970'>into the solution, the weights on
  the Lagrangian multipliers</span> <span m='2374575'>are given by those little
  yellow bars.</span> </p><p><span m='2376820'>So the two negatives participate
  in the solution as</span> <span m='2380030'>one of the positives, but the
  other positive doesn't.</span> </p><p><span m='2382040'>So it has a 0
  weight.</span> </p><p><span m='2385500'>So everything worked out well.</span>
  </p><p><span m='2387700'>Now, I said, as long as it doesn't get stuck on a
  local</span> <span m='2390440'>maximum, guess what, those mathematical friends
  of ours</span> <span m='2395095'>can tell us and prove to us that this</span>
  <span m='2398120'>thing is a convex space.</span> </p><p><span
  m='2400420'>That means it can never get stuck in a local maximum.</span>
  </p><p><span m='2404042'>So in contrast with things like neural nets, where
  you</span> <span m='2407780'>have a plague of local maxima, this guy never
  gets stuck in a</span> <span m='2411160'>local maxima.</span> </p><p><span
  m='2412355'>Let's try some other examples.</span> </p><p><span
  m='2415536'>Here's two vertical points--</span> <span m='2417250'>no surprises
  there, right?</span> </p><p><span m='2420920'>Well, you say, well, maybe it
  can't deal</span> <span m='2422470'>with diagonal points.</span> </p><p><span
  m='2424165'>Sure it can.</span> </p><p><span m='2426830'>How about this thing
  here?</span> </p><p><span m='2432091'>Yeah, it only needed two of the points
  since any two, a</span> <span m='2438510'>plus or minus, will define the
  street.</span> </p><p><span m='2441820'>Let's try this guy.</span>
  </p><p><span m='2444580'>Oh.</span> </p><p><span m='2446526'>What do you
  think?</span> </p><p><span m='2447110'>What happened here?</span> </p><p><span
  m='2450046'>Well, we're screwed, right?</span> </p><p><span
  m='2451345'>Because it's linearly inseparable--</span> <span m='2456629'>bad
  news.</span> </p><p><span m='2460175'>So in situations where it's linearly
  inseparable, the</span> <span m='2464250'>mechanism struggles, and eventually,
  it will just slow</span> <span m='2467060'>down and you truncate it, because
  it's</span> <span m='2468570'>not making any progress.</span> </p><p><span
  m='2469510'>And you see the red dots there are ones that it got wrong.</span>
  </p><p><span m='2474765'>So you say, well, too bad for our side-- doesn't look
  like</span> <span m='2477480'>it's all that good anyway.</span> </p><p><span
  m='2479502'>But then, a powerful idea comes to the rescue, when</span> <span
  m='2486020'>stuck switch to another perspective.</span> </p><p><span
  m='2488896'>So if we don't like the space that we're in, because it</span>
  <span m='2491850'>gives examples that are not linearly separable, then
  we</span> <span m='2497680'>can say, oh, shoot.</span> </p><p><span
  m='2499705'>Here's our space.</span> </p><p><span m='2502052'>Here are two
  points.</span> </p><p><span m='2509486'>Here are two other points.</span>
  </p><p><span m='2512944'>We can't separate them.</span> </p><p><span
  m='2514630'>But if we could somehow get them into another space, maybe</span>
  <span m='2517740'>we can separate them, because they look like this in
  the</span> <span m='2526600'>other space, and they're easy to separate.</span>
  </p><p><span m='2528925'>So what we need, then, is a transformation that will
  take</span> <span m='2532820'>us from the space we're in into a space where
  things are</span> <span m='2536070'>more convenient, so we're going to call
  that</span> <span m='2537590'>transformation phi with a vector, x.</span>
  </p><p><span m='2542745'>That's the transformation.</span> </p><p><span
  m='2543855'>And now, here's the reason for all the magic.</span> </p><p><span
  m='2548950'>I said, that the maximization only depends on dot products.</span>
  </p><p><span m='2554880'>So all I need to do the maximization is the</span>
  <span m='2558810'>transformation of one vector dotted with the
  transformation</span> <span m='2563975'>of another vector, like so.</span>
  </p><p><span m='2567235'>That's what I need to maximize, or to find the</span>
  <span m='2571260'>maximum on.</span> </p><p><span m='2572510'>Then, in order
  to recognize--</span> <span m='2575216'>where did it go?</span> </p><p><span
  m='2577706'>Underneath the chalkboard.</span> </p><p><span m='2585290'>Oh,
  yes.</span> </p><p><span m='2586002'>Here it is.</span> </p><p><span
  m='2586900'>To recognize, all I need is dot products, too.</span> </p><p><span
  m='2589620'>So for that one I need phi of x dotted with phi of u.</span>
  </p><p><span m='2597025'>And just to make this a little bit more consistent,
  the</span> <span m='2599300'>notation, I'll call that x j and this x sub
  i.</span> </p><p><span m='2602750'>And that's x sub i.</span> </p><p><span
  m='2603550'>Those are the quantities I need in order to do it.</span>
  </p><p><span m='2607595'>So that means that if I have a function, let's call
  it k of x</span> <span m='2614540'>sub i and x sub j, that's equal to phi of x
  sub i dotted</span> <span m='2625370'>with phi of x sub j.</span> </p><p><span
  m='2629191'>Then, I'm done.</span> </p><p><span m='2630215'>This is what I
  need.</span> </p><p><span m='2632306'>I don't actually need this.</span>
  </p><p><span m='2636955'>All I need is that function, k, which happens to be
  called</span> <span m='2640990'>a kernel function, which provides me with the
  dot</span> <span m='2644650'>product of those two vectors in another
  space.</span> </p><p><span m='2647745'>I don't have to know the
  transformation</span> <span m='2649310'>into the other space.</span>
  </p><p><span m='2651200'>And that's the reason that this stuff is a
  miracle.</span> </p><p><span m='2655935'>So what are some of the kernels that
  are popular?</span> </p><p><span m='2659595'>One is the linear kernel that
  says that u dotted with v plus</span> <span m='2667200'>1 to the n-th is such
  a kernel, because it's got u in</span> <span m='2672515'>it and v in it, the
  two vectors.</span> </p><p><span m='2675190'>And this is what the dot product
  is in the other space.</span> </p><p><span m='2678060'>So that's one
  choice.</span> </p><p><span m='2679550'>Another choice is a kernel that looks
  like</span> <span m='2682450'>this, e to the minus.</span> </p><p><span
  m='2686295'>Let's take the dot product of the difference</span> <span
  m='2690440'>of those two guys.</span> </p><p><span m='2693880'>Let's take the
  magnitude of that and</span> <span m='2696360'>divide it by some sigma.</span>
  </p><p><span m='2697660'>That's a second kind of kernel that we can
  use.</span> </p><p><span m='2701160'>So let's go back and see if we can solve
  this problem by</span> <span m='2704350'>transforming it into another space
  where we have another</span> <span m='2706350'>perspective.</span>
  </p><p><span m='2710082'>So that's it.</span> </p><p><span m='2715618'>That's
  another kernel.</span> </p><p><span m='2717760'>And so sure, we can.</span>
  </p><p><span m='2718870'>And that's the answer when transformed back into
  the</span> <span m='2721280'>original space.</span> </p><p><span
  m='2722905'>We can also try doing that with a so-called</span> <span
  m='2724690'>radial basis kernel.</span> </p><p><span m='2725780'>That's the
  one with the exponential in it.</span> </p><p><span m='2728112'>We can learn
  on that one.</span> </p><p><span m='2729310'>Boom.</span> </p><p><span
  m='2730480'>No problem.</span> </p><p><span m='2733346'>So we've got a general
  method that's convex and guaranteed</span> <span m='2736860'>to produce a
  global solution.</span> </p><p><span m='2739245'>We've got a mechanism that
  easily allows us to transform</span> <span m='2742950'>this into another
  space.</span> </p><p><span m='2745470'>So it works like a charm.</span>
  </p><p><span m='2747695'>Of course, it doesn't remove all possible
  problems.</span> </p><p><span m='2750736'>Look at that exponential thing
  here.</span> </p><p><span m='2753650'>If we choose a sigma that is small
  enough, then those</span> <span m='2759890'>sigmas are essentially shrunk
  right around the sample</span> <span m='2762760'>points, and we could get
  overfitting.</span> </p><p><span m='2766092'>So it doesn't immunize us against
  overfitting, but it</span> <span m='2769385'>does immunize us against local
  maxima and does provide us</span> <span m='2772500'>with a general mechanism
  for doing a transformation into</span> <span m='2776820'>another space with a
  better perspective.</span> </p><p><span m='2778935'>Now, the history lesson,
  all this stuff feels fairly new.</span> </p><p><span m='2782435'>It feels like
  it's younger than you are.</span> </p><p><span m='2785746'>Here's the history
  of it.</span> </p><p><span m='2787822'>Vapnik immigrated from the Soviet Union
  to the United</span> <span m='2791060'>States in about 1991.</span>
  </p><p><span m='2793760'>Nobody ever heard of this stuff before he
  immigrated.</span> </p><p><span m='2796795'>He actually had done this work on
  the basic support vector</span> <span m='2800200'>idea in his Ph.D. thesis at
  Moscow University</span> <span m='2804355'>in the early '60s.</span>
  </p><p><span m='2806590'>But it wasn't possible for him to do anything with
  it,</span> <span m='2809470'>because they didn't have any computers they could
  try</span> <span m='2811220'>anything out with.</span> </p><p><span
  m='2813010'>So he spent the next 25 years at some oncology institute in</span>
  <span m='2817460'>the Soviet Union doing applications.</span> </p><p><span
  m='2820660'>Somebody from Bell Labs discovers him, invites him</span> <span
  m='2823440'>over to the United States where, subsequently, he</span> <span
  m='2825445'>decides to immigrate.</span> </p><p><span m='2827466'>In 1992, or
  thereabouts, Vapnik submits three papers to</span> <span m='2833580'>NIPS, the
  Neural Information Processing Systems journal.</span> </p><p><span
  m='2837115'>All of them were rejected.</span> </p><p><span m='2839065'>He's
  still sore about it, but it's motivating.</span> </p><p><span m='2843570'>So
  around 1992, 1993, Bell Labs was interested in</span> <span
  m='2847060'>hand-written character recognition</span> <span m='2848420'>and in
  neural nets.</span> </p><p><span m='2850456'>Vapnik thinks that neural
  nets--</span> <span m='2853270'>what would be a good word to use?</span>
  </p><p><span m='2856295'>I can think of the vernacular, but he thinks
  that</span> <span m='2858410'>they're not very good.</span> </p><p><span
  m='2860150'>So he bets a colleague a good dinner that support vector</span>
  <span m='2864320'>machines will eventually do better at handwriting</span>
  <span m='2866385'>recognition then neural nets.</span> </p><p><span
  m='2870356'>And it's a dinner bet, right?</span> </p><p><span m='2871690'>It's
  not that big of deal.</span> </p><p><span m='2872600'>But as Napoleon said,
  it's amazing what a soldier will do</span> <span m='2875280'>for a bit of
  ribbon.</span> </p><p><span m='2877641'>So that makes colleague, who's working
  on this problem with</span> <span m='2881380'>handwritten recognition, decides
  to try a support</span> <span m='2886730'>vector machine with a kernel, in
  which n equals 2, just</span> <span m='2892700'>slightly nonlinear, works like
  a charm.</span> </p><p><span m='2897530'>Was this the first time anybody tried
  a kernel?</span> </p><p><span m='2899890'>Vapnik actually had the idea in his
  thesis but never though</span> <span m='2903070'>it was very important.</span>
  </p><p><span m='2905560'>As soon as it was shown to work in the early '90s on
  the</span> <span m='2909670'>problem handwriting recognition, Vapnik</span>
  <span m='2912090'>resuscitated the idea of the kernel, began to develop
  it,</span> <span m='2915190'>and became an essential part of the whole
  approach of using</span> <span m='2918270'>support vector machines.</span>
  </p><p><span m='2919920'>So the main point about this is that it was 30 years
  in</span> <span m='2923980'>between the concept and anybody ever hearing about
  it.</span> </p><p><span m='2927380'>It was 30 years between Vapnik's
  understanding of</span> <span m='2932360'>kernels and his appreciation of
  their importance.</span> </p><p><span m='2935840'>And that's the way things
  often go, great ideas followed</span> <span m='2939870'>by long periods of
  nothing happening, followed by an</span> <span m='2943320'>epiphanous moment
  when the original idea seemed to have</span> <span m='2946640'>great power
  with just a little bit of a twist.</span> </p><p><span m='2949320'>And then,
  the world never looks back.</span> </p><p><span m='2950960'>And Vapnik, who
  nobody ever heard of until the early '90s,</span> <span m='2954780'>becomes
  famous for something that everybody knows about</span> <span m='2958380'>today
  who does machine learning.</span> </p><p></p>
uid: 601f8b80fe4cbfae451ce2106aec111f
type: courses
layout: video
---
