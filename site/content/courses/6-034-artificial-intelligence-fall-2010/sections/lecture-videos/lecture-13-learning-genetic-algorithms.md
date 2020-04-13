---
title: 'Lecture 13: Learning: Genetic Algorithms'
uid: 94a831264c372f49131ba025945d85ee
parent_uid: 28d36d6426366698bf1ded18c6190be7
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-13-learning-genetic-algorithms
short_url: lecture-13-learning-genetic-algorithms
inline_embed_id: '12248760lecture13:learning:geneticalgorithms72266030'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture explores genetic algorithms at a
  conceptual level. We consider three approaches to how a population evolves
  towards desirable traits, ending with ranks of both fitness and diversity. We
  briefly discuss how this space is rich with solutions.</p>
  <p><strong>Instructor:</strong> Patrick H. Winston</p>
related_resources_text: >-
  <p>More information about <a
  href="http://www.karlsims.com/evolved-virtual-creatures.html"
  target="_blank">Evolved Virtual Creatures</a>, which is shown at the end of
  the lecture.</p>
transcript: >-
  <p><span m='15584'>PATRICK WINSTON: I have extremely bad news.</span>
  </p><p><span m='18820'>Halloween falls this year on a Sunday.</span>
  </p><p><span m='21690'>But we in 6.034 refuse to suffer the slings and
  arrows</span> <span m='25880'>of outrageous fortune.</span> </p><p><span
  m='27890'>So we've decided that Halloween is today, as far</span> <span
  m='30980'>6.034 is concerned.</span> </p><p><span m='33190'>Kenny, could you
  give me a hand, please?</span> </p><p><span m='43910'>If you could take that
  and put it over there.</span> </p><p><span m='47305'>STUDENT:
  [INAUDIBLE]?</span> </p><p><span m='49260'>PATRICK WINSTON: Mm hm.</span>
  </p><p><span m='49960'>Just give it to them.</span> </p><p><span m='54120'>You
  can take as much of this as you like.</span> </p><p><span m='56990'>The rest
  will be given to that herd of stampeding freshman</span> <span m='59655'>that
  comes in after.</span> </p><p><span m='76039'>It's a cornucopia of legal
  drugs.</span> </p><p><span m='81000'>Chocolate does produce a kind of mild
  high, and I recommend</span> <span m='85330'>it before quizzes and giving
  lectures.</span> </p><p><span m='90890'>I have a friend of mine, one of the
  Nobel laureates in</span> <span m='93370'>biology, always eats chocolate
  before he lectures.</span> </p><p><span m='96060'>Gives him a little
  edge.</span> </p><p><span m='98750'>Otherwise, he'll be flat.</span>
  </p><p><span m='101930'>So I recommend it.</span> </p><p><span m='114200'>It
  will take, I suppose, a little while to digest that</span> <span
  m='116470'>neural net stuff.</span> </p><p><span m='119020'>A little richer
  than usual in mathematics.</span> </p><p><span m='123030'>So today, we're
  going to talk about another effort at</span> <span m='125190'>mimicking
  biology.</span> </p><p><span m='129217'>This is easy stuff.</span>
  </p><p><span m='131550'>It's just conceptual.</span> </p><p><span
  m='134460'>And you won't see this on the next quiz.</span> </p><p><span
  m='135890'>But you will see it on the final.</span> </p><p><span
  m='137040'>It's one of those quiz five type problems, where I ask you</span>
  <span m='140650'>questions to see if you were here and awake.</span>
  </p><p><span m='143690'>So a typical question might be, Professor Winston is
  a</span> <span m='148140'>creationist, or something like that.</span>
  </p><p><span m='151540'>Not too hard to answer.</span> </p><p><span
  m='154290'>In any event, if it's been hard to develop a real</span> <span
  m='160970'>understanding of intelligence, occasionally the hope is that</span>
  <span m='163210'>by mimicking biology or mimicking evolution, you can</span>
  <span m='168470'>circumnavigate all the problems.</span> </p><p><span
  m='173640'>And one of those kinds of efforts is</span> <span m='175550'>ever
  to imitate evolution.</span> </p><p><span m='179740'>So we're going to talk
  today about so-called genetic</span> <span m='182290'>algorithms, which are
  naive attempts</span> <span m='186840'>to mimic naive evolution.</span>
  </p><p><span m='189890'>Now, I realize that most MIT students have a basic
  grasp of</span> <span m='195860'>sexual reproduction.</span> </p><p><span
  m='197910'>But I've found in talking with students that many times,</span>
  <span m='201170'>they're a little fuzzy on some of the details.</span>
  </p><p><span m='204270'>So let's start off by reflecting a little bit
  about</span> <span m='206540'>how that works.</span> </p><p><span
  m='209320'>So let's see, we need pink and blue.</span> </p><p><span
  m='214630'>And here's our cell, and here is its nucleus, and here are</span>
  <span m='220990'>mommy and daddy's chromosomes.</span> </p><p><span
  m='222590'>We'll just pretend there's one pair.</span> </p><p><span
  m='225770'>Now ordinarily, in ordinary cell</span> <span m='228870'>division,
  you get two cells.</span> </p><p><span m='233440'>Both have a nucleus, and the
  process of producing them</span> <span m='237660'>involves the duplication of
  those chromosomes.</span> </p><p><span m='241310'>And then one pair ends up in
  each of the child cells, and</span> <span m='247360'>that's all there is to
  that.</span> </p><p><span m='248780'>That's mitosis.</span> </p><p><span
  m='256360'>But then, when we talk about reproduction, it's more</span> <span
  m='260850'>complicated because those chromosomes get all twisted</span> <span
  m='265540'>up, and they break, and they recombine.</span> </p><p><span
  m='268520'>So when we talk about the cells that split off from one</span>
  <span m='272330'>of these germ cells, it's no longer appropriate to
  talk</span> <span m='279440'>about the pink one and the blue one, because the
  pink one</span> <span m='282850'>and the blue one are all mixed up.</span>
  </p><p><span m='285280'>So you get two chromosomes here and two here.</span>
  </p><p><span m='289640'>But through some miracle of nature, which has
  always</span> <span m='292920'>amazed me, these two cells split, in turn, into
  four</span> <span m='298850'>cells altogether.</span> </p><p><span
  m='305340'>And each of those four cells at the bottom gets one of the</span>
  <span m='310180'>chromosomes that was produced by the twisting up of the
  rope</span> <span m='313400'>and recombination.</span> </p><p><span
  m='316250'>Then, along comes a special occasion.</span> </p><p><span
  m='323090'>And now we can think of this as being a blue one and this</span>
  <span m='329390'>as being a pink one.</span> </p><p><span m='331480'>And they
  come together, and you get a new person, like so.</span> </p><p><span
  m='338440'>Note that your mother and father's chromosomes are</span> <span
  m='342060'>never, never recombined.</span> </p><p><span m='343335'>It's your
  grandparents chromosomes that recombine.</span> </p><p><span m='347700'>So
  that's what it's like.</span> </p><p><span m='349040'>And the main thing to
  note about this is--</span> <span m='350730'>well, a couple things.</span>
  </p><p><span m='351570'>If you happen to be female, this part of the
  process--</span> <span m='357260'>this part over here--</span> <span
  m='359170'>took place before you were born.</span> </p><p><span m='361700'>If
  you happen to be male, it's going on right now as we</span> <span
  m='365130'>speak, which probably explains something.</span> </p><p><span
  m='367400'>But in any event, it's going on right now.</span> </p><p><span
  m='370930'>But whenever it goes on, there are lots of opportunities for</span>
  <span m='376330'>throwing dice.</span> </p><p><span m='378200'>So God threw
  all the dice before you were born, if you</span> <span m='381890'>happen to be
  a female, in this part of the process over here.</span> </p><p><span
  m='386190'>Then, of course, more dice got thrown here when the decision</span>
  <span m='389100'>was made about which particular cells got to fuse</span>
  <span m='393090'>to form a new individual.</span> </p><p><span m='395280'>So I
  want to beat on this idea of lots of choice.</span> </p><p><span
  m='398890'>When we talk about genetic algorithms, and we talk about</span>
  <span m='402409'>nature, there are lots of choices in there.</span>
  </p><p><span m='404409'>And that means there are lots of choices to intervene,
  to</span> <span m='407550'>screw around, to make things work out the way you
  want.</span> </p><p><span m='412159'>But in any event, there we are.</span>
  </p><p><span m='414120'>That's the basic idea, and it all starts with
  chromosomes.</span> </p><p><span m='418040'>So we could think of implementing
  something that</span> <span m='420380'>imitates that with the ACTG stuff that
  you learned all</span> <span m='425735'>about in Seminar 1.</span>
  </p><p><span m='427030'>But we're computer scientists.</span> </p><p><span
  m='428480'>We don't like Base 4.</span> </p><p><span m='430700'>We like Base
  2.</span> </p><p><span m='431240'>So I'm going to just suggest that our
  chromosomes are</span> <span m='434320'>binary in this system that we're going
  to build.</span> </p><p><span m='441230'>So that might be a chromosome.</span>
  </p><p><span m='443590'>And it doesn't have to be binary.</span> </p><p><span
  m='446280'>It can be symbolic for fall I care.</span> </p><p><span
  m='447890'>But it's just some string of things that determine how the</span>
  <span m='452170'>ultimate system behaves.</span> </p><p><span m='455390'>So it
  all starts out, then, with some of these</span> <span m='458230'>chromosomes,
  some of these simulated chromosomes,</span> <span m='466840'>simulated,
  simplified, and naive.</span> </p><p><span m='471070'>And there's a population
  of chromosomes.</span> </p><p><span m='475570'>The population of chromosomes--
  it might be</span> <span m='477780'>subject to a little bit of
  mutation.</span> </p><p><span m='480010'>That is to say, a zero becomes a one,
  or a</span> <span m='483100'>one becomes a zero.</span> </p><p><span
  m='485430'>That happens a lot.</span> </p><p><span m='486170'>That mutation
  stuff happens over here when things get</span> <span m='488340'>twisted up and
  recombined.</span> </p><p><span m='489940'>There are copying errors and
  stuff.</span> </p><p><span m='492020'>Cosmic rays hit it all the time.</span>
  </p><p><span m='493600'>All sorts of reasons why there might be a</span> <span
  m='496060'>single point of change.</span> </p><p><span m='498090'>That
  produces the mutation effect.</span> </p><p><span m='501970'>So here, we have
  a population that starts off over here.</span> </p><p><span m='512360'>And
  some of those things are subject to mutation.</span> </p><p><span
  m='517976'>And you'll note, here's a whole bunch of choice already.</span>
  </p><p><span m='521429'>How many of these mutations do you allow per</span>
  <span m='524250'>chromosome, for example?</span> </p><p><span m='528330'>How
  many of the chromosomes just slip</span> <span m='530110'>through without any
  mutation?</span> </p><p><span m='531280'>Those are choices you can
  make.</span> </p><p><span m='533640'>Once you've made those choices, then we
  have the</span> <span m='535820'>crossover phenomenon.</span> </p><p><span
  m='541990'>Let's identify one of these guys as the pink one and one</span>
  <span m='545600'>of these guys as the blue one.</span> </p><p><span
  m='548820'>And so now we have the pink one cruised along as well as</span>
  <span m='553450'>the blue one.</span> </p><p><span m='554730'>The pink one and
  the blue one cross and produce a new</span> <span m='557620'>chromosome, just
  like in nature.</span> </p><p><span m='560820'>So we take the front part of
  one, back part of the other,</span> <span m='563720'>and we fuse them
  together.</span> </p><p><span m='566760'>And some may slip by without any of
  that, like so.</span> </p><p><span m='572470'>Well, these things are meant to
  be combined in pairs, like</span> <span m='575935'>so, but they may not have
  any crossover in them.</span> </p><p><span m='579060'>So you have another set
  of choices.</span> </p><p><span m='580400'>How many crossovers do you allow
  per recombination?</span> </p><p><span m='584790'>You get another set of
  choices.</span> </p><p><span m='587190'>So now we've got a population of
  modified chromosomes</span> <span m='593280'>through mutation and
  crossover.</span> </p><p><span m='594630'>So the next thing to do is we have
  the genotype to phenotype</span> <span m='599040'>transition.</span>
  </p><p><span m='600520'>That is to say the chromosome determines the
  individual.</span> </p><p><span m='603660'>It may be a person.</span>
  </p><p><span m='605250'>It may be a cow.</span> </p><p><span m='606030'>It may
  be a computer program.</span> </p><p><span m='607290'>I don't care
  what.</span> </p><p><span m='608830'>But that code down there has to be</span>
  <span m='612150'>interpreted to be a something.</span> </p><p><span
  m='615670'>So it is the genotype, and it has to be interpreted to be</span>
  <span m='619030'>something which is the phenotype, the thing that the</span>
  <span m='623870'>stuff down there is encoding for.</span> </p><p><span
  m='626810'>So here, we have a bunch of individuals.</span> </p><p><span
  m='632840'>Now, each of those individuals, because they have</span> <span
  m='635030'>varying chromosomal composition, will have a</span> <span
  m='638230'>different fitness.</span> </p><p><span m='642380'>So these
  fitnesses might be--</span> <span m='644890'>well, who knows how they might be
  scored.</span> </p><p><span m='646990'>But we're computer scientists.</span>
  </p><p><span m='648480'>We might as well use numbers.</span> </p><p><span
  m='649570'>So maybe this guy's fitness is 88, and this guy's fitness is</span>
  <span m='652970'>77, and so on.</span> </p><p><span m='657400'>So now that
  we've got fitness--</span> <span m='661290'>by the way, notice all the choices
  involved there--</span> <span m='663280'>choice of how you interpret the
  genotype, choice about how</span> <span m='666410'>the phenotype produces the
  fitness.</span> </p><p><span m='669610'>And now we have a choice about how the
  fitness produces a</span> <span m='673480'>probability, like 0.8 and 0.1, or
  something like that--</span> <span m='681840'>probability of survival into the
  next generation.</span> </p><p><span m='685500'>So now, once we've got those
  probabilities, we actually</span> <span m='687590'>have selection.</span>
  </p><p><span m='692250'>And those phenotypes out there produce genotypes, a
  new set</span> <span m='696620'>of chromosomes, and that completes our loop
  that goes</span> <span m='702890'>back in there.</span> </p><p><span
  m='703830'>And so that's the new generation.</span> </p><p><span
  m='711650'>Sounds simple.</span> </p><p><span m='714440'>So if you're going to
  make this work, of course, you have</span> <span m='716960'>a million choices,
  as I'm going to emphasize over and</span> <span m='719450'>over again.</span>
  </p><p><span m='719950'>And one of your choices is, for example, how do
  you</span> <span m='725220'>compute the probability of survival to the
  next</span> <span m='727380'>generation given the fitness?</span> </p><p><span
  m='730440'>So we have to go, somehow, from numbers like these to</span> <span
  m='733740'>probabilities like those.</span> </p><p><span m='736830'>So I'm
  going to talk about several ways of doing it.</span> </p><p><span
  m='740270'>None of them are magic.</span> </p><p><span m='741920'>None of them
  was specified and stipulated by God</span> <span m='744420'>as the right
  way.</span> </p><p><span m='746110'>But they have increasingly good properties
  with respect</span> <span m='748630'>to this kind of processing.</span>
  </p><p><span m='751950'>So the simplest thing you can do--</span> <span
  m='754540'>idea number one for computing the--</span> <span m='758340'>see,
  what you do is you get this whole bag of individuals,</span> <span
  m='762200'>and you have to decide who's going to survive to the next</span>
  <span m='764370'>generation.</span> </p><p><span m='765800'>So at each step,
  everything in the bank has a probability of</span> <span m='769420'>being the
  one you pick out and put in the next generation.</span> </p><p><span
  m='772370'>So at any step, the sum of the probabilities for each of</span>
  <span m='775480'>those guys is 1, because that's how</span> <span
  m='778330'>high probability works.</span> </p><p><span m='779330'>The
  probability of a complete set, added all up, is</span> <span
  m='783140'>probability of 1.</span> </p><p><span m='785700'>So one thing you
  can do is you can say that the probability</span> <span m='789370'>that you're
  going to draw individual i is equal to, or</span> <span m='794590'>maybe is
  proportional to, the fitness of that individual.</span> </p><p><span
  m='805090'>I haven't completed the expression, so it's not a</span> <span
  m='806600'>probability yet, because some piece of it won't add up to 1.</span>
  </p><p><span m='811010'>How can I ensure that it will add up to 1?</span>
  </p><p><span m='814370'>That's easy.</span> </p><p><span
  m='814940'>Right.</span> </p><p><span m='816280'>All I have to do is divide by
  the sum of the</span> <span m='820140'>fitnesses over i.</span> </p><p><span
  m='823180'>So there's a probability measure that's produced from</span> <span
  m='826260'>the fitnesses.</span> </p><p><span m='826690'>Yeah.</span>
  </p><p><span m='827602'>STUDENT: You need to make sure that the</span> <span
  m='828970'>fitnesses aren't negative.</span> </p><p><span m='830338'>PATRICK
  WINSTON: Have to make sure the fitnesses are what?</span> </p><p><span
  m='831780'>STUDENT: Aren't negative.</span> </p><p><span m='832712'>PATRICK
  WINSTON: He says I have to make sure the</span> <span m='834600'>fitnesses
  aren't negative.</span> </p><p><span m='835350'>Yeah, it would be embarrassing
  if they were.</span> </p><p><span m='839020'>So we'll just [? strike ?]
  anything like that as 0.</span> </p><p><span m='841465'>You've got a lot of
  choice how you can calculate the fitness.</span> </p><p><span m='844730'>And
  maybe you will produce negative numbers, in which</span> <span m='846330'>case
  you have to think a little bit more about it.</span> </p><p><span
  m='851570'>So now, what about an example?</span> </p><p><span m='853410'>Well,
  I'm going to show you an example.</span> </p><p><span m='856880'>Why don't I
  show you the example.</span> </p><p><span m='859450'>What we're going to do is
  we're going to have a genetic</span> <span m='861840'>algorithm that looks for
  an optimal value in a space.</span> </p><p><span m='867870'>And there's the
  space.</span> </p><p><span m='869836'>Now, you'll notice it's a bunch of
  contour lines, a</span> <span m='872856'>bunch of hills in that space.</span>
  </p><p><span m='874840'>Let me show you how that space was produced.</span>
  </p><p><span m='878170'>The fitness is a function of x and y, and it's equal
  to the</span> <span m='884250'>sine of some constant times x, quantity
  squared, times the</span> <span m='890890'>sine of some constant y, quantity
  squared, e to the</span> <span m='897540'>plus x plus y divided by some
  constant.</span> </p><p><span m='901910'>So sigma and omega there are just in
  there so that it kind</span> <span m='905830'>of makes a nice picture for
  demonstration.</span> </p><p><span m='909890'>So there's a space.</span>
  </p><p><span m='910790'>And clearly, where you want to be in this space is in
  the</span> <span m='912930'>upper right-hand corner.</span> </p><p><span
  m='916670'>That's the optimal value.</span> </p><p><span m='918160'>But we
  have a genetic algorithm that</span> <span m='919570'>doesn't know
  anything.</span> </p><p><span m='921300'>All it knows how to do is mutate and
  cross over.</span> </p><p><span m='926950'>So it's going to start off with a
  population of 1.</span> </p><p><span m='930130'>It's a little red dot down in
  the lower left.</span> </p><p><span m='933130'>So here's how it's going to
  evolve.</span> </p><p><span m='936080'>There's going to be s chromosome
  consisting of two</span> <span m='939580'>numbers, an x number and a y number,
  like,</span> <span m='944380'>say, 0.3 and 0.7.</span> </p><p><span
  m='947450'>Here's another one, which might be 0.6 and 0.2.</span> </p><p><span
  m='954080'>So the mutation operator is going to take one of those</span> <span
  m='956160'>values and change it a little bit.</span> </p><p><span
  m='958720'>So it might say, well, we'll take 3, and we'll make it 0.2.</span>
  </p><p><span m='963980'>And the crossover operation is going to exchange the x
  and y</span> <span m='967090'>values of pairs.</span> </p><p><span
  m='968850'>So if we have a crossover here, then what we're going to</span>
  <span m='972180'>get out from this one--</span> <span m='976060'>well, we're
  going to get out a combination of these two.</span> </p><p><span
  m='982970'>And it's going to look like this.</span> </p><p><span
  m='991300'>Because what we're going to do is we're going to take the x</span>
  <span m='993740'>value of 1 and combine it with the y value of the other
  one.</span> </p><p><span m='997120'>So this is going to be 0.2--</span> <span
  m='998570'>my mutated value and 0.2--</span> <span m='1002050'>and this is
  going to be 0.6 and 0.7.</span> </p><p><span m='1006420'>So that's how my
  little genetic algorithm heck is</span> <span m='1009300'>going to
  work.</span> </p><p><span m='1011860'>So having coded this up, we can now see
  how it flows.</span> </p><p><span m='1021000'>Let's run it 10
  generations.</span> </p><p><span m='1024460'>So the population is rapidly
  expanded to some fixed limit.</span> </p><p><span m='1027800'>I forgot what it
  is--</span> <span m='1028440'>30 or so.</span> </p><p><span m='1030440'>And we
  can run that 100 generations.</span> </p><p><span m='1035260'>And so this
  seems to be getting stuck, kind of, right?</span> </p><p><span m='1038540'>So
  what's the problem?</span> </p><p><span m='1040319'>The problem is local
  maxima.</span> </p><p><span m='1041858'>This is fundamentally a hill-climbing
  mechanism.</span> </p><p><span m='1050950'>Note that I have not included any
  crossover so far.</span> </p><p><span m='1056210'>So if I do have crossover,
  then if I've got a good x</span> <span m='1059345'>value and a good y value, I
  can cross them over and get</span> <span m='1064050'>them both in the same
  situation.</span> </p><p><span m='1068880'>But nevertheless, this thing
  doesn't seem to be</span> <span m='1070470'>working very well.</span>
  </p><p><span m='1071783'>STUDENT: Professor, I have a question.</span>
  </p><p><span m='1073635'>PATRICK WINSTON: Yeah.</span> </p><p><span
  m='1074561'>STUDENT: That picture is just the contour</span> <span
  m='1076185'>lines of that function.</span> </p><p><span m='1076660'>PATRICK
  WINSTON: The contour lines of that function.</span> </p><p><span
  m='1078570'>So the reason you see a lot of contour lines in the upper</span>
  <span m='1080710'>right is because it gets much higher because there's
  that</span> <span m='1082680'>exponential term that increases as you</span>
  <span m='1084290'>go up to the right.</span> </p><p><span m='1086430'>So I
  don't know, it looks--</span> <span m='1089270'>let's put some crossover in
  and repeat the experience.</span> </p><p><span m='1095960'>We'll run 100
  generations.</span> </p><p><span m='1104100'>I don't know.</span> </p><p><span
  m='1104560'>It just doesn't seem to be going anywhere.</span> </p><p><span
  m='1107440'>Sometimes, it'll go right to the global maximum.</span>
  </p><p><span m='1111760'>Sometimes it takes a long time.</span> </p><p><span
  m='1113120'>It's got a random number generator in there, so I have</span>
  <span m='1115320'>no control over it.</span> </p><p><span m='1117610'>So it's
  going to get there.</span> </p><p><span m='1119520'>I couldn't tell whether
  the crossover was</span> <span m='1121330'>doing any good or not.</span>
  </p><p><span m='1123236'>Oh, well, here's one.</span> </p><p><span
  m='1127030'>Let's make this a little bit more complicated.</span> </p><p><span
  m='1129970'>Suppose that's the space.</span> </p><p><span m='1142780'>Now it's
  going to be in real trouble, because it'll never</span> <span m='1144890'>get
  across that moat.</span> </p><p><span m='1149280'>You know, you would think
  that it would climb up to the x</span> <span m='1154540'>maximum or to the y
  maximum, but it's not</span> <span m='1156880'>going to do very well.</span>
  </p><p><span m='1159990'>Even with crossover, it's just not going to do very
  well,</span> <span m='1162100'>because it's climbing up those local
  hills.</span> </p><p><span m='1164130'>Anybody got an idea about one simple
  thing we could do to</span> <span m='1167220'>make it work better?</span>
  </p><p><span m='1170100'>Yeah, you could increase step size, right?</span>
  </p><p><span m='1174860'>Let me you see if that will help.</span> </p><p><span
  m='1189360'>You know, even that doesn't seem to help.</span> </p><p><span
  m='1191750'>So we have to conclude-- do we conclude that</span> <span
  m='1194695'>this is a bad idea?</span> </p><p><span m='1195520'>Well, we don't
  have to conclude it's a bad idea yet,</span> <span m='1198170'>because we may
  just look at it and ask why five times.</span> </p><p><span m='1204420'>And we
  might ask, well, maybe we can get a better mechanism</span> <span
  m='1209050'>in there to translate fitness into probability of survival.</span>
  </p><p><span m='1214540'>Using this formula is kind of strange, anyway,
  because</span> <span m='1217480'>suppose temperature is one of your fitness
  characteristics.</span> </p><p><span m='1220910'>The hotter, the
  better.</span> </p><p><span m='1222520'>Then the ratio of the probability that
  you'll</span> <span m='1225310'>survive versus the person next to you, that
  ratio will depend</span> <span m='1230730'>on whether you're measuring the
  temperature in Celsius or</span> <span m='1232460'>Fahrenheit, right?</span>
  </p><p><span m='1235680'>Because you've shifted the origin that shifts the
  ratio</span> <span m='1238820'>that shifts the probability of success.</span>
  </p><p><span m='1241910'>So it seems kind of strange to just take these things
  right</span> <span m='1244230'>straight into probabilities.</span>
  </p><p><span m='1246550'>So a better idea--</span> <span m='1247820'>idea
  number two--</span> <span m='1249430'>is to say, well, shoot, maybe we don't
  care about what the</span> <span m='1253150'>actual fitnesses are.</span>
  </p><p><span m='1255730'>All we really care about is the rank order of all
  the</span> <span m='1259160'>candidates.</span> </p><p><span m='1260520'>So
  the candidate with the most fitness will have the most</span> <span
  m='1262870'>probability of getting into the next generation.</span>
  </p><p><span m='1265770'>The candidate with the second-most fitness will
  have</span> <span m='1268460'>the second-highest probability, and so
  on.</span> </p><p><span m='1271880'>But we're not going to use the actual
  fitnesses themselves to</span> <span m='1274450'>make the
  determination.</span> </p><p><span m='1276530'>Instead, what we're going to do
  with this</span> <span m='1277750'>mechanism number two--</span> <span
  m='1278980'>this is the rank space method--</span> <span m='1288670'>is
  this.</span> </p><p><span m='1289370'>We're going to say that the probability
  of the</span> <span m='1291690'>highest-ranking individual of getting into the
  next</span> <span m='1295500'>generation is some constant P sub c, which, of
  course, you</span> <span m='1299465'>can select.</span> </p><p><span
  m='1299720'>You have another choice.</span> </p><p><span m='1302350'>Then, if
  that guy doesn't get selected, the probability of</span> <span m='1306820'>the
  second-highest-ranking individual getting in the next</span> <span
  m='1309490'>generation is going to be the probability that that guy</span>
  <span m='1311730'>didn't get in there.</span> </p><p><span m='1313620'>That's
  1 minus P sub c times the same probability constant.</span> </p><p><span
  m='1319870'>And so you can see how this is going.</span> </p><p><span
  m='1322360'>P3 will be equal to 1 minus P sub c squared terms P sub c.</span>
  </p><p><span m='1330220'>P sub n minus 1 will be equal to 1 minus that
  probability</span> <span m='1338130'>constant to the n minus--</span> <span
  m='1342340'>n minus 2 times P sub c.</span> </p><p><span m='1347370'>And then
  there's only one individual left.</span> </p><p><span m='1351000'>And then if
  you got through all these guys and haven't got</span> <span
  m='1353030'>anybody selected, then you've got to select the last guy.</span>
  </p><p><span m='1357260'>And so the probability you're going to select the
  last guy</span> <span m='1360640'>is going to be 1 minus P sub c to the n
  minus 1.</span> </p><p><span m='1367160'>So it's a probability you've missed
  all those guys in the</span> <span m='1371140'>first n minus 1 choices.</span>
  </p><p><span m='1373300'>Yeah, it is, honest to God.</span> </p><p><span
  m='1375010'>See, this is the probability that this last guys is going</span>
  <span m='1378970'>to get selected.</span> </p><p><span m='1379580'>It's not
  the probability that it's the last guy getting</span> <span
  m='1382160'>selected, given that the others haven't been select.</span>
  </p><p><span m='1385970'>Trust me, it's right.</span> </p><p><span
  m='1388650'>Are you thinking it ought to be 1?</span> </p><p><span
  m='1389720'>STUDENT: What?</span> </p><p><span m='1390592'>PATRICK WINSTON:
  Were you thinking it ought to be 1?</span> </p><p><span m='1393080'>STUDENT:
  No, I was thinking that I was wondering why you</span> <span m='1397326'>were
  re-rolling the dice, so to speak.</span> </p><p><span m='1399460'>PATRICK
  WINSTON: You are re-rolling the dice.</span> </p><p><span m='1400700'>You've
  got a probability each time, except for the last</span> <span
  m='1402930'>time, when, of course, you have to take it.</span> </p><p><span
  m='1404630'>There's nothing left.</span> </p><p><span m='1405200'>There's no
  other choice.</span> </p><p><span m='1406050'>STUDENT: I have a
  question.</span> </p><p><span m='1407130'>PATRICK WINSTON: Yeah,
  [INAUDIBLE].</span> </p><p><span m='1408424'>STUDENT: So when you jump from
  [INAUDIBLE], that makes sense.</span> </p><p><span m='1413244'>[INAUDIBLE]
  you're saying [INAUDIBLE].</span> </p><p><span m='1415670'>PATRICK WINSTON:
  It's the probability [INAUDIBLE] the</span> <span m='1417255'>first two
  choices.</span> </p><p><span m='1418421'>STUDENT: Yeah, but the second choice
  had probability one</span> <span m='1419837'>minus P sub c times P sub c,
  not--</span> <span m='1421570'>PATRICK WINSTON: Think about it this
  way.</span> </p><p><span m='1423410'>It's the probability you didn't choose
  the first two.</span> </p><p><span m='1426030'>So the probability you didn't
  choose the first one is one</span> <span m='1427820'>minus P sub c.</span>
  </p><p><span m='1429130'>The probability you didn't choose the next one, as
  well,</span> <span m='1431460'>because you're choosing that next one with
  probability P</span> <span m='1433596'>sub c, it's the square of it.</span>
  </p><p><span m='1439180'>So that might work better.</span> </p><p><span
  m='1440760'>Let's give it a shot.</span> </p><p><span m='1443220'>Let's go
  back to our original space choice, and we set and</span> <span
  m='1451170'>switch to the rank fitness method.</span> </p><p><span
  m='1454800'>And we'll run out 100 generations.</span> </p><p><span
  m='1459200'>Whoa!</span> </p><p><span m='1461680'>What happened there?</span>
  </p><p><span m='1462270'>That was pretty fast.</span> </p><p><span
  m='1463360'>Maybe I used a big step size.</span> </p><p><span
  m='1468714'>Yeah, that's a little bit more reasonable.</span> </p><p><span
  m='1470150'>Oops--</span> <span m='1470890'>what happened?</span> </p><p><span
  m='1473150'>It's really getting stuck on a local maximum.</span> </p><p><span
  m='1479560'>So evidently, I've choosed a constant P sub c such that it</span>
  <span m='1484370'>just drove it right up the nearest hill.</span> </p><p><span
  m='1488340'>On the other hand, if I change the step size a little bit,</span>
  <span m='1490960'>maybe I can get it to spread out.</span> </p><p><span
  m='1493690'>I sure did.</span> </p><p><span m='1495170'>And now that it's
  managed to evolve over there to find the</span> <span m='1498800'>maximum
  value, now I can clamp down on the step size again.</span> </p><p><span
  m='1505020'>And now it shows no more diversity.</span> </p><p><span
  m='1506730'>It's just locked on to that global maximum.</span> </p><p><span
  m='1510190'>So this is not unlike what evolution sometimes does.</span>
  </p><p><span m='1516190'>Sometimes, species collapse into a state where they
  don't</span> <span m='1521070'>change for 500 million or 600 million years,
  like sharks,</span> <span m='1523420'>for example.</span> </p><p><span
  m='1528120'>Sometimes, they only survive if they've got a lot of</span> <span
  m='1530780'>diversity built into their way of life so that they can</span>
  <span m='1534780'>adjust to habitat changes.</span> </p><p><span
  m='1537750'>Now, when you increase the step size, because you're</span> <span
  m='1540250'>stuck on a local maximum, it's like heating up a metal.</span>
  </p><p><span m='1544245'>You make everything kind of vibrate</span> <span
  m='1546610'>more, make bigger steps.</span> </p><p><span m='1549230'>So this
  kind of process, where you may start with a big step</span> <span
  m='1553100'>size and then gradually reduce the step size, is called</span>
  <span m='1557150'>simulated annealing, because it's like letting</span> <span
  m='1560480'>a metal cool down.</span> </p><p><span m='1562000'>So you start
  off with a big temperature-- big step size--</span> <span m='1564810'>that
  covers the space.</span> </p><p><span m='1566940'>And then you slowly reduce
  the step size, so you actually</span> <span m='1570400'>crawl up to the local
  maxima that are available.</span> </p><p><span m='1575840'>So that seemed to
  work pretty well.</span> </p><p><span m='1576960'>Let's see if we can get it
  to work on the harder</span> <span m='1579880'>problem of the moat.</span>
  </p><p><span m='1592890'>So it's not doing very well.</span> </p><p><span
  m='1594820'>Better increase the step size.</span> </p><p><span m='1601260'>No,
  it's still kind of stuck.</span> </p><p><span m='1605030'>Even though it's got
  the capacity to cross over, it's</span> <span m='1607620'>so stuck on that
  lower right-hand corner, it can't</span> <span m='1610010'>get up that
  vertical branch to get to a point where a</span> <span m='1613090'>crossover
  will produce a value up there in the upper</span> <span m='1616440'>right-hand
  corner.</span> </p><p><span m='1617040'>So we're still not home yet.</span>
  </p><p><span m='1623570'>So what's the trouble?</span> </p><p><span
  m='1625350'>The trouble is that the fitness mechanism is just</span> <span
  m='1630390'>driving things up to the local maximum.</span> </p><p><span
  m='1634090'>It's just terribly unfortunate.</span> </p><p><span
  m='1640840'>What to do?</span> </p><p><span m='1641510'>Well, here's something
  you could do.</span> </p><p><span m='1642690'>You can say, well, if the
  problem is we've lost the</span> <span m='1646330'>diversity in our
  population, then we can measure the</span> <span
  m='1649960'>diversity--</span> <span m='1651060'>not only the fitness of the
  set of individuals we're</span> <span m='1653550'>selecting from, but we can
  measure how different they are</span> <span m='1657510'>on the individuals
  we've already selected for the next</span> <span
  m='1659600'>population.</span> </p><p><span m='1661750'>In other words, we can
  get a diverse population as well as</span> <span m='1664890'>a fit population
  if, when we make our selection, we</span> <span m='1667530'>consider not only
  their fitness but how different they</span> <span m='1670490'>are from the
  individuals that have already been selected.</span> </p><p><span
  m='1674290'>So that's going to be mechanism number three.</span> </p><p><span
  m='1687410'>So now we have a space, and we can measure</span> <span
  m='1693060'>fitness along one axis--</span> <span m='1694620'>ordinary
  fitness--</span> <span m='1697620'>and this is rank space fitness, so
  that's</span> <span m='1699380'>going to be P sub c.</span> </p><p><span
  m='1701026'>There will always be some individual</span> <span m='1704150'>with
  the highest fitness.</span> </p><p><span m='1711680'>And over here--</span>
  <span m='1712600'>that might not be P sub c, actually.</span> </p><p><span
  m='1716050'>But there'll be some individual with a maximal</span> <span
  m='1717900'>fitness, and at any given step in the selection of the next</span>
  <span m='1721820'>population, there'll be some individual that's
  maximally</span> <span m='1724750'>diverse from all of the individuals that
  have been</span> <span m='1730590'>selected for the next generation so
  far.</span> </p><p><span m='1735300'>So what kind of individual would you like
  to pick for the</span> <span m='1738120'>next generation?</span> </p><p><span
  m='1740470'>Well, the one with the highest fitness rank and the one
  with</span> <span m='1744620'>the highest diversity rank.</span> </p><p><span
  m='1747250'>So what you'd really like is you'd like to have somebody</span>
  <span m='1751340'>right there.</span> </p><p><span m='1754500'>And if you
  can't have somebody right there, if there's nobody</span> <span
  m='1756830'>right there with a maximum fitness, a maximum diversity</span>
  <span m='1761200'>at the same time, then maybe you can draw in
  iso-goodness</span> <span m='1766090'>lines, like so, which are just how far
  you</span> <span m='1769220'>are from that ideal.</span> </p><p><span
  m='1772510'>So let's summarize.</span> </p><p><span m='1774630'>You've got to
  pick some individuals for the next</span> <span m='1776140'>population.</span>
  </p><p><span m='1777165'>When we pick the first individual, all we've got
  to</span> <span m='1780540'>go on is how fit the individual is, because
  there's</span> <span m='1783560'>nobody else in that next generation.</span>
  </p><p><span m='1785800'>After the first individual is selected, then we can
  look at</span> <span m='1790620'>our set of candidates, and we can say which
  candidate would</span> <span m='1793420'>be more different from the set of
  things we've already</span> <span m='1795670'>selected than all the
  others.</span> </p><p><span m='1796850'>That would get the highest diversity
  rank and so on down</span> <span m='1800180'>the candidate list.</span>
  </p><p><span m='1802150'>So let's see how that might work.</span> </p><p><span
  m='1811330'>So we're going to use a combination of fitness rank</span> <span
  m='1814380'>and diversity rank.</span> </p><p><span m='1818990'>And we'll just
  use the simple one so far.</span> </p><p><span m='1821880'>We'll use a small
  step size, and we'll let this run 100</span> <span m='1825070'>generations to
  see what happens.</span> </p><p><span m='1831570'>Bingo.</span> </p><p><span
  m='1833120'>It crawls right up there, because it's trying to keep</span> <span
  m='1835100'>itself spread out.</span> </p><p><span m='1836520'>It uses that
  diversity measurement to do that.</span> </p><p><span m='1839372'>And at the
  same time, it's seeking high fitness, so</span> <span m='1843640'>that's why
  it's crawling up to the upper right-hand corner.</span> </p><p><span
  m='1846250'>But in the end, that diversity piece of it is keeping the</span>
  <span m='1850170'>things spread out.</span> </p><p><span m='1852140'>So
  suppose you're a shark or something.</span> </p><p><span m='1853650'>You don't
  care about diversity anymore, And we could just</span> <span m='1856020'>turn
  that off.</span> </p><p><span m='1857440'>Is that thing still running?</span>
  </p><p><span m='1863460'>Go back to fitness rank--</span> <span
  m='1864980'>bingo.</span> </p><p><span m='1866500'>So there you are-- you're
  stuck for 600 million years.</span> </p><p><span m='1872270'>So let's see if
  this will handle the moat problem.</span> </p><p><span m='1884420'>See, our
  step size is still small.</span> </p><p><span m='1887870'>We'll just let this
  run.</span> </p><p><span m='1891110'>So the diversity of P sub is keeping it
  spread out, pretty</span> <span m='1894837'>soon, bingo, it's right in
  there.</span> </p><p><span m='1897020'>It's across that big moat, because it's
  got the crossover</span> <span m='1899350'>mechanism that combines the best of
  the x's and the best</span> <span m='1901740'>of the y's.</span> </p><p><span
  m='1903570'>So that seems to work pretty well.</span> </p><p><span
  m='1907830'>OK, so see, these are some of the things that you can think</span>
  <span m='1911400'>about when you're thinking-- oh, and of course, we're
  a</span> <span m='1914570'>shark, we're going to forget about
  diversity.</span> </p><p><span m='1916830'>We'll change the selection method
  from fitness and</span> <span m='1919950'>diversity rank to just
  diversity.</span> </p><p><span m='1921245'>It collapses down on to the highest
  hill.</span> </p><p><span m='1927650'>Yeah, [INAUDIBLE], what?</span>
  </p><p><span m='1929225'>STUDENT: How does step size translate into
  mutations?</span> </p><p><span m='1932865'>PATRICK WINSTON: Oh, just
  the--</span> <span m='1935090'>question is, how does step size translate into
  mutation?</span> </p><p><span m='1939250'>Instead of allowing myself to take
  steps as big as 1/10, I</span> <span m='1942820'>might allow myself to take
  steps as big as 3/10,</span> <span m='1947680'>according to some
  distribution.</span> </p><p><span m='1952430'>So what to say about all
  this?</span> </p><p><span m='1956630'>It's very seductive, because it's
  nature, right?</span> </p><p><span m='1960000'>The trouble is, it's naive
  nature.</span> </p><p><span m='1962610'>And as evolutionary theories go, this
  is horrible.</span> </p><p><span m='1969280'>This is naive.</span>
  </p><p><span m='1971380'>So we'd like to use real evolutionary theory, except
  we</span> <span m='1973350'>don't have real evolutionary theory.</span>
  </p><p><span m='1975360'>Evolution is still a mystery.</span> </p><p><span
  m='1977780'>Some things are pretty obvious.</span> </p><p><span
  m='1980170'>You can breed fast race horses.</span> </p><p><span
  m='1982490'>That works just like so.</span> </p><p><span m='1984450'>The
  trouble is, we don't have any real good idea about how</span> <span
  m='1987200'>speciation takes place and how a lot of evolution works,</span>
  <span m='1992150'>because all these chromosomes are connected to their</span>
  <span m='1995480'>phenotype consequences in very complicated ways that
  nobody</span> <span m='1999280'>fully understands.</span> </p><p><span
  m='2001110'>So there's a great deal of magic in that genotype to</span> <span
  m='2003610'>phenotype transition that nobody really</span> <span
  m='2006580'>understands very well.</span> </p><p><span m='2008950'>So when
  people write these programs that are in the style</span> <span m='2014680'>of
  so-called genetic algorithm, they're taking a</span> <span
  m='2020270'>photograph of high school biology, and they're spending</span>
  <span m='2024720'>a long time building programs based on that naive
  idea.</span> </p><p><span m='2028920'>But that naive idea has lots of places
  for intervention,</span> <span m='2034430'>because look at all the things you
  can screw around with in</span> <span m='2038620'>that process of going from
  one generation to the next.</span> </p><p><span m='2044671'>By the way, what
  does mutation do?</span> </p><p><span m='2047110'>It's basically hill
  climbing, right?</span> </p><p><span m='2049230'>It's producing a little
  spread out, and you're using the</span> <span m='2051310'>fitness thing to
  climb the hill.</span> </p><p><span m='2054520'>So you get a lot of choices
  about how you handle that.</span> </p><p><span m='2056380'>Then you get a lot
  of choices about much</span> <span m='2057630'>crossover you're doing.</span>
  </p><p><span m='2058420'>What does crossover do?</span> </p><p><span
  m='2060275'>It kind of combines strong features of multiple</span> <span
  m='2065690'>individuals into one individual, maybe.</span> </p><p><span
  m='2070310'>So you've got all kinds of choices there.</span> </p><p><span
  m='2072139'>And then your genotype to phenotype translation--</span> <span
  m='2074120'>how do you interpret something like those zeroes and ones
  as</span> <span m='2078040'>an if-then rule, for example, as something that's
  in the</span> <span m='2080480'>hands of the designer?</span> </p><p><span
  m='2082969'>Then you've got all the rest of those things, all which are</span>
  <span m='2086719'>left up to the designer.</span> </p><p><span m='2088940'>So
  in the end, you really have to ask--</span> <span m='2091170'>when you see an
  impressive demonstration, you have to</span> <span m='2092780'>say, where does
  the credit lie?</span> </p><p><span m='2095179'>And I mean that pun
  intentionally, because usually</span> <span m='2098690'>the people who are
  claiming the credit are lying about</span> <span m='2100810'>where it's coming
  from.</span> </p><p><span m='2103380'>But nevertheless, let me give you a
  couple of examples of</span> <span m='2105300'>where this has found actual,
  bona fide practical</span> <span m='2111730'>application.</span> </p><p><span
  m='2113890'>So when you look for practical application, you might say,</span>
  <span m='2116080'>well, in what kind of problem does a good front piece</span>
  <span m='2120630'>combine with a good back piece to produce</span> <span
  m='2122580'>a good thing overall?</span> </p><p><span m='2125640'>And the
  answer is, when you're making a plan.</span> </p><p><span m='2128860'>So you
  might have a problem in planning that requires you to</span> <span
  m='2133000'>take a series of steps.</span> </p><p><span m='2139860'>And you
  might have two plans, each of which</span> <span m='2143380'>is a series of
  steps.</span> </p><p><span m='2145500'>And you might combine these to produce
  something new that's</span> <span m='2151470'>the front half of one and the
  back half of another.</span> </p><p><span m='2156710'>So that's practical
  application number one.</span> </p><p><span m='2161750'>And that requires you
  to interpret your chromosome as</span> <span m='2165310'>an indicator of the
  steps in the plan.</span> </p><p><span m='2169250'>Another example is drawn
  from a [? UROP ?]</span> <span m='2176380'>project a student did for me some
  years ago.</span> </p><p><span m='2181170'>He was a freshman.</span>
  </p><p><span m='2181670'>He came to me and said, I want to do a [? UROP ?]
  project.</span> </p><p><span m='2184235'>And I said, have you taken
  6.034?</span> </p><p><span m='2186320'>And he said no.</span> </p><p><span
  m='2187290'>And I said, go away.</span> </p><p><span m='2188570'>And he said,
  I don't want to go away.</span> </p><p><span m='2189900'>I want to do a [?
  UROP ?] project.</span> </p><p><span m='2191720'>So I said, have you read my
  book?</span> </p><p><span m='2194000'>He said no.</span> </p><p><span
  m='2194660'>I said, well, go away, then.</span> </p><p><span m='2195800'>And
  he said, I don't want to go away.</span> </p><p><span m='2197150'>I want to do
  a UROP project.</span> </p><p><span m='2199030'>So I said, I don't have any [?
  UROP ?] projects.</span> </p><p><span m='2200860'>He said, that's OK.</span>
  </p><p><span m='2201560'>I've got my own.</span> </p><p><span m='2206610'>He's
  a finance-type guy, so he was interested in whether he</span> <span
  m='2210310'>could build a rule-based expert system that could</span> <span
  m='2214180'>predict the winners at horse races.</span> </p><p><span
  m='2217680'>So his rule-based expert system consisted</span> <span
  m='2222000'>of rules like this.</span> </p><p><span m='2224750'>If x and y,
  then some conclusion.</span> </p><p><span m='2231650'>If l and m, then some
  kind of conclusion.</span> </p><p><span m='2239560'>And from these, he would
  produce rules like if x</span> <span m='2244770'>prime-- that's a slightly
  mutated version of the x</span> <span m='2249160'>antecedent--</span> <span
  m='2251070'>and m, then some conclusion.</span> </p><p><span m='2258080'>So
  it's mutation and crossover.</span> </p><p><span m='2259630'>And he was able
  to produce a system that seemed to work</span> <span m='2263165'>about as well
  as the handicappers in the newspaper.</span> </p><p><span m='2266580'>So he
  started losing money at a less fast rate.</span> </p><p><span m='2271090'>He
  is now doing something in the stock market, they say.</span> </p><p><span
  m='2275660'>Doesn't talk so much about it, though.</span> </p><p><span
  m='2279164'>But an interesting application.</span> </p><p><span m='2281380'>He
  came up with rules like, if the sum of the jockey's weight</span> <span
  m='2285050'>on the post position is low, that's good.</span> </p><p><span
  m='2289820'>Well, that makes sense in the end, because the jockey's</span>
  <span m='2292070'>weight is always between 100 and 110 pounds, and the
  post</span> <span m='2295330'>position is always between 1 and 10 or
  something, so they</span> <span m='2297930'>were commensurate values.</span>
  </p><p><span m='2300000'>And a low one is good, in fact.</span> </p><p><span
  m='2301996'>Not bad.</span> </p><p><span m='2304430'>But neither of
  those--</span> <span m='2306100'>I mean, this is real stuff.</span>
  </p><p><span m='2308590'>My company uses this sort of stuff to do</span> <span
  m='2311610'>some planning work.</span> </p><p><span m='2313760'>But neither of
  those is as impressive as the</span> <span m='2317590'>demonstration I'm about
  to show you that involves the</span> <span m='2321680'>evolution of
  creatures.</span> </p><p><span m='2324710'>And these creatures consist of
  block-like objects, like so.</span> </p><p><span m='2330580'>And they combine
  like this, and so on.</span> </p><p><span m='2334390'>And so how can you make
  a feature like that from a</span> <span m='2337950'>[? 0-1 ?]
  chromosome?</span> </p><p><span m='2339050'>Well, some of the bits in the
  chromosome are interpreted as</span> <span m='2343600'>the number of
  objects.</span> </p><p><span m='2345660'>Others are interpreted as the sizes
  of the objects.</span> </p><p><span m='2348920'>Others are interpreted as the
  structure of how the objects</span> <span m='2351575'>are articulated.</span>
  </p><p><span m='2354080'>And still others are interpreted as fixing the</span>
  <span m='2358410'>control algorithm by which the creature operates.</span>
  </p><p><span m='2363380'>So you see how that roughly goes?</span> </p><p><span
  m='2366010'>Would you like to see a film of that in action?</span>
  </p><p><span m='2369060'>Yes.</span> </p><p><span m='2370030'>OK.</span>
  </p><p><span m='2370430'>[INAUDIBLE]</span> <span m='2370780'>always likes to
  see the films.</span> </p><p><span m='2382890'>STUDENT: How would you measure
  diversity in that graph?</span> </p><p><span m='2386791'>PATRICK WINSTON: The
  question is, how do I measure the</span> <span m='2388810'>diversity of the
  graph?</span> </p><p><span m='2390050'>I did it the same way I measured the
  fitness.</span> </p><p><span m='2392610'>That is to say, I calculated the
  distance--</span> <span m='2396560'>the actual metric distance--</span> <span
  m='2398490'>of all the candidates for the next generation from all of</span>
  <span m='2401500'>the candidates that had already been selected.</span>
  </p><p><span m='2403610'>I summed that up.</span> </p><p><span m='2405602'>And
  from that sum, I could rank them according to how</span> <span
  m='2408010'>different they were from the individuals that were already</span>
  <span m='2410370'>in the next generation.</span> </p><p><span m='2411760'>It's
  like giving a rank, and then from the rank, I use that</span> <span
  m='2414470'>kind of calculation to determine a fitness, ie, a</span> <span
  m='2418550'>probability of survival, and then I just combine the two</span>
  <span m='2420510'>kinds of probabilities.</span> </p><p><span
  m='2421466'>STUDENT: So you always kept-- every time that you started</span>
  <span m='2423856'>something, [? you cached ?] those.</span> </p><p><span
  m='2425290'>And you kept everything that you've ever [INAUDIBLE].</span>
  </p><p><span m='2427680'>PATRICK WINSTON: I'm always using the individuals
  that</span> <span m='2430475'>have already been selected at every step, so
  every step is a</span> <span m='2433135'>little different because it's working
  with a new set of</span> <span m='2434860'>individuals that have already been
  selected for the next</span> <span m='2436770'>generation.</span> </p><p><span
  m='2437065'>OK?</span> </p><p><span m='2438990'>So let's see how this
  works.</span> </p><p><span m='2449080'>So this is showing the evolution
  of</span> <span m='2450940'>some swimming creatures.</span> </p><p><span
  m='2453680'>And they're evolved according to how well they can swim,
  how</span> <span m='2455910'>fast they can go.</span> </p><p><span
  m='2458040'>Some of them have quite exotic mechanisms, and some of them</span>
  <span m='2460390'>quite natural.</span> </p><p><span m='2461220'>That looked
  like a sperm cell floating away there.</span> </p><p><span m='2469440'>Once
  you have these things evolving, then of course, you</span> <span
  m='2471490'>can get groups of them to evolve together.</span> </p><p><span
  m='2479640'>So you saw already some that were evolving to swim.</span>
  </p><p><span m='2484160'>These are evolving to move around on the land.</span>
  </p><p><span m='2488270'>It's interesting-- this was done by Karl Sims, who at
  the</span> <span m='2492580'>time was at a then-thriving company, Thinking
  Machines, a</span> <span m='2495500'>fresh spinoff from MIT.</span>
  </p><p><span m='2497320'>So he was using a vastly parallel computer,
  super</span> <span m='2501200'>powerful for its day, thousands of</span> <span
  m='2502760'>processors, to do this.</span> </p><p><span m='2504710'>And it was
  a demonstration of what you could do</span> <span m='2506170'>with lots of
  computing.</span> </p><p><span m='2508330'>In the early stages of the
  experimentation, though, its</span> <span m='2512340'>notion of physics wasn't
  quite complete, so some of the</span> <span m='2515260'>creatures evolved to
  move by hitting themselves in the</span> <span m='2518050'>chest and not
  knowing about the conservation of momentum.</span> </p><p><span m='2523000'>I
  thought that was just great.</span> </p><p><span m='2529150'>So here they are,
  out doing some further--</span> <span m='2547190'>So you look at these, and
  you say, wow, there must be</span> <span m='2549700'>something to this.</span>
  </p><p><span m='2550630'>This is interesting.</span> </p><p><span
  m='2552120'>These are complicated.</span> </p><p><span m='2560650'>I think
  this is one of the ones that was trained,</span> <span m='2562930'>initially,
  to swim and then to do land locomotion.</span> </p><p><span m='2570760'>So
  eventually, Karl got around to thinking about how to make</span> <span
  m='2576670'>these things evolve so that they would compete for food.</span>
  </p><p><span m='2582960'>That's the fastest, I think, by the way, of the
  land</span> <span m='2585980'>locomotors.</span> </p><p><span m='2588630'>So
  that was training them to-- evolving them to jump.</span> </p><p><span
  m='2591990'>This is evolving them to follow a little red dot.</span>
  </p><p><span m='2597680'>Some of them have stumbled upon quite exotic methods,
  as</span> <span m='2601910'>you can see.</span> </p><p><span m='2606380'>Seem
  to be flailing around, but somehow manage to--</span> <span m='2609880'>sort
  of like watching people take a quiz.</span> </p><p><span m='2616680'>Making
  progress on it.</span> </p><p><span m='2622590'>But now we're on to the food
  competition.</span> </p><p><span m='2645590'>So some of them go for the food,
  and some of them go to</span> <span m='2648260'>excluding their opponent from
  the food, not actually caring</span> <span m='2652240'>too much about whether
  they get it.</span> </p><p><span m='2653670'>That's sort of what children
  do.</span> </p><p><span m='2672110'>There's a kind of hockey player--</span>
  <span m='2675070'>now, here's two hockey players.</span> </p><p><span
  m='2676270'>Watch this.</span> </p><p><span m='2677944'>They're kind
  of--</span> <span m='2684940'>one succeeds--</span> <span m='2685990'>it
  reminds me a little bit of hockey, rugby,</span> <span m='2688270'>something
  like that.</span> </p><p><span m='2689970'>Sometimes, they just get kind of
  confused, go right after</span> <span m='2694400'>their opponent, forgetting
  about the food.</span> </p><p><span m='2711800'>Gives up.</span> </p><p><span
  m='2715260'>I think these are the overall winners in</span> <span
  m='2718835'>this elimination contest.</span> </p><p><span m='2721740'>I can't
  quite get there.</span> </p><p><span m='2724170'>OK, so you look at that, and
  you say, wow, that's cool.</span> </p><p><span m='2726840'>Genetic algorithms
  must be the way to go.</span> </p><p><span m='2730322'>I remember the first
  time I saw this film.</span> </p><p><span m='2732790'>It was over in
  Kresge.</span> </p><p><span m='2733790'>I was walking out of the auditorium
  with Toma Poggio</span> <span m='2737930'>And we looked at each other, and we
  said the same thing</span> <span m='2741500'>simultaneously.</span>
  </p><p><span m='2744180'>We didn't say that genetic algorithms were the way to
  go.</span> </p><p><span m='2747500'>What we said was, wow, that space is rich
  in solutions.</span> </p><p><span m='2752520'>What we were amazed by was not
  that simple-minded genetic</span> <span m='2755620'>algorithms produced
  solutions but that the space was so rich</span> <span m='2759070'>with
  solutions that almost any mechanism that was looking</span> <span
  m='2761800'>around in that space would find them.</span> </p><p><span
  m='2764100'>But there's yet another way of thinking about it, and that
  is</span> <span m='2766190'>you could say, wow, look at how smart Karl Sims
  is,</span> <span m='2770270'>because Karl Sims is the one who had his hands on
  all the</span> <span m='2772890'>levers, all those choices.</span>
  </p><p><span m='2775050'>And I kept emphasizing, all those choices that
  enabled him</span> <span m='2778950'>to trick this thing, in some sense, into
  stumbling across</span> <span m='2783240'>the solutions in a space that was
  guaranteed to</span> <span m='2785510'>be rich with solutions.</span>
  </p><p><span m='2787750'>So you have to ask--</span> <span m='2789430'>so
  first of all, diversity is good.</span> </p><p><span m='2791270'>We noticed
  when we put diversity into the genetic</span> <span m='2793690'>algorithm
  calculations, we were much</span> <span m='2795540'>better at finding
  solutions.</span> </p><p><span m='2796750'>But the next gold star idea that
  I'd really like to have</span> <span m='2799845'>you go away with is the idea
  that you have to ask where the</span> <span m='2802670'>credit lies.</span>
  </p><p><span m='2803500'>Does it lie with the ingenuity of the programmer or
  with the</span> <span m='2806930'>value of the algorithm itself?</span>
  </p><p><span m='2809230'>In this case, impressive as it is, the credit lies in
  the</span> <span m='2812880'>richness of the space and in the intelligence of
  the</span> <span m='2815250'>programmer, not necessarily in the idea of
  genetic</span> <span m='2818000'>algorithms.</span> </p><p></p>
embedded_media:
  - uid: 668514e7b1a64e1e1f935bb1baa284ef
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: kHyNqSnzP8Y
  - uid: 6d5a92ca72080c7ac1e157981f56dee7
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-13-learning-genetic/id765641080?i=194473730
  - uid: ac7e3f21b05c249fde9c3c377dc7add0
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.034F10/MIT6_034F10_lec13_300k.mp4'
  - uid: 7fd8801fd850a0223a0207b816a4ab55
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/kHyNqSnzP8Y/default.jpg'
  - uid: e8c11f95a6b56e0113dec9d5132a023a
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: kHyNqSnzP8Y
  - uid: 63e437417a6556ad0522cea854cc1021
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: kHyNqSnzP8Y.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-13-learning-genetic-algorithms/kHyNqSnzP8Y.srt
  - uid: f3326dde6b810a04b82d3b87ed3a6f15
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: kHyNqSnzP8Y.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/lecture-videos/lecture-13-learning-genetic-algorithms/kHyNqSnzP8Y.pdf
  - uid: 288a073db511399783969b4781694301
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: d1bed54eeec49e0f60dfbfad12276bdc
    parent_uid: 94a831264c372f49131ba025945d85ee
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
