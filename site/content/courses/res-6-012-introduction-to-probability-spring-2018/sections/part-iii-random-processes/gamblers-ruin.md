---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: Ne2lmAZI4-I
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    title: Video-YouTube-Stream
    type: Video
    uid: 466875de6c435ec8a0616e0d1995e1f7
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/Ne2lmAZI4-I/default.jpg'
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 10edd6c5b199b315be2baa79139254f7
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: Ne2lmAZI4-I
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ec1a685d524c75b9f3251e951b0a9f7b
  - id: Ne2lmAZI4-I.srt
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/gamblers-ruin/Ne2lmAZI4-I.srt
    title: 3play caption file
    type: null
    uid: 7d9f74cd538278a801e2631e252b04b5
  - id: Ne2lmAZI4-I.pdf
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/gamblers-ruin/Ne2lmAZI4-I.pdf
    title: 3play pdf file
    type: null
    uid: cde905a8cd7e53529c4fe999b70790fa
  - id: Caption-3Play YouTube id-SRT
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ec393599f5e26481281efb35bf2fa7a4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5b4ff620149d2d71533617bd1d13f473
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-09_300k.mp4
    parent_uid: faed89823db583e4c2c359ffc63ecb61
    title: Video-Internet Archive-MP4
    type: Video
    uid: a1ad8492be6c401dbf8230341a362fb7
