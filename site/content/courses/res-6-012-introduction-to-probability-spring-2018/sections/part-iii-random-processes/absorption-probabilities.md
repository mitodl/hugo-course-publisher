---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: vEsUsaK1HBk
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    title: Video-YouTube-Stream
    type: Video
    uid: a488838f92ef569367253717ea0badfa
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/vEsUsaK1HBk/default.jpg'
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 1e751fb4c6a7aecd581cf3583f3803e4
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: vEsUsaK1HBk
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d40b756cd87875e5ece9356925f3d2ef
  - id: vEsUsaK1HBk.srt
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/absorption-probabilities/vEsUsaK1HBk.srt
    title: 3play caption file
    type: null
    uid: 66506623c9a9b3a8023f2548c2a45f62
  - id: vEsUsaK1HBk.pdf
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/absorption-probabilities/vEsUsaK1HBk.pdf
    title: 3play pdf file
    type: null
    uid: 0b73394616a1df985f43adfe64810bed
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4a03afabbb9ff3f1e1d85c7a34e71513
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 5649d6239954ce3098b6e19fa07d6cbf
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L26-06_300k.mp4
    parent_uid: 032e7640350e2a6ffcc7ce13f65e0b7a
    title: Video-Internet Archive-MP4
    type: Video
    uid: 042a2296c97ddede7d2ef2a40acf394e
