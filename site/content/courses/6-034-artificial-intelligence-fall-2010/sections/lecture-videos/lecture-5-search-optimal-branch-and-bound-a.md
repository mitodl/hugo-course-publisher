---
title: 'Lecture 5: Search: Optimal, Branch and Bound, A*'
uid: 559f4256c248c62f1030af5edcd5895c
parent_uid: 28d36d6426366698bf1ded18c6190be7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-5-search-optimal-branch-and-bound-a
short_url: lecture-5-search-optimal-branch-and-bound-a
inline_embed_id: '50358744lecture5:search:optimal,branchandbound,a*52762460'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers strategies for finding
  the shortest path.  We discuss branch and bound, which can be refined by using
  an extended list or an admissible heuristic, or both (known as A*).  We end
  with an example where the heuristic must be consistent.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
related_resources_text: ''
transcript: >-
  <p><span m='8982'>PROFESSOR: It was written about Route 66, which used
  to</span> <span m='12180'>be the main highway between Chicago, Illinois and
  Los</span> <span m='15640'>Angeles, California.</span> </p><p><span
  m='17610'>Very famous highway because anybody who wanted to go</span> <span
  m='19860'>across country always took route 66 because it was the</span> <span
  m='23550'>shortest way to go.</span> </p><p><span m='25950'>And the question
  is, how do you find the shortest path?</span> </p><p><span m='29620'>Not just
  any old path or a good path, but how do you find</span> <span m='34760'>the
  very shortest path?</span> </p><p><span m='36230'>And that'll be the subject
  that we're</span> <span m='37764'>going to discuss today.</span> </p><p><span
  m='38660'>But route 66, I lament its passing, but it's been largely</span>
  <span m='43560'>replaced by the interstate highway system that was</span>
  <span m='46570'>created by President Eisenhower.</span> </p><p><span
  m='48350'>Guess why?</span> </p><p><span m='52560'>Let's see, maybe the ROTC
  people know.</span> </p><p><span m='55860'>You know why Eisenhower created
  the</span> <span m='58840'>interstate highway system?</span> </p><p><span
  m='61800'>Well, in public affairs, of course, there's always a</span> <span
  m='66670'>distinction to be made between the</span> <span
  m='68420'>explanation and the reason.</span> </p><p><span m='70990'>The
  explanation was--</span> <span m='73276'>AUDIENCE: To move weapons across the
  country?</span> </p><p><span m='76463'>PROFESSOR: Well, to move nuclear</span>
  <span m='77560'>weapons across the country.</span> </p><p><span
  m='78700'>Let's put it in, sightly, more benign terms.</span> </p><p><span
  m='80700'>Eisenhower had observed that the German army was able to</span>
  <span m='84240'>move its troops rapidly, even though we bombed their</span>
  <span m='88950'>railroads into oblivion because of their auto bond.</span>
  </p><p><span m='92910'>So Eisenhower conceived that if there were ever an
  invasion</span> <span m='96473'>in the United States, we too would want to be
  able to move</span> <span m='99600'>our forces around on a highway
  system.</span> </p><p><span m='102300'>And consequence of that, we have a
  pretty good highway</span> <span m='106340'>system and pretty awful railroad
  system.</span> </p><p><span m='108009'>It's interesting.</span> </p><p><span
  m='110060'>I'm a beneficiary of that, in a funny way, because I'm from</span>
  <span m='113410'>East Peoria, Illinois.</span> </p><p><span m='115050'>And I
  was surrounded by the factors of Caterpillar Tractor</span> <span
  m='117600'>Company, which made all of the tractors that built all of</span>
  <span m='120725'>those roads.</span> </p><p><span m='121990'>So my high school
  spent money like water from that huge tax</span> <span m='126180'>base of all
  those factors.</span> </p><p><span m='129270'>Anyway, today we want to find
  the very best path, instead of</span> <span m='134990'>just a good
  path.</span> </p><p><span m='136550'>And like the last time, we'll deal with,
  both, an example</span> <span m='146050'>that we can set our program to work
  on.</span> </p><p><span m='149640'>By the way, can you find the shortest path
  between S and G?</span> </p><p><span m='154180'>Would you like to bet your
  life on the shortest path</span> <span m='156885'>between S and G?</span>
  </p><p><span m='159000'>Probably, not.</span> </p><p><span m='159920'>With
  your eye, you can find a good path.</span> </p><p><span m='162600'>But you
  can't find the best possible path.</span> </p><p><span m='166020'>Today, what
  we're doing is probably not modeling any</span> <span m='168500'>obvious
  property of what we have inside our heads.</span> </p><p><span m='171550'>But
  being able to find the best path is part of the skill</span> <span
  m='175610'>set that anybody who's had a course artificial intelligence</span>
  <span m='178260'>would be expected to have.</span> </p><p><span m='180270'>So
  we're going to look at it, even though it's not like many</span> <span
  m='182010'>of the things we do.</span> </p><p><span m='183170'>A model of
  something that's, probably,</span> <span m='184660'>going on in your
  head.</span> </p><p><span m='187520'>So we're going to use, both, this example
  from Cambridge</span> <span m='190710'>and our Blackboard example.</span>
  </p><p><span m='194450'>Let's see, we have to caution ourselves.</span>
  </p><p><span m='196800'>Tanya, is search about maps?</span> </p><p><span
  m='200320'>No, it's about what?</span> </p><p><span m='202690'>Starts with a
  C. And the next letter is H. And it ends up</span> <span m='207829'>being
  choice.</span> </p><p><span m='208750'>So we're talking about choice.</span>
  </p><p><span m='210460'>Not about maps.</span> </p><p><span m='211240'>Even
  though our examples are drawn from maps because</span> <span
  m='215150'>they're convenient, they're visual, and helps understand</span>
  <span m='217410'>the concepts behind the algorithms I'm talking about.</span>
  </p><p><span m='222190'>So let's start off by looking at our classroom
  example.</span> </p><p><span m='226390'>And I did something today that I
  neglected to do last time.</span> </p><p><span m='230570'>And that's talk to
  you about what I meant</span> <span m='232030'>by heuristic distance.</span>
  </p><p><span m='233810'>It's those pink lines that I just drew on the
  map.</span> </p><p><span m='237350'>We're talking about the distance as the
  crow would fly</span> <span m='240130'>between two places, even though there's
  no road that</span> <span m='243520'>goes between those two places.</span>
  </p><p><span m='246200'>So in general, and we discussed last time, it's
  best</span> <span m='251100'>to get yourself into a place that's close, as the
  crow</span> <span m='254950'>flies, to your goal.</span> </p><p><span
  m='257170'>And of course, that's a heuristic and it can get you</span> <span
  m='259740'>in trouble because it's not always true.</span> </p><p><span
  m='263020'>It would appear that being at node E is a good place to be</span>
  <span m='266630'>because it's not very far from G. But in that particular
  case</span> <span m='271040'>designed to illustrate the point, being close
  is,</span> <span m='274030'>actually, not a good thing because it's a dead
  end.</span> </p><p><span m='277770'>But in general, it's a good thing to be
  close.</span> </p><p><span m='280110'>And we talked last time about hill
  climbing and beam search,</span> <span m='286150'>being close was the
  objective of those kinds of searches.</span> </p><p><span m='288580'>And at
  one point, in a beam search illustration, we had C,</span> <span m='292060'>B,
  A, and D. We had paths terminating at all four of</span> <span
  m='296980'>those nodes as candidates for the next round of search.</span>
  </p><p><span m='300980'>And we decided on the basis of these airline distances
  to</span> <span m='304660'>keep D and B, and reject A and C because they're
  further away</span> <span m='309720'>as the crow flies.</span> </p><p><span
  m='312060'>Now, I repeat this even though many of you have had this</span>
  <span m='314340'>fixed already in your tutorials because we're going</span>
  <span m='316790'>to need this concept of heuristic distance today.</span>
  </p><p><span m='322450'>And I wanted to be sure that that point has been
  clarified.</span> </p><p><span m='328250'>So now, with this smaller map I
  imagine you can do, by eye,</span> <span m='333030'>a determination of what
  the shortest path is.</span> </p><p><span m='337580'>What is it, Juana?</span>
  </p><p><span m='338230'>Can you help me out with that?</span> </p><p><span
  m='341584'>AUDIENCE: S, A, D, G.</span> </p><p><span m='343800'>PROFESSOR: S,
  A, D, G. And if you add up those distances,</span> <span m='347820'>the
  distance is 11 along that path that goes from S, first</span> <span
  m='354430'>to A, and then to D, and then from D to G. So Juana asserts</span>
  <span m='359640'>that that is the best path.</span> </p><p><span
  m='360860'>And we're going to treat Juana as an Oracle because we're</span>
  <span m='364540'>going to follow, in our initial attempt to understand</span>
  <span m='367830'>these algorithms, a very important</span> <span
  m='370590'>principle of problem solving.</span> </p><p><span m='372020'>And
  that is that, if you want to solve a problem, the</span> <span
  m='374770'>easiest way is, usually, ask somebody who knows the answer.</span>
  </p><p><span m='377810'>Or Google, which also, probably, knows the
  answer.</span> </p><p><span m='382290'>So in this particular case, we believe
  that</span> <span m='385290'>Juana knows the answer.</span> </p><p><span
  m='386270'>And she said that the shortest path is S,A, D, G, and its</span>
  <span m='390170'>path length is 11.</span> </p><p><span m='392310'>But we
  don't trust her because we're applying to the same</span> <span
  m='396680'>medical school and she may be trying to screw us.</span>
  </p><p><span m='399673'>[LAUGHTER]</span> <span m='402140'>PROFESSOR: So we're
  going to be very cautious about</span> <span m='404380'>accepting her answer
  until we've checked it to make sure</span> <span m='408320'>that she hasn't
  attempted to delude us.</span> </p><p><span m='413750'>So how do we go about
  doing that?</span> </p><p><span m='415970'>Well, one way to do that is to
  check to be sure that all</span> <span m='419490'>other possible paths that we
  could develop end up being,</span> <span m='423380'>for sure, longer than the
  one that Juana has told us about.</span> </p><p><span m='427700'>So she's told
  us about S, A, D, G. And it has a total path</span> <span m='436910'>length of
  11.</span> </p><p><span m='438610'>And now what I'm going to do is I'm just
  going to develop</span> <span m='440500'>the rest of this tree-like
  diagram.</span> </p><p><span m='445995'>But what I'm going to do is, I'm not
  going to do it in a</span> <span m='448380'>British Museum or random
  way.</span> </p><p><span m='450270'>What I'm going to do is, I'm going to look
  at the choice</span> <span m='454830'>that corresponds the shortest path that
  can be extended.</span> </p><p><span m='458960'>So the shortest path that can
  be extended is</span> <span m='462159'>this one right here.</span>
  </p><p><span m='464620'>The one that just has the starting node in it.</span>
  </p><p><span m='467480'>And I could have gone this other way to B. And if I
  go</span> <span m='470880'>that other way to B, then the path length
  along</span> <span m='473870'>that side is 5.</span> </p><p><span
  m='477240'>And likewise, if I look at the path that terminates in A,</span>
  <span m='482760'>that has a path length of 3.</span> </p><p><span
  m='486950'>So now I've got two choices.</span> </p><p><span m='488300'>A and
  B. I've got choices that extend</span> <span m='491710'>beyond those two
  places.</span> </p><p><span m='494170'>So I'm always going to extend the one
  that</span> <span m='495640'>has the shorter length.</span> </p><p><span
  m='498250'>So in this case, that would be the path that goes from S to</span>
  <span m='500450'>A.</span> </p><p><span m='502380'>So if I from S to A, I
  don't have to go to D. I can also go</span> <span m='505480'>to B. And if I go
  to B, then the accumulated path length is</span> <span m='513429'>S, A, B.
  That's 7.</span> </p><p><span m='517760'>And know that we're talking now about
  the path, like the</span> <span m='523120'>accumulated path length, that we've
  traveled so far.</span> </p><p><span m='526430'>Last time we were talking a
  lot about</span> <span m='528120'>distances to the goal.</span> </p><p><span
  m='530220'>Heuristic estimates of how far we are from the goal.</span>
  </p><p><span m='533340'>Now we're doing exactly the opposite.</span>
  </p><p><span m='535500'>We're not considering how far we've got to go.</span>
  </p><p><span m='538570'>We're only thinking about how far we've gone so
  far.</span> </p><p><span m='542450'>So now, repeating these steps
  again.</span> </p><p><span m='545830'>I've got 7 and 5.</span> </p><p><span
  m='547660'>So I'll go over and consider the choices that go through</span>
  <span m='550790'>the B node on the path S, B. And that gives me S, B, A
  and</span> <span m='556360'>S, B, C. And what are those path lengths?</span>
  </p><p><span m='561440'>Well, let's see.</span> </p><p><span m='562480'>S, B,
  A would be 9.</span> </p><p><span m='567200'>And S, B,C would be 9.</span>
  </p><p><span m='569620'>And now the shortest path is this one over
  here.</span> </p><p><span m='572740'>So I extend that.</span> </p><p><span
  m='574430'>I go S, A, B. S, A, B. The only place I can go is C. That</span>
  <span m='580280'>adds another 4.</span> </p><p><span m='582150'>So that's
  11.</span> </p><p><span m='583280'>And what do I know about that path?</span>
  </p><p><span m='586690'>I don't have to take that any further, right?</span>
  </p><p><span m='589770'>Because the path length, since I've gone on that
  path</span> <span m='593350'>already, is equal to the path length that Juana
  has told me</span> <span m='596690'>gets me to the goal.</span> </p><p><span
  m='599240'>So it'll be foolhardy to carry on because, presuming that</span>
  <span m='602110'>these lengths are all non-negative, I</span> <span
  m='604810'>can't do any better.</span> </p><p><span m='607270'>And I can't
  even do as well, unless I've got a length that</span> <span m='610270'>has 0
  length.</span> </p><p><span m='613440'>So now that I have that idea, I can
  quickly finish up by</span> <span m='615820'>saying, well, let me consider
  these two paths.</span> </p><p><span m='617570'>S, B, A can only go to D. And
  if I go to D, that adds 3.</span> </p><p><span m='623982'>9 plus 3 is
  12.</span> </p><p><span m='627550'>Nothing else can happen there because
  that's 12 and I've got</span> <span m='630750'>a path of a goal that's
  11.</span> </p><p><span m='633470'>C, I can only go to E. It's a dead-end but
  I don't have to</span> <span m='637500'>think about that because I know that
  the accumulated</span> <span m='639640'>distance along this path is 6 plus
  9.</span> </p><p><span m='643730'>That's 15.</span> </p><p><span m='645640'>So
  all of these need not be extended any further because</span> <span
  m='650740'>their length, accumulated so far, is equal to or less than</span>
  <span m='654090'>a length of a goal.</span> </p><p><span m='655500'>So I've
  checked the Oracle.</span> </p><p><span m='657380'>And although we're applying
  to the same medical school, Juana</span> <span m='661120'>has told me the
  truth.</span> </p><p><span m='664400'>So now, unfortunately, Juana's not
  always around.</span> </p><p><span m='667835'>And I don't always have an
  Oracle.</span> </p><p><span m='670690'>So I'm going to have to have some way
  of finding the</span> <span m='675030'>shortest path without that
  Oracle</span> <span m='677440'>that I can check against.</span> </p><p><span
  m='682740'>Let's see.</span> </p><p><span m='683190'>What can I do?</span>
  </p><p><span m='686450'>Maybe I can do the same thing I just did.</span>
  </p><p><span m='689430'>Always extend the shortest path so far and hope that
  I</span> <span m='692150'>run into the goal at some point.</span> </p><p><span
  m='694630'>And then I have to ask myself the question how much extra</span>
  <span m='696800'>work did I need to do when I don't have the Oracle?</span>
  </p><p><span m='700210'>Let's just try it and see what happens.</span>
  </p><p><span m='703760'>You don't have that path to start.</span> </p><p><span
  m='705400'>So I just have S. This distance is 0.</span> </p><p><span
  m='709400'>I can go either to A or B. If I go to A, I've got</span> <span
  m='714590'>a distance of 3.</span> </p><p><span m='716080'>Here, I've got a
  distance of 5.</span> </p><p><span m='719410'>I'll extend the path that goes
  S, A. That can either got to B</span> <span m='724550'>or D. Going to B or D
  gives me 7 that way.</span> </p><p><span m='730360'>S, A, D gives me 6.</span>
  </p><p><span m='733200'>So looking across all of these and extending the
  shortest</span> <span m='735690'>path so far takes me back over to S, B. So I
  extend those.</span> </p><p><span m='744980'>S, B takes me to A or C.</span>
  </p><p><span m='750510'>And those, in turn, have total accumulated path</span>
  <span m='753550'>lengths of 9 and 9.</span> </p><p><span m='755880'>Now the
  shortest one is S, A, D. You see the pattern.</span> </p><p><span
  m='759390'>Now let's see.</span> </p><p><span m='760890'>I haven't found the
  goal yet.</span> </p><p><span m='765930'>So I can ask myself the question is
  any of the work</span> <span m='768720'>that I've done so far wasted?</span>
  </p><p><span m='772190'>No because all of the paths that I've got so far
  are</span> <span m='774710'>shorter than the path of the goal because the
  goal</span> <span m='777750'>hasn't shown up.</span> </p><p><span
  m='779700'>So when I do my oracle checking after I found the</span> <span
  m='782230'>goal, none of that work's going to be wasted.</span> </p><p><span
  m='786220'>So in the end, I don't, actually, need the Oracle.</span>
  </p><p><span m='789120'>I could just develop this graph by extending
  the</span> <span m='792760'>shortest path, so far, until I hit the
  goal.</span> </p><p><span m='796390'>And then, perhaps, do a little remaining
  checking to make</span> <span m='799030'>sure that all the other paths extend
  with a length that's</span> <span m='802610'>greater than the path of the
  goal.</span> </p><p><span m='804970'>So if those words are confusing, let's
  carry on with</span> <span m='806855'>the algorithm, and I think it'll be
  clearer.</span> </p><p><span m='810000'>So let's see.</span> </p><p><span
  m='810390'>We've got the 7, 6, and two 9s.</span> </p><p><span
  m='813490'>We're going to extend the one that's 6.</span> </p><p><span
  m='815530'>That gets this to the goal.</span> </p><p><span m='816900'>Boom,
  we've got it.</span> </p><p><span m='818690'>And we've got a path length of
  11.</span> </p><p><span m='821230'>Note, though, we can't quit because we have
  to be sure</span> <span m='826040'>that all other paths are longer than
  11.</span> </p><p><span m='829300'>So now we have to carry on with the same
  algorithm that</span> <span m='831530'>we started with.</span> </p><p><span
  m='832580'>The Oracle checking algorithm.</span> </p><p><span m='835630'>And
  when we do that, we look for this shortest path, so</span> <span
  m='839460'>far, that has not been extended.</span> </p><p><span
  m='841650'>That's B, S, A, B. That goes to C. That's 11.</span> </p><p><span
  m='848360'>So we're done there.</span> </p><p><span m='850010'>A goes to D.
  That adds 3.</span> </p><p><span m='853600'>That's 12.</span> </p><p><span
  m='855630'>C goes to E. That adds 6.</span> </p><p><span m='858390'>That's
  15.</span> </p><p><span m='860050'>And sure enough, we're done.</span>
  </p><p><span m='862020'>OK?</span> </p><p><span m='866296'>Elliot?</span>
  </p><p><span m='867742'>AUDIENCE: Does it know that there's know that there
  isn't</span> <span m='869810'>a chance that you could have a zero distance
  extension from</span> <span m='873110'>the [INAUDIBLE]?</span> </p><p><span
  m='875460'>PROFESSOR: The question is, does it know that there's no</span>
  <span m='879302'>zero distance length that's coming up.</span> </p><p><span
  m='884510'>That's an implementation detail.</span> </p><p><span
  m='886400'>This guarantees you'll find a path that's as short as any</span>
  <span m='891010'>that you can possibly find.</span> </p><p><span
  m='892320'>But there might be others if they're zero-length lengths.</span>
  </p><p><span m='895580'>As long as they're non-negative</span> <span
  m='896580'>lengths, we're safe.</span> </p><p><span m='898020'>We've got a
  shortest path.</span> </p><p><span m='900740'>So that was easy.</span>
  </p><p><span m='901670'>And now we can repeat the exercise with our
  more</span> <span m='904560'>complicated map of Cambridge.</span> </p><p><span
  m='910260'>First of all, let's do depth first just to recall what that</span>
  <span m='913000'>looks like.</span> </p><p><span m='914610'>That is,
  certainly, not a short path.</span> </p><p><span m='918210'>So let's try this
  idea, which, by the way, bares the label</span> <span m='922270'>branch
  inbound.</span> </p><p><span m='924110'>Let's try branch inbound on the same
  map.</span> </p><p><span m='930226'>And there it goes.</span> </p><p><span
  m='932040'>Each of those little flickers is trying another path.</span>
  </p><p><span m='935720'>So you can see it's working it's guts out to find
  the</span> <span m='940590'>shortest path.</span> </p><p><span m='952250'>It's
  almost there but it's almost a pathological case.</span> </p><p><span
  m='957870'>Or it's almost doing British Museum.</span> </p><p><span
  m='961410'>There it's finally found the shortest path.</span> </p><p><span
  m='964620'>Now there are some things we can ask about that.</span>
  </p><p><span m='966190'>But first of all, before I ask anything about it, I'd
  like to</span> <span m='968910'>get the flow chart up on the board because
  we're going to</span> <span m='971250'>decorate that flow chart, a little bit,
  as we go.</span> </p><p><span m='975100'>So the first thing we do is
  initialize queue.</span> </p><p><span m='984100'>Then we're going to test
  first path on the queue.</span> </p><p><span m='994380'>Then we might be happy
  because we might be done.</span> </p><p><span m='998650'>We might have a
  shortest path to the goal.</span> </p><p><span m='1001030'>Actually, that's
  not quite true, is it?</span> </p><p><span m='1003650'>We can't really quit
  until every other path is it.</span> </p><p><span m='1008070'>Well, that's
  interesting.</span> </p><p><span m='1015760'>If the first element on the queue
  gets us all the way to</span> <span m='1018370'>the goal, and we sorted our
  queue by path length, are we</span> <span m='1022500'>through as soon as that
  first element on the queue gets us</span> <span m='1026680'>to the
  goal?</span> </p><p><span m='1029111'>Yeah because every other path must have
  been</span> <span m='1031640'>sorted beyond it.</span> </p><p><span
  m='1034230'>And therefore, it can't offer us a shorter path to the
  goal.</span> </p><p><span m='1038839'>So if the first path is a path to the
  goal we're done.</span> </p><p><span m='1042550'>Alas, it usually
  isn't.</span> </p><p><span m='1044190'>So we'll extend first path.</span>
  </p><p><span m='1056549'>We're going to put all those extensions back on the
  queue,</span> <span m='1059790'>and then we're going to sort them.</span>
  </p><p><span m='1066030'>So that's, pretty much, the same as we did last
  time.</span> </p><p><span m='1070340'>We're always going to put the elements
  back on the queue.</span> </p><p><span m='1075610'>We're going to look at the
  first element the queue and</span> <span m='1077150'>see if it's a
  winner.</span> </p><p><span m='1078360'>If it is we're done.</span>
  </p><p><span m='1079430'>If it's not, we're going to extend it.</span>
  </p><p><span m='1082520'>And then go back in here and try again.</span>
  </p><p><span m='1089710'>Well, sort of.</span> </p><p><span m='1090900'>But we
  noted that this did a awful lot of work because if</span> <span m='1095600'>we
  look at those statistics up there, it put 1,354</span> <span m='1100970'>paths
  onto the queue.</span> </p><p><span m='1102210'>That's the N queueing
  part.</span> </p><p><span m='1104210'>And then it extended 835,000 paths that
  had come to the</span> <span m='1108690'>front of the queue.</span>
  </p><p><span m='1112496'>Now I'd like to give you an aside because it's easy
  to get</span> <span m='1117590'>confused about N queueing and
  extending.</span> </p><p><span m='1121890'>In all of the searches we did last
  time, it would have been</span> <span m='1125110'>perfectly reasonable to keep
  a list of all the paths that we</span> <span m='1128660'>had put onto the
  queue.</span> </p><p><span m='1131444'>An N queueing list.</span> </p><p><span
  m='1133850'>And never add a path to our queue if it terminates in a</span>
  <span m='1140540'>node that some other path terminate in that has
  already</span> <span m='1145820'>gone to the queue.</span> </p><p><span
  m='1147110'>What I said last time was let us keep track of the things</span>
  <span m='1151820'>that have been extended and not extend them again.</span>
  </p><p><span m='1155900'>So you can either keep track of the nodes that have
  been</span> <span m='1159830'>extended and not extend them again.</span>
  </p><p><span m='1161980'>Or look at the paths with nodes that terminate,
  and</span> <span m='1166290'>blah, blah, blah and been put on the queue, the
  queued ones.</span> </p><p><span m='1168570'>And not put things back on the
  queue again.</span> </p><p><span m='1171380'>And I think, last time, I may
  have put a column in there</span> <span m='1173535'>that said N queued.</span>
  </p><p><span m='1174190'>It should have been extended.</span> </p><p><span
  m='1179090'>Even though N queued worked last time, only extended works</span>
  <span m='1182840'>this time because we want to be sure that anything we</span>
  <span m='1186690'>extend is a short path.</span> </p><p><span m='1189070'>So
  the N queued idea doesn't work, at all, for these</span> <span
  m='1194370'>optimal paths.</span> </p><p><span m='1195910'>So now I want to
  come back over here off the side bar and</span> <span m='1198840'>say that
  we're keeping track of all of the nodes, all of</span> <span m='1201945'>the
  paths that end in nodes unless they have already been</span> <span
  m='1207040'>extended beyond that particular place.</span> </p><p><span
  m='1210640'>So we need to decorate our algorithm here and say test</span>
  <span m='1216590'>first path and extend the first path</span> <span
  m='1224470'>if not already extended.</span> </p><p><span m='1236160'>Because
  you can see that in the example I had, so far, we</span> <span m='1238740'>did
  that same silliness that we talked about last time.</span> </p><p><span
  m='1243130'>We extended paths that went through A more</span> <span
  m='1249030'>than once, like so.</span> </p><p><span m='1252310'>Would it ever
  make sense to extend this path?</span> </p><p><span m='1255470'>No because
  we've already extended a path that got there</span> <span m='1258860'>with
  less distance.</span> </p><p><span m='1260780'>Will it ever make sense to
  extend this path?</span> </p><p><span m='1263900'>No because we've already
  extended another path that</span> <span m='1267460'>gets to be by a shorter
  distance.</span> </p><p><span m='1271000'>So if we keep an extended list, we
  can add that to</span> <span m='1275040'>branch inbound to our
  advantage.</span> </p><p><span m='1278130'>So let's see how that would work on
  the classroom example.</span> </p><p><span m='1282570'>And then we'll do
  Cambridge.</span> </p><p><span m='1283920'>So this is bridge inbound, plus an
  extended list.</span> </p><p><span m='1293414'>And I do mean extended.</span>
  </p><p><span m='1297260'>Not in the N queued list.</span> </p><p><span
  m='1298350'>N queued list won't work here.</span> </p><p><span m='1302050'>So
  let's see, I start off the same way as I did before.</span> </p><p><span
  m='1305910'>S goes to either A or B. That's a length of 3.</span> </p><p><span
  m='1312200'>That's a length of 5.</span> </p><p><span m='1313980'>So I extend
  A. That goes to either B or D. But B is as if</span> <span m='1325100'>it
  wasn't there at all.</span> </p><p><span m='1327690'>Oh, sorry.</span>
  </p><p><span m='1328235'>Hang on.</span> </p><p><span m='1333180'>B goes
  there.</span> </p><p><span m='1333990'>And those path lengths are 7 and
  6.</span> </p><p><span m='1338140'>And now I look around on the board, and I
  say what is the</span> <span m='1341260'>shortest path so far?</span>
  </p><p><span m='1342730'>And it's B. So I extend that to get to A and C with
  path</span> <span m='1348610'>lengths of 9 and 9.</span> </p><p><span
  m='1352020'>And what's the shortest one next?</span> </p><p><span
  m='1353820'>It's D. And that goes to G. And the path length is 11.</span>
  </p><p><span m='1358690'>And what's the shortest one on the board?</span>
  </p><p><span m='1362640'>The one that has to be extended next.</span>
  </p><p><span m='1364010'>That's this one that gets to B. But I've already
  extended a</span> <span m='1366690'>path that get to B. So I don't,</span>
  <span m='1369230'>actually, do that extension.</span> </p><p><span
  m='1371570'>So I've saved some work.</span> </p><p><span m='1373801'>But I've
  got to go over here and do these two now.</span> </p><p><span m='1376260'>But
  wait.</span> </p><p><span m='1376610'>I've already extended B. I've already
  extended A, so I don't</span> <span m='1379770'>have to do that one
  either.</span> </p><p><span m='1381930'>The only one I have to do is the one
  that goes to C. And</span> <span m='1384340'>that those then to E with a path
  length of 15.</span> </p><p><span m='1387950'>And I'm done.</span>
  </p><p><span m='1389670'>So if you compare this one with a previous one, you
  can</span> <span m='1392760'>see that there might be vast areas of this tree
  that are</span> <span m='1395450'>pruned away and don't have to be examined
  all.</span> </p><p><span m='1399250'>So now, just for the sake of illustrating
  that, I would</span> <span m='1401860'>like to keep track of just one of those
  statistics.</span> </p><p><span m='1404740'>The number of extensions.</span>
  </p><p><span m='1407260'>So for this particular example, case one, the
  number</span> <span m='1410420'>of extensions was 835.</span> </p><p><span
  m='1415330'>Why don't you see if you can guess to yourself what it</span>
  <span m='1417380'>would be if I use this concept of an extended list.</span>
  </p><p><span m='1422360'>See, I'm not going to extend anything I've already
  extended</span> <span m='1424670'>because it's guaranteed to have a longer
  path length then</span> <span m='1427420'>something that already got to that
  same place.</span> </p><p><span m='1430200'>So it makes no sense to do
  it.</span> </p><p><span m='1433790'>So let me change the type to
  branch-and-bound with an</span> <span m='1438520'>extended list.</span>
  </p><p><span m='1440750'>I'm going to turn the speed down a little bit
  so</span> <span m='1442420'>we can watch it.</span> </p><p><span
  m='1444150'>It might take the rest of the hour.</span> </p><p><span
  m='1445830'>Who knows?</span> </p><p><span m='1453160'>Still doing a lot of
  work.</span> </p><p><span m='1454000'>Still examining a lot of paths.</span>
  </p><p><span m='1462880'>Well, look at that.</span> </p><p><span
  m='1466450'>Instead of 835 extensions it only did 38.</span> </p><p><span
  m='1473200'>So that's a pretty substantial savings.</span> </p><p><span
  m='1475800'>And you would never not want to do that.</span> </p><p><span
  m='1479360'>So note that that's a layering on top of branching out.</span>
  </p><p><span m='1482370'>That's not a different algorithm.</span> </p><p><span
  m='1484300'>It's an adjustment improvement to the algorithm, and it
  makes</span> <span m='1487250'>it more efficient.</span> </p><p><span
  m='1490830'>So this whole thing is based on what I call</span> <span
  m='1495490'>the dead horse principle.</span> </p><p><span m='1497130'>As soon
  as we figure out that a path that goes to a</span> <span
  m='1500980'>particular place can't possibly be the winning path,</span> <span
  m='1504640'>we get rid of it, and don't bother extending it.</span>
  </p><p><span m='1508830'>It's a dead horse principle.</span> </p><p><span
  m='1512330'>But if we look at this example, what's the shortest</span> <span
  m='1518830'>possible length of a path that's already</span> <span
  m='1521350'>gone from S to B?</span> </p><p><span m='1527776'>What do you
  think, Tanya?</span> </p><p><span m='1532070'>Well, first of all, it can't be
  less than 5 because we've</span> <span m='1534110'>already gone that
  distance.</span> </p><p><span m='1537390'>So when I say what's the shortest
  length of any path</span> <span m='1540300'>that there could possibly be that
  goes from S to D. We know</span> <span m='1544090'>it's at least 5.</span>
  </p><p><span m='1546420'>But can we say something more about it?</span>
  </p><p><span m='1550680'>Especially, when we look at these airline distances,
  and</span> <span m='1554140'>note that this airline distance is 6, and that's
  a</span> <span m='1557420'>little more than 7, and that's a little more than
  7.</span> </p><p><span m='1561150'>So what do you think?</span> </p><p><span
  m='1564680'>So it's gone from S to B, and the question is what's the</span>
  <span m='1567270'>shortest path that could possibly be that had started</span>
  <span m='1573370'>out going from S to B?</span> </p><p><span m='1577860'>11
  right?</span> </p><p><span m='1579780'>Because we can't have a path that's
  shorter than the</span> <span m='1583690'>airline distance.</span>
  </p><p><span m='1585630'>If there were a straight line road from A to G, its
  length</span> <span m='1589450'>would be 6.</span> </p><p><span
  m='1590320'>But there isn't.</span> </p><p><span m='1591630'>So that gives us
  a lower bound on the distance that we have</span> <span m='1597740'>along that
  path.</span> </p><p><span m='1599840'>So we're using the accumulated distance,
  plus the airline</span> <span m='1605520'>distance, to give us a lower bound
  on the path that we've</span> <span m='1609980'>started off on that goes from
  S to B.</span> </p><p><span m='1613750'>Once again, let's solidify a little
  bit by simulating the</span> <span m='1617730'>search and seeing how it turns
  out.</span> </p><p><span m='1621320'>Not just I did last time, I'm going to
  forget that I've got</span> <span m='1624270'>an extended list.</span>
  </p><p><span m='1626510'>I don't want to carry both of those things around
  with me at</span> <span m='1628840'>the same time.</span> </p><p><span
  m='1630270'>So forget that we've got an extended list.</span> </p><p><span
  m='1632620'>We'll bring all those back together a little later.</span>
  </p><p><span m='1636020'>So we're going to forget what we just did
  there.</span> </p><p><span m='1638160'>And instead we're just going to use
  this concept of an</span> <span m='1640340'>airline distance and see what
  happens.</span> </p><p><span m='1664890'>As before we start with a starting
  node.</span> </p><p><span m='1666910'>We have two choices as always.</span>
  </p><p><span m='1668640'>We can go to A or B. And the accumulated distance, if
  we go</span> <span m='1672160'>to A, is 3.</span> </p><p><span m='1674580'>And
  then accumulated distance if we go to B is 5.</span> </p><p><span
  m='1678350'>But now we're going to add in the airline distances.</span>
  </p><p><span m='1681280'>So the airline distance from A to G is a little more
  than 7,</span> <span m='1688140'>which is 10 plus.</span> </p><p><span
  m='1692060'>The airline distance from B to G is exactly 6.</span> </p><p><span
  m='1696400'>So that gives us 11.</span> </p><p><span m='1699010'>And following
  the procedure we've all been using already</span> <span m='1702070'>so far,
  we're going to extend the path that seems to have</span> <span m='1705120'>the
  shortest potential.</span> </p><p><span m='1706560'>Now it's the shortest
  potential distance S to G. So</span> <span m='1710390'>that must be this one
  here.</span> </p><p><span m='1712970'>So from A we can go to B or D. The
  accumulated</span> <span m='1721480'>distance S, A, B, is 7.</span>
  </p><p><span m='1725840'>The airline distance is 6, so that's equal to
  11.</span> </p><p><span m='1733700'>Standard arithmetic 13.</span>
  </p><p><span m='1737890'>The distance S, A, D. That is 6 plus a little more
  than 7.</span> </p><p><span m='1750900'>So what's the accumulated
  distance?</span> </p><p><span m='1754090'>S, A, D is 3 plus 3 is 6.</span>
  </p><p><span m='1758810'>AUDIENCE: [INAUDIBLE].</span> </p><p><span
  m='1762177'>PROFESSOR: What?</span> </p><p><span m='1762925'>AUDIENCE: The
  airline distance from D would be 5.</span> </p><p><span m='1765565'>PROFESSOR:
  Would be 5, right.</span> </p><p><span m='1768220'>So airline distance, in
  this case, is the same as the</span> <span m='1770230'>actual distance.</span>
  </p><p><span m='1771310'>So the accumulated distance is 6.</span> </p><p><span
  m='1773190'>The actual distance is 5.</span> </p><p><span m='1775360'>So
  that's equal to 11.</span> </p><p><span m='1779720'>So now I've got two 11's
  on the board.</span> </p><p><span m='1782420'>And simulating what we'd ask you
  do on a quiz, we don't</span> <span m='1785740'>know which of those is going
  to be better.</span> </p><p><span m='1787520'>They've got a tie score.</span>
  </p><p><span m='1789300'>So what we're going to do is we're going to choose
  the one</span> <span m='1790810'>that's lexically least.</span> </p><p><span
  m='1792510'>So B comes before D. So we'll expand B. And that can go to</span>
  <span m='1798260'>either A or C. And we have to calculate the best
  possible</span> <span m='1805170'>distance that goes along those paths.</span>
  </p><p><span m='1807485'>The accumulated distance S, B, A. S, B, A is
  9.</span> </p><p><span m='1814670'>So that's 9 plus 7 plus.</span>
  </p><p><span m='1818140'>That's 16 plus.</span> </p><p><span m='1820700'>This
  has an accumulated lead of distance of 9.</span> </p><p><span m='1823170'>Also
  plus 7 plus.</span> </p><p><span m='1825190'>Also 16 plus.</span> </p><p><span
  m='1829060'>Well, now let's see.</span> </p><p><span m='1830000'>Things are
  shaping up pretty well because this one has the</span> <span
  m='1833940'>lowest score so far.</span> </p><p><span m='1837000'>We extend
  that to G. And now the</span> <span m='1839760'>accumulated distance is
  11.</span> </p><p><span m='1842470'>The airline distance is 0, so that's
  11.</span> </p><p><span m='1845460'>And that's smaller than everybody
  else.</span> </p><p><span m='1848840'>So we've got.</span> </p><p><span
  m='1851040'>So now compare this one with our branch inbound graph.</span>
  </p><p><span m='1856700'>And you see, once again, we've done considerably less
  work.</span> </p><p><span m='1861370'>And that, in many practical cases, means
  that instead of</span> <span m='1864850'>taking more than the remaining
  lifetime of the universe to</span> <span m='1868300'>complete the calculation,
  it can happen in a few seconds.</span> </p><p><span m='1872760'>But let's see
  how it works on the example.</span> </p><p><span m='1875440'>So I'm not going
  to use the extended list.</span> </p><p><span m='1878370'>I'm just going to
  use this idea of using a lower bound on</span> <span m='1883810'>the distance
  remaining, the airline distance,</span> <span m='1886710'>and see what
  happens.</span> </p><p><span m='1920168'>So this time, the number of
  extensions is 70.</span> </p><p><span m='1928880'>So it didn't do quite as
  well as working alone as the</span> <span m='1932710'>extended list did
  working alone.</span> </p><p><span m='1934680'>So we immediately conclude that
  the extended list is more</span> <span m='1940160'>useful than using one of
  these lower bound heuristics.</span> </p><p><span m='1943490'>By the way, this
  is called an admissible heuristic.</span> </p><p><span m='1953555'>If the
  heuristic estimate is guaranteed to be less than the</span> <span
  m='1957830'>actual distance, that's called an admissible heuristic.</span>
  </p><p><span m='1961110'>Admissible because you can use it for this kind of
  purpose.</span> </p><p><span m='1965230'>So it looks like the day extended
  list is a more useful</span> <span m='1971940'>idea than the admissible
  idea.</span> </p><p><span m='1974880'>Right?</span> </p><p><span
  m='1976690'>What do you think about that, Brett?</span> </p><p><span
  m='1978410'>Am I hacking?</span> </p><p><span m='1980195'>Am I joking?</span>
  </p><p><span m='1980945'>AUDIENCE: I think you're judging prematurely.</span>
  </p><p><span m='1982580'>PROFESSOR: Why am I judging prematurely?</span>
  </p><p><span m='1984180'>What do you think it might depend on?</span>
  </p><p><span m='1985390'>AUDIENCE: The fact that we're using extensions and
  the</span> <span m='1988055'>extended list pretty much guarantees you can only
  extend</span> <span m='1989436'>each node once.</span> </p><p><span
  m='1992054'>PROFESSOR: Well, Brett has sad something unintelligible
  that</span> <span m='1995945'>I can't think how to repeat.</span> </p><p><span
  m='1997600'>What he meant to say, though, was that--</span> <span
  m='1999195'>[LAUGHTER]</span> <span m='2002360'>PROFESSOR: --in these cases,
  it almost always depends on</span> <span m='2004770'>the problem
  itself.</span> </p><p><span m='2006930'>If you change the problem, you may get
  a different result.</span> </p><p><span m='2009670'>So why don't we change the
  problem and see if we get a</span> <span m='2011370'>different result?</span>
  </p><p><span m='2012480'>So instead of starting on the extreme left, let's
  start in</span> <span m='2016040'>the middle and see what happens.</span>
  </p><p><span m='2022350'>So I'll readjust my starting position to be right
  there.</span> </p><p><span m='2025880'>Oops, that's the wrong
  adjustment.</span> </p><p><span m='2034130'>And we might as well start by
  getting our baseline</span> <span m='2036840'>branch-and-bound without
  anything.</span> </p><p><span m='2041040'>And for that one, maybe, we'll speed
  it up a little bit.</span> </p><p><span m='2049070'>So that gives us 57
  extensions.</span> </p><p><span m='2052000'>It's an easier problem.</span>
  </p><p><span m='2058880'>So let's try it with the admissible heuristic.</span>
  </p><p><span m='2067960'>That went too fast.</span> </p><p><span
  m='2073920'>Wow, still pretty fast.</span> </p><p><span m='2075610'>Six
  extensions.</span> </p><p><span m='2079382'>What do you think this number's
  going to be?</span> </p><p><span m='2083139'>Closer to six or closer to
  57?</span> </p><p><span m='2085989'>Better than six?</span> </p><p><span
  m='2086630'>Worse than six?</span> </p><p><span m='2088370'>Well, let's
  think.</span> </p><p><span m='2090889'>What we're going to do is we're going
  to just not repeat</span> <span m='2094100'>any movements through the same
  node again.</span> </p><p><span m='2098080'>But it's not going to do something
  very</span> <span m='2099360'>important for us.</span> </p><p><span
  m='2100085'>It's not going to keep us out of the left side because it</span>
  <span m='2104350'>has no idea of the remaining airline distance to the
  goal.</span> </p><p><span m='2108930'>So let's see if that's true It sure
  is.</span> </p><p><span m='2119380'>Look at that.</span> </p><p><span
  m='2120155'>It is, foolishly, spending a lot of its' time doing</span> <span
  m='2123100'>something we would never do.</span> </p><p><span
  m='2124090'>Namely, looking over there on the left side.</span> </p><p><span
  m='2131510'>So this time, the number of extensions is 35.</span> </p><p><span
  m='2136050'>So in case two, the admissible heuristic</span> <span
  m='2138860'>does very much better.</span> </p><p><span m='2140140'>In case
  one, the extension thing does much better.</span> </p><p><span m='2143920'>But
  wait a minute, would we ever not want to use both at</span> <span
  m='2146450'>the same time?</span> </p><p><span m='2150570'>We wouldn't want to
  use just one of these, right?</span> </p><p><span m='2153660'>They both have
  the possibility of doing us a lot of good.</span> </p><p><span m='2157230'>So
  maybe if we put them in harness together, we'll get</span> <span
  m='2160190'>something that's even better.</span> </p><p><span m='2162170'>And
  when we do that--</span> <span m='2164350'>see here, the extended list is a
  layer on top</span> <span m='2167870'>of branch and bound.</span> </p><p><span
  m='2168890'>The admissible heuristic is another layer on top</span> <span
  m='2171200'>of branch and bound.</span> </p><p><span m='2172250'>If we put
  those together, we get something called A star.</span> </p><p><span
  m='2177490'>So A star is just branch and bound, plus an extended list,</span>
  <span m='2181800'>plus and admissible heuristic.</span> </p><p><span
  m='2184290'>So let's go back to our original problem and try A</span> <span
  m='2186750'>star on that.</span> </p><p><span m='2198760'>We're running this
  at a pretty slow speed because we're</span> <span m='2200410'>expecting it to
  be a lot more efficient than the original</span> <span m='2203190'>branch and
  bound.</span> </p><p><span m='2203890'>And sure enough it is.</span>
  </p><p><span m='2204560'>The number of extensions is 27.</span> </p><p><span
  m='2207470'>So look at that.</span> </p><p><span m='2209910'>A lot better than
  either of those working independently.</span> </p><p><span m='2212950'>Now I
  can stick the thing in the center and see what</span> <span
  m='2214750'>happens then.</span> </p><p><span m='2225450'>So in this
  particular case, the extended list didn't,</span> <span m='2229490'>actually,
  help us because our admissible heuristic was</span> <span
  m='2232090'>channeling us so tightly toward the</span> <span m='2233790'>goal
  it didn't matter.</span> </p><p><span m='2236360'>So it all depends on the
  nature of the space that</span> <span m='2239470'>you're trying to
  explore.</span> </p><p><span m='2242160'>By the way, you know how the whole
  works, right?</span> </p><p><span m='2246870'>So what you want to do is you
  want to extend the</span> <span m='2250210'>first path and sort.</span>
  </p><p><span m='2252120'>But not just by accumulated distance.</span>
  </p><p><span m='2255120'>Sort by accumulated distance plus admissible
  heuristic.</span> </p><p><span m='2273010'>But what are the
  theoreticians?</span> </p><p><span m='2274090'>You must be complaining.</span>
  </p><p><span m='2276550'>Sort's expensive.</span> </p><p><span m='2278440'>Do
  we actually need to sort?</span> </p><p><span m='2283470'>No, we don't
  actually need to sort.</span> </p><p><span m='2284960'>What do we to
  do?</span> </p><p><span m='2285900'>AUDIENCE: We just need to keep track of
  what's the minimum.</span> </p><p><span m='2289141'>PROFESSOR: We just need to
  keep track</span> <span m='2289946'>of what's the minimum.</span> </p><p><span
  m='2290530'>So we don't need to, actually, do that sort.</span> </p><p><span
  m='2292130'>That's an unnecessary computation.</span> </p><p><span
  m='2296670'>So instead, we can test, not the first path but the</span> <span
  m='2300770'>shortest path.</span> </p><p><span m='2307990'>And now you have
  it.</span> </p><p><span m='2308620'>Now you have the whole of A star.</span>
  </p><p><span m='2311430'>And now you can go home, but I don't think you should
  because</span> <span m='2316650'>I'm about to show you that this idea of
  admissibility,</span> <span m='2322090'>actually, leads to certain screw cases
  that we're very</span> <span m='2324410'>fond of asking about on exams.</span>
  </p><p><span m='2328340'>So it turns out that the admissible heuristic,
  in</span> <span m='2331280'>certain circumstances, could get you into
  trouble.</span> </p><p><span m='2333400'>It doesn't look like it could
  because, logically, nothing</span> <span m='2336940'>I've said seems strange
  or questionable.</span> </p><p><span m='2340480'>But that's because I've been
  working with a map.</span> </p><p><span m='2344150'>And it turns out that if
  you work with a map then</span> <span m='2346100'>admissibility is a perfectly
  sound way of</span> <span m='2348500'>doing an optimal search.</span>
  </p><p><span m='2351710'>But, Travis, is search just about maps?</span>
  </p><p><span m='2355650'>No, search is not just about maps.</span>
  </p><p><span m='2357130'>So we may have non-Euclidean arrangements that will
  cause</span> <span m='2361545'>us trouble.</span> </p><p><span m='2362710'>So
  I'd like to illustrate that with the following example.</span> </p><p><span
  m='2372710'>It's not going to be a large map or a large graph.</span>
  </p><p><span m='2376100'>S, then go up here to A or down here to B. Then
  they</span> <span m='2383866'>merge at C. And then they go out here to the
  goal, G.</span> </p><p><span m='2391650'>And the actual distances are 1, 1, 1,
  and 10.</span> </p><p><span m='2398810'>And over here, we'll make that
  100.</span> </p><p><span m='2401390'>So it's a kind of oddly constructed map,
  but it's</span> <span m='2405340'>there because we need a pathological case
  to</span> <span m='2407240'>illustrate the idea.</span> </p><p><span
  m='2409510'>Now that's the actual distances.</span> </p><p><span
  m='2411590'>And if we did branch and down with an extended list,</span> <span
  m='2415090'>everything would work just fine.</span> </p><p><span
  m='2417250'>But we're not.</span> </p><p><span m='2417715'>We're going to use
  an admissible heuristic.</span> </p><p><span m='2420530'>And we're going to
  say that this guy has an estimated</span> <span m='2422760'>distance to the
  goal of 100.</span> </p><p><span m='2425480'>This guy is 0.</span>
  </p><p><span m='2427830'>And this guy is 0.</span> </p><p><span
  m='2430240'>Now, 0 is always an underestimate of the actual</span> <span
  m='2433500'>distance to the goal, right?</span> </p><p><span m='2434600'>So
  I'm always free to use 0.</span> </p><p><span m='2436970'>Is that 100
  OK?</span> </p><p><span m='2439350'>Yeah because the actual distances is 101,
  so it's less</span> <span m='2443400'>than that the actual distance.</span>
  </p><p><span m='2444650'>So it's OK as an admissible heuristic.</span>
  </p><p><span m='2448950'>So these numbers that I put up here, together,
  constitute an</span> <span m='2453570'>admissible heuristic set of estimates
  to the goal.</span> </p><p><span m='2457300'>So now, let's just simulate A
  star and see what happens.</span> </p><p><span m='2466370'>So first of all,
  you start with S, and that can either go</span> <span m='2470170'>to A or B.
  The actual distance is 1 plus an estimate on the</span> <span
  m='2480130'>remaining distance.</span> </p><p><span m='2481570'>That gives us
  100 plus 100.</span> </p><p><span m='2485410'>That's equal to 101.</span>
  </p><p><span m='2488860'>If we go to B instead, the actual distance is 1 plus
  the</span> <span m='2492160'>heuristic's distance is 0, so that's equal to
  1.</span> </p><p><span m='2496190'>OK, good.</span> </p><p><span
  m='2496870'>So now we know that we always extend the</span> <span
  m='2499140'>shortest path so far.</span> </p><p><span m='2502020'>Did I goof
  this, or are you asking a question?</span> </p><p><span m='2504020'>AUDIENCE:
  [INAUDIBLE]?</span> </p><p><span m='2509145'>PROFESSOR: Yeah, when I say
  actual, it's the actual</span> <span m='2511730'>distance that you've
  traveled.</span> </p><p><span m='2512895'>AUDIENCE: But that's
  [INAUDIBLE].</span> </p><p><span m='2515650'>PROFESSOR: So wait a
  second.</span> </p><p><span m='2517250'>If I go from S to A, the actual
  distance</span> <span m='2520123'>I've traveled is 1.</span> </p><p><span
  m='2521338'>AUDIENCE: I meant like, does the map--</span> <span
  m='2523282'>PROFESSOR: So now I'm taking the sum of the actual</span> <span
  m='2526780'>distance, plus the estimated distance to go.</span> </p><p><span
  m='2528735'>AUDIENCE: All right.</span> </p><p><span m='2529474'>I'm just
  wondering if the original map has to be</span> <span
  m='2530896'>[INAUDIBLE].</span> </p><p><span m='2532792'>PROFESSOR: See this
  is not a map.</span> </p><p><span m='2537270'>She was asking if the map has to
  be geometrically accurate.</span> </p><p><span m='2541630'>See, this could be
  a model of something that's not a map.</span> </p><p><span m='2545480'>And so,
  I'm free to put any numbers on those links that I</span> <span
  m='2548230'>want, including estimates, as long as they're
  underestimates</span> <span m='2551520'>of the distance along the
  lengths.</span> </p><p><span m='2555250'>So this tells me that my estimated
  distance</span> <span m='2558150'>here, so far, is 1.</span> </p><p><span
  m='2560810'>So I'll, surely, go down here to C. And if I go to C, then</span>
  <span m='2565530'>my accumulated distance is 11.</span> </p><p><span
  m='2570890'>And my estimate of the remaining distance is 0.</span>
  </p><p><span m='2576140'>So that's a total of 11.</span> </p><p><span
  m='2580400'>So now I'm following my heuristic again and saying</span> <span
  m='2582270'>what's the shortest path on a base of the accumulated</span> <span
  m='2587130'>distance plus the estimated distance?</span> </p><p><span
  m='2590180'>Here, the accumulated distance plus the</span> <span
  m='2592080'>estimated distance is 101.</span> </p><p><span m='2594490'>Here,
  it's only 11.</span> </p><p><span m='2595600'>So plainly, I extend this
  guy.</span> </p><p><span m='2598420'>And that gets me to the goal.</span>
  </p><p><span m='2601300'>And the total accumulated distance is now 111 plus
  0</span> <span m='2607980'>equals 111.</span> </p><p><span m='2615130'>And
  that's not the shortest path, but wait.</span> </p><p><span m='2617750'>I
  still have to do my checking, right?</span> </p><p><span m='2619780'>I have to
  extend A. I when I extend A, I get to B. And now,</span> <span
  m='2625900'>when I get to B that way, my accumulated</span> <span
  m='2628710'>distance is 2 plus my--</span> <span m='2633230'>oh, sorry.</span>
  </p><p><span m='2633920'>S, A, C.</span> </p><p><span m='2637640'>My
  accumulate distance it 2.</span> </p><p><span m='2639170'>My estimated
  distance is 0, so that's equal to 2.</span> </p><p><span m='2642910'>So I'm OK
  because I'm still going to extend</span> <span m='2645150'>to this guy,
  right?</span> </p><p><span m='2646810'>Wrong.</span> </p><p><span
  m='2647950'>I've already extended that guy.</span> </p><p><span m='2652220'>So
  I'm hosed.</span> </p><p><span m='2653530'>I won't find the shortest path
  because I'm</span> <span m='2655640'>going to stop there.</span> </p><p><span
  m='2657740'>And I'm going to stop there because this is an admissible</span>
  <span m='2660085'>heuristic and that's not good enough unless it's a
  map.</span> </p><p><span m='2664450'>It's not good enough for this particular
  case because this</span> <span m='2666620'>is not geometric.</span>
  </p><p><span m='2667210'>This cannot be done as a map on a plane.</span>
  </p><p><span m='2672900'>So that's a situation where what I've talked to you
  about,</span> <span m='2676850'>so far, works with branch-and-bound.</span>
  </p><p><span m='2679730'>Works with branch-and -bound plus an extended
  list.</span> </p><p><span m='2682070'>But doesn't work when we added an
  admissible heuristic.</span> </p><p><span m='2685210'>So if we're going to do
  this in general, we need something</span> <span m='2688020'>stronger than
  admissibility, which works only on maps.</span> </p><p><span m='2691480'>And
  so the flourish that I'll tell you about here in the</span> <span
  m='2694590'>last few seconds of today's lecture is to add a refinement</span>
  <span m='2710780'>as follows.</span> </p><p><span m='2711960'>So far, we've
  got admissibility.</span> </p><p><span m='2720020'>And if we want to write
  this down in a kind of mathematical</span> <span m='2722410'>notation, we
  could say that it's admissible if the</span> <span m='2725680'>estimated
  distance between any node X and the goal is less</span> <span m='2731500'>than
  or equal to the actual distance</span> <span m='2734440'>between X and the
  goal.</span> </p><p><span m='2738490'>That's the definition of
  admissible.</span> </p><p><span m='2740230'>As long as heuristic does that
  it's admissible.</span> </p><p><span m='2743350'>And A star works if it's a
  map.</span> </p><p><span m='2746250'>But for that kind of situation where it's
  not a map we need a</span> <span m='2748860'>stronger condition, which is
  called consistency.</span> </p><p><span m='2754830'>And what that says is that
  the distance between X and the</span> <span m='2759100'>goal minus the
  distance between some other node in the</span> <span m='2764940'>goal, Y. Take
  the absolute value of that.</span> </p><p><span m='2771010'>That has to be
  less than or equal to the actual distance</span> <span m='2773950'>between X
  and Y.</span> </p><p><span m='2778700'>So this heuristic satisfy the
  consistency condition?</span> </p><p><span m='2784280'>Well, let's see.</span>
  </p><p><span m='2785600'>Here the guess is 100.</span> </p><p><span
  m='2787980'>Here it's 0.</span> </p><p><span m='2788660'>So the absolute
  difference is 100.</span> </p><p><span m='2791590'>But the actual distance is
  only 2.</span> </p><p><span m='2794440'>So it satisfies admissibility, but it
  doesn't satisfy</span> <span m='2798170'>consistency.</span> </p><p><span
  m='2798495'>And it doesn't work.</span> </p><p><span m='2800320'>So you can
  almost be guaranteed we'll give you a</span> <span m='2801880'>situation where
  if you use an admissible</span> <span m='2807830'>heuristic you'll
  lose.</span> </p><p><span m='2810490'>And if you use a consistent heuristic,
  you'll still win.</span> </p><p><span m='2817220'>So how can we bring this
  back into the fold?</span> </p><p><span m='2820570'>Well, we can't use that
  heuristic.</span> </p><p><span m='2821950'>It's no good.</span> </p><p><span
  m='2823480'>But if this heuristic estimate of the goal were 2, then
  we'd</span> <span m='2829690'>be OK because then it would still be
  admissible.</span> </p><p><span m='2835100'>But it would also be
  consistent.</span> </p><p><span m='2838310'>So the bottom line is that you now
  know something you didn't</span> <span m='2840565'>know when you started out
  two lectures ago.</span> </p><p><span m='2844000'>You now know how MapQuest
  and all of its' descendents work.</span> </p><p><span m='2848450'>Now you can
  find an optimal path, as well as a</span> <span m='2850470'>heuristically good
  path.</span> </p><p><span m='2852390'>You see that if you don't do anything
  other than branch and</span> <span m='2854795'>bound it can be extremely
  expensive.</span> </p><p><span m='2857510'>And you can even invent
  pathological cases where it's</span> <span m='2859760'>exponential and the
  distance to the goal.</span> </p><p><span m='2865890'>So because it can be so
  computationally horrible, you</span> <span m='2868730'>want to use every
  advantage you can, which, generally,</span> <span m='2871360'>involves using
  an extended list.</span> </p><p><span m='2874470'>As well as--</span> <span
  m='2875790'>no laptops, please.</span> </p><p><span m='2876870'>It still
  holds.</span> </p><p><span m='2877510'>No smoking, no drinking, and no
  laptops.</span> </p><p><span m='2884160'>So you're going to use all the
  muscles you can.</span> </p><p><span m='2886200'>And those muscles include
  using an extended list and an</span> <span m='2891180'>admissible or
  consistent heuristic, depending on the</span> <span
  m='2894410'>circumstances.</span> </p><p><span m='2896350'>And so, I think
  we'll conclude there since our time is up.</span> </p><p><span m='2899880'>And
  Elliot, you can ask a question after class.</span> </p><p><span
  m='2901590'>Why don't you come up and ask it now?</span> </p><p></p>
embedded_media:
  - uid: e4cb4f8e3ebbe4f49d715bc762e97df6
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: gGQ-vAmdAOI
  - uid: 013070cf27d09d78c7b7625d4a66b5bc
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-5-search-optimal-branch/id765641080?i=194470723
  - uid: f5db8f1d3dbbb3e341fa4d225a58a6af
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec05_300k.mp4'
  - uid: be2e1fffa137f89afe4872bb58f5bfbf
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/gGQ-vAmdAOI/default.jpg'
  - uid: 57ce56817f633fc58f0f323ad331c4d8
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: gGQ-vAmdAOI
  - uid: 6d19c6d6ac3eee6874fb0d3f36bf6397
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: gGQ-vAmdAOI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-5-search-optimal-branch-and-bound-a/gGQ-vAmdAOI.srt
  - uid: 3c419a58126d8c55a9417664b1437dc2
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: gGQ-vAmdAOI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-5-search-optimal-branch-and-bound-a/gGQ-vAmdAOI.pdf
  - uid: 96e5094b937f994193019f6124b33430
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dbb93ba6e0e9e5ada479490ed20d9955
    parent_uid: 559f4256c248c62f1030af5edcd5895c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
