---
about_this_resource_text: '<p><strong>Instructor:</strong> John Tsitsiklis</p>'
embedded_media:
  - id: Video-YouTube-Stream
    media_location: '-k8WU-KB0rk'
    parent_uid: 2b2955705897c99851f452afb7997454
    title: Video-YouTube-Stream
    type: Video
    uid: 1cfb3411e2c3cf9774e0e65e1d330746
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/-k8WU-KB0rk/default.jpg'
    parent_uid: 2b2955705897c99851f452afb7997454
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 74964a73b1ed61a9223e5178da098835
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: '-k8WU-KB0rk'
    parent_uid: 2b2955705897c99851f452afb7997454
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 03ab2b2bf77fd34116bdf31f48d1b755
  - id: '-k8WU-KB0rk.srt'
    parent_uid: 2b2955705897c99851f452afb7997454
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-counting-principle/-k8WU-KB0rk.srt
    title: 3play caption file
    type: null
    uid: 987c0e567c7ae1b6b40f1753bc4009c2
  - id: '-k8WU-KB0rk.pdf'
    parent_uid: 2b2955705897c99851f452afb7997454
    technical_location: >-
      https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-counting-principle/-k8WU-KB0rk.pdf
    title: 3play pdf file
    type: null
    uid: 36261a864932aedff4ee06ee40044401
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 2b2955705897c99851f452afb7997454
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 6bece34906994cd5ecc79c3b76794319
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 2b2955705897c99851f452afb7997454
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: a9e9a649b8f089aee0e8527fd4b10fc3
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES.6-012S18/MITRES6_012S18_L04-02_300k.mp4
    parent_uid: 2b2955705897c99851f452afb7997454
    title: Video-Internet Archive-MP4
    type: Video
    uid: 455aa898626a2e85b4f45ba7db05ddd5
inline_embed_id: 35308908thecountingprinciple48753005
order_index: 393
parent_uid: 9ca6b310dc93095c9ac0f0e5f95e6930
related_resources_text: ''
short_url: the-counting-principle
technical_location: >-
  https://ocw.mit.edu/resources/res-6-012-introduction-to-probability-spring-2018/part-i-the-fundamentals/the-counting-principle