inline_embed_id: 10656535absorptionprobabilities21837845
order_index: 2312
parent_uid: ea0e960c7d6bb5ec3c28c2657fe85c0d
related_resources_text: ''
short_url: absorption-probabilities
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-iii-random-processes/absorption-probabilities
title: Absorption Probabilities
transcript: >-
  <p><span m='980'>In this video, we are going to calculate</span> <span
  m='3360'>interesting quantities that have to do</span> <span m='5270'>with the
  short-term behavior of Markov chains as opposed</span> <span m='8700'>to those
  dealing with long-term steady-state behaviors.</span> </p><p><span
  m='12650'>But first, let us introduce the notion of absorbing state.</span>
  </p><p><span m='16690'>As indicated in this definition, an absorbing state
  is</span> <span m='20570'>a recurrent state from which you cannot escape once
  you get</span> <span m='25190'>to it.</span> </p><p><span m='25980'>The
  transition probabilities from k to k is 1.</span> </p><p><span m='29450'>So in
  some sense, you get absorbed by the state.</span> </p><p><span m='34870'>For
  example, consider this transition probability graph.</span> </p><p><span
  m='38560'>States 4 and 5 are both absorbing states.</span> </p><p><span
  m='42960'>Indeed, when you get to 4, you stay in 4.</span> </p><p><span
  m='46990'>Or when you get to 5, you stay in 5.</span> </p><p><span
  m='49910'>State 1, 2, and 3 are transient states.</span> </p><p><span
  m='55800'>So if the Markov chain initially started in 4, then</span> <span
  m='60010'>it will stay in 4 forever.</span> </p><p><span m='61900'>If it
  started in 5, it's going to stay in 5 forever.</span> </p><p><span
  m='65830'>But what if the Markov chain started in either 1, 2, or 3?</span>
  </p><p><span m='70770'>Eventually, after some moving around,</span> <span
  m='73420'>you will either make that transition to state 4</span> <span
  m='77370'>and get absorbed by it, or you're</span> <span m='79740'>going to do
  that transition and get to 5</span> <span m='82990'>and get absorbed by the
  state 5.</span> </p><p><span m='85870'>So the question is, are you going to
  end up in 4,</span> <span m='89460'>or are you going to end up in 5?</span>
  </p><p><span m='91800'>Well, we don't know for sure.</span> </p><p><span
  m='93610'>These correspond to random events.</span> </p><p><span m='96090'>But
  can we say anything about their probabilities?</span> </p><p><span
  m='99070'>Well, let us try to calculate the probability that you end up</span>
  <span m='102729'>in 4 as an example.</span> </p><p><span m='104590'>First, it
  seems plausible that this probability of ending in 4</span> <span
  m='110050'>will depend on where you started.</span> </p><p><span m='111950'>If
  you start in 2, you probably have more chances</span> <span m='115289'>of
  getting to 4 than if you started from 3.</span> </p><p><span
  m='117850'>Because if you start from 2, at the next step</span> <span
  m='120770'>you have immediately the chance of getting to 4.</span>
  </p><p><span m='124250'>But if you start from 3, there is some chance</span>
  <span m='126890'>that you will go to 5 and never go to 4,</span> <span
  m='129340'>or you will have to go through 2 in order to get to 4
  anyway.</span> </p><p><span m='134310'>So it looks like the probability of
  reaching 4,</span> <span m='137010'>given you started from 2, will be
  bigger</span> <span m='139040'>than if you started from 3.</span> </p><p><span
  m='140940'>Now, from 1, it's unclear.</span> </p><p><span m='143930'>Let us be
  systematic then.</span> </p><p><span m='145960'>Let us consider all possible
  probabilities to end up</span> <span m='148829'>in 4 depending on the initial
  state.</span> </p><p><span m='151800'>So let us ask this question, what</span>
  <span m='154290'>is the probability, a of i, that the chain eventually</span>
  <span m='157829'>settles in 4 given that it started in i?</span> </p><p><span
  m='161470'>So in other words, a of i is the probability</span> <span
  m='164780'>that you end up in 4 given that you started in i.</span>
  </p><p><span m='169170'>Now, the answer to that question is very easy for some
  cases.</span> </p><p><span m='173630'>If you start in 4, the
  probability</span> <span m='176329'>that you end up in 4 is 1.</span>
  </p><p><span m='178740'>And if you start in 5, the probability</span> <span
  m='182030'>that you end up in 4 is 0.</span> </p><p><span m='184040'>There is
  no way that you can go from 5 to 4.</span> </p><p><span m='187600'>What about
  the other cases?</span> </p><p><span m='189120'>Well, it's not so
  clear.</span> </p><p><span m='192230'>Let us consider, for example, that you
  started from 2.</span> </p><p><span m='195600'>What could happen next?</span>
  </p><p><span m='197270'>Well, from state 2, let's build a tree.</span>
  </p><p><span m='199780'>You can either, with a probability 0.2, go to
  4.</span> </p><p><span m='205340'>Or with a probability 0.8, you will go to
  1.</span> </p><p><span m='211210'>Now, in the first case, you're done.</span>
  </p><p><span m='213380'>You reach 4.</span> </p><p><span m='215280'>But in the
  second case, you arrive in 1.</span> </p><p><span m='217900'>And what happens
  next?</span> </p><p><span m='219450'>You don't know.</span> </p><p><span
  m='220590'>But what you know is that from that state,</span> <span
  m='223360'>either eventually you go and get trapped in 5,</span> <span
  m='228070'>or you go and eventually get trapped in 4.</span> </p><p><span
  m='232150'>What are the probabilities of these events?</span> </p><p><span
  m='234740'>Well, we don't know.</span> </p><p><span m='236560'>But one of them
  has been defined before.</span> </p><p><span m='239390'>This represents the
  probability of ending up</span> <span m='241900'>in 4 given that you start in
  1, and that has been defined here.</span> </p><p><span m='246420'>This is
  nothing else than a1.</span> </p><p><span m='250030'>So the overall
  probability of interest for us,</span> <span m='252870'>which is a of 2, using
  the total probability theorem,</span> <span m='257070'>you can enumerate all
  options.</span> </p><p><span m='259410'>It's with probability 0.2 you will go
  to 4.</span> </p><p><span m='262940'>And then the probability of going</span>
  <span m='264450'>to 4 given that you started in 4 is a4 plus 0.8 times
  a1.</span> </p><p><span m='272835'>Now, a of 4 is, of course, 1, as we have
  discussed before.</span> </p><p><span m='277310'>So we get the relation
  between a2 and a of 1.</span> </p><p><span m='282390'>Now, of course, you can
  do the same thing for the other state.</span> </p><p><span m='285780'>For
  example, if you started from 1, what can happen next?</span> </p><p><span
  m='291000'>Well, you can go to 2 with a probability 0.6.</span> </p><p><span
  m='294909'>Once you're in 2, you're asking yourself,</span> <span
  m='297190'>what is the probability of reaching 4?</span> </p><p><span
  m='299030'>Well, by definition, it's a2.</span> </p><p><span m='302400'>Or
  from 1, you go to 3 with a probability 0.4.</span> </p><p><span m='307940'>And
  given that you have done that,</span> <span m='309690'>what is the probability
  that eventually you reach 4?</span> </p><p><span m='312140'>It's a3.</span>
  </p><p><span m='315140'>If initially you start with a3, what can happen
  next?</span> </p><p><span m='317660'>Again, with probability 0.3, you will end
  up in state 2.</span> </p><p><span m='322960'>And there, a of 2 is the
  probability of interest.</span> </p><p><span m='326740'>Or with a probability
  0.5, you go to state 1.</span> </p><p><span m='330830'>And in that case, you
  get a of 1.</span> </p><p><span m='334070'>And finally, with a probability
  0.2, you get trapped in 5.</span> </p><p><span m='338505'>All right?</span>
  </p><p><span m='339090'>You can write if you want, but 0.2, and you get
  trapped in 5.</span> </p><p><span m='343420'>But we know that a of 5 is 0, so
  this term will disappear.</span> </p><p><span m='348860'>So in the end, you
  get a system here.</span> </p><p><span m='351930'>After you replace a4 by 1
  and a5 by 0,</span> <span m='356690'>you get a system of three linear
  equations with three unknown.</span> </p><p><span m='362020'>And it is easy to
  solve.</span> </p><p><span m='363340'>I will not do that.</span> </p><p><span
  m='364310'>You can do it yourself.</span> </p><p><span m='365760'>But here are
  the results.</span> </p><p><span m='368550'>You will get a of 1 equals 18/28,
  a of 2 will be 20/28,</span> <span m='377950'>and a of 3 will be 15/28.</span>
  </p><p><span m='383390'>Now I expressed them so that we can compare them
  easily.</span> </p><p><span m='386780'>And as a sanity check, you can
  verify</span> <span m='389210'>that indeed the probability starting from
  2</span> <span m='392560'>will be larger than the probability starting from
  3.</span> </p><p><span m='395500'>And it turns out that a of 1 will</span>
  <span m='398090'>be in between the other two.</span> </p><p><span
  m='400100'>So these probabilities are consistent</span> <span m='402860'>with
  our previous intuitions.</span> </p><p><span m='405990'>As an aside, note that
  you could have written a system of five</span> <span m='410080'>linear
  equations with five unknown, the five</span> <span m='413320'>unknown
  corresponding to the five states possible.</span> </p><p><span m='416590'>In
  fact, we had our five equations here.</span> </p><p><span m='419290'>Here was
  one, another one here, and 1, 2, 3, so 3 plus 2, 5.</span> </p><p><span
  m='425530'>Of course, this one was easy.</span> </p><p><span m='427030'>It was
  a4 equals 1 and a5 equals 0 that you can replace then</span> <span
  m='432470'>there, and you get a limited or restricted or smaller system</span>
  <span m='436490'>of three equations with three unknown.</span> </p><p><span
  m='439550'>Now, what if you had been interested instead in finding</span>
  <span m='443180'>the probability b of i that the chain eventually</span> <span
  m='447330'>settles in 5 given you started in i.</span> </p><p><span
  m='451250'>How to do that?</span> </p><p><span m='452210'>Well, you can repeat
  exactly all this calculation</span> <span m='455540'>that we have done, but
  looking at 5 as the state of interest.</span> </p><p><span m='460990'>But of
  course, you don't have to do this.</span> </p><p><span m='463580'>For any
  state i, given that you started in i,</span> <span m='467950'>you will
  eventually with probability 1</span> <span m='470300'>end up in either 4 or
  5.</span> </p><p><span m='472860'>So you have a of i plus b of i equals 1 for
  all possible i.</span> </p><p><span m='480660'>So once you have calculated a1,
  a2, a3, a4, and a5,</span> <span m='485930'>you get b1, b2, b3, b4, and b5 by
  using this formula.</span> </p><p><span m='493020'>To sum up, in general, the
  calculation</span> <span m='496200'>of the probabilities to reach a given
  absorbing state</span> <span m='501560'>s starting from any state i of a
  general Markov</span> <span m='506010'>chain with m states-- so let's
  assume</span> <span m='508550'>that you have m states-- will be the unique
  solution of a system</span> <span m='513090'>of m equations with m unknowns,
  with the additional conditions</span> <span m='522730'>that a of s equals 1
  and a of s prime</span> <span m='530000'>equals 0 for the other absorbing
  states.</span> </p><p><span m='542630'>Now, going back to the following
  question</span> <span m='544730'>that we posed at the end of the review</span>
  <span m='546930'>on steady-state behavior, we had this diagram,</span> <span
  m='550520'>and we wanted to know which recurrent class this chain</span> <span
  m='555020'>would end up if it started in one of these transient states.</span>
  </p><p><span m='559170'>Well, we can now answer this question.</span>
  </p><p><span m='561650'>For the purpose of this calculation,</span> <span
  m='563830'>the trick is simply to think of a recurrent class as one</span>
  <span m='568000'>big absorbing state and go through the calculation</span>
  <span m='571420'>as we have done here.</span> </p><p><span m='573320'>So think
  about this class, for example, as being one</span> <span m='577200'>big state,
  an absorbing state.</span> </p><p><span m='581100'>And now forget about the
  inside and calculate the probability</span> <span m='585070'>that you end up
  in this class as the probability of reaching</span> <span m='588730'>this
  absorbing state given that you started in 1, 2, and 4,</span> <span
  m='593820'>and you do the same kind of calculation.</span> </p><p></p>
uid: 032e7640350e2a6ffcc7ce13f65e0b7a
type: courses
layout: video
---