inline_embed_id: 58860515gamblersruin66747144
order_index: 2339
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: gamblers-ruin
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/gamblers-ruin
title: Gambler's Ruin
transcript: >-
  <p><span m='1270'>In this last video, we illustrate</span> <span m='3910'>how
  to use the techniques we have recently</span> <span m='6210'>learned in order
  to answer some questions</span> <span m='8880'>about the following classical
  problem--</span> <span m='12250'>consider a gambler putting a bet of $1</span>
  <span m='16410'>in a game that has a pay off of one dollar if she wins.</span>
  </p><p><span m='20380'>We assume that this is a fair game,</span> <span
  m='23320'>so the probability of winning $1 on each play of the game</span>
  <span m='27320'>is one-half.</span> </p><p><span m='28250'>And so the
  probability of losing the bet is also one-half.</span> </p><p><span
  m='32910'>Suppose that she starts with i dollars</span> <span m='36150'>and
  continues to play the game until either she</span> <span m='38930'>reaches a
  goal of n dollars, or she has no money left, whatever</span> <span
  m='44380'>comes first.</span> </p><p><span m='46950'>Let us consider a first
  question, which</span> <span m='49600'>is the following-- what is the
  probability that she ends up</span> <span m='54070'>with having her goal of n
  dollars?</span> </p><p><span m='58840'>Now, how to go about solving this
  problem?</span> </p><p><span m='62830'>Can we think of a Markov chain
  representation</span> <span m='65080'>for this problem?</span> </p><p><span
  m='67200'>But in that case, what would be good choices</span> <span
  m='69620'>for the definition of the states?</span> </p><p><span m='72629'>Let
  us think.</span> </p><p><span m='73170'>At any point in time, the only
  relevant information</span> <span m='76730'>is the amount of money the gambler
  has available.</span> </p><p><span m='81150'>How she got to that amount in the
  past is irrelevant.</span> </p><p><span m='85970'>And if this amount is
  neither zero nor n,</span> <span m='91030'>then she will play again.</span>
  </p><p><span m='92729'>And the next state will be a number</span> <span
  m='95400'>which will be increased or decreased by one unit,</span> <span
  m='98750'>depending on winning or losing the next bet.</span> </p><p><span
  m='102300'>So we can represent the possible evolution of this game</span>
  <span m='106470'>with the following probability transition graph.</span>
  </p><p><span m='109930'>So we have n plus 1 states.</span> </p><p><span
  m='112979'>This is the state where she loses all her money.</span>
  </p><p><span m='116160'>This is the state where she has i amount of
  money</span> <span m='120050'>before the next betting.</span> </p><p><span
  m='122020'>And here, this is the state n where she reaches her goal</span>
  <span m='125810'>and she can leave.</span> </p><p><span m='127320'>In terms of
  the transition probability,</span> <span m='129840'>assuming that you are at a
  given time in that state,</span> <span m='133650'>that means that you have i
  money in your pocket,</span> <span m='137210'>and you play the next
  bet.</span> </p><p><span m='139660'>With a probability one-half, you will gain
  or win.</span> </p><p><span m='143470'>And so your amount of money is i plus
  1.</span> </p><p><span m='146600'>Or you lose and your money is i minus
  1.</span> </p><p><span m='150290'>And you keep repeating until you reach
  either n or zero.</span> </p><p><span m='155340'>And then you stop.</span>
  </p><p><span m='157360'>So this is a Markov chain, and that state 0 and that
  state n</span> <span m='162900'>are absorbing states.</span> </p><p><span
  m='164579'>Once you reach them, you stay there forever.</span> </p><p><span
  m='168790'>So what this question is asking is the probability a</span> <span
  m='172360'>of i of-- starting from i, what is the probability that you</span>
  <span m='177100'>will end up in that absorbing state?</span> </p><p><span
  m='180390'>And we have done this calculation previously.</span> </p><p><span
  m='183420'>So let us repeat the technique very briefly.</span> </p><p><span
  m='187760'>Clearly here, if you start with 0 dollars,</span> <span
  m='191630'>you will never reach that.</span> </p><p><span m='192860'>So it's
  going to be 0.</span> </p><p><span m='194670'>On the other hand, if you start
  with your desired goal,</span> <span m='198170'>you don't play anymore.</span>
  </p><p><span m='199240'>So your probability is 1.</span> </p><p><span
  m='202110'>Now of course, what is of interest</span> <span m='203640'>is if i
  is strictly between 0 and n.</span> </p><p><span m='207260'>And now the
  question is how to calculate that probability.</span> </p><p><span
  m='210760'>And we have seen that the way to do</span> <span m='212550'>that is
  to look at the situation,</span> <span m='215320'>and say let's assume that
  you are in that state i.</span> </p><p><span m='219300'>And what happens
  next?</span> </p><p><span m='221500'>Well with a probability 0.5, you will
  move to that state.</span> </p><p><span m='226280'>And now you are in that
  level with i plus 1 amount of money.</span> </p><p><span m='230760'>And what
  is the probability that, given that you're here,</span> <span
  m='234410'>you're going to end up in n?</span> </p><p><span m='236079'>It's
  going to be a i plus one.</span> </p><p><span m='238740'>So it's a i plus
  one.</span> </p><p><span m='241470'>Plus the other alternative is that
  you</span> <span m='244410'>are going to lose money and end up in that
  state.</span> </p><p><span m='247570'>And there, the remaining probability to
  reach the time n</span> <span m='251780'>is a i minus 1.</span> </p><p><span
  m='254860'>So you have this kind of equation.</span> </p><p><span
  m='257870'>This is valid for all i between 0 and n.</span> </p><p><span
  m='261329'>And this is a system of equations that you can solve.</span>
  </p><p><span m='266280'>It's not very difficult to solve.</span> </p><p><span
  m='268010'>Actually, you can look in the textbook.</span> </p><p><span
  m='269910'>There will be some trick to do that.</span> </p><p><span
  m='271760'>There are many, many ways to do that.</span> </p><p><span
  m='273420'>We're not going to spend our time going into details,</span> <span
  m='276700'>but essentially if you solve that system,</span> <span
  m='279130'>you will see that the answer will be that a of i</span> <span
  m='282760'>is i over n.</span> </p><p><span m='286000'>So if you start with i
  amount of money,</span> <span m='289350'>the probability that you're going to
  reach your goal here</span> <span m='292640'>is i over n.</span> </p><p><span
  m='295100'>So here clearly, if you're extremely greedy,</span> <span
  m='298659'>and you have a very, very, very high goal,</span> <span
  m='302260'>that means n is very, very large--</span> <span m='305000'>so large
  that compared to your initial amount i,</span> <span m='308600'>n can be
  considered to be infinity.</span> </p><p><span m='310647'>Then the probability
  that you're going to reach your high goal</span> <span m='313230'>will go to
  0, where n goes to infinity.</span> </p><p><span m='318000'>So again, if you
  are extremely greedy,</span> <span m='320060'>no matter how much your fixed
  amount of initial money is,</span> <span m='323450'>the probability that you
  will stop the game reaching</span> <span m='326640'>your goal is going to be
  increasingly small.</span> </p><p><span m='331220'>And since the other state
  is 1 minus this one,</span> <span m='334720'>the priority that you're going to
  get ruined</span> <span m='337460'>is going to be closer to 1.</span>
  </p><p><span m='340710'>All right, so we have that answer here.</span>
  </p><p><span m='343850'>What about the next question?</span> </p><p><span
  m='346970'>Next question is the following-- what</span> <span m='348920'>would
  be the expected wealth at the end?</span> </p><p><span m='352440'>Again, this
  is a Markov chain where</span> <span m='355190'>there are two absorbing
  states.</span> </p><p><span m='356900'>All the others are transient.</span>
  </p><p><span m='358960'>You're guaranteed with probability 1</span> <span
  m='361020'>that you will reach either 0 or n.</span> </p><p><span
  m='364330'>So it's a valid question to know once you reach either 0</span>
  <span m='367910'>or n, what is the expected wealth at the end?</span>
  </p><p><span m='371330'>Well, if you arrive here, it's going to be 0.</span>
  </p><p><span m='374530'>And if you arrive here, it's going to be n.</span>
  </p><p><span m='376790'>So the expected value of that wealth</span> <span
  m='379450'>will be 0 times the probability of ending in that, plus n
  times</span> <span m='383320'>the probability of getting there.</span>
  </p><p><span m='385120'>So it's going to be that expression-- 0 times</span>
  <span m='388210'>1 minus a of i, plus n times a of i.</span> </p><p><span
  m='393040'>And here what we then get is n times i over n, which is i.</span>
  </p><p><span m='399970'>Which is quite interesting.</span> </p><p><span
  m='401130'>This is exactly how you started.</span> </p><p><span m='405590'>So
  in some sense, in expectation there is no free lunch here.</span> </p><p><span
  m='409570'>The next question is-- how long does the gambler</span> <span
  m='412500'>expect to stay in the game?</span> </p><p><span m='414460'>We know
  that eventually, he will either reach 0</span> <span m='417850'>or n with
  probability 1.</span> </p><p><span m='419830'>The question is-- how long is it
  going to take?</span> </p><p><span m='423160'>Again, we have seen in a
  previous video</span> <span m='425830'>that this is essentially calculating
  the expectation</span> <span m='429670'>to absorption.</span> </p><p><span
  m='431130'>And we know how to do that.</span> </p><p><span m='433030'>So let's
  recap what we had said.</span> </p><p><span m='435550'>If you define mu of i
  to be the expected number of plays</span> <span m='439770'>starting from i,
  what do you have?</span> </p><p><span m='442540'>Well, for i equal to 0 or i
  equals n,</span> <span m='445880'>either way-- if you start from here,</span>
  <span m='448010'>or you start from here-- the expected number of plays</span>
  <span m='450390'>is 0, right?</span> </p><p><span m='451440'>Because you're
  done.</span> </p><p><span m='453520'>And otherwise, you use the same kind of
  derivation that we had.</span> </p><p><span m='457930'>If you start at i
  between 1 and n,</span> <span m='462470'>then you will see that mu of i, after
  one transition, plus 1,</span> <span m='468480'>you will either be in state i
  plus 1-- in that case,</span> <span m='473570'>this expectation will be mu i
  plus 1 --</span> <span m='477200'>or you will be in state i minus 1.</span>
  </p><p><span m='480450'>In that case, the expectation is mu i minus 1.</span>
  </p><p><span m='485680'>So this is an equation that you have,</span> <span
  m='488470'>which is almost the same as this one,</span> <span
  m='490370'>except that you have a plus 1 in it.</span> </p><p><span
  m='492830'>And as we had discussed before, in general</span> <span
  m='497140'>this is the kind of formula that you have.</span> </p><p><span
  m='499620'>Now you can solve the system.</span> </p><p><span m='501680'>I will
  let you do that.</span> </p><p><span m='502890'>There are many ways to do
  this.</span> </p><p><span m='504300'>But the solution that you're going to
  have</span> <span m='506700'>is that mu i will be equals to i times n minus
  i.</span> </p><p><span m='514610'>This is the result.</span> </p><p><span
  m='518390'>Finally what would be the case if you</span> <span
  m='520530'>didn't have a fair game-- for example, unfair to the gambler</span>
  <span m='525510'>or unfair to the casino?</span> </p><p><span m='528660'>What
  we mean here is that the probability p</span> <span m='532550'>is different
  from 0.5.</span> </p><p><span m='535930'>So here, instead of 0.5, you have p
  everywhere.</span> </p><p><span m='542160'>And here, of course, you have 1
  minus p</span> <span m='544570'>everywhere on this side.</span> </p><p><span
  m='548400'>So you have a probability p of winning,</span> <span m='550090'>and
  probability 1 minus p of losing each bet.</span> </p><p><span m='554180'>So
  you might ask the same question-- well,</span> <span m='557520'>for the
  probability a of i, you still have 0 here.</span> </p><p><span m='561470'>You
  still have 1 here.</span> </p><p><span m='563380'>The formula that you would
  write here,</span> <span m='565180'>instead of writing it this way, it</span>
  <span m='567330'>would be-- you start from here with a probability p.</span>
  </p><p><span m='570550'>You end up here.</span> </p><p><span m='571410'>And
  with a probability of 1 minus p, you end up there.</span> </p><p><span
  m='575350'>And the expression that you get for a of i--</span> <span
  m='578360'>if you define r to be 1 minus p over p-- you will see</span> <span
  m='583970'>that a of i is going to be 1 minus r to the power of i</span> <span
  m='589820'>over 1 minus r to the power n.</span> </p><p><span m='595060'>And
  what would be the expected amount of time she will play?</span> </p><p><span
  m='599510'>Instead of that equation, if you solve it,</span> <span
  m='603500'>you would have mu of i equals r plus 1 divided</span> <span
  m='607830'>by r minus 1 times i minus n times 1 minus r to the i</span> <span
  m='616840'>divided by 1 minus r to the power n.</span> </p><p><span
  m='621330'>Because you would have here again p, and 1 minus p here.</span>
  </p><p><span m='628890'>And you can see that when p is strictly less than
  one-half--</span> <span m='633490'>in other words, it's even worse for this
  gambler--</span> <span m='636110'>then a of i-- which is the probability of
  getting</span> <span m='640860'>to this favorable state-- will also go to
  0</span> <span m='645600'>when n goes to infinity.</span> </p><p><span
  m='648290'>And in the case where p is strictly greater than 0.5--</span> <span
  m='652370'>that means that she has some favored odd on her favor--</span>
  <span m='656930'>then in that case, this number r to the power n will go to
  zero.</span> </p><p><span m='661880'>And 1 minus r of i will represent the
  probability</span> <span m='665970'>that she would become infinitely
  rich.</span> </p><p><span m='668730'>In other words, being very greedy and n
  going to infinity.</span> </p><p><span m='672880'>This will go to 0 and 1
  minus r to the power of i</span> <span m='676840'>is the probability that she
  would get infinitely rich.</span> </p><p></p>
uid: faed89823db583e4c2c359ffc63ecb61
type: course
layout: video
---