title: The Counting Principle
transcript: >-
  <p><span m="590">In this segment we introduce a simple but powerful tool,
  the</span> <span m="5150">basic counting principle, which we will be using
  over</span> <span m="8450">and over to deal with counting
  problems.</span></p><p><span m="11820">Let me describe the idea through a
  simple example.</span></p><p><span m="15070">You wake up in the morning and
  you find that you have in your</span> <span m="18380">closet 4 shirts, 3 ties,
  and 2 jackets.</span></p><p><span m="23120">In how many different ways can you
  get dressed today?</span></p><p><span m="27000">To answer this question, let
  us think of the process of</span> <span m="30580">getting dressed as
  consisting of three steps, three stages.</span></p><p><span m="36220">You
  first choose a shirt, let's say this one, and you</span> <span m="40910">have
  4 choices of shirts.</span></p><p><span m="44600">But each shirt can be used
  together with 1 of the 3</span> <span m="50600">available ties to make 3
  different shirt-tie</span> <span m="55710">combinations.</span></p><p><span
  m="58520">But since we had 4 choices for the shirt, this means that we</span>
  <span m="63540">have 4 times 3, equals 12, shirt-tie
  combinations.</span></p><p><span m="69970">Finally, you choose a
  jacket.</span></p><p><span m="72160">Each shirt-tie combination can go
  together with either</span> <span m="75240">jacket, and so the fact that you
  have 2 jackets available</span> <span m="79400">doubles the number of options
  that you have, leading to 24</span> <span m="85320">different options
  overall.</span></p><p><span m="87340">So 24 is the answer to this simple
  problem.</span></p><p><span m="91190">And how did the number 24 come
  about?</span></p><p><span m="93530">Well, 24 is the same as the number of
  options you had in</span> <span m="97420">the first stage times the number of
  options you had in</span> <span m="100009">the second stage times the number
  of options you had in</span> <span m="103530">the third
  stage.</span></p><p><span m="105539">Let us generalize.</span></p><p><span
  m="108610">Suppose we want to construct some kind of object, and we're</span>
  <span m="111840">going to construct it through a sequential process,
  through</span> <span m="115110">a sequence of r different
  stages.</span></p><p><span m="118890">In the example that we just considered,
  the number of</span> <span m="122140">stages was equal to
  3.</span></p><p><span m="125600">At each one of the stages, you have a number
  of options that</span> <span m="129600">are available.</span></p><p><span
  m="130699">So in our example, at the first stage we had 4 options,</span>
  <span m="134500">at the second stage we had 3 options, and at the last
  stage</span> <span m="139270">we had 2 options.</span></p><p><span
  m="141990">What is important is that when you reach stage i, no matter</span>
  <span m="147930">what you chose, no matter what you did at the previous</span>
  <span m="151430">stages, the number of options that you will have
  available</span> <span m="155329">at stage i is going to be that fixed number,
  n-sub-i.</span></p><p><span m="162180">So what is the
  answer?</span></p><p><span m="164200">How many different objects can you
  construct this way?</span></p><p><span m="167500">Well, just generalizing from
  what we did in our specific</span> <span m="170950">example, the answer is the
  product of the number of</span> <span m="176500">choices or options that you
  had at each stage.</span></p><p><span m="182950">This is the counting
  principle.</span></p><p><span m="185240">It's a very simple idea, but it is
  powerful.</span></p><p><span m="188740">It will allow us to solve
  fairly</span> <span m="191140">complicated counting
  problems.</span></p><p><span m="193790">However, before we go into more
  complicated problems, let</span> <span m="197990">us first deal with a few
  relatively easy examples.</span></p><p><span m="206300">In our first example,
  let us consider license plates that</span> <span m="211660">consist of 2
  letters followed by 3 digits.</span></p><p><span m="215240">The question is,
  how many different</span> <span m="217320">license plates are
  there?</span></p><p><span m="219620">We think of the process of constructing a
  license plate</span> <span m="223250">as a sequential
  process.</span></p><p><span m="225130">At the first stage we choose a letter,
  and we have 26 choices</span> <span m="231700">for the first
  letter.</span></p><p><span m="233460">Then we need to choose the second
  letter, and we have 26</span> <span m="237690">choices for that
  one.</span></p><p><span m="239700">Then we choose the first
  digit.</span></p><p><span m="241210">We have 10 choices for
  it.</span></p><p><span m="243160">We choose the second digit, for which we
  have 10 choices.</span></p><p><span m="246870">And finally, we choose the last
  digit, for which we also</span> <span m="249460">have 10
  choices.</span></p><p><span m="250790">So if you multiply these numbers, you
  can find the</span> <span m="253880">number of different license plates that
  you can make with</span> <span m="256560">2 letters followed by 3
  digits.</span></p><p><span m="258930">Now let us change the problem a little
  bit and require that</span> <span m="263540">no letter and no digit can be
  used more than once.</span></p><p><span m="271300">So, let us think of a
  process by which we could construct</span> <span m="275960">license plates of
  this kind.</span></p><p><span m="278580">In the first stage, we choose the
  first letter that goes to</span> <span m="284480">the license plate, and we
  have 26 choices.</span></p><p><span m="288450">Now, let us go into a second
  stage where we choose the</span> <span m="291620">second
  letter.</span></p><p><span m="294070">Because we used 1 letter in the first
  stage, this means</span> <span m="297930">that there's only 25 available
  letters that can be used.</span></p><p><span m="302690">We only have 25
  choices at the second stage.</span></p><p><span m="306900">Now, let us start
  dealing with the digits.</span></p><p><span m="308790">We choose the first
  digit, and we have 10 choices for it.</span></p><p><span m="312530">However,
  when we go and choose the next digit we will only</span> <span m="317400">have
  9 choices, because 1 of the digits has</span> <span m="320780">already been
  used.</span></p><p><span m="322620">At this point, 2 digits have been used,
  which means that at</span> <span m="326450">the last stage we have only 8
  digits to choose from.</span></p><p><span m="330630">So by multiplying these
  numbers, we can find out the</span> <span m="334590">answer to this question,
  the number of license plates if</span> <span m="337590">repetition is
  prohibited.</span></p><p><span m="340860">Let us now consider a different
  example.</span></p><p><span m="346450">Suppose that we start with a set
  that</span> <span m="349450">consists of n elements.</span></p><p><span
  m="354540">What we want to do is to take these n</span> <span
  m="357130">elements and order them.</span></p><p><span m="360230">A
  terminology that's often used here is that we want to</span> <span
  m="363650">form a permutation of these n elements.</span></p><p><span
  m="367290">One way of visualizing permutations is to say that</span> <span
  m="371850">we're going to take these elements of the set, which are</span>
  <span m="374720">unordered, and we're going to place them</span> <span
  m="378010">in a sequence slots.</span></p><p><span m="380590">So we create n
  slots.</span></p><p><span m="386390">And we want to put each one of these
  elements into one of</span> <span m="391750">these slots.</span></p><p><span
  m="393500">How do we go about it?</span></p><p><span m="396350">We think of
  putting the elements into slots,</span> <span m="399760">one slot at a
  time.</span></p><p><span m="401890">We first consider the first
  slot.</span></p><p><span m="404350">We pick one of the elements and put it
  there.</span></p><p><span m="408740">How many choices do we have at this
  stage?</span></p><p><span m="410820">We have n choices, because we can pick
  any of the available</span> <span m="414260">elements and place it in that
  slot.</span></p><p><span m="416930">Next, we pick another element and put
  it</span> <span m="420420">inside the second slot.</span></p><p><span
  m="422380">How many choices do we have at this step?</span></p><p><span
  m="424765">Well, we have already used one of the available elements,</span>
  <span m="430180">which means that there's n minus 1 elements to choose</span>
  <span m="433280">from at the next stage.</span></p><p><span m="437160">At this
  point, we have used 2 of the elements.</span></p><p><span m="440190">There is
  n minus 2 that are left.</span></p><p><span m="444120">We pick one of them and
  put it in the third slot, and we have</span> <span m="450100">n minus 2
  choices at this point.</span></p><p><span m="453080">We continue this
  way.</span></p><p><span m="454580">We keep going on.</span></p><p><span
  m="456230">At some point we have placed n minus 1 of the</span> <span
  m="459640">elements into slots.</span></p><p><span m="461090">There's only one
  element left, and that element, necessarily,</span> <span m="464730">will get
  into the last slot.</span></p><p><span m="467610">There are no choices to be
  made at this point.</span></p><p><span m="470730">So the overall number of
  ways that we can carry out this</span> <span m="477500">process, put the
  elements into the n slots, by the counting</span> <span m="481160">principle
  is going to be the product of the number of</span> <span m="484510">choices
  that we had at each one of the stages.</span></p><p><span m="489870">So it's
  the product of the numbers n, n minus 1, n minus</span> <span m="493710">2,
  all the way down to 1.</span></p><p><span m="497660">And this product we
  denote as a shorthand this way, which we</span> <span m="504430">read as n
  factorial.</span></p><p><span m="506300">n factorial is the product of all
  integers from 1 all the</span> <span m="511100">way up to
  n.</span></p><p><span m="512799">And in particular, the number of permutations
  of n elements</span> <span m="517640">is equal to n
  factorial.</span></p><p><span m="520900">Let us now consider another
  example.</span></p><p><span m="524039">We start again with a general set,
  which</span> <span m="528460">consists of n elements.</span></p><p><span
  m="531500">And we're interested in constructing a</span> <span
  m="535120">subset of that set.</span></p><p><span m="539472">In how many
  different ways can we do that?</span></p><p><span m="542350">How many
  different subsets are there?</span></p><p><span m="546540">Let us think of a
  sequential process through which we can</span> <span m="549700">choose the
  subset.</span></p><p><span m="551040">The sequential process proceeds by
  considering each</span> <span m="554580">one of the elements of our set, one
  at a time.</span></p><p><span m="558640">We first consider the first element,
  and</span> <span m="560750">here we have 2 choices.</span></p><p><span
  m="562650">Do we put it inside the set or not?</span></p><p><span
  m="567090">So 2 choices for the first element.</span></p><p><span
  m="569260">Then we consider the second element.</span></p><p><span
  m="571600">Again, we have 2 choices.</span></p><p><span m="572990">Do we put
  it in the subset or not?</span></p><p><span m="576910">We continue this way
  until we consider all the elements.</span></p><p><span m="582770">There's n of
  them.</span></p><p><span m="585020">And the overall number of choices that we
  have is the</span> <span m="588020">product of 2 times 2 times 2, n times,
  which is 2</span> <span m="593520">to the power n.</span></p><p><span
  m="596620">At this point, we can also do a sanity check to make sure</span>
  <span m="599760">that our answer is correct.</span></p><p><span m="602320">Let
  us consider the simple and special case where n is equal</span> <span
  m="607770">to 1, which means we're starting with this set with 1</span> <span
  m="612270">element, and we want to find the number of</span> <span
  m="614650">subsets that it has.</span></p><p><span m="616320">According to the
  answer that we derived, this should have 2</span> <span m="620820">to the
  first, that is 2 subsets.</span></p><p><span m="624740">Which ones are
  they?</span></p><p><span m="626830">One subset of this set is the set itself
  and the other</span> <span m="633160">subset is the empty
  set.</span></p><p><span m="636090">So we do have, indeed, 2 subsets out of
  that set, which</span> <span m="639720">agrees with the answer that we
  found.</span></p><p><span m="642600">Notice that when we count subsets of a
  given set, we</span> <span m="647460">count both the set itself, the whole
  set, and we also count</span> <span m="652720">the empty
  set.</span></p><p><span m="653630">All of these are subsets of our
  set.</span></p><p><span m="658960">At this point, we can now pause and you can
  try to</span> <span m="663430">answer some simple questions of the same kind
  as the ones</span> <span m="667290">that we just
  practiced.</span></p><p>&nbsp;</p>
uid: 2b2955705897c99851f452afb7997454
type: course
layout: video
---
